package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewActivateEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewActivateUserEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewActiveOnboardingEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAdminEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAdminAccountResetEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAdminCarouselEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAdminCarouselDemoReviewEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAdminCustomerEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAdminCustomerSuccessEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAdminGeneratedVideoEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAdminHealthrxEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAdminInsightEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAdminLandingTaskEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAdminMetricsSummaryEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAdminPostEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAdminRecentSignupEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAdminSlideshowDiagEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAdminSlideshowImportEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAdminUserViewEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAdminUsersTableItemEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAdminVideoRemixerEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAdvanceStepEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAgentEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAgentAccessCustomersHealthEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAgentAccessOverviewEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAgentAccessPhilHourlyNotificationEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAgentAccessPhilStatsRefreshEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAgentAccessPhilVideoEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAgentAccessUserAgentEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAgentAccessUserPhoneFarmEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAgentAccessUserPostEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAgentAccessUserSummaryEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAgentAccessUserVideoEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAgentAccessUserWinningAdEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAgentAccessWinningAdsSummaryEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAgentDetailEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAgentHealthEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAgentHealthCustomerOptionEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAgentHealthDetailEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAgentPostEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAgentStatEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAgentSummaryEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAgentsSummaryEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAnalysisStatusEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAnalyticsPostEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAnalyzeProductEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAssignAgentEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAuthEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewAutoScheduleSettingEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewBulkTikTokStatsUpdateEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewCarouselEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewCarouselAgentDetailEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewCarouselStatusEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewChatHistoryEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewChatSessionEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewCommentEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewCommentCampaignEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewCompleteChatCheckoutEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewCreateBlackoutSora2VideoEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewCreateCarouselEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewCreateProductEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewCreateResetProductV6EntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewCreateSora2VideoEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewCreateVariationEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewCustomerEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewCustomerHealthEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewCustomerHealthAllCustomersItemEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewCustomerHealthViewsSummaryEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewDailyEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewDailyStatusEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewDedicatedAgentsDashboardEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewEnterpriseAgentEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewExactAvailabilityEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewExactFormulaEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewExtractV2EntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewFailedPostEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewFileEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewGenerateBlackoutSora2PromptEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewGeneratePomelliDemoEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewGeneratePromptEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewGenerateSora2PromptEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewHealthrxEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewInitResetProductV6EntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewIrisCapabilityEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewIrisChatEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewIrisConnectorEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewIrisStatusEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewIrisTaskEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewIrisUsageEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewLandingEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewLandingStatEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewLandingStatusEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewLinkInBioEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewLinkInDmEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewLinkInPostEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewLinkUserEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewMediaAssetEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewMenEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewMicrodramaEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewMicrohubPublicEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewOnboardingStatusEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewOnboardingV6EntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewPaidUserEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewPexelEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewPhoneAdminAvailableAgentSourceEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewProductEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewProductDashboardEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewProductDashboardViewEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewProductDemoEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewProductLandingEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewPublicResumeStatusEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewReRollVideoEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewRecordDemoBookedEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewRefreshStatEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewRemixerClipperEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewResetProductEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewRetryWebsiteScrapeEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewRootGetEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewSaveSurveyEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewScanSocialEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewScanSocialsPublicEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewScanSocialsStatusEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewScheduleQueueEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewScheduleV2EntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewScrapeEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewScrapeWebsitePublicEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewScrapedDataEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewScrapingStatusEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewSelfServeActivateEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewSeoEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewSeoAiMentionEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewSeoBacklinkEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewSeoKeywordEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewSeoOverviewEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewSeoTrafficEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewShareAccessLinkEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewSiteEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewSlideEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewSlugValidationEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewSocialEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewSocialScanPreviewEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewSocialScanProcessEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewSocialScanSaveEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewSora2AvatarEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewSora2AvatarAssetUploadEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewSora2AvatarStatEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewStatEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewStatsRefreshBackfillEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewStatsRefreshIssueEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewStatsRefreshOverviewEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewStatsRefreshRunSummaryEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewStatsRefreshTaskTriggerEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewStripeEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewStyleEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewTemplateEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewTikTokCreatorInfoEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewTopPostEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewUploadPostAgentEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewUserEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewUserAgentEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewUserHealthDetailEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewUserWithAvatarSubmissionEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewUsersHealthEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewVideoEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewVideoRemixerWorkerEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewWatchdogRecoveryEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewWinningAdEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewXAdaptationEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

var NewZerohumanAdminAccountEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntityBase

