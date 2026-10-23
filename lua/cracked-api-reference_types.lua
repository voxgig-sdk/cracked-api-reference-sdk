-- Typed models for the CrackedApiReference SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Activate
---@field activated_at? any
---@field message string
---@field success boolean

---@class ActivateCreateData
---@field user_id string
---@field activated_at? any
---@field message string
---@field success boolean

---@class ActivateUser
---@field activated_at? any
---@field message string
---@field success boolean

---@class ActivateUserCreateData
---@field user_id string
---@field activated_at? any
---@field message string
---@field success boolean

---@class ActiveOnboarding
---@field current_step? any
---@field has_active_onboarding boolean
---@field onboarding_data_id? string

---@class ActiveOnboardingLoadMatch
---@field current_step? any
---@field has_active_onboarding? boolean
---@field onboarding_data_id? string

---@class Admin
---@field apply? boolean
---@field count number
---@field created_at string
---@field date_from? any
---@field date_to? any
---@field email string
---@field id string
---@field include_failed? boolean
---@field include_pending? boolean
---@field include_records? boolean
---@field issue_ids? any
---@field only_active? boolean
---@field platform? any
---@field posting_method? any
---@field product_id? string
---@field query? any
---@field reason? any
---@field regenerate? boolean
---@field status? string
---@field user_membership? any
---@field user_name? any
---@field user_onboarding_step? any
---@field video_type string

---@class AdminLoadMatch
---@field date string
---@field day? any
---@field user_email? any
---@field user_id? string

---@class AdminListMatch
---@field apply? boolean
---@field count? number
---@field created_at? string
---@field date_from? any
---@field date_to? any
---@field email? string
---@field id? string
---@field include_failed? boolean
---@field include_pending? boolean
---@field include_records? boolean
---@field issue_ids? any
---@field only_active? boolean
---@field platform? any
---@field posting_method? any
---@field product_id? string
---@field query? any
---@field reason? any
---@field regenerate? boolean
---@field status? string
---@field user_membership? any
---@field user_name? any
---@field user_onboarding_step? any
---@field video_type? string

---@class AdminCreateData
---@field user_id string
---@field apply? boolean
---@field count number
---@field created_at string
---@field date_from any
---@field date_to any
---@field email string
---@field id string
---@field include_failed? boolean
---@field include_pending? boolean
---@field include_records? boolean
---@field issue_ids? any
---@field only_active? boolean
---@field platform? any
---@field posting_method? any
---@field product_id string
---@field query? any
---@field reason? any
---@field regenerate? boolean
---@field status? string
---@field user_membership? any
---@field user_name? any
---@field user_onboarding_step? any
---@field video_type string

---@class AdminUpdateData
---@field agent_id string
---@field agent_type? string
---@field is_active? boolean
---@field apply? boolean
---@field count? number
---@field created_at? string
---@field date_from? any
---@field date_to? any
---@field email? string
---@field id? string
---@field include_failed? boolean
---@field include_pending? boolean
---@field include_records? boolean
---@field issue_ids? any
---@field only_active? boolean
---@field platform? any
---@field posting_method? any
---@field product_id? string
---@field query? any
---@field reason? any
---@field regenerate? boolean
---@field status? string
---@field user_membership? any
---@field user_name? any
---@field user_onboarding_step? any
---@field video_type? string

---@class AdminRemoveMatch
---@field tester_id string

---@class AdminAccountReset
---@field agent_ids table
---@field agent_ids_sha256 string
---@field backup_sha256 string
---@field batch_size? number
---@field confirmation string
---@field customer_email string
---@field pc_name string
---@field phase? string
---@field product_id string
---@field video_ids? table

---@class AdminAccountResetCreateData
---@field agent_ids table
---@field agent_ids_sha256 string
---@field backup_sha256 string
---@field batch_size? number
---@field confirmation string
---@field customer_email string
---@field pc_name string
---@field phase? string
---@field product_id string
---@field video_ids? table

---@class AdminCarousel
---@field agent_id? string
---@field batch_id? string
---@field caption? string
---@field content_base64? string
---@field day? any
---@field dry_run? boolean
---@field engine_run? string
---@field expected_revision string
---@field formula table
---@field formula_id? string
---@field prompt string
---@field slides table
---@field title? string

---@class AdminCarouselLoadMatch
---@field batch_id string

---@class AdminCarouselCreateData
---@field stage string
---@field agent_id string
---@field batch_id string
---@field caption string
---@field content_base64? string
---@field day any
---@field dry_run? boolean
---@field engine_run? string
---@field expected_revision string
---@field formula table
---@field formula_id string
---@field prompt string
---@field slides table
---@field title string

---@class AdminCarouselUpdateData
---@field fmt string
---@field expected_revision? string
---@field formula? table
---@field prompt? string
---@field title? string

---@class AdminCarouselDemoReview
---@field id? string
---@field items table
---@field reason? string

---@class AdminCarouselDemoReviewLoadMatch
---@field id string

---@class AdminCarouselDemoReviewCreateData
---@field items table
---@field reason? string

---@class AdminCarouselDemoReviewUpdateData
---@field demo_review_id string
---@field assignee? any

---@class AdminCustomer
---@field account_type? any
---@field active_vireel_agents number
---@field agents table
---@field billing_source string
---@field contracted_agents? any
---@field email string
---@field membership? any
---@field name? string
---@field pfa_only_agents number
---@field severity string
---@field status string
---@field subscription_status? any
---@field user_id string

---@class AdminCustomerListMatch
---@field account_type? any
---@field active_vireel_agents? number
---@field agents? table
---@field billing_source? string
---@field contracted_agents? any
---@field email? string
---@field membership? any
---@field name? string
---@field pfa_only_agents? number
---@field severity? string
---@field status? string
---@field subscription_status? any
---@field user_id? string

---@class AdminCustomerSuccess
---@field active_agents number
---@field active_products number
---@field agents_count number
---@field auto_schedule_status string
---@field days_until_period_end? any
---@field email string
---@field feature_impact string
---@field last_notification_at? any
---@field membership? any
---@field name? string
---@field notification_count number
---@field notification_events table
---@field priority string
---@field severity string
---@field status_label string
---@field subscription_current_period_end? any
---@field subscription_status? any
---@field upcoming_posts number
---@field user_id string

---@class AdminCustomerSuccessListMatch
---@field active_agents? number
---@field active_products? number
---@field agents_count? number
---@field auto_schedule_status? string
---@field days_until_period_end? any
---@field email? string
---@field feature_impact? string
---@field last_notification_at? any
---@field membership? any
---@field name? string
---@field notification_count? number
---@field notification_events? table
---@field priority? string
---@field severity? string
---@field status_label? string
---@field subscription_current_period_end? any
---@field subscription_status? any
---@field upcoming_posts? number
---@field user_id? string

---@class AdminGeneratedVideo
---@field agent_id? string
---@field agent_name? any
---@field created_at string
---@field duration? number
---@field generation_status? table
---@field id string
---@field product_id? string
---@field thumbnail_url? any
---@field title string
---@field type string
---@field updated_at? any
---@field url string

---@class AdminGeneratedVideoListMatch
---@field user_id string
---@field limit? number
---@field product_id? string

---@class AdminHealthrx
---@field action string
---@field delivery_enabled? boolean
---@field id? string
---@field option_id string
---@field plan table
---@field preparation_enabled? boolean
---@field product_id string
---@field reason string
---@field request_key string
---@field revision number
---@field schedule_enabled? boolean
---@field version string
---@field viewed boolean

---@class AdminHealthrxLoadMatch
---@field item_id string
---@field kind string

---@class AdminHealthrxCreateData
---@field action string
---@field option_id string
---@field plan table
---@field product_id string
---@field reason string
---@field request_key string
---@field version string
---@field viewed boolean

---@class AdminHealthrxUpdateData
---@field delivery_enabled? boolean
---@field plan? table
---@field preparation_enabled? boolean
---@field product_id? string
---@field revision? number
---@field schedule_enabled? boolean

---@class AdminInsight
---@field customer_success_cases table
---@field customers table
---@field generated_at string
---@field pfa_database table
---@field recent_signups table
---@field summary table
---@field vireel_database table

---@class AdminInsightLoadMatch
---@field customer_email? any
---@field include_agent? boolean
---@field limit? number
---@field page? number

---@class AdminInsightListMatch
---@field customer_success_cases? table
---@field customers? table
---@field generated_at? string
---@field pfa_database? table
---@field recent_signups? table
---@field summary? table
---@field vireel_database? table

---@class AdminLandingTask
---@field task_id string

---@class AdminLandingTaskCreateData
---@field user_id string
---@field product_id? string
---@field task_id string

---@class AdminMetricsSummary
---@field paid_users_by_level table
---@field total_cancellations number
---@field total_previews_generated number
---@field total_signups number
---@field total_videos_generated number
---@field url_attempts number
---@field user_credits table
---@field user_gifted_credits table

---@class AdminMetricsSummaryListMatch
---@field date_filter? string

---@class AdminPost
---@field admin_job_ids any
---@field agent_id string
---@field agent_name any
---@field agent_platform_urls any
---@field agent_url any
---@field comments number
---@field error_message any
---@field failed_at any
---@field id string
---@field instagram_posted_by any
---@field instagram_posted_url any
---@field instagram_scraped_social_post_id string
---@field is_instagram_posted boolean
---@field is_tiktok_posted boolean
---@field is_youtube_posted boolean
---@field last_refreshed_at any
---@field likes number
---@field platform_post_methods any
---@field platform_urls any
---@field post_method any
---@field post_platforms any
---@field post_url any
---@field posted_at any
---@field product_id string
---@field results_status any
---@field scheduled_datetime string
---@field source_type string
---@field status string
---@field tiktok_posted_by any
---@field tiktok_posted_url any
---@field tiktok_scraped_social_post_id string
---@field upload_post_error any
---@field upload_post_status any
---@field upload_post_uploads any
---@field user_email string
---@field user_id string
---@field user_name any
---@field video_id string
---@field video_url any
---@field views number
---@field youtube_posted_by any
---@field youtube_posted_url any
---@field youtube_scraped_social_post_id string

---@class AdminPostListMatch
---@field date? any
---@field include_entry? boolean
---@field platform? string
---@field posting_method? string

---@class AdminRecentSignup
---@field created_at string
---@field current_step string
---@field email? string
---@field email_source? any
---@field error_message? any
---@field flow_variant string
---@field id string
---@field inactive_minutes number
---@field last_notification_at? any
---@field last_seen_at string
---@field likely_cause string
---@field notification_count number
---@field notification_events table
---@field product_id? string
---@field product_name? any
---@field product_url string
---@field severity string
---@field social_scan_status? any
---@field stage_label string
---@field status string
---@field updated_at? any
---@field website_scrape_status? any

---@class AdminRecentSignupListMatch
---@field created_at? string
---@field current_step? string
---@field email? string
---@field email_source? any
---@field error_message? any
---@field flow_variant? string
---@field id? string
---@field inactive_minutes? number
---@field last_notification_at? any
---@field last_seen_at? string
---@field likely_cause? string
---@field notification_count? number
---@field notification_events? table
---@field product_id? string
---@field product_name? any
---@field product_url? string
---@field severity? string
---@field social_scan_status? any
---@field stage_label? string
---@field status? string
---@field updated_at? any
---@field website_scrape_status? any

