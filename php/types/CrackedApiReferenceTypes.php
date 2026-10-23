<?php
declare(strict_types=1);

// Typed models for the CrackedApiReference SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Activate entity data model. */
class Activate
{
    public mixed $activated_at = null;
    public string $message;
    public bool $success;
}

/** Request payload for Activate#create. */
class ActivateCreateData
{
    public string $user_id;
    public mixed $activated_at = null;
    public string $message;
    public bool $success;
}

/** ActivateUser entity data model. */
class ActivateUser
{
    public mixed $activated_at = null;
    public string $message;
    public bool $success;
}

/** Request payload for ActivateUser#create. */
class ActivateUserCreateData
{
    public string $user_id;
    public mixed $activated_at = null;
    public string $message;
    public bool $success;
}

/** ActiveOnboarding entity data model. */
class ActiveOnboarding
{
    public mixed $current_step = null;
    public bool $has_active_onboarding;
    public ?string $onboarding_data_id = null;
}

/** Request payload for ActiveOnboarding#load. */
class ActiveOnboardingLoadMatch
{
    public mixed $current_step = null;
    public ?bool $has_active_onboarding = null;
    public ?string $onboarding_data_id = null;
}

/** Admin entity data model. */
class Admin
{
    public ?bool $apply = null;
    public int $count;
    public string $created_at;
    public mixed $date_from = null;
    public mixed $date_to = null;
    public string $email;
    public string $id;
    public ?bool $include_failed = null;
    public ?bool $include_pending = null;
    public ?bool $include_records = null;
    public mixed $issue_ids = null;
    public ?bool $only_active = null;
    public mixed $platform = null;
    public mixed $posting_method = null;
    public ?string $product_id = null;
    public mixed $query = null;
    public mixed $reason = null;
    public ?bool $regenerate = null;
    public ?string $status = null;
    public mixed $user_membership = null;
    public mixed $user_name = null;
    public mixed $user_onboarding_step = null;
    public string $video_type;
}

/** Request payload for Admin#load. */
class AdminLoadMatch
{
    public string $date;
    public mixed $day = null;
    public mixed $user_email = null;
    public ?string $user_id = null;
}

/** Request payload for Admin#list. */
class AdminListMatch
{
    public ?bool $apply = null;
    public ?int $count = null;
    public ?string $created_at = null;
    public mixed $date_from = null;
    public mixed $date_to = null;
    public ?string $email = null;
    public ?string $id = null;
    public ?bool $include_failed = null;
    public ?bool $include_pending = null;
    public ?bool $include_records = null;
    public mixed $issue_ids = null;
    public ?bool $only_active = null;
    public mixed $platform = null;
    public mixed $posting_method = null;
    public ?string $product_id = null;
    public mixed $query = null;
    public mixed $reason = null;
    public ?bool $regenerate = null;
    public ?string $status = null;
    public mixed $user_membership = null;
    public mixed $user_name = null;
    public mixed $user_onboarding_step = null;
    public ?string $video_type = null;
}

/** Request payload for Admin#create. */
class AdminCreateData
{
    public string $user_id;
    public ?bool $apply = null;
    public int $count;
    public string $created_at;
    public mixed $date_from;
    public mixed $date_to;
    public string $email;
    public string $id;
    public ?bool $include_failed = null;
    public ?bool $include_pending = null;
    public ?bool $include_records = null;
    public mixed $issue_ids = null;
    public ?bool $only_active = null;
    public mixed $platform = null;
    public mixed $posting_method = null;
    public string $product_id;
    public mixed $query = null;
    public mixed $reason = null;
    public ?bool $regenerate = null;
    public ?string $status = null;
    public mixed $user_membership = null;
    public mixed $user_name = null;
    public mixed $user_onboarding_step = null;
    public string $video_type;
}

/** Request payload for Admin#update. */
class AdminUpdateData
{
    public string $agent_id;
    public ?string $agent_type = null;
    public ?bool $is_active = null;
    public ?bool $apply = null;
    public ?int $count = null;
    public ?string $created_at = null;
    public mixed $date_from = null;
    public mixed $date_to = null;
    public ?string $email = null;
    public ?string $id = null;
    public ?bool $include_failed = null;
    public ?bool $include_pending = null;
    public ?bool $include_records = null;
    public mixed $issue_ids = null;
    public ?bool $only_active = null;
    public mixed $platform = null;
    public mixed $posting_method = null;
    public ?string $product_id = null;
    public mixed $query = null;
    public mixed $reason = null;
    public ?bool $regenerate = null;
    public ?string $status = null;
    public mixed $user_membership = null;
    public mixed $user_name = null;
    public mixed $user_onboarding_step = null;
    public ?string $video_type = null;
}

/** Request payload for Admin#remove. */
class AdminRemoveMatch
{
    public string $tester_id;
}

/** AdminAccountReset entity data model. */
class AdminAccountReset
{
    public array $agent_ids;
    public string $agent_ids_sha256;
    public string $backup_sha256;
    public ?int $batch_size = null;
    public string $confirmation;
    public string $customer_email;
    public string $pc_name;
    public ?string $phase = null;
    public string $product_id;
    public ?array $video_ids = null;
}

/** Request payload for AdminAccountReset#create. */
class AdminAccountResetCreateData
{
    public array $agent_ids;
    public string $agent_ids_sha256;
    public string $backup_sha256;
    public ?int $batch_size = null;
    public string $confirmation;
    public string $customer_email;
    public string $pc_name;
    public ?string $phase = null;
    public string $product_id;
    public ?array $video_ids = null;
}

/** AdminCarousel entity data model. */
class AdminCarousel
{
    public ?string $agent_id = null;
    public ?string $batch_id = null;
    public ?string $caption = null;
    public ?string $content_base64 = null;
    public mixed $day = null;
    public ?bool $dry_run = null;
    public ?string $engine_run = null;
    public string $expected_revision;
    public array $formula;
    public ?string $formula_id = null;
    public string $prompt;
    public array $slides;
    public ?string $title = null;
}

/** Request payload for AdminCarousel#load. */
class AdminCarouselLoadMatch
{
    public string $batch_id;
}

/** Request payload for AdminCarousel#create. */
class AdminCarouselCreateData
{
    public string $stage;
    public string $agent_id;
    public string $batch_id;
    public string $caption;
    public ?string $content_base64 = null;
    public mixed $day;
    public ?bool $dry_run = null;
    public ?string $engine_run = null;
    public string $expected_revision;
    public array $formula;
    public string $formula_id;
    public string $prompt;
    public array $slides;
    public string $title;
}

/** Request payload for AdminCarousel#update. */
class AdminCarouselUpdateData
{
    public string $fmt;
    public ?string $expected_revision = null;
    public ?array $formula = null;
    public ?string $prompt = null;
    public ?string $title = null;
}

/** AdminCarouselDemoReview entity data model. */
class AdminCarouselDemoReview
{
    public ?string $id = null;
    public array $items;
    public ?string $reason = null;
}

/** Request payload for AdminCarouselDemoReview#load. */
class AdminCarouselDemoReviewLoadMatch
{
    public string $id;
}

/** Request payload for AdminCarouselDemoReview#create. */
class AdminCarouselDemoReviewCreateData
{
    public array $items;
    public ?string $reason = null;
}

/** Request payload for AdminCarouselDemoReview#update. */
class AdminCarouselDemoReviewUpdateData
{
    public string $demo_review_id;
    public mixed $assignee = null;
}

/** AdminCustomer entity data model. */
class AdminCustomer
{
    public mixed $account_type = null;
    public int $active_vireel_agents;
    public array $agents;
    public string $billing_source;
    public mixed $contracted_agents = null;
    public string $email;
    public mixed $membership = null;
    public ?string $name = null;
    public int $pfa_only_agents;
    public string $severity;
    public string $status;
    public mixed $subscription_status = null;
    public string $user_id;
}

/** Request payload for AdminCustomer#list. */
class AdminCustomerListMatch
{
    public mixed $account_type = null;
    public ?int $active_vireel_agents = null;
    public ?array $agents = null;
    public ?string $billing_source = null;
    public mixed $contracted_agents = null;
    public ?string $email = null;
    public mixed $membership = null;
    public ?string $name = null;
    public ?int $pfa_only_agents = null;
    public ?string $severity = null;
    public ?string $status = null;
    public mixed $subscription_status = null;
    public ?string $user_id = null;
}

/** AdminCustomerSuccess entity data model. */
class AdminCustomerSuccess
{
    public int $active_agents;
    public int $active_products;
    public int $agents_count;
    public string $auto_schedule_status;
    public mixed $days_until_period_end = null;
    public string $email;
    public string $feature_impact;
    public mixed $last_notification_at = null;
    public mixed $membership = null;
    public ?string $name = null;
    public int $notification_count;
    public array $notification_events;
    public string $priority;
    public string $severity;
    public string $status_label;
    public mixed $subscription_current_period_end = null;
    public mixed $subscription_status = null;
    public int $upcoming_posts;
    public string $user_id;
}

/** Request payload for AdminCustomerSuccess#list. */
class AdminCustomerSuccessListMatch
{
    public ?int $active_agents = null;
    public ?int $active_products = null;
    public ?int $agents_count = null;
    public ?string $auto_schedule_status = null;
    public mixed $days_until_period_end = null;
    public ?string $email = null;
    public ?string $feature_impact = null;
    public mixed $last_notification_at = null;
    public mixed $membership = null;
    public ?string $name = null;
    public ?int $notification_count = null;
    public ?array $notification_events = null;
    public ?string $priority = null;
    public ?string $severity = null;
    public ?string $status_label = null;
    public mixed $subscription_current_period_end = null;
    public mixed $subscription_status = null;
    public ?int $upcoming_posts = null;
    public ?string $user_id = null;
}

/** AdminGeneratedVideo entity data model. */
class AdminGeneratedVideo
{
    public ?string $agent_id = null;
    public mixed $agent_name = null;
    public string $created_at;
    public ?float $duration = null;
    public ?array $generation_status = null;
    public string $id;
    public ?string $product_id = null;
    public mixed $thumbnail_url = null;
    public string $title;
    public string $type;
    public mixed $updated_at = null;
    public string $url;
}

/** Request payload for AdminGeneratedVideo#list. */
class AdminGeneratedVideoListMatch
{
    public string $user_id;
    public ?int $limit = null;
    public ?string $product_id = null;
}

/** AdminHealthrx entity data model. */
class AdminHealthrx
{
    public string $action;
    public ?bool $delivery_enabled = null;
    public ?string $id = null;
    public string $option_id;
    public array $plan;
    public ?bool $preparation_enabled = null;
    public string $product_id;
    public string $reason;
    public string $request_key;
    public int $revision;
    public ?bool $schedule_enabled = null;
    public string $version;
    public bool $viewed;
}

/** Request payload for AdminHealthrx#load. */
class AdminHealthrxLoadMatch
{
    public string $item_id;
    public string $kind;
}

/** Request payload for AdminHealthrx#create. */
class AdminHealthrxCreateData
{
    public string $action;
    public string $option_id;
    public array $plan;
    public string $product_id;
    public string $reason;
    public string $request_key;
    public string $version;
    public bool $viewed;
}

/** Request payload for AdminHealthrx#update. */
class AdminHealthrxUpdateData
{
    public ?bool $delivery_enabled = null;
    public ?array $plan = null;
    public ?bool $preparation_enabled = null;
    public ?string $product_id = null;
    public ?int $revision = null;
    public ?bool $schedule_enabled = null;
}

/** AdminInsight entity data model. */
class AdminInsight
{
    public array $customer_success_cases;
    public array $customers;
    public string $generated_at;
    public array $pfa_database;
    public array $recent_signups;
    public array $summary;
    public array $vireel_database;
}

/** Request payload for AdminInsight#load. */
class AdminInsightLoadMatch
{
    public mixed $customer_email = null;
    public ?bool $include_agent = null;
    public ?int $limit = null;
    public ?int $page = null;
}

/** Request payload for AdminInsight#list. */
class AdminInsightListMatch
{
    public ?array $customer_success_cases = null;
    public ?array $customers = null;
    public ?string $generated_at = null;
    public ?array $pfa_database = null;
    public ?array $recent_signups = null;
    public ?array $summary = null;
    public ?array $vireel_database = null;
}

/** AdminLandingTask entity data model. */
class AdminLandingTask
{
    public string $task_id;
}

/** Request payload for AdminLandingTask#create. */
class AdminLandingTaskCreateData
{
    public string $user_id;
    public ?string $product_id = null;
    public string $task_id;
}

/** AdminMetricsSummary entity data model. */
class AdminMetricsSummary
{
    public array $paid_users_by_level;
    public int $total_cancellations;
    public int $total_previews_generated;
    public int $total_signups;
    public int $total_videos_generated;
    public int $url_attempts;
    public array $user_credits;
    public array $user_gifted_credits;
}

/** Request payload for AdminMetricsSummary#list. */
class AdminMetricsSummaryListMatch
{
    public ?string $date_filter = null;
}

/** AdminPost entity data model. */
class AdminPost
{
    public mixed $admin_job_ids;
    public string $agent_id;
    public mixed $agent_name;
    public mixed $agent_platform_urls;
    public mixed $agent_url;
    public int $comments;
    public mixed $error_message;
    public mixed $failed_at;
    public string $id;
    public mixed $instagram_posted_by;
    public mixed $instagram_posted_url;
    public string $instagram_scraped_social_post_id;
    public bool $is_instagram_posted;
    public bool $is_tiktok_posted;
    public bool $is_youtube_posted;
    public mixed $last_refreshed_at;
    public int $likes;
    public mixed $platform_post_methods;
    public mixed $platform_urls;
    public mixed $post_method;
    public mixed $post_platforms;
    public mixed $post_url;
    public mixed $posted_at;
    public string $product_id;
    public mixed $results_status;
    public string $scheduled_datetime;
    public string $source_type;
    public string $status;
    public mixed $tiktok_posted_by;
    public mixed $tiktok_posted_url;
    public string $tiktok_scraped_social_post_id;
    public mixed $upload_post_error;
    public mixed $upload_post_status;
    public mixed $upload_post_uploads;
    public string $user_email;
    public string $user_id;
    public mixed $user_name;
    public string $video_id;
    public mixed $video_url;
    public int $views;
    public mixed $youtube_posted_by;
    public mixed $youtube_posted_url;
    public string $youtube_scraped_social_post_id;
}

/** Request payload for AdminPost#list. */
class AdminPostListMatch
{
    public mixed $date = null;
    public ?bool $include_entry = null;
    public ?string $platform = null;
    public ?string $posting_method = null;
}

/** AdminRecentSignup entity data model. */
class AdminRecentSignup
{
    public string $created_at;
    public string $current_step;
    public ?string $email = null;
    public mixed $email_source = null;
    public mixed $error_message = null;
    public string $flow_variant;
    public string $id;
    public int $inactive_minutes;
    public mixed $last_notification_at = null;
    public string $last_seen_at;
    public string $likely_cause;
    public int $notification_count;
    public array $notification_events;
    public ?string $product_id = null;
    public mixed $product_name = null;
    public string $product_url;
    public string $severity;
    public mixed $social_scan_status = null;
    public string $stage_label;
    public string $status;
    public mixed $updated_at = null;
    public mixed $website_scrape_status = null;
}

/** Request payload for AdminRecentSignup#list. */
class AdminRecentSignupListMatch
{
    public ?string $created_at = null;
    public ?string $current_step = null;
    public ?string $email = null;
    public mixed $email_source = null;
    public mixed $error_message = null;
    public ?string $flow_variant = null;
    public ?string $id = null;
    public ?int $inactive_minutes = null;
    public mixed $last_notification_at = null;
    public ?string $last_seen_at = null;
    public ?string $likely_cause = null;
    public ?int $notification_count = null;
    public ?array $notification_events = null;
    public ?string $product_id = null;
    public mixed $product_name = null;
    public ?string $product_url = null;
    public ?string $severity = null;
    public mixed $social_scan_status = null;
    public ?string $stage_label = null;
    public ?string $status = null;
    public mixed $updated_at = null;
    public mixed $website_scrape_status = null;
}

