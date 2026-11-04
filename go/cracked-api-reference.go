package voxgigcrackedapireferencesdk

import (
	"github.com/voxgig-sdk/cracked-api-reference-sdk/go/core"
	"github.com/voxgig-sdk/cracked-api-reference-sdk/go/entity"
	"github.com/voxgig-sdk/cracked-api-reference-sdk/go/feature"
	_ "github.com/voxgig-sdk/cracked-api-reference-sdk/go/utility"
)

// Type aliases preserve external API.
type CrackedApiReferenceSDK = core.CrackedApiReferenceSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CrackedApiReferenceEntityBase = core.CrackedApiReferenceEntityBase

// Deprecated: use CrackedApiReferenceEntityBase.
type CrackedApiReferenceEntity = core.CrackedApiReferenceEntityBase

type StreamItem = core.StreamItem
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CrackedApiReferenceError = core.CrackedApiReferenceError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewActivateEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewActivateEntity(client, entopts)
	}
	core.NewActivateUserEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewActivateUserEntity(client, entopts)
	}
	core.NewActiveOnboardingEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewActiveOnboardingEntity(client, entopts)
	}
	core.NewAdminEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAdminEntity(client, entopts)
	}
	core.NewAdminAccountResetEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAdminAccountResetEntity(client, entopts)
	}
	core.NewAdminCarouselEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAdminCarouselEntity(client, entopts)
	}
	core.NewAdminCarouselDemoReviewEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAdminCarouselDemoReviewEntity(client, entopts)
	}
	core.NewAdminCustomerEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAdminCustomerEntity(client, entopts)
	}
	core.NewAdminCustomerSuccessEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAdminCustomerSuccessEntity(client, entopts)
	}
	core.NewAdminGeneratedVideoEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAdminGeneratedVideoEntity(client, entopts)
	}
	core.NewAdminHealthrxEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAdminHealthrxEntity(client, entopts)
	}
	core.NewAdminInsightEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAdminInsightEntity(client, entopts)
	}
	core.NewAdminLandingTaskEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAdminLandingTaskEntity(client, entopts)
	}
	core.NewAdminMetricsSummaryEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAdminMetricsSummaryEntity(client, entopts)
	}
	core.NewAdminPostEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAdminPostEntity(client, entopts)
	}
	core.NewAdminRecentSignupEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAdminRecentSignupEntity(client, entopts)
	}
	core.NewAdminSlideshowDiagEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAdminSlideshowDiagEntity(client, entopts)
	}
	core.NewAdminSlideshowImportEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAdminSlideshowImportEntity(client, entopts)
	}
	core.NewAdminUserViewEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAdminUserViewEntity(client, entopts)
	}
	core.NewAdminUsersTableItemEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAdminUsersTableItemEntity(client, entopts)
	}
	core.NewAdminVideoRemixerEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAdminVideoRemixerEntity(client, entopts)
	}
	core.NewAdvanceStepEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAdvanceStepEntity(client, entopts)
	}
	core.NewAgentEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAgentEntity(client, entopts)
	}
	core.NewAgentAccessCustomersHealthEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAgentAccessCustomersHealthEntity(client, entopts)
	}
	core.NewAgentAccessOverviewEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAgentAccessOverviewEntity(client, entopts)
	}
	core.NewAgentAccessPhilHourlyNotificationEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAgentAccessPhilHourlyNotificationEntity(client, entopts)
	}
	core.NewAgentAccessPhilStatsRefreshEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAgentAccessPhilStatsRefreshEntity(client, entopts)
	}
	core.NewAgentAccessPhilVideoEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAgentAccessPhilVideoEntity(client, entopts)
	}
	core.NewAgentAccessUserAgentEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAgentAccessUserAgentEntity(client, entopts)
	}
	core.NewAgentAccessUserPhoneFarmEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAgentAccessUserPhoneFarmEntity(client, entopts)
	}
	core.NewAgentAccessUserPostEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAgentAccessUserPostEntity(client, entopts)
	}
	core.NewAgentAccessUserSummaryEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAgentAccessUserSummaryEntity(client, entopts)
	}
	core.NewAgentAccessUserVideoEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAgentAccessUserVideoEntity(client, entopts)
	}
	core.NewAgentAccessUserWinningAdEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAgentAccessUserWinningAdEntity(client, entopts)
	}
	core.NewAgentAccessWinningAdsSummaryEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAgentAccessWinningAdsSummaryEntity(client, entopts)
	}
	core.NewAgentDetailEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAgentDetailEntity(client, entopts)
	}
	core.NewAgentHealthEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAgentHealthEntity(client, entopts)
	}
	core.NewAgentHealthCustomerOptionEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAgentHealthCustomerOptionEntity(client, entopts)
	}
	core.NewAgentHealthDetailEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAgentHealthDetailEntity(client, entopts)
	}
	core.NewAgentPostEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAgentPostEntity(client, entopts)
	}
	core.NewAgentStatEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAgentStatEntity(client, entopts)
	}
	core.NewAgentSummaryEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAgentSummaryEntity(client, entopts)
	}
	core.NewAgentsSummaryEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAgentsSummaryEntity(client, entopts)
	}
	core.NewAnalysisStatusEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAnalysisStatusEntity(client, entopts)
	}
	core.NewAnalyticsPostEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAnalyticsPostEntity(client, entopts)
	}
	core.NewAnalyzeProductEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAnalyzeProductEntity(client, entopts)
	}
	core.NewAssignAgentEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAssignAgentEntity(client, entopts)
	}
	core.NewAuthEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAuthEntity(client, entopts)
	}
	core.NewAutoScheduleSettingEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewAutoScheduleSettingEntity(client, entopts)
	}
	core.NewBulkTikTokStatsUpdateEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewBulkTikTokStatsUpdateEntity(client, entopts)
	}
	core.NewCarouselEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewCarouselEntity(client, entopts)
	}
	core.NewCarouselAgentDetailEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewCarouselAgentDetailEntity(client, entopts)
	}
	core.NewCarouselStatusEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewCarouselStatusEntity(client, entopts)
	}
	core.NewChatHistoryEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewChatHistoryEntity(client, entopts)
	}
	core.NewChatSessionEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewChatSessionEntity(client, entopts)
	}
	core.NewCommentEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewCommentEntity(client, entopts)
	}
	core.NewCommentCampaignEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewCommentCampaignEntity(client, entopts)
	}
	core.NewCompleteChatCheckoutEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewCompleteChatCheckoutEntity(client, entopts)
	}
	core.NewCreateBlackoutSora2VideoEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewCreateBlackoutSora2VideoEntity(client, entopts)
	}
	core.NewCreateCarouselEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewCreateCarouselEntity(client, entopts)
	}
	core.NewCreateProductEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewCreateProductEntity(client, entopts)
	}
	core.NewCreateResetProductV6EntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewCreateResetProductV6Entity(client, entopts)
	}
	core.NewCreateSora2VideoEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewCreateSora2VideoEntity(client, entopts)
	}
	core.NewCreateVariationEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewCreateVariationEntity(client, entopts)
	}
	core.NewCustomerEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewCustomerEntity(client, entopts)
	}
	core.NewCustomerHealthEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewCustomerHealthEntity(client, entopts)
	}
	core.NewCustomerHealthAllCustomersItemEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewCustomerHealthAllCustomersItemEntity(client, entopts)
	}
	core.NewCustomerHealthViewsSummaryEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewCustomerHealthViewsSummaryEntity(client, entopts)
	}
	core.NewDailyEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewDailyEntity(client, entopts)
	}
	core.NewDailyStatusEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewDailyStatusEntity(client, entopts)
	}
	core.NewDedicatedAgentsDashboardEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewDedicatedAgentsDashboardEntity(client, entopts)
	}
	core.NewEnterpriseAgentEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewEnterpriseAgentEntity(client, entopts)
	}
	core.NewExactAvailabilityEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewExactAvailabilityEntity(client, entopts)
	}
	core.NewExactFormulaEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewExactFormulaEntity(client, entopts)
	}
	core.NewExtractV2EntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewExtractV2Entity(client, entopts)
	}
	core.NewFailedPostEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewFailedPostEntity(client, entopts)
	}
	core.NewFileEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewFileEntity(client, entopts)
	}
	core.NewGenerateBlackoutSora2PromptEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewGenerateBlackoutSora2PromptEntity(client, entopts)
	}
	core.NewGeneratePomelliDemoEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewGeneratePomelliDemoEntity(client, entopts)
	}
	core.NewGeneratePromptEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewGeneratePromptEntity(client, entopts)
	}
	core.NewGenerateSora2PromptEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewGenerateSora2PromptEntity(client, entopts)
	}
	core.NewHealthrxEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewHealthrxEntity(client, entopts)
	}
	core.NewInitResetProductV6EntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewInitResetProductV6Entity(client, entopts)
	}
	core.NewIrisCapabilityEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewIrisCapabilityEntity(client, entopts)
	}
	core.NewIrisChatEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewIrisChatEntity(client, entopts)
	}
	core.NewIrisConnectorEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewIrisConnectorEntity(client, entopts)
	}
	core.NewIrisStatusEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewIrisStatusEntity(client, entopts)
	}
	core.NewIrisTaskEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewIrisTaskEntity(client, entopts)
	}
	core.NewIrisUsageEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewIrisUsageEntity(client, entopts)
	}
	core.NewLandingEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewLandingEntity(client, entopts)
	}
	core.NewLandingStatEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewLandingStatEntity(client, entopts)
	}
	core.NewLandingStatusEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewLandingStatusEntity(client, entopts)
	}
	core.NewLinkInBioEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewLinkInBioEntity(client, entopts)
	}
	core.NewLinkInDmEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewLinkInDmEntity(client, entopts)
	}
	core.NewLinkInPostEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewLinkInPostEntity(client, entopts)
	}
	core.NewLinkUserEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewLinkUserEntity(client, entopts)
	}
	core.NewMediaAssetEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewMediaAssetEntity(client, entopts)
	}
	core.NewMenEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewMenEntity(client, entopts)
	}
	core.NewMicrodramaEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewMicrodramaEntity(client, entopts)
	}
	core.NewMicrohubPublicEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewMicrohubPublicEntity(client, entopts)
	}
	core.NewOnboardingStatusEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewOnboardingStatusEntity(client, entopts)
	}
	core.NewOnboardingV6EntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewOnboardingV6Entity(client, entopts)
	}
	core.NewPaidUserEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewPaidUserEntity(client, entopts)
	}
	core.NewPexelEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewPexelEntity(client, entopts)
	}
	core.NewPhoneAdminAvailableAgentSourceEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewPhoneAdminAvailableAgentSourceEntity(client, entopts)
	}
	core.NewProductEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewProductEntity(client, entopts)
	}
	core.NewProductDashboardEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewProductDashboardEntity(client, entopts)
	}
	core.NewProductDashboardViewEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewProductDashboardViewEntity(client, entopts)
	}
	core.NewProductDemoEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewProductDemoEntity(client, entopts)
	}
	core.NewProductLandingEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewProductLandingEntity(client, entopts)
	}
	core.NewPublicResumeStatusEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewPublicResumeStatusEntity(client, entopts)
	}
	core.NewReRollVideoEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewReRollVideoEntity(client, entopts)
	}
	core.NewRecordDemoBookedEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewRecordDemoBookedEntity(client, entopts)
	}
	core.NewRefreshStatEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewRefreshStatEntity(client, entopts)
	}
	core.NewRemixerClipperEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewRemixerClipperEntity(client, entopts)
	}
	core.NewResetProductEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewResetProductEntity(client, entopts)
	}
	core.NewRetryWebsiteScrapeEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewRetryWebsiteScrapeEntity(client, entopts)
	}
	core.NewRootGetEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewRootGetEntity(client, entopts)
	}
	core.NewSaveSurveyEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewSaveSurveyEntity(client, entopts)
	}
	core.NewScanSocialEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewScanSocialEntity(client, entopts)
	}
	core.NewScanSocialsPublicEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewScanSocialsPublicEntity(client, entopts)
	}
	core.NewScanSocialsStatusEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewScanSocialsStatusEntity(client, entopts)
	}
	core.NewScheduleQueueEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewScheduleQueueEntity(client, entopts)
	}
	core.NewScheduleV2EntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewScheduleV2Entity(client, entopts)
	}
	core.NewScrapeEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewScrapeEntity(client, entopts)
	}
	core.NewScrapeWebsitePublicEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewScrapeWebsitePublicEntity(client, entopts)
	}
	core.NewScrapedDataEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewScrapedDataEntity(client, entopts)
	}
	core.NewScrapingStatusEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewScrapingStatusEntity(client, entopts)
	}
	core.NewSelfServeActivateEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewSelfServeActivateEntity(client, entopts)
	}
	core.NewSeoEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewSeoEntity(client, entopts)
	}
	core.NewSeoAiMentionEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewSeoAiMentionEntity(client, entopts)
	}
	core.NewSeoBacklinkEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewSeoBacklinkEntity(client, entopts)
	}
	core.NewSeoKeywordEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewSeoKeywordEntity(client, entopts)
	}
	core.NewSeoOverviewEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewSeoOverviewEntity(client, entopts)
	}
	core.NewSeoTrafficEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewSeoTrafficEntity(client, entopts)
	}
	core.NewShareAccessLinkEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewShareAccessLinkEntity(client, entopts)
	}
	core.NewSiteEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewSiteEntity(client, entopts)
	}
	core.NewSlideEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewSlideEntity(client, entopts)
	}
	core.NewSlugValidationEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewSlugValidationEntity(client, entopts)
	}
	core.NewSocialEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewSocialEntity(client, entopts)
	}
	core.NewSocialScanPreviewEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewSocialScanPreviewEntity(client, entopts)
	}
	core.NewSocialScanProcessEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewSocialScanProcessEntity(client, entopts)
	}
	core.NewSocialScanSaveEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewSocialScanSaveEntity(client, entopts)
	}
	core.NewSora2AvatarEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewSora2AvatarEntity(client, entopts)
	}
	core.NewSora2AvatarAssetUploadEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewSora2AvatarAssetUploadEntity(client, entopts)
	}
	core.NewSora2AvatarStatEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewSora2AvatarStatEntity(client, entopts)
	}
	core.NewStatEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewStatEntity(client, entopts)
	}
	core.NewStatsRefreshBackfillEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewStatsRefreshBackfillEntity(client, entopts)
	}
	core.NewStatsRefreshIssueEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewStatsRefreshIssueEntity(client, entopts)
	}
	core.NewStatsRefreshOverviewEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewStatsRefreshOverviewEntity(client, entopts)
	}
	core.NewStatsRefreshRunSummaryEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewStatsRefreshRunSummaryEntity(client, entopts)
	}
	core.NewStatsRefreshTaskTriggerEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewStatsRefreshTaskTriggerEntity(client, entopts)
	}
	core.NewStripeEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewStripeEntity(client, entopts)
	}
	core.NewStyleEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewStyleEntity(client, entopts)
	}
	core.NewTemplateEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewTemplateEntity(client, entopts)
	}
	core.NewTikTokCreatorInfoEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewTikTokCreatorInfoEntity(client, entopts)
	}
	core.NewTopPostEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewTopPostEntity(client, entopts)
	}
	core.NewUploadPostAgentEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewUploadPostAgentEntity(client, entopts)
	}
	core.NewUserEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewUserEntity(client, entopts)
	}
	core.NewUserAgentEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewUserAgentEntity(client, entopts)
	}
	core.NewUserHealthDetailEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewUserHealthDetailEntity(client, entopts)
	}
	core.NewUserWithAvatarSubmissionEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewUserWithAvatarSubmissionEntity(client, entopts)
	}
	core.NewUsersHealthEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewUsersHealthEntity(client, entopts)
	}
	core.NewVideoEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewVideoEntity(client, entopts)
	}
	core.NewVideoRemixerWorkerEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewVideoRemixerWorkerEntity(client, entopts)
	}
	core.NewWatchdogRecoveryEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewWatchdogRecoveryEntity(client, entopts)
	}
	core.NewWinningAdEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewWinningAdEntity(client, entopts)
	}
	core.NewXAdaptationEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewXAdaptationEntity(client, entopts)
	}
	core.NewZerohumanAdminAccountEntityFunc = func(client *core.CrackedApiReferenceSDK, entopts map[string]any) core.CrackedApiReferenceEntityBase {
		return entity.NewZerohumanAdminAccountEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCrackedApiReferenceSDK = core.NewCrackedApiReferenceSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewCrackedApiReferenceSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *CrackedApiReferenceSDK  { return NewCrackedApiReferenceSDK(nil) }
func Test() *CrackedApiReferenceSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
