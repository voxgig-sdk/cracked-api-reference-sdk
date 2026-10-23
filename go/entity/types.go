// Typed models for the CrackedApiReference SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/cracked-api-reference-sdk/go/core"
)

// Activate is the typed data model for the activate entity.
type Activate struct {
}

// ActivateCreateData is the typed request payload for Activate.CreateTyped.
type ActivateCreateData struct {
	UserId string `json:"user_id"`
	ActivatedAt *any `json:"activated_at,omitempty"`
	Message string `json:"message"`
	Success bool `json:"success"`
}

// ActivateUser is the typed data model for the activate_user entity.
type ActivateUser struct {
}

// ActivateUserCreateData is the typed request payload for ActivateUser.CreateTyped.
type ActivateUserCreateData struct {
	UserId string `json:"user_id"`
	ActivatedAt *any `json:"activated_at,omitempty"`
	Message string `json:"message"`
	Success bool `json:"success"`
}

// ActiveOnboarding is the typed data model for the active_onboarding entity.
type ActiveOnboarding struct {
}

// ActiveOnboardingLoadMatch is the typed request payload for ActiveOnboarding.LoadTyped.
type ActiveOnboardingLoadMatch struct {
	CurrentStep *any `json:"current_step,omitempty"`
	HasActiveOnboarding *bool `json:"has_active_onboarding,omitempty"`
	OnboardingDataId *string `json:"onboarding_data_id,omitempty"`
}

// Admin is the typed data model for the admin entity.
type Admin struct {
}

// AdminLoadMatch is the typed request payload for Admin.LoadTyped.
type AdminLoadMatch struct {
	Date string `json:"date"`
	Day *any `json:"day,omitempty"`
	UserEmail *any `json:"user_email,omitempty"`
	UserId *string `json:"user_id,omitempty"`
}

// AdminListMatch is the typed request payload for Admin.ListTyped.
type AdminListMatch struct {
	Apply *bool `json:"apply,omitempty"`
	Count *int `json:"count,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DateFrom *any `json:"date_from,omitempty"`
	DateTo *any `json:"date_to,omitempty"`
	Email *string `json:"email,omitempty"`
	Id *string `json:"id,omitempty"`
	IncludeFailed *bool `json:"include_failed,omitempty"`
	IncludePending *bool `json:"include_pending,omitempty"`
	IncludeRecords *bool `json:"include_records,omitempty"`
	IssueIds *any `json:"issue_ids,omitempty"`
	OnlyActive *bool `json:"only_active,omitempty"`
	Platform *any `json:"platform,omitempty"`
	PostingMethod *any `json:"posting_method,omitempty"`
	ProductId *string `json:"product_id,omitempty"`
	Query *any `json:"query,omitempty"`
	Reason *any `json:"reason,omitempty"`
	Regenerate *bool `json:"regenerate,omitempty"`
	Status *string `json:"status,omitempty"`
	UserMembership *any `json:"user_membership,omitempty"`
	UserName *any `json:"user_name,omitempty"`
	UserOnboardingStep *any `json:"user_onboarding_step,omitempty"`
	VideoType *string `json:"video_type,omitempty"`
}

// AdminCreateData is the typed request payload for Admin.CreateTyped.
type AdminCreateData struct {
	UserId string `json:"user_id"`
	Apply *bool `json:"apply,omitempty"`
	Count int `json:"count"`
	CreatedAt string `json:"created_at"`
	DateFrom any `json:"date_from"`
	DateTo any `json:"date_to"`
	Email string `json:"email"`
	Id string `json:"id"`
	IncludeFailed *bool `json:"include_failed,omitempty"`
	IncludePending *bool `json:"include_pending,omitempty"`
	IncludeRecords *bool `json:"include_records,omitempty"`
	IssueIds *any `json:"issue_ids,omitempty"`
	OnlyActive *bool `json:"only_active,omitempty"`
	Platform *any `json:"platform,omitempty"`
	PostingMethod *any `json:"posting_method,omitempty"`
	ProductId string `json:"product_id"`
	Query *any `json:"query,omitempty"`
	Reason *any `json:"reason,omitempty"`
	Regenerate *bool `json:"regenerate,omitempty"`
	Status *string `json:"status,omitempty"`
	UserMembership *any `json:"user_membership,omitempty"`
	UserName *any `json:"user_name,omitempty"`
	UserOnboardingStep *any `json:"user_onboarding_step,omitempty"`
	VideoType string `json:"video_type"`
}

// AdminUpdateData is the typed request payload for Admin.UpdateTyped.
type AdminUpdateData struct {
	AgentId string `json:"agent_id"`
	AgentType *string `json:"agent_type,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Apply *bool `json:"apply,omitempty"`
	Count *int `json:"count,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DateFrom *any `json:"date_from,omitempty"`
	DateTo *any `json:"date_to,omitempty"`
	Email *string `json:"email,omitempty"`
	Id *string `json:"id,omitempty"`
	IncludeFailed *bool `json:"include_failed,omitempty"`
	IncludePending *bool `json:"include_pending,omitempty"`
	IncludeRecords *bool `json:"include_records,omitempty"`
	IssueIds *any `json:"issue_ids,omitempty"`
	OnlyActive *bool `json:"only_active,omitempty"`
	Platform *any `json:"platform,omitempty"`
	PostingMethod *any `json:"posting_method,omitempty"`
	ProductId *string `json:"product_id,omitempty"`
	Query *any `json:"query,omitempty"`
	Reason *any `json:"reason,omitempty"`
	Regenerate *bool `json:"regenerate,omitempty"`
	Status *string `json:"status,omitempty"`
	UserMembership *any `json:"user_membership,omitempty"`
	UserName *any `json:"user_name,omitempty"`
	UserOnboardingStep *any `json:"user_onboarding_step,omitempty"`
	VideoType *string `json:"video_type,omitempty"`
}

// AdminRemoveMatch is the typed request payload for Admin.RemoveTyped.
type AdminRemoveMatch struct {
	TesterId string `json:"tester_id"`
}

// AdminAccountReset is the typed data model for the admin_account_reset entity.
type AdminAccountReset struct {
}

// AdminAccountResetCreateData is the typed request payload for AdminAccountReset.CreateTyped.
type AdminAccountResetCreateData struct {
	AgentIds []any `json:"agent_ids"`
	AgentIdsSha256 string `json:"agent_ids_sha256"`
	BackupSha256 string `json:"backup_sha256"`
	BatchSize *int `json:"batch_size,omitempty"`
	Confirmation string `json:"confirmation"`
	CustomerEmail string `json:"customer_email"`
	PcName string `json:"pc_name"`
	Phase *string `json:"phase,omitempty"`
	ProductId string `json:"product_id"`
	VideoIds *[]any `json:"video_ids,omitempty"`
}

// AdminCarousel is the typed data model for the admin_carousel entity.
type AdminCarousel struct {
}

// AdminCarouselLoadMatch is the typed request payload for AdminCarousel.LoadTyped.
type AdminCarouselLoadMatch struct {
	BatchId string `json:"batch_id"`
}

// AdminCarouselCreateData is the typed request payload for AdminCarousel.CreateTyped.
type AdminCarouselCreateData struct {
	Stage string `json:"stage"`
	AgentId string `json:"agent_id"`
	BatchId string `json:"batch_id"`
	Caption string `json:"caption"`
	ContentBase64 *string `json:"content_base64,omitempty"`
	Day any `json:"day"`
	DryRun *bool `json:"dry_run,omitempty"`
	EngineRun *string `json:"engine_run,omitempty"`
	ExpectedRevision string `json:"expected_revision"`
	Formula map[string]any `json:"formula"`
	FormulaId string `json:"formula_id"`
	Prompt string `json:"prompt"`
	Slides []any `json:"slides"`
	Title string `json:"title"`
}

// AdminCarouselUpdateData is the typed request payload for AdminCarousel.UpdateTyped.
type AdminCarouselUpdateData struct {
	Fmt string `json:"fmt"`
	ExpectedRevision *string `json:"expected_revision,omitempty"`
	Formula *map[string]any `json:"formula,omitempty"`
	Prompt *string `json:"prompt,omitempty"`
	Title *string `json:"title,omitempty"`
}

// AdminCarouselDemoReview is the typed data model for the admin_carousel_demo_review entity.
type AdminCarouselDemoReview struct {
}

// AdminCarouselDemoReviewLoadMatch is the typed request payload for AdminCarouselDemoReview.LoadTyped.
type AdminCarouselDemoReviewLoadMatch struct {
	Id string `json:"id"`
}

// AdminCarouselDemoReviewCreateData is the typed request payload for AdminCarouselDemoReview.CreateTyped.
type AdminCarouselDemoReviewCreateData struct {
	Items []any `json:"items"`
	Reason *string `json:"reason,omitempty"`
}

// AdminCarouselDemoReviewUpdateData is the typed request payload for AdminCarouselDemoReview.UpdateTyped.
type AdminCarouselDemoReviewUpdateData struct {
	DemoReviewId string `json:"demo_review_id"`
	Assignee *any `json:"assignee,omitempty"`
}

// AdminCustomer is the typed data model for the admin_customer entity.
type AdminCustomer struct {
}

// AdminCustomerListMatch is the typed request payload for AdminCustomer.ListTyped.
type AdminCustomerListMatch struct {
	AccountType *any `json:"account_type,omitempty"`
	ActiveVireelAgents *int `json:"active_vireel_agents,omitempty"`
	Agents *[]any `json:"agents,omitempty"`
	BillingSource *string `json:"billing_source,omitempty"`
	ContractedAgents *any `json:"contracted_agents,omitempty"`
	Email *string `json:"email,omitempty"`
	Membership *any `json:"membership,omitempty"`
	Name *string `json:"name,omitempty"`
	PfaOnlyAgents *int `json:"pfa_only_agents,omitempty"`
	Severity *string `json:"severity,omitempty"`
	Status *string `json:"status,omitempty"`
	SubscriptionStatus *any `json:"subscription_status,omitempty"`
	UserId *string `json:"user_id,omitempty"`
}

// AdminCustomerSuccess is the typed data model for the admin_customer_success entity.
type AdminCustomerSuccess struct {
}

// AdminCustomerSuccessListMatch is the typed request payload for AdminCustomerSuccess.ListTyped.
type AdminCustomerSuccessListMatch struct {
	ActiveAgents *int `json:"active_agents,omitempty"`
	ActiveProducts *int `json:"active_products,omitempty"`
	AgentsCount *int `json:"agents_count,omitempty"`
	AutoScheduleStatus *string `json:"auto_schedule_status,omitempty"`
	DaysUntilPeriodEnd *any `json:"days_until_period_end,omitempty"`
	Email *string `json:"email,omitempty"`
	FeatureImpact *string `json:"feature_impact,omitempty"`
	LastNotificationAt *any `json:"last_notification_at,omitempty"`
	Membership *any `json:"membership,omitempty"`
	Name *string `json:"name,omitempty"`
	NotificationCount *int `json:"notification_count,omitempty"`
	NotificationEvents *[]any `json:"notification_events,omitempty"`
	Priority *string `json:"priority,omitempty"`
	Severity *string `json:"severity,omitempty"`
	StatusLabel *string `json:"status_label,omitempty"`
	SubscriptionCurrentPeriodEnd *any `json:"subscription_current_period_end,omitempty"`
	SubscriptionStatus *any `json:"subscription_status,omitempty"`
	UpcomingPosts *int `json:"upcoming_posts,omitempty"`
	UserId *string `json:"user_id,omitempty"`
}

// AdminGeneratedVideo is the typed data model for the admin_generated_video entity.
type AdminGeneratedVideo struct {
}

// AdminGeneratedVideoListMatch is the typed request payload for AdminGeneratedVideo.ListTyped.
type AdminGeneratedVideoListMatch struct {
	UserId string `json:"user_id"`
	Limit *int `json:"limit,omitempty"`
	ProductId *string `json:"product_id,omitempty"`
}

// AdminHealthrx is the typed data model for the admin_healthrx entity.
type AdminHealthrx struct {
}

// AdminHealthrxLoadMatch is the typed request payload for AdminHealthrx.LoadTyped.
type AdminHealthrxLoadMatch struct {
	ItemId string `json:"item_id"`
	Kind string `json:"kind"`
}

// AdminHealthrxCreateData is the typed request payload for AdminHealthrx.CreateTyped.
type AdminHealthrxCreateData struct {
	Action string `json:"action"`
	OptionId string `json:"option_id"`
	Plan map[string]any `json:"plan"`
	ProductId string `json:"product_id"`
	Reason string `json:"reason"`
	RequestKey string `json:"request_key"`
	Version string `json:"version"`
	Viewed bool `json:"viewed"`
}

// AdminHealthrxUpdateData is the typed request payload for AdminHealthrx.UpdateTyped.
type AdminHealthrxUpdateData struct {
	DeliveryEnabled *bool `json:"delivery_enabled,omitempty"`
	Plan *map[string]any `json:"plan,omitempty"`
	PreparationEnabled *bool `json:"preparation_enabled,omitempty"`
	ProductId *string `json:"product_id,omitempty"`
	Revision *int `json:"revision,omitempty"`
	ScheduleEnabled *bool `json:"schedule_enabled,omitempty"`
}

// AdminInsight is the typed data model for the admin_insight entity.
type AdminInsight struct {
}

// AdminInsightLoadMatch is the typed request payload for AdminInsight.LoadTyped.
type AdminInsightLoadMatch struct {
	CustomerEmail *any `json:"customer_email,omitempty"`
	IncludeAgent *bool `json:"include_agent,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
}

// AdminInsightListMatch is the typed request payload for AdminInsight.ListTyped.
type AdminInsightListMatch struct {
	CustomerSuccessCases *[]any `json:"customer_success_cases,omitempty"`
	Customers *[]any `json:"customers,omitempty"`
	GeneratedAt *string `json:"generated_at,omitempty"`
	PfaDatabase *map[string]any `json:"pfa_database,omitempty"`
	RecentSignups *[]any `json:"recent_signups,omitempty"`
	Summary *map[string]any `json:"summary,omitempty"`
	VireelDatabase *map[string]any `json:"vireel_database,omitempty"`
}

// AdminLandingTask is the typed data model for the admin_landing_task entity.
type AdminLandingTask struct {
}

// AdminLandingTaskCreateData is the typed request payload for AdminLandingTask.CreateTyped.
type AdminLandingTaskCreateData struct {
	UserId string `json:"user_id"`
	ProductId *string `json:"product_id,omitempty"`
	TaskId string `json:"task_id"`
}

// AdminMetricsSummary is the typed data model for the admin_metrics_summary entity.
type AdminMetricsSummary struct {
}

// AdminMetricsSummaryListMatch is the typed request payload for AdminMetricsSummary.ListTyped.
type AdminMetricsSummaryListMatch struct {
	DateFilter *string `json:"date_filter,omitempty"`
}

// AdminPost is the typed data model for the admin_post entity.
type AdminPost struct {
}

// AdminPostListMatch is the typed request payload for AdminPost.ListTyped.
type AdminPostListMatch struct {
	Date *any `json:"date,omitempty"`
	IncludeEntry *bool `json:"include_entry,omitempty"`
	Platform *string `json:"platform,omitempty"`
	PostingMethod *string `json:"posting_method,omitempty"`
}

// AdminRecentSignup is the typed data model for the admin_recent_signup entity.
type AdminRecentSignup struct {
}