/** AdminSlideshowDiag entity data model. */
class AdminSlideshowDiag
{
    public ?string $agent_id = null;
    public ?string $batch_id = null;
    public ?string $caption = null;
    public ?string $content_base64 = null;
    public mixed $day = null;
    public ?string $formula_id = null;
    public ?string $id = null;
    public ?string $title = null;
}

/** Request payload for AdminSlideshowDiag#create. */
class AdminSlideshowDiagCreateData
{
    public string $id;
    public ?string $agent_id = null;
    public ?string $batch_id = null;
    public ?string $caption = null;
    public ?string $content_base64 = null;
    public mixed $day = null;
    public ?string $formula_id = null;
    public ?string $title = null;
}

/** AdminSlideshowImport entity data model. */
class AdminSlideshowImport
{
    public string $agent_id;
    public string $batch_id;
    public string $caption;
    public string $day;
    public ?bool $dry_run = null;
    public ?string $engine_run = null;
    public string $formula_id;
    public array $slides;
    public string $title;
}

/** Request payload for AdminSlideshowImport#load. */
class AdminSlideshowImportLoadMatch
{
    public string $batch_id;
}

/** Request payload for AdminSlideshowImport#create. */
class AdminSlideshowImportCreateData
{
    public string $agent_id;
    public string $batch_id;
    public string $caption;
    public string $day;
    public ?bool $dry_run = null;
    public ?string $engine_run = null;
    public string $formula_id;
    public array $slides;
    public string $title;
}

/** AdminUserView entity data model. */
class AdminUserView
{
    public mixed $account_type = null;
    public mixed $admin_notes = null;
    public ?int $agents_count = null;
    public string $created_at;
    public int $credits;
    public string $email;
    public string $id;
    public mixed $industry;
    public ?bool $is_admin = null;
    public ?bool $is_bookmarked = null;
    public ?bool $is_internal_user = null;
    public mixed $membership;
    public string $name;
    public string $new_email;
    public ?string $partner_external_user_id = null;
    public mixed $partner_policy_code = null;
    public mixed $partner_source = null;
    public mixed $product_name;
    public mixed $product_url;
    public bool $skip;
    public mixed $subscription_details = null;
    public mixed $subscription_status;
}

/** Request payload for AdminUserView#list. */
class AdminUserViewListMatch
{
    public ?int $limit = null;
    public ?int $page = null;
}

/** Request payload for AdminUserView#create. */
class AdminUserViewCreateData
{
    public string $user_id;
    public mixed $account_type = null;
    public mixed $admin_notes = null;
    public ?int $agents_count = null;
    public string $created_at;
    public int $credits;
    public string $email;
    public string $id;
    public mixed $industry;
    public ?bool $is_admin = null;
    public ?bool $is_bookmarked = null;
    public ?bool $is_internal_user = null;
    public mixed $membership;
    public string $name;
    public string $new_email;
    public ?string $partner_external_user_id = null;
    public mixed $partner_policy_code = null;
    public mixed $partner_source = null;
    public mixed $product_name;
    public mixed $product_url;
    public bool $skip;
    public mixed $subscription_details = null;
    public mixed $subscription_status;
}

/** Request payload for AdminUserView#update. */
class AdminUserViewUpdateData
{
    public string $user_id;
    public mixed $admin_notes = null;
    public ?int $agents_count = null;
    public ?int $credits = null;
    public ?bool $is_admin = null;
    public ?bool $is_bookmarked = null;
    public ?bool $is_internal_user = null;
    public mixed $membership = null;
}

/** Request payload for AdminUserView#remove. */
class AdminUserViewRemoveMatch
{
    public string $user_id;
}

/** AdminUsersTableItem entity data model. */
class AdminUsersTableItem
{
    public bool $activated;
    public ?int $agents_count = null;
    public string $created_at;
    public int $credits;
    public bool $demo_booked;
    public string $email;
    public string $id;
    public mixed $membership;
    public string $name;
    public string $onboarding_flow;
    public mixed $product_name;
    public mixed $product_url;
    public mixed $survey_data;
}

/** Request payload for AdminUsersTableItem#list. */
class AdminUsersTableItemListMatch
{
    public ?int $page = null;
    public ?int $page_size = null;
}

/** AdminVideoRemixer entity data model. */
class AdminVideoRemixer
{
    public string $activity;
    public ?array $allowed_platforms = null;
    public ?string $anchor_clip_id = null;
    public mixed $atomicity_class = null;
    public ?bool $auto_render = null;
    public ?bool $campaign_allowed = null;
    public ?string $channel = null;
    public ?string $channel_default = null;
    public string $clip_id;
    public ?array $clip_ids = null;
    public string $collected_at;
    public mixed $comments = null;
    public mixed $completion_rate = null;
    public mixed $confirmed_duplicate_of = null;
    public ?string $consent_doc_uri = null;
    public ?string $contact = null;
    public mixed $conversions = null;
    public ?int $count = null;
    public ?string $creator = null;
    public ?string $creator_id = null;
    public mixed $crop_window = null;
    public ?string $cta_product_id = null;
    public ?int $days = null;
    public ?bool $derivative_edits_allowed = null;
    public ?bool $enabled = null;
    public mixed $end_ms = null;
    public ?bool $enqueue = null;
    public ?array $errors = null;
    public string $evidence;
    public mixed $expected_revision = null;
    public array $expected_revisions;
    public ?bool $external_ai_allowed = null;
    public string $file;
    public mixed $followers = null;
    public string $formula_id;
    public array $formula_ids;
    public ?array $handles = null;
    public mixed $hook_subtype = null;
    public ?int $hour_utc = null;
    public string $human_role;
    public string $idempotency_key;
    public array $items;
    public array $kim_clip_ids;
    public string $kind;
    public array $levels;
    public mixed $likes = null;
    public bool $media_enabled;
    public ?bool $medical_claim_present = null;
    public ?int $minute_utc = null;
    public ?bool $music_bed_allowed = null;
    public ?string $music_policy = null;
    public string $name;
    public ?string $niche = null;
    public ?string $notes = null;
    public ?string $origin = null;
    public ?bool $owner_waiver = null;
    public ?bool $paid_ads_allowed = null;
    public ?bool $patient_identifiable = null;
    public ?string $person_type = null;
    public ?bool $pipeline = null;
    public ?bool $planning_only = null;
    public string $platform;
    public string $platform_post_id;
    public array $policy;
    public ?string $polish = null;
    public string $post_url;
    public string $posted_at;
    public mixed $primary_role = null;
    public string $purpose;
    public ?float $rate = null;
    public ?string $rationale = null;
    public string $reason;
    public ?string $reference_source_id = null;
    public ?bool $requires_medical_review = null;
    public mixed $review_status = null;
    public int $revision;
    public mixed $rights_expires_at = null;
    public ?string $rights_status = null;
    public string $run_id;
    public ?array $sample_links = null;
    public mixed $secondary_roles = null;
    public int $seconds;
    public ?int $seed = null;
    public ?int $seed_base = null;
    public ?bool $sensitive_personal_data_present = null;
    public mixed $shares = null;
    public ?string $shoot = null;
    public array $slots;
    public mixed $soundbite_title = null;
    public string $source;
    public string $source_id;
    public array $source_ids;
    public mixed $spend_usd = null;
    public mixed $spiciness = null;
    public ?string $spiciness_notes = null;
    public mixed $start_ms = null;
    public ?string $status = null;
    public array $terry_clip_ids;
    public mixed $testimonial_strength = null;
    public mixed $testimonial_type = null;
    public ?string $tier = null;
    public array $timeline;
    public ?string $topic = null;
    public mixed $topic_tags = null;
    public int $total_target_ms;
    public ?bool $use_learned_weights = null;
    public mixed $views = null;
    public string $window;
}

/** Request payload for AdminVideoRemixer#load. */
class AdminVideoRemixerLoadMatch
{
    public string $clip_id;
}

/** Request payload for AdminVideoRemixer#create. */
class AdminVideoRemixerCreateData
{
    public string $activity;
    public ?array $allowed_platforms = null;
    public ?string $anchor_clip_id = null;
    public mixed $atomicity_class = null;
    public ?bool $auto_render = null;
    public ?bool $campaign_allowed = null;
    public ?string $channel = null;
    public ?string $channel_default = null;
    public string $clip_id;
    public ?array $clip_ids = null;
    public string $collected_at;
    public mixed $comments = null;
    public mixed $completion_rate = null;
    public mixed $confirmed_duplicate_of = null;
    public ?string $consent_doc_uri = null;
    public ?string $contact = null;
    public mixed $conversions = null;
    public ?int $count = null;
    public ?string $creator = null;
    public ?string $creator_id = null;
    public mixed $crop_window = null;
    public ?string $cta_product_id = null;
    public ?int $days = null;
    public ?bool $derivative_edits_allowed = null;
    public ?bool $enabled = null;
    public mixed $end_ms = null;
    public ?bool $enqueue = null;
    public ?array $errors = null;
    public string $evidence;
    public mixed $expected_revision = null;
    public array $expected_revisions;
    public ?bool $external_ai_allowed = null;
    public string $file;
    public mixed $followers = null;
    public string $formula_id;
    public array $formula_ids;
    public ?array $handles = null;
    public mixed $hook_subtype = null;
    public ?int $hour_utc = null;
    public string $human_role;
    public string $idempotency_key;
    public array $items;
    public array $kim_clip_ids;
    public string $kind;
    public array $levels;
    public mixed $likes = null;
    public bool $media_enabled;
    public ?bool $medical_claim_present = null;
    public ?int $minute_utc = null;
    public ?bool $music_bed_allowed = null;
    public ?string $music_policy = null;
    public string $name;
    public ?string $niche = null;
    public ?string $notes = null;
    public ?string $origin = null;
    public ?bool $owner_waiver = null;
    public ?bool $paid_ads_allowed = null;
    public ?bool $patient_identifiable = null;
    public ?string $person_type = null;
    public ?bool $pipeline = null;
    public ?bool $planning_only = null;
    public string $platform;
    public string $platform_post_id;
    public array $policy;
    public ?string $polish = null;
    public string $post_url;
    public string $posted_at;
    public mixed $primary_role = null;
    public string $purpose;
    public ?float $rate = null;
    public ?string $rationale = null;
    public string $reason;
    public ?string $reference_source_id = null;
    public ?bool $requires_medical_review = null;
    public mixed $review_status = null;
    public int $revision;
    public mixed $rights_expires_at = null;
    public ?string $rights_status = null;
    public string $run_id;
    public ?array $sample_links = null;
    public mixed $secondary_roles = null;
    public int $seconds;
    public ?int $seed = null;
    public ?int $seed_base = null;
    public ?bool $sensitive_personal_data_present = null;
    public mixed $shares = null;
    public ?string $shoot = null;
    public array $slots;
    public mixed $soundbite_title = null;
    public string $source;
    public string $source_id;
    public array $source_ids;
    public mixed $spend_usd = null;
    public mixed $spiciness = null;
    public ?string $spiciness_notes = null;
    public mixed $start_ms = null;
    public ?string $status = null;
    public array $terry_clip_ids;
    public mixed $testimonial_strength = null;
    public mixed $testimonial_type = null;
    public ?string $tier = null;
    public array $timeline;
    public ?string $topic = null;
    public mixed $topic_tags = null;
    public int $total_target_ms;
    public ?bool $use_learned_weights = null;
    public mixed $views = null;
    public string $window;
}

/** Request payload for AdminVideoRemixer#update. */
class AdminVideoRemixerUpdateData
{
    public string $identifier;
    public ?array $allowed_platforms = null;
    public ?bool $auto_render = null;
    public ?bool $campaign_allowed = null;
    public ?string $channel = null;
    public ?string $channel_default = null;
    public ?string $clip_id = null;
    public mixed $confirmed_duplicate_of = null;
    public ?string $consent_doc_uri = null;
    public ?string $contact = null;
    public ?int $count = null;
    public ?string $creator_id = null;
    public ?bool $derivative_edits_allowed = null;
    public ?bool $enabled = null;
    public ?array $errors = null;
    public mixed $expected_revision = null;
    public ?array $expected_revisions = null;
    public ?bool $external_ai_allowed = null;
    public mixed $followers = null;
    public ?string $formula_id = null;
    public ?array $handles = null;
    public ?int $hour_utc = null;
    public ?string $human_role = null;
    public ?array $levels = null;
    public ?bool $medical_claim_present = null;
    public ?int $minute_utc = null;
    public ?bool $music_bed_allowed = null;
    public ?string $music_policy = null;
    public ?string $name = null;
    public ?string $niche = null;
    public ?string $notes = null;
    public ?string $origin = null;
    public ?bool $owner_waiver = null;
    public ?bool $paid_ads_allowed = null;
    public ?bool $patient_identifiable = null;
    public ?string $person_type = null;
    public ?string $platform = null;
    public ?string $platform_post_id = null;
    public ?array $policy = null;
    public ?string $post_url = null;
    public ?string $posted_at = null;
    public ?float $rate = null;
    public ?string $rationale = null;
    public ?string $reason = null;
    public ?string $reference_source_id = null;
    public ?bool $requires_medical_review = null;
    public mixed $rights_expires_at = null;
    public ?string $rights_status = null;
    public ?array $sample_links = null;
    public ?int $seed_base = null;
    public ?bool $sensitive_personal_data_present = null;
    public ?string $shoot = null;
    public ?array $slots = null;
    public ?array $source_ids = null;
    public mixed $spiciness = null;
    public ?string $spiciness_notes = null;
    public ?string $status = null;
    public ?array $timeline = null;
    public ?int $total_target_ms = null;
}

/** Request payload for AdminVideoRemixer#patch. */
class AdminVideoRemixerPatchData
{
    public mixed $atomicity_class = null;
    public mixed $crop_window = null;
    public ?string $cta_product_id = null;
    public mixed $end_ms = null;
    public mixed $expected_revision = null;
    public mixed $hook_subtype = null;
    public ?bool $media_enabled = null;
    public ?bool $medical_claim_present = null;
    public mixed $primary_role = null;
    public ?string $reason = null;
    public ?bool $requires_medical_review = null;
    public mixed $review_status = null;
    public mixed $secondary_roles = null;
    public ?bool $sensitive_personal_data_present = null;
    public mixed $soundbite_title = null;
    public mixed $start_ms = null;
    public mixed $testimonial_strength = null;
    public mixed $testimonial_type = null;
    public mixed $topic_tags = null;
}

/** Request payload for AdminVideoRemixer#remove. */
class AdminVideoRemixerRemoveMatch
{
    public string $identifier;
}

/** AdvanceStep entity data model. */
class AdvanceStep
{
    public string $current_step;
    public string $onboarding_data_id;
    public bool $success;
    public string $to_step;
}

/** Request payload for AdvanceStep#create. */
class AdvanceStepCreateData
{
    public string $onboarding_data_id;
    public string $to_step;
}

/** Agent entity data model. */
class Agent
{
    public int $active_connections;
    public bool $at_capacity;
    public string $id;
    public bool $is_active;
    public string $name;
    public mixed $tiktok_stats = null;
    public string $type;
}

/** Request payload for Agent#list. */
class AgentListMatch
{
    public mixed $agent_type = null;
}

/** AgentAccessCustomersHealth entity data model. */
class AgentAccessCustomersHealth
{
    public mixed $accountType = null;
    public int $agentQuota;
    public array $assignedAgentsByType;
    public int $assignedAgentsTotal;
    public string $createdAt;
    public string $email;
    public mixed $isInternalUser = null;
    public mixed $membership = null;
    public ?string $name = null;
    public array $performance;
    public int $productCount;
    public mixed $subscriptionCurrentPeriodEnd = null;
    public mixed $subscriptionDetails = null;
    public mixed $subscriptionStatus = null;
    public array $usage;
    public string $userId;
}

