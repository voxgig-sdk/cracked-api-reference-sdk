# CrackedApiReference TypeScript SDK Reference

Complete API reference for the CrackedApiReference TypeScript SDK.


## CrackedApiReferenceSDK

### Constructor

```ts
new CrackedApiReferenceSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CrackedApiReferenceSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = CrackedApiReferenceSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `CrackedApiReferenceSDK` instance in test mode.


### Instance Methods

#### `Activate(data?: object)`

Create a new `Activate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActivateEntity` instance.

#### `ActivateUser(data?: object)`

Create a new `ActivateUser` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActivateUserEntity` instance.

#### `ActiveOnboarding(data?: object)`

Create a new `ActiveOnboarding` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActiveOnboardingEntity` instance.

#### `Admin(data?: object)`

Create a new `Admin` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminEntity` instance.

#### `AdminAccountReset(data?: object)`

Create a new `AdminAccountReset` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminAccountResetEntity` instance.

#### `AdminCarousel(data?: object)`

Create a new `AdminCarousel` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminCarouselEntity` instance.

#### `AdminCarouselDemoReview(data?: object)`

Create a new `AdminCarouselDemoReview` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminCarouselDemoReviewEntity` instance.

#### `AdminCustomer(data?: object)`

Create a new `AdminCustomer` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminCustomerEntity` instance.

#### `AdminCustomerSuccess(data?: object)`

Create a new `AdminCustomerSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminCustomerSuccessEntity` instance.

#### `AdminGeneratedVideo(data?: object)`

Create a new `AdminGeneratedVideo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminGeneratedVideoEntity` instance.

#### `AdminHealthrx(data?: object)`

Create a new `AdminHealthrx` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminHealthrxEntity` instance.

#### `AdminInsight(data?: object)`

Create a new `AdminInsight` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminInsightEntity` instance.

#### `AdminLandingTask(data?: object)`

Create a new `AdminLandingTask` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminLandingTaskEntity` instance.

#### `AdminMetricsSummary(data?: object)`

Create a new `AdminMetricsSummary` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminMetricsSummaryEntity` instance.

#### `AdminPost(data?: object)`

Create a new `AdminPost` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminPostEntity` instance.

#### `AdminRecentSignup(data?: object)`

Create a new `AdminRecentSignup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminRecentSignupEntity` instance.

#### `AdminSlideshowDiag(data?: object)`

Create a new `AdminSlideshowDiag` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminSlideshowDiagEntity` instance.

#### `AdminSlideshowImport(data?: object)`

Create a new `AdminSlideshowImport` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminSlideshowImportEntity` instance.

#### `AdminUserView(data?: object)`

Create a new `AdminUserView` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminUserViewEntity` instance.

#### `AdminUsersTableItem(data?: object)`

Create a new `AdminUsersTableItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminUsersTableItemEntity` instance.

#### `AdminVideoRemixer(data?: object)`

Create a new `AdminVideoRemixer` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminVideoRemixerEntity` instance.

#### `AdvanceStep(data?: object)`

Create a new `AdvanceStep` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdvanceStepEntity` instance.

#### `Agent(data?: object)`

Create a new `Agent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentEntity` instance.

#### `AgentAccessCustomersHealth(data?: object)`

Create a new `AgentAccessCustomersHealth` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentAccessCustomersHealthEntity` instance.

#### `AgentAccessOverview(data?: object)`

Create a new `AgentAccessOverview` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentAccessOverviewEntity` instance.

#### `AgentAccessPhilHourlyNotification(data?: object)`

Create a new `AgentAccessPhilHourlyNotification` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentAccessPhilHourlyNotificationEntity` instance.

#### `AgentAccessPhilStatsRefresh(data?: object)`

Create a new `AgentAccessPhilStatsRefresh` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentAccessPhilStatsRefreshEntity` instance.

#### `AgentAccessPhilVideo(data?: object)`

Create a new `AgentAccessPhilVideo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentAccessPhilVideoEntity` instance.

#### `AgentAccessUserAgent(data?: object)`

Create a new `AgentAccessUserAgent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentAccessUserAgentEntity` instance.

#### `AgentAccessUserPhoneFarm(data?: object)`

Create a new `AgentAccessUserPhoneFarm` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentAccessUserPhoneFarmEntity` instance.

#### `AgentAccessUserPost(data?: object)`

Create a new `AgentAccessUserPost` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentAccessUserPostEntity` instance.

#### `AgentAccessUserSummary(data?: object)`

Create a new `AgentAccessUserSummary` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentAccessUserSummaryEntity` instance.

#### `AgentAccessUserVideo(data?: object)`

Create a new `AgentAccessUserVideo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentAccessUserVideoEntity` instance.

#### `AgentAccessUserWinningAd(data?: object)`

Create a new `AgentAccessUserWinningAd` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentAccessUserWinningAdEntity` instance.

#### `AgentAccessWinningAdsSummary(data?: object)`

Create a new `AgentAccessWinningAdsSummary` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentAccessWinningAdsSummaryEntity` instance.

#### `AgentDetail(data?: object)`

Create a new `AgentDetail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentDetailEntity` instance.

#### `AgentHealth(data?: object)`

Create a new `AgentHealth` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentHealthEntity` instance.

#### `AgentHealthCustomerOption(data?: object)`

Create a new `AgentHealthCustomerOption` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentHealthCustomerOptionEntity` instance.

#### `AgentHealthDetail(data?: object)`

Create a new `AgentHealthDetail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentHealthDetailEntity` instance.

#### `AgentPost(data?: object)`

Create a new `AgentPost` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentPostEntity` instance.

#### `AgentStat(data?: object)`

Create a new `AgentStat` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentStatEntity` instance.

#### `AgentSummary(data?: object)`

Create a new `AgentSummary` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentSummaryEntity` instance.

#### `AgentsSummary(data?: object)`

Create a new `AgentsSummary` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentsSummaryEntity` instance.

#### `AnalysisStatus(data?: object)`

Create a new `AnalysisStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AnalysisStatusEntity` instance.

#### `AnalyticsPost(data?: object)`

Create a new `AnalyticsPost` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AnalyticsPostEntity` instance.

#### `AnalyzeProduct(data?: object)`

Create a new `AnalyzeProduct` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AnalyzeProductEntity` instance.

#### `AssignAgent(data?: object)`

Create a new `AssignAgent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssignAgentEntity` instance.

#### `Auth(data?: object)`

Create a new `Auth` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AuthEntity` instance.

#### `AutoScheduleSetting(data?: object)`

Create a new `AutoScheduleSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AutoScheduleSettingEntity` instance.

#### `BulkTikTokStatsUpdate(data?: object)`

Create a new `BulkTikTokStatsUpdate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BulkTikTokStatsUpdateEntity` instance.

#### `Carousel(data?: object)`

Create a new `Carousel` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CarouselEntity` instance.

#### `CarouselAgentDetail(data?: object)`

Create a new `CarouselAgentDetail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CarouselAgentDetailEntity` instance.

#### `CarouselStatus(data?: object)`

Create a new `CarouselStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CarouselStatusEntity` instance.

#### `Chat(data?: object)`

Create a new `Chat` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ChatEntity` instance.

#### `ChatHistory(data?: object)`

Create a new `ChatHistory` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ChatHistoryEntity` instance.

#### `ChatSession(data?: object)`

Create a new `ChatSession` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ChatSessionEntity` instance.

#### `Comment(data?: object)`

Create a new `Comment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CommentEntity` instance.

#### `CommentCampaign(data?: object)`

Create a new `CommentCampaign` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CommentCampaignEntity` instance.

#### `CompleteChatCheckout(data?: object)`

Create a new `CompleteChatCheckout` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CompleteChatCheckoutEntity` instance.

#### `CreateBlackoutSora2Video(data?: object)`

Create a new `CreateBlackoutSora2Video` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreateBlackoutSora2VideoEntity` instance.

#### `CreateCarousel(data?: object)`

Create a new `CreateCarousel` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreateCarouselEntity` instance.

#### `CreateProduct(data?: object)`

Create a new `CreateProduct` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreateProductEntity` instance.

#### `CreateResetProductV6(data?: object)`

Create a new `CreateResetProductV6` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreateResetProductV6Entity` instance.

#### `CreateSora2Video(data?: object)`

Create a new `CreateSora2Video` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreateSora2VideoEntity` instance.

#### `CreateVariation(data?: object)`

Create a new `CreateVariation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreateVariationEntity` instance.

#### `Customer(data?: object)`

Create a new `Customer` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomerEntity` instance.

#### `CustomerHealth(data?: object)`

Create a new `CustomerHealth` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomerHealthEntity` instance.

#### `CustomerHealthAllCustomersItem(data?: object)`

Create a new `CustomerHealthAllCustomersItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomerHealthAllCustomersItemEntity` instance.

#### `CustomerHealthViewsSummary(data?: object)`

Create a new `CustomerHealthViewsSummary` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomerHealthViewsSummaryEntity` instance.

#### `Daily(data?: object)`

Create a new `Daily` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DailyEntity` instance.

#### `DailyStatus(data?: object)`

Create a new `DailyStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DailyStatusEntity` instance.

#### `DedicatedAgentsDashboard(data?: object)`

Create a new `DedicatedAgentsDashboard` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DedicatedAgentsDashboardEntity` instance.

#### `EnterpriseAgent(data?: object)`

Create a new `EnterpriseAgent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EnterpriseAgentEntity` instance.

#### `EnterpriseProduct(data?: object)`

Create a new `EnterpriseProduct` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EnterpriseProductEntity` instance.

#### `ExactAvailability(data?: object)`

Create a new `ExactAvailability` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ExactAvailabilityEntity` instance.

#### `ExactFormula(data?: object)`

Create a new `ExactFormula` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ExactFormulaEntity` instance.

#### `ExtractV2(data?: object)`

Create a new `ExtractV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ExtractV2Entity` instance.

#### `FailedPost(data?: object)`

Create a new `FailedPost` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FailedPostEntity` instance.

#### `File(data?: object)`

Create a new `File` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FileEntity` instance.

#### `GenerateBlackoutSora2Prompt(data?: object)`

Create a new `GenerateBlackoutSora2Prompt` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GenerateBlackoutSora2PromptEntity` instance.

#### `GeneratePomelliDemo(data?: object)`

Create a new `GeneratePomelliDemo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GeneratePomelliDemoEntity` instance.

#### `GeneratePrompt(data?: object)`

Create a new `GeneratePrompt` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GeneratePromptEntity` instance.

#### `GenerateSora2Prompt(data?: object)`

Create a new `GenerateSora2Prompt` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GenerateSora2PromptEntity` instance.

#### `Healthrx(data?: object)`

Create a new `Healthrx` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HealthrxEntity` instance.

#### `InitResetProductV6(data?: object)`

Create a new `InitResetProductV6` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InitResetProductV6Entity` instance.

#### `Iri(data?: object)`

Create a new `Iri` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IriEntity` instance.

#### `IrisCapability(data?: object)`

Create a new `IrisCapability` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IrisCapabilityEntity` instance.

#### `IrisChat(data?: object)`

Create a new `IrisChat` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IrisChatEntity` instance.

#### `IrisConnector(data?: object)`

Create a new `IrisConnector` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IrisConnectorEntity` instance.

#### `IrisStatus(data?: object)`

Create a new `IrisStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IrisStatusEntity` instance.

#### `IrisTask(data?: object)`

Create a new `IrisTask` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IrisTaskEntity` instance.

#### `IrisUsage(data?: object)`

Create a new `IrisUsage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IrisUsageEntity` instance.

#### `Landing(data?: object)`

Create a new `Landing` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LandingEntity` instance.

#### `LandingStat(data?: object)`

Create a new `LandingStat` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LandingStatEntity` instance.

#### `LandingStatus(data?: object)`

Create a new `LandingStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LandingStatusEntity` instance.

#### `LinkInBio(data?: object)`

Create a new `LinkInBio` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LinkInBioEntity` instance.

#### `LinkInDm(data?: object)`

