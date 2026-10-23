# CrackedApiReference Golang SDK Reference

Complete API reference for the CrackedApiReference Golang SDK.


## CrackedApiReferenceSDK

### Constructor

```go
func NewCrackedApiReferenceSDK(options map[string]any) *CrackedApiReferenceSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *CrackedApiReferenceSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *CrackedApiReferenceSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Activate(data map[string]any) CrackedApiReferenceEntity`

Create a new `Activate` entity instance. Pass `nil` for no initial data.

#### `ActivateUser(data map[string]any) CrackedApiReferenceEntity`

Create a new `ActivateUser` entity instance. Pass `nil` for no initial data.

#### `ActiveOnboarding(data map[string]any) CrackedApiReferenceEntity`

Create a new `ActiveOnboarding` entity instance. Pass `nil` for no initial data.

#### `Admin(data map[string]any) CrackedApiReferenceEntity`

Create a new `Admin` entity instance. Pass `nil` for no initial data.

#### `AdminAccountReset(data map[string]any) CrackedApiReferenceEntity`

Create a new `AdminAccountReset` entity instance. Pass `nil` for no initial data.

#### `AdminCarousel(data map[string]any) CrackedApiReferenceEntity`

Create a new `AdminCarousel` entity instance. Pass `nil` for no initial data.

#### `AdminCarouselDemoReview(data map[string]any) CrackedApiReferenceEntity`

Create a new `AdminCarouselDemoReview` entity instance. Pass `nil` for no initial data.

#### `AdminCustomer(data map[string]any) CrackedApiReferenceEntity`

Create a new `AdminCustomer` entity instance. Pass `nil` for no initial data.

#### `AdminCustomerSuccess(data map[string]any) CrackedApiReferenceEntity`

Create a new `AdminCustomerSuccess` entity instance. Pass `nil` for no initial data.

#### `AdminGeneratedVideo(data map[string]any) CrackedApiReferenceEntity`

Create a new `AdminGeneratedVideo` entity instance. Pass `nil` for no initial data.

#### `AdminHealthrx(data map[string]any) CrackedApiReferenceEntity`

Create a new `AdminHealthrx` entity instance. Pass `nil` for no initial data.

#### `AdminInsight(data map[string]any) CrackedApiReferenceEntity`

Create a new `AdminInsight` entity instance. Pass `nil` for no initial data.

#### `AdminLandingTask(data map[string]any) CrackedApiReferenceEntity`

Create a new `AdminLandingTask` entity instance. Pass `nil` for no initial data.

#### `AdminMetricsSummary(data map[string]any) CrackedApiReferenceEntity`

Create a new `AdminMetricsSummary` entity instance. Pass `nil` for no initial data.

#### `AdminPost(data map[string]any) CrackedApiReferenceEntity`

Create a new `AdminPost` entity instance. Pass `nil` for no initial data.

#### `AdminRecentSignup(data map[string]any) CrackedApiReferenceEntity`

Create a new `AdminRecentSignup` entity instance. Pass `nil` for no initial data.

#### `AdminSlideshowDiag(data map[string]any) CrackedApiReferenceEntity`

Create a new `AdminSlideshowDiag` entity instance. Pass `nil` for no initial data.

#### `AdminSlideshowImport(data map[string]any) CrackedApiReferenceEntity`

Create a new `AdminSlideshowImport` entity instance. Pass `nil` for no initial data.

#### `AdminUserView(data map[string]any) CrackedApiReferenceEntity`

Create a new `AdminUserView` entity instance. Pass `nil` for no initial data.

#### `AdminUsersTableItem(data map[string]any) CrackedApiReferenceEntity`

Create a new `AdminUsersTableItem` entity instance. Pass `nil` for no initial data.

#### `AdminVideoRemixer(data map[string]any) CrackedApiReferenceEntity`

Create a new `AdminVideoRemixer` entity instance. Pass `nil` for no initial data.

#### `AdvanceStep(data map[string]any) CrackedApiReferenceEntity`

Create a new `AdvanceStep` entity instance. Pass `nil` for no initial data.

#### `Agent(data map[string]any) CrackedApiReferenceEntity`

Create a new `Agent` entity instance. Pass `nil` for no initial data.

#### `AgentAccessCustomersHealth(data map[string]any) CrackedApiReferenceEntity`

Create a new `AgentAccessCustomersHealth` entity instance. Pass `nil` for no initial data.

#### `AgentAccessOverview(data map[string]any) CrackedApiReferenceEntity`

Create a new `AgentAccessOverview` entity instance. Pass `nil` for no initial data.

#### `AgentAccessPhilHourlyNotification(data map[string]any) CrackedApiReferenceEntity`

Create a new `AgentAccessPhilHourlyNotification` entity instance. Pass `nil` for no initial data.

#### `AgentAccessPhilStatsRefresh(data map[string]any) CrackedApiReferenceEntity`

Create a new `AgentAccessPhilStatsRefresh` entity instance. Pass `nil` for no initial data.

#### `AgentAccessPhilVideo(data map[string]any) CrackedApiReferenceEntity`

Create a new `AgentAccessPhilVideo` entity instance. Pass `nil` for no initial data.

#### `AgentAccessUserAgent(data map[string]any) CrackedApiReferenceEntity`

Create a new `AgentAccessUserAgent` entity instance. Pass `nil` for no initial data.

#### `AgentAccessUserPhoneFarm(data map[string]any) CrackedApiReferenceEntity`

Create a new `AgentAccessUserPhoneFarm` entity instance. Pass `nil` for no initial data.

#### `AgentAccessUserPost(data map[string]any) CrackedApiReferenceEntity`

Create a new `AgentAccessUserPost` entity instance. Pass `nil` for no initial data.

#### `AgentAccessUserSummary(data map[string]any) CrackedApiReferenceEntity`

Create a new `AgentAccessUserSummary` entity instance. Pass `nil` for no initial data.

#### `AgentAccessUserVideo(data map[string]any) CrackedApiReferenceEntity`

Create a new `AgentAccessUserVideo` entity instance. Pass `nil` for no initial data.

#### `AgentAccessUserWinningAd(data map[string]any) CrackedApiReferenceEntity`

Create a new `AgentAccessUserWinningAd` entity instance. Pass `nil` for no initial data.

#### `AgentAccessWinningAdsSummary(data map[string]any) CrackedApiReferenceEntity`

Create a new `AgentAccessWinningAdsSummary` entity instance. Pass `nil` for no initial data.

#### `AgentDetail(data map[string]any) CrackedApiReferenceEntity`

Create a new `AgentDetail` entity instance. Pass `nil` for no initial data.

#### `AgentHealth(data map[string]any) CrackedApiReferenceEntity`

Create a new `AgentHealth` entity instance. Pass `nil` for no initial data.

#### `AgentHealthCustomerOption(data map[string]any) CrackedApiReferenceEntity`

Create a new `AgentHealthCustomerOption` entity instance. Pass `nil` for no initial data.

#### `AgentHealthDetail(data map[string]any) CrackedApiReferenceEntity`

Create a new `AgentHealthDetail` entity instance. Pass `nil` for no initial data.

#### `AgentPost(data map[string]any) CrackedApiReferenceEntity`

Create a new `AgentPost` entity instance. Pass `nil` for no initial data.

#### `AgentStat(data map[string]any) CrackedApiReferenceEntity`

Create a new `AgentStat` entity instance. Pass `nil` for no initial data.

#### `AgentSummary(data map[string]any) CrackedApiReferenceEntity`

Create a new `AgentSummary` entity instance. Pass `nil` for no initial data.

#### `AgentsSummary(data map[string]any) CrackedApiReferenceEntity`

Create a new `AgentsSummary` entity instance. Pass `nil` for no initial data.

#### `AnalysisStatus(data map[string]any) CrackedApiReferenceEntity`

Create a new `AnalysisStatus` entity instance. Pass `nil` for no initial data.

#### `AnalyticsPost(data map[string]any) CrackedApiReferenceEntity`

Create a new `AnalyticsPost` entity instance. Pass `nil` for no initial data.

#### `AnalyzeProduct(data map[string]any) CrackedApiReferenceEntity`

Create a new `AnalyzeProduct` entity instance. Pass `nil` for no initial data.

#### `AssignAgent(data map[string]any) CrackedApiReferenceEntity`

Create a new `AssignAgent` entity instance. Pass `nil` for no initial data.

#### `Auth(data map[string]any) CrackedApiReferenceEntity`

Create a new `Auth` entity instance. Pass `nil` for no initial data.

#### `AutoScheduleSetting(data map[string]any) CrackedApiReferenceEntity`

Create a new `AutoScheduleSetting` entity instance. Pass `nil` for no initial data.

#### `BulkTikTokStatsUpdate(data map[string]any) CrackedApiReferenceEntity`

Create a new `BulkTikTokStatsUpdate` entity instance. Pass `nil` for no initial data.

#### `Carousel(data map[string]any) CrackedApiReferenceEntity`

Create a new `Carousel` entity instance. Pass `nil` for no initial data.

#### `CarouselAgentDetail(data map[string]any) CrackedApiReferenceEntity`

Create a new `CarouselAgentDetail` entity instance. Pass `nil` for no initial data.

#### `CarouselStatus(data map[string]any) CrackedApiReferenceEntity`

Create a new `CarouselStatus` entity instance. Pass `nil` for no initial data.

#### `Chat(data map[string]any) CrackedApiReferenceEntity`

Create a new `Chat` entity instance. Pass `nil` for no initial data.

#### `ChatHistory(data map[string]any) CrackedApiReferenceEntity`

Create a new `ChatHistory` entity instance. Pass `nil` for no initial data.

#### `ChatSession(data map[string]any) CrackedApiReferenceEntity`

Create a new `ChatSession` entity instance. Pass `nil` for no initial data.

#### `Comment(data map[string]any) CrackedApiReferenceEntity`

Create a new `Comment` entity instance. Pass `nil` for no initial data.

#### `CommentCampaign(data map[string]any) CrackedApiReferenceEntity`

Create a new `CommentCampaign` entity instance. Pass `nil` for no initial data.

#### `CompleteChatCheckout(data map[string]any) CrackedApiReferenceEntity`

Create a new `CompleteChatCheckout` entity instance. Pass `nil` for no initial data.

#### `CreateBlackoutSora2Video(data map[string]any) CrackedApiReferenceEntity`

Create a new `CreateBlackoutSora2Video` entity instance. Pass `nil` for no initial data.

#### `CreateCarousel(data map[string]any) CrackedApiReferenceEntity`

Create a new `CreateCarousel` entity instance. Pass `nil` for no initial data.

#### `CreateProduct(data map[string]any) CrackedApiReferenceEntity`

Create a new `CreateProduct` entity instance. Pass `nil` for no initial data.

#### `CreateResetProductV6(data map[string]any) CrackedApiReferenceEntity`

Create a new `CreateResetProductV6` entity instance. Pass `nil` for no initial data.

#### `CreateSora2Video(data map[string]any) CrackedApiReferenceEntity`

Create a new `CreateSora2Video` entity instance. Pass `nil` for no initial data.

#### `CreateVariation(data map[string]any) CrackedApiReferenceEntity`

Create a new `CreateVariation` entity instance. Pass `nil` for no initial data.

#### `Customer(data map[string]any) CrackedApiReferenceEntity`

Create a new `Customer` entity instance. Pass `nil` for no initial data.

#### `CustomerHealth(data map[string]any) CrackedApiReferenceEntity`

Create a new `CustomerHealth` entity instance. Pass `nil` for no initial data.

#### `CustomerHealthAllCustomersItem(data map[string]any) CrackedApiReferenceEntity`

Create a new `CustomerHealthAllCustomersItem` entity instance. Pass `nil` for no initial data.

#### `CustomerHealthViewsSummary(data map[string]any) CrackedApiReferenceEntity`

Create a new `CustomerHealthViewsSummary` entity instance. Pass `nil` for no initial data.

#### `Daily(data map[string]any) CrackedApiReferenceEntity`

Create a new `Daily` entity instance. Pass `nil` for no initial data.

#### `DailyStatus(data map[string]any) CrackedApiReferenceEntity`

Create a new `DailyStatus` entity instance. Pass `nil` for no initial data.

#### `DedicatedAgentsDashboard(data map[string]any) CrackedApiReferenceEntity`

Create a new `DedicatedAgentsDashboard` entity instance. Pass `nil` for no initial data.

#### `EnterpriseAgent(data map[string]any) CrackedApiReferenceEntity`

Create a new `EnterpriseAgent` entity instance. Pass `nil` for no initial data.

#### `EnterpriseProduct(data map[string]any) CrackedApiReferenceEntity`

Create a new `EnterpriseProduct` entity instance. Pass `nil` for no initial data.

#### `ExactAvailability(data map[string]any) CrackedApiReferenceEntity`

Create a new `ExactAvailability` entity instance. Pass `nil` for no initial data.

#### `ExactFormula(data map[string]any) CrackedApiReferenceEntity`

Create a new `ExactFormula` entity instance. Pass `nil` for no initial data.

#### `ExtractV2(data map[string]any) CrackedApiReferenceEntity`

Create a new `ExtractV2` entity instance. Pass `nil` for no initial data.

#### `FailedPost(data map[string]any) CrackedApiReferenceEntity`

Create a new `FailedPost` entity instance. Pass `nil` for no initial data.

#### `File(data map[string]any) CrackedApiReferenceEntity`

Create a new `File` entity instance. Pass `nil` for no initial data.

#### `GenerateBlackoutSora2Prompt(data map[string]any) CrackedApiReferenceEntity`

Create a new `GenerateBlackoutSora2Prompt` entity instance. Pass `nil` for no initial data.

#### `GeneratePomelliDemo(data map[string]any) CrackedApiReferenceEntity`

Create a new `GeneratePomelliDemo` entity instance. Pass `nil` for no initial data.

#### `GeneratePrompt(data map[string]any) CrackedApiReferenceEntity`

Create a new `GeneratePrompt` entity instance. Pass `nil` for no initial data.

#### `GenerateSora2Prompt(data map[string]any) CrackedApiReferenceEntity`

Create a new `GenerateSora2Prompt` entity instance. Pass `nil` for no initial data.

#### `Healthrx(data map[string]any) CrackedApiReferenceEntity`

Create a new `Healthrx` entity instance. Pass `nil` for no initial data.

#### `InitResetProductV6(data map[string]any) CrackedApiReferenceEntity`

Create a new `InitResetProductV6` entity instance. Pass `nil` for no initial data.

#### `Iri(data map[string]any) CrackedApiReferenceEntity`

Create a new `Iri` entity instance. Pass `nil` for no initial data.

#### `IrisCapability(data map[string]any) CrackedApiReferenceEntity`

Create a new `IrisCapability` entity instance. Pass `nil` for no initial data.

#### `IrisChat(data map[string]any) CrackedApiReferenceEntity`

Create a new `IrisChat` entity instance. Pass `nil` for no initial data.

#### `IrisConnector(data map[string]any) CrackedApiReferenceEntity`

Create a new `IrisConnector` entity instance. Pass `nil` for no initial data.

#### `IrisStatus(data map[string]any) CrackedApiReferenceEntity`

Create a new `IrisStatus` entity instance. Pass `nil` for no initial data.

#### `IrisTask(data map[string]any) CrackedApiReferenceEntity`

Create a new `IrisTask` entity instance. Pass `nil` for no initial data.

#### `IrisUsage(data map[string]any) CrackedApiReferenceEntity`

Create a new `IrisUsage` entity instance. Pass `nil` for no initial data.

#### `Landing(data map[string]any) CrackedApiReferenceEntity`

Create a new `Landing` entity instance. Pass `nil` for no initial data.

#### `LandingStat(data map[string]any) CrackedApiReferenceEntity`

Create a new `LandingStat` entity instance. Pass `nil` for no initial data.

#### `LandingStatus(data map[string]any) CrackedApiReferenceEntity`

Create a new `LandingStatus` entity instance. Pass `nil` for no initial data.

#### `LinkInBio(data map[string]any) CrackedApiReferenceEntity`

