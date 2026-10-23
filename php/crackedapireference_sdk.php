<?php
declare(strict_types=1);

// CrackedApiReference SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class CrackedApiReferenceSDK implements \JsonSerializable
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new CrackedApiReferenceUtility();
        $this->_utility = $utility;

        $config = CrackedApiReferenceConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = CrackedApiReferenceHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = CrackedApiReferenceHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!CrackedApiReferenceFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, CrackedApiReferenceFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    // The options hold the credential, so the default print and json form
    // name the client and nothing more; options_map() is the way to read
    // them back.
    public function jsonSerialize(): array
    {
        return ['name' => 'CrackedApiReference'];
    }

    public function __debugInfo(): array
    {
        return $this->jsonSerialize();
    }

    public function get_utility()
    {
        return CrackedApiReferenceUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = CrackedApiReferenceHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = strtoupper(is_string($method_val) && '' !== $method_val ? $method_val : "GET");
        $allow_method = Struct::getpath($opts, "allow.method");
        if (!CrackedApiReferencePrepareMethod::allowed($allow_method, $method_val)) {
            return ($utility->make_error)($ctx, $ctx->make_error("spec_method_allow",
                "Method \"" . $method_val . "\" not allowed by SDK option allow.method value: \"" .
                (is_string($allow_method) ? $allow_method : "") . "\""));
        }
        $params = CrackedApiReferenceHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = CrackedApiReferenceHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new CrackedApiReferenceSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        return CrackedApiReferencePrepareMethod::allowed(Struct::getpath($this->options, "allow.op"), $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new CrackedApiReferenceError($op . "_allow",
                "CrackedApiReferenceSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = CrackedApiReferenceHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => ($utility->clean)($ctx, $fetch_err)];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = CrackedApiReferenceHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            $body_err = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
                if (true === Struct::getprop($fetched, "unreadable")) {
                    $failed = ($status >= 200 && $status < 300) ? null : $ctx->make_error(
                        "request_status",
                        "request: {$status}: " . (string)Struct::getprop($fetched, "statusText"));
                    $sent = $fetchdef["headers"] ?? [];
                    if (CrackedApiReferenceFetcher::usesDefault($ctx)) {
                        $sent = CrackedApiReferenceFetcher::sentHeaders($sent);
                    }
                    $body_err = CrackedApiReferenceResultBody::unreadable($ctx, $status, $headers,
                        Struct::getprop($fetched, "body"), $sent, $failed);
                }
            }

            $out = [
                "ok" => null === $body_err && $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
            if (null !== $body_err) {
                $out["err"] = ($utility->clean)($ctx, $body_err);
            }
            return $out;
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new CrackedApiReferenceError("graphql_error",
                "CrackedApiReferenceSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_activate = null;

    // Canonical facade: $client->Activate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->activate()
    // resolves here too.
    public function Activate($data = null)
    {
        require_once __DIR__ . '/entity/activate_entity.php';
        if ($data === null) {
            if ($this->_activate === null) {
                $this->_activate = new ActivateEntity($this, null);
            }
            return $this->_activate;
        }
        return new ActivateEntity($this, $data);
    }


    private $_activate_user = null;

    // Canonical facade: $client->ActivateUser()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->activate_user()
    // resolves here too.
    public function ActivateUser($data = null)
    {
        require_once __DIR__ . '/entity/activate_user_entity.php';
        if ($data === null) {
            if ($this->_activate_user === null) {
                $this->_activate_user = new ActivateUserEntity($this, null);
            }
            return $this->_activate_user;
        }
        return new ActivateUserEntity($this, $data);
    }


    private $_active_onboarding = null;

    // Canonical facade: $client->ActiveOnboarding()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->active_onboarding()
    // resolves here too.
    public function ActiveOnboarding($data = null)
    {
        require_once __DIR__ . '/entity/active_onboarding_entity.php';
        if ($data === null) {
            if ($this->_active_onboarding === null) {
                $this->_active_onboarding = new ActiveOnboardingEntity($this, null);
            }
            return $this->_active_onboarding;
        }
        return new ActiveOnboardingEntity($this, $data);
    }


    private $_admin = null;

    // Canonical facade: $client->Admin()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->admin()
    // resolves here too.
    public function Admin($data = null)
    {
        require_once __DIR__ . '/entity/admin_entity.php';
        if ($data === null) {
            if ($this->_admin === null) {
                $this->_admin = new AdminEntity($this, null);
            }
            return $this->_admin;
        }
        return new AdminEntity($this, $data);
    }


    private $_admin_account_reset = null;

    // Canonical facade: $client->AdminAccountReset()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->admin_account_reset()
    // resolves here too.
    public function AdminAccountReset($data = null)
    {
        require_once __DIR__ . '/entity/admin_account_reset_entity.php';
        if ($data === null) {
            if ($this->_admin_account_reset === null) {
                $this->_admin_account_reset = new AdminAccountResetEntity($this, null);
            }
            return $this->_admin_account_reset;
        }
        return new AdminAccountResetEntity($this, $data);
    }


    private $_admin_carousel = null;

    // Canonical facade: $client->AdminCarousel()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->admin_carousel()
    // resolves here too.
    public function AdminCarousel($data = null)
    {
        require_once __DIR__ . '/entity/admin_carousel_entity.php';
        if ($data === null) {
            if ($this->_admin_carousel === null) {
                $this->_admin_carousel = new AdminCarouselEntity($this, null);
            }
            return $this->_admin_carousel;
        }
        return new AdminCarouselEntity($this, $data);
    }


    private $_admin_carousel_demo_review = null;

    // Canonical facade: $client->AdminCarouselDemoReview()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->admin_carousel_demo_review()
    // resolves here too.
    public function AdminCarouselDemoReview($data = null)
    {
        require_once __DIR__ . '/entity/admin_carousel_demo_review_entity.php';
        if ($data === null) {
            if ($this->_admin_carousel_demo_review === null) {
                $this->_admin_carousel_demo_review = new AdminCarouselDemoReviewEntity($this, null);
            }
            return $this->_admin_carousel_demo_review;
        }
        return new AdminCarouselDemoReviewEntity($this, $data);
    }


    private $_admin_customer = null;

    // Canonical facade: $client->AdminCustomer()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->admin_customer()
    // resolves here too.
    public function AdminCustomer($data = null)
    {
        require_once __DIR__ . '/entity/admin_customer_entity.php';
        if ($data === null) {
            if ($this->_admin_customer === null) {
                $this->_admin_customer = new AdminCustomerEntity($this, null);
            }
            return $this->_admin_customer;
        }
        return new AdminCustomerEntity($this, $data);
    }


    private $_admin_customer_success = null;

    // Canonical facade: $client->AdminCustomerSuccess()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->admin_customer_success()
    // resolves here too.
    public function AdminCustomerSuccess($data = null)
    {
        require_once __DIR__ . '/entity/admin_customer_success_entity.php';
        if ($data === null) {
            if ($this->_admin_customer_success === null) {
                $this->_admin_customer_success = new AdminCustomerSuccessEntity($this, null);
            }
            return $this->_admin_customer_success;
        }
        return new AdminCustomerSuccessEntity($this, $data);
    }


    private $_admin_generated_video = null;

    // Canonical facade: $client->AdminGeneratedVideo()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->admin_generated_video()
    // resolves here too.
    public function AdminGeneratedVideo($data = null)
    {
        require_once __DIR__ . '/entity/admin_generated_video_entity.php';
        if ($data === null) {
            if ($this->_admin_generated_video === null) {
                $this->_admin_generated_video = new AdminGeneratedVideoEntity($this, null);
            }
            return $this->_admin_generated_video;
        }
        return new AdminGeneratedVideoEntity($this, $data);
    }


    private $_admin_healthrx = null;

    // Canonical facade: $client->AdminHealthrx()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->admin_healthrx()
    // resolves here too.
    public function AdminHealthrx($data = null)
    {
        require_once __DIR__ . '/entity/admin_healthrx_entity.php';
        if ($data === null) {
            if ($this->_admin_healthrx === null) {
                $this->_admin_healthrx = new AdminHealthrxEntity($this, null);
            }
            return $this->_admin_healthrx;
        }
        return new AdminHealthrxEntity($this, $data);
    }


    private $_admin_insight = null;

    // Canonical facade: $client->AdminInsight()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->admin_insight()
    // resolves here too.
    public function AdminInsight($data = null)
    {
        require_once __DIR__ . '/entity/admin_insight_entity.php';
        if ($data === null) {
            if ($this->_admin_insight === null) {
                $this->_admin_insight = new AdminInsightEntity($this, null);
            }
            return $this->_admin_insight;
        }
        return new AdminInsightEntity($this, $data);
    }


    private $_admin_landing_task = null;

    // Canonical facade: $client->AdminLandingTask()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->admin_landing_task()
    // resolves here too.
    public function AdminLandingTask($data = null)
    {
        require_once __DIR__ . '/entity/admin_landing_task_entity.php';
        if ($data === null) {
            if ($this->_admin_landing_task === null) {
                $this->_admin_landing_task = new AdminLandingTaskEntity($this, null);
            }
            return $this->_admin_landing_task;
        }
        return new AdminLandingTaskEntity($this, $data);
    }


    private $_admin_metrics_summary = null;

    // Canonical facade: $client->AdminMetricsSummary()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->admin_metrics_summary()
    // resolves here too.
    public function AdminMetricsSummary($data = null)
    {
        require_once __DIR__ . '/entity/admin_metrics_summary_entity.php';
        if ($data === null) {
            if ($this->_admin_metrics_summary === null) {
                $this->_admin_metrics_summary = new AdminMetricsSummaryEntity($this, null);
            }
            return $this->_admin_metrics_summary;
        }
        return new AdminMetricsSummaryEntity($this, $data);
    }


    private $_admin_post = null;

    // Canonical facade: $client->AdminPost()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->admin_post()
    // resolves here too.
    public function AdminPost($data = null)
    {
        require_once __DIR__ . '/entity/admin_post_entity.php';
        if ($data === null) {
            if ($this->_admin_post === null) {
                $this->_admin_post = new AdminPostEntity($this, null);
            }
            return $this->_admin_post;
        }
        return new AdminPostEntity($this, $data);
    }


    private $_admin_recent_signup = null;

    // Canonical facade: $client->AdminRecentSignup()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->admin_recent_signup()
    // resolves here too.
    public function AdminRecentSignup($data = null)
    {
        require_once __DIR__ . '/entity/admin_recent_signup_entity.php';
        if ($data === null) {
            if ($this->_admin_recent_signup === null) {
                $this->_admin_recent_signup = new AdminRecentSignupEntity($this, null);
            }
            return $this->_admin_recent_signup;
        }
        return new AdminRecentSignupEntity($this, $data);
    }


    private $_admin_slideshow_diag = null;

    // Canonical facade: $client->AdminSlideshowDiag()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->admin_slideshow_diag()
    // resolves here too.
    public function AdminSlideshowDiag($data = null)
    {
        require_once __DIR__ . '/entity/admin_slideshow_diag_entity.php';
        if ($data === null) {
            if ($this->_admin_slideshow_diag === null) {
                $this->_admin_slideshow_diag = new AdminSlideshowDiagEntity($this, null);
            }
            return $this->_admin_slideshow_diag;
        }
        return new AdminSlideshowDiagEntity($this, $data);
    }


    private $_admin_slideshow_import = null;

    // Canonical facade: $client->AdminSlideshowImport()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->admin_slideshow_import()
    // resolves here too.
    public function AdminSlideshowImport($data = null)
    {
        require_once __DIR__ . '/entity/admin_slideshow_import_entity.php';
        if ($data === null) {
            if ($this->_admin_slideshow_import === null) {
                $this->_admin_slideshow_import = new AdminSlideshowImportEntity($this, null);
            }
            return $this->_admin_slideshow_import;
        }
        return new AdminSlideshowImportEntity($this, $data);
    }


    private $_admin_user_view = null;

    // Canonical facade: $client->AdminUserView()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->admin_user_view()
    // resolves here too.
    public function AdminUserView($data = null)
    {
        require_once __DIR__ . '/entity/admin_user_view_entity.php';
        if ($data === null) {
            if ($this->_admin_user_view === null) {
                $this->_admin_user_view = new AdminUserViewEntity($this, null);
            }
            return $this->_admin_user_view;
        }
        return new AdminUserViewEntity($this, $data);
    }


    private $_admin_users_table_item = null;

    // Canonical facade: $client->AdminUsersTableItem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->admin_users_table_item()
    // resolves here too.
    public function AdminUsersTableItem($data = null)
    {
        require_once __DIR__ . '/entity/admin_users_table_item_entity.php';
        if ($data === null) {
            if ($this->_admin_users_table_item === null) {
                $this->_admin_users_table_item = new AdminUsersTableItemEntity($this, null);
            }
            return $this->_admin_users_table_item;
        }
        return new AdminUsersTableItemEntity($this, $data);
    }


    private $_admin_video_remixer = null;

    // Canonical facade: $client->AdminVideoRemixer()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->admin_video_remixer()
    // resolves here too.
    public function AdminVideoRemixer($data = null)
    {
        require_once __DIR__ . '/entity/admin_video_remixer_entity.php';
        if ($data === null) {
            if ($this->_admin_video_remixer === null) {
                $this->_admin_video_remixer = new AdminVideoRemixerEntity($this, null);
            }
            return $this->_admin_video_remixer;
        }
        return new AdminVideoRemixerEntity($this, $data);
    }


    private $_advance_step = null;

    // Canonical facade: $client->AdvanceStep()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->advance_step()
    // resolves here too.
    public function AdvanceStep($data = null)
    {
        require_once __DIR__ . '/entity/advance_step_entity.php';
        if ($data === null) {
            if ($this->_advance_step === null) {
                $this->_advance_step = new AdvanceStepEntity($this, null);
            }
            return $this->_advance_step;
        }
        return new AdvanceStepEntity($this, $data);
    }


    private $_agent = null;

    // Canonical facade: $client->Agent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent()
    // resolves here too.
    public function Agent($data = null)
    {
        require_once __DIR__ . '/entity/agent_entity.php';
        if ($data === null) {
            if ($this->_agent === null) {
                $this->_agent = new AgentEntity($this, null);
            }
            return $this->_agent;
        }
        return new AgentEntity($this, $data);
    }


    private $_agent_access_customers_health = null;

    // Canonical facade: $client->AgentAccessCustomersHealth()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_access_customers_health()
    // resolves here too.
    public function AgentAccessCustomersHealth($data = null)
    {
        require_once __DIR__ . '/entity/agent_access_customers_health_entity.php';
        if ($data === null) {
            if ($this->_agent_access_customers_health === null) {
                $this->_agent_access_customers_health = new AgentAccessCustomersHealthEntity($this, null);
            }
            return $this->_agent_access_customers_health;
        }
        return new AgentAccessCustomersHealthEntity($this, $data);
    }


    private $_agent_access_overview = null;

    // Canonical facade: $client->AgentAccessOverview()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_access_overview()
    // resolves here too.
    public function AgentAccessOverview($data = null)
    {
        require_once __DIR__ . '/entity/agent_access_overview_entity.php';
        if ($data === null) {
            if ($this->_agent_access_overview === null) {
                $this->_agent_access_overview = new AgentAccessOverviewEntity($this, null);
            }
            return $this->_agent_access_overview;
        }
        return new AgentAccessOverviewEntity($this, $data);
    }


    private $_agent_access_phil_hourly_notification = null;

    // Canonical facade: $client->AgentAccessPhilHourlyNotification()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_access_phil_hourly_notification()
    // resolves here too.
    public function AgentAccessPhilHourlyNotification($data = null)
    {
        require_once __DIR__ . '/entity/agent_access_phil_hourly_notification_entity.php';
        if ($data === null) {
            if ($this->_agent_access_phil_hourly_notification === null) {
                $this->_agent_access_phil_hourly_notification = new AgentAccessPhilHourlyNotificationEntity($this, null);
            }
            return $this->_agent_access_phil_hourly_notification;
        }
        return new AgentAccessPhilHourlyNotificationEntity($this, $data);
    }


    private $_agent_access_phil_stats_refresh = null;

    // Canonical facade: $client->AgentAccessPhilStatsRefresh()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_access_phil_stats_refresh()
    // resolves here too.
    public function AgentAccessPhilStatsRefresh($data = null)
    {
        require_once __DIR__ . '/entity/agent_access_phil_stats_refresh_entity.php';
        if ($data === null) {
            if ($this->_agent_access_phil_stats_refresh === null) {
                $this->_agent_access_phil_stats_refresh = new AgentAccessPhilStatsRefreshEntity($this, null);
            }
            return $this->_agent_access_phil_stats_refresh;
        }
        return new AgentAccessPhilStatsRefreshEntity($this, $data);
    }


    private $_agent_access_phil_video = null;

    // Canonical facade: $client->AgentAccessPhilVideo()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_access_phil_video()
    // resolves here too.
    public function AgentAccessPhilVideo($data = null)
    {
        require_once __DIR__ . '/entity/agent_access_phil_video_entity.php';
        if ($data === null) {
            if ($this->_agent_access_phil_video === null) {
                $this->_agent_access_phil_video = new AgentAccessPhilVideoEntity($this, null);
            }
            return $this->_agent_access_phil_video;
        }
        return new AgentAccessPhilVideoEntity($this, $data);
    }


    private $_agent_access_user_agent = null;

    // Canonical facade: $client->AgentAccessUserAgent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_access_user_agent()
    // resolves here too.
    public function AgentAccessUserAgent($data = null)
    {
        require_once __DIR__ . '/entity/agent_access_user_agent_entity.php';
        if ($data === null) {
            if ($this->_agent_access_user_agent === null) {
                $this->_agent_access_user_agent = new AgentAccessUserAgentEntity($this, null);
            }
            return $this->_agent_access_user_agent;
        }
        return new AgentAccessUserAgentEntity($this, $data);
    }


    private $_agent_access_user_phone_farm = null;

    // Canonical facade: $client->AgentAccessUserPhoneFarm()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_access_user_phone_farm()
    // resolves here too.
    public function AgentAccessUserPhoneFarm($data = null)
    {
        require_once __DIR__ . '/entity/agent_access_user_phone_farm_entity.php';
        if ($data === null) {
            if ($this->_agent_access_user_phone_farm === null) {
                $this->_agent_access_user_phone_farm = new AgentAccessUserPhoneFarmEntity($this, null);
            }
            return $this->_agent_access_user_phone_farm;
        }
        return new AgentAccessUserPhoneFarmEntity($this, $data);
    }


    private $_agent_access_user_post = null;

    // Canonical facade: $client->AgentAccessUserPost()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_access_user_post()
    // resolves here too.
    public function AgentAccessUserPost($data = null)
    {
        require_once __DIR__ . '/entity/agent_access_user_post_entity.php';
        if ($data === null) {
            if ($this->_agent_access_user_post === null) {
                $this->_agent_access_user_post = new AgentAccessUserPostEntity($this, null);
            }
            return $this->_agent_access_user_post;
        }
        return new AgentAccessUserPostEntity($this, $data);
    }


    private $_agent_access_user_summary = null;

    // Canonical facade: $client->AgentAccessUserSummary()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_access_user_summary()
    // resolves here too.
    public function AgentAccessUserSummary($data = null)
    {
        require_once __DIR__ . '/entity/agent_access_user_summary_entity.php';
        if ($data === null) {
            if ($this->_agent_access_user_summary === null) {
                $this->_agent_access_user_summary = new AgentAccessUserSummaryEntity($this, null);
            }
            return $this->_agent_access_user_summary;
        }
        return new AgentAccessUserSummaryEntity($this, $data);
    }


    private $_agent_access_user_video = null;

    // Canonical facade: $client->AgentAccessUserVideo()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_access_user_video()
    // resolves here too.
    public function AgentAccessUserVideo($data = null)
    {
        require_once __DIR__ . '/entity/agent_access_user_video_entity.php';
        if ($data === null) {
            if ($this->_agent_access_user_video === null) {
                $this->_agent_access_user_video = new AgentAccessUserVideoEntity($this, null);
            }
            return $this->_agent_access_user_video;
        }
        return new AgentAccessUserVideoEntity($this, $data);
    }


    private $_agent_access_user_winning_ad = null;

    // Canonical facade: $client->AgentAccessUserWinningAd()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_access_user_winning_ad()
    // resolves here too.
    public function AgentAccessUserWinningAd($data = null)
    {
        require_once __DIR__ . '/entity/agent_access_user_winning_ad_entity.php';
        if ($data === null) {
            if ($this->_agent_access_user_winning_ad === null) {
                $this->_agent_access_user_winning_ad = new AgentAccessUserWinningAdEntity($this, null);
            }
            return $this->_agent_access_user_winning_ad;
        }
        return new AgentAccessUserWinningAdEntity($this, $data);
    }


    private $_agent_access_winning_ads_summary = null;

    // Canonical facade: $client->AgentAccessWinningAdsSummary()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_access_winning_ads_summary()
    // resolves here too.
    public function AgentAccessWinningAdsSummary($data = null)
    {
        require_once __DIR__ . '/entity/agent_access_winning_ads_summary_entity.php';
        if ($data === null) {
            if ($this->_agent_access_winning_ads_summary === null) {
                $this->_agent_access_winning_ads_summary = new AgentAccessWinningAdsSummaryEntity($this, null);
            }
            return $this->_agent_access_winning_ads_summary;
        }
        return new AgentAccessWinningAdsSummaryEntity($this, $data);
    }


    private $_agent_detail = null;

    // Canonical facade: $client->AgentDetail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_detail()
    // resolves here too.
    public function AgentDetail($data = null)
    {
        require_once __DIR__ . '/entity/agent_detail_entity.php';
        if ($data === null) {
            if ($this->_agent_detail === null) {
                $this->_agent_detail = new AgentDetailEntity($this, null);
            }
            return $this->_agent_detail;
        }
        return new AgentDetailEntity($this, $data);
    }


    private $_agent_health = null;

    // Canonical facade: $client->AgentHealth()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_health()
    // resolves here too.
    public function AgentHealth($data = null)
    {
        require_once __DIR__ . '/entity/agent_health_entity.php';
        if ($data === null) {
            if ($this->_agent_health === null) {
                $this->_agent_health = new AgentHealthEntity($this, null);
            }
            return $this->_agent_health;
        }
        return new AgentHealthEntity($this, $data);
    }


    private $_agent_health_customer_option = null;

    // Canonical facade: $client->AgentHealthCustomerOption()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_health_customer_option()
    // resolves here too.
    public function AgentHealthCustomerOption($data = null)
    {
        require_once __DIR__ . '/entity/agent_health_customer_option_entity.php';
        if ($data === null) {
            if ($this->_agent_health_customer_option === null) {
                $this->_agent_health_customer_option = new AgentHealthCustomerOptionEntity($this, null);
            }
            return $this->_agent_health_customer_option;
        }
        return new AgentHealthCustomerOptionEntity($this, $data);
    }


    private $_agent_health_detail = null;

    // Canonical facade: $client->AgentHealthDetail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_health_detail()
    // resolves here too.
    public function AgentHealthDetail($data = null)
    {
        require_once __DIR__ . '/entity/agent_health_detail_entity.php';
        if ($data === null) {
            if ($this->_agent_health_detail === null) {
                $this->_agent_health_detail = new AgentHealthDetailEntity($this, null);
            }
            return $this->_agent_health_detail;
        }
        return new AgentHealthDetailEntity($this, $data);
    }


    private $_agent_post = null;

    // Canonical facade: $client->AgentPost()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_post()
    // resolves here too.
    public function AgentPost($data = null)
    {
        require_once __DIR__ . '/entity/agent_post_entity.php';
        if ($data === null) {
            if ($this->_agent_post === null) {
                $this->_agent_post = new AgentPostEntity($this, null);
            }
            return $this->_agent_post;
        }
        return new AgentPostEntity($this, $data);
    }


    private $_agent_stat = null;

    // Canonical facade: $client->AgentStat()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_stat()
    // resolves here too.
    public function AgentStat($data = null)
    {
        require_once __DIR__ . '/entity/agent_stat_entity.php';
        if ($data === null) {
            if ($this->_agent_stat === null) {
                $this->_agent_stat = new AgentStatEntity($this, null);
            }
            return $this->_agent_stat;
        }
        return new AgentStatEntity($this, $data);
    }


    private $_agent_summary = null;

    // Canonical facade: $client->AgentSummary()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_summary()
    // resolves here too.
    public function AgentSummary($data = null)
    {
        require_once __DIR__ . '/entity/agent_summary_entity.php';
        if ($data === null) {
            if ($this->_agent_summary === null) {
                $this->_agent_summary = new AgentSummaryEntity($this, null);
            }
            return $this->_agent_summary;
        }
        return new AgentSummaryEntity($this, $data);
    }


    private $_agents_summary = null;

    // Canonical facade: $client->AgentsSummary()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agents_summary()
    // resolves here too.
    public function AgentsSummary($data = null)
    {
        require_once __DIR__ . '/entity/agents_summary_entity.php';
        if ($data === null) {
            if ($this->_agents_summary === null) {
                $this->_agents_summary = new AgentsSummaryEntity($this, null);
            }
            return $this->_agents_summary;
        }
        return new AgentsSummaryEntity($this, $data);
    }


    private $_analysis_status = null;

    // Canonical facade: $client->AnalysisStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->analysis_status()
    // resolves here too.
    public function AnalysisStatus($data = null)
    {
        require_once __DIR__ . '/entity/analysis_status_entity.php';
        if ($data === null) {
            if ($this->_analysis_status === null) {
                $this->_analysis_status = new AnalysisStatusEntity($this, null);
            }
            return $this->_analysis_status;
        }
        return new AnalysisStatusEntity($this, $data);
    }


    private $_analytics_post = null;

    // Canonical facade: $client->AnalyticsPost()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->analytics_post()
    // resolves here too.
    public function AnalyticsPost($data = null)
    {
        require_once __DIR__ . '/entity/analytics_post_entity.php';
        if ($data === null) {
            if ($this->_analytics_post === null) {
                $this->_analytics_post = new AnalyticsPostEntity($this, null);
            }
            return $this->_analytics_post;
        }
        return new AnalyticsPostEntity($this, $data);
    }


    private $_analyze_product = null;

    // Canonical facade: $client->AnalyzeProduct()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->analyze_product()
    // resolves here too.
    public function AnalyzeProduct($data = null)
    {
        require_once __DIR__ . '/entity/analyze_product_entity.php';
        if ($data === null) {
            if ($this->_analyze_product === null) {
                $this->_analyze_product = new AnalyzeProductEntity($this, null);
            }
            return $this->_analyze_product;
        }
        return new AnalyzeProductEntity($this, $data);
    }


    private $_assign_agent = null;

    // Canonical facade: $client->AssignAgent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->assign_agent()
    // resolves here too.
    public function AssignAgent($data = null)
    {
        require_once __DIR__ . '/entity/assign_agent_entity.php';
        if ($data === null) {
            if ($this->_assign_agent === null) {
                $this->_assign_agent = new AssignAgentEntity($this, null);
            }
            return $this->_assign_agent;
        }
        return new AssignAgentEntity($this, $data);
    }


    private $_auth = null;

    // Canonical facade: $client->Auth()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->auth()
    // resolves here too.
    public function Auth($data = null)
    {
        require_once __DIR__ . '/entity/auth_entity.php';
        if ($data === null) {
            if ($this->_auth === null) {
                $this->_auth = new AuthEntity($this, null);
            }
            return $this->_auth;
        }
        return new AuthEntity($this, $data);
    }


    private $_auto_schedule_setting = null;

    // Canonical facade: $client->AutoScheduleSetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->auto_schedule_setting()
    // resolves here too.
    public function AutoScheduleSetting($data = null)
    {
        require_once __DIR__ . '/entity/auto_schedule_setting_entity.php';
        if ($data === null) {
            if ($this->_auto_schedule_setting === null) {
                $this->_auto_schedule_setting = new AutoScheduleSettingEntity($this, null);
            }
            return $this->_auto_schedule_setting;
        }
        return new AutoScheduleSettingEntity($this, $data);
    }


    private $_bulk_tik_tok_stats_update = null;

    // Canonical facade: $client->BulkTikTokStatsUpdate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bulk_tik_tok_stats_update()
    // resolves here too.
    public function BulkTikTokStatsUpdate($data = null)
    {
        require_once __DIR__ . '/entity/bulk_tik_tok_stats_update_entity.php';
        if ($data === null) {
            if ($this->_bulk_tik_tok_stats_update === null) {
                $this->_bulk_tik_tok_stats_update = new BulkTikTokStatsUpdateEntity($this, null);
            }
            return $this->_bulk_tik_tok_stats_update;
        }
        return new BulkTikTokStatsUpdateEntity($this, $data);
    }


    private $_carousel = null;

    // Canonical facade: $client->Carousel()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->carousel()
    // resolves here too.
    public function Carousel($data = null)
    {
        require_once __DIR__ . '/entity/carousel_entity.php';
        if ($data === null) {
            if ($this->_carousel === null) {
                $this->_carousel = new CarouselEntity($this, null);
            }
            return $this->_carousel;
        }
        return new CarouselEntity($this, $data);
    }


    private $_carousel_agent_detail = null;

    // Canonical facade: $client->CarouselAgentDetail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->carousel_agent_detail()
    // resolves here too.
    public function CarouselAgentDetail($data = null)
    {
        require_once __DIR__ . '/entity/carousel_agent_detail_entity.php';
        if ($data === null) {
            if ($this->_carousel_agent_detail === null) {
                $this->_carousel_agent_detail = new CarouselAgentDetailEntity($this, null);
            }
            return $this->_carousel_agent_detail;
        }
        return new CarouselAgentDetailEntity($this, $data);
    }


    private $_carousel_status = null;

    // Canonical facade: $client->CarouselStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->carousel_status()
    // resolves here too.
    public function CarouselStatus($data = null)
    {
        require_once __DIR__ . '/entity/carousel_status_entity.php';
        if ($data === null) {
            if ($this->_carousel_status === null) {
                $this->_carousel_status = new CarouselStatusEntity($this, null);
            }
            return $this->_carousel_status;
        }
        return new CarouselStatusEntity($this, $data);
    }


    private $_chat = null;

    // Canonical facade: $client->Chat()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->chat()
    // resolves here too.
    public function Chat($data = null)
    {
        require_once __DIR__ . '/entity/chat_entity.php';
        if ($data === null) {
            if ($this->_chat === null) {
                $this->_chat = new ChatEntity($this, null);
            }
            return $this->_chat;
        }
        return new ChatEntity($this, $data);
    }


    private $_chat_history = null;

    // Canonical facade: $client->ChatHistory()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->chat_history()
    // resolves here too.
    public function ChatHistory($data = null)
    {
        require_once __DIR__ . '/entity/chat_history_entity.php';
        if ($data === null) {
            if ($this->_chat_history === null) {
                $this->_chat_history = new ChatHistoryEntity($this, null);
            }
            return $this->_chat_history;
        }
        return new ChatHistoryEntity($this, $data);
    }


    private $_chat_session = null;

    // Canonical facade: $client->ChatSession()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->chat_session()
    // resolves here too.
    public function ChatSession($data = null)
    {
        require_once __DIR__ . '/entity/chat_session_entity.php';
        if ($data === null) {
            if ($this->_chat_session === null) {
                $this->_chat_session = new ChatSessionEntity($this, null);
            }
            return $this->_chat_session;
        }
        return new ChatSessionEntity($this, $data);
    }


    private $_comment = null;

    // Canonical facade: $client->Comment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->comment()
    // resolves here too.
    public function Comment($data = null)
    {
        require_once __DIR__ . '/entity/comment_entity.php';
        if ($data === null) {
            if ($this->_comment === null) {
                $this->_comment = new CommentEntity($this, null);
            }
            return $this->_comment;
        }
        return new CommentEntity($this, $data);
    }


    private $_comment_campaign = null;

    // Canonical facade: $client->CommentCampaign()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->comment_campaign()
    // resolves here too.
    public function CommentCampaign($data = null)
    {
        require_once __DIR__ . '/entity/comment_campaign_entity.php';
        if ($data === null) {
            if ($this->_comment_campaign === null) {
                $this->_comment_campaign = new CommentCampaignEntity($this, null);
            }
            return $this->_comment_campaign;
        }
        return new CommentCampaignEntity($this, $data);
    }


    private $_complete_chat_checkout = null;

    // Canonical facade: $client->CompleteChatCheckout()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->complete_chat_checkout()
    // resolves here too.
    public function CompleteChatCheckout($data = null)
    {
        require_once __DIR__ . '/entity/complete_chat_checkout_entity.php';
        if ($data === null) {
            if ($this->_complete_chat_checkout === null) {
                $this->_complete_chat_checkout = new CompleteChatCheckoutEntity($this, null);
            }
            return $this->_complete_chat_checkout;
        }
        return new CompleteChatCheckoutEntity($this, $data);
    }


    private $_create_blackout_sora2_video = null;

    // Canonical facade: $client->CreateBlackoutSora2Video()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->create_blackout_sora2_video()
    // resolves here too.
    public function CreateBlackoutSora2Video($data = null)
    {
        require_once __DIR__ . '/entity/create_blackout_sora2_video_entity.php';
        if ($data === null) {
            if ($this->_create_blackout_sora2_video === null) {
                $this->_create_blackout_sora2_video = new CreateBlackoutSora2VideoEntity($this, null);
            }
            return $this->_create_blackout_sora2_video;
        }
        return new CreateBlackoutSora2VideoEntity($this, $data);
    }


    private $_create_carousel = null;

    // Canonical facade: $client->CreateCarousel()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->create_carousel()
    // resolves here too.
    public function CreateCarousel($data = null)
    {
        require_once __DIR__ . '/entity/create_carousel_entity.php';
        if ($data === null) {
            if ($this->_create_carousel === null) {
                $this->_create_carousel = new CreateCarouselEntity($this, null);
            }
            return $this->_create_carousel;
        }
        return new CreateCarouselEntity($this, $data);
    }


    private $_create_product = null;

    // Canonical facade: $client->CreateProduct()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->create_product()
    // resolves here too.
    public function CreateProduct($data = null)
    {
        require_once __DIR__ . '/entity/create_product_entity.php';
        if ($data === null) {
            if ($this->_create_product === null) {
                $this->_create_product = new CreateProductEntity($this, null);
            }
            return $this->_create_product;
        }
        return new CreateProductEntity($this, $data);
    }


    private $_create_reset_product_v6 = null;

    // Canonical facade: $client->CreateResetProductV6()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->create_reset_product_v6()
    // resolves here too.
    public function CreateResetProductV6($data = null)
    {
        require_once __DIR__ . '/entity/create_reset_product_v6_entity.php';
        if ($data === null) {
            if ($this->_create_reset_product_v6 === null) {
                $this->_create_reset_product_v6 = new CreateResetProductV6Entity($this, null);
            }
            return $this->_create_reset_product_v6;
        }
        return new CreateResetProductV6Entity($this, $data);
    }


    private $_create_sora2_video = null;

    // Canonical facade: $client->CreateSora2Video()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->create_sora2_video()
    // resolves here too.
    public function CreateSora2Video($data = null)
    {
        require_once __DIR__ . '/entity/create_sora2_video_entity.php';
        if ($data === null) {
            if ($this->_create_sora2_video === null) {
                $this->_create_sora2_video = new CreateSora2VideoEntity($this, null);
            }
            return $this->_create_sora2_video;
        }
        return new CreateSora2VideoEntity($this, $data);
    }


    private $_create_variation = null;

    // Canonical facade: $client->CreateVariation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->create_variation()
    // resolves here too.
    public function CreateVariation($data = null)
    {
        require_once __DIR__ . '/entity/create_variation_entity.php';
        if ($data === null) {
            if ($this->_create_variation === null) {
                $this->_create_variation = new CreateVariationEntity($this, null);
            }
            return $this->_create_variation;
        }
        return new CreateVariationEntity($this, $data);
    }


    private $_customer = null;

    // Canonical facade: $client->Customer()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->customer()
    // resolves here too.
    public function Customer($data = null)
    {
        require_once __DIR__ . '/entity/customer_entity.php';
        if ($data === null) {
            if ($this->_customer === null) {
                $this->_customer = new CustomerEntity($this, null);
            }
            return $this->_customer;
        }
        return new CustomerEntity($this, $data);
    }


    private $_customer_health = null;

    // Canonical facade: $client->CustomerHealth()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->customer_health()
    // resolves here too.
    public function CustomerHealth($data = null)
    {
        require_once __DIR__ . '/entity/customer_health_entity.php';
        if ($data === null) {
            if ($this->_customer_health === null) {
                $this->_customer_health = new CustomerHealthEntity($this, null);
            }
            return $this->_customer_health;
        }
        return new CustomerHealthEntity($this, $data);
    }


    private $_customer_health_all_customers_item = null;

    // Canonical facade: $client->CustomerHealthAllCustomersItem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->customer_health_all_customers_item()
    // resolves here too.
    public function CustomerHealthAllCustomersItem($data = null)
    {
        require_once __DIR__ . '/entity/customer_health_all_customers_item_entity.php';
        if ($data === null) {
            if ($this->_customer_health_all_customers_item === null) {
                $this->_customer_health_all_customers_item = new CustomerHealthAllCustomersItemEntity($this, null);
            }
            return $this->_customer_health_all_customers_item;
        }
        return new CustomerHealthAllCustomersItemEntity($this, $data);
    }


    private $_customer_health_views_summary = null;

    // Canonical facade: $client->CustomerHealthViewsSummary()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->customer_health_views_summary()
    // resolves here too.
    public function CustomerHealthViewsSummary($data = null)
    {
        require_once __DIR__ . '/entity/customer_health_views_summary_entity.php';
        if ($data === null) {
            if ($this->_customer_health_views_summary === null) {
                $this->_customer_health_views_summary = new CustomerHealthViewsSummaryEntity($this, null);
            }
            return $this->_customer_health_views_summary;
        }
        return new CustomerHealthViewsSummaryEntity($this, $data);
    }


    private $_daily = null;

    // Canonical facade: $client->Daily()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->daily()
    // resolves here too.
    public function Daily($data = null)
    {
        require_once __DIR__ . '/entity/daily_entity.php';
        if ($data === null) {
            if ($this->_daily === null) {
                $this->_daily = new DailyEntity($this, null);
            }
            return $this->_daily;
        }
        return new DailyEntity($this, $data);
    }


    private $_daily_status = null;

    // Canonical facade: $client->DailyStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->daily_status()
    // resolves here too.
    public function DailyStatus($data = null)
    {
        require_once __DIR__ . '/entity/daily_status_entity.php';
        if ($data === null) {
            if ($this->_daily_status === null) {
                $this->_daily_status = new DailyStatusEntity($this, null);
            }
            return $this->_daily_status;
        }
        return new DailyStatusEntity($this, $data);
    }


    private $_dedicated_agents_dashboard = null;

    // Canonical facade: $client->DedicatedAgentsDashboard()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dedicated_agents_dashboard()
    // resolves here too.
    public function DedicatedAgentsDashboard($data = null)
    {
        require_once __DIR__ . '/entity/dedicated_agents_dashboard_entity.php';
        if ($data === null) {
            if ($this->_dedicated_agents_dashboard === null) {
                $this->_dedicated_agents_dashboard = new DedicatedAgentsDashboardEntity($this, null);
            }
            return $this->_dedicated_agents_dashboard;
        }
        return new DedicatedAgentsDashboardEntity($this, $data);
    }


    private $_enterprise_agent = null;

    // Canonical facade: $client->EnterpriseAgent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->enterprise_agent()
    // resolves here too.
    public function EnterpriseAgent($data = null)
    {
        require_once __DIR__ . '/entity/enterprise_agent_entity.php';
        if ($data === null) {
            if ($this->_enterprise_agent === null) {
                $this->_enterprise_agent = new EnterpriseAgentEntity($this, null);
            }
            return $this->_enterprise_agent;
        }
        return new EnterpriseAgentEntity($this, $data);
    }


    private $_enterprise_product = null;

    // Canonical facade: $client->EnterpriseProduct()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->enterprise_product()
    // resolves here too.
    public function EnterpriseProduct($data = null)
    {
        require_once __DIR__ . '/entity/enterprise_product_entity.php';
        if ($data === null) {
            if ($this->_enterprise_product === null) {
                $this->_enterprise_product = new EnterpriseProductEntity($this, null);
            }
            return $this->_enterprise_product;
        }
        return new EnterpriseProductEntity($this, $data);
    }


    private $_exact_availability = null;

    // Canonical facade: $client->ExactAvailability()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->exact_availability()
    // resolves here too.
    public function ExactAvailability($data = null)
    {
        require_once __DIR__ . '/entity/exact_availability_entity.php';
        if ($data === null) {
            if ($this->_exact_availability === null) {
                $this->_exact_availability = new ExactAvailabilityEntity($this, null);
            }
            return $this->_exact_availability;
        }
        return new ExactAvailabilityEntity($this, $data);
    }


    private $_exact_formula = null;

    // Canonical facade: $client->ExactFormula()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->exact_formula()
    // resolves here too.
    public function ExactFormula($data = null)
    {
        require_once __DIR__ . '/entity/exact_formula_entity.php';
        if ($data === null) {
            if ($this->_exact_formula === null) {
                $this->_exact_formula = new ExactFormulaEntity($this, null);
            }
            return $this->_exact_formula;
        }
        return new ExactFormulaEntity($this, $data);
    }


    private $_extract_v2 = null;

    // Canonical facade: $client->ExtractV2()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->extract_v2()
    // resolves here too.
    public function ExtractV2($data = null)
    {
        require_once __DIR__ . '/entity/extract_v2_entity.php';
        if ($data === null) {
            if ($this->_extract_v2 === null) {
                $this->_extract_v2 = new ExtractV2Entity($this, null);
            }
            return $this->_extract_v2;
        }
        return new ExtractV2Entity($this, $data);
    }


    private $_failed_post = null;

    // Canonical facade: $client->FailedPost()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->failed_post()
    // resolves here too.
    public function FailedPost($data = null)
    {
        require_once __DIR__ . '/entity/failed_post_entity.php';
        if ($data === null) {
            if ($this->_failed_post === null) {
                $this->_failed_post = new FailedPostEntity($this, null);
            }
            return $this->_failed_post;
        }
        return new FailedPostEntity($this, $data);
    }


    private $_file = null;

    // Canonical facade: $client->File()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->file()
    // resolves here too.
    public function File($data = null)
    {
        require_once __DIR__ . '/entity/file_entity.php';
        if ($data === null) {
            if ($this->_file === null) {
                $this->_file = new FileEntity($this, null);
            }
            return $this->_file;
        }
        return new FileEntity($this, $data);
    }


    private $_generate_blackout_sora2_prompt = null;

    // Canonical facade: $client->GenerateBlackoutSora2Prompt()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->generate_blackout_sora2_prompt()
    // resolves here too.
    public function GenerateBlackoutSora2Prompt($data = null)
    {
        require_once __DIR__ . '/entity/generate_blackout_sora2_prompt_entity.php';
        if ($data === null) {
            if ($this->_generate_blackout_sora2_prompt === null) {
                $this->_generate_blackout_sora2_prompt = new GenerateBlackoutSora2PromptEntity($this, null);
            }
            return $this->_generate_blackout_sora2_prompt;
        }
        return new GenerateBlackoutSora2PromptEntity($this, $data);
    }


    private $_generate_pomelli_demo = null;

    // Canonical facade: $client->GeneratePomelliDemo()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->generate_pomelli_demo()
    // resolves here too.
    public function GeneratePomelliDemo($data = null)
    {
        require_once __DIR__ . '/entity/generate_pomelli_demo_entity.php';
        if ($data === null) {
            if ($this->_generate_pomelli_demo === null) {
                $this->_generate_pomelli_demo = new GeneratePomelliDemoEntity($this, null);
            }
            return $this->_generate_pomelli_demo;
        }
        return new GeneratePomelliDemoEntity($this, $data);
    }


    private $_generate_prompt = null;

    // Canonical facade: $client->GeneratePrompt()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->generate_prompt()
    // resolves here too.
    public function GeneratePrompt($data = null)
    {
        require_once __DIR__ . '/entity/generate_prompt_entity.php';
        if ($data === null) {
            if ($this->_generate_prompt === null) {
                $this->_generate_prompt = new GeneratePromptEntity($this, null);
            }
            return $this->_generate_prompt;
        }
        return new GeneratePromptEntity($this, $data);
    }


    private $_generate_sora2_prompt = null;

    // Canonical facade: $client->GenerateSora2Prompt()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->generate_sora2_prompt()
    // resolves here too.
    public function GenerateSora2Prompt($data = null)
    {
        require_once __DIR__ . '/entity/generate_sora2_prompt_entity.php';
        if ($data === null) {
            if ($this->_generate_sora2_prompt === null) {
                $this->_generate_sora2_prompt = new GenerateSora2PromptEntity($this, null);
            }
            return $this->_generate_sora2_prompt;
        }
        return new GenerateSora2PromptEntity($this, $data);
    }


    private $_healthrx = null;

    // Canonical facade: $client->Healthrx()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->healthrx()
    // resolves here too.
    public function Healthrx($data = null)
    {
        require_once __DIR__ . '/entity/healthrx_entity.php';
        if ($data === null) {
            if ($this->_healthrx === null) {
                $this->_healthrx = new HealthrxEntity($this, null);
            }
            return $this->_healthrx;
        }
        return new HealthrxEntity($this, $data);
    }


    private $_init_reset_product_v6 = null;

    // Canonical facade: $client->InitResetProductV6()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->init_reset_product_v6()
    // resolves here too.
    public function InitResetProductV6($data = null)
    {
        require_once __DIR__ . '/entity/init_reset_product_v6_entity.php';
        if ($data === null) {
            if ($this->_init_reset_product_v6 === null) {
                $this->_init_reset_product_v6 = new InitResetProductV6Entity($this, null);
            }
            return $this->_init_reset_product_v6;
        }
        return new InitResetProductV6Entity($this, $data);
    }


    private $_iri = null;

    // Canonical facade: $client->Iri()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iri()
    // resolves here too.
    public function Iri($data = null)
    {
        require_once __DIR__ . '/entity/iri_entity.php';
        if ($data === null) {
            if ($this->_iri === null) {
                $this->_iri = new IriEntity($this, null);
            }
            return $this->_iri;
        }
        return new IriEntity($this, $data);
    }


    private $_iris_capability = null;

    // Canonical facade: $client->IrisCapability()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iris_capability()
    // resolves here too.
    public function IrisCapability($data = null)
    {
        require_once __DIR__ . '/entity/iris_capability_entity.php';
        if ($data === null) {
            if ($this->_iris_capability === null) {
                $this->_iris_capability = new IrisCapabilityEntity($this, null);
            }
            return $this->_iris_capability;
        }
        return new IrisCapabilityEntity($this, $data);
    }


    private $_iris_chat = null;

    // Canonical facade: $client->IrisChat()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iris_chat()
    // resolves here too.
    public function IrisChat($data = null)
    {
        require_once __DIR__ . '/entity/iris_chat_entity.php';
        if ($data === null) {
            if ($this->_iris_chat === null) {
                $this->_iris_chat = new IrisChatEntity($this, null);
            }
            return $this->_iris_chat;
        }
        return new IrisChatEntity($this, $data);
    }


    private $_iris_connector = null;

    // Canonical facade: $client->IrisConnector()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iris_connector()
    // resolves here too.
    public function IrisConnector($data = null)
    {
        require_once __DIR__ . '/entity/iris_connector_entity.php';
        if ($data === null) {
            if ($this->_iris_connector === null) {
                $this->_iris_connector = new IrisConnectorEntity($this, null);
            }
            return $this->_iris_connector;
        }
        return new IrisConnectorEntity($this, $data);
    }


    private $_iris_status = null;

    // Canonical facade: $client->IrisStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iris_status()
    // resolves here too.
    public function IrisStatus($data = null)
    {
        require_once __DIR__ . '/entity/iris_status_entity.php';
        if ($data === null) {
            if ($this->_iris_status === null) {
                $this->_iris_status = new IrisStatusEntity($this, null);
            }
            return $this->_iris_status;
        }
        return new IrisStatusEntity($this, $data);
    }


    private $_iris_task = null;

    // Canonical facade: $client->IrisTask()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iris_task()
    // resolves here too.
    public function IrisTask($data = null)
    {
        require_once __DIR__ . '/entity/iris_task_entity.php';
        if ($data === null) {
            if ($this->_iris_task === null) {
                $this->_iris_task = new IrisTaskEntity($this, null);
            }
            return $this->_iris_task;
        }
        return new IrisTaskEntity($this, $data);
    }


    private $_iris_usage = null;

    // Canonical facade: $client->IrisUsage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iris_usage()
    // resolves here too.
    public function IrisUsage($data = null)
    {
        require_once __DIR__ . '/entity/iris_usage_entity.php';
        if ($data === null) {
            if ($this->_iris_usage === null) {
                $this->_iris_usage = new IrisUsageEntity($this, null);
            }
            return $this->_iris_usage;
        }
        return new IrisUsageEntity($this, $data);
    }


    private $_landing = null;

    // Canonical facade: $client->Landing()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->landing()
    // resolves here too.
    public function Landing($data = null)
    {
        require_once __DIR__ . '/entity/landing_entity.php';
        if ($data === null) {
            if ($this->_landing === null) {
                $this->_landing = new LandingEntity($this, null);
            }
            return $this->_landing;
        }
        return new LandingEntity($this, $data);
    }


    private $_landing_stat = null;

    // Canonical facade: $client->LandingStat()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->landing_stat()
    // resolves here too.
    public function LandingStat($data = null)
    {
        require_once __DIR__ . '/entity/landing_stat_entity.php';
        if ($data === null) {
            if ($this->_landing_stat === null) {
                $this->_landing_stat = new LandingStatEntity($this, null);
            }
            return $this->_landing_stat;
        }
        return new LandingStatEntity($this, $data);
    }


    private $_landing_status = null;

    // Canonical facade: $client->LandingStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->landing_status()
    // resolves here too.
    public function LandingStatus($data = null)
    {
        require_once __DIR__ . '/entity/landing_status_entity.php';
        if ($data === null) {
            if ($this->_landing_status === null) {
                $this->_landing_status = new LandingStatusEntity($this, null);
            }
            return $this->_landing_status;
        }
        return new LandingStatusEntity($this, $data);
    }


    private $_link_in_bio = null;

    // Canonical facade: $client->LinkInBio()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->link_in_bio()
    // resolves here too.
    public function LinkInBio($data = null)
    {
        require_once __DIR__ . '/entity/link_in_bio_entity.php';
        if ($data === null) {
            if ($this->_link_in_bio === null) {
                $this->_link_in_bio = new LinkInBioEntity($this, null);
            }
            return $this->_link_in_bio;
        }
        return new LinkInBioEntity($this, $data);
    }


    private $_link_in_dm = null;

    // Canonical facade: $client->LinkInDm()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->link_in_dm()
    // resolves here too.
    public function LinkInDm($data = null)
    {
        require_once __DIR__ . '/entity/link_in_dm_entity.php';
        if ($data === null) {
            if ($this->_link_in_dm === null) {
                $this->_link_in_dm = new LinkInDmEntity($this, null);
            }
            return $this->_link_in_dm;
        }
        return new LinkInDmEntity($this, $data);
    }


    private $_link_in_post = null;

    // Canonical facade: $client->LinkInPost()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->link_in_post()
    // resolves here too.
    public function LinkInPost($data = null)
    {
        require_once __DIR__ . '/entity/link_in_post_entity.php';
        if ($data === null) {
            if ($this->_link_in_post === null) {
                $this->_link_in_post = new LinkInPostEntity($this, null);
            }
            return $this->_link_in_post;
        }
        return new LinkInPostEntity($this, $data);
    }


    private $_link_user = null;

    // Canonical facade: $client->LinkUser()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->link_user()
    // resolves here too.
    public function LinkUser($data = null)
    {
        require_once __DIR__ . '/entity/link_user_entity.php';
        if ($data === null) {
            if ($this->_link_user === null) {
                $this->_link_user = new LinkUserEntity($this, null);
            }
            return $this->_link_user;
        }
        return new LinkUserEntity($this, $data);
    }


    private $_media_asset = null;

    // Canonical facade: $client->MediaAsset()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->media_asset()
    // resolves here too.
    public function MediaAsset($data = null)
    {
        require_once __DIR__ . '/entity/media_asset_entity.php';
        if ($data === null) {
            if ($this->_media_asset === null) {
                $this->_media_asset = new MediaAssetEntity($this, null);
            }
            return $this->_media_asset;
        }
        return new MediaAssetEntity($this, $data);
    }


    private $_men = null;

    // Canonical facade: $client->Men()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->men()
    // resolves here too.
    public function Men($data = null)
    {
        require_once __DIR__ . '/entity/men_entity.php';
        if ($data === null) {
            if ($this->_men === null) {
                $this->_men = new MenEntity($this, null);
            }
            return $this->_men;
        }
        return new MenEntity($this, $data);
    }


    private $_microdrama = null;

    // Canonical facade: $client->Microdrama()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->microdrama()
    // resolves here too.
    public function Microdrama($data = null)
    {
        require_once __DIR__ . '/entity/microdrama_entity.php';
        if ($data === null) {
            if ($this->_microdrama === null) {
                $this->_microdrama = new MicrodramaEntity($this, null);
            }
            return $this->_microdrama;
        }
        return new MicrodramaEntity($this, $data);
    }


    private $_microhub_public = null;

    // Canonical facade: $client->MicrohubPublic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->microhub_public()
    // resolves here too.
    public function MicrohubPublic($data = null)
    {
        require_once __DIR__ . '/entity/microhub_public_entity.php';
        if ($data === null) {
            if ($this->_microhub_public === null) {
                $this->_microhub_public = new MicrohubPublicEntity($this, null);
            }
            return $this->_microhub_public;
        }
        return new MicrohubPublicEntity($this, $data);
    }


    private $_onboarding_status = null;

    // Canonical facade: $client->OnboardingStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->onboarding_status()
    // resolves here too.
    public function OnboardingStatus($data = null)
    {
        require_once __DIR__ . '/entity/onboarding_status_entity.php';
        if ($data === null) {
            if ($this->_onboarding_status === null) {
                $this->_onboarding_status = new OnboardingStatusEntity($this, null);
            }
            return $this->_onboarding_status;
        }
        return new OnboardingStatusEntity($this, $data);
    }


    private $_onboarding_v6 = null;

    // Canonical facade: $client->OnboardingV6()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->onboarding_v6()
    // resolves here too.
    public function OnboardingV6($data = null)
    {
        require_once __DIR__ . '/entity/onboarding_v6_entity.php';
        if ($data === null) {
            if ($this->_onboarding_v6 === null) {
                $this->_onboarding_v6 = new OnboardingV6Entity($this, null);
            }
            return $this->_onboarding_v6;
        }
        return new OnboardingV6Entity($this, $data);
    }


    private $_paid_user = null;

    // Canonical facade: $client->PaidUser()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->paid_user()
    // resolves here too.
    public function PaidUser($data = null)
    {
        require_once __DIR__ . '/entity/paid_user_entity.php';
        if ($data === null) {
            if ($this->_paid_user === null) {
                $this->_paid_user = new PaidUserEntity($this, null);
            }
            return $this->_paid_user;
        }
        return new PaidUserEntity($this, $data);
    }


    private $_pexel = null;

    // Canonical facade: $client->Pexel()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->pexel()
    // resolves here too.
    public function Pexel($data = null)
    {
        require_once __DIR__ . '/entity/pexel_entity.php';
        if ($data === null) {
            if ($this->_pexel === null) {
                $this->_pexel = new PexelEntity($this, null);
            }
            return $this->_pexel;
        }
        return new PexelEntity($this, $data);
    }


    private $_phone_admin_available_agent_source = null;

    // Canonical facade: $client->PhoneAdminAvailableAgentSource()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->phone_admin_available_agent_source()
    // resolves here too.
    public function PhoneAdminAvailableAgentSource($data = null)
    {
        require_once __DIR__ . '/entity/phone_admin_available_agent_source_entity.php';
        if ($data === null) {
            if ($this->_phone_admin_available_agent_source === null) {
                $this->_phone_admin_available_agent_source = new PhoneAdminAvailableAgentSourceEntity($this, null);
            }
            return $this->_phone_admin_available_agent_source;
        }
        return new PhoneAdminAvailableAgentSourceEntity($this, $data);
    }


    private $_product = null;

    // Canonical facade: $client->Product()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->product()
    // resolves here too.
    public function Product($data = null)
    {
        require_once __DIR__ . '/entity/product_entity.php';
        if ($data === null) {
            if ($this->_product === null) {
                $this->_product = new ProductEntity($this, null);
            }
            return $this->_product;
        }
        return new ProductEntity($this, $data);
    }


    private $_product_dashboard = null;

    // Canonical facade: $client->ProductDashboard()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->product_dashboard()
    // resolves here too.
    public function ProductDashboard($data = null)
    {
        require_once __DIR__ . '/entity/product_dashboard_entity.php';
        if ($data === null) {
            if ($this->_product_dashboard === null) {
                $this->_product_dashboard = new ProductDashboardEntity($this, null);
            }
            return $this->_product_dashboard;
        }
        return new ProductDashboardEntity($this, $data);
    }


    private $_product_dashboard_view = null;

    // Canonical facade: $client->ProductDashboardView()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->product_dashboard_view()
    // resolves here too.
    public function ProductDashboardView($data = null)
    {
        require_once __DIR__ . '/entity/product_dashboard_view_entity.php';
        if ($data === null) {
            if ($this->_product_dashboard_view === null) {
                $this->_product_dashboard_view = new ProductDashboardViewEntity($this, null);
            }
            return $this->_product_dashboard_view;
        }
        return new ProductDashboardViewEntity($this, $data);
    }


    private $_product_demo = null;

    // Canonical facade: $client->ProductDemo()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->product_demo()
    // resolves here too.
    public function ProductDemo($data = null)
    {
        require_once __DIR__ . '/entity/product_demo_entity.php';
        if ($data === null) {
            if ($this->_product_demo === null) {
                $this->_product_demo = new ProductDemoEntity($this, null);
            }
            return $this->_product_demo;
        }
        return new ProductDemoEntity($this, $data);
    }


    private $_product_landing = null;

    // Canonical facade: $client->ProductLanding()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->product_landing()
    // resolves here too.
    public function ProductLanding($data = null)
    {
        require_once __DIR__ . '/entity/product_landing_entity.php';
        if ($data === null) {
            if ($this->_product_landing === null) {
                $this->_product_landing = new ProductLandingEntity($this, null);
            }
            return $this->_product_landing;
        }
        return new ProductLandingEntity($this, $data);
    }


    private $_public_resume_status = null;

    // Canonical facade: $client->PublicResumeStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->public_resume_status()
    // resolves here too.
    public function PublicResumeStatus($data = null)
    {
        require_once __DIR__ . '/entity/public_resume_status_entity.php';
        if ($data === null) {
            if ($this->_public_resume_status === null) {
                $this->_public_resume_status = new PublicResumeStatusEntity($this, null);
            }
            return $this->_public_resume_status;
        }
        return new PublicResumeStatusEntity($this, $data);
    }


    private $_re_roll_video = null;

    // Canonical facade: $client->ReRollVideo()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->re_roll_video()
    // resolves here too.
    public function ReRollVideo($data = null)
    {
        require_once __DIR__ . '/entity/re_roll_video_entity.php';
        if ($data === null) {
            if ($this->_re_roll_video === null) {
                $this->_re_roll_video = new ReRollVideoEntity($this, null);
            }
            return $this->_re_roll_video;
        }
        return new ReRollVideoEntity($this, $data);
    }


    private $_read_root_get = null;

    // Canonical facade: $client->ReadRootGet()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->read_root_get()
    // resolves here too.
    public function ReadRootGet($data = null)
    {
        require_once __DIR__ . '/entity/read_root_get_entity.php';
        if ($data === null) {
            if ($this->_read_root_get === null) {
                $this->_read_root_get = new ReadRootGetEntity($this, null);
            }
            return $this->_read_root_get;
        }
        return new ReadRootGetEntity($this, $data);
    }


    private $_record_demo_booked = null;

    // Canonical facade: $client->RecordDemoBooked()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->record_demo_booked()
    // resolves here too.
    public function RecordDemoBooked($data = null)
    {
        require_once __DIR__ . '/entity/record_demo_booked_entity.php';
        if ($data === null) {
            if ($this->_record_demo_booked === null) {
                $this->_record_demo_booked = new RecordDemoBookedEntity($this, null);
            }
            return $this->_record_demo_booked;
        }
        return new RecordDemoBookedEntity($this, $data);
    }


    private $_refresh_stat = null;

    // Canonical facade: $client->RefreshStat()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->refresh_stat()
    // resolves here too.
    public function RefreshStat($data = null)
    {
        require_once __DIR__ . '/entity/refresh_stat_entity.php';
        if ($data === null) {
            if ($this->_refresh_stat === null) {
                $this->_refresh_stat = new RefreshStatEntity($this, null);
            }
            return $this->_refresh_stat;
        }
        return new RefreshStatEntity($this, $data);
    }


    private $_remixer_clipper = null;

    // Canonical facade: $client->RemixerClipper()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->remixer_clipper()
    // resolves here too.
    public function RemixerClipper($data = null)
    {
        require_once __DIR__ . '/entity/remixer_clipper_entity.php';
        if ($data === null) {
            if ($this->_remixer_clipper === null) {
                $this->_remixer_clipper = new RemixerClipperEntity($this, null);
            }
            return $this->_remixer_clipper;
        }
        return new RemixerClipperEntity($this, $data);
    }


    private $_reset_product = null;

    // Canonical facade: $client->ResetProduct()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->reset_product()
    // resolves here too.
    public function ResetProduct($data = null)
    {
        require_once __DIR__ . '/entity/reset_product_entity.php';
        if ($data === null) {
            if ($this->_reset_product === null) {
                $this->_reset_product = new ResetProductEntity($this, null);
            }
            return $this->_reset_product;
        }
        return new ResetProductEntity($this, $data);
    }


    private $_retry_website_scrape = null;

    // Canonical facade: $client->RetryWebsiteScrape()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->retry_website_scrape()
    // resolves here too.
    public function RetryWebsiteScrape($data = null)
    {
        require_once __DIR__ . '/entity/retry_website_scrape_entity.php';
        if ($data === null) {
            if ($this->_retry_website_scrape === null) {
                $this->_retry_website_scrape = new RetryWebsiteScrapeEntity($this, null);
            }
            return $this->_retry_website_scrape;
        }
        return new RetryWebsiteScrapeEntity($this, $data);
    }


    private $_save_survey = null;

    // Canonical facade: $client->SaveSurvey()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->save_survey()
    // resolves here too.
    public function SaveSurvey($data = null)
    {
        require_once __DIR__ . '/entity/save_survey_entity.php';
        if ($data === null) {
            if ($this->_save_survey === null) {
                $this->_save_survey = new SaveSurveyEntity($this, null);
            }
            return $this->_save_survey;
        }
        return new SaveSurveyEntity($this, $data);
    }


    private $_scan_social = null;

    // Canonical facade: $client->ScanSocial()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->scan_social()
    // resolves here too.
    public function ScanSocial($data = null)
    {
        require_once __DIR__ . '/entity/scan_social_entity.php';
        if ($data === null) {
            if ($this->_scan_social === null) {
                $this->_scan_social = new ScanSocialEntity($this, null);
            }
            return $this->_scan_social;
        }
        return new ScanSocialEntity($this, $data);
    }


    private $_scan_socials_public = null;

    // Canonical facade: $client->ScanSocialsPublic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->scan_socials_public()
    // resolves here too.
    public function ScanSocialsPublic($data = null)
    {
        require_once __DIR__ . '/entity/scan_socials_public_entity.php';
        if ($data === null) {
            if ($this->_scan_socials_public === null) {
                $this->_scan_socials_public = new ScanSocialsPublicEntity($this, null);
            }
            return $this->_scan_socials_public;
        }
        return new ScanSocialsPublicEntity($this, $data);
    }


    private $_scan_socials_status = null;

    // Canonical facade: $client->ScanSocialsStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->scan_socials_status()
    // resolves here too.
    public function ScanSocialsStatus($data = null)
    {
        require_once __DIR__ . '/entity/scan_socials_status_entity.php';
        if ($data === null) {
            if ($this->_scan_socials_status === null) {
                $this->_scan_socials_status = new ScanSocialsStatusEntity($this, null);
            }
            return $this->_scan_socials_status;
        }
        return new ScanSocialsStatusEntity($this, $data);
    }


    private $_schedule_v2 = null;

    // Canonical facade: $client->ScheduleV2()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->schedule_v2()
    // resolves here too.
    public function ScheduleV2($data = null)
    {
        require_once __DIR__ . '/entity/schedule_v2_entity.php';
        if ($data === null) {
            if ($this->_schedule_v2 === null) {
                $this->_schedule_v2 = new ScheduleV2Entity($this, null);
            }
            return $this->_schedule_v2;
        }
        return new ScheduleV2Entity($this, $data);
    }


    private $_scrape = null;

    // Canonical facade: $client->Scrape()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->scrape()
    // resolves here too.
    public function Scrape($data = null)
    {
        require_once __DIR__ . '/entity/scrape_entity.php';
        if ($data === null) {
            if ($this->_scrape === null) {
                $this->_scrape = new ScrapeEntity($this, null);
            }
            return $this->_scrape;
        }
        return new ScrapeEntity($this, $data);
    }


    private $_scrape_website_public = null;

    // Canonical facade: $client->ScrapeWebsitePublic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->scrape_website_public()
    // resolves here too.
    public function ScrapeWebsitePublic($data = null)
    {
        require_once __DIR__ . '/entity/scrape_website_public_entity.php';
        if ($data === null) {
            if ($this->_scrape_website_public === null) {
                $this->_scrape_website_public = new ScrapeWebsitePublicEntity($this, null);
            }
            return $this->_scrape_website_public;
        }
        return new ScrapeWebsitePublicEntity($this, $data);
    }


    private $_scraped_data = null;

    // Canonical facade: $client->ScrapedData()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->scraped_data()
    // resolves here too.
    public function ScrapedData($data = null)
    {
        require_once __DIR__ . '/entity/scraped_data_entity.php';
        if ($data === null) {
            if ($this->_scraped_data === null) {
                $this->_scraped_data = new ScrapedDataEntity($this, null);
            }
            return $this->_scraped_data;
        }
        return new ScrapedDataEntity($this, $data);
    }


    private $_scraping_status = null;

    // Canonical facade: $client->ScrapingStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->scraping_status()
    // resolves here too.
    public function ScrapingStatus($data = null)
    {
        require_once __DIR__ . '/entity/scraping_status_entity.php';
        if ($data === null) {
            if ($this->_scraping_status === null) {
                $this->_scraping_status = new ScrapingStatusEntity($this, null);
            }
            return $this->_scraping_status;
        }
        return new ScrapingStatusEntity($this, $data);
    }


    private $_self_serve_activate = null;

    // Canonical facade: $client->SelfServeActivate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->self_serve_activate()
    // resolves here too.
    public function SelfServeActivate($data = null)
    {
        require_once __DIR__ . '/entity/self_serve_activate_entity.php';
        if ($data === null) {
            if ($this->_self_serve_activate === null) {
                $this->_self_serve_activate = new SelfServeActivateEntity($this, null);
            }
            return $this->_self_serve_activate;
        }
        return new SelfServeActivateEntity($this, $data);
    }


    private $_seo = null;

    // Canonical facade: $client->Seo()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->seo()
    // resolves here too.
    public function Seo($data = null)
    {
        require_once __DIR__ . '/entity/seo_entity.php';
        if ($data === null) {
            if ($this->_seo === null) {
                $this->_seo = new SeoEntity($this, null);
            }
            return $this->_seo;
        }
        return new SeoEntity($this, $data);
    }


    private $_seo_ai_mention = null;

    // Canonical facade: $client->SeoAiMention()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->seo_ai_mention()
    // resolves here too.
    public function SeoAiMention($data = null)
    {
        require_once __DIR__ . '/entity/seo_ai_mention_entity.php';
        if ($data === null) {
            if ($this->_seo_ai_mention === null) {
                $this->_seo_ai_mention = new SeoAiMentionEntity($this, null);
            }
            return $this->_seo_ai_mention;
        }
        return new SeoAiMentionEntity($this, $data);
    }


    private $_seo_backlink = null;

    // Canonical facade: $client->SeoBacklink()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->seo_backlink()
    // resolves here too.
    public function SeoBacklink($data = null)
    {
        require_once __DIR__ . '/entity/seo_backlink_entity.php';
        if ($data === null) {
            if ($this->_seo_backlink === null) {
                $this->_seo_backlink = new SeoBacklinkEntity($this, null);
            }
            return $this->_seo_backlink;
        }
        return new SeoBacklinkEntity($this, $data);
    }


    private $_seo_keyword = null;

    // Canonical facade: $client->SeoKeyword()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->seo_keyword()
    // resolves here too.
    public function SeoKeyword($data = null)
    {
        require_once __DIR__ . '/entity/seo_keyword_entity.php';
        if ($data === null) {
            if ($this->_seo_keyword === null) {
                $this->_seo_keyword = new SeoKeywordEntity($this, null);
            }
            return $this->_seo_keyword;
        }
        return new SeoKeywordEntity($this, $data);
    }


    private $_seo_overview = null;

    // Canonical facade: $client->SeoOverview()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->seo_overview()
    // resolves here too.
    public function SeoOverview($data = null)
    {
        require_once __DIR__ . '/entity/seo_overview_entity.php';
        if ($data === null) {
            if ($this->_seo_overview === null) {
                $this->_seo_overview = new SeoOverviewEntity($this, null);
            }
            return $this->_seo_overview;
        }
        return new SeoOverviewEntity($this, $data);
    }


    private $_seo_traffic = null;

    // Canonical facade: $client->SeoTraffic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->seo_traffic()
    // resolves here too.
    public function SeoTraffic($data = null)
    {
        require_once __DIR__ . '/entity/seo_traffic_entity.php';
        if ($data === null) {
            if ($this->_seo_traffic === null) {
                $this->_seo_traffic = new SeoTrafficEntity($this, null);
            }
            return $this->_seo_traffic;
        }
        return new SeoTrafficEntity($this, $data);
    }


    private $_share_access_link = null;

    // Canonical facade: $client->ShareAccessLink()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->share_access_link()
    // resolves here too.
    public function ShareAccessLink($data = null)
    {
        require_once __DIR__ . '/entity/share_access_link_entity.php';
        if ($data === null) {
            if ($this->_share_access_link === null) {
                $this->_share_access_link = new ShareAccessLinkEntity($this, null);
            }
            return $this->_share_access_link;
        }
        return new ShareAccessLinkEntity($this, $data);
    }


    private $_site = null;

    // Canonical facade: $client->Site()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->site()
    // resolves here too.
    public function Site($data = null)
    {
        require_once __DIR__ . '/entity/site_entity.php';
        if ($data === null) {
            if ($this->_site === null) {
                $this->_site = new SiteEntity($this, null);
            }
            return $this->_site;
        }
        return new SiteEntity($this, $data);
    }


    private $_slide = null;

    // Canonical facade: $client->Slide()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->slide()
    // resolves here too.
    public function Slide($data = null)
    {
        require_once __DIR__ . '/entity/slide_entity.php';
        if ($data === null) {
            if ($this->_slide === null) {
                $this->_slide = new SlideEntity($this, null);
            }
            return $this->_slide;
        }
        return new SlideEntity($this, $data);
    }


    private $_slug_validation = null;

    // Canonical facade: $client->SlugValidation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->slug_validation()
    // resolves here too.
    public function SlugValidation($data = null)
    {
        require_once __DIR__ . '/entity/slug_validation_entity.php';
        if ($data === null) {
            if ($this->_slug_validation === null) {
                $this->_slug_validation = new SlugValidationEntity($this, null);
            }
            return $this->_slug_validation;
        }
        return new SlugValidationEntity($this, $data);
    }


    private $_social = null;

    // Canonical facade: $client->Social()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->social()
    // resolves here too.
    public function Social($data = null)
    {
        require_once __DIR__ . '/entity/social_entity.php';
        if ($data === null) {
            if ($this->_social === null) {
                $this->_social = new SocialEntity($this, null);
            }
            return $this->_social;
        }
        return new SocialEntity($this, $data);
    }


    private $_social_scan_preview = null;

    // Canonical facade: $client->SocialScanPreview()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->social_scan_preview()
    // resolves here too.
    public function SocialScanPreview($data = null)
    {
        require_once __DIR__ . '/entity/social_scan_preview_entity.php';
        if ($data === null) {
            if ($this->_social_scan_preview === null) {
                $this->_social_scan_preview = new SocialScanPreviewEntity($this, null);
            }
            return $this->_social_scan_preview;
        }
        return new SocialScanPreviewEntity($this, $data);
    }


    private $_social_scan_process = null;

    // Canonical facade: $client->SocialScanProcess()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->social_scan_process()
    // resolves here too.
    public function SocialScanProcess($data = null)
    {
        require_once __DIR__ . '/entity/social_scan_process_entity.php';
        if ($data === null) {
            if ($this->_social_scan_process === null) {
                $this->_social_scan_process = new SocialScanProcessEntity($this, null);
            }
            return $this->_social_scan_process;
        }
        return new SocialScanProcessEntity($this, $data);
    }


    private $_social_scan_save = null;

    // Canonical facade: $client->SocialScanSave()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->social_scan_save()
    // resolves here too.
    public function SocialScanSave($data = null)
    {
        require_once __DIR__ . '/entity/social_scan_save_entity.php';
        if ($data === null) {
            if ($this->_social_scan_save === null) {
                $this->_social_scan_save = new SocialScanSaveEntity($this, null);
            }
            return $this->_social_scan_save;
        }
        return new SocialScanSaveEntity($this, $data);
    }


    private $_sora2_avatar = null;

    // Canonical facade: $client->Sora2Avatar()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->sora2_avatar()
    // resolves here too.
    public function Sora2Avatar($data = null)
    {
        require_once __DIR__ . '/entity/sora2_avatar_entity.php';
        if ($data === null) {
            if ($this->_sora2_avatar === null) {
                $this->_sora2_avatar = new Sora2AvatarEntity($this, null);
            }
            return $this->_sora2_avatar;
        }
        return new Sora2AvatarEntity($this, $data);
    }


    private $_sora2_avatar_asset_upload = null;

    // Canonical facade: $client->Sora2AvatarAssetUpload()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->sora2_avatar_asset_upload()
    // resolves here too.
    public function Sora2AvatarAssetUpload($data = null)
    {
        require_once __DIR__ . '/entity/sora2_avatar_asset_upload_entity.php';
        if ($data === null) {
            if ($this->_sora2_avatar_asset_upload === null) {
                $this->_sora2_avatar_asset_upload = new Sora2AvatarAssetUploadEntity($this, null);
            }
            return $this->_sora2_avatar_asset_upload;
        }
        return new Sora2AvatarAssetUploadEntity($this, $data);
    }


    private $_sora2_avatar_stat = null;

    // Canonical facade: $client->Sora2AvatarStat()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->sora2_avatar_stat()
    // resolves here too.
    public function Sora2AvatarStat($data = null)
    {
        require_once __DIR__ . '/entity/sora2_avatar_stat_entity.php';
        if ($data === null) {
            if ($this->_sora2_avatar_stat === null) {
                $this->_sora2_avatar_stat = new Sora2AvatarStatEntity($this, null);
            }
            return $this->_sora2_avatar_stat;
        }
        return new Sora2AvatarStatEntity($this, $data);
    }


    private $_stat = null;

    // Canonical facade: $client->Stat()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->stat()
    // resolves here too.
    public function Stat($data = null)
    {
        require_once __DIR__ . '/entity/stat_entity.php';
        if ($data === null) {
            if ($this->_stat === null) {
                $this->_stat = new StatEntity($this, null);
            }
            return $this->_stat;
        }
        return new StatEntity($this, $data);
    }


    private $_stats_refresh_backfill = null;

    // Canonical facade: $client->StatsRefreshBackfill()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->stats_refresh_backfill()
    // resolves here too.
    public function StatsRefreshBackfill($data = null)
    {
        require_once __DIR__ . '/entity/stats_refresh_backfill_entity.php';
        if ($data === null) {
            if ($this->_stats_refresh_backfill === null) {
                $this->_stats_refresh_backfill = new StatsRefreshBackfillEntity($this, null);
            }
            return $this->_stats_refresh_backfill;
        }
        return new StatsRefreshBackfillEntity($this, $data);
    }


    private $_stats_refresh_issue = null;

    // Canonical facade: $client->StatsRefreshIssue()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->stats_refresh_issue()
    // resolves here too.
    public function StatsRefreshIssue($data = null)
    {
        require_once __DIR__ . '/entity/stats_refresh_issue_entity.php';
        if ($data === null) {
            if ($this->_stats_refresh_issue === null) {
                $this->_stats_refresh_issue = new StatsRefreshIssueEntity($this, null);
            }
            return $this->_stats_refresh_issue;
        }
        return new StatsRefreshIssueEntity($this, $data);
    }


    private $_stats_refresh_overview = null;

    // Canonical facade: $client->StatsRefreshOverview()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->stats_refresh_overview()
    // resolves here too.
    public function StatsRefreshOverview($data = null)
    {
        require_once __DIR__ . '/entity/stats_refresh_overview_entity.php';
        if ($data === null) {
            if ($this->_stats_refresh_overview === null) {
                $this->_stats_refresh_overview = new StatsRefreshOverviewEntity($this, null);
            }
            return $this->_stats_refresh_overview;
        }
        return new StatsRefreshOverviewEntity($this, $data);
    }


    private $_stats_refresh_run_summary = null;

    // Canonical facade: $client->StatsRefreshRunSummary()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->stats_refresh_run_summary()
    // resolves here too.
    public function StatsRefreshRunSummary($data = null)
    {
        require_once __DIR__ . '/entity/stats_refresh_run_summary_entity.php';
        if ($data === null) {
            if ($this->_stats_refresh_run_summary === null) {
                $this->_stats_refresh_run_summary = new StatsRefreshRunSummaryEntity($this, null);
            }
            return $this->_stats_refresh_run_summary;
        }
        return new StatsRefreshRunSummaryEntity($this, $data);
    }


    private $_stats_refresh_task_trigger = null;

    // Canonical facade: $client->StatsRefreshTaskTrigger()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->stats_refresh_task_trigger()
    // resolves here too.
    public function StatsRefreshTaskTrigger($data = null)
    {
        require_once __DIR__ . '/entity/stats_refresh_task_trigger_entity.php';
        if ($data === null) {
            if ($this->_stats_refresh_task_trigger === null) {
                $this->_stats_refresh_task_trigger = new StatsRefreshTaskTriggerEntity($this, null);
            }
            return $this->_stats_refresh_task_trigger;
        }
        return new StatsRefreshTaskTriggerEntity($this, $data);
    }


    private $_stripe = null;

    // Canonical facade: $client->Stripe()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->stripe()
    // resolves here too.
    public function Stripe($data = null)
    {
        require_once __DIR__ . '/entity/stripe_entity.php';
        if ($data === null) {
            if ($this->_stripe === null) {
                $this->_stripe = new StripeEntity($this, null);
            }
            return $this->_stripe;
        }
        return new StripeEntity($this, $data);
    }


    private $_style = null;

    // Canonical facade: $client->Style()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->style()
    // resolves here too.
    public function Style($data = null)
    {
        require_once __DIR__ . '/entity/style_entity.php';
        if ($data === null) {
            if ($this->_style === null) {
                $this->_style = new StyleEntity($this, null);
            }
            return $this->_style;
        }
        return new StyleEntity($this, $data);
    }


    private $_template = null;

    // Canonical facade: $client->Template()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->template()
    // resolves here too.
    public function Template($data = null)
    {
        require_once __DIR__ . '/entity/template_entity.php';
        if ($data === null) {
            if ($this->_template === null) {
                $this->_template = new TemplateEntity($this, null);
            }
            return $this->_template;
        }
        return new TemplateEntity($this, $data);
    }


    private $_tik_tok_creator_info = null;

    // Canonical facade: $client->TikTokCreatorInfo()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tik_tok_creator_info()
    // resolves here too.
    public function TikTokCreatorInfo($data = null)
    {
        require_once __DIR__ . '/entity/tik_tok_creator_info_entity.php';
        if ($data === null) {
            if ($this->_tik_tok_creator_info === null) {
                $this->_tik_tok_creator_info = new TikTokCreatorInfoEntity($this, null);
            }
            return $this->_tik_tok_creator_info;
        }
        return new TikTokCreatorInfoEntity($this, $data);
    }


    private $_top_post = null;

    // Canonical facade: $client->TopPost()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->top_post()
    // resolves here too.
    public function TopPost($data = null)
    {
        require_once __DIR__ . '/entity/top_post_entity.php';
        if ($data === null) {
            if ($this->_top_post === null) {
                $this->_top_post = new TopPostEntity($this, null);
            }
            return $this->_top_post;
        }
        return new TopPostEntity($this, $data);
    }


    private $_upload_post_agent = null;

    // Canonical facade: $client->UploadPostAgent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->upload_post_agent()
    // resolves here too.
    public function UploadPostAgent($data = null)
    {
        require_once __DIR__ . '/entity/upload_post_agent_entity.php';
        if ($data === null) {
            if ($this->_upload_post_agent === null) {
                $this->_upload_post_agent = new UploadPostAgentEntity($this, null);
            }
            return $this->_upload_post_agent;
        }
        return new UploadPostAgentEntity($this, $data);
    }


    private $_user = null;

    // Canonical facade: $client->User()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user()
    // resolves here too.
    public function User($data = null)
    {
        require_once __DIR__ . '/entity/user_entity.php';
        if ($data === null) {
            if ($this->_user === null) {
                $this->_user = new UserEntity($this, null);
            }
            return $this->_user;
        }
        return new UserEntity($this, $data);
    }


    private $_user_agent = null;

    // Canonical facade: $client->UserAgent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user_agent()
    // resolves here too.
    public function UserAgent($data = null)
    {
        require_once __DIR__ . '/entity/user_agent_entity.php';
        if ($data === null) {
            if ($this->_user_agent === null) {
                $this->_user_agent = new UserAgentEntity($this, null);
            }
            return $this->_user_agent;
        }
        return new UserAgentEntity($this, $data);
    }


    private $_user_health_detail = null;

    // Canonical facade: $client->UserHealthDetail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user_health_detail()
    // resolves here too.
    public function UserHealthDetail($data = null)
    {
        require_once __DIR__ . '/entity/user_health_detail_entity.php';
        if ($data === null) {
            if ($this->_user_health_detail === null) {
                $this->_user_health_detail = new UserHealthDetailEntity($this, null);
            }
            return $this->_user_health_detail;
        }
        return new UserHealthDetailEntity($this, $data);
    }


    private $_user_with_avatar_submission = null;

    // Canonical facade: $client->UserWithAvatarSubmission()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user_with_avatar_submission()
    // resolves here too.
    public function UserWithAvatarSubmission($data = null)
    {
        require_once __DIR__ . '/entity/user_with_avatar_submission_entity.php';
        if ($data === null) {
            if ($this->_user_with_avatar_submission === null) {
                $this->_user_with_avatar_submission = new UserWithAvatarSubmissionEntity($this, null);
            }
            return $this->_user_with_avatar_submission;
        }
        return new UserWithAvatarSubmissionEntity($this, $data);
    }


    private $_users_health = null;

    // Canonical facade: $client->UsersHealth()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->users_health()
    // resolves here too.
    public function UsersHealth($data = null)
    {
        require_once __DIR__ . '/entity/users_health_entity.php';
        if ($data === null) {
            if ($this->_users_health === null) {
                $this->_users_health = new UsersHealthEntity($this, null);
            }
            return $this->_users_health;
        }
        return new UsersHealthEntity($this, $data);
    }


    private $_video = null;

    // Canonical facade: $client->Video()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->video()
    // resolves here too.
    public function Video($data = null)
    {
        require_once __DIR__ . '/entity/video_entity.php';
        if ($data === null) {
            if ($this->_video === null) {
                $this->_video = new VideoEntity($this, null);
            }
            return $this->_video;
        }
        return new VideoEntity($this, $data);
    }


    private $_video_remixer_worker = null;

    // Canonical facade: $client->VideoRemixerWorker()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->video_remixer_worker()
    // resolves here too.
    public function VideoRemixerWorker($data = null)
    {
        require_once __DIR__ . '/entity/video_remixer_worker_entity.php';
        if ($data === null) {
            if ($this->_video_remixer_worker === null) {
                $this->_video_remixer_worker = new VideoRemixerWorkerEntity($this, null);
            }
            return $this->_video_remixer_worker;
        }
        return new VideoRemixerWorkerEntity($this, $data);
    }


    private $_watchdog_recovery = null;

    // Canonical facade: $client->WatchdogRecovery()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->watchdog_recovery()
    // resolves here too.
    public function WatchdogRecovery($data = null)
    {
        require_once __DIR__ . '/entity/watchdog_recovery_entity.php';
        if ($data === null) {
            if ($this->_watchdog_recovery === null) {
                $this->_watchdog_recovery = new WatchdogRecoveryEntity($this, null);
            }
            return $this->_watchdog_recovery;
        }
        return new WatchdogRecoveryEntity($this, $data);
    }


    private $_winning_ad = null;

    // Canonical facade: $client->WinningAd()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->winning_ad()
    // resolves here too.
    public function WinningAd($data = null)
    {
        require_once __DIR__ . '/entity/winning_ad_entity.php';
        if ($data === null) {
            if ($this->_winning_ad === null) {
                $this->_winning_ad = new WinningAdEntity($this, null);
            }
            return $this->_winning_ad;
        }
        return new WinningAdEntity($this, $data);
    }


    private $_x_adaptation = null;

    // Canonical facade: $client->XAdaptation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->x_adaptation()
    // resolves here too.
    public function XAdaptation($data = null)
    {
        require_once __DIR__ . '/entity/x_adaptation_entity.php';
        if ($data === null) {
            if ($this->_x_adaptation === null) {
                $this->_x_adaptation = new XAdaptationEntity($this, null);
            }
            return $this->_x_adaptation;
        }
        return new XAdaptationEntity($this, $data);
    }


    private $_zerohuman_admin_account = null;

    // Canonical facade: $client->ZerohumanAdminAccount()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zerohuman_admin_account()
    // resolves here too.
    public function ZerohumanAdminAccount($data = null)
    {
        require_once __DIR__ . '/entity/zerohuman_admin_account_entity.php';
        if ($data === null) {
            if ($this->_zerohuman_admin_account === null) {
                $this->_zerohuman_admin_account = new ZerohumanAdminAccountEntity($this, null);
            }
            return $this->_zerohuman_admin_account;
        }
        return new ZerohumanAdminAccountEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new CrackedApiReferenceSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
