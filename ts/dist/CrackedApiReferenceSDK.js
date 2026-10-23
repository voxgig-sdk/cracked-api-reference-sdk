"use strict";
// CrackedApiReference Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.CrackedApiReferenceSDK = exports.CrackedApiReferenceEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const ActivateEntity_1 = require("./entity/ActivateEntity");
const ActivateUserEntity_1 = require("./entity/ActivateUserEntity");
const ActiveOnboardingEntity_1 = require("./entity/ActiveOnboardingEntity");
const AdminEntity_1 = require("./entity/AdminEntity");
const AdminAccountResetEntity_1 = require("./entity/AdminAccountResetEntity");
const AdminCarouselEntity_1 = require("./entity/AdminCarouselEntity");
const AdminCarouselDemoReviewEntity_1 = require("./entity/AdminCarouselDemoReviewEntity");
const AdminCustomerEntity_1 = require("./entity/AdminCustomerEntity");
const AdminCustomerSuccessEntity_1 = require("./entity/AdminCustomerSuccessEntity");
const AdminGeneratedVideoEntity_1 = require("./entity/AdminGeneratedVideoEntity");
const AdminHealthrxEntity_1 = require("./entity/AdminHealthrxEntity");
const AdminInsightEntity_1 = require("./entity/AdminInsightEntity");
const AdminLandingTaskEntity_1 = require("./entity/AdminLandingTaskEntity");
const AdminMetricsSummaryEntity_1 = require("./entity/AdminMetricsSummaryEntity");
const AdminPostEntity_1 = require("./entity/AdminPostEntity");
const AdminRecentSignupEntity_1 = require("./entity/AdminRecentSignupEntity");
const AdminSlideshowDiagEntity_1 = require("./entity/AdminSlideshowDiagEntity");
const AdminSlideshowImportEntity_1 = require("./entity/AdminSlideshowImportEntity");
const AdminUserViewEntity_1 = require("./entity/AdminUserViewEntity");
const AdminUsersTableItemEntity_1 = require("./entity/AdminUsersTableItemEntity");
const AdminVideoRemixerEntity_1 = require("./entity/AdminVideoRemixerEntity");
const AdvanceStepEntity_1 = require("./entity/AdvanceStepEntity");
const AgentEntity_1 = require("./entity/AgentEntity");
const AgentAccessCustomersHealthEntity_1 = require("./entity/AgentAccessCustomersHealthEntity");
const AgentAccessOverviewEntity_1 = require("./entity/AgentAccessOverviewEntity");
const AgentAccessPhilHourlyNotificationEntity_1 = require("./entity/AgentAccessPhilHourlyNotificationEntity");
const AgentAccessPhilStatsRefreshEntity_1 = require("./entity/AgentAccessPhilStatsRefreshEntity");
const AgentAccessPhilVideoEntity_1 = require("./entity/AgentAccessPhilVideoEntity");
const AgentAccessUserAgentEntity_1 = require("./entity/AgentAccessUserAgentEntity");
const AgentAccessUserPhoneFarmEntity_1 = require("./entity/AgentAccessUserPhoneFarmEntity");
const AgentAccessUserPostEntity_1 = require("./entity/AgentAccessUserPostEntity");
const AgentAccessUserSummaryEntity_1 = require("./entity/AgentAccessUserSummaryEntity");
const AgentAccessUserVideoEntity_1 = require("./entity/AgentAccessUserVideoEntity");
const AgentAccessUserWinningAdEntity_1 = require("./entity/AgentAccessUserWinningAdEntity");
const AgentAccessWinningAdsSummaryEntity_1 = require("./entity/AgentAccessWinningAdsSummaryEntity");
const AgentDetailEntity_1 = require("./entity/AgentDetailEntity");
const AgentHealthEntity_1 = require("./entity/AgentHealthEntity");
const AgentHealthCustomerOptionEntity_1 = require("./entity/AgentHealthCustomerOptionEntity");
const AgentHealthDetailEntity_1 = require("./entity/AgentHealthDetailEntity");
const AgentPostEntity_1 = require("./entity/AgentPostEntity");
const AgentStatEntity_1 = require("./entity/AgentStatEntity");
const AgentSummaryEntity_1 = require("./entity/AgentSummaryEntity");
const AgentsSummaryEntity_1 = require("./entity/AgentsSummaryEntity");
const AnalysisStatusEntity_1 = require("./entity/AnalysisStatusEntity");
const AnalyticsPostEntity_1 = require("./entity/AnalyticsPostEntity");
const AnalyzeProductEntity_1 = require("./entity/AnalyzeProductEntity");
const AssignAgentEntity_1 = require("./entity/AssignAgentEntity");
const AuthEntity_1 = require("./entity/AuthEntity");
const AutoScheduleSettingEntity_1 = require("./entity/AutoScheduleSettingEntity");
const BulkTikTokStatsUpdateEntity_1 = require("./entity/BulkTikTokStatsUpdateEntity");
const CarouselEntity_1 = require("./entity/CarouselEntity");
const CarouselAgentDetailEntity_1 = require("./entity/CarouselAgentDetailEntity");
const CarouselStatusEntity_1 = require("./entity/CarouselStatusEntity");
const ChatEntity_1 = require("./entity/ChatEntity");
const ChatHistoryEntity_1 = require("./entity/ChatHistoryEntity");
const ChatSessionEntity_1 = require("./entity/ChatSessionEntity");
const CommentEntity_1 = require("./entity/CommentEntity");
const CommentCampaignEntity_1 = require("./entity/CommentCampaignEntity");
const CompleteChatCheckoutEntity_1 = require("./entity/CompleteChatCheckoutEntity");
const CreateBlackoutSora2VideoEntity_1 = require("./entity/CreateBlackoutSora2VideoEntity");
const CreateCarouselEntity_1 = require("./entity/CreateCarouselEntity");
const CreateProductEntity_1 = require("./entity/CreateProductEntity");
const CreateResetProductV6Entity_1 = require("./entity/CreateResetProductV6Entity");
const CreateSora2VideoEntity_1 = require("./entity/CreateSora2VideoEntity");
const CreateVariationEntity_1 = require("./entity/CreateVariationEntity");
const CustomerEntity_1 = require("./entity/CustomerEntity");
const CustomerHealthEntity_1 = require("./entity/CustomerHealthEntity");
const CustomerHealthAllCustomersItemEntity_1 = require("./entity/CustomerHealthAllCustomersItemEntity");
const CustomerHealthViewsSummaryEntity_1 = require("./entity/CustomerHealthViewsSummaryEntity");
const DailyEntity_1 = require("./entity/DailyEntity");
const DailyStatusEntity_1 = require("./entity/DailyStatusEntity");
const DedicatedAgentsDashboardEntity_1 = require("./entity/DedicatedAgentsDashboardEntity");
const EnterpriseAgentEntity_1 = require("./entity/EnterpriseAgentEntity");
const EnterpriseProductEntity_1 = require("./entity/EnterpriseProductEntity");
const ExactAvailabilityEntity_1 = require("./entity/ExactAvailabilityEntity");
const ExactFormulaEntity_1 = require("./entity/ExactFormulaEntity");
const ExtractV2Entity_1 = require("./entity/ExtractV2Entity");
const FailedPostEntity_1 = require("./entity/FailedPostEntity");
const FileEntity_1 = require("./entity/FileEntity");
const GenerateBlackoutSora2PromptEntity_1 = require("./entity/GenerateBlackoutSora2PromptEntity");
const GeneratePomelliDemoEntity_1 = require("./entity/GeneratePomelliDemoEntity");
const GeneratePromptEntity_1 = require("./entity/GeneratePromptEntity");
const GenerateSora2PromptEntity_1 = require("./entity/GenerateSora2PromptEntity");
const HealthrxEntity_1 = require("./entity/HealthrxEntity");
const InitResetProductV6Entity_1 = require("./entity/InitResetProductV6Entity");
const IriEntity_1 = require("./entity/IriEntity");
const IrisCapabilityEntity_1 = require("./entity/IrisCapabilityEntity");
const IrisChatEntity_1 = require("./entity/IrisChatEntity");
const IrisConnectorEntity_1 = require("./entity/IrisConnectorEntity");
const IrisStatusEntity_1 = require("./entity/IrisStatusEntity");
const IrisTaskEntity_1 = require("./entity/IrisTaskEntity");
const IrisUsageEntity_1 = require("./entity/IrisUsageEntity");
const LandingEntity_1 = require("./entity/LandingEntity");
const LandingStatEntity_1 = require("./entity/LandingStatEntity");
const LandingStatusEntity_1 = require("./entity/LandingStatusEntity");
const LinkInBioEntity_1 = require("./entity/LinkInBioEntity");
const LinkInDmEntity_1 = require("./entity/LinkInDmEntity");
const LinkInPostEntity_1 = require("./entity/LinkInPostEntity");
const LinkUserEntity_1 = require("./entity/LinkUserEntity");
const MediaAssetEntity_1 = require("./entity/MediaAssetEntity");
const MenEntity_1 = require("./entity/MenEntity");
const MicrodramaEntity_1 = require("./entity/MicrodramaEntity");
const MicrohubPublicEntity_1 = require("./entity/MicrohubPublicEntity");
const OnboardingStatusEntity_1 = require("./entity/OnboardingStatusEntity");
const OnboardingV6Entity_1 = require("./entity/OnboardingV6Entity");
const PaidUserEntity_1 = require("./entity/PaidUserEntity");
const PexelEntity_1 = require("./entity/PexelEntity");
const PhoneAdminAvailableAgentSourceEntity_1 = require("./entity/PhoneAdminAvailableAgentSourceEntity");
const ProductEntity_1 = require("./entity/ProductEntity");
const ProductDashboardEntity_1 = require("./entity/ProductDashboardEntity");
const ProductDashboardViewEntity_1 = require("./entity/ProductDashboardViewEntity");
const ProductDemoEntity_1 = require("./entity/ProductDemoEntity");
const ProductLandingEntity_1 = require("./entity/ProductLandingEntity");
const PublicResumeStatusEntity_1 = require("./entity/PublicResumeStatusEntity");
const ReRollVideoEntity_1 = require("./entity/ReRollVideoEntity");
const ReadRootGetEntity_1 = require("./entity/ReadRootGetEntity");
const RecordDemoBookedEntity_1 = require("./entity/RecordDemoBookedEntity");
const RefreshStatEntity_1 = require("./entity/RefreshStatEntity");
const RemixerClipperEntity_1 = require("./entity/RemixerClipperEntity");
const ResetProductEntity_1 = require("./entity/ResetProductEntity");
const RetryWebsiteScrapeEntity_1 = require("./entity/RetryWebsiteScrapeEntity");
const SaveSurveyEntity_1 = require("./entity/SaveSurveyEntity");
const ScanSocialEntity_1 = require("./entity/ScanSocialEntity");
const ScanSocialsPublicEntity_1 = require("./entity/ScanSocialsPublicEntity");
const ScanSocialsStatusEntity_1 = require("./entity/ScanSocialsStatusEntity");
const ScheduleV2Entity_1 = require("./entity/ScheduleV2Entity");
const ScrapeEntity_1 = require("./entity/ScrapeEntity");
const ScrapeWebsitePublicEntity_1 = require("./entity/ScrapeWebsitePublicEntity");
const ScrapedDataEntity_1 = require("./entity/ScrapedDataEntity");
const ScrapingStatusEntity_1 = require("./entity/ScrapingStatusEntity");
const SelfServeActivateEntity_1 = require("./entity/SelfServeActivateEntity");
const SeoEntity_1 = require("./entity/SeoEntity");
const SeoAiMentionEntity_1 = require("./entity/SeoAiMentionEntity");
const SeoBacklinkEntity_1 = require("./entity/SeoBacklinkEntity");
const SeoKeywordEntity_1 = require("./entity/SeoKeywordEntity");
const SeoOverviewEntity_1 = require("./entity/SeoOverviewEntity");
const SeoTrafficEntity_1 = require("./entity/SeoTrafficEntity");
const ShareAccessLinkEntity_1 = require("./entity/ShareAccessLinkEntity");
const SiteEntity_1 = require("./entity/SiteEntity");
const SlideEntity_1 = require("./entity/SlideEntity");
const SlugValidationEntity_1 = require("./entity/SlugValidationEntity");
const SocialEntity_1 = require("./entity/SocialEntity");
const SocialScanPreviewEntity_1 = require("./entity/SocialScanPreviewEntity");
const SocialScanProcessEntity_1 = require("./entity/SocialScanProcessEntity");
const SocialScanSaveEntity_1 = require("./entity/SocialScanSaveEntity");
const Sora2AvatarEntity_1 = require("./entity/Sora2AvatarEntity");
const Sora2AvatarAssetUploadEntity_1 = require("./entity/Sora2AvatarAssetUploadEntity");
const Sora2AvatarStatEntity_1 = require("./entity/Sora2AvatarStatEntity");
const StatEntity_1 = require("./entity/StatEntity");
const StatsRefreshBackfillEntity_1 = require("./entity/StatsRefreshBackfillEntity");
const StatsRefreshIssueEntity_1 = require("./entity/StatsRefreshIssueEntity");
const StatsRefreshOverviewEntity_1 = require("./entity/StatsRefreshOverviewEntity");
const StatsRefreshRunSummaryEntity_1 = require("./entity/StatsRefreshRunSummaryEntity");
const StatsRefreshTaskTriggerEntity_1 = require("./entity/StatsRefreshTaskTriggerEntity");
const StripeEntity_1 = require("./entity/StripeEntity");
const StyleEntity_1 = require("./entity/StyleEntity");
const TemplateEntity_1 = require("./entity/TemplateEntity");
const TikTokCreatorInfoEntity_1 = require("./entity/TikTokCreatorInfoEntity");
const TopPostEntity_1 = require("./entity/TopPostEntity");
const UploadPostAgentEntity_1 = require("./entity/UploadPostAgentEntity");
const UserEntity_1 = require("./entity/UserEntity");
const UserAgentEntity_1 = require("./entity/UserAgentEntity");
const UserHealthDetailEntity_1 = require("./entity/UserHealthDetailEntity");
const UserWithAvatarSubmissionEntity_1 = require("./entity/UserWithAvatarSubmissionEntity");
const UsersHealthEntity_1 = require("./entity/UsersHealthEntity");
const VideoEntity_1 = require("./entity/VideoEntity");
const VideoRemixerWorkerEntity_1 = require("./entity/VideoRemixerWorkerEntity");
const WatchdogRecoveryEntity_1 = require("./entity/WatchdogRecoveryEntity");
const WinningAdEntity_1 = require("./entity/WinningAdEntity");
const XAdaptationEntity_1 = require("./entity/XAdaptationEntity");
const ZerohumanAdminAccountEntity_1 = require("./entity/ZerohumanAdminAccountEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const CrackedApiReferenceEntityBase_1 = require("./CrackedApiReferenceEntityBase");
Object.defineProperty(exports, "CrackedApiReferenceEntityBase", { enumerable: true, get: function () { return CrackedApiReferenceEntityBase_1.CrackedApiReferenceEntityBase; } });
const Utility_1 = require("./utility/Utility");
const ResultBodyUtility_1 = require("./utility/ResultBodyUtility");
const MakeRequestUtility_1 = require("./utility/MakeRequestUtility");
const PrepareMethodUtility_1 = require("./utility/PrepareMethodUtility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class CrackedApiReferenceSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        for (const key of ['_options', '_rootctx', '_features']) {
            Object.defineProperty(this, key, {
                value: this[key], enumerable: false, writable: true, configurable: true
            });
        }
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        const method = String(fetchargs.method || 'GET').toUpperCase();
        if (!(0, PrepareMethodUtility_1.allowed)(options.allow.method, method)) {
            return ctx.error('spec_method_allow', 'Method "' + method +
                '" not allowed by SDK option allow.method value: "' + options.allow.method + '"');
        }
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method,
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!(0, PrepareMethodUtility_1.allowed)(this._options.allow.op, 'direct')) {
            return {
                ok: false,
                err: new Error('CrackedApiReferenceSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return { ok: false, err: utility.clean(this._rootctx, fetchdef) };
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            if (true === fetchdef.signal?.aborted) {
                throw fetchdef.signal.reason;
            }
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: utility.clean(ctx, (0, MakeRequestUtility_1.abortError)(ctx, fetched)) };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            let err = undefined;
            if (!noBody) {
                let text = undefined;
                try {
                    const raw = fetched;
                    if ('function' === typeof raw.text) {
                        text = await raw.text();
                        json = '' === text.trim() ? undefined : JSON.parse(text);
                    }
                    else {
                        json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                    }
                }
                catch (parseErr) {
                    if ('SyntaxError' !== parseErr?.name) {
                        throw parseErr;
                    }
                    err = (0, ResultBodyUtility_1.unreadableBody)(ctx, {
                        status, headers, text: text ?? parseErr.text, sent: fetchdef.headers,
                        failed: 200 <= status && status < 300 ? undefined :
                            ctx.error('request_status', 'request: ' + status + ': ' + fetched.statusText),
                    });
                }
            }
            return {
                ok: null == err && status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
                ...(null == err ? {} : { err: utility.clean(ctx, err) }),
            };
        }
        catch (err) {
            return { ok: false, err: utility.clean(ctx, (0, MakeRequestUtility_1.abortError)(ctx, err)) };
        }
    }
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!(0, PrepareMethodUtility_1.allowed)(options.allow.op, 'graphql')) {
            return {
                ok: false,
                err: new Error('CrackedApiReferenceSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('CrackedApiReferenceSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.Activate().list()` / `client.Activate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Activate(entopts) {
        const self = this;
        return new ActivateEntity_1.ActivateEntity(self, entopts);
    }
    // Entity access: `client.ActivateUser().list()` / `client.ActivateUser().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActivateUser(entopts) {
        const self = this;
        return new ActivateUserEntity_1.ActivateUserEntity(self, entopts);
    }
    // Entity access: `client.ActiveOnboarding().list()` / `client.ActiveOnboarding().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActiveOnboarding(entopts) {
        const self = this;
        return new ActiveOnboardingEntity_1.ActiveOnboardingEntity(self, entopts);
    }
    // Entity access: `client.Admin().list()` / `client.Admin().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Admin(entopts) {
        const self = this;
        return new AdminEntity_1.AdminEntity(self, entopts);
    }
    // Entity access: `client.AdminAccountReset().list()` / `client.AdminAccountReset().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AdminAccountReset(entopts) {
        const self = this;
        return new AdminAccountResetEntity_1.AdminAccountResetEntity(self, entopts);
    }
    // Entity access: `client.AdminCarousel().list()` / `client.AdminCarousel().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AdminCarousel(entopts) {
        const self = this;
        return new AdminCarouselEntity_1.AdminCarouselEntity(self, entopts);
    }
    // Entity access: `client.AdminCarouselDemoReview().list()` / `client.AdminCarouselDemoReview().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AdminCarouselDemoReview(entopts) {
        const self = this;
        return new AdminCarouselDemoReviewEntity_1.AdminCarouselDemoReviewEntity(self, entopts);
    }
    // Entity access: `client.AdminCustomer().list()` / `client.AdminCustomer().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AdminCustomer(entopts) {
        const self = this;
        return new AdminCustomerEntity_1.AdminCustomerEntity(self, entopts);
    }
    // Entity access: `client.AdminCustomerSuccess().list()` / `client.AdminCustomerSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AdminCustomerSuccess(entopts) {
        const self = this;
        return new AdminCustomerSuccessEntity_1.AdminCustomerSuccessEntity(self, entopts);
    }
    // Entity access: `client.AdminGeneratedVideo().list()` / `client.AdminGeneratedVideo().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AdminGeneratedVideo(entopts) {
        const self = this;
        return new AdminGeneratedVideoEntity_1.AdminGeneratedVideoEntity(self, entopts);
    }
    // Entity access: `client.AdminHealthrx().list()` / `client.AdminHealthrx().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AdminHealthrx(entopts) {
        const self = this;
        return new AdminHealthrxEntity_1.AdminHealthrxEntity(self, entopts);
    }
    // Entity access: `client.AdminInsight().list()` / `client.AdminInsight().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AdminInsight(entopts) {
        const self = this;
        return new AdminInsightEntity_1.AdminInsightEntity(self, entopts);
    }
    // Entity access: `client.AdminLandingTask().list()` / `client.AdminLandingTask().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AdminLandingTask(entopts) {
        const self = this;
        return new AdminLandingTaskEntity_1.AdminLandingTaskEntity(self, entopts);
    }
    // Entity access: `client.AdminMetricsSummary().list()` / `client.AdminMetricsSummary().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AdminMetricsSummary(entopts) {
        const self = this;
        return new AdminMetricsSummaryEntity_1.AdminMetricsSummaryEntity(self, entopts);
    }
    // Entity access: `client.AdminPost().list()` / `client.AdminPost().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AdminPost(entopts) {
        const self = this;
        return new AdminPostEntity_1.AdminPostEntity(self, entopts);
    }
    // Entity access: `client.AdminRecentSignup().list()` / `client.AdminRecentSignup().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AdminRecentSignup(entopts) {
        const self = this;
        return new AdminRecentSignupEntity_1.AdminRecentSignupEntity(self, entopts);
    }
    // Entity access: `client.AdminSlideshowDiag().list()` / `client.AdminSlideshowDiag().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AdminSlideshowDiag(entopts) {
        const self = this;
        return new AdminSlideshowDiagEntity_1.AdminSlideshowDiagEntity(self, entopts);
    }
    // Entity access: `client.AdminSlideshowImport().list()` / `client.AdminSlideshowImport().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AdminSlideshowImport(entopts) {
        const self = this;
        return new AdminSlideshowImportEntity_1.AdminSlideshowImportEntity(self, entopts);
    }
    // Entity access: `client.AdminUserView().list()` / `client.AdminUserView().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AdminUserView(entopts) {
        const self = this;
        return new AdminUserViewEntity_1.AdminUserViewEntity(self, entopts);
    }
    // Entity access: `client.AdminUsersTableItem().list()` / `client.AdminUsersTableItem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AdminUsersTableItem(entopts) {
        const self = this;
        return new AdminUsersTableItemEntity_1.AdminUsersTableItemEntity(self, entopts);
    }
    // Entity access: `client.AdminVideoRemixer().list()` / `client.AdminVideoRemixer().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AdminVideoRemixer(entopts) {
        const self = this;
        return new AdminVideoRemixerEntity_1.AdminVideoRemixerEntity(self, entopts);
    }
    // Entity access: `client.AdvanceStep().list()` / `client.AdvanceStep().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AdvanceStep(entopts) {
        const self = this;
        return new AdvanceStepEntity_1.AdvanceStepEntity(self, entopts);
    }
    // Entity access: `client.Agent().list()` / `client.Agent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Agent(entopts) {
        const self = this;
        return new AgentEntity_1.AgentEntity(self, entopts);
    }
    // Entity access: `client.AgentAccessCustomersHealth().list()` / `client.AgentAccessCustomersHealth().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentAccessCustomersHealth(entopts) {
        const self = this;
        return new AgentAccessCustomersHealthEntity_1.AgentAccessCustomersHealthEntity(self, entopts);
    }
    // Entity access: `client.AgentAccessOverview().list()` / `client.AgentAccessOverview().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentAccessOverview(entopts) {
        const self = this;
        return new AgentAccessOverviewEntity_1.AgentAccessOverviewEntity(self, entopts);
    }
    // Entity access: `client.AgentAccessPhilHourlyNotification().list()` / `client.AgentAccessPhilHourlyNotification().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentAccessPhilHourlyNotification(entopts) {
        const self = this;
        return new AgentAccessPhilHourlyNotificationEntity_1.AgentAccessPhilHourlyNotificationEntity(self, entopts);
    }
    // Entity access: `client.AgentAccessPhilStatsRefresh().list()` / `client.AgentAccessPhilStatsRefresh().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentAccessPhilStatsRefresh(entopts) {
        const self = this;
        return new AgentAccessPhilStatsRefreshEntity_1.AgentAccessPhilStatsRefreshEntity(self, entopts);
    }
    // Entity access: `client.AgentAccessPhilVideo().list()` / `client.AgentAccessPhilVideo().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentAccessPhilVideo(entopts) {
        const self = this;
        return new AgentAccessPhilVideoEntity_1.AgentAccessPhilVideoEntity(self, entopts);
    }
    // Entity access: `client.AgentAccessUserAgent().list()` / `client.AgentAccessUserAgent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentAccessUserAgent(entopts) {
        const self = this;
        return new AgentAccessUserAgentEntity_1.AgentAccessUserAgentEntity(self, entopts);
    }
    // Entity access: `client.AgentAccessUserPhoneFarm().list()` / `client.AgentAccessUserPhoneFarm().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentAccessUserPhoneFarm(entopts) {
        const self = this;
        return new AgentAccessUserPhoneFarmEntity_1.AgentAccessUserPhoneFarmEntity(self, entopts);
    }
    // Entity access: `client.AgentAccessUserPost().list()` / `client.AgentAccessUserPost().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentAccessUserPost(entopts) {
        const self = this;
        return new AgentAccessUserPostEntity_1.AgentAccessUserPostEntity(self, entopts);
    }
    // Entity access: `client.AgentAccessUserSummary().list()` / `client.AgentAccessUserSummary().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentAccessUserSummary(entopts) {
        const self = this;
        return new AgentAccessUserSummaryEntity_1.AgentAccessUserSummaryEntity(self, entopts);
    }
    // Entity access: `client.AgentAccessUserVideo().list()` / `client.AgentAccessUserVideo().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentAccessUserVideo(entopts) {
        const self = this;
        return new AgentAccessUserVideoEntity_1.AgentAccessUserVideoEntity(self, entopts);
    }
    // Entity access: `client.AgentAccessUserWinningAd().list()` / `client.AgentAccessUserWinningAd().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentAccessUserWinningAd(entopts) {
        const self = this;
        return new AgentAccessUserWinningAdEntity_1.AgentAccessUserWinningAdEntity(self, entopts);
    }
    // Entity access: `client.AgentAccessWinningAdsSummary().list()` / `client.AgentAccessWinningAdsSummary().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentAccessWinningAdsSummary(entopts) {
        const self = this;
        return new AgentAccessWinningAdsSummaryEntity_1.AgentAccessWinningAdsSummaryEntity(self, entopts);
    }
    // Entity access: `client.AgentDetail().list()` / `client.AgentDetail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentDetail(entopts) {
        const self = this;
        return new AgentDetailEntity_1.AgentDetailEntity(self, entopts);
    }
    // Entity access: `client.AgentHealth().list()` / `client.AgentHealth().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentHealth(entopts) {
        const self = this;
        return new AgentHealthEntity_1.AgentHealthEntity(self, entopts);
    }
    // Entity access: `client.AgentHealthCustomerOption().list()` / `client.AgentHealthCustomerOption().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentHealthCustomerOption(entopts) {
        const self = this;
        return new AgentHealthCustomerOptionEntity_1.AgentHealthCustomerOptionEntity(self, entopts);
    }
    // Entity access: `client.AgentHealthDetail().list()` / `client.AgentHealthDetail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentHealthDetail(entopts) {
        const self = this;
        return new AgentHealthDetailEntity_1.AgentHealthDetailEntity(self, entopts);
    }
    // Entity access: `client.AgentPost().list()` / `client.AgentPost().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentPost(entopts) {
        const self = this;
        return new AgentPostEntity_1.AgentPostEntity(self, entopts);
    }
    // Entity access: `client.AgentStat().list()` / `client.AgentStat().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentStat(entopts) {
        const self = this;
        return new AgentStatEntity_1.AgentStatEntity(self, entopts);
    }
    // Entity access: `client.AgentSummary().list()` / `client.AgentSummary().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentSummary(entopts) {
        const self = this;
        return new AgentSummaryEntity_1.AgentSummaryEntity(self, entopts);
    }
    // Entity access: `client.AgentsSummary().list()` / `client.AgentsSummary().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentsSummary(entopts) {
        const self = this;
        return new AgentsSummaryEntity_1.AgentsSummaryEntity(self, entopts);
    }
    // Entity access: `client.AnalysisStatus().list()` / `client.AnalysisStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AnalysisStatus(entopts) {
        const self = this;
        return new AnalysisStatusEntity_1.AnalysisStatusEntity(self, entopts);
    }
    // Entity access: `client.AnalyticsPost().list()` / `client.AnalyticsPost().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AnalyticsPost(entopts) {
        const self = this;
        return new AnalyticsPostEntity_1.AnalyticsPostEntity(self, entopts);
    }
    // Entity access: `client.AnalyzeProduct().list()` / `client.AnalyzeProduct().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AnalyzeProduct(entopts) {
        const self = this;
        return new AnalyzeProductEntity_1.AnalyzeProductEntity(self, entopts);
    }
    // Entity access: `client.AssignAgent().list()` / `client.AssignAgent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssignAgent(entopts) {
        const self = this;
        return new AssignAgentEntity_1.AssignAgentEntity(self, entopts);
    }
    // Entity access: `client.Auth().list()` / `client.Auth().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Auth(entopts) {
        const self = this;
        return new AuthEntity_1.AuthEntity(self, entopts);
    }
    // Entity access: `client.AutoScheduleSetting().list()` / `client.AutoScheduleSetting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AutoScheduleSetting(entopts) {
        const self = this;
        return new AutoScheduleSettingEntity_1.AutoScheduleSettingEntity(self, entopts);
    }
    // Entity access: `client.BulkTikTokStatsUpdate().list()` / `client.BulkTikTokStatsUpdate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BulkTikTokStatsUpdate(entopts) {
        const self = this;
        return new BulkTikTokStatsUpdateEntity_1.BulkTikTokStatsUpdateEntity(self, entopts);
    }
    // Entity access: `client.Carousel().list()` / `client.Carousel().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Carousel(entopts) {
        const self = this;
        return new CarouselEntity_1.CarouselEntity(self, entopts);
    }
    // Entity access: `client.CarouselAgentDetail().list()` / `client.CarouselAgentDetail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CarouselAgentDetail(entopts) {
        const self = this;
        return new CarouselAgentDetailEntity_1.CarouselAgentDetailEntity(self, entopts);
    }
    // Entity access: `client.CarouselStatus().list()` / `client.CarouselStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CarouselStatus(entopts) {
        const self = this;
        return new CarouselStatusEntity_1.CarouselStatusEntity(self, entopts);
    }
    // Entity access: `client.Chat().list()` / `client.Chat().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Chat(entopts) {
        const self = this;
        return new ChatEntity_1.ChatEntity(self, entopts);
    }
    // Entity access: `client.ChatHistory().list()` / `client.ChatHistory().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ChatHistory(entopts) {
        const self = this;
        return new ChatHistoryEntity_1.ChatHistoryEntity(self, entopts);
    }
    // Entity access: `client.ChatSession().list()` / `client.ChatSession().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ChatSession(entopts) {
        const self = this;
        return new ChatSessionEntity_1.ChatSessionEntity(self, entopts);
    }
    // Entity access: `client.Comment().list()` / `client.Comment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Comment(entopts) {
        const self = this;
        return new CommentEntity_1.CommentEntity(self, entopts);
    }
    // Entity access: `client.CommentCampaign().list()` / `client.CommentCampaign().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CommentCampaign(entopts) {
        const self = this;
        return new CommentCampaignEntity_1.CommentCampaignEntity(self, entopts);
    }
    // Entity access: `client.CompleteChatCheckout().list()` / `client.CompleteChatCheckout().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CompleteChatCheckout(entopts) {
        const self = this;
        return new CompleteChatCheckoutEntity_1.CompleteChatCheckoutEntity(self, entopts);
    }
    // Entity access: `client.CreateBlackoutSora2Video().list()` / `client.CreateBlackoutSora2Video().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreateBlackoutSora2Video(entopts) {
        const self = this;
        return new CreateBlackoutSora2VideoEntity_1.CreateBlackoutSora2VideoEntity(self, entopts);
    }
    // Entity access: `client.CreateCarousel().list()` / `client.CreateCarousel().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreateCarousel(entopts) {
        const self = this;
        return new CreateCarouselEntity_1.CreateCarouselEntity(self, entopts);
    }
    // Entity access: `client.CreateProduct().list()` / `client.CreateProduct().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreateProduct(entopts) {
        const self = this;
        return new CreateProductEntity_1.CreateProductEntity(self, entopts);
    }
    // Entity access: `client.CreateResetProductV6().list()` / `client.CreateResetProductV6().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreateResetProductV6(entopts) {
        const self = this;
        return new CreateResetProductV6Entity_1.CreateResetProductV6Entity(self, entopts);
    }
    // Entity access: `client.CreateSora2Video().list()` / `client.CreateSora2Video().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreateSora2Video(entopts) {
        const self = this;
        return new CreateSora2VideoEntity_1.CreateSora2VideoEntity(self, entopts);
    }
    // Entity access: `client.CreateVariation().list()` / `client.CreateVariation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreateVariation(entopts) {
        const self = this;
        return new CreateVariationEntity_1.CreateVariationEntity(self, entopts);
    }
    // Entity access: `client.Customer().list()` / `client.Customer().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Customer(entopts) {
        const self = this;
        return new CustomerEntity_1.CustomerEntity(self, entopts);
    }
    // Entity access: `client.CustomerHealth().list()` / `client.CustomerHealth().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CustomerHealth(entopts) {
        const self = this;
        return new CustomerHealthEntity_1.CustomerHealthEntity(self, entopts);
    }
    // Entity access: `client.CustomerHealthAllCustomersItem().list()` / `client.CustomerHealthAllCustomersItem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CustomerHealthAllCustomersItem(entopts) {
        const self = this;
        return new CustomerHealthAllCustomersItemEntity_1.CustomerHealthAllCustomersItemEntity(self, entopts);
    }
    // Entity access: `client.CustomerHealthViewsSummary().list()` / `client.CustomerHealthViewsSummary().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CustomerHealthViewsSummary(entopts) {
        const self = this;
        return new CustomerHealthViewsSummaryEntity_1.CustomerHealthViewsSummaryEntity(self, entopts);
    }
    // Entity access: `client.Daily().list()` / `client.Daily().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Daily(entopts) {
        const self = this;
        return new DailyEntity_1.DailyEntity(self, entopts);
    }
    // Entity access: `client.DailyStatus().list()` / `client.DailyStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DailyStatus(entopts) {
        const self = this;
        return new DailyStatusEntity_1.DailyStatusEntity(self, entopts);
    }
    // Entity access: `client.DedicatedAgentsDashboard().list()` / `client.DedicatedAgentsDashboard().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DedicatedAgentsDashboard(entopts) {
        const self = this;
        return new DedicatedAgentsDashboardEntity_1.DedicatedAgentsDashboardEntity(self, entopts);
    }
    // Entity access: `client.EnterpriseAgent().list()` / `client.EnterpriseAgent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EnterpriseAgent(entopts) {
        const self = this;
        return new EnterpriseAgentEntity_1.EnterpriseAgentEntity(self, entopts);
    }
    // Entity access: `client.EnterpriseProduct().list()` / `client.EnterpriseProduct().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EnterpriseProduct(entopts) {
        const self = this;
        return new EnterpriseProductEntity_1.EnterpriseProductEntity(self, entopts);
    }
    // Entity access: `client.ExactAvailability().list()` / `client.ExactAvailability().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ExactAvailability(entopts) {
        const self = this;
        return new ExactAvailabilityEntity_1.ExactAvailabilityEntity(self, entopts);
    }
    // Entity access: `client.ExactFormula().list()` / `client.ExactFormula().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ExactFormula(entopts) {
        const self = this;
        return new ExactFormulaEntity_1.ExactFormulaEntity(self, entopts);
    }
    // Entity access: `client.ExtractV2().list()` / `client.ExtractV2().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ExtractV2(entopts) {
        const self = this;
        return new ExtractV2Entity_1.ExtractV2Entity(self, entopts);
    }
    // Entity access: `client.FailedPost().list()` / `client.FailedPost().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FailedPost(entopts) {
        const self = this;
        return new FailedPostEntity_1.FailedPostEntity(self, entopts);
    }
    // Entity access: `client.File().list()` / `client.File().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    File(entopts) {
        const self = this;
        return new FileEntity_1.FileEntity(self, entopts);
    }
    // Entity access: `client.GenerateBlackoutSora2Prompt().list()` / `client.GenerateBlackoutSora2Prompt().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GenerateBlackoutSora2Prompt(entopts) {
        const self = this;
        return new GenerateBlackoutSora2PromptEntity_1.GenerateBlackoutSora2PromptEntity(self, entopts);
    }
    // Entity access: `client.GeneratePomelliDemo().list()` / `client.GeneratePomelliDemo().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GeneratePomelliDemo(entopts) {
        const self = this;
        return new GeneratePomelliDemoEntity_1.GeneratePomelliDemoEntity(self, entopts);
    }
    // Entity access: `client.GeneratePrompt().list()` / `client.GeneratePrompt().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GeneratePrompt(entopts) {
        const self = this;
        return new GeneratePromptEntity_1.GeneratePromptEntity(self, entopts);
    }
    // Entity access: `client.GenerateSora2Prompt().list()` / `client.GenerateSora2Prompt().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GenerateSora2Prompt(entopts) {
        const self = this;
        return new GenerateSora2PromptEntity_1.GenerateSora2PromptEntity(self, entopts);
    }
    // Entity access: `client.Healthrx().list()` / `client.Healthrx().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Healthrx(entopts) {
        const self = this;
        return new HealthrxEntity_1.HealthrxEntity(self, entopts);
    }
    // Entity access: `client.InitResetProductV6().list()` / `client.InitResetProductV6().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    InitResetProductV6(entopts) {
        const self = this;
        return new InitResetProductV6Entity_1.InitResetProductV6Entity(self, entopts);
    }
    // Entity access: `client.Iri().list()` / `client.Iri().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Iri(entopts) {
        const self = this;
        return new IriEntity_1.IriEntity(self, entopts);
    }
    // Entity access: `client.IrisCapability().list()` / `client.IrisCapability().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IrisCapability(entopts) {
        const self = this;
        return new IrisCapabilityEntity_1.IrisCapabilityEntity(self, entopts);
    }
    // Entity access: `client.IrisChat().list()` / `client.IrisChat().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IrisChat(entopts) {
        const self = this;
        return new IrisChatEntity_1.IrisChatEntity(self, entopts);
    }
    // Entity access: `client.IrisConnector().list()` / `client.IrisConnector().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IrisConnector(entopts) {
        const self = this;
        return new IrisConnectorEntity_1.IrisConnectorEntity(self, entopts);
    }
    // Entity access: `client.IrisStatus().list()` / `client.IrisStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IrisStatus(entopts) {
        const self = this;
        return new IrisStatusEntity_1.IrisStatusEntity(self, entopts);
    }
    // Entity access: `client.IrisTask().list()` / `client.IrisTask().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IrisTask(entopts) {
        const self = this;
        return new IrisTaskEntity_1.IrisTaskEntity(self, entopts);
    }
    // Entity access: `client.IrisUsage().list()` / `client.IrisUsage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IrisUsage(entopts) {
        const self = this;
        return new IrisUsageEntity_1.IrisUsageEntity(self, entopts);
    }
    // Entity access: `client.Landing().list()` / `client.Landing().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Landing(entopts) {
        const self = this;
        return new LandingEntity_1.LandingEntity(self, entopts);
    }
    // Entity access: `client.LandingStat().list()` / `client.LandingStat().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LandingStat(entopts) {
        const self = this;
        return new LandingStatEntity_1.LandingStatEntity(self, entopts);
    }
    // Entity access: `client.LandingStatus().list()` / `client.LandingStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LandingStatus(entopts) {
        const self = this;
        return new LandingStatusEntity_1.LandingStatusEntity(self, entopts);
    }
    // Entity access: `client.LinkInBio().list()` / `client.LinkInBio().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LinkInBio(entopts) {
        const self = this;
        return new LinkInBioEntity_1.LinkInBioEntity(self, entopts);
    }
    // Entity access: `client.LinkInDm().list()` / `client.LinkInDm().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LinkInDm(entopts) {
        const self = this;
        return new LinkInDmEntity_1.LinkInDmEntity(self, entopts);
    }
    // Entity access: `client.LinkInPost().list()` / `client.LinkInPost().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LinkInPost(entopts) {
        const self = this;
        return new LinkInPostEntity_1.LinkInPostEntity(self, entopts);
    }
    // Entity access: `client.LinkUser().list()` / `client.LinkUser().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LinkUser(entopts) {
        const self = this;
        return new LinkUserEntity_1.LinkUserEntity(self, entopts);
    }
    // Entity access: `client.MediaAsset().list()` / `client.MediaAsset().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MediaAsset(entopts) {
        const self = this;
        return new MediaAssetEntity_1.MediaAssetEntity(self, entopts);
    }
    // Entity access: `client.Men().list()` / `client.Men().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Men(entopts) {
        const self = this;
        return new MenEntity_1.MenEntity(self, entopts);
    }
    // Entity access: `client.Microdrama().list()` / `client.Microdrama().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Microdrama(entopts) {
        const self = this;
        return new MicrodramaEntity_1.MicrodramaEntity(self, entopts);
    }
    // Entity access: `client.MicrohubPublic().list()` / `client.MicrohubPublic().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MicrohubPublic(entopts) {
        const self = this;
        return new MicrohubPublicEntity_1.MicrohubPublicEntity(self, entopts);
    }
    // Entity access: `client.OnboardingStatus().list()` / `client.OnboardingStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OnboardingStatus(entopts) {
        const self = this;
        return new OnboardingStatusEntity_1.OnboardingStatusEntity(self, entopts);
    }
    // Entity access: `client.OnboardingV6().list()` / `client.OnboardingV6().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OnboardingV6(entopts) {
        const self = this;
        return new OnboardingV6Entity_1.OnboardingV6Entity(self, entopts);
    }
    // Entity access: `client.PaidUser().list()` / `client.PaidUser().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaidUser(entopts) {
        const self = this;
        return new PaidUserEntity_1.PaidUserEntity(self, entopts);
    }
    // Entity access: `client.Pexel().list()` / `client.Pexel().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Pexel(entopts) {
        const self = this;
        return new PexelEntity_1.PexelEntity(self, entopts);
    }
    // Entity access: `client.PhoneAdminAvailableAgentSource().list()` / `client.PhoneAdminAvailableAgentSource().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PhoneAdminAvailableAgentSource(entopts) {
        const self = this;
        return new PhoneAdminAvailableAgentSourceEntity_1.PhoneAdminAvailableAgentSourceEntity(self, entopts);
    }
    // Entity access: `client.Product().list()` / `client.Product().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Product(entopts) {
        const self = this;
        return new ProductEntity_1.ProductEntity(self, entopts);
    }
    // Entity access: `client.ProductDashboard().list()` / `client.ProductDashboard().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProductDashboard(entopts) {
        const self = this;
        return new ProductDashboardEntity_1.ProductDashboardEntity(self, entopts);
    }
    // Entity access: `client.ProductDashboardView().list()` / `client.ProductDashboardView().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProductDashboardView(entopts) {
        const self = this;
        return new ProductDashboardViewEntity_1.ProductDashboardViewEntity(self, entopts);
    }
    // Entity access: `client.ProductDemo().list()` / `client.ProductDemo().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProductDemo(entopts) {
        const self = this;
        return new ProductDemoEntity_1.ProductDemoEntity(self, entopts);
    }
    // Entity access: `client.ProductLanding().list()` / `client.ProductLanding().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProductLanding(entopts) {
        const self = this;
        return new ProductLandingEntity_1.ProductLandingEntity(self, entopts);
    }
    // Entity access: `client.PublicResumeStatus().list()` / `client.PublicResumeStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PublicResumeStatus(entopts) {
        const self = this;
        return new PublicResumeStatusEntity_1.PublicResumeStatusEntity(self, entopts);
    }
    // Entity access: `client.ReRollVideo().list()` / `client.ReRollVideo().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ReRollVideo(entopts) {
        const self = this;
        return new ReRollVideoEntity_1.ReRollVideoEntity(self, entopts);
    }
    // Entity access: `client.ReadRootGet().list()` / `client.ReadRootGet().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ReadRootGet(entopts) {
        const self = this;
        return new ReadRootGetEntity_1.ReadRootGetEntity(self, entopts);
    }
    // Entity access: `client.RecordDemoBooked().list()` / `client.RecordDemoBooked().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RecordDemoBooked(entopts) {
        const self = this;
        return new RecordDemoBookedEntity_1.RecordDemoBookedEntity(self, entopts);
    }
    // Entity access: `client.RefreshStat().list()` / `client.RefreshStat().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RefreshStat(entopts) {
        const self = this;
        return new RefreshStatEntity_1.RefreshStatEntity(self, entopts);
    }
    // Entity access: `client.RemixerClipper().list()` / `client.RemixerClipper().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RemixerClipper(entopts) {
        const self = this;
        return new RemixerClipperEntity_1.RemixerClipperEntity(self, entopts);
    }
    // Entity access: `client.ResetProduct().list()` / `client.ResetProduct().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ResetProduct(entopts) {
        const self = this;
        return new ResetProductEntity_1.ResetProductEntity(self, entopts);
    }
    // Entity access: `client.RetryWebsiteScrape().list()` / `client.RetryWebsiteScrape().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RetryWebsiteScrape(entopts) {
        const self = this;
        return new RetryWebsiteScrapeEntity_1.RetryWebsiteScrapeEntity(self, entopts);
    }
    // Entity access: `client.SaveSurvey().list()` / `client.SaveSurvey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SaveSurvey(entopts) {
        const self = this;
        return new SaveSurveyEntity_1.SaveSurveyEntity(self, entopts);
    }
    // Entity access: `client.ScanSocial().list()` / `client.ScanSocial().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ScanSocial(entopts) {
        const self = this;
        return new ScanSocialEntity_1.ScanSocialEntity(self, entopts);
    }
    // Entity access: `client.ScanSocialsPublic().list()` / `client.ScanSocialsPublic().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ScanSocialsPublic(entopts) {
        const self = this;
        return new ScanSocialsPublicEntity_1.ScanSocialsPublicEntity(self, entopts);
    }
    // Entity access: `client.ScanSocialsStatus().list()` / `client.ScanSocialsStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ScanSocialsStatus(entopts) {
        const self = this;
        return new ScanSocialsStatusEntity_1.ScanSocialsStatusEntity(self, entopts);
    }
    // Entity access: `client.ScheduleV2().list()` / `client.ScheduleV2().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ScheduleV2(entopts) {
        const self = this;
        return new ScheduleV2Entity_1.ScheduleV2Entity(self, entopts);
    }
    // Entity access: `client.Scrape().list()` / `client.Scrape().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Scrape(entopts) {
        const self = this;
        return new ScrapeEntity_1.ScrapeEntity(self, entopts);
    }
    // Entity access: `client.ScrapeWebsitePublic().list()` / `client.ScrapeWebsitePublic().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ScrapeWebsitePublic(entopts) {
        const self = this;
        return new ScrapeWebsitePublicEntity_1.ScrapeWebsitePublicEntity(self, entopts);
    }
    // Entity access: `client.ScrapedData().list()` / `client.ScrapedData().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ScrapedData(entopts) {
        const self = this;
        return new ScrapedDataEntity_1.ScrapedDataEntity(self, entopts);
    }
    // Entity access: `client.ScrapingStatus().list()` / `client.ScrapingStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ScrapingStatus(entopts) {
        const self = this;
        return new ScrapingStatusEntity_1.ScrapingStatusEntity(self, entopts);
    }
    // Entity access: `client.SelfServeActivate().list()` / `client.SelfServeActivate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SelfServeActivate(entopts) {
        const self = this;
        return new SelfServeActivateEntity_1.SelfServeActivateEntity(self, entopts);
    }
    // Entity access: `client.Seo().list()` / `client.Seo().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Seo(entopts) {
        const self = this;
        return new SeoEntity_1.SeoEntity(self, entopts);
    }
    // Entity access: `client.SeoAiMention().list()` / `client.SeoAiMention().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SeoAiMention(entopts) {
        const self = this;
        return new SeoAiMentionEntity_1.SeoAiMentionEntity(self, entopts);
    }
    // Entity access: `client.SeoBacklink().list()` / `client.SeoBacklink().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SeoBacklink(entopts) {
        const self = this;
        return new SeoBacklinkEntity_1.SeoBacklinkEntity(self, entopts);
    }
    // Entity access: `client.SeoKeyword().list()` / `client.SeoKeyword().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SeoKeyword(entopts) {
        const self = this;
        return new SeoKeywordEntity_1.SeoKeywordEntity(self, entopts);
    }
    // Entity access: `client.SeoOverview().list()` / `client.SeoOverview().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SeoOverview(entopts) {
        const self = this;
        return new SeoOverviewEntity_1.SeoOverviewEntity(self, entopts);
    }
    // Entity access: `client.SeoTraffic().list()` / `client.SeoTraffic().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SeoTraffic(entopts) {
        const self = this;
        return new SeoTrafficEntity_1.SeoTrafficEntity(self, entopts);
    }
    // Entity access: `client.ShareAccessLink().list()` / `client.ShareAccessLink().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ShareAccessLink(entopts) {
        const self = this;
        return new ShareAccessLinkEntity_1.ShareAccessLinkEntity(self, entopts);
    }
    // Entity access: `client.Site().list()` / `client.Site().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Site(entopts) {
        const self = this;
        return new SiteEntity_1.SiteEntity(self, entopts);
    }
    // Entity access: `client.Slide().list()` / `client.Slide().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Slide(entopts) {
        const self = this;
        return new SlideEntity_1.SlideEntity(self, entopts);
    }
    // Entity access: `client.SlugValidation().list()` / `client.SlugValidation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SlugValidation(entopts) {
        const self = this;
        return new SlugValidationEntity_1.SlugValidationEntity(self, entopts);
    }
    // Entity access: `client.Social().list()` / `client.Social().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Social(entopts) {
        const self = this;
        return new SocialEntity_1.SocialEntity(self, entopts);
    }
    // Entity access: `client.SocialScanPreview().list()` / `client.SocialScanPreview().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SocialScanPreview(entopts) {
        const self = this;
        return new SocialScanPreviewEntity_1.SocialScanPreviewEntity(self, entopts);
    }
    // Entity access: `client.SocialScanProcess().list()` / `client.SocialScanProcess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SocialScanProcess(entopts) {
        const self = this;
        return new SocialScanProcessEntity_1.SocialScanProcessEntity(self, entopts);
    }
    // Entity access: `client.SocialScanSave().list()` / `client.SocialScanSave().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SocialScanSave(entopts) {
        const self = this;
        return new SocialScanSaveEntity_1.SocialScanSaveEntity(self, entopts);
    }
    // Entity access: `client.Sora2Avatar().list()` / `client.Sora2Avatar().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Sora2Avatar(entopts) {
        const self = this;
        return new Sora2AvatarEntity_1.Sora2AvatarEntity(self, entopts);
    }
    // Entity access: `client.Sora2AvatarAssetUpload().list()` / `client.Sora2AvatarAssetUpload().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Sora2AvatarAssetUpload(entopts) {
        const self = this;
        return new Sora2AvatarAssetUploadEntity_1.Sora2AvatarAssetUploadEntity(self, entopts);
    }
    // Entity access: `client.Sora2AvatarStat().list()` / `client.Sora2AvatarStat().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Sora2AvatarStat(entopts) {
        const self = this;
        return new Sora2AvatarStatEntity_1.Sora2AvatarStatEntity(self, entopts);
    }
    // Entity access: `client.Stat().list()` / `client.Stat().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Stat(entopts) {
        const self = this;
        return new StatEntity_1.StatEntity(self, entopts);
    }
    // Entity access: `client.StatsRefreshBackfill().list()` / `client.StatsRefreshBackfill().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    StatsRefreshBackfill(entopts) {
        const self = this;
        return new StatsRefreshBackfillEntity_1.StatsRefreshBackfillEntity(self, entopts);
    }
    // Entity access: `client.StatsRefreshIssue().list()` / `client.StatsRefreshIssue().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    StatsRefreshIssue(entopts) {
        const self = this;
        return new StatsRefreshIssueEntity_1.StatsRefreshIssueEntity(self, entopts);
    }
    // Entity access: `client.StatsRefreshOverview().list()` / `client.StatsRefreshOverview().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    StatsRefreshOverview(entopts) {
        const self = this;
        return new StatsRefreshOverviewEntity_1.StatsRefreshOverviewEntity(self, entopts);
    }
    // Entity access: `client.StatsRefreshRunSummary().list()` / `client.StatsRefreshRunSummary().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    StatsRefreshRunSummary(entopts) {
        const self = this;
        return new StatsRefreshRunSummaryEntity_1.StatsRefreshRunSummaryEntity(self, entopts);
    }
    // Entity access: `client.StatsRefreshTaskTrigger().list()` / `client.StatsRefreshTaskTrigger().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    StatsRefreshTaskTrigger(entopts) {
        const self = this;
        return new StatsRefreshTaskTriggerEntity_1.StatsRefreshTaskTriggerEntity(self, entopts);
    }
    // Entity access: `client.Stripe().list()` / `client.Stripe().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Stripe(entopts) {
        const self = this;
        return new StripeEntity_1.StripeEntity(self, entopts);
    }
    // Entity access: `client.Style().list()` / `client.Style().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Style(entopts) {
        const self = this;
        return new StyleEntity_1.StyleEntity(self, entopts);
    }
    // Entity access: `client.Template().list()` / `client.Template().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Template(entopts) {
        const self = this;
        return new TemplateEntity_1.TemplateEntity(self, entopts);
    }
    // Entity access: `client.TikTokCreatorInfo().list()` / `client.TikTokCreatorInfo().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TikTokCreatorInfo(entopts) {
        const self = this;
        return new TikTokCreatorInfoEntity_1.TikTokCreatorInfoEntity(self, entopts);
    }
    // Entity access: `client.TopPost().list()` / `client.TopPost().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TopPost(entopts) {
        const self = this;
        return new TopPostEntity_1.TopPostEntity(self, entopts);
    }
    // Entity access: `client.UploadPostAgent().list()` / `client.UploadPostAgent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UploadPostAgent(entopts) {
        const self = this;
        return new UploadPostAgentEntity_1.UploadPostAgentEntity(self, entopts);
    }
    // Entity access: `client.User().list()` / `client.User().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    User(entopts) {
        const self = this;
        return new UserEntity_1.UserEntity(self, entopts);
    }
    // Entity access: `client.UserAgent().list()` / `client.UserAgent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UserAgent(entopts) {
        const self = this;
        return new UserAgentEntity_1.UserAgentEntity(self, entopts);
    }
    // Entity access: `client.UserHealthDetail().list()` / `client.UserHealthDetail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UserHealthDetail(entopts) {
        const self = this;
        return new UserHealthDetailEntity_1.UserHealthDetailEntity(self, entopts);
    }
    // Entity access: `client.UserWithAvatarSubmission().list()` / `client.UserWithAvatarSubmission().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UserWithAvatarSubmission(entopts) {
        const self = this;
        return new UserWithAvatarSubmissionEntity_1.UserWithAvatarSubmissionEntity(self, entopts);
    }
    // Entity access: `client.UsersHealth().list()` / `client.UsersHealth().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UsersHealth(entopts) {
        const self = this;
        return new UsersHealthEntity_1.UsersHealthEntity(self, entopts);
    }
    // Entity access: `client.Video().list()` / `client.Video().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Video(entopts) {
        const self = this;
        return new VideoEntity_1.VideoEntity(self, entopts);
    }
    // Entity access: `client.VideoRemixerWorker().list()` / `client.VideoRemixerWorker().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    VideoRemixerWorker(entopts) {
        const self = this;
        return new VideoRemixerWorkerEntity_1.VideoRemixerWorkerEntity(self, entopts);
    }
    // Entity access: `client.WatchdogRecovery().list()` / `client.WatchdogRecovery().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WatchdogRecovery(entopts) {
        const self = this;
        return new WatchdogRecoveryEntity_1.WatchdogRecoveryEntity(self, entopts);
    }
    // Entity access: `client.WinningAd().list()` / `client.WinningAd().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WinningAd(entopts) {
        const self = this;
        return new WinningAdEntity_1.WinningAdEntity(self, entopts);
    }
    // Entity access: `client.XAdaptation().list()` / `client.XAdaptation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    XAdaptation(entopts) {
        const self = this;
        return new XAdaptationEntity_1.XAdaptationEntity(self, entopts);
    }
    // Entity access: `client.ZerohumanAdminAccount().list()` / `client.ZerohumanAdminAccount().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZerohumanAdminAccount(entopts) {
        const self = this;
        return new ZerohumanAdminAccountEntity_1.ZerohumanAdminAccountEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new CrackedApiReferenceSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return CrackedApiReferenceSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'CrackedApiReference' };
    }
    toString() {
        return 'CrackedApiReference ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.CrackedApiReferenceSDK = CrackedApiReferenceSDK;
const SDK = CrackedApiReferenceSDK;
exports.SDK = SDK;
//# sourceMappingURL=CrackedApiReferenceSDK.js.map