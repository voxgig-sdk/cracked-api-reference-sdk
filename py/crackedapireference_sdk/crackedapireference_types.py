# Typed models for the CrackedApiReference SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class ActivateRequired(TypedDict):
    message: str
    success: bool


class Activate(ActivateRequired, total=False):
    activated_at: Any


class ActivateCreateDataRequired(TypedDict):
    user_id: str
    message: str
    success: bool


class ActivateCreateData(ActivateCreateDataRequired, total=False):
    activated_at: Any


class ActivateUserRequired(TypedDict):
    message: str
    success: bool


class ActivateUser(ActivateUserRequired, total=False):
    activated_at: Any


class ActivateUserCreateDataRequired(TypedDict):
    user_id: str
    message: str
    success: bool


class ActivateUserCreateData(ActivateUserCreateDataRequired, total=False):
    activated_at: Any


class ActiveOnboardingRequired(TypedDict):
    has_active_onboarding: bool


class ActiveOnboarding(ActiveOnboardingRequired, total=False):
    current_step: Any
    onboarding_data_id: str


class ActiveOnboardingLoadMatch(TypedDict, total=False):
    current_step: Any
    has_active_onboarding: bool
    onboarding_data_id: str


class AdminRequired(TypedDict):
    count: int
    created_at: str
    email: str
    id: str
    video_type: str


class Admin(AdminRequired, total=False):
    apply: bool
    date_from: Any
    date_to: Any
    include_failed: bool
    include_pending: bool
    include_records: bool
    issue_ids: Any
    only_active: bool
    platform: Any
    posting_method: Any
    product_id: str
    query: Any
    reason: Any
    regenerate: bool
    status: str
    user_membership: Any
    user_name: Any
    user_onboarding_step: Any


class AdminLoadMatchRequired(TypedDict):
    date: str


class AdminLoadMatch(AdminLoadMatchRequired, total=False):
    day: Any
    user_email: Any
    user_id: str


class AdminListMatch(TypedDict, total=False):
    apply: bool
    count: int
    created_at: str
    date_from: Any
    date_to: Any
    email: str
    id: str
    include_failed: bool
    include_pending: bool
    include_records: bool
    issue_ids: Any
    only_active: bool
    platform: Any
    posting_method: Any
    product_id: str
    query: Any
    reason: Any
    regenerate: bool
    status: str
    user_membership: Any
    user_name: Any
    user_onboarding_step: Any
    video_type: str


class AdminCreateDataRequired(TypedDict):
    user_id: str
    count: int
    created_at: str
    date_from: Any
    date_to: Any
    email: str
    id: str
    product_id: str
    video_type: str


class AdminCreateData(AdminCreateDataRequired, total=False):
    apply: bool
    include_failed: bool
    include_pending: bool
    include_records: bool
    issue_ids: Any
    only_active: bool
    platform: Any
    posting_method: Any
    query: Any
    reason: Any
    regenerate: bool
    status: str
    user_membership: Any
    user_name: Any
    user_onboarding_step: Any


class AdminUpdateDataRequired(TypedDict):
    agent_id: str


class AdminUpdateData(AdminUpdateDataRequired, total=False):
    agent_type: str
    is_active: bool
    apply: bool
    count: int
    created_at: str
    date_from: Any
    date_to: Any
    email: str
    id: str
    include_failed: bool
    include_pending: bool
    include_records: bool
    issue_ids: Any
    only_active: bool
    platform: Any
    posting_method: Any
    product_id: str
    query: Any
    reason: Any
    regenerate: bool
    status: str
    user_membership: Any
    user_name: Any
    user_onboarding_step: Any
    video_type: str


class AdminRemoveMatch(TypedDict):
    tester_id: str


class AdminAccountResetRequired(TypedDict):
    agent_ids: list
    agent_ids_sha256: str
    backup_sha256: str
    confirmation: str
    customer_email: str
    pc_name: str
    product_id: str


class AdminAccountReset(AdminAccountResetRequired, total=False):
    batch_size: int
    phase: str
    video_ids: list


class AdminAccountResetCreateDataRequired(TypedDict):
    agent_ids: list
    agent_ids_sha256: str
    backup_sha256: str
    confirmation: str
    customer_email: str
    pc_name: str
    product_id: str


class AdminAccountResetCreateData(AdminAccountResetCreateDataRequired, total=False):
    batch_size: int
    phase: str
    video_ids: list


class AdminCarouselRequired(TypedDict):
    expected_revision: str
    formula: dict
    prompt: str
    slides: list


class AdminCarousel(AdminCarouselRequired, total=False):
    agent_id: str
    batch_id: str
    caption: str
    content_base64: str
    day: Any
    dry_run: bool
    engine_run: str
    formula_id: str
    title: str


class AdminCarouselLoadMatch(TypedDict):
    batch_id: str


class AdminCarouselCreateDataRequired(TypedDict):
    stage: str
    agent_id: str
    batch_id: str
    caption: str
    day: Any
    expected_revision: str
    formula: dict
    formula_id: str
    prompt: str
    slides: list
    title: str


class AdminCarouselCreateData(AdminCarouselCreateDataRequired, total=False):
    content_base64: str
    dry_run: bool
    engine_run: str


class AdminCarouselUpdateDataRequired(TypedDict):
    fmt: str


class AdminCarouselUpdateData(AdminCarouselUpdateDataRequired, total=False):
    expected_revision: str
    formula: dict
    prompt: str
    title: str


class AdminCarouselDemoReviewRequired(TypedDict):
    items: list


class AdminCarouselDemoReview(AdminCarouselDemoReviewRequired, total=False):
    id: str
    reason: str


class AdminCarouselDemoReviewLoadMatch(TypedDict):
    id: str


class AdminCarouselDemoReviewCreateDataRequired(TypedDict):
    items: list


class AdminCarouselDemoReviewCreateData(AdminCarouselDemoReviewCreateDataRequired, total=False):
    reason: str


class AdminCarouselDemoReviewUpdateDataRequired(TypedDict):
    demo_review_id: str


class AdminCarouselDemoReviewUpdateData(AdminCarouselDemoReviewUpdateDataRequired, total=False):
    assignee: Any


class AdminCustomerRequired(TypedDict):
    active_vireel_agents: int
    agents: list
    billing_source: str
    email: str
    pfa_only_agents: int
    severity: str
    status: str
    user_id: str


class AdminCustomer(AdminCustomerRequired, total=False):
    account_type: Any
    contracted_agents: Any
    membership: Any
    name: str
    subscription_status: Any


class AdminCustomerListMatch(TypedDict, total=False):
    account_type: Any
    active_vireel_agents: int
    agents: list
    billing_source: str
    contracted_agents: Any
    email: str
    membership: Any
    name: str
    pfa_only_agents: int
    severity: str
    status: str
    subscription_status: Any
    user_id: str


class AdminCustomerSuccessRequired(TypedDict):
    active_agents: int
    active_products: int
    agents_count: int
    auto_schedule_status: str
    email: str
    feature_impact: str
    notification_count: int
    notification_events: list
    priority: str
    severity: str
    status_label: str
    upcoming_posts: int
    user_id: str


class AdminCustomerSuccess(AdminCustomerSuccessRequired, total=False):
    days_until_period_end: Any
    last_notification_at: Any
    membership: Any
    name: str
    subscription_current_period_end: Any
    subscription_status: Any


class AdminCustomerSuccessListMatch(TypedDict, total=False):
    active_agents: int
    active_products: int
    agents_count: int
    auto_schedule_status: str
    days_until_period_end: Any
    email: str
    feature_impact: str
    last_notification_at: Any
    membership: Any
    name: str
    notification_count: int
    notification_events: list
    priority: str
    severity: str
    status_label: str
    subscription_current_period_end: Any
    subscription_status: Any
    upcoming_posts: int
    user_id: str


class AdminGeneratedVideoRequired(TypedDict):
    created_at: str
    id: str
    title: str
    type: str
    url: str


class AdminGeneratedVideo(AdminGeneratedVideoRequired, total=False):
    agent_id: str
    agent_name: Any
    duration: float
    generation_status: dict
    product_id: str
    thumbnail_url: Any
    updated_at: Any


class AdminGeneratedVideoListMatchRequired(TypedDict):
    user_id: str


class AdminGeneratedVideoListMatch(AdminGeneratedVideoListMatchRequired, total=False):
    limit: int
    product_id: str


class AdminHealthrxRequired(TypedDict):
    action: str
    option_id: str
    plan: dict
    product_id: str
    reason: str
    request_key: str
    revision: int
    version: str
    viewed: bool


class AdminHealthrx(AdminHealthrxRequired, total=False):
    delivery_enabled: bool
    id: str
    preparation_enabled: bool
    schedule_enabled: bool


class AdminHealthrxLoadMatch(TypedDict):
    item_id: str
    kind: str


class AdminHealthrxCreateData(TypedDict):
    action: str
    option_id: str
    plan: dict
    product_id: str
    reason: str
    request_key: str
    version: str
    viewed: bool


class AdminHealthrxUpdateData(TypedDict, total=False):
    delivery_enabled: bool
    plan: dict
    preparation_enabled: bool
    product_id: str
    revision: int
    schedule_enabled: bool


class AdminInsight(TypedDict):
    customer_success_cases: list
    customers: list
    generated_at: str
    pfa_database: dict
    recent_signups: list
    summary: dict
    vireel_database: dict


class AdminInsightLoadMatch(TypedDict, total=False):
    customer_email: Any
    include_agent: bool
    limit: int
    page: int


class AdminInsightListMatch(TypedDict, total=False):
    customer_success_cases: list
    customers: list
    generated_at: str
    pfa_database: dict
    recent_signups: list
    summary: dict
    vireel_database: dict


class AdminLandingTask(TypedDict):
    task_id: str


class AdminLandingTaskCreateDataRequired(TypedDict):
    user_id: str
    task_id: str


class AdminLandingTaskCreateData(AdminLandingTaskCreateDataRequired, total=False):
    product_id: str


class AdminMetricsSummary(TypedDict):
    paid_users_by_level: list
    total_cancellations: int
    total_previews_generated: int
    total_signups: int
    total_videos_generated: int
    url_attempts: int
    user_credits: list
    user_gifted_credits: list


class AdminMetricsSummaryListMatch(TypedDict, total=False):
    date_filter: str


class AdminPost(TypedDict):
    admin_job_ids: Any
    agent_id: str
    agent_name: Any
    agent_platform_urls: Any
    agent_url: Any
    comments: int
    error_message: Any
    failed_at: Any
    id: str
    instagram_posted_by: Any
    instagram_posted_url: Any
    instagram_scraped_social_post_id: str
    is_instagram_posted: bool
    is_tiktok_posted: bool
    is_youtube_posted: bool
    last_refreshed_at: Any
    likes: int
    platform_post_methods: Any
    platform_urls: Any
    post_method: Any
    post_platforms: Any
    post_url: Any
    posted_at: Any
    product_id: str
    results_status: Any
    scheduled_datetime: str
    source_type: str
    status: str
    tiktok_posted_by: Any
    tiktok_posted_url: Any
    tiktok_scraped_social_post_id: str
    upload_post_error: Any
    upload_post_status: Any
    upload_post_uploads: Any
    user_email: str
    user_id: str
    user_name: Any
    video_id: str
    video_url: Any
    views: int
    youtube_posted_by: Any
    youtube_posted_url: Any
    youtube_scraped_social_post_id: str


class AdminPostListMatch(TypedDict, total=False):
    date: Any
    include_entry: bool
    platform: str
    posting_method: str


class AdminRecentSignupRequired(TypedDict):
    created_at: str
    current_step: str
    flow_variant: str
    id: str
    inactive_minutes: int
    last_seen_at: str
    likely_cause: str
    notification_count: int
    notification_events: list
    product_url: str
    severity: str
    stage_label: str
    status: str


class AdminRecentSignup(AdminRecentSignupRequired, total=False):
    email: str
    email_source: Any
    error_message: Any
    last_notification_at: Any
    product_id: str
    product_name: Any
    social_scan_status: Any
    updated_at: Any
    website_scrape_status: Any


