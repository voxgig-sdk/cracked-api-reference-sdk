# CrackedApiReference Ruby SDK



The Ruby SDK for the CrackedApiReference API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Activate` — with named operations (`list`/`load`/`create`/`update`/`patch`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`, see [Tags](https://github.com/voxgig-sdk/cracked-api-reference-sdk/tags)), or
from a clone:

```bash
git clone https://github.com/voxgig-sdk/cracked-api-reference-sdk
```

Then add it to your `Gemfile` by path, and run `bundle install`:

```ruby
gem "voxgig-sdk-cracked-api-reference-sdk", path: "./cracked-api-reference-sdk/rb"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "CrackedApiReference_sdk"

client = CrackedApiReferenceSDK.new({
  "apikey" => ENV["CRACKED_API_REFERENCE_APIKEY"],
})
```

### 3. Load an admin

Admin is nested under date, so provide the `date`.

```ruby
begin
  # load returns the ENTITY — call data_get for the Admin record (raises on error).
  admin = client.Admin.load({ "date" => "example_date" })
  puts admin.data_get
rescue => err
  warn "load failed: #{err}"
end
```

### 4. Create, update, and remove

```ruby
# create returns the ENTITY — call data_get for the created Activate record.
created = client.Activate.create({ "user_id" => "example_user_id", "message" => "example_message", "success" => true })

```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  admininsights = client.AdminInsight.list()
rescue => err
  warn "list failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required:

```ruby
client = CrackedApiReferenceSDK.test

# list returns an Array of AdminInsight entities, one per mock record (raises on
# error); data_get reads each record.
admininsights = client.AdminInsight.list()
admininsights.each { |item| puts item.data_get }
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = CrackedApiReferenceSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
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
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### CrackedApiReferenceSDK

```ruby
require_relative "CrackedApiReference_sdk"
client = CrackedApiReferenceSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = CrackedApiReferenceSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CrackedApiReferenceSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
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
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria, and return it. Raises on error. |
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all), one per record. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity, and return it. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity, and return it. Raises on error. |
| `patch` | `(reqdata, ctrl) -> any` | Change part of an existing entity, and return it. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity, and return it marked as deleted. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the entity, and `list` an `Array` of entities, one
per record; an entity's `data_get` reads its record. On failure they raise a
`CrackedApiReferenceError` (a `StandardError` subclass), so wrap calls in
`begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

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

Create an instance: `activate = client.Activate`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activated_at` | `Object` |  |
| `message` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Create

```ruby
activate = client.Activate.create({
  "user_id" => "example_user_id", # String
  "message" => "example_message", # String
  "success" => true, # Boolean
})
```


### ActivateUser

Create an instance: `activate_user = client.ActivateUser`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activated_at` | `Object` |  |
| `message` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Create

```ruby
activate_user = client.ActivateUser.create({
  "user_id" => "example_user_id", # String
  "message" => "example_message", # String
  "success" => true, # Boolean
})
```


### ActiveOnboarding

Create an instance: `active_onboarding = client.ActiveOnboarding`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_step` | `Object` |  |
| `has_active_onboarding` | `Boolean` |  |
| `onboarding_data_id` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ActiveOnboarding record (raises on error).
active_onboarding = client.ActiveOnboarding.load()
```


### Admin

Create an instance: `admin = client.Admin`

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
| `apply` | `Boolean` | Apply safe canonical or clean-only URL updates |
| `count` | `Integer` |  |
| `created_at` | `String` |  |
| `date_from` | `Object` |  |
| `date_to` | `Object` |  |
| `email` | `String` |  |
| `id` | `String` |  |
| `include_failed` | `Boolean` |  |
| `include_pending` | `Boolean` |  |
| `include_records` | `Boolean` | Include full per-field audit records in the response |
| `issue_ids` | `Object` |  |
| `only_active` | `Boolean` | Limit the audit to active agents |
| `platform` | `Object` |  |
| `posting_method` | `Object` |  |
| `product_id` | `String` |  |
| `query` | `Object` |  |
| `reason` | `Object` |  |
| `regenerate` | `Boolean` |  |
| `status` | `String` |  |
| `user_membership` | `Object` |  |
| `user_name` | `Object` |  |
| `user_onboarding_step` | `Object` |  |
| `video_type` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Admin record (raises on error).
admin = client.Admin.load({ "date" => "date" })
```

#### Example: List

```ruby
# list returns an Array of Admin entities, one per record (raises on error).
admins = client.Admin.list
admins.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
admin = client.Admin.create({
  "user_id" => "example_user_id", # String
  "count" => 1, # Integer
  "created_at" => "example_created_at", # String
  "date_from" => "example_date_from", # Object
  "date_to" => "example_date_to", # Object
  "email" => "example_email", # String
  "id" => "example_id", # String
  "product_id" => "example_product_id", # String
  "video_type" => "example_video_type", # String
})
```


### AdminAccountReset

Create an instance: `admin_account_reset = client.AdminAccountReset`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_ids` | `Array` |  |
| `agent_ids_sha256` | `String` |  |
| `backup_sha256` | `String` |  |
| `batch_size` | `Integer` |  |
| `confirmation` | `String` |  |
| `customer_email` | `String` |  |
| `pc_name` | `String` |  |
| `phase` | `String` |  |
| `product_id` | `String` |  |
| `video_ids` | `Array` |  |

#### Example: Create

```ruby
admin_account_reset = client.AdminAccountReset.create({
  "agent_ids" => [], # Array
  "agent_ids_sha256" => "example_agent_ids_sha256", # String
  "backup_sha256" => "example_backup_sha256", # String
  "confirmation" => "example_confirmation", # String
  "customer_email" => "example_customer_email", # String
  "pc_name" => "example_pc_name", # String
  "product_id" => "example_product_id", # String
})
```


### AdminCarousel

Create an instance: `admin_carousel = client.AdminCarousel`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `String` |  |
| `batch_id` | `String` |  |
| `caption` | `String` |  |
| `content_base64` | `String` |  |
| `day` | `Object` |  |
| `dry_run` | `Boolean` |  |
| `engine_run` | `String` |  |
| `expected_revision` | `String` |  |
| `formula` | `Hash` |  |
| `formula_id` | `String` |  |
| `prompt` | `String` |  |
| `slides` | `Array` |  |
| `title` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AdminCarousel record (raises on error).
admin_carousel = client.AdminCarousel.load({ "batch_id" => "batch_id" })
```

#### Example: Create

```ruby
admin_carousel = client.AdminCarousel.create({
  "stage" => "example_stage", # String
  "agent_id" => "example_agent_id", # String
  "batch_id" => "example_batch_id", # String
  "caption" => "example_caption", # String
  "day" => "example_day", # Object
  "expected_revision" => "example_expected_revision", # String
  "formula" => {}, # Hash
  "formula_id" => "example_formula_id", # String
  "prompt" => "example_prompt", # String
  "slides" => [], # Array
  "title" => "example_title", # String
})
```


### AdminCarouselDemoReview

Create an instance: `admin_carousel_demo_review = client.AdminCarouselDemoReview`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |
| `items` | `Array` |  |
| `reason` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AdminCarouselDemoReview record (raises on error).
admin_carousel_demo_review = client.AdminCarouselDemoReview.load({ "id" => "admin_carousel_demo_review_id" })
```

#### Example: Create

```ruby
admin_carousel_demo_review = client.AdminCarouselDemoReview.create({
  "items" => [], # Array
})
```


### AdminCustomer

Create an instance: `admin_customer = client.AdminCustomer`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `Object` |  |
| `active_vireel_agents` | `Integer` |  |
| `agents` | `Array` |  |
| `billing_source` | `String` |  |
| `contracted_agents` | `Object` |  |
| `email` | `String` |  |
| `membership` | `Object` |  |
| `name` | `String` |  |
| `pfa_only_agents` | `Integer` |  |
| `severity` | `String` |  |
| `status` | `String` |  |
| `subscription_status` | `Object` |  |
| `user_id` | `String` |  |

#### Example: List

```ruby
# list returns an Array of AdminCustomer entities, one per record (raises on error).
admin_customers = client.AdminCustomer.list
admin_customers.each { |item| puts item.data_get }
```


### AdminCustomerSuccess

Create an instance: `admin_customer_success = client.AdminCustomerSuccess`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_agents` | `Integer` |  |
| `active_products` | `Integer` |  |
| `agents_count` | `Integer` |  |
| `auto_schedule_status` | `String` |  |
| `days_until_period_end` | `Object` |  |
| `email` | `String` |  |
| `feature_impact` | `String` |  |
| `last_notification_at` | `Object` |  |
| `membership` | `Object` |  |
| `name` | `String` |  |
| `notification_count` | `Integer` |  |
| `notification_events` | `Array` |  |
| `priority` | `String` |  |
| `severity` | `String` |  |
| `status_label` | `String` |  |
| `subscription_current_period_end` | `Object` |  |
| `subscription_status` | `Object` |  |
| `upcoming_posts` | `Integer` |  |
| `user_id` | `String` |  |

#### Example: List

```ruby
# list returns an Array of AdminCustomerSuccess entities, one per record (raises on error).
admin_customer_successs = client.AdminCustomerSuccess.list
admin_customer_successs.each { |item| puts item.data_get }
```


### AdminGeneratedVideo

Create an instance: `admin_generated_video = client.AdminGeneratedVideo`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `String` |  |
| `agent_name` | `Object` |  |
| `created_at` | `String` |  |
| `duration` | `Float` |  |
| `generation_status` | `Hash` |  |
| `id` | `String` |  |
| `product_id` | `String` |  |
| `thumbnail_url` | `Object` |  |
| `title` | `String` |  |
| `type` | `String` |  |
| `updated_at` | `Object` |  |
| `url` | `String` |  |

#### Example: List

```ruby
# list returns an Array of AdminGeneratedVideo entities, one per record (raises on error).
admin_generated_videos = client.AdminGeneratedVideo.list({ "user_id" => "example" })
admin_generated_videos.each { |item| puts item.data_get }
```


### AdminHealthrx

Create an instance: `admin_healthrx = client.AdminHealthrx`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `String` |  |
| `delivery_enabled` | `Boolean` |  |
| `id` | `String` |  |
| `option_id` | `String` |  |
| `plan` | `Hash` |  |
| `preparation_enabled` | `Boolean` |  |
| `product_id` | `String` |  |
| `reason` | `String` |  |
| `request_key` | `String` |  |
| `revision` | `Integer` |  |
| `schedule_enabled` | `Boolean` |  |
| `version` | `String` |  |
| `viewed` | `Boolean` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AdminHealthrx record (raises on error).
admin_healthrx = client.AdminHealthrx.load({ "item_id" => "item_id", "kind" => "kind" })
```

#### Example: Create

```ruby
admin_healthrx = client.AdminHealthrx.create({
  "action" => "example_action", # String
  "option_id" => "example_option_id", # String
  "plan" => {}, # Hash
  "product_id" => "example_product_id", # String
  "reason" => "example_reason", # String
  "request_key" => "example_request_key", # String
  "version" => "example_version", # String
  "viewed" => true, # Boolean
})
```


### AdminInsight

Create an instance: `admin_insight = client.AdminInsight`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `customer_success_cases` | `Array` |  |
| `customers` | `Array` |  |
| `generated_at` | `String` |  |
| `pfa_database` | `Hash` |  |
| `recent_signups` | `Array` |  |
| `summary` | `Hash` |  |
| `vireel_database` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AdminInsight record (raises on error).
admin_insight = client.AdminInsight.load()
```

#### Example: List

```ruby
# list returns an Array of AdminInsight entities, one per record (raises on error).
admin_insights = client.AdminInsight.list
admin_insights.each { |item| puts item.data_get }
```


### AdminLandingTask

Create an instance: `admin_landing_task = client.AdminLandingTask`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `task_id` | `String` |  |

#### Example: Create

```ruby
admin_landing_task = client.AdminLandingTask.create({
  "user_id" => "example_user_id", # String
  "task_id" => "example_task_id", # String
})
```


### AdminMetricsSummary

Create an instance: `admin_metrics_summary = client.AdminMetricsSummary`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `paid_users_by_level` | `Array` |  |
| `total_cancellations` | `Integer` |  |
| `total_previews_generated` | `Integer` |  |
| `total_signups` | `Integer` |  |
| `total_videos_generated` | `Integer` |  |
| `url_attempts` | `Integer` |  |
| `user_credits` | `Array` |  |
| `user_gifted_credits` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of AdminMetricsSummary entities, one per record (raises on error).
admin_metrics_summarys = client.AdminMetricsSummary.list
admin_metrics_summarys.each { |item| puts item.data_get }
```


### AdminPost

Create an instance: `admin_post = client.AdminPost`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `admin_job_ids` | `Object` |  |
| `agent_id` | `String` |  |
| `agent_name` | `Object` |  |
| `agent_platform_urls` | `Object` |  |
| `agent_url` | `Object` |  |
| `comments` | `Integer` |  |
| `error_message` | `Object` |  |
| `failed_at` | `Object` |  |
| `id` | `String` |  |
| `instagram_posted_by` | `Object` |  |
| `instagram_posted_url` | `Object` |  |
| `instagram_scraped_social_post_id` | `String` |  |
| `is_instagram_posted` | `Boolean` |  |
| `is_tiktok_posted` | `Boolean` |  |
| `is_youtube_posted` | `Boolean` |  |
| `last_refreshed_at` | `Object` |  |
| `likes` | `Integer` |  |
| `platform_post_methods` | `Object` |  |
| `platform_urls` | `Object` |  |
| `post_method` | `Object` |  |
| `post_platforms` | `Object` |  |
| `post_url` | `Object` |  |
| `posted_at` | `Object` |  |
| `product_id` | `String` |  |
| `results_status` | `Object` |  |
| `scheduled_datetime` | `String` |  |
| `source_type` | `String` |  |
| `status` | `String` |  |
| `tiktok_posted_by` | `Object` |  |
| `tiktok_posted_url` | `Object` |  |
| `tiktok_scraped_social_post_id` | `String` |  |
| `upload_post_error` | `Object` |  |
| `upload_post_status` | `Object` |  |
| `upload_post_uploads` | `Object` |  |
| `user_email` | `String` |  |
| `user_id` | `String` |  |
| `user_name` | `Object` |  |
| `video_id` | `String` |  |
| `video_url` | `Object` |  |
| `views` | `Integer` |  |
| `youtube_posted_by` | `Object` |  |
| `youtube_posted_url` | `Object` |  |
| `youtube_scraped_social_post_id` | `String` |  |

#### Example: List

```ruby
# list returns an Array of AdminPost entities, one per record (raises on error).
admin_posts = client.AdminPost.list
admin_posts.each { |item| puts item.data_get }
```


### AdminRecentSignup

Create an instance: `admin_recent_signup = client.AdminRecentSignup`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `current_step` | `String` |  |
| `email` | `String` |  |
| `email_source` | `Object` |  |
| `error_message` | `Object` |  |
| `flow_variant` | `String` |  |
| `id` | `String` |  |
| `inactive_minutes` | `Integer` |  |
| `last_notification_at` | `Object` |  |
| `last_seen_at` | `String` |  |
| `likely_cause` | `String` |  |
| `notification_count` | `Integer` |  |
| `notification_events` | `Array` |  |
| `product_id` | `String` |  |
| `product_name` | `Object` |  |
| `product_url` | `String` |  |
| `severity` | `String` |  |
| `social_scan_status` | `Object` |  |
| `stage_label` | `String` |  |
| `status` | `String` |  |
| `updated_at` | `Object` |  |
| `website_scrape_status` | `Object` |  |

#### Example: List

```ruby
# list returns an Array of AdminRecentSignup entities, one per record (raises on error).
admin_recent_signups = client.AdminRecentSignup.list
admin_recent_signups.each { |item| puts item.data_get }
```


### AdminSlideshowDiag

Create an instance: `admin_slideshow_diag = client.AdminSlideshowDiag`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `String` |  |
| `batch_id` | `String` |  |
| `caption` | `String` |  |
| `content_base64` | `String` |  |
| `day` | `Object` |  |
| `formula_id` | `String` |  |
| `id` | `String` |  |
| `title` | `String` |  |

#### Example: Create

```ruby
admin_slideshow_diag = client.AdminSlideshowDiag.create({
  "id" => "example_id", # String
})
```


### AdminSlideshowImport

Create an instance: `admin_slideshow_import = client.AdminSlideshowImport`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `String` |  |
| `batch_id` | `String` |  |
| `caption` | `String` |  |
| `day` | `String` |  |
| `dry_run` | `Boolean` |  |
| `engine_run` | `String` |  |
| `formula_id` | `String` |  |
| `slides` | `Array` |  |
| `title` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AdminSlideshowImport record (raises on error).
admin_slideshow_import = client.AdminSlideshowImport.load({ "batch_id" => "batch_id" })
```

