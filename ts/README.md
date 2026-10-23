# CrackedApiReference TypeScript SDK



The TypeScript SDK for the CrackedApiReference API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Activate()` — each with a small set of operations (`list`, `load`, `create`, `update`, `patch`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`, see [Tags](https://github.com/voxgig-sdk/cracked-api-reference-sdk/tags)), or from a
clone, which carries the compiled `dist/`:

```bash
git clone https://github.com/voxgig-sdk/cracked-api-reference-sdk
npm install ./cracked-api-reference-sdk/ts
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { CrackedApiReferenceSDK } from '@voxgig-sdk/cracked-api-reference-sdk'

const client = new CrackedApiReferenceSDK({
  apikey: process.env.CRACKED_API_REFERENCE_APIKEY,
  // Required: this API's server URL is templated on these.
  server: {
    base: '<base>',
  },
})
```

### 3. Load an admin

Admin is nested under date, so provide the `date`.
`load()` returns the entity and throws on failure; `.data()` reads its record:

```ts
try {
  const admin = await client.Admin().load({
    date: 'example_date',
  })
  console.log(admin.data())
} catch (err) {
  console.error('load failed:', err)
}
```

### 4. Create, update, and remove

```ts
// Create — returns the created Activate ENTITY (.data() for the record)
const created = await client.Activate().create({
  user_id: 'example_user_id',
  message: 'example_message',
  success: true,
})

```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const admininsights = await client.AdminInsight().list()
  console.log(admininsights.map((item) => item.data()))
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
result envelope. Branch on `ok`; on failure `status` holds the HTTP status
(for error responses) and `err` holds the error:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (!result.ok) {
  console.error('request failed:', result.status, result.err)
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = CrackedApiReferenceSDK.test()

const admininsights = await client.AdminInsight().list()
// admininsights is an array of AdminInsight entities, one per mock record
console.log(admininsights.map((admininsight) => admininsight.data()))
```

You can also use the instance method:

```ts
const client = new CrackedApiReferenceSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.AdminInsight()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new CrackedApiReferenceSDK({
  apikey: '...',
  extend: [logger],
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
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### CrackedApiReferenceSDK

#### Constructor

```ts
new CrackedApiReferenceSDK(options?: {
  apikey?: string
  server?: { base: string }
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `server` | `object` | **Required.** Values for the server-URL variables: `base`. The API base URL is a template over them. |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Activate(data?)` | `ActivateEntity` | Create an Activate entity instance. |
| `ActivateUser(data?)` | `ActivateUserEntity` | Create an ActivateUser entity instance. |
| `ActiveOnboarding(data?)` | `ActiveOnboardingEntity` | Create an ActiveOnboarding entity instance. |
| `Admin(data?)` | `AdminEntity` | Create an Admin entity instance. |
| `AdminAccountReset(data?)` | `AdminAccountResetEntity` | Create an AdminAccountReset entity instance. |
| `AdminCarousel(data?)` | `AdminCarouselEntity` | Create an AdminCarousel entity instance. |
| `AdminCarouselDemoReview(data?)` | `AdminCarouselDemoReviewEntity` | Create an AdminCarouselDemoReview entity instance. |
| `AdminCustomer(data?)` | `AdminCustomerEntity` | Create an AdminCustomer entity instance. |
| `AdminCustomerSuccess(data?)` | `AdminCustomerSuccessEntity` | Create an AdminCustomerSuccess entity instance. |
| `AdminGeneratedVideo(data?)` | `AdminGeneratedVideoEntity` | Create an AdminGeneratedVideo entity instance. |
| `AdminHealthrx(data?)` | `AdminHealthrxEntity` | Create an AdminHealthrx entity instance. |
| `AdminInsight(data?)` | `AdminInsightEntity` | Create an AdminInsight entity instance. |
| `AdminLandingTask(data?)` | `AdminLandingTaskEntity` | Create an AdminLandingTask entity instance. |
| `AdminMetricsSummary(data?)` | `AdminMetricsSummaryEntity` | Create an AdminMetricsSummary entity instance. |
| `AdminPost(data?)` | `AdminPostEntity` | Create an AdminPost entity instance. |
| `AdminRecentSignup(data?)` | `AdminRecentSignupEntity` | Create an AdminRecentSignup entity instance. |
| `AdminSlideshowDiag(data?)` | `AdminSlideshowDiagEntity` | Create an AdminSlideshowDiag entity instance. |
| `AdminSlideshowImport(data?)` | `AdminSlideshowImportEntity` | Create an AdminSlideshowImport entity instance. |
| `AdminUserView(data?)` | `AdminUserViewEntity` | Create an AdminUserView entity instance. |
| `AdminUsersTableItem(data?)` | `AdminUsersTableItemEntity` | Create an AdminUsersTableItem entity instance. |
| `AdminVideoRemixer(data?)` | `AdminVideoRemixerEntity` | Create an AdminVideoRemixer entity instance. |
| `AdvanceStep(data?)` | `AdvanceStepEntity` | Create an AdvanceStep entity instance. |
| `Agent(data?)` | `AgentEntity` | Create an Agent entity instance. |
| `AgentAccessCustomersHealth(data?)` | `AgentAccessCustomersHealthEntity` | Create an AgentAccessCustomersHealth entity instance. |
| `AgentAccessOverview(data?)` | `AgentAccessOverviewEntity` | Create an AgentAccessOverview entity instance. |
| `AgentAccessPhilHourlyNotification(data?)` | `AgentAccessPhilHourlyNotificationEntity` | Create an AgentAccessPhilHourlyNotification entity instance. |
| `AgentAccessPhilStatsRefresh(data?)` | `AgentAccessPhilStatsRefreshEntity` | Create an AgentAccessPhilStatsRefresh entity instance. |
| `AgentAccessPhilVideo(data?)` | `AgentAccessPhilVideoEntity` | Create an AgentAccessPhilVideo entity instance. |
| `AgentAccessUserAgent(data?)` | `AgentAccessUserAgentEntity` | Create an AgentAccessUserAgent entity instance. |
| `AgentAccessUserPhoneFarm(data?)` | `AgentAccessUserPhoneFarmEntity` | Create an AgentAccessUserPhoneFarm entity instance. |
| `AgentAccessUserPost(data?)` | `AgentAccessUserPostEntity` | Create an AgentAccessUserPost entity instance. |
| `AgentAccessUserSummary(data?)` | `AgentAccessUserSummaryEntity` | Create an AgentAccessUserSummary entity instance. |
| `AgentAccessUserVideo(data?)` | `AgentAccessUserVideoEntity` | Create an AgentAccessUserVideo entity instance. |
| `AgentAccessUserWinningAd(data?)` | `AgentAccessUserWinningAdEntity` | Create an AgentAccessUserWinningAd entity instance. |
| `AgentAccessWinningAdsSummary(data?)` | `AgentAccessWinningAdsSummaryEntity` | Create an AgentAccessWinningAdsSummary entity instance. |
| `AgentDetail(data?)` | `AgentDetailEntity` | Create an AgentDetail entity instance. |
| `AgentHealth(data?)` | `AgentHealthEntity` | Create an AgentHealth entity instance. |
| `AgentHealthCustomerOption(data?)` | `AgentHealthCustomerOptionEntity` | Create an AgentHealthCustomerOption entity instance. |
| `AgentHealthDetail(data?)` | `AgentHealthDetailEntity` | Create an AgentHealthDetail entity instance. |
| `AgentPost(data?)` | `AgentPostEntity` | Create an AgentPost entity instance. |
| `AgentStat(data?)` | `AgentStatEntity` | Create an AgentStat entity instance. |
| `AgentSummary(data?)` | `AgentSummaryEntity` | Create an AgentSummary entity instance. |
| `AgentsSummary(data?)` | `AgentsSummaryEntity` | Create an AgentsSummary entity instance. |
| `AnalysisStatus(data?)` | `AnalysisStatusEntity` | Create an AnalysisStatus entity instance. |
| `AnalyticsPost(data?)` | `AnalyticsPostEntity` | Create an AnalyticsPost entity instance. |
| `AnalyzeProduct(data?)` | `AnalyzeProductEntity` | Create an AnalyzeProduct entity instance. |
| `AssignAgent(data?)` | `AssignAgentEntity` | Create an AssignAgent entity instance. |
| `Auth(data?)` | `AuthEntity` | Create an Auth entity instance. |
| `AutoScheduleSetting(data?)` | `AutoScheduleSettingEntity` | Create an AutoScheduleSetting entity instance. |
| `BulkTikTokStatsUpdate(data?)` | `BulkTikTokStatsUpdateEntity` | Create a BulkTikTokStatsUpdate entity instance. |
| `Carousel(data?)` | `CarouselEntity` | Create a Carousel entity instance. |
| `CarouselAgentDetail(data?)` | `CarouselAgentDetailEntity` | Create a CarouselAgentDetail entity instance. |
| `CarouselStatus(data?)` | `CarouselStatusEntity` | Create a CarouselStatus entity instance. |
| `Chat(data?)` | `ChatEntity` | Create a Chat entity instance. |
| `ChatHistory(data?)` | `ChatHistoryEntity` | Create a ChatHistory entity instance. |
| `ChatSession(data?)` | `ChatSessionEntity` | Create a ChatSession entity instance. |
| `Comment(data?)` | `CommentEntity` | Create a Comment entity instance. |
| `CommentCampaign(data?)` | `CommentCampaignEntity` | Create a CommentCampaign entity instance. |
| `CompleteChatCheckout(data?)` | `CompleteChatCheckoutEntity` | Create a CompleteChatCheckout entity instance. |
| `CreateBlackoutSora2Video(data?)` | `CreateBlackoutSora2VideoEntity` | Create a CreateBlackoutSora2Video entity instance. |
| `CreateCarousel(data?)` | `CreateCarouselEntity` | Create a CreateCarousel entity instance. |
| `CreateProduct(data?)` | `CreateProductEntity` | Create a CreateProduct entity instance. |
| `CreateResetProductV6(data?)` | `CreateResetProductV6Entity` | Create a CreateResetProductV6 entity instance. |
| `CreateSora2Video(data?)` | `CreateSora2VideoEntity` | Create a CreateSora2Video entity instance. |
| `CreateVariation(data?)` | `CreateVariationEntity` | Create a CreateVariation entity instance. |
| `Customer(data?)` | `CustomerEntity` | Create a Customer entity instance. |
| `CustomerHealth(data?)` | `CustomerHealthEntity` | Create a CustomerHealth entity instance. |
| `CustomerHealthAllCustomersItem(data?)` | `CustomerHealthAllCustomersItemEntity` | Create a CustomerHealthAllCustomersItem entity instance. |
| `CustomerHealthViewsSummary(data?)` | `CustomerHealthViewsSummaryEntity` | Create a CustomerHealthViewsSummary entity instance. |
| `Daily(data?)` | `DailyEntity` | Create a Daily entity instance. |
| `DailyStatus(data?)` | `DailyStatusEntity` | Create a DailyStatus entity instance. |
| `DedicatedAgentsDashboard(data?)` | `DedicatedAgentsDashboardEntity` | Create a DedicatedAgentsDashboard entity instance. |
| `EnterpriseAgent(data?)` | `EnterpriseAgentEntity` | Create an EnterpriseAgent entity instance. |
| `EnterpriseProduct(data?)` | `EnterpriseProductEntity` | Create an EnterpriseProduct entity instance. |
| `ExactAvailability(data?)` | `ExactAvailabilityEntity` | Create an ExactAvailability entity instance. |
| `ExactFormula(data?)` | `ExactFormulaEntity` | Create an ExactFormula entity instance. |
| `ExtractV2(data?)` | `ExtractV2Entity` | Create an ExtractV2 entity instance. |
| `FailedPost(data?)` | `FailedPostEntity` | Create a FailedPost entity instance. |
| `File(data?)` | `FileEntity` | Create a File entity instance. |
| `GenerateBlackoutSora2Prompt(data?)` | `GenerateBlackoutSora2PromptEntity` | Create a GenerateBlackoutSora2Prompt entity instance. |
| `GeneratePomelliDemo(data?)` | `GeneratePomelliDemoEntity` | Create a GeneratePomelliDemo entity instance. |
| `GeneratePrompt(data?)` | `GeneratePromptEntity` | Create a GeneratePrompt entity instance. |
| `GenerateSora2Prompt(data?)` | `GenerateSora2PromptEntity` | Create a GenerateSora2Prompt entity instance. |
| `Healthrx(data?)` | `HealthrxEntity` | Create a Healthrx entity instance. |
| `InitResetProductV6(data?)` | `InitResetProductV6Entity` | Create an InitResetProductV6 entity instance. |
| `Iri(data?)` | `IriEntity` | Create an Iri entity instance. |
| `IrisCapability(data?)` | `IrisCapabilityEntity` | Create an IrisCapability entity instance. |
| `IrisChat(data?)` | `IrisChatEntity` | Create an IrisChat entity instance. |
| `IrisConnector(data?)` | `IrisConnectorEntity` | Create an IrisConnector entity instance. |
| `IrisStatus(data?)` | `IrisStatusEntity` | Create an IrisStatus entity instance. |
| `IrisTask(data?)` | `IrisTaskEntity` | Create an IrisTask entity instance. |
| `IrisUsage(data?)` | `IrisUsageEntity` | Create an IrisUsage entity instance. |
| `Landing(data?)` | `LandingEntity` | Create a Landing entity instance. |
| `LandingStat(data?)` | `LandingStatEntity` | Create a LandingStat entity instance. |
| `LandingStatus(data?)` | `LandingStatusEntity` | Create a LandingStatus entity instance. |
| `LinkInBio(data?)` | `LinkInBioEntity` | Create a LinkInBio entity instance. |
| `LinkInDm(data?)` | `LinkInDmEntity` | Create a LinkInDm entity instance. |
| `LinkInPost(data?)` | `LinkInPostEntity` | Create a LinkInPost entity instance. |
| `LinkUser(data?)` | `LinkUserEntity` | Create a LinkUser entity instance. |
| `MediaAsset(data?)` | `MediaAssetEntity` | Create a MediaAsset entity instance. |
| `Men(data?)` | `MenEntity` | Create a Men entity instance. |
| `Microdrama(data?)` | `MicrodramaEntity` | Create a Microdrama entity instance. |
| `MicrohubPublic(data?)` | `MicrohubPublicEntity` | Create a MicrohubPublic entity instance. |
| `OnboardingStatus(data?)` | `OnboardingStatusEntity` | Create an OnboardingStatus entity instance. |
| `OnboardingV6(data?)` | `OnboardingV6Entity` | Create an OnboardingV6 entity instance. |
| `PaidUser(data?)` | `PaidUserEntity` | Create a PaidUser entity instance. |
| `Pexel(data?)` | `PexelEntity` | Create a Pexel entity instance. |
| `PhoneAdminAvailableAgentSource(data?)` | `PhoneAdminAvailableAgentSourceEntity` | Create a PhoneAdminAvailableAgentSource entity instance. |
| `Product(data?)` | `ProductEntity` | Create a Product entity instance. |
| `ProductDashboard(data?)` | `ProductDashboardEntity` | Create a ProductDashboard entity instance. |
| `ProductDashboardView(data?)` | `ProductDashboardViewEntity` | Create a ProductDashboardView entity instance. |
| `ProductDemo(data?)` | `ProductDemoEntity` | Create a ProductDemo entity instance. |
| `ProductLanding(data?)` | `ProductLandingEntity` | Create a ProductLanding entity instance. |
| `PublicResumeStatus(data?)` | `PublicResumeStatusEntity` | Create a PublicResumeStatus entity instance. |
| `ReRollVideo(data?)` | `ReRollVideoEntity` | Create a ReRollVideo entity instance. |
| `ReadRootGet(data?)` | `ReadRootGetEntity` | Create a ReadRootGet entity instance. |
| `RecordDemoBooked(data?)` | `RecordDemoBookedEntity` | Create a RecordDemoBooked entity instance. |
| `RefreshStat(data?)` | `RefreshStatEntity` | Create a RefreshStat entity instance. |
| `RemixerClipper(data?)` | `RemixerClipperEntity` | Create a RemixerClipper entity instance. |
| `ResetProduct(data?)` | `ResetProductEntity` | Create a ResetProduct entity instance. |
| `RetryWebsiteScrape(data?)` | `RetryWebsiteScrapeEntity` | Create a RetryWebsiteScrape entity instance. |
| `SaveSurvey(data?)` | `SaveSurveyEntity` | Create a SaveSurvey entity instance. |
| `ScanSocial(data?)` | `ScanSocialEntity` | Create a ScanSocial entity instance. |
| `ScanSocialsPublic(data?)` | `ScanSocialsPublicEntity` | Create a ScanSocialsPublic entity instance. |
| `ScanSocialsStatus(data?)` | `ScanSocialsStatusEntity` | Create a ScanSocialsStatus entity instance. |
| `ScheduleV2(data?)` | `ScheduleV2Entity` | Create a ScheduleV2 entity instance. |
| `Scrape(data?)` | `ScrapeEntity` | Create a Scrape entity instance. |
| `ScrapeWebsitePublic(data?)` | `ScrapeWebsitePublicEntity` | Create a ScrapeWebsitePublic entity instance. |
| `ScrapedData(data?)` | `ScrapedDataEntity` | Create a ScrapedData entity instance. |
| `ScrapingStatus(data?)` | `ScrapingStatusEntity` | Create a ScrapingStatus entity instance. |
| `SelfServeActivate(data?)` | `SelfServeActivateEntity` | Create a SelfServeActivate entity instance. |
| `Seo(data?)` | `SeoEntity` | Create a Seo entity instance. |
| `SeoAiMention(data?)` | `SeoAiMentionEntity` | Create a SeoAiMention entity instance. |
| `SeoBacklink(data?)` | `SeoBacklinkEntity` | Create a SeoBacklink entity instance. |
| `SeoKeyword(data?)` | `SeoKeywordEntity` | Create a SeoKeyword entity instance. |
| `SeoOverview(data?)` | `SeoOverviewEntity` | Create a SeoOverview entity instance. |
| `SeoTraffic(data?)` | `SeoTrafficEntity` | Create a SeoTraffic entity instance. |
| `ShareAccessLink(data?)` | `ShareAccessLinkEntity` | Create a ShareAccessLink entity instance. |
| `Site(data?)` | `SiteEntity` | Create a Site entity instance. |
| `Slide(data?)` | `SlideEntity` | Create a Slide entity instance. |
| `SlugValidation(data?)` | `SlugValidationEntity` | Create a SlugValidation entity instance. |
| `Social(data?)` | `SocialEntity` | Create a Social entity instance. |
| `SocialScanPreview(data?)` | `SocialScanPreviewEntity` | Create a SocialScanPreview entity instance. |
| `SocialScanProcess(data?)` | `SocialScanProcessEntity` | Create a SocialScanProcess entity instance. |
| `SocialScanSave(data?)` | `SocialScanSaveEntity` | Create a SocialScanSave entity instance. |
| `Sora2Avatar(data?)` | `Sora2AvatarEntity` | Create a Sora2Avatar entity instance. |
| `Sora2AvatarAssetUpload(data?)` | `Sora2AvatarAssetUploadEntity` | Create a Sora2AvatarAssetUpload entity instance. |
| `Sora2AvatarStat(data?)` | `Sora2AvatarStatEntity` | Create a Sora2AvatarStat entity instance. |
| `Stat(data?)` | `StatEntity` | Create a Stat entity instance. |
| `StatsRefreshBackfill(data?)` | `StatsRefreshBackfillEntity` | Create a StatsRefreshBackfill entity instance. |
| `StatsRefreshIssue(data?)` | `StatsRefreshIssueEntity` | Create a StatsRefreshIssue entity instance. |
| `StatsRefreshOverview(data?)` | `StatsRefreshOverviewEntity` | Create a StatsRefreshOverview entity instance. |
| `StatsRefreshRunSummary(data?)` | `StatsRefreshRunSummaryEntity` | Create a StatsRefreshRunSummary entity instance. |
| `StatsRefreshTaskTrigger(data?)` | `StatsRefreshTaskTriggerEntity` | Create a StatsRefreshTaskTrigger entity instance. |
| `Stripe(data?)` | `StripeEntity` | Create a Stripe entity instance. |
| `Style(data?)` | `StyleEntity` | Create a Style entity instance. |
| `Template(data?)` | `TemplateEntity` | Create a Template entity instance. |
| `TikTokCreatorInfo(data?)` | `TikTokCreatorInfoEntity` | Create a TikTokCreatorInfo entity instance. |
| `TopPost(data?)` | `TopPostEntity` | Create a TopPost entity instance. |
| `UploadPostAgent(data?)` | `UploadPostAgentEntity` | Create an UploadPostAgent entity instance. |
| `User(data?)` | `UserEntity` | Create an User entity instance. |
| `UserAgent(data?)` | `UserAgentEntity` | Create an UserAgent entity instance. |
| `UserHealthDetail(data?)` | `UserHealthDetailEntity` | Create an UserHealthDetail entity instance. |
| `UserWithAvatarSubmission(data?)` | `UserWithAvatarSubmissionEntity` | Create an UserWithAvatarSubmission entity instance. |
| `UsersHealth(data?)` | `UsersHealthEntity` | Create an UsersHealth entity instance. |
| `Video(data?)` | `VideoEntity` | Create a Video entity instance. |
| `VideoRemixerWorker(data?)` | `VideoRemixerWorkerEntity` | Create a VideoRemixerWorker entity instance. |
| `WatchdogRecovery(data?)` | `WatchdogRecoveryEntity` | Create a WatchdogRecovery entity instance. |
| `WinningAd(data?)` | `WinningAdEntity` | Create a WinningAd entity instance. |
| `XAdaptation(data?)` | `XAdaptationEntity` | Create a XAdaptation entity instance. |
| `ZerohumanAdminAccount(data?)` | `ZerohumanAdminAccountEntity` | Create a ZerohumanAdminAccount entity instance. |
| `tester(testopts?, sdkopts?)` | `CrackedApiReferenceSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `CrackedApiReferenceSDK.test(testopts?, sdkopts?)` | `CrackedApiReferenceSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria, and return it. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria, one per record. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity, and return it. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity, and return it. |
| `patch` | `patch(reqdata?, ctrl?): Promise<Entity>` | Change part of an existing entity, and return it. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<Entity>` | Remove an entity, and return it marked as deleted. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): CrackedApiReferenceSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity itself — there is no result
envelope, and an entity's `data()` reads its record:

- `load`, `create`, `update` and `patch` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to the entity, marked as deleted.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Activate

| Field | Description |
| --- | --- |
| `activated_at` |  |
| `message` |  |
| `success` |  |

Operations: create.

API path: `/api/admin/users/{user_id}/activate`

#### ActivateUser

| Field | Description |
| --- | --- |
| `activated_at` |  |
| `message` |  |
| `success` |  |

Operations: create.

API path: `/api/admin/users/{user_id}/activate-and-complete-onboarding`

#### ActiveOnboarding

| Field | Description |
| --- | --- |
| `current_step` |  |
| `has_active_onboarding` |  |
| `onboarding_data_id` |  |

Operations: load.

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

Operations: create, list, load, remove, update.

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

Operations: create.

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

Operations: create, load, update.

API path: `/api/admin/carousels/slideshow-import/{batch_id}/state`

#### AdminCarouselDemoReview

| Field | Description |
| --- | --- |
| `id` |  |
| `items` |  |
| `reason` |  |

Operations: create, load, update.

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

Operations: list.

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

Operations: list.

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

Operations: list.

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

Operations: create, load, update.

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

Operations: list, load.

API path: `/api/admin/insights`

#### AdminLandingTask

| Field | Description |
| --- | --- |
| `task_id` |  |

Operations: create.

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

Operations: list.

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

Operations: list.

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

Operations: list.

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

Operations: create.

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

Operations: create, load.

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

Operations: create, list, remove, update.

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

Operations: list.

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

Operations: create, load, patch, remove, update.

API path: `/api/admin/video-remixer/clips/{clip_id}/media`

#### AdvanceStep

| Field | Description |
| --- | --- |
| `current_step` |  |
| `onboarding_data_id` | UUID of the OnboardingData record |
| `success` |  |
| `to_step` | Target step name |

Operations: create.

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

Operations: list.

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

Operations: list.

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

Operations: load.

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

Operations: load.

API path: `/api/agent-access/phil-notifications/hourly`

#### AgentAccessPhilStatsRefresh

| Field | Description |
| --- | --- |
| `generatedAt` |  |
| `statsRefresh` |  |
| `targetDate` |  |

Operations: load.

API path: `/api/agent-access/phil-notifications/stats-refresh`

#### AgentAccessPhilVideo

| Field | Description |
| --- | --- |
| `generatedAt` |  |
| `targetDate` |  |
| `videos` |  |

Operations: load.

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

Operations: list.

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

Operations: list.

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

Operations: list.

API path: `/api/agent-access/user-posts`

#### AgentAccessUserSummary

| Field | Description |
| --- | --- |
| `deletedAt` |  |
| `id` |  |
| `isActive` |  |
| `name` |  |
| `url` |  |

Operations: list.

API path: `/api/agent-access/user-summary`

#### AgentAccessUserVideo

| Field | Description |
| --- | --- |
| `allTime` |  |
| `email` |  |
| `today` |  |
| `userId` |  |
| `yesterday` |  |

Operations: load.

API path: `/api/agent-access/user-videos`

#### AgentAccessUserWinningAd

| Field | Description |
| --- | --- |
| `productId` |  |
| `productName` |  |
| `winningAds` |  |
| `winningAdsCount` |  |

Operations: list.

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

Operations: list.

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

Operations: list, update.

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

Operations: list.

API path: `/api/admin/agent-health`

#### AgentHealthCustomerOption

| Field | Description |
| --- | --- |
| `agent_count` |  |
| `email` |  |
| `user_id` |  |

Operations: list.

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

Operations: list.

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

Operations: list.

API path: `/api/admin/agents/{agent_id}/posts`

#### AgentStat

| Field | Description |
| --- | --- |
| `agents_needed` |  |
| `dedicated_agents` |  |
| `shared_agents` |  |
| `total_agents` |  |

Operations: load.

API path: `/api/admin/agents/stats`

#### AgentSummary

| Field | Description |
| --- | --- |
| `agent_count` |  |
| `favicon_url` |  |
| `product_id` |  |
| `product_name` |  |

Operations: list.

API path: `/api/enterprise/agents/summary`

#### AgentsSummary

| Field | Description |
| --- | --- |
| `total_agents` |  |
| `total_agents_count_sum` |  |

Operations: load.

API path: `/api/admin/agents-summary`

#### AnalysisStatus

| Field | Description |
| --- | --- |

Operations: load.

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

Operations: list.

API path: `/api/analytics/posts`

#### AnalyzeProduct

| Field | Description |
| --- | --- |
| `instagram_username` |  |
| `message` |  |
| `status` |  |
| `url` |  |

Operations: create.

API path: `/api/scraper/analyze-product`

#### AssignAgent

| Field | Description |
| --- | --- |
| `agent` | Agent information for V6. |
| `assignment` | Assignment information for V6. |
| `mock_agents` |  |
| `onboarding_data_id` | UUID of the OnboardingData record |

Operations: create.

API path: `/api/onboarding-v6/assign-agent`

#### Auth

| Field | Description |
| --- | --- |

Operations: create.

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

Operations: load, update.

API path: `/api/schedule/settings`

#### BulkTikTokStatsUpdate

| Field | Description |
| --- | --- |
| `failedIds` |  |
| `updatedCount` |  |
| `updates` |  |

Operations: update.

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

Operations: create, list, load.

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

Operations: load.

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

Operations: list.

API path: `/api/carousel/{video_id}/status`

#### Chat

| Field | Description |
| --- | --- |
| `idempotencyKey` |  |
| `message` |  |
| `sessionId` |  |

Operations: create.

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

Operations: create, load.

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

Operations: create.

API path: `/api/chat/sessions/{session_id}/complete`

#### Comment

| Field | Description |
| --- | --- |

Operations: load.

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

Operations: create, load, update.

API path: `/api/comments/products/{product_id}/campaign/sources/{source_id}/resolve`

#### CompleteChatCheckout

| Field | Description |
| --- | --- |
| `message` |  |
| `onboarding_data_id` |  |
| `product_id` |  |
| `ready` |  |
| `success` |  |

Operations: create.

API path: `/api/onboarding-v6/complete-chat-checkout`

#### CreateBlackoutSora2Video

| Field | Description |
| --- | --- |
| `main_prompt` |  |
| `media_asset_id` |  |
| `product_id` |  |
| `requires_polling` |  |
| `video` |  |

Operations: create.

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

Operations: create.

API path: `/api/carousel/create-from-exact`

#### CreateProduct

| Field | Description |
| --- | --- |
| `onboarding_data_id` | UUID of the OnboardingData record |
| `product_id` |  |
| `success` |  |
| `videos_queued` |  |

Operations: create.

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

Operations: create.

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

Operations: create.

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

Operations: create.

API path: `/api/video-variation/create-hook`

#### Customer

| Field | Description |
| --- | --- |
| `account_type` |  |
| `assigned_agents_count` |  |
| `email` |  |
| `id` |  |
| `is_migrated` |  |

Operations: list.

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

Operations: load.

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

Operations: list.

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

Operations: list.

API path: `/api/admin/customer-health/views`

#### Daily

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create.

API path: `/api/carousel/daily/{product_id}/plan`

#### DailyStatus

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load.

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

Operations: list.

API path: `/api/admin/agents/dedicated-dashboard`

#### EnterpriseAgent

| Field | Description |
| --- | --- |
| `count` |  |
| `product_id` |  |
| `source_product_id` |  |
| `target_product_id` |  |

Operations: create, load.

API path: `/api/enterprise/agents/assign`

#### EnterpriseProduct

| Field | Description |
| --- | --- |

Operations: load.

API path: `/api/enterprise/products/{product_id}/status`

#### ExactAvailability

| Field | Description |
| --- | --- |

Operations: load.

API path: `/api/carousel/exact-availability`

#### ExactFormula

| Field | Description |
| --- | --- |

Operations: load.

API path: `/api/carousel/exact-formulas`

#### ExtractV2

| Field | Description |
| --- | --- |
| `instagram_username` |  |
| `message` |  |
| `status` |  |
| `url` |  |

Operations: create.

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

Operations: list.

API path: `/api/admin/failed-posts`

#### File

| Field | Description |
| --- | --- |
| `file` |  |

Operations: create.

API path: `/api/file-upload`

#### GenerateBlackoutSora2Prompt

| Field | Description |
| --- | --- |
| `media_asset_id` |  |
| `product_id` |  |
| `prompt` |  |

Operations: create.

API path: `/api/core/generate-blackout-sora2-prompt`

#### GeneratePomelliDemo

| Field | Description |
| --- | --- |
| `current_demo_count` |  |
| `max_demos` |  |
| `message` |  |
| `product_id` | UUID of the Product |
| `success` |  |

Operations: create.

API path: `/api/onboarding-v6/generate-pomelli-demo`

#### GeneratePrompt

| Field | Description |
| --- | --- |
| `hook_duration` |  |
| `media_asset_id` |  |
| `media_asset_url` |  |
| `prompt` |  |

Operations: create.

API path: `/api/video-variation/generate-prompt`

#### GenerateSora2Prompt

| Field | Description |
| --- | --- |
| `prompt` |  |

Operations: load.

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

Operations: create, load.

API path: `/api/healthrx/products/{product_id}/accounts/{account_id}/content`

#### InitResetProductV6

| Field | Description |
| --- | --- |
| `auto_schedule_disabled` |  |
| `old_product_id` |  |
| `product_id` |  |
| `queue_entries_cleared` |  |
| `success` |  |

Operations: create.

API path: `/api/reset-product/init-v6`

#### Iri

| Field | Description |
| --- | --- |
| `correlationId` |  |
| `idempotencyKey` |  |
| `productId` |  |

Operations: create.

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

Operations: create.

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

Operations: create.

API path: `/api/iris/chat`

#### IrisConnector

| Field | Description |
| --- | --- |
| `connectors` |  |

Operations: list.

API path: `/api/iris/connectors`

#### IrisStatus

| Field | Description |
| --- | --- |
| `connectorsPreview` |  |
| `product` |  |
| `status` |  |
| `tasksPreview` |  |

Operations: list.

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

Operations: create, list.

API path: `/api/iris/tasks`

#### IrisUsage

| Field | Description |
| --- | --- |
| `eventCount` |  |
| `events` |  |
| `membershipId` |  |
| `productScope` |  |

Operations: list.

API path: `/api/iris/usage`

#### Landing

| Field | Description |
| --- | --- |
| `file` |  |

Operations: create.

API path: `/api/landings/microhub/testimonial-image/{index}`

#### LandingStat

| Field | Description |
| --- | --- |
| `landing` |  |
| `microhub` |  |

Operations: load.

API path: `/api/landings/{slug}/stats`

#### LandingStatus

| Field | Description |
| --- | --- |
| `errorMessage` |  |
| `landingStatus` |  |
| `microhubStatus` |  |

Operations: load.

API path: `/api/landings/status`

#### LinkInBio

| Field | Description |
| --- | --- |
| `linkInBioType` |  |
| `redirectUrl` |  |
| `slug` |  |

Operations: load.

API path: `/api/sites/{slug}/link-in-bio`

#### LinkInDm

| Field | Description |
| --- | --- |
| `linkInDmsType` |  |
| `redirectUrl` |  |
| `slug` |  |

Operations: load.

API path: `/api/sites/{slug}/link-in-dms`

#### LinkInPost

| Field | Description |
| --- | --- |
| `linkInPostsType` |  |
| `redirectUrl` |  |
| `showLinkInFirstComment` |  |
| `slug` |  |

Operations: load.

API path: `/api/sites/{slug}/link-in-posts`

#### LinkUser

| Field | Description |
| --- | --- |
| `already_linked` |  |
| `onboarding_data_id` | UUID of the OnboardingData record |
| `success` |  |

Operations: create.

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

Operations: create, load.

API path: `/api/media-assets/{media_asset_id}/exclude-copycat`

#### Men

| Field | Description |
| --- | --- |

Operations: list.

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

Operations: create, load, update.

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

Operations: load.

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

Operations: list.

API path: `/api/onboarding-v6/status`

#### OnboardingV6

| Field | Description |
| --- | --- |

Operations: remove.

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

Operations: list.

API path: `/api/admin/paid-users`

#### Pexel

| Field | Description |
| --- | --- |

Operations: list.

API path: `/api/pexels/search`

#### PhoneAdminAvailableAgentSource

| Field | Description |
| --- | --- |
| `available_count` |  |
| `pc_name` |  |

Operations: list.

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

Operations: create, list, load, remove, update.

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

Operations: list.

API path: `/api/admin/products-dashboard`

#### ProductDashboardView

| Field | Description |
| --- | --- |
| `date` |  |
| `views` |  |

Operations: list.

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

Operations: list.

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

Operations: list, update.

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

Operations: load.

API path: `/api/onboarding-v6/resume-status-public`

#### ReRollVideo

| Field | Description |
| --- | --- |
| `queue_id` |  |
| `requires_polling` |  |
| `skip_credit_check` |  |
| `video` |  |

Operations: create.

API path: `/api/core/re-roll-video`

#### ReadRootGet

| Field | Description |
| --- | --- |

Operations: load.

API path: `/`

#### RecordDemoBooked

| Field | Description |
| --- | --- |
| `calendlyEventUri` |  |
| `calendlyInviteeUri` |  |
| `message` |  |
| `session` |  |

Operations: create.

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

Operations: create.

API path: `/api/analytics/refresh-stats`

#### RemixerClipper

| Field | Description |
| --- | --- |

Operations: create, load.

API path: `/api/remixer-clippers/jobs/{identifier}/download`

#### ResetProduct

| Field | Description |
| --- | --- |

Operations: create, load.

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

Operations: create.

API path: `/api/onboarding-v6/retry-scrape`

#### SaveSurvey

| Field | Description |
| --- | --- |
| `email_sent` |  |
| `onboarding_data_id` | UUID of the OnboardingData record |
| `success` |  |
| `survey` | Survey response data from frontend. |

Operations: create.

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

Operations: create.

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

Operations: create.

API path: `/api/onboarding-v6/scan-socials-public`

#### ScanSocialsStatus

| Field | Description |
| --- | --- |
| `ads_count` |  |
| `onboarding_data_id` |  |
| `product_id` |  |
| `status` |  |
| `task_id` |  |

Operations: load.

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

Operations: create, list, load, remove, update.

API path: `/api/schedule/queue/add`

#### Scrape

| Field | Description |
| --- | --- |
| `old_product_id` |  |
| `onboarding_data_id` |  |
| `status` |  |
| `success` |  |
| `url` |  |

Operations: create.

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

Operations: create.

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

Operations: create.

API path: `/api/scraper/extract`

#### ScrapingStatus

| Field | Description |
| --- | --- |

Operations: load.

API path: `/api/scraper/scraping_status`

#### SelfServeActivate

| Field | Description |
| --- | --- |
| `onboarding_data_id` | UUID of the OnboardingData record |
| `redirect_to_stripe` |  |
| `stripe_checkout_url` |  |
| `success` |  |

Operations: create.

API path: `/api/onboarding-v6/self-serve-activate`

#### Seo

| Field | Description |
| --- | --- |

Operations: load.

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

Operations: list.

API path: `/api/seo/ai-mentions`

#### SeoBacklink

| Field | Description |
| --- | --- |
| `anchor_text` |  |
| `first_seen` |  |
| `referring_domain` |  |
| `status` |  |
| `target_page` |  |

Operations: list.

API path: `/api/seo/backlinks`

#### SeoKeyword

| Field | Description |
| --- | --- |
| `blog_page` |  |
| `current_position` |  |
| `keyword` |  |
| `keyword_group` |  |
| `position_change` |  |

Operations: list.

API path: `/api/seo/keywords`

#### SeoOverview

| Field | Description |
| --- | --- |
| `clicks` |  |
| `ctr` |  |
| `date` |  |
| `impressions` |  |
| `position` |  |

Operations: list.

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

Operations: list.

API path: `/api/seo/traffic`

#### ShareAccessLink

| Field | Description |
| --- | --- |
| `share_token` |  |
| `share_url` |  |

Operations: create.

API path: `/auth/share-access-link`

#### Site

| Field | Description |
| --- | --- |

Operations: load.

API path: `/api/sites/slugs`

#### Slide

| Field | Description |
| --- | --- |
| `caption` |  |
| `id` |  |
| `prompt` |  |

Operations: create, update.

API path: `/api/carousel/{video_id}/slides/{slide_index}/regenerate`

#### SlugValidation

| Field | Description |
| --- | --- |
| `reason` |  |
| `valid` |  |

Operations: load.

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

Operations: create, list, load, remove.

API path: `/social/instagram/exchange`

#### SocialScanPreview

| Field | Description |
| --- | --- |
| `instagram_handle` | Instagram username/handle to scrape |
| `posts` |  |
| `success` |  |
| `tiktok_handle` | TikTok username/handle to scrape |

Operations: create.

API path: `/api/social-scan/preview`

#### SocialScanProcess

| Field | Description |
| --- | --- |
| `posts` |  |
| `product_id` |  |
| `success` |  |
| `task_id` |  |

Operations: create.

API path: `/api/social-scan/process`

#### SocialScanSave

| Field | Description |
| --- | --- |
| `media_asset_ids` |  |
| `posts` |  |
| `product_id` |  |
| `success` |  |

Operations: create.

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

Operations: create, list, load, update.

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

Operations: create.

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

Operations: load.

API path: `/api/admin/sora2-avatars/stats`

#### Stat

| Field | Description |
| --- | --- |

Operations: list.

API path: `/api/admin/stats/posts`

#### StatsRefreshBackfill

| Field | Description |
| --- | --- |
| `message` |  |
| `status` |  |
| `task_id` |  |

Operations: create.

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

Operations: list.

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

Operations: list.

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

Operations: list.

API path: `/api/admin/customer-health/runs`

#### StatsRefreshTaskTrigger

| Field | Description |
| --- | --- |
| `message` |  |
| `status` |  |
| `target_date` |  |
| `task_id` |  |
| `users_count` |  |

Operations: create.

API path: `/api/admin/customer-health/manual-refresh`

#### Stripe

| Field | Description |
| --- | --- |

Operations: create.

API path: `/api/stripe/associate-guest-checkout`

#### Style

| Field | Description |
| --- | --- |

Operations: load.

API path: `/api/carousel/styles`

#### Template

| Field | Description |
| --- | --- |

Operations: load.

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

Operations: list.

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

Operations: list.

API path: `/api/admin/stats/top-posts`

#### UploadPostAgent

| Field | Description |
| --- | --- |

Operations: create.

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

Operations: load, update.

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

Operations: create, list.

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

Operations: list.

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

Operations: list.

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

Operations: list.

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

Operations: create, load, remove, update.

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

Operations: create.

API path: `/api/admin/video-remixer/worker/jobs/{identifier}/fail`

#### WatchdogRecovery

| Field | Description |
| --- | --- |
| `item_id` |  |
| `passed` |  |
| `table` |  |

Operations: create, load.

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

Operations: list.

API path: `/api/video-variation/winning-ads`

#### XAdaptation

| Field | Description |
| --- | --- |

Operations: load.

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

Operations: list.

API path: `/api/admin/zerohuman/accounts`



## Entities


### Activate

Create an instance: `const activate = client.Activate()`

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

```ts
const activate = await client.Activate().create({
  user_id: 'example_user_id',
  message: 'example_message',
  success: true,
})
```


### ActivateUser

Create an instance: `const activate_user = client.ActivateUser()`

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

```ts
const activate_user = await client.ActivateUser().create({
  user_id: 'example_user_id',
  message: 'example_message',
  success: true,
})
```


### ActiveOnboarding

Create an instance: `const active_onboarding = client.ActiveOnboarding()`

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

```ts
const active_onboarding = await client.ActiveOnboarding().load()
```


### Admin

Create an instance: `const admin = client.Admin()`

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

```ts
const admin = await client.Admin().load({ date: 'date' })
```

#### Example: List

```ts
const admins = await client.Admin().list()
```

#### Example: Create

```ts
const admin = await client.Admin().create({
  user_id: 'example_user_id',
  count: 1,
  created_at: 'example_created_at',
  date_from: 'example_date_from',
  date_to: 'example_date_to',
  email: 'example_email',
  id: 'example_id',
  product_id: 'example_product_id',
  video_type: 'example_video_type',
})
```


### AdminAccountReset

Create an instance: `const admin_account_reset = client.AdminAccountReset()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_ids` | `any[]` |  |
| `agent_ids_sha256` | `string` |  |
| `backup_sha256` | `string` |  |
| `batch_size` | `number` |  |
| `confirmation` | `string` |  |
| `customer_email` | `string` |  |
| `pc_name` | `string` |  |
| `phase` | `string` |  |
| `product_id` | `string` |  |
| `video_ids` | `any[]` |  |

#### Example: Create

```ts
const admin_account_reset = await client.AdminAccountReset().create({
  agent_ids: [],
  agent_ids_sha256: 'example_agent_ids_sha256',
  backup_sha256: 'example_backup_sha256',
  confirmation: 'example_confirmation',
  customer_email: 'example_customer_email',
  pc_name: 'example_pc_name',
  product_id: 'example_product_id',
})
```


### AdminCarousel

Create an instance: `const admin_carousel = client.AdminCarousel()`

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
| `formula` | `Record<string, any>` |  |
| `formula_id` | `string` |  |
| `prompt` | `string` |  |
| `slides` | `any[]` |  |
| `title` | `string` |  |

#### Example: Load

```ts
const admin_carousel = await client.AdminCarousel().load({ batch_id: 'batch_id' })
```

#### Example: Create

```ts
const admin_carousel = await client.AdminCarousel().create({
  stage: 'example_stage',
  agent_id: 'example_agent_id',
  batch_id: 'example_batch_id',
  caption: 'example_caption',
  day: 'example_day',
  expected_revision: 'example_expected_revision',
  formula: {},
  formula_id: 'example_formula_id',
  prompt: 'example_prompt',
  slides: [],
  title: 'example_title',
})
```


### AdminCarouselDemoReview

Create an instance: `const admin_carousel_demo_review = client.AdminCarouselDemoReview()`

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
| `items` | `any[]` |  |
| `reason` | `string` |  |

#### Example: Load

```ts
const admin_carousel_demo_review = await client.AdminCarouselDemoReview().load({ id: 'admin_carousel_demo_review_id' })
```

#### Example: Create

```ts
const admin_carousel_demo_review = await client.AdminCarouselDemoReview().create({
  items: [],
})
```


### AdminCustomer

Create an instance: `const admin_customer = client.AdminCustomer()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `any` |  |
| `active_vireel_agents` | `number` |  |
| `agents` | `any[]` |  |
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

```ts
const admin_customers = await client.AdminCustomer().list()
```


### AdminCustomerSuccess

Create an instance: `const admin_customer_success = client.AdminCustomerSuccess()`

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
| `notification_events` | `any[]` |  |
| `priority` | `string` |  |
| `severity` | `string` |  |
| `status_label` | `string` |  |
| `subscription_current_period_end` | `any` |  |
| `subscription_status` | `any` |  |
| `upcoming_posts` | `number` |  |
| `user_id` | `string` |  |

#### Example: List

```ts
const admin_customer_successs = await client.AdminCustomerSuccess().list()
```


### AdminGeneratedVideo

Create an instance: `const admin_generated_video = client.AdminGeneratedVideo()`

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
| `generation_status` | `Record<string, any>` |  |
| `id` | `string` |  |
| `product_id` | `string` |  |
| `thumbnail_url` | `any` |  |
| `title` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `any` |  |
| `url` | `string` |  |

#### Example: List

```ts
const admin_generated_videos = await client.AdminGeneratedVideo().list({ user_id: "example" })
```


### AdminHealthrx

Create an instance: `const admin_healthrx = client.AdminHealthrx()`

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
| `plan` | `Record<string, any>` |  |
| `preparation_enabled` | `boolean` |  |
| `product_id` | `string` |  |
| `reason` | `string` |  |
| `request_key` | `string` |  |
| `revision` | `number` |  |
| `schedule_enabled` | `boolean` |  |
| `version` | `string` |  |
| `viewed` | `boolean` |  |

#### Example: Load

```ts
const admin_healthrx = await client.AdminHealthrx().load({ item_id: 'item_id', kind: 'kind' })
```

#### Example: Create

```ts
const admin_healthrx = await client.AdminHealthrx().create({
  action: 'example_action',
  option_id: 'example_option_id',
  plan: {},
  product_id: 'example_product_id',
  reason: 'example_reason',
  request_key: 'example_request_key',
  version: 'example_version',
  viewed: true,
})
```


### AdminInsight

Create an instance: `const admin_insight = client.AdminInsight()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `customer_success_cases` | `any[]` |  |
| `customers` | `any[]` |  |
| `generated_at` | `string` |  |
| `pfa_database` | `Record<string, any>` |  |
| `recent_signups` | `any[]` |  |
| `summary` | `Record<string, any>` |  |
| `vireel_database` | `Record<string, any>` |  |

#### Example: Load

```ts
const admin_insight = await client.AdminInsight().load()
```

#### Example: List

```ts
const admin_insights = await client.AdminInsight().list()
```


### AdminLandingTask

Create an instance: `const admin_landing_task = client.AdminLandingTask()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `task_id` | `string` |  |

#### Example: Create

```ts
const admin_landing_task = await client.AdminLandingTask().create({
  user_id: 'example_user_id',
  task_id: 'example_task_id',
})
```


### AdminMetricsSummary

Create an instance: `const admin_metrics_summary = client.AdminMetricsSummary()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `paid_users_by_level` | `any[]` |  |
| `total_cancellations` | `number` |  |
| `total_previews_generated` | `number` |  |
| `total_signups` | `number` |  |
| `total_videos_generated` | `number` |  |
| `url_attempts` | `number` |  |
| `user_credits` | `any[]` |  |
| `user_gifted_credits` | `any[]` |  |

#### Example: List

```ts
const admin_metrics_summarys = await client.AdminMetricsSummary().list()
```


### AdminPost

Create an instance: `const admin_post = client.AdminPost()`

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

```ts
const admin_posts = await client.AdminPost().list()
```


### AdminRecentSignup

Create an instance: `const admin_recent_signup = client.AdminRecentSignup()`

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
| `notification_events` | `any[]` |  |
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

```ts
const admin_recent_signups = await client.AdminRecentSignup().list()
```


### AdminSlideshowDiag

Create an instance: `const admin_slideshow_diag = client.AdminSlideshowDiag()`

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

```ts
const admin_slideshow_diag = await client.AdminSlideshowDiag().create({
  id: 'example_id',
})
```


### AdminSlideshowImport

Create an instance: `const admin_slideshow_import = client.AdminSlideshowImport()`

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
| `slides` | `any[]` |  |
| `title` | `string` |  |

#### Example: Load

```ts
const admin_slideshow_import = await client.AdminSlideshowImport().load({ batch_id: 'batch_id' })
```

#### Example: Create

```ts
const admin_slideshow_import = await client.AdminSlideshowImport().create({
  agent_id: 'example_agent_id',
  batch_id: 'example_batch_id',
  caption: 'example_caption',
  day: 'example_day',
  formula_id: 'example_formula_id',
  slides: [],
  title: 'example_title',
})
```


### AdminUserView

Create an instance: `const admin_user_view = client.AdminUserView()`

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

```ts
const admin_user_views = await client.AdminUserView().list()
```

#### Example: Create

```ts
const admin_user_view = await client.AdminUserView().create({
  user_id: 'example_user_id',
  created_at: 'example_created_at',
  credits: 1,
  email: 'example_email',
  id: 'example_id',
  industry: 'example_industry',
  membership: 'example_membership',
  name: 'example_name',
  new_email: 'example_new_email',
  product_name: 'example_product_name',
  product_url: 'example_product_url',
  skip: true,
  subscription_status: 'example_subscription_status',
})
```


### AdminUsersTableItem

Create an instance: `const admin_users_table_item = client.AdminUsersTableItem()`

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

```ts
const admin_users_table_items = await client.AdminUsersTableItem().list()
```


### AdminVideoRemixer

Create an instance: `const admin_video_remixer = client.AdminVideoRemixer()`

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
| `allowed_platforms` | `any[]` |  |
| `anchor_clip_id` | `string` |  |
| `atomicity_class` | `any` |  |
| `auto_render` | `boolean` |  |
| `campaign_allowed` | `boolean` |  |
| `channel` | `string` |  |
| `channel_default` | `string` |  |
| `clip_id` | `string` |  |
| `clip_ids` | `any[]` |  |
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
| `errors` | `any[]` |  |
| `evidence` | `string` |  |
| `expected_revision` | `any` |  |
| `expected_revisions` | `Record<string, any>` |  |
| `external_ai_allowed` | `boolean` |  |
| `file` | `string` |  |
| `followers` | `any` |  |
| `formula_id` | `string` |  |
| `formula_ids` | `any[]` |  |
| `handles` | `Record<string, any>` |  |
| `hook_subtype` | `any` |  |
| `hour_utc` | `number` |  |
| `human_role` | `string` |  |
| `idempotency_key` | `string` |  |
| `items` | `any[]` |  |
| `kim_clip_ids` | `any[]` |  |
| `kind` | `string` |  |
| `levels` | `Record<string, any>` |  |
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
| `policy` | `Record<string, any>` |  |
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
| `sample_links` | `any[]` |  |
| `secondary_roles` | `any` |  |
| `seconds` | `number` |  |
| `seed` | `number` |  |
| `seed_base` | `number` |  |
| `sensitive_personal_data_present` | `boolean` |  |
| `shares` | `any` |  |
| `shoot` | `string` |  |
| `slots` | `any[]` |  |
| `soundbite_title` | `any` |  |
| `source` | `string` |  |
| `source_id` | `string` |  |
| `source_ids` | `any[]` |  |
| `spend_usd` | `any` |  |
| `spiciness` | `any` |  |
| `spiciness_notes` | `string` |  |
| `start_ms` | `any` |  |
| `status` | `string` |  |
| `terry_clip_ids` | `any[]` |  |
| `testimonial_strength` | `any` |  |
| `testimonial_type` | `any` |  |
| `tier` | `string` |  |
| `timeline` | `Record<string, any>` |  |
| `topic` | `string` |  |
| `topic_tags` | `any` |  |
| `total_target_ms` | `number` |  |
| `use_learned_weights` | `boolean` |  |
| `views` | `any` |  |
| `window` | `string` |  |

#### Example: Load

```ts
const admin_video_remixer = await client.AdminVideoRemixer().load({ clip_id: 'clip_id' })
```

#### Example: Create

```ts
const admin_video_remixer = await client.AdminVideoRemixer().create({
  activity: 'example_activity',
  clip_id: 'example_clip_id',
  collected_at: 'example_collected_at',
  evidence: 'example_evidence',
  expected_revisions: {},
  file: 'example_file',
  formula_id: 'example_formula_id',
  formula_ids: [],
  human_role: 'example_human_role',
  idempotency_key: 'example_idempotency_key',
  items: [],
  kim_clip_ids: [],
  kind: 'example_kind',
  levels: {},
  media_enabled: true,
  name: 'example_name',
  platform: 'example_platform',
  platform_post_id: 'example_platform_post_id',
  policy: {},
  post_url: 'example_post_url',
  posted_at: 'example_posted_at',
  purpose: 'example_purpose',
  reason: 'example_reason',
  revision: 1,
  run_id: 'example_run_id',
  seconds: 1,
  slots: [],
  source: 'example_source',
  source_id: 'example_source_id',
  source_ids: [],
  terry_clip_ids: [],
  timeline: {},
  total_target_ms: 1,
  window: 'example_window',
})
```


### AdvanceStep

Create an instance: `const advance_step = client.AdvanceStep()`

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

```ts
const advance_step = await client.AdvanceStep().create({
  onboarding_data_id: 'example_onboarding_data_id',
  to_step: 'example_to_step',
})
```


### Agent

Create an instance: `const agent = client.Agent()`

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

```ts
const agents = await client.Agent().list()
```


### AgentAccessCustomersHealth

Create an instance: `const agent_access_customers_health = client.AgentAccessCustomersHealth()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountType` | `any` |  |
| `agentQuota` | `number` |  |
| `assignedAgentsByType` | `Record<string, any>` |  |
| `assignedAgentsTotal` | `number` |  |
| `createdAt` | `string` |  |
| `email` | `string` |  |
| `isInternalUser` | `any` |  |
| `membership` | `any` |  |
| `name` | `string` |  |
| `performance` | `Record<string, any>` |  |
| `productCount` | `number` |  |
| `subscriptionCurrentPeriodEnd` | `any` |  |
| `subscriptionDetails` | `any` |  |
| `subscriptionStatus` | `any` |  |
| `usage` | `Record<string, any>` |  |
| `userId` | `string` |  |

#### Example: List

```ts
const agent_access_customers_healths = await client.AgentAccessCustomersHealth().list()
```


### AgentAccessOverview

Create an instance: `const agent_access_overview = client.AgentAccessOverview()`

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
| `onboardingContextCounts` | `Record<string, any>` |  |
| `onboardingCurrentStepCounts` | `Record<string, any>` |  |
| `onboardingCurrentStepWindow` | `Record<string, any>` |  |
| `onboardingFlowVariantCounts` | `Record<string, any>` |  |
| `onboardingLockedUntilActivation` | `number` |  |
| `onboardingRecordsTotal` | `number` |  |
| `onboardingRecordsWindow` | `number` |  |
| `onboardingSocialScanStatusCounts` | `Record<string, any>` |  |
| `onboardingWebsiteScrapeStatusCounts` | `Record<string, any>` |  |
| `subscriptionStatusCounts` | `Record<string, any>` |  |
| `totalInternalUsers` | `number` |  |
| `totalUsers` | `number` |  |
| `trialStartedYesterday` | `number` |  |
| `trialingUsers` | `number` |  |

#### Example: Load

```ts
const agent_access_overview = await client.AgentAccessOverview().load()
```


### AgentAccessPhilHourlyNotification

Create an instance: `const agent_access_phil_hourly_notification = client.AgentAccessPhilHourlyNotification()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `generatedAt` | `string` |  |
| `phoneHealth` | `Record<string, any>` |  |
| `scheduledPosts` | `Record<string, any>` |  |
| `targetDate` | `string` |  |
| `uploadPostInstagramHealth` | `Record<string, any>` |  |
| `uploadPostTiktokHealth` | `Record<string, any>` |  |
| `uploadPostYoutubeHealth` | `Record<string, any>` |  |

#### Example: Load

```ts
const agent_access_phil_hourly_notification = await client.AgentAccessPhilHourlyNotification().load()
```


### AgentAccessPhilStatsRefresh

Create an instance: `const agent_access_phil_stats_refresh = client.AgentAccessPhilStatsRefresh()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `generatedAt` | `string` |  |
| `statsRefresh` | `Record<string, any>` |  |
| `targetDate` | `string` |  |

#### Example: Load

```ts
const agent_access_phil_stats_refresh = await client.AgentAccessPhilStatsRefresh().load()
```


### AgentAccessPhilVideo

Create an instance: `const agent_access_phil_video = client.AgentAccessPhilVideo()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `generatedAt` | `string` |  |
| `targetDate` | `string` |  |
| `videos` | `Record<string, any>` |  |

#### Example: Load

```ts
const agent_access_phil_video = await client.AgentAccessPhilVideo().load()
```


### AgentAccessUserAgent

Create an instance: `const agent_access_user_agent = client.AgentAccessUserAgent()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentQuota` | `number` |  |
| `agents` | `any[]` |  |
| `assignedByType` | `Record<string, any>` |  |
| `assignedTotal` | `number` |  |
| `email` | `string` |  |
| `products` | `any[]` |  |
| `userId` | `string` |  |

#### Example: List

```ts
const agent_access_user_agents = await client.AgentAccessUserAgent().list({ email: "example" })
```


### AgentAccessUserPhoneFarm

Create an instance: `const agent_access_user_phone_farm = client.AgentAccessUserPhoneFarm()`

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

```ts
const agent_access_user_phone_farms = await client.AgentAccessUserPhoneFarm().list({ email: "example" })
```


### AgentAccessUserPost

Create an instance: `const agent_access_user_post = client.AgentAccessUserPost()`

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

```ts
const agent_access_user_posts = await client.AgentAccessUserPost().list({ email: "example" })
```


### AgentAccessUserSummary

Create an instance: `const agent_access_user_summary = client.AgentAccessUserSummary()`

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

```ts
const agent_access_user_summarys = await client.AgentAccessUserSummary().list({ email: "example" })
```


### AgentAccessUserVideo

Create an instance: `const agent_access_user_video = client.AgentAccessUserVideo()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allTime` | `Record<string, any>` |  |
| `email` | `string` |  |
| `today` | `Record<string, any>` |  |
| `userId` | `string` |  |
| `yesterday` | `Record<string, any>` |  |

#### Example: Load

```ts
const agent_access_user_video = await client.AgentAccessUserVideo().load({ email: 'email' })
```


### AgentAccessUserWinningAd

Create an instance: `const agent_access_user_winning_ad = client.AgentAccessUserWinningAd()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `productId` | `string` |  |
| `productName` | `string` |  |
| `winningAds` | `any[]` |  |
| `winningAdsCount` | `number` |  |

#### Example: List

```ts
const agent_access_user_winning_ads = await client.AgentAccessUserWinningAd().list({ email: "example" })
```


### AgentAccessWinningAdsSummary

Create an instance: `const agent_access_winning_ads_summary = client.AgentAccessWinningAdsSummary()`

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

```ts
const agent_access_winning_ads_summarys = await client.AgentAccessWinningAdsSummary().list()
```


### AgentDetail

Create an instance: `const agent_detail = client.AgentDetail()`

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

```ts
const agent_details = await client.AgentDetail().list()
```


### AgentHealth

Create an instance: `const agent_health = client.AgentHealth()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `daily` | `any[]` |  |
| `dates` | `any[]` |  |
| `generated_at` | `string` |  |
| `groups` | `any[]` |  |
| `latest` | `Record<string, any>` |  |
| `live_date` | `any` |  |
| `phone_admin_generated_at` | `string` |  |
| `platform` | `string` |  |
| `post_target` | `number` |  |
| `qa_managed_agent_ids` | `any[]` |  |
| `scope_prefixes` | `any[]` |  |
| `timezone` | `string` |  |
| `warmup_target` | `number` |  |

#### Example: List

```ts
const agent_healths = await client.AgentHealth().list()
```


### AgentHealthCustomerOption

Create an instance: `const agent_health_customer_option = client.AgentHealthCustomerOption()`

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

```ts
const agent_health_customer_options = await client.AgentHealthCustomerOption().list()
```


### AgentHealthDetail

Create an instance: `const agent_health_detail = client.AgentHealthDetail()`

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
| `issues` | `any[]` |  |
| `limit` | `number` |  |
| `metric` | `string` |  |
| `offset` | `number` |  |
| `warmup_runs` | `any[]` |  |
| `warning_total` | `number` |  |
| `warnings` | `any[]` |  |

#### Example: List

```ts
const agent_health_details = await client.AgentHealthDetail().list({ date: "example", group_id: "example" })
```


### AgentPost

Create an instance: `const agent_post = client.AgentPost()`

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

```ts
const agent_posts = await client.AgentPost().list({ id: "example" })
```


### AgentStat

Create an instance: `const agent_stat = client.AgentStat()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agents_needed` | `number` |  |
| `dedicated_agents` | `Record<string, any>` |  |
| `shared_agents` | `Record<string, any>` |  |
| `total_agents` | `number` |  |

#### Example: Load

```ts
const agent_stat = await client.AgentStat().load()
```


### AgentSummary

Create an instance: `const agent_summary = client.AgentSummary()`

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

```ts
const agent_summarys = await client.AgentSummary().list()
```


### AgentsSummary

Create an instance: `const agents_summary = client.AgentsSummary()`

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

```ts
const agents_summary = await client.AgentsSummary().load()
```


### AnalysisStatus

Create an instance: `const analysis_status = client.AnalysisStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const analysis_status = await client.AnalysisStatus().load()
```


### AnalyticsPost

Create an instance: `const analytics_post = client.AnalyticsPost()`

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

```ts
const analytics_posts = await client.AnalyticsPost().list({ date_from: "example" })
```


### AnalyzeProduct

Create an instance: `const analyze_product = client.AnalyzeProduct()`

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

```ts
const analyze_product = await client.AnalyzeProduct().create({
  url: 'example_url',
})
```


### AssignAgent

Create an instance: `const assign_agent = client.AssignAgent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent` | `Record<string, any>` | Agent information for V6. |
| `assignment` | `Record<string, any>` | Assignment information for V6. |
| `mock_agents` | `any[]` |  |
| `onboarding_data_id` | `string` | UUID of the OnboardingData record |

#### Example: Create

```ts
const assign_agent = await client.AssignAgent().create({
  onboarding_data_id: 'example_onboarding_data_id',
})
```


### Auth

Create an instance: `const auth = client.Auth()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |


### AutoScheduleSetting

Create an instance: `const auto_schedule_setting = client.AutoScheduleSetting()`

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

```ts
const auto_schedule_setting = await client.AutoScheduleSetting().load()
```


### BulkTikTokStatsUpdate

Create an instance: `const bulk_tik_tok_stats_update = client.BulkTikTokStatsUpdate()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `failedIds` | `any[]` |  |
| `updatedCount` | `number` |  |
| `updates` | `any[]` |  |


### Carousel

Create an instance: `const carousel = client.Carousel()`

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
| `formula` | `Record<string, any>` |  |
| `formula_id` | `string` |  |
| `formula_name` | `any` |  |
| `generation` | `Record<string, any>` |  |
| `id` | `string` |  |
| `image_prompt` | `any` |  |
| `likes` | `any` |  |
| `main_prompt` | `any` |  |
| `metrics_updated_at` | `any` |  |
| `post_url` | `any` |  |
| `profile_url` | `any` |  |
| `qa` | `Record<string, any>` |  |
| `qa_status` | `string` |  |
| `qa_verdict` | `any` |  |
| `quality_score` | `any` |  |
| `queue_id` | `string` |  |
| `relevance_score` | `any` |  |
| `scheduled_at` | `string` |  |
| `slide_count` | `number` |  |
| `slides` | `any[]` |  |
| `source` | `Record<string, any>` |  |
| `status` | `string` |  |
| `thumbnail_url` | `any` |  |
| `title` | `string` |  |
| `video_id` | `string` |  |
| `views` | `any` |  |

#### Example: Load

```ts
const carousel = await client.Carousel().load({ id: 'carousel_id' })
```

#### Example: List

```ts
const carousels = await client.Carousel().list()
```

#### Example: Create

```ts
const carousel = await client.Carousel().create({
  id: 'example_id',
  agent_id: 'example_agent_id',
  agent_name: 'example_agent_name',
  format: 'example_format',
  qa_status: 'example_qa_status',
  queue_id: 'example_queue_id',
  scheduled_at: 'example_scheduled_at',
  slide_count: 1,
  slides: [],
  status: 'example_status',
  title: 'example_title',
  video_id: 'example_video_id',
})
```


### CarouselAgentDetail

Create an instance: `const carousel_agent_detail = client.CarouselAgentDetail()`

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

```ts
const carousel_agent_detail = await client.CarouselAgentDetail().load({ agent_id: 'agent_id' })
```


### CarouselStatus

Create an instance: `const carousel_status = client.CarouselStatus()`

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

```ts
const carousel_statuss = await client.CarouselStatus().list({ id: "example" })
```


### Chat

Create an instance: `const chat = client.Chat()`

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

```ts
const chat = await client.Chat().create({
  session_id: 'example_session_id',
  idempotencyKey: 'example_idempotencyKey',
  message: 'example_message',
  sessionId: 'example_sessionId',
})
```


### ChatHistory

Create an instance: `const chat_history = client.ChatHistory()`

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
| `messages` | `any[]` |  |
| `model` | `any` |  |
| `onboardingDataId` | `string` |  |
| `routeRecommendation` | `any` |  |
| `salesStage` | `string` |  |
| `selectedPlan` | `any` |  |
| `session` | `Record<string, any>` |  |
| `sessionId` | `string` |  |
| `status` | `string` |  |
| `updatedAt` | `string` |  |

#### Example: Load

```ts
const chat_history = await client.ChatHistory().load({ session_id: 'session_id' })
```

#### Example: Create

```ts
const chat_history = await client.ChatHistory().create({
  onboardingDataId: 'example_onboardingDataId',
})
```


### ChatSession

Create an instance: `const chat_session = client.ChatSession()`

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

```ts
const chat_session = await client.ChatSession().create({
  session_id: 'example_session_id',
})
```


### Comment

Create an instance: `const comment = client.Comment()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const comment = await client.Comment().load()
```


### CommentCampaign

Create an instance: `const comment_campaign = client.CommentCampaign()`

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
| `allowlist` | `any[]` |  |
| `analysis_daily_limit` | `number` |  |
| `analysis_model` | `string` |  |
| `analysis_reservation_usd` | `number` |  |
| `approved_markets` | `any[]` |  |
| `brand_forward_enabled` | `boolean` |  |
| `briefs` | `Record<string, any>` |  |
| `candidate_only` | `boolean` |  |
| `claims` | `any[]` |  |
| `cohort_removal_threshold` | `number` |  |
| `daily_cost_ceiling_usd` | `number` |  |
| `delivery_mode` | `string` |  |
| `disclosure_mode` | `string` |  |
| `disclosure_template` | `string` |  |
| `draft_options_count` | `number` |  |
| `draft_review_reservation_usd` | `number` |  |
| `exceptional_daily_cap_approved` | `boolean` |  |
| `execution_enabled` | `boolean` |  |
| `experiment_styles` | `any[]` |  |
| `inventory_factor` | `number` |  |
| `keywords` | `any[]` |  |
| `max_duration_seconds` | `any` |  |
| `metadata_pass_rate` | `number` |  |
| `min_interval_minutes` | `number` |  |
| `mode` | `string` |  |
| `monitored_creators` | `any[]` |  |
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

```ts
const comment_campaign = await client.CommentCampaign().load({ product_id: 'product_id' })
```

#### Example: Create

```ts
const comment_campaign = await client.CommentCampaign().create({
  product_id: 'example_product_id',
  action: 'example_action',
  agent_id: 'example_agent_id',
  reason: 'example_reason',
  request_key: 'example_request_key',
})
```


### CompleteChatCheckout

Create an instance: `const complete_chat_checkout = client.CompleteChatCheckout()`

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

```ts
const complete_chat_checkout = await client.CompleteChatCheckout().create({
  onboarding_data_id: 'example_onboarding_data_id',
})
```


### CreateBlackoutSora2Video

Create an instance: `const create_blackout_sora2_video = client.CreateBlackoutSora2Video()`

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
| `video` | `Record<string, any>` |  |

#### Example: Create

```ts
const create_blackout_sora2_video = await client.CreateBlackoutSora2Video().create({
  main_prompt: 'example_main_prompt',
  media_asset_id: 'example_media_asset_id',
  product_id: 'example_product_id',
})
```


### CreateCarousel

Create an instance: `const create_carousel = client.CreateCarousel()`

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

```ts
const create_carousel = await client.CreateCarousel().create({
  template_id: 'example_template_id',
})
```


### CreateProduct

Create an instance: `const create_product = client.CreateProduct()`

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

```ts
const create_product = await client.CreateProduct().create({
  onboarding_data_id: 'example_onboarding_data_id',
})
```


### CreateResetProductV6

Create an instance: `const create_reset_product_v6 = client.CreateResetProductV6()`

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

```ts
const create_reset_product_v6 = await client.CreateResetProductV6().create({
  onboarding_data_id: 'example_onboarding_data_id',
})
```


### CreateSora2Video

Create an instance: `const create_sora2_video = client.CreateSora2Video()`

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
| `video` | `Record<string, any>` |  |

#### Example: Create

```ts
const create_sora2_video = await client.CreateSora2Video().create({
  main_prompt: 'example_main_prompt',
})
```


### CreateVariation

Create an instance: `const create_variation = client.CreateVariation()`

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

```ts
const create_variation = await client.CreateVariation().create({
  hook_duration: 1,
  media_asset_id: 'example_media_asset_id',
  product_id: 'example_product_id',
  prompt: 'example_prompt',
})
```


### Customer

Create an instance: `const customer = client.Customer()`

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

```ts
const customers = await client.Customer().list()
```


### CustomerHealth

Create an instance: `const customer_health = client.CustomerHealth()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_agents` | `Record<string, any>` |  |
| `available_dates` | `any[]` |  |
| `date` | `string` |  |
| `email` | `string` |  |
| `entries` | `any[]` |  |
| `id` | `string` |  |
| `performance_overview` | `Record<string, any>` |  |
| `platform_coverage_summary` | `Record<string, any>` |  |
| `user_id` | `string` |  |

#### Example: Load

```ts
const customer_health = await client.CustomerHealth().load({ id: 'customer_health_id' })
```


### CustomerHealthAllCustomersItem

Create an instance: `const customer_health_all_customers_item = client.CustomerHealthAllCustomersItem()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `any` |  |
| `assigned_agents_count` | `number` |  |
| `daily_stats` | `any[]` |  |
| `email` | `string` |  |
| `is_migrated` | `boolean` |  |
| `total_views` | `number` |  |
| `user_id` | `string` |  |

#### Example: List

```ts
const customer_health_all_customers_items = await client.CustomerHealthAllCustomersItem().list()
```


### CustomerHealthViewsSummary

Create an instance: `const customer_health_views_summary = client.CustomerHealthViewsSummary()`

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
| `top_users` | `any[]` |  |
| `total_views` | `number` |  |
| `trend` | `any[]` |  |
| `trend_granularity` | `string` |  |
| `user_email` | `any` |  |
| `user_id` | `string` |  |
| `users_with_views` | `number` |  |

#### Example: List

```ts
const customer_health_views_summarys = await client.CustomerHealthViewsSummary().list()
```


### Daily

Create an instance: `const daily = client.Daily()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Create

```ts
const daily = await client.Daily().create({
  id: 'example_id',
  day: 'example_day',
})
```


### DailyStatus

Create an instance: `const daily_status = client.DailyStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const daily_status = await client.DailyStatus().load({ id: 'daily_status_id', day: 'day' })
```


### DedicatedAgentsDashboard

Create an instance: `const dedicated_agents_dashboard = client.DedicatedAgentsDashboard()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_connections` | `number` |  |
| `assigned_user_id` | `string` |  |
| `assigned_user_ids` | `any[]` |  |
| `bio` | `any` |  |
| `id` | `string` |  |
| `instagram_url` | `any` |  |
| `is_active` | `boolean` |  |
| `last_admin_synced_at` | `any` |  |
| `name` | `string` |  |
| `role` | `any` |  |
| `tiktok_stats` | `any` |  |
| `tiktok_url` | `any` |  |
| `today_failed_entries` | `any[]` |  |
| `today_stats` | `Record<string, any>` |  |
| `upload_post_platforms` | `any` |  |
| `upload_post_profile` | `any` |  |
| `yesterday_failed_entries` | `any[]` |  |
| `yesterday_stats` | `Record<string, any>` |  |
| `youtube_url` | `any` |  |

#### Example: List

```ts
const dedicated_agents_dashboards = await client.DedicatedAgentsDashboard().list()
```


### EnterpriseAgent

Create an instance: `const enterprise_agent = client.EnterpriseAgent()`

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

```ts
const enterprise_agent = await client.EnterpriseAgent().load()
```

#### Example: Create

```ts
const enterprise_agent = await client.EnterpriseAgent().create({
  product_id: 'example_product_id',
  source_product_id: 'example_source_product_id',
  target_product_id: 'example_target_product_id',
})
```


### EnterpriseProduct

Create an instance: `const enterprise_product = client.EnterpriseProduct()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const enterprise_product = await client.EnterpriseProduct().load({ product_id: 'product_id' })
```


### ExactAvailability

Create an instance: `const exact_availability = client.ExactAvailability()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const exact_availability = await client.ExactAvailability().load()
```


### ExactFormula

Create an instance: `const exact_formula = client.ExactFormula()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const exact_formula = await client.ExactFormula().load()
```


### ExtractV2

Create an instance: `const extract_v2 = client.ExtractV2()`

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

```ts
const extract_v2 = await client.ExtractV2().create({
  url: 'example_url',
})
```


### FailedPost

Create an instance: `const failed_post = client.FailedPost()`

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

```ts
const failed_posts = await client.FailedPost().list()
```


### File

Create an instance: `const file = client.File()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `file` | `string` |  |

#### Example: Create

```ts
const file = await client.File().create({
  file: 'example_file',
})
```


### GenerateBlackoutSora2Prompt

Create an instance: `const generate_blackout_sora2_prompt = client.GenerateBlackoutSora2Prompt()`

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

```ts
const generate_blackout_sora2_prompt = await client.GenerateBlackoutSora2Prompt().create({
  media_asset_id: 'example_media_asset_id',
  product_id: 'example_product_id',
})
```


### GeneratePomelliDemo

Create an instance: `const generate_pomelli_demo = client.GeneratePomelliDemo()`

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

```ts
const generate_pomelli_demo = await client.GeneratePomelliDemo().create({
  product_id: 'example_product_id',
})
```


### GeneratePrompt

Create an instance: `const generate_prompt = client.GeneratePrompt()`

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

```ts
const generate_prompt = await client.GeneratePrompt().create({
  media_asset_id: 'example_media_asset_id',
})
```


### GenerateSora2Prompt

Create an instance: `const generate_sora2_prompt = client.GenerateSora2Prompt()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `prompt` | `string` |  |

#### Example: Load

```ts
const generate_sora2_prompt = await client.GenerateSora2Prompt().load()
```


### Healthrx

Create an instance: `const healthrx = client.Healthrx()`

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
| `dimensions` | `Record<string, any>` |  |
| `duration_seconds` | `number` |  |
| `evidence` | `string` |  |
| `evidence_urls` | `any[]` |  |
| `external_key` | `string` |  |
| `format` | `string` |  |
| `includes_all_attempt_costs` | `boolean` |  |
| `input_specification` | `Record<string, any>` |  |
| `kind` | `string` |  |
| `level` | `number` |  |
| `measured_at` | `string` |  |
| `model_version` | `string` |  |
| `paid_campaign_id` | `string` |  |
| `parent_content_id` | `string` |  |
| `paused` | `boolean` |  |
| `pillar` | `string` |  |
| `profile` | `Record<string, any>` |  |
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

```ts
const healthrx = await client.Healthrx().load({ product_id: 'product_id' })
```

#### Example: Create

```ts
const healthrx = await client.Healthrx().create({
  product_id: 'example_product_id',
  agent_id: 'example_agent_id',
  attempt: 1,
  benchmark_set: 'example_benchmark_set',
  commercial_license_evidence: 'example_commercial_license_evidence',
  dimensions: {},
  evidence: 'example_evidence',
  evidence_urls: [],
  external_key: 'example_external_key',
  input_specification: {},
  kind: 'example_kind',
  measured_at: 'example_measured_at',
  model_version: 'example_model_version',
  paused: true,
  pillar: 'example_pillar',
  profile: {},
  provider: 'example_provider',
  provider_invoice_evidence: 'example_provider_invoice_evidence',
  reason: 'example_reason',
  reference_version: 'example_reference_version',
  request_key: 'example_request_key',
  test_variable: 'example_test_variable',
  topic: 'example_topic',
  total_cost_usd: 1,
})
```


### InitResetProductV6

Create an instance: `const init_reset_product_v6 = client.InitResetProductV6()`

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

```ts
const init_reset_product_v6 = await client.InitResetProductV6().create({
})
```


### Iri

Create an instance: `const iri = client.Iri()`

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

```ts
const iri = await client.Iri().create({
  connector_id: 'example_connector_id',
  idempotencyKey: 'example_idempotencyKey',
})
```


### IrisCapability

Create an instance: `const iris_capability = client.IrisCapability()`

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
| `input` | `Record<string, any>` |  |
| `membershipId` | `any` |  |
| `message` | `any` |  |
| `ok` | `boolean` |  |
| `platformAccountId` | `any` |  |
| `platformLinkId` | `any` |  |
| `productScope` | `string` |  |
| `requestedBy` | `Record<string, any>` |  |
| `result` | `Record<string, any>` |  |
| `retryable` | `boolean` |  |

#### Example: Create

```ts
const iris_capability = await client.IrisCapability().create({
  id: 'example_id',
  capability: 'example_capability',
  correlationId: 'example_correlationId',
  externalUserId: 'example_externalUserId',
  idempotencyKey: 'example_idempotencyKey',
  productScope: 'example_productScope',
})
```


### IrisChat

Create an instance: `const iris_chat = client.IrisChat()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `artifacts` | `any[]` |  |
| `correlationId` | `string` |  |
| `idempotencyKey` | `string` |  |
| `message` | `string` |  |
| `mode` | `string` |  |
| `ok` | `boolean` |  |
| `pageContext` | `Record<string, any>` |  |
| `productId` | `any` |  |
| `runtimeStatus` | `string` |  |
| `sessionId` | `any` |  |

#### Example: Create

```ts
const iris_chat = await client.IrisChat().create({
  correlationId: 'example_correlationId',
  idempotencyKey: 'example_idempotencyKey',
  message: 'example_message',
})
```


### IrisConnector

Create an instance: `const iris_connector = client.IrisConnector()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connectors` | `any[]` |  |

#### Example: List

```ts
const iris_connectors = await client.IrisConnector().list()
```


### IrisStatus

Create an instance: `const iris_status = client.IrisStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connectorsPreview` | `any[]` |  |
| `product` | `any` |  |
| `status` | `Record<string, any>` |  |
| `tasksPreview` | `any[]` |  |

#### Example: List

```ts
const iris_statuss = await client.IrisStatus().list()
```


### IrisTask

Create an instance: `const iris_task = client.IrisTask()`

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
| `completed` | `any[]` |  |
| `description` | `string` |  |
| `discover` | `any[]` |  |
| `productId` | `any` |  |
| `recurring` | `any[]` |  |
| `requiredConnectors` | `any[]` |  |
| `title` | `string` |  |

#### Example: List

```ts
const iris_tasks = await client.IrisTask().list()
```

#### Example: Create

```ts
const iris_task = await client.IrisTask().create({
  title: 'example_title',
})
```


### IrisUsage

Create an instance: `const iris_usage = client.IrisUsage()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `eventCount` | `number` |  |
| `events` | `any[]` |  |
| `membershipId` | `any` |  |
| `productScope` | `string` |  |

#### Example: List

```ts
const iris_usages = await client.IrisUsage().list()
```


### Landing

Create an instance: `const landing = client.Landing()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `file` | `string` |  |

#### Example: Create

```ts
const landing = await client.Landing().create({
  index: 1,
  file: 'example_file',
})
```


### LandingStat

Create an instance: `const landing_stat = client.LandingStat()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `landing` | `Record<string, any>` |  |
| `microhub` | `Record<string, any>` |  |

#### Example: Load

```ts
const landing_stat = await client.LandingStat().load({ slug: 'slug' })
```


### LandingStatus

Create an instance: `const landing_status = client.LandingStatus()`

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

```ts
const landing_status = await client.LandingStatus().load()
```


### LinkInBio

Create an instance: `const link_in_bio = client.LinkInBio()`

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

```ts
const link_in_bio = await client.LinkInBio().load({ slug: 'slug' })
```


### LinkInDm

Create an instance: `const link_in_dm = client.LinkInDm()`

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

```ts
const link_in_dm = await client.LinkInDm().load({ slug: 'slug' })
```


### LinkInPost

Create an instance: `const link_in_post = client.LinkInPost()`

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

```ts
const link_in_post = await client.LinkInPost().load({ slug: 'slug' })
```


### LinkUser

Create an instance: `const link_user = client.LinkUser()`

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

```ts
const link_user = await client.LinkUser().create({
  onboarding_data_id: 'example_onboarding_data_id',
})
```


### MediaAsset

Create an instance: `const media_asset = client.MediaAsset()`

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
| `media_assets` | `any[]` |  |
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

```ts
const media_asset = await client.MediaAsset().load({ id: 'media_asset_id' })
```

#### Example: Create

```ts
const media_asset = await client.MediaAsset().create({
  category: 'example_category',
  createdAt: 'example_createdAt',
  file: 'example_file',
  id: 'example_id',
  media_assets: [],
  onboarding_data_id: 'example_onboarding_data_id',
  source: 'example_source',
  type: 'example_type',
  updatedAt: 'example_updatedAt',
  url: 'example_url',
})
```


### Men

Create an instance: `const men = client.Men()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```ts
const mens = await client.Men().list()
```


### Microdrama

Create an instance: `const microdrama = client.Microdrama()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `evidence` | `Record<string, any>` |  |
| `expected_revision` | `number` |  |
| `idempotency_key` | `string` |  |
| `issues` | `any[]` |  |
| `reason` | `string` |  |
| `role` | `string` |  |
| `scores` | `Record<string, any>` |  |
| `selected_premise_id` | `string` |  |
| `stage` | `string` |  |
| `status` | `string` |  |
| `subject_hash` | `string` |  |
| `title` | `string` |  |
| `verdict` | `string` |  |

#### Example: Load

```ts
const microdrama = await client.Microdrama().load({ episode_id: 'episode_id' })
```

#### Example: Create

```ts
const microdrama = await client.Microdrama().create({
  episode_id: 'example_episode_id',
  evidence: {},
  expected_revision: 1,
  idempotency_key: 'example_idempotency_key',
  reason: 'example_reason',
  role: 'example_role',
  scores: {},
  stage: 'example_stage',
  status: 'example_status',
  subject_hash: 'example_subject_hash',
  verdict: 'example_verdict',
})
```


### MicrohubPublic

Create an instance: `const microhub_public = client.MicrohubPublic()`

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
| `links` | `any[]` |  |
| `name` | `string` |  |
| `profileImageUrl` | `any` |  |
| `slug` | `string` |  |
| `socialLinks` | `Record<string, any>` |  |
| `testimonials` | `any[]` |  |

#### Example: Load

```ts
const microhub_public = await client.MicrohubPublic().load({ slug: 'slug' })
```


### OnboardingStatus

Create an instance: `const onboarding_status = client.OnboardingStatus()`

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

```ts
const onboarding_statuss = await client.OnboardingStatus().list({ oid: "example" })
```


### OnboardingV6

Create an instance: `const onboarding_v6 = client.OnboardingV6()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### PaidUser

Create an instance: `const paid_user = client.PaidUser()`

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

```ts
const paid_users = await client.PaidUser().list()
```


### Pexel

Create an instance: `const pexel = client.Pexel()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```ts
const pexels = await client.Pexel().list()
```


### PhoneAdminAvailableAgentSource

Create an instance: `const phone_admin_available_agent_source = client.PhoneAdminAvailableAgentSource()`

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

```ts
const phone_admin_available_agent_sources = await client.PhoneAdminAvailableAgentSource().list()
```


### Product

Create an instance: `const product = client.Product()`

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
| `agents` | `any[]` |  |
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
| `product_demo_ids` | `any[]` |  |
| `product_details` | `Record<string, any>` | Product details for enterprise product creation |
| `product_id` | `string` |  |
| `product_name` | `string` |  |
| `product_url` | `string` |  |
| `pronunciation` | `any` |  |
| `regenerate_sora2` | `boolean` |  |
| `repostSource` | `any` |  |
| `repost_source` | `any` |  |
| `screenshot_url` | `any` |  |
| `social_post_ids` | `any[]` |  |
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

```ts
const product = await client.Product().load({ id: 'product_id' })
```

#### Example: List

```ts
const products = await client.Product().list()
```

#### Example: Create

```ts
const product = await client.Product().create({
  product_details: {},
  product_url: 'example_product_url',
})
```


### ProductDashboard

Create an instance: `const product_dashboard = client.ProductDashboard()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agents` | `any[]` |  |
| `date` | `string` |  |
| `pagination` | `Record<string, any>` |  |
| `phone_admin_error` | `any` |  |
| `products` | `any[]` |  |
| `selected_product` | `any` |  |
| `summary` | `Record<string, any>` |  |

#### Example: List

```ts
const product_dashboards = await client.ProductDashboard().list()
```


### ProductDashboardView

Create an instance: `const product_dashboard_view = client.ProductDashboardView()`

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

```ts
const product_dashboard_views = await client.ProductDashboardView().list({ product_id: "example" })
```


### ProductDemo

Create an instance: `const product_demo = client.ProductDemo()`

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

```ts
const product_demos = await client.ProductDemo().list()
```


### ProductLanding

Create an instance: `const product_landing = client.ProductLanding()`

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
| `microhubLinks` | `any[]` |  |
| `microhubName` | `any` |  |
| `microhubProfileImageUrl` | `any` |  |
| `microhubScreenshotUrl` | `any` |  |
| `microhubSocialLinks` | `Record<string, any>` |  |
| `microhubStatus` | `string` |  |
| `microhubTestimonials` | `any[]` |  |
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

```ts
const product_landings = await client.ProductLanding().list()
```


### PublicResumeStatus

Create an instance: `const public_resume_status = client.PublicResumeStatus()`

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

```ts
const public_resume_status = await client.PublicResumeStatus().load({ oid: 'oid' })
```


### ReRollVideo

Create an instance: `const re_roll_video = client.ReRollVideo()`

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
| `video` | `Record<string, any>` |  |

#### Example: Create

```ts
const re_roll_video = await client.ReRollVideo().create({
  queue_id: 'example_queue_id',
})
```


### ReadRootGet

Create an instance: `const read_root_get = client.ReadRootGet()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const read_root_get = await client.ReadRootGet().load()
```


### RecordDemoBooked

Create an instance: `const record_demo_booked = client.RecordDemoBooked()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `calendlyEventUri` | `any` |  |
| `calendlyInviteeUri` | `any` |  |
| `message` | `Record<string, any>` |  |
| `session` | `Record<string, any>` |  |

#### Example: Create

```ts
const record_demo_booked = await client.RecordDemoBooked().create({
  session_id: 'example_session_id',
})
```


### RefreshStat

Create an instance: `const refresh_stat = client.RefreshStat()`

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

```ts
const refresh_stat = await client.RefreshStat().create({
})
```


### RemixerClipper

Create an instance: `const remixer_clipper = client.RemixerClipper()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const remixer_clipper = await client.RemixerClipper().load()
```

#### Example: Create

```ts
const remixer_clipper = await client.RemixerClipper().create({
  identifier: 'example_identifier',
})
```


### ResetProduct

Create an instance: `const reset_product = client.ResetProduct()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const reset_product = await client.ResetProduct().load()
```

#### Example: Create

```ts
const reset_product = await client.ResetProduct().create({
})
```


### RetryWebsiteScrape

Create an instance: `const retry_website_scrape = client.RetryWebsiteScrape()`

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

```ts
const retry_website_scrape = await client.RetryWebsiteScrape().create({
  onboarding_data_id: 'example_onboarding_data_id',
  url: 'example_url',
})
```


### SaveSurvey

Create an instance: `const save_survey = client.SaveSurvey()`

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
| `survey` | `Record<string, any>` | Survey response data from frontend. |

#### Example: Create

```ts
const save_survey = await client.SaveSurvey().create({
  onboarding_data_id: 'example_onboarding_data_id',
  survey: {},
})
```


### ScanSocial

Create an instance: `const scan_social = client.ScanSocial()`

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

```ts
const scan_social = await client.ScanSocial().create({
  onboarding_data_id: 'example_onboarding_data_id',
  tiktok_handle: 'example_tiktok_handle',
})
```


### ScanSocialsPublic

Create an instance: `const scan_socials_public = client.ScanSocialsPublic()`

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

```ts
const scan_socials_public = await client.ScanSocialsPublic().create({
  onboarding_data_id: 'example_onboarding_data_id',
})
```


### ScanSocialsStatus

Create an instance: `const scan_socials_status = client.ScanSocialsStatus()`

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

```ts
const scan_socials_status = await client.ScanSocialsStatus().load()
```


### ScheduleV2

Create an instance: `const schedule_v2 = client.ScheduleV2()`

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
| `reorders` | `any[]` |  |
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

```ts
const schedule_v2 = await client.ScheduleV2().load()
```

#### Example: List

```ts
const schedule_v2s = await client.ScheduleV2().list()
```

#### Example: Create

```ts
const schedule_v2 = await client.ScheduleV2().create({
  created_at: 'example_created_at',
  id: 'example_id',
  reorders: [],
  scheduled_datetime: 'example_scheduled_datetime',
  source_type: 'example_source_type',
  status: 'example_status',
  video_id: 'example_video_id',
})
```


### Scrape

Create an instance: `const scrape = client.Scrape()`

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

```ts
const scrape = await client.Scrape().create({
  old_product_id: 'example_old_product_id',
  url: 'example_url',
})
```


### ScrapeWebsitePublic

Create an instance: `const scrape_website_public = client.ScrapeWebsitePublic()`

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

```ts
const scrape_website_public = await client.ScrapeWebsitePublic().create({
  url: 'example_url',
})
```


### ScrapedData

Create an instance: `const scraped_data = client.ScrapedData()`

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
| `imageUrls` | `any[]` |  |
| `instagram_username` | `any` |  |
| `mediaAssets` | `any[]` |  |
| `name` | `string` |  |
| `pricingAndOffers` | `string` |  |
| `targetAudience` | `string` |  |
| `url` | `string` |  |

#### Example: Create

```ts
const scraped_data = await client.ScrapedData().create({
  url: 'example_url',
})
```


### ScrapingStatus

Create an instance: `const scraping_status = client.ScrapingStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const scraping_status = await client.ScrapingStatus().load()
```


### SelfServeActivate

Create an instance: `const self_serve_activate = client.SelfServeActivate()`

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

```ts
const self_serve_activate = await client.SelfServeActivate().create({
  onboarding_data_id: 'example_onboarding_data_id',
})
```


### Seo

Create an instance: `const seo = client.Seo()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const seo = await client.Seo().load()
```


### SeoAiMention

Create an instance: `const seo_ai_mention = client.SeoAiMention()`

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
| `evidence` | `Record<string, any>` |  |
| `geo` | `string` |  |
| `language` | `string` |  |
| `primary_url` | `string` |  |
| `prompt_text` | `string` |  |
| `run_week` | `string` |  |
| `secondary_urls` | `any[]` |  |

#### Example: List

```ts
const seo_ai_mentions = await client.SeoAiMention().list()
```


### SeoBacklink

Create an instance: `const seo_backlink = client.SeoBacklink()`

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

```ts
const seo_backlinks = await client.SeoBacklink().list()
```


### SeoKeyword

Create an instance: `const seo_keyword = client.SeoKeyword()`

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

```ts
const seo_keywords = await client.SeoKeyword().list()
```


### SeoOverview

Create an instance: `const seo_overview = client.SeoOverview()`

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

```ts
const seo_overviews = await client.SeoOverview().list()
```


### SeoTraffic

Create an instance: `const seo_traffic = client.SeoTraffic()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `end_date` | `string` |  |
| `series` | `any[]` |  |
| `site_url` | `string` |  |
| `start_date` | `string` |  |
| `top_countries` | `any[]` |  |
| `top_pages` | `any[]` |  |
| `top_queries` | `any[]` |  |
| `totals` | `Record<string, any>` |  |

#### Example: List

```ts
const seo_traffics = await client.SeoTraffic().list()
```


### ShareAccessLink

Create an instance: `const share_access_link = client.ShareAccessLink()`

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

```ts
const share_access_link = await client.ShareAccessLink().create({
  share_token: 'example_share_token',
  share_url: 'example_share_url',
})
```


### Site

Create an instance: `const site = client.Site()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const site = await client.Site().load()
```


### Slide

Create an instance: `const slide = client.Slide()`

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

```ts
const slide = await client.Slide().create({
  carousel_id: 'example_carousel_id',
  slide_index: 1,
})
```


### SlugValidation

Create an instance: `const slug_validation = client.SlugValidation()`

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

```ts
const slug_validation = await client.SlugValidation().load({ slug: 'slug' })
```


### Social

Create an instance: `const social = client.Social()`

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

```ts
const social = await client.Social().load()
```

#### Example: List

```ts
const socials = await client.Social().list()
```

#### Example: Create

```ts
const social = await client.Social().create({
  code: 'example_code',
  code_verifier: 'example_code_verifier',
})
```


### SocialScanPreview

Create an instance: `const social_scan_preview = client.SocialScanPreview()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `instagram_handle` | `any` | Instagram username/handle to scrape |
| `posts` | `any[]` |  |
| `success` | `boolean` |  |
| `tiktok_handle` | `any` | TikTok username/handle to scrape |

#### Example: Create

```ts
const social_scan_preview = await client.SocialScanPreview().create({
})
```


### SocialScanProcess

Create an instance: `const social_scan_process = client.SocialScanProcess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `posts` | `any[]` |  |
| `product_id` | `string` |  |
| `success` | `boolean` |  |
| `task_id` | `string` |  |

#### Example: Create

```ts
const social_scan_process = await client.SocialScanProcess().create({
  posts: [],
  product_id: 'example_product_id',
})
```


### SocialScanSave

Create an instance: `const social_scan_save = client.SocialScanSave()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `media_asset_ids` | `any[]` |  |
| `posts` | `any[]` |  |
| `product_id` | `string` |  |
| `success` | `boolean` |  |

#### Example: Create

```ts
const social_scan_save = await client.SocialScanSave().create({
  posts: [],
  product_id: 'example_product_id',
})
```


### Sora2Avatar

Create an instance: `const sora2_avatar = client.Sora2Avatar()`

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
| `logs` | `Record<string, any>` |  |
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

```ts
const sora2_avatar = await client.Sora2Avatar().load({ id: 'sora2_avatar_id' })
```

#### Example: List

```ts
const sora2_avatars = await client.Sora2Avatar().list()
```

#### Example: Create

```ts
const sora2_avatar = await client.Sora2Avatar().create({
  prompt_key: 'example_prompt_key',
  selected_age_bucket: 'example_selected_age_bucket',
  selected_gender: 'example_selected_gender',
  selected_race: 'example_selected_race',
  sora2_video_url: 'example_sora2_video_url',
})
```


### Sora2AvatarAssetUpload

Create an instance: `const sora2_avatar_asset_upload = client.Sora2AvatarAssetUpload()`

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

```ts
const sora2_avatar_asset_upload = await client.Sora2AvatarAssetUpload().create({
  file: 'example_file',
  s3_key: 'example_s3_key',
  upload_type: 'example_upload_type',
  url: 'example_url',
})
```


### Sora2AvatarStat

Create an instance: `const sora2_avatar_stat = client.Sora2AvatarStat()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `by_age_bucket` | `Record<string, any>` |  |
| `by_gender` | `Record<string, any>` |  |
| `by_prompt_key` | `Record<string, any>` |  |
| `by_race` | `Record<string, any>` |  |
| `completed_avatars` | `number` |  |
| `completion_rate` | `number` |  |
| `total_avatars` | `number` |  |

#### Example: Load

```ts
const sora2_avatar_stat = await client.Sora2AvatarStat().load()
```


### Stat

Create an instance: `const stat = client.Stat()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```ts
const stats = await client.Stat().list()
```


### StatsRefreshBackfill

Create an instance: `const stats_refresh_backfill = client.StatsRefreshBackfill()`

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

```ts
const stats_refresh_backfill = await client.StatsRefreshBackfill().create({
})
```


### StatsRefreshIssue

Create an instance: `const stats_refresh_issue = client.StatsRefreshIssue()`

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

```ts
const stats_refresh_issues = await client.StatsRefreshIssue().list()
```


### StatsRefreshOverview

Create an instance: `const stats_refresh_overview = client.StatsRefreshOverview()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_run` | `any` |  |
| `aged_over_24h` | `number` |  |
| `backlog_preview` | `any[]` |  |
| `coverage_percent` | `number` |  |
| `customer_counts` | `Record<string, any>` |  |
| `date` | `string` |  |
| `generated_at` | `string` |  |
| `method_counts` | `Record<string, any>` |  |
| `platform_counts` | `Record<string, any>` |  |
| `platform_units_resolved` | `number` |  |
| `platform_units_total` | `number` |  |
| `platform_units_unresolved` | `number` |  |
| `posted_entries` | `number` |  |
| `reason_counts` | `Record<string, any>` |  |
| `sla_deadline_et` | `string` |  |
| `stale_after_sla` | `number` |  |
| `top_affected_customers` | `any[]` |  |

#### Example: List

```ts
const stats_refresh_overviews = await client.StatsRefreshOverview().list()
```


### StatsRefreshRunSummary

Create an instance: `const stats_refresh_run_summary = client.StatsRefreshRunSummary()`

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

```ts
const stats_refresh_run_summarys = await client.StatsRefreshRunSummary().list()
```


### StatsRefreshTaskTrigger

Create an instance: `const stats_refresh_task_trigger = client.StatsRefreshTaskTrigger()`

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

```ts
const stats_refresh_task_trigger = await client.StatsRefreshTaskTrigger().create({
  message: 'example_message',
  status: 'example_status',
  target_date: 'example_target_date',
  task_id: 'example_task_id',
})
```


### Stripe

Create an instance: `const stripe = client.Stripe()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |


### Style

Create an instance: `const style = client.Style()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const style = await client.Style().load()
```


### Template

Create an instance: `const template = client.Template()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const template = await client.Template().load()
```


### TikTokCreatorInfo

Create an instance: `const tik_tok_creator_info = client.TikTokCreatorInfo()`

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
| `privacyLevelOptions` | `any[]` |  |
| `stitchDisabled` | `boolean` |  |

#### Example: List

```ts
const tik_tok_creator_infos = await client.TikTokCreatorInfo().list()
```


### TopPost

Create an instance: `const top_post = client.TopPost()`

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
| `platforms` | `any[]` |  |
| `scheduled_datetime` | `string` |  |
| `user_email` | `string` |  |
| `user_id` | `string` |  |
| `views` | `number` |  |

#### Example: List

```ts
const top_posts = await client.TopPost().list({ date: "example" })
```


### UploadPostAgent

Create an instance: `const upload_post_agent = client.UploadPostAgent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const upload_post_agent = await client.UploadPostAgent().create({
})
```


### User

Create an instance: `const user = client.User()`

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
| `agents` | `any[]` |  |
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

```ts
const user = await client.User().load({ id: 'user_id' })
```


### UserAgent

Create an instance: `const user_agent = client.UserAgent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent` | `Record<string, any>` |  |
| `assigned_at` | `string` |  |
| `assignment_id` | `string` |  |
| `expires_at` | `any` |  |
| `id` | `string` |  |
| `status` | `string` |  |

#### Example: List

```ts
const user_agents = await client.UserAgent().list({ id: "example" })
```

#### Example: Create

```ts
const user_agent = await client.UserAgent().create({
  id: 'example_id',
  agent: {},
  assigned_at: 'example_assigned_at',
  assignment_id: 'example_assignment_id',
  status: 'example_status',
})
```


### UserHealthDetail

Create an instance: `const user_health_detail = client.UserHealthDetail()`

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
| `assigned_agents` | `any[]` |  |
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
| `yesterday_failed_entries` | `any[]` |  |
| `yesterday_posted` | `number` |  |
| `yesterday_total` | `number` |  |

#### Example: List

```ts
const user_health_details = await client.UserHealthDetail().list({ id: "example" })
```


### UserWithAvatarSubmission

Create an instance: `const user_with_avatar_submission = client.UserWithAvatarSubmission()`

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

```ts
const user_with_avatar_submissions = await client.UserWithAvatarSubmission().list()
```


### UsersHealth

Create an instance: `const users_health = client.UsersHealth()`

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

```ts
const users_healths = await client.UsersHealth().list()
```


### Video

Create an instance: `const video = client.Video()`

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

```ts
const video = await client.Video().load({ id: 'video_id' })
```

#### Example: Create

```ts
const video = await client.Video().create({
  captions: 'example_captions',
  title: 'example_title',
  url: 'example_url',
  video_id: 'example_video_id',
})
```


### VideoRemixerWorker

Create an instance: `const video_remixer_worker = client.VideoRemixerWorker()`

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
| `kinds` | `any[]` |  |
| `lease_token` | `string` |  |
| `limit` | `number` |  |
| `manifest` | `string` |  |
| `model` | `string` |  |
| `processing_seconds` | `number` |  |
| `prompt_version` | `string` |  |
| `result` | `Record<string, any>` |  |
| `thumbnail` | `string` |  |
| `tier` | `string` |  |
| `worker_id` | `string` |  |

#### Example: Create

```ts
const video_remixer_worker = await client.VideoRemixerWorker().create({
  error: 'example_error',
  file: 'example_file',
  lease_token: 'example_lease_token',
  manifest: 'example_manifest',
  model: 'example_model',
  prompt_version: 'example_prompt_version',
  thumbnail: 'example_thumbnail',
  worker_id: 'example_worker_id',
})
```


### WatchdogRecovery

Create an instance: `const watchdog_recovery = client.WatchdogRecovery()`

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

```ts
const watchdog_recovery = await client.WatchdogRecovery().load()
```

#### Example: Create

```ts
const watchdog_recovery = await client.WatchdogRecovery().create({
  item_id: 'example_item_id',
  passed: true,
  table: 'example_table',
})
```


### WinningAd

Create an instance: `const winning_ad = client.WinningAd()`

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

```ts
const winning_ads = await client.WinningAd().list()
```


### XAdaptation

Create an instance: `const x_adaptation = client.XAdaptation()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const x_adaptation = await client.XAdaptation().load()
```


### ZerohumanAdminAccount

Create an instance: `const zerohuman_admin_account = client.ZerohumanAdminAccount()`

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

```ts
const zerohuman_admin_accounts = await client.ZerohumanAdminAccount().list()
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
cracked-api-reference/
├── src/
│   ├── CrackedApiReferenceSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { CrackedApiReferenceSDK } from '@voxgig-sdk/cracked-api-reference-sdk'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const admininsight = client.AdminInsight()
await admininsight.list()

// admininsight.data() now returns the admininsight data from the last `list`
// admininsight.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