class AdminRecentSignupListMatch(TypedDict, total=False):
    created_at: str
    current_step: str
    email: str
    email_source: Any
    error_message: Any
    flow_variant: str
    id: str
    inactive_minutes: int
    last_notification_at: Any
    last_seen_at: str
    likely_cause: str
    notification_count: int
    notification_events: list
    product_id: str
    product_name: Any
    product_url: str
    severity: str
    social_scan_status: Any
    stage_label: str
    status: str
    updated_at: Any
    website_scrape_status: Any


class AdminSlideshowDiag(TypedDict, total=False):
    agent_id: str
    batch_id: str
    caption: str
    content_base64: str
    day: Any
    formula_id: str
    id: str
    title: str


class AdminSlideshowDiagCreateDataRequired(TypedDict):
    id: str


class AdminSlideshowDiagCreateData(AdminSlideshowDiagCreateDataRequired, total=False):
    agent_id: str
    batch_id: str
    caption: str
    content_base64: str
    day: Any
    formula_id: str
    title: str


class AdminSlideshowImportRequired(TypedDict):
    agent_id: str
    batch_id: str
    caption: str
    day: str
    formula_id: str
    slides: list
    title: str


class AdminSlideshowImport(AdminSlideshowImportRequired, total=False):
    dry_run: bool
    engine_run: str


class AdminSlideshowImportLoadMatch(TypedDict):
    batch_id: str


class AdminSlideshowImportCreateDataRequired(TypedDict):
    agent_id: str
    batch_id: str
    caption: str
    day: str
    formula_id: str
    slides: list
    title: str


class AdminSlideshowImportCreateData(AdminSlideshowImportCreateDataRequired, total=False):
    dry_run: bool
    engine_run: str


class AdminUserViewRequired(TypedDict):
    created_at: str
    credits: int
    email: str
    id: str
    industry: Any
    membership: Any
    name: str
    new_email: str
    product_name: Any
    product_url: Any
    skip: bool
    subscription_status: Any


class AdminUserView(AdminUserViewRequired, total=False):
    account_type: Any
    admin_notes: Any
    agents_count: int
    is_admin: bool
    is_bookmarked: bool
    is_internal_user: bool
    partner_external_user_id: str
    partner_policy_code: Any
    partner_source: Any
    subscription_details: Any


class AdminUserViewListMatch(TypedDict, total=False):
    limit: int
    page: int


class AdminUserViewCreateDataRequired(TypedDict):
    user_id: str
    created_at: str
    credits: int
    email: str
    id: str
    industry: Any
    membership: Any
    name: str
    new_email: str
    product_name: Any
    product_url: Any
    skip: bool
    subscription_status: Any


class AdminUserViewCreateData(AdminUserViewCreateDataRequired, total=False):
    account_type: Any
    admin_notes: Any
    agents_count: int
    is_admin: bool
    is_bookmarked: bool
    is_internal_user: bool
    partner_external_user_id: str
    partner_policy_code: Any
    partner_source: Any
    subscription_details: Any


class AdminUserViewUpdateDataRequired(TypedDict):
    user_id: str


class AdminUserViewUpdateData(AdminUserViewUpdateDataRequired, total=False):
    admin_notes: Any
    agents_count: int
    credits: int
    is_admin: bool
    is_bookmarked: bool
    is_internal_user: bool
    membership: Any


class AdminUserViewRemoveMatch(TypedDict):
    user_id: str


class AdminUsersTableItemRequired(TypedDict):
    activated: bool
    created_at: str
    credits: int
    demo_booked: bool
    email: str
    id: str
    membership: Any
    name: str
    onboarding_flow: str
    product_name: Any
    product_url: Any
    survey_data: Any


class AdminUsersTableItem(AdminUsersTableItemRequired, total=False):
    agents_count: int


class AdminUsersTableItemListMatch(TypedDict, total=False):
    page: int
    page_size: int


class AdminVideoRemixerRequired(TypedDict):
    activity: str
    clip_id: str
    collected_at: str
    evidence: str
    expected_revisions: dict
    file: str
    formula_id: str
    formula_ids: list
    human_role: str
    idempotency_key: str
    items: list
    kim_clip_ids: list
    kind: str
    levels: dict
    media_enabled: bool
    name: str
    platform: str
    platform_post_id: str
    policy: dict
    post_url: str
    posted_at: str
    purpose: str
    reason: str
    revision: int
    run_id: str
    seconds: int
    slots: list
    source: str
    source_id: str
    source_ids: list
    terry_clip_ids: list
    timeline: dict
    total_target_ms: int
    window: str


class AdminVideoRemixer(AdminVideoRemixerRequired, total=False):
    allowed_platforms: list
    anchor_clip_id: str
    atomicity_class: Any
    auto_render: bool
    campaign_allowed: bool
    channel: str
    channel_default: str
    clip_ids: list
    comments: Any
    completion_rate: Any
    confirmed_duplicate_of: Any
    consent_doc_uri: str
    contact: str
    conversions: Any
    count: int
    creator: str
    creator_id: str
    crop_window: Any
    cta_product_id: str
    days: int
    derivative_edits_allowed: bool
    enabled: bool
    end_ms: Any
    enqueue: bool
    errors: list
    expected_revision: Any
    external_ai_allowed: bool
    followers: Any
    handles: dict
    hook_subtype: Any
    hour_utc: int
    likes: Any
    medical_claim_present: bool
    minute_utc: int
    music_bed_allowed: bool
    music_policy: str
    niche: str
    notes: str
    origin: str
    owner_waiver: bool
    paid_ads_allowed: bool
    patient_identifiable: bool
    person_type: str
    pipeline: bool
    planning_only: bool
    polish: str
    primary_role: Any
    rate: float
    rationale: str
    reference_source_id: str
    requires_medical_review: bool
    review_status: Any
    rights_expires_at: Any
    rights_status: str
    sample_links: list
    secondary_roles: Any
    seed: int
    seed_base: int
    sensitive_personal_data_present: bool
    shares: Any
    shoot: str
    soundbite_title: Any
    spend_usd: Any
    spiciness: Any
    spiciness_notes: str
    start_ms: Any
    status: str
    testimonial_strength: Any
    testimonial_type: Any
    tier: str
    topic: str
    topic_tags: Any
    use_learned_weights: bool
    views: Any


class AdminVideoRemixerLoadMatch(TypedDict):
    clip_id: str


class AdminVideoRemixerCreateDataRequired(TypedDict):
    activity: str
    clip_id: str
    collected_at: str
    evidence: str
    expected_revisions: dict
    file: str
    formula_id: str
    formula_ids: list
    human_role: str
    idempotency_key: str
    items: list
    kim_clip_ids: list
    kind: str
    levels: dict
    media_enabled: bool
    name: str
    platform: str
    platform_post_id: str
    policy: dict
    post_url: str
    posted_at: str
    purpose: str
    reason: str
    revision: int
    run_id: str
    seconds: int
    slots: list
    source: str
    source_id: str
    source_ids: list
    terry_clip_ids: list
    timeline: dict
    total_target_ms: int
    window: str


class AdminVideoRemixerCreateData(AdminVideoRemixerCreateDataRequired, total=False):
    allowed_platforms: list
    anchor_clip_id: str
    atomicity_class: Any
    auto_render: bool
    campaign_allowed: bool
    channel: str
    channel_default: str
    clip_ids: list
    comments: Any
    completion_rate: Any
    confirmed_duplicate_of: Any
    consent_doc_uri: str
    contact: str
    conversions: Any
    count: int
    creator: str
    creator_id: str
    crop_window: Any
    cta_product_id: str
    days: int
    derivative_edits_allowed: bool
    enabled: bool
    end_ms: Any
    enqueue: bool
    errors: list
    expected_revision: Any
    external_ai_allowed: bool
    followers: Any
    handles: dict
    hook_subtype: Any
    hour_utc: int
    likes: Any
    medical_claim_present: bool
    minute_utc: int
    music_bed_allowed: bool
    music_policy: str
    niche: str
    notes: str
    origin: str
    owner_waiver: bool
    paid_ads_allowed: bool
    patient_identifiable: bool
    person_type: str
    pipeline: bool
    planning_only: bool
    polish: str
    primary_role: Any
    rate: float
    rationale: str
    reference_source_id: str
    requires_medical_review: bool
    review_status: Any
    rights_expires_at: Any
    rights_status: str
    sample_links: list
    secondary_roles: Any
    seed: int
    seed_base: int
    sensitive_personal_data_present: bool
    shares: Any
    shoot: str
    soundbite_title: Any
    spend_usd: Any
    spiciness: Any
    spiciness_notes: str
    start_ms: Any
    status: str
    testimonial_strength: Any
    testimonial_type: Any
    tier: str
    topic: str
    topic_tags: Any
    use_learned_weights: bool
    views: Any


class AdminVideoRemixerUpdateDataRequired(TypedDict):
    identifier: str


class AdminVideoRemixerUpdateData(AdminVideoRemixerUpdateDataRequired, total=False):
    allowed_platforms: list
    auto_render: bool
    campaign_allowed: bool
    channel: str
    channel_default: str
    clip_id: str
    confirmed_duplicate_of: Any
    consent_doc_uri: str
    contact: str
    count: int
    creator_id: str
    derivative_edits_allowed: bool
    enabled: bool
    errors: list
    expected_revision: Any
    expected_revisions: dict
    external_ai_allowed: bool
    followers: Any
    formula_id: str
    handles: dict
    hour_utc: int
    human_role: str
    levels: dict
    medical_claim_present: bool
    minute_utc: int
    music_bed_allowed: bool
    music_policy: str
    name: str
    niche: str
    notes: str
    origin: str
    owner_waiver: bool
    paid_ads_allowed: bool
    patient_identifiable: bool
    person_type: str
    platform: str
    platform_post_id: str
    policy: dict
    post_url: str
    posted_at: str
    rate: float
    rationale: str
    reason: str
    reference_source_id: str
    requires_medical_review: bool
    rights_expires_at: Any
    rights_status: str
    sample_links: list
    seed_base: int
    sensitive_personal_data_present: bool
    shoot: str
    slots: list
    source_ids: list
    spiciness: Any
    spiciness_notes: str
    status: str
    timeline: dict
    total_target_ms: int


class AdminVideoRemixerPatchData(TypedDict, total=False):
    atomicity_class: Any
    crop_window: Any
    cta_product_id: str
    end_ms: Any
    expected_revision: Any
    hook_subtype: Any
    media_enabled: bool
    medical_claim_present: bool
    primary_role: Any
    reason: str
    requires_medical_review: bool
    review_status: Any
    secondary_roles: Any
    sensitive_personal_data_present: bool
    soundbite_title: Any
    start_ms: Any
    testimonial_strength: Any
    testimonial_type: Any
    topic_tags: Any


class AdminVideoRemixerRemoveMatch(TypedDict):
    identifier: str


class AdvanceStep(TypedDict):
    current_step: str
    onboarding_data_id: str
    success: bool
    to_step: str


class AdvanceStepCreateData(TypedDict):
    onboarding_data_id: str
    to_step: str


class AgentRequired(TypedDict):
    active_connections: int
    at_capacity: bool
    id: str
    is_active: bool
    name: str
    type: str


class Agent(AgentRequired, total=False):
    tiktok_stats: Any


class AgentListMatch(TypedDict, total=False):
    agent_type: Any


class AgentAccessCustomersHealthRequired(TypedDict):
    agentQuota: int
    assignedAgentsByType: dict
    assignedAgentsTotal: int
    createdAt: str
    email: str
    performance: dict
    productCount: int
    usage: dict
    userId: str


class AgentAccessCustomersHealth(AgentAccessCustomersHealthRequired, total=False):
    accountType: Any
    isInternalUser: Any
    membership: Any
    name: str
    subscriptionCurrentPeriodEnd: Any
    subscriptionDetails: Any
    subscriptionStatus: Any


class AgentAccessCustomersHealthListMatch(TypedDict, total=False):
    date_range: str
    include_internal: bool
    subscription_status: Any


class AgentAccessOverview(TypedDict):
    activeUsers: int
    generatedAt: str
    newUsersYesterday: int
    onboardingContextCounts: dict
    onboardingCurrentStepCounts: dict
    onboardingCurrentStepWindow: dict
    onboardingFlowVariantCounts: dict
    onboardingLockedUntilActivation: int
    onboardingRecordsTotal: int
    onboardingRecordsWindow: int
    onboardingSocialScanStatusCounts: dict
    onboardingWebsiteScrapeStatusCounts: dict
    subscriptionStatusCounts: dict
    totalInternalUsers: int
    totalUsers: int
    trialStartedYesterday: int
    trialingUsers: int