---@class AdminSlideshowDiag
---@field agent_id? string
---@field batch_id? string
---@field caption? string
---@field content_base64? string
---@field day? any
---@field formula_id? string
---@field id? string
---@field title? string

---@class AdminSlideshowDiagCreateData
---@field id string
---@field agent_id? string
---@field batch_id? string
---@field caption? string
---@field content_base64? string
---@field day? any
---@field formula_id? string
---@field title? string

---@class AdminSlideshowImport
---@field agent_id string
---@field batch_id string
---@field caption string
---@field day string
---@field dry_run? boolean
---@field engine_run? string
---@field formula_id string
---@field slides table
---@field title string

---@class AdminSlideshowImportLoadMatch
---@field batch_id string

---@class AdminSlideshowImportCreateData
---@field agent_id string
---@field batch_id string
---@field caption string
---@field day string
---@field dry_run? boolean
---@field engine_run? string
---@field formula_id string
---@field slides table
---@field title string

---@class AdminUserView
---@field account_type? any
---@field admin_notes? any
---@field agents_count? number
---@field created_at string
---@field credits number
---@field email string
---@field id string
---@field industry any
---@field is_admin? boolean
---@field is_bookmarked? boolean
---@field is_internal_user? boolean
---@field membership any
---@field name string
---@field new_email string
---@field partner_external_user_id? string
---@field partner_policy_code? any
---@field partner_source? any
---@field product_name any
---@field product_url any
---@field skip boolean
---@field subscription_details? any
---@field subscription_status any

---@class AdminUserViewListMatch
---@field limit? number
---@field page? number

---@class AdminUserViewCreateData
---@field user_id string
---@field account_type? any
---@field admin_notes? any
---@field agents_count? number
---@field created_at string
---@field credits number
---@field email string
---@field id string
---@field industry any
---@field is_admin? boolean
---@field is_bookmarked? boolean
---@field is_internal_user? boolean
---@field membership any
---@field name string
---@field new_email string
---@field partner_external_user_id? string
---@field partner_policy_code? any
---@field partner_source? any
---@field product_name any
---@field product_url any
---@field skip boolean
---@field subscription_details? any
---@field subscription_status any

---@class AdminUserViewUpdateData
---@field user_id string
---@field admin_notes? any
---@field agents_count? number
---@field credits? number
---@field is_admin? boolean
---@field is_bookmarked? boolean
---@field is_internal_user? boolean
---@field membership? any

---@class AdminUserViewRemoveMatch
---@field user_id string

---@class AdminUsersTableItem
---@field activated boolean
---@field agents_count? number
---@field created_at string
---@field credits number
---@field demo_booked boolean
---@field email string
---@field id string
---@field membership any
---@field name string
---@field onboarding_flow string
---@field product_name any
---@field product_url any
---@field survey_data any

---@class AdminUsersTableItemListMatch
---@field page? number
---@field page_size? number

---@class AdminVideoRemixer
---@field activity string
---@field allowed_platforms? table
---@field anchor_clip_id? string
---@field atomicity_class? any
---@field auto_render? boolean
---@field campaign_allowed? boolean
---@field channel? string
---@field channel_default? string
---@field clip_id string
---@field clip_ids? table
---@field collected_at string
---@field comments? any
---@field completion_rate? any
---@field confirmed_duplicate_of? any
---@field consent_doc_uri? string
---@field contact? string
---@field conversions? any
---@field count? number
---@field creator? string
---@field creator_id? string
---@field crop_window? any
---@field cta_product_id? string
---@field days? number
---@field derivative_edits_allowed? boolean
---@field enabled? boolean
---@field end_ms? any
---@field enqueue? boolean
---@field errors? table
---@field evidence string
---@field expected_revision? any
---@field expected_revisions table
---@field external_ai_allowed? boolean
---@field file string
---@field followers? any
---@field formula_id string
---@field formula_ids table
---@field handles? table
---@field hook_subtype? any
---@field hour_utc? number
---@field human_role string
---@field idempotency_key string
---@field items table
---@field kim_clip_ids table
---@field kind string
---@field levels table
---@field likes? any
---@field media_enabled boolean
---@field medical_claim_present? boolean
---@field minute_utc? number
---@field music_bed_allowed? boolean
---@field music_policy? string
---@field name string
---@field niche? string
---@field notes? string
---@field origin? string
---@field owner_waiver? boolean
---@field paid_ads_allowed? boolean
---@field patient_identifiable? boolean
---@field person_type? string
---@field pipeline? boolean
---@field planning_only? boolean
---@field platform string
---@field platform_post_id string
---@field policy table
---@field polish? string
---@field post_url string
---@field posted_at string
---@field primary_role? any
---@field purpose string
---@field rate? number
---@field rationale? string
---@field reason string
---@field reference_source_id? string
---@field requires_medical_review? boolean
---@field review_status? any
---@field revision number
---@field rights_expires_at? any
---@field rights_status? string
---@field run_id string
---@field sample_links? table
---@field secondary_roles? any
---@field seconds number
---@field seed? number
---@field seed_base? number
---@field sensitive_personal_data_present? boolean
---@field shares? any
---@field shoot? string
---@field slots table
---@field soundbite_title? any
---@field source string
---@field source_id string
---@field source_ids table
---@field spend_usd? any
---@field spiciness? any
---@field spiciness_notes? string
---@field start_ms? any
---@field status? string
---@field terry_clip_ids table
---@field testimonial_strength? any
---@field testimonial_type? any
---@field tier? string
---@field timeline table
---@field topic? string
---@field topic_tags? any
---@field total_target_ms number
---@field use_learned_weights? boolean
---@field views? any
---@field window string

---@class AdminVideoRemixerLoadMatch
---@field clip_id string

---@class AdminVideoRemixerCreateData
---@field activity string
---@field allowed_platforms? table
---@field anchor_clip_id? string
---@field atomicity_class? any
---@field auto_render? boolean
---@field campaign_allowed? boolean
---@field channel? string
---@field channel_default? string
---@field clip_id string
---@field clip_ids? table
---@field collected_at string
---@field comments? any
---@field completion_rate? any
---@field confirmed_duplicate_of? any
---@field consent_doc_uri? string
---@field contact? string
---@field conversions? any
---@field count? number
---@field creator? string
---@field creator_id? string
---@field crop_window? any
---@field cta_product_id? string
---@field days? number
---@field derivative_edits_allowed? boolean
---@field enabled? boolean
---@field end_ms? any
---@field enqueue? boolean
---@field errors? table
---@field evidence string
---@field expected_revision? any
---@field expected_revisions table
---@field external_ai_allowed? boolean
---@field file string
---@field followers? any
---@field formula_id string
---@field formula_ids table
---@field handles? table
---@field hook_subtype? any
---@field hour_utc? number
---@field human_role string
---@field idempotency_key string
---@field items table
---@field kim_clip_ids table
---@field kind string
---@field levels table
---@field likes? any
---@field media_enabled boolean
---@field medical_claim_present? boolean
---@field minute_utc? number
---@field music_bed_allowed? boolean
---@field music_policy? string
---@field name string
---@field niche? string
---@field notes? string
---@field origin? string
---@field owner_waiver? boolean
---@field paid_ads_allowed? boolean
---@field patient_identifiable? boolean
---@field person_type? string
---@field pipeline? boolean
---@field planning_only? boolean
---@field platform string
---@field platform_post_id string
---@field policy table
---@field polish? string
---@field post_url string
---@field posted_at string
---@field primary_role? any
---@field purpose string
---@field rate? number
---@field rationale? string
---@field reason string
---@field reference_source_id? string
---@field requires_medical_review? boolean
---@field review_status? any
---@field revision number
---@field rights_expires_at? any
---@field rights_status? string
---@field run_id string
---@field sample_links? table
---@field secondary_roles? any
---@field seconds number
---@field seed? number
---@field seed_base? number
---@field sensitive_personal_data_present? boolean
---@field shares? any
---@field shoot? string
---@field slots table
---@field soundbite_title? any
---@field source string
---@field source_id string
---@field source_ids table
---@field spend_usd? any
---@field spiciness? any
---@field spiciness_notes? string
---@field start_ms? any
---@field status? string
---@field terry_clip_ids table
---@field testimonial_strength? any
---@field testimonial_type? any
---@field tier? string
---@field timeline table
---@field topic? string
---@field topic_tags? any
---@field total_target_ms number
---@field use_learned_weights? boolean
---@field views? any
---@field window string

---@class AdminVideoRemixerUpdateData
---@field identifier string
---@field allowed_platforms? table
---@field auto_render? boolean
---@field campaign_allowed? boolean
---@field channel? string
---@field channel_default? string
---@field clip_id? string
---@field confirmed_duplicate_of? any
---@field consent_doc_uri? string
---@field contact? string
---@field count? number
---@field creator_id? string
---@field derivative_edits_allowed? boolean
---@field enabled? boolean
---@field errors? table
---@field expected_revision? any
---@field expected_revisions? table
---@field external_ai_allowed? boolean
---@field followers? any
---@field formula_id? string
---@field handles? table
---@field hour_utc? number
---@field human_role? string
---@field levels? table
---@field medical_claim_present? boolean
---@field minute_utc? number
---@field music_bed_allowed? boolean
---@field music_policy? string
---@field name? string
---@field niche? string
---@field notes? string
---@field origin? string
---@field owner_waiver? boolean
---@field paid_ads_allowed? boolean
---@field patient_identifiable? boolean
---@field person_type? string
---@field platform? string
---@field platform_post_id? string
---@field policy? table
---@field post_url? string
---@field posted_at? string
---@field rate? number
---@field rationale? string
---@field reason? string
---@field reference_source_id? string
---@field requires_medical_review? boolean
---@field rights_expires_at? any
---@field rights_status? string
---@field sample_links? table
---@field seed_base? number
---@field sensitive_personal_data_present? boolean
---@field shoot? string
---@field slots? table
---@field source_ids? table
---@field spiciness? any
---@field spiciness_notes? string
---@field status? string
---@field timeline? table
---@field total_target_ms? number

---@class AdminVideoRemixerPatchData
---@field atomicity_class? any
---@field crop_window? any
---@field cta_product_id? string
---@field end_ms? any
---@field expected_revision? any
---@field hook_subtype? any
---@field media_enabled? boolean
---@field medical_claim_present? boolean
---@field primary_role? any
---@field reason? string
---@field requires_medical_review? boolean
---@field review_status? any
---@field secondary_roles? any
---@field sensitive_personal_data_present? boolean
---@field soundbite_title? any
---@field start_ms? any
---@field testimonial_strength? any
---@field testimonial_type? any
---@field topic_tags? any

---@class AdminVideoRemixerRemoveMatch
---@field identifier string

---@class AdvanceStep
---@field current_step string
---@field onboarding_data_id string
---@field success boolean
---@field to_step string

