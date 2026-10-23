# frozen_string_literal: true

# Typed models for the CrackedApiReference SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Activate entity data model.
#
# @!attribute [rw] activated_at
#   @return [Object, nil]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
Activate = Struct.new(
  :activated_at,
  :message,
  :success,
  keyword_init: true
)

# Request payload for Activate#create.
#
# @!attribute [rw] user_id
#   @return [String]
#
# @!attribute [rw] activated_at
#   @return [Object, nil]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
ActivateCreateData = Struct.new(
  :user_id,
  :activated_at,
  :message,
  :success,
  keyword_init: true
)

# ActivateUser entity data model.
#
# @!attribute [rw] activated_at
#   @return [Object, nil]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
ActivateUser = Struct.new(
  :activated_at,
  :message,
  :success,
  keyword_init: true
)

# Request payload for ActivateUser#create.
#
# @!attribute [rw] user_id
#   @return [String]
#
# @!attribute [rw] activated_at
#   @return [Object, nil]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
ActivateUserCreateData = Struct.new(
  :user_id,
  :activated_at,
  :message,
  :success,
  keyword_init: true
)

# ActiveOnboarding entity data model.
#
# @!attribute [rw] current_step
#   @return [Object, nil]
#
# @!attribute [rw] has_active_onboarding
#   @return [Boolean]
#
# @!attribute [rw] onboarding_data_id
#   @return [String, nil]
ActiveOnboarding = Struct.new(
  :current_step,
  :has_active_onboarding,
  :onboarding_data_id,
  keyword_init: true
)

# Request payload for ActiveOnboarding#load.
#
# @!attribute [rw] current_step
#   @return [Object, nil]
#
# @!attribute [rw] has_active_onboarding
#   @return [Boolean, nil]
#
# @!attribute [rw] onboarding_data_id
#   @return [String, nil]
ActiveOnboardingLoadMatch = Struct.new(
  :current_step,
  :has_active_onboarding,
  :onboarding_data_id,
  keyword_init: true
)

# Admin entity data model.
#
# @!attribute [rw] apply
#   @return [Boolean, nil]
#
# @!attribute [rw] count
#   @return [Integer]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] date_from
#   @return [Object, nil]
#
# @!attribute [rw] date_to
#   @return [Object, nil]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] include_failed
#   @return [Boolean, nil]
#
# @!attribute [rw] include_pending
#   @return [Boolean, nil]
#
# @!attribute [rw] include_records
#   @return [Boolean, nil]
#
# @!attribute [rw] issue_ids
#   @return [Object, nil]
#
# @!attribute [rw] only_active
#   @return [Boolean, nil]
#
# @!attribute [rw] platform
#   @return [Object, nil]
#
# @!attribute [rw] posting_method
#   @return [Object, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] query
#   @return [Object, nil]
#
# @!attribute [rw] reason
#   @return [Object, nil]
#
# @!attribute [rw] regenerate
#   @return [Boolean, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] user_membership
#   @return [Object, nil]
#
# @!attribute [rw] user_name
#   @return [Object, nil]
#
# @!attribute [rw] user_onboarding_step
#   @return [Object, nil]
#
# @!attribute [rw] video_type
#   @return [String]
Admin = Struct.new(
  :apply,
  :count,
  :created_at,
  :date_from,
  :date_to,
  :email,
  :id,
  :include_failed,
  :include_pending,
  :include_records,
  :issue_ids,
  :only_active,
  :platform,
  :posting_method,
  :product_id,
  :query,
  :reason,
  :regenerate,
  :status,
  :user_membership,
  :user_name,
  :user_onboarding_step,
  :video_type,
  keyword_init: true
)

# Request payload for Admin#load.
#
# @!attribute [rw] date
#   @return [String]
#
# @!attribute [rw] day
#   @return [Object, nil]
#
# @!attribute [rw] user_email
#   @return [Object, nil]
#
# @!attribute [rw] user_id
#   @return [String, nil]
AdminLoadMatch = Struct.new(
  :date,
  :day,
  :user_email,
  :user_id,
  keyword_init: true
)

# Request payload for Admin#list.
#
# @!attribute [rw] apply
#   @return [Boolean, nil]
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] date_from
#   @return [Object, nil]
#
# @!attribute [rw] date_to
#   @return [Object, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] include_failed
#   @return [Boolean, nil]
#
# @!attribute [rw] include_pending
#   @return [Boolean, nil]
#
# @!attribute [rw] include_records
#   @return [Boolean, nil]
#
# @!attribute [rw] issue_ids
#   @return [Object, nil]
#
# @!attribute [rw] only_active
#   @return [Boolean, nil]
#
# @!attribute [rw] platform
#   @return [Object, nil]
#
# @!attribute [rw] posting_method
#   @return [Object, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] query
#   @return [Object, nil]
#
# @!attribute [rw] reason
#   @return [Object, nil]
#
# @!attribute [rw] regenerate
#   @return [Boolean, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] user_membership
#   @return [Object, nil]
#
# @!attribute [rw] user_name
#   @return [Object, nil]
#
# @!attribute [rw] user_onboarding_step
#   @return [Object, nil]
#
# @!attribute [rw] video_type
#   @return [String, nil]
AdminListMatch = Struct.new(
  :apply,
  :count,
  :created_at,
  :date_from,
  :date_to,
  :email,
  :id,
  :include_failed,
  :include_pending,
  :include_records,
  :issue_ids,
  :only_active,
  :platform,
  :posting_method,
  :product_id,
  :query,
  :reason,
  :regenerate,
  :status,
  :user_membership,
  :user_name,
  :user_onboarding_step,
  :video_type,
  keyword_init: true
)

# Request payload for Admin#create.
#
# @!attribute [rw] user_id
#   @return [String]
#
# @!attribute [rw] apply
#   @return [Boolean, nil]
#
# @!attribute [rw] count
#   @return [Integer]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] date_from
#   @return [Object]
#
# @!attribute [rw] date_to
#   @return [Object]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] include_failed
#   @return [Boolean, nil]
#
# @!attribute [rw] include_pending
#   @return [Boolean, nil]
#
# @!attribute [rw] include_records
#   @return [Boolean, nil]
#
# @!attribute [rw] issue_ids
#   @return [Object, nil]
#
# @!attribute [rw] only_active
#   @return [Boolean, nil]
#
# @!attribute [rw] platform
#   @return [Object, nil]
#
# @!attribute [rw] posting_method
#   @return [Object, nil]
#
# @!attribute [rw] product_id
#   @return [String]
#
# @!attribute [rw] query
#   @return [Object, nil]
#
# @!attribute [rw] reason
#   @return [Object, nil]
#
# @!attribute [rw] regenerate
#   @return [Boolean, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] user_membership
#   @return [Object, nil]
#
# @!attribute [rw] user_name
#   @return [Object, nil]
#
# @!attribute [rw] user_onboarding_step
#   @return [Object, nil]
#
# @!attribute [rw] video_type
#   @return [String]
AdminCreateData = Struct.new(
  :user_id,
  :apply,
  :count,
  :created_at,
  :date_from,
  :date_to,
  :email,
  :id,
  :include_failed,
  :include_pending,
  :include_records,
  :issue_ids,
  :only_active,
  :platform,
  :posting_method,
  :product_id,
  :query,
  :reason,
  :regenerate,
  :status,
  :user_membership,
  :user_name,
  :user_onboarding_step,
  :video_type,
  keyword_init: true
)

# Request payload for Admin#update.
#
# @!attribute [rw] agent_id
#   @return [String]
#
# @!attribute [rw] agent_type
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] apply
#   @return [Boolean, nil]
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] date_from
#   @return [Object, nil]
#
# @!attribute [rw] date_to
#   @return [Object, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] include_failed
#   @return [Boolean, nil]
#
# @!attribute [rw] include_pending
#   @return [Boolean, nil]
#
# @!attribute [rw] include_records
#   @return [Boolean, nil]
#
# @!attribute [rw] issue_ids
#   @return [Object, nil]
#
# @!attribute [rw] only_active
#   @return [Boolean, nil]
#
# @!attribute [rw] platform
#   @return [Object, nil]
#
# @!attribute [rw] posting_method
#   @return [Object, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] query
#   @return [Object, nil]
#
# @!attribute [rw] reason
#   @return [Object, nil]
#
# @!attribute [rw] regenerate
#   @return [Boolean, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] user_membership
#   @return [Object, nil]
#
# @!attribute [rw] user_name
#   @return [Object, nil]
#
# @!attribute [rw] user_onboarding_step
#   @return [Object, nil]
#
# @!attribute [rw] video_type
#   @return [String, nil]
AdminUpdateData = Struct.new(
  :agent_id,
  :agent_type,
  :is_active,
  :apply,
  :count,
  :created_at,
  :date_from,
  :date_to,
  :email,
  :id,
  :include_failed,
  :include_pending,
  :include_records,
  :issue_ids,
  :only_active,
  :platform,
  :posting_method,
  :product_id,
  :query,
  :reason,
  :regenerate,
  :status,
  :user_membership,
  :user_name,
  :user_onboarding_step,
  :video_type,
  keyword_init: true
)

# Request payload for Admin#remove.
#
# @!attribute [rw] tester_id
#   @return [String]
AdminRemoveMatch = Struct.new(
  :tester_id,
  keyword_init: true
)

# AdminAccountReset entity data model.
#
# @!attribute [rw] agent_ids
#   @return [Array]
#
# @!attribute [rw] agent_ids_sha256
#   @return [String]
#
# @!attribute [rw] backup_sha256
#   @return [String]
#
# @!attribute [rw] batch_size
#   @return [Integer, nil]
#
# @!attribute [rw] confirmation
#   @return [String]
#
# @!attribute [rw] customer_email
#   @return [String]
#
# @!attribute [rw] pc_name
#   @return [String]
#
# @!attribute [rw] phase
#   @return [String, nil]
#
# @!attribute [rw] product_id
#   @return [String]
#
# @!attribute [rw] video_ids
#   @return [Array, nil]
AdminAccountReset = Struct.new(
  :agent_ids,
  :agent_ids_sha256,
  :backup_sha256,
  :batch_size,
  :confirmation,
  :customer_email,
  :pc_name,
  :phase,
  :product_id,
  :video_ids,
  keyword_init: true
)

# Request payload for AdminAccountReset#create.
#
# @!attribute [rw] agent_ids
#   @return [Array]
#
# @!attribute [rw] agent_ids_sha256
#   @return [String]
#
# @!attribute [rw] backup_sha256
#   @return [String]
#
# @!attribute [rw] batch_size
#   @return [Integer, nil]
#
# @!attribute [rw] confirmation
#   @return [String]
#
# @!attribute [rw] customer_email
#   @return [String]
#
# @!attribute [rw] pc_name
#   @return [String]
#
# @!attribute [rw] phase
#   @return [String, nil]
#
# @!attribute [rw] product_id
#   @return [String]
#
# @!attribute [rw] video_ids
#   @return [Array, nil]
AdminAccountResetCreateData = Struct.new(
  :agent_ids,
  :agent_ids_sha256,
  :backup_sha256,
  :batch_size,
  :confirmation,
  :customer_email,
  :pc_name,
  :phase,
  :product_id,
  :video_ids,
  keyword_init: true
)

# AdminCarousel entity data model.
#
# @!attribute [rw] agent_id
#   @return [String, nil]
#
# @!attribute [rw] batch_id
#   @return [String, nil]
#
# @!attribute [rw] caption
#   @return [String, nil]
#
# @!attribute [rw] content_base64
#   @return [String, nil]
#
# @!attribute [rw] day
#   @return [Object, nil]
#
# @!attribute [rw] dry_run
#   @return [Boolean, nil]
#
# @!attribute [rw] engine_run
#   @return [String, nil]
#
# @!attribute [rw] expected_revision
#   @return [String]
#
# @!attribute [rw] formula
#   @return [Hash]
#
# @!attribute [rw] formula_id
#   @return [String, nil]
#
# @!attribute [rw] prompt
#   @return [String]
#
# @!attribute [rw] slides
#   @return [Array]
#
# @!attribute [rw] title
#   @return [String, nil]
AdminCarousel = Struct.new(
  :agent_id,
  :batch_id,
  :caption,
  :content_base64,
  :day,
  :dry_run,
  :engine_run,
  :expected_revision,
  :formula,
  :formula_id,
  :prompt,
  :slides,
  :title,
  keyword_init: true
)

# Request payload for AdminCarousel#load.
#
# @!attribute [rw] batch_id
#   @return [String]
AdminCarouselLoadMatch = Struct.new(
  :batch_id,
  keyword_init: true
)

# Request payload for AdminCarousel#create.
#
# @!attribute [rw] stage
#   @return [String]
#
# @!attribute [rw] agent_id
#   @return [String]
#
# @!attribute [rw] batch_id
#   @return [String]
#
# @!attribute [rw] caption
#   @return [String]
#
# @!attribute [rw] content_base64
#   @return [String, nil]
#
# @!attribute [rw] day
#   @return [Object]
#
# @!attribute [rw] dry_run
#   @return [Boolean, nil]
#
# @!attribute [rw] engine_run
#   @return [String, nil]
#
# @!attribute [rw] expected_revision
#   @return [String]
#
# @!attribute [rw] formula
#   @return [Hash]
#
# @!attribute [rw] formula_id
#   @return [String]
#
# @!attribute [rw] prompt
#   @return [String]
#
# @!attribute [rw] slides
#   @return [Array]
#
# @!attribute [rw] title
#   @return [String]
AdminCarouselCreateData = Struct.new(
  :stage,
  :agent_id,
  :batch_id,
  :caption,
  :content_base64,
  :day,
  :dry_run,
  :engine_run,
  :expected_revision,
  :formula,
  :formula_id,
  :prompt,
  :slides,
  :title,
  keyword_init: true
)

# Request payload for AdminCarousel#update.
#
# @!attribute [rw] fmt
#   @return [String]
#
# @!attribute [rw] expected_revision
#   @return [String, nil]
#
# @!attribute [rw] formula
#   @return [Hash, nil]
#
# @!attribute [rw] prompt
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
AdminCarouselUpdateData = Struct.new(
  :fmt,
  :expected_revision,
  :formula,
  :prompt,
  :title,
  keyword_init: true
)

# AdminCarouselDemoReview entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] items
#   @return [Array]
#
# @!attribute [rw] reason
#   @return [String, nil]
AdminCarouselDemoReview = Struct.new(
  :id,
  :items,
  :reason,
  keyword_init: true
)

# Request payload for AdminCarouselDemoReview#load.
#
# @!attribute [rw] id
#   @return [String]
AdminCarouselDemoReviewLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for AdminCarouselDemoReview#create.
#
# @!attribute [rw] items
#   @return [Array]
#
# @!attribute [rw] reason
#   @return [String, nil]
AdminCarouselDemoReviewCreateData = Struct.new(
  :items,
  :reason,
  keyword_init: true
)

# Request payload for AdminCarouselDemoReview#update.
#
# @!attribute [rw] demo_review_id
#   @return [String]
#
# @!attribute [rw] assignee
#   @return [Object, nil]
AdminCarouselDemoReviewUpdateData = Struct.new(
  :demo_review_id,
  :assignee,
  keyword_init: true
)

# AdminCustomer entity data model.
#
# @!attribute [rw] account_type
#   @return [Object, nil]
#
# @!attribute [rw] active_vireel_agents
#   @return [Integer]
#
# @!attribute [rw] agents
#   @return [Array]
#
# @!attribute [rw] billing_source
#   @return [String]
#
# @!attribute [rw] contracted_agents
#   @return [Object, nil]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] membership
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pfa_only_agents
#   @return [Integer]
#
# @!attribute [rw] severity
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] subscription_status
#   @return [Object, nil]
#
# @!attribute [rw] user_id
#   @return [String]
AdminCustomer = Struct.new(
  :account_type,
  :active_vireel_agents,
  :agents,
  :billing_source,
  :contracted_agents,
  :email,
  :membership,
  :name,
  :pfa_only_agents,
  :severity,
  :status,
  :subscription_status,
  :user_id,
  keyword_init: true
)

# Request payload for AdminCustomer#list.
#
# @!attribute [rw] account_type
#   @return [Object, nil]
#
# @!attribute [rw] active_vireel_agents
#   @return [Integer, nil]
#
# @!attribute [rw] agents
#   @return [Array, nil]
#
# @!attribute [rw] billing_source
#   @return [String, nil]
#
# @!attribute [rw] contracted_agents
#   @return [Object, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] membership
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pfa_only_agents
#   @return [Integer, nil]
#
# @!attribute [rw] severity
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] subscription_status
#   @return [Object, nil]
#
# @!attribute [rw] user_id
#   @return [String, nil]
AdminCustomerListMatch = Struct.new(
  :account_type,
  :active_vireel_agents,
  :agents,
  :billing_source,
  :contracted_agents,
  :email,
  :membership,
  :name,
  :pfa_only_agents,
  :severity,
  :status,
  :subscription_status,
  :user_id,
  keyword_init: true
)

# AdminCustomerSuccess entity data model.
#
# @!attribute [rw] active_agents
#   @return [Integer]
#
# @!attribute [rw] active_products
#   @return [Integer]
#
# @!attribute [rw] agents_count
#   @return [Integer]
#
# @!attribute [rw] auto_schedule_status
#   @return [String]
#
# @!attribute [rw] days_until_period_end
#   @return [Object, nil]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] feature_impact
#   @return [String]
#
# @!attribute [rw] last_notification_at
#   @return [Object, nil]
#
# @!attribute [rw] membership
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] notification_count
#   @return [Integer]
#
# @!attribute [rw] notification_events
#   @return [Array]
#
# @!attribute [rw] priority
#   @return [String]
#
# @!attribute [rw] severity
#   @return [String]
#
# @!attribute [rw] status_label
#   @return [String]
#
# @!attribute [rw] subscription_current_period_end
#   @return [Object, nil]
#
# @!attribute [rw] subscription_status
#   @return [Object, nil]
#
# @!attribute [rw] upcoming_posts
#   @return [Integer]
#
# @!attribute [rw] user_id
#   @return [String]
AdminCustomerSuccess = Struct.new(
  :active_agents,
  :active_products,
  :agents_count,
  :auto_schedule_status,
  :days_until_period_end,
  :email,
  :feature_impact,
  :last_notification_at,
  :membership,
  :name,
  :notification_count,
  :notification_events,
  :priority,
  :severity,
  :status_label,
  :subscription_current_period_end,
  :subscription_status,
  :upcoming_posts,
  :user_id,
  keyword_init: true
)

# Request payload for AdminCustomerSuccess#list.
#
# @!attribute [rw] active_agents
#   @return [Integer, nil]
#
# @!attribute [rw] active_products
#   @return [Integer, nil]
#
# @!attribute [rw] agents_count
#   @return [Integer, nil]
#
# @!attribute [rw] auto_schedule_status
#   @return [String, nil]
#
# @!attribute [rw] days_until_period_end
#   @return [Object, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] feature_impact
#   @return [String, nil]
#
# @!attribute [rw] last_notification_at
#   @return [Object, nil]
#
# @!attribute [rw] membership
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] notification_count
#   @return [Integer, nil]
#
# @!attribute [rw] notification_events
#   @return [Array, nil]
#
# @!attribute [rw] priority
#   @return [String, nil]
#
# @!attribute [rw] severity
#   @return [String, nil]
#
# @!attribute [rw] status_label
#   @return [String, nil]
#
# @!attribute [rw] subscription_current_period_end
#   @return [Object, nil]
#
# @!attribute [rw] subscription_status
#   @return [Object, nil]
#
# @!attribute [rw] upcoming_posts
#   @return [Integer, nil]
#
# @!attribute [rw] user_id
#   @return [String, nil]
AdminCustomerSuccessListMatch = Struct.new(
  :active_agents,
  :active_products,
  :agents_count,
  :auto_schedule_status,
  :days_until_period_end,
  :email,
  :feature_impact,
  :last_notification_at,
  :membership,
  :name,
  :notification_count,
  :notification_events,
  :priority,
  :severity,
  :status_label,
  :subscription_current_period_end,
  :subscription_status,
  :upcoming_posts,
  :user_id,
  keyword_init: true
)

# AdminGeneratedVideo entity data model.
#
# @!attribute [rw] agent_id
#   @return [String, nil]
#
# @!attribute [rw] agent_name
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] duration
#   @return [Float, nil]
#
# @!attribute [rw] generation_status
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] thumbnail_url
#   @return [Object, nil]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String]
AdminGeneratedVideo = Struct.new(
  :agent_id,
  :agent_name,
  :created_at,
  :duration,
  :generation_status,
  :id,
  :product_id,
  :thumbnail_url,
  :title,
  :type,
  :updated_at,
  :url,
  keyword_init: true
)

# Request payload for AdminGeneratedVideo#list.
#
# @!attribute [rw] user_id
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
AdminGeneratedVideoListMatch = Struct.new(
  :user_id,
  :limit,
  :product_id,
  keyword_init: true
)

# AdminHealthrx entity data model.
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] delivery_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] option_id
#   @return [String]
#
# @!attribute [rw] plan
#   @return [Hash]
#
# @!attribute [rw] preparation_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] product_id
#   @return [String]
#
# @!attribute [rw] reason
#   @return [String]
#
# @!attribute [rw] request_key
#   @return [String]
#
# @!attribute [rw] revision
#   @return [Integer]
#
# @!attribute [rw] schedule_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] version
#   @return [String]
#
# @!attribute [rw] viewed
#   @return [Boolean]
AdminHealthrx = Struct.new(
  :action,
  :delivery_enabled,
  :id,
  :option_id,
  :plan,
  :preparation_enabled,
  :product_id,
  :reason,
  :request_key,
  :revision,
  :schedule_enabled,
  :version,
  :viewed,
  keyword_init: true
)

# Request payload for AdminHealthrx#load.
#
# @!attribute [rw] item_id
#   @return [String]
#
# @!attribute [rw] kind
#   @return [String]
AdminHealthrxLoadMatch = Struct.new(
  :item_id,
  :kind,
  keyword_init: true
)

# Request payload for AdminHealthrx#create.
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] option_id
#   @return [String]
#
# @!attribute [rw] plan
#   @return [Hash]
#
# @!attribute [rw] product_id
#   @return [String]
#
# @!attribute [rw] reason
#   @return [String]
#
# @!attribute [rw] request_key
#   @return [String]
#
# @!attribute [rw] version
#   @return [String]
#
# @!attribute [rw] viewed
#   @return [Boolean]
AdminHealthrxCreateData = Struct.new(
  :action,
  :option_id,
  :plan,
  :product_id,
  :reason,
  :request_key,
  :version,
  :viewed,
  keyword_init: true
)

# Request payload for AdminHealthrx#update.
#
# @!attribute [rw] delivery_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] plan
#   @return [Hash, nil]
#
# @!attribute [rw] preparation_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] revision
#   @return [Integer, nil]
#
# @!attribute [rw] schedule_enabled
#   @return [Boolean, nil]
AdminHealthrxUpdateData = Struct.new(
  :delivery_enabled,
  :plan,
  :preparation_enabled,
  :product_id,
  :revision,
  :schedule_enabled,
  keyword_init: true
)

# AdminInsight entity data model.
#
# @!attribute [rw] customer_success_cases
#   @return [Array]
#
# @!attribute [rw] customers
#   @return [Array]
#
# @!attribute [rw] generated_at
#   @return [String]
#
# @!attribute [rw] pfa_database
#   @return [Hash]
#
# @!attribute [rw] recent_signups
#   @return [Array]
#
# @!attribute [rw] summary
#   @return [Hash]
#
# @!attribute [rw] vireel_database
#   @return [Hash]
AdminInsight = Struct.new(
  :customer_success_cases,
  :customers,
  :generated_at,
  :pfa_database,
  :recent_signups,
  :summary,
  :vireel_database,
  keyword_init: true
)

# Request payload for AdminInsight#load.
#
# @!attribute [rw] customer_email
#   @return [Object, nil]
#
# @!attribute [rw] include_agent
#   @return [Boolean, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
AdminInsightLoadMatch = Struct.new(
  :customer_email,
  :include_agent,
  :limit,
  :page,
  keyword_init: true
)

# Request payload for AdminInsight#list.
#
# @!attribute [rw] customer_success_cases
#   @return [Array, nil]
#
# @!attribute [rw] customers
#   @return [Array, nil]
#
# @!attribute [rw] generated_at
#   @return [String, nil]
#
# @!attribute [rw] pfa_database
#   @return [Hash, nil]
#
# @!attribute [rw] recent_signups
#   @return [Array, nil]
#
# @!attribute [rw] summary
#   @return [Hash, nil]
#
# @!attribute [rw] vireel_database
#   @return [Hash, nil]
AdminInsightListMatch = Struct.new(
  :customer_success_cases,
  :customers,
  :generated_at,
  :pfa_database,
  :recent_signups,
  :summary,
  :vireel_database,
  keyword_init: true
)

# AdminLandingTask entity data model.
#
# @!attribute [rw] task_id
#   @return [String]
AdminLandingTask = Struct.new(
  :task_id,
  keyword_init: true
)

# Request payload for AdminLandingTask#create.
#
# @!attribute [rw] user_id
#   @return [String]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] task_id
#   @return [String]
AdminLandingTaskCreateData = Struct.new(
  :user_id,
  :product_id,
  :task_id,
  keyword_init: true
)

# AdminMetricsSummary entity data model.
#
# @!attribute [rw] paid_users_by_level
#   @return [Array]
#
# @!attribute [rw] total_cancellations
#   @return [Integer]
#
# @!attribute [rw] total_previews_generated
#   @return [Integer]
#
# @!attribute [rw] total_signups
#   @return [Integer]
#
# @!attribute [rw] total_videos_generated
#   @return [Integer]
#
# @!attribute [rw] url_attempts
#   @return [Integer]
#
# @!attribute [rw] user_credits
#   @return [Array]
#
# @!attribute [rw] user_gifted_credits
#   @return [Array]
AdminMetricsSummary = Struct.new(
  :paid_users_by_level,
  :total_cancellations,
  :total_previews_generated,
  :total_signups,
  :total_videos_generated,
  :url_attempts,
  :user_credits,
  :user_gifted_credits,
  keyword_init: true
)

# Request payload for AdminMetricsSummary#list.
#
# @!attribute [rw] date_filter
#   @return [String, nil]
AdminMetricsSummaryListMatch = Struct.new(
  :date_filter,
  keyword_init: true
)

# AdminPost entity data model.
#
# @!attribute [rw] admin_job_ids
#   @return [Object]
#
# @!attribute [rw] agent_id
#   @return [String]
#
# @!attribute [rw] agent_name
#   @return [Object]
#
# @!attribute [rw] agent_platform_urls
#   @return [Object]
#
# @!attribute [rw] agent_url
#   @return [Object]
#
# @!attribute [rw] comments
#   @return [Integer]
#
# @!attribute [rw] error_message
#   @return [Object]
#
# @!attribute [rw] failed_at
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] instagram_posted_by
#   @return [Object]
#
# @!attribute [rw] instagram_posted_url
#   @return [Object]
#
# @!attribute [rw] instagram_scraped_social_post_id
#   @return [String]
#
# @!attribute [rw] is_instagram_posted
#   @return [Boolean]
#
# @!attribute [rw] is_tiktok_posted
#   @return [Boolean]
#
# @!attribute [rw] is_youtube_posted
#   @return [Boolean]
#
# @!attribute [rw] last_refreshed_at
#   @return [Object]
#
# @!attribute [rw] likes
#   @return [Integer]
#
# @!attribute [rw] platform_post_methods
#   @return [Object]
#
# @!attribute [rw] platform_urls
#   @return [Object]
#
# @!attribute [rw] post_method
#   @return [Object]
#
# @!attribute [rw] post_platforms
#   @return [Object]
#
# @!attribute [rw] post_url
#   @return [Object]
#
# @!attribute [rw] posted_at
#   @return [Object]
#
# @!attribute [rw] product_id
#   @return [String]
#
# @!attribute [rw] results_status
#   @return [Object]
#
# @!attribute [rw] scheduled_datetime
#   @return [String]
#
# @!attribute [rw] source_type
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] tiktok_posted_by
#   @return [Object]
#
# @!attribute [rw] tiktok_posted_url
#   @return [Object]
#
# @!attribute [rw] tiktok_scraped_social_post_id
#   @return [String]
#
# @!attribute [rw] upload_post_error
#   @return [Object]
#
# @!attribute [rw] upload_post_status
#   @return [Object]
#
# @!attribute [rw] upload_post_uploads
#   @return [Object]
#
# @!attribute [rw] user_email
#   @return [String]
#
# @!attribute [rw] user_id
#   @return [String]
#
# @!attribute [rw] user_name
#   @return [Object]
#
# @!attribute [rw] video_id
#   @return [String]
#
# @!attribute [rw] video_url
#   @return [Object]
#
# @!attribute [rw] views
#   @return [Integer]
#
# @!attribute [rw] youtube_posted_by
#   @return [Object]
#
# @!attribute [rw] youtube_posted_url
#   @return [Object]
#
# @!attribute [rw] youtube_scraped_social_post_id
#   @return [String]
AdminPost = Struct.new(
  :admin_job_ids,
  :agent_id,
  :agent_name,
  :agent_platform_urls,
  :agent_url,
  :comments,
  :error_message,
  :failed_at,
  :id,
  :instagram_posted_by,
  :instagram_posted_url,
  :instagram_scraped_social_post_id,
  :is_instagram_posted,
  :is_tiktok_posted,
  :is_youtube_posted,
  :last_refreshed_at,
  :likes,
  :platform_post_methods,
  :platform_urls,
  :post_method,
  :post_platforms,
  :post_url,
  :posted_at,
  :product_id,
  :results_status,
  :scheduled_datetime,
  :source_type,
  :status,
  :tiktok_posted_by,
  :tiktok_posted_url,
  :tiktok_scraped_social_post_id,
  :upload_post_error,
  :upload_post_status,
  :upload_post_uploads,
  :user_email,
  :user_id,
  :user_name,
  :video_id,
  :video_url,
  :views,
  :youtube_posted_by,
  :youtube_posted_url,
  :youtube_scraped_social_post_id,
  keyword_init: true
)

# Request payload for AdminPost#list.
#
# @!attribute [rw] date
#   @return [Object, nil]
#
# @!attribute [rw] include_entry
#   @return [Boolean, nil]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] posting_method
#   @return [String, nil]
AdminPostListMatch = Struct.new(
  :date,
  :include_entry,
  :platform,
  :posting_method,
  keyword_init: true
)

# AdminRecentSignup entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] current_step
#   @return [String]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] email_source
#   @return [Object, nil]
#
# @!attribute [rw] error_message
#   @return [Object, nil]
#
# @!attribute [rw] flow_variant
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] inactive_minutes
#   @return [Integer]
#
# @!attribute [rw] last_notification_at
#   @return [Object, nil]
#
# @!attribute [rw] last_seen_at
#   @return [String]
#
# @!attribute [rw] likely_cause
#   @return [String]
#
# @!attribute [rw] notification_count
#   @return [Integer]
#
# @!attribute [rw] notification_events
#   @return [Array]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] product_name
#   @return [Object, nil]
#
# @!attribute [rw] product_url
#   @return [String]
#
# @!attribute [rw] severity
#   @return [String]
#
# @!attribute [rw] social_scan_status
#   @return [Object, nil]
#
# @!attribute [rw] stage_label
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [Object, nil]
#
# @!attribute [rw] website_scrape_status
#   @return [Object, nil]
AdminRecentSignup = Struct.new(
  :created_at,
  :current_step,
  :email,
  :email_source,
  :error_message,
  :flow_variant,
  :id,
  :inactive_minutes,
  :last_notification_at,
  :last_seen_at,
  :likely_cause,
  :notification_count,
  :notification_events,
  :product_id,
  :product_name,
  :product_url,
  :severity,
  :social_scan_status,
  :stage_label,
  :status,
  :updated_at,
  :website_scrape_status,
  keyword_init: true
)

# Request payload for AdminRecentSignup#list.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] current_step
#   @return [String, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] email_source
#   @return [Object, nil]
#
# @!attribute [rw] error_message
#   @return [Object, nil]
#
# @!attribute [rw] flow_variant
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] inactive_minutes
#   @return [Integer, nil]
#
# @!attribute [rw] last_notification_at
#   @return [Object, nil]
#
# @!attribute [rw] last_seen_at
#   @return [String, nil]
#
# @!attribute [rw] likely_cause
#   @return [String, nil]
#
# @!attribute [rw] notification_count
#   @return [Integer, nil]
#
# @!attribute [rw] notification_events
#   @return [Array, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] product_name
#   @return [Object, nil]
#
# @!attribute [rw] product_url
#   @return [String, nil]
#
# @!attribute [rw] severity
#   @return [String, nil]
#
# @!attribute [rw] social_scan_status
#   @return [Object, nil]
#
# @!attribute [rw] stage_label
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [Object, nil]
#
# @!attribute [rw] website_scrape_status
#   @return [Object, nil]
AdminRecentSignupListMatch = Struct.new(
  :created_at,
  :current_step,
  :email,
  :email_source,
  :error_message,
  :flow_variant,
  :id,
  :inactive_minutes,
  :last_notification_at,
  :last_seen_at,
  :likely_cause,
  :notification_count,
  :notification_events,
  :product_id,
  :product_name,
  :product_url,
  :severity,
  :social_scan_status,
  :stage_label,
  :status,
  :updated_at,
  :website_scrape_status,
  keyword_init: true
)

