# CrackedApiReference PHP SDK Reference

Complete API reference for the CrackedApiReference PHP SDK.


## CrackedApiReferenceSDK

### Constructor

```php
require_once __DIR__ . '/crackedapireference_sdk.php';

$client = new CrackedApiReferenceSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CrackedApiReferenceSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = CrackedApiReferenceSDK::test();
```


### Instance Methods

#### `Activate($data = null)`

Create a new `ActivateEntity` instance. Pass `null` for no initial data.

#### `ActivateUser($data = null)`

Create a new `ActivateUserEntity` instance. Pass `null` for no initial data.

#### `ActiveOnboarding($data = null)`

Create a new `ActiveOnboardingEntity` instance. Pass `null` for no initial data.

#### `Admin($data = null)`

Create a new `AdminEntity` instance. Pass `null` for no initial data.

#### `AdminAccountReset($data = null)`

Create a new `AdminAccountResetEntity` instance. Pass `null` for no initial data.

#### `AdminCarousel($data = null)`

Create a new `AdminCarouselEntity` instance. Pass `null` for no initial data.

#### `AdminCarouselDemoReview($data = null)`

Create a new `AdminCarouselDemoReviewEntity` instance. Pass `null` for no initial data.

#### `AdminCustomer($data = null)`

Create a new `AdminCustomerEntity` instance. Pass `null` for no initial data.

#### `AdminCustomerSuccess($data = null)`

Create a new `AdminCustomerSuccessEntity` instance. Pass `null` for no initial data.

#### `AdminGeneratedVideo($data = null)`

Create a new `AdminGeneratedVideoEntity` instance. Pass `null` for no initial data.

#### `AdminHealthrx($data = null)`

Create a new `AdminHealthrxEntity` instance. Pass `null` for no initial data.

#### `AdminInsight($data = null)`

Create a new `AdminInsightEntity` instance. Pass `null` for no initial data.

#### `AdminLandingTask($data = null)`

Create a new `AdminLandingTaskEntity` instance. Pass `null` for no initial data.

#### `AdminMetricsSummary($data = null)`

Create a new `AdminMetricsSummaryEntity` instance. Pass `null` for no initial data.

#### `AdminPost($data = null)`

Create a new `AdminPostEntity` instance. Pass `null` for no initial data.

#### `AdminRecentSignup($data = null)`

Create a new `AdminRecentSignupEntity` instance. Pass `null` for no initial data.

#### `AdminSlideshowDiag($data = null)`

Create a new `AdminSlideshowDiagEntity` instance. Pass `null` for no initial data.

#### `AdminSlideshowImport($data = null)`

Create a new `AdminSlideshowImportEntity` instance. Pass `null` for no initial data.

#### `AdminUserView($data = null)`

Create a new `AdminUserViewEntity` instance. Pass `null` for no initial data.

#### `AdminUsersTableItem($data = null)`

Create a new `AdminUsersTableItemEntity` instance. Pass `null` for no initial data.

#### `AdminVideoRemixer($data = null)`

Create a new `AdminVideoRemixerEntity` instance. Pass `null` for no initial data.

#### `AdvanceStep($data = null)`

Create a new `AdvanceStepEntity` instance. Pass `null` for no initial data.

#### `Agent($data = null)`

Create a new `AgentEntity` instance. Pass `null` for no initial data.

#### `AgentAccessCustomersHealth($data = null)`

Create a new `AgentAccessCustomersHealthEntity` instance. Pass `null` for no initial data.

#### `AgentAccessOverview($data = null)`

Create a new `AgentAccessOverviewEntity` instance. Pass `null` for no initial data.

#### `AgentAccessPhilHourlyNotification($data = null)`

Create a new `AgentAccessPhilHourlyNotificationEntity` instance. Pass `null` for no initial data.

#### `AgentAccessPhilStatsRefresh($data = null)`

Create a new `AgentAccessPhilStatsRefreshEntity` instance. Pass `null` for no initial data.

#### `AgentAccessPhilVideo($data = null)`

Create a new `AgentAccessPhilVideoEntity` instance. Pass `null` for no initial data.

#### `AgentAccessUserAgent($data = null)`

Create a new `AgentAccessUserAgentEntity` instance. Pass `null` for no initial data.

#### `AgentAccessUserPhoneFarm($data = null)`

Create a new `AgentAccessUserPhoneFarmEntity` instance. Pass `null` for no initial data.

#### `AgentAccessUserPost($data = null)`

Create a new `AgentAccessUserPostEntity` instance. Pass `null` for no initial data.

#### `AgentAccessUserSummary($data = null)`

Create a new `AgentAccessUserSummaryEntity` instance. Pass `null` for no initial data.

#### `AgentAccessUserVideo($data = null)`

Create a new `AgentAccessUserVideoEntity` instance. Pass `null` for no initial data.

#### `AgentAccessUserWinningAd($data = null)`

Create a new `AgentAccessUserWinningAdEntity` instance. Pass `null` for no initial data.

#### `AgentAccessWinningAdsSummary($data = null)`

Create a new `AgentAccessWinningAdsSummaryEntity` instance. Pass `null` for no initial data.

#### `AgentDetail($data = null)`

Create a new `AgentDetailEntity` instance. Pass `null` for no initial data.

#### `AgentHealth($data = null)`

Create a new `AgentHealthEntity` instance. Pass `null` for no initial data.

#### `AgentHealthCustomerOption($data = null)`

Create a new `AgentHealthCustomerOptionEntity` instance. Pass `null` for no initial data.

#### `AgentHealthDetail($data = null)`

Create a new `AgentHealthDetailEntity` instance. Pass `null` for no initial data.

#### `AgentPost($data = null)`

Create a new `AgentPostEntity` instance. Pass `null` for no initial data.

#### `AgentStat($data = null)`

Create a new `AgentStatEntity` instance. Pass `null` for no initial data.

#### `AgentSummary($data = null)`

Create a new `AgentSummaryEntity` instance. Pass `null` for no initial data.

#### `AgentsSummary($data = null)`

Create a new `AgentsSummaryEntity` instance. Pass `null` for no initial data.

#### `AnalysisStatus($data = null)`

Create a new `AnalysisStatusEntity` instance. Pass `null` for no initial data.

#### `AnalyticsPost($data = null)`

Create a new `AnalyticsPostEntity` instance. Pass `null` for no initial data.

#### `AnalyzeProduct($data = null)`

Create a new `AnalyzeProductEntity` instance. Pass `null` for no initial data.

#### `AssignAgent($data = null)`

Create a new `AssignAgentEntity` instance. Pass `null` for no initial data.

#### `Auth($data = null)`

Create a new `AuthEntity` instance. Pass `null` for no initial data.

#### `AutoScheduleSetting($data = null)`

Create a new `AutoScheduleSettingEntity` instance. Pass `null` for no initial data.

#### `BulkTikTokStatsUpdate($data = null)`

Create a new `BulkTikTokStatsUpdateEntity` instance. Pass `null` for no initial data.

#### `Carousel($data = null)`

Create a new `CarouselEntity` instance. Pass `null` for no initial data.

#### `CarouselAgentDetail($data = null)`

Create a new `CarouselAgentDetailEntity` instance. Pass `null` for no initial data.

#### `CarouselStatus($data = null)`

Create a new `CarouselStatusEntity` instance. Pass `null` for no initial data.

#### `Chat($data = null)`

Create a new `ChatEntity` instance. Pass `null` for no initial data.

#### `ChatHistory($data = null)`

Create a new `ChatHistoryEntity` instance. Pass `null` for no initial data.

#### `ChatSession($data = null)`

Create a new `ChatSessionEntity` instance. Pass `null` for no initial data.

#### `Comment($data = null)`

Create a new `CommentEntity` instance. Pass `null` for no initial data.

#### `CommentCampaign($data = null)`

Create a new `CommentCampaignEntity` instance. Pass `null` for no initial data.

#### `CompleteChatCheckout($data = null)`

Create a new `CompleteChatCheckoutEntity` instance. Pass `null` for no initial data.

#### `CreateBlackoutSora2Video($data = null)`

Create a new `CreateBlackoutSora2VideoEntity` instance. Pass `null` for no initial data.

#### `CreateCarousel($data = null)`

Create a new `CreateCarouselEntity` instance. Pass `null` for no initial data.

#### `CreateProduct($data = null)`

Create a new `CreateProductEntity` instance. Pass `null` for no initial data.

#### `CreateResetProductV6($data = null)`

Create a new `CreateResetProductV6Entity` instance. Pass `null` for no initial data.

#### `CreateSora2Video($data = null)`

Create a new `CreateSora2VideoEntity` instance. Pass `null` for no initial data.

#### `CreateVariation($data = null)`

Create a new `CreateVariationEntity` instance. Pass `null` for no initial data.

#### `Customer($data = null)`

Create a new `CustomerEntity` instance. Pass `null` for no initial data.

#### `CustomerHealth($data = null)`

Create a new `CustomerHealthEntity` instance. Pass `null` for no initial data.

#### `CustomerHealthAllCustomersItem($data = null)`

Create a new `CustomerHealthAllCustomersItemEntity` instance. Pass `null` for no initial data.

#### `CustomerHealthViewsSummary($data = null)`

Create a new `CustomerHealthViewsSummaryEntity` instance. Pass `null` for no initial data.

#### `Daily($data = null)`

Create a new `DailyEntity` instance. Pass `null` for no initial data.

#### `DailyStatus($data = null)`

Create a new `DailyStatusEntity` instance. Pass `null` for no initial data.

#### `DedicatedAgentsDashboard($data = null)`

Create a new `DedicatedAgentsDashboardEntity` instance. Pass `null` for no initial data.

#### `EnterpriseAgent($data = null)`

Create a new `EnterpriseAgentEntity` instance. Pass `null` for no initial data.

#### `EnterpriseProduct($data = null)`

Create a new `EnterpriseProductEntity` instance. Pass `null` for no initial data.

#### `ExactAvailability($data = null)`

Create a new `ExactAvailabilityEntity` instance. Pass `null` for no initial data.

#### `ExactFormula($data = null)`

Create a new `ExactFormulaEntity` instance. Pass `null` for no initial data.

#### `ExtractV2($data = null)`

Create a new `ExtractV2Entity` instance. Pass `null` for no initial data.

#### `FailedPost($data = null)`

Create a new `FailedPostEntity` instance. Pass `null` for no initial data.

#### `File($data = null)`

Create a new `FileEntity` instance. Pass `null` for no initial data.

#### `GenerateBlackoutSora2Prompt($data = null)`

Create a new `GenerateBlackoutSora2PromptEntity` instance. Pass `null` for no initial data.

#### `GeneratePomelliDemo($data = null)`

Create a new `GeneratePomelliDemoEntity` instance. Pass `null` for no initial data.

#### `GeneratePrompt($data = null)`

Create a new `GeneratePromptEntity` instance. Pass `null` for no initial data.

#### `GenerateSora2Prompt($data = null)`

Create a new `GenerateSora2PromptEntity` instance. Pass `null` for no initial data.

#### `Healthrx($data = null)`

Create a new `HealthrxEntity` instance. Pass `null` for no initial data.

#### `InitResetProductV6($data = null)`

Create a new `InitResetProductV6Entity` instance. Pass `null` for no initial data.

#### `Iri($data = null)`

Create a new `IriEntity` instance. Pass `null` for no initial data.

#### `IrisCapability($data = null)`

Create a new `IrisCapabilityEntity` instance. Pass `null` for no initial data.

#### `IrisChat($data = null)`

Create a new `IrisChatEntity` instance. Pass `null` for no initial data.

#### `IrisConnector($data = null)`

Create a new `IrisConnectorEntity` instance. Pass `null` for no initial data.

#### `IrisStatus($data = null)`

Create a new `IrisStatusEntity` instance. Pass `null` for no initial data.

#### `IrisTask($data = null)`

Create a new `IrisTaskEntity` instance. Pass `null` for no initial data.

#### `IrisUsage($data = null)`

Create a new `IrisUsageEntity` instance. Pass `null` for no initial data.

#### `Landing($data = null)`

Create a new `LandingEntity` instance. Pass `null` for no initial data.

#### `LandingStat($data = null)`

Create a new `LandingStatEntity` instance. Pass `null` for no initial data.

#### `LandingStatus($data = null)`

Create a new `LandingStatusEntity` instance. Pass `null` for no initial data.

#### `LinkInBio($data = null)`

Create a new `LinkInBioEntity` instance. Pass `null` for no initial data.

#### `LinkInDm($data = null)`

Create a new `LinkInDmEntity` instance. Pass `null` for no initial data.

#### `LinkInPost($data = null)`

Create a new `LinkInPostEntity` instance. Pass `null` for no initial data.

#### `LinkUser($data = null)`

Create a new `LinkUserEntity` instance. Pass `null` for no initial data.

#### `MediaAsset($data = null)`

Create a new `MediaAssetEntity` instance. Pass `null` for no initial data.

#### `Men($data = null)`

Create a new `MenEntity` instance. Pass `null` for no initial data.

#### `Microdrama($data = null)`

Create a new `MicrodramaEntity` instance. Pass `null` for no initial data.

#### `MicrohubPublic($data = null)`

Create a new `MicrohubPublicEntity` instance. Pass `null` for no initial data.

#### `OnboardingStatus($data = null)`

Create a new `OnboardingStatusEntity` instance. Pass `null` for no initial data.

#### `OnboardingV6($data = null)`

Create a new `OnboardingV6Entity` instance. Pass `null` for no initial data.

#### `PaidUser($data = null)`

Create a new `PaidUserEntity` instance. Pass `null` for no initial data.

#### `Pexel($data = null)`

Create a new `PexelEntity` instance. Pass `null` for no initial data.

#### `PhoneAdminAvailableAgentSource($data = null)`

Create a new `PhoneAdminAvailableAgentSourceEntity` instance. Pass `null` for no initial data.

#### `Product($data = null)`

Create a new `ProductEntity` instance. Pass `null` for no initial data.

#### `ProductDashboard($data = null)`

Create a new `ProductDashboardEntity` instance. Pass `null` for no initial data.

#### `ProductDashboardView($data = null)`

Create a new `ProductDashboardViewEntity` instance. Pass `null` for no initial data.

#### `ProductDemo($data = null)`

Create a new `ProductDemoEntity` instance. Pass `null` for no initial data.

#### `ProductLanding($data = null)`

Create a new `ProductLandingEntity` instance. Pass `null` for no initial data.

#### `PublicResumeStatus($data = null)`

Create a new `PublicResumeStatusEntity` instance. Pass `null` for no initial data.

#### `ReRollVideo($data = null)`

Create a new `ReRollVideoEntity` instance. Pass `null` for no initial data.

#### `ReadRootGet($data = null)`

Create a new `ReadRootGetEntity` instance. Pass `null` for no initial data.

#### `RecordDemoBooked($data = null)`

Create a new `RecordDemoBookedEntity` instance. Pass `null` for no initial data.

#### `RefreshStat($data = null)`

Create a new `RefreshStatEntity` instance. Pass `null` for no initial data.

#### `RemixerClipper($data = null)`

Create a new `RemixerClipperEntity` instance. Pass `null` for no initial data.

#### `ResetProduct($data = null)`

Create a new `ResetProductEntity` instance. Pass `null` for no initial data.

#### `RetryWebsiteScrape($data = null)`

Create a new `RetryWebsiteScrapeEntity` instance. Pass `null` for no initial data.

#### `SaveSurvey($data = null)`

Create a new `SaveSurveyEntity` instance. Pass `null` for no initial data.

#### `ScanSocial($data = null)`

Create a new `ScanSocialEntity` instance. Pass `null` for no initial data.

#### `ScanSocialsPublic($data = null)`

Create a new `ScanSocialsPublicEntity` instance. Pass `null` for no initial data.

#### `ScanSocialsStatus($data = null)`

Create a new `ScanSocialsStatusEntity` instance. Pass `null` for no initial data.

#### `ScheduleV2($data = null)`

Create a new `ScheduleV2Entity` instance. Pass `null` for no initial data.

#### `Scrape($data = null)`

Create a new `ScrapeEntity` instance. Pass `null` for no initial data.

#### `ScrapeWebsitePublic($data = null)`

Create a new `ScrapeWebsitePublicEntity` instance. Pass `null` for no initial data.