---@class AdvanceStepCreateData
---@field onboarding_data_id string
---@field to_step string

---@class Agent
---@field active_connections number
---@field at_capacity boolean
---@field id string
---@field is_active boolean
---@field name string
---@field tiktok_stats? any
---@field type string

---@class AgentListMatch
---@field agent_type? any

---@class AgentAccessCustomersHealth
---@field accountType? any
---@field agentQuota number
---@field assignedAgentsByType table
---@field assignedAgentsTotal number
---@field createdAt string
---@field email string
---@field isInternalUser? any
---@field membership? any
---@field name? string
---@field performance table
---@field productCount number
---@field subscriptionCurrentPeriodEnd? any
---@field subscriptionDetails? any
---@field subscriptionStatus? any
---@field usage table
---@field userId string

---@class AgentAccessCustomersHealthListMatch
---@field date_range? string
---@field include_internal? boolean
---@field subscription_status? any

---@class AgentAccessOverview
---@field activeUsers number
---@field generatedAt string
---@field newUsersYesterday number
---@field onboardingContextCounts table
---@field onboardingCurrentStepCounts table
---@field onboardingCurrentStepWindow table
---@field onboardingFlowVariantCounts table
---@field onboardingLockedUntilActivation number
---@field onboardingRecordsTotal number
---@field onboardingRecordsWindow number
---@field onboardingSocialScanStatusCounts table
---@field onboardingWebsiteScrapeStatusCounts table
---@field subscriptionStatusCounts table
---@field totalInternalUsers number
---@field totalUsers number
---@field trialStartedYesterday number
---@field trialingUsers number

---@class AgentAccessOverviewLoadMatch
---@field onboarding_window_day? number

---@class AgentAccessPhilHourlyNotification
---@field generatedAt string
---@field phoneHealth table
---@field scheduledPosts table
---@field targetDate string
---@field uploadPostInstagramHealth table
---@field uploadPostTiktokHealth table
---@field uploadPostYoutubeHealth table

---@class AgentAccessPhilHourlyNotificationLoadMatch
---@field date? any

---@class AgentAccessPhilStatsRefresh
---@field generatedAt string
---@field statsRefresh table
---@field targetDate string

---@class AgentAccessPhilStatsRefreshLoadMatch
---@field date? any

---@class AgentAccessPhilVideo
---@field generatedAt string
---@field targetDate string
---@field videos table

---@class AgentAccessPhilVideoLoadMatch
---@field date? any

---@class AgentAccessUserAgent
---@field agentQuota number
---@field agents table
---@field assignedByType table
---@field assignedTotal number
---@field email string
---@field products table
---@field userId string

---@class AgentAccessUserAgentListMatch
---@field email string

---@class AgentAccessUserPhoneFarm
---@field avatar? any
---@field facebookUrl? any
---@field id string
---@field instagramUrl? any
---@field lastAdminSyncedAt? any
---@field name string
---@field productId? any
---@field productName? any
---@field tiktokUrl? any
---@field type? any
---@field uploadPostPlatforms? any
---@field youtubeUrl? any

---@class AgentAccessUserPhoneFarmListMatch
---@field email string

---@class AgentAccessUserPost
---@field deltaYesterday number
---@field expectedVideosPerDay number
---@field postedToday number
---@field postedYesterday number
---@field productId? any
---@field productName? any

---@class AgentAccessUserPostListMatch
---@field day? number
---@field email string

---@class AgentAccessUserSummary
---@field deletedAt? any
---@field id string
---@field isActive? any
---@field name string
---@field url string

---@class AgentAccessUserSummaryListMatch
---@field email string

---@class AgentAccessUserVideo
---@field allTime table
---@field email string
---@field today table
---@field userId string
---@field yesterday table

---@class AgentAccessUserVideoLoadMatch
---@field email string

---@class AgentAccessUserWinningAd
---@field productId string
---@field productName string
---@field winningAds table
---@field winningAdsCount number

---@class AgentAccessUserWinningAdListMatch
---@field email string

---@class AgentAccessWinningAdsSummary
---@field email string
---@field name? string
---@field productCount number
---@field productsWithWinningAds number
---@field subscriptionStatus? any
---@field totalWinningAds number
---@field userId string

---@class AgentAccessWinningAdsSummaryListMatch
---@field include_internal? boolean
---@field limit? number
---@field offset? number
---@field subscription_status? any

---@class AgentDetail
---@field activeConnections? any
---@field assignedAt? any
---@field avatar string
---@field bio? any
---@field facebookUrl? any
---@field id string
---@field instagramUrl? any
---@field isActive? boolean
---@field name string
---@field role? any
---@field tiktokStats? any
---@field tiktokUrl? any
---@field type string
---@field uploadPostPlatforms? any
---@field youtubeUrl? any

---@class AgentDetailListMatch
---@field agent_type? any
---@field include_inactive? boolean
---@field limit? number

---@class AgentDetailUpdateData
---@field upload_post_agent_id string
---@field bio? any
---@field name? string
---@field role? any

---@class AgentHealth
---@field daily table
---@field dates table
---@field generated_at string
---@field groups table
---@field latest table
---@field live_date? any
---@field phone_admin_generated_at string
---@field platform? string
---@field post_target number
---@field qa_managed_agent_ids? table
---@field scope_prefixes table
---@field timezone string
---@field warmup_target number

---@class AgentHealthListMatch
---@field date_to? any
---@field day? number
---@field platform? string
---@field summary? boolean
---@field user_id? string

---@class AgentHealthCustomerOption
---@field agent_count number
---@field email string
---@field user_id string

---@class AgentHealthCustomerOptionListMatch
---@field agent_count? number
---@field email? string
---@field user_id? string

---@class AgentHealthDetail
---@field archived_issue_total? number
---@field date string
---@field generated_at string
---@field group_id string
---@field has_more boolean
---@field issue_total number
---@field issues table
---@field limit number
---@field metric string
---@field offset number
---@field warmup_runs? table
---@field warning_total? number
---@field warnings? table

---@class AgentHealthDetailListMatch
---@field date string
---@field group_id string
---@field limit? number
---@field metric? string
---@field offset? number
---@field platform? string

---@class AgentPost
---@field comments number
---@field error_message any
---@field id string
---@field likes number
---@field product_id string
---@field results any
---@field scheduled_datetime string
---@field source_type string
---@field status string
---@field user_email string
---@field user_id string
---@field user_name any
---@field video_id string
---@field video_url any
---@field views number

---@class AgentPostListMatch
---@field id string
---@field day? string

---@class AgentStat
---@field agents_needed number
---@field dedicated_agents table
---@field shared_agents table
---@field total_agents number

---@class AgentStatLoadMatch
---@field agents_needed? number
---@field dedicated_agents? table
---@field shared_agents? table
---@field total_agents? number

---@class AgentSummary
---@field agent_count number
---@field favicon_url? any
---@field product_id string
---@field product_name string

---@class AgentSummaryListMatch
---@field agent_count? number
---@field favicon_url? any
---@field product_id? string
---@field product_name? string

---@class AgentsSummary
---@field total_agents number
---@field total_agents_count_sum number

---@class AgentsSummaryLoadMatch
---@field total_agents? number
---@field total_agents_count_sum? number

---@class AnalysisStatus

---@class AnalysisStatusLoadMatch

---@class AnalyticsPost
---@field agent? any
---@field comment? any
---@field created_at string
---@field id string
---@field product_id? string
---@field queue_position? any
---@field results? any
---@field scheduled_datetime string
---@field scraped_posts? any
---@field source_type string
---@field status string
---@field updated_at string
---@field video? any

---@class AnalyticsPostListMatch
---@field agent_id? string
---@field date_from string
---@field date_to? any
---@field email? string
---@field product_id? string
---@field status? any
---@field user_id? string

---@class AnalyzeProduct
---@field instagram_username? any
---@field message string
---@field status string
---@field url string

---@class AnalyzeProductCreateData
---@field instagram_username? any
---@field url string

---@class AssignAgent
---@field agent table
---@field assignment table
---@field mock_agents table
---@field onboarding_data_id string

---@class AssignAgentCreateData
---@field onboarding_data_id string

---@class Auth

---@class AuthCreateData
---@field attribution? any
---@field email? any
---@field industry? any
---@field returnTo? any
---@field token? any

---@class AutoScheduleSetting
---@field can_enable_repost? boolean
---@field effective_posted_video_reuse_percent number
---@field enabled_video_types? any
---@field is_enabled boolean
---@field lock_video_regeneration_controls? boolean
---@field membership_tier string
---@field posted_video_reuse_percent? any
---@field product_id? string
---@field repost_source? any
---@field videos_per_day number

---@class AutoScheduleSettingLoadMatch
---@field product_id? string

---@class AutoScheduleSettingUpdateData
---@field product_id? string
---@field enabled_video_types? any
---@field is_enabled? boolean

---@class BulkTikTokStatsUpdate
---@field failedIds table
---@field updatedCount number
---@field updates table

---@class BulkTikTokStatsUpdateUpdateData
---@field updates? table

---@class Carousel
---@field agent_id string
---@field agent_name string
---@field audit_created_at? any
---@field audit_snapshot_sha256? any
---@field caption? any
---@field comments? any
---@field fit_score? any
---@field format string
---@field formula? table
---@field formula_id? string
---@field formula_name? any
---@field generation? table
---@field id? string
---@field image_prompt? any
---@field likes? any
---@field main_prompt? any
---@field metrics_updated_at? any
---@field post_url? any
---@field profile_url? any
---@field qa? table
---@field qa_status string
---@field qa_verdict? any
---@field quality_score? any
---@field queue_id string
---@field relevance_score? any
---@field scheduled_at string
---@field slide_count number
---@field slides table
---@field source? table
---@field status string
---@field thumbnail_url? any
---@field title string
---@field video_id string
---@field views? any

---@class CarouselLoadMatch
---@field id string

---@class CarouselListMatch
---@field date? any

---@class CarouselCreateData
---@field id string
---@field skip_schedule? boolean
---@field agent_id string
---@field agent_name string
---@field audit_created_at? any
---@field audit_snapshot_sha256? any
---@field caption? any
---@field comments? any
---@field fit_score? any
---@field format string
---@field formula? table
---@field formula_id? string
---@field formula_name? any
---@field generation? table
---@field image_prompt? any
---@field likes? any
---@field main_prompt? any
---@field metrics_updated_at? any
---@field post_url? any
---@field profile_url? any
---@field qa? table
---@field qa_status string
---@field qa_verdict? any
---@field quality_score? any
---@field queue_id string
---@field relevance_score? any
---@field scheduled_at string
---@field slide_count number
---@field slides table
---@field source? table
---@field status string
---@field thumbnail_url? any
---@field title string
---@field video_id string
---@field views? any

---@class CarouselAgentDetail
---@field agent_id string
---@field agent_name string
---@field connection_status? any
---@field followers? any
---@field following? any
---@field metrics_updated_at? any
---@field phone_admin_status string
---@field profile_likes? any
---@field profile_url? any
---@field warmup_days? any
---@field warmup_hold_until? any
---@field warmup_status string