#### Example: Create

```ruby
admin_slideshow_import = client.AdminSlideshowImport.create({
  "agent_id" => "example_agent_id", # String
  "batch_id" => "example_batch_id", # String
  "caption" => "example_caption", # String
  "day" => "example_day", # String
  "formula_id" => "example_formula_id", # String
  "slides" => [], # Array
  "title" => "example_title", # String
})
```


### AdminUserView

Create an instance: `admin_user_view = client.AdminUserView`

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
| `account_type` | `Object` |  |
| `admin_notes` | `Object` |  |
| `agents_count` | `Integer` |  |
| `created_at` | `String` |  |
| `credits` | `Integer` |  |
| `email` | `String` |  |
| `id` | `String` |  |
| `industry` | `Object` |  |
| `is_admin` | `Boolean` |  |
| `is_bookmarked` | `Boolean` |  |
| `is_internal_user` | `Boolean` |  |
| `membership` | `Object` |  |
| `name` | `String` |  |
| `new_email` | `String` |  |
| `partner_external_user_id` | `String` |  |
| `partner_policy_code` | `Object` |  |
| `partner_source` | `Object` |  |
| `product_name` | `Object` |  |
| `product_url` | `Object` |  |
| `skip` | `Boolean` |  |
| `subscription_details` | `Object` |  |
| `subscription_status` | `Object` |  |

#### Example: List

```ruby
# list returns an Array of AdminUserView entities, one per record (raises on error).
admin_user_views = client.AdminUserView.list
admin_user_views.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
admin_user_view = client.AdminUserView.create({
  "user_id" => "example_user_id", # String
  "created_at" => "example_created_at", # String
  "credits" => 1, # Integer
  "email" => "example_email", # String
  "id" => "example_id", # String
  "industry" => "example_industry", # Object
  "membership" => "example_membership", # Object
  "name" => "example_name", # String
  "new_email" => "example_new_email", # String
  "product_name" => "example_product_name", # Object
  "product_url" => "example_product_url", # Object
  "skip" => true, # Boolean
  "subscription_status" => "example_subscription_status", # Object
})
```


### AdminUsersTableItem

Create an instance: `admin_users_table_item = client.AdminUsersTableItem`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activated` | `Boolean` |  |
| `agents_count` | `Integer` |  |
| `created_at` | `String` |  |
| `credits` | `Integer` |  |
| `demo_booked` | `Boolean` |  |
| `email` | `String` |  |
| `id` | `String` |  |
| `membership` | `Object` |  |
| `name` | `String` |  |
| `onboarding_flow` | `String` |  |
| `product_name` | `Object` |  |
| `product_url` | `Object` |  |
| `survey_data` | `Object` |  |

#### Example: List

```ruby
# list returns an Array of AdminUsersTableItem entities, one per record (raises on error).
admin_users_table_items = client.AdminUsersTableItem.list
admin_users_table_items.each { |item| puts item.data_get }
```


### AdminVideoRemixer

Create an instance: `admin_video_remixer = client.AdminVideoRemixer`

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
| `activity` | `String` |  |
| `allowed_platforms` | `Array` |  |
| `anchor_clip_id` | `String` |  |
| `atomicity_class` | `Object` |  |
| `auto_render` | `Boolean` |  |
| `campaign_allowed` | `Boolean` |  |
| `channel` | `String` |  |
| `channel_default` | `String` |  |
| `clip_id` | `String` |  |
| `clip_ids` | `Array` |  |
| `collected_at` | `String` |  |
| `comments` | `Object` |  |
| `completion_rate` | `Object` |  |
| `confirmed_duplicate_of` | `Object` |  |
| `consent_doc_uri` | `String` |  |
| `contact` | `String` |  |
| `conversions` | `Object` |  |
| `count` | `Integer` |  |
| `creator` | `String` |  |
| `creator_id` | `String` |  |
| `crop_window` | `Object` |  |
| `cta_product_id` | `String` |  |
| `days` | `Integer` |  |
| `derivative_edits_allowed` | `Boolean` |  |
| `enabled` | `Boolean` |  |
| `end_ms` | `Object` |  |
| `enqueue` | `Boolean` |  |
| `errors` | `Array` |  |
| `evidence` | `String` |  |
| `expected_revision` | `Object` |  |
| `expected_revisions` | `Hash` |  |
| `external_ai_allowed` | `Boolean` |  |
| `file` | `String` |  |
| `followers` | `Object` |  |
| `formula_id` | `String` |  |
| `formula_ids` | `Array` |  |
| `handles` | `Hash` |  |
| `hook_subtype` | `Object` |  |
| `hour_utc` | `Integer` |  |
| `human_role` | `String` |  |
| `idempotency_key` | `String` |  |
| `items` | `Array` |  |
| `kim_clip_ids` | `Array` |  |
| `kind` | `String` |  |
| `levels` | `Hash` |  |
| `likes` | `Object` |  |
| `media_enabled` | `Boolean` |  |
| `medical_claim_present` | `Boolean` |  |
| `minute_utc` | `Integer` |  |
| `music_bed_allowed` | `Boolean` |  |
| `music_policy` | `String` |  |
| `name` | `String` |  |
| `niche` | `String` |  |
| `notes` | `String` |  |
| `origin` | `String` |  |
| `owner_waiver` | `Boolean` |  |
| `paid_ads_allowed` | `Boolean` |  |
| `patient_identifiable` | `Boolean` |  |
| `person_type` | `String` |  |
| `pipeline` | `Boolean` |  |
| `planning_only` | `Boolean` |  |
| `platform` | `String` |  |
| `platform_post_id` | `String` |  |
| `policy` | `Hash` |  |
| `polish` | `String` |  |
| `post_url` | `String` |  |
| `posted_at` | `String` |  |
| `primary_role` | `Object` |  |
| `purpose` | `String` |  |
| `rate` | `Float` |  |
| `rationale` | `String` |  |
| `reason` | `String` |  |
| `reference_source_id` | `String` |  |
| `requires_medical_review` | `Boolean` |  |
| `review_status` | `Object` |  |
| `revision` | `Integer` |  |
| `rights_expires_at` | `Object` |  |
| `rights_status` | `String` |  |
| `run_id` | `String` |  |
| `sample_links` | `Array` |  |
| `secondary_roles` | `Object` |  |
| `seconds` | `Integer` |  |
| `seed` | `Integer` |  |
| `seed_base` | `Integer` |  |
| `sensitive_personal_data_present` | `Boolean` |  |
| `shares` | `Object` |  |
| `shoot` | `String` |  |
| `slots` | `Array` |  |
| `soundbite_title` | `Object` |  |
| `source` | `String` |  |
| `source_id` | `String` |  |
| `source_ids` | `Array` |  |
| `spend_usd` | `Object` |  |
| `spiciness` | `Object` |  |
| `spiciness_notes` | `String` |  |
| `start_ms` | `Object` |  |
| `status` | `String` |  |
| `terry_clip_ids` | `Array` |  |
| `testimonial_strength` | `Object` |  |
| `testimonial_type` | `Object` |  |
| `tier` | `String` |  |
| `timeline` | `Hash` |  |
| `topic` | `String` |  |
| `topic_tags` | `Object` |  |
| `total_target_ms` | `Integer` |  |
| `use_learned_weights` | `Boolean` |  |
| `views` | `Object` |  |
| `window` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AdminVideoRemixer record (raises on error).
admin_video_remixer = client.AdminVideoRemixer.load({ "clip_id" => "clip_id" })
```

#### Example: Create

```ruby
admin_video_remixer = client.AdminVideoRemixer.create({
  "activity" => "example_activity", # String
  "clip_id" => "example_clip_id", # String
  "collected_at" => "example_collected_at", # String
  "evidence" => "example_evidence", # String
  "expected_revisions" => {}, # Hash
  "file" => "example_file", # String
  "formula_id" => "example_formula_id", # String
  "formula_ids" => [], # Array
  "human_role" => "example_human_role", # String
  "idempotency_key" => "example_idempotency_key", # String
  "items" => [], # Array
  "kim_clip_ids" => [], # Array
  "kind" => "example_kind", # String
  "levels" => {}, # Hash
  "media_enabled" => true, # Boolean
  "name" => "example_name", # String
  "platform" => "example_platform", # String
  "platform_post_id" => "example_platform_post_id", # String
  "policy" => {}, # Hash
  "post_url" => "example_post_url", # String
  "posted_at" => "example_posted_at", # String
  "purpose" => "example_purpose", # String
  "reason" => "example_reason", # String
  "revision" => 1, # Integer
  "run_id" => "example_run_id", # String
  "seconds" => 1, # Integer
  "slots" => [], # Array
  "source" => "example_source", # String
  "source_id" => "example_source_id", # String
  "source_ids" => [], # Array
  "terry_clip_ids" => [], # Array
  "timeline" => {}, # Hash
  "total_target_ms" => 1, # Integer
  "window" => "example_window", # String
})
```


### AdvanceStep

Create an instance: `advance_step = client.AdvanceStep`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_step` | `String` |  |
| `onboarding_data_id` | `String` | UUID of the OnboardingData record |
| `success` | `Boolean` |  |
| `to_step` | `String` | Target step name |

#### Example: Create

```ruby
advance_step = client.AdvanceStep.create({
  "onboarding_data_id" => "example_onboarding_data_id", # String
  "to_step" => "example_to_step", # String
})
```


### Agent

Create an instance: `agent = client.Agent`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_connections` | `Integer` |  |
| `at_capacity` | `Boolean` |  |
| `id` | `String` |  |
| `is_active` | `Boolean` |  |
| `name` | `String` |  |
| `tiktok_stats` | `Object` |  |
| `type` | `String` |  |

#### Example: List

```ruby
# list returns an Array of Agent entities, one per record (raises on error).
agents = client.Agent.list
agents.each { |item| puts item.data_get }
```


### AgentAccessCustomersHealth

Create an instance: `agent_access_customers_health = client.AgentAccessCustomersHealth`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountType` | `Object` |  |
| `agentQuota` | `Integer` |  |
| `assignedAgentsByType` | `Hash` |  |
| `assignedAgentsTotal` | `Integer` |  |
| `createdAt` | `String` |  |
| `email` | `String` |  |
| `isInternalUser` | `Object` |  |
| `membership` | `Object` |  |
| `name` | `String` |  |
| `performance` | `Hash` |  |
| `productCount` | `Integer` |  |
| `subscriptionCurrentPeriodEnd` | `Object` |  |
| `subscriptionDetails` | `Object` |  |
| `subscriptionStatus` | `Object` |  |
| `usage` | `Hash` |  |
| `userId` | `String` |  |

#### Example: List

```ruby
# list returns an Array of AgentAccessCustomersHealth entities, one per record (raises on error).
agent_access_customers_healths = client.AgentAccessCustomersHealth.list
agent_access_customers_healths.each { |item| puts item.data_get }
```


### AgentAccessOverview

Create an instance: `agent_access_overview = client.AgentAccessOverview`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeUsers` | `Integer` |  |
| `generatedAt` | `String` |  |
| `newUsersYesterday` | `Integer` |  |
| `onboardingContextCounts` | `Hash` |  |
| `onboardingCurrentStepCounts` | `Hash` |  |
| `onboardingCurrentStepWindow` | `Hash` |  |
| `onboardingFlowVariantCounts` | `Hash` |  |
| `onboardingLockedUntilActivation` | `Integer` |  |
| `onboardingRecordsTotal` | `Integer` |  |
| `onboardingRecordsWindow` | `Integer` |  |
| `onboardingSocialScanStatusCounts` | `Hash` |  |
| `onboardingWebsiteScrapeStatusCounts` | `Hash` |  |
| `subscriptionStatusCounts` | `Hash` |  |
| `totalInternalUsers` | `Integer` |  |
| `totalUsers` | `Integer` |  |
| `trialStartedYesterday` | `Integer` |  |
| `trialingUsers` | `Integer` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AgentAccessOverview record (raises on error).
agent_access_overview = client.AgentAccessOverview.load()
```


### AgentAccessPhilHourlyNotification

Create an instance: `agent_access_phil_hourly_notification = client.AgentAccessPhilHourlyNotification`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `generatedAt` | `String` |  |
| `phoneHealth` | `Hash` |  |
| `scheduledPosts` | `Hash` |  |
| `targetDate` | `String` |  |
| `uploadPostInstagramHealth` | `Hash` |  |
| `uploadPostTiktokHealth` | `Hash` |  |
| `uploadPostYoutubeHealth` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AgentAccessPhilHourlyNotification record (raises on error).
agent_access_phil_hourly_notification = client.AgentAccessPhilHourlyNotification.load()
```


### AgentAccessPhilStatsRefresh

