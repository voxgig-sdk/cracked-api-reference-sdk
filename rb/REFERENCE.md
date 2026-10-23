# CrackedApiReference Ruby SDK Reference

Complete API reference for the CrackedApiReference Ruby SDK.


## CrackedApiReferenceSDK

### Constructor

```ruby
require_relative 'CrackedApiReference_sdk'

client = CrackedApiReferenceSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CrackedApiReferenceSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = CrackedApiReferenceSDK.test
```


### Instance Methods

#### `Activate(data = nil)`

Create a new `Activate` entity instance. Pass `nil` for no initial data.

#### `ActivateUser(data = nil)`

Create a new `ActivateUser` entity instance. Pass `nil` for no initial data.

#### `ActiveOnboarding(data = nil)`

Create a new `ActiveOnboarding` entity instance. Pass `nil` for no initial data.

#### `Admin(data = nil)`

Create a new `Admin` entity instance. Pass `nil` for no initial data.

#### `AdminAccountReset(data = nil)`

Create a new `AdminAccountReset` entity instance. Pass `nil` for no initial data.

#### `AdminCarousel(data = nil)`

Create a new `AdminCarousel` entity instance. Pass `nil` for no initial data.

#### `AdminCarouselDemoReview(data = nil)`

Create a new `AdminCarouselDemoReview` entity instance. Pass `nil` for no initial data.

#### `AdminCustomer(data = nil)`

Create a new `AdminCustomer` entity instance. Pass `nil` for no initial data.

#### `AdminCustomerSuccess(data = nil)`

Create a new `AdminCustomerSuccess` entity instance. Pass `nil` for no initial data.

#### `AdminGeneratedVideo(data = nil)`

Create a new `AdminGeneratedVideo` entity instance. Pass `nil` for no initial data.

#### `AdminHealthrx(data = nil)`

Create a new `AdminHealthrx` entity instance. Pass `nil` for no initial data.

#### `AdminInsight(data = nil)`

Create a new `AdminInsight` entity instance. Pass `nil` for no initial data.

#### `AdminLandingTask(data = nil)`

Create a new `AdminLandingTask` entity instance. Pass `nil` for no initial data.

#### `AdminMetricsSummary(data = nil)`

Create a new `AdminMetricsSummary` entity instance. Pass `nil` for no initial data.

#### `AdminPost(data = nil)`

Create a new `AdminPost` entity instance. Pass `nil` for no initial data.

#### `AdminRecentSignup(data = nil)`

Create a new `AdminRecentSignup` entity instance. Pass `nil` for no initial data.

#### `AdminSlideshowDiag(data = nil)`

Create a new `AdminSlideshowDiag` entity instance. Pass `nil` for no initial data.

#### `AdminSlideshowImport(data = nil)`

Create a new `AdminSlideshowImport` entity instance. Pass `nil` for no initial data.

#### `AdminUserView(data = nil)`

Create a new `AdminUserView` entity instance. Pass `nil` for no initial data.

#### `AdminUsersTableItem(data = nil)`

Create a new `AdminUsersTableItem` entity instance. Pass `nil` for no initial data.

#### `AdminVideoRemixer(data = nil)`

Create a new `AdminVideoRemixer` entity instance. Pass `nil` for no initial data.

#### `AdvanceStep(data = nil)`

Create a new `AdvanceStep` entity instance. Pass `nil` for no initial data.

#### `Agent(data = nil)`

Create a new `Agent` entity instance. Pass `nil` for no initial data.

#### `AgentAccessCustomersHealth(data = nil)`

Create a new `AgentAccessCustomersHealth` entity instance. Pass `nil` for no initial data.

#### `AgentAccessOverview(data = nil)`

Create a new `AgentAccessOverview` entity instance. Pass `nil` for no initial data.

#### `AgentAccessPhilHourlyNotification(data = nil)`

Create a new `AgentAccessPhilHourlyNotification` entity instance. Pass `nil` for no initial data.

#### `AgentAccessPhilStatsRefresh(data = nil)`

Create a new `AgentAccessPhilStatsRefresh` entity instance. Pass `nil` for no initial data.

#### `AgentAccessPhilVideo(data = nil)`

Create a new `AgentAccessPhilVideo` entity instance. Pass `nil` for no initial data.

#### `AgentAccessUserAgent(data = nil)`

Create a new `AgentAccessUserAgent` entity instance. Pass `nil` for no initial data.

#### `AgentAccessUserPhoneFarm(data = nil)`

Create a new `AgentAccessUserPhoneFarm` entity instance. Pass `nil` for no initial data.

#### `AgentAccessUserPost(data = nil)`

Create a new `AgentAccessUserPost` entity instance. Pass `nil` for no initial data.

#### `AgentAccessUserSummary(data = nil)`

Create a new `AgentAccessUserSummary` entity instance. Pass `nil` for no initial data.

#### `AgentAccessUserVideo(data = nil)`

Create a new `AgentAccessUserVideo` entity instance. Pass `nil` for no initial data.

#### `AgentAccessUserWinningAd(data = nil)`

Create a new `AgentAccessUserWinningAd` entity instance. Pass `nil` for no initial data.

#### `AgentAccessWinningAdsSummary(data = nil)`

Create a new `AgentAccessWinningAdsSummary` entity instance. Pass `nil` for no initial data.

#### `AgentDetail(data = nil)`

Create a new `AgentDetail` entity instance. Pass `nil` for no initial data.

#### `AgentHealth(data = nil)`

Create a new `AgentHealth` entity instance. Pass `nil` for no initial data.

#### `AgentHealthCustomerOption(data = nil)`

Create a new `AgentHealthCustomerOption` entity instance. Pass `nil` for no initial data.

#### `AgentHealthDetail(data = nil)`

Create a new `AgentHealthDetail` entity instance. Pass `nil` for no initial data.

#### `AgentPost(data = nil)`

Create a new `AgentPost` entity instance. Pass `nil` for no initial data.

#### `AgentStat(data = nil)`

Create a new `AgentStat` entity instance. Pass `nil` for no initial data.

#### `AgentSummary(data = nil)`

Create a new `AgentSummary` entity instance. Pass `nil` for no initial data.

#### `AgentsSummary(data = nil)`

Create a new `AgentsSummary` entity instance. Pass `nil` for no initial data.

#### `AnalysisStatus(data = nil)`

Create a new `AnalysisStatus` entity instance. Pass `nil` for no initial data.

#### `AnalyticsPost(data = nil)`

Create a new `AnalyticsPost` entity instance. Pass `nil` for no initial data.

#### `AnalyzeProduct(data = nil)`

Create a new `AnalyzeProduct` entity instance. Pass `nil` for no initial data.

#### `AssignAgent(data = nil)`

Create a new `AssignAgent` entity instance. Pass `nil` for no initial data.

#### `Auth(data = nil)`

Create a new `Auth` entity instance. Pass `nil` for no initial data.

#### `AutoScheduleSetting(data = nil)`

Create a new `AutoScheduleSetting` entity instance. Pass `nil` for no initial data.

#### `BulkTikTokStatsUpdate(data = nil)`

Create a new `BulkTikTokStatsUpdate` entity instance. Pass `nil` for no initial data.

#### `Carousel(data = nil)`

Create a new `Carousel` entity instance. Pass `nil` for no initial data.

#### `CarouselAgentDetail(data = nil)`

Create a new `CarouselAgentDetail` entity instance. Pass `nil` for no initial data.

#### `CarouselStatus(data = nil)`

Create a new `CarouselStatus` entity instance. Pass `nil` for no initial data.

#### `Chat(data = nil)`

Create a new `Chat` entity instance. Pass `nil` for no initial data.

#### `ChatHistory(data = nil)`

Create a new `ChatHistory` entity instance. Pass `nil` for no initial data.

#### `ChatSession(data = nil)`

Create a new `ChatSession` entity instance. Pass `nil` for no initial data.

#### `Comment(data = nil)`

Create a new `Comment` entity instance. Pass `nil` for no initial data.

#### `CommentCampaign(data = nil)`

Create a new `CommentCampaign` entity instance. Pass `nil` for no initial data.

#### `CompleteChatCheckout(data = nil)`

Create a new `CompleteChatCheckout` entity instance. Pass `nil` for no initial data.

#### `CreateBlackoutSora2Video(data = nil)`

Create a new `CreateBlackoutSora2Video` entity instance. Pass `nil` for no initial data.

#### `CreateCarousel(data = nil)`

Create a new `CreateCarousel` entity instance. Pass `nil` for no initial data.

#### `CreateProduct(data = nil)`

Create a new `CreateProduct` entity instance. Pass `nil` for no initial data.

#### `CreateResetProductV6(data = nil)`

Create a new `CreateResetProductV6` entity instance. Pass `nil` for no initial data.

#### `CreateSora2Video(data = nil)`

Create a new `CreateSora2Video` entity instance. Pass `nil` for no initial data.

#### `CreateVariation(data = nil)`

Create a new `CreateVariation` entity instance. Pass `nil` for no initial data.

#### `Customer(data = nil)`

Create a new `Customer` entity instance. Pass `nil` for no initial data.

#### `CustomerHealth(data = nil)`

Create a new `CustomerHealth` entity instance. Pass `nil` for no initial data.

#### `CustomerHealthAllCustomersItem(data = nil)`

Create a new `CustomerHealthAllCustomersItem` entity instance. Pass `nil` for no initial data.

#### `CustomerHealthViewsSummary(data = nil)`

Create a new `CustomerHealthViewsSummary` entity instance. Pass `nil` for no initial data.

#### `Daily(data = nil)`

Create a new `Daily` entity instance. Pass `nil` for no initial data.

#### `DailyStatus(data = nil)`

Create a new `DailyStatus` entity instance. Pass `nil` for no initial data.

#### `DedicatedAgentsDashboard(data = nil)`

Create a new `DedicatedAgentsDashboard` entity instance. Pass `nil` for no initial data.

#### `EnterpriseAgent(data = nil)`

Create a new `EnterpriseAgent` entity instance. Pass `nil` for no initial data.

#### `EnterpriseProduct(data = nil)`

Create a new `EnterpriseProduct` entity instance. Pass `nil` for no initial data.

#### `ExactAvailability(data = nil)`

Create a new `ExactAvailability` entity instance. Pass `nil` for no initial data.

#### `ExactFormula(data = nil)`

Create a new `ExactFormula` entity instance. Pass `nil` for no initial data.

#### `ExtractV2(data = nil)`

Create a new `ExtractV2` entity instance. Pass `nil` for no initial data.

#### `FailedPost(data = nil)`

Create a new `FailedPost` entity instance. Pass `nil` for no initial data.

#### `File(data = nil)`

Create a new `File` entity instance. Pass `nil` for no initial data.

#### `GenerateBlackoutSora2Prompt(data = nil)`

Create a new `GenerateBlackoutSora2Prompt` entity instance. Pass `nil` for no initial data.

#### `GeneratePomelliDemo(data = nil)`

Create a new `GeneratePomelliDemo` entity instance. Pass `nil` for no initial data.

#### `GeneratePrompt(data = nil)`

Create a new `GeneratePrompt` entity instance. Pass `nil` for no initial data.

#### `GenerateSora2Prompt(data = nil)`

Create a new `GenerateSora2Prompt` entity instance. Pass `nil` for no initial data.

#### `Healthrx(data = nil)`

Create a new `Healthrx` entity instance. Pass `nil` for no initial data.

#### `InitResetProductV6(data = nil)`

Create a new `InitResetProductV6` entity instance. Pass `nil` for no initial data.

#### `Iri(data = nil)`

Create a new `Iri` entity instance. Pass `nil` for no initial data.

#### `IrisCapability(data = nil)`

Create a new `IrisCapability` entity instance. Pass `nil` for no initial data.

#### `IrisChat(data = nil)`

Create a new `IrisChat` entity instance. Pass `nil` for no initial data.

#### `IrisConnector(data = nil)`

Create a new `IrisConnector` entity instance. Pass `nil` for no initial data.

#### `IrisStatus(data = nil)`

Create a new `IrisStatus` entity instance. Pass `nil` for no initial data.

#### `IrisTask(data = nil)`

Create a new `IrisTask` entity instance. Pass `nil` for no initial data.

#### `IrisUsage(data = nil)`

Create a new `IrisUsage` entity instance. Pass `nil` for no initial data.

#### `Landing(data = nil)`

Create a new `Landing` entity instance. Pass `nil` for no initial data.

#### `LandingStat(data = nil)`

Create a new `LandingStat` entity instance. Pass `nil` for no initial data.

#### `LandingStatus(data = nil)`

Create a new `LandingStatus` entity instance. Pass `nil` for no initial data.

#### `LinkInBio(data = nil)`

Create a new `LinkInBio` entity instance. Pass `nil` for no initial data.

#### `LinkInDm(data = nil)`

Create a new `LinkInDm` entity instance. Pass `nil` for no initial data.

#### `LinkInPost(data = nil)`

Create a new `LinkInPost` entity instance. Pass `nil` for no initial data.

#### `LinkUser(data = nil)`

Create a new `LinkUser` entity instance. Pass `nil` for no initial data.

#### `MediaAsset(data = nil)`

Create a new `MediaAsset` entity instance. Pass `nil` for no initial data.

#### `Men(data = nil)`

Create a new `Men` entity instance. Pass `nil` for no initial data.

#### `Microdrama(data = nil)`

Create a new `Microdrama` entity instance. Pass `nil` for no initial data.

#### `MicrohubPublic(data = nil)`

Create a new `MicrohubPublic` entity instance. Pass `nil` for no initial data.

#### `OnboardingStatus(data = nil)`

Create a new `OnboardingStatus` entity instance. Pass `nil` for no initial data.

#### `OnboardingV6(data = nil)`

Create a new `OnboardingV6` entity instance. Pass `nil` for no initial data.

#### `PaidUser(data = nil)`

Create a new `PaidUser` entity instance. Pass `nil` for no initial data.

#### `Pexel(data = nil)`

Create a new `Pexel` entity instance. Pass `nil` for no initial data.

#### `PhoneAdminAvailableAgentSource(data = nil)`

Create a new `PhoneAdminAvailableAgentSource` entity instance. Pass `nil` for no initial data.

#### `Product(data = nil)`

Create a new `Product` entity instance. Pass `nil` for no initial data.

#### `ProductDashboard(data = nil)`

Create a new `ProductDashboard` entity instance. Pass `nil` for no initial data.

#### `ProductDashboardView(data = nil)`

Create a new `ProductDashboardView` entity instance. Pass `nil` for no initial data.

#### `ProductDemo(data = nil)`

Create a new `ProductDemo` entity instance. Pass `nil` for no initial data.

#### `ProductLanding(data = nil)`

Create a new `ProductLanding` entity instance. Pass `nil` for no initial data.

#### `PublicResumeStatus(data = nil)`

Create a new `PublicResumeStatus` entity instance. Pass `nil` for no initial data.

#### `ReRollVideo(data = nil)`

Create a new `ReRollVideo` entity instance. Pass `nil` for no initial data.

#### `ReadRootGet(data = nil)`

Create a new `ReadRootGet` entity instance. Pass `nil` for no initial data.

#### `RecordDemoBooked(data = nil)`

Create a new `RecordDemoBooked` entity instance. Pass `nil` for no initial data.

#### `RefreshStat(data = nil)`

Create a new `RefreshStat` entity instance. Pass `nil` for no initial data.

#### `RemixerClipper(data = nil)`

Create a new `RemixerClipper` entity instance. Pass `nil` for no initial data.

#### `ResetProduct(data = nil)`

Create a new `ResetProduct` entity instance. Pass `nil` for no initial data.

#### `RetryWebsiteScrape(data = nil)`

Create a new `RetryWebsiteScrape` entity instance. Pass `nil` for no initial data.

