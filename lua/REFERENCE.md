# CrackedApiReference Lua SDK Reference

Complete API reference for the CrackedApiReference Lua SDK.


## CrackedApiReferenceSDK

### Constructor

```lua
local sdk = require("cracked-api-reference_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Activate(data)`

Create a new `Activate` entity instance. Pass `nil` for no initial data.

#### `ActivateUser(data)`

Create a new `ActivateUser` entity instance. Pass `nil` for no initial data.

#### `ActiveOnboarding(data)`

Create a new `ActiveOnboarding` entity instance. Pass `nil` for no initial data.

#### `Admin(data)`

Create a new `Admin` entity instance. Pass `nil` for no initial data.

#### `AdminAccountReset(data)`

Create a new `AdminAccountReset` entity instance. Pass `nil` for no initial data.

#### `AdminCarousel(data)`

Create a new `AdminCarousel` entity instance. Pass `nil` for no initial data.

#### `AdminCarouselDemoReview(data)`

Create a new `AdminCarouselDemoReview` entity instance. Pass `nil` for no initial data.

#### `AdminCustomer(data)`

Create a new `AdminCustomer` entity instance. Pass `nil` for no initial data.

#### `AdminCustomerSuccess(data)`

Create a new `AdminCustomerSuccess` entity instance. Pass `nil` for no initial data.

#### `AdminGeneratedVideo(data)`

Create a new `AdminGeneratedVideo` entity instance. Pass `nil` for no initial data.

#### `AdminHealthrx(data)`

Create a new `AdminHealthrx` entity instance. Pass `nil` for no initial data.

#### `AdminInsight(data)`

Create a new `AdminInsight` entity instance. Pass `nil` for no initial data.

#### `AdminLandingTask(data)`

Create a new `AdminLandingTask` entity instance. Pass `nil` for no initial data.

#### `AdminMetricsSummary(data)`

Create a new `AdminMetricsSummary` entity instance. Pass `nil` for no initial data.

#### `AdminPost(data)`

Create a new `AdminPost` entity instance. Pass `nil` for no initial data.

#### `AdminRecentSignup(data)`

Create a new `AdminRecentSignup` entity instance. Pass `nil` for no initial data.

#### `AdminSlideshowDiag(data)`

Create a new `AdminSlideshowDiag` entity instance. Pass `nil` for no initial data.

#### `AdminSlideshowImport(data)`

Create a new `AdminSlideshowImport` entity instance. Pass `nil` for no initial data.

#### `AdminUserView(data)`

Create a new `AdminUserView` entity instance. Pass `nil` for no initial data.

#### `AdminUsersTableItem(data)`

Create a new `AdminUsersTableItem` entity instance. Pass `nil` for no initial data.

#### `AdminVideoRemixer(data)`

Create a new `AdminVideoRemixer` entity instance. Pass `nil` for no initial data.

#### `AdvanceStep(data)`

Create a new `AdvanceStep` entity instance. Pass `nil` for no initial data.

#### `Agent(data)`

Create a new `Agent` entity instance. Pass `nil` for no initial data.

#### `AgentAccessCustomersHealth(data)`

Create a new `AgentAccessCustomersHealth` entity instance. Pass `nil` for no initial data.

#### `AgentAccessOverview(data)`

Create a new `AgentAccessOverview` entity instance. Pass `nil` for no initial data.

#### `AgentAccessPhilHourlyNotification(data)`

Create a new `AgentAccessPhilHourlyNotification` entity instance. Pass `nil` for no initial data.

#### `AgentAccessPhilStatsRefresh(data)`

Create a new `AgentAccessPhilStatsRefresh` entity instance. Pass `nil` for no initial data.

#### `AgentAccessPhilVideo(data)`

Create a new `AgentAccessPhilVideo` entity instance. Pass `nil` for no initial data.

#### `AgentAccessUserAgent(data)`

Create a new `AgentAccessUserAgent` entity instance. Pass `nil` for no initial data.

#### `AgentAccessUserPhoneFarm(data)`

Create a new `AgentAccessUserPhoneFarm` entity instance. Pass `nil` for no initial data.

#### `AgentAccessUserPost(data)`

Create a new `AgentAccessUserPost` entity instance. Pass `nil` for no initial data.

#### `AgentAccessUserSummary(data)`

Create a new `AgentAccessUserSummary` entity instance. Pass `nil` for no initial data.

#### `AgentAccessUserVideo(data)`

Create a new `AgentAccessUserVideo` entity instance. Pass `nil` for no initial data.

#### `AgentAccessUserWinningAd(data)`

Create a new `AgentAccessUserWinningAd` entity instance. Pass `nil` for no initial data.

#### `AgentAccessWinningAdsSummary(data)`

Create a new `AgentAccessWinningAdsSummary` entity instance. Pass `nil` for no initial data.

#### `AgentDetail(data)`

Create a new `AgentDetail` entity instance. Pass `nil` for no initial data.

#### `AgentHealth(data)`

Create a new `AgentHealth` entity instance. Pass `nil` for no initial data.

#### `AgentHealthCustomerOption(data)`

Create a new `AgentHealthCustomerOption` entity instance. Pass `nil` for no initial data.

#### `AgentHealthDetail(data)`

Create a new `AgentHealthDetail` entity instance. Pass `nil` for no initial data.

#### `AgentPost(data)`

Create a new `AgentPost` entity instance. Pass `nil` for no initial data.

#### `AgentStat(data)`

Create a new `AgentStat` entity instance. Pass `nil` for no initial data.

#### `AgentSummary(data)`

Create a new `AgentSummary` entity instance. Pass `nil` for no initial data.

#### `AgentsSummary(data)`

Create a new `AgentsSummary` entity instance. Pass `nil` for no initial data.

#### `AnalysisStatus(data)`

Create a new `AnalysisStatus` entity instance. Pass `nil` for no initial data.

#### `AnalyticsPost(data)`

Create a new `AnalyticsPost` entity instance. Pass `nil` for no initial data.

#### `AnalyzeProduct(data)`

Create a new `AnalyzeProduct` entity instance. Pass `nil` for no initial data.

#### `AssignAgent(data)`

Create a new `AssignAgent` entity instance. Pass `nil` for no initial data.

#### `Auth(data)`

Create a new `Auth` entity instance. Pass `nil` for no initial data.

#### `AutoScheduleSetting(data)`

Create a new `AutoScheduleSetting` entity instance. Pass `nil` for no initial data.

#### `BulkTikTokStatsUpdate(data)`

Create a new `BulkTikTokStatsUpdate` entity instance. Pass `nil` for no initial data.

#### `Carousel(data)`

Create a new `Carousel` entity instance. Pass `nil` for no initial data.

#### `CarouselAgentDetail(data)`

Create a new `CarouselAgentDetail` entity instance. Pass `nil` for no initial data.

#### `CarouselStatus(data)`

Create a new `CarouselStatus` entity instance. Pass `nil` for no initial data.

#### `Chat(data)`

Create a new `Chat` entity instance. Pass `nil` for no initial data.

#### `ChatHistory(data)`

Create a new `ChatHistory` entity instance. Pass `nil` for no initial data.

#### `ChatSession(data)`

Create a new `ChatSession` entity instance. Pass `nil` for no initial data.

#### `Comment(data)`

Create a new `Comment` entity instance. Pass `nil` for no initial data.

#### `CommentCampaign(data)`

Create a new `CommentCampaign` entity instance. Pass `nil` for no initial data.

#### `CompleteChatCheckout(data)`

Create a new `CompleteChatCheckout` entity instance. Pass `nil` for no initial data.

#### `CreateBlackoutSora2Video(data)`

Create a new `CreateBlackoutSora2Video` entity instance. Pass `nil` for no initial data.

#### `CreateCarousel(data)`

Create a new `CreateCarousel` entity instance. Pass `nil` for no initial data.

#### `CreateProduct(data)`

Create a new `CreateProduct` entity instance. Pass `nil` for no initial data.

#### `CreateResetProductV6(data)`

Create a new `CreateResetProductV6` entity instance. Pass `nil` for no initial data.

#### `CreateSora2Video(data)`

Create a new `CreateSora2Video` entity instance. Pass `nil` for no initial data.

#### `CreateVariation(data)`

Create a new `CreateVariation` entity instance. Pass `nil` for no initial data.

#### `Customer(data)`

Create a new `Customer` entity instance. Pass `nil` for no initial data.

#### `CustomerHealth(data)`

Create a new `CustomerHealth` entity instance. Pass `nil` for no initial data.

#### `CustomerHealthAllCustomersItem(data)`

Create a new `CustomerHealthAllCustomersItem` entity instance. Pass `nil` for no initial data.

#### `CustomerHealthViewsSummary(data)`

Create a new `CustomerHealthViewsSummary` entity instance. Pass `nil` for no initial data.

#### `Daily(data)`

Create a new `Daily` entity instance. Pass `nil` for no initial data.

#### `DailyStatus(data)`

Create a new `DailyStatus` entity instance. Pass `nil` for no initial data.

#### `DedicatedAgentsDashboard(data)`

Create a new `DedicatedAgentsDashboard` entity instance. Pass `nil` for no initial data.

#### `EnterpriseAgent(data)`

Create a new `EnterpriseAgent` entity instance. Pass `nil` for no initial data.

#### `EnterpriseProduct(data)`

Create a new `EnterpriseProduct` entity instance. Pass `nil` for no initial data.

#### `ExactAvailability(data)`

Create a new `ExactAvailability` entity instance. Pass `nil` for no initial data.

#### `ExactFormula(data)`

Create a new `ExactFormula` entity instance. Pass `nil` for no initial data.

#### `ExtractV2(data)`

Create a new `ExtractV2` entity instance. Pass `nil` for no initial data.

#### `FailedPost(data)`

Create a new `FailedPost` entity instance. Pass `nil` for no initial data.

#### `File(data)`

Create a new `File` entity instance. Pass `nil` for no initial data.

#### `GenerateBlackoutSora2Prompt(data)`

Create a new `GenerateBlackoutSora2Prompt` entity instance. Pass `nil` for no initial data.

#### `GeneratePomelliDemo(data)`

Create a new `GeneratePomelliDemo` entity instance. Pass `nil` for no initial data.

#### `GeneratePrompt(data)`

Create a new `GeneratePrompt` entity instance. Pass `nil` for no initial data.

#### `GenerateSora2Prompt(data)`

Create a new `GenerateSora2Prompt` entity instance. Pass `nil` for no initial data.

#### `Healthrx(data)`

Create a new `Healthrx` entity instance. Pass `nil` for no initial data.

#### `InitResetProductV6(data)`

Create a new `InitResetProductV6` entity instance. Pass `nil` for no initial data.

#### `Iri(data)`

Create a new `Iri` entity instance. Pass `nil` for no initial data.

#### `IrisCapability(data)`

Create a new `IrisCapability` entity instance. Pass `nil` for no initial data.

#### `IrisChat(data)`

Create a new `IrisChat` entity instance. Pass `nil` for no initial data.

#### `IrisConnector(data)`

Create a new `IrisConnector` entity instance. Pass `nil` for no initial data.

#### `IrisStatus(data)`

Create a new `IrisStatus` entity instance. Pass `nil` for no initial data.

#### `IrisTask(data)`

Create a new `IrisTask` entity instance. Pass `nil` for no initial data.

#### `IrisUsage(data)`

Create a new `IrisUsage` entity instance. Pass `nil` for no initial data.

#### `Landing(data)`

Create a new `Landing` entity instance. Pass `nil` for no initial data.

#### `LandingStat(data)`

Create a new `LandingStat` entity instance. Pass `nil` for no initial data.

#### `LandingStatus(data)`

Create a new `LandingStatus` entity instance. Pass `nil` for no initial data.

#### `LinkInBio(data)`

Create a new `LinkInBio` entity instance. Pass `nil` for no initial data.

#### `LinkInDm(data)`

Create a new `LinkInDm` entity instance. Pass `nil` for no initial data.

#### `LinkInPost(data)`

Create a new `LinkInPost` entity instance. Pass `nil` for no initial data.

#### `LinkUser(data)`

Create a new `LinkUser` entity instance. Pass `nil` for no initial data.

#### `MediaAsset(data)`

Create a new `MediaAsset` entity instance. Pass `nil` for no initial data.

#### `Men(data)`

Create a new `Men` entity instance. Pass `nil` for no initial data.

#### `Microdrama(data)`

Create a new `Microdrama` entity instance. Pass `nil` for no initial data.

#### `MicrohubPublic(data)`

Create a new `MicrohubPublic` entity instance. Pass `nil` for no initial data.

#### `OnboardingStatus(data)`

Create a new `OnboardingStatus` entity instance. Pass `nil` for no initial data.

#### `OnboardingV6(data)`

Create a new `OnboardingV6` entity instance. Pass `nil` for no initial data.

#### `PaidUser(data)`

Create a new `PaidUser` entity instance. Pass `nil` for no initial data.

#### `Pexel(data)`

Create a new `Pexel` entity instance. Pass `nil` for no initial data.

#### `PhoneAdminAvailableAgentSource(data)`

Create a new `PhoneAdminAvailableAgentSource` entity instance. Pass `nil` for no initial data.

#### `Product(data)`

Create a new `Product` entity instance. Pass `nil` for no initial data.

#### `ProductDashboard(data)`

Create a new `ProductDashboard` entity instance. Pass `nil` for no initial data.

#### `ProductDashboardView(data)`

Create a new `ProductDashboardView` entity instance. Pass `nil` for no initial data.

#### `ProductDemo(data)`

Create a new `ProductDemo` entity instance. Pass `nil` for no initial data.

#### `ProductLanding(data)`

Create a new `ProductLanding` entity instance. Pass `nil` for no initial data.

#### `PublicResumeStatus(data)`

Create a new `PublicResumeStatus` entity instance. Pass `nil` for no initial data.

#### `ReRollVideo(data)`

Create a new `ReRollVideo` entity instance. Pass `nil` for no initial data.

#### `ReadRootGet(data)`

Create a new `ReadRootGet` entity instance. Pass `nil` for no initial data.

#### `RecordDemoBooked(data)`

Create a new `RecordDemoBooked` entity instance. Pass `nil` for no initial data.

#### `RefreshStat(data)`

Create a new `RefreshStat` entity instance. Pass `nil` for no initial data.

#### `RemixerClipper(data)`

Create a new `RemixerClipper` entity instance. Pass `nil` for no initial data.

#### `ResetProduct(data)`

Create a new `ResetProduct` entity instance. Pass `nil` for no initial data.

#### `RetryWebsiteScrape(data)`

Create a new `RetryWebsiteScrape` entity instance. Pass `nil` for no initial data.

#### `SaveSurvey(data)`

Create a new `SaveSurvey` entity instance. Pass `nil` for no initial data.

#### `ScanSocial(data)`

Create a new `ScanSocial` entity instance. Pass `nil` for no initial data.

#### `ScanSocialsPublic(data)`

Create a new `ScanSocialsPublic` entity instance. Pass `nil` for no initial data.

#### `ScanSocialsStatus(data)`

Create a new `ScanSocialsStatus` entity instance. Pass `nil` for no initial data.

#### `ScheduleV2(data)`

Create a new `ScheduleV2` entity instance. Pass `nil` for no initial data.

#### `Scrape(data)`

Create a new `Scrape` entity instance. Pass `nil` for no initial data.

#### `ScrapeWebsitePublic(data)`

Create a new `ScrapeWebsitePublic` entity instance. Pass `nil` for no initial data.

#### `ScrapedData(data)`

Create a new `ScrapedData` entity instance. Pass `nil` for no initial data.

#### `ScrapingStatus(data)`

Create a new `ScrapingStatus` entity instance. Pass `nil` for no initial data.

#### `SelfServeActivate(data)`

Create a new `SelfServeActivate` entity instance. Pass `nil` for no initial data.

#### `Seo(data)`

Create a new `Seo` entity instance. Pass `nil` for no initial data.

#### `SeoAiMention(data)`

Create a new `SeoAiMention` entity instance. Pass `nil` for no initial data.

#### `SeoBacklink(data)`

Create a new `SeoBacklink` entity instance. Pass `nil` for no initial data.

#### `SeoKeyword(data)`

Create a new `SeoKeyword` entity instance. Pass `nil` for no initial data.

#### `SeoOverview(data)`

Create a new `SeoOverview` entity instance. Pass `nil` for no initial data.

#### `SeoTraffic(data)`

Create a new `SeoTraffic` entity instance. Pass `nil` for no initial data.

#### `ShareAccessLink(data)`

Create a new `ShareAccessLink` entity instance. Pass `nil` for no initial data.

#### `Site(data)`

Create a new `Site` entity instance. Pass `nil` for no initial data.

#### `Slide(data)`

Create a new `Slide` entity instance. Pass `nil` for no initial data.

#### `SlugValidation(data)`

Create a new `SlugValidation` entity instance. Pass `nil` for no initial data.