# AdminSlideshowDiag entity data model.
#
# @!attribute [rw] agent_id
#   @return [String, nil]
#
# @!attribute [rw] batch_id
#   @return [String, nil]
#
# @!attribute [rw] caption
#   @return [String, nil]
#
# @!attribute [rw] content_base64
#   @return [String, nil]
#
# @!attribute [rw] day
#   @return [Object, nil]
#
# @!attribute [rw] formula_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
AdminSlideshowDiag = Struct.new(
  :agent_id,
  :batch_id,
  :caption,
  :content_base64,
  :day,
  :formula_id,
  :id,
  :title,
  keyword_init: true
)

# Request payload for AdminSlideshowDiag#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] agent_id
#   @return [String, nil]
#
# @!attribute [rw] batch_id
#   @return [String, nil]
#
# @!attribute [rw] caption
#   @return [String, nil]
#
# @!attribute [rw] content_base64
#   @return [String, nil]
#
# @!attribute [rw] day
#   @return [Object, nil]
#
# @!attribute [rw] formula_id
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
AdminSlideshowDiagCreateData = Struct.new(
  :id,
  :agent_id,
  :batch_id,
  :caption,
  :content_base64,
  :day,
  :formula_id,
  :title,
  keyword_init: true
)

# AdminSlideshowImport entity data model.
#
# @!attribute [rw] agent_id
#   @return [String]
#
# @!attribute [rw] batch_id
#   @return [String]
#
# @!attribute [rw] caption
#   @return [String]
#
# @!attribute [rw] day
#   @return [String]
#
# @!attribute [rw] dry_run
#   @return [Boolean, nil]
#
# @!attribute [rw] engine_run
#   @return [String, nil]
#
# @!attribute [rw] formula_id
#   @return [String]
#
# @!attribute [rw] slides
#   @return [Array]
#
# @!attribute [rw] title
#   @return [String]
AdminSlideshowImport = Struct.new(
  :agent_id,
  :batch_id,
  :caption,
  :day,
  :dry_run,
  :engine_run,
  :formula_id,
  :slides,
  :title,
  keyword_init: true
)

# Request payload for AdminSlideshowImport#load.
#
# @!attribute [rw] batch_id
#   @return [String]
AdminSlideshowImportLoadMatch = Struct.new(
  :batch_id,
  keyword_init: true
)

# Request payload for AdminSlideshowImport#create.
#
# @!attribute [rw] agent_id
#   @return [String]
#
# @!attribute [rw] batch_id
#   @return [String]
#
# @!attribute [rw] caption
#   @return [String]
#
# @!attribute [rw] day
#   @return [String]
#
# @!attribute [rw] dry_run
#   @return [Boolean, nil]
#
# @!attribute [rw] engine_run
#   @return [String, nil]
#
# @!attribute [rw] formula_id
#   @return [String]
#
# @!attribute [rw] slides
#   @return [Array]
#
# @!attribute [rw] title
#   @return [String]
AdminSlideshowImportCreateData = Struct.new(
  :agent_id,
  :batch_id,
  :caption,
  :day,
  :dry_run,
  :engine_run,
  :formula_id,
  :slides,
  :title,
  keyword_init: true
)

# AdminUserView entity data model.
#
# @!attribute [rw] account_type
#   @return [Object, nil]
#
# @!attribute [rw] admin_notes
#   @return [Object, nil]
#
# @!attribute [rw] agents_count
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] credits
#   @return [Integer]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] industry
#   @return [Object]
#
# @!attribute [rw] is_admin
#   @return [Boolean, nil]
#
# @!attribute [rw] is_bookmarked
#   @return [Boolean, nil]
#
# @!attribute [rw] is_internal_user
#   @return [Boolean, nil]
#
# @!attribute [rw] membership
#   @return [Object]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] new_email
#   @return [String]
#
# @!attribute [rw] partner_external_user_id
#   @return [String, nil]
#
# @!attribute [rw] partner_policy_code
#   @return [Object, nil]
#
# @!attribute [rw] partner_source
#   @return [Object, nil]
#
# @!attribute [rw] product_name
#   @return [Object]
#
# @!attribute [rw] product_url
#   @return [Object]
#
# @!attribute [rw] skip
#   @return [Boolean]
#
# @!attribute [rw] subscription_details
#   @return [Object, nil]
#
# @!attribute [rw] subscription_status
#   @return [Object]
AdminUserView = Struct.new(
  :account_type,
  :admin_notes,
  :agents_count,
  :created_at,
  :credits,
  :email,
  :id,
  :industry,
  :is_admin,
  :is_bookmarked,
  :is_internal_user,
  :membership,
  :name,
  :new_email,
  :partner_external_user_id,
  :partner_policy_code,
  :partner_source,
  :product_name,
  :product_url,
  :skip,
  :subscription_details,
  :subscription_status,
  keyword_init: true
)

# Request payload for AdminUserView#list.
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
AdminUserViewListMatch = Struct.new(
  :limit,
  :page,
  keyword_init: true
)

# Request payload for AdminUserView#create.
#
# @!attribute [rw] user_id
#   @return [String]
#
# @!attribute [rw] account_type
#   @return [Object, nil]
#
# @!attribute [rw] admin_notes
#   @return [Object, nil]
#
# @!attribute [rw] agents_count
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] credits
#   @return [Integer]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] industry
#   @return [Object]
#
# @!attribute [rw] is_admin
#   @return [Boolean, nil]
#
# @!attribute [rw] is_bookmarked
#   @return [Boolean, nil]
#
# @!attribute [rw] is_internal_user
#   @return [Boolean, nil]
#
# @!attribute [rw] membership
#   @return [Object]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] new_email
#   @return [String]
#
# @!attribute [rw] partner_external_user_id
#   @return [String, nil]
#
# @!attribute [rw] partner_policy_code
#   @return [Object, nil]
#
# @!attribute [rw] partner_source
#   @return [Object, nil]
#
# @!attribute [rw] product_name
#   @return [Object]
#
# @!attribute [rw] product_url
#   @return [Object]
#
# @!attribute [rw] skip
#   @return [Boolean]
#
# @!attribute [rw] subscription_details
#   @return [Object, nil]
#
# @!attribute [rw] subscription_status
#   @return [Object]
AdminUserViewCreateData = Struct.new(
  :user_id,
  :account_type,
  :admin_notes,
  :agents_count,
  :created_at,
  :credits,
  :email,
  :id,
  :industry,
  :is_admin,
  :is_bookmarked,
  :is_internal_user,
  :membership,
  :name,
  :new_email,
  :partner_external_user_id,
  :partner_policy_code,
  :partner_source,
  :product_name,
  :product_url,
  :skip,
  :subscription_details,
  :subscription_status,
  keyword_init: true
)

# Request payload for AdminUserView#update.
#
# @!attribute [rw] user_id
#   @return [String]
#
# @!attribute [rw] admin_notes
#   @return [Object, nil]
#
# @!attribute [rw] agents_count
#   @return [Integer, nil]
#
# @!attribute [rw] credits
#   @return [Integer, nil]
#
# @!attribute [rw] is_admin
#   @return [Boolean, nil]
#
# @!attribute [rw] is_bookmarked
#   @return [Boolean, nil]
#
# @!attribute [rw] is_internal_user
#   @return [Boolean, nil]
#
# @!attribute [rw] membership
#   @return [Object, nil]
AdminUserViewUpdateData = Struct.new(
  :user_id,
  :admin_notes,
  :agents_count,
  :credits,
  :is_admin,
  :is_bookmarked,
  :is_internal_user,
  :membership,
  keyword_init: true
)

# Request payload for AdminUserView#remove.
#
# @!attribute [rw] user_id
#   @return [String]
AdminUserViewRemoveMatch = Struct.new(
  :user_id,
  keyword_init: true
)

# AdminUsersTableItem entity data model.
#
# @!attribute [rw] activated
#   @return [Boolean]
#
# @!attribute [rw] agents_count
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] credits
#   @return [Integer]
#
# @!attribute [rw] demo_booked
#   @return [Boolean]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] membership
#   @return [Object]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] onboarding_flow
#   @return [String]
#
# @!attribute [rw] product_name
#   @return [Object]
#
# @!attribute [rw] product_url
#   @return [Object]
#
# @!attribute [rw] survey_data
#   @return [Object]
AdminUsersTableItem = Struct.new(
  :activated,
  :agents_count,
  :created_at,
  :credits,
  :demo_booked,
  :email,
  :id,
  :membership,
  :name,
  :onboarding_flow,
  :product_name,
  :product_url,
  :survey_data,
  keyword_init: true
)

# Request payload for AdminUsersTableItem#list.
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
AdminUsersTableItemListMatch = Struct.new(
  :page,
  :page_size,
  keyword_init: true
)

# AdminVideoRemixer entity data model.
#
# @!attribute [rw] activity
#   @return [String]
#
# @!attribute [rw] allowed_platforms
#   @return [Array, nil]
#
# @!attribute [rw] anchor_clip_id
#   @return [String, nil]
#
# @!attribute [rw] atomicity_class
#   @return [Object, nil]
#
# @!attribute [rw] auto_render
#   @return [Boolean, nil]
#
# @!attribute [rw] campaign_allowed
#   @return [Boolean, nil]
#
# @!attribute [rw] channel
#   @return [String, nil]
#
# @!attribute [rw] channel_default
#   @return [String, nil]
#
# @!attribute [rw] clip_id
#   @return [String]
#
# @!attribute [rw] clip_ids
#   @return [Array, nil]
#
# @!attribute [rw] collected_at
#   @return [String]
#
# @!attribute [rw] comments
#   @return [Object, nil]
#
# @!attribute [rw] completion_rate
#   @return [Object, nil]
#
# @!attribute [rw] confirmed_duplicate_of
#   @return [Object, nil]
#
# @!attribute [rw] consent_doc_uri
#   @return [String, nil]
#
# @!attribute [rw] contact
#   @return [String, nil]
#
# @!attribute [rw] conversions
#   @return [Object, nil]
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] creator
#   @return [String, nil]
#
# @!attribute [rw] creator_id
#   @return [String, nil]
#
# @!attribute [rw] crop_window
#   @return [Object, nil]
#
# @!attribute [rw] cta_product_id
#   @return [String, nil]
#
# @!attribute [rw] days
#   @return [Integer, nil]
#
# @!attribute [rw] derivative_edits_allowed
#   @return [Boolean, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] end_ms
#   @return [Object, nil]
#
# @!attribute [rw] enqueue
#   @return [Boolean, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] evidence
#   @return [String]
#
# @!attribute [rw] expected_revision
#   @return [Object, nil]
#
# @!attribute [rw] expected_revisions
#   @return [Hash]
#
# @!attribute [rw] external_ai_allowed
#   @return [Boolean, nil]
#
# @!attribute [rw] file
#   @return [String]
#
# @!attribute [rw] followers
#   @return [Object, nil]
#
# @!attribute [rw] formula_id
#   @return [String]
#
# @!attribute [rw] formula_ids
#   @return [Array]
#
# @!attribute [rw] handles
#   @return [Hash, nil]
#
# @!attribute [rw] hook_subtype
#   @return [Object, nil]
#
# @!attribute [rw] hour_utc
#   @return [Integer, nil]
#
# @!attribute [rw] human_role
#   @return [String]
#
# @!attribute [rw] idempotency_key
#   @return [String]
#
# @!attribute [rw] items
#   @return [Array]
#
# @!attribute [rw] kim_clip_ids
#   @return [Array]
#
# @!attribute [rw] kind
#   @return [String]
#
# @!attribute [rw] levels
#   @return [Hash]
#
# @!attribute [rw] likes
#   @return [Object, nil]
#
# @!attribute [rw] media_enabled
#   @return [Boolean]
#
# @!attribute [rw] medical_claim_present
#   @return [Boolean, nil]
#
# @!attribute [rw] minute_utc
#   @return [Integer, nil]
#
# @!attribute [rw] music_bed_allowed
#   @return [Boolean, nil]
#
# @!attribute [rw] music_policy
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] niche
#   @return [String, nil]
#
# @!attribute [rw] notes
#   @return [String, nil]
#
# @!attribute [rw] origin
#   @return [String, nil]
#
# @!attribute [rw] owner_waiver
#   @return [Boolean, nil]
#
# @!attribute [rw] paid_ads_allowed
#   @return [Boolean, nil]
#
# @!attribute [rw] patient_identifiable
#   @return [Boolean, nil]
#
# @!attribute [rw] person_type
#   @return [String, nil]
#
# @!attribute [rw] pipeline
#   @return [Boolean, nil]
#
# @!attribute [rw] planning_only
#   @return [Boolean, nil]
#
# @!attribute [rw] platform
#   @return [String]
#
# @!attribute [rw] platform_post_id
#   @return [String]
#
# @!attribute [rw] policy
#   @return [Hash]
#
# @!attribute [rw] polish
#   @return [String, nil]
#
# @!attribute [rw] post_url
#   @return [String]
#
# @!attribute [rw] posted_at
#   @return [String]
#
# @!attribute [rw] primary_role
#   @return [Object, nil]
#
# @!attribute [rw] purpose
#   @return [String]
#
# @!attribute [rw] rate
#   @return [Float, nil]
#
# @!attribute [rw] rationale
#   @return [String, nil]
#
# @!attribute [rw] reason
#   @return [String]
#
# @!attribute [rw] reference_source_id
#   @return [String, nil]
#
# @!attribute [rw] requires_medical_review
#   @return [Boolean, nil]
#
# @!attribute [rw] review_status
#   @return [Object, nil]
#
# @!attribute [rw] revision
#   @return [Integer]
#
# @!attribute [rw] rights_expires_at
#   @return [Object, nil]
#
# @!attribute [rw] rights_status
#   @return [String, nil]
#
# @!attribute [rw] run_id
#   @return [String]
#
# @!attribute [rw] sample_links
#   @return [Array, nil]
#
# @!attribute [rw] secondary_roles
#   @return [Object, nil]
#
# @!attribute [rw] seconds
#   @return [Integer]
#
# @!attribute [rw] seed
#   @return [Integer, nil]
#
# @!attribute [rw] seed_base
#   @return [Integer, nil]
#
# @!attribute [rw] sensitive_personal_data_present
#   @return [Boolean, nil]
#
# @!attribute [rw] shares
#   @return [Object, nil]
#
# @!attribute [rw] shoot
#   @return [String, nil]
#
# @!attribute [rw] slots
#   @return [Array]
#
# @!attribute [rw] soundbite_title
#   @return [Object, nil]
#
# @!attribute [rw] source
#   @return [String]
#
# @!attribute [rw] source_id
#   @return [String]
#
# @!attribute [rw] source_ids
#   @return [Array]
#
# @!attribute [rw] spend_usd
#   @return [Object, nil]
#
# @!attribute [rw] spiciness
#   @return [Object, nil]
#
# @!attribute [rw] spiciness_notes
#   @return [String, nil]
#
# @!attribute [rw] start_ms
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] terry_clip_ids
#   @return [Array]
#
# @!attribute [rw] testimonial_strength
#   @return [Object, nil]
#
# @!attribute [rw] testimonial_type
#   @return [Object, nil]
#
# @!attribute [rw] tier
#   @return [String, nil]
#
# @!attribute [rw] timeline
#   @return [Hash]
#
# @!attribute [rw] topic
#   @return [String, nil]
#
# @!attribute [rw] topic_tags
#   @return [Object, nil]
#
# @!attribute [rw] total_target_ms
#   @return [Integer]
#
# @!attribute [rw] use_learned_weights
#   @return [Boolean, nil]
#
# @!attribute [rw] views
#   @return [Object, nil]
#
# @!attribute [rw] window
#   @return [String]
AdminVideoRemixer = Struct.new(
  :activity,
  :allowed_platforms,
  :anchor_clip_id,
  :atomicity_class,
  :auto_render,
  :campaign_allowed,
  :channel,
  :channel_default,
  :clip_id,
  :clip_ids,
  :collected_at,
  :comments,
  :completion_rate,
  :confirmed_duplicate_of,
  :consent_doc_uri,
  :contact,
  :conversions,
  :count,
  :creator,
  :creator_id,
  :crop_window,
  :cta_product_id,
  :days,
  :derivative_edits_allowed,
  :enabled,
  :end_ms,
  :enqueue,
  :errors,
  :evidence,
  :expected_revision,
  :expected_revisions,
  :external_ai_allowed,
  :file,
  :followers,
  :formula_id,
  :formula_ids,
  :handles,
  :hook_subtype,
  :hour_utc,
  :human_role,
  :idempotency_key,
  :items,
  :kim_clip_ids,
  :kind,
  :levels,
  :likes,
  :media_enabled,
  :medical_claim_present,
  :minute_utc,
  :music_bed_allowed,
  :music_policy,
  :name,
  :niche,
  :notes,
  :origin,
  :owner_waiver,
  :paid_ads_allowed,
  :patient_identifiable,
  :person_type,
  :pipeline,
  :planning_only,
  :platform,
  :platform_post_id,
  :policy,
  :polish,
  :post_url,
  :posted_at,
  :primary_role,
  :purpose,
  :rate,
  :rationale,
  :reason,
  :reference_source_id,
  :requires_medical_review,
  :review_status,
  :revision,
  :rights_expires_at,
  :rights_status,
  :run_id,
  :sample_links,
  :secondary_roles,
  :seconds,
  :seed,
  :seed_base,
  :sensitive_personal_data_present,
  :shares,
  :shoot,
  :slots,
  :soundbite_title,
  :source,
  :source_id,
  :source_ids,
  :spend_usd,
  :spiciness,
  :spiciness_notes,
  :start_ms,
  :status,
  :terry_clip_ids,
  :testimonial_strength,
  :testimonial_type,
  :tier,
  :timeline,
  :topic,
  :topic_tags,
  :total_target_ms,
  :use_learned_weights,
  :views,
  :window,
  keyword_init: true
)

# Request payload for AdminVideoRemixer#load.
#
# @!attribute [rw] clip_id
#   @return [String]
AdminVideoRemixerLoadMatch = Struct.new(
  :clip_id,
  keyword_init: true
)

# Request payload for AdminVideoRemixer#create.
#
# @!attribute [rw] activity
#   @return [String]
#
# @!attribute [rw] allowed_platforms
#   @return [Array, nil]
#
# @!attribute [rw] anchor_clip_id
#   @return [String, nil]
#
# @!attribute [rw] atomicity_class
#   @return [Object, nil]
#
# @!attribute [rw] auto_render
#   @return [Boolean, nil]
#
# @!attribute [rw] campaign_allowed
#   @return [Boolean, nil]
#
# @!attribute [rw] channel
#   @return [String, nil]
#
# @!attribute [rw] channel_default
#   @return [String, nil]
#
# @!attribute [rw] clip_id
#   @return [String]
#
# @!attribute [rw] clip_ids
#   @return [Array, nil]
#
# @!attribute [rw] collected_at
#   @return [String]
#
# @!attribute [rw] comments
#   @return [Object, nil]
#
# @!attribute [rw] completion_rate
#   @return [Object, nil]
#
# @!attribute [rw] confirmed_duplicate_of
#   @return [Object, nil]
#
# @!attribute [rw] consent_doc_uri
#   @return [String, nil]
#
# @!attribute [rw] contact
#   @return [String, nil]
#
# @!attribute [rw] conversions
#   @return [Object, nil]
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] creator
#   @return [String, nil]
#
# @!attribute [rw] creator_id
#   @return [String, nil]
#
# @!attribute [rw] crop_window
#   @return [Object, nil]
#
# @!attribute [rw] cta_product_id
#   @return [String, nil]
#
# @!attribute [rw] days
#   @return [Integer, nil]
#
# @!attribute [rw] derivative_edits_allowed
#   @return [Boolean, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] end_ms
#   @return [Object, nil]
#
# @!attribute [rw] enqueue
#   @return [Boolean, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] evidence
#   @return [String]
#
# @!attribute [rw] expected_revision
#   @return [Object, nil]
#
# @!attribute [rw] expected_revisions
#   @return [Hash]
#
# @!attribute [rw] external_ai_allowed
#   @return [Boolean, nil]
#
# @!attribute [rw] file
#   @return [String]
#
# @!attribute [rw] followers
#   @return [Object, nil]
#
# @!attribute [rw] formula_id
#   @return [String]
#
# @!attribute [rw] formula_ids
#   @return [Array]
#
# @!attribute [rw] handles
#   @return [Hash, nil]
#
# @!attribute [rw] hook_subtype
#   @return [Object, nil]
#
# @!attribute [rw] hour_utc
#   @return [Integer, nil]
#
# @!attribute [rw] human_role
#   @return [String]
#
# @!attribute [rw] idempotency_key
#   @return [String]
#
# @!attribute [rw] items
#   @return [Array]
#
# @!attribute [rw] kim_clip_ids
#   @return [Array]
#
# @!attribute [rw] kind
#   @return [String]
#
# @!attribute [rw] levels
#   @return [Hash]
#
# @!attribute [rw] likes
#   @return [Object, nil]
#
# @!attribute [rw] media_enabled
#   @return [Boolean]
#
# @!attribute [rw] medical_claim_present
#   @return [Boolean, nil]
#
# @!attribute [rw] minute_utc
#   @return [Integer, nil]
#
# @!attribute [rw] music_bed_allowed
#   @return [Boolean, nil]
#
# @!attribute [rw] music_policy
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] niche
#   @return [String, nil]
#
# @!attribute [rw] notes
#   @return [String, nil]
#
# @!attribute [rw] origin
#   @return [String, nil]
#
# @!attribute [rw] owner_waiver
#   @return [Boolean, nil]
#
# @!attribute [rw] paid_ads_allowed
#   @return [Boolean, nil]
#
# @!attribute [rw] patient_identifiable
#   @return [Boolean, nil]
#
# @!attribute [rw] person_type
#   @return [String, nil]
#
# @!attribute [rw] pipeline
#   @return [Boolean, nil]
#
# @!attribute [rw] planning_only
#   @return [Boolean, nil]
#
# @!attribute [rw] platform
#   @return [String]
#
# @!attribute [rw] platform_post_id
#   @return [String]
#
# @!attribute [rw] policy
#   @return [Hash]
#
# @!attribute [rw] polish
#   @return [String, nil]
#
# @!attribute [rw] post_url
#   @return [String]
#
# @!attribute [rw] posted_at
#   @return [String]
#
# @!attribute [rw] primary_role
#   @return [Object, nil]
#
# @!attribute [rw] purpose
#   @return [String]
#
# @!attribute [rw] rate
#   @return [Float, nil]
#
# @!attribute [rw] rationale
#   @return [String, nil]
#
# @!attribute [rw] reason
#   @return [String]
#
# @!attribute [rw] reference_source_id
#   @return [String, nil]
#
# @!attribute [rw] requires_medical_review
#   @return [Boolean, nil]
#
# @!attribute [rw] review_status
#   @return [Object, nil]
#
# @!attribute [rw] revision
#   @return [Integer]
#
# @!attribute [rw] rights_expires_at
#   @return [Object, nil]
#
# @!attribute [rw] rights_status
#   @return [String, nil]
#
# @!attribute [rw] run_id
#   @return [String]
#
# @!attribute [rw] sample_links
#   @return [Array, nil]
#
# @!attribute [rw] secondary_roles
#   @return [Object, nil]
#
# @!attribute [rw] seconds
#   @return [Integer]
#
# @!attribute [rw] seed
#   @return [Integer, nil]
#
# @!attribute [rw] seed_base
#   @return [Integer, nil]
#
# @!attribute [rw] sensitive_personal_data_present
#   @return [Boolean, nil]
#
# @!attribute [rw] shares
#   @return [Object, nil]
#
# @!attribute [rw] shoot
#   @return [String, nil]
#
# @!attribute [rw] slots
#   @return [Array]
#
# @!attribute [rw] soundbite_title
#   @return [Object, nil]
#
# @!attribute [rw] source
#   @return [String]
#
# @!attribute [rw] source_id
#   @return [String]
#
# @!attribute [rw] source_ids
#   @return [Array]
#
# @!attribute [rw] spend_usd
#   @return [Object, nil]
#
# @!attribute [rw] spiciness
#   @return [Object, nil]
#
# @!attribute [rw] spiciness_notes
#   @return [String, nil]
#
# @!attribute [rw] start_ms
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] terry_clip_ids
#   @return [Array]
#
# @!attribute [rw] testimonial_strength
#   @return [Object, nil]
#
# @!attribute [rw] testimonial_type
#   @return [Object, nil]
#
# @!attribute [rw] tier
#   @return [String, nil]
#
# @!attribute [rw] timeline
#   @return [Hash]
#
# @!attribute [rw] topic
#   @return [String, nil]
#
# @!attribute [rw] topic_tags
#   @return [Object, nil]
#
# @!attribute [rw] total_target_ms
#   @return [Integer]
#
# @!attribute [rw] use_learned_weights
#   @return [Boolean, nil]
#
# @!attribute [rw] views
#   @return [Object, nil]
#
# @!attribute [rw] window
#   @return [String]
AdminVideoRemixerCreateData = Struct.new(
  :activity,
  :allowed_platforms,
  :anchor_clip_id,
  :atomicity_class,
  :auto_render,
  :campaign_allowed,
  :channel,
  :channel_default,
  :clip_id,
  :clip_ids,
  :collected_at,
  :comments,
  :completion_rate,
  :confirmed_duplicate_of,
  :consent_doc_uri,
  :contact,
  :conversions,
  :count,
  :creator,
  :creator_id,
  :crop_window,
  :cta_product_id,
  :days,
  :derivative_edits_allowed,
  :enabled,
  :end_ms,
  :enqueue,
  :errors,
  :evidence,
  :expected_revision,
  :expected_revisions,
  :external_ai_allowed,
  :file,
  :followers,
  :formula_id,
  :formula_ids,
  :handles,
  :hook_subtype,
  :hour_utc,
  :human_role,
  :idempotency_key,
  :items,
  :kim_clip_ids,
  :kind,
  :levels,
  :likes,
  :media_enabled,
  :medical_claim_present,
  :minute_utc,
  :music_bed_allowed,
  :music_policy,
  :name,
  :niche,
  :notes,
  :origin,
  :owner_waiver,
  :paid_ads_allowed,
  :patient_identifiable,
  :person_type,
  :pipeline,
  :planning_only,
  :platform,
  :platform_post_id,
  :policy,
  :polish,
  :post_url,
  :posted_at,
  :primary_role,
  :purpose,
  :rate,
  :rationale,
  :reason,
  :reference_source_id,
  :requires_medical_review,
  :review_status,
  :revision,
  :rights_expires_at,
  :rights_status,
  :run_id,
  :sample_links,
  :secondary_roles,
  :seconds,
  :seed,
  :seed_base,
  :sensitive_personal_data_present,
  :shares,
  :shoot,
  :slots,
  :soundbite_title,
  :source,
  :source_id,
  :source_ids,
  :spend_usd,
  :spiciness,
  :spiciness_notes,
  :start_ms,
  :status,
  :terry_clip_ids,
  :testimonial_strength,
  :testimonial_type,
  :tier,
  :timeline,
  :topic,
  :topic_tags,
  :total_target_ms,
  :use_learned_weights,
  :views,
  :window,
  keyword_init: true
)

# Request payload for AdminVideoRemixer#update.
#
# @!attribute [rw] identifier
#   @return [String]
#
# @!attribute [rw] allowed_platforms
#   @return [Array, nil]
#
# @!attribute [rw] auto_render
#   @return [Boolean, nil]
#
# @!attribute [rw] campaign_allowed
#   @return [Boolean, nil]
#
# @!attribute [rw] channel
#   @return [String, nil]
#
# @!attribute [rw] channel_default
#   @return [String, nil]
#
# @!attribute [rw] clip_id
#   @return [String, nil]
#
# @!attribute [rw] confirmed_duplicate_of
#   @return [Object, nil]
#
# @!attribute [rw] consent_doc_uri
#   @return [String, nil]
#
# @!attribute [rw] contact
#   @return [String, nil]
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] creator_id
#   @return [String, nil]
#
# @!attribute [rw] derivative_edits_allowed
#   @return [Boolean, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] expected_revision
#   @return [Object, nil]
#
# @!attribute [rw] expected_revisions
#   @return [Hash, nil]
#
# @!attribute [rw] external_ai_allowed
#   @return [Boolean, nil]
#
# @!attribute [rw] followers
#   @return [Object, nil]
#
# @!attribute [rw] formula_id
#   @return [String, nil]
#
# @!attribute [rw] handles
#   @return [Hash, nil]
#
# @!attribute [rw] hour_utc
#   @return [Integer, nil]
#
# @!attribute [rw] human_role
#   @return [String, nil]
#
# @!attribute [rw] levels
#   @return [Hash, nil]
#
# @!attribute [rw] medical_claim_present
#   @return [Boolean, nil]
#
# @!attribute [rw] minute_utc
#   @return [Integer, nil]
#
# @!attribute [rw] music_bed_allowed
#   @return [Boolean, nil]
#
# @!attribute [rw] music_policy
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] niche
#   @return [String, nil]
#
# @!attribute [rw] notes
#   @return [String, nil]
#
# @!attribute [rw] origin
#   @return [String, nil]
#
# @!attribute [rw] owner_waiver
#   @return [Boolean, nil]
#
# @!attribute [rw] paid_ads_allowed
#   @return [Boolean, nil]
#
# @!attribute [rw] patient_identifiable
#   @return [Boolean, nil]
#
# @!attribute [rw] person_type
#   @return [String, nil]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] platform_post_id
#   @return [String, nil]
#
# @!attribute [rw] policy
#   @return [Hash, nil]
#
# @!attribute [rw] post_url
#   @return [String, nil]
#
# @!attribute [rw] posted_at
#   @return [String, nil]
#
# @!attribute [rw] rate
#   @return [Float, nil]
#
# @!attribute [rw] rationale
#   @return [String, nil]
#
# @!attribute [rw] reason
#   @return [String, nil]
#
# @!attribute [rw] reference_source_id
#   @return [String, nil]
#
# @!attribute [rw] requires_medical_review
#   @return [Boolean, nil]
#
# @!attribute [rw] rights_expires_at
#   @return [Object, nil]
#
# @!attribute [rw] rights_status
#   @return [String, nil]
#
# @!attribute [rw] sample_links
#   @return [Array, nil]
#
# @!attribute [rw] seed_base
#   @return [Integer, nil]
#
# @!attribute [rw] sensitive_personal_data_present
#   @return [Boolean, nil]
#
# @!attribute [rw] shoot
#   @return [String, nil]
#
# @!attribute [rw] slots
#   @return [Array, nil]
#
# @!attribute [rw] source_ids
#   @return [Array, nil]
#
# @!attribute [rw] spiciness
#   @return [Object, nil]
#
# @!attribute [rw] spiciness_notes
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] timeline
#   @return [Hash, nil]
#
# @!attribute [rw] total_target_ms
#   @return [Integer, nil]
AdminVideoRemixerUpdateData = Struct.new(
  :identifier,
  :allowed_platforms,
  :auto_render,
  :campaign_allowed,
  :channel,
  :channel_default,
  :clip_id,
  :confirmed_duplicate_of,
  :consent_doc_uri,
  :contact,
  :count,
  :creator_id,
  :derivative_edits_allowed,
  :enabled,
  :errors,
  :expected_revision,
  :expected_revisions,
  :external_ai_allowed,
  :followers,
  :formula_id,
  :handles,
  :hour_utc,
  :human_role,
  :levels,
  :medical_claim_present,
  :minute_utc,
  :music_bed_allowed,
  :music_policy,
  :name,
  :niche,
  :notes,
  :origin,
  :owner_waiver,
  :paid_ads_allowed,
  :patient_identifiable,
  :person_type,
  :platform,
  :platform_post_id,
  :policy,
  :post_url,
  :posted_at,
  :rate,
  :rationale,
  :reason,
  :reference_source_id,
  :requires_medical_review,
  :rights_expires_at,
  :rights_status,
  :sample_links,
  :seed_base,
  :sensitive_personal_data_present,
  :shoot,
  :slots,
  :source_ids,
  :spiciness,
  :spiciness_notes,
  :status,
  :timeline,
  :total_target_ms,
  keyword_init: true
)

# Request payload for AdminVideoRemixer#patch.
#
# @!attribute [rw] atomicity_class
#   @return [Object, nil]
#
# @!attribute [rw] crop_window
#   @return [Object, nil]
#
# @!attribute [rw] cta_product_id
#   @return [String, nil]
#
# @!attribute [rw] end_ms
#   @return [Object, nil]
#
# @!attribute [rw] expected_revision
#   @return [Object, nil]
#
# @!attribute [rw] hook_subtype
#   @return [Object, nil]
#
# @!attribute [rw] media_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] medical_claim_present
#   @return [Boolean, nil]
#
# @!attribute [rw] primary_role
#   @return [Object, nil]
#
# @!attribute [rw] reason
#   @return [String, nil]
#
# @!attribute [rw] requires_medical_review
#   @return [Boolean, nil]
#
# @!attribute [rw] review_status
#   @return [Object, nil]
#
# @!attribute [rw] secondary_roles
#   @return [Object, nil]
#
# @!attribute [rw] sensitive_personal_data_present
#   @return [Boolean, nil]
#
# @!attribute [rw] soundbite_title
#   @return [Object, nil]
#
# @!attribute [rw] start_ms
#   @return [Object, nil]
#
# @!attribute [rw] testimonial_strength
#   @return [Object, nil]
#
# @!attribute [rw] testimonial_type
#   @return [Object, nil]
#
# @!attribute [rw] topic_tags
#   @return [Object, nil]
AdminVideoRemixerPatchData = Struct.new(
  :atomicity_class,
  :crop_window,
  :cta_product_id,
  :end_ms,
  :expected_revision,
  :hook_subtype,
  :media_enabled,
  :medical_claim_present,
  :primary_role,
  :reason,
  :requires_medical_review,
  :review_status,
  :secondary_roles,
  :sensitive_personal_data_present,
  :soundbite_title,
  :start_ms,
  :testimonial_strength,
  :testimonial_type,
  :topic_tags,
  keyword_init: true
)