#### `SaveSurvey(data = nil)`

Create a new `SaveSurvey` entity instance. Pass `nil` for no initial data.

#### `ScanSocial(data = nil)`

Create a new `ScanSocial` entity instance. Pass `nil` for no initial data.

#### `ScanSocialsPublic(data = nil)`

Create a new `ScanSocialsPublic` entity instance. Pass `nil` for no initial data.

#### `ScanSocialsStatus(data = nil)`

Create a new `ScanSocialsStatus` entity instance. Pass `nil` for no initial data.

#### `ScheduleV2(data = nil)`

Create a new `ScheduleV2` entity instance. Pass `nil` for no initial data.

#### `Scrape(data = nil)`

Create a new `Scrape` entity instance. Pass `nil` for no initial data.

#### `ScrapeWebsitePublic(data = nil)`

Create a new `ScrapeWebsitePublic` entity instance. Pass `nil` for no initial data.

#### `ScrapedData(data = nil)`

Create a new `ScrapedData` entity instance. Pass `nil` for no initial data.

#### `ScrapingStatus(data = nil)`

Create a new `ScrapingStatus` entity instance. Pass `nil` for no initial data.

#### `SelfServeActivate(data = nil)`

Create a new `SelfServeActivate` entity instance. Pass `nil` for no initial data.

#### `Seo(data = nil)`

Create a new `Seo` entity instance. Pass `nil` for no initial data.

#### `SeoAiMention(data = nil)`

Create a new `SeoAiMention` entity instance. Pass `nil` for no initial data.

#### `SeoBacklink(data = nil)`

Create a new `SeoBacklink` entity instance. Pass `nil` for no initial data.

#### `SeoKeyword(data = nil)`

Create a new `SeoKeyword` entity instance. Pass `nil` for no initial data.

#### `SeoOverview(data = nil)`

Create a new `SeoOverview` entity instance. Pass `nil` for no initial data.

#### `SeoTraffic(data = nil)`

Create a new `SeoTraffic` entity instance. Pass `nil` for no initial data.

#### `ShareAccessLink(data = nil)`

Create a new `ShareAccessLink` entity instance. Pass `nil` for no initial data.

#### `Site(data = nil)`

Create a new `Site` entity instance. Pass `nil` for no initial data.

#### `Slide(data = nil)`

Create a new `Slide` entity instance. Pass `nil` for no initial data.

#### `SlugValidation(data = nil)`

Create a new `SlugValidation` entity instance. Pass `nil` for no initial data.

#### `Social(data = nil)`

Create a new `Social` entity instance. Pass `nil` for no initial data.

#### `SocialScanPreview(data = nil)`

Create a new `SocialScanPreview` entity instance. Pass `nil` for no initial data.

#### `SocialScanProcess(data = nil)`

Create a new `SocialScanProcess` entity instance. Pass `nil` for no initial data.

#### `SocialScanSave(data = nil)`

Create a new `SocialScanSave` entity instance. Pass `nil` for no initial data.

#### `Sora2Avatar(data = nil)`

Create a new `Sora2Avatar` entity instance. Pass `nil` for no initial data.

#### `Sora2AvatarAssetUpload(data = nil)`

Create a new `Sora2AvatarAssetUpload` entity instance. Pass `nil` for no initial data.

#### `Sora2AvatarStat(data = nil)`

Create a new `Sora2AvatarStat` entity instance. Pass `nil` for no initial data.

#### `Stat(data = nil)`

Create a new `Stat` entity instance. Pass `nil` for no initial data.

#### `StatsRefreshBackfill(data = nil)`

Create a new `StatsRefreshBackfill` entity instance. Pass `nil` for no initial data.

#### `StatsRefreshIssue(data = nil)`

Create a new `StatsRefreshIssue` entity instance. Pass `nil` for no initial data.

#### `StatsRefreshOverview(data = nil)`

Create a new `StatsRefreshOverview` entity instance. Pass `nil` for no initial data.

#### `StatsRefreshRunSummary(data = nil)`

Create a new `StatsRefreshRunSummary` entity instance. Pass `nil` for no initial data.

#### `StatsRefreshTaskTrigger(data = nil)`

Create a new `StatsRefreshTaskTrigger` entity instance. Pass `nil` for no initial data.

#### `Stripe(data = nil)`

Create a new `Stripe` entity instance. Pass `nil` for no initial data.

#### `Style(data = nil)`

Create a new `Style` entity instance. Pass `nil` for no initial data.

#### `Template(data = nil)`

Create a new `Template` entity instance. Pass `nil` for no initial data.

#### `TikTokCreatorInfo(data = nil)`

Create a new `TikTokCreatorInfo` entity instance. Pass `nil` for no initial data.

#### `TopPost(data = nil)`

Create a new `TopPost` entity instance. Pass `nil` for no initial data.

#### `UploadPostAgent(data = nil)`

Create a new `UploadPostAgent` entity instance. Pass `nil` for no initial data.

#### `User(data = nil)`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `UserAgent(data = nil)`

Create a new `UserAgent` entity instance. Pass `nil` for no initial data.

#### `UserHealthDetail(data = nil)`

Create a new `UserHealthDetail` entity instance. Pass `nil` for no initial data.

#### `UserWithAvatarSubmission(data = nil)`

Create a new `UserWithAvatarSubmission` entity instance. Pass `nil` for no initial data.

#### `UsersHealth(data = nil)`

Create a new `UsersHealth` entity instance. Pass `nil` for no initial data.

#### `Video(data = nil)`

Create a new `Video` entity instance. Pass `nil` for no initial data.

#### `VideoRemixerWorker(data = nil)`

Create a new `VideoRemixerWorker` entity instance. Pass `nil` for no initial data.

#### `WatchdogRecovery(data = nil)`

Create a new `WatchdogRecovery` entity instance. Pass `nil` for no initial data.

#### `WinningAd(data = nil)`

Create a new `WinningAd` entity instance. Pass `nil` for no initial data.

#### `XAdaptation(data = nil)`

Create a new `XAdaptation` entity instance. Pass `nil` for no initial data.

#### `ZerohumanAdminAccount(data = nil)`

Create a new `ZerohumanAdminAccount` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## ActivateEntity