---@class CarouselAgentDetailLoadMatch
---@field agent_id string

---@class CarouselStatus
---@field caption any
---@field error? any
---@field id? string
---@field image_model? any
---@field image_provider? any
---@field image_task_id? string
---@field image_url any
---@field index number
---@field prompt any
---@field status string

---@class CarouselStatusListMatch
---@field id string

---@class Chat
---@field idempotencyKey string
---@field message string
---@field sessionId string

---@class ChatCreateData
---@field session_id string
---@field idempotencyKey string
---@field message string
---@field sessionId string

---@class ChatHistory
---@field chatSubVariant string
---@field createdAt string
---@field messages table
---@field model? any
---@field onboardingDataId string
---@field routeRecommendation? any
---@field salesStage string
---@field selectedPlan? any
---@field session table
---@field sessionId string
---@field status string
---@field updatedAt string

---@class ChatHistoryLoadMatch
---@field session_id string

---@class ChatHistoryCreateData
---@field onboardingDataId string

---@class ChatSession
---@field chatSubVariant string
---@field createdAt string
---@field model? any
---@field plan? any
---@field route? any
---@field routeRecommendation? any
---@field salesStage string
---@field selectedPlan? any
---@field sessionId string
---@field status string
---@field updatedAt string

---@class ChatSessionCreateData
---@field session_id string
---@field plan? any
---@field route? any

---@class Comment

---@class CommentLoadMatch
---@field all_product? boolean
---@field day? number
---@field limit? number
---@field offset? number
---@field product_id? string

---@class CommentCampaign
---@field account_daily_limit? number
---@field account_weekly_limit? number
---@field action string
---@field active_days_per_week? number
---@field agent_id string
---@field allowlist? table
---@field analysis_daily_limit? number
---@field analysis_model? string
---@field analysis_reservation_usd? number
---@field approved_markets? table
---@field brand_forward_enabled? boolean
---@field briefs? table
---@field candidate_only? boolean
---@field claims? table
---@field cohort_removal_threshold? number
---@field daily_cost_ceiling_usd? number
---@field delivery_mode? string
---@field disclosure_mode? string
---@field disclosure_template? string
---@field draft_options_count? number
---@field draft_review_reservation_usd? number
---@field exceptional_daily_cap_approved? boolean
---@field execution_enabled? boolean
---@field experiment_styles? table
---@field inventory_factor? number
---@field keywords? table
---@field max_duration_seconds? any
---@field metadata_pass_rate? number
---@field min_interval_minutes? number
---@field mode? string
---@field monitored_creators? table
---@field platform? string
---@field platform_permission_evidence? string
---@field policy_approved_by? string
---@field policy_expires_at? any
---@field policy_version? string
---@field product_daily_limit? number
---@field qualification_rate? number
---@field raw_daily_limit? number
---@field raw_result_reservation_usd? number
---@field reason string
---@field replies_enabled? boolean
---@field request_key string
---@field reviewer_model? string
---@field scan_interval_hours? number
---@field search_change_reason? string
---@field search_effective_at? any
---@field shadow_sample_limit? number
---@field spent_seconds? any
---@field task_ttl_hours? number
---@field top_comment_analysis_enabled? boolean
---@field writer_model? string

---@class CommentCampaignLoadMatch
---@field product_id string

---@class CommentCampaignCreateData
---@field product_id string
---@field source_id? string
---@field account_daily_limit? number
---@field account_weekly_limit? number
---@field action string
---@field active_days_per_week? number
---@field agent_id string
---@field allowlist? table
---@field analysis_daily_limit? number
---@field analysis_model? string
---@field analysis_reservation_usd? number
---@field approved_markets? table
---@field brand_forward_enabled? boolean
---@field briefs? table
---@field candidate_only? boolean
---@field claims? table
---@field cohort_removal_threshold? number
---@field daily_cost_ceiling_usd? number
---@field delivery_mode? string
---@field disclosure_mode? string
---@field disclosure_template? string
---@field draft_options_count? number
---@field draft_review_reservation_usd? number
---@field exceptional_daily_cap_approved? boolean
---@field execution_enabled? boolean
---@field experiment_styles? table
---@field inventory_factor? number
---@field keywords? table
---@field max_duration_seconds? any
---@field metadata_pass_rate? number
---@field min_interval_minutes? number
---@field mode? string
---@field monitored_creators? table
---@field platform? string
---@field platform_permission_evidence? string
---@field policy_approved_by? string
---@field policy_expires_at? any
---@field policy_version? string
---@field product_daily_limit? number
---@field qualification_rate? number
---@field raw_daily_limit? number
---@field raw_result_reservation_usd? number
---@field reason string
---@field replies_enabled? boolean
---@field request_key string
---@field reviewer_model? string
---@field scan_interval_hours? number
---@field search_change_reason? string
---@field search_effective_at? any
---@field shadow_sample_limit? number
---@field spent_seconds? any
---@field task_ttl_hours? number
---@field top_comment_analysis_enabled? boolean
---@field writer_model? string

---@class CommentCampaignUpdateData
---@field product_id string
---@field account_daily_limit? number
---@field account_weekly_limit? number
---@field active_days_per_week? number
---@field allowlist? table
---@field analysis_daily_limit? number
---@field analysis_model? string
---@field analysis_reservation_usd? number
---@field approved_markets? table
---@field brand_forward_enabled? boolean
---@field briefs? table
---@field claims? table
---@field cohort_removal_threshold? number
---@field daily_cost_ceiling_usd? number
---@field delivery_mode? string
---@field disclosure_mode? string
---@field disclosure_template? string
---@field draft_options_count? number
---@field draft_review_reservation_usd? number
---@field exceptional_daily_cap_approved? boolean
---@field execution_enabled? boolean
---@field experiment_styles? table
---@field inventory_factor? number
---@field keywords? table
---@field max_duration_seconds? any
---@field metadata_pass_rate? number
---@field min_interval_minutes? number
---@field mode? string
---@field monitored_creators? table
---@field platform? string
---@field platform_permission_evidence? string
---@field policy_approved_by? string
---@field policy_expires_at? any
---@field policy_version? string
---@field product_daily_limit? number
---@field qualification_rate? number
---@field raw_daily_limit? number
---@field raw_result_reservation_usd? number
---@field replies_enabled? boolean
---@field reviewer_model? string
---@field scan_interval_hours? number
---@field search_change_reason? string
---@field search_effective_at? any
---@field shadow_sample_limit? number
---@field task_ttl_hours? number
---@field top_comment_analysis_enabled? boolean
---@field writer_model? string

---@class CompleteChatCheckout
---@field message? any
---@field onboarding_data_id string
---@field product_id? string
---@field ready? boolean
---@field success boolean

---@class CompleteChatCheckoutCreateData
---@field onboarding_data_id string

---@class CreateBlackoutSora2Video
---@field main_prompt string
---@field media_asset_id string
---@field product_id string
---@field requires_polling? boolean
---@field video table

---@class CreateBlackoutSora2VideoCreateData
---@field main_prompt string
---@field media_asset_id string
---@field product_id string

---@class CreateCarousel
---@field copy_mode? any
---@field expected_owner_user_id? string
---@field expected_product_id? string
---@field expected_product_name? any
---@field image_model? string
---@field mention_product? boolean
---@field message string
---@field num_slides? number
---@field owner_user_id? string
---@field product_id? string
---@field product_name? any
---@field product_placement? string
---@field request_id? string
---@field script_style_custom? any
---@field script_style_id? string
---@field selected_hook? any
---@field status string
---@field success boolean
---@field template_id string
---@field video_id string
---@field visual_style_custom? any
---@field visual_style_id? string

---@class CreateCarouselCreateData
---@field copy_mode? any
---@field expected_owner_user_id? string
---@field expected_product_id? string
---@field expected_product_name? any
---@field image_model? string
---@field mention_product? boolean
---@field num_slides? number
---@field product_id? string
---@field product_placement? string
---@field request_id? string
---@field script_style_custom? any
---@field script_style_id? string
---@field selected_hook? any
---@field template_id string
---@field visual_style_custom? any
---@field visual_style_id? string

---@class CreateProduct
---@field onboarding_data_id string
---@field product_id string
---@field success boolean
---@field videos_queued? number

---@class CreateProductCreateData
---@field onboarding_data_id string

---@class CreateResetProductV6
---@field agents_transferred number
---@field credits_deducted number
---@field onboarding_data_id string
---@field product_id string
---@field remaining_credits number
---@field success boolean
---@field videos_queued number

---@class CreateResetProductV6CreateData
---@field onboarding_data_id string

---@class CreateSora2Video
---@field image_prompt? any
---@field main_prompt string
---@field model? string
---@field requires_polling? boolean
---@field seconds? string
---@field size? string
---@field video table

---@class CreateSora2VideoCreateData
---@field image_prompt? any
---@field main_prompt string
---@field model? string
---@field seconds? string
---@field size? string

---@class CreateVariation
---@field hook_duration number
---@field media_asset_id string
---@field message string
---@field product_id string
---@field prompt string
---@field task_id? string
---@field video_id string

---@class CreateVariationCreateData
---@field hook_duration number
---@field media_asset_id string
---@field product_id string
---@field prompt string

---@class Customer
---@field account_type? any
---@field assigned_agents_count number
---@field email string
---@field id string
---@field is_migrated? boolean

---@class CustomerListMatch
---@field account_type? any
---@field assigned_agents_count? number
---@field email? string
---@field id? string
---@field is_migrated? boolean

---@class CustomerHealth
---@field assigned_agents table
---@field available_dates table
---@field date string
---@field email string
---@field entries table
---@field id? string
---@field performance_overview table
---@field platform_coverage_summary table
---@field user_id string

---@class CustomerHealthLoadMatch
---@field id string
---@field date? any

---@class CustomerHealthAllCustomersItem
---@field account_type? any
---@field assigned_agents_count number
---@field daily_stats table
---@field email string
---@field is_migrated? boolean
---@field total_views number
---@field user_id string

---@class CustomerHealthAllCustomersItemListMatch
---@field limit? number
---@field offset? number

---@class CustomerHealthViewsSummary
---@field average_views_per_result number
---@field date string
---@field end_date? any
---@field paid_users_count number
---@field posted_results number
---@field range string
---@field start_date? any
---@field top_users table
---@field total_views number
---@field trend table
---@field trend_granularity string
---@field user_email? any
---@field user_id? string
---@field users_with_views number

---@class CustomerHealthViewsSummaryListMatch
---@field date? any
---@field range? string
---@field user_id? string

---@class Daily
---@field id? string

---@class DailyCreateData
---@field id string
---@field day string

---@class DailyStatus
---@field id? string

---@class DailyStatusLoadMatch
---@field id string
---@field day string

---@class DedicatedAgentsDashboard
---@field active_connections number
---@field assigned_user_id? string
---@field assigned_user_ids? table
---@field bio any
---@field id string
---@field instagram_url? any
---@field is_active boolean
---@field last_admin_synced_at? any
---@field name string
---@field role any
---@field tiktok_stats? any
---@field tiktok_url? any
---@field today_failed_entries? table
---@field today_stats table
---@field upload_post_platforms? any
---@field upload_post_profile? any
---@field yesterday_failed_entries? table
---@field yesterday_stats table
---@field youtube_url? any

