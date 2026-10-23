# CrackedApiReference Python SDK



The Python SDK for the CrackedApiReference API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Activate()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `patch`, `remove`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Tags](https://github.com/voxgig-sdk/cracked-api-reference-sdk/tags)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from crackedapireference_sdk import CrackedApiReferenceSDK

client = CrackedApiReferenceSDK({
    "apikey": os.environ.get("CRACKED_API_REFERENCE_APIKEY"),
    "server": {
        "base": "<base>",
    },
})
```

### 3. Load an admin

Admin is nested under date, so provide the `date`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    admin = client.Admin().load({"date": "example_date"})
    print(admin.data_get())
except Exception as err:
    print(f"load failed: {err}")
```

### 4. Create, update, and remove

```python
# Create — returns the ENTITY (call data_get() for the record)
created = client.Activate().create({"user_id": "example_user_id", "message": "example_message", "success": True})

```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    admininsights = client.AdminInsight().list()
    print([item.data_get() for item in admininsights])
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = CrackedApiReferenceSDK.test()

# Entity ops return the entity, and list one per record; they raise on error.
admininsight = client.AdminInsight().list()
# data_get() on an entity reads its mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = CrackedApiReferenceSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### CrackedApiReferenceSDK

```python
from crackedapireference_sdk import CrackedApiReferenceSDK

client = CrackedApiReferenceSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = CrackedApiReferenceSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### CrackedApiReferenceSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
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
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria, one per record. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity, and return it. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity, and return it. Raises on error. |
| `patch` | `(reqdata, ctrl) -> any` | Change part of an existing entity, and return it. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity, and return it marked as deleted. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the entity, and `list` a `list` of entities, one
per record; an entity's `data_get()` reads its record (a `dict`). They raise
on error, so wrap calls in `try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `activate = client.Activate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activated_at` | `Any` |  |
| `message` | `str` |  |
| `success` | `bool` |  |

#### Example: Create

```python
activate = client.Activate().create({
    "user_id": "example_user_id",  # str
    "message": "example_message",  # str
    "success": True,  # bool
})
```


### ActivateUser

Create an instance: `activate_user = client.ActivateUser()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activated_at` | `Any` |  |
| `message` | `str` |  |
| `success` | `bool` |  |

#### Example: Create

```python
activate_user = client.ActivateUser().create({
    "user_id": "example_user_id",  # str
    "message": "example_message",  # str
    "success": True,  # bool
})
```


### ActiveOnboarding

Create an instance: `active_onboarding = client.ActiveOnboarding()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_step` | `Any` |  |
| `has_active_onboarding` | `bool` |  |
| `onboarding_data_id` | `str` |  |

#### Example: Load

```python
active_onboarding = client.ActiveOnboarding().load()
```


### Admin

Create an instance: `admin = client.Admin()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apply` | `bool` | Apply safe canonical or clean-only URL updates |
| `count` | `int` |  |
| `created_at` | `str` |  |
| `date_from` | `Any` |  |
| `date_to` | `Any` |  |
| `email` | `str` |  |
| `id` | `str` |  |
| `include_failed` | `bool` |  |
| `include_pending` | `bool` |  |
| `include_records` | `bool` | Include full per-field audit records in the response |
| `issue_ids` | `Any` |  |
| `only_active` | `bool` | Limit the audit to active agents |
| `platform` | `Any` |  |
| `posting_method` | `Any` |  |
| `product_id` | `str` |  |
| `query` | `Any` |  |
| `reason` | `Any` |  |
| `regenerate` | `bool` |  |
| `status` | `str` |  |
| `user_membership` | `Any` |  |
| `user_name` | `Any` |  |
| `user_onboarding_step` | `Any` |  |
| `video_type` | `str` |  |

#### Example: Load

```python
admin = client.Admin().load({"date": "date"})
```

#### Example: List

```python
admins = client.Admin().list()
```

#### Example: Create

```python
admin = client.Admin().create({
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


### AdminAccountReset

Create an instance: `admin_account_reset = client.AdminAccountReset()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_ids` | `list` |  |
| `agent_ids_sha256` | `str` |  |
| `backup_sha256` | `str` |  |
| `batch_size` | `int` |  |
| `confirmation` | `str` |  |
| `customer_email` | `str` |  |
| `pc_name` | `str` |  |
| `phase` | `str` |  |
| `product_id` | `str` |  |
| `video_ids` | `list` |  |

#### Example: Create

```python
admin_account_reset = client.AdminAccountReset().create({
    "agent_ids": [],  # list
    "agent_ids_sha256": "example_agent_ids_sha256",  # str
    "backup_sha256": "example_backup_sha256",  # str
    "confirmation": "example_confirmation",  # str
    "customer_email": "example_customer_email",  # str
    "pc_name": "example_pc_name",  # str
    "product_id": "example_product_id",  # str
})
```


### AdminCarousel

Create an instance: `admin_carousel = client.AdminCarousel()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `str` |  |
| `batch_id` | `str` |  |
| `caption` | `str` |  |
| `content_base64` | `str` |  |
| `day` | `Any` |  |
| `dry_run` | `bool` |  |
| `engine_run` | `str` |  |
| `expected_revision` | `str` |  |
| `formula` | `dict` |  |
| `formula_id` | `str` |  |
| `prompt` | `str` |  |
| `slides` | `list` |  |
| `title` | `str` |  |

#### Example: Load

```python
admin_carousel = client.AdminCarousel().load({"batch_id": "batch_id"})
```

#### Example: Create

```python
admin_carousel = client.AdminCarousel().create({
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


### AdminCarouselDemoReview

Create an instance: `admin_carousel_demo_review = client.AdminCarouselDemoReview()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `items` | `list` |  |
| `reason` | `str` |  |

#### Example: Load

```python
admin_carousel_demo_review = client.AdminCarouselDemoReview().load({"id": "admin_carousel_demo_review_id"})
```

#### Example: Create

```python
admin_carousel_demo_review = client.AdminCarouselDemoReview().create({
    "items": [],  # list
})
```


### AdminCustomer

Create an instance: `admin_customer = client.AdminCustomer()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `Any` |  |
| `active_vireel_agents` | `int` |  |
| `agents` | `list` |  |
| `billing_source` | `str` |  |
| `contracted_agents` | `Any` |  |
| `email` | `str` |  |
| `membership` | `Any` |  |
| `name` | `str` |  |
| `pfa_only_agents` | `int` |  |
| `severity` | `str` |  |
| `status` | `str` |  |
| `subscription_status` | `Any` |  |
| `user_id` | `str` |  |

#### Example: List

```python
admin_customers = client.AdminCustomer().list()
```


### AdminCustomerSuccess

Create an instance: `admin_customer_success = client.AdminCustomerSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_agents` | `int` |  |
| `active_products` | `int` |  |
| `agents_count` | `int` |  |
| `auto_schedule_status` | `str` |  |
| `days_until_period_end` | `Any` |  |
| `email` | `str` |  |
| `feature_impact` | `str` |  |
| `last_notification_at` | `Any` |  |
| `membership` | `Any` |  |
| `name` | `str` |  |
| `notification_count` | `int` |  |
| `notification_events` | `list` |  |
| `priority` | `str` |  |
| `severity` | `str` |  |
| `status_label` | `str` |  |
| `subscription_current_period_end` | `Any` |  |
| `subscription_status` | `Any` |  |
| `upcoming_posts` | `int` |  |
| `user_id` | `str` |  |

#### Example: List

```python
admin_customer_successs = client.AdminCustomerSuccess().list()
```


### AdminGeneratedVideo

Create an instance: `admin_generated_video = client.AdminGeneratedVideo()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `str` |  |
| `agent_name` | `Any` |  |
| `created_at` | `str` |  |
| `duration` | `float` |  |
| `generation_status` | `dict` |  |
| `id` | `str` |  |
| `product_id` | `str` |  |
| `thumbnail_url` | `Any` |  |
| `title` | `str` |  |
| `type` | `str` |  |
| `updated_at` | `Any` |  |
| `url` | `str` |  |

#### Example: List

```python
admin_generated_videos = client.AdminGeneratedVideo().list({"user_id": "example"})
```


### AdminHealthrx

Create an instance: `admin_healthrx = client.AdminHealthrx()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `str` |  |
| `delivery_enabled` | `bool` |  |
| `id` | `str` |  |
| `option_id` | `str` |  |
| `plan` | `dict` |  |
| `preparation_enabled` | `bool` |  |
| `product_id` | `str` |  |
| `reason` | `str` |  |
| `request_key` | `str` |  |
| `revision` | `int` |  |
| `schedule_enabled` | `bool` |  |
| `version` | `str` |  |
| `viewed` | `bool` |  |

#### Example: Load

```python
admin_healthrx = client.AdminHealthrx().load({"item_id": "item_id", "kind": "kind"})
```

#### Example: Create

```python
admin_healthrx = client.AdminHealthrx().create({
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


### AdminInsight

Create an instance: `admin_insight = client.AdminInsight()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `customer_success_cases` | `list` |  |
| `customers` | `list` |  |
| `generated_at` | `str` |  |
| `pfa_database` | `dict` |  |
| `recent_signups` | `list` |  |
| `summary` | `dict` |  |
| `vireel_database` | `dict` |  |

#### Example: Load

```python
admin_insight = client.AdminInsight().load()
```

#### Example: List

```python
admin_insights = client.AdminInsight().list()
```


### AdminLandingTask

Create an instance: `admin_landing_task = client.AdminLandingTask()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `task_id` | `str` |  |

#### Example: Create

```python
admin_landing_task = client.AdminLandingTask().create({
    "user_id": "example_user_id",  # str
    "task_id": "example_task_id",  # str
})
```


### AdminMetricsSummary

Create an instance: `admin_metrics_summary = client.AdminMetricsSummary()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `paid_users_by_level` | `list` |  |
| `total_cancellations` | `int` |  |
| `total_previews_generated` | `int` |  |
| `total_signups` | `int` |  |
| `total_videos_generated` | `int` |  |
| `url_attempts` | `int` |  |
| `user_credits` | `list` |  |
| `user_gifted_credits` | `list` |  |

#### Example: List

```python
admin_metrics_summarys = client.AdminMetricsSummary().list()
```


### AdminPost

Create an instance: `admin_post = client.AdminPost()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `admin_job_ids` | `Any` |  |
| `agent_id` | `str` |  |
| `agent_name` | `Any` |  |
| `agent_platform_urls` | `Any` |  |
| `agent_url` | `Any` |  |
| `comments` | `int` |  |
| `error_message` | `Any` |  |
| `failed_at` | `Any` |  |
| `id` | `str` |  |
| `instagram_posted_by` | `Any` |  |
| `instagram_posted_url` | `Any` |  |
| `instagram_scraped_social_post_id` | `str` |  |
| `is_instagram_posted` | `bool` |  |
| `is_tiktok_posted` | `bool` |  |
| `is_youtube_posted` | `bool` |  |
| `last_refreshed_at` | `Any` |  |
| `likes` | `int` |  |
| `platform_post_methods` | `Any` |  |
| `platform_urls` | `Any` |  |
| `post_method` | `Any` |  |
| `post_platforms` | `Any` |  |
| `post_url` | `Any` |  |
| `posted_at` | `Any` |  |
| `product_id` | `str` |  |
| `results_status` | `Any` |  |
| `scheduled_datetime` | `str` |  |
| `source_type` | `str` |  |
| `status` | `str` |  |
| `tiktok_posted_by` | `Any` |  |
| `tiktok_posted_url` | `Any` |  |
| `tiktok_scraped_social_post_id` | `str` |  |
| `upload_post_error` | `Any` |  |
| `upload_post_status` | `Any` |  |
| `upload_post_uploads` | `Any` |  |
| `user_email` | `str` |  |
| `user_id` | `str` |  |
| `user_name` | `Any` |  |
| `video_id` | `str` |  |
| `video_url` | `Any` |  |
| `views` | `int` |  |
| `youtube_posted_by` | `Any` |  |
| `youtube_posted_url` | `Any` |  |
| `youtube_scraped_social_post_id` | `str` |  |

#### Example: List

```python
admin_posts = client.AdminPost().list()
```


### AdminRecentSignup

Create an instance: `admin_recent_signup = client.AdminRecentSignup()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `current_step` | `str` |  |
| `email` | `str` |  |
| `email_source` | `Any` |  |
| `error_message` | `Any` |  |
| `flow_variant` | `str` |  |
| `id` | `str` |  |
| `inactive_minutes` | `int` |  |
| `last_notification_at` | `Any` |  |
| `last_seen_at` | `str` |  |
| `likely_cause` | `str` |  |
| `notification_count` | `int` |  |
| `notification_events` | `list` |  |
| `product_id` | `str` |  |
| `product_name` | `Any` |  |
| `product_url` | `str` |  |
| `severity` | `str` |  |
| `social_scan_status` | `Any` |  |
| `stage_label` | `str` |  |
| `status` | `str` |  |
| `updated_at` | `Any` |  |
| `website_scrape_status` | `Any` |  |

#### Example: List

```python
admin_recent_signups = client.AdminRecentSignup().list()
```


### AdminSlideshowDiag

Create an instance: `admin_slideshow_diag = client.AdminSlideshowDiag()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `str` |  |
| `batch_id` | `str` |  |
| `caption` | `str` |  |
| `content_base64` | `str` |  |
| `day` | `Any` |  |
| `formula_id` | `str` |  |
| `id` | `str` |  |
| `title` | `str` |  |

#### Example: Create

```python
admin_slideshow_diag = client.AdminSlideshowDiag().create({
    "id": "example_id",  # str
})
```


### AdminSlideshowImport

Create an instance: `admin_slideshow_import = client.AdminSlideshowImport()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `str` |  |
| `batch_id` | `str` |  |
| `caption` | `str` |  |
| `day` | `str` |  |
| `dry_run` | `bool` |  |
| `engine_run` | `str` |  |
| `formula_id` | `str` |  |
| `slides` | `list` |  |
| `title` | `str` |  |

#### Example: Load

```python
admin_slideshow_import = client.AdminSlideshowImport().load({"batch_id": "batch_id"})
```

#### Example: Create

```python
admin_slideshow_import = client.AdminSlideshowImport().create({
    "agent_id": "example_agent_id",  # str
    "batch_id": "example_batch_id",  # str
    "caption": "example_caption",  # str
    "day": "example_day",  # str
    "formula_id": "example_formula_id",  # str
    "slides": [],  # list
    "title": "example_title",  # str
})
```


### AdminUserView

Create an instance: `admin_user_view = client.AdminUserView()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `Any` |  |
| `admin_notes` | `Any` |  |
| `agents_count` | `int` |  |
| `created_at` | `str` |  |
| `credits` | `int` |  |
| `email` | `str` |  |
| `id` | `str` |  |
| `industry` | `Any` |  |
| `is_admin` | `bool` |  |
| `is_bookmarked` | `bool` |  |
| `is_internal_user` | `bool` |  |
| `membership` | `Any` |  |
| `name` | `str` |  |
| `new_email` | `str` |  |
| `partner_external_user_id` | `str` |  |
| `partner_policy_code` | `Any` |  |
| `partner_source` | `Any` |  |
| `product_name` | `Any` |  |
| `product_url` | `Any` |  |
| `skip` | `bool` |  |
| `subscription_details` | `Any` |  |
| `subscription_status` | `Any` |  |

#### Example: List

```python
admin_user_views = client.AdminUserView().list()
```

#### Example: Create

```python
admin_user_view = client.AdminUserView().create({
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


### AdminUsersTableItem

Create an instance: `admin_users_table_item = client.AdminUsersTableItem()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activated` | `bool` |  |
| `agents_count` | `int` |  |
| `created_at` | `str` |  |
| `credits` | `int` |  |
| `demo_booked` | `bool` |  |
| `email` | `str` |  |
| `id` | `str` |  |
| `membership` | `Any` |  |
| `name` | `str` |  |
| `onboarding_flow` | `str` |  |
| `product_name` | `Any` |  |
| `product_url` | `Any` |  |
| `survey_data` | `Any` |  |

#### Example: List

```python
admin_users_table_items = client.AdminUsersTableItem().list()
```


### AdminVideoRemixer

Create an instance: `admin_video_remixer = client.AdminVideoRemixer()`

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
| `activity` | `str` |  |
| `allowed_platforms` | `list` |  |
| `anchor_clip_id` | `str` |  |
| `atomicity_class` | `Any` |  |
| `auto_render` | `bool` |  |
| `campaign_allowed` | `bool` |  |
| `channel` | `str` |  |
| `channel_default` | `str` |  |
| `clip_id` | `str` |  |
| `clip_ids` | `list` |  |
| `collected_at` | `str` |  |
| `comments` | `Any` |  |
| `completion_rate` | `Any` |  |
| `confirmed_duplicate_of` | `Any` |  |
| `consent_doc_uri` | `str` |  |
| `contact` | `str` |  |
| `conversions` | `Any` |  |
| `count` | `int` |  |
| `creator` | `str` |  |
| `creator_id` | `str` |  |
| `crop_window` | `Any` |  |
| `cta_product_id` | `str` |  |
| `days` | `int` |  |
| `derivative_edits_allowed` | `bool` |  |
| `enabled` | `bool` |  |
| `end_ms` | `Any` |  |
| `enqueue` | `bool` |  |
| `errors` | `list` |  |
| `evidence` | `str` |  |
| `expected_revision` | `Any` |  |
| `expected_revisions` | `dict` |  |
| `external_ai_allowed` | `bool` |  |
| `file` | `str` |  |
| `followers` | `Any` |  |
| `formula_id` | `str` |  |
| `formula_ids` | `list` |  |
| `handles` | `dict` |  |
| `hook_subtype` | `Any` |  |
| `hour_utc` | `int` |  |
| `human_role` | `str` |  |
| `idempotency_key` | `str` |  |
| `items` | `list` |  |
| `kim_clip_ids` | `list` |  |
| `kind` | `str` |  |
| `levels` | `dict` |  |
| `likes` | `Any` |  |
| `media_enabled` | `bool` |  |
| `medical_claim_present` | `bool` |  |
| `minute_utc` | `int` |  |
| `music_bed_allowed` | `bool` |  |
| `music_policy` | `str` |  |
| `name` | `str` |  |
| `niche` | `str` |  |
| `notes` | `str` |  |
| `origin` | `str` |  |
| `owner_waiver` | `bool` |  |
| `paid_ads_allowed` | `bool` |  |
| `patient_identifiable` | `bool` |  |
| `person_type` | `str` |  |
| `pipeline` | `bool` |  |
| `planning_only` | `bool` |  |
| `platform` | `str` |  |
| `platform_post_id` | `str` |  |
| `policy` | `dict` |  |
| `polish` | `str` |  |
| `post_url` | `str` |  |
| `posted_at` | `str` |  |
| `primary_role` | `Any` |  |
| `purpose` | `str` |  |
| `rate` | `float` |  |
| `rationale` | `str` |  |
| `reason` | `str` |  |
| `reference_source_id` | `str` |  |
| `requires_medical_review` | `bool` |  |
| `review_status` | `Any` |  |
| `revision` | `int` |  |
| `rights_expires_at` | `Any` |  |
| `rights_status` | `str` |  |
| `run_id` | `str` |  |
| `sample_links` | `list` |  |
| `secondary_roles` | `Any` |  |
| `seconds` | `int` |  |
| `seed` | `int` |  |
| `seed_base` | `int` |  |
| `sensitive_personal_data_present` | `bool` |  |
| `shares` | `Any` |  |
| `shoot` | `str` |  |
| `slots` | `list` |  |
| `soundbite_title` | `Any` |  |
| `source` | `str` |  |
| `source_id` | `str` |  |
| `source_ids` | `list` |  |
| `spend_usd` | `Any` |  |
| `spiciness` | `Any` |  |
| `spiciness_notes` | `str` |  |
| `start_ms` | `Any` |  |
| `status` | `str` |  |
| `terry_clip_ids` | `list` |  |
| `testimonial_strength` | `Any` |  |
| `testimonial_type` | `Any` |  |
| `tier` | `str` |  |
| `timeline` | `dict` |  |
| `topic` | `str` |  |
| `topic_tags` | `Any` |  |
| `total_target_ms` | `int` |  |
| `use_learned_weights` | `bool` |  |
| `views` | `Any` |  |
| `window` | `str` |  |

#### Example: Load

```python
admin_video_remixer = client.AdminVideoRemixer().load({"clip_id": "clip_id"})
```

#### Example: Create

```python
admin_video_remixer = client.AdminVideoRemixer().create({
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


### AdvanceStep

Create an instance: `advance_step = client.AdvanceStep()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_step` | `str` |  |
| `onboarding_data_id` | `str` | UUID of the OnboardingData record |
| `success` | `bool` |  |
| `to_step` | `str` | Target step name |

#### Example: Create

```python
advance_step = client.AdvanceStep().create({
    "onboarding_data_id": "example_onboarding_data_id",  # str
    "to_step": "example_to_step",  # str
})
```


### Agent

Create an instance: `agent = client.Agent()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_connections` | `int` |  |
| `at_capacity` | `bool` |  |
| `id` | `str` |  |
| `is_active` | `bool` |  |
| `name` | `str` |  |
| `tiktok_stats` | `Any` |  |
| `type` | `str` |  |

#### Example: List

```python
agents = client.Agent().list()
```


### AgentAccessCustomersHealth

Create an instance: `agent_access_customers_health = client.AgentAccessCustomersHealth()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountType` | `Any` |  |
| `agentQuota` | `int` |  |
| `assignedAgentsByType` | `dict` |  |
| `assignedAgentsTotal` | `int` |  |
| `createdAt` | `str` |  |
| `email` | `str` |  |
| `isInternalUser` | `Any` |  |
| `membership` | `Any` |  |
| `name` | `str` |  |
| `performance` | `dict` |  |
| `productCount` | `int` |  |
| `subscriptionCurrentPeriodEnd` | `Any` |  |
| `subscriptionDetails` | `Any` |  |
| `subscriptionStatus` | `Any` |  |
| `usage` | `dict` |  |
| `userId` | `str` |  |

#### Example: List

```python
agent_access_customers_healths = client.AgentAccessCustomersHealth().list()
```


### AgentAccessOverview

Create an instance: `agent_access_overview = client.AgentAccessOverview()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeUsers` | `int` |  |
| `generatedAt` | `str` |  |
| `newUsersYesterday` | `int` |  |
| `onboardingContextCounts` | `dict` |  |
| `onboardingCurrentStepCounts` | `dict` |  |
| `onboardingCurrentStepWindow` | `dict` |  |
| `onboardingFlowVariantCounts` | `dict` |  |
| `onboardingLockedUntilActivation` | `int` |  |
| `onboardingRecordsTotal` | `int` |  |
| `onboardingRecordsWindow` | `int` |  |
| `onboardingSocialScanStatusCounts` | `dict` |  |
| `onboardingWebsiteScrapeStatusCounts` | `dict` |  |
| `subscriptionStatusCounts` | `dict` |  |
| `totalInternalUsers` | `int` |  |
| `totalUsers` | `int` |  |
| `trialStartedYesterday` | `int` |  |
| `trialingUsers` | `int` |  |

#### Example: Load

```python
agent_access_overview = client.AgentAccessOverview().load()
```


### AgentAccessPhilHourlyNotification

Create an instance: `agent_access_phil_hourly_notification = client.AgentAccessPhilHourlyNotification()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `generatedAt` | `str` |  |
| `phoneHealth` | `dict` |  |
| `scheduledPosts` | `dict` |  |
| `targetDate` | `str` |  |
| `uploadPostInstagramHealth` | `dict` |  |
| `uploadPostTiktokHealth` | `dict` |  |
| `uploadPostYoutubeHealth` | `dict` |  |

#### Example: Load

```python
agent_access_phil_hourly_notification = client.AgentAccessPhilHourlyNotification().load()
```


### AgentAccessPhilStatsRefresh

Create an instance: `agent_access_phil_stats_refresh = client.AgentAccessPhilStatsRefresh()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `generatedAt` | `str` |  |
| `statsRefresh` | `dict` |  |
| `targetDate` | `str` |  |

#### Example: Load

```python
agent_access_phil_stats_refresh = client.AgentAccessPhilStatsRefresh().load()
```


### AgentAccessPhilVideo

Create an instance: `agent_access_phil_video = client.AgentAccessPhilVideo()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `generatedAt` | `str` |  |
| `targetDate` | `str` |  |
| `videos` | `dict` |  |

#### Example: Load

```python
agent_access_phil_video = client.AgentAccessPhilVideo().load()
```


### AgentAccessUserAgent

Create an instance: `agent_access_user_agent = client.AgentAccessUserAgent()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentQuota` | `int` |  |
| `agents` | `list` |  |
| `assignedByType` | `dict` |  |
| `assignedTotal` | `int` |  |
| `email` | `str` |  |
| `products` | `list` |  |
| `userId` | `str` |  |

#### Example: List

```python
agent_access_user_agents = client.AgentAccessUserAgent().list({"email": "example"})
```


### AgentAccessUserPhoneFarm

Create an instance: `agent_access_user_phone_farm = client.AgentAccessUserPhoneFarm()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar` | `Any` |  |
| `facebookUrl` | `Any` |  |
| `id` | `str` |  |
| `instagramUrl` | `Any` |  |
| `lastAdminSyncedAt` | `Any` |  |
| `name` | `str` |  |
| `productId` | `Any` |  |
| `productName` | `Any` |  |
| `tiktokUrl` | `Any` |  |
| `type` | `Any` |  |
| `uploadPostPlatforms` | `Any` |  |
| `youtubeUrl` | `Any` |  |

#### Example: List

```python
agent_access_user_phone_farms = client.AgentAccessUserPhoneFarm().list({"email": "example"})
```


### AgentAccessUserPost

Create an instance: `agent_access_user_post = client.AgentAccessUserPost()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deltaYesterday` | `int` |  |
| `expectedVideosPerDay` | `int` |  |
| `postedToday` | `int` |  |
| `postedYesterday` | `int` |  |
| `productId` | `Any` |  |
| `productName` | `Any` |  |

#### Example: List

```python
agent_access_user_posts = client.AgentAccessUserPost().list({"email": "example"})
```


### AgentAccessUserSummary

Create an instance: `agent_access_user_summary = client.AgentAccessUserSummary()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deletedAt` | `Any` |  |
| `id` | `str` |  |
| `isActive` | `Any` |  |
| `name` | `str` |  |
| `url` | `str` |  |

#### Example: List

```python
agent_access_user_summarys = client.AgentAccessUserSummary().list({"email": "example"})
```


### AgentAccessUserVideo

Create an instance: `agent_access_user_video = client.AgentAccessUserVideo()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allTime` | `dict` |  |
| `email` | `str` |  |
| `today` | `dict` |  |
| `userId` | `str` |  |
| `yesterday` | `dict` |  |

#### Example: Load

```python
agent_access_user_video = client.AgentAccessUserVideo().load({"email": "email"})
```


### AgentAccessUserWinningAd

Create an instance: `agent_access_user_winning_ad = client.AgentAccessUserWinningAd()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `productId` | `str` |  |
| `productName` | `str` |  |
| `winningAds` | `list` |  |
| `winningAdsCount` | `int` |  |

#### Example: List

```python
agent_access_user_winning_ads = client.AgentAccessUserWinningAd().list({"email": "example"})
```


### AgentAccessWinningAdsSummary

Create an instance: `agent_access_winning_ads_summary = client.AgentAccessWinningAdsSummary()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `str` |  |
| `name` | `str` |  |
| `productCount` | `int` |  |
| `productsWithWinningAds` | `int` |  |
| `subscriptionStatus` | `Any` |  |
| `totalWinningAds` | `int` |  |
| `userId` | `str` |  |

#### Example: List

```python
agent_access_winning_ads_summarys = client.AgentAccessWinningAdsSummary().list()
```


### AgentDetail

Create an instance: `agent_detail = client.AgentDetail()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeConnections` | `Any` |  |
| `assignedAt` | `Any` |  |
| `avatar` | `str` |  |
| `bio` | `Any` |  |
| `facebookUrl` | `Any` |  |
| `id` | `str` |  |
| `instagramUrl` | `Any` |  |
| `isActive` | `bool` |  |
| `name` | `str` |  |
| `role` | `Any` |  |
| `tiktokStats` | `Any` |  |
| `tiktokUrl` | `Any` |  |
| `type` | `str` |  |
| `uploadPostPlatforms` | `Any` |  |
| `youtubeUrl` | `Any` |  |

#### Example: List

```python
agent_details = client.AgentDetail().list()
```


### AgentHealth

Create an instance: `agent_health = client.AgentHealth()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `daily` | `list` |  |
| `dates` | `list` |  |
| `generated_at` | `str` |  |
| `groups` | `list` |  |
| `latest` | `dict` |  |
| `live_date` | `Any` |  |
| `phone_admin_generated_at` | `str` |  |
| `platform` | `str` |  |
| `post_target` | `int` |  |
| `qa_managed_agent_ids` | `list` |  |
| `scope_prefixes` | `list` |  |
| `timezone` | `str` |  |
| `warmup_target` | `int` |  |

#### Example: List

```python
agent_healths = client.AgentHealth().list()
```


### AgentHealthCustomerOption

Create an instance: `agent_health_customer_option = client.AgentHealthCustomerOption()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_count` | `int` |  |
| `email` | `str` |  |
| `user_id` | `str` |  |

#### Example: List

```python
agent_health_customer_options = client.AgentHealthCustomerOption().list()
```


### AgentHealthDetail

Create an instance: `agent_health_detail = client.AgentHealthDetail()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived_issue_total` | `int` |  |
| `date` | `str` |  |
| `generated_at` | `str` |  |
| `group_id` | `str` |  |
| `has_more` | `bool` |  |
| `issue_total` | `int` |  |
| `issues` | `list` |  |
| `limit` | `int` |  |
| `metric` | `str` |  |
| `offset` | `int` |  |
| `warmup_runs` | `list` |  |
| `warning_total` | `int` |  |
| `warnings` | `list` |  |

#### Example: List

```python
agent_health_details = client.AgentHealthDetail().list({"date": "example", "group_id": "example"})
```


### AgentPost

Create an instance: `agent_post = client.AgentPost()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comments` | `int` |  |
| `error_message` | `Any` |  |
| `id` | `str` |  |
| `likes` | `int` |  |
| `product_id` | `str` |  |
| `results` | `Any` |  |
| `scheduled_datetime` | `str` |  |
| `source_type` | `str` |  |
| `status` | `str` |  |
| `user_email` | `str` |  |
| `user_id` | `str` |  |
| `user_name` | `Any` |  |
| `video_id` | `str` |  |
| `video_url` | `Any` |  |
| `views` | `int` |  |

#### Example: List

```python
agent_posts = client.AgentPost().list({"id": "example"})
```


### AgentStat

Create an instance: `agent_stat = client.AgentStat()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agents_needed` | `int` |  |
| `dedicated_agents` | `dict` |  |
| `shared_agents` | `dict` |  |
| `total_agents` | `int` |  |

#### Example: Load

```python
agent_stat = client.AgentStat().load()
```


### AgentSummary

Create an instance: `agent_summary = client.AgentSummary()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_count` | `int` |  |
| `favicon_url` | `Any` |  |
| `product_id` | `str` |  |
| `product_name` | `str` |  |

#### Example: List

```python
agent_summarys = client.AgentSummary().list()
```


### AgentsSummary

Create an instance: `agents_summary = client.AgentsSummary()`

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

```python
agents_summary = client.AgentsSummary().load()
```


### AnalysisStatus

Create an instance: `analysis_status = client.AnalysisStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
analysis_status = client.AnalysisStatus().load()
```


### AnalyticsPost

Create an instance: `analytics_post = client.AnalyticsPost()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent` | `Any` |  |
| `comment` | `Any` |  |
| `created_at` | `str` |  |
| `id` | `str` |  |
| `product_id` | `str` |  |
| `queue_position` | `Any` |  |
| `results` | `Any` |  |
| `scheduled_datetime` | `str` |  |
| `scraped_posts` | `Any` |  |
| `source_type` | `str` |  |
| `status` | `str` |  |
| `updated_at` | `str` |  |
| `video` | `Any` |  |

#### Example: List

```python
analytics_posts = client.AnalyticsPost().list({"date_from": "example"})
```


### AnalyzeProduct

Create an instance: `analyze_product = client.AnalyzeProduct()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `instagram_username` | `Any` |  |
| `message` | `str` |  |
| `status` | `str` |  |
| `url` | `str` |  |

#### Example: Create

```python
analyze_product = client.AnalyzeProduct().create({
    "url": "example_url",  # str
})
```


### AssignAgent

Create an instance: `assign_agent = client.AssignAgent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent` | `dict` | Agent information for V6. |
| `assignment` | `dict` | Assignment information for V6. |
| `mock_agents` | `list` |  |
| `onboarding_data_id` | `str` | UUID of the OnboardingData record |

#### Example: Create

```python
assign_agent = client.AssignAgent().create({
    "onboarding_data_id": "example_onboarding_data_id",  # str
})
```


### Auth

Create an instance: `auth = client.Auth()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |


### AutoScheduleSetting

Create an instance: `auto_schedule_setting = client.AutoScheduleSetting()`

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
| `enabled_video_types` | `Any` | List of enabled video type filters |
| `is_enabled` | `bool` |  |
| `lock_video_regeneration_controls` | `bool` |  |
| `membership_tier` | `str` |  |
| `posted_video_reuse_percent` | `Any` |  |
| `product_id` | `str` |  |
| `repost_source` | `Any` |  |
| `videos_per_day` | `int` |  |

#### Example: Load

```python
auto_schedule_setting = client.AutoScheduleSetting().load()
```


### BulkTikTokStatsUpdate

Create an instance: `bulk_tik_tok_stats_update = client.BulkTikTokStatsUpdate()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `failedIds` | `list` |  |
| `updatedCount` | `int` |  |
| `updates` | `list` |  |


### Carousel

Create an instance: `carousel = client.Carousel()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `str` |  |
| `agent_name` | `str` |  |
| `audit_created_at` | `Any` |  |
| `audit_snapshot_sha256` | `Any` |  |
| `caption` | `Any` |  |
| `comments` | `Any` |  |
| `fit_score` | `Any` |  |
| `format` | `str` |  |
| `formula` | `dict` |  |
| `formula_id` | `str` |  |
| `formula_name` | `Any` |  |
| `generation` | `dict` |  |
| `id` | `str` |  |
| `image_prompt` | `Any` |  |
| `likes` | `Any` |  |
| `main_prompt` | `Any` |  |
| `metrics_updated_at` | `Any` |  |
| `post_url` | `Any` |  |
| `profile_url` | `Any` |  |
| `qa` | `dict` |  |
| `qa_status` | `str` |  |
| `qa_verdict` | `Any` |  |
| `quality_score` | `Any` |  |
| `queue_id` | `str` |  |
| `relevance_score` | `Any` |  |
| `scheduled_at` | `str` |  |
| `slide_count` | `int` |  |
| `slides` | `list` |  |
| `source` | `dict` |  |
| `status` | `str` |  |
| `thumbnail_url` | `Any` |  |
| `title` | `str` |  |
| `video_id` | `str` |  |
| `views` | `Any` |  |

#### Example: Load

```python
carousel = client.Carousel().load({"id": "carousel_id"})
```

#### Example: List

```python
carousels = client.Carousel().list()
```

#### Example: Create

```python
carousel = client.Carousel().create({
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


### CarouselAgentDetail

Create an instance: `carousel_agent_detail = client.CarouselAgentDetail()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `str` |  |
| `agent_name` | `str` |  |
| `connection_status` | `Any` |  |
| `followers` | `Any` |  |
| `following` | `Any` |  |
| `metrics_updated_at` | `Any` |  |
| `phone_admin_status` | `str` |  |
| `profile_likes` | `Any` |  |
| `profile_url` | `Any` |  |
| `warmup_days` | `Any` |  |
| `warmup_hold_until` | `Any` |  |
| `warmup_status` | `str` |  |

#### Example: Load

```python
carousel_agent_detail = client.CarouselAgentDetail().load({"agent_id": "agent_id"})
```


### CarouselStatus

Create an instance: `carousel_status = client.CarouselStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `caption` | `Any` |  |
| `error` | `Any` |  |
| `id` | `str` |  |
| `image_model` | `Any` |  |
| `image_provider` | `Any` |  |
| `image_task_id` | `str` |  |
| `image_url` | `Any` |  |
| `index` | `int` |  |
| `prompt` | `Any` |  |
| `status` | `str` |  |

#### Example: List

```python
carousel_statuss = client.CarouselStatus().list({"id": "example"})
```


### Chat

Create an instance: `chat = client.Chat()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `idempotencyKey` | `str` |  |
| `message` | `str` |  |
| `sessionId` | `str` |  |

#### Example: Create

```python
chat = client.Chat().create({
    "session_id": "example_session_id",  # str
    "idempotencyKey": "example_idempotencyKey",  # str
    "message": "example_message",  # str
    "sessionId": "example_sessionId",  # str
})
```


### ChatHistory

Create an instance: `chat_history = client.ChatHistory()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `chatSubVariant` | `str` |  |
| `createdAt` | `str` |  |
| `messages` | `list` |  |
| `model` | `Any` |  |
| `onboardingDataId` | `str` |  |
| `routeRecommendation` | `Any` |  |
| `salesStage` | `str` |  |
| `selectedPlan` | `Any` |  |
| `session` | `dict` |  |
| `sessionId` | `str` |  |
| `status` | `str` |  |
| `updatedAt` | `str` |  |

#### Example: Load

```python
chat_history = client.ChatHistory().load({"session_id": "session_id"})
```

#### Example: Create

```python
chat_history = client.ChatHistory().create({
    "onboardingDataId": "example_onboardingDataId",  # str
})
```


### ChatSession

Create an instance: `chat_session = client.ChatSession()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `chatSubVariant` | `str` |  |
| `createdAt` | `str` |  |
| `model` | `Any` |  |
| `plan` | `Any` |  |
| `route` | `Any` |  |
| `routeRecommendation` | `Any` |  |
| `salesStage` | `str` |  |
| `selectedPlan` | `Any` |  |
| `sessionId` | `str` |  |
| `status` | `str` |  |
| `updatedAt` | `str` |  |

#### Example: Create

```python
chat_session = client.ChatSession().create({
    "session_id": "example_session_id",  # str
})
```


### Comment

Create an instance: `comment = client.Comment()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
comment = client.Comment().load()
```


### CommentCampaign

Create an instance: `comment_campaign = client.CommentCampaign()`

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
| `action` | `str` |  |
| `active_days_per_week` | `int` |  |
| `agent_id` | `str` |  |
| `allowlist` | `list` |  |
| `analysis_daily_limit` | `int` |  |
| `analysis_model` | `str` |  |
| `analysis_reservation_usd` | `float` |  |
| `approved_markets` | `list` |  |
| `brand_forward_enabled` | `bool` |  |
| `briefs` | `dict` |  |
| `candidate_only` | `bool` |  |
| `claims` | `list` |  |
| `cohort_removal_threshold` | `int` |  |
| `daily_cost_ceiling_usd` | `float` |  |
| `delivery_mode` | `str` |  |
| `disclosure_mode` | `str` |  |
| `disclosure_template` | `str` |  |
| `draft_options_count` | `int` |  |
| `draft_review_reservation_usd` | `float` |  |
| `exceptional_daily_cap_approved` | `bool` |  |
| `execution_enabled` | `bool` |  |
| `experiment_styles` | `list` |  |
| `inventory_factor` | `float` |  |
| `keywords` | `list` |  |
| `max_duration_seconds` | `Any` |  |
| `metadata_pass_rate` | `float` |  |
| `min_interval_minutes` | `int` |  |
| `mode` | `str` |  |
| `monitored_creators` | `list` |  |
| `platform` | `str` |  |
| `platform_permission_evidence` | `str` |  |
| `policy_approved_by` | `str` |  |
| `policy_expires_at` | `Any` |  |
| `policy_version` | `str` |  |
| `product_daily_limit` | `int` |  |
| `qualification_rate` | `float` |  |
| `raw_daily_limit` | `int` |  |
| `raw_result_reservation_usd` | `float` |  |
| `reason` | `str` |  |
| `replies_enabled` | `bool` |  |
| `request_key` | `str` |  |
| `reviewer_model` | `str` |  |
| `scan_interval_hours` | `int` |  |
| `search_change_reason` | `str` |  |
| `search_effective_at` | `Any` |  |
| `shadow_sample_limit` | `int` |  |
| `spent_seconds` | `Any` |  |
| `task_ttl_hours` | `int` |  |
| `top_comment_analysis_enabled` | `bool` |  |
| `writer_model` | `str` |  |

#### Example: Load

```python
comment_campaign = client.CommentCampaign().load({"product_id": "product_id"})
```

#### Example: Create

```python
comment_campaign = client.CommentCampaign().create({
    "product_id": "example_product_id",  # str
    "action": "example_action",  # str
    "agent_id": "example_agent_id",  # str
    "reason": "example_reason",  # str
    "request_key": "example_request_key",  # str
})
```


### CompleteChatCheckout

Create an instance: `complete_chat_checkout = client.CompleteChatCheckout()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `message` | `Any` |  |
| `onboarding_data_id` | `str` |  |
| `product_id` | `str` |  |
| `ready` | `bool` |  |
| `success` | `bool` |  |

#### Example: Create

```python
complete_chat_checkout = client.CompleteChatCheckout().create({
    "onboarding_data_id": "example_onboarding_data_id",  # str
})
```


### CreateBlackoutSora2Video

Create an instance: `create_blackout_sora2_video = client.CreateBlackoutSora2Video()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `main_prompt` | `str` |  |
| `media_asset_id` | `str` |  |
| `product_id` | `str` |  |
| `requires_polling` | `bool` |  |
| `video` | `dict` |  |

#### Example: Create

```python
create_blackout_sora2_video = client.CreateBlackoutSora2Video().create({
    "main_prompt": "example_main_prompt",  # str
    "media_asset_id": "example_media_asset_id",  # str
    "product_id": "example_product_id",  # str
})
```


### CreateCarousel

Create an instance: `create_carousel = client.CreateCarousel()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `copy_mode` | `Any` |  |
| `expected_owner_user_id` | `str` |  |
| `expected_product_id` | `str` |  |
| `expected_product_name` | `Any` |  |
| `image_model` | `str` |  |
| `mention_product` | `bool` |  |
| `message` | `str` |  |
| `num_slides` | `int` |  |
| `owner_user_id` | `str` |  |
| `product_id` | `str` | Product ID to use. |
| `product_name` | `Any` |  |
| `product_placement` | `str` |  |
| `request_id` | `str` |  |
| `script_style_custom` | `Any` |  |
| `script_style_id` | `str` |  |
| `selected_hook` | `Any` |  |
| `status` | `str` |  |
| `success` | `bool` |  |
| `template_id` | `str` |  |
| `video_id` | `str` |  |
| `visual_style_custom` | `Any` |  |
| `visual_style_id` | `str` |  |

#### Example: Create

```python
create_carousel = client.CreateCarousel().create({
    "template_id": "example_template_id",  # str
})
```


### CreateProduct

Create an instance: `create_product = client.CreateProduct()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `onboarding_data_id` | `str` | UUID of the OnboardingData record |
| `product_id` | `str` |  |
| `success` | `bool` |  |
| `videos_queued` | `int` |  |

#### Example: Create

```python
create_product = client.CreateProduct().create({
    "onboarding_data_id": "example_onboarding_data_id",  # str
})
```


### CreateResetProductV6

Create an instance: `create_reset_product_v6 = client.CreateResetProductV6()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agents_transferred` | `int` |  |
| `credits_deducted` | `int` |  |
| `onboarding_data_id` | `str` |  |
| `product_id` | `str` |  |
| `remaining_credits` | `int` |  |
| `success` | `bool` |  |
| `videos_queued` | `int` |  |

#### Example: Create

```python
create_reset_product_v6 = client.CreateResetProductV6().create({
    "onboarding_data_id": "example_onboarding_data_id",  # str
})
```


### CreateSora2Video

Create an instance: `create_sora2_video = client.CreateSora2Video()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `image_prompt` | `Any` |  |
| `main_prompt` | `str` |  |
| `model` | `str` |  |
| `requires_polling` | `bool` |  |
| `seconds` | `str` |  |
| `size` | `str` |  |
| `video` | `dict` |  |

#### Example: Create

```python
create_sora2_video = client.CreateSora2Video().create({
    "main_prompt": "example_main_prompt",  # str
})
```


### CreateVariation

Create an instance: `create_variation = client.CreateVariation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `hook_duration` | `int` |  |
| `media_asset_id` | `str` |  |
| `message` | `str` |  |
| `product_id` | `str` |  |
| `prompt` | `str` |  |
| `task_id` | `str` |  |
| `video_id` | `str` |  |

#### Example: Create

```python
create_variation = client.CreateVariation().create({
    "hook_duration": 1,  # int
    "media_asset_id": "example_media_asset_id",  # str
    "product_id": "example_product_id",  # str
    "prompt": "example_prompt",  # str
})
```


### Customer

Create an instance: `customer = client.Customer()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `Any` |  |
| `assigned_agents_count` | `int` |  |
| `email` | `str` |  |
| `id` | `str` |  |
| `is_migrated` | `bool` |  |

#### Example: List

```python
customers = client.Customer().list()
```


### CustomerHealth

Create an instance: `customer_health = client.CustomerHealth()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_agents` | `dict` |  |
| `available_dates` | `list` |  |
| `date` | `str` |  |
| `email` | `str` |  |
| `entries` | `list` |  |
| `id` | `str` |  |
| `performance_overview` | `dict` |  |
| `platform_coverage_summary` | `dict` |  |
| `user_id` | `str` |  |

#### Example: Load

```python
customer_health = client.CustomerHealth().load({"id": "customer_health_id"})
```


### CustomerHealthAllCustomersItem

Create an instance: `customer_health_all_customers_item = client.CustomerHealthAllCustomersItem()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `Any` |  |
| `assigned_agents_count` | `int` |  |
| `daily_stats` | `list` |  |
| `email` | `str` |  |
| `is_migrated` | `bool` |  |
| `total_views` | `int` |  |
| `user_id` | `str` |  |

#### Example: List

```python
customer_health_all_customers_items = client.CustomerHealthAllCustomersItem().list()
```


### CustomerHealthViewsSummary

Create an instance: `customer_health_views_summary = client.CustomerHealthViewsSummary()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `average_views_per_result` | `int` |  |
| `date` | `str` |  |
| `end_date` | `Any` |  |
| `paid_users_count` | `int` |  |
| `posted_results` | `int` |  |
| `range` | `str` |  |
| `start_date` | `Any` |  |
| `top_users` | `list` |  |
| `total_views` | `int` |  |
| `trend` | `list` |  |
| `trend_granularity` | `str` |  |
| `user_email` | `Any` |  |
| `user_id` | `str` |  |
| `users_with_views` | `int` |  |

#### Example: List

```python
customer_health_views_summarys = client.CustomerHealthViewsSummary().list()
```


### Daily

Create an instance: `daily = client.Daily()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Create

```python
daily = client.Daily().create({
    "id": "example_id",  # str
    "day": "example_day",  # str
})
```


### DailyStatus

Create an instance: `daily_status = client.DailyStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
daily_status = client.DailyStatus().load({"id": "daily_status_id", "day": "day"})
```


### DedicatedAgentsDashboard

Create an instance: `dedicated_agents_dashboard = client.DedicatedAgentsDashboard()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_connections` | `int` |  |
| `assigned_user_id` | `str` |  |
| `assigned_user_ids` | `list` |  |
| `bio` | `Any` |  |
| `id` | `str` |  |
| `instagram_url` | `Any` |  |
| `is_active` | `bool` |  |
| `last_admin_synced_at` | `Any` |  |
| `name` | `str` |  |
| `role` | `Any` |  |
| `tiktok_stats` | `Any` |  |
| `tiktok_url` | `Any` |  |
| `today_failed_entries` | `list` |  |
| `today_stats` | `dict` |  |
| `upload_post_platforms` | `Any` |  |
| `upload_post_profile` | `Any` |  |
| `yesterday_failed_entries` | `list` |  |
| `yesterday_stats` | `dict` |  |
| `youtube_url` | `Any` |  |

#### Example: List

```python
dedicated_agents_dashboards = client.DedicatedAgentsDashboard().list()
```


### EnterpriseAgent

Create an instance: `enterprise_agent = client.EnterpriseAgent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `int` |  |
| `product_id` | `str` |  |
| `source_product_id` | `str` |  |
| `target_product_id` | `str` |  |

#### Example: Load

```python
enterprise_agent = client.EnterpriseAgent().load()
```

#### Example: Create

```python
enterprise_agent = client.EnterpriseAgent().create({
    "product_id": "example_product_id",  # str
    "source_product_id": "example_source_product_id",  # str
    "target_product_id": "example_target_product_id",  # str
})
```


### EnterpriseProduct

Create an instance: `enterprise_product = client.EnterpriseProduct()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
enterprise_product = client.EnterpriseProduct().load({"product_id": "product_id"})
```


### ExactAvailability

Create an instance: `exact_availability = client.ExactAvailability()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
exact_availability = client.ExactAvailability().load()
```


### ExactFormula

Create an instance: `exact_formula = client.ExactFormula()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
exact_formula = client.ExactFormula().load()
```


### ExtractV2

Create an instance: `extract_v2 = client.ExtractV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `instagram_username` | `Any` |  |
| `message` | `str` |  |
| `status` | `str` |  |
| `url` | `str` |  |

#### Example: Create

```python
extract_v2 = client.ExtractV2().create({
    "url": "example_url",  # str
})
```


### FailedPost

Create an instance: `failed_post = client.FailedPost()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `str` |  |
| `agent_name` | `Any` |  |
| `agent_platforms` | `Any` |  |
| `error_message` | `Any` |  |
| `id` | `str` |  |
| `product_id` | `str` |  |
| `results` | `Any` |  |
| `scheduled_datetime` | `str` |  |
| `source_type` | `str` |  |
| `status` | `str` |  |
| `user_email` | `str` |  |
| `user_id` | `str` |  |
| `user_name` | `Any` |  |
| `video_id` | `str` |  |
| `video_url` | `Any` |  |

#### Example: List

```python
failed_posts = client.FailedPost().list()
```


### File

Create an instance: `file = client.File()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `file` | `str` |  |

#### Example: Create

```python
file = client.File().create({
    "file": "example_file",  # str
})
```


### GenerateBlackoutSora2Prompt

Create an instance: `generate_blackout_sora2_prompt = client.GenerateBlackoutSora2Prompt()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `media_asset_id` | `str` |  |
| `product_id` | `str` |  |
| `prompt` | `str` |  |

#### Example: Create

```python
generate_blackout_sora2_prompt = client.GenerateBlackoutSora2Prompt().create({
    "media_asset_id": "example_media_asset_id",  # str
    "product_id": "example_product_id",  # str
})
```


### GeneratePomelliDemo

Create an instance: `generate_pomelli_demo = client.GeneratePomelliDemo()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_demo_count` | `int` |  |
| `max_demos` | `int` |  |
| `message` | `str` |  |
| `product_id` | `str` | UUID of the Product |
| `success` | `bool` |  |

#### Example: Create

```python
generate_pomelli_demo = client.GeneratePomelliDemo().create({
    "product_id": "example_product_id",  # str
})
```


### GeneratePrompt

Create an instance: `generate_prompt = client.GeneratePrompt()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `hook_duration` | `int` |  |
| `media_asset_id` | `str` |  |
| `media_asset_url` | `str` |  |
| `prompt` | `str` |  |

#### Example: Create

```python
generate_prompt = client.GeneratePrompt().create({
    "media_asset_id": "example_media_asset_id",  # str
})
```


### GenerateSora2Prompt

Create an instance: `generate_sora2_prompt = client.GenerateSora2Prompt()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `prompt` | `str` |  |

#### Example: Load

```python
generate_sora2_prompt = client.GenerateSora2Prompt().load()
```


### Healthrx

Create an instance: `healthrx = client.Healthrx()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `str` |  |
| `action` | `str` |  |
| `agent_id` | `str` |  |
| `attempt` | `int` |  |
| `avatar_present` | `bool` |  |
| `benchmark_set` | `str` |  |
| `commercial` | `bool` |  |
| `commercial_license_evidence` | `str` |  |
| `content_id` | `str` |  |
| `dimensions` | `dict` |  |
| `duration_seconds` | `int` |  |
| `evidence` | `str` |  |
| `evidence_urls` | `list` |  |
| `external_key` | `str` |  |
| `format` | `str` |  |
| `includes_all_attempt_costs` | `bool` |  |
| `input_specification` | `dict` |  |
| `kind` | `str` |  |
| `level` | `int` |  |
| `measured_at` | `str` |  |
| `model_version` | `str` |  |
| `paid_campaign_id` | `str` |  |
| `parent_content_id` | `str` |  |
| `paused` | `bool` |  |
| `pillar` | `str` |  |
| `profile` | `dict` |  |
| `promotion_evidence` | `str` |  |
| `provider` | `str` |  |
| `provider_invoice_evidence` | `str` |  |
| `reason` | `str` |  |
| `reference_version` | `str` |  |
| `request_key` | `str` |  |
| `scope` | `str` |  |
| `test_variable` | `str` |  |
| `topic` | `str` |  |
| `total_cost_usd` | `float` |  |

#### Example: Load

```python
healthrx = client.Healthrx().load({"product_id": "product_id"})
```

#### Example: Create

```python
healthrx = client.Healthrx().create({
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


### InitResetProductV6

Create an instance: `init_reset_product_v6 = client.InitResetProductV6()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_schedule_disabled` | `bool` |  |
| `old_product_id` | `str` |  |
| `product_id` | `str` |  |
| `queue_entries_cleared` | `int` |  |
| `success` | `bool` |  |

#### Example: Create

```python
init_reset_product_v6 = client.InitResetProductV6().create({
})
```


### Iri

Create an instance: `iri = client.Iri()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `correlationId` | `Any` |  |
| `idempotencyKey` | `str` |  |
| `productId` | `Any` |  |

#### Example: Create

```python
iri = client.Iri().create({
    "connector_id": "example_connector_id",  # str
    "idempotencyKey": "example_idempotencyKey",  # str
})
```


### IrisCapability

Create an instance: `iris_capability = client.IrisCapability()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `capability` | `str` |  |
| `correlationId` | `str` |  |
| `errorCode` | `Any` |  |
| `externalProductId` | `Any` |  |
| `externalUserId` | `str` |  |
| `id` | `str` |  |
| `idempotencyKey` | `str` |  |
| `input` | `dict` |  |
| `membershipId` | `Any` |  |
| `message` | `Any` |  |
| `ok` | `bool` |  |
| `platformAccountId` | `Any` |  |
| `platformLinkId` | `Any` |  |
| `productScope` | `str` |  |
| `requestedBy` | `dict` |  |
| `result` | `dict` |  |
| `retryable` | `bool` |  |

#### Example: Create

```python
iris_capability = client.IrisCapability().create({
    "id": "example_id",  # str
    "capability": "example_capability",  # str
    "correlationId": "example_correlationId",  # str
    "externalUserId": "example_externalUserId",  # str
    "idempotencyKey": "example_idempotencyKey",  # str
    "productScope": "example_productScope",  # str
})
```


### IrisChat

Create an instance: `iris_chat = client.IrisChat()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `artifacts` | `list` |  |
| `correlationId` | `str` |  |
| `idempotencyKey` | `str` |  |
| `message` | `str` |  |
| `mode` | `str` |  |
| `ok` | `bool` |  |
| `pageContext` | `dict` |  |
| `productId` | `Any` |  |
| `runtimeStatus` | `str` |  |
| `sessionId` | `Any` |  |

#### Example: Create

```python
iris_chat = client.IrisChat().create({
    "correlationId": "example_correlationId",  # str
    "idempotencyKey": "example_idempotencyKey",  # str
    "message": "example_message",  # str
})
```


### IrisConnector

Create an instance: `iris_connector = client.IrisConnector()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connectors` | `list` |  |

#### Example: List

```python
iris_connectors = client.IrisConnector().list()
```


### IrisStatus

Create an instance: `iris_status = client.IrisStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connectorsPreview` | `list` |  |
| `product` | `Any` |  |
| `status` | `dict` |  |
| `tasksPreview` | `list` |  |

#### Example: List

```python
iris_statuss = client.IrisStatus().list()
```


### IrisTask

Create an instance: `iris_task = client.IrisTask()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approvalRequired` | `bool` |  |
| `cadence` | `str` |  |
| `capability` | `Any` |  |
| `completed` | `list` |  |
| `description` | `str` |  |
| `discover` | `list` |  |
| `productId` | `Any` |  |
| `recurring` | `list` |  |
| `requiredConnectors` | `list` |  |
| `title` | `str` |  |

#### Example: List

```python
iris_tasks = client.IrisTask().list()
```

#### Example: Create

```python
iris_task = client.IrisTask().create({
    "title": "example_title",  # str
})
```


### IrisUsage

Create an instance: `iris_usage = client.IrisUsage()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `eventCount` | `int` |  |
| `events` | `list` |  |
| `membershipId` | `Any` |  |
| `productScope` | `str` |  |

#### Example: List

```python
iris_usages = client.IrisUsage().list()
```


### Landing

Create an instance: `landing = client.Landing()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `file` | `str` |  |

#### Example: Create

```python
landing = client.Landing().create({
    "index": 1,  # int
    "file": "example_file",  # str
})
```


### LandingStat

Create an instance: `landing_stat = client.LandingStat()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `landing` | `dict` |  |
| `microhub` | `dict` |  |

#### Example: Load

```python
landing_stat = client.LandingStat().load({"slug": "slug"})
```


### LandingStatus

Create an instance: `landing_status = client.LandingStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errorMessage` | `Any` |  |
| `landingStatus` | `str` |  |
| `microhubStatus` | `str` |  |

#### Example: Load

```python
landing_status = client.LandingStatus().load()
```


### LinkInBio

Create an instance: `link_in_bio = client.LinkInBio()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `linkInBioType` | `str` |  |
| `redirectUrl` | `str` |  |
| `slug` | `str` |  |

#### Example: Load

```python
link_in_bio = client.LinkInBio().load({"slug": "slug"})
```


### LinkInDm

Create an instance: `link_in_dm = client.LinkInDm()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `linkInDmsType` | `str` |  |
| `redirectUrl` | `str` |  |
| `slug` | `str` |  |

#### Example: Load

```python
link_in_dm = client.LinkInDm().load({"slug": "slug"})
```


### LinkInPost

Create an instance: `link_in_post = client.LinkInPost()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `linkInPostsType` | `str` |  |
| `redirectUrl` | `str` |  |
| `showLinkInFirstComment` | `bool` |  |
| `slug` | `str` |  |

#### Example: Load

```python
link_in_post = client.LinkInPost().load({"slug": "slug"})
```


### LinkUser

Create an instance: `link_user = client.LinkUser()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `already_linked` | `bool` |  |
| `onboarding_data_id` | `str` | UUID of the OnboardingData record |
| `success` | `bool` |  |

#### Example: Create

```python
link_user = client.LinkUser().create({
    "onboarding_data_id": "example_onboarding_data_id",  # str
})
```


### MediaAsset

Create an instance: `media_asset = client.MediaAsset()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `str` |  |
| `createdAt` | `str` |  |
| `description` | `str` |  |
| `file` | `str` |  |
| `id` | `str` |  |
| `media_assets` | `list` |  |
| `onboardingDataId` | `Any` |  |
| `onboarding_data_id` | `str` |  |
| `productId` | `Any` |  |
| `product_id` | `str` |  |
| `source` | `str` |  |
| `type` | `str` |  |
| `updatedAt` | `str` |  |
| `url` | `str` |  |
| `usedAt` | `Any` |  |
| `veo3VideoId` | `Any` |  |

#### Example: Load

```python
media_asset = client.MediaAsset().load({"id": "media_asset_id"})
```

#### Example: Create

```python
media_asset = client.MediaAsset().create({
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


### Men

Create an instance: `men = client.Men()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Example: List

```python
mens = client.Men().list()
```


### Microdrama

Create an instance: `microdrama = client.Microdrama()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `evidence` | `dict` |  |
| `expected_revision` | `int` |  |
| `idempotency_key` | `str` |  |
| `issues` | `list` |  |
| `reason` | `str` |  |
| `role` | `str` |  |
| `scores` | `dict` |  |
| `selected_premise_id` | `str` |  |
| `stage` | `str` |  |
| `status` | `str` |  |
| `subject_hash` | `str` |  |
| `title` | `str` |  |
| `verdict` | `str` |  |

#### Example: Load

```python
microdrama = client.Microdrama().load({"episode_id": "episode_id"})
```

#### Example: Create

```python
microdrama = client.Microdrama().create({
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


### MicrohubPublic

Create an instance: `microhub_public = client.MicrohubPublic()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bio` | `Any` |  |
| `ctaButtonText` | `Any` |  |
| `ctaDescription` | `Any` |  |
| `ctaLink` | `Any` |  |
| `ctaTitle` | `Any` |  |
| `headerImageUrl` | `Any` |  |
| `links` | `list` |  |
| `name` | `str` |  |
| `profileImageUrl` | `Any` |  |
| `slug` | `str` |  |
| `socialLinks` | `dict` |  |
| `testimonials` | `list` |  |

#### Example: Load

```python
microhub_public = client.MicrohubPublic().load({"slug": "slug"})
```


### OnboardingStatus

Create an instance: `onboarding_status = client.OnboardingStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comments` | `int` |  |
| `cover_image_url` | `Any` |  |
| `id` | `str` |  |
| `likes` | `int` |  |
| `platform` | `str` |  |
| `video_url` | `Any` |  |
| `views` | `int` |  |

#### Example: List

```python
onboarding_statuss = client.OnboardingStatus().list({"oid": "example"})
```


### OnboardingV6

Create an instance: `onboarding_v6 = client.OnboardingV6()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### PaidUser

Create an instance: `paid_user = client.PaidUser()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agents_count` | `int` |  |
| `assigned_agents_count` | `int` |  |
| `auto_schedule_enabled` | `Any` |  |
| `credits` | `int` |  |
| `effective_agents_count` | `int` |  |
| `email` | `str` |  |
| `id` | `str` |  |
| `is_internal_user` | `bool` |  |
| `is_migrated_user` | `bool` |  |
| `membership` | `Any` |  |
| `scheduled_queue_count` | `int` |  |
| `subscription_details` | `Any` |  |
| `subscription_status` | `Any` |  |

#### Example: List

```python
paid_users = client.PaidUser().list()
```


### Pexel

Create an instance: `pexel = client.Pexel()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Example: List

```python
pexels = client.Pexel().list()
```


### PhoneAdminAvailableAgentSource

Create an instance: `phone_admin_available_agent_source = client.PhoneAdminAvailableAgentSource()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available_count` | `int` |  |
| `pc_name` | `str` |  |

#### Example: List

```python
phone_admin_available_agent_sources = client.PhoneAdminAvailableAgentSource().list()
```


### Product

Create an instance: `product = client.Product()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_count` | `int` |  |
| `agents` | `list` |  |
| `createdAt` | `Any` |  |
| `demoVideos` | `Any` |  |
| `description` | `str` |  |
| `favicon_url` | `Any` |  |
| `howItWorks` | `Any` |  |
| `how_it_works` | `Any` |  |
| `id` | `str` |  |
| `images` | `Any` |  |
| `initial_agents` | `int` |  |
| `instagramHandle` | `Any` |  |
| `instagram_handle` | `Any` |  |
| `isActive` | `Any` |  |
| `isApp` | `Any` |  |
| `is_active` | `bool` |  |
| `is_app` | `bool` |  |
| `language` | `Any` |  |
| `mediaAssets` | `Any` |  |
| `media_asset_ids` | `Any` |  |
| `media_assets` | `Any` |  |
| `name` | `str` |  |
| `otherInstructions` | `Any` |  |
| `other_instructions` | `Any` |  |
| `outroVideo` | `Any` |  |
| `pexelsVideos` | `Any` |  |
| `pricing` | `Any` |  |
| `pricingAndOffers` | `Any` |  |
| `pricing_and_offers` | `Any` |  |
| `product_demo_ids` | `list` |  |
| `product_details` | `dict` | Product details for enterprise product creation |
| `product_id` | `str` |  |
| `product_name` | `str` |  |
| `product_url` | `str` |  |
| `pronunciation` | `Any` |  |
| `regenerate_sora2` | `bool` |  |
| `repostSource` | `Any` |  |
| `repost_source` | `Any` |  |
| `screenshot_url` | `Any` |  |
| `social_post_ids` | `list` |  |
| `targetAudience` | `Any` |  |
| `target_audience` | `Any` |  |
| `templateProductId` | `Any` |  |
| `tiktokHandle` | `Any` |  |
| `tiktok_handle` | `Any` |  |
| `total_count` | `int` |  |
| `updatedAt` | `Any` |  |
| `url` | `str` |  |
| `userId` | `str` |  |

#### Example: Load

```python
product = client.Product().load({"id": "product_id"})
```

#### Example: List

```python
products = client.Product().list()
```

#### Example: Create

```python
product = client.Product().create({
    "product_details": {},  # dict
    "product_url": "example_product_url",  # str
})
```


### ProductDashboard

Create an instance: `product_dashboard = client.ProductDashboard()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agents` | `list` |  |
| `date` | `str` |  |
| `pagination` | `dict` |  |
| `phone_admin_error` | `Any` |  |
| `products` | `list` |  |
| `selected_product` | `Any` |  |
| `summary` | `dict` |  |

#### Example: List

```python
product_dashboards = client.ProductDashboard().list()
```


### ProductDashboardView

Create an instance: `product_dashboard_view = client.ProductDashboardView()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `str` |  |
| `views` | `int` |  |

#### Example: List

```python
product_dashboard_views = client.ProductDashboardView().list({"product_id": "example"})
```


### ProductDemo

Create an instance: `product_demo = client.ProductDemo()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `id` | `str` |  |
| `source` | `str` |  |
| `type` | `str` |  |
| `url` | `str` |  |

#### Example: List

```python
product_demos = client.ProductDemo().list()
```


### ProductLanding

Create an instance: `product_landing = client.ProductLanding()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bio` | `Any` |  |
| `commentingOnMyPosts` | `bool` |  |
| `commentingOnOthersPosts` | `bool` |  |
| `ctaButtonText` | `Any` |  |
| `ctaDescription` | `Any` |  |
| `ctaLink` | `Any` |  |
| `ctaTitle` | `Any` |  |
| `dmCommenters` | `bool` |  |
| `dmInitialMessagePrompt` | `Any` |  |
| `dmOngoingResponsePrompt` | `Any` |  |
| `firstCommentTextBeforeLink` | `Any` |  |
| `headerImageUrl` | `Any` |  |
| `id` | `str` |  |
| `landingHtmlUrl` | `Any` |  |
| `landingLastGeneratedAt` | `Any` |  |
| `landingReferenceScreenshotUrl` | `Any` |  |
| `landingScreenshotUrl` | `Any` |  |
| `landingStatus` | `str` |  |
| `landingUrl` | `str` |  |
| `linkInBioType` | `str` |  |
| `linkInDmsType` | `str` |  |
| `linkInPostsType` | `str` |  |
| `links` | `Any` |  |
| `microhubBio` | `Any` |  |
| `microhubCtaButtonText` | `Any` |  |
| `microhubCtaDescription` | `Any` |  |
| `microhubCtaLink` | `Any` |  |
| `microhubCtaTitle` | `Any` |  |
| `microhubHeaderImageUrl` | `Any` |  |
| `microhubLinks` | `list` |  |
| `microhubName` | `Any` |  |
| `microhubProfileImageUrl` | `Any` |  |
| `microhubScreenshotUrl` | `Any` |  |
| `microhubSocialLinks` | `dict` |  |
| `microhubStatus` | `str` |  |
| `microhubTestimonials` | `list` |  |
| `microhubUrl` | `str` |  |
| `myPostsStylePrompt` | `Any` |  |
| `name` | `str` |  |
| `othersStylePrompt` | `Any` |  |
| `othersTargetMarketPrompt` | `Any` |  |
| `productLinkSelection` | `str` |  |
| `productUrl` | `Any` |  |
| `profileImageUrl` | `Any` |  |
| `shortLink` | `Any` |  |
| `shortLinkKeyword` | `Any` |  |
| `showLinkInFirstComment` | `bool` |  |
| `slug` | `str` |  |
| `socialLinks` | `Any` |  |
| `testimonials` | `Any` |  |

#### Example: List

```python
product_landings = client.ProductLanding().list()
```


### PublicResumeStatus

Create an instance: `public_resume_status = client.PublicResumeStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `can_resume_prelogin` | `bool` |  |
| `content_collection_ready` | `bool` |  |
| `current_step` | `Any` |  |
| `exists` | `bool` |  |
| `flow_variant` | `Any` |  |
| `repost_content_count` | `int` |  |
| `repost_source` | `Any` |  |
| `requires_repost_content` | `bool` |  |
| `skip_demo` | `bool` |  |

#### Example: Load

```python
public_resume_status = client.PublicResumeStatus().load({"oid": "oid"})
```


### ReRollVideo

Create an instance: `re_roll_video = client.ReRollVideo()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `queue_id` | `str` |  |
| `requires_polling` | `bool` |  |
| `skip_credit_check` | `bool` |  |
| `video` | `dict` |  |

#### Example: Create

```python
re_roll_video = client.ReRollVideo().create({
    "queue_id": "example_queue_id",  # str
})
```


### ReadRootGet

Create an instance: `read_root_get = client.ReadRootGet()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
read_root_get = client.ReadRootGet().load()
```


### RecordDemoBooked

Create an instance: `record_demo_booked = client.RecordDemoBooked()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `calendlyEventUri` | `Any` |  |
| `calendlyInviteeUri` | `Any` |  |
| `message` | `dict` |  |
| `session` | `dict` |  |

#### Example: Create

```python
record_demo_booked = client.RecordDemoBooked().create({
    "session_id": "example_session_id",  # str
})
```


### RefreshStat

Create an instance: `refresh_stat = client.RefreshStat()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date_from` | `Any` | Start date to refresh stats for (defaults to yesterday) |
| `date_to` | `Any` | End date to refresh stats for (defaults to date_from) |
| `entries_found` | `int` |  |
| `message` | `str` |  |
| `provider` | `str` | Scraping provider to use |
| `status` | `str` |  |
| `summary` | `Any` |  |

#### Example: Create

```python
refresh_stat = client.RefreshStat().create({
})
```


### RemixerClipper

Create an instance: `remixer_clipper = client.RemixerClipper()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
remixer_clipper = client.RemixerClipper().load()
```

#### Example: Create

```python
remixer_clipper = client.RemixerClipper().create({
    "identifier": "example_identifier",  # str
})
```


### ResetProduct

Create an instance: `reset_product = client.ResetProduct()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
reset_product = client.ResetProduct().load()
```

#### Example: Create

```python
reset_product = client.ResetProduct().create({
})
```


### RetryWebsiteScrape

Create an instance: `retry_website_scrape = client.RetryWebsiteScrape()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `flow_variant` | `str` |  |
| `onboarding_data_id` | `str` | UUID of existing OnboardingData |
| `skip_demo` | `bool` |  |
| `status` | `str` |  |
| `success` | `bool` |  |
| `url` | `str` | New website URL to scrape |

#### Example: Create

```python
retry_website_scrape = client.RetryWebsiteScrape().create({
    "onboarding_data_id": "example_onboarding_data_id",  # str
    "url": "example_url",  # str
})
```


### SaveSurvey

Create an instance: `save_survey = client.SaveSurvey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email_sent` | `bool` |  |
| `onboarding_data_id` | `str` | UUID of the OnboardingData record |
| `success` | `bool` |  |
| `survey` | `dict` | Survey response data from frontend. |

#### Example: Create

```python
save_survey = client.SaveSurvey().create({
    "onboarding_data_id": "example_onboarding_data_id",  # str
    "survey": {},  # dict
})
```


### ScanSocial

Create an instance: `scan_social = client.ScanSocial()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `instagram_handle` | `Any` |  |
| `onboarding_data_id` | `str` |  |
| `product_id` | `str` |  |
| `status` | `str` |  |
| `success` | `bool` |  |
| `task_id` | `str` |  |
| `tiktok_handle` | `Any` |  |

#### Example: Create

```python
scan_social = client.ScanSocial().create({
    "onboarding_data_id": "example_onboarding_data_id",  # str
    "tiktok_handle": "example_tiktok_handle",  # Any
})
```


### ScanSocialsPublic

Create an instance: `scan_socials_public = client.ScanSocialsPublic()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `instagram_handle` | `Any` | Instagram username/handle to scrape |
| `message` | `Any` |  |
| `onboarding_data_id` | `str` | UUID of the OnboardingData record |
| `status` | `str` |  |
| `success` | `bool` |  |
| `tiktok_handle` | `Any` | TikTok username/handle to scrape |

#### Example: Create

```python
scan_socials_public = client.ScanSocialsPublic().create({
    "onboarding_data_id": "example_onboarding_data_id",  # str
})
```


### ScanSocialsStatus

Create an instance: `scan_socials_status = client.ScanSocialsStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ads_count` | `int` |  |
| `onboarding_data_id` | `str` |  |
| `product_id` | `str` |  |
| `status` | `str` |  |
| `task_id` | `str` |  |

#### Example: Load

```python
scan_socials_status = client.ScanSocialsStatus().load()
```


### ScheduleV2

Create an instance: `schedule_v2 = client.ScheduleV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent` | `Any` |  |
| `comment` | `Any` |  |
| `created_at` | `str` |  |
| `id` | `str` |  |
| `instagram_posted_by` | `Any` |  |
| `instagram_posted_url` | `Any` |  |
| `instagram_scraped_social_post_id` | `str` |  |
| `is_instagram_posted` | `bool` |  |
| `is_tiktok_posted` | `bool` |  |
| `is_youtube_posted` | `bool` |  |
| `reorders` | `list` |  |
| `results` | `Any` |  |
| `scheduled_datetime` | `str` |  |
| `source_type` | `str` |  |
| `status` | `str` |  |
| `tiktok_posted_by` | `Any` |  |
| `tiktok_posted_url` | `Any` |  |
| `tiktok_scraped_social_post_id` | `str` |  |
| `video` | `Any` |  |
| `video_id` | `str` |  |
| `youtube_posted_by` | `Any` |  |
| `youtube_posted_url` | `Any` |  |
| `youtube_scraped_social_post_id` | `str` |  |

#### Example: Load

```python
schedule_v2 = client.ScheduleV2().load()
```

#### Example: List

```python
schedule_v2s = client.ScheduleV2().list()
```

#### Example: Create

```python
schedule_v2 = client.ScheduleV2().create({
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "reorders": [],  # list
    "scheduled_datetime": "example_scheduled_datetime",  # str
    "source_type": "example_source_type",  # str
    "status": "example_status",  # str
    "video_id": "example_video_id",  # str
})
```


### Scrape

Create an instance: `scrape = client.Scrape()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `old_product_id` | `str` |  |
| `onboarding_data_id` | `str` |  |
| `status` | `str` |  |
| `success` | `bool` |  |
| `url` | `str` |  |

#### Example: Create

```python
scrape = client.Scrape().create({
    "old_product_id": "example_old_product_id",  # str
    "url": "example_url",  # str
})
```


### ScrapeWebsitePublic

Create an instance: `scrape_website_public = client.ScrapeWebsitePublic()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `flow_variant` | `str` |  |
| `onboarding_data_id` | `str` | UUID of created OnboardingData |
| `skip_demo` | `bool` | True for self-serve users (skip demo booking) |
| `status` | `str` |  |
| `success` | `bool` |  |
| `url` | `str` | Website URL to scrape |

#### Example: Create

```python
scrape_website_public = client.ScrapeWebsitePublic().create({
    "url": "example_url",  # str
})
```


### ScrapedData

Create an instance: `scraped_data = client.ScrapedData()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` |  |
| `homepageVideoUrl` | `Any` |  |
| `howItWorks` | `str` |  |
| `imageUrls` | `list` |  |
| `instagram_username` | `Any` |  |
| `mediaAssets` | `list` |  |
| `name` | `str` |  |
| `pricingAndOffers` | `str` |  |
| `targetAudience` | `str` |  |
| `url` | `str` |  |

#### Example: Create

```python
scraped_data = client.ScrapedData().create({
    "url": "example_url",  # str
})
```


### ScrapingStatus

Create an instance: `scraping_status = client.ScrapingStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
scraping_status = client.ScrapingStatus().load()
```


### SelfServeActivate

Create an instance: `self_serve_activate = client.SelfServeActivate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `onboarding_data_id` | `str` | UUID of the OnboardingData record |
| `redirect_to_stripe` | `bool` |  |
| `stripe_checkout_url` | `Any` |  |
| `success` | `bool` |  |

#### Example: Create

```python
self_serve_activate = client.SelfServeActivate().create({
    "onboarding_data_id": "example_onboarding_data_id",  # str
})
```


### Seo

Create an instance: `seo = client.Seo()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
seo = client.Seo().load()
```


### SeoAiMention

Create an instance: `seo_ai_mention = client.SeoAiMention()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bucket` | `str` |  |
| `domain_type` | `str` |  |
| `dominant_domain` | `str` |  |
| `engine` | `str` |  |
| `evidence` | `dict` |  |
| `geo` | `str` |  |
| `language` | `str` |  |
| `primary_url` | `str` |  |
| `prompt_text` | `str` |  |
| `run_week` | `str` |  |
| `secondary_urls` | `list` |  |

#### Example: List

```python
seo_ai_mentions = client.SeoAiMention().list()
```


### SeoBacklink

Create an instance: `seo_backlink = client.SeoBacklink()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anchor_text` | `str` |  |
| `first_seen` | `str` |  |
| `referring_domain` | `str` |  |
| `status` | `str` |  |
| `target_page` | `str` |  |

#### Example: List

```python
seo_backlinks = client.SeoBacklink().list()
```


### SeoKeyword

Create an instance: `seo_keyword = client.SeoKeyword()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blog_page` | `str` |  |
| `current_position` | `float` |  |
| `keyword` | `str` |  |
| `keyword_group` | `str` |  |
| `position_change` | `float` |  |

#### Example: List

```python
seo_keywords = client.SeoKeyword().list()
```


### SeoOverview

Create an instance: `seo_overview = client.SeoOverview()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `clicks` | `float` |  |
| `ctr` | `float` |  |
| `date` | `str` |  |
| `impressions` | `float` |  |
| `position` | `float` |  |

#### Example: List

```python
seo_overviews = client.SeoOverview().list()
```


### SeoTraffic

Create an instance: `seo_traffic = client.SeoTraffic()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `end_date` | `str` |  |
| `series` | `list` |  |
| `site_url` | `str` |  |
| `start_date` | `str` |  |
| `top_countries` | `list` |  |
| `top_pages` | `list` |  |
| `top_queries` | `list` |  |
| `totals` | `dict` |  |

#### Example: List

```python
seo_traffics = client.SeoTraffic().list()
```


### ShareAccessLink

Create an instance: `share_access_link = client.ShareAccessLink()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `share_token` | `str` |  |
| `share_url` | `str` |  |

#### Example: Create

```python
share_access_link = client.ShareAccessLink().create({
    "share_token": "example_share_token",  # str
    "share_url": "example_share_url",  # str
})
```


### Site

Create an instance: `site = client.Site()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
site = client.Site().load()
```


### Slide

Create an instance: `slide = client.Slide()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `caption` | `Any` |  |
| `id` | `str` |  |
| `prompt` | `Any` |  |

#### Example: Create

```python
slide = client.Slide().create({
    "carousel_id": "example_carousel_id",  # str
    "slide_index": 1,  # int
})
```


### SlugValidation

Create an instance: `slug_validation = client.SlugValidation()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `reason` | `Any` |  |
| `valid` | `bool` |  |

#### Example: Load

```python
slug_validation = client.SlugValidation().load({"slug": "slug"})
```


### Social

Create an instance: `social = client.Social()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | `str` |  |
| `code_verifier` | `str` |  |
| `createdAt` | `str` |  |
| `id` | `str` |  |
| `platform` | `str` |  |
| `platformUserId` | `str` |  |
| `updatedAt` | `Any` |  |
| `userId` | `str` |  |
| `username` | `str` |  |

#### Example: Load

```python
social = client.Social().load()
```

#### Example: List

```python
socials = client.Social().list()
```

#### Example: Create

```python
social = client.Social().create({
    "code": "example_code",  # str
    "code_verifier": "example_code_verifier",  # str
})
```


### SocialScanPreview

Create an instance: `social_scan_preview = client.SocialScanPreview()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `instagram_handle` | `Any` | Instagram username/handle to scrape |
| `posts` | `list` |  |
| `success` | `bool` |  |
| `tiktok_handle` | `Any` | TikTok username/handle to scrape |

#### Example: Create

```python
social_scan_preview = client.SocialScanPreview().create({
})
```


### SocialScanProcess

Create an instance: `social_scan_process = client.SocialScanProcess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `posts` | `list` |  |
| `product_id` | `str` |  |
| `success` | `bool` |  |
| `task_id` | `str` |  |

#### Example: Create

```python
social_scan_process = client.SocialScanProcess().create({
    "posts": [],  # list
    "product_id": "example_product_id",  # str
})
```


### SocialScanSave

Create an instance: `social_scan_save = client.SocialScanSave()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `media_asset_ids` | `list` |  |
| `posts` | `list` |  |
| `product_id` | `str` |  |
| `success` | `bool` |  |

#### Example: Create

```python
social_scan_save = client.SocialScanSave().create({
    "posts": [],  # list
    "product_id": "example_product_id",  # str
})
```


### Sora2Avatar

Create an instance: `sora2_avatar = client.Sora2Avatar()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_frame_url` | `Any` |  |
| `created_at` | `str` |  |
| `current_step` | `int` |  |
| `headshot_url` | `Any` |  |
| `id` | `str` |  |
| `logs` | `dict` |  |
| `prompt_key` | `str` |  |
| `run_output_dir` | `Any` |  |
| `selected_age_bucket` | `str` |  |
| `selected_gender` | `str` |  |
| `selected_prompt` | `Any` |  |
| `selected_race` | `str` |  |
| `sora2_cameo_handle` | `Any` |  |
| `sora2_cameo_id` | `str` |  |
| `sora2_cameo_link` | `Any` |  |
| `sora2_display_name` | `Any` |  |
| `sora2_task_id` | `str` |  |
| `sora2_video_url` | `str` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
sora2_avatar = client.Sora2Avatar().load({"id": "sora2_avatar_id"})
```

#### Example: List

```python
sora2_avatars = client.Sora2Avatar().list()
```

#### Example: Create

```python
sora2_avatar = client.Sora2Avatar().create({
    "prompt_key": "example_prompt_key",  # str
    "selected_age_bucket": "example_selected_age_bucket",  # str
    "selected_gender": "example_selected_gender",  # str
    "selected_race": "example_selected_race",  # str
    "sora2_video_url": "example_sora2_video_url",  # str
})
```


### Sora2AvatarAssetUpload

Create an instance: `sora2_avatar_asset_upload = client.Sora2AvatarAssetUpload()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_id` | `str` |  |
| `file` | `str` |  |
| `run_output_dir` | `Any` |  |
| `s3_key` | `str` |  |
| `upload_type` | `str` |  |
| `url` | `str` |  |

#### Example: Create

```python
sora2_avatar_asset_upload = client.Sora2AvatarAssetUpload().create({
    "file": "example_file",  # str
    "s3_key": "example_s3_key",  # str
    "upload_type": "example_upload_type",  # str
    "url": "example_url",  # str
})
```


### Sora2AvatarStat

Create an instance: `sora2_avatar_stat = client.Sora2AvatarStat()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `by_age_bucket` | `dict` |  |
| `by_gender` | `dict` |  |
| `by_prompt_key` | `dict` |  |
| `by_race` | `dict` |  |
| `completed_avatars` | `int` |  |
| `completion_rate` | `float` |  |
| `total_avatars` | `int` |  |

#### Example: Load

```python
sora2_avatar_stat = client.Sora2AvatarStat().load()
```


### Stat

Create an instance: `stat = client.Stat()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Example: List

```python
stats = client.Stat().list()
```


### StatsRefreshBackfill

Create an instance: `stats_refresh_backfill = client.StatsRefreshBackfill()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `message` | `str` |  |
| `status` | `str` |  |
| `task_id` | `str` |  |

#### Example: Create

```python
stats_refresh_backfill = client.StatsRefreshBackfill().create({
})
```


### StatsRefreshIssue

Create an instance: `stats_refresh_issue = client.StatsRefreshIssue()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aged_over_24h` | `bool` |  |
| `agent_id` | `str` |  |
| `agent_name_snapshot` | `Any` |  |
| `first_detected_at` | `str` |  |
| `id` | `str` |  |
| `last_detected_at` | `str` |  |
| `last_refresh_completed_at` | `Any` |  |
| `last_seen_run_id` | `str` |  |
| `latest_error_message` | `Any` |  |
| `next_retry_at` | `Any` |  |
| `platform` | `str` |  |
| `post_method` | `Any` |  |
| `post_url` | `Any` |  |
| `posted_date_et` | `str` |  |
| `product_id` | `str` |  |
| `product_name_snapshot` | `Any` |  |
| `reason_code` | `str` |  |
| `resolved_at` | `Any` |  |
| `retry_count` | `int` |  |
| `schedule_queue_id` | `str` |  |
| `scheduled_datetime_utc` | `str` |  |
| `stale_after_sla` | `bool` |  |
| `status` | `str` |  |
| `user_email_snapshot` | `str` |  |
| `user_id` | `str` |  |

#### Example: List

```python
stats_refresh_issues = client.StatsRefreshIssue().list()
```


### StatsRefreshOverview

Create an instance: `stats_refresh_overview = client.StatsRefreshOverview()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_run` | `Any` |  |
| `aged_over_24h` | `int` |  |
| `backlog_preview` | `list` |  |
| `coverage_percent` | `float` |  |
| `customer_counts` | `dict` |  |
| `date` | `str` |  |
| `generated_at` | `str` |  |
| `method_counts` | `dict` |  |
| `platform_counts` | `dict` |  |
| `platform_units_resolved` | `int` |  |
| `platform_units_total` | `int` |  |
| `platform_units_unresolved` | `int` |  |
| `posted_entries` | `int` |  |
| `reason_counts` | `dict` |  |
| `sla_deadline_et` | `str` |  |
| `stale_after_sla` | `int` |  |
| `top_affected_customers` | `list` |  |

#### Example: List

```python
stats_refresh_overviews = client.StatsRefreshOverview().list()
```


### StatsRefreshRunSummary

Create an instance: `stats_refresh_run_summary = client.StatsRefreshRunSummary()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `celery_task_id` | `str` |  |
| `completed_at` | `Any` |  |
| `entries_failed` | `int` |  |
| `entries_skipped` | `int` |  |
| `entries_total` | `int` |  |
| `entries_updated` | `int` |  |
| `error_summary_json` | `Any` |  |
| `id` | `str` |  |
| `issues_opened` | `int` |  |
| `issues_resolved` | `int` |  |
| `platform_units_resolved` | `int` |  |
| `platform_units_total` | `int` |  |
| `platform_units_unresolved` | `int` |  |
| `platform_updates_via_profile` | `int` |  |
| `platform_updates_via_url` | `int` |  |
| `provider` | `Any` |  |
| `refresh_trigger` | `Any` |  |
| `requested_by_email` | `Any` |  |
| `run_type` | `str` |  |
| `started_at` | `str` |  |
| `status` | `str` |  |
| `target_date_et` | `Any` |  |
| `users_count` | `int` |  |

#### Example: List

```python
stats_refresh_run_summarys = client.StatsRefreshRunSummary().list()
```


### StatsRefreshTaskTrigger

Create an instance: `stats_refresh_task_trigger = client.StatsRefreshTaskTrigger()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `message` | `str` |  |
| `status` | `str` |  |
| `target_date` | `str` |  |
| `task_id` | `str` |  |
| `users_count` | `int` |  |

#### Example: Create

```python
stats_refresh_task_trigger = client.StatsRefreshTaskTrigger().create({
    "message": "example_message",  # str
    "status": "example_status",  # str
    "target_date": "example_target_date",  # str
    "task_id": "example_task_id",  # str
})
```


### Stripe

Create an instance: `stripe = client.Stripe()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |


### Style

Create an instance: `style = client.Style()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
style = client.Style().load()
```


### Template

Create an instance: `template = client.Template()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
template = client.Template().load()
```


### TikTokCreatorInfo

Create an instance: `tik_tok_creator_info = client.TikTokCreatorInfo()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commentDisabled` | `bool` |  |
| `creatorAvatarUrl` | `Any` |  |
| `creatorNickname` | `Any` |  |
| `creatorUsername` | `Any` |  |
| `duetDisabled` | `bool` |  |
| `maxVideoPostDurationSec` | `int` |  |
| `privacyLevelOptions` | `list` |  |
| `stitchDisabled` | `bool` |  |

#### Example: List

```python
tik_tok_creator_infos = client.TikTokCreatorInfo().list()
```


### TopPost

Create an instance: `top_post = client.TopPost()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comments` | `int` |  |
| `id` | `str` |  |
| `likes` | `int` |  |
| `platforms` | `list` |  |
| `scheduled_datetime` | `str` |  |
| `user_email` | `str` |  |
| `user_id` | `str` |  |
| `views` | `int` |  |

#### Example: List

```python
top_posts = client.TopPost().list({"date": "example"})
```


### UploadPostAgent

Create an instance: `upload_post_agent = client.UploadPostAgent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
upload_post_agent = client.UploadPostAgent().create({
})
```


### User

Create an instance: `user = client.User()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountType` | `Any` |  |
| `activatedByAdminAt` | `Any` |  |
| `activatedByAdminId` | `Any` |  |
| `agents` | `list` |  |
| `agentsCount` | `Any` |  |
| `attribution` | `Any` |  |
| `avatarImageUrl` | `Any` |  |
| `avatarVoiceUrl` | `Any` |  |
| `createdAt` | `str` |  |
| `credits` | `int` |  |
| `email` | `str` |  |
| `googleId` | `Any` |  |
| `hasSeenScheduleWelcome` | `bool` |  |
| `id` | `str` |  |
| `industry` | `Any` |  |
| `instagramId` | `Any` |  |
| `isActivatedByAdmin` | `bool` |  |
| `isAdmin` | `bool` |  |
| `isInternalUser` | `Any` |  |
| `isMigrated` | `Any` |  |
| `isResettingProduct` | `Any` |  |
| `membership` | `Any` |  |
| `name` | `str` |  |
| `partnerDirectLoginDisabled` | `bool` |  |
| `partnerExternalUserId` | `Any` |  |
| `partnerPolicyCode` | `Any` |  |
| `partnerSource` | `Any` |  |
| `picture` | `Any` |  |
| `stripeCustomerId` | `Any` |  |
| `stripeSubscriptionId` | `Any` |  |
| `subscriptionCurrentPeriodEnd` | `Any` |  |
| `subscriptionStatus` | `Any` |  |
| `totalCount` | `int` |  |
| `updatedAt` | `str` |  |
| `userId` | `str` |  |

#### Example: Load

```python
user = client.User().load({"id": "user_id"})
```


### UserAgent

Create an instance: `user_agent = client.UserAgent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent` | `dict` |  |
| `assigned_at` | `str` |  |
| `assignment_id` | `str` |  |
| `expires_at` | `Any` |  |
| `id` | `str` |  |
| `status` | `str` |  |

#### Example: List

```python
user_agents = client.UserAgent().list({"id": "example"})
```

#### Example: Create

```python
user_agent = client.UserAgent().create({
    "id": "example_id",  # str
    "agent": {},  # dict
    "assigned_at": "example_assigned_at",  # str
    "assignment_id": "example_assignment_id",  # str
    "status": "example_status",  # str
})
```


### UserHealthDetail

Create an instance: `user_health_detail = client.UserHealthDetail()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `Any` |  |
| `activated` | `bool` |  |
| `activated_by_admin_at` | `Any` |  |
| `activated_by_admin_id` | `str` |  |
| `admin_notes` | `Any` |  |
| `agents_count` | `int` |  |
| `assigned_agents` | `list` |  |
| `assigned_agents_count` | `int` |  |
| `assigned_agents_preview_limit` | `int` |  |
| `assigned_agents_truncated` | `bool` |  |
| `auto_schedule_enabled` | `bool` |  |
| `comments_expected_per_day` | `int` |  |
| `comments_fix_block_reason` | `Any` |  |
| `comments_fix_ready` | `bool` |  |
| `comments_today_failed` | `int` |  |
| `comments_today_posted` | `int` |  |
| `comments_today_scheduled` | `int` |  |
| `comments_yesterday_failed` | `int` |  |
| `comments_yesterday_posted` | `int` |  |
| `comments_yesterday_total` | `int` |  |
| `created_at` | `str` |  |
| `credits` | `int` |  |
| `effective_posted_video_reuse_percent` | `int` |  |
| `email` | `str` |  |
| `expected_agents_count` | `int` |  |
| `id` | `str` |  |
| `is_activated_by_admin` | `bool` |  |
| `is_admin` | `bool` |  |
| `is_bookmarked` | `bool` |  |
| `is_internal_user` | `bool` |  |
| `is_migrated` | `bool` |  |
| `landing_slug` | `Any` |  |
| `landing_status` | `Any` |  |
| `landing_url` | `Any` |  |
| `membership` | `Any` |  |
| `microhub_status` | `Any` |  |
| `microhub_url` | `Any` |  |
| `name` | `str` |  |
| `onboarding_flow` | `str` |  |
| `posted_video_reuse_percent` | `Any` |  |
| `product_id` | `str` |  |
| `product_name` | `Any` |  |
| `product_url` | `Any` |  |
| `subscription_status` | `Any` |  |
| `survey_data` | `Any` |  |
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
| `yesterday_failed_entries` | `list` |  |
| `yesterday_posted` | `int` |  |
| `yesterday_total` | `int` |  |

#### Example: List

```python
user_health_details = client.UserHealthDetail().list({"id": "example"})
```


### UserWithAvatarSubmission

Create an instance: `user_with_avatar_submission = client.UserWithAvatarSubmission()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_image_url` | `str` |  |
| `avatar_voice_url` | `str` |  |
| `created_at` | `str` |  |
| `email` | `str` |  |
| `id` | `str` |  |
| `name` | `str` |  |

#### Example: List

```python
user_with_avatar_submissions = client.UserWithAvatarSubmission().list()
```


### UsersHealth

Create an instance: `users_health = client.UsersHealth()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `Any` |  |
| `admin_notes` | `Any` |  |
| `agents_count` | `int` |  |
| `agents_health` | `str` |  |
| `agents_issue` | `Any` |  |
| `assigned_agents_count` | `int` |  |
| `auto_schedule_enabled` | `bool` |  |
| `auto_schedule_health` | `str` |  |
| `auto_schedule_issue` | `Any` |  |
| `auto_schedule_today_health` | `str` |  |
| `auto_schedule_today_issue` | `Any` |  |
| `created_at` | `str` |  |
| `email` | `str` |  |
| `expected_agents_count` | `int` |  |
| `id` | `str` |  |
| `is_bookmarked` | `bool` |  |
| `is_internal_user` | `bool` |  |
| `is_migrated` | `bool` |  |
| `membership` | `Any` |  |
| `name` | `str` |  |
| `posts_health` | `str` |  |
| `posts_issue` | `Any` |  |
| `posts_today_health` | `str` |  |
| `posts_today_issue` | `Any` |  |
| `subscription_status` | `Any` |  |
| `today_expected_count` | `int` |  |
| `today_failed_count` | `int` |  |
| `today_scheduled_count` | `int` |  |
| `today_total_count` | `int` |  |
| `tomorrow_expected_count` | `int` |  |
| `tomorrow_scheduled_count` | `int` |  |
| `yesterday_failed_count` | `int` |  |
| `yesterday_total_count` | `int` |  |

#### Example: List

```python
users_healths = client.UsersHealth().list()
```


### Video

Create an instance: `video = client.Video()`

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
| `agent_id` | `str` |  |
| `bookmarked` | `Any` |  |
| `captions` | `Any` |  |
| `carousel_data` | `Any` |  |
| `created_at` | `str` |  |
| `duration` | `float` |  |
| `generation_status` | `Any` |  |
| `id` | `str` |  |
| `image_prompt` | `Any` |  |
| `is_onboarding` | `bool` |  |
| `is_template` | `bool` |  |
| `main_avatar` | `Any` |  |
| `main_prompt` | `Any` |  |
| `media_asset_id` | `str` |  |
| `product_id` | `str` |  |
| `reel_id` | `str` |  |
| `thumbnail_url` | `Any` |  |
| `title` | `str` |  |
| `type` | `Any` |  |
| `updated_at` | `Any` |  |
| `url` | `str` |  |
| `user_id` | `str` |  |
| `video_id` | `str` |  |

#### Example: Load

```python
video = client.Video().load({"id": "video_id"})
```

#### Example: Create

```python
video = client.Video().create({
    "captions": "example_captions",  # Any
    "title": "example_title",  # str
    "url": "example_url",  # str
    "video_id": "example_video_id",  # str
})
```


### VideoRemixerWorker

Create an instance: `video_remixer_worker = client.VideoRemixerWorker()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `captions_ass` | `str` |  |
| `captions_vtt` | `str` |  |
| `cost_usd` | `float` |  |
| `error` | `str` |  |
| `file` | `str` |  |
| `kinds` | `list` |  |
| `lease_token` | `str` |  |
| `limit` | `int` |  |
| `manifest` | `str` |  |
| `model` | `str` |  |
| `processing_seconds` | `float` |  |
| `prompt_version` | `str` |  |
| `result` | `dict` |  |
| `thumbnail` | `str` |  |
| `tier` | `str` |  |
| `worker_id` | `str` |  |

#### Example: Create

```python
video_remixer_worker = client.VideoRemixerWorker().create({
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


### WatchdogRecovery

Create an instance: `watchdog_recovery = client.WatchdogRecovery()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `item_id` | `str` |  |
| `passed` | `bool` |  |
| `table` | `str` |  |

#### Example: Load

```python
watchdog_recovery = client.WatchdogRecovery().load()
```

#### Example: Create

```python
watchdog_recovery = client.WatchdogRecovery().create({
    "item_id": "example_item_id",  # str
    "passed": True,  # bool
    "table": "example_table",  # str
})
```


### WinningAd

Create an instance: `winning_ad = client.WinningAd()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `id` | `str` |  |
| `source` | `str` |  |
| `type` | `str` |  |
| `url` | `str` |  |

#### Example: List

```python
winning_ads = client.WinningAd().list()
```


### XAdaptation

Create an instance: `x_adaptation = client.XAdaptation()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
x_adaptation = client.XAdaptation().load()
```


### ZerohumanAdminAccount

Create an instance: `zerohuman_admin_account = client.ZerohumanAdminAccount()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_mode` | `str` |  |
| `active_queue_count` | `int` |  |
| `assigned_agent` | `Any` |  |
| `created_at` | `Any` |  |
| `email` | `str` |  |
| `external_user_id` | `str` |  |
| `membership` | `Any` |  |
| `policy_code` | `Any` |  |
| `product_id` | `str` |  |
| `product_name` | `Any` |  |
| `provisioning_status` | `str` |  |
| `subscription_status` | `Any` |  |
| `updated_at` | `Any` |  |
| `user_id` | `str` |  |

#### Example: List

```python
zerohuman_admin_accounts = client.ZerohumanAdminAccount().list()
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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── crackedapireference_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`crackedapireference_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
admininsight = client.AdminInsight()
admininsight.list()

# admininsight.data_get() now returns the admininsight data from the last list
# admininsight.match_get() returns the last match criteria
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