# Request payload for AdminVideoRemixer#remove.
#
# @!attribute [rw] identifier
#   @return [String]
AdminVideoRemixerRemoveMatch = Struct.new(
  :identifier,
  keyword_init: true
)

# AdvanceStep entity data model.
#
# @!attribute [rw] current_step
#   @return [String]
#
# @!attribute [rw] onboarding_data_id
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] to_step
#   @return [String]
AdvanceStep = Struct.new(
  :current_step,
  :onboarding_data_id,
  :success,
  :to_step,
  keyword_init: true
)

# Request payload for AdvanceStep#create.
#
# @!attribute [rw] onboarding_data_id
#   @return [String]
#
# @!attribute [rw] to_step
#   @return [String]
AdvanceStepCreateData = Struct.new(
  :onboarding_data_id,
  :to_step,
  keyword_init: true
)

# Agent entity data model.
#
# @!attribute [rw] active_connections
#   @return [Integer]
#
# @!attribute [rw] at_capacity
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] is_active
#   @return [Boolean]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] tiktok_stats
#   @return [Object, nil]
#
# @!attribute [rw] type
#   @return [String]
Agent = Struct.new(
  :active_connections,
  :at_capacity,
  :id,
  :is_active,
  :name,
  :tiktok_stats,
  :type,
  keyword_init: true
)

# Request payload for Agent#list.
#
# @!attribute [rw] agent_type
#   @return [Object, nil]
AgentListMatch = Struct.new(
  :agent_type,
  keyword_init: true
)

# AgentAccessCustomersHealth entity data model.
#
# @!attribute [rw] accountType
#   @return [Object, nil]
#
# @!attribute [rw] agentQuota
#   @return [Integer]
#
# @!attribute [rw] assignedAgentsByType
#   @return [Hash]
#
# @!attribute [rw] assignedAgentsTotal
#   @return [Integer]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] isInternalUser
#   @return [Object, nil]
#
# @!attribute [rw] membership
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] performance
#   @return [Hash]
#
# @!attribute [rw] productCount
#   @return [Integer]
#
# @!attribute [rw] subscriptionCurrentPeriodEnd
#   @return [Object, nil]
#
# @!attribute [rw] subscriptionDetails
#   @return [Object, nil]
#
# @!attribute [rw] subscriptionStatus
#   @return [Object, nil]
#
# @!attribute [rw] usage
#   @return [Hash]
#
# @!attribute [rw] userId
#   @return [String]
AgentAccessCustomersHealth = Struct.new(
  :accountType,
  :agentQuota,
  :assignedAgentsByType,
  :assignedAgentsTotal,
  :createdAt,
  :email,
  :isInternalUser,
  :membership,
  :name,
  :performance,
  :productCount,
  :subscriptionCurrentPeriodEnd,
  :subscriptionDetails,
  :subscriptionStatus,
  :usage,
  :userId,
  keyword_init: true
)

# Request payload for AgentAccessCustomersHealth#list.
#
# @!attribute [rw] date_range
#   @return [String, nil]
#
# @!attribute [rw] include_internal
#   @return [Boolean, nil]
#
# @!attribute [rw] subscription_status
#   @return [Object, nil]
AgentAccessCustomersHealthListMatch = Struct.new(
  :date_range,
  :include_internal,
  :subscription_status,
  keyword_init: true
)

# AgentAccessOverview entity data model.
#
# @!attribute [rw] activeUsers
#   @return [Integer]
#
# @!attribute [rw] generatedAt
#   @return [String]
#
# @!attribute [rw] newUsersYesterday
#   @return [Integer]
#
# @!attribute [rw] onboardingContextCounts
#   @return [Hash]
#
# @!attribute [rw] onboardingCurrentStepCounts
#   @return [Hash]
#
# @!attribute [rw] onboardingCurrentStepWindow
#   @return [Hash]
#
# @!attribute [rw] onboardingFlowVariantCounts
#   @return [Hash]
#
# @!attribute [rw] onboardingLockedUntilActivation
#   @return [Integer]
#
# @!attribute [rw] onboardingRecordsTotal
#   @return [Integer]
#
# @!attribute [rw] onboardingRecordsWindow
#   @return [Integer]
#
# @!attribute [rw] onboardingSocialScanStatusCounts
#   @return [Hash]
#
# @!attribute [rw] onboardingWebsiteScrapeStatusCounts
#   @return [Hash]
#
# @!attribute [rw] subscriptionStatusCounts
#   @return [Hash]
#
# @!attribute [rw] totalInternalUsers
#   @return [Integer]
#
# @!attribute [rw] totalUsers
#   @return [Integer]
#
# @!attribute [rw] trialStartedYesterday
#   @return [Integer]
#
# @!attribute [rw] trialingUsers
#   @return [Integer]
AgentAccessOverview = Struct.new(
  :activeUsers,
  :generatedAt,
  :newUsersYesterday,
  :onboardingContextCounts,
  :onboardingCurrentStepCounts,
  :onboardingCurrentStepWindow,
  :onboardingFlowVariantCounts,
  :onboardingLockedUntilActivation,
  :onboardingRecordsTotal,
  :onboardingRecordsWindow,
  :onboardingSocialScanStatusCounts,
  :onboardingWebsiteScrapeStatusCounts,
  :subscriptionStatusCounts,
  :totalInternalUsers,
  :totalUsers,
  :trialStartedYesterday,
  :trialingUsers,
  keyword_init: true
)

# Request payload for AgentAccessOverview#load.
#
# @!attribute [rw] onboarding_window_day
#   @return [Integer, nil]
AgentAccessOverviewLoadMatch = Struct.new(
  :onboarding_window_day,
  keyword_init: true
)

# AgentAccessPhilHourlyNotification entity data model.
#
# @!attribute [rw] generatedAt
#   @return [String]
#
# @!attribute [rw] phoneHealth
#   @return [Hash]
#
# @!attribute [rw] scheduledPosts
#   @return [Hash]
#
# @!attribute [rw] targetDate
#   @return [String]
#
# @!attribute [rw] uploadPostInstagramHealth
#   @return [Hash]
#
# @!attribute [rw] uploadPostTiktokHealth
#   @return [Hash]
#
# @!attribute [rw] uploadPostYoutubeHealth
#   @return [Hash]
AgentAccessPhilHourlyNotification = Struct.new(
  :generatedAt,
  :phoneHealth,
  :scheduledPosts,
  :targetDate,
  :uploadPostInstagramHealth,
  :uploadPostTiktokHealth,
  :uploadPostYoutubeHealth,
  keyword_init: true
)

# Request payload for AgentAccessPhilHourlyNotification#load.
#
# @!attribute [rw] date
#   @return [Object, nil]
AgentAccessPhilHourlyNotificationLoadMatch = Struct.new(
  :date,
  keyword_init: true
)

# AgentAccessPhilStatsRefresh entity data model.
#
# @!attribute [rw] generatedAt
#   @return [String]
#
# @!attribute [rw] statsRefresh
#   @return [Hash]
#
# @!attribute [rw] targetDate
#   @return [String]
AgentAccessPhilStatsRefresh = Struct.new(
  :generatedAt,
  :statsRefresh,
  :targetDate,
  keyword_init: true
)

# Request payload for AgentAccessPhilStatsRefresh#load.
#
# @!attribute [rw] date
#   @return [Object, nil]
AgentAccessPhilStatsRefreshLoadMatch = Struct.new(
  :date,
  keyword_init: true
)

# AgentAccessPhilVideo entity data model.
#
# @!attribute [rw] generatedAt
#   @return [String]
#
# @!attribute [rw] targetDate
#   @return [String]
#
# @!attribute [rw] videos
#   @return [Hash]
AgentAccessPhilVideo = Struct.new(
  :generatedAt,
  :targetDate,
  :videos,
  keyword_init: true
)

# Request payload for AgentAccessPhilVideo#load.
#
# @!attribute [rw] date
#   @return [Object, nil]
AgentAccessPhilVideoLoadMatch = Struct.new(
  :date,
  keyword_init: true
)

# AgentAccessUserAgent entity data model.
#
# @!attribute [rw] agentQuota
#   @return [Integer]
#
# @!attribute [rw] agents
#   @return [Array]
#
# @!attribute [rw] assignedByType
#   @return [Hash]
#
# @!attribute [rw] assignedTotal
#   @return [Integer]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] products
#   @return [Array]
#
# @!attribute [rw] userId
#   @return [String]
AgentAccessUserAgent = Struct.new(
  :agentQuota,
  :agents,
  :assignedByType,
  :assignedTotal,
  :email,
  :products,
  :userId,
  keyword_init: true
)

# Request payload for AgentAccessUserAgent#list.
#
# @!attribute [rw] email
#   @return [String]
AgentAccessUserAgentListMatch = Struct.new(
  :email,
  keyword_init: true
)

# AgentAccessUserPhoneFarm entity data model.
#
# @!attribute [rw] avatar
#   @return [Object, nil]
#
# @!attribute [rw] facebookUrl
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] instagramUrl
#   @return [Object, nil]
#
# @!attribute [rw] lastAdminSyncedAt
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] productId
#   @return [Object, nil]
#
# @!attribute [rw] productName
#   @return [Object, nil]
#
# @!attribute [rw] tiktokUrl
#   @return [Object, nil]
#
# @!attribute [rw] type
#   @return [Object, nil]
#
# @!attribute [rw] uploadPostPlatforms
#   @return [Object, nil]
#
# @!attribute [rw] youtubeUrl
#   @return [Object, nil]
AgentAccessUserPhoneFarm = Struct.new(
  :avatar,
  :facebookUrl,
  :id,
  :instagramUrl,
  :lastAdminSyncedAt,
  :name,
  :productId,
  :productName,
  :tiktokUrl,
  :type,
  :uploadPostPlatforms,
  :youtubeUrl,
  keyword_init: true
)

# Request payload for AgentAccessUserPhoneFarm#list.
#
# @!attribute [rw] email
#   @return [String]
AgentAccessUserPhoneFarmListMatch = Struct.new(
  :email,
  keyword_init: true
)

# AgentAccessUserPost entity data model.
#
# @!attribute [rw] deltaYesterday
#   @return [Integer]
#
# @!attribute [rw] expectedVideosPerDay
#   @return [Integer]
#
# @!attribute [rw] postedToday
#   @return [Integer]
#
# @!attribute [rw] postedYesterday
#   @return [Integer]
#
# @!attribute [rw] productId
#   @return [Object, nil]
#
# @!attribute [rw] productName
#   @return [Object, nil]
AgentAccessUserPost = Struct.new(
  :deltaYesterday,
  :expectedVideosPerDay,
  :postedToday,
  :postedYesterday,
  :productId,
  :productName,
  keyword_init: true
)

# Request payload for AgentAccessUserPost#list.
#
# @!attribute [rw] day
#   @return [Integer, nil]
#
# @!attribute [rw] email
#   @return [String]
AgentAccessUserPostListMatch = Struct.new(
  :day,
  :email,
  keyword_init: true
)

# AgentAccessUserSummary entity data model.
#
# @!attribute [rw] deletedAt
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] isActive
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
AgentAccessUserSummary = Struct.new(
  :deletedAt,
  :id,
  :isActive,
  :name,
  :url,
  keyword_init: true
)

# Request payload for AgentAccessUserSummary#list.
#
# @!attribute [rw] email
#   @return [String]
AgentAccessUserSummaryListMatch = Struct.new(
  :email,
  keyword_init: true
)

# AgentAccessUserVideo entity data model.
#
# @!attribute [rw] allTime
#   @return [Hash]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] today
#   @return [Hash]
#
# @!attribute [rw] userId
#   @return [String]
#
# @!attribute [rw] yesterday
#   @return [Hash]
AgentAccessUserVideo = Struct.new(
  :allTime,
  :email,
  :today,
  :userId,
  :yesterday,
  keyword_init: true
)

# Request payload for AgentAccessUserVideo#load.
#
# @!attribute [rw] email
#   @return [String]
AgentAccessUserVideoLoadMatch = Struct.new(
  :email,
  keyword_init: true
)

# AgentAccessUserWinningAd entity data model.
#
# @!attribute [rw] productId
#   @return [String]
#
# @!attribute [rw] productName
#   @return [String]
#
# @!attribute [rw] winningAds
#   @return [Array]
#
# @!attribute [rw] winningAdsCount
#   @return [Integer]
AgentAccessUserWinningAd = Struct.new(
  :productId,
  :productName,
  :winningAds,
  :winningAdsCount,
  keyword_init: true
)

# Request payload for AgentAccessUserWinningAd#list.
#
# @!attribute [rw] email
#   @return [String]
AgentAccessUserWinningAdListMatch = Struct.new(
  :email,
  keyword_init: true
)

# AgentAccessWinningAdsSummary entity data model.
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] productCount
#   @return [Integer]
#
# @!attribute [rw] productsWithWinningAds
#   @return [Integer]
#
# @!attribute [rw] subscriptionStatus
#   @return [Object, nil]
#
# @!attribute [rw] totalWinningAds
#   @return [Integer]
#
# @!attribute [rw] userId
#   @return [String]
AgentAccessWinningAdsSummary = Struct.new(
  :email,
  :name,
  :productCount,
  :productsWithWinningAds,
  :subscriptionStatus,
  :totalWinningAds,
  :userId,
  keyword_init: true
)

# Request payload for AgentAccessWinningAdsSummary#list.
#
# @!attribute [rw] include_internal
#   @return [Boolean, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
#
# @!attribute [rw] subscription_status
#   @return [Object, nil]
AgentAccessWinningAdsSummaryListMatch = Struct.new(
  :include_internal,
  :limit,
  :offset,
  :subscription_status,
  keyword_init: true
)

# AgentDetail entity data model.
#
# @!attribute [rw] activeConnections
#   @return [Object, nil]
#
# @!attribute [rw] assignedAt
#   @return [Object, nil]
#
# @!attribute [rw] avatar
#   @return [String]
#
# @!attribute [rw] bio
#   @return [Object, nil]
#
# @!attribute [rw] facebookUrl
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] instagramUrl
#   @return [Object, nil]
#
# @!attribute [rw] isActive
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] role
#   @return [Object, nil]
#
# @!attribute [rw] tiktokStats
#   @return [Object, nil]
#
# @!attribute [rw] tiktokUrl
#   @return [Object, nil]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] uploadPostPlatforms
#   @return [Object, nil]
#
# @!attribute [rw] youtubeUrl
#   @return [Object, nil]
AgentDetail = Struct.new(
  :activeConnections,
  :assignedAt,
  :avatar,
  :bio,
  :facebookUrl,
  :id,
  :instagramUrl,
  :isActive,
  :name,
  :role,
  :tiktokStats,
  :tiktokUrl,
  :type,
  :uploadPostPlatforms,
  :youtubeUrl,
  keyword_init: true
)

# Request payload for AgentDetail#list.
#
# @!attribute [rw] agent_type
#   @return [Object, nil]
#
# @!attribute [rw] include_inactive
#   @return [Boolean, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
AgentDetailListMatch = Struct.new(
  :agent_type,
  :include_inactive,
  :limit,
  keyword_init: true
)

# Request payload for AgentDetail#update.
#
# @!attribute [rw] upload_post_agent_id
#   @return [String]
#
# @!attribute [rw] bio
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [Object, nil]
AgentDetailUpdateData = Struct.new(
  :upload_post_agent_id,
  :bio,
  :name,
  :role,
  keyword_init: true
)

# AgentHealth entity data model.
#
# @!attribute [rw] daily
#   @return [Array]
#
# @!attribute [rw] dates
#   @return [Array]
#
# @!attribute [rw] generated_at
#   @return [String]
#
# @!attribute [rw] groups
#   @return [Array]
#
# @!attribute [rw] latest
#   @return [Hash]
#
# @!attribute [rw] live_date
#   @return [Object, nil]
#
# @!attribute [rw] phone_admin_generated_at
#   @return [String]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] post_target
#   @return [Integer]
#
# @!attribute [rw] qa_managed_agent_ids
#   @return [Array, nil]
#
# @!attribute [rw] scope_prefixes
#   @return [Array]
#
# @!attribute [rw] timezone
#   @return [String]
#
# @!attribute [rw] warmup_target
#   @return [Integer]
AgentHealth = Struct.new(
  :daily,
  :dates,
  :generated_at,
  :groups,
  :latest,
  :live_date,
  :phone_admin_generated_at,
  :platform,
  :post_target,
  :qa_managed_agent_ids,
  :scope_prefixes,
  :timezone,
  :warmup_target,
  keyword_init: true
)

# Request payload for AgentHealth#list.
#
# @!attribute [rw] date_to
#   @return [Object, nil]
#
# @!attribute [rw] day
#   @return [Integer, nil]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] summary
#   @return [Boolean, nil]
#
# @!attribute [rw] user_id
#   @return [String, nil]
AgentHealthListMatch = Struct.new(
  :date_to,
  :day,
  :platform,
  :summary,
  :user_id,
  keyword_init: true
)

# AgentHealthCustomerOption entity data model.
#
# @!attribute [rw] agent_count
#   @return [Integer]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] user_id
#   @return [String]
AgentHealthCustomerOption = Struct.new(
  :agent_count,
  :email,
  :user_id,
  keyword_init: true
)

# Request payload for AgentHealthCustomerOption#list.
#
# @!attribute [rw] agent_count
#   @return [Integer, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [String, nil]
AgentHealthCustomerOptionListMatch = Struct.new(
  :agent_count,
  :email,
  :user_id,
  keyword_init: true
)

# AgentHealthDetail entity data model.
#
# @!attribute [rw] archived_issue_total
#   @return [Integer, nil]
#
# @!attribute [rw] date
#   @return [String]
#
# @!attribute [rw] generated_at
#   @return [String]
#
# @!attribute [rw] group_id
#   @return [String]
#
# @!attribute [rw] has_more
#   @return [Boolean]
#
# @!attribute [rw] issue_total
#   @return [Integer]
#
# @!attribute [rw] issues
#   @return [Array]
#
# @!attribute [rw] limit
#   @return [Integer]
#
# @!attribute [rw] metric
#   @return [String]
#
# @!attribute [rw] offset
#   @return [Integer]
#
# @!attribute [rw] warmup_runs
#   @return [Array, nil]
#
# @!attribute [rw] warning_total
#   @return [Integer, nil]
#
# @!attribute [rw] warnings
#   @return [Array, nil]
AgentHealthDetail = Struct.new(
  :archived_issue_total,
  :date,
  :generated_at,
  :group_id,
  :has_more,
  :issue_total,
  :issues,
  :limit,
  :metric,
  :offset,
  :warmup_runs,
  :warning_total,
  :warnings,
  keyword_init: true
)

# Request payload for AgentHealthDetail#list.
#
# @!attribute [rw] date
#   @return [String]
#
# @!attribute [rw] group_id
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] metric
#   @return [String, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
#
# @!attribute [rw] platform
#   @return [String, nil]
AgentHealthDetailListMatch = Struct.new(
  :date,
  :group_id,
  :limit,
  :metric,
  :offset,
  :platform,
  keyword_init: true
)

# AgentPost entity data model.
#
# @!attribute [rw] comments
#   @return [Integer]
#
# @!attribute [rw] error_message
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] likes
#   @return [Integer]
#
# @!attribute [rw] product_id
#   @return [String]
#
# @!attribute [rw] results
#   @return [Object]
#
# @!attribute [rw] scheduled_datetime
#   @return [String]
#
# @!attribute [rw] source_type
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] user_email
#   @return [String]
#
# @!attribute [rw] user_id
#   @return [String]
#
# @!attribute [rw] user_name
#   @return [Object]
#
# @!attribute [rw] video_id
#   @return [String]
#
# @!attribute [rw] video_url
#   @return [Object]
#
# @!attribute [rw] views
#   @return [Integer]
AgentPost = Struct.new(
  :comments,
  :error_message,
  :id,
  :likes,
  :product_id,
  :results,
  :scheduled_datetime,
  :source_type,
  :status,
  :user_email,
  :user_id,
  :user_name,
  :video_id,
  :video_url,
  :views,
  keyword_init: true
)

# Request payload for AgentPost#list.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] day
#   @return [String, nil]
AgentPostListMatch = Struct.new(
  :id,
  :day,
  keyword_init: true
)

# AgentStat entity data model.
#
# @!attribute [rw] agents_needed
#   @return [Integer]
#
# @!attribute [rw] dedicated_agents
#   @return [Hash]
#
# @!attribute [rw] shared_agents
#   @return [Hash]
#
# @!attribute [rw] total_agents
#   @return [Integer]
AgentStat = Struct.new(
  :agents_needed,
  :dedicated_agents,
  :shared_agents,
  :total_agents,
  keyword_init: true
)

# Request payload for AgentStat#load.
#
# @!attribute [rw] agents_needed
#   @return [Integer, nil]
#
# @!attribute [rw] dedicated_agents
#   @return [Hash, nil]
#
# @!attribute [rw] shared_agents
#   @return [Hash, nil]
#
# @!attribute [rw] total_agents
#   @return [Integer, nil]
AgentStatLoadMatch = Struct.new(
  :agents_needed,
  :dedicated_agents,
  :shared_agents,
  :total_agents,
  keyword_init: true
)

# AgentSummary entity data model.
#
# @!attribute [rw] agent_count
#   @return [Integer]
#
# @!attribute [rw] favicon_url
#   @return [Object, nil]
#
# @!attribute [rw] product_id
#   @return [String]
#
# @!attribute [rw] product_name
#   @return [String]
AgentSummary = Struct.new(
  :agent_count,
  :favicon_url,
  :product_id,
  :product_name,
  keyword_init: true
)

# Request payload for AgentSummary#list.
#
# @!attribute [rw] agent_count
#   @return [Integer, nil]
#
# @!attribute [rw] favicon_url
#   @return [Object, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] product_name
#   @return [String, nil]
AgentSummaryListMatch = Struct.new(
  :agent_count,
  :favicon_url,
  :product_id,
  :product_name,
  keyword_init: true
)

# AgentsSummary entity data model.
#
# @!attribute [rw] total_agents
#   @return [Integer]
#
# @!attribute [rw] total_agents_count_sum
#   @return [Integer]
AgentsSummary = Struct.new(
  :total_agents,
  :total_agents_count_sum,
  keyword_init: true
)

# Request payload for AgentsSummary#load.
#
# @!attribute [rw] total_agents
#   @return [Integer, nil]
#
# @!attribute [rw] total_agents_count_sum
#   @return [Integer, nil]
AgentsSummaryLoadMatch = Struct.new(
  :total_agents,
  :total_agents_count_sum,
  keyword_init: true
)

# AnalysisStatus entity data model.
class AnalysisStatus
end

# Request payload for AnalysisStatus#load.
class AnalysisStatusLoadMatch
end

# AnalyticsPost entity data model.
#
# @!attribute [rw] agent
#   @return [Object, nil]
#
# @!attribute [rw] comment
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] queue_position
#   @return [Object, nil]
#
# @!attribute [rw] results
#   @return [Object, nil]
#
# @!attribute [rw] scheduled_datetime
#   @return [String]
#
# @!attribute [rw] scraped_posts
#   @return [Object, nil]
#
# @!attribute [rw] source_type
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] video
#   @return [Object, nil]
AnalyticsPost = Struct.new(
  :agent,
  :comment,
  :created_at,
  :id,
  :product_id,
  :queue_position,
  :results,
  :scheduled_datetime,
  :scraped_posts,
  :source_type,
  :status,
  :updated_at,
  :video,
  keyword_init: true
)

# Request payload for AnalyticsPost#list.
#
# @!attribute [rw] agent_id
#   @return [String, nil]
#
# @!attribute [rw] date_from
#   @return [String]
#
# @!attribute [rw] date_to
#   @return [Object, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [Object, nil]
#
# @!attribute [rw] user_id
#   @return [String, nil]
AnalyticsPostListMatch = Struct.new(
  :agent_id,
  :date_from,
  :date_to,
  :email,
  :product_id,
  :status,
  :user_id,
  keyword_init: true
)

# AnalyzeProduct entity data model.
#
# @!attribute [rw] instagram_username
#   @return [Object, nil]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
AnalyzeProduct = Struct.new(
  :instagram_username,
  :message,
  :status,
  :url,
  keyword_init: true
)

# Request payload for AnalyzeProduct#create.
#
# @!attribute [rw] instagram_username
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String]
AnalyzeProductCreateData = Struct.new(
  :instagram_username,
  :url,
  keyword_init: true
)

# AssignAgent entity data model.
#
# @!attribute [rw] agent
#   @return [Hash]
#
# @!attribute [rw] assignment
#   @return [Hash]
#
# @!attribute [rw] mock_agents
#   @return [Array]
#
# @!attribute [rw] onboarding_data_id
#   @return [String]
AssignAgent = Struct.new(
  :agent,
  :assignment,
  :mock_agents,
  :onboarding_data_id,
  keyword_init: true
)

# Request payload for AssignAgent#create.
#
# @!attribute [rw] onboarding_data_id
#   @return [String]
AssignAgentCreateData = Struct.new(
  :onboarding_data_id,
  keyword_init: true
)

# Auth entity data model.
class Auth
end

# Request payload for Auth#create.
#
# @!attribute [rw] attribution
#   @return [Object, nil]
#
# @!attribute [rw] email
#   @return [Object, nil]
#
# @!attribute [rw] industry
#   @return [Object, nil]
#
# @!attribute [rw] returnTo
#   @return [Object, nil]
#
# @!attribute [rw] token
#   @return [Object, nil]
AuthCreateData = Struct.new(
  :attribution,
  :email,
  :industry,
  :returnTo,
  :token,
  keyword_init: true
)

# AutoScheduleSetting entity data model.
#
# @!attribute [rw] can_enable_repost
#   @return [Boolean, nil]
#
# @!attribute [rw] effective_posted_video_reuse_percent
#   @return [Integer]
#
# @!attribute [rw] enabled_video_types
#   @return [Object, nil]
#
# @!attribute [rw] is_enabled
#   @return [Boolean]
#
# @!attribute [rw] lock_video_regeneration_controls
#   @return [Boolean, nil]
#
# @!attribute [rw] membership_tier
#   @return [String]
#
# @!attribute [rw] posted_video_reuse_percent
#   @return [Object, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] repost_source
#   @return [Object, nil]
#
# @!attribute [rw] videos_per_day
#   @return [Integer]
AutoScheduleSetting = Struct.new(
  :can_enable_repost,
  :effective_posted_video_reuse_percent,
  :enabled_video_types,
  :is_enabled,
  :lock_video_regeneration_controls,
  :membership_tier,
  :posted_video_reuse_percent,
  :product_id,
  :repost_source,
  :videos_per_day,
  keyword_init: true
)

# Request payload for AutoScheduleSetting#load.
#
# @!attribute [rw] product_id
#   @return [String, nil]
AutoScheduleSettingLoadMatch = Struct.new(
  :product_id,
  keyword_init: true
)

# Request payload for AutoScheduleSetting#update.
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] enabled_video_types
#   @return [Object, nil]
#
# @!attribute [rw] is_enabled
#   @return [Boolean, nil]
AutoScheduleSettingUpdateData = Struct.new(
  :product_id,
  :enabled_video_types,
  :is_enabled,
  keyword_init: true
)

# BulkTikTokStatsUpdate entity data model.
#
# @!attribute [rw] failedIds
#   @return [Array]
#
# @!attribute [rw] updatedCount
#   @return [Integer]
#
# @!attribute [rw] updates
#   @return [Array]
BulkTikTokStatsUpdate = Struct.new(
  :failedIds,
  :updatedCount,
  :updates,
  keyword_init: true
)

# Request payload for BulkTikTokStatsUpdate#update.
#
# @!attribute [rw] updates
#   @return [Array, nil]
BulkTikTokStatsUpdateUpdateData = Struct.new(
  :updates,
  keyword_init: true
)

# Carousel entity data model.
#
# @!attribute [rw] agent_id
#   @return [String]
#
# @!attribute [rw] agent_name
#   @return [String]
#
# @!attribute [rw] audit_created_at
#   @return [Object, nil]
#
# @!attribute [rw] audit_snapshot_sha256
#   @return [Object, nil]
#
# @!attribute [rw] caption
#   @return [Object, nil]
#
# @!attribute [rw] comments
#   @return [Object, nil]
#
# @!attribute [rw] fit_score
#   @return [Object, nil]
#
# @!attribute [rw] format
#   @return [String]
#
# @!attribute [rw] formula
#   @return [Hash, nil]
#
# @!attribute [rw] formula_id
#   @return [String, nil]
#
# @!attribute [rw] formula_name
#   @return [Object, nil]
#
# @!attribute [rw] generation
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] image_prompt
#   @return [Object, nil]
#
# @!attribute [rw] likes
#   @return [Object, nil]
#
# @!attribute [rw] main_prompt
#   @return [Object, nil]
#
# @!attribute [rw] metrics_updated_at
#   @return [Object, nil]
#
# @!attribute [rw] post_url
#   @return [Object, nil]
#
# @!attribute [rw] profile_url
#   @return [Object, nil]
#
# @!attribute [rw] qa
#   @return [Hash, nil]
#
# @!attribute [rw] qa_status
#   @return [String]
#
# @!attribute [rw] qa_verdict
#   @return [Object, nil]
#
# @!attribute [rw] quality_score
#   @return [Object, nil]
#
# @!attribute [rw] queue_id
#   @return [String]
#
# @!attribute [rw] relevance_score
#   @return [Object, nil]
#
# @!attribute [rw] scheduled_at
#   @return [String]
#
# @!attribute [rw] slide_count
#   @return [Integer]
#
# @!attribute [rw] slides
#   @return [Array]
#
# @!attribute [rw] source
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] thumbnail_url
#   @return [Object, nil]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] video_id
#   @return [String]
#
# @!attribute [rw] views
#   @return [Object, nil]
Carousel = Struct.new(
  :agent_id,
  :agent_name,
  :audit_created_at,
  :audit_snapshot_sha256,
  :caption,
  :comments,
  :fit_score,
  :format,
  :formula,
  :formula_id,
  :formula_name,
  :generation,
  :id,
  :image_prompt,
  :likes,
  :main_prompt,
  :metrics_updated_at,
  :post_url,
  :profile_url,
  :qa,
  :qa_status,
  :qa_verdict,
  :quality_score,
  :queue_id,
  :relevance_score,
  :scheduled_at,
  :slide_count,
  :slides,
  :source,
  :status,
  :thumbnail_url,
  :title,
  :video_id,
  :views,
  keyword_init: true
)

# Request payload for Carousel#load.
#
# @!attribute [rw] id
#   @return [String]
CarouselLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Carousel#list.
#
# @!attribute [rw] date
#   @return [Object, nil]
CarouselListMatch = Struct.new(
  :date,
  keyword_init: true
)

# Request payload for Carousel#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] skip_schedule
#   @return [Boolean, nil]
#
# @!attribute [rw] agent_id
#   @return [String]
#
# @!attribute [rw] agent_name
#   @return [String]
#
# @!attribute [rw] audit_created_at
#   @return [Object, nil]
#
# @!attribute [rw] audit_snapshot_sha256
#   @return [Object, nil]
#
# @!attribute [rw] caption
#   @return [Object, nil]
#
# @!attribute [rw] comments
#   @return [Object, nil]
#
# @!attribute [rw] fit_score
#   @return [Object, nil]
#
# @!attribute [rw] format
#   @return [String]
#
# @!attribute [rw] formula
#   @return [Hash, nil]
#
# @!attribute [rw] formula_id
#   @return [String, nil]
#
# @!attribute [rw] formula_name
#   @return [Object, nil]
#
# @!attribute [rw] generation
#   @return [Hash, nil]
#
# @!attribute [rw] image_prompt
#   @return [Object, nil]
#
# @!attribute [rw] likes
#   @return [Object, nil]
#
# @!attribute [rw] main_prompt
#   @return [Object, nil]
#
# @!attribute [rw] metrics_updated_at
#   @return [Object, nil]
#
# @!attribute [rw] post_url
#   @return [Object, nil]
#
# @!attribute [rw] profile_url
#   @return [Object, nil]
#
# @!attribute [rw] qa
#   @return [Hash, nil]
#
# @!attribute [rw] qa_status
#   @return [String]
#
# @!attribute [rw] qa_verdict
#   @return [Object, nil]
#
# @!attribute [rw] quality_score
#   @return [Object, nil]
#
# @!attribute [rw] queue_id
#   @return [String]
#
# @!attribute [rw] relevance_score
#   @return [Object, nil]
#
# @!attribute [rw] scheduled_at
#   @return [String]
#
# @!attribute [rw] slide_count
#   @return [Integer]
#
# @!attribute [rw] slides
#   @return [Array]
#
# @!attribute [rw] source
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] thumbnail_url
#   @return [Object, nil]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] video_id
#   @return [String]
#
# @!attribute [rw] views
#   @return [Object, nil]
CarouselCreateData = Struct.new(
  :id,
  :skip_schedule,
  :agent_id,
  :agent_name,
  :audit_created_at,
  :audit_snapshot_sha256,
  :caption,
  :comments,
  :fit_score,
  :format,
  :formula,
  :formula_id,
  :formula_name,
  :generation,
  :image_prompt,
  :likes,
  :main_prompt,
  :metrics_updated_at,
  :post_url,
  :profile_url,
  :qa,
  :qa_status,
  :qa_verdict,
  :quality_score,
  :queue_id,
  :relevance_score,
  :scheduled_at,
  :slide_count,
  :slides,
  :source,
  :status,
  :thumbnail_url,
  :title,
  :video_id,
  :views,
  keyword_init: true
)

