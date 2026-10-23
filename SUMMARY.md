# Vireel API

Backend API for Vireel application

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 171 entities and 453 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### Activate

Results: Successful Response.

SDK operations: `create`.

### ActivateUser

Results: Successful Response.

SDK operations: `create`.

### ActiveOnboarding

Results: Successful Response.

SDK operations: `load`.

### Admin

Results: Successful Response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `apply`: Apply safe canonical or clean-only URL updates
- `include_records`: Include full per-field audit records in the response
- `only_active`: Limit the audit to active agents

### AdminAccountReset

Results: Successful Response.

SDK operations: `create`.

### AdminCarousel

Results: Successful Response.

SDK operations: `create`, `load`, `update`.

### AdminCarouselDemoReview

Results: Successful Response.

SDK operations: `create`, `load`, `update`.

### AdminCustomer

Results: Successful Response.

SDK operations: `list`.

### AdminCustomerSuccess

Results: Successful Response.

SDK operations: `list`.

### AdminGeneratedVideo

Results: Successful Response.

SDK operations: `list`.

### AdminHealthrx

Results: Successful Response.

SDK operations: `create`, `load`, `update`.

### AdminInsight

Results: Successful Response.

SDK operations: `list`, `load`.

### AdminLandingTask

Results: Successful Response.

SDK operations: `create`.

### AdminMetricsSummary

Results: Successful Response.

SDK operations: `list`.

### AdminPost

Results: Successful Response.

SDK operations: `list`.

### AdminRecentSignup

Results: Successful Response.

SDK operations: `list`.

### AdminSlideshowDiag

Results: Successful Response.

SDK operations: `create`.

### AdminSlideshowImport

Results: Successful Response.

SDK operations: `create`, `load`.

### AdminUserView

Results: Successful Response.

SDK operations: `create`, `list`, `remove`, `update`.

### AdminUsersTableItem

Results: Successful Response.

SDK operations: `list`.

### AdminVideoRemixer

Results: Successful Response.

SDK operations: `create`, `load`, `patch`, `remove`, `update`.

### AdvanceStep

Results: Successful Response.

SDK operations: `create`.

Key fields to recognise:

- `onboarding_data_id`: UUID of the OnboardingData record
- `to_step`: Target step name

### Agent

Results: Successful Response.

SDK operations: `list`.

### AgentAccessCustomersHealth

Results: Successful Response.

SDK operations: `list`.

### AgentAccessOverview

Results: Successful Response.

SDK operations: `load`.

### AgentAccessPhilHourlyNotification

Results: Successful Response.

SDK operations: `load`.

### AgentAccessPhilStatsRefresh

Results: Successful Response.

SDK operations: `load`.

### AgentAccessPhilVideo

Results: Successful Response.

SDK operations: `load`.

### AgentAccessUserAgent

Results: Successful Response.

SDK operations: `list`.

### AgentAccessUserPhoneFarm

Results: Successful Response.

SDK operations: `list`.

### AgentAccessUserPost

Results: Successful Response.

SDK operations: `list`.

### AgentAccessUserSummary

Results: Successful Response.

SDK operations: `list`.

### AgentAccessUserVideo

Results: Successful Response.

SDK operations: `load`.

### AgentAccessUserWinningAd

Results: Successful Response.

SDK operations: `list`.

### AgentAccessWinningAdsSummary

Results: Successful Response.

SDK operations: `list`.

### AgentDetail

Results: Successful Response.

SDK operations: `list`, `update`.

### AgentHealth

Results: Successful Response.

SDK operations: `list`.

### AgentHealthCustomerOption

Results: Successful Response.

SDK operations: `list`.

### AgentHealthDetail

Results: Successful Response.

SDK operations: `list`.

### AgentPost

Results: Successful Response.

SDK operations: `list`.

### AgentStat

Results: Successful Response.

SDK operations: `load`.

### AgentSummary

Results: Successful Response.

SDK operations: `list`.

### AgentsSummary

Results: Successful Response.

SDK operations: `load`.

### AnalysisStatus

Results: Successful Response.

SDK operations: `load`.

### AnalyticsPost

Results: Successful Response.

SDK operations: `list`.

### AnalyzeProduct

Results: Successful Response.

SDK operations: `create`.

### AssignAgent

Results: Successful Response.

SDK operations: `create`.

Key fields to recognise:

- `agent`: Agent information for V6.
- `assignment`: Assignment information for V6.
- `onboarding_data_id`: UUID of the OnboardingData record

### Auth

Results: Successful Response.

SDK operations: `create`.

### AutoScheduleSetting

Results: Successful Response.

SDK operations: `load`, `update`.

Key fields to recognise:

- `enabled_video_types`: List of enabled video type filters

### BulkTikTokStatsUpdate

Results: Successful Response.

SDK operations: `update`.

### Carousel

Results: Successful Response.

SDK operations: `create`, `list`, `load`.

### CarouselAgentDetail

Results: Successful Response.

SDK operations: `load`.

### CarouselStatus

Results: Successful Response.

SDK operations: `list`.

### Chat

Results: Successful Response.

SDK operations: `create`.

### ChatHistory

Results: Successful Response.

SDK operations: `create`, `load`.

### ChatSession

Results: Successful Response.

SDK operations: `create`.

### Comment

Results: Successful Response.

SDK operations: `load`.

### CommentCampaign

Results: Successful Response.

SDK operations: `create`, `load`, `update`.

### CompleteChatCheckout

Results: Successful Response.

SDK operations: `create`.

### CreateBlackoutSora2Video

Results: Successful Response.

SDK operations: `create`.

### CreateCarousel

Results: Successful Response.

SDK operations: `create`.

Key fields to recognise:

- `product_id`: Product ID to use.

### CreateProduct

Results: Successful Response.

SDK operations: `create`.

Key fields to recognise:

- `onboarding_data_id`: UUID of the OnboardingData record

### CreateResetProductV6

Results: Successful Response.

SDK operations: `create`.

### CreateSora2Video

Results: Successful Response.

SDK operations: `create`.

### CreateVariation

Results: Successful Response.

SDK operations: `create`.

### Customer

Results: Successful Response.

SDK operations: `list`.

### CustomerHealth

Results: Successful Response.

SDK operations: `load`.

### CustomerHealthAllCustomersItem

Results: Successful Response.

SDK operations: `list`.

### CustomerHealthViewsSummary

Results: Successful Response.

SDK operations: `list`.

### Daily

Results: Successful Response.

SDK operations: `create`.

### DailyStatus

Results: Successful Response.

SDK operations: `load`.

### DedicatedAgentsDashboard

Results: Successful Response.

SDK operations: `list`.

### EnterpriseAgent

Results: Successful Response.

SDK operations: `create`, `load`.

### EnterpriseProduct

Results: Successful Response.

SDK operations: `load`.

### ExactAvailability

Results: Successful Response.

SDK operations: `load`.

### ExactFormula

Results: Successful Response.

SDK operations: `load`.

### ExtractV2

Results: Successful Response.

SDK operations: `create`.

### FailedPost

Results: Successful Response.

SDK operations: `list`.

### File

Results: Successful Response.