Create an instance: `agent_access_phil_stats_refresh = client.AgentAccessPhilStatsRefresh`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `generatedAt` | `String` |  |
| `statsRefresh` | `Hash` |  |
| `targetDate` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AgentAccessPhilStatsRefresh record (raises on error).
agent_access_phil_stats_refresh = client.AgentAccessPhilStatsRefresh.load()
```


### AgentAccessPhilVideo

Create an instance: `agent_access_phil_video = client.AgentAccessPhilVideo`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `generatedAt` | `String` |  |
| `targetDate` | `String` |  |
| `videos` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AgentAccessPhilVideo record (raises on error).
agent_access_phil_video = client.AgentAccessPhilVideo.load()
```


### AgentAccessUserAgent

Create an instance: `agent_access_user_agent = client.AgentAccessUserAgent`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentQuota` | `Integer` |  |
| `agents` | `Array` |  |
| `assignedByType` | `Hash` |  |
| `assignedTotal` | `Integer` |  |
| `email` | `String` |  |
| `products` | `Array` |  |
| `userId` | `String` |  |

#### Example: List

```ruby
# list returns an Array of AgentAccessUserAgent entities, one per record (raises on error).
agent_access_user_agents = client.AgentAccessUserAgent.list({ "email" => "example" })
agent_access_user_agents.each { |item| puts item.data_get }
```


### AgentAccessUserPhoneFarm

Create an instance: `agent_access_user_phone_farm = client.AgentAccessUserPhoneFarm`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar` | `Object` |  |
| `facebookUrl` | `Object` |  |
| `id` | `String` |  |
| `instagramUrl` | `Object` |  |
| `lastAdminSyncedAt` | `Object` |  |
| `name` | `String` |  |
| `productId` | `Object` |  |
| `productName` | `Object` |  |
| `tiktokUrl` | `Object` |  |
| `type` | `Object` |  |
| `uploadPostPlatforms` | `Object` |  |
| `youtubeUrl` | `Object` |  |

#### Example: List

```ruby
# list returns an Array of AgentAccessUserPhoneFarm entities, one per record (raises on error).
agent_access_user_phone_farms = client.AgentAccessUserPhoneFarm.list({ "email" => "example" })
agent_access_user_phone_farms.each { |item| puts item.data_get }
```


### AgentAccessUserPost

Create an instance: `agent_access_user_post = client.AgentAccessUserPost`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deltaYesterday` | `Integer` |  |
| `expectedVideosPerDay` | `Integer` |  |
| `postedToday` | `Integer` |  |
| `postedYesterday` | `Integer` |  |
| `productId` | `Object` |  |
| `productName` | `Object` |  |

#### Example: List

```ruby
# list returns an Array of AgentAccessUserPost entities, one per record (raises on error).
agent_access_user_posts = client.AgentAccessUserPost.list({ "email" => "example" })
agent_access_user_posts.each { |item| puts item.data_get }
```


### AgentAccessUserSummary

Create an instance: `agent_access_user_summary = client.AgentAccessUserSummary`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deletedAt` | `Object` |  |
| `id` | `String` |  |
| `isActive` | `Object` |  |
| `name` | `String` |  |
| `url` | `String` |  |

#### Example: List

```ruby
# list returns an Array of AgentAccessUserSummary entities, one per record (raises on error).
agent_access_user_summarys = client.AgentAccessUserSummary.list({ "email" => "example" })
agent_access_user_summarys.each { |item| puts item.data_get }
```


### AgentAccessUserVideo

Create an instance: `agent_access_user_video = client.AgentAccessUserVideo`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allTime` | `Hash` |  |
| `email` | `String` |  |
| `today` | `Hash` |  |
| `userId` | `String` |  |
| `yesterday` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AgentAccessUserVideo record (raises on error).
agent_access_user_video = client.AgentAccessUserVideo.load({ "email" => "email" })
```


### AgentAccessUserWinningAd

Create an instance: `agent_access_user_winning_ad = client.AgentAccessUserWinningAd`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `productId` | `String` |  |
| `productName` | `String` |  |
| `winningAds` | `Array` |  |
| `winningAdsCount` | `Integer` |  |

#### Example: List

```ruby
# list returns an Array of AgentAccessUserWinningAd entities, one per record (raises on error).
agent_access_user_winning_ads = client.AgentAccessUserWinningAd.list({ "email" => "example" })
agent_access_user_winning_ads.each { |item| puts item.data_get }
```


### AgentAccessWinningAdsSummary

Create an instance: `agent_access_winning_ads_summary = client.AgentAccessWinningAdsSummary`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `String` |  |
| `name` | `String` |  |
| `productCount` | `Integer` |  |
| `productsWithWinningAds` | `Integer` |  |
| `subscriptionStatus` | `Object` |  |
| `totalWinningAds` | `Integer` |  |
| `userId` | `String` |  |

#### Example: List

```ruby
# list returns an Array of AgentAccessWinningAdsSummary entities, one per record (raises on error).
agent_access_winning_ads_summarys = client.AgentAccessWinningAdsSummary.list
agent_access_winning_ads_summarys.each { |item| puts item.data_get }
```


### AgentDetail

Create an instance: `agent_detail = client.AgentDetail`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeConnections` | `Object` |  |
| `assignedAt` | `Object` |  |
| `avatar` | `String` |  |
| `bio` | `Object` |  |
| `facebookUrl` | `Object` |  |
| `id` | `String` |  |
| `instagramUrl` | `Object` |  |
| `isActive` | `Boolean` |  |
| `name` | `String` |  |
| `role` | `Object` |  |
| `tiktokStats` | `Object` |  |
| `tiktokUrl` | `Object` |  |
| `type` | `String` |  |
| `uploadPostPlatforms` | `Object` |  |
| `youtubeUrl` | `Object` |  |

#### Example: List

```ruby
# list returns an Array of AgentDetail entities, one per record (raises on error).
agent_details = client.AgentDetail.list
agent_details.each { |item| puts item.data_get }
```


### AgentHealth

Create an instance: `agent_health = client.AgentHealth`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `daily` | `Array` |  |
| `dates` | `Array` |  |
| `generated_at` | `String` |  |
| `groups` | `Array` |  |
| `latest` | `Hash` |  |
| `live_date` | `Object` |  |
| `phone_admin_generated_at` | `String` |  |
| `platform` | `String` |  |
| `post_target` | `Integer` |  |
| `qa_managed_agent_ids` | `Array` |  |
| `scope_prefixes` | `Array` |  |
| `timezone` | `String` |  |
| `warmup_target` | `Integer` |  |

#### Example: List

```ruby
# list returns an Array of AgentHealth entities, one per record (raises on error).
agent_healths = client.AgentHealth.list
agent_healths.each { |item| puts item.data_get }
```


### AgentHealthCustomerOption

Create an instance: `agent_health_customer_option = client.AgentHealthCustomerOption`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_count` | `Integer` |  |
| `email` | `String` |  |
| `user_id` | `String` |  |

#### Example: List

```ruby
# list returns an Array of AgentHealthCustomerOption entities, one per record (raises on error).
agent_health_customer_options = client.AgentHealthCustomerOption.list
agent_health_customer_options.each { |item| puts item.data_get }
```


### AgentHealthDetail

Create an instance: `agent_health_detail = client.AgentHealthDetail`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived_issue_total` | `Integer` |  |
| `date` | `String` |  |
| `generated_at` | `String` |  |
| `group_id` | `String` |  |
| `has_more` | `Boolean` |  |
| `issue_total` | `Integer` |  |
| `issues` | `Array` |  |
| `limit` | `Integer` |  |
| `metric` | `String` |  |
| `offset` | `Integer` |  |
| `warmup_runs` | `Array` |  |
| `warning_total` | `Integer` |  |
| `warnings` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of AgentHealthDetail entities, one per record (raises on error).
agent_health_details = client.AgentHealthDetail.list({ "date" => "example", "group_id" => "example" })
agent_health_details.each { |item| puts item.data_get }
```


### AgentPost

Create an instance: `agent_post = client.AgentPost`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comments` | `Integer` |  |
| `error_message` | `Object` |  |
| `id` | `String` |  |
| `likes` | `Integer` |  |
| `product_id` | `String` |  |
| `results` | `Object` |  |
| `scheduled_datetime` | `String` |  |
| `source_type` | `String` |  |
| `status` | `String` |  |
| `user_email` | `String` |  |
| `user_id` | `String` |  |
| `user_name` | `Object` |  |
| `video_id` | `String` |  |
| `video_url` | `Object` |  |
| `views` | `Integer` |  |

#### Example: List

```ruby
# list returns an Array of AgentPost entities, one per record (raises on error).
agent_posts = client.AgentPost.list({ "id" => "example" })
agent_posts.each { |item| puts item.data_get }
```


### AgentStat

Create an instance: `agent_stat = client.AgentStat`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agents_needed` | `Integer` |  |
| `dedicated_agents` | `Hash` |  |
| `shared_agents` | `Hash` |  |
| `total_agents` | `Integer` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AgentStat record (raises on error).
agent_stat = client.AgentStat.load()
```


### AgentSummary

Create an instance: `agent_summary = client.AgentSummary`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_count` | `Integer` |  |
| `favicon_url` | `Object` |  |
| `product_id` | `String` |  |
| `product_name` | `String` |  |

#### Example: List

```ruby
# list returns an Array of AgentSummary entities, one per record (raises on error).
agent_summarys = client.AgentSummary.list
agent_summarys.each { |item| puts item.data_get }
```


### AgentsSummary

Create an instance: `agents_summary = client.AgentsSummary`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `total_agents` | `Integer` |  |
| `total_agents_count_sum` | `Integer` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AgentsSummary record (raises on error).
agents_summary = client.AgentsSummary.load()
```


### AnalysisStatus

Create an instance: `analysis_status = client.AnalysisStatus`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AnalysisStatus record (raises on error).
analysis_status = client.AnalysisStatus.load()
```


### AnalyticsPost

Create an instance: `analytics_post = client.AnalyticsPost`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent` | `Object` |  |
| `comment` | `Object` |  |
| `created_at` | `String` |  |
| `id` | `String` |  |
| `product_id` | `String` |  |
| `queue_position` | `Object` |  |
| `results` | `Object` |  |
| `scheduled_datetime` | `String` |  |
| `scraped_posts` | `Object` |  |
| `source_type` | `String` |  |
| `status` | `String` |  |
| `updated_at` | `String` |  |
| `video` | `Object` |  |

#### Example: List

```ruby
# list returns an Array of AnalyticsPost entities, one per record (raises on error).
analytics_posts = client.AnalyticsPost.list({ "date_from" => "example" })
analytics_posts.each { |item| puts item.data_get }
```


### AnalyzeProduct

Create an instance: `analyze_product = client.AnalyzeProduct`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `instagram_username` | `Object` |  |
| `message` | `String` |  |
| `status` | `String` |  |
| `url` | `String` |  |

#### Example: Create

```ruby
analyze_product = client.AnalyzeProduct.create({
  "url" => "example_url", # String
})
```


### AssignAgent

Create an instance: `assign_agent = client.AssignAgent`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent` | `Hash` | Agent information for V6. |
| `assignment` | `Hash` | Assignment information for V6. |
| `mock_agents` | `Array` |  |
| `onboarding_data_id` | `String` | UUID of the OnboardingData record |

#### Example: Create

```ruby
assign_agent = client.AssignAgent.create({
  "onboarding_data_id" => "example_onboarding_data_id", # String
})
```


### Auth

Create an instance: `auth = client.Auth`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |


### AutoScheduleSetting

Create an instance: `auto_schedule_setting = client.AutoScheduleSetting`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `can_enable_repost` | `Boolean` |  |
| `effective_posted_video_reuse_percent` | `Integer` |  |
| `enabled_video_types` | `Object` | List of enabled video type filters |
| `is_enabled` | `Boolean` |  |
| `lock_video_regeneration_controls` | `Boolean` |  |
| `membership_tier` | `String` |  |
| `posted_video_reuse_percent` | `Object` |  |
| `product_id` | `String` |  |
| `repost_source` | `Object` |  |
| `videos_per_day` | `Integer` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AutoScheduleSetting record (raises on error).
auto_schedule_setting = client.AutoScheduleSetting.load()
```


### BulkTikTokStatsUpdate

Create an instance: `bulk_tik_tok_stats_update = client.BulkTikTokStatsUpdate`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `failedIds` | `Array` |  |
| `updatedCount` | `Integer` |  |
| `updates` | `Array` |  |


### Carousel

Create an instance: `carousel = client.Carousel`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `String` |  |
| `agent_name` | `String` |  |
| `audit_created_at` | `Object` |  |
| `audit_snapshot_sha256` | `Object` |  |
| `caption` | `Object` |  |
| `comments` | `Object` |  |
| `fit_score` | `Object` |  |
| `format` | `String` |  |
| `formula` | `Hash` |  |
| `formula_id` | `String` |  |
| `formula_name` | `Object` |  |
| `generation` | `Hash` |  |
| `id` | `String` |  |
| `image_prompt` | `Object` |  |
| `likes` | `Object` |  |
| `main_prompt` | `Object` |  |
| `metrics_updated_at` | `Object` |  |
| `post_url` | `Object` |  |
| `profile_url` | `Object` |  |
| `qa` | `Hash` |  |
| `qa_status` | `String` |  |
| `qa_verdict` | `Object` |  |
| `quality_score` | `Object` |  |
| `queue_id` | `String` |  |
| `relevance_score` | `Object` |  |
| `scheduled_at` | `String` |  |
| `slide_count` | `Integer` |  |
| `slides` | `Array` |  |
| `source` | `Hash` |  |
| `status` | `String` |  |
| `thumbnail_url` | `Object` |  |
| `title` | `String` |  |
| `video_id` | `String` |  |
| `views` | `Object` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Carousel record (raises on error).
carousel = client.Carousel.load({ "id" => "carousel_id" })
```

#### Example: List

```ruby
# list returns an Array of Carousel entities, one per record (raises on error).
carousels = client.Carousel.list
carousels.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
carousel = client.Carousel.create({
  "id" => "example_id", # String
  "agent_id" => "example_agent_id", # String
  "agent_name" => "example_agent_name", # String
  "format" => "example_format", # String
  "qa_status" => "example_qa_status", # String
  "queue_id" => "example_queue_id", # String
  "scheduled_at" => "example_scheduled_at", # String
  "slide_count" => 1, # Integer
  "slides" => [], # Array
  "status" => "example_status", # String
  "title" => "example_title", # String
  "video_id" => "example_video_id", # String
})
```


### CarouselAgentDetail

