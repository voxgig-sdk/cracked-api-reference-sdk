<?php
declare(strict_types=1);

// Social entity test

require_once __DIR__ . '/../crackedapireference_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class SocialEntityTestFailHook extends CrackedApiReferenceBaseFeature
{
    public int $unexpected = 0;

    public function __construct()
    {
        parent::__construct();
        $this->name = 'failhook';
    }

    public function init(CrackedApiReferenceContext $ctx, array $options): void
    {
    }

    public function PreSpec(CrackedApiReferenceContext $ctx): void
    {
        throw new \RuntimeException('social hook failed');
    }

    public function PreUnexpected(CrackedApiReferenceContext $ctx): void
    {
        $this->unexpected++;
    }
}

class SocialEntityTest extends TestCase
{
    // main.kit.test.live.strict is true (the default is true): a live
    // request that fails, or a live test missing an input it needs,
    // fails the test.
    // An account with no record for a test to read skips it either way.
    private const LIVE_STRICT = true;

    public function test_create_instance(): void
    {
        $testsdk = CrackedApiReferenceSDK::test(null, null);
        $ent = $testsdk->Social(null);
        $this->assertNotNull($ent);
    }

    // Feature #4: the entity stream(action, ...) method runs the op pipeline
    // and yields result items. With the streaming feature active it yields the
    // feature's incremental output; otherwise it falls back to the materialised
    // list so stream always yields.
    public function test_stream(): void
    {
        $seed = [
            "entity" => [
                "social" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = CrackedApiReferenceSDK::test($seed, null);
        $seen = iterator_to_array($base->Social(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = CrackedApiReferenceConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = CrackedApiReferenceSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->Social(null)->stream("list", null, null) as $item) {
                if (is_array($item) && array_is_list($item)) {
                    foreach ($item as $sub) {
                        $got[] = $sub;
                    }
                } else {
                    $got[] = $item;
                }
            }
            $this->assertCount(3, $got);
        }
    }

    public function test_stream_error(): void
    {
        $offline = ["net" => ["offline" => true]];
        $streamerr = null;
        try {
            iterator_to_array(CrackedApiReferenceSDK::test($offline, null)->Social(null)
                ->stream("list", null, null), false);
        } catch (\Throwable $e) {
            $streamerr = $e;
        }
        $this->assertNotNull($streamerr, 'the stream should raise the transport failure');
        $this->assertStringContainsString('offline', $streamerr->getMessage());

        iterator_to_array(CrackedApiReferenceSDK::test($offline, null)->Social(null)
            ->stream("list", null, ["ctrl" => ["throw" => false]]), false);

        $cfg = CrackedApiReferenceConfig::shared_config();
        if (isset($cfg["feature"]["rbac"])) {
            $denied = CrackedApiReferenceSDK::test(null, ["feature" => ["rbac" => ["active" => true, "deny" => true]]]);
            $denyerr = null;
            try {
                iterator_to_array($denied->Social(null)->stream("list", null, null), false);
            } catch (\Throwable $e) {
                $denyerr = $e;
            }
            $this->assertSame('rbac_denied', $denyerr->sdk_code ?? null);
        }
    }

    public function test_stream_ctrl(): void
    {
        $ctrl = ["explain" => []];
        iterator_to_array(CrackedApiReferenceSDK::test(null, null)->Social(null)
            ->stream("list", null, ["ctrl" => $ctrl]), false);
        $this->assertSame(["explain"], array_keys($ctrl));
    }

    public function test_unexpected(): void
    {
        $hook = new SocialEntityTestFailHook();
        $client = new CrackedApiReferenceSDK(["feature" => ["test" => ["active" => true]], "extend" => [$hook]]);

        $err = null;
        try {
            $client->Social(null)->list(null, null);
        } catch (\Throwable $e) {
            $err = $e;
        }
        $this->assertNotNull($err, 'the throwing hook should fail the operation');
        $this->assertStringContainsString('hook failed', $err->getMessage());
        $this->assertGreaterThan(0, $hook->unexpected, 'PreUnexpected did not fire');

        $fired = $hook->unexpected;
        $this->assertNull($client->Social(null)->list(null, ["throw" => false]));
        $this->assertGreaterThan($fired, $hook->unexpected, 'PreUnexpected did not fire');
    }

    public function test_cost_commits_a_throwing_transport(): void
    {
        $cfg = CrackedApiReferenceConfig::shared_config();
        if (!isset($cfg["feature"]["cost"])) {
            $this->markTestSkipped('feature not present in this SDK: cost');
        }
        $client = new CrackedApiReferenceSDK([
            "test" => ["active" => true],
            "feature" => ["cost" => ["active" => true, "unit" => 1]],
            "utility" => ["fetcher" => function ($ctx, $url, $fetchdef) {
                throw new \RuntimeException('social transport failed');
            }],
        ]);

        $err = null;
        try {
            $client->Social(null)->list(null, null);
        } catch (\Throwable $e) {
            $err = $e;
        }
        $this->assertInstanceOf(CrackedApiReferenceError::class, $err);
        $this->assertStringContainsString('transport failed', $err->getMessage());

        $client->Social(null)->list(null, ["throw" => false]);
        $this->assertSame(2, $client->_cost["total"]["calls"]);
        $this->assertSame(2, $client->_cost["total"]["attempts"]);
    }

    public function test_validate_list_response(): void
    {
        $cfg = CrackedApiReferenceConfig::shared_config();
        if (!isset($cfg["feature"]["validate"])) {
            $this->markTestSkipped('feature not present in this SDK: validate');
        }
        $opts = ["feature" => ["validate" => ["active" => true, "request" => false, "response" => true]]];
        $listed = CrackedApiReferenceSDK::test(['entity' => ['social' => ['v1' => ['code' => 'x', 'code_verifier' => 'x', 'createdAt' => 'x', 'platform' => 'x', 'platformUserId' => 'x', 'updatedAt' => 'x', 'userId' => 'x']]]], $opts)->Social(null)->list(null, null);
        $this->assertSame(['v1'], array_map(fn($ent) => $ent->data_get()['id'] ?? null, $listed));
        $err = null;
        try {
            CrackedApiReferenceSDK::test(['entity' => ['social' => ['v1' => ['code' => 1, 'code_verifier' => 'x', 'createdAt' => 'x', 'platform' => 'x', 'platformUserId' => 'x', 'updatedAt' => 'x', 'userId' => 'x']]]], $opts)->Social(null)->list(null, null);
        } catch (\Throwable $e) {
            $err = $e;
        }
        $this->assertSame('validate_failed', $err->sdk_code ?? null);
    }

    public function test_validate(): void
    {
        $cfg = CrackedApiReferenceConfig::shared_config();
        if (!isset($cfg["feature"]["validate"])) {
            $this->markTestSkipped('feature not present in this SDK: validate');
        }
        $client = CrackedApiReferenceSDK::test(null, ["feature" => ["validate" => ["active" => true]]]);
        $err = null;
        try {
            $client->Social(null)->list(["code" => 1], null);
        } catch (\Throwable $e) {
            $err = $e;
        }
        $this->assertSame('validate_failed', $err->sdk_code ?? null);
    }

    public function test_basic_flow(): void
    {
        $setup = social_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "social." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        $client = $setup["client"];

        // CREATE
        $social_ref01_ent = $client->Social(null);
        $social_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.social"), "social_ref01"));

        $social_ref01_data_result = $social_ref01_ent->create($social_ref01_data, null);
        $social_ref01_data = Helpers::to_map(is_object($social_ref01_data_result) && method_exists($social_ref01_data_result, 'data_get') ? $social_ref01_data_result->data_get() : $social_ref01_data_result);
        $this->assertNotNull($social_ref01_data);
        $this->assertNotNull($social_ref01_data["id"]);

        // LIST
        $social_ref01_match = [];

        $social_ref01_list_result = $social_ref01_ent->list($social_ref01_match, null);
        $this->assertIsArray($social_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($social_ref01_list_result),
            ["id" => $social_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // LOAD
        $social_ref01_match_dt0 = [
            "id" => $social_ref01_data["id"],
        ];
        $social_ref01_data_dt0_loaded = $social_ref01_ent->load($social_ref01_match_dt0, null);
        $social_ref01_data_dt0_load_result = Helpers::to_map(is_object($social_ref01_data_dt0_loaded) && method_exists($social_ref01_data_dt0_loaded, 'data_get') ? $social_ref01_data_dt0_loaded->data_get() : $social_ref01_data_dt0_loaded);
        $this->assertNotNull($social_ref01_data_dt0_load_result);
        $this->assertEquals($social_ref01_data_dt0_load_result["id"], $social_ref01_data["id"]);

        // REMOVE
        $social_ref01_match_rm0 = [
            "id" => $social_ref01_data["id"],
        ];
        $social_ref01_ent->remove($social_ref01_match_rm0, null);

        // LIST
        $social_ref01_match_rt0 = [];

        $social_ref01_list_rt0_result = $social_ref01_ent->list($social_ref01_match_rt0, null);
        $this->assertIsArray($social_ref01_list_rt0_result);

        $not_found_item = sdk_select(
            Runner::entity_list_to_data($social_ref01_list_rt0_result),
            ["id" => $social_ref01_data["id"]]);
        $this->assertEmpty($not_found_item);

    }
}

function social_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/social/SocialTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CrackedApiReferenceSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["social01", "social02", "social03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Whether *_ENTID supplied the idmap, read before env_override consumes
    // it: without it, the ids a live flow binds are the fixture's synthetic ones.
    $entid_env_raw = getenv("CRACKED_API_REFERENCE_TEST_SOCIAL_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CRACKED_API_REFERENCE_TEST_SOCIAL_ENTID" => $idmap,
        "CRACKED_API_REFERENCE_TEST_LIVE" => "FALSE",
        "CRACKED_API_REFERENCE_TEST_EXPLAIN" => "FALSE",
        "CRACKED_API_REFERENCE_APIKEY" => "",
        "CRACKED_API_REFERENCE_SERVER_BASE" => '',
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CRACKED_API_REFERENCE_TEST_SOCIAL_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["CRACKED_API_REFERENCE_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["CRACKED_API_REFERENCE_APIKEY"],
                "server" => [
                    "base" => $env["CRACKED_API_REFERENCE_SERVER_BASE"],
                ],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new CrackedApiReferenceSDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["CRACKED_API_REFERENCE_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["CRACKED_API_REFERENCE_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