SDK operations: `create`.

### GenerateBlackoutSora2Prompt

Results: Successful Response.

SDK operations: `create`.

### GeneratePomelliDemo

Results: Successful Response.

SDK operations: `create`.

Key fields to recognise:

- `product_id`: UUID of the Product

### GeneratePrompt

Results: Successful Response.

SDK operations: `create`.

### GenerateSora2Prompt

Results: Successful Response.

SDK operations: `load`.

### Healthrx

Results: Successful Response.

SDK operations: `create`, `load`.

### InitResetProductV6

Results: Successful Response.

SDK operations: `create`.

### Iri

Results: Successful Response.

SDK operations: `create`.

### IrisCapability

Results: Successful Response.

SDK operations: `create`.

### IrisChat

Results: Successful Response.

SDK operations: `create`.

### IrisConnector

Results: Successful Response.

SDK operations: `list`.

### IrisStatus

Results: Successful Response.

SDK operations: `list`.

### IrisTask

Results: Successful Response.

SDK operations: `create`, `list`.

### IrisUsage

Results: Successful Response.

SDK operations: `list`.

### Landing

Results: Successful Response.

SDK operations: `create`.

### LandingStat

Results: Successful Response.

SDK operations: `load`.

### LandingStatus

Results: Successful Response.

SDK operations: `load`.

### LinkInBio

Results: Successful Response.

SDK operations: `load`.

### LinkInDm

Results: Successful Response.

SDK operations: `load`.

### LinkInPost

Results: Successful Response.

SDK operations: `load`.

### LinkUser

Results: Successful Response.

SDK operations: `create`.

Key fields to recognise:

- `onboarding_data_id`: UUID of the OnboardingData record

### MediaAsset

Results: Successful Response.

SDK operations: `create`, `load`.

### Men

Results: Successful Response.

SDK operations: `list`.

### Microdrama

Results: Successful Response.

SDK operations: `create`, `load`, `update`.

### MicrohubPublic

Results: Successful Response.

SDK operations: `load`.

### OnboardingStatus

Results: Successful Response.

SDK operations: `list`.

### OnboardingV6

Results: Successful Response.

SDK operations: `remove`.

### PaidUser

Results: Successful Response.

SDK operations: `list`.

### Pexel

Results: Successful Response.

SDK operations: `list`.

### PhoneAdminAvailableAgentSource

Results: Successful Response.

SDK operations: `list`.

### Product

Results: Successful Response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `product_details`: Product details for enterprise product creation

### ProductDashboard

Results: Successful Response.

SDK operations: `list`.

### ProductDashboardView

Results: Successful Response.

SDK operations: `list`.

### ProductDemo

Results: Successful Response.

SDK operations: `list`.

### ProductLanding

Results: Successful Response.

SDK operations: `list`, `update`.

### PublicResumeStatus

Results: Successful Response.

SDK operations: `load`.

### ReRollVideo

Results: Successful Response.

SDK operations: `create`.

### ReadRootGet

Results: Successful Response.

SDK operations: `load`.

### RecordDemoBooked

Results: Successful Response.

SDK operations: `create`.

### RefreshStat

Results: Successful Response.

SDK operations: `create`.

Key fields to recognise:

- `date_from`: Start date to refresh stats for (defaults to yesterday)
- `date_to`: End date to refresh stats for (defaults to `date_from`)
- `provider`: Scraping provider to use

### RemixerClipper

Results: Successful Response.

SDK operations: `create`, `load`.

### ResetProduct

Results: Successful Response.

SDK operations: `create`, `load`.

### RetryWebsiteScrape

Results: Successful Response.

SDK operations: `create`.

Key fields to recognise:

- `onboarding_data_id`: UUID of existing OnboardingData
- `url`: New website URL to scrape

### SaveSurvey

Results: Successful Response.

SDK operations: `create`.

Key fields to recognise:

- `onboarding_data_id`: UUID of the OnboardingData record
- `survey`: Survey response data from frontend.

### ScanSocial

Results: Successful Response.

SDK operations: `create`.

### ScanSocialsPublic

Results: Successful Response.

SDK operations: `create`.

Key fields to recognise:

- `instagram_handle`: Instagram username/handle to scrape
- `onboarding_data_id`: UUID of the OnboardingData record
- `tiktok_handle`: TikTok username/handle to scrape

### ScanSocialsStatus

Results: Successful Response.

SDK operations: `load`.

### ScheduleV2

Results: Successful Response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

### Scrape

Results: Successful Response.

SDK operations: `create`.

### ScrapeWebsitePublic

Results: Successful Response.

SDK operations: `create`.

Key fields to recognise:

- `onboarding_data_id`: UUID of created OnboardingData
- `skip_demo`: True for self-serve users (skip demo booking)
- `url`: Website URL to scrape

### ScrapedData

Results: Successful Response.

SDK operations: `create`.

### ScrapingStatus

Results: Successful Response.

SDK operations: `load`.

### SelfServeActivate

Results: Successful Response.

SDK operations: `create`.

Key fields to recognise:

- `onboarding_data_id`: UUID of the OnboardingData record

### Seo

Results: Successful Response.

SDK operations: `load`.

### SeoAiMention

Results: Successful Response.

SDK operations: `list`.

### SeoBacklink

Results: Successful Response.

SDK operations: `list`.

### SeoKeyword

Results: Successful Response.

SDK operations: `list`.

### SeoOverview

Results: Successful Response.

SDK operations: `list`.

### SeoTraffic

Results: Successful Response.

SDK operations: `list`.

### ShareAccessLink

Results: Successful Response.

SDK operations: `create`.

### Site

Results: Successful Response.

SDK operations: `load`.

### Slide

Results: Successful Response.

SDK operations: `create`, `update`.

### SlugValidation

Results: Successful Response.

SDK operations: `load`.

### Social

Results: Successful Response.

SDK operations: `create`, `list`, `load`, `remove`.

### SocialScanPreview

Results: Successful Response.

SDK operations: `create`.

Key fields to recognise:

- `instagram_handle`: Instagram username/handle to scrape
- `tiktok_handle`: TikTok username/handle to scrape

### SocialScanProcess

Results: Successful Response.

SDK operations: `create`.

### SocialScanSave

Results: Successful Response.

SDK operations: `create`.

### Sora2Avatar

Results: Successful Response.

SDK operations: `create`, `list`, `load`, `update`.

### Sora2AvatarAssetUpload

Results: Successful Response.

SDK operations: `create`.

### Sora2AvatarStat

Results: Successful Response.

SDK operations: `load`.

### Stat

Results: Successful Response.

SDK operations: `list`.

### StatsRefreshBackfill

Results: Successful Response.

SDK operations: `create`.

### StatsRefreshIssue

Results: Successful Response.

SDK operations: `list`.

### StatsRefreshOverview

Results: Successful Response.

SDK operations: `list`.

### StatsRefreshRunSummary

Results: Successful Response.

SDK operations: `list`.

### StatsRefreshTaskTrigger

Results: Successful Response.

SDK operations: `create`.

### Stripe

Results: Successful Response.

SDK operations: `create`.

### Style