Create an instance: `carousel_agent_detail = client.CarouselAgentDetail`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `String` |  |
| `agent_name` | `String` |  |
| `connection_status` | `Object` |  |
| `followers` | `Object` |  |
| `following` | `Object` |  |
| `metrics_updated_at` | `Object` |  |
| `phone_admin_status` | `String` |  |
| `profile_likes` | `Object` |  |
| `profile_url` | `Object` |  |
| `warmup_days` | `Object` |  |
| `warmup_hold_until` | `Object` |  |
| `warmup_status` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the CarouselAgentDetail record (raises on error).
carousel_agent_detail = client.CarouselAgentDetail.load({ "agent_id" => "agent_id" })
```


### CarouselStatus

Create an instance: `carousel_status = client.CarouselStatus`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `caption` | `Object` |  |
| `error` | `Object` |  |
| `id` | `String` |  |
| `image_model` | `Object` |  |
| `image_provider` | `Object` |  |
| `image_task_id` | `String` |  |
| `image_url` | `Object` |  |
| `index` | `Integer` |  |
| `prompt` | `Object` |  |
| `status` | `String` |  |

#### Example: List

```ruby
# list returns an Array of CarouselStatus entities, one per record (raises on error).
carousel_statuss = client.CarouselStatus.list({ "id" => "example" })
carousel_statuss.each { |item| puts item.data_get }
```


### Chat

Create an instance: `chat = client.Chat`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `idempotencyKey` | `String` |  |
| `message` | `String` |  |
| `sessionId` | `String` |  |

#### Example: Create

```ruby
chat = client.Chat.create({
  "session_id" => "example_session_id", # String
  "idempotencyKey" => "example_idempotencyKey", # String
  "message" => "example_message", # String
  "sessionId" => "example_sessionId", # String
})
```


### ChatHistory

Create an instance: `chat_history = client.ChatHistory`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `chatSubVariant` | `String` |  |
| `createdAt` | `String` |  |
| `messages` | `Array` |  |
| `model` | `Object` |  |
| `onboardingDataId` | `String` |  |
| `routeRecommendation` | `Object` |  |
| `salesStage` | `String` |  |
| `selectedPlan` | `Object` |  |
| `session` | `Hash` |  |
| `sessionId` | `String` |  |
| `status` | `String` |  |
| `updatedAt` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ChatHistory record (raises on error).
chat_history = client.ChatHistory.load({ "session_id" => "session_id" })
```

#### Example: Create

```ruby
chat_history = client.ChatHistory.create({
  "onboardingDataId" => "example_onboardingDataId", # String
})
```


### ChatSession

Create an instance: `chat_session = client.ChatSession`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `chatSubVariant` | `String` |  |
| `createdAt` | `String` |  |
| `model` | `Object` |  |
| `plan` | `Object` |  |
| `route` | `Object` |  |
| `routeRecommendation` | `Object` |  |
| `salesStage` | `String` |  |
| `selectedPlan` | `Object` |  |
| `sessionId` | `String` |  |
| `status` | `String` |  |
| `updatedAt` | `String` |  |

#### Example: Create

```ruby
chat_session = client.ChatSession.create({
  "session_id" => "example_session_id", # String
})
```


### Comment

Create an instance: `comment = client.Comment`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Comment record (raises on error).
comment = client.Comment.load()
```


### CommentCampaign

Create an instance: `comment_campaign = client.CommentCampaign`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_daily_limit` | `Integer` |  |
| `account_weekly_limit` | `Integer` |  |
| `action` | `String` |  |
| `active_days_per_week` | `Integer` |  |
| `agent_id` | `String` |  |
| `allowlist` | `Array` |  |
| `analysis_daily_limit` | `Integer` |  |
| `analysis_model` | `String` |  |
| `analysis_reservation_usd` | `Float` |  |
| `approved_markets` | `Array` |  |
| `brand_forward_enabled` | `Boolean` |  |
| `briefs` | `Hash` |  |
| `candidate_only` | `Boolean` |  |
| `claims` | `Array` |  |
| `cohort_removal_threshold` | `Integer` |  |
| `daily_cost_ceiling_usd` | `Float` |  |
| `delivery_mode` | `String` |  |
| `disclosure_mode` | `String` |  |
| `disclosure_template` | `String` |  |
| `draft_options_count` | `Integer` |  |
| `draft_review_reservation_usd` | `Float` |  |
| `exceptional_daily_cap_approved` | `Boolean` |  |
| `execution_enabled` | `Boolean` |  |
| `experiment_styles` | `Array` |  |
| `inventory_factor` | `Float` |  |
| `keywords` | `Array` |  |
| `max_duration_seconds` | `Object` |  |
| `metadata_pass_rate` | `Float` |  |
| `min_interval_minutes` | `Integer` |  |
| `mode` | `String` |  |
| `monitored_creators` | `Array` |  |
| `platform` | `String` |  |
| `platform_permission_evidence` | `String` |  |
| `policy_approved_by` | `String` |  |
| `policy_expires_at` | `Object` |  |
| `policy_version` | `String` |  |
| `product_daily_limit` | `Integer` |  |
| `qualification_rate` | `Float` |  |
| `raw_daily_limit` | `Integer` |  |
| `raw_result_reservation_usd` | `Float` |  |
| `reason` | `String` |  |
| `replies_enabled` | `Boolean` |  |
| `request_key` | `String` |  |
| `reviewer_model` | `String` |  |
| `scan_interval_hours` | `Integer` |  |
| `search_change_reason` | `String` |  |
| `search_effective_at` | `Object` |  |
| `shadow_sample_limit` | `Integer` |  |
| `spent_seconds` | `Object` |  |
| `task_ttl_hours` | `Integer` |  |
| `top_comment_analysis_enabled` | `Boolean` |  |
| `writer_model` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the CommentCampaign record (raises on error).
comment_campaign = client.CommentCampaign.load({ "product_id" => "product_id" })
```

#### Example: Create

```ruby
comment_campaign = client.CommentCampaign.create({
  "product_id" => "example_product_id", # String
  "action" => "example_action", # String
  "agent_id" => "example_agent_id", # String
  "reason" => "example_reason", # String
  "request_key" => "example_request_key", # String
})
```


### CompleteChatCheckout

Create an instance: `complete_chat_checkout = client.CompleteChatCheckout`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `message` | `Object` |  |
| `onboarding_data_id` | `String` |  |
| `product_id` | `String` |  |
| `ready` | `Boolean` |  |
| `success` | `Boolean` |  |

#### Example: Create

```ruby
complete_chat_checkout = client.CompleteChatCheckout.create({
  "onboarding_data_id" => "example_onboarding_data_id", # String
})
```


### CreateBlackoutSora2Video

Create an instance: `create_blackout_sora2_video = client.CreateBlackoutSora2Video`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `main_prompt` | `String` |  |
| `media_asset_id` | `String` |  |
| `product_id` | `String` |  |
| `requires_polling` | `Boolean` |  |
| `video` | `Hash` |  |

#### Example: Create

```ruby
create_blackout_sora2_video = client.CreateBlackoutSora2Video.create({
  "main_prompt" => "example_main_prompt", # String
  "media_asset_id" => "example_media_asset_id", # String
  "product_id" => "example_product_id", # String
})
```


### CreateCarousel

Create an instance: `create_carousel = client.CreateCarousel`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `copy_mode` | `Object` |  |
| `expected_owner_user_id` | `String` |  |
| `expected_product_id` | `String` |  |
| `expected_product_name` | `Object` |  |
| `image_model` | `String` |  |
| `mention_product` | `Boolean` |  |
| `message` | `String` |  |
| `num_slides` | `Integer` |  |
| `owner_user_id` | `String` |  |
| `product_id` | `String` | Product ID to use. |
| `product_name` | `Object` |  |
| `product_placement` | `String` |  |
| `request_id` | `String` |  |
| `script_style_custom` | `Object` |  |
| `script_style_id` | `String` |  |
| `selected_hook` | `Object` |  |
| `status` | `String` |  |
| `success` | `Boolean` |  |
| `template_id` | `String` |  |
| `video_id` | `String` |  |
| `visual_style_custom` | `Object` |  |
| `visual_style_id` | `String` |  |

#### Example: Create

```ruby
create_carousel = client.CreateCarousel.create({
  "template_id" => "example_template_id", # String
})
```


### CreateProduct

Create an instance: `create_product = client.CreateProduct`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `onboarding_data_id` | `String` | UUID of the OnboardingData record |
| `product_id` | `String` |  |
| `success` | `Boolean` |  |
| `videos_queued` | `Integer` |  |

#### Example: Create

```ruby
create_product = client.CreateProduct.create({
  "onboarding_data_id" => "example_onboarding_data_id", # String
})
```


### CreateResetProductV6

Create an instance: `create_reset_product_v6 = client.CreateResetProductV6`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agents_transferred` | `Integer` |  |
| `credits_deducted` | `Integer` |  |
| `onboarding_data_id` | `String` |  |
| `product_id` | `String` |  |
| `remaining_credits` | `Integer` |  |
| `success` | `Boolean` |  |
| `videos_queued` | `Integer` |  |

#### Example: Create

```ruby
create_reset_product_v6 = client.CreateResetProductV6.create({
  "onboarding_data_id" => "example_onboarding_data_id", # String
})
```


### CreateSora2Video

Create an instance: `create_sora2_video = client.CreateSora2Video`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `image_prompt` | `Object` |  |
| `main_prompt` | `String` |  |
| `model` | `String` |  |
| `requires_polling` | `Boolean` |  |
| `seconds` | `String` |  |
| `size` | `String` |  |
| `video` | `Hash` |  |

#### Example: Create

```ruby
create_sora2_video = client.CreateSora2Video.create({
  "main_prompt" => "example_main_prompt", # String
})
```


### CreateVariation

Create an instance: `create_variation = client.CreateVariation`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `hook_duration` | `Integer` |  |
| `media_asset_id` | `String` |  |
| `message` | `String` |  |
| `product_id` | `String` |  |
| `prompt` | `String` |  |
| `task_id` | `String` |  |
| `video_id` | `String` |  |

#### Example: Create

```ruby
create_variation = client.CreateVariation.create({
  "hook_duration" => 1, # Integer
  "media_asset_id" => "example_media_asset_id", # String
  "product_id" => "example_product_id", # String
  "prompt" => "example_prompt", # String
})
```


### Customer

Create an instance: `customer = client.Customer`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `Object` |  |
| `assigned_agents_count` | `Integer` |  |
| `email` | `String` |  |
| `id` | `String` |  |
| `is_migrated` | `Boolean` |  |

#### Example: List

```ruby
# list returns an Array of Customer entities, one per record (raises on error).
customers = client.Customer.list
customers.each { |item| puts item.data_get }
```


### CustomerHealth

Create an instance: `customer_health = client.CustomerHealth`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_agents` | `Hash` |  |
| `available_dates` | `Array` |  |
| `date` | `String` |  |
| `email` | `String` |  |
| `entries` | `Array` |  |
| `id` | `String` |  |
| `performance_overview` | `Hash` |  |
| `platform_coverage_summary` | `Hash` |  |
| `user_id` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the CustomerHealth record (raises on error).
customer_health = client.CustomerHealth.load({ "id" => "customer_health_id" })
```


### CustomerHealthAllCustomersItem

Create an instance: `customer_health_all_customers_item = client.CustomerHealthAllCustomersItem`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `Object` |  |
| `assigned_agents_count` | `Integer` |  |
| `daily_stats` | `Array` |  |
| `email` | `String` |  |
| `is_migrated` | `Boolean` |  |
| `total_views` | `Integer` |  |
| `user_id` | `String` |  |

#### Example: List

```ruby
# list returns an Array of CustomerHealthAllCustomersItem entities, one per record (raises on error).
customer_health_all_customers_items = client.CustomerHealthAllCustomersItem.list
customer_health_all_customers_items.each { |item| puts item.data_get }
```


### CustomerHealthViewsSummary

Create an instance: `customer_health_views_summary = client.CustomerHealthViewsSummary`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `average_views_per_result` | `Integer` |  |
| `date` | `String` |  |
| `end_date` | `Object` |  |
| `paid_users_count` | `Integer` |  |
| `posted_results` | `Integer` |  |
| `range` | `String` |  |
| `start_date` | `Object` |  |
| `top_users` | `Array` |  |
| `total_views` | `Integer` |  |
| `trend` | `Array` |  |
| `trend_granularity` | `String` |  |
| `user_email` | `Object` |  |
| `user_id` | `String` |  |
| `users_with_views` | `Integer` |  |

#### Example: List

```ruby
# list returns an Array of CustomerHealthViewsSummary entities, one per record (raises on error).
customer_health_views_summarys = client.CustomerHealthViewsSummary.list
customer_health_views_summarys.each { |item| puts item.data_get }
```


### Daily

Create an instance: `daily = client.Daily`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |

#### Example: Create

```ruby
daily = client.Daily.create({
  "id" => "example_id", # String
  "day" => "example_day", # String
})
```


### DailyStatus

Create an instance: `daily_status = client.DailyStatus`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DailyStatus record (raises on error).
daily_status = client.DailyStatus.load({ "id" => "daily_status_id", "day" => "day" })
```


### DedicatedAgentsDashboard

Create an instance: `dedicated_agents_dashboard = client.DedicatedAgentsDashboard`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_connections` | `Integer` |  |
| `assigned_user_id` | `String` |  |
| `assigned_user_ids` | `Array` |  |
| `bio` | `Object` |  |
| `id` | `String` |  |
| `instagram_url` | `Object` |  |
| `is_active` | `Boolean` |  |
| `last_admin_synced_at` | `Object` |  |
| `name` | `String` |  |
| `role` | `Object` |  |
| `tiktok_stats` | `Object` |  |
| `tiktok_url` | `Object` |  |
| `today_failed_entries` | `Array` |  |
| `today_stats` | `Hash` |  |
| `upload_post_platforms` | `Object` |  |
| `upload_post_profile` | `Object` |  |
| `yesterday_failed_entries` | `Array` |  |
| `yesterday_stats` | `Hash` |  |
| `youtube_url` | `Object` |  |

#### Example: List

```ruby
# list returns an Array of DedicatedAgentsDashboard entities, one per record (raises on error).
dedicated_agents_dashboards = client.DedicatedAgentsDashboard.list
dedicated_agents_dashboards.each { |item| puts item.data_get }
```


### EnterpriseAgent

Create an instance: `enterprise_agent = client.EnterpriseAgent`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `Integer` |  |
| `product_id` | `String` |  |
| `source_product_id` | `String` |  |
| `target_product_id` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the EnterpriseAgent record (raises on error).
enterprise_agent = client.EnterpriseAgent.load()
```

#### Example: Create

```ruby
enterprise_agent = client.EnterpriseAgent.create({
  "product_id" => "example_product_id", # String
  "source_product_id" => "example_source_product_id", # String
  "target_product_id" => "example_target_product_id", # String
})
```


### EnterpriseProduct

Create an instance: `enterprise_product = client.EnterpriseProduct`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the EnterpriseProduct record (raises on error).
enterprise_product = client.EnterpriseProduct.load({ "product_id" => "product_id" })
```


### ExactAvailability

Create an instance: `exact_availability = client.ExactAvailability`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ExactAvailability record (raises on error).
exact_availability = client.ExactAvailability.load()
```


### ExactFormula

Create an instance: `exact_formula = client.ExactFormula`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ExactFormula record (raises on error).
exact_formula = client.ExactFormula.load()
```