---@class DedicatedAgentsDashboardListMatch
---@field active_connections? number
---@field assigned_user_id? string
---@field assigned_user_ids? table
---@field bio? any
---@field id? string
---@field instagram_url? any
---@field is_active? boolean
---@field last_admin_synced_at? any
---@field name? string
---@field role? any
---@field tiktok_stats? any
---@field tiktok_url? any
---@field today_failed_entries? table
---@field today_stats? table
---@field upload_post_platforms? any
---@field upload_post_profile? any
---@field yesterday_failed_entries? table
---@field yesterday_stats? table
---@field youtube_url? any

---@class EnterpriseAgent
---@field count number
---@field product_id string
---@field source_product_id string
---@field target_product_id string

---@class EnterpriseAgentLoadMatch
---@field count? number
---@field product_id? string
---@field source_product_id? string
---@field target_product_id? string

---@class EnterpriseAgentCreateData
---@field count? number
---@field product_id string
---@field source_product_id string
---@field target_product_id string

---@class EnterpriseProduct

---@class EnterpriseProductLoadMatch
---@field product_id string

---@class ExactAvailability

---@class ExactAvailabilityLoadMatch

---@class ExactFormula

---@class ExactFormulaLoadMatch

---@class ExtractV2
---@field instagram_username? any
---@field message string
---@field status string
---@field url string

---@class ExtractV2CreateData
---@field instagram_username? any
---@field url string

---@class FailedPost
---@field agent_id string
---@field agent_name any
---@field agent_platforms any
---@field error_message any
---@field id string
---@field product_id string
---@field results any
---@field scheduled_datetime string
---@field source_type string
---@field status string
---@field user_email string
---@field user_id string
---@field user_name any
---@field video_id string
---@field video_url any

---@class FailedPostListMatch
---@field day? string

---@class File
---@field file string

---@class FileCreateData
---@field file string

---@class GenerateBlackoutSora2Prompt
---@field media_asset_id string
---@field product_id string
---@field prompt string

---@class GenerateBlackoutSora2PromptCreateData
---@field media_asset_id string
---@field product_id string

---@class GeneratePomelliDemo
---@field current_demo_count number
---@field max_demos? number
---@field message string
---@field product_id string
---@field success boolean

---@class GeneratePomelliDemoCreateData
---@field product_id string

---@class GeneratePrompt
---@field hook_duration number
---@field media_asset_id string
---@field media_asset_url string
---@field prompt string

---@class GeneratePromptCreateData
---@field media_asset_id string

---@class GenerateSora2Prompt
---@field prompt string

---@class GenerateSora2PromptLoadMatch
---@field prompt? string

---@class Healthrx
---@field account_id? string
---@field action? string
---@field agent_id string
---@field attempt number
---@field avatar_present? boolean
---@field benchmark_set string
---@field commercial? boolean
---@field commercial_license_evidence string
---@field content_id string
---@field dimensions table
---@field duration_seconds? number
---@field evidence string
---@field evidence_urls table
---@field external_key string
---@field format? string
---@field includes_all_attempt_costs? boolean
---@field input_specification table
---@field kind string
---@field level? number
---@field measured_at string
---@field model_version string
---@field paid_campaign_id? string
---@field parent_content_id? string
---@field paused boolean
---@field pillar string
---@field profile table
---@field promotion_evidence? string
---@field provider string
---@field provider_invoice_evidence string
---@field reason string
---@field reference_version string
---@field request_key string
---@field scope? string
---@field test_variable string
---@field topic string
---@field total_cost_usd number

---@class HealthrxLoadMatch
---@field account_id? string
---@field product_id string

---@class HealthrxCreateData
---@field account_id? string
---@field product_id string
---@field content_id? string
---@field incident_id? string
---@field action? string
---@field agent_id string
---@field attempt number
---@field avatar_present? boolean
---@field benchmark_set string
---@field commercial? boolean
---@field commercial_license_evidence string
---@field dimensions table
---@field duration_seconds? number
---@field evidence string
---@field evidence_urls table
---@field external_key string
---@field format? string
---@field includes_all_attempt_costs? boolean
---@field input_specification table
---@field kind string
---@field level? number
---@field measured_at string
---@field model_version string
---@field paid_campaign_id? string
---@field parent_content_id? string
---@field paused boolean
---@field pillar string
---@field profile table
---@field promotion_evidence? string
---@field provider string
---@field provider_invoice_evidence string
---@field reason string
---@field reference_version string
---@field request_key string
---@field scope? string
---@field test_variable string
---@field topic string
---@field total_cost_usd number

---@class InitResetProductV6
---@field auto_schedule_disabled boolean
---@field old_product_id string
---@field product_id? string
---@field queue_entries_cleared number
---@field success boolean

---@class InitResetProductV6CreateData
---@field product_id? string

---@class Iri
---@field correlationId? any
---@field idempotencyKey string
---@field productId? any

---@class IriCreateData
---@field connector_id string
---@field correlationId? any
---@field idempotencyKey string
---@field productId? any

---@class IrisCapability
---@field capability string
---@field correlationId string
---@field errorCode? any
---@field externalProductId? any
---@field externalUserId string
---@field id? string
---@field idempotencyKey string
---@field input? table
---@field membershipId? any
---@field message? any
---@field ok boolean
---@field platformAccountId? any
---@field platformLinkId? any
---@field productScope string
---@field requestedBy? table
---@field result? table
---@field retryable? boolean

---@class IrisCapabilityCreateData
---@field id string
---@field capability string
---@field correlationId string
---@field externalProductId? any
---@field externalUserId string
---@field idempotencyKey string
---@field input? table
---@field membershipId? any
---@field platformAccountId? any
---@field platformLinkId? any
---@field productScope string
---@field requestedBy? table

---@class IrisChat
---@field artifacts? table
---@field correlationId string
---@field idempotencyKey string
---@field message string
---@field mode string
---@field ok? boolean
---@field pageContext? table
---@field productId? any
---@field runtimeStatus string
---@field sessionId? any

---@class IrisChatCreateData
---@field correlationId string
---@field idempotencyKey string
---@field message string
---@field pageContext? table
---@field productId? any
---@field sessionId? any

---@class IrisConnector
---@field connectors? table

---@class IrisConnectorListMatch
---@field connectors? table

---@class IrisStatus
---@field connectorsPreview? table
---@field product? any
---@field status table
---@field tasksPreview? table

---@class IrisStatusListMatch
---@field product_id? string

---@class IrisTask
---@field approvalRequired? boolean
---@field cadence? string
---@field capability? any
---@field completed? table
---@field description? string
---@field discover? table
---@field productId? any
---@field recurring? table
---@field requiredConnectors? table
---@field title string

---@class IrisTaskListMatch
---@field product_id? string

---@class IrisTaskCreateData
---@field approvalRequired? boolean
---@field cadence? string
---@field capability? any
---@field description? string
---@field productId? any
---@field requiredConnectors? table
---@field title string

---@class IrisUsage
---@field eventCount? number
---@field events? table
---@field membershipId? any
---@field productScope? string

---@class IrisUsageListMatch
---@field eventCount? number
---@field events? table
---@field membershipId? any
---@field productScope? string

---@class Landing
---@field file string

---@class LandingCreateData
---@field index number
---@field product_id? string
---@field file string

---@class LandingStat
---@field landing table
---@field microhub table

---@class LandingStatLoadMatch
---@field slug string
---@field product_id? string

---@class LandingStatus
---@field errorMessage? any
---@field landingStatus string
---@field microhubStatus string

---@class LandingStatusLoadMatch
---@field product_id? string

---@class LinkInBio
---@field linkInBioType string
---@field redirectUrl string
---@field slug string

---@class LinkInBioLoadMatch
---@field slug string

---@class LinkInDm
---@field linkInDmsType string
---@field redirectUrl string
---@field slug string

---@class LinkInDmLoadMatch
---@field slug string

---@class LinkInPost
---@field linkInPostsType string
---@field redirectUrl string
---@field showLinkInFirstComment boolean
---@field slug string

---@class LinkInPostLoadMatch
---@field slug string

---@class LinkUser
---@field already_linked? boolean
---@field onboarding_data_id string
---@field success boolean

---@class LinkUserCreateData
---@field onboarding_data_id string

---@class MediaAsset
---@field category string
---@field createdAt string
---@field description? string
---@field file string
---@field id string
---@field media_assets table
---@field onboardingDataId? any
---@field onboarding_data_id string
---@field productId? any
---@field product_id? string
---@field source string
---@field type string
---@field updatedAt string
---@field url string
---@field usedAt? any
---@field veo3VideoId? any

---@class MediaAssetLoadMatch
---@field id string

---@class MediaAssetCreateData
---@field category string
---@field createdAt string
---@field description? string
---@field file string
---@field id string
---@field media_assets table
---@field onboardingDataId? any
---@field onboarding_data_id string
---@field productId? any
---@field product_id? string
---@field source string
---@field type string
---@field updatedAt string
---@field url string
---@field usedAt? any
---@field veo3VideoId? any

---@class Men

---@class MenListMatch
---@field bookmarked? any
---@field category? any
---@field limit? number
---@field offset? number
---@field product_id? string

---@class Microdrama
---@field evidence table
---@field expected_revision number
---@field idempotency_key string
---@field issues? table
---@field reason string
---@field role string
---@field scores table
---@field selected_premise_id? string
---@field stage string
---@field status string
---@field subject_hash string
---@field title? string
---@field verdict string

---@class MicrodramaLoadMatch
---@field episode_id string

---@class MicrodramaCreateData
---@field episode_id string
---@field evidence table
---@field expected_revision number
---@field idempotency_key string
---@field issues? table
---@field reason string
---@field role string
---@field scores table
---@field selected_premise_id? string
---@field stage string
---@field status string
---@field subject_hash string
---@field title? string
---@field verdict string

---@class MicrodramaUpdateData
---@field episode_id string
---@field expected_revision? number
---@field selected_premise_id? string
---@field title? string

---@class MicrohubPublic
---@field bio? any
---@field ctaButtonText? any
---@field ctaDescription? any
---@field ctaLink? any
---@field ctaTitle? any
---@field headerImageUrl? any
---@field links? table
---@field name? string
---@field profileImageUrl? any
---@field slug string
---@field socialLinks? table
---@field testimonials? table

---@class MicrohubPublicLoadMatch
---@field slug string

---@class OnboardingStatus
---@field comments? number
---@field cover_image_url? any
---@field id string
---@field likes? number
---@field platform string
---@field video_url? any
---@field views? number

---@class OnboardingStatusListMatch
---@field account_type? any
---@field oid string

---@class OnboardingV6

---@class OnboardingV6RemoveMatch
---@field media_asset_id string
---@field onboarding_data_id string

