import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "activate",
    "accessor": "Activate",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/users/{user_id}/activate",
    "args": [
      {
        "name": "user_id",
        "wire": "user_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "success": true,
      "message": "x",
      "activated_at": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "activate_user",
    "accessor": "ActivateUser",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/users/{user_id}/activate-and-complete-onboarding",
    "args": [
      {
        "name": "user_id",
        "wire": "user_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "success": true,
      "message": "x",
      "activated_at": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "active_onboarding",
    "accessor": "ActiveOnboarding",
    "op": "load",
    "method": "GET",
    "path": "/api/onboarding-v6/active-session",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "has_active_onboarding": true,
      "onboarding_data_id": "x",
      "current_step": "x"
    },
    "idField": "id"
  },
  {
    "entity": "admin",
    "accessor": "Admin",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/users/{user_id}/regenerate-video/{video_id}",
    "args": [
      {
        "name": "user_id",
        "wire": "user_id",
        "value": "p1"
      },
      {
        "name": "video_id",
        "wire": "video_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin",
    "accessor": "Admin",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/batch-regenerate-sora2",
    "action": "batch_regenerate_sora2",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin",
    "accessor": "Admin",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/test-s3-copy",
    "action": "test_s3_copy",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin",
    "accessor": "Admin",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/whitelist-testers",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "email": "x",
        "id": "x",
        "created_at": "2026-01-01T00:00:00Z",
        "user_name": "x",
        "user_onboarding_step": "x",
        "user_membership": "x"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "admin",
    "accessor": "Admin",
    "op": "load",
    "method": "GET",
    "path": "/api/admin/stats/by-date-and-type",
    "args": [],
    "select": {
      "date": "v1",
      "day": "v1",
      "user_email": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "date",
      "days",
      "user_email",
      "user_id"
    ],
    "queryArgs": [
      {
        "name": "date",
        "wire": "date"
      },
      {
        "name": "day",
        "wire": "days"
      },
      {
        "name": "user_email",
        "wire": "user_email"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin",
    "accessor": "Admin",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/admin/users/{user_id}/agents/{agent_id}",
    "args": [
      {
        "name": "agent_id",
        "wire": "agent_id",
        "value": "p1"
      },
      {
        "name": "user_id",
        "wire": "user_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin",
    "accessor": "Admin",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/admin/users/{user_id}/schedule-queue/{queue_id}",
    "args": [
      {
        "name": "queue_id",
        "wire": "queue_id",
        "value": "p1"
      },
      {
        "name": "user_id",
        "wire": "user_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin",
    "accessor": "Admin",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/admin/users/{user_id}/video/{video_id}",
    "args": [
      {
        "name": "user_id",
        "wire": "user_id",
        "value": "p1"
      },
      {
        "name": "video_id",
        "wire": "video_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin",
    "accessor": "Admin",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/admin/whitelist-testers/{tester_id}",
    "args": [
      {
        "name": "tester_id",
        "wire": "tester_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin",
    "accessor": "Admin",
    "op": "update",
    "method": "PUT",
    "path": "/api/admin/agents/{agent_id}/type",
    "args": [
      {
        "name": "agent_id",
        "wire": "agent_id",
        "value": "p1"
      }
    ],
    "select": {
      "agent_type": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "agent_type"
    ],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin",
    "accessor": "Admin",
    "op": "update",
    "method": "PUT",
    "path": "/api/admin/agents/{agent_id}/active",
    "args": [
      {
        "name": "agent_id",
        "wire": "agent_id",
        "value": "p1"
      }
    ],
    "select": {
      "is_active": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "is_active"
    ],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_account_reset",
    "accessor": "AdminAccountReset",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/agent-account-reset",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_carousel",
    "accessor": "AdminCarousel",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/carousels/slideshow-import/{batch_id}/state",
    "action": "state",
    "args": [
      {
        "name": "batch_id",
        "wire": "batch_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_carousel",
    "accessor": "AdminCarousel",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/carousels/slideshow-import/diag/{stage}",
    "args": [
      {
        "name": "stage",
        "wire": "stage",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_carousel",
    "accessor": "AdminCarousel",
    "op": "load",
    "method": "GET",
    "path": "/api/admin/carousels/slideshow-import/{batch_id}",
    "args": [
      {
        "name": "batch_id",
        "wire": "batch_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_carousel",
    "accessor": "AdminCarousel",
    "op": "load",
    "method": "GET",
    "path": "/api/admin/carousels/production-prompts/{fmt}",
    "args": [
      {
        "name": "fmt",
        "wire": "fmt",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_carousel",
    "accessor": "AdminCarousel",
    "op": "load",
    "method": "GET",
    "path": "/api/admin/carousels/demo-formulas/{formula_id}",
    "args": [
      {
        "name": "formula_id",
        "wire": "formula_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_carousel",
    "accessor": "AdminCarousel",
    "op": "update",
    "method": "PUT",
    "path": "/api/admin/carousels/production-prompts/{fmt}",
    "args": [
      {
        "name": "fmt",
        "wire": "fmt",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_carousel",
    "accessor": "AdminCarousel",
    "op": "update",
    "method": "PUT",
    "path": "/api/admin/carousels/demo-formulas/{formula_id}",
    "args": [
      {
        "name": "formula_id",
        "wire": "formula_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_carousel",
    "accessor": "AdminCarousel",
    "op": "update",
    "method": "PUT",
    "path": "/api/admin/carousels/freeform-production-prompt",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_carousel_demo_review",
    "accessor": "AdminCarouselDemoReview",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/carousels/demo-reviews/{formula_id}/decision",
    "action": "decision",
    "args": [
      {
        "name": "demo_review_id",
        "wire": "formula_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_carousel_demo_review",
    "accessor": "AdminCarouselDemoReview",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/carousels/demo-reviews/bulk-approve",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_carousel_demo_review",
    "accessor": "AdminCarouselDemoReview",
    "op": "load",
    "method": "GET",
    "path": "/api/admin/carousels/demo-reviews/{formula_id}",
    "args": [
      {
        "name": "id",
        "wire": "formula_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_carousel_demo_review",
    "accessor": "AdminCarouselDemoReview",
    "op": "load",
    "method": "GET",
    "path": "/api/admin/carousels/demo-reviews/items",
    "args": [],
    "select": {
      "formula_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "formula_id"
    ],
    "queryArgs": [
      {
        "name": "formula_id",
        "wire": "formula_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_carousel_demo_review",
    "accessor": "AdminCarouselDemoReview",
    "op": "update",
    "method": "PUT",
    "path": "/api/admin/carousels/demo-reviews/{formula_id}/assignee",
    "action": "assignee",
    "args": [
      {
        "name": "demo_review_id",
        "wire": "formula_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_customer",
    "accessor": "AdminCustomer",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/insights/customers",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "generated_at": "2026-01-01T00:00:00Z",
      "customers": [
        {
          "user_id": "x",
          "email": "x",
          "name": "x",
          "membership": "x",
          "subscription_status": "x",
          "billing_source": "x",
          "account_type": "x",
          "contracted_agents": 1,
          "active_vireel_agents": 1,
          "pfa_only_agents": 1,
          "severity": "x",
          "status": "x",
          "agents": [
            {
              "agent_id": "x",
              "agent_name": "x",
              "agent_type": "x",
              "source": "x",
              "severity": "x",
              "status": "x",
              "assignment_status": "x",
              "product_id": "x",
              "assigned_at": "2026-01-01T00:00:00Z",
              "is_active": true,
              "last_admin_synced_at": "2026-01-01T00:00:00Z",
              "expected_customer_email": "x",
              "ownership_status": "x",
              "ownership_reason": "x",
              "pfa_found": true,
              "pfa_is_used_by_cracked": true,
              "pfa_customer_email": "x",
              "pfa_assignment_stage": "x",
              "device_status": "x",
              "device_pc": "x",
              "device_serial": "x",
              "device_last_heartbeat_at": "2026-01-01T00:00:00Z",
              "posted_7d": 1,
              "failed_7d": 1,
              "upcoming_posts": 1,
              "latest_posted_at": "2026-01-01T00:00:00Z",
              "watchdog": {
                "open_incidents": 1,
                "escalated_incidents": 1
              },
              "social_accounts": [
                {}
              ]
            }
          ]
        }
      ],
      "summary": {
        "paying_customers": 1,
        "customers_without_agents": 1,
        "total_agents": 1,
        "vireel_agents": 1,
        "pfa_only_agents": 1,
        "pfa_matched_agents": 1,
        "pfa_missing_agents": 1,
        "ownership_mismatches": 1,
        "social_accounts_total": 1,
        "healthy_social_accounts": 1,
        "warning_social_accounts": 1,
        "danger_social_accounts": 1,
        "banned_accounts": 1,
        "review_accounts": 1,
        "logged_out_or_missing_accounts": 1,
        "upload_post_disconnected": 1,
        "open_watchdog_incidents": 1,
        "escalated_watchdog_incidents": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "admin_customer_success",
    "accessor": "AdminCustomerSuccess",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/insights/customer-success",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "generated_at": "2026-01-01T00:00:00Z",
      "customer_success_cases": [
        {
          "user_id": "x",
          "email": "x",
          "name": "x",
          "membership": "x",
          "subscription_status": "x",
          "status_label": "x",
          "priority": "x",
          "severity": "x",
          "subscription_current_period_end": "2026-01-01T00:00:00Z",
          "days_until_period_end": 1,
          "feature_impact": "x",
          "auto_schedule_status": "x",
          "agents_count": 1,
          "active_products": 1,
          "active_agents": 1,
          "upcoming_posts": 1,
          "notification_events": [
            "x"
          ],
          "notification_count": 1,
          "last_notification_at": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "admin_generated_video",
    "accessor": "AdminGeneratedVideo",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/users/{user_id}/generated-videos",
    "args": [
      {
        "name": "user_id",
        "wire": "user_id",
        "value": "p1"
      }
    ],
    "select": {
      "limit": 50,
      "product_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "product_id",
      "limit"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "product_id",
        "wire": "product_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "user_id": "x",
      "count": 1,
      "videos": [
        {
          "id": "x",
          "title": "x",
          "type": "x",
          "url": "x",
          "thumbnail_url": "x",
          "product_id": "x",
          "agent_id": "x",
          "agent_name": "x",
          "duration": 1,
          "created_at": "2026-01-01T00:00:00Z",
          "updated_at": "2026-01-01T00:00:00Z",
          "generation_status": {}
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "admin_healthrx",
    "accessor": "AdminHealthrx",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/healthrx/items/{kind}/{item_id}/decision",
    "args": [
      {
        "name": "item_id",
        "wire": "item_id",
        "value": "p1"
      },
      {
        "name": "kind",
        "wire": "kind",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_healthrx",
    "accessor": "AdminHealthrx",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/healthrx/items/comments/{item_id}/selection",
    "args": [
      {
        "name": "comment_id",
        "wire": "item_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_healthrx",
    "accessor": "AdminHealthrx",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/healthrx/videos/{source_id}/viewed",
    "args": [
      {
        "name": "video_id",
        "wire": "source_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_healthrx",
    "accessor": "AdminHealthrx",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/healthrx/automation/runs",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 202,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_healthrx",
    "accessor": "AdminHealthrx",
    "op": "load",
    "method": "GET",
    "path": "/api/admin/healthrx/items/{kind}/{item_id}",
    "args": [
      {
        "name": "item_id",
        "wire": "item_id",
        "value": "p1"
      },
      {
        "name": "kind",
        "wire": "kind",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_healthrx",
    "accessor": "AdminHealthrx",
    "op": "update",
    "method": "PUT",
    "path": "/api/admin/healthrx/automation/config",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_insight",
    "accessor": "AdminInsight",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/insights",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "generated_at": "2026-01-01T00:00:00Z",
      "vireel_database": {
        "label": "x",
        "host": "x",
        "database": "x",
        "configured": true,
        "error": "x"
      },
      "pfa_database": {
        "label": "x",
        "host": "x",
        "database": "x",
        "configured": true,
        "error": "x"
      },
      "summary": {
        "paying_customers": 1,
        "customers_without_agents": 1,
        "total_agents": 1,
        "vireel_agents": 1,
        "pfa_only_agents": 1,
        "pfa_matched_agents": 1,
        "pfa_missing_agents": 1,
        "ownership_mismatches": 1,
        "social_accounts_total": 1,
        "healthy_social_accounts": 1,
        "warning_social_accounts": 1,
        "danger_social_accounts": 1,
        "banned_accounts": 1,
        "review_accounts": 1,
        "logged_out_or_missing_accounts": 1,
        "upload_post_disconnected": 1,
        "open_watchdog_incidents": 1,
        "escalated_watchdog_incidents": 1
      },
      "customers": [
        {
          "user_id": "x",
          "email": "x",
          "name": "x",
          "membership": "x",
          "subscription_status": "x",
          "billing_source": "x",
          "account_type": "x",
          "contracted_agents": 1,
          "active_vireel_agents": 1,
          "pfa_only_agents": 1,
          "severity": "x",
          "status": "x",
          "agents": [
            {
              "agent_id": "x",
              "agent_name": "x",
              "agent_type": "x",
              "source": "x",
              "severity": "x",
              "status": "x",
              "assignment_status": "x",
              "product_id": "x",
              "assigned_at": "2026-01-01T00:00:00Z",
              "is_active": true,
              "last_admin_synced_at": "2026-01-01T00:00:00Z",
              "expected_customer_email": "x",
              "ownership_status": "x",
              "ownership_reason": "x",
              "pfa_found": true,
              "pfa_is_used_by_cracked": true,
              "pfa_customer_email": "x",
              "pfa_assignment_stage": "x",
              "device_status": "x",
              "device_pc": "x",
              "device_serial": "x",
              "device_last_heartbeat_at": "2026-01-01T00:00:00Z",
              "posted_7d": 1,
              "failed_7d": 1,
              "upcoming_posts": 1,
              "latest_posted_at": "2026-01-01T00:00:00Z",
              "watchdog": {
                "open_incidents": 1,
                "escalated_incidents": 1
              },
              "social_accounts": [
                {}
              ]
            }
          ]
        }
      ],
      "recent_signups": [
        {
          "id": "x",
          "email": "x",
          "email_source": "x",
          "product_url": "x",
          "product_name": "x",
          "flow_variant": "x",
          "current_step": "x",
          "stage_label": "x",
          "status": "x",
          "severity": "x",
          "likely_cause": "x",
          "website_scrape_status": "x",
          "social_scan_status": "x",
          "product_id": "x",
          "created_at": "2026-01-01T00:00:00Z",
          "updated_at": "2026-01-01T00:00:00Z",
          "last_seen_at": "2026-01-01T00:00:00Z",
          "inactive_minutes": 1,
          "notification_events": [
            "x"
          ],
          "notification_count": 1,
          "last_notification_at": "x",
          "error_message": "x"
        }
      ],
      "customer_success_cases": [
        {
          "user_id": "x",
          "email": "x",
          "name": "x",
          "membership": "x",
          "subscription_status": "x",
          "status_label": "x",
          "priority": "x",
          "severity": "x",
          "subscription_current_period_end": "2026-01-01T00:00:00Z",
          "days_until_period_end": 1,
          "feature_impact": "x",
          "auto_schedule_status": "x",
          "agents_count": 1,
          "active_products": 1,
          "active_agents": 1,
          "upcoming_posts": 1,
          "notification_events": [
            "x"
          ],
          "notification_count": 1,
          "last_notification_at": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "admin_insight",
    "accessor": "AdminInsight",
    "op": "load",
    "method": "GET",
    "path": "/api/admin/insights/customer-agent-readiness",
    "args": [],
    "select": {
      "customer_email": "v1",
      "include_agent": "v1",
      "limit": 500,
      "page": 1
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "customer_emails",
      "include_agents",
      "page",
      "limit"
    ],
    "queryArgs": [
      {
        "name": "customer_email",
        "wire": "customer_emails"
      },
      {
        "name": "include_agent",
        "wire": "include_agents"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "page",
        "wire": "page"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "admin_metrics_summary",
    "accessor": "AdminMetricsSummary",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/metrics/summary",
    "args": [],
    "select": {
      "date_filter": "all_time"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "date_filter"
    ],
    "queryArgs": [
      {
        "name": "date_filter",
        "wire": "date_filter"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_signups": 1,
      "url_attempts": 1,
      "paid_users_by_level": [
        {
          "level": "x",
          "count": 1
        }
      ],
      "total_videos_generated": 1,
      "total_previews_generated": 1,
      "total_cancellations": 1,
      "user_credits": [
        {
          "name": "x",
          "email": "x",
          "used_credits": 1,
          "total_credits": 1
        }
      ],
      "user_gifted_credits": [
        {
          "name": "x",
          "email": "x",
          "used_credits": 1,
          "gifted_credits": 1
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "admin_post",
    "accessor": "AdminPost",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/posts",
    "args": [],
    "select": {
      "date": "v1",
      "include_entry": "v1",
      "platform": "all",
      "posting_method": "all"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "date",
      "posting_method",
      "platform",
      "include_entries"
    ],
    "queryArgs": [
      {
        "name": "date",
        "wire": "date"
      },
      {
        "name": "include_entry",
        "wire": "include_entries"
      },
      {
        "name": "platform",
        "wire": "platform"
      },
      {
        "name": "posting_method",
        "wire": "posting_method"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "date": "2026-01-01",
      "total": 1,
      "stats": {
        "scheduled": 1,
        "posting": 1,
        "posted": 1,
        "failed": 1,
        "total_views": 1,
        "total_likes": 1,
        "total_comments": 1,
        "avg_views": 1,
        "avg_likes": 1,
        "avg_comments": 1
      },
      "stats_breakdown": {
        "all": {
          "scheduled": 1,
          "posting": 1,
          "posted": 1,
          "failed": 1,
          "total_views": 1,
          "total_likes": 1,
          "total_comments": 1,
          "avg_views": 1,
          "avg_likes": 1,
          "avg_comments": 1
        },
        "phone_admin": {
          "scheduled": 1,
          "posting": 1,
          "posted": 1,
          "failed": 1,
          "total_views": 1,
          "total_likes": 1,
          "total_comments": 1,
          "avg_views": 1,
          "avg_likes": 1,
          "avg_comments": 1
        },
        "upload_post": {
          "scheduled": 1,
          "posting": 1,
          "posted": 1,
          "failed": 1,
          "total_views": 1,
          "total_likes": 1,
          "total_comments": 1,
          "avg_views": 1,
          "avg_likes": 1,
          "avg_comments": 1
        }
      },
      "entries": [
        {
          "id": "x",
          "user_id": "x",
          "user_email": "x",
          "user_name": "x",
          "product_id": "x",
          "video_id": "x",
          "video_url": "x",
          "post_url": "x",
          "agent_url": "x",
          "agent_platform_urls": {},
          "agent_id": "x",
          "agent_name": "x",
          "scheduled_datetime": "2026-01-01T00:00:00Z",
          "source_type": "x",
          "status": "x",
          "views": 1,
          "likes": 1,
          "comments": 1,
          "error_message": "x",
          "post_method": "x",
          "post_platforms": [
            "x"
          ],
          "is_tiktok_posted": true,
          "tiktok_posted_url": "x",
          "tiktok_scraped_social_post_id": "x",
          "tiktok_posted_by": "x",
          "is_instagram_posted": true,
          "instagram_posted_url": "x",
          "instagram_scraped_social_post_id": "x",
          "instagram_posted_by": "x",
          "is_youtube_posted": true,
          "youtube_posted_url": "x",
          "youtube_scraped_social_post_id": "x",
          "youtube_posted_by": "x",
          "platform_urls": {},
          "platform_post_methods": {},
          "admin_job_ids": {},
          "upload_post_status": "x",
          "upload_post_error": "x",
          "upload_post_uploads": {},
          "results_status": "x",
          "posted_at": "x",
          "failed_at": "x",
          "last_refreshed_at": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "admin_recent_signup",
    "accessor": "AdminRecentSignup",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/insights/recent-signups",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "generated_at": "2026-01-01T00:00:00Z",
      "recent_signups": [
        {
          "id": "x",
          "email": "x",
          "email_source": "x",
          "product_url": "x",
          "product_name": "x",
          "flow_variant": "x",
          "current_step": "x",
          "stage_label": "x",
          "status": "x",
          "severity": "x",
          "likely_cause": "x",
          "website_scrape_status": "x",
          "social_scan_status": "x",
          "product_id": "x",
          "created_at": "2026-01-01T00:00:00Z",
          "updated_at": "2026-01-01T00:00:00Z",
          "last_seen_at": "2026-01-01T00:00:00Z",
          "inactive_minutes": 1,
          "notification_events": [
            "x"
          ],
          "notification_count": 1,
          "last_notification_at": "x",
          "error_message": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "admin_slideshow_diag",
    "accessor": "AdminSlideshowDiag",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/slideshow-diag/{stage}",
    "args": [
      {
        "name": "id",
        "wire": "stage",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_slideshow_import",
    "accessor": "AdminSlideshowImport",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/slideshow-import2/{batch_id}/state",
    "action": "state",
    "args": [
      {
        "name": "batch_id",
        "wire": "batch_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_slideshow_import",
    "accessor": "AdminSlideshowImport",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/slideshow-import2/decks-json",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_slideshow_import",
    "accessor": "AdminSlideshowImport",
    "op": "load",
    "method": "GET",
    "path": "/api/admin/slideshow-import2/{batch_id}",
    "args": [
      {
        "name": "batch_id",
        "wire": "batch_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_user_view",
    "accessor": "AdminUserView",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/users/{user_id}/fix-auto-schedule-by-date",
    "action": "fix_auto_schedule_by_date",
    "args": [
      {
        "name": "user_id",
        "wire": "user_id",
        "value": "p1"
      }
    ],
    "select": {
      "target_date": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "target_date",
      "product_id"
    ],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_user_view",
    "accessor": "AdminUserView",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/users/{user_id}/repair-approved-source-queue-today",
    "action": "repair_approved_source_queue_today",
    "args": [
      {
        "name": "user_id",
        "wire": "user_id",
        "value": "p1"
      }
    ],
    "select": {
      "product_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "product_id"
    ],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_user_view",
    "accessor": "AdminUserView",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/users/{user_id}/fix-all",
    "action": "fix_all",
    "args": [
      {
        "name": "user_id",
        "wire": "user_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_user_view",
    "accessor": "AdminUserView",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/users/{user_id}/fix-auto-schedule",
    "action": "fix_auto_schedule",
    "args": [
      {
        "name": "user_id",
        "wire": "user_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "product_id"
    ],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_user_view",
    "accessor": "AdminUserView",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/users/{user_id}/fix-auto-schedule-today",
    "action": "fix_auto_schedule_today",
    "args": [
      {
        "name": "user_id",
        "wire": "user_id",
        "value": "p1"
      }
    ],
    "select": {
      "background": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "product_id",
      "background"
    ],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_user_view",
    "accessor": "AdminUserView",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/users/{user_id}/fix-auto-schedule-today-force",
    "action": "fix_auto_schedule_today_force",
    "args": [
      {
        "name": "user_id",
        "wire": "user_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "product_id"
    ],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_user_view",
    "accessor": "AdminUserView",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/users/{user_id}/fix-auto-schedule-tomorrow",
    "action": "fix_auto_schedule_tomorrow",
    "args": [
      {
        "name": "user_id",
        "wire": "user_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "product_id"
    ],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_user_view",
    "accessor": "AdminUserView",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/users/{user_id}/fix-comments-today",
    "action": "fix_comments_today",
    "args": [
      {
        "name": "user_id",
        "wire": "user_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "product_id"
    ],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_user_view",
    "accessor": "AdminUserView",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/users/{user_id}/generate-pomelli-video",
    "action": "generate_pomelli_video",
    "args": [
      {
        "name": "user_id",
        "wire": "user_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_user_view",
    "accessor": "AdminUserView",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/users/{user_id}/repost-tiktok-videos-tomorrow",
    "action": "repost_tiktok_videos_tomorrow",
    "args": [
      {
        "name": "user_id",
        "wire": "user_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "product_id"
    ],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_user_view",
    "accessor": "AdminUserView",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/users/{user_id}/reset-onboarding",
    "action": "reset_onboarding",
    "args": [
      {
        "name": "user_id",
        "wire": "user_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_user_view",
    "accessor": "AdminUserView",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/users/search",
    "args": [],
    "select": {
      "email": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "email"
    ],
    "queryArgs": [
      {
        "name": "email",
        "wire": "email"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "id": "x",
        "email": "x",
        "name": "x",
        "credits": 1,
        "membership": "STARTER",
        "agents_count": 1,
        "subscription_status": "x",
        "subscription_details": "x",
        "created_at": "2026-01-01T00:00:00Z",
        "is_admin": true,
        "is_internal_user": true,
        "account_type": "standard",
        "partner_source": "x",
        "partner_external_user_id": "x",
        "partner_policy_code": "x"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "admin_user_view",
    "accessor": "AdminUserView",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/users",
    "args": [],
    "select": {
      "limit": 20,
      "page": 1
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page",
      "limit"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "page",
        "wire": "page"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "id": "x",
        "name": "x",
        "email": "x",
        "credits": 1,
        "membership": "STARTER",
        "agents_count": 1,
        "industry": "x",
        "product_name": "x",
        "product_url": "x",
        "skip": true,
        "created_at": "2026-01-01T00:00:00Z"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "admin_user_view",
    "accessor": "AdminUserView",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/admin/users/{user_id}",
    "args": [
      {
        "name": "user_id",
        "wire": "user_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_user_view",
    "accessor": "AdminUserView",
    "op": "update",
    "method": "PUT",
    "path": "/api/admin/users/{user_id}/auto-schedule",
    "action": "auto_schedule",
    "args": [
      {
        "name": "user_id",
        "wire": "user_id",
        "value": "p1"
      }
    ],
    "select": {
      "is_enabled": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "is_enabled",
      "product_id"
    ],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_user_view",
    "accessor": "AdminUserView",
    "op": "update",
    "method": "PUT",
    "path": "/api/admin/users/{user_id}/posted-video-reuse",
    "action": "posted_video_reuse",
    "args": [
      {
        "name": "user_id",
        "wire": "user_id",
        "value": "p1"
      }
    ],
    "select": {
      "product_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "product_id"
    ],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_user_view",
    "accessor": "AdminUserView",
    "op": "update",
    "method": "PUT",
    "path": "/api/admin/users/{user_id}",
    "args": [
      {
        "name": "user_id",
        "wire": "user_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": "x",
      "email": "x",
      "name": "x",
      "credits": 1,
      "membership": "STARTER",
      "agents_count": 1,
      "subscription_status": "x",
      "subscription_details": "x",
      "created_at": "2026-01-01T00:00:00Z",
      "is_admin": true,
      "is_internal_user": true,
      "account_type": "standard",
      "partner_source": "x",
      "partner_external_user_id": "x",
      "partner_policy_code": "x"
    },
    "idField": "id"
  },
  {
    "entity": "admin_users_table_item",
    "accessor": "AdminUsersTableItem",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/users/table",
    "args": [],
    "select": {
      "page": 1,
      "page_size": 20
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page",
      "page_size"
    ],
    "queryArgs": [
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total": 1,
      "page": 1,
      "page_size": 1,
      "items": [
        {
          "id": "x",
          "name": "x",
          "email": "x",
          "onboarding_flow": "x",
          "activated": true,
          "survey_data": {},
          "demo_booked": true,
          "membership": "STARTER",
          "agents_count": 1,
          "credits": 1,
          "product_name": "x",
          "product_url": "x",
          "created_at": "2026-01-01T00:00:00Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "admin_video_remixer",
    "accessor": "AdminVideoRemixer",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/video-remixer/clips/{clip_id}/media",
    "action": "media",
    "args": [
      {
        "name": "clip_id",
        "wire": "clip_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_video_remixer",
    "accessor": "AdminVideoRemixer",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/video-remixer/clippers/{identifier}/access",
    "action": "access",
    "args": [
      {
        "name": "identifier",
        "wire": "identifier",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_video_remixer",
    "accessor": "AdminVideoRemixer",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/video-remixer/reviews/{identifier}/human-check",
    "action": "human_check",
    "args": [
      {
        "name": "identifier",
        "wire": "identifier",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_video_remixer",
    "accessor": "AdminVideoRemixer",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/video-remixer/recipes/{identifier}/preflight",
    "action": "preflight",
    "args": [
      {
        "name": "identifier",
        "wire": "identifier",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_video_remixer",
    "accessor": "AdminVideoRemixer",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/video-remixer/reviews/{identifier}/decision",
    "action": "decision",
    "args": [
      {
        "name": "identifier",
        "wire": "identifier",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_video_remixer",
    "accessor": "AdminVideoRemixer",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/video-remixer/reviews/{identifier}/export",
    "action": "export",
    "args": [
      {
        "name": "identifier",
        "wire": "identifier",
        "value": "p1"
      }
    ],
    "select": {
      "channel": "paid"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "channel"
    ],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_video_remixer",
    "accessor": "AdminVideoRemixer",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/video-remixer/reviews/{identifier}/handoff",
    "action": "handoff",
    "args": [
      {
        "name": "identifier",
        "wire": "identifier",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_video_remixer",
    "accessor": "AdminVideoRemixer",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/video-remixer/reviews/{identifier}/repair",
    "action": "repair",
    "args": [
      {
        "name": "identifier",
        "wire": "identifier",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_video_remixer",
    "accessor": "AdminVideoRemixer",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/video-remixer/runs/{identifier}/restore",
    "action": "restore",
    "args": [
      {
        "name": "identifier",
        "wire": "identifier",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_video_remixer",
    "accessor": "AdminVideoRemixer",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/video-remixer/projects/{project_id}/renders",
    "args": [
      {
        "name": "project_id",
        "wire": "project_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_video_remixer",
    "accessor": "AdminVideoRemixer",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/video-remixer/sources/{source_id}/reconcile-upload",
    "args": [
      {
        "name": "source_id",
        "wire": "source_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_video_remixer",
    "accessor": "AdminVideoRemixer",
    "op": "load",
    "method": "GET",
    "path": "/api/admin/video-remixer/clips/{clip_id}",
    "args": [
      {
        "name": "clip_id",
        "wire": "clip_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_video_remixer",
    "accessor": "AdminVideoRemixer",
    "op": "load",
    "method": "GET",
    "path": "/api/admin/video-remixer/recipes/{identifier}/preflight",
    "action": "preflight",
    "args": [
      {
        "name": "identifier",
        "wire": "identifier",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_video_remixer",
    "accessor": "AdminVideoRemixer",
    "op": "load",
    "method": "GET",
    "path": "/api/admin/video-remixer/media/{token}",
    "args": [
      {
        "name": "token",
        "wire": "token",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_video_remixer",
    "accessor": "AdminVideoRemixer",
    "op": "patch",
    "method": "PATCH",
    "path": "/api/admin/video-remixer/clips/{clip_id}/labels",
    "args": [
      {
        "name": "clip_id",
        "wire": "clip_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_video_remixer",
    "accessor": "AdminVideoRemixer",
    "op": "patch",
    "method": "PATCH",
    "path": "/api/admin/video-remixer/cost",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_video_remixer",
    "accessor": "AdminVideoRemixer",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/admin/video-remixer/runs/{identifier}",
    "args": [
      {
        "name": "identifier",
        "wire": "identifier",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_video_remixer",
    "accessor": "AdminVideoRemixer",
    "op": "update",
    "method": "PUT",
    "path": "/api/admin/video-remixer/projects/{project_id}",
    "args": [
      {
        "name": "project_id",
        "wire": "project_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_video_remixer",
    "accessor": "AdminVideoRemixer",
    "op": "update",
    "method": "PUT",
    "path": "/api/admin/video-remixer/sources/{source_id}/policy",
    "args": [
      {
        "name": "source_id",
        "wire": "source_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "advance_step",
    "accessor": "AdvanceStep",
    "op": "create",
    "method": "POST",
    "path": "/api/onboarding-v6/advance-step",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "success": true,
      "current_step": "x"
    },
    "idField": "id"
  },
  {
    "entity": "agent",
    "accessor": "Agent",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/agents",
    "args": [],
    "select": {
      "agent_type": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "agent_type"
    ],
    "queryArgs": [
      {
        "name": "agent_type",
        "wire": "agent_type"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "id": "x",
        "name": "x",
        "type": "x",
        "active_connections": 1,
        "is_active": true,
        "at_capacity": true,
        "tiktok_stats": {}
      }
    ],
    "idField": "id"
  },
  {
    "entity": "agent_access_overview",
    "accessor": "AgentAccessOverview",
    "op": "load",
    "method": "GET",
    "path": "/api/agent-access/overview",
    "args": [],
    "select": {
      "onboarding_window_day": 7
    },
    "headers": [
      {
        "name": "x_agent_access_key",
        "wire": "x-agent-access-key",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "onboarding_window_days"
    ],
    "queryArgs": [
      {
        "name": "onboarding_window_day",
        "wire": "onboarding_window_days"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "generatedAt": "2026-01-01T00:00:00Z",
      "totalUsers": 1,
      "totalInternalUsers": 1,
      "subscriptionStatusCounts": {},
      "activeUsers": 1,
      "trialingUsers": 1,
      "newUsersYesterday": 1,
      "trialStartedYesterday": 1,
      "onboardingRecordsTotal": 1,
      "onboardingRecordsWindow": 1,
      "onboardingCurrentStepCounts": {},
      "onboardingCurrentStepWindow": {},
      "onboardingContextCounts": {},
      "onboardingFlowVariantCounts": {},
      "onboardingLockedUntilActivation": 1,
      "onboardingWebsiteScrapeStatusCounts": {},
      "onboardingSocialScanStatusCounts": {}
    },
    "idField": "id"
  },
  {
    "entity": "agent_access_phil_hourly_notification",
    "accessor": "AgentAccessPhilHourlyNotification",
    "op": "load",
    "method": "GET",
    "path": "/api/agent-access/phil-notifications/hourly",
    "args": [],
    "select": {
      "date": "v1"
    },
    "headers": [
      {
        "name": "x_agent_access_key",
        "wire": "x-agent-access-key",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "date"
    ],
    "queryArgs": [
      {
        "name": "date",
        "wire": "date"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "generatedAt": "2026-01-01T00:00:00Z",
      "targetDate": "x",
      "phoneHealth": {
        "owner": "x",
        "heatmap": "x",
        "count": 1,
        "issues": [
          {
            "assignmentId": "x",
            "userId": "x",
            "customerEmail": "x",
            "agentId": "x",
            "agentName": "x",
            "failingPlatforms": [
              "x"
            ],
            "platformStatuses": {},
            "heatmapTone": "x"
          }
        ]
      },
      "uploadPostTiktokHealth": {
        "owner": "x",
        "heatmap": "x",
        "count": 1,
        "issues": [
          {
            "assignmentId": "x",
            "userId": "x",
            "customerEmail": "x",
            "agentId": "x",
            "agentName": "x",
            "uploadPostUsername": "x",
            "platform": "x",
            "connected": true,
            "heatmapTone": "x"
          }
        ]
      },
      "uploadPostInstagramHealth": {
        "owner": "x",
        "heatmap": "x",
        "count": 1,
        "issues": [
          {
            "assignmentId": "x",
            "userId": "x",
            "customerEmail": "x",
            "agentId": "x",
            "agentName": "x",
            "uploadPostUsername": "x",
            "platform": "x",
            "connected": true,
            "heatmapTone": "x"
          }
        ]
      },
      "uploadPostYoutubeHealth": {
        "owner": "x",
        "heatmap": "x",
        "count": 1,
        "issues": [
          {
            "assignmentId": "x",
            "userId": "x",
            "customerEmail": "x",
            "agentId": "x",
            "agentName": "x",
            "uploadPostUsername": "x",
            "platform": "x",
            "connected": true,
            "heatmapTone": "x"
          }
        ]
      },
      "scheduledPosts": {
        "owner": "x",
        "heatmap": "x",
        "count": 1,
        "issues": [
          {
            "scheduleQueueId": "x",
            "userId": "x",
            "customerEmail": "x",
            "productId": "x",
            "productName": "x",
            "scheduledDatetime": "2026-01-01T00:00:00Z",
            "agentId": "x",
            "agentName": "x",
            "videoId": "x",
            "videoTitle": "x",
            "queueStatus": "x",
            "failingPlatforms": [
              "x"
            ],
            "platformStatuses": {},
            "errorMessage": "x",
            "heatmapTone": "x"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "agent_access_phil_stats_refresh",
    "accessor": "AgentAccessPhilStatsRefresh",
    "op": "load",
    "method": "GET",
    "path": "/api/agent-access/phil-notifications/stats-refresh",
    "args": [],
    "select": {
      "date": "v1"
    },
    "headers": [
      {
        "name": "x_agent_access_key",
        "wire": "x-agent-access-key",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "date"
    ],
    "queryArgs": [
      {
        "name": "date",
        "wire": "date"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "generatedAt": "2026-01-01T00:00:00Z",
      "targetDate": "x",
      "statsRefresh": {
        "owner": "x",
        "heatmap": "x",
        "count": 1,
        "issues": [
          {
            "scheduleQueueId": "x",
            "userId": "x",
            "customerEmail": "x",
            "productId": "x",
            "productName": "x",
            "scheduledDatetime": "2026-01-01T00:00:00Z",
            "agentId": "x",
            "agentName": "x",
            "queueStatus": "x",
            "postPlatforms": [
              "x"
            ],
            "postUrls": [
              "x"
            ],
            "resultsStatus": "x",
            "lastRefreshedAt": "x",
            "statsRefreshCompletedAt": "x",
            "errorMessage": "x",
            "heatmapTone": "x"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "agent_access_phil_video",
    "accessor": "AgentAccessPhilVideo",
    "op": "load",
    "method": "GET",
    "path": "/api/agent-access/phil-notifications/videos",
    "args": [],
    "select": {
      "date": "v1"
    },
    "headers": [
      {
        "name": "x_agent_access_key",
        "wire": "x-agent-access-key",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "date"
    ],
    "queryArgs": [
      {
        "name": "date",
        "wire": "date"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "generatedAt": "2026-01-01T00:00:00Z",
      "targetDate": "x",
      "videos": {
        "owner": "x",
        "heatmap": "x",
        "count": 1,
        "issues": [
          {
            "scheduleQueueId": "x",
            "userId": "x",
            "customerEmail": "x",
            "productId": "x",
            "productName": "x",
            "scheduledDatetime": "2026-01-01T00:00:00Z",
            "agentId": "x",
            "agentName": "x",
            "videoId": "x",
            "videoTitle": "x",
            "videoType": "x",
            "videoStatus": "x",
            "videoUrl": "x",
            "heatmapTone": "x"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "agent_access_user_agent",
    "accessor": "AgentAccessUserAgent",
    "op": "list",
    "method": "GET",
    "path": "/api/agent-access/user-agents",
    "args": [],
    "select": {
      "email": "v1"
    },
    "headers": [
      {
        "name": "x_agent_access_key",
        "wire": "x-agent-access-key",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "email"
    ],
    "queryArgs": [
      {
        "name": "email",
        "wire": "email"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "userId": "x",
      "email": "x",
      "assignedTotal": 1,
      "assignedByType": {},
      "agentQuota": 1,
      "agents": [
        {
          "id": "x",
          "name": "x",
          "type": "x",
          "avatar": "x",
          "productId": "x",
          "productName": "x",
          "tiktokUrl": "x",
          "instagramUrl": "x",
          "youtubeUrl": "x",
          "facebookUrl": "x",
          "uploadPostPlatforms": [
            "x"
          ]
        }
      ],
      "products": [
        {
          "productId": "x",
          "productName": "x",
          "assignedTotal": 1,
          "assignedByType": {},
          "expectedVideosPerDay": 1,
          "agents": [
            {
              "id": "x",
              "name": "x",
              "type": "x",
              "avatar": "x",
              "productId": "x",
              "productName": "x",
              "tiktokUrl": "x",
              "instagramUrl": "x",
              "youtubeUrl": "x",
              "facebookUrl": "x",
              "uploadPostPlatforms": []
            }
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "agent_access_user_phone_farm",
    "accessor": "AgentAccessUserPhoneFarm",
    "op": "list",
    "method": "GET",
    "path": "/api/agent-access/user-phone-farm",
    "args": [],
    "select": {
      "email": "v1"
    },
    "headers": [
      {
        "name": "x_agent_access_key",
        "wire": "x-agent-access-key",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "email"
    ],
    "queryArgs": [
      {
        "name": "email",
        "wire": "email"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "userId": "x",
      "email": "x",
      "name": "x",
      "productCount": 1,
      "assignedAgentsTotal": 1,
      "phoneFarmAgentsCount": 1,
      "unresolvedPhoneAdminAgentsCount": 1,
      "agents": [
        {
          "id": "x",
          "lastAdminSyncedAt": "2026-01-01T00:00:00Z",
          "name": "x",
          "type": "x",
          "avatar": "x",
          "productId": "x",
          "productName": "x",
          "tiktokUrl": "x",
          "instagramUrl": "x",
          "youtubeUrl": "x",
          "facebookUrl": "x",
          "uploadPostPlatforms": [
            "x"
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "agent_access_user_post",
    "accessor": "AgentAccessUserPost",
    "op": "list",
    "method": "GET",
    "path": "/api/agent-access/user-posts",
    "args": [],
    "select": {
      "email": "v1",
      "day": 7
    },
    "headers": [
      {
        "name": "x_agent_access_key",
        "wire": "x-agent-access-key",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "email",
      "days"
    ],
    "queryArgs": [
      {
        "name": "day",
        "wire": "days"
      },
      {
        "name": "email",
        "wire": "email"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "userId": "x",
      "email": "x",
      "expectedVideosPerDay": 1,
      "postedToday": 1,
      "postedYesterday": 1,
      "deltaYesterday": 1,
      "perProduct": [
        {
          "productId": "x",
          "productName": "x",
          "expectedVideosPerDay": 1,
          "postedToday": 1,
          "postedYesterday": 1,
          "deltaYesterday": 1
        }
      ],
      "performanceWindowDays": 1,
      "performanceTotal": {
        "views": 1,
        "likes": 1,
        "comments": 1
      },
      "performanceByPlatform": {}
    },
    "idField": "id"
  },
  {
    "entity": "agent_access_user_summary",
    "accessor": "AgentAccessUserSummary",
    "op": "list",
    "method": "GET",
    "path": "/api/agent-access/user-summary",
    "args": [],
    "select": {
      "email": "v1"
    },
    "headers": [
      {
        "name": "x_agent_access_key",
        "wire": "x-agent-access-key",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "email"
    ],
    "queryArgs": [
      {
        "name": "email",
        "wire": "email"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "userId": "x",
      "email": "x",
      "name": "x",
      "membership": "STARTER",
      "agentsCount": 1,
      "effectiveAgentQuota": 1,
      "accountType": "standard",
      "subscriptionStatus": "x",
      "subscriptionDetails": "x",
      "subscriptionCurrentPeriodEnd": "2026-01-01T00:00:00Z",
      "isInternalUser": true,
      "createdAt": "2026-01-01T00:00:00Z",
      "productCount": 1,
      "products": [
        {
          "id": "x",
          "name": "x",
          "url": "x",
          "isActive": true,
          "deletedAt": "2026-01-01T00:00:00Z"
        }
      ],
      "assignedAgentsTotal": 1,
      "assignedAgentsByType": {}
    },
    "idField": "id"
  },
  {
    "entity": "agent_access_user_video",
    "accessor": "AgentAccessUserVideo",
    "op": "load",
    "method": "GET",
    "path": "/api/agent-access/user-videos",
    "args": [],
    "select": {
      "email": "v1"
    },
    "headers": [
      {
        "name": "x_agent_access_key",
        "wire": "x-agent-access-key",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "email"
    ],
    "queryArgs": [
      {
        "name": "email",
        "wire": "email"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "userId": "x",
      "email": "x",
      "allTime": {
        "total": 1,
        "byType": {}
      },
      "today": {
        "total": 1,
        "byType": {}
      },
      "yesterday": {
        "total": 1,
        "byType": {}
      }
    },
    "idField": "id"
  },
  {
    "entity": "agent_access_user_winning_ad",
    "accessor": "AgentAccessUserWinningAd",
    "op": "list",
    "method": "GET",
    "path": "/api/agent-access/user-winning-ads",
    "args": [],
    "select": {
      "email": "v1"
    },
    "headers": [
      {
        "name": "x_agent_access_key",
        "wire": "x-agent-access-key",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "email"
    ],
    "queryArgs": [
      {
        "name": "email",
        "wire": "email"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "userId": "x",
      "email": "x",
      "totalWinningAds": 1,
      "productsWithWinningAds": 1,
      "productsWithoutWinningAds": 1,
      "perProduct": [
        {
          "productId": "x",
          "productName": "x",
          "winningAdsCount": 1,
          "winningAds": [
            {
              "id": "x",
              "url": "x",
              "type": "x",
              "source": "x",
              "description": "x",
              "productId": "x",
              "productName": "x",
              "createdAt": "2026-01-01T00:00:00Z"
            }
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "agent_access_winning_ads_summary",
    "accessor": "AgentAccessWinningAdsSummary",
    "op": "list",
    "method": "GET",
    "path": "/api/agent-access/winning-ads-summary",
    "args": [],
    "select": {
      "include_internal": "v1",
      "limit": 200,
      "offset": 0,
      "subscription_status": "v1"
    },
    "headers": [
      {
        "name": "x_agent_access_key",
        "wire": "x-agent-access-key",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "include_internal",
      "subscription_statuses",
      "limit",
      "offset"
    ],
    "queryArgs": [
      {
        "name": "include_internal",
        "wire": "include_internal"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "subscription_status",
        "wire": "subscription_statuses"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "generatedAt": "2026-01-01T00:00:00Z",
      "includeInternal": true,
      "subscriptionStatuses": [
        "x"
      ],
      "totalCustomers": 1,
      "customersWithWinningAds": 1,
      "customersWithoutWinningAds": 1,
      "totalWinningAds": 1,
      "customers": [
        {
          "userId": "x",
          "email": "x",
          "name": "x",
          "subscriptionStatus": "x",
          "productCount": 1,
          "productsWithWinningAds": 1,
          "totalWinningAds": 1
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "agent_health",
    "accessor": "AgentHealth",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/agent-health",
    "args": [],
    "select": {
      "date_to": "v1",
      "day": 7,
      "platform": "TIKTOK",
      "summary": "v1",
      "user_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "days",
      "platform",
      "user_ids",
      "date_to",
      "summary"
    ],
    "queryArgs": [
      {
        "name": "date_to",
        "wire": "date_to"
      },
      {
        "name": "day",
        "wire": "days"
      },
      {
        "name": "platform",
        "wire": "platform"
      },
      {
        "name": "summary",
        "wire": "summary"
      },
      {
        "name": "user_id",
        "wire": "user_ids"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "generated_at": "2026-01-01T00:00:00Z",
      "phone_admin_generated_at": "2026-01-01T00:00:00Z",
      "timezone": "x",
      "platform": "TIKTOK",
      "dates": [
        "x"
      ],
      "live_date": "x",
      "scope_prefixes": [
        "x"
      ],
      "qa_managed_agent_ids": [
        "x"
      ],
      "warmup_target": 1,
      "post_target": 1,
      "groups": [
        {
          "group_id": "x",
          "user_id": "x",
          "email": "x",
          "product_id": "x",
          "product_name": "x",
          "agent_count": 1,
          "tiktok_community_violation_agent_ids": [
            "x"
          ],
          "days": [
            {
              "date": "x",
              "overall": {
                "passed": 1,
                "total": 1,
                "percent": 1,
                "qa_managed": 1,
                "on_hold": 1,
                "warmup_once": 1,
                "not_started": 1,
                "over_target": 1
              },
              "warmups": {
                "passed": 1,
                "total": 1,
                "percent": 1,
                "qa_managed": 1,
                "on_hold": 1,
                "warmup_once": 1,
                "not_started": 1,
                "over_target": 1
              },
              "posts": {
                "passed": 1,
                "total": 1,
                "percent": 1,
                "qa_managed": 1,
                "on_hold": 1,
                "warmup_once": 1,
                "not_started": 1,
                "over_target": 1
              },
              "views": {
                "passed": 1,
                "total": 1,
                "percent": 1,
                "qa_managed": 1,
                "on_hold": 1,
                "warmup_once": 1,
                "not_started": 1,
                "over_target": 1
              },
              "accounts": {
                "passed": 1,
                "total": 1,
                "percent": 1,
                "qa_managed": 1,
                "on_hold": 1,
                "warmup_once": 1,
                "not_started": 1,
                "over_target": 1
              }
            }
          ],
          "agents": [
            {
              "agent_id": "x",
              "qa_managed": true,
              "found": true,
              "device_id": "x",
              "device_status": "x",
              "device_last_heartbeat_at": "2026-01-01T00:00:00Z",
              "connection_status": "x",
              "connection_status_updated_at": "2026-01-01T00:00:00Z",
              "social_credentials_warmup_hold_until": "2026-01-01T00:00:00Z",
              "account_healthy": true,
              "has_tiktok_community_violation": true,
              "days": [
                {}
              ]
            }
          ]
        }
      ],
      "daily": [
        {
          "date": "x",
          "overall": {
            "passed": 1,
            "total": 1,
            "percent": 1,
            "qa_managed": 1,
            "on_hold": 1,
            "warmup_once": 1,
            "not_started": 1,
            "over_target": 1
          },
          "warmups": {
            "passed": 1,
            "total": 1,
            "percent": 1,
            "qa_managed": 1,
            "on_hold": 1,
            "warmup_once": 1,
            "not_started": 1,
            "over_target": 1
          },
          "posts": {
            "passed": 1,
            "total": 1,
            "percent": 1,
            "qa_managed": 1,
            "on_hold": 1,
            "warmup_once": 1,
            "not_started": 1,
            "over_target": 1
          },
          "views": {
            "passed": 1,
            "total": 1,
            "percent": 1,
            "qa_managed": 1,
            "on_hold": 1,
            "warmup_once": 1,
            "not_started": 1,
            "over_target": 1
          },
          "accounts": {
            "passed": 1,
            "total": 1,
            "percent": 1,
            "qa_managed": 1,
            "on_hold": 1,
            "warmup_once": 1,
            "not_started": 1,
            "over_target": 1
          }
        }
      ],
      "latest": {}
    },
    "idField": "id"
  },
  {
    "entity": "agent_health_customer_option",
    "accessor": "AgentHealthCustomerOption",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/agent-health/customers",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "customers": [
        {
          "user_id": "x",
          "email": "x",
          "agent_count": 1
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "agent_health_detail",
    "accessor": "AgentHealthDetail",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/agent-health/details",
    "args": [],
    "select": {
      "date": "v1",
      "group_id": "v1",
      "limit": 50,
      "metric": "overall",
      "offset": 0,
      "platform": "TIKTOK"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "group_id",
      "date",
      "metric",
      "platform",
      "offset",
      "limit"
    ],
    "queryArgs": [
      {
        "name": "date",
        "wire": "date"
      },
      {
        "name": "group_id",
        "wire": "group_id"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "metric",
        "wire": "metric"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "platform",
        "wire": "platform"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "generated_at": "2026-01-01T00:00:00Z",
      "group_id": "x",
      "date": "x",
      "metric": "overall",
      "issues": [
        {
          "agent_id": "x",
          "device_status": "x",
          "connection_status": "x",
          "category": "Account",
          "state": "active",
          "issue": {
            "job_id": "x",
            "job_type": "x",
            "status": "x",
            "code": "x",
            "label": "x",
            "message": "x",
            "created_at": "2026-01-01T00:00:00Z",
            "updated_at": "2026-01-01T00:00:00Z",
            "failure_step_id": "x",
            "failure_executor_state": "x",
            "failure_screen_signature": "x",
            "failure_popup_type": "x",
            "failure_screenshot_key": "x",
            "failure_screenshot_url": "x"
          }
        }
      ],
      "issue_total": 1,
      "offset": 1,
      "limit": 1,
      "has_more": true,
      "warnings": [
        {
          "agent_id": "x",
          "device_status": "x",
          "connection_status": "x",
          "category": "Account",
          "state": "active",
          "issue": {
            "job_id": "x",
            "job_type": "x",
            "status": "x",
            "code": "x",
            "label": "x",
            "message": "x",
            "created_at": "2026-01-01T00:00:00Z",
            "updated_at": "2026-01-01T00:00:00Z",
            "failure_step_id": "x",
            "failure_executor_state": "x",
            "failure_screen_signature": "x",
            "failure_popup_type": "x",
            "failure_screenshot_key": "x",
            "failure_screenshot_url": "x"
          }
        }
      ],
      "warning_total": 1,
      "archived_issue_total": 1,
      "warmup_runs": [
        {
          "agent_id": "x",
          "runs": [
            {
              "job_id": "x",
              "status": "x",
              "created_at": "2026-01-01T00:00:00Z",
              "completed_at": "2026-01-01T00:00:00Z",
              "scheduled_day": "x"
            }
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "agent_post",
    "accessor": "AgentPost",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/agents/{agent_id}/posts",
    "args": [
      {
        "name": "id",
        "wire": "agent_id",
        "value": "p1"
      }
    ],
    "select": {
      "day": "today"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "day"
    ],
    "queryArgs": [
      {
        "name": "day",
        "wire": "day"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "date": "2026-01-01",
      "total": 1,
      "entries": [
        {
          "id": "x",
          "user_id": "x",
          "user_email": "x",
          "user_name": "x",
          "product_id": "x",
          "video_id": "x",
          "video_url": "x",
          "scheduled_datetime": "2026-01-01T00:00:00Z",
          "source_type": "x",
          "status": "x",
          "views": 1,
          "likes": 1,
          "comments": 1,
          "error_message": "x",
          "results": {}
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "agent_stat",
    "accessor": "AgentStat",
    "op": "load",
    "method": "GET",
    "path": "/api/admin/agents/stats",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_agents": 1,
      "agents_needed": 1,
      "shared_agents": {},
      "dedicated_agents": {}
    },
    "idField": "id"
  },
  {
    "entity": "agent_summary",
    "accessor": "AgentSummary",
    "op": "list",
    "method": "GET",
    "path": "/api/enterprise/agents/summary",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_quota": 1,
      "assigned_count": 1,
      "available_quota": 1,
      "products": [
        {
          "product_id": "x",
          "product_name": "x",
          "favicon_url": "x",
          "agent_count": 1
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "agents_summary",
    "accessor": "AgentsSummary",
    "op": "load",
    "method": "GET",
    "path": "/api/admin/agents-summary",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_agents": 1,
      "total_agents_count_sum": 1
    },
    "idField": "id"
  },
  {
    "entity": "analysis_status",
    "accessor": "AnalysisStatus",
    "op": "load",
    "method": "GET",
    "path": "/api/scraper/analysis-status",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "status": "x",
      "data": {
        "name": "x",
        "description": "x",
        "howItWorks": "x",
        "targetAudience": "x",
        "pricingAndOffers": "x"
      },
      "error": "x"
    },
    "idField": "id"
  },
  {
    "entity": "analytics_post",
    "accessor": "AnalyticsPost",
    "op": "list",
    "method": "GET",
    "path": "/api/analytics/posts",
    "args": [],
    "select": {
      "date_from": "v1",
      "agent_id": "v1",
      "date_to": "v1",
      "email": "v1",
      "product_id": "v1",
      "status": "v1",
      "user_id": "v1"
    },
    "headers": [
      {
        "name": "x_agent_access_key",
        "wire": "x-agent-access-key",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "date_from",
      "date_to",
      "email",
      "user_id",
      "status",
      "agent_id",
      "product_id"
    ],
    "queryArgs": [
      {
        "name": "agent_id",
        "wire": "agent_id"
      },
      {
        "name": "date_from",
        "wire": "date_from"
      },
      {
        "name": "date_to",
        "wire": "date_to"
      },
      {
        "name": "email",
        "wire": "email"
      },
      {
        "name": "product_id",
        "wire": "product_id"
      },
      {
        "name": "status",
        "wire": "status"
      },
      {
        "name": "user_id",
        "wire": "user_id"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "user_id": "x",
      "date_from": "2026-01-01",
      "date_to": "2026-01-01",
      "total_entries": 1,
      "entries": [
        {
          "id": "x",
          "scheduled_datetime": "2026-01-01T00:00:00Z",
          "status": "x",
          "source_type": "x",
          "comment": "x",
          "queue_position": 1,
          "created_at": "2026-01-01T00:00:00Z",
          "updated_at": "2026-01-01T00:00:00Z",
          "results": {},
          "agent": {
            "id": "x",
            "name": "x",
            "avatar": "x",
            "tiktok_url": "x",
            "instagram_url": "x",
            "youtube_url": "x",
            "facebook_url": "x",
            "type": "x",
            "is_active": true,
            "tiktok_stats": {},
            "upload_post_platforms": []
          },
          "video": {
            "id": "x",
            "url": "x",
            "title": "x",
            "duration": 1,
            "thumbnail_url": "x",
            "type": "x",
            "captions": "x",
            "main_prompt": "x",
            "is_template": true,
            "is_onboarding": true,
            "generation_status": {},
            "carousel_data": {},
            "created_at": "2026-01-01T00:00:00Z"
          },
          "product_id": "x",
          "scraped_posts": [
            {
              "id": "x",
              "url": "x",
              "handle": "x"
            }
          ]
        }
      ],
      "total_views": 1,
      "total_likes": 1,
      "total_comments": 1,
      "platforms_breakdown": {}
    },
    "idField": "id"
  },
  {
    "entity": "analyze_product",
    "accessor": "AnalyzeProduct",
    "op": "create",
    "method": "POST",
    "path": "/api/scraper/analyze-product",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "status": "x",
      "message": "x"
    },
    "idField": "id"
  },
  {
    "entity": "assign_agent",
    "accessor": "AssignAgent",
    "op": "create",
    "method": "POST",
    "path": "/api/onboarding-v6/assign-agent",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "agent": {
        "id": "x",
        "name": "x",
        "role": "x",
        "bio": "x",
        "avatar": "x",
        "intro_video_url": "x",
        "tiktok_url": "x",
        "instagram_url": "x",
        "youtube_url": "x",
        "facebook_url": "x"
      },
      "assignment": {
        "assigned_at": "2026-01-01T00:00:00Z",
        "expires_at": "2026-01-01T00:00:00Z",
        "status": "x"
      },
      "mock_agents": [
        {
          "id": "x",
          "name": "x",
          "role": "x",
          "bio": "x",
          "avatar": "x",
          "intro_video_url": "x",
          "tiktok_url": "x",
          "instagram_url": "x",
          "youtube_url": "x",
          "facebook_url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "auth",
    "accessor": "Auth",
    "op": "create",
    "method": "POST",
    "path": "/auth/magic-link",
    "action": "magic_link",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "auth",
    "accessor": "Auth",
    "op": "create",
    "method": "POST",
    "path": "/auth/verify-google-token",
    "action": "verify_google_token",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "auth",
    "accessor": "Auth",
    "op": "create",
    "method": "POST",
    "path": "/auth/verify-magic-link",
    "action": "verify_magic_link",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "auth",
    "accessor": "Auth",
    "op": "create",
    "method": "POST",
    "path": "/auth/verify-share-access",
    "action": "verify_share_access",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "auto_schedule_setting",
    "accessor": "AutoScheduleSetting",
    "op": "load",
    "method": "GET",
    "path": "/api/schedule/settings",
    "args": [],
    "select": {
      "product_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "product_id"
    ],
    "queryArgs": [
      {
        "name": "product_id",
        "wire": "product_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "is_enabled": true,
      "videos_per_day": 1,
      "membership_tier": "x",
      "product_id": "x",
      "enabled_video_types": [
        "x"
      ],
      "can_enable_repost": true,
      "repost_source": "x",
      "lock_video_regeneration_controls": true,
      "posted_video_reuse_percent": 1,
      "effective_posted_video_reuse_percent": 1
    },
    "idField": "id"
  },
  {
    "entity": "bulk_tik_tok_stats_update",
    "accessor": "BulkTikTokStatsUpdate",
    "op": "update",
    "method": "PATCH",
    "path": "/api/upload-post-agents/bulk/tiktok-stats",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "updatedCount": 1,
      "failedIds": [
        "x"
      ]
    },
    "idField": "id"
  },
  {
    "entity": "carousel",
    "accessor": "Carousel",
    "op": "create",
    "method": "POST",
    "path": "/api/carousel/{video_id}/finalize",
    "action": "finalize",
    "args": [
      {
        "name": "id",
        "wire": "video_id",
        "value": "p1"
      }
    ],
    "select": {
      "skip_schedule": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "skip_schedule"
    ],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "carousel",
    "accessor": "Carousel",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/carousels",
    "args": [],
    "select": {
      "date": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "date"
    ],
    "queryArgs": [
      {
        "name": "date",
        "wire": "date"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "date": "2026-01-01",
      "timezone": "x",
      "cohort": "x",
      "agent_count": 1,
      "total": 1,
      "items": [
        {
          "queue_id": "x",
          "video_id": "x",
          "agent_id": "x",
          "agent_name": "x",
          "profile_url": "x",
          "post_url": "x",
          "title": "x",
          "scheduled_at": "2026-01-01T00:00:00Z",
          "status": "x",
          "format": "cloned",
          "formula_name": "x",
          "formula_id": "x",
          "fit_score": 1,
          "quality_score": 1,
          "relevance_score": 1,
          "qa_status": "scored",
          "qa_verdict": "x",
          "views": 1,
          "likes": 1,
          "comments": 1,
          "metrics_updated_at": "x",
          "slide_count": 1,
          "thumbnail_url": "x"
        }
      ],
      "previous_date": "2026-01-01",
      "next_date": "2026-01-01"
    },
    "idField": "id"
  },
  {
    "entity": "carousel",
    "accessor": "Carousel",
    "op": "load",
    "method": "GET",
    "path": "/api/admin/carousels/{queue_id}",
    "args": [
      {
        "name": "id",
        "wire": "queue_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "queue_id": "x",
      "video_id": "x",
      "agent_id": "x",
      "agent_name": "x",
      "profile_url": "x",
      "post_url": "x",
      "title": "x",
      "scheduled_at": "2026-01-01T00:00:00Z",
      "status": "x",
      "format": "cloned",
      "formula_name": "x",
      "formula_id": "x",
      "fit_score": 1,
      "quality_score": 1,
      "relevance_score": 1,
      "qa_status": "scored",
      "qa_verdict": "x",
      "views": 1,
      "likes": 1,
      "comments": 1,
      "metrics_updated_at": "x",
      "slide_count": 1,
      "thumbnail_url": "x",
      "slides": [
        {
          "index": 1,
          "image_url": "x",
          "caption": "x",
          "prompt": "x",
          "score": 1,
          "reason": "x",
          "issues": [
            "x"
          ],
          "image_prompt_qa": {},
          "rendered_image_qa": {}
        }
      ],
      "caption": "x",
      "main_prompt": "x",
      "image_prompt": "x",
      "formula": {},
      "source": {},
      "qa": {},
      "generation": {},
      "audit_snapshot_sha256": "x",
      "audit_created_at": "x"
    },
    "idField": "id"
  },
  {
    "entity": "carousel_agent_detail",
    "accessor": "CarouselAgentDetail",
    "op": "load",
    "method": "GET",
    "path": "/api/admin/carousels/agents/{agent_id}",
    "args": [
      {
        "name": "agent_id",
        "wire": "agent_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "agent_id": "x",
      "agent_name": "x",
      "profile_url": "x",
      "warmup_status": "recorded",
      "warmup_days": 1,
      "warmup_hold_until": "x",
      "connection_status": "x",
      "phone_admin_status": "available",
      "following": 1,
      "followers": 1,
      "profile_likes": 1,
      "metrics_updated_at": "x"
    },
    "idField": "id"
  },
  {
    "entity": "carousel_status",
    "accessor": "CarouselStatus",
    "op": "list",
    "method": "GET",
    "path": "/api/carousel/{video_id}/status",
    "args": [
      {
        "name": "id",
        "wire": "video_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "video_id": "x",
      "product_id": "x",
      "product_name": "x",
      "owner_user_id": "x",
      "status": "x",
      "title": "x",
      "captions": "x",
      "slides": [
        {
          "index": 1,
          "prompt": "x",
          "caption": "x",
          "image_url": "x",
          "status": "x",
          "error": "x",
          "image_model": "x",
          "image_provider": "x",
          "image_task_id": "x"
        }
      ],
      "progress": {
        "total_slides": 1,
        "completed": 1,
        "generating": 1,
        "pending": 1,
        "failed": 1
      },
      "image_model": "gpt-image-2-5-sunburst-text-to-image"
    },
    "idField": "id"
  },
  {
    "entity": "chat",
    "accessor": "Chat",
    "op": "create",
    "method": "POST",
    "path": "/api/chat/sessions/{session_id}/messages",
    "args": [
      {
        "name": "session_id",
        "wire": "session_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "chat_history",
    "accessor": "ChatHistory",
    "op": "create",
    "method": "POST",
    "path": "/api/chat/sessions",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "sessionId": "x",
      "chatSubVariant": "A",
      "status": "x",
      "salesStage": "x",
      "routeRecommendation": "x",
      "selectedPlan": "3_agents",
      "model": "x",
      "createdAt": "2026-01-01T00:00:00Z",
      "updatedAt": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "chat_history",
    "accessor": "ChatHistory",
    "op": "load",
    "method": "GET",
    "path": "/api/chat/sessions/{session_id}",
    "args": [
      {
        "name": "session_id",
        "wire": "session_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "session": {
        "sessionId": "x",
        "chatSubVariant": "A",
        "status": "x",
        "salesStage": "x",
        "routeRecommendation": "x",
        "selectedPlan": "3_agents",
        "model": "x",
        "createdAt": "2026-01-01T00:00:00Z",
        "updatedAt": "2026-01-01T00:00:00Z"
      },
      "messages": [
        {
          "id": "x",
          "role": "user",
          "content": "x",
          "blockType": "x",
          "blockData": {},
          "createdAt": "2026-01-01T00:00:00Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "chat_session",
    "accessor": "ChatSession",
    "op": "create",
    "method": "POST",
    "path": "/api/chat/sessions/{session_id}/complete",
    "args": [
      {
        "name": "session_id",
        "wire": "session_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "sessionId": "x",
      "chatSubVariant": "A",
      "status": "x",
      "salesStage": "x",
      "routeRecommendation": "x",
      "selectedPlan": "3_agents",
      "model": "x",
      "createdAt": "2026-01-01T00:00:00Z",
      "updatedAt": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "comment",
    "accessor": "Comment",
    "op": "load",
    "method": "GET",
    "path": "/api/comments/results",
    "action": "result",
    "args": [],
    "select": {
      "all_product": "v1",
      "day": 7,
      "limit": 100,
      "offset": 0,
      "product_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "days",
      "product_id",
      "all_products"
    ],
    "queryArgs": [
      {
        "name": "all_product",
        "wire": "all_products"
      },
      {
        "name": "day",
        "wire": "days"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "product_id",
        "wire": "product_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "comment_campaign",
    "accessor": "CommentCampaign",
    "op": "create",
    "method": "POST",
    "path": "/api/comments/products/{product_id}/campaign/sources/{source_id}/resolve",
    "args": [
      {
        "name": "product_id",
        "wire": "product_id",
        "value": "p1"
      },
      {
        "name": "source_id",
        "wire": "source_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "comment_campaign",
    "accessor": "CommentCampaign",
    "op": "update",
    "method": "PUT",
    "path": "/api/comments/products/{product_id}/campaign",
    "args": [
      {
        "name": "product_id",
        "wire": "product_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "complete_chat_checkout",
    "accessor": "CompleteChatCheckout",
    "op": "create",
    "method": "POST",
    "path": "/api/onboarding-v6/complete-chat-checkout",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "success": true,
      "ready": true,
      "product_id": "x",
      "message": "x"
    },
    "idField": "id"
  },
  {
    "entity": "create_blackout_sora2_video",
    "accessor": "CreateBlackoutSora2Video",
    "op": "create",
    "method": "POST",
    "path": "/api/core/create-blackout-sora2-video",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "video": {
        "url": "x",
        "title": "x",
        "duration": 1,
        "bookmarked": true,
        "thumbnail_url": "x",
        "media_asset_id": "x",
        "main_prompt": "x",
        "image_prompt": "x",
        "captions": "x",
        "is_template": true,
        "is_onboarding": true,
        "generation_status": {},
        "carousel_data": {},
        "type": "x",
        "agent_id": "x",
        "id": "x",
        "created_at": "2026-01-01T00:00:00Z",
        "updated_at": "2026-01-01T00:00:00Z",
        "reel_id": "x",
        "user_id": "x",
        "product_id": "x",
        "main_avatar": "x"
      },
      "requires_polling": true
    },
    "idField": "id"
  },
  {
    "entity": "create_product",
    "accessor": "CreateProduct",
    "op": "create",
    "method": "POST",
    "path": "/api/onboarding-v6/create-product",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "success": true,
      "product_id": "x",
      "videos_queued": 1
    },
    "idField": "id"
  },
  {
    "entity": "create_reset_product_v6",
    "accessor": "CreateResetProductV6",
    "op": "create",
    "method": "POST",
    "path": "/api/reset-product/create-v6",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "success": true,
      "product_id": "x",
      "videos_queued": 1,
      "credits_deducted": 1,
      "remaining_credits": 1,
      "agents_transferred": 1
    },
    "idField": "id"
  },
  {
    "entity": "create_sora2_video",
    "accessor": "CreateSora2Video",
    "op": "create",
    "method": "POST",
    "path": "/api/core/create-sora2-video",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "video": {
        "url": "x",
        "title": "x",
        "duration": 1,
        "bookmarked": true,
        "thumbnail_url": "x",
        "media_asset_id": "x",
        "main_prompt": "x",
        "image_prompt": "x",
        "captions": "x",
        "is_template": true,
        "is_onboarding": true,
        "generation_status": {},
        "carousel_data": {},
        "type": "x",
        "agent_id": "x",
        "id": "x",
        "created_at": "2026-01-01T00:00:00Z",
        "updated_at": "2026-01-01T00:00:00Z",
        "reel_id": "x",
        "user_id": "x",
        "product_id": "x",
        "main_avatar": "x"
      },
      "requires_polling": true
    },
    "idField": "id"
  },
  {
    "entity": "customer",
    "accessor": "Customer",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/customer-health/customers",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "id": "x",
        "email": "x",
        "assigned_agents_count": 1,
        "account_type": "x",
        "is_migrated": true
      }
    ],
    "idField": "id"
  },
  {
    "entity": "customer_health",
    "accessor": "CustomerHealth",
    "op": "load",
    "method": "GET",
    "path": "/api/admin/customer-health/{user_id}",
    "args": [
      {
        "name": "id",
        "wire": "user_id",
        "value": "p1"
      }
    ],
    "select": {
      "date": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "date"
    ],
    "queryArgs": [
      {
        "name": "date",
        "wire": "date"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "user_id": "x",
      "email": "x",
      "date": "x",
      "available_dates": [
        "x"
      ],
      "performance_overview": {
        "aggregate": {
          "total_views": 1,
          "total_likes": 1,
          "total_comments": 1,
          "video_count": 1
        },
        "daily_stats": [
          {
            "date": "x",
            "date_key": "x",
            "views": 1,
            "likes": 1,
            "comments": 1
          }
        ],
        "first_posted_datetime": "x"
      },
      "assigned_agents": {
        "user_id": "x",
        "assignments": [
          {
            "assignment_id": "x",
            "agent": {
              "id": "x",
              "name": "x",
              "type": "x",
              "tiktok_url": "x",
              "instagram_url": "x",
              "youtube_url": "x",
              "tiktok_connection_status": "x",
              "instagram_connection_status": "x",
              "youtube_connection_status": "x",
              "upload_post_username": "x",
              "upload_post_tiktok_connected": true,
              "upload_post_instagram_connected": true,
              "upload_post_youtube_connected": true
            },
            "status": "x",
            "assigned_at": "2026-01-01T00:00:00Z",
            "expires_at": "2026-01-01T00:00:00Z"
          }
        ],
        "total": 1,
        "limit": 1,
        "offset": 1,
        "phone_admin_error": "x"
      },
      "platform_coverage_summary": {
        "total": 1,
        "resolved": 1,
        "unresolved": 1,
        "coverage_percent": 1,
        "reason_counts": {}
      },
      "entries": [
        {
          "id": "x",
          "product_id": "x",
          "product_name": "x",
          "scheduled_datetime": "2026-01-01T00:00:00Z",
          "source_type": "x",
          "status": "x",
          "error_message": "x",
          "results_status": "x",
          "posted_at": "x",
          "failed_at": "x",
          "last_refreshed_at": "x",
          "stats_refreshed": true,
          "stats_refresh_completed_at": "x",
          "stats_refresh_source": "x",
          "stats_refresh_trigger": "x",
          "stats_refresh_provider": "x",
          "stats_refresh_is_inferred": true,
          "post_platforms": [
            "x"
          ],
          "expected_platforms": [
            "x"
          ],
          "platform_urls": {},
          "platform_views": {},
          "platform_likes": {},
          "platform_comments": {},
          "platform_post_methods": {},
          "is_tiktok_posted": true,
          "tiktok_posted_url": "x",
          "tiktok_posted_by": "x",
          "is_instagram_posted": true,
          "instagram_posted_url": "x",
          "instagram_posted_by": "x",
          "is_youtube_posted": true,
          "youtube_posted_url": "x",
          "youtube_posted_by": "x",
          "agent": {
            "id": "x",
            "name": "x",
            "tiktok_url": "x",
            "instagram_url": "x",
            "youtube_url": "x"
          },
          "video": {
            "id": "x",
            "title": "x",
            "type": "x",
            "url": "x",
            "thumbnail_url": "x",
            "has_completed_carousel_slide": true,
            "status": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "customer_health_all_customers_item",
    "accessor": "CustomerHealthAllCustomersItem",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/customer-health/all-customers",
    "args": [],
    "select": {
      "limit": 10,
      "offset": 0
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total": 1,
      "limit": 1,
      "offset": 1,
      "customers": [
        {
          "user_id": "x",
          "email": "x",
          "assigned_agents_count": 1,
          "account_type": "x",
          "is_migrated": true,
          "total_views": 1,
          "daily_stats": [
            {
              "date": "x",
              "date_key": "x",
              "views": 1,
              "likes": 1,
              "comments": 1
            }
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "customer_health_views_summary",
    "accessor": "CustomerHealthViewsSummary",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/customer-health/views",
    "args": [],
    "select": {
      "date": "v1",
      "range": "selected_date",
      "user_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "range",
      "date",
      "user_id"
    ],
    "queryArgs": [
      {
        "name": "date",
        "wire": "date"
      },
      {
        "name": "range",
        "wire": "range"
      },
      {
        "name": "user_id",
        "wire": "user_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "range": "selected_date",
      "date": "x",
      "start_date": "x",
      "end_date": "x",
      "user_id": "x",
      "user_email": "x",
      "total_views": 1,
      "posted_results": 1,
      "average_views_per_result": 1,
      "paid_users_count": 1,
      "users_with_views": 1,
      "trend_granularity": "day",
      "trend": [
        {
          "date": "x",
          "date_key": "x",
          "views": 1,
          "posted_results": 1
        }
      ],
      "top_users": [
        {
          "user_id": "x",
          "email": "x",
          "views": 1,
          "posted_results": 1
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "daily",
    "accessor": "Daily",
    "op": "create",
    "method": "POST",
    "path": "/api/carousel/daily/{product_id}/plan",
    "action": "plan",
    "args": [
      {
        "name": "id",
        "wire": "product_id",
        "value": "p1"
      }
    ],
    "select": {
      "day": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "day"
    ],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "daily_status",
    "accessor": "DailyStatus",
    "op": "load",
    "method": "GET",
    "path": "/api/carousel/daily/{product_id}/status",
    "args": [
      {
        "name": "id",
        "wire": "product_id",
        "value": "p1"
      }
    ],
    "select": {
      "day": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "day"
    ],
    "queryArgs": [
      {
        "name": "day",
        "wire": "day"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "dedicated_agents_dashboard",
    "accessor": "DedicatedAgentsDashboard",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/agents/dedicated-dashboard",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total": 1,
      "used": 1,
      "free": 1,
      "agents": [
        {
          "id": "x",
          "name": "x",
          "bio": "x",
          "role": "x",
          "tiktok_url": "x",
          "instagram_url": "x",
          "youtube_url": "x",
          "is_active": true,
          "last_admin_synced_at": "2026-01-01T00:00:00Z",
          "upload_post_platforms": [
            "x"
          ],
          "tiktok_stats": {},
          "active_connections": 1,
          "assigned_user_id": "x",
          "assigned_user_ids": [
            "x"
          ],
          "upload_post_profile": {
            "connected_platforms": [
              "x"
            ],
            "reauth_required_platforms": [
              "x"
            ]
          },
          "yesterday_stats": {
            "posted": 1,
            "failed": 1,
            "views": 1,
            "likes": 1,
            "comments": 1
          },
          "today_stats": {
            "posted": 1,
            "failed": 1,
            "views": 1,
            "likes": 1,
            "comments": 1
          },
          "yesterday_failed_entries": [
            {
              "queue_id": "x",
              "error_message": "x",
              "scheduled_datetime": "2026-01-01T00:00:00Z"
            }
          ],
          "today_failed_entries": [
            {
              "queue_id": "x",
              "error_message": "x",
              "scheduled_datetime": "2026-01-01T00:00:00Z"
            }
          ]
        }
      ],
      "upload_post_error": "x"
    },
    "idField": "id"
  },
  {
    "entity": "enterprise_agent",
    "accessor": "EnterpriseAgent",
    "op": "load",
    "method": "GET",
    "path": "/api/enterprise/agents/global-pool-status",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "enterprise_product",
    "accessor": "EnterpriseProduct",
    "op": "load",
    "method": "GET",
    "path": "/api/enterprise/products/{product_id}/status",
    "args": [
      {
        "name": "product_id",
        "wire": "product_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "exact_availability",
    "accessor": "ExactAvailability",
    "op": "load",
    "method": "GET",
    "path": "/api/carousel/exact-availability",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "exact_formula",
    "accessor": "ExactFormula",
    "op": "load",
    "method": "GET",
    "path": "/api/carousel/exact-formulas",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "extract_v2",
    "accessor": "ExtractV2",
    "op": "create",
    "method": "POST",
    "path": "/api/scraper/extract_v2",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "status": "x",
      "message": "x"
    },
    "idField": "id"
  },
  {
    "entity": "failed_post",
    "accessor": "FailedPost",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/failed-posts",
    "args": [],
    "select": {
      "day": "today"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "day"
    ],
    "queryArgs": [
      {
        "name": "day",
        "wire": "day"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "date": "2026-01-01",
      "total": 1,
      "entries": [
        {
          "id": "x",
          "user_id": "x",
          "user_email": "x",
          "user_name": "x",
          "product_id": "x",
          "video_id": "x",
          "video_url": "x",
          "agent_id": "x",
          "agent_name": "x",
          "agent_platforms": [
            "x"
          ],
          "scheduled_datetime": "2026-01-01T00:00:00Z",
          "source_type": "x",
          "status": "x",
          "error_message": "x",
          "results": {}
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "file",
    "accessor": "File",
    "op": "create",
    "method": "POST",
    "path": "/api/file-upload",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "generate_blackout_sora2_prompt",
    "accessor": "GenerateBlackoutSora2Prompt",
    "op": "create",
    "method": "POST",
    "path": "/api/core/generate-blackout-sora2-prompt",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "prompt": "x"
    },
    "idField": "id"
  },
  {
    "entity": "generate_pomelli_demo",
    "accessor": "GeneratePomelliDemo",
    "op": "create",
    "method": "POST",
    "path": "/api/onboarding-v6/generate-pomelli-demo",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "success": true,
      "message": "x",
      "current_demo_count": 1,
      "max_demos": 1
    },
    "idField": "id"
  },
  {
    "entity": "generate_prompt",
    "accessor": "GeneratePrompt",
    "op": "create",
    "method": "POST",
    "path": "/api/video-variation/generate-prompt",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "hook_duration": 1,
      "prompt": "x",
      "media_asset_url": "x"
    },
    "idField": "id"
  },
  {
    "entity": "generate_sora2_prompt",
    "accessor": "GenerateSora2Prompt",
    "op": "load",
    "method": "GET",
    "path": "/api/core/generate-sora2-prompt",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "prompt": "x"
    },
    "idField": "id"
  },
  {
    "entity": "healthrx",
    "accessor": "Healthrx",
    "op": "create",
    "method": "POST",
    "path": "/api/healthrx/products/{product_id}/content/{content_id}/resolve",
    "args": [
      {
        "name": "content_id",
        "wire": "content_id",
        "value": "p1"
      },
      {
        "name": "product_id",
        "wire": "product_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "healthrx",
    "accessor": "Healthrx",
    "op": "create",
    "method": "POST",
    "path": "/api/healthrx/products/{product_id}/incidents/{incident_id}/resolve",
    "args": [
      {
        "name": "incident_id",
        "wire": "incident_id",
        "value": "p1"
      },
      {
        "name": "product_id",
        "wire": "product_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "healthrx",
    "accessor": "Healthrx",
    "op": "create",
    "method": "POST",
    "path": "/api/healthrx/products/{product_id}/attribution",
    "action": "attribution",
    "args": [
      {
        "name": "product_id",
        "wire": "product_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "healthrx",
    "accessor": "Healthrx",
    "op": "create",
    "method": "POST",
    "path": "/api/healthrx/products/{product_id}/run",
    "action": "run",
    "args": [
      {
        "name": "product_id",
        "wire": "product_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 202,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "healthrx",
    "accessor": "Healthrx",
    "op": "load",
    "method": "GET",
    "path": "/api/healthrx/products/{product_id}/accounts/{account_id}/contract",
    "args": [
      {
        "name": "account_id",
        "wire": "account_id",
        "value": "p1"
      },
      {
        "name": "product_id",
        "wire": "product_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "init_reset_product_v6",
    "accessor": "InitResetProductV6",
    "op": "create",
    "method": "POST",
    "path": "/api/reset-product/init-v6",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "success": true,
      "old_product_id": "x",
      "queue_entries_cleared": 1,
      "auto_schedule_disabled": true
    },
    "idField": "id"
  },
  {
    "entity": "iri",
    "accessor": "Iri",
    "op": "create",
    "method": "POST",
    "path": "/api/iris/connectors/{connector_id}/start",
    "args": [
      {
        "name": "connector_id",
        "wire": "connector_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "iri",
    "accessor": "Iri",
    "op": "create",
    "method": "POST",
    "path": "/api/iris/tasks/{task_id}/run",
    "args": [
      {
        "name": "task_id",
        "wire": "task_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "iris_capability",
    "accessor": "IrisCapability",
    "op": "create",
    "method": "POST",
    "path": "/api/platform/capabilities/{capability_name}",
    "args": [
      {
        "name": "id",
        "wire": "capability_name",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "ok": true,
      "capability": "x",
      "result": {},
      "errorCode": "x",
      "message": "x",
      "correlationId": "x",
      "retryable": true
    },
    "idField": "id"
  },
  {
    "entity": "iris_chat",
    "accessor": "IrisChat",
    "op": "create",
    "method": "POST",
    "path": "/api/iris/chat",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "ok": true,
      "sessionId": "x",
      "message": "x",
      "mode": "x",
      "runtimeStatus": "x",
      "artifacts": [
        {}
      ],
      "correlationId": "x"
    },
    "idField": "id"
  },
  {
    "entity": "iris_connector",
    "accessor": "IrisConnector",
    "op": "list",
    "method": "GET",
    "path": "/api/iris/connectors",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "connectors": [
        {}
      ]
    },
    "idField": "id"
  },
  {
    "entity": "iris_status",
    "accessor": "IrisStatus",
    "op": "list",
    "method": "GET",
    "path": "/api/iris/status",
    "args": [],
    "select": {
      "product_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "product_id"
    ],
    "queryArgs": [
      {
        "name": "product_id",
        "wire": "product_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "status": {
        "id": "x",
        "productScope": "x",
        "productId": "x",
        "platformAccountId": "x",
        "platformLinkId": "x",
        "membershipId": "x",
        "runtimeInstanceId": "x",
        "entitlementState": "x",
        "runtimeStatus": "x",
        "chatStatus": "x",
        "requiresRuntime": true,
        "capabilities": [
          "x"
        ],
        "lastSyncedAt": "2026-01-01T00:00:00Z",
        "lastErrorCode": "x",
        "lastErrorMessage": "x",
        "degraded": true,
        "platformBridgeEnabled": true
      },
      "product": {},
      "tasksPreview": [
        {}
      ],
      "connectorsPreview": [
        {}
      ]
    },
    "idField": "id"
  },
  {
    "entity": "iris_task",
    "accessor": "IrisTask",
    "op": "create",
    "method": "POST",
    "path": "/api/iris/tasks",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "recurring": [
        {}
      ],
      "completed": [
        {}
      ],
      "discover": [
        {}
      ]
    },
    "idField": "id"
  },
  {
    "entity": "iris_task",
    "accessor": "IrisTask",
    "op": "list",
    "method": "GET",
    "path": "/api/iris/tasks",
    "args": [],
    "select": {
      "product_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "product_id"
    ],
    "queryArgs": [
      {
        "name": "product_id",
        "wire": "product_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "recurring": [
        {}
      ],
      "completed": [
        {}
      ],
      "discover": [
        {}
      ]
    },
    "idField": "id"
  },
  {
    "entity": "iris_usage",
    "accessor": "IrisUsage",
    "op": "list",
    "method": "GET",
    "path": "/api/iris/usage",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "productScope": "x",
      "membershipId": "x",
      "eventCount": 1,
      "events": [
        {}
      ]
    },
    "idField": "id"
  },
  {
    "entity": "landing",
    "accessor": "Landing",
    "op": "create",
    "method": "POST",
    "path": "/api/landings/microhub/testimonial-image/{index}",
    "args": [
      {
        "name": "index",
        "wire": "index",
        "value": "p1"
      }
    ],
    "select": {
      "product_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "product_id"
    ],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "landing",
    "accessor": "Landing",
    "op": "create",
    "method": "POST",
    "path": "/api/landings/landing/reference-image",
    "action": "reference_image",
    "args": [],
    "select": {
      "product_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "product_id"
    ],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "landing",
    "accessor": "Landing",
    "op": "create",
    "method": "POST",
    "path": "/api/landings/landing/regenerate",
    "action": "regenerate",
    "args": [],
    "select": {
      "product_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "product_id"
    ],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "landing_stat",
    "accessor": "LandingStat",
    "op": "load",
    "method": "GET",
    "path": "/api/landings/{slug}/stats",
    "args": [
      {
        "name": "slug",
        "wire": "slug",
        "value": "p1"
      }
    ],
    "select": {
      "product_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "product_id"
    ],
    "queryArgs": [
      {
        "name": "product_id",
        "wire": "product_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "microhub": {
        "totalViews": 1,
        "conversions": 1,
        "clickThroughRatePercent": 1
      },
      "landing": {
        "totalViews": 1,
        "conversions": 1,
        "clickThroughRatePercent": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "landing_status",
    "accessor": "LandingStatus",
    "op": "load",
    "method": "GET",
    "path": "/api/landings/status",
    "args": [],
    "select": {
      "product_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "product_id"
    ],
    "queryArgs": [
      {
        "name": "product_id",
        "wire": "product_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "microhubStatus": "x",
      "landingStatus": "x",
      "errorMessage": "x"
    },
    "idField": "id"
  },
  {
    "entity": "link_in_bio",
    "accessor": "LinkInBio",
    "op": "load",
    "method": "GET",
    "path": "/api/sites/{slug}/link-in-bio",
    "args": [
      {
        "name": "slug",
        "wire": "slug",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "slug": "x",
      "linkInBioType": "x",
      "redirectUrl": "x"
    },
    "idField": "id"
  },
  {
    "entity": "link_in_dm",
    "accessor": "LinkInDm",
    "op": "load",
    "method": "GET",
    "path": "/api/sites/{slug}/link-in-dms",
    "args": [
      {
        "name": "slug",
        "wire": "slug",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "slug": "x",
      "linkInDmsType": "x",
      "redirectUrl": "x"
    },
    "idField": "id"
  },
  {
    "entity": "link_in_post",
    "accessor": "LinkInPost",
    "op": "load",
    "method": "GET",
    "path": "/api/sites/{slug}/link-in-posts",
    "args": [
      {
        "name": "slug",
        "wire": "slug",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "slug": "x",
      "linkInPostsType": "x",
      "showLinkInFirstComment": true,
      "redirectUrl": "x"
    },
    "idField": "id"
  },
  {
    "entity": "link_user",
    "accessor": "LinkUser",
    "op": "create",
    "method": "POST",
    "path": "/api/onboarding-v6/link-user",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "success": true,
      "already_linked": true
    },
    "idField": "id"
  },
  {
    "entity": "media_asset",
    "accessor": "MediaAsset",
    "op": "create",
    "method": "POST",
    "path": "/api/media-assets/{media_asset_id}/exclude-copycat",
    "action": "exclude_copycat",
    "args": [
      {
        "name": "id",
        "wire": "media_asset_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "url": "x",
      "type": "video",
      "category": "product",
      "source": "demo",
      "description": "x",
      "productId": "x",
      "onboardingDataId": "x",
      "veo3VideoId": "x",
      "id": "x",
      "usedAt": "2026-01-01T00:00:00Z",
      "createdAt": "2026-01-01T00:00:00Z",
      "updatedAt": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "media_asset",
    "accessor": "MediaAsset",
    "op": "create",
    "method": "POST",
    "path": "/api/media-assets/upload",
    "action": "upload",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "url": "x",
      "type": "video",
      "category": "product",
      "source": "demo",
      "description": "x",
      "productId": "x",
      "onboardingDataId": "x",
      "veo3VideoId": "x",
      "id": "x",
      "usedAt": "2026-01-01T00:00:00Z",
      "createdAt": "2026-01-01T00:00:00Z",
      "updatedAt": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "media_asset",
    "accessor": "MediaAsset",
    "op": "create",
    "method": "POST",
    "path": "/api/onboarding-v6/repost-content/upload",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "url": "x",
      "type": "video",
      "category": "product",
      "source": "demo",
      "description": "x",
      "productId": "x",
      "onboardingDataId": "x",
      "veo3VideoId": "x",
      "id": "x",
      "usedAt": "2026-01-01T00:00:00Z",
      "createdAt": "2026-01-01T00:00:00Z",
      "updatedAt": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "media_asset",
    "accessor": "MediaAsset",
    "op": "load",
    "method": "GET",
    "path": "/api/video-variation/media-assets/{product_id}",
    "args": [
      {
        "name": "id",
        "wire": "product_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "media_assets": [
        {
          "id": "x",
          "url": "x",
          "type": "x",
          "source": "x",
          "description": "x",
          "created_at": "2026-01-01T00:00:00Z"
        }
      ],
      "product_id": "x"
    },
    "idField": "id"
  },
  {
    "entity": "men",
    "accessor": "Men",
    "op": "list",
    "method": "GET",
    "path": "/api/videos/me",
    "args": [],
    "select": {
      "bookmarked": "v1",
      "category": "v1",
      "limit": 50,
      "offset": 0,
      "product_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "product_id",
      "category",
      "bookmarked",
      "limit",
      "offset"
    ],
    "queryArgs": [
      {
        "name": "bookmarked",
        "wire": "bookmarked"
      },
      {
        "name": "category",
        "wire": "category"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "product_id",
        "wire": "product_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {}
    ],
    "idField": "id"
  },
  {
    "entity": "microdrama",
    "accessor": "Microdrama",
    "op": "create",
    "method": "POST",
    "path": "/api/microdrama/episodes/{episode_id}/approve",
    "action": "approve",
    "args": [
      {
        "name": "episode_id",
        "wire": "episode_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "microdrama",
    "accessor": "Microdrama",
    "op": "create",
    "method": "POST",
    "path": "/api/microdrama/reference-assets/{reference_id}/review",
    "args": [
      {
        "name": "reference_asset_id",
        "wire": "reference_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "microdrama",
    "accessor": "Microdrama",
    "op": "create",
    "method": "POST",
    "path": "/api/microdrama/episodes",
    "action": "episode",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "microdrama",
    "accessor": "Microdrama",
    "op": "create",
    "method": "POST",
    "path": "/api/microdrama/reference-assets",
    "action": "reference_asset",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "microdrama",
    "accessor": "Microdrama",
    "op": "create",
    "method": "POST",
    "path": "/api/microdrama/series",
    "action": "series",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "microdrama",
    "accessor": "Microdrama",
    "op": "load",
    "method": "GET",
    "path": "/api/microdrama/episodes/{episode_id}",
    "args": [
      {
        "name": "episode_id",
        "wire": "episode_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "microdrama",
    "accessor": "Microdrama",
    "op": "load",
    "method": "GET",
    "path": "/api/microdrama/runs/{run_id}",
    "args": [
      {
        "name": "run_id",
        "wire": "run_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "microdrama",
    "accessor": "Microdrama",
    "op": "load",
    "method": "GET",
    "path": "/api/microdrama/config",
    "action": "config",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "microdrama",
    "accessor": "Microdrama",
    "op": "load",
    "method": "GET",
    "path": "/api/microdrama/formulas",
    "action": "formula",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "microdrama",
    "accessor": "Microdrama",
    "op": "load",
    "method": "GET",
    "path": "/api/microdrama/reference-assets",
    "action": "reference_asset",
    "args": [],
    "select": {
      "include_inactive": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "include_inactive"
    ],
    "queryArgs": [
      {
        "name": "include_inactive",
        "wire": "include_inactive"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "microdrama",
    "accessor": "Microdrama",
    "op": "load",
    "method": "GET",
    "path": "/api/microdrama/series",
    "action": "series",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "microdrama",
    "accessor": "Microdrama",
    "op": "update",
    "method": "PATCH",
    "path": "/api/microdrama/episodes/{episode_id}",
    "args": [
      {
        "name": "episode_id",
        "wire": "episode_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "microhub_public",
    "accessor": "MicrohubPublic",
    "op": "load",
    "method": "GET",
    "path": "/api/sites/{slug}",
    "args": [
      {
        "name": "slug",
        "wire": "slug",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "slug": "x",
      "name": "x",
      "bio": "x",
      "profileImageUrl": "x",
      "headerImageUrl": "x",
      "ctaTitle": "x",
      "ctaDescription": "x",
      "ctaLink": "x",
      "ctaButtonText": "x",
      "links": [
        {
          "name": "x",
          "url": "x",
          "icon": "x"
        }
      ],
      "socialLinks": {
        "twitter": "x",
        "instagram": "x",
        "youtube": "x",
        "website": "x"
      },
      "testimonials": [
        {
          "name": "x",
          "profession": "x",
          "testimonial": "x",
          "rating": 1,
          "profileImageUrl": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "onboarding_status",
    "accessor": "OnboardingStatus",
    "op": "list",
    "method": "GET",
    "path": "/api/onboarding-v6/status",
    "args": [],
    "select": {
      "oid": "v1",
      "account_type": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "oid",
      "account_type"
    ],
    "queryArgs": [
      {
        "name": "account_type",
        "wire": "account_type"
      },
      {
        "name": "oid",
        "wire": "oid"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "onboarding_data_id": "x",
      "flow_variant": "x",
      "user_linked": true,
      "current_step": "x",
      "is_activated_by_admin": true,
      "locked_until_activation": true,
      "website_scrape_status": "x",
      "website_resource_prep_status": "x",
      "website_resource_prep_error": "x",
      "website_resource_prep_assets_count": 1,
      "scrollable_video_status": "x",
      "social_scan_status": "x",
      "error_message": "x",
      "product": {
        "name": "x",
        "url": "x",
        "features": "x",
        "how_it_works": "x",
        "target_audience": "x",
        "pricing_and_offers": "x",
        "industry": "x",
        "screenshot_url": "x",
        "favicon_url": "x",
        "scrollable_video_url": "x"
      },
      "social_posts": [
        {
          "id": "x",
          "platform": "x",
          "video_url": "x",
          "cover_image_url": "x",
          "views": 1,
          "likes": 1,
          "comments": 1
        }
      ],
      "social_posts_count": 1,
      "requires_repost_content": true,
      "repost_source": "x",
      "repost_content_count": 1,
      "content_collection_ready": true,
      "can_create_product": true,
      "product_id": "x",
      "survey_completed": true,
      "skip_demo": true,
      "chat_session_id": "x",
      "chat_completed": true
    },
    "idField": "id"
  },
  {
    "entity": "onboarding_v6",
    "accessor": "OnboardingV6",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/onboarding-v6/repost-content/{media_asset_id}",
    "args": [
      {
        "name": "media_asset_id",
        "wire": "media_asset_id",
        "value": "p1"
      }
    ],
    "select": {
      "onboarding_data_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "onboarding_data_id"
    ],
    "queryArgs": [
      {
        "name": "onboarding_data_id",
        "wire": "onboarding_data_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "paid_user",
    "accessor": "PaidUser",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/paid-users",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "id": "x",
        "email": "x",
        "membership": "STARTER",
        "agents_count": 1,
        "effective_agents_count": 1,
        "subscription_status": "x",
        "subscription_details": "x",
        "credits": 1,
        "auto_schedule_enabled": true,
        "scheduled_queue_count": 1,
        "is_internal_user": true,
        "is_migrated_user": true,
        "assigned_agents_count": 1
      }
    ],
    "idField": "id"
  },
  {
    "entity": "pexel",
    "accessor": "Pexel",
    "op": "list",
    "method": "GET",
    "path": "/api/pexels/search",
    "action": "search",
    "args": [],
    "select": {
      "count": 10,
      "media_type": "videos",
      "orientation": "portrait",
      "page": 1,
      "query": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "query",
      "count",
      "orientation",
      "page",
      "media_type"
    ],
    "queryArgs": [
      {
        "name": "count",
        "wire": "count"
      },
      {
        "name": "media_type",
        "wire": "media_type"
      },
      {
        "name": "orientation",
        "wire": "orientation"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "query",
        "wire": "query"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {}
    ],
    "idField": "id"
  },
  {
    "entity": "phone_admin_available_agent_source",
    "accessor": "PhoneAdminAvailableAgentSource",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/phone-admin/available-agent-sources",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_available": 1,
      "sources": [
        {
          "pc_name": "x",
          "available_count": 1
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "product",
    "accessor": "Product",
    "op": "create",
    "method": "POST",
    "path": "/api/products/{product_id}/validate-social-handle",
    "action": "validate_social_handle",
    "args": [
      {
        "name": "id",
        "wire": "product_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "valid": true,
      "error": "x",
      "sampleVideoCount": 1
    },
    "idField": "id"
  },
  {
    "entity": "product",
    "accessor": "Product",
    "op": "create",
    "method": "POST",
    "path": "/api/enterprise/products",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": "x",
      "name": "x",
      "url": "x",
      "favicon_url": "x",
      "screenshot_url": "x",
      "description": "x",
      "pronunciation": "x",
      "how_it_works": "x",
      "target_audience": "x",
      "pricing": "x",
      "other_instructions": "x",
      "language": "x",
      "media_assets": [
        {}
      ],
      "is_active": true,
      "is_app": true,
      "agent_count": 1,
      "tiktok_handle": "x",
      "instagram_handle": "x",
      "repost_source": "x"
    },
    "idField": "id"
  },
  {
    "entity": "product",
    "accessor": "Product",
    "op": "create",
    "method": "POST",
    "path": "/api/products/clear",
    "action": "clear",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "product",
    "accessor": "Product",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/users/{user_id}/products",
    "args": [
      {
        "name": "user_id",
        "wire": "user_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "id": "x",
        "name": "x",
        "url": "x",
        "is_active": true
      }
    ],
    "idField": "id"
  },
  {
    "entity": "product",
    "accessor": "Product",
    "op": "list",
    "method": "GET",
    "path": "/api/enterprise/products",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "products": [
        {
          "id": "x",
          "name": "x",
          "url": "x",
          "favicon_url": "x",
          "agent_count": 1,
          "is_active": true,
          "is_app": true
        }
      ],
      "current_product_id": "x",
      "total_quota": 1,
      "assigned_count": 1,
      "available_quota": 1
    },
    "idField": "id"
  },
  {
    "entity": "product",
    "accessor": "Product",
    "op": "load",
    "method": "GET",
    "path": "/api/products/me",
    "action": "me",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "name": "x",
      "description": "x",
      "url": "x",
      "demoVideos": [
        "x"
      ],
      "pexelsVideos": [
        "x"
      ],
      "images": [
        "x"
      ],
      "outroVideo": "x",
      "pronunciation": "x",
      "howItWorks": "x",
      "targetAudience": "x",
      "pricingAndOffers": "x",
      "otherInstructions": "x",
      "isActive": true,
      "isApp": true,
      "language": "x",
      "templateProductId": "x",
      "tiktokHandle": "x",
      "instagramHandle": "x",
      "repostSource": "x",
      "id": "x",
      "userId": "x",
      "mediaAssets": [
        {
          "url": "x",
          "type": "video",
          "category": "product",
          "source": "demo",
          "description": "x",
          "productId": "x",
          "onboardingDataId": "x",
          "veo3VideoId": "x",
          "id": "x",
          "usedAt": "2026-01-01T00:00:00Z",
          "createdAt": "2026-01-01T00:00:00Z",
          "updatedAt": "2026-01-01T00:00:00Z"
        }
      ],
      "createdAt": "2026-01-01T00:00:00Z",
      "updatedAt": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "product",
    "accessor": "Product",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/enterprise/products/{product_id}",
    "args": [
      {
        "name": "id",
        "wire": "product_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "message": "x",
      "agents_released": 1,
      "queue_entries_cleared": 1
    },
    "idField": "id"
  },
  {
    "entity": "product",
    "accessor": "Product",
    "op": "update",
    "method": "PUT",
    "path": "/api/enterprise/products/{product_id}",
    "args": [
      {
        "name": "id",
        "wire": "product_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": "x",
      "name": "x",
      "url": "x",
      "favicon_url": "x",
      "screenshot_url": "x",
      "description": "x",
      "pronunciation": "x",
      "how_it_works": "x",
      "target_audience": "x",
      "pricing": "x",
      "other_instructions": "x",
      "language": "x",
      "media_assets": [
        {}
      ],
      "is_active": true,
      "is_app": true,
      "agent_count": 1,
      "tiktok_handle": "x",
      "instagram_handle": "x",
      "repost_source": "x"
    },
    "idField": "id"
  },
  {
    "entity": "product",
    "accessor": "Product",
    "op": "update",
    "method": "PUT",
    "path": "/api/enterprise/products/{product_id}/activate",
    "action": "activate",
    "args": [
      {
        "name": "id",
        "wire": "product_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "product",
    "accessor": "Product",
    "op": "update",
    "method": "PUT",
    "path": "/api/products/me",
    "action": "me",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "name": "x",
      "description": "x",
      "url": "x",
      "demoVideos": [
        "x"
      ],
      "pexelsVideos": [
        "x"
      ],
      "images": [
        "x"
      ],
      "outroVideo": "x",
      "pronunciation": "x",
      "howItWorks": "x",
      "targetAudience": "x",
      "pricingAndOffers": "x",
      "otherInstructions": "x",
      "isActive": true,
      "isApp": true,
      "language": "x",
      "templateProductId": "x",
      "tiktokHandle": "x",
      "instagramHandle": "x",
      "repostSource": "x",
      "id": "x",
      "userId": "x",
      "mediaAssets": [
        {
          "url": "x",
          "type": "video",
          "category": "product",
          "source": "demo",
          "description": "x",
          "productId": "x",
          "onboardingDataId": "x",
          "veo3VideoId": "x",
          "id": "x",
          "usedAt": "2026-01-01T00:00:00Z",
          "createdAt": "2026-01-01T00:00:00Z",
          "updatedAt": "2026-01-01T00:00:00Z"
        }
      ],
      "createdAt": "2026-01-01T00:00:00Z",
      "updatedAt": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "product_dashboard",
    "accessor": "ProductDashboard",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/products-dashboard",
    "args": [],
    "select": {
      "date": "v1",
      "page": 1,
      "page_size": 50,
      "product_id": "v1",
      "search": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "product_id",
      "date",
      "page",
      "page_size",
      "search"
    ],
    "queryArgs": [
      {
        "name": "date",
        "wire": "date"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      },
      {
        "name": "product_id",
        "wire": "product_id"
      },
      {
        "name": "search",
        "wire": "search"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "date": "2026-01-01",
      "products": [
        {
          "id": "x",
          "name": "x",
          "url": "x",
          "customer_email": "x",
          "customer_name": "x",
          "assigned_agents": 1
        }
      ],
      "selected_product": {
        "id": "x",
        "name": "x",
        "url": "x",
        "customer_email": "x",
        "customer_name": "x",
        "assigned_agents": 1
      },
      "summary": {
        "assigned_agents": 1,
        "agents_with_posts": 1,
        "platform_posts": 1,
        "scheduled_entries": 1,
        "posting_entries": 1,
        "posted_entries": 1,
        "failed_entries": 1,
        "total_views": 1,
        "total_likes": 1,
        "total_comments": 1,
        "metrics_pending_count": 1
      },
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_items": 1,
        "total_pages": 1
      },
      "agents": [
        {
          "id": "x",
          "name": "x",
          "has_tiktok_community_violation": true,
          "platforms": [
            {
              "platform": "tiktok",
              "account_url": "x",
              "status": "posted",
              "posted_count": 1,
              "pending_count": 1,
              "failed_count": 1,
              "post_urls": [
                "x"
              ],
              "views": 1,
              "likes": 1,
              "comments": 1,
              "metrics_pending_count": 1
            }
          ],
          "scheduled_entries": 1,
          "posting_entries": 1,
          "posted_entries": 1,
          "failed_entries": 1,
          "views": 1,
          "likes": 1,
          "comments": 1,
          "metrics_pending_count": 1
        }
      ],
      "phone_admin_error": "x"
    },
    "idField": "id"
  },
  {
    "entity": "product_dashboard_view",
    "accessor": "ProductDashboardView",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/products-dashboard/views",
    "args": [],
    "select": {
      "product_id": "v1",
      "date": "v1",
      "range": 7
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "product_id",
      "date",
      "range"
    ],
    "queryArgs": [
      {
        "name": "date",
        "wire": "date"
      },
      {
        "name": "product_id",
        "wire": "product_id"
      },
      {
        "name": "range",
        "wire": "range"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "metrics_pending_count": 1,
      "platform_posts": 1,
      "range_days": 7,
      "start_date": "2026-01-01",
      "end_date": "2026-01-01",
      "total_views": 1,
      "points": [
        {
          "date": "2026-01-01",
          "views": 1
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "product_demo",
    "accessor": "ProductDemo",
    "op": "list",
    "method": "GET",
    "path": "/api/video-variation/product-demos",
    "args": [],
    "select": {
      "product_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "product_id"
    ],
    "queryArgs": [
      {
        "name": "product_id",
        "wire": "product_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "media_assets": [
        {
          "id": "x",
          "url": "x",
          "type": "x",
          "source": "x",
          "description": "x",
          "created_at": "2026-01-01T00:00:00Z"
        }
      ],
      "product_id": "x"
    },
    "idField": "id"
  },
  {
    "entity": "product_landing",
    "accessor": "ProductLanding",
    "op": "list",
    "method": "GET",
    "path": "/api/landings/me",
    "args": [],
    "select": {
      "product_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "product_id"
    ],
    "queryArgs": [
      {
        "name": "product_id",
        "wire": "product_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": "x",
      "slug": "x",
      "linkInBioType": "x",
      "linkInPostsType": "x",
      "linkInDmsType": "x",
      "productLinkSelection": "product_link",
      "showLinkInFirstComment": true,
      "firstCommentTextBeforeLink": "x",
      "shortLink": "x",
      "productUrl": "x",
      "commentingOnMyPosts": true,
      "myPostsStylePrompt": "x",
      "commentingOnOthersPosts": true,
      "othersTargetMarketPrompt": "x",
      "othersStylePrompt": "x",
      "dmCommenters": true,
      "dmInitialMessagePrompt": "x",
      "dmOngoingResponsePrompt": "x",
      "microhubStatus": "x",
      "microhubProfileImageUrl": "x",
      "microhubHeaderImageUrl": "x",
      "microhubName": "x",
      "microhubBio": "x",
      "microhubCtaTitle": "x",
      "microhubCtaDescription": "x",
      "microhubCtaLink": "x",
      "microhubCtaButtonText": "x",
      "microhubLinks": [
        {
          "name": "x",
          "url": "x",
          "icon": "x"
        }
      ],
      "microhubSocialLinks": {
        "twitter": "x",
        "instagram": "x",
        "youtube": "x",
        "website": "x"
      },
      "microhubTestimonials": [
        {
          "name": "x",
          "profession": "x",
          "testimonial": "x",
          "rating": 1,
          "profileImageUrl": "x"
        }
      ],
      "microhubScreenshotUrl": "x",
      "landingStatus": "x",
      "landingScreenshotUrl": "x",
      "landingReferenceScreenshotUrl": "x",
      "landingLastGeneratedAt": "2026-01-01T00:00:00Z",
      "landingHtmlUrl": "x",
      "microhubUrl": "x",
      "landingUrl": "x"
    },
    "idField": "id"
  },
  {
    "entity": "public_resume_status",
    "accessor": "PublicResumeStatus",
    "op": "load",
    "method": "GET",
    "path": "/api/onboarding-v6/resume-status-public",
    "args": [],
    "select": {
      "oid": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "oid"
    ],
    "queryArgs": [
      {
        "name": "oid",
        "wire": "oid"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "exists": true,
      "flow_variant": "x",
      "current_step": "x",
      "can_resume_prelogin": true,
      "skip_demo": true,
      "requires_repost_content": true,
      "repost_source": "x",
      "repost_content_count": 1,
      "content_collection_ready": true
    },
    "idField": "id"
  },
  {
    "entity": "re_roll_video",
    "accessor": "ReRollVideo",
    "op": "create",
    "method": "POST",
    "path": "/api/core/re-roll-video",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "video": {
        "url": "x",
        "title": "x",
        "duration": 1,
        "bookmarked": true,
        "thumbnail_url": "x",
        "media_asset_id": "x",
        "main_prompt": "x",
        "image_prompt": "x",
        "captions": "x",
        "is_template": true,
        "is_onboarding": true,
        "generation_status": {},
        "carousel_data": {},
        "type": "x",
        "agent_id": "x",
        "id": "x",
        "created_at": "2026-01-01T00:00:00Z",
        "updated_at": "2026-01-01T00:00:00Z",
        "reel_id": "x",
        "user_id": "x",
        "product_id": "x",
        "main_avatar": "x"
      },
      "queue_id": "x",
      "requires_polling": true
    },
    "idField": "id"
  },
  {
    "entity": "read_root_get",
    "accessor": "ReadRootGet",
    "op": "load",
    "method": "GET",
    "path": "/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "record_demo_booked",
    "accessor": "RecordDemoBooked",
    "op": "create",
    "method": "POST",
    "path": "/api/chat/sessions/{session_id}/demo-booked",
    "args": [
      {
        "name": "session_id",
        "wire": "session_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "session": {
        "sessionId": "x",
        "chatSubVariant": "A",
        "status": "x",
        "salesStage": "x",
        "routeRecommendation": "x",
        "selectedPlan": "3_agents",
        "model": "x",
        "createdAt": "2026-01-01T00:00:00Z",
        "updatedAt": "2026-01-01T00:00:00Z"
      },
      "message": {
        "id": "x",
        "role": "user",
        "content": "x",
        "blockType": "x",
        "blockData": {},
        "createdAt": "2026-01-01T00:00:00Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "refresh_stat",
    "accessor": "RefreshStat",
    "op": "create",
    "method": "POST",
    "path": "/api/analytics/refresh-stats",
    "args": [],
    "select": {
      "email": "v1",
      "user_id": "v1"
    },
    "headers": [
      {
        "name": "x_agent_access_key",
        "wire": "x-agent-access-key",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "email",
      "user_id"
    ],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "status": "x",
      "provider": "x",
      "message": "x",
      "entries_found": 1,
      "summary": {}
    },
    "idField": "id"
  },
  {
    "entity": "remixer_clipper",
    "accessor": "RemixerClipper",
    "op": "create",
    "method": "POST",
    "path": "/api/remixer-clippers/jobs/{identifier}/download",
    "args": [
      {
        "name": "identifier",
        "wire": "identifier",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "remixer_clipper",
    "accessor": "RemixerClipper",
    "op": "load",
    "method": "GET",
    "path": "/api/remixer-clippers/catalog",
    "action": "catalog",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "reset_product",
    "accessor": "ResetProduct",
    "op": "create",
    "method": "POST",
    "path": "/api/reset-product/generate-videos-v6",
    "action": "generate_videos_v6",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "reset_product",
    "accessor": "ResetProduct",
    "op": "load",
    "method": "GET",
    "path": "/api/reset-product/generate-videos/status",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "retry_website_scrape",
    "accessor": "RetryWebsiteScrape",
    "op": "create",
    "method": "POST",
    "path": "/api/onboarding-v6/retry-scrape",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "success": true,
      "onboarding_data_id": "x",
      "status": "x",
      "flow_variant": "x",
      "skip_demo": true
    },
    "idField": "id"
  },
  {
    "entity": "save_survey",
    "accessor": "SaveSurvey",
    "op": "create",
    "method": "POST",
    "path": "/api/onboarding-v6/save-survey",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "success": true,
      "email_sent": true
    },
    "idField": "id"
  },
  {
    "entity": "scan_socials_public",
    "accessor": "ScanSocialsPublic",
    "op": "create",
    "method": "POST",
    "path": "/api/onboarding-v6/scan-socials-public",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "success": true,
      "status": "x",
      "message": "x"
    },
    "idField": "id"
  },
  {
    "entity": "scan_socials_status",
    "accessor": "ScanSocialsStatus",
    "op": "load",
    "method": "GET",
    "path": "/api/video-variation/scan-socials/status",
    "args": [],
    "select": {
      "onboarding_data_id": "v1",
      "product_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "onboarding_data_id",
      "product_id"
    ],
    "queryArgs": [
      {
        "name": "onboarding_data_id",
        "wire": "onboarding_data_id"
      },
      {
        "name": "product_id",
        "wire": "product_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "status": "x",
      "onboarding_data_id": "x",
      "product_id": "x",
      "task_id": "x",
      "ads_count": 1
    },
    "idField": "id"
  },
  {
    "entity": "schedule_v2",
    "accessor": "ScheduleV2",
    "op": "list",
    "method": "GET",
    "path": "/api/schedule/queue",
    "args": [],
    "select": {
      "all_product": "v1",
      "limit": 100,
      "offset": 0,
      "product_id": "v1",
      "status": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "status",
      "product_id",
      "all_products",
      "limit",
      "offset"
    ],
    "queryArgs": [
      {
        "name": "all_product",
        "wire": "all_products"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "product_id",
        "wire": "product_id"
      },
      {
        "name": "status",
        "wire": "status"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total": 1,
      "items": [
        {
          "is_tiktok_posted": true,
          "tiktok_posted_url": "x",
          "tiktok_scraped_social_post_id": "x",
          "tiktok_posted_by": "x",
          "is_instagram_posted": true,
          "instagram_posted_url": "x",
          "instagram_scraped_social_post_id": "x",
          "instagram_posted_by": "x",
          "is_youtube_posted": true,
          "youtube_posted_url": "x",
          "youtube_scraped_social_post_id": "x",
          "youtube_posted_by": "x",
          "id": "x",
          "scheduled_datetime": "2026-01-01T00:00:00Z",
          "status": "x",
          "source_type": "x",
          "comment": "x",
          "results": {},
          "video": {
            "id": "x",
            "url": "x",
            "title": "x",
            "created_at": "2026-01-01T00:00:00Z",
            "captions": "x",
            "media_asset_id": "x",
            "type": "x",
            "carousel_data": {}
          },
          "agent": {
            "name": "x",
            "bio": "x",
            "role": "x",
            "avatar": "x",
            "tiktokUrl": "x",
            "instagramUrl": "x",
            "youtubeUrl": "x",
            "facebookUrl": "x",
            "uploadPostPlatforms": [],
            "id": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z"
          },
          "created_at": "2026-01-01T00:00:00Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "schedule_v2",
    "accessor": "ScheduleV2",
    "op": "load",
    "method": "GET",
    "path": "/api/schedule/results",
    "args": [],
    "select": {
      "all_product": "v1",
      "day": 7,
      "limit": 100,
      "offset": 0,
      "product_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "days",
      "product_id",
      "all_products"
    ],
    "queryArgs": [
      {
        "name": "all_product",
        "wire": "all_products"
      },
      {
        "name": "day",
        "wire": "days"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "product_id",
        "wire": "product_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "schedule_v2",
    "accessor": "ScheduleV2",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/schedule/queue/{queue_id}",
    "args": [
      {
        "name": "queue_id",
        "wire": "queue_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "schedule_v2",
    "accessor": "ScheduleV2",
    "op": "update",
    "method": "PUT",
    "path": "/api/schedule/queue/{queue_id}/replace-video",
    "action": "replace_video",
    "args": [
      {
        "name": "queue_id",
        "wire": "queue_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "scrape",
    "accessor": "Scrape",
    "op": "create",
    "method": "POST",
    "path": "/api/reset-product/scrape",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "success": true,
      "onboarding_data_id": "x",
      "status": "x"
    },
    "idField": "id"
  },
  {
    "entity": "scrape_website_public",
    "accessor": "ScrapeWebsitePublic",
    "op": "create",
    "method": "POST",
    "path": "/api/onboarding-v6/scrape-website-public",
    "args": [],
    "select": {
      "context": "v1",
      "flow": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "flow",
      "context"
    ],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "success": true,
      "onboarding_data_id": "x",
      "status": "x",
      "flow_variant": "x"
    },
    "idField": "id"
  },
  {
    "entity": "scraped_data",
    "accessor": "ScrapedData",
    "op": "create",
    "method": "POST",
    "path": "/api/scraper/extract",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "name": "x",
      "description": "x",
      "howItWorks": "x",
      "targetAudience": "x",
      "pricingAndOffers": "x",
      "homepageVideoUrl": "x",
      "imageUrls": [
        "x"
      ],
      "mediaAssets": [
        {
          "id": "x",
          "url": "x",
          "type": "x",
          "category": "x",
          "source": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "scraping_status",
    "accessor": "ScrapingStatus",
    "op": "load",
    "method": "GET",
    "path": "/api/scraper/scraping_status",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "status": "x",
      "data": {
        "name": "x",
        "description": "x",
        "howItWorks": "x",
        "targetAudience": "x",
        "pricingAndOffers": "x",
        "homepageVideoUrl": "x",
        "imageUrls": [
          "x"
        ],
        "mediaAssets": [
          {
            "id": "x",
            "url": "x",
            "type": "x",
            "category": "x",
            "source": "x"
          }
        ]
      },
      "error": "x"
    },
    "idField": "id"
  },
  {
    "entity": "self_serve_activate",
    "accessor": "SelfServeActivate",
    "op": "create",
    "method": "POST",
    "path": "/api/onboarding-v6/self-serve-activate",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "success": true,
      "redirect_to_stripe": true,
      "stripe_checkout_url": "x"
    },
    "idField": "id"
  },
  {
    "entity": "seo",
    "accessor": "Seo",
    "op": "load",
    "method": "GET",
    "path": "/api/seo/oauth/status",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "seo_ai_mention",
    "accessor": "SeoAiMention",
    "op": "list",
    "method": "GET",
    "path": "/api/seo/ai-mentions",
    "args": [],
    "select": {
      "limit": 200,
      "product_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "product_id"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "product_id",
        "wire": "product_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "run_week": "x",
      "rows": [
        {
          "prompt_text": "x",
          "bucket": "x",
          "dominant_domain": "x",
          "domain_type": "x",
          "primary_url": "x",
          "secondary_urls": [
            "x"
          ],
          "evidence": {},
          "run_week": "x",
          "engine": "x",
          "geo": "x",
          "language": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "seo_backlink",
    "accessor": "SeoBacklink",
    "op": "list",
    "method": "GET",
    "path": "/api/seo/backlinks",
    "args": [],
    "select": {
      "limit": 200,
      "product_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "product_id"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "product_id",
        "wire": "product_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "site_url": "x",
      "rows": [
        {
          "referring_domain": "x",
          "target_page": "x",
          "anchor_text": "x",
          "first_seen": "x",
          "status": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "seo_keyword",
    "accessor": "SeoKeyword",
    "op": "list",
    "method": "GET",
    "path": "/api/seo/keywords",
    "args": [],
    "select": {
      "day": 28,
      "limit": 200,
      "product_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "days",
      "limit",
      "product_id"
    ],
    "queryArgs": [
      {
        "name": "day",
        "wire": "days"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "product_id",
        "wire": "product_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "site_url": "x",
      "start_date": "2026-01-01",
      "end_date": "2026-01-01",
      "rows": [
        {
          "keyword": "x",
          "keyword_group": "x",
          "current_position": 1,
          "position_change": 1,
          "blog_page": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "seo_overview",
    "accessor": "SeoOverview",
    "op": "list",
    "method": "GET",
    "path": "/api/seo/overview",
    "args": [],
    "select": {
      "day": 28,
      "product_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "days",
      "product_id"
    ],
    "queryArgs": [
      {
        "name": "day",
        "wire": "days"
      },
      {
        "name": "product_id",
        "wire": "product_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "site_url": "x",
      "start_date": "2026-01-01",
      "end_date": "2026-01-01",
      "series": [
        {
          "date": "2026-01-01",
          "clicks": 1,
          "impressions": 1,
          "ctr": 1,
          "position": 1
        }
      ],
      "totals": {
        "clicks": 1,
        "impressions": 1,
        "ctr": 1,
        "avg_position": 1
      },
      "deltas": {
        "clicks_change": 1,
        "position_change": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "seo_traffic",
    "accessor": "SeoTraffic",
    "op": "list",
    "method": "GET",
    "path": "/api/seo/traffic",
    "args": [],
    "select": {
      "day": 28,
      "product_id": "v1",
      "top_limit": 30
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "days",
      "top_limit",
      "product_id"
    ],
    "queryArgs": [
      {
        "name": "day",
        "wire": "days"
      },
      {
        "name": "product_id",
        "wire": "product_id"
      },
      {
        "name": "top_limit",
        "wire": "top_limit"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "site_url": "x",
      "start_date": "2026-01-01",
      "end_date": "2026-01-01",
      "series": [
        {
          "date": "2026-01-01",
          "clicks": 1,
          "impressions": 1,
          "ctr": 1,
          "position": 1
        }
      ],
      "totals": {
        "clicks": 1,
        "impressions": 1,
        "ctr": 1,
        "avg_position": 1
      },
      "top_queries": [
        {
          "query": "x",
          "impressions": 1,
          "clicks": 1,
          "avg_position": 1
        }
      ],
      "top_pages": [
        {
          "page": "x",
          "clicks": 1,
          "impressions": 1,
          "avg_position": 1
        }
      ],
      "top_countries": [
        {
          "country": "x",
          "clicks": 1,
          "impressions": 1,
          "avg_position": 1
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "share_access_link",
    "accessor": "ShareAccessLink",
    "op": "create",
    "method": "POST",
    "path": "/auth/share-access-link",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "share_token": "x",
      "share_url": "x"
    },
    "idField": "id"
  },
  {
    "entity": "site",
    "accessor": "Site",
    "op": "load",
    "method": "GET",
    "path": "/api/sites/slugs",
    "action": "slug",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "slide",
    "accessor": "Slide",
    "op": "create",
    "method": "POST",
    "path": "/api/carousel/{video_id}/slides/{slide_index}/regenerate",
    "action": "regenerate",
    "args": [
      {
        "name": "carousel_id",
        "wire": "video_id",
        "value": "p1"
      },
      {
        "name": "slide_index",
        "wire": "slide_index",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "slide",
    "accessor": "Slide",
    "op": "update",
    "method": "PATCH",
    "path": "/api/carousel/{video_id}/slides/{slide_index}",
    "args": [
      {
        "name": "carousel_id",
        "wire": "video_id",
        "value": "p1"
      },
      {
        "name": "id",
        "wire": "slide_index",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "slug_validation",
    "accessor": "SlugValidation",
    "op": "load",
    "method": "GET",
    "path": "/api/landings/validate-slug/{slug}",
    "args": [
      {
        "name": "slug",
        "wire": "slug",
        "value": "p1"
      }
    ],
    "select": {
      "product_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "product_id"
    ],
    "queryArgs": [
      {
        "name": "product_id",
        "wire": "product_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "valid": true,
      "reason": "x"
    },
    "idField": "id"
  },
  {
    "entity": "social",
    "accessor": "Social",
    "op": "list",
    "method": "GET",
    "path": "/social/connections",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "platform": "TIKTOK",
        "platformUserId": "x",
        "username": "x",
        "id": "x",
        "userId": "x",
        "createdAt": "2026-01-01T00:00:00Z",
        "updatedAt": "2026-01-01T00:00:00Z"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "social",
    "accessor": "Social",
    "op": "list",
    "method": "GET",
    "path": "/social/platforms",
    "action": "platform",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": [
      "x"
    ],
    "idField": "id"
  },
  {
    "entity": "social",
    "accessor": "Social",
    "op": "remove",
    "method": "DELETE",
    "path": "/social/connections/{platform}",
    "args": [
      {
        "name": "platform",
        "wire": "platform",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "social_scan_preview",
    "accessor": "SocialScanPreview",
    "op": "create",
    "method": "POST",
    "path": "/api/social-scan/preview",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "success": true,
      "posts": [
        {
          "platform": "x",
          "post_url": "x",
          "video_url": "x",
          "cover_url": "x",
          "views": 1,
          "likes": 1,
          "comments": 1
        }
      ],
      "tiktok_handle": "x",
      "instagram_handle": "x"
    },
    "idField": "id"
  },
  {
    "entity": "social_scan_process",
    "accessor": "SocialScanProcess",
    "op": "create",
    "method": "POST",
    "path": "/api/social-scan/process",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "success": true,
      "task_id": "x"
    },
    "idField": "id"
  },
  {
    "entity": "social_scan_save",
    "accessor": "SocialScanSave",
    "op": "create",
    "method": "POST",
    "path": "/api/social-scan/save",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "success": true,
      "media_asset_ids": [
        "x"
      ]
    },
    "idField": "id"
  },
  {
    "entity": "sora2_avatar",
    "accessor": "Sora2Avatar",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/sora2-avatars",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "prompt_key": "x",
      "selected_prompt": "x",
      "selected_gender": "x",
      "selected_race": "x",
      "selected_age_bucket": "x",
      "sora2_video_url": "x",
      "sora2_task_id": "x",
      "sora2_cameo_id": "x",
      "sora2_cameo_handle": "x",
      "sora2_display_name": "x",
      "sora2_cameo_link": "x",
      "avatar_frame_url": "x",
      "headshot_url": "x",
      "current_step": 1,
      "run_output_dir": "x",
      "logs": {},
      "id": "x",
      "created_at": "2026-01-01T00:00:00Z",
      "updated_at": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "sora2_avatar",
    "accessor": "Sora2Avatar",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/sora2-avatars",
    "args": [],
    "select": {
      "completed_only": "v1",
      "current_step": "v1",
      "page": 1,
      "page_size": 50,
      "prompt_key": "v1",
      "search": "v1",
      "selected_age_bucket": "v1",
      "selected_gender": "v1",
      "selected_race": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page",
      "page_size",
      "prompt_key",
      "selected_gender",
      "selected_race",
      "selected_age_bucket",
      "current_step",
      "completed_only",
      "search"
    ],
    "queryArgs": [
      {
        "name": "completed_only",
        "wire": "completed_only"
      },
      {
        "name": "current_step",
        "wire": "current_step"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      },
      {
        "name": "prompt_key",
        "wire": "prompt_key"
      },
      {
        "name": "search",
        "wire": "search"
      },
      {
        "name": "selected_age_bucket",
        "wire": "selected_age_bucket"
      },
      {
        "name": "selected_gender",
        "wire": "selected_gender"
      },
      {
        "name": "selected_race",
        "wire": "selected_race"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total": 1,
      "page": 1,
      "page_size": 1,
      "items": [
        {
          "prompt_key": "x",
          "selected_prompt": "x",
          "selected_gender": "x",
          "selected_race": "x",
          "selected_age_bucket": "x",
          "sora2_video_url": "x",
          "sora2_task_id": "x",
          "sora2_cameo_id": "x",
          "sora2_cameo_handle": "x",
          "sora2_display_name": "x",
          "sora2_cameo_link": "x",
          "avatar_frame_url": "x",
          "headshot_url": "x",
          "current_step": 1,
          "run_output_dir": "x",
          "logs": {},
          "id": "x",
          "created_at": "2026-01-01T00:00:00Z",
          "updated_at": "2026-01-01T00:00:00Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "sora2_avatar",
    "accessor": "Sora2Avatar",
    "op": "load",
    "method": "GET",
    "path": "/api/admin/sora2-avatars/{avatar_id}",
    "args": [
      {
        "name": "id",
        "wire": "avatar_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "prompt_key": "x",
      "selected_prompt": "x",
      "selected_gender": "x",
      "selected_race": "x",
      "selected_age_bucket": "x",
      "sora2_video_url": "x",
      "sora2_task_id": "x",
      "sora2_cameo_id": "x",
      "sora2_cameo_handle": "x",
      "sora2_display_name": "x",
      "sora2_cameo_link": "x",
      "avatar_frame_url": "x",
      "headshot_url": "x",
      "current_step": 1,
      "run_output_dir": "x",
      "logs": {},
      "id": "x",
      "created_at": "2026-01-01T00:00:00Z",
      "updated_at": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "sora2_avatar",
    "accessor": "Sora2Avatar",
    "op": "update",
    "method": "PUT",
    "path": "/api/admin/sora2-avatars/{avatar_id}",
    "args": [
      {
        "name": "id",
        "wire": "avatar_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "prompt_key": "x",
      "selected_prompt": "x",
      "selected_gender": "x",
      "selected_race": "x",
      "selected_age_bucket": "x",
      "sora2_video_url": "x",
      "sora2_task_id": "x",
      "sora2_cameo_id": "x",
      "sora2_cameo_handle": "x",
      "sora2_display_name": "x",
      "sora2_cameo_link": "x",
      "avatar_frame_url": "x",
      "headshot_url": "x",
      "current_step": 1,
      "run_output_dir": "x",
      "logs": {},
      "id": "x",
      "created_at": "2026-01-01T00:00:00Z",
      "updated_at": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "sora2_avatar_asset_upload",
    "accessor": "Sora2AvatarAssetUpload",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/sora2-avatars/upload-asset",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "upload_type": "sora2_video",
      "url": "x",
      "s3_key": "x"
    },
    "idField": "id"
  },
  {
    "entity": "sora2_avatar_stat",
    "accessor": "Sora2AvatarStat",
    "op": "load",
    "method": "GET",
    "path": "/api/admin/sora2-avatars/stats",
    "args": [],
    "select": {
      "prompt_key": "v1",
      "selected_age_bucket": "v1",
      "selected_gender": "v1",
      "selected_race": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "prompt_key",
      "selected_gender",
      "selected_race",
      "selected_age_bucket"
    ],
    "queryArgs": [
      {
        "name": "prompt_key",
        "wire": "prompt_key"
      },
      {
        "name": "selected_age_bucket",
        "wire": "selected_age_bucket"
      },
      {
        "name": "selected_gender",
        "wire": "selected_gender"
      },
      {
        "name": "selected_race",
        "wire": "selected_race"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_avatars": 1,
      "completed_avatars": 1,
      "completion_rate": 1,
      "by_gender": {},
      "by_race": {},
      "by_age_bucket": {},
      "by_prompt_key": {}
    },
    "idField": "id"
  },
  {
    "entity": "stat",
    "accessor": "Stat",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/stats/posts",
    "action": "post",
    "args": [],
    "select": {
      "day": 365
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "days"
    ],
    "queryArgs": [
      {
        "name": "day",
        "wire": "days"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "daily_stats": [
        {
          "date": "x",
          "successful_posts": 1,
          "failed_posts": 1,
          "total_posts": 1
        }
      ],
      "expected_posts_per_day": 1,
      "total_successful": 1,
      "total_failed": 1
    },
    "idField": "id"
  },
  {
    "entity": "stats_refresh_backfill",
    "accessor": "StatsRefreshBackfill",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/customer-health/backfill",
    "args": [],
    "select": {
      "day": 30
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "days"
    ],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "status": "x",
      "task_id": "x",
      "message": "x"
    },
    "idField": "id"
  },
  {
    "entity": "stats_refresh_issue",
    "accessor": "StatsRefreshIssue",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/customer-health/issues",
    "args": [],
    "select": {
      "date_from": "v1",
      "date_to": "v1",
      "limit": 100,
      "offset": 0,
      "platform": "v1",
      "posting_method": "v1",
      "query": "v1",
      "reason": "v1",
      "status": "open"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "status",
      "date_from",
      "date_to",
      "reason",
      "platform",
      "posting_method",
      "query",
      "limit",
      "offset"
    ],
    "queryArgs": [
      {
        "name": "date_from",
        "wire": "date_from"
      },
      {
        "name": "date_to",
        "wire": "date_to"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "platform",
        "wire": "platform"
      },
      {
        "name": "posting_method",
        "wire": "posting_method"
      },
      {
        "name": "query",
        "wire": "query"
      },
      {
        "name": "reason",
        "wire": "reason"
      },
      {
        "name": "status",
        "wire": "status"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total": 1,
      "issues": [
        {
          "id": "x",
          "schedule_queue_id": "x",
          "user_id": "x",
          "user_email_snapshot": "x",
          "product_id": "x",
          "product_name_snapshot": "x",
          "agent_id": "x",
          "agent_name_snapshot": "x",
          "platform": "x",
          "post_method": "x",
          "posted_date_et": "2026-01-01",
          "scheduled_datetime_utc": "2026-01-01T00:00:00Z",
          "status": "x",
          "reason_code": "x",
          "post_url": "x",
          "last_refresh_completed_at": "2026-01-01T00:00:00Z",
          "latest_error_message": "x",
          "stale_after_sla": true,
          "aged_over_24h": true,
          "retry_count": 1,
          "next_retry_at": "2026-01-01T00:00:00Z",
          "first_detected_at": "2026-01-01T00:00:00Z",
          "last_detected_at": "2026-01-01T00:00:00Z",
          "resolved_at": "2026-01-01T00:00:00Z",
          "last_seen_run_id": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "stats_refresh_overview",
    "accessor": "StatsRefreshOverview",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/customer-health/overview",
    "args": [],
    "select": {
      "date": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "date"
    ],
    "queryArgs": [
      {
        "name": "date",
        "wire": "date"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "date": "x",
      "generated_at": "x",
      "sla_deadline_et": "x",
      "posted_entries": 1,
      "platform_units_total": 1,
      "platform_units_resolved": 1,
      "platform_units_unresolved": 1,
      "coverage_percent": 1,
      "reason_counts": {},
      "platform_counts": {},
      "method_counts": {},
      "customer_counts": {},
      "stale_after_sla": 1,
      "aged_over_24h": 1,
      "top_affected_customers": [
        {
          "customer": "x",
          "count": 1
        }
      ],
      "backlog_preview": [
        {
          "schedule_queue_id": "x",
          "user_id": "x",
          "user_email": "x",
          "product_id": "x",
          "product_name": "x",
          "agent_id": "x",
          "agent_name": "x",
          "platform": "x",
          "post_method": "x",
          "posted_date_et": "x",
          "scheduled_datetime_utc": "x",
          "post_url": "x",
          "last_refresh_completed_at": "x",
          "latest_error_message": "x",
          "is_resolved": true,
          "reason_code": "x",
          "stale_after_sla": true,
          "aged_over_24h": true
        }
      ],
      "active_run": {
        "id": "x",
        "run_type": "x",
        "status": "x",
        "target_date_et": "2026-01-01",
        "provider": "x",
        "refresh_trigger": "x",
        "celery_task_id": "x",
        "requested_by_email": "x",
        "users_count": 1,
        "entries_total": 1,
        "platform_units_total": 1,
        "platform_units_resolved": 1,
        "platform_units_unresolved": 1,
        "entries_updated": 1,
        "entries_failed": 1,
        "entries_skipped": 1,
        "platform_updates_via_url": 1,
        "platform_updates_via_profile": 1,
        "issues_opened": 1,
        "issues_resolved": 1,
        "error_summary_json": {},
        "started_at": "2026-01-01T00:00:00Z",
        "completed_at": "2026-01-01T00:00:00Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "stats_refresh_run_summary",
    "accessor": "StatsRefreshRunSummary",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/customer-health/runs",
    "args": [],
    "select": {
      "date_from": "v1",
      "date_to": "v1",
      "include_global": "v1",
      "limit": 50,
      "offset": 0,
      "run_type": "v1",
      "status": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "date_from",
      "date_to",
      "status",
      "run_type",
      "include_global",
      "limit",
      "offset"
    ],
    "queryArgs": [
      {
        "name": "date_from",
        "wire": "date_from"
      },
      {
        "name": "date_to",
        "wire": "date_to"
      },
      {
        "name": "include_global",
        "wire": "include_global"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "run_type",
        "wire": "run_type"
      },
      {
        "name": "status",
        "wire": "status"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total": 1,
      "runs": [
        {
          "id": "x",
          "run_type": "x",
          "status": "x",
          "target_date_et": "2026-01-01",
          "provider": "x",
          "refresh_trigger": "x",
          "celery_task_id": "x",
          "requested_by_email": "x",
          "users_count": 1,
          "entries_total": 1,
          "platform_units_total": 1,
          "platform_units_resolved": 1,
          "platform_units_unresolved": 1,
          "entries_updated": 1,
          "entries_failed": 1,
          "entries_skipped": 1,
          "platform_updates_via_url": 1,
          "platform_updates_via_profile": 1,
          "issues_opened": 1,
          "issues_resolved": 1,
          "error_summary_json": {},
          "started_at": "2026-01-01T00:00:00Z",
          "completed_at": "2026-01-01T00:00:00Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "stats_refresh_task_trigger",
    "accessor": "StatsRefreshTaskTrigger",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/customer-health/manual-refresh",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "status": "x",
      "task_id": "x",
      "message": "x",
      "target_date": "x",
      "users_count": 1
    },
    "idField": "id"
  },
  {
    "entity": "stripe",
    "accessor": "Stripe",
    "op": "create",
    "method": "POST",
    "path": "/api/stripe/associate-guest-checkout",
    "action": "associate_guest_checkout",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "stripe",
    "accessor": "Stripe",
    "op": "create",
    "method": "POST",
    "path": "/api/stripe/cancel-trial",
    "action": "cancel_trial",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "stripe",
    "accessor": "Stripe",
    "op": "create",
    "method": "POST",
    "path": "/api/stripe/create-checkout-session",
    "action": "create_checkout_session",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "stripe",
    "accessor": "Stripe",
    "op": "create",
    "method": "POST",
    "path": "/api/stripe/create-credits-checkout-session",
    "action": "create_credits_checkout_session",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "stripe",
    "accessor": "Stripe",
    "op": "create",
    "method": "POST",
    "path": "/api/stripe/create-guest-checkout-session",
    "action": "create_guest_checkout_session",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "stripe",
    "accessor": "Stripe",
    "op": "create",
    "method": "POST",
    "path": "/api/stripe/create-portal-session",
    "action": "create_portal_session",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "stripe",
    "accessor": "Stripe",
    "op": "create",
    "method": "POST",
    "path": "/api/stripe/end-trial-early",
    "action": "end_trial_early",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "stripe",
    "accessor": "Stripe",
    "op": "create",
    "method": "POST",
    "path": "/api/stripe/update-subscription-quantity",
    "action": "update_subscription_quantity",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "style",
    "accessor": "Style",
    "op": "load",
    "method": "GET",
    "path": "/api/carousel/styles",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "template",
    "accessor": "Template",
    "op": "load",
    "method": "GET",
    "path": "/api/carousel/templates",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "tik_tok_creator_info",
    "accessor": "TikTokCreatorInfo",
    "op": "list",
    "method": "GET",
    "path": "/social/tiktok/creator-info",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "creatorAvatarUrl": "x",
      "creatorUsername": "x",
      "creatorNickname": "x",
      "privacyLevelOptions": [
        "x"
      ],
      "commentDisabled": true,
      "duetDisabled": true,
      "stitchDisabled": true,
      "maxVideoPostDurationSec": 1
    },
    "idField": "id"
  },
  {
    "entity": "top_post",
    "accessor": "TopPost",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/stats/top-posts",
    "args": [],
    "select": {
      "date": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "date"
    ],
    "queryArgs": [
      {
        "name": "date",
        "wire": "date"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "date": "x",
      "posts": [
        {
          "id": "x",
          "user_email": "x",
          "user_id": "x",
          "scheduled_datetime": "x",
          "views": 1,
          "likes": 1,
          "comments": 1,
          "platforms": [
            {
              "platform": "x",
              "views": 1,
              "likes": 1,
              "comments": 1,
              "post_url": "x",
              "agent_url": "x"
            }
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "upload_post_agent",
    "accessor": "UploadPostAgent",
    "op": "create",
    "method": "POST",
    "path": "/api/upload-post-agents/sync-platforms",
    "action": "sync_platform",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "load",
    "method": "GET",
    "path": "/api/upload-post-agents/user/{user_id}",
    "args": [
      {
        "name": "id",
        "wire": "user_id",
        "value": "p1"
      }
    ],
    "select": {
      "product_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "product_id"
    ],
    "queryArgs": [
      {
        "name": "product_id",
        "wire": "product_id"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "userId": "x",
      "agents": [
        {
          "id": "x",
          "name": "x",
          "bio": "x",
          "role": "x",
          "avatar": "x",
          "tiktokUrl": "x",
          "tiktokStats": {},
          "instagramUrl": "x",
          "youtubeUrl": "x",
          "facebookUrl": "x",
          "uploadPostPlatforms": [
            "x"
          ],
          "type": "x",
          "isActive": true,
          "assignedAt": "2026-01-01T00:00:00Z",
          "activeConnections": 1
        }
      ],
      "totalCount": 1
    },
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "load",
    "method": "GET",
    "path": "/auth/me",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "email": "x",
      "name": "x",
      "picture": "x",
      "credits": 1,
      "membership": "STARTER",
      "agentsCount": 1,
      "stripeCustomerId": "x",
      "stripeSubscriptionId": "x",
      "subscriptionCurrentPeriodEnd": "2026-01-01T00:00:00Z",
      "subscriptionStatus": "x",
      "avatarImageUrl": "x",
      "avatarVoiceUrl": "x",
      "attribution": {},
      "industry": "x",
      "isInternalUser": true,
      "accountType": "standard",
      "hasSeenScheduleWelcome": true,
      "isResettingProduct": true,
      "partnerSource": "x",
      "partnerExternalUserId": "x",
      "partnerPolicyCode": "x",
      "partnerDirectLoginDisabled": true,
      "id": "x",
      "googleId": "x",
      "instagramId": "x",
      "isAdmin": true,
      "isMigrated": true,
      "createdAt": "2026-01-01T00:00:00Z",
      "updatedAt": "2026-01-01T00:00:00Z",
      "isActivatedByAdmin": true,
      "activatedByAdminAt": "2026-01-01T00:00:00Z",
      "activatedByAdminId": "x"
    },
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "update",
    "method": "PATCH",
    "path": "/api/users/attribution",
    "action": "attribution",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "update",
    "method": "PATCH",
    "path": "/api/users/industry",
    "action": "industry",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "update",
    "method": "PATCH",
    "path": "/api/users/mark-schedule-welcome-seen",
    "action": "mark_schedule_welcome_seen",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "user_agent",
    "accessor": "UserAgent",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/users/{user_id}/agents",
    "args": [
      {
        "name": "id",
        "wire": "user_id",
        "value": "p1"
      }
    ],
    "select": {
      "agent_id": "v1",
      "phone_admin_pc_name": "v1",
      "product_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "agent_id",
      "product_id",
      "phone_admin_pc_name"
    ],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "user_agent",
    "accessor": "UserAgent",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/users/{user_id}/agents",
    "args": [
      {
        "name": "id",
        "wire": "user_id",
        "value": "p1"
      }
    ],
    "select": {
      "limit": "v1",
      "offset": 0,
      "product_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "product_id",
      "limit",
      "offset"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "product_id",
        "wire": "product_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "user_id": "x",
      "assignments": [
        {
          "assignment_id": "x",
          "agent": {
            "id": "x",
            "name": "x",
            "type": "x",
            "tiktok_url": "x",
            "instagram_url": "x",
            "youtube_url": "x",
            "tiktok_connection_status": "x",
            "instagram_connection_status": "x",
            "youtube_connection_status": "x",
            "upload_post_username": "x",
            "upload_post_tiktok_connected": true,
            "upload_post_instagram_connected": true,
            "upload_post_youtube_connected": true
          },
          "status": "x",
          "assigned_at": "2026-01-01T00:00:00Z",
          "expires_at": "2026-01-01T00:00:00Z"
        }
      ],
      "total": 1,
      "limit": 1,
      "offset": 1,
      "phone_admin_error": "x"
    },
    "idField": "id"
  },
  {
    "entity": "user_health_detail",
    "accessor": "UserHealthDetail",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/users/{user_id}/health-detail",
    "args": [
      {
        "name": "id",
        "wire": "user_id",
        "value": "p1"
      }
    ],
    "select": {
      "assigned_agents_preview_limit": 50,
      "product_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "product_id",
      "assigned_agents_preview_limit"
    ],
    "queryArgs": [
      {
        "name": "assigned_agents_preview_limit",
        "wire": "assigned_agents_preview_limit"
      },
      {
        "name": "product_id",
        "wire": "product_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": "x",
      "email": "x",
      "name": "x",
      "subscription_status": "x",
      "is_admin": true,
      "is_internal_user": true,
      "is_migrated": true,
      "membership": "STARTER",
      "agents_count": 1,
      "credits": 1,
      "account_type": "x",
      "created_at": "2026-01-01T00:00:00Z",
      "is_bookmarked": true,
      "admin_notes": "x",
      "onboarding_flow": "x",
      "activated": true,
      "survey_data": {},
      "is_activated_by_admin": true,
      "activated_by_admin_at": "2026-01-01T00:00:00Z",
      "activated_by_admin_id": "x",
      "product_id": "x",
      "product_name": "x",
      "product_url": "x",
      "landing_slug": "x",
      "microhub_url": "x",
      "landing_url": "x",
      "microhub_status": "x",
      "landing_status": "x",
      "auto_schedule_enabled": true,
      "posted_video_reuse_percent": 1,
      "effective_posted_video_reuse_percent": 1,
      "assigned_agents": [
        {
          "id": "x",
          "name": "x",
          "type": "x"
        }
      ],
      "assigned_agents_count": 1,
      "assigned_agents_truncated": true,
      "assigned_agents_preview_limit": 1,
      "expected_agents_count": 1,
      "videos_total": 1,
      "videos_completed": 1,
      "videos_pending": 1,
      "videos_failed": 1,
      "videos_stale": 1,
      "today_scheduled": 1,
      "today_posted": 1,
      "today_failed": 1,
      "tomorrow_scheduled": 1,
      "tomorrow_capacity": 1,
      "yesterday_total": 1,
      "yesterday_posted": 1,
      "yesterday_failed": 1,
      "yesterday_failed_entries": [
        {
          "id": "x",
          "video_id": "x",
          "scheduled_datetime": "2026-01-01T00:00:00Z",
          "status": "x",
          "error_message": "x"
        }
      ],
      "comments_today_scheduled": 1,
      "comments_today_posted": 1,
      "comments_today_failed": 1,
      "comments_yesterday_total": 1,
      "comments_yesterday_posted": 1,
      "comments_yesterday_failed": 1,
      "comments_expected_per_day": 1,
      "comments_fix_ready": true,
      "comments_fix_block_reason": "x"
    },
    "idField": "id"
  },
  {
    "entity": "user_with_avatar_submission",
    "accessor": "UserWithAvatarSubmission",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/users/avatar-submissions",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "id": "x",
        "email": "x",
        "name": "x",
        "avatar_image_url": "x",
        "avatar_voice_url": "x",
        "created_at": "2026-01-01T00:00:00Z"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "users_health",
    "accessor": "UsersHealth",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/users-health",
    "args": [],
    "select": {
      "include_internal_user": "v1",
      "include_migrated_user": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "include_internal_users",
      "include_migrated_users"
    ],
    "queryArgs": [
      {
        "name": "include_internal_user",
        "wire": "include_internal_users"
      },
      {
        "name": "include_migrated_user",
        "wire": "include_migrated_users"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "chart_data": {
        "auto_schedule_healthy": 1,
        "auto_schedule_unhealthy": 1,
        "auto_schedule_today_healthy": 1,
        "auto_schedule_today_unhealthy": 1,
        "agents_healthy": 1,
        "agents_unhealthy": 1,
        "posts_healthy": 1,
        "posts_unhealthy": 1,
        "posts_today_healthy": 1,
        "posts_today_unhealthy": 1,
        "total_users": 1,
        "total_agents": 1,
        "total_yesterday_posts": 1,
        "total_today_posts": 1,
        "videos_pending": 1,
        "videos_failed": 1,
        "videos_success": 1
      },
      "users": [
        {
          "id": "x",
          "email": "x",
          "name": "x",
          "subscription_status": "x",
          "is_internal_user": true,
          "is_migrated": true,
          "membership": "STARTER",
          "agents_count": 1,
          "account_type": "x",
          "auto_schedule_enabled": true,
          "is_bookmarked": true,
          "admin_notes": "x",
          "created_at": "2026-01-01T00:00:00Z",
          "auto_schedule_health": "x",
          "auto_schedule_issue": "x",
          "auto_schedule_today_health": "x",
          "auto_schedule_today_issue": "x",
          "agents_health": "x",
          "agents_issue": "x",
          "posts_health": "x",
          "posts_issue": "x",
          "posts_today_health": "x",
          "posts_today_issue": "x",
          "assigned_agents_count": 1,
          "expected_agents_count": 1,
          "tomorrow_scheduled_count": 1,
          "tomorrow_expected_count": 1,
          "today_scheduled_count": 1,
          "today_expected_count": 1,
          "yesterday_failed_count": 1,
          "yesterday_total_count": 1,
          "today_failed_count": 1,
          "today_total_count": 1
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "video",
    "accessor": "Video",
    "op": "create",
    "method": "POST",
    "path": "/videos/{video_id}/retry-video",
    "action": "retry_video",
    "args": [
      {
        "name": "id",
        "wire": "video_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "video",
    "accessor": "Video",
    "op": "load",
    "method": "GET",
    "path": "/videos/{video_id}",
    "args": [
      {
        "name": "id",
        "wire": "video_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "url": "x",
      "title": "x",
      "duration": 1,
      "bookmarked": true,
      "thumbnail_url": "x",
      "media_asset_id": "x",
      "main_prompt": "x",
      "image_prompt": "x",
      "captions": "x",
      "is_template": true,
      "is_onboarding": true,
      "generation_status": {},
      "carousel_data": {},
      "type": "x",
      "agent_id": "x",
      "id": "x",
      "created_at": "2026-01-01T00:00:00Z",
      "updated_at": "2026-01-01T00:00:00Z",
      "reel_id": "x",
      "user_id": "x",
      "product_id": "x",
      "main_avatar": "x"
    },
    "idField": "id"
  },
  {
    "entity": "video",
    "accessor": "Video",
    "op": "remove",
    "method": "DELETE",
    "path": "/videos/{video_id}",
    "args": [
      {
        "name": "id",
        "wire": "video_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "video",
    "accessor": "Video",
    "op": "update",
    "method": "PATCH",
    "path": "/videos/{video_id}",
    "args": [
      {
        "name": "id",
        "wire": "video_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "url": "x",
      "title": "x",
      "duration": 1,
      "bookmarked": true,
      "thumbnail_url": "x",
      "media_asset_id": "x",
      "main_prompt": "x",
      "image_prompt": "x",
      "captions": "x",
      "is_template": true,
      "is_onboarding": true,
      "generation_status": {},
      "carousel_data": {},
      "type": "x",
      "agent_id": "x",
      "id": "x",
      "created_at": "2026-01-01T00:00:00Z",
      "updated_at": "2026-01-01T00:00:00Z",
      "reel_id": "x",
      "user_id": "x",
      "product_id": "x",
      "main_avatar": "x"
    },
    "idField": "id"
  },
  {
    "entity": "video",
    "accessor": "Video",
    "op": "update",
    "method": "PATCH",
    "path": "/videos/{video_id}/template",
    "action": "template",
    "args": [
      {
        "name": "id",
        "wire": "video_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "url": "x",
      "title": "x",
      "duration": 1,
      "bookmarked": true,
      "thumbnail_url": "x",
      "media_asset_id": "x",
      "main_prompt": "x",
      "image_prompt": "x",
      "captions": "x",
      "is_template": true,
      "is_onboarding": true,
      "generation_status": {},
      "carousel_data": {},
      "type": "x",
      "agent_id": "x",
      "id": "x",
      "created_at": "2026-01-01T00:00:00Z",
      "updated_at": "2026-01-01T00:00:00Z",
      "reel_id": "x",
      "user_id": "x",
      "product_id": "x",
      "main_avatar": "x"
    },
    "idField": "id"
  },
  {
    "entity": "video_remixer_worker",
    "accessor": "VideoRemixerWorker",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/video-remixer/worker/claim",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "watchdog_recovery",
    "accessor": "WatchdogRecovery",
    "op": "create",
    "method": "POST",
    "path": "/api/v1/watchdog/recovery-queue/resolve",
    "args": [],
    "select": {},
    "headers": [
      {
        "name": "x_watchdog_key",
        "wire": "x-watchdog-key",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "watchdog_recovery",
    "accessor": "WatchdogRecovery",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watchdog/recovery-queue",
    "args": [],
    "select": {
      "device_id": "v1"
    },
    "headers": [
      {
        "name": "x_watchdog_key",
        "wire": "x-watchdog-key",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "device_ids"
    ],
    "queryArgs": [
      {
        "name": "device_id",
        "wire": "device_ids"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "winning_ad",
    "accessor": "WinningAd",
    "op": "list",
    "method": "GET",
    "path": "/api/video-variation/winning-ads",
    "args": [],
    "select": {
      "product_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "product_id"
    ],
    "queryArgs": [
      {
        "name": "product_id",
        "wire": "product_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "media_assets": [
        {
          "id": "x",
          "url": "x",
          "type": "x",
          "source": "x",
          "description": "x",
          "created_at": "2026-01-01T00:00:00Z"
        }
      ],
      "product_id": "x"
    },
    "idField": "id"
  },
  {
    "entity": "x_adaptation",
    "accessor": "XAdaptation",
    "op": "load",
    "method": "GET",
    "path": "/api/carousel/x-adaptations",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "zerohuman_admin_account",
    "accessor": "ZerohumanAdminAccount",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/zerohuman/accounts",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "user_id": "x",
        "email": "x",
        "external_user_id": "x",
        "policy_code": "x",
        "membership": "x",
        "subscription_status": "x",
        "account_mode": "x",
        "product_id": "x",
        "product_name": "x",
        "assigned_agent": {
          "id": "x",
          "name": "x",
          "avatar": "x",
          "type": "x",
          "tiktok_url": "x",
          "instagram_url": "x",
          "youtube_url": "x",
          "facebook_url": "x"
        },
        "active_queue_count": 1,
        "provisioning_status": "x",
        "created_at": "2026-01-01T00:00:00Z",
        "updated_at": "2026-01-01T00:00:00Z"
      }
    ],
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