# CarouselAgentDetail entity data model.
#
# @!attribute [rw] agent_id
#   @return [String]
#
# @!attribute [rw] agent_name
#   @return [String]
#
# @!attribute [rw] connection_status
#   @return [Object, nil]
#
# @!attribute [rw] followers
#   @return [Object, nil]
#
# @!attribute [rw] following
#   @return [Object, nil]
#
# @!attribute [rw] metrics_updated_at
#   @return [Object, nil]
#
# @!attribute [rw] phone_admin_status
#   @return [String]
#
# @!attribute [rw] profile_likes
#   @return [Object, nil]
#
# @!attribute [rw] profile_url
#   @return [Object, nil]
#
# @!attribute [rw] warmup_days
#   @return [Object, nil]
#
# @!attribute [rw] warmup_hold_until
#   @return [Object, nil]
#
# @!attribute [rw] warmup_status
#   @return [String]
CarouselAgentDetail = Struct.new(
  :agent_id,
  :agent_name,
  :connection_status,
  :followers,
  :following,
  :metrics_updated_at,
  :phone_admin_status,
  :profile_likes,
  :profile_url,
  :warmup_days,
  :warmup_hold_until,
  :warmup_status,
  keyword_init: true
)

# Request payload for CarouselAgentDetail#load.
#
# @!attribute [rw] agent_id
#   @return [String]
CarouselAgentDetailLoadMatch = Struct.new(
  :agent_id,
  keyword_init: true
)

# CarouselStatus entity data model.
#
# @!attribute [rw] caption
#   @return [Object]
#
# @!attribute [rw] error
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] image_model
#   @return [Object, nil]
#
# @!attribute [rw] image_provider
#   @return [Object, nil]
#
# @!attribute [rw] image_task_id
#   @return [String, nil]
#
# @!attribute [rw] image_url
#   @return [Object]
#
# @!attribute [rw] index
#   @return [Integer]
#
# @!attribute [rw] prompt
#   @return [Object]
#
# @!attribute [rw] status
#   @return [String]
CarouselStatus = Struct.new(
  :caption,
  :error,
  :id,
  :image_model,
  :image_provider,
  :image_task_id,
  :image_url,
  :index,
  :prompt,
  :status,
  keyword_init: true
)

# Request payload for CarouselStatus#list.
#
# @!attribute [rw] id
#   @return [String]
CarouselStatusListMatch = Struct.new(
  :id,
  keyword_init: true
)

# Chat entity data model.
#
# @!attribute [rw] idempotencyKey
#   @return [String]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] sessionId
#   @return [String]
Chat = Struct.new(
  :idempotencyKey,
  :message,
  :sessionId,
  keyword_init: true
)

# Request payload for Chat#create.
#
# @!attribute [rw] session_id
#   @return [String]
#
# @!attribute [rw] idempotencyKey
#   @return [String]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] sessionId
#   @return [String]
ChatCreateData = Struct.new(
  :session_id,
  :idempotencyKey,
  :message,
  :sessionId,
  keyword_init: true
)

# ChatHistory entity data model.
#
# @!attribute [rw] chatSubVariant
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] model
#   @return [Object, nil]
#
# @!attribute [rw] onboardingDataId
#   @return [String]
#
# @!attribute [rw] routeRecommendation
#   @return [Object, nil]
#
# @!attribute [rw] salesStage
#   @return [String]
#
# @!attribute [rw] selectedPlan
#   @return [Object, nil]
#
# @!attribute [rw] session
#   @return [Hash]
#
# @!attribute [rw] sessionId
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
ChatHistory = Struct.new(
  :chatSubVariant,
  :createdAt,
  :messages,
  :model,
  :onboardingDataId,
  :routeRecommendation,
  :salesStage,
  :selectedPlan,
  :session,
  :sessionId,
  :status,
  :updatedAt,
  keyword_init: true
)

# Request payload for ChatHistory#load.
#
# @!attribute [rw] session_id
#   @return [String]
ChatHistoryLoadMatch = Struct.new(
  :session_id,
  keyword_init: true
)

# Request payload for ChatHistory#create.
#
# @!attribute [rw] onboardingDataId
#   @return [String]
ChatHistoryCreateData = Struct.new(
  :onboardingDataId,
  keyword_init: true
)

# ChatSession entity data model.
#
# @!attribute [rw] chatSubVariant
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] model
#   @return [Object, nil]
#
# @!attribute [rw] plan
#   @return [Object, nil]
#
# @!attribute [rw] route
#   @return [Object, nil]
#
# @!attribute [rw] routeRecommendation
#   @return [Object, nil]
#
# @!attribute [rw] salesStage
#   @return [String]
#
# @!attribute [rw] selectedPlan
#   @return [Object, nil]
#
# @!attribute [rw] sessionId
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
ChatSession = Struct.new(
  :chatSubVariant,
  :createdAt,
  :model,
  :plan,
  :route,
  :routeRecommendation,
  :salesStage,
  :selectedPlan,
  :sessionId,
  :status,
  :updatedAt,
  keyword_init: true
)

# Request payload for ChatSession#create.
#
# @!attribute [rw] session_id
#   @return [String]
#
# @!attribute [rw] plan
#   @return [Object, nil]
#
# @!attribute [rw] route
#   @return [Object, nil]
ChatSessionCreateData = Struct.new(
  :session_id,
  :plan,
  :route,
  keyword_init: true
)

# Comment entity data model.
class Comment
end

# Request payload for Comment#load.
#
# @!attribute [rw] all_product
#   @return [Boolean, nil]
#
# @!attribute [rw] day
#   @return [Integer, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
CommentLoadMatch = Struct.new(
  :all_product,
  :day,
  :limit,
  :offset,
  :product_id,
  keyword_init: true
)

# CommentCampaign entity data model.
#
# @!attribute [rw] account_daily_limit
#   @return [Integer, nil]
#
# @!attribute [rw] account_weekly_limit
#   @return [Integer, nil]
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] active_days_per_week
#   @return [Integer, nil]
#
# @!attribute [rw] agent_id
#   @return [String]
#
# @!attribute [rw] allowlist
#   @return [Array, nil]
#
# @!attribute [rw] analysis_daily_limit
#   @return [Integer, nil]
#
# @!attribute [rw] analysis_model
#   @return [String, nil]
#
# @!attribute [rw] analysis_reservation_usd
#   @return [Float, nil]
#
# @!attribute [rw] approved_markets
#   @return [Array, nil]
#
# @!attribute [rw] brand_forward_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] briefs
#   @return [Hash, nil]
#
# @!attribute [rw] candidate_only
#   @return [Boolean, nil]
#
# @!attribute [rw] claims
#   @return [Array, nil]
#
# @!attribute [rw] cohort_removal_threshold
#   @return [Integer, nil]
#
# @!attribute [rw] daily_cost_ceiling_usd
#   @return [Float, nil]
#
# @!attribute [rw] delivery_mode
#   @return [String, nil]
#
# @!attribute [rw] disclosure_mode
#   @return [String, nil]
#
# @!attribute [rw] disclosure_template
#   @return [String, nil]
#
# @!attribute [rw] draft_options_count
#   @return [Integer, nil]
#
# @!attribute [rw] draft_review_reservation_usd
#   @return [Float, nil]
#
# @!attribute [rw] exceptional_daily_cap_approved
#   @return [Boolean, nil]
#
# @!attribute [rw] execution_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] experiment_styles
#   @return [Array, nil]
#
# @!attribute [rw] inventory_factor
#   @return [Float, nil]
#
# @!attribute [rw] keywords
#   @return [Array, nil]
#
# @!attribute [rw] max_duration_seconds
#   @return [Object, nil]
#
# @!attribute [rw] metadata_pass_rate
#   @return [Float, nil]
#
# @!attribute [rw] min_interval_minutes
#   @return [Integer, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] monitored_creators
#   @return [Array, nil]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] platform_permission_evidence
#   @return [String, nil]
#
# @!attribute [rw] policy_approved_by
#   @return [String, nil]
#
# @!attribute [rw] policy_expires_at
#   @return [Object, nil]
#
# @!attribute [rw] policy_version
#   @return [String, nil]
#
# @!attribute [rw] product_daily_limit
#   @return [Integer, nil]
#
# @!attribute [rw] qualification_rate
#   @return [Float, nil]
#
# @!attribute [rw] raw_daily_limit
#   @return [Integer, nil]
#
# @!attribute [rw] raw_result_reservation_usd
#   @return [Float, nil]
#
# @!attribute [rw] reason
#   @return [String]
#
# @!attribute [rw] replies_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] request_key
#   @return [String]
#
# @!attribute [rw] reviewer_model
#   @return [String, nil]
#
# @!attribute [rw] scan_interval_hours
#   @return [Integer, nil]
#
# @!attribute [rw] search_change_reason
#   @return [String, nil]
#
# @!attribute [rw] search_effective_at
#   @return [Object, nil]
#
# @!attribute [rw] shadow_sample_limit
#   @return [Integer, nil]
#
# @!attribute [rw] spent_seconds
#   @return [Object, nil]
#
# @!attribute [rw] task_ttl_hours
#   @return [Integer, nil]
#
# @!attribute [rw] top_comment_analysis_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] writer_model
#   @return [String, nil]
CommentCampaign = Struct.new(
  :account_daily_limit,
  :account_weekly_limit,
  :action,
  :active_days_per_week,
  :agent_id,
  :allowlist,
  :analysis_daily_limit,
  :analysis_model,
  :analysis_reservation_usd,
  :approved_markets,
  :brand_forward_enabled,
  :briefs,
  :candidate_only,
  :claims,
  :cohort_removal_threshold,
  :daily_cost_ceiling_usd,
  :delivery_mode,
  :disclosure_mode,
  :disclosure_template,
  :draft_options_count,
  :draft_review_reservation_usd,
  :exceptional_daily_cap_approved,
  :execution_enabled,
  :experiment_styles,
  :inventory_factor,
  :keywords,
  :max_duration_seconds,
  :metadata_pass_rate,
  :min_interval_minutes,
  :mode,
  :monitored_creators,
  :platform,
  :platform_permission_evidence,
  :policy_approved_by,
  :policy_expires_at,
  :policy_version,
  :product_daily_limit,
  :qualification_rate,
  :raw_daily_limit,
  :raw_result_reservation_usd,
  :reason,
  :replies_enabled,
  :request_key,
  :reviewer_model,
  :scan_interval_hours,
  :search_change_reason,
  :search_effective_at,
  :shadow_sample_limit,
  :spent_seconds,
  :task_ttl_hours,
  :top_comment_analysis_enabled,
  :writer_model,
  keyword_init: true
)

# Request payload for CommentCampaign#load.
#
# @!attribute [rw] product_id
#   @return [String]
CommentCampaignLoadMatch = Struct.new(
  :product_id,
  keyword_init: true
)

# Request payload for CommentCampaign#create.
#
# @!attribute [rw] product_id
#   @return [String]
#
# @!attribute [rw] source_id
#   @return [String, nil]
#
# @!attribute [rw] account_daily_limit
#   @return [Integer, nil]
#
# @!attribute [rw] account_weekly_limit
#   @return [Integer, nil]
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] active_days_per_week
#   @return [Integer, nil]
#
# @!attribute [rw] agent_id
#   @return [String]
#
# @!attribute [rw] allowlist
#   @return [Array, nil]
#
# @!attribute [rw] analysis_daily_limit
#   @return [Integer, nil]
#
# @!attribute [rw] analysis_model
#   @return [String, nil]
#
# @!attribute [rw] analysis_reservation_usd
#   @return [Float, nil]
#
# @!attribute [rw] approved_markets
#   @return [Array, nil]
#
# @!attribute [rw] brand_forward_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] briefs
#   @return [Hash, nil]
#
# @!attribute [rw] candidate_only
#   @return [Boolean, nil]
#
# @!attribute [rw] claims
#   @return [Array, nil]
#
# @!attribute [rw] cohort_removal_threshold
#   @return [Integer, nil]
#
# @!attribute [rw] daily_cost_ceiling_usd
#   @return [Float, nil]
#
# @!attribute [rw] delivery_mode
#   @return [String, nil]
#
# @!attribute [rw] disclosure_mode
#   @return [String, nil]
#
# @!attribute [rw] disclosure_template
#   @return [String, nil]
#
# @!attribute [rw] draft_options_count
#   @return [Integer, nil]
#
# @!attribute [rw] draft_review_reservation_usd
#   @return [Float, nil]
#
# @!attribute [rw] exceptional_daily_cap_approved
#   @return [Boolean, nil]
#
# @!attribute [rw] execution_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] experiment_styles
#   @return [Array, nil]
#
# @!attribute [rw] inventory_factor
#   @return [Float, nil]
#
# @!attribute [rw] keywords
#   @return [Array, nil]
#
# @!attribute [rw] max_duration_seconds
#   @return [Object, nil]
#
# @!attribute [rw] metadata_pass_rate
#   @return [Float, nil]
#
# @!attribute [rw] min_interval_minutes
#   @return [Integer, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] monitored_creators
#   @return [Array, nil]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] platform_permission_evidence
#   @return [String, nil]
#
# @!attribute [rw] policy_approved_by
#   @return [String, nil]
#
# @!attribute [rw] policy_expires_at
#   @return [Object, nil]
#
# @!attribute [rw] policy_version
#   @return [String, nil]
#
# @!attribute [rw] product_daily_limit
#   @return [Integer, nil]
#
# @!attribute [rw] qualification_rate
#   @return [Float, nil]
#
# @!attribute [rw] raw_daily_limit
#   @return [Integer, nil]
#
# @!attribute [rw] raw_result_reservation_usd
#   @return [Float, nil]
#
# @!attribute [rw] reason
#   @return [String]
#
# @!attribute [rw] replies_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] request_key
#   @return [String]
#
# @!attribute [rw] reviewer_model
#   @return [String, nil]
#
# @!attribute [rw] scan_interval_hours
#   @return [Integer, nil]
#
# @!attribute [rw] search_change_reason
#   @return [String, nil]
#
# @!attribute [rw] search_effective_at
#   @return [Object, nil]
#
# @!attribute [rw] shadow_sample_limit
#   @return [Integer, nil]
#
# @!attribute [rw] spent_seconds
#   @return [Object, nil]
#
# @!attribute [rw] task_ttl_hours
#   @return [Integer, nil]
#
# @!attribute [rw] top_comment_analysis_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] writer_model
#   @return [String, nil]
CommentCampaignCreateData = Struct.new(
  :product_id,
  :source_id,
  :account_daily_limit,
  :account_weekly_limit,
  :action,
  :active_days_per_week,
  :agent_id,
  :allowlist,
  :analysis_daily_limit,
  :analysis_model,
  :analysis_reservation_usd,
  :approved_markets,
  :brand_forward_enabled,
  :briefs,
  :candidate_only,
  :claims,
  :cohort_removal_threshold,
  :daily_cost_ceiling_usd,
  :delivery_mode,
  :disclosure_mode,
  :disclosure_template,
  :draft_options_count,
  :draft_review_reservation_usd,
  :exceptional_daily_cap_approved,
  :execution_enabled,
  :experiment_styles,
  :inventory_factor,
  :keywords,
  :max_duration_seconds,
  :metadata_pass_rate,
  :min_interval_minutes,
  :mode,
  :monitored_creators,
  :platform,
  :platform_permission_evidence,
  :policy_approved_by,
  :policy_expires_at,
  :policy_version,
  :product_daily_limit,
  :qualification_rate,
  :raw_daily_limit,
  :raw_result_reservation_usd,
  :reason,
  :replies_enabled,
  :request_key,
  :reviewer_model,
  :scan_interval_hours,
  :search_change_reason,
  :search_effective_at,
  :shadow_sample_limit,
  :spent_seconds,
  :task_ttl_hours,
  :top_comment_analysis_enabled,
  :writer_model,
  keyword_init: true
)

# Request payload for CommentCampaign#update.
#
# @!attribute [rw] product_id
#   @return [String]
#
# @!attribute [rw] account_daily_limit
#   @return [Integer, nil]
#
# @!attribute [rw] account_weekly_limit
#   @return [Integer, nil]
#
# @!attribute [rw] active_days_per_week
#   @return [Integer, nil]
#
# @!attribute [rw] allowlist
#   @return [Array, nil]
#
# @!attribute [rw] analysis_daily_limit
#   @return [Integer, nil]
#
# @!attribute [rw] analysis_model
#   @return [String, nil]
#
# @!attribute [rw] analysis_reservation_usd
#   @return [Float, nil]
#
# @!attribute [rw] approved_markets
#   @return [Array, nil]
#
# @!attribute [rw] brand_forward_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] briefs
#   @return [Hash, nil]
#
# @!attribute [rw] claims
#   @return [Array, nil]
#
# @!attribute [rw] cohort_removal_threshold
#   @return [Integer, nil]
#
# @!attribute [rw] daily_cost_ceiling_usd
#   @return [Float, nil]
#
# @!attribute [rw] delivery_mode
#   @return [String, nil]
#
# @!attribute [rw] disclosure_mode
#   @return [String, nil]
#
# @!attribute [rw] disclosure_template
#   @return [String, nil]
#
# @!attribute [rw] draft_options_count
#   @return [Integer, nil]
#
# @!attribute [rw] draft_review_reservation_usd
#   @return [Float, nil]
#
# @!attribute [rw] exceptional_daily_cap_approved
#   @return [Boolean, nil]
#
# @!attribute [rw] execution_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] experiment_styles
#   @return [Array, nil]
#
# @!attribute [rw] inventory_factor
#   @return [Float, nil]
#
# @!attribute [rw] keywords
#   @return [Array, nil]
#
# @!attribute [rw] max_duration_seconds
#   @return [Object, nil]
#
# @!attribute [rw] metadata_pass_rate
#   @return [Float, nil]
#
# @!attribute [rw] min_interval_minutes
#   @return [Integer, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] monitored_creators
#   @return [Array, nil]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] platform_permission_evidence
#   @return [String, nil]
#
# @!attribute [rw] policy_approved_by
#   @return [String, nil]
#
# @!attribute [rw] policy_expires_at
#   @return [Object, nil]
#
# @!attribute [rw] policy_version
#   @return [String, nil]
#
# @!attribute [rw] product_daily_limit
#   @return [Integer, nil]
#
# @!attribute [rw] qualification_rate
#   @return [Float, nil]
#
# @!attribute [rw] raw_daily_limit
#   @return [Integer, nil]
#
# @!attribute [rw] raw_result_reservation_usd
#   @return [Float, nil]
#
# @!attribute [rw] replies_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] reviewer_model
#   @return [String, nil]
#
# @!attribute [rw] scan_interval_hours
#   @return [Integer, nil]
#
# @!attribute [rw] search_change_reason
#   @return [String, nil]
#
# @!attribute [rw] search_effective_at
#   @return [Object, nil]
#
# @!attribute [rw] shadow_sample_limit
#   @return [Integer, nil]
#
# @!attribute [rw] task_ttl_hours
#   @return [Integer, nil]
#
# @!attribute [rw] top_comment_analysis_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] writer_model
#   @return [String, nil]
CommentCampaignUpdateData = Struct.new(
  :product_id,
  :account_daily_limit,
  :account_weekly_limit,
  :active_days_per_week,
  :allowlist,
  :analysis_daily_limit,
  :analysis_model,
  :analysis_reservation_usd,
  :approved_markets,
  :brand_forward_enabled,
  :briefs,
  :claims,
  :cohort_removal_threshold,
  :daily_cost_ceiling_usd,
  :delivery_mode,
  :disclosure_mode,
  :disclosure_template,
  :draft_options_count,
  :draft_review_reservation_usd,
  :exceptional_daily_cap_approved,
  :execution_enabled,
  :experiment_styles,
  :inventory_factor,
  :keywords,
  :max_duration_seconds,
  :metadata_pass_rate,
  :min_interval_minutes,
  :mode,
  :monitored_creators,
  :platform,
  :platform_permission_evidence,
  :policy_approved_by,
  :policy_expires_at,
  :policy_version,
  :product_daily_limit,
  :qualification_rate,
  :raw_daily_limit,
  :raw_result_reservation_usd,
  :replies_enabled,
  :reviewer_model,
  :scan_interval_hours,
  :search_change_reason,
  :search_effective_at,
  :shadow_sample_limit,
  :task_ttl_hours,
  :top_comment_analysis_enabled,
  :writer_model,
  keyword_init: true
)

# CompleteChatCheckout entity data model.
#
# @!attribute [rw] message
#   @return [Object, nil]
#
# @!attribute [rw] onboarding_data_id
#   @return [String]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] ready
#   @return [Boolean, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
CompleteChatCheckout = Struct.new(
  :message,
  :onboarding_data_id,
  :product_id,
  :ready,
  :success,
  keyword_init: true
)

# Request payload for CompleteChatCheckout#create.
#
# @!attribute [rw] onboarding_data_id
#   @return [String]
CompleteChatCheckoutCreateData = Struct.new(
  :onboarding_data_id,
  keyword_init: true
)

# CreateBlackoutSora2Video entity data model.
#
# @!attribute [rw] main_prompt
#   @return [String]
#
# @!attribute [rw] media_asset_id
#   @return [String]
#
# @!attribute [rw] product_id
#   @return [String]
#
# @!attribute [rw] requires_polling
#   @return [Boolean, nil]
#
# @!attribute [rw] video
#   @return [Hash]
CreateBlackoutSora2Video = Struct.new(
  :main_prompt,
  :media_asset_id,
  :product_id,
  :requires_polling,
  :video,
  keyword_init: true
)

# Request payload for CreateBlackoutSora2Video#create.
#
# @!attribute [rw] main_prompt
#   @return [String]
#
# @!attribute [rw] media_asset_id
#   @return [String]
#
# @!attribute [rw] product_id
#   @return [String]
CreateBlackoutSora2VideoCreateData = Struct.new(
  :main_prompt,
  :media_asset_id,
  :product_id,
  keyword_init: true
)

# CreateCarousel entity data model.
#
# @!attribute [rw] copy_mode
#   @return [Object, nil]
#
# @!attribute [rw] expected_owner_user_id
#   @return [String, nil]
#
# @!attribute [rw] expected_product_id
#   @return [String, nil]
#
# @!attribute [rw] expected_product_name
#   @return [Object, nil]
#
# @!attribute [rw] image_model
#   @return [String, nil]
#
# @!attribute [rw] mention_product
#   @return [Boolean, nil]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] num_slides
#   @return [Integer, nil]
#
# @!attribute [rw] owner_user_id
#   @return [String, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] product_name
#   @return [Object, nil]
#
# @!attribute [rw] product_placement
#   @return [String, nil]
#
# @!attribute [rw] request_id
#   @return [String, nil]
#
# @!attribute [rw] script_style_custom
#   @return [Object, nil]
#
# @!attribute [rw] script_style_id
#   @return [String, nil]
#
# @!attribute [rw] selected_hook
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] template_id
#   @return [String]
#
# @!attribute [rw] video_id
#   @return [String]
#
# @!attribute [rw] visual_style_custom
#   @return [Object, nil]
#
# @!attribute [rw] visual_style_id
#   @return [String, nil]
CreateCarousel = Struct.new(
  :copy_mode,
  :expected_owner_user_id,
  :expected_product_id,
  :expected_product_name,
  :image_model,
  :mention_product,
  :message,
  :num_slides,
  :owner_user_id,
  :product_id,
  :product_name,
  :product_placement,
  :request_id,
  :script_style_custom,
  :script_style_id,
  :selected_hook,
  :status,
  :success,
  :template_id,
  :video_id,
  :visual_style_custom,
  :visual_style_id,
  keyword_init: true
)

# Request payload for CreateCarousel#create.
#
# @!attribute [rw] copy_mode
#   @return [Object, nil]
#
# @!attribute [rw] expected_owner_user_id
#   @return [String, nil]
#
# @!attribute [rw] expected_product_id
#   @return [String, nil]
#
# @!attribute [rw] expected_product_name
#   @return [Object, nil]
#
# @!attribute [rw] image_model
#   @return [String, nil]
#
# @!attribute [rw] mention_product
#   @return [Boolean, nil]
#
# @!attribute [rw] num_slides
#   @return [Integer, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] product_placement
#   @return [String, nil]
#
# @!attribute [rw] request_id
#   @return [String, nil]
#
# @!attribute [rw] script_style_custom
#   @return [Object, nil]
#
# @!attribute [rw] script_style_id
#   @return [String, nil]
#
# @!attribute [rw] selected_hook
#   @return [Object, nil]
#
# @!attribute [rw] template_id
#   @return [String]
#
# @!attribute [rw] visual_style_custom
#   @return [Object, nil]
#
# @!attribute [rw] visual_style_id
#   @return [String, nil]
CreateCarouselCreateData = Struct.new(
  :copy_mode,
  :expected_owner_user_id,
  :expected_product_id,
  :expected_product_name,
  :image_model,
  :mention_product,
  :num_slides,
  :product_id,
  :product_placement,
  :request_id,
  :script_style_custom,
  :script_style_id,
  :selected_hook,
  :template_id,
  :visual_style_custom,
  :visual_style_id,
  keyword_init: true
)

# CreateProduct entity data model.
#
# @!attribute [rw] onboarding_data_id
#   @return [String]
#
# @!attribute [rw] product_id
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] videos_queued
#   @return [Integer, nil]
CreateProduct = Struct.new(
  :onboarding_data_id,
  :product_id,
  :success,
  :videos_queued,
  keyword_init: true
)

# Request payload for CreateProduct#create.
#
# @!attribute [rw] onboarding_data_id
#   @return [String]
CreateProductCreateData = Struct.new(
  :onboarding_data_id,
  keyword_init: true
)

# CreateResetProductV6 entity data model.
#
# @!attribute [rw] agents_transferred
#   @return [Integer]
#
# @!attribute [rw] credits_deducted
#   @return [Integer]
#
# @!attribute [rw] onboarding_data_id
#   @return [String]
#
# @!attribute [rw] product_id
#   @return [String]
#
# @!attribute [rw] remaining_credits
#   @return [Integer]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] videos_queued
#   @return [Integer]
CreateResetProductV6 = Struct.new(
  :agents_transferred,
  :credits_deducted,
  :onboarding_data_id,
  :product_id,
  :remaining_credits,
  :success,
  :videos_queued,
  keyword_init: true
)

# Request payload for CreateResetProductV6#create.
#
# @!attribute [rw] onboarding_data_id
#   @return [String]
CreateResetProductV6CreateData = Struct.new(
  :onboarding_data_id,
  keyword_init: true
)

# CreateSora2Video entity data model.
#
# @!attribute [rw] image_prompt
#   @return [Object, nil]
#
# @!attribute [rw] main_prompt
#   @return [String]
#
# @!attribute [rw] model
#   @return [String, nil]
#
# @!attribute [rw] requires_polling
#   @return [Boolean, nil]
#
# @!attribute [rw] seconds
#   @return [String, nil]
#
# @!attribute [rw] size
#   @return [String, nil]
#
# @!attribute [rw] video
#   @return [Hash]
CreateSora2Video = Struct.new(
  :image_prompt,
  :main_prompt,
  :model,
  :requires_polling,
  :seconds,
  :size,
  :video,
  keyword_init: true
)

# Request payload for CreateSora2Video#create.
#
# @!attribute [rw] image_prompt
#   @return [Object, nil]
#
# @!attribute [rw] main_prompt
#   @return [String]
#
# @!attribute [rw] model
#   @return [String, nil]
#
# @!attribute [rw] seconds
#   @return [String, nil]
#
# @!attribute [rw] size
#   @return [String, nil]
CreateSora2VideoCreateData = Struct.new(
  :image_prompt,
  :main_prompt,
  :model,
  :seconds,
  :size,
  keyword_init: true
)

# CreateVariation entity data model.
#
# @!attribute [rw] hook_duration
#   @return [Integer]
#
# @!attribute [rw] media_asset_id
#   @return [String]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] product_id
#   @return [String]
#
# @!attribute [rw] prompt
#   @return [String]
#
# @!attribute [rw] task_id
#   @return [String, nil]
#
# @!attribute [rw] video_id
#   @return [String]
CreateVariation = Struct.new(
  :hook_duration,
  :media_asset_id,
  :message,
  :product_id,
  :prompt,
  :task_id,
  :video_id,
  keyword_init: true
)

# Request payload for CreateVariation#create.
#
# @!attribute [rw] hook_duration
#   @return [Integer]
#
# @!attribute [rw] media_asset_id
#   @return [String]
#
# @!attribute [rw] product_id
#   @return [String]
#
# @!attribute [rw] prompt
#   @return [String]
CreateVariationCreateData = Struct.new(
  :hook_duration,
  :media_asset_id,
  :product_id,
  :prompt,
  keyword_init: true
)

# Customer entity data model.
#
# @!attribute [rw] account_type
#   @return [Object, nil]
#
# @!attribute [rw] assigned_agents_count
#   @return [Integer]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] is_migrated
#   @return [Boolean, nil]
Customer = Struct.new(
  :account_type,
  :assigned_agents_count,
  :email,
  :id,
  :is_migrated,
  keyword_init: true
)

# Request payload for Customer#list.
#
# @!attribute [rw] account_type
#   @return [Object, nil]
#
# @!attribute [rw] assigned_agents_count
#   @return [Integer, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_migrated
#   @return [Boolean, nil]
CustomerListMatch = Struct.new(
  :account_type,
  :assigned_agents_count,
  :email,
  :id,
  :is_migrated,
  keyword_init: true
)

# CustomerHealth entity data model.
#
# @!attribute [rw] assigned_agents
#   @return [Hash]
#
# @!attribute [rw] available_dates
#   @return [Array]
#
# @!attribute [rw] date
#   @return [String]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] entries
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] performance_overview
#   @return [Hash]
#
# @!attribute [rw] platform_coverage_summary
#   @return [Hash]
#
# @!attribute [rw] user_id
#   @return [String]
CustomerHealth = Struct.new(
  :assigned_agents,
  :available_dates,
  :date,
  :email,
  :entries,
  :id,
  :performance_overview,
  :platform_coverage_summary,
  :user_id,
  keyword_init: true
)

# Request payload for CustomerHealth#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] date
#   @return [Object, nil]
CustomerHealthLoadMatch = Struct.new(
  :id,
  :date,
  keyword_init: true
)

# CustomerHealthAllCustomersItem entity data model.
#
# @!attribute [rw] account_type
#   @return [Object, nil]
#
# @!attribute [rw] assigned_agents_count
#   @return [Integer]
#
# @!attribute [rw] daily_stats
#   @return [Array]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] is_migrated
#   @return [Boolean, nil]
#
# @!attribute [rw] total_views
#   @return [Integer]
#
# @!attribute [rw] user_id
#   @return [String]
CustomerHealthAllCustomersItem = Struct.new(
  :account_type,
  :assigned_agents_count,
  :daily_stats,
  :email,
  :is_migrated,
  :total_views,
  :user_id,
  keyword_init: true
)

# Request payload for CustomerHealthAllCustomersItem#list.
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
CustomerHealthAllCustomersItemListMatch = Struct.new(
  :limit,
  :offset,
  keyword_init: true
)

# CustomerHealthViewsSummary entity data model.
#
# @!attribute [rw] average_views_per_result
#   @return [Integer]
#
# @!attribute [rw] date
#   @return [String]
#
# @!attribute [rw] end_date
#   @return [Object, nil]
#
# @!attribute [rw] paid_users_count
#   @return [Integer]
#
# @!attribute [rw] posted_results
#   @return [Integer]
#
# @!attribute [rw] range
#   @return [String]
#
# @!attribute [rw] start_date
#   @return [Object, nil]
#
# @!attribute [rw] top_users
#   @return [Array]
#
# @!attribute [rw] total_views
#   @return [Integer]
#
# @!attribute [rw] trend
#   @return [Array]
#
# @!attribute [rw] trend_granularity
#   @return [String]
#
# @!attribute [rw] user_email
#   @return [Object, nil]
#
# @!attribute [rw] user_id
#   @return [String, nil]
#
# @!attribute [rw] users_with_views
#   @return [Integer]
CustomerHealthViewsSummary = Struct.new(
  :average_views_per_result,
  :date,
  :end_date,
  :paid_users_count,
  :posted_results,
  :range,
  :start_date,
  :top_users,
  :total_views,
  :trend,
  :trend_granularity,
  :user_email,
  :user_id,
  :users_with_views,
  keyword_init: true
)

