# CrackedApiReference Python SDK Reference

Complete API reference for the CrackedApiReference Python SDK.


## CrackedApiReferenceSDK

### Constructor

```python
from crackedapireference_sdk import CrackedApiReferenceSDK

client = CrackedApiReferenceSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CrackedApiReferenceSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = CrackedApiReferenceSDK.test()
```


### Instance Methods

#### `Activate(data=None)`

Create a new `ActivateEntity` instance. Pass `None` for no initial data.

#### `ActivateUser(data=None)`

Create a new `ActivateUserEntity` instance. Pass `None` for no initial data.

#### `ActiveOnboarding(data=None)`

Create a new `ActiveOnboardingEntity` instance. Pass `None` for no initial data.

#### `Admin(data=None)`

Create a new `AdminEntity` instance. Pass `None` for no initial data.

#### `AdminAccountReset(data=None)`

Create a new `AdminAccountResetEntity` instance. Pass `None` for no initial data.

#### `AdminCarousel(data=None)`

Create a new `AdminCarouselEntity` instance. Pass `None` for no initial data.

#### `AdminCarouselDemoReview(data=None)`

Create a new `AdminCarouselDemoReviewEntity` instance. Pass `None` for no initial data.

#### `AdminCustomer(data=None)`

Create a new `AdminCustomerEntity` instance. Pass `None` for no initial data.

#### `AdminCustomerSuccess(data=None)`

Create a new `AdminCustomerSuccessEntity` instance. Pass `None` for no initial data.

#### `AdminGeneratedVideo(data=None)`

Create a new `AdminGeneratedVideoEntity` instance. Pass `None` for no initial data.

#### `AdminHealthrx(data=None)`

Create a new `AdminHealthrxEntity` instance. Pass `None` for no initial data.

#### `AdminInsight(data=None)`

Create a new `AdminInsightEntity` instance. Pass `None` for no initial data.

#### `AdminLandingTask(data=None)`

Create a new `AdminLandingTaskEntity` instance. Pass `None` for no initial data.

#### `AdminMetricsSummary(data=None)`

Create a new `AdminMetricsSummaryEntity` instance. Pass `None` for no initial data.

#### `AdminPost(data=None)`

Create a new `AdminPostEntity` instance. Pass `None` for no initial data.

#### `AdminRecentSignup(data=None)`

Create a new `AdminRecentSignupEntity` instance. Pass `None` for no initial data.

#### `AdminSlideshowDiag(data=None)`

Create a new `AdminSlideshowDiagEntity` instance. Pass `None` for no initial data.

#### `AdminSlideshowImport(data=None)`

Create a new `AdminSlideshowImportEntity` instance. Pass `None` for no initial data.

#### `AdminUserView(data=None)`

Create a new `AdminUserViewEntity` instance. Pass `None` for no initial data.

#### `AdminUsersTableItem(data=None)`

Create a new `AdminUsersTableItemEntity` instance. Pass `None` for no initial data.

#### `AdminVideoRemixer(data=None)`

Create a new `AdminVideoRemixerEntity` instance. Pass `None` for no initial data.

#### `AdvanceStep(data=None)`

Create a new `AdvanceStepEntity` instance. Pass `None` for no initial data.

#### `Agent(data=None)`

Create a new `AgentEntity` instance. Pass `None` for no initial data.

#### `AgentAccessCustomersHealth(data=None)`

Create a new `AgentAccessCustomersHealthEntity` instance. Pass `None` for no initial data.

#### `AgentAccessOverview(data=None)`

Create a new `AgentAccessOverviewEntity` instance. Pass `None` for no initial data.

#### `AgentAccessPhilHourlyNotification(data=None)`

Create a new `AgentAccessPhilHourlyNotificationEntity` instance. Pass `None` for no initial data.

#### `AgentAccessPhilStatsRefresh(data=None)`

Create a new `AgentAccessPhilStatsRefreshEntity` instance. Pass `None` for no initial data.

#### `AgentAccessPhilVideo(data=None)`

Create a new `AgentAccessPhilVideoEntity` instance. Pass `None` for no initial data.

#### `AgentAccessUserAgent(data=None)`

Create a new `AgentAccessUserAgentEntity` instance. Pass `None` for no initial data.

#### `AgentAccessUserPhoneFarm(data=None)`

Create a new `AgentAccessUserPhoneFarmEntity` instance. Pass `None` for no initial data.

#### `AgentAccessUserPost(data=None)`

Create a new `AgentAccessUserPostEntity` instance. Pass `None` for no initial data.

#### `AgentAccessUserSummary(data=None)`

Create a new `AgentAccessUserSummaryEntity` instance. Pass `None` for no initial data.

#### `AgentAccessUserVideo(data=None)`

Create a new `AgentAccessUserVideoEntity` instance. Pass `None` for no initial data.

#### `AgentAccessUserWinningAd(data=None)`

Create a new `AgentAccessUserWinningAdEntity` instance. Pass `None` for no initial data.

#### `AgentAccessWinningAdsSummary(data=None)`

Create a new `AgentAccessWinningAdsSummaryEntity` instance. Pass `None` for no initial data.

#### `AgentDetail(data=None)`

Create a new `AgentDetailEntity` instance. Pass `None` for no initial data.

#### `AgentHealth(data=None)`

Create a new `AgentHealthEntity` instance. Pass `None` for no initial data.

#### `AgentHealthCustomerOption(data=None)`

Create a new `AgentHealthCustomerOptionEntity` instance. Pass `None` for no initial data.

#### `AgentHealthDetail(data=None)`

Create a new `AgentHealthDetailEntity` instance. Pass `None` for no initial data.

#### `AgentPost(data=None)`

Create a new `AgentPostEntity` instance. Pass `None` for no initial data.

#### `AgentStat(data=None)`

Create a new `AgentStatEntity` instance. Pass `None` for no initial data.

#### `AgentSummary(data=None)`

Create a new `AgentSummaryEntity` instance. Pass `None` for no initial data.

#### `AgentsSummary(data=None)`

Create a new `AgentsSummaryEntity` instance. Pass `None` for no initial data.

#### `AnalysisStatus(data=None)`

Create a new `AnalysisStatusEntity` instance. Pass `None` for no initial data.

#### `AnalyticsPost(data=None)`

Create a new `AnalyticsPostEntity` instance. Pass `None` for no initial data.

#### `AnalyzeProduct(data=None)`

Create a new `AnalyzeProductEntity` instance. Pass `None` for no initial data.

#### `AssignAgent(data=None)`

Create a new `AssignAgentEntity` instance. Pass `None` for no initial data.

#### `Auth(data=None)`

Create a new `AuthEntity` instance. Pass `None` for no initial data.

#### `AutoScheduleSetting(data=None)`

Create a new `AutoScheduleSettingEntity` instance. Pass `None` for no initial data.

#### `BulkTikTokStatsUpdate(data=None)`

Create a new `BulkTikTokStatsUpdateEntity` instance. Pass `None` for no initial data.

#### `Carousel(data=None)`

Create a new `CarouselEntity` instance. Pass `None` for no initial data.

#### `CarouselAgentDetail(data=None)`

Create a new `CarouselAgentDetailEntity` instance. Pass `None` for no initial data.

#### `CarouselStatus(data=None)`

Create a new `CarouselStatusEntity` instance. Pass `None` for no initial data.

#### `Chat(data=None)`

Create a new `ChatEntity` instance. Pass `None` for no initial data.

#### `ChatHistory(data=None)`

Create a new `ChatHistoryEntity` instance. Pass `None` for no initial data.

#### `ChatSession(data=None)`

Create a new `ChatSessionEntity` instance. Pass `None` for no initial data.

#### `Comment(data=None)`

Create a new `CommentEntity` instance. Pass `None` for no initial data.

#### `CommentCampaign(data=None)`

Create a new `CommentCampaignEntity` instance. Pass `None` for no initial data.

#### `CompleteChatCheckout(data=None)`

Create a new `CompleteChatCheckoutEntity` instance. Pass `None` for no initial data.

#### `CreateBlackoutSora2Video(data=None)`

Create a new `CreateBlackoutSora2VideoEntity` instance. Pass `None` for no initial data.

#### `CreateCarousel(data=None)`

Create a new `CreateCarouselEntity` instance. Pass `None` for no initial data.

#### `CreateProduct(data=None)`

Create a new `CreateProductEntity` instance. Pass `None` for no initial data.

#### `CreateResetProductV6(data=None)`

Create a new `CreateResetProductV6Entity` instance. Pass `None` for no initial data.

#### `CreateSora2Video(data=None)`

Create a new `CreateSora2VideoEntity` instance. Pass `None` for no initial data.

#### `CreateVariation(data=None)`

Create a new `CreateVariationEntity` instance. Pass `None` for no initial data.

#### `Customer(data=None)`

Create a new `CustomerEntity` instance. Pass `None` for no initial data.

#### `CustomerHealth(data=None)`

Create a new `CustomerHealthEntity` instance. Pass `None` for no initial data.

#### `CustomerHealthAllCustomersItem(data=None)`

Create a new `CustomerHealthAllCustomersItemEntity` instance. Pass `None` for no initial data.

#### `CustomerHealthViewsSummary(data=None)`

Create a new `CustomerHealthViewsSummaryEntity` instance. Pass `None` for no initial data.

#### `Daily(data=None)`

Create a new `DailyEntity` instance. Pass `None` for no initial data.

#### `DailyStatus(data=None)`

Create a new `DailyStatusEntity` instance. Pass `None` for no initial data.

#### `DedicatedAgentsDashboard(data=None)`

Create a new `DedicatedAgentsDashboardEntity` instance. Pass `None` for no initial data.

#### `EnterpriseAgent(data=None)`

Create a new `EnterpriseAgentEntity` instance. Pass `None` for no initial data.

#### `EnterpriseProduct(data=None)`

Create a new `EnterpriseProductEntity` instance. Pass `None` for no initial data.

#### `ExactAvailability(data=None)`

Create a new `ExactAvailabilityEntity` instance. Pass `None` for no initial data.

#### `ExactFormula(data=None)`

Create a new `ExactFormulaEntity` instance. Pass `None` for no initial data.

#### `ExtractV2(data=None)`

Create a new `ExtractV2Entity` instance. Pass `None` for no initial data.

#### `FailedPost(data=None)`

Create a new `FailedPostEntity` instance. Pass `None` for no initial data.

#### `File(data=None)`

Create a new `FileEntity` instance. Pass `None` for no initial data.

#### `GenerateBlackoutSora2Prompt(data=None)`

Create a new `GenerateBlackoutSora2PromptEntity` instance. Pass `None` for no initial data.

#### `GeneratePomelliDemo(data=None)`

Create a new `GeneratePomelliDemoEntity` instance. Pass `None` for no initial data.

#### `GeneratePrompt(data=None)`

Create a new `GeneratePromptEntity` instance. Pass `None` for no initial data.

#### `GenerateSora2Prompt(data=None)`

Create a new `GenerateSora2PromptEntity` instance. Pass `None` for no initial data.

#### `Healthrx(data=None)`

Create a new `HealthrxEntity` instance. Pass `None` for no initial data.

#### `InitResetProductV6(data=None)`

Create a new `InitResetProductV6Entity` instance. Pass `None` for no initial data.

#### `Iri(data=None)`

Create a new `IriEntity` instance. Pass `None` for no initial data.

#### `IrisCapability(data=None)`

Create a new `IrisCapabilityEntity` instance. Pass `None` for no initial data.

#### `IrisChat(data=None)`

Create a new `IrisChatEntity` instance. Pass `None` for no initial data.

#### `IrisConnector(data=None)`

Create a new `IrisConnectorEntity` instance. Pass `None` for no initial data.

#### `IrisStatus(data=None)`

Create a new `IrisStatusEntity` instance. Pass `None` for no initial data.

#### `IrisTask(data=None)`

Create a new `IrisTaskEntity` instance. Pass `None` for no initial data.

#### `IrisUsage(data=None)`

Create a new `IrisUsageEntity` instance. Pass `None` for no initial data.

#### `Landing(data=None)`

Create a new `LandingEntity` instance. Pass `None` for no initial data.

#### `LandingStat(data=None)`

Create a new `LandingStatEntity` instance. Pass `None` for no initial data.

#### `LandingStatus(data=None)`

Create a new `LandingStatusEntity` instance. Pass `None` for no initial data.

#### `LinkInBio(data=None)`

Create a new `LinkInBioEntity` instance. Pass `None` for no initial data.

#### `LinkInDm(data=None)`

Create a new `LinkInDmEntity` instance. Pass `None` for no initial data.

#### `LinkInPost(data=None)`

Create a new `LinkInPostEntity` instance. Pass `None` for no initial data.

#### `LinkUser(data=None)`

Create a new `LinkUserEntity` instance. Pass `None` for no initial data.

#### `MediaAsset(data=None)`

Create a new `MediaAssetEntity` instance. Pass `None` for no initial data.

#### `Men(data=None)`

Create a new `MenEntity` instance. Pass `None` for no initial data.

#### `Microdrama(data=None)`

Create a new `MicrodramaEntity` instance. Pass `None` for no initial data.

#### `MicrohubPublic(data=None)`

Create a new `MicrohubPublicEntity` instance. Pass `None` for no initial data.

#### `OnboardingStatus(data=None)`

Create a new `OnboardingStatusEntity` instance. Pass `None` for no initial data.

#### `OnboardingV6(data=None)`

Create a new `OnboardingV6Entity` instance. Pass `None` for no initial data.

#### `PaidUser(data=None)`

Create a new `PaidUserEntity` instance. Pass `None` for no initial data.

#### `Pexel(data=None)`

Create a new `PexelEntity` instance. Pass `None` for no initial data.

#### `PhoneAdminAvailableAgentSource(data=None)`

Create a new `PhoneAdminAvailableAgentSourceEntity` instance. Pass `None` for no initial data.

#### `Product(data=None)`

Create a new `ProductEntity` instance. Pass `None` for no initial data.

#### `ProductDashboard(data=None)`

Create a new `ProductDashboardEntity` instance. Pass `None` for no initial data.

#### `ProductDashboardView(data=None)`

Create a new `ProductDashboardViewEntity` instance. Pass `None` for no initial data.

#### `ProductDemo(data=None)`

Create a new `ProductDemoEntity` instance. Pass `None` for no initial data.

#### `ProductLanding(data=None)`

Create a new `ProductLandingEntity` instance. Pass `None` for no initial data.

#### `PublicResumeStatus(data=None)`

Create a new `PublicResumeStatusEntity` instance. Pass `None` for no initial data.

#### `ReRollVideo(data=None)`

Create a new `ReRollVideoEntity` instance. Pass `None` for no initial data.

#### `ReadRootGet(data=None)`

Create a new `ReadRootGetEntity` instance. Pass `None` for no initial data.

#### `RecordDemoBooked(data=None)`

Create a new `RecordDemoBookedEntity` instance. Pass `None` for no initial data.

#### `RefreshStat(data=None)`

Create a new `RefreshStatEntity` instance. Pass `None` for no initial data.

#### `RemixerClipper(data=None)`

Create a new `RemixerClipperEntity` instance. Pass `None` for no initial data.

#### `ResetProduct(data=None)`

Create a new `ResetProductEntity` instance. Pass `None` for no initial data.

#### `RetryWebsiteScrape(data=None)`

Create a new `RetryWebsiteScrapeEntity` instance. Pass `None` for no initial data.

#### `SaveSurvey(data=None)`

Create a new `SaveSurveyEntity` instance. Pass `None` for no initial data.

#### `ScanSocial(data=None)`

Create a new `ScanSocialEntity` instance. Pass `None` for no initial data.

#### `ScanSocialsPublic(data=None)`

Create a new `ScanSocialsPublicEntity` instance. Pass `None` for no initial data.

#### `ScanSocialsStatus(data=None)`

Create a new `ScanSocialsStatusEntity` instance. Pass `None` for no initial data.

#### `ScheduleV2(data=None)`

Create a new `ScheduleV2Entity` instance. Pass `None` for no initial data.

#### `Scrape(data=None)`

Create a new `ScrapeEntity` instance. Pass `None` for no initial data.

#### `ScrapeWebsitePublic(data=None)`

Create a new `ScrapeWebsitePublicEntity` instance. Pass `None` for no initial data.

#### `ScrapedData(data=None)`

Create a new `ScrapedDataEntity` instance. Pass `None` for no initial data.

#### `ScrapingStatus(data=None)`

Create a new `ScrapingStatusEntity` instance. Pass `None` for no initial data.

#### `SelfServeActivate(data=None)`

Create a new `SelfServeActivateEntity` instance. Pass `None` for no initial data.

#### `Seo(data=None)`

Create a new `SeoEntity` instance. Pass `None` for no initial data.

#### `SeoAiMention(data=None)`

Create a new `SeoAiMentionEntity` instance. Pass `None` for no initial data.

#### `SeoBacklink(data=None)`

Create a new `SeoBacklinkEntity` instance. Pass `None` for no initial data.

#### `SeoKeyword(data=None)`

Create a new `SeoKeywordEntity` instance. Pass `None` for no initial data.

#### `SeoOverview(data=None)`

Create a new `SeoOverviewEntity` instance. Pass `None` for no initial data.

#### `SeoTraffic(data=None)`

Create a new `SeoTrafficEntity` instance. Pass `None` for no initial data.

#### `ShareAccessLink(data=None)`

Create a new `ShareAccessLinkEntity` instance. Pass `None` for no initial data.

#### `Site(data=None)`

