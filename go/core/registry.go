package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewActivateEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewActivateUserEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewActiveOnboardingEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAdminEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAdminAccountResetEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAdminCarouselEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAdminCarouselDemoReviewEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAdminCustomerEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAdminCustomerSuccessEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAdminGeneratedVideoEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAdminHealthrxEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAdminInsightEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAdminLandingTaskEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAdminMetricsSummaryEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAdminPostEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAdminRecentSignupEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAdminSlideshowDiagEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAdminSlideshowImportEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAdminUserViewEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAdminUsersTableItemEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAdminVideoRemixerEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAdvanceStepEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAgentEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAgentAccessCustomersHealthEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAgentAccessOverviewEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAgentAccessPhilHourlyNotificationEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAgentAccessPhilStatsRefreshEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAgentAccessPhilVideoEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAgentAccessUserAgentEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAgentAccessUserPhoneFarmEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAgentAccessUserPostEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAgentAccessUserSummaryEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAgentAccessUserVideoEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAgentAccessUserWinningAdEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAgentAccessWinningAdsSummaryEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAgentDetailEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAgentHealthEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAgentHealthCustomerOptionEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAgentHealthDetailEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAgentPostEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAgentStatEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAgentSummaryEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAgentsSummaryEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAnalysisStatusEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAnalyticsPostEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAnalyzeProductEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAssignAgentEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAuthEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewAutoScheduleSettingEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewBulkTikTokStatsUpdateEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewCarouselEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewCarouselAgentDetailEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewCarouselStatusEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewChatEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewChatHistoryEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewChatSessionEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewCommentEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewCommentCampaignEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewCompleteChatCheckoutEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewCreateBlackoutSora2VideoEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewCreateCarouselEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewCreateProductEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewCreateResetProductV6EntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewCreateSora2VideoEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewCreateVariationEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewCustomerEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewCustomerHealthEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewCustomerHealthAllCustomersItemEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewCustomerHealthViewsSummaryEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewDailyEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewDailyStatusEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewDedicatedAgentsDashboardEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewEnterpriseAgentEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewEnterpriseProductEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewExactAvailabilityEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewExactFormulaEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewExtractV2EntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewFailedPostEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewFileEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewGenerateBlackoutSora2PromptEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewGeneratePomelliDemoEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewGeneratePromptEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewGenerateSora2PromptEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewHealthrxEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewInitResetProductV6EntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewIriEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewIrisCapabilityEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewIrisChatEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewIrisConnectorEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewIrisStatusEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewIrisTaskEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewIrisUsageEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewLandingEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewLandingStatEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewLandingStatusEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewLinkInBioEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewLinkInDmEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewLinkInPostEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewLinkUserEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewMediaAssetEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewMenEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewMicrodramaEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewMicrohubPublicEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewOnboardingStatusEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewOnboardingV6EntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewPaidUserEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewPexelEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewPhoneAdminAvailableAgentSourceEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewProductEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewProductDashboardEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewProductDashboardViewEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewProductDemoEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewProductLandingEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewPublicResumeStatusEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewReRollVideoEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewReadRootGetEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewRecordDemoBookedEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewRefreshStatEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewRemixerClipperEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewResetProductEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewRetryWebsiteScrapeEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewSaveSurveyEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewScanSocialEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewScanSocialsPublicEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewScanSocialsStatusEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewScheduleV2EntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewScrapeEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewScrapeWebsitePublicEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewScrapedDataEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewScrapingStatusEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewSelfServeActivateEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewSeoEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewSeoAiMentionEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewSeoBacklinkEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewSeoKeywordEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewSeoOverviewEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewSeoTrafficEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewShareAccessLinkEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewSiteEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewSlideEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewSlugValidationEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewSocialEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewSocialScanPreviewEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewSocialScanProcessEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewSocialScanSaveEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewSora2AvatarEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewSora2AvatarAssetUploadEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewSora2AvatarStatEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewStatEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewStatsRefreshBackfillEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewStatsRefreshIssueEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewStatsRefreshOverviewEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewStatsRefreshRunSummaryEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewStatsRefreshTaskTriggerEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewStripeEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewStyleEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewTemplateEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewTikTokCreatorInfoEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewTopPostEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewUploadPostAgentEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewUserEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewUserAgentEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewUserHealthDetailEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewUserWithAvatarSubmissionEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewUsersHealthEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewVideoEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewVideoRemixerWorkerEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewWatchdogRecoveryEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewWinningAdEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewXAdaptationEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

var NewZerohumanAdminAccountEntityFunc func(client *CrackedApiReferenceSDK, entopts map[string]any) CrackedApiReferenceEntity