/** Request payload for AgentAccessCustomersHealth#list. */
class AgentAccessCustomersHealthListMatch
{
    public ?string $date_range = null;
    public ?bool $include_internal = null;
    public mixed $subscription_status = null;
}

/** AgentAccessOverview entity data model. */
class AgentAccessOverview
{
    public int $activeUsers;
    public string $generatedAt;
    public int $newUsersYesterday;
    public array $onboardingContextCounts;
    public array $onboardingCurrentStepCounts;
    public array $onboardingCurrentStepWindow;
    public array $onboardingFlowVariantCounts;
    public int $onboardingLockedUntilActivation;
    public int $onboardingRecordsTotal;
    public int $onboardingRecordsWindow;
    public array $onboardingSocialScanStatusCounts;
    public array $onboardingWebsiteScrapeStatusCounts;
    public array $subscriptionStatusCounts;
    public int $totalInternalUsers;
    public int $totalUsers;
    public int $trialStartedYesterday;
    public int $trialingUsers;
}

/** Request payload for AgentAccessOverview#load. */
class AgentAccessOverviewLoadMatch
{
    public ?int $onboarding_window_day = null;
}

/** AgentAccessPhilHourlyNotification entity data model. */
class AgentAccessPhilHourlyNotification
{
    public string $generatedAt;
    public array $phoneHealth;
    public array $scheduledPosts;
    public string $targetDate;
    public array $uploadPostInstagramHealth;
    public array $uploadPostTiktokHealth;
    public array $uploadPostYoutubeHealth;
}

/** Request payload for AgentAccessPhilHourlyNotification#load. */
class AgentAccessPhilHourlyNotificationLoadMatch
{
    public mixed $date = null;
}

/** AgentAccessPhilStatsRefresh entity data model. */
class AgentAccessPhilStatsRefresh
{
    public string $generatedAt;
    public array $statsRefresh;
    public string $targetDate;
}

/** Request payload for AgentAccessPhilStatsRefresh#load. */
class AgentAccessPhilStatsRefreshLoadMatch
{
    public mixed $date = null;
}

/** AgentAccessPhilVideo entity data model. */
class AgentAccessPhilVideo
{
    public string $generatedAt;
    public string $targetDate;
    public array $videos;
}

/** Request payload for AgentAccessPhilVideo#load. */
class AgentAccessPhilVideoLoadMatch
{
    public mixed $date = null;
}

/** AgentAccessUserAgent entity data model. */
class AgentAccessUserAgent
{
    public int $agentQuota;
    public array $agents;
    public array $assignedByType;
    public int $assignedTotal;
    public string $email;
    public array $products;
    public string $userId;
}

/** Request payload for AgentAccessUserAgent#list. */
class AgentAccessUserAgentListMatch
{
    public string $email;
}

/** AgentAccessUserPhoneFarm entity data model. */
class AgentAccessUserPhoneFarm
{
    public mixed $avatar = null;
    public mixed $facebookUrl = null;
    public string $id;
    public mixed $instagramUrl = null;
    public mixed $lastAdminSyncedAt = null;
    public string $name;
    public mixed $productId = null;
    public mixed $productName = null;
    public mixed $tiktokUrl = null;
    public mixed $type = null;
    public mixed $uploadPostPlatforms = null;
    public mixed $youtubeUrl = null;
}

/** Request payload for AgentAccessUserPhoneFarm#list. */
class AgentAccessUserPhoneFarmListMatch
{
    public string $email;
}

/** AgentAccessUserPost entity data model. */
class AgentAccessUserPost
{
    public int $deltaYesterday;
    public int $expectedVideosPerDay;
    public int $postedToday;
    public int $postedYesterday;
    public mixed $productId = null;
    public mixed $productName = null;
}

/** Request payload for AgentAccessUserPost#list. */
class AgentAccessUserPostListMatch
{
    public ?int $day = null;
    public string $email;
}

/** AgentAccessUserSummary entity data model. */
class AgentAccessUserSummary
{
    public mixed $deletedAt = null;
    public string $id;
    public mixed $isActive = null;
    public string $name;
    public string $url;
}

/** Request payload for AgentAccessUserSummary#list. */
class AgentAccessUserSummaryListMatch
{
    public string $email;
}

/** AgentAccessUserVideo entity data model. */
class AgentAccessUserVideo
{
    public array $allTime;
    public string $email;
    public array $today;
    public string $userId;
    public array $yesterday;
}

/** Request payload for AgentAccessUserVideo#load. */
class AgentAccessUserVideoLoadMatch
{
    public string $email;
}

/** AgentAccessUserWinningAd entity data model. */
class AgentAccessUserWinningAd
{
    public string $productId;
    public string $productName;
    public array $winningAds;
    public int $winningAdsCount;
}

/** Request payload for AgentAccessUserWinningAd#list. */
class AgentAccessUserWinningAdListMatch
{
    public string $email;
}

/** AgentAccessWinningAdsSummary entity data model. */
class AgentAccessWinningAdsSummary
{
    public string $email;
    public ?string $name = null;
    public int $productCount;
    public int $productsWithWinningAds;
    public mixed $subscriptionStatus = null;
    public int $totalWinningAds;
    public string $userId;
}

/** Request payload for AgentAccessWinningAdsSummary#list. */
class AgentAccessWinningAdsSummaryListMatch
{
    public ?bool $include_internal = null;
    public ?int $limit = null;
    public ?int $offset = null;
    public mixed $subscription_status = null;
}

/** AgentDetail entity data model. */
class AgentDetail
{
    public mixed $activeConnections = null;
    public mixed $assignedAt = null;
    public string $avatar;
    public mixed $bio = null;
    public mixed $facebookUrl = null;
    public string $id;
    public mixed $instagramUrl = null;
    public ?bool $isActive = null;
    public string $name;
    public mixed $role = null;
    public mixed $tiktokStats = null;
    public mixed $tiktokUrl = null;
    public string $type;
    public mixed $uploadPostPlatforms = null;
    public mixed $youtubeUrl = null;
}

/** Request payload for AgentDetail#list. */
class AgentDetailListMatch
{
    public mixed $agent_type = null;
    public ?bool $include_inactive = null;
    public ?int $limit = null;
}

/** Request payload for AgentDetail#update. */
class AgentDetailUpdateData
{
    public string $upload_post_agent_id;
    public mixed $bio = null;
    public ?string $name = null;
    public mixed $role = null;
}

/** AgentHealth entity data model. */
class AgentHealth
{
    public array $daily;
    public array $dates;
    public string $generated_at;
    public array $groups;
    public array $latest;
    public mixed $live_date = null;
    public string $phone_admin_generated_at;
    public ?string $platform = null;
    public int $post_target;
    public ?array $qa_managed_agent_ids = null;
    public array $scope_prefixes;
    public string $timezone;
    public int $warmup_target;
}

/** Request payload for AgentHealth#list. */
class AgentHealthListMatch
{
    public mixed $date_to = null;
    public ?int $day = null;
    public ?string $platform = null;
    public ?bool $summary = null;
    public ?string $user_id = null;
}

/** AgentHealthCustomerOption entity data model. */
class AgentHealthCustomerOption
{
    public int $agent_count;
    public string $email;
    public string $user_id;
}

/** Request payload for AgentHealthCustomerOption#list. */
class AgentHealthCustomerOptionListMatch
{
    public ?int $agent_count = null;
    public ?string $email = null;
    public ?string $user_id = null;
}

/** AgentHealthDetail entity data model. */
class AgentHealthDetail
{
    public ?int $archived_issue_total = null;
    public string $date;
    public string $generated_at;
    public string $group_id;
    public bool $has_more;
    public int $issue_total;
    public array $issues;
    public int $limit;
    public string $metric;
    public int $offset;
    public ?array $warmup_runs = null;
    public ?int $warning_total = null;
    public ?array $warnings = null;
}

/** Request payload for AgentHealthDetail#list. */
class AgentHealthDetailListMatch
{
    public string $date;
    public string $group_id;
    public ?int $limit = null;
    public ?string $metric = null;
    public ?int $offset = null;
    public ?string $platform = null;
}

/** AgentPost entity data model. */
class AgentPost
{
    public int $comments;
    public mixed $error_message;
    public string $id;
    public int $likes;
    public string $product_id;
    public mixed $results;
    public string $scheduled_datetime;
    public string $source_type;
    public string $status;
    public string $user_email;
    public string $user_id;
    public mixed $user_name;
    public string $video_id;
    public mixed $video_url;
    public int $views;
}

/** Request payload for AgentPost#list. */
class AgentPostListMatch
{
    public string $id;
    public ?string $day = null;
}

/** AgentStat entity data model. */
class AgentStat
{
    public int $agents_needed;
    public array $dedicated_agents;
    public array $shared_agents;
    public int $total_agents;
}

/** Request payload for AgentStat#load. */
class AgentStatLoadMatch
{
    public ?int $agents_needed = null;
    public ?array $dedicated_agents = null;
    public ?array $shared_agents = null;
    public ?int $total_agents = null;
}

/** AgentSummary entity data model. */
class AgentSummary
{
    public int $agent_count;
    public mixed $favicon_url = null;
    public string $product_id;
    public string $product_name;
}

/** Request payload for AgentSummary#list. */
class AgentSummaryListMatch
{
    public ?int $agent_count = null;
    public mixed $favicon_url = null;
    public ?string $product_id = null;
    public ?string $product_name = null;
}

/** AgentsSummary entity data model. */
class AgentsSummary
{
    public int $total_agents;
    public int $total_agents_count_sum;
}

/** Request payload for AgentsSummary#load. */
class AgentsSummaryLoadMatch
{
    public ?int $total_agents = null;
    public ?int $total_agents_count_sum = null;
}

/** AnalysisStatus entity data model. */
class AnalysisStatus
{
}

/** Request payload for AnalysisStatus#load. */
class AnalysisStatusLoadMatch
{
}

/** AnalyticsPost entity data model. */
class AnalyticsPost
{
    public mixed $agent = null;
    public mixed $comment = null;
    public string $created_at;
    public string $id;
    public ?string $product_id = null;
    public mixed $queue_position = null;
    public mixed $results = null;
    public string $scheduled_datetime;
    public mixed $scraped_posts = null;
    public string $source_type;
    public string $status;
    public string $updated_at;
    public mixed $video = null;
}

/** Request payload for AnalyticsPost#list. */
class AnalyticsPostListMatch
{
    public ?string $agent_id = null;
    public string $date_from;
    public mixed $date_to = null;
    public ?string $email = null;
    public ?string $product_id = null;
    public mixed $status = null;
    public ?string $user_id = null;
}

/** AnalyzeProduct entity data model. */
class AnalyzeProduct
{
    public mixed $instagram_username = null;
    public string $message;
    public string $status;
    public string $url;
}

/** Request payload for AnalyzeProduct#create. */
class AnalyzeProductCreateData
{
    public mixed $instagram_username = null;
    public string $url;
}

/** AssignAgent entity data model. */
class AssignAgent
{
    public array $agent;
    public array $assignment;
    public array $mock_agents;
    public string $onboarding_data_id;
}

/** Request payload for AssignAgent#create. */
class AssignAgentCreateData
{
    public string $onboarding_data_id;
}

/** Auth entity data model. */
class Auth
{
}

/** Request payload for Auth#create. */
class AuthCreateData
{
    public mixed $attribution = null;
    public mixed $email = null;
    public mixed $industry = null;
    public mixed $returnTo = null;
    public mixed $token = null;
}

/** AutoScheduleSetting entity data model. */
class AutoScheduleSetting
{
    public ?bool $can_enable_repost = null;
    public int $effective_posted_video_reuse_percent;
    public mixed $enabled_video_types = null;
    public bool $is_enabled;
    public ?bool $lock_video_regeneration_controls = null;
    public string $membership_tier;
    public mixed $posted_video_reuse_percent = null;
    public ?string $product_id = null;
    public mixed $repost_source = null;
    public int $videos_per_day;
}

/** Request payload for AutoScheduleSetting#load. */
class AutoScheduleSettingLoadMatch
{
    public ?string $product_id = null;
}

/** Request payload for AutoScheduleSetting#update. */
class AutoScheduleSettingUpdateData
{
    public ?string $product_id = null;
    public mixed $enabled_video_types = null;
    public ?bool $is_enabled = null;
}

/** BulkTikTokStatsUpdate entity data model. */
class BulkTikTokStatsUpdate
{
    public array $failedIds;
    public int $updatedCount;
    public array $updates;
}

/** Request payload for BulkTikTokStatsUpdate#update. */
class BulkTikTokStatsUpdateUpdateData
{
    public ?array $updates = null;
}

/** Carousel entity data model. */
class Carousel
{
    public string $agent_id;
    public string $agent_name;
    public mixed $audit_created_at = null;
    public mixed $audit_snapshot_sha256 = null;
    public mixed $caption = null;
    public mixed $comments = null;
    public mixed $fit_score = null;
    public string $format;
    public ?array $formula = null;
    public ?string $formula_id = null;
    public mixed $formula_name = null;
    public ?array $generation = null;
    public ?string $id = null;
    public mixed $image_prompt = null;
    public mixed $likes = null;
    public mixed $main_prompt = null;
    public mixed $metrics_updated_at = null;
    public mixed $post_url = null;
    public mixed $profile_url = null;
    public ?array $qa = null;
    public string $qa_status;
    public mixed $qa_verdict = null;
    public mixed $quality_score = null;
    public string $queue_id;
    public mixed $relevance_score = null;
    public string $scheduled_at;
    public int $slide_count;
    public array $slides;
    public ?array $source = null;
    public string $status;
    public mixed $thumbnail_url = null;
    public string $title;
    public string $video_id;
    public mixed $views = null;
}

/** Request payload for Carousel#load. */
class CarouselLoadMatch
{
    public string $id;
}

/** Request payload for Carousel#list. */
class CarouselListMatch
{
    public mixed $date = null;
}

/** Request payload for Carousel#create. */
class CarouselCreateData
{
    public string $id;
    public ?bool $skip_schedule = null;
    public string $agent_id;
    public string $agent_name;
    public mixed $audit_created_at = null;
    public mixed $audit_snapshot_sha256 = null;
    public mixed $caption = null;
    public mixed $comments = null;
    public mixed $fit_score = null;
    public string $format;
    public ?array $formula = null;
    public ?string $formula_id = null;
    public mixed $formula_name = null;
    public ?array $generation = null;
    public mixed $image_prompt = null;
    public mixed $likes = null;
    public mixed $main_prompt = null;
    public mixed $metrics_updated_at = null;
    public mixed $post_url = null;
    public mixed $profile_url = null;
    public ?array $qa = null;
    public string $qa_status;
    public mixed $qa_verdict = null;
    public mixed $quality_score = null;
    public string $queue_id;
    public mixed $relevance_score = null;
    public string $scheduled_at;
    public int $slide_count;
    public array $slides;
    public ?array $source = null;
    public string $status;
    public mixed $thumbnail_url = null;
    public string $title;
    public string $video_id;
    public mixed $views = null;
}

/** CarouselAgentDetail entity data model. */
class CarouselAgentDetail
{
    public string $agent_id;
    public string $agent_name;
    public mixed $connection_status = null;
    public mixed $followers = null;
    public mixed $following = null;
    public mixed $metrics_updated_at = null;
    public string $phone_admin_status;
    public mixed $profile_likes = null;
    public mixed $profile_url = null;
    public mixed $warmup_days = null;
    public mixed $warmup_hold_until = null;
    public string $warmup_status;
}

/** Request payload for CarouselAgentDetail#load. */
class CarouselAgentDetailLoadMatch
{
    public string $agent_id;
}

/** CarouselStatus entity data model. */
class CarouselStatus
{
    public mixed $caption;
    public mixed $error = null;
    public ?string $id = null;
    public mixed $image_model = null;
    public mixed $image_provider = null;
    public ?string $image_task_id = null;
    public mixed $image_url;
    public int $index;
    public mixed $prompt;
    public string $status;
}