# Request payload for CustomerHealthViewsSummary#list.
#
# @!attribute [rw] date
#   @return [Object, nil]
#
# @!attribute [rw] range
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [String, nil]
CustomerHealthViewsSummaryListMatch = Struct.new(
  :date,
  :range,
  :user_id,
  keyword_init: true
)

# Daily entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Daily = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Daily#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] day
#   @return [String]
DailyCreateData = Struct.new(
  :id,
  :day,
  keyword_init: true
)

# DailyStatus entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
DailyStatus = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for DailyStatus#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] day
#   @return [String]
DailyStatusLoadMatch = Struct.new(
  :id,
  :day,
  keyword_init: true
)

# DedicatedAgentsDashboard entity data model.
#
# @!attribute [rw] active_connections
#   @return [Integer]
#
# @!attribute [rw] assigned_user_id
#   @return [String, nil]
#
# @!attribute [rw] assigned_user_ids
#   @return [Array, nil]
#
# @!attribute [rw] bio
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] instagram_url
#   @return [Object, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean]
#
# @!attribute [rw] last_admin_synced_at
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] role
#   @return [Object]
#
# @!attribute [rw] tiktok_stats
#   @return [Object, nil]
#
# @!attribute [rw] tiktok_url
#   @return [Object, nil]
#
# @!attribute [rw] today_failed_entries
#   @return [Array, nil]
#
# @!attribute [rw] today_stats
#   @return [Hash]
#
# @!attribute [rw] upload_post_platforms
#   @return [Object, nil]
#
# @!attribute [rw] upload_post_profile
#   @return [Object, nil]
#
# @!attribute [rw] yesterday_failed_entries
#   @return [Array, nil]
#
# @!attribute [rw] yesterday_stats
#   @return [Hash]
#
# @!attribute [rw] youtube_url
#   @return [Object, nil]
DedicatedAgentsDashboard = Struct.new(
  :active_connections,
  :assigned_user_id,
  :assigned_user_ids,
  :bio,
  :id,
  :instagram_url,
  :is_active,
  :last_admin_synced_at,
  :name,
  :role,
  :tiktok_stats,
  :tiktok_url,
  :today_failed_entries,
  :today_stats,
  :upload_post_platforms,
  :upload_post_profile,
  :yesterday_failed_entries,
  :yesterday_stats,
  :youtube_url,
  keyword_init: true
)

# Request payload for DedicatedAgentsDashboard#list.
#
# @!attribute [rw] active_connections
#   @return [Integer, nil]
#
# @!attribute [rw] assigned_user_id
#   @return [String, nil]
#
# @!attribute [rw] assigned_user_ids
#   @return [Array, nil]
#
# @!attribute [rw] bio
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] instagram_url
#   @return [Object, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] last_admin_synced_at
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [Object, nil]
#
# @!attribute [rw] tiktok_stats
#   @return [Object, nil]
#
# @!attribute [rw] tiktok_url
#   @return [Object, nil]
#
# @!attribute [rw] today_failed_entries
#   @return [Array, nil]
#
# @!attribute [rw] today_stats
#   @return [Hash, nil]
#
# @!attribute [rw] upload_post_platforms
#   @return [Object, nil]
#
# @!attribute [rw] upload_post_profile
#   @return [Object, nil]
#
# @!attribute [rw] yesterday_failed_entries
#   @return [Array, nil]
#
# @!attribute [rw] yesterday_stats
#   @return [Hash, nil]
#
# @!attribute [rw] youtube_url
#   @return [Object, nil]
DedicatedAgentsDashboardListMatch = Struct.new(
  :active_connections,
  :assigned_user_id,
  :assigned_user_ids,
  :bio,
  :id,
  :instagram_url,
  :is_active,
  :last_admin_synced_at,
  :name,
  :role,
  :tiktok_stats,
  :tiktok_url,
  :today_failed_entries,
  :today_stats,
  :upload_post_platforms,
  :upload_post_profile,
  :yesterday_failed_entries,
  :yesterday_stats,
  :youtube_url,
  keyword_init: true
)

# EnterpriseAgent entity data model.
#
# @!attribute [rw] count
#   @return [Integer]
#
# @!attribute [rw] product_id
#   @return [String]
#
# @!attribute [rw] source_product_id
#   @return [String]
#
# @!attribute [rw] target_product_id
#   @return [String]
EnterpriseAgent = Struct.new(
  :count,
  :product_id,
  :source_product_id,
  :target_product_id,
  keyword_init: true
)

# Request payload for EnterpriseAgent#load.
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] source_product_id
#   @return [String, nil]
#
# @!attribute [rw] target_product_id
#   @return [String, nil]
EnterpriseAgentLoadMatch = Struct.new(
  :count,
  :product_id,
  :source_product_id,
  :target_product_id,
  keyword_init: true
)

# Request payload for EnterpriseAgent#create.
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] product_id
#   @return [String]
#
# @!attribute [rw] source_product_id
#   @return [String]
#
# @!attribute [rw] target_product_id
#   @return [String]
EnterpriseAgentCreateData = Struct.new(
  :count,
  :product_id,
  :source_product_id,
  :target_product_id,
  keyword_init: true
)

# EnterpriseProduct entity data model.
class EnterpriseProduct
end

# Request payload for EnterpriseProduct#load.
#
# @!attribute [rw] product_id
#   @return [String]
EnterpriseProductLoadMatch = Struct.new(
  :product_id,
  keyword_init: true
)

# ExactAvailability entity data model.
class ExactAvailability
end

# Request payload for ExactAvailability#load.
class ExactAvailabilityLoadMatch
end

# ExactFormula entity data model.
class ExactFormula
end

# Request payload for ExactFormula#load.
class ExactFormulaLoadMatch
end

# ExtractV2 entity data model.
#
# @!attribute [rw] instagram_username
#   @return [Object, nil]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
ExtractV2 = Struct.new(
  :instagram_username,
  :message,
  :status,
  :url,
  keyword_init: true
)

# Request payload for ExtractV2#create.
#
# @!attribute [rw] instagram_username
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String]
ExtractV2CreateData = Struct.new(
  :instagram_username,
  :url,
  keyword_init: true
)

# FailedPost entity data model.
#
# @!attribute [rw] agent_id
#   @return [String]
#
# @!attribute [rw] agent_name
#   @return [Object]
#
# @!attribute [rw] agent_platforms
#   @return [Object]
#
# @!attribute [rw] error_message
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] product_id
#   @return [String]
#
# @!attribute [rw] results
#   @return [Object]
#
# @!attribute [rw] scheduled_datetime
#   @return [String]
#
# @!attribute [rw] source_type
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] user_email
#   @return [String]
#
# @!attribute [rw] user_id
#   @return [String]
#
# @!attribute [rw] user_name
#   @return [Object]
#
# @!attribute [rw] video_id
#   @return [String]
#
# @!attribute [rw] video_url
#   @return [Object]
FailedPost = Struct.new(
  :agent_id,
  :agent_name,
  :agent_platforms,
  :error_message,
  :id,
  :product_id,
  :results,
  :scheduled_datetime,
  :source_type,
  :status,
  :user_email,
  :user_id,
  :user_name,
  :video_id,
  :video_url,
  keyword_init: true
)

# Request payload for FailedPost#list.
#
# @!attribute [rw] day
#   @return [String, nil]
FailedPostListMatch = Struct.new(
  :day,
  keyword_init: true
)

# File entity data model.
#
# @!attribute [rw] file
#   @return [String]
FileType = Struct.new(
  :file,
  keyword_init: true
)

# Request payload for File#create.
#
# @!attribute [rw] file
#   @return [String]
FileCreateData = Struct.new(
  :file,
  keyword_init: true
)

# GenerateBlackoutSora2Prompt entity data model.
#
# @!attribute [rw] media_asset_id
#   @return [String]
#
# @!attribute [rw] product_id
#   @return [String]
#
# @!attribute [rw] prompt
#   @return [String]
GenerateBlackoutSora2Prompt = Struct.new(
  :media_asset_id,
  :product_id,
  :prompt,
  keyword_init: true
)

# Request payload for GenerateBlackoutSora2Prompt#create.
#
# @!attribute [rw] media_asset_id
#   @return [String]
#
# @!attribute [rw] product_id
#   @return [String]
GenerateBlackoutSora2PromptCreateData = Struct.new(
  :media_asset_id,
  :product_id,
  keyword_init: true
)

# GeneratePomelliDemo entity data model.
#
# @!attribute [rw] current_demo_count
#   @return [Integer]
#
# @!attribute [rw] max_demos
#   @return [Integer, nil]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] product_id
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
GeneratePomelliDemo = Struct.new(
  :current_demo_count,
  :max_demos,
  :message,
  :product_id,
  :success,
  keyword_init: true
)

# Request payload for GeneratePomelliDemo#create.
#
# @!attribute [rw] product_id
#   @return [String]
GeneratePomelliDemoCreateData = Struct.new(
  :product_id,
  keyword_init: true
)

# GeneratePrompt entity data model.
#
# @!attribute [rw] hook_duration
#   @return [Integer]
#
# @!attribute [rw] media_asset_id
#   @return [String]
#
# @!attribute [rw] media_asset_url
#   @return [String]
#
# @!attribute [rw] prompt
#   @return [String]
GeneratePrompt = Struct.new(
  :hook_duration,
  :media_asset_id,
  :media_asset_url,
  :prompt,
  keyword_init: true
)

# Request payload for GeneratePrompt#create.
#
# @!attribute [rw] media_asset_id
#   @return [String]
GeneratePromptCreateData = Struct.new(
  :media_asset_id,
  keyword_init: true
)

# GenerateSora2Prompt entity data model.
#
# @!attribute [rw] prompt
#   @return [String]
GenerateSora2Prompt = Struct.new(
  :prompt,
  keyword_init: true
)

# Request payload for GenerateSora2Prompt#load.
#
# @!attribute [rw] prompt
#   @return [String, nil]
GenerateSora2PromptLoadMatch = Struct.new(
  :prompt,
  keyword_init: true
)

# Healthrx entity data model.
#
# @!attribute [rw] account_id
#   @return [String, nil]
#
# @!attribute [rw] action
#   @return [String, nil]
#
# @!attribute [rw] agent_id
#   @return [String]
#
# @!attribute [rw] attempt
#   @return [Integer]
#
# @!attribute [rw] avatar_present
#   @return [Boolean, nil]
#
# @!attribute [rw] benchmark_set
#   @return [String]
#
# @!attribute [rw] commercial
#   @return [Boolean, nil]
#
# @!attribute [rw] commercial_license_evidence
#   @return [String]
#
# @!attribute [rw] content_id
#   @return [String]
#
# @!attribute [rw] dimensions
#   @return [Hash]
#
# @!attribute [rw] duration_seconds
#   @return [Integer, nil]
#
# @!attribute [rw] evidence
#   @return [String]
#
# @!attribute [rw] evidence_urls
#   @return [Array]
#
# @!attribute [rw] external_key
#   @return [String]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] includes_all_attempt_costs
#   @return [Boolean, nil]
#
# @!attribute [rw] input_specification
#   @return [Hash]
#
# @!attribute [rw] kind
#   @return [String]
#
# @!attribute [rw] level
#   @return [Integer, nil]
#
# @!attribute [rw] measured_at
#   @return [String]
#
# @!attribute [rw] model_version
#   @return [String]
#
# @!attribute [rw] paid_campaign_id
#   @return [String, nil]
#
# @!attribute [rw] parent_content_id
#   @return [String, nil]
#
# @!attribute [rw] paused
#   @return [Boolean]
#
# @!attribute [rw] pillar
#   @return [String]
#
# @!attribute [rw] profile
#   @return [Hash]
#
# @!attribute [rw] promotion_evidence
#   @return [String, nil]
#
# @!attribute [rw] provider
#   @return [String]
#
# @!attribute [rw] provider_invoice_evidence
#   @return [String]
#
# @!attribute [rw] reason
#   @return [String]
#
# @!attribute [rw] reference_version
#   @return [String]
#
# @!attribute [rw] request_key
#   @return [String]
#
# @!attribute [rw] scope
#   @return [String, nil]
#
# @!attribute [rw] test_variable
#   @return [String]
#
# @!attribute [rw] topic
#   @return [String]
#
# @!attribute [rw] total_cost_usd
#   @return [Float]
Healthrx = Struct.new(
  :account_id,
  :action,
  :agent_id,
  :attempt,
  :avatar_present,
  :benchmark_set,
  :commercial,
  :commercial_license_evidence,
  :content_id,
  :dimensions,
  :duration_seconds,
  :evidence,
  :evidence_urls,
  :external_key,
  :format,
  :includes_all_attempt_costs,
  :input_specification,
  :kind,
  :level,
  :measured_at,
  :model_version,
  :paid_campaign_id,
  :parent_content_id,
  :paused,
  :pillar,
  :profile,
  :promotion_evidence,
  :provider,
  :provider_invoice_evidence,
  :reason,
  :reference_version,
  :request_key,
  :scope,
  :test_variable,
  :topic,
  :total_cost_usd,
  keyword_init: true
)

# Request payload for Healthrx#load.
#
# @!attribute [rw] account_id
#   @return [String, nil]
#
# @!attribute [rw] product_id
#   @return [String]
HealthrxLoadMatch = Struct.new(
  :account_id,
  :product_id,
  keyword_init: true
)

# Request payload for Healthrx#create.
#
# @!attribute [rw] account_id
#   @return [String, nil]
#
# @!attribute [rw] product_id
#   @return [String]
#
# @!attribute [rw] content_id
#   @return [String, nil]
#
# @!attribute [rw] incident_id
#   @return [String, nil]
#
# @!attribute [rw] action
#   @return [String, nil]
#
# @!attribute [rw] agent_id
#   @return [String]
#
# @!attribute [rw] attempt
#   @return [Integer]
#
# @!attribute [rw] avatar_present
#   @return [Boolean, nil]
#
# @!attribute [rw] benchmark_set
#   @return [String]
#
# @!attribute [rw] commercial
#   @return [Boolean, nil]
#
# @!attribute [rw] commercial_license_evidence
#   @return [String]
#
# @!attribute [rw] dimensions
#   @return [Hash]
#
# @!attribute [rw] duration_seconds
#   @return [Integer, nil]
#
# @!attribute [rw] evidence
#   @return [String]
#
# @!attribute [rw] evidence_urls
#   @return [Array]
#
# @!attribute [rw] external_key
#   @return [String]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] includes_all_attempt_costs
#   @return [Boolean, nil]
#
# @!attribute [rw] input_specification
#   @return [Hash]
#
# @!attribute [rw] kind
#   @return [String]
#
# @!attribute [rw] level
#   @return [Integer, nil]
#
# @!attribute [rw] measured_at
#   @return [String]
#
# @!attribute [rw] model_version
#   @return [String]
#
# @!attribute [rw] paid_campaign_id
#   @return [String, nil]
#
# @!attribute [rw] parent_content_id
#   @return [String, nil]
#
# @!attribute [rw] paused
#   @return [Boolean]
#
# @!attribute [rw] pillar
#   @return [String]
#
# @!attribute [rw] profile
#   @return [Hash]
#
# @!attribute [rw] promotion_evidence
#   @return [String, nil]
#
# @!attribute [rw] provider
#   @return [String]
#
# @!attribute [rw] provider_invoice_evidence
#   @return [String]
#
# @!attribute [rw] reason
#   @return [String]
#
# @!attribute [rw] reference_version
#   @return [String]
#
# @!attribute [rw] request_key
#   @return [String]
#
# @!attribute [rw] scope
#   @return [String, nil]
#
# @!attribute [rw] test_variable
#   @return [String]
#
# @!attribute [rw] topic
#   @return [String]
#
# @!attribute [rw] total_cost_usd
#   @return [Float]
HealthrxCreateData = Struct.new(
  :account_id,
  :product_id,
  :content_id,
  :incident_id,
  :action,
  :agent_id,
  :attempt,
  :avatar_present,
  :benchmark_set,
  :commercial,
  :commercial_license_evidence,
  :dimensions,
  :duration_seconds,
  :evidence,
  :evidence_urls,
  :external_key,
  :format,
  :includes_all_attempt_costs,
  :input_specification,
  :kind,
  :level,
  :measured_at,
  :model_version,
  :paid_campaign_id,
  :parent_content_id,
  :paused,
  :pillar,
  :profile,
  :promotion_evidence,
  :provider,
  :provider_invoice_evidence,
  :reason,
  :reference_version,
  :request_key,
  :scope,
  :test_variable,
  :topic,
  :total_cost_usd,
  keyword_init: true
)

# InitResetProductV6 entity data model.
#
# @!attribute [rw] auto_schedule_disabled
#   @return [Boolean]
#
# @!attribute [rw] old_product_id
#   @return [String]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] queue_entries_cleared
#   @return [Integer]
#
# @!attribute [rw] success
#   @return [Boolean]
InitResetProductV6 = Struct.new(
  :auto_schedule_disabled,
  :old_product_id,
  :product_id,
  :queue_entries_cleared,
  :success,
  keyword_init: true
)

# Request payload for InitResetProductV6#create.
#
# @!attribute [rw] product_id
#   @return [String, nil]
InitResetProductV6CreateData = Struct.new(
  :product_id,
  keyword_init: true
)

# Iri entity data model.
#
# @!attribute [rw] correlationId
#   @return [Object, nil]
#
# @!attribute [rw] idempotencyKey
#   @return [String]
#
# @!attribute [rw] productId
#   @return [Object, nil]
Iri = Struct.new(
  :correlationId,
  :idempotencyKey,
  :productId,
  keyword_init: true
)

# Request payload for Iri#create.
#
# @!attribute [rw] connector_id
#   @return [String]
#
# @!attribute [rw] correlationId
#   @return [Object, nil]
#
# @!attribute [rw] idempotencyKey
#   @return [String]
#
# @!attribute [rw] productId
#   @return [Object, nil]
IriCreateData = Struct.new(
  :connector_id,
  :correlationId,
  :idempotencyKey,
  :productId,
  keyword_init: true
)

# IrisCapability entity data model.
#
# @!attribute [rw] capability
#   @return [String]
#
# @!attribute [rw] correlationId
#   @return [String]
#
# @!attribute [rw] errorCode
#   @return [Object, nil]
#
# @!attribute [rw] externalProductId
#   @return [Object, nil]
#
# @!attribute [rw] externalUserId
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] idempotencyKey
#   @return [String]
#
# @!attribute [rw] input
#   @return [Hash, nil]
#
# @!attribute [rw] membershipId
#   @return [Object, nil]
#
# @!attribute [rw] message
#   @return [Object, nil]
#
# @!attribute [rw] ok
#   @return [Boolean]
#
# @!attribute [rw] platformAccountId
#   @return [Object, nil]
#
# @!attribute [rw] platformLinkId
#   @return [Object, nil]
#
# @!attribute [rw] productScope
#   @return [String]
#
# @!attribute [rw] requestedBy
#   @return [Hash, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] retryable
#   @return [Boolean, nil]
IrisCapability = Struct.new(
  :capability,
  :correlationId,
  :errorCode,
  :externalProductId,
  :externalUserId,
  :id,
  :idempotencyKey,
  :input,
  :membershipId,
  :message,
  :ok,
  :platformAccountId,
  :platformLinkId,
  :productScope,
  :requestedBy,
  :result,
  :retryable,
  keyword_init: true
)

# Request payload for IrisCapability#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] capability
#   @return [String]
#
# @!attribute [rw] correlationId
#   @return [String]
#
# @!attribute [rw] externalProductId
#   @return [Object, nil]
#
# @!attribute [rw] externalUserId
#   @return [String]
#
# @!attribute [rw] idempotencyKey
#   @return [String]
#
# @!attribute [rw] input
#   @return [Hash, nil]
#
# @!attribute [rw] membershipId
#   @return [Object, nil]
#
# @!attribute [rw] platformAccountId
#   @return [Object, nil]
#
# @!attribute [rw] platformLinkId
#   @return [Object, nil]
#
# @!attribute [rw] productScope
#   @return [String]
#
# @!attribute [rw] requestedBy
#   @return [Hash, nil]
IrisCapabilityCreateData = Struct.new(
  :id,
  :capability,
  :correlationId,
  :externalProductId,
  :externalUserId,
  :idempotencyKey,
  :input,
  :membershipId,
  :platformAccountId,
  :platformLinkId,
  :productScope,
  :requestedBy,
  keyword_init: true
)

# IrisChat entity data model.
#
# @!attribute [rw] artifacts
#   @return [Array, nil]
#
# @!attribute [rw] correlationId
#   @return [String]
#
# @!attribute [rw] idempotencyKey
#   @return [String]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] mode
#   @return [String]
#
# @!attribute [rw] ok
#   @return [Boolean, nil]
#
# @!attribute [rw] pageContext
#   @return [Hash, nil]
#
# @!attribute [rw] productId
#   @return [Object, nil]
#
# @!attribute [rw] runtimeStatus
#   @return [String]
#
# @!attribute [rw] sessionId
#   @return [Object, nil]
IrisChat = Struct.new(
  :artifacts,
  :correlationId,
  :idempotencyKey,
  :message,
  :mode,
  :ok,
  :pageContext,
  :productId,
  :runtimeStatus,
  :sessionId,
  keyword_init: true
)

# Request payload for IrisChat#create.
#
# @!attribute [rw] correlationId
#   @return [String]
#
# @!attribute [rw] idempotencyKey
#   @return [String]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] pageContext
#   @return [Hash, nil]
#
# @!attribute [rw] productId
#   @return [Object, nil]
#
# @!attribute [rw] sessionId
#   @return [Object, nil]
IrisChatCreateData = Struct.new(
  :correlationId,
  :idempotencyKey,
  :message,
  :pageContext,
  :productId,
  :sessionId,
  keyword_init: true
)

# IrisConnector entity data model.
#
# @!attribute [rw] connectors
#   @return [Array, nil]
IrisConnector = Struct.new(
  :connectors,
  keyword_init: true
)

# Request payload for IrisConnector#list.
#
# @!attribute [rw] connectors
#   @return [Array, nil]
IrisConnectorListMatch = Struct.new(
  :connectors,
  keyword_init: true
)

# IrisStatus entity data model.
#
# @!attribute [rw] connectorsPreview
#   @return [Array, nil]
#
# @!attribute [rw] product
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [Hash]
#
# @!attribute [rw] tasksPreview
#   @return [Array, nil]
IrisStatus = Struct.new(
  :connectorsPreview,
  :product,
  :status,
  :tasksPreview,
  keyword_init: true
)

# Request payload for IrisStatus#list.
#
# @!attribute [rw] product_id
#   @return [String, nil]
IrisStatusListMatch = Struct.new(
  :product_id,
  keyword_init: true
)

# IrisTask entity data model.
#
# @!attribute [rw] approvalRequired
#   @return [Boolean, nil]
#
# @!attribute [rw] cadence
#   @return [String, nil]
#
# @!attribute [rw] capability
#   @return [Object, nil]
#
# @!attribute [rw] completed
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] discover
#   @return [Array, nil]
#
# @!attribute [rw] productId
#   @return [Object, nil]
#
# @!attribute [rw] recurring
#   @return [Array, nil]
#
# @!attribute [rw] requiredConnectors
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String]
IrisTask = Struct.new(
  :approvalRequired,
  :cadence,
  :capability,
  :completed,
  :description,
  :discover,
  :productId,
  :recurring,
  :requiredConnectors,
  :title,
  keyword_init: true
)

# Request payload for IrisTask#list.
#
# @!attribute [rw] product_id
#   @return [String, nil]
IrisTaskListMatch = Struct.new(
  :product_id,
  keyword_init: true
)

# Request payload for IrisTask#create.
#
# @!attribute [rw] approvalRequired
#   @return [Boolean, nil]
#
# @!attribute [rw] cadence
#   @return [String, nil]
#
# @!attribute [rw] capability
#   @return [Object, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] productId
#   @return [Object, nil]
#
# @!attribute [rw] requiredConnectors
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String]
IrisTaskCreateData = Struct.new(
  :approvalRequired,
  :cadence,
  :capability,
  :description,
  :productId,
  :requiredConnectors,
  :title,
  keyword_init: true
)

# IrisUsage entity data model.
#
# @!attribute [rw] eventCount
#   @return [Integer, nil]
#
# @!attribute [rw] events
#   @return [Array, nil]
#
# @!attribute [rw] membershipId
#   @return [Object, nil]
#
# @!attribute [rw] productScope
#   @return [String, nil]
IrisUsage = Struct.new(
  :eventCount,
  :events,
  :membershipId,
  :productScope,
  keyword_init: true
)

# Request payload for IrisUsage#list.
#
# @!attribute [rw] eventCount
#   @return [Integer, nil]
#
# @!attribute [rw] events
#   @return [Array, nil]
#
# @!attribute [rw] membershipId
#   @return [Object, nil]
#
# @!attribute [rw] productScope
#   @return [String, nil]
IrisUsageListMatch = Struct.new(
  :eventCount,
  :events,
  :membershipId,
  :productScope,
  keyword_init: true
)

# Landing entity data model.
#
# @!attribute [rw] file
#   @return [String]
Landing = Struct.new(
  :file,
  keyword_init: true
)

# Request payload for Landing#create.
#
# @!attribute [rw] index
#   @return [Integer]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] file
#   @return [String]
LandingCreateData = Struct.new(
  :index,
  :product_id,
  :file,
  keyword_init: true
)

# LandingStat entity data model.
#
# @!attribute [rw] landing
#   @return [Hash]
#
# @!attribute [rw] microhub
#   @return [Hash]
LandingStat = Struct.new(
  :landing,
  :microhub,
  keyword_init: true
)

# Request payload for LandingStat#load.
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] product_id
#   @return [String, nil]
LandingStatLoadMatch = Struct.new(
  :slug,
  :product_id,
  keyword_init: true
)

# LandingStatus entity data model.
#
# @!attribute [rw] errorMessage
#   @return [Object, nil]
#
# @!attribute [rw] landingStatus
#   @return [String]
#
# @!attribute [rw] microhubStatus
#   @return [String]
LandingStatus = Struct.new(
  :errorMessage,
  :landingStatus,
  :microhubStatus,
  keyword_init: true
)

# Request payload for LandingStatus#load.
#
# @!attribute [rw] product_id
#   @return [String, nil]
LandingStatusLoadMatch = Struct.new(
  :product_id,
  keyword_init: true
)

# LinkInBio entity data model.
#
# @!attribute [rw] linkInBioType
#   @return [String]
#
# @!attribute [rw] redirectUrl
#   @return [String]
#
# @!attribute [rw] slug
#   @return [String]
LinkInBio = Struct.new(
  :linkInBioType,
  :redirectUrl,
  :slug,
  keyword_init: true
)

# Request payload for LinkInBio#load.
#
# @!attribute [rw] slug
#   @return [String]
LinkInBioLoadMatch = Struct.new(
  :slug,
  keyword_init: true
)

# LinkInDm entity data model.
#
# @!attribute [rw] linkInDmsType
#   @return [String]
#
# @!attribute [rw] redirectUrl
#   @return [String]
#
# @!attribute [rw] slug
#   @return [String]
LinkInDm = Struct.new(
  :linkInDmsType,
  :redirectUrl,
  :slug,
  keyword_init: true
)

# Request payload for LinkInDm#load.
#
# @!attribute [rw] slug
#   @return [String]
LinkInDmLoadMatch = Struct.new(
  :slug,
  keyword_init: true
)

# LinkInPost entity data model.
#
# @!attribute [rw] linkInPostsType
#   @return [String]
#
# @!attribute [rw] redirectUrl
#   @return [String]
#
# @!attribute [rw] showLinkInFirstComment
#   @return [Boolean]
#
# @!attribute [rw] slug
#   @return [String]
LinkInPost = Struct.new(
  :linkInPostsType,
  :redirectUrl,
  :showLinkInFirstComment,
  :slug,
  keyword_init: true
)

# Request payload for LinkInPost#load.
#
# @!attribute [rw] slug
#   @return [String]
LinkInPostLoadMatch = Struct.new(
  :slug,
  keyword_init: true
)

# LinkUser entity data model.
#
# @!attribute [rw] already_linked
#   @return [Boolean, nil]
#
# @!attribute [rw] onboarding_data_id
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
LinkUser = Struct.new(
  :already_linked,
  :onboarding_data_id,
  :success,
  keyword_init: true
)

# Request payload for LinkUser#create.
#
# @!attribute [rw] onboarding_data_id
#   @return [String]
LinkUserCreateData = Struct.new(
  :onboarding_data_id,
  keyword_init: true
)

# MediaAsset entity data model.
#
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] file
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] media_assets
#   @return [Array]
#
# @!attribute [rw] onboardingDataId
#   @return [Object, nil]
#
# @!attribute [rw] onboarding_data_id
#   @return [String]
#
# @!attribute [rw] productId
#   @return [Object, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] usedAt
#   @return [Object, nil]
#
# @!attribute [rw] veo3VideoId
#   @return [Object, nil]
MediaAsset = Struct.new(
  :category,
  :createdAt,
  :description,
  :file,
  :id,
  :media_assets,
  :onboardingDataId,
  :onboarding_data_id,
  :productId,
  :product_id,
  :source,
  :type,
  :updatedAt,
  :url,
  :usedAt,
  :veo3VideoId,
  keyword_init: true
)

# Request payload for MediaAsset#load.
#
# @!attribute [rw] id
#   @return [String]
MediaAssetLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for MediaAsset#create.
#
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] file
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] media_assets
#   @return [Array]
#
# @!attribute [rw] onboardingDataId
#   @return [Object, nil]
#
# @!attribute [rw] onboarding_data_id
#   @return [String]
#
# @!attribute [rw] productId
#   @return [Object, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] usedAt
#   @return [Object, nil]
#
# @!attribute [rw] veo3VideoId
#   @return [Object, nil]
MediaAssetCreateData = Struct.new(
  :category,
  :createdAt,
  :description,
  :file,
  :id,
  :media_assets,
  :onboardingDataId,
  :onboarding_data_id,
  :productId,
  :product_id,
  :source,
  :type,
  :updatedAt,
  :url,
  :usedAt,
  :veo3VideoId,
  keyword_init: true
)

# Men entity data model.
class Men
end

# Request payload for Men#list.
#
# @!attribute [rw] bookmarked
#   @return [Object, nil]
#
# @!attribute [rw] category
#   @return [Object, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
MenListMatch = Struct.new(
  :bookmarked,
  :category,
  :limit,
  :offset,
  :product_id,
  keyword_init: true
)

# Microdrama entity data model.
#
# @!attribute [rw] evidence
#   @return [Hash]
#
# @!attribute [rw] expected_revision
#   @return [Integer]
#
# @!attribute [rw] idempotency_key
#   @return [String]
#
# @!attribute [rw] issues
#   @return [Array, nil]
#
# @!attribute [rw] reason
#   @return [String]
#
# @!attribute [rw] role
#   @return [String]
#
# @!attribute [rw] scores
#   @return [Hash]
#
# @!attribute [rw] selected_premise_id
#   @return [String, nil]
#
# @!attribute [rw] stage
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] subject_hash
#   @return [String]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] verdict
#   @return [String]
Microdrama = Struct.new(
  :evidence,
  :expected_revision,
  :idempotency_key,
  :issues,
  :reason,
  :role,
  :scores,
  :selected_premise_id,
  :stage,
  :status,
  :subject_hash,
  :title,
  :verdict,
  keyword_init: true
)

# Request payload for Microdrama#load.
#
# @!attribute [rw] episode_id
#   @return [String]
MicrodramaLoadMatch = Struct.new(
  :episode_id,
  keyword_init: true
)

# Request payload for Microdrama#create.
#
# @!attribute [rw] episode_id
#   @return [String]
#
# @!attribute [rw] evidence
#   @return [Hash]
#
# @!attribute [rw] expected_revision
#   @return [Integer]
#
# @!attribute [rw] idempotency_key
#   @return [String]
#
# @!attribute [rw] issues
#   @return [Array, nil]
#
# @!attribute [rw] reason
#   @return [String]
#
# @!attribute [rw] role
#   @return [String]
#
# @!attribute [rw] scores
#   @return [Hash]
#
# @!attribute [rw] selected_premise_id
#   @return [String, nil]
#
# @!attribute [rw] stage
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] subject_hash
#   @return [String]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] verdict
#   @return [String]
MicrodramaCreateData = Struct.new(
  :episode_id,
  :evidence,
  :expected_revision,
  :idempotency_key,
  :issues,
  :reason,
  :role,
  :scores,
  :selected_premise_id,
  :stage,
  :status,
  :subject_hash,
  :title,
  :verdict,
  keyword_init: true
)

# Request payload for Microdrama#update.
#
# @!attribute [rw] episode_id
#   @return [String]
#
# @!attribute [rw] expected_revision
#   @return [Integer, nil]
#
# @!attribute [rw] selected_premise_id
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
MicrodramaUpdateData = Struct.new(
  :episode_id,
  :expected_revision,
  :selected_premise_id,
  :title,
  keyword_init: true
)