### ExtractV2

Create an instance: `extract_v2 = client.ExtractV2`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `instagram_username` | `Object` |  |
| `message` | `String` |  |
| `status` | `String` |  |
| `url` | `String` |  |

#### Example: Create

```ruby
extract_v2 = client.ExtractV2.create({
  "url" => "example_url", # String
})
```


### FailedPost

Create an instance: `failed_post = client.FailedPost`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `String` |  |
| `agent_name` | `Object` |  |
| `agent_platforms` | `Object` |  |
| `error_message` | `Object` |  |
| `id` | `String` |  |
| `product_id` | `String` |  |
| `results` | `Object` |  |
| `scheduled_datetime` | `String` |  |
| `source_type` | `String` |  |
| `status` | `String` |  |
| `user_email` | `String` |  |
| `user_id` | `String` |  |
| `user_name` | `Object` |  |
| `video_id` | `String` |  |
| `video_url` | `Object` |  |

#### Example: List

```ruby
# list returns an Array of FailedPost entities, one per record (raises on error).
failed_posts = client.FailedPost.list
failed_posts.each { |item| puts item.data_get }
```


### File

Create an instance: `file = client.File`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `file` | `String` |  |

#### Example: Create

```ruby
file = client.File.create({
  "file" => "example_file", # String
})
```


### GenerateBlackoutSora2Prompt

Create an instance: `generate_blackout_sora2_prompt = client.GenerateBlackoutSora2Prompt`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `media_asset_id` | `String` |  |
| `product_id` | `String` |  |
| `prompt` | `String` |  |

#### Example: Create

```ruby
generate_blackout_sora2_prompt = client.GenerateBlackoutSora2Prompt.create({
  "media_asset_id" => "example_media_asset_id", # String
  "product_id" => "example_product_id", # String
})
```


### GeneratePomelliDemo

Create an instance: `generate_pomelli_demo = client.GeneratePomelliDemo`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_demo_count` | `Integer` |  |
| `max_demos` | `Integer` |  |
| `message` | `String` |  |
| `product_id` | `String` | UUID of the Product |
| `success` | `Boolean` |  |

#### Example: Create

```ruby
generate_pomelli_demo = client.GeneratePomelliDemo.create({
  "product_id" => "example_product_id", # String
})
```


### GeneratePrompt

Create an instance: `generate_prompt = client.GeneratePrompt`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `hook_duration` | `Integer` |  |
| `media_asset_id` | `String` |  |
| `media_asset_url` | `String` |  |
| `prompt` | `String` |  |

#### Example: Create

```ruby
generate_prompt = client.GeneratePrompt.create({
  "media_asset_id" => "example_media_asset_id", # String
})
```


### GenerateSora2Prompt

Create an instance: `generate_sora2_prompt = client.GenerateSora2Prompt`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `prompt` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the GenerateSora2Prompt record (raises on error).
generate_sora2_prompt = client.GenerateSora2Prompt.load()
```


### Healthrx

Create an instance: `healthrx = client.Healthrx`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `String` |  |
| `action` | `String` |  |
| `agent_id` | `String` |  |
| `attempt` | `Integer` |  |
| `avatar_present` | `Boolean` |  |
| `benchmark_set` | `String` |  |
| `commercial` | `Boolean` |  |
| `commercial_license_evidence` | `String` |  |
| `content_id` | `String` |  |
| `dimensions` | `Hash` |  |
| `duration_seconds` | `Integer` |  |
| `evidence` | `String` |  |
| `evidence_urls` | `Array` |  |
| `external_key` | `String` |  |
| `format` | `String` |  |
| `includes_all_attempt_costs` | `Boolean` |  |
| `input_specification` | `Hash` |  |
| `kind` | `String` |  |
| `level` | `Integer` |  |
| `measured_at` | `String` |  |
| `model_version` | `String` |  |
| `paid_campaign_id` | `String` |  |
| `parent_content_id` | `String` |  |
| `paused` | `Boolean` |  |
| `pillar` | `String` |  |
| `profile` | `Hash` |  |
| `promotion_evidence` | `String` |  |
| `provider` | `String` |  |
| `provider_invoice_evidence` | `String` |  |
| `reason` | `String` |  |
| `reference_version` | `String` |  |
| `request_key` | `String` |  |
| `scope` | `String` |  |
| `test_variable` | `String` |  |
| `topic` | `String` |  |
| `total_cost_usd` | `Float` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Healthrx record (raises on error).
healthrx = client.Healthrx.load({ "product_id" => "product_id" })
```

#### Example: Create

```ruby
healthrx = client.Healthrx.create({
  "product_id" => "example_product_id", # String
  "agent_id" => "example_agent_id", # String
  "attempt" => 1, # Integer
  "benchmark_set" => "example_benchmark_set", # String
  "commercial_license_evidence" => "example_commercial_license_evidence", # String
  "dimensions" => {}, # Hash
  "evidence" => "example_evidence", # String
  "evidence_urls" => [], # Array
  "external_key" => "example_external_key", # String
  "input_specification" => {}, # Hash
  "kind" => "example_kind", # String
  "measured_at" => "example_measured_at", # String
  "model_version" => "example_model_version", # String
  "paused" => true, # Boolean
  "pillar" => "example_pillar", # String
  "profile" => {}, # Hash
  "provider" => "example_provider", # String
  "provider_invoice_evidence" => "example_provider_invoice_evidence", # String
  "reason" => "example_reason", # String
  "reference_version" => "example_reference_version", # String
  "request_key" => "example_request_key", # String
  "test_variable" => "example_test_variable", # String
  "topic" => "example_topic", # String
  "total_cost_usd" => 1, # Float
})
```


### InitResetProductV6

Create an instance: `init_reset_product_v6 = client.InitResetProductV6`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_schedule_disabled` | `Boolean` |  |
| `old_product_id` | `String` |  |
| `product_id` | `String` |  |
| `queue_entries_cleared` | `Integer` |  |
| `success` | `Boolean` |  |

#### Example: Create

```ruby
init_reset_product_v6 = client.InitResetProductV6.create({
})
```


### Iri

Create an instance: `iri = client.Iri`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `correlationId` | `Object` |  |
| `idempotencyKey` | `String` |  |
| `productId` | `Object` |  |

#### Example: Create

```ruby
iri = client.Iri.create({
  "connector_id" => "example_connector_id", # String
  "idempotencyKey" => "example_idempotencyKey", # String
})
```


### IrisCapability

Create an instance: `iris_capability = client.IrisCapability`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `capability` | `String` |  |
| `correlationId` | `String` |  |
| `errorCode` | `Object` |  |
| `externalProductId` | `Object` |  |
| `externalUserId` | `String` |  |
| `id` | `String` |  |
| `idempotencyKey` | `String` |  |
| `input` | `Hash` |  |
| `membershipId` | `Object` |  |
| `message` | `Object` |  |
| `ok` | `Boolean` |  |
| `platformAccountId` | `Object` |  |
| `platformLinkId` | `Object` |  |
| `productScope` | `String` |  |
| `requestedBy` | `Hash` |  |
| `result` | `Hash` |  |
| `retryable` | `Boolean` |  |

#### Example: Create

```ruby
iris_capability = client.IrisCapability.create({
  "id" => "example_id", # String
  "capability" => "example_capability", # String
  "correlationId" => "example_correlationId", # String
  "externalUserId" => "example_externalUserId", # String
  "idempotencyKey" => "example_idempotencyKey", # String
  "productScope" => "example_productScope", # String
})
```


### IrisChat

Create an instance: `iris_chat = client.IrisChat`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `artifacts` | `Array` |  |
| `correlationId` | `String` |  |
| `idempotencyKey` | `String` |  |
| `message` | `String` |  |
| `mode` | `String` |  |
| `ok` | `Boolean` |  |
| `pageContext` | `Hash` |  |
| `productId` | `Object` |  |
| `runtimeStatus` | `String` |  |
| `sessionId` | `Object` |  |

#### Example: Create

```ruby
iris_chat = client.IrisChat.create({
  "correlationId" => "example_correlationId", # String
  "idempotencyKey" => "example_idempotencyKey", # String
  "message" => "example_message", # String
})
```


### IrisConnector

Create an instance: `iris_connector = client.IrisConnector`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connectors` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of IrisConnector entities, one per record (raises on error).
iris_connectors = client.IrisConnector.list
iris_connectors.each { |item| puts item.data_get }
```


### IrisStatus

Create an instance: `iris_status = client.IrisStatus`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connectorsPreview` | `Array` |  |
| `product` | `Object` |  |
| `status` | `Hash` |  |
| `tasksPreview` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of IrisStatus entities, one per record (raises on error).
iris_statuss = client.IrisStatus.list
iris_statuss.each { |item| puts item.data_get }
```


### IrisTask

Create an instance: `iris_task = client.IrisTask`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approvalRequired` | `Boolean` |  |
| `cadence` | `String` |  |
| `capability` | `Object` |  |
| `completed` | `Array` |  |
| `description` | `String` |  |
| `discover` | `Array` |  |
| `productId` | `Object` |  |
| `recurring` | `Array` |  |
| `requiredConnectors` | `Array` |  |
| `title` | `String` |  |

#### Example: List

```ruby
# list returns an Array of IrisTask entities, one per record (raises on error).
iris_tasks = client.IrisTask.list
iris_tasks.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
iris_task = client.IrisTask.create({
  "title" => "example_title", # String
})
```


### IrisUsage

Create an instance: `iris_usage = client.IrisUsage`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `eventCount` | `Integer` |  |
| `events` | `Array` |  |
| `membershipId` | `Object` |  |
| `productScope` | `String` |  |

#### Example: List

```ruby
# list returns an Array of IrisUsage entities, one per record (raises on error).
iris_usages = client.IrisUsage.list
iris_usages.each { |item| puts item.data_get }
```


### Landing

Create an instance: `landing = client.Landing`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `file` | `String` |  |

#### Example: Create

```ruby
landing = client.Landing.create({
  "index" => 1, # Integer
  "file" => "example_file", # String
})
```


### LandingStat

Create an instance: `landing_stat = client.LandingStat`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `landing` | `Hash` |  |
| `microhub` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the LandingStat record (raises on error).
landing_stat = client.LandingStat.load({ "slug" => "slug" })
```


### LandingStatus

Create an instance: `landing_status = client.LandingStatus`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errorMessage` | `Object` |  |
| `landingStatus` | `String` |  |
| `microhubStatus` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the LandingStatus record (raises on error).
landing_status = client.LandingStatus.load()
```


### LinkInBio

Create an instance: `link_in_bio = client.LinkInBio`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `linkInBioType` | `String` |  |
| `redirectUrl` | `String` |  |
| `slug` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the LinkInBio record (raises on error).
link_in_bio = client.LinkInBio.load({ "slug" => "slug" })
```


### LinkInDm

Create an instance: `link_in_dm = client.LinkInDm`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `linkInDmsType` | `String` |  |
| `redirectUrl` | `String` |  |
| `slug` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the LinkInDm record (raises on error).
link_in_dm = client.LinkInDm.load({ "slug" => "slug" })
```


### LinkInPost

Create an instance: `link_in_post = client.LinkInPost`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `linkInPostsType` | `String` |  |
| `redirectUrl` | `String` |  |
| `showLinkInFirstComment` | `Boolean` |  |
| `slug` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the LinkInPost record (raises on error).
link_in_post = client.LinkInPost.load({ "slug" => "slug" })
```


### LinkUser

Create an instance: `link_user = client.LinkUser`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `already_linked` | `Boolean` |  |
| `onboarding_data_id` | `String` | UUID of the OnboardingData record |
| `success` | `Boolean` |  |

#### Example: Create

```ruby
link_user = client.LinkUser.create({
  "onboarding_data_id" => "example_onboarding_data_id", # String
})
```


### MediaAsset

Create an instance: `media_asset = client.MediaAsset`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `String` |  |
| `createdAt` | `String` |  |
| `description` | `String` |  |
| `file` | `String` |  |
| `id` | `String` |  |
| `media_assets` | `Array` |  |
| `onboardingDataId` | `Object` |  |
| `onboarding_data_id` | `String` |  |
| `productId` | `Object` |  |
| `product_id` | `String` |  |
| `source` | `String` |  |
| `type` | `String` |  |
| `updatedAt` | `String` |  |
| `url` | `String` |  |
| `usedAt` | `Object` |  |
| `veo3VideoId` | `Object` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the MediaAsset record (raises on error).
media_asset = client.MediaAsset.load({ "id" => "media_asset_id" })
```

#### Example: Create

```ruby
media_asset = client.MediaAsset.create({
  "category" => "example_category", # String
  "createdAt" => "example_createdAt", # String
  "file" => "example_file", # String
  "id" => "example_id", # String
  "media_assets" => [], # Array
  "onboarding_data_id" => "example_onboarding_data_id", # String
  "source" => "example_source", # String
  "type" => "example_type", # String
  "updatedAt" => "example_updatedAt", # String
  "url" => "example_url", # String
})
```


### Men

Create an instance: `men = client.Men`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```ruby
# list returns an Array of Men entities, one per record (raises on error).
mens = client.Men.list
mens.each { |item| puts item.data_get }
```


### Microdrama

Create an instance: `microdrama = client.Microdrama`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `evidence` | `Hash` |  |
| `expected_revision` | `Integer` |  |
| `idempotency_key` | `String` |  |
| `issues` | `Array` |  |
| `reason` | `String` |  |
| `role` | `String` |  |
| `scores` | `Hash` |  |
| `selected_premise_id` | `String` |  |
| `stage` | `String` |  |
| `status` | `String` |  |
| `subject_hash` | `String` |  |
| `title` | `String` |  |
| `verdict` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Microdrama record (raises on error).
microdrama = client.Microdrama.load({ "episode_id" => "episode_id" })
```

#### Example: Create

```ruby
microdrama = client.Microdrama.create({
  "episode_id" => "example_episode_id", # String
  "evidence" => {}, # Hash
  "expected_revision" => 1, # Integer
  "idempotency_key" => "example_idempotency_key", # String
  "reason" => "example_reason", # String
  "role" => "example_role", # String
  "scores" => {}, # Hash
  "stage" => "example_stage", # String
  "status" => "example_status", # String
  "subject_hash" => "example_subject_hash", # String
  "verdict" => "example_verdict", # String
})
```


### MicrohubPublic

Create an instance: `microhub_public = client.MicrohubPublic`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bio` | `Object` |  |
| `ctaButtonText` | `Object` |  |
| `ctaDescription` | `Object` |  |
| `ctaLink` | `Object` |  |
| `ctaTitle` | `Object` |  |
| `headerImageUrl` | `Object` |  |
| `links` | `Array` |  |
| `name` | `String` |  |
| `profileImageUrl` | `Object` |  |
| `slug` | `String` |  |
| `socialLinks` | `Hash` |  |
| `testimonials` | `Array` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the MicrohubPublic record (raises on error).
microhub_public = client.MicrohubPublic.load({ "slug" => "slug" })
```


### OnboardingStatus

Create an instance: `onboarding_status = client.OnboardingStatus`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comments` | `Integer` |  |
| `cover_image_url` | `Object` |  |
| `id` | `String` |  |
| `likes` | `Integer` |  |
| `platform` | `String` |  |
| `video_url` | `Object` |  |
| `views` | `Integer` |  |