/** Request payload for CarouselStatus#list. */
class CarouselStatusListMatch
{
    public string $id;
}

/** Chat entity data model. */
class Chat
{
    public string $idempotencyKey;
    public string $message;
    public string $sessionId;
}

/** Request payload for Chat#create. */
class ChatCreateData
{
    public string $session_id;
    public string $idempotencyKey;
    public string $message;
    public string $sessionId;
}

/** ChatHistory entity data model. */
class ChatHistory
{
    public string $chatSubVariant;
    public string $createdAt;
    public array $messages;
    public mixed $model = null;
    public string $onboardingDataId;
    public mixed $routeRecommendation = null;
    public string $salesStage;
    public mixed $selectedPlan = null;
    public array $session;
    public string $sessionId;
    public string $status;
    public string $updatedAt;
}

/** Request payload for ChatHistory#load. */
class ChatHistoryLoadMatch
{
    public string $session_id;
}

/** Request payload for ChatHistory#create. */
class ChatHistoryCreateData
{
    public string $onboardingDataId;
}

/** ChatSession entity data model. */
class ChatSession
{
    public string $chatSubVariant;
    public string $createdAt;
    public mixed $model = null;
    public mixed $plan = null;
    public mixed $route = null;
    public mixed $routeRecommendation = null;
    public string $salesStage;
    public mixed $selectedPlan = null;
    public string $sessionId;
    public string $status;
    public string $updatedAt;
}

/** Request payload for ChatSession#create. */
class ChatSessionCreateData
{
    public string $session_id;
    public mixed $plan = null;
    public mixed $route = null;
}

/** Comment entity data model. */
class Comment
{
}

/** Request payload for Comment#load. */
class CommentLoadMatch
{
    public ?bool $all_product = null;
    public ?int $day = null;
    public ?int $limit = null;
    public ?int $offset = null;
    public ?string $product_id = null;
}

/** CommentCampaign entity data model. */
class CommentCampaign
{
    public ?int $account_daily_limit = null;
    public ?int $account_weekly_limit = null;
    public string $action;
    public ?int $active_days_per_week = null;
    public string $agent_id;
    public ?array $allowlist = null;
    public ?int $analysis_daily_limit = null;
    public ?string $analysis_model = null;
    public ?float $analysis_reservation_usd = null;
    public ?array $approved_markets = null;
    public ?bool $brand_forward_enabled = null;
    public ?array $briefs = null;
    public ?bool $candidate_only = null;
    public ?array $claims = null;
    public ?int $cohort_removal_threshold = null;
    public ?float $daily_cost_ceiling_usd = null;
    public ?string $delivery_mode = null;
    public ?string $disclosure_mode = null;
    public ?string $disclosure_template = null;
    public ?int $draft_options_count = null;
    public ?float $draft_review_reservation_usd = null;
    public ?bool $exceptional_daily_cap_approved = null;
    public ?bool $execution_enabled = null;
    public ?array $experiment_styles = null;
    public ?float $inventory_factor = null;
    public ?array $keywords = null;
    public mixed $max_duration_seconds = null;
    public ?float $metadata_pass_rate = null;
    public ?int $min_interval_minutes = null;
    public ?string $mode = null;
    public ?array $monitored_creators = null;
    public ?string $platform = null;
    public ?string $platform_permission_evidence = null;
    public ?string $policy_approved_by = null;
    public mixed $policy_expires_at = null;
    public ?string $policy_version = null;
    public ?int $product_daily_limit = null;
    public ?float $qualification_rate = null;
    public ?int $raw_daily_limit = null;
    public ?float $raw_result_reservation_usd = null;
    public string $reason;
    public ?bool $replies_enabled = null;
    public string $request_key;
    public ?string $reviewer_model = null;
    public ?int $scan_interval_hours = null;
    public ?string $search_change_reason = null;
    public mixed $search_effective_at = null;
    public ?int $shadow_sample_limit = null;
    public mixed $spent_seconds = null;
    public ?int $task_ttl_hours = null;
    public ?bool $top_comment_analysis_enabled = null;
    public ?string $writer_model = null;
}

/** Request payload for CommentCampaign#load. */
class CommentCampaignLoadMatch
{
    public string $product_id;
}

/** Request payload for CommentCampaign#create. */
class CommentCampaignCreateData
{
    public string $product_id;
    public ?string $source_id = null;
    public ?int $account_daily_limit = null;
    public ?int $account_weekly_limit = null;
    public string $action;
    public ?int $active_days_per_week = null;
    public string $agent_id;
    public ?array $allowlist = null;
    public ?int $analysis_daily_limit = null;
    public ?string $analysis_model = null;
    public ?float $analysis_reservation_usd = null;
    public ?array $approved_markets = null;
    public ?bool $brand_forward_enabled = null;
    public ?array $briefs = null;
    public ?bool $candidate_only = null;
    public ?array $claims = null;
    public ?int $cohort_removal_threshold = null;
    public ?float $daily_cost_ceiling_usd = null;
    public ?string $delivery_mode = null;
    public ?string $disclosure_mode = null;
    public ?string $disclosure_template = null;
    public ?int $draft_options_count = null;
    public ?float $draft_review_reservation_usd = null;
    public ?bool $exceptional_daily_cap_approved = null;
    public ?bool $execution_enabled = null;
    public ?array $experiment_styles = null;
    public ?float $inventory_factor = null;
    public ?array $keywords = null;
    public mixed $max_duration_seconds = null;
    public ?float $metadata_pass_rate = null;
    public ?int $min_interval_minutes = null;
    public ?string $mode = null;
    public ?array $monitored_creators = null;
    public ?string $platform = null;
    public ?string $platform_permission_evidence = null;
    public ?string $policy_approved_by = null;
    public mixed $policy_expires_at = null;
    public ?string $policy_version = null;
    public ?int $product_daily_limit = null;
    public ?float $qualification_rate = null;
    public ?int $raw_daily_limit = null;
    public ?float $raw_result_reservation_usd = null;
    public string $reason;
    public ?bool $replies_enabled = null;
    public string $request_key;
    public ?string $reviewer_model = null;
    public ?int $scan_interval_hours = null;
    public ?string $search_change_reason = null;
    public mixed $search_effective_at = null;
    public ?int $shadow_sample_limit = null;
    public mixed $spent_seconds = null;
    public ?int $task_ttl_hours = null;
    public ?bool $top_comment_analysis_enabled = null;
    public ?string $writer_model = null;
}

/** Request payload for CommentCampaign#update. */
class CommentCampaignUpdateData
{
    public string $product_id;
    public ?int $account_daily_limit = null;
    public ?int $account_weekly_limit = null;
    public ?int $active_days_per_week = null;
    public ?array $allowlist = null;
    public ?int $analysis_daily_limit = null;
    public ?string $analysis_model = null;
    public ?float $analysis_reservation_usd = null;
    public ?array $approved_markets = null;
    public ?bool $brand_forward_enabled = null;
    public ?array $briefs = null;
    public ?array $claims = null;
    public ?int $cohort_removal_threshold = null;
    public ?float $daily_cost_ceiling_usd = null;
    public ?string $delivery_mode = null;
    public ?string $disclosure_mode = null;
    public ?string $disclosure_template = null;
    public ?int $draft_options_count = null;
    public ?float $draft_review_reservation_usd = null;
    public ?bool $exceptional_daily_cap_approved = null;
    public ?bool $execution_enabled = null;
    public ?array $experiment_styles = null;
    public ?float $inventory_factor = null;
    public ?array $keywords = null;
    public mixed $max_duration_seconds = null;
    public ?float $metadata_pass_rate = null;
    public ?int $min_interval_minutes = null;
    public ?string $mode = null;
    public ?array $monitored_creators = null;
    public ?string $platform = null;
    public ?string $platform_permission_evidence = null;
    public ?string $policy_approved_by = null;
    public mixed $policy_expires_at = null;
    public ?string $policy_version = null;
    public ?int $product_daily_limit = null;
    public ?float $qualification_rate = null;
    public ?int $raw_daily_limit = null;
    public ?float $raw_result_reservation_usd = null;
    public ?bool $replies_enabled = null;
    public ?string $reviewer_model = null;
    public ?int $scan_interval_hours = null;
    public ?string $search_change_reason = null;
    public mixed $search_effective_at = null;
    public ?int $shadow_sample_limit = null;
    public ?int $task_ttl_hours = null;
    public ?bool $top_comment_analysis_enabled = null;
    public ?string $writer_model = null;
}

/** CompleteChatCheckout entity data model. */
class CompleteChatCheckout
{
    public mixed $message = null;
    public string $onboarding_data_id;
    public ?string $product_id = null;
    public ?bool $ready = null;
    public bool $success;
}

/** Request payload for CompleteChatCheckout#create. */
class CompleteChatCheckoutCreateData
{
    public string $onboarding_data_id;
}

/** CreateBlackoutSora2Video entity data model. */
class CreateBlackoutSora2Video
{
    public string $main_prompt;
    public string $media_asset_id;
    public string $product_id;
    public ?bool $requires_polling = null;
    public array $video;
}

/** Request payload for CreateBlackoutSora2Video#create. */
class CreateBlackoutSora2VideoCreateData
{
    public string $main_prompt;
    public string $media_asset_id;
    public string $product_id;
}

/** CreateCarousel entity data model. */
class CreateCarousel
{
    public mixed $copy_mode = null;
    public ?string $expected_owner_user_id = null;
    public ?string $expected_product_id = null;
    public mixed $expected_product_name = null;
    public ?string $image_model = null;
    public ?bool $mention_product = null;
    public string $message;
    public ?int $num_slides = null;
    public ?string $owner_user_id = null;
    public ?string $product_id = null;
    public mixed $product_name = null;
    public ?string $product_placement = null;
    public ?string $request_id = null;
    public mixed $script_style_custom = null;
    public ?string $script_style_id = null;
    public mixed $selected_hook = null;
    public string $status;
    public bool $success;
    public string $template_id;
    public string $video_id;
    public mixed $visual_style_custom = null;
    public ?string $visual_style_id = null;
}

/** Request payload for CreateCarousel#create. */
class CreateCarouselCreateData
{
    public mixed $copy_mode = null;
    public ?string $expected_owner_user_id = null;
    public ?string $expected_product_id = null;
    public mixed $expected_product_name = null;
    public ?string $image_model = null;
    public ?bool $mention_product = null;
    public ?int $num_slides = null;
    public ?string $product_id = null;
    public ?string $product_placement = null;
    public ?string $request_id = null;
    public mixed $script_style_custom = null;
    public ?string $script_style_id = null;
    public mixed $selected_hook = null;
    public string $template_id;
    public mixed $visual_style_custom = null;
    public ?string $visual_style_id = null;
}

/** CreateProduct entity data model. */
class CreateProduct
{
    public string $onboarding_data_id;
    public string $product_id;
    public bool $success;
    public ?int $videos_queued = null;
}

/** Request payload for CreateProduct#create. */
class CreateProductCreateData
{
    public string $onboarding_data_id;
}

/** CreateResetProductV6 entity data model. */
class CreateResetProductV6
{
    public int $agents_transferred;
    public int $credits_deducted;
    public string $onboarding_data_id;
    public string $product_id;
    public int $remaining_credits;
    public bool $success;
    public int $videos_queued;
}

/** Request payload for CreateResetProductV6#create. */
class CreateResetProductV6CreateData
{
    public string $onboarding_data_id;
}

/** CreateSora2Video entity data model. */
class CreateSora2Video
{
    public mixed $image_prompt = null;
    public string $main_prompt;
    public ?string $model = null;
    public ?bool $requires_polling = null;
    public ?string $seconds = null;
    public ?string $size = null;
    public array $video;
}

/** Request payload for CreateSora2Video#create. */
class CreateSora2VideoCreateData
{
    public mixed $image_prompt = null;
    public string $main_prompt;
    public ?string $model = null;
    public ?string $seconds = null;
    public ?string $size = null;
}

/** CreateVariation entity data model. */
class CreateVariation
{
    public int $hook_duration;
    public string $media_asset_id;
    public string $message;
    public string $product_id;
    public string $prompt;
    public ?string $task_id = null;
    public string $video_id;
}

/** Request payload for CreateVariation#create. */
class CreateVariationCreateData
{
    public int $hook_duration;
    public string $media_asset_id;
    public string $product_id;
    public string $prompt;
}

/** Customer entity data model. */
class Customer
{
    public mixed $account_type = null;
    public int $assigned_agents_count;
    public string $email;
    public string $id;
    public ?bool $is_migrated = null;
}

/** Request payload for Customer#list. */
class CustomerListMatch
{
    public mixed $account_type = null;
    public ?int $assigned_agents_count = null;
    public ?string $email = null;
    public ?string $id = null;
    public ?bool $is_migrated = null;
}

/** CustomerHealth entity data model. */
class CustomerHealth
{
    public array $assigned_agents;
    public array $available_dates;
    public string $date;
    public string $email;
    public array $entries;
    public ?string $id = null;
    public array $performance_overview;
    public array $platform_coverage_summary;
    public string $user_id;
}

/** Request payload for CustomerHealth#load. */
class CustomerHealthLoadMatch
{
    public string $id;
    public mixed $date = null;
}

/** CustomerHealthAllCustomersItem entity data model. */
class CustomerHealthAllCustomersItem
{
    public mixed $account_type = null;
    public int $assigned_agents_count;
    public array $daily_stats;
    public string $email;
    public ?bool $is_migrated = null;
    public int $total_views;
    public string $user_id;
}

/** Request payload for CustomerHealthAllCustomersItem#list. */
class CustomerHealthAllCustomersItemListMatch
{
    public ?int $limit = null;
    public ?int $offset = null;
}

/** CustomerHealthViewsSummary entity data model. */
class CustomerHealthViewsSummary
{
    public int $average_views_per_result;
    public string $date;
    public mixed $end_date = null;
    public int $paid_users_count;
    public int $posted_results;
    public string $range;
    public mixed $start_date = null;
    public array $top_users;
    public int $total_views;
    public array $trend;
    public string $trend_granularity;
    public mixed $user_email = null;
    public ?string $user_id = null;
    public int $users_with_views;
}

/** Request payload for CustomerHealthViewsSummary#list. */
class CustomerHealthViewsSummaryListMatch
{
    public mixed $date = null;
    public ?string $range = null;
    public ?string $user_id = null;
}

/** Daily entity data model. */
class Daily
{
    public ?string $id = null;
}

/** Request payload for Daily#create. */
class DailyCreateData
{
    public string $id;
    public string $day;
}

/** DailyStatus entity data model. */
class DailyStatus
{
    public ?string $id = null;
}

/** Request payload for DailyStatus#load. */
class DailyStatusLoadMatch
{
    public string $id;
    public string $day;
}

/** DedicatedAgentsDashboard entity data model. */
class DedicatedAgentsDashboard
{
    public int $active_connections;
    public ?string $assigned_user_id = null;
    public ?array $assigned_user_ids = null;
    public mixed $bio;
    public string $id;
    public mixed $instagram_url = null;
    public bool $is_active;
    public mixed $last_admin_synced_at = null;
    public string $name;
    public mixed $role;
    public mixed $tiktok_stats = null;
    public mixed $tiktok_url = null;
    public ?array $today_failed_entries = null;
    public array $today_stats;
    public mixed $upload_post_platforms = null;
    public mixed $upload_post_profile = null;
    public ?array $yesterday_failed_entries = null;
    public array $yesterday_stats;
    public mixed $youtube_url = null;
}

/** Request payload for DedicatedAgentsDashboard#list. */
class DedicatedAgentsDashboardListMatch
{
    public ?int $active_connections = null;
    public ?string $assigned_user_id = null;
    public ?array $assigned_user_ids = null;
    public mixed $bio = null;
    public ?string $id = null;
    public mixed $instagram_url = null;
    public ?bool $is_active = null;
    public mixed $last_admin_synced_at = null;
    public ?string $name = null;
    public mixed $role = null;
    public mixed $tiktok_stats = null;
    public mixed $tiktok_url = null;
    public ?array $today_failed_entries = null;
    public ?array $today_stats = null;
    public mixed $upload_post_platforms = null;
    public mixed $upload_post_profile = null;
    public ?array $yesterday_failed_entries = null;
    public ?array $yesterday_stats = null;
    public mixed $youtube_url = null;
}