# MicrohubPublic entity data model.
#
# @!attribute [rw] bio
#   @return [Object, nil]
#
# @!attribute [rw] ctaButtonText
#   @return [Object, nil]
#
# @!attribute [rw] ctaDescription
#   @return [Object, nil]
#
# @!attribute [rw] ctaLink
#   @return [Object, nil]
#
# @!attribute [rw] ctaTitle
#   @return [Object, nil]
#
# @!attribute [rw] headerImageUrl
#   @return [Object, nil]
#
# @!attribute [rw] links
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] profileImageUrl
#   @return [Object, nil]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] socialLinks
#   @return [Hash, nil]
#
# @!attribute [rw] testimonials
#   @return [Array, nil]
MicrohubPublic = Struct.new(
  :bio,
  :ctaButtonText,
  :ctaDescription,
  :ctaLink,
  :ctaTitle,
  :headerImageUrl,
  :links,
  :name,
  :profileImageUrl,
  :slug,
  :socialLinks,
  :testimonials,
  keyword_init: true
)

# Request payload for MicrohubPublic#load.
#
# @!attribute [rw] slug
#   @return [String]
MicrohubPublicLoadMatch = Struct.new(
  :slug,
  keyword_init: true
)

# OnboardingStatus entity data model.
#
# @!attribute [rw] comments
#   @return [Integer, nil]
#
# @!attribute [rw] cover_image_url
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] likes
#   @return [Integer, nil]
#
# @!attribute [rw] platform
#   @return [String]
#
# @!attribute [rw] video_url
#   @return [Object, nil]
#
# @!attribute [rw] views
#   @return [Integer, nil]
OnboardingStatus = Struct.new(
  :comments,
  :cover_image_url,
  :id,
  :likes,
  :platform,
  :video_url,
  :views,
  keyword_init: true
)

# Request payload for OnboardingStatus#list.
#
# @!attribute [rw] account_type
#   @return [Object, nil]
#
# @!attribute [rw] oid
#   @return [String]
OnboardingStatusListMatch = Struct.new(
  :account_type,
  :oid,
  keyword_init: true
)

# OnboardingV6 entity data model.
class OnboardingV6
end

# Request payload for OnboardingV6#remove.
#
# @!attribute [rw] media_asset_id
#   @return [String]
#
# @!attribute [rw] onboarding_data_id
#   @return [String]
OnboardingV6RemoveMatch = Struct.new(
  :media_asset_id,
  :onboarding_data_id,
  keyword_init: true
)

# PaidUser entity data model.
#
# @!attribute [rw] agents_count
#   @return [Integer]
#
# @!attribute [rw] assigned_agents_count
#   @return [Integer, nil]
#
# @!attribute [rw] auto_schedule_enabled
#   @return [Object]
#
# @!attribute [rw] credits
#   @return [Integer]
#
# @!attribute [rw] effective_agents_count
#   @return [Integer]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] is_internal_user
#   @return [Boolean, nil]
#
# @!attribute [rw] is_migrated_user
#   @return [Boolean, nil]
#
# @!attribute [rw] membership
#   @return [Object]
#
# @!attribute [rw] scheduled_queue_count
#   @return [Integer]
#
# @!attribute [rw] subscription_details
#   @return [Object, nil]
#
# @!attribute [rw] subscription_status
#   @return [Object]
PaidUser = Struct.new(
  :agents_count,
  :assigned_agents_count,
  :auto_schedule_enabled,
  :credits,
  :effective_agents_count,
  :email,
  :id,
  :is_internal_user,
  :is_migrated_user,
  :membership,
  :scheduled_queue_count,
  :subscription_details,
  :subscription_status,
  keyword_init: true
)

# Request payload for PaidUser#list.
#
# @!attribute [rw] agents_count
#   @return [Integer, nil]
#
# @!attribute [rw] assigned_agents_count
#   @return [Integer, nil]
#
# @!attribute [rw] auto_schedule_enabled
#   @return [Object, nil]
#
# @!attribute [rw] credits
#   @return [Integer, nil]
#
# @!attribute [rw] effective_agents_count
#   @return [Integer, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_internal_user
#   @return [Boolean, nil]
#
# @!attribute [rw] is_migrated_user
#   @return [Boolean, nil]
#
# @!attribute [rw] membership
#   @return [Object, nil]
#
# @!attribute [rw] scheduled_queue_count
#   @return [Integer, nil]
#
# @!attribute [rw] subscription_details
#   @return [Object, nil]
#
# @!attribute [rw] subscription_status
#   @return [Object, nil]
PaidUserListMatch = Struct.new(
  :agents_count,
  :assigned_agents_count,
  :auto_schedule_enabled,
  :credits,
  :effective_agents_count,
  :email,
  :id,
  :is_internal_user,
  :is_migrated_user,
  :membership,
  :scheduled_queue_count,
  :subscription_details,
  :subscription_status,
  keyword_init: true
)

# Pexel entity data model.
class Pexel
end

# Request payload for Pexel#list.
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] media_type
#   @return [String, nil]
#
# @!attribute [rw] orientation
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] query
#   @return [String, nil]
PexelListMatch = Struct.new(
  :count,
  :media_type,
  :orientation,
  :page,
  :query,
  keyword_init: true
)

# PhoneAdminAvailableAgentSource entity data model.
#
# @!attribute [rw] available_count
#   @return [Integer]
#
# @!attribute [rw] pc_name
#   @return [String]
PhoneAdminAvailableAgentSource = Struct.new(
  :available_count,
  :pc_name,
  keyword_init: true
)

# Request payload for PhoneAdminAvailableAgentSource#list.
#
# @!attribute [rw] available_count
#   @return [Integer, nil]
#
# @!attribute [rw] pc_name
#   @return [String, nil]
PhoneAdminAvailableAgentSourceListMatch = Struct.new(
  :available_count,
  :pc_name,
  keyword_init: true
)

# Product entity data model.
#
# @!attribute [rw] agent_count
#   @return [Integer]
#
# @!attribute [rw] agents
#   @return [Array]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] demoVideos
#   @return [Object, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] favicon_url
#   @return [Object, nil]
#
# @!attribute [rw] howItWorks
#   @return [Object, nil]
#
# @!attribute [rw] how_it_works
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] images
#   @return [Object, nil]
#
# @!attribute [rw] initial_agents
#   @return [Integer, nil]
#
# @!attribute [rw] instagramHandle
#   @return [Object, nil]
#
# @!attribute [rw] instagram_handle
#   @return [Object, nil]
#
# @!attribute [rw] isActive
#   @return [Object, nil]
#
# @!attribute [rw] isApp
#   @return [Object, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean]
#
# @!attribute [rw] is_app
#   @return [Boolean, nil]
#
# @!attribute [rw] language
#   @return [Object, nil]
#
# @!attribute [rw] mediaAssets
#   @return [Object, nil]
#
# @!attribute [rw] media_asset_ids
#   @return [Object, nil]
#
# @!attribute [rw] media_assets
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] otherInstructions
#   @return [Object, nil]
#
# @!attribute [rw] other_instructions
#   @return [Object, nil]
#
# @!attribute [rw] outroVideo
#   @return [Object, nil]
#
# @!attribute [rw] pexelsVideos
#   @return [Object, nil]
#
# @!attribute [rw] pricing
#   @return [Object, nil]
#
# @!attribute [rw] pricingAndOffers
#   @return [Object, nil]
#
# @!attribute [rw] pricing_and_offers
#   @return [Object, nil]
#
# @!attribute [rw] product_demo_ids
#   @return [Array, nil]
#
# @!attribute [rw] product_details
#   @return [Hash]
#
# @!attribute [rw] product_id
#   @return [String]
#
# @!attribute [rw] product_name
#   @return [String]
#
# @!attribute [rw] product_url
#   @return [String]
#
# @!attribute [rw] pronunciation
#   @return [Object, nil]
#
# @!attribute [rw] regenerate_sora2
#   @return [Boolean, nil]
#
# @!attribute [rw] repostSource
#   @return [Object, nil]
#
# @!attribute [rw] repost_source
#   @return [Object, nil]
#
# @!attribute [rw] screenshot_url
#   @return [Object, nil]
#
# @!attribute [rw] social_post_ids
#   @return [Array, nil]
#
# @!attribute [rw] targetAudience
#   @return [Object, nil]
#
# @!attribute [rw] target_audience
#   @return [Object, nil]
#
# @!attribute [rw] templateProductId
#   @return [Object, nil]
#
# @!attribute [rw] tiktokHandle
#   @return [Object, nil]
#
# @!attribute [rw] tiktok_handle
#   @return [Object, nil]
#
# @!attribute [rw] total_count
#   @return [Integer]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] userId
#   @return [String]
Product = Struct.new(
  :agent_count,
  :agents,
  :createdAt,
  :demoVideos,
  :description,
  :favicon_url,
  :howItWorks,
  :how_it_works,
  :id,
  :images,
  :initial_agents,
  :instagramHandle,
  :instagram_handle,
  :isActive,
  :isApp,
  :is_active,
  :is_app,
  :language,
  :mediaAssets,
  :media_asset_ids,
  :media_assets,
  :name,
  :otherInstructions,
  :other_instructions,
  :outroVideo,
  :pexelsVideos,
  :pricing,
  :pricingAndOffers,
  :pricing_and_offers,
  :product_demo_ids,
  :product_details,
  :product_id,
  :product_name,
  :product_url,
  :pronunciation,
  :regenerate_sora2,
  :repostSource,
  :repost_source,
  :screenshot_url,
  :social_post_ids,
  :targetAudience,
  :target_audience,
  :templateProductId,
  :tiktokHandle,
  :tiktok_handle,
  :total_count,
  :updatedAt,
  :url,
  :userId,
  keyword_init: true
)

# Request payload for Product#load.
#
# @!attribute [rw] id
#   @return [String]
ProductLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Product#list.
#
# @!attribute [rw] agent_count
#   @return [Integer, nil]
#
# @!attribute [rw] agents
#   @return [Array, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] demoVideos
#   @return [Object, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] favicon_url
#   @return [Object, nil]
#
# @!attribute [rw] howItWorks
#   @return [Object, nil]
#
# @!attribute [rw] how_it_works
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] images
#   @return [Object, nil]
#
# @!attribute [rw] initial_agents
#   @return [Integer, nil]
#
# @!attribute [rw] instagramHandle
#   @return [Object, nil]
#
# @!attribute [rw] instagram_handle
#   @return [Object, nil]
#
# @!attribute [rw] isActive
#   @return [Object, nil]
#
# @!attribute [rw] isApp
#   @return [Object, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] is_app
#   @return [Boolean, nil]
#
# @!attribute [rw] language
#   @return [Object, nil]
#
# @!attribute [rw] mediaAssets
#   @return [Object, nil]
#
# @!attribute [rw] media_asset_ids
#   @return [Object, nil]
#
# @!attribute [rw] media_assets
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] otherInstructions
#   @return [Object, nil]
#
# @!attribute [rw] other_instructions
#   @return [Object, nil]
#
# @!attribute [rw] outroVideo
#   @return [Object, nil]
#
# @!attribute [rw] pexelsVideos
#   @return [Object, nil]
#
# @!attribute [rw] pricing
#   @return [Object, nil]
#
# @!attribute [rw] pricingAndOffers
#   @return [Object, nil]
#
# @!attribute [rw] pricing_and_offers
#   @return [Object, nil]
#
# @!attribute [rw] product_demo_ids
#   @return [Array, nil]
#
# @!attribute [rw] product_details
#   @return [Hash, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] product_name
#   @return [String, nil]
#
# @!attribute [rw] product_url
#   @return [String, nil]
#
# @!attribute [rw] pronunciation
#   @return [Object, nil]
#
# @!attribute [rw] regenerate_sora2
#   @return [Boolean, nil]
#
# @!attribute [rw] repostSource
#   @return [Object, nil]
#
# @!attribute [rw] repost_source
#   @return [Object, nil]
#
# @!attribute [rw] screenshot_url
#   @return [Object, nil]
#
# @!attribute [rw] social_post_ids
#   @return [Array, nil]
#
# @!attribute [rw] targetAudience
#   @return [Object, nil]
#
# @!attribute [rw] target_audience
#   @return [Object, nil]
#
# @!attribute [rw] templateProductId
#   @return [Object, nil]
#
# @!attribute [rw] tiktokHandle
#   @return [Object, nil]
#
# @!attribute [rw] tiktok_handle
#   @return [Object, nil]
#
# @!attribute [rw] total_count
#   @return [Integer, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] userId
#   @return [String, nil]
ProductListMatch = Struct.new(
  :agent_count,
  :agents,
  :createdAt,
  :demoVideos,
  :description,
  :favicon_url,
  :howItWorks,
  :how_it_works,
  :id,
  :images,
  :initial_agents,
  :instagramHandle,
  :instagram_handle,
  :isActive,
  :isApp,
  :is_active,
  :is_app,
  :language,
  :mediaAssets,
  :media_asset_ids,
  :media_assets,
  :name,
  :otherInstructions,
  :other_instructions,
  :outroVideo,
  :pexelsVideos,
  :pricing,
  :pricingAndOffers,
  :pricing_and_offers,
  :product_demo_ids,
  :product_details,
  :product_id,
  :product_name,
  :product_url,
  :pronunciation,
  :regenerate_sora2,
  :repostSource,
  :repost_source,
  :screenshot_url,
  :social_post_ids,
  :targetAudience,
  :target_audience,
  :templateProductId,
  :tiktokHandle,
  :tiktok_handle,
  :total_count,
  :updatedAt,
  :url,
  :userId,
  keyword_init: true
)

# Request payload for Product#create.
#
# @!attribute [rw] favicon_url
#   @return [Object, nil]
#
# @!attribute [rw] initial_agents
#   @return [Integer, nil]
#
# @!attribute [rw] product_demo_ids
#   @return [Array, nil]
#
# @!attribute [rw] product_details
#   @return [Hash]
#
# @!attribute [rw] product_url
#   @return [String]
#
# @!attribute [rw] screenshot_url
#   @return [Object, nil]
#
# @!attribute [rw] social_post_ids
#   @return [Array, nil]
ProductCreateData = Struct.new(
  :favicon_url,
  :initial_agents,
  :product_demo_ids,
  :product_details,
  :product_url,
  :screenshot_url,
  :social_post_ids,
  keyword_init: true
)

# Request payload for Product#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] how_it_works
#   @return [Object, nil]
#
# @!attribute [rw] instagram_handle
#   @return [Object, nil]
#
# @!attribute [rw] is_app
#   @return [Boolean, nil]
#
# @!attribute [rw] language
#   @return [Object, nil]
#
# @!attribute [rw] media_asset_ids
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] other_instructions
#   @return [Object, nil]
#
# @!attribute [rw] pricing_and_offers
#   @return [Object, nil]
#
# @!attribute [rw] pronunciation
#   @return [Object, nil]
#
# @!attribute [rw] regenerate_sora2
#   @return [Boolean, nil]
#
# @!attribute [rw] repost_source
#   @return [Object, nil]
#
# @!attribute [rw] target_audience
#   @return [Object, nil]
#
# @!attribute [rw] tiktok_handle
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
ProductUpdateData = Struct.new(
  :id,
  :description,
  :how_it_works,
  :instagram_handle,
  :is_app,
  :language,
  :media_asset_ids,
  :name,
  :other_instructions,
  :pricing_and_offers,
  :pronunciation,
  :regenerate_sora2,
  :repost_source,
  :target_audience,
  :tiktok_handle,
  :url,
  keyword_init: true
)

# Request payload for Product#remove.
#
# @!attribute [rw] id
#   @return [String]
ProductRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# ProductDashboard entity data model.
#
# @!attribute [rw] agents
#   @return [Array]
#
# @!attribute [rw] date
#   @return [String]
#
# @!attribute [rw] pagination
#   @return [Hash]
#
# @!attribute [rw] phone_admin_error
#   @return [Object, nil]
#
# @!attribute [rw] products
#   @return [Array]
#
# @!attribute [rw] selected_product
#   @return [Object]
#
# @!attribute [rw] summary
#   @return [Hash]
ProductDashboard = Struct.new(
  :agents,
  :date,
  :pagination,
  :phone_admin_error,
  :products,
  :selected_product,
  :summary,
  keyword_init: true
)

# Request payload for ProductDashboard#list.
#
# @!attribute [rw] date
#   @return [Object, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] search
#   @return [Object, nil]
ProductDashboardListMatch = Struct.new(
  :date,
  :page,
  :page_size,
  :product_id,
  :search,
  keyword_init: true
)

# ProductDashboardView entity data model.
#
# @!attribute [rw] date
#   @return [String]
#
# @!attribute [rw] views
#   @return [Integer]
ProductDashboardView = Struct.new(
  :date,
  :views,
  keyword_init: true
)

# Request payload for ProductDashboardView#list.
#
# @!attribute [rw] date
#   @return [Object, nil]
#
# @!attribute [rw] product_id
#   @return [String]
#
# @!attribute [rw] range
#   @return [Integer, nil]
ProductDashboardViewListMatch = Struct.new(
  :date,
  :product_id,
  :range,
  keyword_init: true
)

# ProductDemo entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] source
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
ProductDemo = Struct.new(
  :created_at,
  :description,
  :id,
  :source,
  :type,
  :url,
  keyword_init: true
)

# Request payload for ProductDemo#list.
#
# @!attribute [rw] product_id
#   @return [String, nil]
ProductDemoListMatch = Struct.new(
  :product_id,
  keyword_init: true
)

# ProductLanding entity data model.
#
# @!attribute [rw] bio
#   @return [Object, nil]
#
# @!attribute [rw] commentingOnMyPosts
#   @return [Boolean]
#
# @!attribute [rw] commentingOnOthersPosts
#   @return [Boolean]
#
# @!attribute [rw] ctaButtonText
#   @return [Object, nil]
#
# @!attribute [rw] ctaDescription
#   @return [Object, nil]
#
# @!attribute [rw] ctaLink
#   @return [Object, nil]
#
# @!attribute [rw] ctaTitle
#   @return [Object, nil]
#
# @!attribute [rw] dmCommenters
#   @return [Boolean]
#
# @!attribute [rw] dmInitialMessagePrompt
#   @return [Object, nil]
#
# @!attribute [rw] dmOngoingResponsePrompt
#   @return [Object, nil]
#
# @!attribute [rw] firstCommentTextBeforeLink
#   @return [Object, nil]
#
# @!attribute [rw] headerImageUrl
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] landingHtmlUrl
#   @return [Object, nil]
#
# @!attribute [rw] landingLastGeneratedAt
#   @return [Object, nil]
#
# @!attribute [rw] landingReferenceScreenshotUrl
#   @return [Object, nil]
#
# @!attribute [rw] landingScreenshotUrl
#   @return [Object, nil]
#
# @!attribute [rw] landingStatus
#   @return [String]
#
# @!attribute [rw] landingUrl
#   @return [String]
#
# @!attribute [rw] linkInBioType
#   @return [String]
#
# @!attribute [rw] linkInDmsType
#   @return [String]
#
# @!attribute [rw] linkInPostsType
#   @return [String]
#
# @!attribute [rw] links
#   @return [Object, nil]
#
# @!attribute [rw] microhubBio
#   @return [Object, nil]
#
# @!attribute [rw] microhubCtaButtonText
#   @return [Object, nil]
#
# @!attribute [rw] microhubCtaDescription
#   @return [Object, nil]
#
# @!attribute [rw] microhubCtaLink
#   @return [Object, nil]
#
# @!attribute [rw] microhubCtaTitle
#   @return [Object, nil]
#
# @!attribute [rw] microhubHeaderImageUrl
#   @return [Object, nil]
#
# @!attribute [rw] microhubLinks
#   @return [Array, nil]
#
# @!attribute [rw] microhubName
#   @return [Object, nil]
#
# @!attribute [rw] microhubProfileImageUrl
#   @return [Object, nil]
#
# @!attribute [rw] microhubScreenshotUrl
#   @return [Object, nil]
#
# @!attribute [rw] microhubSocialLinks
#   @return [Hash, nil]
#
# @!attribute [rw] microhubStatus
#   @return [String]
#
# @!attribute [rw] microhubTestimonials
#   @return [Array, nil]
#
# @!attribute [rw] microhubUrl
#   @return [String]
#
# @!attribute [rw] myPostsStylePrompt
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] othersStylePrompt
#   @return [Object, nil]
#
# @!attribute [rw] othersTargetMarketPrompt
#   @return [Object, nil]
#
# @!attribute [rw] productLinkSelection
#   @return [String]
#
# @!attribute [rw] productUrl
#   @return [Object, nil]
#
# @!attribute [rw] profileImageUrl
#   @return [Object, nil]
#
# @!attribute [rw] shortLink
#   @return [Object, nil]
#
# @!attribute [rw] shortLinkKeyword
#   @return [Object, nil]
#
# @!attribute [rw] showLinkInFirstComment
#   @return [Boolean]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] socialLinks
#   @return [Object, nil]
#
# @!attribute [rw] testimonials
#   @return [Object, nil]
ProductLanding = Struct.new(
  :bio,
  :commentingOnMyPosts,
  :commentingOnOthersPosts,
  :ctaButtonText,
  :ctaDescription,
  :ctaLink,
  :ctaTitle,
  :dmCommenters,
  :dmInitialMessagePrompt,
  :dmOngoingResponsePrompt,
  :firstCommentTextBeforeLink,
  :headerImageUrl,
  :id,
  :landingHtmlUrl,
  :landingLastGeneratedAt,
  :landingReferenceScreenshotUrl,
  :landingScreenshotUrl,
  :landingStatus,
  :landingUrl,
  :linkInBioType,
  :linkInDmsType,
  :linkInPostsType,
  :links,
  :microhubBio,
  :microhubCtaButtonText,
  :microhubCtaDescription,
  :microhubCtaLink,
  :microhubCtaTitle,
  :microhubHeaderImageUrl,
  :microhubLinks,
  :microhubName,
  :microhubProfileImageUrl,
  :microhubScreenshotUrl,
  :microhubSocialLinks,
  :microhubStatus,
  :microhubTestimonials,
  :microhubUrl,
  :myPostsStylePrompt,
  :name,
  :othersStylePrompt,
  :othersTargetMarketPrompt,
  :productLinkSelection,
  :productUrl,
  :profileImageUrl,
  :shortLink,
  :shortLinkKeyword,
  :showLinkInFirstComment,
  :slug,
  :socialLinks,
  :testimonials,
  keyword_init: true
)

# Request payload for ProductLanding#list.
#
# @!attribute [rw] product_id
#   @return [String, nil]
ProductLandingListMatch = Struct.new(
  :product_id,
  keyword_init: true
)

# Request payload for ProductLanding#update.
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] bio
#   @return [Object, nil]
#
# @!attribute [rw] commentingOnMyPosts
#   @return [Boolean, nil]
#
# @!attribute [rw] commentingOnOthersPosts
#   @return [Boolean, nil]
#
# @!attribute [rw] ctaButtonText
#   @return [Object, nil]
#
# @!attribute [rw] ctaDescription
#   @return [Object, nil]
#
# @!attribute [rw] ctaLink
#   @return [Object, nil]
#
# @!attribute [rw] ctaTitle
#   @return [Object, nil]
#
# @!attribute [rw] dmCommenters
#   @return [Boolean, nil]
#
# @!attribute [rw] dmInitialMessagePrompt
#   @return [Object, nil]
#
# @!attribute [rw] dmOngoingResponsePrompt
#   @return [Object, nil]
#
# @!attribute [rw] firstCommentTextBeforeLink
#   @return [Object, nil]
#
# @!attribute [rw] headerImageUrl
#   @return [Object, nil]
#
# @!attribute [rw] linkInBioType
#   @return [String, nil]
#
# @!attribute [rw] linkInDmsType
#   @return [String, nil]
#
# @!attribute [rw] linkInPostsType
#   @return [String, nil]
#
# @!attribute [rw] links
#   @return [Object, nil]
#
# @!attribute [rw] myPostsStylePrompt
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] othersStylePrompt
#   @return [Object, nil]
#
# @!attribute [rw] othersTargetMarketPrompt
#   @return [Object, nil]
#
# @!attribute [rw] productLinkSelection
#   @return [String, nil]
#
# @!attribute [rw] profileImageUrl
#   @return [Object, nil]
#
# @!attribute [rw] shortLink
#   @return [Object, nil]
#
# @!attribute [rw] shortLinkKeyword
#   @return [Object, nil]
#
# @!attribute [rw] showLinkInFirstComment
#   @return [Boolean, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] socialLinks
#   @return [Object, nil]
#
# @!attribute [rw] testimonials
#   @return [Object, nil]
ProductLandingUpdateData = Struct.new(
  :product_id,
  :bio,
  :commentingOnMyPosts,
  :commentingOnOthersPosts,
  :ctaButtonText,
  :ctaDescription,
  :ctaLink,
  :ctaTitle,
  :dmCommenters,
  :dmInitialMessagePrompt,
  :dmOngoingResponsePrompt,
  :firstCommentTextBeforeLink,
  :headerImageUrl,
  :linkInBioType,
  :linkInDmsType,
  :linkInPostsType,
  :links,
  :myPostsStylePrompt,
  :name,
  :othersStylePrompt,
  :othersTargetMarketPrompt,
  :productLinkSelection,
  :profileImageUrl,
  :shortLink,
  :shortLinkKeyword,
  :showLinkInFirstComment,
  :slug,
  :socialLinks,
  :testimonials,
  keyword_init: true
)

# PublicResumeStatus entity data model.
#
# @!attribute [rw] can_resume_prelogin
#   @return [Boolean, nil]
#
# @!attribute [rw] content_collection_ready
#   @return [Boolean, nil]
#
# @!attribute [rw] current_step
#   @return [Object, nil]
#
# @!attribute [rw] exists
#   @return [Boolean]
#
# @!attribute [rw] flow_variant
#   @return [Object, nil]
#
# @!attribute [rw] repost_content_count
#   @return [Integer, nil]
#
# @!attribute [rw] repost_source
#   @return [Object, nil]
#
# @!attribute [rw] requires_repost_content
#   @return [Boolean, nil]
#
# @!attribute [rw] skip_demo
#   @return [Boolean, nil]
PublicResumeStatus = Struct.new(
  :can_resume_prelogin,
  :content_collection_ready,
  :current_step,
  :exists,
  :flow_variant,
  :repost_content_count,
  :repost_source,
  :requires_repost_content,
  :skip_demo,
  keyword_init: true
)

# Request payload for PublicResumeStatus#load.
#
# @!attribute [rw] oid
#   @return [String]
PublicResumeStatusLoadMatch = Struct.new(
  :oid,
  keyword_init: true
)

# ReRollVideo entity data model.
#
# @!attribute [rw] queue_id
#   @return [String]
#
# @!attribute [rw] requires_polling
#   @return [Boolean, nil]
#
# @!attribute [rw] skip_credit_check
#   @return [Boolean, nil]
#
# @!attribute [rw] video
#   @return [Hash]
ReRollVideo = Struct.new(
  :queue_id,
  :requires_polling,
  :skip_credit_check,
  :video,
  keyword_init: true
)

# Request payload for ReRollVideo#create.
#
# @!attribute [rw] queue_id
#   @return [String]
#
# @!attribute [rw] skip_credit_check
#   @return [Boolean, nil]
ReRollVideoCreateData = Struct.new(
  :queue_id,
  :skip_credit_check,
  keyword_init: true
)

# ReadRootGet entity data model.
class ReadRootGet
end

# Request payload for ReadRootGet#load.
class ReadRootGetLoadMatch
end

# RecordDemoBooked entity data model.
#
# @!attribute [rw] calendlyEventUri
#   @return [Object, nil]
#
# @!attribute [rw] calendlyInviteeUri
#   @return [Object, nil]
#
# @!attribute [rw] message
#   @return [Hash]
#
# @!attribute [rw] session
#   @return [Hash]
RecordDemoBooked = Struct.new(
  :calendlyEventUri,
  :calendlyInviteeUri,
  :message,
  :session,
  keyword_init: true
)

# Request payload for RecordDemoBooked#create.
#
# @!attribute [rw] session_id
#   @return [String]
#
# @!attribute [rw] calendlyEventUri
#   @return [Object, nil]
#
# @!attribute [rw] calendlyInviteeUri
#   @return [Object, nil]
RecordDemoBookedCreateData = Struct.new(
  :session_id,
  :calendlyEventUri,
  :calendlyInviteeUri,
  keyword_init: true
)

# RefreshStat entity data model.
#
# @!attribute [rw] date_from
#   @return [Object, nil]
#
# @!attribute [rw] date_to
#   @return [Object, nil]
#
# @!attribute [rw] entries_found
#   @return [Integer]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] provider
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] summary
#   @return [Object, nil]
RefreshStat = Struct.new(
  :date_from,
  :date_to,
  :entries_found,
  :message,
  :provider,
  :status,
  :summary,
  keyword_init: true
)

# Request payload for RefreshStat#create.
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [String, nil]
#
# @!attribute [rw] date_from
#   @return [Object, nil]
#
# @!attribute [rw] date_to
#   @return [Object, nil]
#
# @!attribute [rw] provider
#   @return [String, nil]
RefreshStatCreateData = Struct.new(
  :email,
  :user_id,
  :date_from,
  :date_to,
  :provider,
  keyword_init: true
)

# RemixerClipper entity data model.
class RemixerClipper
end

# Request payload for RemixerClipper#load.
class RemixerClipperLoadMatch
end

# Request payload for RemixerClipper#create.
#
# @!attribute [rw] identifier
#   @return [String]
RemixerClipperCreateData = Struct.new(
  :identifier,
  keyword_init: true
)

# ResetProduct entity data model.
class ResetProduct
end

# Request payload for ResetProduct#load.
class ResetProductLoadMatch
end

# Request payload for ResetProduct#create.
class ResetProductCreateData
end

# RetryWebsiteScrape entity data model.
#
# @!attribute [rw] flow_variant
#   @return [String, nil]
#
# @!attribute [rw] onboarding_data_id
#   @return [String]
#
# @!attribute [rw] skip_demo
#   @return [Boolean, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] url
#   @return [String]
RetryWebsiteScrape = Struct.new(
  :flow_variant,
  :onboarding_data_id,
  :skip_demo,
  :status,
  :success,
  :url,
  keyword_init: true
)

# Request payload for RetryWebsiteScrape#create.
#
# @!attribute [rw] onboarding_data_id
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
RetryWebsiteScrapeCreateData = Struct.new(
  :onboarding_data_id,
  :url,
  keyword_init: true
)

# SaveSurvey entity data model.
#
# @!attribute [rw] email_sent
#   @return [Boolean, nil]
#
# @!attribute [rw] onboarding_data_id
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] survey
#   @return [Hash]
SaveSurvey = Struct.new(
  :email_sent,
  :onboarding_data_id,
  :success,
  :survey,
  keyword_init: true
)

# Request payload for SaveSurvey#create.
#
# @!attribute [rw] onboarding_data_id
#   @return [String]
#
# @!attribute [rw] survey
#   @return [Hash]
SaveSurveyCreateData = Struct.new(
  :onboarding_data_id,
  :survey,
  keyword_init: true
)

# ScanSocial entity data model.
#
# @!attribute [rw] instagram_handle
#   @return [Object, nil]
#
# @!attribute [rw] onboarding_data_id
#   @return [String]
#
# @!attribute [rw] product_id
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] task_id
#   @return [String, nil]
#
# @!attribute [rw] tiktok_handle
#   @return [Object, nil]
ScanSocial = Struct.new(
  :instagram_handle,
  :onboarding_data_id,
  :product_id,
  :status,
  :success,
  :task_id,
  :tiktok_handle,
  keyword_init: true
)

# Request payload for ScanSocial#create.
#
# @!attribute [rw] instagram_handle
#   @return [Object, nil]
#
# @!attribute [rw] onboarding_data_id
#   @return [String]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] tiktok_handle
#   @return [Object]
ScanSocialCreateData = Struct.new(
  :instagram_handle,
  :onboarding_data_id,
  :product_id,
  :tiktok_handle,
  keyword_init: true
)

# ScanSocialsPublic entity data model.
#
# @!attribute [rw] instagram_handle
#   @return [Object, nil]
#
# @!attribute [rw] message
#   @return [Object, nil]
#
# @!attribute [rw] onboarding_data_id
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] tiktok_handle
#   @return [Object, nil]
ScanSocialsPublic = Struct.new(
  :instagram_handle,
  :message,
  :onboarding_data_id,
  :status,
  :success,
  :tiktok_handle,
  keyword_init: true
)

# Request payload for ScanSocialsPublic#create.
#
# @!attribute [rw] instagram_handle
#   @return [Object, nil]
#
# @!attribute [rw] onboarding_data_id
#   @return [String]
#
# @!attribute [rw] tiktok_handle
#   @return [Object, nil]
ScanSocialsPublicCreateData = Struct.new(
  :instagram_handle,
  :onboarding_data_id,
  :tiktok_handle,
  keyword_init: true
)

# ScanSocialsStatus entity data model.
#
# @!attribute [rw] ads_count
#   @return [Integer, nil]
#
# @!attribute [rw] onboarding_data_id
#   @return [String]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] task_id
#   @return [String, nil]
ScanSocialsStatus = Struct.new(
  :ads_count,
  :onboarding_data_id,
  :product_id,
  :status,
  :task_id,
  keyword_init: true
)