Create a new `LinkInBio` entity instance. Pass `nil` for no initial data.

#### `LinkInDm(data map[string]any) CrackedApiReferenceEntity`

Create a new `LinkInDm` entity instance. Pass `nil` for no initial data.

#### `LinkInPost(data map[string]any) CrackedApiReferenceEntity`

Create a new `LinkInPost` entity instance. Pass `nil` for no initial data.

#### `LinkUser(data map[string]any) CrackedApiReferenceEntity`

Create a new `LinkUser` entity instance. Pass `nil` for no initial data.

#### `MediaAsset(data map[string]any) CrackedApiReferenceEntity`

Create a new `MediaAsset` entity instance. Pass `nil` for no initial data.

#### `Men(data map[string]any) CrackedApiReferenceEntity`

Create a new `Men` entity instance. Pass `nil` for no initial data.

#### `Microdrama(data map[string]any) CrackedApiReferenceEntity`

Create a new `Microdrama` entity instance. Pass `nil` for no initial data.

#### `MicrohubPublic(data map[string]any) CrackedApiReferenceEntity`

Create a new `MicrohubPublic` entity instance. Pass `nil` for no initial data.

#### `OnboardingStatus(data map[string]any) CrackedApiReferenceEntity`

Create a new `OnboardingStatus` entity instance. Pass `nil` for no initial data.

#### `OnboardingV6(data map[string]any) CrackedApiReferenceEntity`

Create a new `OnboardingV6` entity instance. Pass `nil` for no initial data.

#### `PaidUser(data map[string]any) CrackedApiReferenceEntity`

Create a new `PaidUser` entity instance. Pass `nil` for no initial data.

#### `Pexel(data map[string]any) CrackedApiReferenceEntity`

Create a new `Pexel` entity instance. Pass `nil` for no initial data.

#### `PhoneAdminAvailableAgentSource(data map[string]any) CrackedApiReferenceEntity`

Create a new `PhoneAdminAvailableAgentSource` entity instance. Pass `nil` for no initial data.

#### `Product(data map[string]any) CrackedApiReferenceEntity`

Create a new `Product` entity instance. Pass `nil` for no initial data.

#### `ProductDashboard(data map[string]any) CrackedApiReferenceEntity`

Create a new `ProductDashboard` entity instance. Pass `nil` for no initial data.

#### `ProductDashboardView(data map[string]any) CrackedApiReferenceEntity`

Create a new `ProductDashboardView` entity instance. Pass `nil` for no initial data.

#### `ProductDemo(data map[string]any) CrackedApiReferenceEntity`

Create a new `ProductDemo` entity instance. Pass `nil` for no initial data.

#### `ProductLanding(data map[string]any) CrackedApiReferenceEntity`

Create a new `ProductLanding` entity instance. Pass `nil` for no initial data.

#### `PublicResumeStatus(data map[string]any) CrackedApiReferenceEntity`

Create a new `PublicResumeStatus` entity instance. Pass `nil` for no initial data.

#### `ReRollVideo(data map[string]any) CrackedApiReferenceEntity`

Create a new `ReRollVideo` entity instance. Pass `nil` for no initial data.

#### `ReadRootGet(data map[string]any) CrackedApiReferenceEntity`

Create a new `ReadRootGet` entity instance. Pass `nil` for no initial data.

#### `RecordDemoBooked(data map[string]any) CrackedApiReferenceEntity`

Create a new `RecordDemoBooked` entity instance. Pass `nil` for no initial data.

#### `RefreshStat(data map[string]any) CrackedApiReferenceEntity`

Create a new `RefreshStat` entity instance. Pass `nil` for no initial data.

#### `RemixerClipper(data map[string]any) CrackedApiReferenceEntity`

Create a new `RemixerClipper` entity instance. Pass `nil` for no initial data.

#### `ResetProduct(data map[string]any) CrackedApiReferenceEntity`

Create a new `ResetProduct` entity instance. Pass `nil` for no initial data.

#### `RetryWebsiteScrape(data map[string]any) CrackedApiReferenceEntity`

Create a new `RetryWebsiteScrape` entity instance. Pass `nil` for no initial data.

#### `SaveSurvey(data map[string]any) CrackedApiReferenceEntity`

Create a new `SaveSurvey` entity instance. Pass `nil` for no initial data.

#### `ScanSocial(data map[string]any) CrackedApiReferenceEntity`

Create a new `ScanSocial` entity instance. Pass `nil` for no initial data.

#### `ScanSocialsPublic(data map[string]any) CrackedApiReferenceEntity`

Create a new `ScanSocialsPublic` entity instance. Pass `nil` for no initial data.

#### `ScanSocialsStatus(data map[string]any) CrackedApiReferenceEntity`

Create a new `ScanSocialsStatus` entity instance. Pass `nil` for no initial data.

#### `ScheduleV2(data map[string]any) CrackedApiReferenceEntity`

Create a new `ScheduleV2` entity instance. Pass `nil` for no initial data.

#### `Scrape(data map[string]any) CrackedApiReferenceEntity`

Create a new `Scrape` entity instance. Pass `nil` for no initial data.

#### `ScrapeWebsitePublic(data map[string]any) CrackedApiReferenceEntity`

Create a new `ScrapeWebsitePublic` entity instance. Pass `nil` for no initial data.

#### `ScrapedData(data map[string]any) CrackedApiReferenceEntity`

Create a new `ScrapedData` entity instance. Pass `nil` for no initial data.

#### `ScrapingStatus(data map[string]any) CrackedApiReferenceEntity`

Create a new `ScrapingStatus` entity instance. Pass `nil` for no initial data.

#### `SelfServeActivate(data map[string]any) CrackedApiReferenceEntity`

Create a new `SelfServeActivate` entity instance. Pass `nil` for no initial data.

#### `Seo(data map[string]any) CrackedApiReferenceEntity`

Create a new `Seo` entity instance. Pass `nil` for no initial data.

#### `SeoAiMention(data map[string]any) CrackedApiReferenceEntity`

Create a new `SeoAiMention` entity instance. Pass `nil` for no initial data.

#### `SeoBacklink(data map[string]any) CrackedApiReferenceEntity`

Create a new `SeoBacklink` entity instance. Pass `nil` for no initial data.

#### `SeoKeyword(data map[string]any) CrackedApiReferenceEntity`

Create a new `SeoKeyword` entity instance. Pass `nil` for no initial data.

#### `SeoOverview(data map[string]any) CrackedApiReferenceEntity`

Create a new `SeoOverview` entity instance. Pass `nil` for no initial data.

#### `SeoTraffic(data map[string]any) CrackedApiReferenceEntity`

Create a new `SeoTraffic` entity instance. Pass `nil` for no initial data.

#### `ShareAccessLink(data map[string]any) CrackedApiReferenceEntity`

Create a new `ShareAccessLink` entity instance. Pass `nil` for no initial data.

#### `Site(data map[string]any) CrackedApiReferenceEntity`

Create a new `Site` entity instance. Pass `nil` for no initial data.

#### `Slide(data map[string]any) CrackedApiReferenceEntity`

Create a new `Slide` entity instance. Pass `nil` for no initial data.

#### `SlugValidation(data map[string]any) CrackedApiReferenceEntity`

Create a new `SlugValidation` entity instance. Pass `nil` for no initial data.

#### `Social(data map[string]any) CrackedApiReferenceEntity`

Create a new `Social` entity instance. Pass `nil` for no initial data.

#### `SocialScanPreview(data map[string]any) CrackedApiReferenceEntity`

Create a new `SocialScanPreview` entity instance. Pass `nil` for no initial data.

#### `SocialScanProcess(data map[string]any) CrackedApiReferenceEntity`

Create a new `SocialScanProcess` entity instance. Pass `nil` for no initial data.

#### `SocialScanSave(data map[string]any) CrackedApiReferenceEntity`

Create a new `SocialScanSave` entity instance. Pass `nil` for no initial data.

#### `Sora2Avatar(data map[string]any) CrackedApiReferenceEntity`

Create a new `Sora2Avatar` entity instance. Pass `nil` for no initial data.

#### `Sora2AvatarAssetUpload(data map[string]any) CrackedApiReferenceEntity`

Create a new `Sora2AvatarAssetUpload` entity instance. Pass `nil` for no initial data.

#### `Sora2AvatarStat(data map[string]any) CrackedApiReferenceEntity`

Create a new `Sora2AvatarStat` entity instance. Pass `nil` for no initial data.

#### `Stat(data map[string]any) CrackedApiReferenceEntity`

Create a new `Stat` entity instance. Pass `nil` for no initial data.

#### `StatsRefreshBackfill(data map[string]any) CrackedApiReferenceEntity`

Create a new `StatsRefreshBackfill` entity instance. Pass `nil` for no initial data.

#### `StatsRefreshIssue(data map[string]any) CrackedApiReferenceEntity`

Create a new `StatsRefreshIssue` entity instance. Pass `nil` for no initial data.

#### `StatsRefreshOverview(data map[string]any) CrackedApiReferenceEntity`

Create a new `StatsRefreshOverview` entity instance. Pass `nil` for no initial data.

#### `StatsRefreshRunSummary(data map[string]any) CrackedApiReferenceEntity`

Create a new `StatsRefreshRunSummary` entity instance. Pass `nil` for no initial data.

#### `StatsRefreshTaskTrigger(data map[string]any) CrackedApiReferenceEntity`

Create a new `StatsRefreshTaskTrigger` entity instance. Pass `nil` for no initial data.

#### `Stripe(data map[string]any) CrackedApiReferenceEntity`

Create a new `Stripe` entity instance. Pass `nil` for no initial data.

#### `Style(data map[string]any) CrackedApiReferenceEntity`

Create a new `Style` entity instance. Pass `nil` for no initial data.

#### `Template(data map[string]any) CrackedApiReferenceEntity`

Create a new `Template` entity instance. Pass `nil` for no initial data.

#### `TikTokCreatorInfo(data map[string]any) CrackedApiReferenceEntity`

Create a new `TikTokCreatorInfo` entity instance. Pass `nil` for no initial data.

#### `TopPost(data map[string]any) CrackedApiReferenceEntity`

Create a new `TopPost` entity instance. Pass `nil` for no initial data.

#### `UploadPostAgent(data map[string]any) CrackedApiReferenceEntity`

Create a new `UploadPostAgent` entity instance. Pass `nil` for no initial data.

#### `User(data map[string]any) CrackedApiReferenceEntity`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `UserAgent(data map[string]any) CrackedApiReferenceEntity`

Create a new `UserAgent` entity instance. Pass `nil` for no initial data.

#### `UserHealthDetail(data map[string]any) CrackedApiReferenceEntity`

Create a new `UserHealthDetail` entity instance. Pass `nil` for no initial data.

#### `UserWithAvatarSubmission(data map[string]any) CrackedApiReferenceEntity`

Create a new `UserWithAvatarSubmission` entity instance. Pass `nil` for no initial data.

#### `UsersHealth(data map[string]any) CrackedApiReferenceEntity`

Create a new `UsersHealth` entity instance. Pass `nil` for no initial data.

#### `Video(data map[string]any) CrackedApiReferenceEntity`

Create a new `Video` entity instance. Pass `nil` for no initial data.

#### `VideoRemixerWorker(data map[string]any) CrackedApiReferenceEntity`

Create a new `VideoRemixerWorker` entity instance. Pass `nil` for no initial data.

#### `WatchdogRecovery(data map[string]any) CrackedApiReferenceEntity`

Create a new `WatchdogRecovery` entity instance. Pass `nil` for no initial data.

#### `WinningAd(data map[string]any) CrackedApiReferenceEntity`

Create a new `WinningAd` entity instance. Pass `nil` for no initial data.

#### `XAdaptation(data map[string]any) CrackedApiReferenceEntity`

Create a new `XAdaptation` entity instance. Pass `nil` for no initial data.

#### `ZerohumanAdminAccount(data map[string]any) CrackedApiReferenceEntity`

Create a new `ZerohumanAdminAccount` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## ActivateEntity