#### Example: List

```ruby
# list returns an Array of OnboardingStatus entities, one per record (raises on error).
onboarding_statuss = client.OnboardingStatus.list({ "oid" => "example" })
onboarding_statuss.each { |item| puts item.data_get }
```


### OnboardingV6

Create an instance: `onboarding_v6 = client.OnboardingV6`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### PaidUser

Create an instance: `paid_user = client.PaidUser`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agents_count` | `Integer` |  |
| `assigned_agents_count` | `Integer` |  |
| `auto_schedule_enabled` | `Object` |  |
| `credits` | `Integer` |  |
| `effective_agents_count` | `Integer` |  |
| `email` | `String` |  |
| `id` | `String` |  |
| `is_internal_user` | `Boolean` |  |
| `is_migrated_user` | `Boolean` |  |
| `membership` | `Object` |  |
| `scheduled_queue_count` | `Integer` |  |
| `subscription_details` | `Object` |  |
| `subscription_status` | `Object` |  |

#### Example: List

```ruby
# list returns an Array of PaidUser entities, one per record (raises on error).
paid_users = client.PaidUser.list
paid_users.each { |item| puts item.data_get }
```


### Pexel

Create an instance: `pexel = client.Pexel`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```ruby
# list returns an Array of Pexel entities, one per record (raises on error).
pexels = client.Pexel.list
pexels.each { |item| puts item.data_get }
```


### PhoneAdminAvailableAgentSource

Create an instance: `phone_admin_available_agent_source = client.PhoneAdminAvailableAgentSource`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available_count` | `Integer` |  |
| `pc_name` | `String` |  |

#### Example: List

```ruby
# list returns an Array of PhoneAdminAvailableAgentSource entities, one per record (raises on error).
phone_admin_available_agent_sources = client.PhoneAdminAvailableAgentSource.list
phone_admin_available_agent_sources.each { |item| puts item.data_get }
```


### Product

Create an instance: `product = client.Product`

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
| `agent_count` | `Integer` |  |
| `agents` | `Array` |  |
| `createdAt` | `Object` |  |
| `demoVideos` | `Object` |  |
| `description` | `String` |  |
| `favicon_url` | `Object` |  |
| `howItWorks` | `Object` |  |
| `how_it_works` | `Object` |  |
| `id` | `String` |  |
| `images` | `Object` |  |
| `initial_agents` | `Integer` |  |
| `instagramHandle` | `Object` |  |
| `instagram_handle` | `Object` |  |
| `isActive` | `Object` |  |
| `isApp` | `Object` |  |
| `is_active` | `Boolean` |  |
| `is_app` | `Boolean` |  |
| `language` | `Object` |  |
| `mediaAssets` | `Object` |  |
| `media_asset_ids` | `Object` |  |
| `media_assets` | `Object` |  |
| `name` | `String` |  |
| `otherInstructions` | `Object` |  |
| `other_instructions` | `Object` |  |
| `outroVideo` | `Object` |  |
| `pexelsVideos` | `Object` |  |
| `pricing` | `Object` |  |
| `pricingAndOffers` | `Object` |  |
| `pricing_and_offers` | `Object` |  |
| `product_demo_ids` | `Array` |  |
| `product_details` | `Hash` | Product details for enterprise product creation |
| `product_id` | `String` |  |
| `product_name` | `String` |  |
| `product_url` | `String` |  |
| `pronunciation` | `Object` |  |
| `regenerate_sora2` | `Boolean` |  |
| `repostSource` | `Object` |  |
| `repost_source` | `Object` |  |
| `screenshot_url` | `Object` |  |
| `social_post_ids` | `Array` |  |
| `targetAudience` | `Object` |  |
| `target_audience` | `Object` |  |
| `templateProductId` | `Object` |  |
| `tiktokHandle` | `Object` |  |
| `tiktok_handle` | `Object` |  |
| `total_count` | `Integer` |  |
| `updatedAt` | `Object` |  |
| `url` | `String` |  |
| `userId` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Product record (raises on error).
product = client.Product.load({ "id" => "product_id" })
```

#### Example: List

```ruby
# list returns an Array of Product entities, one per record (raises on error).
products = client.Product.list
products.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
product = client.Product.create({
  "product_details" => {}, # Hash
  "product_url" => "example_product_url", # String
})
```


### ProductDashboard

Create an instance: `product_dashboard = client.ProductDashboard`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agents` | `Array` |  |
| `date` | `String` |  |
| `pagination` | `Hash` |  |
| `phone_admin_error` | `Object` |  |
| `products` | `Array` |  |
| `selected_product` | `Object` |  |
| `summary` | `Hash` |  |

#### Example: List

```ruby
# list returns an Array of ProductDashboard entities, one per record (raises on error).
product_dashboards = client.ProductDashboard.list
product_dashboards.each { |item| puts item.data_get }
```


### ProductDashboardView

Create an instance: `product_dashboard_view = client.ProductDashboardView`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `String` |  |
| `views` | `Integer` |  |

#### Example: List

```ruby
# list returns an Array of ProductDashboardView entities, one per record (raises on error).
product_dashboard_views = client.ProductDashboardView.list({ "product_id" => "example" })
product_dashboard_views.each { |item| puts item.data_get }
```


### ProductDemo

Create an instance: `product_demo = client.ProductDemo`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `id` | `String` |  |
| `source` | `String` |  |
| `type` | `String` |  |
| `url` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ProductDemo entities, one per record (raises on error).
product_demos = client.ProductDemo.list
product_demos.each { |item| puts item.data_get }
```


### ProductLanding

Create an instance: `product_landing = client.ProductLanding`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bio` | `Object` |  |
| `commentingOnMyPosts` | `Boolean` |  |
| `commentingOnOthersPosts` | `Boolean` |  |
| `ctaButtonText` | `Object` |  |
| `ctaDescription` | `Object` |  |
| `ctaLink` | `Object` |  |
| `ctaTitle` | `Object` |  |
| `dmCommenters` | `Boolean` |  |
| `dmInitialMessagePrompt` | `Object` |  |
| `dmOngoingResponsePrompt` | `Object` |  |
| `firstCommentTextBeforeLink` | `Object` |  |
| `headerImageUrl` | `Object` |  |
| `id` | `String` |  |
| `landingHtmlUrl` | `Object` |  |
| `landingLastGeneratedAt` | `Object` |  |
| `landingReferenceScreenshotUrl` | `Object` |  |
| `landingScreenshotUrl` | `Object` |  |
| `landingStatus` | `String` |  |
| `landingUrl` | `String` |  |
| `linkInBioType` | `String` |  |
| `linkInDmsType` | `String` |  |
| `linkInPostsType` | `String` |  |
| `links` | `Object` |  |
| `microhubBio` | `Object` |  |
| `microhubCtaButtonText` | `Object` |  |
| `microhubCtaDescription` | `Object` |  |
| `microhubCtaLink` | `Object` |  |
| `microhubCtaTitle` | `Object` |  |
| `microhubHeaderImageUrl` | `Object` |  |
| `microhubLinks` | `Array` |  |
| `microhubName` | `Object` |  |
| `microhubProfileImageUrl` | `Object` |  |
| `microhubScreenshotUrl` | `Object` |  |
| `microhubSocialLinks` | `Hash` |  |
| `microhubStatus` | `String` |  |
| `microhubTestimonials` | `Array` |  |
| `microhubUrl` | `String` |  |
| `myPostsStylePrompt` | `Object` |  |
| `name` | `String` |  |
| `othersStylePrompt` | `Object` |  |
| `othersTargetMarketPrompt` | `Object` |  |
| `productLinkSelection` | `String` |  |
| `productUrl` | `Object` |  |
| `profileImageUrl` | `Object` |  |
| `shortLink` | `Object` |  |
| `shortLinkKeyword` | `Object` |  |
| `showLinkInFirstComment` | `Boolean` |  |
| `slug` | `String` |  |
| `socialLinks` | `Object` |  |
| `testimonials` | `Object` |  |

#### Example: List

```ruby
# list returns an Array of ProductLanding entities, one per record (raises on error).
product_landings = client.ProductLanding.list
product_landings.each { |item| puts item.data_get }
```


### PublicResumeStatus

Create an instance: `public_resume_status = client.PublicResumeStatus`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `can_resume_prelogin` | `Boolean` |  |
| `content_collection_ready` | `Boolean` |  |
| `current_step` | `Object` |  |
| `exists` | `Boolean` |  |
| `flow_variant` | `Object` |  |
| `repost_content_count` | `Integer` |  |
| `repost_source` | `Object` |  |
| `requires_repost_content` | `Boolean` |  |
| `skip_demo` | `Boolean` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the PublicResumeStatus record (raises on error).
public_resume_status = client.PublicResumeStatus.load({ "oid" => "oid" })
```


### ReRollVideo

Create an instance: `re_roll_video = client.ReRollVideo`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `queue_id` | `String` |  |
| `requires_polling` | `Boolean` |  |
| `skip_credit_check` | `Boolean` |  |
| `video` | `Hash` |  |

#### Example: Create

```ruby
re_roll_video = client.ReRollVideo.create({
  "queue_id" => "example_queue_id", # String
})
```


### ReadRootGet

Create an instance: `read_root_get = client.ReadRootGet`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ReadRootGet record (raises on error).
read_root_get = client.ReadRootGet.load()
```


### RecordDemoBooked

Create an instance: `record_demo_booked = client.RecordDemoBooked`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `calendlyEventUri` | `Object` |  |
| `calendlyInviteeUri` | `Object` |  |
| `message` | `Hash` |  |
| `session` | `Hash` |  |

#### Example: Create

```ruby
record_demo_booked = client.RecordDemoBooked.create({
  "session_id" => "example_session_id", # String
})
```


### RefreshStat

Create an instance: `refresh_stat = client.RefreshStat`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date_from` | `Object` | Start date to refresh stats for (defaults to yesterday) |
| `date_to` | `Object` | End date to refresh stats for (defaults to date_from) |
| `entries_found` | `Integer` |  |
| `message` | `String` |  |
| `provider` | `String` | Scraping provider to use |
| `status` | `String` |  |
| `summary` | `Object` |  |

#### Example: Create

```ruby
refresh_stat = client.RefreshStat.create({
})
```


### RemixerClipper

Create an instance: `remixer_clipper = client.RemixerClipper`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the RemixerClipper record (raises on error).
remixer_clipper = client.RemixerClipper.load()
```

#### Example: Create

```ruby
remixer_clipper = client.RemixerClipper.create({
  "identifier" => "example_identifier", # String
})
```


### ResetProduct

Create an instance: `reset_product = client.ResetProduct`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ResetProduct record (raises on error).
reset_product = client.ResetProduct.load()
```

#### Example: Create

```ruby
reset_product = client.ResetProduct.create({
})
```


### RetryWebsiteScrape

Create an instance: `retry_website_scrape = client.RetryWebsiteScrape`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `flow_variant` | `String` |  |
| `onboarding_data_id` | `String` | UUID of existing OnboardingData |
| `skip_demo` | `Boolean` |  |
| `status` | `String` |  |
| `success` | `Boolean` |  |
| `url` | `String` | New website URL to scrape |

#### Example: Create

```ruby
retry_website_scrape = client.RetryWebsiteScrape.create({
  "onboarding_data_id" => "example_onboarding_data_id", # String
  "url" => "example_url", # String
})
```


### SaveSurvey

Create an instance: `save_survey = client.SaveSurvey`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email_sent` | `Boolean` |  |
| `onboarding_data_id` | `String` | UUID of the OnboardingData record |
| `success` | `Boolean` |  |
| `survey` | `Hash` | Survey response data from frontend. |

#### Example: Create

```ruby
save_survey = client.SaveSurvey.create({
  "onboarding_data_id" => "example_onboarding_data_id", # String
  "survey" => {}, # Hash
})
```


### ScanSocial

Create an instance: `scan_social = client.ScanSocial`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `instagram_handle` | `Object` |  |
| `onboarding_data_id` | `String` |  |
| `product_id` | `String` |  |
| `status` | `String` |  |
| `success` | `Boolean` |  |
| `task_id` | `String` |  |
| `tiktok_handle` | `Object` |  |

#### Example: Create

```ruby
scan_social = client.ScanSocial.create({
  "onboarding_data_id" => "example_onboarding_data_id", # String
  "tiktok_handle" => "example_tiktok_handle", # Object
})
```


### ScanSocialsPublic

Create an instance: `scan_socials_public = client.ScanSocialsPublic`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `instagram_handle` | `Object` | Instagram username/handle to scrape |
| `message` | `Object` |  |
| `onboarding_data_id` | `String` | UUID of the OnboardingData record |
| `status` | `String` |  |
| `success` | `Boolean` |  |
| `tiktok_handle` | `Object` | TikTok username/handle to scrape |

#### Example: Create

```ruby
scan_socials_public = client.ScanSocialsPublic.create({
  "onboarding_data_id" => "example_onboarding_data_id", # String
})
```


### ScanSocialsStatus

Create an instance: `scan_socials_status = client.ScanSocialsStatus`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ads_count` | `Integer` |  |
| `onboarding_data_id` | `String` |  |
| `product_id` | `String` |  |
| `status` | `String` |  |
| `task_id` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ScanSocialsStatus record (raises on error).
scan_socials_status = client.ScanSocialsStatus.load()
```


### ScheduleV2