class AgentAccessOverviewLoadMatch(TypedDict, total=False):
    onboarding_window_day: int


class AgentAccessPhilHourlyNotification(TypedDict):
    generatedAt: str
    phoneHealth: dict
    scheduledPosts: dict
    targetDate: str
    uploadPostInstagramHealth: dict
    uploadPostTiktokHealth: dict
    uploadPostYoutubeHealth: dict


class AgentAccessPhilHourlyNotificationLoadMatch(TypedDict, total=False):
    date: Any


class AgentAccessPhilStatsRefresh(TypedDict):
    generatedAt: str
    statsRefresh: dict
    targetDate: str


class AgentAccessPhilStatsRefreshLoadMatch(TypedDict, total=False):
    date: Any


class AgentAccessPhilVideo(TypedDict):
    generatedAt: str
    targetDate: str
    videos: dict


class AgentAccessPhilVideoLoadMatch(TypedDict, total=False):
    date: Any


class AgentAccessUserAgent(TypedDict):
    agentQuota: int
    agents: list
    assignedByType: dict
    assignedTotal: int
    email: str
    products: list
    userId: str


class AgentAccessUserAgentListMatch(TypedDict):
    email: str


class AgentAccessUserPhoneFarmRequired(TypedDict):
    id: str
    name: str


class AgentAccessUserPhoneFarm(AgentAccessUserPhoneFarmRequired, total=False):
    avatar: Any
    facebookUrl: Any
    instagramUrl: Any
    lastAdminSyncedAt: Any
    productId: Any
    productName: Any
    tiktokUrl: Any
    type: Any
    uploadPostPlatforms: Any
    youtubeUrl: Any


class AgentAccessUserPhoneFarmListMatch(TypedDict):
    email: str


class AgentAccessUserPostRequired(TypedDict):
    deltaYesterday: int
    expectedVideosPerDay: int
    postedToday: int
    postedYesterday: int


class AgentAccessUserPost(AgentAccessUserPostRequired, total=False):
    productId: Any
    productName: Any


class AgentAccessUserPostListMatchRequired(TypedDict):
    email: str


class AgentAccessUserPostListMatch(AgentAccessUserPostListMatchRequired, total=False):
    day: int


class AgentAccessUserSummaryRequired(TypedDict):
    id: str
    name: str
    url: str


class AgentAccessUserSummary(AgentAccessUserSummaryRequired, total=False):
    deletedAt: Any
    isActive: Any


class AgentAccessUserSummaryListMatch(TypedDict):
    email: str


class AgentAccessUserVideo(TypedDict):
    allTime: dict
    email: str
    today: dict
    userId: str
    yesterday: dict


class AgentAccessUserVideoLoadMatch(TypedDict):
    email: str


class AgentAccessUserWinningAd(TypedDict):
    productId: str
    productName: str
    winningAds: list
    winningAdsCount: int


class AgentAccessUserWinningAdListMatch(TypedDict):
    email: str


class AgentAccessWinningAdsSummaryRequired(TypedDict):
    email: str
    productCount: int
    productsWithWinningAds: int
    totalWinningAds: int
    userId: str


class AgentAccessWinningAdsSummary(AgentAccessWinningAdsSummaryRequired, total=False):
    name: str
    subscriptionStatus: Any


class AgentAccessWinningAdsSummaryListMatch(TypedDict, total=False):
    include_internal: bool
    limit: int
    offset: int
    subscription_status: Any


class AgentDetailRequired(TypedDict):
    avatar: str
    id: str
    name: str
    type: str


class AgentDetail(AgentDetailRequired, total=False):
    activeConnections: Any
    assignedAt: Any
    bio: Any
    facebookUrl: Any
    instagramUrl: Any
    isActive: bool
    role: Any
    tiktokStats: Any
    tiktokUrl: Any
    uploadPostPlatforms: Any
    youtubeUrl: Any


class AgentDetailListMatch(TypedDict, total=False):
    agent_type: Any
    include_inactive: bool
    limit: int


class AgentDetailUpdateDataRequired(TypedDict):
    upload_post_agent_id: str


class AgentDetailUpdateData(AgentDetailUpdateDataRequired, total=False):
    bio: Any
    name: str
    role: Any


class AgentHealthRequired(TypedDict):
    daily: list
    dates: list
    generated_at: str
    groups: list
    latest: dict
    phone_admin_generated_at: str
    post_target: int
    scope_prefixes: list
    timezone: str
    warmup_target: int


class AgentHealth(AgentHealthRequired, total=False):
    live_date: Any
    platform: str
    qa_managed_agent_ids: list


class AgentHealthListMatch(TypedDict, total=False):
    date_to: Any
    day: int
    platform: str
    summary: bool
    user_id: str


class AgentHealthCustomerOption(TypedDict):
    agent_count: int
    email: str
    user_id: str


class AgentHealthCustomerOptionListMatch(TypedDict, total=False):
    agent_count: int
    email: str
    user_id: str


class AgentHealthDetailRequired(TypedDict):
    date: str
    generated_at: str
    group_id: str
    has_more: bool
    issue_total: int
    issues: list
    limit: int
    metric: str
    offset: int


class AgentHealthDetail(AgentHealthDetailRequired, total=False):
    archived_issue_total: int
    warmup_runs: list
    warning_total: int
    warnings: list


class AgentHealthDetailListMatchRequired(TypedDict):
    date: str
    group_id: str


class AgentHealthDetailListMatch(AgentHealthDetailListMatchRequired, total=False):
    limit: int
    metric: str
    offset: int
    platform: str


class AgentPost(TypedDict):
    comments: int
    error_message: Any
    id: str
    likes: int
    product_id: str
    results: Any
    scheduled_datetime: str
    source_type: str
    status: str
    user_email: str
    user_id: str
    user_name: Any
    video_id: str
    video_url: Any
    views: int


class AgentPostListMatchRequired(TypedDict):
    id: str


class AgentPostListMatch(AgentPostListMatchRequired, total=False):
    day: str


class AgentStat(TypedDict):
    agents_needed: int
    dedicated_agents: dict
    shared_agents: dict
    total_agents: int


class AgentStatLoadMatch(TypedDict, total=False):
    agents_needed: int
    dedicated_agents: dict
    shared_agents: dict
    total_agents: int


class AgentSummaryRequired(TypedDict):
    agent_count: int
    product_id: str
    product_name: str


class AgentSummary(AgentSummaryRequired, total=False):
    favicon_url: Any


class AgentSummaryListMatch(TypedDict, total=False):
    agent_count: int
    favicon_url: Any
    product_id: str
    product_name: str


class AgentsSummary(TypedDict):
    total_agents: int
    total_agents_count_sum: int


class AgentsSummaryLoadMatch(TypedDict, total=False):
    total_agents: int
    total_agents_count_sum: int


class AnalysisStatus(TypedDict):
    pass


class AnalysisStatusLoadMatch(TypedDict):
    pass


class AnalyticsPostRequired(TypedDict):
    created_at: str
    id: str
    scheduled_datetime: str
    source_type: str
    status: str
    updated_at: str


class AnalyticsPost(AnalyticsPostRequired, total=False):
    agent: Any
    comment: Any
    product_id: str
    queue_position: Any
    results: Any
    scraped_posts: Any
    video: Any


class AnalyticsPostListMatchRequired(TypedDict):
    date_from: str


class AnalyticsPostListMatch(AnalyticsPostListMatchRequired, total=False):
    agent_id: str
    date_to: Any
    email: str
    product_id: str
    status: Any
    user_id: str


class AnalyzeProductRequired(TypedDict):
    message: str
    status: str
    url: str


class AnalyzeProduct(AnalyzeProductRequired, total=False):
    instagram_username: Any


class AnalyzeProductCreateDataRequired(TypedDict):
    url: str


class AnalyzeProductCreateData(AnalyzeProductCreateDataRequired, total=False):
    instagram_username: Any


class AssignAgent(TypedDict):
    agent: dict
    assignment: dict
    mock_agents: list
    onboarding_data_id: str


class AssignAgentCreateData(TypedDict):
    onboarding_data_id: str


class Auth(TypedDict):
    pass


class AuthCreateData(TypedDict, total=False):
    attribution: Any
    email: Any
    industry: Any
    returnTo: Any
    token: Any


class AutoScheduleSettingRequired(TypedDict):
    effective_posted_video_reuse_percent: int
    is_enabled: bool
    membership_tier: str
    videos_per_day: int


class AutoScheduleSetting(AutoScheduleSettingRequired, total=False):
    can_enable_repost: bool
    enabled_video_types: Any
    lock_video_regeneration_controls: bool
    posted_video_reuse_percent: Any
    product_id: str
    repost_source: Any


class AutoScheduleSettingLoadMatch(TypedDict, total=False):
    product_id: str


class AutoScheduleSettingUpdateData(TypedDict, total=False):
    product_id: str
    enabled_video_types: Any
    is_enabled: bool


class BulkTikTokStatsUpdate(TypedDict):
    failedIds: list
    updatedCount: int
    updates: list


class BulkTikTokStatsUpdateUpdateData(TypedDict, total=False):
    updates: list


class CarouselRequired(TypedDict):
    agent_id: str
    agent_name: str
    format: str
    qa_status: str
    queue_id: str
    scheduled_at: str
    slide_count: int
    slides: list
    status: str
    title: str
    video_id: str


class Carousel(CarouselRequired, total=False):
    audit_created_at: Any
    audit_snapshot_sha256: Any
    caption: Any
    comments: Any
    fit_score: Any
    formula: dict
    formula_id: str
    formula_name: Any
    generation: dict
    id: str
    image_prompt: Any
    likes: Any
    main_prompt: Any
    metrics_updated_at: Any
    post_url: Any
    profile_url: Any
    qa: dict
    qa_verdict: Any
    quality_score: Any
    relevance_score: Any
    source: dict
    thumbnail_url: Any
    views: Any


class CarouselLoadMatch(TypedDict):
    id: str


class CarouselListMatch(TypedDict, total=False):
    date: Any


class CarouselCreateDataRequired(TypedDict):
    id: str
    agent_id: str
    agent_name: str
    format: str
    qa_status: str
    queue_id: str
    scheduled_at: str
    slide_count: int
    slides: list
    status: str
    title: str
    video_id: str


class CarouselCreateData(CarouselCreateDataRequired, total=False):
    skip_schedule: bool
    audit_created_at: Any
    audit_snapshot_sha256: Any
    caption: Any
    comments: Any
    fit_score: Any
    formula: dict
    formula_id: str
    formula_name: Any
    generation: dict
    image_prompt: Any
    likes: Any
    main_prompt: Any
    metrics_updated_at: Any
    post_url: Any
    profile_url: Any
    qa: dict
    qa_verdict: Any
    quality_score: Any
    relevance_score: Any
    source: dict
    thumbnail_url: Any
    views: Any


class CarouselAgentDetailRequired(TypedDict):
    agent_id: str
    agent_name: str
    phone_admin_status: str
    warmup_status: str


class CarouselAgentDetail(CarouselAgentDetailRequired, total=False):
    connection_status: Any
    followers: Any
    following: Any
    metrics_updated_at: Any
    profile_likes: Any
    profile_url: Any
    warmup_days: Any
    warmup_hold_until: Any


class CarouselAgentDetailLoadMatch(TypedDict):
    agent_id: str


class CarouselStatusRequired(TypedDict):
    caption: Any
    image_url: Any
    index: int
    prompt: Any
    status: str


class CarouselStatus(CarouselStatusRequired, total=False):
    error: Any
    id: str
    image_model: Any
    image_provider: Any
    image_task_id: str


class CarouselStatusListMatch(TypedDict):
    id: str


class Chat(TypedDict):
    idempotencyKey: str
    message: str
    sessionId: str


class ChatCreateData(TypedDict):
    session_id: str
    idempotencyKey: str
    message: str
    sessionId: str


class ChatHistoryRequired(TypedDict):
    chatSubVariant: str
    createdAt: str
    messages: list
    onboardingDataId: str
    salesStage: str
    session: dict
    sessionId: str
    status: str
    updatedAt: str


