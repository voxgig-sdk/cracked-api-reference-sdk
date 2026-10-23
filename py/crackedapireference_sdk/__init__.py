# CrackedApiReference SDK

from crackedapireference_sdk.utility.voxgig_struct import voxgig_struct as vs
from crackedapireference_sdk.core.utility_type import CrackedApiReferenceUtility
from crackedapireference_sdk.core.spec import CrackedApiReferenceSpec
from crackedapireference_sdk.core import helpers
from crackedapireference_sdk.utility.prepare_method import allowed
from crackedapireference_sdk.utility.result_body import unreadable_body

# Load utility registration (populates Utility._registrar)
from crackedapireference_sdk.utility import register

# Load features
from crackedapireference_sdk.feature.base_feature import CrackedApiReferenceBaseFeature
from crackedapireference_sdk.features import _has_feature, _make_feature


class CrackedApiReferenceSDK:
    # The options hold the credential. A slot keeps them reachable as
    # `client.options` and out of `vars(client)` and every attribute dump;
    # the dict entry keeps the instance open for everything else.
    __slots__ = ("_options", "__dict__")

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self._options = None

        utility = CrackedApiReferenceUtility()
        self._utility = utility

        from crackedapireference_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    @property
    def options(self):
        return self._options

    @options.setter
    def options(self, value):
        self._options = value

    def __repr__(self):
        return "CrackedApiReferenceSDK(mode=" + repr(self.mode) + ")"

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return CrackedApiReferenceUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"
        method = method.upper()

        allow_method = vs.getpath(options, "allow.method")
        if not allowed(allow_method, method):
            raise ctx.make_error("spec_method_allow",
                'Method "' + method +
                '" not allowed by SDK option allow.method value: "' + str(allow_method) + '"')

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = CrackedApiReferenceSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        return allowed(vs.getpath(self.options, "allow.op"), op)

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "CrackedApiReferenceSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            # That error never passes through make_error, so it is cleaned.
            return {"ok": False, "err": utility.clean(self._rootctx, err)}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": utility.clean(ctx, fetch_err)}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            body_err = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None
                if vs.getprop(fetched, "unreadable") is True:
                    failed = None if 200 <= status < 300 else ctx.make_error(
                        "request_status",
                        "request: " + str(status) + ": " + str(vs.getprop(fetched, "statusText")))
                    body_err = unreadable_body(ctx, status, headers, vs.getprop(fetched, "body"),
                                               fetchdef.get("headers"), failed)

            out = {
                "ok": body_err is None and status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }
            if body_err is not None:
                out["err"] = utility.clean(ctx, body_err)
            return out

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("CrackedApiReferenceSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def Activate(self, data=None) -> "ActivateEntity":
        """Entity factory: client.Activate().list() / client.Activate().load({"id": ...})."""
        from crackedapireference_sdk.entity.activate_entity import ActivateEntity
        return ActivateEntity(self, data)


    def ActivateUser(self, data=None) -> "ActivateUserEntity":
        """Entity factory: client.ActivateUser().list() / client.ActivateUser().load({"id": ...})."""
        from crackedapireference_sdk.entity.activate_user_entity import ActivateUserEntity
        return ActivateUserEntity(self, data)


    def ActiveOnboarding(self, data=None) -> "ActiveOnboardingEntity":
        """Entity factory: client.ActiveOnboarding().list() / client.ActiveOnboarding().load({"id": ...})."""
        from crackedapireference_sdk.entity.active_onboarding_entity import ActiveOnboardingEntity
        return ActiveOnboardingEntity(self, data)


    def Admin(self, data=None) -> "AdminEntity":
        """Entity factory: client.Admin().list() / client.Admin().load({"id": ...})."""
        from crackedapireference_sdk.entity.admin_entity import AdminEntity
        return AdminEntity(self, data)


    def AdminAccountReset(self, data=None) -> "AdminAccountResetEntity":
        """Entity factory: client.AdminAccountReset().list() / client.AdminAccountReset().load({"id": ...})."""
        from crackedapireference_sdk.entity.admin_account_reset_entity import AdminAccountResetEntity
        return AdminAccountResetEntity(self, data)


    def AdminCarousel(self, data=None) -> "AdminCarouselEntity":
        """Entity factory: client.AdminCarousel().list() / client.AdminCarousel().load({"id": ...})."""
        from crackedapireference_sdk.entity.admin_carousel_entity import AdminCarouselEntity
        return AdminCarouselEntity(self, data)


    def AdminCarouselDemoReview(self, data=None) -> "AdminCarouselDemoReviewEntity":
        """Entity factory: client.AdminCarouselDemoReview().list() / client.AdminCarouselDemoReview().load({"id": ...})."""
        from crackedapireference_sdk.entity.admin_carousel_demo_review_entity import AdminCarouselDemoReviewEntity
        return AdminCarouselDemoReviewEntity(self, data)


    def AdminCustomer(self, data=None) -> "AdminCustomerEntity":
        """Entity factory: client.AdminCustomer().list() / client.AdminCustomer().load({"id": ...})."""
        from crackedapireference_sdk.entity.admin_customer_entity import AdminCustomerEntity
        return AdminCustomerEntity(self, data)


    def AdminCustomerSuccess(self, data=None) -> "AdminCustomerSuccessEntity":
        """Entity factory: client.AdminCustomerSuccess().list() / client.AdminCustomerSuccess().load({"id": ...})."""
        from crackedapireference_sdk.entity.admin_customer_success_entity import AdminCustomerSuccessEntity
        return AdminCustomerSuccessEntity(self, data)


    def AdminGeneratedVideo(self, data=None) -> "AdminGeneratedVideoEntity":
        """Entity factory: client.AdminGeneratedVideo().list() / client.AdminGeneratedVideo().load({"id": ...})."""
        from crackedapireference_sdk.entity.admin_generated_video_entity import AdminGeneratedVideoEntity
        return AdminGeneratedVideoEntity(self, data)


    def AdminHealthrx(self, data=None) -> "AdminHealthrxEntity":
        """Entity factory: client.AdminHealthrx().list() / client.AdminHealthrx().load({"id": ...})."""
        from crackedapireference_sdk.entity.admin_healthrx_entity import AdminHealthrxEntity
        return AdminHealthrxEntity(self, data)


    def AdminInsight(self, data=None) -> "AdminInsightEntity":
        """Entity factory: client.AdminInsight().list() / client.AdminInsight().load({"id": ...})."""
        from crackedapireference_sdk.entity.admin_insight_entity import AdminInsightEntity
        return AdminInsightEntity(self, data)


    def AdminLandingTask(self, data=None) -> "AdminLandingTaskEntity":
        """Entity factory: client.AdminLandingTask().list() / client.AdminLandingTask().load({"id": ...})."""
        from crackedapireference_sdk.entity.admin_landing_task_entity import AdminLandingTaskEntity
        return AdminLandingTaskEntity(self, data)


    def AdminMetricsSummary(self, data=None) -> "AdminMetricsSummaryEntity":
        """Entity factory: client.AdminMetricsSummary().list() / client.AdminMetricsSummary().load({"id": ...})."""
        from crackedapireference_sdk.entity.admin_metrics_summary_entity import AdminMetricsSummaryEntity
        return AdminMetricsSummaryEntity(self, data)


    def AdminPost(self, data=None) -> "AdminPostEntity":
        """Entity factory: client.AdminPost().list() / client.AdminPost().load({"id": ...})."""
        from crackedapireference_sdk.entity.admin_post_entity import AdminPostEntity
        return AdminPostEntity(self, data)


    def AdminRecentSignup(self, data=None) -> "AdminRecentSignupEntity":
        """Entity factory: client.AdminRecentSignup().list() / client.AdminRecentSignup().load({"id": ...})."""
        from crackedapireference_sdk.entity.admin_recent_signup_entity import AdminRecentSignupEntity
        return AdminRecentSignupEntity(self, data)


    def AdminSlideshowDiag(self, data=None) -> "AdminSlideshowDiagEntity":
        """Entity factory: client.AdminSlideshowDiag().list() / client.AdminSlideshowDiag().load({"id": ...})."""
        from crackedapireference_sdk.entity.admin_slideshow_diag_entity import AdminSlideshowDiagEntity
        return AdminSlideshowDiagEntity(self, data)


    def AdminSlideshowImport(self, data=None) -> "AdminSlideshowImportEntity":
        """Entity factory: client.AdminSlideshowImport().list() / client.AdminSlideshowImport().load({"id": ...})."""
        from crackedapireference_sdk.entity.admin_slideshow_import_entity import AdminSlideshowImportEntity
        return AdminSlideshowImportEntity(self, data)


    def AdminUserView(self, data=None) -> "AdminUserViewEntity":
        """Entity factory: client.AdminUserView().list() / client.AdminUserView().load({"id": ...})."""
        from crackedapireference_sdk.entity.admin_user_view_entity import AdminUserViewEntity
        return AdminUserViewEntity(self, data)


    def AdminUsersTableItem(self, data=None) -> "AdminUsersTableItemEntity":
        """Entity factory: client.AdminUsersTableItem().list() / client.AdminUsersTableItem().load({"id": ...})."""
        from crackedapireference_sdk.entity.admin_users_table_item_entity import AdminUsersTableItemEntity
        return AdminUsersTableItemEntity(self, data)


    def AdminVideoRemixer(self, data=None) -> "AdminVideoRemixerEntity":
        """Entity factory: client.AdminVideoRemixer().list() / client.AdminVideoRemixer().load({"id": ...})."""
        from crackedapireference_sdk.entity.admin_video_remixer_entity import AdminVideoRemixerEntity
        return AdminVideoRemixerEntity(self, data)


    def AdvanceStep(self, data=None) -> "AdvanceStepEntity":
        """Entity factory: client.AdvanceStep().list() / client.AdvanceStep().load({"id": ...})."""
        from crackedapireference_sdk.entity.advance_step_entity import AdvanceStepEntity
        return AdvanceStepEntity(self, data)


    def Agent(self, data=None) -> "AgentEntity":
        """Entity factory: client.Agent().list() / client.Agent().load({"id": ...})."""
        from crackedapireference_sdk.entity.agent_entity import AgentEntity
        return AgentEntity(self, data)


    def AgentAccessCustomersHealth(self, data=None) -> "AgentAccessCustomersHealthEntity":
        """Entity factory: client.AgentAccessCustomersHealth().list() / client.AgentAccessCustomersHealth().load({"id": ...})."""
        from crackedapireference_sdk.entity.agent_access_customers_health_entity import AgentAccessCustomersHealthEntity
        return AgentAccessCustomersHealthEntity(self, data)


    def AgentAccessOverview(self, data=None) -> "AgentAccessOverviewEntity":
        """Entity factory: client.AgentAccessOverview().list() / client.AgentAccessOverview().load({"id": ...})."""
        from crackedapireference_sdk.entity.agent_access_overview_entity import AgentAccessOverviewEntity
        return AgentAccessOverviewEntity(self, data)


    def AgentAccessPhilHourlyNotification(self, data=None) -> "AgentAccessPhilHourlyNotificationEntity":
        """Entity factory: client.AgentAccessPhilHourlyNotification().list() / client.AgentAccessPhilHourlyNotification().load({"id": ...})."""
        from crackedapireference_sdk.entity.agent_access_phil_hourly_notification_entity import AgentAccessPhilHourlyNotificationEntity
        return AgentAccessPhilHourlyNotificationEntity(self, data)


    def AgentAccessPhilStatsRefresh(self, data=None) -> "AgentAccessPhilStatsRefreshEntity":
        """Entity factory: client.AgentAccessPhilStatsRefresh().list() / client.AgentAccessPhilStatsRefresh().load({"id": ...})."""
        from crackedapireference_sdk.entity.agent_access_phil_stats_refresh_entity import AgentAccessPhilStatsRefreshEntity
        return AgentAccessPhilStatsRefreshEntity(self, data)


    def AgentAccessPhilVideo(self, data=None) -> "AgentAccessPhilVideoEntity":
        """Entity factory: client.AgentAccessPhilVideo().list() / client.AgentAccessPhilVideo().load({"id": ...})."""
        from crackedapireference_sdk.entity.agent_access_phil_video_entity import AgentAccessPhilVideoEntity
        return AgentAccessPhilVideoEntity(self, data)


    def AgentAccessUserAgent(self, data=None) -> "AgentAccessUserAgentEntity":
        """Entity factory: client.AgentAccessUserAgent().list() / client.AgentAccessUserAgent().load({"id": ...})."""
        from crackedapireference_sdk.entity.agent_access_user_agent_entity import AgentAccessUserAgentEntity
        return AgentAccessUserAgentEntity(self, data)


    def AgentAccessUserPhoneFarm(self, data=None) -> "AgentAccessUserPhoneFarmEntity":
        """Entity factory: client.AgentAccessUserPhoneFarm().list() / client.AgentAccessUserPhoneFarm().load({"id": ...})."""
        from crackedapireference_sdk.entity.agent_access_user_phone_farm_entity import AgentAccessUserPhoneFarmEntity
        return AgentAccessUserPhoneFarmEntity(self, data)


    def AgentAccessUserPost(self, data=None) -> "AgentAccessUserPostEntity":
        """Entity factory: client.AgentAccessUserPost().list() / client.AgentAccessUserPost().load({"id": ...})."""
        from crackedapireference_sdk.entity.agent_access_user_post_entity import AgentAccessUserPostEntity
        return AgentAccessUserPostEntity(self, data)


    def AgentAccessUserSummary(self, data=None) -> "AgentAccessUserSummaryEntity":
        """Entity factory: client.AgentAccessUserSummary().list() / client.AgentAccessUserSummary().load({"id": ...})."""
        from crackedapireference_sdk.entity.agent_access_user_summary_entity import AgentAccessUserSummaryEntity
        return AgentAccessUserSummaryEntity(self, data)


    def AgentAccessUserVideo(self, data=None) -> "AgentAccessUserVideoEntity":
        """Entity factory: client.AgentAccessUserVideo().list() / client.AgentAccessUserVideo().load({"id": ...})."""
        from crackedapireference_sdk.entity.agent_access_user_video_entity import AgentAccessUserVideoEntity
        return AgentAccessUserVideoEntity(self, data)


    def AgentAccessUserWinningAd(self, data=None) -> "AgentAccessUserWinningAdEntity":
        """Entity factory: client.AgentAccessUserWinningAd().list() / client.AgentAccessUserWinningAd().load({"id": ...})."""
        from crackedapireference_sdk.entity.agent_access_user_winning_ad_entity import AgentAccessUserWinningAdEntity
        return AgentAccessUserWinningAdEntity(self, data)


    def AgentAccessWinningAdsSummary(self, data=None) -> "AgentAccessWinningAdsSummaryEntity":
        """Entity factory: client.AgentAccessWinningAdsSummary().list() / client.AgentAccessWinningAdsSummary().load({"id": ...})."""
        from crackedapireference_sdk.entity.agent_access_winning_ads_summary_entity import AgentAccessWinningAdsSummaryEntity
        return AgentAccessWinningAdsSummaryEntity(self, data)


    def AgentDetail(self, data=None) -> "AgentDetailEntity":
        """Entity factory: client.AgentDetail().list() / client.AgentDetail().load({"id": ...})."""
        from crackedapireference_sdk.entity.agent_detail_entity import AgentDetailEntity
        return AgentDetailEntity(self, data)


    def AgentHealth(self, data=None) -> "AgentHealthEntity":
        """Entity factory: client.AgentHealth().list() / client.AgentHealth().load({"id": ...})."""
        from crackedapireference_sdk.entity.agent_health_entity import AgentHealthEntity
        return AgentHealthEntity(self, data)


    def AgentHealthCustomerOption(self, data=None) -> "AgentHealthCustomerOptionEntity":
        """Entity factory: client.AgentHealthCustomerOption().list() / client.AgentHealthCustomerOption().load({"id": ...})."""
        from crackedapireference_sdk.entity.agent_health_customer_option_entity import AgentHealthCustomerOptionEntity
        return AgentHealthCustomerOptionEntity(self, data)


    def AgentHealthDetail(self, data=None) -> "AgentHealthDetailEntity":
        """Entity factory: client.AgentHealthDetail().list() / client.AgentHealthDetail().load({"id": ...})."""
        from crackedapireference_sdk.entity.agent_health_detail_entity import AgentHealthDetailEntity
        return AgentHealthDetailEntity(self, data)


    def AgentPost(self, data=None) -> "AgentPostEntity":
        """Entity factory: client.AgentPost().list() / client.AgentPost().load({"id": ...})."""
        from crackedapireference_sdk.entity.agent_post_entity import AgentPostEntity
        return AgentPostEntity(self, data)


    def AgentStat(self, data=None) -> "AgentStatEntity":
        """Entity factory: client.AgentStat().list() / client.AgentStat().load({"id": ...})."""
        from crackedapireference_sdk.entity.agent_stat_entity import AgentStatEntity
        return AgentStatEntity(self, data)


    def AgentSummary(self, data=None) -> "AgentSummaryEntity":
        """Entity factory: client.AgentSummary().list() / client.AgentSummary().load({"id": ...})."""
        from crackedapireference_sdk.entity.agent_summary_entity import AgentSummaryEntity
        return AgentSummaryEntity(self, data)


    def AgentsSummary(self, data=None) -> "AgentsSummaryEntity":
        """Entity factory: client.AgentsSummary().list() / client.AgentsSummary().load({"id": ...})."""
        from crackedapireference_sdk.entity.agents_summary_entity import AgentsSummaryEntity
        return AgentsSummaryEntity(self, data)


    def AnalysisStatus(self, data=None) -> "AnalysisStatusEntity":
        """Entity factory: client.AnalysisStatus().list() / client.AnalysisStatus().load({"id": ...})."""
        from crackedapireference_sdk.entity.analysis_status_entity import AnalysisStatusEntity
        return AnalysisStatusEntity(self, data)


    def AnalyticsPost(self, data=None) -> "AnalyticsPostEntity":
        """Entity factory: client.AnalyticsPost().list() / client.AnalyticsPost().load({"id": ...})."""
        from crackedapireference_sdk.entity.analytics_post_entity import AnalyticsPostEntity
        return AnalyticsPostEntity(self, data)


    def AnalyzeProduct(self, data=None) -> "AnalyzeProductEntity":
        """Entity factory: client.AnalyzeProduct().list() / client.AnalyzeProduct().load({"id": ...})."""
        from crackedapireference_sdk.entity.analyze_product_entity import AnalyzeProductEntity
        return AnalyzeProductEntity(self, data)


    def AssignAgent(self, data=None) -> "AssignAgentEntity":
        """Entity factory: client.AssignAgent().list() / client.AssignAgent().load({"id": ...})."""
        from crackedapireference_sdk.entity.assign_agent_entity import AssignAgentEntity
        return AssignAgentEntity(self, data)


    def Auth(self, data=None) -> "AuthEntity":
        """Entity factory: client.Auth().list() / client.Auth().load({"id": ...})."""
        from crackedapireference_sdk.entity.auth_entity import AuthEntity
        return AuthEntity(self, data)


    def AutoScheduleSetting(self, data=None) -> "AutoScheduleSettingEntity":
        """Entity factory: client.AutoScheduleSetting().list() / client.AutoScheduleSetting().load({"id": ...})."""
        from crackedapireference_sdk.entity.auto_schedule_setting_entity import AutoScheduleSettingEntity
        return AutoScheduleSettingEntity(self, data)


    def BulkTikTokStatsUpdate(self, data=None) -> "BulkTikTokStatsUpdateEntity":
        """Entity factory: client.BulkTikTokStatsUpdate().list() / client.BulkTikTokStatsUpdate().load({"id": ...})."""
        from crackedapireference_sdk.entity.bulk_tik_tok_stats_update_entity import BulkTikTokStatsUpdateEntity
        return BulkTikTokStatsUpdateEntity(self, data)


    def Carousel(self, data=None) -> "CarouselEntity":
        """Entity factory: client.Carousel().list() / client.Carousel().load({"id": ...})."""
        from crackedapireference_sdk.entity.carousel_entity import CarouselEntity
        return CarouselEntity(self, data)


    def CarouselAgentDetail(self, data=None) -> "CarouselAgentDetailEntity":
        """Entity factory: client.CarouselAgentDetail().list() / client.CarouselAgentDetail().load({"id": ...})."""
        from crackedapireference_sdk.entity.carousel_agent_detail_entity import CarouselAgentDetailEntity
        return CarouselAgentDetailEntity(self, data)


    def CarouselStatus(self, data=None) -> "CarouselStatusEntity":
        """Entity factory: client.CarouselStatus().list() / client.CarouselStatus().load({"id": ...})."""
        from crackedapireference_sdk.entity.carousel_status_entity import CarouselStatusEntity
        return CarouselStatusEntity(self, data)


    def Chat(self, data=None) -> "ChatEntity":
        """Entity factory: client.Chat().list() / client.Chat().load({"id": ...})."""
        from crackedapireference_sdk.entity.chat_entity import ChatEntity
        return ChatEntity(self, data)


    def ChatHistory(self, data=None) -> "ChatHistoryEntity":
        """Entity factory: client.ChatHistory().list() / client.ChatHistory().load({"id": ...})."""
        from crackedapireference_sdk.entity.chat_history_entity import ChatHistoryEntity
        return ChatHistoryEntity(self, data)


    def ChatSession(self, data=None) -> "ChatSessionEntity":
        """Entity factory: client.ChatSession().list() / client.ChatSession().load({"id": ...})."""
        from crackedapireference_sdk.entity.chat_session_entity import ChatSessionEntity
        return ChatSessionEntity(self, data)


    def Comment(self, data=None) -> "CommentEntity":
        """Entity factory: client.Comment().list() / client.Comment().load({"id": ...})."""
        from crackedapireference_sdk.entity.comment_entity import CommentEntity
        return CommentEntity(self, data)


    def CommentCampaign(self, data=None) -> "CommentCampaignEntity":
        """Entity factory: client.CommentCampaign().list() / client.CommentCampaign().load({"id": ...})."""
        from crackedapireference_sdk.entity.comment_campaign_entity import CommentCampaignEntity
        return CommentCampaignEntity(self, data)


    def CompleteChatCheckout(self, data=None) -> "CompleteChatCheckoutEntity":
        """Entity factory: client.CompleteChatCheckout().list() / client.CompleteChatCheckout().load({"id": ...})."""
        from crackedapireference_sdk.entity.complete_chat_checkout_entity import CompleteChatCheckoutEntity
        return CompleteChatCheckoutEntity(self, data)


    def CreateBlackoutSora2Video(self, data=None) -> "CreateBlackoutSora2VideoEntity":
        """Entity factory: client.CreateBlackoutSora2Video().list() / client.CreateBlackoutSora2Video().load({"id": ...})."""
        from crackedapireference_sdk.entity.create_blackout_sora2_video_entity import CreateBlackoutSora2VideoEntity
        return CreateBlackoutSora2VideoEntity(self, data)


    def CreateCarousel(self, data=None) -> "CreateCarouselEntity":
        """Entity factory: client.CreateCarousel().list() / client.CreateCarousel().load({"id": ...})."""
        from crackedapireference_sdk.entity.create_carousel_entity import CreateCarouselEntity
        return CreateCarouselEntity(self, data)


    def CreateProduct(self, data=None) -> "CreateProductEntity":
        """Entity factory: client.CreateProduct().list() / client.CreateProduct().load({"id": ...})."""
        from crackedapireference_sdk.entity.create_product_entity import CreateProductEntity
        return CreateProductEntity(self, data)


    def CreateResetProductV6(self, data=None) -> "CreateResetProductV6Entity":
        """Entity factory: client.CreateResetProductV6().list() / client.CreateResetProductV6().load({"id": ...})."""
        from crackedapireference_sdk.entity.create_reset_product_v6_entity import CreateResetProductV6Entity
        return CreateResetProductV6Entity(self, data)


    def CreateSora2Video(self, data=None) -> "CreateSora2VideoEntity":
        """Entity factory: client.CreateSora2Video().list() / client.CreateSora2Video().load({"id": ...})."""
        from crackedapireference_sdk.entity.create_sora2_video_entity import CreateSora2VideoEntity
        return CreateSora2VideoEntity(self, data)


    def CreateVariation(self, data=None) -> "CreateVariationEntity":
        """Entity factory: client.CreateVariation().list() / client.CreateVariation().load({"id": ...})."""
        from crackedapireference_sdk.entity.create_variation_entity import CreateVariationEntity
        return CreateVariationEntity(self, data)


    def Customer(self, data=None) -> "CustomerEntity":
        """Entity factory: client.Customer().list() / client.Customer().load({"id": ...})."""
        from crackedapireference_sdk.entity.customer_entity import CustomerEntity
        return CustomerEntity(self, data)


    def CustomerHealth(self, data=None) -> "CustomerHealthEntity":
        """Entity factory: client.CustomerHealth().list() / client.CustomerHealth().load({"id": ...})."""
        from crackedapireference_sdk.entity.customer_health_entity import CustomerHealthEntity
        return CustomerHealthEntity(self, data)


    def CustomerHealthAllCustomersItem(self, data=None) -> "CustomerHealthAllCustomersItemEntity":
        """Entity factory: client.CustomerHealthAllCustomersItem().list() / client.CustomerHealthAllCustomersItem().load({"id": ...})."""
        from crackedapireference_sdk.entity.customer_health_all_customers_item_entity import CustomerHealthAllCustomersItemEntity
        return CustomerHealthAllCustomersItemEntity(self, data)


    def CustomerHealthViewsSummary(self, data=None) -> "CustomerHealthViewsSummaryEntity":
        """Entity factory: client.CustomerHealthViewsSummary().list() / client.CustomerHealthViewsSummary().load({"id": ...})."""
        from crackedapireference_sdk.entity.customer_health_views_summary_entity import CustomerHealthViewsSummaryEntity
        return CustomerHealthViewsSummaryEntity(self, data)


    def Daily(self, data=None) -> "DailyEntity":
        """Entity factory: client.Daily().list() / client.Daily().load({"id": ...})."""
        from crackedapireference_sdk.entity.daily_entity import DailyEntity
        return DailyEntity(self, data)


    def DailyStatus(self, data=None) -> "DailyStatusEntity":
        """Entity factory: client.DailyStatus().list() / client.DailyStatus().load({"id": ...})."""
        from crackedapireference_sdk.entity.daily_status_entity import DailyStatusEntity
        return DailyStatusEntity(self, data)


    def DedicatedAgentsDashboard(self, data=None) -> "DedicatedAgentsDashboardEntity":
        """Entity factory: client.DedicatedAgentsDashboard().list() / client.DedicatedAgentsDashboard().load({"id": ...})."""
        from crackedapireference_sdk.entity.dedicated_agents_dashboard_entity import DedicatedAgentsDashboardEntity
        return DedicatedAgentsDashboardEntity(self, data)


    def EnterpriseAgent(self, data=None) -> "EnterpriseAgentEntity":
        """Entity factory: client.EnterpriseAgent().list() / client.EnterpriseAgent().load({"id": ...})."""
        from crackedapireference_sdk.entity.enterprise_agent_entity import EnterpriseAgentEntity
        return EnterpriseAgentEntity(self, data)


    def EnterpriseProduct(self, data=None) -> "EnterpriseProductEntity":
        """Entity factory: client.EnterpriseProduct().list() / client.EnterpriseProduct().load({"id": ...})."""
        from crackedapireference_sdk.entity.enterprise_product_entity import EnterpriseProductEntity
        return EnterpriseProductEntity(self, data)


    def ExactAvailability(self, data=None) -> "ExactAvailabilityEntity":
        """Entity factory: client.ExactAvailability().list() / client.ExactAvailability().load({"id": ...})."""
        from crackedapireference_sdk.entity.exact_availability_entity import ExactAvailabilityEntity
        return ExactAvailabilityEntity(self, data)


    def ExactFormula(self, data=None) -> "ExactFormulaEntity":
        """Entity factory: client.ExactFormula().list() / client.ExactFormula().load({"id": ...})."""
        from crackedapireference_sdk.entity.exact_formula_entity import ExactFormulaEntity
        return ExactFormulaEntity(self, data)


    def ExtractV2(self, data=None) -> "ExtractV2Entity":
        """Entity factory: client.ExtractV2().list() / client.ExtractV2().load({"id": ...})."""
        from crackedapireference_sdk.entity.extract_v2_entity import ExtractV2Entity
        return ExtractV2Entity(self, data)


    def FailedPost(self, data=None) -> "FailedPostEntity":
        """Entity factory: client.FailedPost().list() / client.FailedPost().load({"id": ...})."""
        from crackedapireference_sdk.entity.failed_post_entity import FailedPostEntity
        return FailedPostEntity(self, data)


    def File(self, data=None) -> "FileEntity":
        """Entity factory: client.File().list() / client.File().load({"id": ...})."""
        from crackedapireference_sdk.entity.file_entity import FileEntity
        return FileEntity(self, data)


    def GenerateBlackoutSora2Prompt(self, data=None) -> "GenerateBlackoutSora2PromptEntity":
        """Entity factory: client.GenerateBlackoutSora2Prompt().list() / client.GenerateBlackoutSora2Prompt().load({"id": ...})."""
        from crackedapireference_sdk.entity.generate_blackout_sora2_prompt_entity import GenerateBlackoutSora2PromptEntity
        return GenerateBlackoutSora2PromptEntity(self, data)


    def GeneratePomelliDemo(self, data=None) -> "GeneratePomelliDemoEntity":
        """Entity factory: client.GeneratePomelliDemo().list() / client.GeneratePomelliDemo().load({"id": ...})."""
        from crackedapireference_sdk.entity.generate_pomelli_demo_entity import GeneratePomelliDemoEntity
        return GeneratePomelliDemoEntity(self, data)


    def GeneratePrompt(self, data=None) -> "GeneratePromptEntity":
        """Entity factory: client.GeneratePrompt().list() / client.GeneratePrompt().load({"id": ...})."""
        from crackedapireference_sdk.entity.generate_prompt_entity import GeneratePromptEntity
        return GeneratePromptEntity(self, data)


    def GenerateSora2Prompt(self, data=None) -> "GenerateSora2PromptEntity":
        """Entity factory: client.GenerateSora2Prompt().list() / client.GenerateSora2Prompt().load({"id": ...})."""
        from crackedapireference_sdk.entity.generate_sora2_prompt_entity import GenerateSora2PromptEntity
        return GenerateSora2PromptEntity(self, data)


    def Healthrx(self, data=None) -> "HealthrxEntity":
        """Entity factory: client.Healthrx().list() / client.Healthrx().load({"id": ...})."""
        from crackedapireference_sdk.entity.healthrx_entity import HealthrxEntity
        return HealthrxEntity(self, data)


    def InitResetProductV6(self, data=None) -> "InitResetProductV6Entity":
        """Entity factory: client.InitResetProductV6().list() / client.InitResetProductV6().load({"id": ...})."""
        from crackedapireference_sdk.entity.init_reset_product_v6_entity import InitResetProductV6Entity
        return InitResetProductV6Entity(self, data)


    def Iri(self, data=None) -> "IriEntity":
        """Entity factory: client.Iri().list() / client.Iri().load({"id": ...})."""
        from crackedapireference_sdk.entity.iri_entity import IriEntity
        return IriEntity(self, data)


    def IrisCapability(self, data=None) -> "IrisCapabilityEntity":
        """Entity factory: client.IrisCapability().list() / client.IrisCapability().load({"id": ...})."""
        from crackedapireference_sdk.entity.iris_capability_entity import IrisCapabilityEntity
        return IrisCapabilityEntity(self, data)


    def IrisChat(self, data=None) -> "IrisChatEntity":
        """Entity factory: client.IrisChat().list() / client.IrisChat().load({"id": ...})."""
        from crackedapireference_sdk.entity.iris_chat_entity import IrisChatEntity
        return IrisChatEntity(self, data)


    def IrisConnector(self, data=None) -> "IrisConnectorEntity":
        """Entity factory: client.IrisConnector().list() / client.IrisConnector().load({"id": ...})."""
        from crackedapireference_sdk.entity.iris_connector_entity import IrisConnectorEntity
        return IrisConnectorEntity(self, data)


    def IrisStatus(self, data=None) -> "IrisStatusEntity":
        """Entity factory: client.IrisStatus().list() / client.IrisStatus().load({"id": ...})."""
        from crackedapireference_sdk.entity.iris_status_entity import IrisStatusEntity
        return IrisStatusEntity(self, data)


    def IrisTask(self, data=None) -> "IrisTaskEntity":
        """Entity factory: client.IrisTask().list() / client.IrisTask().load({"id": ...})."""
        from crackedapireference_sdk.entity.iris_task_entity import IrisTaskEntity
        return IrisTaskEntity(self, data)


    def IrisUsage(self, data=None) -> "IrisUsageEntity":
        """Entity factory: client.IrisUsage().list() / client.IrisUsage().load({"id": ...})."""
        from crackedapireference_sdk.entity.iris_usage_entity import IrisUsageEntity
        return IrisUsageEntity(self, data)


    def Landing(self, data=None) -> "LandingEntity":
        """Entity factory: client.Landing().list() / client.Landing().load({"id": ...})."""
        from crackedapireference_sdk.entity.landing_entity import LandingEntity
        return LandingEntity(self, data)


    def LandingStat(self, data=None) -> "LandingStatEntity":
        """Entity factory: client.LandingStat().list() / client.LandingStat().load({"id": ...})."""
        from crackedapireference_sdk.entity.landing_stat_entity import LandingStatEntity
        return LandingStatEntity(self, data)


    def LandingStatus(self, data=None) -> "LandingStatusEntity":
        """Entity factory: client.LandingStatus().list() / client.LandingStatus().load({"id": ...})."""
        from crackedapireference_sdk.entity.landing_status_entity import LandingStatusEntity
        return LandingStatusEntity(self, data)


    def LinkInBio(self, data=None) -> "LinkInBioEntity":
        """Entity factory: client.LinkInBio().list() / client.LinkInBio().load({"id": ...})."""
        from crackedapireference_sdk.entity.link_in_bio_entity import LinkInBioEntity
        return LinkInBioEntity(self, data)


    def LinkInDm(self, data=None) -> "LinkInDmEntity":
        """Entity factory: client.LinkInDm().list() / client.LinkInDm().load({"id": ...})."""
        from crackedapireference_sdk.entity.link_in_dm_entity import LinkInDmEntity
        return LinkInDmEntity(self, data)


    def LinkInPost(self, data=None) -> "LinkInPostEntity":
        """Entity factory: client.LinkInPost().list() / client.LinkInPost().load({"id": ...})."""
        from crackedapireference_sdk.entity.link_in_post_entity import LinkInPostEntity
        return LinkInPostEntity(self, data)


    def LinkUser(self, data=None) -> "LinkUserEntity":
        """Entity factory: client.LinkUser().list() / client.LinkUser().load({"id": ...})."""
        from crackedapireference_sdk.entity.link_user_entity import LinkUserEntity
        return LinkUserEntity(self, data)


    def MediaAsset(self, data=None) -> "MediaAssetEntity":
        """Entity factory: client.MediaAsset().list() / client.MediaAsset().load({"id": ...})."""
        from crackedapireference_sdk.entity.media_asset_entity import MediaAssetEntity
        return MediaAssetEntity(self, data)


    def Men(self, data=None) -> "MenEntity":
        """Entity factory: client.Men().list() / client.Men().load({"id": ...})."""
        from crackedapireference_sdk.entity.men_entity import MenEntity
        return MenEntity(self, data)


    def Microdrama(self, data=None) -> "MicrodramaEntity":
        """Entity factory: client.Microdrama().list() / client.Microdrama().load({"id": ...})."""
        from crackedapireference_sdk.entity.microdrama_entity import MicrodramaEntity
        return MicrodramaEntity(self, data)


    def MicrohubPublic(self, data=None) -> "MicrohubPublicEntity":
        """Entity factory: client.MicrohubPublic().list() / client.MicrohubPublic().load({"id": ...})."""
        from crackedapireference_sdk.entity.microhub_public_entity import MicrohubPublicEntity
        return MicrohubPublicEntity(self, data)


    def OnboardingStatus(self, data=None) -> "OnboardingStatusEntity":
        """Entity factory: client.OnboardingStatus().list() / client.OnboardingStatus().load({"id": ...})."""
        from crackedapireference_sdk.entity.onboarding_status_entity import OnboardingStatusEntity
        return OnboardingStatusEntity(self, data)


    def OnboardingV6(self, data=None) -> "OnboardingV6Entity":
        """Entity factory: client.OnboardingV6().list() / client.OnboardingV6().load({"id": ...})."""
        from crackedapireference_sdk.entity.onboarding_v6_entity import OnboardingV6Entity
        return OnboardingV6Entity(self, data)


    def PaidUser(self, data=None) -> "PaidUserEntity":
        """Entity factory: client.PaidUser().list() / client.PaidUser().load({"id": ...})."""
        from crackedapireference_sdk.entity.paid_user_entity import PaidUserEntity
        return PaidUserEntity(self, data)


    def Pexel(self, data=None) -> "PexelEntity":
        """Entity factory: client.Pexel().list() / client.Pexel().load({"id": ...})."""
        from crackedapireference_sdk.entity.pexel_entity import PexelEntity
        return PexelEntity(self, data)


    def PhoneAdminAvailableAgentSource(self, data=None) -> "PhoneAdminAvailableAgentSourceEntity":
        """Entity factory: client.PhoneAdminAvailableAgentSource().list() / client.PhoneAdminAvailableAgentSource().load({"id": ...})."""
        from crackedapireference_sdk.entity.phone_admin_available_agent_source_entity import PhoneAdminAvailableAgentSourceEntity
        return PhoneAdminAvailableAgentSourceEntity(self, data)


    def Product(self, data=None) -> "ProductEntity":
        """Entity factory: client.Product().list() / client.Product().load({"id": ...})."""
        from crackedapireference_sdk.entity.product_entity import ProductEntity
        return ProductEntity(self, data)


    def ProductDashboard(self, data=None) -> "ProductDashboardEntity":
        """Entity factory: client.ProductDashboard().list() / client.ProductDashboard().load({"id": ...})."""
        from crackedapireference_sdk.entity.product_dashboard_entity import ProductDashboardEntity
        return ProductDashboardEntity(self, data)


    def ProductDashboardView(self, data=None) -> "ProductDashboardViewEntity":
        """Entity factory: client.ProductDashboardView().list() / client.ProductDashboardView().load({"id": ...})."""
        from crackedapireference_sdk.entity.product_dashboard_view_entity import ProductDashboardViewEntity
        return ProductDashboardViewEntity(self, data)


    def ProductDemo(self, data=None) -> "ProductDemoEntity":
        """Entity factory: client.ProductDemo().list() / client.ProductDemo().load({"id": ...})."""
        from crackedapireference_sdk.entity.product_demo_entity import ProductDemoEntity
        return ProductDemoEntity(self, data)


    def ProductLanding(self, data=None) -> "ProductLandingEntity":
        """Entity factory: client.ProductLanding().list() / client.ProductLanding().load({"id": ...})."""
        from crackedapireference_sdk.entity.product_landing_entity import ProductLandingEntity
        return ProductLandingEntity(self, data)


    def PublicResumeStatus(self, data=None) -> "PublicResumeStatusEntity":
        """Entity factory: client.PublicResumeStatus().list() / client.PublicResumeStatus().load({"id": ...})."""
        from crackedapireference_sdk.entity.public_resume_status_entity import PublicResumeStatusEntity
        return PublicResumeStatusEntity(self, data)


    def ReRollVideo(self, data=None) -> "ReRollVideoEntity":
        """Entity factory: client.ReRollVideo().list() / client.ReRollVideo().load({"id": ...})."""
        from crackedapireference_sdk.entity.re_roll_video_entity import ReRollVideoEntity
        return ReRollVideoEntity(self, data)


    def ReadRootGet(self, data=None) -> "ReadRootGetEntity":
        """Entity factory: client.ReadRootGet().list() / client.ReadRootGet().load({"id": ...})."""
        from crackedapireference_sdk.entity.read_root_get_entity import ReadRootGetEntity
        return ReadRootGetEntity(self, data)


    def RecordDemoBooked(self, data=None) -> "RecordDemoBookedEntity":
        """Entity factory: client.RecordDemoBooked().list() / client.RecordDemoBooked().load({"id": ...})."""
        from crackedapireference_sdk.entity.record_demo_booked_entity import RecordDemoBookedEntity
        return RecordDemoBookedEntity(self, data)


    def RefreshStat(self, data=None) -> "RefreshStatEntity":
        """Entity factory: client.RefreshStat().list() / client.RefreshStat().load({"id": ...})."""
        from crackedapireference_sdk.entity.refresh_stat_entity import RefreshStatEntity
        return RefreshStatEntity(self, data)


    def RemixerClipper(self, data=None) -> "RemixerClipperEntity":
        """Entity factory: client.RemixerClipper().list() / client.RemixerClipper().load({"id": ...})."""
        from crackedapireference_sdk.entity.remixer_clipper_entity import RemixerClipperEntity
        return RemixerClipperEntity(self, data)


    def ResetProduct(self, data=None) -> "ResetProductEntity":
        """Entity factory: client.ResetProduct().list() / client.ResetProduct().load({"id": ...})."""
        from crackedapireference_sdk.entity.reset_product_entity import ResetProductEntity
        return ResetProductEntity(self, data)


    def RetryWebsiteScrape(self, data=None) -> "RetryWebsiteScrapeEntity":
        """Entity factory: client.RetryWebsiteScrape().list() / client.RetryWebsiteScrape().load({"id": ...})."""
        from crackedapireference_sdk.entity.retry_website_scrape_entity import RetryWebsiteScrapeEntity
        return RetryWebsiteScrapeEntity(self, data)


    def SaveSurvey(self, data=None) -> "SaveSurveyEntity":
        """Entity factory: client.SaveSurvey().list() / client.SaveSurvey().load({"id": ...})."""
        from crackedapireference_sdk.entity.save_survey_entity import SaveSurveyEntity
        return SaveSurveyEntity(self, data)


    def ScanSocial(self, data=None) -> "ScanSocialEntity":
        """Entity factory: client.ScanSocial().list() / client.ScanSocial().load({"id": ...})."""
        from crackedapireference_sdk.entity.scan_social_entity import ScanSocialEntity
        return ScanSocialEntity(self, data)


    def ScanSocialsPublic(self, data=None) -> "ScanSocialsPublicEntity":
        """Entity factory: client.ScanSocialsPublic().list() / client.ScanSocialsPublic().load({"id": ...})."""
        from crackedapireference_sdk.entity.scan_socials_public_entity import ScanSocialsPublicEntity
        return ScanSocialsPublicEntity(self, data)


    def ScanSocialsStatus(self, data=None) -> "ScanSocialsStatusEntity":
        """Entity factory: client.ScanSocialsStatus().list() / client.ScanSocialsStatus().load({"id": ...})."""
        from crackedapireference_sdk.entity.scan_socials_status_entity import ScanSocialsStatusEntity
        return ScanSocialsStatusEntity(self, data)


    def ScheduleV2(self, data=None) -> "ScheduleV2Entity":
        """Entity factory: client.ScheduleV2().list() / client.ScheduleV2().load({"id": ...})."""
        from crackedapireference_sdk.entity.schedule_v2_entity import ScheduleV2Entity
        return ScheduleV2Entity(self, data)


    def Scrape(self, data=None) -> "ScrapeEntity":
        """Entity factory: client.Scrape().list() / client.Scrape().load({"id": ...})."""
        from crackedapireference_sdk.entity.scrape_entity import ScrapeEntity
        return ScrapeEntity(self, data)


    def ScrapeWebsitePublic(self, data=None) -> "ScrapeWebsitePublicEntity":
        """Entity factory: client.ScrapeWebsitePublic().list() / client.ScrapeWebsitePublic().load({"id": ...})."""
        from crackedapireference_sdk.entity.scrape_website_public_entity import ScrapeWebsitePublicEntity
        return ScrapeWebsitePublicEntity(self, data)


    def ScrapedData(self, data=None) -> "ScrapedDataEntity":
        """Entity factory: client.ScrapedData().list() / client.ScrapedData().load({"id": ...})."""
        from crackedapireference_sdk.entity.scraped_data_entity import ScrapedDataEntity
        return ScrapedDataEntity(self, data)


    def ScrapingStatus(self, data=None) -> "ScrapingStatusEntity":
        """Entity factory: client.ScrapingStatus().list() / client.ScrapingStatus().load({"id": ...})."""
        from crackedapireference_sdk.entity.scraping_status_entity import ScrapingStatusEntity
        return ScrapingStatusEntity(self, data)


    def SelfServeActivate(self, data=None) -> "SelfServeActivateEntity":
        """Entity factory: client.SelfServeActivate().list() / client.SelfServeActivate().load({"id": ...})."""
        from crackedapireference_sdk.entity.self_serve_activate_entity import SelfServeActivateEntity
        return SelfServeActivateEntity(self, data)


    def Seo(self, data=None) -> "SeoEntity":
        """Entity factory: client.Seo().list() / client.Seo().load({"id": ...})."""
        from crackedapireference_sdk.entity.seo_entity import SeoEntity
        return SeoEntity(self, data)


    def SeoAiMention(self, data=None) -> "SeoAiMentionEntity":
        """Entity factory: client.SeoAiMention().list() / client.SeoAiMention().load({"id": ...})."""
        from crackedapireference_sdk.entity.seo_ai_mention_entity import SeoAiMentionEntity
        return SeoAiMentionEntity(self, data)


    def SeoBacklink(self, data=None) -> "SeoBacklinkEntity":
        """Entity factory: client.SeoBacklink().list() / client.SeoBacklink().load({"id": ...})."""
        from crackedapireference_sdk.entity.seo_backlink_entity import SeoBacklinkEntity
        return SeoBacklinkEntity(self, data)


    def SeoKeyword(self, data=None) -> "SeoKeywordEntity":
        """Entity factory: client.SeoKeyword().list() / client.SeoKeyword().load({"id": ...})."""
        from crackedapireference_sdk.entity.seo_keyword_entity import SeoKeywordEntity
        return SeoKeywordEntity(self, data)


    def SeoOverview(self, data=None) -> "SeoOverviewEntity":
        """Entity factory: client.SeoOverview().list() / client.SeoOverview().load({"id": ...})."""
        from crackedapireference_sdk.entity.seo_overview_entity import SeoOverviewEntity
        return SeoOverviewEntity(self, data)


    def SeoTraffic(self, data=None) -> "SeoTrafficEntity":
        """Entity factory: client.SeoTraffic().list() / client.SeoTraffic().load({"id": ...})."""
        from crackedapireference_sdk.entity.seo_traffic_entity import SeoTrafficEntity
        return SeoTrafficEntity(self, data)


    def ShareAccessLink(self, data=None) -> "ShareAccessLinkEntity":
        """Entity factory: client.ShareAccessLink().list() / client.ShareAccessLink().load({"id": ...})."""
        from crackedapireference_sdk.entity.share_access_link_entity import ShareAccessLinkEntity
        return ShareAccessLinkEntity(self, data)


    def Site(self, data=None) -> "SiteEntity":
        """Entity factory: client.Site().list() / client.Site().load({"id": ...})."""
        from crackedapireference_sdk.entity.site_entity import SiteEntity
        return SiteEntity(self, data)


    def Slide(self, data=None) -> "SlideEntity":
        """Entity factory: client.Slide().list() / client.Slide().load({"id": ...})."""
        from crackedapireference_sdk.entity.slide_entity import SlideEntity
        return SlideEntity(self, data)


    def SlugValidation(self, data=None) -> "SlugValidationEntity":
        """Entity factory: client.SlugValidation().list() / client.SlugValidation().load({"id": ...})."""
        from crackedapireference_sdk.entity.slug_validation_entity import SlugValidationEntity
        return SlugValidationEntity(self, data)


    def Social(self, data=None) -> "SocialEntity":
        """Entity factory: client.Social().list() / client.Social().load({"id": ...})."""
        from crackedapireference_sdk.entity.social_entity import SocialEntity
        return SocialEntity(self, data)


    def SocialScanPreview(self, data=None) -> "SocialScanPreviewEntity":
        """Entity factory: client.SocialScanPreview().list() / client.SocialScanPreview().load({"id": ...})."""
        from crackedapireference_sdk.entity.social_scan_preview_entity import SocialScanPreviewEntity
        return SocialScanPreviewEntity(self, data)


    def SocialScanProcess(self, data=None) -> "SocialScanProcessEntity":
        """Entity factory: client.SocialScanProcess().list() / client.SocialScanProcess().load({"id": ...})."""
        from crackedapireference_sdk.entity.social_scan_process_entity import SocialScanProcessEntity
        return SocialScanProcessEntity(self, data)


    def SocialScanSave(self, data=None) -> "SocialScanSaveEntity":
        """Entity factory: client.SocialScanSave().list() / client.SocialScanSave().load({"id": ...})."""
        from crackedapireference_sdk.entity.social_scan_save_entity import SocialScanSaveEntity
        return SocialScanSaveEntity(self, data)


    def Sora2Avatar(self, data=None) -> "Sora2AvatarEntity":
        """Entity factory: client.Sora2Avatar().list() / client.Sora2Avatar().load({"id": ...})."""
        from crackedapireference_sdk.entity.sora2_avatar_entity import Sora2AvatarEntity
        return Sora2AvatarEntity(self, data)


    def Sora2AvatarAssetUpload(self, data=None) -> "Sora2AvatarAssetUploadEntity":
        """Entity factory: client.Sora2AvatarAssetUpload().list() / client.Sora2AvatarAssetUpload().load({"id": ...})."""
        from crackedapireference_sdk.entity.sora2_avatar_asset_upload_entity import Sora2AvatarAssetUploadEntity
        return Sora2AvatarAssetUploadEntity(self, data)


    def Sora2AvatarStat(self, data=None) -> "Sora2AvatarStatEntity":
        """Entity factory: client.Sora2AvatarStat().list() / client.Sora2AvatarStat().load({"id": ...})."""
        from crackedapireference_sdk.entity.sora2_avatar_stat_entity import Sora2AvatarStatEntity
        return Sora2AvatarStatEntity(self, data)


    def Stat(self, data=None) -> "StatEntity":
        """Entity factory: client.Stat().list() / client.Stat().load({"id": ...})."""
        from crackedapireference_sdk.entity.stat_entity import StatEntity
        return StatEntity(self, data)


    def StatsRefreshBackfill(self, data=None) -> "StatsRefreshBackfillEntity":
        """Entity factory: client.StatsRefreshBackfill().list() / client.StatsRefreshBackfill().load({"id": ...})."""
        from crackedapireference_sdk.entity.stats_refresh_backfill_entity import StatsRefreshBackfillEntity
        return StatsRefreshBackfillEntity(self, data)


    def StatsRefreshIssue(self, data=None) -> "StatsRefreshIssueEntity":
        """Entity factory: client.StatsRefreshIssue().list() / client.StatsRefreshIssue().load({"id": ...})."""
        from crackedapireference_sdk.entity.stats_refresh_issue_entity import StatsRefreshIssueEntity
        return StatsRefreshIssueEntity(self, data)


    def StatsRefreshOverview(self, data=None) -> "StatsRefreshOverviewEntity":
        """Entity factory: client.StatsRefreshOverview().list() / client.StatsRefreshOverview().load({"id": ...})."""
        from crackedapireference_sdk.entity.stats_refresh_overview_entity import StatsRefreshOverviewEntity
        return StatsRefreshOverviewEntity(self, data)


    def StatsRefreshRunSummary(self, data=None) -> "StatsRefreshRunSummaryEntity":
        """Entity factory: client.StatsRefreshRunSummary().list() / client.StatsRefreshRunSummary().load({"id": ...})."""
        from crackedapireference_sdk.entity.stats_refresh_run_summary_entity import StatsRefreshRunSummaryEntity
        return StatsRefreshRunSummaryEntity(self, data)


    def StatsRefreshTaskTrigger(self, data=None) -> "StatsRefreshTaskTriggerEntity":
        """Entity factory: client.StatsRefreshTaskTrigger().list() / client.StatsRefreshTaskTrigger().load({"id": ...})."""
        from crackedapireference_sdk.entity.stats_refresh_task_trigger_entity import StatsRefreshTaskTriggerEntity
        return StatsRefreshTaskTriggerEntity(self, data)


    def Stripe(self, data=None) -> "StripeEntity":
        """Entity factory: client.Stripe().list() / client.Stripe().load({"id": ...})."""
        from crackedapireference_sdk.entity.stripe_entity import StripeEntity
        return StripeEntity(self, data)


    def Style(self, data=None) -> "StyleEntity":
        """Entity factory: client.Style().list() / client.Style().load({"id": ...})."""
        from crackedapireference_sdk.entity.style_entity import StyleEntity
        return StyleEntity(self, data)


    def Template(self, data=None) -> "TemplateEntity":
        """Entity factory: client.Template().list() / client.Template().load({"id": ...})."""
        from crackedapireference_sdk.entity.template_entity import TemplateEntity
        return TemplateEntity(self, data)


    def TikTokCreatorInfo(self, data=None) -> "TikTokCreatorInfoEntity":
        """Entity factory: client.TikTokCreatorInfo().list() / client.TikTokCreatorInfo().load({"id": ...})."""
        from crackedapireference_sdk.entity.tik_tok_creator_info_entity import TikTokCreatorInfoEntity
        return TikTokCreatorInfoEntity(self, data)


    def TopPost(self, data=None) -> "TopPostEntity":
        """Entity factory: client.TopPost().list() / client.TopPost().load({"id": ...})."""
        from crackedapireference_sdk.entity.top_post_entity import TopPostEntity
        return TopPostEntity(self, data)


    def UploadPostAgent(self, data=None) -> "UploadPostAgentEntity":
        """Entity factory: client.UploadPostAgent().list() / client.UploadPostAgent().load({"id": ...})."""
        from crackedapireference_sdk.entity.upload_post_agent_entity import UploadPostAgentEntity
        return UploadPostAgentEntity(self, data)


    def User(self, data=None) -> "UserEntity":
        """Entity factory: client.User().list() / client.User().load({"id": ...})."""
        from crackedapireference_sdk.entity.user_entity import UserEntity
        return UserEntity(self, data)


    def UserAgent(self, data=None) -> "UserAgentEntity":
        """Entity factory: client.UserAgent().list() / client.UserAgent().load({"id": ...})."""
        from crackedapireference_sdk.entity.user_agent_entity import UserAgentEntity
        return UserAgentEntity(self, data)


    def UserHealthDetail(self, data=None) -> "UserHealthDetailEntity":
        """Entity factory: client.UserHealthDetail().list() / client.UserHealthDetail().load({"id": ...})."""
        from crackedapireference_sdk.entity.user_health_detail_entity import UserHealthDetailEntity
        return UserHealthDetailEntity(self, data)


    def UserWithAvatarSubmission(self, data=None) -> "UserWithAvatarSubmissionEntity":
        """Entity factory: client.UserWithAvatarSubmission().list() / client.UserWithAvatarSubmission().load({"id": ...})."""
        from crackedapireference_sdk.entity.user_with_avatar_submission_entity import UserWithAvatarSubmissionEntity
        return UserWithAvatarSubmissionEntity(self, data)


    def UsersHealth(self, data=None) -> "UsersHealthEntity":
        """Entity factory: client.UsersHealth().list() / client.UsersHealth().load({"id": ...})."""
        from crackedapireference_sdk.entity.users_health_entity import UsersHealthEntity
        return UsersHealthEntity(self, data)


    def Video(self, data=None) -> "VideoEntity":
        """Entity factory: client.Video().list() / client.Video().load({"id": ...})."""
        from crackedapireference_sdk.entity.video_entity import VideoEntity
        return VideoEntity(self, data)


    def VideoRemixerWorker(self, data=None) -> "VideoRemixerWorkerEntity":
        """Entity factory: client.VideoRemixerWorker().list() / client.VideoRemixerWorker().load({"id": ...})."""
        from crackedapireference_sdk.entity.video_remixer_worker_entity import VideoRemixerWorkerEntity
        return VideoRemixerWorkerEntity(self, data)


    def WatchdogRecovery(self, data=None) -> "WatchdogRecoveryEntity":
        """Entity factory: client.WatchdogRecovery().list() / client.WatchdogRecovery().load({"id": ...})."""
        from crackedapireference_sdk.entity.watchdog_recovery_entity import WatchdogRecoveryEntity
        return WatchdogRecoveryEntity(self, data)


    def WinningAd(self, data=None) -> "WinningAdEntity":
        """Entity factory: client.WinningAd().list() / client.WinningAd().load({"id": ...})."""
        from crackedapireference_sdk.entity.winning_ad_entity import WinningAdEntity
        return WinningAdEntity(self, data)


    def XAdaptation(self, data=None) -> "XAdaptationEntity":
        """Entity factory: client.XAdaptation().list() / client.XAdaptation().load({"id": ...})."""
        from crackedapireference_sdk.entity.x_adaptation_entity import XAdaptationEntity
        return XAdaptationEntity(self, data)


    def ZerohumanAdminAccount(self, data=None) -> "ZerohumanAdminAccountEntity":
        """Entity factory: client.ZerohumanAdminAccount().list() / client.ZerohumanAdminAccount().load({"id": ...})."""
        from crackedapireference_sdk.entity.zerohuman_admin_account_entity import ZerohumanAdminAccountEntity
        return ZerohumanAdminAccountEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "CrackedApiReferenceSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from crackedapireference_sdk.entity.activate_entity import ActivateEntity
    from crackedapireference_sdk.entity.activate_user_entity import ActivateUserEntity
    from crackedapireference_sdk.entity.active_onboarding_entity import ActiveOnboardingEntity
    from crackedapireference_sdk.entity.admin_entity import AdminEntity
    from crackedapireference_sdk.entity.admin_account_reset_entity import AdminAccountResetEntity
    from crackedapireference_sdk.entity.admin_carousel_entity import AdminCarouselEntity
    from crackedapireference_sdk.entity.admin_carousel_demo_review_entity import AdminCarouselDemoReviewEntity
    from crackedapireference_sdk.entity.admin_customer_entity import AdminCustomerEntity
    from crackedapireference_sdk.entity.admin_customer_success_entity import AdminCustomerSuccessEntity
    from crackedapireference_sdk.entity.admin_generated_video_entity import AdminGeneratedVideoEntity
    from crackedapireference_sdk.entity.admin_healthrx_entity import AdminHealthrxEntity
    from crackedapireference_sdk.entity.admin_insight_entity import AdminInsightEntity
    from crackedapireference_sdk.entity.admin_landing_task_entity import AdminLandingTaskEntity
    from crackedapireference_sdk.entity.admin_metrics_summary_entity import AdminMetricsSummaryEntity
    from crackedapireference_sdk.entity.admin_post_entity import AdminPostEntity
    from crackedapireference_sdk.entity.admin_recent_signup_entity import AdminRecentSignupEntity
    from crackedapireference_sdk.entity.admin_slideshow_diag_entity import AdminSlideshowDiagEntity
    from crackedapireference_sdk.entity.admin_slideshow_import_entity import AdminSlideshowImportEntity
    from crackedapireference_sdk.entity.admin_user_view_entity import AdminUserViewEntity
    from crackedapireference_sdk.entity.admin_users_table_item_entity import AdminUsersTableItemEntity
    from crackedapireference_sdk.entity.admin_video_remixer_entity import AdminVideoRemixerEntity
    from crackedapireference_sdk.entity.advance_step_entity import AdvanceStepEntity
    from crackedapireference_sdk.entity.agent_entity import AgentEntity
    from crackedapireference_sdk.entity.agent_access_customers_health_entity import AgentAccessCustomersHealthEntity
    from crackedapireference_sdk.entity.agent_access_overview_entity import AgentAccessOverviewEntity
    from crackedapireference_sdk.entity.agent_access_phil_hourly_notification_entity import AgentAccessPhilHourlyNotificationEntity
    from crackedapireference_sdk.entity.agent_access_phil_stats_refresh_entity import AgentAccessPhilStatsRefreshEntity
    from crackedapireference_sdk.entity.agent_access_phil_video_entity import AgentAccessPhilVideoEntity
    from crackedapireference_sdk.entity.agent_access_user_agent_entity import AgentAccessUserAgentEntity
    from crackedapireference_sdk.entity.agent_access_user_phone_farm_entity import AgentAccessUserPhoneFarmEntity
    from crackedapireference_sdk.entity.agent_access_user_post_entity import AgentAccessUserPostEntity
    from crackedapireference_sdk.entity.agent_access_user_summary_entity import AgentAccessUserSummaryEntity
    from crackedapireference_sdk.entity.agent_access_user_video_entity import AgentAccessUserVideoEntity
    from crackedapireference_sdk.entity.agent_access_user_winning_ad_entity import AgentAccessUserWinningAdEntity
    from crackedapireference_sdk.entity.agent_access_winning_ads_summary_entity import AgentAccessWinningAdsSummaryEntity
    from crackedapireference_sdk.entity.agent_detail_entity import AgentDetailEntity
    from crackedapireference_sdk.entity.agent_health_entity import AgentHealthEntity
    from crackedapireference_sdk.entity.agent_health_customer_option_entity import AgentHealthCustomerOptionEntity
    from crackedapireference_sdk.entity.agent_health_detail_entity import AgentHealthDetailEntity
    from crackedapireference_sdk.entity.agent_post_entity import AgentPostEntity
    from crackedapireference_sdk.entity.agent_stat_entity import AgentStatEntity
    from crackedapireference_sdk.entity.agent_summary_entity import AgentSummaryEntity
    from crackedapireference_sdk.entity.agents_summary_entity import AgentsSummaryEntity
    from crackedapireference_sdk.entity.analysis_status_entity import AnalysisStatusEntity
    from crackedapireference_sdk.entity.analytics_post_entity import AnalyticsPostEntity
    from crackedapireference_sdk.entity.analyze_product_entity import AnalyzeProductEntity
    from crackedapireference_sdk.entity.assign_agent_entity import AssignAgentEntity
    from crackedapireference_sdk.entity.auth_entity import AuthEntity
    from crackedapireference_sdk.entity.auto_schedule_setting_entity import AutoScheduleSettingEntity
    from crackedapireference_sdk.entity.bulk_tik_tok_stats_update_entity import BulkTikTokStatsUpdateEntity
    from crackedapireference_sdk.entity.carousel_entity import CarouselEntity
    from crackedapireference_sdk.entity.carousel_agent_detail_entity import CarouselAgentDetailEntity
    from crackedapireference_sdk.entity.carousel_status_entity import CarouselStatusEntity
    from crackedapireference_sdk.entity.chat_entity import ChatEntity
    from crackedapireference_sdk.entity.chat_history_entity import ChatHistoryEntity
    from crackedapireference_sdk.entity.chat_session_entity import ChatSessionEntity
    from crackedapireference_sdk.entity.comment_entity import CommentEntity
    from crackedapireference_sdk.entity.comment_campaign_entity import CommentCampaignEntity
    from crackedapireference_sdk.entity.complete_chat_checkout_entity import CompleteChatCheckoutEntity
    from crackedapireference_sdk.entity.create_blackout_sora2_video_entity import CreateBlackoutSora2VideoEntity
    from crackedapireference_sdk.entity.create_carousel_entity import CreateCarouselEntity
    from crackedapireference_sdk.entity.create_product_entity import CreateProductEntity
    from crackedapireference_sdk.entity.create_reset_product_v6_entity import CreateResetProductV6Entity
    from crackedapireference_sdk.entity.create_sora2_video_entity import CreateSora2VideoEntity
    from crackedapireference_sdk.entity.create_variation_entity import CreateVariationEntity
    from crackedapireference_sdk.entity.customer_entity import CustomerEntity
    from crackedapireference_sdk.entity.customer_health_entity import CustomerHealthEntity
    from crackedapireference_sdk.entity.customer_health_all_customers_item_entity import CustomerHealthAllCustomersItemEntity
    from crackedapireference_sdk.entity.customer_health_views_summary_entity import CustomerHealthViewsSummaryEntity
    from crackedapireference_sdk.entity.daily_entity import DailyEntity
    from crackedapireference_sdk.entity.daily_status_entity import DailyStatusEntity
    from crackedapireference_sdk.entity.dedicated_agents_dashboard_entity import DedicatedAgentsDashboardEntity
    from crackedapireference_sdk.entity.enterprise_agent_entity import EnterpriseAgentEntity
    from crackedapireference_sdk.entity.enterprise_product_entity import EnterpriseProductEntity
    from crackedapireference_sdk.entity.exact_availability_entity import ExactAvailabilityEntity
    from crackedapireference_sdk.entity.exact_formula_entity import ExactFormulaEntity
    from crackedapireference_sdk.entity.extract_v2_entity import ExtractV2Entity
    from crackedapireference_sdk.entity.failed_post_entity import FailedPostEntity
    from crackedapireference_sdk.entity.file_entity import FileEntity
    from crackedapireference_sdk.entity.generate_blackout_sora2_prompt_entity import GenerateBlackoutSora2PromptEntity
    from crackedapireference_sdk.entity.generate_pomelli_demo_entity import GeneratePomelliDemoEntity
    from crackedapireference_sdk.entity.generate_prompt_entity import GeneratePromptEntity
    from crackedapireference_sdk.entity.generate_sora2_prompt_entity import GenerateSora2PromptEntity
    from crackedapireference_sdk.entity.healthrx_entity import HealthrxEntity
    from crackedapireference_sdk.entity.init_reset_product_v6_entity import InitResetProductV6Entity
    from crackedapireference_sdk.entity.iri_entity import IriEntity
    from crackedapireference_sdk.entity.iris_capability_entity import IrisCapabilityEntity
    from crackedapireference_sdk.entity.iris_chat_entity import IrisChatEntity
    from crackedapireference_sdk.entity.iris_connector_entity import IrisConnectorEntity
    from crackedapireference_sdk.entity.iris_status_entity import IrisStatusEntity
    from crackedapireference_sdk.entity.iris_task_entity import IrisTaskEntity
    from crackedapireference_sdk.entity.iris_usage_entity import IrisUsageEntity
    from crackedapireference_sdk.entity.landing_entity import LandingEntity
    from crackedapireference_sdk.entity.landing_stat_entity import LandingStatEntity
    from crackedapireference_sdk.entity.landing_status_entity import LandingStatusEntity
    from crackedapireference_sdk.entity.link_in_bio_entity import LinkInBioEntity
    from crackedapireference_sdk.entity.link_in_dm_entity import LinkInDmEntity
    from crackedapireference_sdk.entity.link_in_post_entity import LinkInPostEntity
    from crackedapireference_sdk.entity.link_user_entity import LinkUserEntity
    from crackedapireference_sdk.entity.media_asset_entity import MediaAssetEntity
    from crackedapireference_sdk.entity.men_entity import MenEntity
    from crackedapireference_sdk.entity.microdrama_entity import MicrodramaEntity
    from crackedapireference_sdk.entity.microhub_public_entity import MicrohubPublicEntity
    from crackedapireference_sdk.entity.onboarding_status_entity import OnboardingStatusEntity
    from crackedapireference_sdk.entity.onboarding_v6_entity import OnboardingV6Entity
    from crackedapireference_sdk.entity.paid_user_entity import PaidUserEntity
    from crackedapireference_sdk.entity.pexel_entity import PexelEntity
    from crackedapireference_sdk.entity.phone_admin_available_agent_source_entity import PhoneAdminAvailableAgentSourceEntity
    from crackedapireference_sdk.entity.product_entity import ProductEntity
    from crackedapireference_sdk.entity.product_dashboard_entity import ProductDashboardEntity
    from crackedapireference_sdk.entity.product_dashboard_view_entity import ProductDashboardViewEntity
    from crackedapireference_sdk.entity.product_demo_entity import ProductDemoEntity
    from crackedapireference_sdk.entity.product_landing_entity import ProductLandingEntity
    from crackedapireference_sdk.entity.public_resume_status_entity import PublicResumeStatusEntity
    from crackedapireference_sdk.entity.re_roll_video_entity import ReRollVideoEntity
    from crackedapireference_sdk.entity.read_root_get_entity import ReadRootGetEntity
    from crackedapireference_sdk.entity.record_demo_booked_entity import RecordDemoBookedEntity
    from crackedapireference_sdk.entity.refresh_stat_entity import RefreshStatEntity
    from crackedapireference_sdk.entity.remixer_clipper_entity import RemixerClipperEntity
    from crackedapireference_sdk.entity.reset_product_entity import ResetProductEntity
    from crackedapireference_sdk.entity.retry_website_scrape_entity import RetryWebsiteScrapeEntity
    from crackedapireference_sdk.entity.save_survey_entity import SaveSurveyEntity
    from crackedapireference_sdk.entity.scan_social_entity import ScanSocialEntity
    from crackedapireference_sdk.entity.scan_socials_public_entity import ScanSocialsPublicEntity
    from crackedapireference_sdk.entity.scan_socials_status_entity import ScanSocialsStatusEntity
    from crackedapireference_sdk.entity.schedule_v2_entity import ScheduleV2Entity
    from crackedapireference_sdk.entity.scrape_entity import ScrapeEntity
    from crackedapireference_sdk.entity.scrape_website_public_entity import ScrapeWebsitePublicEntity
    from crackedapireference_sdk.entity.scraped_data_entity import ScrapedDataEntity
    from crackedapireference_sdk.entity.scraping_status_entity import ScrapingStatusEntity
    from crackedapireference_sdk.entity.self_serve_activate_entity import SelfServeActivateEntity
    from crackedapireference_sdk.entity.seo_entity import SeoEntity
    from crackedapireference_sdk.entity.seo_ai_mention_entity import SeoAiMentionEntity
    from crackedapireference_sdk.entity.seo_backlink_entity import SeoBacklinkEntity
    from crackedapireference_sdk.entity.seo_keyword_entity import SeoKeywordEntity
    from crackedapireference_sdk.entity.seo_overview_entity import SeoOverviewEntity
    from crackedapireference_sdk.entity.seo_traffic_entity import SeoTrafficEntity
    from crackedapireference_sdk.entity.share_access_link_entity import ShareAccessLinkEntity
    from crackedapireference_sdk.entity.site_entity import SiteEntity
    from crackedapireference_sdk.entity.slide_entity import SlideEntity
    from crackedapireference_sdk.entity.slug_validation_entity import SlugValidationEntity
    from crackedapireference_sdk.entity.social_entity import SocialEntity
    from crackedapireference_sdk.entity.social_scan_preview_entity import SocialScanPreviewEntity
    from crackedapireference_sdk.entity.social_scan_process_entity import SocialScanProcessEntity
    from crackedapireference_sdk.entity.social_scan_save_entity import SocialScanSaveEntity
    from crackedapireference_sdk.entity.sora2_avatar_entity import Sora2AvatarEntity
    from crackedapireference_sdk.entity.sora2_avatar_asset_upload_entity import Sora2AvatarAssetUploadEntity
    from crackedapireference_sdk.entity.sora2_avatar_stat_entity import Sora2AvatarStatEntity
    from crackedapireference_sdk.entity.stat_entity import StatEntity
    from crackedapireference_sdk.entity.stats_refresh_backfill_entity import StatsRefreshBackfillEntity
    from crackedapireference_sdk.entity.stats_refresh_issue_entity import StatsRefreshIssueEntity
    from crackedapireference_sdk.entity.stats_refresh_overview_entity import StatsRefreshOverviewEntity
    from crackedapireference_sdk.entity.stats_refresh_run_summary_entity import StatsRefreshRunSummaryEntity
    from crackedapireference_sdk.entity.stats_refresh_task_trigger_entity import StatsRefreshTaskTriggerEntity
    from crackedapireference_sdk.entity.stripe_entity import StripeEntity
    from crackedapireference_sdk.entity.style_entity import StyleEntity
    from crackedapireference_sdk.entity.template_entity import TemplateEntity
    from crackedapireference_sdk.entity.tik_tok_creator_info_entity import TikTokCreatorInfoEntity
    from crackedapireference_sdk.entity.top_post_entity import TopPostEntity
    from crackedapireference_sdk.entity.upload_post_agent_entity import UploadPostAgentEntity
    from crackedapireference_sdk.entity.user_entity import UserEntity
    from crackedapireference_sdk.entity.user_agent_entity import UserAgentEntity
    from crackedapireference_sdk.entity.user_health_detail_entity import UserHealthDetailEntity
    from crackedapireference_sdk.entity.user_with_avatar_submission_entity import UserWithAvatarSubmissionEntity
    from crackedapireference_sdk.entity.users_health_entity import UsersHealthEntity
    from crackedapireference_sdk.entity.video_entity import VideoEntity
    from crackedapireference_sdk.entity.video_remixer_worker_entity import VideoRemixerWorkerEntity
    from crackedapireference_sdk.entity.watchdog_recovery_entity import WatchdogRecoveryEntity
    from crackedapireference_sdk.entity.winning_ad_entity import WinningAdEntity
    from crackedapireference_sdk.entity.x_adaptation_entity import XAdaptationEntity
    from crackedapireference_sdk.entity.zerohuman_admin_account_entity import ZerohumanAdminAccountEntity