Create an instance: `schedule_v2 = client.ScheduleV2`

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
| `agent` | `Object` |  |
| `comment` | `Object` |  |
| `created_at` | `String` |  |
| `id` | `String` |  |
| `instagram_posted_by` | `Object` |  |
| `instagram_posted_url` | `Object` |  |
| `instagram_scraped_social_post_id` | `String` |  |
| `is_instagram_posted` | `Boolean` |  |
| `is_tiktok_posted` | `Boolean` |  |
| `is_youtube_posted` | `Boolean` |  |
| `reorders` | `Array` |  |
| `results` | `Object` |  |
| `scheduled_datetime` | `String` |  |
| `source_type` | `String` |  |
| `status` | `String` |  |
| `tiktok_posted_by` | `Object` |  |
| `tiktok_posted_url` | `Object` |  |
| `tiktok_scraped_social_post_id` | `String` |  |
| `video` | `Object` |  |
| `video_id` | `String` |  |
| `youtube_posted_by` | `Object` |  |
| `youtube_posted_url` | `Object` |  |
| `youtube_scraped_social_post_id` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ScheduleV2 record (raises on error).
schedule_v2 = client.ScheduleV2.load()
```

#### Example: List

```ruby
# list returns an Array of ScheduleV2 entities, one per record (raises on error).
schedule_v2s = client.ScheduleV2.list
schedule_v2s.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
schedule_v2 = client.ScheduleV2.create({
  "created_at" => "example_created_at", # String
  "id" => "example_id", # String
  "reorders" => [], # Array
  "scheduled_datetime" => "example_scheduled_datetime", # String
  "source_type" => "example_source_type", # String
  "status" => "example_status", # String
  "video_id" => "example_video_id", # String
})
```


### Scrape

Create an instance: `scrape = client.Scrape`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `old_product_id` | `String` |  |
| `onboarding_data_id` | `String` |  |
| `status` | `String` |  |
| `success` | `Boolean` |  |
| `url` | `String` |  |

#### Example: Create

```ruby
scrape = client.Scrape.create({
  "old_product_id" => "example_old_product_id", # String
  "url" => "example_url", # String
})
```


### ScrapeWebsitePublic

Create an instance: `scrape_website_public = client.ScrapeWebsitePublic`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `flow_variant` | `String` |  |
| `onboarding_data_id` | `String` | UUID of created OnboardingData |
| `skip_demo` | `Boolean` | True for self-serve users (skip demo booking) |
| `status` | `String` |  |
| `success` | `Boolean` |  |
| `url` | `String` | Website URL to scrape |

#### Example: Create

```ruby
scrape_website_public = client.ScrapeWebsitePublic.create({
  "url" => "example_url", # String
})
```


### ScrapedData

Create an instance: `scraped_data = client.ScrapedData`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `String` |  |
| `homepageVideoUrl` | `Object` |  |
| `howItWorks` | `String` |  |
| `imageUrls` | `Array` |  |
| `instagram_username` | `Object` |  |
| `mediaAssets` | `Array` |  |
| `name` | `String` |  |
| `pricingAndOffers` | `String` |  |
| `targetAudience` | `String` |  |
| `url` | `String` |  |

#### Example: Create

```ruby
scraped_data = client.ScrapedData.create({
  "url" => "example_url", # String
})
```


### ScrapingStatus

Create an instance: `scraping_status = client.ScrapingStatus`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ScrapingStatus record (raises on error).
scraping_status = client.ScrapingStatus.load()
```


### SelfServeActivate

Create an instance: `self_serve_activate = client.SelfServeActivate`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `onboarding_data_id` | `String` | UUID of the OnboardingData record |
| `redirect_to_stripe` | `Boolean` |  |
| `stripe_checkout_url` | `Object` |  |
| `success` | `Boolean` |  |

#### Example: Create

```ruby
self_serve_activate = client.SelfServeActivate.create({
  "onboarding_data_id" => "example_onboarding_data_id", # String
})
```


### Seo

Create an instance: `seo = client.Seo`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Seo record (raises on error).
seo = client.Seo.load()
```


### SeoAiMention

Create an instance: `seo_ai_mention = client.SeoAiMention`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bucket` | `String` |  |
| `domain_type` | `String` |  |
| `dominant_domain` | `String` |  |
| `engine` | `String` |  |
| `evidence` | `Hash` |  |
| `geo` | `String` |  |
| `language` | `String` |  |
| `primary_url` | `String` |  |
| `prompt_text` | `String` |  |
| `run_week` | `String` |  |
| `secondary_urls` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of SeoAiMention entities, one per record (raises on error).
seo_ai_mentions = client.SeoAiMention.list
seo_ai_mentions.each { |item| puts item.data_get }
```


### SeoBacklink

Create an instance: `seo_backlink = client.SeoBacklink`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anchor_text` | `String` |  |
| `first_seen` | `String` |  |
| `referring_domain` | `String` |  |
| `status` | `String` |  |
| `target_page` | `String` |  |

#### Example: List

```ruby
# list returns an Array of SeoBacklink entities, one per record (raises on error).
seo_backlinks = client.SeoBacklink.list
seo_backlinks.each { |item| puts item.data_get }
```


### SeoKeyword

Create an instance: `seo_keyword = client.SeoKeyword`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blog_page` | `String` |  |
| `current_position` | `Float` |  |
| `keyword` | `String` |  |
| `keyword_group` | `String` |  |
| `position_change` | `Float` |  |

#### Example: List

```ruby
# list returns an Array of SeoKeyword entities, one per record (raises on error).
seo_keywords = client.SeoKeyword.list
seo_keywords.each { |item| puts item.data_get }
```


### SeoOverview

Create an instance: `seo_overview = client.SeoOverview`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `clicks` | `Float` |  |
| `ctr` | `Float` |  |
| `date` | `String` |  |
| `impressions` | `Float` |  |
| `position` | `Float` |  |

#### Example: List

```ruby
# list returns an Array of SeoOverview entities, one per record (raises on error).
seo_overviews = client.SeoOverview.list
seo_overviews.each { |item| puts item.data_get }
```


### SeoTraffic

Create an instance: `seo_traffic = client.SeoTraffic`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `end_date` | `String` |  |
| `series` | `Array` |  |
| `site_url` | `String` |  |
| `start_date` | `String` |  |
| `top_countries` | `Array` |  |
| `top_pages` | `Array` |  |
| `top_queries` | `Array` |  |
| `totals` | `Hash` |  |

#### Example: List

```ruby
# list returns an Array of SeoTraffic entities, one per record (raises on error).
seo_traffics = client.SeoTraffic.list
seo_traffics.each { |item| puts item.data_get }
```


### ShareAccessLink

Create an instance: `share_access_link = client.ShareAccessLink`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `share_token` | `String` |  |
| `share_url` | `String` |  |

#### Example: Create

```ruby
share_access_link = client.ShareAccessLink.create({
  "share_token" => "example_share_token", # String
  "share_url" => "example_share_url", # String
})
```


### Site

Create an instance: `site = client.Site`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Site record (raises on error).
site = client.Site.load()
```


### Slide

Create an instance: `slide = client.Slide`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `caption` | `Object` |  |
| `id` | `String` |  |
| `prompt` | `Object` |  |

#### Example: Create

```ruby
slide = client.Slide.create({
  "carousel_id" => "example_carousel_id", # String
  "slide_index" => 1, # Integer
})
```


### SlugValidation

Create an instance: `slug_validation = client.SlugValidation`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `reason` | `Object` |  |
| `valid` | `Boolean` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the SlugValidation record (raises on error).
slug_validation = client.SlugValidation.load({ "slug" => "slug" })
```


### Social

Create an instance: `social = client.Social`

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
| `code` | `String` |  |
| `code_verifier` | `String` |  |
| `createdAt` | `String` |  |
| `id` | `String` |  |
| `platform` | `String` |  |
| `platformUserId` | `String` |  |
| `updatedAt` | `Object` |  |
| `userId` | `String` |  |
| `username` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Social record (raises on error).
social = client.Social.load()
```

#### Example: List

```ruby
# list returns an Array of Social entities, one per record (raises on error).
socials = client.Social.list
socials.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
social = client.Social.create({
  "code" => "example_code", # String
  "code_verifier" => "example_code_verifier", # String
})
```


### SocialScanPreview

Create an instance: `social_scan_preview = client.SocialScanPreview`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `instagram_handle` | `Object` | Instagram username/handle to scrape |
| `posts` | `Array` |  |
| `success` | `Boolean` |  |
| `tiktok_handle` | `Object` | TikTok username/handle to scrape |

#### Example: Create

```ruby
social_scan_preview = client.SocialScanPreview.create({
})
```


### SocialScanProcess

Create an instance: `social_scan_process = client.SocialScanProcess`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `posts` | `Array` |  |
| `product_id` | `String` |  |
| `success` | `Boolean` |  |
| `task_id` | `String` |  |

#### Example: Create

```ruby
social_scan_process = client.SocialScanProcess.create({
  "posts" => [], # Array
  "product_id" => "example_product_id", # String
})
```


### SocialScanSave

Create an instance: `social_scan_save = client.SocialScanSave`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `media_asset_ids` | `Array` |  |
| `posts` | `Array` |  |
| `product_id` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Create

```ruby
social_scan_save = client.SocialScanSave.create({
  "posts" => [], # Array
  "product_id" => "example_product_id", # String
})
```


### Sora2Avatar

Create an instance: `sora2_avatar = client.Sora2Avatar`

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
| `avatar_frame_url` | `Object` |  |
| `created_at` | `String` |  |
| `current_step` | `Integer` |  |
| `headshot_url` | `Object` |  |
| `id` | `String` |  |
| `logs` | `Hash` |  |
| `prompt_key` | `String` |  |
| `run_output_dir` | `Object` |  |
| `selected_age_bucket` | `String` |  |
| `selected_gender` | `String` |  |
| `selected_prompt` | `Object` |  |
| `selected_race` | `String` |  |
| `sora2_cameo_handle` | `Object` |  |
| `sora2_cameo_id` | `String` |  |
| `sora2_cameo_link` | `Object` |  |
| `sora2_display_name` | `Object` |  |
| `sora2_task_id` | `String` |  |
| `sora2_video_url` | `String` |  |
| `updated_at` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Sora2Avatar record (raises on error).
sora2_avatar = client.Sora2Avatar.load({ "id" => "sora2_avatar_id" })
```

#### Example: List

```ruby
# list returns an Array of Sora2Avatar entities, one per record (raises on error).
sora2_avatars = client.Sora2Avatar.list
sora2_avatars.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
sora2_avatar = client.Sora2Avatar.create({
  "prompt_key" => "example_prompt_key", # String
  "selected_age_bucket" => "example_selected_age_bucket", # String
  "selected_gender" => "example_selected_gender", # String
  "selected_race" => "example_selected_race", # String
  "sora2_video_url" => "example_sora2_video_url", # String
})
```


### Sora2AvatarAssetUpload

Create an instance: `sora2_avatar_asset_upload = client.Sora2AvatarAssetUpload`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_id` | `String` |  |
| `file` | `String` |  |
| `run_output_dir` | `Object` |  |
| `s3_key` | `String` |  |
| `upload_type` | `String` |  |
| `url` | `String` |  |

#### Example: Create

```ruby
sora2_avatar_asset_upload = client.Sora2AvatarAssetUpload.create({
  "file" => "example_file", # String
  "s3_key" => "example_s3_key", # String
  "upload_type" => "example_upload_type", # String
  "url" => "example_url", # String
})
```


### Sora2AvatarStat

Create an instance: `sora2_avatar_stat = client.Sora2AvatarStat`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `by_age_bucket` | `Hash` |  |
| `by_gender` | `Hash` |  |
| `by_prompt_key` | `Hash` |  |
| `by_race` | `Hash` |  |
| `completed_avatars` | `Integer` |  |
| `completion_rate` | `Float` |  |
| `total_avatars` | `Integer` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Sora2AvatarStat record (raises on error).
sora2_avatar_stat = client.Sora2AvatarStat.load()
```


### Stat

Create an instance: `stat = client.Stat`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```ruby
# list returns an Array of Stat entities, one per record (raises on error).
stats = client.Stat.list
stats.each { |item| puts item.data_get }
```


### StatsRefreshBackfill

Create an instance: `stats_refresh_backfill = client.StatsRefreshBackfill`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `message` | `String` |  |
| `status` | `String` |  |
| `task_id` | `String` |  |

#### Example: Create

```ruby
stats_refresh_backfill = client.StatsRefreshBackfill.create({
})
```


### StatsRefreshIssue

Create an instance: `stats_refresh_issue = client.StatsRefreshIssue`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aged_over_24h` | `Boolean` |  |
| `agent_id` | `String` |  |
| `agent_name_snapshot` | `Object` |  |
| `first_detected_at` | `String` |  |
| `id` | `String` |  |
| `last_detected_at` | `String` |  |
| `last_refresh_completed_at` | `Object` |  |
| `last_seen_run_id` | `String` |  |
| `latest_error_message` | `Object` |  |
| `next_retry_at` | `Object` |  |
| `platform` | `String` |  |
| `post_method` | `Object` |  |
| `post_url` | `Object` |  |
| `posted_date_et` | `String` |  |
| `product_id` | `String` |  |
| `product_name_snapshot` | `Object` |  |
| `reason_code` | `String` |  |
| `resolved_at` | `Object` |  |
| `retry_count` | `Integer` |  |
| `schedule_queue_id` | `String` |  |
| `scheduled_datetime_utc` | `String` |  |
| `stale_after_sla` | `Boolean` |  |
| `status` | `String` |  |
| `user_email_snapshot` | `String` |  |
| `user_id` | `String` |  |

#### Example: List

```ruby
# list returns an Array of StatsRefreshIssue entities, one per record (raises on error).
stats_refresh_issues = client.StatsRefreshIssue.list
stats_refresh_issues.each { |item| puts item.data_get }
```


### StatsRefreshOverview

Create an instance: `stats_refresh_overview = client.StatsRefreshOverview`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_run` | `Object` |  |
| `aged_over_24h` | `Integer` |  |
| `backlog_preview` | `Array` |  |
| `coverage_percent` | `Float` |  |
| `customer_counts` | `Hash` |  |
| `date` | `String` |  |
| `generated_at` | `String` |  |
| `method_counts` | `Hash` |  |
| `platform_counts` | `Hash` |  |
| `platform_units_resolved` | `Integer` |  |
| `platform_units_total` | `Integer` |  |
| `platform_units_unresolved` | `Integer` |  |
| `posted_entries` | `Integer` |  |
| `reason_counts` | `Hash` |  |
| `sla_deadline_et` | `String` |  |
| `stale_after_sla` | `Integer` |  |
| `top_affected_customers` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of StatsRefreshOverview entities, one per record (raises on error).
stats_refresh_overviews = client.StatsRefreshOverview.list
stats_refresh_overviews.each { |item| puts item.data_get }
```


### StatsRefreshRunSummary

Create an instance: `stats_refresh_run_summary = client.StatsRefreshRunSummary`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `celery_task_id` | `String` |  |
| `completed_at` | `Object` |  |
| `entries_failed` | `Integer` |  |
| `entries_skipped` | `Integer` |  |
| `entries_total` | `Integer` |  |
| `entries_updated` | `Integer` |  |
| `error_summary_json` | `Object` |  |
| `id` | `String` |  |
| `issues_opened` | `Integer` |  |
| `issues_resolved` | `Integer` |  |
| `platform_units_resolved` | `Integer` |  |
| `platform_units_total` | `Integer` |  |
| `platform_units_unresolved` | `Integer` |  |
| `platform_updates_via_profile` | `Integer` |  |
| `platform_updates_via_url` | `Integer` |  |
| `provider` | `Object` |  |
| `refresh_trigger` | `Object` |  |
| `requested_by_email` | `Object` |  |
| `run_type` | `String` |  |
| `started_at` | `String` |  |
| `status` | `String` |  |
| `target_date_et` | `Object` |  |
| `users_count` | `Integer` |  |

