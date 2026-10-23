# CrackedApiReference Golang SDK



The Golang SDK for the CrackedApiReference API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Activate(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Patch`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/cracked-api-reference-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Tags](https://github.com/voxgig-sdk/cracked-api-reference-sdk/tags) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/cracked-api-reference-sdk/go=../cracked-api-reference-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the entity, and for
`List` a `[]any` of entities, one per record (there is no `{ok, data}`
wrapper), so check `err` and read a record through the entity's
`Data()`.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/cracked-api-reference-sdk/go"
)

func main() {
    client := sdk.NewCrackedApiReferenceSDK(map[string]any{
        "apikey": os.Getenv("CRACKED_API_REFERENCE_APIKEY"),
    "server": map[string]any{
        "base": "<base>",
    },
    })

    // Create a activate.
    created, err := client.Activate(nil).Create(map[string]any{"user_id": "example_user_id", "message": "example_message", "success": true}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(created.(sdk.Entity).Data())
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
admininsights, err := client.AdminInsight(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = admininsights
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

adminInsights, err := client.AdminInsight(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
// A []any of entities, one per mock record.
for _, item := range adminInsights.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewCrackedApiReferenceSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewCrackedApiReferenceSDK

```go
func NewCrackedApiReferenceSDK(options map[string]any) *CrackedApiReferenceSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *CrackedApiReferenceSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CrackedApiReferenceSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Activate` | `(data map[string]any) CrackedApiReferenceEntity` | Create an Activate entity instance. |
| `ActivateUser` | `(data map[string]any) CrackedApiReferenceEntity` | Create an ActivateUser entity instance. |
| `ActiveOnboarding` | `(data map[string]any) CrackedApiReferenceEntity` | Create an ActiveOnboarding entity instance. |
| `Admin` | `(data map[string]any) CrackedApiReferenceEntity` | Create an Admin entity instance. |
| `AdminAccountReset` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AdminAccountReset entity instance. |
| `AdminCarousel` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AdminCarousel entity instance. |
| `AdminCarouselDemoReview` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AdminCarouselDemoReview entity instance. |
| `AdminCustomer` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AdminCustomer entity instance. |
| `AdminCustomerSuccess` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AdminCustomerSuccess entity instance. |
| `AdminGeneratedVideo` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AdminGeneratedVideo entity instance. |
| `AdminHealthrx` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AdminHealthrx entity instance. |
| `AdminInsight` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AdminInsight entity instance. |
| `AdminLandingTask` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AdminLandingTask entity instance. |
| `AdminMetricsSummary` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AdminMetricsSummary entity instance. |
| `AdminPost` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AdminPost entity instance. |
| `AdminRecentSignup` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AdminRecentSignup entity instance. |
| `AdminSlideshowDiag` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AdminSlideshowDiag entity instance. |
| `AdminSlideshowImport` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AdminSlideshowImport entity instance. |
| `AdminUserView` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AdminUserView entity instance. |
| `AdminUsersTableItem` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AdminUsersTableItem entity instance. |
| `AdminVideoRemixer` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AdminVideoRemixer entity instance. |
| `AdvanceStep` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AdvanceStep entity instance. |
| `Agent` | `(data map[string]any) CrackedApiReferenceEntity` | Create an Agent entity instance. |
| `AgentAccessCustomersHealth` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AgentAccessCustomersHealth entity instance. |
| `AgentAccessOverview` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AgentAccessOverview entity instance. |
| `AgentAccessPhilHourlyNotification` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AgentAccessPhilHourlyNotification entity instance. |
| `AgentAccessPhilStatsRefresh` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AgentAccessPhilStatsRefresh entity instance. |
| `AgentAccessPhilVideo` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AgentAccessPhilVideo entity instance. |
| `AgentAccessUserAgent` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AgentAccessUserAgent entity instance. |
| `AgentAccessUserPhoneFarm` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AgentAccessUserPhoneFarm entity instance. |
| `AgentAccessUserPost` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AgentAccessUserPost entity instance. |
| `AgentAccessUserSummary` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AgentAccessUserSummary entity instance. |
| `AgentAccessUserVideo` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AgentAccessUserVideo entity instance. |
| `AgentAccessUserWinningAd` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AgentAccessUserWinningAd entity instance. |
| `AgentAccessWinningAdsSummary` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AgentAccessWinningAdsSummary entity instance. |
| `AgentDetail` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AgentDetail entity instance. |
| `AgentHealth` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AgentHealth entity instance. |
| `AgentHealthCustomerOption` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AgentHealthCustomerOption entity instance. |
| `AgentHealthDetail` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AgentHealthDetail entity instance. |
| `AgentPost` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AgentPost entity instance. |
| `AgentStat` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AgentStat entity instance. |
| `AgentSummary` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AgentSummary entity instance. |
| `AgentsSummary` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AgentsSummary entity instance. |
| `AnalysisStatus` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AnalysisStatus entity instance. |
| `AnalyticsPost` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AnalyticsPost entity instance. |
| `AnalyzeProduct` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AnalyzeProduct entity instance. |
| `AssignAgent` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AssignAgent entity instance. |
| `Auth` | `(data map[string]any) CrackedApiReferenceEntity` | Create an Auth entity instance. |
| `AutoScheduleSetting` | `(data map[string]any) CrackedApiReferenceEntity` | Create an AutoScheduleSetting entity instance. |
| `BulkTikTokStatsUpdate` | `(data map[string]any) CrackedApiReferenceEntity` | Create a BulkTikTokStatsUpdate entity instance. |
| `Carousel` | `(data map[string]any) CrackedApiReferenceEntity` | Create a Carousel entity instance. |
| `CarouselAgentDetail` | `(data map[string]any) CrackedApiReferenceEntity` | Create a CarouselAgentDetail entity instance. |
| `CarouselStatus` | `(data map[string]any) CrackedApiReferenceEntity` | Create a CarouselStatus entity instance. |
| `Chat` | `(data map[string]any) CrackedApiReferenceEntity` | Create a Chat entity instance. |
| `ChatHistory` | `(data map[string]any) CrackedApiReferenceEntity` | Create a ChatHistory entity instance. |
| `ChatSession` | `(data map[string]any) CrackedApiReferenceEntity` | Create a ChatSession entity instance. |
| `Comment` | `(data map[string]any) CrackedApiReferenceEntity` | Create a Comment entity instance. |
| `CommentCampaign` | `(data map[string]any) CrackedApiReferenceEntity` | Create a CommentCampaign entity instance. |
| `CompleteChatCheckout` | `(data map[string]any) CrackedApiReferenceEntity` | Create a CompleteChatCheckout entity instance. |
| `CreateBlackoutSora2Video` | `(data map[string]any) CrackedApiReferenceEntity` | Create a CreateBlackoutSora2Video entity instance. |
| `CreateCarousel` | `(data map[string]any) CrackedApiReferenceEntity` | Create a CreateCarousel entity instance. |
| `CreateProduct` | `(data map[string]any) CrackedApiReferenceEntity` | Create a CreateProduct entity instance. |
| `CreateResetProductV6` | `(data map[string]any) CrackedApiReferenceEntity` | Create a CreateResetProductV6 entity instance. |
| `CreateSora2Video` | `(data map[string]any) CrackedApiReferenceEntity` | Create a CreateSora2Video entity instance. |
| `CreateVariation` | `(data map[string]any) CrackedApiReferenceEntity` | Create a CreateVariation entity instance. |
| `Customer` | `(data map[string]any) CrackedApiReferenceEntity` | Create a Customer entity instance. |
| `CustomerHealth` | `(data map[string]any) CrackedApiReferenceEntity` | Create a CustomerHealth entity instance. |
| `CustomerHealthAllCustomersItem` | `(data map[string]any) CrackedApiReferenceEntity` | Create a CustomerHealthAllCustomersItem entity instance. |
| `CustomerHealthViewsSummary` | `(data map[string]any) CrackedApiReferenceEntity` | Create a CustomerHealthViewsSummary entity instance. |
| `Daily` | `(data map[string]any) CrackedApiReferenceEntity` | Create a Daily entity instance. |
| `DailyStatus` | `(data map[string]any) CrackedApiReferenceEntity` | Create a DailyStatus entity instance. |
| `DedicatedAgentsDashboard` | `(data map[string]any) CrackedApiReferenceEntity` | Create a DedicatedAgentsDashboard entity instance. |
| `EnterpriseAgent` | `(data map[string]any) CrackedApiReferenceEntity` | Create an EnterpriseAgent entity instance. |
| `EnterpriseProduct` | `(data map[string]any) CrackedApiReferenceEntity` | Create an EnterpriseProduct entity instance. |
| `ExactAvailability` | `(data map[string]any) CrackedApiReferenceEntity` | Create an ExactAvailability entity instance. |
| `ExactFormula` | `(data map[string]any) CrackedApiReferenceEntity` | Create an ExactFormula entity instance. |
| `ExtractV2` | `(data map[string]any) CrackedApiReferenceEntity` | Create an ExtractV2 entity instance. |
| `FailedPost` | `(data map[string]any) CrackedApiReferenceEntity` | Create a FailedPost entity instance. |
| `File` | `(data map[string]any) CrackedApiReferenceEntity` | Create a File entity instance. |
| `GenerateBlackoutSora2Prompt` | `(data map[string]any) CrackedApiReferenceEntity` | Create a GenerateBlackoutSora2Prompt entity instance. |
| `GeneratePomelliDemo` | `(data map[string]any) CrackedApiReferenceEntity` | Create a GeneratePomelliDemo entity instance. |
| `GeneratePrompt` | `(data map[string]any) CrackedApiReferenceEntity` | Create a GeneratePrompt entity instance. |
| `GenerateSora2Prompt` | `(data map[string]any) CrackedApiReferenceEntity` | Create a GenerateSora2Prompt entity instance. |
| `Healthrx` | `(data map[string]any) CrackedApiReferenceEntity` | Create a Healthrx entity instance. |
| `InitResetProductV6` | `(data map[string]any) CrackedApiReferenceEntity` | Create an InitResetProductV6 entity instance. |
| `Iri` | `(data map[string]any) CrackedApiReferenceEntity` | Create an Iri entity instance. |
| `IrisCapability` | `(data map[string]any) CrackedApiReferenceEntity` | Create an IrisCapability entity instance. |
| `IrisChat` | `(data map[string]any) CrackedApiReferenceEntity` | Create an IrisChat entity instance. |
| `IrisConnector` | `(data map[string]any) CrackedApiReferenceEntity` | Create an IrisConnector entity instance. |
| `IrisStatus` | `(data map[string]any) CrackedApiReferenceEntity` | Create an IrisStatus entity instance. |
| `IrisTask` | `(data map[string]any) CrackedApiReferenceEntity` | Create an IrisTask entity instance. |
| `IrisUsage` | `(data map[string]any) CrackedApiReferenceEntity` | Create an IrisUsage entity instance. |
| `Landing` | `(data map[string]any) CrackedApiReferenceEntity` | Create a Landing entity instance. |
| `LandingStat` | `(data map[string]any) CrackedApiReferenceEntity` | Create a LandingStat entity instance. |
| `LandingStatus` | `(data map[string]any) CrackedApiReferenceEntity` | Create a LandingStatus entity instance. |
| `LinkInBio` | `(data map[string]any) CrackedApiReferenceEntity` | Create a LinkInBio entity instance. |
| `LinkInDm` | `(data map[string]any) CrackedApiReferenceEntity` | Create a LinkInDm entity instance. |
| `LinkInPost` | `(data map[string]any) CrackedApiReferenceEntity` | Create a LinkInPost entity instance. |
| `LinkUser` | `(data map[string]any) CrackedApiReferenceEntity` | Create a LinkUser entity instance. |
| `MediaAsset` | `(data map[string]any) CrackedApiReferenceEntity` | Create a MediaAsset entity instance. |
| `Men` | `(data map[string]any) CrackedApiReferenceEntity` | Create a Men entity instance. |
| `Microdrama` | `(data map[string]any) CrackedApiReferenceEntity` | Create a Microdrama entity instance. |
| `MicrohubPublic` | `(data map[string]any) CrackedApiReferenceEntity` | Create a MicrohubPublic entity instance. |
| `OnboardingStatus` | `(data map[string]any) CrackedApiReferenceEntity` | Create an OnboardingStatus entity instance. |
| `OnboardingV6` | `(data map[string]any) CrackedApiReferenceEntity` | Create an OnboardingV6 entity instance. |
| `PaidUser` | `(data map[string]any) CrackedApiReferenceEntity` | Create a PaidUser entity instance. |
| `Pexel` | `(data map[string]any) CrackedApiReferenceEntity` | Create a Pexel entity instance. |
| `PhoneAdminAvailableAgentSource` | `(data map[string]any) CrackedApiReferenceEntity` | Create a PhoneAdminAvailableAgentSource entity instance. |
| `Product` | `(data map[string]any) CrackedApiReferenceEntity` | Create a Product entity instance. |
| `ProductDashboard` | `(data map[string]any) CrackedApiReferenceEntity` | Create a ProductDashboard entity instance. |
| `ProductDashboardView` | `(data map[string]any) CrackedApiReferenceEntity` | Create a ProductDashboardView entity instance. |
| `ProductDemo` | `(data map[string]any) CrackedApiReferenceEntity` | Create a ProductDemo entity instance. |
| `ProductLanding` | `(data map[string]any) CrackedApiReferenceEntity` | Create a ProductLanding entity instance. |
| `PublicResumeStatus` | `(data map[string]any) CrackedApiReferenceEntity` | Create a PublicResumeStatus entity instance. |
| `ReRollVideo` | `(data map[string]any) CrackedApiReferenceEntity` | Create a ReRollVideo entity instance. |
| `ReadRootGet` | `(data map[string]any) CrackedApiReferenceEntity` | Create a ReadRootGet entity instance. |
| `RecordDemoBooked` | `(data map[string]any) CrackedApiReferenceEntity` | Create a RecordDemoBooked entity instance. |
| `RefreshStat` | `(data map[string]any) CrackedApiReferenceEntity` | Create a RefreshStat entity instance. |
| `RemixerClipper` | `(data map[string]any) CrackedApiReferenceEntity` | Create a RemixerClipper entity instance. |
| `ResetProduct` | `(data map[string]any) CrackedApiReferenceEntity` | Create a ResetProduct entity instance. |
| `RetryWebsiteScrape` | `(data map[string]any) CrackedApiReferenceEntity` | Create a RetryWebsiteScrape entity instance. |
| `SaveSurvey` | `(data map[string]any) CrackedApiReferenceEntity` | Create a SaveSurvey entity instance. |
| `ScanSocial` | `(data map[string]any) CrackedApiReferenceEntity` | Create a ScanSocial entity instance. |
| `ScanSocialsPublic` | `(data map[string]any) CrackedApiReferenceEntity` | Create a ScanSocialsPublic entity instance. |
| `ScanSocialsStatus` | `(data map[string]any) CrackedApiReferenceEntity` | Create a ScanSocialsStatus entity instance. |
| `ScheduleV2` | `(data map[string]any) CrackedApiReferenceEntity` | Create a ScheduleV2 entity instance. |
| `Scrape` | `(data map[string]any) CrackedApiReferenceEntity` | Create a Scrape entity instance. |
| `ScrapeWebsitePublic` | `(data map[string]any) CrackedApiReferenceEntity` | Create a ScrapeWebsitePublic entity instance. |
| `ScrapedData` | `(data map[string]any) CrackedApiReferenceEntity` | Create a ScrapedData entity instance. |
| `ScrapingStatus` | `(data map[string]any) CrackedApiReferenceEntity` | Create a ScrapingStatus entity instance. |
| `SelfServeActivate` | `(data map[string]any) CrackedApiReferenceEntity` | Create a SelfServeActivate entity instance. |
| `Seo` | `(data map[string]any) CrackedApiReferenceEntity` | Create a Seo entity instance. |
| `SeoAiMention` | `(data map[string]any) CrackedApiReferenceEntity` | Create a SeoAiMention entity instance. |
| `SeoBacklink` | `(data map[string]any) CrackedApiReferenceEntity` | Create a SeoBacklink entity instance. |
| `SeoKeyword` | `(data map[string]any) CrackedApiReferenceEntity` | Create a SeoKeyword entity instance. |
| `SeoOverview` | `(data map[string]any) CrackedApiReferenceEntity` | Create a SeoOverview entity instance. |
| `SeoTraffic` | `(data map[string]any) CrackedApiReferenceEntity` | Create a SeoTraffic entity instance. |
| `ShareAccessLink` | `(data map[string]any) CrackedApiReferenceEntity` | Create a ShareAccessLink entity instance. |
| `Site` | `(data map[string]any) CrackedApiReferenceEntity` | Create a Site entity instance. |
| `Slide` | `(data map[string]any) CrackedApiReferenceEntity` | Create a Slide entity instance. |
| `SlugValidation` | `(data map[string]any) CrackedApiReferenceEntity` | Create a SlugValidation entity instance. |
| `Social` | `(data map[string]any) CrackedApiReferenceEntity` | Create a Social entity instance. |
| `SocialScanPreview` | `(data map[string]any) CrackedApiReferenceEntity` | Create a SocialScanPreview entity instance. |
| `SocialScanProcess` | `(data map[string]any) CrackedApiReferenceEntity` | Create a SocialScanProcess entity instance. |
| `SocialScanSave` | `(data map[string]any) CrackedApiReferenceEntity` | Create a SocialScanSave entity instance. |
| `Sora2Avatar` | `(data map[string]any) CrackedApiReferenceEntity` | Create a Sora2Avatar entity instance. |
| `Sora2AvatarAssetUpload` | `(data map[string]any) CrackedApiReferenceEntity` | Create a Sora2AvatarAssetUpload entity instance. |
| `Sora2AvatarStat` | `(data map[string]any) CrackedApiReferenceEntity` | Create a Sora2AvatarStat entity instance. |
| `Stat` | `(data map[string]any) CrackedApiReferenceEntity` | Create a Stat entity instance. |
| `StatsRefreshBackfill` | `(data map[string]any) CrackedApiReferenceEntity` | Create a StatsRefreshBackfill entity instance. |
| `StatsRefreshIssue` | `(data map[string]any) CrackedApiReferenceEntity` | Create a StatsRefreshIssue entity instance. |
| `StatsRefreshOverview` | `(data map[string]any) CrackedApiReferenceEntity` | Create a StatsRefreshOverview entity instance. |
| `StatsRefreshRunSummary` | `(data map[string]any) CrackedApiReferenceEntity` | Create a StatsRefreshRunSummary entity instance. |
| `StatsRefreshTaskTrigger` | `(data map[string]any) CrackedApiReferenceEntity` | Create a StatsRefreshTaskTrigger entity instance. |
| `Stripe` | `(data map[string]any) CrackedApiReferenceEntity` | Create a Stripe entity instance. |
| `Style` | `(data map[string]any) CrackedApiReferenceEntity` | Create a Style entity instance. |
| `Template` | `(data map[string]any) CrackedApiReferenceEntity` | Create a Template entity instance. |
| `TikTokCreatorInfo` | `(data map[string]any) CrackedApiReferenceEntity` | Create a TikTokCreatorInfo entity instance. |
| `TopPost` | `(data map[string]any) CrackedApiReferenceEntity` | Create a TopPost entity instance. |
| `UploadPostAgent` | `(data map[string]any) CrackedApiReferenceEntity` | Create an UploadPostAgent entity instance. |
| `User` | `(data map[string]any) CrackedApiReferenceEntity` | Create an User entity instance. |
| `UserAgent` | `(data map[string]any) CrackedApiReferenceEntity` | Create an UserAgent entity instance. |
| `UserHealthDetail` | `(data map[string]any) CrackedApiReferenceEntity` | Create an UserHealthDetail entity instance. |
| `UserWithAvatarSubmission` | `(data map[string]any) CrackedApiReferenceEntity` | Create an UserWithAvatarSubmission entity instance. |
| `UsersHealth` | `(data map[string]any) CrackedApiReferenceEntity` | Create an UsersHealth entity instance. |
| `Video` | `(data map[string]any) CrackedApiReferenceEntity` | Create a Video entity instance. |
| `VideoRemixerWorker` | `(data map[string]any) CrackedApiReferenceEntity` | Create a VideoRemixerWorker entity instance. |
| `WatchdogRecovery` | `(data map[string]any) CrackedApiReferenceEntity` | Create a WatchdogRecovery entity instance. |
| `WinningAd` | `(data map[string]any) CrackedApiReferenceEntity` | Create a WinningAd entity instance. |
| `XAdaptation` | `(data map[string]any) CrackedApiReferenceEntity` | Create a XAdaptation entity instance. |
| `ZerohumanAdminAccount` | `(data map[string]any) CrackedApiReferenceEntity` | Create a ZerohumanAdminAccount entity instance. |

### Entity interface (CrackedApiReferenceEntity)

All entities implement the `CrackedApiReferenceEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria, and return it. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria, one per record. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity, and return it. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity, and return it. |
| `Patch` | `(reqdata, ctrl map[string]any) (any, error)` | Change part of an existing entity, and return it. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity, and return it marked as deleted. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the entity
itself — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Patch` / `Remove` | the entity, whose `Data()` reads its record (`map[string]any`) |
| `List` | a `[]any` of entities, one per record |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    activate, err := client.Activate(nil).Create(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // activate is the entity; activate.(sdk.Entity).Data() reads its record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Activate

| Field | Description |
| --- | --- |
| `"activated_at"` |  |
| `"message"` |  |
| `"success"` |  |

Operations: Create.

API path: `/api/admin/users/{user_id}/activate`

#### ActivateUser

| Field | Description |
| --- | --- |
| `"activated_at"` |  |
| `"message"` |  |
| `"success"` |  |

Operations: Create.

API path: `/api/admin/users/{user_id}/activate-and-complete-onboarding`

#### ActiveOnboarding

| Field | Description |
| --- | --- |
| `"current_step"` |  |
| `"has_active_onboarding"` |  |
| `"onboarding_data_id"` |  |

Operations: Load.

API path: `/api/onboarding-v6/active-session`

#### Admin

| Field | Description |
| --- | --- |
| `"apply"` | Apply safe canonical or clean-only URL updates |
| `"count"` |  |
| `"created_at"` |  |
| `"date_from"` |  |
| `"date_to"` |  |
| `"email"` |  |
| `"id"` |  |
| `"include_failed"` |  |
| `"include_pending"` |  |
| `"include_records"` | Include full per-field audit records in the response |
| `"issue_ids"` |  |
| `"only_active"` | Limit the audit to active agents |
| `"platform"` |  |
| `"posting_method"` |  |
| `"product_id"` |  |
| `"query"` |  |
| `"reason"` |  |
| `"regenerate"` |  |
| `"status"` |  |
| `"user_membership"` |  |
| `"user_name"` |  |
| `"user_onboarding_step"` |  |
| `"video_type"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/admin/users/{user_id}/regenerate-video/{video_id}`

#### AdminAccountReset

| Field | Description |
| --- | --- |
| `"agent_ids"` |  |
| `"agent_ids_sha256"` |  |
| `"backup_sha256"` |  |
| `"batch_size"` |  |
| `"confirmation"` |  |
| `"customer_email"` |  |
| `"pc_name"` |  |
| `"phase"` |  |
| `"product_id"` |  |
| `"video_ids"` |  |

Operations: Create.

API path: `/api/admin/agent-account-reset`

#### AdminCarousel

| Field | Description |
| --- | --- |
| `"agent_id"` |  |
| `"batch_id"` |  |
| `"caption"` |  |
| `"content_base64"` |  |
| `"day"` |  |
| `"dry_run"` |  |
| `"engine_run"` |  |
| `"expected_revision"` |  |
| `"formula"` |  |
| `"formula_id"` |  |
| `"prompt"` |  |
| `"slides"` |  |
| `"title"` |  |

Operations: Create, Load, Update.

API path: `/api/admin/carousels/slideshow-import/{batch_id}/state`

#### AdminCarouselDemoReview

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"items"` |  |
| `"reason"` |  |

Operations: Create, Load, Update.

API path: `/api/admin/carousels/demo-reviews/{formula_id}/decision`

#### AdminCustomer

| Field | Description |
| --- | --- |
| `"account_type"` |  |
| `"active_vireel_agents"` |  |
| `"agents"` |  |
| `"billing_source"` |  |
| `"contracted_agents"` |  |
| `"email"` |  |
| `"membership"` |  |
| `"name"` |  |
| `"pfa_only_agents"` |  |
| `"severity"` |  |
| `"status"` |  |
| `"subscription_status"` |  |
| `"user_id"` |  |

Operations: List.

API path: `/api/admin/insights/customers`

#### AdminCustomerSuccess

| Field | Description |
| --- | --- |
| `"active_agents"` |  |
| `"active_products"` |  |
| `"agents_count"` |  |
| `"auto_schedule_status"` |  |
| `"days_until_period_end"` |  |
| `"email"` |  |
| `"feature_impact"` |  |
| `"last_notification_at"` |  |
| `"membership"` |  |
| `"name"` |  |
| `"notification_count"` |  |
| `"notification_events"` |  |
| `"priority"` |  |
| `"severity"` |  |
| `"status_label"` |  |
| `"subscription_current_period_end"` |  |
| `"subscription_status"` |  |
| `"upcoming_posts"` |  |
| `"user_id"` |  |

Operations: List.

API path: `/api/admin/insights/customer-success`

#### AdminGeneratedVideo

| Field | Description |
| --- | --- |
| `"agent_id"` |  |
| `"agent_name"` |  |
| `"created_at"` |  |
| `"duration"` |  |
| `"generation_status"` |  |
| `"id"` |  |
| `"product_id"` |  |
| `"thumbnail_url"` |  |
| `"title"` |  |
| `"type"` |  |
| `"updated_at"` |  |
| `"url"` |  |

Operations: List.

API path: `/api/admin/users/{user_id}/generated-videos`

#### AdminHealthrx

| Field | Description |
| --- | --- |
| `"action"` |  |
| `"delivery_enabled"` |  |
| `"id"` |  |
| `"option_id"` |  |
| `"plan"` |  |
| `"preparation_enabled"` |  |
| `"product_id"` |  |
| `"reason"` |  |
| `"request_key"` |  |
| `"revision"` |  |
| `"schedule_enabled"` |  |
| `"version"` |  |
| `"viewed"` |  |

Operations: Create, Load, Update.

API path: `/api/admin/healthrx/items/{kind}/{item_id}/decision`

#### AdminInsight

| Field | Description |
| --- | --- |
| `"customer_success_cases"` |  |
| `"customers"` |  |
| `"generated_at"` |  |
| `"pfa_database"` |  |
| `"recent_signups"` |  |
| `"summary"` |  |
| `"vireel_database"` |  |

Operations: List, Load.

API path: `/api/admin/insights`

#### AdminLandingTask

| Field | Description |
| --- | --- |
| `"task_id"` |  |

Operations: Create.

API path: `/api/admin/users/{user_id}/regenerate-landing`

#### AdminMetricsSummary

| Field | Description |
| --- | --- |
| `"paid_users_by_level"` |  |
| `"total_cancellations"` |  |
| `"total_previews_generated"` |  |
| `"total_signups"` |  |
| `"total_videos_generated"` |  |
| `"url_attempts"` |  |
| `"user_credits"` |  |
| `"user_gifted_credits"` |  |

Operations: List.

API path: `/api/admin/metrics/summary`

#### AdminPost

| Field | Description |
| --- | --- |
| `"admin_job_ids"` |  |
| `"agent_id"` |  |
| `"agent_name"` |  |
| `"agent_platform_urls"` |  |
| `"agent_url"` |  |
| `"comments"` |  |
| `"error_message"` |  |
| `"failed_at"` |  |
| `"id"` |  |
| `"instagram_posted_by"` |  |
| `"instagram_posted_url"` |  |
| `"instagram_scraped_social_post_id"` |  |
| `"is_instagram_posted"` |  |
| `"is_tiktok_posted"` |  |
| `"is_youtube_posted"` |  |
| `"last_refreshed_at"` |  |
| `"likes"` |  |
| `"platform_post_methods"` |  |
| `"platform_urls"` |  |
| `"post_method"` |  |
| `"post_platforms"` |  |
| `"post_url"` |  |
| `"posted_at"` |  |
| `"product_id"` |  |
| `"results_status"` |  |
| `"scheduled_datetime"` |  |
| `"source_type"` |  |
| `"status"` |  |
| `"tiktok_posted_by"` |  |
| `"tiktok_posted_url"` |  |
| `"tiktok_scraped_social_post_id"` |  |
| `"upload_post_error"` |  |
| `"upload_post_status"` |  |
| `"upload_post_uploads"` |  |
| `"user_email"` |  |
| `"user_id"` |  |
| `"user_name"` |  |
| `"video_id"` |  |
| `"video_url"` |  |
| `"views"` |  |
| `"youtube_posted_by"` |  |
| `"youtube_posted_url"` |  |
| `"youtube_scraped_social_post_id"` |  |

Operations: List.

API path: `/api/admin/posts`

#### AdminRecentSignup

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"current_step"` |  |
| `"email"` |  |
| `"email_source"` |  |
| `"error_message"` |  |
| `"flow_variant"` |  |
| `"id"` |  |
| `"inactive_minutes"` |  |
| `"last_notification_at"` |  |
| `"last_seen_at"` |  |
| `"likely_cause"` |  |
| `"notification_count"` |  |
| `"notification_events"` |  |
| `"product_id"` |  |
| `"product_name"` |  |
| `"product_url"` |  |
| `"severity"` |  |
| `"social_scan_status"` |  |
| `"stage_label"` |  |
| `"status"` |  |
| `"updated_at"` |  |
| `"website_scrape_status"` |  |

Operations: List.

API path: `/api/admin/insights/recent-signups`

#### AdminSlideshowDiag

| Field | Description |
| --- | --- |
| `"agent_id"` |  |
| `"batch_id"` |  |
| `"caption"` |  |
| `"content_base64"` |  |
| `"day"` |  |
| `"formula_id"` |  |
| `"id"` |  |
| `"title"` |  |

Operations: Create.

API path: `/api/admin/slideshow-diag/{stage}`

#### AdminSlideshowImport

| Field | Description |
| --- | --- |
| `"agent_id"` |  |
| `"batch_id"` |  |
| `"caption"` |  |
| `"day"` |  |
| `"dry_run"` |  |
| `"engine_run"` |  |
| `"formula_id"` |  |
| `"slides"` |  |
| `"title"` |  |

Operations: Create, Load.

API path: `/api/admin/slideshow-import2/{batch_id}/state`

#### AdminUserView

| Field | Description |
| --- | --- |
| `"account_type"` |  |
| `"admin_notes"` |  |
| `"agents_count"` |  |
| `"created_at"` |  |
| `"credits"` |  |
| `"email"` |  |
| `"id"` |  |
| `"industry"` |  |
| `"is_admin"` |  |
| `"is_bookmarked"` |  |
| `"is_internal_user"` |  |
| `"membership"` |  |
| `"name"` |  |
| `"new_email"` |  |
| `"partner_external_user_id"` |  |
| `"partner_policy_code"` |  |
| `"partner_source"` |  |
| `"product_name"` |  |
| `"product_url"` |  |
| `"skip"` |  |
| `"subscription_details"` |  |
| `"subscription_status"` |  |

Operations: Create, List, Remove, Update.

API path: `/api/admin/users/{user_id}/fix-auto-schedule-by-date`

#### AdminUsersTableItem

| Field | Description |
| --- | --- |
| `"activated"` |  |
| `"agents_count"` |  |
| `"created_at"` |  |
| `"credits"` |  |
| `"demo_booked"` |  |
| `"email"` |  |
| `"id"` |  |
| `"membership"` |  |
| `"name"` |  |
| `"onboarding_flow"` |  |
| `"product_name"` |  |
| `"product_url"` |  |
| `"survey_data"` |  |

Operations: List.

API path: `/api/admin/users/table`

#### AdminVideoRemixer

| Field | Description |
| --- | --- |
| `"activity"` |  |
| `"allowed_platforms"` |  |
| `"anchor_clip_id"` |  |
| `"atomicity_class"` |  |
| `"auto_render"` |  |
| `"campaign_allowed"` |  |
| `"channel"` |  |
| `"channel_default"` |  |
| `"clip_id"` |  |
| `"clip_ids"` |  |
| `"collected_at"` |  |
| `"comments"` |  |
| `"completion_rate"` |  |
| `"confirmed_duplicate_of"` |  |
| `"consent_doc_uri"` |  |
| `"contact"` |  |
| `"conversions"` |  |
| `"count"` |  |
| `"creator"` |  |
| `"creator_id"` |  |
| `"crop_window"` |  |
| `"cta_product_id"` |  |
| `"days"` |  |
| `"derivative_edits_allowed"` |  |
| `"enabled"` |  |
| `"end_ms"` |  |
| `"enqueue"` |  |
| `"errors"` |  |
| `"evidence"` |  |
| `"expected_revision"` |  |
| `"expected_revisions"` |  |
| `"external_ai_allowed"` |  |
| `"file"` |  |
| `"followers"` |  |
| `"formula_id"` |  |
| `"formula_ids"` |  |
| `"handles"` |  |
| `"hook_subtype"` |  |
| `"hour_utc"` |  |
| `"human_role"` |  |
| `"idempotency_key"` |  |
| `"items"` |  |
| `"kim_clip_ids"` |  |
| `"kind"` |  |
| `"levels"` |  |
| `"likes"` |  |
| `"media_enabled"` |  |
| `"medical_claim_present"` |  |
| `"minute_utc"` |  |
| `"music_bed_allowed"` |  |
| `"music_policy"` |  |
| `"name"` |  |
| `"niche"` |  |
| `"notes"` |  |
| `"origin"` |  |
| `"owner_waiver"` |  |
| `"paid_ads_allowed"` |  |
| `"patient_identifiable"` |  |
| `"person_type"` |  |
| `"pipeline"` |  |
| `"planning_only"` |  |
| `"platform"` |  |
| `"platform_post_id"` |  |
| `"policy"` |  |
| `"polish"` |  |
| `"post_url"` |  |
| `"posted_at"` |  |
| `"primary_role"` |  |
| `"purpose"` |  |
| `"rate"` |  |
| `"rationale"` |  |
| `"reason"` |  |
| `"reference_source_id"` |  |
| `"requires_medical_review"` |  |
| `"review_status"` |  |
| `"revision"` |  |
| `"rights_expires_at"` |  |
| `"rights_status"` |  |
| `"run_id"` |  |
| `"sample_links"` |  |
| `"secondary_roles"` |  |
| `"seconds"` |  |
| `"seed"` |  |
| `"seed_base"` |  |
| `"sensitive_personal_data_present"` |  |
| `"shares"` |  |
| `"shoot"` |  |
| `"slots"` |  |
| `"soundbite_title"` |  |
| `"source"` |  |
| `"source_id"` |  |
| `"source_ids"` |  |
| `"spend_usd"` |  |
| `"spiciness"` |  |
| `"spiciness_notes"` |  |
| `"start_ms"` |  |
| `"status"` |  |
| `"terry_clip_ids"` |  |
| `"testimonial_strength"` |  |
| `"testimonial_type"` |  |
| `"tier"` |  |
| `"timeline"` |  |
| `"topic"` |  |
| `"topic_tags"` |  |
| `"total_target_ms"` |  |
| `"use_learned_weights"` |  |
| `"views"` |  |
| `"window"` |  |

Operations: Create, Load, Patch, Remove, Update.

API path: `/api/admin/video-remixer/clips/{clip_id}/media`

#### AdvanceStep

| Field | Description |
| --- | --- |
| `"current_step"` |  |
| `"onboarding_data_id"` | UUID of the OnboardingData record |
| `"success"` |  |
| `"to_step"` | Target step name |

Operations: Create.

API path: `/api/onboarding-v6/advance-step`

#### Agent

| Field | Description |
| --- | --- |
| `"active_connections"` |  |
| `"at_capacity"` |  |
| `"id"` |  |
| `"is_active"` |  |
| `"name"` |  |
| `"tiktok_stats"` |  |
| `"type"` |  |

Operations: List.

API path: `/api/admin/agents`

#### AgentAccessCustomersHealth

| Field | Description |
| --- | --- |
| `"accountType"` |  |
| `"agentQuota"` |  |
| `"assignedAgentsByType"` |  |
| `"assignedAgentsTotal"` |  |
| `"createdAt"` |  |
| `"email"` |  |
| `"isInternalUser"` |  |
| `"membership"` |  |
| `"name"` |  |
| `"performance"` |  |
| `"productCount"` |  |
| `"subscriptionCurrentPeriodEnd"` |  |
| `"subscriptionDetails"` |  |
| `"subscriptionStatus"` |  |
| `"usage"` |  |
| `"userId"` |  |

Operations: List.

API path: `/api/admin/customers-health`

#### AgentAccessOverview

| Field | Description |
| --- | --- |
| `"activeUsers"` |  |
| `"generatedAt"` |  |
| `"newUsersYesterday"` |  |
| `"onboardingContextCounts"` |  |
| `"onboardingCurrentStepCounts"` |  |
| `"onboardingCurrentStepWindow"` |  |
| `"onboardingFlowVariantCounts"` |  |
| `"onboardingLockedUntilActivation"` |  |
| `"onboardingRecordsTotal"` |  |
| `"onboardingRecordsWindow"` |  |
| `"onboardingSocialScanStatusCounts"` |  |
| `"onboardingWebsiteScrapeStatusCounts"` |  |
| `"subscriptionStatusCounts"` |  |
| `"totalInternalUsers"` |  |
| `"totalUsers"` |  |
| `"trialStartedYesterday"` |  |
| `"trialingUsers"` |  |

Operations: Load.

API path: `/api/agent-access/overview`

#### AgentAccessPhilHourlyNotification

| Field | Description |
| --- | --- |
| `"generatedAt"` |  |
| `"phoneHealth"` |  |
| `"scheduledPosts"` |  |
| `"targetDate"` |  |
| `"uploadPostInstagramHealth"` |  |
| `"uploadPostTiktokHealth"` |  |
| `"uploadPostYoutubeHealth"` |  |

Operations: Load.

API path: `/api/agent-access/phil-notifications/hourly`

#### AgentAccessPhilStatsRefresh

| Field | Description |
| --- | --- |
| `"generatedAt"` |  |
| `"statsRefresh"` |  |
| `"targetDate"` |  |

Operations: Load.

API path: `/api/agent-access/phil-notifications/stats-refresh`

#### AgentAccessPhilVideo

| Field | Description |
| --- | --- |
| `"generatedAt"` |  |
| `"targetDate"` |  |
| `"videos"` |  |

Operations: Load.

API path: `/api/agent-access/phil-notifications/videos`

#### AgentAccessUserAgent

| Field | Description |
| --- | --- |
| `"agentQuota"` |  |
| `"agents"` |  |
| `"assignedByType"` |  |
| `"assignedTotal"` |  |
| `"email"` |  |
| `"products"` |  |
| `"userId"` |  |

Operations: List.

API path: `/api/agent-access/user-agents`

#### AgentAccessUserPhoneFarm

| Field | Description |
| --- | --- |
| `"avatar"` |  |
| `"facebookUrl"` |  |
| `"id"` |  |
| `"instagramUrl"` |  |
| `"lastAdminSyncedAt"` |  |
| `"name"` |  |
| `"productId"` |  |
| `"productName"` |  |
| `"tiktokUrl"` |  |
| `"type"` |  |
| `"uploadPostPlatforms"` |  |
| `"youtubeUrl"` |  |

Operations: List.

API path: `/api/agent-access/user-phone-farm`

#### AgentAccessUserPost

| Field | Description |
| --- | --- |
| `"deltaYesterday"` |  |
| `"expectedVideosPerDay"` |  |
| `"postedToday"` |  |
| `"postedYesterday"` |  |
| `"productId"` |  |
| `"productName"` |  |

Operations: List.

API path: `/api/agent-access/user-posts`

#### AgentAccessUserSummary

| Field | Description |
| --- | --- |
| `"deletedAt"` |  |
| `"id"` |  |
| `"isActive"` |  |
| `"name"` |  |
| `"url"` |  |

Operations: List.

API path: `/api/agent-access/user-summary`

#### AgentAccessUserVideo

| Field | Description |
| --- | --- |
| `"allTime"` |  |
| `"email"` |  |
| `"today"` |  |
| `"userId"` |  |
| `"yesterday"` |  |

Operations: Load.

API path: `/api/agent-access/user-videos`

#### AgentAccessUserWinningAd

| Field | Description |
| --- | --- |
| `"productId"` |  |
| `"productName"` |  |
| `"winningAds"` |  |
| `"winningAdsCount"` |  |

Operations: List.

API path: `/api/agent-access/user-winning-ads`

#### AgentAccessWinningAdsSummary

| Field | Description |
| --- | --- |
| `"email"` |  |
| `"name"` |  |
| `"productCount"` |  |
| `"productsWithWinningAds"` |  |
| `"subscriptionStatus"` |  |
| `"totalWinningAds"` |  |
| `"userId"` |  |

Operations: List.

API path: `/api/agent-access/winning-ads-summary`

#### AgentDetail

| Field | Description |
| --- | --- |
| `"activeConnections"` |  |
| `"assignedAt"` |  |
| `"avatar"` |  |
| `"bio"` |  |
| `"facebookUrl"` |  |
| `"id"` |  |
| `"instagramUrl"` |  |
| `"isActive"` |  |
| `"name"` |  |
| `"role"` |  |
| `"tiktokStats"` |  |
| `"tiktokUrl"` |  |
| `"type"` |  |
| `"uploadPostPlatforms"` |  |
| `"youtubeUrl"` |  |

Operations: List, Update.

API path: `/api/upload-post-agents/all`

#### AgentHealth

| Field | Description |
| --- | --- |
| `"daily"` |  |
| `"dates"` |  |
| `"generated_at"` |  |
| `"groups"` |  |
| `"latest"` |  |
| `"live_date"` |  |
| `"phone_admin_generated_at"` |  |
| `"platform"` |  |
| `"post_target"` |  |
| `"qa_managed_agent_ids"` |  |
| `"scope_prefixes"` |  |
| `"timezone"` |  |
| `"warmup_target"` |  |

Operations: List.

API path: `/api/admin/agent-health`

#### AgentHealthCustomerOption

| Field | Description |
| --- | --- |
| `"agent_count"` |  |
| `"email"` |  |
| `"user_id"` |  |

Operations: List.

API path: `/api/admin/agent-health/customers`

#### AgentHealthDetail

| Field | Description |
| --- | --- |
| `"archived_issue_total"` |  |
| `"date"` |  |
| `"generated_at"` |  |
| `"group_id"` |  |
| `"has_more"` |  |
| `"issue_total"` |  |
| `"issues"` |  |
| `"limit"` |  |
| `"metric"` |  |
| `"offset"` |  |
| `"warmup_runs"` |  |
| `"warning_total"` |  |
| `"warnings"` |  |

Operations: List.

API path: `/api/admin/agent-health/details`

#### AgentPost

| Field | Description |
| --- | --- |
| `"comments"` |  |
| `"error_message"` |  |
| `"id"` |  |
| `"likes"` |  |
| `"product_id"` |  |
| `"results"` |  |
| `"scheduled_datetime"` |  |
| `"source_type"` |  |
| `"status"` |  |
| `"user_email"` |  |
| `"user_id"` |  |
| `"user_name"` |  |
| `"video_id"` |  |
| `"video_url"` |  |
| `"views"` |  |

Operations: List.

API path: `/api/admin/agents/{agent_id}/posts`

#### AgentStat

| Field | Description |
| --- | --- |
| `"agents_needed"` |  |
| `"dedicated_agents"` |  |
| `"shared_agents"` |  |
| `"total_agents"` |  |

Operations: Load.

API path: `/api/admin/agents/stats`

#### AgentSummary

| Field | Description |
| --- | --- |
| `"agent_count"` |  |
| `"favicon_url"` |  |
| `"product_id"` |  |
| `"product_name"` |  |

Operations: List.

API path: `/api/enterprise/agents/summary`

#### AgentsSummary

| Field | Description |
| --- | --- |
| `"total_agents"` |  |
| `"total_agents_count_sum"` |  |

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
| `"agent"` |  |
| `"comment"` |  |
| `"created_at"` |  |
| `"id"` |  |
| `"product_id"` |  |
| `"queue_position"` |  |
| `"results"` |  |
| `"scheduled_datetime"` |  |
| `"scraped_posts"` |  |
| `"source_type"` |  |
| `"status"` |  |
| `"updated_at"` |  |
| `"video"` |  |

Operations: List.

API path: `/api/analytics/posts`

#### AnalyzeProduct

| Field | Description |
| --- | --- |
| `"instagram_username"` |  |
| `"message"` |  |
| `"status"` |  |
| `"url"` |  |

Operations: Create.

API path: `/api/scraper/analyze-product`

#### AssignAgent

| Field | Description |
| --- | --- |
| `"agent"` | Agent information for V6. |
| `"assignment"` | Assignment information for V6. |
| `"mock_agents"` |  |
| `"onboarding_data_id"` | UUID of the OnboardingData record |

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
| `"can_enable_repost"` |  |
| `"effective_posted_video_reuse_percent"` |  |
| `"enabled_video_types"` | List of enabled video type filters |
| `"is_enabled"` |  |
| `"lock_video_regeneration_controls"` |  |
| `"membership_tier"` |  |
| `"posted_video_reuse_percent"` |  |
| `"product_id"` |  |
| `"repost_source"` |  |
| `"videos_per_day"` |  |

Operations: Load, Update.

API path: `/api/schedule/settings`

#### BulkTikTokStatsUpdate

| Field | Description |
| --- | --- |
| `"failedIds"` |  |
| `"updatedCount"` |  |
| `"updates"` |  |

Operations: Update.

API path: `/api/upload-post-agents/bulk/tiktok-stats`

#### Carousel

| Field | Description |
| --- | --- |
| `"agent_id"` |  |
| `"agent_name"` |  |
| `"audit_created_at"` |  |
| `"audit_snapshot_sha256"` |  |
| `"caption"` |  |
| `"comments"` |  |
| `"fit_score"` |  |
| `"format"` |  |
| `"formula"` |  |
| `"formula_id"` |  |
| `"formula_name"` |  |
| `"generation"` |  |
| `"id"` |  |
| `"image_prompt"` |  |
| `"likes"` |  |
| `"main_prompt"` |  |
| `"metrics_updated_at"` |  |
| `"post_url"` |  |
| `"profile_url"` |  |
| `"qa"` |  |
| `"qa_status"` |  |
| `"qa_verdict"` |  |
| `"quality_score"` |  |
| `"queue_id"` |  |
| `"relevance_score"` |  |
| `"scheduled_at"` |  |
| `"slide_count"` |  |
| `"slides"` |  |
| `"source"` |  |
| `"status"` |  |
| `"thumbnail_url"` |  |
| `"title"` |  |
| `"video_id"` |  |
| `"views"` |  |

Operations: Create, List, Load.

API path: `/api/carousel/{video_id}/finalize`

#### CarouselAgentDetail

| Field | Description |
| --- | --- |
| `"agent_id"` |  |
| `"agent_name"` |  |
| `"connection_status"` |  |
| `"followers"` |  |
| `"following"` |  |
| `"metrics_updated_at"` |  |
| `"phone_admin_status"` |  |
| `"profile_likes"` |  |
| `"profile_url"` |  |
| `"warmup_days"` |  |
| `"warmup_hold_until"` |  |
| `"warmup_status"` |  |

Operations: Load.

API path: `/api/admin/carousels/agents/{agent_id}`

#### CarouselStatus

| Field | Description |
| --- | --- |
| `"caption"` |  |
| `"error"` |  |
| `"id"` |  |
| `"image_model"` |  |
| `"image_provider"` |  |
| `"image_task_id"` |  |
| `"image_url"` |  |
| `"index"` |  |
| `"prompt"` |  |
| `"status"` |  |

Operations: List.

API path: `/api/carousel/{video_id}/status`

#### Chat

| Field | Description |
| --- | --- |
| `"idempotencyKey"` |  |
| `"message"` |  |
| `"sessionId"` |  |

Operations: Create.

API path: `/api/chat/sessions/{session_id}/messages`

#### ChatHistory

| Field | Description |
| --- | --- |
| `"chatSubVariant"` |  |
| `"createdAt"` |  |
| `"messages"` |  |
| `"model"` |  |
| `"onboardingDataId"` |  |
| `"routeRecommendation"` |  |
| `"salesStage"` |  |
| `"selectedPlan"` |  |
| `"session"` |  |
| `"sessionId"` |  |
| `"status"` |  |
| `"updatedAt"` |  |

Operations: Create, Load.

API path: `/api/chat/sessions`

#### ChatSession

| Field | Description |
| --- | --- |
| `"chatSubVariant"` |  |
| `"createdAt"` |  |
| `"model"` |  |
| `"plan"` |  |
| `"route"` |  |
| `"routeRecommendation"` |  |
| `"salesStage"` |  |
| `"selectedPlan"` |  |
| `"sessionId"` |  |
| `"status"` |  |
| `"updatedAt"` |  |

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
| `"account_daily_limit"` |  |
| `"account_weekly_limit"` |  |
| `"action"` |  |
| `"active_days_per_week"` |  |
| `"agent_id"` |  |
| `"allowlist"` |  |
| `"analysis_daily_limit"` |  |
| `"analysis_model"` |  |
| `"analysis_reservation_usd"` |  |
| `"approved_markets"` |  |
| `"brand_forward_enabled"` |  |
| `"briefs"` |  |
| `"candidate_only"` |  |
| `"claims"` |  |
| `"cohort_removal_threshold"` |  |
| `"daily_cost_ceiling_usd"` |  |
| `"delivery_mode"` |  |
| `"disclosure_mode"` |  |
| `"disclosure_template"` |  |
| `"draft_options_count"` |  |
| `"draft_review_reservation_usd"` |  |
| `"exceptional_daily_cap_approved"` |  |
| `"execution_enabled"` |  |
| `"experiment_styles"` |  |
| `"inventory_factor"` |  |
| `"keywords"` |  |
| `"max_duration_seconds"` |  |
| `"metadata_pass_rate"` |  |
| `"min_interval_minutes"` |  |
| `"mode"` |  |
| `"monitored_creators"` |  |
| `"platform"` |  |
| `"platform_permission_evidence"` |  |
| `"policy_approved_by"` |  |
| `"policy_expires_at"` |  |
| `"policy_version"` |  |
| `"product_daily_limit"` |  |
| `"qualification_rate"` |  |
| `"raw_daily_limit"` |  |
| `"raw_result_reservation_usd"` |  |
| `"reason"` |  |
| `"replies_enabled"` |  |
| `"request_key"` |  |
| `"reviewer_model"` |  |
| `"scan_interval_hours"` |  |
| `"search_change_reason"` |  |
| `"search_effective_at"` |  |
| `"shadow_sample_limit"` |  |
| `"spent_seconds"` |  |
| `"task_ttl_hours"` |  |
| `"top_comment_analysis_enabled"` |  |
| `"writer_model"` |  |

Operations: Create, Load, Update.

API path: `/api/comments/products/{product_id}/campaign/sources/{source_id}/resolve`

#### CompleteChatCheckout

| Field | Description |
| --- | --- |
| `"message"` |  |
| `"onboarding_data_id"` |  |
| `"product_id"` |  |
| `"ready"` |  |
| `"success"` |  |

Operations: Create.

API path: `/api/onboarding-v6/complete-chat-checkout`

#### CreateBlackoutSora2Video

| Field | Description |
| --- | --- |
| `"main_prompt"` |  |
| `"media_asset_id"` |  |
| `"product_id"` |  |
| `"requires_polling"` |  |
| `"video"` |  |

Operations: Create.

API path: `/api/core/create-blackout-sora2-video`

#### CreateCarousel

| Field | Description |
| --- | --- |
| `"copy_mode"` |  |
| `"expected_owner_user_id"` |  |
| `"expected_product_id"` |  |
| `"expected_product_name"` |  |
| `"image_model"` |  |
| `"mention_product"` |  |
| `"message"` |  |
| `"num_slides"` |  |
| `"owner_user_id"` |  |
| `"product_id"` | Product ID to use. |
| `"product_name"` |  |
| `"product_placement"` |  |
| `"request_id"` |  |
| `"script_style_custom"` |  |
| `"script_style_id"` |  |
| `"selected_hook"` |  |
| `"status"` |  |
| `"success"` |  |
| `"template_id"` |  |
| `"video_id"` |  |
| `"visual_style_custom"` |  |
| `"visual_style_id"` |  |

Operations: Create.

API path: `/api/carousel/create-from-exact`

#### CreateProduct

| Field | Description |
| --- | --- |
| `"onboarding_data_id"` | UUID of the OnboardingData record |
| `"product_id"` |  |
| `"success"` |  |
| `"videos_queued"` |  |

Operations: Create.

API path: `/api/onboarding-v6/create-product`

#### CreateResetProductV6

| Field | Description |
| --- | --- |
| `"agents_transferred"` |  |
| `"credits_deducted"` |  |
| `"onboarding_data_id"` |  |
| `"product_id"` |  |
| `"remaining_credits"` |  |
| `"success"` |  |
| `"videos_queued"` |  |

Operations: Create.

API path: `/api/reset-product/create-v6`

#### CreateSora2Video

| Field | Description |
| --- | --- |
| `"image_prompt"` |  |
| `"main_prompt"` |  |
| `"model"` |  |
| `"requires_polling"` |  |
| `"seconds"` |  |
| `"size"` |  |
| `"video"` |  |

Operations: Create.

API path: `/api/core/create-sora2-video`

#### CreateVariation

| Field | Description |
| --- | --- |
| `"hook_duration"` |  |
| `"media_asset_id"` |  |
| `"message"` |  |
| `"product_id"` |  |
| `"prompt"` |  |
| `"task_id"` |  |
| `"video_id"` |  |

Operations: Create.

API path: `/api/video-variation/create-hook`

#### Customer

| Field | Description |
| --- | --- |
| `"account_type"` |  |
| `"assigned_agents_count"` |  |
| `"email"` |  |
| `"id"` |  |
| `"is_migrated"` |  |

Operations: List.

API path: `/api/admin/customer-health/customers`

#### CustomerHealth

| Field | Description |
| --- | --- |
| `"assigned_agents"` |  |
| `"available_dates"` |  |
| `"date"` |  |
| `"email"` |  |
| `"entries"` |  |
| `"id"` |  |
| `"performance_overview"` |  |
| `"platform_coverage_summary"` |  |
| `"user_id"` |  |

Operations: Load.

API path: `/api/admin/customer-health/{user_id}`

#### CustomerHealthAllCustomersItem

| Field | Description |
| --- | --- |
| `"account_type"` |  |
| `"assigned_agents_count"` |  |
| `"daily_stats"` |  |
| `"email"` |  |
| `"is_migrated"` |  |
| `"total_views"` |  |
| `"user_id"` |  |

Operations: List.

API path: `/api/admin/customer-health/all-customers`

#### CustomerHealthViewsSummary

| Field | Description |
| --- | --- |
| `"average_views_per_result"` |  |
| `"date"` |  |
| `"end_date"` |  |
| `"paid_users_count"` |  |
| `"posted_results"` |  |
| `"range"` |  |
| `"start_date"` |  |
| `"top_users"` |  |
| `"total_views"` |  |
| `"trend"` |  |
| `"trend_granularity"` |  |
| `"user_email"` |  |
| `"user_id"` |  |
| `"users_with_views"` |  |

Operations: List.

API path: `/api/admin/customer-health/views`

#### Daily

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Create.

API path: `/api/carousel/daily/{product_id}/plan`

#### DailyStatus

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Load.

API path: `/api/carousel/daily/{product_id}/status`

#### DedicatedAgentsDashboard

| Field | Description |
| --- | --- |
| `"active_connections"` |  |
| `"assigned_user_id"` |  |
| `"assigned_user_ids"` |  |
| `"bio"` |  |
| `"id"` |  |
| `"instagram_url"` |  |
| `"is_active"` |  |
| `"last_admin_synced_at"` |  |
| `"name"` |  |
| `"role"` |  |
| `"tiktok_stats"` |  |
| `"tiktok_url"` |  |
| `"today_failed_entries"` |  |
| `"today_stats"` |  |
| `"upload_post_platforms"` |  |
| `"upload_post_profile"` |  |
| `"yesterday_failed_entries"` |  |
| `"yesterday_stats"` |  |
| `"youtube_url"` |  |

Operations: List.

API path: `/api/admin/agents/dedicated-dashboard`

#### EnterpriseAgent

| Field | Description |
| --- | --- |
| `"count"` |  |
| `"product_id"` |  |
| `"source_product_id"` |  |
| `"target_product_id"` |  |

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
| `"instagram_username"` |  |
| `"message"` |  |
| `"status"` |  |
| `"url"` |  |

Operations: Create.

API path: `/api/scraper/extract_v2`

#### FailedPost

| Field | Description |
| --- | --- |
| `"agent_id"` |  |
| `"agent_name"` |  |
| `"agent_platforms"` |  |
| `"error_message"` |  |
| `"id"` |  |
| `"product_id"` |  |
| `"results"` |  |
| `"scheduled_datetime"` |  |
| `"source_type"` |  |
| `"status"` |  |
| `"user_email"` |  |
| `"user_id"` |  |
| `"user_name"` |  |
| `"video_id"` |  |
| `"video_url"` |  |

Operations: List.

API path: `/api/admin/failed-posts`

#### File

| Field | Description |
| --- | --- |
| `"file"` |  |

Operations: Create.

API path: `/api/file-upload`

#### GenerateBlackoutSora2Prompt

| Field | Description |
| --- | --- |
| `"media_asset_id"` |  |
| `"product_id"` |  |
| `"prompt"` |  |

Operations: Create.

API path: `/api/core/generate-blackout-sora2-prompt`

#### GeneratePomelliDemo

| Field | Description |
| --- | --- |
| `"current_demo_count"` |  |
| `"max_demos"` |  |
| `"message"` |  |
| `"product_id"` | UUID of the Product |
| `"success"` |  |

Operations: Create.

API path: `/api/onboarding-v6/generate-pomelli-demo`

#### GeneratePrompt

| Field | Description |
| --- | --- |
| `"hook_duration"` |  |
| `"media_asset_id"` |  |
| `"media_asset_url"` |  |
| `"prompt"` |  |

Operations: Create.

API path: `/api/video-variation/generate-prompt`

#### GenerateSora2Prompt

| Field | Description |
| --- | --- |
| `"prompt"` |  |

Operations: Load.

API path: `/api/core/generate-sora2-prompt`

#### Healthrx

| Field | Description |
| --- | --- |
| `"account_id"` |  |
| `"action"` |  |
| `"agent_id"` |  |
| `"attempt"` |  |
| `"avatar_present"` |  |
| `"benchmark_set"` |  |
| `"commercial"` |  |
| `"commercial_license_evidence"` |  |
| `"content_id"` |  |
| `"dimensions"` |  |
| `"duration_seconds"` |  |
| `"evidence"` |  |
| `"evidence_urls"` |  |
| `"external_key"` |  |
| `"format"` |  |
| `"includes_all_attempt_costs"` |  |
| `"input_specification"` |  |
| `"kind"` |  |
| `"level"` |  |
| `"measured_at"` |  |
| `"model_version"` |  |
| `"paid_campaign_id"` |  |
| `"parent_content_id"` |  |
| `"paused"` |  |
| `"pillar"` |  |
| `"profile"` |  |
| `"promotion_evidence"` |  |
| `"provider"` |  |
| `"provider_invoice_evidence"` |  |
| `"reason"` |  |
| `"reference_version"` |  |
| `"request_key"` |  |
| `"scope"` |  |
| `"test_variable"` |  |
| `"topic"` |  |
| `"total_cost_usd"` |  |

Operations: Create, Load.

API path: `/api/healthrx/products/{product_id}/accounts/{account_id}/content`

#### InitResetProductV6

| Field | Description |
| --- | --- |
| `"auto_schedule_disabled"` |  |
| `"old_product_id"` |  |
| `"product_id"` |  |
| `"queue_entries_cleared"` |  |
| `"success"` |  |

Operations: Create.

API path: `/api/reset-product/init-v6`

#### Iri

| Field | Description |
| --- | --- |
| `"correlationId"` |  |
| `"idempotencyKey"` |  |
| `"productId"` |  |

Operations: Create.

API path: `/api/iris/connectors/{connector_id}/start`

#### IrisCapability

| Field | Description |
| --- | --- |
| `"capability"` |  |
| `"correlationId"` |  |
| `"errorCode"` |  |
| `"externalProductId"` |  |
| `"externalUserId"` |  |
| `"id"` |  |
| `"idempotencyKey"` |  |
| `"input"` |  |
| `"membershipId"` |  |
| `"message"` |  |
| `"ok"` |  |
| `"platformAccountId"` |  |
| `"platformLinkId"` |  |
| `"productScope"` |  |
| `"requestedBy"` |  |
| `"result"` |  |
| `"retryable"` |  |

Operations: Create.

API path: `/api/platform/capabilities/{capability_name}`

#### IrisChat

| Field | Description |
| --- | --- |
| `"artifacts"` |  |
| `"correlationId"` |  |
| `"idempotencyKey"` |  |
| `"message"` |  |
| `"mode"` |  |
| `"ok"` |  |
| `"pageContext"` |  |
| `"productId"` |  |
| `"runtimeStatus"` |  |
| `"sessionId"` |  |

Operations: Create.

API path: `/api/iris/chat`

#### IrisConnector

| Field | Description |
| --- | --- |
| `"connectors"` |  |

Operations: List.

API path: `/api/iris/connectors`

#### IrisStatus

| Field | Description |
| --- | --- |
| `"connectorsPreview"` |  |
| `"product"` |  |
| `"status"` |  |
| `"tasksPreview"` |  |

Operations: List.

API path: `/api/iris/status`

#### IrisTask

| Field | Description |
| --- | --- |
| `"approvalRequired"` |  |
| `"cadence"` |  |
| `"capability"` |  |
| `"completed"` |  |
| `"description"` |  |
| `"discover"` |  |
| `"productId"` |  |
| `"recurring"` |  |
| `"requiredConnectors"` |  |
| `"title"` |  |

Operations: Create, List.

API path: `/api/iris/tasks`

#### IrisUsage

| Field | Description |
| --- | --- |
| `"eventCount"` |  |
| `"events"` |  |
| `"membershipId"` |  |
| `"productScope"` |  |

Operations: List.

API path: `/api/iris/usage`

#### Landing

| Field | Description |
| --- | --- |
| `"file"` |  |

Operations: Create.

API path: `/api/landings/microhub/testimonial-image/{index}`

#### LandingStat

| Field | Description |
| --- | --- |
| `"landing"` |  |
| `"microhub"` |  |

Operations: Load.

API path: `/api/landings/{slug}/stats`

#### LandingStatus

| Field | Description |
| --- | --- |
| `"errorMessage"` |  |
| `"landingStatus"` |  |
| `"microhubStatus"` |  |

Operations: Load.

API path: `/api/landings/status`

#### LinkInBio

| Field | Description |
| --- | --- |
| `"linkInBioType"` |  |
| `"redirectUrl"` |  |
| `"slug"` |  |

Operations: Load.

API path: `/api/sites/{slug}/link-in-bio`

#### LinkInDm

| Field | Description |
| --- | --- |
| `"linkInDmsType"` |  |
| `"redirectUrl"` |  |
| `"slug"` |  |

Operations: Load.

API path: `/api/sites/{slug}/link-in-dms`

#### LinkInPost

| Field | Description |
| --- | --- |
| `"linkInPostsType"` |  |
| `"redirectUrl"` |  |
| `"showLinkInFirstComment"` |  |
| `"slug"` |  |

Operations: Load.

API path: `/api/sites/{slug}/link-in-posts`

#### LinkUser

| Field | Description |
| --- | --- |
| `"already_linked"` |  |
| `"onboarding_data_id"` | UUID of the OnboardingData record |
| `"success"` |  |

Operations: Create.

API path: `/api/onboarding-v6/link-user`

#### MediaAsset

| Field | Description |
| --- | --- |
| `"category"` |  |
| `"createdAt"` |  |
| `"description"` |  |
| `"file"` |  |
| `"id"` |  |
| `"media_assets"` |  |
| `"onboardingDataId"` |  |
| `"onboarding_data_id"` |  |
| `"productId"` |  |
| `"product_id"` |  |
| `"source"` |  |
| `"type"` |  |
| `"updatedAt"` |  |
| `"url"` |  |
| `"usedAt"` |  |
| `"veo3VideoId"` |  |

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
| `"evidence"` |  |
| `"expected_revision"` |  |
| `"idempotency_key"` |  |
| `"issues"` |  |
| `"reason"` |  |
| `"role"` |  |
| `"scores"` |  |
| `"selected_premise_id"` |  |
| `"stage"` |  |
| `"status"` |  |
| `"subject_hash"` |  |
| `"title"` |  |
| `"verdict"` |  |

Operations: Create, Load, Update.

API path: `/api/microdrama/episodes/{episode_id}/approve`

#### MicrohubPublic

| Field | Description |
| --- | --- |
| `"bio"` |  |
| `"ctaButtonText"` |  |
| `"ctaDescription"` |  |
| `"ctaLink"` |  |
| `"ctaTitle"` |  |
| `"headerImageUrl"` |  |
| `"links"` |  |
| `"name"` |  |
| `"profileImageUrl"` |  |
| `"slug"` |  |
| `"socialLinks"` |  |
| `"testimonials"` |  |

Operations: Load.

API path: `/api/sites/{slug}`

#### OnboardingStatus

| Field | Description |
| --- | --- |
| `"comments"` |  |
| `"cover_image_url"` |  |
| `"id"` |  |
| `"likes"` |  |
| `"platform"` |  |
| `"video_url"` |  |
| `"views"` |  |

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
| `"agents_count"` |  |
| `"assigned_agents_count"` |  |
| `"auto_schedule_enabled"` |  |
| `"credits"` |  |
| `"effective_agents_count"` |  |
| `"email"` |  |
| `"id"` |  |
| `"is_internal_user"` |  |
| `"is_migrated_user"` |  |
| `"membership"` |  |
| `"scheduled_queue_count"` |  |
| `"subscription_details"` |  |
| `"subscription_status"` |  |

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
| `"available_count"` |  |
| `"pc_name"` |  |

Operations: List.

API path: `/api/admin/phone-admin/available-agent-sources`

#### Product

| Field | Description |
| --- | --- |
| `"agent_count"` |  |
| `"agents"` |  |
| `"createdAt"` |  |
| `"demoVideos"` |  |
| `"description"` |  |
| `"favicon_url"` |  |
| `"howItWorks"` |  |
| `"how_it_works"` |  |
| `"id"` |  |
| `"images"` |  |
| `"initial_agents"` |  |
| `"instagramHandle"` |  |
| `"instagram_handle"` |  |
| `"isActive"` |  |
| `"isApp"` |  |
| `"is_active"` |  |
| `"is_app"` |  |
| `"language"` |  |
| `"mediaAssets"` |  |
| `"media_asset_ids"` |  |
| `"media_assets"` |  |
| `"name"` |  |
| `"otherInstructions"` |  |
| `"other_instructions"` |  |
| `"outroVideo"` |  |
| `"pexelsVideos"` |  |
| `"pricing"` |  |
| `"pricingAndOffers"` |  |
| `"pricing_and_offers"` |  |
| `"product_demo_ids"` |  |
| `"product_details"` | Product details for enterprise product creation |
| `"product_id"` |  |
| `"product_name"` |  |
| `"product_url"` |  |
| `"pronunciation"` |  |
| `"regenerate_sora2"` |  |
| `"repostSource"` |  |
| `"repost_source"` |  |
| `"screenshot_url"` |  |
| `"social_post_ids"` |  |
| `"targetAudience"` |  |
| `"target_audience"` |  |
| `"templateProductId"` |  |
| `"tiktokHandle"` |  |
| `"tiktok_handle"` |  |
| `"total_count"` |  |
| `"updatedAt"` |  |
| `"url"` |  |
| `"userId"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/products/{product_id}/validate-social-handle`

#### ProductDashboard

| Field | Description |
| --- | --- |
| `"agents"` |  |
| `"date"` |  |
| `"pagination"` |  |
| `"phone_admin_error"` |  |
| `"products"` |  |
| `"selected_product"` |  |
| `"summary"` |  |

Operations: List.

API path: `/api/admin/products-dashboard`

#### ProductDashboardView

| Field | Description |
| --- | --- |
| `"date"` |  |
| `"views"` |  |

Operations: List.

API path: `/api/admin/products-dashboard/views`

#### ProductDemo

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"description"` |  |
| `"id"` |  |
| `"source"` |  |
| `"type"` |  |
| `"url"` |  |

Operations: List.

API path: `/api/video-variation/product-demos`

#### ProductLanding

| Field | Description |
| --- | --- |
| `"bio"` |  |
| `"commentingOnMyPosts"` |  |
| `"commentingOnOthersPosts"` |  |
| `"ctaButtonText"` |  |
| `"ctaDescription"` |  |
| `"ctaLink"` |  |
| `"ctaTitle"` |  |
| `"dmCommenters"` |  |
| `"dmInitialMessagePrompt"` |  |
| `"dmOngoingResponsePrompt"` |  |
| `"firstCommentTextBeforeLink"` |  |
| `"headerImageUrl"` |  |
| `"id"` |  |
| `"landingHtmlUrl"` |  |
| `"landingLastGeneratedAt"` |  |
| `"landingReferenceScreenshotUrl"` |  |
| `"landingScreenshotUrl"` |  |
| `"landingStatus"` |  |
| `"landingUrl"` |  |
| `"linkInBioType"` |  |
| `"linkInDmsType"` |  |
| `"linkInPostsType"` |  |
| `"links"` |  |
| `"microhubBio"` |  |
| `"microhubCtaButtonText"` |  |
| `"microhubCtaDescription"` |  |
| `"microhubCtaLink"` |  |
| `"microhubCtaTitle"` |  |
| `"microhubHeaderImageUrl"` |  |
| `"microhubLinks"` |  |
| `"microhubName"` |  |
| `"microhubProfileImageUrl"` |  |
| `"microhubScreenshotUrl"` |  |
| `"microhubSocialLinks"` |  |
| `"microhubStatus"` |  |
| `"microhubTestimonials"` |  |
| `"microhubUrl"` |  |
| `"myPostsStylePrompt"` |  |
| `"name"` |  |
| `"othersStylePrompt"` |  |
| `"othersTargetMarketPrompt"` |  |
| `"productLinkSelection"` |  |
| `"productUrl"` |  |
| `"profileImageUrl"` |  |
| `"shortLink"` |  |
| `"shortLinkKeyword"` |  |
| `"showLinkInFirstComment"` |  |
| `"slug"` |  |
| `"socialLinks"` |  |
| `"testimonials"` |  |

Operations: List, Update.

API path: `/api/landings/me`

#### PublicResumeStatus

| Field | Description |
| --- | --- |
| `"can_resume_prelogin"` |  |
| `"content_collection_ready"` |  |
| `"current_step"` |  |
| `"exists"` |  |
| `"flow_variant"` |  |
| `"repost_content_count"` |  |
| `"repost_source"` |  |
| `"requires_repost_content"` |  |
| `"skip_demo"` |  |

Operations: Load.

API path: `/api/onboarding-v6/resume-status-public`

#### ReRollVideo

| Field | Description |
| --- | --- |
| `"queue_id"` |  |
| `"requires_polling"` |  |
| `"skip_credit_check"` |  |
| `"video"` |  |

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
| `"calendlyEventUri"` |  |
| `"calendlyInviteeUri"` |  |
| `"message"` |  |
| `"session"` |  |

Operations: Create.

API path: `/api/chat/sessions/{session_id}/demo-booked`

#### RefreshStat

| Field | Description |
| --- | --- |
| `"date_from"` | Start date to refresh stats for (defaults to yesterday) |
| `"date_to"` | End date to refresh stats for (defaults to date_from) |
| `"entries_found"` |  |
| `"message"` |  |
| `"provider"` | Scraping provider to use |
| `"status"` |  |
| `"summary"` |  |

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
| `"flow_variant"` |  |
| `"onboarding_data_id"` | UUID of existing OnboardingData |
| `"skip_demo"` |  |
| `"status"` |  |
| `"success"` |  |
| `"url"` | New website URL to scrape |

Operations: Create.

API path: `/api/onboarding-v6/retry-scrape`

#### SaveSurvey

| Field | Description |
| --- | --- |
| `"email_sent"` |  |
| `"onboarding_data_id"` | UUID of the OnboardingData record |
| `"success"` |  |
| `"survey"` | Survey response data from frontend. |

Operations: Create.

API path: `/api/onboarding-v6/save-survey`

#### ScanSocial

| Field | Description |
| --- | --- |
| `"instagram_handle"` |  |
| `"onboarding_data_id"` |  |
| `"product_id"` |  |
| `"status"` |  |
| `"success"` |  |
| `"task_id"` |  |
| `"tiktok_handle"` |  |

Operations: Create.

API path: `/api/reset-product/scan-socials`

#### ScanSocialsPublic

| Field | Description |
| --- | --- |
| `"instagram_handle"` | Instagram username/handle to scrape |
| `"message"` |  |
| `"onboarding_data_id"` | UUID of the OnboardingData record |
| `"status"` |  |
| `"success"` |  |
| `"tiktok_handle"` | TikTok username/handle to scrape |

Operations: Create.

API path: `/api/onboarding-v6/scan-socials-public`

#### ScanSocialsStatus

| Field | Description |
| --- | --- |
| `"ads_count"` |  |
| `"onboarding_data_id"` |  |
| `"product_id"` |  |
| `"status"` |  |
| `"task_id"` |  |

Operations: Load.

API path: `/api/video-variation/scan-socials/status`

#### ScheduleV2

| Field | Description |
| --- | --- |
| `"agent"` |  |
| `"comment"` |  |
| `"created_at"` |  |
| `"id"` |  |
| `"instagram_posted_by"` |  |
| `"instagram_posted_url"` |  |
| `"instagram_scraped_social_post_id"` |  |
| `"is_instagram_posted"` |  |
| `"is_tiktok_posted"` |  |
| `"is_youtube_posted"` |  |
| `"reorders"` |  |
| `"results"` |  |
| `"scheduled_datetime"` |  |
| `"source_type"` |  |
| `"status"` |  |
| `"tiktok_posted_by"` |  |
| `"tiktok_posted_url"` |  |
| `"tiktok_scraped_social_post_id"` |  |
| `"video"` |  |
| `"video_id"` |  |
| `"youtube_posted_by"` |  |
| `"youtube_posted_url"` |  |
| `"youtube_scraped_social_post_id"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/schedule/queue/add`

#### Scrape

| Field | Description |
| --- | --- |
| `"old_product_id"` |  |
| `"onboarding_data_id"` |  |
| `"status"` |  |
| `"success"` |  |
| `"url"` |  |

Operations: Create.

API path: `/api/reset-product/scrape`

#### ScrapeWebsitePublic

| Field | Description |
| --- | --- |
| `"flow_variant"` |  |
| `"onboarding_data_id"` | UUID of created OnboardingData |
| `"skip_demo"` | True for self-serve users (skip demo booking) |
| `"status"` |  |
| `"success"` |  |
| `"url"` | Website URL to scrape |

Operations: Create.

API path: `/api/onboarding-v6/scrape-website-public`

#### ScrapedData

| Field | Description |
| --- | --- |
| `"description"` |  |
| `"homepageVideoUrl"` |  |
| `"howItWorks"` |  |
| `"imageUrls"` |  |
| `"instagram_username"` |  |
| `"mediaAssets"` |  |
| `"name"` |  |
| `"pricingAndOffers"` |  |
| `"targetAudience"` |  |
| `"url"` |  |

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
| `"onboarding_data_id"` | UUID of the OnboardingData record |
| `"redirect_to_stripe"` |  |
| `"stripe_checkout_url"` |  |
| `"success"` |  |

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
| `"bucket"` |  |
| `"domain_type"` |  |
| `"dominant_domain"` |  |
| `"engine"` |  |
| `"evidence"` |  |
| `"geo"` |  |
| `"language"` |  |
| `"primary_url"` |  |
| `"prompt_text"` |  |
| `"run_week"` |  |
| `"secondary_urls"` |  |

Operations: List.

API path: `/api/seo/ai-mentions`

#### SeoBacklink

| Field | Description |
| --- | --- |
| `"anchor_text"` |  |
| `"first_seen"` |  |
| `"referring_domain"` |  |
| `"status"` |  |
| `"target_page"` |  |

Operations: List.

API path: `/api/seo/backlinks`

#### SeoKeyword

| Field | Description |
| --- | --- |
| `"blog_page"` |  |
| `"current_position"` |  |
| `"keyword"` |  |
| `"keyword_group"` |  |
| `"position_change"` |  |

Operations: List.

API path: `/api/seo/keywords`

#### SeoOverview

| Field | Description |
| --- | --- |
| `"clicks"` |  |
| `"ctr"` |  |
| `"date"` |  |
| `"impressions"` |  |
| `"position"` |  |

Operations: List.

API path: `/api/seo/overview`

#### SeoTraffic

| Field | Description |
| --- | --- |
| `"end_date"` |  |
| `"series"` |  |
| `"site_url"` |  |
| `"start_date"` |  |
| `"top_countries"` |  |
| `"top_pages"` |  |
| `"top_queries"` |  |
| `"totals"` |  |

Operations: List.

API path: `/api/seo/traffic`

#### ShareAccessLink

| Field | Description |
| --- | --- |
| `"share_token"` |  |
| `"share_url"` |  |

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
| `"caption"` |  |
| `"id"` |  |
| `"prompt"` |  |

Operations: Create, Update.

API path: `/api/carousel/{video_id}/slides/{slide_index}/regenerate`

#### SlugValidation

| Field | Description |
| --- | --- |
| `"reason"` |  |
| `"valid"` |  |

Operations: Load.

API path: `/api/landings/validate-slug/{slug}`

#### Social

| Field | Description |
| --- | --- |
| `"code"` |  |
| `"code_verifier"` |  |
| `"createdAt"` |  |
| `"id"` |  |
| `"platform"` |  |
| `"platformUserId"` |  |
| `"updatedAt"` |  |
| `"userId"` |  |
| `"username"` |  |

Operations: Create, List, Load, Remove.

API path: `/social/instagram/exchange`

#### SocialScanPreview

| Field | Description |
| --- | --- |
| `"instagram_handle"` | Instagram username/handle to scrape |
| `"posts"` |  |
| `"success"` |  |
| `"tiktok_handle"` | TikTok username/handle to scrape |

Operations: Create.

API path: `/api/social-scan/preview`

#### SocialScanProcess

| Field | Description |
| --- | --- |
| `"posts"` |  |
| `"product_id"` |  |
| `"success"` |  |
| `"task_id"` |  |

Operations: Create.

API path: `/api/social-scan/process`

#### SocialScanSave

| Field | Description |
| --- | --- |
| `"media_asset_ids"` |  |
| `"posts"` |  |
| `"product_id"` |  |
| `"success"` |  |

Operations: Create.

API path: `/api/social-scan/save`

#### Sora2Avatar

| Field | Description |
| --- | --- |
| `"avatar_frame_url"` |  |
| `"created_at"` |  |
| `"current_step"` |  |
| `"headshot_url"` |  |
| `"id"` |  |
| `"logs"` |  |
| `"prompt_key"` |  |
| `"run_output_dir"` |  |
| `"selected_age_bucket"` |  |
| `"selected_gender"` |  |
| `"selected_prompt"` |  |
| `"selected_race"` |  |
| `"sora2_cameo_handle"` |  |
| `"sora2_cameo_id"` |  |
| `"sora2_cameo_link"` |  |
| `"sora2_display_name"` |  |
| `"sora2_task_id"` |  |
| `"sora2_video_url"` |  |
| `"updated_at"` |  |

Operations: Create, List, Load, Update.

API path: `/api/admin/sora2-avatars`

#### Sora2AvatarAssetUpload

| Field | Description |
| --- | --- |
| `"avatar_id"` |  |
| `"file"` |  |
| `"run_output_dir"` |  |
| `"s3_key"` |  |
| `"upload_type"` |  |
| `"url"` |  |

Operations: Create.

API path: `/api/admin/sora2-avatars/upload-asset`

#### Sora2AvatarStat

| Field | Description |
| --- | --- |
| `"by_age_bucket"` |  |
| `"by_gender"` |  |
| `"by_prompt_key"` |  |
| `"by_race"` |  |
| `"completed_avatars"` |  |
| `"completion_rate"` |  |
| `"total_avatars"` |  |

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
| `"message"` |  |
| `"status"` |  |
| `"task_id"` |  |

Operations: Create.

API path: `/api/admin/customer-health/backfill`

#### StatsRefreshIssue

| Field | Description |
| --- | --- |
| `"aged_over_24h"` |  |
| `"agent_id"` |  |
| `"agent_name_snapshot"` |  |
| `"first_detected_at"` |  |
| `"id"` |  |
| `"last_detected_at"` |  |
| `"last_refresh_completed_at"` |  |
| `"last_seen_run_id"` |  |
| `"latest_error_message"` |  |
| `"next_retry_at"` |  |
| `"platform"` |  |
| `"post_method"` |  |
| `"post_url"` |  |
| `"posted_date_et"` |  |
| `"product_id"` |  |
| `"product_name_snapshot"` |  |
| `"reason_code"` |  |
| `"resolved_at"` |  |
| `"retry_count"` |  |
| `"schedule_queue_id"` |  |
| `"scheduled_datetime_utc"` |  |
| `"stale_after_sla"` |  |
| `"status"` |  |
| `"user_email_snapshot"` |  |
| `"user_id"` |  |

Operations: List.

API path: `/api/admin/customer-health/issues`

#### StatsRefreshOverview

| Field | Description |
| --- | --- |
| `"active_run"` |  |
| `"aged_over_24h"` |  |
| `"backlog_preview"` |  |
| `"coverage_percent"` |  |
| `"customer_counts"` |  |
| `"date"` |  |
| `"generated_at"` |  |
| `"method_counts"` |  |
| `"platform_counts"` |  |
| `"platform_units_resolved"` |  |
| `"platform_units_total"` |  |
| `"platform_units_unresolved"` |  |
| `"posted_entries"` |  |
| `"reason_counts"` |  |
| `"sla_deadline_et"` |  |
| `"stale_after_sla"` |  |
| `"top_affected_customers"` |  |

Operations: List.

API path: `/api/admin/customer-health/overview`

#### StatsRefreshRunSummary

| Field | Description |
| --- | --- |
| `"celery_task_id"` |  |
| `"completed_at"` |  |
| `"entries_failed"` |  |
| `"entries_skipped"` |  |
| `"entries_total"` |  |
| `"entries_updated"` |  |
| `"error_summary_json"` |  |
| `"id"` |  |
| `"issues_opened"` |  |
| `"issues_resolved"` |  |
| `"platform_units_resolved"` |  |
| `"platform_units_total"` |  |
| `"platform_units_unresolved"` |  |
| `"platform_updates_via_profile"` |  |
| `"platform_updates_via_url"` |  |
| `"provider"` |  |
| `"refresh_trigger"` |  |
| `"requested_by_email"` |  |
| `"run_type"` |  |
| `"started_at"` |  |
| `"status"` |  |
| `"target_date_et"` |  |
| `"users_count"` |  |

Operations: List.

API path: `/api/admin/customer-health/runs`

#### StatsRefreshTaskTrigger

| Field | Description |
| --- | --- |
| `"message"` |  |
| `"status"` |  |
| `"target_date"` |  |
| `"task_id"` |  |
| `"users_count"` |  |

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
| `"commentDisabled"` |  |
| `"creatorAvatarUrl"` |  |
| `"creatorNickname"` |  |
| `"creatorUsername"` |  |
| `"duetDisabled"` |  |
| `"maxVideoPostDurationSec"` |  |
| `"privacyLevelOptions"` |  |
| `"stitchDisabled"` |  |

Operations: List.

API path: `/social/tiktok/creator-info`

#### TopPost

| Field | Description |
| --- | --- |
| `"comments"` |  |
| `"id"` |  |
| `"likes"` |  |
| `"platforms"` |  |
| `"scheduled_datetime"` |  |
| `"user_email"` |  |
| `"user_id"` |  |
| `"views"` |  |

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
| `"accountType"` |  |
| `"activatedByAdminAt"` |  |
| `"activatedByAdminId"` |  |
| `"agents"` |  |
| `"agentsCount"` |  |
| `"attribution"` |  |
| `"avatarImageUrl"` |  |
| `"avatarVoiceUrl"` |  |
| `"createdAt"` |  |
| `"credits"` |  |
| `"email"` |  |
| `"googleId"` |  |
| `"hasSeenScheduleWelcome"` |  |
| `"id"` |  |
| `"industry"` |  |
| `"instagramId"` |  |
| `"isActivatedByAdmin"` |  |
| `"isAdmin"` |  |
| `"isInternalUser"` |  |
| `"isMigrated"` |  |
| `"isResettingProduct"` |  |
| `"membership"` |  |
| `"name"` |  |
| `"partnerDirectLoginDisabled"` |  |
| `"partnerExternalUserId"` |  |
| `"partnerPolicyCode"` |  |
| `"partnerSource"` |  |
| `"picture"` |  |
| `"stripeCustomerId"` |  |
| `"stripeSubscriptionId"` |  |
| `"subscriptionCurrentPeriodEnd"` |  |
| `"subscriptionStatus"` |  |
| `"totalCount"` |  |
| `"updatedAt"` |  |
| `"userId"` |  |

Operations: Load, Update.

API path: `/api/upload-post-agents/user/{user_id}`

#### UserAgent

| Field | Description |
| --- | --- |
| `"agent"` |  |
| `"assigned_at"` |  |
| `"assignment_id"` |  |
| `"expires_at"` |  |
| `"id"` |  |
| `"status"` |  |

Operations: Create, List.

API path: `/api/admin/users/{user_id}/agents`

#### UserHealthDetail

| Field | Description |
| --- | --- |
| `"account_type"` |  |
| `"activated"` |  |
| `"activated_by_admin_at"` |  |
| `"activated_by_admin_id"` |  |
| `"admin_notes"` |  |
| `"agents_count"` |  |
| `"assigned_agents"` |  |
| `"assigned_agents_count"` |  |
| `"assigned_agents_preview_limit"` |  |
| `"assigned_agents_truncated"` |  |
| `"auto_schedule_enabled"` |  |
| `"comments_expected_per_day"` |  |
| `"comments_fix_block_reason"` |  |
| `"comments_fix_ready"` |  |
| `"comments_today_failed"` |  |
| `"comments_today_posted"` |  |
| `"comments_today_scheduled"` |  |
| `"comments_yesterday_failed"` |  |
| `"comments_yesterday_posted"` |  |
| `"comments_yesterday_total"` |  |
| `"created_at"` |  |
| `"credits"` |  |
| `"effective_posted_video_reuse_percent"` |  |
| `"email"` |  |
| `"expected_agents_count"` |  |
| `"id"` |  |
| `"is_activated_by_admin"` |  |
| `"is_admin"` |  |
| `"is_bookmarked"` |  |
| `"is_internal_user"` |  |
| `"is_migrated"` |  |
| `"landing_slug"` |  |
| `"landing_status"` |  |
| `"landing_url"` |  |
| `"membership"` |  |
| `"microhub_status"` |  |
| `"microhub_url"` |  |
| `"name"` |  |
| `"onboarding_flow"` |  |
| `"posted_video_reuse_percent"` |  |
| `"product_id"` |  |
| `"product_name"` |  |
| `"product_url"` |  |
| `"subscription_status"` |  |
| `"survey_data"` |  |
| `"today_failed"` |  |
| `"today_posted"` |  |
| `"today_scheduled"` |  |
| `"tomorrow_capacity"` |  |
| `"tomorrow_scheduled"` |  |
| `"videos_completed"` |  |
| `"videos_failed"` |  |
| `"videos_pending"` |  |
| `"videos_stale"` |  |
| `"videos_total"` |  |
| `"yesterday_failed"` |  |
| `"yesterday_failed_entries"` |  |
| `"yesterday_posted"` |  |
| `"yesterday_total"` |  |

Operations: List.

API path: `/api/admin/users/{user_id}/health-detail`

#### UserWithAvatarSubmission

| Field | Description |
| --- | --- |
| `"avatar_image_url"` |  |
| `"avatar_voice_url"` |  |
| `"created_at"` |  |
| `"email"` |  |
| `"id"` |  |
| `"name"` |  |

Operations: List.

API path: `/api/admin/users/avatar-submissions`

#### UsersHealth

| Field | Description |
| --- | --- |
| `"account_type"` |  |
| `"admin_notes"` |  |
| `"agents_count"` |  |
| `"agents_health"` |  |
| `"agents_issue"` |  |
| `"assigned_agents_count"` |  |
| `"auto_schedule_enabled"` |  |
| `"auto_schedule_health"` |  |
| `"auto_schedule_issue"` |  |
| `"auto_schedule_today_health"` |  |
| `"auto_schedule_today_issue"` |  |
| `"created_at"` |  |
| `"email"` |  |
| `"expected_agents_count"` |  |
| `"id"` |  |
| `"is_bookmarked"` |  |
| `"is_internal_user"` |  |
| `"is_migrated"` |  |
| `"membership"` |  |
| `"name"` |  |
| `"posts_health"` |  |
| `"posts_issue"` |  |
| `"posts_today_health"` |  |
| `"posts_today_issue"` |  |
| `"subscription_status"` |  |
| `"today_expected_count"` |  |
| `"today_failed_count"` |  |
| `"today_scheduled_count"` |  |
| `"today_total_count"` |  |
| `"tomorrow_expected_count"` |  |
| `"tomorrow_scheduled_count"` |  |
| `"yesterday_failed_count"` |  |
| `"yesterday_total_count"` |  |

Operations: List.

API path: `/api/admin/users-health`

#### Video

| Field | Description |
| --- | --- |
| `"agent_id"` |  |
| `"bookmarked"` |  |
| `"captions"` |  |
| `"carousel_data"` |  |
| `"created_at"` |  |
| `"duration"` |  |
| `"generation_status"` |  |
| `"id"` |  |
| `"image_prompt"` |  |
| `"is_onboarding"` |  |
| `"is_template"` |  |
| `"main_avatar"` |  |
| `"main_prompt"` |  |
| `"media_asset_id"` |  |
| `"product_id"` |  |
| `"reel_id"` |  |
| `"thumbnail_url"` |  |
| `"title"` |  |
| `"type"` |  |
| `"updated_at"` |  |
| `"url"` |  |
| `"user_id"` |  |
| `"video_id"` |  |

Operations: Create, Load, Remove, Update.

API path: `/videos/{video_id}/retry-video`

#### VideoRemixerWorker

| Field | Description |
| --- | --- |
| `"captions_ass"` |  |
| `"captions_vtt"` |  |
| `"cost_usd"` |  |
| `"error"` |  |
| `"file"` |  |
| `"kinds"` |  |
| `"lease_token"` |  |
| `"limit"` |  |
| `"manifest"` |  |
| `"model"` |  |
| `"processing_seconds"` |  |
| `"prompt_version"` |  |
| `"result"` |  |
| `"thumbnail"` |  |
| `"tier"` |  |
| `"worker_id"` |  |

Operations: Create.

API path: `/api/admin/video-remixer/worker/jobs/{identifier}/fail`

#### WatchdogRecovery

| Field | Description |
| --- | --- |
| `"item_id"` |  |
| `"passed"` |  |
| `"table"` |  |

Operations: Create, Load.

API path: `/api/v1/watchdog/recovery-queue/resolve`

#### WinningAd

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"description"` |  |
| `"id"` |  |
| `"source"` |  |
| `"type"` |  |
| `"url"` |  |

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
| `"account_mode"` |  |
| `"active_queue_count"` |  |
| `"assigned_agent"` |  |
| `"created_at"` |  |
| `"email"` |  |
| `"external_user_id"` |  |
| `"membership"` |  |
| `"policy_code"` |  |
| `"product_id"` |  |
| `"product_name"` |  |
| `"provisioning_status"` |  |
| `"subscription_status"` |  |
| `"updated_at"` |  |
| `"user_id"` |  |

Operations: List.

API path: `/api/admin/zerohuman/accounts`



## Entities


### Activate

Create an instance: `activate := client.Activate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activated_at` | `any` |  |
| `message` | `string` |  |
| `success` | `bool` |  |

#### Example: Create

```go
result, err := client.Activate(nil).Create(map[string]any{
    "user_id": "example_user_id",
    "message": "example_message",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### ActivateUser

Create an instance: `activateUser := client.ActivateUser(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activated_at` | `any` |  |
| `message` | `string` |  |
| `success` | `bool` |  |

#### Example: Create

```go
result, err := client.ActivateUser(nil).Create(map[string]any{
    "user_id": "example_user_id",
    "message": "example_message",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### ActiveOnboarding

Create an instance: `activeOnboarding := client.ActiveOnboarding(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_step` | `any` |  |
| `has_active_onboarding` | `bool` |  |
| `onboarding_data_id` | `string` |  |

#### Example: Load

```go
activeOnboarding, err := client.ActiveOnboarding(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(activeOnboarding.(sdk.Entity).Data()) // the loaded entity's record
```


### Admin

Create an instance: `admin := client.Admin(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apply` | `bool` | Apply safe canonical or clean-only URL updates |
| `count` | `int` |  |
| `created_at` | `string` |  |
| `date_from` | `any` |  |
| `date_to` | `any` |  |
| `email` | `string` |  |
| `id` | `string` |  |
| `include_failed` | `bool` |  |
| `include_pending` | `bool` |  |
| `include_records` | `bool` | Include full per-field audit records in the response |
| `issue_ids` | `any` |  |
| `only_active` | `bool` | Limit the audit to active agents |
| `platform` | `any` |  |
| `posting_method` | `any` |  |
| `product_id` | `string` |  |
| `query` | `any` |  |
| `reason` | `any` |  |
| `regenerate` | `bool` |  |
| `status` | `string` |  |
| `user_membership` | `any` |  |
| `user_name` | `any` |  |
| `user_onboarding_step` | `any` |  |
| `video_type` | `string` |  |

#### Example: Load

```go
admin, err := client.Admin(nil).Load(map[string]any{"date": "date"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(admin.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
admins, err := client.Admin(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range admins.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### AdminAccountReset

Create an instance: `adminAccountReset := client.AdminAccountReset(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_ids` | `[]any` |  |
| `agent_ids_sha256` | `string` |  |
| `backup_sha256` | `string` |  |
| `batch_size` | `int` |  |
| `confirmation` | `string` |  |
| `customer_email` | `string` |  |
| `pc_name` | `string` |  |
| `phase` | `string` |  |
| `product_id` | `string` |  |
| `video_ids` | `[]any` |  |

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### AdminCarousel

Create an instance: `adminCarousel := client.AdminCarousel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `string` |  |
| `batch_id` | `string` |  |
| `caption` | `string` |  |
| `content_base64` | `string` |  |
| `day` | `any` |  |
| `dry_run` | `bool` |  |
| `engine_run` | `string` |  |
| `expected_revision` | `string` |  |
| `formula` | `map[string]any` |  |
| `formula_id` | `string` |  |
| `prompt` | `string` |  |
| `slides` | `[]any` |  |
| `title` | `string` |  |

#### Example: Load

```go
adminCarousel, err := client.AdminCarousel(nil).Load(map[string]any{"batch_id": "batch_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(adminCarousel.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### AdminCarouselDemoReview

Create an instance: `adminCarouselDemoReview := client.AdminCarouselDemoReview(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `items` | `[]any` |  |
| `reason` | `string` |  |

#### Example: Load

```go
adminCarouselDemoReview, err := client.AdminCarouselDemoReview(nil).Load(map[string]any{"id": "admin_carousel_demo_review_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(adminCarouselDemoReview.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

```go
result, err := client.AdminCarouselDemoReview(nil).Create(map[string]any{
    "items": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### AdminCustomer

Create an instance: `adminCustomer := client.AdminCustomer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `any` |  |
| `active_vireel_agents` | `int` |  |
| `agents` | `[]any` |  |
| `billing_source` | `string` |  |
| `contracted_agents` | `any` |  |
| `email` | `string` |  |
| `membership` | `any` |  |
| `name` | `string` |  |
| `pfa_only_agents` | `int` |  |
| `severity` | `string` |  |
| `status` | `string` |  |
| `subscription_status` | `any` |  |
| `user_id` | `string` |  |

#### Example: List

```go
adminCustomers, err := client.AdminCustomer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range adminCustomers.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### AdminCustomerSuccess

Create an instance: `adminCustomerSuccess := client.AdminCustomerSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_agents` | `int` |  |
| `active_products` | `int` |  |
| `agents_count` | `int` |  |
| `auto_schedule_status` | `string` |  |
| `days_until_period_end` | `any` |  |
| `email` | `string` |  |
| `feature_impact` | `string` |  |
| `last_notification_at` | `any` |  |
| `membership` | `any` |  |
| `name` | `string` |  |
| `notification_count` | `int` |  |
| `notification_events` | `[]any` |  |
| `priority` | `string` |  |
| `severity` | `string` |  |
| `status_label` | `string` |  |
| `subscription_current_period_end` | `any` |  |
| `subscription_status` | `any` |  |
| `upcoming_posts` | `int` |  |
| `user_id` | `string` |  |

#### Example: List

```go
adminCustomerSuccesss, err := client.AdminCustomerSuccess(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range adminCustomerSuccesss.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### AdminGeneratedVideo

Create an instance: `adminGeneratedVideo := client.AdminGeneratedVideo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `string` |  |
| `agent_name` | `any` |  |
| `created_at` | `string` |  |
| `duration` | `float64` |  |
| `generation_status` | `map[string]any` |  |
| `id` | `string` |  |
| `product_id` | `string` |  |
| `thumbnail_url` | `any` |  |
| `title` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `any` |  |
| `url` | `string` |  |

#### Example: List

```go
adminGeneratedVideos, err := client.AdminGeneratedVideo(nil).List(map[string]any{"user_id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range adminGeneratedVideos.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### AdminHealthrx

Create an instance: `adminHealthrx := client.AdminHealthrx(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` |  |
| `delivery_enabled` | `bool` |  |
| `id` | `string` |  |
| `option_id` | `string` |  |
| `plan` | `map[string]any` |  |
| `preparation_enabled` | `bool` |  |
| `product_id` | `string` |  |
| `reason` | `string` |  |
| `request_key` | `string` |  |
| `revision` | `int` |  |
| `schedule_enabled` | `bool` |  |
| `version` | `string` |  |
| `viewed` | `bool` |  |

#### Example: Load

```go
adminHealthrx, err := client.AdminHealthrx(nil).Load(map[string]any{"item_id": "item_id", "kind": "kind"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(adminHealthrx.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### AdminInsight

Create an instance: `adminInsight := client.AdminInsight(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `customer_success_cases` | `[]any` |  |
| `customers` | `[]any` |  |
| `generated_at` | `string` |  |
| `pfa_database` | `map[string]any` |  |
| `recent_signups` | `[]any` |  |
| `summary` | `map[string]any` |  |
| `vireel_database` | `map[string]any` |  |

#### Example: Load

```go
adminInsight, err := client.AdminInsight(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(adminInsight.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
adminInsights, err := client.AdminInsight(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range adminInsights.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### AdminLandingTask

Create an instance: `adminLandingTask := client.AdminLandingTask(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `task_id` | `string` |  |

#### Example: Create

```go
result, err := client.AdminLandingTask(nil).Create(map[string]any{
    "user_id": "example_user_id",
    "task_id": "example_task_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### AdminMetricsSummary

Create an instance: `adminMetricsSummary := client.AdminMetricsSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `paid_users_by_level` | `[]any` |  |
| `total_cancellations` | `int` |  |
| `total_previews_generated` | `int` |  |
| `total_signups` | `int` |  |
| `total_videos_generated` | `int` |  |
| `url_attempts` | `int` |  |
| `user_credits` | `[]any` |  |
| `user_gifted_credits` | `[]any` |  |

#### Example: List

```go
adminMetricsSummarys, err := client.AdminMetricsSummary(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range adminMetricsSummarys.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### AdminPost

Create an instance: `adminPost := client.AdminPost(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `admin_job_ids` | `any` |  |
| `agent_id` | `string` |  |
| `agent_name` | `any` |  |
| `agent_platform_urls` | `any` |  |
| `agent_url` | `any` |  |
| `comments` | `int` |  |
| `error_message` | `any` |  |
| `failed_at` | `any` |  |
| `id` | `string` |  |
| `instagram_posted_by` | `any` |  |
| `instagram_posted_url` | `any` |  |
| `instagram_scraped_social_post_id` | `string` |  |
| `is_instagram_posted` | `bool` |  |
| `is_tiktok_posted` | `bool` |  |
| `is_youtube_posted` | `bool` |  |
| `last_refreshed_at` | `any` |  |
| `likes` | `int` |  |
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
| `views` | `int` |  |
| `youtube_posted_by` | `any` |  |
| `youtube_posted_url` | `any` |  |
| `youtube_scraped_social_post_id` | `string` |  |

#### Example: List

```go
adminPosts, err := client.AdminPost(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range adminPosts.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### AdminRecentSignup

Create an instance: `adminRecentSignup := client.AdminRecentSignup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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
| `inactive_minutes` | `int` |  |
| `last_notification_at` | `any` |  |
| `last_seen_at` | `string` |  |
| `likely_cause` | `string` |  |
| `notification_count` | `int` |  |
| `notification_events` | `[]any` |  |
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

```go
adminRecentSignups, err := client.AdminRecentSignup(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range adminRecentSignups.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### AdminSlideshowDiag

Create an instance: `adminSlideshowDiag := client.AdminSlideshowDiag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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

```go
result, err := client.AdminSlideshowDiag(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### AdminSlideshowImport

Create an instance: `adminSlideshowImport := client.AdminSlideshowImport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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
| `slides` | `[]any` |  |
| `title` | `string` |  |

#### Example: Load

```go
adminSlideshowImport, err := client.AdminSlideshowImport(nil).Load(map[string]any{"batch_id": "batch_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(adminSlideshowImport.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### AdminUserView

Create an instance: `adminUserView := client.AdminUserView(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `any` |  |
| `admin_notes` | `any` |  |
| `agents_count` | `int` |  |
| `created_at` | `string` |  |
| `credits` | `int` |  |
| `email` | `string` |  |
| `id` | `string` |  |
| `industry` | `any` |  |
| `is_admin` | `bool` |  |
| `is_bookmarked` | `bool` |  |
| `is_internal_user` | `bool` |  |
| `membership` | `any` |  |
| `name` | `string` |  |
| `new_email` | `string` |  |
| `partner_external_user_id` | `string` |  |
| `partner_policy_code` | `any` |  |
| `partner_source` | `any` |  |
| `product_name` | `any` |  |
| `product_url` | `any` |  |
| `skip` | `bool` |  |
| `subscription_details` | `any` |  |
| `subscription_status` | `any` |  |

#### Example: List

```go
adminUserViews, err := client.AdminUserView(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range adminUserViews.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### AdminUsersTableItem

Create an instance: `adminUsersTableItem := client.AdminUsersTableItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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
| `membership` | `any` |  |
| `name` | `string` |  |
| `onboarding_flow` | `string` |  |
| `product_name` | `any` |  |
| `product_url` | `any` |  |
| `survey_data` | `any` |  |

#### Example: List

```go
adminUsersTableItems, err := client.AdminUsersTableItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range adminUsersTableItems.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### AdminVideoRemixer

Create an instance: `adminVideoRemixer := client.AdminVideoRemixer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Patch(data, ctrl)` | Change part of an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activity` | `string` |  |
| `allowed_platforms` | `[]any` |  |
| `anchor_clip_id` | `string` |  |
| `atomicity_class` | `any` |  |
| `auto_render` | `bool` |  |
| `campaign_allowed` | `bool` |  |
| `channel` | `string` |  |
| `channel_default` | `string` |  |
| `clip_id` | `string` |  |
| `clip_ids` | `[]any` |  |
| `collected_at` | `string` |  |
| `comments` | `any` |  |
| `completion_rate` | `any` |  |
| `confirmed_duplicate_of` | `any` |  |
| `consent_doc_uri` | `string` |  |
| `contact` | `string` |  |
| `conversions` | `any` |  |
| `count` | `int` |  |
| `creator` | `string` |  |
| `creator_id` | `string` |  |
| `crop_window` | `any` |  |
| `cta_product_id` | `string` |  |
| `days` | `int` |  |
| `derivative_edits_allowed` | `bool` |  |
| `enabled` | `bool` |  |
| `end_ms` | `any` |  |
| `enqueue` | `bool` |  |
| `errors` | `[]any` |  |
| `evidence` | `string` |  |
| `expected_revision` | `any` |  |
| `expected_revisions` | `map[string]any` |  |
| `external_ai_allowed` | `bool` |  |
| `file` | `string` |  |
| `followers` | `any` |  |
| `formula_id` | `string` |  |
| `formula_ids` | `[]any` |  |
| `handles` | `map[string]any` |  |
| `hook_subtype` | `any` |  |
| `hour_utc` | `int` |  |
| `human_role` | `string` |  |
| `idempotency_key` | `string` |  |
| `items` | `[]any` |  |
| `kim_clip_ids` | `[]any` |  |
| `kind` | `string` |  |
| `levels` | `map[string]any` |  |
| `likes` | `any` |  |
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
| `policy` | `map[string]any` |  |
| `polish` | `string` |  |
| `post_url` | `string` |  |
| `posted_at` | `string` |  |
| `primary_role` | `any` |  |
| `purpose` | `string` |  |
| `rate` | `float64` |  |
| `rationale` | `string` |  |
| `reason` | `string` |  |
| `reference_source_id` | `string` |  |
| `requires_medical_review` | `bool` |  |
| `review_status` | `any` |  |
| `revision` | `int` |  |
| `rights_expires_at` | `any` |  |
| `rights_status` | `string` |  |
| `run_id` | `string` |  |
| `sample_links` | `[]any` |  |
| `secondary_roles` | `any` |  |
| `seconds` | `int` |  |
| `seed` | `int` |  |
| `seed_base` | `int` |  |
| `sensitive_personal_data_present` | `bool` |  |
| `shares` | `any` |  |
| `shoot` | `string` |  |
| `slots` | `[]any` |  |
| `soundbite_title` | `any` |  |
| `source` | `string` |  |
| `source_id` | `string` |  |
| `source_ids` | `[]any` |  |
| `spend_usd` | `any` |  |
| `spiciness` | `any` |  |
| `spiciness_notes` | `string` |  |
| `start_ms` | `any` |  |
| `status` | `string` |  |
| `terry_clip_ids` | `[]any` |  |
| `testimonial_strength` | `any` |  |
| `testimonial_type` | `any` |  |
| `tier` | `string` |  |
| `timeline` | `map[string]any` |  |
| `topic` | `string` |  |
| `topic_tags` | `any` |  |
| `total_target_ms` | `int` |  |
| `use_learned_weights` | `bool` |  |
| `views` | `any` |  |
| `window` | `string` |  |

#### Example: Load

```go
adminVideoRemixer, err := client.AdminVideoRemixer(nil).Load(map[string]any{"clip_id": "clip_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(adminVideoRemixer.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### AdvanceStep

Create an instance: `advanceStep := client.AdvanceStep(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_step` | `string` |  |
| `onboarding_data_id` | `string` | UUID of the OnboardingData record |
| `success` | `bool` |  |
| `to_step` | `string` | Target step name |

#### Example: Create

```go
result, err := client.AdvanceStep(nil).Create(map[string]any{
    "onboarding_data_id": "example_onboarding_data_id",
    "to_step": "example_to_step",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### Agent

Create an instance: `agent := client.Agent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_connections` | `int` |  |
| `at_capacity` | `bool` |  |
| `id` | `string` |  |
| `is_active` | `bool` |  |
| `name` | `string` |  |
| `tiktok_stats` | `any` |  |
| `type` | `string` |  |

#### Example: List

```go
agents, err := client.Agent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range agents.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### AgentAccessCustomersHealth

Create an instance: `agentAccessCustomersHealth := client.AgentAccessCustomersHealth(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountType` | `any` |  |
| `agentQuota` | `int` |  |
| `assignedAgentsByType` | `map[string]any` |  |
| `assignedAgentsTotal` | `int` |  |
| `createdAt` | `string` |  |
| `email` | `string` |  |
| `isInternalUser` | `any` |  |
| `membership` | `any` |  |
| `name` | `string` |  |
| `performance` | `map[string]any` |  |
| `productCount` | `int` |  |
| `subscriptionCurrentPeriodEnd` | `any` |  |
| `subscriptionDetails` | `any` |  |
| `subscriptionStatus` | `any` |  |
| `usage` | `map[string]any` |  |
| `userId` | `string` |  |

#### Example: List

```go
agentAccessCustomersHealths, err := client.AgentAccessCustomersHealth(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range agentAccessCustomersHealths.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### AgentAccessOverview

Create an instance: `agentAccessOverview := client.AgentAccessOverview(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeUsers` | `int` |  |
| `generatedAt` | `string` |  |
| `newUsersYesterday` | `int` |  |
| `onboardingContextCounts` | `map[string]any` |  |
| `onboardingCurrentStepCounts` | `map[string]any` |  |
| `onboardingCurrentStepWindow` | `map[string]any` |  |
| `onboardingFlowVariantCounts` | `map[string]any` |  |
| `onboardingLockedUntilActivation` | `int` |  |
| `onboardingRecordsTotal` | `int` |  |
| `onboardingRecordsWindow` | `int` |  |
| `onboardingSocialScanStatusCounts` | `map[string]any` |  |
| `onboardingWebsiteScrapeStatusCounts` | `map[string]any` |  |
| `subscriptionStatusCounts` | `map[string]any` |  |
| `totalInternalUsers` | `int` |  |
| `totalUsers` | `int` |  |
| `trialStartedYesterday` | `int` |  |
| `trialingUsers` | `int` |  |

#### Example: Load

```go
agentAccessOverview, err := client.AgentAccessOverview(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(agentAccessOverview.(sdk.Entity).Data()) // the loaded entity's record
```


### AgentAccessPhilHourlyNotification

Create an instance: `agentAccessPhilHourlyNotification := client.AgentAccessPhilHourlyNotification(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `generatedAt` | `string` |  |
| `phoneHealth` | `map[string]any` |  |
| `scheduledPosts` | `map[string]any` |  |
| `targetDate` | `string` |  |
| `uploadPostInstagramHealth` | `map[string]any` |  |
| `uploadPostTiktokHealth` | `map[string]any` |  |
| `uploadPostYoutubeHealth` | `map[string]any` |  |

#### Example: Load

```go
agentAccessPhilHourlyNotification, err := client.AgentAccessPhilHourlyNotification(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(agentAccessPhilHourlyNotification.(sdk.Entity).Data()) // the loaded entity's record
```


### AgentAccessPhilStatsRefresh

Create an instance: `agentAccessPhilStatsRefresh := client.AgentAccessPhilStatsRefresh(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `generatedAt` | `string` |  |
| `statsRefresh` | `map[string]any` |  |
| `targetDate` | `string` |  |

#### Example: Load

```go
agentAccessPhilStatsRefresh, err := client.AgentAccessPhilStatsRefresh(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(agentAccessPhilStatsRefresh.(sdk.Entity).Data()) // the loaded entity's record
```


### AgentAccessPhilVideo

Create an instance: `agentAccessPhilVideo := client.AgentAccessPhilVideo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `generatedAt` | `string` |  |
| `targetDate` | `string` |  |
| `videos` | `map[string]any` |  |

#### Example: Load

```go
agentAccessPhilVideo, err := client.AgentAccessPhilVideo(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(agentAccessPhilVideo.(sdk.Entity).Data()) // the loaded entity's record
```


### AgentAccessUserAgent

Create an instance: `agentAccessUserAgent := client.AgentAccessUserAgent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentQuota` | `int` |  |
| `agents` | `[]any` |  |
| `assignedByType` | `map[string]any` |  |
| `assignedTotal` | `int` |  |
| `email` | `string` |  |
| `products` | `[]any` |  |
| `userId` | `string` |  |

#### Example: List

```go
agentAccessUserAgents, err := client.AgentAccessUserAgent(nil).List(map[string]any{"email": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range agentAccessUserAgents.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### AgentAccessUserPhoneFarm

Create an instance: `agentAccessUserPhoneFarm := client.AgentAccessUserPhoneFarm(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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

```go
agentAccessUserPhoneFarms, err := client.AgentAccessUserPhoneFarm(nil).List(map[string]any{"email": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range agentAccessUserPhoneFarms.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### AgentAccessUserPost

Create an instance: `agentAccessUserPost := client.AgentAccessUserPost(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deltaYesterday` | `int` |  |
| `expectedVideosPerDay` | `int` |  |
| `postedToday` | `int` |  |
| `postedYesterday` | `int` |  |
| `productId` | `any` |  |
| `productName` | `any` |  |

#### Example: List

```go
agentAccessUserPosts, err := client.AgentAccessUserPost(nil).List(map[string]any{"email": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range agentAccessUserPosts.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### AgentAccessUserSummary

Create an instance: `agentAccessUserSummary := client.AgentAccessUserSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deletedAt` | `any` |  |
| `id` | `string` |  |
| `isActive` | `any` |  |
| `name` | `string` |  |
| `url` | `string` |  |

#### Example: List

```go
agentAccessUserSummarys, err := client.AgentAccessUserSummary(nil).List(map[string]any{"email": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range agentAccessUserSummarys.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### AgentAccessUserVideo

Create an instance: `agentAccessUserVideo := client.AgentAccessUserVideo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allTime` | `map[string]any` |  |
| `email` | `string` |  |
| `today` | `map[string]any` |  |
| `userId` | `string` |  |
| `yesterday` | `map[string]any` |  |

#### Example: Load

```go
agentAccessUserVideo, err := client.AgentAccessUserVideo(nil).Load(map[string]any{"email": "email"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(agentAccessUserVideo.(sdk.Entity).Data()) // the loaded entity's record
```


### AgentAccessUserWinningAd

Create an instance: `agentAccessUserWinningAd := client.AgentAccessUserWinningAd(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `productId` | `string` |  |
| `productName` | `string` |  |
| `winningAds` | `[]any` |  |
| `winningAdsCount` | `int` |  |

#### Example: List

```go
agentAccessUserWinningAds, err := client.AgentAccessUserWinningAd(nil).List(map[string]any{"email": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range agentAccessUserWinningAds.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### AgentAccessWinningAdsSummary

Create an instance: `agentAccessWinningAdsSummary := client.AgentAccessWinningAdsSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `name` | `string` |  |
| `productCount` | `int` |  |
| `productsWithWinningAds` | `int` |  |
| `subscriptionStatus` | `any` |  |
| `totalWinningAds` | `int` |  |
| `userId` | `string` |  |

#### Example: List

```go
agentAccessWinningAdsSummarys, err := client.AgentAccessWinningAdsSummary(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range agentAccessWinningAdsSummarys.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### AgentDetail

Create an instance: `agentDetail := client.AgentDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `isActive` | `bool` |  |
| `name` | `string` |  |
| `role` | `any` |  |
| `tiktokStats` | `any` |  |
| `tiktokUrl` | `any` |  |
| `type` | `string` |  |
| `uploadPostPlatforms` | `any` |  |
| `youtubeUrl` | `any` |  |

#### Example: List

```go
agentDetails, err := client.AgentDetail(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range agentDetails.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### AgentHealth

Create an instance: `agentHealth := client.AgentHealth(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `daily` | `[]any` |  |
| `dates` | `[]any` |  |
| `generated_at` | `string` |  |
| `groups` | `[]any` |  |
| `latest` | `map[string]any` |  |
| `live_date` | `any` |  |
| `phone_admin_generated_at` | `string` |  |
| `platform` | `string` |  |
| `post_target` | `int` |  |
| `qa_managed_agent_ids` | `[]any` |  |
| `scope_prefixes` | `[]any` |  |
| `timezone` | `string` |  |
| `warmup_target` | `int` |  |

#### Example: List

```go
agentHealths, err := client.AgentHealth(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range agentHealths.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### AgentHealthCustomerOption

Create an instance: `agentHealthCustomerOption := client.AgentHealthCustomerOption(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_count` | `int` |  |
| `email` | `string` |  |
| `user_id` | `string` |  |

#### Example: List

```go
agentHealthCustomerOptions, err := client.AgentHealthCustomerOption(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range agentHealthCustomerOptions.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### AgentHealthDetail

Create an instance: `agentHealthDetail := client.AgentHealthDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived_issue_total` | `int` |  |
| `date` | `string` |  |
| `generated_at` | `string` |  |
| `group_id` | `string` |  |
| `has_more` | `bool` |  |
| `issue_total` | `int` |  |
| `issues` | `[]any` |  |
| `limit` | `int` |  |
| `metric` | `string` |  |
| `offset` | `int` |  |
| `warmup_runs` | `[]any` |  |
| `warning_total` | `int` |  |
| `warnings` | `[]any` |  |

#### Example: List

```go
agentHealthDetails, err := client.AgentHealthDetail(nil).List(map[string]any{"date": "example", "group_id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range agentHealthDetails.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### AgentPost

Create an instance: `agentPost := client.AgentPost(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comments` | `int` |  |
| `error_message` | `any` |  |
| `id` | `string` |  |
| `likes` | `int` |  |
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
| `views` | `int` |  |

#### Example: List

```go
agentPosts, err := client.AgentPost(nil).List(map[string]any{"id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range agentPosts.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### AgentStat

Create an instance: `agentStat := client.AgentStat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agents_needed` | `int` |  |
| `dedicated_agents` | `map[string]any` |  |
| `shared_agents` | `map[string]any` |  |
| `total_agents` | `int` |  |

#### Example: Load

```go
agentStat, err := client.AgentStat(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(agentStat.(sdk.Entity).Data()) // the loaded entity's record
```


### AgentSummary

Create an instance: `agentSummary := client.AgentSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_count` | `int` |  |
| `favicon_url` | `any` |  |
| `product_id` | `string` |  |
| `product_name` | `string` |  |

#### Example: List

```go
agentSummarys, err := client.AgentSummary(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range agentSummarys.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### AgentsSummary

Create an instance: `agentsSummary := client.AgentsSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `total_agents` | `int` |  |
| `total_agents_count_sum` | `int` |  |

#### Example: Load

```go
agentsSummary, err := client.AgentsSummary(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(agentsSummary.(sdk.Entity).Data()) // the loaded entity's record
```


### AnalysisStatus

Create an instance: `analysisStatus := client.AnalysisStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
analysisStatus, err := client.AnalysisStatus(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(analysisStatus.(sdk.Entity).Data()) // the loaded entity's record
```


### AnalyticsPost

Create an instance: `analyticsPost := client.AnalyticsPost(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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

```go
analyticsPosts, err := client.AnalyticsPost(nil).List(map[string]any{"date_from": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range analyticsPosts.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### AnalyzeProduct

Create an instance: `analyzeProduct := client.AnalyzeProduct(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `instagram_username` | `any` |  |
| `message` | `string` |  |
| `status` | `string` |  |
| `url` | `string` |  |

#### Example: Create

```go
result, err := client.AnalyzeProduct(nil).Create(map[string]any{
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### AssignAgent

Create an instance: `assignAgent := client.AssignAgent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent` | `map[string]any` | Agent information for V6. |
| `assignment` | `map[string]any` | Assignment information for V6. |
| `mock_agents` | `[]any` |  |
| `onboarding_data_id` | `string` | UUID of the OnboardingData record |

#### Example: Create

```go
result, err := client.AssignAgent(nil).Create(map[string]any{
    "onboarding_data_id": "example_onboarding_data_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### Auth

Create an instance: `auth := client.Auth(nil)`


### AutoScheduleSetting

Create an instance: `autoScheduleSetting := client.AutoScheduleSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `can_enable_repost` | `bool` |  |
| `effective_posted_video_reuse_percent` | `int` |  |
| `enabled_video_types` | `any` | List of enabled video type filters |
| `is_enabled` | `bool` |  |
| `lock_video_regeneration_controls` | `bool` |  |
| `membership_tier` | `string` |  |
| `posted_video_reuse_percent` | `any` |  |
| `product_id` | `string` |  |
| `repost_source` | `any` |  |
| `videos_per_day` | `int` |  |

#### Example: Load

```go
autoScheduleSetting, err := client.AutoScheduleSetting(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(autoScheduleSetting.(sdk.Entity).Data()) // the loaded entity's record
```


### BulkTikTokStatsUpdate

Create an instance: `bulkTikTokStatsUpdate := client.BulkTikTokStatsUpdate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `failedIds` | `[]any` |  |
| `updatedCount` | `int` |  |
| `updates` | `[]any` |  |


### Carousel

Create an instance: `carousel := client.Carousel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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
| `formula` | `map[string]any` |  |
| `formula_id` | `string` |  |
| `formula_name` | `any` |  |
| `generation` | `map[string]any` |  |
| `id` | `string` |  |
| `image_prompt` | `any` |  |
| `likes` | `any` |  |
| `main_prompt` | `any` |  |
| `metrics_updated_at` | `any` |  |
| `post_url` | `any` |  |
| `profile_url` | `any` |  |
| `qa` | `map[string]any` |  |
| `qa_status` | `string` |  |
| `qa_verdict` | `any` |  |
| `quality_score` | `any` |  |
| `queue_id` | `string` |  |
| `relevance_score` | `any` |  |
| `scheduled_at` | `string` |  |
| `slide_count` | `int` |  |
| `slides` | `[]any` |  |
| `source` | `map[string]any` |  |
| `status` | `string` |  |
| `thumbnail_url` | `any` |  |
| `title` | `string` |  |
| `video_id` | `string` |  |
| `views` | `any` |  |

#### Example: Load

```go
carousel, err := client.Carousel(nil).Load(map[string]any{"id": "carousel_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(carousel.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
carousels, err := client.Carousel(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range carousels.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### CarouselAgentDetail

Create an instance: `carouselAgentDetail := client.CarouselAgentDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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

```go
carouselAgentDetail, err := client.CarouselAgentDetail(nil).Load(map[string]any{"agent_id": "agent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(carouselAgentDetail.(sdk.Entity).Data()) // the loaded entity's record
```


### CarouselStatus

Create an instance: `carouselStatus := client.CarouselStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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
| `index` | `int` |  |
| `prompt` | `any` |  |
| `status` | `string` |  |

#### Example: List

```go
carouselStatuss, err := client.CarouselStatus(nil).List(map[string]any{"id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range carouselStatuss.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### Chat

Create an instance: `chat := client.Chat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `idempotencyKey` | `string` |  |
| `message` | `string` |  |
| `sessionId` | `string` |  |

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### ChatHistory

Create an instance: `chatHistory := client.ChatHistory(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `chatSubVariant` | `string` |  |
| `createdAt` | `string` |  |
| `messages` | `[]any` |  |
| `model` | `any` |  |
| `onboardingDataId` | `string` |  |
| `routeRecommendation` | `any` |  |
| `salesStage` | `string` |  |
| `selectedPlan` | `any` |  |
| `session` | `map[string]any` |  |
| `sessionId` | `string` |  |
| `status` | `string` |  |
| `updatedAt` | `string` |  |

#### Example: Load

```go
chatHistory, err := client.ChatHistory(nil).Load(map[string]any{"session_id": "session_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(chatHistory.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

```go
result, err := client.ChatHistory(nil).Create(map[string]any{
    "onboardingDataId": "example_onboardingDataId",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### ChatSession

Create an instance: `chatSession := client.ChatSession(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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

```go
result, err := client.ChatSession(nil).Create(map[string]any{
    "session_id": "example_session_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### Comment

Create an instance: `comment := client.Comment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
comment, err := client.Comment(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(comment.(sdk.Entity).Data()) // the loaded entity's record
```


### CommentCampaign

Create an instance: `commentCampaign := client.CommentCampaign(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_daily_limit` | `int` |  |
| `account_weekly_limit` | `int` |  |
| `action` | `string` |  |
| `active_days_per_week` | `int` |  |
| `agent_id` | `string` |  |
| `allowlist` | `[]any` |  |
| `analysis_daily_limit` | `int` |  |
| `analysis_model` | `string` |  |
| `analysis_reservation_usd` | `float64` |  |
| `approved_markets` | `[]any` |  |
| `brand_forward_enabled` | `bool` |  |
| `briefs` | `map[string]any` |  |
| `candidate_only` | `bool` |  |
| `claims` | `[]any` |  |
| `cohort_removal_threshold` | `int` |  |
| `daily_cost_ceiling_usd` | `float64` |  |
| `delivery_mode` | `string` |  |
| `disclosure_mode` | `string` |  |
| `disclosure_template` | `string` |  |
| `draft_options_count` | `int` |  |
| `draft_review_reservation_usd` | `float64` |  |
| `exceptional_daily_cap_approved` | `bool` |  |
| `execution_enabled` | `bool` |  |
| `experiment_styles` | `[]any` |  |
| `inventory_factor` | `float64` |  |
| `keywords` | `[]any` |  |
| `max_duration_seconds` | `any` |  |
| `metadata_pass_rate` | `float64` |  |
| `min_interval_minutes` | `int` |  |
| `mode` | `string` |  |
| `monitored_creators` | `[]any` |  |
| `platform` | `string` |  |
| `platform_permission_evidence` | `string` |  |
| `policy_approved_by` | `string` |  |
| `policy_expires_at` | `any` |  |
| `policy_version` | `string` |  |
| `product_daily_limit` | `int` |  |
| `qualification_rate` | `float64` |  |
| `raw_daily_limit` | `int` |  |
| `raw_result_reservation_usd` | `float64` |  |
| `reason` | `string` |  |
| `replies_enabled` | `bool` |  |
| `request_key` | `string` |  |
| `reviewer_model` | `string` |  |
| `scan_interval_hours` | `int` |  |
| `search_change_reason` | `string` |  |
| `search_effective_at` | `any` |  |
| `shadow_sample_limit` | `int` |  |
| `spent_seconds` | `any` |  |
| `task_ttl_hours` | `int` |  |
| `top_comment_analysis_enabled` | `bool` |  |
| `writer_model` | `string` |  |

#### Example: Load

```go
commentCampaign, err := client.CommentCampaign(nil).Load(map[string]any{"product_id": "product_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(commentCampaign.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### CompleteChatCheckout

Create an instance: `completeChatCheckout := client.CompleteChatCheckout(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `message` | `any` |  |
| `onboarding_data_id` | `string` |  |
| `product_id` | `string` |  |
| `ready` | `bool` |  |
| `success` | `bool` |  |

#### Example: Create

```go
result, err := client.CompleteChatCheckout(nil).Create(map[string]any{
    "onboarding_data_id": "example_onboarding_data_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### CreateBlackoutSora2Video

Create an instance: `createBlackoutSora2Video := client.CreateBlackoutSora2Video(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `main_prompt` | `string` |  |
| `media_asset_id` | `string` |  |
| `product_id` | `string` |  |
| `requires_polling` | `bool` |  |
| `video` | `map[string]any` |  |

#### Example: Create

```go
result, err := client.CreateBlackoutSora2Video(nil).Create(map[string]any{
    "main_prompt": "example_main_prompt",
    "media_asset_id": "example_media_asset_id",
    "product_id": "example_product_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### CreateCarousel

Create an instance: `createCarousel := client.CreateCarousel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `copy_mode` | `any` |  |
| `expected_owner_user_id` | `string` |  |
| `expected_product_id` | `string` |  |
| `expected_product_name` | `any` |  |
| `image_model` | `string` |  |
| `mention_product` | `bool` |  |
| `message` | `string` |  |
| `num_slides` | `int` |  |
| `owner_user_id` | `string` |  |
| `product_id` | `string` | Product ID to use. |
| `product_name` | `any` |  |
| `product_placement` | `string` |  |
| `request_id` | `string` |  |
| `script_style_custom` | `any` |  |
| `script_style_id` | `string` |  |
| `selected_hook` | `any` |  |
| `status` | `string` |  |
| `success` | `bool` |  |
| `template_id` | `string` |  |
| `video_id` | `string` |  |
| `visual_style_custom` | `any` |  |
| `visual_style_id` | `string` |  |

#### Example: Create

```go
result, err := client.CreateCarousel(nil).Create(map[string]any{
    "template_id": "example_template_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### CreateProduct

Create an instance: `createProduct := client.CreateProduct(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `onboarding_data_id` | `string` | UUID of the OnboardingData record |
| `product_id` | `string` |  |
| `success` | `bool` |  |
| `videos_queued` | `int` |  |

#### Example: Create

```go
result, err := client.CreateProduct(nil).Create(map[string]any{
    "onboarding_data_id": "example_onboarding_data_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### CreateResetProductV6

Create an instance: `createResetProductV6 := client.CreateResetProductV6(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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

```go
result, err := client.CreateResetProductV6(nil).Create(map[string]any{
    "onboarding_data_id": "example_onboarding_data_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### CreateSora2Video

Create an instance: `createSora2Video := client.CreateSora2Video(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `image_prompt` | `any` |  |
| `main_prompt` | `string` |  |
| `model` | `string` |  |
| `requires_polling` | `bool` |  |
| `seconds` | `string` |  |
| `size` | `string` |  |
| `video` | `map[string]any` |  |

#### Example: Create

```go
result, err := client.CreateSora2Video(nil).Create(map[string]any{
    "main_prompt": "example_main_prompt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### CreateVariation

Create an instance: `createVariation := client.CreateVariation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### Customer

Create an instance: `customer := client.Customer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `any` |  |
| `assigned_agents_count` | `int` |  |
| `email` | `string` |  |
| `id` | `string` |  |
| `is_migrated` | `bool` |  |

#### Example: List

```go
customers, err := client.Customer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range customers.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### CustomerHealth

Create an instance: `customerHealth := client.CustomerHealth(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_agents` | `map[string]any` |  |
| `available_dates` | `[]any` |  |
| `date` | `string` |  |
| `email` | `string` |  |
| `entries` | `[]any` |  |
| `id` | `string` |  |
| `performance_overview` | `map[string]any` |  |
| `platform_coverage_summary` | `map[string]any` |  |
| `user_id` | `string` |  |

#### Example: Load

```go
customerHealth, err := client.CustomerHealth(nil).Load(map[string]any{"id": "customer_health_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(customerHealth.(sdk.Entity).Data()) // the loaded entity's record
```


### CustomerHealthAllCustomersItem

Create an instance: `customerHealthAllCustomersItem := client.CustomerHealthAllCustomersItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `any` |  |
| `assigned_agents_count` | `int` |  |
| `daily_stats` | `[]any` |  |
| `email` | `string` |  |
| `is_migrated` | `bool` |  |
| `total_views` | `int` |  |
| `user_id` | `string` |  |

#### Example: List

```go
customerHealthAllCustomersItems, err := client.CustomerHealthAllCustomersItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range customerHealthAllCustomersItems.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### CustomerHealthViewsSummary

Create an instance: `customerHealthViewsSummary := client.CustomerHealthViewsSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `average_views_per_result` | `int` |  |
| `date` | `string` |  |
| `end_date` | `any` |  |
| `paid_users_count` | `int` |  |
| `posted_results` | `int` |  |
| `range` | `string` |  |
| `start_date` | `any` |  |
| `top_users` | `[]any` |  |
| `total_views` | `int` |  |
| `trend` | `[]any` |  |
| `trend_granularity` | `string` |  |
| `user_email` | `any` |  |
| `user_id` | `string` |  |
| `users_with_views` | `int` |  |

#### Example: List

```go
customerHealthViewsSummarys, err := client.CustomerHealthViewsSummary(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range customerHealthViewsSummarys.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### Daily

Create an instance: `daily := client.Daily(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Create

```go
result, err := client.Daily(nil).Create(map[string]any{
    "id": "example_id",
    "day": "example_day",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### DailyStatus

Create an instance: `dailyStatus := client.DailyStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
dailyStatus, err := client.DailyStatus(nil).Load(map[string]any{"id": "daily_status_id", "day": "day"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dailyStatus.(sdk.Entity).Data()) // the loaded entity's record
```


### DedicatedAgentsDashboard

Create an instance: `dedicatedAgentsDashboard := client.DedicatedAgentsDashboard(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_connections` | `int` |  |
| `assigned_user_id` | `string` |  |
| `assigned_user_ids` | `[]any` |  |
| `bio` | `any` |  |
| `id` | `string` |  |
| `instagram_url` | `any` |  |
| `is_active` | `bool` |  |
| `last_admin_synced_at` | `any` |  |
| `name` | `string` |  |
| `role` | `any` |  |
| `tiktok_stats` | `any` |  |
| `tiktok_url` | `any` |  |
| `today_failed_entries` | `[]any` |  |
| `today_stats` | `map[string]any` |  |
| `upload_post_platforms` | `any` |  |
| `upload_post_profile` | `any` |  |
| `yesterday_failed_entries` | `[]any` |  |
| `yesterday_stats` | `map[string]any` |  |
| `youtube_url` | `any` |  |

#### Example: List

```go
dedicatedAgentsDashboards, err := client.DedicatedAgentsDashboard(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range dedicatedAgentsDashboards.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### EnterpriseAgent

Create an instance: `enterpriseAgent := client.EnterpriseAgent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `int` |  |
| `product_id` | `string` |  |
| `source_product_id` | `string` |  |
| `target_product_id` | `string` |  |

#### Example: Load

```go
enterpriseAgent, err := client.EnterpriseAgent(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(enterpriseAgent.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

```go
result, err := client.EnterpriseAgent(nil).Create(map[string]any{
    "product_id": "example_product_id",
    "source_product_id": "example_source_product_id",
    "target_product_id": "example_target_product_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### EnterpriseProduct

Create an instance: `enterpriseProduct := client.EnterpriseProduct(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
enterpriseProduct, err := client.EnterpriseProduct(nil).Load(map[string]any{"product_id": "product_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(enterpriseProduct.(sdk.Entity).Data()) // the loaded entity's record
```


### ExactAvailability

Create an instance: `exactAvailability := client.ExactAvailability(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
exactAvailability, err := client.ExactAvailability(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(exactAvailability.(sdk.Entity).Data()) // the loaded entity's record
```


### ExactFormula

Create an instance: `exactFormula := client.ExactFormula(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
exactFormula, err := client.ExactFormula(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(exactFormula.(sdk.Entity).Data()) // the loaded entity's record
```


### ExtractV2

Create an instance: `extractV2 := client.ExtractV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `instagram_username` | `any` |  |
| `message` | `string` |  |
| `status` | `string` |  |
| `url` | `string` |  |

#### Example: Create

```go
result, err := client.ExtractV2(nil).Create(map[string]any{
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### FailedPost

Create an instance: `failedPost := client.FailedPost(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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

```go
failedPosts, err := client.FailedPost(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range failedPosts.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### File

Create an instance: `file := client.File(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `file` | `string` |  |

#### Example: Create

```go
result, err := client.File(nil).Create(map[string]any{
    "file": "example_file",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### GenerateBlackoutSora2Prompt

Create an instance: `generateBlackoutSora2Prompt := client.GenerateBlackoutSora2Prompt(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `media_asset_id` | `string` |  |
| `product_id` | `string` |  |
| `prompt` | `string` |  |

#### Example: Create

```go
result, err := client.GenerateBlackoutSora2Prompt(nil).Create(map[string]any{
    "media_asset_id": "example_media_asset_id",
    "product_id": "example_product_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### GeneratePomelliDemo

Create an instance: `generatePomelliDemo := client.GeneratePomelliDemo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_demo_count` | `int` |  |
| `max_demos` | `int` |  |
| `message` | `string` |  |
| `product_id` | `string` | UUID of the Product |
| `success` | `bool` |  |

#### Example: Create

```go
result, err := client.GeneratePomelliDemo(nil).Create(map[string]any{
    "product_id": "example_product_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### GeneratePrompt

Create an instance: `generatePrompt := client.GeneratePrompt(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `hook_duration` | `int` |  |
| `media_asset_id` | `string` |  |
| `media_asset_url` | `string` |  |
| `prompt` | `string` |  |

#### Example: Create

```go
result, err := client.GeneratePrompt(nil).Create(map[string]any{
    "media_asset_id": "example_media_asset_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### GenerateSora2Prompt

Create an instance: `generateSora2Prompt := client.GenerateSora2Prompt(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `prompt` | `string` |  |

#### Example: Load

```go
generateSora2Prompt, err := client.GenerateSora2Prompt(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(generateSora2Prompt.(sdk.Entity).Data()) // the loaded entity's record
```


### Healthrx

Create an instance: `healthrx := client.Healthrx(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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
| `dimensions` | `map[string]any` |  |
| `duration_seconds` | `int` |  |
| `evidence` | `string` |  |
| `evidence_urls` | `[]any` |  |
| `external_key` | `string` |  |
| `format` | `string` |  |
| `includes_all_attempt_costs` | `bool` |  |
| `input_specification` | `map[string]any` |  |
| `kind` | `string` |  |
| `level` | `int` |  |
| `measured_at` | `string` |  |
| `model_version` | `string` |  |
| `paid_campaign_id` | `string` |  |
| `parent_content_id` | `string` |  |
| `paused` | `bool` |  |
| `pillar` | `string` |  |
| `profile` | `map[string]any` |  |
| `promotion_evidence` | `string` |  |
| `provider` | `string` |  |
| `provider_invoice_evidence` | `string` |  |
| `reason` | `string` |  |
| `reference_version` | `string` |  |
| `request_key` | `string` |  |
| `scope` | `string` |  |
| `test_variable` | `string` |  |
| `topic` | `string` |  |
| `total_cost_usd` | `float64` |  |

#### Example: Load

```go
healthrx, err := client.Healthrx(nil).Load(map[string]any{"product_id": "product_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(healthrx.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### InitResetProductV6

Create an instance: `initResetProductV6 := client.InitResetProductV6(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_schedule_disabled` | `bool` |  |
| `old_product_id` | `string` |  |
| `product_id` | `string` |  |
| `queue_entries_cleared` | `int` |  |
| `success` | `bool` |  |

#### Example: Create

```go
result, err := client.InitResetProductV6(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### Iri

Create an instance: `iri := client.Iri(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `correlationId` | `any` |  |
| `idempotencyKey` | `string` |  |
| `productId` | `any` |  |

#### Example: Create

```go
result, err := client.Iri(nil).Create(map[string]any{
    "connector_id": "example_connector_id",
    "idempotencyKey": "example_idempotencyKey",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### IrisCapability

Create an instance: `irisCapability := client.IrisCapability(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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
| `input` | `map[string]any` |  |
| `membershipId` | `any` |  |
| `message` | `any` |  |
| `ok` | `bool` |  |
| `platformAccountId` | `any` |  |
| `platformLinkId` | `any` |  |
| `productScope` | `string` |  |
| `requestedBy` | `map[string]any` |  |
| `result` | `map[string]any` |  |
| `retryable` | `bool` |  |

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### IrisChat

Create an instance: `irisChat := client.IrisChat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `artifacts` | `[]any` |  |
| `correlationId` | `string` |  |
| `idempotencyKey` | `string` |  |
| `message` | `string` |  |
| `mode` | `string` |  |
| `ok` | `bool` |  |
| `pageContext` | `map[string]any` |  |
| `productId` | `any` |  |
| `runtimeStatus` | `string` |  |
| `sessionId` | `any` |  |

#### Example: Create

```go
result, err := client.IrisChat(nil).Create(map[string]any{
    "correlationId": "example_correlationId",
    "idempotencyKey": "example_idempotencyKey",
    "message": "example_message",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### IrisConnector

Create an instance: `irisConnector := client.IrisConnector(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connectors` | `[]any` |  |

#### Example: List

```go
irisConnectors, err := client.IrisConnector(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range irisConnectors.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### IrisStatus

Create an instance: `irisStatus := client.IrisStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connectorsPreview` | `[]any` |  |
| `product` | `any` |  |
| `status` | `map[string]any` |  |
| `tasksPreview` | `[]any` |  |

#### Example: List

```go
irisStatuss, err := client.IrisStatus(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range irisStatuss.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### IrisTask

Create an instance: `irisTask := client.IrisTask(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approvalRequired` | `bool` |  |
| `cadence` | `string` |  |
| `capability` | `any` |  |
| `completed` | `[]any` |  |
| `description` | `string` |  |
| `discover` | `[]any` |  |
| `productId` | `any` |  |
| `recurring` | `[]any` |  |
| `requiredConnectors` | `[]any` |  |
| `title` | `string` |  |

#### Example: List

```go
irisTasks, err := client.IrisTask(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range irisTasks.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.IrisTask(nil).Create(map[string]any{
    "title": "example_title",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### IrisUsage

Create an instance: `irisUsage := client.IrisUsage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `eventCount` | `int` |  |
| `events` | `[]any` |  |
| `membershipId` | `any` |  |
| `productScope` | `string` |  |

#### Example: List

```go
irisUsages, err := client.IrisUsage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range irisUsages.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### Landing

Create an instance: `landing := client.Landing(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `file` | `string` |  |

#### Example: Create

```go
result, err := client.Landing(nil).Create(map[string]any{
    "index": 1,
    "file": "example_file",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### LandingStat

Create an instance: `landingStat := client.LandingStat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `landing` | `map[string]any` |  |
| `microhub` | `map[string]any` |  |

#### Example: Load

```go
landingStat, err := client.LandingStat(nil).Load(map[string]any{"slug": "slug"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(landingStat.(sdk.Entity).Data()) // the loaded entity's record
```


### LandingStatus

Create an instance: `landingStatus := client.LandingStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errorMessage` | `any` |  |
| `landingStatus` | `string` |  |
| `microhubStatus` | `string` |  |

#### Example: Load

```go
landingStatus, err := client.LandingStatus(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(landingStatus.(sdk.Entity).Data()) // the loaded entity's record
```


### LinkInBio

Create an instance: `linkInBio := client.LinkInBio(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `linkInBioType` | `string` |  |
| `redirectUrl` | `string` |  |
| `slug` | `string` |  |

#### Example: Load

```go
linkInBio, err := client.LinkInBio(nil).Load(map[string]any{"slug": "slug"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(linkInBio.(sdk.Entity).Data()) // the loaded entity's record
```


### LinkInDm

Create an instance: `linkInDm := client.LinkInDm(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `linkInDmsType` | `string` |  |
| `redirectUrl` | `string` |  |
| `slug` | `string` |  |

#### Example: Load

```go
linkInDm, err := client.LinkInDm(nil).Load(map[string]any{"slug": "slug"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(linkInDm.(sdk.Entity).Data()) // the loaded entity's record
```


### LinkInPost

Create an instance: `linkInPost := client.LinkInPost(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `linkInPostsType` | `string` |  |
| `redirectUrl` | `string` |  |
| `showLinkInFirstComment` | `bool` |  |
| `slug` | `string` |  |

#### Example: Load

```go
linkInPost, err := client.LinkInPost(nil).Load(map[string]any{"slug": "slug"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(linkInPost.(sdk.Entity).Data()) // the loaded entity's record
```


### LinkUser

Create an instance: `linkUser := client.LinkUser(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `already_linked` | `bool` |  |
| `onboarding_data_id` | `string` | UUID of the OnboardingData record |
| `success` | `bool` |  |

#### Example: Create

```go
result, err := client.LinkUser(nil).Create(map[string]any{
    "onboarding_data_id": "example_onboarding_data_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### MediaAsset

Create an instance: `mediaAsset := client.MediaAsset(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` |  |
| `createdAt` | `string` |  |
| `description` | `string` |  |
| `file` | `string` |  |
| `id` | `string` |  |
| `media_assets` | `[]any` |  |
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

```go
mediaAsset, err := client.MediaAsset(nil).Load(map[string]any{"id": "media_asset_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(mediaAsset.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### Men

Create an instance: `men := client.Men(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Example: List

```go
mens, err := client.Men(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range mens.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### Microdrama

Create an instance: `microdrama := client.Microdrama(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `evidence` | `map[string]any` |  |
| `expected_revision` | `int` |  |
| `idempotency_key` | `string` |  |
| `issues` | `[]any` |  |
| `reason` | `string` |  |
| `role` | `string` |  |
| `scores` | `map[string]any` |  |
| `selected_premise_id` | `string` |  |
| `stage` | `string` |  |
| `status` | `string` |  |
| `subject_hash` | `string` |  |
| `title` | `string` |  |
| `verdict` | `string` |  |

#### Example: Load

```go
microdrama, err := client.Microdrama(nil).Load(map[string]any{"episode_id": "episode_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(microdrama.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### MicrohubPublic

Create an instance: `microhubPublic := client.MicrohubPublic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bio` | `any` |  |
| `ctaButtonText` | `any` |  |
| `ctaDescription` | `any` |  |
| `ctaLink` | `any` |  |
| `ctaTitle` | `any` |  |
| `headerImageUrl` | `any` |  |
| `links` | `[]any` |  |
| `name` | `string` |  |
| `profileImageUrl` | `any` |  |
| `slug` | `string` |  |
| `socialLinks` | `map[string]any` |  |
| `testimonials` | `[]any` |  |

#### Example: Load

```go
microhubPublic, err := client.MicrohubPublic(nil).Load(map[string]any{"slug": "slug"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(microhubPublic.(sdk.Entity).Data()) // the loaded entity's record
```


### OnboardingStatus

Create an instance: `onboardingStatus := client.OnboardingStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comments` | `int` |  |
| `cover_image_url` | `any` |  |
| `id` | `string` |  |
| `likes` | `int` |  |
| `platform` | `string` |  |
| `video_url` | `any` |  |
| `views` | `int` |  |

#### Example: List

```go
onboardingStatuss, err := client.OnboardingStatus(nil).List(map[string]any{"oid": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range onboardingStatuss.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### OnboardingV6

Create an instance: `onboardingV6 := client.OnboardingV6(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### PaidUser

Create an instance: `paidUser := client.PaidUser(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agents_count` | `int` |  |
| `assigned_agents_count` | `int` |  |
| `auto_schedule_enabled` | `any` |  |
| `credits` | `int` |  |
| `effective_agents_count` | `int` |  |
| `email` | `string` |  |
| `id` | `string` |  |
| `is_internal_user` | `bool` |  |
| `is_migrated_user` | `bool` |  |
| `membership` | `any` |  |
| `scheduled_queue_count` | `int` |  |
| `subscription_details` | `any` |  |
| `subscription_status` | `any` |  |

#### Example: List

```go
paidUsers, err := client.PaidUser(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range paidUsers.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### Pexel

Create an instance: `pexel := client.Pexel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Example: List

```go
pexels, err := client.Pexel(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range pexels.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### PhoneAdminAvailableAgentSource

Create an instance: `phoneAdminAvailableAgentSource := client.PhoneAdminAvailableAgentSource(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available_count` | `int` |  |
| `pc_name` | `string` |  |

#### Example: List

```go
phoneAdminAvailableAgentSources, err := client.PhoneAdminAvailableAgentSource(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range phoneAdminAvailableAgentSources.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### Product

Create an instance: `product := client.Product(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_count` | `int` |  |
| `agents` | `[]any` |  |
| `createdAt` | `any` |  |
| `demoVideos` | `any` |  |
| `description` | `string` |  |
| `favicon_url` | `any` |  |
| `howItWorks` | `any` |  |
| `how_it_works` | `any` |  |
| `id` | `string` |  |
| `images` | `any` |  |
| `initial_agents` | `int` |  |
| `instagramHandle` | `any` |  |
| `instagram_handle` | `any` |  |
| `isActive` | `any` |  |
| `isApp` | `any` |  |
| `is_active` | `bool` |  |
| `is_app` | `bool` |  |
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
| `product_demo_ids` | `[]any` |  |
| `product_details` | `map[string]any` | Product details for enterprise product creation |
| `product_id` | `string` |  |
| `product_name` | `string` |  |
| `product_url` | `string` |  |
| `pronunciation` | `any` |  |
| `regenerate_sora2` | `bool` |  |
| `repostSource` | `any` |  |
| `repost_source` | `any` |  |
| `screenshot_url` | `any` |  |
| `social_post_ids` | `[]any` |  |
| `targetAudience` | `any` |  |
| `target_audience` | `any` |  |
| `templateProductId` | `any` |  |
| `tiktokHandle` | `any` |  |
| `tiktok_handle` | `any` |  |
| `total_count` | `int` |  |
| `updatedAt` | `any` |  |
| `url` | `string` |  |
| `userId` | `string` |  |

#### Example: Load

```go
product, err := client.Product(nil).Load(map[string]any{"id": "product_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(product.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
products, err := client.Product(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range products.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.Product(nil).Create(map[string]any{
    "product_details": map[string]any{},
    "product_url": "example_product_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### ProductDashboard

Create an instance: `productDashboard := client.ProductDashboard(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agents` | `[]any` |  |
| `date` | `string` |  |
| `pagination` | `map[string]any` |  |
| `phone_admin_error` | `any` |  |
| `products` | `[]any` |  |
| `selected_product` | `any` |  |
| `summary` | `map[string]any` |  |

#### Example: List

```go
productDashboards, err := client.ProductDashboard(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range productDashboards.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### ProductDashboardView

Create an instance: `productDashboardView := client.ProductDashboardView(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` |  |
| `views` | `int` |  |

#### Example: List

```go
productDashboardViews, err := client.ProductDashboardView(nil).List(map[string]any{"product_id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range productDashboardViews.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### ProductDemo

Create an instance: `productDemo := client.ProductDemo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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

```go
productDemos, err := client.ProductDemo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range productDemos.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### ProductLanding

Create an instance: `productLanding := client.ProductLanding(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bio` | `any` |  |
| `commentingOnMyPosts` | `bool` |  |
| `commentingOnOthersPosts` | `bool` |  |
| `ctaButtonText` | `any` |  |
| `ctaDescription` | `any` |  |
| `ctaLink` | `any` |  |
| `ctaTitle` | `any` |  |
| `dmCommenters` | `bool` |  |
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
| `microhubLinks` | `[]any` |  |
| `microhubName` | `any` |  |
| `microhubProfileImageUrl` | `any` |  |
| `microhubScreenshotUrl` | `any` |  |
| `microhubSocialLinks` | `map[string]any` |  |
| `microhubStatus` | `string` |  |
| `microhubTestimonials` | `[]any` |  |
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
| `showLinkInFirstComment` | `bool` |  |
| `slug` | `string` |  |
| `socialLinks` | `any` |  |
| `testimonials` | `any` |  |

#### Example: List

```go
productLandings, err := client.ProductLanding(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range productLandings.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### PublicResumeStatus

Create an instance: `publicResumeStatus := client.PublicResumeStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `can_resume_prelogin` | `bool` |  |
| `content_collection_ready` | `bool` |  |
| `current_step` | `any` |  |
| `exists` | `bool` |  |
| `flow_variant` | `any` |  |
| `repost_content_count` | `int` |  |
| `repost_source` | `any` |  |
| `requires_repost_content` | `bool` |  |
| `skip_demo` | `bool` |  |

#### Example: Load

```go
publicResumeStatus, err := client.PublicResumeStatus(nil).Load(map[string]any{"oid": "oid"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(publicResumeStatus.(sdk.Entity).Data()) // the loaded entity's record
```


### ReRollVideo

Create an instance: `reRollVideo := client.ReRollVideo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `queue_id` | `string` |  |
| `requires_polling` | `bool` |  |
| `skip_credit_check` | `bool` |  |
| `video` | `map[string]any` |  |

#### Example: Create

```go
result, err := client.ReRollVideo(nil).Create(map[string]any{
    "queue_id": "example_queue_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### ReadRootGet

Create an instance: `readRootGet := client.ReadRootGet(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
readRootGet, err := client.ReadRootGet(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(readRootGet.(sdk.Entity).Data()) // the loaded entity's record
```


### RecordDemoBooked

Create an instance: `recordDemoBooked := client.RecordDemoBooked(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `calendlyEventUri` | `any` |  |
| `calendlyInviteeUri` | `any` |  |
| `message` | `map[string]any` |  |
| `session` | `map[string]any` |  |

#### Example: Create

```go
result, err := client.RecordDemoBooked(nil).Create(map[string]any{
    "session_id": "example_session_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### RefreshStat

Create an instance: `refreshStat := client.RefreshStat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date_from` | `any` | Start date to refresh stats for (defaults to yesterday) |
| `date_to` | `any` | End date to refresh stats for (defaults to date_from) |
| `entries_found` | `int` |  |
| `message` | `string` |  |
| `provider` | `string` | Scraping provider to use |
| `status` | `string` |  |
| `summary` | `any` |  |

#### Example: Create

```go
result, err := client.RefreshStat(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### RemixerClipper

Create an instance: `remixerClipper := client.RemixerClipper(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Load

```go
remixerClipper, err := client.RemixerClipper(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(remixerClipper.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

```go
result, err := client.RemixerClipper(nil).Create(map[string]any{
    "identifier": "example_identifier",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### ResetProduct

Create an instance: `resetProduct := client.ResetProduct(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Load

```go
resetProduct, err := client.ResetProduct(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(resetProduct.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

```go
result, err := client.ResetProduct(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### RetryWebsiteScrape

Create an instance: `retryWebsiteScrape := client.RetryWebsiteScrape(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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

```go
result, err := client.RetryWebsiteScrape(nil).Create(map[string]any{
    "onboarding_data_id": "example_onboarding_data_id",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### SaveSurvey

Create an instance: `saveSurvey := client.SaveSurvey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email_sent` | `bool` |  |
| `onboarding_data_id` | `string` | UUID of the OnboardingData record |
| `success` | `bool` |  |
| `survey` | `map[string]any` | Survey response data from frontend. |

#### Example: Create

```go
result, err := client.SaveSurvey(nil).Create(map[string]any{
    "onboarding_data_id": "example_onboarding_data_id",
    "survey": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### ScanSocial

Create an instance: `scanSocial := client.ScanSocial(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `instagram_handle` | `any` |  |
| `onboarding_data_id` | `string` |  |
| `product_id` | `string` |  |
| `status` | `string` |  |
| `success` | `bool` |  |
| `task_id` | `string` |  |
| `tiktok_handle` | `any` |  |

#### Example: Create

```go
result, err := client.ScanSocial(nil).Create(map[string]any{
    "onboarding_data_id": "example_onboarding_data_id",
    "tiktok_handle": "example_tiktok_handle",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### ScanSocialsPublic

Create an instance: `scanSocialsPublic := client.ScanSocialsPublic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `instagram_handle` | `any` | Instagram username/handle to scrape |
| `message` | `any` |  |
| `onboarding_data_id` | `string` | UUID of the OnboardingData record |
| `status` | `string` |  |
| `success` | `bool` |  |
| `tiktok_handle` | `any` | TikTok username/handle to scrape |

#### Example: Create

```go
result, err := client.ScanSocialsPublic(nil).Create(map[string]any{
    "onboarding_data_id": "example_onboarding_data_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### ScanSocialsStatus

Create an instance: `scanSocialsStatus := client.ScanSocialsStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ads_count` | `int` |  |
| `onboarding_data_id` | `string` |  |
| `product_id` | `string` |  |
| `status` | `string` |  |
| `task_id` | `string` |  |

#### Example: Load

```go
scanSocialsStatus, err := client.ScanSocialsStatus(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(scanSocialsStatus.(sdk.Entity).Data()) // the loaded entity's record
```


### ScheduleV2

Create an instance: `scheduleV2 := client.ScheduleV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

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
| `is_instagram_posted` | `bool` |  |
| `is_tiktok_posted` | `bool` |  |
| `is_youtube_posted` | `bool` |  |
| `reorders` | `[]any` |  |
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

```go
scheduleV2, err := client.ScheduleV2(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(scheduleV2.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
scheduleV2s, err := client.ScheduleV2(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range scheduleV2s.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### Scrape

Create an instance: `scrape := client.Scrape(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `old_product_id` | `string` |  |
| `onboarding_data_id` | `string` |  |
| `status` | `string` |  |
| `success` | `bool` |  |
| `url` | `string` |  |

#### Example: Create

```go
result, err := client.Scrape(nil).Create(map[string]any{
    "old_product_id": "example_old_product_id",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### ScrapeWebsitePublic

Create an instance: `scrapeWebsitePublic := client.ScrapeWebsitePublic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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

```go
result, err := client.ScrapeWebsitePublic(nil).Create(map[string]any{
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### ScrapedData

Create an instance: `scrapedData := client.ScrapedData(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `homepageVideoUrl` | `any` |  |
| `howItWorks` | `string` |  |
| `imageUrls` | `[]any` |  |
| `instagram_username` | `any` |  |
| `mediaAssets` | `[]any` |  |
| `name` | `string` |  |
| `pricingAndOffers` | `string` |  |
| `targetAudience` | `string` |  |
| `url` | `string` |  |

#### Example: Create

```go
result, err := client.ScrapedData(nil).Create(map[string]any{
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### ScrapingStatus

Create an instance: `scrapingStatus := client.ScrapingStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
scrapingStatus, err := client.ScrapingStatus(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(scrapingStatus.(sdk.Entity).Data()) // the loaded entity's record
```


### SelfServeActivate

Create an instance: `selfServeActivate := client.SelfServeActivate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `onboarding_data_id` | `string` | UUID of the OnboardingData record |
| `redirect_to_stripe` | `bool` |  |
| `stripe_checkout_url` | `any` |  |
| `success` | `bool` |  |

#### Example: Create

```go
result, err := client.SelfServeActivate(nil).Create(map[string]any{
    "onboarding_data_id": "example_onboarding_data_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### Seo

Create an instance: `seo := client.Seo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
seo, err := client.Seo(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(seo.(sdk.Entity).Data()) // the loaded entity's record
```


### SeoAiMention

Create an instance: `seoAiMention := client.SeoAiMention(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bucket` | `string` |  |
| `domain_type` | `string` |  |
| `dominant_domain` | `string` |  |
| `engine` | `string` |  |
| `evidence` | `map[string]any` |  |
| `geo` | `string` |  |
| `language` | `string` |  |
| `primary_url` | `string` |  |
| `prompt_text` | `string` |  |
| `run_week` | `string` |  |
| `secondary_urls` | `[]any` |  |

#### Example: List

```go
seoAiMentions, err := client.SeoAiMention(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range seoAiMentions.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### SeoBacklink

Create an instance: `seoBacklink := client.SeoBacklink(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anchor_text` | `string` |  |
| `first_seen` | `string` |  |
| `referring_domain` | `string` |  |
| `status` | `string` |  |
| `target_page` | `string` |  |

#### Example: List

```go
seoBacklinks, err := client.SeoBacklink(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range seoBacklinks.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### SeoKeyword

Create an instance: `seoKeyword := client.SeoKeyword(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blog_page` | `string` |  |
| `current_position` | `float64` |  |
| `keyword` | `string` |  |
| `keyword_group` | `string` |  |
| `position_change` | `float64` |  |

#### Example: List

```go
seoKeywords, err := client.SeoKeyword(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range seoKeywords.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### SeoOverview

Create an instance: `seoOverview := client.SeoOverview(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `clicks` | `float64` |  |
| `ctr` | `float64` |  |
| `date` | `string` |  |
| `impressions` | `float64` |  |
| `position` | `float64` |  |

#### Example: List

```go
seoOverviews, err := client.SeoOverview(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range seoOverviews.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### SeoTraffic

Create an instance: `seoTraffic := client.SeoTraffic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `end_date` | `string` |  |
| `series` | `[]any` |  |
| `site_url` | `string` |  |
| `start_date` | `string` |  |
| `top_countries` | `[]any` |  |
| `top_pages` | `[]any` |  |
| `top_queries` | `[]any` |  |
| `totals` | `map[string]any` |  |

#### Example: List

```go
seoTraffics, err := client.SeoTraffic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range seoTraffics.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### ShareAccessLink

Create an instance: `shareAccessLink := client.ShareAccessLink(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `share_token` | `string` |  |
| `share_url` | `string` |  |

#### Example: Create

```go
result, err := client.ShareAccessLink(nil).Create(map[string]any{
    "share_token": "example_share_token",
    "share_url": "example_share_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### Site

Create an instance: `site := client.Site(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
site, err := client.Site(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(site.(sdk.Entity).Data()) // the loaded entity's record
```


### Slide

Create an instance: `slide := client.Slide(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `caption` | `any` |  |
| `id` | `string` |  |
| `prompt` | `any` |  |

#### Example: Create

```go
result, err := client.Slide(nil).Create(map[string]any{
    "carousel_id": "example_carousel_id",
    "slide_index": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### SlugValidation

Create an instance: `slugValidation := client.SlugValidation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `reason` | `any` |  |
| `valid` | `bool` |  |

#### Example: Load

```go
slugValidation, err := client.SlugValidation(nil).Load(map[string]any{"slug": "slug"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(slugValidation.(sdk.Entity).Data()) // the loaded entity's record
```


### Social

Create an instance: `social := client.Social(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

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

```go
social, err := client.Social(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(social.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
socials, err := client.Social(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range socials.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.Social(nil).Create(map[string]any{
    "code": "example_code",
    "code_verifier": "example_code_verifier",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### SocialScanPreview

Create an instance: `socialScanPreview := client.SocialScanPreview(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `instagram_handle` | `any` | Instagram username/handle to scrape |
| `posts` | `[]any` |  |
| `success` | `bool` |  |
| `tiktok_handle` | `any` | TikTok username/handle to scrape |

#### Example: Create

```go
result, err := client.SocialScanPreview(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### SocialScanProcess

Create an instance: `socialScanProcess := client.SocialScanProcess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `posts` | `[]any` |  |
| `product_id` | `string` |  |
| `success` | `bool` |  |
| `task_id` | `string` |  |

#### Example: Create

```go
result, err := client.SocialScanProcess(nil).Create(map[string]any{
    "posts": []any{},
    "product_id": "example_product_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### SocialScanSave

Create an instance: `socialScanSave := client.SocialScanSave(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `media_asset_ids` | `[]any` |  |
| `posts` | `[]any` |  |
| `product_id` | `string` |  |
| `success` | `bool` |  |

#### Example: Create

```go
result, err := client.SocialScanSave(nil).Create(map[string]any{
    "posts": []any{},
    "product_id": "example_product_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### Sora2Avatar

Create an instance: `sora2Avatar := client.Sora2Avatar(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_frame_url` | `any` |  |
| `created_at` | `string` |  |
| `current_step` | `int` |  |
| `headshot_url` | `any` |  |
| `id` | `string` |  |
| `logs` | `map[string]any` |  |
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

```go
sora2Avatar, err := client.Sora2Avatar(nil).Load(map[string]any{"id": "sora2_avatar_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(sora2Avatar.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
sora2Avatars, err := client.Sora2Avatar(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range sora2Avatars.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### Sora2AvatarAssetUpload

Create an instance: `sora2AvatarAssetUpload := client.Sora2AvatarAssetUpload(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### Sora2AvatarStat

Create an instance: `sora2AvatarStat := client.Sora2AvatarStat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `by_age_bucket` | `map[string]any` |  |
| `by_gender` | `map[string]any` |  |
| `by_prompt_key` | `map[string]any` |  |
| `by_race` | `map[string]any` |  |
| `completed_avatars` | `int` |  |
| `completion_rate` | `float64` |  |
| `total_avatars` | `int` |  |

#### Example: Load

```go
sora2AvatarStat, err := client.Sora2AvatarStat(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(sora2AvatarStat.(sdk.Entity).Data()) // the loaded entity's record
```


### Stat

Create an instance: `stat := client.Stat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Example: List

```go
stats, err := client.Stat(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range stats.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### StatsRefreshBackfill

Create an instance: `statsRefreshBackfill := client.StatsRefreshBackfill(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `message` | `string` |  |
| `status` | `string` |  |
| `task_id` | `string` |  |

#### Example: Create

```go
result, err := client.StatsRefreshBackfill(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### StatsRefreshIssue

Create an instance: `statsRefreshIssue := client.StatsRefreshIssue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aged_over_24h` | `bool` |  |
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
| `retry_count` | `int` |  |
| `schedule_queue_id` | `string` |  |
| `scheduled_datetime_utc` | `string` |  |
| `stale_after_sla` | `bool` |  |
| `status` | `string` |  |
| `user_email_snapshot` | `string` |  |
| `user_id` | `string` |  |

#### Example: List

```go
statsRefreshIssues, err := client.StatsRefreshIssue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range statsRefreshIssues.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### StatsRefreshOverview

Create an instance: `statsRefreshOverview := client.StatsRefreshOverview(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_run` | `any` |  |
| `aged_over_24h` | `int` |  |
| `backlog_preview` | `[]any` |  |
| `coverage_percent` | `float64` |  |
| `customer_counts` | `map[string]any` |  |
| `date` | `string` |  |
| `generated_at` | `string` |  |
| `method_counts` | `map[string]any` |  |
| `platform_counts` | `map[string]any` |  |
| `platform_units_resolved` | `int` |  |
| `platform_units_total` | `int` |  |
| `platform_units_unresolved` | `int` |  |
| `posted_entries` | `int` |  |
| `reason_counts` | `map[string]any` |  |
| `sla_deadline_et` | `string` |  |
| `stale_after_sla` | `int` |  |
| `top_affected_customers` | `[]any` |  |

#### Example: List

```go
statsRefreshOverviews, err := client.StatsRefreshOverview(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range statsRefreshOverviews.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### StatsRefreshRunSummary

Create an instance: `statsRefreshRunSummary := client.StatsRefreshRunSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `celery_task_id` | `string` |  |
| `completed_at` | `any` |  |
| `entries_failed` | `int` |  |
| `entries_skipped` | `int` |  |
| `entries_total` | `int` |  |
| `entries_updated` | `int` |  |
| `error_summary_json` | `any` |  |
| `id` | `string` |  |
| `issues_opened` | `int` |  |
| `issues_resolved` | `int` |  |
| `platform_units_resolved` | `int` |  |
| `platform_units_total` | `int` |  |
| `platform_units_unresolved` | `int` |  |
| `platform_updates_via_profile` | `int` |  |
| `platform_updates_via_url` | `int` |  |
| `provider` | `any` |  |
| `refresh_trigger` | `any` |  |
| `requested_by_email` | `any` |  |
| `run_type` | `string` |  |
| `started_at` | `string` |  |
| `status` | `string` |  |
| `target_date_et` | `any` |  |
| `users_count` | `int` |  |

#### Example: List

```go
statsRefreshRunSummarys, err := client.StatsRefreshRunSummary(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range statsRefreshRunSummarys.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### StatsRefreshTaskTrigger

Create an instance: `statsRefreshTaskTrigger := client.StatsRefreshTaskTrigger(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `message` | `string` |  |
| `status` | `string` |  |
| `target_date` | `string` |  |
| `task_id` | `string` |  |
| `users_count` | `int` |  |

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### Stripe

Create an instance: `stripe := client.Stripe(nil)`


### Style

Create an instance: `style := client.Style(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
style, err := client.Style(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(style.(sdk.Entity).Data()) // the loaded entity's record
```


### Template

Create an instance: `template := client.Template(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
template, err := client.Template(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(template.(sdk.Entity).Data()) // the loaded entity's record
```


### TikTokCreatorInfo

Create an instance: `tikTokCreatorInfo := client.TikTokCreatorInfo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commentDisabled` | `bool` |  |
| `creatorAvatarUrl` | `any` |  |
| `creatorNickname` | `any` |  |
| `creatorUsername` | `any` |  |
| `duetDisabled` | `bool` |  |
| `maxVideoPostDurationSec` | `int` |  |
| `privacyLevelOptions` | `[]any` |  |
| `stitchDisabled` | `bool` |  |

#### Example: List

```go
tikTokCreatorInfos, err := client.TikTokCreatorInfo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range tikTokCreatorInfos.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### TopPost

Create an instance: `topPost := client.TopPost(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comments` | `int` |  |
| `id` | `string` |  |
| `likes` | `int` |  |
| `platforms` | `[]any` |  |
| `scheduled_datetime` | `string` |  |
| `user_email` | `string` |  |
| `user_id` | `string` |  |
| `views` | `int` |  |

#### Example: List

```go
topPosts, err := client.TopPost(nil).List(map[string]any{"date": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range topPosts.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### UploadPostAgent

Create an instance: `uploadPostAgent := client.UploadPostAgent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.UploadPostAgent(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### User

Create an instance: `user := client.User(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountType` | `any` |  |
| `activatedByAdminAt` | `any` |  |
| `activatedByAdminId` | `any` |  |
| `agents` | `[]any` |  |
| `agentsCount` | `any` |  |
| `attribution` | `any` |  |
| `avatarImageUrl` | `any` |  |
| `avatarVoiceUrl` | `any` |  |
| `createdAt` | `string` |  |
| `credits` | `int` |  |
| `email` | `string` |  |
| `googleId` | `any` |  |
| `hasSeenScheduleWelcome` | `bool` |  |
| `id` | `string` |  |
| `industry` | `any` |  |
| `instagramId` | `any` |  |
| `isActivatedByAdmin` | `bool` |  |
| `isAdmin` | `bool` |  |
| `isInternalUser` | `any` |  |
| `isMigrated` | `any` |  |
| `isResettingProduct` | `any` |  |
| `membership` | `any` |  |
| `name` | `string` |  |
| `partnerDirectLoginDisabled` | `bool` |  |
| `partnerExternalUserId` | `any` |  |
| `partnerPolicyCode` | `any` |  |
| `partnerSource` | `any` |  |
| `picture` | `any` |  |
| `stripeCustomerId` | `any` |  |
| `stripeSubscriptionId` | `any` |  |
| `subscriptionCurrentPeriodEnd` | `any` |  |
| `subscriptionStatus` | `any` |  |
| `totalCount` | `int` |  |
| `updatedAt` | `string` |  |
| `userId` | `string` |  |

#### Example: Load

```go
user, err := client.User(nil).Load(map[string]any{"id": "user_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(user.(sdk.Entity).Data()) // the loaded entity's record
```


### UserAgent

Create an instance: `userAgent := client.UserAgent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent` | `map[string]any` |  |
| `assigned_at` | `string` |  |
| `assignment_id` | `string` |  |
| `expires_at` | `any` |  |
| `id` | `string` |  |
| `status` | `string` |  |

#### Example: List

```go
userAgents, err := client.UserAgent(nil).List(map[string]any{"id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range userAgents.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### UserHealthDetail

Create an instance: `userHealthDetail := client.UserHealthDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `any` |  |
| `activated` | `bool` |  |
| `activated_by_admin_at` | `any` |  |
| `activated_by_admin_id` | `string` |  |
| `admin_notes` | `any` |  |
| `agents_count` | `int` |  |
| `assigned_agents` | `[]any` |  |
| `assigned_agents_count` | `int` |  |
| `assigned_agents_preview_limit` | `int` |  |
| `assigned_agents_truncated` | `bool` |  |
| `auto_schedule_enabled` | `bool` |  |
| `comments_expected_per_day` | `int` |  |
| `comments_fix_block_reason` | `any` |  |
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
| `yesterday_failed_entries` | `[]any` |  |
| `yesterday_posted` | `int` |  |
| `yesterday_total` | `int` |  |

#### Example: List

```go
userHealthDetails, err := client.UserHealthDetail(nil).List(map[string]any{"id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range userHealthDetails.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### UserWithAvatarSubmission

Create an instance: `userWithAvatarSubmission := client.UserWithAvatarSubmission(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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

```go
userWithAvatarSubmissions, err := client.UserWithAvatarSubmission(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range userWithAvatarSubmissions.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### UsersHealth

Create an instance: `usersHealth := client.UsersHealth(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_type` | `any` |  |
| `admin_notes` | `any` |  |
| `agents_count` | `int` |  |
| `agents_health` | `string` |  |
| `agents_issue` | `any` |  |
| `assigned_agents_count` | `int` |  |
| `auto_schedule_enabled` | `bool` |  |
| `auto_schedule_health` | `string` |  |
| `auto_schedule_issue` | `any` |  |
| `auto_schedule_today_health` | `string` |  |
| `auto_schedule_today_issue` | `any` |  |
| `created_at` | `string` |  |
| `email` | `string` |  |
| `expected_agents_count` | `int` |  |
| `id` | `string` |  |
| `is_bookmarked` | `bool` |  |
| `is_internal_user` | `bool` |  |
| `is_migrated` | `bool` |  |
| `membership` | `any` |  |
| `name` | `string` |  |
| `posts_health` | `string` |  |
| `posts_issue` | `any` |  |
| `posts_today_health` | `string` |  |
| `posts_today_issue` | `any` |  |
| `subscription_status` | `any` |  |
| `today_expected_count` | `int` |  |
| `today_failed_count` | `int` |  |
| `today_scheduled_count` | `int` |  |
| `today_total_count` | `int` |  |
| `tomorrow_expected_count` | `int` |  |
| `tomorrow_scheduled_count` | `int` |  |
| `yesterday_failed_count` | `int` |  |
| `yesterday_total_count` | `int` |  |

#### Example: List

```go
usersHealths, err := client.UsersHealth(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range usersHealths.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### Video

Create an instance: `video := client.Video(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_id` | `string` |  |
| `bookmarked` | `any` |  |
| `captions` | `any` |  |
| `carousel_data` | `any` |  |
| `created_at` | `string` |  |
| `duration` | `float64` |  |
| `generation_status` | `any` |  |
| `id` | `string` |  |
| `image_prompt` | `any` |  |
| `is_onboarding` | `bool` |  |
| `is_template` | `bool` |  |
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

```go
video, err := client.Video(nil).Load(map[string]any{"id": "video_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(video.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### VideoRemixerWorker

Create an instance: `videoRemixerWorker := client.VideoRemixerWorker(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `captions_ass` | `string` |  |
| `captions_vtt` | `string` |  |
| `cost_usd` | `float64` |  |
| `error` | `string` |  |
| `file` | `string` |  |
| `kinds` | `[]any` |  |
| `lease_token` | `string` |  |
| `limit` | `int` |  |
| `manifest` | `string` |  |
| `model` | `string` |  |
| `processing_seconds` | `float64` |  |
| `prompt_version` | `string` |  |
| `result` | `map[string]any` |  |
| `thumbnail` | `string` |  |
| `tier` | `string` |  |
| `worker_id` | `string` |  |

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### WatchdogRecovery

Create an instance: `watchdogRecovery := client.WatchdogRecovery(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `item_id` | `string` |  |
| `passed` | `bool` |  |
| `table` | `string` |  |

#### Example: Load

```go
watchdogRecovery, err := client.WatchdogRecovery(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(watchdogRecovery.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

```go
result, err := client.WatchdogRecovery(nil).Create(map[string]any{
    "item_id": "example_item_id",
    "passed": true,
    "table": "example_table",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### WinningAd

Create an instance: `winningAd := client.WinningAd(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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

```go
winningAds, err := client.WinningAd(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range winningAds.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### XAdaptation

Create an instance: `xAdaptation := client.XAdaptation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
xAdaptation, err := client.XAdaptation(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(xAdaptation.(sdk.Entity).Data()) // the loaded entity's record
```


### ZerohumanAdminAccount

Create an instance: `zerohumanAdminAccount := client.ZerohumanAdminAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_mode` | `string` |  |
| `active_queue_count` | `int` |  |
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

```go
zerohumanAdminAccounts, err := client.ZerohumanAdminAccount(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range zerohumanAdminAccounts.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

An operation returns the entity, and its `Data()` returns the record. Use
`core.ToMapAny()` to safely cast that record, or data nested in it, to
`map[string]any`: it returns `nil` for anything else, an entity included.

### Package structure

```
github.com/voxgig-sdk/cracked-api-reference-sdk/go/
├── cracked-api-reference.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/cracked-api-reference-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
admininsight := client.AdminInsight(nil)
admininsight.List(nil, nil)

// admininsight.Data() now returns the admininsight data from the last list
// admininsight.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