---@class PaidUser
---@field agents_count number
---@field assigned_agents_count? number
---@field auto_schedule_enabled any
---@field credits number
---@field effective_agents_count number
---@field email string
---@field id string
---@field is_internal_user? boolean
---@field is_migrated_user? boolean
---@field membership any
---@field scheduled_queue_count number
---@field subscription_details? any
---@field subscription_status any

---@class PaidUserListMatch
---@field agents_count? number
---@field assigned_agents_count? number
---@field auto_schedule_enabled? any
---@field credits? number
---@field effective_agents_count? number
---@field email? string
---@field id? string
---@field is_internal_user? boolean
---@field is_migrated_user? boolean
---@field membership? any
---@field scheduled_queue_count? number
---@field subscription_details? any
---@field subscription_status? any

---@class Pexel

---@class PexelListMatch
---@field count? number
---@field media_type? string
---@field orientation? string
---@field page? number
---@field query? string

---@class PhoneAdminAvailableAgentSource
---@field available_count number
---@field pc_name string

---@class PhoneAdminAvailableAgentSourceListMatch
---@field available_count? number
---@field pc_name? string

---@class Product
---@field agent_count number
---@field agents table
---@field createdAt? any
---@field demoVideos? any
---@field description? string
---@field favicon_url? any
---@field howItWorks? any
---@field how_it_works? any
---@field id string
---@field images? any
---@field initial_agents? number
---@field instagramHandle? any
---@field instagram_handle? any
---@field isActive? any
---@field isApp? any
---@field is_active boolean
---@field is_app? boolean
---@field language? any
---@field mediaAssets? any
---@field media_asset_ids? any
---@field media_assets? any
---@field name string
---@field otherInstructions? any
---@field other_instructions? any
---@field outroVideo? any
---@field pexelsVideos? any
---@field pricing? any
---@field pricingAndOffers? any
---@field pricing_and_offers? any
---@field product_demo_ids? table
---@field product_details table
---@field product_id string
---@field product_name string
---@field product_url string
---@field pronunciation? any
---@field regenerate_sora2? boolean
---@field repostSource? any
---@field repost_source? any
---@field screenshot_url? any
---@field social_post_ids? table
---@field targetAudience? any
---@field target_audience? any
---@field templateProductId? any
---@field tiktokHandle? any
---@field tiktok_handle? any
---@field total_count number
---@field updatedAt? any
---@field url string
---@field userId string

---@class ProductLoadMatch
---@field id string

---@class ProductListMatch
---@field agent_count? number
---@field agents? table
---@field createdAt? any
---@field demoVideos? any
---@field description? string
---@field favicon_url? any
---@field howItWorks? any
---@field how_it_works? any
---@field id? string
---@field images? any
---@field initial_agents? number
---@field instagramHandle? any
---@field instagram_handle? any
---@field isActive? any
---@field isApp? any
---@field is_active? boolean
---@field is_app? boolean
---@field language? any
---@field mediaAssets? any
---@field media_asset_ids? any
---@field media_assets? any
---@field name? string
---@field otherInstructions? any
---@field other_instructions? any
---@field outroVideo? any
---@field pexelsVideos? any
---@field pricing? any
---@field pricingAndOffers? any
---@field pricing_and_offers? any
---@field product_demo_ids? table
---@field product_details? table
---@field product_id? string
---@field product_name? string
---@field product_url? string
---@field pronunciation? any
---@field regenerate_sora2? boolean
---@field repostSource? any
---@field repost_source? any
---@field screenshot_url? any
---@field social_post_ids? table
---@field targetAudience? any
---@field target_audience? any
---@field templateProductId? any
---@field tiktokHandle? any
---@field tiktok_handle? any
---@field total_count? number
---@field updatedAt? any
---@field url? string
---@field userId? string

---@class ProductCreateData
---@field favicon_url? any
---@field initial_agents? number
---@field product_demo_ids? table
---@field product_details table
---@field product_url string
---@field screenshot_url? any
---@field social_post_ids? table

---@class ProductUpdateData
---@field id string
---@field description? string
---@field how_it_works? any
---@field instagram_handle? any
---@field is_app? boolean
---@field language? any
---@field media_asset_ids? any
---@field name? string
---@field other_instructions? any
---@field pricing_and_offers? any
---@field pronunciation? any
---@field regenerate_sora2? boolean
---@field repost_source? any
---@field target_audience? any
---@field tiktok_handle? any
---@field url? string

---@class ProductRemoveMatch
---@field id string

---@class ProductDashboard
---@field agents table
---@field date string
---@field pagination table
---@field phone_admin_error? any
---@field products table
---@field selected_product any
---@field summary table

---@class ProductDashboardListMatch
---@field date? any
---@field page? number
---@field page_size? number
---@field product_id? string
---@field search? any

---@class ProductDashboardView
---@field date string
---@field views number

---@class ProductDashboardViewListMatch
---@field date? any
---@field product_id string
---@field range? number

---@class ProductDemo
---@field created_at string
---@field description? string
---@field id string
---@field source string
---@field type string
---@field url string

---@class ProductDemoListMatch
---@field product_id? string

---@class ProductLanding
---@field bio? any
---@field commentingOnMyPosts boolean
---@field commentingOnOthersPosts boolean
---@field ctaButtonText? any
---@field ctaDescription? any
---@field ctaLink? any
---@field ctaTitle? any
---@field dmCommenters boolean
---@field dmInitialMessagePrompt? any
---@field dmOngoingResponsePrompt? any
---@field firstCommentTextBeforeLink? any
---@field headerImageUrl? any
---@field id string
---@field landingHtmlUrl? any
---@field landingLastGeneratedAt? any
---@field landingReferenceScreenshotUrl? any
---@field landingScreenshotUrl? any
---@field landingStatus string
---@field landingUrl string
---@field linkInBioType string
---@field linkInDmsType string
---@field linkInPostsType string
---@field links? any
---@field microhubBio? any
---@field microhubCtaButtonText? any
---@field microhubCtaDescription? any
---@field microhubCtaLink? any
---@field microhubCtaTitle? any
---@field microhubHeaderImageUrl? any
---@field microhubLinks? table
---@field microhubName? any
---@field microhubProfileImageUrl? any
---@field microhubScreenshotUrl? any
---@field microhubSocialLinks? table
---@field microhubStatus string
---@field microhubTestimonials? table
---@field microhubUrl string
---@field myPostsStylePrompt? any
---@field name? string
---@field othersStylePrompt? any
---@field othersTargetMarketPrompt? any
---@field productLinkSelection string
---@field productUrl? any
---@field profileImageUrl? any
---@field shortLink? any
---@field shortLinkKeyword? any
---@field showLinkInFirstComment boolean
---@field slug string
---@field socialLinks? any
---@field testimonials? any

---@class ProductLandingListMatch
---@field product_id? string

---@class ProductLandingUpdateData
---@field product_id? string
---@field bio? any
---@field commentingOnMyPosts? boolean
---@field commentingOnOthersPosts? boolean
---@field ctaButtonText? any
---@field ctaDescription? any
---@field ctaLink? any
---@field ctaTitle? any
---@field dmCommenters? boolean
---@field dmInitialMessagePrompt? any
---@field dmOngoingResponsePrompt? any
---@field firstCommentTextBeforeLink? any
---@field headerImageUrl? any
---@field linkInBioType? string
---@field linkInDmsType? string
---@field linkInPostsType? string
---@field links? any
---@field myPostsStylePrompt? any
---@field name? string
---@field othersStylePrompt? any
---@field othersTargetMarketPrompt? any
---@field productLinkSelection? string
---@field profileImageUrl? any
---@field shortLink? any
---@field shortLinkKeyword? any
---@field showLinkInFirstComment? boolean
---@field slug? string
---@field socialLinks? any
---@field testimonials? any

---@class PublicResumeStatus
---@field can_resume_prelogin? boolean
---@field content_collection_ready? boolean
---@field current_step? any
---@field exists boolean
---@field flow_variant? any
---@field repost_content_count? number
---@field repost_source? any
---@field requires_repost_content? boolean
---@field skip_demo? boolean

---@class PublicResumeStatusLoadMatch
---@field oid string

---@class ReRollVideo
---@field queue_id string
---@field requires_polling? boolean
---@field skip_credit_check? boolean
---@field video table

---@class ReRollVideoCreateData
---@field queue_id string
---@field skip_credit_check? boolean

---@class ReadRootGet

---@class ReadRootGetLoadMatch

---@class RecordDemoBooked
---@field calendlyEventUri? any
---@field calendlyInviteeUri? any
---@field message table
---@field session table

---@class RecordDemoBookedCreateData
---@field session_id string
---@field calendlyEventUri? any
---@field calendlyInviteeUri? any

---@class RefreshStat
---@field date_from? any
---@field date_to? any
---@field entries_found number
---@field message string
---@field provider string
---@field status string
---@field summary? any

---@class RefreshStatCreateData
---@field email? string
---@field user_id? string
---@field date_from? any
---@field date_to? any
---@field provider? string

---@class RemixerClipper

---@class RemixerClipperLoadMatch

---@class RemixerClipperCreateData
---@field identifier string

---@class ResetProduct

---@class ResetProductLoadMatch

---@class ResetProductCreateData

---@class RetryWebsiteScrape
---@field flow_variant? string
---@field onboarding_data_id string
---@field skip_demo? boolean
---@field status string
---@field success boolean
---@field url string

---@class RetryWebsiteScrapeCreateData
---@field onboarding_data_id string
---@field url string

---@class SaveSurvey
---@field email_sent? boolean
---@field onboarding_data_id string
---@field success boolean
---@field survey table

---@class SaveSurveyCreateData
---@field onboarding_data_id string
---@field survey table

---@class ScanSocial
---@field instagram_handle? any
---@field onboarding_data_id string
---@field product_id string
---@field status string
---@field success boolean
---@field task_id? string
---@field tiktok_handle? any

---@class ScanSocialCreateData
---@field instagram_handle? any
---@field onboarding_data_id string
---@field product_id? string
---@field tiktok_handle any

---@class ScanSocialsPublic
---@field instagram_handle? any
---@field message? any
---@field onboarding_data_id string
---@field status string
---@field success boolean
---@field tiktok_handle? any

---@class ScanSocialsPublicCreateData
---@field instagram_handle? any
---@field onboarding_data_id string
---@field tiktok_handle? any

---@class ScanSocialsStatus
---@field ads_count? number
---@field onboarding_data_id string
---@field product_id? string
---@field status string
---@field task_id? string

---@class ScanSocialsStatusLoadMatch
---@field onboarding_data_id? string
---@field product_id? string

---@class ScheduleV2
---@field agent? any
---@field comment? any
---@field created_at string
---@field id string
---@field instagram_posted_by? any
---@field instagram_posted_url? any
---@field instagram_scraped_social_post_id? string
---@field is_instagram_posted? boolean
---@field is_tiktok_posted? boolean
---@field is_youtube_posted? boolean
---@field reorders table
---@field results? any
---@field scheduled_datetime string
---@field source_type string
---@field status string
---@field tiktok_posted_by? any
---@field tiktok_posted_url? any
---@field tiktok_scraped_social_post_id? string
---@field video? any
---@field video_id string
---@field youtube_posted_by? any
---@field youtube_posted_url? any
---@field youtube_scraped_social_post_id? string