#### `Social(data)`

Create a new `Social` entity instance. Pass `nil` for no initial data.

#### `SocialScanPreview(data)`

Create a new `SocialScanPreview` entity instance. Pass `nil` for no initial data.

#### `SocialScanProcess(data)`

Create a new `SocialScanProcess` entity instance. Pass `nil` for no initial data.

#### `SocialScanSave(data)`

Create a new `SocialScanSave` entity instance. Pass `nil` for no initial data.

#### `Sora2Avatar(data)`

Create a new `Sora2Avatar` entity instance. Pass `nil` for no initial data.

#### `Sora2AvatarAssetUpload(data)`

Create a new `Sora2AvatarAssetUpload` entity instance. Pass `nil` for no initial data.

#### `Sora2AvatarStat(data)`

Create a new `Sora2AvatarStat` entity instance. Pass `nil` for no initial data.

#### `Stat(data)`

Create a new `Stat` entity instance. Pass `nil` for no initial data.

#### `StatsRefreshBackfill(data)`

Create a new `StatsRefreshBackfill` entity instance. Pass `nil` for no initial data.

#### `StatsRefreshIssue(data)`

Create a new `StatsRefreshIssue` entity instance. Pass `nil` for no initial data.

#### `StatsRefreshOverview(data)`

Create a new `StatsRefreshOverview` entity instance. Pass `nil` for no initial data.

#### `StatsRefreshRunSummary(data)`

Create a new `StatsRefreshRunSummary` entity instance. Pass `nil` for no initial data.

#### `StatsRefreshTaskTrigger(data)`

Create a new `StatsRefreshTaskTrigger` entity instance. Pass `nil` for no initial data.

#### `Stripe(data)`

Create a new `Stripe` entity instance. Pass `nil` for no initial data.

#### `Style(data)`

Create a new `Style` entity instance. Pass `nil` for no initial data.

#### `Template(data)`

Create a new `Template` entity instance. Pass `nil` for no initial data.

#### `TikTokCreatorInfo(data)`

Create a new `TikTokCreatorInfo` entity instance. Pass `nil` for no initial data.

#### `TopPost(data)`

Create a new `TopPost` entity instance. Pass `nil` for no initial data.

#### `UploadPostAgent(data)`

Create a new `UploadPostAgent` entity instance. Pass `nil` for no initial data.

#### `User(data)`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `UserAgent(data)`

Create a new `UserAgent` entity instance. Pass `nil` for no initial data.

#### `UserHealthDetail(data)`

Create a new `UserHealthDetail` entity instance. Pass `nil` for no initial data.

#### `UserWithAvatarSubmission(data)`

Create a new `UserWithAvatarSubmission` entity instance. Pass `nil` for no initial data.

#### `UsersHealth(data)`

Create a new `UsersHealth` entity instance. Pass `nil` for no initial data.

#### `Video(data)`

Create a new `Video` entity instance. Pass `nil` for no initial data.

#### `VideoRemixerWorker(data)`

Create a new `VideoRemixerWorker` entity instance. Pass `nil` for no initial data.

#### `WatchdogRecovery(data)`

Create a new `WatchdogRecovery` entity instance. Pass `nil` for no initial data.

#### `WinningAd(data)`

Create a new `WinningAd` entity instance. Pass `nil` for no initial data.

#### `XAdaptation(data)`

Create a new `XAdaptation` entity instance. Pass `nil` for no initial data.

#### `ZerohumanAdminAccount(data)`

Create a new `ZerohumanAdminAccount` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## ActivateEntity