/** EnterpriseAgent entity data model. */
class EnterpriseAgent
{
    public int $count;
    public string $product_id;
    public string $source_product_id;
    public string $target_product_id;
}

/** Request payload for EnterpriseAgent#load. */
class EnterpriseAgentLoadMatch
{
    public ?int $count = null;
    public ?string $product_id = null;
    public ?string $source_product_id = null;
    public ?string $target_product_id = null;
}

/** Request payload for EnterpriseAgent#create. */
class EnterpriseAgentCreateData
{
    public ?int $count = null;
    public string $product_id;
    public string $source_product_id;
    public string $target_product_id;
}

/** EnterpriseProduct entity data model. */
class EnterpriseProduct
{
}

/** Request payload for EnterpriseProduct#load. */
class EnterpriseProductLoadMatch
{
    public string $product_id;
}

/** ExactAvailability entity data model. */
class ExactAvailability
{
}

/** Request payload for ExactAvailability#load. */
class ExactAvailabilityLoadMatch
{
}

/** ExactFormula entity data model. */
class ExactFormula
{
}

/** Request payload for ExactFormula#load. */
class ExactFormulaLoadMatch
{
}

/** ExtractV2 entity data model. */
class ExtractV2
{
    public mixed $instagram_username = null;
    public string $message;
    public string $status;
    public string $url;
}

/** Request payload for ExtractV2#create. */
class ExtractV2CreateData
{
    public mixed $instagram_username = null;
    public string $url;
}

/** FailedPost entity data model. */
class FailedPost
{
    public string $agent_id;
    public mixed $agent_name;
    public mixed $agent_platforms;
    public mixed $error_message;
    public string $id;
    public string $product_id;
    public mixed $results;
    public string $scheduled_datetime;
    public string $source_type;
    public string $status;
    public string $user_email;
    public string $user_id;
    public mixed $user_name;
    public string $video_id;
    public mixed $video_url;
}

/** Request payload for FailedPost#list. */
class FailedPostListMatch
{
    public ?string $day = null;
}

/** File entity data model. */
class File
{
    public string $file;
}

/** Request payload for File#create. */
class FileCreateData
{
    public string $file;
}

/** GenerateBlackoutSora2Prompt entity data model. */
class GenerateBlackoutSora2Prompt
{
    public string $media_asset_id;
    public string $product_id;
    public string $prompt;
}

/** Request payload for GenerateBlackoutSora2Prompt#create. */
class GenerateBlackoutSora2PromptCreateData
{
    public string $media_asset_id;
    public string $product_id;
}

/** GeneratePomelliDemo entity data model. */
class GeneratePomelliDemo
{
    public int $current_demo_count;
    public ?int $max_demos = null;
    public string $message;
    public string $product_id;
    public bool $success;
}

/** Request payload for GeneratePomelliDemo#create. */
class GeneratePomelliDemoCreateData
{
    public string $product_id;
}

/** GeneratePrompt entity data model. */
class GeneratePrompt
{
    public int $hook_duration;
    public string $media_asset_id;
    public string $media_asset_url;
    public string $prompt;
}

/** Request payload for GeneratePrompt#create. */
class GeneratePromptCreateData
{
    public string $media_asset_id;
}

/** GenerateSora2Prompt entity data model. */
class GenerateSora2Prompt
{
    public string $prompt;
}

/** Request payload for GenerateSora2Prompt#load. */
class GenerateSora2PromptLoadMatch
{
    public ?string $prompt = null;
}

/** Healthrx entity data model. */
class Healthrx
{
    public ?string $account_id = null;
    public ?string $action = null;
    public string $agent_id;
    public int $attempt;
    public ?bool $avatar_present = null;
    public string $benchmark_set;
    public ?bool $commercial = null;
    public string $commercial_license_evidence;
    public string $content_id;
    public array $dimensions;
    public ?int $duration_seconds = null;
    public string $evidence;
    public array $evidence_urls;
    public string $external_key;
    public ?string $format = null;
    public ?bool $includes_all_attempt_costs = null;
    public array $input_specification;
    public string $kind;
    public ?int $level = null;
    public string $measured_at;
    public string $model_version;
    public ?string $paid_campaign_id = null;
    public ?string $parent_content_id = null;
    public bool $paused;
    public string $pillar;
    public array $profile;
    public ?string $promotion_evidence = null;
    public string $provider;
    public string $provider_invoice_evidence;
    public string $reason;
    public string $reference_version;
    public string $request_key;
    public ?string $scope = null;
    public string $test_variable;
    public string $topic;
    public float $total_cost_usd;
}

/** Request payload for Healthrx#load. */
class HealthrxLoadMatch
{
    public ?string $account_id = null;
    public string $product_id;
}

/** Request payload for Healthrx#create. */
class HealthrxCreateData
{
    public ?string $account_id = null;
    public string $product_id;
    public ?string $content_id = null;
    public ?string $incident_id = null;
    public ?string $action = null;
    public string $agent_id;
    public int $attempt;
    public ?bool $avatar_present = null;
    public string $benchmark_set;
    public ?bool $commercial = null;
    public string $commercial_license_evidence;
    public array $dimensions;
    public ?int $duration_seconds = null;
    public string $evidence;
    public array $evidence_urls;
    public string $external_key;
    public ?string $format = null;
    public ?bool $includes_all_attempt_costs = null;
    public array $input_specification;
    public string $kind;
    public ?int $level = null;
    public string $measured_at;
    public string $model_version;
    public ?string $paid_campaign_id = null;
    public ?string $parent_content_id = null;
    public bool $paused;
    public string $pillar;
    public array $profile;
    public ?string $promotion_evidence = null;
    public string $provider;
    public string $provider_invoice_evidence;
    public string $reason;
    public string $reference_version;
    public string $request_key;
    public ?string $scope = null;
    public string $test_variable;
    public string $topic;
    public float $total_cost_usd;
}

/** InitResetProductV6 entity data model. */
class InitResetProductV6
{
    public bool $auto_schedule_disabled;
    public string $old_product_id;
    public ?string $product_id = null;
    public int $queue_entries_cleared;
    public bool $success;
}

/** Request payload for InitResetProductV6#create. */
class InitResetProductV6CreateData
{
    public ?string $product_id = null;
}

/** Iri entity data model. */
class Iri
{
    public mixed $correlationId = null;
    public string $idempotencyKey;
    public mixed $productId = null;
}

/** Request payload for Iri#create. */
class IriCreateData
{
    public string $connector_id;
    public mixed $correlationId = null;
    public string $idempotencyKey;
    public mixed $productId = null;
}

/** IrisCapability entity data model. */
class IrisCapability
{
    public string $capability;
    public string $correlationId;
    public mixed $errorCode = null;
    public mixed $externalProductId = null;
    public string $externalUserId;
    public ?string $id = null;
    public string $idempotencyKey;
    public ?array $input = null;
    public mixed $membershipId = null;
    public mixed $message = null;
    public bool $ok;
    public mixed $platformAccountId = null;
    public mixed $platformLinkId = null;
    public string $productScope;
    public ?array $requestedBy = null;
    public ?array $result = null;
    public ?bool $retryable = null;
}

/** Request payload for IrisCapability#create. */
class IrisCapabilityCreateData
{
    public string $id;
    public string $capability;
    public string $correlationId;
    public mixed $externalProductId = null;
    public string $externalUserId;
    public string $idempotencyKey;
    public ?array $input = null;
    public mixed $membershipId = null;
    public mixed $platformAccountId = null;
    public mixed $platformLinkId = null;
    public string $productScope;
    public ?array $requestedBy = null;
}

/** IrisChat entity data model. */
class IrisChat
{
    public ?array $artifacts = null;
    public string $correlationId;
    public string $idempotencyKey;
    public string $message;
    public string $mode;
    public ?bool $ok = null;
    public ?array $pageContext = null;
    public mixed $productId = null;
    public string $runtimeStatus;
    public mixed $sessionId = null;
}

/** Request payload for IrisChat#create. */
class IrisChatCreateData
{
    public string $correlationId;
    public string $idempotencyKey;
    public string $message;
    public ?array $pageContext = null;
    public mixed $productId = null;
    public mixed $sessionId = null;
}

/** IrisConnector entity data model. */
class IrisConnector
{
    public ?array $connectors = null;
}

/** Request payload for IrisConnector#list. */
class IrisConnectorListMatch
{
    public ?array $connectors = null;
}

/** IrisStatus entity data model. */
class IrisStatus
{
    public ?array $connectorsPreview = null;
    public mixed $product = null;
    public array $status;
    public ?array $tasksPreview = null;
}

/** Request payload for IrisStatus#list. */
class IrisStatusListMatch
{
    public ?string $product_id = null;
}

/** IrisTask entity data model. */
class IrisTask
{
    public ?bool $approvalRequired = null;
    public ?string $cadence = null;
    public mixed $capability = null;
    public ?array $completed = null;
    public ?string $description = null;
    public ?array $discover = null;
    public mixed $productId = null;
    public ?array $recurring = null;
    public ?array $requiredConnectors = null;
    public string $title;
}

/** Request payload for IrisTask#list. */
class IrisTaskListMatch
{
    public ?string $product_id = null;
}

/** Request payload for IrisTask#create. */
class IrisTaskCreateData
{
    public ?bool $approvalRequired = null;
    public ?string $cadence = null;
    public mixed $capability = null;
    public ?string $description = null;
    public mixed $productId = null;
    public ?array $requiredConnectors = null;
    public string $title;
}

/** IrisUsage entity data model. */
class IrisUsage
{
    public ?int $eventCount = null;
    public ?array $events = null;
    public mixed $membershipId = null;
    public ?string $productScope = null;
}

/** Request payload for IrisUsage#list. */
class IrisUsageListMatch
{
    public ?int $eventCount = null;
    public ?array $events = null;
    public mixed $membershipId = null;
    public ?string $productScope = null;
}

/** Landing entity data model. */
class Landing
{
    public string $file;
}

/** Request payload for Landing#create. */
class LandingCreateData
{
    public int $index;
    public ?string $product_id = null;
    public string $file;
}

/** LandingStat entity data model. */
class LandingStat
{
    public array $landing;
    public array $microhub;
}

/** Request payload for LandingStat#load. */
class LandingStatLoadMatch
{
    public string $slug;
    public ?string $product_id = null;
}

/** LandingStatus entity data model. */
class LandingStatus
{
    public mixed $errorMessage = null;
    public string $landingStatus;
    public string $microhubStatus;
}

/** Request payload for LandingStatus#load. */
class LandingStatusLoadMatch
{
    public ?string $product_id = null;
}

/** LinkInBio entity data model. */
class LinkInBio
{
    public string $linkInBioType;
    public string $redirectUrl;
    public string $slug;
}

/** Request payload for LinkInBio#load. */
class LinkInBioLoadMatch
{
    public string $slug;
}

/** LinkInDm entity data model. */
class LinkInDm
{
    public string $linkInDmsType;
    public string $redirectUrl;
    public string $slug;
}

/** Request payload for LinkInDm#load. */
class LinkInDmLoadMatch
{
    public string $slug;
}

/** LinkInPost entity data model. */
class LinkInPost
{
    public string $linkInPostsType;
    public string $redirectUrl;
    public bool $showLinkInFirstComment;
    public string $slug;
}

/** Request payload for LinkInPost#load. */
class LinkInPostLoadMatch
{
    public string $slug;
}

/** LinkUser entity data model. */
class LinkUser
{
    public ?bool $already_linked = null;
    public string $onboarding_data_id;
    public bool $success;
}

/** Request payload for LinkUser#create. */
class LinkUserCreateData
{
    public string $onboarding_data_id;
}

/** MediaAsset entity data model. */
class MediaAsset
{
    public string $category;
    public string $createdAt;
    public ?string $description = null;
    public string $file;
    public string $id;
    public array $media_assets;
    public mixed $onboardingDataId = null;
    public string $onboarding_data_id;
    public mixed $productId = null;
    public ?string $product_id = null;
    public string $source;
    public string $type;
    public string $updatedAt;
    public string $url;
    public mixed $usedAt = null;
    public mixed $veo3VideoId = null;
}

/** Request payload for MediaAsset#load. */
class MediaAssetLoadMatch
{
    public string $id;
}

/** Request payload for MediaAsset#create. */
class MediaAssetCreateData
{
    public string $category;
    public string $createdAt;
    public ?string $description = null;
    public string $file;
    public string $id;
    public array $media_assets;
    public mixed $onboardingDataId = null;
    public string $onboarding_data_id;
    public mixed $productId = null;
    public ?string $product_id = null;
    public string $source;
    public string $type;
    public string $updatedAt;
    public string $url;
    public mixed $usedAt = null;
    public mixed $veo3VideoId = null;
}

/** Men entity data model. */
class Men
{
}

/** Request payload for Men#list. */
class MenListMatch
{
    public mixed $bookmarked = null;
    public mixed $category = null;
    public ?int $limit = null;
    public ?int $offset = null;
    public ?string $product_id = null;
}

/** Microdrama entity data model. */
class Microdrama
{
    public array $evidence;
    public int $expected_revision;
    public string $idempotency_key;
    public ?array $issues = null;
    public string $reason;
    public string $role;
    public array $scores;
    public ?string $selected_premise_id = null;
    public string $stage;
    public string $status;
    public string $subject_hash;
    public ?string $title = null;
    public string $verdict;
}

/** Request payload for Microdrama#load. */
class MicrodramaLoadMatch
{
    public string $episode_id;
}

/** Request payload for Microdrama#create. */
class MicrodramaCreateData
{
    public string $episode_id;
    public array $evidence;
    public int $expected_revision;
    public string $idempotency_key;
    public ?array $issues = null;
    public string $reason;
    public string $role;
    public array $scores;
    public ?string $selected_premise_id = null;
    public string $stage;
    public string $status;
    public string $subject_hash;
    public ?string $title = null;
    public string $verdict;
}

/** Request payload for Microdrama#update. */
class MicrodramaUpdateData
{
    public string $episode_id;
    public ?int $expected_revision = null;
    public ?string $selected_premise_id = null;
    public ?string $title = null;
}

/** MicrohubPublic entity data model. */
class MicrohubPublic
{
    public mixed $bio = null;
    public mixed $ctaButtonText = null;
    public mixed $ctaDescription = null;
    public mixed $ctaLink = null;
    public mixed $ctaTitle = null;
    public mixed $headerImageUrl = null;
    public ?array $links = null;
    public ?string $name = null;
    public mixed $profileImageUrl = null;
    public string $slug;
    public ?array $socialLinks = null;
    public ?array $testimonials = null;
}

/** Request payload for MicrohubPublic#load. */
class MicrohubPublicLoadMatch
{
    public string $slug;
}

/** OnboardingStatus entity data model. */
class OnboardingStatus
{
    public ?int $comments = null;
    public mixed $cover_image_url = null;
    public string $id;
    public ?int $likes = null;
    public string $platform;
    public mixed $video_url = null;
    public ?int $views = null;
}

/** Request payload for OnboardingStatus#list. */
class OnboardingStatusListMatch
{
    public mixed $account_type = null;
    public string $oid;
}

/** OnboardingV6 entity data model. */
class OnboardingV6
{
}

/** Request payload for OnboardingV6#remove. */
class OnboardingV6RemoveMatch
{
    public string $media_asset_id;
    public string $onboarding_data_id;
}