class ChatHistory(ChatHistoryRequired, total=False):
    model: Any
    routeRecommendation: Any
    selectedPlan: Any


class ChatHistoryLoadMatch(TypedDict):
    session_id: str


class ChatHistoryCreateData(TypedDict):
    onboardingDataId: str


class ChatSessionRequired(TypedDict):
    chatSubVariant: str
    createdAt: str
    salesStage: str
    sessionId: str
    status: str
    updatedAt: str


class ChatSession(ChatSessionRequired, total=False):
    model: Any
    plan: Any
    route: Any
    routeRecommendation: Any
    selectedPlan: Any


class ChatSessionCreateDataRequired(TypedDict):
    session_id: str


class ChatSessionCreateData(ChatSessionCreateDataRequired, total=False):
    plan: Any
    route: Any


class Comment(TypedDict):
    pass


class CommentLoadMatch(TypedDict, total=False):
    all_product: bool
    day: int
    limit: int
    offset: int
    product_id: str


class CommentCampaignRequired(TypedDict):
    action: str
    agent_id: str
    reason: str
    request_key: str


class CommentCampaign(CommentCampaignRequired, total=False):
    account_daily_limit: int
    account_weekly_limit: int
    active_days_per_week: int
    allowlist: list
    analysis_daily_limit: int
    analysis_model: str
    analysis_reservation_usd: float
    approved_markets: list
    brand_forward_enabled: bool
    briefs: dict
    candidate_only: bool
    claims: list
    cohort_removal_threshold: int
    daily_cost_ceiling_usd: float
    delivery_mode: str
    disclosure_mode: str
    disclosure_template: str
    draft_options_count: int
    draft_review_reservation_usd: float
    exceptional_daily_cap_approved: bool
    execution_enabled: bool
    experiment_styles: list
    inventory_factor: float
    keywords: list
    max_duration_seconds: Any
    metadata_pass_rate: float
    min_interval_minutes: int
    mode: str
    monitored_creators: list
    platform: str
    platform_permission_evidence: str
    policy_approved_by: str
    policy_expires_at: Any
    policy_version: str
    product_daily_limit: int
    qualification_rate: float
    raw_daily_limit: int
    raw_result_reservation_usd: float
    replies_enabled: bool
    reviewer_model: str
    scan_interval_hours: int
    search_change_reason: str
    search_effective_at: Any
    shadow_sample_limit: int
    spent_seconds: Any
    task_ttl_hours: int
    top_comment_analysis_enabled: bool
    writer_model: str


class CommentCampaignLoadMatch(TypedDict):
    product_id: str


class CommentCampaignCreateDataRequired(TypedDict):
    product_id: str
    action: str
    agent_id: str
    reason: str
    request_key: str


class CommentCampaignCreateData(CommentCampaignCreateDataRequired, total=False):
    source_id: str
    account_daily_limit: int
    account_weekly_limit: int
    active_days_per_week: int
    allowlist: list
    analysis_daily_limit: int
    analysis_model: str
    analysis_reservation_usd: float
    approved_markets: list
    brand_forward_enabled: bool
    briefs: dict
    candidate_only: bool
    claims: list
    cohort_removal_threshold: int
    daily_cost_ceiling_usd: float
    delivery_mode: str
    disclosure_mode: str
    disclosure_template: str
    draft_options_count: int
    draft_review_reservation_usd: float
    exceptional_daily_cap_approved: bool
    execution_enabled: bool
    experiment_styles: list
    inventory_factor: float
    keywords: list
    max_duration_seconds: Any
    metadata_pass_rate: float
    min_interval_minutes: int
    mode: str
    monitored_creators: list
    platform: str
    platform_permission_evidence: str
    policy_approved_by: str
    policy_expires_at: Any
    policy_version: str
    product_daily_limit: int
    qualification_rate: float
    raw_daily_limit: int
    raw_result_reservation_usd: float
    replies_enabled: bool
    reviewer_model: str
    scan_interval_hours: int
    search_change_reason: str
    search_effective_at: Any
    shadow_sample_limit: int
    spent_seconds: Any
    task_ttl_hours: int
    top_comment_analysis_enabled: bool
    writer_model: str


class CommentCampaignUpdateDataRequired(TypedDict):
    product_id: str


class CommentCampaignUpdateData(CommentCampaignUpdateDataRequired, total=False):
    account_daily_limit: int
    account_weekly_limit: int
    active_days_per_week: int
    allowlist: list
    analysis_daily_limit: int
    analysis_model: str
    analysis_reservation_usd: float
    approved_markets: list
    brand_forward_enabled: bool
    briefs: dict
    claims: list
    cohort_removal_threshold: int
    daily_cost_ceiling_usd: float
    delivery_mode: str
    disclosure_mode: str
    disclosure_template: str
    draft_options_count: int
    draft_review_reservation_usd: float
    exceptional_daily_cap_approved: bool
    execution_enabled: bool
    experiment_styles: list
    inventory_factor: float
    keywords: list
    max_duration_seconds: Any
    metadata_pass_rate: float
    min_interval_minutes: int
    mode: str
    monitored_creators: list
    platform: str
    platform_permission_evidence: str
    policy_approved_by: str
    policy_expires_at: Any
    policy_version: str
    product_daily_limit: int
    qualification_rate: float
    raw_daily_limit: int
    raw_result_reservation_usd: float
    replies_enabled: bool
    reviewer_model: str
    scan_interval_hours: int
    search_change_reason: str
    search_effective_at: Any
    shadow_sample_limit: int
    task_ttl_hours: int
    top_comment_analysis_enabled: bool
    writer_model: str


class CompleteChatCheckoutRequired(TypedDict):
    onboarding_data_id: str
    success: bool


class CompleteChatCheckout(CompleteChatCheckoutRequired, total=False):
    message: Any
    product_id: str
    ready: bool


class CompleteChatCheckoutCreateData(TypedDict):
    onboarding_data_id: str


class CreateBlackoutSora2VideoRequired(TypedDict):
    main_prompt: str
    media_asset_id: str
    product_id: str
    video: dict


class CreateBlackoutSora2Video(CreateBlackoutSora2VideoRequired, total=False):
    requires_polling: bool


class CreateBlackoutSora2VideoCreateData(TypedDict):
    main_prompt: str
    media_asset_id: str
    product_id: str


class CreateCarouselRequired(TypedDict):
    message: str
    status: str
    success: bool
    template_id: str
    video_id: str


class CreateCarousel(CreateCarouselRequired, total=False):
    copy_mode: Any
    expected_owner_user_id: str
    expected_product_id: str
    expected_product_name: Any
    image_model: str
    mention_product: bool
    num_slides: int
    owner_user_id: str
    product_id: str
    product_name: Any
    product_placement: str
    request_id: str
    script_style_custom: Any
    script_style_id: str
    selected_hook: Any
    visual_style_custom: Any
    visual_style_id: str


class CreateCarouselCreateDataRequired(TypedDict):
    template_id: str


class CreateCarouselCreateData(CreateCarouselCreateDataRequired, total=False):
    copy_mode: Any
    expected_owner_user_id: str
    expected_product_id: str
    expected_product_name: Any
    image_model: str
    mention_product: bool
    num_slides: int
    product_id: str
    product_placement: str
    request_id: str
    script_style_custom: Any
    script_style_id: str
    selected_hook: Any
    visual_style_custom: Any
    visual_style_id: str


class CreateProductRequired(TypedDict):
    onboarding_data_id: str
    product_id: str
    success: bool


class CreateProduct(CreateProductRequired, total=False):
    videos_queued: int


class CreateProductCreateData(TypedDict):
    onboarding_data_id: str


class CreateResetProductV6(TypedDict):
    agents_transferred: int
    credits_deducted: int
    onboarding_data_id: str
    product_id: str
    remaining_credits: int
    success: bool
    videos_queued: int


class CreateResetProductV6CreateData(TypedDict):
    onboarding_data_id: str


class CreateSora2VideoRequired(TypedDict):
    main_prompt: str
    video: dict


class CreateSora2Video(CreateSora2VideoRequired, total=False):
    image_prompt: Any
    model: str
    requires_polling: bool
    seconds: str
    size: str


class CreateSora2VideoCreateDataRequired(TypedDict):
    main_prompt: str


class CreateSora2VideoCreateData(CreateSora2VideoCreateDataRequired, total=False):
    image_prompt: Any
    model: str
    seconds: str
    size: str


class CreateVariationRequired(TypedDict):
    hook_duration: int
    media_asset_id: str
    message: str
    product_id: str
    prompt: str
    video_id: str


class CreateVariation(CreateVariationRequired, total=False):
    task_id: str


class CreateVariationCreateData(TypedDict):
    hook_duration: int
    media_asset_id: str
    product_id: str
    prompt: str


class CustomerRequired(TypedDict):
    assigned_agents_count: int
    email: str
    id: str


class Customer(CustomerRequired, total=False):
    account_type: Any
    is_migrated: bool


class CustomerListMatch(TypedDict, total=False):
    account_type: Any
    assigned_agents_count: int
    email: str
    id: str
    is_migrated: bool


class CustomerHealthRequired(TypedDict):
    assigned_agents: dict
    available_dates: list
    date: str
    email: str
    entries: list
    performance_overview: dict
    platform_coverage_summary: dict
    user_id: str


class CustomerHealth(CustomerHealthRequired, total=False):
    id: str


class CustomerHealthLoadMatchRequired(TypedDict):
    id: str


class CustomerHealthLoadMatch(CustomerHealthLoadMatchRequired, total=False):
    date: Any


class CustomerHealthAllCustomersItemRequired(TypedDict):
    assigned_agents_count: int
    daily_stats: list
    email: str
    total_views: int
    user_id: str


class CustomerHealthAllCustomersItem(CustomerHealthAllCustomersItemRequired, total=False):
    account_type: Any
    is_migrated: bool


class CustomerHealthAllCustomersItemListMatch(TypedDict, total=False):
    limit: int
    offset: int


class CustomerHealthViewsSummaryRequired(TypedDict):
    average_views_per_result: int
    date: str
    paid_users_count: int
    posted_results: int
    range: str
    top_users: list
    total_views: int
    trend: list
    trend_granularity: str
    users_with_views: int


class CustomerHealthViewsSummary(CustomerHealthViewsSummaryRequired, total=False):
    end_date: Any
    start_date: Any
    user_email: Any
    user_id: str


class CustomerHealthViewsSummaryListMatch(TypedDict, total=False):
    date: Any
    range: str
    user_id: str


class Daily(TypedDict, total=False):
    id: str


class DailyCreateData(TypedDict):
    id: str
    day: str


class DailyStatus(TypedDict, total=False):
    id: str


class DailyStatusLoadMatch(TypedDict):
    id: str
    day: str


class DedicatedAgentsDashboardRequired(TypedDict):
    active_connections: int
    bio: Any
    id: str
    is_active: bool
    name: str
    role: Any
    today_stats: dict
    yesterday_stats: dict


class DedicatedAgentsDashboard(DedicatedAgentsDashboardRequired, total=False):
    assigned_user_id: str
    assigned_user_ids: list
    instagram_url: Any
    last_admin_synced_at: Any
    tiktok_stats: Any
    tiktok_url: Any
    today_failed_entries: list
    upload_post_platforms: Any
    upload_post_profile: Any
    yesterday_failed_entries: list
    youtube_url: Any


class DedicatedAgentsDashboardListMatch(TypedDict, total=False):
    active_connections: int
    assigned_user_id: str
    assigned_user_ids: list
    bio: Any
    id: str
    instagram_url: Any
    is_active: bool
    last_admin_synced_at: Any
    name: str
    role: Any
    tiktok_stats: Any
    tiktok_url: Any
    today_failed_entries: list
    today_stats: dict
    upload_post_platforms: Any
    upload_post_profile: Any
    yesterday_failed_entries: list
    yesterday_stats: dict
    youtube_url: Any


class EnterpriseAgent(TypedDict):
    count: int
    product_id: str
    source_product_id: str
    target_product_id: str


class EnterpriseAgentLoadMatch(TypedDict, total=False):
    count: int
    product_id: str
    source_product_id: str
    target_product_id: str


class EnterpriseAgentCreateDataRequired(TypedDict):
    product_id: str
    source_product_id: str
    target_product_id: str