```go
activate := client.Activate(nil)
fmt.Println(activate.GetName()) // "activate"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activated_at` | `any` | No |  |
| `message` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Activate(nil).Create(map[string]any{
    "user_id": "example_user_id",
    "message": "example_message",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActivateEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ActivateUserEntity

```go
activateUser := client.ActivateUser(nil)
fmt.Println(activateUser.GetName()) // "activate_user"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activated_at` | `any` | No |  |
| `message` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.ActivateUser(nil).Create(map[string]any{
    "user_id": "example_user_id",
    "message": "example_message",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActivateUserEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ActiveOnboardingEntity

```go
activeOnboarding := client.ActiveOnboarding(nil)
fmt.Println(activeOnboarding.GetName()) // "active_onboarding"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_step` | `any` | No |  |
| `has_active_onboarding` | `bool` | Yes |  |
| `onboarding_data_id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.ActiveOnboarding(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActiveOnboardingEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AdminEntity

```go
admin := client.Admin(nil)
fmt.Println(admin.GetName()) // "admin"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apply` | `bool` | No | Apply safe canonical or clean-only URL updates |
| `count` | `int` | Yes |  |
| `created_at` | `string` | Yes |  |
| `date_from` | `any` | No |  |
| `date_to` | `any` | No |  |
| `email` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `include_failed` | `bool` | No |  |
| `include_pending` | `bool` | No |  |
| `include_records` | `bool` | No | Include full per-field audit records in the response |
| `issue_ids` | `any` | No |  |
| `only_active` | `bool` | No | Limit the audit to active agents |
| `platform` | `any` | No |  |
| `posting_method` | `any` | No |  |
| `product_id` | `string` | No |  |
| `query` | `any` | No |  |
| `reason` | `any` | No |  |
| `regenerate` | `bool` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.Admin(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.Admin(nil).Load(map[string]any{"date": "date"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Admin(nil).Create(map[string]any{
    "user_id": "example_user_id",
    "count": 1,
    "created_at": "example_created_at",
    "date_from": "example_date_from",
    "date_to": "example_date_to",
    "email": "example_email",
    "id": "example_id",
    "product_id": "example_product_id",
    "video_type": "example_video_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.Admin(nil).Update(map[string]any{
    "agent_id": "agent_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.Admin(nil).Remove(map[string]any{"tester_id": "tester_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AdminAccountResetEntity

```go
adminAccountReset := client.AdminAccountReset(nil)
fmt.Println(adminAccountReset.GetName()) // "admin_account_reset"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_ids` | `[]any` | Yes |  |
| `agent_ids_sha256` | `string` | Yes |  |
| `backup_sha256` | `string` | Yes |  |
| `batch_size` | `int` | No |  |
| `confirmation` | `string` | Yes |  |
| `customer_email` | `string` | Yes |  |
| `pc_name` | `string` | Yes |  |
| `phase` | `string` | No |  |
| `product_id` | `string` | Yes |  |
| `video_ids` | `[]any` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.AdminAccountReset(nil).Create(map[string]any{
    "agent_ids": []any{},
    "agent_ids_sha256": "example_agent_ids_sha256",
    "backup_sha256": "example_backup_sha256",
    "confirmation": "example_confirmation",
    "customer_email": "example_customer_email",
    "pc_name": "example_pc_name",
    "product_id": "example_product_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminAccountResetEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AdminCarouselEntity

```go
adminCarousel := client.AdminCarousel(nil)
fmt.Println(adminCarousel.GetName()) // "admin_carousel"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `string` | No |  |
| `batch_id` | `string` | No |  |
| `caption` | `string` | No |  |
| `content_base64` | `string` | No |  |
| `day` | `any` | No |  |
| `dry_run` | `bool` | No |  |
| `engine_run` | `string` | No |  |
| `expected_revision` | `string` | Yes |  |
| `formula` | `map[string]any` | Yes |  |
| `formula_id` | `string` | No |  |
| `prompt` | `string` | Yes |  |
| `slides` | `[]any` | Yes |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.AdminCarousel(nil).Load(map[string]any{"batch_id": "batch_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.AdminCarousel(nil).Create(map[string]any{
    "stage": "example_stage",
    "agent_id": "example_agent_id",
    "batch_id": "example_batch_id",
    "caption": "example_caption",
    "day": "example_day",
    "expected_revision": "example_expected_revision",
    "formula": map[string]any{},
    "formula_id": "example_formula_id",
    "prompt": "example_prompt",
    "slides": []any{},
    "title": "example_title",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.AdminCarousel(nil).Update(map[string]any{
    "fmt": "fmt",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminCarouselEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AdminCarouselDemoReviewEntity

```go
adminCarouselDemoReview := client.AdminCarouselDemoReview(nil)
fmt.Println(adminCarouselDemoReview.GetName()) // "admin_carousel_demo_review"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `items` | `[]any` | Yes |  |
| `reason` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.AdminCarouselDemoReview(nil).Load(map[string]any{"id": "admin_carousel_demo_review_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.AdminCarouselDemoReview(nil).Create(map[string]any{
    "items": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.AdminCarouselDemoReview(nil).Update(map[string]any{
    "demo_review_id": "demo_review_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminCarouselDemoReviewEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AdminCustomerEntity

```go
adminCustomer := client.AdminCustomer(nil)
fmt.Println(adminCustomer.GetName()) // "admin_customer"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `any` | No |  |
| `active_vireel_agents` | `int` | Yes |  |
| `agents` | `[]any` | Yes |  |
| `billing_source` | `string` | Yes |  |
| `contracted_agents` | `any` | No |  |
| `email` | `string` | Yes |  |
| `membership` | `any` | No |  |
| `name` | `string` | No |  |
| `pfa_only_agents` | `int` | Yes |  |
| `severity` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `subscription_status` | `any` | No |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AdminCustomer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminCustomerEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AdminCustomerSuccessEntity

```go
adminCustomerSuccess := client.AdminCustomerSuccess(nil)
fmt.Println(adminCustomerSuccess.GetName()) // "admin_customer_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_agents` | `int` | Yes |  |
| `active_products` | `int` | Yes |  |
| `agents_count` | `int` | Yes |  |
| `auto_schedule_status` | `string` | Yes |  |
| `days_until_period_end` | `any` | No |  |
| `email` | `string` | Yes |  |
| `feature_impact` | `string` | Yes |  |
| `last_notification_at` | `any` | No |  |
| `membership` | `any` | No |  |
| `name` | `string` | No |  |
| `notification_count` | `int` | Yes |  |
| `notification_events` | `[]any` | Yes |  |
| `priority` | `string` | Yes |  |
| `severity` | `string` | Yes |  |
| `status_label` | `string` | Yes |  |
| `subscription_current_period_end` | `any` | No |  |
| `subscription_status` | `any` | No |  |
| `upcoming_posts` | `int` | Yes |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AdminCustomerSuccess(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminCustomerSuccessEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AdminGeneratedVideoEntity

```go
adminGeneratedVideo := client.AdminGeneratedVideo(nil)
fmt.Println(adminGeneratedVideo.GetName()) // "admin_generated_video"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `string` | No |  |
| `agent_name` | `any` | No |  |
| `created_at` | `string` | Yes |  |
| `duration` | `float64` | No |  |
| `generation_status` | `map[string]any` | No |  |
| `id` | `string` | Yes |  |
| `product_id` | `string` | No |  |
| `thumbnail_url` | `any` | No |  |
| `title` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updated_at` | `any` | No |  |
| `url` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AdminGeneratedVideo(nil).List(map[string]any{"user_id": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminGeneratedVideoEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AdminHealthrxEntity

```go
adminHealthrx := client.AdminHealthrx(nil)
fmt.Println(adminHealthrx.GetName()) // "admin_healthrx"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `delivery_enabled` | `bool` | No |  |
| `id` | `string` | No |  |
| `option_id` | `string` | Yes |  |
| `plan` | `map[string]any` | Yes |  |
| `preparation_enabled` | `bool` | No |  |
| `product_id` | `string` | Yes |  |
| `reason` | `string` | Yes |  |
| `request_key` | `string` | Yes |  |
| `revision` | `int` | Yes |  |
| `schedule_enabled` | `bool` | No |  |
| `version` | `string` | Yes |  |
| `viewed` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.AdminHealthrx(nil).Load(map[string]any{"item_id": "item_id", "kind": "kind"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.AdminHealthrx(nil).Create(map[string]any{
    "action": "example_action",
    "option_id": "example_option_id",
    "plan": map[string]any{},
    "product_id": "example_product_id",
    "reason": "example_reason",
    "request_key": "example_request_key",
    "version": "example_version",
    "viewed": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.AdminHealthrx(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminHealthrxEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AdminInsightEntity

```go
adminInsight := client.AdminInsight(nil)
fmt.Println(adminInsight.GetName()) // "admin_insight"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer_success_cases` | `[]any` | Yes |  |
| `customers` | `[]any` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `pfa_database` | `map[string]any` | Yes |  |
| `recent_signups` | `[]any` | Yes |  |
| `summary` | `map[string]any` | Yes |  |
| `vireel_database` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AdminInsight(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.AdminInsight(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminInsightEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AdminLandingTaskEntity

```go
adminLandingTask := client.AdminLandingTask(nil)
fmt.Println(adminLandingTask.GetName()) // "admin_landing_task"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `task_id` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.AdminLandingTask(nil).Create(map[string]any{
    "user_id": "example_user_id",
    "task_id": "example_task_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminLandingTaskEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AdminMetricsSummaryEntity

```go
adminMetricsSummary := client.AdminMetricsSummary(nil)
fmt.Println(adminMetricsSummary.GetName()) // "admin_metrics_summary"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `paid_users_by_level` | `[]any` | Yes |  |
| `total_cancellations` | `int` | Yes |  |
| `total_previews_generated` | `int` | Yes |  |
| `total_signups` | `int` | Yes |  |
| `total_videos_generated` | `int` | Yes |  |
| `url_attempts` | `int` | Yes |  |
| `user_credits` | `[]any` | Yes |  |
| `user_gifted_credits` | `[]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AdminMetricsSummary(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminMetricsSummaryEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AdminPostEntity

```go
adminPost := client.AdminPost(nil)
fmt.Println(adminPost.GetName()) // "admin_post"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_job_ids` | `any` | Yes |  |
| `agent_id` | `string` | Yes |  |
| `agent_name` | `any` | Yes |  |
| `agent_platform_urls` | `any` | Yes |  |
| `agent_url` | `any` | Yes |  |
| `comments` | `int` | Yes |  |
| `error_message` | `any` | Yes |  |
| `failed_at` | `any` | Yes |  |
| `id` | `string` | Yes |  |
| `instagram_posted_by` | `any` | Yes |  |
| `instagram_posted_url` | `any` | Yes |  |
| `instagram_scraped_social_post_id` | `string` | Yes |  |
| `is_instagram_posted` | `bool` | Yes |  |
| `is_tiktok_posted` | `bool` | Yes |  |
| `is_youtube_posted` | `bool` | Yes |  |
| `last_refreshed_at` | `any` | Yes |  |
| `likes` | `int` | Yes |  |
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
| `views` | `int` | Yes |  |
| `youtube_posted_by` | `any` | Yes |  |
| `youtube_posted_url` | `any` | Yes |  |
| `youtube_scraped_social_post_id` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AdminPost(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminPostEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AdminRecentSignupEntity

```go
adminRecentSignup := client.AdminRecentSignup(nil)
fmt.Println(adminRecentSignup.GetName()) // "admin_recent_signup"
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
| `inactive_minutes` | `int` | Yes |  |
| `last_notification_at` | `any` | No |  |
| `last_seen_at` | `string` | Yes |  |
| `likely_cause` | `string` | Yes |  |
| `notification_count` | `int` | Yes |  |
| `notification_events` | `[]any` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AdminRecentSignup(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminRecentSignupEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AdminSlideshowDiagEntity

```go
adminSlideshowDiag := client.AdminSlideshowDiag(nil)
fmt.Println(adminSlideshowDiag.GetName()) // "admin_slideshow_diag"
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.AdminSlideshowDiag(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminSlideshowDiagEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AdminSlideshowImportEntity

```go
adminSlideshowImport := client.AdminSlideshowImport(nil)
fmt.Println(adminSlideshowImport.GetName()) // "admin_slideshow_import"
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
| `slides` | `[]any` | Yes |  |
| `title` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.AdminSlideshowImport(nil).Load(map[string]any{"batch_id": "batch_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.AdminSlideshowImport(nil).Create(map[string]any{
    "agent_id": "example_agent_id",
    "batch_id": "example_batch_id",
    "caption": "example_caption",
    "day": "example_day",
    "formula_id": "example_formula_id",
    "slides": []any{},
    "title": "example_title",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminSlideshowImportEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AdminUserViewEntity

```go
adminUserView := client.AdminUserView(nil)
fmt.Println(adminUserView.GetName()) // "admin_user_view"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `any` | No |  |
| `admin_notes` | `any` | No |  |
| `agents_count` | `int` | No |  |
| `created_at` | `string` | Yes |  |
| `credits` | `int` | Yes |  |
| `email` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `industry` | `any` | Yes |  |
| `is_admin` | `bool` | No |  |
| `is_bookmarked` | `bool` | No |  |
| `is_internal_user` | `bool` | No |  |
| `membership` | `any` | Yes |  |
| `name` | `string` | Yes |  |
| `new_email` | `string` | Yes |  |
| `partner_external_user_id` | `string` | No |  |
| `partner_policy_code` | `any` | No |  |
| `partner_source` | `any` | No |  |
| `product_name` | `any` | Yes |  |
| `product_url` | `any` | Yes |  |
| `skip` | `bool` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AdminUserView(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.AdminUserView(nil).Create(map[string]any{
    "user_id": "example_user_id",
    "created_at": "example_created_at",
    "credits": 1,
    "email": "example_email",
    "id": "example_id",
    "industry": "example_industry",
    "membership": "example_membership",
    "name": "example_name",
    "new_email": "example_new_email",
    "product_name": "example_product_name",
    "product_url": "example_product_url",
    "skip": true,
    "subscription_status": "example_subscription_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.AdminUserView(nil).Update(map[string]any{
    "user_id": "user_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.AdminUserView(nil).Remove(map[string]any{"user_id": "user_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminUserViewEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AdminUsersTableItemEntity

```go
adminUsersTableItem := client.AdminUsersTableItem(nil)
fmt.Println(adminUsersTableItem.GetName()) // "admin_users_table_item"
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
| `membership` | `any` | Yes |  |
| `name` | `string` | Yes |  |
| `onboarding_flow` | `string` | Yes |  |
| `product_name` | `any` | Yes |  |
| `product_url` | `any` | Yes |  |
| `survey_data` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AdminUsersTableItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminUsersTableItemEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AdminVideoRemixerEntity

```go
adminVideoRemixer := client.AdminVideoRemixer(nil)
fmt.Println(adminVideoRemixer.GetName()) // "admin_video_remixer"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity` | `string` | Yes |  |
| `allowed_platforms` | `[]any` | No |  |
| `anchor_clip_id` | `string` | No |  |
| `atomicity_class` | `any` | No |  |
| `auto_render` | `bool` | No |  |
| `campaign_allowed` | `bool` | No |  |
| `channel` | `string` | No |  |
| `channel_default` | `string` | No |  |
| `clip_id` | `string` | Yes |  |
| `clip_ids` | `[]any` | No |  |
| `collected_at` | `string` | Yes |  |
| `comments` | `any` | No |  |
| `completion_rate` | `any` | No |  |
| `confirmed_duplicate_of` | `any` | No |  |
| `consent_doc_uri` | `string` | No |  |
| `contact` | `string` | No |  |
| `conversions` | `any` | No |  |
| `count` | `int` | No |  |
| `creator` | `string` | No |  |
| `creator_id` | `string` | No |  |
| `crop_window` | `any` | No |  |
| `cta_product_id` | `string` | No |  |
| `days` | `int` | No |  |
| `derivative_edits_allowed` | `bool` | No |  |
| `enabled` | `bool` | No |  |
| `end_ms` | `any` | No |  |
| `enqueue` | `bool` | No |  |
| `errors` | `[]any` | No |  |
| `evidence` | `string` | Yes |  |
| `expected_revision` | `any` | No |  |
| `expected_revisions` | `map[string]any` | Yes |  |
| `external_ai_allowed` | `bool` | No |  |
| `file` | `string` | Yes |  |
| `followers` | `any` | No |  |
| `formula_id` | `string` | Yes |  |
| `formula_ids` | `[]any` | Yes |  |
| `handles` | `map[string]any` | No |  |
| `hook_subtype` | `any` | No |  |
| `hour_utc` | `int` | No |  |
| `human_role` | `string` | Yes |  |
| `idempotency_key` | `string` | Yes |  |
| `items` | `[]any` | Yes |  |
| `kim_clip_ids` | `[]any` | Yes |  |
| `kind` | `string` | Yes |  |
| `levels` | `map[string]any` | Yes |  |
| `likes` | `any` | No |  |
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
| `policy` | `map[string]any` | Yes |  |
| `polish` | `string` | No |  |
| `post_url` | `string` | Yes |  |
| `posted_at` | `string` | Yes |  |
| `primary_role` | `any` | No |  |
| `purpose` | `string` | Yes |  |
| `rate` | `float64` | No |  |
| `rationale` | `string` | No |  |
| `reason` | `string` | Yes |  |
| `reference_source_id` | `string` | No |  |
| `requires_medical_review` | `bool` | No |  |
| `review_status` | `any` | No |  |
| `revision` | `int` | Yes |  |
| `rights_expires_at` | `any` | No |  |
| `rights_status` | `string` | No |  |
| `run_id` | `string` | Yes |  |
| `sample_links` | `[]any` | No |  |
| `secondary_roles` | `any` | No |  |
| `seconds` | `int` | Yes |  |
| `seed` | `int` | No |  |
| `seed_base` | `int` | No |  |
| `sensitive_personal_data_present` | `bool` | No |  |
| `shares` | `any` | No |  |
| `shoot` | `string` | No |  |
| `slots` | `[]any` | Yes |  |
| `soundbite_title` | `any` | No |  |
| `source` | `string` | Yes |  |
| `source_id` | `string` | Yes |  |
| `source_ids` | `[]any` | Yes |  |
| `spend_usd` | `any` | No |  |
| `spiciness` | `any` | No |  |
| `spiciness_notes` | `string` | No |  |
| `start_ms` | `any` | No |  |
| `status` | `string` | No |  |
| `terry_clip_ids` | `[]any` | Yes |  |
| `testimonial_strength` | `any` | No |  |
| `testimonial_type` | `any` | No |  |
| `tier` | `string` | No |  |
| `timeline` | `map[string]any` | Yes |  |
| `topic` | `string` | No |  |
| `topic_tags` | `any` | No |  |
| `total_target_ms` | `int` | Yes |  |
| `use_learned_weights` | `bool` | No |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.AdminVideoRemixer(nil).Load(map[string]any{"clip_id": "clip_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.AdminVideoRemixer(nil).Create(map[string]any{
    "activity": "example_activity",
    "clip_id": "example_clip_id",
    "collected_at": "example_collected_at",
    "evidence": "example_evidence",
    "expected_revisions": map[string]any{},
    "file": "example_file",
    "formula_id": "example_formula_id",
    "formula_ids": []any{},
    "human_role": "example_human_role",
    "idempotency_key": "example_idempotency_key",
    "items": []any{},
    "kim_clip_ids": []any{},
    "kind": "example_kind",
    "levels": map[string]any{},
    "media_enabled": true,
    "name": "example_name",
    "platform": "example_platform",
    "platform_post_id": "example_platform_post_id",
    "policy": map[string]any{},
    "post_url": "example_post_url",
    "posted_at": "example_posted_at",
    "purpose": "example_purpose",
    "reason": "example_reason",
    "revision": 1,
    "run_id": "example_run_id",
    "seconds": 1,
    "slots": []any{},
    "source": "example_source",
    "source_id": "example_source_id",
    "source_ids": []any{},
    "terry_clip_ids": []any{},
    "timeline": map[string]any{},
    "total_target_ms": 1,
    "window": "example_window",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.AdminVideoRemixer(nil).Update(map[string]any{
    "identifier": "identifier",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Patch(reqdata, ctrl map[string]any) (any, error)`

Change part of an existing entity: only the fields given are sent. The data must include the entity `id`. Returns the patched entity; `err` is non-nil on failure.

```go
result, err := client.AdminVideoRemixer(nil).Patch(map[string]any{
    // Only the fields to change
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.AdminVideoRemixer(nil).Remove(map[string]any{"identifier": "identifier"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminVideoRemixerEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AdvanceStepEntity

```go
advanceStep := client.AdvanceStep(nil)
fmt.Println(advanceStep.GetName()) // "advance_step"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_step` | `string` | Yes |  |
| `onboarding_data_id` | `string` | Yes | UUID of the OnboardingData record |
| `success` | `bool` | Yes |  |
| `to_step` | `string` | Yes | Target step name |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.AdvanceStep(nil).Create(map[string]any{
    "onboarding_data_id": "example_onboarding_data_id",
    "to_step": "example_to_step",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdvanceStepEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AgentEntity

```go
agent := client.Agent(nil)
fmt.Println(agent.GetName()) // "agent"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_connections` | `int` | Yes |  |
| `at_capacity` | `bool` | Yes |  |
| `id` | `string` | Yes |  |
| `is_active` | `bool` | Yes |  |
| `name` | `string` | Yes |  |
| `tiktok_stats` | `any` | No |  |
| `type` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.Agent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AgentAccessCustomersHealthEntity

```go
agentAccessCustomersHealth := client.AgentAccessCustomersHealth(nil)
fmt.Println(agentAccessCustomersHealth.GetName()) // "agent_access_customers_health"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountType` | `any` | No |  |
| `agentQuota` | `int` | Yes |  |
| `assignedAgentsByType` | `map[string]any` | Yes |  |
| `assignedAgentsTotal` | `int` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `email` | `string` | Yes |  |
| `isInternalUser` | `any` | No |  |
| `membership` | `any` | No |  |
| `name` | `string` | No |  |
| `performance` | `map[string]any` | Yes |  |
| `productCount` | `int` | Yes |  |
| `subscriptionCurrentPeriodEnd` | `any` | No |  |
| `subscriptionDetails` | `any` | No |  |
| `subscriptionStatus` | `any` | No |  |
| `usage` | `map[string]any` | Yes |  |
| `userId` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AgentAccessCustomersHealth(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentAccessCustomersHealthEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AgentAccessOverviewEntity

```go
agentAccessOverview := client.AgentAccessOverview(nil)
fmt.Println(agentAccessOverview.GetName()) // "agent_access_overview"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeUsers` | `int` | Yes |  |
| `generatedAt` | `string` | Yes |  |
| `newUsersYesterday` | `int` | Yes |  |
| `onboardingContextCounts` | `map[string]any` | Yes |  |
| `onboardingCurrentStepCounts` | `map[string]any` | Yes |  |
| `onboardingCurrentStepWindow` | `map[string]any` | Yes |  |
| `onboardingFlowVariantCounts` | `map[string]any` | Yes |  |
| `onboardingLockedUntilActivation` | `int` | Yes |  |
| `onboardingRecordsTotal` | `int` | Yes |  |
| `onboardingRecordsWindow` | `int` | Yes |  |
| `onboardingSocialScanStatusCounts` | `map[string]any` | Yes |  |
| `onboardingWebsiteScrapeStatusCounts` | `map[string]any` | Yes |  |
| `subscriptionStatusCounts` | `map[string]any` | Yes |  |
| `totalInternalUsers` | `int` | Yes |  |
| `totalUsers` | `int` | Yes |  |
| `trialStartedYesterday` | `int` | Yes |  |
| `trialingUsers` | `int` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.AgentAccessOverview(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentAccessOverviewEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AgentAccessPhilHourlyNotificationEntity

```go
agentAccessPhilHourlyNotification := client.AgentAccessPhilHourlyNotification(nil)
fmt.Println(agentAccessPhilHourlyNotification.GetName()) // "agent_access_phil_hourly_notification"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `generatedAt` | `string` | Yes |  |
| `phoneHealth` | `map[string]any` | Yes |  |
| `scheduledPosts` | `map[string]any` | Yes |  |
| `targetDate` | `string` | Yes |  |
| `uploadPostInstagramHealth` | `map[string]any` | Yes |  |
| `uploadPostTiktokHealth` | `map[string]any` | Yes |  |
| `uploadPostYoutubeHealth` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.AgentAccessPhilHourlyNotification(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentAccessPhilHourlyNotificationEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AgentAccessPhilStatsRefreshEntity

```go
agentAccessPhilStatsRefresh := client.AgentAccessPhilStatsRefresh(nil)
fmt.Println(agentAccessPhilStatsRefresh.GetName()) // "agent_access_phil_stats_refresh"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `generatedAt` | `string` | Yes |  |
| `statsRefresh` | `map[string]any` | Yes |  |
| `targetDate` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.AgentAccessPhilStatsRefresh(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentAccessPhilStatsRefreshEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AgentAccessPhilVideoEntity

```go
agentAccessPhilVideo := client.AgentAccessPhilVideo(nil)
fmt.Println(agentAccessPhilVideo.GetName()) // "agent_access_phil_video"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `generatedAt` | `string` | Yes |  |
| `targetDate` | `string` | Yes |  |
| `videos` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.AgentAccessPhilVideo(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentAccessPhilVideoEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AgentAccessUserAgentEntity

```go
agentAccessUserAgent := client.AgentAccessUserAgent(nil)
fmt.Println(agentAccessUserAgent.GetName()) // "agent_access_user_agent"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentQuota` | `int` | Yes |  |
| `agents` | `[]any` | Yes |  |
| `assignedByType` | `map[string]any` | Yes |  |
| `assignedTotal` | `int` | Yes |  |
| `email` | `string` | Yes |  |
| `products` | `[]any` | Yes |  |
| `userId` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AgentAccessUserAgent(nil).List(map[string]any{"email": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentAccessUserAgentEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AgentAccessUserPhoneFarmEntity

```go
agentAccessUserPhoneFarm := client.AgentAccessUserPhoneFarm(nil)
fmt.Println(agentAccessUserPhoneFarm.GetName()) // "agent_access_user_phone_farm"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AgentAccessUserPhoneFarm(nil).List(map[string]any{"email": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentAccessUserPhoneFarmEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AgentAccessUserPostEntity

```go
agentAccessUserPost := client.AgentAccessUserPost(nil)
fmt.Println(agentAccessUserPost.GetName()) // "agent_access_user_post"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deltaYesterday` | `int` | Yes |  |
| `expectedVideosPerDay` | `int` | Yes |  |
| `postedToday` | `int` | Yes |  |
| `postedYesterday` | `int` | Yes |  |
| `productId` | `any` | No |  |
| `productName` | `any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AgentAccessUserPost(nil).List(map[string]any{"email": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentAccessUserPostEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AgentAccessUserSummaryEntity

```go
agentAccessUserSummary := client.AgentAccessUserSummary(nil)
fmt.Println(agentAccessUserSummary.GetName()) // "agent_access_user_summary"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AgentAccessUserSummary(nil).List(map[string]any{"email": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentAccessUserSummaryEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AgentAccessUserVideoEntity

```go
agentAccessUserVideo := client.AgentAccessUserVideo(nil)
fmt.Println(agentAccessUserVideo.GetName()) // "agent_access_user_video"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allTime` | `map[string]any` | Yes |  |
| `email` | `string` | Yes |  |
| `today` | `map[string]any` | Yes |  |
| `userId` | `string` | Yes |  |
| `yesterday` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.AgentAccessUserVideo(nil).Load(map[string]any{"email": "email"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentAccessUserVideoEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AgentAccessUserWinningAdEntity

```go
agentAccessUserWinningAd := client.AgentAccessUserWinningAd(nil)
fmt.Println(agentAccessUserWinningAd.GetName()) // "agent_access_user_winning_ad"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `productId` | `string` | Yes |  |
| `productName` | `string` | Yes |  |
| `winningAds` | `[]any` | Yes |  |
| `winningAdsCount` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AgentAccessUserWinningAd(nil).List(map[string]any{"email": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentAccessUserWinningAdEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AgentAccessWinningAdsSummaryEntity

```go
agentAccessWinningAdsSummary := client.AgentAccessWinningAdsSummary(nil)
fmt.Println(agentAccessWinningAdsSummary.GetName()) // "agent_access_winning_ads_summary"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes |  |
| `name` | `string` | No |  |
| `productCount` | `int` | Yes |  |
| `productsWithWinningAds` | `int` | Yes |  |
| `subscriptionStatus` | `any` | No |  |
| `totalWinningAds` | `int` | Yes |  |
| `userId` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AgentAccessWinningAdsSummary(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentAccessWinningAdsSummaryEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AgentDetailEntity

```go
agentDetail := client.AgentDetail(nil)
fmt.Println(agentDetail.GetName()) // "agent_detail"
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
| `isActive` | `bool` | No |  |
| `name` | `string` | Yes |  |
| `role` | `any` | No |  |
| `tiktokStats` | `any` | No |  |
| `tiktokUrl` | `any` | No |  |
| `type` | `string` | Yes |  |
| `uploadPostPlatforms` | `any` | No |  |
| `youtubeUrl` | `any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AgentDetail(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.AgentDetail(nil).Update(map[string]any{
    "upload_post_agent_id": "upload_post_agent_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentDetailEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AgentHealthEntity

```go
agentHealth := client.AgentHealth(nil)
fmt.Println(agentHealth.GetName()) // "agent_health"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `daily` | `[]any` | Yes |  |
| `dates` | `[]any` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `groups` | `[]any` | Yes |  |
| `latest` | `map[string]any` | Yes |  |
| `live_date` | `any` | No |  |
| `phone_admin_generated_at` | `string` | Yes |  |
| `platform` | `string` | No |  |
| `post_target` | `int` | Yes |  |
| `qa_managed_agent_ids` | `[]any` | No |  |
| `scope_prefixes` | `[]any` | Yes |  |
| `timezone` | `string` | Yes |  |
| `warmup_target` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AgentHealth(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentHealthEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AgentHealthCustomerOptionEntity

```go
agentHealthCustomerOption := client.AgentHealthCustomerOption(nil)
fmt.Println(agentHealthCustomerOption.GetName()) // "agent_health_customer_option"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_count` | `int` | Yes |  |
| `email` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AgentHealthCustomerOption(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentHealthCustomerOptionEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AgentHealthDetailEntity

```go
agentHealthDetail := client.AgentHealthDetail(nil)
fmt.Println(agentHealthDetail.GetName()) // "agent_health_detail"
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
| `issues` | `[]any` | Yes |  |
| `limit` | `int` | Yes |  |
| `metric` | `string` | Yes |  |
| `offset` | `int` | Yes |  |
| `warmup_runs` | `[]any` | No |  |
| `warning_total` | `int` | No |  |
| `warnings` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AgentHealthDetail(nil).List(map[string]any{"date": "example", "group_id": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentHealthDetailEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AgentPostEntity

```go
agentPost := client.AgentPost(nil)
fmt.Println(agentPost.GetName()) // "agent_post"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `int` | Yes |  |
| `error_message` | `any` | Yes |  |
| `id` | `string` | Yes |  |
| `likes` | `int` | Yes |  |
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
| `views` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AgentPost(nil).List(map[string]any{"id": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentPostEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AgentStatEntity

```go
agentStat := client.AgentStat(nil)
fmt.Println(agentStat.GetName()) // "agent_stat"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agents_needed` | `int` | Yes |  |
| `dedicated_agents` | `map[string]any` | Yes |  |
| `shared_agents` | `map[string]any` | Yes |  |
| `total_agents` | `int` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.AgentStat(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentStatEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AgentSummaryEntity

```go
agentSummary := client.AgentSummary(nil)
fmt.Println(agentSummary.GetName()) // "agent_summary"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_count` | `int` | Yes |  |
| `favicon_url` | `any` | No |  |
| `product_id` | `string` | Yes |  |
| `product_name` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AgentSummary(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentSummaryEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AgentsSummaryEntity

```go
agentsSummary := client.AgentsSummary(nil)
fmt.Println(agentsSummary.GetName()) // "agents_summary"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `total_agents` | `int` | Yes |  |
| `total_agents_count_sum` | `int` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.AgentsSummary(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentsSummaryEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AnalysisStatusEntity

```go
analysisStatus := client.AnalysisStatus(nil)
fmt.Println(analysisStatus.GetName()) // "analysis_status"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.AnalysisStatus(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AnalysisStatusEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AnalyticsPostEntity

```go
analyticsPost := client.AnalyticsPost(nil)
fmt.Println(analyticsPost.GetName()) // "analytics_post"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AnalyticsPost(nil).List(map[string]any{"date_from": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AnalyticsPostEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AnalyzeProductEntity

```go
analyzeProduct := client.AnalyzeProduct(nil)
fmt.Println(analyzeProduct.GetName()) // "analyze_product"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instagram_username` | `any` | No |  |
| `message` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.AnalyzeProduct(nil).Create(map[string]any{
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AnalyzeProductEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AssignAgentEntity

```go
assignAgent := client.AssignAgent(nil)
fmt.Println(assignAgent.GetName()) // "assign_agent"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent` | `map[string]any` | Yes | Agent information for V6. |
| `assignment` | `map[string]any` | Yes | Assignment information for V6. |
| `mock_agents` | `[]any` | Yes |  |
| `onboarding_data_id` | `string` | Yes | UUID of the OnboardingData record |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.AssignAgent(nil).Create(map[string]any{
    "onboarding_data_id": "example_onboarding_data_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssignAgentEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AuthEntity

```go
auth := client.Auth(nil)
fmt.Println(auth.GetName()) // "auth"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AuthEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AutoScheduleSettingEntity

```go
autoScheduleSetting := client.AutoScheduleSetting(nil)
fmt.Println(autoScheduleSetting.GetName()) // "auto_schedule_setting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `can_enable_repost` | `bool` | No |  |
| `effective_posted_video_reuse_percent` | `int` | Yes |  |
| `enabled_video_types` | `any` | No | List of enabled video type filters |
| `is_enabled` | `bool` | Yes |  |
| `lock_video_regeneration_controls` | `bool` | No |  |
| `membership_tier` | `string` | Yes |  |
| `posted_video_reuse_percent` | `any` | No |  |
| `product_id` | `string` | No |  |
| `repost_source` | `any` | No |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.AutoScheduleSetting(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.AutoScheduleSetting(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AutoScheduleSettingEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## BulkTikTokStatsUpdateEntity

```go
bulkTikTokStatsUpdate := client.BulkTikTokStatsUpdate(nil)
fmt.Println(bulkTikTokStatsUpdate.GetName()) // "bulk_tik_tok_stats_update"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `failedIds` | `[]any` | Yes |  |
| `updatedCount` | `int` | Yes |  |
| `updates` | `[]any` | Yes |  |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.BulkTikTokStatsUpdate(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BulkTikTokStatsUpdateEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CarouselEntity

```go
carousel := client.Carousel(nil)
fmt.Println(carousel.GetName()) // "carousel"
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
| `formula` | `map[string]any` | No |  |
| `formula_id` | `string` | No |  |
| `formula_name` | `any` | No |  |
| `generation` | `map[string]any` | No |  |
| `id` | `string` | No |  |
| `image_prompt` | `any` | No |  |
| `likes` | `any` | No |  |
| `main_prompt` | `any` | No |  |
| `metrics_updated_at` | `any` | No |  |
| `post_url` | `any` | No |  |
| `profile_url` | `any` | No |  |
| `qa` | `map[string]any` | No |  |
| `qa_status` | `string` | Yes |  |
| `qa_verdict` | `any` | No |  |
| `quality_score` | `any` | No |  |
| `queue_id` | `string` | Yes |  |
| `relevance_score` | `any` | No |  |
| `scheduled_at` | `string` | Yes |  |
| `slide_count` | `int` | Yes |  |
| `slides` | `[]any` | Yes |  |
| `source` | `map[string]any` | No |  |
| `status` | `string` | Yes |  |
| `thumbnail_url` | `any` | No |  |
| `title` | `string` | Yes |  |
| `video_id` | `string` | Yes |  |
| `views` | `any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.Carousel(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.Carousel(nil).Load(map[string]any{"id": "carousel_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Carousel(nil).Create(map[string]any{
    "id": "example_id",
    "agent_id": "example_agent_id",
    "agent_name": "example_agent_name",
    "format": "example_format",
    "qa_status": "example_qa_status",
    "queue_id": "example_queue_id",
    "scheduled_at": "example_scheduled_at",
    "slide_count": 1,
    "slides": []any{},
    "status": "example_status",
    "title": "example_title",
    "video_id": "example_video_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CarouselEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CarouselAgentDetailEntity

```go
carouselAgentDetail := client.CarouselAgentDetail(nil)
fmt.Println(carouselAgentDetail.GetName()) // "carousel_agent_detail"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.CarouselAgentDetail(nil).Load(map[string]any{"agent_id": "agent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CarouselAgentDetailEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CarouselStatusEntity

```go
carouselStatus := client.CarouselStatus(nil)
fmt.Println(carouselStatus.GetName()) // "carousel_status"
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
| `index` | `int` | Yes |  |
| `prompt` | `any` | Yes |  |
| `status` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.CarouselStatus(nil).List(map[string]any{"id": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CarouselStatusEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ChatEntity

```go
chat := client.Chat(nil)
fmt.Println(chat.GetName()) // "chat"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `idempotencyKey` | `string` | Yes |  |
| `message` | `string` | Yes |  |
| `sessionId` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Chat(nil).Create(map[string]any{
    "session_id": "example_session_id",
    "idempotencyKey": "example_idempotencyKey",
    "message": "example_message",
    "sessionId": "example_sessionId",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ChatEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ChatHistoryEntity

```go
chatHistory := client.ChatHistory(nil)
fmt.Println(chatHistory.GetName()) // "chat_history"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `chatSubVariant` | `string` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `model` | `any` | No |  |
| `onboardingDataId` | `string` | Yes |  |
| `routeRecommendation` | `any` | No |  |
| `salesStage` | `string` | Yes |  |
| `selectedPlan` | `any` | No |  |
| `session` | `map[string]any` | Yes |  |
| `sessionId` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.ChatHistory(nil).Load(map[string]any{"session_id": "session_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.ChatHistory(nil).Create(map[string]any{
    "onboardingDataId": "example_onboardingDataId",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ChatHistoryEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ChatSessionEntity

```go
chatSession := client.ChatSession(nil)
fmt.Println(chatSession.GetName()) // "chat_session"
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.ChatSession(nil).Create(map[string]any{
    "session_id": "example_session_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ChatSessionEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CommentEntity

```go
comment := client.Comment(nil)
fmt.Println(comment.GetName()) // "comment"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.Comment(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CommentEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CommentCampaignEntity

```go
commentCampaign := client.CommentCampaign(nil)
fmt.Println(commentCampaign.GetName()) // "comment_campaign"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_daily_limit` | `int` | No |  |
| `account_weekly_limit` | `int` | No |  |
| `action` | `string` | Yes |  |
| `active_days_per_week` | `int` | No |  |
| `agent_id` | `string` | Yes |  |
| `allowlist` | `[]any` | No |  |
| `analysis_daily_limit` | `int` | No |  |
| `analysis_model` | `string` | No |  |
| `analysis_reservation_usd` | `float64` | No |  |
| `approved_markets` | `[]any` | No |  |
| `brand_forward_enabled` | `bool` | No |  |
| `briefs` | `map[string]any` | No |  |
| `candidate_only` | `bool` | No |  |
| `claims` | `[]any` | No |  |
| `cohort_removal_threshold` | `int` | No |  |
| `daily_cost_ceiling_usd` | `float64` | No |  |
| `delivery_mode` | `string` | No |  |
| `disclosure_mode` | `string` | No |  |
| `disclosure_template` | `string` | No |  |
| `draft_options_count` | `int` | No |  |
| `draft_review_reservation_usd` | `float64` | No |  |
| `exceptional_daily_cap_approved` | `bool` | No |  |
| `execution_enabled` | `bool` | No |  |
| `experiment_styles` | `[]any` | No |  |
| `inventory_factor` | `float64` | No |  |
| `keywords` | `[]any` | No |  |
| `max_duration_seconds` | `any` | No |  |
| `metadata_pass_rate` | `float64` | No |  |
| `min_interval_minutes` | `int` | No |  |
| `mode` | `string` | No |  |
| `monitored_creators` | `[]any` | No |  |
| `platform` | `string` | No |  |
| `platform_permission_evidence` | `string` | No |  |
| `policy_approved_by` | `string` | No |  |
| `policy_expires_at` | `any` | No |  |
| `policy_version` | `string` | No |  |
| `product_daily_limit` | `int` | No |  |
| `qualification_rate` | `float64` | No |  |
| `raw_daily_limit` | `int` | No |  |
| `raw_result_reservation_usd` | `float64` | No |  |
| `reason` | `string` | Yes |  |
| `replies_enabled` | `bool` | No |  |
| `request_key` | `string` | Yes |  |
| `reviewer_model` | `string` | No |  |
| `scan_interval_hours` | `int` | No |  |
| `search_change_reason` | `string` | No |  |
| `search_effective_at` | `any` | No |  |
| `shadow_sample_limit` | `int` | No |  |
| `spent_seconds` | `any` | No |  |
| `task_ttl_hours` | `int` | No |  |
| `top_comment_analysis_enabled` | `bool` | No |  |
| `writer_model` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.CommentCampaign(nil).Load(map[string]any{"product_id": "product_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.CommentCampaign(nil).Create(map[string]any{
    "product_id": "example_product_id",
    "action": "example_action",
    "agent_id": "example_agent_id",
    "reason": "example_reason",
    "request_key": "example_request_key",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.CommentCampaign(nil).Update(map[string]any{
    "product_id": "product_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CommentCampaignEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CompleteChatCheckoutEntity

```go
completeChatCheckout := client.CompleteChatCheckout(nil)
fmt.Println(completeChatCheckout.GetName()) // "complete_chat_checkout"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `any` | No |  |
| `onboarding_data_id` | `string` | Yes |  |
| `product_id` | `string` | No |  |
| `ready` | `bool` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.CompleteChatCheckout(nil).Create(map[string]any{
    "onboarding_data_id": "example_onboarding_data_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CompleteChatCheckoutEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CreateBlackoutSora2VideoEntity

```go
createBlackoutSora2Video := client.CreateBlackoutSora2Video(nil)
fmt.Println(createBlackoutSora2Video.GetName()) // "create_blackout_sora2_video"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `main_prompt` | `string` | Yes |  |
| `media_asset_id` | `string` | Yes |  |
| `product_id` | `string` | Yes |  |
| `requires_polling` | `bool` | No |  |
| `video` | `map[string]any` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.CreateBlackoutSora2Video(nil).Create(map[string]any{
    "main_prompt": "example_main_prompt",
    "media_asset_id": "example_media_asset_id",
    "product_id": "example_product_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreateBlackoutSora2VideoEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CreateCarouselEntity

```go
createCarousel := client.CreateCarousel(nil)
fmt.Println(createCarousel.GetName()) // "create_carousel"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `copy_mode` | `any` | No |  |
| `expected_owner_user_id` | `string` | No |  |
| `expected_product_id` | `string` | No |  |
| `expected_product_name` | `any` | No |  |
| `image_model` | `string` | No |  |
| `mention_product` | `bool` | No |  |
| `message` | `string` | Yes |  |
| `num_slides` | `int` | No |  |
| `owner_user_id` | `string` | No |  |
| `product_id` | `string` | No | Product ID to use. |
| `product_name` | `any` | No |  |
| `product_placement` | `string` | No |  |
| `request_id` | `string` | No |  |
| `script_style_custom` | `any` | No |  |
| `script_style_id` | `string` | No |  |
| `selected_hook` | `any` | No |  |
| `status` | `string` | Yes |  |
| `success` | `bool` | Yes |  |
| `template_id` | `string` | Yes |  |
| `video_id` | `string` | Yes |  |
| `visual_style_custom` | `any` | No |  |
| `visual_style_id` | `string` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.CreateCarousel(nil).Create(map[string]any{
    "template_id": "example_template_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreateCarouselEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CreateProductEntity

```go
createProduct := client.CreateProduct(nil)
fmt.Println(createProduct.GetName()) // "create_product"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `onboarding_data_id` | `string` | Yes | UUID of the OnboardingData record |
| `product_id` | `string` | Yes |  |
| `success` | `bool` | Yes |  |
| `videos_queued` | `int` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.CreateProduct(nil).Create(map[string]any{
    "onboarding_data_id": "example_onboarding_data_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreateProductEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CreateResetProductV6Entity

```go
createResetProductV6 := client.CreateResetProductV6(nil)
fmt.Println(createResetProductV6.GetName()) // "create_reset_product_v6"
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.CreateResetProductV6(nil).Create(map[string]any{
    "onboarding_data_id": "example_onboarding_data_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreateResetProductV6Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CreateSora2VideoEntity

```go
createSora2Video := client.CreateSora2Video(nil)
fmt.Println(createSora2Video.GetName()) // "create_sora2_video"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `image_prompt` | `any` | No |  |
| `main_prompt` | `string` | Yes |  |
| `model` | `string` | No |  |
| `requires_polling` | `bool` | No |  |
| `seconds` | `string` | No |  |
| `size` | `string` | No |  |
| `video` | `map[string]any` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.CreateSora2Video(nil).Create(map[string]any{
    "main_prompt": "example_main_prompt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreateSora2VideoEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CreateVariationEntity

```go
createVariation := client.CreateVariation(nil)
fmt.Println(createVariation.GetName()) // "create_variation"
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.CreateVariation(nil).Create(map[string]any{
    "hook_duration": 1,
    "media_asset_id": "example_media_asset_id",
    "product_id": "example_product_id",
    "prompt": "example_prompt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreateVariationEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CustomerEntity

```go
customer := client.Customer(nil)
fmt.Println(customer.GetName()) // "customer"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `any` | No |  |
| `assigned_agents_count` | `int` | Yes |  |
| `email` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `is_migrated` | `bool` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.Customer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomerEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CustomerHealthEntity

```go
customerHealth := client.CustomerHealth(nil)
fmt.Println(customerHealth.GetName()) // "customer_health"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_agents` | `map[string]any` | Yes |  |
| `available_dates` | `[]any` | Yes |  |
| `date` | `string` | Yes |  |
| `email` | `string` | Yes |  |
| `entries` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `performance_overview` | `map[string]any` | Yes |  |
| `platform_coverage_summary` | `map[string]any` | Yes |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.CustomerHealth(nil).Load(map[string]any{"id": "customer_health_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomerHealthEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CustomerHealthAllCustomersItemEntity

```go
customerHealthAllCustomersItem := client.CustomerHealthAllCustomersItem(nil)
fmt.Println(customerHealthAllCustomersItem.GetName()) // "customer_health_all_customers_item"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `any` | No |  |
| `assigned_agents_count` | `int` | Yes |  |
| `daily_stats` | `[]any` | Yes |  |
| `email` | `string` | Yes |  |
| `is_migrated` | `bool` | No |  |
| `total_views` | `int` | Yes |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.CustomerHealthAllCustomersItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomerHealthAllCustomersItemEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CustomerHealthViewsSummaryEntity

```go
customerHealthViewsSummary := client.CustomerHealthViewsSummary(nil)
fmt.Println(customerHealthViewsSummary.GetName()) // "customer_health_views_summary"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `average_views_per_result` | `int` | Yes |  |
| `date` | `string` | Yes |  |
| `end_date` | `any` | No |  |
| `paid_users_count` | `int` | Yes |  |
| `posted_results` | `int` | Yes |  |
| `range` | `string` | Yes |  |
| `start_date` | `any` | No |  |
| `top_users` | `[]any` | Yes |  |
| `total_views` | `int` | Yes |  |
| `trend` | `[]any` | Yes |  |
| `trend_granularity` | `string` | Yes |  |
| `user_email` | `any` | No |  |
| `user_id` | `string` | No |  |
| `users_with_views` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.CustomerHealthViewsSummary(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomerHealthViewsSummaryEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## DailyEntity

```go
daily := client.Daily(nil)
fmt.Println(daily.GetName()) // "daily"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Daily(nil).Create(map[string]any{
    "id": "example_id",
    "day": "example_day",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DailyEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## DailyStatusEntity

```go
dailyStatus := client.DailyStatus(nil)
fmt.Println(dailyStatus.GetName()) // "daily_status"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.DailyStatus(nil).Load(map[string]any{"id": "daily_status_id", "day": "day"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DailyStatusEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## DedicatedAgentsDashboardEntity

```go
dedicatedAgentsDashboard := client.DedicatedAgentsDashboard(nil)
fmt.Println(dedicatedAgentsDashboard.GetName()) // "dedicated_agents_dashboard"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_connections` | `int` | Yes |  |
| `assigned_user_id` | `string` | No |  |
| `assigned_user_ids` | `[]any` | No |  |
| `bio` | `any` | Yes |  |
| `id` | `string` | Yes |  |
| `instagram_url` | `any` | No |  |
| `is_active` | `bool` | Yes |  |
| `last_admin_synced_at` | `any` | No |  |
| `name` | `string` | Yes |  |
| `role` | `any` | Yes |  |
| `tiktok_stats` | `any` | No |  |
| `tiktok_url` | `any` | No |  |
| `today_failed_entries` | `[]any` | No |  |
| `today_stats` | `map[string]any` | Yes |  |
| `upload_post_platforms` | `any` | No |  |
| `upload_post_profile` | `any` | No |  |
| `yesterday_failed_entries` | `[]any` | No |  |
| `yesterday_stats` | `map[string]any` | Yes |  |
| `youtube_url` | `any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.DedicatedAgentsDashboard(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DedicatedAgentsDashboardEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## EnterpriseAgentEntity

```go
enterpriseAgent := client.EnterpriseAgent(nil)
fmt.Println(enterpriseAgent.GetName()) // "enterprise_agent"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.EnterpriseAgent(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.EnterpriseAgent(nil).Create(map[string]any{
    "product_id": "example_product_id",
    "source_product_id": "example_source_product_id",
    "target_product_id": "example_target_product_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EnterpriseAgentEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## EnterpriseProductEntity

```go
enterpriseProduct := client.EnterpriseProduct(nil)
fmt.Println(enterpriseProduct.GetName()) // "enterprise_product"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.EnterpriseProduct(nil).Load(map[string]any{"product_id": "product_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EnterpriseProductEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ExactAvailabilityEntity

```go
exactAvailability := client.ExactAvailability(nil)
fmt.Println(exactAvailability.GetName()) // "exact_availability"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.ExactAvailability(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ExactAvailabilityEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ExactFormulaEntity

```go
exactFormula := client.ExactFormula(nil)
fmt.Println(exactFormula.GetName()) // "exact_formula"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.ExactFormula(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ExactFormulaEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ExtractV2Entity

```go
extractV2 := client.ExtractV2(nil)
fmt.Println(extractV2.GetName()) // "extract_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instagram_username` | `any` | No |  |
| `message` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.ExtractV2(nil).Create(map[string]any{
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ExtractV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## FailedPostEntity

```go
failedPost := client.FailedPost(nil)
fmt.Println(failedPost.GetName()) // "failed_post"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.FailedPost(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FailedPostEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## FileEntity

```go
file := client.File(nil)
fmt.Println(file.GetName()) // "file"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.File(nil).Create(map[string]any{
    "file": "example_file",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FileEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## GenerateBlackoutSora2PromptEntity

```go
generateBlackoutSora2Prompt := client.GenerateBlackoutSora2Prompt(nil)
fmt.Println(generateBlackoutSora2Prompt.GetName()) // "generate_blackout_sora2_prompt"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `media_asset_id` | `string` | Yes |  |
| `product_id` | `string` | Yes |  |
| `prompt` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.GenerateBlackoutSora2Prompt(nil).Create(map[string]any{
    "media_asset_id": "example_media_asset_id",
    "product_id": "example_product_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GenerateBlackoutSora2PromptEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## GeneratePomelliDemoEntity

```go
generatePomelliDemo := client.GeneratePomelliDemo(nil)
fmt.Println(generatePomelliDemo.GetName()) // "generate_pomelli_demo"
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.GeneratePomelliDemo(nil).Create(map[string]any{
    "product_id": "example_product_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GeneratePomelliDemoEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## GeneratePromptEntity

```go
generatePrompt := client.GeneratePrompt(nil)
fmt.Println(generatePrompt.GetName()) // "generate_prompt"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hook_duration` | `int` | Yes |  |
| `media_asset_id` | `string` | Yes |  |
| `media_asset_url` | `string` | Yes |  |
| `prompt` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.GeneratePrompt(nil).Create(map[string]any{
    "media_asset_id": "example_media_asset_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GeneratePromptEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## GenerateSora2PromptEntity

```go
generateSora2Prompt := client.GenerateSora2Prompt(nil)
fmt.Println(generateSora2Prompt.GetName()) // "generate_sora2_prompt"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `prompt` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.GenerateSora2Prompt(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GenerateSora2PromptEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## HealthrxEntity

```go
healthrx := client.Healthrx(nil)
fmt.Println(healthrx.GetName()) // "healthrx"
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
| `dimensions` | `map[string]any` | Yes |  |
| `duration_seconds` | `int` | No |  |
| `evidence` | `string` | Yes |  |
| `evidence_urls` | `[]any` | Yes |  |
| `external_key` | `string` | Yes |  |
| `format` | `string` | No |  |
| `includes_all_attempt_costs` | `bool` | No |  |
| `input_specification` | `map[string]any` | Yes |  |
| `kind` | `string` | Yes |  |
| `level` | `int` | No |  |
| `measured_at` | `string` | Yes |  |
| `model_version` | `string` | Yes |  |
| `paid_campaign_id` | `string` | No |  |
| `parent_content_id` | `string` | No |  |
| `paused` | `bool` | Yes |  |
| `pillar` | `string` | Yes |  |
| `profile` | `map[string]any` | Yes |  |
| `promotion_evidence` | `string` | No |  |
| `provider` | `string` | Yes |  |
| `provider_invoice_evidence` | `string` | Yes |  |
| `reason` | `string` | Yes |  |
| `reference_version` | `string` | Yes |  |
| `request_key` | `string` | Yes |  |
| `scope` | `string` | No |  |
| `test_variable` | `string` | Yes |  |
| `topic` | `string` | Yes |  |
| `total_cost_usd` | `float64` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.Healthrx(nil).Load(map[string]any{"product_id": "product_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Healthrx(nil).Create(map[string]any{
    "product_id": "example_product_id",
    "agent_id": "example_agent_id",
    "attempt": 1,
    "benchmark_set": "example_benchmark_set",
    "commercial_license_evidence": "example_commercial_license_evidence",
    "dimensions": map[string]any{},
    "evidence": "example_evidence",
    "evidence_urls": []any{},
    "external_key": "example_external_key",
    "input_specification": map[string]any{},
    "kind": "example_kind",
    "measured_at": "example_measured_at",
    "model_version": "example_model_version",
    "paused": true,
    "pillar": "example_pillar",
    "profile": map[string]any{},
    "provider": "example_provider",
    "provider_invoice_evidence": "example_provider_invoice_evidence",
    "reason": "example_reason",
    "reference_version": "example_reference_version",
    "request_key": "example_request_key",
    "test_variable": "example_test_variable",
    "topic": "example_topic",
    "total_cost_usd": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `HealthrxEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## InitResetProductV6Entity

```go
initResetProductV6 := client.InitResetProductV6(nil)
fmt.Println(initResetProductV6.GetName()) // "init_reset_product_v6"
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.InitResetProductV6(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InitResetProductV6Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## IriEntity

```go
iri := client.Iri(nil)
fmt.Println(iri.GetName()) // "iri"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `correlationId` | `any` | No |  |
| `idempotencyKey` | `string` | Yes |  |
| `productId` | `any` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Iri(nil).Create(map[string]any{
    "connector_id": "example_connector_id",
    "idempotencyKey": "example_idempotencyKey",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IriEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## IrisCapabilityEntity

```go
irisCapability := client.IrisCapability(nil)
fmt.Println(irisCapability.GetName()) // "iris_capability"
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
| `input` | `map[string]any` | No |  |
| `membershipId` | `any` | No |  |
| `message` | `any` | No |  |
| `ok` | `bool` | Yes |  |
| `platformAccountId` | `any` | No |  |
| `platformLinkId` | `any` | No |  |
| `productScope` | `string` | Yes |  |
| `requestedBy` | `map[string]any` | No |  |
| `result` | `map[string]any` | No |  |
| `retryable` | `bool` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.IrisCapability(nil).Create(map[string]any{
    "id": "example_id",
    "capability": "example_capability",
    "correlationId": "example_correlationId",
    "externalUserId": "example_externalUserId",
    "idempotencyKey": "example_idempotencyKey",
    "productScope": "example_productScope",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IrisCapabilityEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## IrisChatEntity

```go
irisChat := client.IrisChat(nil)
fmt.Println(irisChat.GetName()) // "iris_chat"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artifacts` | `[]any` | No |  |
| `correlationId` | `string` | Yes |  |
| `idempotencyKey` | `string` | Yes |  |
| `message` | `string` | Yes |  |
| `mode` | `string` | Yes |  |
| `ok` | `bool` | No |  |
| `pageContext` | `map[string]any` | No |  |
| `productId` | `any` | No |  |
| `runtimeStatus` | `string` | Yes |  |
| `sessionId` | `any` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.IrisChat(nil).Create(map[string]any{
    "correlationId": "example_correlationId",
    "idempotencyKey": "example_idempotencyKey",
    "message": "example_message",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IrisChatEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## IrisConnectorEntity

```go
irisConnector := client.IrisConnector(nil)
fmt.Println(irisConnector.GetName()) // "iris_connector"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectors` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.IrisConnector(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IrisConnectorEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## IrisStatusEntity

```go
irisStatus := client.IrisStatus(nil)
fmt.Println(irisStatus.GetName()) // "iris_status"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectorsPreview` | `[]any` | No |  |
| `product` | `any` | No |  |
| `status` | `map[string]any` | Yes |  |
| `tasksPreview` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.IrisStatus(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IrisStatusEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## IrisTaskEntity

```go
irisTask := client.IrisTask(nil)
fmt.Println(irisTask.GetName()) // "iris_task"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approvalRequired` | `bool` | No |  |
| `cadence` | `string` | No |  |
| `capability` | `any` | No |  |
| `completed` | `[]any` | No |  |
| `description` | `string` | No |  |
| `discover` | `[]any` | No |  |
| `productId` | `any` | No |  |
| `recurring` | `[]any` | No |  |
| `requiredConnectors` | `[]any` | No |  |
| `title` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.IrisTask(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.IrisTask(nil).Create(map[string]any{
    "title": "example_title",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IrisTaskEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## IrisUsageEntity

```go
irisUsage := client.IrisUsage(nil)
fmt.Println(irisUsage.GetName()) // "iris_usage"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `eventCount` | `int` | No |  |
| `events` | `[]any` | No |  |
| `membershipId` | `any` | No |  |
| `productScope` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.IrisUsage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IrisUsageEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## LandingEntity

```go
landing := client.Landing(nil)
fmt.Println(landing.GetName()) // "landing"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Landing(nil).Create(map[string]any{
    "index": 1,
    "file": "example_file",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LandingEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## LandingStatEntity

```go
landingStat := client.LandingStat(nil)
fmt.Println(landingStat.GetName()) // "landing_stat"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `landing` | `map[string]any` | Yes |  |
| `microhub` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.LandingStat(nil).Load(map[string]any{"slug": "slug"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LandingStatEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## LandingStatusEntity

```go
landingStatus := client.LandingStatus(nil)
fmt.Println(landingStatus.GetName()) // "landing_status"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errorMessage` | `any` | No |  |
| `landingStatus` | `string` | Yes |  |
| `microhubStatus` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.LandingStatus(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LandingStatusEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## LinkInBioEntity

```go
linkInBio := client.LinkInBio(nil)
fmt.Println(linkInBio.GetName()) // "link_in_bio"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `linkInBioType` | `string` | Yes |  |
| `redirectUrl` | `string` | Yes |  |
| `slug` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.LinkInBio(nil).Load(map[string]any{"slug": "slug"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LinkInBioEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## LinkInDmEntity

```go
linkInDm := client.LinkInDm(nil)
fmt.Println(linkInDm.GetName()) // "link_in_dm"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `linkInDmsType` | `string` | Yes |  |
| `redirectUrl` | `string` | Yes |  |
| `slug` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.LinkInDm(nil).Load(map[string]any{"slug": "slug"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LinkInDmEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## LinkInPostEntity

```go
linkInPost := client.LinkInPost(nil)
fmt.Println(linkInPost.GetName()) // "link_in_post"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `linkInPostsType` | `string` | Yes |  |
| `redirectUrl` | `string` | Yes |  |
| `showLinkInFirstComment` | `bool` | Yes |  |
| `slug` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.LinkInPost(nil).Load(map[string]any{"slug": "slug"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LinkInPostEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## LinkUserEntity

```go
linkUser := client.LinkUser(nil)
fmt.Println(linkUser.GetName()) // "link_user"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `already_linked` | `bool` | No |  |
| `onboarding_data_id` | `string` | Yes | UUID of the OnboardingData record |
| `success` | `bool` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.LinkUser(nil).Create(map[string]any{
    "onboarding_data_id": "example_onboarding_data_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LinkUserEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## MediaAssetEntity

```go
mediaAsset := client.MediaAsset(nil)
fmt.Println(mediaAsset.GetName()) // "media_asset"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `description` | `string` | No |  |
| `file` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `media_assets` | `[]any` | Yes |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.MediaAsset(nil).Load(map[string]any{"id": "media_asset_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.MediaAsset(nil).Create(map[string]any{
    "category": "example_category",
    "createdAt": "example_createdAt",
    "file": "example_file",
    "id": "example_id",
    "media_assets": []any{},
    "onboarding_data_id": "example_onboarding_data_id",
    "source": "example_source",
    "type": "example_type",
    "updatedAt": "example_updatedAt",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MediaAssetEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## MenEntity

```go
men := client.Men(nil)
fmt.Println(men.GetName()) // "men"
```

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.Men(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MenEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## MicrodramaEntity

```go
microdrama := client.Microdrama(nil)
fmt.Println(microdrama.GetName()) // "microdrama"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `evidence` | `map[string]any` | Yes |  |
| `expected_revision` | `int` | Yes |  |
| `idempotency_key` | `string` | Yes |  |
| `issues` | `[]any` | No |  |
| `reason` | `string` | Yes |  |
| `role` | `string` | Yes |  |
| `scores` | `map[string]any` | Yes |  |
| `selected_premise_id` | `string` | No |  |
| `stage` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `subject_hash` | `string` | Yes |  |
| `title` | `string` | No |  |
| `verdict` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.Microdrama(nil).Load(map[string]any{"episode_id": "episode_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Microdrama(nil).Create(map[string]any{
    "episode_id": "example_episode_id",
    "evidence": map[string]any{},
    "expected_revision": 1,
    "idempotency_key": "example_idempotency_key",
    "reason": "example_reason",
    "role": "example_role",
    "scores": map[string]any{},
    "stage": "example_stage",
    "status": "example_status",
    "subject_hash": "example_subject_hash",
    "verdict": "example_verdict",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.Microdrama(nil).Update(map[string]any{
    "episode_id": "episode_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MicrodramaEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## MicrohubPublicEntity

```go
microhubPublic := client.MicrohubPublic(nil)
fmt.Println(microhubPublic.GetName()) // "microhub_public"
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
| `links` | `[]any` | No |  |
| `name` | `string` | No |  |
| `profileImageUrl` | `any` | No |  |
| `slug` | `string` | Yes |  |
| `socialLinks` | `map[string]any` | No |  |
| `testimonials` | `[]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.MicrohubPublic(nil).Load(map[string]any{"slug": "slug"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MicrohubPublicEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## OnboardingStatusEntity

```go
onboardingStatus := client.OnboardingStatus(nil)
fmt.Println(onboardingStatus.GetName()) // "onboarding_status"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `int` | No |  |
| `cover_image_url` | `any` | No |  |
| `id` | `string` | Yes |  |
| `likes` | `int` | No |  |
| `platform` | `string` | Yes |  |
| `video_url` | `any` | No |  |
| `views` | `int` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.OnboardingStatus(nil).List(map[string]any{"oid": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OnboardingStatusEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## OnboardingV6Entity

```go
onboardingV6 := client.OnboardingV6(nil)
fmt.Println(onboardingV6.GetName()) // "onboarding_v6"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.OnboardingV6(nil).Remove(map[string]any{"media_asset_id": "media_asset_id", "onboarding_data_id": "onboarding_data_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OnboardingV6Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## PaidUserEntity

```go
paidUser := client.PaidUser(nil)
fmt.Println(paidUser.GetName()) // "paid_user"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agents_count` | `int` | Yes |  |
| `assigned_agents_count` | `int` | No |  |
| `auto_schedule_enabled` | `any` | Yes |  |
| `credits` | `int` | Yes |  |
| `effective_agents_count` | `int` | Yes |  |
| `email` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `is_internal_user` | `bool` | No |  |
| `is_migrated_user` | `bool` | No |  |
| `membership` | `any` | Yes |  |
| `scheduled_queue_count` | `int` | Yes |  |
| `subscription_details` | `any` | No |  |
| `subscription_status` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.PaidUser(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PaidUserEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## PexelEntity

```go
pexel := client.Pexel(nil)
fmt.Println(pexel.GetName()) // "pexel"
```

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.Pexel(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PexelEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## PhoneAdminAvailableAgentSourceEntity

```go
phoneAdminAvailableAgentSource := client.PhoneAdminAvailableAgentSource(nil)
fmt.Println(phoneAdminAvailableAgentSource.GetName()) // "phone_admin_available_agent_source"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_count` | `int` | Yes |  |
| `pc_name` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.PhoneAdminAvailableAgentSource(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PhoneAdminAvailableAgentSourceEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ProductEntity

```go
product := client.Product(nil)
fmt.Println(product.GetName()) // "product"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_count` | `int` | Yes |  |
| `agents` | `[]any` | Yes |  |
| `createdAt` | `any` | No |  |
| `demoVideos` | `any` | No |  |
| `description` | `string` | No |  |
| `favicon_url` | `any` | No |  |
| `howItWorks` | `any` | No |  |
| `how_it_works` | `any` | No |  |
| `id` | `string` | Yes |  |
| `images` | `any` | No |  |
| `initial_agents` | `int` | No |  |
| `instagramHandle` | `any` | No |  |
| `instagram_handle` | `any` | No |  |
| `isActive` | `any` | No |  |
| `isApp` | `any` | No |  |
| `is_active` | `bool` | Yes |  |
| `is_app` | `bool` | No |  |
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
| `product_demo_ids` | `[]any` | No |  |
| `product_details` | `map[string]any` | Yes | Product details for enterprise product creation |
| `product_id` | `string` | Yes |  |
| `product_name` | `string` | Yes |  |
| `product_url` | `string` | Yes |  |
| `pronunciation` | `any` | No |  |
| `regenerate_sora2` | `bool` | No |  |
| `repostSource` | `any` | No |  |
| `repost_source` | `any` | No |  |
| `screenshot_url` | `any` | No |  |
| `social_post_ids` | `[]any` | No |  |
| `targetAudience` | `any` | No |  |
| `target_audience` | `any` | No |  |
| `templateProductId` | `any` | No |  |
| `tiktokHandle` | `any` | No |  |
| `tiktok_handle` | `any` | No |  |
| `total_count` | `int` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.Product(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.Product(nil).Load(map[string]any{"id": "product_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Product(nil).Create(map[string]any{
    "product_details": map[string]any{},
    "product_url": "example_product_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.Product(nil).Update(map[string]any{
    "id": "product_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.Product(nil).Remove(map[string]any{"id": "product_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProductEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ProductDashboardEntity

```go
productDashboard := client.ProductDashboard(nil)
fmt.Println(productDashboard.GetName()) // "product_dashboard"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agents` | `[]any` | Yes |  |
| `date` | `string` | Yes |  |
| `pagination` | `map[string]any` | Yes |  |
| `phone_admin_error` | `any` | No |  |
| `products` | `[]any` | Yes |  |
| `selected_product` | `any` | Yes |  |
| `summary` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.ProductDashboard(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProductDashboardEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ProductDashboardViewEntity

```go
productDashboardView := client.ProductDashboardView(nil)
fmt.Println(productDashboardView.GetName()) // "product_dashboard_view"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes |  |
| `views` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.ProductDashboardView(nil).List(map[string]any{"product_id": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProductDashboardViewEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ProductDemoEntity

```go
productDemo := client.ProductDemo(nil)
fmt.Println(productDemo.GetName()) // "product_demo"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.ProductDemo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProductDemoEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ProductLandingEntity

```go
productLanding := client.ProductLanding(nil)
fmt.Println(productLanding.GetName()) // "product_landing"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bio` | `any` | No |  |
| `commentingOnMyPosts` | `bool` | Yes |  |
| `commentingOnOthersPosts` | `bool` | Yes |  |
| `ctaButtonText` | `any` | No |  |
| `ctaDescription` | `any` | No |  |
| `ctaLink` | `any` | No |  |
| `ctaTitle` | `any` | No |  |
| `dmCommenters` | `bool` | Yes |  |
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
| `microhubLinks` | `[]any` | No |  |
| `microhubName` | `any` | No |  |
| `microhubProfileImageUrl` | `any` | No |  |
| `microhubScreenshotUrl` | `any` | No |  |
| `microhubSocialLinks` | `map[string]any` | No |  |
| `microhubStatus` | `string` | Yes |  |
| `microhubTestimonials` | `[]any` | No |  |
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
| `showLinkInFirstComment` | `bool` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.ProductLanding(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.ProductLanding(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProductLandingEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## PublicResumeStatusEntity

```go
publicResumeStatus := client.PublicResumeStatus(nil)
fmt.Println(publicResumeStatus.GetName()) // "public_resume_status"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `can_resume_prelogin` | `bool` | No |  |
| `content_collection_ready` | `bool` | No |  |
| `current_step` | `any` | No |  |
| `exists` | `bool` | Yes |  |
| `flow_variant` | `any` | No |  |
| `repost_content_count` | `int` | No |  |
| `repost_source` | `any` | No |  |
| `requires_repost_content` | `bool` | No |  |
| `skip_demo` | `bool` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.PublicResumeStatus(nil).Load(map[string]any{"oid": "oid"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PublicResumeStatusEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ReRollVideoEntity

```go
reRollVideo := client.ReRollVideo(nil)
fmt.Println(reRollVideo.GetName()) // "re_roll_video"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `queue_id` | `string` | Yes |  |
| `requires_polling` | `bool` | No |  |
| `skip_credit_check` | `bool` | No |  |
| `video` | `map[string]any` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.ReRollVideo(nil).Create(map[string]any{
    "queue_id": "example_queue_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReRollVideoEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ReadRootGetEntity

```go
readRootGet := client.ReadRootGet(nil)
fmt.Println(readRootGet.GetName()) // "read_root_get"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.ReadRootGet(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReadRootGetEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## RecordDemoBookedEntity

```go
recordDemoBooked := client.RecordDemoBooked(nil)
fmt.Println(recordDemoBooked.GetName()) // "record_demo_booked"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calendlyEventUri` | `any` | No |  |
| `calendlyInviteeUri` | `any` | No |  |
| `message` | `map[string]any` | Yes |  |
| `session` | `map[string]any` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.RecordDemoBooked(nil).Create(map[string]any{
    "session_id": "example_session_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RecordDemoBookedEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## RefreshStatEntity

```go
refreshStat := client.RefreshStat(nil)
fmt.Println(refreshStat.GetName()) // "refresh_stat"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date_from` | `any` | No | Start date to refresh stats for (defaults to yesterday) |
| `date_to` | `any` | No | End date to refresh stats for (defaults to date_from) |
| `entries_found` | `int` | Yes |  |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.RefreshStat(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RefreshStatEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## RemixerClipperEntity

```go
remixerClipper := client.RemixerClipper(nil)
fmt.Println(remixerClipper.GetName()) // "remixer_clipper"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.RemixerClipper(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.RemixerClipper(nil).Create(map[string]any{
    "identifier": "example_identifier",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RemixerClipperEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ResetProductEntity

```go
resetProduct := client.ResetProduct(nil)
fmt.Println(resetProduct.GetName()) // "reset_product"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.ResetProduct(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.ResetProduct(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ResetProductEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## RetryWebsiteScrapeEntity

```go
retryWebsiteScrape := client.RetryWebsiteScrape(nil)
fmt.Println(retryWebsiteScrape.GetName()) // "retry_website_scrape"
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.RetryWebsiteScrape(nil).Create(map[string]any{
    "onboarding_data_id": "example_onboarding_data_id",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RetryWebsiteScrapeEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## SaveSurveyEntity

```go
saveSurvey := client.SaveSurvey(nil)
fmt.Println(saveSurvey.GetName()) // "save_survey"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email_sent` | `bool` | No |  |
| `onboarding_data_id` | `string` | Yes | UUID of the OnboardingData record |
| `success` | `bool` | Yes |  |
| `survey` | `map[string]any` | Yes | Survey response data from frontend. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.SaveSurvey(nil).Create(map[string]any{
    "onboarding_data_id": "example_onboarding_data_id",
    "survey": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SaveSurveyEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ScanSocialEntity

```go
scanSocial := client.ScanSocial(nil)
fmt.Println(scanSocial.GetName()) // "scan_social"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instagram_handle` | `any` | No |  |
| `onboarding_data_id` | `string` | Yes |  |
| `product_id` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `success` | `bool` | Yes |  |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.ScanSocial(nil).Create(map[string]any{
    "onboarding_data_id": "example_onboarding_data_id",
    "tiktok_handle": "example_tiktok_handle",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ScanSocialEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ScanSocialsPublicEntity

```go
scanSocialsPublic := client.ScanSocialsPublic(nil)
fmt.Println(scanSocialsPublic.GetName()) // "scan_socials_public"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instagram_handle` | `any` | No | Instagram username/handle to scrape |
| `message` | `any` | No |  |
| `onboarding_data_id` | `string` | Yes | UUID of the OnboardingData record |
| `status` | `string` | Yes |  |
| `success` | `bool` | Yes |  |
| `tiktok_handle` | `any` | No | TikTok username/handle to scrape |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.ScanSocialsPublic(nil).Create(map[string]any{
    "onboarding_data_id": "example_onboarding_data_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ScanSocialsPublicEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ScanSocialsStatusEntity

```go
scanSocialsStatus := client.ScanSocialsStatus(nil)
fmt.Println(scanSocialsStatus.GetName()) // "scan_socials_status"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.ScanSocialsStatus(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ScanSocialsStatusEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ScheduleV2Entity

```go
scheduleV2 := client.ScheduleV2(nil)
fmt.Println(scheduleV2.GetName()) // "schedule_v2"
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
| `is_instagram_posted` | `bool` | No |  |
| `is_tiktok_posted` | `bool` | No |  |
| `is_youtube_posted` | `bool` | No |  |
| `reorders` | `[]any` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.ScheduleV2(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.ScheduleV2(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.ScheduleV2(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "id": "example_id",
    "reorders": []any{},
    "scheduled_datetime": "example_scheduled_datetime",
    "source_type": "example_source_type",
    "status": "example_status",
    "video_id": "example_video_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.ScheduleV2(nil).Update(map[string]any{
    "queue_id": "queue_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.ScheduleV2(nil).Remove(map[string]any{"queue_id": "queue_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ScheduleV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ScrapeEntity

```go
scrape := client.Scrape(nil)
fmt.Println(scrape.GetName()) // "scrape"
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Scrape(nil).Create(map[string]any{
    "old_product_id": "example_old_product_id",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ScrapeEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ScrapeWebsitePublicEntity

```go
scrapeWebsitePublic := client.ScrapeWebsitePublic(nil)
fmt.Println(scrapeWebsitePublic.GetName()) // "scrape_website_public"
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.ScrapeWebsitePublic(nil).Create(map[string]any{
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ScrapeWebsitePublicEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ScrapedDataEntity

```go
scrapedData := client.ScrapedData(nil)
fmt.Println(scrapedData.GetName()) // "scraped_data"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes |  |
| `homepageVideoUrl` | `any` | No |  |
| `howItWorks` | `string` | Yes |  |
| `imageUrls` | `[]any` | Yes |  |
| `instagram_username` | `any` | No |  |
| `mediaAssets` | `[]any` | No |  |
| `name` | `string` | Yes |  |
| `pricingAndOffers` | `string` | Yes |  |
| `targetAudience` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.ScrapedData(nil).Create(map[string]any{
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ScrapedDataEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ScrapingStatusEntity

```go
scrapingStatus := client.ScrapingStatus(nil)
fmt.Println(scrapingStatus.GetName()) // "scraping_status"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.ScrapingStatus(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ScrapingStatusEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## SelfServeActivateEntity

```go
selfServeActivate := client.SelfServeActivate(nil)
fmt.Println(selfServeActivate.GetName()) // "self_serve_activate"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `onboarding_data_id` | `string` | Yes | UUID of the OnboardingData record |
| `redirect_to_stripe` | `bool` | No |  |
| `stripe_checkout_url` | `any` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.SelfServeActivate(nil).Create(map[string]any{
    "onboarding_data_id": "example_onboarding_data_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SelfServeActivateEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## SeoEntity

```go
seo := client.Seo(nil)
fmt.Println(seo.GetName()) // "seo"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.Seo(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SeoEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## SeoAiMentionEntity

```go
seoAiMention := client.SeoAiMention(nil)
fmt.Println(seoAiMention.GetName()) // "seo_ai_mention"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bucket` | `string` | Yes |  |
| `domain_type` | `string` | Yes |  |
| `dominant_domain` | `string` | Yes |  |
| `engine` | `string` | Yes |  |
| `evidence` | `map[string]any` | Yes |  |
| `geo` | `string` | Yes |  |
| `language` | `string` | Yes |  |
| `primary_url` | `string` | Yes |  |
| `prompt_text` | `string` | Yes |  |
| `run_week` | `string` | Yes |  |
| `secondary_urls` | `[]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.SeoAiMention(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SeoAiMentionEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## SeoBacklinkEntity

```go
seoBacklink := client.SeoBacklink(nil)
fmt.Println(seoBacklink.GetName()) // "seo_backlink"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.SeoBacklink(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SeoBacklinkEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## SeoKeywordEntity

```go
seoKeyword := client.SeoKeyword(nil)
fmt.Println(seoKeyword.GetName()) // "seo_keyword"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blog_page` | `string` | Yes |  |
| `current_position` | `float64` | Yes |  |
| `keyword` | `string` | Yes |  |
| `keyword_group` | `string` | Yes |  |
| `position_change` | `float64` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.SeoKeyword(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SeoKeywordEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## SeoOverviewEntity

```go
seoOverview := client.SeoOverview(nil)
fmt.Println(seoOverview.GetName()) // "seo_overview"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clicks` | `float64` | Yes |  |
| `ctr` | `float64` | Yes |  |
| `date` | `string` | Yes |  |
| `impressions` | `float64` | Yes |  |
| `position` | `float64` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.SeoOverview(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SeoOverviewEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## SeoTrafficEntity

```go
seoTraffic := client.SeoTraffic(nil)
fmt.Println(seoTraffic.GetName()) // "seo_traffic"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_date` | `string` | Yes |  |
| `series` | `[]any` | Yes |  |
| `site_url` | `string` | Yes |  |
| `start_date` | `string` | Yes |  |
| `top_countries` | `[]any` | Yes |  |
| `top_pages` | `[]any` | Yes |  |
| `top_queries` | `[]any` | Yes |  |
| `totals` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.SeoTraffic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SeoTrafficEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ShareAccessLinkEntity

```go
shareAccessLink := client.ShareAccessLink(nil)
fmt.Println(shareAccessLink.GetName()) // "share_access_link"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `share_token` | `string` | Yes |  |
| `share_url` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.ShareAccessLink(nil).Create(map[string]any{
    "share_token": "example_share_token",
    "share_url": "example_share_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ShareAccessLinkEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## SiteEntity

```go
site := client.Site(nil)
fmt.Println(site.GetName()) // "site"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.Site(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SiteEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## SlideEntity

```go
slide := client.Slide(nil)
fmt.Println(slide.GetName()) // "slide"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `caption` | `any` | No |  |
| `id` | `string` | No |  |
| `prompt` | `any` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Slide(nil).Create(map[string]any{
    "carousel_id": "example_carousel_id",
    "slide_index": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.Slide(nil).Update(map[string]any{
    "carousel_id": "carousel_id",
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SlideEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## SlugValidationEntity

```go
slugValidation := client.SlugValidation(nil)
fmt.Println(slugValidation.GetName()) // "slug_validation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `reason` | `any` | No |  |
| `valid` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.SlugValidation(nil).Load(map[string]any{"slug": "slug"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SlugValidationEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## SocialEntity

```go
social := client.Social(nil)
fmt.Println(social.GetName()) // "social"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.Social(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.Social(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Social(nil).Create(map[string]any{
    "code": "example_code",
    "code_verifier": "example_code_verifier",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.Social(nil).Remove(map[string]any{"platform": "platform"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SocialEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## SocialScanPreviewEntity

```go
socialScanPreview := client.SocialScanPreview(nil)
fmt.Println(socialScanPreview.GetName()) // "social_scan_preview"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instagram_handle` | `any` | No | Instagram username/handle to scrape |
| `posts` | `[]any` | Yes |  |
| `success` | `bool` | Yes |  |
| `tiktok_handle` | `any` | No | TikTok username/handle to scrape |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.SocialScanPreview(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SocialScanPreviewEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## SocialScanProcessEntity

```go
socialScanProcess := client.SocialScanProcess(nil)
fmt.Println(socialScanProcess.GetName()) // "social_scan_process"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `posts` | `[]any` | Yes |  |
| `product_id` | `string` | Yes |  |
| `success` | `bool` | Yes |  |
| `task_id` | `string` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.SocialScanProcess(nil).Create(map[string]any{
    "posts": []any{},
    "product_id": "example_product_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SocialScanProcessEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## SocialScanSaveEntity

```go
socialScanSave := client.SocialScanSave(nil)
fmt.Println(socialScanSave.GetName()) // "social_scan_save"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `media_asset_ids` | `[]any` | Yes |  |
| `posts` | `[]any` | Yes |  |
| `product_id` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.SocialScanSave(nil).Create(map[string]any{
    "posts": []any{},
    "product_id": "example_product_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SocialScanSaveEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## Sora2AvatarEntity

```go
sora2Avatar := client.Sora2Avatar(nil)
fmt.Println(sora2Avatar.GetName()) // "sora2_avatar"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_frame_url` | `any` | No |  |
| `created_at` | `string` | Yes |  |
| `current_step` | `int` | No |  |
| `headshot_url` | `any` | No |  |
| `id` | `string` | Yes |  |
| `logs` | `map[string]any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.Sora2Avatar(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.Sora2Avatar(nil).Load(map[string]any{"id": "sora2_avatar_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Sora2Avatar(nil).Create(map[string]any{
    "prompt_key": "example_prompt_key",
    "selected_age_bucket": "example_selected_age_bucket",
    "selected_gender": "example_selected_gender",
    "selected_race": "example_selected_race",
    "sora2_video_url": "example_sora2_video_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.Sora2Avatar(nil).Update(map[string]any{
    "id": "sora2_avatar_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `Sora2AvatarEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## Sora2AvatarAssetUploadEntity

```go
sora2AvatarAssetUpload := client.Sora2AvatarAssetUpload(nil)
fmt.Println(sora2AvatarAssetUpload.GetName()) // "sora2_avatar_asset_upload"
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Sora2AvatarAssetUpload(nil).Create(map[string]any{
    "file": "example_file",
    "s3_key": "example_s3_key",
    "upload_type": "example_upload_type",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `Sora2AvatarAssetUploadEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## Sora2AvatarStatEntity

```go
sora2AvatarStat := client.Sora2AvatarStat(nil)
fmt.Println(sora2AvatarStat.GetName()) // "sora2_avatar_stat"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `by_age_bucket` | `map[string]any` | Yes |  |
| `by_gender` | `map[string]any` | Yes |  |
| `by_prompt_key` | `map[string]any` | Yes |  |
| `by_race` | `map[string]any` | Yes |  |
| `completed_avatars` | `int` | Yes |  |
| `completion_rate` | `float64` | Yes |  |
| `total_avatars` | `int` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.Sora2AvatarStat(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `Sora2AvatarStatEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## StatEntity

```go
stat := client.Stat(nil)
fmt.Println(stat.GetName()) // "stat"
```

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.Stat(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StatEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## StatsRefreshBackfillEntity

```go
statsRefreshBackfill := client.StatsRefreshBackfill(nil)
fmt.Println(statsRefreshBackfill.GetName()) // "stats_refresh_backfill"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `task_id` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.StatsRefreshBackfill(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StatsRefreshBackfillEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## StatsRefreshIssueEntity

```go
statsRefreshIssue := client.StatsRefreshIssue(nil)
fmt.Println(statsRefreshIssue.GetName()) // "stats_refresh_issue"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aged_over_24h` | `bool` | Yes |  |
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
| `retry_count` | `int` | Yes |  |
| `schedule_queue_id` | `string` | No |  |
| `scheduled_datetime_utc` | `string` | Yes |  |
| `stale_after_sla` | `bool` | Yes |  |
| `status` | `string` | Yes |  |
| `user_email_snapshot` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.StatsRefreshIssue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StatsRefreshIssueEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## StatsRefreshOverviewEntity

```go
statsRefreshOverview := client.StatsRefreshOverview(nil)
fmt.Println(statsRefreshOverview.GetName()) // "stats_refresh_overview"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_run` | `any` | No |  |
| `aged_over_24h` | `int` | Yes |  |
| `backlog_preview` | `[]any` | Yes |  |
| `coverage_percent` | `float64` | Yes |  |
| `customer_counts` | `map[string]any` | Yes |  |
| `date` | `string` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `method_counts` | `map[string]any` | Yes |  |
| `platform_counts` | `map[string]any` | Yes |  |
| `platform_units_resolved` | `int` | Yes |  |
| `platform_units_total` | `int` | Yes |  |
| `platform_units_unresolved` | `int` | Yes |  |
| `posted_entries` | `int` | Yes |  |
| `reason_counts` | `map[string]any` | Yes |  |
| `sla_deadline_et` | `string` | Yes |  |
| `stale_after_sla` | `int` | Yes |  |
| `top_affected_customers` | `[]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.StatsRefreshOverview(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StatsRefreshOverviewEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## StatsRefreshRunSummaryEntity

```go
statsRefreshRunSummary := client.StatsRefreshRunSummary(nil)
fmt.Println(statsRefreshRunSummary.GetName()) // "stats_refresh_run_summary"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `celery_task_id` | `string` | No |  |
| `completed_at` | `any` | No |  |
| `entries_failed` | `int` | Yes |  |
| `entries_skipped` | `int` | Yes |  |
| `entries_total` | `int` | Yes |  |
| `entries_updated` | `int` | Yes |  |
| `error_summary_json` | `any` | No |  |
| `id` | `string` | Yes |  |
| `issues_opened` | `int` | Yes |  |
| `issues_resolved` | `int` | Yes |  |
| `platform_units_resolved` | `int` | Yes |  |
| `platform_units_total` | `int` | Yes |  |
| `platform_units_unresolved` | `int` | Yes |  |
| `platform_updates_via_profile` | `int` | Yes |  |
| `platform_updates_via_url` | `int` | Yes |  |
| `provider` | `any` | No |  |
| `refresh_trigger` | `any` | No |  |
| `requested_by_email` | `any` | No |  |
| `run_type` | `string` | Yes |  |
| `started_at` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `target_date_et` | `any` | No |  |
| `users_count` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.StatsRefreshRunSummary(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StatsRefreshRunSummaryEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## StatsRefreshTaskTriggerEntity

```go
statsRefreshTaskTrigger := client.StatsRefreshTaskTrigger(nil)
fmt.Println(statsRefreshTaskTrigger.GetName()) // "stats_refresh_task_trigger"
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.StatsRefreshTaskTrigger(nil).Create(map[string]any{
    "message": "example_message",
    "status": "example_status",
    "target_date": "example_target_date",
    "task_id": "example_task_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StatsRefreshTaskTriggerEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## StripeEntity

```go
stripe := client.Stripe(nil)
fmt.Println(stripe.GetName()) // "stripe"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StripeEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## StyleEntity

```go
style := client.Style(nil)
fmt.Println(style.GetName()) // "style"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.Style(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StyleEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## TemplateEntity

```go
template := client.Template(nil)
fmt.Println(template.GetName()) // "template"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.Template(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TemplateEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## TikTokCreatorInfoEntity

```go
tikTokCreatorInfo := client.TikTokCreatorInfo(nil)
fmt.Println(tikTokCreatorInfo.GetName()) // "tik_tok_creator_info"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commentDisabled` | `bool` | No |  |
| `creatorAvatarUrl` | `any` | No |  |
| `creatorNickname` | `any` | No |  |
| `creatorUsername` | `any` | No |  |
| `duetDisabled` | `bool` | No |  |
| `maxVideoPostDurationSec` | `int` | No |  |
| `privacyLevelOptions` | `[]any` | No |  |
| `stitchDisabled` | `bool` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.TikTokCreatorInfo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TikTokCreatorInfoEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## TopPostEntity

```go
topPost := client.TopPost(nil)
fmt.Println(topPost.GetName()) // "top_post"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `int` | Yes |  |
| `id` | `string` | Yes |  |
| `likes` | `int` | Yes |  |
| `platforms` | `[]any` | Yes |  |
| `scheduled_datetime` | `string` | Yes |  |
| `user_email` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |
| `views` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.TopPost(nil).List(map[string]any{"date": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TopPostEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## UploadPostAgentEntity

```go
uploadPostAgent := client.UploadPostAgent(nil)
fmt.Println(uploadPostAgent.GetName()) // "upload_post_agent"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.UploadPostAgent(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UploadPostAgentEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## UserEntity

```go
user := client.User(nil)
fmt.Println(user.GetName()) // "user"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountType` | `any` | No |  |
| `activatedByAdminAt` | `any` | No |  |
| `activatedByAdminId` | `any` | No |  |
| `agents` | `[]any` | Yes |  |
| `agentsCount` | `any` | No |  |
| `attribution` | `any` | No |  |
| `avatarImageUrl` | `any` | No |  |
| `avatarVoiceUrl` | `any` | No |  |
| `createdAt` | `string` | Yes |  |
| `credits` | `int` | No |  |
| `email` | `string` | Yes |  |
| `googleId` | `any` | No |  |
| `hasSeenScheduleWelcome` | `bool` | No |  |
| `id` | `string` | Yes |  |
| `industry` | `any` | No |  |
| `instagramId` | `any` | No |  |
| `isActivatedByAdmin` | `bool` | No |  |
| `isAdmin` | `bool` | No |  |
| `isInternalUser` | `any` | No |  |
| `isMigrated` | `any` | No |  |
| `isResettingProduct` | `any` | No |  |
| `membership` | `any` | No |  |
| `name` | `string` | Yes |  |
| `partnerDirectLoginDisabled` | `bool` | No |  |
| `partnerExternalUserId` | `any` | No |  |
| `partnerPolicyCode` | `any` | No |  |
| `partnerSource` | `any` | No |  |
| `picture` | `any` | No |  |
| `stripeCustomerId` | `any` | No |  |
| `stripeSubscriptionId` | `any` | No |  |
| `subscriptionCurrentPeriodEnd` | `any` | No |  |
| `subscriptionStatus` | `any` | No |  |
| `totalCount` | `int` | Yes |  |
| `updatedAt` | `string` | Yes |  |
| `userId` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.User(nil).Load(map[string]any{"id": "user_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## UserAgentEntity

```go
userAgent := client.UserAgent(nil)
fmt.Println(userAgent.GetName()) // "user_agent"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent` | `map[string]any` | Yes |  |
| `assigned_at` | `string` | Yes |  |
| `assignment_id` | `string` | Yes |  |
| `expires_at` | `any` | No |  |
| `id` | `string` | No |  |
| `status` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.UserAgent(nil).List(map[string]any{"id": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.UserAgent(nil).Create(map[string]any{
    "id": "example_id",
    "agent": map[string]any{},
    "assigned_at": "example_assigned_at",
    "assignment_id": "example_assignment_id",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserAgentEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## UserHealthDetailEntity

```go
userHealthDetail := client.UserHealthDetail(nil)
fmt.Println(userHealthDetail.GetName()) // "user_health_detail"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `any` | Yes |  |
| `activated` | `bool` | Yes |  |
| `activated_by_admin_at` | `any` | No |  |
| `activated_by_admin_id` | `string` | No |  |
| `admin_notes` | `any` | No |  |
| `agents_count` | `int` | No |  |
| `assigned_agents` | `[]any` | Yes |  |
| `assigned_agents_count` | `int` | Yes |  |
| `assigned_agents_preview_limit` | `int` | No |  |
| `assigned_agents_truncated` | `bool` | No |  |
| `auto_schedule_enabled` | `bool` | Yes |  |
| `comments_expected_per_day` | `int` | No |  |
| `comments_fix_block_reason` | `any` | No |  |
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
| `yesterday_failed_entries` | `[]any` | Yes |  |
| `yesterday_posted` | `int` | Yes |  |
| `yesterday_total` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.UserHealthDetail(nil).List(map[string]any{"id": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserHealthDetailEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## UserWithAvatarSubmissionEntity

```go
userWithAvatarSubmission := client.UserWithAvatarSubmission(nil)
fmt.Println(userWithAvatarSubmission.GetName()) // "user_with_avatar_submission"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.UserWithAvatarSubmission(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserWithAvatarSubmissionEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## UsersHealthEntity

```go
usersHealth := client.UsersHealth(nil)
fmt.Println(usersHealth.GetName()) // "users_health"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `any` | Yes |  |
| `admin_notes` | `any` | No |  |
| `agents_count` | `int` | Yes |  |
| `agents_health` | `string` | Yes |  |
| `agents_issue` | `any` | Yes |  |
| `assigned_agents_count` | `int` | Yes |  |
| `auto_schedule_enabled` | `bool` | Yes |  |
| `auto_schedule_health` | `string` | Yes |  |
| `auto_schedule_issue` | `any` | Yes |  |
| `auto_schedule_today_health` | `string` | Yes |  |
| `auto_schedule_today_issue` | `any` | Yes |  |
| `created_at` | `string` | Yes |  |
| `email` | `string` | Yes |  |
| `expected_agents_count` | `int` | Yes |  |
| `id` | `string` | Yes |  |
| `is_bookmarked` | `bool` | No |  |
| `is_internal_user` | `bool` | Yes |  |
| `is_migrated` | `bool` | Yes |  |
| `membership` | `any` | Yes |  |
| `name` | `string` | Yes |  |
| `posts_health` | `string` | Yes |  |
| `posts_issue` | `any` | Yes |  |
| `posts_today_health` | `string` | Yes |  |
| `posts_today_issue` | `any` | Yes |  |
| `subscription_status` | `any` | Yes |  |
| `today_expected_count` | `int` | Yes |  |
| `today_failed_count` | `int` | Yes |  |
| `today_scheduled_count` | `int` | Yes |  |
| `today_total_count` | `int` | Yes |  |
| `tomorrow_expected_count` | `int` | Yes |  |
| `tomorrow_scheduled_count` | `int` | Yes |  |
| `yesterday_failed_count` | `int` | Yes |  |
| `yesterday_total_count` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.UsersHealth(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UsersHealthEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## VideoEntity

```go
video := client.Video(nil)
fmt.Println(video.GetName()) // "video"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `string` | No |  |
| `bookmarked` | `any` | No |  |
| `captions` | `any` | No |  |
| `carousel_data` | `any` | No |  |
| `created_at` | `string` | Yes |  |
| `duration` | `float64` | No |  |
| `generation_status` | `any` | No |  |
| `id` | `string` | Yes |  |
| `image_prompt` | `any` | No |  |
| `is_onboarding` | `bool` | No |  |
| `is_template` | `bool` | No |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.Video(nil).Load(map[string]any{"id": "video_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Video(nil).Create(map[string]any{
    "captions": "example_captions",
    "title": "example_title",
    "url": "example_url",
    "video_id": "example_video_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.Video(nil).Update(map[string]any{
    "id": "video_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.Video(nil).Remove(map[string]any{"id": "video_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `VideoEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## VideoRemixerWorkerEntity

```go
videoRemixerWorker := client.VideoRemixerWorker(nil)
fmt.Println(videoRemixerWorker.GetName()) // "video_remixer_worker"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `captions_ass` | `string` | No |  |
| `captions_vtt` | `string` | No |  |
| `cost_usd` | `float64` | No |  |
| `error` | `string` | Yes |  |
| `file` | `string` | Yes |  |
| `kinds` | `[]any` | No |  |
| `lease_token` | `string` | Yes |  |
| `limit` | `int` | No |  |
| `manifest` | `string` | Yes |  |
| `model` | `string` | Yes |  |
| `processing_seconds` | `float64` | No |  |
| `prompt_version` | `string` | Yes |  |
| `result` | `map[string]any` | No |  |
| `thumbnail` | `string` | Yes |  |
| `tier` | `string` | No |  |
| `worker_id` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.VideoRemixerWorker(nil).Create(map[string]any{
    "error": "example_error",
    "file": "example_file",
    "lease_token": "example_lease_token",
    "manifest": "example_manifest",
    "model": "example_model",
    "prompt_version": "example_prompt_version",
    "thumbnail": "example_thumbnail",
    "worker_id": "example_worker_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `VideoRemixerWorkerEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## WatchdogRecoveryEntity

```go
watchdogRecovery := client.WatchdogRecovery(nil)
fmt.Println(watchdogRecovery.GetName()) // "watchdog_recovery"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `item_id` | `string` | Yes |  |
| `passed` | `bool` | Yes |  |
| `table` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.WatchdogRecovery(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.WatchdogRecovery(nil).Create(map[string]any{
    "item_id": "example_item_id",
    "passed": true,
    "table": "example_table",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WatchdogRecoveryEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## WinningAdEntity

```go
winningAd := client.WinningAd(nil)
fmt.Println(winningAd.GetName()) // "winning_ad"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.WinningAd(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WinningAdEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## XAdaptationEntity

```go
xAdaptation := client.XAdaptation(nil)
fmt.Println(xAdaptation.GetName()) // "x_adaptation"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.XAdaptation(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `XAdaptationEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ZerohumanAdminAccountEntity

```go
zerohumanAdminAccount := client.ZerohumanAdminAccount(nil)
fmt.Println(zerohumanAdminAccount.GetName()) // "zerohuman_admin_account"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_mode` | `string` | Yes |  |
| `active_queue_count` | `int` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.ZerohumanAdminAccount(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZerohumanAdminAccountEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

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

```go
client := sdk.NewCrackedApiReferenceSDK(map[string]any{
    "feature": map[string]any{
        "ratelimit": map[string]any{"active": true},
        "retry": map[string]any{"active": true},
        "test": map[string]any{"active": true},
        "timeout": map[string]any{"active": true},
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