/** PaidUser entity data model. */
class PaidUser
{
    public int $agents_count;
    public ?int $assigned_agents_count = null;
    public mixed $auto_schedule_enabled;
    public int $credits;
    public int $effective_agents_count;
    public string $email;
    public string $id;
    public ?bool $is_internal_user = null;
    public ?bool $is_migrated_user = null;
    public mixed $membership;
    public int $scheduled_queue_count;
    public mixed $subscription_details = null;
    public mixed $subscription_status;
}

/** Request payload for PaidUser#list. */
class PaidUserListMatch
{
    public ?int $agents_count = null;
    public ?int $assigned_agents_count = null;
    public mixed $auto_schedule_enabled = null;
    public ?int $credits = null;
    public ?int $effective_agents_count = null;
    public ?string $email = null;
    public ?string $id = null;
    public ?bool $is_internal_user = null;
    public ?bool $is_migrated_user = null;
    public mixed $membership = null;
    public ?int $scheduled_queue_count = null;
    public mixed $subscription_details = null;
    public mixed $subscription_status = null;
}

/** Pexel entity data model. */
class Pexel
{
}

/** Request payload for Pexel#list. */
class PexelListMatch
{
    public ?int $count = null;
    public ?string $media_type = null;
    public ?string $orientation = null;
    public ?int $page = null;
    public ?string $query = null;
}

/** PhoneAdminAvailableAgentSource entity data model. */
class PhoneAdminAvailableAgentSource
{
    public int $available_count;
    public string $pc_name;
}

/** Request payload for PhoneAdminAvailableAgentSource#list. */
class PhoneAdminAvailableAgentSourceListMatch
{
    public ?int $available_count = null;
    public ?string $pc_name = null;
}

/** Product entity data model. */
class Product
{
    public int $agent_count;
    public array $agents;
    public mixed $createdAt = null;
    public mixed $demoVideos = null;
    public ?string $description = null;
    public mixed $favicon_url = null;
    public mixed $howItWorks = null;
    public mixed $how_it_works = null;
    public string $id;
    public mixed $images = null;
    public ?int $initial_agents = null;
    public mixed $instagramHandle = null;
    public mixed $instagram_handle = null;
    public mixed $isActive = null;
    public mixed $isApp = null;
    public bool $is_active;
    public ?bool $is_app = null;
    public mixed $language = null;
    public mixed $mediaAssets = null;
    public mixed $media_asset_ids = null;
    public mixed $media_assets = null;
    public string $name;
    public mixed $otherInstructions = null;
    public mixed $other_instructions = null;
    public mixed $outroVideo = null;
    public mixed $pexelsVideos = null;
    public mixed $pricing = null;
    public mixed $pricingAndOffers = null;
    public mixed $pricing_and_offers = null;
    public ?array $product_demo_ids = null;
    public array $product_details;
    public string $product_id;
    public string $product_name;
    public string $product_url;
    public mixed $pronunciation = null;
    public ?bool $regenerate_sora2 = null;
    public mixed $repostSource = null;
    public mixed $repost_source = null;
    public mixed $screenshot_url = null;
    public ?array $social_post_ids = null;
    public mixed $targetAudience = null;
    public mixed $target_audience = null;
    public mixed $templateProductId = null;
    public mixed $tiktokHandle = null;
    public mixed $tiktok_handle = null;
    public int $total_count;
    public mixed $updatedAt = null;
    public string $url;
    public string $userId;
}

/** Request payload for Product#load. */
class ProductLoadMatch
{
    public string $id;
}

/** Request payload for Product#list. */
class ProductListMatch
{
    public ?int $agent_count = null;
    public ?array $agents = null;
    public mixed $createdAt = null;
    public mixed $demoVideos = null;
    public ?string $description = null;
    public mixed $favicon_url = null;
    public mixed $howItWorks = null;
    public mixed $how_it_works = null;
    public ?string $id = null;
    public mixed $images = null;
    public ?int $initial_agents = null;
    public mixed $instagramHandle = null;
    public mixed $instagram_handle = null;
    public mixed $isActive = null;
    public mixed $isApp = null;
    public ?bool $is_active = null;
    public ?bool $is_app = null;
    public mixed $language = null;
    public mixed $mediaAssets = null;
    public mixed $media_asset_ids = null;
    public mixed $media_assets = null;
    public ?string $name = null;
    public mixed $otherInstructions = null;
    public mixed $other_instructions = null;
    public mixed $outroVideo = null;
    public mixed $pexelsVideos = null;
    public mixed $pricing = null;
    public mixed $pricingAndOffers = null;
    public mixed $pricing_and_offers = null;
    public ?array $product_demo_ids = null;
    public ?array $product_details = null;
    public ?string $product_id = null;
    public ?string $product_name = null;
    public ?string $product_url = null;
    public mixed $pronunciation = null;
    public ?bool $regenerate_sora2 = null;
    public mixed $repostSource = null;
    public mixed $repost_source = null;
    public mixed $screenshot_url = null;
    public ?array $social_post_ids = null;
    public mixed $targetAudience = null;
    public mixed $target_audience = null;
    public mixed $templateProductId = null;
    public mixed $tiktokHandle = null;
    public mixed $tiktok_handle = null;
    public ?int $total_count = null;
    public mixed $updatedAt = null;
    public ?string $url = null;
    public ?string $userId = null;
}

/** Request payload for Product#create. */
class ProductCreateData
{
    public mixed $favicon_url = null;
    public ?int $initial_agents = null;
    public ?array $product_demo_ids = null;
    public array $product_details;
    public string $product_url;
    public mixed $screenshot_url = null;
    public ?array $social_post_ids = null;
}

/** Request payload for Product#update. */
class ProductUpdateData
{
    public string $id;
    public ?string $description = null;
    public mixed $how_it_works = null;
    public mixed $instagram_handle = null;
    public ?bool $is_app = null;
    public mixed $language = null;
    public mixed $media_asset_ids = null;
    public ?string $name = null;
    public mixed $other_instructions = null;
    public mixed $pricing_and_offers = null;
    public mixed $pronunciation = null;
    public ?bool $regenerate_sora2 = null;
    public mixed $repost_source = null;
    public mixed $target_audience = null;
    public mixed $tiktok_handle = null;
    public ?string $url = null;
}

/** Request payload for Product#remove. */
class ProductRemoveMatch
{
    public string $id;
}

/** ProductDashboard entity data model. */
class ProductDashboard
{
    public array $agents;
    public string $date;
    public array $pagination;
    public mixed $phone_admin_error = null;
    public array $products;
    public mixed $selected_product;
    public array $summary;
}

/** Request payload for ProductDashboard#list. */
class ProductDashboardListMatch
{
    public mixed $date = null;
    public ?int $page = null;
    public ?int $page_size = null;
    public ?string $product_id = null;
    public mixed $search = null;
}

/** ProductDashboardView entity data model. */
class ProductDashboardView
{
    public string $date;
    public int $views;
}

/** Request payload for ProductDashboardView#list. */
class ProductDashboardViewListMatch
{
    public mixed $date = null;
    public string $product_id;
    public ?int $range = null;
}

/** ProductDemo entity data model. */
class ProductDemo
{
    public string $created_at;
    public ?string $description = null;
    public string $id;
    public string $source;
    public string $type;
    public string $url;
}

/** Request payload for ProductDemo#list. */
class ProductDemoListMatch
{
    public ?string $product_id = null;
}

/** ProductLanding entity data model. */
class ProductLanding
{
    public mixed $bio = null;
    public bool $commentingOnMyPosts;
    public bool $commentingOnOthersPosts;
    public mixed $ctaButtonText = null;
    public mixed $ctaDescription = null;
    public mixed $ctaLink = null;
    public mixed $ctaTitle = null;
    public bool $dmCommenters;
    public mixed $dmInitialMessagePrompt = null;
    public mixed $dmOngoingResponsePrompt = null;
    public mixed $firstCommentTextBeforeLink = null;
    public mixed $headerImageUrl = null;
    public string $id;
    public mixed $landingHtmlUrl = null;
    public mixed $landingLastGeneratedAt = null;
    public mixed $landingReferenceScreenshotUrl = null;
    public mixed $landingScreenshotUrl = null;
    public string $landingStatus;
    public string $landingUrl;
    public string $linkInBioType;
    public string $linkInDmsType;
    public string $linkInPostsType;
    public mixed $links = null;
    public mixed $microhubBio = null;
    public mixed $microhubCtaButtonText = null;
    public mixed $microhubCtaDescription = null;
    public mixed $microhubCtaLink = null;
    public mixed $microhubCtaTitle = null;
    public mixed $microhubHeaderImageUrl = null;
    public ?array $microhubLinks = null;
    public mixed $microhubName = null;
    public mixed $microhubProfileImageUrl = null;
    public mixed $microhubScreenshotUrl = null;
    public ?array $microhubSocialLinks = null;
    public string $microhubStatus;
    public ?array $microhubTestimonials = null;
    public string $microhubUrl;
    public mixed $myPostsStylePrompt = null;
    public ?string $name = null;
    public mixed $othersStylePrompt = null;
    public mixed $othersTargetMarketPrompt = null;
    public string $productLinkSelection;
    public mixed $productUrl = null;
    public mixed $profileImageUrl = null;
    public mixed $shortLink = null;
    public mixed $shortLinkKeyword = null;
    public bool $showLinkInFirstComment;
    public string $slug;
    public mixed $socialLinks = null;
    public mixed $testimonials = null;
}

/** Request payload for ProductLanding#list. */
class ProductLandingListMatch
{
    public ?string $product_id = null;
}

/** Request payload for ProductLanding#update. */
class ProductLandingUpdateData
{
    public ?string $product_id = null;
    public mixed $bio = null;
    public ?bool $commentingOnMyPosts = null;
    public ?bool $commentingOnOthersPosts = null;
    public mixed $ctaButtonText = null;
    public mixed $ctaDescription = null;
    public mixed $ctaLink = null;
    public mixed $ctaTitle = null;
    public ?bool $dmCommenters = null;
    public mixed $dmInitialMessagePrompt = null;
    public mixed $dmOngoingResponsePrompt = null;
    public mixed $firstCommentTextBeforeLink = null;
    public mixed $headerImageUrl = null;
    public ?string $linkInBioType = null;
    public ?string $linkInDmsType = null;
    public ?string $linkInPostsType = null;
    public mixed $links = null;
    public mixed $myPostsStylePrompt = null;
    public ?string $name = null;
    public mixed $othersStylePrompt = null;
    public mixed $othersTargetMarketPrompt = null;
    public ?string $productLinkSelection = null;
    public mixed $profileImageUrl = null;
    public mixed $shortLink = null;
    public mixed $shortLinkKeyword = null;
    public ?bool $showLinkInFirstComment = null;
    public ?string $slug = null;
    public mixed $socialLinks = null;
    public mixed $testimonials = null;
}

/** PublicResumeStatus entity data model. */
class PublicResumeStatus
{
    public ?bool $can_resume_prelogin = null;
    public ?bool $content_collection_ready = null;
    public mixed $current_step = null;
    public bool $exists;
    public mixed $flow_variant = null;
    public ?int $repost_content_count = null;
    public mixed $repost_source = null;
    public ?bool $requires_repost_content = null;
    public ?bool $skip_demo = null;
}

/** Request payload for PublicResumeStatus#load. */
class PublicResumeStatusLoadMatch
{
    public string $oid;
}

/** ReRollVideo entity data model. */
class ReRollVideo
{
    public string $queue_id;
    public ?bool $requires_polling = null;
    public ?bool $skip_credit_check = null;
    public array $video;
}

/** Request payload for ReRollVideo#create. */
class ReRollVideoCreateData
{
    public string $queue_id;
    public ?bool $skip_credit_check = null;
}

/** ReadRootGet entity data model. */
class ReadRootGet
{
}

/** Request payload for ReadRootGet#load. */
class ReadRootGetLoadMatch
{
}

/** RecordDemoBooked entity data model. */
class RecordDemoBooked
{
    public mixed $calendlyEventUri = null;
    public mixed $calendlyInviteeUri = null;
    public array $message;
    public array $session;
}

/** Request payload for RecordDemoBooked#create. */
class RecordDemoBookedCreateData
{
    public string $session_id;
    public mixed $calendlyEventUri = null;
    public mixed $calendlyInviteeUri = null;
}

/** RefreshStat entity data model. */
class RefreshStat
{
    public mixed $date_from = null;
    public mixed $date_to = null;
    public int $entries_found;
    public string $message;
    public string $provider;
    public string $status;
    public mixed $summary = null;
}

/** Request payload for RefreshStat#create. */
class RefreshStatCreateData
{
    public ?string $email = null;
    public ?string $user_id = null;
    public mixed $date_from = null;
    public mixed $date_to = null;
    public ?string $provider = null;
}

/** RemixerClipper entity data model. */
class RemixerClipper
{
}

/** Request payload for RemixerClipper#load. */
class RemixerClipperLoadMatch
{
}

/** Request payload for RemixerClipper#create. */
class RemixerClipperCreateData
{
    public string $identifier;
}

/** ResetProduct entity data model. */
class ResetProduct
{
}

/** Request payload for ResetProduct#load. */
class ResetProductLoadMatch
{
}

/** Request payload for ResetProduct#create. */
class ResetProductCreateData
{
}

/** RetryWebsiteScrape entity data model. */
class RetryWebsiteScrape
{
    public ?string $flow_variant = null;
    public string $onboarding_data_id;
    public ?bool $skip_demo = null;
    public string $status;
    public bool $success;
    public string $url;
}

/** Request payload for RetryWebsiteScrape#create. */
class RetryWebsiteScrapeCreateData
{
    public string $onboarding_data_id;
    public string $url;
}

/** SaveSurvey entity data model. */
class SaveSurvey
{
    public ?bool $email_sent = null;
    public string $onboarding_data_id;
    public bool $success;
    public array $survey;
}

/** Request payload for SaveSurvey#create. */
class SaveSurveyCreateData
{
    public string $onboarding_data_id;
    public array $survey;
}

/** ScanSocial entity data model. */
class ScanSocial
{
    public mixed $instagram_handle = null;
    public string $onboarding_data_id;
    public string $product_id;
    public string $status;
    public bool $success;
    public ?string $task_id = null;
    public mixed $tiktok_handle = null;
}

/** Request payload for ScanSocial#create. */
class ScanSocialCreateData
{
    public mixed $instagram_handle = null;
    public string $onboarding_data_id;
    public ?string $product_id = null;
    public mixed $tiktok_handle;
}

/** ScanSocialsPublic entity data model. */
class ScanSocialsPublic
{
    public mixed $instagram_handle = null;
    public mixed $message = null;
    public string $onboarding_data_id;
    public string $status;
    public bool $success;
    public mixed $tiktok_handle = null;
}

/** Request payload for ScanSocialsPublic#create. */
class ScanSocialsPublicCreateData
{
    public mixed $instagram_handle = null;
    public string $onboarding_data_id;
    public mixed $tiktok_handle = null;
}

/** ScanSocialsStatus entity data model. */
class ScanSocialsStatus
{
    public ?int $ads_count = null;
    public string $onboarding_data_id;
    public ?string $product_id = null;
    public string $status;
    public ?string $task_id = null;
}

/** Request payload for ScanSocialsStatus#load. */
class ScanSocialsStatusLoadMatch
{
    public ?string $onboarding_data_id = null;
    public ?string $product_id = null;
}

/** ScheduleV2 entity data model. */
class ScheduleV2
{
    public mixed $agent = null;
    public mixed $comment = null;
    public string $created_at;
    public string $id;
    public mixed $instagram_posted_by = null;
    public mixed $instagram_posted_url = null;
    public ?string $instagram_scraped_social_post_id = null;
    public ?bool $is_instagram_posted = null;
    public ?bool $is_tiktok_posted = null;
    public ?bool $is_youtube_posted = null;
    public array $reorders;
    public mixed $results = null;
    public string $scheduled_datetime;
    public string $source_type;
    public string $status;
    public mixed $tiktok_posted_by = null;
    public mixed $tiktok_posted_url = null;
    public ?string $tiktok_scraped_social_post_id = null;
    public mixed $video = null;
    public string $video_id;
    public mixed $youtube_posted_by = null;
    public mixed $youtube_posted_url = null;
    public ?string $youtube_scraped_social_post_id = null;
}