# Request payload for ScanSocialsStatus#load.
#
# @!attribute [rw] onboarding_data_id
#   @return [String, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
ScanSocialsStatusLoadMatch = Struct.new(
  :onboarding_data_id,
  :product_id,
  keyword_init: true
)

# ScheduleV2 entity data model.
#
# @!attribute [rw] agent
#   @return [Object, nil]
#
# @!attribute [rw] comment
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] instagram_posted_by
#   @return [Object, nil]
#
# @!attribute [rw] instagram_posted_url
#   @return [Object, nil]
#
# @!attribute [rw] instagram_scraped_social_post_id
#   @return [String, nil]
#
# @!attribute [rw] is_instagram_posted
#   @return [Boolean, nil]
#
# @!attribute [rw] is_tiktok_posted
#   @return [Boolean, nil]
#
# @!attribute [rw] is_youtube_posted
#   @return [Boolean, nil]
#
# @!attribute [rw] reorders
#   @return [Array]
#
# @!attribute [rw] results
#   @return [Object, nil]
#
# @!attribute [rw] scheduled_datetime
#   @return [String]
#
# @!attribute [rw] source_type
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] tiktok_posted_by
#   @return [Object, nil]
#
# @!attribute [rw] tiktok_posted_url
#   @return [Object, nil]
#
# @!attribute [rw] tiktok_scraped_social_post_id
#   @return [String, nil]
#
# @!attribute [rw] video
#   @return [Object, nil]
#
# @!attribute [rw] video_id
#   @return [String]
#
# @!attribute [rw] youtube_posted_by
#   @return [Object, nil]
#
# @!attribute [rw] youtube_posted_url
#   @return [Object, nil]
#
# @!attribute [rw] youtube_scraped_social_post_id
#   @return [String, nil]
ScheduleV2 = Struct.new(
  :agent,
  :comment,
  :created_at,
  :id,
  :instagram_posted_by,
  :instagram_posted_url,
  :instagram_scraped_social_post_id,
  :is_instagram_posted,
  :is_tiktok_posted,
  :is_youtube_posted,
  :reorders,
  :results,
  :scheduled_datetime,
  :source_type,
  :status,
  :tiktok_posted_by,
  :tiktok_posted_url,
  :tiktok_scraped_social_post_id,
  :video,
  :video_id,
  :youtube_posted_by,
  :youtube_posted_url,
  :youtube_scraped_social_post_id,
  keyword_init: true
)

# Request payload for ScheduleV2#load.
#
# @!attribute [rw] all_product
#   @return [Boolean, nil]
#
# @!attribute [rw] day
#   @return [Integer, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
ScheduleV2LoadMatch = Struct.new(
  :all_product,
  :day,
  :limit,
  :offset,
  :product_id,
  keyword_init: true
)

# Request payload for ScheduleV2#list.
#
# @!attribute [rw] all_product
#   @return [Boolean, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [Object, nil]
ScheduleV2ListMatch = Struct.new(
  :all_product,
  :limit,
  :offset,
  :product_id,
  :status,
  keyword_init: true
)

# Request payload for ScheduleV2#create.
#
# @!attribute [rw] agent
#   @return [Object, nil]
#
# @!attribute [rw] comment
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] instagram_posted_by
#   @return [Object, nil]
#
# @!attribute [rw] instagram_posted_url
#   @return [Object, nil]
#
# @!attribute [rw] instagram_scraped_social_post_id
#   @return [String, nil]
#
# @!attribute [rw] is_instagram_posted
#   @return [Boolean, nil]
#
# @!attribute [rw] is_tiktok_posted
#   @return [Boolean, nil]
#
# @!attribute [rw] is_youtube_posted
#   @return [Boolean, nil]
#
# @!attribute [rw] reorders
#   @return [Array]
#
# @!attribute [rw] results
#   @return [Object, nil]
#
# @!attribute [rw] scheduled_datetime
#   @return [String]
#
# @!attribute [rw] source_type
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] tiktok_posted_by
#   @return [Object, nil]
#
# @!attribute [rw] tiktok_posted_url
#   @return [Object, nil]
#
# @!attribute [rw] tiktok_scraped_social_post_id
#   @return [String, nil]
#
# @!attribute [rw] video
#   @return [Object, nil]
#
# @!attribute [rw] video_id
#   @return [String]
#
# @!attribute [rw] youtube_posted_by
#   @return [Object, nil]
#
# @!attribute [rw] youtube_posted_url
#   @return [Object, nil]
#
# @!attribute [rw] youtube_scraped_social_post_id
#   @return [String, nil]
ScheduleV2CreateData = Struct.new(
  :agent,
  :comment,
  :created_at,
  :id,
  :instagram_posted_by,
  :instagram_posted_url,
  :instagram_scraped_social_post_id,
  :is_instagram_posted,
  :is_tiktok_posted,
  :is_youtube_posted,
  :reorders,
  :results,
  :scheduled_datetime,
  :source_type,
  :status,
  :tiktok_posted_by,
  :tiktok_posted_url,
  :tiktok_scraped_social_post_id,
  :video,
  :video_id,
  :youtube_posted_by,
  :youtube_posted_url,
  :youtube_scraped_social_post_id,
  keyword_init: true
)

# Request payload for ScheduleV2#update.
#
# @!attribute [rw] queue_id
#   @return [String]
#
# @!attribute [rw] video_id
#   @return [String, nil]
ScheduleV2UpdateData = Struct.new(
  :queue_id,
  :video_id,
  keyword_init: true
)

# Request payload for ScheduleV2#remove.
#
# @!attribute [rw] queue_id
#   @return [String]
ScheduleV2RemoveMatch = Struct.new(
  :queue_id,
  keyword_init: true
)

# Scrape entity data model.
#
# @!attribute [rw] old_product_id
#   @return [String]
#
# @!attribute [rw] onboarding_data_id
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] url
#   @return [String]
Scrape = Struct.new(
  :old_product_id,
  :onboarding_data_id,
  :status,
  :success,
  :url,
  keyword_init: true
)

# Request payload for Scrape#create.
#
# @!attribute [rw] old_product_id
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
ScrapeCreateData = Struct.new(
  :old_product_id,
  :url,
  keyword_init: true
)

# ScrapeWebsitePublic entity data model.
#
# @!attribute [rw] flow_variant
#   @return [String, nil]
#
# @!attribute [rw] onboarding_data_id
#   @return [String]
#
# @!attribute [rw] skip_demo
#   @return [Boolean, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] url
#   @return [String]
ScrapeWebsitePublic = Struct.new(
  :flow_variant,
  :onboarding_data_id,
  :skip_demo,
  :status,
  :success,
  :url,
  keyword_init: true
)

# Request payload for ScrapeWebsitePublic#create.
#
# @!attribute [rw] context
#   @return [Object, nil]
#
# @!attribute [rw] flow
#   @return [Object, nil]
#
# @!attribute [rw] skip_demo
#   @return [Boolean, nil]
#
# @!attribute [rw] url
#   @return [String]
ScrapeWebsitePublicCreateData = Struct.new(
  :context,
  :flow,
  :skip_demo,
  :url,
  keyword_init: true
)

# ScrapedData entity data model.
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] homepageVideoUrl
#   @return [Object, nil]
#
# @!attribute [rw] howItWorks
#   @return [String]
#
# @!attribute [rw] imageUrls
#   @return [Array]
#
# @!attribute [rw] instagram_username
#   @return [Object, nil]
#
# @!attribute [rw] mediaAssets
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pricingAndOffers
#   @return [String]
#
# @!attribute [rw] targetAudience
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
ScrapedData = Struct.new(
  :description,
  :homepageVideoUrl,
  :howItWorks,
  :imageUrls,
  :instagram_username,
  :mediaAssets,
  :name,
  :pricingAndOffers,
  :targetAudience,
  :url,
  keyword_init: true
)

# Request payload for ScrapedData#create.
#
# @!attribute [rw] instagram_username
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String]
ScrapedDataCreateData = Struct.new(
  :instagram_username,
  :url,
  keyword_init: true
)

# ScrapingStatus entity data model.
class ScrapingStatus
end

# Request payload for ScrapingStatus#load.
class ScrapingStatusLoadMatch
end

# SelfServeActivate entity data model.
#
# @!attribute [rw] onboarding_data_id
#   @return [String]
#
# @!attribute [rw] redirect_to_stripe
#   @return [Boolean, nil]
#
# @!attribute [rw] stripe_checkout_url
#   @return [Object, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
SelfServeActivate = Struct.new(
  :onboarding_data_id,
  :redirect_to_stripe,
  :stripe_checkout_url,
  :success,
  keyword_init: true
)

# Request payload for SelfServeActivate#create.
#
# @!attribute [rw] onboarding_data_id
#   @return [String]
SelfServeActivateCreateData = Struct.new(
  :onboarding_data_id,
  keyword_init: true
)

# Seo entity data model.
class Seo
end

# Request payload for Seo#load.
class SeoLoadMatch
end

# SeoAiMention entity data model.
#
# @!attribute [rw] bucket
#   @return [String]
#
# @!attribute [rw] domain_type
#   @return [String]
#
# @!attribute [rw] dominant_domain
#   @return [String]
#
# @!attribute [rw] engine
#   @return [String]
#
# @!attribute [rw] evidence
#   @return [Hash]
#
# @!attribute [rw] geo
#   @return [String]
#
# @!attribute [rw] language
#   @return [String]
#
# @!attribute [rw] primary_url
#   @return [String]
#
# @!attribute [rw] prompt_text
#   @return [String]
#
# @!attribute [rw] run_week
#   @return [String]
#
# @!attribute [rw] secondary_urls
#   @return [Array]
SeoAiMention = Struct.new(
  :bucket,
  :domain_type,
  :dominant_domain,
  :engine,
  :evidence,
  :geo,
  :language,
  :primary_url,
  :prompt_text,
  :run_week,
  :secondary_urls,
  keyword_init: true
)

# Request payload for SeoAiMention#list.
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
SeoAiMentionListMatch = Struct.new(
  :limit,
  :product_id,
  keyword_init: true
)

# SeoBacklink entity data model.
#
# @!attribute [rw] anchor_text
#   @return [String]
#
# @!attribute [rw] first_seen
#   @return [String]
#
# @!attribute [rw] referring_domain
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] target_page
#   @return [String]
SeoBacklink = Struct.new(
  :anchor_text,
  :first_seen,
  :referring_domain,
  :status,
  :target_page,
  keyword_init: true
)

# Request payload for SeoBacklink#list.
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
SeoBacklinkListMatch = Struct.new(
  :limit,
  :product_id,
  keyword_init: true
)

# SeoKeyword entity data model.
#
# @!attribute [rw] blog_page
#   @return [String]
#
# @!attribute [rw] current_position
#   @return [Float]
#
# @!attribute [rw] keyword
#   @return [String]
#
# @!attribute [rw] keyword_group
#   @return [String]
#
# @!attribute [rw] position_change
#   @return [Float]
SeoKeyword = Struct.new(
  :blog_page,
  :current_position,
  :keyword,
  :keyword_group,
  :position_change,
  keyword_init: true
)

# Request payload for SeoKeyword#list.
#
# @!attribute [rw] day
#   @return [Integer, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
SeoKeywordListMatch = Struct.new(
  :day,
  :limit,
  :product_id,
  keyword_init: true
)

# SeoOverview entity data model.
#
# @!attribute [rw] clicks
#   @return [Float]
#
# @!attribute [rw] ctr
#   @return [Float]
#
# @!attribute [rw] date
#   @return [String]
#
# @!attribute [rw] impressions
#   @return [Float]
#
# @!attribute [rw] position
#   @return [Float]
SeoOverview = Struct.new(
  :clicks,
  :ctr,
  :date,
  :impressions,
  :position,
  keyword_init: true
)

# Request payload for SeoOverview#list.
#
# @!attribute [rw] day
#   @return [Integer, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
SeoOverviewListMatch = Struct.new(
  :day,
  :product_id,
  keyword_init: true
)

# SeoTraffic entity data model.
#
# @!attribute [rw] end_date
#   @return [String]
#
# @!attribute [rw] series
#   @return [Array]
#
# @!attribute [rw] site_url
#   @return [String]
#
# @!attribute [rw] start_date
#   @return [String]
#
# @!attribute [rw] top_countries
#   @return [Array]
#
# @!attribute [rw] top_pages
#   @return [Array]
#
# @!attribute [rw] top_queries
#   @return [Array]
#
# @!attribute [rw] totals
#   @return [Hash]
SeoTraffic = Struct.new(
  :end_date,
  :series,
  :site_url,
  :start_date,
  :top_countries,
  :top_pages,
  :top_queries,
  :totals,
  keyword_init: true
)

# Request payload for SeoTraffic#list.
#
# @!attribute [rw] day
#   @return [Integer, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] top_limit
#   @return [Integer, nil]
SeoTrafficListMatch = Struct.new(
  :day,
  :product_id,
  :top_limit,
  keyword_init: true
)

# ShareAccessLink entity data model.
#
# @!attribute [rw] share_token
#   @return [String]
#
# @!attribute [rw] share_url
#   @return [String]
ShareAccessLink = Struct.new(
  :share_token,
  :share_url,
  keyword_init: true
)

# Request payload for ShareAccessLink#create.
#
# @!attribute [rw] share_token
#   @return [String]
#
# @!attribute [rw] share_url
#   @return [String]
ShareAccessLinkCreateData = Struct.new(
  :share_token,
  :share_url,
  keyword_init: true
)

# Site entity data model.
class Site
end

# Request payload for Site#load.
class SiteLoadMatch
end

# Slide entity data model.
#
# @!attribute [rw] caption
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] prompt
#   @return [Object, nil]
Slide = Struct.new(
  :caption,
  :id,
  :prompt,
  keyword_init: true
)

# Request payload for Slide#create.
#
# @!attribute [rw] carousel_id
#   @return [String]
#
# @!attribute [rw] slide_index
#   @return [Integer]
#
# @!attribute [rw] caption
#   @return [Object, nil]
#
# @!attribute [rw] prompt
#   @return [Object, nil]
#
# @!attribute [rw] image_model
#   @return [Object, nil]
SlideCreateData = Struct.new(
  :carousel_id,
  :slide_index,
  :caption,
  :prompt,
  :image_model,
  keyword_init: true
)

# Request payload for Slide#update.
#
# @!attribute [rw] carousel_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] caption
#   @return [Object, nil]
#
# @!attribute [rw] prompt
#   @return [Object, nil]
SlideUpdateData = Struct.new(
  :carousel_id,
  :id,
  :caption,
  :prompt,
  keyword_init: true
)

# SlugValidation entity data model.
#
# @!attribute [rw] reason
#   @return [Object, nil]
#
# @!attribute [rw] valid
#   @return [Boolean]
SlugValidation = Struct.new(
  :reason,
  :valid,
  keyword_init: true
)

# Request payload for SlugValidation#load.
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] product_id
#   @return [String, nil]
SlugValidationLoadMatch = Struct.new(
  :slug,
  :product_id,
  keyword_init: true
)

# Social entity data model.
#
# @!attribute [rw] code
#   @return [String]
#
# @!attribute [rw] code_verifier
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] platform
#   @return [String]
#
# @!attribute [rw] platformUserId
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] userId
#   @return [String]
#
# @!attribute [rw] username
#   @return [String, nil]
Social = Struct.new(
  :code,
  :code_verifier,
  :createdAt,
  :id,
  :platform,
  :platformUserId,
  :updatedAt,
  :userId,
  :username,
  keyword_init: true
)

# Request payload for Social#load.
#
# @!attribute [rw] code_challenge
#   @return [Object, nil]
#
# @!attribute [rw] code_challenge_method
#   @return [String, nil]
SocialLoadMatch = Struct.new(
  :code_challenge,
  :code_challenge_method,
  keyword_init: true
)

# Request payload for Social#list.
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] code_verifier
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] platformUserId
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] userId
#   @return [String, nil]
#
# @!attribute [rw] username
#   @return [String, nil]
SocialListMatch = Struct.new(
  :code,
  :code_verifier,
  :createdAt,
  :id,
  :platform,
  :platformUserId,
  :updatedAt,
  :userId,
  :username,
  keyword_init: true
)

# Request payload for Social#create.
#
# @!attribute [rw] code
#   @return [String]
#
# @!attribute [rw] code_verifier
#   @return [String]
SocialCreateData = Struct.new(
  :code,
  :code_verifier,
  keyword_init: true
)

# Request payload for Social#remove.
#
# @!attribute [rw] platform
#   @return [String]
SocialRemoveMatch = Struct.new(
  :platform,
  keyword_init: true
)

# SocialScanPreview entity data model.
#
# @!attribute [rw] instagram_handle
#   @return [Object, nil]
#
# @!attribute [rw] posts
#   @return [Array]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] tiktok_handle
#   @return [Object, nil]
SocialScanPreview = Struct.new(
  :instagram_handle,
  :posts,
  :success,
  :tiktok_handle,
  keyword_init: true
)

# Request payload for SocialScanPreview#create.
#
# @!attribute [rw] instagram_handle
#   @return [Object, nil]
#
# @!attribute [rw] tiktok_handle
#   @return [Object, nil]
SocialScanPreviewCreateData = Struct.new(
  :instagram_handle,
  :tiktok_handle,
  keyword_init: true
)

# SocialScanProcess entity data model.
#
# @!attribute [rw] posts
#   @return [Array]
#
# @!attribute [rw] product_id
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] task_id
#   @return [String, nil]
SocialScanProcess = Struct.new(
  :posts,
  :product_id,
  :success,
  :task_id,
  keyword_init: true
)

# Request payload for SocialScanProcess#create.
#
# @!attribute [rw] posts
#   @return [Array]
#
# @!attribute [rw] product_id
#   @return [String]
SocialScanProcessCreateData = Struct.new(
  :posts,
  :product_id,
  keyword_init: true
)

# SocialScanSave entity data model.
#
# @!attribute [rw] media_asset_ids
#   @return [Array]
#
# @!attribute [rw] posts
#   @return [Array]
#
# @!attribute [rw] product_id
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
SocialScanSave = Struct.new(
  :media_asset_ids,
  :posts,
  :product_id,
  :success,
  keyword_init: true
)

# Request payload for SocialScanSave#create.
#
# @!attribute [rw] posts
#   @return [Array]
#
# @!attribute [rw] product_id
#   @return [String]
SocialScanSaveCreateData = Struct.new(
  :posts,
  :product_id,
  keyword_init: true
)

# Sora2Avatar entity data model.
#
# @!attribute [rw] avatar_frame_url
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] current_step
#   @return [Integer, nil]
#
# @!attribute [rw] headshot_url
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] logs
#   @return [Hash, nil]
#
# @!attribute [rw] prompt_key
#   @return [String]
#
# @!attribute [rw] run_output_dir
#   @return [Object, nil]
#
# @!attribute [rw] selected_age_bucket
#   @return [String]
#
# @!attribute [rw] selected_gender
#   @return [String]
#
# @!attribute [rw] selected_prompt
#   @return [Object, nil]
#
# @!attribute [rw] selected_race
#   @return [String]
#
# @!attribute [rw] sora2_cameo_handle
#   @return [Object, nil]
#
# @!attribute [rw] sora2_cameo_id
#   @return [String, nil]
#
# @!attribute [rw] sora2_cameo_link
#   @return [Object, nil]
#
# @!attribute [rw] sora2_display_name
#   @return [Object, nil]
#
# @!attribute [rw] sora2_task_id
#   @return [String, nil]
#
# @!attribute [rw] sora2_video_url
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
Sora2Avatar = Struct.new(
  :avatar_frame_url,
  :created_at,
  :current_step,
  :headshot_url,
  :id,
  :logs,
  :prompt_key,
  :run_output_dir,
  :selected_age_bucket,
  :selected_gender,
  :selected_prompt,
  :selected_race,
  :sora2_cameo_handle,
  :sora2_cameo_id,
  :sora2_cameo_link,
  :sora2_display_name,
  :sora2_task_id,
  :sora2_video_url,
  :updated_at,
  keyword_init: true
)

# Request payload for Sora2Avatar#load.
#
# @!attribute [rw] id
#   @return [String]
Sora2AvatarLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Sora2Avatar#list.
#
# @!attribute [rw] completed_only
#   @return [Boolean, nil]
#
# @!attribute [rw] current_step
#   @return [Object, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] prompt_key
#   @return [Object, nil]
#
# @!attribute [rw] search
#   @return [Object, nil]
#
# @!attribute [rw] selected_age_bucket
#   @return [Object, nil]
#
# @!attribute [rw] selected_gender
#   @return [Object, nil]
#
# @!attribute [rw] selected_race
#   @return [Object, nil]
Sora2AvatarListMatch = Struct.new(
  :completed_only,
  :current_step,
  :page,
  :page_size,
  :prompt_key,
  :search,
  :selected_age_bucket,
  :selected_gender,
  :selected_race,
  keyword_init: true
)

# Request payload for Sora2Avatar#create.
#
# @!attribute [rw] avatar_frame_url
#   @return [Object, nil]
#
# @!attribute [rw] current_step
#   @return [Integer, nil]
#
# @!attribute [rw] headshot_url
#   @return [Object, nil]
#
# @!attribute [rw] logs
#   @return [Hash, nil]
#
# @!attribute [rw] prompt_key
#   @return [String]
#
# @!attribute [rw] run_output_dir
#   @return [Object, nil]
#
# @!attribute [rw] selected_age_bucket
#   @return [String]
#
# @!attribute [rw] selected_gender
#   @return [String]
#
# @!attribute [rw] selected_prompt
#   @return [Object, nil]
#
# @!attribute [rw] selected_race
#   @return [String]
#
# @!attribute [rw] sora2_cameo_handle
#   @return [Object, nil]
#
# @!attribute [rw] sora2_cameo_id
#   @return [String, nil]
#
# @!attribute [rw] sora2_cameo_link
#   @return [Object, nil]
#
# @!attribute [rw] sora2_display_name
#   @return [Object, nil]
#
# @!attribute [rw] sora2_task_id
#   @return [String, nil]
#
# @!attribute [rw] sora2_video_url
#   @return [String]
Sora2AvatarCreateData = Struct.new(
  :avatar_frame_url,
  :current_step,
  :headshot_url,
  :logs,
  :prompt_key,
  :run_output_dir,
  :selected_age_bucket,
  :selected_gender,
  :selected_prompt,
  :selected_race,
  :sora2_cameo_handle,
  :sora2_cameo_id,
  :sora2_cameo_link,
  :sora2_display_name,
  :sora2_task_id,
  :sora2_video_url,
  keyword_init: true
)

# Request payload for Sora2Avatar#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] avatar_frame_url
#   @return [Object, nil]
#
# @!attribute [rw] current_step
#   @return [Integer, nil]
#
# @!attribute [rw] headshot_url
#   @return [Object, nil]
#
# @!attribute [rw] logs
#   @return [Hash, nil]
#
# @!attribute [rw] prompt_key
#   @return [String, nil]
#
# @!attribute [rw] run_output_dir
#   @return [Object, nil]
#
# @!attribute [rw] selected_age_bucket
#   @return [String, nil]
#
# @!attribute [rw] selected_gender
#   @return [String, nil]
#
# @!attribute [rw] selected_prompt
#   @return [Object, nil]
#
# @!attribute [rw] selected_race
#   @return [String, nil]
#
# @!attribute [rw] sora2_cameo_handle
#   @return [Object, nil]
#
# @!attribute [rw] sora2_cameo_id
#   @return [String, nil]
#
# @!attribute [rw] sora2_cameo_link
#   @return [Object, nil]
#
# @!attribute [rw] sora2_display_name
#   @return [Object, nil]
#
# @!attribute [rw] sora2_task_id
#   @return [String, nil]
#
# @!attribute [rw] sora2_video_url
#   @return [String, nil]
Sora2AvatarUpdateData = Struct.new(
  :id,
  :avatar_frame_url,
  :current_step,
  :headshot_url,
  :logs,
  :prompt_key,
  :run_output_dir,
  :selected_age_bucket,
  :selected_gender,
  :selected_prompt,
  :selected_race,
  :sora2_cameo_handle,
  :sora2_cameo_id,
  :sora2_cameo_link,
  :sora2_display_name,
  :sora2_task_id,
  :sora2_video_url,
  keyword_init: true
)

# Sora2AvatarAssetUpload entity data model.
#
# @!attribute [rw] avatar_id
#   @return [String, nil]
#
# @!attribute [rw] file
#   @return [String]
#
# @!attribute [rw] run_output_dir
#   @return [Object, nil]
#
# @!attribute [rw] s3_key
#   @return [String]
#
# @!attribute [rw] upload_type
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
Sora2AvatarAssetUpload = Struct.new(
  :avatar_id,
  :file,
  :run_output_dir,
  :s3_key,
  :upload_type,
  :url,
  keyword_init: true
)

# Request payload for Sora2AvatarAssetUpload#create.
#
# @!attribute [rw] avatar_id
#   @return [String, nil]
#
# @!attribute [rw] file
#   @return [String]
#
# @!attribute [rw] run_output_dir
#   @return [Object, nil]
#
# @!attribute [rw] s3_key
#   @return [String]
#
# @!attribute [rw] upload_type
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
Sora2AvatarAssetUploadCreateData = Struct.new(
  :avatar_id,
  :file,
  :run_output_dir,
  :s3_key,
  :upload_type,
  :url,
  keyword_init: true
)

# Sora2AvatarStat entity data model.
#
# @!attribute [rw] by_age_bucket
#   @return [Hash]
#
# @!attribute [rw] by_gender
#   @return [Hash]
#
# @!attribute [rw] by_prompt_key
#   @return [Hash]
#
# @!attribute [rw] by_race
#   @return [Hash]
#
# @!attribute [rw] completed_avatars
#   @return [Integer]
#
# @!attribute [rw] completion_rate
#   @return [Float]
#
# @!attribute [rw] total_avatars
#   @return [Integer]
Sora2AvatarStat = Struct.new(
  :by_age_bucket,
  :by_gender,
  :by_prompt_key,
  :by_race,
  :completed_avatars,
  :completion_rate,
  :total_avatars,
  keyword_init: true
)

# Request payload for Sora2AvatarStat#load.
#
# @!attribute [rw] prompt_key
#   @return [Object, nil]
#
# @!attribute [rw] selected_age_bucket
#   @return [Object, nil]
#
# @!attribute [rw] selected_gender
#   @return [Object, nil]
#
# @!attribute [rw] selected_race
#   @return [Object, nil]
Sora2AvatarStatLoadMatch = Struct.new(
  :prompt_key,
  :selected_age_bucket,
  :selected_gender,
  :selected_race,
  keyword_init: true
)

# Stat entity data model.
class Stat
end

# Request payload for Stat#list.
#
# @!attribute [rw] day
#   @return [Integer, nil]
StatListMatch = Struct.new(
  :day,
  keyword_init: true
)

# StatsRefreshBackfill entity data model.
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] task_id
#   @return [String]
StatsRefreshBackfill = Struct.new(
  :message,
  :status,
  :task_id,
  keyword_init: true
)

# Request payload for StatsRefreshBackfill#create.
#
# @!attribute [rw] day
#   @return [Integer, nil]
#
# @!attribute [rw] days
#   @return [Object, nil]
#
# @!attribute [rw] user_emails
#   @return [Object, nil]
StatsRefreshBackfillCreateData = Struct.new(
  :day,
  :days,
  :user_emails,
  keyword_init: true
)

# StatsRefreshIssue entity data model.
#
# @!attribute [rw] aged_over_24h
#   @return [Boolean]
#
# @!attribute [rw] agent_id
#   @return [String, nil]
#
# @!attribute [rw] agent_name_snapshot
#   @return [Object, nil]
#
# @!attribute [rw] first_detected_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] last_detected_at
#   @return [String]
#
# @!attribute [rw] last_refresh_completed_at
#   @return [Object, nil]
#
# @!attribute [rw] last_seen_run_id
#   @return [String, nil]
#
# @!attribute [rw] latest_error_message
#   @return [Object, nil]
#
# @!attribute [rw] next_retry_at
#   @return [Object, nil]
#
# @!attribute [rw] platform
#   @return [String]
#
# @!attribute [rw] post_method
#   @return [Object, nil]
#
# @!attribute [rw] post_url
#   @return [Object, nil]
#
# @!attribute [rw] posted_date_et
#   @return [String]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] product_name_snapshot
#   @return [Object, nil]
#
# @!attribute [rw] reason_code
#   @return [String]
#
# @!attribute [rw] resolved_at
#   @return [Object, nil]
#
# @!attribute [rw] retry_count
#   @return [Integer]
#
# @!attribute [rw] schedule_queue_id
#   @return [String, nil]
#
# @!attribute [rw] scheduled_datetime_utc
#   @return [String]
#
# @!attribute [rw] stale_after_sla
#   @return [Boolean]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] user_email_snapshot
#   @return [String]
#
# @!attribute [rw] user_id
#   @return [String]
StatsRefreshIssue = Struct.new(
  :aged_over_24h,
  :agent_id,
  :agent_name_snapshot,
  :first_detected_at,
  :id,
  :last_detected_at,
  :last_refresh_completed_at,
  :last_seen_run_id,
  :latest_error_message,
  :next_retry_at,
  :platform,
  :post_method,
  :post_url,
  :posted_date_et,
  :product_id,
  :product_name_snapshot,
  :reason_code,
  :resolved_at,
  :retry_count,
  :schedule_queue_id,
  :scheduled_datetime_utc,
  :stale_after_sla,
  :status,
  :user_email_snapshot,
  :user_id,
  keyword_init: true
)

# Request payload for StatsRefreshIssue#list.
#
# @!attribute [rw] date_from
#   @return [Object, nil]
#
# @!attribute [rw] date_to
#   @return [Object, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
#
# @!attribute [rw] platform
#   @return [Object, nil]
#
# @!attribute [rw] posting_method
#   @return [Object, nil]
#
# @!attribute [rw] query
#   @return [Object, nil]
#
# @!attribute [rw] reason
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
StatsRefreshIssueListMatch = Struct.new(
  :date_from,
  :date_to,
  :limit,
  :offset,
  :platform,
  :posting_method,
  :query,
  :reason,
  :status,
  keyword_init: true
)

# StatsRefreshOverview entity data model.
#
# @!attribute [rw] active_run
#   @return [Object, nil]
#
# @!attribute [rw] aged_over_24h
#   @return [Integer]
#
# @!attribute [rw] backlog_preview
#   @return [Array]
#
# @!attribute [rw] coverage_percent
#   @return [Float]
#
# @!attribute [rw] customer_counts
#   @return [Hash]
#
# @!attribute [rw] date
#   @return [String]
#
# @!attribute [rw] generated_at
#   @return [String]
#
# @!attribute [rw] method_counts
#   @return [Hash]
#
# @!attribute [rw] platform_counts
#   @return [Hash]
#
# @!attribute [rw] platform_units_resolved
#   @return [Integer]
#
# @!attribute [rw] platform_units_total
#   @return [Integer]
#
# @!attribute [rw] platform_units_unresolved
#   @return [Integer]
#
# @!attribute [rw] posted_entries
#   @return [Integer]
#
# @!attribute [rw] reason_counts
#   @return [Hash]
#
# @!attribute [rw] sla_deadline_et
#   @return [String]
#
# @!attribute [rw] stale_after_sla
#   @return [Integer]
#
# @!attribute [rw] top_affected_customers
#   @return [Array]
StatsRefreshOverview = Struct.new(
  :active_run,
  :aged_over_24h,
  :backlog_preview,
  :coverage_percent,
  :customer_counts,
  :date,
  :generated_at,
  :method_counts,
  :platform_counts,
  :platform_units_resolved,
  :platform_units_total,
  :platform_units_unresolved,
  :posted_entries,
  :reason_counts,
  :sla_deadline_et,
  :stale_after_sla,
  :top_affected_customers,
  keyword_init: true
)

# Request payload for StatsRefreshOverview#list.
#
# @!attribute [rw] date
#   @return [Object, nil]
StatsRefreshOverviewListMatch = Struct.new(
  :date,
  keyword_init: true
)

# StatsRefreshRunSummary entity data model.
#
# @!attribute [rw] celery_task_id
#   @return [String, nil]
#
# @!attribute [rw] completed_at
#   @return [Object, nil]
#
# @!attribute [rw] entries_failed
#   @return [Integer]
#
# @!attribute [rw] entries_skipped
#   @return [Integer]
#
# @!attribute [rw] entries_total
#   @return [Integer]
#
# @!attribute [rw] entries_updated
#   @return [Integer]
#
# @!attribute [rw] error_summary_json
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] issues_opened
#   @return [Integer]
#
# @!attribute [rw] issues_resolved
#   @return [Integer]
#
# @!attribute [rw] platform_units_resolved
#   @return [Integer]
#
# @!attribute [rw] platform_units_total
#   @return [Integer]
#
# @!attribute [rw] platform_units_unresolved
#   @return [Integer]
#
# @!attribute [rw] platform_updates_via_profile
#   @return [Integer]
#
# @!attribute [rw] platform_updates_via_url
#   @return [Integer]
#
# @!attribute [rw] provider
#   @return [Object, nil]
#
# @!attribute [rw] refresh_trigger
#   @return [Object, nil]
#
# @!attribute [rw] requested_by_email
#   @return [Object, nil]
#
# @!attribute [rw] run_type
#   @return [String]
#
# @!attribute [rw] started_at
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] target_date_et
#   @return [Object, nil]
#
# @!attribute [rw] users_count
#   @return [Integer]
StatsRefreshRunSummary = Struct.new(
  :celery_task_id,
  :completed_at,
  :entries_failed,
  :entries_skipped,
  :entries_total,
  :entries_updated,
  :error_summary_json,
  :id,
  :issues_opened,
  :issues_resolved,
  :platform_units_resolved,
  :platform_units_total,
  :platform_units_unresolved,
  :platform_updates_via_profile,
  :platform_updates_via_url,
  :provider,
  :refresh_trigger,
  :requested_by_email,
  :run_type,
  :started_at,
  :status,
  :target_date_et,
  :users_count,
  keyword_init: true
)