Create a new `SiteEntity` instance. Pass `None` for no initial data.

#### `Slide(data=None)`

Create a new `SlideEntity` instance. Pass `None` for no initial data.

#### `SlugValidation(data=None)`

Create a new `SlugValidationEntity` instance. Pass `None` for no initial data.

#### `Social(data=None)`

Create a new `SocialEntity` instance. Pass `None` for no initial data.

#### `SocialScanPreview(data=None)`

Create a new `SocialScanPreviewEntity` instance. Pass `None` for no initial data.

#### `SocialScanProcess(data=None)`

Create a new `SocialScanProcessEntity` instance. Pass `None` for no initial data.

#### `SocialScanSave(data=None)`

Create a new `SocialScanSaveEntity` instance. Pass `None` for no initial data.

#### `Sora2Avatar(data=None)`

Create a new `Sora2AvatarEntity` instance. Pass `None` for no initial data.

#### `Sora2AvatarAssetUpload(data=None)`

Create a new `Sora2AvatarAssetUploadEntity` instance. Pass `None` for no initial data.

#### `Sora2AvatarStat(data=None)`

Create a new `Sora2AvatarStatEntity` instance. Pass `None` for no initial data.

#### `Stat(data=None)`

Create a new `StatEntity` instance. Pass `None` for no initial data.

#### `StatsRefreshBackfill(data=None)`

Create a new `StatsRefreshBackfillEntity` instance. Pass `None` for no initial data.

#### `StatsRefreshIssue(data=None)`

Create a new `StatsRefreshIssueEntity` instance. Pass `None` for no initial data.

#### `StatsRefreshOverview(data=None)`

Create a new `StatsRefreshOverviewEntity` instance. Pass `None` for no initial data.

#### `StatsRefreshRunSummary(data=None)`

Create a new `StatsRefreshRunSummaryEntity` instance. Pass `None` for no initial data.

#### `StatsRefreshTaskTrigger(data=None)`

Create a new `StatsRefreshTaskTriggerEntity` instance. Pass `None` for no initial data.

#### `Stripe(data=None)`

Create a new `StripeEntity` instance. Pass `None` for no initial data.

#### `Style(data=None)`

Create a new `StyleEntity` instance. Pass `None` for no initial data.

#### `Template(data=None)`

Create a new `TemplateEntity` instance. Pass `None` for no initial data.

#### `TikTokCreatorInfo(data=None)`

Create a new `TikTokCreatorInfoEntity` instance. Pass `None` for no initial data.

#### `TopPost(data=None)`

Create a new `TopPostEntity` instance. Pass `None` for no initial data.

#### `UploadPostAgent(data=None)`

Create a new `UploadPostAgentEntity` instance. Pass `None` for no initial data.

#### `User(data=None)`

Create a new `UserEntity` instance. Pass `None` for no initial data.

#### `UserAgent(data=None)`

Create a new `UserAgentEntity` instance. Pass `None` for no initial data.

#### `UserHealthDetail(data=None)`

Create a new `UserHealthDetailEntity` instance. Pass `None` for no initial data.

#### `UserWithAvatarSubmission(data=None)`

Create a new `UserWithAvatarSubmissionEntity` instance. Pass `None` for no initial data.

#### `UsersHealth(data=None)`

Create a new `UsersHealthEntity` instance. Pass `None` for no initial data.

#### `Video(data=None)`

Create a new `VideoEntity` instance. Pass `None` for no initial data.

#### `VideoRemixerWorker(data=None)`

Create a new `VideoRemixerWorkerEntity` instance. Pass `None` for no initial data.

#### `WatchdogRecovery(data=None)`

Create a new `WatchdogRecoveryEntity` instance. Pass `None` for no initial data.

#### `WinningAd(data=None)`

Create a new `WinningAdEntity` instance. Pass `None` for no initial data.

#### `XAdaptation(data=None)`

Create a new `XAdaptationEntity` instance. Pass `None` for no initial data.

#### `ZerohumanAdminAccount(data=None)`

Create a new `ZerohumanAdminAccountEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## ActivateEntity

```python
activate = client.Activate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activated_at` | `Any` | No |  |
| `message` | `str` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> ActivateEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Activate().create({
    "user_id": "example_user_id",  # str
    "message": "example_message",  # str
    "success": True,  # bool
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActivateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActivateUserEntity

```python
activate_user = client.ActivateUser()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activated_at` | `Any` | No |  |
| `message` | `str` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> ActivateUserEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.ActivateUser().create({
    "user_id": "example_user_id",  # str
    "message": "example_message",  # str
    "success": True,  # bool
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActivateUserEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActiveOnboardingEntity

```python
active_onboarding = client.ActiveOnboarding()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_step` | `Any` | No |  |
| `has_active_onboarding` | `bool` | Yes |  |
| `onboarding_data_id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> ActiveOnboardingEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.ActiveOnboarding().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActiveOnboardingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminEntity

```python
admin = client.Admin()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apply` | `bool` | No | Apply safe canonical or clean-only URL updates |
| `count` | `int` | Yes |  |
| `created_at` | `str` | Yes |  |
| `date_from` | `Any` | No |  |
| `date_to` | `Any` | No |  |
| `email` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `include_failed` | `bool` | No |  |
| `include_pending` | `bool` | No |  |
| `include_records` | `bool` | No | Include full per-field audit records in the response |
| `issue_ids` | `Any` | No |  |
| `only_active` | `bool` | No | Limit the audit to active agents |
| `platform` | `Any` | No |  |
| `posting_method` | `Any` | No |  |
| `product_id` | `str` | No |  |
| `query` | `Any` | No |  |
| `reason` | `Any` | No |  |
| `regenerate` | `bool` | No |  |
| `status` | `str` | No |  |
| `user_membership` | `Any` | No |  |
| `user_name` | `Any` | No |  |
| `user_onboarding_step` | `Any` | No |  |
| `video_type` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> AdminEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Admin().create({
    "user_id": "example_user_id",  # str
    "count": 1,  # int
    "created_at": "example_created_at",  # str
    "date_from": "example_date_from",  # Any
    "date_to": "example_date_to",  # Any
    "email": "example_email",  # str
    "id": "example_id",  # str
    "product_id": "example_product_id",  # str
    "video_type": "example_video_type",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[AdminEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Admin().list()
for admin in results:
    print(admin.data_get())
```

#### `load(reqmatch, ctrl=None) -> AdminEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Admin().load({"date": "date"})
```

#### `remove(reqmatch, ctrl=None) -> AdminEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.Admin().remove({"tester_id": "tester_id"})
```

#### `update(reqdata, ctrl=None) -> AdminEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.Admin().update({
    "agent_id": "agent_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminAccountResetEntity

```python
admin_account_reset = client.AdminAccountReset()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_ids` | `list` | Yes |  |
| `agent_ids_sha256` | `str` | Yes |  |
| `backup_sha256` | `str` | Yes |  |
| `batch_size` | `int` | No |  |
| `confirmation` | `str` | Yes |  |
| `customer_email` | `str` | Yes |  |
| `pc_name` | `str` | Yes |  |
| `phase` | `str` | No |  |
| `product_id` | `str` | Yes |  |
| `video_ids` | `list` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> AdminAccountResetEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.AdminAccountReset().create({
    "agent_ids": [],  # list
    "agent_ids_sha256": "example_agent_ids_sha256",  # str
    "backup_sha256": "example_backup_sha256",  # str
    "confirmation": "example_confirmation",  # str
    "customer_email": "example_customer_email",  # str
    "pc_name": "example_pc_name",  # str
    "product_id": "example_product_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminAccountResetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminCarouselEntity

```python
admin_carousel = client.AdminCarousel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `str` | No |  |
| `batch_id` | `str` | No |  |
| `caption` | `str` | No |  |
| `content_base64` | `str` | No |  |
| `day` | `Any` | No |  |
| `dry_run` | `bool` | No |  |
| `engine_run` | `str` | No |  |
| `expected_revision` | `str` | Yes |  |
| `formula` | `dict` | Yes |  |
| `formula_id` | `str` | No |  |
| `prompt` | `str` | Yes |  |
| `slides` | `list` | Yes |  |
| `title` | `str` | No |  |

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

#### `create(reqdata, ctrl=None) -> AdminCarouselEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.AdminCarousel().create({
    "stage": "example_stage",  # str
    "agent_id": "example_agent_id",  # str
    "batch_id": "example_batch_id",  # str
    "caption": "example_caption",  # str
    "day": "example_day",  # Any
    "expected_revision": "example_expected_revision",  # str
    "formula": {},  # dict
    "formula_id": "example_formula_id",  # str
    "prompt": "example_prompt",  # str
    "slides": [],  # list
    "title": "example_title",  # str
})
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

#### `load(reqmatch, ctrl=None) -> AdminCarouselEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.AdminCarousel().load({"batch_id": "batch_id"})
```

#### `update(reqdata, ctrl=None) -> AdminCarouselEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.AdminCarousel().update({
    "fmt": "fmt",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminCarouselEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminCarouselDemoReviewEntity

```python
admin_carousel_demo_review = client.AdminCarouselDemoReview()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `items` | `list` | Yes |  |
| `reason` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> AdminCarouselDemoReviewEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.AdminCarouselDemoReview().create({
    "items": [],  # list
})
```

#### `load(reqmatch, ctrl=None) -> AdminCarouselDemoReviewEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.AdminCarouselDemoReview().load({"id": "admin_carousel_demo_review_id"})
```

#### `update(reqdata, ctrl=None) -> AdminCarouselDemoReviewEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.AdminCarouselDemoReview().update({
    "demo_review_id": "demo_review_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminCarouselDemoReviewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminCustomerEntity

```python
admin_customer = client.AdminCustomer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `Any` | No |  |
| `active_vireel_agents` | `int` | Yes |  |
| `agents` | `list` | Yes |  |
| `billing_source` | `str` | Yes |  |
| `contracted_agents` | `Any` | No |  |
| `email` | `str` | Yes |  |
| `membership` | `Any` | No |  |
| `name` | `str` | No |  |
| `pfa_only_agents` | `int` | Yes |  |
| `severity` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `subscription_status` | `Any` | No |  |
| `user_id` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[AdminCustomerEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AdminCustomer().list()
for admin_customer in results:
    print(admin_customer.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminCustomerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminCustomerSuccessEntity

```python
admin_customer_success = client.AdminCustomerSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_agents` | `int` | Yes |  |
| `active_products` | `int` | Yes |  |
| `agents_count` | `int` | Yes |  |
| `auto_schedule_status` | `str` | Yes |  |
| `days_until_period_end` | `Any` | No |  |
| `email` | `str` | Yes |  |
| `feature_impact` | `str` | Yes |  |
| `last_notification_at` | `Any` | No |  |
| `membership` | `Any` | No |  |
| `name` | `str` | No |  |
| `notification_count` | `int` | Yes |  |
| `notification_events` | `list` | Yes |  |
| `priority` | `str` | Yes |  |
| `severity` | `str` | Yes |  |
| `status_label` | `str` | Yes |  |
| `subscription_current_period_end` | `Any` | No |  |
| `subscription_status` | `Any` | No |  |
| `upcoming_posts` | `int` | Yes |  |
| `user_id` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[AdminCustomerSuccessEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AdminCustomerSuccess().list()
for admin_customer_success in results:
    print(admin_customer_success.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminCustomerSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminGeneratedVideoEntity

```python
admin_generated_video = client.AdminGeneratedVideo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `str` | No |  |
| `agent_name` | `Any` | No |  |
| `created_at` | `str` | Yes |  |
| `duration` | `float` | No |  |
| `generation_status` | `dict` | No |  |
| `id` | `str` | Yes |  |
| `product_id` | `str` | No |  |
| `thumbnail_url` | `Any` | No |  |
| `title` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `updated_at` | `Any` | No |  |
| `url` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[AdminGeneratedVideoEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AdminGeneratedVideo().list({"user_id": "example"})
for admin_generated_video in results:
    print(admin_generated_video.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminGeneratedVideoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminHealthrxEntity

```python
admin_healthrx = client.AdminHealthrx()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `str` | Yes |  |
| `delivery_enabled` | `bool` | No |  |
| `id` | `str` | No |  |
| `option_id` | `str` | Yes |  |
| `plan` | `dict` | Yes |  |
| `preparation_enabled` | `bool` | No |  |
| `product_id` | `str` | Yes |  |
| `reason` | `str` | Yes |  |
| `request_key` | `str` | Yes |  |
| `revision` | `int` | Yes |  |
| `schedule_enabled` | `bool` | No |  |
| `version` | `str` | Yes |  |
| `viewed` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> AdminHealthrxEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.AdminHealthrx().create({
    "action": "example_action",  # str
    "option_id": "example_option_id",  # str
    "plan": {},  # dict
    "product_id": "example_product_id",  # str
    "reason": "example_reason",  # str
    "request_key": "example_request_key",  # str
    "version": "example_version",  # str
    "viewed": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> AdminHealthrxEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.AdminHealthrx().load({"item_id": "item_id", "kind": "kind"})
```

#### `update(reqdata, ctrl=None) -> AdminHealthrxEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.AdminHealthrx().update({
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminHealthrxEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminInsightEntity

```python
admin_insight = client.AdminInsight()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer_success_cases` | `list` | Yes |  |
| `customers` | `list` | Yes |  |
| `generated_at` | `str` | Yes |  |
| `pfa_database` | `dict` | Yes |  |
| `recent_signups` | `list` | Yes |  |
| `summary` | `dict` | Yes |  |
| `vireel_database` | `dict` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[AdminInsightEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AdminInsight().list()
for admin_insight in results:
    print(admin_insight.data_get())
```

#### `load(reqmatch, ctrl=None) -> AdminInsightEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.AdminInsight().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminInsightEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminLandingTaskEntity

```python
admin_landing_task = client.AdminLandingTask()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `task_id` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> AdminLandingTaskEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.AdminLandingTask().create({
    "user_id": "example_user_id",  # str
    "task_id": "example_task_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminLandingTaskEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminMetricsSummaryEntity

```python
admin_metrics_summary = client.AdminMetricsSummary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `paid_users_by_level` | `list` | Yes |  |
| `total_cancellations` | `int` | Yes |  |
| `total_previews_generated` | `int` | Yes |  |
| `total_signups` | `int` | Yes |  |
| `total_videos_generated` | `int` | Yes |  |
| `url_attempts` | `int` | Yes |  |
| `user_credits` | `list` | Yes |  |
| `user_gifted_credits` | `list` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[AdminMetricsSummaryEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AdminMetricsSummary().list()
for admin_metrics_summary in results:
    print(admin_metrics_summary.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminMetricsSummaryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminPostEntity

```python
admin_post = client.AdminPost()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_job_ids` | `Any` | Yes |  |
| `agent_id` | `str` | Yes |  |
| `agent_name` | `Any` | Yes |  |
| `agent_platform_urls` | `Any` | Yes |  |
| `agent_url` | `Any` | Yes |  |
| `comments` | `int` | Yes |  |
| `error_message` | `Any` | Yes |  |
| `failed_at` | `Any` | Yes |  |
| `id` | `str` | Yes |  |
| `instagram_posted_by` | `Any` | Yes |  |
| `instagram_posted_url` | `Any` | Yes |  |
| `instagram_scraped_social_post_id` | `str` | Yes |  |
| `is_instagram_posted` | `bool` | Yes |  |
| `is_tiktok_posted` | `bool` | Yes |  |
| `is_youtube_posted` | `bool` | Yes |  |
| `last_refreshed_at` | `Any` | Yes |  |
| `likes` | `int` | Yes |  |
| `platform_post_methods` | `Any` | Yes |  |
| `platform_urls` | `Any` | Yes |  |
| `post_method` | `Any` | Yes |  |
| `post_platforms` | `Any` | Yes |  |
| `post_url` | `Any` | Yes |  |
| `posted_at` | `Any` | Yes |  |
| `product_id` | `str` | Yes |  |
| `results_status` | `Any` | Yes |  |
| `scheduled_datetime` | `str` | Yes |  |
| `source_type` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `tiktok_posted_by` | `Any` | Yes |  |
| `tiktok_posted_url` | `Any` | Yes |  |
| `tiktok_scraped_social_post_id` | `str` | Yes |  |
| `upload_post_error` | `Any` | Yes |  |
| `upload_post_status` | `Any` | Yes |  |
| `upload_post_uploads` | `Any` | Yes |  |
| `user_email` | `str` | Yes |  |
| `user_id` | `str` | Yes |  |
| `user_name` | `Any` | Yes |  |
| `video_id` | `str` | Yes |  |
| `video_url` | `Any` | Yes |  |
| `views` | `int` | Yes |  |
| `youtube_posted_by` | `Any` | Yes |  |
| `youtube_posted_url` | `Any` | Yes |  |
| `youtube_scraped_social_post_id` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[AdminPostEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AdminPost().list()
for admin_post in results:
    print(admin_post.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminPostEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminRecentSignupEntity

```python
admin_recent_signup = client.AdminRecentSignup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `current_step` | `str` | Yes |  |
| `email` | `str` | No |  |
| `email_source` | `Any` | No |  |
| `error_message` | `Any` | No |  |
| `flow_variant` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `inactive_minutes` | `int` | Yes |  |
| `last_notification_at` | `Any` | No |  |
| `last_seen_at` | `str` | Yes |  |
| `likely_cause` | `str` | Yes |  |
| `notification_count` | `int` | Yes |  |
| `notification_events` | `list` | Yes |  |
| `product_id` | `str` | No |  |
| `product_name` | `Any` | No |  |
| `product_url` | `str` | Yes |  |
| `severity` | `str` | Yes |  |
| `social_scan_status` | `Any` | No |  |
| `stage_label` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `updated_at` | `Any` | No |  |
| `website_scrape_status` | `Any` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[AdminRecentSignupEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AdminRecentSignup().list()
for admin_recent_signup in results:
    print(admin_recent_signup.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminRecentSignupEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminSlideshowDiagEntity

```python
admin_slideshow_diag = client.AdminSlideshowDiag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `str` | No |  |
| `batch_id` | `str` | No |  |
| `caption` | `str` | No |  |
| `content_base64` | `str` | No |  |
| `day` | `Any` | No |  |
| `formula_id` | `str` | No |  |
| `id` | `str` | No |  |
| `title` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> AdminSlideshowDiagEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.AdminSlideshowDiag().create({
    "id": "example_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminSlideshowDiagEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminSlideshowImportEntity

```python
admin_slideshow_import = client.AdminSlideshowImport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `str` | Yes |  |
| `batch_id` | `str` | Yes |  |
| `caption` | `str` | Yes |  |
| `day` | `str` | Yes |  |
| `dry_run` | `bool` | No |  |
| `engine_run` | `str` | No |  |
| `formula_id` | `str` | Yes |  |
| `slides` | `list` | Yes |  |
| `title` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> AdminSlideshowImportEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.AdminSlideshowImport().create({
    "agent_id": "example_agent_id",  # str
    "batch_id": "example_batch_id",  # str
    "caption": "example_caption",  # str
    "day": "example_day",  # str
    "formula_id": "example_formula_id",  # str
    "slides": [],  # list
    "title": "example_title",  # str
})
```

#### `load(reqmatch, ctrl=None) -> AdminSlideshowImportEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.AdminSlideshowImport().load({"batch_id": "batch_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminSlideshowImportEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminUserViewEntity

```python
admin_user_view = client.AdminUserView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `Any` | No |  |
| `admin_notes` | `Any` | No |  |
| `agents_count` | `int` | No |  |
| `created_at` | `str` | Yes |  |
| `credits` | `int` | Yes |  |
| `email` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `industry` | `Any` | Yes |  |
| `is_admin` | `bool` | No |  |
| `is_bookmarked` | `bool` | No |  |
| `is_internal_user` | `bool` | No |  |
| `membership` | `Any` | Yes |  |
| `name` | `str` | Yes |  |
| `new_email` | `str` | Yes |  |
| `partner_external_user_id` | `str` | No |  |
| `partner_policy_code` | `Any` | No |  |
| `partner_source` | `Any` | No |  |
| `product_name` | `Any` | Yes |  |
| `product_url` | `Any` | Yes |  |
| `skip` | `bool` | Yes |  |
| `subscription_details` | `Any` | No |  |
| `subscription_status` | `Any` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> AdminUserViewEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.AdminUserView().create({
    "user_id": "example_user_id",  # str
    "created_at": "example_created_at",  # str
    "credits": 1,  # int
    "email": "example_email",  # str
    "id": "example_id",  # str
    "industry": "example_industry",  # Any
    "membership": "example_membership",  # Any
    "name": "example_name",  # str
    "new_email": "example_new_email",  # str
    "product_name": "example_product_name",  # Any
    "product_url": "example_product_url",  # Any
    "skip": True,  # bool
    "subscription_status": "example_subscription_status",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list[AdminUserViewEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AdminUserView().list()
for admin_user_view in results:
    print(admin_user_view.data_get())
```

#### `remove(reqmatch, ctrl=None) -> AdminUserViewEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.AdminUserView().remove({"user_id": "user_id"})
```

#### `update(reqdata, ctrl=None) -> AdminUserViewEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.AdminUserView().update({
    "user_id": "user_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminUserViewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminUsersTableItemEntity

```python
admin_users_table_item = client.AdminUsersTableItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activated` | `bool` | Yes |  |
| `agents_count` | `int` | No |  |
| `created_at` | `str` | Yes |  |
| `credits` | `int` | Yes |  |
| `demo_booked` | `bool` | Yes |  |
| `email` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `membership` | `Any` | Yes |  |
| `name` | `str` | Yes |  |
| `onboarding_flow` | `str` | Yes |  |
| `product_name` | `Any` | Yes |  |
| `product_url` | `Any` | Yes |  |
| `survey_data` | `Any` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[AdminUsersTableItemEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AdminUsersTableItem().list()
for admin_users_table_item in results:
    print(admin_users_table_item.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminUsersTableItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminVideoRemixerEntity

```python
admin_video_remixer = client.AdminVideoRemixer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity` | `str` | Yes |  |
| `allowed_platforms` | `list` | No |  |
| `anchor_clip_id` | `str` | No |  |
| `atomicity_class` | `Any` | No |  |
| `auto_render` | `bool` | No |  |
| `campaign_allowed` | `bool` | No |  |
| `channel` | `str` | No |  |
| `channel_default` | `str` | No |  |
| `clip_id` | `str` | Yes |  |
| `clip_ids` | `list` | No |  |
| `collected_at` | `str` | Yes |  |
| `comments` | `Any` | No |  |
| `completion_rate` | `Any` | No |  |
| `confirmed_duplicate_of` | `Any` | No |  |
| `consent_doc_uri` | `str` | No |  |
| `contact` | `str` | No |  |
| `conversions` | `Any` | No |  |
| `count` | `int` | No |  |
| `creator` | `str` | No |  |
| `creator_id` | `str` | No |  |
| `crop_window` | `Any` | No |  |
| `cta_product_id` | `str` | No |  |
| `days` | `int` | No |  |
| `derivative_edits_allowed` | `bool` | No |  |
| `enabled` | `bool` | No |  |
| `end_ms` | `Any` | No |  |
| `enqueue` | `bool` | No |  |
| `errors` | `list` | No |  |
| `evidence` | `str` | Yes |  |
| `expected_revision` | `Any` | No |  |
| `expected_revisions` | `dict` | Yes |  |
| `external_ai_allowed` | `bool` | No |  |
| `file` | `str` | Yes |  |
| `followers` | `Any` | No |  |
| `formula_id` | `str` | Yes |  |
| `formula_ids` | `list` | Yes |  |
| `handles` | `dict` | No |  |
| `hook_subtype` | `Any` | No |  |
| `hour_utc` | `int` | No |  |
| `human_role` | `str` | Yes |  |
| `idempotency_key` | `str` | Yes |  |
| `items` | `list` | Yes |  |
| `kim_clip_ids` | `list` | Yes |  |
| `kind` | `str` | Yes |  |
| `levels` | `dict` | Yes |  |
| `likes` | `Any` | No |  |
| `media_enabled` | `bool` | Yes |  |
| `medical_claim_present` | `bool` | No |  |
| `minute_utc` | `int` | No |  |
| `music_bed_allowed` | `bool` | No |  |
| `music_policy` | `str` | No |  |
| `name` | `str` | Yes |  |
| `niche` | `str` | No |  |
| `notes` | `str` | No |  |
| `origin` | `str` | No |  |
| `owner_waiver` | `bool` | No |  |
| `paid_ads_allowed` | `bool` | No |  |
| `patient_identifiable` | `bool` | No |  |
| `person_type` | `str` | No |  |
| `pipeline` | `bool` | No |  |
| `planning_only` | `bool` | No |  |
| `platform` | `str` | Yes |  |
| `platform_post_id` | `str` | Yes |  |
| `policy` | `dict` | Yes |  |
| `polish` | `str` | No |  |
| `post_url` | `str` | Yes |  |
| `posted_at` | `str` | Yes |  |
| `primary_role` | `Any` | No |  |
| `purpose` | `str` | Yes |  |
| `rate` | `float` | No |  |
| `rationale` | `str` | No |  |
| `reason` | `str` | Yes |  |
| `reference_source_id` | `str` | No |  |
| `requires_medical_review` | `bool` | No |  |
| `review_status` | `Any` | No |  |
| `revision` | `int` | Yes |  |
| `rights_expires_at` | `Any` | No |  |
| `rights_status` | `str` | No |  |
| `run_id` | `str` | Yes |  |
| `sample_links` | `list` | No |  |
| `secondary_roles` | `Any` | No |  |
| `seconds` | `int` | Yes |  |
| `seed` | `int` | No |  |
| `seed_base` | `int` | No |  |
| `sensitive_personal_data_present` | `bool` | No |  |
| `shares` | `Any` | No |  |
| `shoot` | `str` | No |  |
| `slots` | `list` | Yes |  |
| `soundbite_title` | `Any` | No |  |
| `source` | `str` | Yes |  |
| `source_id` | `str` | Yes |  |
| `source_ids` | `list` | Yes |  |
| `spend_usd` | `Any` | No |  |
| `spiciness` | `Any` | No |  |
| `spiciness_notes` | `str` | No |  |
| `start_ms` | `Any` | No |  |
| `status` | `str` | No |  |
| `terry_clip_ids` | `list` | Yes |  |
| `testimonial_strength` | `Any` | No |  |
| `testimonial_type` | `Any` | No |  |
| `tier` | `str` | No |  |
| `timeline` | `dict` | Yes |  |
| `topic` | `str` | No |  |
| `topic_tags` | `Any` | No |  |
| `total_target_ms` | `int` | Yes |  |
| `use_learned_weights` | `bool` | No |  |
| `views` | `Any` | No |  |
| `window` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> AdminVideoRemixerEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.AdminVideoRemixer().create({
    "activity": "example_activity",  # str
    "clip_id": "example_clip_id",  # str
    "collected_at": "example_collected_at",  # str
    "evidence": "example_evidence",  # str
    "expected_revisions": {},  # dict
    "file": "example_file",  # str
    "formula_id": "example_formula_id",  # str
    "formula_ids": [],  # list
    "human_role": "example_human_role",  # str
    "idempotency_key": "example_idempotency_key",  # str
    "items": [],  # list
    "kim_clip_ids": [],  # list
    "kind": "example_kind",  # str
    "levels": {},  # dict
    "media_enabled": True,  # bool
    "name": "example_name",  # str
    "platform": "example_platform",  # str
    "platform_post_id": "example_platform_post_id",  # str
    "policy": {},  # dict
    "post_url": "example_post_url",  # str
    "posted_at": "example_posted_at",  # str
    "purpose": "example_purpose",  # str
    "reason": "example_reason",  # str
    "revision": 1,  # int
    "run_id": "example_run_id",  # str
    "seconds": 1,  # int
    "slots": [],  # list
    "source": "example_source",  # str
    "source_id": "example_source_id",  # str
    "source_ids": [],  # list
    "terry_clip_ids": [],  # list
    "timeline": {},  # dict
    "total_target_ms": 1,  # int
    "window": "example_window",  # str
})
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

#### `load(reqmatch, ctrl=None) -> AdminVideoRemixerEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.AdminVideoRemixer().load({"clip_id": "clip_id"})
```

#### `patch(reqdata, ctrl=None) -> AdminVideoRemixerEntity`

Change part of an existing entity: only the fields given are sent. The data must include the entity `id`. Returns the patched entity and raises on error.

```python
result = client.AdminVideoRemixer().patch({
    # Only the fields to change
})
```

#### `remove(reqmatch, ctrl=None) -> AdminVideoRemixerEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.AdminVideoRemixer().remove({"identifier": "identifier"})
```

#### `update(reqdata, ctrl=None) -> AdminVideoRemixerEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.AdminVideoRemixer().update({
    "identifier": "identifier",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminVideoRemixerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdvanceStepEntity

```python
advance_step = client.AdvanceStep()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_step` | `str` | Yes |  |
| `onboarding_data_id` | `str` | Yes | UUID of the OnboardingData record |
| `success` | `bool` | Yes |  |
| `to_step` | `str` | Yes | Target step name |

### Operations

#### `create(reqdata, ctrl=None) -> AdvanceStepEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.AdvanceStep().create({
    "onboarding_data_id": "example_onboarding_data_id",  # str
    "to_step": "example_to_step",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdvanceStepEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentEntity

```python
agent = client.Agent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_connections` | `int` | Yes |  |
| `at_capacity` | `bool` | Yes |  |
| `id` | `str` | Yes |  |
| `is_active` | `bool` | Yes |  |
| `name` | `str` | Yes |  |
| `tiktok_stats` | `Any` | No |  |
| `type` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[AgentEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Agent().list()
for agent in results:
    print(agent.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentAccessCustomersHealthEntity

```python
agent_access_customers_health = client.AgentAccessCustomersHealth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountType` | `Any` | No |  |
| `agentQuota` | `int` | Yes |  |
| `assignedAgentsByType` | `dict` | Yes |  |
| `assignedAgentsTotal` | `int` | Yes |  |
| `createdAt` | `str` | Yes |  |
| `email` | `str` | Yes |  |
| `isInternalUser` | `Any` | No |  |
| `membership` | `Any` | No |  |
| `name` | `str` | No |  |
| `performance` | `dict` | Yes |  |
| `productCount` | `int` | Yes |  |
| `subscriptionCurrentPeriodEnd` | `Any` | No |  |
| `subscriptionDetails` | `Any` | No |  |
| `subscriptionStatus` | `Any` | No |  |
| `usage` | `dict` | Yes |  |
| `userId` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[AgentAccessCustomersHealthEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AgentAccessCustomersHealth().list()
for agent_access_customers_health in results:
    print(agent_access_customers_health.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentAccessCustomersHealthEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentAccessOverviewEntity

```python
agent_access_overview = client.AgentAccessOverview()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeUsers` | `int` | Yes |  |
| `generatedAt` | `str` | Yes |  |
| `newUsersYesterday` | `int` | Yes |  |
| `onboardingContextCounts` | `dict` | Yes |  |
| `onboardingCurrentStepCounts` | `dict` | Yes |  |
| `onboardingCurrentStepWindow` | `dict` | Yes |  |
| `onboardingFlowVariantCounts` | `dict` | Yes |  |
| `onboardingLockedUntilActivation` | `int` | Yes |  |
| `onboardingRecordsTotal` | `int` | Yes |  |
| `onboardingRecordsWindow` | `int` | Yes |  |
| `onboardingSocialScanStatusCounts` | `dict` | Yes |  |
| `onboardingWebsiteScrapeStatusCounts` | `dict` | Yes |  |
| `subscriptionStatusCounts` | `dict` | Yes |  |
| `totalInternalUsers` | `int` | Yes |  |
| `totalUsers` | `int` | Yes |  |
| `trialStartedYesterday` | `int` | Yes |  |
| `trialingUsers` | `int` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> AgentAccessOverviewEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.AgentAccessOverview().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentAccessOverviewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentAccessPhilHourlyNotificationEntity

```python
agent_access_phil_hourly_notification = client.AgentAccessPhilHourlyNotification()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `generatedAt` | `str` | Yes |  |
| `phoneHealth` | `dict` | Yes |  |
| `scheduledPosts` | `dict` | Yes |  |
| `targetDate` | `str` | Yes |  |
| `uploadPostInstagramHealth` | `dict` | Yes |  |
| `uploadPostTiktokHealth` | `dict` | Yes |  |
| `uploadPostYoutubeHealth` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> AgentAccessPhilHourlyNotificationEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.AgentAccessPhilHourlyNotification().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentAccessPhilHourlyNotificationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentAccessPhilStatsRefreshEntity

```python
agent_access_phil_stats_refresh = client.AgentAccessPhilStatsRefresh()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `generatedAt` | `str` | Yes |  |
| `statsRefresh` | `dict` | Yes |  |
| `targetDate` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> AgentAccessPhilStatsRefreshEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.AgentAccessPhilStatsRefresh().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentAccessPhilStatsRefreshEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentAccessPhilVideoEntity

```python
agent_access_phil_video = client.AgentAccessPhilVideo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `generatedAt` | `str` | Yes |  |
| `targetDate` | `str` | Yes |  |
| `videos` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> AgentAccessPhilVideoEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.AgentAccessPhilVideo().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentAccessPhilVideoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentAccessUserAgentEntity

```python
agent_access_user_agent = client.AgentAccessUserAgent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentQuota` | `int` | Yes |  |
| `agents` | `list` | Yes |  |
| `assignedByType` | `dict` | Yes |  |
| `assignedTotal` | `int` | Yes |  |
| `email` | `str` | Yes |  |
| `products` | `list` | Yes |  |
| `userId` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[AgentAccessUserAgentEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AgentAccessUserAgent().list({"email": "example"})
for agent_access_user_agent in results:
    print(agent_access_user_agent.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentAccessUserAgentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentAccessUserPhoneFarmEntity

```python
agent_access_user_phone_farm = client.AgentAccessUserPhoneFarm()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar` | `Any` | No |  |
| `facebookUrl` | `Any` | No |  |
| `id` | `str` | Yes |  |
| `instagramUrl` | `Any` | No |  |
| `lastAdminSyncedAt` | `Any` | No |  |
| `name` | `str` | Yes |  |
| `productId` | `Any` | No |  |
| `productName` | `Any` | No |  |
| `tiktokUrl` | `Any` | No |  |
| `type` | `Any` | No |  |
| `uploadPostPlatforms` | `Any` | No |  |
| `youtubeUrl` | `Any` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[AgentAccessUserPhoneFarmEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AgentAccessUserPhoneFarm().list({"email": "example"})
for agent_access_user_phone_farm in results:
    print(agent_access_user_phone_farm.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentAccessUserPhoneFarmEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentAccessUserPostEntity

```python
agent_access_user_post = client.AgentAccessUserPost()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deltaYesterday` | `int` | Yes |  |
| `expectedVideosPerDay` | `int` | Yes |  |
| `postedToday` | `int` | Yes |  |
| `postedYesterday` | `int` | Yes |  |
| `productId` | `Any` | No |  |
| `productName` | `Any` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[AgentAccessUserPostEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AgentAccessUserPost().list({"email": "example"})
for agent_access_user_post in results:
    print(agent_access_user_post.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentAccessUserPostEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentAccessUserSummaryEntity

```python
agent_access_user_summary = client.AgentAccessUserSummary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deletedAt` | `Any` | No |  |
| `id` | `str` | Yes |  |
| `isActive` | `Any` | No |  |
| `name` | `str` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[AgentAccessUserSummaryEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AgentAccessUserSummary().list({"email": "example"})
for agent_access_user_summary in results:
    print(agent_access_user_summary.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentAccessUserSummaryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentAccessUserVideoEntity

```python
agent_access_user_video = client.AgentAccessUserVideo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allTime` | `dict` | Yes |  |
| `email` | `str` | Yes |  |
| `today` | `dict` | Yes |  |
| `userId` | `str` | Yes |  |
| `yesterday` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> AgentAccessUserVideoEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.AgentAccessUserVideo().load({"email": "email"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentAccessUserVideoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentAccessUserWinningAdEntity

```python
agent_access_user_winning_ad = client.AgentAccessUserWinningAd()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `productId` | `str` | Yes |  |
| `productName` | `str` | Yes |  |
| `winningAds` | `list` | Yes |  |
| `winningAdsCount` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[AgentAccessUserWinningAdEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AgentAccessUserWinningAd().list({"email": "example"})
for agent_access_user_winning_ad in results:
    print(agent_access_user_winning_ad.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentAccessUserWinningAdEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentAccessWinningAdsSummaryEntity

```python
agent_access_winning_ads_summary = client.AgentAccessWinningAdsSummary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `str` | Yes |  |
| `name` | `str` | No |  |
| `productCount` | `int` | Yes |  |
| `productsWithWinningAds` | `int` | Yes |  |
| `subscriptionStatus` | `Any` | No |  |
| `totalWinningAds` | `int` | Yes |  |
| `userId` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[AgentAccessWinningAdsSummaryEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AgentAccessWinningAdsSummary().list()
for agent_access_winning_ads_summary in results:
    print(agent_access_winning_ads_summary.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentAccessWinningAdsSummaryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentDetailEntity

```python
agent_detail = client.AgentDetail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeConnections` | `Any` | No |  |
| `assignedAt` | `Any` | No |  |
| `avatar` | `str` | Yes |  |
| `bio` | `Any` | No |  |
| `facebookUrl` | `Any` | No |  |
| `id` | `str` | Yes |  |
| `instagramUrl` | `Any` | No |  |
| `isActive` | `bool` | No |  |
| `name` | `str` | Yes |  |
| `role` | `Any` | No |  |
| `tiktokStats` | `Any` | No |  |
| `tiktokUrl` | `Any` | No |  |
| `type` | `str` | Yes |  |
| `uploadPostPlatforms` | `Any` | No |  |
| `youtubeUrl` | `Any` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[AgentDetailEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AgentDetail().list()
for agent_detail in results:
    print(agent_detail.data_get())
```

#### `update(reqdata, ctrl=None) -> AgentDetailEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.AgentDetail().update({
    "upload_post_agent_id": "upload_post_agent_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentDetailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentHealthEntity

```python
agent_health = client.AgentHealth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `daily` | `list` | Yes |  |
| `dates` | `list` | Yes |  |
| `generated_at` | `str` | Yes |  |
| `groups` | `list` | Yes |  |
| `latest` | `dict` | Yes |  |
| `live_date` | `Any` | No |  |
| `phone_admin_generated_at` | `str` | Yes |  |
| `platform` | `str` | No |  |
| `post_target` | `int` | Yes |  |
| `qa_managed_agent_ids` | `list` | No |  |
| `scope_prefixes` | `list` | Yes |  |
| `timezone` | `str` | Yes |  |
| `warmup_target` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[AgentHealthEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AgentHealth().list()
for agent_health in results:
    print(agent_health.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentHealthEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentHealthCustomerOptionEntity

```python
agent_health_customer_option = client.AgentHealthCustomerOption()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_count` | `int` | Yes |  |
| `email` | `str` | Yes |  |
| `user_id` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[AgentHealthCustomerOptionEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AgentHealthCustomerOption().list()
for agent_health_customer_option in results:
    print(agent_health_customer_option.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentHealthCustomerOptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentHealthDetailEntity

```python
agent_health_detail = client.AgentHealthDetail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_issue_total` | `int` | No |  |
| `date` | `str` | Yes |  |
| `generated_at` | `str` | Yes |  |
| `group_id` | `str` | Yes |  |
| `has_more` | `bool` | Yes |  |
| `issue_total` | `int` | Yes |  |
| `issues` | `list` | Yes |  |
| `limit` | `int` | Yes |  |
| `metric` | `str` | Yes |  |
| `offset` | `int` | Yes |  |
| `warmup_runs` | `list` | No |  |
| `warning_total` | `int` | No |  |
| `warnings` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[AgentHealthDetailEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AgentHealthDetail().list({"date": "example", "group_id": "example"})
for agent_health_detail in results:
    print(agent_health_detail.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentHealthDetailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentPostEntity

```python
agent_post = client.AgentPost()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `int` | Yes |  |
| `error_message` | `Any` | Yes |  |
| `id` | `str` | Yes |  |
| `likes` | `int` | Yes |  |
| `product_id` | `str` | Yes |  |
| `results` | `Any` | Yes |  |
| `scheduled_datetime` | `str` | Yes |  |
| `source_type` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `user_email` | `str` | Yes |  |
| `user_id` | `str` | Yes |  |
| `user_name` | `Any` | Yes |  |
| `video_id` | `str` | Yes |  |
| `video_url` | `Any` | Yes |  |
| `views` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[AgentPostEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AgentPost().list({"id": "example"})
for agent_post in results:
    print(agent_post.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentPostEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentStatEntity

```python
agent_stat = client.AgentStat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agents_needed` | `int` | Yes |  |
| `dedicated_agents` | `dict` | Yes |  |
| `shared_agents` | `dict` | Yes |  |
| `total_agents` | `int` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> AgentStatEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.AgentStat().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentStatEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentSummaryEntity

```python
agent_summary = client.AgentSummary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_count` | `int` | Yes |  |
| `favicon_url` | `Any` | No |  |
| `product_id` | `str` | Yes |  |
| `product_name` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[AgentSummaryEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AgentSummary().list()
for agent_summary in results:
    print(agent_summary.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentSummaryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentsSummaryEntity

```python
agents_summary = client.AgentsSummary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `total_agents` | `int` | Yes |  |
| `total_agents_count_sum` | `int` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> AgentsSummaryEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.AgentsSummary().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentsSummaryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AnalysisStatusEntity

```python
analysis_status = client.AnalysisStatus()
```

### Operations

#### `load(reqmatch, ctrl=None) -> AnalysisStatusEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.AnalysisStatus().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AnalysisStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AnalyticsPostEntity

```python
analytics_post = client.AnalyticsPost()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent` | `Any` | No |  |
| `comment` | `Any` | No |  |
| `created_at` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `product_id` | `str` | No |  |
| `queue_position` | `Any` | No |  |
| `results` | `Any` | No |  |
| `scheduled_datetime` | `str` | Yes |  |
| `scraped_posts` | `Any` | No |  |
| `source_type` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `video` | `Any` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[AnalyticsPostEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AnalyticsPost().list({"date_from": "example"})
for analytics_post in results:
    print(analytics_post.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AnalyticsPostEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AnalyzeProductEntity

```python
analyze_product = client.AnalyzeProduct()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instagram_username` | `Any` | No |  |
| `message` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> AnalyzeProductEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.AnalyzeProduct().create({
    "url": "example_url",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AnalyzeProductEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AssignAgentEntity

```python
assign_agent = client.AssignAgent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent` | `dict` | Yes | Agent information for V6. |
| `assignment` | `dict` | Yes | Assignment information for V6. |
| `mock_agents` | `list` | Yes |  |
| `onboarding_data_id` | `str` | Yes | UUID of the OnboardingData record |

### Operations

#### `create(reqdata, ctrl=None) -> AssignAgentEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.AssignAgent().create({
    "onboarding_data_id": "example_onboarding_data_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AssignAgentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AuthEntity

```python
auth = client.Auth()
```

### Operations

#### `create(reqdata, ctrl=None) -> AuthEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuthEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AutoScheduleSettingEntity

```python
auto_schedule_setting = client.AutoScheduleSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `can_enable_repost` | `bool` | No |  |
| `effective_posted_video_reuse_percent` | `int` | Yes |  |
| `enabled_video_types` | `Any` | No | List of enabled video type filters |
| `is_enabled` | `bool` | Yes |  |
| `lock_video_regeneration_controls` | `bool` | No |  |
| `membership_tier` | `str` | Yes |  |
| `posted_video_reuse_percent` | `Any` | No |  |
| `product_id` | `str` | No |  |
| `repost_source` | `Any` | No |  |
| `videos_per_day` | `int` | Yes |  |

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

#### `load(reqmatch, ctrl=None) -> AutoScheduleSettingEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.AutoScheduleSetting().load()
```

#### `update(reqdata, ctrl=None) -> AutoScheduleSettingEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.AutoScheduleSetting().update({
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AutoScheduleSettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BulkTikTokStatsUpdateEntity

```python
bulk_tik_tok_stats_update = client.BulkTikTokStatsUpdate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `failedIds` | `list` | Yes |  |
| `updatedCount` | `int` | Yes |  |
| `updates` | `list` | Yes |  |

### Operations

#### `update(reqdata, ctrl=None) -> BulkTikTokStatsUpdateEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.BulkTikTokStatsUpdate().update({
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BulkTikTokStatsUpdateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CarouselEntity

```python
carousel = client.Carousel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `str` | Yes |  |
| `agent_name` | `str` | Yes |  |
| `audit_created_at` | `Any` | No |  |
| `audit_snapshot_sha256` | `Any` | No |  |
| `caption` | `Any` | No |  |
| `comments` | `Any` | No |  |
| `fit_score` | `Any` | No |  |
| `format` | `str` | Yes |  |
| `formula` | `dict` | No |  |
| `formula_id` | `str` | No |  |
| `formula_name` | `Any` | No |  |
| `generation` | `dict` | No |  |
| `id` | `str` | No |  |
| `image_prompt` | `Any` | No |  |
| `likes` | `Any` | No |  |
| `main_prompt` | `Any` | No |  |
| `metrics_updated_at` | `Any` | No |  |
| `post_url` | `Any` | No |  |
| `profile_url` | `Any` | No |  |
| `qa` | `dict` | No |  |
| `qa_status` | `str` | Yes |  |
| `qa_verdict` | `Any` | No |  |
| `quality_score` | `Any` | No |  |
| `queue_id` | `str` | Yes |  |
| `relevance_score` | `Any` | No |  |
| `scheduled_at` | `str` | Yes |  |
| `slide_count` | `int` | Yes |  |
| `slides` | `list` | Yes |  |
| `source` | `dict` | No |  |
| `status` | `str` | Yes |  |
| `thumbnail_url` | `Any` | No |  |
| `title` | `str` | Yes |  |
| `video_id` | `str` | Yes |  |
| `views` | `Any` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> CarouselEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Carousel().create({
    "id": "example_id",  # str
    "agent_id": "example_agent_id",  # str
    "agent_name": "example_agent_name",  # str
    "format": "example_format",  # str
    "qa_status": "example_qa_status",  # str
    "queue_id": "example_queue_id",  # str
    "scheduled_at": "example_scheduled_at",  # str
    "slide_count": 1,  # int
    "slides": [],  # list
    "status": "example_status",  # str
    "title": "example_title",  # str
    "video_id": "example_video_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[CarouselEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Carousel().list()
for carousel in results:
    print(carousel.data_get())
```

#### `load(reqmatch, ctrl=None) -> CarouselEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Carousel().load({"id": "carousel_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CarouselEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CarouselAgentDetailEntity

```python
carousel_agent_detail = client.CarouselAgentDetail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `str` | Yes |  |
| `agent_name` | `str` | Yes |  |
| `connection_status` | `Any` | No |  |
| `followers` | `Any` | No |  |
| `following` | `Any` | No |  |
| `metrics_updated_at` | `Any` | No |  |
| `phone_admin_status` | `str` | Yes |  |
| `profile_likes` | `Any` | No |  |
| `profile_url` | `Any` | No |  |
| `warmup_days` | `Any` | No |  |
| `warmup_hold_until` | `Any` | No |  |
| `warmup_status` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> CarouselAgentDetailEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.CarouselAgentDetail().load({"agent_id": "agent_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CarouselAgentDetailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CarouselStatusEntity

```python
carousel_status = client.CarouselStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `caption` | `Any` | Yes |  |
| `error` | `Any` | No |  |
| `id` | `str` | No |  |
| `image_model` | `Any` | No |  |
| `image_provider` | `Any` | No |  |
| `image_task_id` | `str` | No |  |
| `image_url` | `Any` | Yes |  |
| `index` | `int` | Yes |  |
| `prompt` | `Any` | Yes |  |
| `status` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[CarouselStatusEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.CarouselStatus().list({"id": "example"})
for carousel_status in results:
    print(carousel_status.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CarouselStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ChatEntity

```python
chat = client.Chat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `idempotencyKey` | `str` | Yes |  |
| `message` | `str` | Yes |  |
| `sessionId` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> ChatEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Chat().create({
    "session_id": "example_session_id",  # str
    "idempotencyKey": "example_idempotencyKey",  # str
    "message": "example_message",  # str
    "sessionId": "example_sessionId",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChatEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ChatHistoryEntity

```python
chat_history = client.ChatHistory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `chatSubVariant` | `str` | Yes |  |
| `createdAt` | `str` | Yes |  |
| `messages` | `list` | Yes |  |
| `model` | `Any` | No |  |
| `onboardingDataId` | `str` | Yes |  |
| `routeRecommendation` | `Any` | No |  |
| `salesStage` | `str` | Yes |  |
| `selectedPlan` | `Any` | No |  |
| `session` | `dict` | Yes |  |
| `sessionId` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `updatedAt` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> ChatHistoryEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.ChatHistory().create({
    "onboardingDataId": "example_onboardingDataId",  # str
})
```

#### `load(reqmatch, ctrl=None) -> ChatHistoryEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.ChatHistory().load({"session_id": "session_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChatHistoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ChatSessionEntity

```python
chat_session = client.ChatSession()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `chatSubVariant` | `str` | Yes |  |
| `createdAt` | `str` | Yes |  |
| `model` | `Any` | No |  |
| `plan` | `Any` | No |  |
| `route` | `Any` | No |  |
| `routeRecommendation` | `Any` | No |  |
| `salesStage` | `str` | Yes |  |
| `selectedPlan` | `Any` | No |  |
| `sessionId` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `updatedAt` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> ChatSessionEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.ChatSession().create({
    "session_id": "example_session_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChatSessionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CommentEntity

```python
comment = client.Comment()
```

### Operations

#### `load(reqmatch, ctrl=None) -> CommentEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Comment().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CommentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CommentCampaignEntity

```python
comment_campaign = client.CommentCampaign()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_daily_limit` | `int` | No |  |
| `account_weekly_limit` | `int` | No |  |
| `action` | `str` | Yes |  |
| `active_days_per_week` | `int` | No |  |
| `agent_id` | `str` | Yes |  |
| `allowlist` | `list` | No |  |
| `analysis_daily_limit` | `int` | No |  |
| `analysis_model` | `str` | No |  |
| `analysis_reservation_usd` | `float` | No |  |
| `approved_markets` | `list` | No |  |
| `brand_forward_enabled` | `bool` | No |  |
| `briefs` | `dict` | No |  |
| `candidate_only` | `bool` | No |  |
| `claims` | `list` | No |  |
| `cohort_removal_threshold` | `int` | No |  |
| `daily_cost_ceiling_usd` | `float` | No |  |
| `delivery_mode` | `str` | No |  |
| `disclosure_mode` | `str` | No |  |
| `disclosure_template` | `str` | No |  |
| `draft_options_count` | `int` | No |  |
| `draft_review_reservation_usd` | `float` | No |  |
| `exceptional_daily_cap_approved` | `bool` | No |  |
| `execution_enabled` | `bool` | No |  |
| `experiment_styles` | `list` | No |  |
| `inventory_factor` | `float` | No |  |
| `keywords` | `list` | No |  |
| `max_duration_seconds` | `Any` | No |  |
| `metadata_pass_rate` | `float` | No |  |
| `min_interval_minutes` | `int` | No |  |
| `mode` | `str` | No |  |
| `monitored_creators` | `list` | No |  |
| `platform` | `str` | No |  |
| `platform_permission_evidence` | `str` | No |  |
| `policy_approved_by` | `str` | No |  |
| `policy_expires_at` | `Any` | No |  |
| `policy_version` | `str` | No |  |
| `product_daily_limit` | `int` | No |  |
| `qualification_rate` | `float` | No |  |
| `raw_daily_limit` | `int` | No |  |
| `raw_result_reservation_usd` | `float` | No |  |
| `reason` | `str` | Yes |  |
| `replies_enabled` | `bool` | No |  |
| `request_key` | `str` | Yes |  |
| `reviewer_model` | `str` | No |  |
| `scan_interval_hours` | `int` | No |  |
| `search_change_reason` | `str` | No |  |
| `search_effective_at` | `Any` | No |  |
| `shadow_sample_limit` | `int` | No |  |
| `spent_seconds` | `Any` | No |  |
| `task_ttl_hours` | `int` | No |  |
| `top_comment_analysis_enabled` | `bool` | No |  |
| `writer_model` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> CommentCampaignEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.CommentCampaign().create({
    "product_id": "example_product_id",  # str
    "action": "example_action",  # str
    "agent_id": "example_agent_id",  # str
    "reason": "example_reason",  # str
    "request_key": "example_request_key",  # str
})
```

#### `load(reqmatch, ctrl=None) -> CommentCampaignEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.CommentCampaign().load({"product_id": "product_id"})
```

#### `update(reqdata, ctrl=None) -> CommentCampaignEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.CommentCampaign().update({
    "product_id": "product_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CommentCampaignEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CompleteChatCheckoutEntity

```python
complete_chat_checkout = client.CompleteChatCheckout()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `Any` | No |  |
| `onboarding_data_id` | `str` | Yes |  |
| `product_id` | `str` | No |  |
| `ready` | `bool` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> CompleteChatCheckoutEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.CompleteChatCheckout().create({
    "onboarding_data_id": "example_onboarding_data_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CompleteChatCheckoutEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreateBlackoutSora2VideoEntity

```python
create_blackout_sora2_video = client.CreateBlackoutSora2Video()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `main_prompt` | `str` | Yes |  |
| `media_asset_id` | `str` | Yes |  |
| `product_id` | `str` | Yes |  |
| `requires_polling` | `bool` | No |  |
| `video` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> CreateBlackoutSora2VideoEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.CreateBlackoutSora2Video().create({
    "main_prompt": "example_main_prompt",  # str
    "media_asset_id": "example_media_asset_id",  # str
    "product_id": "example_product_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateBlackoutSora2VideoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreateCarouselEntity

```python
create_carousel = client.CreateCarousel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `copy_mode` | `Any` | No |  |
| `expected_owner_user_id` | `str` | No |  |
| `expected_product_id` | `str` | No |  |
| `expected_product_name` | `Any` | No |  |
| `image_model` | `str` | No |  |
| `mention_product` | `bool` | No |  |
| `message` | `str` | Yes |  |
| `num_slides` | `int` | No |  |
| `owner_user_id` | `str` | No |  |
| `product_id` | `str` | No | Product ID to use. |
| `product_name` | `Any` | No |  |
| `product_placement` | `str` | No |  |
| `request_id` | `str` | No |  |
| `script_style_custom` | `Any` | No |  |
| `script_style_id` | `str` | No |  |
| `selected_hook` | `Any` | No |  |
| `status` | `str` | Yes |  |
| `success` | `bool` | Yes |  |
| `template_id` | `str` | Yes |  |
| `video_id` | `str` | Yes |  |
| `visual_style_custom` | `Any` | No |  |
| `visual_style_id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> CreateCarouselEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.CreateCarousel().create({
    "template_id": "example_template_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateCarouselEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreateProductEntity

```python
create_product = client.CreateProduct()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `onboarding_data_id` | `str` | Yes | UUID of the OnboardingData record |
| `product_id` | `str` | Yes |  |
| `success` | `bool` | Yes |  |
| `videos_queued` | `int` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> CreateProductEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.CreateProduct().create({
    "onboarding_data_id": "example_onboarding_data_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateProductEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreateResetProductV6Entity

```python
create_reset_product_v6 = client.CreateResetProductV6()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agents_transferred` | `int` | Yes |  |
| `credits_deducted` | `int` | Yes |  |
| `onboarding_data_id` | `str` | Yes |  |
| `product_id` | `str` | Yes |  |
| `remaining_credits` | `int` | Yes |  |
| `success` | `bool` | Yes |  |
| `videos_queued` | `int` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> CreateResetProductV6Entity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.CreateResetProductV6().create({
    "onboarding_data_id": "example_onboarding_data_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateResetProductV6Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreateSora2VideoEntity

```python
create_sora2_video = client.CreateSora2Video()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `image_prompt` | `Any` | No |  |
| `main_prompt` | `str` | Yes |  |
| `model` | `str` | No |  |
| `requires_polling` | `bool` | No |  |
| `seconds` | `str` | No |  |
| `size` | `str` | No |  |
| `video` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> CreateSora2VideoEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.CreateSora2Video().create({
    "main_prompt": "example_main_prompt",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateSora2VideoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreateVariationEntity

```python
create_variation = client.CreateVariation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hook_duration` | `int` | Yes |  |
| `media_asset_id` | `str` | Yes |  |
| `message` | `str` | Yes |  |
| `product_id` | `str` | Yes |  |
| `prompt` | `str` | Yes |  |
| `task_id` | `str` | No |  |
| `video_id` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> CreateVariationEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.CreateVariation().create({
    "hook_duration": 1,  # int
    "media_asset_id": "example_media_asset_id",  # str
    "product_id": "example_product_id",  # str
    "prompt": "example_prompt",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateVariationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomerEntity

```python
customer = client.Customer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `Any` | No |  |
| `assigned_agents_count` | `int` | Yes |  |
| `email` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `is_migrated` | `bool` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[CustomerEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Customer().list()
for customer in results:
    print(customer.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomerHealthEntity

```python
customer_health = client.CustomerHealth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_agents` | `dict` | Yes |  |
| `available_dates` | `list` | Yes |  |
| `date` | `str` | Yes |  |
| `email` | `str` | Yes |  |
| `entries` | `list` | Yes |  |
| `id` | `str` | No |  |
| `performance_overview` | `dict` | Yes |  |
| `platform_coverage_summary` | `dict` | Yes |  |
| `user_id` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> CustomerHealthEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.CustomerHealth().load({"id": "customer_health_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerHealthEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomerHealthAllCustomersItemEntity

```python
customer_health_all_customers_item = client.CustomerHealthAllCustomersItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `Any` | No |  |
| `assigned_agents_count` | `int` | Yes |  |
| `daily_stats` | `list` | Yes |  |
| `email` | `str` | Yes |  |
| `is_migrated` | `bool` | No |  |
| `total_views` | `int` | Yes |  |
| `user_id` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[CustomerHealthAllCustomersItemEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.CustomerHealthAllCustomersItem().list()
for customer_health_all_customers_item in results:
    print(customer_health_all_customers_item.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerHealthAllCustomersItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomerHealthViewsSummaryEntity

```python
customer_health_views_summary = client.CustomerHealthViewsSummary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `average_views_per_result` | `int` | Yes |  |
| `date` | `str` | Yes |  |
| `end_date` | `Any` | No |  |
| `paid_users_count` | `int` | Yes |  |
| `posted_results` | `int` | Yes |  |
| `range` | `str` | Yes |  |
| `start_date` | `Any` | No |  |
| `top_users` | `list` | Yes |  |
| `total_views` | `int` | Yes |  |
| `trend` | `list` | Yes |  |
| `trend_granularity` | `str` | Yes |  |
| `user_email` | `Any` | No |  |
| `user_id` | `str` | No |  |
| `users_with_views` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[CustomerHealthViewsSummaryEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.CustomerHealthViewsSummary().list()
for customer_health_views_summary in results:
    print(customer_health_views_summary.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerHealthViewsSummaryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DailyEntity

```python
daily = client.Daily()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> DailyEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Daily().create({
    "id": "example_id",  # str
    "day": "example_day",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DailyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DailyStatusEntity

```python
daily_status = client.DailyStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> DailyStatusEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.DailyStatus().load({"id": "daily_status_id", "day": "day"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DailyStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DedicatedAgentsDashboardEntity

```python
dedicated_agents_dashboard = client.DedicatedAgentsDashboard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_connections` | `int` | Yes |  |
| `assigned_user_id` | `str` | No |  |
| `assigned_user_ids` | `list` | No |  |
| `bio` | `Any` | Yes |  |
| `id` | `str` | Yes |  |
| `instagram_url` | `Any` | No |  |
| `is_active` | `bool` | Yes |  |
| `last_admin_synced_at` | `Any` | No |  |
| `name` | `str` | Yes |  |
| `role` | `Any` | Yes |  |
| `tiktok_stats` | `Any` | No |  |
| `tiktok_url` | `Any` | No |  |
| `today_failed_entries` | `list` | No |  |
| `today_stats` | `dict` | Yes |  |
| `upload_post_platforms` | `Any` | No |  |
| `upload_post_profile` | `Any` | No |  |
| `yesterday_failed_entries` | `list` | No |  |
| `yesterday_stats` | `dict` | Yes |  |
| `youtube_url` | `Any` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[DedicatedAgentsDashboardEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.DedicatedAgentsDashboard().list()
for dedicated_agents_dashboard in results:
    print(dedicated_agents_dashboard.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DedicatedAgentsDashboardEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EnterpriseAgentEntity

```python
enterprise_agent = client.EnterpriseAgent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | Yes |  |
| `product_id` | `str` | Yes |  |
| `source_product_id` | `str` | Yes |  |
| `target_product_id` | `str` | Yes |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `count` | - | Yes |
| `product_id` | - | - |
| `source_product_id` | - | - |
| `target_product_id` | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> EnterpriseAgentEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.EnterpriseAgent().create({
    "product_id": "example_product_id",  # str
    "source_product_id": "example_source_product_id",  # str
    "target_product_id": "example_target_product_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> EnterpriseAgentEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.EnterpriseAgent().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnterpriseAgentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EnterpriseProductEntity

```python
enterprise_product = client.EnterpriseProduct()
```

### Operations

#### `load(reqmatch, ctrl=None) -> EnterpriseProductEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.EnterpriseProduct().load({"product_id": "product_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnterpriseProductEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ExactAvailabilityEntity

```python
exact_availability = client.ExactAvailability()
```

### Operations

#### `load(reqmatch, ctrl=None) -> ExactAvailabilityEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.ExactAvailability().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ExactAvailabilityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ExactFormulaEntity

```python
exact_formula = client.ExactFormula()
```

### Operations

#### `load(reqmatch, ctrl=None) -> ExactFormulaEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.ExactFormula().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ExactFormulaEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ExtractV2Entity

```python
extract_v2 = client.ExtractV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instagram_username` | `Any` | No |  |
| `message` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> ExtractV2Entity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.ExtractV2().create({
    "url": "example_url",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ExtractV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FailedPostEntity

```python
failed_post = client.FailedPost()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `str` | Yes |  |
| `agent_name` | `Any` | Yes |  |
| `agent_platforms` | `Any` | Yes |  |
| `error_message` | `Any` | Yes |  |
| `id` | `str` | Yes |  |
| `product_id` | `str` | Yes |  |
| `results` | `Any` | Yes |  |
| `scheduled_datetime` | `str` | Yes |  |
| `source_type` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `user_email` | `str` | Yes |  |
| `user_id` | `str` | Yes |  |
| `user_name` | `Any` | Yes |  |
| `video_id` | `str` | Yes |  |
| `video_url` | `Any` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[FailedPostEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.FailedPost().list()
for failed_post in results:
    print(failed_post.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FailedPostEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FileEntity

```python
file = client.File()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> FileEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.File().create({
    "file": "example_file",  # str
})
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GenerateBlackoutSora2PromptEntity

```python
generate_blackout_sora2_prompt = client.GenerateBlackoutSora2Prompt()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `media_asset_id` | `str` | Yes |  |
| `product_id` | `str` | Yes |  |
| `prompt` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> GenerateBlackoutSora2PromptEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.GenerateBlackoutSora2Prompt().create({
    "media_asset_id": "example_media_asset_id",  # str
    "product_id": "example_product_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GenerateBlackoutSora2PromptEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GeneratePomelliDemoEntity

```python
generate_pomelli_demo = client.GeneratePomelliDemo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_demo_count` | `int` | Yes |  |
| `max_demos` | `int` | No |  |
| `message` | `str` | Yes |  |
| `product_id` | `str` | Yes | UUID of the Product |
| `success` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> GeneratePomelliDemoEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.GeneratePomelliDemo().create({
    "product_id": "example_product_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GeneratePomelliDemoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GeneratePromptEntity

```python
generate_prompt = client.GeneratePrompt()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hook_duration` | `int` | Yes |  |
| `media_asset_id` | `str` | Yes |  |
| `media_asset_url` | `str` | Yes |  |
| `prompt` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> GeneratePromptEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.GeneratePrompt().create({
    "media_asset_id": "example_media_asset_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GeneratePromptEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GenerateSora2PromptEntity

```python
generate_sora2_prompt = client.GenerateSora2Prompt()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `prompt` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> GenerateSora2PromptEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.GenerateSora2Prompt().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GenerateSora2PromptEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## HealthrxEntity

```python
healthrx = client.Healthrx()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `str` | No |  |
| `action` | `str` | No |  |
| `agent_id` | `str` | Yes |  |
| `attempt` | `int` | Yes |  |
| `avatar_present` | `bool` | No |  |
| `benchmark_set` | `str` | Yes |  |
| `commercial` | `bool` | No |  |
| `commercial_license_evidence` | `str` | Yes |  |
| `content_id` | `str` | Yes |  |
| `dimensions` | `dict` | Yes |  |
| `duration_seconds` | `int` | No |  |
| `evidence` | `str` | Yes |  |
| `evidence_urls` | `list` | Yes |  |
| `external_key` | `str` | Yes |  |
| `format` | `str` | No |  |
| `includes_all_attempt_costs` | `bool` | No |  |
| `input_specification` | `dict` | Yes |  |
| `kind` | `str` | Yes |  |
| `level` | `int` | No |  |
| `measured_at` | `str` | Yes |  |
| `model_version` | `str` | Yes |  |
| `paid_campaign_id` | `str` | No |  |
| `parent_content_id` | `str` | No |  |
| `paused` | `bool` | Yes |  |
| `pillar` | `str` | Yes |  |
| `profile` | `dict` | Yes |  |
| `promotion_evidence` | `str` | No |  |
| `provider` | `str` | Yes |  |
| `provider_invoice_evidence` | `str` | Yes |  |
| `reason` | `str` | Yes |  |
| `reference_version` | `str` | Yes |  |
| `request_key` | `str` | Yes |  |
| `scope` | `str` | No |  |
| `test_variable` | `str` | Yes |  |
| `topic` | `str` | Yes |  |
| `total_cost_usd` | `float` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> HealthrxEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Healthrx().create({
    "product_id": "example_product_id",  # str
    "agent_id": "example_agent_id",  # str
    "attempt": 1,  # int
    "benchmark_set": "example_benchmark_set",  # str
    "commercial_license_evidence": "example_commercial_license_evidence",  # str
    "dimensions": {},  # dict
    "evidence": "example_evidence",  # str
    "evidence_urls": [],  # list
    "external_key": "example_external_key",  # str
    "input_specification": {},  # dict
    "kind": "example_kind",  # str
    "measured_at": "example_measured_at",  # str
    "model_version": "example_model_version",  # str
    "paused": True,  # bool
    "pillar": "example_pillar",  # str
    "profile": {},  # dict
    "provider": "example_provider",  # str
    "provider_invoice_evidence": "example_provider_invoice_evidence",  # str
    "reason": "example_reason",  # str
    "reference_version": "example_reference_version",  # str
    "request_key": "example_request_key",  # str
    "test_variable": "example_test_variable",  # str
    "topic": "example_topic",  # str
    "total_cost_usd": 1,  # float
})
```

#### `load(reqmatch, ctrl=None) -> HealthrxEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Healthrx().load({"product_id": "product_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HealthrxEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InitResetProductV6Entity

```python
init_reset_product_v6 = client.InitResetProductV6()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_schedule_disabled` | `bool` | Yes |  |
| `old_product_id` | `str` | Yes |  |
| `product_id` | `str` | No |  |
| `queue_entries_cleared` | `int` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> InitResetProductV6Entity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.InitResetProductV6().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InitResetProductV6Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IriEntity

```python
iri = client.Iri()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `correlationId` | `Any` | No |  |
| `idempotencyKey` | `str` | Yes |  |
| `productId` | `Any` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> IriEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Iri().create({
    "connector_id": "example_connector_id",  # str
    "idempotencyKey": "example_idempotencyKey",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IriEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IrisCapabilityEntity

```python
iris_capability = client.IrisCapability()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `capability` | `str` | Yes |  |
| `correlationId` | `str` | Yes |  |
| `errorCode` | `Any` | No |  |
| `externalProductId` | `Any` | No |  |
| `externalUserId` | `str` | Yes |  |
| `id` | `str` | No |  |
| `idempotencyKey` | `str` | Yes |  |
| `input` | `dict` | No |  |
| `membershipId` | `Any` | No |  |
| `message` | `Any` | No |  |
| `ok` | `bool` | Yes |  |
| `platformAccountId` | `Any` | No |  |
| `platformLinkId` | `Any` | No |  |
| `productScope` | `str` | Yes |  |
| `requestedBy` | `dict` | No |  |
| `result` | `dict` | No |  |
| `retryable` | `bool` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> IrisCapabilityEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.IrisCapability().create({
    "id": "example_id",  # str
    "capability": "example_capability",  # str
    "correlationId": "example_correlationId",  # str
    "externalUserId": "example_externalUserId",  # str
    "idempotencyKey": "example_idempotencyKey",  # str
    "productScope": "example_productScope",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IrisCapabilityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IrisChatEntity

```python
iris_chat = client.IrisChat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artifacts` | `list` | No |  |
| `correlationId` | `str` | Yes |  |
| `idempotencyKey` | `str` | Yes |  |
| `message` | `str` | Yes |  |
| `mode` | `str` | Yes |  |
| `ok` | `bool` | No |  |
| `pageContext` | `dict` | No |  |
| `productId` | `Any` | No |  |
| `runtimeStatus` | `str` | Yes |  |
| `sessionId` | `Any` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> IrisChatEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.IrisChat().create({
    "correlationId": "example_correlationId",  # str
    "idempotencyKey": "example_idempotencyKey",  # str
    "message": "example_message",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IrisChatEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IrisConnectorEntity

```python
iris_connector = client.IrisConnector()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectors` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[IrisConnectorEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.IrisConnector().list()
for iris_connector in results:
    print(iris_connector.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IrisConnectorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IrisStatusEntity

```python
iris_status = client.IrisStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectorsPreview` | `list` | No |  |
| `product` | `Any` | No |  |
| `status` | `dict` | Yes |  |
| `tasksPreview` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[IrisStatusEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.IrisStatus().list()
for iris_status in results:
    print(iris_status.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IrisStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IrisTaskEntity

```python
iris_task = client.IrisTask()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approvalRequired` | `bool` | No |  |
| `cadence` | `str` | No |  |
| `capability` | `Any` | No |  |
| `completed` | `list` | No |  |
| `description` | `str` | No |  |
| `discover` | `list` | No |  |
| `productId` | `Any` | No |  |
| `recurring` | `list` | No |  |
| `requiredConnectors` | `list` | No |  |
| `title` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> IrisTaskEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.IrisTask().create({
    "title": "example_title",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[IrisTaskEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.IrisTask().list()
for iris_task in results:
    print(iris_task.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IrisTaskEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IrisUsageEntity

```python
iris_usage = client.IrisUsage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `eventCount` | `int` | No |  |
| `events` | `list` | No |  |
| `membershipId` | `Any` | No |  |
| `productScope` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[IrisUsageEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.IrisUsage().list()
for iris_usage in results:
    print(iris_usage.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IrisUsageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LandingEntity

```python
landing = client.Landing()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> LandingEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Landing().create({
    "index": 1,  # int
    "file": "example_file",  # str
})
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LandingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LandingStatEntity

```python
landing_stat = client.LandingStat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `landing` | `dict` | Yes |  |
| `microhub` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> LandingStatEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.LandingStat().load({"slug": "slug"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LandingStatEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LandingStatusEntity

```python
landing_status = client.LandingStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errorMessage` | `Any` | No |  |
| `landingStatus` | `str` | Yes |  |
| `microhubStatus` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> LandingStatusEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.LandingStatus().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LandingStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LinkInBioEntity

```python
link_in_bio = client.LinkInBio()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `linkInBioType` | `str` | Yes |  |
| `redirectUrl` | `str` | Yes |  |
| `slug` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> LinkInBioEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.LinkInBio().load({"slug": "slug"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LinkInBioEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LinkInDmEntity

```python
link_in_dm = client.LinkInDm()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `linkInDmsType` | `str` | Yes |  |
| `redirectUrl` | `str` | Yes |  |
| `slug` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> LinkInDmEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.LinkInDm().load({"slug": "slug"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LinkInDmEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LinkInPostEntity

```python
link_in_post = client.LinkInPost()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `linkInPostsType` | `str` | Yes |  |
| `redirectUrl` | `str` | Yes |  |
| `showLinkInFirstComment` | `bool` | Yes |  |
| `slug` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> LinkInPostEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.LinkInPost().load({"slug": "slug"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LinkInPostEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LinkUserEntity

```python
link_user = client.LinkUser()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `already_linked` | `bool` | No |  |
| `onboarding_data_id` | `str` | Yes | UUID of the OnboardingData record |
| `success` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> LinkUserEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.LinkUser().create({
    "onboarding_data_id": "example_onboarding_data_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LinkUserEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MediaAssetEntity

```python
media_asset = client.MediaAsset()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `str` | Yes |  |
| `createdAt` | `str` | Yes |  |
| `description` | `str` | No |  |
| `file` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `media_assets` | `list` | Yes |  |
| `onboardingDataId` | `Any` | No |  |
| `onboarding_data_id` | `str` | Yes |  |
| `productId` | `Any` | No |  |
| `product_id` | `str` | No |  |
| `source` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `updatedAt` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `usedAt` | `Any` | No |  |
| `veo3VideoId` | `Any` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> MediaAssetEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.MediaAsset().create({
    "category": "example_category",  # str
    "createdAt": "example_createdAt",  # str
    "file": "example_file",  # str
    "id": "example_id",  # str
    "media_assets": [],  # list
    "onboarding_data_id": "example_onboarding_data_id",  # str
    "source": "example_source",  # str
    "type": "example_type",  # str
    "updatedAt": "example_updatedAt",  # str
    "url": "example_url",  # str
})
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

#### `load(reqmatch, ctrl=None) -> MediaAssetEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.MediaAsset().load({"id": "media_asset_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MediaAssetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MenEntity

```python
men = client.Men()
```

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[MenEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Men().list()
for men in results:
    print(men.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MicrodramaEntity

```python
microdrama = client.Microdrama()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `evidence` | `dict` | Yes |  |
| `expected_revision` | `int` | Yes |  |
| `idempotency_key` | `str` | Yes |  |
| `issues` | `list` | No |  |
| `reason` | `str` | Yes |  |
| `role` | `str` | Yes |  |
| `scores` | `dict` | Yes |  |
| `selected_premise_id` | `str` | No |  |
| `stage` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `subject_hash` | `str` | Yes |  |
| `title` | `str` | No |  |
| `verdict` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> MicrodramaEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Microdrama().create({
    "episode_id": "example_episode_id",  # str
    "evidence": {},  # dict
    "expected_revision": 1,  # int
    "idempotency_key": "example_idempotency_key",  # str
    "reason": "example_reason",  # str
    "role": "example_role",  # str
    "scores": {},  # dict
    "stage": "example_stage",  # str
    "status": "example_status",  # str
    "subject_hash": "example_subject_hash",  # str
    "verdict": "example_verdict",  # str
})
```

#### `load(reqmatch, ctrl=None) -> MicrodramaEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Microdrama().load({"episode_id": "episode_id"})
```

#### `update(reqdata, ctrl=None) -> MicrodramaEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.Microdrama().update({
    "episode_id": "episode_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MicrodramaEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MicrohubPublicEntity

```python
microhub_public = client.MicrohubPublic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bio` | `Any` | No |  |
| `ctaButtonText` | `Any` | No |  |
| `ctaDescription` | `Any` | No |  |
| `ctaLink` | `Any` | No |  |
| `ctaTitle` | `Any` | No |  |
| `headerImageUrl` | `Any` | No |  |
| `links` | `list` | No |  |
| `name` | `str` | No |  |
| `profileImageUrl` | `Any` | No |  |
| `slug` | `str` | Yes |  |
| `socialLinks` | `dict` | No |  |
| `testimonials` | `list` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> MicrohubPublicEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.MicrohubPublic().load({"slug": "slug"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MicrohubPublicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OnboardingStatusEntity

```python
onboarding_status = client.OnboardingStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `int` | No |  |
| `cover_image_url` | `Any` | No |  |
| `id` | `str` | Yes |  |
| `likes` | `int` | No |  |
| `platform` | `str` | Yes |  |
| `video_url` | `Any` | No |  |
| `views` | `int` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[OnboardingStatusEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.OnboardingStatus().list({"oid": "example"})
for onboarding_status in results:
    print(onboarding_status.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OnboardingStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OnboardingV6Entity

```python
onboarding_v6 = client.OnboardingV6()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> OnboardingV6Entity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.OnboardingV6().remove({"media_asset_id": "media_asset_id", "onboarding_data_id": "onboarding_data_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OnboardingV6Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PaidUserEntity

```python
paid_user = client.PaidUser()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agents_count` | `int` | Yes |  |
| `assigned_agents_count` | `int` | No |  |
| `auto_schedule_enabled` | `Any` | Yes |  |
| `credits` | `int` | Yes |  |
| `effective_agents_count` | `int` | Yes |  |
| `email` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `is_internal_user` | `bool` | No |  |
| `is_migrated_user` | `bool` | No |  |
| `membership` | `Any` | Yes |  |
| `scheduled_queue_count` | `int` | Yes |  |
| `subscription_details` | `Any` | No |  |
| `subscription_status` | `Any` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[PaidUserEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.PaidUser().list()
for paid_user in results:
    print(paid_user.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaidUserEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PexelEntity

```python
pexel = client.Pexel()
```

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[PexelEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Pexel().list()
for pexel in results:
    print(pexel.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PexelEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PhoneAdminAvailableAgentSourceEntity

```python
phone_admin_available_agent_source = client.PhoneAdminAvailableAgentSource()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_count` | `int` | Yes |  |
| `pc_name` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[PhoneAdminAvailableAgentSourceEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.PhoneAdminAvailableAgentSource().list()
for phone_admin_available_agent_source in results:
    print(phone_admin_available_agent_source.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PhoneAdminAvailableAgentSourceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProductEntity

```python
product = client.Product()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_count` | `int` | Yes |  |
| `agents` | `list` | Yes |  |
| `createdAt` | `Any` | No |  |
| `demoVideos` | `Any` | No |  |
| `description` | `str` | No |  |
| `favicon_url` | `Any` | No |  |
| `howItWorks` | `Any` | No |  |
| `how_it_works` | `Any` | No |  |
| `id` | `str` | Yes |  |
| `images` | `Any` | No |  |
| `initial_agents` | `int` | No |  |
| `instagramHandle` | `Any` | No |  |
| `instagram_handle` | `Any` | No |  |
| `isActive` | `Any` | No |  |
| `isApp` | `Any` | No |  |
| `is_active` | `bool` | Yes |  |
| `is_app` | `bool` | No |  |
| `language` | `Any` | No |  |
| `mediaAssets` | `Any` | No |  |
| `media_asset_ids` | `Any` | No |  |
| `media_assets` | `Any` | No |  |
| `name` | `str` | Yes |  |
| `otherInstructions` | `Any` | No |  |
| `other_instructions` | `Any` | No |  |
| `outroVideo` | `Any` | No |  |
| `pexelsVideos` | `Any` | No |  |
| `pricing` | `Any` | No |  |
| `pricingAndOffers` | `Any` | No |  |
| `pricing_and_offers` | `Any` | No |  |
| `product_demo_ids` | `list` | No |  |
| `product_details` | `dict` | Yes | Product details for enterprise product creation |
| `product_id` | `str` | Yes |  |
| `product_name` | `str` | Yes |  |
| `product_url` | `str` | Yes |  |
| `pronunciation` | `Any` | No |  |
| `regenerate_sora2` | `bool` | No |  |
| `repostSource` | `Any` | No |  |
| `repost_source` | `Any` | No |  |
| `screenshot_url` | `Any` | No |  |
| `social_post_ids` | `list` | No |  |
| `targetAudience` | `Any` | No |  |
| `target_audience` | `Any` | No |  |
| `templateProductId` | `Any` | No |  |
| `tiktokHandle` | `Any` | No |  |
| `tiktok_handle` | `Any` | No |  |
| `total_count` | `int` | Yes |  |
| `updatedAt` | `Any` | No |  |
| `url` | `str` | Yes |  |
| `userId` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> ProductEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Product().create({
    "product_details": {},  # dict
    "product_url": "example_product_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[ProductEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Product().list()
for product in results:
    print(product.data_get())
```

#### `load(reqmatch, ctrl=None) -> ProductEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Product().load({"id": "product_id"})
```

#### `remove(reqmatch, ctrl=None) -> ProductEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.Product().remove({"id": "product_id"})
```

#### `update(reqdata, ctrl=None) -> ProductEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.Product().update({
    "id": "product_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProductDashboardEntity

```python
product_dashboard = client.ProductDashboard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agents` | `list` | Yes |  |
| `date` | `str` | Yes |  |
| `pagination` | `dict` | Yes |  |
| `phone_admin_error` | `Any` | No |  |
| `products` | `list` | Yes |  |
| `selected_product` | `Any` | Yes |  |
| `summary` | `dict` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[ProductDashboardEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.ProductDashboard().list()
for product_dashboard in results:
    print(product_dashboard.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductDashboardEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProductDashboardViewEntity

```python
product_dashboard_view = client.ProductDashboardView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `str` | Yes |  |
| `views` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[ProductDashboardViewEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.ProductDashboardView().list({"product_id": "example"})
for product_dashboard_view in results:
    print(product_dashboard_view.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductDashboardViewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProductDemoEntity

```python
product_demo = client.ProductDemo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `description` | `str` | No |  |
| `id` | `str` | Yes |  |
| `source` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[ProductDemoEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.ProductDemo().list()
for product_demo in results:
    print(product_demo.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductDemoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProductLandingEntity

```python
product_landing = client.ProductLanding()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bio` | `Any` | No |  |
| `commentingOnMyPosts` | `bool` | Yes |  |
| `commentingOnOthersPosts` | `bool` | Yes |  |
| `ctaButtonText` | `Any` | No |  |
| `ctaDescription` | `Any` | No |  |
| `ctaLink` | `Any` | No |  |
| `ctaTitle` | `Any` | No |  |
| `dmCommenters` | `bool` | Yes |  |
| `dmInitialMessagePrompt` | `Any` | No |  |
| `dmOngoingResponsePrompt` | `Any` | No |  |
| `firstCommentTextBeforeLink` | `Any` | No |  |
| `headerImageUrl` | `Any` | No |  |
| `id` | `str` | Yes |  |
| `landingHtmlUrl` | `Any` | No |  |
| `landingLastGeneratedAt` | `Any` | No |  |
| `landingReferenceScreenshotUrl` | `Any` | No |  |
| `landingScreenshotUrl` | `Any` | No |  |
| `landingStatus` | `str` | Yes |  |
| `landingUrl` | `str` | Yes |  |
| `linkInBioType` | `str` | Yes |  |
| `linkInDmsType` | `str` | Yes |  |
| `linkInPostsType` | `str` | Yes |  |
| `links` | `Any` | No |  |
| `microhubBio` | `Any` | No |  |
| `microhubCtaButtonText` | `Any` | No |  |
| `microhubCtaDescription` | `Any` | No |  |
| `microhubCtaLink` | `Any` | No |  |
| `microhubCtaTitle` | `Any` | No |  |
| `microhubHeaderImageUrl` | `Any` | No |  |
| `microhubLinks` | `list` | No |  |
| `microhubName` | `Any` | No |  |
| `microhubProfileImageUrl` | `Any` | No |  |
| `microhubScreenshotUrl` | `Any` | No |  |
| `microhubSocialLinks` | `dict` | No |  |
| `microhubStatus` | `str` | Yes |  |
| `microhubTestimonials` | `list` | No |  |
| `microhubUrl` | `str` | Yes |  |
| `myPostsStylePrompt` | `Any` | No |  |
| `name` | `str` | No |  |
| `othersStylePrompt` | `Any` | No |  |
| `othersTargetMarketPrompt` | `Any` | No |  |
| `productLinkSelection` | `str` | Yes |  |
| `productUrl` | `Any` | No |  |
| `profileImageUrl` | `Any` | No |  |
| `shortLink` | `Any` | No |  |
| `shortLinkKeyword` | `Any` | No |  |
| `showLinkInFirstComment` | `bool` | Yes |  |
| `slug` | `str` | Yes |  |
| `socialLinks` | `Any` | No |  |
| `testimonials` | `Any` | No |  |

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

#### `list(reqmatch=None, ctrl=None) -> list[ProductLandingEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.ProductLanding().list()
for product_landing in results:
    print(product_landing.data_get())
```

#### `update(reqdata, ctrl=None) -> ProductLandingEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.ProductLanding().update({
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductLandingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PublicResumeStatusEntity

```python
public_resume_status = client.PublicResumeStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `can_resume_prelogin` | `bool` | No |  |
| `content_collection_ready` | `bool` | No |  |
| `current_step` | `Any` | No |  |
| `exists` | `bool` | Yes |  |
| `flow_variant` | `Any` | No |  |
| `repost_content_count` | `int` | No |  |
| `repost_source` | `Any` | No |  |
| `requires_repost_content` | `bool` | No |  |
| `skip_demo` | `bool` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> PublicResumeStatusEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.PublicResumeStatus().load({"oid": "oid"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PublicResumeStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReRollVideoEntity

```python
re_roll_video = client.ReRollVideo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `queue_id` | `str` | Yes |  |
| `requires_polling` | `bool` | No |  |
| `skip_credit_check` | `bool` | No |  |
| `video` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> ReRollVideoEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.ReRollVideo().create({
    "queue_id": "example_queue_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReRollVideoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReadRootGetEntity

```python
read_root_get = client.ReadRootGet()
```

### Operations

#### `load(reqmatch, ctrl=None) -> ReadRootGetEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.ReadRootGet().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReadRootGetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RecordDemoBookedEntity

```python
record_demo_booked = client.RecordDemoBooked()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calendlyEventUri` | `Any` | No |  |
| `calendlyInviteeUri` | `Any` | No |  |
| `message` | `dict` | Yes |  |
| `session` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> RecordDemoBookedEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.RecordDemoBooked().create({
    "session_id": "example_session_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RecordDemoBookedEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RefreshStatEntity

```python
refresh_stat = client.RefreshStat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date_from` | `Any` | No | Start date to refresh stats for (defaults to yesterday) |
| `date_to` | `Any` | No | End date to refresh stats for (defaults to date_from) |
| `entries_found` | `int` | Yes |  |
| `message` | `str` | Yes |  |
| `provider` | `str` | Yes | Scraping provider to use |
| `status` | `str` | Yes |  |
| `summary` | `Any` | No |  |

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

#### `create(reqdata, ctrl=None) -> RefreshStatEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.RefreshStat().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RefreshStatEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RemixerClipperEntity

```python
remixer_clipper = client.RemixerClipper()
```

### Operations

#### `create(reqdata, ctrl=None) -> RemixerClipperEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.RemixerClipper().create({
    "identifier": "example_identifier",  # str
})
```

#### `load(reqmatch, ctrl=None) -> RemixerClipperEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.RemixerClipper().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RemixerClipperEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ResetProductEntity

```python
reset_product = client.ResetProduct()
```

### Operations

#### `create(reqdata, ctrl=None) -> ResetProductEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.ResetProduct().create({
})
```

#### `load(reqmatch, ctrl=None) -> ResetProductEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.ResetProduct().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResetProductEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RetryWebsiteScrapeEntity

```python
retry_website_scrape = client.RetryWebsiteScrape()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `flow_variant` | `str` | No |  |
| `onboarding_data_id` | `str` | Yes | UUID of existing OnboardingData |
| `skip_demo` | `bool` | No |  |
| `status` | `str` | Yes |  |
| `success` | `bool` | Yes |  |
| `url` | `str` | Yes | New website URL to scrape |

### Operations

#### `create(reqdata, ctrl=None) -> RetryWebsiteScrapeEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.RetryWebsiteScrape().create({
    "onboarding_data_id": "example_onboarding_data_id",  # str
    "url": "example_url",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RetryWebsiteScrapeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SaveSurveyEntity

```python
save_survey = client.SaveSurvey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email_sent` | `bool` | No |  |
| `onboarding_data_id` | `str` | Yes | UUID of the OnboardingData record |
| `success` | `bool` | Yes |  |
| `survey` | `dict` | Yes | Survey response data from frontend. |

### Operations

#### `create(reqdata, ctrl=None) -> SaveSurveyEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.SaveSurvey().create({
    "onboarding_data_id": "example_onboarding_data_id",  # str
    "survey": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SaveSurveyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ScanSocialEntity

```python
scan_social = client.ScanSocial()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instagram_handle` | `Any` | No |  |
| `onboarding_data_id` | `str` | Yes |  |
| `product_id` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `success` | `bool` | Yes |  |
| `task_id` | `str` | No |  |
| `tiktok_handle` | `Any` | No |  |

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

#### `create(reqdata, ctrl=None) -> ScanSocialEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.ScanSocial().create({
    "onboarding_data_id": "example_onboarding_data_id",  # str
    "tiktok_handle": "example_tiktok_handle",  # Any
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScanSocialEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ScanSocialsPublicEntity

```python
scan_socials_public = client.ScanSocialsPublic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instagram_handle` | `Any` | No | Instagram username/handle to scrape |
| `message` | `Any` | No |  |
| `onboarding_data_id` | `str` | Yes | UUID of the OnboardingData record |
| `status` | `str` | Yes |  |
| `success` | `bool` | Yes |  |
| `tiktok_handle` | `Any` | No | TikTok username/handle to scrape |

### Operations

#### `create(reqdata, ctrl=None) -> ScanSocialsPublicEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.ScanSocialsPublic().create({
    "onboarding_data_id": "example_onboarding_data_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScanSocialsPublicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ScanSocialsStatusEntity

```python
scan_socials_status = client.ScanSocialsStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ads_count` | `int` | No |  |
| `onboarding_data_id` | `str` | Yes |  |
| `product_id` | `str` | No |  |
| `status` | `str` | Yes |  |
| `task_id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> ScanSocialsStatusEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.ScanSocialsStatus().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScanSocialsStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ScheduleV2Entity

```python
schedule_v2 = client.ScheduleV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent` | `Any` | No |  |
| `comment` | `Any` | No |  |
| `created_at` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `instagram_posted_by` | `Any` | No |  |
| `instagram_posted_url` | `Any` | No |  |
| `instagram_scraped_social_post_id` | `str` | No |  |
| `is_instagram_posted` | `bool` | No |  |
| `is_tiktok_posted` | `bool` | No |  |
| `is_youtube_posted` | `bool` | No |  |
| `reorders` | `list` | Yes |  |
| `results` | `Any` | No |  |
| `scheduled_datetime` | `str` | Yes |  |
| `source_type` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `tiktok_posted_by` | `Any` | No |  |
| `tiktok_posted_url` | `Any` | No |  |
| `tiktok_scraped_social_post_id` | `str` | No |  |
| `video` | `Any` | No |  |
| `video_id` | `str` | Yes |  |
| `youtube_posted_by` | `Any` | No |  |
| `youtube_posted_url` | `Any` | No |  |
| `youtube_scraped_social_post_id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> ScheduleV2Entity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.ScheduleV2().create({
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "reorders": [],  # list
    "scheduled_datetime": "example_scheduled_datetime",  # str
    "source_type": "example_source_type",  # str
    "status": "example_status",  # str
    "video_id": "example_video_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[ScheduleV2Entity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.ScheduleV2().list()
for schedule_v2 in results:
    print(schedule_v2.data_get())
```

#### `load(reqmatch, ctrl=None) -> ScheduleV2Entity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.ScheduleV2().load()
```

#### `remove(reqmatch, ctrl=None) -> ScheduleV2Entity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.ScheduleV2().remove({"queue_id": "queue_id"})
```

#### `update(reqdata, ctrl=None) -> ScheduleV2Entity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.ScheduleV2().update({
    "queue_id": "queue_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScheduleV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ScrapeEntity

```python
scrape = client.Scrape()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `old_product_id` | `str` | Yes |  |
| `onboarding_data_id` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `success` | `bool` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> ScrapeEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Scrape().create({
    "old_product_id": "example_old_product_id",  # str
    "url": "example_url",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScrapeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ScrapeWebsitePublicEntity

```python
scrape_website_public = client.ScrapeWebsitePublic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `flow_variant` | `str` | No |  |
| `onboarding_data_id` | `str` | Yes | UUID of created OnboardingData |
| `skip_demo` | `bool` | No | True for self-serve users (skip demo booking) |
| `status` | `str` | Yes |  |
| `success` | `bool` | Yes |  |
| `url` | `str` | Yes | Website URL to scrape |

### Operations

#### `create(reqdata, ctrl=None) -> ScrapeWebsitePublicEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.ScrapeWebsitePublic().create({
    "url": "example_url",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScrapeWebsitePublicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ScrapedDataEntity

```python
scraped_data = client.ScrapedData()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | Yes |  |
| `homepageVideoUrl` | `Any` | No |  |
| `howItWorks` | `str` | Yes |  |
| `imageUrls` | `list` | Yes |  |
| `instagram_username` | `Any` | No |  |
| `mediaAssets` | `list` | No |  |
| `name` | `str` | Yes |  |
| `pricingAndOffers` | `str` | Yes |  |
| `targetAudience` | `str` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> ScrapedDataEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.ScrapedData().create({
    "url": "example_url",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScrapedDataEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ScrapingStatusEntity

```python
scraping_status = client.ScrapingStatus()
```

### Operations

#### `load(reqmatch, ctrl=None) -> ScrapingStatusEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.ScrapingStatus().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScrapingStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SelfServeActivateEntity

```python
self_serve_activate = client.SelfServeActivate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `onboarding_data_id` | `str` | Yes | UUID of the OnboardingData record |
| `redirect_to_stripe` | `bool` | No |  |
| `stripe_checkout_url` | `Any` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> SelfServeActivateEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.SelfServeActivate().create({
    "onboarding_data_id": "example_onboarding_data_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SelfServeActivateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SeoEntity

```python
seo = client.Seo()
```

### Operations

#### `load(reqmatch, ctrl=None) -> SeoEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Seo().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SeoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SeoAiMentionEntity

```python
seo_ai_mention = client.SeoAiMention()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bucket` | `str` | Yes |  |
| `domain_type` | `str` | Yes |  |
| `dominant_domain` | `str` | Yes |  |
| `engine` | `str` | Yes |  |
| `evidence` | `dict` | Yes |  |
| `geo` | `str` | Yes |  |
| `language` | `str` | Yes |  |
| `primary_url` | `str` | Yes |  |
| `prompt_text` | `str` | Yes |  |
| `run_week` | `str` | Yes |  |
| `secondary_urls` | `list` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[SeoAiMentionEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.SeoAiMention().list()
for seo_ai_mention in results:
    print(seo_ai_mention.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SeoAiMentionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SeoBacklinkEntity

```python
seo_backlink = client.SeoBacklink()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anchor_text` | `str` | Yes |  |
| `first_seen` | `str` | Yes |  |
| `referring_domain` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `target_page` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[SeoBacklinkEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.SeoBacklink().list()
for seo_backlink in results:
    print(seo_backlink.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SeoBacklinkEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SeoKeywordEntity

```python
seo_keyword = client.SeoKeyword()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blog_page` | `str` | Yes |  |
| `current_position` | `float` | Yes |  |
| `keyword` | `str` | Yes |  |
| `keyword_group` | `str` | Yes |  |
| `position_change` | `float` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[SeoKeywordEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.SeoKeyword().list()
for seo_keyword in results:
    print(seo_keyword.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SeoKeywordEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SeoOverviewEntity

```python
seo_overview = client.SeoOverview()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clicks` | `float` | Yes |  |
| `ctr` | `float` | Yes |  |
| `date` | `str` | Yes |  |
| `impressions` | `float` | Yes |  |
| `position` | `float` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[SeoOverviewEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.SeoOverview().list()
for seo_overview in results:
    print(seo_overview.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SeoOverviewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SeoTrafficEntity

```python
seo_traffic = client.SeoTraffic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_date` | `str` | Yes |  |
| `series` | `list` | Yes |  |
| `site_url` | `str` | Yes |  |
| `start_date` | `str` | Yes |  |
| `top_countries` | `list` | Yes |  |
| `top_pages` | `list` | Yes |  |
| `top_queries` | `list` | Yes |  |
| `totals` | `dict` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[SeoTrafficEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.SeoTraffic().list()
for seo_traffic in results:
    print(seo_traffic.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SeoTrafficEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ShareAccessLinkEntity

```python
share_access_link = client.ShareAccessLink()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `share_token` | `str` | Yes |  |
| `share_url` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> ShareAccessLinkEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.ShareAccessLink().create({
    "share_token": "example_share_token",  # str
    "share_url": "example_share_url",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ShareAccessLinkEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SiteEntity

```python
site = client.Site()
```

### Operations

#### `load(reqmatch, ctrl=None) -> SiteEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Site().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SiteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SlideEntity

```python
slide = client.Slide()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `caption` | `Any` | No |  |
| `id` | `str` | No |  |
| `prompt` | `Any` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> SlideEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Slide().create({
    "carousel_id": "example_carousel_id",  # str
    "slide_index": 1,  # int
})
```

#### `update(reqdata, ctrl=None) -> SlideEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.Slide().update({
    "carousel_id": "carousel_id",
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SlideEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SlugValidationEntity

```python
slug_validation = client.SlugValidation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `reason` | `Any` | No |  |
| `valid` | `bool` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> SlugValidationEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.SlugValidation().load({"slug": "slug"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SlugValidationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SocialEntity

```python
social = client.Social()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `str` | Yes |  |
| `code_verifier` | `str` | Yes |  |
| `createdAt` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `platform` | `str` | Yes |  |
| `platformUserId` | `str` | Yes |  |
| `updatedAt` | `Any` | No |  |
| `userId` | `str` | Yes |  |
| `username` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> SocialEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Social().create({
    "code": "example_code",  # str
    "code_verifier": "example_code_verifier",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[SocialEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Social().list()
for social in results:
    print(social.data_get())
```

#### `load(reqmatch, ctrl=None) -> SocialEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Social().load()
```

#### `remove(reqmatch, ctrl=None) -> SocialEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.Social().remove({"platform": "platform"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SocialEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SocialScanPreviewEntity

```python
social_scan_preview = client.SocialScanPreview()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instagram_handle` | `Any` | No | Instagram username/handle to scrape |
| `posts` | `list` | Yes |  |
| `success` | `bool` | Yes |  |
| `tiktok_handle` | `Any` | No | TikTok username/handle to scrape |

### Operations

#### `create(reqdata, ctrl=None) -> SocialScanPreviewEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.SocialScanPreview().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SocialScanPreviewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SocialScanProcessEntity

```python
social_scan_process = client.SocialScanProcess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `posts` | `list` | Yes |  |
| `product_id` | `str` | Yes |  |
| `success` | `bool` | Yes |  |
| `task_id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> SocialScanProcessEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.SocialScanProcess().create({
    "posts": [],  # list
    "product_id": "example_product_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SocialScanProcessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SocialScanSaveEntity

```python
social_scan_save = client.SocialScanSave()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `media_asset_ids` | `list` | Yes |  |
| `posts` | `list` | Yes |  |
| `product_id` | `str` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> SocialScanSaveEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.SocialScanSave().create({
    "posts": [],  # list
    "product_id": "example_product_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SocialScanSaveEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Sora2AvatarEntity

```python
sora2_avatar = client.Sora2Avatar()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_frame_url` | `Any` | No |  |
| `created_at` | `str` | Yes |  |
| `current_step` | `int` | No |  |
| `headshot_url` | `Any` | No |  |
| `id` | `str` | Yes |  |
| `logs` | `dict` | No |  |
| `prompt_key` | `str` | Yes |  |
| `run_output_dir` | `Any` | No |  |
| `selected_age_bucket` | `str` | Yes |  |
| `selected_gender` | `str` | Yes |  |
| `selected_prompt` | `Any` | No |  |
| `selected_race` | `str` | Yes |  |
| `sora2_cameo_handle` | `Any` | No |  |
| `sora2_cameo_id` | `str` | No |  |
| `sora2_cameo_link` | `Any` | No |  |
| `sora2_display_name` | `Any` | No |  |
| `sora2_task_id` | `str` | No |  |
| `sora2_video_url` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> Sora2AvatarEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Sora2Avatar().create({
    "prompt_key": "example_prompt_key",  # str
    "selected_age_bucket": "example_selected_age_bucket",  # str
    "selected_gender": "example_selected_gender",  # str
    "selected_race": "example_selected_race",  # str
    "sora2_video_url": "example_sora2_video_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[Sora2AvatarEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Sora2Avatar().list()
for sora2_avatar in results:
    print(sora2_avatar.data_get())
```

#### `load(reqmatch, ctrl=None) -> Sora2AvatarEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Sora2Avatar().load({"id": "sora2_avatar_id"})
```

#### `update(reqdata, ctrl=None) -> Sora2AvatarEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.Sora2Avatar().update({
    "id": "sora2_avatar_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `Sora2AvatarEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Sora2AvatarAssetUploadEntity

```python
sora2_avatar_asset_upload = client.Sora2AvatarAssetUpload()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_id` | `str` | No |  |
| `file` | `str` | Yes |  |
| `run_output_dir` | `Any` | No |  |
| `s3_key` | `str` | Yes |  |
| `upload_type` | `str` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> Sora2AvatarAssetUploadEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Sora2AvatarAssetUpload().create({
    "file": "example_file",  # str
    "s3_key": "example_s3_key",  # str
    "upload_type": "example_upload_type",  # str
    "url": "example_url",  # str
})
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `Sora2AvatarAssetUploadEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Sora2AvatarStatEntity

```python
sora2_avatar_stat = client.Sora2AvatarStat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `by_age_bucket` | `dict` | Yes |  |
| `by_gender` | `dict` | Yes |  |
| `by_prompt_key` | `dict` | Yes |  |
| `by_race` | `dict` | Yes |  |
| `completed_avatars` | `int` | Yes |  |
| `completion_rate` | `float` | Yes |  |
| `total_avatars` | `int` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> Sora2AvatarStatEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Sora2AvatarStat().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `Sora2AvatarStatEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StatEntity

```python
stat = client.Stat()
```

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[StatEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Stat().list()
for stat in results:
    print(stat.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StatsRefreshBackfillEntity

```python
stats_refresh_backfill = client.StatsRefreshBackfill()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `task_id` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> StatsRefreshBackfillEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.StatsRefreshBackfill().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatsRefreshBackfillEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StatsRefreshIssueEntity

```python
stats_refresh_issue = client.StatsRefreshIssue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aged_over_24h` | `bool` | Yes |  |
| `agent_id` | `str` | No |  |
| `agent_name_snapshot` | `Any` | No |  |
| `first_detected_at` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `last_detected_at` | `str` | Yes |  |
| `last_refresh_completed_at` | `Any` | No |  |
| `last_seen_run_id` | `str` | No |  |
| `latest_error_message` | `Any` | No |  |
| `next_retry_at` | `Any` | No |  |
| `platform` | `str` | Yes |  |
| `post_method` | `Any` | No |  |
| `post_url` | `Any` | No |  |
| `posted_date_et` | `str` | Yes |  |
| `product_id` | `str` | No |  |
| `product_name_snapshot` | `Any` | No |  |
| `reason_code` | `str` | Yes |  |
| `resolved_at` | `Any` | No |  |
| `retry_count` | `int` | Yes |  |
| `schedule_queue_id` | `str` | No |  |
| `scheduled_datetime_utc` | `str` | Yes |  |
| `stale_after_sla` | `bool` | Yes |  |
| `status` | `str` | Yes |  |
| `user_email_snapshot` | `str` | Yes |  |
| `user_id` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[StatsRefreshIssueEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.StatsRefreshIssue().list()
for stats_refresh_issue in results:
    print(stats_refresh_issue.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatsRefreshIssueEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StatsRefreshOverviewEntity

```python
stats_refresh_overview = client.StatsRefreshOverview()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_run` | `Any` | No |  |
| `aged_over_24h` | `int` | Yes |  |
| `backlog_preview` | `list` | Yes |  |
| `coverage_percent` | `float` | Yes |  |
| `customer_counts` | `dict` | Yes |  |
| `date` | `str` | Yes |  |
| `generated_at` | `str` | Yes |  |
| `method_counts` | `dict` | Yes |  |
| `platform_counts` | `dict` | Yes |  |
| `platform_units_resolved` | `int` | Yes |  |
| `platform_units_total` | `int` | Yes |  |
| `platform_units_unresolved` | `int` | Yes |  |
| `posted_entries` | `int` | Yes |  |
| `reason_counts` | `dict` | Yes |  |
| `sla_deadline_et` | `str` | Yes |  |
| `stale_after_sla` | `int` | Yes |  |
| `top_affected_customers` | `list` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[StatsRefreshOverviewEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.StatsRefreshOverview().list()
for stats_refresh_overview in results:
    print(stats_refresh_overview.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatsRefreshOverviewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StatsRefreshRunSummaryEntity

```python
stats_refresh_run_summary = client.StatsRefreshRunSummary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `celery_task_id` | `str` | No |  |
| `completed_at` | `Any` | No |  |
| `entries_failed` | `int` | Yes |  |
| `entries_skipped` | `int` | Yes |  |
| `entries_total` | `int` | Yes |  |
| `entries_updated` | `int` | Yes |  |
| `error_summary_json` | `Any` | No |  |
| `id` | `str` | Yes |  |
| `issues_opened` | `int` | Yes |  |
| `issues_resolved` | `int` | Yes |  |
| `platform_units_resolved` | `int` | Yes |  |
| `platform_units_total` | `int` | Yes |  |
| `platform_units_unresolved` | `int` | Yes |  |
| `platform_updates_via_profile` | `int` | Yes |  |
| `platform_updates_via_url` | `int` | Yes |  |
| `provider` | `Any` | No |  |
| `refresh_trigger` | `Any` | No |  |
| `requested_by_email` | `Any` | No |  |
| `run_type` | `str` | Yes |  |
| `started_at` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `target_date_et` | `Any` | No |  |
| `users_count` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[StatsRefreshRunSummaryEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.StatsRefreshRunSummary().list()
for stats_refresh_run_summary in results:
    print(stats_refresh_run_summary.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatsRefreshRunSummaryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StatsRefreshTaskTriggerEntity

```python
stats_refresh_task_trigger = client.StatsRefreshTaskTrigger()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `target_date` | `str` | Yes |  |
| `task_id` | `str` | Yes |  |
| `users_count` | `int` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> StatsRefreshTaskTriggerEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.StatsRefreshTaskTrigger().create({
    "message": "example_message",  # str
    "status": "example_status",  # str
    "target_date": "example_target_date",  # str
    "task_id": "example_task_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatsRefreshTaskTriggerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StripeEntity

```python
stripe = client.Stripe()
```

### Operations

#### `create(reqdata, ctrl=None) -> StripeEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StripeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StyleEntity

```python
style = client.Style()
```

### Operations

#### `load(reqmatch, ctrl=None) -> StyleEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Style().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StyleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TemplateEntity

```python
template = client.Template()
```

### Operations

#### `load(reqmatch, ctrl=None) -> TemplateEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Template().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TemplateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TikTokCreatorInfoEntity

```python
tik_tok_creator_info = client.TikTokCreatorInfo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commentDisabled` | `bool` | No |  |
| `creatorAvatarUrl` | `Any` | No |  |
| `creatorNickname` | `Any` | No |  |
| `creatorUsername` | `Any` | No |  |
| `duetDisabled` | `bool` | No |  |
| `maxVideoPostDurationSec` | `int` | No |  |
| `privacyLevelOptions` | `list` | No |  |
| `stitchDisabled` | `bool` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[TikTokCreatorInfoEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.TikTokCreatorInfo().list()
for tik_tok_creator_info in results:
    print(tik_tok_creator_info.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TikTokCreatorInfoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TopPostEntity

```python
top_post = client.TopPost()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `int` | Yes |  |
| `id` | `str` | Yes |  |
| `likes` | `int` | Yes |  |
| `platforms` | `list` | Yes |  |
| `scheduled_datetime` | `str` | Yes |  |
| `user_email` | `str` | Yes |  |
| `user_id` | `str` | Yes |  |
| `views` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[TopPostEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.TopPost().list({"date": "example"})
for top_post in results:
    print(top_post.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TopPostEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UploadPostAgentEntity

```python
upload_post_agent = client.UploadPostAgent()
```

### Operations

#### `create(reqdata, ctrl=None) -> UploadPostAgentEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.UploadPostAgent().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UploadPostAgentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserEntity

```python
user = client.User()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountType` | `Any` | No |  |
| `activatedByAdminAt` | `Any` | No |  |
| `activatedByAdminId` | `Any` | No |  |
| `agents` | `list` | Yes |  |
| `agentsCount` | `Any` | No |  |
| `attribution` | `Any` | No |  |
| `avatarImageUrl` | `Any` | No |  |
| `avatarVoiceUrl` | `Any` | No |  |
| `createdAt` | `str` | Yes |  |
| `credits` | `int` | No |  |
| `email` | `str` | Yes |  |
| `googleId` | `Any` | No |  |
| `hasSeenScheduleWelcome` | `bool` | No |  |
| `id` | `str` | Yes |  |
| `industry` | `Any` | No |  |
| `instagramId` | `Any` | No |  |
| `isActivatedByAdmin` | `bool` | No |  |
| `isAdmin` | `bool` | No |  |
| `isInternalUser` | `Any` | No |  |
| `isMigrated` | `Any` | No |  |
| `isResettingProduct` | `Any` | No |  |
| `membership` | `Any` | No |  |
| `name` | `str` | Yes |  |
| `partnerDirectLoginDisabled` | `bool` | No |  |
| `partnerExternalUserId` | `Any` | No |  |
| `partnerPolicyCode` | `Any` | No |  |
| `partnerSource` | `Any` | No |  |
| `picture` | `Any` | No |  |
| `stripeCustomerId` | `Any` | No |  |
| `stripeSubscriptionId` | `Any` | No |  |
| `subscriptionCurrentPeriodEnd` | `Any` | No |  |
| `subscriptionStatus` | `Any` | No |  |
| `totalCount` | `int` | Yes |  |
| `updatedAt` | `str` | Yes |  |
| `userId` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> UserEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.User().load({"id": "user_id"})
```

#### `update(reqdata, ctrl=None) -> UserEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserAgentEntity

```python
user_agent = client.UserAgent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent` | `dict` | Yes |  |
| `assigned_at` | `str` | Yes |  |
| `assignment_id` | `str` | Yes |  |
| `expires_at` | `Any` | No |  |
| `id` | `str` | No |  |
| `status` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> UserAgentEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.UserAgent().create({
    "id": "example_id",  # str
    "agent": {},  # dict
    "assigned_at": "example_assigned_at",  # str
    "assignment_id": "example_assignment_id",  # str
    "status": "example_status",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[UserAgentEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.UserAgent().list({"id": "example"})
for user_agent in results:
    print(user_agent.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserAgentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserHealthDetailEntity

```python
user_health_detail = client.UserHealthDetail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `Any` | Yes |  |
| `activated` | `bool` | Yes |  |
| `activated_by_admin_at` | `Any` | No |  |
| `activated_by_admin_id` | `str` | No |  |
| `admin_notes` | `Any` | No |  |
| `agents_count` | `int` | No |  |
| `assigned_agents` | `list` | Yes |  |
| `assigned_agents_count` | `int` | Yes |  |
| `assigned_agents_preview_limit` | `int` | No |  |
| `assigned_agents_truncated` | `bool` | No |  |
| `auto_schedule_enabled` | `bool` | Yes |  |
| `comments_expected_per_day` | `int` | No |  |
| `comments_fix_block_reason` | `Any` | No |  |
| `comments_fix_ready` | `bool` | No |  |
| `comments_today_failed` | `int` | No |  |
| `comments_today_posted` | `int` | No |  |
| `comments_today_scheduled` | `int` | No |  |
| `comments_yesterday_failed` | `int` | No |  |
| `comments_yesterday_posted` | `int` | No |  |
| `comments_yesterday_total` | `int` | No |  |
| `created_at` | `str` | Yes |  |
| `credits` | `int` | Yes |  |
| `effective_posted_video_reuse_percent` | `int` | Yes |  |
| `email` | `str` | Yes |  |
| `expected_agents_count` | `int` | Yes |  |
| `id` | `str` | Yes |  |
| `is_activated_by_admin` | `bool` | Yes |  |
| `is_admin` | `bool` | Yes |  |
| `is_bookmarked` | `bool` | No |  |
| `is_internal_user` | `bool` | Yes |  |
| `is_migrated` | `bool` | Yes |  |
| `landing_slug` | `Any` | No |  |
| `landing_status` | `Any` | No |  |
| `landing_url` | `Any` | No |  |
| `membership` | `Any` | Yes |  |
| `microhub_status` | `Any` | No |  |
| `microhub_url` | `Any` | No |  |
| `name` | `str` | Yes |  |
| `onboarding_flow` | `str` | Yes |  |
| `posted_video_reuse_percent` | `Any` | No |  |
| `product_id` | `str` | Yes |  |
| `product_name` | `Any` | Yes |  |
| `product_url` | `Any` | Yes |  |
| `subscription_status` | `Any` | Yes |  |
| `survey_data` | `Any` | No |  |
| `today_failed` | `int` | Yes |  |
| `today_posted` | `int` | Yes |  |
| `today_scheduled` | `int` | Yes |  |
| `tomorrow_capacity` | `int` | Yes |  |
| `tomorrow_scheduled` | `int` | Yes |  |
| `videos_completed` | `int` | Yes |  |
| `videos_failed` | `int` | Yes |  |
| `videos_pending` | `int` | Yes |  |
| `videos_stale` | `int` | Yes |  |
| `videos_total` | `int` | Yes |  |
| `yesterday_failed` | `int` | Yes |  |
| `yesterday_failed_entries` | `list` | Yes |  |
| `yesterday_posted` | `int` | Yes |  |
| `yesterday_total` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[UserHealthDetailEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.UserHealthDetail().list({"id": "example"})
for user_health_detail in results:
    print(user_health_detail.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserHealthDetailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserWithAvatarSubmissionEntity

```python
user_with_avatar_submission = client.UserWithAvatarSubmission()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_image_url` | `str` | Yes |  |
| `avatar_voice_url` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `email` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `name` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[UserWithAvatarSubmissionEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.UserWithAvatarSubmission().list()
for user_with_avatar_submission in results:
    print(user_with_avatar_submission.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserWithAvatarSubmissionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UsersHealthEntity

```python
users_health = client.UsersHealth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `Any` | Yes |  |
| `admin_notes` | `Any` | No |  |
| `agents_count` | `int` | Yes |  |
| `agents_health` | `str` | Yes |  |
| `agents_issue` | `Any` | Yes |  |
| `assigned_agents_count` | `int` | Yes |  |
| `auto_schedule_enabled` | `bool` | Yes |  |
| `auto_schedule_health` | `str` | Yes |  |
| `auto_schedule_issue` | `Any` | Yes |  |
| `auto_schedule_today_health` | `str` | Yes |  |
| `auto_schedule_today_issue` | `Any` | Yes |  |
| `created_at` | `str` | Yes |  |
| `email` | `str` | Yes |  |
| `expected_agents_count` | `int` | Yes |  |
| `id` | `str` | Yes |  |
| `is_bookmarked` | `bool` | No |  |
| `is_internal_user` | `bool` | Yes |  |
| `is_migrated` | `bool` | Yes |  |
| `membership` | `Any` | Yes |  |
| `name` | `str` | Yes |  |
| `posts_health` | `str` | Yes |  |
| `posts_issue` | `Any` | Yes |  |
| `posts_today_health` | `str` | Yes |  |
| `posts_today_issue` | `Any` | Yes |  |
| `subscription_status` | `Any` | Yes |  |
| `today_expected_count` | `int` | Yes |  |
| `today_failed_count` | `int` | Yes |  |
| `today_scheduled_count` | `int` | Yes |  |
| `today_total_count` | `int` | Yes |  |
| `tomorrow_expected_count` | `int` | Yes |  |
| `tomorrow_scheduled_count` | `int` | Yes |  |
| `yesterday_failed_count` | `int` | Yes |  |
| `yesterday_total_count` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[UsersHealthEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.UsersHealth().list()
for users_health in results:
    print(users_health.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UsersHealthEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## VideoEntity

```python
video = client.Video()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `str` | No |  |
| `bookmarked` | `Any` | No |  |
| `captions` | `Any` | No |  |
| `carousel_data` | `Any` | No |  |
| `created_at` | `str` | Yes |  |
| `duration` | `float` | No |  |
| `generation_status` | `Any` | No |  |
| `id` | `str` | Yes |  |
| `image_prompt` | `Any` | No |  |
| `is_onboarding` | `bool` | No |  |
| `is_template` | `bool` | No |  |
| `main_avatar` | `Any` | No |  |
| `main_prompt` | `Any` | No |  |
| `media_asset_id` | `str` | No |  |
| `product_id` | `str` | No |  |
| `reel_id` | `str` | No |  |
| `thumbnail_url` | `Any` | No |  |
| `title` | `str` | Yes |  |
| `type` | `Any` | No |  |
| `updated_at` | `Any` | No |  |
| `url` | `str` | Yes |  |
| `user_id` | `str` | No |  |
| `video_id` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> VideoEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Video().create({
    "captions": "example_captions",  # Any
    "title": "example_title",  # str
    "url": "example_url",  # str
    "video_id": "example_video_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> VideoEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Video().load({"id": "video_id"})
```

#### `remove(reqmatch, ctrl=None) -> VideoEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.Video().remove({"id": "video_id"})
```

#### `update(reqdata, ctrl=None) -> VideoEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.Video().update({
    "id": "video_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VideoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## VideoRemixerWorkerEntity

```python
video_remixer_worker = client.VideoRemixerWorker()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `captions_ass` | `str` | No |  |
| `captions_vtt` | `str` | No |  |
| `cost_usd` | `float` | No |  |
| `error` | `str` | Yes |  |
| `file` | `str` | Yes |  |
| `kinds` | `list` | No |  |
| `lease_token` | `str` | Yes |  |
| `limit` | `int` | No |  |
| `manifest` | `str` | Yes |  |
| `model` | `str` | Yes |  |
| `processing_seconds` | `float` | No |  |
| `prompt_version` | `str` | Yes |  |
| `result` | `dict` | No |  |
| `thumbnail` | `str` | Yes |  |
| `tier` | `str` | No |  |
| `worker_id` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> VideoRemixerWorkerEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.VideoRemixerWorker().create({
    "error": "example_error",  # str
    "file": "example_file",  # str
    "lease_token": "example_lease_token",  # str
    "manifest": "example_manifest",  # str
    "model": "example_model",  # str
    "prompt_version": "example_prompt_version",  # str
    "thumbnail": "example_thumbnail",  # str
    "worker_id": "example_worker_id",  # str
})
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VideoRemixerWorkerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WatchdogRecoveryEntity

```python
watchdog_recovery = client.WatchdogRecovery()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `item_id` | `str` | Yes |  |
| `passed` | `bool` | Yes |  |
| `table` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> WatchdogRecoveryEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.WatchdogRecovery().create({
    "item_id": "example_item_id",  # str
    "passed": True,  # bool
    "table": "example_table",  # str
})
```

#### `load(reqmatch, ctrl=None) -> WatchdogRecoveryEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.WatchdogRecovery().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WatchdogRecoveryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WinningAdEntity

```python
winning_ad = client.WinningAd()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `description` | `str` | No |  |
| `id` | `str` | Yes |  |
| `source` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[WinningAdEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.WinningAd().list()
for winning_ad in results:
    print(winning_ad.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WinningAdEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## XAdaptationEntity

```python
x_adaptation = client.XAdaptation()
```

### Operations

#### `load(reqmatch, ctrl=None) -> XAdaptationEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.XAdaptation().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `XAdaptationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZerohumanAdminAccountEntity

```python
zerohuman_admin_account = client.ZerohumanAdminAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_mode` | `str` | Yes |  |
| `active_queue_count` | `int` | Yes |  |
| `assigned_agent` | `Any` | No |  |
| `created_at` | `Any` | No |  |
| `email` | `str` | Yes |  |
| `external_user_id` | `str` | Yes |  |
| `membership` | `Any` | No |  |
| `policy_code` | `Any` | No |  |
| `product_id` | `str` | No |  |
| `product_name` | `Any` | No |  |
| `provisioning_status` | `str` | Yes |  |
| `subscription_status` | `Any` | No |  |
| `updated_at` | `Any` | No |  |
| `user_id` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[ZerohumanAdminAccountEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.ZerohumanAdminAccount().list()
for zerohuman_admin_account in results:
    print(zerohuman_admin_account.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZerohumanAdminAccountEntity` instance with the same options.

#### `get_name() -> str`

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

```python
client = CrackedApiReferenceSDK({
    "feature": {
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
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