Create a new `LinkInDm` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LinkInDmEntity` instance.

#### `LinkInPost(data?: object)`

Create a new `LinkInPost` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LinkInPostEntity` instance.

#### `LinkUser(data?: object)`

Create a new `LinkUser` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LinkUserEntity` instance.

#### `MediaAsset(data?: object)`

Create a new `MediaAsset` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MediaAssetEntity` instance.

#### `Men(data?: object)`

Create a new `Men` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MenEntity` instance.

#### `Microdrama(data?: object)`

Create a new `Microdrama` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MicrodramaEntity` instance.

#### `MicrohubPublic(data?: object)`

Create a new `MicrohubPublic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MicrohubPublicEntity` instance.

#### `OnboardingStatus(data?: object)`

Create a new `OnboardingStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OnboardingStatusEntity` instance.

#### `OnboardingV6(data?: object)`

Create a new `OnboardingV6` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OnboardingV6Entity` instance.

#### `PaidUser(data?: object)`

Create a new `PaidUser` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaidUserEntity` instance.

#### `Pexel(data?: object)`

Create a new `Pexel` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PexelEntity` instance.

#### `PhoneAdminAvailableAgentSource(data?: object)`

Create a new `PhoneAdminAvailableAgentSource` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PhoneAdminAvailableAgentSourceEntity` instance.

#### `Product(data?: object)`

Create a new `Product` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProductEntity` instance.

#### `ProductDashboard(data?: object)`

Create a new `ProductDashboard` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProductDashboardEntity` instance.

#### `ProductDashboardView(data?: object)`

Create a new `ProductDashboardView` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProductDashboardViewEntity` instance.

#### `ProductDemo(data?: object)`

Create a new `ProductDemo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProductDemoEntity` instance.

#### `ProductLanding(data?: object)`

Create a new `ProductLanding` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProductLandingEntity` instance.

#### `PublicResumeStatus(data?: object)`

Create a new `PublicResumeStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PublicResumeStatusEntity` instance.

#### `ReRollVideo(data?: object)`

Create a new `ReRollVideo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReRollVideoEntity` instance.

#### `ReadRootGet(data?: object)`

Create a new `ReadRootGet` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReadRootGetEntity` instance.

#### `RecordDemoBooked(data?: object)`

Create a new `RecordDemoBooked` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RecordDemoBookedEntity` instance.

#### `RefreshStat(data?: object)`

Create a new `RefreshStat` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RefreshStatEntity` instance.

#### `RemixerClipper(data?: object)`

Create a new `RemixerClipper` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RemixerClipperEntity` instance.

#### `ResetProduct(data?: object)`

Create a new `ResetProduct` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ResetProductEntity` instance.

#### `RetryWebsiteScrape(data?: object)`

Create a new `RetryWebsiteScrape` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RetryWebsiteScrapeEntity` instance.

#### `SaveSurvey(data?: object)`

Create a new `SaveSurvey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SaveSurveyEntity` instance.

#### `ScanSocial(data?: object)`

Create a new `ScanSocial` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScanSocialEntity` instance.

#### `ScanSocialsPublic(data?: object)`

Create a new `ScanSocialsPublic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScanSocialsPublicEntity` instance.

#### `ScanSocialsStatus(data?: object)`

Create a new `ScanSocialsStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScanSocialsStatusEntity` instance.

#### `ScheduleV2(data?: object)`

Create a new `ScheduleV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScheduleV2Entity` instance.

#### `Scrape(data?: object)`

Create a new `Scrape` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScrapeEntity` instance.

#### `ScrapeWebsitePublic(data?: object)`

Create a new `ScrapeWebsitePublic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScrapeWebsitePublicEntity` instance.

#### `ScrapedData(data?: object)`

Create a new `ScrapedData` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScrapedDataEntity` instance.

#### `ScrapingStatus(data?: object)`

Create a new `ScrapingStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScrapingStatusEntity` instance.

#### `SelfServeActivate(data?: object)`

Create a new `SelfServeActivate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SelfServeActivateEntity` instance.

#### `Seo(data?: object)`

Create a new `Seo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SeoEntity` instance.

#### `SeoAiMention(data?: object)`

Create a new `SeoAiMention` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SeoAiMentionEntity` instance.

#### `SeoBacklink(data?: object)`

Create a new `SeoBacklink` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SeoBacklinkEntity` instance.

#### `SeoKeyword(data?: object)`

Create a new `SeoKeyword` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SeoKeywordEntity` instance.

#### `SeoOverview(data?: object)`

Create a new `SeoOverview` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SeoOverviewEntity` instance.

#### `SeoTraffic(data?: object)`

Create a new `SeoTraffic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SeoTrafficEntity` instance.

#### `ShareAccessLink(data?: object)`

Create a new `ShareAccessLink` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ShareAccessLinkEntity` instance.

#### `Site(data?: object)`

Create a new `Site` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SiteEntity` instance.

#### `Slide(data?: object)`

Create a new `Slide` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SlideEntity` instance.

#### `SlugValidation(data?: object)`

Create a new `SlugValidation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SlugValidationEntity` instance.

#### `Social(data?: object)`

Create a new `Social` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SocialEntity` instance.

#### `SocialScanPreview(data?: object)`

Create a new `SocialScanPreview` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SocialScanPreviewEntity` instance.

#### `SocialScanProcess(data?: object)`

Create a new `SocialScanProcess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SocialScanProcessEntity` instance.

#### `SocialScanSave(data?: object)`

Create a new `SocialScanSave` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SocialScanSaveEntity` instance.

#### `Sora2Avatar(data?: object)`

Create a new `Sora2Avatar` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `Sora2AvatarEntity` instance.

#### `Sora2AvatarAssetUpload(data?: object)`

Create a new `Sora2AvatarAssetUpload` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `Sora2AvatarAssetUploadEntity` instance.

#### `Sora2AvatarStat(data?: object)`

Create a new `Sora2AvatarStat` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `Sora2AvatarStatEntity` instance.

#### `Stat(data?: object)`

Create a new `Stat` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatEntity` instance.

#### `StatsRefreshBackfill(data?: object)`

Create a new `StatsRefreshBackfill` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatsRefreshBackfillEntity` instance.

#### `StatsRefreshIssue(data?: object)`

Create a new `StatsRefreshIssue` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatsRefreshIssueEntity` instance.

#### `StatsRefreshOverview(data?: object)`

Create a new `StatsRefreshOverview` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatsRefreshOverviewEntity` instance.

#### `StatsRefreshRunSummary(data?: object)`

Create a new `StatsRefreshRunSummary` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatsRefreshRunSummaryEntity` instance.

#### `StatsRefreshTaskTrigger(data?: object)`

Create a new `StatsRefreshTaskTrigger` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatsRefreshTaskTriggerEntity` instance.

#### `Stripe(data?: object)`

Create a new `Stripe` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StripeEntity` instance.

#### `Style(data?: object)`

Create a new `Style` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StyleEntity` instance.

#### `Template(data?: object)`

Create a new `Template` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TemplateEntity` instance.

#### `TikTokCreatorInfo(data?: object)`

Create a new `TikTokCreatorInfo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TikTokCreatorInfoEntity` instance.

#### `TopPost(data?: object)`

Create a new `TopPost` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TopPostEntity` instance.

#### `UploadPostAgent(data?: object)`

Create a new `UploadPostAgent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UploadPostAgentEntity` instance.

#### `User(data?: object)`

Create a new `User` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserEntity` instance.

#### `UserAgent(data?: object)`

Create a new `UserAgent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserAgentEntity` instance.

#### `UserHealthDetail(data?: object)`

Create a new `UserHealthDetail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserHealthDetailEntity` instance.

#### `UserWithAvatarSubmission(data?: object)`

Create a new `UserWithAvatarSubmission` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserWithAvatarSubmissionEntity` instance.

#### `UsersHealth(data?: object)`

Create a new `UsersHealth` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UsersHealthEntity` instance.

#### `Video(data?: object)`

Create a new `Video` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VideoEntity` instance.

#### `VideoRemixerWorker(data?: object)`

Create a new `VideoRemixerWorker` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VideoRemixerWorkerEntity` instance.

#### `WatchdogRecovery(data?: object)`

Create a new `WatchdogRecovery` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WatchdogRecoveryEntity` instance.

#### `WinningAd(data?: object)`

Create a new `WinningAd` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WinningAdEntity` instance.

#### `XAdaptation(data?: object)`

Create a new `XAdaptation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `XAdaptationEntity` instance.

#### `ZerohumanAdminAccount(data?: object)`

Create a new `ZerohumanAdminAccount` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZerohumanAdminAccountEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |
| `fetchargs.ctrl.signal` | `AbortSignal` | Aborts the request in flight: `ok` is then `false` and `err.code` is `request_aborted`. |

**Returns:** `Promise<{ ok, status, headers, data }>`. On a failure
`ok` is `false` and `err` holds the error.

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `CrackedApiReferenceSDK.test()`.

**Returns:** `CrackedApiReferenceSDK` instance in test mode.

#### Cancelling a call

Every entity operation takes an optional `ctrl` object after its match or
data, and an `AbortSignal` in `ctrl.signal` cancels the request in flight.
The operation then rejects with an error whose `code` is
`request_aborted` and whose `cause` is the signal's reason. A request
whose signal has already aborted is not sent. `stream()` takes the signal
as `callopts.signal`, and ends when it aborts.


---

## ActivateEntity

```ts
const activate = client.Activate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activated_at` | `any` | No |  |
| `message` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Activate().create({
  user_id: 'example_user_id',
  message: 'example_message',
  success: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActivateEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActivateUserEntity

```ts
const activate_user = client.ActivateUser()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activated_at` | `any` | No |  |
| `message` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ActivateUser().create({
  user_id: 'example_user_id',
  message: 'example_message',
  success: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActivateUserEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActiveOnboardingEntity

```ts
const active_onboarding = client.ActiveOnboarding()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_step` | `any` | No |  |
| `has_active_onboarding` | `boolean` | Yes |  |
| `onboarding_data_id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ActiveOnboarding().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActiveOnboardingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminEntity

```ts
const admin = client.Admin()
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `batch_regenerate_sora2` | `/api/admin/batch-regenerate-sora2` | `client.Admin().create({ $action: 'batch_regenerate_sora2', ... })` |
| `test_s3_copy` | `/api/admin/test-s3-copy` | `client.Admin().create({ $action: 'test_s3_copy', ... })` |

An action returns that action's OWN response, which is not necessarily a
Admin record — check the API definition for its shape.

```ts
const result = await client.Admin().create({
  $action: 'batch_regenerate_sora2',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Admin().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Admin().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Admin().load({ date: 'date' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Admin().remove({ tester_id: 'tester_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Admin().update({
  agent_id: 'agent_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminAccountResetEntity

```ts
const admin_account_reset = client.AdminAccountReset()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_ids` | `any[]` | Yes |  |
| `agent_ids_sha256` | `string` | Yes |  |
| `backup_sha256` | `string` | Yes |  |
| `batch_size` | `number` | No |  |
| `confirmation` | `string` | Yes |  |
| `customer_email` | `string` | Yes |  |
| `pc_name` | `string` | Yes |  |
| `phase` | `string` | No |  |
| `product_id` | `string` | Yes |  |
| `video_ids` | `any[]` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AdminAccountReset().create({
  agent_ids: [],
  agent_ids_sha256: 'example_agent_ids_sha256',
  backup_sha256: 'example_backup_sha256',
  confirmation: 'example_confirmation',
  customer_email: 'example_customer_email',
  pc_name: 'example_pc_name',
  product_id: 'example_product_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminAccountResetEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminCarouselEntity

```ts
const admin_carousel = client.AdminCarousel()
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
| `formula` | `Record<string, any>` | Yes |  |
| `formula_id` | `string` | No |  |
| `prompt` | `string` | Yes |  |
| `slides` | `any[]` | Yes |  |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `state` | `/api/admin/carousels/slideshow-import/{batch_id}/state` | `client.AdminCarousel().create({ $action: 'state', ... })` |

An action returns that action's OWN response, which is not necessarily a
AdminCarousel record — check the API definition for its shape.

```ts
const result = await client.AdminCarousel().create({
  $action: 'state',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AdminCarousel().create({
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

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.AdminCarousel().load({ batch_id: 'batch_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.AdminCarousel().update({
  fmt: 'fmt',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminCarouselEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminCarouselDemoReviewEntity

```ts
const admin_carousel_demo_review = client.AdminCarouselDemoReview()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `items` | `any[]` | Yes |  |
| `reason` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `decision` | `/api/admin/carousels/demo-reviews/{formula_id}/decision` | `client.AdminCarouselDemoReview().create({ $action: 'decision', ... })` |
| `assignee` | `/api/admin/carousels/demo-reviews/{formula_id}/assignee` | `client.AdminCarouselDemoReview().update({ $action: 'assignee', ... })` |

An action returns that action's OWN response, which is not necessarily a
AdminCarouselDemoReview record — check the API definition for its shape.

```ts
const result = await client.AdminCarouselDemoReview().create({
  $action: 'decision',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AdminCarouselDemoReview().create({
  items: [],
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.AdminCarouselDemoReview().load({ id: 'admin_carousel_demo_review_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.AdminCarouselDemoReview().update({
  demo_review_id: 'demo_review_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminCarouselDemoReviewEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminCustomerEntity

```ts
const admin_customer = client.AdminCustomer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `any` | No |  |
| `active_vireel_agents` | `number` | Yes |  |
| `agents` | `any[]` | Yes |  |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AdminCustomer().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminCustomerEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminCustomerSuccessEntity

```ts
const admin_customer_success = client.AdminCustomerSuccess()
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
| `notification_events` | `any[]` | Yes |  |
| `priority` | `string` | Yes |  |
| `severity` | `string` | Yes |  |
| `status_label` | `string` | Yes |  |
| `subscription_current_period_end` | `any` | No |  |
| `subscription_status` | `any` | No |  |
| `upcoming_posts` | `number` | Yes |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AdminCustomerSuccess().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminCustomerSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminGeneratedVideoEntity

```ts
const admin_generated_video = client.AdminGeneratedVideo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_id` | `string` | No |  |
| `agent_name` | `any` | No |  |
| `created_at` | `string` | Yes |  |
| `duration` | `number` | No |  |
| `generation_status` | `Record<string, any>` | No |  |
| `id` | `string` | Yes |  |
| `product_id` | `string` | No |  |
| `thumbnail_url` | `any` | No |  |
| `title` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updated_at` | `any` | No |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AdminGeneratedVideo().list({ user_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminGeneratedVideoEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminHealthrxEntity

```ts
const admin_healthrx = client.AdminHealthrx()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `delivery_enabled` | `boolean` | No |  |
| `id` | `string` | No |  |
| `option_id` | `string` | Yes |  |
| `plan` | `Record<string, any>` | Yes |  |
| `preparation_enabled` | `boolean` | No |  |
| `product_id` | `string` | Yes |  |
| `reason` | `string` | Yes |  |
| `request_key` | `string` | Yes |  |
| `revision` | `number` | Yes |  |
| `schedule_enabled` | `boolean` | No |  |
| `version` | `string` | Yes |  |
| `viewed` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AdminHealthrx().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.AdminHealthrx().load({ item_id: 'item_id', kind: 'kind' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.AdminHealthrx().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminHealthrxEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminInsightEntity

```ts
const admin_insight = client.AdminInsight()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer_success_cases` | `any[]` | Yes |  |
| `customers` | `any[]` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `pfa_database` | `Record<string, any>` | Yes |  |
| `recent_signups` | `any[]` | Yes |  |
| `summary` | `Record<string, any>` | Yes |  |
| `vireel_database` | `Record<string, any>` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AdminInsight().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.AdminInsight().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminInsightEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminLandingTaskEntity

```ts
const admin_landing_task = client.AdminLandingTask()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `task_id` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AdminLandingTask().create({
  user_id: 'example_user_id',
  task_id: 'example_task_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminLandingTaskEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminMetricsSummaryEntity

```ts
const admin_metrics_summary = client.AdminMetricsSummary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `paid_users_by_level` | `any[]` | Yes |  |
| `total_cancellations` | `number` | Yes |  |
| `total_previews_generated` | `number` | Yes |  |
| `total_signups` | `number` | Yes |  |
| `total_videos_generated` | `number` | Yes |  |
| `url_attempts` | `number` | Yes |  |
| `user_credits` | `any[]` | Yes |  |
| `user_gifted_credits` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AdminMetricsSummary().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminMetricsSummaryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminPostEntity

```ts
const admin_post = client.AdminPost()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AdminPost().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminPostEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminRecentSignupEntity

```ts
const admin_recent_signup = client.AdminRecentSignup()
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
| `notification_events` | `any[]` | Yes |  |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AdminRecentSignup().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminRecentSignupEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminSlideshowDiagEntity

```ts
const admin_slideshow_diag = client.AdminSlideshowDiag()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AdminSlideshowDiag().create({
  id: 'example_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminSlideshowDiagEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminSlideshowImportEntity

```ts
const admin_slideshow_import = client.AdminSlideshowImport()
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
| `slides` | `any[]` | Yes |  |
| `title` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `state` | `/api/admin/slideshow-import2/{batch_id}/state` | `client.AdminSlideshowImport().create({ $action: 'state', ... })` |

An action returns that action's OWN response, which is not necessarily a
AdminSlideshowImport record — check the API definition for its shape.

```ts
const result = await client.AdminSlideshowImport().create({
  $action: 'state',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AdminSlideshowImport().create({
  agent_id: 'example_agent_id',
  batch_id: 'example_batch_id',
  caption: 'example_caption',
  day: 'example_day',
  formula_id: 'example_formula_id',
  slides: [],
  title: 'example_title',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.AdminSlideshowImport().load({ batch_id: 'batch_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminSlideshowImportEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminUserViewEntity

```ts
const admin_user_view = client.AdminUserView()
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `fix_all` | `/api/admin/users/{user_id}/fix-all` | `client.AdminUserView().create({ $action: 'fix_all', ... })` |
| `fix_auto_schedule` | `/api/admin/users/{user_id}/fix-auto-schedule` | `client.AdminUserView().create({ $action: 'fix_auto_schedule', ... })` |
| `fix_auto_schedule_by_date` | `/api/admin/users/{user_id}/fix-auto-schedule-by-date` | `client.AdminUserView().create({ $action: 'fix_auto_schedule_by_date', ... })` |
| `fix_auto_schedule_today` | `/api/admin/users/{user_id}/fix-auto-schedule-today` | `client.AdminUserView().create({ $action: 'fix_auto_schedule_today', ... })` |
| `fix_auto_schedule_today_force` | `/api/admin/users/{user_id}/fix-auto-schedule-today-force` | `client.AdminUserView().create({ $action: 'fix_auto_schedule_today_force', ... })` |
| `fix_auto_schedule_tomorrow` | `/api/admin/users/{user_id}/fix-auto-schedule-tomorrow` | `client.AdminUserView().create({ $action: 'fix_auto_schedule_tomorrow', ... })` |
| `fix_comments_today` | `/api/admin/users/{user_id}/fix-comments-today` | `client.AdminUserView().create({ $action: 'fix_comments_today', ... })` |
| `generate_pomelli_video` | `/api/admin/users/{user_id}/generate-pomelli-video` | `client.AdminUserView().create({ $action: 'generate_pomelli_video', ... })` |
| `repair_approved_source_queue_today` | `/api/admin/users/{user_id}/repair-approved-source-queue-today` | `client.AdminUserView().create({ $action: 'repair_approved_source_queue_today', ... })` |
| `repost_tiktok_videos_tomorrow` | `/api/admin/users/{user_id}/repost-tiktok-videos-tomorrow` | `client.AdminUserView().create({ $action: 'repost_tiktok_videos_tomorrow', ... })` |
| `reset_onboarding` | `/api/admin/users/{user_id}/reset-onboarding` | `client.AdminUserView().create({ $action: 'reset_onboarding', ... })` |
| `auto_schedule` | `/api/admin/users/{user_id}/auto-schedule` | `client.AdminUserView().update({ $action: 'auto_schedule', ... })` |
| `posted_video_reuse` | `/api/admin/users/{user_id}/posted-video-reuse` | `client.AdminUserView().update({ $action: 'posted_video_reuse', ... })` |

An action returns that action's OWN response, which is not necessarily a
AdminUserView record — check the API definition for its shape.

```ts
const result = await client.AdminUserView().create({
  $action: 'fix_all',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AdminUserView().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AdminUserView().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.AdminUserView().remove({ user_id: 'user_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.AdminUserView().update({
  user_id: 'user_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminUserViewEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminUsersTableItemEntity

```ts
const admin_users_table_item = client.AdminUsersTableItem()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AdminUsersTableItem().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminUsersTableItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminVideoRemixerEntity

```ts
const admin_video_remixer = client.AdminVideoRemixer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity` | `string` | Yes |  |
| `allowed_platforms` | `any[]` | No |  |
| `anchor_clip_id` | `string` | No |  |
| `atomicity_class` | `any` | No |  |
| `auto_render` | `boolean` | No |  |
| `campaign_allowed` | `boolean` | No |  |
| `channel` | `string` | No |  |
| `channel_default` | `string` | No |  |
| `clip_id` | `string` | Yes |  |
| `clip_ids` | `any[]` | No |  |
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
| `errors` | `any[]` | No |  |
| `evidence` | `string` | Yes |  |
| `expected_revision` | `any` | No |  |
| `expected_revisions` | `Record<string, any>` | Yes |  |
| `external_ai_allowed` | `boolean` | No |  |
| `file` | `string` | Yes |  |
| `followers` | `any` | No |  |
| `formula_id` | `string` | Yes |  |
| `formula_ids` | `any[]` | Yes |  |
| `handles` | `Record<string, any>` | No |  |
| `hook_subtype` | `any` | No |  |
| `hour_utc` | `number` | No |  |
| `human_role` | `string` | Yes |  |
| `idempotency_key` | `string` | Yes |  |
| `items` | `any[]` | Yes |  |
| `kim_clip_ids` | `any[]` | Yes |  |
| `kind` | `string` | Yes |  |
| `levels` | `Record<string, any>` | Yes |  |
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
| `policy` | `Record<string, any>` | Yes |  |
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
| `sample_links` | `any[]` | No |  |
| `secondary_roles` | `any` | No |  |
| `seconds` | `number` | Yes |  |
| `seed` | `number` | No |  |
| `seed_base` | `number` | No |  |
| `sensitive_personal_data_present` | `boolean` | No |  |
| `shares` | `any` | No |  |
| `shoot` | `string` | No |  |
| `slots` | `any[]` | Yes |  |
| `soundbite_title` | `any` | No |  |
| `source` | `string` | Yes |  |
| `source_id` | `string` | Yes |  |
| `source_ids` | `any[]` | Yes |  |
| `spend_usd` | `any` | No |  |
| `spiciness` | `any` | No |  |
| `spiciness_notes` | `string` | No |  |
| `start_ms` | `any` | No |  |
| `status` | `string` | No |  |
| `terry_clip_ids` | `any[]` | Yes |  |
| `testimonial_strength` | `any` | No |  |
| `testimonial_type` | `any` | No |  |
| `tier` | `string` | No |  |
| `timeline` | `Record<string, any>` | Yes |  |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `access` | `/api/admin/video-remixer/clippers/{identifier}/access` | `client.AdminVideoRemixer().create({ $action: 'access', ... })` |
| `decision` | `/api/admin/video-remixer/reviews/{identifier}/decision` | `client.AdminVideoRemixer().create({ $action: 'decision', ... })` |
| `export` | `/api/admin/video-remixer/reviews/{identifier}/export` | `client.AdminVideoRemixer().create({ $action: 'export', ... })` |
| `handoff` | `/api/admin/video-remixer/reviews/{identifier}/handoff` | `client.AdminVideoRemixer().create({ $action: 'handoff', ... })` |
| `human_check` | `/api/admin/video-remixer/reviews/{identifier}/human-check` | `client.AdminVideoRemixer().create({ $action: 'human_check', ... })` |
| `media` | `/api/admin/video-remixer/clips/{clip_id}/media` | `client.AdminVideoRemixer().create({ $action: 'media', ... })` |
| `preflight` | `/api/admin/video-remixer/recipes/{identifier}/preflight` | `client.AdminVideoRemixer().create({ $action: 'preflight', ... })` |
| `render` | `/api/admin/video-remixer/recipes/{identifier}/render` | `client.AdminVideoRemixer().create({ $action: 'render', ... })` |
| `render` | `/api/admin/video-remixer/runs/{identifier}/render` | `client.AdminVideoRemixer().create({ $action: 'render', ... })` |
| `repair` | `/api/admin/video-remixer/reviews/{identifier}/repair` | `client.AdminVideoRemixer().create({ $action: 'repair', ... })` |
| `restore` | `/api/admin/video-remixer/runs/{identifier}/restore` | `client.AdminVideoRemixer().create({ $action: 'restore', ... })` |
| `preflight` | `/api/admin/video-remixer/recipes/{identifier}/preflight` | `client.AdminVideoRemixer().load({ $action: 'preflight', ... })` |

An action returns that action's OWN response, which is not necessarily a
AdminVideoRemixer record — check the API definition for its shape.

```ts
const result = await client.AdminVideoRemixer().create({
  $action: 'access',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AdminVideoRemixer().create({
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

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.AdminVideoRemixer().load({ clip_id: 'clip_id' })
```

#### `patch(data: object, ctrl?: object)`

Change part of an existing entity: only the fields given are sent. The data must include the entity `id`. Resolves to the patched entity.

```ts
const result = await client.AdminVideoRemixer().patch({
  // Only the fields to change
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.AdminVideoRemixer().remove({ identifier: 'identifier' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.AdminVideoRemixer().update({
  identifier: 'identifier',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminVideoRemixerEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdvanceStepEntity

```ts
const advance_step = client.AdvanceStep()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_step` | `string` | Yes |  |
| `onboarding_data_id` | `string` | Yes | UUID of the OnboardingData record |
| `success` | `boolean` | Yes |  |
| `to_step` | `string` | Yes | Target step name |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AdvanceStep().create({
  onboarding_data_id: 'example_onboarding_data_id',
  to_step: 'example_to_step',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdvanceStepEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentEntity

```ts
const agent = client.Agent()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Agent().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentAccessCustomersHealthEntity

```ts
const agent_access_customers_health = client.AgentAccessCustomersHealth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountType` | `any` | No |  |
| `agentQuota` | `number` | Yes |  |
| `assignedAgentsByType` | `Record<string, any>` | Yes |  |
| `assignedAgentsTotal` | `number` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `email` | `string` | Yes |  |
| `isInternalUser` | `any` | No |  |
| `membership` | `any` | No |  |
| `name` | `string` | No |  |
| `performance` | `Record<string, any>` | Yes |  |
| `productCount` | `number` | Yes |  |
| `subscriptionCurrentPeriodEnd` | `any` | No |  |
| `subscriptionDetails` | `any` | No |  |
| `subscriptionStatus` | `any` | No |  |
| `usage` | `Record<string, any>` | Yes |  |
| `userId` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AgentAccessCustomersHealth().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentAccessCustomersHealthEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentAccessOverviewEntity

```ts
const agent_access_overview = client.AgentAccessOverview()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeUsers` | `number` | Yes |  |
| `generatedAt` | `string` | Yes |  |
| `newUsersYesterday` | `number` | Yes |  |
| `onboardingContextCounts` | `Record<string, any>` | Yes |  |
| `onboardingCurrentStepCounts` | `Record<string, any>` | Yes |  |
| `onboardingCurrentStepWindow` | `Record<string, any>` | Yes |  |
| `onboardingFlowVariantCounts` | `Record<string, any>` | Yes |  |
| `onboardingLockedUntilActivation` | `number` | Yes |  |
| `onboardingRecordsTotal` | `number` | Yes |  |
| `onboardingRecordsWindow` | `number` | Yes |  |
| `onboardingSocialScanStatusCounts` | `Record<string, any>` | Yes |  |
| `onboardingWebsiteScrapeStatusCounts` | `Record<string, any>` | Yes |  |
| `subscriptionStatusCounts` | `Record<string, any>` | Yes |  |
| `totalInternalUsers` | `number` | Yes |  |
| `totalUsers` | `number` | Yes |  |
| `trialStartedYesterday` | `number` | Yes |  |
| `trialingUsers` | `number` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.AgentAccessOverview().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentAccessOverviewEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentAccessPhilHourlyNotificationEntity

```ts
const agent_access_phil_hourly_notification = client.AgentAccessPhilHourlyNotification()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `generatedAt` | `string` | Yes |  |
| `phoneHealth` | `Record<string, any>` | Yes |  |
| `scheduledPosts` | `Record<string, any>` | Yes |  |
| `targetDate` | `string` | Yes |  |
| `uploadPostInstagramHealth` | `Record<string, any>` | Yes |  |
| `uploadPostTiktokHealth` | `Record<string, any>` | Yes |  |
| `uploadPostYoutubeHealth` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.AgentAccessPhilHourlyNotification().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentAccessPhilHourlyNotificationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentAccessPhilStatsRefreshEntity

```ts
const agent_access_phil_stats_refresh = client.AgentAccessPhilStatsRefresh()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `generatedAt` | `string` | Yes |  |
| `statsRefresh` | `Record<string, any>` | Yes |  |
| `targetDate` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.AgentAccessPhilStatsRefresh().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentAccessPhilStatsRefreshEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentAccessPhilVideoEntity

```ts
const agent_access_phil_video = client.AgentAccessPhilVideo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `generatedAt` | `string` | Yes |  |
| `targetDate` | `string` | Yes |  |
| `videos` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.AgentAccessPhilVideo().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentAccessPhilVideoEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentAccessUserAgentEntity

```ts
const agent_access_user_agent = client.AgentAccessUserAgent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentQuota` | `number` | Yes |  |
| `agents` | `any[]` | Yes |  |
| `assignedByType` | `Record<string, any>` | Yes |  |
| `assignedTotal` | `number` | Yes |  |
| `email` | `string` | Yes |  |
| `products` | `any[]` | Yes |  |
| `userId` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AgentAccessUserAgent().list({ email: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentAccessUserAgentEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentAccessUserPhoneFarmEntity

```ts
const agent_access_user_phone_farm = client.AgentAccessUserPhoneFarm()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AgentAccessUserPhoneFarm().list({ email: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentAccessUserPhoneFarmEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentAccessUserPostEntity

```ts
const agent_access_user_post = client.AgentAccessUserPost()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AgentAccessUserPost().list({ email: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentAccessUserPostEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentAccessUserSummaryEntity

```ts
const agent_access_user_summary = client.AgentAccessUserSummary()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AgentAccessUserSummary().list({ email: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentAccessUserSummaryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentAccessUserVideoEntity

```ts
const agent_access_user_video = client.AgentAccessUserVideo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allTime` | `Record<string, any>` | Yes |  |
| `email` | `string` | Yes |  |
| `today` | `Record<string, any>` | Yes |  |
| `userId` | `string` | Yes |  |
| `yesterday` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.AgentAccessUserVideo().load({ email: 'email' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentAccessUserVideoEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentAccessUserWinningAdEntity

```ts
const agent_access_user_winning_ad = client.AgentAccessUserWinningAd()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `productId` | `string` | Yes |  |
| `productName` | `string` | Yes |  |
| `winningAds` | `any[]` | Yes |  |
| `winningAdsCount` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AgentAccessUserWinningAd().list({ email: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentAccessUserWinningAdEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentAccessWinningAdsSummaryEntity

```ts
const agent_access_winning_ads_summary = client.AgentAccessWinningAdsSummary()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AgentAccessWinningAdsSummary().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentAccessWinningAdsSummaryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentDetailEntity

```ts
const agent_detail = client.AgentDetail()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AgentDetail().list()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.AgentDetail().update({
  upload_post_agent_id: 'upload_post_agent_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentDetailEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentHealthEntity

```ts
const agent_health = client.AgentHealth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `daily` | `any[]` | Yes |  |
| `dates` | `any[]` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `groups` | `any[]` | Yes |  |
| `latest` | `Record<string, any>` | Yes |  |
| `live_date` | `any` | No |  |
| `phone_admin_generated_at` | `string` | Yes |  |
| `platform` | `string` | No |  |
| `post_target` | `number` | Yes |  |
| `qa_managed_agent_ids` | `any[]` | No |  |
| `scope_prefixes` | `any[]` | Yes |  |
| `timezone` | `string` | Yes |  |
| `warmup_target` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AgentHealth().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentHealthEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentHealthCustomerOptionEntity

```ts
const agent_health_customer_option = client.AgentHealthCustomerOption()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_count` | `number` | Yes |  |
| `email` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AgentHealthCustomerOption().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentHealthCustomerOptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentHealthDetailEntity

```ts
const agent_health_detail = client.AgentHealthDetail()
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
| `issues` | `any[]` | Yes |  |
| `limit` | `number` | Yes |  |
| `metric` | `string` | Yes |  |
| `offset` | `number` | Yes |  |
| `warmup_runs` | `any[]` | No |  |
| `warning_total` | `number` | No |  |
| `warnings` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AgentHealthDetail().list({ date: "example", group_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentHealthDetailEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentPostEntity

```ts
const agent_post = client.AgentPost()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AgentPost().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentPostEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentStatEntity

```ts
const agent_stat = client.AgentStat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agents_needed` | `number` | Yes |  |
| `dedicated_agents` | `Record<string, any>` | Yes |  |
| `shared_agents` | `Record<string, any>` | Yes |  |
| `total_agents` | `number` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.AgentStat().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentStatEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentSummaryEntity

```ts
const agent_summary = client.AgentSummary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_count` | `number` | Yes |  |
| `favicon_url` | `any` | No |  |
| `product_id` | `string` | Yes |  |
| `product_name` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AgentSummary().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentSummaryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentsSummaryEntity

```ts
const agents_summary = client.AgentsSummary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `total_agents` | `number` | Yes |  |
| `total_agents_count_sum` | `number` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.AgentsSummary().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentsSummaryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AnalysisStatusEntity

```ts
const analysis_status = client.AnalysisStatus()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.AnalysisStatus().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AnalysisStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AnalyticsPostEntity

```ts
const analytics_post = client.AnalyticsPost()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AnalyticsPost().list({ date_from: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AnalyticsPostEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AnalyzeProductEntity

```ts
const analyze_product = client.AnalyzeProduct()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instagram_username` | `any` | No |  |
| `message` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AnalyzeProduct().create({
  url: 'example_url',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AnalyzeProductEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssignAgentEntity

```ts
const assign_agent = client.AssignAgent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent` | `Record<string, any>` | Yes | Agent information for V6. |
| `assignment` | `Record<string, any>` | Yes | Assignment information for V6. |
| `mock_agents` | `any[]` | Yes |  |
| `onboarding_data_id` | `string` | Yes | UUID of the OnboardingData record |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AssignAgent().create({
  onboarding_data_id: 'example_onboarding_data_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssignAgentEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AuthEntity

```ts
const auth = client.Auth()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `magic_link` | `/auth/magic-link` | `client.Auth().create({ $action: 'magic_link', ... })` |
| `verify_google_token` | `/auth/verify-google-token` | `client.Auth().create({ $action: 'verify_google_token', ... })` |
| `verify_magic_link` | `/auth/verify-magic-link` | `client.Auth().create({ $action: 'verify_magic_link', ... })` |
| `verify_share_access` | `/auth/verify-share-access` | `client.Auth().create({ $action: 'verify_share_access', ... })` |

An action returns that action's OWN response, which is not necessarily a
Auth record — check the API definition for its shape.

```ts
const result = await client.Auth().create({
  $action: 'magic_link',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AuthEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AutoScheduleSettingEntity

```ts
const auto_schedule_setting = client.AutoScheduleSetting()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.AutoScheduleSetting().load()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.AutoScheduleSetting().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AutoScheduleSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BulkTikTokStatsUpdateEntity

```ts
const bulk_tik_tok_stats_update = client.BulkTikTokStatsUpdate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `failedIds` | `any[]` | Yes |  |
| `updatedCount` | `number` | Yes |  |
| `updates` | `any[]` | Yes |  |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.BulkTikTokStatsUpdate().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BulkTikTokStatsUpdateEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CarouselEntity

```ts
const carousel = client.Carousel()
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
| `formula` | `Record<string, any>` | No |  |
| `formula_id` | `string` | No |  |
| `formula_name` | `any` | No |  |
| `generation` | `Record<string, any>` | No |  |
| `id` | `string` | No |  |
| `image_prompt` | `any` | No |  |
| `likes` | `any` | No |  |
| `main_prompt` | `any` | No |  |
| `metrics_updated_at` | `any` | No |  |
| `post_url` | `any` | No |  |
| `profile_url` | `any` | No |  |
| `qa` | `Record<string, any>` | No |  |
| `qa_status` | `string` | Yes |  |
| `qa_verdict` | `any` | No |  |
| `quality_score` | `any` | No |  |
| `queue_id` | `string` | Yes |  |
| `relevance_score` | `any` | No |  |
| `scheduled_at` | `string` | Yes |  |
| `slide_count` | `number` | Yes |  |
| `slides` | `any[]` | Yes |  |
| `source` | `Record<string, any>` | No |  |
| `status` | `string` | Yes |  |
| `thumbnail_url` | `any` | No |  |
| `title` | `string` | Yes |  |
| `video_id` | `string` | Yes |  |
| `views` | `any` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `finalize` | `/api/carousel/{video_id}/finalize` | `client.Carousel().create({ $action: 'finalize', ... })` |

An action returns that action's OWN response, which is not necessarily a
Carousel record — check the API definition for its shape.

```ts
const result = await client.Carousel().create({
  $action: 'finalize',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Carousel().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Carousel().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Carousel().load({ id: 'carousel_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CarouselEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CarouselAgentDetailEntity

```ts
const carousel_agent_detail = client.CarouselAgentDetail()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.CarouselAgentDetail().load({ agent_id: 'agent_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CarouselAgentDetailEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CarouselStatusEntity

```ts
const carousel_status = client.CarouselStatus()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.CarouselStatus().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CarouselStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ChatEntity

```ts
const chat = client.Chat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `idempotencyKey` | `string` | Yes |  |
| `message` | `string` | Yes |  |
| `sessionId` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Chat().create({
  session_id: 'example_session_id',
  idempotencyKey: 'example_idempotencyKey',
  message: 'example_message',
  sessionId: 'example_sessionId',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ChatEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ChatHistoryEntity

```ts
const chat_history = client.ChatHistory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `chatSubVariant` | `string` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `model` | `any` | No |  |
| `onboardingDataId` | `string` | Yes |  |
| `routeRecommendation` | `any` | No |  |
| `salesStage` | `string` | Yes |  |
| `selectedPlan` | `any` | No |  |
| `session` | `Record<string, any>` | Yes |  |
| `sessionId` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ChatHistory().create({
  onboardingDataId: 'example_onboardingDataId',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ChatHistory().load({ session_id: 'session_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ChatHistoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ChatSessionEntity

```ts
const chat_session = client.ChatSession()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ChatSession().create({
  session_id: 'example_session_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ChatSessionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CommentEntity

```ts
const comment = client.Comment()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `result` | `/api/comments/results` | `client.Comment().load({ $action: 'result', ... })` |

An action returns that action's OWN response, which is not necessarily a
Comment record — check the API definition for its shape.

```ts
const result = await client.Comment().load({
  $action: 'result',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Comment().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CommentEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CommentCampaignEntity

```ts
const comment_campaign = client.CommentCampaign()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_daily_limit` | `number` | No |  |
| `account_weekly_limit` | `number` | No |  |
| `action` | `string` | Yes |  |
| `active_days_per_week` | `number` | No |  |
| `agent_id` | `string` | Yes |  |
| `allowlist` | `any[]` | No |  |
| `analysis_daily_limit` | `number` | No |  |
| `analysis_model` | `string` | No |  |
| `analysis_reservation_usd` | `number` | No |  |
| `approved_markets` | `any[]` | No |  |
| `brand_forward_enabled` | `boolean` | No |  |
| `briefs` | `Record<string, any>` | No |  |
| `candidate_only` | `boolean` | No |  |
| `claims` | `any[]` | No |  |
| `cohort_removal_threshold` | `number` | No |  |
| `daily_cost_ceiling_usd` | `number` | No |  |
| `delivery_mode` | `string` | No |  |
| `disclosure_mode` | `string` | No |  |
| `disclosure_template` | `string` | No |  |
| `draft_options_count` | `number` | No |  |
| `draft_review_reservation_usd` | `number` | No |  |
| `exceptional_daily_cap_approved` | `boolean` | No |  |
| `execution_enabled` | `boolean` | No |  |
| `experiment_styles` | `any[]` | No |  |
| `inventory_factor` | `number` | No |  |
| `keywords` | `any[]` | No |  |
| `max_duration_seconds` | `any` | No |  |
| `metadata_pass_rate` | `number` | No |  |
| `min_interval_minutes` | `number` | No |  |
| `mode` | `string` | No |  |
| `monitored_creators` | `any[]` | No |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.CommentCampaign().create({
  product_id: 'example_product_id',
  action: 'example_action',
  agent_id: 'example_agent_id',
  reason: 'example_reason',
  request_key: 'example_request_key',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.CommentCampaign().load({ product_id: 'product_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.CommentCampaign().update({
  product_id: 'product_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CommentCampaignEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CompleteChatCheckoutEntity

```ts
const complete_chat_checkout = client.CompleteChatCheckout()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.CompleteChatCheckout().create({
  onboarding_data_id: 'example_onboarding_data_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CompleteChatCheckoutEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreateBlackoutSora2VideoEntity

```ts
const create_blackout_sora2_video = client.CreateBlackoutSora2Video()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `main_prompt` | `string` | Yes |  |
| `media_asset_id` | `string` | Yes |  |
| `product_id` | `string` | Yes |  |
| `requires_polling` | `boolean` | No |  |
| `video` | `Record<string, any>` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.CreateBlackoutSora2Video().create({
  main_prompt: 'example_main_prompt',
  media_asset_id: 'example_media_asset_id',
  product_id: 'example_product_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreateBlackoutSora2VideoEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreateCarouselEntity

```ts
const create_carousel = client.CreateCarousel()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.CreateCarousel().create({
  template_id: 'example_template_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreateCarouselEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreateProductEntity

```ts
const create_product = client.CreateProduct()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `onboarding_data_id` | `string` | Yes | UUID of the OnboardingData record |
| `product_id` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |
| `videos_queued` | `number` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.CreateProduct().create({
  onboarding_data_id: 'example_onboarding_data_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreateProductEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreateResetProductV6Entity

```ts
const create_reset_product_v6 = client.CreateResetProductV6()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.CreateResetProductV6().create({
  onboarding_data_id: 'example_onboarding_data_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreateResetProductV6Entity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreateSora2VideoEntity

```ts
const create_sora2_video = client.CreateSora2Video()
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
| `video` | `Record<string, any>` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.CreateSora2Video().create({
  main_prompt: 'example_main_prompt',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreateSora2VideoEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreateVariationEntity

```ts
const create_variation = client.CreateVariation()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.CreateVariation().create({
  hook_duration: 1,
  media_asset_id: 'example_media_asset_id',
  product_id: 'example_product_id',
  prompt: 'example_prompt',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreateVariationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomerEntity

```ts
const customer = client.Customer()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Customer().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomerEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomerHealthEntity

```ts
const customer_health = client.CustomerHealth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_agents` | `Record<string, any>` | Yes |  |
| `available_dates` | `any[]` | Yes |  |
| `date` | `string` | Yes |  |
| `email` | `string` | Yes |  |
| `entries` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `performance_overview` | `Record<string, any>` | Yes |  |
| `platform_coverage_summary` | `Record<string, any>` | Yes |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.CustomerHealth().load({ id: 'customer_health_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomerHealthEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomerHealthAllCustomersItemEntity

```ts
const customer_health_all_customers_item = client.CustomerHealthAllCustomersItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | `any` | No |  |
| `assigned_agents_count` | `number` | Yes |  |
| `daily_stats` | `any[]` | Yes |  |
| `email` | `string` | Yes |  |
| `is_migrated` | `boolean` | No |  |
| `total_views` | `number` | Yes |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.CustomerHealthAllCustomersItem().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomerHealthAllCustomersItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomerHealthViewsSummaryEntity

```ts
const customer_health_views_summary = client.CustomerHealthViewsSummary()
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
| `top_users` | `any[]` | Yes |  |
| `total_views` | `number` | Yes |  |
| `trend` | `any[]` | Yes |  |
| `trend_granularity` | `string` | Yes |  |
| `user_email` | `any` | No |  |
| `user_id` | `string` | No |  |
| `users_with_views` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.CustomerHealthViewsSummary().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomerHealthViewsSummaryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DailyEntity

```ts
const daily = client.Daily()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `plan` | `/api/carousel/daily/{product_id}/plan` | `client.Daily().create({ $action: 'plan', ... })` |

An action returns that action's OWN response, which is not necessarily a
Daily record — check the API definition for its shape.

```ts
const result = await client.Daily().create({
  $action: 'plan',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Daily().create({
  id: 'example_id',
  day: 'example_day',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DailyEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DailyStatusEntity

```ts
const daily_status = client.DailyStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.DailyStatus().load({ id: 'daily_status_id', day: 'day' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DailyStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DedicatedAgentsDashboardEntity

```ts
const dedicated_agents_dashboard = client.DedicatedAgentsDashboard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_connections` | `number` | Yes |  |
| `assigned_user_id` | `string` | No |  |
| `assigned_user_ids` | `any[]` | No |  |
| `bio` | `any` | Yes |  |
| `id` | `string` | Yes |  |
| `instagram_url` | `any` | No |  |
| `is_active` | `boolean` | Yes |  |
| `last_admin_synced_at` | `any` | No |  |
| `name` | `string` | Yes |  |
| `role` | `any` | Yes |  |
| `tiktok_stats` | `any` | No |  |
| `tiktok_url` | `any` | No |  |
| `today_failed_entries` | `any[]` | No |  |
| `today_stats` | `Record<string, any>` | Yes |  |
| `upload_post_platforms` | `any` | No |  |
| `upload_post_profile` | `any` | No |  |
| `yesterday_failed_entries` | `any[]` | No |  |
| `yesterday_stats` | `Record<string, any>` | Yes |  |
| `youtube_url` | `any` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.DedicatedAgentsDashboard().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DedicatedAgentsDashboardEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EnterpriseAgentEntity

```ts
const enterprise_agent = client.EnterpriseAgent()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.EnterpriseAgent().create({
  product_id: 'example_product_id',
  source_product_id: 'example_source_product_id',
  target_product_id: 'example_target_product_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.EnterpriseAgent().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EnterpriseAgentEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EnterpriseProductEntity

```ts
const enterprise_product = client.EnterpriseProduct()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.EnterpriseProduct().load({ product_id: 'product_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EnterpriseProductEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ExactAvailabilityEntity

```ts
const exact_availability = client.ExactAvailability()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ExactAvailability().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ExactAvailabilityEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ExactFormulaEntity

```ts
const exact_formula = client.ExactFormula()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ExactFormula().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ExactFormulaEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ExtractV2Entity

```ts
const extract_v2 = client.ExtractV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instagram_username` | `any` | No |  |
| `message` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ExtractV2().create({
  url: 'example_url',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ExtractV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FailedPostEntity

```ts
const failed_post = client.FailedPost()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.FailedPost().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FailedPostEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FileEntity

```ts
const file = client.File()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.File().create({
  file: 'example_file',
})
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FileEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GenerateBlackoutSora2PromptEntity

```ts
const generate_blackout_sora2_prompt = client.GenerateBlackoutSora2Prompt()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `media_asset_id` | `string` | Yes |  |
| `product_id` | `string` | Yes |  |
| `prompt` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.GenerateBlackoutSora2Prompt().create({
  media_asset_id: 'example_media_asset_id',
  product_id: 'example_product_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GenerateBlackoutSora2PromptEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GeneratePomelliDemoEntity

```ts
const generate_pomelli_demo = client.GeneratePomelliDemo()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.GeneratePomelliDemo().create({
  product_id: 'example_product_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GeneratePomelliDemoEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GeneratePromptEntity

```ts
const generate_prompt = client.GeneratePrompt()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hook_duration` | `number` | Yes |  |
| `media_asset_id` | `string` | Yes |  |
| `media_asset_url` | `string` | Yes |  |
| `prompt` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.GeneratePrompt().create({
  media_asset_id: 'example_media_asset_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GeneratePromptEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GenerateSora2PromptEntity

```ts
const generate_sora2_prompt = client.GenerateSora2Prompt()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `prompt` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.GenerateSora2Prompt().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GenerateSora2PromptEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HealthrxEntity

```ts
const healthrx = client.Healthrx()
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
| `dimensions` | `Record<string, any>` | Yes |  |
| `duration_seconds` | `number` | No |  |
| `evidence` | `string` | Yes |  |
| `evidence_urls` | `any[]` | Yes |  |
| `external_key` | `string` | Yes |  |
| `format` | `string` | No |  |
| `includes_all_attempt_costs` | `boolean` | No |  |
| `input_specification` | `Record<string, any>` | Yes |  |
| `kind` | `string` | Yes |  |
| `level` | `number` | No |  |
| `measured_at` | `string` | Yes |  |
| `model_version` | `string` | Yes |  |
| `paid_campaign_id` | `string` | No |  |
| `parent_content_id` | `string` | No |  |
| `paused` | `boolean` | Yes |  |
| `pillar` | `string` | Yes |  |
| `profile` | `Record<string, any>` | Yes |  |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `attribution` | `/api/healthrx/products/{product_id}/attribution` | `client.Healthrx().create({ $action: 'attribution', ... })` |
| `run` | `/api/healthrx/products/{product_id}/run` | `client.Healthrx().create({ $action: 'run', ... })` |

An action returns that action's OWN response, which is not necessarily a
Healthrx record — check the API definition for its shape.

```ts
const result = await client.Healthrx().create({
  $action: 'attribution',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Healthrx().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Healthrx().load({ product_id: 'product_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HealthrxEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InitResetProductV6Entity

```ts
const init_reset_product_v6 = client.InitResetProductV6()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.InitResetProductV6().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InitResetProductV6Entity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IriEntity

```ts
const iri = client.Iri()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `correlationId` | `any` | No |  |
| `idempotencyKey` | `string` | Yes |  |
| `productId` | `any` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Iri().create({
  connector_id: 'example_connector_id',
  idempotencyKey: 'example_idempotencyKey',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IriEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IrisCapabilityEntity

```ts
const iris_capability = client.IrisCapability()
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
| `input` | `Record<string, any>` | No |  |
| `membershipId` | `any` | No |  |
| `message` | `any` | No |  |
| `ok` | `boolean` | Yes |  |
| `platformAccountId` | `any` | No |  |
| `platformLinkId` | `any` | No |  |
| `productScope` | `string` | Yes |  |
| `requestedBy` | `Record<string, any>` | No |  |
| `result` | `Record<string, any>` | No |  |
| `retryable` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.IrisCapability().create({
  id: 'example_id',
  capability: 'example_capability',
  correlationId: 'example_correlationId',
  externalUserId: 'example_externalUserId',
  idempotencyKey: 'example_idempotencyKey',
  productScope: 'example_productScope',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IrisCapabilityEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IrisChatEntity

```ts
const iris_chat = client.IrisChat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artifacts` | `any[]` | No |  |
| `correlationId` | `string` | Yes |  |
| `idempotencyKey` | `string` | Yes |  |
| `message` | `string` | Yes |  |
| `mode` | `string` | Yes |  |
| `ok` | `boolean` | No |  |
| `pageContext` | `Record<string, any>` | No |  |
| `productId` | `any` | No |  |
| `runtimeStatus` | `string` | Yes |  |
| `sessionId` | `any` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.IrisChat().create({
  correlationId: 'example_correlationId',
  idempotencyKey: 'example_idempotencyKey',
  message: 'example_message',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IrisChatEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IrisConnectorEntity

```ts
const iris_connector = client.IrisConnector()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectors` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.IrisConnector().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IrisConnectorEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IrisStatusEntity

```ts
const iris_status = client.IrisStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectorsPreview` | `any[]` | No |  |
| `product` | `any` | No |  |
| `status` | `Record<string, any>` | Yes |  |
| `tasksPreview` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.IrisStatus().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IrisStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IrisTaskEntity

```ts
const iris_task = client.IrisTask()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approvalRequired` | `boolean` | No |  |
| `cadence` | `string` | No |  |
| `capability` | `any` | No |  |
| `completed` | `any[]` | No |  |
| `description` | `string` | No |  |
| `discover` | `any[]` | No |  |
| `productId` | `any` | No |  |
| `recurring` | `any[]` | No |  |
| `requiredConnectors` | `any[]` | No |  |
| `title` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.IrisTask().create({
  title: 'example_title',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.IrisTask().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IrisTaskEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IrisUsageEntity

```ts
const iris_usage = client.IrisUsage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `eventCount` | `number` | No |  |
| `events` | `any[]` | No |  |
| `membershipId` | `any` | No |  |
| `productScope` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.IrisUsage().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IrisUsageEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LandingEntity

```ts
const landing = client.Landing()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `reference_image` | `/api/landings/landing/reference-image` | `client.Landing().create({ $action: 'reference_image', ... })` |
| `regenerate` | `/api/landings/landing/regenerate` | `client.Landing().create({ $action: 'regenerate', ... })` |

An action returns that action's OWN response, which is not necessarily a
Landing record — check the API definition for its shape.

```ts
const result = await client.Landing().create({
  $action: 'reference_image',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Landing().create({
  index: 1,
  file: 'example_file',
})
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LandingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LandingStatEntity

```ts
const landing_stat = client.LandingStat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `landing` | `Record<string, any>` | Yes |  |
| `microhub` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.LandingStat().load({ slug: 'slug' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LandingStatEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LandingStatusEntity

```ts
const landing_status = client.LandingStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errorMessage` | `any` | No |  |
| `landingStatus` | `string` | Yes |  |
| `microhubStatus` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.LandingStatus().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LandingStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LinkInBioEntity

```ts
const link_in_bio = client.LinkInBio()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `linkInBioType` | `string` | Yes |  |
| `redirectUrl` | `string` | Yes |  |
| `slug` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.LinkInBio().load({ slug: 'slug' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LinkInBioEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LinkInDmEntity

```ts
const link_in_dm = client.LinkInDm()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `linkInDmsType` | `string` | Yes |  |
| `redirectUrl` | `string` | Yes |  |
| `slug` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.LinkInDm().load({ slug: 'slug' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LinkInDmEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LinkInPostEntity

```ts
const link_in_post = client.LinkInPost()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `linkInPostsType` | `string` | Yes |  |
| `redirectUrl` | `string` | Yes |  |
| `showLinkInFirstComment` | `boolean` | Yes |  |
| `slug` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.LinkInPost().load({ slug: 'slug' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LinkInPostEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LinkUserEntity

```ts
const link_user = client.LinkUser()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `already_linked` | `boolean` | No |  |
| `onboarding_data_id` | `string` | Yes | UUID of the OnboardingData record |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.LinkUser().create({
  onboarding_data_id: 'example_onboarding_data_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LinkUserEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MediaAssetEntity

```ts
const media_asset = client.MediaAsset()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `description` | `string` | No |  |
| `file` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `media_assets` | `any[]` | Yes |  |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `exclude_copycat` | `/api/media-assets/{media_asset_id}/exclude-copycat` | `client.MediaAsset().create({ $action: 'exclude_copycat', ... })` |
| `upload` | `/api/media-assets/upload` | `client.MediaAsset().create({ $action: 'upload', ... })` |

An action returns that action's OWN response, which is not necessarily a
MediaAsset record — check the API definition for its shape.

```ts
const result = await client.MediaAsset().create({
  $action: 'exclude_copycat',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.MediaAsset().create({
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

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.MediaAsset().load({ id: 'media_asset_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MediaAssetEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MenEntity

```ts
const men = client.Men()
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Men().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MenEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MicrodramaEntity

```ts
const microdrama = client.Microdrama()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `evidence` | `Record<string, any>` | Yes |  |
| `expected_revision` | `number` | Yes |  |
| `idempotency_key` | `string` | Yes |  |
| `issues` | `any[]` | No |  |
| `reason` | `string` | Yes |  |
| `role` | `string` | Yes |  |
| `scores` | `Record<string, any>` | Yes |  |
| `selected_premise_id` | `string` | No |  |
| `stage` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `subject_hash` | `string` | Yes |  |
| `title` | `string` | No |  |
| `verdict` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `approve` | `/api/microdrama/episodes/{episode_id}/approve` | `client.Microdrama().create({ $action: 'approve', ... })` |
| `episode` | `/api/microdrama/episodes` | `client.Microdrama().create({ $action: 'episode', ... })` |
| `reference_asset` | `/api/microdrama/reference-assets` | `client.Microdrama().create({ $action: 'reference_asset', ... })` |
| `series` | `/api/microdrama/series` | `client.Microdrama().create({ $action: 'series', ... })` |
| `config` | `/api/microdrama/config` | `client.Microdrama().load({ $action: 'config', ... })` |
| `formula` | `/api/microdrama/formulas` | `client.Microdrama().load({ $action: 'formula', ... })` |
| `reference_asset` | `/api/microdrama/reference-assets` | `client.Microdrama().load({ $action: 'reference_asset', ... })` |
| `series` | `/api/microdrama/series` | `client.Microdrama().load({ $action: 'series', ... })` |

An action returns that action's OWN response, which is not necessarily a
Microdrama record — check the API definition for its shape.

```ts
const result = await client.Microdrama().create({
  $action: 'approve',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Microdrama().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Microdrama().load({ episode_id: 'episode_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Microdrama().update({
  episode_id: 'episode_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MicrodramaEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MicrohubPublicEntity

```ts
const microhub_public = client.MicrohubPublic()
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
| `links` | `any[]` | No |  |
| `name` | `string` | No |  |
| `profileImageUrl` | `any` | No |  |
| `slug` | `string` | Yes |  |
| `socialLinks` | `Record<string, any>` | No |  |
| `testimonials` | `any[]` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.MicrohubPublic().load({ slug: 'slug' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MicrohubPublicEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OnboardingStatusEntity

```ts
const onboarding_status = client.OnboardingStatus()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.OnboardingStatus().list({ oid: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OnboardingStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OnboardingV6Entity

```ts
const onboarding_v6 = client.OnboardingV6()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.OnboardingV6().remove({ media_asset_id: 'media_asset_id', onboarding_data_id: 'onboarding_data_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OnboardingV6Entity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaidUserEntity

```ts
const paid_user = client.PaidUser()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PaidUser().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaidUserEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PexelEntity

```ts
const pexel = client.Pexel()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `search` | `/api/pexels/search` | `client.Pexel().list({ $action: 'search', ... })` |

An action returns that action's OWN response, which is not necessarily a
Pexel record — check the API definition for its shape.

```ts
const result = await client.Pexel().list({
  $action: 'search',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Pexel().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PexelEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PhoneAdminAvailableAgentSourceEntity

```ts
const phone_admin_available_agent_source = client.PhoneAdminAvailableAgentSource()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_count` | `number` | Yes |  |
| `pc_name` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PhoneAdminAvailableAgentSource().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PhoneAdminAvailableAgentSourceEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProductEntity

```ts
const product = client.Product()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_count` | `number` | Yes |  |
| `agents` | `any[]` | Yes |  |
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
| `product_demo_ids` | `any[]` | No |  |
| `product_details` | `Record<string, any>` | Yes | Product details for enterprise product creation |
| `product_id` | `string` | Yes |  |
| `product_name` | `string` | Yes |  |
| `product_url` | `string` | Yes |  |
| `pronunciation` | `any` | No |  |
| `regenerate_sora2` | `boolean` | No |  |
| `repostSource` | `any` | No |  |
| `repost_source` | `any` | No |  |
| `screenshot_url` | `any` | No |  |
| `social_post_ids` | `any[]` | No |  |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `clear` | `/api/products/clear` | `client.Product().create({ $action: 'clear', ... })` |
| `validate_social_handle` | `/api/products/{product_id}/validate-social-handle` | `client.Product().create({ $action: 'validate_social_handle', ... })` |
| `me` | `/api/products/me` | `client.Product().load({ $action: 'me', ... })` |
| `activate` | `/api/enterprise/products/{product_id}/activate` | `client.Product().update({ $action: 'activate', ... })` |
| `me` | `/api/products/me` | `client.Product().update({ $action: 'me', ... })` |

An action returns that action's OWN response, which is not necessarily a
Product record — check the API definition for its shape.

```ts
const result = await client.Product().create({
  $action: 'clear',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Product().create({
  product_details: {},
  product_url: 'example_product_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Product().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Product().load({ id: 'product_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Product().remove({ id: 'product_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Product().update({
  id: 'product_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProductEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProductDashboardEntity

```ts
const product_dashboard = client.ProductDashboard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agents` | `any[]` | Yes |  |
| `date` | `string` | Yes |  |
| `pagination` | `Record<string, any>` | Yes |  |
| `phone_admin_error` | `any` | No |  |
| `products` | `any[]` | Yes |  |
| `selected_product` | `any` | Yes |  |
| `summary` | `Record<string, any>` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.ProductDashboard().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProductDashboardEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProductDashboardViewEntity

```ts
const product_dashboard_view = client.ProductDashboardView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes |  |
| `views` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.ProductDashboardView().list({ product_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProductDashboardViewEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProductDemoEntity

```ts
const product_demo = client.ProductDemo()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.ProductDemo().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProductDemoEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProductLandingEntity

```ts
const product_landing = client.ProductLanding()
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
| `microhubLinks` | `any[]` | No |  |
| `microhubName` | `any` | No |  |
| `microhubProfileImageUrl` | `any` | No |  |
| `microhubScreenshotUrl` | `any` | No |  |
| `microhubSocialLinks` | `Record<string, any>` | No |  |
| `microhubStatus` | `string` | Yes |  |
| `microhubTestimonials` | `any[]` | No |  |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.ProductLanding().list()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.ProductLanding().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProductLandingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PublicResumeStatusEntity

```ts
const public_resume_status = client.PublicResumeStatus()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PublicResumeStatus().load({ oid: 'oid' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PublicResumeStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReRollVideoEntity

```ts
const re_roll_video = client.ReRollVideo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `queue_id` | `string` | Yes |  |
| `requires_polling` | `boolean` | No |  |
| `skip_credit_check` | `boolean` | No |  |
| `video` | `Record<string, any>` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ReRollVideo().create({
  queue_id: 'example_queue_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReRollVideoEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReadRootGetEntity

```ts
const read_root_get = client.ReadRootGet()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ReadRootGet().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReadRootGetEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RecordDemoBookedEntity

```ts
const record_demo_booked = client.RecordDemoBooked()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calendlyEventUri` | `any` | No |  |
| `calendlyInviteeUri` | `any` | No |  |
| `message` | `Record<string, any>` | Yes |  |
| `session` | `Record<string, any>` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.RecordDemoBooked().create({
  session_id: 'example_session_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RecordDemoBookedEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RefreshStatEntity

```ts
const refresh_stat = client.RefreshStat()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.RefreshStat().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RefreshStatEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RemixerClipperEntity

```ts
const remixer_clipper = client.RemixerClipper()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `catalog` | `/api/remixer-clippers/catalog` | `client.RemixerClipper().load({ $action: 'catalog', ... })` |

An action returns that action's OWN response, which is not necessarily a
RemixerClipper record — check the API definition for its shape.

```ts
const result = await client.RemixerClipper().load({
  $action: 'catalog',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.RemixerClipper().create({
  identifier: 'example_identifier',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.RemixerClipper().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RemixerClipperEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ResetProductEntity

```ts
const reset_product = client.ResetProduct()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `generate_videos_v6` | `/api/reset-product/generate-videos-v6` | `client.ResetProduct().create({ $action: 'generate_videos_v6', ... })` |

An action returns that action's OWN response, which is not necessarily a
ResetProduct record — check the API definition for its shape.

```ts
const result = await client.ResetProduct().create({
  $action: 'generate_videos_v6',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ResetProduct().create({
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ResetProduct().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ResetProductEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RetryWebsiteScrapeEntity

```ts
const retry_website_scrape = client.RetryWebsiteScrape()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.RetryWebsiteScrape().create({
  onboarding_data_id: 'example_onboarding_data_id',
  url: 'example_url',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RetryWebsiteScrapeEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SaveSurveyEntity

```ts
const save_survey = client.SaveSurvey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email_sent` | `boolean` | No |  |
| `onboarding_data_id` | `string` | Yes | UUID of the OnboardingData record |
| `success` | `boolean` | Yes |  |
| `survey` | `Record<string, any>` | Yes | Survey response data from frontend. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.SaveSurvey().create({
  onboarding_data_id: 'example_onboarding_data_id',
  survey: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SaveSurveyEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScanSocialEntity

```ts
const scan_social = client.ScanSocial()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ScanSocial().create({
  onboarding_data_id: 'example_onboarding_data_id',
  tiktok_handle: 'example_tiktok_handle',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScanSocialEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScanSocialsPublicEntity

```ts
const scan_socials_public = client.ScanSocialsPublic()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ScanSocialsPublic().create({
  onboarding_data_id: 'example_onboarding_data_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScanSocialsPublicEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScanSocialsStatusEntity

```ts
const scan_socials_status = client.ScanSocialsStatus()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ScanSocialsStatus().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScanSocialsStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScheduleV2Entity

```ts
const schedule_v2 = client.ScheduleV2()
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
| `reorders` | `any[]` | Yes |  |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `replace_video` | `/api/schedule/queue/{queue_id}/replace-video` | `client.ScheduleV2().update({ $action: 'replace_video', ... })` |

An action returns that action's OWN response, which is not necessarily a
ScheduleV2 record — check the API definition for its shape.

```ts
const result = await client.ScheduleV2().update({
  $action: 'replace_video',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ScheduleV2().create({
  created_at: 'example_created_at',
  id: 'example_id',
  reorders: [],
  scheduled_datetime: 'example_scheduled_datetime',
  source_type: 'example_source_type',
  status: 'example_status',
  video_id: 'example_video_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.ScheduleV2().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ScheduleV2().load()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.ScheduleV2().remove({ queue_id: 'queue_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.ScheduleV2().update({
  queue_id: 'queue_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScheduleV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScrapeEntity

```ts
const scrape = client.Scrape()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Scrape().create({
  old_product_id: 'example_old_product_id',
  url: 'example_url',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScrapeEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScrapeWebsitePublicEntity

```ts
const scrape_website_public = client.ScrapeWebsitePublic()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ScrapeWebsitePublic().create({
  url: 'example_url',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScrapeWebsitePublicEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScrapedDataEntity

```ts
const scraped_data = client.ScrapedData()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes |  |
| `homepageVideoUrl` | `any` | No |  |
| `howItWorks` | `string` | Yes |  |
| `imageUrls` | `any[]` | Yes |  |
| `instagram_username` | `any` | No |  |
| `mediaAssets` | `any[]` | No |  |
| `name` | `string` | Yes |  |
| `pricingAndOffers` | `string` | Yes |  |
| `targetAudience` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ScrapedData().create({
  url: 'example_url',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScrapedDataEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScrapingStatusEntity

```ts
const scraping_status = client.ScrapingStatus()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ScrapingStatus().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScrapingStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SelfServeActivateEntity

```ts
const self_serve_activate = client.SelfServeActivate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `onboarding_data_id` | `string` | Yes | UUID of the OnboardingData record |
| `redirect_to_stripe` | `boolean` | No |  |
| `stripe_checkout_url` | `any` | No |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.SelfServeActivate().create({
  onboarding_data_id: 'example_onboarding_data_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SelfServeActivateEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SeoEntity

```ts
const seo = client.Seo()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Seo().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SeoEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SeoAiMentionEntity

```ts
const seo_ai_mention = client.SeoAiMention()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bucket` | `string` | Yes |  |
| `domain_type` | `string` | Yes |  |
| `dominant_domain` | `string` | Yes |  |
| `engine` | `string` | Yes |  |
| `evidence` | `Record<string, any>` | Yes |  |
| `geo` | `string` | Yes |  |
| `language` | `string` | Yes |  |
| `primary_url` | `string` | Yes |  |
| `prompt_text` | `string` | Yes |  |
| `run_week` | `string` | Yes |  |
| `secondary_urls` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.SeoAiMention().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SeoAiMentionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SeoBacklinkEntity

```ts
const seo_backlink = client.SeoBacklink()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.SeoBacklink().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SeoBacklinkEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SeoKeywordEntity

```ts
const seo_keyword = client.SeoKeyword()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.SeoKeyword().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SeoKeywordEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SeoOverviewEntity

```ts
const seo_overview = client.SeoOverview()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.SeoOverview().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SeoOverviewEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SeoTrafficEntity

```ts
const seo_traffic = client.SeoTraffic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_date` | `string` | Yes |  |
| `series` | `any[]` | Yes |  |
| `site_url` | `string` | Yes |  |
| `start_date` | `string` | Yes |  |
| `top_countries` | `any[]` | Yes |  |
| `top_pages` | `any[]` | Yes |  |
| `top_queries` | `any[]` | Yes |  |
| `totals` | `Record<string, any>` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.SeoTraffic().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SeoTrafficEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ShareAccessLinkEntity

```ts
const share_access_link = client.ShareAccessLink()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `share_token` | `string` | Yes |  |
| `share_url` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ShareAccessLink().create({
  share_token: 'example_share_token',
  share_url: 'example_share_url',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ShareAccessLinkEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SiteEntity

```ts
const site = client.Site()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `slug` | `/api/sites/slugs` | `client.Site().load({ $action: 'slug', ... })` |

An action returns that action's OWN response, which is not necessarily a
Site record — check the API definition for its shape.

```ts
const result = await client.Site().load({
  $action: 'slug',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Site().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SiteEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SlideEntity

```ts
const slide = client.Slide()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `caption` | `any` | No |  |
| `id` | `string` | No |  |
| `prompt` | `any` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `regenerate` | `/api/carousel/{video_id}/slides/{slide_index}/regenerate` | `client.Slide().create({ $action: 'regenerate', ... })` |

An action returns that action's OWN response, which is not necessarily a
Slide record — check the API definition for its shape.

```ts
const result = await client.Slide().create({
  $action: 'regenerate',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Slide().create({
  carousel_id: 'example_carousel_id',
  slide_index: 1,
})
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Slide().update({
  carousel_id: 'carousel_id',
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SlideEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SlugValidationEntity

```ts
const slug_validation = client.SlugValidation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `reason` | `any` | No |  |
| `valid` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.SlugValidation().load({ slug: 'slug' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SlugValidationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SocialEntity

```ts
const social = client.Social()
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `platform` | `/social/platforms` | `client.Social().list({ $action: 'platform', ... })` |

An action returns that action's OWN response, which is not necessarily a
Social record — check the API definition for its shape.

```ts
const result = await client.Social().list({
  $action: 'platform',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Social().create({
  code: 'example_code',
  code_verifier: 'example_code_verifier',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Social().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Social().load()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Social().remove({ platform: 'platform' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SocialEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SocialScanPreviewEntity

```ts
const social_scan_preview = client.SocialScanPreview()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instagram_handle` | `any` | No | Instagram username/handle to scrape |
| `posts` | `any[]` | Yes |  |
| `success` | `boolean` | Yes |  |
| `tiktok_handle` | `any` | No | TikTok username/handle to scrape |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.SocialScanPreview().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SocialScanPreviewEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SocialScanProcessEntity

```ts
const social_scan_process = client.SocialScanProcess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `posts` | `any[]` | Yes |  |
| `product_id` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |
| `task_id` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.SocialScanProcess().create({
  posts: [],
  product_id: 'example_product_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SocialScanProcessEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SocialScanSaveEntity

```ts
const social_scan_save = client.SocialScanSave()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `media_asset_ids` | `any[]` | Yes |  |
| `posts` | `any[]` | Yes |  |
| `product_id` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.SocialScanSave().create({
  posts: [],
  product_id: 'example_product_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SocialScanSaveEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Sora2AvatarEntity

```ts
const sora2_avatar = client.Sora2Avatar()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_frame_url` | `any` | No |  |
| `created_at` | `string` | Yes |  |
| `current_step` | `number` | No |  |
| `headshot_url` | `any` | No |  |
| `id` | `string` | Yes |  |
| `logs` | `Record<string, any>` | No |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Sora2Avatar().create({
  prompt_key: 'example_prompt_key',
  selected_age_bucket: 'example_selected_age_bucket',
  selected_gender: 'example_selected_gender',
  selected_race: 'example_selected_race',
  sora2_video_url: 'example_sora2_video_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Sora2Avatar().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Sora2Avatar().load({ id: 'sora2_avatar_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Sora2Avatar().update({
  id: 'sora2_avatar_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `Sora2AvatarEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Sora2AvatarAssetUploadEntity

```ts
const sora2_avatar_asset_upload = client.Sora2AvatarAssetUpload()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Sora2AvatarAssetUpload().create({
  file: 'example_file',
  s3_key: 'example_s3_key',
  upload_type: 'example_upload_type',
  url: 'example_url',
})
```

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `Sora2AvatarAssetUploadEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Sora2AvatarStatEntity

```ts
const sora2_avatar_stat = client.Sora2AvatarStat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `by_age_bucket` | `Record<string, any>` | Yes |  |
| `by_gender` | `Record<string, any>` | Yes |  |
| `by_prompt_key` | `Record<string, any>` | Yes |  |
| `by_race` | `Record<string, any>` | Yes |  |
| `completed_avatars` | `number` | Yes |  |
| `completion_rate` | `number` | Yes |  |
| `total_avatars` | `number` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Sora2AvatarStat().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `Sora2AvatarStatEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatEntity

```ts
const stat = client.Stat()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `post` | `/api/admin/stats/posts` | `client.Stat().list({ $action: 'post', ... })` |

An action returns that action's OWN response, which is not necessarily a
Stat record — check the API definition for its shape.

```ts
const result = await client.Stat().list({
  $action: 'post',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Stat().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatsRefreshBackfillEntity

```ts
const stats_refresh_backfill = client.StatsRefreshBackfill()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `task_id` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.StatsRefreshBackfill().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatsRefreshBackfillEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatsRefreshIssueEntity

```ts
const stats_refresh_issue = client.StatsRefreshIssue()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.StatsRefreshIssue().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatsRefreshIssueEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatsRefreshOverviewEntity

```ts
const stats_refresh_overview = client.StatsRefreshOverview()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_run` | `any` | No |  |
| `aged_over_24h` | `number` | Yes |  |
| `backlog_preview` | `any[]` | Yes |  |
| `coverage_percent` | `number` | Yes |  |
| `customer_counts` | `Record<string, any>` | Yes |  |
| `date` | `string` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `method_counts` | `Record<string, any>` | Yes |  |
| `platform_counts` | `Record<string, any>` | Yes |  |
| `platform_units_resolved` | `number` | Yes |  |
| `platform_units_total` | `number` | Yes |  |
| `platform_units_unresolved` | `number` | Yes |  |
| `posted_entries` | `number` | Yes |  |
| `reason_counts` | `Record<string, any>` | Yes |  |
| `sla_deadline_et` | `string` | Yes |  |
| `stale_after_sla` | `number` | Yes |  |
| `top_affected_customers` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.StatsRefreshOverview().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatsRefreshOverviewEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatsRefreshRunSummaryEntity

```ts
const stats_refresh_run_summary = client.StatsRefreshRunSummary()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.StatsRefreshRunSummary().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatsRefreshRunSummaryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatsRefreshTaskTriggerEntity

```ts
const stats_refresh_task_trigger = client.StatsRefreshTaskTrigger()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.StatsRefreshTaskTrigger().create({
  message: 'example_message',
  status: 'example_status',
  target_date: 'example_target_date',
  task_id: 'example_task_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatsRefreshTaskTriggerEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StripeEntity

```ts
const stripe = client.Stripe()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `associate_guest_checkout` | `/api/stripe/associate-guest-checkout` | `client.Stripe().create({ $action: 'associate_guest_checkout', ... })` |
| `cancel_trial` | `/api/stripe/cancel-trial` | `client.Stripe().create({ $action: 'cancel_trial', ... })` |
| `create_checkout_session` | `/api/stripe/create-checkout-session` | `client.Stripe().create({ $action: 'create_checkout_session', ... })` |
| `create_credits_checkout_session` | `/api/stripe/create-credits-checkout-session` | `client.Stripe().create({ $action: 'create_credits_checkout_session', ... })` |
| `create_guest_checkout_session` | `/api/stripe/create-guest-checkout-session` | `client.Stripe().create({ $action: 'create_guest_checkout_session', ... })` |
| `create_portal_session` | `/api/stripe/create-portal-session` | `client.Stripe().create({ $action: 'create_portal_session', ... })` |
| `end_trial_early` | `/api/stripe/end-trial-early` | `client.Stripe().create({ $action: 'end_trial_early', ... })` |
| `update_subscription_quantity` | `/api/stripe/update-subscription-quantity` | `client.Stripe().create({ $action: 'update_subscription_quantity', ... })` |

An action returns that action's OWN response, which is not necessarily a
Stripe record — check the API definition for its shape.

```ts
const result = await client.Stripe().create({
  $action: 'associate_guest_checkout',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StripeEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StyleEntity

```ts
const style = client.Style()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Style().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StyleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TemplateEntity

```ts
const template = client.Template()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Template().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TemplateEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TikTokCreatorInfoEntity

```ts
const tik_tok_creator_info = client.TikTokCreatorInfo()
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
| `privacyLevelOptions` | `any[]` | No |  |
| `stitchDisabled` | `boolean` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.TikTokCreatorInfo().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TikTokCreatorInfoEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TopPostEntity

```ts
const top_post = client.TopPost()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `number` | Yes |  |
| `id` | `string` | Yes |  |
| `likes` | `number` | Yes |  |
| `platforms` | `any[]` | Yes |  |
| `scheduled_datetime` | `string` | Yes |  |
| `user_email` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |
| `views` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.TopPost().list({ date: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TopPostEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UploadPostAgentEntity

```ts
const upload_post_agent = client.UploadPostAgent()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `sync_platform` | `/api/upload-post-agents/sync-platforms` | `client.UploadPostAgent().create({ $action: 'sync_platform', ... })` |

An action returns that action's OWN response, which is not necessarily a
UploadPostAgent record — check the API definition for its shape.

```ts
const result = await client.UploadPostAgent().create({
  $action: 'sync_platform',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.UploadPostAgent().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UploadPostAgentEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserEntity

```ts
const user = client.User()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountType` | `any` | No |  |
| `activatedByAdminAt` | `any` | No |  |
| `activatedByAdminId` | `any` | No |  |
| `agents` | `any[]` | Yes |  |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `attribution` | `/api/users/attribution` | `client.User().update({ $action: 'attribution', ... })` |
| `industry` | `/api/users/industry` | `client.User().update({ $action: 'industry', ... })` |
| `mark_schedule_welcome_seen` | `/api/users/mark-schedule-welcome-seen` | `client.User().update({ $action: 'mark_schedule_welcome_seen', ... })` |

An action returns that action's OWN response, which is not necessarily a
User record — check the API definition for its shape.

```ts
const result = await client.User().update({
  $action: 'attribution',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.User().load({ id: 'user_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserAgentEntity

```ts
const user_agent = client.UserAgent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent` | `Record<string, any>` | Yes |  |
| `assigned_at` | `string` | Yes |  |
| `assignment_id` | `string` | Yes |  |
| `expires_at` | `any` | No |  |
| `id` | `string` | No |  |
| `status` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.UserAgent().create({
  id: 'example_id',
  agent: {},
  assigned_at: 'example_assigned_at',
  assignment_id: 'example_assignment_id',
  status: 'example_status',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.UserAgent().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserAgentEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserHealthDetailEntity

```ts
const user_health_detail = client.UserHealthDetail()
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
| `assigned_agents` | `any[]` | Yes |  |
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
| `yesterday_failed_entries` | `any[]` | Yes |  |
| `yesterday_posted` | `number` | Yes |  |
| `yesterday_total` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.UserHealthDetail().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserHealthDetailEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserWithAvatarSubmissionEntity

```ts
const user_with_avatar_submission = client.UserWithAvatarSubmission()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.UserWithAvatarSubmission().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserWithAvatarSubmissionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UsersHealthEntity

```ts
const users_health = client.UsersHealth()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.UsersHealth().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UsersHealthEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VideoEntity

```ts
const video = client.Video()
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `retry_video` | `/videos/{video_id}/retry-video` | `client.Video().create({ $action: 'retry_video', ... })` |
| `template` | `/videos/{video_id}/template` | `client.Video().update({ $action: 'template', ... })` |

An action returns that action's OWN response, which is not necessarily a
Video record — check the API definition for its shape.

```ts
const result = await client.Video().create({
  $action: 'retry_video',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Video().create({
  captions: 'example_captions',
  title: 'example_title',
  url: 'example_url',
  video_id: 'example_video_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Video().load({ id: 'video_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Video().remove({ id: 'video_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Video().update({
  id: 'video_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VideoEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VideoRemixerWorkerEntity

```ts
const video_remixer_worker = client.VideoRemixerWorker()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `captions_ass` | `string` | No |  |
| `captions_vtt` | `string` | No |  |
| `cost_usd` | `number` | No |  |
| `error` | `string` | Yes |  |
| `file` | `string` | Yes |  |
| `kinds` | `any[]` | No |  |
| `lease_token` | `string` | Yes |  |
| `limit` | `number` | No |  |
| `manifest` | `string` | Yes |  |
| `model` | `string` | Yes |  |
| `processing_seconds` | `number` | No |  |
| `prompt_version` | `string` | Yes |  |
| `result` | `Record<string, any>` | No |  |
| `thumbnail` | `string` | Yes |  |
| `tier` | `string` | No |  |
| `worker_id` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.VideoRemixerWorker().create({
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

Declares a `multipart/form-data` body, which this SDK does not encode yet: it sends the data as JSON.

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VideoRemixerWorkerEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WatchdogRecoveryEntity

```ts
const watchdog_recovery = client.WatchdogRecovery()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `item_id` | `string` | Yes |  |
| `passed` | `boolean` | Yes |  |
| `table` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.WatchdogRecovery().create({
  item_id: 'example_item_id',
  passed: true,
  table: 'example_table',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.WatchdogRecovery().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WatchdogRecoveryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WinningAdEntity

```ts
const winning_ad = client.WinningAd()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.WinningAd().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WinningAdEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## XAdaptationEntity

```ts
const x_adaptation = client.XAdaptation()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.XAdaptation().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `XAdaptationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZerohumanAdminAccountEntity

```ts
const zerohuman_admin_account = client.ZerohumanAdminAccount()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.ZerohumanAdminAccount().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZerohumanAdminAccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `CrackedApiReferenceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```ts
const client = new CrackedApiReferenceSDK({
  feature: {
    ratelimit: { active: true },
    retry: { active: true },
    test: { active: true },
    timeout: { active: true },
  }
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

