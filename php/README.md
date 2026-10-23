# CrackedApiReference PHP SDK



The PHP SDK for the CrackedApiReference API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Activate()` — with named operations (`list`/`load`/`create`/`update`/`patch`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`, see [Tags](https://github.com/voxgig-sdk/cracked-api-reference-sdk/tags)), or
from a clone as a Composer path repository:

```bash
git clone https://github.com/voxgig-sdk/cracked-api-reference-sdk
composer config repositories.cracked-api-reference-sdk path ./cracked-api-reference-sdk/php
composer require voxgig-sdk/cracked-api-reference-sdk:@dev
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'crackedapireference_sdk.php';

$client = new CrackedApiReferenceSDK([
    "apikey" => getenv("CRACKED_API_REFERENCE_APIKEY"),
]);
```

### 3. Load an admin

Admin is nested under date, so provide the `date`.

```php
try {
    // load() returns the ENTITY — call data_get() for the Admin record (throws on error).
    $admin = $client->Admin()->load(["date" => "example_date"]);
    print_r($admin->data_get());
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 4. Create, update, and remove

```php
// create() returns the ENTITY — call data_get() for the created Activate record.
$created = $client->Activate()->create(["user_id" => "example_user_id", "message" => "example_message", "success" => true]);

```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $admininsights = $client->AdminInsight()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = CrackedApiReferenceSDK::test([
    "entity" => ["sora2_avatar" => ["test01" => ["id" => "test01"]]],
]);

// list() returns entity instances (throws on error);
// call data_get() for the mock record.
$sora2avatar = $client->Sora2Avatar()->list();
print_r(array_map(fn($item) => $item->data_get(), $sora2avatar));
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new CrackedApiReferenceSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
CRACKED_API_REFERENCE_TEST_LIVE=TRUE
CRACKED_API_REFERENCE_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### CrackedApiReferenceSDK

```php
require_once 'crackedapireference_sdk.php';
$client = new CrackedApiReferenceSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = CrackedApiReferenceSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### CrackedApiReferenceSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Activate` | `($data): ActivateEntity` | Create an Activate entity instance. |
| `ActivateUser` | `($data): ActivateUserEntity` | Create an ActivateUser entity instance. |
| `ActiveOnboarding` | `($data): ActiveOnboardingEntity` | Create an ActiveOnboarding entity instance. |
| `Admin` | `($data): AdminEntity` | Create an Admin entity instance. |
| `AdminAccountReset` | `($data): AdminAccountResetEntity` | Create an AdminAccountReset entity instance. |
| `AdminCarousel` | `($data): AdminCarouselEntity` | Create an AdminCarousel entity instance. |
| `AdminCarouselDemoReview` | `($data): AdminCarouselDemoReviewEntity` | Create an AdminCarouselDemoReview entity instance. |
| `AdminCustomer` | `($data): AdminCustomerEntity` | Create an AdminCustomer entity instance. |
| `AdminCustomerSuccess` | `($data): AdminCustomerSuccessEntity` | Create an AdminCustomerSuccess entity instance. |
| `AdminGeneratedVideo` | `($data): AdminGeneratedVideoEntity` | Create an AdminGeneratedVideo entity instance. |
| `AdminHealthrx` | `($data): AdminHealthrxEntity` | Create an AdminHealthrx entity instance. |
| `AdminInsight` | `($data): AdminInsightEntity` | Create an AdminInsight entity instance. |
| `AdminLandingTask` | `($data): AdminLandingTaskEntity` | Create an AdminLandingTask entity instance. |
| `AdminMetricsSummary` | `($data): AdminMetricsSummaryEntity` | Create an AdminMetricsSummary entity instance. |
| `AdminPost` | `($data): AdminPostEntity` | Create an AdminPost entity instance. |
| `AdminRecentSignup` | `($data): AdminRecentSignupEntity` | Create an AdminRecentSignup entity instance. |
| `AdminSlideshowDiag` | `($data): AdminSlideshowDiagEntity` | Create an AdminSlideshowDiag entity instance. |
| `AdminSlideshowImport` | `($data): AdminSlideshowImportEntity` | Create an AdminSlideshowImport entity instance. |
| `AdminUserView` | `($data): AdminUserViewEntity` | Create an AdminUserView entity instance. |
| `AdminUsersTableItem` | `($data): AdminUsersTableItemEntity` | Create an AdminUsersTableItem entity instance. |
| `AdminVideoRemixer` | `($data): AdminVideoRemixerEntity` | Create an AdminVideoRemixer entity instance. |
| `AdvanceStep` | `($data): AdvanceStepEntity` | Create an AdvanceStep entity instance. |
| `Agent` | `($data): AgentEntity` | Create an Agent entity instance. |
| `AgentAccessCustomersHealth` | `($data): AgentAccessCustomersHealthEntity` | Create an AgentAccessCustomersHealth entity instance. |
| `AgentAccessOverview` | `($data): AgentAccessOverviewEntity` | Create an AgentAccessOverview entity instance. |
| `AgentAccessPhilHourlyNotification` | `($data): AgentAccessPhilHourlyNotificationEntity` | Create an AgentAccessPhilHourlyNotification entity instance. |
| `AgentAccessPhilStatsRefresh` | `($data): AgentAccessPhilStatsRefreshEntity` | Create an AgentAccessPhilStatsRefresh entity instance. |
| `AgentAccessPhilVideo` | `($data): AgentAccessPhilVideoEntity` | Create an AgentAccessPhilVideo entity instance. |
| `AgentAccessUserAgent` | `($data): AgentAccessUserAgentEntity` | Create an AgentAccessUserAgent entity instance. |
| `AgentAccessUserPhoneFarm` | `($data): AgentAccessUserPhoneFarmEntity` | Create an AgentAccessUserPhoneFarm entity instance. |
| `AgentAccessUserPost` | `($data): AgentAccessUserPostEntity` | Create an AgentAccessUserPost entity instance. |
| `AgentAccessUserSummary` | `($data): AgentAccessUserSummaryEntity` | Create an AgentAccessUserSummary entity instance. |
| `AgentAccessUserVideo` | `($data): AgentAccessUserVideoEntity` | Create an AgentAccessUserVideo entity instance. |
| `AgentAccessUserWinningAd` | `($data): AgentAccessUserWinningAdEntity` | Create an AgentAccessUserWinningAd entity instance. |
| `AgentAccessWinningAdsSummary` | `($data): AgentAccessWinningAdsSummaryEntity` | Create an AgentAccessWinningAdsSummary entity instance. |
| `AgentDetail` | `($data): AgentDetailEntity` | Create an AgentDetail entity instance. |
| `AgentHealth` | `($data): AgentHealthEntity` | Create an AgentHealth entity instance. |
| `AgentHealthCustomerOption` | `($data): AgentHealthCustomerOptionEntity` | Create an AgentHealthCustomerOption entity instance. |
| `AgentHealthDetail` | `($data): AgentHealthDetailEntity` | Create an AgentHealthDetail entity instance. |
| `AgentPost` | `($data): AgentPostEntity` | Create an AgentPost entity instance. |
| `AgentStat` | `($data): AgentStatEntity` | Create an AgentStat entity instance. |
| `AgentSummary` | `($data): AgentSummaryEntity` | Create an AgentSummary entity instance. |
| `AgentsSummary` | `($data): AgentsSummaryEntity` | Create an AgentsSummary entity instance. |
| `AnalysisStatus` | `($data): AnalysisStatusEntity` | Create an AnalysisStatus entity instance. |
| `AnalyticsPost` | `($data): AnalyticsPostEntity` | Create an AnalyticsPost entity instance. |
| `AnalyzeProduct` | `($data): AnalyzeProductEntity` | Create an AnalyzeProduct entity instance. |
| `AssignAgent` | `($data): AssignAgentEntity` | Create an AssignAgent entity instance. |
| `Auth` | `($data): AuthEntity` | Create an Auth entity instance. |
| `AutoScheduleSetting` | `($data): AutoScheduleSettingEntity` | Create an AutoScheduleSetting entity instance. |
| `BulkTikTokStatsUpdate` | `($data): BulkTikTokStatsUpdateEntity` | Create a BulkTikTokStatsUpdate entity instance. |
| `Carousel` | `($data): CarouselEntity` | Create a Carousel entity instance. |
| `CarouselAgentDetail` | `($data): CarouselAgentDetailEntity` | Create a CarouselAgentDetail entity instance. |
| `CarouselStatus` | `($data): CarouselStatusEntity` | Create a CarouselStatus entity instance. |
| `Chat` | `($data): ChatEntity` | Create a Chat entity instance. |
| `ChatHistory` | `($data): ChatHistoryEntity` | Create a ChatHistory entity instance. |
| `ChatSession` | `($data): ChatSessionEntity` | Create a ChatSession entity instance. |
| `Comment` | `($data): CommentEntity` | Create a Comment entity instance. |
| `CommentCampaign` | `($data): CommentCampaignEntity` | Create a CommentCampaign entity instance. |
| `CompleteChatCheckout` | `($data): CompleteChatCheckoutEntity` | Create a CompleteChatCheckout entity instance. |
| `CreateBlackoutSora2Video` | `($data): CreateBlackoutSora2VideoEntity` | Create a CreateBlackoutSora2Video entity instance. |
| `CreateCarousel` | `($data): CreateCarouselEntity` | Create a CreateCarousel entity instance. |
| `CreateProduct` | `($data): CreateProductEntity` | Create a CreateProduct entity instance. |
| `CreateResetProductV6` | `($data): CreateResetProductV6Entity` | Create a CreateResetProductV6 entity instance. |
| `CreateSora2Video` | `($data): CreateSora2VideoEntity` | Create a CreateSora2Video entity instance. |
| `CreateVariation` | `($data): CreateVariationEntity` | Create a CreateVariation entity instance. |
| `Customer` | `($data): CustomerEntity` | Create a Customer entity instance. |
| `CustomerHealth` | `($data): CustomerHealthEntity` | Create a CustomerHealth entity instance. |
| `CustomerHealthAllCustomersItem` | `($data): CustomerHealthAllCustomersItemEntity` | Create a CustomerHealthAllCustomersItem entity instance. |
| `CustomerHealthViewsSummary` | `($data): CustomerHealthViewsSummaryEntity` | Create a CustomerHealthViewsSummary entity instance. |
| `Daily` | `($data): DailyEntity` | Create a Daily entity instance. |
| `DailyStatus` | `($data): DailyStatusEntity` | Create a DailyStatus entity instance. |
| `DedicatedAgentsDashboard` | `($data): DedicatedAgentsDashboardEntity` | Create a DedicatedAgentsDashboard entity instance. |
| `EnterpriseAgent` | `($data): EnterpriseAgentEntity` | Create an EnterpriseAgent entity instance. |
| `EnterpriseProduct` | `($data): EnterpriseProductEntity` | Create an EnterpriseProduct entity instance. |
| `ExactAvailability` | `($data): ExactAvailabilityEntity` | Create an ExactAvailability entity instance. |
| `ExactFormula` | `($data): ExactFormulaEntity` | Create an ExactFormula entity instance. |
| `ExtractV2` | `($data): ExtractV2Entity` | Create an ExtractV2 entity instance. |
| `FailedPost` | `($data): FailedPostEntity` | Create a FailedPost entity instance. |
| `File` | `($data): FileEntity` | Create a File entity instance. |
| `GenerateBlackoutSora2Prompt` | `($data): GenerateBlackoutSora2PromptEntity` | Create a GenerateBlackoutSora2Prompt entity instance. |
| `GeneratePomelliDemo` | `($data): GeneratePomelliDemoEntity` | Create a GeneratePomelliDemo entity instance. |
| `GeneratePrompt` | `($data): GeneratePromptEntity` | Create a GeneratePrompt entity instance. |
| `GenerateSora2Prompt` | `($data): GenerateSora2PromptEntity` | Create a GenerateSora2Prompt entity instance. |
| `Healthrx` | `($data): HealthrxEntity` | Create a Healthrx entity instance. |
| `InitResetProductV6` | `($data): InitResetProductV6Entity` | Create an InitResetProductV6 entity instance. |
| `Iri` | `($data): IriEntity` | Create an Iri entity instance. |
| `IrisCapability` | `($data): IrisCapabilityEntity` | Create an IrisCapability entity instance. |
| `IrisChat` | `($data): IrisChatEntity` | Create an IrisChat entity instance. |
| `IrisConnector` | `($data): IrisConnectorEntity` | Create an IrisConnector entity instance. |
| `IrisStatus` | `($data): IrisStatusEntity` | Create an IrisStatus entity instance. |
| `IrisTask` | `($data): IrisTaskEntity` | Create an IrisTask entity instance. |
| `IrisUsage` | `($data): IrisUsageEntity` | Create an IrisUsage entity instance. |
| `Landing` | `($data): LandingEntity` | Create a Landing entity instance. |
| `LandingStat` | `($data): LandingStatEntity` | Create a LandingStat entity instance. |
| `LandingStatus` | `($data): LandingStatusEntity` | Create a LandingStatus entity instance. |
| `LinkInBio` | `($data): LinkInBioEntity` | Create a LinkInBio entity instance. |
| `LinkInDm` | `($data): LinkInDmEntity` | Create a LinkInDm entity instance. |
| `LinkInPost` | `($data): LinkInPostEntity` | Create a LinkInPost entity instance. |
| `LinkUser` | `($data): LinkUserEntity` | Create a LinkUser entity instance. |
| `MediaAsset` | `($data): MediaAssetEntity` | Create a MediaAsset entity instance. |
| `Men` | `($data): MenEntity` | Create a Men entity instance. |
| `Microdrama` | `($data): MicrodramaEntity` | Create a Microdrama entity instance. |
| `MicrohubPublic` | `($data): MicrohubPublicEntity` | Create a MicrohubPublic entity instance. |
| `OnboardingStatus` | `($data): OnboardingStatusEntity` | Create an OnboardingStatus entity instance. |
| `OnboardingV6` | `($data): OnboardingV6Entity` | Create an OnboardingV6 entity instance. |
| `PaidUser` | `($data): PaidUserEntity` | Create a PaidUser entity instance. |
| `Pexel` | `($data): PexelEntity` | Create a Pexel entity instance. |
| `PhoneAdminAvailableAgentSource` | `($data): PhoneAdminAvailableAgentSourceEntity` | Create a PhoneAdminAvailableAgentSource entity instance. |
| `Product` | `($data): ProductEntity` | Create a Product entity instance. |
| `ProductDashboard` | `($data): ProductDashboardEntity` | Create a ProductDashboard entity instance. |
| `ProductDashboardView` | `($data): ProductDashboardViewEntity` | Create a ProductDashboardView entity instance. |
| `ProductDemo` | `($data): ProductDemoEntity` | Create a ProductDemo entity instance. |
| `ProductLanding` | `($data): ProductLandingEntity` | Create a ProductLanding entity instance. |
| `PublicResumeStatus` | `($data): PublicResumeStatusEntity` | Create a PublicResumeStatus entity instance. |
| `ReRollVideo` | `($data): ReRollVideoEntity` | Create a ReRollVideo entity instance. |
| `ReadRootGet` | `($data): ReadRootGetEntity` | Create a ReadRootGet entity instance. |
| `RecordDemoBooked` | `($data): RecordDemoBookedEntity` | Create a RecordDemoBooked entity instance. |
| `RefreshStat` | `($data): RefreshStatEntity` | Create a RefreshStat entity instance. |
| `RemixerClipper` | `($data): RemixerClipperEntity` | Create a RemixerClipper entity instance. |
| `ResetProduct` | `($data): ResetProductEntity` | Create a ResetProduct entity instance. |
| `RetryWebsiteScrape` | `($data): RetryWebsiteScrapeEntity` | Create a RetryWebsiteScrape entity instance. |
| `SaveSurvey` | `($data): SaveSurveyEntity` | Create a SaveSurvey entity instance. |
| `ScanSocial` | `($data): ScanSocialEntity` | Create a ScanSocial entity instance. |
| `ScanSocialsPublic` | `($data): ScanSocialsPublicEntity` | Create a ScanSocialsPublic entity instance. |
| `ScanSocialsStatus` | `($data): ScanSocialsStatusEntity` | Create a ScanSocialsStatus entity instance. |
| `ScheduleV2` | `($data): ScheduleV2Entity` | Create a ScheduleV2 entity instance. |
| `Scrape` | `($data): ScrapeEntity` | Create a Scrape entity instance. |
| `ScrapeWebsitePublic` | `($data): ScrapeWebsitePublicEntity` | Create a ScrapeWebsitePublic entity instance. |
| `ScrapedData` | `($data): ScrapedDataEntity` | Create a ScrapedData entity instance. |
| `ScrapingStatus` | `($data): ScrapingStatusEntity` | Create a ScrapingStatus entity instance. |
| `SelfServeActivate` | `($data): SelfServeActivateEntity` | Create a SelfServeActivate entity instance. |
| `Seo` | `($data): SeoEntity` | Create a Seo entity instance. |
| `SeoAiMention` | `($data): SeoAiMentionEntity` | Create a SeoAiMention entity instance. |
| `SeoBacklink` | `($data): SeoBacklinkEntity` | Create a SeoBacklink entity instance. |
| `SeoKeyword` | `($data): SeoKeywordEntity` | Create a SeoKeyword entity instance. |
| `SeoOverview` | `($data): SeoOverviewEntity` | Create a SeoOverview entity instance. |
| `SeoTraffic` | `($data): SeoTrafficEntity` | Create a SeoTraffic entity instance. |
| `ShareAccessLink` | `($data): ShareAccessLinkEntity` | Create a ShareAccessLink entity instance. |
| `Site` | `($data): SiteEntity` | Create a Site entity instance. |
| `Slide` | `($data): SlideEntity` | Create a Slide entity instance. |
| `SlugValidation` | `($data): SlugValidationEntity` | Create a SlugValidation entity instance. |
| `Social` | `($data): SocialEntity` | Create a Social entity instance. |
| `SocialScanPreview` | `($data): SocialScanPreviewEntity` | Create a SocialScanPreview entity instance. |
| `SocialScanProcess` | `($data): SocialScanProcessEntity` | Create a SocialScanProcess entity instance. |
| `SocialScanSave` | `($data): SocialScanSaveEntity` | Create a SocialScanSave entity instance. |
| `Sora2Avatar` | `($data): Sora2AvatarEntity` | Create a Sora2Avatar entity instance. |
| `Sora2AvatarAssetUpload` | `($data): Sora2AvatarAssetUploadEntity` | Create a Sora2AvatarAssetUpload entity instance. |
| `Sora2AvatarStat` | `($data): Sora2AvatarStatEntity` | Create a Sora2AvatarStat entity instance. |
| `Stat` | `($data): StatEntity` | Create a Stat entity instance. |
| `StatsRefreshBackfill` | `($data): StatsRefreshBackfillEntity` | Create a StatsRefreshBackfill entity instance. |
| `StatsRefreshIssue` | `($data): StatsRefreshIssueEntity` | Create a StatsRefreshIssue entity instance. |
| `StatsRefreshOverview` | `($data): StatsRefreshOverviewEntity` | Create a StatsRefreshOverview entity instance. |
| `StatsRefreshRunSummary` | `($data): StatsRefreshRunSummaryEntity` | Create a StatsRefreshRunSummary entity instance. |
| `StatsRefreshTaskTrigger` | `($data): StatsRefreshTaskTriggerEntity` | Create a StatsRefreshTaskTrigger entity instance. |
| `Stripe` | `($data): StripeEntity` | Create a Stripe entity instance. |
| `Style` | `($data): StyleEntity` | Create a Style entity instance. |
| `Template` | `($data): TemplateEntity` | Create a Template entity instance. |
| `TikTokCreatorInfo` | `($data): TikTokCreatorInfoEntity` | Create a TikTokCreatorInfo entity instance. |
| `TopPost` | `($data): TopPostEntity` | Create a TopPost entity instance. |
| `UploadPostAgent` | `($data): UploadPostAgentEntity` | Create an UploadPostAgent entity instance. |
| `User` | `($data): UserEntity` | Create an User entity instance. |
| `UserAgent` | `($data): UserAgentEntity` | Create an UserAgent entity instance. |
| `UserHealthDetail` | `($data): UserHealthDetailEntity` | Create an UserHealthDetail entity instance. |
| `UserWithAvatarSubmission` | `($data): UserWithAvatarSubmissionEntity` | Create an UserWithAvatarSubmission entity instance. |
| `UsersHealth` | `($data): UsersHealthEntity` | Create an UsersHealth entity instance. |
| `Video` | `($data): VideoEntity` | Create a Video entity instance. |
| `VideoRemixerWorker` | `($data): VideoRemixerWorkerEntity` | Create a VideoRemixerWorker entity instance. |
| `WatchdogRecovery` | `($data): WatchdogRecoveryEntity` | Create a WatchdogRecovery entity instance. |
| `WinningAd` | `($data): WinningAdEntity` | Create a WinningAd entity instance. |
| `XAdaptation` | `($data): XAdaptationEntity` | Create a XAdaptation entity instance. |
| `ZerohumanAdminAccount` | `($data): ZerohumanAdminAccountEntity` | Create a ZerohumanAdminAccount entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): mixed` | Load a single entity by match criteria, and return it. |
| `list` | `(?array $reqmatch = null, $ctrl): mixed` | List entities matching the criteria (call with no argument to list all), one per record. |
| `create` | `($reqdata, $ctrl): mixed` | Create a new entity, and return it. |
| `update` | `($reqdata, $ctrl): mixed` | Update an existing entity, and return it. |
| `patch` | `($reqdata, $ctrl): mixed` | Change part of an existing entity, and return it. |
| `remove` | `($reqmatch, $ctrl): mixed` | Remove an entity, and return it marked as deleted. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the entity, and `list` an `array` of entities, one
per record; an entity's `data_get()` reads its record (an `array`). They
throw on error, so wrap calls in `try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Create an instance: `$activate = $client->Activate();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activated_at` | `mixed` |  |
| `message` | `string` |  |
| `success` | `bool` |  |