---@class ScheduleV2LoadMatch
---@field all_product? boolean
---@field day? number
---@field limit? number
---@field offset? number
---@field product_id? string

---@class ScheduleV2ListMatch
---@field all_product? boolean
---@field limit? number
---@field offset? number
---@field product_id? string
---@field status? any

---@class ScheduleV2CreateData
---@field agent? any
---@field comment? any
---@field created_at string
---@field id string
---@field instagram_posted_by? any
---@field instagram_posted_url? any
---@field instagram_scraped_social_post_id? string
---@field is_instagram_posted? boolean
---@field is_tiktok_posted? boolean
---@field is_youtube_posted? boolean
---@field reorders table
---@field results? any
---@field scheduled_datetime string
---@field source_type string
---@field status string
---@field tiktok_posted_by? any
---@field tiktok_posted_url? any
---@field tiktok_scraped_social_post_id? string
---@field video? any
---@field video_id string
---@field youtube_posted_by? any
---@field youtube_posted_url? any
---@field youtube_scraped_social_post_id? string

---@class ScheduleV2UpdateData
---@field queue_id string
---@field video_id? string

---@class ScheduleV2RemoveMatch
---@field queue_id string

---@class Scrape
---@field old_product_id string
---@field onboarding_data_id string
---@field status string
---@field success boolean
---@field url string

---@class ScrapeCreateData
---@field old_product_id string
---@field url string

---@class ScrapeWebsitePublic
---@field flow_variant? string
---@field onboarding_data_id string
---@field skip_demo? boolean
---@field status string
---@field success boolean
---@field url string

---@class ScrapeWebsitePublicCreateData
---@field context? any
---@field flow? any
---@field skip_demo? boolean
---@field url string

---@class ScrapedData
---@field description string
---@field homepageVideoUrl? any
---@field howItWorks string
---@field imageUrls table
---@field instagram_username? any
---@field mediaAssets? table
---@field name string
---@field pricingAndOffers string
---@field targetAudience string
---@field url string

---@class ScrapedDataCreateData
---@field instagram_username? any
---@field url string

---@class ScrapingStatus

---@class ScrapingStatusLoadMatch

---@class SelfServeActivate
---@field onboarding_data_id string
---@field redirect_to_stripe? boolean
---@field stripe_checkout_url? any
---@field success boolean

---@class SelfServeActivateCreateData
---@field onboarding_data_id string

---@class Seo

---@class SeoLoadMatch

---@class SeoAiMention
---@field bucket string
---@field domain_type string
---@field dominant_domain string
---@field engine string
---@field evidence table
---@field geo string
---@field language string
---@field primary_url string
---@field prompt_text string
---@field run_week string
---@field secondary_urls table

---@class SeoAiMentionListMatch
---@field limit? number
---@field product_id? string

---@class SeoBacklink
---@field anchor_text string
---@field first_seen string
---@field referring_domain string
---@field status string
---@field target_page string

---@class SeoBacklinkListMatch
---@field limit? number
---@field product_id? string

---@class SeoKeyword
---@field blog_page string
---@field current_position number
---@field keyword string
---@field keyword_group string
---@field position_change number

---@class SeoKeywordListMatch
---@field day? number
---@field limit? number
---@field product_id? string

---@class SeoOverview
---@field clicks number
---@field ctr number
---@field date string
---@field impressions number
---@field position number

---@class SeoOverviewListMatch
---@field day? number
---@field product_id? string

---@class SeoTraffic
---@field end_date string
---@field series table
---@field site_url string
---@field start_date string
---@field top_countries table
---@field top_pages table
---@field top_queries table
---@field totals table

---@class SeoTrafficListMatch
---@field day? number
---@field product_id? string
---@field top_limit? number

---@class ShareAccessLink
---@field share_token string
---@field share_url string

---@class ShareAccessLinkCreateData
---@field share_token string
---@field share_url string

---@class Site

---@class SiteLoadMatch

---@class Slide
---@field caption? any
---@field id? string
---@field prompt? any

---@class SlideCreateData
---@field carousel_id string
---@field slide_index number
---@field caption? any
---@field prompt? any
---@field image_model? any

---@class SlideUpdateData
---@field carousel_id string
---@field id number
---@field caption? any
---@field prompt? any

---@class SlugValidation
---@field reason? any
---@field valid boolean

---@class SlugValidationLoadMatch
---@field slug string
---@field product_id? string

---@class Social
---@field code string
---@field code_verifier string
---@field createdAt string
---@field id string
---@field platform string
---@field platformUserId string
---@field updatedAt? any
---@field userId string
---@field username? string

---@class SocialLoadMatch
---@field code_challenge? any
---@field code_challenge_method? string

---@class SocialListMatch
---@field code? string
---@field code_verifier? string
---@field createdAt? string
---@field id? string
---@field platform? string
---@field platformUserId? string
---@field updatedAt? any
---@field userId? string
---@field username? string

---@class SocialCreateData
---@field code string
---@field code_verifier string

---@class SocialRemoveMatch
---@field platform string

---@class SocialScanPreview
---@field instagram_handle? any
---@field posts table
---@field success boolean
---@field tiktok_handle? any

---@class SocialScanPreviewCreateData
---@field instagram_handle? any
---@field tiktok_handle? any

---@class SocialScanProcess
---@field posts table
---@field product_id string
---@field success boolean
---@field task_id? string

---@class SocialScanProcessCreateData
---@field posts table
---@field product_id string

---@class SocialScanSave
---@field media_asset_ids table
---@field posts table
---@field product_id string
---@field success boolean

---@class SocialScanSaveCreateData
---@field posts table
---@field product_id string

---@class Sora2Avatar
---@field avatar_frame_url? any
---@field created_at string
---@field current_step? number
---@field headshot_url? any
---@field id string
---@field logs? table
---@field prompt_key string
---@field run_output_dir? any
---@field selected_age_bucket string
---@field selected_gender string
---@field selected_prompt? any
---@field selected_race string
---@field sora2_cameo_handle? any
---@field sora2_cameo_id? string
---@field sora2_cameo_link? any
---@field sora2_display_name? any
---@field sora2_task_id? string
---@field sora2_video_url string
---@field updated_at string

---@class Sora2AvatarLoadMatch
---@field id string

---@class Sora2AvatarListMatch
---@field completed_only? boolean
---@field current_step? any
---@field page? number
---@field page_size? number
---@field prompt_key? any
---@field search? any
---@field selected_age_bucket? any
---@field selected_gender? any
---@field selected_race? any

---@class Sora2AvatarCreateData
---@field avatar_frame_url? any
---@field current_step? number
---@field headshot_url? any
---@field logs? table
---@field prompt_key string
---@field run_output_dir? any
---@field selected_age_bucket string
---@field selected_gender string
---@field selected_prompt? any
---@field selected_race string
---@field sora2_cameo_handle? any
---@field sora2_cameo_id? string
---@field sora2_cameo_link? any
---@field sora2_display_name? any
---@field sora2_task_id? string
---@field sora2_video_url string

---@class Sora2AvatarUpdateData
---@field id string
---@field avatar_frame_url? any
---@field current_step? number
---@field headshot_url? any
---@field logs? table
---@field prompt_key? string
---@field run_output_dir? any
---@field selected_age_bucket? string
---@field selected_gender? string
---@field selected_prompt? any
---@field selected_race? string
---@field sora2_cameo_handle? any
---@field sora2_cameo_id? string
---@field sora2_cameo_link? any
---@field sora2_display_name? any
---@field sora2_task_id? string
---@field sora2_video_url? string

---@class Sora2AvatarAssetUpload
---@field avatar_id? string
---@field file string
---@field run_output_dir? any
---@field s3_key string
---@field upload_type string
---@field url string

---@class Sora2AvatarAssetUploadCreateData
---@field avatar_id? string
---@field file string
---@field run_output_dir? any
---@field s3_key string
---@field upload_type string
---@field url string

---@class Sora2AvatarStat
---@field by_age_bucket table
---@field by_gender table
---@field by_prompt_key table
---@field by_race table
---@field completed_avatars number
---@field completion_rate number
---@field total_avatars number

---@class Sora2AvatarStatLoadMatch
---@field prompt_key? any
---@field selected_age_bucket? any
---@field selected_gender? any
---@field selected_race? any

---@class Stat

---@class StatListMatch
---@field day? number

---@class StatsRefreshBackfill
---@field message string
---@field status string
---@field task_id string

---@class StatsRefreshBackfillCreateData
---@field day? number
---@field days? any
---@field user_emails? any

---@class StatsRefreshIssue
---@field aged_over_24h boolean
---@field agent_id? string
---@field agent_name_snapshot? any
---@field first_detected_at string
---@field id string
---@field last_detected_at string
---@field last_refresh_completed_at? any
---@field last_seen_run_id? string
---@field latest_error_message? any
---@field next_retry_at? any
---@field platform string
---@field post_method? any
---@field post_url? any
---@field posted_date_et string
---@field product_id? string
---@field product_name_snapshot? any
---@field reason_code string
---@field resolved_at? any
---@field retry_count number
---@field schedule_queue_id? string
---@field scheduled_datetime_utc string
---@field stale_after_sla boolean
---@field status string
---@field user_email_snapshot string
---@field user_id string

---@class StatsRefreshIssueListMatch
---@field date_from? any
---@field date_to? any
---@field limit? number
---@field offset? number
---@field platform? any
---@field posting_method? any
---@field query? any
---@field reason? any
---@field status? string

---@class StatsRefreshOverview
---@field active_run? any
---@field aged_over_24h number
---@field backlog_preview table
---@field coverage_percent number
---@field customer_counts table
---@field date string
---@field generated_at string
---@field method_counts table
---@field platform_counts table
---@field platform_units_resolved number
---@field platform_units_total number
---@field platform_units_unresolved number
---@field posted_entries number
---@field reason_counts table
---@field sla_deadline_et string
---@field stale_after_sla number
---@field top_affected_customers table

---@class StatsRefreshOverviewListMatch
---@field date? any

---@class StatsRefreshRunSummary
---@field celery_task_id? string
---@field completed_at? any
---@field entries_failed number
---@field entries_skipped number
---@field entries_total number
---@field entries_updated number
---@field error_summary_json? any
---@field id string
---@field issues_opened number
---@field issues_resolved number
---@field platform_units_resolved number
---@field platform_units_total number
---@field platform_units_unresolved number
---@field platform_updates_via_profile number
---@field platform_updates_via_url number
---@field provider? any
---@field refresh_trigger? any
---@field requested_by_email? any
---@field run_type string
---@field started_at string
---@field status string
---@field target_date_et? any
---@field users_count number

---@class StatsRefreshRunSummaryListMatch
---@field date_from? any
---@field date_to? any
---@field include_global? boolean
---@field limit? number
---@field offset? number
---@field run_type? any
---@field status? any

---@class StatsRefreshTaskTrigger
---@field message string
---@field status string
---@field target_date string
---@field task_id string
---@field users_count? number