class EnterpriseAgentCreateData(EnterpriseAgentCreateDataRequired, total=False):
    count: int


class EnterpriseProduct(TypedDict):
    pass


class EnterpriseProductLoadMatch(TypedDict):
    product_id: str


class ExactAvailability(TypedDict):
    pass


class ExactAvailabilityLoadMatch(TypedDict):
    pass


class ExactFormula(TypedDict):
    pass


class ExactFormulaLoadMatch(TypedDict):
    pass


class ExtractV2Required(TypedDict):
    message: str
    status: str
    url: str


class ExtractV2(ExtractV2Required, total=False):
    instagram_username: Any


class ExtractV2CreateDataRequired(TypedDict):
    url: str


class ExtractV2CreateData(ExtractV2CreateDataRequired, total=False):
    instagram_username: Any


class FailedPost(TypedDict):
    agent_id: str
    agent_name: Any
    agent_platforms: Any
    error_message: Any
    id: str
    product_id: str
    results: Any
    scheduled_datetime: str
    source_type: str
    status: str
    user_email: str
    user_id: str
    user_name: Any
    video_id: str
    video_url: Any


class FailedPostListMatch(TypedDict, total=False):
    day: str


class File(TypedDict):
    file: str


class FileCreateData(TypedDict):
    file: str


class GenerateBlackoutSora2Prompt(TypedDict):
    media_asset_id: str
    product_id: str
    prompt: str


class GenerateBlackoutSora2PromptCreateData(TypedDict):
    media_asset_id: str
    product_id: str


class GeneratePomelliDemoRequired(TypedDict):
    current_demo_count: int
    message: str
    product_id: str
    success: bool


class GeneratePomelliDemo(GeneratePomelliDemoRequired, total=False):
    max_demos: int


class GeneratePomelliDemoCreateData(TypedDict):
    product_id: str


class GeneratePrompt(TypedDict):
    hook_duration: int
    media_asset_id: str
    media_asset_url: str
    prompt: str


class GeneratePromptCreateData(TypedDict):
    media_asset_id: str


class GenerateSora2Prompt(TypedDict):
    prompt: str


class GenerateSora2PromptLoadMatch(TypedDict, total=False):
    prompt: str


class HealthrxRequired(TypedDict):
    agent_id: str
    attempt: int
    benchmark_set: str
    commercial_license_evidence: str
    content_id: str
    dimensions: dict
    evidence: str
    evidence_urls: list
    external_key: str
    input_specification: dict
    kind: str
    measured_at: str
    model_version: str
    paused: bool
    pillar: str
    profile: dict
    provider: str
    provider_invoice_evidence: str
    reason: str
    reference_version: str
    request_key: str
    test_variable: str
    topic: str
    total_cost_usd: float


class Healthrx(HealthrxRequired, total=False):
    account_id: str
    action: str
    avatar_present: bool
    commercial: bool
    duration_seconds: int
    format: str
    includes_all_attempt_costs: bool
    level: int
    paid_campaign_id: str
    parent_content_id: str
    promotion_evidence: str
    scope: str


class HealthrxLoadMatchRequired(TypedDict):
    product_id: str


class HealthrxLoadMatch(HealthrxLoadMatchRequired, total=False):
    account_id: str


class HealthrxCreateDataRequired(TypedDict):
    product_id: str
    agent_id: str
    attempt: int
    benchmark_set: str
    commercial_license_evidence: str
    dimensions: dict
    evidence: str
    evidence_urls: list
    external_key: str
    input_specification: dict
    kind: str
    measured_at: str
    model_version: str
    paused: bool
    pillar: str
    profile: dict
    provider: str
    provider_invoice_evidence: str
    reason: str
    reference_version: str
    request_key: str
    test_variable: str
    topic: str
    total_cost_usd: float


class HealthrxCreateData(HealthrxCreateDataRequired, total=False):
    account_id: str
    content_id: str
    incident_id: str
    action: str
    avatar_present: bool
    commercial: bool
    duration_seconds: int
    format: str
    includes_all_attempt_costs: bool
    level: int
    paid_campaign_id: str
    parent_content_id: str
    promotion_evidence: str
    scope: str


class InitResetProductV6Required(TypedDict):
    auto_schedule_disabled: bool
    old_product_id: str
    queue_entries_cleared: int
    success: bool


class InitResetProductV6(InitResetProductV6Required, total=False):
    product_id: str


class InitResetProductV6CreateData(TypedDict, total=False):
    product_id: str


class IriRequired(TypedDict):
    idempotencyKey: str


class Iri(IriRequired, total=False):
    correlationId: Any
    productId: Any


class IriCreateDataRequired(TypedDict):
    connector_id: str
    idempotencyKey: str


class IriCreateData(IriCreateDataRequired, total=False):
    correlationId: Any
    productId: Any


class IrisCapabilityRequired(TypedDict):
    capability: str
    correlationId: str
    externalUserId: str
    idempotencyKey: str
    ok: bool
    productScope: str


class IrisCapability(IrisCapabilityRequired, total=False):
    errorCode: Any
    externalProductId: Any
    id: str
    input: dict
    membershipId: Any
    message: Any
    platformAccountId: Any
    platformLinkId: Any
    requestedBy: dict
    result: dict
    retryable: bool


class IrisCapabilityCreateDataRequired(TypedDict):
    id: str
    capability: str
    correlationId: str
    externalUserId: str
    idempotencyKey: str
    productScope: str


class IrisCapabilityCreateData(IrisCapabilityCreateDataRequired, total=False):
    externalProductId: Any
    input: dict
    membershipId: Any
    platformAccountId: Any
    platformLinkId: Any
    requestedBy: dict


class IrisChatRequired(TypedDict):
    correlationId: str
    idempotencyKey: str
    message: str
    mode: str
    runtimeStatus: str


class IrisChat(IrisChatRequired, total=False):
    artifacts: list
    ok: bool
    pageContext: dict
    productId: Any
    sessionId: Any


class IrisChatCreateDataRequired(TypedDict):
    correlationId: str
    idempotencyKey: str
    message: str


class IrisChatCreateData(IrisChatCreateDataRequired, total=False):
    pageContext: dict
    productId: Any
    sessionId: Any


class IrisConnector(TypedDict, total=False):
    connectors: list


class IrisConnectorListMatch(TypedDict, total=False):
    connectors: list


class IrisStatusRequired(TypedDict):
    status: dict


class IrisStatus(IrisStatusRequired, total=False):
    connectorsPreview: list
    product: Any
    tasksPreview: list


class IrisStatusListMatch(TypedDict, total=False):
    product_id: str


class IrisTaskRequired(TypedDict):
    title: str


class IrisTask(IrisTaskRequired, total=False):
    approvalRequired: bool
    cadence: str
    capability: Any
    completed: list
    description: str
    discover: list
    productId: Any
    recurring: list
    requiredConnectors: list


class IrisTaskListMatch(TypedDict, total=False):
    product_id: str


class IrisTaskCreateDataRequired(TypedDict):
    title: str


class IrisTaskCreateData(IrisTaskCreateDataRequired, total=False):
    approvalRequired: bool
    cadence: str
    capability: Any
    description: str
    productId: Any
    requiredConnectors: list


class IrisUsage(TypedDict, total=False):
    eventCount: int
    events: list
    membershipId: Any
    productScope: str


class IrisUsageListMatch(TypedDict, total=False):
    eventCount: int
    events: list
    membershipId: Any
    productScope: str


class Landing(TypedDict):
    file: str


class LandingCreateDataRequired(TypedDict):
    index: int
    file: str


class LandingCreateData(LandingCreateDataRequired, total=False):
    product_id: str


class LandingStat(TypedDict):
    landing: dict
    microhub: dict


class LandingStatLoadMatchRequired(TypedDict):
    slug: str


class LandingStatLoadMatch(LandingStatLoadMatchRequired, total=False):
    product_id: str


class LandingStatusRequired(TypedDict):
    landingStatus: str
    microhubStatus: str


class LandingStatus(LandingStatusRequired, total=False):
    errorMessage: Any


class LandingStatusLoadMatch(TypedDict, total=False):
    product_id: str


class LinkInBio(TypedDict):
    linkInBioType: str
    redirectUrl: str
    slug: str


class LinkInBioLoadMatch(TypedDict):
    slug: str


class LinkInDm(TypedDict):
    linkInDmsType: str
    redirectUrl: str
    slug: str


class LinkInDmLoadMatch(TypedDict):
    slug: str


class LinkInPost(TypedDict):
    linkInPostsType: str
    redirectUrl: str
    showLinkInFirstComment: bool
    slug: str


class LinkInPostLoadMatch(TypedDict):
    slug: str


class LinkUserRequired(TypedDict):
    onboarding_data_id: str
    success: bool


class LinkUser(LinkUserRequired, total=False):
    already_linked: bool


class LinkUserCreateData(TypedDict):
    onboarding_data_id: str


class MediaAssetRequired(TypedDict):
    category: str
    createdAt: str
    file: str
    id: str
    media_assets: list
    onboarding_data_id: str
    source: str
    type: str
    updatedAt: str
    url: str


class MediaAsset(MediaAssetRequired, total=False):
    description: str
    onboardingDataId: Any
    productId: Any
    product_id: str
    usedAt: Any
    veo3VideoId: Any


class MediaAssetLoadMatch(TypedDict):
    id: str


class MediaAssetCreateDataRequired(TypedDict):
    category: str
    createdAt: str
    file: str
    id: str
    media_assets: list
    onboarding_data_id: str
    source: str
    type: str
    updatedAt: str
    url: str


class MediaAssetCreateData(MediaAssetCreateDataRequired, total=False):
    description: str
    onboardingDataId: Any
    productId: Any
    product_id: str
    usedAt: Any
    veo3VideoId: Any


class Men(TypedDict):
    pass


class MenListMatch(TypedDict, total=False):
    bookmarked: Any
    category: Any
    limit: int
    offset: int
    product_id: str


class MicrodramaRequired(TypedDict):
    evidence: dict
    expected_revision: int
    idempotency_key: str
    reason: str
    role: str
    scores: dict
    stage: str
    status: str
    subject_hash: str
    verdict: str


class Microdrama(MicrodramaRequired, total=False):
    issues: list
    selected_premise_id: str
    title: str


class MicrodramaLoadMatch(TypedDict):
    episode_id: str


class MicrodramaCreateDataRequired(TypedDict):
    episode_id: str
    evidence: dict
    expected_revision: int
    idempotency_key: str
    reason: str
    role: str
    scores: dict
    stage: str
    status: str
    subject_hash: str
    verdict: str


class MicrodramaCreateData(MicrodramaCreateDataRequired, total=False):
    issues: list
    selected_premise_id: str
    title: str


class MicrodramaUpdateDataRequired(TypedDict):
    episode_id: str


class MicrodramaUpdateData(MicrodramaUpdateDataRequired, total=False):
    expected_revision: int
    selected_premise_id: str
    title: str


class MicrohubPublicRequired(TypedDict):
    slug: str


class MicrohubPublic(MicrohubPublicRequired, total=False):
    bio: Any
    ctaButtonText: Any
    ctaDescription: Any
    ctaLink: Any
    ctaTitle: Any
    headerImageUrl: Any
    links: list
    name: str
    profileImageUrl: Any
    socialLinks: dict
    testimonials: list


class MicrohubPublicLoadMatch(TypedDict):
    slug: str


class OnboardingStatusRequired(TypedDict):
    id: str
    platform: str


class OnboardingStatus(OnboardingStatusRequired, total=False):
    comments: int
    cover_image_url: Any
    likes: int
    video_url: Any
    views: int


class OnboardingStatusListMatchRequired(TypedDict):
    oid: str


class OnboardingStatusListMatch(OnboardingStatusListMatchRequired, total=False):
    account_type: Any


class OnboardingV6(TypedDict):
    pass


class OnboardingV6RemoveMatch(TypedDict):
    media_asset_id: str
    onboarding_data_id: str


class PaidUserRequired(TypedDict):
    agents_count: int
    auto_schedule_enabled: Any
    credits: int
    effective_agents_count: int
    email: str
    id: str
    membership: Any
    scheduled_queue_count: int
    subscription_status: Any


class PaidUser(PaidUserRequired, total=False):
    assigned_agents_count: int
    is_internal_user: bool
    is_migrated_user: bool
    subscription_details: Any