```lua
local activate = client:Activate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activated_at` | `any` | No |  |
| `message` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Activate():create({
  user_id = --[[ string ]],
  message = --[[ string ]],
  success = --[[ boolean ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActivateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActivateUserEntity

```lua
local activate_user = client:ActivateUser(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activated_at` | `any` | No |  |
| `message` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:ActivateUser():create({
  user_id = --[[ string ]],
  message = --[[ string ]],
  success = --[[ boolean ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActivateUserEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActiveOnboardingEntity

```lua
local active_onboarding = client:ActiveOnboarding(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_step` | `any` | No |  |
| `has_active_onboarding` | `boolean` | Yes |  |
| `onboarding_data_id` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:ActiveOnboarding():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActiveOnboardingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminEntity

```lua
local admin = client:Admin(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apply` | `boolean` | No | Apply safe canonical or clean-only URL updates |
| `count` | `number` | Yes |  |
| `created_at` | `string` | Yes |  |
| `date_from` | `any` | No |  |
| `date_to` | `any` | No |  |
| `email` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `include_failed` | `boolean` | No |  |
| `include_pending` | `boolean` | No |  |
| `include_records` | `boolean` | No | Include full per-field audit records in the response |
| `issue_ids` | `any` | No |  |
| `only_active` | `boolean` | No | Limit the audit to active agents |
| `platform` | `any` | No |  |
| `posting_method` | `any` | No |  |
| `product_id` | `string` | No |  |
| `query` | `any` | No |  |
| `reason` | `any` | No |  |
| `regenerate` | `boolean` | No |  |
| `status` | `string` | No |  |
| `user_membership` | `any` | No |  |
| `user_name` | `any` | No |  |
| `user_onboarding_step` | `any` | No |  |
| `video_type` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `apply` | - | - | - | - | - |
| `count` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `date_from` | - | - | Yes | - | - |
| `date_to` | - | - | Yes | - | - |
| `email` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `include_failed` | - | - | - | - | - |
| `include_pending` | - | - | - | - | - |
| `include_records` | - | - | - | - | - |
| `issue_ids` | - | - | - | - | - |
| `only_active` | - | - | - | - | - |
| `platform` | - | - | - | - | - |
| `posting_method` | - | - | - | - | - |
| `product_id` | - | - | Yes | - | - |
| `query` | - | - | - | - | - |
| `reason` | - | - | - | - | - |
| `regenerate` | - | - | - | - | - |
| `status` | - | - | - | - | - |
| `user_membership` | - | - | - | - | - |
| `user_name` | - | - | - | - | - |
| `user_onboarding_step` | - | - | - | - | - |
| `video_type` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Admin():create({
  user_id = --[[ string ]],
  count = --[[ number ]],
  created_at = --[[ string ]],
  date_from = --[[ any ]],
  date_to = --[[ any ]],
  email = --[[ string ]],
  id = --[[ string ]],
  product_id = --[[ string ]],
  video_type = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Admin():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:Admin():load({ date = "date" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:Admin():remove({ tester_id = "tester_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:Admin():update({
  agent_id = "agent_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminAccountResetEntity

```lua
local admin_account_reset = client:AdminAccountReset(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_ids` | `table` | Yes |  |
| `agent_ids_sha256` | `string` | Yes |  |
| `backup_sha256` | `string` | Yes |  |
| `batch_size` | `number` | No |  |
| `confirmation` | `string` | Yes |  |
| `customer_email` | `string` | Yes |  |
| `pc_name` | `string` | Yes |  |
| `phase` | `string` | No |  |
| `product_id` | `string` | Yes |  |
| `video_ids` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:AdminAccountReset():create({
  agent_ids = --[[ table ]],
  agent_ids_sha256 = --[[ string ]],
  backup_sha256 = --[[ string ]],
  confirmation = --[[ string ]],
  customer_email = --[[ string ]],
  pc_name = --[[ string ]],
  product_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminAccountResetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminCarouselEntity

```lua
local admin_carousel = client:AdminCarousel(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `string` | No |  |
| `batch_id` | `string` | No |  |
| `caption` | `string` | No |  |
| `content_base64` | `string` | No |  |
| `day` | `any` | No |  |
| `dry_run` | `boolean` | No |  |
| `engine_run` | `string` | No |  |
| `expected_revision` | `string` | Yes |  |
| `formula` | `table` | Yes |  |
| `formula_id` | `string` | No |  |
| `prompt` | `string` | Yes |  |
| `slides` | `table` | Yes |  |
| `title` | `string` | No |  |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `agent_id` | - | Yes | - |
| `batch_id` | - | Yes | - |
| `caption` | - | Yes | - |
| `content_base64` | - | - | - |
| `day` | - | Yes | - |
| `dry_run` | - | - | - |
| `engine_run` | - | - | - |
| `expected_revision` | - | - | - |
| `formula` | - | - | - |
| `formula_id` | - | Yes | - |
| `prompt` | - | - | - |
| `slides` | - | - | - |
| `title` | - | Yes | Yes |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:AdminCarousel():create({
  stage = --[[ string ]],
  agent_id = --[[ string ]],
  batch_id = --[[ string ]],
  caption = --[[ string ]],
  day = --[[ any ]],
  expected_revision = --[[ string ]],
  formula = --[[ table ]],
  formula_id = --[[ string ]],
  prompt = --[[ string ]],
  slides = --[[ table ]],
  title = --[[ string ]],
})
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:AdminCarousel():load({ batch_id = "batch_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:AdminCarousel():update({
  fmt = "fmt",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminCarouselEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminCarouselDemoReviewEntity

```lua
local admin_carousel_demo_review = client:AdminCarouselDemoReview(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `items` | `table` | Yes |  |
| `reason` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:AdminCarouselDemoReview():create({
  items = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:AdminCarouselDemoReview():load({ id = "admin_carousel_demo_review_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:AdminCarouselDemoReview():update({
  demo_review_id = "demo_review_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminCarouselDemoReviewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminCustomerEntity

```lua
local admin_customer = client:AdminCustomer(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `any` | No |  |
| `active_vireel_agents` | `number` | Yes |  |
| `agents` | `table` | Yes |  |
| `billing_source` | `string` | Yes |  |
| `contracted_agents` | `any` | No |  |
| `email` | `string` | Yes |  |
| `membership` | `any` | No |  |
| `name` | `string` | No |  |
| `pfa_only_agents` | `number` | Yes |  |
| `severity` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `subscription_status` | `any` | No |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AdminCustomer():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminCustomerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminCustomerSuccessEntity

```lua
local admin_customer_success = client:AdminCustomerSuccess(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_agents` | `number` | Yes |  |
| `active_products` | `number` | Yes |  |
| `agents_count` | `number` | Yes |  |
| `auto_schedule_status` | `string` | Yes |  |
| `days_until_period_end` | `any` | No |  |
| `email` | `string` | Yes |  |
| `feature_impact` | `string` | Yes |  |
| `last_notification_at` | `any` | No |  |
| `membership` | `any` | No |  |
| `name` | `string` | No |  |
| `notification_count` | `number` | Yes |  |
| `notification_events` | `table` | Yes |  |
| `priority` | `string` | Yes |  |
| `severity` | `string` | Yes |  |
| `status_label` | `string` | Yes |  |
| `subscription_current_period_end` | `any` | No |  |
| `subscription_status` | `any` | No |  |
| `upcoming_posts` | `number` | Yes |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AdminCustomerSuccess():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminCustomerSuccessEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminGeneratedVideoEntity

```lua
local admin_generated_video = client:AdminGeneratedVideo(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `string` | No |  |
| `agent_name` | `any` | No |  |
| `created_at` | `string` | Yes |  |
| `duration` | `number` | No |  |
| `generation_status` | `table` | No |  |
| `id` | `string` | Yes |  |
| `product_id` | `string` | No |  |
| `thumbnail_url` | `any` | No |  |
| `title` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updated_at` | `any` | No |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AdminGeneratedVideo():list({ user_id = "example" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminGeneratedVideoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminHealthrxEntity

```lua
local admin_healthrx = client:AdminHealthrx(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `delivery_enabled` | `boolean` | No |  |
| `id` | `string` | No |  |
| `option_id` | `string` | Yes |  |
| `plan` | `table` | Yes |  |
| `preparation_enabled` | `boolean` | No |  |
| `product_id` | `string` | Yes |  |
| `reason` | `string` | Yes |  |
| `request_key` | `string` | Yes |  |
| `revision` | `number` | Yes |  |
| `schedule_enabled` | `boolean` | No |  |
| `version` | `string` | Yes |  |
| `viewed` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:AdminHealthrx():create({
  action = --[[ string ]],
  option_id = --[[ string ]],
  plan = --[[ table ]],
  product_id = --[[ string ]],
  reason = --[[ string ]],
  request_key = --[[ string ]],
  version = --[[ string ]],
  viewed = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:AdminHealthrx():load({ item_id = "item_id", kind = "kind" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:AdminHealthrx():update({
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminHealthrxEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminInsightEntity

```lua
local admin_insight = client:AdminInsight(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer_success_cases` | `table` | Yes |  |
| `customers` | `table` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `pfa_database` | `table` | Yes |  |
| `recent_signups` | `table` | Yes |  |
| `summary` | `table` | Yes |  |
| `vireel_database` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AdminInsight():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:AdminInsight():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminInsightEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminLandingTaskEntity

```lua
local admin_landing_task = client:AdminLandingTask(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `task_id` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:AdminLandingTask():create({
  user_id = --[[ string ]],
  task_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminLandingTaskEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminMetricsSummaryEntity

```lua
local admin_metrics_summary = client:AdminMetricsSummary(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `paid_users_by_level` | `table` | Yes |  |
| `total_cancellations` | `number` | Yes |  |
| `total_previews_generated` | `number` | Yes |  |
| `total_signups` | `number` | Yes |  |
| `total_videos_generated` | `number` | Yes |  |
| `url_attempts` | `number` | Yes |  |
| `user_credits` | `table` | Yes |  |
| `user_gifted_credits` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AdminMetricsSummary():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminMetricsSummaryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminPostEntity

```lua
local admin_post = client:AdminPost(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_job_ids` | `any` | Yes |  |
| `agent_id` | `string` | Yes |  |
| `agent_name` | `any` | Yes |  |
| `agent_platform_urls` | `any` | Yes |  |
| `agent_url` | `any` | Yes |  |
| `comments` | `number` | Yes |  |
| `error_message` | `any` | Yes |  |
| `failed_at` | `any` | Yes |  |
| `id` | `string` | Yes |  |
| `instagram_posted_by` | `any` | Yes |  |
| `instagram_posted_url` | `any` | Yes |  |
| `instagram_scraped_social_post_id` | `string` | Yes |  |
| `is_instagram_posted` | `boolean` | Yes |  |
| `is_tiktok_posted` | `boolean` | Yes |  |
| `is_youtube_posted` | `boolean` | Yes |  |
| `last_refreshed_at` | `any` | Yes |  |
| `likes` | `number` | Yes |  |
| `platform_post_methods` | `any` | Yes |  |
| `platform_urls` | `any` | Yes |  |
| `post_method` | `any` | Yes |  |
| `post_platforms` | `any` | Yes |  |
| `post_url` | `any` | Yes |  |
| `posted_at` | `any` | Yes |  |
| `product_id` | `string` | Yes |  |
| `results_status` | `any` | Yes |  |
| `scheduled_datetime` | `string` | Yes |  |
| `source_type` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `tiktok_posted_by` | `any` | Yes |  |
| `tiktok_posted_url` | `any` | Yes |  |
| `tiktok_scraped_social_post_id` | `string` | Yes |  |
| `upload_post_error` | `any` | Yes |  |
| `upload_post_status` | `any` | Yes |  |
| `upload_post_uploads` | `any` | Yes |  |
| `user_email` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |
| `user_name` | `any` | Yes |  |
| `video_id` | `string` | Yes |  |
| `video_url` | `any` | Yes |  |
| `views` | `number` | Yes |  |
| `youtube_posted_by` | `any` | Yes |  |
| `youtube_posted_url` | `any` | Yes |  |
| `youtube_scraped_social_post_id` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AdminPost():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminPostEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminRecentSignupEntity

```lua
local admin_recent_signup = client:AdminRecentSignup(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `current_step` | `string` | Yes |  |
| `email` | `string` | No |  |
| `email_source` | `any` | No |  |
| `error_message` | `any` | No |  |
| `flow_variant` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `inactive_minutes` | `number` | Yes |  |
| `last_notification_at` | `any` | No |  |
| `last_seen_at` | `string` | Yes |  |
| `likely_cause` | `string` | Yes |  |
| `notification_count` | `number` | Yes |  |
| `notification_events` | `table` | Yes |  |
| `product_id` | `string` | No |  |
| `product_name` | `any` | No |  |
| `product_url` | `string` | Yes |  |
| `severity` | `string` | Yes |  |
| `social_scan_status` | `any` | No |  |
| `stage_label` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updated_at` | `any` | No |  |
| `website_scrape_status` | `any` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AdminRecentSignup():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminRecentSignupEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminSlideshowDiagEntity

```lua
local admin_slideshow_diag = client:AdminSlideshowDiag(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `string` | No |  |
| `batch_id` | `string` | No |  |
| `caption` | `string` | No |  |
| `content_base64` | `string` | No |  |
| `day` | `any` | No |  |
| `formula_id` | `string` | No |  |
| `id` | `string` | No |  |
| `title` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:AdminSlideshowDiag():create({
  id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminSlideshowDiagEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminSlideshowImportEntity

```lua
local admin_slideshow_import = client:AdminSlideshowImport(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `string` | Yes |  |
| `batch_id` | `string` | Yes |  |
| `caption` | `string` | Yes |  |
| `day` | `string` | Yes |  |
| `dry_run` | `boolean` | No |  |
| `engine_run` | `string` | No |  |
| `formula_id` | `string` | Yes |  |
| `slides` | `table` | Yes |  |
| `title` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:AdminSlideshowImport():create({
  agent_id = --[[ string ]],
  batch_id = --[[ string ]],
  caption = --[[ string ]],
  day = --[[ string ]],
  formula_id = --[[ string ]],
  slides = --[[ table ]],
  title = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:AdminSlideshowImport():load({ batch_id = "batch_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminSlideshowImportEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminUserViewEntity

```lua
local admin_user_view = client:AdminUserView(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `any` | No |  |
| `admin_notes` | `any` | No |  |
| `agents_count` | `number` | No |  |
| `created_at` | `string` | Yes |  |
| `credits` | `number` | Yes |  |
| `email` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `industry` | `any` | Yes |  |
| `is_admin` | `boolean` | No |  |
| `is_bookmarked` | `boolean` | No |  |
| `is_internal_user` | `boolean` | No |  |
| `membership` | `any` | Yes |  |
| `name` | `string` | Yes |  |
| `new_email` | `string` | Yes |  |
| `partner_external_user_id` | `string` | No |  |
| `partner_policy_code` | `any` | No |  |
| `partner_source` | `any` | No |  |
| `product_name` | `any` | Yes |  |
| `product_url` | `any` | Yes |  |
| `skip` | `boolean` | Yes |  |
| `subscription_details` | `any` | No |  |
| `subscription_status` | `any` | Yes |  |

### Field Usage by Operation

| Field | list | create | update | remove |
| --- | --- | --- | --- | --- |
| `account_type` | - | - | - | - |
| `admin_notes` | - | - | - | - |
| `agents_count` | - | - | - | - |
| `created_at` | - | - | - | - |
| `credits` | - | - | Yes | - |
| `email` | - | - | - | - |
| `id` | - | - | - | - |
| `industry` | - | - | - | - |
| `is_admin` | - | - | - | - |
| `is_bookmarked` | - | - | - | - |
| `is_internal_user` | - | - | - | - |
| `membership` | - | - | Yes | - |
| `name` | - | - | - | - |
| `new_email` | - | - | - | - |
| `partner_external_user_id` | - | - | - | - |
| `partner_policy_code` | - | - | - | - |
| `partner_source` | - | - | - | - |
| `product_name` | - | - | - | - |
| `product_url` | - | - | - | - |
| `skip` | - | - | - | - |
| `subscription_details` | - | - | - | - |
| `subscription_status` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:AdminUserView():create({
  user_id = --[[ string ]],
  created_at = --[[ string ]],
  credits = --[[ number ]],
  email = --[[ string ]],
  id = --[[ string ]],
  industry = --[[ any ]],
  membership = --[[ any ]],
  name = --[[ string ]],
  new_email = --[[ string ]],
  product_name = --[[ any ]],
  product_url = --[[ any ]],
  skip = --[[ boolean ]],
  subscription_status = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AdminUserView():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:AdminUserView():remove({ user_id = "user_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:AdminUserView():update({
  user_id = "user_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminUserViewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminUsersTableItemEntity

```lua
local admin_users_table_item = client:AdminUsersTableItem(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activated` | `boolean` | Yes |  |
| `agents_count` | `number` | No |  |
| `created_at` | `string` | Yes |  |
| `credits` | `number` | Yes |  |
| `demo_booked` | `boolean` | Yes |  |
| `email` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `membership` | `any` | Yes |  |
| `name` | `string` | Yes |  |
| `onboarding_flow` | `string` | Yes |  |
| `product_name` | `any` | Yes |  |
| `product_url` | `any` | Yes |  |
| `survey_data` | `any` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AdminUsersTableItem():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminUsersTableItemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminVideoRemixerEntity

```lua
local admin_video_remixer = client:AdminVideoRemixer(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity` | `string` | Yes |  |
| `allowed_platforms` | `table` | No |  |
| `anchor_clip_id` | `string` | No |  |
| `atomicity_class` | `any` | No |  |
| `auto_render` | `boolean` | No |  |
| `campaign_allowed` | `boolean` | No |  |
| `channel` | `string` | No |  |
| `channel_default` | `string` | No |  |
| `clip_id` | `string` | Yes |  |
| `clip_ids` | `table` | No |  |
| `collected_at` | `string` | Yes |  |
| `comments` | `any` | No |  |
| `completion_rate` | `any` | No |  |
| `confirmed_duplicate_of` | `any` | No |  |
| `consent_doc_uri` | `string` | No |  |
| `contact` | `string` | No |  |
| `conversions` | `any` | No |  |
| `count` | `number` | No |  |
| `creator` | `string` | No |  |
| `creator_id` | `string` | No |  |
| `crop_window` | `any` | No |  |
| `cta_product_id` | `string` | No |  |
| `days` | `number` | No |  |
| `derivative_edits_allowed` | `boolean` | No |  |
| `enabled` | `boolean` | No |  |
| `end_ms` | `any` | No |  |
| `enqueue` | `boolean` | No |  |
| `errors` | `table` | No |  |
| `evidence` | `string` | Yes |  |
| `expected_revision` | `any` | No |  |
| `expected_revisions` | `table` | Yes |  |
| `external_ai_allowed` | `boolean` | No |  |
| `file` | `string` | Yes |  |
| `followers` | `any` | No |  |
| `formula_id` | `string` | Yes |  |
| `formula_ids` | `table` | Yes |  |
| `handles` | `table` | No |  |
| `hook_subtype` | `any` | No |  |
| `hour_utc` | `number` | No |  |
| `human_role` | `string` | Yes |  |
| `idempotency_key` | `string` | Yes |  |
| `items` | `table` | Yes |  |
| `kim_clip_ids` | `table` | Yes |  |
| `kind` | `string` | Yes |  |
| `levels` | `table` | Yes |  |
| `likes` | `any` | No |  |
| `media_enabled` | `boolean` | Yes |  |
| `medical_claim_present` | `boolean` | No |  |
| `minute_utc` | `number` | No |  |
| `music_bed_allowed` | `boolean` | No |  |
| `music_policy` | `string` | No |  |
| `name` | `string` | Yes |  |
| `niche` | `string` | No |  |
| `notes` | `string` | No |  |
| `origin` | `string` | No |  |
| `owner_waiver` | `boolean` | No |  |
| `paid_ads_allowed` | `boolean` | No |  |
| `patient_identifiable` | `boolean` | No |  |
| `person_type` | `string` | No |  |
| `pipeline` | `boolean` | No |  |
| `planning_only` | `boolean` | No |  |
| `platform` | `string` | Yes |  |
| `platform_post_id` | `string` | Yes |  |
| `policy` | `table` | Yes |  |
| `polish` | `string` | No |  |
| `post_url` | `string` | Yes |  |
| `posted_at` | `string` | Yes |  |
| `primary_role` | `any` | No |  |
| `purpose` | `string` | Yes |  |
| `rate` | `number` | No |  |
| `rationale` | `string` | No |  |
| `reason` | `string` | Yes |  |
| `reference_source_id` | `string` | No |  |
| `requires_medical_review` | `boolean` | No |  |
| `review_status` | `any` | No |  |
| `revision` | `number` | Yes |  |
| `rights_expires_at` | `any` | No |  |
| `rights_status` | `string` | No |  |
| `run_id` | `string` | Yes |  |
| `sample_links` | `table` | No |  |
| `secondary_roles` | `any` | No |  |
| `seconds` | `number` | Yes |  |
| `seed` | `number` | No |  |
| `seed_base` | `number` | No |  |
| `sensitive_personal_data_present` | `boolean` | No |  |
| `shares` | `any` | No |  |
| `shoot` | `string` | No |  |
| `slots` | `table` | Yes |  |
| `soundbite_title` | `any` | No |  |
| `source` | `string` | Yes |  |
| `source_id` | `string` | Yes |  |
| `source_ids` | `table` | Yes |  |
| `spend_usd` | `any` | No |  |
| `spiciness` | `any` | No |  |
| `spiciness_notes` | `string` | No |  |
| `start_ms` | `any` | No |  |
| `status` | `string` | No |  |
| `terry_clip_ids` | `table` | Yes |  |
| `testimonial_strength` | `any` | No |  |
| `testimonial_type` | `any` | No |  |
| `tier` | `string` | No |  |
| `timeline` | `table` | Yes |  |
| `topic` | `string` | No |  |
| `topic_tags` | `any` | No |  |
| `total_target_ms` | `number` | Yes |  |
| `use_learned_weights` | `boolean` | No |  |
| `views` | `any` | No |  |
| `window` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | create | update | patch | remove |
| --- | --- | --- | --- | --- | --- |
| `activity` | - | - | - | - | - |
| `allowed_platforms` | - | - | - | - | - |
| `anchor_clip_id` | - | - | - | - | - |
| `atomicity_class` | - | - | - | - | - |
| `auto_render` | - | - | - | - | - |
| `campaign_allowed` | - | - | - | - | - |
| `channel` | - | - | - | - | - |
| `channel_default` | - | - | - | - | - |
| `clip_id` | - | - | - | - | - |
| `clip_ids` | - | - | - | - | - |
| `collected_at` | - | - | - | - | - |
| `comments` | - | - | - | - | - |
| `completion_rate` | - | - | - | - | - |
| `confirmed_duplicate_of` | - | - | - | - | - |
| `consent_doc_uri` | - | - | - | - | - |
| `contact` | - | - | - | - | - |
| `conversions` | - | - | - | - | - |
| `count` | - | - | - | - | - |
| `creator` | - | - | - | - | - |
| `creator_id` | - | - | - | - | - |
| `crop_window` | - | - | - | - | - |
| `cta_product_id` | - | - | - | - | - |
| `days` | - | - | - | - | - |
| `derivative_edits_allowed` | - | - | - | - | - |
| `enabled` | - | - | - | - | - |
| `end_ms` | - | - | - | - | - |
| `enqueue` | - | - | - | - | - |
| `errors` | - | - | - | - | - |
| `evidence` | - | - | - | - | - |
| `expected_revision` | - | - | Yes | - | - |
| `expected_revisions` | - | - | - | - | - |
| `external_ai_allowed` | - | - | - | - | - |
| `file` | - | - | - | - | - |
| `followers` | - | - | - | - | - |
| `formula_id` | - | - | - | - | - |
| `formula_ids` | - | - | - | - | - |
| `handles` | - | - | - | - | - |
| `hook_subtype` | - | - | - | - | - |
| `hour_utc` | - | - | - | - | - |
| `human_role` | - | - | - | - | - |
| `idempotency_key` | - | - | - | - | - |
| `items` | - | - | - | - | - |
| `kim_clip_ids` | - | - | - | - | - |
| `kind` | - | - | - | - | - |
| `levels` | - | - | - | - | - |
| `likes` | - | - | - | - | - |
| `media_enabled` | - | - | - | - | - |
| `medical_claim_present` | - | - | - | - | - |
| `minute_utc` | - | - | - | - | - |
| `music_bed_allowed` | - | - | - | - | - |
| `music_policy` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `niche` | - | - | - | - | - |
| `notes` | - | - | - | - | - |
| `origin` | - | - | - | - | - |
| `owner_waiver` | - | - | - | - | - |
| `paid_ads_allowed` | - | - | - | - | - |
| `patient_identifiable` | - | - | - | - | - |
| `person_type` | - | - | - | - | - |
| `pipeline` | - | - | - | - | - |
| `planning_only` | - | - | - | - | - |
| `platform` | - | - | - | - | - |
| `platform_post_id` | - | - | - | - | - |
| `policy` | - | - | - | - | - |
| `polish` | - | - | - | - | - |
| `post_url` | - | - | - | - | - |
| `posted_at` | - | - | - | - | - |
| `primary_role` | - | - | - | - | - |
| `purpose` | - | - | - | - | - |
| `rate` | - | - | - | - | - |
| `rationale` | - | - | - | - | - |
| `reason` | - | - | - | - | - |
| `reference_source_id` | - | - | - | - | - |
| `requires_medical_review` | - | - | - | - | - |
| `review_status` | - | - | - | - | - |
| `revision` | - | - | - | - | - |
| `rights_expires_at` | - | - | - | - | - |
| `rights_status` | - | - | - | - | - |
| `run_id` | - | - | - | - | - |
| `sample_links` | - | - | - | - | - |
| `secondary_roles` | - | - | - | - | - |
| `seconds` | - | - | - | - | - |
| `seed` | - | - | - | - | - |
| `seed_base` | - | - | - | - | - |
| `sensitive_personal_data_present` | - | - | - | - | - |
| `shares` | - | - | - | - | - |
| `shoot` | - | - | - | - | - |
| `slots` | - | - | - | - | - |
| `soundbite_title` | - | - | - | - | - |
| `source` | - | - | - | - | - |
| `source_id` | - | - | - | - | - |
| `source_ids` | - | - | - | - | - |
| `spend_usd` | - | - | - | - | - |
| `spiciness` | - | - | - | - | - |
| `spiciness_notes` | - | - | - | - | - |
| `start_ms` | - | - | - | - | - |
| `status` | - | - | - | - | - |
| `terry_clip_ids` | - | - | - | - | - |
| `testimonial_strength` | - | - | - | - | - |
| `testimonial_type` | - | - | - | - | - |
| `tier` | - | - | - | - | - |
| `timeline` | - | - | - | - | - |
| `topic` | - | - | - | - | - |
| `topic_tags` | - | - | - | - | - |
| `total_target_ms` | - | - | - | - | - |
| `use_learned_weights` | - | - | - | - | - |
| `views` | - | - | - | - | - |
| `window` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:AdminVideoRemixer():create({
  activity = --[[ string ]],
  clip_id = --[[ string ]],
  collected_at = --[[ string ]],
  evidence = --[[ string ]],
  expected_revisions = --[[ table ]],
  file = --[[ string ]],
  formula_id = --[[ string ]],
  formula_ids = --[[ table ]],
  human_role = --[[ string ]],
  idempotency_key = --[[ string ]],
  items = --[[ table ]],
  kim_clip_ids = --[[ table ]],
  kind = --[[ string ]],
  levels = --[[ table ]],
  media_enabled = --[[ boolean ]],
  name = --[[ string ]],
  platform = --[[ string ]],
  platform_post_id = --[[ string ]],
  policy = --[[ table ]],
  post_url = --[[ string ]],
  posted_at = --[[ string ]],
  purpose = --[[ string ]],
  reason = --[[ string ]],
  revision = --[[ number ]],
  run_id = --[[ string ]],
  seconds = --[[ number ]],
  slots = --[[ table ]],
  source = --[[ string ]],
  source_id = --[[ string ]],
  source_ids = --[[ table ]],
  terry_clip_ids = --[[ table ]],
  timeline = --[[ table ]],
  total_target_ms = --[[ number ]],
  window = --[[ string ]],
})
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:AdminVideoRemixer():load({ clip_id = "clip_id" })
```

#### `patch(reqdata, ctrl) -> any, err`

Change part of an existing entity: only the fields given are sent. The data must include the entity `id`. Returns the patched entity, or `nil` and an error on failure.

```lua
local result, err = client:AdminVideoRemixer():patch({
  -- Only the fields to change
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:AdminVideoRemixer():remove({ identifier = "identifier" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:AdminVideoRemixer():update({
  identifier = "identifier",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminVideoRemixerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdvanceStepEntity

```lua
local advance_step = client:AdvanceStep(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_step` | `string` | Yes |  |
| `onboarding_data_id` | `string` | Yes | UUID of the OnboardingData record |
| `success` | `boolean` | Yes |  |
| `to_step` | `string` | Yes | Target step name |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:AdvanceStep():create({
  onboarding_data_id = --[[ string ]],
  to_step = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdvanceStepEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentEntity

```lua
local agent = client:Agent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_connections` | `number` | Yes |  |
| `at_capacity` | `boolean` | Yes |  |
| `id` | `string` | Yes |  |
| `is_active` | `boolean` | Yes |  |
| `name` | `string` | Yes |  |
| `tiktok_stats` | `any` | No |  |
| `type` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Agent():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentAccessCustomersHealthEntity

```lua
local agent_access_customers_health = client:AgentAccessCustomersHealth(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountType` | `any` | No |  |
| `agentQuota` | `number` | Yes |  |
| `assignedAgentsByType` | `table` | Yes |  |
| `assignedAgentsTotal` | `number` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `email` | `string` | Yes |  |
| `isInternalUser` | `any` | No |  |
| `membership` | `any` | No |  |
| `name` | `string` | No |  |
| `performance` | `table` | Yes |  |
| `productCount` | `number` | Yes |  |
| `subscriptionCurrentPeriodEnd` | `any` | No |  |
| `subscriptionDetails` | `any` | No |  |
| `subscriptionStatus` | `any` | No |  |
| `usage` | `table` | Yes |  |
| `userId` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AgentAccessCustomersHealth():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentAccessCustomersHealthEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentAccessOverviewEntity

```lua
local agent_access_overview = client:AgentAccessOverview(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeUsers` | `number` | Yes |  |
| `generatedAt` | `string` | Yes |  |
| `newUsersYesterday` | `number` | Yes |  |
| `onboardingContextCounts` | `table` | Yes |  |
| `onboardingCurrentStepCounts` | `table` | Yes |  |
| `onboardingCurrentStepWindow` | `table` | Yes |  |
| `onboardingFlowVariantCounts` | `table` | Yes |  |
| `onboardingLockedUntilActivation` | `number` | Yes |  |
| `onboardingRecordsTotal` | `number` | Yes |  |
| `onboardingRecordsWindow` | `number` | Yes |  |
| `onboardingSocialScanStatusCounts` | `table` | Yes |  |
| `onboardingWebsiteScrapeStatusCounts` | `table` | Yes |  |
| `subscriptionStatusCounts` | `table` | Yes |  |
| `totalInternalUsers` | `number` | Yes |  |
| `totalUsers` | `number` | Yes |  |
| `trialStartedYesterday` | `number` | Yes |  |
| `trialingUsers` | `number` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:AgentAccessOverview():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentAccessOverviewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentAccessPhilHourlyNotificationEntity

```lua
local agent_access_phil_hourly_notification = client:AgentAccessPhilHourlyNotification(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `generatedAt` | `string` | Yes |  |
| `phoneHealth` | `table` | Yes |  |
| `scheduledPosts` | `table` | Yes |  |
| `targetDate` | `string` | Yes |  |
| `uploadPostInstagramHealth` | `table` | Yes |  |
| `uploadPostTiktokHealth` | `table` | Yes |  |
| `uploadPostYoutubeHealth` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:AgentAccessPhilHourlyNotification():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentAccessPhilHourlyNotificationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentAccessPhilStatsRefreshEntity

```lua
local agent_access_phil_stats_refresh = client:AgentAccessPhilStatsRefresh(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `generatedAt` | `string` | Yes |  |
| `statsRefresh` | `table` | Yes |  |
| `targetDate` | `string` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:AgentAccessPhilStatsRefresh():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentAccessPhilStatsRefreshEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentAccessPhilVideoEntity

```lua
local agent_access_phil_video = client:AgentAccessPhilVideo(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `generatedAt` | `string` | Yes |  |
| `targetDate` | `string` | Yes |  |
| `videos` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:AgentAccessPhilVideo():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentAccessPhilVideoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentAccessUserAgentEntity

```lua
local agent_access_user_agent = client:AgentAccessUserAgent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentQuota` | `number` | Yes |  |
| `agents` | `table` | Yes |  |
| `assignedByType` | `table` | Yes |  |
| `assignedTotal` | `number` | Yes |  |
| `email` | `string` | Yes |  |
| `products` | `table` | Yes |  |
| `userId` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AgentAccessUserAgent():list({ email = "example" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentAccessUserAgentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentAccessUserPhoneFarmEntity

```lua
local agent_access_user_phone_farm = client:AgentAccessUserPhoneFarm(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar` | `any` | No |  |
| `facebookUrl` | `any` | No |  |
| `id` | `string` | Yes |  |
| `instagramUrl` | `any` | No |  |
| `lastAdminSyncedAt` | `any` | No |  |
| `name` | `string` | Yes |  |
| `productId` | `any` | No |  |
| `productName` | `any` | No |  |
| `tiktokUrl` | `any` | No |  |
| `type` | `any` | No |  |
| `uploadPostPlatforms` | `any` | No |  |
| `youtubeUrl` | `any` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AgentAccessUserPhoneFarm():list({ email = "example" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentAccessUserPhoneFarmEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentAccessUserPostEntity

```lua
local agent_access_user_post = client:AgentAccessUserPost(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deltaYesterday` | `number` | Yes |  |
| `expectedVideosPerDay` | `number` | Yes |  |
| `postedToday` | `number` | Yes |  |
| `postedYesterday` | `number` | Yes |  |
| `productId` | `any` | No |  |
| `productName` | `any` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AgentAccessUserPost():list({ email = "example" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentAccessUserPostEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentAccessUserSummaryEntity

```lua
local agent_access_user_summary = client:AgentAccessUserSummary(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deletedAt` | `any` | No |  |
| `id` | `string` | Yes |  |
| `isActive` | `any` | No |  |
| `name` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AgentAccessUserSummary():list({ email = "example" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentAccessUserSummaryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentAccessUserVideoEntity

```lua
local agent_access_user_video = client:AgentAccessUserVideo(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allTime` | `table` | Yes |  |
| `email` | `string` | Yes |  |
| `today` | `table` | Yes |  |
| `userId` | `string` | Yes |  |
| `yesterday` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:AgentAccessUserVideo():load({ email = "email" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentAccessUserVideoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentAccessUserWinningAdEntity

```lua
local agent_access_user_winning_ad = client:AgentAccessUserWinningAd(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `productId` | `string` | Yes |  |
| `productName` | `string` | Yes |  |
| `winningAds` | `table` | Yes |  |
| `winningAdsCount` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AgentAccessUserWinningAd():list({ email = "example" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentAccessUserWinningAdEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentAccessWinningAdsSummaryEntity

```lua
local agent_access_winning_ads_summary = client:AgentAccessWinningAdsSummary(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes |  |
| `name` | `string` | No |  |
| `productCount` | `number` | Yes |  |
| `productsWithWinningAds` | `number` | Yes |  |
| `subscriptionStatus` | `any` | No |  |
| `totalWinningAds` | `number` | Yes |  |
| `userId` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AgentAccessWinningAdsSummary():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentAccessWinningAdsSummaryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentDetailEntity

```lua
local agent_detail = client:AgentDetail(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeConnections` | `any` | No |  |
| `assignedAt` | `any` | No |  |
| `avatar` | `string` | Yes |  |
| `bio` | `any` | No |  |
| `facebookUrl` | `any` | No |  |
| `id` | `string` | Yes |  |
| `instagramUrl` | `any` | No |  |
| `isActive` | `boolean` | No |  |
| `name` | `string` | Yes |  |
| `role` | `any` | No |  |
| `tiktokStats` | `any` | No |  |
| `tiktokUrl` | `any` | No |  |
| `type` | `string` | Yes |  |
| `uploadPostPlatforms` | `any` | No |  |
| `youtubeUrl` | `any` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AgentDetail():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:AgentDetail():update({
  upload_post_agent_id = "upload_post_agent_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentDetailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentHealthEntity

```lua
local agent_health = client:AgentHealth(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `daily` | `table` | Yes |  |
| `dates` | `table` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `groups` | `table` | Yes |  |
| `latest` | `table` | Yes |  |
| `live_date` | `any` | No |  |
| `phone_admin_generated_at` | `string` | Yes |  |
| `platform` | `string` | No |  |
| `post_target` | `number` | Yes |  |
| `qa_managed_agent_ids` | `table` | No |  |
| `scope_prefixes` | `table` | Yes |  |
| `timezone` | `string` | Yes |  |
| `warmup_target` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AgentHealth():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentHealthEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentHealthCustomerOptionEntity

```lua
local agent_health_customer_option = client:AgentHealthCustomerOption(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_count` | `number` | Yes |  |
| `email` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AgentHealthCustomerOption():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentHealthCustomerOptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentHealthDetailEntity

```lua
local agent_health_detail = client:AgentHealthDetail(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_issue_total` | `number` | No |  |
| `date` | `string` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `group_id` | `string` | Yes |  |
| `has_more` | `boolean` | Yes |  |
| `issue_total` | `number` | Yes |  |
| `issues` | `table` | Yes |  |
| `limit` | `number` | Yes |  |
| `metric` | `string` | Yes |  |
| `offset` | `number` | Yes |  |
| `warmup_runs` | `table` | No |  |
| `warning_total` | `number` | No |  |
| `warnings` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AgentHealthDetail():list({ date = "example", group_id = "example" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentHealthDetailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentPostEntity

```lua
local agent_post = client:AgentPost(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `number` | Yes |  |
| `error_message` | `any` | Yes |  |
| `id` | `string` | Yes |  |
| `likes` | `number` | Yes |  |
| `product_id` | `string` | Yes |  |
| `results` | `any` | Yes |  |
| `scheduled_datetime` | `string` | Yes |  |
| `source_type` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `user_email` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |
| `user_name` | `any` | Yes |  |
| `video_id` | `string` | Yes |  |
| `video_url` | `any` | Yes |  |
| `views` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AgentPost():list({ id = "example" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentPostEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentStatEntity

```lua
local agent_stat = client:AgentStat(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agents_needed` | `number` | Yes |  |
| `dedicated_agents` | `table` | Yes |  |
| `shared_agents` | `table` | Yes |  |
| `total_agents` | `number` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:AgentStat():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentStatEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentSummaryEntity

```lua
local agent_summary = client:AgentSummary(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_count` | `number` | Yes |  |
| `favicon_url` | `any` | No |  |
| `product_id` | `string` | Yes |  |
| `product_name` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AgentSummary():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentSummaryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentsSummaryEntity

```lua
local agents_summary = client:AgentsSummary(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `total_agents` | `number` | Yes |  |
| `total_agents_count_sum` | `number` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:AgentsSummary():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentsSummaryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AnalysisStatusEntity

```lua
local analysis_status = client:AnalysisStatus(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:AnalysisStatus():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AnalysisStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AnalyticsPostEntity

```lua
local analytics_post = client:AnalyticsPost(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent` | `any` | No |  |
| `comment` | `any` | No |  |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `product_id` | `string` | No |  |
| `queue_position` | `any` | No |  |
| `results` | `any` | No |  |
| `scheduled_datetime` | `string` | Yes |  |
| `scraped_posts` | `any` | No |  |
| `source_type` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `video` | `any` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AnalyticsPost():list({ date_from = "example" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AnalyticsPostEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AnalyzeProductEntity

```lua
local analyze_product = client:AnalyzeProduct(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instagram_username` | `any` | No |  |
| `message` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:AnalyzeProduct():create({
  url = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AnalyzeProductEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AssignAgentEntity

```lua
local assign_agent = client:AssignAgent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent` | `table` | Yes | Agent information for V6. |
| `assignment` | `table` | Yes | Assignment information for V6. |
| `mock_agents` | `table` | Yes |  |
| `onboarding_data_id` | `string` | Yes | UUID of the OnboardingData record |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:AssignAgent():create({
  onboarding_data_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AssignAgentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AuthEntity

```lua
local auth = client:Auth(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuthEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AutoScheduleSettingEntity

```lua
local auto_schedule_setting = client:AutoScheduleSetting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `can_enable_repost` | `boolean` | No |  |
| `effective_posted_video_reuse_percent` | `number` | Yes |  |
| `enabled_video_types` | `any` | No | List of enabled video type filters |
| `is_enabled` | `boolean` | Yes |  |
| `lock_video_regeneration_controls` | `boolean` | No |  |
| `membership_tier` | `string` | Yes |  |
| `posted_video_reuse_percent` | `any` | No |  |
| `product_id` | `string` | No |  |
| `repost_source` | `any` | No |  |
| `videos_per_day` | `number` | Yes |  |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `can_enable_repost` | - | - |
| `effective_posted_video_reuse_percent` | - | - |
| `enabled_video_types` | - | Yes |
| `is_enabled` | - | Yes |
| `lock_video_regeneration_controls` | - | - |
| `membership_tier` | - | - |
| `posted_video_reuse_percent` | - | - |
| `product_id` | - | - |
| `repost_source` | - | - |
| `videos_per_day` | - | - |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:AutoScheduleSetting():load()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:AutoScheduleSetting():update({
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AutoScheduleSettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BulkTikTokStatsUpdateEntity

```lua
local bulk_tik_tok_stats_update = client:BulkTikTokStatsUpdate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `failedIds` | `table` | Yes |  |
| `updatedCount` | `number` | Yes |  |
| `updates` | `table` | Yes |  |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:BulkTikTokStatsUpdate():update({
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BulkTikTokStatsUpdateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CarouselEntity

```lua
local carousel = client:Carousel(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `string` | Yes |  |
| `agent_name` | `string` | Yes |  |
| `audit_created_at` | `any` | No |  |
| `audit_snapshot_sha256` | `any` | No |  |
| `caption` | `any` | No |  |
| `comments` | `any` | No |  |
| `fit_score` | `any` | No |  |
| `format` | `string` | Yes |  |
| `formula` | `table` | No |  |
| `formula_id` | `string` | No |  |
| `formula_name` | `any` | No |  |
| `generation` | `table` | No |  |
| `id` | `string` | No |  |
| `image_prompt` | `any` | No |  |
| `likes` | `any` | No |  |
| `main_prompt` | `any` | No |  |
| `metrics_updated_at` | `any` | No |  |
| `post_url` | `any` | No |  |
| `profile_url` | `any` | No |  |
| `qa` | `table` | No |  |
| `qa_status` | `string` | Yes |  |
| `qa_verdict` | `any` | No |  |
| `quality_score` | `any` | No |  |
| `queue_id` | `string` | Yes |  |
| `relevance_score` | `any` | No |  |
| `scheduled_at` | `string` | Yes |  |
| `slide_count` | `number` | Yes |  |
| `slides` | `table` | Yes |  |
| `source` | `table` | No |  |
| `status` | `string` | Yes |  |
| `thumbnail_url` | `any` | No |  |
| `title` | `string` | Yes |  |
| `video_id` | `string` | Yes |  |
| `views` | `any` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Carousel():create({
  id = --[[ string ]],
  agent_id = --[[ string ]],
  agent_name = --[[ string ]],
  format = --[[ string ]],
  qa_status = --[[ string ]],
  queue_id = --[[ string ]],
  scheduled_at = --[[ string ]],
  slide_count = --[[ number ]],
  slides = --[[ table ]],
  status = --[[ string ]],
  title = --[[ string ]],
  video_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Carousel():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:Carousel():load({ id = "carousel_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CarouselEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CarouselAgentDetailEntity

```lua
local carousel_agent_detail = client:CarouselAgentDetail(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `string` | Yes |  |
| `agent_name` | `string` | Yes |  |
| `connection_status` | `any` | No |  |
| `followers` | `any` | No |  |
| `following` | `any` | No |  |
| `metrics_updated_at` | `any` | No |  |
| `phone_admin_status` | `string` | Yes |  |
| `profile_likes` | `any` | No |  |
| `profile_url` | `any` | No |  |
| `warmup_days` | `any` | No |  |
| `warmup_hold_until` | `any` | No |  |
| `warmup_status` | `string` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:CarouselAgentDetail():load({ agent_id = "agent_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CarouselAgentDetailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CarouselStatusEntity

```lua
local carousel_status = client:CarouselStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `caption` | `any` | Yes |  |
| `error` | `any` | No |  |
| `id` | `string` | No |  |
| `image_model` | `any` | No |  |
| `image_provider` | `any` | No |  |
| `image_task_id` | `string` | No |  |
| `image_url` | `any` | Yes |  |
| `index` | `number` | Yes |  |
| `prompt` | `any` | Yes |  |
| `status` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:CarouselStatus():list({ id = "example" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CarouselStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ChatEntity

```lua
local chat = client:Chat(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `idempotencyKey` | `string` | Yes |  |
| `message` | `string` | Yes |  |
| `sessionId` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Chat():create({
  session_id = --[[ string ]],
  idempotencyKey = --[[ string ]],
  message = --[[ string ]],
  sessionId = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChatEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ChatHistoryEntity

```lua
local chat_history = client:ChatHistory(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `chatSubVariant` | `string` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `messages` | `table` | Yes |  |
| `model` | `any` | No |  |
| `onboardingDataId` | `string` | Yes |  |
| `routeRecommendation` | `any` | No |  |
| `salesStage` | `string` | Yes |  |
| `selectedPlan` | `any` | No |  |
| `session` | `table` | Yes |  |
| `sessionId` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:ChatHistory():create({
  onboardingDataId = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:ChatHistory():load({ session_id = "session_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChatHistoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ChatSessionEntity

```lua
local chat_session = client:ChatSession(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `chatSubVariant` | `string` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `model` | `any` | No |  |
| `plan` | `any` | No |  |
| `route` | `any` | No |  |
| `routeRecommendation` | `any` | No |  |
| `salesStage` | `string` | Yes |  |
| `selectedPlan` | `any` | No |  |
| `sessionId` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:ChatSession():create({
  session_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChatSessionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CommentEntity

```lua
local comment = client:Comment(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:Comment():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CommentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CommentCampaignEntity

```lua
local comment_campaign = client:CommentCampaign(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_daily_limit` | `number` | No |  |
| `account_weekly_limit` | `number` | No |  |
| `action` | `string` | Yes |  |
| `active_days_per_week` | `number` | No |  |
| `agent_id` | `string` | Yes |  |
| `allowlist` | `table` | No |  |
| `analysis_daily_limit` | `number` | No |  |
| `analysis_model` | `string` | No |  |
| `analysis_reservation_usd` | `number` | No |  |
| `approved_markets` | `table` | No |  |
| `brand_forward_enabled` | `boolean` | No |  |
| `briefs` | `table` | No |  |
| `candidate_only` | `boolean` | No |  |
| `claims` | `table` | No |  |
| `cohort_removal_threshold` | `number` | No |  |
| `daily_cost_ceiling_usd` | `number` | No |  |
| `delivery_mode` | `string` | No |  |
| `disclosure_mode` | `string` | No |  |
| `disclosure_template` | `string` | No |  |
| `draft_options_count` | `number` | No |  |
| `draft_review_reservation_usd` | `number` | No |  |
| `exceptional_daily_cap_approved` | `boolean` | No |  |
| `execution_enabled` | `boolean` | No |  |
| `experiment_styles` | `table` | No |  |
| `inventory_factor` | `number` | No |  |
| `keywords` | `table` | No |  |
| `max_duration_seconds` | `any` | No |  |
| `metadata_pass_rate` | `number` | No |  |
| `min_interval_minutes` | `number` | No |  |
| `mode` | `string` | No |  |
| `monitored_creators` | `table` | No |  |
| `platform` | `string` | No |  |
| `platform_permission_evidence` | `string` | No |  |
| `policy_approved_by` | `string` | No |  |
| `policy_expires_at` | `any` | No |  |
| `policy_version` | `string` | No |  |
| `product_daily_limit` | `number` | No |  |
| `qualification_rate` | `number` | No |  |
| `raw_daily_limit` | `number` | No |  |
| `raw_result_reservation_usd` | `number` | No |  |
| `reason` | `string` | Yes |  |
| `replies_enabled` | `boolean` | No |  |
| `request_key` | `string` | Yes |  |
| `reviewer_model` | `string` | No |  |
| `scan_interval_hours` | `number` | No |  |
| `search_change_reason` | `string` | No |  |
| `search_effective_at` | `any` | No |  |
| `shadow_sample_limit` | `number` | No |  |
| `spent_seconds` | `any` | No |  |
| `task_ttl_hours` | `number` | No |  |
| `top_comment_analysis_enabled` | `boolean` | No |  |
| `writer_model` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:CommentCampaign():create({
  product_id = --[[ string ]],
  action = --[[ string ]],
  agent_id = --[[ string ]],
  reason = --[[ string ]],
  request_key = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:CommentCampaign():load({ product_id = "product_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:CommentCampaign():update({
  product_id = "product_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CommentCampaignEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CompleteChatCheckoutEntity

```lua
local complete_chat_checkout = client:CompleteChatCheckout(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `any` | No |  |
| `onboarding_data_id` | `string` | Yes |  |
| `product_id` | `string` | No |  |
| `ready` | `boolean` | No |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:CompleteChatCheckout():create({
  onboarding_data_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CompleteChatCheckoutEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreateBlackoutSora2VideoEntity

```lua
local create_blackout_sora2_video = client:CreateBlackoutSora2Video(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `main_prompt` | `string` | Yes |  |
| `media_asset_id` | `string` | Yes |  |
| `product_id` | `string` | Yes |  |
| `requires_polling` | `boolean` | No |  |
| `video` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:CreateBlackoutSora2Video():create({
  main_prompt = --[[ string ]],
  media_asset_id = --[[ string ]],
  product_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateBlackoutSora2VideoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreateCarouselEntity

```lua
local create_carousel = client:CreateCarousel(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `copy_mode` | `any` | No |  |
| `expected_owner_user_id` | `string` | No |  |
| `expected_product_id` | `string` | No |  |
| `expected_product_name` | `any` | No |  |
| `image_model` | `string` | No |  |
| `mention_product` | `boolean` | No |  |
| `message` | `string` | Yes |  |
| `num_slides` | `number` | No |  |
| `owner_user_id` | `string` | No |  |
| `product_id` | `string` | No | Product ID to use. |
| `product_name` | `any` | No |  |
| `product_placement` | `string` | No |  |
| `request_id` | `string` | No |  |
| `script_style_custom` | `any` | No |  |
| `script_style_id` | `string` | No |  |
| `selected_hook` | `any` | No |  |
| `status` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |
| `template_id` | `string` | Yes |  |
| `video_id` | `string` | Yes |  |
| `visual_style_custom` | `any` | No |  |
| `visual_style_id` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:CreateCarousel():create({
  template_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateCarouselEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreateProductEntity

```lua
local create_product = client:CreateProduct(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `onboarding_data_id` | `string` | Yes | UUID of the OnboardingData record |
| `product_id` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |
| `videos_queued` | `number` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:CreateProduct():create({
  onboarding_data_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateProductEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreateResetProductV6Entity

```lua
local create_reset_product_v6 = client:CreateResetProductV6(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agents_transferred` | `number` | Yes |  |
| `credits_deducted` | `number` | Yes |  |
| `onboarding_data_id` | `string` | Yes |  |
| `product_id` | `string` | Yes |  |
| `remaining_credits` | `number` | Yes |  |
| `success` | `boolean` | Yes |  |
| `videos_queued` | `number` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:CreateResetProductV6():create({
  onboarding_data_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateResetProductV6Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreateSora2VideoEntity

```lua
local create_sora2_video = client:CreateSora2Video(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `image_prompt` | `any` | No |  |
| `main_prompt` | `string` | Yes |  |
| `model` | `string` | No |  |
| `requires_polling` | `boolean` | No |  |
| `seconds` | `string` | No |  |
| `size` | `string` | No |  |
| `video` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:CreateSora2Video():create({
  main_prompt = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateSora2VideoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreateVariationEntity

```lua
local create_variation = client:CreateVariation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hook_duration` | `number` | Yes |  |
| `media_asset_id` | `string` | Yes |  |
| `message` | `string` | Yes |  |
| `product_id` | `string` | Yes |  |
| `prompt` | `string` | Yes |  |
| `task_id` | `string` | No |  |
| `video_id` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:CreateVariation():create({
  hook_duration = --[[ number ]],
  media_asset_id = --[[ string ]],
  product_id = --[[ string ]],
  prompt = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateVariationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomerEntity

```lua
local customer = client:Customer(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `any` | No |  |
| `assigned_agents_count` | `number` | Yes |  |
| `email` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `is_migrated` | `boolean` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Customer():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomerHealthEntity

```lua
local customer_health = client:CustomerHealth(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_agents` | `table` | Yes |  |
| `available_dates` | `table` | Yes |  |
| `date` | `string` | Yes |  |
| `email` | `string` | Yes |  |
| `entries` | `table` | Yes |  |
| `id` | `string` | No |  |
| `performance_overview` | `table` | Yes |  |
| `platform_coverage_summary` | `table` | Yes |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:CustomerHealth():load({ id = "customer_health_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerHealthEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomerHealthAllCustomersItemEntity

```lua
local customer_health_all_customers_item = client:CustomerHealthAllCustomersItem(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `any` | No |  |
| `assigned_agents_count` | `number` | Yes |  |
| `daily_stats` | `table` | Yes |  |
| `email` | `string` | Yes |  |
| `is_migrated` | `boolean` | No |  |
| `total_views` | `number` | Yes |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:CustomerHealthAllCustomersItem():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerHealthAllCustomersItemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomerHealthViewsSummaryEntity

```lua
local customer_health_views_summary = client:CustomerHealthViewsSummary(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `average_views_per_result` | `number` | Yes |  |
| `date` | `string` | Yes |  |
| `end_date` | `any` | No |  |
| `paid_users_count` | `number` | Yes |  |
| `posted_results` | `number` | Yes |  |
| `range` | `string` | Yes |  |
| `start_date` | `any` | No |  |
| `top_users` | `table` | Yes |  |
| `total_views` | `number` | Yes |  |
| `trend` | `table` | Yes |  |
| `trend_granularity` | `string` | Yes |  |
| `user_email` | `any` | No |  |
| `user_id` | `string` | No |  |
| `users_with_views` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:CustomerHealthViewsSummary():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerHealthViewsSummaryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DailyEntity

```lua
local daily = client:Daily(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Daily():create({
  id = --[[ string ]],
  day = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DailyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DailyStatusEntity

```lua
local daily_status = client:DailyStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:DailyStatus():load({ id = "daily_status_id", day = "day" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DailyStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DedicatedAgentsDashboardEntity

```lua
local dedicated_agents_dashboard = client:DedicatedAgentsDashboard(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_connections` | `number` | Yes |  |
| `assigned_user_id` | `string` | No |  |
| `assigned_user_ids` | `table` | No |  |
| `bio` | `any` | Yes |  |
| `id` | `string` | Yes |  |
| `instagram_url` | `any` | No |  |
| `is_active` | `boolean` | Yes |  |
| `last_admin_synced_at` | `any` | No |  |
| `name` | `string` | Yes |  |
| `role` | `any` | Yes |  |
| `tiktok_stats` | `any` | No |  |
| `tiktok_url` | `any` | No |  |
| `today_failed_entries` | `table` | No |  |
| `today_stats` | `table` | Yes |  |
| `upload_post_platforms` | `any` | No |  |
| `upload_post_profile` | `any` | No |  |
| `yesterday_failed_entries` | `table` | No |  |
| `yesterday_stats` | `table` | Yes |  |
| `youtube_url` | `any` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:DedicatedAgentsDashboard():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DedicatedAgentsDashboardEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EnterpriseAgentEntity

```lua
local enterprise_agent = client:EnterpriseAgent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes |  |
| `product_id` | `string` | Yes |  |
| `source_product_id` | `string` | Yes |  |
| `target_product_id` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `count` | - | Yes |
| `product_id` | - | - |
| `source_product_id` | - | - |
| `target_product_id` | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:EnterpriseAgent():create({
  product_id = --[[ string ]],
  source_product_id = --[[ string ]],
  target_product_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:EnterpriseAgent():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnterpriseAgentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EnterpriseProductEntity

```lua
local enterprise_product = client:EnterpriseProduct(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:EnterpriseProduct():load({ product_id = "product_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnterpriseProductEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ExactAvailabilityEntity

```lua
local exact_availability = client:ExactAvailability(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:ExactAvailability():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ExactAvailabilityEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ExactFormulaEntity

```lua
local exact_formula = client:ExactFormula(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:ExactFormula():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ExactFormulaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ExtractV2Entity

```lua
local extract_v2 = client:ExtractV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instagram_username` | `any` | No |  |
| `message` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:ExtractV2():create({
  url = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ExtractV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FailedPostEntity

```lua
local failed_post = client:FailedPost(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `string` | Yes |  |
| `agent_name` | `any` | Yes |  |
| `agent_platforms` | `any` | Yes |  |
| `error_message` | `any` | Yes |  |
| `id` | `string` | Yes |  |
| `product_id` | `string` | Yes |  |
| `results` | `any` | Yes |  |
| `scheduled_datetime` | `string` | Yes |  |
| `source_type` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `user_email` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |
| `user_name` | `any` | Yes |  |
| `video_id` | `string` | Yes |  |
| `video_url` | `any` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:FailedPost():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FailedPostEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FileEntity

```lua
local file = client:File(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:File():create({
  file = --[[ string ]],
})
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GenerateBlackoutSora2PromptEntity

```lua
local generate_blackout_sora2_prompt = client:GenerateBlackoutSora2Prompt(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `media_asset_id` | `string` | Yes |  |
| `product_id` | `string` | Yes |  |
| `prompt` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:GenerateBlackoutSora2Prompt():create({
  media_asset_id = --[[ string ]],
  product_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GenerateBlackoutSora2PromptEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GeneratePomelliDemoEntity

```lua
local generate_pomelli_demo = client:GeneratePomelliDemo(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_demo_count` | `number` | Yes |  |
| `max_demos` | `number` | No |  |
| `message` | `string` | Yes |  |
| `product_id` | `string` | Yes | UUID of the Product |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:GeneratePomelliDemo():create({
  product_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GeneratePomelliDemoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GeneratePromptEntity

```lua
local generate_prompt = client:GeneratePrompt(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hook_duration` | `number` | Yes |  |
| `media_asset_id` | `string` | Yes |  |
| `media_asset_url` | `string` | Yes |  |
| `prompt` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:GeneratePrompt():create({
  media_asset_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GeneratePromptEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GenerateSora2PromptEntity

```lua
local generate_sora2_prompt = client:GenerateSora2Prompt(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `prompt` | `string` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:GenerateSora2Prompt():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GenerateSora2PromptEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## HealthrxEntity

```lua
local healthrx = client:Healthrx(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | No |  |
| `action` | `string` | No |  |
| `agent_id` | `string` | Yes |  |
| `attempt` | `number` | Yes |  |
| `avatar_present` | `boolean` | No |  |
| `benchmark_set` | `string` | Yes |  |
| `commercial` | `boolean` | No |  |
| `commercial_license_evidence` | `string` | Yes |  |
| `content_id` | `string` | Yes |  |
| `dimensions` | `table` | Yes |  |
| `duration_seconds` | `number` | No |  |
| `evidence` | `string` | Yes |  |
| `evidence_urls` | `table` | Yes |  |
| `external_key` | `string` | Yes |  |
| `format` | `string` | No |  |
| `includes_all_attempt_costs` | `boolean` | No |  |
| `input_specification` | `table` | Yes |  |
| `kind` | `string` | Yes |  |
| `level` | `number` | No |  |
| `measured_at` | `string` | Yes |  |
| `model_version` | `string` | Yes |  |
| `paid_campaign_id` | `string` | No |  |
| `parent_content_id` | `string` | No |  |
| `paused` | `boolean` | Yes |  |
| `pillar` | `string` | Yes |  |
| `profile` | `table` | Yes |  |
| `promotion_evidence` | `string` | No |  |
| `provider` | `string` | Yes |  |
| `provider_invoice_evidence` | `string` | Yes |  |
| `reason` | `string` | Yes |  |
| `reference_version` | `string` | Yes |  |
| `request_key` | `string` | Yes |  |
| `scope` | `string` | No |  |
| `test_variable` | `string` | Yes |  |
| `topic` | `string` | Yes |  |
| `total_cost_usd` | `number` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Healthrx():create({
  product_id = --[[ string ]],
  agent_id = --[[ string ]],
  attempt = --[[ number ]],
  benchmark_set = --[[ string ]],
  commercial_license_evidence = --[[ string ]],
  dimensions = --[[ table ]],
  evidence = --[[ string ]],
  evidence_urls = --[[ table ]],
  external_key = --[[ string ]],
  input_specification = --[[ table ]],
  kind = --[[ string ]],
  measured_at = --[[ string ]],
  model_version = --[[ string ]],
  paused = --[[ boolean ]],
  pillar = --[[ string ]],
  profile = --[[ table ]],
  provider = --[[ string ]],
  provider_invoice_evidence = --[[ string ]],
  reason = --[[ string ]],
  reference_version = --[[ string ]],
  request_key = --[[ string ]],
  test_variable = --[[ string ]],
  topic = --[[ string ]],
  total_cost_usd = --[[ number ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:Healthrx():load({ product_id = "product_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HealthrxEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InitResetProductV6Entity

```lua
local init_reset_product_v6 = client:InitResetProductV6(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_schedule_disabled` | `boolean` | Yes |  |
| `old_product_id` | `string` | Yes |  |
| `product_id` | `string` | No |  |
| `queue_entries_cleared` | `number` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:InitResetProductV6():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InitResetProductV6Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IriEntity

```lua
local iri = client:Iri(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `correlationId` | `any` | No |  |
| `idempotencyKey` | `string` | Yes |  |
| `productId` | `any` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Iri():create({
  connector_id = --[[ string ]],
  idempotencyKey = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IriEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IrisCapabilityEntity

```lua
local iris_capability = client:IrisCapability(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `capability` | `string` | Yes |  |
| `correlationId` | `string` | Yes |  |
| `errorCode` | `any` | No |  |
| `externalProductId` | `any` | No |  |
| `externalUserId` | `string` | Yes |  |
| `id` | `string` | No |  |
| `idempotencyKey` | `string` | Yes |  |
| `input` | `table` | No |  |
| `membershipId` | `any` | No |  |
| `message` | `any` | No |  |
| `ok` | `boolean` | Yes |  |
| `platformAccountId` | `any` | No |  |
| `platformLinkId` | `any` | No |  |
| `productScope` | `string` | Yes |  |
| `requestedBy` | `table` | No |  |
| `result` | `table` | No |  |
| `retryable` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:IrisCapability():create({
  id = --[[ string ]],
  capability = --[[ string ]],
  correlationId = --[[ string ]],
  externalUserId = --[[ string ]],
  idempotencyKey = --[[ string ]],
  productScope = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IrisCapabilityEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IrisChatEntity

```lua
local iris_chat = client:IrisChat(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artifacts` | `table` | No |  |
| `correlationId` | `string` | Yes |  |
| `idempotencyKey` | `string` | Yes |  |
| `message` | `string` | Yes |  |
| `mode` | `string` | Yes |  |
| `ok` | `boolean` | No |  |
| `pageContext` | `table` | No |  |
| `productId` | `any` | No |  |
| `runtimeStatus` | `string` | Yes |  |
| `sessionId` | `any` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:IrisChat():create({
  correlationId = --[[ string ]],
  idempotencyKey = --[[ string ]],
  message = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IrisChatEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IrisConnectorEntity

```lua
local iris_connector = client:IrisConnector(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectors` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:IrisConnector():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IrisConnectorEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IrisStatusEntity

```lua
local iris_status = client:IrisStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectorsPreview` | `table` | No |  |
| `product` | `any` | No |  |
| `status` | `table` | Yes |  |
| `tasksPreview` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:IrisStatus():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IrisStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IrisTaskEntity

```lua
local iris_task = client:IrisTask(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approvalRequired` | `boolean` | No |  |
| `cadence` | `string` | No |  |
| `capability` | `any` | No |  |
| `completed` | `table` | No |  |
| `description` | `string` | No |  |
| `discover` | `table` | No |  |
| `productId` | `any` | No |  |
| `recurring` | `table` | No |  |
| `requiredConnectors` | `table` | No |  |
| `title` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:IrisTask():create({
  title = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:IrisTask():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IrisTaskEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IrisUsageEntity

```lua
local iris_usage = client:IrisUsage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `eventCount` | `number` | No |  |
| `events` | `table` | No |  |
| `membershipId` | `any` | No |  |
| `productScope` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:IrisUsage():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IrisUsageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LandingEntity

```lua
local landing = client:Landing(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Landing():create({
  index = --[[ number ]],
  file = --[[ string ]],
})
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LandingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LandingStatEntity

```lua
local landing_stat = client:LandingStat(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `landing` | `table` | Yes |  |
| `microhub` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:LandingStat():load({ slug = "slug" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LandingStatEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LandingStatusEntity

```lua
local landing_status = client:LandingStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errorMessage` | `any` | No |  |
| `landingStatus` | `string` | Yes |  |
| `microhubStatus` | `string` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:LandingStatus():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LandingStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LinkInBioEntity

```lua
local link_in_bio = client:LinkInBio(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `linkInBioType` | `string` | Yes |  |
| `redirectUrl` | `string` | Yes |  |
| `slug` | `string` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:LinkInBio():load({ slug = "slug" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LinkInBioEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LinkInDmEntity

```lua
local link_in_dm = client:LinkInDm(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `linkInDmsType` | `string` | Yes |  |
| `redirectUrl` | `string` | Yes |  |
| `slug` | `string` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:LinkInDm():load({ slug = "slug" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LinkInDmEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LinkInPostEntity

```lua
local link_in_post = client:LinkInPost(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `linkInPostsType` | `string` | Yes |  |
| `redirectUrl` | `string` | Yes |  |
| `showLinkInFirstComment` | `boolean` | Yes |  |
| `slug` | `string` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:LinkInPost():load({ slug = "slug" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LinkInPostEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LinkUserEntity

```lua
local link_user = client:LinkUser(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `already_linked` | `boolean` | No |  |
| `onboarding_data_id` | `string` | Yes | UUID of the OnboardingData record |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:LinkUser():create({
  onboarding_data_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LinkUserEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MediaAssetEntity

```lua
local media_asset = client:MediaAsset(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `description` | `string` | No |  |
| `file` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `media_assets` | `table` | Yes |  |
| `onboardingDataId` | `any` | No |  |
| `onboarding_data_id` | `string` | Yes |  |
| `productId` | `any` | No |  |
| `product_id` | `string` | No |  |
| `source` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `usedAt` | `any` | No |  |
| `veo3VideoId` | `any` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:MediaAsset():create({
  category = --[[ string ]],
  createdAt = --[[ string ]],
  file = --[[ string ]],
  id = --[[ string ]],
  media_assets = --[[ table ]],
  onboarding_data_id = --[[ string ]],
  source = --[[ string ]],
  type = --[[ string ]],
  updatedAt = --[[ string ]],
  url = --[[ string ]],
})
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:MediaAsset():load({ id = "media_asset_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MediaAssetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MenEntity

```lua
local men = client:Men(nil)
```

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Men():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MicrodramaEntity

```lua
local microdrama = client:Microdrama(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `evidence` | `table` | Yes |  |
| `expected_revision` | `number` | Yes |  |
| `idempotency_key` | `string` | Yes |  |
| `issues` | `table` | No |  |
| `reason` | `string` | Yes |  |
| `role` | `string` | Yes |  |
| `scores` | `table` | Yes |  |
| `selected_premise_id` | `string` | No |  |
| `stage` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `subject_hash` | `string` | Yes |  |
| `title` | `string` | No |  |
| `verdict` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Microdrama():create({
  episode_id = --[[ string ]],
  evidence = --[[ table ]],
  expected_revision = --[[ number ]],
  idempotency_key = --[[ string ]],
  reason = --[[ string ]],
  role = --[[ string ]],
  scores = --[[ table ]],
  stage = --[[ string ]],
  status = --[[ string ]],
  subject_hash = --[[ string ]],
  verdict = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:Microdrama():load({ episode_id = "episode_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:Microdrama():update({
  episode_id = "episode_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MicrodramaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MicrohubPublicEntity

```lua
local microhub_public = client:MicrohubPublic(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bio` | `any` | No |  |
| `ctaButtonText` | `any` | No |  |
| `ctaDescription` | `any` | No |  |
| `ctaLink` | `any` | No |  |
| `ctaTitle` | `any` | No |  |
| `headerImageUrl` | `any` | No |  |
| `links` | `table` | No |  |
| `name` | `string` | No |  |
| `profileImageUrl` | `any` | No |  |
| `slug` | `string` | Yes |  |
| `socialLinks` | `table` | No |  |
| `testimonials` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:MicrohubPublic():load({ slug = "slug" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MicrohubPublicEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OnboardingStatusEntity

```lua
local onboarding_status = client:OnboardingStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `number` | No |  |
| `cover_image_url` | `any` | No |  |
| `id` | `string` | Yes |  |
| `likes` | `number` | No |  |
| `platform` | `string` | Yes |  |
| `video_url` | `any` | No |  |
| `views` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:OnboardingStatus():list({ oid = "example" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OnboardingStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OnboardingV6Entity

```lua
local onboarding_v6 = client:OnboardingV6(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:OnboardingV6():remove({ media_asset_id = "media_asset_id", onboarding_data_id = "onboarding_data_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OnboardingV6Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PaidUserEntity

```lua
local paid_user = client:PaidUser(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agents_count` | `number` | Yes |  |
| `assigned_agents_count` | `number` | No |  |
| `auto_schedule_enabled` | `any` | Yes |  |
| `credits` | `number` | Yes |  |
| `effective_agents_count` | `number` | Yes |  |
| `email` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `is_internal_user` | `boolean` | No |  |
| `is_migrated_user` | `boolean` | No |  |
| `membership` | `any` | Yes |  |
| `scheduled_queue_count` | `number` | Yes |  |
| `subscription_details` | `any` | No |  |
| `subscription_status` | `any` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:PaidUser():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaidUserEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PexelEntity

```lua
local pexel = client:Pexel(nil)
```

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Pexel():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PexelEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PhoneAdminAvailableAgentSourceEntity

```lua
local phone_admin_available_agent_source = client:PhoneAdminAvailableAgentSource(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_count` | `number` | Yes |  |
| `pc_name` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:PhoneAdminAvailableAgentSource():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PhoneAdminAvailableAgentSourceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProductEntity

```lua
local product = client:Product(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_count` | `number` | Yes |  |
| `agents` | `table` | Yes |  |
| `createdAt` | `any` | No |  |
| `demoVideos` | `any` | No |  |
| `description` | `string` | No |  |
| `favicon_url` | `any` | No |  |
| `howItWorks` | `any` | No |  |
| `how_it_works` | `any` | No |  |
| `id` | `string` | Yes |  |
| `images` | `any` | No |  |
| `initial_agents` | `number` | No |  |
| `instagramHandle` | `any` | No |  |
| `instagram_handle` | `any` | No |  |
| `isActive` | `any` | No |  |
| `isApp` | `any` | No |  |
| `is_active` | `boolean` | Yes |  |
| `is_app` | `boolean` | No |  |
| `language` | `any` | No |  |
| `mediaAssets` | `any` | No |  |
| `media_asset_ids` | `any` | No |  |
| `media_assets` | `any` | No |  |
| `name` | `string` | Yes |  |
| `otherInstructions` | `any` | No |  |
| `other_instructions` | `any` | No |  |
| `outroVideo` | `any` | No |  |
| `pexelsVideos` | `any` | No |  |
| `pricing` | `any` | No |  |
| `pricingAndOffers` | `any` | No |  |
| `pricing_and_offers` | `any` | No |  |
| `product_demo_ids` | `table` | No |  |
| `product_details` | `table` | Yes | Product details for enterprise product creation |
| `product_id` | `string` | Yes |  |
| `product_name` | `string` | Yes |  |
| `product_url` | `string` | Yes |  |
| `pronunciation` | `any` | No |  |
| `regenerate_sora2` | `boolean` | No |  |
| `repostSource` | `any` | No |  |
| `repost_source` | `any` | No |  |
| `screenshot_url` | `any` | No |  |
| `social_post_ids` | `table` | No |  |
| `targetAudience` | `any` | No |  |
| `target_audience` | `any` | No |  |
| `templateProductId` | `any` | No |  |
| `tiktokHandle` | `any` | No |  |
| `tiktok_handle` | `any` | No |  |
| `total_count` | `number` | Yes |  |
| `updatedAt` | `any` | No |  |
| `url` | `string` | Yes |  |
| `userId` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `agent_count` | - | - | - | - | - |
| `agents` | - | - | - | - | - |
| `createdAt` | - | - | - | - | - |
| `demoVideos` | - | - | - | - | - |
| `description` | - | - | - | Yes | - |
| `favicon_url` | - | - | - | - | - |
| `howItWorks` | - | - | - | - | - |
| `how_it_works` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `images` | - | - | - | - | - |
| `initial_agents` | - | - | - | - | - |
| `instagramHandle` | - | - | - | - | - |
| `instagram_handle` | - | - | - | - | - |
| `isActive` | - | - | - | - | - |
| `isApp` | - | - | - | - | - |
| `is_active` | - | - | - | - | - |
| `is_app` | - | - | - | - | - |
| `language` | - | - | - | - | - |
| `mediaAssets` | - | - | - | - | - |
| `media_asset_ids` | - | - | - | - | - |
| `media_assets` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `otherInstructions` | - | - | - | - | - |
| `other_instructions` | - | - | - | - | - |
| `outroVideo` | - | - | - | - | - |
| `pexelsVideos` | - | - | - | - | - |
| `pricing` | - | - | - | - | - |
| `pricingAndOffers` | - | - | - | - | - |
| `pricing_and_offers` | - | - | - | - | - |
| `product_demo_ids` | - | - | - | - | - |
| `product_details` | - | - | - | - | - |
| `product_id` | - | - | - | - | - |
| `product_name` | - | - | - | - | - |
| `product_url` | - | - | - | - | - |
| `pronunciation` | - | - | - | - | - |
| `regenerate_sora2` | - | - | - | - | - |
| `repostSource` | - | - | - | - | - |
| `repost_source` | - | - | - | - | - |
| `screenshot_url` | - | - | - | - | - |
| `social_post_ids` | - | - | - | - | - |
| `targetAudience` | - | - | - | - | - |
| `target_audience` | - | - | - | - | - |
| `templateProductId` | - | - | - | - | - |
| `tiktokHandle` | - | - | - | - | - |
| `tiktok_handle` | - | - | - | - | - |
| `total_count` | - | - | - | - | - |
| `updatedAt` | - | - | - | - | - |
| `url` | - | - | - | Yes | - |
| `userId` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Product():create({
  product_details = --[[ table ]],
  product_url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Product():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:Product():load({ id = "product_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:Product():remove({ id = "product_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:Product():update({
  id = "product_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProductDashboardEntity

```lua
local product_dashboard = client:ProductDashboard(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agents` | `table` | Yes |  |
| `date` | `string` | Yes |  |
| `pagination` | `table` | Yes |  |
| `phone_admin_error` | `any` | No |  |
| `products` | `table` | Yes |  |
| `selected_product` | `any` | Yes |  |
| `summary` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:ProductDashboard():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductDashboardEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProductDashboardViewEntity

```lua
local product_dashboard_view = client:ProductDashboardView(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes |  |
| `views` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:ProductDashboardView():list({ product_id = "example" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductDashboardViewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProductDemoEntity

```lua
local product_demo = client:ProductDemo(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `description` | `string` | No |  |
| `id` | `string` | Yes |  |
| `source` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:ProductDemo():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductDemoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProductLandingEntity

```lua
local product_landing = client:ProductLanding(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bio` | `any` | No |  |
| `commentingOnMyPosts` | `boolean` | Yes |  |
| `commentingOnOthersPosts` | `boolean` | Yes |  |
| `ctaButtonText` | `any` | No |  |
| `ctaDescription` | `any` | No |  |
| `ctaLink` | `any` | No |  |
| `ctaTitle` | `any` | No |  |
| `dmCommenters` | `boolean` | Yes |  |
| `dmInitialMessagePrompt` | `any` | No |  |
| `dmOngoingResponsePrompt` | `any` | No |  |
| `firstCommentTextBeforeLink` | `any` | No |  |
| `headerImageUrl` | `any` | No |  |
| `id` | `string` | Yes |  |
| `landingHtmlUrl` | `any` | No |  |
| `landingLastGeneratedAt` | `any` | No |  |
| `landingReferenceScreenshotUrl` | `any` | No |  |
| `landingScreenshotUrl` | `any` | No |  |
| `landingStatus` | `string` | Yes |  |
| `landingUrl` | `string` | Yes |  |
| `linkInBioType` | `string` | Yes |  |
| `linkInDmsType` | `string` | Yes |  |
| `linkInPostsType` | `string` | Yes |  |
| `links` | `any` | No |  |
| `microhubBio` | `any` | No |  |
| `microhubCtaButtonText` | `any` | No |  |
| `microhubCtaDescription` | `any` | No |  |
| `microhubCtaLink` | `any` | No |  |
| `microhubCtaTitle` | `any` | No |  |
| `microhubHeaderImageUrl` | `any` | No |  |
| `microhubLinks` | `table` | No |  |
| `microhubName` | `any` | No |  |
| `microhubProfileImageUrl` | `any` | No |  |
| `microhubScreenshotUrl` | `any` | No |  |
| `microhubSocialLinks` | `table` | No |  |
| `microhubStatus` | `string` | Yes |  |
| `microhubTestimonials` | `table` | No |  |
| `microhubUrl` | `string` | Yes |  |
| `myPostsStylePrompt` | `any` | No |  |
| `name` | `string` | No |  |
| `othersStylePrompt` | `any` | No |  |
| `othersTargetMarketPrompt` | `any` | No |  |
| `productLinkSelection` | `string` | Yes |  |
| `productUrl` | `any` | No |  |
| `profileImageUrl` | `any` | No |  |
| `shortLink` | `any` | No |  |
| `shortLinkKeyword` | `any` | No |  |
| `showLinkInFirstComment` | `boolean` | Yes |  |
| `slug` | `string` | Yes |  |
| `socialLinks` | `any` | No |  |
| `testimonials` | `any` | No |  |

### Field Usage by Operation

| Field | list | update |
| --- | --- | --- |
| `bio` | - | - |
| `commentingOnMyPosts` | - | Yes |
| `commentingOnOthersPosts` | - | Yes |
| `ctaButtonText` | - | - |
| `ctaDescription` | - | - |
| `ctaLink` | - | - |
| `ctaTitle` | - | - |
| `dmCommenters` | - | Yes |
| `dmInitialMessagePrompt` | - | - |
| `dmOngoingResponsePrompt` | - | - |
| `firstCommentTextBeforeLink` | - | - |
| `headerImageUrl` | - | - |
| `id` | - | - |
| `landingHtmlUrl` | - | - |
| `landingLastGeneratedAt` | - | - |
| `landingReferenceScreenshotUrl` | - | - |
| `landingScreenshotUrl` | - | - |
| `landingStatus` | - | - |
| `landingUrl` | - | - |
| `linkInBioType` | - | Yes |
| `linkInDmsType` | - | Yes |
| `linkInPostsType` | - | Yes |
| `links` | - | - |
| `microhubBio` | - | - |
| `microhubCtaButtonText` | - | - |
| `microhubCtaDescription` | - | - |
| `microhubCtaLink` | - | - |
| `microhubCtaTitle` | - | - |
| `microhubHeaderImageUrl` | - | - |
| `microhubLinks` | - | - |
| `microhubName` | - | - |
| `microhubProfileImageUrl` | - | - |
| `microhubScreenshotUrl` | - | - |
| `microhubSocialLinks` | - | - |
| `microhubStatus` | - | - |
| `microhubTestimonials` | - | - |
| `microhubUrl` | - | - |
| `myPostsStylePrompt` | - | - |
| `name` | - | - |
| `othersStylePrompt` | - | - |
| `othersTargetMarketPrompt` | - | - |
| `productLinkSelection` | - | Yes |
| `productUrl` | - | - |
| `profileImageUrl` | - | - |
| `shortLink` | - | - |
| `shortLinkKeyword` | - | - |
| `showLinkInFirstComment` | - | Yes |
| `slug` | - | Yes |
| `socialLinks` | - | - |
| `testimonials` | - | - |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:ProductLanding():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:ProductLanding():update({
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductLandingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PublicResumeStatusEntity

```lua
local public_resume_status = client:PublicResumeStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `can_resume_prelogin` | `boolean` | No |  |
| `content_collection_ready` | `boolean` | No |  |
| `current_step` | `any` | No |  |
| `exists` | `boolean` | Yes |  |
| `flow_variant` | `any` | No |  |
| `repost_content_count` | `number` | No |  |
| `repost_source` | `any` | No |  |
| `requires_repost_content` | `boolean` | No |  |
| `skip_demo` | `boolean` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:PublicResumeStatus():load({ oid = "oid" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PublicResumeStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReRollVideoEntity

```lua
local re_roll_video = client:ReRollVideo(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `queue_id` | `string` | Yes |  |
| `requires_polling` | `boolean` | No |  |
| `skip_credit_check` | `boolean` | No |  |
| `video` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:ReRollVideo():create({
  queue_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReRollVideoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReadRootGetEntity

```lua
local read_root_get = client:ReadRootGet(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:ReadRootGet():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReadRootGetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RecordDemoBookedEntity

```lua
local record_demo_booked = client:RecordDemoBooked(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calendlyEventUri` | `any` | No |  |
| `calendlyInviteeUri` | `any` | No |  |
| `message` | `table` | Yes |  |
| `session` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:RecordDemoBooked():create({
  session_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RecordDemoBookedEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RefreshStatEntity

```lua
local refresh_stat = client:RefreshStat(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date_from` | `any` | No | Start date to refresh stats for (defaults to yesterday) |
| `date_to` | `any` | No | End date to refresh stats for (defaults to date_from) |
| `entries_found` | `number` | Yes |  |
| `message` | `string` | Yes |  |
| `provider` | `string` | Yes | Scraping provider to use |
| `status` | `string` | Yes |  |
| `summary` | `any` | No |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `date_from` | - |
| `date_to` | - |
| `entries_found` | - |
| `message` | - |
| `provider` | Yes |
| `status` | - |
| `summary` | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:RefreshStat():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RefreshStatEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RemixerClipperEntity

```lua
local remixer_clipper = client:RemixerClipper(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:RemixerClipper():create({
  identifier = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:RemixerClipper():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RemixerClipperEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ResetProductEntity

```lua
local reset_product = client:ResetProduct(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:ResetProduct():create({
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:ResetProduct():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResetProductEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RetryWebsiteScrapeEntity

```lua
local retry_website_scrape = client:RetryWebsiteScrape(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `flow_variant` | `string` | No |  |
| `onboarding_data_id` | `string` | Yes | UUID of existing OnboardingData |
| `skip_demo` | `boolean` | No |  |
| `status` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |
| `url` | `string` | Yes | New website URL to scrape |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:RetryWebsiteScrape():create({
  onboarding_data_id = --[[ string ]],
  url = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RetryWebsiteScrapeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SaveSurveyEntity

```lua
local save_survey = client:SaveSurvey(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email_sent` | `boolean` | No |  |
| `onboarding_data_id` | `string` | Yes | UUID of the OnboardingData record |
| `success` | `boolean` | Yes |  |
| `survey` | `table` | Yes | Survey response data from frontend. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:SaveSurvey():create({
  onboarding_data_id = --[[ string ]],
  survey = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SaveSurveyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ScanSocialEntity

```lua
local scan_social = client:ScanSocial(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instagram_handle` | `any` | No |  |
| `onboarding_data_id` | `string` | Yes |  |
| `product_id` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |
| `task_id` | `string` | No |  |
| `tiktok_handle` | `any` | No |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `instagram_handle` | - |
| `onboarding_data_id` | - |
| `product_id` | Yes |
| `status` | - |
| `success` | - |
| `task_id` | - |
| `tiktok_handle` | Yes |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:ScanSocial():create({
  onboarding_data_id = --[[ string ]],
  tiktok_handle = --[[ any ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScanSocialEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ScanSocialsPublicEntity

```lua
local scan_socials_public = client:ScanSocialsPublic(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instagram_handle` | `any` | No | Instagram username/handle to scrape |
| `message` | `any` | No |  |
| `onboarding_data_id` | `string` | Yes | UUID of the OnboardingData record |
| `status` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |
| `tiktok_handle` | `any` | No | TikTok username/handle to scrape |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:ScanSocialsPublic():create({
  onboarding_data_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScanSocialsPublicEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ScanSocialsStatusEntity

```lua
local scan_socials_status = client:ScanSocialsStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ads_count` | `number` | No |  |
| `onboarding_data_id` | `string` | Yes |  |
| `product_id` | `string` | No |  |
| `status` | `string` | Yes |  |
| `task_id` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:ScanSocialsStatus():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScanSocialsStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ScheduleV2Entity

```lua
local schedule_v2 = client:ScheduleV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent` | `any` | No |  |
| `comment` | `any` | No |  |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `instagram_posted_by` | `any` | No |  |
| `instagram_posted_url` | `any` | No |  |
| `instagram_scraped_social_post_id` | `string` | No |  |
| `is_instagram_posted` | `boolean` | No |  |
| `is_tiktok_posted` | `boolean` | No |  |
| `is_youtube_posted` | `boolean` | No |  |
| `reorders` | `table` | Yes |  |
| `results` | `any` | No |  |
| `scheduled_datetime` | `string` | Yes |  |
| `source_type` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `tiktok_posted_by` | `any` | No |  |
| `tiktok_posted_url` | `any` | No |  |
| `tiktok_scraped_social_post_id` | `string` | No |  |
| `video` | `any` | No |  |
| `video_id` | `string` | Yes |  |
| `youtube_posted_by` | `any` | No |  |
| `youtube_posted_url` | `any` | No |  |
| `youtube_scraped_social_post_id` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:ScheduleV2():create({
  created_at = --[[ string ]],
  id = --[[ string ]],
  reorders = --[[ table ]],
  scheduled_datetime = --[[ string ]],
  source_type = --[[ string ]],
  status = --[[ string ]],
  video_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:ScheduleV2():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:ScheduleV2():load()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:ScheduleV2():remove({ queue_id = "queue_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:ScheduleV2():update({
  queue_id = "queue_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScheduleV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ScrapeEntity

```lua
local scrape = client:Scrape(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `old_product_id` | `string` | Yes |  |
| `onboarding_data_id` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Scrape():create({
  old_product_id = --[[ string ]],
  url = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScrapeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ScrapeWebsitePublicEntity

```lua
local scrape_website_public = client:ScrapeWebsitePublic(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `flow_variant` | `string` | No |  |
| `onboarding_data_id` | `string` | Yes | UUID of created OnboardingData |
| `skip_demo` | `boolean` | No | True for self-serve users (skip demo booking) |
| `status` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |
| `url` | `string` | Yes | Website URL to scrape |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:ScrapeWebsitePublic():create({
  url = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScrapeWebsitePublicEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ScrapedDataEntity

```lua
local scraped_data = client:ScrapedData(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes |  |
| `homepageVideoUrl` | `any` | No |  |
| `howItWorks` | `string` | Yes |  |
| `imageUrls` | `table` | Yes |  |
| `instagram_username` | `any` | No |  |
| `mediaAssets` | `table` | No |  |
| `name` | `string` | Yes |  |
| `pricingAndOffers` | `string` | Yes |  |
| `targetAudience` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:ScrapedData():create({
  url = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScrapedDataEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ScrapingStatusEntity

```lua
local scraping_status = client:ScrapingStatus(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:ScrapingStatus():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScrapingStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SelfServeActivateEntity

```lua
local self_serve_activate = client:SelfServeActivate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `onboarding_data_id` | `string` | Yes | UUID of the OnboardingData record |
| `redirect_to_stripe` | `boolean` | No |  |
| `stripe_checkout_url` | `any` | No |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:SelfServeActivate():create({
  onboarding_data_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SelfServeActivateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SeoEntity

```lua
local seo = client:Seo(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:Seo():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SeoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SeoAiMentionEntity

```lua
local seo_ai_mention = client:SeoAiMention(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bucket` | `string` | Yes |  |
| `domain_type` | `string` | Yes |  |
| `dominant_domain` | `string` | Yes |  |
| `engine` | `string` | Yes |  |
| `evidence` | `table` | Yes |  |
| `geo` | `string` | Yes |  |
| `language` | `string` | Yes |  |
| `primary_url` | `string` | Yes |  |
| `prompt_text` | `string` | Yes |  |
| `run_week` | `string` | Yes |  |
| `secondary_urls` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:SeoAiMention():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SeoAiMentionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SeoBacklinkEntity

```lua
local seo_backlink = client:SeoBacklink(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anchor_text` | `string` | Yes |  |
| `first_seen` | `string` | Yes |  |
| `referring_domain` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `target_page` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:SeoBacklink():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SeoBacklinkEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SeoKeywordEntity

```lua
local seo_keyword = client:SeoKeyword(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blog_page` | `string` | Yes |  |
| `current_position` | `number` | Yes |  |
| `keyword` | `string` | Yes |  |
| `keyword_group` | `string` | Yes |  |
| `position_change` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:SeoKeyword():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SeoKeywordEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SeoOverviewEntity

```lua
local seo_overview = client:SeoOverview(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clicks` | `number` | Yes |  |
| `ctr` | `number` | Yes |  |
| `date` | `string` | Yes |  |
| `impressions` | `number` | Yes |  |
| `position` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:SeoOverview():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SeoOverviewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SeoTrafficEntity

```lua
local seo_traffic = client:SeoTraffic(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_date` | `string` | Yes |  |
| `series` | `table` | Yes |  |
| `site_url` | `string` | Yes |  |
| `start_date` | `string` | Yes |  |
| `top_countries` | `table` | Yes |  |
| `top_pages` | `table` | Yes |  |
| `top_queries` | `table` | Yes |  |
| `totals` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:SeoTraffic():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SeoTrafficEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ShareAccessLinkEntity

```lua
local share_access_link = client:ShareAccessLink(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `share_token` | `string` | Yes |  |
| `share_url` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:ShareAccessLink():create({
  share_token = --[[ string ]],
  share_url = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ShareAccessLinkEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SiteEntity

```lua
local site = client:Site(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:Site():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SiteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SlideEntity

```lua
local slide = client:Slide(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `caption` | `any` | No |  |
| `id` | `string` | No |  |
| `prompt` | `any` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Slide():create({
  carousel_id = --[[ string ]],
  slide_index = --[[ number ]],
})
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:Slide():update({
  carousel_id = "carousel_id",
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SlideEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SlugValidationEntity

```lua
local slug_validation = client:SlugValidation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `reason` | `any` | No |  |
| `valid` | `boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:SlugValidation():load({ slug = "slug" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SlugValidationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SocialEntity

```lua
local social = client:Social(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | Yes |  |
| `code_verifier` | `string` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `platform` | `string` | Yes |  |
| `platformUserId` | `string` | Yes |  |
| `updatedAt` | `any` | No |  |
| `userId` | `string` | Yes |  |
| `username` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Social():create({
  code = --[[ string ]],
  code_verifier = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Social():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:Social():load()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:Social():remove({ platform = "platform" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SocialEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SocialScanPreviewEntity

```lua
local social_scan_preview = client:SocialScanPreview(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instagram_handle` | `any` | No | Instagram username/handle to scrape |
| `posts` | `table` | Yes |  |
| `success` | `boolean` | Yes |  |
| `tiktok_handle` | `any` | No | TikTok username/handle to scrape |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:SocialScanPreview():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SocialScanPreviewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SocialScanProcessEntity

```lua
local social_scan_process = client:SocialScanProcess(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `posts` | `table` | Yes |  |
| `product_id` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |
| `task_id` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:SocialScanProcess():create({
  posts = --[[ table ]],
  product_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SocialScanProcessEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SocialScanSaveEntity

```lua
local social_scan_save = client:SocialScanSave(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `media_asset_ids` | `table` | Yes |  |
| `posts` | `table` | Yes |  |
| `product_id` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:SocialScanSave():create({
  posts = --[[ table ]],
  product_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SocialScanSaveEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Sora2AvatarEntity

```lua
local sora2_avatar = client:Sora2Avatar(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_frame_url` | `any` | No |  |
| `created_at` | `string` | Yes |  |
| `current_step` | `number` | No |  |
| `headshot_url` | `any` | No |  |
| `id` | `string` | Yes |  |
| `logs` | `table` | No |  |
| `prompt_key` | `string` | Yes |  |
| `run_output_dir` | `any` | No |  |
| `selected_age_bucket` | `string` | Yes |  |
| `selected_gender` | `string` | Yes |  |
| `selected_prompt` | `any` | No |  |
| `selected_race` | `string` | Yes |  |
| `sora2_cameo_handle` | `any` | No |  |
| `sora2_cameo_id` | `string` | No |  |
| `sora2_cameo_link` | `any` | No |  |
| `sora2_display_name` | `any` | No |  |
| `sora2_task_id` | `string` | No |  |
| `sora2_video_url` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `avatar_frame_url` | - | - | - | - |
| `created_at` | - | - | - | - |
| `current_step` | - | - | - | - |
| `headshot_url` | - | - | - | - |
| `id` | - | - | - | - |
| `logs` | - | - | - | - |
| `prompt_key` | - | - | - | Yes |
| `run_output_dir` | - | - | - | - |
| `selected_age_bucket` | - | - | - | Yes |
| `selected_gender` | - | - | - | Yes |
| `selected_prompt` | - | - | - | - |
| `selected_race` | - | - | - | Yes |
| `sora2_cameo_handle` | - | - | - | - |
| `sora2_cameo_id` | - | - | - | - |
| `sora2_cameo_link` | - | - | - | - |
| `sora2_display_name` | - | - | - | - |
| `sora2_task_id` | - | - | - | - |
| `sora2_video_url` | - | - | - | Yes |
| `updated_at` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Sora2Avatar():create({
  prompt_key = --[[ string ]],
  selected_age_bucket = --[[ string ]],
  selected_gender = --[[ string ]],
  selected_race = --[[ string ]],
  sora2_video_url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Sora2Avatar():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:Sora2Avatar():load({ id = "sora2_avatar_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:Sora2Avatar():update({
  id = "sora2_avatar_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `Sora2AvatarEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Sora2AvatarAssetUploadEntity

```lua
local sora2_avatar_asset_upload = client:Sora2AvatarAssetUpload(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_id` | `string` | No |  |
| `file` | `string` | Yes |  |
| `run_output_dir` | `any` | No |  |
| `s3_key` | `string` | Yes |  |
| `upload_type` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Sora2AvatarAssetUpload():create({
  file = --[[ string ]],
  s3_key = --[[ string ]],
  upload_type = --[[ string ]],
  url = --[[ string ]],
})
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `Sora2AvatarAssetUploadEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Sora2AvatarStatEntity

```lua
local sora2_avatar_stat = client:Sora2AvatarStat(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `by_age_bucket` | `table` | Yes |  |
| `by_gender` | `table` | Yes |  |
| `by_prompt_key` | `table` | Yes |  |
| `by_race` | `table` | Yes |  |
| `completed_avatars` | `number` | Yes |  |
| `completion_rate` | `number` | Yes |  |
| `total_avatars` | `number` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:Sora2AvatarStat():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `Sora2AvatarStatEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StatEntity

```lua
local stat = client:Stat(nil)
```

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Stat():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StatsRefreshBackfillEntity

```lua
local stats_refresh_backfill = client:StatsRefreshBackfill(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `task_id` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:StatsRefreshBackfill():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatsRefreshBackfillEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StatsRefreshIssueEntity

```lua
local stats_refresh_issue = client:StatsRefreshIssue(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aged_over_24h` | `boolean` | Yes |  |
| `agent_id` | `string` | No |  |
| `agent_name_snapshot` | `any` | No |  |
| `first_detected_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `last_detected_at` | `string` | Yes |  |
| `last_refresh_completed_at` | `any` | No |  |
| `last_seen_run_id` | `string` | No |  |
| `latest_error_message` | `any` | No |  |
| `next_retry_at` | `any` | No |  |
| `platform` | `string` | Yes |  |
| `post_method` | `any` | No |  |
| `post_url` | `any` | No |  |
| `posted_date_et` | `string` | Yes |  |
| `product_id` | `string` | No |  |
| `product_name_snapshot` | `any` | No |  |
| `reason_code` | `string` | Yes |  |
| `resolved_at` | `any` | No |  |
| `retry_count` | `number` | Yes |  |
| `schedule_queue_id` | `string` | No |  |
| `scheduled_datetime_utc` | `string` | Yes |  |
| `stale_after_sla` | `boolean` | Yes |  |
| `status` | `string` | Yes |  |
| `user_email_snapshot` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:StatsRefreshIssue():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatsRefreshIssueEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StatsRefreshOverviewEntity

```lua
local stats_refresh_overview = client:StatsRefreshOverview(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_run` | `any` | No |  |
| `aged_over_24h` | `number` | Yes |  |
| `backlog_preview` | `table` | Yes |  |
| `coverage_percent` | `number` | Yes |  |
| `customer_counts` | `table` | Yes |  |
| `date` | `string` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `method_counts` | `table` | Yes |  |
| `platform_counts` | `table` | Yes |  |
| `platform_units_resolved` | `number` | Yes |  |
| `platform_units_total` | `number` | Yes |  |
| `platform_units_unresolved` | `number` | Yes |  |
| `posted_entries` | `number` | Yes |  |
| `reason_counts` | `table` | Yes |  |
| `sla_deadline_et` | `string` | Yes |  |
| `stale_after_sla` | `number` | Yes |  |
| `top_affected_customers` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:StatsRefreshOverview():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatsRefreshOverviewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StatsRefreshRunSummaryEntity

```lua
local stats_refresh_run_summary = client:StatsRefreshRunSummary(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `celery_task_id` | `string` | No |  |
| `completed_at` | `any` | No |  |
| `entries_failed` | `number` | Yes |  |
| `entries_skipped` | `number` | Yes |  |
| `entries_total` | `number` | Yes |  |
| `entries_updated` | `number` | Yes |  |
| `error_summary_json` | `any` | No |  |
| `id` | `string` | Yes |  |
| `issues_opened` | `number` | Yes |  |
| `issues_resolved` | `number` | Yes |  |
| `platform_units_resolved` | `number` | Yes |  |
| `platform_units_total` | `number` | Yes |  |
| `platform_units_unresolved` | `number` | Yes |  |
| `platform_updates_via_profile` | `number` | Yes |  |
| `platform_updates_via_url` | `number` | Yes |  |
| `provider` | `any` | No |  |
| `refresh_trigger` | `any` | No |  |
| `requested_by_email` | `any` | No |  |
| `run_type` | `string` | Yes |  |
| `started_at` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `target_date_et` | `any` | No |  |
| `users_count` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:StatsRefreshRunSummary():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatsRefreshRunSummaryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StatsRefreshTaskTriggerEntity

```lua
local stats_refresh_task_trigger = client:StatsRefreshTaskTrigger(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `target_date` | `string` | Yes |  |
| `task_id` | `string` | Yes |  |
| `users_count` | `number` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:StatsRefreshTaskTrigger():create({
  message = --[[ string ]],
  status = --[[ string ]],
  target_date = --[[ string ]],
  task_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatsRefreshTaskTriggerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StripeEntity

```lua
local stripe = client:Stripe(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StripeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StyleEntity

```lua
local style = client:Style(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:Style():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StyleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TemplateEntity

```lua
local template = client:Template(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:Template():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TemplateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TikTokCreatorInfoEntity

```lua
local tik_tok_creator_info = client:TikTokCreatorInfo(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commentDisabled` | `boolean` | No |  |
| `creatorAvatarUrl` | `any` | No |  |
| `creatorNickname` | `any` | No |  |
| `creatorUsername` | `any` | No |  |
| `duetDisabled` | `boolean` | No |  |
| `maxVideoPostDurationSec` | `number` | No |  |
| `privacyLevelOptions` | `table` | No |  |
| `stitchDisabled` | `boolean` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:TikTokCreatorInfo():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TikTokCreatorInfoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TopPostEntity

```lua
local top_post = client:TopPost(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `number` | Yes |  |
| `id` | `string` | Yes |  |
| `likes` | `number` | Yes |  |
| `platforms` | `table` | Yes |  |
| `scheduled_datetime` | `string` | Yes |  |
| `user_email` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |
| `views` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:TopPost():list({ date = "example" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TopPostEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UploadPostAgentEntity

```lua
local upload_post_agent = client:UploadPostAgent(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:UploadPostAgent():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UploadPostAgentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserEntity

```lua
local user = client:User(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountType` | `any` | No |  |
| `activatedByAdminAt` | `any` | No |  |
| `activatedByAdminId` | `any` | No |  |
| `agents` | `table` | Yes |  |
| `agentsCount` | `any` | No |  |
| `attribution` | `any` | No |  |
| `avatarImageUrl` | `any` | No |  |
| `avatarVoiceUrl` | `any` | No |  |
| `createdAt` | `string` | Yes |  |
| `credits` | `number` | No |  |
| `email` | `string` | Yes |  |
| `googleId` | `any` | No |  |
| `hasSeenScheduleWelcome` | `boolean` | No |  |
| `id` | `string` | Yes |  |
| `industry` | `any` | No |  |
| `instagramId` | `any` | No |  |
| `isActivatedByAdmin` | `boolean` | No |  |
| `isAdmin` | `boolean` | No |  |
| `isInternalUser` | `any` | No |  |
| `isMigrated` | `any` | No |  |
| `isResettingProduct` | `any` | No |  |
| `membership` | `any` | No |  |
| `name` | `string` | Yes |  |
| `partnerDirectLoginDisabled` | `boolean` | No |  |
| `partnerExternalUserId` | `any` | No |  |
| `partnerPolicyCode` | `any` | No |  |
| `partnerSource` | `any` | No |  |
| `picture` | `any` | No |  |
| `stripeCustomerId` | `any` | No |  |
| `stripeSubscriptionId` | `any` | No |  |
| `subscriptionCurrentPeriodEnd` | `any` | No |  |
| `subscriptionStatus` | `any` | No |  |
| `totalCount` | `number` | Yes |  |
| `updatedAt` | `string` | Yes |  |
| `userId` | `string` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:User():load({ id = "user_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserAgentEntity

```lua
local user_agent = client:UserAgent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent` | `table` | Yes |  |
| `assigned_at` | `string` | Yes |  |
| `assignment_id` | `string` | Yes |  |
| `expires_at` | `any` | No |  |
| `id` | `string` | No |  |
| `status` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:UserAgent():create({
  id = --[[ string ]],
  agent = --[[ table ]],
  assigned_at = --[[ string ]],
  assignment_id = --[[ string ]],
  status = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:UserAgent():list({ id = "example" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserAgentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserHealthDetailEntity

```lua
local user_health_detail = client:UserHealthDetail(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `any` | Yes |  |
| `activated` | `boolean` | Yes |  |
| `activated_by_admin_at` | `any` | No |  |
| `activated_by_admin_id` | `string` | No |  |
| `admin_notes` | `any` | No |  |
| `agents_count` | `number` | No |  |
| `assigned_agents` | `table` | Yes |  |
| `assigned_agents_count` | `number` | Yes |  |
| `assigned_agents_preview_limit` | `number` | No |  |
| `assigned_agents_truncated` | `boolean` | No |  |
| `auto_schedule_enabled` | `boolean` | Yes |  |
| `comments_expected_per_day` | `number` | No |  |
| `comments_fix_block_reason` | `any` | No |  |
| `comments_fix_ready` | `boolean` | No |  |
| `comments_today_failed` | `number` | No |  |
| `comments_today_posted` | `number` | No |  |
| `comments_today_scheduled` | `number` | No |  |
| `comments_yesterday_failed` | `number` | No |  |
| `comments_yesterday_posted` | `number` | No |  |
| `comments_yesterday_total` | `number` | No |  |
| `created_at` | `string` | Yes |  |
| `credits` | `number` | Yes |  |
| `effective_posted_video_reuse_percent` | `number` | Yes |  |
| `email` | `string` | Yes |  |
| `expected_agents_count` | `number` | Yes |  |
| `id` | `string` | Yes |  |
| `is_activated_by_admin` | `boolean` | Yes |  |
| `is_admin` | `boolean` | Yes |  |
| `is_bookmarked` | `boolean` | No |  |
| `is_internal_user` | `boolean` | Yes |  |
| `is_migrated` | `boolean` | Yes |  |
| `landing_slug` | `any` | No |  |
| `landing_status` | `any` | No |  |
| `landing_url` | `any` | No |  |
| `membership` | `any` | Yes |  |
| `microhub_status` | `any` | No |  |
| `microhub_url` | `any` | No |  |
| `name` | `string` | Yes |  |
| `onboarding_flow` | `string` | Yes |  |
| `posted_video_reuse_percent` | `any` | No |  |
| `product_id` | `string` | Yes |  |
| `product_name` | `any` | Yes |  |
| `product_url` | `any` | Yes |  |
| `subscription_status` | `any` | Yes |  |
| `survey_data` | `any` | No |  |
| `today_failed` | `number` | Yes |  |
| `today_posted` | `number` | Yes |  |
| `today_scheduled` | `number` | Yes |  |
| `tomorrow_capacity` | `number` | Yes |  |
| `tomorrow_scheduled` | `number` | Yes |  |
| `videos_completed` | `number` | Yes |  |
| `videos_failed` | `number` | Yes |  |
| `videos_pending` | `number` | Yes |  |
| `videos_stale` | `number` | Yes |  |
| `videos_total` | `number` | Yes |  |
| `yesterday_failed` | `number` | Yes |  |
| `yesterday_failed_entries` | `table` | Yes |  |
| `yesterday_posted` | `number` | Yes |  |
| `yesterday_total` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:UserHealthDetail():list({ id = "example" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserHealthDetailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserWithAvatarSubmissionEntity

```lua
local user_with_avatar_submission = client:UserWithAvatarSubmission(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_image_url` | `string` | Yes |  |
| `avatar_voice_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `email` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:UserWithAvatarSubmission():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserWithAvatarSubmissionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UsersHealthEntity

```lua
local users_health = client:UsersHealth(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `any` | Yes |  |
| `admin_notes` | `any` | No |  |
| `agents_count` | `number` | Yes |  |
| `agents_health` | `string` | Yes |  |
| `agents_issue` | `any` | Yes |  |
| `assigned_agents_count` | `number` | Yes |  |
| `auto_schedule_enabled` | `boolean` | Yes |  |
| `auto_schedule_health` | `string` | Yes |  |
| `auto_schedule_issue` | `any` | Yes |  |
| `auto_schedule_today_health` | `string` | Yes |  |
| `auto_schedule_today_issue` | `any` | Yes |  |
| `created_at` | `string` | Yes |  |
| `email` | `string` | Yes |  |
| `expected_agents_count` | `number` | Yes |  |
| `id` | `string` | Yes |  |
| `is_bookmarked` | `boolean` | No |  |
| `is_internal_user` | `boolean` | Yes |  |
| `is_migrated` | `boolean` | Yes |  |
| `membership` | `any` | Yes |  |
| `name` | `string` | Yes |  |
| `posts_health` | `string` | Yes |  |
| `posts_issue` | `any` | Yes |  |
| `posts_today_health` | `string` | Yes |  |
| `posts_today_issue` | `any` | Yes |  |
| `subscription_status` | `any` | Yes |  |
| `today_expected_count` | `number` | Yes |  |
| `today_failed_count` | `number` | Yes |  |
| `today_scheduled_count` | `number` | Yes |  |
| `today_total_count` | `number` | Yes |  |
| `tomorrow_expected_count` | `number` | Yes |  |
| `tomorrow_scheduled_count` | `number` | Yes |  |
| `yesterday_failed_count` | `number` | Yes |  |
| `yesterday_total_count` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:UsersHealth():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UsersHealthEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## VideoEntity

```lua
local video = client:Video(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `string` | No |  |
| `bookmarked` | `any` | No |  |
| `captions` | `any` | No |  |
| `carousel_data` | `any` | No |  |
| `created_at` | `string` | Yes |  |
| `duration` | `number` | No |  |
| `generation_status` | `any` | No |  |
| `id` | `string` | Yes |  |
| `image_prompt` | `any` | No |  |
| `is_onboarding` | `boolean` | No |  |
| `is_template` | `boolean` | No |  |
| `main_avatar` | `any` | No |  |
| `main_prompt` | `any` | No |  |
| `media_asset_id` | `string` | No |  |
| `product_id` | `string` | No |  |
| `reel_id` | `string` | No |  |
| `thumbnail_url` | `any` | No |  |
| `title` | `string` | Yes |  |
| `type` | `any` | No |  |
| `updated_at` | `any` | No |  |
| `url` | `string` | Yes |  |
| `user_id` | `string` | No |  |
| `video_id` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `agent_id` | - | - | - | - |
| `bookmarked` | - | - | - | - |
| `captions` | - | Yes | - | - |
| `carousel_data` | - | - | - | - |
| `created_at` | - | - | - | - |
| `duration` | - | - | - | - |
| `generation_status` | - | - | - | - |
| `id` | - | - | - | - |
| `image_prompt` | - | - | - | - |
| `is_onboarding` | - | - | - | - |
| `is_template` | - | - | - | - |
| `main_avatar` | - | - | - | - |
| `main_prompt` | - | - | - | - |
| `media_asset_id` | - | - | - | - |
| `product_id` | - | - | - | - |
| `reel_id` | - | - | - | - |
| `thumbnail_url` | - | - | - | - |
| `title` | - | - | Yes | - |
| `type` | - | - | - | - |
| `updated_at` | - | - | - | - |
| `url` | - | - | Yes | - |
| `user_id` | - | - | - | - |
| `video_id` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Video():create({
  captions = --[[ any ]],
  title = --[[ string ]],
  url = --[[ string ]],
  video_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:Video():load({ id = "video_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:Video():remove({ id = "video_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:Video():update({
  id = "video_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VideoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## VideoRemixerWorkerEntity

```lua
local video_remixer_worker = client:VideoRemixerWorker(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `captions_ass` | `string` | No |  |
| `captions_vtt` | `string` | No |  |
| `cost_usd` | `number` | No |  |
| `error` | `string` | Yes |  |
| `file` | `string` | Yes |  |
| `kinds` | `table` | No |  |
| `lease_token` | `string` | Yes |  |
| `limit` | `number` | No |  |
| `manifest` | `string` | Yes |  |
| `model` | `string` | Yes |  |
| `processing_seconds` | `number` | No |  |
| `prompt_version` | `string` | Yes |  |
| `result` | `table` | No |  |
| `thumbnail` | `string` | Yes |  |
| `tier` | `string` | No |  |
| `worker_id` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:VideoRemixerWorker():create({
  error = --[[ string ]],
  file = --[[ string ]],
  lease_token = --[[ string ]],
  manifest = --[[ string ]],
  model = --[[ string ]],
  prompt_version = --[[ string ]],
  thumbnail = --[[ string ]],
  worker_id = --[[ string ]],
})
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VideoRemixerWorkerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WatchdogRecoveryEntity

```lua
local watchdog_recovery = client:WatchdogRecovery(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `item_id` | `string` | Yes |  |
| `passed` | `boolean` | Yes |  |
| `table` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:WatchdogRecovery():create({
  item_id = --[[ string ]],
  passed = --[[ boolean ]],
  table = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:WatchdogRecovery():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WatchdogRecoveryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WinningAdEntity

```lua
local winning_ad = client:WinningAd(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `description` | `string` | No |  |
| `id` | `string` | Yes |  |
| `source` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:WinningAd():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WinningAdEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## XAdaptationEntity

```lua
local x_adaptation = client:XAdaptation(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:XAdaptation():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `XAdaptationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZerohumanAdminAccountEntity

```lua
local zerohuman_admin_account = client:ZerohumanAdminAccount(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_mode` | `string` | Yes |  |
| `active_queue_count` | `number` | Yes |  |
| `assigned_agent` | `any` | No |  |
| `created_at` | `any` | No |  |
| `email` | `string` | Yes |  |
| `external_user_id` | `string` | Yes |  |
| `membership` | `any` | No |  |
| `policy_code` | `any` | No |  |
| `product_id` | `string` | No |  |
| `product_name` | `any` | No |  |
| `provisioning_status` | `string` | Yes |  |
| `subscription_status` | `any` | No |  |
| `updated_at` | `any` | No |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:ZerohumanAdminAccount():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZerohumanAdminAccountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    ratelimit = { active = true },
    retry = { active = true },
    test = { active = true },
    timeout = { active = true },
  },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `ratelimit`

Rate limiting.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Retry.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Timeout.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `now` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