---@class StatsRefreshTaskTriggerCreateData
---@field message string
---@field status string
---@field target_date string
---@field task_id string
---@field users_count? number

---@class Stripe

---@class StripeCreateData
---@field chat_plan_id? any
---@field checkout_session_id? any
---@field coupon_id? any
---@field credits_per_unit? any
---@field membership? any
---@field onboarding_data_id? any
---@field quantity? any

---@class Style

---@class StyleLoadMatch

---@class Template

---@class TemplateLoadMatch

---@class TikTokCreatorInfo
---@field commentDisabled? boolean
---@field creatorAvatarUrl? any
---@field creatorNickname? any
---@field creatorUsername? any
---@field duetDisabled? boolean
---@field maxVideoPostDurationSec? number
---@field privacyLevelOptions? table
---@field stitchDisabled? boolean

---@class TikTokCreatorInfoListMatch
---@field commentDisabled? boolean
---@field creatorAvatarUrl? any
---@field creatorNickname? any
---@field creatorUsername? any
---@field duetDisabled? boolean
---@field maxVideoPostDurationSec? number
---@field privacyLevelOptions? table
---@field stitchDisabled? boolean

---@class TopPost
---@field comments number
---@field id string
---@field likes number
---@field platforms table
---@field scheduled_datetime string
---@field user_email string
---@field user_id string
---@field views number

---@class TopPostListMatch
---@field date string

---@class UploadPostAgent

---@class UploadPostAgentCreateData

---@class User
---@field accountType? any
---@field activatedByAdminAt? any
---@field activatedByAdminId? any
---@field agents table
---@field agentsCount? any
---@field attribution? any
---@field avatarImageUrl? any
---@field avatarVoiceUrl? any
---@field createdAt string
---@field credits? number
---@field email string
---@field googleId? any
---@field hasSeenScheduleWelcome? boolean
---@field id string
---@field industry? any
---@field instagramId? any
---@field isActivatedByAdmin? boolean
---@field isAdmin? boolean
---@field isInternalUser? any
---@field isMigrated? any
---@field isResettingProduct? any
---@field membership? any
---@field name string
---@field partnerDirectLoginDisabled? boolean
---@field partnerExternalUserId? any
---@field partnerPolicyCode? any
---@field partnerSource? any
---@field picture? any
---@field stripeCustomerId? any
---@field stripeSubscriptionId? any
---@field subscriptionCurrentPeriodEnd? any
---@field subscriptionStatus? any
---@field totalCount number
---@field updatedAt string
---@field userId string

---@class UserLoadMatch
---@field id string
---@field product_id? string

---@class UserUpdateData
---@field accountType? any
---@field activatedByAdminAt? any
---@field activatedByAdminId? any
---@field agents? table
---@field agentsCount? any
---@field attribution? any
---@field avatarImageUrl? any
---@field avatarVoiceUrl? any
---@field createdAt? string
---@field credits? number
---@field email? string
---@field googleId? any
---@field hasSeenScheduleWelcome? boolean
---@field id? string
---@field industry? any
---@field instagramId? any
---@field isActivatedByAdmin? boolean
---@field isAdmin? boolean
---@field isInternalUser? any
---@field isMigrated? any
---@field isResettingProduct? any
---@field membership? any
---@field name? string
---@field partnerDirectLoginDisabled? boolean
---@field partnerExternalUserId? any
---@field partnerPolicyCode? any
---@field partnerSource? any
---@field picture? any
---@field stripeCustomerId? any
---@field stripeSubscriptionId? any
---@field subscriptionCurrentPeriodEnd? any
---@field subscriptionStatus? any
---@field totalCount? number
---@field updatedAt? string
---@field userId? string

---@class UserAgent
---@field agent table
---@field assigned_at string
---@field assignment_id string
---@field expires_at? any
---@field id? string
---@field status string

---@class UserAgentListMatch
---@field id string
---@field limit? number
---@field offset? number
---@field product_id? string

---@class UserAgentCreateData
---@field id string
---@field agent_id? string
---@field phone_admin_pc_name? any
---@field product_id? string
---@field agent table
---@field assigned_at string
---@field assignment_id string
---@field expires_at? any
---@field status string

---@class UserHealthDetail
---@field account_type any
---@field activated boolean
---@field activated_by_admin_at? any
---@field activated_by_admin_id? string
---@field admin_notes? any
---@field agents_count? number
---@field assigned_agents table
---@field assigned_agents_count number
---@field assigned_agents_preview_limit? number
---@field assigned_agents_truncated? boolean
---@field auto_schedule_enabled boolean
---@field comments_expected_per_day? number
---@field comments_fix_block_reason? any
---@field comments_fix_ready? boolean
---@field comments_today_failed? number
---@field comments_today_posted? number
---@field comments_today_scheduled? number
---@field comments_yesterday_failed? number
---@field comments_yesterday_posted? number
---@field comments_yesterday_total? number
---@field created_at string
---@field credits number
---@field effective_posted_video_reuse_percent number
---@field email string
---@field expected_agents_count number
---@field id string
---@field is_activated_by_admin boolean
---@field is_admin boolean
---@field is_bookmarked? boolean
---@field is_internal_user boolean
---@field is_migrated boolean
---@field landing_slug? any
---@field landing_status? any
---@field landing_url? any
---@field membership any
---@field microhub_status? any
---@field microhub_url? any
---@field name string
---@field onboarding_flow string
---@field posted_video_reuse_percent? any
---@field product_id string
---@field product_name any
---@field product_url any
---@field subscription_status any
---@field survey_data? any
---@field today_failed number
---@field today_posted number
---@field today_scheduled number
---@field tomorrow_capacity number
---@field tomorrow_scheduled number
---@field videos_completed number
---@field videos_failed number
---@field videos_pending number
---@field videos_stale number
---@field videos_total number
---@field yesterday_failed number
---@field yesterday_failed_entries table
---@field yesterday_posted number
---@field yesterday_total number

---@class UserHealthDetailListMatch
---@field id string
---@field assigned_agents_preview_limit? number
---@field product_id? string

---@class UserWithAvatarSubmission
---@field avatar_image_url string
---@field avatar_voice_url string
---@field created_at string
---@field email string
---@field id string
---@field name string

---@class UserWithAvatarSubmissionListMatch
---@field avatar_image_url? string
---@field avatar_voice_url? string
---@field created_at? string
---@field email? string
---@field id? string
---@field name? string

---@class UsersHealth
---@field account_type any
---@field admin_notes? any
---@field agents_count number
---@field agents_health string
---@field agents_issue any
---@field assigned_agents_count number
---@field auto_schedule_enabled boolean
---@field auto_schedule_health string
---@field auto_schedule_issue any
---@field auto_schedule_today_health string
---@field auto_schedule_today_issue any
---@field created_at string
---@field email string
---@field expected_agents_count number
---@field id string
---@field is_bookmarked? boolean
---@field is_internal_user boolean
---@field is_migrated boolean
---@field membership any
---@field name string
---@field posts_health string
---@field posts_issue any
---@field posts_today_health string
---@field posts_today_issue any
---@field subscription_status any
---@field today_expected_count number
---@field today_failed_count number
---@field today_scheduled_count number
---@field today_total_count number
---@field tomorrow_expected_count number
---@field tomorrow_scheduled_count number
---@field yesterday_failed_count number
---@field yesterday_total_count number

---@class UsersHealthListMatch
---@field include_internal_user? boolean
---@field include_migrated_user? boolean

---@class Video
---@field agent_id? string
---@field bookmarked? any
---@field captions? any
---@field carousel_data? any
---@field created_at string
---@field duration? number
---@field generation_status? any
---@field id string
---@field image_prompt? any
---@field is_onboarding? boolean
---@field is_template? boolean
---@field main_avatar? any
---@field main_prompt? any
---@field media_asset_id? string
---@field product_id? string
---@field reel_id? string
---@field thumbnail_url? any
---@field title string
---@field type? any
---@field updated_at? any
---@field url string
---@field user_id? string
---@field video_id string

---@class VideoLoadMatch
---@field id string

---@class VideoCreateData
---@field agent_id? string
---@field bookmarked? any
---@field captions any
---@field carousel_data? any
---@field duration? number
---@field generation_status? any
---@field image_prompt? any
---@field is_onboarding? boolean
---@field is_template? boolean
---@field main_prompt? any
---@field media_asset_id? string
---@field product_id? string
---@field reel_id? string
---@field thumbnail_url? any
---@field title string
---@field type? any
---@field url string
---@field user_id? string
---@field video_id string

---@class VideoUpdateData
---@field id string
---@field agent_id? string
---@field bookmarked? any
---@field captions? any
---@field carousel_data? any
---@field duration? number
---@field generation_status? any
---@field image_prompt? any
---@field is_onboarding? boolean
---@field is_template? boolean
---@field main_prompt? any
---@field media_asset_id? string
---@field product_id? string
---@field reel_id? string
---@field thumbnail_url? any
---@field title? string
---@field type? any
---@field url? string
---@field user_id? string

---@class VideoRemoveMatch
---@field id string

---@class VideoRemixerWorker
---@field captions_ass? string
---@field captions_vtt? string
---@field cost_usd? number
---@field error string
---@field file string
---@field kinds? table
---@field lease_token string
---@field limit? number
---@field manifest string
---@field model string
---@field processing_seconds? number
---@field prompt_version string
---@field result? table
---@field thumbnail string
---@field tier? string
---@field worker_id string

---@class VideoRemixerWorkerCreateData
---@field captions_ass? string
---@field captions_vtt? string
---@field cost_usd? number
---@field error string
---@field file string
---@field kinds? table
---@field lease_token string
---@field limit? number
---@field manifest string
---@field model string
---@field processing_seconds? number
---@field prompt_version string
---@field result? table
---@field thumbnail string
---@field tier? string
---@field worker_id string

---@class WatchdogRecovery
---@field item_id string
---@field passed boolean
---@field table string

---@class WatchdogRecoveryLoadMatch
---@field device_id? string

---@class WatchdogRecoveryCreateData
---@field item_id string
---@field passed boolean
---@field table string

---@class WinningAd
---@field created_at string
---@field description? string
---@field id string
---@field source string
---@field type string
---@field url string

---@class WinningAdListMatch
---@field product_id? string

---@class XAdaptation

---@class XAdaptationLoadMatch

---@class ZerohumanAdminAccount
---@field account_mode string
---@field active_queue_count number
---@field assigned_agent? any
---@field created_at? any
---@field email string
---@field external_user_id string
---@field membership? any
---@field policy_code? any
---@field product_id? string
---@field product_name? any
---@field provisioning_status string
---@field subscription_status? any
---@field updated_at? any
---@field user_id string

---@class ZerohumanAdminAccountListMatch
---@field account_mode? string
---@field active_queue_count? number
---@field assigned_agent? any
---@field created_at? any
---@field email? string
---@field external_user_id? string
---@field membership? any
---@field policy_code? any
---@field product_id? string
---@field product_name? any
---@field provisioning_status? string
---@field subscription_status? any
---@field updated_at? any
---@field user_id? string

local M = {}

return M