class PaidUserListMatch(TypedDict, total=False):
    agents_count: int
    assigned_agents_count: int
    auto_schedule_enabled: Any
    credits: int
    effective_agents_count: int
    email: str
    id: str
    is_internal_user: bool
    is_migrated_user: bool
    membership: Any
    scheduled_queue_count: int
    subscription_details: Any
    subscription_status: Any


class Pexel(TypedDict):
    pass


class PexelListMatch(TypedDict, total=False):
    count: int
    media_type: str
    orientation: str
    page: int
    query: str


class PhoneAdminAvailableAgentSource(TypedDict):
    available_count: int
    pc_name: str


class PhoneAdminAvailableAgentSourceListMatch(TypedDict, total=False):
    available_count: int
    pc_name: str


class ProductRequired(TypedDict):
    agent_count: int
    agents: list
    id: str
    is_active: bool
    name: str
    product_details: dict
    product_id: str
    product_name: str
    product_url: str
    total_count: int
    url: str
    userId: str


class Product(ProductRequired, total=False):
    createdAt: Any
    demoVideos: Any
    description: str
    favicon_url: Any
    howItWorks: Any
    how_it_works: Any
    images: Any
    initial_agents: int
    instagramHandle: Any
    instagram_handle: Any
    isActive: Any
    isApp: Any
    is_app: bool
    language: Any
    mediaAssets: Any
    media_asset_ids: Any
    media_assets: Any
    otherInstructions: Any
    other_instructions: Any
    outroVideo: Any
    pexelsVideos: Any
    pricing: Any
    pricingAndOffers: Any
    pricing_and_offers: Any
    product_demo_ids: list
    pronunciation: Any
    regenerate_sora2: bool
    repostSource: Any
    repost_source: Any
    screenshot_url: Any
    social_post_ids: list
    targetAudience: Any
    target_audience: Any
    templateProductId: Any
    tiktokHandle: Any
    tiktok_handle: Any
    updatedAt: Any


class ProductLoadMatch(TypedDict):
    id: str


class ProductListMatch(TypedDict, total=False):
    agent_count: int
    agents: list
    createdAt: Any
    demoVideos: Any
    description: str
    favicon_url: Any
    howItWorks: Any
    how_it_works: Any
    id: str
    images: Any
    initial_agents: int
    instagramHandle: Any
    instagram_handle: Any
    isActive: Any
    isApp: Any
    is_active: bool
    is_app: bool
    language: Any
    mediaAssets: Any
    media_asset_ids: Any
    media_assets: Any
    name: str
    otherInstructions: Any
    other_instructions: Any
    outroVideo: Any
    pexelsVideos: Any
    pricing: Any
    pricingAndOffers: Any
    pricing_and_offers: Any
    product_demo_ids: list
    product_details: dict
    product_id: str
    product_name: str
    product_url: str
    pronunciation: Any
    regenerate_sora2: bool
    repostSource: Any
    repost_source: Any
    screenshot_url: Any
    social_post_ids: list
    targetAudience: Any
    target_audience: Any
    templateProductId: Any
    tiktokHandle: Any
    tiktok_handle: Any
    total_count: int
    updatedAt: Any
    url: str
    userId: str


class ProductCreateDataRequired(TypedDict):
    product_details: dict
    product_url: str


class ProductCreateData(ProductCreateDataRequired, total=False):
    favicon_url: Any
    initial_agents: int
    product_demo_ids: list
    screenshot_url: Any
    social_post_ids: list


class ProductUpdateDataRequired(TypedDict):
    id: str


class ProductUpdateData(ProductUpdateDataRequired, total=False):
    description: str
    how_it_works: Any
    instagram_handle: Any
    is_app: bool
    language: Any
    media_asset_ids: Any
    name: str
    other_instructions: Any
    pricing_and_offers: Any
    pronunciation: Any
    regenerate_sora2: bool
    repost_source: Any
    target_audience: Any
    tiktok_handle: Any
    url: str


class ProductRemoveMatch(TypedDict):
    id: str


class ProductDashboardRequired(TypedDict):
    agents: list
    date: str
    pagination: dict
    products: list
    selected_product: Any
    summary: dict


class ProductDashboard(ProductDashboardRequired, total=False):
    phone_admin_error: Any


class ProductDashboardListMatch(TypedDict, total=False):
    date: Any
    page: int
    page_size: int
    product_id: str
    search: Any


class ProductDashboardView(TypedDict):
    date: str
    views: int


class ProductDashboardViewListMatchRequired(TypedDict):
    product_id: str


class ProductDashboardViewListMatch(ProductDashboardViewListMatchRequired, total=False):
    date: Any
    range: int


class ProductDemoRequired(TypedDict):
    created_at: str
    id: str
    source: str
    type: str
    url: str


class ProductDemo(ProductDemoRequired, total=False):
    description: str


class ProductDemoListMatch(TypedDict, total=False):
    product_id: str


class ProductLandingRequired(TypedDict):
    commentingOnMyPosts: bool
    commentingOnOthersPosts: bool
    dmCommenters: bool
    id: str
    landingStatus: str
    landingUrl: str
    linkInBioType: str
    linkInDmsType: str
    linkInPostsType: str
    microhubStatus: str
    microhubUrl: str
    productLinkSelection: str
    showLinkInFirstComment: bool
    slug: str


class ProductLanding(ProductLandingRequired, total=False):
    bio: Any
    ctaButtonText: Any
    ctaDescription: Any
    ctaLink: Any
    ctaTitle: Any
    dmInitialMessagePrompt: Any
    dmOngoingResponsePrompt: Any
    firstCommentTextBeforeLink: Any
    headerImageUrl: Any
    landingHtmlUrl: Any
    landingLastGeneratedAt: Any
    landingReferenceScreenshotUrl: Any
    landingScreenshotUrl: Any
    links: Any
    microhubBio: Any
    microhubCtaButtonText: Any
    microhubCtaDescription: Any
    microhubCtaLink: Any
    microhubCtaTitle: Any
    microhubHeaderImageUrl: Any
    microhubLinks: list
    microhubName: Any
    microhubProfileImageUrl: Any
    microhubScreenshotUrl: Any
    microhubSocialLinks: dict
    microhubTestimonials: list
    myPostsStylePrompt: Any
    name: str
    othersStylePrompt: Any
    othersTargetMarketPrompt: Any
    productUrl: Any
    profileImageUrl: Any
    shortLink: Any
    shortLinkKeyword: Any
    socialLinks: Any
    testimonials: Any


class ProductLandingListMatch(TypedDict, total=False):
    product_id: str


class ProductLandingUpdateData(TypedDict, total=False):
    product_id: str
    bio: Any
    commentingOnMyPosts: bool
    commentingOnOthersPosts: bool
    ctaButtonText: Any
    ctaDescription: Any
    ctaLink: Any
    ctaTitle: Any
    dmCommenters: bool
    dmInitialMessagePrompt: Any
    dmOngoingResponsePrompt: Any
    firstCommentTextBeforeLink: Any
    headerImageUrl: Any
    linkInBioType: str
    linkInDmsType: str
    linkInPostsType: str
    links: Any
    myPostsStylePrompt: Any
    name: str
    othersStylePrompt: Any
    othersTargetMarketPrompt: Any
    productLinkSelection: str
    profileImageUrl: Any
    shortLink: Any
    shortLinkKeyword: Any
    showLinkInFirstComment: bool
    slug: str
    socialLinks: Any
    testimonials: Any


class PublicResumeStatusRequired(TypedDict):
    exists: bool


class PublicResumeStatus(PublicResumeStatusRequired, total=False):
    can_resume_prelogin: bool
    content_collection_ready: bool
    current_step: Any
    flow_variant: Any
    repost_content_count: int
    repost_source: Any
    requires_repost_content: bool
    skip_demo: bool


class PublicResumeStatusLoadMatch(TypedDict):
    oid: str


class ReRollVideoRequired(TypedDict):
    queue_id: str
    video: dict


class ReRollVideo(ReRollVideoRequired, total=False):
    requires_polling: bool
    skip_credit_check: bool


class ReRollVideoCreateDataRequired(TypedDict):
    queue_id: str


class ReRollVideoCreateData(ReRollVideoCreateDataRequired, total=False):
    skip_credit_check: bool


class ReadRootGet(TypedDict):
    pass


class ReadRootGetLoadMatch(TypedDict):
    pass


class RecordDemoBookedRequired(TypedDict):
    message: dict
    session: dict


class RecordDemoBooked(RecordDemoBookedRequired, total=False):
    calendlyEventUri: Any
    calendlyInviteeUri: Any


class RecordDemoBookedCreateDataRequired(TypedDict):
    session_id: str


class RecordDemoBookedCreateData(RecordDemoBookedCreateDataRequired, total=False):
    calendlyEventUri: Any
    calendlyInviteeUri: Any


class RefreshStatRequired(TypedDict):
    entries_found: int
    message: str
    provider: str
    status: str


class RefreshStat(RefreshStatRequired, total=False):
    date_from: Any
    date_to: Any
    summary: Any


class RefreshStatCreateData(TypedDict, total=False):
    email: str
    user_id: str
    date_from: Any
    date_to: Any
    provider: str


class RemixerClipper(TypedDict):
    pass


class RemixerClipperLoadMatch(TypedDict):
    pass


class RemixerClipperCreateData(TypedDict):
    identifier: str


class ResetProduct(TypedDict):
    pass


class ResetProductLoadMatch(TypedDict):
    pass


class ResetProductCreateData(TypedDict):
    pass


class RetryWebsiteScrapeRequired(TypedDict):
    onboarding_data_id: str
    status: str
    success: bool
    url: str


class RetryWebsiteScrape(RetryWebsiteScrapeRequired, total=False):
    flow_variant: str
    skip_demo: bool


class RetryWebsiteScrapeCreateData(TypedDict):
    onboarding_data_id: str
    url: str


class SaveSurveyRequired(TypedDict):
    onboarding_data_id: str
    success: bool
    survey: dict


class SaveSurvey(SaveSurveyRequired, total=False):
    email_sent: bool


class SaveSurveyCreateData(TypedDict):
    onboarding_data_id: str
    survey: dict


class ScanSocialRequired(TypedDict):
    onboarding_data_id: str
    product_id: str
    status: str
    success: bool


class ScanSocial(ScanSocialRequired, total=False):
    instagram_handle: Any
    task_id: str
    tiktok_handle: Any


class ScanSocialCreateDataRequired(TypedDict):
    onboarding_data_id: str
    tiktok_handle: Any


class ScanSocialCreateData(ScanSocialCreateDataRequired, total=False):
    instagram_handle: Any
    product_id: str


class ScanSocialsPublicRequired(TypedDict):
    onboarding_data_id: str
    status: str
    success: bool


class ScanSocialsPublic(ScanSocialsPublicRequired, total=False):
    instagram_handle: Any
    message: Any
    tiktok_handle: Any


class ScanSocialsPublicCreateDataRequired(TypedDict):
    onboarding_data_id: str


class ScanSocialsPublicCreateData(ScanSocialsPublicCreateDataRequired, total=False):
    instagram_handle: Any
    tiktok_handle: Any


class ScanSocialsStatusRequired(TypedDict):
    onboarding_data_id: str
    status: str


class ScanSocialsStatus(ScanSocialsStatusRequired, total=False):
    ads_count: int
    product_id: str
    task_id: str


class ScanSocialsStatusLoadMatch(TypedDict, total=False):
    onboarding_data_id: str
    product_id: str


class ScheduleV2Required(TypedDict):
    created_at: str
    id: str
    reorders: list
    scheduled_datetime: str
    source_type: str
    status: str
    video_id: str


class ScheduleV2(ScheduleV2Required, total=False):
    agent: Any
    comment: Any
    instagram_posted_by: Any
    instagram_posted_url: Any
    instagram_scraped_social_post_id: str
    is_instagram_posted: bool
    is_tiktok_posted: bool
    is_youtube_posted: bool
    results: Any
    tiktok_posted_by: Any
    tiktok_posted_url: Any
    tiktok_scraped_social_post_id: str
    video: Any
    youtube_posted_by: Any
    youtube_posted_url: Any
    youtube_scraped_social_post_id: str


class ScheduleV2LoadMatch(TypedDict, total=False):
    all_product: bool
    day: int
    limit: int
    offset: int
    product_id: str