#### `ScrapedData($data = null)`

Create a new `ScrapedDataEntity` instance. Pass `null` for no initial data.

#### `ScrapingStatus($data = null)`

Create a new `ScrapingStatusEntity` instance. Pass `null` for no initial data.

#### `SelfServeActivate($data = null)`

Create a new `SelfServeActivateEntity` instance. Pass `null` for no initial data.

#### `Seo($data = null)`

Create a new `SeoEntity` instance. Pass `null` for no initial data.

#### `SeoAiMention($data = null)`

Create a new `SeoAiMentionEntity` instance. Pass `null` for no initial data.

#### `SeoBacklink($data = null)`

Create a new `SeoBacklinkEntity` instance. Pass `null` for no initial data.

#### `SeoKeyword($data = null)`

Create a new `SeoKeywordEntity` instance. Pass `null` for no initial data.

#### `SeoOverview($data = null)`

Create a new `SeoOverviewEntity` instance. Pass `null` for no initial data.

#### `SeoTraffic($data = null)`

Create a new `SeoTrafficEntity` instance. Pass `null` for no initial data.

#### `ShareAccessLink($data = null)`

Create a new `ShareAccessLinkEntity` instance. Pass `null` for no initial data.

#### `Site($data = null)`

Create a new `SiteEntity` instance. Pass `null` for no initial data.

#### `Slide($data = null)`

Create a new `SlideEntity` instance. Pass `null` for no initial data.

#### `SlugValidation($data = null)`

Create a new `SlugValidationEntity` instance. Pass `null` for no initial data.

#### `Social($data = null)`

Create a new `SocialEntity` instance. Pass `null` for no initial data.

#### `SocialScanPreview($data = null)`

Create a new `SocialScanPreviewEntity` instance. Pass `null` for no initial data.

#### `SocialScanProcess($data = null)`

Create a new `SocialScanProcessEntity` instance. Pass `null` for no initial data.

#### `SocialScanSave($data = null)`

Create a new `SocialScanSaveEntity` instance. Pass `null` for no initial data.

#### `Sora2Avatar($data = null)`

Create a new `Sora2AvatarEntity` instance. Pass `null` for no initial data.

#### `Sora2AvatarAssetUpload($data = null)`

Create a new `Sora2AvatarAssetUploadEntity` instance. Pass `null` for no initial data.

#### `Sora2AvatarStat($data = null)`

Create a new `Sora2AvatarStatEntity` instance. Pass `null` for no initial data.

#### `Stat($data = null)`

Create a new `StatEntity` instance. Pass `null` for no initial data.

#### `StatsRefreshBackfill($data = null)`

Create a new `StatsRefreshBackfillEntity` instance. Pass `null` for no initial data.

#### `StatsRefreshIssue($data = null)`

Create a new `StatsRefreshIssueEntity` instance. Pass `null` for no initial data.

#### `StatsRefreshOverview($data = null)`

Create a new `StatsRefreshOverviewEntity` instance. Pass `null` for no initial data.

#### `StatsRefreshRunSummary($data = null)`

Create a new `StatsRefreshRunSummaryEntity` instance. Pass `null` for no initial data.

#### `StatsRefreshTaskTrigger($data = null)`

Create a new `StatsRefreshTaskTriggerEntity` instance. Pass `null` for no initial data.

#### `Stripe($data = null)`

Create a new `StripeEntity` instance. Pass `null` for no initial data.

#### `Style($data = null)`

Create a new `StyleEntity` instance. Pass `null` for no initial data.

#### `Template($data = null)`

Create a new `TemplateEntity` instance. Pass `null` for no initial data.

#### `TikTokCreatorInfo($data = null)`

Create a new `TikTokCreatorInfoEntity` instance. Pass `null` for no initial data.

#### `TopPost($data = null)`

Create a new `TopPostEntity` instance. Pass `null` for no initial data.

#### `UploadPostAgent($data = null)`

Create a new `UploadPostAgentEntity` instance. Pass `null` for no initial data.

#### `User($data = null)`

Create a new `UserEntity` instance. Pass `null` for no initial data.

#### `UserAgent($data = null)`

Create a new `UserAgentEntity` instance. Pass `null` for no initial data.

#### `UserHealthDetail($data = null)`

Create a new `UserHealthDetailEntity` instance. Pass `null` for no initial data.

#### `UserWithAvatarSubmission($data = null)`

Create a new `UserWithAvatarSubmissionEntity` instance. Pass `null` for no initial data.

#### `UsersHealth($data = null)`

Create a new `UsersHealthEntity` instance. Pass `null` for no initial data.

#### `Video($data = null)`

Create a new `VideoEntity` instance. Pass `null` for no initial data.

#### `VideoRemixerWorker($data = null)`

Create a new `VideoRemixerWorkerEntity` instance. Pass `null` for no initial data.

#### `WatchdogRecovery($data = null)`

Create a new `WatchdogRecoveryEntity` instance. Pass `null` for no initial data.

#### `WinningAd($data = null)`

Create a new `WinningAdEntity` instance. Pass `null` for no initial data.

#### `XAdaptation($data = null)`

Create a new `XAdaptationEntity` instance. Pass `null` for no initial data.

#### `ZerohumanAdminAccount($data = null)`

Create a new `ZerohumanAdminAccountEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): CrackedApiReferenceUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## ActivateEntity

```php
$activate = $client->Activate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activated_at` | `mixed` | No |  |
| `message` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Activate()->create([
  "user_id" => null, // string
  "message" => null, // string
  "success" => null, // bool
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActivateEntity`

Create a new `ActivateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActivateUserEntity

```php
$activate_user = $client->ActivateUser();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activated_at` | `mixed` | No |  |
| `message` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ActivateUser()->create([
  "user_id" => null, // string
  "message" => null, // string
  "success" => null, // bool
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActivateUserEntity`

Create a new `ActivateUserEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActiveOnboardingEntity

```php
$active_onboarding = $client->ActiveOnboarding();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_step` | `mixed` | No |  |
| `has_active_onboarding` | `bool` | Yes |  |
| `onboarding_data_id` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->ActiveOnboarding()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActiveOnboardingEntity`

Create a new `ActiveOnboardingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminEntity

```php
$admin = $client->Admin();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apply` | `bool` | No | Apply safe canonical or clean-only URL updates |
| `count` | `int` | Yes |  |
| `created_at` | `string` | Yes |  |
| `date_from` | `mixed` | No |  |
| `date_to` | `mixed` | No |  |
| `email` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `include_failed` | `bool` | No |  |
| `include_pending` | `bool` | No |  |
| `include_records` | `bool` | No | Include full per-field audit records in the response |
| `issue_ids` | `mixed` | No |  |
| `only_active` | `bool` | No | Limit the audit to active agents |
| `platform` | `mixed` | No |  |
| `posting_method` | `mixed` | No |  |
| `product_id` | `string` | No |  |
| `query` | `mixed` | No |  |
| `reason` | `mixed` | No |  |
| `regenerate` | `bool` | No |  |
| `status` | `string` | No |  |
| `user_membership` | `mixed` | No |  |
| `user_name` | `mixed` | No |  |
| `user_onboarding_step` | `mixed` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Admin()->create([
  "user_id" => null, // string
  "count" => null, // int
  "created_at" => null, // string
  "date_from" => null, // mixed
  "date_to" => null, // mixed
  "email" => null, // string
  "id" => null, // string
  "product_id" => null, // string
  "video_type" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Admin()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Admin()->load(["date" => "date"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->Admin()->remove(["tester_id" => "tester_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->Admin()->update([
  "agent_id" => "agent_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminEntity`

Create a new `AdminEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminAccountResetEntity

```php
$admin_account_reset = $client->AdminAccountReset();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_ids` | `array` | Yes |  |
| `agent_ids_sha256` | `string` | Yes |  |
| `backup_sha256` | `string` | Yes |  |
| `batch_size` | `int` | No |  |
| `confirmation` | `string` | Yes |  |
| `customer_email` | `string` | Yes |  |
| `pc_name` | `string` | Yes |  |
| `phase` | `string` | No |  |
| `product_id` | `string` | Yes |  |
| `video_ids` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->AdminAccountReset()->create([
  "agent_ids" => null, // array
  "agent_ids_sha256" => null, // string
  "backup_sha256" => null, // string
  "confirmation" => null, // string
  "customer_email" => null, // string
  "pc_name" => null, // string
  "product_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminAccountResetEntity`