/** Request payload for ScheduleV2#load. */
class ScheduleV2LoadMatch
{
    public ?bool $all_product = null;
    public ?int $day = null;
    public ?int $limit = null;
    public ?int $offset = null;
    public ?string $product_id = null;
}

/** Request payload for ScheduleV2#list. */
class ScheduleV2ListMatch
{
    public ?bool $all_product = null;
    public ?int $limit = null;
    public ?int $offset = null;
    public ?string $product_id = null;
    public mixed $status = null;
}

/** Request payload for ScheduleV2#create. */
class ScheduleV2CreateData
{
    public mixed $agent = null;
    public mixed $comment = null;
    public string $created_at;
    public string $id;
    public mixed $instagram_posted_by = null;
    public mixed $instagram_posted_url = null;
    public ?string $instagram_scraped_social_post_id = null;
    public ?bool $is_instagram_posted = null;
    public ?bool $is_tiktok_posted = null;
    public ?bool $is_youtube_posted = null;
    public array $reorders;
    public mixed $results = null;
    public string $scheduled_datetime;
    public string $source_type;
    public string $status;
    public mixed $tiktok_posted_by = null;
    public mixed $tiktok_posted_url = null;
    public ?string $tiktok_scraped_social_post_id = null;
    public mixed $video = null;
    public string $video_id;
    public mixed $youtube_posted_by = null;
    public mixed $youtube_posted_url = null;
    public ?string $youtube_scraped_social_post_id = null;
}

/** Request payload for ScheduleV2#update. */
class ScheduleV2UpdateData
{
    public string $queue_id;
    public ?string $video_id = null;
}

/** Request payload for ScheduleV2#remove. */
class ScheduleV2RemoveMatch
{
    public string $queue_id;
}

/** Scrape entity data model. */
class Scrape
{
    public string $old_product_id;
    public string $onboarding_data_id;
    public string $status;
    public bool $success;
    public string $url;
}

/** Request payload for Scrape#create. */
class ScrapeCreateData
{
    public string $old_product_id;
    public string $url;
}

/** ScrapeWebsitePublic entity data model. */
class ScrapeWebsitePublic
{
    public ?string $flow_variant = null;
    public string $onboarding_data_id;
    public ?bool $skip_demo = null;
    public string $status;
    public bool $success;
    public string $url;
}

/** Request payload for ScrapeWebsitePublic#create. */
class ScrapeWebsitePublicCreateData
{
    public mixed $context = null;
    public mixed $flow = null;
    public ?bool $skip_demo = null;
    public string $url;
}

/** ScrapedData entity data model. */
class ScrapedData
{
    public string $description;
    public mixed $homepageVideoUrl = null;
    public string $howItWorks;
    public array $imageUrls;
    public mixed $instagram_username = null;
    public ?array $mediaAssets = null;
    public string $name;
    public string $pricingAndOffers;
    public string $targetAudience;
    public string $url;
}

/** Request payload for ScrapedData#create. */
class ScrapedDataCreateData
{
    public mixed $instagram_username = null;
    public string $url;
}

/** ScrapingStatus entity data model. */
class ScrapingStatus
{
}

/** Request payload for ScrapingStatus#load. */
class ScrapingStatusLoadMatch
{
}

/** SelfServeActivate entity data model. */
class SelfServeActivate
{
    public string $onboarding_data_id;
    public ?bool $redirect_to_stripe = null;
    public mixed $stripe_checkout_url = null;
    public bool $success;
}

/** Request payload for SelfServeActivate#create. */
class SelfServeActivateCreateData
{
    public string $onboarding_data_id;
}

/** Seo entity data model. */
class Seo
{
}

/** Request payload for Seo#load. */
class SeoLoadMatch
{
}

/** SeoAiMention entity data model. */
class SeoAiMention
{
    public string $bucket;
    public string $domain_type;
    public string $dominant_domain;
    public string $engine;
    public array $evidence;
    public string $geo;
    public string $language;
    public string $primary_url;
    public string $prompt_text;
    public string $run_week;
    public array $secondary_urls;
}

/** Request payload for SeoAiMention#list. */
class SeoAiMentionListMatch
{
    public ?int $limit = null;
    public ?string $product_id = null;
}

/** SeoBacklink entity data model. */
class SeoBacklink
{
    public string $anchor_text;
    public string $first_seen;
    public string $referring_domain;
    public string $status;
    public string $target_page;
}

/** Request payload for SeoBacklink#list. */
class SeoBacklinkListMatch
{
    public ?int $limit = null;
    public ?string $product_id = null;
}

/** SeoKeyword entity data model. */
class SeoKeyword
{
    public string $blog_page;
    public float $current_position;
    public string $keyword;
    public string $keyword_group;
    public float $position_change;
}

/** Request payload for SeoKeyword#list. */
class SeoKeywordListMatch
{
    public ?int $day = null;
    public ?int $limit = null;
    public ?string $product_id = null;
}

/** SeoOverview entity data model. */
class SeoOverview
{
    public float $clicks;
    public float $ctr;
    public string $date;
    public float $impressions;
    public float $position;
}

/** Request payload for SeoOverview#list. */
class SeoOverviewListMatch
{
    public ?int $day = null;
    public ?string $product_id = null;
}

/** SeoTraffic entity data model. */
class SeoTraffic
{
    public string $end_date;
    public array $series;
    public string $site_url;
    public string $start_date;
    public array $top_countries;
    public array $top_pages;
    public array $top_queries;
    public array $totals;
}

/** Request payload for SeoTraffic#list. */
class SeoTrafficListMatch
{
    public ?int $day = null;
    public ?string $product_id = null;
    public ?int $top_limit = null;
}

/** ShareAccessLink entity data model. */
class ShareAccessLink
{
    public string $share_token;
    public string $share_url;
}

/** Request payload for ShareAccessLink#create. */
class ShareAccessLinkCreateData
{
    public string $share_token;
    public string $share_url;
}

/** Site entity data model. */
class Site
{
}

/** Request payload for Site#load. */
class SiteLoadMatch
{
}

/** Slide entity data model. */
class Slide
{
    public mixed $caption = null;
    public ?string $id = null;
    public mixed $prompt = null;
}

/** Request payload for Slide#create. */
class SlideCreateData
{
    public string $carousel_id;
    public int $slide_index;
    public mixed $caption = null;
    public mixed $prompt = null;
    public mixed $image_model = null;
}

/** Request payload for Slide#update. */
class SlideUpdateData
{
    public string $carousel_id;
    public int $id;
    public mixed $caption = null;
    public mixed $prompt = null;
}

/** SlugValidation entity data model. */
class SlugValidation
{
    public mixed $reason = null;
    public bool $valid;
}

/** Request payload for SlugValidation#load. */
class SlugValidationLoadMatch
{
    public string $slug;
    public ?string $product_id = null;
}

/** Social entity data model. */
class Social
{
    public string $code;
    public string $code_verifier;
    public string $createdAt;
    public string $id;
    public string $platform;
    public string $platformUserId;
    public mixed $updatedAt = null;
    public string $userId;
    public ?string $username = null;
}

/** Request payload for Social#load. */
class SocialLoadMatch
{
    public mixed $code_challenge = null;
    public ?string $code_challenge_method = null;
}

/** Request payload for Social#list. */
class SocialListMatch
{
    public ?string $code = null;
    public ?string $code_verifier = null;
    public ?string $createdAt = null;
    public ?string $id = null;
    public ?string $platform = null;
    public ?string $platformUserId = null;
    public mixed $updatedAt = null;
    public ?string $userId = null;
    public ?string $username = null;
}

/** Request payload for Social#create. */
class SocialCreateData
{
    public string $code;
    public string $code_verifier;
}

/** Request payload for Social#remove. */
class SocialRemoveMatch
{
    public string $platform;
}

/** SocialScanPreview entity data model. */
class SocialScanPreview
{
    public mixed $instagram_handle = null;
    public array $posts;
    public bool $success;
    public mixed $tiktok_handle = null;
}

/** Request payload for SocialScanPreview#create. */
class SocialScanPreviewCreateData
{
    public mixed $instagram_handle = null;
    public mixed $tiktok_handle = null;
}

/** SocialScanProcess entity data model. */
class SocialScanProcess
{
    public array $posts;
    public string $product_id;
    public bool $success;
    public ?string $task_id = null;
}

/** Request payload for SocialScanProcess#create. */
class SocialScanProcessCreateData
{
    public array $posts;
    public string $product_id;
}

/** SocialScanSave entity data model. */
class SocialScanSave
{
    public array $media_asset_ids;
    public array $posts;
    public string $product_id;
    public bool $success;
}

/** Request payload for SocialScanSave#create. */
class SocialScanSaveCreateData
{
    public array $posts;
    public string $product_id;
}

/** Sora2Avatar entity data model. */
class Sora2Avatar
{
    public mixed $avatar_frame_url = null;
    public string $created_at;
    public ?int $current_step = null;
    public mixed $headshot_url = null;
    public string $id;
    public ?array $logs = null;
    public string $prompt_key;
    public mixed $run_output_dir = null;
    public string $selected_age_bucket;
    public string $selected_gender;
    public mixed $selected_prompt = null;
    public string $selected_race;
    public mixed $sora2_cameo_handle = null;
    public ?string $sora2_cameo_id = null;
    public mixed $sora2_cameo_link = null;
    public mixed $sora2_display_name = null;
    public ?string $sora2_task_id = null;
    public string $sora2_video_url;
    public string $updated_at;
}

/** Request payload for Sora2Avatar#load. */
class Sora2AvatarLoadMatch
{
    public string $id;
}

/** Request payload for Sora2Avatar#list. */
class Sora2AvatarListMatch
{
    public ?bool $completed_only = null;
    public mixed $current_step = null;
    public ?int $page = null;
    public ?int $page_size = null;
    public mixed $prompt_key = null;
    public mixed $search = null;
    public mixed $selected_age_bucket = null;
    public mixed $selected_gender = null;
    public mixed $selected_race = null;
}

/** Request payload for Sora2Avatar#create. */
class Sora2AvatarCreateData
{
    public mixed $avatar_frame_url = null;
    public ?int $current_step = null;
    public mixed $headshot_url = null;
    public ?array $logs = null;
    public string $prompt_key;
    public mixed $run_output_dir = null;
    public string $selected_age_bucket;
    public string $selected_gender;
    public mixed $selected_prompt = null;
    public string $selected_race;
    public mixed $sora2_cameo_handle = null;
    public ?string $sora2_cameo_id = null;
    public mixed $sora2_cameo_link = null;
    public mixed $sora2_display_name = null;
    public ?string $sora2_task_id = null;
    public string $sora2_video_url;
}

/** Request payload for Sora2Avatar#update. */
class Sora2AvatarUpdateData
{
    public string $id;
    public mixed $avatar_frame_url = null;
    public ?int $current_step = null;
    public mixed $headshot_url = null;
    public ?array $logs = null;
    public ?string $prompt_key = null;
    public mixed $run_output_dir = null;
    public ?string $selected_age_bucket = null;
    public ?string $selected_gender = null;
    public mixed $selected_prompt = null;
    public ?string $selected_race = null;
    public mixed $sora2_cameo_handle = null;
    public ?string $sora2_cameo_id = null;
    public mixed $sora2_cameo_link = null;
    public mixed $sora2_display_name = null;
    public ?string $sora2_task_id = null;
    public ?string $sora2_video_url = null;
}

/** Sora2AvatarAssetUpload entity data model. */
class Sora2AvatarAssetUpload
{
    public ?string $avatar_id = null;
    public string $file;
    public mixed $run_output_dir = null;
    public string $s3_key;
    public string $upload_type;
    public string $url;
}

/** Request payload for Sora2AvatarAssetUpload#create. */
class Sora2AvatarAssetUploadCreateData
{
    public ?string $avatar_id = null;
    public string $file;
    public mixed $run_output_dir = null;
    public string $s3_key;
    public string $upload_type;
    public string $url;
}

/** Sora2AvatarStat entity data model. */
class Sora2AvatarStat
{
    public array $by_age_bucket;
    public array $by_gender;
    public array $by_prompt_key;
    public array $by_race;
    public int $completed_avatars;
    public float $completion_rate;
    public int $total_avatars;
}

/** Request payload for Sora2AvatarStat#load. */
class Sora2AvatarStatLoadMatch
{
    public mixed $prompt_key = null;
    public mixed $selected_age_bucket = null;
    public mixed $selected_gender = null;
    public mixed $selected_race = null;
}

/** Stat entity data model. */
class Stat
{
}

/** Request payload for Stat#list. */
class StatListMatch
{
    public ?int $day = null;
}

/** StatsRefreshBackfill entity data model. */
class StatsRefreshBackfill
{
    public string $message;
    public string $status;
    public string $task_id;
}

/** Request payload for StatsRefreshBackfill#create. */
class StatsRefreshBackfillCreateData
{
    public ?int $day = null;
    public mixed $days = null;
    public mixed $user_emails = null;
}

/** StatsRefreshIssue entity data model. */
class StatsRefreshIssue
{
    public bool $aged_over_24h;
    public ?string $agent_id = null;
    public mixed $agent_name_snapshot = null;
    public string $first_detected_at;
    public string $id;
    public string $last_detected_at;
    public mixed $last_refresh_completed_at = null;
    public ?string $last_seen_run_id = null;
    public mixed $latest_error_message = null;
    public mixed $next_retry_at = null;
    public string $platform;
    public mixed $post_method = null;
    public mixed $post_url = null;
    public string $posted_date_et;
    public ?string $product_id = null;
    public mixed $product_name_snapshot = null;
    public string $reason_code;
    public mixed $resolved_at = null;
    public int $retry_count;
    public ?string $schedule_queue_id = null;
    public string $scheduled_datetime_utc;
    public bool $stale_after_sla;
    public string $status;
    public string $user_email_snapshot;
    public string $user_id;
}

/** Request payload for StatsRefreshIssue#list. */
class StatsRefreshIssueListMatch
{
    public mixed $date_from = null;
    public mixed $date_to = null;
    public ?int $limit = null;
    public ?int $offset = null;
    public mixed $platform = null;
    public mixed $posting_method = null;
    public mixed $query = null;
    public mixed $reason = null;
    public ?string $status = null;
}

/** StatsRefreshOverview entity data model. */
class StatsRefreshOverview
{
    public mixed $active_run = null;
    public int $aged_over_24h;
    public array $backlog_preview;
    public float $coverage_percent;
    public array $customer_counts;
    public string $date;
    public string $generated_at;
    public array $method_counts;
    public array $platform_counts;
    public int $platform_units_resolved;
    public int $platform_units_total;
    public int $platform_units_unresolved;
    public int $posted_entries;
    public array $reason_counts;
    public string $sla_deadline_et;
    public int $stale_after_sla;
    public array $top_affected_customers;
}

/** Request payload for StatsRefreshOverview#list. */
class StatsRefreshOverviewListMatch
{
    public mixed $date = null;
}

/** StatsRefreshRunSummary entity data model. */
class StatsRefreshRunSummary
{
    public ?string $celery_task_id = null;
    public mixed $completed_at = null;
    public int $entries_failed;
    public int $entries_skipped;
    public int $entries_total;
    public int $entries_updated;
    public mixed $error_summary_json = null;
    public string $id;
    public int $issues_opened;
    public int $issues_resolved;
    public int $platform_units_resolved;
    public int $platform_units_total;
    public int $platform_units_unresolved;
    public int $platform_updates_via_profile;
    public int $platform_updates_via_url;
    public mixed $provider = null;
    public mixed $refresh_trigger = null;
    public mixed $requested_by_email = null;
    public string $run_type;
    public string $started_at;
    public string $status;
    public mixed $target_date_et = null;
    public int $users_count;
}

