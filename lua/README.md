# CrackedApiReference Lua SDK



The Lua SDK for the CrackedApiReference API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:Activate()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `patch`, `remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Tags](https://github.com/voxgig-sdk/cracked-api-reference-sdk/tags)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("cracked-api-reference_sdk")

local client = sdk.new({
  apikey = os.getenv("CRACKED_API_REFERENCE_APIKEY"),
})
```

### 3. Load an admin

Admin is nested under date, so provide the `date`.

`load` returns the entity; `data_get()` reads its record.

```lua
local admin, err = client:Admin():load({ date = "example_date" })
if err then error(err) end
local rec = admin:data_get()
print(rec["id"])
```

### 4. Create, update, and remove

```lua
-- Create
local created, err = client:Activate():create({ user_id = "example_user_id", message = "example_message", success = true })
if err then error(err) end

```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local admininsights, err = client:AdminInsight():list()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:AdminInsight():list()
-- result is an array of entities, one per mock record; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
CRACKED_API_REFERENCE_TEST_LIVE=TRUE
CRACKED_API_REFERENCE_APIKEY=<your-key>
```

Then run:

```bash
cd lua && busted test/
```


## Reference

### CrackedApiReferenceSDK

```lua
local sdk = require("cracked-api-reference_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CrackedApiReferenceSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `Activate` | `(data) -> ActivateEntity` | Create an Activate entity instance. |
| `ActivateUser` | `(data) -> ActivateUserEntity` | Create an ActivateUser entity instance. |
| `ActiveOnboarding` | `(data) -> ActiveOnboardingEntity` | Create an ActiveOnboarding entity instance. |
| `Admin` | `(data) -> AdminEntity` | Create an Admin entity instance. |
| `AdminAccountReset` | `(data) -> AdminAccountResetEntity` | Create an AdminAccountReset entity instance. |
| `AdminCarousel` | `(data) -> AdminCarouselEntity` | Create an AdminCarousel entity instance. |
| `AdminCarouselDemoReview` | `(data) -> AdminCarouselDemoReviewEntity` | Create an AdminCarouselDemoReview entity instance. |
| `AdminCustomer` | `(data) -> AdminCustomerEntity` | Create an AdminCustomer entity instance. |
| `AdminCustomerSuccess` | `(data) -> AdminCustomerSuccessEntity` | Create an AdminCustomerSuccess entity instance. |
| `AdminGeneratedVideo` | `(data) -> AdminGeneratedVideoEntity` | Create an AdminGeneratedVideo entity instance. |
| `AdminHealthrx` | `(data) -> AdminHealthrxEntity` | Create an AdminHealthrx entity instance. |
| `AdminInsight` | `(data) -> AdminInsightEntity` | Create an AdminInsight entity instance. |
| `AdminLandingTask` | `(data) -> AdminLandingTaskEntity` | Create an AdminLandingTask entity instance. |
| `AdminMetricsSummary` | `(data) -> AdminMetricsSummaryEntity` | Create an AdminMetricsSummary entity instance. |
| `AdminPost` | `(data) -> AdminPostEntity` | Create an AdminPost entity instance. |
| `AdminRecentSignup` | `(data) -> AdminRecentSignupEntity` | Create an AdminRecentSignup entity instance. |
| `AdminSlideshowDiag` | `(data) -> AdminSlideshowDiagEntity` | Create an AdminSlideshowDiag entity instance. |
| `AdminSlideshowImport` | `(data) -> AdminSlideshowImportEntity` | Create an AdminSlideshowImport entity instance. |
| `AdminUserView` | `(data) -> AdminUserViewEntity` | Create an AdminUserView entity instance. |
| `AdminUsersTableItem` | `(data) -> AdminUsersTableItemEntity` | Create an AdminUsersTableItem entity instance. |
| `AdminVideoRemixer` | `(data) -> AdminVideoRemixerEntity` | Create an AdminVideoRemixer entity instance. |
| `AdvanceStep` | `(data) -> AdvanceStepEntity` | Create an AdvanceStep entity instance. |
| `Agent` | `(data) -> AgentEntity` | Create an Agent entity instance. |
| `AgentAccessCustomersHealth` | `(data) -> AgentAccessCustomersHealthEntity` | Create an AgentAccessCustomersHealth entity instance. |
| `AgentAccessOverview` | `(data) -> AgentAccessOverviewEntity` | Create an AgentAccessOverview entity instance. |
| `AgentAccessPhilHourlyNotification` | `(data) -> AgentAccessPhilHourlyNotificationEntity` | Create an AgentAccessPhilHourlyNotification entity instance. |
| `AgentAccessPhilStatsRefresh` | `(data) -> AgentAccessPhilStatsRefreshEntity` | Create an AgentAccessPhilStatsRefresh entity instance. |
| `AgentAccessPhilVideo` | `(data) -> AgentAccessPhilVideoEntity` | Create an AgentAccessPhilVideo entity instance. |
| `AgentAccessUserAgent` | `(data) -> AgentAccessUserAgentEntity` | Create an AgentAccessUserAgent entity instance. |
| `AgentAccessUserPhoneFarm` | `(data) -> AgentAccessUserPhoneFarmEntity` | Create an AgentAccessUserPhoneFarm entity instance. |
| `AgentAccessUserPost` | `(data) -> AgentAccessUserPostEntity` | Create an AgentAccessUserPost entity instance. |
| `AgentAccessUserSummary` | `(data) -> AgentAccessUserSummaryEntity` | Create an AgentAccessUserSummary entity instance. |
| `AgentAccessUserVideo` | `(data) -> AgentAccessUserVideoEntity` | Create an AgentAccessUserVideo entity instance. |
| `AgentAccessUserWinningAd` | `(data) -> AgentAccessUserWinningAdEntity` | Create an AgentAccessUserWinningAd entity instance. |
| `AgentAccessWinningAdsSummary` | `(data) -> AgentAccessWinningAdsSummaryEntity` | Create an AgentAccessWinningAdsSummary entity instance. |
| `AgentDetail` | `(data) -> AgentDetailEntity` | Create an AgentDetail entity instance. |
| `AgentHealth` | `(data) -> AgentHealthEntity` | Create an AgentHealth entity instance. |
| `AgentHealthCustomerOption` | `(data) -> AgentHealthCustomerOptionEntity` | Create an AgentHealthCustomerOption entity instance. |
| `AgentHealthDetail` | `(data) -> AgentHealthDetailEntity` | Create an AgentHealthDetail entity instance. |
| `AgentPost` | `(data) -> AgentPostEntity` | Create an AgentPost entity instance. |
| `AgentStat` | `(data) -> AgentStatEntity` | Create an AgentStat entity instance. |
| `AgentSummary` | `(data) -> AgentSummaryEntity` | Create an AgentSummary entity instance. |
| `AgentsSummary` | `(data) -> AgentsSummaryEntity` | Create an AgentsSummary entity instance. |
| `AnalysisStatus` | `(data) -> AnalysisStatusEntity` | Create an AnalysisStatus entity instance. |
| `AnalyticsPost` | `(data) -> AnalyticsPostEntity` | Create an AnalyticsPost entity instance. |
| `AnalyzeProduct` | `(data) -> AnalyzeProductEntity` | Create an AnalyzeProduct entity instance. |
| `AssignAgent` | `(data) -> AssignAgentEntity` | Create an AssignAgent entity instance. |
| `Auth` | `(data) -> AuthEntity` | Create an Auth entity instance. |
| `AutoScheduleSetting` | `(data) -> AutoScheduleSettingEntity` | Create an AutoScheduleSetting entity instance. |
| `BulkTikTokStatsUpdate` | `(data) -> BulkTikTokStatsUpdateEntity` | Create a BulkTikTokStatsUpdate entity instance. |
| `Carousel` | `(data) -> CarouselEntity` | Create a Carousel entity instance. |
| `CarouselAgentDetail` | `(data) -> CarouselAgentDetailEntity` | Create a CarouselAgentDetail entity instance. |
| `CarouselStatus` | `(data) -> CarouselStatusEntity` | Create a CarouselStatus entity instance. |
| `Chat` | `(data) -> ChatEntity` | Create a Chat entity instance. |
| `ChatHistory` | `(data) -> ChatHistoryEntity` | Create a ChatHistory entity instance. |
| `ChatSession` | `(data) -> ChatSessionEntity` | Create a ChatSession entity instance. |
| `Comment` | `(data) -> CommentEntity` | Create a Comment entity instance. |
| `CommentCampaign` | `(data) -> CommentCampaignEntity` | Create a CommentCampaign entity instance. |
| `CompleteChatCheckout` | `(data) -> CompleteChatCheckoutEntity` | Create a CompleteChatCheckout entity instance. |
| `CreateBlackoutSora2Video` | `(data) -> CreateBlackoutSora2VideoEntity` | Create a CreateBlackoutSora2Video entity instance. |
| `CreateCarousel` | `(data) -> CreateCarouselEntity` | Create a CreateCarousel entity instance. |
| `CreateProduct` | `(data) -> CreateProductEntity` | Create a CreateProduct entity instance. |
| `CreateResetProductV6` | `(data) -> CreateResetProductV6Entity` | Create a CreateResetProductV6 entity instance. |
| `CreateSora2Video` | `(data) -> CreateSora2VideoEntity` | Create a CreateSora2Video entity instance. |
| `CreateVariation` | `(data) -> CreateVariationEntity` | Create a CreateVariation entity instance. |
| `Customer` | `(data) -> CustomerEntity` | Create a Customer entity instance. |
| `CustomerHealth` | `(data) -> CustomerHealthEntity` | Create a CustomerHealth entity instance. |
| `CustomerHealthAllCustomersItem` | `(data) -> CustomerHealthAllCustomersItemEntity` | Create a CustomerHealthAllCustomersItem entity instance. |
| `CustomerHealthViewsSummary` | `(data) -> CustomerHealthViewsSummaryEntity` | Create a CustomerHealthViewsSummary entity instance. |
| `Daily` | `(data) -> DailyEntity` | Create a Daily entity instance. |
| `DailyStatus` | `(data) -> DailyStatusEntity` | Create a DailyStatus entity instance. |
| `DedicatedAgentsDashboard` | `(data) -> DedicatedAgentsDashboardEntity` | Create a DedicatedAgentsDashboard entity instance. |
| `EnterpriseAgent` | `(data) -> EnterpriseAgentEntity` | Create an EnterpriseAgent entity instance. |
| `EnterpriseProduct` | `(data) -> EnterpriseProductEntity` | Create an EnterpriseProduct entity instance. |
| `ExactAvailability` | `(data) -> ExactAvailabilityEntity` | Create an ExactAvailability entity instance. |
| `ExactFormula` | `(data) -> ExactFormulaEntity` | Create an ExactFormula entity instance. |
| `ExtractV2` | `(data) -> ExtractV2Entity` | Create an ExtractV2 entity instance. |
| `FailedPost` | `(data) -> FailedPostEntity` | Create a FailedPost entity instance. |
| `File` | `(data) -> FileEntity` | Create a File entity instance. |
| `GenerateBlackoutSora2Prompt` | `(data) -> GenerateBlackoutSora2PromptEntity` | Create a GenerateBlackoutSora2Prompt entity instance. |
| `GeneratePomelliDemo` | `(data) -> GeneratePomelliDemoEntity` | Create a GeneratePomelliDemo entity instance. |
| `GeneratePrompt` | `(data) -> GeneratePromptEntity` | Create a GeneratePrompt entity instance. |
| `GenerateSora2Prompt` | `(data) -> GenerateSora2PromptEntity` | Create a GenerateSora2Prompt entity instance. |
| `Healthrx` | `(data) -> HealthrxEntity` | Create a Healthrx entity instance. |
| `InitResetProductV6` | `(data) -> InitResetProductV6Entity` | Create an InitResetProductV6 entity instance. |
| `Iri` | `(data) -> IriEntity` | Create an Iri entity instance. |
| `IrisCapability` | `(data) -> IrisCapabilityEntity` | Create an IrisCapability entity instance. |
| `IrisChat` | `(data) -> IrisChatEntity` | Create an IrisChat entity instance. |
| `IrisConnector` | `(data) -> IrisConnectorEntity` | Create an IrisConnector entity instance. |
| `IrisStatus` | `(data) -> IrisStatusEntity` | Create an IrisStatus entity instance. |
| `IrisTask` | `(data) -> IrisTaskEntity` | Create an IrisTask entity instance. |
| `IrisUsage` | `(data) -> IrisUsageEntity` | Create an IrisUsage entity instance. |
| `Landing` | `(data) -> LandingEntity` | Create a Landing entity instance. |
| `LandingStat` | `(data) -> LandingStatEntity` | Create a LandingStat entity instance. |
| `LandingStatus` | `(data) -> LandingStatusEntity` | Create a LandingStatus entity instance. |
| `LinkInBio` | `(data) -> LinkInBioEntity` | Create a LinkInBio entity instance. |
| `LinkInDm` | `(data) -> LinkInDmEntity` | Create a LinkInDm entity instance. |
| `LinkInPost` | `(data) -> LinkInPostEntity` | Create a LinkInPost entity instance. |
| `LinkUser` | `(data) -> LinkUserEntity` | Create a LinkUser entity instance. |
| `MediaAsset` | `(data) -> MediaAssetEntity` | Create a MediaAsset entity instance. |
| `Men` | `(data) -> MenEntity` | Create a Men entity instance. |
| `Microdrama` | `(data) -> MicrodramaEntity` | Create a Microdrama entity instance. |
| `MicrohubPublic` | `(data) -> MicrohubPublicEntity` | Create a MicrohubPublic entity instance. |
| `OnboardingStatus` | `(data) -> OnboardingStatusEntity` | Create an OnboardingStatus entity instance. |
| `OnboardingV6` | `(data) -> OnboardingV6Entity` | Create an OnboardingV6 entity instance. |
| `PaidUser` | `(data) -> PaidUserEntity` | Create a PaidUser entity instance. |
| `Pexel` | `(data) -> PexelEntity` | Create a Pexel entity instance. |
| `PhoneAdminAvailableAgentSource` | `(data) -> PhoneAdminAvailableAgentSourceEntity` | Create a PhoneAdminAvailableAgentSource entity instance. |
| `Product` | `(data) -> ProductEntity` | Create a Product entity instance. |
| `ProductDashboard` | `(data) -> ProductDashboardEntity` | Create a ProductDashboard entity instance. |
| `ProductDashboardView` | `(data) -> ProductDashboardViewEntity` | Create a ProductDashboardView entity instance. |
| `ProductDemo` | `(data) -> ProductDemoEntity` | Create a ProductDemo entity instance. |
| `ProductLanding` | `(data) -> ProductLandingEntity` | Create a ProductLanding entity instance. |
| `PublicResumeStatus` | `(data) -> PublicResumeStatusEntity` | Create a PublicResumeStatus entity instance. |
| `ReRollVideo` | `(data) -> ReRollVideoEntity` | Create a ReRollVideo entity instance. |
| `ReadRootGet` | `(data) -> ReadRootGetEntity` | Create a ReadRootGet entity instance. |
| `RecordDemoBooked` | `(data) -> RecordDemoBookedEntity` | Create a RecordDemoBooked entity instance. |
| `RefreshStat` | `(data) -> RefreshStatEntity` | Create a RefreshStat entity instance. |
| `RemixerClipper` | `(data) -> RemixerClipperEntity` | Create a RemixerClipper entity instance. |
| `ResetProduct` | `(data) -> ResetProductEntity` | Create a ResetProduct entity instance. |
| `RetryWebsiteScrape` | `(data) -> RetryWebsiteScrapeEntity` | Create a RetryWebsiteScrape entity instance. |
| `SaveSurvey` | `(data) -> SaveSurveyEntity` | Create a SaveSurvey entity instance. |
| `ScanSocial` | `(data) -> ScanSocialEntity` | Create a ScanSocial entity instance. |
| `ScanSocialsPublic` | `(data) -> ScanSocialsPublicEntity` | Create a ScanSocialsPublic entity instance. |
| `ScanSocialsStatus` | `(data) -> ScanSocialsStatusEntity` | Create a ScanSocialsStatus entity instance. |
| `ScheduleV2` | `(data) -> ScheduleV2Entity` | Create a ScheduleV2 entity instance. |
| `Scrape` | `(data) -> ScrapeEntity` | Create a Scrape entity instance. |
| `ScrapeWebsitePublic` | `(data) -> ScrapeWebsitePublicEntity` | Create a ScrapeWebsitePublic entity instance. |
| `ScrapedData` | `(data) -> ScrapedDataEntity` | Create a ScrapedData entity instance. |
| `ScrapingStatus` | `(data) -> ScrapingStatusEntity` | Create a ScrapingStatus entity instance. |
| `SelfServeActivate` | `(data) -> SelfServeActivateEntity` | Create a SelfServeActivate entity instance. |
| `Seo` | `(data) -> SeoEntity` | Create a Seo entity instance. |
| `SeoAiMention` | `(data) -> SeoAiMentionEntity` | Create a SeoAiMention entity instance. |
| `SeoBacklink` | `(data) -> SeoBacklinkEntity` | Create a SeoBacklink entity instance. |
| `SeoKeyword` | `(data) -> SeoKeywordEntity` | Create a SeoKeyword entity instance. |
| `SeoOverview` | `(data) -> SeoOverviewEntity` | Create a SeoOverview entity instance. |
| `SeoTraffic` | `(data) -> SeoTrafficEntity` | Create a SeoTraffic entity instance. |
| `ShareAccessLink` | `(data) -> ShareAccessLinkEntity` | Create a ShareAccessLink entity instance. |
| `Site` | `(data) -> SiteEntity` | Create a Site entity instance. |
| `Slide` | `(data) -> SlideEntity` | Create a Slide entity instance. |
| `SlugValidation` | `(data) -> SlugValidationEntity` | Create a SlugValidation entity instance. |
| `Social` | `(data) -> SocialEntity` | Create a Social entity instance. |
| `SocialScanPreview` | `(data) -> SocialScanPreviewEntity` | Create a SocialScanPreview entity instance. |
| `SocialScanProcess` | `(data) -> SocialScanProcessEntity` | Create a SocialScanProcess entity instance. |
| `SocialScanSave` | `(data) -> SocialScanSaveEntity` | Create a SocialScanSave entity instance. |
| `Sora2Avatar` | `(data) -> Sora2AvatarEntity` | Create a Sora2Avatar entity instance. |
| `Sora2AvatarAssetUpload` | `(data) -> Sora2AvatarAssetUploadEntity` | Create a Sora2AvatarAssetUpload entity instance. |
| `Sora2AvatarStat` | `(data) -> Sora2AvatarStatEntity` | Create a Sora2AvatarStat entity instance. |
| `Stat` | `(data) -> StatEntity` | Create a Stat entity instance. |
| `StatsRefreshBackfill` | `(data) -> StatsRefreshBackfillEntity` | Create a StatsRefreshBackfill entity instance. |
| `StatsRefreshIssue` | `(data) -> StatsRefreshIssueEntity` | Create a StatsRefreshIssue entity instance. |
| `StatsRefreshOverview` | `(data) -> StatsRefreshOverviewEntity` | Create a StatsRefreshOverview entity instance. |
| `StatsRefreshRunSummary` | `(data) -> StatsRefreshRunSummaryEntity` | Create a StatsRefreshRunSummary entity instance. |
| `StatsRefreshTaskTrigger` | `(data) -> StatsRefreshTaskTriggerEntity` | Create a StatsRefreshTaskTrigger entity instance. |
| `Stripe` | `(data) -> StripeEntity` | Create a Stripe entity instance. |
| `Style` | `(data) -> StyleEntity` | Create a Style entity instance. |
| `Template` | `(data) -> TemplateEntity` | Create a Template entity instance. |
| `TikTokCreatorInfo` | `(data) -> TikTokCreatorInfoEntity` | Create a TikTokCreatorInfo entity instance. |
| `TopPost` | `(data) -> TopPostEntity` | Create a TopPost entity instance. |
| `UploadPostAgent` | `(data) -> UploadPostAgentEntity` | Create an UploadPostAgent entity instance. |
| `User` | `(data) -> UserEntity` | Create an User entity instance. |
| `UserAgent` | `(data) -> UserAgentEntity` | Create an UserAgent entity instance. |
| `UserHealthDetail` | `(data) -> UserHealthDetailEntity` | Create an UserHealthDetail entity instance. |
| `UserWithAvatarSubmission` | `(data) -> UserWithAvatarSubmissionEntity` | Create an UserWithAvatarSubmission entity instance. |
| `UsersHealth` | `(data) -> UsersHealthEntity` | Create an UsersHealth entity instance. |
| `Video` | `(data) -> VideoEntity` | Create a Video entity instance. |
| `VideoRemixerWorker` | `(data) -> VideoRemixerWorkerEntity` | Create a VideoRemixerWorker entity instance. |
| `WatchdogRecovery` | `(data) -> WatchdogRecoveryEntity` | Create a WatchdogRecovery entity instance. |
| `WinningAd` | `(data) -> WinningAdEntity` | Create a WinningAd entity instance. |
| `XAdaptation` | `(data) -> XAdaptationEntity` | Create a XAdaptation entity instance. |
| `ZerohumanAdminAccount` | `(data) -> ZerohumanAdminAccountEntity` | Create a ZerohumanAdminAccount entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria, and return it. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria, one per record. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity, and return it. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity, and return it. |
| `patch` | `(reqdata, ctrl) -> any, err` | Change part of an existing entity, and return it. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity, and return it marked as deleted. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the entity
itself — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `patch` / `remove` | the entity, whose `data_get()` reads its record (a `table`) |
| `list` | an array (`table`) of entities, one per record |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local active_onboarding, err = client:ActiveOnboarding():load()
    if err then error(err) end
    -- active_onboarding is the loaded entity

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

### Entities

#### Activate

| Field | Description |
| --- | --- |
| `activated_at` |  |
| `message` |  |
| `success` |  |

Operations: Create.

API path: `/api/admin/users/{user_id}/activate`

#### ActivateUser

| Field | Description |
| --- | --- |
| `activated_at` |  |
| `message` |  |
| `success` |  |

Operations: Create.

API path: `/api/admin/users/{user_id}/activate-and-complete-onboarding`

#### ActiveOnboarding

| Field | Description |
| --- | --- |
| `current_step` |  |
| `has_active_onboarding` |  |
| `onboarding_data_id` |  |

Operations: Load.

API path: `/api/onboarding-v6/active-session`

#### Admin

| Field | Description |
| --- | --- |
| `apply` | Apply safe canonical or clean-only URL updates |
| `count` |  |
| `created_at` |  |
| `date_from` |  |
| `date_to` |  |
| `email` |  |
| `id` |  |
| `include_failed` |  |
| `include_pending` |  |
| `include_records` | Include full per-field audit records in the response |
| `issue_ids` |  |
| `only_active` | Limit the audit to active agents |
| `platform` |  |
| `posting_method` |  |
| `product_id` |  |
| `query` |  |
| `reason` |  |
| `regenerate` |  |
| `status` |  |
| `user_membership` |  |
| `user_name` |  |
| `user_onboarding_step` |  |
| `video_type` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/admin/users/{user_id}/regenerate-video/{video_id}`

#### AdminAccountReset

| Field | Description |
| --- | --- |
| `agent_ids` |  |
| `agent_ids_sha256` |  |
| `backup_sha256` |  |
| `batch_size` |  |
| `confirmation` |  |
| `customer_email` |  |
| `pc_name` |  |
| `phase` |  |
| `product_id` |  |
| `video_ids` |  |

Operations: Create.

API path: `/api/admin/agent-account-reset`

#### AdminCarousel

| Field | Description |
| --- | --- |
| `agent_id` |  |
| `batch_id` |  |
| `caption` |  |
| `content_base64` |  |
| `day` |  |
| `dry_run` |  |
| `engine_run` |  |
| `expected_revision` |  |
| `formula` |  |
| `formula_id` |  |
| `prompt` |  |
| `slides` |  |
| `title` |  |

Operations: Create, Load, Update.

API path: `/api/admin/carousels/slideshow-import/{batch_id}/state`

#### AdminCarouselDemoReview

| Field | Description |
| --- | --- |
| `id` |  |
| `items` |  |
| `reason` |  |

Operations: Create, Load, Update.

API path: `/api/admin/carousels/demo-reviews/{formula_id}/decision`

#### AdminCustomer

| Field | Description |
| --- | --- |
| `account_type` |  |
| `active_vireel_agents` |  |
| `agents` |  |
| `billing_source` |  |
| `contracted_agents` |  |
| `email` |  |
| `membership` |  |
| `name` |  |
| `pfa_only_agents` |  |
| `severity` |  |
| `status` |  |
| `subscription_status` |  |
| `user_id` |  |

Operations: List.

API path: `/api/admin/insights/customers`

#### AdminCustomerSuccess

| Field | Description |
| --- | --- |
| `active_agents` |  |
| `active_products` |  |
| `agents_count` |  |
| `auto_schedule_status` |  |
| `days_until_period_end` |  |
| `email` |  |
| `feature_impact` |  |
| `last_notification_at` |  |
| `membership` |  |
| `name` |  |
| `notification_count` |  |
| `notification_events` |  |
| `priority` |  |
| `severity` |  |
| `status_label` |  |
| `subscription_current_period_end` |  |
| `subscription_status` |  |
| `upcoming_posts` |  |
| `user_id` |  |

Operations: List.

API path: `/api/admin/insights/customer-success`

#### AdminGeneratedVideo

| Field | Description |
| --- | --- |
| `agent_id` |  |
| `agent_name` |  |
| `created_at` |  |
| `duration` |  |
| `generation_status` |  |
| `id` |  |
| `product_id` |  |
| `thumbnail_url` |  |
| `title` |  |
| `type` |  |
| `updated_at` |  |
| `url` |  |

Operations: List.

API path: `/api/admin/users/{user_id}/generated-videos`

#### AdminHealthrx

| Field | Description |
| --- | --- |
| `action` |  |
| `delivery_enabled` |  |
| `id` |  |
| `option_id` |  |
| `plan` |  |
| `preparation_enabled` |  |
| `product_id` |  |
| `reason` |  |
| `request_key` |  |
| `revision` |  |
| `schedule_enabled` |  |
| `version` |  |
| `viewed` |  |

Operations: Create, Load, Update.

API path: `/api/admin/healthrx/items/{kind}/{item_id}/decision`

#### AdminInsight

| Field | Description |
| --- | --- |
| `customer_success_cases` |  |
| `customers` |  |
| `generated_at` |  |
| `pfa_database` |  |
| `recent_signups` |  |
| `summary` |  |
| `vireel_database` |  |

Operations: List, Load.

API path: `/api/admin/insights`

#### AdminLandingTask

| Field | Description |
| --- | --- |
| `task_id` |  |

Operations: Create.

API path: `/api/admin/users/{user_id}/regenerate-landing`

#### AdminMetricsSummary

| Field | Description |
| --- | --- |
| `paid_users_by_level` |  |
| `total_cancellations` |  |
| `total_previews_generated` |  |
| `total_signups` |  |
| `total_videos_generated` |  |
| `url_attempts` |  |
| `user_credits` |  |
| `user_gifted_credits` |  |

Operations: List.

API path: `/api/admin/metrics/summary`

#### AdminPost

| Field | Description |
| --- | --- |
| `admin_job_ids` |  |
| `agent_id` |  |
| `agent_name` |  |
| `agent_platform_urls` |  |
| `agent_url` |  |
| `comments` |  |
| `error_message` |  |
| `failed_at` |  |
| `id` |  |
| `instagram_posted_by` |  |
| `instagram_posted_url` |  |
| `instagram_scraped_social_post_id` |  |
| `is_instagram_posted` |  |
| `is_tiktok_posted` |  |
| `is_youtube_posted` |  |
| `last_refreshed_at` |  |
| `likes` |  |
| `platform_post_methods` |  |
| `platform_urls` |  |
| `post_method` |  |
| `post_platforms` |  |
| `post_url` |  |
| `posted_at` |  |
| `product_id` |  |
| `results_status` |  |
| `scheduled_datetime` |  |
| `source_type` |  |
| `status` |  |
| `tiktok_posted_by` |  |
| `tiktok_posted_url` |  |
| `tiktok_scraped_social_post_id` |  |
| `upload_post_error` |  |
| `upload_post_status` |  |
| `upload_post_uploads` |  |
| `user_email` |  |
| `user_id` |  |
| `user_name` |  |
| `video_id` |  |
| `video_url` |  |
| `views` |  |
| `youtube_posted_by` |  |
| `youtube_posted_url` |  |
| `youtube_scraped_social_post_id` |  |

Operations: List.

API path: `/api/admin/posts`

#### AdminRecentSignup

| Field | Description |
| --- | --- |
| `created_at` |  |
| `current_step` |  |
| `email` |  |
| `email_source` |  |
| `error_message` |  |
| `flow_variant` |  |
| `id` |  |
| `inactive_minutes` |  |
| `last_notification_at` |  |
| `last_seen_at` |  |
| `likely_cause` |  |
| `notification_count` |  |
| `notification_events` |  |
| `product_id` |  |
| `product_name` |  |
| `product_url` |  |
| `severity` |  |
| `social_scan_status` |  |
| `stage_label` |  |
| `status` |  |
| `updated_at` |  |
| `website_scrape_status` |  |

Operations: List.

API path: `/api/admin/insights/recent-signups`

#### AdminSlideshowDiag

| Field | Description |
| --- | --- |
| `agent_id` |  |
| `batch_id` |  |
| `caption` |  |
| `content_base64` |  |
| `day` |  |
| `formula_id` |  |
| `id` |  |
| `title` |  |

Operations: Create.

API path: `/api/admin/slideshow-diag/{stage}`

#### AdminSlideshowImport

| Field | Description |
| --- | --- |
| `agent_id` |  |
| `batch_id` |  |
| `caption` |  |
| `day` |  |
| `dry_run` |  |
| `engine_run` |  |
| `formula_id` |  |
| `slides` |  |
| `title` |  |

Operations: Create, Load.

API path: `/api/admin/slideshow-import2/{batch_id}/state`

#### AdminUserView

| Field | Description |
| --- | --- |
| `account_type` |  |
| `admin_notes` |  |
| `agents_count` |  |
| `created_at` |  |
| `credits` |  |
| `email` |  |
| `id` |  |
| `industry` |  |
| `is_admin` |  |
| `is_bookmarked` |  |
| `is_internal_user` |  |
| `membership` |  |
| `name` |  |
| `new_email` |  |
| `partner_external_user_id` |  |
| `partner_policy_code` |  |
| `partner_source` |  |
| `product_name` |  |
| `product_url` |  |
| `skip` |  |
| `subscription_details` |  |
| `subscription_status` |  |

Operations: Create, List, Remove, Update.

API path: `/api/admin/users/{user_id}/fix-auto-schedule-by-date`

#### AdminUsersTableItem

| Field | Description |
| --- | --- |
| `activated` |  |
| `agents_count` |  |
| `created_at` |  |
| `credits` |  |
| `demo_booked` |  |
| `email` |  |
| `id` |  |
| `membership` |  |
| `name` |  |
| `onboarding_flow` |  |
| `product_name` |  |
| `product_url` |  |
| `survey_data` |  |

Operations: List.

API path: `/api/admin/users/table`

#### AdminVideoRemixer

| Field | Description |
| --- | --- |
| `activity` |  |
| `allowed_platforms` |  |
| `anchor_clip_id` |  |
| `atomicity_class` |  |
| `auto_render` |  |
| `campaign_allowed` |  |
| `channel` |  |
| `channel_default` |  |
| `clip_id` |  |
| `clip_ids` |  |
| `collected_at` |  |
| `comments` |  |
| `completion_rate` |  |
| `confirmed_duplicate_of` |  |
| `consent_doc_uri` |  |
| `contact` |  |
| `conversions` |  |
| `count` |  |
| `creator` |  |
| `creator_id` |  |
| `crop_window` |  |
| `cta_product_id` |  |
| `days` |  |
| `derivative_edits_allowed` |  |
| `enabled` |  |
| `end_ms` |  |
| `enqueue` |  |
| `errors` |  |
| `evidence` |  |
| `expected_revision` |  |
| `expected_revisions` |  |
| `external_ai_allowed` |  |
| `file` |  |
| `followers` |  |
| `formula_id` |  |
| `formula_ids` |  |
| `handles` |  |
| `hook_subtype` |  |
| `hour_utc` |  |
| `human_role` |  |
| `idempotency_key` |  |
| `items` |  |
| `kim_clip_ids` |  |
| `kind` |  |
| `levels` |  |
| `likes` |  |
| `media_enabled` |  |
| `medical_claim_present` |  |
| `minute_utc` |  |
| `music_bed_allowed` |  |
| `music_policy` |  |
| `name` |  |
| `niche` |  |
| `notes` |  |
| `origin` |  |
| `owner_waiver` |  |
| `paid_ads_allowed` |  |
| `patient_identifiable` |  |
| `person_type` |  |
| `pipeline` |  |
| `planning_only` |  |
| `platform` |  |
| `platform_post_id` |  |
| `policy` |  |
| `polish` |  |
| `post_url` |  |
| `posted_at` |  |
| `primary_role` |  |
| `purpose` |  |
| `rate` |  |
| `rationale` |  |
| `reason` |  |
| `reference_source_id` |  |
| `requires_medical_review` |  |
| `review_status` |  |
| `revision` |  |
| `rights_expires_at` |  |
| `rights_status` |  |
| `run_id` |  |
| `sample_links` |  |
| `secondary_roles` |  |
| `seconds` |  |
| `seed` |  |
| `seed_base` |  |
| `sensitive_personal_data_present` |  |
| `shares` |  |
| `shoot` |  |
| `slots` |  |
| `soundbite_title` |  |
| `source` |  |
| `source_id` |  |
| `source_ids` |  |
| `spend_usd` |  |
| `spiciness` |  |
| `spiciness_notes` |  |
| `start_ms` |  |
| `status` |  |
| `terry_clip_ids` |  |
| `testimonial_strength` |  |
| `testimonial_type` |  |
| `tier` |  |
| `timeline` |  |
| `topic` |  |
| `topic_tags` |  |
| `total_target_ms` |  |
| `use_learned_weights` |  |
| `views` |  |
| `window` |  |

Operations: Create, Load, Patch, Remove, Update.

API path: `/api/admin/video-remixer/clips/{clip_id}/media`

#### AdvanceStep

| Field | Description |
| --- | --- |
| `current_step` |  |
| `onboarding_data_id` | UUID of the OnboardingData record |
| `success` |  |
| `to_step` | Target step name |

Operations: Create.

API path: `/api/onboarding-v6/advance-step`

#### Agent

| Field | Description |
| --- | --- |
| `active_connections` |  |
| `at_capacity` |  |
| `id` |  |
| `is_active` |  |
| `name` |  |
| `tiktok_stats` |  |
| `type` |  |

Operations: List.

API path: `/api/admin/agents`

#### AgentAccessCustomersHealth

| Field | Description |
| --- | --- |
| `accountType` |  |
| `agentQuota` |  |
| `assignedAgentsByType` |  |
| `assignedAgentsTotal` |  |
| `createdAt` |  |
| `email` |  |
| `isInternalUser` |  |
| `membership` |  |
| `name` |  |
| `performance` |  |
| `productCount` |  |
| `subscriptionCurrentPeriodEnd` |  |
| `subscriptionDetails` |  |
| `subscriptionStatus` |  |
| `usage` |  |
| `userId` |  |

Operations: List.

API path: `/api/admin/customers-health`

#### AgentAccessOverview

| Field | Description |
| --- | --- |
| `activeUsers` |  |
| `generatedAt` |  |
| `newUsersYesterday` |  |
| `onboardingContextCounts` |  |
| `onboardingCurrentStepCounts` |  |
| `onboardingCurrentStepWindow` |  |
| `onboardingFlowVariantCounts` |  |
| `onboardingLockedUntilActivation` |  |
| `onboardingRecordsTotal` |  |
| `onboardingRecordsWindow` |  |
| `onboardingSocialScanStatusCounts` |  |
| `onboardingWebsiteScrapeStatusCounts` |  |
| `subscriptionStatusCounts` |  |
| `totalInternalUsers` |  |
| `totalUsers` |  |
| `trialStartedYesterday` |  |
| `trialingUsers` |  |

Operations: Load.

API path: `/api/agent-access/overview`

#### AgentAccessPhilHourlyNotification

| Field | Description |
| --- | --- |
| `generatedAt` |  |
| `phoneHealth` |  |
| `scheduledPosts` |  |
| `targetDate` |  |
| `uploadPostInstagramHealth` |  |
| `uploadPostTiktokHealth` |  |
| `uploadPostYoutubeHealth` |  |

Operations: Load.

API path: `/api/agent-access/phil-notifications/hourly`

#### AgentAccessPhilStatsRefresh

| Field | Description |
| --- | --- |
| `generatedAt` |  |
| `statsRefresh` |  |
| `targetDate` |  |

Operations: Load.

API path: `/api/agent-access/phil-notifications/stats-refresh`

#### AgentAccessPhilVideo

| Field | Description |
| --- | --- |
| `generatedAt` |  |
| `targetDate` |  |
| `videos` |  |

Operations: Load.

API path: `/api/agent-access/phil-notifications/videos`

#### AgentAccessUserAgent

| Field | Description |
| --- | --- |
| `agentQuota` |  |
| `agents` |  |
| `assignedByType` |  |
| `assignedTotal` |  |
| `email` |  |
| `products` |  |
| `userId` |  |

Operations: List.

API path: `/api/agent-access/user-agents`

#### AgentAccessUserPhoneFarm

| Field | Description |
| --- | --- |
| `avatar` |  |
| `facebookUrl` |  |
| `id` |  |
| `instagramUrl` |  |
| `lastAdminSyncedAt` |  |
| `name` |  |
| `productId` |  |
| `productName` |  |
| `tiktokUrl` |  |
| `type` |  |
| `uploadPostPlatforms` |  |
| `youtubeUrl` |  |

Operations: List.

API path: `/api/agent-access/user-phone-farm`

#### AgentAccessUserPost

| Field | Description |
| --- | --- |
| `deltaYesterday` |  |
| `expectedVideosPerDay` |  |
| `postedToday` |  |
| `postedYesterday` |  |
| `productId` |  |
| `productName` |  |

Operations: List.

API path: `/api/agent-access/user-posts`

#### AgentAccessUserSummary

| Field | Description |
| --- | --- |
| `deletedAt` |  |
| `id` |  |
| `isActive` |  |
| `name` |  |
| `url` |  |

Operations: List.

API path: `/api/agent-access/user-summary`

#### AgentAccessUserVideo

| Field | Description |
| --- | --- |
| `allTime` |  |
| `email` |  |
| `today` |  |
| `userId` |  |
| `yesterday` |  |

Operations: Load.

API path: `/api/agent-access/user-videos`

#### AgentAccessUserWinningAd

| Field | Description |
| --- | --- |
| `productId` |  |
| `productName` |  |
| `winningAds` |  |
| `winningAdsCount` |  |

Operations: List.

API path: `/api/agent-access/user-winning-ads`

#### AgentAccessWinningAdsSummary

| Field | Description |
| --- | --- |
| `email` |  |
| `name` |  |
| `productCount` |  |
| `productsWithWinningAds` |  |
| `subscriptionStatus` |  |
| `totalWinningAds` |  |
| `userId` |  |

Operations: List.

API path: `/api/agent-access/winning-ads-summary`

#### AgentDetail

| Field | Description |
| --- | --- |
| `activeConnections` |  |
| `assignedAt` |  |
| `avatar` |  |
| `bio` |  |
| `facebookUrl` |  |
| `id` |  |
| `instagramUrl` |  |
| `isActive` |  |
| `name` |  |
| `role` |  |
| `tiktokStats` |  |
| `tiktokUrl` |  |
| `type` |  |
| `uploadPostPlatforms` |  |
| `youtubeUrl` |  |

Operations: List, Update.

API path: `/api/upload-post-agents/all`

#### AgentHealth

| Field | Description |
| --- | --- |
| `daily` |  |
| `dates` |  |
| `generated_at` |  |
| `groups` |  |
| `latest` |  |
| `live_date` |  |
| `phone_admin_generated_at` |  |
| `platform` |  |
| `post_target` |  |
| `qa_managed_agent_ids` |  |
| `scope_prefixes` |  |
| `timezone` |  |
| `warmup_target` |  |

Operations: List.

API path: `/api/admin/agent-health`

#### AgentHealthCustomerOption

| Field | Description |
| --- | --- |
| `agent_count` |  |
| `email` |  |
| `user_id` |  |

Operations: List.

API path: `/api/admin/agent-health/customers`

#### AgentHealthDetail

| Field | Description |
| --- | --- |
| `archived_issue_total` |  |
| `date` |  |
| `generated_at` |  |
| `group_id` |  |
| `has_more` |  |
| `issue_total` |  |
| `issues` |  |
| `limit` |  |
| `metric` |  |
| `offset` |  |
| `warmup_runs` |  |
| `warning_total` |  |
| `warnings` |  |

Operations: List.

API path: `/api/admin/agent-health/details`

#### AgentPost

| Field | Description |
| --- | --- |
| `comments` |  |
| `error_message` |  |
| `id` |  |
| `likes` |  |
| `product_id` |  |
| `results` |  |
| `scheduled_datetime` |  |
| `source_type` |  |
| `status` |  |
| `user_email` |  |
| `user_id` |  |
| `user_name` |  |
| `video_id` |  |
| `video_url` |  |
| `views` |  |

Operations: List.

API path: `/api/admin/agents/{agent_id}/posts`

#### AgentStat

| Field | Description |
| --- | --- |
| `agents_needed` |  |
| `dedicated_agents` |  |
| `shared_agents` |  |
| `total_agents` |  |

Operations: Load.

API path: `/api/admin/agents/stats`

#### AgentSummary

| Field | Description |
| --- | --- |
| `agent_count` |  |
| `favicon_url` |  |
| `product_id` |  |
| `product_name` |  |

Operations: List.

API path: `/api/enterprise/agents/summary`

#### AgentsSummary

| Field | Description |
| --- | --- |
| `total_agents` |  |
| `total_agents_count_sum` |  |

Operations: Load.

API path: `/api/admin/agents-summary`

#### AnalysisStatus

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/scraper/analysis-status`

#### AnalyticsPost

| Field | Description |
| --- | --- |
| `agent` |  |
| `comment` |  |
| `created_at` |  |
| `id` |  |
| `product_id` |  |
| `queue_position` |  |
| `results` |  |
| `scheduled_datetime` |  |
| `scraped_posts` |  |
| `source_type` |  |
| `status` |  |
| `updated_at` |  |
| `video` |  |

Operations: List.

API path: `/api/analytics/posts`

#### AnalyzeProduct

| Field | Description |
| --- | --- |
| `instagram_username` |  |
| `message` |  |
| `status` |  |
| `url` |  |

Operations: Create.

API path: `/api/scraper/analyze-product`

#### AssignAgent

| Field | Description |
| --- | --- |
| `agent` | Agent information for V6. |
| `assignment` | Assignment information for V6. |
| `mock_agents` |  |
| `onboarding_data_id` | UUID of the OnboardingData record |

Operations: Create.

API path: `/api/onboarding-v6/assign-agent`

#### Auth

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/auth/magic-link`

#### AutoScheduleSetting

| Field | Description |
| --- | --- |
| `can_enable_repost` |  |
| `effective_posted_video_reuse_percent` |  |
| `enabled_video_types` | List of enabled video type filters |
| `is_enabled` |  |
| `lock_video_regeneration_controls` |  |
| `membership_tier` |  |
| `posted_video_reuse_percent` |  |
| `product_id` |  |
| `repost_source` |  |
| `videos_per_day` |  |

Operations: Load, Update.

API path: `/api/schedule/settings`

#### BulkTikTokStatsUpdate

| Field | Description |
| --- | --- |
| `failedIds` |  |
| `updatedCount` |  |
| `updates` |  |

Operations: Update.

API path: `/api/upload-post-agents/bulk/tiktok-stats`

#### Carousel

| Field | Description |
| --- | --- |
| `agent_id` |  |
| `agent_name` |  |
| `audit_created_at` |  |
| `audit_snapshot_sha256` |  |
| `caption` |  |
| `comments` |  |
| `fit_score` |  |
| `format` |  |
| `formula` |  |
| `formula_id` |  |
| `formula_name` |  |
| `generation` |  |
| `id` |  |
| `image_prompt` |  |
| `likes` |  |
| `main_prompt` |  |
| `metrics_updated_at` |  |
| `post_url` |  |
| `profile_url` |  |
| `qa` |  |
| `qa_status` |  |
| `qa_verdict` |  |
| `quality_score` |  |
| `queue_id` |  |
| `relevance_score` |  |
| `scheduled_at` |  |
| `slide_count` |  |
| `slides` |  |
| `source` |  |
| `status` |  |
| `thumbnail_url` |  |
| `title` |  |
| `video_id` |  |
| `views` |  |

Operations: Create, List, Load.

API path: `/api/carousel/{video_id}/finalize`

#### CarouselAgentDetail

| Field | Description |
| --- | --- |
| `agent_id` |  |
| `agent_name` |  |
| `connection_status` |  |
| `followers` |  |
| `following` |  |
| `metrics_updated_at` |  |
| `phone_admin_status` |  |
| `profile_likes` |  |
| `profile_url` |  |
| `warmup_days` |  |
| `warmup_hold_until` |  |
| `warmup_status` |  |

Operations: Load.

API path: `/api/admin/carousels/agents/{agent_id}`

#### CarouselStatus

| Field | Description |
| --- | --- |
| `caption` |  |
| `error` |  |
| `id` |  |
| `image_model` |  |
| `image_provider` |  |
| `image_task_id` |  |
| `image_url` |  |
| `index` |  |
| `prompt` |  |
| `status` |  |

Operations: List.

API path: `/api/carousel/{video_id}/status`

#### Chat

| Field | Description |
| --- | --- |
| `idempotencyKey` |  |
| `message` |  |
| `sessionId` |  |

Operations: Create.

API path: `/api/chat/sessions/{session_id}/messages`

#### ChatHistory

| Field | Description |
| --- | --- |
| `chatSubVariant` |  |
| `createdAt` |  |
| `messages` |  |
| `model` |  |
| `onboardingDataId` |  |
| `routeRecommendation` |  |
| `salesStage` |  |
| `selectedPlan` |  |
| `session` |  |
| `sessionId` |  |
| `status` |  |
| `updatedAt` |  |

Operations: Create, Load.

API path: `/api/chat/sessions`

#### ChatSession

| Field | Description |
| --- | --- |
| `chatSubVariant` |  |
| `createdAt` |  |
| `model` |  |
| `plan` |  |
| `route` |  |
| `routeRecommendation` |  |
| `salesStage` |  |
| `selectedPlan` |  |
| `sessionId` |  |
| `status` |  |
| `updatedAt` |  |

Operations: Create.

API path: `/api/chat/sessions/{session_id}/complete`

#### Comment

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/comments/results`

#### CommentCampaign

| Field | Description |
| --- | --- |
| `account_daily_limit` |  |
| `account_weekly_limit` |  |
| `action` |  |
| `active_days_per_week` |  |
| `agent_id` |  |
| `allowlist` |  |
| `analysis_daily_limit` |  |
| `analysis_model` |  |
| `analysis_reservation_usd` |  |
| `approved_markets` |  |
| `brand_forward_enabled` |  |
| `briefs` |  |
| `candidate_only` |  |
| `claims` |  |
| `cohort_removal_threshold` |  |
| `daily_cost_ceiling_usd` |  |
| `delivery_mode` |  |
| `disclosure_mode` |  |
| `disclosure_template` |  |
| `draft_options_count` |  |
| `draft_review_reservation_usd` |  |
| `exceptional_daily_cap_approved` |  |
| `execution_enabled` |  |
| `experiment_styles` |  |
| `inventory_factor` |  |
| `keywords` |  |
| `max_duration_seconds` |  |
| `metadata_pass_rate` |  |
| `min_interval_minutes` |  |
| `mode` |  |
| `monitored_creators` |  |
| `platform` |  |
| `platform_permission_evidence` |  |
| `policy_approved_by` |  |
| `policy_expires_at` |  |
| `policy_version` |  |
| `product_daily_limit` |  |
| `qualification_rate` |  |
| `raw_daily_limit` |  |
| `raw_result_reservation_usd` |  |
| `reason` |  |
| `replies_enabled` |  |
| `request_key` |  |
| `reviewer_model` |  |
| `scan_interval_hours` |  |
| `search_change_reason` |  |
| `search_effective_at` |  |
| `shadow_sample_limit` |  |
| `spent_seconds` |  |
| `task_ttl_hours` |  |
| `top_comment_analysis_enabled` |  |
| `writer_model` |  |

Operations: Create, Load, Update.

API path: `/api/comments/products/{product_id}/campaign/sources/{source_id}/resolve`

#### CompleteChatCheckout

| Field | Description |
| --- | --- |
| `message` |  |
| `onboarding_data_id` |  |
| `product_id` |  |
| `ready` |  |
| `success` |  |

Operations: Create.

API path: `/api/onboarding-v6/complete-chat-checkout`

#### CreateBlackoutSora2Video

| Field | Description |
| --- | --- |
| `main_prompt` |  |
| `media_asset_id` |  |
| `product_id` |  |
| `requires_polling` |  |
| `video` |  |

Operations: Create.

API path: `/api/core/create-blackout-sora2-video`

#### CreateCarousel

| Field | Description |
| --- | --- |
| `copy_mode` |  |
| `expected_owner_user_id` |  |
| `expected_product_id` |  |
| `expected_product_name` |  |
| `image_model` |  |
| `mention_product` |  |
| `message` |  |
| `num_slides` |  |
| `owner_user_id` |  |
| `product_id` | Product ID to use. |
| `product_name` |  |
| `product_placement` |  |
| `request_id` |  |
| `script_style_custom` |  |
| `script_style_id` |  |
| `selected_hook` |  |
| `status` |  |
| `success` |  |
| `template_id` |  |
| `video_id` |  |
| `visual_style_custom` |  |
| `visual_style_id` |  |

Operations: Create.

API path: `/api/carousel/create-from-exact`

#### CreateProduct

| Field | Description |
| --- | --- |
| `onboarding_data_id` | UUID of the OnboardingData record |
| `product_id` |  |
| `success` |  |
| `videos_queued` |  |

Operations: Create.

API path: `/api/onboarding-v6/create-product`

#### CreateResetProductV6

| Field | Description |
| --- | --- |
| `agents_transferred` |  |
| `credits_deducted` |  |
| `onboarding_data_id` |  |
| `product_id` |  |
| `remaining_credits` |  |
| `success` |  |
| `videos_queued` |  |

Operations: Create.

API path: `/api/reset-product/create-v6`

#### CreateSora2Video

| Field | Description |
| --- | --- |
| `image_prompt` |  |
| `main_prompt` |  |
| `model` |  |
| `requires_polling` |  |
| `seconds` |  |
| `size` |  |
| `video` |  |

Operations: Create.

API path: `/api/core/create-sora2-video`

#### CreateVariation

| Field | Description |
| --- | --- |
| `hook_duration` |  |
| `media_asset_id` |  |
| `message` |  |
| `product_id` |  |
| `prompt` |  |
| `task_id` |  |
| `video_id` |  |

Operations: Create.

API path: `/api/video-variation/create-hook`

#### Customer

| Field | Description |
| --- | --- |
| `account_type` |  |
| `assigned_agents_count` |  |
| `email` |  |
| `id` |  |
| `is_migrated` |  |

Operations: List.

API path: `/api/admin/customer-health/customers`

#### CustomerHealth

| Field | Description |
| --- | --- |
| `assigned_agents` |  |
| `available_dates` |  |
| `date` |  |
| `email` |  |
| `entries` |  |
| `id` |  |
| `performance_overview` |  |
| `platform_coverage_summary` |  |
| `user_id` |  |

Operations: Load.

API path: `/api/admin/customer-health/{user_id}`

#### CustomerHealthAllCustomersItem

| Field | Description |
| --- | --- |
| `account_type` |  |
| `assigned_agents_count` |  |
| `daily_stats` |  |
| `email` |  |
| `is_migrated` |  |
| `total_views` |  |
| `user_id` |  |

Operations: List.

API path: `/api/admin/customer-health/all-customers`

#### CustomerHealthViewsSummary

| Field | Description |
| --- | --- |
| `average_views_per_result` |  |
| `date` |  |
| `end_date` |  |
| `paid_users_count` |  |
| `posted_results` |  |
| `range` |  |
| `start_date` |  |
| `top_users` |  |
| `total_views` |  |
| `trend` |  |
| `trend_granularity` |  |
| `user_email` |  |
| `user_id` |  |
| `users_with_views` |  |

Operations: List.

API path: `/api/admin/customer-health/views`

#### Daily

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Create.

API path: `/api/carousel/daily/{product_id}/plan`

#### DailyStatus

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Load.

API path: `/api/carousel/daily/{product_id}/status`

#### DedicatedAgentsDashboard

| Field | Description |
| --- | --- |
| `active_connections` |  |
| `assigned_user_id` |  |
| `assigned_user_ids` |  |
| `bio` |  |
| `id` |  |
| `instagram_url` |  |
| `is_active` |  |
| `last_admin_synced_at` |  |
| `name` |  |
| `role` |  |
| `tiktok_stats` |  |
| `tiktok_url` |  |
| `today_failed_entries` |  |
| `today_stats` |  |
| `upload_post_platforms` |  |
| `upload_post_profile` |  |
| `yesterday_failed_entries` |  |
| `yesterday_stats` |  |
| `youtube_url` |  |

Operations: List.

API path: `/api/admin/agents/dedicated-dashboard`

#### EnterpriseAgent

| Field | Description |
| --- | --- |
| `count` |  |
| `product_id` |  |
| `source_product_id` |  |
| `target_product_id` |  |

Operations: Create, Load.

API path: `/api/enterprise/agents/assign`

#### EnterpriseProduct

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/enterprise/products/{product_id}/status`

#### ExactAvailability

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/carousel/exact-availability`

#### ExactFormula

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/carousel/exact-formulas`

#### ExtractV2

| Field | Description |
| --- | --- |
| `instagram_username` |  |
| `message` |  |
| `status` |  |
| `url` |  |

Operations: Create.

API path: `/api/scraper/extract_v2`

#### FailedPost

| Field | Description |
| --- | --- |
| `agent_id` |  |
| `agent_name` |  |
| `agent_platforms` |  |
| `error_message` |  |
| `id` |  |
| `product_id` |  |
| `results` |  |
| `scheduled_datetime` |  |
| `source_type` |  |
| `status` |  |
| `user_email` |  |
| `user_id` |  |
| `user_name` |  |
| `video_id` |  |
| `video_url` |  |

Operations: List.

API path: `/api/admin/failed-posts`

#### File

| Field | Description |
| --- | --- |
| `file` |  |

Operations: Create.

API path: `/api/file-upload`

#### GenerateBlackoutSora2Prompt

| Field | Description |
| --- | --- |
| `media_asset_id` |  |
| `product_id` |  |
| `prompt` |  |

Operations: Create.

API path: `/api/core/generate-blackout-sora2-prompt`

#### GeneratePomelliDemo

| Field | Description |
| --- | --- |
| `current_demo_count` |  |
| `max_demos` |  |
| `message` |  |
| `product_id` | UUID of the Product |
| `success` |  |

Operations: Create.

API path: `/api/onboarding-v6/generate-pomelli-demo`

#### GeneratePrompt

| Field | Description |
| --- | --- |
| `hook_duration` |  |
| `media_asset_id` |  |
| `media_asset_url` |  |
| `prompt` |  |

Operations: Create.

API path: `/api/video-variation/generate-prompt`

#### GenerateSora2Prompt

| Field | Description |
| --- | --- |
| `prompt` |  |

Operations: Load.

API path: `/api/core/generate-sora2-prompt`

#### Healthrx

| Field | Description |
| --- | --- |
| `account_id` |  |
| `action` |  |
| `agent_id` |  |
| `attempt` |  |
| `avatar_present` |  |
| `benchmark_set` |  |
| `commercial` |  |
| `commercial_license_evidence` |  |
| `content_id` |  |
| `dimensions` |  |
| `duration_seconds` |  |
| `evidence` |  |
| `evidence_urls` |  |
| `external_key` |  |
| `format` |  |
| `includes_all_attempt_costs` |  |
| `input_specification` |  |
| `kind` |  |
| `level` |  |
| `measured_at` |  |
| `model_version` |  |
| `paid_campaign_id` |  |
| `parent_content_id` |  |
| `paused` |  |
| `pillar` |  |
| `profile` |  |
| `promotion_evidence` |  |
| `provider` |  |
| `provider_invoice_evidence` |  |
| `reason` |  |
| `reference_version` |  |
| `request_key` |  |
| `scope` |  |
| `test_variable` |  |
| `topic` |  |
| `total_cost_usd` |  |

Operations: Create, Load.

API path: `/api/healthrx/products/{product_id}/accounts/{account_id}/content`

#### InitResetProductV6

| Field | Description |
| --- | --- |
| `auto_schedule_disabled` |  |
| `old_product_id` |  |
| `product_id` |  |
| `queue_entries_cleared` |  |
| `success` |  |

Operations: Create.

API path: `/api/reset-product/init-v6`

#### Iri

| Field | Description |
| --- | --- |
| `correlationId` |  |
| `idempotencyKey` |  |
| `productId` |  |

Operations: Create.

API path: `/api/iris/connectors/{connector_id}/start`

#### IrisCapability

| Field | Description |
| --- | --- |
| `capability` |  |
| `correlationId` |  |
| `errorCode` |  |
| `externalProductId` |  |
| `externalUserId` |  |
| `id` |  |
| `idempotencyKey` |  |
| `input` |  |
| `membershipId` |  |
| `message` |  |
| `ok` |  |
| `platformAccountId` |  |
| `platformLinkId` |  |
| `productScope` |  |
| `requestedBy` |  |
| `result` |  |
| `retryable` |  |

Operations: Create.

API path: `/api/platform/capabilities/{capability_name}`

#### IrisChat

| Field | Description |
| --- | --- |
| `artifacts` |  |
| `correlationId` |  |
| `idempotencyKey` |  |
| `message` |  |
| `mode` |  |
| `ok` |  |
| `pageContext` |  |
| `productId` |  |
| `runtimeStatus` |  |
| `sessionId` |  |

Operations: Create.

API path: `/api/iris/chat`

#### IrisConnector

| Field | Description |
| --- | --- |
| `connectors` |  |

Operations: List.

API path: `/api/iris/connectors`

#### IrisStatus

| Field | Description |
| --- | --- |
| `connectorsPreview` |  |
| `product` |  |
| `status` |  |
| `tasksPreview` |  |

Operations: List.

API path: `/api/iris/status`

#### IrisTask

| Field | Description |
| --- | --- |
| `approvalRequired` |  |
| `cadence` |  |
| `capability` |  |
| `completed` |  |
| `description` |  |
| `discover` |  |
| `productId` |  |
| `recurring` |  |
| `requiredConnectors` |  |
| `title` |  |

Operations: Create, List.

API path: `/api/iris/tasks`

#### IrisUsage

| Field | Description |
| --- | --- |
| `eventCount` |  |
| `events` |  |
| `membershipId` |  |
| `productScope` |  |

Operations: List.

API path: `/api/iris/usage`

#### Landing

| Field | Description |
| --- | --- |
| `file` |  |

Operations: Create.

API path: `/api/landings/microhub/testimonial-image/{index}`

#### LandingStat

| Field | Description |
| --- | --- |
| `landing` |  |
| `microhub` |  |

Operations: Load.

API path: `/api/landings/{slug}/stats`

#### LandingStatus

| Field | Description |
| --- | --- |
| `errorMessage` |  |
| `landingStatus` |  |
| `microhubStatus` |  |

Operations: Load.

API path: `/api/landings/status`

#### LinkInBio

| Field | Description |
| --- | --- |
| `linkInBioType` |  |
| `redirectUrl` |  |
| `slug` |  |

Operations: Load.

API path: `/api/sites/{slug}/link-in-bio`

#### LinkInDm

| Field | Description |
| --- | --- |
| `linkInDmsType` |  |
| `redirectUrl` |  |
| `slug` |  |

Operations: Load.

API path: `/api/sites/{slug}/link-in-dms`

#### LinkInPost

| Field | Description |
| --- | --- |
| `linkInPostsType` |  |
| `redirectUrl` |  |
| `showLinkInFirstComment` |  |
| `slug` |  |

Operations: Load.

API path: `/api/sites/{slug}/link-in-posts`

#### LinkUser

| Field | Description |
| --- | --- |
| `already_linked` |  |
| `onboarding_data_id` | UUID of the OnboardingData record |
| `success` |  |

Operations: Create.

API path: `/api/onboarding-v6/link-user`

#### MediaAsset

| Field | Description |
| --- | --- |
| `category` |  |
| `createdAt` |  |
| `description` |  |
| `file` |  |
| `id` |  |
| `media_assets` |  |
| `onboardingDataId` |  |
| `onboarding_data_id` |  |
| `productId` |  |
| `product_id` |  |
| `source` |  |
| `type` |  |
| `updatedAt` |  |
| `url` |  |
| `usedAt` |  |
| `veo3VideoId` |  |

Operations: Create, Load.

API path: `/api/media-assets/{media_asset_id}/exclude-copycat`

#### Men

| Field | Description |
| --- | --- |

Operations: List.

API path: `/api/videos/me`

#### Microdrama

| Field | Description |
| --- | --- |
| `evidence` |  |
| `expected_revision` |  |
| `idempotency_key` |  |
| `issues` |  |
| `reason` |  |
| `role` |  |
| `scores` |  |
| `selected_premise_id` |  |
| `stage` |  |
| `status` |  |
| `subject_hash` |  |
| `title` |  |
| `verdict` |  |

Operations: Create, Load, Update.

API path: `/api/microdrama/episodes/{episode_id}/approve`

#### MicrohubPublic

| Field | Description |
| --- | --- |
| `bio` |  |
| `ctaButtonText` |  |
| `ctaDescription` |  |
| `ctaLink` |  |
| `ctaTitle` |  |
| `headerImageUrl` |  |
| `links` |  |
| `name` |  |
| `profileImageUrl` |  |
| `slug` |  |
| `socialLinks` |  |
| `testimonials` |  |

Operations: Load.

API path: `/api/sites/{slug}`

#### OnboardingStatus

| Field | Description |
| --- | --- |
| `comments` |  |
| `cover_image_url` |  |
| `id` |  |
| `likes` |  |
| `platform` |  |
| `video_url` |  |
| `views` |  |

Operations: List.

API path: `/api/onboarding-v6/status`

#### OnboardingV6

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/onboarding-v6/repost-content/{media_asset_id}`

#### PaidUser

| Field | Description |
| --- | --- |
| `agents_count` |  |
| `assigned_agents_count` |  |
| `auto_schedule_enabled` |  |
| `credits` |  |
| `effective_agents_count` |  |
| `email` |  |
| `id` |  |
| `is_internal_user` |  |
| `is_migrated_user` |  |
| `membership` |  |
| `scheduled_queue_count` |  |
| `subscription_details` |  |
| `subscription_status` |  |

Operations: List.

API path: `/api/admin/paid-users`

#### Pexel

| Field | Description |
| --- | --- |

Operations: List.

API path: `/api/pexels/search`

#### PhoneAdminAvailableAgentSource

| Field | Description |
| --- | --- |
| `available_count` |  |
| `pc_name` |  |

Operations: List.

API path: `/api/admin/phone-admin/available-agent-sources`

#### Product

| Field | Description |
| --- | --- |
| `agent_count` |  |
| `agents` |  |
| `createdAt` |  |
| `demoVideos` |  |
| `description` |  |
| `favicon_url` |  |
| `howItWorks` |  |
| `how_it_works` |  |
| `id` |  |
| `images` |  |
| `initial_agents` |  |
| `instagramHandle` |  |
| `instagram_handle` |  |
| `isActive` |  |
| `isApp` |  |
| `is_active` |  |
| `is_app` |  |
| `language` |  |
| `mediaAssets` |  |
| `media_asset_ids` |  |
| `media_assets` |  |
| `name` |  |
| `otherInstructions` |  |
| `other_instructions` |  |
| `outroVideo` |  |
| `pexelsVideos` |  |
| `pricing` |  |
| `pricingAndOffers` |  |
| `pricing_and_offers` |  |
| `product_demo_ids` |  |
| `product_details` | Product details for enterprise product creation |
| `product_id` |  |
| `product_name` |  |
| `product_url` |  |
| `pronunciation` |  |
| `regenerate_sora2` |  |
| `repostSource` |  |
| `repost_source` |  |
| `screenshot_url` |  |
| `social_post_ids` |  |
| `targetAudience` |  |
| `target_audience` |  |
| `templateProductId` |  |
| `tiktokHandle` |  |
| `tiktok_handle` |  |
| `total_count` |  |
| `updatedAt` |  |
| `url` |  |
| `userId` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/products/{product_id}/validate-social-handle`

#### ProductDashboard

| Field | Description |
| --- | --- |
| `agents` |  |
| `date` |  |
| `pagination` |  |
| `phone_admin_error` |  |
| `products` |  |
| `selected_product` |  |
| `summary` |  |

Operations: List.

API path: `/api/admin/products-dashboard`

#### ProductDashboardView

| Field | Description |
| --- | --- |
| `date` |  |
| `views` |  |

Operations: List.

API path: `/api/admin/products-dashboard/views`

#### ProductDemo

| Field | Description |
| --- | --- |
| `created_at` |  |
| `description` |  |
| `id` |  |
| `source` |  |
| `type` |  |
| `url` |  |

Operations: List.

API path: `/api/video-variation/product-demos`

#### ProductLanding

| Field | Description |
| --- | --- |
| `bio` |  |
| `commentingOnMyPosts` |  |
| `commentingOnOthersPosts` |  |
| `ctaButtonText` |  |
| `ctaDescription` |  |
| `ctaLink` |  |
| `ctaTitle` |  |
| `dmCommenters` |  |
| `dmInitialMessagePrompt` |  |
| `dmOngoingResponsePrompt` |  |
| `firstCommentTextBeforeLink` |  |
| `headerImageUrl` |  |
| `id` |  |
| `landingHtmlUrl` |  |
| `landingLastGeneratedAt` |  |
| `landingReferenceScreenshotUrl` |  |
| `landingScreenshotUrl` |  |
| `landingStatus` |  |
| `landingUrl` |  |
| `linkInBioType` |  |
| `linkInDmsType` |  |
| `linkInPostsType` |  |
| `links` |  |
| `microhubBio` |  |
| `microhubCtaButtonText` |  |
| `microhubCtaDescription` |  |
| `microhubCtaLink` |  |
| `microhubCtaTitle` |  |
| `microhubHeaderImageUrl` |  |
| `microhubLinks` |  |
| `microhubName` |  |
| `microhubProfileImageUrl` |  |
| `microhubScreenshotUrl` |  |
| `microhubSocialLinks` |  |
| `microhubStatus` |  |
| `microhubTestimonials` |  |
| `microhubUrl` |  |
| `myPostsStylePrompt` |  |
| `name` |  |
| `othersStylePrompt` |  |
| `othersTargetMarketPrompt` |  |
| `productLinkSelection` |  |
| `productUrl` |  |
| `profileImageUrl` |  |
| `shortLink` |  |
| `shortLinkKeyword` |  |
| `showLinkInFirstComment` |  |
| `slug` |  |
| `socialLinks` |  |
| `testimonials` |  |

Operations: List, Update.

API path: `/api/landings/me`

#### PublicResumeStatus

| Field | Description |
| --- | --- |
| `can_resume_prelogin` |  |
| `content_collection_ready` |  |
| `current_step` |  |
| `exists` |  |
| `flow_variant` |  |
| `repost_content_count` |  |
| `repost_source` |  |
| `requires_repost_content` |  |
| `skip_demo` |  |

Operations: Load.

API path: `/api/onboarding-v6/resume-status-public`

#### ReRollVideo

| Field | Description |
| --- | --- |
| `queue_id` |  |
| `requires_polling` |  |
| `skip_credit_check` |  |
| `video` |  |

Operations: Create.

API path: `/api/core/re-roll-video`

#### ReadRootGet

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/`

#### RecordDemoBooked

| Field | Description |
| --- | --- |
| `calendlyEventUri` |  |
| `calendlyInviteeUri` |  |
| `message` |  |
| `session` |  |

Operations: Create.

API path: `/api/chat/sessions/{session_id}/demo-booked`

#### RefreshStat

| Field | Description |
| --- | --- |
| `date_from` | Start date to refresh stats for (defaults to yesterday) |
| `date_to` | End date to refresh stats for (defaults to date_from) |
| `entries_found` |  |
| `message` |  |
| `provider` | Scraping provider to use |
| `status` |  |
| `summary` |  |

Operations: Create.

API path: `/api/analytics/refresh-stats`

#### RemixerClipper

| Field | Description |
| --- | --- |

Operations: Create, Load.

API path: `/api/remixer-clippers/jobs/{identifier}/download`

#### ResetProduct

| Field | Description |
| --- | --- |

Operations: Create, Load.

API path: `/api/reset-product/generate-videos-v6`

#### RetryWebsiteScrape

| Field | Description |
| --- | --- |
| `flow_variant` |  |
| `onboarding_data_id` | UUID of existing OnboardingData |
| `skip_demo` |  |
| `status` |  |
| `success` |  |
| `url` | New website URL to scrape |

Operations: Create.

API path: `/api/onboarding-v6/retry-scrape`

#### SaveSurvey

| Field | Description |
| --- | --- |
| `email_sent` |  |
| `onboarding_data_id` | UUID of the OnboardingData record |
| `success` |  |
| `survey` | Survey response data from frontend. |

Operations: Create.

API path: `/api/onboarding-v6/save-survey`

#### ScanSocial

| Field | Description |
| --- | --- |
| `instagram_handle` |  |
| `onboarding_data_id` |  |
| `product_id` |  |
| `status` |  |
| `success` |  |
| `task_id` |  |
| `tiktok_handle` |  |

Operations: Create.

API path: `/api/reset-product/scan-socials`

#### ScanSocialsPublic

| Field | Description |
| --- | --- |
| `instagram_handle` | Instagram username/handle to scrape |
| `message` |  |
| `onboarding_data_id` | UUID of the OnboardingData record |
| `status` |  |
| `success` |  |
| `tiktok_handle` | TikTok username/handle to scrape |

Operations: Create.

API path: `/api/onboarding-v6/scan-socials-public`

#### ScanSocialsStatus

| Field | Description |
| --- | --- |
| `ads_count` |  |
| `onboarding_data_id` |  |
| `product_id` |  |
| `status` |  |
| `task_id` |  |

Operations: Load.

API path: `/api/video-variation/scan-socials/status`

#### ScheduleV2

| Field | Description |
| --- | --- |
| `agent` |  |
| `comment` |  |
| `created_at` |  |
| `id` |  |
| `instagram_posted_by` |  |
| `instagram_posted_url` |  |
| `instagram_scraped_social_post_id` |  |
| `is_instagram_posted` |  |
| `is_tiktok_posted` |  |
| `is_youtube_posted` |  |
| `reorders` |  |
| `results` |  |
| `scheduled_datetime` |  |
| `source_type` |  |
| `status` |  |
| `tiktok_posted_by` |  |
| `tiktok_posted_url` |  |
| `tiktok_scraped_social_post_id` |  |
| `video` |  |
| `video_id` |  |
| `youtube_posted_by` |  |
| `youtube_posted_url` |  |
| `youtube_scraped_social_post_id` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/schedule/queue/add`

#### Scrape

| Field | Description |
| --- | --- |
| `old_product_id` |  |
| `onboarding_data_id` |  |
| `status` |  |
| `success` |  |
| `url` |  |

Operations: Create.

API path: `/api/reset-product/scrape`

#### ScrapeWebsitePublic

| Field | Description |
| --- | --- |
| `flow_variant` |  |
| `onboarding_data_id` | UUID of created OnboardingData |
| `skip_demo` | True for self-serve users (skip demo booking) |
| `status` |  |
| `success` |  |
| `url` | Website URL to scrape |

Operations: Create.

API path: `/api/onboarding-v6/scrape-website-public`

#### ScrapedData

| Field | Description |
| --- | --- |
| `description` |  |
| `homepageVideoUrl` |  |
| `howItWorks` |  |
| `imageUrls` |  |
| `instagram_username` |  |
| `mediaAssets` |  |
| `name` |  |
| `pricingAndOffers` |  |
| `targetAudience` |  |
| `url` |  |

Operations: Create.

API path: `/api/scraper/extract`

#### ScrapingStatus

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/scraper/scraping_status`

#### SelfServeActivate

| Field | Description |
| --- | --- |
| `onboarding_data_id` | UUID of the OnboardingData record |
| `redirect_to_stripe` |  |
| `stripe_checkout_url` |  |
| `success` |  |

Operations: Create.

API path: `/api/onboarding-v6/self-serve-activate`

#### Seo

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/seo/oauth/status`

#### SeoAiMention

| Field | Description |
| --- | --- |
| `bucket` |  |
| `domain_type` |  |
| `dominant_domain` |  |
| `engine` |  |
| `evidence` |  |
| `geo` |  |
| `language` |  |
| `primary_url` |  |
| `prompt_text` |  |
| `run_week` |  |
| `secondary_urls` |  |

Operations: List.

API path: `/api/seo/ai-mentions`

#### SeoBacklink

| Field | Description |
| --- | --- |
| `anchor_text` |  |
| `first_seen` |  |
| `referring_domain` |  |
| `status` |  |
| `target_page` |  |

Operations: List.

API path: `/api/seo/backlinks`

#### SeoKeyword

| Field | Description |
| --- | --- |
| `blog_page` |  |
| `current_position` |  |
| `keyword` |  |
| `keyword_group` |  |
| `position_change` |  |

Operations: List.

API path: `/api/seo/keywords`

#### SeoOverview

| Field | Description |
| --- | --- |
| `clicks` |  |
| `ctr` |  |
| `date` |  |
| `impressions` |  |
| `position` |  |

Operations: List.

API path: `/api/seo/overview`

#### SeoTraffic

| Field | Description |
| --- | --- |
| `end_date` |  |
| `series` |  |
| `site_url` |  |
| `start_date` |  |
| `top_countries` |  |
| `top_pages` |  |
| `top_queries` |  |
| `totals` |  |

Operations: List.

API path: `/api/seo/traffic`

#### ShareAccessLink

| Field | Description |
| --- | --- |
| `share_token` |  |
| `share_url` |  |

Operations: Create.

API path: `/auth/share-access-link`

#### Site

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/sites/slugs`

#### Slide

| Field | Description |
| --- | --- |
| `caption` |  |
| `id` |  |
| `prompt` |  |

Operations: Create, Update.

API path: `/api/carousel/{video_id}/slides/{slide_index}/regenerate`

#### SlugValidation

| Field | Description |
| --- | --- |
| `reason` |  |
| `valid` |  |

Operations: Load.

API path: `/api/landings/validate-slug/{slug}`

#### Social

| Field | Description |
| --- | --- |
| `code` |  |
| `code_verifier` |  |
| `createdAt` |  |
| `id` |  |
| `platform` |  |
| `platformUserId` |  |
| `updatedAt` |  |
| `userId` |  |
| `username` |  |

Operations: Create, List, Load, Remove.

API path: `/social/instagram/exchange`

#### SocialScanPreview

| Field | Description |
| --- | --- |
| `instagram_handle` | Instagram username/handle to scrape |
| `posts` |  |
| `success` |  |
| `tiktok_handle` | TikTok username/handle to scrape |

Operations: Create.

API path: `/api/social-scan/preview`

#### SocialScanProcess

| Field | Description |
| --- | --- |
| `posts` |  |
| `product_id` |  |
| `success` |  |
| `task_id` |  |

Operations: Create.

API path: `/api/social-scan/process`

#### SocialScanSave

| Field | Description |
| --- | --- |
| `media_asset_ids` |  |
| `posts` |  |
| `product_id` |  |
| `success` |  |

Operations: Create.

API path: `/api/social-scan/save`

#### Sora2Avatar

| Field | Description |
| --- | --- |
| `avatar_frame_url` |  |
| `created_at` |  |
| `current_step` |  |
| `headshot_url` |  |
| `id` |  |
| `logs` |  |
| `prompt_key` |  |
| `run_output_dir` |  |
| `selected_age_bucket` |  |
| `selected_gender` |  |
| `selected_prompt` |  |
| `selected_race` |  |
| `sora2_cameo_handle` |  |
| `sora2_cameo_id` |  |
| `sora2_cameo_link` |  |
| `sora2_display_name` |  |
| `sora2_task_id` |  |
| `sora2_video_url` |  |
| `updated_at` |  |

Operations: Create, List, Load, Update.

API path: `/api/admin/sora2-avatars`

#### Sora2AvatarAssetUpload

| Field | Description |
| --- | --- |
| `avatar_id` |  |
| `file` |  |
| `run_output_dir` |  |
| `s3_key` |  |
| `upload_type` |  |
| `url` |  |

Operations: Create.

API path: `/api/admin/sora2-avatars/upload-asset`

#### Sora2AvatarStat

| Field | Description |
| --- | --- |
| `by_age_bucket` |  |
| `by_gender` |  |
| `by_prompt_key` |  |
| `by_race` |  |
| `completed_avatars` |  |
| `completion_rate` |  |
| `total_avatars` |  |

Operations: Load.

API path: `/api/admin/sora2-avatars/stats`

#### Stat

| Field | Description |
| --- | --- |

Operations: List.

API path: `/api/admin/stats/posts`

#### StatsRefreshBackfill

| Field | Description |
| --- | --- |
| `message` |  |
| `status` |  |
| `task_id` |  |

Operations: Create.

API path: `/api/admin/customer-health/backfill`

#### StatsRefreshIssue

| Field | Description |
| --- | --- |
| `aged_over_24h` |  |
| `agent_id` |  |
| `agent_name_snapshot` |  |
| `first_detected_at` |  |
| `id` |  |
| `last_detected_at` |  |
| `last_refresh_completed_at` |  |
| `last_seen_run_id` |  |
| `latest_error_message` |  |
| `next_retry_at` |  |
| `platform` |  |
| `post_method` |  |
| `post_url` |  |
| `posted_date_et` |  |
| `product_id` |  |
| `product_name_snapshot` |  |
| `reason_code` |  |
| `resolved_at` |  |
| `retry_count` |  |
| `schedule_queue_id` |  |
| `scheduled_datetime_utc` |  |
| `stale_after_sla` |  |
| `status` |  |
| `user_email_snapshot` |  |
| `user_id` |  |

Operations: List.

API path: `/api/admin/customer-health/issues`

#### StatsRefreshOverview

| Field | Description |
| --- | --- |
| `active_run` |  |
| `aged_over_24h` |  |
| `backlog_preview` |  |
| `coverage_percent` |  |
| `customer_counts` |  |
| `date` |  |
| `generated_at` |  |
| `method_counts` |  |
| `platform_counts` |  |
| `platform_units_resolved` |  |
| `platform_units_total` |  |
| `platform_units_unresolved` |  |
| `posted_entries` |  |
| `reason_counts` |  |
| `sla_deadline_et` |  |
| `stale_after_sla` |  |
| `top_affected_customers` |  |

Operations: List.

API path: `/api/admin/customer-health/overview`

#### StatsRefreshRunSummary

| Field | Description |
| --- | --- |
| `celery_task_id` |  |
| `completed_at` |  |
| `entries_failed` |  |
| `entries_skipped` |  |
| `entries_total` |  |
| `entries_updated` |  |
| `error_summary_json` |  |
| `id` |  |
| `issues_opened` |  |
| `issues_resolved` |  |
| `platform_units_resolved` |  |
| `platform_units_total` |  |
| `platform_units_unresolved` |  |
| `platform_updates_via_profile` |  |
| `platform_updates_via_url` |  |
| `provider` |  |
| `refresh_trigger` |  |
| `requested_by_email` |  |
| `run_type` |  |
| `started_at` |  |
| `status` |  |
| `target_date_et` |  |
| `users_count` |  |

Operations: List.

API path: `/api/admin/customer-health/runs`

#### StatsRefreshTaskTrigger

| Field | Description |
| --- | --- |
| `message` |  |
| `status` |  |
| `target_date` |  |
| `task_id` |  |
| `users_count` |  |

Operations: Create.

API path: `/api/admin/customer-health/manual-refresh`

#### Stripe

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/stripe/associate-guest-checkout`

#### Style

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/carousel/styles`

#### Template

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/carousel/templates`

#### TikTokCreatorInfo

| Field | Description |
| --- | --- |
| `commentDisabled` |  |
| `creatorAvatarUrl` |  |
| `creatorNickname` |  |
| `creatorUsername` |  |
| `duetDisabled` |  |
| `maxVideoPostDurationSec` |  |
| `privacyLevelOptions` |  |
| `stitchDisabled` |  |

Operations: List.

API path: `/social/tiktok/creator-info`

#### TopPost

| Field | Description |
| --- | --- |
| `comments` |  |
| `id` |  |
| `likes` |  |
| `platforms` |  |
| `scheduled_datetime` |  |
| `user_email` |  |
| `user_id` |  |
| `views` |  |

Operations: List.

API path: `/api/admin/stats/top-posts`

#### UploadPostAgent

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/upload-post-agents/sync-platforms`

#### User

| Field | Description |
| --- | --- |
| `accountType` |  |
| `activatedByAdminAt` |  |
| `activatedByAdminId` |  |
| `agents` |  |
| `agentsCount` |  |
| `attribution` |  |
| `avatarImageUrl` |  |
| `avatarVoiceUrl` |  |
| `createdAt` |  |
| `credits` |  |
| `email` |  |
| `googleId` |  |
| `hasSeenScheduleWelcome` |  |
| `id` |  |
| `industry` |  |
| `instagramId` |  |
| `isActivatedByAdmin` |  |
| `isAdmin` |  |
| `isInternalUser` |  |
| `isMigrated` |  |
| `isResettingProduct` |  |
| `membership` |  |
| `name` |  |
| `partnerDirectLoginDisabled` |  |
| `partnerExternalUserId` |  |
| `partnerPolicyCode` |  |
| `partnerSource` |  |
| `picture` |  |
| `stripeCustomerId` |  |
| `stripeSubscriptionId` |  |
| `subscriptionCurrentPeriodEnd` |  |
| `subscriptionStatus` |  |
| `totalCount` |  |
| `updatedAt` |  |
| `userId` |  |

Operations: Load, Update.

API path: `/api/upload-post-agents/user/{user_id}`

#### UserAgent

| Field | Description |
| --- | --- |
| `agent` |  |
| `assigned_at` |  |
| `assignment_id` |  |
| `expires_at` |  |
| `id` |  |
| `status` |  |

Operations: Create, List.

API path: `/api/admin/users/{user_id}/agents`

#### UserHealthDetail

| Field | Description |
| --- | --- |
| `account_type` |  |
| `activated` |  |
| `activated_by_admin_at` |  |
| `activated_by_admin_id` |  |
| `admin_notes` |  |
| `agents_count` |  |
| `assigned_agents` |  |
| `assigned_agents_count` |  |
| `assigned_agents_preview_limit` |  |
| `assigned_agents_truncated` |  |
| `auto_schedule_enabled` |  |
| `comments_expected_per_day` |  |
| `comments_fix_block_reason` |  |
| `comments_fix_ready` |  |
| `comments_today_failed` |  |
| `comments_today_posted` |  |
| `comments_today_scheduled` |  |
| `comments_yesterday_failed` |  |
| `comments_yesterday_posted` |  |
| `comments_yesterday_total` |  |
| `created_at` |  |
| `credits` |  |
| `effective_posted_video_reuse_percent` |  |
| `email` |  |
| `expected_agents_count` |  |
| `id` |  |
| `is_activated_by_admin` |  |
| `is_admin` |  |
| `is_bookmarked` |  |
| `is_internal_user` |  |
| `is_migrated` |  |
| `landing_slug` |  |
| `landing_status` |  |
| `landing_url` |  |
| `membership` |  |
| `microhub_status` |  |
| `microhub_url` |  |
| `name` |  |
| `onboarding_flow` |  |
| `posted_video_reuse_percent` |  |
| `product_id` |  |
| `product_name` |  |
| `product_url` |  |
| `subscription_status` |  |
| `survey_data` |  |
| `today_failed` |  |
| `today_posted` |  |
| `today_scheduled` |  |
| `tomorrow_capacity` |  |
| `tomorrow_scheduled` |  |
| `videos_completed` |  |
| `videos_failed` |  |
| `videos_pending` |  |
| `videos_stale` |  |
| `videos_total` |  |
| `yesterday_failed` |  |
| `yesterday_failed_entries` |  |
| `yesterday_posted` |  |
| `yesterday_total` |  |

Operations: List.

API path: `/api/admin/users/{user_id}/health-detail`

#### UserWithAvatarSubmission

| Field | Description |
| --- | --- |
| `avatar_image_url` |  |
| `avatar_voice_url` |  |
| `created_at` |  |
| `email` |  |
| `id` |  |
| `name` |  |

Operations: List.

API path: `/api/admin/users/avatar-submissions`

#### UsersHealth

| Field | Description |
| --- | --- |
| `account_type` |  |
| `admin_notes` |  |
| `agents_count` |  |
| `agents_health` |  |
| `agents_issue` |  |
| `assigned_agents_count` |  |
| `auto_schedule_enabled` |  |
| `auto_schedule_health` |  |
| `auto_schedule_issue` |  |
| `auto_schedule_today_health` |  |
| `auto_schedule_today_issue` |  |
| `created_at` |  |
| `email` |  |
| `expected_agents_count` |  |
| `id` |  |
| `is_bookmarked` |  |
| `is_internal_user` |  |
| `is_migrated` |  |
| `membership` |  |
| `name` |  |
| `posts_health` |  |
| `posts_issue` |  |
| `posts_today_health` |  |
| `posts_today_issue` |  |
| `subscription_status` |  |
| `today_expected_count` |  |
| `today_failed_count` |  |
| `today_scheduled_count` |  |
| `today_total_count` |  |
| `tomorrow_expected_count` |  |
| `tomorrow_scheduled_count` |  |
| `yesterday_failed_count` |  |
| `yesterday_total_count` |  |

Operations: List.

API path: `/api/admin/users-health`

#### Video

| Field | Description |
| --- | --- |
| `agent_id` |  |
| `bookmarked` |  |
| `captions` |  |
| `carousel_data` |  |
| `created_at` |  |
| `duration` |  |
| `generation_status` |  |
| `id` |  |
| `image_prompt` |  |
| `is_onboarding` |  |
| `is_template` |  |
| `main_avatar` |  |
| `main_prompt` |  |
| `media_asset_id` |  |
| `product_id` |  |
| `reel_id` |  |
| `thumbnail_url` |  |
| `title` |  |
| `type` |  |
| `updated_at` |  |
| `url` |  |
| `user_id` |  |
| `video_id` |  |

Operations: Create, Load, Remove, Update.

API path: `/videos/{video_id}/retry-video`

#### VideoRemixerWorker

| Field | Description |
| --- | --- |
| `captions_ass` |  |
| `captions_vtt` |  |
| `cost_usd` |  |
| `error` |  |
| `file` |  |
| `kinds` |  |
| `lease_token` |  |
| `limit` |  |
| `manifest` |  |
| `model` |  |
| `processing_seconds` |  |
| `prompt_version` |  |
| `result` |  |
| `thumbnail` |  |
| `tier` |  |
| `worker_id` |  |

Operations: Create.

API path: `/api/admin/video-remixer/worker/jobs/{identifier}/fail`

#### WatchdogRecovery

| Field | Description |
| --- | --- |
| `item_id` |  |
| `passed` |  |
| `table` |  |

Operations: Create, Load.

API path: `/api/v1/watchdog/recovery-queue/resolve`

#### WinningAd

| Field | Description |
| --- | --- |
| `created_at` |  |
| `description` |  |
| `id` |  |
| `source` |  |
| `type` |  |
| `url` |  |

Operations: List.

API path: `/api/video-variation/winning-ads`

#### XAdaptation

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/carousel/x-adaptations`

#### ZerohumanAdminAccount

| Field | Description |
| --- | --- |
| `account_mode` |  |
| `active_queue_count` |  |
| `assigned_agent` |  |
| `created_at` |  |
| `email` |  |
| `external_user_id` |  |
| `membership` |  |
| `policy_code` |  |
| `product_id` |  |
| `product_name` |  |
| `provisioning_status` |  |
| `subscription_status` |  |
| `updated_at` |  |
| `user_id` |  |

Operations: List.

API path: `/api/admin/zerohuman/accounts`



## Entities


### Activate

Create an instance: `local activate = client:Activate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activated_at` | `any` |  |
| `message` | `string` |  |
| `success` | `boolean` |  |

#### Example: Create

```lua
local activate, err = client:Activate():create({
  user_id = "example_user_id", -- string
  message = "example_message", -- string
  success = true, -- boolean
})
```


### ActivateUser

Create an instance: `local activate_user = client:ActivateUser(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activated_at` | `any` |  |
| `message` | `string` |  |
| `success` | `boolean` |  |

#### Example: Create

```lua
local activate_user, err = client:ActivateUser():create({
  user_id = "example_user_id", -- string
  message = "example_message", -- string
  success = true, -- boolean
})
```


### ActiveOnboarding

Create an instance: `local active_onboarding = client:ActiveOnboarding(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_step` | `any` |  |
| `has_active_onboarding` | `boolean` |  |
| `onboarding_data_id` | `string` |  |

#### Example: Load

```lua
local active_onboarding, err = client:ActiveOnboarding():load()
```


### Admin

Create an instance: `local admin = client:Admin(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apply` | `boolean` | Apply safe canonical or clean-only URL updates |
| `count` | `number` |  |
| `created_at` | `string` |  |
| `date_from` | `any` |  |
| `date_to` | `any` |  |
| `email` | `string` |  |
| `id` | `string` |  |
| `include_failed` | `boolean` |  |
| `include_pending` | `boolean` |  |
| `include_records` | `boolean` | Include full per-field audit records in the response |
| `issue_ids` | `any` |  |
| `only_active` | `boolean` | Limit the audit to active agents |
| `platform` | `any` |  |
| `posting_method` | `any` |  |
| `product_id` | `string` |  |
| `query` | `any` |  |
| `reason` | `any` |  |
| `regenerate` | `boolean` |  |
| `status` | `string` |  |
| `user_membership` | `any` |  |
| `user_name` | `any` |  |
| `user_onboarding_step` | `any` |  |
| `video_type` | `string` |  |

#### Example: Load

```lua
local admin, err = client:Admin():load({ date = "date" })
```

#### Example: List

```lua
local admins, err = client:Admin():list()
```

#### Example: Create

```lua
local admin, err = client:Admin():create({
  user_id = "example_user_id", -- string
  count = 1, -- number
  created_at = "example_created_at", -- string
  date_from = "example_date_from", -- any
  date_to = "example_date_to", -- any
  email = "example_email", -- string
  id = "example_id", -- string
  product_id = "example_product_id", -- string
  video_type = "example_video_type", -- string
})
```


### AdminAccountReset

Create an instance: `local admin_account_reset = client:AdminAccountReset(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_ids` | `table` |  |
| `agent_ids_sha256` | `string` |  |
| `backup_sha256` | `string` |  |
| `batch_size` | `number` |  |
| `confirmation` | `string` |  |
| `customer_email` | `string` |  |
| `pc_name` | `string` |  |
| `phase` | `string` |  |
| `product_id` | `string` |  |
| `video_ids` | `table` |  |

#### Example: Create

```lua
local admin_account_reset, err = client:AdminAccountReset():create({
  agent_ids = {}, -- table
  agent_ids_sha256 = "example_agent_ids_sha256", -- string
  backup_sha256 = "example_backup_sha256", -- string
  confirmation = "example_confirmation", -- string
  customer_email = "example_customer_email", -- string
  pc_name = "example_pc_name", -- string
  product_id = "example_product_id", -- string
})
```


### AdminCarousel

Create an instance: `local admin_carousel = client:AdminCarousel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `string` |  |
| `batch_id` | `string` |  |
| `caption` | `string` |  |
| `content_base64` | `string` |  |
| `day` | `any` |  |
| `dry_run` | `boolean` |  |
| `engine_run` | `string` |  |
| `expected_revision` | `string` |  |
| `formula` | `table` |  |
| `formula_id` | `string` |  |
| `prompt` | `string` |  |
| `slides` | `table` |  |
| `title` | `string` |  |

#### Example: Load

```lua
local admin_carousel, err = client:AdminCarousel():load({ batch_id = "batch_id" })
```

#### Example: Create

```lua
local admin_carousel, err = client:AdminCarousel():create({
  stage = "example_stage", -- string
  agent_id = "example_agent_id", -- string
  batch_id = "example_batch_id", -- string
  caption = "example_caption", -- string
  day = "example_day", -- any
  expected_revision = "example_expected_revision", -- string
  formula = {}, -- table
  formula_id = "example_formula_id", -- string
  prompt = "example_prompt", -- string
  slides = {}, -- table
  title = "example_title", -- string
})
```


### AdminCarouselDemoReview

Create an instance: `local admin_carousel_demo_review = client:AdminCarouselDemoReview(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `items` | `table` |  |
| `reason` | `string` |  |

#### Example: Load

```lua
local admin_carousel_demo_review, err = client:AdminCarouselDemoReview():load({ id = "admin_carousel_demo_review_id" })
```

#### Example: Create

```lua
local admin_carousel_demo_review, err = client:AdminCarouselDemoReview():create({
  items = {}, -- table
})
```


### AdminCustomer

Create an instance: `local admin_customer = client:AdminCustomer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `any` |  |
| `active_vireel_agents` | `number` |  |
| `agents` | `table` |  |
| `billing_source` | `string` |  |
| `contracted_agents` | `any` |  |
| `email` | `string` |  |
| `membership` | `any` |  |
| `name` | `string` |  |
| `pfa_only_agents` | `number` |  |
| `severity` | `string` |  |
| `status` | `string` |  |
| `subscription_status` | `any` |  |
| `user_id` | `string` |  |

#### Example: List

```lua
local admin_customers, err = client:AdminCustomer():list()
```


### AdminCustomerSuccess

Create an instance: `local admin_customer_success = client:AdminCustomerSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_agents` | `number` |  |
| `active_products` | `number` |  |
| `agents_count` | `number` |  |
| `auto_schedule_status` | `string` |  |
| `days_until_period_end` | `any` |  |
| `email` | `string` |  |
| `feature_impact` | `string` |  |
| `last_notification_at` | `any` |  |
| `membership` | `any` |  |
| `name` | `string` |  |
| `notification_count` | `number` |  |
| `notification_events` | `table` |  |
| `priority` | `string` |  |
| `severity` | `string` |  |
| `status_label` | `string` |  |
| `subscription_current_period_end` | `any` |  |
| `subscription_status` | `any` |  |
| `upcoming_posts` | `number` |  |
| `user_id` | `string` |  |

#### Example: List

```lua
local admin_customer_successs, err = client:AdminCustomerSuccess():list()
```


### AdminGeneratedVideo

Create an instance: `local admin_generated_video = client:AdminGeneratedVideo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `string` |  |
| `agent_name` | `any` |  |
| `created_at` | `string` |  |
| `duration` | `number` |  |
| `generation_status` | `table` |  |
| `id` | `string` |  |
| `product_id` | `string` |  |
| `thumbnail_url` | `any` |  |
| `title` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `any` |  |
| `url` | `string` |  |

#### Example: List

```lua
local admin_generated_videos, err = client:AdminGeneratedVideo():list({ user_id = "example" })
```


### AdminHealthrx

Create an instance: `local admin_healthrx = client:AdminHealthrx(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` |  |
| `delivery_enabled` | `boolean` |  |
| `id` | `string` |  |
| `option_id` | `string` |  |
| `plan` | `table` |  |
| `preparation_enabled` | `boolean` |  |
| `product_id` | `string` |  |
| `reason` | `string` |  |
| `request_key` | `string` |  |
| `revision` | `number` |  |
| `schedule_enabled` | `boolean` |  |
| `version` | `string` |  |
| `viewed` | `boolean` |  |

#### Example: Load

```lua
local admin_healthrx, err = client:AdminHealthrx():load({ item_id = "item_id", kind = "kind" })
```

#### Example: Create

```lua
local admin_healthrx, err = client:AdminHealthrx():create({
  action = "example_action", -- string
  option_id = "example_option_id", -- string
  plan = {}, -- table
  product_id = "example_product_id", -- string
  reason = "example_reason", -- string
  request_key = "example_request_key", -- string
  version = "example_version", -- string
  viewed = true, -- boolean
})
```


### AdminInsight

Create an instance: `local admin_insight = client:AdminInsight(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `customer_success_cases` | `table` |  |
| `customers` | `table` |  |
| `generated_at` | `string` |  |
| `pfa_database` | `table` |  |
| `recent_signups` | `table` |  |
| `summary` | `table` |  |
| `vireel_database` | `table` |  |

#### Example: Load

```lua
local admin_insight, err = client:AdminInsight():load()
```

#### Example: List

```lua
local admin_insights, err = client:AdminInsight():list()
```


### AdminLandingTask

Create an instance: `local admin_landing_task = client:AdminLandingTask(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `task_id` | `string` |  |

#### Example: Create

```lua
local admin_landing_task, err = client:AdminLandingTask():create({
  user_id = "example_user_id", -- string
  task_id = "example_task_id", -- string
})
```


### AdminMetricsSummary

Create an instance: `local admin_metrics_summary = client:AdminMetricsSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `paid_users_by_level` | `table` |  |
| `total_cancellations` | `number` |  |
| `total_previews_generated` | `number` |  |
| `total_signups` | `number` |  |
| `total_videos_generated` | `number` |  |
| `url_attempts` | `number` |  |
| `user_credits` | `table` |  |
| `user_gifted_credits` | `table` |  |

#### Example: List

```lua
local admin_metrics_summarys, err = client:AdminMetricsSummary():list()
```


### AdminPost

Create an instance: `local admin_post = client:AdminPost(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `admin_job_ids` | `any` |  |
| `agent_id` | `string` |  |
| `agent_name` | `any` |  |
| `agent_platform_urls` | `any` |  |
| `agent_url` | `any` |  |
| `comments` | `number` |  |
| `error_message` | `any` |  |
| `failed_at` | `any` |  |
| `id` | `string` |  |
| `instagram_posted_by` | `any` |  |
| `instagram_posted_url` | `any` |  |
| `instagram_scraped_social_post_id` | `string` |  |
| `is_instagram_posted` | `boolean` |  |
| `is_tiktok_posted` | `boolean` |  |
| `is_youtube_posted` | `boolean` |  |
| `last_refreshed_at` | `any` |  |
| `likes` | `number` |  |
| `platform_post_methods` | `any` |  |
| `platform_urls` | `any` |  |
| `post_method` | `any` |  |
| `post_platforms` | `any` |  |
| `post_url` | `any` |  |
| `posted_at` | `any` |  |
| `product_id` | `string` |  |
| `results_status` | `any` |  |
| `scheduled_datetime` | `string` |  |
| `source_type` | `string` |  |
| `status` | `string` |  |
| `tiktok_posted_by` | `any` |  |
| `tiktok_posted_url` | `any` |  |
| `tiktok_scraped_social_post_id` | `string` |  |
| `upload_post_error` | `any` |  |
| `upload_post_status` | `any` |  |
| `upload_post_uploads` | `any` |  |
| `user_email` | `string` |  |
| `user_id` | `string` |  |
| `user_name` | `any` |  |
| `video_id` | `string` |  |
| `video_url` | `any` |  |
| `views` | `number` |  |
| `youtube_posted_by` | `any` |  |
| `youtube_posted_url` | `any` |  |
| `youtube_scraped_social_post_id` | `string` |  |

#### Example: List

```lua
local admin_posts, err = client:AdminPost():list()
```


### AdminRecentSignup

Create an instance: `local admin_recent_signup = client:AdminRecentSignup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `current_step` | `string` |  |
| `email` | `string` |  |
| `email_source` | `any` |  |
| `error_message` | `any` |  |
| `flow_variant` | `string` |  |
| `id` | `string` |  |
| `inactive_minutes` | `number` |  |
| `last_notification_at` | `any` |  |
| `last_seen_at` | `string` |  |
| `likely_cause` | `string` |  |
| `notification_count` | `number` |  |
| `notification_events` | `table` |  |
| `product_id` | `string` |  |
| `product_name` | `any` |  |
| `product_url` | `string` |  |
| `severity` | `string` |  |
| `social_scan_status` | `any` |  |
| `stage_label` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `any` |  |
| `website_scrape_status` | `any` |  |

#### Example: List

```lua
local admin_recent_signups, err = client:AdminRecentSignup():list()
```


### AdminSlideshowDiag

Create an instance: `local admin_slideshow_diag = client:AdminSlideshowDiag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `string` |  |
| `batch_id` | `string` |  |
| `caption` | `string` |  |
| `content_base64` | `string` |  |
| `day` | `any` |  |
| `formula_id` | `string` |  |
| `id` | `string` |  |
| `title` | `string` |  |

#### Example: Create

```lua
local admin_slideshow_diag, err = client:AdminSlideshowDiag():create({
  id = "example_id", -- string
})
```


### AdminSlideshowImport

Create an instance: `local admin_slideshow_import = client:AdminSlideshowImport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `string` |  |
| `batch_id` | `string` |  |
| `caption` | `string` |  |
| `day` | `string` |  |
| `dry_run` | `boolean` |  |
| `engine_run` | `string` |  |
| `formula_id` | `string` |  |
| `slides` | `table` |  |
| `title` | `string` |  |

#### Example: Load

```lua
local admin_slideshow_import, err = client:AdminSlideshowImport():load({ batch_id = "batch_id" })
```

#### Example: Create

```lua
local admin_slideshow_import, err = client:AdminSlideshowImport():create({
  agent_id = "example_agent_id", -- string
  batch_id = "example_batch_id", -- string
  caption = "example_caption", -- string
  day = "example_day", -- string
  formula_id = "example_formula_id", -- string
  slides = {}, -- table
  title = "example_title", -- string
})
```


### AdminUserView

Create an instance: `local admin_user_view = client:AdminUserView(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `any` |  |
| `admin_notes` | `any` |  |
| `agents_count` | `number` |  |
| `created_at` | `string` |  |
| `credits` | `number` |  |
| `email` | `string` |  |
| `id` | `string` |  |
| `industry` | `any` |  |
| `is_admin` | `boolean` |  |
| `is_bookmarked` | `boolean` |  |
| `is_internal_user` | `boolean` |  |
| `membership` | `any` |  |
| `name` | `string` |  |
| `new_email` | `string` |  |
| `partner_external_user_id` | `string` |  |
| `partner_policy_code` | `any` |  |
| `partner_source` | `any` |  |
| `product_name` | `any` |  |
| `product_url` | `any` |  |
| `skip` | `boolean` |  |
| `subscription_details` | `any` |  |
| `subscription_status` | `any` |  |

#### Example: List

```lua
local admin_user_views, err = client:AdminUserView():list()
```

#### Example: Create

```lua
local admin_user_view, err = client:AdminUserView():create({
  user_id = "example_user_id", -- string
  created_at = "example_created_at", -- string
  credits = 1, -- number
  email = "example_email", -- string
  id = "example_id", -- string
  industry = "example_industry", -- any
  membership = "example_membership", -- any
  name = "example_name", -- string
  new_email = "example_new_email", -- string
  product_name = "example_product_name", -- any
  product_url = "example_product_url", -- any
  skip = true, -- boolean
  subscription_status = "example_subscription_status", -- any
})
```


### AdminUsersTableItem

Create an instance: `local admin_users_table_item = client:AdminUsersTableItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activated` | `boolean` |  |
| `agents_count` | `number` |  |
| `created_at` | `string` |  |
| `credits` | `number` |  |
| `demo_booked` | `boolean` |  |
| `email` | `string` |  |
| `id` | `string` |  |
| `membership` | `any` |  |
| `name` | `string` |  |
| `onboarding_flow` | `string` |  |
| `product_name` | `any` |  |
| `product_url` | `any` |  |
| `survey_data` | `any` |  |

#### Example: List

```lua
local admin_users_table_items, err = client:AdminUsersTableItem():list()
```


### AdminVideoRemixer

Create an instance: `local admin_video_remixer = client:AdminVideoRemixer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `patch(data)` | Change part of an existing entity. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activity` | `string` |  |
| `allowed_platforms` | `table` |  |
| `anchor_clip_id` | `string` |  |
| `atomicity_class` | `any` |  |
| `auto_render` | `boolean` |  |
| `campaign_allowed` | `boolean` |  |
| `channel` | `string` |  |
| `channel_default` | `string` |  |
| `clip_id` | `string` |  |
| `clip_ids` | `table` |  |
| `collected_at` | `string` |  |
| `comments` | `any` |  |
| `completion_rate` | `any` |  |
| `confirmed_duplicate_of` | `any` |  |
| `consent_doc_uri` | `string` |  |
| `contact` | `string` |  |
| `conversions` | `any` |  |
| `count` | `number` |  |
| `creator` | `string` |  |
| `creator_id` | `string` |  |
| `crop_window` | `any` |  |
| `cta_product_id` | `string` |  |
| `days` | `number` |  |
| `derivative_edits_allowed` | `boolean` |  |
| `enabled` | `boolean` |  |
| `end_ms` | `any` |  |
| `enqueue` | `boolean` |  |
| `errors` | `table` |  |
| `evidence` | `string` |  |
| `expected_revision` | `any` |  |
| `expected_revisions` | `table` |  |
| `external_ai_allowed` | `boolean` |  |
| `file` | `string` |  |
| `followers` | `any` |  |
| `formula_id` | `string` |  |
| `formula_ids` | `table` |  |
| `handles` | `table` |  |
| `hook_subtype` | `any` |  |
| `hour_utc` | `number` |  |
| `human_role` | `string` |  |
| `idempotency_key` | `string` |  |
| `items` | `table` |  |
| `kim_clip_ids` | `table` |  |
| `kind` | `string` |  |
| `levels` | `table` |  |
| `likes` | `any` |  |
| `media_enabled` | `boolean` |  |
| `medical_claim_present` | `boolean` |  |
| `minute_utc` | `number` |  |
| `music_bed_allowed` | `boolean` |  |
| `music_policy` | `string` |  |
| `name` | `string` |  |
| `niche` | `string` |  |
| `notes` | `string` |  |
| `origin` | `string` |  |
| `owner_waiver` | `boolean` |  |
| `paid_ads_allowed` | `boolean` |  |
| `patient_identifiable` | `boolean` |  |
| `person_type` | `string` |  |
| `pipeline` | `boolean` |  |
| `planning_only` | `boolean` |  |
| `platform` | `string` |  |
| `platform_post_id` | `string` |  |
| `policy` | `table` |  |
| `polish` | `string` |  |
| `post_url` | `string` |  |
| `posted_at` | `string` |  |
| `primary_role` | `any` |  |
| `purpose` | `string` |  |
| `rate` | `number` |  |
| `rationale` | `string` |  |
| `reason` | `string` |  |
| `reference_source_id` | `string` |  |
| `requires_medical_review` | `boolean` |  |
| `review_status` | `any` |  |
| `revision` | `number` |  |
| `rights_expires_at` | `any` |  |
| `rights_status` | `string` |  |
| `run_id` | `string` |  |
| `sample_links` | `table` |  |
| `secondary_roles` | `any` |  |
| `seconds` | `number` |  |
| `seed` | `number` |  |
| `seed_base` | `number` |  |
| `sensitive_personal_data_present` | `boolean` |  |
| `shares` | `any` |  |
| `shoot` | `string` |  |
| `slots` | `table` |  |
| `soundbite_title` | `any` |  |
| `source` | `string` |  |
| `source_id` | `string` |  |
| `source_ids` | `table` |  |
| `spend_usd` | `any` |  |
| `spiciness` | `any` |  |
| `spiciness_notes` | `string` |  |
| `start_ms` | `any` |  |
| `status` | `string` |  |
| `terry_clip_ids` | `table` |  |
| `testimonial_strength` | `any` |  |
| `testimonial_type` | `any` |  |
| `tier` | `string` |  |
| `timeline` | `table` |  |
| `topic` | `string` |  |
| `topic_tags` | `any` |  |
| `total_target_ms` | `number` |  |
| `use_learned_weights` | `boolean` |  |
| `views` | `any` |  |
| `window` | `string` |  |

#### Example: Load

```lua
local admin_video_remixer, err = client:AdminVideoRemixer():load({ clip_id = "clip_id" })
```

#### Example: Create

```lua
local admin_video_remixer, err = client:AdminVideoRemixer():create({
  activity = "example_activity", -- string
  clip_id = "example_clip_id", -- string
  collected_at = "example_collected_at", -- string
  evidence = "example_evidence", -- string
  expected_revisions = {}, -- table
  file = "example_file", -- string
  formula_id = "example_formula_id", -- string
  formula_ids = {}, -- table
  human_role = "example_human_role", -- string
  idempotency_key = "example_idempotency_key", -- string
  items = {}, -- table
  kim_clip_ids = {}, -- table
  kind = "example_kind", -- string
  levels = {}, -- table
  media_enabled = true, -- boolean
  name = "example_name", -- string
  platform = "example_platform", -- string
  platform_post_id = "example_platform_post_id", -- string
  policy = {}, -- table
  post_url = "example_post_url", -- string
  posted_at = "example_posted_at", -- string
  purpose = "example_purpose", -- string
  reason = "example_reason", -- string
  revision = 1, -- number
  run_id = "example_run_id", -- string
  seconds = 1, -- number
  slots = {}, -- table
  source = "example_source", -- string
  source_id = "example_source_id", -- string
  source_ids = {}, -- table
  terry_clip_ids = {}, -- table
  timeline = {}, -- table
  total_target_ms = 1, -- number
  window = "example_window", -- string
})
```


### AdvanceStep

Create an instance: `local advance_step = client:AdvanceStep(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_step` | `string` |  |
| `onboarding_data_id` | `string` | UUID of the OnboardingData record |
| `success` | `boolean` |  |
| `to_step` | `string` | Target step name |

#### Example: Create

```lua
local advance_step, err = client:AdvanceStep():create({
  onboarding_data_id = "example_onboarding_data_id", -- string
  to_step = "example_to_step", -- string
})
```


### Agent

Create an instance: `local agent = client:Agent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_connections` | `number` |  |
| `at_capacity` | `boolean` |  |
| `id` | `string` |  |
| `is_active` | `boolean` |  |
| `name` | `string` |  |
| `tiktok_stats` | `any` |  |
| `type` | `string` |  |

#### Example: List

```lua
local agents, err = client:Agent():list()
```


### AgentAccessCustomersHealth

Create an instance: `local agent_access_customers_health = client:AgentAccessCustomersHealth(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountType` | `any` |  |
| `agentQuota` | `number` |  |
| `assignedAgentsByType` | `table` |  |
| `assignedAgentsTotal` | `number` |  |
| `createdAt` | `string` |  |
| `email` | `string` |  |
| `isInternalUser` | `any` |  |
| `membership` | `any` |  |
| `name` | `string` |  |
| `performance` | `table` |  |
| `productCount` | `number` |  |
| `subscriptionCurrentPeriodEnd` | `any` |  |
| `subscriptionDetails` | `any` |  |
| `subscriptionStatus` | `any` |  |
| `usage` | `table` |  |
| `userId` | `string` |  |

#### Example: List

```lua
local agent_access_customers_healths, err = client:AgentAccessCustomersHealth():list()
```


### AgentAccessOverview

Create an instance: `local agent_access_overview = client:AgentAccessOverview(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeUsers` | `number` |  |
| `generatedAt` | `string` |  |
| `newUsersYesterday` | `number` |  |
| `onboardingContextCounts` | `table` |  |
| `onboardingCurrentStepCounts` | `table` |  |
| `onboardingCurrentStepWindow` | `table` |  |
| `onboardingFlowVariantCounts` | `table` |  |
| `onboardingLockedUntilActivation` | `number` |  |
| `onboardingRecordsTotal` | `number` |  |
| `onboardingRecordsWindow` | `number` |  |
| `onboardingSocialScanStatusCounts` | `table` |  |
| `onboardingWebsiteScrapeStatusCounts` | `table` |  |
| `subscriptionStatusCounts` | `table` |  |
| `totalInternalUsers` | `number` |  |
| `totalUsers` | `number` |  |
| `trialStartedYesterday` | `number` |  |
| `trialingUsers` | `number` |  |

#### Example: Load

```lua
local agent_access_overview, err = client:AgentAccessOverview():load()
```


### AgentAccessPhilHourlyNotification

Create an instance: `local agent_access_phil_hourly_notification = client:AgentAccessPhilHourlyNotification(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `generatedAt` | `string` |  |
| `phoneHealth` | `table` |  |
| `scheduledPosts` | `table` |  |
| `targetDate` | `string` |  |
| `uploadPostInstagramHealth` | `table` |  |
| `uploadPostTiktokHealth` | `table` |  |
| `uploadPostYoutubeHealth` | `table` |  |

#### Example: Load

```lua
local agent_access_phil_hourly_notification, err = client:AgentAccessPhilHourlyNotification():load()
```


### AgentAccessPhilStatsRefresh

Create an instance: `local agent_access_phil_stats_refresh = client:AgentAccessPhilStatsRefresh(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `generatedAt` | `string` |  |
| `statsRefresh` | `table` |  |
| `targetDate` | `string` |  |

#### Example: Load

```lua
local agent_access_phil_stats_refresh, err = client:AgentAccessPhilStatsRefresh():load()
```


### AgentAccessPhilVideo

Create an instance: `local agent_access_phil_video = client:AgentAccessPhilVideo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `generatedAt` | `string` |  |
| `targetDate` | `string` |  |
| `videos` | `table` |  |

#### Example: Load

```lua
local agent_access_phil_video, err = client:AgentAccessPhilVideo():load()
```


### AgentAccessUserAgent

Create an instance: `local agent_access_user_agent = client:AgentAccessUserAgent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentQuota` | `number` |  |
| `agents` | `table` |  |
| `assignedByType` | `table` |  |
| `assignedTotal` | `number` |  |
| `email` | `string` |  |
| `products` | `table` |  |
| `userId` | `string` |  |

#### Example: List

```lua
local agent_access_user_agents, err = client:AgentAccessUserAgent():list({ email = "example" })
```


### AgentAccessUserPhoneFarm

Create an instance: `local agent_access_user_phone_farm = client:AgentAccessUserPhoneFarm(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar` | `any` |  |
| `facebookUrl` | `any` |  |
| `id` | `string` |  |
| `instagramUrl` | `any` |  |
| `lastAdminSyncedAt` | `any` |  |
| `name` | `string` |  |
| `productId` | `any` |  |
| `productName` | `any` |  |
| `tiktokUrl` | `any` |  |
| `type` | `any` |  |
| `uploadPostPlatforms` | `any` |  |
| `youtubeUrl` | `any` |  |

#### Example: List

```lua
local agent_access_user_phone_farms, err = client:AgentAccessUserPhoneFarm():list({ email = "example" })
```


### AgentAccessUserPost

Create an instance: `local agent_access_user_post = client:AgentAccessUserPost(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deltaYesterday` | `number` |  |
| `expectedVideosPerDay` | `number` |  |
| `postedToday` | `number` |  |
| `postedYesterday` | `number` |  |
| `productId` | `any` |  |
| `productName` | `any` |  |

#### Example: List

```lua
local agent_access_user_posts, err = client:AgentAccessUserPost():list({ email = "example" })
```


### AgentAccessUserSummary

Create an instance: `local agent_access_user_summary = client:AgentAccessUserSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deletedAt` | `any` |  |
| `id` | `string` |  |
| `isActive` | `any` |  |
| `name` | `string` |  |
| `url` | `string` |  |

#### Example: List

```lua
local agent_access_user_summarys, err = client:AgentAccessUserSummary():list({ email = "example" })
```


### AgentAccessUserVideo

Create an instance: `local agent_access_user_video = client:AgentAccessUserVideo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allTime` | `table` |  |
| `email` | `string` |  |
| `today` | `table` |  |
| `userId` | `string` |  |
| `yesterday` | `table` |  |

#### Example: Load

```lua
local agent_access_user_video, err = client:AgentAccessUserVideo():load({ email = "email" })
```


### AgentAccessUserWinningAd

Create an instance: `local agent_access_user_winning_ad = client:AgentAccessUserWinningAd(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `productId` | `string` |  |
| `productName` | `string` |  |
| `winningAds` | `table` |  |
| `winningAdsCount` | `number` |  |

#### Example: List

```lua
local agent_access_user_winning_ads, err = client:AgentAccessUserWinningAd():list({ email = "example" })
```


### AgentAccessWinningAdsSummary

Create an instance: `local agent_access_winning_ads_summary = client:AgentAccessWinningAdsSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `name` | `string` |  |
| `productCount` | `number` |  |
| `productsWithWinningAds` | `number` |  |
| `subscriptionStatus` | `any` |  |
| `totalWinningAds` | `number` |  |
| `userId` | `string` |  |

#### Example: List

```lua
local agent_access_winning_ads_summarys, err = client:AgentAccessWinningAdsSummary():list()
```


### AgentDetail

Create an instance: `local agent_detail = client:AgentDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeConnections` | `any` |  |
| `assignedAt` | `any` |  |
| `avatar` | `string` |  |
| `bio` | `any` |  |
| `facebookUrl` | `any` |  |
| `id` | `string` |  |
| `instagramUrl` | `any` |  |
| `isActive` | `boolean` |  |
| `name` | `string` |  |
| `role` | `any` |  |
| `tiktokStats` | `any` |  |
| `tiktokUrl` | `any` |  |
| `type` | `string` |  |
| `uploadPostPlatforms` | `any` |  |
| `youtubeUrl` | `any` |  |

#### Example: List

```lua
local agent_details, err = client:AgentDetail():list()
```


### AgentHealth

Create an instance: `local agent_health = client:AgentHealth(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `daily` | `table` |  |
| `dates` | `table` |  |
| `generated_at` | `string` |  |
| `groups` | `table` |  |
| `latest` | `table` |  |
| `live_date` | `any` |  |
| `phone_admin_generated_at` | `string` |  |
| `platform` | `string` |  |
| `post_target` | `number` |  |
| `qa_managed_agent_ids` | `table` |  |
| `scope_prefixes` | `table` |  |
| `timezone` | `string` |  |
| `warmup_target` | `number` |  |

#### Example: List

```lua
local agent_healths, err = client:AgentHealth():list()
```


### AgentHealthCustomerOption

Create an instance: `local agent_health_customer_option = client:AgentHealthCustomerOption(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_count` | `number` |  |
| `email` | `string` |  |
| `user_id` | `string` |  |

#### Example: List

```lua
local agent_health_customer_options, err = client:AgentHealthCustomerOption():list()
```


### AgentHealthDetail

Create an instance: `local agent_health_detail = client:AgentHealthDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived_issue_total` | `number` |  |
| `date` | `string` |  |
| `generated_at` | `string` |  |
| `group_id` | `string` |  |
| `has_more` | `boolean` |  |
| `issue_total` | `number` |  |
| `issues` | `table` |  |
| `limit` | `number` |  |
| `metric` | `string` |  |
| `offset` | `number` |  |
| `warmup_runs` | `table` |  |
| `warning_total` | `number` |  |
| `warnings` | `table` |  |

#### Example: List

```lua
local agent_health_details, err = client:AgentHealthDetail():list({ date = "example", group_id = "example" })
```


### AgentPost

Create an instance: `local agent_post = client:AgentPost(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comments` | `number` |  |
| `error_message` | `any` |  |
| `id` | `string` |  |
| `likes` | `number` |  |
| `product_id` | `string` |  |
| `results` | `any` |  |
| `scheduled_datetime` | `string` |  |
| `source_type` | `string` |  |
| `status` | `string` |  |
| `user_email` | `string` |  |
| `user_id` | `string` |  |
| `user_name` | `any` |  |
| `video_id` | `string` |  |
| `video_url` | `any` |  |
| `views` | `number` |  |

#### Example: List

```lua
local agent_posts, err = client:AgentPost():list({ id = "example" })
```


### AgentStat

Create an instance: `local agent_stat = client:AgentStat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agents_needed` | `number` |  |
| `dedicated_agents` | `table` |  |
| `shared_agents` | `table` |  |
| `total_agents` | `number` |  |

#### Example: Load

```lua
local agent_stat, err = client:AgentStat():load()
```


### AgentSummary

Create an instance: `local agent_summary = client:AgentSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_count` | `number` |  |
| `favicon_url` | `any` |  |
| `product_id` | `string` |  |
| `product_name` | `string` |  |

#### Example: List

```lua
local agent_summarys, err = client:AgentSummary():list()
```


### AgentsSummary

Create an instance: `local agents_summary = client:AgentsSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `total_agents` | `number` |  |
| `total_agents_count_sum` | `number` |  |

#### Example: Load

```lua
local agents_summary, err = client:AgentsSummary():load()
```


### AnalysisStatus

Create an instance: `local analysis_status = client:AnalysisStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local analysis_status, err = client:AnalysisStatus():load()
```


### AnalyticsPost

Create an instance: `local analytics_post = client:AnalyticsPost(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent` | `any` |  |
| `comment` | `any` |  |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `product_id` | `string` |  |
| `queue_position` | `any` |  |
| `results` | `any` |  |
| `scheduled_datetime` | `string` |  |
| `scraped_posts` | `any` |  |
| `source_type` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |
| `video` | `any` |  |

#### Example: List

```lua
local analytics_posts, err = client:AnalyticsPost():list({ date_from = "example" })
```


### AnalyzeProduct

Create an instance: `local analyze_product = client:AnalyzeProduct(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `instagram_username` | `any` |  |
| `message` | `string` |  |
| `status` | `string` |  |
| `url` | `string` |  |

#### Example: Create

```lua
local analyze_product, err = client:AnalyzeProduct():create({
  url = "example_url", -- string
})
```


### AssignAgent

Create an instance: `local assign_agent = client:AssignAgent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent` | `table` | Agent information for V6. |
| `assignment` | `table` | Assignment information for V6. |
| `mock_agents` | `table` |  |
| `onboarding_data_id` | `string` | UUID of the OnboardingData record |

#### Example: Create

```lua
local assign_agent, err = client:AssignAgent():create({
  onboarding_data_id = "example_onboarding_data_id", -- string
})
```


### Auth

Create an instance: `local auth = client:Auth(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |


### AutoScheduleSetting

Create an instance: `local auto_schedule_setting = client:AutoScheduleSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `can_enable_repost` | `boolean` |  |
| `effective_posted_video_reuse_percent` | `number` |  |
| `enabled_video_types` | `any` | List of enabled video type filters |
| `is_enabled` | `boolean` |  |
| `lock_video_regeneration_controls` | `boolean` |  |
| `membership_tier` | `string` |  |
| `posted_video_reuse_percent` | `any` |  |
| `product_id` | `string` |  |
| `repost_source` | `any` |  |
| `videos_per_day` | `number` |  |

#### Example: Load

```lua
local auto_schedule_setting, err = client:AutoScheduleSetting():load()
```


### BulkTikTokStatsUpdate

Create an instance: `local bulk_tik_tok_stats_update = client:BulkTikTokStatsUpdate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `failedIds` | `table` |  |
| `updatedCount` | `number` |  |
| `updates` | `table` |  |


### Carousel

Create an instance: `local carousel = client:Carousel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `string` |  |
| `agent_name` | `string` |  |
| `audit_created_at` | `any` |  |
| `audit_snapshot_sha256` | `any` |  |
| `caption` | `any` |  |
| `comments` | `any` |  |
| `fit_score` | `any` |  |
| `format` | `string` |  |
| `formula` | `table` |  |
| `formula_id` | `string` |  |
| `formula_name` | `any` |  |
| `generation` | `table` |  |
| `id` | `string` |  |
| `image_prompt` | `any` |  |
| `likes` | `any` |  |
| `main_prompt` | `any` |  |
| `metrics_updated_at` | `any` |  |
| `post_url` | `any` |  |
| `profile_url` | `any` |  |
| `qa` | `table` |  |
| `qa_status` | `string` |  |
| `qa_verdict` | `any` |  |
| `quality_score` | `any` |  |
| `queue_id` | `string` |  |
| `relevance_score` | `any` |  |
| `scheduled_at` | `string` |  |
| `slide_count` | `number` |  |
| `slides` | `table` |  |
| `source` | `table` |  |
| `status` | `string` |  |
| `thumbnail_url` | `any` |  |
| `title` | `string` |  |
| `video_id` | `string` |  |
| `views` | `any` |  |

#### Example: Load

```lua
local carousel, err = client:Carousel():load({ id = "carousel_id" })
```

#### Example: List

```lua
local carousels, err = client:Carousel():list()
```

#### Example: Create

```lua
local carousel, err = client:Carousel():create({
  id = "example_id", -- string
  agent_id = "example_agent_id", -- string
  agent_name = "example_agent_name", -- string
  format = "example_format", -- string
  qa_status = "example_qa_status", -- string
  queue_id = "example_queue_id", -- string
  scheduled_at = "example_scheduled_at", -- string
  slide_count = 1, -- number
  slides = {}, -- table
  status = "example_status", -- string
  title = "example_title", -- string
  video_id = "example_video_id", -- string
})
```


### CarouselAgentDetail

Create an instance: `local carousel_agent_detail = client:CarouselAgentDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `string` |  |
| `agent_name` | `string` |  |
| `connection_status` | `any` |  |
| `followers` | `any` |  |
| `following` | `any` |  |
| `metrics_updated_at` | `any` |  |
| `phone_admin_status` | `string` |  |
| `profile_likes` | `any` |  |
| `profile_url` | `any` |  |
| `warmup_days` | `any` |  |
| `warmup_hold_until` | `any` |  |
| `warmup_status` | `string` |  |

#### Example: Load

```lua
local carousel_agent_detail, err = client:CarouselAgentDetail():load({ agent_id = "agent_id" })
```


### CarouselStatus

Create an instance: `local carousel_status = client:CarouselStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `caption` | `any` |  |
| `error` | `any` |  |
| `id` | `string` |  |
| `image_model` | `any` |  |
| `image_provider` | `any` |  |
| `image_task_id` | `string` |  |
| `image_url` | `any` |  |
| `index` | `number` |  |
| `prompt` | `any` |  |
| `status` | `string` |  |

#### Example: List

```lua
local carousel_statuss, err = client:CarouselStatus():list({ id = "example" })
```


### Chat

Create an instance: `local chat = client:Chat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `idempotencyKey` | `string` |  |
| `message` | `string` |  |
| `sessionId` | `string` |  |

#### Example: Create

```lua
local chat, err = client:Chat():create({
  session_id = "example_session_id", -- string
  idempotencyKey = "example_idempotencyKey", -- string
  message = "example_message", -- string
  sessionId = "example_sessionId", -- string
})
```


### ChatHistory

Create an instance: `local chat_history = client:ChatHistory(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `chatSubVariant` | `string` |  |
| `createdAt` | `string` |  |
| `messages` | `table` |  |
| `model` | `any` |  |
| `onboardingDataId` | `string` |  |
| `routeRecommendation` | `any` |  |
| `salesStage` | `string` |  |
| `selectedPlan` | `any` |  |
| `session` | `table` |  |
| `sessionId` | `string` |  |
| `status` | `string` |  |
| `updatedAt` | `string` |  |

#### Example: Load

```lua
local chat_history, err = client:ChatHistory():load({ session_id = "session_id" })
```

#### Example: Create

```lua
local chat_history, err = client:ChatHistory():create({
  onboardingDataId = "example_onboardingDataId", -- string
})
```


### ChatSession

Create an instance: `local chat_session = client:ChatSession(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `chatSubVariant` | `string` |  |
| `createdAt` | `string` |  |
| `model` | `any` |  |
| `plan` | `any` |  |
| `route` | `any` |  |
| `routeRecommendation` | `any` |  |
| `salesStage` | `string` |  |
| `selectedPlan` | `any` |  |
| `sessionId` | `string` |  |
| `status` | `string` |  |
| `updatedAt` | `string` |  |

#### Example: Create

```lua
local chat_session, err = client:ChatSession():create({
  session_id = "example_session_id", -- string
})
```


### Comment

Create an instance: `local comment = client:Comment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local comment, err = client:Comment():load()
```


### CommentCampaign

Create an instance: `local comment_campaign = client:CommentCampaign(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_daily_limit` | `number` |  |
| `account_weekly_limit` | `number` |  |
| `action` | `string` |  |
| `active_days_per_week` | `number` |  |
| `agent_id` | `string` |  |
| `allowlist` | `table` |  |
| `analysis_daily_limit` | `number` |  |
| `analysis_model` | `string` |  |
| `analysis_reservation_usd` | `number` |  |
| `approved_markets` | `table` |  |
| `brand_forward_enabled` | `boolean` |  |
| `briefs` | `table` |  |
| `candidate_only` | `boolean` |  |
| `claims` | `table` |  |
| `cohort_removal_threshold` | `number` |  |
| `daily_cost_ceiling_usd` | `number` |  |
| `delivery_mode` | `string` |  |
| `disclosure_mode` | `string` |  |
| `disclosure_template` | `string` |  |
| `draft_options_count` | `number` |  |
| `draft_review_reservation_usd` | `number` |  |
| `exceptional_daily_cap_approved` | `boolean` |  |
| `execution_enabled` | `boolean` |  |
| `experiment_styles` | `table` |  |
| `inventory_factor` | `number` |  |
| `keywords` | `table` |  |
| `max_duration_seconds` | `any` |  |
| `metadata_pass_rate` | `number` |  |
| `min_interval_minutes` | `number` |  |
| `mode` | `string` |  |
| `monitored_creators` | `table` |  |
| `platform` | `string` |  |
| `platform_permission_evidence` | `string` |  |
| `policy_approved_by` | `string` |  |
| `policy_expires_at` | `any` |  |
| `policy_version` | `string` |  |
| `product_daily_limit` | `number` |  |
| `qualification_rate` | `number` |  |
| `raw_daily_limit` | `number` |  |
| `raw_result_reservation_usd` | `number` |  |
| `reason` | `string` |  |
| `replies_enabled` | `boolean` |  |
| `request_key` | `string` |  |
| `reviewer_model` | `string` |  |
| `scan_interval_hours` | `number` |  |
| `search_change_reason` | `string` |  |
| `search_effective_at` | `any` |  |
| `shadow_sample_limit` | `number` |  |
| `spent_seconds` | `any` |  |
| `task_ttl_hours` | `number` |  |
| `top_comment_analysis_enabled` | `boolean` |  |
| `writer_model` | `string` |  |

#### Example: Load

```lua
local comment_campaign, err = client:CommentCampaign():load({ product_id = "product_id" })
```

#### Example: Create

```lua
local comment_campaign, err = client:CommentCampaign():create({
  product_id = "example_product_id", -- string
  action = "example_action", -- string
  agent_id = "example_agent_id", -- string
  reason = "example_reason", -- string
  request_key = "example_request_key", -- string
})
```


### CompleteChatCheckout

Create an instance: `local complete_chat_checkout = client:CompleteChatCheckout(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `message` | `any` |  |
| `onboarding_data_id` | `string` |  |
| `product_id` | `string` |  |
| `ready` | `boolean` |  |
| `success` | `boolean` |  |

#### Example: Create

```lua
local complete_chat_checkout, err = client:CompleteChatCheckout():create({
  onboarding_data_id = "example_onboarding_data_id", -- string
})
```


### CreateBlackoutSora2Video

Create an instance: `local create_blackout_sora2_video = client:CreateBlackoutSora2Video(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `main_prompt` | `string` |  |
| `media_asset_id` | `string` |  |
| `product_id` | `string` |  |
| `requires_polling` | `boolean` |  |
| `video` | `table` |  |

#### Example: Create

```lua
local create_blackout_sora2_video, err = client:CreateBlackoutSora2Video():create({
  main_prompt = "example_main_prompt", -- string
  media_asset_id = "example_media_asset_id", -- string
  product_id = "example_product_id", -- string
})
```


### CreateCarousel

Create an instance: `local create_carousel = client:CreateCarousel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `copy_mode` | `any` |  |
| `expected_owner_user_id` | `string` |  |
| `expected_product_id` | `string` |  |
| `expected_product_name` | `any` |  |
| `image_model` | `string` |  |
| `mention_product` | `boolean` |  |
| `message` | `string` |  |
| `num_slides` | `number` |  |
| `owner_user_id` | `string` |  |
| `product_id` | `string` | Product ID to use. |
| `product_name` | `any` |  |
| `product_placement` | `string` |  |
| `request_id` | `string` |  |
| `script_style_custom` | `any` |  |
| `script_style_id` | `string` |  |
| `selected_hook` | `any` |  |
| `status` | `string` |  |
| `success` | `boolean` |  |
| `template_id` | `string` |  |
| `video_id` | `string` |  |
| `visual_style_custom` | `any` |  |
| `visual_style_id` | `string` |  |

#### Example: Create

```lua
local create_carousel, err = client:CreateCarousel():create({
  template_id = "example_template_id", -- string
})
```


### CreateProduct

Create an instance: `local create_product = client:CreateProduct(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `onboarding_data_id` | `string` | UUID of the OnboardingData record |
| `product_id` | `string` |  |
| `success` | `boolean` |  |
| `videos_queued` | `number` |  |

#### Example: Create

```lua
local create_product, err = client:CreateProduct():create({
  onboarding_data_id = "example_onboarding_data_id", -- string
})
```


### CreateResetProductV6

Create an instance: `local create_reset_product_v6 = client:CreateResetProductV6(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agents_transferred` | `number` |  |
| `credits_deducted` | `number` |  |
| `onboarding_data_id` | `string` |  |
| `product_id` | `string` |  |
| `remaining_credits` | `number` |  |
| `success` | `boolean` |  |
| `videos_queued` | `number` |  |

#### Example: Create

```lua
local create_reset_product_v6, err = client:CreateResetProductV6():create({
  onboarding_data_id = "example_onboarding_data_id", -- string
})
```


### CreateSora2Video

Create an instance: `local create_sora2_video = client:CreateSora2Video(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `image_prompt` | `any` |  |
| `main_prompt` | `string` |  |
| `model` | `string` |  |
| `requires_polling` | `boolean` |  |
| `seconds` | `string` |  |
| `size` | `string` |  |
| `video` | `table` |  |

#### Example: Create

```lua
local create_sora2_video, err = client:CreateSora2Video():create({
  main_prompt = "example_main_prompt", -- string
})
```


### CreateVariation

Create an instance: `local create_variation = client:CreateVariation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `hook_duration` | `number` |  |
| `media_asset_id` | `string` |  |
| `message` | `string` |  |
| `product_id` | `string` |  |
| `prompt` | `string` |  |
| `task_id` | `string` |  |
| `video_id` | `string` |  |

#### Example: Create

```lua
local create_variation, err = client:CreateVariation():create({
  hook_duration = 1, -- number
  media_asset_id = "example_media_asset_id", -- string
  product_id = "example_product_id", -- string
  prompt = "example_prompt", -- string
})
```


### Customer

Create an instance: `local customer = client:Customer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `any` |  |
| `assigned_agents_count` | `number` |  |
| `email` | `string` |  |
| `id` | `string` |  |
| `is_migrated` | `boolean` |  |

#### Example: List

```lua
local customers, err = client:Customer():list()
```


### CustomerHealth

Create an instance: `local customer_health = client:CustomerHealth(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_agents` | `table` |  |
| `available_dates` | `table` |  |
| `date` | `string` |  |
| `email` | `string` |  |
| `entries` | `table` |  |
| `id` | `string` |  |
| `performance_overview` | `table` |  |
| `platform_coverage_summary` | `table` |  |
| `user_id` | `string` |  |

#### Example: Load

```lua
local customer_health, err = client:CustomerHealth():load({ id = "customer_health_id" })
```


### CustomerHealthAllCustomersItem

Create an instance: `local customer_health_all_customers_item = client:CustomerHealthAllCustomersItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `any` |  |
| `assigned_agents_count` | `number` |  |
| `daily_stats` | `table` |  |
| `email` | `string` |  |
| `is_migrated` | `boolean` |  |
| `total_views` | `number` |  |
| `user_id` | `string` |  |

#### Example: List

```lua
local customer_health_all_customers_items, err = client:CustomerHealthAllCustomersItem():list()
```


### CustomerHealthViewsSummary

Create an instance: `local customer_health_views_summary = client:CustomerHealthViewsSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `average_views_per_result` | `number` |  |
| `date` | `string` |  |
| `end_date` | `any` |  |
| `paid_users_count` | `number` |  |
| `posted_results` | `number` |  |
| `range` | `string` |  |
| `start_date` | `any` |  |
| `top_users` | `table` |  |
| `total_views` | `number` |  |
| `trend` | `table` |  |
| `trend_granularity` | `string` |  |
| `user_email` | `any` |  |
| `user_id` | `string` |  |
| `users_with_views` | `number` |  |

#### Example: List

```lua
local customer_health_views_summarys, err = client:CustomerHealthViewsSummary():list()
```


### Daily

Create an instance: `local daily = client:Daily(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Create

```lua
local daily, err = client:Daily():create({
  id = "example_id", -- string
  day = "example_day", -- string
})
```


### DailyStatus

Create an instance: `local daily_status = client:DailyStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local daily_status, err = client:DailyStatus():load({ id = "daily_status_id", day = "day" })
```


### DedicatedAgentsDashboard

Create an instance: `local dedicated_agents_dashboard = client:DedicatedAgentsDashboard(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_connections` | `number` |  |
| `assigned_user_id` | `string` |  |
| `assigned_user_ids` | `table` |  |
| `bio` | `any` |  |
| `id` | `string` |  |
| `instagram_url` | `any` |  |
| `is_active` | `boolean` |  |
| `last_admin_synced_at` | `any` |  |
| `name` | `string` |  |
| `role` | `any` |  |
| `tiktok_stats` | `any` |  |
| `tiktok_url` | `any` |  |
| `today_failed_entries` | `table` |  |
| `today_stats` | `table` |  |
| `upload_post_platforms` | `any` |  |
| `upload_post_profile` | `any` |  |
| `yesterday_failed_entries` | `table` |  |
| `yesterday_stats` | `table` |  |
| `youtube_url` | `any` |  |

#### Example: List

```lua
local dedicated_agents_dashboards, err = client:DedicatedAgentsDashboard():list()
```


### EnterpriseAgent

Create an instance: `local enterprise_agent = client:EnterpriseAgent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `number` |  |
| `product_id` | `string` |  |
| `source_product_id` | `string` |  |
| `target_product_id` | `string` |  |

#### Example: Load

```lua
local enterprise_agent, err = client:EnterpriseAgent():load()
```

#### Example: Create

```lua
local enterprise_agent, err = client:EnterpriseAgent():create({
  product_id = "example_product_id", -- string
  source_product_id = "example_source_product_id", -- string
  target_product_id = "example_target_product_id", -- string
})
```


### EnterpriseProduct

Create an instance: `local enterprise_product = client:EnterpriseProduct(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local enterprise_product, err = client:EnterpriseProduct():load({ product_id = "product_id" })
```


### ExactAvailability

Create an instance: `local exact_availability = client:ExactAvailability(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local exact_availability, err = client:ExactAvailability():load()
```


### ExactFormula

Create an instance: `local exact_formula = client:ExactFormula(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local exact_formula, err = client:ExactFormula():load()
```


### ExtractV2

Create an instance: `local extract_v2 = client:ExtractV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `instagram_username` | `any` |  |
| `message` | `string` |  |
| `status` | `string` |  |
| `url` | `string` |  |

#### Example: Create

```lua
local extract_v2, err = client:ExtractV2():create({
  url = "example_url", -- string
})
```


### FailedPost

Create an instance: `local failed_post = client:FailedPost(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `string` |  |
| `agent_name` | `any` |  |
| `agent_platforms` | `any` |  |
| `error_message` | `any` |  |
| `id` | `string` |  |
| `product_id` | `string` |  |
| `results` | `any` |  |
| `scheduled_datetime` | `string` |  |
| `source_type` | `string` |  |
| `status` | `string` |  |
| `user_email` | `string` |  |
| `user_id` | `string` |  |
| `user_name` | `any` |  |
| `video_id` | `string` |  |
| `video_url` | `any` |  |

#### Example: List

```lua
local failed_posts, err = client:FailedPost():list()
```


### File

Create an instance: `local file = client:File(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `file` | `string` |  |

#### Example: Create

```lua
local file, err = client:File():create({
  file = "example_file", -- string
})
```


### GenerateBlackoutSora2Prompt

Create an instance: `local generate_blackout_sora2_prompt = client:GenerateBlackoutSora2Prompt(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `media_asset_id` | `string` |  |
| `product_id` | `string` |  |
| `prompt` | `string` |  |

#### Example: Create

```lua
local generate_blackout_sora2_prompt, err = client:GenerateBlackoutSora2Prompt():create({
  media_asset_id = "example_media_asset_id", -- string
  product_id = "example_product_id", -- string
})
```


### GeneratePomelliDemo

Create an instance: `local generate_pomelli_demo = client:GeneratePomelliDemo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_demo_count` | `number` |  |
| `max_demos` | `number` |  |
| `message` | `string` |  |
| `product_id` | `string` | UUID of the Product |
| `success` | `boolean` |  |

#### Example: Create

```lua
local generate_pomelli_demo, err = client:GeneratePomelliDemo():create({
  product_id = "example_product_id", -- string
})
```


### GeneratePrompt

Create an instance: `local generate_prompt = client:GeneratePrompt(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `hook_duration` | `number` |  |
| `media_asset_id` | `string` |  |
| `media_asset_url` | `string` |  |
| `prompt` | `string` |  |

#### Example: Create

```lua
local generate_prompt, err = client:GeneratePrompt():create({
  media_asset_id = "example_media_asset_id", -- string
})
```


### GenerateSora2Prompt

Create an instance: `local generate_sora2_prompt = client:GenerateSora2Prompt(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `prompt` | `string` |  |

#### Example: Load

```lua
local generate_sora2_prompt, err = client:GenerateSora2Prompt():load()
```


### Healthrx

Create an instance: `local healthrx = client:Healthrx(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `action` | `string` |  |
| `agent_id` | `string` |  |
| `attempt` | `number` |  |
| `avatar_present` | `boolean` |  |
| `benchmark_set` | `string` |  |
| `commercial` | `boolean` |  |
| `commercial_license_evidence` | `string` |  |
| `content_id` | `string` |  |
| `dimensions` | `table` |  |
| `duration_seconds` | `number` |  |
| `evidence` | `string` |  |
| `evidence_urls` | `table` |  |
| `external_key` | `string` |  |
| `format` | `string` |  |
| `includes_all_attempt_costs` | `boolean` |  |
| `input_specification` | `table` |  |
| `kind` | `string` |  |
| `level` | `number` |  |
| `measured_at` | `string` |  |
| `model_version` | `string` |  |
| `paid_campaign_id` | `string` |  |
| `parent_content_id` | `string` |  |
| `paused` | `boolean` |  |
| `pillar` | `string` |  |
| `profile` | `table` |  |
| `promotion_evidence` | `string` |  |
| `provider` | `string` |  |
| `provider_invoice_evidence` | `string` |  |
| `reason` | `string` |  |
| `reference_version` | `string` |  |
| `request_key` | `string` |  |
| `scope` | `string` |  |
| `test_variable` | `string` |  |
| `topic` | `string` |  |
| `total_cost_usd` | `number` |  |

#### Example: Load

```lua
local healthrx, err = client:Healthrx():load({ product_id = "product_id" })
```

#### Example: Create

```lua
local healthrx, err = client:Healthrx():create({
  product_id = "example_product_id", -- string
  agent_id = "example_agent_id", -- string
  attempt = 1, -- number
  benchmark_set = "example_benchmark_set", -- string
  commercial_license_evidence = "example_commercial_license_evidence", -- string
  dimensions = {}, -- table
  evidence = "example_evidence", -- string
  evidence_urls = {}, -- table
  external_key = "example_external_key", -- string
  input_specification = {}, -- table
  kind = "example_kind", -- string
  measured_at = "example_measured_at", -- string
  model_version = "example_model_version", -- string
  paused = true, -- boolean
  pillar = "example_pillar", -- string
  profile = {}, -- table
  provider = "example_provider", -- string
  provider_invoice_evidence = "example_provider_invoice_evidence", -- string
  reason = "example_reason", -- string
  reference_version = "example_reference_version", -- string
  request_key = "example_request_key", -- string
  test_variable = "example_test_variable", -- string
  topic = "example_topic", -- string
  total_cost_usd = 1, -- number
})
```


### InitResetProductV6

Create an instance: `local init_reset_product_v6 = client:InitResetProductV6(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_schedule_disabled` | `boolean` |  |
| `old_product_id` | `string` |  |
| `product_id` | `string` |  |
| `queue_entries_cleared` | `number` |  |
| `success` | `boolean` |  |

#### Example: Create

```lua
local init_reset_product_v6, err = client:InitResetProductV6():create({
})
```


### Iri

Create an instance: `local iri = client:Iri(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `correlationId` | `any` |  |
| `idempotencyKey` | `string` |  |
| `productId` | `any` |  |

#### Example: Create

```lua
local iri, err = client:Iri():create({
  connector_id = "example_connector_id", -- string
  idempotencyKey = "example_idempotencyKey", -- string
})
```


### IrisCapability

Create an instance: `local iris_capability = client:IrisCapability(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `capability` | `string` |  |
| `correlationId` | `string` |  |
| `errorCode` | `any` |  |
| `externalProductId` | `any` |  |
| `externalUserId` | `string` |  |
| `id` | `string` |  |
| `idempotencyKey` | `string` |  |
| `input` | `table` |  |
| `membershipId` | `any` |  |
| `message` | `any` |  |
| `ok` | `boolean` |  |
| `platformAccountId` | `any` |  |
| `platformLinkId` | `any` |  |
| `productScope` | `string` |  |
| `requestedBy` | `table` |  |
| `result` | `table` |  |
| `retryable` | `boolean` |  |

#### Example: Create

```lua
local iris_capability, err = client:IrisCapability():create({
  id = "example_id", -- string
  capability = "example_capability", -- string
  correlationId = "example_correlationId", -- string
  externalUserId = "example_externalUserId", -- string
  idempotencyKey = "example_idempotencyKey", -- string
  productScope = "example_productScope", -- string
})
```


### IrisChat

Create an instance: `local iris_chat = client:IrisChat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `artifacts` | `table` |  |
| `correlationId` | `string` |  |
| `idempotencyKey` | `string` |  |
| `message` | `string` |  |
| `mode` | `string` |  |
| `ok` | `boolean` |  |
| `pageContext` | `table` |  |
| `productId` | `any` |  |
| `runtimeStatus` | `string` |  |
| `sessionId` | `any` |  |

#### Example: Create

```lua
local iris_chat, err = client:IrisChat():create({
  correlationId = "example_correlationId", -- string
  idempotencyKey = "example_idempotencyKey", -- string
  message = "example_message", -- string
})
```


### IrisConnector

Create an instance: `local iris_connector = client:IrisConnector(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connectors` | `table` |  |

#### Example: List

```lua
local iris_connectors, err = client:IrisConnector():list()
```


### IrisStatus

Create an instance: `local iris_status = client:IrisStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connectorsPreview` | `table` |  |
| `product` | `any` |  |
| `status` | `table` |  |
| `tasksPreview` | `table` |  |

#### Example: List

```lua
local iris_statuss, err = client:IrisStatus():list()
```


### IrisTask

Create an instance: `local iris_task = client:IrisTask(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approvalRequired` | `boolean` |  |
| `cadence` | `string` |  |
| `capability` | `any` |  |
| `completed` | `table` |  |
| `description` | `string` |  |
| `discover` | `table` |  |
| `productId` | `any` |  |
| `recurring` | `table` |  |
| `requiredConnectors` | `table` |  |
| `title` | `string` |  |

#### Example: List

```lua
local iris_tasks, err = client:IrisTask():list()
```

#### Example: Create

```lua
local iris_task, err = client:IrisTask():create({
  title = "example_title", -- string
})
```


### IrisUsage

Create an instance: `local iris_usage = client:IrisUsage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `eventCount` | `number` |  |
| `events` | `table` |  |
| `membershipId` | `any` |  |
| `productScope` | `string` |  |

#### Example: List

```lua
local iris_usages, err = client:IrisUsage():list()
```


### Landing

Create an instance: `local landing = client:Landing(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `file` | `string` |  |

#### Example: Create

```lua
local landing, err = client:Landing():create({
  index = 1, -- number
  file = "example_file", -- string
})
```


### LandingStat

Create an instance: `local landing_stat = client:LandingStat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `landing` | `table` |  |
| `microhub` | `table` |  |

#### Example: Load

```lua
local landing_stat, err = client:LandingStat():load({ slug = "slug" })
```


### LandingStatus

Create an instance: `local landing_status = client:LandingStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errorMessage` | `any` |  |
| `landingStatus` | `string` |  |
| `microhubStatus` | `string` |  |

#### Example: Load

```lua
local landing_status, err = client:LandingStatus():load()
```


### LinkInBio

Create an instance: `local link_in_bio = client:LinkInBio(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `linkInBioType` | `string` |  |
| `redirectUrl` | `string` |  |
| `slug` | `string` |  |

#### Example: Load

```lua
local link_in_bio, err = client:LinkInBio():load({ slug = "slug" })
```


### LinkInDm

Create an instance: `local link_in_dm = client:LinkInDm(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `linkInDmsType` | `string` |  |
| `redirectUrl` | `string` |  |
| `slug` | `string` |  |

#### Example: Load

```lua
local link_in_dm, err = client:LinkInDm():load({ slug = "slug" })
```


### LinkInPost

Create an instance: `local link_in_post = client:LinkInPost(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `linkInPostsType` | `string` |  |
| `redirectUrl` | `string` |  |
| `showLinkInFirstComment` | `boolean` |  |
| `slug` | `string` |  |

#### Example: Load

```lua
local link_in_post, err = client:LinkInPost():load({ slug = "slug" })
```


### LinkUser

Create an instance: `local link_user = client:LinkUser(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `already_linked` | `boolean` |  |
| `onboarding_data_id` | `string` | UUID of the OnboardingData record |
| `success` | `boolean` |  |

#### Example: Create

```lua
local link_user, err = client:LinkUser():create({
  onboarding_data_id = "example_onboarding_data_id", -- string
})
```


### MediaAsset

Create an instance: `local media_asset = client:MediaAsset(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` |  |
| `createdAt` | `string` |  |
| `description` | `string` |  |
| `file` | `string` |  |
| `id` | `string` |  |
| `media_assets` | `table` |  |
| `onboardingDataId` | `any` |  |
| `onboarding_data_id` | `string` |  |
| `productId` | `any` |  |
| `product_id` | `string` |  |
| `source` | `string` |  |
| `type` | `string` |  |
| `updatedAt` | `string` |  |
| `url` | `string` |  |
| `usedAt` | `any` |  |
| `veo3VideoId` | `any` |  |

#### Example: Load

```lua
local media_asset, err = client:MediaAsset():load({ id = "media_asset_id" })
```

#### Example: Create

```lua
local media_asset, err = client:MediaAsset():create({
  category = "example_category", -- string
  createdAt = "example_createdAt", -- string
  file = "example_file", -- string
  id = "example_id", -- string
  media_assets = {}, -- table
  onboarding_data_id = "example_onboarding_data_id", -- string
  source = "example_source", -- string
  type = "example_type", -- string
  updatedAt = "example_updatedAt", -- string
  url = "example_url", -- string
})
```


### Men

Create an instance: `local men = client:Men(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```lua
local mens, err = client:Men():list()
```


### Microdrama

Create an instance: `local microdrama = client:Microdrama(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `evidence` | `table` |  |
| `expected_revision` | `number` |  |
| `idempotency_key` | `string` |  |
| `issues` | `table` |  |
| `reason` | `string` |  |
| `role` | `string` |  |
| `scores` | `table` |  |
| `selected_premise_id` | `string` |  |
| `stage` | `string` |  |
| `status` | `string` |  |
| `subject_hash` | `string` |  |
| `title` | `string` |  |
| `verdict` | `string` |  |

#### Example: Load

```lua
local microdrama, err = client:Microdrama():load({ episode_id = "episode_id" })
```

#### Example: Create

```lua
local microdrama, err = client:Microdrama():create({
  episode_id = "example_episode_id", -- string
  evidence = {}, -- table
  expected_revision = 1, -- number
  idempotency_key = "example_idempotency_key", -- string
  reason = "example_reason", -- string
  role = "example_role", -- string
  scores = {}, -- table
  stage = "example_stage", -- string
  status = "example_status", -- string
  subject_hash = "example_subject_hash", -- string
  verdict = "example_verdict", -- string
})
```


### MicrohubPublic

Create an instance: `local microhub_public = client:MicrohubPublic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bio` | `any` |  |
| `ctaButtonText` | `any` |  |
| `ctaDescription` | `any` |  |
| `ctaLink` | `any` |  |
| `ctaTitle` | `any` |  |
| `headerImageUrl` | `any` |  |
| `links` | `table` |  |
| `name` | `string` |  |
| `profileImageUrl` | `any` |  |
| `slug` | `string` |  |
| `socialLinks` | `table` |  |
| `testimonials` | `table` |  |

#### Example: Load

```lua
local microhub_public, err = client:MicrohubPublic():load({ slug = "slug" })
```


### OnboardingStatus

Create an instance: `local onboarding_status = client:OnboardingStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comments` | `number` |  |
| `cover_image_url` | `any` |  |
| `id` | `string` |  |
| `likes` | `number` |  |
| `platform` | `string` |  |
| `video_url` | `any` |  |
| `views` | `number` |  |

#### Example: List

```lua
local onboarding_statuss, err = client:OnboardingStatus():list({ oid = "example" })
```


### OnboardingV6

Create an instance: `local onboarding_v6 = client:OnboardingV6(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### PaidUser

Create an instance: `local paid_user = client:PaidUser(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agents_count` | `number` |  |
| `assigned_agents_count` | `number` |  |
| `auto_schedule_enabled` | `any` |  |
| `credits` | `number` |  |
| `effective_agents_count` | `number` |  |
| `email` | `string` |  |
| `id` | `string` |  |
| `is_internal_user` | `boolean` |  |
| `is_migrated_user` | `boolean` |  |
| `membership` | `any` |  |
| `scheduled_queue_count` | `number` |  |
| `subscription_details` | `any` |  |
| `subscription_status` | `any` |  |

#### Example: List

```lua
local paid_users, err = client:PaidUser():list()
```


### Pexel

Create an instance: `local pexel = client:Pexel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```lua
local pexels, err = client:Pexel():list()
```


### PhoneAdminAvailableAgentSource

Create an instance: `local phone_admin_available_agent_source = client:PhoneAdminAvailableAgentSource(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available_count` | `number` |  |
| `pc_name` | `string` |  |

#### Example: List

```lua
local phone_admin_available_agent_sources, err = client:PhoneAdminAvailableAgentSource():list()
```


### Product

Create an instance: `local product = client:Product(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_count` | `number` |  |
| `agents` | `table` |  |
| `createdAt` | `any` |  |
| `demoVideos` | `any` |  |
| `description` | `string` |  |
| `favicon_url` | `any` |  |
| `howItWorks` | `any` |  |
| `how_it_works` | `any` |  |
| `id` | `string` |  |
| `images` | `any` |  |
| `initial_agents` | `number` |  |
| `instagramHandle` | `any` |  |
| `instagram_handle` | `any` |  |
| `isActive` | `any` |  |
| `isApp` | `any` |  |
| `is_active` | `boolean` |  |
| `is_app` | `boolean` |  |
| `language` | `any` |  |
| `mediaAssets` | `any` |  |
| `media_asset_ids` | `any` |  |
| `media_assets` | `any` |  |
| `name` | `string` |  |
| `otherInstructions` | `any` |  |
| `other_instructions` | `any` |  |
| `outroVideo` | `any` |  |
| `pexelsVideos` | `any` |  |
| `pricing` | `any` |  |
| `pricingAndOffers` | `any` |  |
| `pricing_and_offers` | `any` |  |
| `product_demo_ids` | `table` |  |
| `product_details` | `table` | Product details for enterprise product creation |
| `product_id` | `string` |  |
| `product_name` | `string` |  |
| `product_url` | `string` |  |
| `pronunciation` | `any` |  |
| `regenerate_sora2` | `boolean` |  |
| `repostSource` | `any` |  |
| `repost_source` | `any` |  |
| `screenshot_url` | `any` |  |
| `social_post_ids` | `table` |  |
| `targetAudience` | `any` |  |
| `target_audience` | `any` |  |
| `templateProductId` | `any` |  |
| `tiktokHandle` | `any` |  |
| `tiktok_handle` | `any` |  |
| `total_count` | `number` |  |
| `updatedAt` | `any` |  |
| `url` | `string` |  |
| `userId` | `string` |  |

#### Example: Load

```lua
local product, err = client:Product():load({ id = "product_id" })
```

#### Example: List

```lua
local products, err = client:Product():list()
```

#### Example: Create

```lua
local product, err = client:Product():create({
  product_details = {}, -- table
  product_url = "example_product_url", -- string
})
```


### ProductDashboard

Create an instance: `local product_dashboard = client:ProductDashboard(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agents` | `table` |  |
| `date` | `string` |  |
| `pagination` | `table` |  |
| `phone_admin_error` | `any` |  |
| `products` | `table` |  |
| `selected_product` | `any` |  |
| `summary` | `table` |  |

#### Example: List

```lua
local product_dashboards, err = client:ProductDashboard():list()
```


### ProductDashboardView

Create an instance: `local product_dashboard_view = client:ProductDashboardView(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` |  |
| `views` | `number` |  |

#### Example: List

```lua
local product_dashboard_views, err = client:ProductDashboardView():list({ product_id = "example" })
```


### ProductDemo

Create an instance: `local product_demo = client:ProductDemo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `source` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |

#### Example: List

```lua
local product_demos, err = client:ProductDemo():list()
```


### ProductLanding

Create an instance: `local product_landing = client:ProductLanding(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bio` | `any` |  |
| `commentingOnMyPosts` | `boolean` |  |
| `commentingOnOthersPosts` | `boolean` |  |
| `ctaButtonText` | `any` |  |
| `ctaDescription` | `any` |  |
| `ctaLink` | `any` |  |
| `ctaTitle` | `any` |  |
| `dmCommenters` | `boolean` |  |
| `dmInitialMessagePrompt` | `any` |  |
| `dmOngoingResponsePrompt` | `any` |  |
| `firstCommentTextBeforeLink` | `any` |  |
| `headerImageUrl` | `any` |  |
| `id` | `string` |  |
| `landingHtmlUrl` | `any` |  |
| `landingLastGeneratedAt` | `any` |  |
| `landingReferenceScreenshotUrl` | `any` |  |
| `landingScreenshotUrl` | `any` |  |
| `landingStatus` | `string` |  |
| `landingUrl` | `string` |  |
| `linkInBioType` | `string` |  |
| `linkInDmsType` | `string` |  |
| `linkInPostsType` | `string` |  |
| `links` | `any` |  |
| `microhubBio` | `any` |  |
| `microhubCtaButtonText` | `any` |  |
| `microhubCtaDescription` | `any` |  |
| `microhubCtaLink` | `any` |  |
| `microhubCtaTitle` | `any` |  |
| `microhubHeaderImageUrl` | `any` |  |
| `microhubLinks` | `table` |  |
| `microhubName` | `any` |  |
| `microhubProfileImageUrl` | `any` |  |
| `microhubScreenshotUrl` | `any` |  |
| `microhubSocialLinks` | `table` |  |
| `microhubStatus` | `string` |  |
| `microhubTestimonials` | `table` |  |
| `microhubUrl` | `string` |  |
| `myPostsStylePrompt` | `any` |  |
| `name` | `string` |  |
| `othersStylePrompt` | `any` |  |
| `othersTargetMarketPrompt` | `any` |  |
| `productLinkSelection` | `string` |  |
| `productUrl` | `any` |  |
| `profileImageUrl` | `any` |  |
| `shortLink` | `any` |  |
| `shortLinkKeyword` | `any` |  |
| `showLinkInFirstComment` | `boolean` |  |
| `slug` | `string` |  |
| `socialLinks` | `any` |  |
| `testimonials` | `any` |  |

#### Example: List

```lua
local product_landings, err = client:ProductLanding():list()
```


### PublicResumeStatus

Create an instance: `local public_resume_status = client:PublicResumeStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `can_resume_prelogin` | `boolean` |  |
| `content_collection_ready` | `boolean` |  |
| `current_step` | `any` |  |
| `exists` | `boolean` |  |
| `flow_variant` | `any` |  |
| `repost_content_count` | `number` |  |
| `repost_source` | `any` |  |
| `requires_repost_content` | `boolean` |  |
| `skip_demo` | `boolean` |  |

#### Example: Load

```lua
local public_resume_status, err = client:PublicResumeStatus():load({ oid = "oid" })
```


### ReRollVideo

Create an instance: `local re_roll_video = client:ReRollVideo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `queue_id` | `string` |  |
| `requires_polling` | `boolean` |  |
| `skip_credit_check` | `boolean` |  |
| `video` | `table` |  |

#### Example: Create

```lua
local re_roll_video, err = client:ReRollVideo():create({
  queue_id = "example_queue_id", -- string
})
```


### ReadRootGet

Create an instance: `local read_root_get = client:ReadRootGet(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local read_root_get, err = client:ReadRootGet():load()
```


### RecordDemoBooked

Create an instance: `local record_demo_booked = client:RecordDemoBooked(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `calendlyEventUri` | `any` |  |
| `calendlyInviteeUri` | `any` |  |
| `message` | `table` |  |
| `session` | `table` |  |

#### Example: Create

```lua
local record_demo_booked, err = client:RecordDemoBooked():create({
  session_id = "example_session_id", -- string
})
```


### RefreshStat

Create an instance: `local refresh_stat = client:RefreshStat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date_from` | `any` | Start date to refresh stats for (defaults to yesterday) |
| `date_to` | `any` | End date to refresh stats for (defaults to date_from) |
| `entries_found` | `number` |  |
| `message` | `string` |  |
| `provider` | `string` | Scraping provider to use |
| `status` | `string` |  |
| `summary` | `any` |  |

#### Example: Create

```lua
local refresh_stat, err = client:RefreshStat():create({
})
```


### RemixerClipper

Create an instance: `local remixer_clipper = client:RemixerClipper(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local remixer_clipper, err = client:RemixerClipper():load()
```

#### Example: Create

```lua
local remixer_clipper, err = client:RemixerClipper():create({
  identifier = "example_identifier", -- string
})
```


### ResetProduct

Create an instance: `local reset_product = client:ResetProduct(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local reset_product, err = client:ResetProduct():load()
```

#### Example: Create

```lua
local reset_product, err = client:ResetProduct():create({
})
```


### RetryWebsiteScrape

Create an instance: `local retry_website_scrape = client:RetryWebsiteScrape(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `flow_variant` | `string` |  |
| `onboarding_data_id` | `string` | UUID of existing OnboardingData |
| `skip_demo` | `boolean` |  |
| `status` | `string` |  |
| `success` | `boolean` |  |
| `url` | `string` | New website URL to scrape |

#### Example: Create

```lua
local retry_website_scrape, err = client:RetryWebsiteScrape():create({
  onboarding_data_id = "example_onboarding_data_id", -- string
  url = "example_url", -- string
})
```


### SaveSurvey

Create an instance: `local save_survey = client:SaveSurvey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email_sent` | `boolean` |  |
| `onboarding_data_id` | `string` | UUID of the OnboardingData record |
| `success` | `boolean` |  |
| `survey` | `table` | Survey response data from frontend. |

#### Example: Create

```lua
local save_survey, err = client:SaveSurvey():create({
  onboarding_data_id = "example_onboarding_data_id", -- string
  survey = {}, -- table
})
```


### ScanSocial

Create an instance: `local scan_social = client:ScanSocial(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `instagram_handle` | `any` |  |
| `onboarding_data_id` | `string` |  |
| `product_id` | `string` |  |
| `status` | `string` |  |
| `success` | `boolean` |  |
| `task_id` | `string` |  |
| `tiktok_handle` | `any` |  |

#### Example: Create

```lua
local scan_social, err = client:ScanSocial():create({
  onboarding_data_id = "example_onboarding_data_id", -- string
  tiktok_handle = "example_tiktok_handle", -- any
})
```


### ScanSocialsPublic

Create an instance: `local scan_socials_public = client:ScanSocialsPublic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `instagram_handle` | `any` | Instagram username/handle to scrape |
| `message` | `any` |  |
| `onboarding_data_id` | `string` | UUID of the OnboardingData record |
| `status` | `string` |  |
| `success` | `boolean` |  |
| `tiktok_handle` | `any` | TikTok username/handle to scrape |

#### Example: Create

```lua
local scan_socials_public, err = client:ScanSocialsPublic():create({
  onboarding_data_id = "example_onboarding_data_id", -- string
})
```


### ScanSocialsStatus

Create an instance: `local scan_socials_status = client:ScanSocialsStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ads_count` | `number` |  |
| `onboarding_data_id` | `string` |  |
| `product_id` | `string` |  |
| `status` | `string` |  |
| `task_id` | `string` |  |

#### Example: Load

```lua
local scan_socials_status, err = client:ScanSocialsStatus():load()
```


### ScheduleV2

Create an instance: `local schedule_v2 = client:ScheduleV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent` | `any` |  |
| `comment` | `any` |  |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `instagram_posted_by` | `any` |  |
| `instagram_posted_url` | `any` |  |
| `instagram_scraped_social_post_id` | `string` |  |
| `is_instagram_posted` | `boolean` |  |
| `is_tiktok_posted` | `boolean` |  |
| `is_youtube_posted` | `boolean` |  |
| `reorders` | `table` |  |
| `results` | `any` |  |
| `scheduled_datetime` | `string` |  |
| `source_type` | `string` |  |
| `status` | `string` |  |
| `tiktok_posted_by` | `any` |  |
| `tiktok_posted_url` | `any` |  |
| `tiktok_scraped_social_post_id` | `string` |  |
| `video` | `any` |  |
| `video_id` | `string` |  |
| `youtube_posted_by` | `any` |  |
| `youtube_posted_url` | `any` |  |
| `youtube_scraped_social_post_id` | `string` |  |

#### Example: Load

```lua
local schedule_v2, err = client:ScheduleV2():load()
```

#### Example: List

```lua
local schedule_v2s, err = client:ScheduleV2():list()
```

#### Example: Create

```lua
local schedule_v2, err = client:ScheduleV2():create({
  created_at = "example_created_at", -- string
  id = "example_id", -- string
  reorders = {}, -- table
  scheduled_datetime = "example_scheduled_datetime", -- string
  source_type = "example_source_type", -- string
  status = "example_status", -- string
  video_id = "example_video_id", -- string
})
```


### Scrape

Create an instance: `local scrape = client:Scrape(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `old_product_id` | `string` |  |
| `onboarding_data_id` | `string` |  |
| `status` | `string` |  |
| `success` | `boolean` |  |
| `url` | `string` |  |

#### Example: Create

```lua
local scrape, err = client:Scrape():create({
  old_product_id = "example_old_product_id", -- string
  url = "example_url", -- string
})
```


### ScrapeWebsitePublic

Create an instance: `local scrape_website_public = client:ScrapeWebsitePublic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `flow_variant` | `string` |  |
| `onboarding_data_id` | `string` | UUID of created OnboardingData |
| `skip_demo` | `boolean` | True for self-serve users (skip demo booking) |
| `status` | `string` |  |
| `success` | `boolean` |  |
| `url` | `string` | Website URL to scrape |

#### Example: Create

```lua
local scrape_website_public, err = client:ScrapeWebsitePublic():create({
  url = "example_url", -- string
})
```


### ScrapedData

Create an instance: `local scraped_data = client:ScrapedData(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `homepageVideoUrl` | `any` |  |
| `howItWorks` | `string` |  |
| `imageUrls` | `table` |  |
| `instagram_username` | `any` |  |
| `mediaAssets` | `table` |  |
| `name` | `string` |  |
| `pricingAndOffers` | `string` |  |
| `targetAudience` | `string` |  |
| `url` | `string` |  |

#### Example: Create

```lua
local scraped_data, err = client:ScrapedData():create({
  url = "example_url", -- string
})
```


### ScrapingStatus

Create an instance: `local scraping_status = client:ScrapingStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local scraping_status, err = client:ScrapingStatus():load()
```


### SelfServeActivate

Create an instance: `local self_serve_activate = client:SelfServeActivate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `onboarding_data_id` | `string` | UUID of the OnboardingData record |
| `redirect_to_stripe` | `boolean` |  |
| `stripe_checkout_url` | `any` |  |
| `success` | `boolean` |  |

#### Example: Create

```lua
local self_serve_activate, err = client:SelfServeActivate():create({
  onboarding_data_id = "example_onboarding_data_id", -- string
})
```


### Seo

Create an instance: `local seo = client:Seo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local seo, err = client:Seo():load()
```


### SeoAiMention

Create an instance: `local seo_ai_mention = client:SeoAiMention(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bucket` | `string` |  |
| `domain_type` | `string` |  |
| `dominant_domain` | `string` |  |
| `engine` | `string` |  |
| `evidence` | `table` |  |
| `geo` | `string` |  |
| `language` | `string` |  |
| `primary_url` | `string` |  |
| `prompt_text` | `string` |  |
| `run_week` | `string` |  |
| `secondary_urls` | `table` |  |

#### Example: List

```lua
local seo_ai_mentions, err = client:SeoAiMention():list()
```


### SeoBacklink

Create an instance: `local seo_backlink = client:SeoBacklink(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anchor_text` | `string` |  |
| `first_seen` | `string` |  |
| `referring_domain` | `string` |  |
| `status` | `string` |  |
| `target_page` | `string` |  |

#### Example: List

```lua
local seo_backlinks, err = client:SeoBacklink():list()
```


### SeoKeyword

Create an instance: `local seo_keyword = client:SeoKeyword(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blog_page` | `string` |  |
| `current_position` | `number` |  |
| `keyword` | `string` |  |
| `keyword_group` | `string` |  |
| `position_change` | `number` |  |

#### Example: List

```lua
local seo_keywords, err = client:SeoKeyword():list()
```


### SeoOverview

Create an instance: `local seo_overview = client:SeoOverview(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `clicks` | `number` |  |
| `ctr` | `number` |  |
| `date` | `string` |  |
| `impressions` | `number` |  |
| `position` | `number` |  |

#### Example: List

```lua
local seo_overviews, err = client:SeoOverview():list()
```


### SeoTraffic

Create an instance: `local seo_traffic = client:SeoTraffic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `end_date` | `string` |  |
| `series` | `table` |  |
| `site_url` | `string` |  |
| `start_date` | `string` |  |
| `top_countries` | `table` |  |
| `top_pages` | `table` |  |
| `top_queries` | `table` |  |
| `totals` | `table` |  |

#### Example: List

```lua
local seo_traffics, err = client:SeoTraffic():list()
```


### ShareAccessLink

Create an instance: `local share_access_link = client:ShareAccessLink(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `share_token` | `string` |  |
| `share_url` | `string` |  |

#### Example: Create

```lua
local share_access_link, err = client:ShareAccessLink():create({
  share_token = "example_share_token", -- string
  share_url = "example_share_url", -- string
})
```


### Site

Create an instance: `local site = client:Site(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local site, err = client:Site():load()
```


### Slide

Create an instance: `local slide = client:Slide(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `caption` | `any` |  |
| `id` | `string` |  |
| `prompt` | `any` |  |

#### Example: Create

```lua
local slide, err = client:Slide():create({
  carousel_id = "example_carousel_id", -- string
  slide_index = 1, -- number
})
```


### SlugValidation

Create an instance: `local slug_validation = client:SlugValidation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `reason` | `any` |  |
| `valid` | `boolean` |  |

#### Example: Load

```lua
local slug_validation, err = client:SlugValidation():load({ slug = "slug" })
```


### Social

Create an instance: `local social = client:Social(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | `string` |  |
| `code_verifier` | `string` |  |
| `createdAt` | `string` |  |
| `id` | `string` |  |
| `platform` | `string` |  |
| `platformUserId` | `string` |  |
| `updatedAt` | `any` |  |
| `userId` | `string` |  |
| `username` | `string` |  |

#### Example: Load

```lua
local social, err = client:Social():load()
```

#### Example: List

```lua
local socials, err = client:Social():list()
```

#### Example: Create

```lua
local social, err = client:Social():create({
  code = "example_code", -- string
  code_verifier = "example_code_verifier", -- string
})
```


### SocialScanPreview

Create an instance: `local social_scan_preview = client:SocialScanPreview(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `instagram_handle` | `any` | Instagram username/handle to scrape |
| `posts` | `table` |  |
| `success` | `boolean` |  |
| `tiktok_handle` | `any` | TikTok username/handle to scrape |

#### Example: Create

```lua
local social_scan_preview, err = client:SocialScanPreview():create({
})
```


### SocialScanProcess

Create an instance: `local social_scan_process = client:SocialScanProcess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `posts` | `table` |  |
| `product_id` | `string` |  |
| `success` | `boolean` |  |
| `task_id` | `string` |  |

#### Example: Create

```lua
local social_scan_process, err = client:SocialScanProcess():create({
  posts = {}, -- table
  product_id = "example_product_id", -- string
})
```


### SocialScanSave

Create an instance: `local social_scan_save = client:SocialScanSave(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `media_asset_ids` | `table` |  |
| `posts` | `table` |  |
| `product_id` | `string` |  |
| `success` | `boolean` |  |

#### Example: Create

```lua
local social_scan_save, err = client:SocialScanSave():create({
  posts = {}, -- table
  product_id = "example_product_id", -- string
})
```


### Sora2Avatar

Create an instance: `local sora2_avatar = client:Sora2Avatar(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_frame_url` | `any` |  |
| `created_at` | `string` |  |
| `current_step` | `number` |  |
| `headshot_url` | `any` |  |
| `id` | `string` |  |
| `logs` | `table` |  |
| `prompt_key` | `string` |  |
| `run_output_dir` | `any` |  |
| `selected_age_bucket` | `string` |  |
| `selected_gender` | `string` |  |
| `selected_prompt` | `any` |  |
| `selected_race` | `string` |  |
| `sora2_cameo_handle` | `any` |  |
| `sora2_cameo_id` | `string` |  |
| `sora2_cameo_link` | `any` |  |
| `sora2_display_name` | `any` |  |
| `sora2_task_id` | `string` |  |
| `sora2_video_url` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local sora2_avatar, err = client:Sora2Avatar():load({ id = "sora2_avatar_id" })
```

#### Example: List

```lua
local sora2_avatars, err = client:Sora2Avatar():list()
```

#### Example: Create

```lua
local sora2_avatar, err = client:Sora2Avatar():create({
  prompt_key = "example_prompt_key", -- string
  selected_age_bucket = "example_selected_age_bucket", -- string
  selected_gender = "example_selected_gender", -- string
  selected_race = "example_selected_race", -- string
  sora2_video_url = "example_sora2_video_url", -- string
})
```


### Sora2AvatarAssetUpload

Create an instance: `local sora2_avatar_asset_upload = client:Sora2AvatarAssetUpload(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_id` | `string` |  |
| `file` | `string` |  |
| `run_output_dir` | `any` |  |
| `s3_key` | `string` |  |
| `upload_type` | `string` |  |
| `url` | `string` |  |

#### Example: Create

```lua
local sora2_avatar_asset_upload, err = client:Sora2AvatarAssetUpload():create({
  file = "example_file", -- string
  s3_key = "example_s3_key", -- string
  upload_type = "example_upload_type", -- string
  url = "example_url", -- string
})
```


### Sora2AvatarStat

Create an instance: `local sora2_avatar_stat = client:Sora2AvatarStat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `by_age_bucket` | `table` |  |
| `by_gender` | `table` |  |
| `by_prompt_key` | `table` |  |
| `by_race` | `table` |  |
| `completed_avatars` | `number` |  |
| `completion_rate` | `number` |  |
| `total_avatars` | `number` |  |

#### Example: Load

```lua
local sora2_avatar_stat, err = client:Sora2AvatarStat():load()
```


### Stat

Create an instance: `local stat = client:Stat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```lua
local stats, err = client:Stat():list()
```


### StatsRefreshBackfill

Create an instance: `local stats_refresh_backfill = client:StatsRefreshBackfill(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `message` | `string` |  |
| `status` | `string` |  |
| `task_id` | `string` |  |

#### Example: Create

```lua
local stats_refresh_backfill, err = client:StatsRefreshBackfill():create({
})
```


### StatsRefreshIssue

Create an instance: `local stats_refresh_issue = client:StatsRefreshIssue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aged_over_24h` | `boolean` |  |
| `agent_id` | `string` |  |
| `agent_name_snapshot` | `any` |  |
| `first_detected_at` | `string` |  |
| `id` | `string` |  |
| `last_detected_at` | `string` |  |
| `last_refresh_completed_at` | `any` |  |
| `last_seen_run_id` | `string` |  |
| `latest_error_message` | `any` |  |
| `next_retry_at` | `any` |  |
| `platform` | `string` |  |
| `post_method` | `any` |  |
| `post_url` | `any` |  |
| `posted_date_et` | `string` |  |
| `product_id` | `string` |  |
| `product_name_snapshot` | `any` |  |
| `reason_code` | `string` |  |
| `resolved_at` | `any` |  |
| `retry_count` | `number` |  |
| `schedule_queue_id` | `string` |  |
| `scheduled_datetime_utc` | `string` |  |
| `stale_after_sla` | `boolean` |  |
| `status` | `string` |  |
| `user_email_snapshot` | `string` |  |
| `user_id` | `string` |  |

#### Example: List

```lua
local stats_refresh_issues, err = client:StatsRefreshIssue():list()
```


### StatsRefreshOverview

Create an instance: `local stats_refresh_overview = client:StatsRefreshOverview(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_run` | `any` |  |
| `aged_over_24h` | `number` |  |
| `backlog_preview` | `table` |  |
| `coverage_percent` | `number` |  |
| `customer_counts` | `table` |  |
| `date` | `string` |  |
| `generated_at` | `string` |  |
| `method_counts` | `table` |  |
| `platform_counts` | `table` |  |
| `platform_units_resolved` | `number` |  |
| `platform_units_total` | `number` |  |
| `platform_units_unresolved` | `number` |  |
| `posted_entries` | `number` |  |
| `reason_counts` | `table` |  |
| `sla_deadline_et` | `string` |  |
| `stale_after_sla` | `number` |  |
| `top_affected_customers` | `table` |  |

#### Example: List

```lua
local stats_refresh_overviews, err = client:StatsRefreshOverview():list()
```


### StatsRefreshRunSummary

Create an instance: `local stats_refresh_run_summary = client:StatsRefreshRunSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `celery_task_id` | `string` |  |
| `completed_at` | `any` |  |
| `entries_failed` | `number` |  |
| `entries_skipped` | `number` |  |
| `entries_total` | `number` |  |
| `entries_updated` | `number` |  |
| `error_summary_json` | `any` |  |
| `id` | `string` |  |
| `issues_opened` | `number` |  |
| `issues_resolved` | `number` |  |
| `platform_units_resolved` | `number` |  |
| `platform_units_total` | `number` |  |
| `platform_units_unresolved` | `number` |  |
| `platform_updates_via_profile` | `number` |  |
| `platform_updates_via_url` | `number` |  |
| `provider` | `any` |  |
| `refresh_trigger` | `any` |  |
| `requested_by_email` | `any` |  |
| `run_type` | `string` |  |
| `started_at` | `string` |  |
| `status` | `string` |  |
| `target_date_et` | `any` |  |
| `users_count` | `number` |  |

#### Example: List

```lua
local stats_refresh_run_summarys, err = client:StatsRefreshRunSummary():list()
```


### StatsRefreshTaskTrigger

Create an instance: `local stats_refresh_task_trigger = client:StatsRefreshTaskTrigger(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `message` | `string` |  |
| `status` | `string` |  |
| `target_date` | `string` |  |
| `task_id` | `string` |  |
| `users_count` | `number` |  |

#### Example: Create

```lua
local stats_refresh_task_trigger, err = client:StatsRefreshTaskTrigger():create({
  message = "example_message", -- string
  status = "example_status", -- string
  target_date = "example_target_date", -- string
  task_id = "example_task_id", -- string
})
```


### Stripe

Create an instance: `local stripe = client:Stripe(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |


### Style

Create an instance: `local style = client:Style(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local style, err = client:Style():load()
```


### Template

Create an instance: `local template = client:Template(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local template, err = client:Template():load()
```


### TikTokCreatorInfo

Create an instance: `local tik_tok_creator_info = client:TikTokCreatorInfo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commentDisabled` | `boolean` |  |
| `creatorAvatarUrl` | `any` |  |
| `creatorNickname` | `any` |  |
| `creatorUsername` | `any` |  |
| `duetDisabled` | `boolean` |  |
| `maxVideoPostDurationSec` | `number` |  |
| `privacyLevelOptions` | `table` |  |
| `stitchDisabled` | `boolean` |  |

#### Example: List

```lua
local tik_tok_creator_infos, err = client:TikTokCreatorInfo():list()
```


### TopPost

Create an instance: `local top_post = client:TopPost(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comments` | `number` |  |
| `id` | `string` |  |
| `likes` | `number` |  |
| `platforms` | `table` |  |
| `scheduled_datetime` | `string` |  |
| `user_email` | `string` |  |
| `user_id` | `string` |  |
| `views` | `number` |  |

#### Example: List

```lua
local top_posts, err = client:TopPost():list({ date = "example" })
```


### UploadPostAgent

Create an instance: `local upload_post_agent = client:UploadPostAgent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local upload_post_agent, err = client:UploadPostAgent():create({
})
```


### User

Create an instance: `local user = client:User(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountType` | `any` |  |
| `activatedByAdminAt` | `any` |  |
| `activatedByAdminId` | `any` |  |
| `agents` | `table` |  |
| `agentsCount` | `any` |  |
| `attribution` | `any` |  |
| `avatarImageUrl` | `any` |  |
| `avatarVoiceUrl` | `any` |  |
| `createdAt` | `string` |  |
| `credits` | `number` |  |
| `email` | `string` |  |
| `googleId` | `any` |  |
| `hasSeenScheduleWelcome` | `boolean` |  |
| `id` | `string` |  |
| `industry` | `any` |  |
| `instagramId` | `any` |  |
| `isActivatedByAdmin` | `boolean` |  |
| `isAdmin` | `boolean` |  |
| `isInternalUser` | `any` |  |
| `isMigrated` | `any` |  |
| `isResettingProduct` | `any` |  |
| `membership` | `any` |  |
| `name` | `string` |  |
| `partnerDirectLoginDisabled` | `boolean` |  |
| `partnerExternalUserId` | `any` |  |
| `partnerPolicyCode` | `any` |  |
| `partnerSource` | `any` |  |
| `picture` | `any` |  |
| `stripeCustomerId` | `any` |  |
| `stripeSubscriptionId` | `any` |  |
| `subscriptionCurrentPeriodEnd` | `any` |  |
| `subscriptionStatus` | `any` |  |
| `totalCount` | `number` |  |
| `updatedAt` | `string` |  |
| `userId` | `string` |  |

#### Example: Load

```lua
local user, err = client:User():load({ id = "user_id" })
```


### UserAgent

Create an instance: `local user_agent = client:UserAgent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent` | `table` |  |
| `assigned_at` | `string` |  |
| `assignment_id` | `string` |  |
| `expires_at` | `any` |  |
| `id` | `string` |  |
| `status` | `string` |  |

#### Example: List

```lua
local user_agents, err = client:UserAgent():list({ id = "example" })
```

#### Example: Create

```lua
local user_agent, err = client:UserAgent():create({
  id = "example_id", -- string
  agent = {}, -- table
  assigned_at = "example_assigned_at", -- string
  assignment_id = "example_assignment_id", -- string
  status = "example_status", -- string
})
```


### UserHealthDetail

Create an instance: `local user_health_detail = client:UserHealthDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `any` |  |
| `activated` | `boolean` |  |
| `activated_by_admin_at` | `any` |  |
| `activated_by_admin_id` | `string` |  |
| `admin_notes` | `any` |  |
| `agents_count` | `number` |  |
| `assigned_agents` | `table` |  |
| `assigned_agents_count` | `number` |  |
| `assigned_agents_preview_limit` | `number` |  |
| `assigned_agents_truncated` | `boolean` |  |
| `auto_schedule_enabled` | `boolean` |  |
| `comments_expected_per_day` | `number` |  |
| `comments_fix_block_reason` | `any` |  |
| `comments_fix_ready` | `boolean` |  |
| `comments_today_failed` | `number` |  |
| `comments_today_posted` | `number` |  |
| `comments_today_scheduled` | `number` |  |
| `comments_yesterday_failed` | `number` |  |
| `comments_yesterday_posted` | `number` |  |
| `comments_yesterday_total` | `number` |  |
| `created_at` | `string` |  |
| `credits` | `number` |  |
| `effective_posted_video_reuse_percent` | `number` |  |
| `email` | `string` |  |
| `expected_agents_count` | `number` |  |
| `id` | `string` |  |
| `is_activated_by_admin` | `boolean` |  |
| `is_admin` | `boolean` |  |
| `is_bookmarked` | `boolean` |  |
| `is_internal_user` | `boolean` |  |
| `is_migrated` | `boolean` |  |
| `landing_slug` | `any` |  |
| `landing_status` | `any` |  |
| `landing_url` | `any` |  |
| `membership` | `any` |  |
| `microhub_status` | `any` |  |
| `microhub_url` | `any` |  |
| `name` | `string` |  |
| `onboarding_flow` | `string` |  |
| `posted_video_reuse_percent` | `any` |  |
| `product_id` | `string` |  |
| `product_name` | `any` |  |
| `product_url` | `any` |  |
| `subscription_status` | `any` |  |
| `survey_data` | `any` |  |
| `today_failed` | `number` |  |
| `today_posted` | `number` |  |
| `today_scheduled` | `number` |  |
| `tomorrow_capacity` | `number` |  |
| `tomorrow_scheduled` | `number` |  |
| `videos_completed` | `number` |  |
| `videos_failed` | `number` |  |
| `videos_pending` | `number` |  |
| `videos_stale` | `number` |  |
| `videos_total` | `number` |  |
| `yesterday_failed` | `number` |  |
| `yesterday_failed_entries` | `table` |  |
| `yesterday_posted` | `number` |  |
| `yesterday_total` | `number` |  |

#### Example: List

```lua
local user_health_details, err = client:UserHealthDetail():list({ id = "example" })
```


### UserWithAvatarSubmission

Create an instance: `local user_with_avatar_submission = client:UserWithAvatarSubmission(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_image_url` | `string` |  |
| `avatar_voice_url` | `string` |  |
| `created_at` | `string` |  |
| `email` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |

#### Example: List

```lua
local user_with_avatar_submissions, err = client:UserWithAvatarSubmission():list()
```


### UsersHealth

Create an instance: `local users_health = client:UsersHealth(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `any` |  |
| `admin_notes` | `any` |  |
| `agents_count` | `number` |  |
| `agents_health` | `string` |  |
| `agents_issue` | `any` |  |
| `assigned_agents_count` | `number` |  |
| `auto_schedule_enabled` | `boolean` |  |
| `auto_schedule_health` | `string` |  |
| `auto_schedule_issue` | `any` |  |
| `auto_schedule_today_health` | `string` |  |
| `auto_schedule_today_issue` | `any` |  |
| `created_at` | `string` |  |
| `email` | `string` |  |
| `expected_agents_count` | `number` |  |
| `id` | `string` |  |
| `is_bookmarked` | `boolean` |  |
| `is_internal_user` | `boolean` |  |
| `is_migrated` | `boolean` |  |
| `membership` | `any` |  |
| `name` | `string` |  |
| `posts_health` | `string` |  |
| `posts_issue` | `any` |  |
| `posts_today_health` | `string` |  |
| `posts_today_issue` | `any` |  |
| `subscription_status` | `any` |  |
| `today_expected_count` | `number` |  |
| `today_failed_count` | `number` |  |
| `today_scheduled_count` | `number` |  |
| `today_total_count` | `number` |  |
| `tomorrow_expected_count` | `number` |  |
| `tomorrow_scheduled_count` | `number` |  |
| `yesterday_failed_count` | `number` |  |
| `yesterday_total_count` | `number` |  |

#### Example: List

```lua
local users_healths, err = client:UsersHealth():list()
```


### Video

Create an instance: `local video = client:Video(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `string` |  |
| `bookmarked` | `any` |  |
| `captions` | `any` |  |
| `carousel_data` | `any` |  |
| `created_at` | `string` |  |
| `duration` | `number` |  |
| `generation_status` | `any` |  |
| `id` | `string` |  |
| `image_prompt` | `any` |  |
| `is_onboarding` | `boolean` |  |
| `is_template` | `boolean` |  |
| `main_avatar` | `any` |  |
| `main_prompt` | `any` |  |
| `media_asset_id` | `string` |  |
| `product_id` | `string` |  |
| `reel_id` | `string` |  |
| `thumbnail_url` | `any` |  |
| `title` | `string` |  |
| `type` | `any` |  |
| `updated_at` | `any` |  |
| `url` | `string` |  |
| `user_id` | `string` |  |
| `video_id` | `string` |  |

#### Example: Load

```lua
local video, err = client:Video():load({ id = "video_id" })
```

#### Example: Create

```lua
local video, err = client:Video():create({
  captions = "example_captions", -- any
  title = "example_title", -- string
  url = "example_url", -- string
  video_id = "example_video_id", -- string
})
```


### VideoRemixerWorker

Create an instance: `local video_remixer_worker = client:VideoRemixerWorker(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `captions_ass` | `string` |  |
| `captions_vtt` | `string` |  |
| `cost_usd` | `number` |  |
| `error` | `string` |  |
| `file` | `string` |  |
| `kinds` | `table` |  |
| `lease_token` | `string` |  |
| `limit` | `number` |  |
| `manifest` | `string` |  |
| `model` | `string` |  |
| `processing_seconds` | `number` |  |
| `prompt_version` | `string` |  |
| `result` | `table` |  |
| `thumbnail` | `string` |  |
| `tier` | `string` |  |
| `worker_id` | `string` |  |

#### Example: Create

```lua
local video_remixer_worker, err = client:VideoRemixerWorker():create({
  error = "example_error", -- string
  file = "example_file", -- string
  lease_token = "example_lease_token", -- string
  manifest = "example_manifest", -- string
  model = "example_model", -- string
  prompt_version = "example_prompt_version", -- string
  thumbnail = "example_thumbnail", -- string
  worker_id = "example_worker_id", -- string
})
```


### WatchdogRecovery

Create an instance: `local watchdog_recovery = client:WatchdogRecovery(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `item_id` | `string` |  |
| `passed` | `boolean` |  |
| `table` | `string` |  |

#### Example: Load

```lua
local watchdog_recovery, err = client:WatchdogRecovery():load()
```

#### Example: Create

```lua
local watchdog_recovery, err = client:WatchdogRecovery():create({
  item_id = "example_item_id", -- string
  passed = true, -- boolean
  table = "example_table", -- string
})
```


### WinningAd

Create an instance: `local winning_ad = client:WinningAd(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `source` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |

#### Example: List

```lua
local winning_ads, err = client:WinningAd():list()
```


### XAdaptation

Create an instance: `local x_adaptation = client:XAdaptation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local x_adaptation, err = client:XAdaptation():load()
```


### ZerohumanAdminAccount

Create an instance: `local zerohuman_admin_account = client:ZerohumanAdminAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_mode` | `string` |  |
| `active_queue_count` | `number` |  |
| `assigned_agent` | `any` |  |
| `created_at` | `any` |  |
| `email` | `string` |  |
| `external_user_id` | `string` |  |
| `membership` | `any` |  |
| `policy_code` | `any` |  |
| `product_id` | `string` |  |
| `product_name` | `any` |  |
| `provisioning_status` | `string` |  |
| `subscription_status` | `any` |  |
| `updated_at` | `any` |  |
| `user_id` | `string` |  |

#### Example: List

```lua
local zerohuman_admin_accounts, err = client:ZerohumanAdminAccount():list()
```

## Features

This SDK ships 4 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`ratelimit`](#ratelimit) | Rate limiting |
| [`retry`](#retry) | Retry |
| [`test`](#test) | Test transport |
| [`timeout`](#timeout) | Timeout |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### ratelimit

Rate limiting.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Retry.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Timeout.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Open types

1 field is carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes it with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `healthrx` | `dimensions` | 3 | 1 level |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── cracked-api-reference_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── schema.lua               -- Generated option + entity specs
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`cracked-api-reference_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```lua
local admininsight = client:AdminInsight()
admininsight:list()

-- admininsight:data_get() now returns the admininsight data from the last list
-- admininsight:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