Create a new `AdminAccountResetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminCarouselEntity

```php
$admin_carousel = $client->AdminCarousel();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `string` | No |  |
| `batch_id` | `string` | No |  |
| `caption` | `string` | No |  |
| `content_base64` | `string` | No |  |
| `day` | `mixed` | No |  |
| `dry_run` | `bool` | No |  |
| `engine_run` | `string` | No |  |
| `expected_revision` | `string` | Yes |  |
| `formula` | `array` | Yes |  |
| `formula_id` | `string` | No |  |
| `prompt` | `string` | Yes |  |
| `slides` | `array` | Yes |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->AdminCarousel()->create([
  "stage" => null, // string
  "agent_id" => null, // string
  "batch_id" => null, // string
  "caption" => null, // string
  "day" => null, // mixed
  "expected_revision" => null, // string
  "formula" => null, // array
  "formula_id" => null, // string
  "prompt" => null, // string
  "slides" => null, // array
  "title" => null, // string
]);
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->AdminCarousel()->load(["batch_id" => "batch_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->AdminCarousel()->update([
  "fmt" => "fmt",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminCarouselEntity`

Create a new `AdminCarouselEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminCarouselDemoReviewEntity

```php
$admin_carousel_demo_review = $client->AdminCarouselDemoReview();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `items` | `array` | Yes |  |
| `reason` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->AdminCarouselDemoReview()->create([
  "items" => null, // array
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->AdminCarouselDemoReview()->load(["id" => "admin_carousel_demo_review_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->AdminCarouselDemoReview()->update([
  "demo_review_id" => "demo_review_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminCarouselDemoReviewEntity`

Create a new `AdminCarouselDemoReviewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminCustomerEntity

```php
$admin_customer = $client->AdminCustomer();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `mixed` | No |  |
| `active_vireel_agents` | `int` | Yes |  |
| `agents` | `array` | Yes |  |
| `billing_source` | `string` | Yes |  |
| `contracted_agents` | `mixed` | No |  |
| `email` | `string` | Yes |  |
| `membership` | `mixed` | No |  |
| `name` | `string` | No |  |
| `pfa_only_agents` | `int` | Yes |  |
| `severity` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `subscription_status` | `mixed` | No |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AdminCustomer()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminCustomerEntity`

Create a new `AdminCustomerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminCustomerSuccessEntity

```php
$admin_customer_success = $client->AdminCustomerSuccess();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_agents` | `int` | Yes |  |
| `active_products` | `int` | Yes |  |
| `agents_count` | `int` | Yes |  |
| `auto_schedule_status` | `string` | Yes |  |
| `days_until_period_end` | `mixed` | No |  |
| `email` | `string` | Yes |  |
| `feature_impact` | `string` | Yes |  |
| `last_notification_at` | `mixed` | No |  |
| `membership` | `mixed` | No |  |
| `name` | `string` | No |  |
| `notification_count` | `int` | Yes |  |
| `notification_events` | `array` | Yes |  |
| `priority` | `string` | Yes |  |
| `severity` | `string` | Yes |  |
| `status_label` | `string` | Yes |  |
| `subscription_current_period_end` | `mixed` | No |  |
| `subscription_status` | `mixed` | No |  |
| `upcoming_posts` | `int` | Yes |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AdminCustomerSuccess()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminCustomerSuccessEntity`

Create a new `AdminCustomerSuccessEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminGeneratedVideoEntity

```php
$admin_generated_video = $client->AdminGeneratedVideo();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `string` | No |  |
| `agent_name` | `mixed` | No |  |
| `created_at` | `string` | Yes |  |
| `duration` | `float` | No |  |
| `generation_status` | `array` | No |  |
| `id` | `string` | Yes |  |
| `product_id` | `string` | No |  |
| `thumbnail_url` | `mixed` | No |  |
| `title` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updated_at` | `mixed` | No |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AdminGeneratedVideo()->list(["user_id" => "example"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminGeneratedVideoEntity`

Create a new `AdminGeneratedVideoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminHealthrxEntity

```php
$admin_healthrx = $client->AdminHealthrx();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `delivery_enabled` | `bool` | No |  |
| `id` | `string` | No |  |
| `option_id` | `string` | Yes |  |
| `plan` | `array` | Yes |  |
| `preparation_enabled` | `bool` | No |  |
| `product_id` | `string` | Yes |  |
| `reason` | `string` | Yes |  |
| `request_key` | `string` | Yes |  |
| `revision` | `int` | Yes |  |
| `schedule_enabled` | `bool` | No |  |
| `version` | `string` | Yes |  |
| `viewed` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->AdminHealthrx()->create([
  "action" => null, // string
  "option_id" => null, // string
  "plan" => null, // array
  "product_id" => null, // string
  "reason" => null, // string
  "request_key" => null, // string
  "version" => null, // string
  "viewed" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->AdminHealthrx()->load(["item_id" => "item_id", "kind" => "kind"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->AdminHealthrx()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminHealthrxEntity`

Create a new `AdminHealthrxEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminInsightEntity

```php
$admin_insight = $client->AdminInsight();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer_success_cases` | `array` | Yes |  |
| `customers` | `array` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `pfa_database` | `array` | Yes |  |
| `recent_signups` | `array` | Yes |  |
| `summary` | `array` | Yes |  |
| `vireel_database` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AdminInsight()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->AdminInsight()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminInsightEntity`

Create a new `AdminInsightEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminLandingTaskEntity

```php
$admin_landing_task = $client->AdminLandingTask();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `task_id` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->AdminLandingTask()->create([
  "user_id" => null, // string
  "task_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminLandingTaskEntity`

Create a new `AdminLandingTaskEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminMetricsSummaryEntity

```php
$admin_metrics_summary = $client->AdminMetricsSummary();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `paid_users_by_level` | `array` | Yes |  |
| `total_cancellations` | `int` | Yes |  |
| `total_previews_generated` | `int` | Yes |  |
| `total_signups` | `int` | Yes |  |
| `total_videos_generated` | `int` | Yes |  |
| `url_attempts` | `int` | Yes |  |
| `user_credits` | `array` | Yes |  |
| `user_gifted_credits` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AdminMetricsSummary()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminMetricsSummaryEntity`

Create a new `AdminMetricsSummaryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminPostEntity

```php
$admin_post = $client->AdminPost();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_job_ids` | `mixed` | Yes |  |
| `agent_id` | `string` | Yes |  |
| `agent_name` | `mixed` | Yes |  |
| `agent_platform_urls` | `mixed` | Yes |  |
| `agent_url` | `mixed` | Yes |  |
| `comments` | `int` | Yes |  |
| `error_message` | `mixed` | Yes |  |
| `failed_at` | `mixed` | Yes |  |
| `id` | `string` | Yes |  |
| `instagram_posted_by` | `mixed` | Yes |  |
| `instagram_posted_url` | `mixed` | Yes |  |
| `instagram_scraped_social_post_id` | `string` | Yes |  |
| `is_instagram_posted` | `bool` | Yes |  |
| `is_tiktok_posted` | `bool` | Yes |  |
| `is_youtube_posted` | `bool` | Yes |  |
| `last_refreshed_at` | `mixed` | Yes |  |
| `likes` | `int` | Yes |  |
| `platform_post_methods` | `mixed` | Yes |  |
| `platform_urls` | `mixed` | Yes |  |
| `post_method` | `mixed` | Yes |  |
| `post_platforms` | `mixed` | Yes |  |
| `post_url` | `mixed` | Yes |  |
| `posted_at` | `mixed` | Yes |  |
| `product_id` | `string` | Yes |  |
| `results_status` | `mixed` | Yes |  |
| `scheduled_datetime` | `string` | Yes |  |
| `source_type` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `tiktok_posted_by` | `mixed` | Yes |  |
| `tiktok_posted_url` | `mixed` | Yes |  |
| `tiktok_scraped_social_post_id` | `string` | Yes |  |
| `upload_post_error` | `mixed` | Yes |  |
| `upload_post_status` | `mixed` | Yes |  |
| `upload_post_uploads` | `mixed` | Yes |  |
| `user_email` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |
| `user_name` | `mixed` | Yes |  |
| `video_id` | `string` | Yes |  |
| `video_url` | `mixed` | Yes |  |
| `views` | `int` | Yes |  |
| `youtube_posted_by` | `mixed` | Yes |  |
| `youtube_posted_url` | `mixed` | Yes |  |
| `youtube_scraped_social_post_id` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AdminPost()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminPostEntity`

Create a new `AdminPostEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminRecentSignupEntity

```php
$admin_recent_signup = $client->AdminRecentSignup();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `current_step` | `string` | Yes |  |
| `email` | `string` | No |  |
| `email_source` | `mixed` | No |  |
| `error_message` | `mixed` | No |  |
| `flow_variant` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `inactive_minutes` | `int` | Yes |  |
| `last_notification_at` | `mixed` | No |  |
| `last_seen_at` | `string` | Yes |  |
| `likely_cause` | `string` | Yes |  |
| `notification_count` | `int` | Yes |  |
| `notification_events` | `array` | Yes |  |
| `product_id` | `string` | No |  |
| `product_name` | `mixed` | No |  |
| `product_url` | `string` | Yes |  |
| `severity` | `string` | Yes |  |
| `social_scan_status` | `mixed` | No |  |
| `stage_label` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updated_at` | `mixed` | No |  |
| `website_scrape_status` | `mixed` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AdminRecentSignup()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminRecentSignupEntity`

Create a new `AdminRecentSignupEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminSlideshowDiagEntity

```php
$admin_slideshow_diag = $client->AdminSlideshowDiag();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `string` | No |  |
| `batch_id` | `string` | No |  |
| `caption` | `string` | No |  |
| `content_base64` | `string` | No |  |
| `day` | `mixed` | No |  |
| `formula_id` | `string` | No |  |
| `id` | `string` | No |  |
| `title` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->AdminSlideshowDiag()->create([
  "id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminSlideshowDiagEntity`

Create a new `AdminSlideshowDiagEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminSlideshowImportEntity

```php
$admin_slideshow_import = $client->AdminSlideshowImport();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `string` | Yes |  |
| `batch_id` | `string` | Yes |  |
| `caption` | `string` | Yes |  |
| `day` | `string` | Yes |  |
| `dry_run` | `bool` | No |  |
| `engine_run` | `string` | No |  |
| `formula_id` | `string` | Yes |  |
| `slides` | `array` | Yes |  |
| `title` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->AdminSlideshowImport()->create([
  "agent_id" => null, // string
  "batch_id" => null, // string
  "caption" => null, // string
  "day" => null, // string
  "formula_id" => null, // string
  "slides" => null, // array
  "title" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->AdminSlideshowImport()->load(["batch_id" => "batch_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminSlideshowImportEntity`

Create a new `AdminSlideshowImportEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminUserViewEntity

```php
$admin_user_view = $client->AdminUserView();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `mixed` | No |  |
| `admin_notes` | `mixed` | No |  |
| `agents_count` | `int` | No |  |
| `created_at` | `string` | Yes |  |
| `credits` | `int` | Yes |  |
| `email` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `industry` | `mixed` | Yes |  |
| `is_admin` | `bool` | No |  |
| `is_bookmarked` | `bool` | No |  |
| `is_internal_user` | `bool` | No |  |
| `membership` | `mixed` | Yes |  |
| `name` | `string` | Yes |  |
| `new_email` | `string` | Yes |  |
| `partner_external_user_id` | `string` | No |  |
| `partner_policy_code` | `mixed` | No |  |
| `partner_source` | `mixed` | No |  |
| `product_name` | `mixed` | Yes |  |
| `product_url` | `mixed` | Yes |  |
| `skip` | `bool` | Yes |  |
| `subscription_details` | `mixed` | No |  |
| `subscription_status` | `mixed` | Yes |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->AdminUserView()->create([
  "user_id" => null, // string
  "created_at" => null, // string
  "credits" => null, // int
  "email" => null, // string
  "id" => null, // string
  "industry" => null, // mixed
  "membership" => null, // mixed
  "name" => null, // string
  "new_email" => null, // string
  "product_name" => null, // mixed
  "product_url" => null, // mixed
  "skip" => null, // bool
  "subscription_status" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AdminUserView()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->AdminUserView()->remove(["user_id" => "user_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->AdminUserView()->update([
  "user_id" => "user_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminUserViewEntity`

Create a new `AdminUserViewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminUsersTableItemEntity

```php
$admin_users_table_item = $client->AdminUsersTableItem();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activated` | `bool` | Yes |  |
| `agents_count` | `int` | No |  |
| `created_at` | `string` | Yes |  |
| `credits` | `int` | Yes |  |
| `demo_booked` | `bool` | Yes |  |
| `email` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `membership` | `mixed` | Yes |  |
| `name` | `string` | Yes |  |
| `onboarding_flow` | `string` | Yes |  |
| `product_name` | `mixed` | Yes |  |
| `product_url` | `mixed` | Yes |  |
| `survey_data` | `mixed` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AdminUsersTableItem()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminUsersTableItemEntity`

Create a new `AdminUsersTableItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminVideoRemixerEntity

```php
$admin_video_remixer = $client->AdminVideoRemixer();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity` | `string` | Yes |  |
| `allowed_platforms` | `array` | No |  |
| `anchor_clip_id` | `string` | No |  |
| `atomicity_class` | `mixed` | No |  |
| `auto_render` | `bool` | No |  |
| `campaign_allowed` | `bool` | No |  |
| `channel` | `string` | No |  |
| `channel_default` | `string` | No |  |
| `clip_id` | `string` | Yes |  |
| `clip_ids` | `array` | No |  |
| `collected_at` | `string` | Yes |  |
| `comments` | `mixed` | No |  |
| `completion_rate` | `mixed` | No |  |
| `confirmed_duplicate_of` | `mixed` | No |  |
| `consent_doc_uri` | `string` | No |  |
| `contact` | `string` | No |  |
| `conversions` | `mixed` | No |  |
| `count` | `int` | No |  |
| `creator` | `string` | No |  |
| `creator_id` | `string` | No |  |
| `crop_window` | `mixed` | No |  |
| `cta_product_id` | `string` | No |  |
| `days` | `int` | No |  |
| `derivative_edits_allowed` | `bool` | No |  |
| `enabled` | `bool` | No |  |
| `end_ms` | `mixed` | No |  |
| `enqueue` | `bool` | No |  |
| `errors` | `array` | No |  |
| `evidence` | `string` | Yes |  |
| `expected_revision` | `mixed` | No |  |
| `expected_revisions` | `array` | Yes |  |
| `external_ai_allowed` | `bool` | No |  |
| `file` | `string` | Yes |  |
| `followers` | `mixed` | No |  |
| `formula_id` | `string` | Yes |  |
| `formula_ids` | `array` | Yes |  |
| `handles` | `array` | No |  |
| `hook_subtype` | `mixed` | No |  |
| `hour_utc` | `int` | No |  |
| `human_role` | `string` | Yes |  |
| `idempotency_key` | `string` | Yes |  |
| `items` | `array` | Yes |  |
| `kim_clip_ids` | `array` | Yes |  |
| `kind` | `string` | Yes |  |
| `levels` | `array` | Yes |  |
| `likes` | `mixed` | No |  |
| `media_enabled` | `bool` | Yes |  |
| `medical_claim_present` | `bool` | No |  |
| `minute_utc` | `int` | No |  |
| `music_bed_allowed` | `bool` | No |  |
| `music_policy` | `string` | No |  |
| `name` | `string` | Yes |  |
| `niche` | `string` | No |  |
| `notes` | `string` | No |  |
| `origin` | `string` | No |  |
| `owner_waiver` | `bool` | No |  |
| `paid_ads_allowed` | `bool` | No |  |
| `patient_identifiable` | `bool` | No |  |
| `person_type` | `string` | No |  |
| `pipeline` | `bool` | No |  |
| `planning_only` | `bool` | No |  |
| `platform` | `string` | Yes |  |
| `platform_post_id` | `string` | Yes |  |
| `policy` | `array` | Yes |  |
| `polish` | `string` | No |  |
| `post_url` | `string` | Yes |  |
| `posted_at` | `string` | Yes |  |
| `primary_role` | `mixed` | No |  |
| `purpose` | `string` | Yes |  |
| `rate` | `float` | No |  |
| `rationale` | `string` | No |  |
| `reason` | `string` | Yes |  |
| `reference_source_id` | `string` | No |  |
| `requires_medical_review` | `bool` | No |  |
| `review_status` | `mixed` | No |  |
| `revision` | `int` | Yes |  |
| `rights_expires_at` | `mixed` | No |  |
| `rights_status` | `string` | No |  |
| `run_id` | `string` | Yes |  |
| `sample_links` | `array` | No |  |
| `secondary_roles` | `mixed` | No |  |
| `seconds` | `int` | Yes |  |
| `seed` | `int` | No |  |
| `seed_base` | `int` | No |  |
| `sensitive_personal_data_present` | `bool` | No |  |
| `shares` | `mixed` | No |  |
| `shoot` | `string` | No |  |
| `slots` | `array` | Yes |  |
| `soundbite_title` | `mixed` | No |  |
| `source` | `string` | Yes |  |
| `source_id` | `string` | Yes |  |
| `source_ids` | `array` | Yes |  |
| `spend_usd` | `mixed` | No |  |
| `spiciness` | `mixed` | No |  |
| `spiciness_notes` | `string` | No |  |
| `start_ms` | `mixed` | No |  |
| `status` | `string` | No |  |
| `terry_clip_ids` | `array` | Yes |  |
| `testimonial_strength` | `mixed` | No |  |
| `testimonial_type` | `mixed` | No |  |
| `tier` | `string` | No |  |
| `timeline` | `array` | Yes |  |
| `topic` | `string` | No |  |
| `topic_tags` | `mixed` | No |  |
| `total_target_ms` | `int` | Yes |  |
| `use_learned_weights` | `bool` | No |  |
| `views` | `mixed` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->AdminVideoRemixer()->create([
  "activity" => null, // string
  "clip_id" => null, // string
  "collected_at" => null, // string
  "evidence" => null, // string
  "expected_revisions" => null, // array
  "file" => null, // string
  "formula_id" => null, // string
  "formula_ids" => null, // array
  "human_role" => null, // string
  "idempotency_key" => null, // string
  "items" => null, // array
  "kim_clip_ids" => null, // array
  "kind" => null, // string
  "levels" => null, // array
  "media_enabled" => null, // bool
  "name" => null, // string
  "platform" => null, // string
  "platform_post_id" => null, // string
  "policy" => null, // array
  "post_url" => null, // string
  "posted_at" => null, // string
  "purpose" => null, // string
  "reason" => null, // string
  "revision" => null, // int
  "run_id" => null, // string
  "seconds" => null, // int
  "slots" => null, // array
  "source" => null, // string
  "source_id" => null, // string
  "source_ids" => null, // array
  "terry_clip_ids" => null, // array
  "timeline" => null, // array
  "total_target_ms" => null, // int
  "window" => null, // string
]);
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->AdminVideoRemixer()->load(["clip_id" => "clip_id"]);
```

#### `patch(array $reqdata, ?array $ctrl = null): mixed`

Change part of an existing entity: only the fields given are sent. The data must include the entity `id`. Returns the patched entity and throws on error.

```php
$result = $client->AdminVideoRemixer()->patch([
  // Only the fields to change
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->AdminVideoRemixer()->remove(["identifier" => "identifier"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->AdminVideoRemixer()->update([
  "identifier" => "identifier",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminVideoRemixerEntity`

Create a new `AdminVideoRemixerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdvanceStepEntity

```php
$advance_step = $client->AdvanceStep();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_step` | `string` | Yes |  |
| `onboarding_data_id` | `string` | Yes | UUID of the OnboardingData record |
| `success` | `bool` | Yes |  |
| `to_step` | `string` | Yes | Target step name |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->AdvanceStep()->create([
  "onboarding_data_id" => null, // string
  "to_step" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdvanceStepEntity`

Create a new `AdvanceStepEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentEntity

```php
$agent = $client->Agent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_connections` | `int` | Yes |  |
| `at_capacity` | `bool` | Yes |  |
| `id` | `string` | Yes |  |
| `is_active` | `bool` | Yes |  |
| `name` | `string` | Yes |  |
| `tiktok_stats` | `mixed` | No |  |
| `type` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Agent()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentEntity`

Create a new `AgentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentAccessCustomersHealthEntity

```php
$agent_access_customers_health = $client->AgentAccessCustomersHealth();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountType` | `mixed` | No |  |
| `agentQuota` | `int` | Yes |  |
| `assignedAgentsByType` | `array` | Yes |  |
| `assignedAgentsTotal` | `int` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `email` | `string` | Yes |  |
| `isInternalUser` | `mixed` | No |  |
| `membership` | `mixed` | No |  |
| `name` | `string` | No |  |
| `performance` | `array` | Yes |  |
| `productCount` | `int` | Yes |  |
| `subscriptionCurrentPeriodEnd` | `mixed` | No |  |
| `subscriptionDetails` | `mixed` | No |  |
| `subscriptionStatus` | `mixed` | No |  |
| `usage` | `array` | Yes |  |
| `userId` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AgentAccessCustomersHealth()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentAccessCustomersHealthEntity`

Create a new `AgentAccessCustomersHealthEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentAccessOverviewEntity

```php
$agent_access_overview = $client->AgentAccessOverview();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeUsers` | `int` | Yes |  |
| `generatedAt` | `string` | Yes |  |
| `newUsersYesterday` | `int` | Yes |  |
| `onboardingContextCounts` | `array` | Yes |  |
| `onboardingCurrentStepCounts` | `array` | Yes |  |
| `onboardingCurrentStepWindow` | `array` | Yes |  |
| `onboardingFlowVariantCounts` | `array` | Yes |  |
| `onboardingLockedUntilActivation` | `int` | Yes |  |
| `onboardingRecordsTotal` | `int` | Yes |  |
| `onboardingRecordsWindow` | `int` | Yes |  |
| `onboardingSocialScanStatusCounts` | `array` | Yes |  |
| `onboardingWebsiteScrapeStatusCounts` | `array` | Yes |  |
| `subscriptionStatusCounts` | `array` | Yes |  |
| `totalInternalUsers` | `int` | Yes |  |
| `totalUsers` | `int` | Yes |  |
| `trialStartedYesterday` | `int` | Yes |  |
| `trialingUsers` | `int` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->AgentAccessOverview()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentAccessOverviewEntity`

Create a new `AgentAccessOverviewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentAccessPhilHourlyNotificationEntity

```php
$agent_access_phil_hourly_notification = $client->AgentAccessPhilHourlyNotification();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `generatedAt` | `string` | Yes |  |
| `phoneHealth` | `array` | Yes |  |
| `scheduledPosts` | `array` | Yes |  |
| `targetDate` | `string` | Yes |  |
| `uploadPostInstagramHealth` | `array` | Yes |  |
| `uploadPostTiktokHealth` | `array` | Yes |  |
| `uploadPostYoutubeHealth` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->AgentAccessPhilHourlyNotification()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentAccessPhilHourlyNotificationEntity`

Create a new `AgentAccessPhilHourlyNotificationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentAccessPhilStatsRefreshEntity

```php
$agent_access_phil_stats_refresh = $client->AgentAccessPhilStatsRefresh();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `generatedAt` | `string` | Yes |  |
| `statsRefresh` | `array` | Yes |  |
| `targetDate` | `string` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->AgentAccessPhilStatsRefresh()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentAccessPhilStatsRefreshEntity`

Create a new `AgentAccessPhilStatsRefreshEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentAccessPhilVideoEntity

```php
$agent_access_phil_video = $client->AgentAccessPhilVideo();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `generatedAt` | `string` | Yes |  |
| `targetDate` | `string` | Yes |  |
| `videos` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->AgentAccessPhilVideo()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentAccessPhilVideoEntity`

Create a new `AgentAccessPhilVideoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentAccessUserAgentEntity

```php
$agent_access_user_agent = $client->AgentAccessUserAgent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentQuota` | `int` | Yes |  |
| `agents` | `array` | Yes |  |
| `assignedByType` | `array` | Yes |  |
| `assignedTotal` | `int` | Yes |  |
| `email` | `string` | Yes |  |
| `products` | `array` | Yes |  |
| `userId` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AgentAccessUserAgent()->list(["email" => "example"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentAccessUserAgentEntity`

Create a new `AgentAccessUserAgentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentAccessUserPhoneFarmEntity

```php
$agent_access_user_phone_farm = $client->AgentAccessUserPhoneFarm();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar` | `mixed` | No |  |
| `facebookUrl` | `mixed` | No |  |
| `id` | `string` | Yes |  |
| `instagramUrl` | `mixed` | No |  |
| `lastAdminSyncedAt` | `mixed` | No |  |
| `name` | `string` | Yes |  |
| `productId` | `mixed` | No |  |
| `productName` | `mixed` | No |  |
| `tiktokUrl` | `mixed` | No |  |
| `type` | `mixed` | No |  |
| `uploadPostPlatforms` | `mixed` | No |  |
| `youtubeUrl` | `mixed` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AgentAccessUserPhoneFarm()->list(["email" => "example"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentAccessUserPhoneFarmEntity`

Create a new `AgentAccessUserPhoneFarmEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentAccessUserPostEntity

```php
$agent_access_user_post = $client->AgentAccessUserPost();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deltaYesterday` | `int` | Yes |  |
| `expectedVideosPerDay` | `int` | Yes |  |
| `postedToday` | `int` | Yes |  |
| `postedYesterday` | `int` | Yes |  |
| `productId` | `mixed` | No |  |
| `productName` | `mixed` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AgentAccessUserPost()->list(["email" => "example"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentAccessUserPostEntity`

Create a new `AgentAccessUserPostEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentAccessUserSummaryEntity

```php
$agent_access_user_summary = $client->AgentAccessUserSummary();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deletedAt` | `mixed` | No |  |
| `id` | `string` | Yes |  |
| `isActive` | `mixed` | No |  |
| `name` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AgentAccessUserSummary()->list(["email" => "example"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentAccessUserSummaryEntity`

Create a new `AgentAccessUserSummaryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentAccessUserVideoEntity

```php
$agent_access_user_video = $client->AgentAccessUserVideo();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allTime` | `array` | Yes |  |
| `email` | `string` | Yes |  |
| `today` | `array` | Yes |  |
| `userId` | `string` | Yes |  |
| `yesterday` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->AgentAccessUserVideo()->load(["email" => "email"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentAccessUserVideoEntity`

Create a new `AgentAccessUserVideoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentAccessUserWinningAdEntity

```php
$agent_access_user_winning_ad = $client->AgentAccessUserWinningAd();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `productId` | `string` | Yes |  |
| `productName` | `string` | Yes |  |
| `winningAds` | `array` | Yes |  |
| `winningAdsCount` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AgentAccessUserWinningAd()->list(["email" => "example"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentAccessUserWinningAdEntity`

Create a new `AgentAccessUserWinningAdEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentAccessWinningAdsSummaryEntity

```php
$agent_access_winning_ads_summary = $client->AgentAccessWinningAdsSummary();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes |  |
| `name` | `string` | No |  |
| `productCount` | `int` | Yes |  |
| `productsWithWinningAds` | `int` | Yes |  |
| `subscriptionStatus` | `mixed` | No |  |
| `totalWinningAds` | `int` | Yes |  |
| `userId` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AgentAccessWinningAdsSummary()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentAccessWinningAdsSummaryEntity`

Create a new `AgentAccessWinningAdsSummaryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentDetailEntity

```php
$agent_detail = $client->AgentDetail();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeConnections` | `mixed` | No |  |
| `assignedAt` | `mixed` | No |  |
| `avatar` | `string` | Yes |  |
| `bio` | `mixed` | No |  |
| `facebookUrl` | `mixed` | No |  |
| `id` | `string` | Yes |  |
| `instagramUrl` | `mixed` | No |  |
| `isActive` | `bool` | No |  |
| `name` | `string` | Yes |  |
| `role` | `mixed` | No |  |
| `tiktokStats` | `mixed` | No |  |
| `tiktokUrl` | `mixed` | No |  |
| `type` | `string` | Yes |  |
| `uploadPostPlatforms` | `mixed` | No |  |
| `youtubeUrl` | `mixed` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AgentDetail()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->AgentDetail()->update([
  "upload_post_agent_id" => "upload_post_agent_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentDetailEntity`

Create a new `AgentDetailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentHealthEntity

```php
$agent_health = $client->AgentHealth();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `daily` | `array` | Yes |  |
| `dates` | `array` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `groups` | `array` | Yes |  |
| `latest` | `array` | Yes |  |
| `live_date` | `mixed` | No |  |
| `phone_admin_generated_at` | `string` | Yes |  |
| `platform` | `string` | No |  |
| `post_target` | `int` | Yes |  |
| `qa_managed_agent_ids` | `array` | No |  |
| `scope_prefixes` | `array` | Yes |  |
| `timezone` | `string` | Yes |  |
| `warmup_target` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AgentHealth()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentHealthEntity`

Create a new `AgentHealthEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentHealthCustomerOptionEntity

```php
$agent_health_customer_option = $client->AgentHealthCustomerOption();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_count` | `int` | Yes |  |
| `email` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AgentHealthCustomerOption()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentHealthCustomerOptionEntity`

Create a new `AgentHealthCustomerOptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentHealthDetailEntity

```php
$agent_health_detail = $client->AgentHealthDetail();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_issue_total` | `int` | No |  |
| `date` | `string` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `group_id` | `string` | Yes |  |
| `has_more` | `bool` | Yes |  |
| `issue_total` | `int` | Yes |  |
| `issues` | `array` | Yes |  |
| `limit` | `int` | Yes |  |
| `metric` | `string` | Yes |  |
| `offset` | `int` | Yes |  |
| `warmup_runs` | `array` | No |  |
| `warning_total` | `int` | No |  |
| `warnings` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AgentHealthDetail()->list(["date" => "example", "group_id" => "example"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentHealthDetailEntity`

Create a new `AgentHealthDetailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentPostEntity

```php
$agent_post = $client->AgentPost();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `int` | Yes |  |
| `error_message` | `mixed` | Yes |  |
| `id` | `string` | Yes |  |
| `likes` | `int` | Yes |  |
| `product_id` | `string` | Yes |  |
| `results` | `mixed` | Yes |  |
| `scheduled_datetime` | `string` | Yes |  |
| `source_type` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `user_email` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |
| `user_name` | `mixed` | Yes |  |
| `video_id` | `string` | Yes |  |
| `video_url` | `mixed` | Yes |  |
| `views` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AgentPost()->list(["id" => "example"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentPostEntity`

Create a new `AgentPostEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentStatEntity

```php
$agent_stat = $client->AgentStat();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agents_needed` | `int` | Yes |  |
| `dedicated_agents` | `array` | Yes |  |
| `shared_agents` | `array` | Yes |  |
| `total_agents` | `int` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->AgentStat()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentStatEntity`

Create a new `AgentStatEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentSummaryEntity

```php
$agent_summary = $client->AgentSummary();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_count` | `int` | Yes |  |
| `favicon_url` | `mixed` | No |  |
| `product_id` | `string` | Yes |  |
| `product_name` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AgentSummary()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentSummaryEntity`

Create a new `AgentSummaryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentsSummaryEntity

```php
$agents_summary = $client->AgentsSummary();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `total_agents` | `int` | Yes |  |
| `total_agents_count_sum` | `int` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->AgentsSummary()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentsSummaryEntity`

Create a new `AgentsSummaryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AnalysisStatusEntity

```php
$analysis_status = $client->AnalysisStatus();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->AnalysisStatus()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AnalysisStatusEntity`

Create a new `AnalysisStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AnalyticsPostEntity

```php
$analytics_post = $client->AnalyticsPost();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent` | `mixed` | No |  |
| `comment` | `mixed` | No |  |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `product_id` | `string` | No |  |
| `queue_position` | `mixed` | No |  |
| `results` | `mixed` | No |  |
| `scheduled_datetime` | `string` | Yes |  |
| `scraped_posts` | `mixed` | No |  |
| `source_type` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `video` | `mixed` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AnalyticsPost()->list(["date_from" => "example"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AnalyticsPostEntity`

Create a new `AnalyticsPostEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AnalyzeProductEntity

```php
$analyze_product = $client->AnalyzeProduct();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instagram_username` | `mixed` | No |  |
| `message` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->AnalyzeProduct()->create([
  "url" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AnalyzeProductEntity`

Create a new `AnalyzeProductEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AssignAgentEntity

```php
$assign_agent = $client->AssignAgent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent` | `array` | Yes | Agent information for V6. |
| `assignment` | `array` | Yes | Assignment information for V6. |
| `mock_agents` | `array` | Yes |  |
| `onboarding_data_id` | `string` | Yes | UUID of the OnboardingData record |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->AssignAgent()->create([
  "onboarding_data_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AssignAgentEntity`

Create a new `AssignAgentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AuthEntity

```php
$auth = $client->Auth();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AuthEntity`

Create a new `AuthEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AutoScheduleSettingEntity

```php
$auto_schedule_setting = $client->AutoScheduleSetting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `can_enable_repost` | `bool` | No |  |
| `effective_posted_video_reuse_percent` | `int` | Yes |  |
| `enabled_video_types` | `mixed` | No | List of enabled video type filters |
| `is_enabled` | `bool` | Yes |  |
| `lock_video_regeneration_controls` | `bool` | No |  |
| `membership_tier` | `string` | Yes |  |
| `posted_video_reuse_percent` | `mixed` | No |  |
| `product_id` | `string` | No |  |
| `repost_source` | `mixed` | No |  |
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->AutoScheduleSetting()->load();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->AutoScheduleSetting()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AutoScheduleSettingEntity`

Create a new `AutoScheduleSettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BulkTikTokStatsUpdateEntity

```php
$bulk_tik_tok_stats_update = $client->BulkTikTokStatsUpdate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `failedIds` | `array` | Yes |  |
| `updatedCount` | `int` | Yes |  |
| `updates` | `array` | Yes |  |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->BulkTikTokStatsUpdate()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BulkTikTokStatsUpdateEntity`

Create a new `BulkTikTokStatsUpdateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CarouselEntity

```php
$carousel = $client->Carousel();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `string` | Yes |  |
| `agent_name` | `string` | Yes |  |
| `audit_created_at` | `mixed` | No |  |
| `audit_snapshot_sha256` | `mixed` | No |  |
| `caption` | `mixed` | No |  |
| `comments` | `mixed` | No |  |
| `fit_score` | `mixed` | No |  |
| `format` | `string` | Yes |  |
| `formula` | `array` | No |  |
| `formula_id` | `string` | No |  |
| `formula_name` | `mixed` | No |  |
| `generation` | `array` | No |  |
| `id` | `string` | No |  |
| `image_prompt` | `mixed` | No |  |
| `likes` | `mixed` | No |  |
| `main_prompt` | `mixed` | No |  |
| `metrics_updated_at` | `mixed` | No |  |
| `post_url` | `mixed` | No |  |
| `profile_url` | `mixed` | No |  |
| `qa` | `array` | No |  |
| `qa_status` | `string` | Yes |  |
| `qa_verdict` | `mixed` | No |  |
| `quality_score` | `mixed` | No |  |
| `queue_id` | `string` | Yes |  |
| `relevance_score` | `mixed` | No |  |
| `scheduled_at` | `string` | Yes |  |
| `slide_count` | `int` | Yes |  |
| `slides` | `array` | Yes |  |
| `source` | `array` | No |  |
| `status` | `string` | Yes |  |
| `thumbnail_url` | `mixed` | No |  |
| `title` | `string` | Yes |  |
| `video_id` | `string` | Yes |  |
| `views` | `mixed` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Carousel()->create([
  "id" => null, // string
  "agent_id" => null, // string
  "agent_name" => null, // string
  "format" => null, // string
  "qa_status" => null, // string
  "queue_id" => null, // string
  "scheduled_at" => null, // string
  "slide_count" => null, // int
  "slides" => null, // array
  "status" => null, // string
  "title" => null, // string
  "video_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Carousel()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Carousel()->load(["id" => "carousel_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CarouselEntity`

Create a new `CarouselEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CarouselAgentDetailEntity

```php
$carousel_agent_detail = $client->CarouselAgentDetail();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `string` | Yes |  |
| `agent_name` | `string` | Yes |  |
| `connection_status` | `mixed` | No |  |
| `followers` | `mixed` | No |  |
| `following` | `mixed` | No |  |
| `metrics_updated_at` | `mixed` | No |  |
| `phone_admin_status` | `string` | Yes |  |
| `profile_likes` | `mixed` | No |  |
| `profile_url` | `mixed` | No |  |
| `warmup_days` | `mixed` | No |  |
| `warmup_hold_until` | `mixed` | No |  |
| `warmup_status` | `string` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->CarouselAgentDetail()->load(["agent_id" => "agent_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CarouselAgentDetailEntity`

Create a new `CarouselAgentDetailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CarouselStatusEntity

```php
$carousel_status = $client->CarouselStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `caption` | `mixed` | Yes |  |
| `error` | `mixed` | No |  |
| `id` | `string` | No |  |
| `image_model` | `mixed` | No |  |
| `image_provider` | `mixed` | No |  |
| `image_task_id` | `string` | No |  |
| `image_url` | `mixed` | Yes |  |
| `index` | `int` | Yes |  |
| `prompt` | `mixed` | Yes |  |
| `status` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->CarouselStatus()->list(["id" => "example"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CarouselStatusEntity`

Create a new `CarouselStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ChatEntity

```php
$chat = $client->Chat();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `idempotencyKey` | `string` | Yes |  |
| `message` | `string` | Yes |  |
| `sessionId` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Chat()->create([
  "session_id" => null, // string
  "idempotencyKey" => null, // string
  "message" => null, // string
  "sessionId" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ChatEntity`

Create a new `ChatEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ChatHistoryEntity

```php
$chat_history = $client->ChatHistory();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `chatSubVariant` | `string` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `messages` | `array` | Yes |  |
| `model` | `mixed` | No |  |
| `onboardingDataId` | `string` | Yes |  |
| `routeRecommendation` | `mixed` | No |  |
| `salesStage` | `string` | Yes |  |
| `selectedPlan` | `mixed` | No |  |
| `session` | `array` | Yes |  |
| `sessionId` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ChatHistory()->create([
  "onboardingDataId" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->ChatHistory()->load(["session_id" => "session_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ChatHistoryEntity`

Create a new `ChatHistoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ChatSessionEntity

```php
$chat_session = $client->ChatSession();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `chatSubVariant` | `string` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `model` | `mixed` | No |  |
| `plan` | `mixed` | No |  |
| `route` | `mixed` | No |  |
| `routeRecommendation` | `mixed` | No |  |
| `salesStage` | `string` | Yes |  |
| `selectedPlan` | `mixed` | No |  |
| `sessionId` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ChatSession()->create([
  "session_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ChatSessionEntity`

Create a new `ChatSessionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CommentEntity

```php
$comment = $client->Comment();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Comment()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CommentEntity`

Create a new `CommentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CommentCampaignEntity

```php
$comment_campaign = $client->CommentCampaign();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_daily_limit` | `int` | No |  |
| `account_weekly_limit` | `int` | No |  |
| `action` | `string` | Yes |  |
| `active_days_per_week` | `int` | No |  |
| `agent_id` | `string` | Yes |  |
| `allowlist` | `array` | No |  |
| `analysis_daily_limit` | `int` | No |  |
| `analysis_model` | `string` | No |  |
| `analysis_reservation_usd` | `float` | No |  |
| `approved_markets` | `array` | No |  |
| `brand_forward_enabled` | `bool` | No |  |
| `briefs` | `array` | No |  |
| `candidate_only` | `bool` | No |  |
| `claims` | `array` | No |  |
| `cohort_removal_threshold` | `int` | No |  |
| `daily_cost_ceiling_usd` | `float` | No |  |
| `delivery_mode` | `string` | No |  |
| `disclosure_mode` | `string` | No |  |
| `disclosure_template` | `string` | No |  |
| `draft_options_count` | `int` | No |  |
| `draft_review_reservation_usd` | `float` | No |  |
| `exceptional_daily_cap_approved` | `bool` | No |  |
| `execution_enabled` | `bool` | No |  |
| `experiment_styles` | `array` | No |  |
| `inventory_factor` | `float` | No |  |
| `keywords` | `array` | No |  |
| `max_duration_seconds` | `mixed` | No |  |
| `metadata_pass_rate` | `float` | No |  |
| `min_interval_minutes` | `int` | No |  |
| `mode` | `string` | No |  |
| `monitored_creators` | `array` | No |  |
| `platform` | `string` | No |  |
| `platform_permission_evidence` | `string` | No |  |
| `policy_approved_by` | `string` | No |  |
| `policy_expires_at` | `mixed` | No |  |
| `policy_version` | `string` | No |  |
| `product_daily_limit` | `int` | No |  |
| `qualification_rate` | `float` | No |  |
| `raw_daily_limit` | `int` | No |  |
| `raw_result_reservation_usd` | `float` | No |  |
| `reason` | `string` | Yes |  |
| `replies_enabled` | `bool` | No |  |
| `request_key` | `string` | Yes |  |
| `reviewer_model` | `string` | No |  |
| `scan_interval_hours` | `int` | No |  |
| `search_change_reason` | `string` | No |  |
| `search_effective_at` | `mixed` | No |  |
| `shadow_sample_limit` | `int` | No |  |
| `spent_seconds` | `mixed` | No |  |
| `task_ttl_hours` | `int` | No |  |
| `top_comment_analysis_enabled` | `bool` | No |  |
| `writer_model` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->CommentCampaign()->create([
  "product_id" => null, // string
  "action" => null, // string
  "agent_id" => null, // string
  "reason" => null, // string
  "request_key" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->CommentCampaign()->load(["product_id" => "product_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->CommentCampaign()->update([
  "product_id" => "product_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CommentCampaignEntity`

Create a new `CommentCampaignEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CompleteChatCheckoutEntity

```php
$complete_chat_checkout = $client->CompleteChatCheckout();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `mixed` | No |  |
| `onboarding_data_id` | `string` | Yes |  |
| `product_id` | `string` | No |  |
| `ready` | `bool` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->CompleteChatCheckout()->create([
  "onboarding_data_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CompleteChatCheckoutEntity`

Create a new `CompleteChatCheckoutEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreateBlackoutSora2VideoEntity

```php
$create_blackout_sora2_video = $client->CreateBlackoutSora2Video();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `main_prompt` | `string` | Yes |  |
| `media_asset_id` | `string` | Yes |  |
| `product_id` | `string` | Yes |  |
| `requires_polling` | `bool` | No |  |
| `video` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->CreateBlackoutSora2Video()->create([
  "main_prompt" => null, // string
  "media_asset_id" => null, // string
  "product_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreateBlackoutSora2VideoEntity`

Create a new `CreateBlackoutSora2VideoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreateCarouselEntity

```php
$create_carousel = $client->CreateCarousel();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `copy_mode` | `mixed` | No |  |
| `expected_owner_user_id` | `string` | No |  |
| `expected_product_id` | `string` | No |  |
| `expected_product_name` | `mixed` | No |  |
| `image_model` | `string` | No |  |
| `mention_product` | `bool` | No |  |
| `message` | `string` | Yes |  |
| `num_slides` | `int` | No |  |
| `owner_user_id` | `string` | No |  |
| `product_id` | `string` | No | Product ID to use. |
| `product_name` | `mixed` | No |  |
| `product_placement` | `string` | No |  |
| `request_id` | `string` | No |  |
| `script_style_custom` | `mixed` | No |  |
| `script_style_id` | `string` | No |  |
| `selected_hook` | `mixed` | No |  |
| `status` | `string` | Yes |  |
| `success` | `bool` | Yes |  |
| `template_id` | `string` | Yes |  |
| `video_id` | `string` | Yes |  |
| `visual_style_custom` | `mixed` | No |  |
| `visual_style_id` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->CreateCarousel()->create([
  "template_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreateCarouselEntity`

Create a new `CreateCarouselEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreateProductEntity

```php
$create_product = $client->CreateProduct();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `onboarding_data_id` | `string` | Yes | UUID of the OnboardingData record |
| `product_id` | `string` | Yes |  |
| `success` | `bool` | Yes |  |
| `videos_queued` | `int` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->CreateProduct()->create([
  "onboarding_data_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreateProductEntity`

Create a new `CreateProductEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreateResetProductV6Entity

```php
$create_reset_product_v6 = $client->CreateResetProductV6();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agents_transferred` | `int` | Yes |  |
| `credits_deducted` | `int` | Yes |  |
| `onboarding_data_id` | `string` | Yes |  |
| `product_id` | `string` | Yes |  |
| `remaining_credits` | `int` | Yes |  |
| `success` | `bool` | Yes |  |
| `videos_queued` | `int` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->CreateResetProductV6()->create([
  "onboarding_data_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreateResetProductV6Entity`

Create a new `CreateResetProductV6Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreateSora2VideoEntity

```php
$create_sora2_video = $client->CreateSora2Video();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `image_prompt` | `mixed` | No |  |
| `main_prompt` | `string` | Yes |  |
| `model` | `string` | No |  |
| `requires_polling` | `bool` | No |  |
| `seconds` | `string` | No |  |
| `size` | `string` | No |  |
| `video` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->CreateSora2Video()->create([
  "main_prompt" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreateSora2VideoEntity`

Create a new `CreateSora2VideoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreateVariationEntity

```php
$create_variation = $client->CreateVariation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hook_duration` | `int` | Yes |  |
| `media_asset_id` | `string` | Yes |  |
| `message` | `string` | Yes |  |
| `product_id` | `string` | Yes |  |
| `prompt` | `string` | Yes |  |
| `task_id` | `string` | No |  |
| `video_id` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->CreateVariation()->create([
  "hook_duration" => null, // int
  "media_asset_id" => null, // string
  "product_id" => null, // string
  "prompt" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreateVariationEntity`

Create a new `CreateVariationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomerEntity

```php
$customer = $client->Customer();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `mixed` | No |  |
| `assigned_agents_count` | `int` | Yes |  |
| `email` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `is_migrated` | `bool` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Customer()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomerEntity`

Create a new `CustomerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomerHealthEntity

```php
$customer_health = $client->CustomerHealth();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_agents` | `array` | Yes |  |
| `available_dates` | `array` | Yes |  |
| `date` | `string` | Yes |  |
| `email` | `string` | Yes |  |
| `entries` | `array` | Yes |  |
| `id` | `string` | No |  |
| `performance_overview` | `array` | Yes |  |
| `platform_coverage_summary` | `array` | Yes |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->CustomerHealth()->load(["id" => "customer_health_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomerHealthEntity`

Create a new `CustomerHealthEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomerHealthAllCustomersItemEntity

```php
$customer_health_all_customers_item = $client->CustomerHealthAllCustomersItem();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `mixed` | No |  |
| `assigned_agents_count` | `int` | Yes |  |
| `daily_stats` | `array` | Yes |  |
| `email` | `string` | Yes |  |
| `is_migrated` | `bool` | No |  |
| `total_views` | `int` | Yes |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->CustomerHealthAllCustomersItem()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomerHealthAllCustomersItemEntity`

Create a new `CustomerHealthAllCustomersItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomerHealthViewsSummaryEntity

```php
$customer_health_views_summary = $client->CustomerHealthViewsSummary();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `average_views_per_result` | `int` | Yes |  |
| `date` | `string` | Yes |  |
| `end_date` | `mixed` | No |  |
| `paid_users_count` | `int` | Yes |  |
| `posted_results` | `int` | Yes |  |
| `range` | `string` | Yes |  |
| `start_date` | `mixed` | No |  |
| `top_users` | `array` | Yes |  |
| `total_views` | `int` | Yes |  |
| `trend` | `array` | Yes |  |
| `trend_granularity` | `string` | Yes |  |
| `user_email` | `mixed` | No |  |
| `user_id` | `string` | No |  |
| `users_with_views` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->CustomerHealthViewsSummary()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomerHealthViewsSummaryEntity`

Create a new `CustomerHealthViewsSummaryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DailyEntity

```php
$daily = $client->Daily();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Daily()->create([
  "id" => null, // string
  "day" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DailyEntity`

Create a new `DailyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DailyStatusEntity

```php
$daily_status = $client->DailyStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->DailyStatus()->load(["id" => "daily_status_id", "day" => "day"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DailyStatusEntity`

Create a new `DailyStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DedicatedAgentsDashboardEntity

```php
$dedicated_agents_dashboard = $client->DedicatedAgentsDashboard();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_connections` | `int` | Yes |  |
| `assigned_user_id` | `string` | No |  |
| `assigned_user_ids` | `array` | No |  |
| `bio` | `mixed` | Yes |  |
| `id` | `string` | Yes |  |
| `instagram_url` | `mixed` | No |  |
| `is_active` | `bool` | Yes |  |
| `last_admin_synced_at` | `mixed` | No |  |
| `name` | `string` | Yes |  |
| `role` | `mixed` | Yes |  |
| `tiktok_stats` | `mixed` | No |  |
| `tiktok_url` | `mixed` | No |  |
| `today_failed_entries` | `array` | No |  |
| `today_stats` | `array` | Yes |  |
| `upload_post_platforms` | `mixed` | No |  |
| `upload_post_profile` | `mixed` | No |  |
| `yesterday_failed_entries` | `array` | No |  |
| `yesterday_stats` | `array` | Yes |  |
| `youtube_url` | `mixed` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->DedicatedAgentsDashboard()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DedicatedAgentsDashboardEntity`

Create a new `DedicatedAgentsDashboardEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EnterpriseAgentEntity

```php
$enterprise_agent = $client->EnterpriseAgent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | Yes |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->EnterpriseAgent()->create([
  "product_id" => null, // string
  "source_product_id" => null, // string
  "target_product_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->EnterpriseAgent()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EnterpriseAgentEntity`

Create a new `EnterpriseAgentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EnterpriseProductEntity

```php
$enterprise_product = $client->EnterpriseProduct();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->EnterpriseProduct()->load(["product_id" => "product_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EnterpriseProductEntity`

Create a new `EnterpriseProductEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ExactAvailabilityEntity

```php
$exact_availability = $client->ExactAvailability();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->ExactAvailability()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ExactAvailabilityEntity`

Create a new `ExactAvailabilityEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ExactFormulaEntity

```php
$exact_formula = $client->ExactFormula();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->ExactFormula()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ExactFormulaEntity`

Create a new `ExactFormulaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ExtractV2Entity

```php
$extract_v2 = $client->ExtractV2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instagram_username` | `mixed` | No |  |
| `message` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ExtractV2()->create([
  "url" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ExtractV2Entity`

Create a new `ExtractV2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FailedPostEntity

```php
$failed_post = $client->FailedPost();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `string` | Yes |  |
| `agent_name` | `mixed` | Yes |  |
| `agent_platforms` | `mixed` | Yes |  |
| `error_message` | `mixed` | Yes |  |
| `id` | `string` | Yes |  |
| `product_id` | `string` | Yes |  |
| `results` | `mixed` | Yes |  |
| `scheduled_datetime` | `string` | Yes |  |
| `source_type` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `user_email` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |
| `user_name` | `mixed` | Yes |  |
| `video_id` | `string` | Yes |  |
| `video_url` | `mixed` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->FailedPost()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FailedPostEntity`

Create a new `FailedPostEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FileEntity

```php
$file = $client->File();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->File()->create([
  "file" => null, // string
]);
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FileEntity`

Create a new `FileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GenerateBlackoutSora2PromptEntity

```php
$generate_blackout_sora2_prompt = $client->GenerateBlackoutSora2Prompt();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `media_asset_id` | `string` | Yes |  |
| `product_id` | `string` | Yes |  |
| `prompt` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->GenerateBlackoutSora2Prompt()->create([
  "media_asset_id" => null, // string
  "product_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GenerateBlackoutSora2PromptEntity`

Create a new `GenerateBlackoutSora2PromptEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GeneratePomelliDemoEntity

```php
$generate_pomelli_demo = $client->GeneratePomelliDemo();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_demo_count` | `int` | Yes |  |
| `max_demos` | `int` | No |  |
| `message` | `string` | Yes |  |
| `product_id` | `string` | Yes | UUID of the Product |
| `success` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->GeneratePomelliDemo()->create([
  "product_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GeneratePomelliDemoEntity`

Create a new `GeneratePomelliDemoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GeneratePromptEntity

```php
$generate_prompt = $client->GeneratePrompt();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hook_duration` | `int` | Yes |  |
| `media_asset_id` | `string` | Yes |  |
| `media_asset_url` | `string` | Yes |  |
| `prompt` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->GeneratePrompt()->create([
  "media_asset_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GeneratePromptEntity`

Create a new `GeneratePromptEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GenerateSora2PromptEntity

```php
$generate_sora2_prompt = $client->GenerateSora2Prompt();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `prompt` | `string` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->GenerateSora2Prompt()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GenerateSora2PromptEntity`

Create a new `GenerateSora2PromptEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## HealthrxEntity

```php
$healthrx = $client->Healthrx();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | No |  |
| `action` | `string` | No |  |
| `agent_id` | `string` | Yes |  |
| `attempt` | `int` | Yes |  |
| `avatar_present` | `bool` | No |  |
| `benchmark_set` | `string` | Yes |  |
| `commercial` | `bool` | No |  |
| `commercial_license_evidence` | `string` | Yes |  |
| `content_id` | `string` | Yes |  |
| `dimensions` | `array` | Yes |  |
| `duration_seconds` | `int` | No |  |
| `evidence` | `string` | Yes |  |
| `evidence_urls` | `array` | Yes |  |
| `external_key` | `string` | Yes |  |
| `format` | `string` | No |  |
| `includes_all_attempt_costs` | `bool` | No |  |
| `input_specification` | `array` | Yes |  |
| `kind` | `string` | Yes |  |
| `level` | `int` | No |  |
| `measured_at` | `string` | Yes |  |
| `model_version` | `string` | Yes |  |
| `paid_campaign_id` | `string` | No |  |
| `parent_content_id` | `string` | No |  |
| `paused` | `bool` | Yes |  |
| `pillar` | `string` | Yes |  |
| `profile` | `array` | Yes |  |
| `promotion_evidence` | `string` | No |  |
| `provider` | `string` | Yes |  |
| `provider_invoice_evidence` | `string` | Yes |  |
| `reason` | `string` | Yes |  |
| `reference_version` | `string` | Yes |  |
| `request_key` | `string` | Yes |  |
| `scope` | `string` | No |  |
| `test_variable` | `string` | Yes |  |
| `topic` | `string` | Yes |  |
| `total_cost_usd` | `float` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Healthrx()->create([
  "product_id" => null, // string
  "agent_id" => null, // string
  "attempt" => null, // int
  "benchmark_set" => null, // string
  "commercial_license_evidence" => null, // string
  "dimensions" => null, // array
  "evidence" => null, // string
  "evidence_urls" => null, // array
  "external_key" => null, // string
  "input_specification" => null, // array
  "kind" => null, // string
  "measured_at" => null, // string
  "model_version" => null, // string
  "paused" => null, // bool
  "pillar" => null, // string
  "profile" => null, // array
  "provider" => null, // string
  "provider_invoice_evidence" => null, // string
  "reason" => null, // string
  "reference_version" => null, // string
  "request_key" => null, // string
  "test_variable" => null, // string
  "topic" => null, // string
  "total_cost_usd" => null, // float
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Healthrx()->load(["product_id" => "product_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): HealthrxEntity`

Create a new `HealthrxEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## InitResetProductV6Entity

```php
$init_reset_product_v6 = $client->InitResetProductV6();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_schedule_disabled` | `bool` | Yes |  |
| `old_product_id` | `string` | Yes |  |
| `product_id` | `string` | No |  |
| `queue_entries_cleared` | `int` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->InitResetProductV6()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): InitResetProductV6Entity`

Create a new `InitResetProductV6Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IriEntity

```php
$iri = $client->Iri();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `correlationId` | `mixed` | No |  |
| `idempotencyKey` | `string` | Yes |  |
| `productId` | `mixed` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Iri()->create([
  "connector_id" => null, // string
  "idempotencyKey" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IriEntity`

Create a new `IriEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IrisCapabilityEntity

```php
$iris_capability = $client->IrisCapability();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `capability` | `string` | Yes |  |
| `correlationId` | `string` | Yes |  |
| `errorCode` | `mixed` | No |  |
| `externalProductId` | `mixed` | No |  |
| `externalUserId` | `string` | Yes |  |
| `id` | `string` | No |  |
| `idempotencyKey` | `string` | Yes |  |
| `input` | `array` | No |  |
| `membershipId` | `mixed` | No |  |
| `message` | `mixed` | No |  |
| `ok` | `bool` | Yes |  |
| `platformAccountId` | `mixed` | No |  |
| `platformLinkId` | `mixed` | No |  |
| `productScope` | `string` | Yes |  |
| `requestedBy` | `array` | No |  |
| `result` | `array` | No |  |
| `retryable` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->IrisCapability()->create([
  "id" => null, // string
  "capability" => null, // string
  "correlationId" => null, // string
  "externalUserId" => null, // string
  "idempotencyKey" => null, // string
  "productScope" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IrisCapabilityEntity`

Create a new `IrisCapabilityEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IrisChatEntity

```php
$iris_chat = $client->IrisChat();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artifacts` | `array` | No |  |
| `correlationId` | `string` | Yes |  |
| `idempotencyKey` | `string` | Yes |  |
| `message` | `string` | Yes |  |
| `mode` | `string` | Yes |  |
| `ok` | `bool` | No |  |
| `pageContext` | `array` | No |  |
| `productId` | `mixed` | No |  |
| `runtimeStatus` | `string` | Yes |  |
| `sessionId` | `mixed` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->IrisChat()->create([
  "correlationId" => null, // string
  "idempotencyKey" => null, // string
  "message" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IrisChatEntity`

Create a new `IrisChatEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IrisConnectorEntity

```php
$iris_connector = $client->IrisConnector();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectors` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->IrisConnector()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IrisConnectorEntity`

Create a new `IrisConnectorEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IrisStatusEntity

```php
$iris_status = $client->IrisStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectorsPreview` | `array` | No |  |
| `product` | `mixed` | No |  |
| `status` | `array` | Yes |  |
| `tasksPreview` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->IrisStatus()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IrisStatusEntity`

Create a new `IrisStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IrisTaskEntity

```php
$iris_task = $client->IrisTask();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approvalRequired` | `bool` | No |  |
| `cadence` | `string` | No |  |
| `capability` | `mixed` | No |  |
| `completed` | `array` | No |  |
| `description` | `string` | No |  |
| `discover` | `array` | No |  |
| `productId` | `mixed` | No |  |
| `recurring` | `array` | No |  |
| `requiredConnectors` | `array` | No |  |
| `title` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->IrisTask()->create([
  "title" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->IrisTask()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IrisTaskEntity`

Create a new `IrisTaskEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IrisUsageEntity

```php
$iris_usage = $client->IrisUsage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `eventCount` | `int` | No |  |
| `events` | `array` | No |  |
| `membershipId` | `mixed` | No |  |
| `productScope` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->IrisUsage()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IrisUsageEntity`

Create a new `IrisUsageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LandingEntity

```php
$landing = $client->Landing();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Landing()->create([
  "index" => null, // int
  "file" => null, // string
]);
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LandingEntity`

Create a new `LandingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LandingStatEntity

```php
$landing_stat = $client->LandingStat();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `landing` | `array` | Yes |  |
| `microhub` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->LandingStat()->load(["slug" => "slug"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LandingStatEntity`

Create a new `LandingStatEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LandingStatusEntity

```php
$landing_status = $client->LandingStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errorMessage` | `mixed` | No |  |
| `landingStatus` | `string` | Yes |  |
| `microhubStatus` | `string` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->LandingStatus()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LandingStatusEntity`

Create a new `LandingStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LinkInBioEntity

```php
$link_in_bio = $client->LinkInBio();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `linkInBioType` | `string` | Yes |  |
| `redirectUrl` | `string` | Yes |  |
| `slug` | `string` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->LinkInBio()->load(["slug" => "slug"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LinkInBioEntity`

Create a new `LinkInBioEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LinkInDmEntity

```php
$link_in_dm = $client->LinkInDm();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `linkInDmsType` | `string` | Yes |  |
| `redirectUrl` | `string` | Yes |  |
| `slug` | `string` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->LinkInDm()->load(["slug" => "slug"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LinkInDmEntity`

Create a new `LinkInDmEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LinkInPostEntity

```php
$link_in_post = $client->LinkInPost();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `linkInPostsType` | `string` | Yes |  |
| `redirectUrl` | `string` | Yes |  |
| `showLinkInFirstComment` | `bool` | Yes |  |
| `slug` | `string` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->LinkInPost()->load(["slug" => "slug"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LinkInPostEntity`

Create a new `LinkInPostEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LinkUserEntity

```php
$link_user = $client->LinkUser();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `already_linked` | `bool` | No |  |
| `onboarding_data_id` | `string` | Yes | UUID of the OnboardingData record |
| `success` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->LinkUser()->create([
  "onboarding_data_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LinkUserEntity`

Create a new `LinkUserEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MediaAssetEntity

```php
$media_asset = $client->MediaAsset();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `description` | `string` | No |  |
| `file` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `media_assets` | `array` | Yes |  |
| `onboardingDataId` | `mixed` | No |  |
| `onboarding_data_id` | `string` | Yes |  |
| `productId` | `mixed` | No |  |
| `product_id` | `string` | No |  |
| `source` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `usedAt` | `mixed` | No |  |
| `veo3VideoId` | `mixed` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->MediaAsset()->create([
  "category" => null, // string
  "createdAt" => null, // string
  "file" => null, // string
  "id" => null, // string
  "media_assets" => null, // array
  "onboarding_data_id" => null, // string
  "source" => null, // string
  "type" => null, // string
  "updatedAt" => null, // string
  "url" => null, // string
]);
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->MediaAsset()->load(["id" => "media_asset_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MediaAssetEntity`

Create a new `MediaAssetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MenEntity

```php
$men = $client->Men();
```

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Men()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MenEntity`

Create a new `MenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MicrodramaEntity

```php
$microdrama = $client->Microdrama();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `evidence` | `array` | Yes |  |
| `expected_revision` | `int` | Yes |  |
| `idempotency_key` | `string` | Yes |  |
| `issues` | `array` | No |  |
| `reason` | `string` | Yes |  |
| `role` | `string` | Yes |  |
| `scores` | `array` | Yes |  |
| `selected_premise_id` | `string` | No |  |
| `stage` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `subject_hash` | `string` | Yes |  |
| `title` | `string` | No |  |
| `verdict` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Microdrama()->create([
  "episode_id" => null, // string
  "evidence" => null, // array
  "expected_revision" => null, // int
  "idempotency_key" => null, // string
  "reason" => null, // string
  "role" => null, // string
  "scores" => null, // array
  "stage" => null, // string
  "status" => null, // string
  "subject_hash" => null, // string
  "verdict" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Microdrama()->load(["episode_id" => "episode_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->Microdrama()->update([
  "episode_id" => "episode_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MicrodramaEntity`

Create a new `MicrodramaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MicrohubPublicEntity

```php
$microhub_public = $client->MicrohubPublic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bio` | `mixed` | No |  |
| `ctaButtonText` | `mixed` | No |  |
| `ctaDescription` | `mixed` | No |  |
| `ctaLink` | `mixed` | No |  |
| `ctaTitle` | `mixed` | No |  |
| `headerImageUrl` | `mixed` | No |  |
| `links` | `array` | No |  |
| `name` | `string` | No |  |
| `profileImageUrl` | `mixed` | No |  |
| `slug` | `string` | Yes |  |
| `socialLinks` | `array` | No |  |
| `testimonials` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->MicrohubPublic()->load(["slug" => "slug"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MicrohubPublicEntity`

Create a new `MicrohubPublicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OnboardingStatusEntity

```php
$onboarding_status = $client->OnboardingStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `int` | No |  |
| `cover_image_url` | `mixed` | No |  |
| `id` | `string` | Yes |  |
| `likes` | `int` | No |  |
| `platform` | `string` | Yes |  |
| `video_url` | `mixed` | No |  |
| `views` | `int` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->OnboardingStatus()->list(["oid" => "example"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OnboardingStatusEntity`

Create a new `OnboardingStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OnboardingV6Entity

```php
$onboarding_v6 = $client->OnboardingV6();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->OnboardingV6()->remove(["media_asset_id" => "media_asset_id", "onboarding_data_id" => "onboarding_data_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OnboardingV6Entity`

Create a new `OnboardingV6Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PaidUserEntity

```php
$paid_user = $client->PaidUser();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agents_count` | `int` | Yes |  |
| `assigned_agents_count` | `int` | No |  |
| `auto_schedule_enabled` | `mixed` | Yes |  |
| `credits` | `int` | Yes |  |
| `effective_agents_count` | `int` | Yes |  |
| `email` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `is_internal_user` | `bool` | No |  |
| `is_migrated_user` | `bool` | No |  |
| `membership` | `mixed` | Yes |  |
| `scheduled_queue_count` | `int` | Yes |  |
| `subscription_details` | `mixed` | No |  |
| `subscription_status` | `mixed` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->PaidUser()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PaidUserEntity`

Create a new `PaidUserEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PexelEntity

```php
$pexel = $client->Pexel();
```

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Pexel()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PexelEntity`

Create a new `PexelEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PhoneAdminAvailableAgentSourceEntity

```php
$phone_admin_available_agent_source = $client->PhoneAdminAvailableAgentSource();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_count` | `int` | Yes |  |
| `pc_name` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->PhoneAdminAvailableAgentSource()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PhoneAdminAvailableAgentSourceEntity`

Create a new `PhoneAdminAvailableAgentSourceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProductEntity

```php
$product = $client->Product();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_count` | `int` | Yes |  |
| `agents` | `array` | Yes |  |
| `createdAt` | `mixed` | No |  |
| `demoVideos` | `mixed` | No |  |
| `description` | `string` | No |  |
| `favicon_url` | `mixed` | No |  |
| `howItWorks` | `mixed` | No |  |
| `how_it_works` | `mixed` | No |  |
| `id` | `string` | Yes |  |
| `images` | `mixed` | No |  |
| `initial_agents` | `int` | No |  |
| `instagramHandle` | `mixed` | No |  |
| `instagram_handle` | `mixed` | No |  |
| `isActive` | `mixed` | No |  |
| `isApp` | `mixed` | No |  |
| `is_active` | `bool` | Yes |  |
| `is_app` | `bool` | No |  |
| `language` | `mixed` | No |  |
| `mediaAssets` | `mixed` | No |  |
| `media_asset_ids` | `mixed` | No |  |
| `media_assets` | `mixed` | No |  |
| `name` | `string` | Yes |  |
| `otherInstructions` | `mixed` | No |  |
| `other_instructions` | `mixed` | No |  |
| `outroVideo` | `mixed` | No |  |
| `pexelsVideos` | `mixed` | No |  |
| `pricing` | `mixed` | No |  |
| `pricingAndOffers` | `mixed` | No |  |
| `pricing_and_offers` | `mixed` | No |  |
| `product_demo_ids` | `array` | No |  |
| `product_details` | `array` | Yes | Product details for enterprise product creation |
| `product_id` | `string` | Yes |  |
| `product_name` | `string` | Yes |  |
| `product_url` | `string` | Yes |  |
| `pronunciation` | `mixed` | No |  |
| `regenerate_sora2` | `bool` | No |  |
| `repostSource` | `mixed` | No |  |
| `repost_source` | `mixed` | No |  |
| `screenshot_url` | `mixed` | No |  |
| `social_post_ids` | `array` | No |  |
| `targetAudience` | `mixed` | No |  |
| `target_audience` | `mixed` | No |  |
| `templateProductId` | `mixed` | No |  |
| `tiktokHandle` | `mixed` | No |  |
| `tiktok_handle` | `mixed` | No |  |
| `total_count` | `int` | Yes |  |
| `updatedAt` | `mixed` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Product()->create([
  "product_details" => null, // array
  "product_url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Product()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Product()->load(["id" => "product_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->Product()->remove(["id" => "product_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->Product()->update([
  "id" => "product_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProductEntity`

Create a new `ProductEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProductDashboardEntity

```php
$product_dashboard = $client->ProductDashboard();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agents` | `array` | Yes |  |
| `date` | `string` | Yes |  |
| `pagination` | `array` | Yes |  |
| `phone_admin_error` | `mixed` | No |  |
| `products` | `array` | Yes |  |
| `selected_product` | `mixed` | Yes |  |
| `summary` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->ProductDashboard()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProductDashboardEntity`

Create a new `ProductDashboardEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProductDashboardViewEntity

```php
$product_dashboard_view = $client->ProductDashboardView();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes |  |
| `views` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->ProductDashboardView()->list(["product_id" => "example"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProductDashboardViewEntity`

Create a new `ProductDashboardViewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProductDemoEntity

```php
$product_demo = $client->ProductDemo();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->ProductDemo()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProductDemoEntity`

Create a new `ProductDemoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProductLandingEntity

```php
$product_landing = $client->ProductLanding();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bio` | `mixed` | No |  |
| `commentingOnMyPosts` | `bool` | Yes |  |
| `commentingOnOthersPosts` | `bool` | Yes |  |
| `ctaButtonText` | `mixed` | No |  |
| `ctaDescription` | `mixed` | No |  |
| `ctaLink` | `mixed` | No |  |
| `ctaTitle` | `mixed` | No |  |
| `dmCommenters` | `bool` | Yes |  |
| `dmInitialMessagePrompt` | `mixed` | No |  |
| `dmOngoingResponsePrompt` | `mixed` | No |  |
| `firstCommentTextBeforeLink` | `mixed` | No |  |
| `headerImageUrl` | `mixed` | No |  |
| `id` | `string` | Yes |  |
| `landingHtmlUrl` | `mixed` | No |  |
| `landingLastGeneratedAt` | `mixed` | No |  |
| `landingReferenceScreenshotUrl` | `mixed` | No |  |
| `landingScreenshotUrl` | `mixed` | No |  |
| `landingStatus` | `string` | Yes |  |
| `landingUrl` | `string` | Yes |  |
| `linkInBioType` | `string` | Yes |  |
| `linkInDmsType` | `string` | Yes |  |
| `linkInPostsType` | `string` | Yes |  |
| `links` | `mixed` | No |  |
| `microhubBio` | `mixed` | No |  |
| `microhubCtaButtonText` | `mixed` | No |  |
| `microhubCtaDescription` | `mixed` | No |  |
| `microhubCtaLink` | `mixed` | No |  |
| `microhubCtaTitle` | `mixed` | No |  |
| `microhubHeaderImageUrl` | `mixed` | No |  |
| `microhubLinks` | `array` | No |  |
| `microhubName` | `mixed` | No |  |
| `microhubProfileImageUrl` | `mixed` | No |  |
| `microhubScreenshotUrl` | `mixed` | No |  |
| `microhubSocialLinks` | `array` | No |  |
| `microhubStatus` | `string` | Yes |  |
| `microhubTestimonials` | `array` | No |  |
| `microhubUrl` | `string` | Yes |  |
| `myPostsStylePrompt` | `mixed` | No |  |
| `name` | `string` | No |  |
| `othersStylePrompt` | `mixed` | No |  |
| `othersTargetMarketPrompt` | `mixed` | No |  |
| `productLinkSelection` | `string` | Yes |  |
| `productUrl` | `mixed` | No |  |
| `profileImageUrl` | `mixed` | No |  |
| `shortLink` | `mixed` | No |  |
| `shortLinkKeyword` | `mixed` | No |  |
| `showLinkInFirstComment` | `bool` | Yes |  |
| `slug` | `string` | Yes |  |
| `socialLinks` | `mixed` | No |  |
| `testimonials` | `mixed` | No |  |

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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->ProductLanding()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->ProductLanding()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProductLandingEntity`

Create a new `ProductLandingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PublicResumeStatusEntity

```php
$public_resume_status = $client->PublicResumeStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `can_resume_prelogin` | `bool` | No |  |
| `content_collection_ready` | `bool` | No |  |
| `current_step` | `mixed` | No |  |
| `exists` | `bool` | Yes |  |
| `flow_variant` | `mixed` | No |  |
| `repost_content_count` | `int` | No |  |
| `repost_source` | `mixed` | No |  |
| `requires_repost_content` | `bool` | No |  |
| `skip_demo` | `bool` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->PublicResumeStatus()->load(["oid" => "oid"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PublicResumeStatusEntity`

Create a new `PublicResumeStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReRollVideoEntity

```php
$re_roll_video = $client->ReRollVideo();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `queue_id` | `string` | Yes |  |
| `requires_polling` | `bool` | No |  |
| `skip_credit_check` | `bool` | No |  |
| `video` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ReRollVideo()->create([
  "queue_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReRollVideoEntity`

Create a new `ReRollVideoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReadRootGetEntity

```php
$read_root_get = $client->ReadRootGet();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->ReadRootGet()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReadRootGetEntity`

Create a new `ReadRootGetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RecordDemoBookedEntity

```php
$record_demo_booked = $client->RecordDemoBooked();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calendlyEventUri` | `mixed` | No |  |
| `calendlyInviteeUri` | `mixed` | No |  |
| `message` | `array` | Yes |  |
| `session` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->RecordDemoBooked()->create([
  "session_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RecordDemoBookedEntity`

Create a new `RecordDemoBookedEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RefreshStatEntity

```php
$refresh_stat = $client->RefreshStat();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date_from` | `mixed` | No | Start date to refresh stats for (defaults to yesterday) |
| `date_to` | `mixed` | No | End date to refresh stats for (defaults to date_from) |
| `entries_found` | `int` | Yes |  |
| `message` | `string` | Yes |  |
| `provider` | `string` | Yes | Scraping provider to use |
| `status` | `string` | Yes |  |
| `summary` | `mixed` | No |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->RefreshStat()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RefreshStatEntity`

Create a new `RefreshStatEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RemixerClipperEntity

```php
$remixer_clipper = $client->RemixerClipper();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->RemixerClipper()->create([
  "identifier" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->RemixerClipper()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RemixerClipperEntity`

Create a new `RemixerClipperEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ResetProductEntity

```php
$reset_product = $client->ResetProduct();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ResetProduct()->create([
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->ResetProduct()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ResetProductEntity`

Create a new `ResetProductEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RetryWebsiteScrapeEntity

```php
$retry_website_scrape = $client->RetryWebsiteScrape();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `flow_variant` | `string` | No |  |
| `onboarding_data_id` | `string` | Yes | UUID of existing OnboardingData |
| `skip_demo` | `bool` | No |  |
| `status` | `string` | Yes |  |
| `success` | `bool` | Yes |  |
| `url` | `string` | Yes | New website URL to scrape |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->RetryWebsiteScrape()->create([
  "onboarding_data_id" => null, // string
  "url" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RetryWebsiteScrapeEntity`

Create a new `RetryWebsiteScrapeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SaveSurveyEntity

```php
$save_survey = $client->SaveSurvey();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email_sent` | `bool` | No |  |
| `onboarding_data_id` | `string` | Yes | UUID of the OnboardingData record |
| `success` | `bool` | Yes |  |
| `survey` | `array` | Yes | Survey response data from frontend. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->SaveSurvey()->create([
  "onboarding_data_id" => null, // string
  "survey" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SaveSurveyEntity`

Create a new `SaveSurveyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ScanSocialEntity

```php
$scan_social = $client->ScanSocial();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instagram_handle` | `mixed` | No |  |
| `onboarding_data_id` | `string` | Yes |  |
| `product_id` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `success` | `bool` | Yes |  |
| `task_id` | `string` | No |  |
| `tiktok_handle` | `mixed` | No |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ScanSocial()->create([
  "onboarding_data_id" => null, // string
  "tiktok_handle" => null, // mixed
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ScanSocialEntity`

Create a new `ScanSocialEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ScanSocialsPublicEntity

```php
$scan_socials_public = $client->ScanSocialsPublic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instagram_handle` | `mixed` | No | Instagram username/handle to scrape |
| `message` | `mixed` | No |  |
| `onboarding_data_id` | `string` | Yes | UUID of the OnboardingData record |
| `status` | `string` | Yes |  |
| `success` | `bool` | Yes |  |
| `tiktok_handle` | `mixed` | No | TikTok username/handle to scrape |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ScanSocialsPublic()->create([
  "onboarding_data_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ScanSocialsPublicEntity`

Create a new `ScanSocialsPublicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ScanSocialsStatusEntity

```php
$scan_socials_status = $client->ScanSocialsStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ads_count` | `int` | No |  |
| `onboarding_data_id` | `string` | Yes |  |
| `product_id` | `string` | No |  |
| `status` | `string` | Yes |  |
| `task_id` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->ScanSocialsStatus()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ScanSocialsStatusEntity`

Create a new `ScanSocialsStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ScheduleV2Entity

```php
$schedule_v2 = $client->ScheduleV2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent` | `mixed` | No |  |
| `comment` | `mixed` | No |  |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `instagram_posted_by` | `mixed` | No |  |
| `instagram_posted_url` | `mixed` | No |  |
| `instagram_scraped_social_post_id` | `string` | No |  |
| `is_instagram_posted` | `bool` | No |  |
| `is_tiktok_posted` | `bool` | No |  |
| `is_youtube_posted` | `bool` | No |  |
| `reorders` | `array` | Yes |  |
| `results` | `mixed` | No |  |
| `scheduled_datetime` | `string` | Yes |  |
| `source_type` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `tiktok_posted_by` | `mixed` | No |  |
| `tiktok_posted_url` | `mixed` | No |  |
| `tiktok_scraped_social_post_id` | `string` | No |  |
| `video` | `mixed` | No |  |
| `video_id` | `string` | Yes |  |
| `youtube_posted_by` | `mixed` | No |  |
| `youtube_posted_url` | `mixed` | No |  |
| `youtube_scraped_social_post_id` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ScheduleV2()->create([
  "created_at" => null, // string
  "id" => null, // string
  "reorders" => null, // array
  "scheduled_datetime" => null, // string
  "source_type" => null, // string
  "status" => null, // string
  "video_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->ScheduleV2()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->ScheduleV2()->load();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->ScheduleV2()->remove(["queue_id" => "queue_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->ScheduleV2()->update([
  "queue_id" => "queue_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ScheduleV2Entity`

Create a new `ScheduleV2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ScrapeEntity

```php
$scrape = $client->Scrape();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `old_product_id` | `string` | Yes |  |
| `onboarding_data_id` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `success` | `bool` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Scrape()->create([
  "old_product_id" => null, // string
  "url" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ScrapeEntity`

Create a new `ScrapeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ScrapeWebsitePublicEntity

```php
$scrape_website_public = $client->ScrapeWebsitePublic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `flow_variant` | `string` | No |  |
| `onboarding_data_id` | `string` | Yes | UUID of created OnboardingData |
| `skip_demo` | `bool` | No | True for self-serve users (skip demo booking) |
| `status` | `string` | Yes |  |
| `success` | `bool` | Yes |  |
| `url` | `string` | Yes | Website URL to scrape |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ScrapeWebsitePublic()->create([
  "url" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ScrapeWebsitePublicEntity`

Create a new `ScrapeWebsitePublicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ScrapedDataEntity

```php
$scraped_data = $client->ScrapedData();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes |  |
| `homepageVideoUrl` | `mixed` | No |  |
| `howItWorks` | `string` | Yes |  |
| `imageUrls` | `array` | Yes |  |
| `instagram_username` | `mixed` | No |  |
| `mediaAssets` | `array` | No |  |
| `name` | `string` | Yes |  |
| `pricingAndOffers` | `string` | Yes |  |
| `targetAudience` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ScrapedData()->create([
  "url" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ScrapedDataEntity`

Create a new `ScrapedDataEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ScrapingStatusEntity

```php
$scraping_status = $client->ScrapingStatus();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->ScrapingStatus()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ScrapingStatusEntity`

Create a new `ScrapingStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SelfServeActivateEntity

```php
$self_serve_activate = $client->SelfServeActivate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `onboarding_data_id` | `string` | Yes | UUID of the OnboardingData record |
| `redirect_to_stripe` | `bool` | No |  |
| `stripe_checkout_url` | `mixed` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->SelfServeActivate()->create([
  "onboarding_data_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SelfServeActivateEntity`

Create a new `SelfServeActivateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SeoEntity

```php
$seo = $client->Seo();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Seo()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SeoEntity`

Create a new `SeoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SeoAiMentionEntity

```php
$seo_ai_mention = $client->SeoAiMention();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bucket` | `string` | Yes |  |
| `domain_type` | `string` | Yes |  |
| `dominant_domain` | `string` | Yes |  |
| `engine` | `string` | Yes |  |
| `evidence` | `array` | Yes |  |
| `geo` | `string` | Yes |  |
| `language` | `string` | Yes |  |
| `primary_url` | `string` | Yes |  |
| `prompt_text` | `string` | Yes |  |
| `run_week` | `string` | Yes |  |
| `secondary_urls` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->SeoAiMention()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SeoAiMentionEntity`

Create a new `SeoAiMentionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SeoBacklinkEntity

```php
$seo_backlink = $client->SeoBacklink();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->SeoBacklink()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SeoBacklinkEntity`

Create a new `SeoBacklinkEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SeoKeywordEntity

```php
$seo_keyword = $client->SeoKeyword();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blog_page` | `string` | Yes |  |
| `current_position` | `float` | Yes |  |
| `keyword` | `string` | Yes |  |
| `keyword_group` | `string` | Yes |  |
| `position_change` | `float` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->SeoKeyword()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SeoKeywordEntity`

Create a new `SeoKeywordEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SeoOverviewEntity

```php
$seo_overview = $client->SeoOverview();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clicks` | `float` | Yes |  |
| `ctr` | `float` | Yes |  |
| `date` | `string` | Yes |  |
| `impressions` | `float` | Yes |  |
| `position` | `float` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->SeoOverview()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SeoOverviewEntity`

Create a new `SeoOverviewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SeoTrafficEntity

```php
$seo_traffic = $client->SeoTraffic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_date` | `string` | Yes |  |
| `series` | `array` | Yes |  |
| `site_url` | `string` | Yes |  |
| `start_date` | `string` | Yes |  |
| `top_countries` | `array` | Yes |  |
| `top_pages` | `array` | Yes |  |
| `top_queries` | `array` | Yes |  |
| `totals` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->SeoTraffic()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SeoTrafficEntity`

Create a new `SeoTrafficEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ShareAccessLinkEntity

```php
$share_access_link = $client->ShareAccessLink();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `share_token` | `string` | Yes |  |
| `share_url` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ShareAccessLink()->create([
  "share_token" => null, // string
  "share_url" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ShareAccessLinkEntity`

Create a new `ShareAccessLinkEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SiteEntity

```php
$site = $client->Site();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Site()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SiteEntity`

Create a new `SiteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SlideEntity

```php
$slide = $client->Slide();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `caption` | `mixed` | No |  |
| `id` | `string` | No |  |
| `prompt` | `mixed` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Slide()->create([
  "carousel_id" => null, // string
  "slide_index" => null, // int
]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->Slide()->update([
  "carousel_id" => "carousel_id",
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SlideEntity`

Create a new `SlideEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SlugValidationEntity

```php
$slug_validation = $client->SlugValidation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `reason` | `mixed` | No |  |
| `valid` | `bool` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->SlugValidation()->load(["slug" => "slug"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SlugValidationEntity`

Create a new `SlugValidationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SocialEntity

```php
$social = $client->Social();
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
| `updatedAt` | `mixed` | No |  |
| `userId` | `string` | Yes |  |
| `username` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Social()->create([
  "code" => null, // string
  "code_verifier" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Social()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Social()->load();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->Social()->remove(["platform" => "platform"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SocialEntity`

Create a new `SocialEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SocialScanPreviewEntity

```php
$social_scan_preview = $client->SocialScanPreview();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instagram_handle` | `mixed` | No | Instagram username/handle to scrape |
| `posts` | `array` | Yes |  |
| `success` | `bool` | Yes |  |
| `tiktok_handle` | `mixed` | No | TikTok username/handle to scrape |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->SocialScanPreview()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SocialScanPreviewEntity`

Create a new `SocialScanPreviewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SocialScanProcessEntity

```php
$social_scan_process = $client->SocialScanProcess();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `posts` | `array` | Yes |  |
| `product_id` | `string` | Yes |  |
| `success` | `bool` | Yes |  |
| `task_id` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->SocialScanProcess()->create([
  "posts" => null, // array
  "product_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SocialScanProcessEntity`

Create a new `SocialScanProcessEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SocialScanSaveEntity

```php
$social_scan_save = $client->SocialScanSave();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `media_asset_ids` | `array` | Yes |  |
| `posts` | `array` | Yes |  |
| `product_id` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->SocialScanSave()->create([
  "posts" => null, // array
  "product_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SocialScanSaveEntity`

Create a new `SocialScanSaveEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Sora2AvatarEntity

```php
$sora2_avatar = $client->Sora2Avatar();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_frame_url` | `mixed` | No |  |
| `created_at` | `string` | Yes |  |
| `current_step` | `int` | No |  |
| `headshot_url` | `mixed` | No |  |
| `id` | `string` | Yes |  |
| `logs` | `array` | No |  |
| `prompt_key` | `string` | Yes |  |
| `run_output_dir` | `mixed` | No |  |
| `selected_age_bucket` | `string` | Yes |  |
| `selected_gender` | `string` | Yes |  |
| `selected_prompt` | `mixed` | No |  |
| `selected_race` | `string` | Yes |  |
| `sora2_cameo_handle` | `mixed` | No |  |
| `sora2_cameo_id` | `string` | No |  |
| `sora2_cameo_link` | `mixed` | No |  |
| `sora2_display_name` | `mixed` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Sora2Avatar()->create([
  "prompt_key" => null, // string
  "selected_age_bucket" => null, // string
  "selected_gender" => null, // string
  "selected_race" => null, // string
  "sora2_video_url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Sora2Avatar()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Sora2Avatar()->load(["id" => "sora2_avatar_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->Sora2Avatar()->update([
  "id" => "sora2_avatar_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): Sora2AvatarEntity`

Create a new `Sora2AvatarEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Sora2AvatarAssetUploadEntity

```php
$sora2_avatar_asset_upload = $client->Sora2AvatarAssetUpload();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_id` | `string` | No |  |
| `file` | `string` | Yes |  |
| `run_output_dir` | `mixed` | No |  |
| `s3_key` | `string` | Yes |  |
| `upload_type` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Sora2AvatarAssetUpload()->create([
  "file" => null, // string
  "s3_key" => null, // string
  "upload_type" => null, // string
  "url" => null, // string
]);
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): Sora2AvatarAssetUploadEntity`

Create a new `Sora2AvatarAssetUploadEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Sora2AvatarStatEntity

```php
$sora2_avatar_stat = $client->Sora2AvatarStat();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `by_age_bucket` | `array` | Yes |  |
| `by_gender` | `array` | Yes |  |
| `by_prompt_key` | `array` | Yes |  |
| `by_race` | `array` | Yes |  |
| `completed_avatars` | `int` | Yes |  |
| `completion_rate` | `float` | Yes |  |
| `total_avatars` | `int` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Sora2AvatarStat()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): Sora2AvatarStatEntity`

Create a new `Sora2AvatarStatEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StatEntity

```php
$stat = $client->Stat();
```

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Stat()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StatEntity`

Create a new `StatEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StatsRefreshBackfillEntity

```php
$stats_refresh_backfill = $client->StatsRefreshBackfill();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `task_id` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->StatsRefreshBackfill()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StatsRefreshBackfillEntity`

Create a new `StatsRefreshBackfillEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StatsRefreshIssueEntity

```php
$stats_refresh_issue = $client->StatsRefreshIssue();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aged_over_24h` | `bool` | Yes |  |
| `agent_id` | `string` | No |  |
| `agent_name_snapshot` | `mixed` | No |  |
| `first_detected_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `last_detected_at` | `string` | Yes |  |
| `last_refresh_completed_at` | `mixed` | No |  |
| `last_seen_run_id` | `string` | No |  |
| `latest_error_message` | `mixed` | No |  |
| `next_retry_at` | `mixed` | No |  |
| `platform` | `string` | Yes |  |
| `post_method` | `mixed` | No |  |
| `post_url` | `mixed` | No |  |
| `posted_date_et` | `string` | Yes |  |
| `product_id` | `string` | No |  |
| `product_name_snapshot` | `mixed` | No |  |
| `reason_code` | `string` | Yes |  |
| `resolved_at` | `mixed` | No |  |
| `retry_count` | `int` | Yes |  |
| `schedule_queue_id` | `string` | No |  |
| `scheduled_datetime_utc` | `string` | Yes |  |
| `stale_after_sla` | `bool` | Yes |  |
| `status` | `string` | Yes |  |
| `user_email_snapshot` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->StatsRefreshIssue()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StatsRefreshIssueEntity`

Create a new `StatsRefreshIssueEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StatsRefreshOverviewEntity

```php
$stats_refresh_overview = $client->StatsRefreshOverview();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_run` | `mixed` | No |  |
| `aged_over_24h` | `int` | Yes |  |
| `backlog_preview` | `array` | Yes |  |
| `coverage_percent` | `float` | Yes |  |
| `customer_counts` | `array` | Yes |  |
| `date` | `string` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `method_counts` | `array` | Yes |  |
| `platform_counts` | `array` | Yes |  |
| `platform_units_resolved` | `int` | Yes |  |
| `platform_units_total` | `int` | Yes |  |
| `platform_units_unresolved` | `int` | Yes |  |
| `posted_entries` | `int` | Yes |  |
| `reason_counts` | `array` | Yes |  |
| `sla_deadline_et` | `string` | Yes |  |
| `stale_after_sla` | `int` | Yes |  |
| `top_affected_customers` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->StatsRefreshOverview()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StatsRefreshOverviewEntity`

Create a new `StatsRefreshOverviewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StatsRefreshRunSummaryEntity

```php
$stats_refresh_run_summary = $client->StatsRefreshRunSummary();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `celery_task_id` | `string` | No |  |
| `completed_at` | `mixed` | No |  |
| `entries_failed` | `int` | Yes |  |
| `entries_skipped` | `int` | Yes |  |
| `entries_total` | `int` | Yes |  |
| `entries_updated` | `int` | Yes |  |
| `error_summary_json` | `mixed` | No |  |
| `id` | `string` | Yes |  |
| `issues_opened` | `int` | Yes |  |
| `issues_resolved` | `int` | Yes |  |
| `platform_units_resolved` | `int` | Yes |  |
| `platform_units_total` | `int` | Yes |  |
| `platform_units_unresolved` | `int` | Yes |  |
| `platform_updates_via_profile` | `int` | Yes |  |
| `platform_updates_via_url` | `int` | Yes |  |
| `provider` | `mixed` | No |  |
| `refresh_trigger` | `mixed` | No |  |
| `requested_by_email` | `mixed` | No |  |
| `run_type` | `string` | Yes |  |
| `started_at` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `target_date_et` | `mixed` | No |  |
| `users_count` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->StatsRefreshRunSummary()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StatsRefreshRunSummaryEntity`

Create a new `StatsRefreshRunSummaryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StatsRefreshTaskTriggerEntity

```php
$stats_refresh_task_trigger = $client->StatsRefreshTaskTrigger();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `target_date` | `string` | Yes |  |
| `task_id` | `string` | Yes |  |
| `users_count` | `int` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->StatsRefreshTaskTrigger()->create([
  "message" => null, // string
  "status" => null, // string
  "target_date" => null, // string
  "task_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StatsRefreshTaskTriggerEntity`

Create a new `StatsRefreshTaskTriggerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StripeEntity

```php
$stripe = $client->Stripe();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StripeEntity`

Create a new `StripeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StyleEntity

```php
$style = $client->Style();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Style()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StyleEntity`

Create a new `StyleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TemplateEntity

```php
$template = $client->Template();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Template()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TemplateEntity`

Create a new `TemplateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TikTokCreatorInfoEntity

```php
$tik_tok_creator_info = $client->TikTokCreatorInfo();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commentDisabled` | `bool` | No |  |
| `creatorAvatarUrl` | `mixed` | No |  |
| `creatorNickname` | `mixed` | No |  |
| `creatorUsername` | `mixed` | No |  |
| `duetDisabled` | `bool` | No |  |
| `maxVideoPostDurationSec` | `int` | No |  |
| `privacyLevelOptions` | `array` | No |  |
| `stitchDisabled` | `bool` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->TikTokCreatorInfo()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TikTokCreatorInfoEntity`

Create a new `TikTokCreatorInfoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TopPostEntity

```php
$top_post = $client->TopPost();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `int` | Yes |  |
| `id` | `string` | Yes |  |
| `likes` | `int` | Yes |  |
| `platforms` | `array` | Yes |  |
| `scheduled_datetime` | `string` | Yes |  |
| `user_email` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |
| `views` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->TopPost()->list(["date" => "example"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TopPostEntity`

Create a new `TopPostEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UploadPostAgentEntity

```php
$upload_post_agent = $client->UploadPostAgent();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->UploadPostAgent()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UploadPostAgentEntity`

Create a new `UploadPostAgentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserEntity

```php
$user = $client->User();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountType` | `mixed` | No |  |
| `activatedByAdminAt` | `mixed` | No |  |
| `activatedByAdminId` | `mixed` | No |  |
| `agents` | `array` | Yes |  |
| `agentsCount` | `mixed` | No |  |
| `attribution` | `mixed` | No |  |
| `avatarImageUrl` | `mixed` | No |  |
| `avatarVoiceUrl` | `mixed` | No |  |
| `createdAt` | `string` | Yes |  |
| `credits` | `int` | No |  |
| `email` | `string` | Yes |  |
| `googleId` | `mixed` | No |  |
| `hasSeenScheduleWelcome` | `bool` | No |  |
| `id` | `string` | Yes |  |
| `industry` | `mixed` | No |  |
| `instagramId` | `mixed` | No |  |
| `isActivatedByAdmin` | `bool` | No |  |
| `isAdmin` | `bool` | No |  |
| `isInternalUser` | `mixed` | No |  |
| `isMigrated` | `mixed` | No |  |
| `isResettingProduct` | `mixed` | No |  |
| `membership` | `mixed` | No |  |
| `name` | `string` | Yes |  |
| `partnerDirectLoginDisabled` | `bool` | No |  |
| `partnerExternalUserId` | `mixed` | No |  |
| `partnerPolicyCode` | `mixed` | No |  |
| `partnerSource` | `mixed` | No |  |
| `picture` | `mixed` | No |  |
| `stripeCustomerId` | `mixed` | No |  |
| `stripeSubscriptionId` | `mixed` | No |  |
| `subscriptionCurrentPeriodEnd` | `mixed` | No |  |
| `subscriptionStatus` | `mixed` | No |  |
| `totalCount` | `int` | Yes |  |
| `updatedAt` | `string` | Yes |  |
| `userId` | `string` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->User()->load(["id" => "user_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserEntity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserAgentEntity

```php
$user_agent = $client->UserAgent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent` | `array` | Yes |  |
| `assigned_at` | `string` | Yes |  |
| `assignment_id` | `string` | Yes |  |
| `expires_at` | `mixed` | No |  |
| `id` | `string` | No |  |
| `status` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->UserAgent()->create([
  "id" => null, // string
  "agent" => null, // array
  "assigned_at" => null, // string
  "assignment_id" => null, // string
  "status" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->UserAgent()->list(["id" => "example"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserAgentEntity`

Create a new `UserAgentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserHealthDetailEntity

```php
$user_health_detail = $client->UserHealthDetail();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `mixed` | Yes |  |
| `activated` | `bool` | Yes |  |
| `activated_by_admin_at` | `mixed` | No |  |
| `activated_by_admin_id` | `string` | No |  |
| `admin_notes` | `mixed` | No |  |
| `agents_count` | `int` | No |  |
| `assigned_agents` | `array` | Yes |  |
| `assigned_agents_count` | `int` | Yes |  |
| `assigned_agents_preview_limit` | `int` | No |  |
| `assigned_agents_truncated` | `bool` | No |  |
| `auto_schedule_enabled` | `bool` | Yes |  |
| `comments_expected_per_day` | `int` | No |  |
| `comments_fix_block_reason` | `mixed` | No |  |
| `comments_fix_ready` | `bool` | No |  |
| `comments_today_failed` | `int` | No |  |
| `comments_today_posted` | `int` | No |  |
| `comments_today_scheduled` | `int` | No |  |
| `comments_yesterday_failed` | `int` | No |  |
| `comments_yesterday_posted` | `int` | No |  |
| `comments_yesterday_total` | `int` | No |  |
| `created_at` | `string` | Yes |  |
| `credits` | `int` | Yes |  |
| `effective_posted_video_reuse_percent` | `int` | Yes |  |
| `email` | `string` | Yes |  |
| `expected_agents_count` | `int` | Yes |  |
| `id` | `string` | Yes |  |
| `is_activated_by_admin` | `bool` | Yes |  |
| `is_admin` | `bool` | Yes |  |
| `is_bookmarked` | `bool` | No |  |
| `is_internal_user` | `bool` | Yes |  |
| `is_migrated` | `bool` | Yes |  |
| `landing_slug` | `mixed` | No |  |
| `landing_status` | `mixed` | No |  |
| `landing_url` | `mixed` | No |  |
| `membership` | `mixed` | Yes |  |
| `microhub_status` | `mixed` | No |  |
| `microhub_url` | `mixed` | No |  |
| `name` | `string` | Yes |  |
| `onboarding_flow` | `string` | Yes |  |
| `posted_video_reuse_percent` | `mixed` | No |  |
| `product_id` | `string` | Yes |  |
| `product_name` | `mixed` | Yes |  |
| `product_url` | `mixed` | Yes |  |
| `subscription_status` | `mixed` | Yes |  |
| `survey_data` | `mixed` | No |  |
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
| `yesterday_failed_entries` | `array` | Yes |  |
| `yesterday_posted` | `int` | Yes |  |
| `yesterday_total` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->UserHealthDetail()->list(["id" => "example"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserHealthDetailEntity`

Create a new `UserHealthDetailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserWithAvatarSubmissionEntity

```php
$user_with_avatar_submission = $client->UserWithAvatarSubmission();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->UserWithAvatarSubmission()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserWithAvatarSubmissionEntity`

Create a new `UserWithAvatarSubmissionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UsersHealthEntity

```php
$users_health = $client->UsersHealth();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `mixed` | Yes |  |
| `admin_notes` | `mixed` | No |  |
| `agents_count` | `int` | Yes |  |
| `agents_health` | `string` | Yes |  |
| `agents_issue` | `mixed` | Yes |  |
| `assigned_agents_count` | `int` | Yes |  |
| `auto_schedule_enabled` | `bool` | Yes |  |
| `auto_schedule_health` | `string` | Yes |  |
| `auto_schedule_issue` | `mixed` | Yes |  |
| `auto_schedule_today_health` | `string` | Yes |  |
| `auto_schedule_today_issue` | `mixed` | Yes |  |
| `created_at` | `string` | Yes |  |
| `email` | `string` | Yes |  |
| `expected_agents_count` | `int` | Yes |  |
| `id` | `string` | Yes |  |
| `is_bookmarked` | `bool` | No |  |
| `is_internal_user` | `bool` | Yes |  |
| `is_migrated` | `bool` | Yes |  |
| `membership` | `mixed` | Yes |  |
| `name` | `string` | Yes |  |
| `posts_health` | `string` | Yes |  |
| `posts_issue` | `mixed` | Yes |  |
| `posts_today_health` | `string` | Yes |  |
| `posts_today_issue` | `mixed` | Yes |  |
| `subscription_status` | `mixed` | Yes |  |
| `today_expected_count` | `int` | Yes |  |
| `today_failed_count` | `int` | Yes |  |
| `today_scheduled_count` | `int` | Yes |  |
| `today_total_count` | `int` | Yes |  |
| `tomorrow_expected_count` | `int` | Yes |  |
| `tomorrow_scheduled_count` | `int` | Yes |  |
| `yesterday_failed_count` | `int` | Yes |  |
| `yesterday_total_count` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->UsersHealth()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UsersHealthEntity`

Create a new `UsersHealthEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## VideoEntity

```php
$video = $client->Video();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `string` | No |  |
| `bookmarked` | `mixed` | No |  |
| `captions` | `mixed` | No |  |
| `carousel_data` | `mixed` | No |  |
| `created_at` | `string` | Yes |  |
| `duration` | `float` | No |  |
| `generation_status` | `mixed` | No |  |
| `id` | `string` | Yes |  |
| `image_prompt` | `mixed` | No |  |
| `is_onboarding` | `bool` | No |  |
| `is_template` | `bool` | No |  |
| `main_avatar` | `mixed` | No |  |
| `main_prompt` | `mixed` | No |  |
| `media_asset_id` | `string` | No |  |
| `product_id` | `string` | No |  |
| `reel_id` | `string` | No |  |
| `thumbnail_url` | `mixed` | No |  |
| `title` | `string` | Yes |  |
| `type` | `mixed` | No |  |
| `updated_at` | `mixed` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Video()->create([
  "captions" => null, // mixed
  "title" => null, // string
  "url" => null, // string
  "video_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Video()->load(["id" => "video_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->Video()->remove(["id" => "video_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->Video()->update([
  "id" => "video_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): VideoEntity`

Create a new `VideoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## VideoRemixerWorkerEntity

```php
$video_remixer_worker = $client->VideoRemixerWorker();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `captions_ass` | `string` | No |  |
| `captions_vtt` | `string` | No |  |
| `cost_usd` | `float` | No |  |
| `error` | `string` | Yes |  |
| `file` | `string` | Yes |  |
| `kinds` | `array` | No |  |
| `lease_token` | `string` | Yes |  |
| `limit` | `int` | No |  |
| `manifest` | `string` | Yes |  |
| `model` | `string` | Yes |  |
| `processing_seconds` | `float` | No |  |
| `prompt_version` | `string` | Yes |  |
| `result` | `array` | No |  |
| `thumbnail` | `string` | Yes |  |
| `tier` | `string` | No |  |
| `worker_id` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->VideoRemixerWorker()->create([
  "error" => null, // string
  "file" => null, // string
  "lease_token" => null, // string
  "manifest" => null, // string
  "model" => null, // string
  "prompt_version" => null, // string
  "thumbnail" => null, // string
  "worker_id" => null, // string
]);
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): VideoRemixerWorkerEntity`

Create a new `VideoRemixerWorkerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WatchdogRecoveryEntity

```php
$watchdog_recovery = $client->WatchdogRecovery();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `item_id` | `string` | Yes |  |
| `passed` | `bool` | Yes |  |
| `table` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->WatchdogRecovery()->create([
  "item_id" => null, // string
  "passed" => null, // bool
  "table" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->WatchdogRecovery()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WatchdogRecoveryEntity`

Create a new `WatchdogRecoveryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WinningAdEntity

```php
$winning_ad = $client->WinningAd();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->WinningAd()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WinningAdEntity`

Create a new `WinningAdEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## XAdaptationEntity

```php
$x_adaptation = $client->XAdaptation();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->XAdaptation()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): XAdaptationEntity`

Create a new `XAdaptationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZerohumanAdminAccountEntity

```php
$zerohuman_admin_account = $client->ZerohumanAdminAccount();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_mode` | `string` | Yes |  |
| `active_queue_count` | `int` | Yes |  |
| `assigned_agent` | `mixed` | No |  |
| `created_at` | `mixed` | No |  |
| `email` | `string` | Yes |  |
| `external_user_id` | `string` | Yes |  |
| `membership` | `mixed` | No |  |
| `policy_code` | `mixed` | No |  |
| `product_id` | `string` | No |  |
| `product_name` | `mixed` | No |  |
| `provisioning_status` | `string` | Yes |  |
| `subscription_status` | `mixed` | No |  |
| `updated_at` | `mixed` | No |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->ZerohumanAdminAccount()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZerohumanAdminAccountEntity`

Create a new `ZerohumanAdminAccountEntity` instance with the same client and
options.

#### `get_name(): string`

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

```php
$client = new CrackedApiReferenceSDK([
  "feature" => [
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
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