# Request payload for StatsRefreshRunSummary#list.
#
# @!attribute [rw] date_from
#   @return [Object, nil]
#
# @!attribute [rw] date_to
#   @return [Object, nil]
#
# @!attribute [rw] include_global
#   @return [Boolean, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
#
# @!attribute [rw] run_type
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [Object, nil]
StatsRefreshRunSummaryListMatch = Struct.new(
  :date_from,
  :date_to,
  :include_global,
  :limit,
  :offset,
  :run_type,
  :status,
  keyword_init: true
)

# StatsRefreshTaskTrigger entity data model.
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] target_date
#   @return [String]
#
# @!attribute [rw] task_id
#   @return [String]
#
# @!attribute [rw] users_count
#   @return [Integer, nil]
StatsRefreshTaskTrigger = Struct.new(
  :message,
  :status,
  :target_date,
  :task_id,
  :users_count,
  keyword_init: true
)

# Request payload for StatsRefreshTaskTrigger#create.
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] target_date
#   @return [String]
#
# @!attribute [rw] task_id
#   @return [String]
#
# @!attribute [rw] users_count
#   @return [Integer, nil]
StatsRefreshTaskTriggerCreateData = Struct.new(
  :message,
  :status,
  :target_date,
  :task_id,
  :users_count,
  keyword_init: true
)

# Stripe entity data model.
class Stripe
end

# Request payload for Stripe#create.
#
# @!attribute [rw] chat_plan_id
#   @return [Object, nil]
#
# @!attribute [rw] checkout_session_id
#   @return [Object, nil]
#
# @!attribute [rw] coupon_id
#   @return [Object, nil]
#
# @!attribute [rw] credits_per_unit
#   @return [Object, nil]
#
# @!attribute [rw] membership
#   @return [Object, nil]
#
# @!attribute [rw] onboarding_data_id
#   @return [Object, nil]
#
# @!attribute [rw] quantity
#   @return [Object, nil]
StripeCreateData = Struct.new(
  :chat_plan_id,
  :checkout_session_id,
  :coupon_id,
  :credits_per_unit,
  :membership,
  :onboarding_data_id,
  :quantity,
  keyword_init: true
)

# Style entity data model.
class Style
end

# Request payload for Style#load.
class StyleLoadMatch
end

# Template entity data model.
class Template
end

# Request payload for Template#load.
class TemplateLoadMatch
end

# TikTokCreatorInfo entity data model.
#
# @!attribute [rw] commentDisabled
#   @return [Boolean, nil]
#
# @!attribute [rw] creatorAvatarUrl
#   @return [Object, nil]
#
# @!attribute [rw] creatorNickname
#   @return [Object, nil]
#
# @!attribute [rw] creatorUsername
#   @return [Object, nil]
#
# @!attribute [rw] duetDisabled
#   @return [Boolean, nil]
#
# @!attribute [rw] maxVideoPostDurationSec
#   @return [Integer, nil]
#
# @!attribute [rw] privacyLevelOptions
#   @return [Array, nil]
#
# @!attribute [rw] stitchDisabled
#   @return [Boolean, nil]
TikTokCreatorInfo = Struct.new(
  :commentDisabled,
  :creatorAvatarUrl,
  :creatorNickname,
  :creatorUsername,
  :duetDisabled,
  :maxVideoPostDurationSec,
  :privacyLevelOptions,
  :stitchDisabled,
  keyword_init: true
)

# Request payload for TikTokCreatorInfo#list.
#
# @!attribute [rw] commentDisabled
#   @return [Boolean, nil]
#
# @!attribute [rw] creatorAvatarUrl
#   @return [Object, nil]
#
# @!attribute [rw] creatorNickname
#   @return [Object, nil]
#
# @!attribute [rw] creatorUsername
#   @return [Object, nil]
#
# @!attribute [rw] duetDisabled
#   @return [Boolean, nil]
#
# @!attribute [rw] maxVideoPostDurationSec
#   @return [Integer, nil]
#
# @!attribute [rw] privacyLevelOptions
#   @return [Array, nil]
#
# @!attribute [rw] stitchDisabled
#   @return [Boolean, nil]
TikTokCreatorInfoListMatch = Struct.new(
  :commentDisabled,
  :creatorAvatarUrl,
  :creatorNickname,
  :creatorUsername,
  :duetDisabled,
  :maxVideoPostDurationSec,
  :privacyLevelOptions,
  :stitchDisabled,
  keyword_init: true
)

# TopPost entity data model.
#
# @!attribute [rw] comments
#   @return [Integer]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] likes
#   @return [Integer]
#
# @!attribute [rw] platforms
#   @return [Array]
#
# @!attribute [rw] scheduled_datetime
#   @return [String]
#
# @!attribute [rw] user_email
#   @return [String]
#
# @!attribute [rw] user_id
#   @return [String]
#
# @!attribute [rw] views
#   @return [Integer]
TopPost = Struct.new(
  :comments,
  :id,
  :likes,
  :platforms,
  :scheduled_datetime,
  :user_email,
  :user_id,
  :views,
  keyword_init: true
)

# Request payload for TopPost#list.
#
# @!attribute [rw] date
#   @return [String]
TopPostListMatch = Struct.new(
  :date,
  keyword_init: true
)

# UploadPostAgent entity data model.
class UploadPostAgent
end

# Request payload for UploadPostAgent#create.
class UploadPostAgentCreateData
end

# User entity data model.
#
# @!attribute [rw] accountType
#   @return [Object, nil]
#
# @!attribute [rw] activatedByAdminAt
#   @return [Object, nil]
#
# @!attribute [rw] activatedByAdminId
#   @return [Object, nil]
#
# @!attribute [rw] agents
#   @return [Array]
#
# @!attribute [rw] agentsCount
#   @return [Object, nil]
#
# @!attribute [rw] attribution
#   @return [Object, nil]
#
# @!attribute [rw] avatarImageUrl
#   @return [Object, nil]
#
# @!attribute [rw] avatarVoiceUrl
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] credits
#   @return [Integer, nil]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] googleId
#   @return [Object, nil]
#
# @!attribute [rw] hasSeenScheduleWelcome
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] industry
#   @return [Object, nil]
#
# @!attribute [rw] instagramId
#   @return [Object, nil]
#
# @!attribute [rw] isActivatedByAdmin
#   @return [Boolean, nil]
#
# @!attribute [rw] isAdmin
#   @return [Boolean, nil]
#
# @!attribute [rw] isInternalUser
#   @return [Object, nil]
#
# @!attribute [rw] isMigrated
#   @return [Object, nil]
#
# @!attribute [rw] isResettingProduct
#   @return [Object, nil]
#
# @!attribute [rw] membership
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] partnerDirectLoginDisabled
#   @return [Boolean, nil]
#
# @!attribute [rw] partnerExternalUserId
#   @return [Object, nil]
#
# @!attribute [rw] partnerPolicyCode
#   @return [Object, nil]
#
# @!attribute [rw] partnerSource
#   @return [Object, nil]
#
# @!attribute [rw] picture
#   @return [Object, nil]
#
# @!attribute [rw] stripeCustomerId
#   @return [Object, nil]
#
# @!attribute [rw] stripeSubscriptionId
#   @return [Object, nil]
#
# @!attribute [rw] subscriptionCurrentPeriodEnd
#   @return [Object, nil]
#
# @!attribute [rw] subscriptionStatus
#   @return [Object, nil]
#
# @!attribute [rw] totalCount
#   @return [Integer]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] userId
#   @return [String]
User = Struct.new(
  :accountType,
  :activatedByAdminAt,
  :activatedByAdminId,
  :agents,
  :agentsCount,
  :attribution,
  :avatarImageUrl,
  :avatarVoiceUrl,
  :createdAt,
  :credits,
  :email,
  :googleId,
  :hasSeenScheduleWelcome,
  :id,
  :industry,
  :instagramId,
  :isActivatedByAdmin,
  :isAdmin,
  :isInternalUser,
  :isMigrated,
  :isResettingProduct,
  :membership,
  :name,
  :partnerDirectLoginDisabled,
  :partnerExternalUserId,
  :partnerPolicyCode,
  :partnerSource,
  :picture,
  :stripeCustomerId,
  :stripeSubscriptionId,
  :subscriptionCurrentPeriodEnd,
  :subscriptionStatus,
  :totalCount,
  :updatedAt,
  :userId,
  keyword_init: true
)

# Request payload for User#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] product_id
#   @return [String, nil]
UserLoadMatch = Struct.new(
  :id,
  :product_id,
  keyword_init: true
)

# Request payload for User#update.
#
# @!attribute [rw] accountType
#   @return [Object, nil]
#
# @!attribute [rw] activatedByAdminAt
#   @return [Object, nil]
#
# @!attribute [rw] activatedByAdminId
#   @return [Object, nil]
#
# @!attribute [rw] agents
#   @return [Array, nil]
#
# @!attribute [rw] agentsCount
#   @return [Object, nil]
#
# @!attribute [rw] attribution
#   @return [Object, nil]
#
# @!attribute [rw] avatarImageUrl
#   @return [Object, nil]
#
# @!attribute [rw] avatarVoiceUrl
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] credits
#   @return [Integer, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] googleId
#   @return [Object, nil]
#
# @!attribute [rw] hasSeenScheduleWelcome
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] industry
#   @return [Object, nil]
#
# @!attribute [rw] instagramId
#   @return [Object, nil]
#
# @!attribute [rw] isActivatedByAdmin
#   @return [Boolean, nil]
#
# @!attribute [rw] isAdmin
#   @return [Boolean, nil]
#
# @!attribute [rw] isInternalUser
#   @return [Object, nil]
#
# @!attribute [rw] isMigrated
#   @return [Object, nil]
#
# @!attribute [rw] isResettingProduct
#   @return [Object, nil]
#
# @!attribute [rw] membership
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] partnerDirectLoginDisabled
#   @return [Boolean, nil]
#
# @!attribute [rw] partnerExternalUserId
#   @return [Object, nil]
#
# @!attribute [rw] partnerPolicyCode
#   @return [Object, nil]
#
# @!attribute [rw] partnerSource
#   @return [Object, nil]
#
# @!attribute [rw] picture
#   @return [Object, nil]
#
# @!attribute [rw] stripeCustomerId
#   @return [Object, nil]
#
# @!attribute [rw] stripeSubscriptionId
#   @return [Object, nil]
#
# @!attribute [rw] subscriptionCurrentPeriodEnd
#   @return [Object, nil]
#
# @!attribute [rw] subscriptionStatus
#   @return [Object, nil]
#
# @!attribute [rw] totalCount
#   @return [Integer, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] userId
#   @return [String, nil]
UserUpdateData = Struct.new(
  :accountType,
  :activatedByAdminAt,
  :activatedByAdminId,
  :agents,
  :agentsCount,
  :attribution,
  :avatarImageUrl,
  :avatarVoiceUrl,
  :createdAt,
  :credits,
  :email,
  :googleId,
  :hasSeenScheduleWelcome,
  :id,
  :industry,
  :instagramId,
  :isActivatedByAdmin,
  :isAdmin,
  :isInternalUser,
  :isMigrated,
  :isResettingProduct,
  :membership,
  :name,
  :partnerDirectLoginDisabled,
  :partnerExternalUserId,
  :partnerPolicyCode,
  :partnerSource,
  :picture,
  :stripeCustomerId,
  :stripeSubscriptionId,
  :subscriptionCurrentPeriodEnd,
  :subscriptionStatus,
  :totalCount,
  :updatedAt,
  :userId,
  keyword_init: true
)

# UserAgent entity data model.
#
# @!attribute [rw] agent
#   @return [Hash]
#
# @!attribute [rw] assigned_at
#   @return [String]
#
# @!attribute [rw] assignment_id
#   @return [String]
#
# @!attribute [rw] expires_at
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
UserAgent = Struct.new(
  :agent,
  :assigned_at,
  :assignment_id,
  :expires_at,
  :id,
  :status,
  keyword_init: true
)

# Request payload for UserAgent#list.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
UserAgentListMatch = Struct.new(
  :id,
  :limit,
  :offset,
  :product_id,
  keyword_init: true
)

# Request payload for UserAgent#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] agent_id
#   @return [String, nil]
#
# @!attribute [rw] phone_admin_pc_name
#   @return [Object, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] agent
#   @return [Hash]
#
# @!attribute [rw] assigned_at
#   @return [String]
#
# @!attribute [rw] assignment_id
#   @return [String]
#
# @!attribute [rw] expires_at
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [String]
UserAgentCreateData = Struct.new(
  :id,
  :agent_id,
  :phone_admin_pc_name,
  :product_id,
  :agent,
  :assigned_at,
  :assignment_id,
  :expires_at,
  :status,
  keyword_init: true
)

# UserHealthDetail entity data model.
#
# @!attribute [rw] account_type
#   @return [Object]
#
# @!attribute [rw] activated
#   @return [Boolean]
#
# @!attribute [rw] activated_by_admin_at
#   @return [Object, nil]
#
# @!attribute [rw] activated_by_admin_id
#   @return [String, nil]
#
# @!attribute [rw] admin_notes
#   @return [Object, nil]
#
# @!attribute [rw] agents_count
#   @return [Integer, nil]
#
# @!attribute [rw] assigned_agents
#   @return [Array]
#
# @!attribute [rw] assigned_agents_count
#   @return [Integer]
#
# @!attribute [rw] assigned_agents_preview_limit
#   @return [Integer, nil]
#
# @!attribute [rw] assigned_agents_truncated
#   @return [Boolean, nil]
#
# @!attribute [rw] auto_schedule_enabled
#   @return [Boolean]
#
# @!attribute [rw] comments_expected_per_day
#   @return [Integer, nil]
#
# @!attribute [rw] comments_fix_block_reason
#   @return [Object, nil]
#
# @!attribute [rw] comments_fix_ready
#   @return [Boolean, nil]
#
# @!attribute [rw] comments_today_failed
#   @return [Integer, nil]
#
# @!attribute [rw] comments_today_posted
#   @return [Integer, nil]
#
# @!attribute [rw] comments_today_scheduled
#   @return [Integer, nil]
#
# @!attribute [rw] comments_yesterday_failed
#   @return [Integer, nil]
#
# @!attribute [rw] comments_yesterday_posted
#   @return [Integer, nil]
#
# @!attribute [rw] comments_yesterday_total
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] credits
#   @return [Integer]
#
# @!attribute [rw] effective_posted_video_reuse_percent
#   @return [Integer]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] expected_agents_count
#   @return [Integer]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] is_activated_by_admin
#   @return [Boolean]
#
# @!attribute [rw] is_admin
#   @return [Boolean]
#
# @!attribute [rw] is_bookmarked
#   @return [Boolean, nil]
#
# @!attribute [rw] is_internal_user
#   @return [Boolean]
#
# @!attribute [rw] is_migrated
#   @return [Boolean]
#
# @!attribute [rw] landing_slug
#   @return [Object, nil]
#
# @!attribute [rw] landing_status
#   @return [Object, nil]
#
# @!attribute [rw] landing_url
#   @return [Object, nil]
#
# @!attribute [rw] membership
#   @return [Object]
#
# @!attribute [rw] microhub_status
#   @return [Object, nil]
#
# @!attribute [rw] microhub_url
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] onboarding_flow
#   @return [String]
#
# @!attribute [rw] posted_video_reuse_percent
#   @return [Object, nil]
#
# @!attribute [rw] product_id
#   @return [String]
#
# @!attribute [rw] product_name
#   @return [Object]
#
# @!attribute [rw] product_url
#   @return [Object]
#
# @!attribute [rw] subscription_status
#   @return [Object]
#
# @!attribute [rw] survey_data
#   @return [Object, nil]
#
# @!attribute [rw] today_failed
#   @return [Integer]
#
# @!attribute [rw] today_posted
#   @return [Integer]
#
# @!attribute [rw] today_scheduled
#   @return [Integer]
#
# @!attribute [rw] tomorrow_capacity
#   @return [Integer]
#
# @!attribute [rw] tomorrow_scheduled
#   @return [Integer]
#
# @!attribute [rw] videos_completed
#   @return [Integer]
#
# @!attribute [rw] videos_failed
#   @return [Integer]
#
# @!attribute [rw] videos_pending
#   @return [Integer]
#
# @!attribute [rw] videos_stale
#   @return [Integer]
#
# @!attribute [rw] videos_total
#   @return [Integer]
#
# @!attribute [rw] yesterday_failed
#   @return [Integer]
#
# @!attribute [rw] yesterday_failed_entries
#   @return [Array]
#
# @!attribute [rw] yesterday_posted
#   @return [Integer]
#
# @!attribute [rw] yesterday_total
#   @return [Integer]
UserHealthDetail = Struct.new(
  :account_type,
  :activated,
  :activated_by_admin_at,
  :activated_by_admin_id,
  :admin_notes,
  :agents_count,
  :assigned_agents,
  :assigned_agents_count,
  :assigned_agents_preview_limit,
  :assigned_agents_truncated,
  :auto_schedule_enabled,
  :comments_expected_per_day,
  :comments_fix_block_reason,
  :comments_fix_ready,
  :comments_today_failed,
  :comments_today_posted,
  :comments_today_scheduled,
  :comments_yesterday_failed,
  :comments_yesterday_posted,
  :comments_yesterday_total,
  :created_at,
  :credits,
  :effective_posted_video_reuse_percent,
  :email,
  :expected_agents_count,
  :id,
  :is_activated_by_admin,
  :is_admin,
  :is_bookmarked,
  :is_internal_user,
  :is_migrated,
  :landing_slug,
  :landing_status,
  :landing_url,
  :membership,
  :microhub_status,
  :microhub_url,
  :name,
  :onboarding_flow,
  :posted_video_reuse_percent,
  :product_id,
  :product_name,
  :product_url,
  :subscription_status,
  :survey_data,
  :today_failed,
  :today_posted,
  :today_scheduled,
  :tomorrow_capacity,
  :tomorrow_scheduled,
  :videos_completed,
  :videos_failed,
  :videos_pending,
  :videos_stale,
  :videos_total,
  :yesterday_failed,
  :yesterday_failed_entries,
  :yesterday_posted,
  :yesterday_total,
  keyword_init: true
)

# Request payload for UserHealthDetail#list.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] assigned_agents_preview_limit
#   @return [Integer, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
UserHealthDetailListMatch = Struct.new(
  :id,
  :assigned_agents_preview_limit,
  :product_id,
  keyword_init: true
)

# UserWithAvatarSubmission entity data model.
#
# @!attribute [rw] avatar_image_url
#   @return [String]
#
# @!attribute [rw] avatar_voice_url
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
UserWithAvatarSubmission = Struct.new(
  :avatar_image_url,
  :avatar_voice_url,
  :created_at,
  :email,
  :id,
  :name,
  keyword_init: true
)

# Request payload for UserWithAvatarSubmission#list.
#
# @!attribute [rw] avatar_image_url
#   @return [String, nil]
#
# @!attribute [rw] avatar_voice_url
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
UserWithAvatarSubmissionListMatch = Struct.new(
  :avatar_image_url,
  :avatar_voice_url,
  :created_at,
  :email,
  :id,
  :name,
  keyword_init: true
)

# UsersHealth entity data model.
#
# @!attribute [rw] account_type
#   @return [Object]
#
# @!attribute [rw] admin_notes
#   @return [Object, nil]
#
# @!attribute [rw] agents_count
#   @return [Integer]
#
# @!attribute [rw] agents_health
#   @return [String]
#
# @!attribute [rw] agents_issue
#   @return [Object]
#
# @!attribute [rw] assigned_agents_count
#   @return [Integer]
#
# @!attribute [rw] auto_schedule_enabled
#   @return [Boolean]
#
# @!attribute [rw] auto_schedule_health
#   @return [String]
#
# @!attribute [rw] auto_schedule_issue
#   @return [Object]
#
# @!attribute [rw] auto_schedule_today_health
#   @return [String]
#
# @!attribute [rw] auto_schedule_today_issue
#   @return [Object]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] expected_agents_count
#   @return [Integer]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] is_bookmarked
#   @return [Boolean, nil]
#
# @!attribute [rw] is_internal_user
#   @return [Boolean]
#
# @!attribute [rw] is_migrated
#   @return [Boolean]
#
# @!attribute [rw] membership
#   @return [Object]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] posts_health
#   @return [String]
#
# @!attribute [rw] posts_issue
#   @return [Object]
#
# @!attribute [rw] posts_today_health
#   @return [String]
#
# @!attribute [rw] posts_today_issue
#   @return [Object]
#
# @!attribute [rw] subscription_status
#   @return [Object]
#
# @!attribute [rw] today_expected_count
#   @return [Integer]
#
# @!attribute [rw] today_failed_count
#   @return [Integer]
#
# @!attribute [rw] today_scheduled_count
#   @return [Integer]
#
# @!attribute [rw] today_total_count
#   @return [Integer]
#
# @!attribute [rw] tomorrow_expected_count
#   @return [Integer]
#
# @!attribute [rw] tomorrow_scheduled_count
#   @return [Integer]
#
# @!attribute [rw] yesterday_failed_count
#   @return [Integer]
#
# @!attribute [rw] yesterday_total_count
#   @return [Integer]
UsersHealth = Struct.new(
  :account_type,
  :admin_notes,
  :agents_count,
  :agents_health,
  :agents_issue,
  :assigned_agents_count,
  :auto_schedule_enabled,
  :auto_schedule_health,
  :auto_schedule_issue,
  :auto_schedule_today_health,
  :auto_schedule_today_issue,
  :created_at,
  :email,
  :expected_agents_count,
  :id,
  :is_bookmarked,
  :is_internal_user,
  :is_migrated,
  :membership,
  :name,
  :posts_health,
  :posts_issue,
  :posts_today_health,
  :posts_today_issue,
  :subscription_status,
  :today_expected_count,
  :today_failed_count,
  :today_scheduled_count,
  :today_total_count,
  :tomorrow_expected_count,
  :tomorrow_scheduled_count,
  :yesterday_failed_count,
  :yesterday_total_count,
  keyword_init: true
)

# Request payload for UsersHealth#list.
#
# @!attribute [rw] include_internal_user
#   @return [Boolean, nil]
#
# @!attribute [rw] include_migrated_user
#   @return [Boolean, nil]
UsersHealthListMatch = Struct.new(
  :include_internal_user,
  :include_migrated_user,
  keyword_init: true
)

# Video entity data model.
#
# @!attribute [rw] agent_id
#   @return [String, nil]
#
# @!attribute [rw] bookmarked
#   @return [Object, nil]
#
# @!attribute [rw] captions
#   @return [Object, nil]
#
# @!attribute [rw] carousel_data
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] duration
#   @return [Float, nil]
#
# @!attribute [rw] generation_status
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] image_prompt
#   @return [Object, nil]
#
# @!attribute [rw] is_onboarding
#   @return [Boolean, nil]
#
# @!attribute [rw] is_template
#   @return [Boolean, nil]
#
# @!attribute [rw] main_avatar
#   @return [Object, nil]
#
# @!attribute [rw] main_prompt
#   @return [Object, nil]
#
# @!attribute [rw] media_asset_id
#   @return [String, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] reel_id
#   @return [String, nil]
#
# @!attribute [rw] thumbnail_url
#   @return [Object, nil]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] type
#   @return [Object, nil]
#
# @!attribute [rw] updated_at
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] user_id
#   @return [String, nil]
#
# @!attribute [rw] video_id
#   @return [String]
Video = Struct.new(
  :agent_id,
  :bookmarked,
  :captions,
  :carousel_data,
  :created_at,
  :duration,
  :generation_status,
  :id,
  :image_prompt,
  :is_onboarding,
  :is_template,
  :main_avatar,
  :main_prompt,
  :media_asset_id,
  :product_id,
  :reel_id,
  :thumbnail_url,
  :title,
  :type,
  :updated_at,
  :url,
  :user_id,
  :video_id,
  keyword_init: true
)

# Request payload for Video#load.
#
# @!attribute [rw] id
#   @return [String]
VideoLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Video#create.
#
# @!attribute [rw] agent_id
#   @return [String, nil]
#
# @!attribute [rw] bookmarked
#   @return [Object, nil]
#
# @!attribute [rw] captions
#   @return [Object]
#
# @!attribute [rw] carousel_data
#   @return [Object, nil]
#
# @!attribute [rw] duration
#   @return [Float, nil]
#
# @!attribute [rw] generation_status
#   @return [Object, nil]
#
# @!attribute [rw] image_prompt
#   @return [Object, nil]
#
# @!attribute [rw] is_onboarding
#   @return [Boolean, nil]
#
# @!attribute [rw] is_template
#   @return [Boolean, nil]
#
# @!attribute [rw] main_prompt
#   @return [Object, nil]
#
# @!attribute [rw] media_asset_id
#   @return [String, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] reel_id
#   @return [String, nil]
#
# @!attribute [rw] thumbnail_url
#   @return [Object, nil]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] type
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] user_id
#   @return [String, nil]
#
# @!attribute [rw] video_id
#   @return [String]
VideoCreateData = Struct.new(
  :agent_id,
  :bookmarked,
  :captions,
  :carousel_data,
  :duration,
  :generation_status,
  :image_prompt,
  :is_onboarding,
  :is_template,
  :main_prompt,
  :media_asset_id,
  :product_id,
  :reel_id,
  :thumbnail_url,
  :title,
  :type,
  :url,
  :user_id,
  :video_id,
  keyword_init: true
)

# Request payload for Video#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] agent_id
#   @return [String, nil]
#
# @!attribute [rw] bookmarked
#   @return [Object, nil]
#
# @!attribute [rw] captions
#   @return [Object, nil]
#
# @!attribute [rw] carousel_data
#   @return [Object, nil]
#
# @!attribute [rw] duration
#   @return [Float, nil]
#
# @!attribute [rw] generation_status
#   @return [Object, nil]
#
# @!attribute [rw] image_prompt
#   @return [Object, nil]
#
# @!attribute [rw] is_onboarding
#   @return [Boolean, nil]
#
# @!attribute [rw] is_template
#   @return [Boolean, nil]
#
# @!attribute [rw] main_prompt
#   @return [Object, nil]
#
# @!attribute [rw] media_asset_id
#   @return [String, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] reel_id
#   @return [String, nil]
#
# @!attribute [rw] thumbnail_url
#   @return [Object, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [String, nil]
VideoUpdateData = Struct.new(
  :id,
  :agent_id,
  :bookmarked,
  :captions,
  :carousel_data,
  :duration,
  :generation_status,
  :image_prompt,
  :is_onboarding,
  :is_template,
  :main_prompt,
  :media_asset_id,
  :product_id,
  :reel_id,
  :thumbnail_url,
  :title,
  :type,
  :url,
  :user_id,
  keyword_init: true
)

# Request payload for Video#remove.
#
# @!attribute [rw] id
#   @return [String]
VideoRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# VideoRemixerWorker entity data model.
#
# @!attribute [rw] captions_ass
#   @return [String, nil]
#
# @!attribute [rw] captions_vtt
#   @return [String, nil]
#
# @!attribute [rw] cost_usd
#   @return [Float, nil]
#
# @!attribute [rw] error
#   @return [String]
#
# @!attribute [rw] file
#   @return [String]
#
# @!attribute [rw] kinds
#   @return [Array, nil]
#
# @!attribute [rw] lease_token
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] manifest
#   @return [String]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] processing_seconds
#   @return [Float, nil]
#
# @!attribute [rw] prompt_version
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] thumbnail
#   @return [String]
#
# @!attribute [rw] tier
#   @return [String, nil]
#
# @!attribute [rw] worker_id
#   @return [String]
VideoRemixerWorker = Struct.new(
  :captions_ass,
  :captions_vtt,
  :cost_usd,
  :error,
  :file,
  :kinds,
  :lease_token,
  :limit,
  :manifest,
  :model,
  :processing_seconds,
  :prompt_version,
  :result,
  :thumbnail,
  :tier,
  :worker_id,
  keyword_init: true
)

# Request payload for VideoRemixerWorker#create.
#
# @!attribute [rw] captions_ass
#   @return [String, nil]
#
# @!attribute [rw] captions_vtt
#   @return [String, nil]
#
# @!attribute [rw] cost_usd
#   @return [Float, nil]
#
# @!attribute [rw] error
#   @return [String]
#
# @!attribute [rw] file
#   @return [String]
#
# @!attribute [rw] kinds
#   @return [Array, nil]
#
# @!attribute [rw] lease_token
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] manifest
#   @return [String]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] processing_seconds
#   @return [Float, nil]
#
# @!attribute [rw] prompt_version
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] thumbnail
#   @return [String]
#
# @!attribute [rw] tier
#   @return [String, nil]
#
# @!attribute [rw] worker_id
#   @return [String]
VideoRemixerWorkerCreateData = Struct.new(
  :captions_ass,
  :captions_vtt,
  :cost_usd,
  :error,
  :file,
  :kinds,
  :lease_token,
  :limit,
  :manifest,
  :model,
  :processing_seconds,
  :prompt_version,
  :result,
  :thumbnail,
  :tier,
  :worker_id,
  keyword_init: true
)

# WatchdogRecovery entity data model.
#
# @!attribute [rw] item_id
#   @return [String]
#
# @!attribute [rw] passed
#   @return [Boolean]
#
# @!attribute [rw] table
#   @return [String]
WatchdogRecovery = Struct.new(
  :item_id,
  :passed,
  :table,
  keyword_init: true
)

# Request payload for WatchdogRecovery#load.
#
# @!attribute [rw] device_id
#   @return [String, nil]
WatchdogRecoveryLoadMatch = Struct.new(
  :device_id,
  keyword_init: true
)

# Request payload for WatchdogRecovery#create.
#
# @!attribute [rw] item_id
#   @return [String]
#
# @!attribute [rw] passed
#   @return [Boolean]
#
# @!attribute [rw] table
#   @return [String]
WatchdogRecoveryCreateData = Struct.new(
  :item_id,
  :passed,
  :table,
  keyword_init: true
)

# WinningAd entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] source
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
WinningAd = Struct.new(
  :created_at,
  :description,
  :id,
  :source,
  :type,
  :url,
  keyword_init: true
)

# Request payload for WinningAd#list.
#
# @!attribute [rw] product_id
#   @return [String, nil]
WinningAdListMatch = Struct.new(
  :product_id,
  keyword_init: true
)

# XAdaptation entity data model.
class XAdaptation
end

# Request payload for XAdaptation#load.
class XAdaptationLoadMatch
end

# ZerohumanAdminAccount entity data model.
#
# @!attribute [rw] account_mode
#   @return [String]
#
# @!attribute [rw] active_queue_count
#   @return [Integer]
#
# @!attribute [rw] assigned_agent
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [Object, nil]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] external_user_id
#   @return [String]
#
# @!attribute [rw] membership
#   @return [Object, nil]
#
# @!attribute [rw] policy_code
#   @return [Object, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] product_name
#   @return [Object, nil]
#
# @!attribute [rw] provisioning_status
#   @return [String]
#
# @!attribute [rw] subscription_status
#   @return [Object, nil]
#
# @!attribute [rw] updated_at
#   @return [Object, nil]
#
# @!attribute [rw] user_id
#   @return [String]
ZerohumanAdminAccount = Struct.new(
  :account_mode,
  :active_queue_count,
  :assigned_agent,
  :created_at,
  :email,
  :external_user_id,
  :membership,
  :policy_code,
  :product_id,
  :product_name,
  :provisioning_status,
  :subscription_status,
  :updated_at,
  :user_id,
  keyword_init: true
)

# Request payload for ZerohumanAdminAccount#list.
#
# @!attribute [rw] account_mode
#   @return [String, nil]
#
# @!attribute [rw] active_queue_count
#   @return [Integer, nil]
#
# @!attribute [rw] assigned_agent
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [Object, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] external_user_id
#   @return [String, nil]
#
# @!attribute [rw] membership
#   @return [Object, nil]
#
# @!attribute [rw] policy_code
#   @return [Object, nil]
#
# @!attribute [rw] product_id
#   @return [String, nil]
#
# @!attribute [rw] product_name
#   @return [Object, nil]
#
# @!attribute [rw] provisioning_status
#   @return [String, nil]
#
# @!attribute [rw] subscription_status
#   @return [Object, nil]
#
# @!attribute [rw] updated_at
#   @return [Object, nil]
#
# @!attribute [rw] user_id
#   @return [String, nil]
ZerohumanAdminAccountListMatch = Struct.new(
  :account_mode,
  :active_queue_count,
  :assigned_agent,
  :created_at,
  :email,
  :external_user_id,
  :membership,
  :policy_code,
  :product_id,
  :product_name,
  :provisioning_status,
  :subscription_status,
  :updated_at,
  :user_id,
  keyword_init: true
)