#### Example: Create

```php
$activate = $client->Activate()->create([
    "user_id" => null, // string
    "message" => null, // string
    "success" => null, // bool
]);
```


### ActivateUser

Create an instance: `$activate_user = $client->ActivateUser();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activated_at` | `mixed` |  |
| `message` | `string` |  |
| `success` | `bool` |  |

#### Example: Create

```php
$activate_user = $client->ActivateUser()->create([
    "user_id" => null, // string
    "message" => null, // string
    "success" => null, // bool
]);
```


### ActiveOnboarding

Create an instance: `$active_onboarding = $client->ActiveOnboarding();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_step` | `mixed` |  |
| `has_active_onboarding` | `bool` |  |
| `onboarding_data_id` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ActiveOnboarding record (throws on error).
$active_onboarding = $client->ActiveOnboarding()->load();
```


### Admin

Create an instance: `$admin = $client->Admin();`

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
| `apply` | `bool` | Apply safe canonical or clean-only URL updates |
| `count` | `int` |  |
| `created_at` | `string` |  |
| `date_from` | `mixed` |  |
| `date_to` | `mixed` |  |
| `email` | `string` |  |
| `id` | `string` |  |
| `include_failed` | `bool` |  |
| `include_pending` | `bool` |  |
| `include_records` | `bool` | Include full per-field audit records in the response |
| `issue_ids` | `mixed` |  |
| `only_active` | `bool` | Limit the audit to active agents |
| `platform` | `mixed` |  |
| `posting_method` | `mixed` |  |
| `product_id` | `string` |  |
| `query` | `mixed` |  |
| `reason` | `mixed` |  |
| `regenerate` | `bool` |  |
| `status` | `string` |  |
| `user_membership` | `mixed` |  |
| `user_name` | `mixed` |  |
| `user_onboarding_step` | `mixed` |  |
| `video_type` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Admin record (throws on error).
$admin = $client->Admin()->load(["date" => "date"]);
```

#### Example: List

```php
// list() returns an array of Admin entities, one per record (throws on error).
$admins = $client->Admin()->list();
```

#### Example: Create

```php
$admin = $client->Admin()->create([
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


### AdminAccountReset

Create an instance: `$admin_account_reset = $client->AdminAccountReset();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_ids` | `array` |  |
| `agent_ids_sha256` | `string` |  |
| `backup_sha256` | `string` |  |
| `batch_size` | `int` |  |
| `confirmation` | `string` |  |
| `customer_email` | `string` |  |
| `pc_name` | `string` |  |
| `phase` | `string` |  |
| `product_id` | `string` |  |
| `video_ids` | `array` |  |

#### Example: Create

```php
$admin_account_reset = $client->AdminAccountReset()->create([
    "agent_ids" => null, // array
    "agent_ids_sha256" => null, // string
    "backup_sha256" => null, // string
    "confirmation" => null, // string
    "customer_email" => null, // string
    "pc_name" => null, // string
    "product_id" => null, // string
]);
```


### AdminCarousel

Create an instance: `$admin_carousel = $client->AdminCarousel();`

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
| `day` | `mixed` |  |
| `dry_run` | `bool` |  |
| `engine_run` | `string` |  |
| `expected_revision` | `string` |  |
| `formula` | `array` |  |
| `formula_id` | `string` |  |
| `prompt` | `string` |  |
| `slides` | `array` |  |
| `title` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AdminCarousel record (throws on error).
$admin_carousel = $client->AdminCarousel()->load(["batch_id" => "batch_id"]);
```

#### Example: Create

```php
$admin_carousel = $client->AdminCarousel()->create([
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


### AdminCarouselDemoReview

Create an instance: `$admin_carousel_demo_review = $client->AdminCarouselDemoReview();`

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
| `items` | `array` |  |
| `reason` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AdminCarouselDemoReview record (throws on error).
$admin_carousel_demo_review = $client->AdminCarouselDemoReview()->load(["id" => "admin_carousel_demo_review_id"]);
```

#### Example: Create

```php
$admin_carousel_demo_review = $client->AdminCarouselDemoReview()->create([
    "items" => null, // array
]);
```


### AdminCustomer

Create an instance: `$admin_customer = $client->AdminCustomer();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `mixed` |  |
| `active_vireel_agents` | `int` |  |
| `agents` | `array` |  |
| `billing_source` | `string` |  |
| `contracted_agents` | `mixed` |  |
| `email` | `string` |  |
| `membership` | `mixed` |  |
| `name` | `string` |  |
| `pfa_only_agents` | `int` |  |
| `severity` | `string` |  |
| `status` | `string` |  |
| `subscription_status` | `mixed` |  |
| `user_id` | `string` |  |

#### Example: List

```php
// list() returns an array of AdminCustomer entities, one per record (throws on error).
$admin_customers = $client->AdminCustomer()->list();
```


### AdminCustomerSuccess

Create an instance: `$admin_customer_success = $client->AdminCustomerSuccess();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_agents` | `int` |  |
| `active_products` | `int` |  |
| `agents_count` | `int` |  |
| `auto_schedule_status` | `string` |  |
| `days_until_period_end` | `mixed` |  |
| `email` | `string` |  |
| `feature_impact` | `string` |  |
| `last_notification_at` | `mixed` |  |
| `membership` | `mixed` |  |
| `name` | `string` |  |
| `notification_count` | `int` |  |
| `notification_events` | `array` |  |
| `priority` | `string` |  |
| `severity` | `string` |  |
| `status_label` | `string` |  |
| `subscription_current_period_end` | `mixed` |  |
| `subscription_status` | `mixed` |  |
| `upcoming_posts` | `int` |  |
| `user_id` | `string` |  |

#### Example: List

```php
// list() returns an array of AdminCustomerSuccess entities, one per record (throws on error).
$admin_customer_successs = $client->AdminCustomerSuccess()->list();
```


### AdminGeneratedVideo

Create an instance: `$admin_generated_video = $client->AdminGeneratedVideo();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `string` |  |
| `agent_name` | `mixed` |  |
| `created_at` | `string` |  |
| `duration` | `float` |  |
| `generation_status` | `array` |  |
| `id` | `string` |  |
| `product_id` | `string` |  |
| `thumbnail_url` | `mixed` |  |
| `title` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `mixed` |  |
| `url` | `string` |  |

#### Example: List

```php
// list() returns an array of AdminGeneratedVideo entities, one per record (throws on error).
$admin_generated_videos = $client->AdminGeneratedVideo()->list(["user_id" => "example"]);
```


### AdminHealthrx

