# CrackedApiReference SDK

require_relative 'utility/struct/voxgig_struct'
require_relative 'core/utility_type'
require_relative 'core/spec'
require_relative 'core/helpers'

# Load utility registration
require_relative 'utility/register'

# Load config and features
require_relative 'config'
require_relative 'feature/base_feature'
require_relative 'features'

# Load typed models (Struct value objects).
require_relative 'CrackedApiReference_types'


class CrackedApiReferenceSDK
  attr_accessor :mode, :features, :options

  def initialize(options = {})
    @mode = "live"
    @features = []
    @options = nil

    utility = CrackedApiReferenceUtility.new
    @_utility = utility

    config = CrackedApiReferenceConfig.shared_config

    @_rootctx = utility.make_context.call({
      "client" => self,
      "utility" => utility,
      "config" => config,
      "options" => options || {},
      "shared" => {},
    }, nil)

    @options = utility.make_options.call(@_rootctx)

    if VoxgigStruct.getpath(@options, "feature.test.active") == true
      @mode = "test"
    end

    @_rootctx.options = @options

    # Add features in the resolved order (make_options puts an explicit array
    # order first, else defaults to test-first). Ordering matters: the `test`
    # feature installs the base mock transport and the transport features
    # (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
    # must be added before them to sit at the base of the chain.
    feature_opts = CrackedApiReferenceHelpers.to_map(VoxgigStruct.getprop(@options, "feature"))
    if feature_opts
      featureorder = VoxgigStruct.getpath(@options, "__derived__.featureorder")
      if featureorder.is_a?(Array)
        featureorder.each do |fname|
          fopts = CrackedApiReferenceHelpers.to_map(feature_opts[fname])
          if fopts && fopts["active"] == true
            utility.feature_add.call(@_rootctx, CrackedApiReferenceFeatures.make_feature(fname))
          end
        end
      end
    end

    # Add extension features.
    extend_val = VoxgigStruct.getprop(@options, "extend")
    if extend_val.is_a?(Array)
      extend_val.each do |f|
        if f.respond_to?(:get_name)
          utility.feature_add.call(@_rootctx, f)
        end
      end
    end

    # Initialize features.
    @features.each do |f|
      utility.feature_init.call(@_rootctx, f)
    end

    utility.feature_hook.call(@_rootctx, "PostConstruct")
  end

  def options_map
    out = VoxgigStruct.clone(@options)
    out.is_a?(Hash) ? out : {}
  end

  def get_utility
    CrackedApiReferenceUtility.copy(@_utility)
  end

  def get_root_ctx
    @_rootctx
  end

  # The options and the root context both hold the credential, so the
  # client's printed form is its name alone; `options_map` is the
  # documented way to read them back.
  def to_s
    "CrackedApiReference " + VoxgigStruct.jsonify({ "name" => "CrackedApiReference" })
  end

  def inspect
    to_s
  end

  def prepare(fetchargs = {})
    utility = @_utility
    fetchargs ||= {}

    ctrl = CrackedApiReferenceHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "prepare",
      "ctrl" => ctrl,
    }, @_rootctx)

    opts = @options
    path = VoxgigStruct.getprop(fetchargs, "path") || ""
    path = "" unless path.is_a?(String)
    method_val = VoxgigStruct.getprop(fetchargs, "method") || "GET"
    method_val = "GET" unless method_val.is_a?(String) && "" != method_val
    method_val = method_val.upcase
    allow_method = VoxgigStruct.getpath(opts, "allow.method")
    unless CrackedApiReferenceUtilities.allowed(allow_method, method_val)
      raise ctx.make_error("spec_method_allow",
        "Method \"#{method_val}\" not allowed by SDK option allow.method value: \"#{allow_method}\"")
    end
    params = CrackedApiReferenceHelpers.to_map(VoxgigStruct.getprop(fetchargs, "params")) || {}
    query = CrackedApiReferenceHelpers.to_map(VoxgigStruct.getprop(fetchargs, "query")) || {}
    headers = utility.prepare_headers.call(ctx)

    base = VoxgigStruct.getprop(opts, "base") || ""
    base = "" unless base.is_a?(String)
    prefix = VoxgigStruct.getprop(opts, "prefix") || ""
    prefix = "" unless prefix.is_a?(String)
    suffix = VoxgigStruct.getprop(opts, "suffix") || ""
    suffix = "" unless suffix.is_a?(String)

    ctx.spec = CrackedApiReferenceSpec.new({
      "base" => base, "prefix" => prefix, "suffix" => suffix,
      "path" => path, "method" => method_val,
      "params" => params, "query" => query, "headers" => headers,
      "body" => VoxgigStruct.getprop(fetchargs, "body"),
      "step" => "start",
    })

    # Merge user-provided headers.
    uh = VoxgigStruct.getprop(fetchargs, "headers")
    if uh.is_a?(Hash)
      uh.each { |k, v| ctx.spec.headers[k] = v }
    end

    _, err = utility.prepare_auth.call(ctx)
    raise err if err

    # make_fetch_def returns a (fetchdef, err) tuple; destructure it and
    # return just the fetchdef Hash (raising on error) so callers — including
    # direct(), which indexes fetchdef["url"] — receive a Hash, mirroring the
    # ts/py prepare().
    fetchdef, fd_err = utility.make_fetch_def.call(ctx)
    raise fd_err if fd_err

    fetchdef
  end

  # Raw endpoint access is operator-controllable, like every entity op.
  # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  # either one reaches the same endpoint.
  def direct(fetchargs = {})
    return op_denied("direct") unless op_allowed?("direct")

    raw_request(fetchargs)
  end

  # Is this raw-access op permitted by the SDK's allow.op option?
  def op_allowed?(op)
    CrackedApiReferenceUtilities.allowed(VoxgigStruct.getpath(@options, "allow.op"), op)
  end

  def op_denied(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    {
      "ok" => false,
      "err" => CrackedApiReferenceError.new(
        "#{op}_allow",
        "CrackedApiReferenceSDK: #{op}: operation not allowed by" \
        " SDK option allow.op value: \"#{allow_op}\""),
    }
  end

  # Ungated request path shared by direct and graphql, each of which checks
  # its own allow.op token first. Separate, rather than a flag on fetchargs:
  # a caller-supplied marker would let anyone opt straight back out of the
  # gate by passing it.
  def raw_request(fetchargs = {})
    utility = @_utility

    # direct() is the raw-HTTP escape hatch: it always returns a result hash
    # ({ "ok" => ..., ... }) and never raises. prepare() raises on error, so
    # trap that and surface it in the hash.
    begin
      fetchdef = prepare(fetchargs)
    rescue CrackedApiReferenceError => err
      return { "ok" => false, "err" => err }
    end

    fetchargs ||= {}
    ctrl = CrackedApiReferenceHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "direct",
      "ctrl" => ctrl,
    }, @_rootctx)

    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    return { "ok" => false, "err" => utility.clean.call(ctx, fetch_err) } if fetch_err

    if fetched.nil?
      return {
        "ok" => false,
        "err" => ctx.make_error("direct_no_response", "response: undefined"),
      }
    end

    if fetched.is_a?(Hash)
      status = CrackedApiReferenceHelpers.to_int(VoxgigStruct.getprop(fetched, "status"))
      headers = VoxgigStruct.getprop(fetched, "headers") || {}

      # No-body responses (204, 304) and explicit zero content-length must
      # skip JSON parsing — calling json() on an empty body errors.
      content_length = headers.is_a?(Hash) ? headers["content-length"] : nil
      no_body = status == 204 || status == 304 || content_length.to_s == "0"

      json_data = nil
      body_err = nil
      unless no_body
        jf = VoxgigStruct.getprop(fetched, "json")
        if jf.is_a?(Proc)
          begin
            json_data = jf.call
          rescue StandardError
            # Non-JSON body — leave data nil, keep status/headers.
            json_data = nil
          end
        end
        if true == VoxgigStruct.getprop(fetched, "unreadable")
          failed = status >= 200 && status < 300 ? nil : ctx.make_error("request_status",
            "request: #{status}: #{VoxgigStruct.getprop(fetched, 'statusText')}")
          body_err = CrackedApiReferenceUtilities::UnreadableBody.call(ctx, status, headers,
            VoxgigStruct.getprop(fetched, "body"), fetchdef["headers"], failed)
        end
      end

      out = {
        "ok" => body_err.nil? && status >= 200 && status < 300,
        "status" => status,
        "headers" => headers,
        "data" => json_data,
      }
      out["err"] = utility.clean.call(ctx, body_err) unless body_err.nil?
      return out
    end

    return {
      "ok" => false,
      "err" => ctx.make_error("direct_invalid", "invalid response type"),
    }
  end

  # Raw GraphQL access: the pressure valve that makes the generated surface's
  # deliberate omissions (per-call selection sets, typed filter builders,
  # batching, subscriptions) livable — the whole schema stays reachable.
  #
  # Thin wrapper over the same prepare/fetch path direct uses, with the one
  # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
  # as a top-level `errors` array, so status alone would report a failed
  # query as ok.
  #
  # NOTE: like direct, this bypasses the feature pipeline — no retry,
  # ratelimit or paging features apply.
  def graphql(query, variables = nil, ctrl = nil)
    return op_denied("graphql") unless op_allowed?("graphql")

    res = raw_request({
      "method" => "POST",
      "headers" => { "content-type" => "application/json" },
      "body" => { "query" => query, "variables" => variables || {} },
      "ctrl" => ctrl || {},
    })

    # Errors are read BEFORE any status check: a GraphQL parse or validation
    # failure comes back as HTTP 400 carrying the standard { errors: [...] }
    # body, and the raw path represents a non-2xx as ok:false with no err —
    # so returning early on status would discard the server's own
    # diagnostics, which are the only useful part of that response.
    errors = VoxgigStruct.getpath(res, "data.errors")

    if errors.is_a?(Array) && !errors.empty?
      first = errors[0].is_a?(Hash) ? errors[0] : {}
      msg = first["message"]
      msg = "graphql error" if msg.nil? || msg.to_s.empty?
      res["ok"] = false
      res["err"] = CrackedApiReferenceError.new(
        "graphql_error", "CrackedApiReferenceSDK: graphql: #{msg}")
      res["graphql"] = errors
    end

    res
  end


  # Canonical facade: client.Activate.list / client.Activate.load({ "id" => ... })
  def Activate(data = nil)
    require_relative 'entity/activate_entity'
    ActivateEntity.new(self, data)
  end


  # Canonical facade: client.ActivateUser.list / client.ActivateUser.load({ "id" => ... })
  def ActivateUser(data = nil)
    require_relative 'entity/activate_user_entity'
    ActivateUserEntity.new(self, data)
  end


  # Canonical facade: client.ActiveOnboarding.list / client.ActiveOnboarding.load({ "id" => ... })
  def ActiveOnboarding(data = nil)
    require_relative 'entity/active_onboarding_entity'
    ActiveOnboardingEntity.new(self, data)
  end


  # Canonical facade: client.Admin.list / client.Admin.load({ "id" => ... })
  def Admin(data = nil)
    require_relative 'entity/admin_entity'
    AdminEntity.new(self, data)
  end


  # Canonical facade: client.AdminAccountReset.list / client.AdminAccountReset.load({ "id" => ... })
  def AdminAccountReset(data = nil)
    require_relative 'entity/admin_account_reset_entity'
    AdminAccountResetEntity.new(self, data)
  end


  # Canonical facade: client.AdminCarousel.list / client.AdminCarousel.load({ "id" => ... })
  def AdminCarousel(data = nil)
    require_relative 'entity/admin_carousel_entity'
    AdminCarouselEntity.new(self, data)
  end


  # Canonical facade: client.AdminCarouselDemoReview.list / client.AdminCarouselDemoReview.load({ "id" => ... })
  def AdminCarouselDemoReview(data = nil)
    require_relative 'entity/admin_carousel_demo_review_entity'
    AdminCarouselDemoReviewEntity.new(self, data)
  end


  # Canonical facade: client.AdminCustomer.list / client.AdminCustomer.load({ "id" => ... })
  def AdminCustomer(data = nil)
    require_relative 'entity/admin_customer_entity'
    AdminCustomerEntity.new(self, data)
  end


  # Canonical facade: client.AdminCustomerSuccess.list / client.AdminCustomerSuccess.load({ "id" => ... })
  def AdminCustomerSuccess(data = nil)
    require_relative 'entity/admin_customer_success_entity'
    AdminCustomerSuccessEntity.new(self, data)
  end


  # Canonical facade: client.AdminGeneratedVideo.list / client.AdminGeneratedVideo.load({ "id" => ... })
  def AdminGeneratedVideo(data = nil)
    require_relative 'entity/admin_generated_video_entity'
    AdminGeneratedVideoEntity.new(self, data)
  end


  # Canonical facade: client.AdminHealthrx.list / client.AdminHealthrx.load({ "id" => ... })
  def AdminHealthrx(data = nil)
    require_relative 'entity/admin_healthrx_entity'
    AdminHealthrxEntity.new(self, data)
  end


  # Canonical facade: client.AdminInsight.list / client.AdminInsight.load({ "id" => ... })
  def AdminInsight(data = nil)
    require_relative 'entity/admin_insight_entity'
    AdminInsightEntity.new(self, data)
  end


  # Canonical facade: client.AdminLandingTask.list / client.AdminLandingTask.load({ "id" => ... })
  def AdminLandingTask(data = nil)
    require_relative 'entity/admin_landing_task_entity'
    AdminLandingTaskEntity.new(self, data)
  end


  # Canonical facade: client.AdminMetricsSummary.list / client.AdminMetricsSummary.load({ "id" => ... })
  def AdminMetricsSummary(data = nil)
    require_relative 'entity/admin_metrics_summary_entity'
    AdminMetricsSummaryEntity.new(self, data)
  end


  # Canonical facade: client.AdminPost.list / client.AdminPost.load({ "id" => ... })
  def AdminPost(data = nil)
    require_relative 'entity/admin_post_entity'
    AdminPostEntity.new(self, data)
  end


  # Canonical facade: client.AdminRecentSignup.list / client.AdminRecentSignup.load({ "id" => ... })
  def AdminRecentSignup(data = nil)
    require_relative 'entity/admin_recent_signup_entity'
    AdminRecentSignupEntity.new(self, data)
  end


  # Canonical facade: client.AdminSlideshowDiag.list / client.AdminSlideshowDiag.load({ "id" => ... })
  def AdminSlideshowDiag(data = nil)
    require_relative 'entity/admin_slideshow_diag_entity'
    AdminSlideshowDiagEntity.new(self, data)
  end


  # Canonical facade: client.AdminSlideshowImport.list / client.AdminSlideshowImport.load({ "id" => ... })
  def AdminSlideshowImport(data = nil)
    require_relative 'entity/admin_slideshow_import_entity'
    AdminSlideshowImportEntity.new(self, data)
  end


  # Canonical facade: client.AdminUserView.list / client.AdminUserView.load({ "id" => ... })
  def AdminUserView(data = nil)
    require_relative 'entity/admin_user_view_entity'
    AdminUserViewEntity.new(self, data)
  end


  # Canonical facade: client.AdminUsersTableItem.list / client.AdminUsersTableItem.load({ "id" => ... })
  def AdminUsersTableItem(data = nil)
    require_relative 'entity/admin_users_table_item_entity'
    AdminUsersTableItemEntity.new(self, data)
  end


  # Canonical facade: client.AdminVideoRemixer.list / client.AdminVideoRemixer.load({ "id" => ... })
  def AdminVideoRemixer(data = nil)
    require_relative 'entity/admin_video_remixer_entity'
    AdminVideoRemixerEntity.new(self, data)
  end


  # Canonical facade: client.AdvanceStep.list / client.AdvanceStep.load({ "id" => ... })
  def AdvanceStep(data = nil)
    require_relative 'entity/advance_step_entity'
    AdvanceStepEntity.new(self, data)
  end


  # Canonical facade: client.Agent.list / client.Agent.load({ "id" => ... })
  def Agent(data = nil)
    require_relative 'entity/agent_entity'
    AgentEntity.new(self, data)
  end


  # Canonical facade: client.AgentAccessCustomersHealth.list / client.AgentAccessCustomersHealth.load({ "id" => ... })
  def AgentAccessCustomersHealth(data = nil)
    require_relative 'entity/agent_access_customers_health_entity'
    AgentAccessCustomersHealthEntity.new(self, data)
  end


  # Canonical facade: client.AgentAccessOverview.list / client.AgentAccessOverview.load({ "id" => ... })
  def AgentAccessOverview(data = nil)
    require_relative 'entity/agent_access_overview_entity'
    AgentAccessOverviewEntity.new(self, data)
  end


  # Canonical facade: client.AgentAccessPhilHourlyNotification.list / client.AgentAccessPhilHourlyNotification.load({ "id" => ... })
  def AgentAccessPhilHourlyNotification(data = nil)
    require_relative 'entity/agent_access_phil_hourly_notification_entity'
    AgentAccessPhilHourlyNotificationEntity.new(self, data)
  end


  # Canonical facade: client.AgentAccessPhilStatsRefresh.list / client.AgentAccessPhilStatsRefresh.load({ "id" => ... })
  def AgentAccessPhilStatsRefresh(data = nil)
    require_relative 'entity/agent_access_phil_stats_refresh_entity'
    AgentAccessPhilStatsRefreshEntity.new(self, data)
  end


  # Canonical facade: client.AgentAccessPhilVideo.list / client.AgentAccessPhilVideo.load({ "id" => ... })
  def AgentAccessPhilVideo(data = nil)
    require_relative 'entity/agent_access_phil_video_entity'
    AgentAccessPhilVideoEntity.new(self, data)
  end


  # Canonical facade: client.AgentAccessUserAgent.list / client.AgentAccessUserAgent.load({ "id" => ... })
  def AgentAccessUserAgent(data = nil)
    require_relative 'entity/agent_access_user_agent_entity'
    AgentAccessUserAgentEntity.new(self, data)
  end


  # Canonical facade: client.AgentAccessUserPhoneFarm.list / client.AgentAccessUserPhoneFarm.load({ "id" => ... })
  def AgentAccessUserPhoneFarm(data = nil)
    require_relative 'entity/agent_access_user_phone_farm_entity'
    AgentAccessUserPhoneFarmEntity.new(self, data)
  end


  # Canonical facade: client.AgentAccessUserPost.list / client.AgentAccessUserPost.load({ "id" => ... })
  def AgentAccessUserPost(data = nil)
    require_relative 'entity/agent_access_user_post_entity'
    AgentAccessUserPostEntity.new(self, data)
  end


  # Canonical facade: client.AgentAccessUserSummary.list / client.AgentAccessUserSummary.load({ "id" => ... })
  def AgentAccessUserSummary(data = nil)
    require_relative 'entity/agent_access_user_summary_entity'
    AgentAccessUserSummaryEntity.new(self, data)
  end


  # Canonical facade: client.AgentAccessUserVideo.list / client.AgentAccessUserVideo.load({ "id" => ... })
  def AgentAccessUserVideo(data = nil)
    require_relative 'entity/agent_access_user_video_entity'
    AgentAccessUserVideoEntity.new(self, data)
  end


  # Canonical facade: client.AgentAccessUserWinningAd.list / client.AgentAccessUserWinningAd.load({ "id" => ... })
  def AgentAccessUserWinningAd(data = nil)
    require_relative 'entity/agent_access_user_winning_ad_entity'
    AgentAccessUserWinningAdEntity.new(self, data)
  end


  # Canonical facade: client.AgentAccessWinningAdsSummary.list / client.AgentAccessWinningAdsSummary.load({ "id" => ... })
  def AgentAccessWinningAdsSummary(data = nil)
    require_relative 'entity/agent_access_winning_ads_summary_entity'
    AgentAccessWinningAdsSummaryEntity.new(self, data)
  end


  # Canonical facade: client.AgentDetail.list / client.AgentDetail.load({ "id" => ... })
  def AgentDetail(data = nil)
    require_relative 'entity/agent_detail_entity'
    AgentDetailEntity.new(self, data)
  end


  # Canonical facade: client.AgentHealth.list / client.AgentHealth.load({ "id" => ... })
  def AgentHealth(data = nil)
    require_relative 'entity/agent_health_entity'
    AgentHealthEntity.new(self, data)
  end


  # Canonical facade: client.AgentHealthCustomerOption.list / client.AgentHealthCustomerOption.load({ "id" => ... })
  def AgentHealthCustomerOption(data = nil)
    require_relative 'entity/agent_health_customer_option_entity'
    AgentHealthCustomerOptionEntity.new(self, data)
  end


  # Canonical facade: client.AgentHealthDetail.list / client.AgentHealthDetail.load({ "id" => ... })
  def AgentHealthDetail(data = nil)
    require_relative 'entity/agent_health_detail_entity'
    AgentHealthDetailEntity.new(self, data)
  end


  # Canonical facade: client.AgentPost.list / client.AgentPost.load({ "id" => ... })
  def AgentPost(data = nil)
    require_relative 'entity/agent_post_entity'
    AgentPostEntity.new(self, data)
  end


  # Canonical facade: client.AgentStat.list / client.AgentStat.load({ "id" => ... })
  def AgentStat(data = nil)
    require_relative 'entity/agent_stat_entity'
    AgentStatEntity.new(self, data)
  end


  # Canonical facade: client.AgentSummary.list / client.AgentSummary.load({ "id" => ... })
  def AgentSummary(data = nil)
    require_relative 'entity/agent_summary_entity'
    AgentSummaryEntity.new(self, data)
  end


  # Canonical facade: client.AgentsSummary.list / client.AgentsSummary.load({ "id" => ... })
  def AgentsSummary(data = nil)
    require_relative 'entity/agents_summary_entity'
    AgentsSummaryEntity.new(self, data)
  end


  # Canonical facade: client.AnalysisStatus.list / client.AnalysisStatus.load({ "id" => ... })
  def AnalysisStatus(data = nil)
    require_relative 'entity/analysis_status_entity'
    AnalysisStatusEntity.new(self, data)
  end


  # Canonical facade: client.AnalyticsPost.list / client.AnalyticsPost.load({ "id" => ... })
  def AnalyticsPost(data = nil)
    require_relative 'entity/analytics_post_entity'
    AnalyticsPostEntity.new(self, data)
  end


  # Canonical facade: client.AnalyzeProduct.list / client.AnalyzeProduct.load({ "id" => ... })
  def AnalyzeProduct(data = nil)
    require_relative 'entity/analyze_product_entity'
    AnalyzeProductEntity.new(self, data)
  end


  # Canonical facade: client.AssignAgent.list / client.AssignAgent.load({ "id" => ... })
  def AssignAgent(data = nil)
    require_relative 'entity/assign_agent_entity'
    AssignAgentEntity.new(self, data)
  end


  # Canonical facade: client.Auth.list / client.Auth.load({ "id" => ... })
  def Auth(data = nil)
    require_relative 'entity/auth_entity'
    AuthEntity.new(self, data)
  end


  # Canonical facade: client.AutoScheduleSetting.list / client.AutoScheduleSetting.load({ "id" => ... })
  def AutoScheduleSetting(data = nil)
    require_relative 'entity/auto_schedule_setting_entity'
    AutoScheduleSettingEntity.new(self, data)
  end


  # Canonical facade: client.BulkTikTokStatsUpdate.list / client.BulkTikTokStatsUpdate.load({ "id" => ... })
  def BulkTikTokStatsUpdate(data = nil)
    require_relative 'entity/bulk_tik_tok_stats_update_entity'
    BulkTikTokStatsUpdateEntity.new(self, data)
  end


  # Canonical facade: client.Carousel.list / client.Carousel.load({ "id" => ... })
  def Carousel(data = nil)
    require_relative 'entity/carousel_entity'
    CarouselEntity.new(self, data)
  end


  # Canonical facade: client.CarouselAgentDetail.list / client.CarouselAgentDetail.load({ "id" => ... })
  def CarouselAgentDetail(data = nil)
    require_relative 'entity/carousel_agent_detail_entity'
    CarouselAgentDetailEntity.new(self, data)
  end


  # Canonical facade: client.CarouselStatus.list / client.CarouselStatus.load({ "id" => ... })
  def CarouselStatus(data = nil)
    require_relative 'entity/carousel_status_entity'
    CarouselStatusEntity.new(self, data)
  end


  # Canonical facade: client.Chat.list / client.Chat.load({ "id" => ... })
  def Chat(data = nil)
    require_relative 'entity/chat_entity'
    ChatEntity.new(self, data)
  end


  # Canonical facade: client.ChatHistory.list / client.ChatHistory.load({ "id" => ... })
  def ChatHistory(data = nil)
    require_relative 'entity/chat_history_entity'
    ChatHistoryEntity.new(self, data)
  end


  # Canonical facade: client.ChatSession.list / client.ChatSession.load({ "id" => ... })
  def ChatSession(data = nil)
    require_relative 'entity/chat_session_entity'
    ChatSessionEntity.new(self, data)
  end


  # Canonical facade: client.Comment.list / client.Comment.load({ "id" => ... })
  def Comment(data = nil)
    require_relative 'entity/comment_entity'
    CommentEntity.new(self, data)
  end


  # Canonical facade: client.CommentCampaign.list / client.CommentCampaign.load({ "id" => ... })
  def CommentCampaign(data = nil)
    require_relative 'entity/comment_campaign_entity'
    CommentCampaignEntity.new(self, data)
  end


  # Canonical facade: client.CompleteChatCheckout.list / client.CompleteChatCheckout.load({ "id" => ... })
  def CompleteChatCheckout(data = nil)
    require_relative 'entity/complete_chat_checkout_entity'
    CompleteChatCheckoutEntity.new(self, data)
  end


  # Canonical facade: client.CreateBlackoutSora2Video.list / client.CreateBlackoutSora2Video.load({ "id" => ... })
  def CreateBlackoutSora2Video(data = nil)
    require_relative 'entity/create_blackout_sora2_video_entity'
    CreateBlackoutSora2VideoEntity.new(self, data)
  end


  # Canonical facade: client.CreateCarousel.list / client.CreateCarousel.load({ "id" => ... })
  def CreateCarousel(data = nil)
    require_relative 'entity/create_carousel_entity'
    CreateCarouselEntity.new(self, data)
  end


  # Canonical facade: client.CreateProduct.list / client.CreateProduct.load({ "id" => ... })
  def CreateProduct(data = nil)
    require_relative 'entity/create_product_entity'
    CreateProductEntity.new(self, data)
  end


  # Canonical facade: client.CreateResetProductV6.list / client.CreateResetProductV6.load({ "id" => ... })
  def CreateResetProductV6(data = nil)
    require_relative 'entity/create_reset_product_v6_entity'
    CreateResetProductV6Entity.new(self, data)
  end


  # Canonical facade: client.CreateSora2Video.list / client.CreateSora2Video.load({ "id" => ... })
  def CreateSora2Video(data = nil)
    require_relative 'entity/create_sora2_video_entity'
    CreateSora2VideoEntity.new(self, data)
  end


  # Canonical facade: client.CreateVariation.list / client.CreateVariation.load({ "id" => ... })
  def CreateVariation(data = nil)
    require_relative 'entity/create_variation_entity'
    CreateVariationEntity.new(self, data)
  end


  # Canonical facade: client.Customer.list / client.Customer.load({ "id" => ... })
  def Customer(data = nil)
    require_relative 'entity/customer_entity'
    CustomerEntity.new(self, data)
  end


  # Canonical facade: client.CustomerHealth.list / client.CustomerHealth.load({ "id" => ... })
  def CustomerHealth(data = nil)
    require_relative 'entity/customer_health_entity'
    CustomerHealthEntity.new(self, data)
  end


  # Canonical facade: client.CustomerHealthAllCustomersItem.list / client.CustomerHealthAllCustomersItem.load({ "id" => ... })
  def CustomerHealthAllCustomersItem(data = nil)
    require_relative 'entity/customer_health_all_customers_item_entity'
    CustomerHealthAllCustomersItemEntity.new(self, data)
  end


  # Canonical facade: client.CustomerHealthViewsSummary.list / client.CustomerHealthViewsSummary.load({ "id" => ... })
  def CustomerHealthViewsSummary(data = nil)
    require_relative 'entity/customer_health_views_summary_entity'
    CustomerHealthViewsSummaryEntity.new(self, data)
  end


  # Canonical facade: client.Daily.list / client.Daily.load({ "id" => ... })
  def Daily(data = nil)
    require_relative 'entity/daily_entity'
    DailyEntity.new(self, data)
  end


  # Canonical facade: client.DailyStatus.list / client.DailyStatus.load({ "id" => ... })
  def DailyStatus(data = nil)
    require_relative 'entity/daily_status_entity'
    DailyStatusEntity.new(self, data)
  end


  # Canonical facade: client.DedicatedAgentsDashboard.list / client.DedicatedAgentsDashboard.load({ "id" => ... })
  def DedicatedAgentsDashboard(data = nil)
    require_relative 'entity/dedicated_agents_dashboard_entity'
    DedicatedAgentsDashboardEntity.new(self, data)
  end


  # Canonical facade: client.EnterpriseAgent.list / client.EnterpriseAgent.load({ "id" => ... })
  def EnterpriseAgent(data = nil)
    require_relative 'entity/enterprise_agent_entity'
    EnterpriseAgentEntity.new(self, data)
  end


  # Canonical facade: client.EnterpriseProduct.list / client.EnterpriseProduct.load({ "id" => ... })
  def EnterpriseProduct(data = nil)
    require_relative 'entity/enterprise_product_entity'
    EnterpriseProductEntity.new(self, data)
  end


  # Canonical facade: client.ExactAvailability.list / client.ExactAvailability.load({ "id" => ... })
  def ExactAvailability(data = nil)
    require_relative 'entity/exact_availability_entity'
    ExactAvailabilityEntity.new(self, data)
  end


  # Canonical facade: client.ExactFormula.list / client.ExactFormula.load({ "id" => ... })
  def ExactFormula(data = nil)
    require_relative 'entity/exact_formula_entity'
    ExactFormulaEntity.new(self, data)
  end


  # Canonical facade: client.ExtractV2.list / client.ExtractV2.load({ "id" => ... })
  def ExtractV2(data = nil)
    require_relative 'entity/extract_v2_entity'
    ExtractV2Entity.new(self, data)
  end


  # Canonical facade: client.FailedPost.list / client.FailedPost.load({ "id" => ... })
  def FailedPost(data = nil)
    require_relative 'entity/failed_post_entity'
    FailedPostEntity.new(self, data)
  end


  # Canonical facade: client.File.list / client.File.load({ "id" => ... })
  def File(data = nil)
    require_relative 'entity/file_entity'
    FileEntity.new(self, data)
  end


  # Canonical facade: client.GenerateBlackoutSora2Prompt.list / client.GenerateBlackoutSora2Prompt.load({ "id" => ... })
  def GenerateBlackoutSora2Prompt(data = nil)
    require_relative 'entity/generate_blackout_sora2_prompt_entity'
    GenerateBlackoutSora2PromptEntity.new(self, data)
  end


  # Canonical facade: client.GeneratePomelliDemo.list / client.GeneratePomelliDemo.load({ "id" => ... })
  def GeneratePomelliDemo(data = nil)
    require_relative 'entity/generate_pomelli_demo_entity'
    GeneratePomelliDemoEntity.new(self, data)
  end


  # Canonical facade: client.GeneratePrompt.list / client.GeneratePrompt.load({ "id" => ... })
  def GeneratePrompt(data = nil)
    require_relative 'entity/generate_prompt_entity'
    GeneratePromptEntity.new(self, data)
  end


  # Canonical facade: client.GenerateSora2Prompt.list / client.GenerateSora2Prompt.load({ "id" => ... })
  def GenerateSora2Prompt(data = nil)
    require_relative 'entity/generate_sora2_prompt_entity'
    GenerateSora2PromptEntity.new(self, data)
  end


  # Canonical facade: client.Healthrx.list / client.Healthrx.load({ "id" => ... })
  def Healthrx(data = nil)
    require_relative 'entity/healthrx_entity'
    HealthrxEntity.new(self, data)
  end


  # Canonical facade: client.InitResetProductV6.list / client.InitResetProductV6.load({ "id" => ... })
  def InitResetProductV6(data = nil)
    require_relative 'entity/init_reset_product_v6_entity'
    InitResetProductV6Entity.new(self, data)
  end


  # Canonical facade: client.Iri.list / client.Iri.load({ "id" => ... })
  def Iri(data = nil)
    require_relative 'entity/iri_entity'
    IriEntity.new(self, data)
  end


  # Canonical facade: client.IrisCapability.list / client.IrisCapability.load({ "id" => ... })
  def IrisCapability(data = nil)
    require_relative 'entity/iris_capability_entity'
    IrisCapabilityEntity.new(self, data)
  end


  # Canonical facade: client.IrisChat.list / client.IrisChat.load({ "id" => ... })
  def IrisChat(data = nil)
    require_relative 'entity/iris_chat_entity'
    IrisChatEntity.new(self, data)
  end


  # Canonical facade: client.IrisConnector.list / client.IrisConnector.load({ "id" => ... })
  def IrisConnector(data = nil)
    require_relative 'entity/iris_connector_entity'
    IrisConnectorEntity.new(self, data)
  end


  # Canonical facade: client.IrisStatus.list / client.IrisStatus.load({ "id" => ... })
  def IrisStatus(data = nil)
    require_relative 'entity/iris_status_entity'
    IrisStatusEntity.new(self, data)
  end


  # Canonical facade: client.IrisTask.list / client.IrisTask.load({ "id" => ... })
  def IrisTask(data = nil)
    require_relative 'entity/iris_task_entity'
    IrisTaskEntity.new(self, data)
  end


  # Canonical facade: client.IrisUsage.list / client.IrisUsage.load({ "id" => ... })
  def IrisUsage(data = nil)
    require_relative 'entity/iris_usage_entity'
    IrisUsageEntity.new(self, data)
  end


  # Canonical facade: client.Landing.list / client.Landing.load({ "id" => ... })
  def Landing(data = nil)
    require_relative 'entity/landing_entity'
    LandingEntity.new(self, data)
  end


  # Canonical facade: client.LandingStat.list / client.LandingStat.load({ "id" => ... })
  def LandingStat(data = nil)
    require_relative 'entity/landing_stat_entity'
    LandingStatEntity.new(self, data)
  end


  # Canonical facade: client.LandingStatus.list / client.LandingStatus.load({ "id" => ... })
  def LandingStatus(data = nil)
    require_relative 'entity/landing_status_entity'
    LandingStatusEntity.new(self, data)
  end


  # Canonical facade: client.LinkInBio.list / client.LinkInBio.load({ "id" => ... })
  def LinkInBio(data = nil)
    require_relative 'entity/link_in_bio_entity'
    LinkInBioEntity.new(self, data)
  end


  # Canonical facade: client.LinkInDm.list / client.LinkInDm.load({ "id" => ... })
  def LinkInDm(data = nil)
    require_relative 'entity/link_in_dm_entity'
    LinkInDmEntity.new(self, data)
  end


  # Canonical facade: client.LinkInPost.list / client.LinkInPost.load({ "id" => ... })
  def LinkInPost(data = nil)
    require_relative 'entity/link_in_post_entity'
    LinkInPostEntity.new(self, data)
  end


  # Canonical facade: client.LinkUser.list / client.LinkUser.load({ "id" => ... })
  def LinkUser(data = nil)
    require_relative 'entity/link_user_entity'
    LinkUserEntity.new(self, data)
  end


  # Canonical facade: client.MediaAsset.list / client.MediaAsset.load({ "id" => ... })
  def MediaAsset(data = nil)
    require_relative 'entity/media_asset_entity'
    MediaAssetEntity.new(self, data)
  end


  # Canonical facade: client.Men.list / client.Men.load({ "id" => ... })
  def Men(data = nil)
    require_relative 'entity/men_entity'
    MenEntity.new(self, data)
  end


  # Canonical facade: client.Microdrama.list / client.Microdrama.load({ "id" => ... })
  def Microdrama(data = nil)
    require_relative 'entity/microdrama_entity'
    MicrodramaEntity.new(self, data)
  end


  # Canonical facade: client.MicrohubPublic.list / client.MicrohubPublic.load({ "id" => ... })
  def MicrohubPublic(data = nil)
    require_relative 'entity/microhub_public_entity'
    MicrohubPublicEntity.new(self, data)
  end


  # Canonical facade: client.OnboardingStatus.list / client.OnboardingStatus.load({ "id" => ... })
  def OnboardingStatus(data = nil)
    require_relative 'entity/onboarding_status_entity'
    OnboardingStatusEntity.new(self, data)
  end


  # Canonical facade: client.OnboardingV6.list / client.OnboardingV6.load({ "id" => ... })
  def OnboardingV6(data = nil)
    require_relative 'entity/onboarding_v6_entity'
    OnboardingV6Entity.new(self, data)
  end


  # Canonical facade: client.PaidUser.list / client.PaidUser.load({ "id" => ... })
  def PaidUser(data = nil)
    require_relative 'entity/paid_user_entity'
    PaidUserEntity.new(self, data)
  end


  # Canonical facade: client.Pexel.list / client.Pexel.load({ "id" => ... })
  def Pexel(data = nil)
    require_relative 'entity/pexel_entity'
    PexelEntity.new(self, data)
  end


  # Canonical facade: client.PhoneAdminAvailableAgentSource.list / client.PhoneAdminAvailableAgentSource.load({ "id" => ... })
  def PhoneAdminAvailableAgentSource(data = nil)
    require_relative 'entity/phone_admin_available_agent_source_entity'
    PhoneAdminAvailableAgentSourceEntity.new(self, data)
  end


  # Canonical facade: client.Product.list / client.Product.load({ "id" => ... })
  def Product(data = nil)
    require_relative 'entity/product_entity'
    ProductEntity.new(self, data)
  end


  # Canonical facade: client.ProductDashboard.list / client.ProductDashboard.load({ "id" => ... })
  def ProductDashboard(data = nil)
    require_relative 'entity/product_dashboard_entity'
    ProductDashboardEntity.new(self, data)
  end


  # Canonical facade: client.ProductDashboardView.list / client.ProductDashboardView.load({ "id" => ... })
  def ProductDashboardView(data = nil)
    require_relative 'entity/product_dashboard_view_entity'
    ProductDashboardViewEntity.new(self, data)
  end


  # Canonical facade: client.ProductDemo.list / client.ProductDemo.load({ "id" => ... })
  def ProductDemo(data = nil)
    require_relative 'entity/product_demo_entity'
    ProductDemoEntity.new(self, data)
  end


  # Canonical facade: client.ProductLanding.list / client.ProductLanding.load({ "id" => ... })
  def ProductLanding(data = nil)
    require_relative 'entity/product_landing_entity'
    ProductLandingEntity.new(self, data)
  end


  # Canonical facade: client.PublicResumeStatus.list / client.PublicResumeStatus.load({ "id" => ... })
  def PublicResumeStatus(data = nil)
    require_relative 'entity/public_resume_status_entity'
    PublicResumeStatusEntity.new(self, data)
  end


  # Canonical facade: client.ReRollVideo.list / client.ReRollVideo.load({ "id" => ... })
  def ReRollVideo(data = nil)
    require_relative 'entity/re_roll_video_entity'
    ReRollVideoEntity.new(self, data)
  end


  # Canonical facade: client.ReadRootGet.list / client.ReadRootGet.load({ "id" => ... })
  def ReadRootGet(data = nil)
    require_relative 'entity/read_root_get_entity'
    ReadRootGetEntity.new(self, data)
  end


  # Canonical facade: client.RecordDemoBooked.list / client.RecordDemoBooked.load({ "id" => ... })
  def RecordDemoBooked(data = nil)
    require_relative 'entity/record_demo_booked_entity'
    RecordDemoBookedEntity.new(self, data)
  end


  # Canonical facade: client.RefreshStat.list / client.RefreshStat.load({ "id" => ... })
  def RefreshStat(data = nil)
    require_relative 'entity/refresh_stat_entity'
    RefreshStatEntity.new(self, data)
  end


  # Canonical facade: client.RemixerClipper.list / client.RemixerClipper.load({ "id" => ... })
  def RemixerClipper(data = nil)
    require_relative 'entity/remixer_clipper_entity'
    RemixerClipperEntity.new(self, data)
  end


  # Canonical facade: client.ResetProduct.list / client.ResetProduct.load({ "id" => ... })
  def ResetProduct(data = nil)
    require_relative 'entity/reset_product_entity'
    ResetProductEntity.new(self, data)
  end


  # Canonical facade: client.RetryWebsiteScrape.list / client.RetryWebsiteScrape.load({ "id" => ... })
  def RetryWebsiteScrape(data = nil)
    require_relative 'entity/retry_website_scrape_entity'
    RetryWebsiteScrapeEntity.new(self, data)
  end


  # Canonical facade: client.SaveSurvey.list / client.SaveSurvey.load({ "id" => ... })
  def SaveSurvey(data = nil)
    require_relative 'entity/save_survey_entity'
    SaveSurveyEntity.new(self, data)
  end


  # Canonical facade: client.ScanSocial.list / client.ScanSocial.load({ "id" => ... })
  def ScanSocial(data = nil)
    require_relative 'entity/scan_social_entity'
    ScanSocialEntity.new(self, data)
  end


  # Canonical facade: client.ScanSocialsPublic.list / client.ScanSocialsPublic.load({ "id" => ... })
  def ScanSocialsPublic(data = nil)
    require_relative 'entity/scan_socials_public_entity'
    ScanSocialsPublicEntity.new(self, data)
  end


  # Canonical facade: client.ScanSocialsStatus.list / client.ScanSocialsStatus.load({ "id" => ... })
  def ScanSocialsStatus(data = nil)
    require_relative 'entity/scan_socials_status_entity'
    ScanSocialsStatusEntity.new(self, data)
  end


  # Canonical facade: client.ScheduleV2.list / client.ScheduleV2.load({ "id" => ... })
  def ScheduleV2(data = nil)
    require_relative 'entity/schedule_v2_entity'
    ScheduleV2Entity.new(self, data)
  end


  # Canonical facade: client.Scrape.list / client.Scrape.load({ "id" => ... })
  def Scrape(data = nil)
    require_relative 'entity/scrape_entity'
    ScrapeEntity.new(self, data)
  end


  # Canonical facade: client.ScrapeWebsitePublic.list / client.ScrapeWebsitePublic.load({ "id" => ... })
  def ScrapeWebsitePublic(data = nil)
    require_relative 'entity/scrape_website_public_entity'
    ScrapeWebsitePublicEntity.new(self, data)
  end


  # Canonical facade: client.ScrapedData.list / client.ScrapedData.load({ "id" => ... })
  def ScrapedData(data = nil)
    require_relative 'entity/scraped_data_entity'
    ScrapedDataEntity.new(self, data)
  end


  # Canonical facade: client.ScrapingStatus.list / client.ScrapingStatus.load({ "id" => ... })
  def ScrapingStatus(data = nil)
    require_relative 'entity/scraping_status_entity'
    ScrapingStatusEntity.new(self, data)
  end


  # Canonical facade: client.SelfServeActivate.list / client.SelfServeActivate.load({ "id" => ... })
  def SelfServeActivate(data = nil)
    require_relative 'entity/self_serve_activate_entity'
    SelfServeActivateEntity.new(self, data)
  end


  # Canonical facade: client.Seo.list / client.Seo.load({ "id" => ... })
  def Seo(data = nil)
    require_relative 'entity/seo_entity'
    SeoEntity.new(self, data)
  end


  # Canonical facade: client.SeoAiMention.list / client.SeoAiMention.load({ "id" => ... })
  def SeoAiMention(data = nil)
    require_relative 'entity/seo_ai_mention_entity'
    SeoAiMentionEntity.new(self, data)
  end


  # Canonical facade: client.SeoBacklink.list / client.SeoBacklink.load({ "id" => ... })
  def SeoBacklink(data = nil)
    require_relative 'entity/seo_backlink_entity'
    SeoBacklinkEntity.new(self, data)
  end


  # Canonical facade: client.SeoKeyword.list / client.SeoKeyword.load({ "id" => ... })
  def SeoKeyword(data = nil)
    require_relative 'entity/seo_keyword_entity'
    SeoKeywordEntity.new(self, data)
  end


  # Canonical facade: client.SeoOverview.list / client.SeoOverview.load({ "id" => ... })
  def SeoOverview(data = nil)
    require_relative 'entity/seo_overview_entity'
    SeoOverviewEntity.new(self, data)
  end


  # Canonical facade: client.SeoTraffic.list / client.SeoTraffic.load({ "id" => ... })
  def SeoTraffic(data = nil)
    require_relative 'entity/seo_traffic_entity'
    SeoTrafficEntity.new(self, data)
  end


  # Canonical facade: client.ShareAccessLink.list / client.ShareAccessLink.load({ "id" => ... })
  def ShareAccessLink(data = nil)
    require_relative 'entity/share_access_link_entity'
    ShareAccessLinkEntity.new(self, data)
  end


  # Canonical facade: client.Site.list / client.Site.load({ "id" => ... })
  def Site(data = nil)
    require_relative 'entity/site_entity'
    SiteEntity.new(self, data)
  end


  # Canonical facade: client.Slide.list / client.Slide.load({ "id" => ... })
  def Slide(data = nil)
    require_relative 'entity/slide_entity'
    SlideEntity.new(self, data)
  end


  # Canonical facade: client.SlugValidation.list / client.SlugValidation.load({ "id" => ... })
  def SlugValidation(data = nil)
    require_relative 'entity/slug_validation_entity'
    SlugValidationEntity.new(self, data)
  end


  # Canonical facade: client.Social.list / client.Social.load({ "id" => ... })
  def Social(data = nil)
    require_relative 'entity/social_entity'
    SocialEntity.new(self, data)
  end


  # Canonical facade: client.SocialScanPreview.list / client.SocialScanPreview.load({ "id" => ... })
  def SocialScanPreview(data = nil)
    require_relative 'entity/social_scan_preview_entity'
    SocialScanPreviewEntity.new(self, data)
  end


  # Canonical facade: client.SocialScanProcess.list / client.SocialScanProcess.load({ "id" => ... })
  def SocialScanProcess(data = nil)
    require_relative 'entity/social_scan_process_entity'
    SocialScanProcessEntity.new(self, data)
  end


  # Canonical facade: client.SocialScanSave.list / client.SocialScanSave.load({ "id" => ... })
  def SocialScanSave(data = nil)
    require_relative 'entity/social_scan_save_entity'
    SocialScanSaveEntity.new(self, data)
  end


  # Canonical facade: client.Sora2Avatar.list / client.Sora2Avatar.load({ "id" => ... })
  def Sora2Avatar(data = nil)
    require_relative 'entity/sora2_avatar_entity'
    Sora2AvatarEntity.new(self, data)
  end


  # Canonical facade: client.Sora2AvatarAssetUpload.list / client.Sora2AvatarAssetUpload.load({ "id" => ... })
  def Sora2AvatarAssetUpload(data = nil)
    require_relative 'entity/sora2_avatar_asset_upload_entity'
    Sora2AvatarAssetUploadEntity.new(self, data)
  end


  # Canonical facade: client.Sora2AvatarStat.list / client.Sora2AvatarStat.load({ "id" => ... })
  def Sora2AvatarStat(data = nil)
    require_relative 'entity/sora2_avatar_stat_entity'
    Sora2AvatarStatEntity.new(self, data)
  end


  # Canonical facade: client.Stat.list / client.Stat.load({ "id" => ... })
  def Stat(data = nil)
    require_relative 'entity/stat_entity'
    StatEntity.new(self, data)
  end


  # Canonical facade: client.StatsRefreshBackfill.list / client.StatsRefreshBackfill.load({ "id" => ... })
  def StatsRefreshBackfill(data = nil)
    require_relative 'entity/stats_refresh_backfill_entity'
    StatsRefreshBackfillEntity.new(self, data)
  end


  # Canonical facade: client.StatsRefreshIssue.list / client.StatsRefreshIssue.load({ "id" => ... })
  def StatsRefreshIssue(data = nil)
    require_relative 'entity/stats_refresh_issue_entity'
    StatsRefreshIssueEntity.new(self, data)
  end


  # Canonical facade: client.StatsRefreshOverview.list / client.StatsRefreshOverview.load({ "id" => ... })
  def StatsRefreshOverview(data = nil)
    require_relative 'entity/stats_refresh_overview_entity'
    StatsRefreshOverviewEntity.new(self, data)
  end


  # Canonical facade: client.StatsRefreshRunSummary.list / client.StatsRefreshRunSummary.load({ "id" => ... })
  def StatsRefreshRunSummary(data = nil)
    require_relative 'entity/stats_refresh_run_summary_entity'
    StatsRefreshRunSummaryEntity.new(self, data)
  end


  # Canonical facade: client.StatsRefreshTaskTrigger.list / client.StatsRefreshTaskTrigger.load({ "id" => ... })
  def StatsRefreshTaskTrigger(data = nil)
    require_relative 'entity/stats_refresh_task_trigger_entity'
    StatsRefreshTaskTriggerEntity.new(self, data)
  end


  # Canonical facade: client.Stripe.list / client.Stripe.load({ "id" => ... })
  def Stripe(data = nil)
    require_relative 'entity/stripe_entity'
    StripeEntity.new(self, data)
  end


  # Canonical facade: client.Style.list / client.Style.load({ "id" => ... })
  def Style(data = nil)
    require_relative 'entity/style_entity'
    StyleEntity.new(self, data)
  end


  # Canonical facade: client.Template.list / client.Template.load({ "id" => ... })
  def Template(data = nil)
    require_relative 'entity/template_entity'
    TemplateEntity.new(self, data)
  end


  # Canonical facade: client.TikTokCreatorInfo.list / client.TikTokCreatorInfo.load({ "id" => ... })
  def TikTokCreatorInfo(data = nil)
    require_relative 'entity/tik_tok_creator_info_entity'
    TikTokCreatorInfoEntity.new(self, data)
  end


  # Canonical facade: client.TopPost.list / client.TopPost.load({ "id" => ... })
  def TopPost(data = nil)
    require_relative 'entity/top_post_entity'
    TopPostEntity.new(self, data)
  end


  # Canonical facade: client.UploadPostAgent.list / client.UploadPostAgent.load({ "id" => ... })
  def UploadPostAgent(data = nil)
    require_relative 'entity/upload_post_agent_entity'
    UploadPostAgentEntity.new(self, data)
  end


  # Canonical facade: client.User.list / client.User.load({ "id" => ... })
  def User(data = nil)
    require_relative 'entity/user_entity'
    UserEntity.new(self, data)
  end


  # Canonical facade: client.UserAgent.list / client.UserAgent.load({ "id" => ... })
  def UserAgent(data = nil)
    require_relative 'entity/user_agent_entity'
    UserAgentEntity.new(self, data)
  end


  # Canonical facade: client.UserHealthDetail.list / client.UserHealthDetail.load({ "id" => ... })
  def UserHealthDetail(data = nil)
    require_relative 'entity/user_health_detail_entity'
    UserHealthDetailEntity.new(self, data)
  end


  # Canonical facade: client.UserWithAvatarSubmission.list / client.UserWithAvatarSubmission.load({ "id" => ... })
  def UserWithAvatarSubmission(data = nil)
    require_relative 'entity/user_with_avatar_submission_entity'
    UserWithAvatarSubmissionEntity.new(self, data)
  end


  # Canonical facade: client.UsersHealth.list / client.UsersHealth.load({ "id" => ... })
  def UsersHealth(data = nil)
    require_relative 'entity/users_health_entity'
    UsersHealthEntity.new(self, data)
  end


  # Canonical facade: client.Video.list / client.Video.load({ "id" => ... })
  def Video(data = nil)
    require_relative 'entity/video_entity'
    VideoEntity.new(self, data)
  end


  # Canonical facade: client.VideoRemixerWorker.list / client.VideoRemixerWorker.load({ "id" => ... })
  def VideoRemixerWorker(data = nil)
    require_relative 'entity/video_remixer_worker_entity'
    VideoRemixerWorkerEntity.new(self, data)
  end


  # Canonical facade: client.WatchdogRecovery.list / client.WatchdogRecovery.load({ "id" => ... })
  def WatchdogRecovery(data = nil)
    require_relative 'entity/watchdog_recovery_entity'
    WatchdogRecoveryEntity.new(self, data)
  end


  # Canonical facade: client.WinningAd.list / client.WinningAd.load({ "id" => ... })
  def WinningAd(data = nil)
    require_relative 'entity/winning_ad_entity'
    WinningAdEntity.new(self, data)
  end


  # Canonical facade: client.XAdaptation.list / client.XAdaptation.load({ "id" => ... })
  def XAdaptation(data = nil)
    require_relative 'entity/x_adaptation_entity'
    XAdaptationEntity.new(self, data)
  end


  # Canonical facade: client.ZerohumanAdminAccount.list / client.ZerohumanAdminAccount.load({ "id" => ... })
  def ZerohumanAdminAccount(data = nil)
    require_relative 'entity/zerohuman_admin_account_entity'
    ZerohumanAdminAccountEntity.new(self, data)
  end



  def self.test(testopts = nil, sdkopts = nil)
    sdkopts = sdkopts || {}
    sdkopts = VoxgigStruct.clone(sdkopts)
    sdkopts = {} unless sdkopts.is_a?(Hash)

    testopts = testopts || {}
    testopts = VoxgigStruct.clone(testopts)
    testopts = {} unless testopts.is_a?(Hash)
    testopts["active"] = true

    VoxgigStruct.setpath(sdkopts, "feature.test", testopts)

    sdk = CrackedApiReferenceSDK.new(sdkopts)
    sdk.mode = "test"
    sdk
  end
end