// AdminRecentSignupListMatch is the typed request payload for AdminRecentSignup.ListTyped.
type AdminRecentSignupListMatch struct {
	CreatedAt *string `json:"created_at,omitempty"`
	CurrentStep *string `json:"current_step,omitempty"`
	Email *string `json:"email,omitempty"`
	EmailSource *any `json:"email_source,omitempty"`
	ErrorMessage *any `json:"error_message,omitempty"`
	FlowVariant *string `json:"flow_variant,omitempty"`
	Id *string `json:"id,omitempty"`
	InactiveMinutes *int `json:"inactive_minutes,omitempty"`
	LastNotificationAt *any `json:"last_notification_at,omitempty"`
	LastSeenAt *string `json:"last_seen_at,omitempty"`
	LikelyCause *string `json:"likely_cause,omitempty"`
	NotificationCount *int `json:"notification_count,omitempty"`
	NotificationEvents *[]any `json:"notification_events,omitempty"`
	ProductId *string `json:"product_id,omitempty"`
	ProductName *any `json:"product_name,omitempty"`
	ProductUrl *string `json:"product_url,omitempty"`
	Severity *string `json:"severity,omitempty"`
	SocialScanStatus *any `json:"social_scan_status,omitempty"`
	StageLabel *string `json:"stage_label,omitempty"`
	Status *string `json:"status,omitempty"`
	UpdatedAt *any `json:"updated_at,omitempty"`
	WebsiteScrapeStatus *any `json:"website_scrape_status,omitempty"`
}

// AdminSlideshowDiag is the typed data model for the admin_slideshow_diag entity.
type AdminSlideshowDiag struct {
}

// AdminSlideshowDiagCreateData is the typed request payload for AdminSlideshowDiag.CreateTyped.
type AdminSlideshowDiagCreateData struct {
	Id string `json:"id"`
	AgentId *string `json:"agent_id,omitempty"`
	BatchId *string `json:"batch_id,omitempty"`
	Caption *string `json:"caption,omitempty"`
	ContentBase64 *string `json:"content_base64,omitempty"`
	Day *any `json:"day,omitempty"`
	FormulaId *string `json:"formula_id,omitempty"`
	Title *string `json:"title,omitempty"`
}

// AdminSlideshowImport is the typed data model for the admin_slideshow_import entity.
type AdminSlideshowImport struct {
}

// AdminSlideshowImportLoadMatch is the typed request payload for AdminSlideshowImport.LoadTyped.
type AdminSlideshowImportLoadMatch struct {
	BatchId string `json:"batch_id"`
}

// AdminSlideshowImportCreateData is the typed request payload for AdminSlideshowImport.CreateTyped.
type AdminSlideshowImportCreateData struct {
	AgentId string `json:"agent_id"`
	BatchId string `json:"batch_id"`
	Caption string `json:"caption"`
	Day string `json:"day"`
	DryRun *bool `json:"dry_run,omitempty"`
	EngineRun *string `json:"engine_run,omitempty"`
	FormulaId string `json:"formula_id"`
	Slides []any `json:"slides"`
	Title string `json:"title"`
}

// AdminUserView is the typed data model for the admin_user_view entity.
type AdminUserView struct {
}

// AdminUserViewListMatch is the typed request payload for AdminUserView.ListTyped.
type AdminUserViewListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
}

// AdminUserViewCreateData is the typed request payload for AdminUserView.CreateTyped.
type AdminUserViewCreateData struct {
	UserId string `json:"user_id"`
	AccountType *any `json:"account_type,omitempty"`
	AdminNotes *any `json:"admin_notes,omitempty"`
	AgentsCount *int `json:"agents_count,omitempty"`
	CreatedAt string `json:"created_at"`
	Credits int `json:"credits"`
	Email string `json:"email"`
	Id string `json:"id"`
	Industry any `json:"industry"`
	IsAdmin *bool `json:"is_admin,omitempty"`
	IsBookmarked *bool `json:"is_bookmarked,omitempty"`
	IsInternalUser *bool `json:"is_internal_user,omitempty"`
	Membership any `json:"membership"`
	Name string `json:"name"`
	NewEmail string `json:"new_email"`
	PartnerExternalUserId *string `json:"partner_external_user_id,omitempty"`
	PartnerPolicyCode *any `json:"partner_policy_code,omitempty"`
	PartnerSource *any `json:"partner_source,omitempty"`
	ProductName any `json:"product_name"`
	ProductUrl any `json:"product_url"`
	Skip bool `json:"skip"`
	SubscriptionDetails *any `json:"subscription_details,omitempty"`
	SubscriptionStatus any `json:"subscription_status"`
}

// AdminUserViewUpdateData is the typed request payload for AdminUserView.UpdateTyped.
type AdminUserViewUpdateData struct {
	UserId string `json:"user_id"`
	AdminNotes *any `json:"admin_notes,omitempty"`
	AgentsCount *int `json:"agents_count,omitempty"`
	Credits *int `json:"credits,omitempty"`
	IsAdmin *bool `json:"is_admin,omitempty"`
	IsBookmarked *bool `json:"is_bookmarked,omitempty"`
	IsInternalUser *bool `json:"is_internal_user,omitempty"`
	Membership *any `json:"membership,omitempty"`
}

// AdminUserViewRemoveMatch is the typed request payload for AdminUserView.RemoveTyped.
type AdminUserViewRemoveMatch struct {
	UserId string `json:"user_id"`
}

// AdminUsersTableItem is the typed data model for the admin_users_table_item entity.
type AdminUsersTableItem struct {
}