#### Example: List

```ruby
# list returns an Array of StatsRefreshRunSummary entities, one per record (raises on error).
stats_refresh_run_summarys = client.StatsRefreshRunSummary.list
stats_refresh_run_summarys.each { |item| puts item.data_get }
```


### StatsRefreshTaskTrigger

Create an instance: `stats_refresh_task_trigger = client.StatsRefreshTaskTrigger`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `message` | `String` |  |
| `status` | `String` |  |
| `target_date` | `String` |  |
| `task_id` | `String` |  |
| `users_count` | `Integer` |  |

#### Example: Create

```ruby
stats_refresh_task_trigger = client.StatsRefreshTaskTrigger.create({
  "message" => "example_message", # String
  "status" => "example_status", # String
  "target_date" => "example_target_date", # String
  "task_id" => "example_task_id", # String
})
```


### Stripe

Create an instance: `stripe = client.Stripe`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |


### Style

Create an instance: `style = client.Style`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Style record (raises on error).
style = client.Style.load()
```


### Template

Create an instance: `template = client.Template`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Template record (raises on error).
template = client.Template.load()
```


### TikTokCreatorInfo

Create an instance: `tik_tok_creator_info = client.TikTokCreatorInfo`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commentDisabled` | `Boolean` |  |
| `creatorAvatarUrl` | `Object` |  |
| `creatorNickname` | `Object` |  |
| `creatorUsername` | `Object` |  |
| `duetDisabled` | `Boolean` |  |
| `maxVideoPostDurationSec` | `Integer` |  |
| `privacyLevelOptions` | `Array` |  |
| `stitchDisabled` | `Boolean` |  |

#### Example: List

```ruby
# list returns an Array of TikTokCreatorInfo entities, one per record (raises on error).
tik_tok_creator_infos = client.TikTokCreatorInfo.list
tik_tok_creator_infos.each { |item| puts item.data_get }
```


### TopPost

Create an instance: `top_post = client.TopPost`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comments` | `Integer` |  |
| `id` | `String` |  |
| `likes` | `Integer` |  |
| `platforms` | `Array` |  |
| `scheduled_datetime` | `String` |  |
| `user_email` | `String` |  |
| `user_id` | `String` |  |
| `views` | `Integer` |  |

#### Example: List

```ruby
# list returns an Array of TopPost entities, one per record (raises on error).
top_posts = client.TopPost.list({ "date" => "example" })
top_posts.each { |item| puts item.data_get }
```


### UploadPostAgent

Create an instance: `upload_post_agent = client.UploadPostAgent`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
upload_post_agent = client.UploadPostAgent.create({
})
```


### User

Create an instance: `user = client.User`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountType` | `Object` |  |
| `activatedByAdminAt` | `Object` |  |
| `activatedByAdminId` | `Object` |  |
| `agents` | `Array` |  |
| `agentsCount` | `Object` |  |
| `attribution` | `Object` |  |
| `avatarImageUrl` | `Object` |  |
| `avatarVoiceUrl` | `Object` |  |
| `createdAt` | `String` |  |
| `credits` | `Integer` |  |
| `email` | `String` |  |
| `googleId` | `Object` |  |
| `hasSeenScheduleWelcome` | `Boolean` |  |
| `id` | `String` |  |
| `industry` | `Object` |  |
| `instagramId` | `Object` |  |
| `isActivatedByAdmin` | `Boolean` |  |
| `isAdmin` | `Boolean` |  |
| `isInternalUser` | `Object` |  |
| `isMigrated` | `Object` |  |
| `isResettingProduct` | `Object` |  |
| `membership` | `Object` |  |
| `name` | `String` |  |
| `partnerDirectLoginDisabled` | `Boolean` |  |
| `partnerExternalUserId` | `Object` |  |
| `partnerPolicyCode` | `Object` |  |
| `partnerSource` | `Object` |  |
| `picture` | `Object` |  |
| `stripeCustomerId` | `Object` |  |
| `stripeSubscriptionId` | `Object` |  |
| `subscriptionCurrentPeriodEnd` | `Object` |  |
| `subscriptionStatus` | `Object` |  |
| `totalCount` | `Integer` |  |
| `updatedAt` | `String` |  |
| `userId` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the User record (raises on error).
user = client.User.load({ "id" => "user_id" })
```


### UserAgent

Create an instance: `user_agent = client.UserAgent`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent` | `Hash` |  |
| `assigned_at` | `String` |  |
| `assignment_id` | `String` |  |
| `expires_at` | `Object` |  |
| `id` | `String` |  |
| `status` | `String` |  |

#### Example: List

```ruby
# list returns an Array of UserAgent entities, one per record (raises on error).
user_agents = client.UserAgent.list({ "id" => "example" })
user_agents.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
user_agent = client.UserAgent.create({
  "id" => "example_id", # String
  "agent" => {}, # Hash
  "assigned_at" => "example_assigned_at", # String
  "assignment_id" => "example_assignment_id", # String
  "status" => "example_status", # String
})
```


### UserHealthDetail

Create an instance: `user_health_detail = client.UserHealthDetail`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `Object` |  |
| `activated` | `Boolean` |  |
| `activated_by_admin_at` | `Object` |  |
| `activated_by_admin_id` | `String` |  |
| `admin_notes` | `Object` |  |
| `agents_count` | `Integer` |  |
| `assigned_agents` | `Array` |  |
| `assigned_agents_count` | `Integer` |  |
| `assigned_agents_preview_limit` | `Integer` |  |
| `assigned_agents_truncated` | `Boolean` |  |
| `auto_schedule_enabled` | `Boolean` |  |
| `comments_expected_per_day` | `Integer` |  |
| `comments_fix_block_reason` | `Object` |  |
| `comments_fix_ready` | `Boolean` |  |
| `comments_today_failed` | `Integer` |  |
| `comments_today_posted` | `Integer` |  |
| `comments_today_scheduled` | `Integer` |  |
| `comments_yesterday_failed` | `Integer` |  |
| `comments_yesterday_posted` | `Integer` |  |
| `comments_yesterday_total` | `Integer` |  |
| `created_at` | `String` |  |
| `credits` | `Integer` |  |
| `effective_posted_video_reuse_percent` | `Integer` |  |
| `email` | `String` |  |
| `expected_agents_count` | `Integer` |  |
| `id` | `String` |  |
| `is_activated_by_admin` | `Boolean` |  |
| `is_admin` | `Boolean` |  |
| `is_bookmarked` | `Boolean` |  |
| `is_internal_user` | `Boolean` |  |
| `is_migrated` | `Boolean` |  |
| `landing_slug` | `Object` |  |
| `landing_status` | `Object` |  |
| `landing_url` | `Object` |  |
| `membership` | `Object` |  |
| `microhub_status` | `Object` |  |
| `microhub_url` | `Object` |  |
| `name` | `String` |  |
| `onboarding_flow` | `String` |  |
| `posted_video_reuse_percent` | `Object` |  |
| `product_id` | `String` |  |
| `product_name` | `Object` |  |
| `product_url` | `Object` |  |
| `subscription_status` | `Object` |  |
| `survey_data` | `Object` |  |
| `today_failed` | `Integer` |  |
| `today_posted` | `Integer` |  |
| `today_scheduled` | `Integer` |  |
| `tomorrow_capacity` | `Integer` |  |
| `tomorrow_scheduled` | `Integer` |  |
| `videos_completed` | `Integer` |  |
| `videos_failed` | `Integer` |  |
| `videos_pending` | `Integer` |  |
| `videos_stale` | `Integer` |  |
| `videos_total` | `Integer` |  |
| `yesterday_failed` | `Integer` |  |
| `yesterday_failed_entries` | `Array` |  |
| `yesterday_posted` | `Integer` |  |
| `yesterday_total` | `Integer` |  |

#### Example: List

```ruby
# list returns an Array of UserHealthDetail entities, one per record (raises on error).
user_health_details = client.UserHealthDetail.list({ "id" => "example" })
user_health_details.each { |item| puts item.data_get }
```


### UserWithAvatarSubmission

Create an instance: `user_with_avatar_submission = client.UserWithAvatarSubmission`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_image_url` | `String` |  |
| `avatar_voice_url` | `String` |  |
| `created_at` | `String` |  |
| `email` | `String` |  |
| `id` | `String` |  |
| `name` | `String` |  |

#### Example: List

```ruby
# list returns an Array of UserWithAvatarSubmission entities, one per record (raises on error).
user_with_avatar_submissions = client.UserWithAvatarSubmission.list
user_with_avatar_submissions.each { |item| puts item.data_get }
```


### UsersHealth

Create an instance: `users_health = client.UsersHealth`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `Object` |  |
| `admin_notes` | `Object` |  |
| `agents_count` | `Integer` |  |
| `agents_health` | `String` |  |
| `agents_issue` | `Object` |  |
| `assigned_agents_count` | `Integer` |  |
| `auto_schedule_enabled` | `Boolean` |  |
| `auto_schedule_health` | `String` |  |
| `auto_schedule_issue` | `Object` |  |
| `auto_schedule_today_health` | `String` |  |
| `auto_schedule_today_issue` | `Object` |  |
| `created_at` | `String` |  |
| `email` | `String` |  |
| `expected_agents_count` | `Integer` |  |
| `id` | `String` |  |
| `is_bookmarked` | `Boolean` |  |
| `is_internal_user` | `Boolean` |  |
| `is_migrated` | `Boolean` |  |
| `membership` | `Object` |  |
| `name` | `String` |  |
| `posts_health` | `String` |  |
| `posts_issue` | `Object` |  |
| `posts_today_health` | `String` |  |
| `posts_today_issue` | `Object` |  |
| `subscription_status` | `Object` |  |
| `today_expected_count` | `Integer` |  |
| `today_failed_count` | `Integer` |  |
| `today_scheduled_count` | `Integer` |  |
| `today_total_count` | `Integer` |  |
| `tomorrow_expected_count` | `Integer` |  |
| `tomorrow_scheduled_count` | `Integer` |  |
| `yesterday_failed_count` | `Integer` |  |
| `yesterday_total_count` | `Integer` |  |

#### Example: List

```ruby
# list returns an Array of UsersHealth entities, one per record (raises on error).
users_healths = client.UsersHealth.list
users_healths.each { |item| puts item.data_get }
```


### Video

Create an instance: `video = client.Video`

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
| `agent_id` | `String` |  |
| `bookmarked` | `Object` |  |
| `captions` | `Object` |  |
| `carousel_data` | `Object` |  |
| `created_at` | `String` |  |
| `duration` | `Float` |  |
| `generation_status` | `Object` |  |
| `id` | `String` |  |
| `image_prompt` | `Object` |  |
| `is_onboarding` | `Boolean` |  |
| `is_template` | `Boolean` |  |
| `main_avatar` | `Object` |  |
| `main_prompt` | `Object` |  |
| `media_asset_id` | `String` |  |
| `product_id` | `String` |  |
| `reel_id` | `String` |  |
| `thumbnail_url` | `Object` |  |
| `title` | `String` |  |
| `type` | `Object` |  |
| `updated_at` | `Object` |  |
| `url` | `String` |  |
| `user_id` | `String` |  |
| `video_id` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Video record (raises on error).
video = client.Video.load({ "id" => "video_id" })
```

#### Example: Create

```ruby
video = client.Video.create({
  "captions" => "example_captions", # Object
  "title" => "example_title", # String
  "url" => "example_url", # String
  "video_id" => "example_video_id", # String
})
```


### VideoRemixerWorker

Create an instance: `video_remixer_worker = client.VideoRemixerWorker`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `captions_ass` | `String` |  |
| `captions_vtt` | `String` |  |
| `cost_usd` | `Float` |  |
| `error` | `String` |  |
| `file` | `String` |  |
| `kinds` | `Array` |  |
| `lease_token` | `String` |  |
| `limit` | `Integer` |  |
| `manifest` | `String` |  |
| `model` | `String` |  |
| `processing_seconds` | `Float` |  |
| `prompt_version` | `String` |  |
| `result` | `Hash` |  |
| `thumbnail` | `String` |  |
| `tier` | `String` |  |
| `worker_id` | `String` |  |

#### Example: Create

```ruby
video_remixer_worker = client.VideoRemixerWorker.create({
  "error" => "example_error", # String
  "file" => "example_file", # String
  "lease_token" => "example_lease_token", # String
  "manifest" => "example_manifest", # String
  "model" => "example_model", # String
  "prompt_version" => "example_prompt_version", # String
  "thumbnail" => "example_thumbnail", # String
  "worker_id" => "example_worker_id", # String
})
```


### WatchdogRecovery

Create an instance: `watchdog_recovery = client.WatchdogRecovery`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `item_id` | `String` |  |
| `passed` | `Boolean` |  |
| `table` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the WatchdogRecovery record (raises on error).
watchdog_recovery = client.WatchdogRecovery.load()
```

#### Example: Create

```ruby
watchdog_recovery = client.WatchdogRecovery.create({
  "item_id" => "example_item_id", # String
  "passed" => true, # Boolean
  "table" => "example_table", # String
})
```


### WinningAd

Create an instance: `winning_ad = client.WinningAd`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `id` | `String` |  |
| `source` | `String` |  |
| `type` | `String` |  |
| `url` | `String` |  |

#### Example: List

```ruby
# list returns an Array of WinningAd entities, one per record (raises on error).
winning_ads = client.WinningAd.list
winning_ads.each { |item| puts item.data_get }
```


### XAdaptation

Create an instance: `x_adaptation = client.XAdaptation`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the XAdaptation record (raises on error).
x_adaptation = client.XAdaptation.load()
```


### ZerohumanAdminAccount

Create an instance: `zerohuman_admin_account = client.ZerohumanAdminAccount`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_mode` | `String` |  |
| `active_queue_count` | `Integer` |  |
| `assigned_agent` | `Object` |  |
| `created_at` | `Object` |  |
| `email` | `String` |  |
| `external_user_id` | `String` |  |
| `membership` | `Object` |  |
| `policy_code` | `Object` |  |
| `product_id` | `String` |  |
| `product_name` | `Object` |  |
| `provisioning_status` | `String` |  |
| `subscription_status` | `Object` |  |
| `updated_at` | `Object` |  |
| `user_id` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ZerohumanAdminAccount entities, one per record (raises on error).
zerohuman_admin_accounts = client.ZerohumanAdminAccount.list
zerohuman_admin_accounts.each { |item| puts item.data_get }
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

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── CrackedApiReference_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── schema.rb                  -- Generated option + entity specs
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`CrackedApiReference_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```ruby
admininsight = client.AdminInsight
admininsight.list()

# admininsight.data_get now returns the admininsight data from the last list
# admininsight.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
