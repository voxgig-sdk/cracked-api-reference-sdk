export interface Activate {
    activated_at?: any;
    message: string;
    success: boolean;
}
export interface ActivateCreateData {
    user_id: string;
    activated_at?: any;
    message: string;
    success: boolean;
}
export interface ActivateUser {
    activated_at?: any;
    message: string;
    success: boolean;
}
export interface ActivateUserCreateData {
    user_id: string;
    activated_at?: any;
    message: string;
    success: boolean;
}
export interface ActiveOnboarding {
    current_step?: any;
    has_active_onboarding: boolean;
    onboarding_data_id?: string;
}
export interface ActiveOnboardingLoadMatch {
    current_step?: any;
    has_active_onboarding?: boolean;
    onboarding_data_id?: string;
}
export interface Admin {
    apply?: boolean;
    count: number;
    created_at: string;
    date_from?: any;
    date_to?: any;
    email: string;
    id: string;
    include_failed?: boolean;
    include_pending?: boolean;
    include_records?: boolean;
    issue_ids?: any;
    only_active?: boolean;
    platform?: any;
    posting_method?: any;
    product_id?: string;
    query?: any;
    reason?: any;
    regenerate?: boolean;
    status?: string;
    user_membership?: any;
    user_name?: any;
    user_onboarding_step?: any;
    video_type: string;
}
export interface AdminLoadMatch {
    date: string;
    day?: any;
    user_email?: any;
    user_id?: string;
}
export interface AdminListMatch {
    apply?: boolean;
    count?: number;
    created_at?: string;
    date_from?: any;
    date_to?: any;
    email?: string;
    id?: string;
    include_failed?: boolean;
    include_pending?: boolean;
    include_records?: boolean;
    issue_ids?: any;
    only_active?: boolean;
    platform?: any;
    posting_method?: any;
    product_id?: string;
    query?: any;
    reason?: any;
    regenerate?: boolean;
    status?: string;
    user_membership?: any;
    user_name?: any;
    user_onboarding_step?: any;
    video_type?: string;
}
export interface AdminCreateData {
    user_id: string;
    apply?: boolean;
    count: number;
    created_at: string;
    date_from: any;
    date_to: any;
    email: string;
    id: string;
    include_failed?: boolean;
    include_pending?: boolean;
    include_records?: boolean;
    issue_ids?: any;
    only_active?: boolean;
    platform?: any;
    posting_method?: any;
    product_id: string;
    query?: any;
    reason?: any;
    regenerate?: boolean;
    status?: string;
    user_membership?: any;
    user_name?: any;
    user_onboarding_step?: any;
    video_type: string;
    $action?: string;
    [action: string]: any;
}
export interface AdminUpdateData {
    agent_id: string;
    agent_type?: string;
    is_active?: boolean;
    apply?: boolean;
    count?: number;
    created_at?: string;
    date_from?: any;
    date_to?: any;
    email?: string;
    id?: string;
    include_failed?: boolean;
    include_pending?: boolean;
    include_records?: boolean;
    issue_ids?: any;
    only_active?: boolean;
    platform?: any;
    posting_method?: any;
    product_id?: string;
    query?: any;
    reason?: any;
    regenerate?: boolean;
    status?: string;
    user_membership?: any;
    user_name?: any;
    user_onboarding_step?: any;
    video_type?: string;
}
export interface AdminRemoveMatch {
    tester_id: string;
}
export interface AdminAccountReset {
    agent_ids: any[];
    agent_ids_sha256: string;
    backup_sha256: string;
    batch_size?: number;
    confirmation: string;
    customer_email: string;
    pc_name: string;
    phase?: string;
    product_id: string;
    video_ids?: any[];
}
export interface AdminAccountResetCreateData {
    agent_ids: any[];
    agent_ids_sha256: string;
    backup_sha256: string;
    batch_size?: number;
    confirmation: string;
    customer_email: string;
    pc_name: string;
    phase?: string;
    product_id: string;
    video_ids?: any[];
}
export interface AdminCarousel {
    agent_id?: string;
    batch_id?: string;
    caption?: string;
    content_base64?: string;
    day?: any;
    dry_run?: boolean;
    engine_run?: string;
    expected_revision: string;
    formula: Record<string, any>;
    formula_id?: string;
    prompt: string;
    slides: any[];
    title?: string;
}
export interface AdminCarouselLoadMatch {
    batch_id: string;
}
export interface AdminCarouselCreateData {
    stage: string;
    agent_id: string;
    batch_id: string;
    caption: string;
    content_base64?: string;
    day: any;
    dry_run?: boolean;
    engine_run?: string;
    expected_revision: string;
    formula: Record<string, any>;
    formula_id: string;
    prompt: string;
    slides: any[];
    title: string;
    $action?: string;
    [action: string]: any;
}
export interface AdminCarouselUpdateData {
    fmt: string;
    expected_revision?: string;
    formula?: Record<string, any>;
    prompt?: string;
    title?: string;
}
export interface AdminCarouselDemoReview {
    id?: string;
    items: any[];
    reason?: string;
}
export interface AdminCarouselDemoReviewLoadMatch {
    id: string;
}
export interface AdminCarouselDemoReviewCreateData {
    items: any[];
    reason?: string;
    $action?: string;
    [action: string]: any;
}
export interface AdminCarouselDemoReviewUpdateData {
    demo_review_id: string;
    assignee?: any;
    $action?: string;
    [action: string]: any;
}
export interface AdminCustomer {
    account_type?: any;
    active_vireel_agents: number;
    agents: any[];
    billing_source: string;
    contracted_agents?: any;
    email: string;
    membership?: any;
    name?: string;
    pfa_only_agents: number;
    severity: string;
    status: string;
    subscription_status?: any;
    user_id: string;
}
export interface AdminCustomerListMatch {
    account_type?: any;
    active_vireel_agents?: number;
    agents?: any[];
    billing_source?: string;
    contracted_agents?: any;
    email?: string;
    membership?: any;
    name?: string;
    pfa_only_agents?: number;
    severity?: string;
    status?: string;
    subscription_status?: any;
    user_id?: string;
}
export interface AdminCustomerSuccess {
    active_agents: number;
    active_products: number;
    agents_count: number;
    auto_schedule_status: string;
    days_until_period_end?: any;
    email: string;
    feature_impact: string;
    last_notification_at?: any;
    membership?: any;
    name?: string;
    notification_count: number;
    notification_events: any[];
    priority: string;
    severity: string;
    status_label: string;
    subscription_current_period_end?: any;
    subscription_status?: any;
    upcoming_posts: number;
    user_id: string;
}
export interface AdminCustomerSuccessListMatch {
    active_agents?: number;
    active_products?: number;
    agents_count?: number;
    auto_schedule_status?: string;
    days_until_period_end?: any;
    email?: string;
    feature_impact?: string;
    last_notification_at?: any;
    membership?: any;
    name?: string;
    notification_count?: number;
    notification_events?: any[];
    priority?: string;
    severity?: string;
    status_label?: string;
    subscription_current_period_end?: any;
    subscription_status?: any;
    upcoming_posts?: number;
    user_id?: string;
}
export interface AdminGeneratedVideo {
    agent_id?: string;
    agent_name?: any;
    created_at: string;
    duration?: number;
    generation_status?: Record<string, any>;
    id: string;
    product_id?: string;
    thumbnail_url?: any;
    title: string;
    type: string;
    updated_at?: any;
    url: string;
}
export interface AdminGeneratedVideoListMatch {
    user_id: string;
    limit?: number;
    product_id?: string;
}
export interface AdminHealthrx {
    action: string;
    delivery_enabled?: boolean;
    id?: string;
    option_id: string;
    plan: Record<string, any>;
    preparation_enabled?: boolean;
    product_id: string;
    reason: string;
    request_key: string;
    revision: number;
    schedule_enabled?: boolean;
    version: string;
    viewed: boolean;
}
export interface AdminHealthrxLoadMatch {
    item_id: string;
    kind: string;
}
export interface AdminHealthrxCreateData {
    action: string;
    option_id: string;
    plan: Record<string, any>;
    product_id: string;
    reason: string;
    request_key: string;
    version: string;
    viewed: boolean;
}
export interface AdminHealthrxUpdateData {
    delivery_enabled?: boolean;
    plan?: Record<string, any>;
    preparation_enabled?: boolean;
    product_id?: string;
    revision?: number;
    schedule_enabled?: boolean;
}
export interface AdminInsight {
    customer_success_cases: any[];
    customers: any[];
    generated_at: string;
    pfa_database: Record<string, any>;
    recent_signups: any[];
    summary: Record<string, any>;
    vireel_database: Record<string, any>;
}
export interface AdminInsightLoadMatch {
    customer_email?: any;
    include_agent?: boolean;
    limit?: number;
    page?: number;
}
export interface AdminInsightListMatch {
    customer_success_cases?: any[];
    customers?: any[];
    generated_at?: string;
    pfa_database?: Record<string, any>;
    recent_signups?: any[];
    summary?: Record<string, any>;
    vireel_database?: Record<string, any>;
}
export interface AdminLandingTask {
    task_id: string;
}
export interface AdminLandingTaskCreateData {
    user_id: string;
    product_id?: string;
    task_id: string;
}
export interface AdminMetricsSummary {
    paid_users_by_level: any[];
    total_cancellations: number;
    total_previews_generated: number;
    total_signups: number;
    total_videos_generated: number;
    url_attempts: number;
    user_credits: any[];
    user_gifted_credits: any[];
}
export interface AdminMetricsSummaryListMatch {
    date_filter?: string;
}
export interface AdminPost {
    admin_job_ids: any;
    agent_id: string;
    agent_name: any;
    agent_platform_urls: any;
    agent_url: any;
    comments: number;
    error_message: any;
    failed_at: any;
    id: string;
    instagram_posted_by: any;
    instagram_posted_url: any;
    instagram_scraped_social_post_id: string;
    is_instagram_posted: boolean;
    is_tiktok_posted: boolean;
    is_youtube_posted: boolean;
    last_refreshed_at: any;
    likes: number;
    platform_post_methods: any;
    platform_urls: any;
    post_method: any;
    post_platforms: any;
    post_url: any;
    posted_at: any;
    product_id: string;
    results_status: any;
    scheduled_datetime: string;
    source_type: string;
    status: string;
    tiktok_posted_by: any;
    tiktok_posted_url: any;
    tiktok_scraped_social_post_id: string;
    upload_post_error: any;
    upload_post_status: any;
    upload_post_uploads: any;
    user_email: string;
    user_id: string;
    user_name: any;
    video_id: string;
    video_url: any;
    views: number;
    youtube_posted_by: any;
    youtube_posted_url: any;
    youtube_scraped_social_post_id: string;
}
export interface AdminPostListMatch {
    date?: any;
    include_entry?: boolean;
    platform?: string;
    posting_method?: string;
}
export interface AdminRecentSignup {
    created_at: string;
    current_step: string;
    email?: string;
    email_source?: any;
    error_message?: any;
    flow_variant: string;
    id: string;
    inactive_minutes: number;
    last_notification_at?: any;
    last_seen_at: string;
    likely_cause: string;
    notification_count: number;
    notification_events: any[];
    product_id?: string;
    product_name?: any;
    product_url: string;
    severity: string;
    social_scan_status?: any;
    stage_label: string;
    status: string;
    updated_at?: any;
    website_scrape_status?: any;
}
export interface AdminRecentSignupListMatch {
    created_at?: string;
    current_step?: string;
    email?: string;
    email_source?: any;
    error_message?: any;
    flow_variant?: string;
    id?: string;
    inactive_minutes?: number;
    last_notification_at?: any;
    last_seen_at?: string;
    likely_cause?: string;
    notification_count?: number;
    notification_events?: any[];
    product_id?: string;
    product_name?: any;
    product_url?: string;
    severity?: string;
    social_scan_status?: any;
    stage_label?: string;
    status?: string;
    updated_at?: any;
    website_scrape_status?: any;
}
export interface AdminSlideshowDiag {
    agent_id?: string;
    batch_id?: string;
    caption?: string;
    content_base64?: string;
    day?: any;
    formula_id?: string;
    id?: string;
    title?: string;
}
export interface AdminSlideshowDiagCreateData {
    id: string;
    agent_id?: string;
    batch_id?: string;
    caption?: string;
    content_base64?: string;
    day?: any;
    formula_id?: string;
    title?: string;
}
export interface AdminSlideshowImport {
    agent_id: string;
    batch_id: string;
    caption: string;
    day: string;
    dry_run?: boolean;
    engine_run?: string;
    formula_id: string;
    slides: any[];
    title: string;
}
export interface AdminSlideshowImportLoadMatch {
    batch_id: string;
}
export interface AdminSlideshowImportCreateData {
    agent_id: string;
    batch_id: string;
    caption: string;
    day: string;
    dry_run?: boolean;
    engine_run?: string;
    formula_id: string;
    slides: any[];
    title: string;
    $action?: string;
    [action: string]: any;
}
export interface AdminUserView {
    account_type?: any;
    admin_notes?: any;
    agents_count?: number;
    created_at: string;
    credits: number;
    email: string;
    id: string;
    industry: any;
    is_admin?: boolean;
    is_bookmarked?: boolean;
    is_internal_user?: boolean;
    membership: any;
    name: string;
    new_email: string;
    partner_external_user_id?: string;
    partner_policy_code?: any;
    partner_source?: any;
    product_name: any;
    product_url: any;
    skip: boolean;
    subscription_details?: any;
    subscription_status: any;
}
export interface AdminUserViewListMatch {
    limit?: number;
    page?: number;
}
export interface AdminUserViewCreateData {
    user_id: string;
    account_type?: any;
    admin_notes?: any;
    agents_count?: number;
    created_at: string;
    credits: number;
    email: string;
    id: string;
    industry: any;
    is_admin?: boolean;
    is_bookmarked?: boolean;
    is_internal_user?: boolean;
    membership: any;
    name: string;
    new_email: string;
    partner_external_user_id?: string;
    partner_policy_code?: any;
    partner_source?: any;
    product_name: any;
    product_url: any;
    skip: boolean;
    subscription_details?: any;
    subscription_status: any;
    $action?: string;
    [action: string]: any;
}
export interface AdminUserViewUpdateData {
    user_id: string;
    admin_notes?: any;
    agents_count?: number;
    credits?: number;
    is_admin?: boolean;
    is_bookmarked?: boolean;
    is_internal_user?: boolean;
    membership?: any;
    $action?: string;
    [action: string]: any;
}
export interface AdminUserViewRemoveMatch {
    user_id: string;
}
export interface AdminUsersTableItem {
    activated: boolean;
    agents_count?: number;
    created_at: string;
    credits: number;
    demo_booked: boolean;
    email: string;
    id: string;
    membership: any;
    name: string;
    onboarding_flow: string;
    product_name: any;
    product_url: any;
    survey_data: any;
}
export interface AdminUsersTableItemListMatch {
    page?: number;
    page_size?: number;
}
export interface AdminVideoRemixer {
    activity: string;
    allowed_platforms?: any[];
    anchor_clip_id?: string;
    atomicity_class?: any;
    auto_render?: boolean;
    campaign_allowed?: boolean;
    channel?: string;
    channel_default?: string;
    clip_id: string;
    clip_ids?: any[];
    collected_at: string;
    comments?: any;
    completion_rate?: any;
    confirmed_duplicate_of?: any;
    consent_doc_uri?: string;
    contact?: string;
    conversions?: any;
    count?: number;
    creator?: string;
    creator_id?: string;
    crop_window?: any;
    cta_product_id?: string;
    days?: number;
    derivative_edits_allowed?: boolean;
    enabled?: boolean;
    end_ms?: any;
    enqueue?: boolean;
    errors?: any[];
    evidence: string;
    expected_revision?: any;
    expected_revisions: Record<string, any>;
    external_ai_allowed?: boolean;
    file: string;
    followers?: any;
    formula_id: string;
    formula_ids: any[];
    handles?: Record<string, any>;
    hook_subtype?: any;
    hour_utc?: number;
    human_role: string;
    idempotency_key: string;
    items: any[];
    kim_clip_ids: any[];
    kind: string;
    levels: Record<string, any>;
    likes?: any;
    media_enabled: boolean;
    medical_claim_present?: boolean;
    minute_utc?: number;
    music_bed_allowed?: boolean;
    music_policy?: string;
    name: string;
    niche?: string;
    notes?: string;
    origin?: string;
    owner_waiver?: boolean;
    paid_ads_allowed?: boolean;
    patient_identifiable?: boolean;
    person_type?: string;
    pipeline?: boolean;
    planning_only?: boolean;
    platform: string;
    platform_post_id: string;
    policy: Record<string, any>;
    polish?: string;
    post_url: string;
    posted_at: string;
    primary_role?: any;
    purpose: string;
    rate?: number;
    rationale?: string;
    reason: string;
    reference_source_id?: string;
    requires_medical_review?: boolean;
    review_status?: any;
    revision: number;
    rights_expires_at?: any;
    rights_status?: string;
    run_id: string;
    sample_links?: any[];
    secondary_roles?: any;
    seconds: number;
    seed?: number;
    seed_base?: number;
    sensitive_personal_data_present?: boolean;
    shares?: any;
    shoot?: string;
    slots: any[];
    soundbite_title?: any;
    source: string;
    source_id: string;
    source_ids: any[];
    spend_usd?: any;
    spiciness?: any;
    spiciness_notes?: string;
    start_ms?: any;
    status?: string;
    terry_clip_ids: any[];
    testimonial_strength?: any;
    testimonial_type?: any;
    tier?: string;
    timeline: Record<string, any>;
    topic?: string;
    topic_tags?: any;
    total_target_ms: number;
    use_learned_weights?: boolean;
    views?: any;
    window: string;
}
export interface AdminVideoRemixerLoadMatch {
    clip_id: string;
    $action?: string;
    [action: string]: any;
}
export interface AdminVideoRemixerCreateData {
    activity: string;
    allowed_platforms?: any[];
    anchor_clip_id?: string;
    atomicity_class?: any;
    auto_render?: boolean;
    campaign_allowed?: boolean;
    channel?: string;
    channel_default?: string;
    clip_id: string;
    clip_ids?: any[];
    collected_at: string;
    comments?: any;
    completion_rate?: any;
    confirmed_duplicate_of?: any;
    consent_doc_uri?: string;
    contact?: string;
    conversions?: any;
    count?: number;
    creator?: string;
    creator_id?: string;
    crop_window?: any;
    cta_product_id?: string;
    days?: number;
    derivative_edits_allowed?: boolean;
    enabled?: boolean;
    end_ms?: any;
    enqueue?: boolean;
    errors?: any[];
    evidence: string;
    expected_revision?: any;
    expected_revisions: Record<string, any>;
    external_ai_allowed?: boolean;
    file: string;
    followers?: any;
    formula_id: string;
    formula_ids: any[];
    handles?: Record<string, any>;
    hook_subtype?: any;
    hour_utc?: number;
    human_role: string;
    idempotency_key: string;
    items: any[];
    kim_clip_ids: any[];
    kind: string;
    levels: Record<string, any>;
    likes?: any;
    media_enabled: boolean;
    medical_claim_present?: boolean;
    minute_utc?: number;
    music_bed_allowed?: boolean;
    music_policy?: string;
    name: string;
    niche?: string;
    notes?: string;
    origin?: string;
    owner_waiver?: boolean;
    paid_ads_allowed?: boolean;
    patient_identifiable?: boolean;
    person_type?: string;
    pipeline?: boolean;
    planning_only?: boolean;
    platform: string;
    platform_post_id: string;
    policy: Record<string, any>;
    polish?: string;
    post_url: string;
    posted_at: string;
    primary_role?: any;
    purpose: string;
    rate?: number;
    rationale?: string;
    reason: string;
    reference_source_id?: string;
    requires_medical_review?: boolean;
    review_status?: any;
    revision: number;
    rights_expires_at?: any;
    rights_status?: string;
    run_id: string;
    sample_links?: any[];
    secondary_roles?: any;
    seconds: number;
    seed?: number;
    seed_base?: number;
    sensitive_personal_data_present?: boolean;
    shares?: any;
    shoot?: string;
    slots: any[];
    soundbite_title?: any;
    source: string;
    source_id: string;
    source_ids: any[];
    spend_usd?: any;
    spiciness?: any;
    spiciness_notes?: string;
    start_ms?: any;
    status?: string;
    terry_clip_ids: any[];
    testimonial_strength?: any;
    testimonial_type?: any;
    tier?: string;
    timeline: Record<string, any>;
    topic?: string;
    topic_tags?: any;
    total_target_ms: number;
    use_learned_weights?: boolean;
    views?: any;
    window: string;
    $action?: string;
    [action: string]: any;
}
export interface AdminVideoRemixerUpdateData {
    identifier: string;
    allowed_platforms?: any[];
    auto_render?: boolean;
    campaign_allowed?: boolean;
    channel?: string;
    channel_default?: string;
    clip_id?: string;
    confirmed_duplicate_of?: any;
    consent_doc_uri?: string;
    contact?: string;
    count?: number;
    creator_id?: string;
    derivative_edits_allowed?: boolean;
    enabled?: boolean;
    errors?: any[];
    expected_revision?: any;
    expected_revisions?: Record<string, any>;
    external_ai_allowed?: boolean;
    followers?: any;
    formula_id?: string;
    handles?: Record<string, any>;
    hour_utc?: number;
    human_role?: string;
    levels?: Record<string, any>;
    medical_claim_present?: boolean;
    minute_utc?: number;
    music_bed_allowed?: boolean;
    music_policy?: string;
    name?: string;
    niche?: string;
    notes?: string;
    origin?: string;
    owner_waiver?: boolean;
    paid_ads_allowed?: boolean;
    patient_identifiable?: boolean;
    person_type?: string;
    platform?: string;
    platform_post_id?: string;
    policy?: Record<string, any>;
    post_url?: string;
    posted_at?: string;
    rate?: number;
    rationale?: string;
    reason?: string;
    reference_source_id?: string;
    requires_medical_review?: boolean;
    rights_expires_at?: any;
    rights_status?: string;
    sample_links?: any[];
    seed_base?: number;
    sensitive_personal_data_present?: boolean;
    shoot?: string;
    slots?: any[];
    source_ids?: any[];
    spiciness?: any;
    spiciness_notes?: string;
    status?: string;
    timeline?: Record<string, any>;
    total_target_ms?: number;
}
export interface AdminVideoRemixerPatchData {
    atomicity_class?: any;
    crop_window?: any;
    cta_product_id?: string;
    end_ms?: any;
    expected_revision?: any;
    hook_subtype?: any;
    media_enabled?: boolean;
    medical_claim_present?: boolean;
    primary_role?: any;
    reason?: string;
    requires_medical_review?: boolean;
    review_status?: any;
    secondary_roles?: any;
    sensitive_personal_data_present?: boolean;
    soundbite_title?: any;
    start_ms?: any;
    testimonial_strength?: any;
    testimonial_type?: any;
    topic_tags?: any;
}
export interface AdminVideoRemixerRemoveMatch {
    identifier: string;
}
export interface AdvanceStep {
    current_step: string;
    onboarding_data_id: string;
    success: boolean;
    to_step: string;
}
export interface AdvanceStepCreateData {
    onboarding_data_id: string;
    to_step: string;
}
export interface Agent {
    active_connections: number;
    at_capacity: boolean;
    id: string;
    is_active: boolean;
    name: string;
    tiktok_stats?: any;
    type: string;
}
export interface AgentListMatch {
    agent_type?: any;
}
export interface AgentAccessCustomersHealth {
    accountType?: any;
    agentQuota: number;
    assignedAgentsByType: Record<string, any>;
    assignedAgentsTotal: number;
    createdAt: string;
    email: string;
    isInternalUser?: any;
    membership?: any;
    name?: string;
    performance: Record<string, any>;
    productCount: number;
    subscriptionCurrentPeriodEnd?: any;
    subscriptionDetails?: any;
    subscriptionStatus?: any;
    usage: Record<string, any>;
    userId: string;
}
export interface AgentAccessCustomersHealthListMatch {
    date_range?: string;
    include_internal?: boolean;
    subscription_status?: any;
}
export interface AgentAccessOverview {
    activeUsers: number;
    generatedAt: string;
    newUsersYesterday: number;
    onboardingContextCounts: Record<string, any>;
    onboardingCurrentStepCounts: Record<string, any>;
    onboardingCurrentStepWindow: Record<string, any>;
    onboardingFlowVariantCounts: Record<string, any>;
    onboardingLockedUntilActivation: number;
    onboardingRecordsTotal: number;
    onboardingRecordsWindow: number;
    onboardingSocialScanStatusCounts: Record<string, any>;
    onboardingWebsiteScrapeStatusCounts: Record<string, any>;
    subscriptionStatusCounts: Record<string, any>;
    totalInternalUsers: number;
    totalUsers: number;
    trialStartedYesterday: number;
    trialingUsers: number;
}
export interface AgentAccessOverviewLoadMatch {
    onboarding_window_day?: number;
}
export interface AgentAccessPhilHourlyNotification {
    generatedAt: string;
    phoneHealth: Record<string, any>;
    scheduledPosts: Record<string, any>;
    targetDate: string;
    uploadPostInstagramHealth: Record<string, any>;
    uploadPostTiktokHealth: Record<string, any>;
    uploadPostYoutubeHealth: Record<string, any>;
}
export interface AgentAccessPhilHourlyNotificationLoadMatch {
    date?: any;
}
export interface AgentAccessPhilStatsRefresh {
    generatedAt: string;
    statsRefresh: Record<string, any>;
    targetDate: string;
}
export interface AgentAccessPhilStatsRefreshLoadMatch {
    date?: any;
}
export interface AgentAccessPhilVideo {
    generatedAt: string;
    targetDate: string;
    videos: Record<string, any>;
}
export interface AgentAccessPhilVideoLoadMatch {
    date?: any;
}
export interface AgentAccessUserAgent {
    agentQuota: number;
    agents: any[];
    assignedByType: Record<string, any>;
    assignedTotal: number;
    email: string;
    products: any[];
    userId: string;
}
export interface AgentAccessUserAgentListMatch {
    email: string;
}
export interface AgentAccessUserPhoneFarm {
    avatar?: any;
    facebookUrl?: any;
    id: string;
    instagramUrl?: any;
    lastAdminSyncedAt?: any;
    name: string;
    productId?: any;
    productName?: any;
    tiktokUrl?: any;
    type?: any;
    uploadPostPlatforms?: any;
    youtubeUrl?: any;
}
export interface AgentAccessUserPhoneFarmListMatch {
    email: string;
}
export interface AgentAccessUserPost {
    deltaYesterday: number;
    expectedVideosPerDay: number;
    postedToday: number;
    postedYesterday: number;
    productId?: any;
    productName?: any;
}
export interface AgentAccessUserPostListMatch {
    day?: number;
    email: string;
}
export interface AgentAccessUserSummary {
    deletedAt?: any;
    id: string;
    isActive?: any;
    name: string;
    url: string;
}
export interface AgentAccessUserSummaryListMatch {
    email: string;
}
export interface AgentAccessUserVideo {
    allTime: Record<string, any>;
    email: string;
    today: Record<string, any>;
    userId: string;
    yesterday: Record<string, any>;
}
export interface AgentAccessUserVideoLoadMatch {
    email: string;
}
export interface AgentAccessUserWinningAd {
    productId: string;
    productName: string;
    winningAds: any[];
    winningAdsCount: number;
}
export interface AgentAccessUserWinningAdListMatch {
    email: string;
}
export interface AgentAccessWinningAdsSummary {
    email: string;
    name?: string;
    productCount: number;
    productsWithWinningAds: number;
    subscriptionStatus?: any;
    totalWinningAds: number;
    userId: string;
}
export interface AgentAccessWinningAdsSummaryListMatch {
    include_internal?: boolean;
    limit?: number;
    offset?: number;
    subscription_status?: any;
}
export interface AgentDetail {
    activeConnections?: any;
    assignedAt?: any;
    avatar: string;
    bio?: any;
    facebookUrl?: any;
    id: string;
    instagramUrl?: any;
    isActive?: boolean;
    name: string;
    role?: any;
    tiktokStats?: any;
    tiktokUrl?: any;
    type: string;
    uploadPostPlatforms?: any;
    youtubeUrl?: any;
}
export interface AgentDetailListMatch {
    agent_type?: any;
    include_inactive?: boolean;
    limit?: number;
}
export interface AgentDetailUpdateData {
    upload_post_agent_id: string;
    bio?: any;
    name?: string;
    role?: any;
}
export interface AgentHealth {
    daily: any[];
    dates: any[];
    generated_at: string;
    groups: any[];
    latest: Record<string, any>;
    live_date?: any;
    phone_admin_generated_at: string;
    platform?: string;
    post_target: number;
    qa_managed_agent_ids?: any[];
    scope_prefixes: any[];
    timezone: string;
    warmup_target: number;
}
export interface AgentHealthListMatch {
    date_to?: any;
    day?: number;
    platform?: string;
    summary?: boolean;
    user_id?: string;
}
export interface AgentHealthCustomerOption {
    agent_count: number;
    email: string;
    user_id: string;
}
export interface AgentHealthCustomerOptionListMatch {
    agent_count?: number;
    email?: string;
    user_id?: string;
}
export interface AgentHealthDetail {
    archived_issue_total?: number;
    date: string;
    generated_at: string;
    group_id: string;
    has_more: boolean;
    issue_total: number;
    issues: any[];
    limit: number;
    metric: string;
    offset: number;
    warmup_runs?: any[];
    warning_total?: number;
    warnings?: any[];
}
export interface AgentHealthDetailListMatch {
    date: string;
    group_id: string;
    limit?: number;
    metric?: string;
    offset?: number;
    platform?: string;
}
export interface AgentPost {
    comments: number;
    error_message: any;
    id: string;
    likes: number;
    product_id: string;
    results: any;
    scheduled_datetime: string;
    source_type: string;
    status: string;
    user_email: string;
    user_id: string;
    user_name: any;
    video_id: string;
    video_url: any;
    views: number;
}
export interface AgentPostListMatch {
    id: string;
    day?: string;
}
export interface AgentStat {
    agents_needed: number;
    dedicated_agents: Record<string, any>;
    shared_agents: Record<string, any>;
    total_agents: number;
}
export interface AgentStatLoadMatch {
    agents_needed?: number;
    dedicated_agents?: Record<string, any>;
    shared_agents?: Record<string, any>;
    total_agents?: number;
}
export interface AgentSummary {
    agent_count: number;
    favicon_url?: any;
    product_id: string;
    product_name: string;
}
export interface AgentSummaryListMatch {
    agent_count?: number;
    favicon_url?: any;
    product_id?: string;
    product_name?: string;
}
export interface AgentsSummary {
    total_agents: number;
    total_agents_count_sum: number;
}
export interface AgentsSummaryLoadMatch {
    total_agents?: number;
    total_agents_count_sum?: number;
}
export interface AnalysisStatus {
}
export interface AnalysisStatusLoadMatch {
}
export interface AnalyticsPost {
    agent?: any;
    comment?: any;
    created_at: string;
    id: string;
    product_id?: string;
    queue_position?: any;
    results?: any;
    scheduled_datetime: string;
    scraped_posts?: any;
    source_type: string;
    status: string;
    updated_at: string;
    video?: any;
}
export interface AnalyticsPostListMatch {
    agent_id?: string;
    date_from: string;
    date_to?: any;
    email?: string;
    product_id?: string;
    status?: any;
    user_id?: string;
}
export interface AnalyzeProduct {
    instagram_username?: any;
    message: string;
    status: string;
    url: string;
}
export interface AnalyzeProductCreateData {
    instagram_username?: any;
    url: string;
}
export interface AssignAgent {
    agent: Record<string, any>;
    assignment: Record<string, any>;
    mock_agents: any[];
    onboarding_data_id: string;
}
export interface AssignAgentCreateData {
    onboarding_data_id: string;
}
export interface Auth {
}
export interface AuthCreateData {
    attribution?: any;
    email?: any;
    industry?: any;
    returnTo?: any;
    token?: any;
    $action?: string;
    [action: string]: any;
}
export interface AutoScheduleSetting {
    can_enable_repost?: boolean;
    effective_posted_video_reuse_percent: number;
    enabled_video_types?: any;
    is_enabled: boolean;
    lock_video_regeneration_controls?: boolean;
    membership_tier: string;
    posted_video_reuse_percent?: any;
    product_id?: string;
    repost_source?: any;
    videos_per_day: number;
}
export interface AutoScheduleSettingLoadMatch {
    product_id?: string;
}
export interface AutoScheduleSettingUpdateData {
    product_id?: string;
    enabled_video_types?: any;
    is_enabled?: boolean;
}
export interface BulkTikTokStatsUpdate {
    failedIds: any[];
    updatedCount: number;
    updates: any[];
}
export interface BulkTikTokStatsUpdateUpdateData {
    updates?: any[];
}
export interface Carousel {
    agent_id: string;
    agent_name: string;
    audit_created_at?: any;
    audit_snapshot_sha256?: any;
    caption?: any;
    comments?: any;
    fit_score?: any;
    format: string;
    formula?: Record<string, any>;
    formula_id?: string;
    formula_name?: any;
    generation?: Record<string, any>;
    id?: string;
    image_prompt?: any;
    likes?: any;
    main_prompt?: any;
    metrics_updated_at?: any;
    post_url?: any;
    profile_url?: any;
    qa?: Record<string, any>;
    qa_status: string;
    qa_verdict?: any;
    quality_score?: any;
    queue_id: string;
    relevance_score?: any;
    scheduled_at: string;
    slide_count: number;
    slides: any[];
    source?: Record<string, any>;
    status: string;
    thumbnail_url?: any;
    title: string;
    video_id: string;
    views?: any;
}
export interface CarouselLoadMatch {
    id: string;
}
export interface CarouselListMatch {
    date?: any;
}
export interface CarouselCreateData {
    id: string;
    skip_schedule?: boolean;
    agent_id: string;
    agent_name: string;
    audit_created_at?: any;
    audit_snapshot_sha256?: any;
    caption?: any;
    comments?: any;
    fit_score?: any;
    format: string;
    formula?: Record<string, any>;
    formula_id?: string;
    formula_name?: any;
    generation?: Record<string, any>;
    image_prompt?: any;
    likes?: any;
    main_prompt?: any;
    metrics_updated_at?: any;
    post_url?: any;
    profile_url?: any;
    qa?: Record<string, any>;
    qa_status: string;
    qa_verdict?: any;
    quality_score?: any;
    queue_id: string;
    relevance_score?: any;
    scheduled_at: string;
    slide_count: number;
    slides: any[];
    source?: Record<string, any>;
    status: string;
    thumbnail_url?: any;
    title: string;
    video_id: string;
    views?: any;
    $action?: string;
    [action: string]: any;
}
export interface CarouselAgentDetail {
    agent_id: string;
    agent_name: string;
    connection_status?: any;
    followers?: any;
    following?: any;
    metrics_updated_at?: any;
    phone_admin_status: string;
    profile_likes?: any;
    profile_url?: any;
    warmup_days?: any;
    warmup_hold_until?: any;
    warmup_status: string;
}
export interface CarouselAgentDetailLoadMatch {
    agent_id: string;
}
export interface CarouselStatus {
    caption: any;
    error?: any;
    id?: string;
    image_model?: any;
    image_provider?: any;
    image_task_id?: string;
    image_url: any;
    index: number;
    prompt: any;
    status: string;
}
export interface CarouselStatusListMatch {
    id: string;
}
export interface Chat {
    idempotencyKey: string;
    message: string;
    sessionId: string;
}
export interface ChatCreateData {
    session_id: string;
    idempotencyKey: string;
    message: string;
    sessionId: string;
}
export interface ChatHistory {
    chatSubVariant: string;
    createdAt: string;
    messages: any[];
    model?: any;
    onboardingDataId: string;
    routeRecommendation?: any;
    salesStage: string;
    selectedPlan?: any;
    session: Record<string, any>;
    sessionId: string;
    status: string;
    updatedAt: string;
}
export interface ChatHistoryLoadMatch {
    session_id: string;
}
export interface ChatHistoryCreateData {
    onboardingDataId: string;
}
export interface ChatSession {
    chatSubVariant: string;
    createdAt: string;
    model?: any;
    plan?: any;
    route?: any;
    routeRecommendation?: any;
    salesStage: string;
    selectedPlan?: any;
    sessionId: string;
    status: string;
    updatedAt: string;
}
export interface ChatSessionCreateData {
    session_id: string;
    plan?: any;
    route?: any;
}
export interface Comment {
}
export interface CommentLoadMatch {
    all_product?: boolean;
    day?: number;
    limit?: number;
    offset?: number;
    product_id?: string;
    $action?: string;
    [action: string]: any;
}
export interface CommentCampaign {
    account_daily_limit?: number;
    account_weekly_limit?: number;
    action: string;
    active_days_per_week?: number;
    agent_id: string;
    allowlist?: any[];
    analysis_daily_limit?: number;
    analysis_model?: string;
    analysis_reservation_usd?: number;
    approved_markets?: any[];
    brand_forward_enabled?: boolean;
    briefs?: Record<string, any>;
    candidate_only?: boolean;
    claims?: any[];
    cohort_removal_threshold?: number;
    daily_cost_ceiling_usd?: number;
    delivery_mode?: string;
    disclosure_mode?: string;
    disclosure_template?: string;
    draft_options_count?: number;
    draft_review_reservation_usd?: number;
    exceptional_daily_cap_approved?: boolean;
    execution_enabled?: boolean;
    experiment_styles?: any[];
    inventory_factor?: number;
    keywords?: any[];
    max_duration_seconds?: any;
    metadata_pass_rate?: number;
    min_interval_minutes?: number;
    mode?: string;
    monitored_creators?: any[];
    platform?: string;
    platform_permission_evidence?: string;
    policy_approved_by?: string;
    policy_expires_at?: any;
    policy_version?: string;
    product_daily_limit?: number;
    qualification_rate?: number;
    raw_daily_limit?: number;
    raw_result_reservation_usd?: number;
    reason: string;
    replies_enabled?: boolean;
    request_key: string;
    reviewer_model?: string;
    scan_interval_hours?: number;
    search_change_reason?: string;
    search_effective_at?: any;
    shadow_sample_limit?: number;
    spent_seconds?: any;
    task_ttl_hours?: number;
    top_comment_analysis_enabled?: boolean;
    writer_model?: string;
}
export interface CommentCampaignLoadMatch {
    product_id: string;
}
export interface CommentCampaignCreateData {
    product_id: string;
    source_id?: string;
    account_daily_limit?: number;
    account_weekly_limit?: number;
    action: string;
    active_days_per_week?: number;
    agent_id: string;
    allowlist?: any[];
    analysis_daily_limit?: number;
    analysis_model?: string;
    analysis_reservation_usd?: number;
    approved_markets?: any[];
    brand_forward_enabled?: boolean;
    briefs?: Record<string, any>;
    candidate_only?: boolean;
    claims?: any[];
    cohort_removal_threshold?: number;
    daily_cost_ceiling_usd?: number;
    delivery_mode?: string;
    disclosure_mode?: string;
    disclosure_template?: string;
    draft_options_count?: number;
    draft_review_reservation_usd?: number;
    exceptional_daily_cap_approved?: boolean;
    execution_enabled?: boolean;
    experiment_styles?: any[];
    inventory_factor?: number;
    keywords?: any[];
    max_duration_seconds?: any;
    metadata_pass_rate?: number;
    min_interval_minutes?: number;
    mode?: string;
    monitored_creators?: any[];
    platform?: string;
    platform_permission_evidence?: string;
    policy_approved_by?: string;
    policy_expires_at?: any;
    policy_version?: string;
    product_daily_limit?: number;
    qualification_rate?: number;
    raw_daily_limit?: number;
    raw_result_reservation_usd?: number;
    reason: string;
    replies_enabled?: boolean;
    request_key: string;
    reviewer_model?: string;
    scan_interval_hours?: number;
    search_change_reason?: string;
    search_effective_at?: any;
    shadow_sample_limit?: number;
    spent_seconds?: any;
    task_ttl_hours?: number;
    top_comment_analysis_enabled?: boolean;
    writer_model?: string;
}
export interface CommentCampaignUpdateData {
    product_id: string;
    account_daily_limit?: number;
    account_weekly_limit?: number;
    active_days_per_week?: number;
    allowlist?: any[];
    analysis_daily_limit?: number;
    analysis_model?: string;
    analysis_reservation_usd?: number;
    approved_markets?: any[];
    brand_forward_enabled?: boolean;
    briefs?: Record<string, any>;
    claims?: any[];
    cohort_removal_threshold?: number;
    daily_cost_ceiling_usd?: number;
    delivery_mode?: string;
    disclosure_mode?: string;
    disclosure_template?: string;
    draft_options_count?: number;
    draft_review_reservation_usd?: number;
    exceptional_daily_cap_approved?: boolean;
    execution_enabled?: boolean;
    experiment_styles?: any[];
    inventory_factor?: number;
    keywords?: any[];
    max_duration_seconds?: any;
    metadata_pass_rate?: number;
    min_interval_minutes?: number;
    mode?: string;
    monitored_creators?: any[];
    platform?: string;
    platform_permission_evidence?: string;
    policy_approved_by?: string;
    policy_expires_at?: any;
    policy_version?: string;
    product_daily_limit?: number;
    qualification_rate?: number;
    raw_daily_limit?: number;
    raw_result_reservation_usd?: number;
    replies_enabled?: boolean;
    reviewer_model?: string;
    scan_interval_hours?: number;
    search_change_reason?: string;
    search_effective_at?: any;
    shadow_sample_limit?: number;
    task_ttl_hours?: number;
    top_comment_analysis_enabled?: boolean;
    writer_model?: string;
}
export interface CompleteChatCheckout {
    message?: any;
    onboarding_data_id: string;
    product_id?: string;
    ready?: boolean;
    success: boolean;
}
export interface CompleteChatCheckoutCreateData {
    onboarding_data_id: string;
}
export interface CreateBlackoutSora2Video {
    main_prompt: string;
    media_asset_id: string;
    product_id: string;
    requires_polling?: boolean;
    video: Record<string, any>;
}
export interface CreateBlackoutSora2VideoCreateData {
    main_prompt: string;
    media_asset_id: string;
    product_id: string;
}
export interface CreateCarousel {
    copy_mode?: any;
    expected_owner_user_id?: string;
    expected_product_id?: string;
    expected_product_name?: any;
    image_model?: string;
    mention_product?: boolean;
    message: string;
    num_slides?: number;
    owner_user_id?: string;
    product_id?: string;
    product_name?: any;
    product_placement?: string;
    request_id?: string;
    script_style_custom?: any;
    script_style_id?: string;
    selected_hook?: any;
    status: string;
    success: boolean;
    template_id: string;
    video_id: string;
    visual_style_custom?: any;
    visual_style_id?: string;
}
export interface CreateCarouselCreateData {
    copy_mode?: any;
    expected_owner_user_id?: string;
    expected_product_id?: string;
    expected_product_name?: any;
    image_model?: string;
    mention_product?: boolean;
    num_slides?: number;
    product_id?: string;
    product_placement?: string;
    request_id?: string;
    script_style_custom?: any;
    script_style_id?: string;
    selected_hook?: any;
    template_id: string;
    visual_style_custom?: any;
    visual_style_id?: string;
}
export interface CreateProduct {
    onboarding_data_id: string;
    product_id: string;
    success: boolean;
    videos_queued?: number;
}
export interface CreateProductCreateData {
    onboarding_data_id: string;
}
export interface CreateResetProductV6 {
    agents_transferred: number;
    credits_deducted: number;
    onboarding_data_id: string;
    product_id: string;
    remaining_credits: number;
    success: boolean;
    videos_queued: number;
}
export interface CreateResetProductV6CreateData {
    onboarding_data_id: string;
}
export interface CreateSora2Video {
    image_prompt?: any;
    main_prompt: string;
    model?: string;
    requires_polling?: boolean;
    seconds?: string;
    size?: string;
    video: Record<string, any>;
}
export interface CreateSora2VideoCreateData {
    image_prompt?: any;
    main_prompt: string;
    model?: string;
    seconds?: string;
    size?: string;
}
export interface CreateVariation {
    hook_duration: number;
    media_asset_id: string;
    message: string;
    product_id: string;
    prompt: string;
    task_id?: string;
    video_id: string;
}
export interface CreateVariationCreateData {
    hook_duration: number;
    media_asset_id: string;
    product_id: string;
    prompt: string;
}
export interface Customer {
    account_type?: any;
    assigned_agents_count: number;
    email: string;
    id: string;
    is_migrated?: boolean;
}
export interface CustomerListMatch {
    account_type?: any;
    assigned_agents_count?: number;
    email?: string;
    id?: string;
    is_migrated?: boolean;
}
export interface CustomerHealth {
    assigned_agents: Record<string, any>;
    available_dates: any[];
    date: string;
    email: string;
    entries: any[];
    id?: string;
    performance_overview: Record<string, any>;
    platform_coverage_summary: Record<string, any>;
    user_id: string;
}
export interface CustomerHealthLoadMatch {
    id: string;
    date?: any;
}
export interface CustomerHealthAllCustomersItem {
    account_type?: any;
    assigned_agents_count: number;
    daily_stats: any[];
    email: string;
    is_migrated?: boolean;
    total_views: number;
    user_id: string;
}
export interface CustomerHealthAllCustomersItemListMatch {
    limit?: number;
    offset?: number;
}
export interface CustomerHealthViewsSummary {
    average_views_per_result: number;
    date: string;
    end_date?: any;
    paid_users_count: number;
    posted_results: number;
    range: string;
    start_date?: any;
    top_users: any[];
    total_views: number;
    trend: any[];
    trend_granularity: string;
    user_email?: any;
    user_id?: string;
    users_with_views: number;
}
export interface CustomerHealthViewsSummaryListMatch {
    date?: any;
    range?: string;
    user_id?: string;
}
export interface Daily {
    id?: string;
}
export interface DailyCreateData {
    id: string;
    day: string;
    $action?: string;
    [action: string]: any;
}
export interface DailyStatus {
    id?: string;
}
export interface DailyStatusLoadMatch {
    id: string;
    day: string;
}
export interface DedicatedAgentsDashboard {
    active_connections: number;
    assigned_user_id?: string;
    assigned_user_ids?: any[];
    bio: any;
    id: string;
    instagram_url?: any;
    is_active: boolean;
    last_admin_synced_at?: any;
    name: string;
    role: any;
    tiktok_stats?: any;
    tiktok_url?: any;
    today_failed_entries?: any[];
    today_stats: Record<string, any>;
    upload_post_platforms?: any;
    upload_post_profile?: any;
    yesterday_failed_entries?: any[];
    yesterday_stats: Record<string, any>;
    youtube_url?: any;
}
export interface DedicatedAgentsDashboardListMatch {
    active_connections?: number;
    assigned_user_id?: string;
    assigned_user_ids?: any[];
    bio?: any;
    id?: string;
    instagram_url?: any;
    is_active?: boolean;
    last_admin_synced_at?: any;
    name?: string;
    role?: any;
    tiktok_stats?: any;
    tiktok_url?: any;
    today_failed_entries?: any[];
    today_stats?: Record<string, any>;
    upload_post_platforms?: any;
    upload_post_profile?: any;
    yesterday_failed_entries?: any[];
    yesterday_stats?: Record<string, any>;
    youtube_url?: any;
}
export interface EnterpriseAgent {
    count: number;
    product_id: string;
    source_product_id: string;
    target_product_id: string;
}
export interface EnterpriseAgentLoadMatch {
    count?: number;
    product_id?: string;
    source_product_id?: string;
    target_product_id?: string;
}
export interface EnterpriseAgentCreateData {
    count?: number;
    product_id: string;
    source_product_id: string;
    target_product_id: string;
}
export interface EnterpriseProduct {
}
export interface EnterpriseProductLoadMatch {
    product_id: string;
}
export interface ExactAvailability {
}
export interface ExactAvailabilityLoadMatch {
}
export interface ExactFormula {
}
export interface ExactFormulaLoadMatch {
}
export interface ExtractV2 {
    instagram_username?: any;
    message: string;
    status: string;
    url: string;
}
export interface ExtractV2CreateData {
    instagram_username?: any;
    url: string;
}
export interface FailedPost {
    agent_id: string;
    agent_name: any;
    agent_platforms: any;
    error_message: any;
    id: string;
    product_id: string;
    results: any;
    scheduled_datetime: string;
    source_type: string;
    status: string;
    user_email: string;
    user_id: string;
    user_name: any;
    video_id: string;
    video_url: any;
}
export interface FailedPostListMatch {
    day?: string;
}
export interface File {
    file: string;
}
export interface FileCreateData {
    file: string;
}
export interface GenerateBlackoutSora2Prompt {
    media_asset_id: string;
    product_id: string;
    prompt: string;
}
export interface GenerateBlackoutSora2PromptCreateData {
    media_asset_id: string;
    product_id: string;
}
export interface GeneratePomelliDemo {
    current_demo_count: number;
    max_demos?: number;
    message: string;
    product_id: string;
    success: boolean;
}
export interface GeneratePomelliDemoCreateData {
    product_id: string;
}
export interface GeneratePrompt {
    hook_duration: number;
    media_asset_id: string;
    media_asset_url: string;
    prompt: string;
}
export interface GeneratePromptCreateData {
    media_asset_id: string;
}
export interface GenerateSora2Prompt {
    prompt: string;
}
export interface GenerateSora2PromptLoadMatch {
    prompt?: string;
}
export interface Healthrx {
    account_id?: string;
    action?: string;
    agent_id: string;
    attempt: number;
    avatar_present?: boolean;
    benchmark_set: string;
    commercial?: boolean;
    commercial_license_evidence: string;
    content_id: string;
    dimensions: Record<string, any>;
    duration_seconds?: number;
    evidence: string;
    evidence_urls: any[];
    external_key: string;
    format?: string;
    includes_all_attempt_costs?: boolean;
    input_specification: Record<string, any>;
    kind: string;
    level?: number;
    measured_at: string;
    model_version: string;
    paid_campaign_id?: string;
    parent_content_id?: string;
    paused: boolean;
    pillar: string;
    profile: Record<string, any>;
    promotion_evidence?: string;
    provider: string;
    provider_invoice_evidence: string;
    reason: string;
    reference_version: string;
    request_key: string;
    scope?: string;
    test_variable: string;
    topic: string;
    total_cost_usd: number;
}
export interface HealthrxLoadMatch {
    account_id?: string;
    product_id: string;
}
export interface HealthrxCreateData {
    account_id?: string;
    product_id: string;
    content_id?: string;
    incident_id?: string;
    action?: string;
    agent_id: string;
    attempt: number;
    avatar_present?: boolean;
    benchmark_set: string;
    commercial?: boolean;
    commercial_license_evidence: string;
    dimensions: Record<string, any>;
    duration_seconds?: number;
    evidence: string;
    evidence_urls: any[];
    external_key: string;
    format?: string;
    includes_all_attempt_costs?: boolean;
    input_specification: Record<string, any>;
    kind: string;
    level?: number;
    measured_at: string;
    model_version: string;
    paid_campaign_id?: string;
    parent_content_id?: string;
    paused: boolean;
    pillar: string;
    profile: Record<string, any>;
    promotion_evidence?: string;
    provider: string;
    provider_invoice_evidence: string;
    reason: string;
    reference_version: string;
    request_key: string;
    scope?: string;
    test_variable: string;
    topic: string;
    total_cost_usd: number;
    $action?: string;
    [action: string]: any;
}
export interface InitResetProductV6 {
    auto_schedule_disabled: boolean;
    old_product_id: string;
    product_id?: string;
    queue_entries_cleared: number;
    success: boolean;
}
export interface InitResetProductV6CreateData {
    product_id?: string;
}
export interface Iri {
    correlationId?: any;
    idempotencyKey: string;
    productId?: any;
}
export interface IriCreateData {
    connector_id: string;
    correlationId?: any;
    idempotencyKey: string;
    productId?: any;
}
export interface IrisCapability {
    capability: string;
    correlationId: string;
    errorCode?: any;
    externalProductId?: any;
    externalUserId: string;
    id?: string;
    idempotencyKey: string;
    input?: Record<string, any>;
    membershipId?: any;
    message?: any;
    ok: boolean;
    platformAccountId?: any;
    platformLinkId?: any;
    productScope: string;
    requestedBy?: Record<string, any>;
    result?: Record<string, any>;
    retryable?: boolean;
}
export interface IrisCapabilityCreateData {
    id: string;
    capability: string;
    correlationId: string;
    externalProductId?: any;
    externalUserId: string;
    idempotencyKey: string;
    input?: Record<string, any>;
    membershipId?: any;
    platformAccountId?: any;
    platformLinkId?: any;
    productScope: string;
    requestedBy?: Record<string, any>;
}
export interface IrisChat {
    artifacts?: any[];
    correlationId: string;
    idempotencyKey: string;
    message: string;
    mode: string;
    ok?: boolean;
    pageContext?: Record<string, any>;
    productId?: any;
    runtimeStatus: string;
    sessionId?: any;
}
export interface IrisChatCreateData {
    correlationId: string;
    idempotencyKey: string;
    message: string;
    pageContext?: Record<string, any>;
    productId?: any;
    sessionId?: any;
}
export interface IrisConnector {
    connectors?: any[];
}
export interface IrisConnectorListMatch {
    connectors?: any[];
}
export interface IrisStatus {
    connectorsPreview?: any[];
    product?: any;
    status: Record<string, any>;
    tasksPreview?: any[];
}
export interface IrisStatusListMatch {
    product_id?: string;
}
export interface IrisTask {
    approvalRequired?: boolean;
    cadence?: string;
    capability?: any;
    completed?: any[];
    description?: string;
    discover?: any[];
    productId?: any;
    recurring?: any[];
    requiredConnectors?: any[];
    title: string;
}
export interface IrisTaskListMatch {
    product_id?: string;
}
export interface IrisTaskCreateData {
    approvalRequired?: boolean;
    cadence?: string;
    capability?: any;
    description?: string;
    productId?: any;
    requiredConnectors?: any[];
    title: string;
}
export interface IrisUsage {
    eventCount?: number;
    events?: any[];
    membershipId?: any;
    productScope?: string;
}
export interface IrisUsageListMatch {
    eventCount?: number;
    events?: any[];
    membershipId?: any;
    productScope?: string;
}
export interface Landing {
    file: string;
}
export interface LandingCreateData {
    index: number;
    product_id?: string;
    file: string;
    $action?: string;
    [action: string]: any;
}
export interface LandingStat {
    landing: Record<string, any>;
    microhub: Record<string, any>;
}
export interface LandingStatLoadMatch {
    slug: string;
    product_id?: string;
}
export interface LandingStatus {
    errorMessage?: any;
    landingStatus: string;
    microhubStatus: string;
}
export interface LandingStatusLoadMatch {
    product_id?: string;
}
export interface LinkInBio {
    linkInBioType: string;
    redirectUrl: string;
    slug: string;
}
export interface LinkInBioLoadMatch {
    slug: string;
}
export interface LinkInDm {
    linkInDmsType: string;
    redirectUrl: string;
    slug: string;
}
export interface LinkInDmLoadMatch {
    slug: string;
}
export interface LinkInPost {
    linkInPostsType: string;
    redirectUrl: string;
    showLinkInFirstComment: boolean;
    slug: string;
}
export interface LinkInPostLoadMatch {
    slug: string;
}
export interface LinkUser {
    already_linked?: boolean;
    onboarding_data_id: string;
    success: boolean;
}
export interface LinkUserCreateData {
    onboarding_data_id: string;
}
export interface MediaAsset {
    category: string;
    createdAt: string;
    description?: string;
    file: string;
    id: string;
    media_assets: any[];
    onboardingDataId?: any;
    onboarding_data_id: string;
    productId?: any;
    product_id?: string;
    source: string;
    type: string;
    updatedAt: string;
    url: string;
    usedAt?: any;
    veo3VideoId?: any;
}
export interface MediaAssetLoadMatch {
    id: string;
}
export interface MediaAssetCreateData {
    category: string;
    createdAt: string;
    description?: string;
    file: string;
    id: string;
    media_assets: any[];
    onboardingDataId?: any;
    onboarding_data_id: string;
    productId?: any;
    product_id?: string;
    source: string;
    type: string;
    updatedAt: string;
    url: string;
    usedAt?: any;
    veo3VideoId?: any;
    $action?: string;
    [action: string]: any;
}
export interface Men {
}
export interface MenListMatch {
    bookmarked?: any;
    category?: any;
    limit?: number;
    offset?: number;
    product_id?: string;
}
export interface Microdrama {
    evidence: Record<string, any>;
    expected_revision: number;
    idempotency_key: string;
    issues?: any[];
    reason: string;
    role: string;
    scores: Record<string, any>;
    selected_premise_id?: string;
    stage: string;
    status: string;
    subject_hash: string;
    title?: string;
    verdict: string;
}
export interface MicrodramaLoadMatch {
    episode_id: string;
    $action?: string;
    [action: string]: any;
}
export interface MicrodramaCreateData {
    episode_id: string;
    evidence: Record<string, any>;
    expected_revision: number;
    idempotency_key: string;
    issues?: any[];
    reason: string;
    role: string;
    scores: Record<string, any>;
    selected_premise_id?: string;
    stage: string;
    status: string;
    subject_hash: string;
    title?: string;
    verdict: string;
    $action?: string;
    [action: string]: any;
}
export interface MicrodramaUpdateData {
    episode_id: string;
    expected_revision?: number;
    selected_premise_id?: string;
    title?: string;
}
export interface MicrohubPublic {
    bio?: any;
    ctaButtonText?: any;
    ctaDescription?: any;
    ctaLink?: any;
    ctaTitle?: any;
    headerImageUrl?: any;
    links?: any[];
    name?: string;
    profileImageUrl?: any;
    slug: string;
    socialLinks?: Record<string, any>;
    testimonials?: any[];
}
export interface MicrohubPublicLoadMatch {
    slug: string;
}
export interface OnboardingStatus {
    comments?: number;
    cover_image_url?: any;
    id: string;
    likes?: number;
    platform: string;
    video_url?: any;
    views?: number;
}
export interface OnboardingStatusListMatch {
    account_type?: any;
    oid: string;
}
export interface OnboardingV6 {
}
export interface OnboardingV6RemoveMatch {
    media_asset_id: string;
    onboarding_data_id: string;
}
export interface PaidUser {
    agents_count: number;
    assigned_agents_count?: number;
    auto_schedule_enabled: any;
    credits: number;
    effective_agents_count: number;
    email: string;
    id: string;
    is_internal_user?: boolean;
    is_migrated_user?: boolean;
    membership: any;
    scheduled_queue_count: number;
    subscription_details?: any;
    subscription_status: any;
}
export interface PaidUserListMatch {
    agents_count?: number;
    assigned_agents_count?: number;
    auto_schedule_enabled?: any;
    credits?: number;
    effective_agents_count?: number;
    email?: string;
    id?: string;
    is_internal_user?: boolean;
    is_migrated_user?: boolean;
    membership?: any;
    scheduled_queue_count?: number;
    subscription_details?: any;
    subscription_status?: any;
}
export interface Pexel {
}
export interface PexelListMatch {
    count?: number;
    media_type?: string;
    orientation?: string;
    page?: number;
    query?: string;
    $action?: string;
    [action: string]: any;
}
export interface PhoneAdminAvailableAgentSource {
    available_count: number;
    pc_name: string;
}
export interface PhoneAdminAvailableAgentSourceListMatch {
    available_count?: number;
    pc_name?: string;
}
export interface Product {
    agent_count: number;
    agents: any[];
    createdAt?: any;
    demoVideos?: any;
    description?: string;
    favicon_url?: any;
    howItWorks?: any;
    how_it_works?: any;
    id: string;
    images?: any;
    initial_agents?: number;
    instagramHandle?: any;
    instagram_handle?: any;
    isActive?: any;
    isApp?: any;
    is_active: boolean;
    is_app?: boolean;
    language?: any;
    mediaAssets?: any;
    media_asset_ids?: any;
    media_assets?: any;
    name: string;
    otherInstructions?: any;
    other_instructions?: any;
    outroVideo?: any;
    pexelsVideos?: any;
    pricing?: any;
    pricingAndOffers?: any;
    pricing_and_offers?: any;
    product_demo_ids?: any[];
    product_details: Record<string, any>;
    product_id: string;
    product_name: string;
    product_url: string;
    pronunciation?: any;
    regenerate_sora2?: boolean;
    repostSource?: any;
    repost_source?: any;
    screenshot_url?: any;
    social_post_ids?: any[];
    targetAudience?: any;
    target_audience?: any;
    templateProductId?: any;
    tiktokHandle?: any;
    tiktok_handle?: any;
    total_count: number;
    updatedAt?: any;
    url: string;
    userId: string;
}
export interface ProductLoadMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface ProductListMatch {
    agent_count?: number;
    agents?: any[];
    createdAt?: any;
    demoVideos?: any;
    description?: string;
    favicon_url?: any;
    howItWorks?: any;
    how_it_works?: any;
    id?: string;
    images?: any;
    initial_agents?: number;
    instagramHandle?: any;
    instagram_handle?: any;
    isActive?: any;
    isApp?: any;
    is_active?: boolean;
    is_app?: boolean;
    language?: any;
    mediaAssets?: any;
    media_asset_ids?: any;
    media_assets?: any;
    name?: string;
    otherInstructions?: any;
    other_instructions?: any;
    outroVideo?: any;
    pexelsVideos?: any;
    pricing?: any;
    pricingAndOffers?: any;
    pricing_and_offers?: any;
    product_demo_ids?: any[];
    product_details?: Record<string, any>;
    product_id?: string;
    product_name?: string;
    product_url?: string;
    pronunciation?: any;
    regenerate_sora2?: boolean;
    repostSource?: any;
    repost_source?: any;
    screenshot_url?: any;
    social_post_ids?: any[];
    targetAudience?: any;
    target_audience?: any;
    templateProductId?: any;
    tiktokHandle?: any;
    tiktok_handle?: any;
    total_count?: number;
    updatedAt?: any;
    url?: string;
    userId?: string;
}
export interface ProductCreateData {
    favicon_url?: any;
    initial_agents?: number;
    product_demo_ids?: any[];
    product_details: Record<string, any>;
    product_url: string;
    screenshot_url?: any;
    social_post_ids?: any[];
    $action?: string;
    [action: string]: any;
}
export interface ProductUpdateData {
    id: string;
    description?: string;
    how_it_works?: any;
    instagram_handle?: any;
    is_app?: boolean;
    language?: any;
    media_asset_ids?: any;
    name?: string;
    other_instructions?: any;
    pricing_and_offers?: any;
    pronunciation?: any;
    regenerate_sora2?: boolean;
    repost_source?: any;
    target_audience?: any;
    tiktok_handle?: any;
    url?: string;
    $action?: string;
    [action: string]: any;
}
export interface ProductRemoveMatch {
    id: string;
}
export interface ProductDashboard {
    agents: any[];
    date: string;
    pagination: Record<string, any>;
    phone_admin_error?: any;
    products: any[];
    selected_product: any;
    summary: Record<string, any>;
}
export interface ProductDashboardListMatch {
    date?: any;
    page?: number;
    page_size?: number;
    product_id?: string;
    search?: any;
}
export interface ProductDashboardView {
    date: string;
    views: number;
}
export interface ProductDashboardViewListMatch {
    date?: any;
    product_id: string;
    range?: number;
}
export interface ProductDemo {
    created_at: string;
    description?: string;
    id: string;
    source: string;
    type: string;
    url: string;
}
export interface ProductDemoListMatch {
    product_id?: string;
}
export interface ProductLanding {
    bio?: any;
    commentingOnMyPosts: boolean;
    commentingOnOthersPosts: boolean;
    ctaButtonText?: any;
    ctaDescription?: any;
    ctaLink?: any;
    ctaTitle?: any;
    dmCommenters: boolean;
    dmInitialMessagePrompt?: any;
    dmOngoingResponsePrompt?: any;
    firstCommentTextBeforeLink?: any;
    headerImageUrl?: any;
    id: string;
    landingHtmlUrl?: any;
    landingLastGeneratedAt?: any;
    landingReferenceScreenshotUrl?: any;
    landingScreenshotUrl?: any;
    landingStatus: string;
    landingUrl: string;
    linkInBioType: string;
    linkInDmsType: string;
    linkInPostsType: string;
    links?: any;
    microhubBio?: any;
    microhubCtaButtonText?: any;
    microhubCtaDescription?: any;
    microhubCtaLink?: any;
    microhubCtaTitle?: any;
    microhubHeaderImageUrl?: any;
    microhubLinks?: any[];
    microhubName?: any;
    microhubProfileImageUrl?: any;
    microhubScreenshotUrl?: any;
    microhubSocialLinks?: Record<string, any>;
    microhubStatus: string;
    microhubTestimonials?: any[];
    microhubUrl: string;
    myPostsStylePrompt?: any;
    name?: string;
    othersStylePrompt?: any;
    othersTargetMarketPrompt?: any;
    productLinkSelection: string;
    productUrl?: any;
    profileImageUrl?: any;
    shortLink?: any;
    shortLinkKeyword?: any;
    showLinkInFirstComment: boolean;
    slug: string;
    socialLinks?: any;
    testimonials?: any;
}
export interface ProductLandingListMatch {
    product_id?: string;
}
export interface ProductLandingUpdateData {
    product_id?: string;
    bio?: any;
    commentingOnMyPosts?: boolean;
    commentingOnOthersPosts?: boolean;
    ctaButtonText?: any;
    ctaDescription?: any;
    ctaLink?: any;
    ctaTitle?: any;
    dmCommenters?: boolean;
    dmInitialMessagePrompt?: any;
    dmOngoingResponsePrompt?: any;
    firstCommentTextBeforeLink?: any;
    headerImageUrl?: any;
    linkInBioType?: string;
    linkInDmsType?: string;
    linkInPostsType?: string;
    links?: any;
    myPostsStylePrompt?: any;
    name?: string;
    othersStylePrompt?: any;
    othersTargetMarketPrompt?: any;
    productLinkSelection?: string;
    profileImageUrl?: any;
    shortLink?: any;
    shortLinkKeyword?: any;
    showLinkInFirstComment?: boolean;
    slug?: string;
    socialLinks?: any;
    testimonials?: any;
}
export interface PublicResumeStatus {
    can_resume_prelogin?: boolean;
    content_collection_ready?: boolean;
    current_step?: any;
    exists: boolean;
    flow_variant?: any;
    repost_content_count?: number;
    repost_source?: any;
    requires_repost_content?: boolean;
    skip_demo?: boolean;
}
export interface PublicResumeStatusLoadMatch {
    oid: string;
}
export interface ReRollVideo {
    queue_id: string;
    requires_polling?: boolean;
    skip_credit_check?: boolean;
    video: Record<string, any>;
}
export interface ReRollVideoCreateData {
    queue_id: string;
    skip_credit_check?: boolean;
}
export interface ReadRootGet {
}
export interface ReadRootGetLoadMatch {
}
export interface RecordDemoBooked {
    calendlyEventUri?: any;
    calendlyInviteeUri?: any;
    message: Record<string, any>;
    session: Record<string, any>;
}
export interface RecordDemoBookedCreateData {
    session_id: string;
    calendlyEventUri?: any;
    calendlyInviteeUri?: any;
}
export interface RefreshStat {
    date_from?: any;
    date_to?: any;
    entries_found: number;
    message: string;
    provider: string;
    status: string;
    summary?: any;
}
export interface RefreshStatCreateData {
    email?: string;
    user_id?: string;
    date_from?: any;
    date_to?: any;
    provider?: string;
}
export interface RemixerClipper {
}
export interface RemixerClipperLoadMatch {
    $action?: string;
    [action: string]: any;
}
export interface RemixerClipperCreateData {
    identifier: string;
}
export interface ResetProduct {
}
export interface ResetProductLoadMatch {
}
export interface ResetProductCreateData {
    $action?: string;
    [action: string]: any;
}
export interface RetryWebsiteScrape {
    flow_variant?: string;
    onboarding_data_id: string;
    skip_demo?: boolean;
    status: string;
    success: boolean;
    url: string;
}
export interface RetryWebsiteScrapeCreateData {
    onboarding_data_id: string;
    url: string;
}
export interface SaveSurvey {
    email_sent?: boolean;
    onboarding_data_id: string;
    success: boolean;
    survey: Record<string, any>;
}
export interface SaveSurveyCreateData {
    onboarding_data_id: string;
    survey: Record<string, any>;
}
export interface ScanSocial {
    instagram_handle?: any;
    onboarding_data_id: string;
    product_id: string;
    status: string;
    success: boolean;
    task_id?: string;
    tiktok_handle?: any;
}
export interface ScanSocialCreateData {
    instagram_handle?: any;
    onboarding_data_id: string;
    product_id?: string;
    tiktok_handle: any;
}
export interface ScanSocialsPublic {
    instagram_handle?: any;
    message?: any;
    onboarding_data_id: string;
    status: string;
    success: boolean;
    tiktok_handle?: any;
}
export interface ScanSocialsPublicCreateData {
    instagram_handle?: any;
    onboarding_data_id: string;
    tiktok_handle?: any;
}
export interface ScanSocialsStatus {
    ads_count?: number;
    onboarding_data_id: string;
    product_id?: string;
    status: string;
    task_id?: string;
}
export interface ScanSocialsStatusLoadMatch {
    onboarding_data_id?: string;
    product_id?: string;
}
export interface ScheduleV2 {
    agent?: any;
    comment?: any;
    created_at: string;
    id: string;
    instagram_posted_by?: any;
    instagram_posted_url?: any;
    instagram_scraped_social_post_id?: string;
    is_instagram_posted?: boolean;
    is_tiktok_posted?: boolean;
    is_youtube_posted?: boolean;
    reorders: any[];
    results?: any;
    scheduled_datetime: string;
    source_type: string;
    status: string;
    tiktok_posted_by?: any;
    tiktok_posted_url?: any;
    tiktok_scraped_social_post_id?: string;
    video?: any;
    video_id: string;
    youtube_posted_by?: any;
    youtube_posted_url?: any;
    youtube_scraped_social_post_id?: string;
}
export interface ScheduleV2LoadMatch {
    all_product?: boolean;
    day?: number;
    limit?: number;
    offset?: number;
    product_id?: string;
}
export interface ScheduleV2ListMatch {
    all_product?: boolean;
    limit?: number;
    offset?: number;
    product_id?: string;
    status?: any;
}
export interface ScheduleV2CreateData {
    agent?: any;
    comment?: any;
    created_at: string;
    id: string;
    instagram_posted_by?: any;
    instagram_posted_url?: any;
    instagram_scraped_social_post_id?: string;
    is_instagram_posted?: boolean;
    is_tiktok_posted?: boolean;
    is_youtube_posted?: boolean;
    reorders: any[];
    results?: any;
    scheduled_datetime: string;
    source_type: string;
    status: string;
    tiktok_posted_by?: any;
    tiktok_posted_url?: any;
    tiktok_scraped_social_post_id?: string;
    video?: any;
    video_id: string;
    youtube_posted_by?: any;
    youtube_posted_url?: any;
    youtube_scraped_social_post_id?: string;
}
export interface ScheduleV2UpdateData {
    queue_id: string;
    video_id?: string;
    $action?: string;
    [action: string]: any;
}
export interface ScheduleV2RemoveMatch {
    queue_id: string;
}
export interface Scrape {
    old_product_id: string;
    onboarding_data_id: string;
    status: string;
    success: boolean;
    url: string;
}
export interface ScrapeCreateData {
    old_product_id: string;
    url: string;
}
export interface ScrapeWebsitePublic {
    flow_variant?: string;
    onboarding_data_id: string;
    skip_demo?: boolean;
    status: string;
    success: boolean;
    url: string;
}
export interface ScrapeWebsitePublicCreateData {
    context?: any;
    flow?: any;
    skip_demo?: boolean;
    url: string;
}
export interface ScrapedData {
    description: string;
    homepageVideoUrl?: any;
    howItWorks: string;
    imageUrls: any[];
    instagram_username?: any;
    mediaAssets?: any[];
    name: string;
    pricingAndOffers: string;
    targetAudience: string;
    url: string;
}
export interface ScrapedDataCreateData {
    instagram_username?: any;
    url: string;
}
export interface ScrapingStatus {
}
export interface ScrapingStatusLoadMatch {
}
export interface SelfServeActivate {
    onboarding_data_id: string;
    redirect_to_stripe?: boolean;
    stripe_checkout_url?: any;
    success: boolean;
}
export interface SelfServeActivateCreateData {
    onboarding_data_id: string;
}
export interface Seo {
}
export interface SeoLoadMatch {
}
export interface SeoAiMention {
    bucket: string;
    domain_type: string;
    dominant_domain: string;
    engine: string;
    evidence: Record<string, any>;
    geo: string;
    language: string;
    primary_url: string;
    prompt_text: string;
    run_week: string;
    secondary_urls: any[];
}
export interface SeoAiMentionListMatch {
    limit?: number;
    product_id?: string;
}
export interface SeoBacklink {
    anchor_text: string;
    first_seen: string;
    referring_domain: string;
    status: string;
    target_page: string;
}
export interface SeoBacklinkListMatch {
    limit?: number;
    product_id?: string;
}
export interface SeoKeyword {
    blog_page: string;
    current_position: number;
    keyword: string;
    keyword_group: string;
    position_change: number;
}
export interface SeoKeywordListMatch {
    day?: number;
    limit?: number;
    product_id?: string;
}
export interface SeoOverview {
    clicks: number;
    ctr: number;
    date: string;
    impressions: number;
    position: number;
}
export interface SeoOverviewListMatch {
    day?: number;
    product_id?: string;
}
export interface SeoTraffic {
    end_date: string;
    series: any[];
    site_url: string;
    start_date: string;
    top_countries: any[];
    top_pages: any[];
    top_queries: any[];
    totals: Record<string, any>;
}
export interface SeoTrafficListMatch {
    day?: number;
    product_id?: string;
    top_limit?: number;
}
export interface ShareAccessLink {
    share_token: string;
    share_url: string;
}
export interface ShareAccessLinkCreateData {
    share_token: string;
    share_url: string;
}
export interface Site {
}
export interface SiteLoadMatch {
    $action?: string;
    [action: string]: any;
}
export interface Slide {
    caption?: any;
    id?: string;
    prompt?: any;
}
export interface SlideCreateData {
    carousel_id: string;
    slide_index: number;
    caption?: any;
    prompt?: any;
    image_model?: any;
    $action?: string;
    [action: string]: any;
}
export interface SlideUpdateData {
    carousel_id: string;
    id: number;
    caption?: any;
    prompt?: any;
}
export interface SlugValidation {
    reason?: any;
    valid: boolean;
}
export interface SlugValidationLoadMatch {
    slug: string;
    product_id?: string;
}
export interface Social {
    code: string;
    code_verifier: string;
    createdAt: string;
    id: string;
    platform: string;
    platformUserId: string;
    updatedAt?: any;
    userId: string;
    username?: string;
}
export interface SocialLoadMatch {
    code_challenge?: any;
    code_challenge_method?: string;
}
export interface SocialListMatch {
    code?: string;
    code_verifier?: string;
    createdAt?: string;
    id?: string;
    platform?: string;
    platformUserId?: string;
    updatedAt?: any;
    userId?: string;
    username?: string;
    $action?: string;
    [action: string]: any;
}
export interface SocialCreateData {
    code: string;
    code_verifier: string;
}
export interface SocialRemoveMatch {
    platform: string;
}
export interface SocialScanPreview {
    instagram_handle?: any;
    posts: any[];
    success: boolean;
    tiktok_handle?: any;
}
export interface SocialScanPreviewCreateData {
    instagram_handle?: any;
    tiktok_handle?: any;
}
export interface SocialScanProcess {
    posts: any[];
    product_id: string;
    success: boolean;
    task_id?: string;
}
export interface SocialScanProcessCreateData {
    posts: any[];
    product_id: string;
}
export interface SocialScanSave {
    media_asset_ids: any[];
    posts: any[];
    product_id: string;
    success: boolean;
}
export interface SocialScanSaveCreateData {
    posts: any[];
    product_id: string;
}
export interface Sora2Avatar {
    avatar_frame_url?: any;
    created_at: string;
    current_step?: number;
    headshot_url?: any;
    id: string;
    logs?: Record<string, any>;
    prompt_key: string;
    run_output_dir?: any;
    selected_age_bucket: string;
    selected_gender: string;
    selected_prompt?: any;
    selected_race: string;
    sora2_cameo_handle?: any;
    sora2_cameo_id?: string;
    sora2_cameo_link?: any;
    sora2_display_name?: any;
    sora2_task_id?: string;
    sora2_video_url: string;
    updated_at: string;
}
export interface Sora2AvatarLoadMatch {
    id: string;
}
export interface Sora2AvatarListMatch {
    completed_only?: boolean;
    current_step?: any;
    page?: number;
    page_size?: number;
    prompt_key?: any;
    search?: any;
    selected_age_bucket?: any;
    selected_gender?: any;
    selected_race?: any;
}
export interface Sora2AvatarCreateData {
    avatar_frame_url?: any;
    current_step?: number;
    headshot_url?: any;
    logs?: Record<string, any>;
    prompt_key: string;
    run_output_dir?: any;
    selected_age_bucket: string;
    selected_gender: string;
    selected_prompt?: any;
    selected_race: string;
    sora2_cameo_handle?: any;
    sora2_cameo_id?: string;
    sora2_cameo_link?: any;
    sora2_display_name?: any;
    sora2_task_id?: string;
    sora2_video_url: string;
}
export interface Sora2AvatarUpdateData {
    id: string;
    avatar_frame_url?: any;
    current_step?: number;
    headshot_url?: any;
    logs?: Record<string, any>;
    prompt_key?: string;
    run_output_dir?: any;
    selected_age_bucket?: string;
    selected_gender?: string;
    selected_prompt?: any;
    selected_race?: string;
    sora2_cameo_handle?: any;
    sora2_cameo_id?: string;
    sora2_cameo_link?: any;
    sora2_display_name?: any;
    sora2_task_id?: string;
    sora2_video_url?: string;
}
export interface Sora2AvatarAssetUpload {
    avatar_id?: string;
    file: string;
    run_output_dir?: any;
    s3_key: string;
    upload_type: string;
    url: string;
}
export interface Sora2AvatarAssetUploadCreateData {
    avatar_id?: string;
    file: string;
    run_output_dir?: any;
    s3_key: string;
    upload_type: string;
    url: string;
}
export interface Sora2AvatarStat {
    by_age_bucket: Record<string, any>;
    by_gender: Record<string, any>;
    by_prompt_key: Record<string, any>;
    by_race: Record<string, any>;
    completed_avatars: number;
    completion_rate: number;
    total_avatars: number;
}
export interface Sora2AvatarStatLoadMatch {
    prompt_key?: any;
    selected_age_bucket?: any;
    selected_gender?: any;
    selected_race?: any;
}
export interface Stat {
}
export interface StatListMatch {
    day?: number;
    $action?: string;
    [action: string]: any;
}
export interface StatsRefreshBackfill {
    message: string;
    status: string;
    task_id: string;
}
export interface StatsRefreshBackfillCreateData {
    day?: number;
    days?: any;
    user_emails?: any;
}
export interface StatsRefreshIssue {
    aged_over_24h: boolean;
    agent_id?: string;
    agent_name_snapshot?: any;
    first_detected_at: string;
    id: string;
    last_detected_at: string;
    last_refresh_completed_at?: any;
    last_seen_run_id?: string;
    latest_error_message?: any;
    next_retry_at?: any;
    platform: string;
    post_method?: any;
    post_url?: any;
    posted_date_et: string;
    product_id?: string;
    product_name_snapshot?: any;
    reason_code: string;
    resolved_at?: any;
    retry_count: number;
    schedule_queue_id?: string;
    scheduled_datetime_utc: string;
    stale_after_sla: boolean;
    status: string;
    user_email_snapshot: string;
    user_id: string;
}
export interface StatsRefreshIssueListMatch {
    date_from?: any;
    date_to?: any;
    limit?: number;
    offset?: number;
    platform?: any;
    posting_method?: any;
    query?: any;
    reason?: any;
    status?: string;
}
export interface StatsRefreshOverview {
    active_run?: any;
    aged_over_24h: number;
    backlog_preview: any[];
    coverage_percent: number;
    customer_counts: Record<string, any>;
    date: string;
    generated_at: string;
    method_counts: Record<string, any>;
    platform_counts: Record<string, any>;
    platform_units_resolved: number;
    platform_units_total: number;
    platform_units_unresolved: number;
    posted_entries: number;
    reason_counts: Record<string, any>;
    sla_deadline_et: string;
    stale_after_sla: number;
    top_affected_customers: any[];
}
export interface StatsRefreshOverviewListMatch {
    date?: any;
}
export interface StatsRefreshRunSummary {
    celery_task_id?: string;
    completed_at?: any;
    entries_failed: number;
    entries_skipped: number;
    entries_total: number;
    entries_updated: number;
    error_summary_json?: any;
    id: string;
    issues_opened: number;
    issues_resolved: number;
    platform_units_resolved: number;
    platform_units_total: number;
    platform_units_unresolved: number;
    platform_updates_via_profile: number;
    platform_updates_via_url: number;
    provider?: any;
    refresh_trigger?: any;
    requested_by_email?: any;
    run_type: string;
    started_at: string;
    status: string;
    target_date_et?: any;
    users_count: number;
}
export interface StatsRefreshRunSummaryListMatch {
    date_from?: any;
    date_to?: any;
    include_global?: boolean;
    limit?: number;
    offset?: number;
    run_type?: any;
    status?: any;
}
export interface StatsRefreshTaskTrigger {
    message: string;
    status: string;
    target_date: string;
    task_id: string;
    users_count?: number;
}
export interface StatsRefreshTaskTriggerCreateData {
    message: string;
    status: string;
    target_date: string;
    task_id: string;
    users_count?: number;
}
export interface Stripe {
}
export interface StripeCreateData {
    chat_plan_id?: any;
    checkout_session_id?: any;
    coupon_id?: any;
    credits_per_unit?: any;
    membership?: any;
    onboarding_data_id?: any;
    quantity?: any;
    $action?: string;
    [action: string]: any;
}
export interface Style {
}
export interface StyleLoadMatch {
}
export interface Template {
}
export interface TemplateLoadMatch {
}
export interface TikTokCreatorInfo {
    commentDisabled?: boolean;
    creatorAvatarUrl?: any;
    creatorNickname?: any;
    creatorUsername?: any;
    duetDisabled?: boolean;
    maxVideoPostDurationSec?: number;
    privacyLevelOptions?: any[];
    stitchDisabled?: boolean;
}
export interface TikTokCreatorInfoListMatch {
    commentDisabled?: boolean;
    creatorAvatarUrl?: any;
    creatorNickname?: any;
    creatorUsername?: any;
    duetDisabled?: boolean;
    maxVideoPostDurationSec?: number;
    privacyLevelOptions?: any[];
    stitchDisabled?: boolean;
}
export interface TopPost {
    comments: number;
    id: string;
    likes: number;
    platforms: any[];
    scheduled_datetime: string;
    user_email: string;
    user_id: string;
    views: number;
}
export interface TopPostListMatch {
    date: string;
}
export interface UploadPostAgent {
}
export interface UploadPostAgentCreateData {
    $action?: string;
    [action: string]: any;
}
export interface User {
    accountType?: any;
    activatedByAdminAt?: any;
    activatedByAdminId?: any;
    agents: any[];
    agentsCount?: any;
    attribution?: any;
    avatarImageUrl?: any;
    avatarVoiceUrl?: any;
    createdAt: string;
    credits?: number;
    email: string;
    googleId?: any;
    hasSeenScheduleWelcome?: boolean;
    id: string;
    industry?: any;
    instagramId?: any;
    isActivatedByAdmin?: boolean;
    isAdmin?: boolean;
    isInternalUser?: any;
    isMigrated?: any;
    isResettingProduct?: any;
    membership?: any;
    name: string;
    partnerDirectLoginDisabled?: boolean;
    partnerExternalUserId?: any;
    partnerPolicyCode?: any;
    partnerSource?: any;
    picture?: any;
    stripeCustomerId?: any;
    stripeSubscriptionId?: any;
    subscriptionCurrentPeriodEnd?: any;
    subscriptionStatus?: any;
    totalCount: number;
    updatedAt: string;
    userId: string;
}
export interface UserLoadMatch {
    id: string;
    product_id?: string;
}
export interface UserUpdateData {
    accountType?: any;
    activatedByAdminAt?: any;
    activatedByAdminId?: any;
    agents?: any[];
    agentsCount?: any;
    attribution?: any;
    avatarImageUrl?: any;
    avatarVoiceUrl?: any;
    createdAt?: string;
    credits?: number;
    email?: string;
    googleId?: any;
    hasSeenScheduleWelcome?: boolean;
    id?: string;
    industry?: any;
    instagramId?: any;
    isActivatedByAdmin?: boolean;
    isAdmin?: boolean;
    isInternalUser?: any;
    isMigrated?: any;
    isResettingProduct?: any;
    membership?: any;
    name?: string;
    partnerDirectLoginDisabled?: boolean;
    partnerExternalUserId?: any;
    partnerPolicyCode?: any;
    partnerSource?: any;
    picture?: any;
    stripeCustomerId?: any;
    stripeSubscriptionId?: any;
    subscriptionCurrentPeriodEnd?: any;
    subscriptionStatus?: any;
    totalCount?: number;
    updatedAt?: string;
    userId?: string;
    $action?: string;
    [action: string]: any;
}
export interface UserAgent {
    agent: Record<string, any>;
    assigned_at: string;
    assignment_id: string;
    expires_at?: any;
    id?: string;
    status: string;
}
export interface UserAgentListMatch {
    id: string;
    limit?: number;
    offset?: number;
    product_id?: string;
}
export interface UserAgentCreateData {
    id: string;
    agent_id?: string;
    phone_admin_pc_name?: any;
    product_id?: string;
    agent: Record<string, any>;
    assigned_at: string;
    assignment_id: string;
    expires_at?: any;
    status: string;
}
export interface UserHealthDetail {
    account_type: any;
    activated: boolean;
    activated_by_admin_at?: any;
    activated_by_admin_id?: string;
    admin_notes?: any;
    agents_count?: number;
    assigned_agents: any[];
    assigned_agents_count: number;
    assigned_agents_preview_limit?: number;
    assigned_agents_truncated?: boolean;
    auto_schedule_enabled: boolean;
    comments_expected_per_day?: number;
    comments_fix_block_reason?: any;
    comments_fix_ready?: boolean;
    comments_today_failed?: number;
    comments_today_posted?: number;
    comments_today_scheduled?: number;
    comments_yesterday_failed?: number;
    comments_yesterday_posted?: number;
    comments_yesterday_total?: number;
    created_at: string;
    credits: number;
    effective_posted_video_reuse_percent: number;
    email: string;
    expected_agents_count: number;
    id: string;
    is_activated_by_admin: boolean;
    is_admin: boolean;
    is_bookmarked?: boolean;
    is_internal_user: boolean;
    is_migrated: boolean;
    landing_slug?: any;
    landing_status?: any;
    landing_url?: any;
    membership: any;
    microhub_status?: any;
    microhub_url?: any;
    name: string;
    onboarding_flow: string;
    posted_video_reuse_percent?: any;
    product_id: string;
    product_name: any;
    product_url: any;
    subscription_status: any;
    survey_data?: any;
    today_failed: number;
    today_posted: number;
    today_scheduled: number;
    tomorrow_capacity: number;
    tomorrow_scheduled: number;
    videos_completed: number;
    videos_failed: number;
    videos_pending: number;
    videos_stale: number;
    videos_total: number;
    yesterday_failed: number;
    yesterday_failed_entries: any[];
    yesterday_posted: number;
    yesterday_total: number;
}
export interface UserHealthDetailListMatch {
    id: string;
    assigned_agents_preview_limit?: number;
    product_id?: string;
}
export interface UserWithAvatarSubmission {
    avatar_image_url: string;
    avatar_voice_url: string;
    created_at: string;
    email: string;
    id: string;
    name: string;
}
export interface UserWithAvatarSubmissionListMatch {
    avatar_image_url?: string;
    avatar_voice_url?: string;
    created_at?: string;
    email?: string;
    id?: string;
    name?: string;
}
export interface UsersHealth {
    account_type: any;
    admin_notes?: any;
    agents_count: number;
    agents_health: string;
    agents_issue: any;
    assigned_agents_count: number;
    auto_schedule_enabled: boolean;
    auto_schedule_health: string;
    auto_schedule_issue: any;
    auto_schedule_today_health: string;
    auto_schedule_today_issue: any;
    created_at: string;
    email: string;
    expected_agents_count: number;
    id: string;
    is_bookmarked?: boolean;
    is_internal_user: boolean;
    is_migrated: boolean;
    membership: any;
    name: string;
    posts_health: string;
    posts_issue: any;
    posts_today_health: string;
    posts_today_issue: any;
    subscription_status: any;
    today_expected_count: number;
    today_failed_count: number;
    today_scheduled_count: number;
    today_total_count: number;
    tomorrow_expected_count: number;
    tomorrow_scheduled_count: number;
    yesterday_failed_count: number;
    yesterday_total_count: number;
}
export interface UsersHealthListMatch {
    include_internal_user?: boolean;
    include_migrated_user?: boolean;
}
export interface Video {
    agent_id?: string;
    bookmarked?: any;
    captions?: any;
    carousel_data?: any;
    created_at: string;
    duration?: number;
    generation_status?: any;
    id: string;
    image_prompt?: any;
    is_onboarding?: boolean;
    is_template?: boolean;
    main_avatar?: any;
    main_prompt?: any;
    media_asset_id?: string;
    product_id?: string;
    reel_id?: string;
    thumbnail_url?: any;
    title: string;
    type?: any;
    updated_at?: any;
    url: string;
    user_id?: string;
    video_id: string;
}
export interface VideoLoadMatch {
    id: string;
}
export interface VideoCreateData {
    agent_id?: string;
    bookmarked?: any;
    captions: any;
    carousel_data?: any;
    duration?: number;
    generation_status?: any;
    image_prompt?: any;
    is_onboarding?: boolean;
    is_template?: boolean;
    main_prompt?: any;
    media_asset_id?: string;
    product_id?: string;
    reel_id?: string;
    thumbnail_url?: any;
    title: string;
    type?: any;
    url: string;
    user_id?: string;
    video_id: string;
    $action?: string;
    [action: string]: any;
}
export interface VideoUpdateData {
    id: string;
    agent_id?: string;
    bookmarked?: any;
    captions?: any;
    carousel_data?: any;
    duration?: number;
    generation_status?: any;
    image_prompt?: any;
    is_onboarding?: boolean;
    is_template?: boolean;
    main_prompt?: any;
    media_asset_id?: string;
    product_id?: string;
    reel_id?: string;
    thumbnail_url?: any;
    title?: string;
    type?: any;
    url?: string;
    user_id?: string;
    $action?: string;
    [action: string]: any;
}
export interface VideoRemoveMatch {
    id: string;
}
export interface VideoRemixerWorker {
    captions_ass?: string;
    captions_vtt?: string;
    cost_usd?: number;
    error: string;
    file: string;
    kinds?: any[];
    lease_token: string;
    limit?: number;
    manifest: string;
    model: string;
    processing_seconds?: number;
    prompt_version: string;
    result?: Record<string, any>;
    thumbnail: string;
    tier?: string;
    worker_id: string;
}
export interface VideoRemixerWorkerCreateData {
    captions_ass?: string;
    captions_vtt?: string;
    cost_usd?: number;
    error: string;
    file: string;
    kinds?: any[];
    lease_token: string;
    limit?: number;
    manifest: string;
    model: string;
    processing_seconds?: number;
    prompt_version: string;
    result?: Record<string, any>;
    thumbnail: string;
    tier?: string;
    worker_id: string;
}
export interface WatchdogRecovery {
    item_id: string;
    passed: boolean;
    table: string;
}
export interface WatchdogRecoveryLoadMatch {
    device_id?: string;
}
export interface WatchdogRecoveryCreateData {
    item_id: string;
    passed: boolean;
    table: string;
}
export interface WinningAd {
    created_at: string;
    description?: string;
    id: string;
    source: string;
    type: string;
    url: string;
}
export interface WinningAdListMatch {
    product_id?: string;
}
export interface XAdaptation {
}
export interface XAdaptationLoadMatch {
}
export interface ZerohumanAdminAccount {
    account_mode: string;
    active_queue_count: number;
    assigned_agent?: any;
    created_at?: any;
    email: string;
    external_user_id: string;
    membership?: any;
    policy_code?: any;
    product_id?: string;
    product_name?: any;
    provisioning_status: string;
    subscription_status?: any;
    updated_at?: any;
    user_id: string;
}
export interface ZerohumanAdminAccountListMatch {
    account_mode?: string;
    active_queue_count?: number;
    assigned_agent?: any;
    created_at?: any;
    email?: string;
    external_user_id?: string;
    membership?: any;
    policy_code?: any;
    product_id?: string;
    product_name?: any;
    provisioning_status?: string;
    subscription_status?: any;
    updated_at?: any;
    user_id?: string;
}