Create an instance: `$admin_healthrx = $client->AdminHealthrx();`

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
| `delivery_enabled` | `bool` |  |
| `id` | `string` |  |
| `option_id` | `string` |  |
| `plan` | `array` |  |
| `preparation_enabled` | `bool` |  |
| `product_id` | `string` |  |
| `reason` | `string` |  |
| `request_key` | `string` |  |
| `revision` | `int` |  |
| `schedule_enabled` | `bool` |  |
| `version` | `string` |  |
| `viewed` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AdminHealthrx record (throws on error).
$admin_healthrx = $client->AdminHealthrx()->load(["item_id" => "item_id", "kind" => "kind"]);
```

#### Example: Create

```php
$admin_healthrx = $client->AdminHealthrx()->create([
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


### AdminInsight

Create an instance: `$admin_insight = $client->AdminInsight();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `customer_success_cases` | `array` |  |
| `customers` | `array` |  |
| `generated_at` | `string` |  |
| `pfa_database` | `array` |  |
| `recent_signups` | `array` |  |
| `summary` | `array` |  |
| `vireel_database` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AdminInsight record (throws on error).
$admin_insight = $client->AdminInsight()->load();
```

#### Example: List

```php
// list() returns an array of AdminInsight entities, one per record (throws on error).
$admin_insights = $client->AdminInsight()->list();
```


### AdminLandingTask

Create an instance: `$admin_landing_task = $client->AdminLandingTask();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `task_id` | `string` |  |

#### Example: Create

```php
$admin_landing_task = $client->AdminLandingTask()->create([
    "user_id" => null, // string
    "task_id" => null, // string
]);
```


### AdminMetricsSummary

Create an instance: `$admin_metrics_summary = $client->AdminMetricsSummary();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `paid_users_by_level` | `array` |  |
| `total_cancellations` | `int` |  |
| `total_previews_generated` | `int` |  |
| `total_signups` | `int` |  |
| `total_videos_generated` | `int` |  |
| `url_attempts` | `int` |  |
| `user_credits` | `array` |  |
| `user_gifted_credits` | `array` |  |

#### Example: List

```php
// list() returns an array of AdminMetricsSummary entities, one per record (throws on error).
$admin_metrics_summarys = $client->AdminMetricsSummary()->list();
```


### AdminPost

Create an instance: `$admin_post = $client->AdminPost();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `admin_job_ids` | `mixed` |  |
| `agent_id` | `string` |  |
| `agent_name` | `mixed` |  |
| `agent_platform_urls` | `mixed` |  |
| `agent_url` | `mixed` |  |
| `comments` | `int` |  |
| `error_message` | `mixed` |  |
| `failed_at` | `mixed` |  |
| `id` | `string` |  |
| `instagram_posted_by` | `mixed` |  |
| `instagram_posted_url` | `mixed` |  |
| `instagram_scraped_social_post_id` | `string` |  |
| `is_instagram_posted` | `bool` |  |
| `is_tiktok_posted` | `bool` |  |
| `is_youtube_posted` | `bool` |  |
| `last_refreshed_at` | `mixed` |  |
| `likes` | `int` |  |
| `platform_post_methods` | `mixed` |  |
| `platform_urls` | `mixed` |  |
| `post_method` | `mixed` |  |
| `post_platforms` | `mixed` |  |
| `post_url` | `mixed` |  |
| `posted_at` | `mixed` |  |
| `product_id` | `string` |  |
| `results_status` | `mixed` |  |
| `scheduled_datetime` | `string` |  |
| `source_type` | `string` |  |
| `status` | `string` |  |
| `tiktok_posted_by` | `mixed` |  |
| `tiktok_posted_url` | `mixed` |  |
| `tiktok_scraped_social_post_id` | `string` |  |
| `upload_post_error` | `mixed` |  |
| `upload_post_status` | `mixed` |  |
| `upload_post_uploads` | `mixed` |  |
| `user_email` | `string` |  |
| `user_id` | `string` |  |
| `user_name` | `mixed` |  |
| `video_id` | `string` |  |
| `video_url` | `mixed` |  |
| `views` | `int` |  |
| `youtube_posted_by` | `mixed` |  |
| `youtube_posted_url` | `mixed` |  |
| `youtube_scraped_social_post_id` | `string` |  |

#### Example: List

```php
// list() returns an array of AdminPost entities, one per record (throws on error).
$admin_posts = $client->AdminPost()->list();
```


### AdminRecentSignup

Create an instance: `$admin_recent_signup = $client->AdminRecentSignup();`

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
| `email_source` | `mixed` |  |
| `error_message` | `mixed` |  |
| `flow_variant` | `string` |  |
| `id` | `string` |  |
| `inactive_minutes` | `int` |  |
| `last_notification_at` | `mixed` |  |
| `last_seen_at` | `string` |  |
| `likely_cause` | `string` |  |
| `notification_count` | `int` |  |
| `notification_events` | `array` |  |
| `product_id` | `string` |  |
| `product_name` | `mixed` |  |
| `product_url` | `string` |  |
| `severity` | `string` |  |
| `social_scan_status` | `mixed` |  |
| `stage_label` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `mixed` |  |
| `website_scrape_status` | `mixed` |  |

#### Example: List

```php
// list() returns an array of AdminRecentSignup entities, one per record (throws on error).
$admin_recent_signups = $client->AdminRecentSignup()->list();
```


### AdminSlideshowDiag

Create an instance: `$admin_slideshow_diag = $client->AdminSlideshowDiag();`

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
| `day` | `mixed` |  |
| `formula_id` | `string` |  |
| `id` | `string` |  |
| `title` | `string` |  |

#### Example: Create

```php
$admin_slideshow_diag = $client->AdminSlideshowDiag()->create([
    "id" => null, // string
]);
```


### AdminSlideshowImport

Create an instance: `$admin_slideshow_import = $client->AdminSlideshowImport();`

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
| `dry_run` | `bool` |  |
| `engine_run` | `string` |  |
| `formula_id` | `string` |  |
| `slides` | `array` |  |
| `title` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AdminSlideshowImport record (throws on error).
$admin_slideshow_import = $client->AdminSlideshowImport()->load(["batch_id" => "batch_id"]);
```

#### Example: Create

```php
$admin_slideshow_import = $client->AdminSlideshowImport()->create([
    "agent_id" => null, // string
    "batch_id" => null, // string
    "caption" => null, // string
    "day" => null, // string
    "formula_id" => null, // string
    "slides" => null, // array
    "title" => null, // string
]);
```


### AdminUserView

Create an instance: `$admin_user_view = $client->AdminUserView();`

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
| `account_type` | `mixed` |  |
| `admin_notes` | `mixed` |  |
| `agents_count` | `int` |  |
| `created_at` | `string` |  |
| `credits` | `int` |  |
| `email` | `string` |  |
| `id` | `string` |  |
| `industry` | `mixed` |  |
| `is_admin` | `bool` |  |
| `is_bookmarked` | `bool` |  |
| `is_internal_user` | `bool` |  |
| `membership` | `mixed` |  |
| `name` | `string` |  |
| `new_email` | `string` |  |
| `partner_external_user_id` | `string` |  |
| `partner_policy_code` | `mixed` |  |
| `partner_source` | `mixed` |  |
| `product_name` | `mixed` |  |
| `product_url` | `mixed` |  |
| `skip` | `bool` |  |
| `subscription_details` | `mixed` |  |
| `subscription_status` | `mixed` |  |

#### Example: List

```php
// list() returns an array of AdminUserView entities, one per record (throws on error).
$admin_user_views = $client->AdminUserView()->list();
```

#### Example: Create

```php
$admin_user_view = $client->AdminUserView()->create([
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


### AdminUsersTableItem

Create an instance: `$admin_users_table_item = $client->AdminUsersTableItem();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activated` | `bool` |  |
| `agents_count` | `int` |  |
| `created_at` | `string` |  |
| `credits` | `int` |  |
| `demo_booked` | `bool` |  |
| `email` | `string` |  |
| `id` | `string` |  |
| `membership` | `mixed` |  |
| `name` | `string` |  |
| `onboarding_flow` | `string` |  |
| `product_name` | `mixed` |  |
| `product_url` | `mixed` |  |
| `survey_data` | `mixed` |  |

#### Example: List

```php
// list() returns an array of AdminUsersTableItem entities, one per record (throws on error).
$admin_users_table_items = $client->AdminUsersTableItem()->list();
```


### AdminVideoRemixer

Create an instance: `$admin_video_remixer = $client->AdminVideoRemixer();`

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
| `allowed_platforms` | `array` |  |
| `anchor_clip_id` | `string` |  |
| `atomicity_class` | `mixed` |  |
| `auto_render` | `bool` |  |
| `campaign_allowed` | `bool` |  |
| `channel` | `string` |  |
| `channel_default` | `string` |  |
| `clip_id` | `string` |  |
| `clip_ids` | `array` |  |
| `collected_at` | `string` |  |
| `comments` | `mixed` |  |
| `completion_rate` | `mixed` |  |
| `confirmed_duplicate_of` | `mixed` |  |
| `consent_doc_uri` | `string` |  |
| `contact` | `string` |  |
| `conversions` | `mixed` |  |
| `count` | `int` |  |
| `creator` | `string` |  |
| `creator_id` | `string` |  |
| `crop_window` | `mixed` |  |
| `cta_product_id` | `string` |  |
| `days` | `int` |  |
| `derivative_edits_allowed` | `bool` |  |
| `enabled` | `bool` |  |
| `end_ms` | `mixed` |  |
| `enqueue` | `bool` |  |
| `errors` | `array` |  |
| `evidence` | `string` |  |
| `expected_revision` | `mixed` |  |
| `expected_revisions` | `array` |  |
| `external_ai_allowed` | `bool` |  |
| `file` | `string` |  |
| `followers` | `mixed` |  |
| `formula_id` | `string` |  |
| `formula_ids` | `array` |  |
| `handles` | `array` |  |
| `hook_subtype` | `mixed` |  |
| `hour_utc` | `int` |  |
| `human_role` | `string` |  |
| `idempotency_key` | `string` |  |
| `items` | `array` |  |
| `kim_clip_ids` | `array` |  |
| `kind` | `string` |  |
| `levels` | `array` |  |
| `likes` | `mixed` |  |
| `media_enabled` | `bool` |  |
| `medical_claim_present` | `bool` |  |
| `minute_utc` | `int` |  |
| `music_bed_allowed` | `bool` |  |
| `music_policy` | `string` |  |
| `name` | `string` |  |
| `niche` | `string` |  |
| `notes` | `string` |  |
| `origin` | `string` |  |
| `owner_waiver` | `bool` |  |
| `paid_ads_allowed` | `bool` |  |
| `patient_identifiable` | `bool` |  |
| `person_type` | `string` |  |
| `pipeline` | `bool` |  |
| `planning_only` | `bool` |  |
| `platform` | `string` |  |
| `platform_post_id` | `string` |  |
| `policy` | `array` |  |
| `polish` | `string` |  |
| `post_url` | `string` |  |
| `posted_at` | `string` |  |
| `primary_role` | `mixed` |  |
| `purpose` | `string` |  |
| `rate` | `float` |  |
| `rationale` | `string` |  |
| `reason` | `string` |  |
| `reference_source_id` | `string` |  |
| `requires_medical_review` | `bool` |  |
| `review_status` | `mixed` |  |
| `revision` | `int` |  |
| `rights_expires_at` | `mixed` |  |
| `rights_status` | `string` |  |
| `run_id` | `string` |  |
| `sample_links` | `array` |  |
| `secondary_roles` | `mixed` |  |
| `seconds` | `int` |  |
| `seed` | `int` |  |
| `seed_base` | `int` |  |
| `sensitive_personal_data_present` | `bool` |  |
| `shares` | `mixed` |  |
| `shoot` | `string` |  |
| `slots` | `array` |  |
| `soundbite_title` | `mixed` |  |
| `source` | `string` |  |
| `source_id` | `string` |  |
| `source_ids` | `array` |  |
| `spend_usd` | `mixed` |  |
| `spiciness` | `mixed` |  |
| `spiciness_notes` | `string` |  |
| `start_ms` | `mixed` |  |
| `status` | `string` |  |
| `terry_clip_ids` | `array` |  |
| `testimonial_strength` | `mixed` |  |
| `testimonial_type` | `mixed` |  |
| `tier` | `string` |  |
| `timeline` | `array` |  |
| `topic` | `string` |  |
| `topic_tags` | `mixed` |  |
| `total_target_ms` | `int` |  |
| `use_learned_weights` | `bool` |  |
| `views` | `mixed` |  |
| `window` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AdminVideoRemixer record (throws on error).
$admin_video_remixer = $client->AdminVideoRemixer()->load(["clip_id" => "clip_id"]);
```

#### Example: Create

```php
$admin_video_remixer = $client->AdminVideoRemixer()->create([
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


### AdvanceStep

Create an instance: `$advance_step = $client->AdvanceStep();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_step` | `string` |  |
| `onboarding_data_id` | `string` | UUID of the OnboardingData record |
| `success` | `bool` |  |
| `to_step` | `string` | Target step name |

#### Example: Create

```php
$advance_step = $client->AdvanceStep()->create([
    "onboarding_data_id" => null, // string
    "to_step" => null, // string
]);
```


### Agent

Create an instance: `$agent = $client->Agent();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_connections` | `int` |  |
| `at_capacity` | `bool` |  |
| `id` | `string` |  |
| `is_active` | `bool` |  |
| `name` | `string` |  |
| `tiktok_stats` | `mixed` |  |
| `type` | `string` |  |

#### Example: List

```php
// list() returns an array of Agent entities, one per record (throws on error).
$agents = $client->Agent()->list();
```


### AgentAccessCustomersHealth

Create an instance: `$agent_access_customers_health = $client->AgentAccessCustomersHealth();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountType` | `mixed` |  |
| `agentQuota` | `int` |  |
| `assignedAgentsByType` | `array` |  |
| `assignedAgentsTotal` | `int` |  |
| `createdAt` | `string` |  |
| `email` | `string` |  |
| `isInternalUser` | `mixed` |  |
| `membership` | `mixed` |  |
| `name` | `string` |  |
| `performance` | `array` |  |
| `productCount` | `int` |  |
| `subscriptionCurrentPeriodEnd` | `mixed` |  |
| `subscriptionDetails` | `mixed` |  |
| `subscriptionStatus` | `mixed` |  |
| `usage` | `array` |  |
| `userId` | `string` |  |

#### Example: List

```php
// list() returns an array of AgentAccessCustomersHealth entities, one per record (throws on error).
$agent_access_customers_healths = $client->AgentAccessCustomersHealth()->list();
```


### AgentAccessOverview

Create an instance: `$agent_access_overview = $client->AgentAccessOverview();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeUsers` | `int` |  |
| `generatedAt` | `string` |  |
| `newUsersYesterday` | `int` |  |
| `onboardingContextCounts` | `array` |  |
| `onboardingCurrentStepCounts` | `array` |  |
| `onboardingCurrentStepWindow` | `array` |  |
| `onboardingFlowVariantCounts` | `array` |  |
| `onboardingLockedUntilActivation` | `int` |  |
| `onboardingRecordsTotal` | `int` |  |
| `onboardingRecordsWindow` | `int` |  |
| `onboardingSocialScanStatusCounts` | `array` |  |
| `onboardingWebsiteScrapeStatusCounts` | `array` |  |
| `subscriptionStatusCounts` | `array` |  |
| `totalInternalUsers` | `int` |  |
| `totalUsers` | `int` |  |
| `trialStartedYesterday` | `int` |  |
| `trialingUsers` | `int` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AgentAccessOverview record (throws on error).
$agent_access_overview = $client->AgentAccessOverview()->load();
```


### AgentAccessPhilHourlyNotification

Create an instance: `$agent_access_phil_hourly_notification = $client->AgentAccessPhilHourlyNotification();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `generatedAt` | `string` |  |
| `phoneHealth` | `array` |  |
| `scheduledPosts` | `array` |  |
| `targetDate` | `string` |  |
| `uploadPostInstagramHealth` | `array` |  |
| `uploadPostTiktokHealth` | `array` |  |
| `uploadPostYoutubeHealth` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AgentAccessPhilHourlyNotification record (throws on error).
$agent_access_phil_hourly_notification = $client->AgentAccessPhilHourlyNotification()->load();
```


### AgentAccessPhilStatsRefresh

Create an instance: `$agent_access_phil_stats_refresh = $client->AgentAccessPhilStatsRefresh();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `generatedAt` | `string` |  |
| `statsRefresh` | `array` |  |
| `targetDate` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AgentAccessPhilStatsRefresh record (throws on error).
$agent_access_phil_stats_refresh = $client->AgentAccessPhilStatsRefresh()->load();
```


### AgentAccessPhilVideo

Create an instance: `$agent_access_phil_video = $client->AgentAccessPhilVideo();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `generatedAt` | `string` |  |
| `targetDate` | `string` |  |
| `videos` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AgentAccessPhilVideo record (throws on error).
$agent_access_phil_video = $client->AgentAccessPhilVideo()->load();
```


### AgentAccessUserAgent

Create an instance: `$agent_access_user_agent = $client->AgentAccessUserAgent();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentQuota` | `int` |  |
| `agents` | `array` |  |
| `assignedByType` | `array` |  |
| `assignedTotal` | `int` |  |
| `email` | `string` |  |
| `products` | `array` |  |
| `userId` | `string` |  |

#### Example: List

```php
// list() returns an array of AgentAccessUserAgent entities, one per record (throws on error).
$agent_access_user_agents = $client->AgentAccessUserAgent()->list(["email" => "example"]);
```


### AgentAccessUserPhoneFarm

Create an instance: `$agent_access_user_phone_farm = $client->AgentAccessUserPhoneFarm();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar` | `mixed` |  |
| `facebookUrl` | `mixed` |  |
| `id` | `string` |  |
| `instagramUrl` | `mixed` |  |
| `lastAdminSyncedAt` | `mixed` |  |
| `name` | `string` |  |
| `productId` | `mixed` |  |
| `productName` | `mixed` |  |
| `tiktokUrl` | `mixed` |  |
| `type` | `mixed` |  |
| `uploadPostPlatforms` | `mixed` |  |
| `youtubeUrl` | `mixed` |  |

#### Example: List

```php
// list() returns an array of AgentAccessUserPhoneFarm entities, one per record (throws on error).
$agent_access_user_phone_farms = $client->AgentAccessUserPhoneFarm()->list(["email" => "example"]);
```


### AgentAccessUserPost

Create an instance: `$agent_access_user_post = $client->AgentAccessUserPost();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deltaYesterday` | `int` |  |
| `expectedVideosPerDay` | `int` |  |
| `postedToday` | `int` |  |
| `postedYesterday` | `int` |  |
| `productId` | `mixed` |  |
| `productName` | `mixed` |  |

#### Example: List

```php
// list() returns an array of AgentAccessUserPost entities, one per record (throws on error).
$agent_access_user_posts = $client->AgentAccessUserPost()->list(["email" => "example"]);
```


### AgentAccessUserSummary

Create an instance: `$agent_access_user_summary = $client->AgentAccessUserSummary();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deletedAt` | `mixed` |  |
| `id` | `string` |  |
| `isActive` | `mixed` |  |
| `name` | `string` |  |
| `url` | `string` |  |

#### Example: List

```php
// list() returns an array of AgentAccessUserSummary entities, one per record (throws on error).
$agent_access_user_summarys = $client->AgentAccessUserSummary()->list(["email" => "example"]);
```


### AgentAccessUserVideo

Create an instance: `$agent_access_user_video = $client->AgentAccessUserVideo();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allTime` | `array` |  |
| `email` | `string` |  |
| `today` | `array` |  |
| `userId` | `string` |  |
| `yesterday` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AgentAccessUserVideo record (throws on error).
$agent_access_user_video = $client->AgentAccessUserVideo()->load(["email" => "email"]);
```


### AgentAccessUserWinningAd

Create an instance: `$agent_access_user_winning_ad = $client->AgentAccessUserWinningAd();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `productId` | `string` |  |
| `productName` | `string` |  |
| `winningAds` | `array` |  |
| `winningAdsCount` | `int` |  |

#### Example: List

```php
// list() returns an array of AgentAccessUserWinningAd entities, one per record (throws on error).
$agent_access_user_winning_ads = $client->AgentAccessUserWinningAd()->list(["email" => "example"]);
```


### AgentAccessWinningAdsSummary

Create an instance: `$agent_access_winning_ads_summary = $client->AgentAccessWinningAdsSummary();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `name` | `string` |  |
| `productCount` | `int` |  |
| `productsWithWinningAds` | `int` |  |
| `subscriptionStatus` | `mixed` |  |
| `totalWinningAds` | `int` |  |
| `userId` | `string` |  |

#### Example: List

```php
// list() returns an array of AgentAccessWinningAdsSummary entities, one per record (throws on error).
$agent_access_winning_ads_summarys = $client->AgentAccessWinningAdsSummary()->list();
```


### AgentDetail

Create an instance: `$agent_detail = $client->AgentDetail();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeConnections` | `mixed` |  |
| `assignedAt` | `mixed` |  |
| `avatar` | `string` |  |
| `bio` | `mixed` |  |
| `facebookUrl` | `mixed` |  |
| `id` | `string` |  |
| `instagramUrl` | `mixed` |  |
| `isActive` | `bool` |  |
| `name` | `string` |  |
| `role` | `mixed` |  |
| `tiktokStats` | `mixed` |  |
| `tiktokUrl` | `mixed` |  |
| `type` | `string` |  |
| `uploadPostPlatforms` | `mixed` |  |
| `youtubeUrl` | `mixed` |  |

#### Example: List

```php
// list() returns an array of AgentDetail entities, one per record (throws on error).
$agent_details = $client->AgentDetail()->list();
```


### AgentHealth

Create an instance: `$agent_health = $client->AgentHealth();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `daily` | `array` |  |
| `dates` | `array` |  |
| `generated_at` | `string` |  |
| `groups` | `array` |  |
| `latest` | `array` |  |
| `live_date` | `mixed` |  |
| `phone_admin_generated_at` | `string` |  |
| `platform` | `string` |  |
| `post_target` | `int` |  |
| `qa_managed_agent_ids` | `array` |  |
| `scope_prefixes` | `array` |  |
| `timezone` | `string` |  |
| `warmup_target` | `int` |  |

#### Example: List

```php
// list() returns an array of AgentHealth entities, one per record (throws on error).
$agent_healths = $client->AgentHealth()->list();
```


### AgentHealthCustomerOption

Create an instance: `$agent_health_customer_option = $client->AgentHealthCustomerOption();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_count` | `int` |  |
| `email` | `string` |  |
| `user_id` | `string` |  |

#### Example: List

```php
// list() returns an array of AgentHealthCustomerOption entities, one per record (throws on error).
$agent_health_customer_options = $client->AgentHealthCustomerOption()->list();
```


### AgentHealthDetail

Create an instance: `$agent_health_detail = $client->AgentHealthDetail();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived_issue_total` | `int` |  |
| `date` | `string` |  |
| `generated_at` | `string` |  |
| `group_id` | `string` |  |
| `has_more` | `bool` |  |
| `issue_total` | `int` |  |
| `issues` | `array` |  |
| `limit` | `int` |  |
| `metric` | `string` |  |
| `offset` | `int` |  |
| `warmup_runs` | `array` |  |
| `warning_total` | `int` |  |
| `warnings` | `array` |  |

#### Example: List

```php
// list() returns an array of AgentHealthDetail entities, one per record (throws on error).
$agent_health_details = $client->AgentHealthDetail()->list(["date" => "example", "group_id" => "example"]);
```


### AgentPost

Create an instance: `$agent_post = $client->AgentPost();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comments` | `int` |  |
| `error_message` | `mixed` |  |
| `id` | `string` |  |
| `likes` | `int` |  |
| `product_id` | `string` |  |
| `results` | `mixed` |  |
| `scheduled_datetime` | `string` |  |
| `source_type` | `string` |  |
| `status` | `string` |  |
| `user_email` | `string` |  |
| `user_id` | `string` |  |
| `user_name` | `mixed` |  |
| `video_id` | `string` |  |
| `video_url` | `mixed` |  |
| `views` | `int` |  |

#### Example: List

```php
// list() returns an array of AgentPost entities, one per record (throws on error).
$agent_posts = $client->AgentPost()->list(["id" => "example"]);
```


### AgentStat

Create an instance: `$agent_stat = $client->AgentStat();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agents_needed` | `int` |  |
| `dedicated_agents` | `array` |  |
| `shared_agents` | `array` |  |
| `total_agents` | `int` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AgentStat record (throws on error).
$agent_stat = $client->AgentStat()->load();
```


### AgentSummary

Create an instance: `$agent_summary = $client->AgentSummary();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_count` | `int` |  |
| `favicon_url` | `mixed` |  |
| `product_id` | `string` |  |
| `product_name` | `string` |  |

#### Example: List

```php
// list() returns an array of AgentSummary entities, one per record (throws on error).
$agent_summarys = $client->AgentSummary()->list();
```


### AgentsSummary

Create an instance: `$agents_summary = $client->AgentsSummary();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `total_agents` | `int` |  |
| `total_agents_count_sum` | `int` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AgentsSummary record (throws on error).
$agents_summary = $client->AgentsSummary()->load();
```


### AnalysisStatus

Create an instance: `$analysis_status = $client->AnalysisStatus();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AnalysisStatus record (throws on error).
$analysis_status = $client->AnalysisStatus()->load();
```


### AnalyticsPost

Create an instance: `$analytics_post = $client->AnalyticsPost();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent` | `mixed` |  |
| `comment` | `mixed` |  |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `product_id` | `string` |  |
| `queue_position` | `mixed` |  |
| `results` | `mixed` |  |
| `scheduled_datetime` | `string` |  |
| `scraped_posts` | `mixed` |  |
| `source_type` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |
| `video` | `mixed` |  |

#### Example: List

```php
// list() returns an array of AnalyticsPost entities, one per record (throws on error).
$analytics_posts = $client->AnalyticsPost()->list(["date_from" => "example"]);
```


### AnalyzeProduct

Create an instance: `$analyze_product = $client->AnalyzeProduct();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `instagram_username` | `mixed` |  |
| `message` | `string` |  |
| `status` | `string` |  |
| `url` | `string` |  |

#### Example: Create

```php
$analyze_product = $client->AnalyzeProduct()->create([
    "url" => null, // string
]);
```


### AssignAgent

Create an instance: `$assign_agent = $client->AssignAgent();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent` | `array` | Agent information for V6. |
| `assignment` | `array` | Assignment information for V6. |
| `mock_agents` | `array` |  |
| `onboarding_data_id` | `string` | UUID of the OnboardingData record |

#### Example: Create

```php
$assign_agent = $client->AssignAgent()->create([
    "onboarding_data_id" => null, // string
]);
```


### Auth

Create an instance: `$auth = $client->Auth();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |


### AutoScheduleSetting

Create an instance: `$auto_schedule_setting = $client->AutoScheduleSetting();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `can_enable_repost` | `bool` |  |
| `effective_posted_video_reuse_percent` | `int` |  |
| `enabled_video_types` | `mixed` | List of enabled video type filters |
| `is_enabled` | `bool` |  |
| `lock_video_regeneration_controls` | `bool` |  |
| `membership_tier` | `string` |  |
| `posted_video_reuse_percent` | `mixed` |  |
| `product_id` | `string` |  |
| `repost_source` | `mixed` |  |
| `videos_per_day` | `int` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AutoScheduleSetting record (throws on error).
$auto_schedule_setting = $client->AutoScheduleSetting()->load();
```


### BulkTikTokStatsUpdate

Create an instance: `$bulk_tik_tok_stats_update = $client->BulkTikTokStatsUpdate();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `failedIds` | `array` |  |
| `updatedCount` | `int` |  |
| `updates` | `array` |  |


### Carousel

Create an instance: `$carousel = $client->Carousel();`

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
| `audit_created_at` | `mixed` |  |
| `audit_snapshot_sha256` | `mixed` |  |
| `caption` | `mixed` |  |
| `comments` | `mixed` |  |
| `fit_score` | `mixed` |  |
| `format` | `string` |  |
| `formula` | `array` |  |
| `formula_id` | `string` |  |
| `formula_name` | `mixed` |  |
| `generation` | `array` |  |
| `id` | `string` |  |
| `image_prompt` | `mixed` |  |
| `likes` | `mixed` |  |
| `main_prompt` | `mixed` |  |
| `metrics_updated_at` | `mixed` |  |
| `post_url` | `mixed` |  |
| `profile_url` | `mixed` |  |
| `qa` | `array` |  |
| `qa_status` | `string` |  |
| `qa_verdict` | `mixed` |  |
| `quality_score` | `mixed` |  |
| `queue_id` | `string` |  |
| `relevance_score` | `mixed` |  |
| `scheduled_at` | `string` |  |
| `slide_count` | `int` |  |
| `slides` | `array` |  |
| `source` | `array` |  |
| `status` | `string` |  |
| `thumbnail_url` | `mixed` |  |
| `title` | `string` |  |
| `video_id` | `string` |  |
| `views` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Carousel record (throws on error).
$carousel = $client->Carousel()->load(["id" => "carousel_id"]);
```

#### Example: List

```php
// list() returns an array of Carousel entities, one per record (throws on error).
$carousels = $client->Carousel()->list();
```

#### Example: Create

```php
$carousel = $client->Carousel()->create([
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


### CarouselAgentDetail

Create an instance: `$carousel_agent_detail = $client->CarouselAgentDetail();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `string` |  |
| `agent_name` | `string` |  |
| `connection_status` | `mixed` |  |
| `followers` | `mixed` |  |
| `following` | `mixed` |  |
| `metrics_updated_at` | `mixed` |  |
| `phone_admin_status` | `string` |  |
| `profile_likes` | `mixed` |  |
| `profile_url` | `mixed` |  |
| `warmup_days` | `mixed` |  |
| `warmup_hold_until` | `mixed` |  |
| `warmup_status` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CarouselAgentDetail record (throws on error).
$carousel_agent_detail = $client->CarouselAgentDetail()->load(["agent_id" => "agent_id"]);
```


### CarouselStatus

Create an instance: `$carousel_status = $client->CarouselStatus();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `caption` | `mixed` |  |
| `error` | `mixed` |  |
| `id` | `string` |  |
| `image_model` | `mixed` |  |
| `image_provider` | `mixed` |  |
| `image_task_id` | `string` |  |
| `image_url` | `mixed` |  |
| `index` | `int` |  |
| `prompt` | `mixed` |  |
| `status` | `string` |  |

#### Example: List

```php
// list() returns an array of CarouselStatus entities, one per record (throws on error).
$carousel_statuss = $client->CarouselStatus()->list(["id" => "example"]);
```


### Chat

Create an instance: `$chat = $client->Chat();`

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

```php
$chat = $client->Chat()->create([
    "session_id" => null, // string
    "idempotencyKey" => null, // string
    "message" => null, // string
    "sessionId" => null, // string
]);
```


### ChatHistory

Create an instance: `$chat_history = $client->ChatHistory();`

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
| `messages` | `array` |  |
| `model` | `mixed` |  |
| `onboardingDataId` | `string` |  |
| `routeRecommendation` | `mixed` |  |
| `salesStage` | `string` |  |
| `selectedPlan` | `mixed` |  |
| `session` | `array` |  |
| `sessionId` | `string` |  |
| `status` | `string` |  |
| `updatedAt` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ChatHistory record (throws on error).
$chat_history = $client->ChatHistory()->load(["session_id" => "session_id"]);
```

#### Example: Create

```php
$chat_history = $client->ChatHistory()->create([
    "onboardingDataId" => null, // string
]);
```


### ChatSession

Create an instance: `$chat_session = $client->ChatSession();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `chatSubVariant` | `string` |  |
| `createdAt` | `string` |  |
| `model` | `mixed` |  |
| `plan` | `mixed` |  |
| `route` | `mixed` |  |
| `routeRecommendation` | `mixed` |  |
| `salesStage` | `string` |  |
| `selectedPlan` | `mixed` |  |
| `sessionId` | `string` |  |
| `status` | `string` |  |
| `updatedAt` | `string` |  |

#### Example: Create

```php
$chat_session = $client->ChatSession()->create([
    "session_id" => null, // string
]);
```


### Comment

Create an instance: `$comment = $client->Comment();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Comment record (throws on error).
$comment = $client->Comment()->load();
```


### CommentCampaign

Create an instance: `$comment_campaign = $client->CommentCampaign();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_daily_limit` | `int` |  |
| `account_weekly_limit` | `int` |  |
| `action` | `string` |  |
| `active_days_per_week` | `int` |  |
| `agent_id` | `string` |  |
| `allowlist` | `array` |  |
| `analysis_daily_limit` | `int` |  |
| `analysis_model` | `string` |  |
| `analysis_reservation_usd` | `float` |  |
| `approved_markets` | `array` |  |
| `brand_forward_enabled` | `bool` |  |
| `briefs` | `array` |  |
| `candidate_only` | `bool` |  |
| `claims` | `array` |  |
| `cohort_removal_threshold` | `int` |  |
| `daily_cost_ceiling_usd` | `float` |  |
| `delivery_mode` | `string` |  |
| `disclosure_mode` | `string` |  |
| `disclosure_template` | `string` |  |
| `draft_options_count` | `int` |  |
| `draft_review_reservation_usd` | `float` |  |
| `exceptional_daily_cap_approved` | `bool` |  |
| `execution_enabled` | `bool` |  |
| `experiment_styles` | `array` |  |
| `inventory_factor` | `float` |  |
| `keywords` | `array` |  |
| `max_duration_seconds` | `mixed` |  |
| `metadata_pass_rate` | `float` |  |
| `min_interval_minutes` | `int` |  |
| `mode` | `string` |  |
| `monitored_creators` | `array` |  |
| `platform` | `string` |  |
| `platform_permission_evidence` | `string` |  |
| `policy_approved_by` | `string` |  |
| `policy_expires_at` | `mixed` |  |
| `policy_version` | `string` |  |
| `product_daily_limit` | `int` |  |
| `qualification_rate` | `float` |  |
| `raw_daily_limit` | `int` |  |
| `raw_result_reservation_usd` | `float` |  |
| `reason` | `string` |  |
| `replies_enabled` | `bool` |  |
| `request_key` | `string` |  |
| `reviewer_model` | `string` |  |
| `scan_interval_hours` | `int` |  |
| `search_change_reason` | `string` |  |
| `search_effective_at` | `mixed` |  |
| `shadow_sample_limit` | `int` |  |
| `spent_seconds` | `mixed` |  |
| `task_ttl_hours` | `int` |  |
| `top_comment_analysis_enabled` | `bool` |  |
| `writer_model` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CommentCampaign record (throws on error).
$comment_campaign = $client->CommentCampaign()->load(["product_id" => "product_id"]);
```

#### Example: Create

```php
$comment_campaign = $client->CommentCampaign()->create([
    "product_id" => null, // string
    "action" => null, // string
    "agent_id" => null, // string
    "reason" => null, // string
    "request_key" => null, // string
]);
```


### CompleteChatCheckout

Create an instance: `$complete_chat_checkout = $client->CompleteChatCheckout();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `message` | `mixed` |  |
| `onboarding_data_id` | `string` |  |
| `product_id` | `string` |  |
| `ready` | `bool` |  |
| `success` | `bool` |  |

#### Example: Create

```php
$complete_chat_checkout = $client->CompleteChatCheckout()->create([
    "onboarding_data_id" => null, // string
]);
```


### CreateBlackoutSora2Video

Create an instance: `$create_blackout_sora2_video = $client->CreateBlackoutSora2Video();`

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
| `requires_polling` | `bool` |  |
| `video` | `array` |  |

#### Example: Create

```php
$create_blackout_sora2_video = $client->CreateBlackoutSora2Video()->create([
    "main_prompt" => null, // string
    "media_asset_id" => null, // string
    "product_id" => null, // string
]);
```


### CreateCarousel

Create an instance: `$create_carousel = $client->CreateCarousel();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `copy_mode` | `mixed` |  |
| `expected_owner_user_id` | `string` |  |
| `expected_product_id` | `string` |  |
| `expected_product_name` | `mixed` |  |
| `image_model` | `string` |  |
| `mention_product` | `bool` |  |
| `message` | `string` |  |
| `num_slides` | `int` |  |
| `owner_user_id` | `string` |  |
| `product_id` | `string` | Product ID to use. |
| `product_name` | `mixed` |  |
| `product_placement` | `string` |  |
| `request_id` | `string` |  |
| `script_style_custom` | `mixed` |  |
| `script_style_id` | `string` |  |
| `selected_hook` | `mixed` |  |
| `status` | `string` |  |
| `success` | `bool` |  |
| `template_id` | `string` |  |
| `video_id` | `string` |  |
| `visual_style_custom` | `mixed` |  |
| `visual_style_id` | `string` |  |

#### Example: Create

```php
$create_carousel = $client->CreateCarousel()->create([
    "template_id" => null, // string
]);
```


### CreateProduct

Create an instance: `$create_product = $client->CreateProduct();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `onboarding_data_id` | `string` | UUID of the OnboardingData record |
| `product_id` | `string` |  |
| `success` | `bool` |  |
| `videos_queued` | `int` |  |

#### Example: Create

```php
$create_product = $client->CreateProduct()->create([
    "onboarding_data_id" => null, // string
]);
```


### CreateResetProductV6

Create an instance: `$create_reset_product_v6 = $client->CreateResetProductV6();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agents_transferred` | `int` |  |
| `credits_deducted` | `int` |  |
| `onboarding_data_id` | `string` |  |
| `product_id` | `string` |  |
| `remaining_credits` | `int` |  |
| `success` | `bool` |  |
| `videos_queued` | `int` |  |

#### Example: Create

```php
$create_reset_product_v6 = $client->CreateResetProductV6()->create([
    "onboarding_data_id" => null, // string
]);
```


### CreateSora2Video

Create an instance: `$create_sora2_video = $client->CreateSora2Video();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `image_prompt` | `mixed` |  |
| `main_prompt` | `string` |  |
| `model` | `string` |  |
| `requires_polling` | `bool` |  |
| `seconds` | `string` |  |
| `size` | `string` |  |
| `video` | `array` |  |

#### Example: Create

```php
$create_sora2_video = $client->CreateSora2Video()->create([
    "main_prompt" => null, // string
]);
```


### CreateVariation

Create an instance: `$create_variation = $client->CreateVariation();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `hook_duration` | `int` |  |
| `media_asset_id` | `string` |  |
| `message` | `string` |  |
| `product_id` | `string` |  |
| `prompt` | `string` |  |
| `task_id` | `string` |  |
| `video_id` | `string` |  |

#### Example: Create

```php
$create_variation = $client->CreateVariation()->create([
    "hook_duration" => null, // int
    "media_asset_id" => null, // string
    "product_id" => null, // string
    "prompt" => null, // string
]);
```


### Customer

Create an instance: `$customer = $client->Customer();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `mixed` |  |
| `assigned_agents_count` | `int` |  |
| `email` | `string` |  |
| `id` | `string` |  |
| `is_migrated` | `bool` |  |

#### Example: List

```php
// list() returns an array of Customer entities, one per record (throws on error).
$customers = $client->Customer()->list();
```


### CustomerHealth

Create an instance: `$customer_health = $client->CustomerHealth();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_agents` | `array` |  |
| `available_dates` | `array` |  |
| `date` | `string` |  |
| `email` | `string` |  |
| `entries` | `array` |  |
| `id` | `string` |  |
| `performance_overview` | `array` |  |
| `platform_coverage_summary` | `array` |  |
| `user_id` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CustomerHealth record (throws on error).
$customer_health = $client->CustomerHealth()->load(["id" => "customer_health_id"]);
```


### CustomerHealthAllCustomersItem

Create an instance: `$customer_health_all_customers_item = $client->CustomerHealthAllCustomersItem();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `mixed` |  |
| `assigned_agents_count` | `int` |  |
| `daily_stats` | `array` |  |
| `email` | `string` |  |
| `is_migrated` | `bool` |  |
| `total_views` | `int` |  |
| `user_id` | `string` |  |

#### Example: List

```php
// list() returns an array of CustomerHealthAllCustomersItem entities, one per record (throws on error).
$customer_health_all_customers_items = $client->CustomerHealthAllCustomersItem()->list();
```


### CustomerHealthViewsSummary

Create an instance: `$customer_health_views_summary = $client->CustomerHealthViewsSummary();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `average_views_per_result` | `int` |  |
| `date` | `string` |  |
| `end_date` | `mixed` |  |
| `paid_users_count` | `int` |  |
| `posted_results` | `int` |  |
| `range` | `string` |  |
| `start_date` | `mixed` |  |
| `top_users` | `array` |  |
| `total_views` | `int` |  |
| `trend` | `array` |  |
| `trend_granularity` | `string` |  |
| `user_email` | `mixed` |  |
| `user_id` | `string` |  |
| `users_with_views` | `int` |  |

#### Example: List

```php
// list() returns an array of CustomerHealthViewsSummary entities, one per record (throws on error).
$customer_health_views_summarys = $client->CustomerHealthViewsSummary()->list();
```


### Daily

Create an instance: `$daily = $client->Daily();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Create

```php
$daily = $client->Daily()->create([
    "id" => null, // string
    "day" => null, // string
]);
```


### DailyStatus

Create an instance: `$daily_status = $client->DailyStatus();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DailyStatus record (throws on error).
$daily_status = $client->DailyStatus()->load(["id" => "daily_status_id", "day" => "day"]);
```


### DedicatedAgentsDashboard

Create an instance: `$dedicated_agents_dashboard = $client->DedicatedAgentsDashboard();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_connections` | `int` |  |
| `assigned_user_id` | `string` |  |
| `assigned_user_ids` | `array` |  |
| `bio` | `mixed` |  |
| `id` | `string` |  |
| `instagram_url` | `mixed` |  |
| `is_active` | `bool` |  |
| `last_admin_synced_at` | `mixed` |  |
| `name` | `string` |  |
| `role` | `mixed` |  |
| `tiktok_stats` | `mixed` |  |
| `tiktok_url` | `mixed` |  |
| `today_failed_entries` | `array` |  |
| `today_stats` | `array` |  |
| `upload_post_platforms` | `mixed` |  |
| `upload_post_profile` | `mixed` |  |
| `yesterday_failed_entries` | `array` |  |
| `yesterday_stats` | `array` |  |
| `youtube_url` | `mixed` |  |

#### Example: List

```php
// list() returns an array of DedicatedAgentsDashboard entities, one per record (throws on error).
$dedicated_agents_dashboards = $client->DedicatedAgentsDashboard()->list();
```


### EnterpriseAgent

Create an instance: `$enterprise_agent = $client->EnterpriseAgent();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `int` |  |
| `product_id` | `string` |  |
| `source_product_id` | `string` |  |
| `target_product_id` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the EnterpriseAgent record (throws on error).
$enterprise_agent = $client->EnterpriseAgent()->load();
```

#### Example: Create

```php
$enterprise_agent = $client->EnterpriseAgent()->create([
    "product_id" => null, // string
    "source_product_id" => null, // string
    "target_product_id" => null, // string
]);
```


### EnterpriseProduct

Create an instance: `$enterprise_product = $client->EnterpriseProduct();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the EnterpriseProduct record (throws on error).
$enterprise_product = $client->EnterpriseProduct()->load(["product_id" => "product_id"]);
```


### ExactAvailability

Create an instance: `$exact_availability = $client->ExactAvailability();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ExactAvailability record (throws on error).
$exact_availability = $client->ExactAvailability()->load();
```


### ExactFormula

Create an instance: `$exact_formula = $client->ExactFormula();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ExactFormula record (throws on error).
$exact_formula = $client->ExactFormula()->load();
```


### ExtractV2

Create an instance: `$extract_v2 = $client->ExtractV2();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `instagram_username` | `mixed` |  |
| `message` | `string` |  |
| `status` | `string` |  |
| `url` | `string` |  |

#### Example: Create

```php
$extract_v2 = $client->ExtractV2()->create([
    "url" => null, // string
]);
```


### FailedPost

Create an instance: `$failed_post = $client->FailedPost();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `string` |  |
| `agent_name` | `mixed` |  |
| `agent_platforms` | `mixed` |  |
| `error_message` | `mixed` |  |
| `id` | `string` |  |
| `product_id` | `string` |  |
| `results` | `mixed` |  |
| `scheduled_datetime` | `string` |  |
| `source_type` | `string` |  |
| `status` | `string` |  |
| `user_email` | `string` |  |
| `user_id` | `string` |  |
| `user_name` | `mixed` |  |
| `video_id` | `string` |  |
| `video_url` | `mixed` |  |

#### Example: List

```php
// list() returns an array of FailedPost entities, one per record (throws on error).
$failed_posts = $client->FailedPost()->list();
```


### File

Create an instance: `$file = $client->File();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `file` | `string` |  |

#### Example: Create

```php
$file = $client->File()->create([
    "file" => null, // string
]);
```


### GenerateBlackoutSora2Prompt

Create an instance: `$generate_blackout_sora2_prompt = $client->GenerateBlackoutSora2Prompt();`

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

```php
$generate_blackout_sora2_prompt = $client->GenerateBlackoutSora2Prompt()->create([
    "media_asset_id" => null, // string
    "product_id" => null, // string
]);
```


### GeneratePomelliDemo

Create an instance: `$generate_pomelli_demo = $client->GeneratePomelliDemo();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_demo_count` | `int` |  |
| `max_demos` | `int` |  |
| `message` | `string` |  |
| `product_id` | `string` | UUID of the Product |
| `success` | `bool` |  |

#### Example: Create

```php
$generate_pomelli_demo = $client->GeneratePomelliDemo()->create([
    "product_id" => null, // string
]);
```


### GeneratePrompt

Create an instance: `$generate_prompt = $client->GeneratePrompt();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `hook_duration` | `int` |  |
| `media_asset_id` | `string` |  |
| `media_asset_url` | `string` |  |
| `prompt` | `string` |  |

#### Example: Create

```php
$generate_prompt = $client->GeneratePrompt()->create([
    "media_asset_id" => null, // string
]);
```


### GenerateSora2Prompt

Create an instance: `$generate_sora2_prompt = $client->GenerateSora2Prompt();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `prompt` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the GenerateSora2Prompt record (throws on error).
$generate_sora2_prompt = $client->GenerateSora2Prompt()->load();
```


### Healthrx

Create an instance: `$healthrx = $client->Healthrx();`

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
| `attempt` | `int` |  |
| `avatar_present` | `bool` |  |
| `benchmark_set` | `string` |  |
| `commercial` | `bool` |  |
| `commercial_license_evidence` | `string` |  |
| `content_id` | `string` |  |
| `dimensions` | `array` |  |
| `duration_seconds` | `int` |  |
| `evidence` | `string` |  |
| `evidence_urls` | `array` |  |
| `external_key` | `string` |  |
| `format` | `string` |  |
| `includes_all_attempt_costs` | `bool` |  |
| `input_specification` | `array` |  |
| `kind` | `string` |  |
| `level` | `int` |  |
| `measured_at` | `string` |  |
| `model_version` | `string` |  |
| `paid_campaign_id` | `string` |  |
| `parent_content_id` | `string` |  |
| `paused` | `bool` |  |
| `pillar` | `string` |  |
| `profile` | `array` |  |
| `promotion_evidence` | `string` |  |
| `provider` | `string` |  |
| `provider_invoice_evidence` | `string` |  |
| `reason` | `string` |  |
| `reference_version` | `string` |  |
| `request_key` | `string` |  |
| `scope` | `string` |  |
| `test_variable` | `string` |  |
| `topic` | `string` |  |
| `total_cost_usd` | `float` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Healthrx record (throws on error).
$healthrx = $client->Healthrx()->load(["product_id" => "product_id"]);
```

#### Example: Create

```php
$healthrx = $client->Healthrx()->create([
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


### InitResetProductV6

Create an instance: `$init_reset_product_v6 = $client->InitResetProductV6();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_schedule_disabled` | `bool` |  |
| `old_product_id` | `string` |  |
| `product_id` | `string` |  |
| `queue_entries_cleared` | `int` |  |
| `success` | `bool` |  |

#### Example: Create

```php
$init_reset_product_v6 = $client->InitResetProductV6()->create([
]);
```


### Iri

Create an instance: `$iri = $client->Iri();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `correlationId` | `mixed` |  |
| `idempotencyKey` | `string` |  |
| `productId` | `mixed` |  |

#### Example: Create

```php
$iri = $client->Iri()->create([
    "connector_id" => null, // string
    "idempotencyKey" => null, // string
]);
```


### IrisCapability

Create an instance: `$iris_capability = $client->IrisCapability();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `capability` | `string` |  |
| `correlationId` | `string` |  |
| `errorCode` | `mixed` |  |
| `externalProductId` | `mixed` |  |
| `externalUserId` | `string` |  |
| `id` | `string` |  |
| `idempotencyKey` | `string` |  |
| `input` | `array` |  |
| `membershipId` | `mixed` |  |
| `message` | `mixed` |  |
| `ok` | `bool` |  |
| `platformAccountId` | `mixed` |  |
| `platformLinkId` | `mixed` |  |
| `productScope` | `string` |  |
| `requestedBy` | `array` |  |
| `result` | `array` |  |
| `retryable` | `bool` |  |

#### Example: Create

```php
$iris_capability = $client->IrisCapability()->create([
    "id" => null, // string
    "capability" => null, // string
    "correlationId" => null, // string
    "externalUserId" => null, // string
    "idempotencyKey" => null, // string
    "productScope" => null, // string
]);
```


### IrisChat

Create an instance: `$iris_chat = $client->IrisChat();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `artifacts` | `array` |  |
| `correlationId` | `string` |  |
| `idempotencyKey` | `string` |  |
| `message` | `string` |  |
| `mode` | `string` |  |
| `ok` | `bool` |  |
| `pageContext` | `array` |  |
| `productId` | `mixed` |  |
| `runtimeStatus` | `string` |  |
| `sessionId` | `mixed` |  |

#### Example: Create

```php
$iris_chat = $client->IrisChat()->create([
    "correlationId" => null, // string
    "idempotencyKey" => null, // string
    "message" => null, // string
]);
```


### IrisConnector

Create an instance: `$iris_connector = $client->IrisConnector();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connectors` | `array` |  |

#### Example: List

```php
// list() returns an array of IrisConnector entities, one per record (throws on error).
$iris_connectors = $client->IrisConnector()->list();
```


### IrisStatus

Create an instance: `$iris_status = $client->IrisStatus();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connectorsPreview` | `array` |  |
| `product` | `mixed` |  |
| `status` | `array` |  |
| `tasksPreview` | `array` |  |

#### Example: List

```php
// list() returns an array of IrisStatus entities, one per record (throws on error).
$iris_statuss = $client->IrisStatus()->list();
```


### IrisTask

Create an instance: `$iris_task = $client->IrisTask();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approvalRequired` | `bool` |  |
| `cadence` | `string` |  |
| `capability` | `mixed` |  |
| `completed` | `array` |  |
| `description` | `string` |  |
| `discover` | `array` |  |
| `productId` | `mixed` |  |
| `recurring` | `array` |  |
| `requiredConnectors` | `array` |  |
| `title` | `string` |  |

#### Example: List

```php
// list() returns an array of IrisTask entities, one per record (throws on error).
$iris_tasks = $client->IrisTask()->list();
```

#### Example: Create

```php
$iris_task = $client->IrisTask()->create([
    "title" => null, // string
]);
```


### IrisUsage

Create an instance: `$iris_usage = $client->IrisUsage();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `eventCount` | `int` |  |
| `events` | `array` |  |
| `membershipId` | `mixed` |  |
| `productScope` | `string` |  |

#### Example: List

```php
// list() returns an array of IrisUsage entities, one per record (throws on error).
$iris_usages = $client->IrisUsage()->list();
```


### Landing

Create an instance: `$landing = $client->Landing();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `file` | `string` |  |

#### Example: Create

```php
$landing = $client->Landing()->create([
    "index" => null, // int
    "file" => null, // string
]);
```


### LandingStat

Create an instance: `$landing_stat = $client->LandingStat();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `landing` | `array` |  |
| `microhub` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the LandingStat record (throws on error).
$landing_stat = $client->LandingStat()->load(["slug" => "slug"]);
```


### LandingStatus

Create an instance: `$landing_status = $client->LandingStatus();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errorMessage` | `mixed` |  |
| `landingStatus` | `string` |  |
| `microhubStatus` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the LandingStatus record (throws on error).
$landing_status = $client->LandingStatus()->load();
```


### LinkInBio

Create an instance: `$link_in_bio = $client->LinkInBio();`

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

```php
// load() returns the ENTITY — call data_get() for the LinkInBio record (throws on error).
$link_in_bio = $client->LinkInBio()->load(["slug" => "slug"]);
```


### LinkInDm

Create an instance: `$link_in_dm = $client->LinkInDm();`

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

```php
// load() returns the ENTITY — call data_get() for the LinkInDm record (throws on error).
$link_in_dm = $client->LinkInDm()->load(["slug" => "slug"]);
```


### LinkInPost

Create an instance: `$link_in_post = $client->LinkInPost();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `linkInPostsType` | `string` |  |
| `redirectUrl` | `string` |  |
| `showLinkInFirstComment` | `bool` |  |
| `slug` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the LinkInPost record (throws on error).
$link_in_post = $client->LinkInPost()->load(["slug" => "slug"]);
```


### LinkUser

Create an instance: `$link_user = $client->LinkUser();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `already_linked` | `bool` |  |
| `onboarding_data_id` | `string` | UUID of the OnboardingData record |
| `success` | `bool` |  |

#### Example: Create

```php
$link_user = $client->LinkUser()->create([
    "onboarding_data_id" => null, // string
]);
```


### MediaAsset

Create an instance: `$media_asset = $client->MediaAsset();`

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
| `media_assets` | `array` |  |
| `onboardingDataId` | `mixed` |  |
| `onboarding_data_id` | `string` |  |
| `productId` | `mixed` |  |
| `product_id` | `string` |  |
| `source` | `string` |  |
| `type` | `string` |  |
| `updatedAt` | `string` |  |
| `url` | `string` |  |
| `usedAt` | `mixed` |  |
| `veo3VideoId` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the MediaAsset record (throws on error).
$media_asset = $client->MediaAsset()->load(["id" => "media_asset_id"]);
```

#### Example: Create

```php
$media_asset = $client->MediaAsset()->create([
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


### Men

Create an instance: `$men = $client->Men();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```php
// list() returns an array of Men entities, one per record (throws on error).
$mens = $client->Men()->list();
```


### Microdrama

Create an instance: `$microdrama = $client->Microdrama();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `evidence` | `array` |  |
| `expected_revision` | `int` |  |
| `idempotency_key` | `string` |  |
| `issues` | `array` |  |
| `reason` | `string` |  |
| `role` | `string` |  |
| `scores` | `array` |  |
| `selected_premise_id` | `string` |  |
| `stage` | `string` |  |
| `status` | `string` |  |
| `subject_hash` | `string` |  |
| `title` | `string` |  |
| `verdict` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Microdrama record (throws on error).
$microdrama = $client->Microdrama()->load(["episode_id" => "episode_id"]);
```

#### Example: Create

```php
$microdrama = $client->Microdrama()->create([
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


### MicrohubPublic

Create an instance: `$microhub_public = $client->MicrohubPublic();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bio` | `mixed` |  |
| `ctaButtonText` | `mixed` |  |
| `ctaDescription` | `mixed` |  |
| `ctaLink` | `mixed` |  |
| `ctaTitle` | `mixed` |  |
| `headerImageUrl` | `mixed` |  |
| `links` | `array` |  |
| `name` | `string` |  |
| `profileImageUrl` | `mixed` |  |
| `slug` | `string` |  |
| `socialLinks` | `array` |  |
| `testimonials` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the MicrohubPublic record (throws on error).
$microhub_public = $client->MicrohubPublic()->load(["slug" => "slug"]);
```


### OnboardingStatus

Create an instance: `$onboarding_status = $client->OnboardingStatus();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comments` | `int` |  |
| `cover_image_url` | `mixed` |  |
| `id` | `string` |  |
| `likes` | `int` |  |
| `platform` | `string` |  |
| `video_url` | `mixed` |  |
| `views` | `int` |  |

#### Example: List

```php
// list() returns an array of OnboardingStatus entities, one per record (throws on error).
$onboarding_statuss = $client->OnboardingStatus()->list(["oid" => "example"]);
```


### OnboardingV6

Create an instance: `$onboarding_v6 = $client->OnboardingV6();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### PaidUser

Create an instance: `$paid_user = $client->PaidUser();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agents_count` | `int` |  |
| `assigned_agents_count` | `int` |  |
| `auto_schedule_enabled` | `mixed` |  |
| `credits` | `int` |  |
| `effective_agents_count` | `int` |  |
| `email` | `string` |  |
| `id` | `string` |  |
| `is_internal_user` | `bool` |  |
| `is_migrated_user` | `bool` |  |
| `membership` | `mixed` |  |
| `scheduled_queue_count` | `int` |  |
| `subscription_details` | `mixed` |  |
| `subscription_status` | `mixed` |  |

#### Example: List

```php
// list() returns an array of PaidUser entities, one per record (throws on error).
$paid_users = $client->PaidUser()->list();
```


### Pexel

Create an instance: `$pexel = $client->Pexel();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```php
// list() returns an array of Pexel entities, one per record (throws on error).
$pexels = $client->Pexel()->list();
```


### PhoneAdminAvailableAgentSource

Create an instance: `$phone_admin_available_agent_source = $client->PhoneAdminAvailableAgentSource();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available_count` | `int` |  |
| `pc_name` | `string` |  |

#### Example: List

```php
// list() returns an array of PhoneAdminAvailableAgentSource entities, one per record (throws on error).
$phone_admin_available_agent_sources = $client->PhoneAdminAvailableAgentSource()->list();
```


### Product

Create an instance: `$product = $client->Product();`

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
| `agent_count` | `int` |  |
| `agents` | `array` |  |
| `createdAt` | `mixed` |  |
| `demoVideos` | `mixed` |  |
| `description` | `string` |  |
| `favicon_url` | `mixed` |  |
| `howItWorks` | `mixed` |  |
| `how_it_works` | `mixed` |  |
| `id` | `string` |  |
| `images` | `mixed` |  |
| `initial_agents` | `int` |  |
| `instagramHandle` | `mixed` |  |
| `instagram_handle` | `mixed` |  |
| `isActive` | `mixed` |  |
| `isApp` | `mixed` |  |
| `is_active` | `bool` |  |
| `is_app` | `bool` |  |
| `language` | `mixed` |  |
| `mediaAssets` | `mixed` |  |
| `media_asset_ids` | `mixed` |  |
| `media_assets` | `mixed` |  |
| `name` | `string` |  |
| `otherInstructions` | `mixed` |  |
| `other_instructions` | `mixed` |  |
| `outroVideo` | `mixed` |  |
| `pexelsVideos` | `mixed` |  |
| `pricing` | `mixed` |  |
| `pricingAndOffers` | `mixed` |  |
| `pricing_and_offers` | `mixed` |  |
| `product_demo_ids` | `array` |  |
| `product_details` | `array` | Product details for enterprise product creation |
| `product_id` | `string` |  |
| `product_name` | `string` |  |
| `product_url` | `string` |  |
| `pronunciation` | `mixed` |  |
| `regenerate_sora2` | `bool` |  |
| `repostSource` | `mixed` |  |
| `repost_source` | `mixed` |  |
| `screenshot_url` | `mixed` |  |
| `social_post_ids` | `array` |  |
| `targetAudience` | `mixed` |  |
| `target_audience` | `mixed` |  |
| `templateProductId` | `mixed` |  |
| `tiktokHandle` | `mixed` |  |
| `tiktok_handle` | `mixed` |  |
| `total_count` | `int` |  |
| `updatedAt` | `mixed` |  |
| `url` | `string` |  |
| `userId` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Product record (throws on error).
$product = $client->Product()->load(["id" => "product_id"]);
```

#### Example: List

```php
// list() returns an array of Product entities, one per record (throws on error).
$products = $client->Product()->list();
```

#### Example: Create

```php
$product = $client->Product()->create([
    "product_details" => null, // array
    "product_url" => null, // string
]);
```


### ProductDashboard

Create an instance: `$product_dashboard = $client->ProductDashboard();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agents` | `array` |  |
| `date` | `string` |  |
| `pagination` | `array` |  |
| `phone_admin_error` | `mixed` |  |
| `products` | `array` |  |
| `selected_product` | `mixed` |  |
| `summary` | `array` |  |

#### Example: List

```php
// list() returns an array of ProductDashboard entities, one per record (throws on error).
$product_dashboards = $client->ProductDashboard()->list();
```


### ProductDashboardView

Create an instance: `$product_dashboard_view = $client->ProductDashboardView();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` |  |
| `views` | `int` |  |

#### Example: List

```php
// list() returns an array of ProductDashboardView entities, one per record (throws on error).
$product_dashboard_views = $client->ProductDashboardView()->list(["product_id" => "example"]);
```


### ProductDemo

Create an instance: `$product_demo = $client->ProductDemo();`

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

```php
// list() returns an array of ProductDemo entities, one per record (throws on error).
$product_demos = $client->ProductDemo()->list();
```


### ProductLanding

Create an instance: `$product_landing = $client->ProductLanding();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bio` | `mixed` |  |
| `commentingOnMyPosts` | `bool` |  |
| `commentingOnOthersPosts` | `bool` |  |
| `ctaButtonText` | `mixed` |  |
| `ctaDescription` | `mixed` |  |
| `ctaLink` | `mixed` |  |
| `ctaTitle` | `mixed` |  |
| `dmCommenters` | `bool` |  |
| `dmInitialMessagePrompt` | `mixed` |  |
| `dmOngoingResponsePrompt` | `mixed` |  |
| `firstCommentTextBeforeLink` | `mixed` |  |
| `headerImageUrl` | `mixed` |  |
| `id` | `string` |  |
| `landingHtmlUrl` | `mixed` |  |
| `landingLastGeneratedAt` | `mixed` |  |
| `landingReferenceScreenshotUrl` | `mixed` |  |
| `landingScreenshotUrl` | `mixed` |  |
| `landingStatus` | `string` |  |
| `landingUrl` | `string` |  |
| `linkInBioType` | `string` |  |
| `linkInDmsType` | `string` |  |
| `linkInPostsType` | `string` |  |
| `links` | `mixed` |  |
| `microhubBio` | `mixed` |  |
| `microhubCtaButtonText` | `mixed` |  |
| `microhubCtaDescription` | `mixed` |  |
| `microhubCtaLink` | `mixed` |  |
| `microhubCtaTitle` | `mixed` |  |
| `microhubHeaderImageUrl` | `mixed` |  |
| `microhubLinks` | `array` |  |
| `microhubName` | `mixed` |  |
| `microhubProfileImageUrl` | `mixed` |  |
| `microhubScreenshotUrl` | `mixed` |  |
| `microhubSocialLinks` | `array` |  |
| `microhubStatus` | `string` |  |
| `microhubTestimonials` | `array` |  |
| `microhubUrl` | `string` |  |
| `myPostsStylePrompt` | `mixed` |  |
| `name` | `string` |  |
| `othersStylePrompt` | `mixed` |  |
| `othersTargetMarketPrompt` | `mixed` |  |
| `productLinkSelection` | `string` |  |
| `productUrl` | `mixed` |  |
| `profileImageUrl` | `mixed` |  |
| `shortLink` | `mixed` |  |
| `shortLinkKeyword` | `mixed` |  |
| `showLinkInFirstComment` | `bool` |  |
| `slug` | `string` |  |
| `socialLinks` | `mixed` |  |
| `testimonials` | `mixed` |  |

#### Example: List

```php
// list() returns an array of ProductLanding entities, one per record (throws on error).
$product_landings = $client->ProductLanding()->list();
```


### PublicResumeStatus

Create an instance: `$public_resume_status = $client->PublicResumeStatus();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `can_resume_prelogin` | `bool` |  |
| `content_collection_ready` | `bool` |  |
| `current_step` | `mixed` |  |
| `exists` | `bool` |  |
| `flow_variant` | `mixed` |  |
| `repost_content_count` | `int` |  |
| `repost_source` | `mixed` |  |
| `requires_repost_content` | `bool` |  |
| `skip_demo` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PublicResumeStatus record (throws on error).
$public_resume_status = $client->PublicResumeStatus()->load(["oid" => "oid"]);
```


### ReRollVideo

Create an instance: `$re_roll_video = $client->ReRollVideo();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `queue_id` | `string` |  |
| `requires_polling` | `bool` |  |
| `skip_credit_check` | `bool` |  |
| `video` | `array` |  |

#### Example: Create

```php
$re_roll_video = $client->ReRollVideo()->create([
    "queue_id" => null, // string
]);
```


### ReadRootGet

Create an instance: `$read_root_get = $client->ReadRootGet();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ReadRootGet record (throws on error).
$read_root_get = $client->ReadRootGet()->load();
```


### RecordDemoBooked

Create an instance: `$record_demo_booked = $client->RecordDemoBooked();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `calendlyEventUri` | `mixed` |  |
| `calendlyInviteeUri` | `mixed` |  |
| `message` | `array` |  |
| `session` | `array` |  |

#### Example: Create

```php
$record_demo_booked = $client->RecordDemoBooked()->create([
    "session_id" => null, // string
]);
```


### RefreshStat

Create an instance: `$refresh_stat = $client->RefreshStat();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date_from` | `mixed` | Start date to refresh stats for (defaults to yesterday) |
| `date_to` | `mixed` | End date to refresh stats for (defaults to date_from) |
| `entries_found` | `int` |  |
| `message` | `string` |  |
| `provider` | `string` | Scraping provider to use |
| `status` | `string` |  |
| `summary` | `mixed` |  |

#### Example: Create

```php
$refresh_stat = $client->RefreshStat()->create([
]);
```


### RemixerClipper

Create an instance: `$remixer_clipper = $client->RemixerClipper();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the RemixerClipper record (throws on error).
$remixer_clipper = $client->RemixerClipper()->load();
```

#### Example: Create

```php
$remixer_clipper = $client->RemixerClipper()->create([
    "identifier" => null, // string
]);
```


### ResetProduct

Create an instance: `$reset_product = $client->ResetProduct();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ResetProduct record (throws on error).
$reset_product = $client->ResetProduct()->load();
```

#### Example: Create

```php
$reset_product = $client->ResetProduct()->create([
]);
```


### RetryWebsiteScrape

Create an instance: `$retry_website_scrape = $client->RetryWebsiteScrape();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `flow_variant` | `string` |  |
| `onboarding_data_id` | `string` | UUID of existing OnboardingData |
| `skip_demo` | `bool` |  |
| `status` | `string` |  |
| `success` | `bool` |  |
| `url` | `string` | New website URL to scrape |

#### Example: Create

```php
$retry_website_scrape = $client->RetryWebsiteScrape()->create([
    "onboarding_data_id" => null, // string
    "url" => null, // string
]);
```


### SaveSurvey

Create an instance: `$save_survey = $client->SaveSurvey();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email_sent` | `bool` |  |
| `onboarding_data_id` | `string` | UUID of the OnboardingData record |
| `success` | `bool` |  |
| `survey` | `array` | Survey response data from frontend. |

#### Example: Create

```php
$save_survey = $client->SaveSurvey()->create([
    "onboarding_data_id" => null, // string
    "survey" => null, // array
]);
```


### ScanSocial

Create an instance: `$scan_social = $client->ScanSocial();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `instagram_handle` | `mixed` |  |
| `onboarding_data_id` | `string` |  |
| `product_id` | `string` |  |
| `status` | `string` |  |
| `success` | `bool` |  |
| `task_id` | `string` |  |
| `tiktok_handle` | `mixed` |  |

#### Example: Create

```php
$scan_social = $client->ScanSocial()->create([
    "onboarding_data_id" => null, // string
    "tiktok_handle" => null, // mixed
]);
```


### ScanSocialsPublic

Create an instance: `$scan_socials_public = $client->ScanSocialsPublic();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `instagram_handle` | `mixed` | Instagram username/handle to scrape |
| `message` | `mixed` |  |
| `onboarding_data_id` | `string` | UUID of the OnboardingData record |
| `status` | `string` |  |
| `success` | `bool` |  |
| `tiktok_handle` | `mixed` | TikTok username/handle to scrape |

#### Example: Create

```php
$scan_socials_public = $client->ScanSocialsPublic()->create([
    "onboarding_data_id" => null, // string
]);
```


### ScanSocialsStatus

Create an instance: `$scan_socials_status = $client->ScanSocialsStatus();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ads_count` | `int` |  |
| `onboarding_data_id` | `string` |  |
| `product_id` | `string` |  |
| `status` | `string` |  |
| `task_id` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ScanSocialsStatus record (throws on error).
$scan_socials_status = $client->ScanSocialsStatus()->load();
```


### ScheduleV2

Create an instance: `$schedule_v2 = $client->ScheduleV2();`

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
| `agent` | `mixed` |  |
| `comment` | `mixed` |  |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `instagram_posted_by` | `mixed` |  |
| `instagram_posted_url` | `mixed` |  |
| `instagram_scraped_social_post_id` | `string` |  |
| `is_instagram_posted` | `bool` |  |
| `is_tiktok_posted` | `bool` |  |
| `is_youtube_posted` | `bool` |  |
| `reorders` | `array` |  |
| `results` | `mixed` |  |
| `scheduled_datetime` | `string` |  |
| `source_type` | `string` |  |
| `status` | `string` |  |
| `tiktok_posted_by` | `mixed` |  |
| `tiktok_posted_url` | `mixed` |  |
| `tiktok_scraped_social_post_id` | `string` |  |
| `video` | `mixed` |  |
| `video_id` | `string` |  |
| `youtube_posted_by` | `mixed` |  |
| `youtube_posted_url` | `mixed` |  |
| `youtube_scraped_social_post_id` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ScheduleV2 record (throws on error).
$schedule_v2 = $client->ScheduleV2()->load();
```

#### Example: List

```php
// list() returns an array of ScheduleV2 entities, one per record (throws on error).
$schedule_v2s = $client->ScheduleV2()->list();
```

#### Example: Create

```php
$schedule_v2 = $client->ScheduleV2()->create([
    "created_at" => null, // string
    "id" => null, // string
    "reorders" => null, // array
    "scheduled_datetime" => null, // string
    "source_type" => null, // string
    "status" => null, // string
    "video_id" => null, // string
]);
```


### Scrape

Create an instance: `$scrape = $client->Scrape();`

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
| `success` | `bool` |  |
| `url` | `string` |  |

#### Example: Create

```php
$scrape = $client->Scrape()->create([
    "old_product_id" => null, // string
    "url" => null, // string
]);
```


### ScrapeWebsitePublic

Create an instance: `$scrape_website_public = $client->ScrapeWebsitePublic();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `flow_variant` | `string` |  |
| `onboarding_data_id` | `string` | UUID of created OnboardingData |
| `skip_demo` | `bool` | True for self-serve users (skip demo booking) |
| `status` | `string` |  |
| `success` | `bool` |  |
| `url` | `string` | Website URL to scrape |

#### Example: Create

```php
$scrape_website_public = $client->ScrapeWebsitePublic()->create([
    "url" => null, // string
]);
```


### ScrapedData

Create an instance: `$scraped_data = $client->ScrapedData();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `homepageVideoUrl` | `mixed` |  |
| `howItWorks` | `string` |  |
| `imageUrls` | `array` |  |
| `instagram_username` | `mixed` |  |
| `mediaAssets` | `array` |  |
| `name` | `string` |  |
| `pricingAndOffers` | `string` |  |
| `targetAudience` | `string` |  |
| `url` | `string` |  |

#### Example: Create

```php
$scraped_data = $client->ScrapedData()->create([
    "url" => null, // string
]);
```


### ScrapingStatus

Create an instance: `$scraping_status = $client->ScrapingStatus();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ScrapingStatus record (throws on error).
$scraping_status = $client->ScrapingStatus()->load();
```


### SelfServeActivate

Create an instance: `$self_serve_activate = $client->SelfServeActivate();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `onboarding_data_id` | `string` | UUID of the OnboardingData record |
| `redirect_to_stripe` | `bool` |  |
| `stripe_checkout_url` | `mixed` |  |
| `success` | `bool` |  |

#### Example: Create

```php
$self_serve_activate = $client->SelfServeActivate()->create([
    "onboarding_data_id" => null, // string
]);
```


### Seo

Create an instance: `$seo = $client->Seo();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Seo record (throws on error).
$seo = $client->Seo()->load();
```


### SeoAiMention

Create an instance: `$seo_ai_mention = $client->SeoAiMention();`

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
| `evidence` | `array` |  |
| `geo` | `string` |  |
| `language` | `string` |  |
| `primary_url` | `string` |  |
| `prompt_text` | `string` |  |
| `run_week` | `string` |  |
| `secondary_urls` | `array` |  |

#### Example: List

```php
// list() returns an array of SeoAiMention entities, one per record (throws on error).
$seo_ai_mentions = $client->SeoAiMention()->list();
```


### SeoBacklink

Create an instance: `$seo_backlink = $client->SeoBacklink();`

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

```php
// list() returns an array of SeoBacklink entities, one per record (throws on error).
$seo_backlinks = $client->SeoBacklink()->list();
```


### SeoKeyword

Create an instance: `$seo_keyword = $client->SeoKeyword();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blog_page` | `string` |  |
| `current_position` | `float` |  |
| `keyword` | `string` |  |
| `keyword_group` | `string` |  |
| `position_change` | `float` |  |

#### Example: List

```php
// list() returns an array of SeoKeyword entities, one per record (throws on error).
$seo_keywords = $client->SeoKeyword()->list();
```


### SeoOverview

Create an instance: `$seo_overview = $client->SeoOverview();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `clicks` | `float` |  |
| `ctr` | `float` |  |
| `date` | `string` |  |
| `impressions` | `float` |  |
| `position` | `float` |  |

#### Example: List

```php
// list() returns an array of SeoOverview entities, one per record (throws on error).
$seo_overviews = $client->SeoOverview()->list();
```


### SeoTraffic

Create an instance: `$seo_traffic = $client->SeoTraffic();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `end_date` | `string` |  |
| `series` | `array` |  |
| `site_url` | `string` |  |
| `start_date` | `string` |  |
| `top_countries` | `array` |  |
| `top_pages` | `array` |  |
| `top_queries` | `array` |  |
| `totals` | `array` |  |

#### Example: List

```php
// list() returns an array of SeoTraffic entities, one per record (throws on error).
$seo_traffics = $client->SeoTraffic()->list();
```


### ShareAccessLink

Create an instance: `$share_access_link = $client->ShareAccessLink();`

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

```php
$share_access_link = $client->ShareAccessLink()->create([
    "share_token" => null, // string
    "share_url" => null, // string
]);
```


### Site

Create an instance: `$site = $client->Site();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Site record (throws on error).
$site = $client->Site()->load();
```


### Slide

Create an instance: `$slide = $client->Slide();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `caption` | `mixed` |  |
| `id` | `string` |  |
| `prompt` | `mixed` |  |

#### Example: Create

```php
$slide = $client->Slide()->create([
    "carousel_id" => null, // string
    "slide_index" => null, // int
]);
```


### SlugValidation

Create an instance: `$slug_validation = $client->SlugValidation();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `reason` | `mixed` |  |
| `valid` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the SlugValidation record (throws on error).
$slug_validation = $client->SlugValidation()->load(["slug" => "slug"]);
```


### Social

Create an instance: `$social = $client->Social();`

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
| `updatedAt` | `mixed` |  |
| `userId` | `string` |  |
| `username` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Social record (throws on error).
$social = $client->Social()->load();
```

#### Example: List

```php
// list() returns an array of Social entities, one per record (throws on error).
$socials = $client->Social()->list();
```

#### Example: Create

```php
$social = $client->Social()->create([
    "code" => null, // string
    "code_verifier" => null, // string
]);
```


### SocialScanPreview

Create an instance: `$social_scan_preview = $client->SocialScanPreview();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `instagram_handle` | `mixed` | Instagram username/handle to scrape |
| `posts` | `array` |  |
| `success` | `bool` |  |
| `tiktok_handle` | `mixed` | TikTok username/handle to scrape |

#### Example: Create

```php
$social_scan_preview = $client->SocialScanPreview()->create([
]);
```


### SocialScanProcess

Create an instance: `$social_scan_process = $client->SocialScanProcess();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `posts` | `array` |  |
| `product_id` | `string` |  |
| `success` | `bool` |  |
| `task_id` | `string` |  |

#### Example: Create

```php
$social_scan_process = $client->SocialScanProcess()->create([
    "posts" => null, // array
    "product_id" => null, // string
]);
```


### SocialScanSave

Create an instance: `$social_scan_save = $client->SocialScanSave();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `media_asset_ids` | `array` |  |
| `posts` | `array` |  |
| `product_id` | `string` |  |
| `success` | `bool` |  |

#### Example: Create

```php
$social_scan_save = $client->SocialScanSave()->create([
    "posts" => null, // array
    "product_id" => null, // string
]);
```


### Sora2Avatar

Create an instance: `$sora2_avatar = $client->Sora2Avatar();`

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
| `avatar_frame_url` | `mixed` |  |
| `created_at` | `string` |  |
| `current_step` | `int` |  |
| `headshot_url` | `mixed` |  |
| `id` | `string` |  |
| `logs` | `array` |  |
| `prompt_key` | `string` |  |
| `run_output_dir` | `mixed` |  |
| `selected_age_bucket` | `string` |  |
| `selected_gender` | `string` |  |
| `selected_prompt` | `mixed` |  |
| `selected_race` | `string` |  |
| `sora2_cameo_handle` | `mixed` |  |
| `sora2_cameo_id` | `string` |  |
| `sora2_cameo_link` | `mixed` |  |
| `sora2_display_name` | `mixed` |  |
| `sora2_task_id` | `string` |  |
| `sora2_video_url` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Sora2Avatar record (throws on error).
$sora2_avatar = $client->Sora2Avatar()->load(["id" => "sora2_avatar_id"]);
```

#### Example: List

```php
// list() returns an array of Sora2Avatar entities, one per record (throws on error).
$sora2_avatars = $client->Sora2Avatar()->list();
```

#### Example: Create

```php
$sora2_avatar = $client->Sora2Avatar()->create([
    "prompt_key" => null, // string
    "selected_age_bucket" => null, // string
    "selected_gender" => null, // string
    "selected_race" => null, // string
    "sora2_video_url" => null, // string
]);
```


### Sora2AvatarAssetUpload

Create an instance: `$sora2_avatar_asset_upload = $client->Sora2AvatarAssetUpload();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_id` | `string` |  |
| `file` | `string` |  |
| `run_output_dir` | `mixed` |  |
| `s3_key` | `string` |  |
| `upload_type` | `string` |  |
| `url` | `string` |  |

#### Example: Create

```php
$sora2_avatar_asset_upload = $client->Sora2AvatarAssetUpload()->create([
    "file" => null, // string
    "s3_key" => null, // string
    "upload_type" => null, // string
    "url" => null, // string
]);
```


### Sora2AvatarStat

Create an instance: `$sora2_avatar_stat = $client->Sora2AvatarStat();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `by_age_bucket` | `array` |  |
| `by_gender` | `array` |  |
| `by_prompt_key` | `array` |  |
| `by_race` | `array` |  |
| `completed_avatars` | `int` |  |
| `completion_rate` | `float` |  |
| `total_avatars` | `int` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Sora2AvatarStat record (throws on error).
$sora2_avatar_stat = $client->Sora2AvatarStat()->load();
```


### Stat

Create an instance: `$stat = $client->Stat();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```php
// list() returns an array of Stat entities, one per record (throws on error).
$stats = $client->Stat()->list();
```


### StatsRefreshBackfill

Create an instance: `$stats_refresh_backfill = $client->StatsRefreshBackfill();`

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

```php
$stats_refresh_backfill = $client->StatsRefreshBackfill()->create([
]);
```


### StatsRefreshIssue

Create an instance: `$stats_refresh_issue = $client->StatsRefreshIssue();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aged_over_24h` | `bool` |  |
| `agent_id` | `string` |  |
| `agent_name_snapshot` | `mixed` |  |
| `first_detected_at` | `string` |  |
| `id` | `string` |  |
| `last_detected_at` | `string` |  |
| `last_refresh_completed_at` | `mixed` |  |
| `last_seen_run_id` | `string` |  |
| `latest_error_message` | `mixed` |  |
| `next_retry_at` | `mixed` |  |
| `platform` | `string` |  |
| `post_method` | `mixed` |  |
| `post_url` | `mixed` |  |
| `posted_date_et` | `string` |  |
| `product_id` | `string` |  |
| `product_name_snapshot` | `mixed` |  |
| `reason_code` | `string` |  |
| `resolved_at` | `mixed` |  |
| `retry_count` | `int` |  |
| `schedule_queue_id` | `string` |  |
| `scheduled_datetime_utc` | `string` |  |
| `stale_after_sla` | `bool` |  |
| `status` | `string` |  |
| `user_email_snapshot` | `string` |  |
| `user_id` | `string` |  |

#### Example: List

```php
// list() returns an array of StatsRefreshIssue entities, one per record (throws on error).
$stats_refresh_issues = $client->StatsRefreshIssue()->list();
```


### StatsRefreshOverview

Create an instance: `$stats_refresh_overview = $client->StatsRefreshOverview();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_run` | `mixed` |  |
| `aged_over_24h` | `int` |  |
| `backlog_preview` | `array` |  |
| `coverage_percent` | `float` |  |
| `customer_counts` | `array` |  |
| `date` | `string` |  |
| `generated_at` | `string` |  |
| `method_counts` | `array` |  |
| `platform_counts` | `array` |  |
| `platform_units_resolved` | `int` |  |
| `platform_units_total` | `int` |  |
| `platform_units_unresolved` | `int` |  |
| `posted_entries` | `int` |  |
| `reason_counts` | `array` |  |
| `sla_deadline_et` | `string` |  |
| `stale_after_sla` | `int` |  |
| `top_affected_customers` | `array` |  |

#### Example: List

```php
// list() returns an array of StatsRefreshOverview entities, one per record (throws on error).
$stats_refresh_overviews = $client->StatsRefreshOverview()->list();
```


### StatsRefreshRunSummary

Create an instance: `$stats_refresh_run_summary = $client->StatsRefreshRunSummary();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `celery_task_id` | `string` |  |
| `completed_at` | `mixed` |  |
| `entries_failed` | `int` |  |
| `entries_skipped` | `int` |  |
| `entries_total` | `int` |  |
| `entries_updated` | `int` |  |
| `error_summary_json` | `mixed` |  |
| `id` | `string` |  |
| `issues_opened` | `int` |  |
| `issues_resolved` | `int` |  |
| `platform_units_resolved` | `int` |  |
| `platform_units_total` | `int` |  |
| `platform_units_unresolved` | `int` |  |
| `platform_updates_via_profile` | `int` |  |
| `platform_updates_via_url` | `int` |  |
| `provider` | `mixed` |  |
| `refresh_trigger` | `mixed` |  |
| `requested_by_email` | `mixed` |  |
| `run_type` | `string` |  |
| `started_at` | `string` |  |
| `status` | `string` |  |
| `target_date_et` | `mixed` |  |
| `users_count` | `int` |  |

#### Example: List

```php
// list() returns an array of StatsRefreshRunSummary entities, one per record (throws on error).
$stats_refresh_run_summarys = $client->StatsRefreshRunSummary()->list();
```


### StatsRefreshTaskTrigger

Create an instance: `$stats_refresh_task_trigger = $client->StatsRefreshTaskTrigger();`

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
| `users_count` | `int` |  |

#### Example: Create

```php
$stats_refresh_task_trigger = $client->StatsRefreshTaskTrigger()->create([
    "message" => null, // string
    "status" => null, // string
    "target_date" => null, // string
    "task_id" => null, // string
]);
```


### Stripe

Create an instance: `$stripe = $client->Stripe();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |


### Style

Create an instance: `$style = $client->Style();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Style record (throws on error).
$style = $client->Style()->load();
```


### Template

Create an instance: `$template = $client->Template();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Template record (throws on error).
$template = $client->Template()->load();
```


### TikTokCreatorInfo

Create an instance: `$tik_tok_creator_info = $client->TikTokCreatorInfo();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commentDisabled` | `bool` |  |
| `creatorAvatarUrl` | `mixed` |  |
| `creatorNickname` | `mixed` |  |
| `creatorUsername` | `mixed` |  |
| `duetDisabled` | `bool` |  |
| `maxVideoPostDurationSec` | `int` |  |
| `privacyLevelOptions` | `array` |  |
| `stitchDisabled` | `bool` |  |

#### Example: List

```php
// list() returns an array of TikTokCreatorInfo entities, one per record (throws on error).
$tik_tok_creator_infos = $client->TikTokCreatorInfo()->list();
```


### TopPost

Create an instance: `$top_post = $client->TopPost();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comments` | `int` |  |
| `id` | `string` |  |
| `likes` | `int` |  |
| `platforms` | `array` |  |
| `scheduled_datetime` | `string` |  |
| `user_email` | `string` |  |
| `user_id` | `string` |  |
| `views` | `int` |  |

#### Example: List

```php
// list() returns an array of TopPost entities, one per record (throws on error).
$top_posts = $client->TopPost()->list(["date" => "example"]);
```


### UploadPostAgent

Create an instance: `$upload_post_agent = $client->UploadPostAgent();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$upload_post_agent = $client->UploadPostAgent()->create([
]);
```


### User

Create an instance: `$user = $client->User();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountType` | `mixed` |  |
| `activatedByAdminAt` | `mixed` |  |
| `activatedByAdminId` | `mixed` |  |
| `agents` | `array` |  |
| `agentsCount` | `mixed` |  |
| `attribution` | `mixed` |  |
| `avatarImageUrl` | `mixed` |  |
| `avatarVoiceUrl` | `mixed` |  |
| `createdAt` | `string` |  |
| `credits` | `int` |  |
| `email` | `string` |  |
| `googleId` | `mixed` |  |
| `hasSeenScheduleWelcome` | `bool` |  |
| `id` | `string` |  |
| `industry` | `mixed` |  |
| `instagramId` | `mixed` |  |
| `isActivatedByAdmin` | `bool` |  |
| `isAdmin` | `bool` |  |
| `isInternalUser` | `mixed` |  |
| `isMigrated` | `mixed` |  |
| `isResettingProduct` | `mixed` |  |
| `membership` | `mixed` |  |
| `name` | `string` |  |
| `partnerDirectLoginDisabled` | `bool` |  |
| `partnerExternalUserId` | `mixed` |  |
| `partnerPolicyCode` | `mixed` |  |
| `partnerSource` | `mixed` |  |
| `picture` | `mixed` |  |
| `stripeCustomerId` | `mixed` |  |
| `stripeSubscriptionId` | `mixed` |  |
| `subscriptionCurrentPeriodEnd` | `mixed` |  |
| `subscriptionStatus` | `mixed` |  |
| `totalCount` | `int` |  |
| `updatedAt` | `string` |  |
| `userId` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the User record (throws on error).
$user = $client->User()->load(["id" => "user_id"]);
```


### UserAgent

Create an instance: `$user_agent = $client->UserAgent();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent` | `array` |  |
| `assigned_at` | `string` |  |
| `assignment_id` | `string` |  |
| `expires_at` | `mixed` |  |
| `id` | `string` |  |
| `status` | `string` |  |

#### Example: List

```php
// list() returns an array of UserAgent entities, one per record (throws on error).
$user_agents = $client->UserAgent()->list(["id" => "example"]);
```

#### Example: Create

```php
$user_agent = $client->UserAgent()->create([
    "id" => null, // string
    "agent" => null, // array
    "assigned_at" => null, // string
    "assignment_id" => null, // string
    "status" => null, // string
]);
```


### UserHealthDetail

Create an instance: `$user_health_detail = $client->UserHealthDetail();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `mixed` |  |
| `activated` | `bool` |  |
| `activated_by_admin_at` | `mixed` |  |
| `activated_by_admin_id` | `string` |  |
| `admin_notes` | `mixed` |  |
| `agents_count` | `int` |  |
| `assigned_agents` | `array` |  |
| `assigned_agents_count` | `int` |  |
| `assigned_agents_preview_limit` | `int` |  |
| `assigned_agents_truncated` | `bool` |  |
| `auto_schedule_enabled` | `bool` |  |
| `comments_expected_per_day` | `int` |  |
| `comments_fix_block_reason` | `mixed` |  |
| `comments_fix_ready` | `bool` |  |
| `comments_today_failed` | `int` |  |
| `comments_today_posted` | `int` |  |
| `comments_today_scheduled` | `int` |  |
| `comments_yesterday_failed` | `int` |  |
| `comments_yesterday_posted` | `int` |  |
| `comments_yesterday_total` | `int` |  |
| `created_at` | `string` |  |
| `credits` | `int` |  |
| `effective_posted_video_reuse_percent` | `int` |  |
| `email` | `string` |  |
| `expected_agents_count` | `int` |  |
| `id` | `string` |  |
| `is_activated_by_admin` | `bool` |  |
| `is_admin` | `bool` |  |
| `is_bookmarked` | `bool` |  |
| `is_internal_user` | `bool` |  |
| `is_migrated` | `bool` |  |
| `landing_slug` | `mixed` |  |
| `landing_status` | `mixed` |  |
| `landing_url` | `mixed` |  |
| `membership` | `mixed` |  |
| `microhub_status` | `mixed` |  |
| `microhub_url` | `mixed` |  |
| `name` | `string` |  |
| `onboarding_flow` | `string` |  |
| `posted_video_reuse_percent` | `mixed` |  |
| `product_id` | `string` |  |
| `product_name` | `mixed` |  |
| `product_url` | `mixed` |  |
| `subscription_status` | `mixed` |  |
| `survey_data` | `mixed` |  |
| `today_failed` | `int` |  |
| `today_posted` | `int` |  |
| `today_scheduled` | `int` |  |
| `tomorrow_capacity` | `int` |  |
| `tomorrow_scheduled` | `int` |  |
| `videos_completed` | `int` |  |
| `videos_failed` | `int` |  |
| `videos_pending` | `int` |  |
| `videos_stale` | `int` |  |
| `videos_total` | `int` |  |
| `yesterday_failed` | `int` |  |
| `yesterday_failed_entries` | `array` |  |
| `yesterday_posted` | `int` |  |
| `yesterday_total` | `int` |  |

#### Example: List

```php
// list() returns an array of UserHealthDetail entities, one per record (throws on error).
$user_health_details = $client->UserHealthDetail()->list(["id" => "example"]);
```


### UserWithAvatarSubmission

Create an instance: `$user_with_avatar_submission = $client->UserWithAvatarSubmission();`

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

```php
// list() returns an array of UserWithAvatarSubmission entities, one per record (throws on error).
$user_with_avatar_submissions = $client->UserWithAvatarSubmission()->list();
```


### UsersHealth

Create an instance: `$users_health = $client->UsersHealth();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `mixed` |  |
| `admin_notes` | `mixed` |  |
| `agents_count` | `int` |  |
| `agents_health` | `string` |  |
| `agents_issue` | `mixed` |  |
| `assigned_agents_count` | `int` |  |
| `auto_schedule_enabled` | `bool` |  |
| `auto_schedule_health` | `string` |  |
| `auto_schedule_issue` | `mixed` |  |
| `auto_schedule_today_health` | `string` |  |
| `auto_schedule_today_issue` | `mixed` |  |
| `created_at` | `string` |  |
| `email` | `string` |  |
| `expected_agents_count` | `int` |  |
| `id` | `string` |  |
| `is_bookmarked` | `bool` |  |
| `is_internal_user` | `bool` |  |
| `is_migrated` | `bool` |  |
| `membership` | `mixed` |  |
| `name` | `string` |  |
| `posts_health` | `string` |  |
| `posts_issue` | `mixed` |  |
| `posts_today_health` | `string` |  |
| `posts_today_issue` | `mixed` |  |
| `subscription_status` | `mixed` |  |
| `today_expected_count` | `int` |  |
| `today_failed_count` | `int` |  |
| `today_scheduled_count` | `int` |  |
| `today_total_count` | `int` |  |
| `tomorrow_expected_count` | `int` |  |
| `tomorrow_scheduled_count` | `int` |  |
| `yesterday_failed_count` | `int` |  |
| `yesterday_total_count` | `int` |  |

#### Example: List

```php
// list() returns an array of UsersHealth entities, one per record (throws on error).
$users_healths = $client->UsersHealth()->list();
```


### Video

Create an instance: `$video = $client->Video();`

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
| `bookmarked` | `mixed` |  |
| `captions` | `mixed` |  |
| `carousel_data` | `mixed` |  |
| `created_at` | `string` |  |
| `duration` | `float` |  |
| `generation_status` | `mixed` |  |
| `id` | `string` |  |
| `image_prompt` | `mixed` |  |
| `is_onboarding` | `bool` |  |
| `is_template` | `bool` |  |
| `main_avatar` | `mixed` |  |
| `main_prompt` | `mixed` |  |
| `media_asset_id` | `string` |  |
| `product_id` | `string` |  |
| `reel_id` | `string` |  |
| `thumbnail_url` | `mixed` |  |
| `title` | `string` |  |
| `type` | `mixed` |  |
| `updated_at` | `mixed` |  |
| `url` | `string` |  |
| `user_id` | `string` |  |
| `video_id` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Video record (throws on error).
$video = $client->Video()->load(["id" => "video_id"]);
```

#### Example: Create

```php
$video = $client->Video()->create([
    "captions" => null, // mixed
    "title" => null, // string
    "url" => null, // string
    "video_id" => null, // string
]);
```


### VideoRemixerWorker

Create an instance: `$video_remixer_worker = $client->VideoRemixerWorker();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `captions_ass` | `string` |  |
| `captions_vtt` | `string` |  |
| `cost_usd` | `float` |  |
| `error` | `string` |  |
| `file` | `string` |  |
| `kinds` | `array` |  |
| `lease_token` | `string` |  |
| `limit` | `int` |  |
| `manifest` | `string` |  |
| `model` | `string` |  |
| `processing_seconds` | `float` |  |
| `prompt_version` | `string` |  |
| `result` | `array` |  |
| `thumbnail` | `string` |  |
| `tier` | `string` |  |
| `worker_id` | `string` |  |

#### Example: Create

```php
$video_remixer_worker = $client->VideoRemixerWorker()->create([
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


### WatchdogRecovery

Create an instance: `$watchdog_recovery = $client->WatchdogRecovery();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `item_id` | `string` |  |
| `passed` | `bool` |  |
| `table` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the WatchdogRecovery record (throws on error).
$watchdog_recovery = $client->WatchdogRecovery()->load();
```

#### Example: Create

```php
$watchdog_recovery = $client->WatchdogRecovery()->create([
    "item_id" => null, // string
    "passed" => null, // bool
    "table" => null, // string
]);
```


### WinningAd

Create an instance: `$winning_ad = $client->WinningAd();`

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

```php
// list() returns an array of WinningAd entities, one per record (throws on error).
$winning_ads = $client->WinningAd()->list();
```


### XAdaptation

Create an instance: `$x_adaptation = $client->XAdaptation();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the XAdaptation record (throws on error).
$x_adaptation = $client->XAdaptation()->load();
```


### ZerohumanAdminAccount

Create an instance: `$zerohuman_admin_account = $client->ZerohumanAdminAccount();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_mode` | `string` |  |
| `active_queue_count` | `int` |  |
| `assigned_agent` | `mixed` |  |
| `created_at` | `mixed` |  |
| `email` | `string` |  |
| `external_user_id` | `string` |  |
| `membership` | `mixed` |  |
| `policy_code` | `mixed` |  |
| `product_id` | `string` |  |
| `product_name` | `mixed` |  |
| `provisioning_status` | `string` |  |
| `subscription_status` | `mixed` |  |
| `updated_at` | `mixed` |  |
| `user_id` | `string` |  |

#### Example: List

```php
// list() returns an array of ZerohumanAdminAccount entities, one per record (throws on error).
$zerohuman_admin_accounts = $client->ZerohumanAdminAccount()->list();
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

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── crackedapireference_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── schema.php                     -- Generated option + entity specs
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`crackedapireference_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$admininsight = $client->AdminInsight();
$admininsight->list();

// $admininsight->data_get() now returns the admininsight data from the last list
// $admininsight->match_get() returns the last match criteria
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