```ruby
activate = client.Activate
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activated_at` | `Object` | No |  |
| `message` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Activate.create({
  "user_id" => "example_user_id", # String
  "message" => "example_message", # String
  "success" => true, # Boolean
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ActivateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ActivateUserEntity

```ruby
activate_user = client.ActivateUser
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activated_at` | `Object` | No |  |
| `message` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.ActivateUser.create({
  "user_id" => "example_user_id", # String
  "message" => "example_message", # String
  "success" => true, # Boolean
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ActivateUserEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ActiveOnboardingEntity

```ruby
active_onboarding = client.ActiveOnboarding
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_step` | `Object` | No |  |
| `has_active_onboarding` | `Boolean` | Yes |  |
| `onboarding_data_id` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.ActiveOnboarding.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ActiveOnboardingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AdminEntity

```ruby
admin = client.Admin
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apply` | `Boolean` | No | Apply safe canonical or clean-only URL updates |
| `count` | `Integer` | Yes |  |
| `created_at` | `String` | Yes |  |
| `date_from` | `Object` | No |  |
| `date_to` | `Object` | No |  |
| `email` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `include_failed` | `Boolean` | No |  |
| `include_pending` | `Boolean` | No |  |
| `include_records` | `Boolean` | No | Include full per-field audit records in the response |
| `issue_ids` | `Object` | No |  |
| `only_active` | `Boolean` | No | Limit the audit to active agents |
| `platform` | `Object` | No |  |
| `posting_method` | `Object` | No |  |
| `product_id` | `String` | No |  |
| `query` | `Object` | No |  |
| `reason` | `Object` | No |  |
| `regenerate` | `Boolean` | No |  |
| `status` | `String` | No |  |
| `user_membership` | `Object` | No |  |
| `user_name` | `Object` | No |  |
| `user_onboarding_step` | `Object` | No |  |
| `video_type` | `String` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Admin.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Admin.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Admin.load({ "date" => "date" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.Admin.remove({ "tester_id" => "tester_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.Admin.update({
  "agent_id" => "agent_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AdminEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AdminAccountResetEntity

```ruby
admin_account_reset = client.AdminAccountReset
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_ids` | `Array` | Yes |  |
| `agent_ids_sha256` | `String` | Yes |  |
| `backup_sha256` | `String` | Yes |  |
| `batch_size` | `Integer` | No |  |
| `confirmation` | `String` | Yes |  |
| `customer_email` | `String` | Yes |  |
| `pc_name` | `String` | Yes |  |
| `phase` | `String` | No |  |
| `product_id` | `String` | Yes |  |
| `video_ids` | `Array` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.AdminAccountReset.create({
  "agent_ids" => [], # Array
  "agent_ids_sha256" => "example_agent_ids_sha256", # String
  "backup_sha256" => "example_backup_sha256", # String
  "confirmation" => "example_confirmation", # String
  "customer_email" => "example_customer_email", # String
  "pc_name" => "example_pc_name", # String
  "product_id" => "example_product_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AdminAccountResetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AdminCarouselEntity

```ruby
admin_carousel = client.AdminCarousel
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `String` | No |  |
| `batch_id` | `String` | No |  |
| `caption` | `String` | No |  |
| `content_base64` | `String` | No |  |
| `day` | `Object` | No |  |
| `dry_run` | `Boolean` | No |  |
| `engine_run` | `String` | No |  |
| `expected_revision` | `String` | Yes |  |
| `formula` | `Hash` | Yes |  |
| `formula_id` | `String` | No |  |
| `prompt` | `String` | Yes |  |
| `slides` | `Array` | Yes |  |
| `title` | `String` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.AdminCarousel.create({
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

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.AdminCarousel.load({ "batch_id" => "batch_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.AdminCarousel.update({
  "fmt" => "fmt",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AdminCarouselEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AdminCarouselDemoReviewEntity

```ruby
admin_carousel_demo_review = client.AdminCarouselDemoReview
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `items` | `Array` | Yes |  |
| `reason` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.AdminCarouselDemoReview.create({
  "items" => [], # Array
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.AdminCarouselDemoReview.load({ "id" => "admin_carousel_demo_review_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.AdminCarouselDemoReview.update({
  "demo_review_id" => "demo_review_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AdminCarouselDemoReviewEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AdminCustomerEntity

```ruby
admin_customer = client.AdminCustomer
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `Object` | No |  |
| `active_vireel_agents` | `Integer` | Yes |  |
| `agents` | `Array` | Yes |  |
| `billing_source` | `String` | Yes |  |
| `contracted_agents` | `Object` | No |  |
| `email` | `String` | Yes |  |
| `membership` | `Object` | No |  |
| `name` | `String` | No |  |
| `pfa_only_agents` | `Integer` | Yes |  |
| `severity` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `subscription_status` | `Object` | No |  |
| `user_id` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AdminCustomer.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AdminCustomerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AdminCustomerSuccessEntity

```ruby
admin_customer_success = client.AdminCustomerSuccess
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_agents` | `Integer` | Yes |  |
| `active_products` | `Integer` | Yes |  |
| `agents_count` | `Integer` | Yes |  |
| `auto_schedule_status` | `String` | Yes |  |
| `days_until_period_end` | `Object` | No |  |
| `email` | `String` | Yes |  |
| `feature_impact` | `String` | Yes |  |
| `last_notification_at` | `Object` | No |  |
| `membership` | `Object` | No |  |
| `name` | `String` | No |  |
| `notification_count` | `Integer` | Yes |  |
| `notification_events` | `Array` | Yes |  |
| `priority` | `String` | Yes |  |
| `severity` | `String` | Yes |  |
| `status_label` | `String` | Yes |  |
| `subscription_current_period_end` | `Object` | No |  |
| `subscription_status` | `Object` | No |  |
| `upcoming_posts` | `Integer` | Yes |  |
| `user_id` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AdminCustomerSuccess.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AdminCustomerSuccessEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AdminGeneratedVideoEntity

```ruby
admin_generated_video = client.AdminGeneratedVideo
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `String` | No |  |
| `agent_name` | `Object` | No |  |
| `created_at` | `String` | Yes |  |
| `duration` | `Float` | No |  |
| `generation_status` | `Hash` | No |  |
| `id` | `String` | Yes |  |
| `product_id` | `String` | No |  |
| `thumbnail_url` | `Object` | No |  |
| `title` | `String` | Yes |  |
| `type` | `String` | Yes |  |
| `updated_at` | `Object` | No |  |
| `url` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AdminGeneratedVideo.list({ "user_id" => "example" })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AdminGeneratedVideoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AdminHealthrxEntity

```ruby
admin_healthrx = client.AdminHealthrx
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `String` | Yes |  |
| `delivery_enabled` | `Boolean` | No |  |
| `id` | `String` | No |  |
| `option_id` | `String` | Yes |  |
| `plan` | `Hash` | Yes |  |
| `preparation_enabled` | `Boolean` | No |  |
| `product_id` | `String` | Yes |  |
| `reason` | `String` | Yes |  |
| `request_key` | `String` | Yes |  |
| `revision` | `Integer` | Yes |  |
| `schedule_enabled` | `Boolean` | No |  |
| `version` | `String` | Yes |  |
| `viewed` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.AdminHealthrx.create({
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.AdminHealthrx.load({ "item_id" => "item_id", "kind" => "kind" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.AdminHealthrx.update({
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AdminHealthrxEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AdminInsightEntity

```ruby
admin_insight = client.AdminInsight
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer_success_cases` | `Array` | Yes |  |
| `customers` | `Array` | Yes |  |
| `generated_at` | `String` | Yes |  |
| `pfa_database` | `Hash` | Yes |  |
| `recent_signups` | `Array` | Yes |  |
| `summary` | `Hash` | Yes |  |
| `vireel_database` | `Hash` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AdminInsight.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.AdminInsight.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AdminInsightEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AdminLandingTaskEntity

```ruby
admin_landing_task = client.AdminLandingTask
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `task_id` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.AdminLandingTask.create({
  "user_id" => "example_user_id", # String
  "task_id" => "example_task_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AdminLandingTaskEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AdminMetricsSummaryEntity

```ruby
admin_metrics_summary = client.AdminMetricsSummary
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `paid_users_by_level` | `Array` | Yes |  |
| `total_cancellations` | `Integer` | Yes |  |
| `total_previews_generated` | `Integer` | Yes |  |
| `total_signups` | `Integer` | Yes |  |
| `total_videos_generated` | `Integer` | Yes |  |
| `url_attempts` | `Integer` | Yes |  |
| `user_credits` | `Array` | Yes |  |
| `user_gifted_credits` | `Array` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AdminMetricsSummary.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AdminMetricsSummaryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AdminPostEntity

```ruby
admin_post = client.AdminPost
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_job_ids` | `Object` | Yes |  |
| `agent_id` | `String` | Yes |  |
| `agent_name` | `Object` | Yes |  |
| `agent_platform_urls` | `Object` | Yes |  |
| `agent_url` | `Object` | Yes |  |
| `comments` | `Integer` | Yes |  |
| `error_message` | `Object` | Yes |  |
| `failed_at` | `Object` | Yes |  |
| `id` | `String` | Yes |  |
| `instagram_posted_by` | `Object` | Yes |  |
| `instagram_posted_url` | `Object` | Yes |  |
| `instagram_scraped_social_post_id` | `String` | Yes |  |
| `is_instagram_posted` | `Boolean` | Yes |  |
| `is_tiktok_posted` | `Boolean` | Yes |  |
| `is_youtube_posted` | `Boolean` | Yes |  |
| `last_refreshed_at` | `Object` | Yes |  |
| `likes` | `Integer` | Yes |  |
| `platform_post_methods` | `Object` | Yes |  |
| `platform_urls` | `Object` | Yes |  |
| `post_method` | `Object` | Yes |  |
| `post_platforms` | `Object` | Yes |  |
| `post_url` | `Object` | Yes |  |
| `posted_at` | `Object` | Yes |  |
| `product_id` | `String` | Yes |  |
| `results_status` | `Object` | Yes |  |
| `scheduled_datetime` | `String` | Yes |  |
| `source_type` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `tiktok_posted_by` | `Object` | Yes |  |
| `tiktok_posted_url` | `Object` | Yes |  |
| `tiktok_scraped_social_post_id` | `String` | Yes |  |
| `upload_post_error` | `Object` | Yes |  |
| `upload_post_status` | `Object` | Yes |  |
| `upload_post_uploads` | `Object` | Yes |  |
| `user_email` | `String` | Yes |  |
| `user_id` | `String` | Yes |  |
| `user_name` | `Object` | Yes |  |
| `video_id` | `String` | Yes |  |
| `video_url` | `Object` | Yes |  |
| `views` | `Integer` | Yes |  |
| `youtube_posted_by` | `Object` | Yes |  |
| `youtube_posted_url` | `Object` | Yes |  |
| `youtube_scraped_social_post_id` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AdminPost.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AdminPostEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AdminRecentSignupEntity

```ruby
admin_recent_signup = client.AdminRecentSignup
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes |  |
| `current_step` | `String` | Yes |  |
| `email` | `String` | No |  |
| `email_source` | `Object` | No |  |
| `error_message` | `Object` | No |  |
| `flow_variant` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `inactive_minutes` | `Integer` | Yes |  |
| `last_notification_at` | `Object` | No |  |
| `last_seen_at` | `String` | Yes |  |
| `likely_cause` | `String` | Yes |  |
| `notification_count` | `Integer` | Yes |  |
| `notification_events` | `Array` | Yes |  |
| `product_id` | `String` | No |  |
| `product_name` | `Object` | No |  |
| `product_url` | `String` | Yes |  |
| `severity` | `String` | Yes |  |
| `social_scan_status` | `Object` | No |  |
| `stage_label` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `updated_at` | `Object` | No |  |
| `website_scrape_status` | `Object` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AdminRecentSignup.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AdminRecentSignupEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AdminSlideshowDiagEntity

```ruby
admin_slideshow_diag = client.AdminSlideshowDiag
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `String` | No |  |
| `batch_id` | `String` | No |  |
| `caption` | `String` | No |  |
| `content_base64` | `String` | No |  |
| `day` | `Object` | No |  |
| `formula_id` | `String` | No |  |
| `id` | `String` | No |  |
| `title` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.AdminSlideshowDiag.create({
  "id" => "example_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AdminSlideshowDiagEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AdminSlideshowImportEntity

```ruby
admin_slideshow_import = client.AdminSlideshowImport
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `String` | Yes |  |
| `batch_id` | `String` | Yes |  |
| `caption` | `String` | Yes |  |
| `day` | `String` | Yes |  |
| `dry_run` | `Boolean` | No |  |
| `engine_run` | `String` | No |  |
| `formula_id` | `String` | Yes |  |
| `slides` | `Array` | Yes |  |
| `title` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.AdminSlideshowImport.create({
  "agent_id" => "example_agent_id", # String
  "batch_id" => "example_batch_id", # String
  "caption" => "example_caption", # String
  "day" => "example_day", # String
  "formula_id" => "example_formula_id", # String
  "slides" => [], # Array
  "title" => "example_title", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.AdminSlideshowImport.load({ "batch_id" => "batch_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AdminSlideshowImportEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AdminUserViewEntity

```ruby
admin_user_view = client.AdminUserView
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `Object` | No |  |
| `admin_notes` | `Object` | No |  |
| `agents_count` | `Integer` | No |  |
| `created_at` | `String` | Yes |  |
| `credits` | `Integer` | Yes |  |
| `email` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `industry` | `Object` | Yes |  |
| `is_admin` | `Boolean` | No |  |
| `is_bookmarked` | `Boolean` | No |  |
| `is_internal_user` | `Boolean` | No |  |
| `membership` | `Object` | Yes |  |
| `name` | `String` | Yes |  |
| `new_email` | `String` | Yes |  |
| `partner_external_user_id` | `String` | No |  |
| `partner_policy_code` | `Object` | No |  |
| `partner_source` | `Object` | No |  |
| `product_name` | `Object` | Yes |  |
| `product_url` | `Object` | Yes |  |
| `skip` | `Boolean` | Yes |  |
| `subscription_details` | `Object` | No |  |
| `subscription_status` | `Object` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.AdminUserView.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AdminUserView.list
results.each { |item| puts item.data_get }
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.AdminUserView.remove({ "user_id" => "user_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.AdminUserView.update({
  "user_id" => "user_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AdminUserViewEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AdminUsersTableItemEntity

```ruby
admin_users_table_item = client.AdminUsersTableItem
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activated` | `Boolean` | Yes |  |
| `agents_count` | `Integer` | No |  |
| `created_at` | `String` | Yes |  |
| `credits` | `Integer` | Yes |  |
| `demo_booked` | `Boolean` | Yes |  |
| `email` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `membership` | `Object` | Yes |  |
| `name` | `String` | Yes |  |
| `onboarding_flow` | `String` | Yes |  |
| `product_name` | `Object` | Yes |  |
| `product_url` | `Object` | Yes |  |
| `survey_data` | `Object` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AdminUsersTableItem.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AdminUsersTableItemEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AdminVideoRemixerEntity

```ruby
admin_video_remixer = client.AdminVideoRemixer
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity` | `String` | Yes |  |
| `allowed_platforms` | `Array` | No |  |
| `anchor_clip_id` | `String` | No |  |
| `atomicity_class` | `Object` | No |  |
| `auto_render` | `Boolean` | No |  |
| `campaign_allowed` | `Boolean` | No |  |
| `channel` | `String` | No |  |
| `channel_default` | `String` | No |  |
| `clip_id` | `String` | Yes |  |
| `clip_ids` | `Array` | No |  |
| `collected_at` | `String` | Yes |  |
| `comments` | `Object` | No |  |
| `completion_rate` | `Object` | No |  |
| `confirmed_duplicate_of` | `Object` | No |  |
| `consent_doc_uri` | `String` | No |  |
| `contact` | `String` | No |  |
| `conversions` | `Object` | No |  |
| `count` | `Integer` | No |  |
| `creator` | `String` | No |  |
| `creator_id` | `String` | No |  |
| `crop_window` | `Object` | No |  |
| `cta_product_id` | `String` | No |  |
| `days` | `Integer` | No |  |
| `derivative_edits_allowed` | `Boolean` | No |  |
| `enabled` | `Boolean` | No |  |
| `end_ms` | `Object` | No |  |
| `enqueue` | `Boolean` | No |  |
| `errors` | `Array` | No |  |
| `evidence` | `String` | Yes |  |
| `expected_revision` | `Object` | No |  |
| `expected_revisions` | `Hash` | Yes |  |
| `external_ai_allowed` | `Boolean` | No |  |
| `file` | `String` | Yes |  |
| `followers` | `Object` | No |  |
| `formula_id` | `String` | Yes |  |
| `formula_ids` | `Array` | Yes |  |
| `handles` | `Hash` | No |  |
| `hook_subtype` | `Object` | No |  |
| `hour_utc` | `Integer` | No |  |
| `human_role` | `String` | Yes |  |
| `idempotency_key` | `String` | Yes |  |
| `items` | `Array` | Yes |  |
| `kim_clip_ids` | `Array` | Yes |  |
| `kind` | `String` | Yes |  |
| `levels` | `Hash` | Yes |  |
| `likes` | `Object` | No |  |
| `media_enabled` | `Boolean` | Yes |  |
| `medical_claim_present` | `Boolean` | No |  |
| `minute_utc` | `Integer` | No |  |
| `music_bed_allowed` | `Boolean` | No |  |
| `music_policy` | `String` | No |  |
| `name` | `String` | Yes |  |
| `niche` | `String` | No |  |
| `notes` | `String` | No |  |
| `origin` | `String` | No |  |
| `owner_waiver` | `Boolean` | No |  |
| `paid_ads_allowed` | `Boolean` | No |  |
| `patient_identifiable` | `Boolean` | No |  |
| `person_type` | `String` | No |  |
| `pipeline` | `Boolean` | No |  |
| `planning_only` | `Boolean` | No |  |
| `platform` | `String` | Yes |  |
| `platform_post_id` | `String` | Yes |  |
| `policy` | `Hash` | Yes |  |
| `polish` | `String` | No |  |
| `post_url` | `String` | Yes |  |
| `posted_at` | `String` | Yes |  |
| `primary_role` | `Object` | No |  |
| `purpose` | `String` | Yes |  |
| `rate` | `Float` | No |  |
| `rationale` | `String` | No |  |
| `reason` | `String` | Yes |  |
| `reference_source_id` | `String` | No |  |
| `requires_medical_review` | `Boolean` | No |  |
| `review_status` | `Object` | No |  |
| `revision` | `Integer` | Yes |  |
| `rights_expires_at` | `Object` | No |  |
| `rights_status` | `String` | No |  |
| `run_id` | `String` | Yes |  |
| `sample_links` | `Array` | No |  |
| `secondary_roles` | `Object` | No |  |
| `seconds` | `Integer` | Yes |  |
| `seed` | `Integer` | No |  |
| `seed_base` | `Integer` | No |  |
| `sensitive_personal_data_present` | `Boolean` | No |  |
| `shares` | `Object` | No |  |
| `shoot` | `String` | No |  |
| `slots` | `Array` | Yes |  |
| `soundbite_title` | `Object` | No |  |
| `source` | `String` | Yes |  |
| `source_id` | `String` | Yes |  |
| `source_ids` | `Array` | Yes |  |
| `spend_usd` | `Object` | No |  |
| `spiciness` | `Object` | No |  |
| `spiciness_notes` | `String` | No |  |
| `start_ms` | `Object` | No |  |
| `status` | `String` | No |  |
| `terry_clip_ids` | `Array` | Yes |  |
| `testimonial_strength` | `Object` | No |  |
| `testimonial_type` | `Object` | No |  |
| `tier` | `String` | No |  |
| `timeline` | `Hash` | Yes |  |
| `topic` | `String` | No |  |
| `topic_tags` | `Object` | No |  |
| `total_target_ms` | `Integer` | Yes |  |
| `use_learned_weights` | `Boolean` | No |  |
| `views` | `Object` | No |  |
| `window` | `String` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.AdminVideoRemixer.create({
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

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.AdminVideoRemixer.load({ "clip_id" => "clip_id" })
```

#### `patch(reqdata, ctrl = nil) -> result`

Change part of an existing entity: only the fields given are sent. The data must include the entity `id`. Returns the patched entity and raises on error.

```ruby
result = client.AdminVideoRemixer.patch({
  # Only the fields to change
})
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.AdminVideoRemixer.remove({ "identifier" => "identifier" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.AdminVideoRemixer.update({
  "identifier" => "identifier",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AdminVideoRemixerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AdvanceStepEntity

```ruby
advance_step = client.AdvanceStep
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_step` | `String` | Yes |  |
| `onboarding_data_id` | `String` | Yes | UUID of the OnboardingData record |
| `success` | `Boolean` | Yes |  |
| `to_step` | `String` | Yes | Target step name |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.AdvanceStep.create({
  "onboarding_data_id" => "example_onboarding_data_id", # String
  "to_step" => "example_to_step", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AdvanceStepEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentEntity

```ruby
agent = client.Agent
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_connections` | `Integer` | Yes |  |
| `at_capacity` | `Boolean` | Yes |  |
| `id` | `String` | Yes |  |
| `is_active` | `Boolean` | Yes |  |
| `name` | `String` | Yes |  |
| `tiktok_stats` | `Object` | No |  |
| `type` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Agent.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentAccessCustomersHealthEntity

```ruby
agent_access_customers_health = client.AgentAccessCustomersHealth
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountType` | `Object` | No |  |
| `agentQuota` | `Integer` | Yes |  |
| `assignedAgentsByType` | `Hash` | Yes |  |
| `assignedAgentsTotal` | `Integer` | Yes |  |
| `createdAt` | `String` | Yes |  |
| `email` | `String` | Yes |  |
| `isInternalUser` | `Object` | No |  |
| `membership` | `Object` | No |  |
| `name` | `String` | No |  |
| `performance` | `Hash` | Yes |  |
| `productCount` | `Integer` | Yes |  |
| `subscriptionCurrentPeriodEnd` | `Object` | No |  |
| `subscriptionDetails` | `Object` | No |  |
| `subscriptionStatus` | `Object` | No |  |
| `usage` | `Hash` | Yes |  |
| `userId` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AgentAccessCustomersHealth.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentAccessCustomersHealthEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentAccessOverviewEntity

```ruby
agent_access_overview = client.AgentAccessOverview
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeUsers` | `Integer` | Yes |  |
| `generatedAt` | `String` | Yes |  |
| `newUsersYesterday` | `Integer` | Yes |  |
| `onboardingContextCounts` | `Hash` | Yes |  |
| `onboardingCurrentStepCounts` | `Hash` | Yes |  |
| `onboardingCurrentStepWindow` | `Hash` | Yes |  |
| `onboardingFlowVariantCounts` | `Hash` | Yes |  |
| `onboardingLockedUntilActivation` | `Integer` | Yes |  |
| `onboardingRecordsTotal` | `Integer` | Yes |  |
| `onboardingRecordsWindow` | `Integer` | Yes |  |
| `onboardingSocialScanStatusCounts` | `Hash` | Yes |  |
| `onboardingWebsiteScrapeStatusCounts` | `Hash` | Yes |  |
| `subscriptionStatusCounts` | `Hash` | Yes |  |
| `totalInternalUsers` | `Integer` | Yes |  |
| `totalUsers` | `Integer` | Yes |  |
| `trialStartedYesterday` | `Integer` | Yes |  |
| `trialingUsers` | `Integer` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.AgentAccessOverview.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentAccessOverviewEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentAccessPhilHourlyNotificationEntity

```ruby
agent_access_phil_hourly_notification = client.AgentAccessPhilHourlyNotification
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `generatedAt` | `String` | Yes |  |
| `phoneHealth` | `Hash` | Yes |  |
| `scheduledPosts` | `Hash` | Yes |  |
| `targetDate` | `String` | Yes |  |
| `uploadPostInstagramHealth` | `Hash` | Yes |  |
| `uploadPostTiktokHealth` | `Hash` | Yes |  |
| `uploadPostYoutubeHealth` | `Hash` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.AgentAccessPhilHourlyNotification.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentAccessPhilHourlyNotificationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentAccessPhilStatsRefreshEntity

```ruby
agent_access_phil_stats_refresh = client.AgentAccessPhilStatsRefresh
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `generatedAt` | `String` | Yes |  |
| `statsRefresh` | `Hash` | Yes |  |
| `targetDate` | `String` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.AgentAccessPhilStatsRefresh.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentAccessPhilStatsRefreshEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentAccessPhilVideoEntity

```ruby
agent_access_phil_video = client.AgentAccessPhilVideo
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `generatedAt` | `String` | Yes |  |
| `targetDate` | `String` | Yes |  |
| `videos` | `Hash` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.AgentAccessPhilVideo.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentAccessPhilVideoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentAccessUserAgentEntity

```ruby
agent_access_user_agent = client.AgentAccessUserAgent
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentQuota` | `Integer` | Yes |  |
| `agents` | `Array` | Yes |  |
| `assignedByType` | `Hash` | Yes |  |
| `assignedTotal` | `Integer` | Yes |  |
| `email` | `String` | Yes |  |
| `products` | `Array` | Yes |  |
| `userId` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AgentAccessUserAgent.list({ "email" => "example" })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentAccessUserAgentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentAccessUserPhoneFarmEntity

```ruby
agent_access_user_phone_farm = client.AgentAccessUserPhoneFarm
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar` | `Object` | No |  |
| `facebookUrl` | `Object` | No |  |
| `id` | `String` | Yes |  |
| `instagramUrl` | `Object` | No |  |
| `lastAdminSyncedAt` | `Object` | No |  |
| `name` | `String` | Yes |  |
| `productId` | `Object` | No |  |
| `productName` | `Object` | No |  |
| `tiktokUrl` | `Object` | No |  |
| `type` | `Object` | No |  |
| `uploadPostPlatforms` | `Object` | No |  |
| `youtubeUrl` | `Object` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AgentAccessUserPhoneFarm.list({ "email" => "example" })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentAccessUserPhoneFarmEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentAccessUserPostEntity

```ruby
agent_access_user_post = client.AgentAccessUserPost
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deltaYesterday` | `Integer` | Yes |  |
| `expectedVideosPerDay` | `Integer` | Yes |  |
| `postedToday` | `Integer` | Yes |  |
| `postedYesterday` | `Integer` | Yes |  |
| `productId` | `Object` | No |  |
| `productName` | `Object` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AgentAccessUserPost.list({ "email" => "example" })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentAccessUserPostEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentAccessUserSummaryEntity

```ruby
agent_access_user_summary = client.AgentAccessUserSummary
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deletedAt` | `Object` | No |  |
| `id` | `String` | Yes |  |
| `isActive` | `Object` | No |  |
| `name` | `String` | Yes |  |
| `url` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AgentAccessUserSummary.list({ "email" => "example" })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentAccessUserSummaryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentAccessUserVideoEntity

```ruby
agent_access_user_video = client.AgentAccessUserVideo
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allTime` | `Hash` | Yes |  |
| `email` | `String` | Yes |  |
| `today` | `Hash` | Yes |  |
| `userId` | `String` | Yes |  |
| `yesterday` | `Hash` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.AgentAccessUserVideo.load({ "email" => "email" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentAccessUserVideoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentAccessUserWinningAdEntity

```ruby
agent_access_user_winning_ad = client.AgentAccessUserWinningAd
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `productId` | `String` | Yes |  |
| `productName` | `String` | Yes |  |
| `winningAds` | `Array` | Yes |  |
| `winningAdsCount` | `Integer` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AgentAccessUserWinningAd.list({ "email" => "example" })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentAccessUserWinningAdEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentAccessWinningAdsSummaryEntity

```ruby
agent_access_winning_ads_summary = client.AgentAccessWinningAdsSummary
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `String` | Yes |  |
| `name` | `String` | No |  |
| `productCount` | `Integer` | Yes |  |
| `productsWithWinningAds` | `Integer` | Yes |  |
| `subscriptionStatus` | `Object` | No |  |
| `totalWinningAds` | `Integer` | Yes |  |
| `userId` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AgentAccessWinningAdsSummary.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentAccessWinningAdsSummaryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentDetailEntity

```ruby
agent_detail = client.AgentDetail
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeConnections` | `Object` | No |  |
| `assignedAt` | `Object` | No |  |
| `avatar` | `String` | Yes |  |
| `bio` | `Object` | No |  |
| `facebookUrl` | `Object` | No |  |
| `id` | `String` | Yes |  |
| `instagramUrl` | `Object` | No |  |
| `isActive` | `Boolean` | No |  |
| `name` | `String` | Yes |  |
| `role` | `Object` | No |  |
| `tiktokStats` | `Object` | No |  |
| `tiktokUrl` | `Object` | No |  |
| `type` | `String` | Yes |  |
| `uploadPostPlatforms` | `Object` | No |  |
| `youtubeUrl` | `Object` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AgentDetail.list
results.each { |item| puts item.data_get }
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.AgentDetail.update({
  "upload_post_agent_id" => "upload_post_agent_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentDetailEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentHealthEntity

```ruby
agent_health = client.AgentHealth
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `daily` | `Array` | Yes |  |
| `dates` | `Array` | Yes |  |
| `generated_at` | `String` | Yes |  |
| `groups` | `Array` | Yes |  |
| `latest` | `Hash` | Yes |  |
| `live_date` | `Object` | No |  |
| `phone_admin_generated_at` | `String` | Yes |  |
| `platform` | `String` | No |  |
| `post_target` | `Integer` | Yes |  |
| `qa_managed_agent_ids` | `Array` | No |  |
| `scope_prefixes` | `Array` | Yes |  |
| `timezone` | `String` | Yes |  |
| `warmup_target` | `Integer` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AgentHealth.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentHealthEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentHealthCustomerOptionEntity

```ruby
agent_health_customer_option = client.AgentHealthCustomerOption
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_count` | `Integer` | Yes |  |
| `email` | `String` | Yes |  |
| `user_id` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AgentHealthCustomerOption.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentHealthCustomerOptionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentHealthDetailEntity

```ruby
agent_health_detail = client.AgentHealthDetail
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_issue_total` | `Integer` | No |  |
| `date` | `String` | Yes |  |
| `generated_at` | `String` | Yes |  |
| `group_id` | `String` | Yes |  |
| `has_more` | `Boolean` | Yes |  |
| `issue_total` | `Integer` | Yes |  |
| `issues` | `Array` | Yes |  |
| `limit` | `Integer` | Yes |  |
| `metric` | `String` | Yes |  |
| `offset` | `Integer` | Yes |  |
| `warmup_runs` | `Array` | No |  |
| `warning_total` | `Integer` | No |  |
| `warnings` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AgentHealthDetail.list({ "date" => "example", "group_id" => "example" })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentHealthDetailEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentPostEntity

```ruby
agent_post = client.AgentPost
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `Integer` | Yes |  |
| `error_message` | `Object` | Yes |  |
| `id` | `String` | Yes |  |
| `likes` | `Integer` | Yes |  |
| `product_id` | `String` | Yes |  |
| `results` | `Object` | Yes |  |
| `scheduled_datetime` | `String` | Yes |  |
| `source_type` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `user_email` | `String` | Yes |  |
| `user_id` | `String` | Yes |  |
| `user_name` | `Object` | Yes |  |
| `video_id` | `String` | Yes |  |
| `video_url` | `Object` | Yes |  |
| `views` | `Integer` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AgentPost.list({ "id" => "example" })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentPostEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentStatEntity

```ruby
agent_stat = client.AgentStat
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agents_needed` | `Integer` | Yes |  |
| `dedicated_agents` | `Hash` | Yes |  |
| `shared_agents` | `Hash` | Yes |  |
| `total_agents` | `Integer` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.AgentStat.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentStatEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentSummaryEntity

```ruby
agent_summary = client.AgentSummary
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_count` | `Integer` | Yes |  |
| `favicon_url` | `Object` | No |  |
| `product_id` | `String` | Yes |  |
| `product_name` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AgentSummary.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentSummaryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentsSummaryEntity

```ruby
agents_summary = client.AgentsSummary
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `total_agents` | `Integer` | Yes |  |
| `total_agents_count_sum` | `Integer` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.AgentsSummary.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentsSummaryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AnalysisStatusEntity

```ruby
analysis_status = client.AnalysisStatus
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.AnalysisStatus.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AnalysisStatusEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AnalyticsPostEntity

```ruby
analytics_post = client.AnalyticsPost
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent` | `Object` | No |  |
| `comment` | `Object` | No |  |
| `created_at` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `product_id` | `String` | No |  |
| `queue_position` | `Object` | No |  |
| `results` | `Object` | No |  |
| `scheduled_datetime` | `String` | Yes |  |
| `scraped_posts` | `Object` | No |  |
| `source_type` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `updated_at` | `String` | Yes |  |
| `video` | `Object` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AnalyticsPost.list({ "date_from" => "example" })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AnalyticsPostEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AnalyzeProductEntity

```ruby
analyze_product = client.AnalyzeProduct
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instagram_username` | `Object` | No |  |
| `message` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `url` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.AnalyzeProduct.create({
  "url" => "example_url", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AnalyzeProductEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AssignAgentEntity

```ruby
assign_agent = client.AssignAgent
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent` | `Hash` | Yes | Agent information for V6. |
| `assignment` | `Hash` | Yes | Assignment information for V6. |
| `mock_agents` | `Array` | Yes |  |
| `onboarding_data_id` | `String` | Yes | UUID of the OnboardingData record |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.AssignAgent.create({
  "onboarding_data_id" => "example_onboarding_data_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AssignAgentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AuthEntity

```ruby
auth = client.Auth
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AuthEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AutoScheduleSettingEntity

```ruby
auto_schedule_setting = client.AutoScheduleSetting
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `can_enable_repost` | `Boolean` | No |  |
| `effective_posted_video_reuse_percent` | `Integer` | Yes |  |
| `enabled_video_types` | `Object` | No | List of enabled video type filters |
| `is_enabled` | `Boolean` | Yes |  |
| `lock_video_regeneration_controls` | `Boolean` | No |  |
| `membership_tier` | `String` | Yes |  |
| `posted_video_reuse_percent` | `Object` | No |  |
| `product_id` | `String` | No |  |
| `repost_source` | `Object` | No |  |
| `videos_per_day` | `Integer` | Yes |  |

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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.AutoScheduleSetting.load()
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.AutoScheduleSetting.update({
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AutoScheduleSettingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BulkTikTokStatsUpdateEntity

```ruby
bulk_tik_tok_stats_update = client.BulkTikTokStatsUpdate
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `failedIds` | `Array` | Yes |  |
| `updatedCount` | `Integer` | Yes |  |
| `updates` | `Array` | Yes |  |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.BulkTikTokStatsUpdate.update({
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BulkTikTokStatsUpdateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CarouselEntity

```ruby
carousel = client.Carousel
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `String` | Yes |  |
| `agent_name` | `String` | Yes |  |
| `audit_created_at` | `Object` | No |  |
| `audit_snapshot_sha256` | `Object` | No |  |
| `caption` | `Object` | No |  |
| `comments` | `Object` | No |  |
| `fit_score` | `Object` | No |  |
| `format` | `String` | Yes |  |
| `formula` | `Hash` | No |  |
| `formula_id` | `String` | No |  |
| `formula_name` | `Object` | No |  |
| `generation` | `Hash` | No |  |
| `id` | `String` | No |  |
| `image_prompt` | `Object` | No |  |
| `likes` | `Object` | No |  |
| `main_prompt` | `Object` | No |  |
| `metrics_updated_at` | `Object` | No |  |
| `post_url` | `Object` | No |  |
| `profile_url` | `Object` | No |  |
| `qa` | `Hash` | No |  |
| `qa_status` | `String` | Yes |  |
| `qa_verdict` | `Object` | No |  |
| `quality_score` | `Object` | No |  |
| `queue_id` | `String` | Yes |  |
| `relevance_score` | `Object` | No |  |
| `scheduled_at` | `String` | Yes |  |
| `slide_count` | `Integer` | Yes |  |
| `slides` | `Array` | Yes |  |
| `source` | `Hash` | No |  |
| `status` | `String` | Yes |  |
| `thumbnail_url` | `Object` | No |  |
| `title` | `String` | Yes |  |
| `video_id` | `String` | Yes |  |
| `views` | `Object` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Carousel.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Carousel.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Carousel.load({ "id" => "carousel_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CarouselEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CarouselAgentDetailEntity

```ruby
carousel_agent_detail = client.CarouselAgentDetail
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `String` | Yes |  |
| `agent_name` | `String` | Yes |  |
| `connection_status` | `Object` | No |  |
| `followers` | `Object` | No |  |
| `following` | `Object` | No |  |
| `metrics_updated_at` | `Object` | No |  |
| `phone_admin_status` | `String` | Yes |  |
| `profile_likes` | `Object` | No |  |
| `profile_url` | `Object` | No |  |
| `warmup_days` | `Object` | No |  |
| `warmup_hold_until` | `Object` | No |  |
| `warmup_status` | `String` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.CarouselAgentDetail.load({ "agent_id" => "agent_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CarouselAgentDetailEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CarouselStatusEntity

```ruby
carousel_status = client.CarouselStatus
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `caption` | `Object` | Yes |  |
| `error` | `Object` | No |  |
| `id` | `String` | No |  |
| `image_model` | `Object` | No |  |
| `image_provider` | `Object` | No |  |
| `image_task_id` | `String` | No |  |
| `image_url` | `Object` | Yes |  |
| `index` | `Integer` | Yes |  |
| `prompt` | `Object` | Yes |  |
| `status` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.CarouselStatus.list({ "id" => "example" })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CarouselStatusEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ChatEntity

```ruby
chat = client.Chat
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `idempotencyKey` | `String` | Yes |  |
| `message` | `String` | Yes |  |
| `sessionId` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Chat.create({
  "session_id" => "example_session_id", # String
  "idempotencyKey" => "example_idempotencyKey", # String
  "message" => "example_message", # String
  "sessionId" => "example_sessionId", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ChatEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ChatHistoryEntity

```ruby
chat_history = client.ChatHistory
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `chatSubVariant` | `String` | Yes |  |
| `createdAt` | `String` | Yes |  |
| `messages` | `Array` | Yes |  |
| `model` | `Object` | No |  |
| `onboardingDataId` | `String` | Yes |  |
| `routeRecommendation` | `Object` | No |  |
| `salesStage` | `String` | Yes |  |
| `selectedPlan` | `Object` | No |  |
| `session` | `Hash` | Yes |  |
| `sessionId` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `updatedAt` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.ChatHistory.create({
  "onboardingDataId" => "example_onboardingDataId", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.ChatHistory.load({ "session_id" => "session_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ChatHistoryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ChatSessionEntity

```ruby
chat_session = client.ChatSession
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `chatSubVariant` | `String` | Yes |  |
| `createdAt` | `String` | Yes |  |
| `model` | `Object` | No |  |
| `plan` | `Object` | No |  |
| `route` | `Object` | No |  |
| `routeRecommendation` | `Object` | No |  |
| `salesStage` | `String` | Yes |  |
| `selectedPlan` | `Object` | No |  |
| `sessionId` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `updatedAt` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.ChatSession.create({
  "session_id" => "example_session_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ChatSessionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CommentEntity

```ruby
comment = client.Comment
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Comment.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CommentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CommentCampaignEntity

```ruby
comment_campaign = client.CommentCampaign
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_daily_limit` | `Integer` | No |  |
| `account_weekly_limit` | `Integer` | No |  |
| `action` | `String` | Yes |  |
| `active_days_per_week` | `Integer` | No |  |
| `agent_id` | `String` | Yes |  |
| `allowlist` | `Array` | No |  |
| `analysis_daily_limit` | `Integer` | No |  |
| `analysis_model` | `String` | No |  |
| `analysis_reservation_usd` | `Float` | No |  |
| `approved_markets` | `Array` | No |  |
| `brand_forward_enabled` | `Boolean` | No |  |
| `briefs` | `Hash` | No |  |
| `candidate_only` | `Boolean` | No |  |
| `claims` | `Array` | No |  |
| `cohort_removal_threshold` | `Integer` | No |  |
| `daily_cost_ceiling_usd` | `Float` | No |  |
| `delivery_mode` | `String` | No |  |
| `disclosure_mode` | `String` | No |  |
| `disclosure_template` | `String` | No |  |
| `draft_options_count` | `Integer` | No |  |
| `draft_review_reservation_usd` | `Float` | No |  |
| `exceptional_daily_cap_approved` | `Boolean` | No |  |
| `execution_enabled` | `Boolean` | No |  |
| `experiment_styles` | `Array` | No |  |
| `inventory_factor` | `Float` | No |  |
| `keywords` | `Array` | No |  |
| `max_duration_seconds` | `Object` | No |  |
| `metadata_pass_rate` | `Float` | No |  |
| `min_interval_minutes` | `Integer` | No |  |
| `mode` | `String` | No |  |
| `monitored_creators` | `Array` | No |  |
| `platform` | `String` | No |  |
| `platform_permission_evidence` | `String` | No |  |
| `policy_approved_by` | `String` | No |  |
| `policy_expires_at` | `Object` | No |  |
| `policy_version` | `String` | No |  |
| `product_daily_limit` | `Integer` | No |  |
| `qualification_rate` | `Float` | No |  |
| `raw_daily_limit` | `Integer` | No |  |
| `raw_result_reservation_usd` | `Float` | No |  |
| `reason` | `String` | Yes |  |
| `replies_enabled` | `Boolean` | No |  |
| `request_key` | `String` | Yes |  |
| `reviewer_model` | `String` | No |  |
| `scan_interval_hours` | `Integer` | No |  |
| `search_change_reason` | `String` | No |  |
| `search_effective_at` | `Object` | No |  |
| `shadow_sample_limit` | `Integer` | No |  |
| `spent_seconds` | `Object` | No |  |
| `task_ttl_hours` | `Integer` | No |  |
| `top_comment_analysis_enabled` | `Boolean` | No |  |
| `writer_model` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.CommentCampaign.create({
  "product_id" => "example_product_id", # String
  "action" => "example_action", # String
  "agent_id" => "example_agent_id", # String
  "reason" => "example_reason", # String
  "request_key" => "example_request_key", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.CommentCampaign.load({ "product_id" => "product_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.CommentCampaign.update({
  "product_id" => "product_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CommentCampaignEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CompleteChatCheckoutEntity

```ruby
complete_chat_checkout = client.CompleteChatCheckout
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `Object` | No |  |
| `onboarding_data_id` | `String` | Yes |  |
| `product_id` | `String` | No |  |
| `ready` | `Boolean` | No |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.CompleteChatCheckout.create({
  "onboarding_data_id" => "example_onboarding_data_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CompleteChatCheckoutEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CreateBlackoutSora2VideoEntity

```ruby
create_blackout_sora2_video = client.CreateBlackoutSora2Video
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `main_prompt` | `String` | Yes |  |
| `media_asset_id` | `String` | Yes |  |
| `product_id` | `String` | Yes |  |
| `requires_polling` | `Boolean` | No |  |
| `video` | `Hash` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.CreateBlackoutSora2Video.create({
  "main_prompt" => "example_main_prompt", # String
  "media_asset_id" => "example_media_asset_id", # String
  "product_id" => "example_product_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CreateBlackoutSora2VideoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CreateCarouselEntity

```ruby
create_carousel = client.CreateCarousel
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `copy_mode` | `Object` | No |  |
| `expected_owner_user_id` | `String` | No |  |
| `expected_product_id` | `String` | No |  |
| `expected_product_name` | `Object` | No |  |
| `image_model` | `String` | No |  |
| `mention_product` | `Boolean` | No |  |
| `message` | `String` | Yes |  |
| `num_slides` | `Integer` | No |  |
| `owner_user_id` | `String` | No |  |
| `product_id` | `String` | No | Product ID to use. |
| `product_name` | `Object` | No |  |
| `product_placement` | `String` | No |  |
| `request_id` | `String` | No |  |
| `script_style_custom` | `Object` | No |  |
| `script_style_id` | `String` | No |  |
| `selected_hook` | `Object` | No |  |
| `status` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |
| `template_id` | `String` | Yes |  |
| `video_id` | `String` | Yes |  |
| `visual_style_custom` | `Object` | No |  |
| `visual_style_id` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.CreateCarousel.create({
  "template_id" => "example_template_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CreateCarouselEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CreateProductEntity

```ruby
create_product = client.CreateProduct
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `onboarding_data_id` | `String` | Yes | UUID of the OnboardingData record |
| `product_id` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |
| `videos_queued` | `Integer` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.CreateProduct.create({
  "onboarding_data_id" => "example_onboarding_data_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CreateProductEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CreateResetProductV6Entity

```ruby
create_reset_product_v6 = client.CreateResetProductV6
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agents_transferred` | `Integer` | Yes |  |
| `credits_deducted` | `Integer` | Yes |  |
| `onboarding_data_id` | `String` | Yes |  |
| `product_id` | `String` | Yes |  |
| `remaining_credits` | `Integer` | Yes |  |
| `success` | `Boolean` | Yes |  |
| `videos_queued` | `Integer` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.CreateResetProductV6.create({
  "onboarding_data_id" => "example_onboarding_data_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CreateResetProductV6Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CreateSora2VideoEntity

```ruby
create_sora2_video = client.CreateSora2Video
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `image_prompt` | `Object` | No |  |
| `main_prompt` | `String` | Yes |  |
| `model` | `String` | No |  |
| `requires_polling` | `Boolean` | No |  |
| `seconds` | `String` | No |  |
| `size` | `String` | No |  |
| `video` | `Hash` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.CreateSora2Video.create({
  "main_prompt" => "example_main_prompt", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CreateSora2VideoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CreateVariationEntity

```ruby
create_variation = client.CreateVariation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hook_duration` | `Integer` | Yes |  |
| `media_asset_id` | `String` | Yes |  |
| `message` | `String` | Yes |  |
| `product_id` | `String` | Yes |  |
| `prompt` | `String` | Yes |  |
| `task_id` | `String` | No |  |
| `video_id` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.CreateVariation.create({
  "hook_duration" => 1, # Integer
  "media_asset_id" => "example_media_asset_id", # String
  "product_id" => "example_product_id", # String
  "prompt" => "example_prompt", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CreateVariationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CustomerEntity

```ruby
customer = client.Customer
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `Object` | No |  |
| `assigned_agents_count` | `Integer` | Yes |  |
| `email` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `is_migrated` | `Boolean` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Customer.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CustomerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CustomerHealthEntity

```ruby
customer_health = client.CustomerHealth
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_agents` | `Hash` | Yes |  |
| `available_dates` | `Array` | Yes |  |
| `date` | `String` | Yes |  |
| `email` | `String` | Yes |  |
| `entries` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `performance_overview` | `Hash` | Yes |  |
| `platform_coverage_summary` | `Hash` | Yes |  |
| `user_id` | `String` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.CustomerHealth.load({ "id" => "customer_health_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CustomerHealthEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CustomerHealthAllCustomersItemEntity

```ruby
customer_health_all_customers_item = client.CustomerHealthAllCustomersItem
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `Object` | No |  |
| `assigned_agents_count` | `Integer` | Yes |  |
| `daily_stats` | `Array` | Yes |  |
| `email` | `String` | Yes |  |
| `is_migrated` | `Boolean` | No |  |
| `total_views` | `Integer` | Yes |  |
| `user_id` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.CustomerHealthAllCustomersItem.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CustomerHealthAllCustomersItemEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CustomerHealthViewsSummaryEntity

```ruby
customer_health_views_summary = client.CustomerHealthViewsSummary
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `average_views_per_result` | `Integer` | Yes |  |
| `date` | `String` | Yes |  |
| `end_date` | `Object` | No |  |
| `paid_users_count` | `Integer` | Yes |  |
| `posted_results` | `Integer` | Yes |  |
| `range` | `String` | Yes |  |
| `start_date` | `Object` | No |  |
| `top_users` | `Array` | Yes |  |
| `total_views` | `Integer` | Yes |  |
| `trend` | `Array` | Yes |  |
| `trend_granularity` | `String` | Yes |  |
| `user_email` | `Object` | No |  |
| `user_id` | `String` | No |  |
| `users_with_views` | `Integer` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.CustomerHealthViewsSummary.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CustomerHealthViewsSummaryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DailyEntity

```ruby
daily = client.Daily
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Daily.create({
  "id" => "example_id", # String
  "day" => "example_day", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DailyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DailyStatusEntity

```ruby
daily_status = client.DailyStatus
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.DailyStatus.load({ "id" => "daily_status_id", "day" => "day" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DailyStatusEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DedicatedAgentsDashboardEntity

```ruby
dedicated_agents_dashboard = client.DedicatedAgentsDashboard
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_connections` | `Integer` | Yes |  |
| `assigned_user_id` | `String` | No |  |
| `assigned_user_ids` | `Array` | No |  |
| `bio` | `Object` | Yes |  |
| `id` | `String` | Yes |  |
| `instagram_url` | `Object` | No |  |
| `is_active` | `Boolean` | Yes |  |
| `last_admin_synced_at` | `Object` | No |  |
| `name` | `String` | Yes |  |
| `role` | `Object` | Yes |  |
| `tiktok_stats` | `Object` | No |  |
| `tiktok_url` | `Object` | No |  |
| `today_failed_entries` | `Array` | No |  |
| `today_stats` | `Hash` | Yes |  |
| `upload_post_platforms` | `Object` | No |  |
| `upload_post_profile` | `Object` | No |  |
| `yesterday_failed_entries` | `Array` | No |  |
| `yesterday_stats` | `Hash` | Yes |  |
| `youtube_url` | `Object` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.DedicatedAgentsDashboard.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DedicatedAgentsDashboardEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EnterpriseAgentEntity

```ruby
enterprise_agent = client.EnterpriseAgent
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `Integer` | Yes |  |
| `product_id` | `String` | Yes |  |
| `source_product_id` | `String` | Yes |  |
| `target_product_id` | `String` | Yes |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `count` | - | Yes |
| `product_id` | - | - |
| `source_product_id` | - | - |
| `target_product_id` | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.EnterpriseAgent.create({
  "product_id" => "example_product_id", # String
  "source_product_id" => "example_source_product_id", # String
  "target_product_id" => "example_target_product_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.EnterpriseAgent.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EnterpriseAgentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EnterpriseProductEntity

```ruby
enterprise_product = client.EnterpriseProduct
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.EnterpriseProduct.load({ "product_id" => "product_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EnterpriseProductEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ExactAvailabilityEntity

```ruby
exact_availability = client.ExactAvailability
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.ExactAvailability.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ExactAvailabilityEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ExactFormulaEntity

```ruby
exact_formula = client.ExactFormula
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.ExactFormula.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ExactFormulaEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ExtractV2Entity

```ruby
extract_v2 = client.ExtractV2
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instagram_username` | `Object` | No |  |
| `message` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `url` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.ExtractV2.create({
  "url" => "example_url", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ExtractV2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FailedPostEntity

```ruby
failed_post = client.FailedPost
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `String` | Yes |  |
| `agent_name` | `Object` | Yes |  |
| `agent_platforms` | `Object` | Yes |  |
| `error_message` | `Object` | Yes |  |
| `id` | `String` | Yes |  |
| `product_id` | `String` | Yes |  |
| `results` | `Object` | Yes |  |
| `scheduled_datetime` | `String` | Yes |  |
| `source_type` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `user_email` | `String` | Yes |  |
| `user_id` | `String` | Yes |  |
| `user_name` | `Object` | Yes |  |
| `video_id` | `String` | Yes |  |
| `video_url` | `Object` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.FailedPost.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FailedPostEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FileEntity

```ruby
file = client.File
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.File.create({
  "file" => "example_file", # String
})
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FileEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GenerateBlackoutSora2PromptEntity

```ruby
generate_blackout_sora2_prompt = client.GenerateBlackoutSora2Prompt
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `media_asset_id` | `String` | Yes |  |
| `product_id` | `String` | Yes |  |
| `prompt` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.GenerateBlackoutSora2Prompt.create({
  "media_asset_id" => "example_media_asset_id", # String
  "product_id" => "example_product_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GenerateBlackoutSora2PromptEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GeneratePomelliDemoEntity

```ruby
generate_pomelli_demo = client.GeneratePomelliDemo
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_demo_count` | `Integer` | Yes |  |
| `max_demos` | `Integer` | No |  |
| `message` | `String` | Yes |  |
| `product_id` | `String` | Yes | UUID of the Product |
| `success` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.GeneratePomelliDemo.create({
  "product_id" => "example_product_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GeneratePomelliDemoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GeneratePromptEntity

```ruby
generate_prompt = client.GeneratePrompt
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hook_duration` | `Integer` | Yes |  |
| `media_asset_id` | `String` | Yes |  |
| `media_asset_url` | `String` | Yes |  |
| `prompt` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.GeneratePrompt.create({
  "media_asset_id" => "example_media_asset_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GeneratePromptEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GenerateSora2PromptEntity

```ruby
generate_sora2_prompt = client.GenerateSora2Prompt
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `prompt` | `String` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.GenerateSora2Prompt.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GenerateSora2PromptEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## HealthrxEntity

```ruby
healthrx = client.Healthrx
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `String` | No |  |
| `action` | `String` | No |  |
| `agent_id` | `String` | Yes |  |
| `attempt` | `Integer` | Yes |  |
| `avatar_present` | `Boolean` | No |  |
| `benchmark_set` | `String` | Yes |  |
| `commercial` | `Boolean` | No |  |
| `commercial_license_evidence` | `String` | Yes |  |
| `content_id` | `String` | Yes |  |
| `dimensions` | `Hash` | Yes |  |
| `duration_seconds` | `Integer` | No |  |
| `evidence` | `String` | Yes |  |
| `evidence_urls` | `Array` | Yes |  |
| `external_key` | `String` | Yes |  |
| `format` | `String` | No |  |
| `includes_all_attempt_costs` | `Boolean` | No |  |
| `input_specification` | `Hash` | Yes |  |
| `kind` | `String` | Yes |  |
| `level` | `Integer` | No |  |
| `measured_at` | `String` | Yes |  |
| `model_version` | `String` | Yes |  |
| `paid_campaign_id` | `String` | No |  |
| `parent_content_id` | `String` | No |  |
| `paused` | `Boolean` | Yes |  |
| `pillar` | `String` | Yes |  |
| `profile` | `Hash` | Yes |  |
| `promotion_evidence` | `String` | No |  |
| `provider` | `String` | Yes |  |
| `provider_invoice_evidence` | `String` | Yes |  |
| `reason` | `String` | Yes |  |
| `reference_version` | `String` | Yes |  |
| `request_key` | `String` | Yes |  |
| `scope` | `String` | No |  |
| `test_variable` | `String` | Yes |  |
| `topic` | `String` | Yes |  |
| `total_cost_usd` | `Float` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Healthrx.create({
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Healthrx.load({ "product_id" => "product_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `HealthrxEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## InitResetProductV6Entity

```ruby
init_reset_product_v6 = client.InitResetProductV6
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_schedule_disabled` | `Boolean` | Yes |  |
| `old_product_id` | `String` | Yes |  |
| `product_id` | `String` | No |  |
| `queue_entries_cleared` | `Integer` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.InitResetProductV6.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `InitResetProductV6Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IriEntity

```ruby
iri = client.Iri
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `correlationId` | `Object` | No |  |
| `idempotencyKey` | `String` | Yes |  |
| `productId` | `Object` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Iri.create({
  "connector_id" => "example_connector_id", # String
  "idempotencyKey" => "example_idempotencyKey", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IriEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IrisCapabilityEntity

```ruby
iris_capability = client.IrisCapability
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `capability` | `String` | Yes |  |
| `correlationId` | `String` | Yes |  |
| `errorCode` | `Object` | No |  |
| `externalProductId` | `Object` | No |  |
| `externalUserId` | `String` | Yes |  |
| `id` | `String` | No |  |
| `idempotencyKey` | `String` | Yes |  |
| `input` | `Hash` | No |  |
| `membershipId` | `Object` | No |  |
| `message` | `Object` | No |  |
| `ok` | `Boolean` | Yes |  |
| `platformAccountId` | `Object` | No |  |
| `platformLinkId` | `Object` | No |  |
| `productScope` | `String` | Yes |  |
| `requestedBy` | `Hash` | No |  |
| `result` | `Hash` | No |  |
| `retryable` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.IrisCapability.create({
  "id" => "example_id", # String
  "capability" => "example_capability", # String
  "correlationId" => "example_correlationId", # String
  "externalUserId" => "example_externalUserId", # String
  "idempotencyKey" => "example_idempotencyKey", # String
  "productScope" => "example_productScope", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IrisCapabilityEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IrisChatEntity

```ruby
iris_chat = client.IrisChat
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artifacts` | `Array` | No |  |
| `correlationId` | `String` | Yes |  |
| `idempotencyKey` | `String` | Yes |  |
| `message` | `String` | Yes |  |
| `mode` | `String` | Yes |  |
| `ok` | `Boolean` | No |  |
| `pageContext` | `Hash` | No |  |
| `productId` | `Object` | No |  |
| `runtimeStatus` | `String` | Yes |  |
| `sessionId` | `Object` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.IrisChat.create({
  "correlationId" => "example_correlationId", # String
  "idempotencyKey" => "example_idempotencyKey", # String
  "message" => "example_message", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IrisChatEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IrisConnectorEntity

```ruby
iris_connector = client.IrisConnector
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectors` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.IrisConnector.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IrisConnectorEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IrisStatusEntity

```ruby
iris_status = client.IrisStatus
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectorsPreview` | `Array` | No |  |
| `product` | `Object` | No |  |
| `status` | `Hash` | Yes |  |
| `tasksPreview` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.IrisStatus.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IrisStatusEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IrisTaskEntity

```ruby
iris_task = client.IrisTask
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approvalRequired` | `Boolean` | No |  |
| `cadence` | `String` | No |  |
| `capability` | `Object` | No |  |
| `completed` | `Array` | No |  |
| `description` | `String` | No |  |
| `discover` | `Array` | No |  |
| `productId` | `Object` | No |  |
| `recurring` | `Array` | No |  |
| `requiredConnectors` | `Array` | No |  |
| `title` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.IrisTask.create({
  "title" => "example_title", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.IrisTask.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IrisTaskEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IrisUsageEntity

```ruby
iris_usage = client.IrisUsage
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `eventCount` | `Integer` | No |  |
| `events` | `Array` | No |  |
| `membershipId` | `Object` | No |  |
| `productScope` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.IrisUsage.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IrisUsageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LandingEntity

```ruby
landing = client.Landing
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Landing.create({
  "index" => 1, # Integer
  "file" => "example_file", # String
})
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LandingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LandingStatEntity

```ruby
landing_stat = client.LandingStat
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `landing` | `Hash` | Yes |  |
| `microhub` | `Hash` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.LandingStat.load({ "slug" => "slug" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LandingStatEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LandingStatusEntity

```ruby
landing_status = client.LandingStatus
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errorMessage` | `Object` | No |  |
| `landingStatus` | `String` | Yes |  |
| `microhubStatus` | `String` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.LandingStatus.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LandingStatusEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LinkInBioEntity

```ruby
link_in_bio = client.LinkInBio
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `linkInBioType` | `String` | Yes |  |
| `redirectUrl` | `String` | Yes |  |
| `slug` | `String` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.LinkInBio.load({ "slug" => "slug" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LinkInBioEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LinkInDmEntity

```ruby
link_in_dm = client.LinkInDm
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `linkInDmsType` | `String` | Yes |  |
| `redirectUrl` | `String` | Yes |  |
| `slug` | `String` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.LinkInDm.load({ "slug" => "slug" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LinkInDmEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LinkInPostEntity

```ruby
link_in_post = client.LinkInPost
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `linkInPostsType` | `String` | Yes |  |
| `redirectUrl` | `String` | Yes |  |
| `showLinkInFirstComment` | `Boolean` | Yes |  |
| `slug` | `String` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.LinkInPost.load({ "slug" => "slug" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LinkInPostEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LinkUserEntity

```ruby
link_user = client.LinkUser
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `already_linked` | `Boolean` | No |  |
| `onboarding_data_id` | `String` | Yes | UUID of the OnboardingData record |
| `success` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.LinkUser.create({
  "onboarding_data_id" => "example_onboarding_data_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LinkUserEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MediaAssetEntity

```ruby
media_asset = client.MediaAsset
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `String` | Yes |  |
| `createdAt` | `String` | Yes |  |
| `description` | `String` | No |  |
| `file` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `media_assets` | `Array` | Yes |  |
| `onboardingDataId` | `Object` | No |  |
| `onboarding_data_id` | `String` | Yes |  |
| `productId` | `Object` | No |  |
| `product_id` | `String` | No |  |
| `source` | `String` | Yes |  |
| `type` | `String` | Yes |  |
| `updatedAt` | `String` | Yes |  |
| `url` | `String` | Yes |  |
| `usedAt` | `Object` | No |  |
| `veo3VideoId` | `Object` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.MediaAsset.create({
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

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.MediaAsset.load({ "id" => "media_asset_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MediaAssetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MenEntity

```ruby
men = client.Men
```

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Men.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MenEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MicrodramaEntity

```ruby
microdrama = client.Microdrama
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `evidence` | `Hash` | Yes |  |
| `expected_revision` | `Integer` | Yes |  |
| `idempotency_key` | `String` | Yes |  |
| `issues` | `Array` | No |  |
| `reason` | `String` | Yes |  |
| `role` | `String` | Yes |  |
| `scores` | `Hash` | Yes |  |
| `selected_premise_id` | `String` | No |  |
| `stage` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `subject_hash` | `String` | Yes |  |
| `title` | `String` | No |  |
| `verdict` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Microdrama.create({
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Microdrama.load({ "episode_id" => "episode_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.Microdrama.update({
  "episode_id" => "episode_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MicrodramaEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MicrohubPublicEntity

```ruby
microhub_public = client.MicrohubPublic
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bio` | `Object` | No |  |
| `ctaButtonText` | `Object` | No |  |
| `ctaDescription` | `Object` | No |  |
| `ctaLink` | `Object` | No |  |
| `ctaTitle` | `Object` | No |  |
| `headerImageUrl` | `Object` | No |  |
| `links` | `Array` | No |  |
| `name` | `String` | No |  |
| `profileImageUrl` | `Object` | No |  |
| `slug` | `String` | Yes |  |
| `socialLinks` | `Hash` | No |  |
| `testimonials` | `Array` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.MicrohubPublic.load({ "slug" => "slug" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MicrohubPublicEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OnboardingStatusEntity

```ruby
onboarding_status = client.OnboardingStatus
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `Integer` | No |  |
| `cover_image_url` | `Object` | No |  |
| `id` | `String` | Yes |  |
| `likes` | `Integer` | No |  |
| `platform` | `String` | Yes |  |
| `video_url` | `Object` | No |  |
| `views` | `Integer` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.OnboardingStatus.list({ "oid" => "example" })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OnboardingStatusEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OnboardingV6Entity

```ruby
onboarding_v6 = client.OnboardingV6
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.OnboardingV6.remove({ "media_asset_id" => "media_asset_id", "onboarding_data_id" => "onboarding_data_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OnboardingV6Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PaidUserEntity

```ruby
paid_user = client.PaidUser
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agents_count` | `Integer` | Yes |  |
| `assigned_agents_count` | `Integer` | No |  |
| `auto_schedule_enabled` | `Object` | Yes |  |
| `credits` | `Integer` | Yes |  |
| `effective_agents_count` | `Integer` | Yes |  |
| `email` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `is_internal_user` | `Boolean` | No |  |
| `is_migrated_user` | `Boolean` | No |  |
| `membership` | `Object` | Yes |  |
| `scheduled_queue_count` | `Integer` | Yes |  |
| `subscription_details` | `Object` | No |  |
| `subscription_status` | `Object` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.PaidUser.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PaidUserEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PexelEntity

```ruby
pexel = client.Pexel
```

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Pexel.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PexelEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PhoneAdminAvailableAgentSourceEntity

```ruby
phone_admin_available_agent_source = client.PhoneAdminAvailableAgentSource
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_count` | `Integer` | Yes |  |
| `pc_name` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.PhoneAdminAvailableAgentSource.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PhoneAdminAvailableAgentSourceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProductEntity

```ruby
product = client.Product
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_count` | `Integer` | Yes |  |
| `agents` | `Array` | Yes |  |
| `createdAt` | `Object` | No |  |
| `demoVideos` | `Object` | No |  |
| `description` | `String` | No |  |
| `favicon_url` | `Object` | No |  |
| `howItWorks` | `Object` | No |  |
| `how_it_works` | `Object` | No |  |
| `id` | `String` | Yes |  |
| `images` | `Object` | No |  |
| `initial_agents` | `Integer` | No |  |
| `instagramHandle` | `Object` | No |  |
| `instagram_handle` | `Object` | No |  |
| `isActive` | `Object` | No |  |
| `isApp` | `Object` | No |  |
| `is_active` | `Boolean` | Yes |  |
| `is_app` | `Boolean` | No |  |
| `language` | `Object` | No |  |
| `mediaAssets` | `Object` | No |  |
| `media_asset_ids` | `Object` | No |  |
| `media_assets` | `Object` | No |  |
| `name` | `String` | Yes |  |
| `otherInstructions` | `Object` | No |  |
| `other_instructions` | `Object` | No |  |
| `outroVideo` | `Object` | No |  |
| `pexelsVideos` | `Object` | No |  |
| `pricing` | `Object` | No |  |
| `pricingAndOffers` | `Object` | No |  |
| `pricing_and_offers` | `Object` | No |  |
| `product_demo_ids` | `Array` | No |  |
| `product_details` | `Hash` | Yes | Product details for enterprise product creation |
| `product_id` | `String` | Yes |  |
| `product_name` | `String` | Yes |  |
| `product_url` | `String` | Yes |  |
| `pronunciation` | `Object` | No |  |
| `regenerate_sora2` | `Boolean` | No |  |
| `repostSource` | `Object` | No |  |
| `repost_source` | `Object` | No |  |
| `screenshot_url` | `Object` | No |  |
| `social_post_ids` | `Array` | No |  |
| `targetAudience` | `Object` | No |  |
| `target_audience` | `Object` | No |  |
| `templateProductId` | `Object` | No |  |
| `tiktokHandle` | `Object` | No |  |
| `tiktok_handle` | `Object` | No |  |
| `total_count` | `Integer` | Yes |  |
| `updatedAt` | `Object` | No |  |
| `url` | `String` | Yes |  |
| `userId` | `String` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Product.create({
  "product_details" => {}, # Hash
  "product_url" => "example_product_url", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Product.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Product.load({ "id" => "product_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.Product.remove({ "id" => "product_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.Product.update({
  "id" => "product_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProductEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProductDashboardEntity

```ruby
product_dashboard = client.ProductDashboard
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agents` | `Array` | Yes |  |
| `date` | `String` | Yes |  |
| `pagination` | `Hash` | Yes |  |
| `phone_admin_error` | `Object` | No |  |
| `products` | `Array` | Yes |  |
| `selected_product` | `Object` | Yes |  |
| `summary` | `Hash` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.ProductDashboard.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProductDashboardEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProductDashboardViewEntity

```ruby
product_dashboard_view = client.ProductDashboardView
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `String` | Yes |  |
| `views` | `Integer` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.ProductDashboardView.list({ "product_id" => "example" })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProductDashboardViewEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProductDemoEntity

```ruby
product_demo = client.ProductDemo
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes |  |
| `description` | `String` | No |  |
| `id` | `String` | Yes |  |
| `source` | `String` | Yes |  |
| `type` | `String` | Yes |  |
| `url` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.ProductDemo.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProductDemoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProductLandingEntity

```ruby
product_landing = client.ProductLanding
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bio` | `Object` | No |  |
| `commentingOnMyPosts` | `Boolean` | Yes |  |
| `commentingOnOthersPosts` | `Boolean` | Yes |  |
| `ctaButtonText` | `Object` | No |  |
| `ctaDescription` | `Object` | No |  |
| `ctaLink` | `Object` | No |  |
| `ctaTitle` | `Object` | No |  |
| `dmCommenters` | `Boolean` | Yes |  |
| `dmInitialMessagePrompt` | `Object` | No |  |
| `dmOngoingResponsePrompt` | `Object` | No |  |
| `firstCommentTextBeforeLink` | `Object` | No |  |
| `headerImageUrl` | `Object` | No |  |
| `id` | `String` | Yes |  |
| `landingHtmlUrl` | `Object` | No |  |
| `landingLastGeneratedAt` | `Object` | No |  |
| `landingReferenceScreenshotUrl` | `Object` | No |  |
| `landingScreenshotUrl` | `Object` | No |  |
| `landingStatus` | `String` | Yes |  |
| `landingUrl` | `String` | Yes |  |
| `linkInBioType` | `String` | Yes |  |
| `linkInDmsType` | `String` | Yes |  |
| `linkInPostsType` | `String` | Yes |  |
| `links` | `Object` | No |  |
| `microhubBio` | `Object` | No |  |
| `microhubCtaButtonText` | `Object` | No |  |
| `microhubCtaDescription` | `Object` | No |  |
| `microhubCtaLink` | `Object` | No |  |
| `microhubCtaTitle` | `Object` | No |  |
| `microhubHeaderImageUrl` | `Object` | No |  |
| `microhubLinks` | `Array` | No |  |
| `microhubName` | `Object` | No |  |
| `microhubProfileImageUrl` | `Object` | No |  |
| `microhubScreenshotUrl` | `Object` | No |  |
| `microhubSocialLinks` | `Hash` | No |  |
| `microhubStatus` | `String` | Yes |  |
| `microhubTestimonials` | `Array` | No |  |
| `microhubUrl` | `String` | Yes |  |
| `myPostsStylePrompt` | `Object` | No |  |
| `name` | `String` | No |  |
| `othersStylePrompt` | `Object` | No |  |
| `othersTargetMarketPrompt` | `Object` | No |  |
| `productLinkSelection` | `String` | Yes |  |
| `productUrl` | `Object` | No |  |
| `profileImageUrl` | `Object` | No |  |
| `shortLink` | `Object` | No |  |
| `shortLinkKeyword` | `Object` | No |  |
| `showLinkInFirstComment` | `Boolean` | Yes |  |
| `slug` | `String` | Yes |  |
| `socialLinks` | `Object` | No |  |
| `testimonials` | `Object` | No |  |

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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.ProductLanding.list
results.each { |item| puts item.data_get }
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.ProductLanding.update({
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProductLandingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PublicResumeStatusEntity

```ruby
public_resume_status = client.PublicResumeStatus
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `can_resume_prelogin` | `Boolean` | No |  |
| `content_collection_ready` | `Boolean` | No |  |
| `current_step` | `Object` | No |  |
| `exists` | `Boolean` | Yes |  |
| `flow_variant` | `Object` | No |  |
| `repost_content_count` | `Integer` | No |  |
| `repost_source` | `Object` | No |  |
| `requires_repost_content` | `Boolean` | No |  |
| `skip_demo` | `Boolean` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.PublicResumeStatus.load({ "oid" => "oid" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PublicResumeStatusEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ReRollVideoEntity

```ruby
re_roll_video = client.ReRollVideo
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `queue_id` | `String` | Yes |  |
| `requires_polling` | `Boolean` | No |  |
| `skip_credit_check` | `Boolean` | No |  |
| `video` | `Hash` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.ReRollVideo.create({
  "queue_id" => "example_queue_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ReRollVideoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ReadRootGetEntity

```ruby
read_root_get = client.ReadRootGet
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.ReadRootGet.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ReadRootGetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RecordDemoBookedEntity

```ruby
record_demo_booked = client.RecordDemoBooked
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calendlyEventUri` | `Object` | No |  |
| `calendlyInviteeUri` | `Object` | No |  |
| `message` | `Hash` | Yes |  |
| `session` | `Hash` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.RecordDemoBooked.create({
  "session_id" => "example_session_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RecordDemoBookedEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RefreshStatEntity

```ruby
refresh_stat = client.RefreshStat
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date_from` | `Object` | No | Start date to refresh stats for (defaults to yesterday) |
| `date_to` | `Object` | No | End date to refresh stats for (defaults to date_from) |
| `entries_found` | `Integer` | Yes |  |
| `message` | `String` | Yes |  |
| `provider` | `String` | Yes | Scraping provider to use |
| `status` | `String` | Yes |  |
| `summary` | `Object` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.RefreshStat.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RefreshStatEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RemixerClipperEntity

```ruby
remixer_clipper = client.RemixerClipper
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.RemixerClipper.create({
  "identifier" => "example_identifier", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.RemixerClipper.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RemixerClipperEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ResetProductEntity

```ruby
reset_product = client.ResetProduct
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.ResetProduct.create({
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.ResetProduct.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ResetProductEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RetryWebsiteScrapeEntity

```ruby
retry_website_scrape = client.RetryWebsiteScrape
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `flow_variant` | `String` | No |  |
| `onboarding_data_id` | `String` | Yes | UUID of existing OnboardingData |
| `skip_demo` | `Boolean` | No |  |
| `status` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |
| `url` | `String` | Yes | New website URL to scrape |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.RetryWebsiteScrape.create({
  "onboarding_data_id" => "example_onboarding_data_id", # String
  "url" => "example_url", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RetryWebsiteScrapeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SaveSurveyEntity

```ruby
save_survey = client.SaveSurvey
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email_sent` | `Boolean` | No |  |
| `onboarding_data_id` | `String` | Yes | UUID of the OnboardingData record |
| `success` | `Boolean` | Yes |  |
| `survey` | `Hash` | Yes | Survey response data from frontend. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.SaveSurvey.create({
  "onboarding_data_id" => "example_onboarding_data_id", # String
  "survey" => {}, # Hash
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SaveSurveyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ScanSocialEntity

```ruby
scan_social = client.ScanSocial
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instagram_handle` | `Object` | No |  |
| `onboarding_data_id` | `String` | Yes |  |
| `product_id` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |
| `task_id` | `String` | No |  |
| `tiktok_handle` | `Object` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.ScanSocial.create({
  "onboarding_data_id" => "example_onboarding_data_id", # String
  "tiktok_handle" => "example_tiktok_handle", # Object
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ScanSocialEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ScanSocialsPublicEntity

```ruby
scan_socials_public = client.ScanSocialsPublic
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instagram_handle` | `Object` | No | Instagram username/handle to scrape |
| `message` | `Object` | No |  |
| `onboarding_data_id` | `String` | Yes | UUID of the OnboardingData record |
| `status` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |
| `tiktok_handle` | `Object` | No | TikTok username/handle to scrape |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.ScanSocialsPublic.create({
  "onboarding_data_id" => "example_onboarding_data_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ScanSocialsPublicEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ScanSocialsStatusEntity

```ruby
scan_socials_status = client.ScanSocialsStatus
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ads_count` | `Integer` | No |  |
| `onboarding_data_id` | `String` | Yes |  |
| `product_id` | `String` | No |  |
| `status` | `String` | Yes |  |
| `task_id` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.ScanSocialsStatus.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ScanSocialsStatusEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ScheduleV2Entity

```ruby
schedule_v2 = client.ScheduleV2
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent` | `Object` | No |  |
| `comment` | `Object` | No |  |
| `created_at` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `instagram_posted_by` | `Object` | No |  |
| `instagram_posted_url` | `Object` | No |  |
| `instagram_scraped_social_post_id` | `String` | No |  |
| `is_instagram_posted` | `Boolean` | No |  |
| `is_tiktok_posted` | `Boolean` | No |  |
| `is_youtube_posted` | `Boolean` | No |  |
| `reorders` | `Array` | Yes |  |
| `results` | `Object` | No |  |
| `scheduled_datetime` | `String` | Yes |  |
| `source_type` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `tiktok_posted_by` | `Object` | No |  |
| `tiktok_posted_url` | `Object` | No |  |
| `tiktok_scraped_social_post_id` | `String` | No |  |
| `video` | `Object` | No |  |
| `video_id` | `String` | Yes |  |
| `youtube_posted_by` | `Object` | No |  |
| `youtube_posted_url` | `Object` | No |  |
| `youtube_scraped_social_post_id` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.ScheduleV2.create({
  "created_at" => "example_created_at", # String
  "id" => "example_id", # String
  "reorders" => [], # Array
  "scheduled_datetime" => "example_scheduled_datetime", # String
  "source_type" => "example_source_type", # String
  "status" => "example_status", # String
  "video_id" => "example_video_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.ScheduleV2.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.ScheduleV2.load()
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.ScheduleV2.remove({ "queue_id" => "queue_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.ScheduleV2.update({
  "queue_id" => "queue_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ScheduleV2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ScrapeEntity

```ruby
scrape = client.Scrape
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `old_product_id` | `String` | Yes |  |
| `onboarding_data_id` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |
| `url` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Scrape.create({
  "old_product_id" => "example_old_product_id", # String
  "url" => "example_url", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ScrapeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ScrapeWebsitePublicEntity

```ruby
scrape_website_public = client.ScrapeWebsitePublic
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `flow_variant` | `String` | No |  |
| `onboarding_data_id` | `String` | Yes | UUID of created OnboardingData |
| `skip_demo` | `Boolean` | No | True for self-serve users (skip demo booking) |
| `status` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |
| `url` | `String` | Yes | Website URL to scrape |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.ScrapeWebsitePublic.create({
  "url" => "example_url", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ScrapeWebsitePublicEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ScrapedDataEntity

```ruby
scraped_data = client.ScrapedData
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | Yes |  |
| `homepageVideoUrl` | `Object` | No |  |
| `howItWorks` | `String` | Yes |  |
| `imageUrls` | `Array` | Yes |  |
| `instagram_username` | `Object` | No |  |
| `mediaAssets` | `Array` | No |  |
| `name` | `String` | Yes |  |
| `pricingAndOffers` | `String` | Yes |  |
| `targetAudience` | `String` | Yes |  |
| `url` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.ScrapedData.create({
  "url" => "example_url", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ScrapedDataEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ScrapingStatusEntity

```ruby
scraping_status = client.ScrapingStatus
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.ScrapingStatus.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ScrapingStatusEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SelfServeActivateEntity

```ruby
self_serve_activate = client.SelfServeActivate
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `onboarding_data_id` | `String` | Yes | UUID of the OnboardingData record |
| `redirect_to_stripe` | `Boolean` | No |  |
| `stripe_checkout_url` | `Object` | No |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.SelfServeActivate.create({
  "onboarding_data_id" => "example_onboarding_data_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SelfServeActivateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SeoEntity

```ruby
seo = client.Seo
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Seo.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SeoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SeoAiMentionEntity

```ruby
seo_ai_mention = client.SeoAiMention
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bucket` | `String` | Yes |  |
| `domain_type` | `String` | Yes |  |
| `dominant_domain` | `String` | Yes |  |
| `engine` | `String` | Yes |  |
| `evidence` | `Hash` | Yes |  |
| `geo` | `String` | Yes |  |
| `language` | `String` | Yes |  |
| `primary_url` | `String` | Yes |  |
| `prompt_text` | `String` | Yes |  |
| `run_week` | `String` | Yes |  |
| `secondary_urls` | `Array` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.SeoAiMention.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SeoAiMentionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SeoBacklinkEntity

```ruby
seo_backlink = client.SeoBacklink
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anchor_text` | `String` | Yes |  |
| `first_seen` | `String` | Yes |  |
| `referring_domain` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `target_page` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.SeoBacklink.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SeoBacklinkEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SeoKeywordEntity

```ruby
seo_keyword = client.SeoKeyword
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blog_page` | `String` | Yes |  |
| `current_position` | `Float` | Yes |  |
| `keyword` | `String` | Yes |  |
| `keyword_group` | `String` | Yes |  |
| `position_change` | `Float` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.SeoKeyword.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SeoKeywordEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SeoOverviewEntity

```ruby
seo_overview = client.SeoOverview
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clicks` | `Float` | Yes |  |
| `ctr` | `Float` | Yes |  |
| `date` | `String` | Yes |  |
| `impressions` | `Float` | Yes |  |
| `position` | `Float` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.SeoOverview.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SeoOverviewEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SeoTrafficEntity

```ruby
seo_traffic = client.SeoTraffic
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_date` | `String` | Yes |  |
| `series` | `Array` | Yes |  |
| `site_url` | `String` | Yes |  |
| `start_date` | `String` | Yes |  |
| `top_countries` | `Array` | Yes |  |
| `top_pages` | `Array` | Yes |  |
| `top_queries` | `Array` | Yes |  |
| `totals` | `Hash` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.SeoTraffic.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SeoTrafficEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ShareAccessLinkEntity

```ruby
share_access_link = client.ShareAccessLink
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `share_token` | `String` | Yes |  |
| `share_url` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.ShareAccessLink.create({
  "share_token" => "example_share_token", # String
  "share_url" => "example_share_url", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ShareAccessLinkEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SiteEntity

```ruby
site = client.Site
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Site.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SiteEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SlideEntity

```ruby
slide = client.Slide
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `caption` | `Object` | No |  |
| `id` | `String` | No |  |
| `prompt` | `Object` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Slide.create({
  "carousel_id" => "example_carousel_id", # String
  "slide_index" => 1, # Integer
})
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.Slide.update({
  "carousel_id" => "carousel_id",
  "id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SlideEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SlugValidationEntity

```ruby
slug_validation = client.SlugValidation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `reason` | `Object` | No |  |
| `valid` | `Boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.SlugValidation.load({ "slug" => "slug" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SlugValidationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SocialEntity

```ruby
social = client.Social
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `String` | Yes |  |
| `code_verifier` | `String` | Yes |  |
| `createdAt` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `platform` | `String` | Yes |  |
| `platformUserId` | `String` | Yes |  |
| `updatedAt` | `Object` | No |  |
| `userId` | `String` | Yes |  |
| `username` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Social.create({
  "code" => "example_code", # String
  "code_verifier" => "example_code_verifier", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Social.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Social.load()
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.Social.remove({ "platform" => "platform" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SocialEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SocialScanPreviewEntity

```ruby
social_scan_preview = client.SocialScanPreview
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instagram_handle` | `Object` | No | Instagram username/handle to scrape |
| `posts` | `Array` | Yes |  |
| `success` | `Boolean` | Yes |  |
| `tiktok_handle` | `Object` | No | TikTok username/handle to scrape |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.SocialScanPreview.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SocialScanPreviewEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SocialScanProcessEntity

```ruby
social_scan_process = client.SocialScanProcess
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `posts` | `Array` | Yes |  |
| `product_id` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |
| `task_id` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.SocialScanProcess.create({
  "posts" => [], # Array
  "product_id" => "example_product_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SocialScanProcessEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SocialScanSaveEntity

```ruby
social_scan_save = client.SocialScanSave
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `media_asset_ids` | `Array` | Yes |  |
| `posts` | `Array` | Yes |  |
| `product_id` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.SocialScanSave.create({
  "posts" => [], # Array
  "product_id" => "example_product_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SocialScanSaveEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Sora2AvatarEntity

```ruby
sora2_avatar = client.Sora2Avatar
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_frame_url` | `Object` | No |  |
| `created_at` | `String` | Yes |  |
| `current_step` | `Integer` | No |  |
| `headshot_url` | `Object` | No |  |
| `id` | `String` | Yes |  |
| `logs` | `Hash` | No |  |
| `prompt_key` | `String` | Yes |  |
| `run_output_dir` | `Object` | No |  |
| `selected_age_bucket` | `String` | Yes |  |
| `selected_gender` | `String` | Yes |  |
| `selected_prompt` | `Object` | No |  |
| `selected_race` | `String` | Yes |  |
| `sora2_cameo_handle` | `Object` | No |  |
| `sora2_cameo_id` | `String` | No |  |
| `sora2_cameo_link` | `Object` | No |  |
| `sora2_display_name` | `Object` | No |  |
| `sora2_task_id` | `String` | No |  |
| `sora2_video_url` | `String` | Yes |  |
| `updated_at` | `String` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Sora2Avatar.create({
  "prompt_key" => "example_prompt_key", # String
  "selected_age_bucket" => "example_selected_age_bucket", # String
  "selected_gender" => "example_selected_gender", # String
  "selected_race" => "example_selected_race", # String
  "sora2_video_url" => "example_sora2_video_url", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Sora2Avatar.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Sora2Avatar.load({ "id" => "sora2_avatar_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.Sora2Avatar.update({
  "id" => "sora2_avatar_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `Sora2AvatarEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Sora2AvatarAssetUploadEntity

```ruby
sora2_avatar_asset_upload = client.Sora2AvatarAssetUpload
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_id` | `String` | No |  |
| `file` | `String` | Yes |  |
| `run_output_dir` | `Object` | No |  |
| `s3_key` | `String` | Yes |  |
| `upload_type` | `String` | Yes |  |
| `url` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Sora2AvatarAssetUpload.create({
  "file" => "example_file", # String
  "s3_key" => "example_s3_key", # String
  "upload_type" => "example_upload_type", # String
  "url" => "example_url", # String
})
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `Sora2AvatarAssetUploadEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Sora2AvatarStatEntity

```ruby
sora2_avatar_stat = client.Sora2AvatarStat
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `by_age_bucket` | `Hash` | Yes |  |
| `by_gender` | `Hash` | Yes |  |
| `by_prompt_key` | `Hash` | Yes |  |
| `by_race` | `Hash` | Yes |  |
| `completed_avatars` | `Integer` | Yes |  |
| `completion_rate` | `Float` | Yes |  |
| `total_avatars` | `Integer` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Sora2AvatarStat.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `Sora2AvatarStatEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StatEntity

```ruby
stat = client.Stat
```

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Stat.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StatEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StatsRefreshBackfillEntity

```ruby
stats_refresh_backfill = client.StatsRefreshBackfill
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `task_id` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.StatsRefreshBackfill.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StatsRefreshBackfillEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StatsRefreshIssueEntity

```ruby
stats_refresh_issue = client.StatsRefreshIssue
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aged_over_24h` | `Boolean` | Yes |  |
| `agent_id` | `String` | No |  |
| `agent_name_snapshot` | `Object` | No |  |
| `first_detected_at` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `last_detected_at` | `String` | Yes |  |
| `last_refresh_completed_at` | `Object` | No |  |
| `last_seen_run_id` | `String` | No |  |
| `latest_error_message` | `Object` | No |  |
| `next_retry_at` | `Object` | No |  |
| `platform` | `String` | Yes |  |
| `post_method` | `Object` | No |  |
| `post_url` | `Object` | No |  |
| `posted_date_et` | `String` | Yes |  |
| `product_id` | `String` | No |  |
| `product_name_snapshot` | `Object` | No |  |
| `reason_code` | `String` | Yes |  |
| `resolved_at` | `Object` | No |  |
| `retry_count` | `Integer` | Yes |  |
| `schedule_queue_id` | `String` | No |  |
| `scheduled_datetime_utc` | `String` | Yes |  |
| `stale_after_sla` | `Boolean` | Yes |  |
| `status` | `String` | Yes |  |
| `user_email_snapshot` | `String` | Yes |  |
| `user_id` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.StatsRefreshIssue.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StatsRefreshIssueEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StatsRefreshOverviewEntity

```ruby
stats_refresh_overview = client.StatsRefreshOverview
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_run` | `Object` | No |  |
| `aged_over_24h` | `Integer` | Yes |  |
| `backlog_preview` | `Array` | Yes |  |
| `coverage_percent` | `Float` | Yes |  |
| `customer_counts` | `Hash` | Yes |  |
| `date` | `String` | Yes |  |
| `generated_at` | `String` | Yes |  |
| `method_counts` | `Hash` | Yes |  |
| `platform_counts` | `Hash` | Yes |  |
| `platform_units_resolved` | `Integer` | Yes |  |
| `platform_units_total` | `Integer` | Yes |  |
| `platform_units_unresolved` | `Integer` | Yes |  |
| `posted_entries` | `Integer` | Yes |  |
| `reason_counts` | `Hash` | Yes |  |
| `sla_deadline_et` | `String` | Yes |  |
| `stale_after_sla` | `Integer` | Yes |  |
| `top_affected_customers` | `Array` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.StatsRefreshOverview.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StatsRefreshOverviewEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StatsRefreshRunSummaryEntity

```ruby
stats_refresh_run_summary = client.StatsRefreshRunSummary
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `celery_task_id` | `String` | No |  |
| `completed_at` | `Object` | No |  |
| `entries_failed` | `Integer` | Yes |  |
| `entries_skipped` | `Integer` | Yes |  |
| `entries_total` | `Integer` | Yes |  |
| `entries_updated` | `Integer` | Yes |  |
| `error_summary_json` | `Object` | No |  |
| `id` | `String` | Yes |  |
| `issues_opened` | `Integer` | Yes |  |
| `issues_resolved` | `Integer` | Yes |  |
| `platform_units_resolved` | `Integer` | Yes |  |
| `platform_units_total` | `Integer` | Yes |  |
| `platform_units_unresolved` | `Integer` | Yes |  |
| `platform_updates_via_profile` | `Integer` | Yes |  |
| `platform_updates_via_url` | `Integer` | Yes |  |
| `provider` | `Object` | No |  |
| `refresh_trigger` | `Object` | No |  |
| `requested_by_email` | `Object` | No |  |
| `run_type` | `String` | Yes |  |
| `started_at` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `target_date_et` | `Object` | No |  |
| `users_count` | `Integer` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.StatsRefreshRunSummary.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StatsRefreshRunSummaryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StatsRefreshTaskTriggerEntity

```ruby
stats_refresh_task_trigger = client.StatsRefreshTaskTrigger
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `target_date` | `String` | Yes |  |
| `task_id` | `String` | Yes |  |
| `users_count` | `Integer` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.StatsRefreshTaskTrigger.create({
  "message" => "example_message", # String
  "status" => "example_status", # String
  "target_date" => "example_target_date", # String
  "task_id" => "example_task_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StatsRefreshTaskTriggerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StripeEntity

```ruby
stripe = client.Stripe
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StripeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StyleEntity

```ruby
style = client.Style
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Style.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StyleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TemplateEntity

```ruby
template = client.Template
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Template.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TemplateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TikTokCreatorInfoEntity

```ruby
tik_tok_creator_info = client.TikTokCreatorInfo
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commentDisabled` | `Boolean` | No |  |
| `creatorAvatarUrl` | `Object` | No |  |
| `creatorNickname` | `Object` | No |  |
| `creatorUsername` | `Object` | No |  |
| `duetDisabled` | `Boolean` | No |  |
| `maxVideoPostDurationSec` | `Integer` | No |  |
| `privacyLevelOptions` | `Array` | No |  |
| `stitchDisabled` | `Boolean` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.TikTokCreatorInfo.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TikTokCreatorInfoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TopPostEntity

```ruby
top_post = client.TopPost
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `Integer` | Yes |  |
| `id` | `String` | Yes |  |
| `likes` | `Integer` | Yes |  |
| `platforms` | `Array` | Yes |  |
| `scheduled_datetime` | `String` | Yes |  |
| `user_email` | `String` | Yes |  |
| `user_id` | `String` | Yes |  |
| `views` | `Integer` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.TopPost.list({ "date" => "example" })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TopPostEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UploadPostAgentEntity

```ruby
upload_post_agent = client.UploadPostAgent
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.UploadPostAgent.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UploadPostAgentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UserEntity

```ruby
user = client.User
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountType` | `Object` | No |  |
| `activatedByAdminAt` | `Object` | No |  |
| `activatedByAdminId` | `Object` | No |  |
| `agents` | `Array` | Yes |  |
| `agentsCount` | `Object` | No |  |
| `attribution` | `Object` | No |  |
| `avatarImageUrl` | `Object` | No |  |
| `avatarVoiceUrl` | `Object` | No |  |
| `createdAt` | `String` | Yes |  |
| `credits` | `Integer` | No |  |
| `email` | `String` | Yes |  |
| `googleId` | `Object` | No |  |
| `hasSeenScheduleWelcome` | `Boolean` | No |  |
| `id` | `String` | Yes |  |
| `industry` | `Object` | No |  |
| `instagramId` | `Object` | No |  |
| `isActivatedByAdmin` | `Boolean` | No |  |
| `isAdmin` | `Boolean` | No |  |
| `isInternalUser` | `Object` | No |  |
| `isMigrated` | `Object` | No |  |
| `isResettingProduct` | `Object` | No |  |
| `membership` | `Object` | No |  |
| `name` | `String` | Yes |  |
| `partnerDirectLoginDisabled` | `Boolean` | No |  |
| `partnerExternalUserId` | `Object` | No |  |
| `partnerPolicyCode` | `Object` | No |  |
| `partnerSource` | `Object` | No |  |
| `picture` | `Object` | No |  |
| `stripeCustomerId` | `Object` | No |  |
| `stripeSubscriptionId` | `Object` | No |  |
| `subscriptionCurrentPeriodEnd` | `Object` | No |  |
| `subscriptionStatus` | `Object` | No |  |
| `totalCount` | `Integer` | Yes |  |
| `updatedAt` | `String` | Yes |  |
| `userId` | `String` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.User.load({ "id" => "user_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UserAgentEntity

```ruby
user_agent = client.UserAgent
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent` | `Hash` | Yes |  |
| `assigned_at` | `String` | Yes |  |
| `assignment_id` | `String` | Yes |  |
| `expires_at` | `Object` | No |  |
| `id` | `String` | No |  |
| `status` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.UserAgent.create({
  "id" => "example_id", # String
  "agent" => {}, # Hash
  "assigned_at" => "example_assigned_at", # String
  "assignment_id" => "example_assignment_id", # String
  "status" => "example_status", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.UserAgent.list({ "id" => "example" })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UserAgentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UserHealthDetailEntity

```ruby
user_health_detail = client.UserHealthDetail
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `Object` | Yes |  |
| `activated` | `Boolean` | Yes |  |
| `activated_by_admin_at` | `Object` | No |  |
| `activated_by_admin_id` | `String` | No |  |
| `admin_notes` | `Object` | No |  |
| `agents_count` | `Integer` | No |  |
| `assigned_agents` | `Array` | Yes |  |
| `assigned_agents_count` | `Integer` | Yes |  |
| `assigned_agents_preview_limit` | `Integer` | No |  |
| `assigned_agents_truncated` | `Boolean` | No |  |
| `auto_schedule_enabled` | `Boolean` | Yes |  |
| `comments_expected_per_day` | `Integer` | No |  |
| `comments_fix_block_reason` | `Object` | No |  |
| `comments_fix_ready` | `Boolean` | No |  |
| `comments_today_failed` | `Integer` | No |  |
| `comments_today_posted` | `Integer` | No |  |
| `comments_today_scheduled` | `Integer` | No |  |
| `comments_yesterday_failed` | `Integer` | No |  |
| `comments_yesterday_posted` | `Integer` | No |  |
| `comments_yesterday_total` | `Integer` | No |  |
| `created_at` | `String` | Yes |  |
| `credits` | `Integer` | Yes |  |
| `effective_posted_video_reuse_percent` | `Integer` | Yes |  |
| `email` | `String` | Yes |  |
| `expected_agents_count` | `Integer` | Yes |  |
| `id` | `String` | Yes |  |
| `is_activated_by_admin` | `Boolean` | Yes |  |
| `is_admin` | `Boolean` | Yes |  |
| `is_bookmarked` | `Boolean` | No |  |
| `is_internal_user` | `Boolean` | Yes |  |
| `is_migrated` | `Boolean` | Yes |  |
| `landing_slug` | `Object` | No |  |
| `landing_status` | `Object` | No |  |
| `landing_url` | `Object` | No |  |
| `membership` | `Object` | Yes |  |
| `microhub_status` | `Object` | No |  |
| `microhub_url` | `Object` | No |  |
| `name` | `String` | Yes |  |
| `onboarding_flow` | `String` | Yes |  |
| `posted_video_reuse_percent` | `Object` | No |  |
| `product_id` | `String` | Yes |  |
| `product_name` | `Object` | Yes |  |
| `product_url` | `Object` | Yes |  |
| `subscription_status` | `Object` | Yes |  |
| `survey_data` | `Object` | No |  |
| `today_failed` | `Integer` | Yes |  |
| `today_posted` | `Integer` | Yes |  |
| `today_scheduled` | `Integer` | Yes |  |
| `tomorrow_capacity` | `Integer` | Yes |  |
| `tomorrow_scheduled` | `Integer` | Yes |  |
| `videos_completed` | `Integer` | Yes |  |
| `videos_failed` | `Integer` | Yes |  |
| `videos_pending` | `Integer` | Yes |  |
| `videos_stale` | `Integer` | Yes |  |
| `videos_total` | `Integer` | Yes |  |
| `yesterday_failed` | `Integer` | Yes |  |
| `yesterday_failed_entries` | `Array` | Yes |  |
| `yesterday_posted` | `Integer` | Yes |  |
| `yesterday_total` | `Integer` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.UserHealthDetail.list({ "id" => "example" })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UserHealthDetailEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UserWithAvatarSubmissionEntity

```ruby
user_with_avatar_submission = client.UserWithAvatarSubmission
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_image_url` | `String` | Yes |  |
| `avatar_voice_url` | `String` | Yes |  |
| `created_at` | `String` | Yes |  |
| `email` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `name` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.UserWithAvatarSubmission.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UserWithAvatarSubmissionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UsersHealthEntity

```ruby
users_health = client.UsersHealth
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `Object` | Yes |  |
| `admin_notes` | `Object` | No |  |
| `agents_count` | `Integer` | Yes |  |
| `agents_health` | `String` | Yes |  |
| `agents_issue` | `Object` | Yes |  |
| `assigned_agents_count` | `Integer` | Yes |  |
| `auto_schedule_enabled` | `Boolean` | Yes |  |
| `auto_schedule_health` | `String` | Yes |  |
| `auto_schedule_issue` | `Object` | Yes |  |
| `auto_schedule_today_health` | `String` | Yes |  |
| `auto_schedule_today_issue` | `Object` | Yes |  |
| `created_at` | `String` | Yes |  |
| `email` | `String` | Yes |  |
| `expected_agents_count` | `Integer` | Yes |  |
| `id` | `String` | Yes |  |
| `is_bookmarked` | `Boolean` | No |  |
| `is_internal_user` | `Boolean` | Yes |  |
| `is_migrated` | `Boolean` | Yes |  |
| `membership` | `Object` | Yes |  |
| `name` | `String` | Yes |  |
| `posts_health` | `String` | Yes |  |
| `posts_issue` | `Object` | Yes |  |
| `posts_today_health` | `String` | Yes |  |
| `posts_today_issue` | `Object` | Yes |  |
| `subscription_status` | `Object` | Yes |  |
| `today_expected_count` | `Integer` | Yes |  |
| `today_failed_count` | `Integer` | Yes |  |
| `today_scheduled_count` | `Integer` | Yes |  |
| `today_total_count` | `Integer` | Yes |  |
| `tomorrow_expected_count` | `Integer` | Yes |  |
| `tomorrow_scheduled_count` | `Integer` | Yes |  |
| `yesterday_failed_count` | `Integer` | Yes |  |
| `yesterday_total_count` | `Integer` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.UsersHealth.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UsersHealthEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## VideoEntity

```ruby
video = client.Video
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `String` | No |  |
| `bookmarked` | `Object` | No |  |
| `captions` | `Object` | No |  |
| `carousel_data` | `Object` | No |  |
| `created_at` | `String` | Yes |  |
| `duration` | `Float` | No |  |
| `generation_status` | `Object` | No |  |
| `id` | `String` | Yes |  |
| `image_prompt` | `Object` | No |  |
| `is_onboarding` | `Boolean` | No |  |
| `is_template` | `Boolean` | No |  |
| `main_avatar` | `Object` | No |  |
| `main_prompt` | `Object` | No |  |
| `media_asset_id` | `String` | No |  |
| `product_id` | `String` | No |  |
| `reel_id` | `String` | No |  |
| `thumbnail_url` | `Object` | No |  |
| `title` | `String` | Yes |  |
| `type` | `Object` | No |  |
| `updated_at` | `Object` | No |  |
| `url` | `String` | Yes |  |
| `user_id` | `String` | No |  |
| `video_id` | `String` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Video.create({
  "captions" => "example_captions", # Object
  "title" => "example_title", # String
  "url" => "example_url", # String
  "video_id" => "example_video_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Video.load({ "id" => "video_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.Video.remove({ "id" => "video_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.Video.update({
  "id" => "video_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `VideoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## VideoRemixerWorkerEntity

```ruby
video_remixer_worker = client.VideoRemixerWorker
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `captions_ass` | `String` | No |  |
| `captions_vtt` | `String` | No |  |
| `cost_usd` | `Float` | No |  |
| `error` | `String` | Yes |  |
| `file` | `String` | Yes |  |
| `kinds` | `Array` | No |  |
| `lease_token` | `String` | Yes |  |
| `limit` | `Integer` | No |  |
| `manifest` | `String` | Yes |  |
| `model` | `String` | Yes |  |
| `processing_seconds` | `Float` | No |  |
| `prompt_version` | `String` | Yes |  |
| `result` | `Hash` | No |  |
| `thumbnail` | `String` | Yes |  |
| `tier` | `String` | No |  |
| `worker_id` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.VideoRemixerWorker.create({
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

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `VideoRemixerWorkerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WatchdogRecoveryEntity

```ruby
watchdog_recovery = client.WatchdogRecovery
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `item_id` | `String` | Yes |  |
| `passed` | `Boolean` | Yes |  |
| `table` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.WatchdogRecovery.create({
  "item_id" => "example_item_id", # String
  "passed" => true, # Boolean
  "table" => "example_table", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.WatchdogRecovery.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WatchdogRecoveryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WinningAdEntity

```ruby
winning_ad = client.WinningAd
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes |  |
| `description` | `String` | No |  |
| `id` | `String` | Yes |  |
| `source` | `String` | Yes |  |
| `type` | `String` | Yes |  |
| `url` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.WinningAd.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WinningAdEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## XAdaptationEntity

```ruby
x_adaptation = client.XAdaptation
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.XAdaptation.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `XAdaptationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZerohumanAdminAccountEntity

```ruby
zerohuman_admin_account = client.ZerohumanAdminAccount
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_mode` | `String` | Yes |  |
| `active_queue_count` | `Integer` | Yes |  |
| `assigned_agent` | `Object` | No |  |
| `created_at` | `Object` | No |  |
| `email` | `String` | Yes |  |
| `external_user_id` | `String` | Yes |  |
| `membership` | `Object` | No |  |
| `policy_code` | `Object` | No |  |
| `product_id` | `String` | No |  |
| `product_name` | `Object` | No |  |
| `provisioning_status` | `String` | Yes |  |
| `subscription_status` | `Object` | No |  |
| `updated_at` | `Object` | No |  |
| `user_id` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.ZerohumanAdminAccount.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZerohumanAdminAccountEntity` instance with the same client and
options.

#### `get_name -> String`

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

```ruby
client = CrackedApiReferenceSDK.new({
  "feature" => {
    "ratelimit" => { "active" => true },
    "retry" => { "active" => true },
    "test" => { "active" => true },
    "timeout" => { "active" => true },
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