Results: Successful Response.

SDK operations: `load`.

### Template

Results: Successful Response.

SDK operations: `load`.

### TikTokCreatorInfo

Results: Successful Response.

SDK operations: `list`.

### TopPost

Results: Successful Response.

SDK operations: `list`.

### UploadPostAgent

Results: Successful Response.

SDK operations: `create`.

### User

Results: Successful Response.

SDK operations: `load`, `update`.

### UserAgent

Results: Successful Response.

SDK operations: `create`, `list`.

### UserHealthDetail

Results: Successful Response.

SDK operations: `list`.

### UserWithAvatarSubmission

Results: Successful Response.

SDK operations: `list`.

### UsersHealth

Results: Successful Response.

SDK operations: `list`.

### Video

Results: Successful Response.

SDK operations: `create`, `load`, `remove`, `update`.

### VideoRemixerWorker

Results: Successful Response.

SDK operations: `create`.

### WatchdogRecovery

Results: Successful Response.

SDK operations: `create`, `load`.

### WinningAd

Results: Successful Response.

SDK operations: `list`.

### XAdaptation

Results: Successful Response.

SDK operations: `load`.

### ZerohumanAdminAccount

Results: Successful Response.

SDK operations: `list`.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| Activate | `create` | `POST /api/admin/users/{user_id}/activate` | Required |
| ActivateUser | `create` | `POST /api/admin/users/{user_id}/activate-and-complete-onboarding` | Required |
| ActiveOnboarding | `load` | `GET /api/onboarding-v6/active-session` | Required |
| Admin | `create` | `POST /api/admin/users/{user_id}/regenerate-video/{video_id}` | Required |
| Admin | `create` | `POST /api/admin/impersonate/{user_id}` | Required |
| Admin | `create` | `POST /api/admin/users/{user_id}/agents/reconcile` | Required |
| Admin | `create` | `POST /api/admin/users/{user_id}/bulk-create-videos` | Required |
| Admin | `create` | `POST /api/admin/users/{user_id}/clear-failed-videos` | Required |
| Admin | `create` | `POST /api/admin/users/{user_id}/clear-future-auto-entries` | Required |
| Admin | `create` | `POST /api/admin/users/{user_id}/clear-manual-entries` | Required |
| Admin | `create` | `POST /api/admin/users/{user_id}/clear-today-auto-entries` | Required |
| Admin | `create` | `POST /api/admin/users/{user_id}/retry-todays-videos` | Required |
| Admin | `create` | `POST /api/admin/users/{user_id}/retry-videos` | Required |
| Admin | `create` | `POST /api/admin/agents/social-profile-audit` | Required |
| Admin | `create` | `POST /api/admin/batch-regenerate-sora2` | Required |
| Admin | `create` | `POST /api/admin/customer-health/issues/retry` | Required |
| Admin | `create` | `POST /api/admin/products-dashboard/repair-stats` | Required |
| Admin | `create` | `POST /api/admin/schedule/clear-all-future-auto-entries` | Required |
| Admin | `create` | `POST /api/admin/schedule/clear-today-auto-entries-for-all` | Required |
| Admin | `create` | `POST /api/admin/stats/refresh-and-send-emails` | Required |
| Admin | `create` | `POST /api/admin/stats/refresh-last-7-days` | Required |
| Admin | `create` | `POST /api/admin/test-s3-copy` | See reference |
| Admin | `create` | `POST /api/admin/whitelist-testers` | Required |
| Admin | `list` | `GET /api/admin/whitelist-testers` | Required |
| Admin | `load` | `GET /api/admin/stats/by-date-and-type` | Required |
| Admin | `load` | `GET /api/admin/users/{user_id}/failed-videos` | Required |
| Admin | `load` | `GET /api/admin/users/{user_id}/pending-videos` | Required |
| Admin | `load` | `GET /api/admin/users/{user_id}/schedule-queue` | Required |
| Admin | `load` | `GET /api/admin/stats/aggregate` | Required |
| Admin | `load` | `GET /api/admin/users/export` | Required |
| Admin | `remove` | `DELETE /api/admin/users/{user_id}/agents/{agent_id}` | Required |
| Admin | `remove` | `DELETE /api/admin/users/{user_id}/schedule-queue/{queue_id}` | Required |
| Admin | `remove` | `DELETE /api/admin/users/{user_id}/video/{video_id}` | Required |
| Admin | `remove` | `DELETE /api/admin/whitelist-testers/{tester_id}` | Required |
| Admin | `update` | `PUT /api/admin/agents/{agent_id}/type` | Required |
| Admin | `update` | `PUT /api/admin/agents/{agent_id}/active` | Required |
| AdminAccountReset | `create` | `POST /api/admin/agent-account-reset` | Required |
| AdminCarousel | `create` | `POST /api/admin/carousels/slideshow-import/{batch_id}/state` | Required |
| AdminCarousel | `create` | `POST /api/admin/carousels/slideshow-import/diag/{stage}` | Required |
| AdminCarousel | `create` | `POST /api/admin/carousels/slideshow-import/decks` | Required |
| AdminCarousel | `create` | `POST /api/admin/carousels/slideshow-import/decks-json` | Required |
| AdminCarousel | `load` | `GET /api/admin/carousels/slideshow-import/{batch_id}` | Required |
| AdminCarousel | `load` | `GET /api/admin/carousels/production-prompts/{fmt}` | Required |
| AdminCarousel | `load` | `GET /api/admin/carousels/demo-formulas/{formula_id}` | Required |
| AdminCarousel | `load` | `GET /api/admin/carousels/demo-formulas` | Required |
| AdminCarousel | `load` | `GET /api/admin/carousels/freeform-production-prompt` | Required |
| AdminCarousel | `update` | `PUT /api/admin/carousels/production-prompts/{fmt}` | Required |
| AdminCarousel | `update` | `PUT /api/admin/carousels/demo-formulas/{formula_id}` | Required |
| AdminCarousel | `update` | `PUT /api/admin/carousels/freeform-production-prompt` | Required |
| AdminCarouselDemoReview | `create` | `POST /api/admin/carousels/demo-reviews/{formula_id}/decision` | Required |
| AdminCarouselDemoReview | `create` | `POST /api/admin/carousels/demo-reviews/bulk-approve` | Required |
| AdminCarouselDemoReview | `load` | `GET /api/admin/carousels/demo-reviews/{formula_id}` | Required |
| AdminCarouselDemoReview | `load` | `GET /api/admin/carousels/demo-reviews/items` | Required |
| AdminCarouselDemoReview | `update` | `PUT /api/admin/carousels/demo-reviews/{formula_id}/assignee` | Required |
| AdminCustomer | `list` | `GET /api/admin/insights/customers` | Required |
| AdminCustomerSuccess | `list` | `GET /api/admin/insights/customer-success` | Required |
| AdminGeneratedVideo | `list` | `GET /api/admin/users/{user_id}/generated-videos` | Required |
| AdminHealthrx | `create` | `POST /api/admin/healthrx/items/{kind}/{item_id}/decision` | Required |
| AdminHealthrx | `create` | `POST /api/admin/healthrx/items/comments/{item_id}/selection` | Required |
| AdminHealthrx | `create` | `POST /api/admin/healthrx/videos/{source_id}/viewed` | Required |
| AdminHealthrx | `create` | `POST /api/admin/healthrx/automation/runs` | Required |
| AdminHealthrx | `load` | `GET /api/admin/healthrx/items/{kind}/{item_id}` | Required |
| AdminHealthrx | `load` | `GET /api/admin/healthrx/automation` | Required |
| AdminHealthrx | `load` | `GET /api/admin/healthrx/automation/config` | Required |
| AdminHealthrx | `load` | `GET /api/admin/healthrx/videos` | Required |
| AdminHealthrx | `load` | `GET /api/admin/healthrx/customers` | Required |
| AdminHealthrx | `load` | `GET /api/admin/healthrx/inbox` | Required |
| AdminHealthrx | `load` | `GET /api/admin/healthrx/products` | Required |
| AdminHealthrx | `load` | `GET /api/admin/healthrx/summary` | Required |
| AdminHealthrx | `update` | `PUT /api/admin/healthrx/automation/config` | Required |
| AdminInsight | `list` | `GET /api/admin/insights` | Required |
| AdminInsight | `load` | `GET /api/admin/insights/customer-agent-readiness` | Required |
| AdminLandingTask | `create` | `POST /api/admin/users/{user_id}/regenerate-landing` | Required |
| AdminLandingTask | `create` | `POST /api/admin/users/{user_id}/regenerate-microhub` | Required |
| AdminMetricsSummary | `list` | `GET /api/admin/metrics/summary` | Required |
| AdminPost | `list` | `GET /api/admin/posts` | Required |
| AdminRecentSignup | `list` | `GET /api/admin/insights/recent-signups` | Required |
| AdminSlideshowDiag | `create` | `POST /api/admin/slideshow-diag/{stage}` | Required |
| AdminSlideshowImport | `create` | `POST /api/admin/slideshow-import2/{batch_id}/state` | Required |
| AdminSlideshowImport | `create` | `POST /api/admin/slideshow-import2/decks-json` | Required |
| AdminSlideshowImport | `load` | `GET /api/admin/slideshow-import2/{batch_id}` | Required |
| AdminUserView | `create` | `POST /api/admin/users/{user_id}/fix-auto-schedule-by-date` | Required |
| AdminUserView | `create` | `POST /api/admin/users/{user_id}/repair-approved-source-queue-today` | Required |
| AdminUserView | `create` | `POST /api/admin/users/{user_id}/convert-to-enterprise` | Required |
| AdminUserView | `create` | `POST /api/admin/users/{user_id}/fix-all` | Required |
| AdminUserView | `create` | `POST /api/admin/users/{user_id}/fix-auto-schedule` | Required |
| AdminUserView | `create` | `POST /api/admin/users/{user_id}/fix-auto-schedule-today` | Required |
| AdminUserView | `create` | `POST /api/admin/users/{user_id}/fix-auto-schedule-today-force` | Required |
| AdminUserView | `create` | `POST /api/admin/users/{user_id}/fix-auto-schedule-tomorrow` | Required |
| AdminUserView | `create` | `POST /api/admin/users/{user_id}/fix-comments-today` | Required |
| AdminUserView | `create` | `POST /api/admin/users/{user_id}/generate-pomelli-video` | Required |
| AdminUserView | `create` | `POST /api/admin/users/{user_id}/repost-tiktok-videos-tomorrow` | Required |
| AdminUserView | `create` | `POST /api/admin/users/{user_id}/reset-onboarding` | Required |
| AdminUserView | `create` | `POST /api/admin/users/{user_id}/transfer-ownership` | Required |
| AdminUserView | `list` | `GET /api/admin/users/search` | Required |
| AdminUserView | `list` | `GET /api/admin/users` | Required |
| AdminUserView | `remove` | `DELETE /api/admin/users/{user_id}` | Required |
| AdminUserView | `update` | `PUT /api/admin/users/{user_id}/auto-schedule` | Required |
| AdminUserView | `update` | `PUT /api/admin/users/{user_id}/posted-video-reuse` | Required |
| AdminUserView | `update` | `PUT /api/admin/users/{user_id}` | Required |
| AdminUsersTableItem | `list` | `GET /api/admin/users/table` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/clips/{clip_id}/media` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/analysis/{identifier}/cancel` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/analysis/{identifier}/retry` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/clipper-access/{identifier}/revoke` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/clippers/{identifier}/access` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/posts/{identifier}/metrics` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/proofs/{identifier}/staff-time` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/reviews/{identifier}/human-check` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/recipes/{identifier}/preflight` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/recipes/{identifier}/render` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/reviews/{identifier}/checks` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/reviews/{identifier}/decision` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/reviews/{identifier}/export` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/reviews/{identifier}/handoff` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/runs/{identifier}/render` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/reviews/{identifier}/repair` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/runs/{identifier}/restore` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/worker-keys/{identifier}/revoke` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/jobs/{job_id}/cancel` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/jobs/{job_id}/media` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/jobs/{job_id}/retry` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/projects/{project_id}/renders` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/sources/{source_id}/reconcile-upload` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/analysis` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/audits` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/clippers/import` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/clippers/import-csv` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/formulas/proposals` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/imports/manifest` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/imports/upload` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/planner-preview` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/projects` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/proofs` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/reports/refresh` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/runs` | Required |
| AdminVideoRemixer | `create` | `POST /api/admin/video-remixer/worker-keys` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/clips/{clip_id}` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/recipes/{identifier}` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/recipes/{identifier}/preflight` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/reviews/{identifier}` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/runs/{identifier}` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/jobs/{job_id}/captions` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/jobs/{job_id}/manifest` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/media/{token}` | See reference |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/analysis` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/audits` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/batch-schedules` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/clipper-access` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/clipper-rubric` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/clippers` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/clips` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/cost` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/formulas` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/imports` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/jobs` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/label-history` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/library` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/overview` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/posts` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/posts/export` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/products` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/projects` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/proofs` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/reports` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/reports/aggregates` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/reviews` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/runs` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/sources` | Required |
| AdminVideoRemixer | `load` | `GET /api/admin/video-remixer/worker-keys` | Required |
| AdminVideoRemixer | `patch` | `PATCH /api/admin/video-remixer/clips/{clip_id}/labels` | Required |
| AdminVideoRemixer | `patch` | `PATCH /api/admin/video-remixer/cost` | Required |
| AdminVideoRemixer | `remove` | `DELETE /api/admin/video-remixer/runs/{identifier}` | Required |
| AdminVideoRemixer | `update` | `PUT /api/admin/video-remixer/audits/{identifier}/answer` | Required |
| AdminVideoRemixer | `update` | `PUT /api/admin/video-remixer/batch-schedules/{identifier}` | Required |
| AdminVideoRemixer | `update` | `PUT /api/admin/video-remixer/clippers/{identifier}` | Required |
| AdminVideoRemixer | `update` | `PUT /api/admin/video-remixer/formulas/{identifier}` | Required |
| AdminVideoRemixer | `update` | `PUT /api/admin/video-remixer/posts/{identifier}/link` | Required |
| AdminVideoRemixer | `update` | `PUT /api/admin/video-remixer/projects/{project_id}` | Required |
| AdminVideoRemixer | `update` | `PUT /api/admin/video-remixer/sources/{source_id}/policy` | Required |
| AdminVideoRemixer | `update` | `PUT /api/admin/video-remixer/clipper-rubric` | Required |
| AdminVideoRemixer | `update` | `PUT /api/admin/video-remixer/source-policies/batch` | Required |
| AdvanceStep | `create` | `POST /api/onboarding-v6/advance-step` | Required |
| Agent | `list` | `GET /api/admin/agents` | Required |
| AgentAccessCustomersHealth | `list` | `GET /api/admin/customers-health` | Required |
| AgentAccessCustomersHealth | `list` | `GET /api/agent-access/customers-health` | See reference |
| AgentAccessOverview | `load` | `GET /api/agent-access/overview` | See reference |
| AgentAccessPhilHourlyNotification | `load` | `GET /api/agent-access/phil-notifications/hourly` | See reference |
| AgentAccessPhilStatsRefresh | `load` | `GET /api/agent-access/phil-notifications/stats-refresh` | See reference |
| AgentAccessPhilVideo | `load` | `GET /api/agent-access/phil-notifications/videos` | See reference |
| AgentAccessUserAgent | `list` | `GET /api/agent-access/user-agents` | See reference |
| AgentAccessUserPhoneFarm | `list` | `GET /api/agent-access/user-phone-farm` | See reference |
| AgentAccessUserPost | `list` | `GET /api/agent-access/user-posts` | See reference |
| AgentAccessUserSummary | `list` | `GET /api/agent-access/user-summary` | See reference |
| AgentAccessUserVideo | `load` | `GET /api/agent-access/user-videos` | See reference |
| AgentAccessUserWinningAd | `list` | `GET /api/agent-access/user-winning-ads` | See reference |
| AgentAccessWinningAdsSummary | `list` | `GET /api/agent-access/winning-ads-summary` | See reference |
| AgentDetail | `list` | `GET /api/upload-post-agents/all` | See reference |
| AgentDetail | `list` | `GET /api/upload-post-agents/free` | See reference |
| AgentDetail | `update` | `PATCH /api/upload-post-agents/{agent_id}/bio` | See reference |
| AgentDetail | `update` | `PATCH /api/upload-post-agents/{agent_id}/name` | See reference |
| AgentDetail | `update` | `PATCH /api/upload-post-agents/{agent_id}/role` | See reference |
| AgentHealth | `list` | `GET /api/admin/agent-health` | Required |
| AgentHealthCustomerOption | `list` | `GET /api/admin/agent-health/customers` | Required |
| AgentHealthDetail | `list` | `GET /api/admin/agent-health/details` | Required |
| AgentPost | `list` | `GET /api/admin/agents/{agent_id}/posts` | Required |
| AgentStat | `load` | `GET /api/admin/agents/stats` | Required |
| AgentSummary | `list` | `GET /api/enterprise/agents/summary` | Required |
| AgentsSummary | `load` | `GET /api/admin/agents-summary` | Required |
| AnalysisStatus | `load` | `GET /api/scraper/analysis-status` | Required |
| AnalyticsPost | `list` | `GET /api/analytics/posts` | See reference |
| AnalyzeProduct | `create` | `POST /api/scraper/analyze-product` | Required |
| AssignAgent | `create` | `POST /api/onboarding-v6/assign-agent` | Required |
| Auth | `create` | `POST /auth/magic-link` | See reference |
| Auth | `create` | `POST /auth/verify-google-token` | See reference |
| Auth | `create` | `POST /auth/verify-magic-link` | See reference |
| Auth | `create` | `POST /auth/verify-share-access` | See reference |
| AutoScheduleSetting | `load` | `GET /api/schedule/settings` | Required |
| AutoScheduleSetting | `update` | `PUT /api/schedule/settings` | Required |
| AutoScheduleSetting | `update` | `PUT /api/schedule/settings/video-types` | Required |
| BulkTikTokStatsUpdate | `update` | `PATCH /api/upload-post-agents/bulk/tiktok-stats` | See reference |
| Carousel | `create` | `POST /api/carousel/{video_id}/finalize` | Required |
| Carousel | `list` | `GET /api/admin/carousels` | Required |
| Carousel | `load` | `GET /api/admin/carousels/{queue_id}` | Required |
| CarouselAgentDetail | `load` | `GET /api/admin/carousels/agents/{agent_id}` | Required |
| CarouselStatus | `list` | `GET /api/carousel/{video_id}/status` | Required |
| Chat | `create` | `POST /api/chat/sessions/{session_id}/messages` | Required |
| ChatHistory | `create` | `POST /api/chat/sessions` | Required |
| ChatHistory | `load` | `GET /api/chat/sessions/{session_id}` | Required |
| ChatSession | `create` | `POST /api/chat/sessions/{session_id}/complete` | Required |
| Comment | `load` | `GET /api/comments/results` | Required |
| CommentCampaign | `create` | `POST /api/comments/products/{product_id}/campaign/sources/{source_id}/resolve` | Required |
| CommentCampaign | `create` | `POST /api/comments/products/{product_id}/campaign/pilot` | Required |
| CommentCampaign | `create` | `POST /api/comments/products/{product_id}/campaign/prepare` | Required |
| CommentCampaign | `create` | `POST /api/comments/products/{product_id}/campaign/preview` | Required |
| CommentCampaign | `load` | `GET /api/comments/products/{product_id}/campaign` | Required |
| CommentCampaign | `load` | `GET /api/comments/products/{product_id}/campaign/runtime` | Required |
| CommentCampaign | `update` | `PUT /api/comments/products/{product_id}/campaign` | Required |
| CompleteChatCheckout | `create` | `POST /api/onboarding-v6/complete-chat-checkout` | Required |
| CreateBlackoutSora2Video | `create` | `POST /api/core/create-blackout-sora2-video` | Required |
| CreateCarousel | `create` | `POST /api/carousel/create-from-exact` | Required |
| CreateCarousel | `create` | `POST /api/carousel/create-from-styles` | Required |
| CreateCarousel | `create` | `POST /api/carousel/create-from-template` | Required |
| CreateProduct | `create` | `POST /api/onboarding-v6/create-product` | Required |
| CreateResetProductV6 | `create` | `POST /api/reset-product/create-v6` | Required |
| CreateSora2Video | `create` | `POST /api/core/create-sora2-video` | Required |
| CreateVariation | `create` | `POST /api/video-variation/create-hook` | Required |
| CreateVariation | `create` | `POST /api/video-variation/create-invisible` | Required |
| Customer | `list` | `GET /api/admin/customer-health/customers` | Required |
| CustomerHealth | `load` | `GET /api/admin/customer-health/{user_id}` | Required |
| CustomerHealthAllCustomersItem | `list` | `GET /api/admin/customer-health/all-customers` | Required |
| CustomerHealthViewsSummary | `list` | `GET /api/admin/customer-health/views` | Required |
| Daily | `create` | `POST /api/carousel/daily/{product_id}/plan` | Required |
| DailyStatus | `load` | `GET /api/carousel/daily/{product_id}/status` | Required |
| DedicatedAgentsDashboard | `list` | `GET /api/admin/agents/dedicated-dashboard` | Required |
| EnterpriseAgent | `create` | `POST /api/enterprise/agents/assign` | Required |
| EnterpriseAgent | `create` | `POST /api/enterprise/agents/move` | Required |
| EnterpriseAgent | `create` | `POST /api/enterprise/agents/release` | Required |
| EnterpriseAgent | `load` | `GET /api/enterprise/agents/global-pool-status` | Required |
| EnterpriseProduct | `load` | `GET /api/enterprise/products/{product_id}/status` | Required |
| ExactAvailability | `load` | `GET /api/carousel/exact-availability` | See reference |
| ExactFormula | `load` | `GET /api/carousel/exact-formulas` | See reference |
| ExtractV2 | `create` | `POST /api/scraper/extract_v2` | Required |
| FailedPost | `list` | `GET /api/admin/failed-posts` | Required |
| File | `create` | `POST /api/file-upload` | Required |
| GenerateBlackoutSora2Prompt | `create` | `POST /api/core/generate-blackout-sora2-prompt` | Required |
| GeneratePomelliDemo | `create` | `POST /api/onboarding-v6/generate-pomelli-demo` | Required |
| GeneratePrompt | `create` | `POST /api/video-variation/generate-prompt` | Required |
| GenerateSora2Prompt | `load` | `GET /api/core/generate-sora2-prompt` | Required |
| Healthrx | `create` | `POST /api/healthrx/products/{product_id}/accounts/{account_id}/content` | Required |
| Healthrx | `create` | `POST /api/healthrx/products/{product_id}/accounts/{account_id}/launch` | Required |
| Healthrx | `create` | `POST /api/healthrx/products/{product_id}/accounts/{account_id}/pause` | Required |
| Healthrx | `create` | `POST /api/healthrx/products/{product_id}/content/{content_id}/resolve` | Required |
| Healthrx | `create` | `POST /api/healthrx/products/{product_id}/incidents/{incident_id}/resolve` | Required |
| Healthrx | `create` | `POST /api/healthrx/products/{product_id}/accounts` | Required |
| Healthrx | `create` | `POST /api/healthrx/products/{product_id}/attribution` | Required |
| Healthrx | `create` | `POST /api/healthrx/products/{product_id}/benchmarks` | Required |
| Healthrx | `create` | `POST /api/healthrx/products/{product_id}/cost-receipts` | Required |
| Healthrx | `create` | `POST /api/healthrx/products/{product_id}/incidents` | Required |
| Healthrx | `create` | `POST /api/healthrx/products/{product_id}/run` | Required |
| Healthrx | `load` | `GET /api/healthrx/products/{product_id}/accounts/{account_id}/contract` | Required |
| Healthrx | `load` | `GET /api/healthrx/products/{product_id}` | Required |
| Healthrx | `load` | `GET /api/healthrx/products/{product_id}/profile-schema` | Required |
| Healthrx | `load` | `GET /api/healthrx/products/{product_id}/reports` | Required |
| InitResetProductV6 | `create` | `POST /api/reset-product/init-v6` | Required |
| Iri | `create` | `POST /api/iris/connectors/{connector_id}/start` | Required |
| Iri | `create` | `POST /api/iris/tasks/{task_id}/run` | Required |
| IrisCapability | `create` | `POST /api/platform/capabilities/{capability_name}` | See reference |
| IrisChat | `create` | `POST /api/iris/chat` | Required |
| IrisConnector | `list` | `GET /api/iris/connectors` | Required |
| IrisStatus | `list` | `GET /api/iris/status` | Required |
| IrisTask | `create` | `POST /api/iris/tasks` | Required |
| IrisTask | `list` | `GET /api/iris/tasks` | Required |
| IrisUsage | `list` | `GET /api/iris/usage` | Required |
| Landing | `create` | `POST /api/landings/microhub/testimonial-image/{index}` | Required |
| Landing | `create` | `POST /api/landings/landing/reference-image` | Required |
| Landing | `create` | `POST /api/landings/landing/regenerate` | Required |
| Landing | `create` | `POST /api/landings/microhub/header-image` | Required |
| Landing | `create` | `POST /api/landings/microhub/profile-image` | Required |
| LandingStat | `load` | `GET /api/landings/{slug}/stats` | Required |
| LandingStatus | `load` | `GET /api/landings/status` | Required |
| LinkInBio | `load` | `GET /api/sites/{slug}/link-in-bio` | See reference |
| LinkInDm | `load` | `GET /api/sites/{slug}/link-in-dms` | See reference |
| LinkInPost | `load` | `GET /api/sites/{slug}/link-in-posts` | See reference |
| LinkUser | `create` | `POST /api/onboarding-v6/link-user` | Required |
| MediaAsset | `create` | `POST /api/media-assets/{media_asset_id}/exclude-copycat` | Required |
| MediaAsset | `create` | `POST /api/media-assets/upload` | Required |
| MediaAsset | `create` | `POST /api/onboarding-v6/repost-content/upload` | Required |
| MediaAsset | `load` | `GET /api/video-variation/media-assets/{product_id}` | Required |
| Men | `list` | `GET /api/videos/me` | Required |
| Microdrama | `create` | `POST /api/microdrama/episodes/{episode_id}/approve` | Required |
| Microdrama | `create` | `POST /api/microdrama/episodes/{episode_id}/exports` | Required |
| Microdrama | `create` | `POST /api/microdrama/episodes/{episode_id}/reviews` | Required |
| Microdrama | `create` | `POST /api/microdrama/episodes/{episode_id}/runs` | Required |
| Microdrama | `create` | `POST /api/microdrama/reference-assets/{reference_id}/review` | Required |
| Microdrama | `create` | `POST /api/microdrama/episodes` | Required |
| Microdrama | `create` | `POST /api/microdrama/reference-assets` | Required |
| Microdrama | `create` | `POST /api/microdrama/series` | Required |
| Microdrama | `load` | `GET /api/microdrama/episodes/{episode_id}` | Required |
| Microdrama | `load` | `GET /api/microdrama/runs/{run_id}` | Required |
| Microdrama | `load` | `GET /api/microdrama/config` | Required |
| Microdrama | `load` | `GET /api/microdrama/formulas` | Required |
| Microdrama | `load` | `GET /api/microdrama/reference-assets` | Required |
| Microdrama | `load` | `GET /api/microdrama/series` | Required |
| Microdrama | `update` | `PATCH /api/microdrama/episodes/{episode_id}` | Required |
| MicrohubPublic | `load` | `GET /api/sites/{slug}` | See reference |
| OnboardingStatus | `list` | `GET /api/onboarding-v6/status` | Required |
| OnboardingV6 | `remove` | `DELETE /api/onboarding-v6/repost-content/{media_asset_id}` | Required |
| PaidUser | `list` | `GET /api/admin/paid-users` | Required |
| Pexel | `list` | `GET /api/pexels/search` | Required |
| PhoneAdminAvailableAgentSource | `list` | `GET /api/admin/phone-admin/available-agent-sources` | Required |
| Product | `create` | `POST /api/products/{product_id}/validate-social-handle` | Required |
| Product | `create` | `POST /api/enterprise/products` | Required |
| Product | `create` | `POST /api/products/clear` | Required |
| Product | `list` | `GET /api/admin/users/{user_id}/products` | Required |
| Product | `list` | `GET /api/enterprise/products` | Required |
| Product | `load` | `GET /api/enterprise/agents/product/{product_id}` | Required |
| Product | `load` | `GET /api/enterprise/products/{product_id}` | Required |
| Product | `load` | `GET /api/products/me` | Required |
| Product | `remove` | `DELETE /api/enterprise/products/{product_id}` | Required |
| Product | `update` | `PUT /api/enterprise/products/{product_id}` | Required |
| Product | `update` | `PUT /api/enterprise/products/{product_id}/activate` | Required |
| Product | `update` | `PUT /api/products/me` | Required |
| ProductDashboard | `list` | `GET /api/admin/products-dashboard` | Required |
| ProductDashboardView | `list` | `GET /api/admin/products-dashboard/views` | Required |
| ProductDemo | `list` | `GET /api/video-variation/product-demos` | Required |
| ProductLanding | `list` | `GET /api/landings/me` | Required |
| ProductLanding | `update` | `PUT /api/landings/microhub` | Required |
| ProductLanding | `update` | `PUT /api/landings/settings` | Required |
| PublicResumeStatus | `load` | `GET /api/onboarding-v6/resume-status-public` | See reference |
| ReRollVideo | `create` | `POST /api/core/re-roll-video` | Required |
| ReadRootGet | `load` | `GET /` | See reference |
| RecordDemoBooked | `create` | `POST /api/chat/sessions/{session_id}/demo-booked` | Required |
| RefreshStat | `create` | `POST /api/analytics/refresh-stats` | See reference |
| RemixerClipper | `create` | `POST /api/remixer-clippers/jobs/{identifier}/download` | See reference |
| RemixerClipper | `load` | `GET /api/remixer-clippers/catalog` | See reference |
| ResetProduct | `create` | `POST /api/reset-product/generate-videos-v6` | Required |
| ResetProduct | `load` | `GET /api/reset-product/generate-videos/status` | Required |
| RetryWebsiteScrape | `create` | `POST /api/onboarding-v6/retry-scrape` | Required |
| SaveSurvey | `create` | `POST /api/onboarding-v6/save-survey` | Required |
| ScanSocial | `create` | `POST /api/reset-product/scan-socials` | Required |
| ScanSocial | `create` | `POST /api/video-variation/scan-socials` | Required |
| ScanSocialsPublic | `create` | `POST /api/onboarding-v6/scan-socials-public` | Required |
| ScanSocialsStatus | `load` | `GET /api/video-variation/scan-socials/status` | Required |
| ScheduleV2 | `create` | `POST /api/schedule/queue/add` | Required |
| ScheduleV2 | `create` | `POST /api/schedule/queue/reorder` | Required |
| ScheduleV2 | `create` | `POST /api/schedule/test-daily-email` | Required |
| ScheduleV2 | `list` | `GET /api/schedule/queue` | Required |
| ScheduleV2 | `load` | `GET /api/schedule/results` | Required |
| ScheduleV2 | `remove` | `DELETE /api/schedule/queue/{queue_id}` | Required |
| ScheduleV2 | `update` | `PUT /api/schedule/queue/{queue_id}/replace-video` | Required |
| Scrape | `create` | `POST /api/reset-product/scrape` | Required |
| ScrapeWebsitePublic | `create` | `POST /api/onboarding-v6/scrape-website-public` | See reference |
| ScrapedData | `create` | `POST /api/scraper/extract` | Required |
| ScrapingStatus | `load` | `GET /api/scraper/scraping_status` | Required |
| SelfServeActivate | `create` | `POST /api/onboarding-v6/self-serve-activate` | Required |
| Seo | `load` | `GET /api/seo/oauth/status` | Required |
| SeoAiMention | `list` | `GET /api/seo/ai-mentions` | Required |
| SeoBacklink | `list` | `GET /api/seo/backlinks` | Required |
| SeoKeyword | `list` | `GET /api/seo/keywords` | Required |
| SeoOverview | `list` | `GET /api/seo/overview` | Required |
| SeoTraffic | `list` | `GET /api/seo/traffic` | Required |
| ShareAccessLink | `create` | `POST /auth/share-access-link` | Required |
| Site | `load` | `GET /api/sites/slugs` | See reference |
| Slide | `create` | `POST /api/carousel/{video_id}/slides/{slide_index}/regenerate` | Required |
| Slide | `update` | `PATCH /api/carousel/{video_id}/slides/{slide_index}` | Required |
| SlugValidation | `load` | `GET /api/landings/validate-slug/{slug}` | Required |
| Social | `create` | `POST /social/instagram/exchange` | Required |
| Social | `create` | `POST /social/tiktok/exchange` | Required |
| Social | `list` | `GET /social/connections` | Required |
| Social | `list` | `GET /social/platforms` | See reference |
| Social | `load` | `GET /social/instagram/auth` | See reference |
| Social | `load` | `GET /social/instagram/callback` | See reference |
| Social | `load` | `GET /social/tiktok/auth` | See reference |
| Social | `load` | `GET /social/tiktok/callback` | See reference |
| Social | `remove` | `DELETE /social/connections/{platform}` | Required |
| SocialScanPreview | `create` | `POST /api/social-scan/preview` | Required |
| SocialScanProcess | `create` | `POST /api/social-scan/process` | Required |
| SocialScanSave | `create` | `POST /api/social-scan/save` | Required |
| Sora2Avatar | `create` | `POST /api/admin/sora2-avatars` | Required |
| Sora2Avatar | `list` | `GET /api/admin/sora2-avatars` | Required |
| Sora2Avatar | `load` | `GET /api/admin/sora2-avatars/{avatar_id}` | Required |
| Sora2Avatar | `update` | `PUT /api/admin/sora2-avatars/{avatar_id}` | Required |
| Sora2AvatarAssetUpload | `create` | `POST /api/admin/sora2-avatars/upload-asset` | Required |
| Sora2AvatarStat | `load` | `GET /api/admin/sora2-avatars/stats` | Required |
| Stat | `list` | `GET /api/admin/stats/posts` | Required |
| StatsRefreshBackfill | `create` | `POST /api/admin/customer-health/backfill` | Required |
| StatsRefreshIssue | `list` | `GET /api/admin/customer-health/issues` | Required |
| StatsRefreshOverview | `list` | `GET /api/admin/customer-health/overview` | Required |
| StatsRefreshRunSummary | `list` | `GET /api/admin/customer-health/runs` | Required |
| StatsRefreshTaskTrigger | `create` | `POST /api/admin/customer-health/manual-refresh` | Required |
| Stripe | `create` | `POST /api/stripe/associate-guest-checkout` | Required |
| Stripe | `create` | `POST /api/stripe/cancel-trial` | Required |
| Stripe | `create` | `POST /api/stripe/create-checkout-session` | Required |
| Stripe | `create` | `POST /api/stripe/create-credits-checkout-session` | Required |
| Stripe | `create` | `POST /api/stripe/create-guest-checkout-session` | See reference |
| Stripe | `create` | `POST /api/stripe/create-portal-session` | Required |
| Stripe | `create` | `POST /api/stripe/end-trial-early` | Required |
| Stripe | `create` | `POST /api/stripe/update-subscription-quantity` | Required |
| Style | `load` | `GET /api/carousel/styles` | See reference |
| Template | `load` | `GET /api/carousel/templates` | See reference |
| TikTokCreatorInfo | `list` | `GET /social/tiktok/creator-info` | Required |
| TopPost | `list` | `GET /api/admin/stats/top-posts` | Required |
| UploadPostAgent | `create` | `POST /api/upload-post-agents/sync-platforms` | See reference |
| User | `load` | `GET /api/upload-post-agents/user/{user_id}` | See reference |
| User | `load` | `GET /auth/me` | Required |
| User | `update` | `PATCH /api/users/attribution` | Required |
| User | `update` | `PATCH /api/users/industry` | Required |
| User | `update` | `PATCH /api/users/mark-schedule-welcome-seen` | Required |
| UserAgent | `create` | `POST /api/admin/users/{user_id}/agents` | Required |
| UserAgent | `list` | `GET /api/admin/users/{user_id}/agents` | Required |
| UserHealthDetail | `list` | `GET /api/admin/users/{user_id}/health-detail` | Required |
| UserWithAvatarSubmission | `list` | `GET /api/admin/users/avatar-submissions` | Required |
| UsersHealth | `list` | `GET /api/admin/users-health` | Required |
| Video | `create` | `POST /videos/{video_id}/retry-video` | Required |
| Video | `create` | `POST /api/core/update-video-captions` | Required |
| Video | `create` | `POST /videos/` | Required |
| Video | `load` | `GET /videos/{video_id}` | Required |
| Video | `remove` | `DELETE /videos/{video_id}` | Required |
| Video | `update` | `PATCH /videos/{video_id}` | Required |
| Video | `update` | `PATCH /videos/{video_id}/template` | Required |
| VideoRemixerWorker | `create` | `POST /api/admin/video-remixer/worker/jobs/{identifier}/fail` | See reference |
| VideoRemixerWorker | `create` | `POST /api/admin/video-remixer/worker/jobs/{identifier}/heartbeat` | See reference |
| VideoRemixerWorker | `create` | `POST /api/admin/video-remixer/worker/jobs/{identifier}/media` | See reference |
| VideoRemixerWorker | `create` | `POST /api/admin/video-remixer/worker/jobs/{identifier}/render-output` | See reference |
| VideoRemixerWorker | `create` | `POST /api/admin/video-remixer/worker/jobs/{identifier}/result` | See reference |
| VideoRemixerWorker | `create` | `POST /api/admin/video-remixer/worker/jobs/{identifier}/upload` | See reference |
| VideoRemixerWorker | `create` | `POST /api/admin/video-remixer/worker/claim` | See reference |
| WatchdogRecovery | `create` | `POST /api/v1/watchdog/recovery-queue/resolve` | See reference |
| WatchdogRecovery | `load` | `GET /api/v1/watchdog/recovery-queue` | See reference |
| WinningAd | `list` | `GET /api/video-variation/winning-ads` | Required |
| XAdaptation | `load` | `GET /api/carousel/x-adaptations` | Required |
| ZerohumanAdminAccount | `list` | `GET /api/admin/zerohuman/accounts` | Required |

## Connect to the API

- API server: `{base}`

The default credential is sent in the `Authorization` header with the `Bearer` prefix.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| Golang | `go/` | Build from source |
| Lua | `lua/` | Build from source |
| PHP | `php/` | Build from source |
| Python | `py/` | Build from source |
| Ruby | `rb/` | Build from source |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### Go CLI

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### Go MCP server

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `cracked-api-reference_list`: List records for an entity. Supported entities: `admin`, `admin_customer`, `admin_customer_success`, `admin_generated_video`, `admin_insight`, `admin_metrics_summary`, `admin_post`, `admin_recent_signup`, `admin_user_view`, `admin_users_table_item`, `agent`, `agent_access_customers_health`, `agent_access_user_agent`, `agent_access_user_phone_farm`, `agent_access_user_post`, `agent_access_user_summary`, `agent_access_user_winning_ad`, `agent_access_winning_ads_summary`, `agent_detail`, `agent_health`, `agent_health_customer_option`, `agent_health_detail`, `agent_post`, `agent_summary`, `analytics_post`, `carousel`, `carousel_status`, `customer`, `customer_health_all_customers_item`, `customer_health_views_summary`, `dedicated_agents_dashboard`, `failed_post`, `iris_connector`, `iris_status`, `iris_task`, `iris_usage`, `men`, `onboarding_status`, `paid_user`, `pexel`, `phone_admin_available_agent_source`, `product`, `product_dashboard`, `product_dashboard_view`, `product_demo`, `product_landing`, `schedule_v2`, `seo_ai_mention`, `seo_backlink`, `seo_keyword`, `seo_overview`, `seo_traffic`, `social`, `sora2_avatar`, `stat`, `stats_refresh_issue`, `stats_refresh_overview`, `stats_refresh_run_summary`, `tik_tok_creator_info`, `top_post`, `user_agent`, `user_health_detail`, `user_with_avatar_submission`, `users_health`, `winning_ad`, `zerohuman_admin_account`.
- `cracked-api-reference_load`: Load one record for an entity. Supported entities: `active_onboarding`, `admin`, `admin_carousel`, `admin_carousel_demo_review`, `admin_healthrx`, `admin_insight`, `admin_slideshow_import`, `admin_video_remixer`, `agent_access_overview`, `agent_access_phil_hourly_notification`, `agent_access_phil_stats_refresh`, `agent_access_phil_video`, `agent_access_user_video`, `agent_stat`, `agents_summary`, `analysis_status`, `auto_schedule_setting`, `carousel`, `carousel_agent_detail`, `chat_history`, `comment`, `comment_campaign`, `customer_health`, `daily_status`, `enterprise_agent`, `enterprise_product`, `exact_availability`, `exact_formula`, `generate_sora2_prompt`, `healthrx`, `landing_stat`, `landing_status`, `link_in_bio`, `link_in_dm`, `link_in_post`, `media_asset`, `microdrama`, `microhub_public`, `product`, `public_resume_status`, `read_root_get`, `remixer_clipper`, `reset_product`, `scan_socials_status`, `schedule_v2`, `scraping_status`, `seo`, `site`, `slug_validation`, `social`, `sora2_avatar`, `sora2_avatar_stat`, `style`, `template`, `user`, `video`, `watchdog_recovery`, `x_adaptation`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `ratelimit`: Client-side rate limiting via a token bucket
- `retry`: Automatic retry of transient failures with exponential backoff
- `test`: In-memory mock transport for testing without a live server
- `timeout`: Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