/** Request payload for StatsRefreshRunSummary#list. */
class StatsRefreshRunSummaryListMatch
{
    public mixed $date_from = null;
    public mixed $date_to = null;
    public ?bool $include_global = null;
    public ?int $limit = null;
    public ?int $offset = null;
    public mixed $run_type = null;
    public mixed $status = null;
}

/** StatsRefreshTaskTrigger entity data model. */
class StatsRefreshTaskTrigger
{
    public string $message;
    public string $status;
    public string $target_date;
    public string $task_id;
    public ?int $users_count = null;
}

/** Request payload for StatsRefreshTaskTrigger#create. */
class StatsRefreshTaskTriggerCreateData
{
    public string $message;
    public string $status;
    public string $target_date;
    public string $task_id;
    public ?int $users_count = null;
}

/** Stripe entity data model. */
class Stripe
{
}

/** Request payload for Stripe#create. */
class StripeCreateData
{
    public mixed $chat_plan_id = null;
    public mixed $checkout_session_id = null;
    public mixed $coupon_id = null;
    public mixed $credits_per_unit = null;
    public mixed $membership = null;
    public mixed $onboarding_data_id = null;
    public mixed $quantity = null;
}

/** Style entity data model. */
class Style
{
}

/** Request payload for Style#load. */
class StyleLoadMatch
{
}

/** Template entity data model. */
class Template
{
}

/** Request payload for Template#load. */
class TemplateLoadMatch
{
}

/** TikTokCreatorInfo entity data model. */
class TikTokCreatorInfo
{
    public ?bool $commentDisabled = null;
    public mixed $creatorAvatarUrl = null;
    public mixed $creatorNickname = null;
    public mixed $creatorUsername = null;
    public ?bool $duetDisabled = null;
    public ?int $maxVideoPostDurationSec = null;
    public ?array $privacyLevelOptions = null;
    public ?bool $stitchDisabled = null;
}

/** Request payload for TikTokCreatorInfo#list. */
class TikTokCreatorInfoListMatch
{
    public ?bool $commentDisabled = null;
    public mixed $creatorAvatarUrl = null;
    public mixed $creatorNickname = null;
    public mixed $creatorUsername = null;
    public ?bool $duetDisabled = null;
    public ?int $maxVideoPostDurationSec = null;
    public ?array $privacyLevelOptions = null;
    public ?bool $stitchDisabled = null;
}

/** TopPost entity data model. */
class TopPost
{
    public int $comments;
    public string $id;
    public int $likes;
    public array $platforms;
    public string $scheduled_datetime;
    public string $user_email;
    public string $user_id;
    public int $views;
}

/** Request payload for TopPost#list. */
class TopPostListMatch
{
    public string $date;
}

/** UploadPostAgent entity data model. */
class UploadPostAgent
{
}

/** Request payload for UploadPostAgent#create. */
class UploadPostAgentCreateData
{
}

/** User entity data model. */
class User
{
    public mixed $accountType = null;
    public mixed $activatedByAdminAt = null;
    public mixed $activatedByAdminId = null;
    public array $agents;
    public mixed $agentsCount = null;
    public mixed $attribution = null;
    public mixed $avatarImageUrl = null;
    public mixed $avatarVoiceUrl = null;
    public string $createdAt;
    public ?int $credits = null;
    public string $email;
    public mixed $googleId = null;
    public ?bool $hasSeenScheduleWelcome = null;
    public string $id;
    public mixed $industry = null;
    public mixed $instagramId = null;
    public ?bool $isActivatedByAdmin = null;
    public ?bool $isAdmin = null;
    public mixed $isInternalUser = null;
    public mixed $isMigrated = null;
    public mixed $isResettingProduct = null;
    public mixed $membership = null;
    public string $name;
    public ?bool $partnerDirectLoginDisabled = null;
    public mixed $partnerExternalUserId = null;
    public mixed $partnerPolicyCode = null;
    public mixed $partnerSource = null;
    public mixed $picture = null;
    public mixed $stripeCustomerId = null;
    public mixed $stripeSubscriptionId = null;
    public mixed $subscriptionCurrentPeriodEnd = null;
    public mixed $subscriptionStatus = null;
    public int $totalCount;
    public string $updatedAt;
    public string $userId;
}

/** Request payload for User#load. */
class UserLoadMatch
{
    public string $id;
    public ?string $product_id = null;
}

/** Request payload for User#update. */
class UserUpdateData
{
    public mixed $accountType = null;
    public mixed $activatedByAdminAt = null;
    public mixed $activatedByAdminId = null;
    public ?array $agents = null;
    public mixed $agentsCount = null;
    public mixed $attribution = null;
    public mixed $avatarImageUrl = null;
    public mixed $avatarVoiceUrl = null;
    public ?string $createdAt = null;
    public ?int $credits = null;
    public ?string $email = null;
    public mixed $googleId = null;
    public ?bool $hasSeenScheduleWelcome = null;
    public ?string $id = null;
    public mixed $industry = null;
    public mixed $instagramId = null;
    public ?bool $isActivatedByAdmin = null;
    public ?bool $isAdmin = null;
    public mixed $isInternalUser = null;
    public mixed $isMigrated = null;
    public mixed $isResettingProduct = null;
    public mixed $membership = null;
    public ?string $name = null;
    public ?bool $partnerDirectLoginDisabled = null;
    public mixed $partnerExternalUserId = null;
    public mixed $partnerPolicyCode = null;
    public mixed $partnerSource = null;
    public mixed $picture = null;
    public mixed $stripeCustomerId = null;
    public mixed $stripeSubscriptionId = null;
    public mixed $subscriptionCurrentPeriodEnd = null;
    public mixed $subscriptionStatus = null;
    public ?int $totalCount = null;
    public ?string $updatedAt = null;
    public ?string $userId = null;
}

/** UserAgent entity data model. */
class UserAgent
{
    public array $agent;
    public string $assigned_at;
    public string $assignment_id;
    public mixed $expires_at = null;
    public ?string $id = null;
    public string $status;
}

/** Request payload for UserAgent#list. */
class UserAgentListMatch
{
    public string $id;
    public ?int $limit = null;
    public ?int $offset = null;
    public ?string $product_id = null;
}

/** Request payload for UserAgent#create. */
class UserAgentCreateData
{
    public string $id;
    public ?string $agent_id = null;
    public mixed $phone_admin_pc_name = null;
    public ?string $product_id = null;
    public array $agent;
    public string $assigned_at;
    public string $assignment_id;
    public mixed $expires_at = null;
    public string $status;
}

/** UserHealthDetail entity data model. */
class UserHealthDetail
{
    public mixed $account_type;
    public bool $activated;
    public mixed $activated_by_admin_at = null;
    public ?string $activated_by_admin_id = null;
    public mixed $admin_notes = null;
    public ?int $agents_count = null;
    public array $assigned_agents;
    public int $assigned_agents_count;
    public ?int $assigned_agents_preview_limit = null;
    public ?bool $assigned_agents_truncated = null;
    public bool $auto_schedule_enabled;
    public ?int $comments_expected_per_day = null;
    public mixed $comments_fix_block_reason = null;
    public ?bool $comments_fix_ready = null;
    public ?int $comments_today_failed = null;
    public ?int $comments_today_posted = null;
    public ?int $comments_today_scheduled = null;
    public ?int $comments_yesterday_failed = null;
    public ?int $comments_yesterday_posted = null;
    public ?int $comments_yesterday_total = null;
    public string $created_at;
    public int $credits;
    public int $effective_posted_video_reuse_percent;
    public string $email;
    public int $expected_agents_count;
    public string $id;
    public bool $is_activated_by_admin;
    public bool $is_admin;
    public ?bool $is_bookmarked = null;
    public bool $is_internal_user;
    public bool $is_migrated;
    public mixed $landing_slug = null;
    public mixed $landing_status = null;
    public mixed $landing_url = null;
    public mixed $membership;
    public mixed $microhub_status = null;
    public mixed $microhub_url = null;
    public string $name;
    public string $onboarding_flow;
    public mixed $posted_video_reuse_percent = null;
    public string $product_id;
    public mixed $product_name;
    public mixed $product_url;
    public mixed $subscription_status;
    public mixed $survey_data = null;
    public int $today_failed;
    public int $today_posted;
    public int $today_scheduled;
    public int $tomorrow_capacity;
    public int $tomorrow_scheduled;
    public int $videos_completed;
    public int $videos_failed;
    public int $videos_pending;
    public int $videos_stale;
    public int $videos_total;
    public int $yesterday_failed;
    public array $yesterday_failed_entries;
    public int $yesterday_posted;
    public int $yesterday_total;
}

/** Request payload for UserHealthDetail#list. */
class UserHealthDetailListMatch
{
    public string $id;
    public ?int $assigned_agents_preview_limit = null;
    public ?string $product_id = null;
}

/** UserWithAvatarSubmission entity data model. */
class UserWithAvatarSubmission
{
    public string $avatar_image_url;
    public string $avatar_voice_url;
    public string $created_at;
    public string $email;
    public string $id;
    public string $name;
}

/** Request payload for UserWithAvatarSubmission#list. */
class UserWithAvatarSubmissionListMatch
{
    public ?string $avatar_image_url = null;
    public ?string $avatar_voice_url = null;
    public ?string $created_at = null;
    public ?string $email = null;
    public ?string $id = null;
    public ?string $name = null;
}

/** UsersHealth entity data model. */
class UsersHealth
{
    public mixed $account_type;
    public mixed $admin_notes = null;
    public int $agents_count;
    public string $agents_health;
    public mixed $agents_issue;
    public int $assigned_agents_count;
    public bool $auto_schedule_enabled;
    public string $auto_schedule_health;
    public mixed $auto_schedule_issue;
    public string $auto_schedule_today_health;
    public mixed $auto_schedule_today_issue;
    public string $created_at;
    public string $email;
    public int $expected_agents_count;
    public string $id;
    public ?bool $is_bookmarked = null;
    public bool $is_internal_user;
    public bool $is_migrated;
    public mixed $membership;
    public string $name;
    public string $posts_health;
    public mixed $posts_issue;
    public string $posts_today_health;
    public mixed $posts_today_issue;
    public mixed $subscription_status;
    public int $today_expected_count;
    public int $today_failed_count;
    public int $today_scheduled_count;
    public int $today_total_count;
    public int $tomorrow_expected_count;
    public int $tomorrow_scheduled_count;
    public int $yesterday_failed_count;
    public int $yesterday_total_count;
}

/** Request payload for UsersHealth#list. */
class UsersHealthListMatch
{
    public ?bool $include_internal_user = null;
    public ?bool $include_migrated_user = null;
}

/** Video entity data model. */
class Video
{
    public ?string $agent_id = null;
    public mixed $bookmarked = null;
    public mixed $captions = null;
    public mixed $carousel_data = null;
    public string $created_at;
    public ?float $duration = null;
    public mixed $generation_status = null;
    public string $id;
    public mixed $image_prompt = null;
    public ?bool $is_onboarding = null;
    public ?bool $is_template = null;
    public mixed $main_avatar = null;
    public mixed $main_prompt = null;
    public ?string $media_asset_id = null;
    public ?string $product_id = null;
    public ?string $reel_id = null;
    public mixed $thumbnail_url = null;
    public string $title;
    public mixed $type = null;
    public mixed $updated_at = null;
    public string $url;
    public ?string $user_id = null;
    public string $video_id;
}

/** Request payload for Video#load. */
class VideoLoadMatch
{
    public string $id;
}

/** Request payload for Video#create. */
class VideoCreateData
{
    public ?string $agent_id = null;
    public mixed $bookmarked = null;
    public mixed $captions;
    public mixed $carousel_data = null;
    public ?float $duration = null;
    public mixed $generation_status = null;
    public mixed $image_prompt = null;
    public ?bool $is_onboarding = null;
    public ?bool $is_template = null;
    public mixed $main_prompt = null;
    public ?string $media_asset_id = null;
    public ?string $product_id = null;
    public ?string $reel_id = null;
    public mixed $thumbnail_url = null;
    public string $title;
    public mixed $type = null;
    public string $url;
    public ?string $user_id = null;
    public string $video_id;
}

/** Request payload for Video#update. */
class VideoUpdateData
{
    public string $id;
    public ?string $agent_id = null;
    public mixed $bookmarked = null;
    public mixed $captions = null;
    public mixed $carousel_data = null;
    public ?float $duration = null;
    public mixed $generation_status = null;
    public mixed $image_prompt = null;
    public ?bool $is_onboarding = null;
    public ?bool $is_template = null;
    public mixed $main_prompt = null;
    public ?string $media_asset_id = null;
    public ?string $product_id = null;
    public ?string $reel_id = null;
    public mixed $thumbnail_url = null;
    public ?string $title = null;
    public mixed $type = null;
    public ?string $url = null;
    public ?string $user_id = null;
}

/** Request payload for Video#remove. */
class VideoRemoveMatch
{
    public string $id;
}

/** VideoRemixerWorker entity data model. */
class VideoRemixerWorker
{
    public ?string $captions_ass = null;
    public ?string $captions_vtt = null;
    public ?float $cost_usd = null;
    public string $error;
    public string $file;
    public ?array $kinds = null;
    public string $lease_token;
    public ?int $limit = null;
    public string $manifest;
    public string $model;
    public ?float $processing_seconds = null;
    public string $prompt_version;
    public ?array $result = null;
    public string $thumbnail;
    public ?string $tier = null;
    public string $worker_id;
}

/** Request payload for VideoRemixerWorker#create. */
class VideoRemixerWorkerCreateData
{
    public ?string $captions_ass = null;
    public ?string $captions_vtt = null;
    public ?float $cost_usd = null;
    public string $error;
    public string $file;
    public ?array $kinds = null;
    public string $lease_token;
    public ?int $limit = null;
    public string $manifest;
    public string $model;
    public ?float $processing_seconds = null;
    public string $prompt_version;
    public ?array $result = null;
    public string $thumbnail;
    public ?string $tier = null;
    public string $worker_id;
}

/** WatchdogRecovery entity data model. */
class WatchdogRecovery
{
    public string $item_id;
    public bool $passed;
    public string $table;
}

/** Request payload for WatchdogRecovery#load. */
class WatchdogRecoveryLoadMatch
{
    public ?string $device_id = null;
}

/** Request payload for WatchdogRecovery#create. */
class WatchdogRecoveryCreateData
{
    public string $item_id;
    public bool $passed;
    public string $table;
}

/** WinningAd entity data model. */
class WinningAd
{
    public string $created_at;
    public ?string $description = null;
    public string $id;
    public string $source;
    public string $type;
    public string $url;
}

/** Request payload for WinningAd#list. */
class WinningAdListMatch
{
    public ?string $product_id = null;
}

/** XAdaptation entity data model. */
class XAdaptation
{
}

/** Request payload for XAdaptation#load. */
class XAdaptationLoadMatch
{
}

/** ZerohumanAdminAccount entity data model. */
class ZerohumanAdminAccount
{
    public string $account_mode;
    public int $active_queue_count;
    public mixed $assigned_agent = null;
    public mixed $created_at = null;
    public string $email;
    public string $external_user_id;
    public mixed $membership = null;
    public mixed $policy_code = null;
    public ?string $product_id = null;
    public mixed $product_name = null;
    public string $provisioning_status;
    public mixed $subscription_status = null;
    public mixed $updated_at = null;
    public string $user_id;
}

/** Request payload for ZerohumanAdminAccount#list. */
class ZerohumanAdminAccountListMatch
{
    public ?string $account_mode = null;
    public ?int $active_queue_count = null;
    public mixed $assigned_agent = null;
    public mixed $created_at = null;
    public ?string $email = null;
    public ?string $external_user_id = null;
    public mixed $membership = null;
    public mixed $policy_code = null;
    public ?string $product_id = null;
    public mixed $product_name = null;
    public ?string $provisioning_status = null;
    public mixed $subscription_status = null;
    public mixed $updated_at = null;
    public ?string $user_id = null;
}