// AdminUsersTableItemListMatch is the typed request payload for AdminUsersTableItem.ListTyped.
type AdminUsersTableItemListMatch struct {
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// AdminVideoRemixer is the typed data model for the admin_video_remixer entity.
type AdminVideoRemixer struct {
}

// AdminVideoRemixerLoadMatch is the typed request payload for AdminVideoRemixer.LoadTyped.
type AdminVideoRemixerLoadMatch struct {
	ClipId string `json:"clip_id"`
}

// AdminVideoRemixerCreateData is the typed request payload for AdminVideoRemixer.CreateTyped.
type AdminVideoRemixerCreateData struct {
	Activity string `json:"activity"`
	AllowedPlatforms *[]any `json:"allowed_platforms,omitempty"`
	AnchorClipId *string `json:"anchor_clip_id,omitempty"`
	AtomicityClass *any `json:"atomicity_class,omitempty"`
	AutoRender *bool `json:"auto_render,omitempty"`
	CampaignAllowed *bool `json:"campaign_allowed,omitempty"`
	Channel *string `json:"channel,omitempty"`
	ChannelDefault *string `json:"channel_default,omitempty"`
	ClipId string `json:"clip_id"`
	ClipIds *[]any `json:"clip_ids,omitempty"`
	CollectedAt string `json:"collected_at"`
	Comments *any `json:"comments,omitempty"`
	CompletionRate *any `json:"completion_rate,omitempty"`
	ConfirmedDuplicateOf *any `json:"confirmed_duplicate_of,omitempty"`
	ConsentDocUri *string `json:"consent_doc_uri,omitempty"`
	Contact *string `json:"contact,omitempty"`
	Conversions *any `json:"conversions,omitempty"`
	Count *int `json:"count,omitempty"`
	Creator *string `json:"creator,omitempty"`
	CreatorId *string `json:"creator_id,omitempty"`
	CropWindow *any `json:"crop_window,omitempty"`
	CtaProductId *string `json:"cta_product_id,omitempty"`
	Days *int `json:"days,omitempty"`
	DerivativeEditsAllowed *bool `json:"derivative_edits_allowed,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	EndMs *any `json:"end_ms,omitempty"`
	Enqueue *bool `json:"enqueue,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Evidence string `json:"evidence"`
	ExpectedRevision *any `json:"expected_revision,omitempty"`
	ExpectedRevisions map[string]any `json:"expected_revisions"`
	ExternalAiAllowed *bool `json:"external_ai_allowed,omitempty"`
	File string `json:"file"`
	Followers *any `json:"followers,omitempty"`
	FormulaId string `json:"formula_id"`
	FormulaIds []any `json:"formula_ids"`
	Handles *map[string]any `json:"handles,omitempty"`
	HookSubtype *any `json:"hook_subtype,omitempty"`
	HourUtc *int `json:"hour_utc,omitempty"`
	HumanRole string `json:"human_role"`
	IdempotencyKey string `json:"idempotency_key"`
	Items []any `json:"items"`
	KimClipIds []any `json:"kim_clip_ids"`
	Kind string `json:"kind"`
	Levels map[string]any `json:"levels"`
	Likes *any `json:"likes,omitempty"`
	MediaEnabled bool `json:"media_enabled"`
	MedicalClaimPresent *bool `json:"medical_claim_present,omitempty"`
	MinuteUtc *int `json:"minute_utc,omitempty"`
	MusicBedAllowed *bool `json:"music_bed_allowed,omitempty"`
	MusicPolicy *string `json:"music_policy,omitempty"`
	Name string `json:"name"`
	Niche *string `json:"niche,omitempty"`
	Notes *string `json:"notes,omitempty"`
	Origin *string `json:"origin,omitempty"`
	OwnerWaiver *bool `json:"owner_waiver,omitempty"`
	PaidAdsAllowed *bool `json:"paid_ads_allowed,omitempty"`
	PatientIdentifiable *bool `json:"patient_identifiable,omitempty"`
	PersonType *string `json:"person_type,omitempty"`
	Pipeline *bool `json:"pipeline,omitempty"`
	PlanningOnly *bool `json:"planning_only,omitempty"`
	Platform string `json:"platform"`
	PlatformPostId string `json:"platform_post_id"`
	Policy map[string]any `json:"policy"`
	Polish *string `json:"polish,omitempty"`
	PostUrl string `json:"post_url"`
	PostedAt string `json:"posted_at"`
	PrimaryRole *any `json:"primary_role,omitempty"`
	Purpose string `json:"purpose"`
	Rate *float64 `json:"rate,omitempty"`
	Rationale *string `json:"rationale,omitempty"`
	Reason string `json:"reason"`
	ReferenceSourceId *string `json:"reference_source_id,omitempty"`
	RequiresMedicalReview *bool `json:"requires_medical_review,omitempty"`
	ReviewStatus *any `json:"review_status,omitempty"`
	Revision int `json:"revision"`
	RightsExpiresAt *any `json:"rights_expires_at,omitempty"`
	RightsStatus *string `json:"rights_status,omitempty"`
	RunId string `json:"run_id"`
	SampleLinks *[]any `json:"sample_links,omitempty"`
	SecondaryRoles *any `json:"secondary_roles,omitempty"`
	Seconds int `json:"seconds"`
	Seed *int `json:"seed,omitempty"`
	SeedBase *int `json:"seed_base,omitempty"`
	SensitivePersonalDataPresent *bool `json:"sensitive_personal_data_present,omitempty"`
	Shares *any `json:"shares,omitempty"`
	Shoot *string `json:"shoot,omitempty"`
	Slots []any `json:"slots"`
	SoundbiteTitle *any `json:"soundbite_title,omitempty"`
	Source string `json:"source"`
	SourceId string `json:"source_id"`
	SourceIds []any `json:"source_ids"`
	SpendUsd *any `json:"spend_usd,omitempty"`
	Spiciness *any `json:"spiciness,omitempty"`
	SpicinessNotes *string `json:"spiciness_notes,omitempty"`
	StartMs *any `json:"start_ms,omitempty"`
	Status *string `json:"status,omitempty"`
	TerryClipIds []any `json:"terry_clip_ids"`
	TestimonialStrength *any `json:"testimonial_strength,omitempty"`
	TestimonialType *any `json:"testimonial_type,omitempty"`
	Tier *string `json:"tier,omitempty"`
	Timeline map[string]any `json:"timeline"`
	Topic *string `json:"topic,omitempty"`
	TopicTags *any `json:"topic_tags,omitempty"`
	TotalTargetMs int `json:"total_target_ms"`
	UseLearnedWeights *bool `json:"use_learned_weights,omitempty"`
	Views *any `json:"views,omitempty"`
	Window string `json:"window"`
}

// AdminVideoRemixerUpdateData is the typed request payload for AdminVideoRemixer.UpdateTyped.
type AdminVideoRemixerUpdateData struct {
	Identifier string `json:"identifier"`
	AllowedPlatforms *[]any `json:"allowed_platforms,omitempty"`
	AutoRender *bool `json:"auto_render,omitempty"`
	CampaignAllowed *bool `json:"campaign_allowed,omitempty"`
	Channel *string `json:"channel,omitempty"`
	ChannelDefault *string `json:"channel_default,omitempty"`
	ClipId *string `json:"clip_id,omitempty"`
	ConfirmedDuplicateOf *any `json:"confirmed_duplicate_of,omitempty"`
	ConsentDocUri *string `json:"consent_doc_uri,omitempty"`
	Contact *string `json:"contact,omitempty"`
	Count *int `json:"count,omitempty"`
	CreatorId *string `json:"creator_id,omitempty"`
	DerivativeEditsAllowed *bool `json:"derivative_edits_allowed,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	ExpectedRevision *any `json:"expected_revision,omitempty"`
	ExpectedRevisions *map[string]any `json:"expected_revisions,omitempty"`
	ExternalAiAllowed *bool `json:"external_ai_allowed,omitempty"`
	Followers *any `json:"followers,omitempty"`
	FormulaId *string `json:"formula_id,omitempty"`
	Handles *map[string]any `json:"handles,omitempty"`
	HourUtc *int `json:"hour_utc,omitempty"`
	HumanRole *string `json:"human_role,omitempty"`
	Levels *map[string]any `json:"levels,omitempty"`
	MedicalClaimPresent *bool `json:"medical_claim_present,omitempty"`
	MinuteUtc *int `json:"minute_utc,omitempty"`
	MusicBedAllowed *bool `json:"music_bed_allowed,omitempty"`
	MusicPolicy *string `json:"music_policy,omitempty"`
	Name *string `json:"name,omitempty"`
	Niche *string `json:"niche,omitempty"`
	Notes *string `json:"notes,omitempty"`
	Origin *string `json:"origin,omitempty"`
	OwnerWaiver *bool `json:"owner_waiver,omitempty"`
	PaidAdsAllowed *bool `json:"paid_ads_allowed,omitempty"`
	PatientIdentifiable *bool `json:"patient_identifiable,omitempty"`
	PersonType *string `json:"person_type,omitempty"`
	Platform *string `json:"platform,omitempty"`
	PlatformPostId *string `json:"platform_post_id,omitempty"`
	Policy *map[string]any `json:"policy,omitempty"`
	PostUrl *string `json:"post_url,omitempty"`
	PostedAt *string `json:"posted_at,omitempty"`
	Rate *float64 `json:"rate,omitempty"`
	Rationale *string `json:"rationale,omitempty"`
	Reason *string `json:"reason,omitempty"`
	ReferenceSourceId *string `json:"reference_source_id,omitempty"`
	RequiresMedicalReview *bool `json:"requires_medical_review,omitempty"`
	RightsExpiresAt *any `json:"rights_expires_at,omitempty"`
	RightsStatus *string `json:"rights_status,omitempty"`
	SampleLinks *[]any `json:"sample_links,omitempty"`
	SeedBase *int `json:"seed_base,omitempty"`
	SensitivePersonalDataPresent *bool `json:"sensitive_personal_data_present,omitempty"`
	Shoot *string `json:"shoot,omitempty"`
	Slots *[]any `json:"slots,omitempty"`
	SourceIds *[]any `json:"source_ids,omitempty"`
	Spiciness *any `json:"spiciness,omitempty"`
	SpicinessNotes *string `json:"spiciness_notes,omitempty"`
	Status *string `json:"status,omitempty"`
	Timeline *map[string]any `json:"timeline,omitempty"`
	TotalTargetMs *int `json:"total_target_ms,omitempty"`
}

// AdminVideoRemixerPatchData is the typed request payload for AdminVideoRemixer.PatchTyped.
type AdminVideoRemixerPatchData struct {
	AtomicityClass *any `json:"atomicity_class,omitempty"`
	CropWindow *any `json:"crop_window,omitempty"`
	CtaProductId *string `json:"cta_product_id,omitempty"`
	EndMs *any `json:"end_ms,omitempty"`
	ExpectedRevision *any `json:"expected_revision,omitempty"`
	HookSubtype *any `json:"hook_subtype,omitempty"`
	MediaEnabled *bool `json:"media_enabled,omitempty"`
	MedicalClaimPresent *bool `json:"medical_claim_present,omitempty"`
	PrimaryRole *any `json:"primary_role,omitempty"`
	Reason *string `json:"reason,omitempty"`
	RequiresMedicalReview *bool `json:"requires_medical_review,omitempty"`
	ReviewStatus *any `json:"review_status,omitempty"`
	SecondaryRoles *any `json:"secondary_roles,omitempty"`
	SensitivePersonalDataPresent *bool `json:"sensitive_personal_data_present,omitempty"`
	SoundbiteTitle *any `json:"soundbite_title,omitempty"`
	StartMs *any `json:"start_ms,omitempty"`
	TestimonialStrength *any `json:"testimonial_strength,omitempty"`
	TestimonialType *any `json:"testimonial_type,omitempty"`
	TopicTags *any `json:"topic_tags,omitempty"`
}

// AdminVideoRemixerRemoveMatch is the typed request payload for AdminVideoRemixer.RemoveTyped.
type AdminVideoRemixerRemoveMatch struct {
	Identifier string `json:"identifier"`
}

// AdvanceStep is the typed data model for the advance_step entity.
type AdvanceStep struct {
}

// AdvanceStepCreateData is the typed request payload for AdvanceStep.CreateTyped.
type AdvanceStepCreateData struct {
	OnboardingDataId string `json:"onboarding_data_id"`
	ToStep string `json:"to_step"`
}

// Agent is the typed data model for the agent entity.
type Agent struct {
}

// AgentListMatch is the typed request payload for Agent.ListTyped.
type AgentListMatch struct {
	AgentType *any `json:"agent_type,omitempty"`
}

// AgentAccessCustomersHealth is the typed data model for the agent_access_customers_health entity.
type AgentAccessCustomersHealth struct {
}

// AgentAccessCustomersHealthListMatch is the typed request payload for AgentAccessCustomersHealth.ListTyped.
type AgentAccessCustomersHealthListMatch struct {
	DateRange *string `json:"date_range,omitempty"`
	IncludeInternal *bool `json:"include_internal,omitempty"`
	SubscriptionStatus *any `json:"subscription_status,omitempty"`
}

// AgentAccessOverview is the typed data model for the agent_access_overview entity.
type AgentAccessOverview struct {
}

// AgentAccessOverviewLoadMatch is the typed request payload for AgentAccessOverview.LoadTyped.
type AgentAccessOverviewLoadMatch struct {
	OnboardingWindowDay *int `json:"onboarding_window_day,omitempty"`
}

// AgentAccessPhilHourlyNotification is the typed data model for the agent_access_phil_hourly_notification entity.
type AgentAccessPhilHourlyNotification struct {
}

// AgentAccessPhilHourlyNotificationLoadMatch is the typed request payload for AgentAccessPhilHourlyNotification.LoadTyped.
type AgentAccessPhilHourlyNotificationLoadMatch struct {
	Date *any `json:"date,omitempty"`
}

// AgentAccessPhilStatsRefresh is the typed data model for the agent_access_phil_stats_refresh entity.
type AgentAccessPhilStatsRefresh struct {
}

// AgentAccessPhilStatsRefreshLoadMatch is the typed request payload for AgentAccessPhilStatsRefresh.LoadTyped.
type AgentAccessPhilStatsRefreshLoadMatch struct {
	Date *any `json:"date,omitempty"`
}

// AgentAccessPhilVideo is the typed data model for the agent_access_phil_video entity.
type AgentAccessPhilVideo struct {
}

// AgentAccessPhilVideoLoadMatch is the typed request payload for AgentAccessPhilVideo.LoadTyped.
type AgentAccessPhilVideoLoadMatch struct {
	Date *any `json:"date,omitempty"`
}

// AgentAccessUserAgent is the typed data model for the agent_access_user_agent entity.
type AgentAccessUserAgent struct {
}

// AgentAccessUserAgentListMatch is the typed request payload for AgentAccessUserAgent.ListTyped.
type AgentAccessUserAgentListMatch struct {
	Email string `json:"email"`
}

// AgentAccessUserPhoneFarm is the typed data model for the agent_access_user_phone_farm entity.
type AgentAccessUserPhoneFarm struct {
}

// AgentAccessUserPhoneFarmListMatch is the typed request payload for AgentAccessUserPhoneFarm.ListTyped.
type AgentAccessUserPhoneFarmListMatch struct {
	Email string `json:"email"`
}

// AgentAccessUserPost is the typed data model for the agent_access_user_post entity.
type AgentAccessUserPost struct {
}

// AgentAccessUserPostListMatch is the typed request payload for AgentAccessUserPost.ListTyped.
type AgentAccessUserPostListMatch struct {
	Day *int `json:"day,omitempty"`
	Email string `json:"email"`
}

// AgentAccessUserSummary is the typed data model for the agent_access_user_summary entity.
type AgentAccessUserSummary struct {
}

// AgentAccessUserSummaryListMatch is the typed request payload for AgentAccessUserSummary.ListTyped.
type AgentAccessUserSummaryListMatch struct {
	Email string `json:"email"`
}

// AgentAccessUserVideo is the typed data model for the agent_access_user_video entity.
type AgentAccessUserVideo struct {
}

// AgentAccessUserVideoLoadMatch is the typed request payload for AgentAccessUserVideo.LoadTyped.
type AgentAccessUserVideoLoadMatch struct {
	Email string `json:"email"`
}

// AgentAccessUserWinningAd is the typed data model for the agent_access_user_winning_ad entity.
type AgentAccessUserWinningAd struct {
}

// AgentAccessUserWinningAdListMatch is the typed request payload for AgentAccessUserWinningAd.ListTyped.
type AgentAccessUserWinningAdListMatch struct {
	Email string `json:"email"`
}

// AgentAccessWinningAdsSummary is the typed data model for the agent_access_winning_ads_summary entity.
type AgentAccessWinningAdsSummary struct {
}

// AgentAccessWinningAdsSummaryListMatch is the typed request payload for AgentAccessWinningAdsSummary.ListTyped.
type AgentAccessWinningAdsSummaryListMatch struct {
	IncludeInternal *bool `json:"include_internal,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Offset *int `json:"offset,omitempty"`
	SubscriptionStatus *any `json:"subscription_status,omitempty"`
}

// AgentDetail is the typed data model for the agent_detail entity.
type AgentDetail struct {
}

// AgentDetailListMatch is the typed request payload for AgentDetail.ListTyped.
type AgentDetailListMatch struct {
	AgentType *any `json:"agent_type,omitempty"`
	IncludeInactive *bool `json:"include_inactive,omitempty"`
	Limit *int `json:"limit,omitempty"`
}

// AgentDetailUpdateData is the typed request payload for AgentDetail.UpdateTyped.
type AgentDetailUpdateData struct {
	UploadPostAgentId string `json:"upload_post_agent_id"`
	Bio *any `json:"bio,omitempty"`
	Name *string `json:"name,omitempty"`
	Role *any `json:"role,omitempty"`
}

// AgentHealth is the typed data model for the agent_health entity.
type AgentHealth struct {
}

// AgentHealthListMatch is the typed request payload for AgentHealth.ListTyped.
type AgentHealthListMatch struct {
	DateTo *any `json:"date_to,omitempty"`
	Day *int `json:"day,omitempty"`
	Platform *string `json:"platform,omitempty"`
	Summary *bool `json:"summary,omitempty"`
	UserId *string `json:"user_id,omitempty"`
}

// AgentHealthCustomerOption is the typed data model for the agent_health_customer_option entity.
type AgentHealthCustomerOption struct {
}

// AgentHealthCustomerOptionListMatch is the typed request payload for AgentHealthCustomerOption.ListTyped.
type AgentHealthCustomerOptionListMatch struct {
	AgentCount *int `json:"agent_count,omitempty"`
	Email *string `json:"email,omitempty"`
	UserId *string `json:"user_id,omitempty"`
}

// AgentHealthDetail is the typed data model for the agent_health_detail entity.
type AgentHealthDetail struct {
}

// AgentHealthDetailListMatch is the typed request payload for AgentHealthDetail.ListTyped.
type AgentHealthDetailListMatch struct {
	Date string `json:"date"`
	GroupId string `json:"group_id"`
	Limit *int `json:"limit,omitempty"`
	Metric *string `json:"metric,omitempty"`
	Offset *int `json:"offset,omitempty"`
	Platform *string `json:"platform,omitempty"`
}

// AgentPost is the typed data model for the agent_post entity.
type AgentPost struct {
}

// AgentPostListMatch is the typed request payload for AgentPost.ListTyped.
type AgentPostListMatch struct {
	Id string `json:"id"`
	Day *string `json:"day,omitempty"`
}

// AgentStat is the typed data model for the agent_stat entity.
type AgentStat struct {
}

// AgentStatLoadMatch is the typed request payload for AgentStat.LoadTyped.
type AgentStatLoadMatch struct {
	AgentsNeeded *int `json:"agents_needed,omitempty"`
	DedicatedAgents *map[string]any `json:"dedicated_agents,omitempty"`
	SharedAgents *map[string]any `json:"shared_agents,omitempty"`
	TotalAgents *int `json:"total_agents,omitempty"`
}

// AgentSummary is the typed data model for the agent_summary entity.
type AgentSummary struct {
}

// AgentSummaryListMatch is the typed request payload for AgentSummary.ListTyped.
type AgentSummaryListMatch struct {
	AgentCount *int `json:"agent_count,omitempty"`
	FaviconUrl *any `json:"favicon_url,omitempty"`
	ProductId *string `json:"product_id,omitempty"`
	ProductName *string `json:"product_name,omitempty"`
}

// AgentsSummary is the typed data model for the agents_summary entity.
type AgentsSummary struct {
}

// AgentsSummaryLoadMatch is the typed request payload for AgentsSummary.LoadTyped.
type AgentsSummaryLoadMatch struct {
	TotalAgents *int `json:"total_agents,omitempty"`
	TotalAgentsCountSum *int `json:"total_agents_count_sum,omitempty"`
}

// AnalysisStatus is the typed data model for the analysis_status entity.
type AnalysisStatus struct {
}

// AnalysisStatusLoadMatch is the typed request payload for AnalysisStatus.LoadTyped.
type AnalysisStatusLoadMatch struct {
}

// AnalyticsPost is the typed data model for the analytics_post entity.
type AnalyticsPost struct {
}

// AnalyticsPostListMatch is the typed request payload for AnalyticsPost.ListTyped.
type AnalyticsPostListMatch struct {
	AgentId *string `json:"agent_id,omitempty"`
	DateFrom string `json:"date_from"`
	DateTo *any `json:"date_to,omitempty"`
	Email *string `json:"email,omitempty"`
	ProductId *string `json:"product_id,omitempty"`
	Status *any `json:"status,omitempty"`
	UserId *string `json:"user_id,omitempty"`
}

// AnalyzeProduct is the typed data model for the analyze_product entity.
type AnalyzeProduct struct {
}

// AnalyzeProductCreateData is the typed request payload for AnalyzeProduct.CreateTyped.
type AnalyzeProductCreateData struct {
	InstagramUsername *any `json:"instagram_username,omitempty"`
	Url string `json:"url"`
}

// AssignAgent is the typed data model for the assign_agent entity.
type AssignAgent struct {
}

// AssignAgentCreateData is the typed request payload for AssignAgent.CreateTyped.
type AssignAgentCreateData struct {
	OnboardingDataId string `json:"onboarding_data_id"`
}

// Auth is the typed data model for the auth entity.
type Auth struct {
}

// AuthCreateData is the typed request payload for Auth.CreateTyped.
type AuthCreateData struct {
	Attribution *any `json:"attribution,omitempty"`
	Email *any `json:"email,omitempty"`
	Industry *any `json:"industry,omitempty"`
	ReturnTo *any `json:"returnTo,omitempty"`
	Token *any `json:"token,omitempty"`
}

// AutoScheduleSetting is the typed data model for the auto_schedule_setting entity.
type AutoScheduleSetting struct {
}

// AutoScheduleSettingLoadMatch is the typed request payload for AutoScheduleSetting.LoadTyped.
type AutoScheduleSettingLoadMatch struct {
	ProductId *string `json:"product_id,omitempty"`
}

// AutoScheduleSettingUpdateData is the typed request payload for AutoScheduleSetting.UpdateTyped.
type AutoScheduleSettingUpdateData struct {
	ProductId *string `json:"product_id,omitempty"`
	EnabledVideoTypes *any `json:"enabled_video_types,omitempty"`
	IsEnabled *bool `json:"is_enabled,omitempty"`
}

// BulkTikTokStatsUpdate is the typed data model for the bulk_tik_tok_stats_update entity.
type BulkTikTokStatsUpdate struct {
}

// BulkTikTokStatsUpdateUpdateData is the typed request payload for BulkTikTokStatsUpdate.UpdateTyped.
type BulkTikTokStatsUpdateUpdateData struct {
	Updates *[]any `json:"updates,omitempty"`
}

// Carousel is the typed data model for the carousel entity.
type Carousel struct {
}

// CarouselLoadMatch is the typed request payload for Carousel.LoadTyped.
type CarouselLoadMatch struct {
	Id string `json:"id"`
}

// CarouselListMatch is the typed request payload for Carousel.ListTyped.
type CarouselListMatch struct {
	Date *any `json:"date,omitempty"`
}

// CarouselCreateData is the typed request payload for Carousel.CreateTyped.
type CarouselCreateData struct {
	Id string `json:"id"`
	SkipSchedule *bool `json:"skip_schedule,omitempty"`
	AgentId string `json:"agent_id"`
	AgentName string `json:"agent_name"`
	AuditCreatedAt *any `json:"audit_created_at,omitempty"`
	AuditSnapshotSha256 *any `json:"audit_snapshot_sha256,omitempty"`
	Caption *any `json:"caption,omitempty"`
	Comments *any `json:"comments,omitempty"`
	FitScore *any `json:"fit_score,omitempty"`
	Format string `json:"format"`
	Formula *map[string]any `json:"formula,omitempty"`
	FormulaId *string `json:"formula_id,omitempty"`
	FormulaName *any `json:"formula_name,omitempty"`
	Generation *map[string]any `json:"generation,omitempty"`
	ImagePrompt *any `json:"image_prompt,omitempty"`
	Likes *any `json:"likes,omitempty"`
	MainPrompt *any `json:"main_prompt,omitempty"`
	MetricsUpdatedAt *any `json:"metrics_updated_at,omitempty"`
	PostUrl *any `json:"post_url,omitempty"`
	ProfileUrl *any `json:"profile_url,omitempty"`
	Qa *map[string]any `json:"qa,omitempty"`
	QaStatus string `json:"qa_status"`
	QaVerdict *any `json:"qa_verdict,omitempty"`
	QualityScore *any `json:"quality_score,omitempty"`
	QueueId string `json:"queue_id"`
	RelevanceScore *any `json:"relevance_score,omitempty"`
	ScheduledAt string `json:"scheduled_at"`
	SlideCount int `json:"slide_count"`
	Slides []any `json:"slides"`
	Source *map[string]any `json:"source,omitempty"`
	Status string `json:"status"`
	ThumbnailUrl *any `json:"thumbnail_url,omitempty"`
	Title string `json:"title"`
	VideoId string `json:"video_id"`
	Views *any `json:"views,omitempty"`
}

// CarouselAgentDetail is the typed data model for the carousel_agent_detail entity.
type CarouselAgentDetail struct {
}

// CarouselAgentDetailLoadMatch is the typed request payload for CarouselAgentDetail.LoadTyped.
type CarouselAgentDetailLoadMatch struct {
	AgentId string `json:"agent_id"`
}

// CarouselStatus is the typed data model for the carousel_status entity.
type CarouselStatus struct {
}

// CarouselStatusListMatch is the typed request payload for CarouselStatus.ListTyped.
type CarouselStatusListMatch struct {
	Id string `json:"id"`
}

// Chat is the typed data model for the chat entity.
type Chat struct {
}

// ChatCreateData is the typed request payload for Chat.CreateTyped.
type ChatCreateData struct {
	SessionId string `json:"session_id"`
	IdempotencyKey string `json:"idempotencyKey"`
	Message string `json:"message"`
	SessionId2 string `json:"sessionId"`
}

// ChatHistory is the typed data model for the chat_history entity.
type ChatHistory struct {
}

// ChatHistoryLoadMatch is the typed request payload for ChatHistory.LoadTyped.
type ChatHistoryLoadMatch struct {
	SessionId string `json:"session_id"`
}

// ChatHistoryCreateData is the typed request payload for ChatHistory.CreateTyped.
type ChatHistoryCreateData struct {
	OnboardingDataId string `json:"onboardingDataId"`
}

// ChatSession is the typed data model for the chat_session entity.
type ChatSession struct {
}

// ChatSessionCreateData is the typed request payload for ChatSession.CreateTyped.
type ChatSessionCreateData struct {
	SessionId string `json:"session_id"`
	Plan *any `json:"plan,omitempty"`
	Route *any `json:"route,omitempty"`
}

// Comment is the typed data model for the comment entity.
type Comment struct {
}

// CommentLoadMatch is the typed request payload for Comment.LoadTyped.
type CommentLoadMatch struct {
	AllProduct *bool `json:"all_product,omitempty"`
	Day *int `json:"day,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Offset *int `json:"offset,omitempty"`
	ProductId *string `json:"product_id,omitempty"`
}

// CommentCampaign is the typed data model for the comment_campaign entity.
type CommentCampaign struct {
}

// CommentCampaignLoadMatch is the typed request payload for CommentCampaign.LoadTyped.
type CommentCampaignLoadMatch struct {
	ProductId string `json:"product_id"`
}

// CommentCampaignCreateData is the typed request payload for CommentCampaign.CreateTyped.
type CommentCampaignCreateData struct {
	ProductId string `json:"product_id"`
	SourceId *string `json:"source_id,omitempty"`
	AccountDailyLimit *int `json:"account_daily_limit,omitempty"`
	AccountWeeklyLimit *int `json:"account_weekly_limit,omitempty"`
	Action string `json:"action"`
	ActiveDaysPerWeek *int `json:"active_days_per_week,omitempty"`
	AgentId string `json:"agent_id"`
	Allowlist *[]any `json:"allowlist,omitempty"`
	AnalysisDailyLimit *int `json:"analysis_daily_limit,omitempty"`
	AnalysisModel *string `json:"analysis_model,omitempty"`
	AnalysisReservationUsd *float64 `json:"analysis_reservation_usd,omitempty"`
	ApprovedMarkets *[]any `json:"approved_markets,omitempty"`
	BrandForwardEnabled *bool `json:"brand_forward_enabled,omitempty"`
	Briefs *map[string]any `json:"briefs,omitempty"`
	CandidateOnly *bool `json:"candidate_only,omitempty"`
	Claims *[]any `json:"claims,omitempty"`
	CohortRemovalThreshold *int `json:"cohort_removal_threshold,omitempty"`
	DailyCostCeilingUsd *float64 `json:"daily_cost_ceiling_usd,omitempty"`
	DeliveryMode *string `json:"delivery_mode,omitempty"`
	DisclosureMode *string `json:"disclosure_mode,omitempty"`
	DisclosureTemplate *string `json:"disclosure_template,omitempty"`
	DraftOptionsCount *int `json:"draft_options_count,omitempty"`
	DraftReviewReservationUsd *float64 `json:"draft_review_reservation_usd,omitempty"`
	ExceptionalDailyCapApproved *bool `json:"exceptional_daily_cap_approved,omitempty"`
	ExecutionEnabled *bool `json:"execution_enabled,omitempty"`
	ExperimentStyles *[]any `json:"experiment_styles,omitempty"`
	InventoryFactor *float64 `json:"inventory_factor,omitempty"`
	Keywords *[]any `json:"keywords,omitempty"`
	MaxDurationSeconds *any `json:"max_duration_seconds,omitempty"`
	MetadataPassRate *float64 `json:"metadata_pass_rate,omitempty"`
	MinIntervalMinutes *int `json:"min_interval_minutes,omitempty"`
	Mode *string `json:"mode,omitempty"`
	MonitoredCreators *[]any `json:"monitored_creators,omitempty"`
	Platform *string `json:"platform,omitempty"`
	PlatformPermissionEvidence *string `json:"platform_permission_evidence,omitempty"`
	PolicyApprovedBy *string `json:"policy_approved_by,omitempty"`
	PolicyExpiresAt *any `json:"policy_expires_at,omitempty"`
	PolicyVersion *string `json:"policy_version,omitempty"`
	ProductDailyLimit *int `json:"product_daily_limit,omitempty"`
	QualificationRate *float64 `json:"qualification_rate,omitempty"`
	RawDailyLimit *int `json:"raw_daily_limit,omitempty"`
	RawResultReservationUsd *float64 `json:"raw_result_reservation_usd,omitempty"`
	Reason string `json:"reason"`
	RepliesEnabled *bool `json:"replies_enabled,omitempty"`
	RequestKey string `json:"request_key"`
	ReviewerModel *string `json:"reviewer_model,omitempty"`
	ScanIntervalHours *int `json:"scan_interval_hours,omitempty"`
	SearchChangeReason *string `json:"search_change_reason,omitempty"`
	SearchEffectiveAt *any `json:"search_effective_at,omitempty"`
	ShadowSampleLimit *int `json:"shadow_sample_limit,omitempty"`
	SpentSeconds *any `json:"spent_seconds,omitempty"`
	TaskTtlHours *int `json:"task_ttl_hours,omitempty"`
	TopCommentAnalysisEnabled *bool `json:"top_comment_analysis_enabled,omitempty"`
	WriterModel *string `json:"writer_model,omitempty"`
}

// CommentCampaignUpdateData is the typed request payload for CommentCampaign.UpdateTyped.
type CommentCampaignUpdateData struct {
	ProductId string `json:"product_id"`
	AccountDailyLimit *int `json:"account_daily_limit,omitempty"`
	AccountWeeklyLimit *int `json:"account_weekly_limit,omitempty"`
	ActiveDaysPerWeek *int `json:"active_days_per_week,omitempty"`
	Allowlist *[]any `json:"allowlist,omitempty"`
	AnalysisDailyLimit *int `json:"analysis_daily_limit,omitempty"`
	AnalysisModel *string `json:"analysis_model,omitempty"`
	AnalysisReservationUsd *float64 `json:"analysis_reservation_usd,omitempty"`
	ApprovedMarkets *[]any `json:"approved_markets,omitempty"`
	BrandForwardEnabled *bool `json:"brand_forward_enabled,omitempty"`
	Briefs *map[string]any `json:"briefs,omitempty"`
	Claims *[]any `json:"claims,omitempty"`
	CohortRemovalThreshold *int `json:"cohort_removal_threshold,omitempty"`
	DailyCostCeilingUsd *float64 `json:"daily_cost_ceiling_usd,omitempty"`
	DeliveryMode *string `json:"delivery_mode,omitempty"`
	DisclosureMode *string `json:"disclosure_mode,omitempty"`
	DisclosureTemplate *string `json:"disclosure_template,omitempty"`
	DraftOptionsCount *int `json:"draft_options_count,omitempty"`
	DraftReviewReservationUsd *float64 `json:"draft_review_reservation_usd,omitempty"`
	ExceptionalDailyCapApproved *bool `json:"exceptional_daily_cap_approved,omitempty"`
	ExecutionEnabled *bool `json:"execution_enabled,omitempty"`
	ExperimentStyles *[]any `json:"experiment_styles,omitempty"`
	InventoryFactor *float64 `json:"inventory_factor,omitempty"`
	Keywords *[]any `json:"keywords,omitempty"`
	MaxDurationSeconds *any `json:"max_duration_seconds,omitempty"`
	MetadataPassRate *float64 `json:"metadata_pass_rate,omitempty"`
	MinIntervalMinutes *int `json:"min_interval_minutes,omitempty"`
	Mode *string `json:"mode,omitempty"`
	MonitoredCreators *[]any `json:"monitored_creators,omitempty"`
	Platform *string `json:"platform,omitempty"`
	PlatformPermissionEvidence *string `json:"platform_permission_evidence,omitempty"`
	PolicyApprovedBy *string `json:"policy_approved_by,omitempty"`
	PolicyExpiresAt *any `json:"policy_expires_at,omitempty"`
	PolicyVersion *string `json:"policy_version,omitempty"`
	ProductDailyLimit *int `json:"product_daily_limit,omitempty"`
	QualificationRate *float64 `json:"qualification_rate,omitempty"`
	RawDailyLimit *int `json:"raw_daily_limit,omitempty"`
	RawResultReservationUsd *float64 `json:"raw_result_reservation_usd,omitempty"`
	RepliesEnabled *bool `json:"replies_enabled,omitempty"`
	ReviewerModel *string `json:"reviewer_model,omitempty"`
	ScanIntervalHours *int `json:"scan_interval_hours,omitempty"`
	SearchChangeReason *string `json:"search_change_reason,omitempty"`
	SearchEffectiveAt *any `json:"search_effective_at,omitempty"`
	ShadowSampleLimit *int `json:"shadow_sample_limit,omitempty"`
	TaskTtlHours *int `json:"task_ttl_hours,omitempty"`
	TopCommentAnalysisEnabled *bool `json:"top_comment_analysis_enabled,omitempty"`
	WriterModel *string `json:"writer_model,omitempty"`
}

// CompleteChatCheckout is the typed data model for the complete_chat_checkout entity.
type CompleteChatCheckout struct {
}

// CompleteChatCheckoutCreateData is the typed request payload for CompleteChatCheckout.CreateTyped.
type CompleteChatCheckoutCreateData struct {
	OnboardingDataId string `json:"onboarding_data_id"`
}

// CreateBlackoutSora2Video is the typed data model for the create_blackout_sora2_video entity.
type CreateBlackoutSora2Video struct {
}

// CreateBlackoutSora2VideoCreateData is the typed request payload for CreateBlackoutSora2Video.CreateTyped.
type CreateBlackoutSora2VideoCreateData struct {
	MainPrompt string `json:"main_prompt"`
	MediaAssetId string `json:"media_asset_id"`
	ProductId string `json:"product_id"`
}

// CreateCarousel is the typed data model for the create_carousel entity.
type CreateCarousel struct {
}

// CreateCarouselCreateData is the typed request payload for CreateCarousel.CreateTyped.
type CreateCarouselCreateData struct {
	CopyMode *any `json:"copy_mode,omitempty"`
	ExpectedOwnerUserId *string `json:"expected_owner_user_id,omitempty"`
	ExpectedProductId *string `json:"expected_product_id,omitempty"`
	ExpectedProductName *any `json:"expected_product_name,omitempty"`
	ImageModel *string `json:"image_model,omitempty"`
	MentionProduct *bool `json:"mention_product,omitempty"`
	NumSlides *int `json:"num_slides,omitempty"`
	ProductId *string `json:"product_id,omitempty"`
	ProductPlacement *string `json:"product_placement,omitempty"`
	RequestId *string `json:"request_id,omitempty"`
	ScriptStyleCustom *any `json:"script_style_custom,omitempty"`
	ScriptStyleId *string `json:"script_style_id,omitempty"`
	SelectedHook *any `json:"selected_hook,omitempty"`
	TemplateId string `json:"template_id"`
	VisualStyleCustom *any `json:"visual_style_custom,omitempty"`
	VisualStyleId *string `json:"visual_style_id,omitempty"`
}

// CreateProduct is the typed data model for the create_product entity.
type CreateProduct struct {
}

// CreateProductCreateData is the typed request payload for CreateProduct.CreateTyped.
type CreateProductCreateData struct {
	OnboardingDataId string `json:"onboarding_data_id"`
}

// CreateResetProductV6 is the typed data model for the create_reset_product_v6 entity.
type CreateResetProductV6 struct {
}

// CreateResetProductV6CreateData is the typed request payload for CreateResetProductV6.CreateTyped.
type CreateResetProductV6CreateData struct {
	OnboardingDataId string `json:"onboarding_data_id"`
}

// CreateSora2Video is the typed data model for the create_sora2_video entity.
type CreateSora2Video struct {
}

// CreateSora2VideoCreateData is the typed request payload for CreateSora2Video.CreateTyped.
type CreateSora2VideoCreateData struct {
	ImagePrompt *any `json:"image_prompt,omitempty"`
	MainPrompt string `json:"main_prompt"`
	Model *string `json:"model,omitempty"`
	Seconds *string `json:"seconds,omitempty"`
	Size *string `json:"size,omitempty"`
}

// CreateVariation is the typed data model for the create_variation entity.
type CreateVariation struct {
}

// CreateVariationCreateData is the typed request payload for CreateVariation.CreateTyped.
type CreateVariationCreateData struct {
	HookDuration int `json:"hook_duration"`
	MediaAssetId string `json:"media_asset_id"`
	ProductId string `json:"product_id"`
	Prompt string `json:"prompt"`
}

// Customer is the typed data model for the customer entity.
type Customer struct {
}

// CustomerListMatch is the typed request payload for Customer.ListTyped.
type CustomerListMatch struct {
	AccountType *any `json:"account_type,omitempty"`
	AssignedAgentsCount *int `json:"assigned_agents_count,omitempty"`
	Email *string `json:"email,omitempty"`
	Id *string `json:"id,omitempty"`
	IsMigrated *bool `json:"is_migrated,omitempty"`
}

// CustomerHealth is the typed data model for the customer_health entity.
type CustomerHealth struct {
}

// CustomerHealthLoadMatch is the typed request payload for CustomerHealth.LoadTyped.
type CustomerHealthLoadMatch struct {
	Id string `json:"id"`
	Date *any `json:"date,omitempty"`
}

// CustomerHealthAllCustomersItem is the typed data model for the customer_health_all_customers_item entity.
type CustomerHealthAllCustomersItem struct {
}

// CustomerHealthAllCustomersItemListMatch is the typed request payload for CustomerHealthAllCustomersItem.ListTyped.
type CustomerHealthAllCustomersItemListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Offset *int `json:"offset,omitempty"`
}

// CustomerHealthViewsSummary is the typed data model for the customer_health_views_summary entity.
type CustomerHealthViewsSummary struct {
}

// CustomerHealthViewsSummaryListMatch is the typed request payload for CustomerHealthViewsSummary.ListTyped.
type CustomerHealthViewsSummaryListMatch struct {
	Date *any `json:"date,omitempty"`
	Range *string `json:"range,omitempty"`
	UserId *string `json:"user_id,omitempty"`
}

// Daily is the typed data model for the daily entity.
type Daily struct {
}

// DailyCreateData is the typed request payload for Daily.CreateTyped.
type DailyCreateData struct {
	Id string `json:"id"`
	Day string `json:"day"`
}

// DailyStatus is the typed data model for the daily_status entity.
type DailyStatus struct {
}

// DailyStatusLoadMatch is the typed request payload for DailyStatus.LoadTyped.
type DailyStatusLoadMatch struct {
	Id string `json:"id"`
	Day string `json:"day"`
}

// DedicatedAgentsDashboard is the typed data model for the dedicated_agents_dashboard entity.
type DedicatedAgentsDashboard struct {
}

// DedicatedAgentsDashboardListMatch is the typed request payload for DedicatedAgentsDashboard.ListTyped.
type DedicatedAgentsDashboardListMatch struct {
	ActiveConnections *int `json:"active_connections,omitempty"`
	AssignedUserId *string `json:"assigned_user_id,omitempty"`
	AssignedUserIds *[]any `json:"assigned_user_ids,omitempty"`
	Bio *any `json:"bio,omitempty"`
	Id *string `json:"id,omitempty"`
	InstagramUrl *any `json:"instagram_url,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	LastAdminSyncedAt *any `json:"last_admin_synced_at,omitempty"`
	Name *string `json:"name,omitempty"`
	Role *any `json:"role,omitempty"`
	TiktokStats *any `json:"tiktok_stats,omitempty"`
	TiktokUrl *any `json:"tiktok_url,omitempty"`
	TodayFailedEntries *[]any `json:"today_failed_entries,omitempty"`
	TodayStats *map[string]any `json:"today_stats,omitempty"`
	UploadPostPlatforms *any `json:"upload_post_platforms,omitempty"`
	UploadPostProfile *any `json:"upload_post_profile,omitempty"`
	YesterdayFailedEntries *[]any `json:"yesterday_failed_entries,omitempty"`
	YesterdayStats *map[string]any `json:"yesterday_stats,omitempty"`
	YoutubeUrl *any `json:"youtube_url,omitempty"`
}

// EnterpriseAgent is the typed data model for the enterprise_agent entity.
type EnterpriseAgent struct {
}

// EnterpriseAgentLoadMatch is the typed request payload for EnterpriseAgent.LoadTyped.
type EnterpriseAgentLoadMatch struct {
	Count *int `json:"count,omitempty"`
	ProductId *string `json:"product_id,omitempty"`
	SourceProductId *string `json:"source_product_id,omitempty"`
	TargetProductId *string `json:"target_product_id,omitempty"`
}

// EnterpriseAgentCreateData is the typed request payload for EnterpriseAgent.CreateTyped.
type EnterpriseAgentCreateData struct {
	Count *int `json:"count,omitempty"`
	ProductId string `json:"product_id"`
	SourceProductId string `json:"source_product_id"`
	TargetProductId string `json:"target_product_id"`
}

// EnterpriseProduct is the typed data model for the enterprise_product entity.
type EnterpriseProduct struct {
}

// EnterpriseProductLoadMatch is the typed request payload for EnterpriseProduct.LoadTyped.
type EnterpriseProductLoadMatch struct {
	ProductId string `json:"product_id"`
}

// ExactAvailability is the typed data model for the exact_availability entity.
type ExactAvailability struct {
}

// ExactAvailabilityLoadMatch is the typed request payload for ExactAvailability.LoadTyped.
type ExactAvailabilityLoadMatch struct {
}

// ExactFormula is the typed data model for the exact_formula entity.
type ExactFormula struct {
}

// ExactFormulaLoadMatch is the typed request payload for ExactFormula.LoadTyped.
type ExactFormulaLoadMatch struct {
}

// ExtractV2 is the typed data model for the extract_v2 entity.
type ExtractV2 struct {
}

// ExtractV2CreateData is the typed request payload for ExtractV2.CreateTyped.
type ExtractV2CreateData struct {
	InstagramUsername *any `json:"instagram_username,omitempty"`
	Url string `json:"url"`
}

// FailedPost is the typed data model for the failed_post entity.
type FailedPost struct {
}

// FailedPostListMatch is the typed request payload for FailedPost.ListTyped.
type FailedPostListMatch struct {
	Day *string `json:"day,omitempty"`
}

// File is the typed data model for the file entity.
type File struct {
}

// FileCreateData is the typed request payload for File.CreateTyped.
type FileCreateData struct {
	File string `json:"file"`
}

// GenerateBlackoutSora2Prompt is the typed data model for the generate_blackout_sora2_prompt entity.
type GenerateBlackoutSora2Prompt struct {
}

// GenerateBlackoutSora2PromptCreateData is the typed request payload for GenerateBlackoutSora2Prompt.CreateTyped.
type GenerateBlackoutSora2PromptCreateData struct {
	MediaAssetId string `json:"media_asset_id"`
	ProductId string `json:"product_id"`
}

// GeneratePomelliDemo is the typed data model for the generate_pomelli_demo entity.
type GeneratePomelliDemo struct {
}

// GeneratePomelliDemoCreateData is the typed request payload for GeneratePomelliDemo.CreateTyped.
type GeneratePomelliDemoCreateData struct {
	ProductId string `json:"product_id"`
}

// GeneratePrompt is the typed data model for the generate_prompt entity.
type GeneratePrompt struct {
}

// GeneratePromptCreateData is the typed request payload for GeneratePrompt.CreateTyped.
type GeneratePromptCreateData struct {
	MediaAssetId string `json:"media_asset_id"`
}

// GenerateSora2Prompt is the typed data model for the generate_sora2_prompt entity.
type GenerateSora2Prompt struct {
}

// GenerateSora2PromptLoadMatch is the typed request payload for GenerateSora2Prompt.LoadTyped.
type GenerateSora2PromptLoadMatch struct {
	Prompt *string `json:"prompt,omitempty"`
}

// Healthrx is the typed data model for the healthrx entity.
type Healthrx struct {
}

// HealthrxLoadMatch is the typed request payload for Healthrx.LoadTyped.
type HealthrxLoadMatch struct {
	AccountId *string `json:"account_id,omitempty"`
	ProductId string `json:"product_id"`
}

// HealthrxCreateData is the typed request payload for Healthrx.CreateTyped.
type HealthrxCreateData struct {
	AccountId *string `json:"account_id,omitempty"`
	ProductId string `json:"product_id"`
	ContentId *string `json:"content_id,omitempty"`
	IncidentId *string `json:"incident_id,omitempty"`
	Action *string `json:"action,omitempty"`
	AgentId string `json:"agent_id"`
	Attempt int `json:"attempt"`
	AvatarPresent *bool `json:"avatar_present,omitempty"`
	BenchmarkSet string `json:"benchmark_set"`
	Commercial *bool `json:"commercial,omitempty"`
	CommercialLicenseEvidence string `json:"commercial_license_evidence"`
	Dimensions map[string]any `json:"dimensions"`
	DurationSeconds *int `json:"duration_seconds,omitempty"`
	Evidence string `json:"evidence"`
	EvidenceUrls []any `json:"evidence_urls"`
	ExternalKey string `json:"external_key"`
	Format *string `json:"format,omitempty"`
	IncludesAllAttemptCosts *bool `json:"includes_all_attempt_costs,omitempty"`
	InputSpecification map[string]any `json:"input_specification"`
	Kind string `json:"kind"`
	Level *int `json:"level,omitempty"`
	MeasuredAt string `json:"measured_at"`
	ModelVersion string `json:"model_version"`
	PaidCampaignId *string `json:"paid_campaign_id,omitempty"`
	ParentContentId *string `json:"parent_content_id,omitempty"`
	Paused bool `json:"paused"`
	Pillar string `json:"pillar"`
	Profile map[string]any `json:"profile"`
	PromotionEvidence *string `json:"promotion_evidence,omitempty"`
	Provider string `json:"provider"`
	ProviderInvoiceEvidence string `json:"provider_invoice_evidence"`
	Reason string `json:"reason"`
	ReferenceVersion string `json:"reference_version"`
	RequestKey string `json:"request_key"`
	Scope *string `json:"scope,omitempty"`
	TestVariable string `json:"test_variable"`
	Topic string `json:"topic"`
	TotalCostUsd float64 `json:"total_cost_usd"`
}

// InitResetProductV6 is the typed data model for the init_reset_product_v6 entity.
type InitResetProductV6 struct {
}

// InitResetProductV6CreateData is the typed request payload for InitResetProductV6.CreateTyped.
type InitResetProductV6CreateData struct {
	ProductId *string `json:"product_id,omitempty"`
}

// Iri is the typed data model for the iri entity.
type Iri struct {
}

// IriCreateData is the typed request payload for Iri.CreateTyped.
type IriCreateData struct {
	ConnectorId string `json:"connector_id"`
	CorrelationId *any `json:"correlationId,omitempty"`
	IdempotencyKey string `json:"idempotencyKey"`
	ProductId *any `json:"productId,omitempty"`
}

// IrisCapability is the typed data model for the iris_capability entity.
type IrisCapability struct {
}

// IrisCapabilityCreateData is the typed request payload for IrisCapability.CreateTyped.
type IrisCapabilityCreateData struct {
	Id string `json:"id"`
	Capability string `json:"capability"`
	CorrelationId string `json:"correlationId"`
	ExternalProductId *any `json:"externalProductId,omitempty"`
	ExternalUserId string `json:"externalUserId"`
	IdempotencyKey string `json:"idempotencyKey"`
	Input *map[string]any `json:"input,omitempty"`
	MembershipId *any `json:"membershipId,omitempty"`
	PlatformAccountId *any `json:"platformAccountId,omitempty"`
	PlatformLinkId *any `json:"platformLinkId,omitempty"`
	ProductScope string `json:"productScope"`
	RequestedBy *map[string]any `json:"requestedBy,omitempty"`
}

// IrisChat is the typed data model for the iris_chat entity.
type IrisChat struct {
}

// IrisChatCreateData is the typed request payload for IrisChat.CreateTyped.
type IrisChatCreateData struct {
	CorrelationId string `json:"correlationId"`
	IdempotencyKey string `json:"idempotencyKey"`
	Message string `json:"message"`
	PageContext *map[string]any `json:"pageContext,omitempty"`
	ProductId *any `json:"productId,omitempty"`
	SessionId *any `json:"sessionId,omitempty"`
}

// IrisConnector is the typed data model for the iris_connector entity.
type IrisConnector struct {
}

// IrisConnectorListMatch is the typed request payload for IrisConnector.ListTyped.
type IrisConnectorListMatch struct {
	Connectors *[]any `json:"connectors,omitempty"`
}

// IrisStatus is the typed data model for the iris_status entity.
type IrisStatus struct {
}

// IrisStatusListMatch is the typed request payload for IrisStatus.ListTyped.
type IrisStatusListMatch struct {
	ProductId *string `json:"product_id,omitempty"`
}

// IrisTask is the typed data model for the iris_task entity.
type IrisTask struct {
}

// IrisTaskListMatch is the typed request payload for IrisTask.ListTyped.
type IrisTaskListMatch struct {
	ProductId *string `json:"product_id,omitempty"`
}

// IrisTaskCreateData is the typed request payload for IrisTask.CreateTyped.
type IrisTaskCreateData struct {
	ApprovalRequired *bool `json:"approvalRequired,omitempty"`
	Cadence *string `json:"cadence,omitempty"`
	Capability *any `json:"capability,omitempty"`
	Description *string `json:"description,omitempty"`
	ProductId *any `json:"productId,omitempty"`
	RequiredConnectors *[]any `json:"requiredConnectors,omitempty"`
	Title string `json:"title"`
}

// IrisUsage is the typed data model for the iris_usage entity.
type IrisUsage struct {
}

// IrisUsageListMatch is the typed request payload for IrisUsage.ListTyped.
type IrisUsageListMatch struct {
	EventCount *int `json:"eventCount,omitempty"`
	Events *[]any `json:"events,omitempty"`
	MembershipId *any `json:"membershipId,omitempty"`
	ProductScope *string `json:"productScope,omitempty"`
}

// Landing is the typed data model for the landing entity.
type Landing struct {
}

// LandingCreateData is the typed request payload for Landing.CreateTyped.
type LandingCreateData struct {
	Index int `json:"index"`
	ProductId *string `json:"product_id,omitempty"`
	File string `json:"file"`
}

// LandingStat is the typed data model for the landing_stat entity.
type LandingStat struct {
}

// LandingStatLoadMatch is the typed request payload for LandingStat.LoadTyped.
type LandingStatLoadMatch struct {
	Slug string `json:"slug"`
	ProductId *string `json:"product_id,omitempty"`
}

// LandingStatus is the typed data model for the landing_status entity.
type LandingStatus struct {
}

// LandingStatusLoadMatch is the typed request payload for LandingStatus.LoadTyped.
type LandingStatusLoadMatch struct {
	ProductId *string `json:"product_id,omitempty"`
}

// LinkInBio is the typed data model for the link_in_bio entity.
type LinkInBio struct {
}

// LinkInBioLoadMatch is the typed request payload for LinkInBio.LoadTyped.
type LinkInBioLoadMatch struct {
	Slug string `json:"slug"`
}

// LinkInDm is the typed data model for the link_in_dm entity.
type LinkInDm struct {
}

// LinkInDmLoadMatch is the typed request payload for LinkInDm.LoadTyped.
type LinkInDmLoadMatch struct {
	Slug string `json:"slug"`
}

// LinkInPost is the typed data model for the link_in_post entity.
type LinkInPost struct {
}

// LinkInPostLoadMatch is the typed request payload for LinkInPost.LoadTyped.
type LinkInPostLoadMatch struct {
	Slug string `json:"slug"`
}

// LinkUser is the typed data model for the link_user entity.
type LinkUser struct {
}

// LinkUserCreateData is the typed request payload for LinkUser.CreateTyped.
type LinkUserCreateData struct {
	OnboardingDataId string `json:"onboarding_data_id"`
}

// MediaAsset is the typed data model for the media_asset entity.
type MediaAsset struct {
}

// MediaAssetLoadMatch is the typed request payload for MediaAsset.LoadTyped.
type MediaAssetLoadMatch struct {
	Id string `json:"id"`
}

// MediaAssetCreateData is the typed request payload for MediaAsset.CreateTyped.
type MediaAssetCreateData struct {
	Category string `json:"category"`
	CreatedAt string `json:"createdAt"`
	Description *string `json:"description,omitempty"`
	File string `json:"file"`
	Id string `json:"id"`
	MediaAssets []any `json:"media_assets"`
	OnboardingDataId *any `json:"onboardingDataId,omitempty"`
	OnboardingDataId2 string `json:"onboarding_data_id"`
	ProductId *any `json:"productId,omitempty"`
	ProductId2 *string `json:"product_id,omitempty"`
	Source string `json:"source"`
	Type string `json:"type"`
	UpdatedAt string `json:"updatedAt"`
	Url string `json:"url"`
	UsedAt *any `json:"usedAt,omitempty"`
	Veo3VideoId *any `json:"veo3VideoId,omitempty"`
}

// Men is the typed data model for the men entity.
type Men struct {
}

// MenListMatch is the typed request payload for Men.ListTyped.
type MenListMatch struct {
	Bookmarked *any `json:"bookmarked,omitempty"`
	Category *any `json:"category,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Offset *int `json:"offset,omitempty"`
	ProductId *string `json:"product_id,omitempty"`
}

// Microdrama is the typed data model for the microdrama entity.
type Microdrama struct {
}

// MicrodramaLoadMatch is the typed request payload for Microdrama.LoadTyped.
type MicrodramaLoadMatch struct {
	EpisodeId string `json:"episode_id"`
}

// MicrodramaCreateData is the typed request payload for Microdrama.CreateTyped.
type MicrodramaCreateData struct {
	EpisodeId string `json:"episode_id"`
	Evidence map[string]any `json:"evidence"`
	ExpectedRevision int `json:"expected_revision"`
	IdempotencyKey string `json:"idempotency_key"`
	Issues *[]any `json:"issues,omitempty"`
	Reason string `json:"reason"`
	Role string `json:"role"`
	Scores map[string]any `json:"scores"`
	SelectedPremiseId *string `json:"selected_premise_id,omitempty"`
	Stage string `json:"stage"`
	Status string `json:"status"`
	SubjectHash string `json:"subject_hash"`
	Title *string `json:"title,omitempty"`
	Verdict string `json:"verdict"`
}

// MicrodramaUpdateData is the typed request payload for Microdrama.UpdateTyped.
type MicrodramaUpdateData struct {
	EpisodeId string `json:"episode_id"`
	ExpectedRevision *int `json:"expected_revision,omitempty"`
	SelectedPremiseId *string `json:"selected_premise_id,omitempty"`
	Title *string `json:"title,omitempty"`
}

// MicrohubPublic is the typed data model for the microhub_public entity.
type MicrohubPublic struct {
}

// MicrohubPublicLoadMatch is the typed request payload for MicrohubPublic.LoadTyped.
type MicrohubPublicLoadMatch struct {
	Slug string `json:"slug"`
}

// OnboardingStatus is the typed data model for the onboarding_status entity.
type OnboardingStatus struct {
}

// OnboardingStatusListMatch is the typed request payload for OnboardingStatus.ListTyped.
type OnboardingStatusListMatch struct {
	AccountType *any `json:"account_type,omitempty"`
	Oid string `json:"oid"`
}

// OnboardingV6 is the typed data model for the onboarding_v6 entity.
type OnboardingV6 struct {
}

// OnboardingV6RemoveMatch is the typed request payload for OnboardingV6.RemoveTyped.
type OnboardingV6RemoveMatch struct {
	MediaAssetId string `json:"media_asset_id"`
	OnboardingDataId string `json:"onboarding_data_id"`
}

// PaidUser is the typed data model for the paid_user entity.
type PaidUser struct {
}

// PaidUserListMatch is the typed request payload for PaidUser.ListTyped.
type PaidUserListMatch struct {
	AgentsCount *int `json:"agents_count,omitempty"`
	AssignedAgentsCount *int `json:"assigned_agents_count,omitempty"`
	AutoScheduleEnabled *any `json:"auto_schedule_enabled,omitempty"`
	Credits *int `json:"credits,omitempty"`
	EffectiveAgentsCount *int `json:"effective_agents_count,omitempty"`
	Email *string `json:"email,omitempty"`
	Id *string `json:"id,omitempty"`
	IsInternalUser *bool `json:"is_internal_user,omitempty"`
	IsMigratedUser *bool `json:"is_migrated_user,omitempty"`
	Membership *any `json:"membership,omitempty"`
	ScheduledQueueCount *int `json:"scheduled_queue_count,omitempty"`
	SubscriptionDetails *any `json:"subscription_details,omitempty"`
	SubscriptionStatus *any `json:"subscription_status,omitempty"`
}

// Pexel is the typed data model for the pexel entity.
type Pexel struct {
}

// PexelListMatch is the typed request payload for Pexel.ListTyped.
type PexelListMatch struct {
	Count *int `json:"count,omitempty"`
	MediaType *string `json:"media_type,omitempty"`
	Orientation *string `json:"orientation,omitempty"`
	Page *int `json:"page,omitempty"`
	Query *string `json:"query,omitempty"`
}

// PhoneAdminAvailableAgentSource is the typed data model for the phone_admin_available_agent_source entity.
type PhoneAdminAvailableAgentSource struct {
}

// PhoneAdminAvailableAgentSourceListMatch is the typed request payload for PhoneAdminAvailableAgentSource.ListTyped.
type PhoneAdminAvailableAgentSourceListMatch struct {
	AvailableCount *int `json:"available_count,omitempty"`
	PcName *string `json:"pc_name,omitempty"`
}

// Product is the typed data model for the product entity.
type Product struct {
}

// ProductLoadMatch is the typed request payload for Product.LoadTyped.
type ProductLoadMatch struct {
	Id string `json:"id"`
}

// ProductListMatch is the typed request payload for Product.ListTyped.
type ProductListMatch struct {
	AgentCount *int `json:"agent_count,omitempty"`
	Agents *[]any `json:"agents,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	DemoVideos *any `json:"demoVideos,omitempty"`
	Description *string `json:"description,omitempty"`
	FaviconUrl *any `json:"favicon_url,omitempty"`
	HowItWorks *any `json:"howItWorks,omitempty"`
	HowItWorks2 *any `json:"how_it_works,omitempty"`
	Id *string `json:"id,omitempty"`
	Images *any `json:"images,omitempty"`
	InitialAgents *int `json:"initial_agents,omitempty"`
	InstagramHandle *any `json:"instagramHandle,omitempty"`
	InstagramHandle2 *any `json:"instagram_handle,omitempty"`
	IsActive *any `json:"isActive,omitempty"`
	IsApp *any `json:"isApp,omitempty"`
	IsActive2 *bool `json:"is_active,omitempty"`
	IsApp2 *bool `json:"is_app,omitempty"`
	Language *any `json:"language,omitempty"`
	MediaAssets *any `json:"mediaAssets,omitempty"`
	MediaAssetIds *any `json:"media_asset_ids,omitempty"`
	MediaAssets2 *any `json:"media_assets,omitempty"`
	Name *string `json:"name,omitempty"`
	OtherInstructions *any `json:"otherInstructions,omitempty"`
	OtherInstructions2 *any `json:"other_instructions,omitempty"`
	OutroVideo *any `json:"outroVideo,omitempty"`
	PexelsVideos *any `json:"pexelsVideos,omitempty"`
	Pricing *any `json:"pricing,omitempty"`
	PricingAndOffers *any `json:"pricingAndOffers,omitempty"`
	PricingAndOffers2 *any `json:"pricing_and_offers,omitempty"`
	ProductDemoIds *[]any `json:"product_demo_ids,omitempty"`
	ProductDetails *map[string]any `json:"product_details,omitempty"`
	ProductId *string `json:"product_id,omitempty"`
	ProductName *string `json:"product_name,omitempty"`
	ProductUrl *string `json:"product_url,omitempty"`
	Pronunciation *any `json:"pronunciation,omitempty"`
	RegenerateSora2 *bool `json:"regenerate_sora2,omitempty"`
	RepostSource *any `json:"repostSource,omitempty"`
	RepostSource2 *any `json:"repost_source,omitempty"`
	ScreenshotUrl *any `json:"screenshot_url,omitempty"`
	SocialPostIds *[]any `json:"social_post_ids,omitempty"`
	TargetAudience *any `json:"targetAudience,omitempty"`
	TargetAudience2 *any `json:"target_audience,omitempty"`
	TemplateProductId *any `json:"templateProductId,omitempty"`
	TiktokHandle *any `json:"tiktokHandle,omitempty"`
	TiktokHandle2 *any `json:"tiktok_handle,omitempty"`
	TotalCount *int `json:"total_count,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
	UserId *string `json:"userId,omitempty"`
}

// ProductCreateData is the typed request payload for Product.CreateTyped.
type ProductCreateData struct {
	FaviconUrl *any `json:"favicon_url,omitempty"`
	InitialAgents *int `json:"initial_agents,omitempty"`
	ProductDemoIds *[]any `json:"product_demo_ids,omitempty"`
	ProductDetails map[string]any `json:"product_details"`
	ProductUrl string `json:"product_url"`
	ScreenshotUrl *any `json:"screenshot_url,omitempty"`
	SocialPostIds *[]any `json:"social_post_ids,omitempty"`
}

// ProductUpdateData is the typed request payload for Product.UpdateTyped.
type ProductUpdateData struct {
	Id string `json:"id"`
	Description *string `json:"description,omitempty"`
	HowItWorks *any `json:"how_it_works,omitempty"`
	InstagramHandle *any `json:"instagram_handle,omitempty"`
	IsApp *bool `json:"is_app,omitempty"`
	Language *any `json:"language,omitempty"`
	MediaAssetIds *any `json:"media_asset_ids,omitempty"`
	Name *string `json:"name,omitempty"`
	OtherInstructions *any `json:"other_instructions,omitempty"`
	PricingAndOffers *any `json:"pricing_and_offers,omitempty"`
	Pronunciation *any `json:"pronunciation,omitempty"`
	RegenerateSora2 *bool `json:"regenerate_sora2,omitempty"`
	RepostSource *any `json:"repost_source,omitempty"`
	TargetAudience *any `json:"target_audience,omitempty"`
	TiktokHandle *any `json:"tiktok_handle,omitempty"`
	Url *string `json:"url,omitempty"`
}

// ProductRemoveMatch is the typed request payload for Product.RemoveTyped.
type ProductRemoveMatch struct {
	Id string `json:"id"`
}

// ProductDashboard is the typed data model for the product_dashboard entity.
type ProductDashboard struct {
}

// ProductDashboardListMatch is the typed request payload for ProductDashboard.ListTyped.
type ProductDashboardListMatch struct {
	Date *any `json:"date,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	ProductId *string `json:"product_id,omitempty"`
	Search *any `json:"search,omitempty"`
}

// ProductDashboardView is the typed data model for the product_dashboard_view entity.
type ProductDashboardView struct {
}

// ProductDashboardViewListMatch is the typed request payload for ProductDashboardView.ListTyped.
type ProductDashboardViewListMatch struct {
	Date *any `json:"date,omitempty"`
	ProductId string `json:"product_id"`
	Range *int `json:"range,omitempty"`
}

// ProductDemo is the typed data model for the product_demo entity.
type ProductDemo struct {
}

// ProductDemoListMatch is the typed request payload for ProductDemo.ListTyped.
type ProductDemoListMatch struct {
	ProductId *string `json:"product_id,omitempty"`
}

// ProductLanding is the typed data model for the product_landing entity.
type ProductLanding struct {
}

// ProductLandingListMatch is the typed request payload for ProductLanding.ListTyped.
type ProductLandingListMatch struct {
	ProductId *string `json:"product_id,omitempty"`
}

// ProductLandingUpdateData is the typed request payload for ProductLanding.UpdateTyped.
type ProductLandingUpdateData struct {
	ProductId *string `json:"product_id,omitempty"`
	Bio *any `json:"bio,omitempty"`
	CommentingOnMyPosts *bool `json:"commentingOnMyPosts,omitempty"`
	CommentingOnOthersPosts *bool `json:"commentingOnOthersPosts,omitempty"`
	CtaButtonText *any `json:"ctaButtonText,omitempty"`
	CtaDescription *any `json:"ctaDescription,omitempty"`
	CtaLink *any `json:"ctaLink,omitempty"`
	CtaTitle *any `json:"ctaTitle,omitempty"`
	DmCommenters *bool `json:"dmCommenters,omitempty"`
	DmInitialMessagePrompt *any `json:"dmInitialMessagePrompt,omitempty"`
	DmOngoingResponsePrompt *any `json:"dmOngoingResponsePrompt,omitempty"`
	FirstCommentTextBeforeLink *any `json:"firstCommentTextBeforeLink,omitempty"`
	HeaderImageUrl *any `json:"headerImageUrl,omitempty"`
	LinkInBioType *string `json:"linkInBioType,omitempty"`
	LinkInDmsType *string `json:"linkInDmsType,omitempty"`
	LinkInPostsType *string `json:"linkInPostsType,omitempty"`
	Links *any `json:"links,omitempty"`
	MyPostsStylePrompt *any `json:"myPostsStylePrompt,omitempty"`
	Name *string `json:"name,omitempty"`
	OthersStylePrompt *any `json:"othersStylePrompt,omitempty"`
	OthersTargetMarketPrompt *any `json:"othersTargetMarketPrompt,omitempty"`
	ProductLinkSelection *string `json:"productLinkSelection,omitempty"`
	ProfileImageUrl *any `json:"profileImageUrl,omitempty"`
	ShortLink *any `json:"shortLink,omitempty"`
	ShortLinkKeyword *any `json:"shortLinkKeyword,omitempty"`
	ShowLinkInFirstComment *bool `json:"showLinkInFirstComment,omitempty"`
	Slug *string `json:"slug,omitempty"`
	SocialLinks *any `json:"socialLinks,omitempty"`
	Testimonials *any `json:"testimonials,omitempty"`
}

// PublicResumeStatus is the typed data model for the public_resume_status entity.
type PublicResumeStatus struct {
}

// PublicResumeStatusLoadMatch is the typed request payload for PublicResumeStatus.LoadTyped.
type PublicResumeStatusLoadMatch struct {
	Oid string `json:"oid"`
}

// ReRollVideo is the typed data model for the re_roll_video entity.
type ReRollVideo struct {
}

// ReRollVideoCreateData is the typed request payload for ReRollVideo.CreateTyped.
type ReRollVideoCreateData struct {
	QueueId string `json:"queue_id"`
	SkipCreditCheck *bool `json:"skip_credit_check,omitempty"`
}

// ReadRootGet is the typed data model for the read_root_get entity.
type ReadRootGet struct {
}

// ReadRootGetLoadMatch is the typed request payload for ReadRootGet.LoadTyped.
type ReadRootGetLoadMatch struct {
}

// RecordDemoBooked is the typed data model for the record_demo_booked entity.
type RecordDemoBooked struct {
}

// RecordDemoBookedCreateData is the typed request payload for RecordDemoBooked.CreateTyped.
type RecordDemoBookedCreateData struct {
	SessionId string `json:"session_id"`
	CalendlyEventUri *any `json:"calendlyEventUri,omitempty"`
	CalendlyInviteeUri *any `json:"calendlyInviteeUri,omitempty"`
}

// RefreshStat is the typed data model for the refresh_stat entity.
type RefreshStat struct {
}

// RefreshStatCreateData is the typed request payload for RefreshStat.CreateTyped.
type RefreshStatCreateData struct {
	Email *string `json:"email,omitempty"`
	UserId *string `json:"user_id,omitempty"`
	DateFrom *any `json:"date_from,omitempty"`
	DateTo *any `json:"date_to,omitempty"`
	Provider *string `json:"provider,omitempty"`
}

// RemixerClipper is the typed data model for the remixer_clipper entity.
type RemixerClipper struct {
}

// RemixerClipperLoadMatch is the typed request payload for RemixerClipper.LoadTyped.
type RemixerClipperLoadMatch struct {
}

// RemixerClipperCreateData is the typed request payload for RemixerClipper.CreateTyped.
type RemixerClipperCreateData struct {
	Identifier string `json:"identifier"`
}

// ResetProduct is the typed data model for the reset_product entity.
type ResetProduct struct {
}

// ResetProductLoadMatch is the typed request payload for ResetProduct.LoadTyped.
type ResetProductLoadMatch struct {
}

// ResetProductCreateData is the typed request payload for ResetProduct.CreateTyped.
type ResetProductCreateData struct {
}

// RetryWebsiteScrape is the typed data model for the retry_website_scrape entity.
type RetryWebsiteScrape struct {
}

// RetryWebsiteScrapeCreateData is the typed request payload for RetryWebsiteScrape.CreateTyped.
type RetryWebsiteScrapeCreateData struct {
	OnboardingDataId string `json:"onboarding_data_id"`
	Url string `json:"url"`
}

// SaveSurvey is the typed data model for the save_survey entity.
type SaveSurvey struct {
}

// SaveSurveyCreateData is the typed request payload for SaveSurvey.CreateTyped.
type SaveSurveyCreateData struct {
	OnboardingDataId string `json:"onboarding_data_id"`
	Survey map[string]any `json:"survey"`
}

// ScanSocial is the typed data model for the scan_social entity.
type ScanSocial struct {
}

// ScanSocialCreateData is the typed request payload for ScanSocial.CreateTyped.
type ScanSocialCreateData struct {
	InstagramHandle *any `json:"instagram_handle,omitempty"`
	OnboardingDataId string `json:"onboarding_data_id"`
	ProductId *string `json:"product_id,omitempty"`
	TiktokHandle any `json:"tiktok_handle"`
}

// ScanSocialsPublic is the typed data model for the scan_socials_public entity.
type ScanSocialsPublic struct {
}

// ScanSocialsPublicCreateData is the typed request payload for ScanSocialsPublic.CreateTyped.
type ScanSocialsPublicCreateData struct {
	InstagramHandle *any `json:"instagram_handle,omitempty"`
	OnboardingDataId string `json:"onboarding_data_id"`
	TiktokHandle *any `json:"tiktok_handle,omitempty"`
}

// ScanSocialsStatus is the typed data model for the scan_socials_status entity.
type ScanSocialsStatus struct {
}

// ScanSocialsStatusLoadMatch is the typed request payload for ScanSocialsStatus.LoadTyped.
type ScanSocialsStatusLoadMatch struct {
	OnboardingDataId *string `json:"onboarding_data_id,omitempty"`
	ProductId *string `json:"product_id,omitempty"`
}

// ScheduleV2 is the typed data model for the schedule_v2 entity.
type ScheduleV2 struct {
}

// ScheduleV2LoadMatch is the typed request payload for ScheduleV2.LoadTyped.
type ScheduleV2LoadMatch struct {
	AllProduct *bool `json:"all_product,omitempty"`
	Day *int `json:"day,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Offset *int `json:"offset,omitempty"`
	ProductId *string `json:"product_id,omitempty"`
}

// ScheduleV2ListMatch is the typed request payload for ScheduleV2.ListTyped.
type ScheduleV2ListMatch struct {
	AllProduct *bool `json:"all_product,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Offset *int `json:"offset,omitempty"`
	ProductId *string `json:"product_id,omitempty"`
	Status *any `json:"status,omitempty"`
}

// ScheduleV2CreateData is the typed request payload for ScheduleV2.CreateTyped.
type ScheduleV2CreateData struct {
	Agent *any `json:"agent,omitempty"`
	Comment *any `json:"comment,omitempty"`
	CreatedAt string `json:"created_at"`
	Id string `json:"id"`
	InstagramPostedBy *any `json:"instagram_posted_by,omitempty"`
	InstagramPostedUrl *any `json:"instagram_posted_url,omitempty"`
	InstagramScrapedSocialPostId *string `json:"instagram_scraped_social_post_id,omitempty"`
	IsInstagramPosted *bool `json:"is_instagram_posted,omitempty"`
	IsTiktokPosted *bool `json:"is_tiktok_posted,omitempty"`
	IsYoutubePosted *bool `json:"is_youtube_posted,omitempty"`
	Reorders []any `json:"reorders"`
	Results *any `json:"results,omitempty"`
	ScheduledDatetime string `json:"scheduled_datetime"`
	SourceType string `json:"source_type"`
	Status string `json:"status"`
	TiktokPostedBy *any `json:"tiktok_posted_by,omitempty"`
	TiktokPostedUrl *any `json:"tiktok_posted_url,omitempty"`
	TiktokScrapedSocialPostId *string `json:"tiktok_scraped_social_post_id,omitempty"`
	Video *any `json:"video,omitempty"`
	VideoId string `json:"video_id"`
	YoutubePostedBy *any `json:"youtube_posted_by,omitempty"`
	YoutubePostedUrl *any `json:"youtube_posted_url,omitempty"`
	YoutubeScrapedSocialPostId *string `json:"youtube_scraped_social_post_id,omitempty"`
}

// ScheduleV2UpdateData is the typed request payload for ScheduleV2.UpdateTyped.
type ScheduleV2UpdateData struct {
	QueueId string `json:"queue_id"`
	VideoId *string `json:"video_id,omitempty"`
}

// ScheduleV2RemoveMatch is the typed request payload for ScheduleV2.RemoveTyped.
type ScheduleV2RemoveMatch struct {
	QueueId string `json:"queue_id"`
}

// Scrape is the typed data model for the scrape entity.
type Scrape struct {
}

// ScrapeCreateData is the typed request payload for Scrape.CreateTyped.
type ScrapeCreateData struct {
	OldProductId string `json:"old_product_id"`
	Url string `json:"url"`
}

// ScrapeWebsitePublic is the typed data model for the scrape_website_public entity.
type ScrapeWebsitePublic struct {
}

// ScrapeWebsitePublicCreateData is the typed request payload for ScrapeWebsitePublic.CreateTyped.
type ScrapeWebsitePublicCreateData struct {
	Context *any `json:"context,omitempty"`
	Flow *any `json:"flow,omitempty"`
	SkipDemo *bool `json:"skip_demo,omitempty"`
	Url string `json:"url"`
}

// ScrapedData is the typed data model for the scraped_data entity.
type ScrapedData struct {
}

// ScrapedDataCreateData is the typed request payload for ScrapedData.CreateTyped.
type ScrapedDataCreateData struct {
	InstagramUsername *any `json:"instagram_username,omitempty"`
	Url string `json:"url"`
}

// ScrapingStatus is the typed data model for the scraping_status entity.
type ScrapingStatus struct {
}

// ScrapingStatusLoadMatch is the typed request payload for ScrapingStatus.LoadTyped.
type ScrapingStatusLoadMatch struct {
}

// SelfServeActivate is the typed data model for the self_serve_activate entity.
type SelfServeActivate struct {
}

// SelfServeActivateCreateData is the typed request payload for SelfServeActivate.CreateTyped.
type SelfServeActivateCreateData struct {
	OnboardingDataId string `json:"onboarding_data_id"`
}

// Seo is the typed data model for the seo entity.
type Seo struct {
}

// SeoLoadMatch is the typed request payload for Seo.LoadTyped.
type SeoLoadMatch struct {
}

// SeoAiMention is the typed data model for the seo_ai_mention entity.
type SeoAiMention struct {
}

// SeoAiMentionListMatch is the typed request payload for SeoAiMention.ListTyped.
type SeoAiMentionListMatch struct {
	Limit *int `json:"limit,omitempty"`
	ProductId *string `json:"product_id,omitempty"`
}

// SeoBacklink is the typed data model for the seo_backlink entity.
type SeoBacklink struct {
}

// SeoBacklinkListMatch is the typed request payload for SeoBacklink.ListTyped.
type SeoBacklinkListMatch struct {
	Limit *int `json:"limit,omitempty"`
	ProductId *string `json:"product_id,omitempty"`
}

// SeoKeyword is the typed data model for the seo_keyword entity.
type SeoKeyword struct {
}

// SeoKeywordListMatch is the typed request payload for SeoKeyword.ListTyped.
type SeoKeywordListMatch struct {
	Day *int `json:"day,omitempty"`
	Limit *int `json:"limit,omitempty"`
	ProductId *string `json:"product_id,omitempty"`
}

// SeoOverview is the typed data model for the seo_overview entity.
type SeoOverview struct {
}

// SeoOverviewListMatch is the typed request payload for SeoOverview.ListTyped.
type SeoOverviewListMatch struct {
	Day *int `json:"day,omitempty"`
	ProductId *string `json:"product_id,omitempty"`
}

// SeoTraffic is the typed data model for the seo_traffic entity.
type SeoTraffic struct {
}

// SeoTrafficListMatch is the typed request payload for SeoTraffic.ListTyped.
type SeoTrafficListMatch struct {
	Day *int `json:"day,omitempty"`
	ProductId *string `json:"product_id,omitempty"`
	TopLimit *int `json:"top_limit,omitempty"`
}

// ShareAccessLink is the typed data model for the share_access_link entity.
type ShareAccessLink struct {
}

// ShareAccessLinkCreateData is the typed request payload for ShareAccessLink.CreateTyped.
type ShareAccessLinkCreateData struct {
	ShareToken string `json:"share_token"`
	ShareUrl string `json:"share_url"`
}

// Site is the typed data model for the site entity.
type Site struct {
}

// SiteLoadMatch is the typed request payload for Site.LoadTyped.
type SiteLoadMatch struct {
}

// Slide is the typed data model for the slide entity.
type Slide struct {
}

// SlideCreateData is the typed request payload for Slide.CreateTyped.
type SlideCreateData struct {
	CarouselId string `json:"carousel_id"`
	SlideIndex int `json:"slide_index"`
	Caption *any `json:"caption,omitempty"`
	Prompt *any `json:"prompt,omitempty"`
	ImageModel *any `json:"image_model,omitempty"`
}

// SlideUpdateData is the typed request payload for Slide.UpdateTyped.
type SlideUpdateData struct {
	CarouselId string `json:"carousel_id"`
	Id int `json:"id"`
	Caption *any `json:"caption,omitempty"`
	Prompt *any `json:"prompt,omitempty"`
}

// SlugValidation is the typed data model for the slug_validation entity.
type SlugValidation struct {
}

// SlugValidationLoadMatch is the typed request payload for SlugValidation.LoadTyped.
type SlugValidationLoadMatch struct {
	Slug string `json:"slug"`
	ProductId *string `json:"product_id,omitempty"`
}

// Social is the typed data model for the social entity.
type Social struct {
}

// SocialLoadMatch is the typed request payload for Social.LoadTyped.
type SocialLoadMatch struct {
	CodeChallenge *any `json:"code_challenge,omitempty"`
	CodeChallengeMethod *string `json:"code_challenge_method,omitempty"`
}

// SocialListMatch is the typed request payload for Social.ListTyped.
type SocialListMatch struct {
	Code *string `json:"code,omitempty"`
	CodeVerifier *string `json:"code_verifier,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Id *string `json:"id,omitempty"`
	Platform *string `json:"platform,omitempty"`
	PlatformUserId *string `json:"platformUserId,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	UserId *string `json:"userId,omitempty"`
	Username *string `json:"username,omitempty"`
}

// SocialCreateData is the typed request payload for Social.CreateTyped.
type SocialCreateData struct {
	Code string `json:"code"`
	CodeVerifier string `json:"code_verifier"`
}

// SocialRemoveMatch is the typed request payload for Social.RemoveTyped.
type SocialRemoveMatch struct {
	Platform string `json:"platform"`
}

// SocialScanPreview is the typed data model for the social_scan_preview entity.
type SocialScanPreview struct {
}

// SocialScanPreviewCreateData is the typed request payload for SocialScanPreview.CreateTyped.
type SocialScanPreviewCreateData struct {
	InstagramHandle *any `json:"instagram_handle,omitempty"`
	TiktokHandle *any `json:"tiktok_handle,omitempty"`
}

// SocialScanProcess is the typed data model for the social_scan_process entity.
type SocialScanProcess struct {
}

// SocialScanProcessCreateData is the typed request payload for SocialScanProcess.CreateTyped.
type SocialScanProcessCreateData struct {
	Posts []any `json:"posts"`
	ProductId string `json:"product_id"`
}

// SocialScanSave is the typed data model for the social_scan_save entity.
type SocialScanSave struct {
}

// SocialScanSaveCreateData is the typed request payload for SocialScanSave.CreateTyped.
type SocialScanSaveCreateData struct {
	Posts []any `json:"posts"`
	ProductId string `json:"product_id"`
}

// Sora2Avatar is the typed data model for the sora2_avatar entity.
type Sora2Avatar struct {
}

// Sora2AvatarLoadMatch is the typed request payload for Sora2Avatar.LoadTyped.
type Sora2AvatarLoadMatch struct {
	Id string `json:"id"`
}

// Sora2AvatarListMatch is the typed request payload for Sora2Avatar.ListTyped.
type Sora2AvatarListMatch struct {
	CompletedOnly *bool `json:"completed_only,omitempty"`
	CurrentStep *any `json:"current_step,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	PromptKey *any `json:"prompt_key,omitempty"`
	Search *any `json:"search,omitempty"`
	SelectedAgeBucket *any `json:"selected_age_bucket,omitempty"`
	SelectedGender *any `json:"selected_gender,omitempty"`
	SelectedRace *any `json:"selected_race,omitempty"`
}

// Sora2AvatarCreateData is the typed request payload for Sora2Avatar.CreateTyped.
type Sora2AvatarCreateData struct {
	AvatarFrameUrl *any `json:"avatar_frame_url,omitempty"`
	CurrentStep *int `json:"current_step,omitempty"`
	HeadshotUrl *any `json:"headshot_url,omitempty"`
	Logs *map[string]any `json:"logs,omitempty"`
	PromptKey string `json:"prompt_key"`
	RunOutputDir *any `json:"run_output_dir,omitempty"`
	SelectedAgeBucket string `json:"selected_age_bucket"`
	SelectedGender string `json:"selected_gender"`
	SelectedPrompt *any `json:"selected_prompt,omitempty"`
	SelectedRace string `json:"selected_race"`
	Sora2CameoHandle *any `json:"sora2_cameo_handle,omitempty"`
	Sora2CameoId *string `json:"sora2_cameo_id,omitempty"`
	Sora2CameoLink *any `json:"sora2_cameo_link,omitempty"`
	Sora2DisplayName *any `json:"sora2_display_name,omitempty"`
	Sora2TaskId *string `json:"sora2_task_id,omitempty"`
	Sora2VideoUrl string `json:"sora2_video_url"`
}

// Sora2AvatarUpdateData is the typed request payload for Sora2Avatar.UpdateTyped.
type Sora2AvatarUpdateData struct {
	Id string `json:"id"`
	AvatarFrameUrl *any `json:"avatar_frame_url,omitempty"`
	CurrentStep *int `json:"current_step,omitempty"`
	HeadshotUrl *any `json:"headshot_url,omitempty"`
	Logs *map[string]any `json:"logs,omitempty"`
	PromptKey *string `json:"prompt_key,omitempty"`
	RunOutputDir *any `json:"run_output_dir,omitempty"`
	SelectedAgeBucket *string `json:"selected_age_bucket,omitempty"`
	SelectedGender *string `json:"selected_gender,omitempty"`
	SelectedPrompt *any `json:"selected_prompt,omitempty"`
	SelectedRace *string `json:"selected_race,omitempty"`
	Sora2CameoHandle *any `json:"sora2_cameo_handle,omitempty"`
	Sora2CameoId *string `json:"sora2_cameo_id,omitempty"`
	Sora2CameoLink *any `json:"sora2_cameo_link,omitempty"`
	Sora2DisplayName *any `json:"sora2_display_name,omitempty"`
	Sora2TaskId *string `json:"sora2_task_id,omitempty"`
	Sora2VideoUrl *string `json:"sora2_video_url,omitempty"`
}

// Sora2AvatarAssetUpload is the typed data model for the sora2_avatar_asset_upload entity.
type Sora2AvatarAssetUpload struct {
}

// Sora2AvatarAssetUploadCreateData is the typed request payload for Sora2AvatarAssetUpload.CreateTyped.
type Sora2AvatarAssetUploadCreateData struct {
	AvatarId *string `json:"avatar_id,omitempty"`
	File string `json:"file"`
	RunOutputDir *any `json:"run_output_dir,omitempty"`
	S3Key string `json:"s3_key"`
	UploadType string `json:"upload_type"`
	Url string `json:"url"`
}

// Sora2AvatarStat is the typed data model for the sora2_avatar_stat entity.
type Sora2AvatarStat struct {
}

// Sora2AvatarStatLoadMatch is the typed request payload for Sora2AvatarStat.LoadTyped.
type Sora2AvatarStatLoadMatch struct {
	PromptKey *any `json:"prompt_key,omitempty"`
	SelectedAgeBucket *any `json:"selected_age_bucket,omitempty"`
	SelectedGender *any `json:"selected_gender,omitempty"`
	SelectedRace *any `json:"selected_race,omitempty"`
}

// Stat is the typed data model for the stat entity.
type Stat struct {
}

// StatListMatch is the typed request payload for Stat.ListTyped.
type StatListMatch struct {
	Day *int `json:"day,omitempty"`
}

// StatsRefreshBackfill is the typed data model for the stats_refresh_backfill entity.
type StatsRefreshBackfill struct {
}

// StatsRefreshBackfillCreateData is the typed request payload for StatsRefreshBackfill.CreateTyped.
type StatsRefreshBackfillCreateData struct {
	Day *int `json:"day,omitempty"`
	Days *any `json:"days,omitempty"`
	UserEmails *any `json:"user_emails,omitempty"`
}

// StatsRefreshIssue is the typed data model for the stats_refresh_issue entity.
type StatsRefreshIssue struct {
}

// StatsRefreshIssueListMatch is the typed request payload for StatsRefreshIssue.ListTyped.
type StatsRefreshIssueListMatch struct {
	DateFrom *any `json:"date_from,omitempty"`
	DateTo *any `json:"date_to,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Offset *int `json:"offset,omitempty"`
	Platform *any `json:"platform,omitempty"`
	PostingMethod *any `json:"posting_method,omitempty"`
	Query *any `json:"query,omitempty"`
	Reason *any `json:"reason,omitempty"`
	Status *string `json:"status,omitempty"`
}

// StatsRefreshOverview is the typed data model for the stats_refresh_overview entity.
type StatsRefreshOverview struct {
}

// StatsRefreshOverviewListMatch is the typed request payload for StatsRefreshOverview.ListTyped.
type StatsRefreshOverviewListMatch struct {
	Date *any `json:"date,omitempty"`
}

// StatsRefreshRunSummary is the typed data model for the stats_refresh_run_summary entity.
type StatsRefreshRunSummary struct {
}

// StatsRefreshRunSummaryListMatch is the typed request payload for StatsRefreshRunSummary.ListTyped.
type StatsRefreshRunSummaryListMatch struct {
	DateFrom *any `json:"date_from,omitempty"`
	DateTo *any `json:"date_to,omitempty"`
	IncludeGlobal *bool `json:"include_global,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Offset *int `json:"offset,omitempty"`
	RunType *any `json:"run_type,omitempty"`
	Status *any `json:"status,omitempty"`
}

// StatsRefreshTaskTrigger is the typed data model for the stats_refresh_task_trigger entity.
type StatsRefreshTaskTrigger struct {
}

// StatsRefreshTaskTriggerCreateData is the typed request payload for StatsRefreshTaskTrigger.CreateTyped.
type StatsRefreshTaskTriggerCreateData struct {
	Message string `json:"message"`
	Status string `json:"status"`
	TargetDate string `json:"target_date"`
	TaskId string `json:"task_id"`
	UsersCount *int `json:"users_count,omitempty"`
}

// Stripe is the typed data model for the stripe entity.
type Stripe struct {
}

// StripeCreateData is the typed request payload for Stripe.CreateTyped.
type StripeCreateData struct {
	ChatPlanId *any `json:"chat_plan_id,omitempty"`
	CheckoutSessionId *any `json:"checkout_session_id,omitempty"`
	CouponId *any `json:"coupon_id,omitempty"`
	CreditsPerUnit *any `json:"credits_per_unit,omitempty"`
	Membership *any `json:"membership,omitempty"`
	OnboardingDataId *any `json:"onboarding_data_id,omitempty"`
	Quantity *any `json:"quantity,omitempty"`
}

// Style is the typed data model for the style entity.
type Style struct {
}

// StyleLoadMatch is the typed request payload for Style.LoadTyped.
type StyleLoadMatch struct {
}

// Template is the typed data model for the template entity.
type Template struct {
}

// TemplateLoadMatch is the typed request payload for Template.LoadTyped.
type TemplateLoadMatch struct {
}

// TikTokCreatorInfo is the typed data model for the tik_tok_creator_info entity.
type TikTokCreatorInfo struct {
}

// TikTokCreatorInfoListMatch is the typed request payload for TikTokCreatorInfo.ListTyped.
type TikTokCreatorInfoListMatch struct {
	CommentDisabled *bool `json:"commentDisabled,omitempty"`
	CreatorAvatarUrl *any `json:"creatorAvatarUrl,omitempty"`
	CreatorNickname *any `json:"creatorNickname,omitempty"`
	CreatorUsername *any `json:"creatorUsername,omitempty"`
	DuetDisabled *bool `json:"duetDisabled,omitempty"`
	MaxVideoPostDurationSec *int `json:"maxVideoPostDurationSec,omitempty"`
	PrivacyLevelOptions *[]any `json:"privacyLevelOptions,omitempty"`
	StitchDisabled *bool `json:"stitchDisabled,omitempty"`
}

// TopPost is the typed data model for the top_post entity.
type TopPost struct {
}

// TopPostListMatch is the typed request payload for TopPost.ListTyped.
type TopPostListMatch struct {
	Date string `json:"date"`
}

// UploadPostAgent is the typed data model for the upload_post_agent entity.
type UploadPostAgent struct {
}

// UploadPostAgentCreateData is the typed request payload for UploadPostAgent.CreateTyped.
type UploadPostAgentCreateData struct {
}

// User is the typed data model for the user entity.
type User struct {
}

// UserLoadMatch is the typed request payload for User.LoadTyped.
type UserLoadMatch struct {
	Id string `json:"id"`
	ProductId *string `json:"product_id,omitempty"`
}

// UserUpdateData is the typed request payload for User.UpdateTyped.
type UserUpdateData struct {
	AccountType *any `json:"accountType,omitempty"`
	ActivatedByAdminAt *any `json:"activatedByAdminAt,omitempty"`
	ActivatedByAdminId *any `json:"activatedByAdminId,omitempty"`
	Agents *[]any `json:"agents,omitempty"`
	AgentsCount *any `json:"agentsCount,omitempty"`
	Attribution *any `json:"attribution,omitempty"`
	AvatarImageUrl *any `json:"avatarImageUrl,omitempty"`
	AvatarVoiceUrl *any `json:"avatarVoiceUrl,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Credits *int `json:"credits,omitempty"`
	Email *string `json:"email,omitempty"`
	GoogleId *any `json:"googleId,omitempty"`
	HasSeenScheduleWelcome *bool `json:"hasSeenScheduleWelcome,omitempty"`
	Id *string `json:"id,omitempty"`
	Industry *any `json:"industry,omitempty"`
	InstagramId *any `json:"instagramId,omitempty"`
	IsActivatedByAdmin *bool `json:"isActivatedByAdmin,omitempty"`
	IsAdmin *bool `json:"isAdmin,omitempty"`
	IsInternalUser *any `json:"isInternalUser,omitempty"`
	IsMigrated *any `json:"isMigrated,omitempty"`
	IsResettingProduct *any `json:"isResettingProduct,omitempty"`
	Membership *any `json:"membership,omitempty"`
	Name *string `json:"name,omitempty"`
	PartnerDirectLoginDisabled *bool `json:"partnerDirectLoginDisabled,omitempty"`
	PartnerExternalUserId *any `json:"partnerExternalUserId,omitempty"`
	PartnerPolicyCode *any `json:"partnerPolicyCode,omitempty"`
	PartnerSource *any `json:"partnerSource,omitempty"`
	Picture *any `json:"picture,omitempty"`
	StripeCustomerId *any `json:"stripeCustomerId,omitempty"`
	StripeSubscriptionId *any `json:"stripeSubscriptionId,omitempty"`
	SubscriptionCurrentPeriodEnd *any `json:"subscriptionCurrentPeriodEnd,omitempty"`
	SubscriptionStatus *any `json:"subscriptionStatus,omitempty"`
	TotalCount *int `json:"totalCount,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	UserId *string `json:"userId,omitempty"`
}

// UserAgent is the typed data model for the user_agent entity.
type UserAgent struct {
}

// UserAgentListMatch is the typed request payload for UserAgent.ListTyped.
type UserAgentListMatch struct {
	Id string `json:"id"`
	Limit *int `json:"limit,omitempty"`
	Offset *int `json:"offset,omitempty"`
	ProductId *string `json:"product_id,omitempty"`
}

// UserAgentCreateData is the typed request payload for UserAgent.CreateTyped.
type UserAgentCreateData struct {
	Id string `json:"id"`
	AgentId *string `json:"agent_id,omitempty"`
	PhoneAdminPcName *any `json:"phone_admin_pc_name,omitempty"`
	ProductId *string `json:"product_id,omitempty"`
	Agent map[string]any `json:"agent"`
	AssignedAt string `json:"assigned_at"`
	AssignmentId string `json:"assignment_id"`
	ExpiresAt *any `json:"expires_at,omitempty"`
	Status string `json:"status"`
}

// UserHealthDetail is the typed data model for the user_health_detail entity.
type UserHealthDetail struct {
}

// UserHealthDetailListMatch is the typed request payload for UserHealthDetail.ListTyped.
type UserHealthDetailListMatch struct {
	Id string `json:"id"`
	AssignedAgentsPreviewLimit *int `json:"assigned_agents_preview_limit,omitempty"`
	ProductId *string `json:"product_id,omitempty"`
}

// UserWithAvatarSubmission is the typed data model for the user_with_avatar_submission entity.
type UserWithAvatarSubmission struct {
}

// UserWithAvatarSubmissionListMatch is the typed request payload for UserWithAvatarSubmission.ListTyped.
type UserWithAvatarSubmissionListMatch struct {
	AvatarImageUrl *string `json:"avatar_image_url,omitempty"`
	AvatarVoiceUrl *string `json:"avatar_voice_url,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Email *string `json:"email,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

// UsersHealth is the typed data model for the users_health entity.
type UsersHealth struct {
}

// UsersHealthListMatch is the typed request payload for UsersHealth.ListTyped.
type UsersHealthListMatch struct {
	IncludeInternalUser *bool `json:"include_internal_user,omitempty"`
	IncludeMigratedUser *bool `json:"include_migrated_user,omitempty"`
}

// Video is the typed data model for the video entity.
type Video struct {
}

// VideoLoadMatch is the typed request payload for Video.LoadTyped.
type VideoLoadMatch struct {
	Id string `json:"id"`
}

// VideoCreateData is the typed request payload for Video.CreateTyped.
type VideoCreateData struct {
	AgentId *string `json:"agent_id,omitempty"`
	Bookmarked *any `json:"bookmarked,omitempty"`
	Captions any `json:"captions"`
	CarouselData *any `json:"carousel_data,omitempty"`
	Duration *float64 `json:"duration,omitempty"`
	GenerationStatus *any `json:"generation_status,omitempty"`
	ImagePrompt *any `json:"image_prompt,omitempty"`
	IsOnboarding *bool `json:"is_onboarding,omitempty"`
	IsTemplate *bool `json:"is_template,omitempty"`
	MainPrompt *any `json:"main_prompt,omitempty"`
	MediaAssetId *string `json:"media_asset_id,omitempty"`
	ProductId *string `json:"product_id,omitempty"`
	ReelId *string `json:"reel_id,omitempty"`
	ThumbnailUrl *any `json:"thumbnail_url,omitempty"`
	Title string `json:"title"`
	Type *any `json:"type,omitempty"`
	Url string `json:"url"`
	UserId *string `json:"user_id,omitempty"`
	VideoId string `json:"video_id"`
}

// VideoUpdateData is the typed request payload for Video.UpdateTyped.
type VideoUpdateData struct {
	Id string `json:"id"`
	AgentId *string `json:"agent_id,omitempty"`
	Bookmarked *any `json:"bookmarked,omitempty"`
	Captions *any `json:"captions,omitempty"`
	CarouselData *any `json:"carousel_data,omitempty"`
	Duration *float64 `json:"duration,omitempty"`
	GenerationStatus *any `json:"generation_status,omitempty"`
	ImagePrompt *any `json:"image_prompt,omitempty"`
	IsOnboarding *bool `json:"is_onboarding,omitempty"`
	IsTemplate *bool `json:"is_template,omitempty"`
	MainPrompt *any `json:"main_prompt,omitempty"`
	MediaAssetId *string `json:"media_asset_id,omitempty"`
	ProductId *string `json:"product_id,omitempty"`
	ReelId *string `json:"reel_id,omitempty"`
	ThumbnailUrl *any `json:"thumbnail_url,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *any `json:"type,omitempty"`
	Url *string `json:"url,omitempty"`
	UserId *string `json:"user_id,omitempty"`
}

// VideoRemoveMatch is the typed request payload for Video.RemoveTyped.
type VideoRemoveMatch struct {
	Id string `json:"id"`
}

// VideoRemixerWorker is the typed data model for the video_remixer_worker entity.
type VideoRemixerWorker struct {
}

// VideoRemixerWorkerCreateData is the typed request payload for VideoRemixerWorker.CreateTyped.
type VideoRemixerWorkerCreateData struct {
	CaptionsAss *string `json:"captions_ass,omitempty"`
	CaptionsVtt *string `json:"captions_vtt,omitempty"`
	CostUsd *float64 `json:"cost_usd,omitempty"`
	Error string `json:"error"`
	File string `json:"file"`
	Kinds *[]any `json:"kinds,omitempty"`
	LeaseToken string `json:"lease_token"`
	Limit *int `json:"limit,omitempty"`
	Manifest string `json:"manifest"`
	Model string `json:"model"`
	ProcessingSeconds *float64 `json:"processing_seconds,omitempty"`
	PromptVersion string `json:"prompt_version"`
	Result *map[string]any `json:"result,omitempty"`
	Thumbnail string `json:"thumbnail"`
	Tier *string `json:"tier,omitempty"`
	WorkerId string `json:"worker_id"`
}

// WatchdogRecovery is the typed data model for the watchdog_recovery entity.
type WatchdogRecovery struct {
}

// WatchdogRecoveryLoadMatch is the typed request payload for WatchdogRecovery.LoadTyped.
type WatchdogRecoveryLoadMatch struct {
	DeviceId *string `json:"device_id,omitempty"`
}

// WatchdogRecoveryCreateData is the typed request payload for WatchdogRecovery.CreateTyped.
type WatchdogRecoveryCreateData struct {
	ItemId string `json:"item_id"`
	Passed bool `json:"passed"`
	Table string `json:"table"`
}

// WinningAd is the typed data model for the winning_ad entity.
type WinningAd struct {
}

// WinningAdListMatch is the typed request payload for WinningAd.ListTyped.
type WinningAdListMatch struct {
	ProductId *string `json:"product_id,omitempty"`
}

// XAdaptation is the typed data model for the x_adaptation entity.
type XAdaptation struct {
}

// XAdaptationLoadMatch is the typed request payload for XAdaptation.LoadTyped.
type XAdaptationLoadMatch struct {
}

// ZerohumanAdminAccount is the typed data model for the zerohuman_admin_account entity.
type ZerohumanAdminAccount struct {
}

// ZerohumanAdminAccountListMatch is the typed request payload for ZerohumanAdminAccount.ListTyped.
type ZerohumanAdminAccountListMatch struct {
	AccountMode *string `json:"account_mode,omitempty"`
	ActiveQueueCount *int `json:"active_queue_count,omitempty"`
	AssignedAgent *any `json:"assigned_agent,omitempty"`
	CreatedAt *any `json:"created_at,omitempty"`
	Email *string `json:"email,omitempty"`
	ExternalUserId *string `json:"external_user_id,omitempty"`
	Membership *any `json:"membership,omitempty"`
	PolicyCode *any `json:"policy_code,omitempty"`
	ProductId *string `json:"product_id,omitempty"`
	ProductName *any `json:"product_name,omitempty"`
	ProvisioningStatus *string `json:"provisioning_status,omitempty"`
	SubscriptionStatus *any `json:"subscription_status,omitempty"`
	UpdatedAt *any `json:"updated_at,omitempty"`
	UserId *string `json:"user_id,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