class ScheduleV2ListMatch(TypedDict, total=False):
    all_product: bool
    limit: int
    offset: int
    product_id: str
    status: Any


class ScheduleV2CreateDataRequired(TypedDict):
    created_at: str
    id: str
    reorders: list
    scheduled_datetime: str
    source_type: str
    status: str
    video_id: str


class ScheduleV2CreateData(ScheduleV2CreateDataRequired, total=False):
    agent: Any
    comment: Any
    instagram_posted_by: Any
    instagram_posted_url: Any
    instagram_scraped_social_post_id: str
    is_instagram_posted: bool
    is_tiktok_posted: bool
    is_youtube_posted: bool
    results: Any
    tiktok_posted_by: Any
    tiktok_posted_url: Any
    tiktok_scraped_social_post_id: str
    video: Any
    youtube_posted_by: Any
    youtube_posted_url: Any
    youtube_scraped_social_post_id: str


class ScheduleV2UpdateDataRequired(TypedDict):
    queue_id: str


class ScheduleV2UpdateData(ScheduleV2UpdateDataRequired, total=False):
    video_id: str


class ScheduleV2RemoveMatch(TypedDict):
    queue_id: str


class Scrape(TypedDict):
    old_product_id: str
    onboarding_data_id: str
    status: str
    success: bool
    url: str


class ScrapeCreateData(TypedDict):
    old_product_id: str
    url: str


class ScrapeWebsitePublicRequired(TypedDict):
    onboarding_data_id: str
    status: str
    success: bool
    url: str


class ScrapeWebsitePublic(ScrapeWebsitePublicRequired, total=False):
    flow_variant: str
    skip_demo: bool


class ScrapeWebsitePublicCreateDataRequired(TypedDict):
    url: str


class ScrapeWebsitePublicCreateData(ScrapeWebsitePublicCreateDataRequired, total=False):
    context: Any
    flow: Any
    skip_demo: bool


class ScrapedDataRequired(TypedDict):
    description: str
    howItWorks: str
    imageUrls: list
    name: str
    pricingAndOffers: str
    targetAudience: str
    url: str


class ScrapedData(ScrapedDataRequired, total=False):
    homepageVideoUrl: Any
    instagram_username: Any
    mediaAssets: list


class ScrapedDataCreateDataRequired(TypedDict):
    url: str


class ScrapedDataCreateData(ScrapedDataCreateDataRequired, total=False):
    instagram_username: Any


class ScrapingStatus(TypedDict):
    pass


class ScrapingStatusLoadMatch(TypedDict):
    pass


class SelfServeActivateRequired(TypedDict):
    onboarding_data_id: str
    success: bool


class SelfServeActivate(SelfServeActivateRequired, total=False):
    redirect_to_stripe: bool
    stripe_checkout_url: Any


class SelfServeActivateCreateData(TypedDict):
    onboarding_data_id: str


class Seo(TypedDict):
    pass


class SeoLoadMatch(TypedDict):
    pass


class SeoAiMention(TypedDict):
    bucket: str
    domain_type: str
    dominant_domain: str
    engine: str
    evidence: dict
    geo: str
    language: str
    primary_url: str
    prompt_text: str
    run_week: str
    secondary_urls: list


class SeoAiMentionListMatch(TypedDict, total=False):
    limit: int
    product_id: str


class SeoBacklink(TypedDict):
    anchor_text: str
    first_seen: str
    referring_domain: str
    status: str
    target_page: str


class SeoBacklinkListMatch(TypedDict, total=False):
    limit: int
    product_id: str


class SeoKeyword(TypedDict):
    blog_page: str
    current_position: float
    keyword: str
    keyword_group: str
    position_change: float


class SeoKeywordListMatch(TypedDict, total=False):
    day: int
    limit: int
    product_id: str


class SeoOverview(TypedDict):
    clicks: float
    ctr: float
    date: str
    impressions: float
    position: float


class SeoOverviewListMatch(TypedDict, total=False):
    day: int
    product_id: str


class SeoTraffic(TypedDict):
    end_date: str
    series: list
    site_url: str
    start_date: str
    top_countries: list
    top_pages: list
    top_queries: list
    totals: dict


class SeoTrafficListMatch(TypedDict, total=False):
    day: int
    product_id: str
    top_limit: int


class ShareAccessLink(TypedDict):
    share_token: str
    share_url: str


class ShareAccessLinkCreateData(TypedDict):
    share_token: str
    share_url: str


class Site(TypedDict):
    pass


class SiteLoadMatch(TypedDict):
    pass


class Slide(TypedDict, total=False):
    caption: Any
    id: str
    prompt: Any


class SlideCreateDataRequired(TypedDict):
    carousel_id: str
    slide_index: int


class SlideCreateData(SlideCreateDataRequired, total=False):
    caption: Any
    prompt: Any
    image_model: Any


class SlideUpdateDataRequired(TypedDict):
    carousel_id: str
    id: int


class SlideUpdateData(SlideUpdateDataRequired, total=False):
    caption: Any
    prompt: Any


class SlugValidationRequired(TypedDict):
    valid: bool


class SlugValidation(SlugValidationRequired, total=False):
    reason: Any


class SlugValidationLoadMatchRequired(TypedDict):
    slug: str


class SlugValidationLoadMatch(SlugValidationLoadMatchRequired, total=False):
    product_id: str


class SocialRequired(TypedDict):
    code: str
    code_verifier: str
    createdAt: str
    id: str
    platform: str
    platformUserId: str
    userId: str


class Social(SocialRequired, total=False):
    updatedAt: Any
    username: str


class SocialLoadMatch(TypedDict, total=False):
    code_challenge: Any
    code_challenge_method: str


class SocialListMatch(TypedDict, total=False):
    code: str
    code_verifier: str
    createdAt: str
    id: str
    platform: str
    platformUserId: str
    updatedAt: Any
    userId: str
    username: str


class SocialCreateData(TypedDict):
    code: str
    code_verifier: str


class SocialRemoveMatch(TypedDict):
    platform: str


class SocialScanPreviewRequired(TypedDict):
    posts: list
    success: bool


class SocialScanPreview(SocialScanPreviewRequired, total=False):
    instagram_handle: Any
    tiktok_handle: Any


class SocialScanPreviewCreateData(TypedDict, total=False):
    instagram_handle: Any
    tiktok_handle: Any


class SocialScanProcessRequired(TypedDict):
    posts: list
    product_id: str
    success: bool


class SocialScanProcess(SocialScanProcessRequired, total=False):
    task_id: str


class SocialScanProcessCreateData(TypedDict):
    posts: list
    product_id: str


class SocialScanSave(TypedDict):
    media_asset_ids: list
    posts: list
    product_id: str
    success: bool


class SocialScanSaveCreateData(TypedDict):
    posts: list
    product_id: str


class Sora2AvatarRequired(TypedDict):
    created_at: str
    id: str
    prompt_key: str
    selected_age_bucket: str
    selected_gender: str
    selected_race: str
    sora2_video_url: str
    updated_at: str


class Sora2Avatar(Sora2AvatarRequired, total=False):
    avatar_frame_url: Any
    current_step: int
    headshot_url: Any
    logs: dict
    run_output_dir: Any
    selected_prompt: Any
    sora2_cameo_handle: Any
    sora2_cameo_id: str
    sora2_cameo_link: Any
    sora2_display_name: Any
    sora2_task_id: str


class Sora2AvatarLoadMatch(TypedDict):
    id: str


class Sora2AvatarListMatch(TypedDict, total=False):
    completed_only: bool
    current_step: Any
    page: int
    page_size: int
    prompt_key: Any
    search: Any
    selected_age_bucket: Any
    selected_gender: Any
    selected_race: Any


class Sora2AvatarCreateDataRequired(TypedDict):
    prompt_key: str
    selected_age_bucket: str
    selected_gender: str
    selected_race: str
    sora2_video_url: str


class Sora2AvatarCreateData(Sora2AvatarCreateDataRequired, total=False):
    avatar_frame_url: Any
    current_step: int
    headshot_url: Any
    logs: dict
    run_output_dir: Any
    selected_prompt: Any
    sora2_cameo_handle: Any
    sora2_cameo_id: str
    sora2_cameo_link: Any
    sora2_display_name: Any
    sora2_task_id: str


class Sora2AvatarUpdateDataRequired(TypedDict):
    id: str


class Sora2AvatarUpdateData(Sora2AvatarUpdateDataRequired, total=False):
    avatar_frame_url: Any
    current_step: int
    headshot_url: Any
    logs: dict
    prompt_key: str
    run_output_dir: Any
    selected_age_bucket: str
    selected_gender: str
    selected_prompt: Any
    selected_race: str
    sora2_cameo_handle: Any
    sora2_cameo_id: str
    sora2_cameo_link: Any
    sora2_display_name: Any
    sora2_task_id: str
    sora2_video_url: str


class Sora2AvatarAssetUploadRequired(TypedDict):
    file: str
    s3_key: str
    upload_type: str
    url: str


class Sora2AvatarAssetUpload(Sora2AvatarAssetUploadRequired, total=False):
    avatar_id: str
    run_output_dir: Any


class Sora2AvatarAssetUploadCreateDataRequired(TypedDict):
    file: str
    s3_key: str
    upload_type: str
    url: str


class Sora2AvatarAssetUploadCreateData(Sora2AvatarAssetUploadCreateDataRequired, total=False):
    avatar_id: str
    run_output_dir: Any


class Sora2AvatarStat(TypedDict):
    by_age_bucket: dict
    by_gender: dict
    by_prompt_key: dict
    by_race: dict
    completed_avatars: int
    completion_rate: float
    total_avatars: int


class Sora2AvatarStatLoadMatch(TypedDict, total=False):
    prompt_key: Any
    selected_age_bucket: Any
    selected_gender: Any
    selected_race: Any


class Stat(TypedDict):
    pass


class StatListMatch(TypedDict, total=False):
    day: int


class StatsRefreshBackfill(TypedDict):
    message: str
    status: str
    task_id: str


class StatsRefreshBackfillCreateData(TypedDict, total=False):
    day: int
    days: Any
    user_emails: Any


class StatsRefreshIssueRequired(TypedDict):
    aged_over_24h: bool
    first_detected_at: str
    id: str
    last_detected_at: str
    platform: str
    posted_date_et: str
    reason_code: str
    retry_count: int
    scheduled_datetime_utc: str
    stale_after_sla: bool
    status: str
    user_email_snapshot: str
    user_id: str


class StatsRefreshIssue(StatsRefreshIssueRequired, total=False):
    agent_id: str
    agent_name_snapshot: Any
    last_refresh_completed_at: Any
    last_seen_run_id: str
    latest_error_message: Any
    next_retry_at: Any
    post_method: Any
    post_url: Any
    product_id: str
    product_name_snapshot: Any
    resolved_at: Any
    schedule_queue_id: str


class StatsRefreshIssueListMatch(TypedDict, total=False):
    date_from: Any
    date_to: Any
    limit: int
    offset: int
    platform: Any
    posting_method: Any
    query: Any
    reason: Any
    status: str


class StatsRefreshOverviewRequired(TypedDict):
    aged_over_24h: int
    backlog_preview: list
    coverage_percent: float
    customer_counts: dict
    date: str
    generated_at: str
    method_counts: dict
    platform_counts: dict
    platform_units_resolved: int
    platform_units_total: int
    platform_units_unresolved: int
    posted_entries: int
    reason_counts: dict
    sla_deadline_et: str
    stale_after_sla: int
    top_affected_customers: list


class StatsRefreshOverview(StatsRefreshOverviewRequired, total=False):
    active_run: Any


class StatsRefreshOverviewListMatch(TypedDict, total=False):
    date: Any


class StatsRefreshRunSummaryRequired(TypedDict):
    entries_failed: int
    entries_skipped: int
    entries_total: int
    entries_updated: int
    id: str
    issues_opened: int
    issues_resolved: int
    platform_units_resolved: int
    platform_units_total: int
    platform_units_unresolved: int
    platform_updates_via_profile: int
    platform_updates_via_url: int
    run_type: str
    started_at: str
    status: str
    users_count: int


class StatsRefreshRunSummary(StatsRefreshRunSummaryRequired, total=False):
    celery_task_id: str
    completed_at: Any
    error_summary_json: Any
    provider: Any
    refresh_trigger: Any
    requested_by_email: Any
    target_date_et: Any


class StatsRefreshRunSummaryListMatch(TypedDict, total=False):
    date_from: Any
    date_to: Any
    include_global: bool
    limit: int
    offset: int
    run_type: Any
    status: Any


class StatsRefreshTaskTriggerRequired(TypedDict):
    message: str
    status: str
    target_date: str
    task_id: str


class StatsRefreshTaskTrigger(StatsRefreshTaskTriggerRequired, total=False):
    users_count: int


class StatsRefreshTaskTriggerCreateDataRequired(TypedDict):
    message: str
    status: str
    target_date: str
    task_id: str


class StatsRefreshTaskTriggerCreateData(StatsRefreshTaskTriggerCreateDataRequired, total=False):
    users_count: int


class Stripe(TypedDict):
    pass


class StripeCreateData(TypedDict, total=False):
    chat_plan_id: Any
    checkout_session_id: Any
    coupon_id: Any
    credits_per_unit: Any
    membership: Any
    onboarding_data_id: Any
    quantity: Any


class Style(TypedDict):
    pass


class StyleLoadMatch(TypedDict):
    pass


class Template(TypedDict):
    pass


class TemplateLoadMatch(TypedDict):
    pass


class TikTokCreatorInfo(TypedDict, total=False):
    commentDisabled: bool
    creatorAvatarUrl: Any
    creatorNickname: Any
    creatorUsername: Any
    duetDisabled: bool
    maxVideoPostDurationSec: int
    privacyLevelOptions: list
    stitchDisabled: bool


class TikTokCreatorInfoListMatch(TypedDict, total=False):
    commentDisabled: bool
    creatorAvatarUrl: Any
    creatorNickname: Any
    creatorUsername: Any
    duetDisabled: bool
    maxVideoPostDurationSec: int
    privacyLevelOptions: list
    stitchDisabled: bool


class TopPost(TypedDict):
    comments: int
    id: str
    likes: int
    platforms: list
    scheduled_datetime: str
    user_email: str
    user_id: str
    views: int


class TopPostListMatch(TypedDict):
    date: str


class UploadPostAgent(TypedDict):
    pass


class UploadPostAgentCreateData(TypedDict):
    pass


class UserRequired(TypedDict):
    agents: list
    createdAt: str
    email: str
    id: str
    name: str
    totalCount: int
    updatedAt: str
    userId: str


class User(UserRequired, total=False):
    accountType: Any
    activatedByAdminAt: Any
    activatedByAdminId: Any
    agentsCount: Any
    attribution: Any
    avatarImageUrl: Any
    avatarVoiceUrl: Any
    credits: int
    googleId: Any
    hasSeenScheduleWelcome: bool
    industry: Any
    instagramId: Any
    isActivatedByAdmin: bool
    isAdmin: bool
    isInternalUser: Any
    isMigrated: Any
    isResettingProduct: Any
    membership: Any
    partnerDirectLoginDisabled: bool
    partnerExternalUserId: Any
    partnerPolicyCode: Any
    partnerSource: Any
    picture: Any
    stripeCustomerId: Any
    stripeSubscriptionId: Any
    subscriptionCurrentPeriodEnd: Any
    subscriptionStatus: Any


class UserLoadMatchRequired(TypedDict):
    id: str


class UserLoadMatch(UserLoadMatchRequired, total=False):
    product_id: str


class UserUpdateData(TypedDict, total=False):
    accountType: Any
    activatedByAdminAt: Any
    activatedByAdminId: Any
    agents: list
    agentsCount: Any
    attribution: Any
    avatarImageUrl: Any
    avatarVoiceUrl: Any
    createdAt: str
    credits: int
    email: str
    googleId: Any
    hasSeenScheduleWelcome: bool
    id: str
    industry: Any
    instagramId: Any
    isActivatedByAdmin: bool
    isAdmin: bool
    isInternalUser: Any
    isMigrated: Any
    isResettingProduct: Any
    membership: Any
    name: str
    partnerDirectLoginDisabled: bool
    partnerExternalUserId: Any
    partnerPolicyCode: Any
    partnerSource: Any
    picture: Any
    stripeCustomerId: Any
    stripeSubscriptionId: Any
    subscriptionCurrentPeriodEnd: Any
    subscriptionStatus: Any
    totalCount: int
    updatedAt: str
    userId: str


class UserAgentRequired(TypedDict):
    agent: dict
    assigned_at: str
    assignment_id: str
    status: str


class UserAgent(UserAgentRequired, total=False):
    expires_at: Any
    id: str


class UserAgentListMatchRequired(TypedDict):
    id: str


class UserAgentListMatch(UserAgentListMatchRequired, total=False):
    limit: int
    offset: int
    product_id: str


class UserAgentCreateDataRequired(TypedDict):
    id: str
    agent: dict
    assigned_at: str
    assignment_id: str
    status: str


class UserAgentCreateData(UserAgentCreateDataRequired, total=False):
    agent_id: str
    phone_admin_pc_name: Any
    product_id: str
    expires_at: Any


class UserHealthDetailRequired(TypedDict):
    account_type: Any
    activated: bool
    assigned_agents: list
    assigned_agents_count: int
    auto_schedule_enabled: bool
    created_at: str
    credits: int
    effective_posted_video_reuse_percent: int
    email: str
    expected_agents_count: int
    id: str
    is_activated_by_admin: bool
    is_admin: bool
    is_internal_user: bool
    is_migrated: bool
    membership: Any
    name: str
    onboarding_flow: str
    product_id: str
    product_name: Any
    product_url: Any
    subscription_status: Any
    today_failed: int
    today_posted: int
    today_scheduled: int
    tomorrow_capacity: int
    tomorrow_scheduled: int
    videos_completed: int
    videos_failed: int
    videos_pending: int
    videos_stale: int
    videos_total: int
    yesterday_failed: int
    yesterday_failed_entries: list
    yesterday_posted: int
    yesterday_total: int


class UserHealthDetail(UserHealthDetailRequired, total=False):
    activated_by_admin_at: Any
    activated_by_admin_id: str
    admin_notes: Any
    agents_count: int
    assigned_agents_preview_limit: int
    assigned_agents_truncated: bool
    comments_expected_per_day: int
    comments_fix_block_reason: Any
    comments_fix_ready: bool
    comments_today_failed: int
    comments_today_posted: int
    comments_today_scheduled: int
    comments_yesterday_failed: int
    comments_yesterday_posted: int
    comments_yesterday_total: int
    is_bookmarked: bool
    landing_slug: Any
    landing_status: Any
    landing_url: Any
    microhub_status: Any
    microhub_url: Any
    posted_video_reuse_percent: Any
    survey_data: Any


class UserHealthDetailListMatchRequired(TypedDict):
    id: str


class UserHealthDetailListMatch(UserHealthDetailListMatchRequired, total=False):
    assigned_agents_preview_limit: int
    product_id: str


class UserWithAvatarSubmission(TypedDict):
    avatar_image_url: str
    avatar_voice_url: str
    created_at: str
    email: str
    id: str
    name: str


class UserWithAvatarSubmissionListMatch(TypedDict, total=False):
    avatar_image_url: str
    avatar_voice_url: str
    created_at: str
    email: str
    id: str
    name: str


class UsersHealthRequired(TypedDict):
    account_type: Any
    agents_count: int
    agents_health: str
    agents_issue: Any
    assigned_agents_count: int
    auto_schedule_enabled: bool
    auto_schedule_health: str
    auto_schedule_issue: Any
    auto_schedule_today_health: str
    auto_schedule_today_issue: Any
    created_at: str
    email: str
    expected_agents_count: int
    id: str
    is_internal_user: bool
    is_migrated: bool
    membership: Any
    name: str
    posts_health: str
    posts_issue: Any
    posts_today_health: str
    posts_today_issue: Any
    subscription_status: Any
    today_expected_count: int
    today_failed_count: int
    today_scheduled_count: int
    today_total_count: int
    tomorrow_expected_count: int
    tomorrow_scheduled_count: int
    yesterday_failed_count: int
    yesterday_total_count: int


class UsersHealth(UsersHealthRequired, total=False):
    admin_notes: Any
    is_bookmarked: bool


class UsersHealthListMatch(TypedDict, total=False):
    include_internal_user: bool
    include_migrated_user: bool


class VideoRequired(TypedDict):
    created_at: str
    id: str
    title: str
    url: str
    video_id: str


class Video(VideoRequired, total=False):
    agent_id: str
    bookmarked: Any
    captions: Any
    carousel_data: Any
    duration: float
    generation_status: Any
    image_prompt: Any
    is_onboarding: bool
    is_template: bool
    main_avatar: Any
    main_prompt: Any
    media_asset_id: str
    product_id: str
    reel_id: str
    thumbnail_url: Any
    type: Any
    updated_at: Any
    user_id: str


class VideoLoadMatch(TypedDict):
    id: str


class VideoCreateDataRequired(TypedDict):
    captions: Any
    title: str
    url: str
    video_id: str


class VideoCreateData(VideoCreateDataRequired, total=False):
    agent_id: str
    bookmarked: Any
    carousel_data: Any
    duration: float
    generation_status: Any
    image_prompt: Any
    is_onboarding: bool
    is_template: bool
    main_prompt: Any
    media_asset_id: str
    product_id: str
    reel_id: str
    thumbnail_url: Any
    type: Any
    user_id: str


class VideoUpdateDataRequired(TypedDict):
    id: str


class VideoUpdateData(VideoUpdateDataRequired, total=False):
    agent_id: str
    bookmarked: Any
    captions: Any
    carousel_data: Any
    duration: float
    generation_status: Any
    image_prompt: Any
    is_onboarding: bool
    is_template: bool
    main_prompt: Any
    media_asset_id: str
    product_id: str
    reel_id: str
    thumbnail_url: Any
    title: str
    type: Any
    url: str
    user_id: str


class VideoRemoveMatch(TypedDict):
    id: str


class VideoRemixerWorkerRequired(TypedDict):
    error: str
    file: str
    lease_token: str
    manifest: str
    model: str
    prompt_version: str
    thumbnail: str
    worker_id: str


class VideoRemixerWorker(VideoRemixerWorkerRequired, total=False):
    captions_ass: str
    captions_vtt: str
    cost_usd: float
    kinds: list
    limit: int
    processing_seconds: float
    result: dict
    tier: str


class VideoRemixerWorkerCreateDataRequired(TypedDict):
    error: str
    file: str
    lease_token: str
    manifest: str
    model: str
    prompt_version: str
    thumbnail: str
    worker_id: str


class VideoRemixerWorkerCreateData(VideoRemixerWorkerCreateDataRequired, total=False):
    captions_ass: str
    captions_vtt: str
    cost_usd: float
    kinds: list
    limit: int
    processing_seconds: float
    result: dict
    tier: str


class WatchdogRecovery(TypedDict):
    item_id: str
    passed: bool
    table: str


class WatchdogRecoveryLoadMatch(TypedDict, total=False):
    device_id: str


class WatchdogRecoveryCreateData(TypedDict):
    item_id: str
    passed: bool
    table: str


class WinningAdRequired(TypedDict):
    created_at: str
    id: str
    source: str
    type: str
    url: str


class WinningAd(WinningAdRequired, total=False):
    description: str


class WinningAdListMatch(TypedDict, total=False):
    product_id: str


class XAdaptation(TypedDict):
    pass


class XAdaptationLoadMatch(TypedDict):
    pass


class ZerohumanAdminAccountRequired(TypedDict):
    account_mode: str
    active_queue_count: int
    email: str
    external_user_id: str
    provisioning_status: str
    user_id: str


class ZerohumanAdminAccount(ZerohumanAdminAccountRequired, total=False):
    assigned_agent: Any
    created_at: Any
    membership: Any
    policy_code: Any
    product_id: str
    product_name: Any
    subscription_status: Any
    updated_at: Any


class ZerohumanAdminAccountListMatch(TypedDict, total=False):
    account_mode: str
    active_queue_count: int
    assigned_agent: Any
    created_at: Any
    email: str
    external_user_id: str
    membership: Any
    policy_code: Any
    product_id: str
    product_name: Any
    provisioning_status: str
    subscription_status: Any
    updated_at: Any
    user_id: str
