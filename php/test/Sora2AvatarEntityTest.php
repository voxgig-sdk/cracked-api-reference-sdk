<?php
declare(strict_types=1);

// Sora2Avatar entity test

require_once __DIR__ . '/../crackedapireference_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class Sora2AvatarEntityTestFailHook extends CrackedApiReferenceBaseFeature
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
        throw new \RuntimeException('sora2_avatar hook failed');
    }

    public function PreUnexpected(CrackedApiReferenceContext $ctx): void
    {
        $this->unexpected++;
    }
}

class Sora2AvatarEntityTest extends TestCase
{
    // main.kit.test.live.strict is true (the default is true): a live
    // request that fails, or a live test missing an input it needs,
    // fails the test.
    // An account with no record for a test to read skips it either way.
    private const LIVE_STRICT = true;

    public function test_create_instance(): void
    {
        $testsdk = CrackedApiReferenceSDK::test(null, null);
        $ent = $testsdk->Sora2Avatar(null);
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
                "sora2_avatar" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = CrackedApiReferenceSDK::test($seed, null);
        $seen = iterator_to_array($base->Sora2Avatar(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = CrackedApiReferenceConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = CrackedApiReferenceSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->Sora2Avatar(null)->stream("list", null, null) as $item) {
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
            iterator_to_array(CrackedApiReferenceSDK::test($offline, null)->Sora2Avatar(null)
                ->stream("list", null, null), false);
        } catch (\Throwable $e) {
            $streamerr = $e;
        }
        $this->assertNotNull($streamerr, 'the stream should raise the transport failure');
        $this->assertStringContainsString('offline', $streamerr->getMessage());

        iterator_to_array(CrackedApiReferenceSDK::test($offline, null)->Sora2Avatar(null)
            ->stream("list", null, ["ctrl" => ["throw" => false]]), false);

        $cfg = CrackedApiReferenceConfig::shared_config();
        if (isset($cfg["feature"]["rbac"])) {
            $denied = CrackedApiReferenceSDK::test(null, ["feature" => ["rbac" => ["active" => true, "deny" => true]]]);
            $denyerr = null;
            try {
                iterator_to_array($denied->Sora2Avatar(null)->stream("list", null, null), false);
            } catch (\Throwable $e) {
                $denyerr = $e;
            }
            $this->assertSame('rbac_denied', $denyerr->sdk_code ?? null);
        }
    }

    public function test_stream_ctrl(): void
    {
        $ctrl = ["explain" => []];
        iterator_to_array(CrackedApiReferenceSDK::test(null, null)->Sora2Avatar(null)
            ->stream("list", null, ["ctrl" => $ctrl]), false);
        $this->assertSame(["explain"], array_keys($ctrl));
    }

    public function test_unexpected(): void
    {
        $hook = new Sora2AvatarEntityTestFailHook();
        $client = new CrackedApiReferenceSDK(["feature" => ["test" => ["active" => true]], "extend" => [$hook]]);

        $err = null;
        try {
            $client->Sora2Avatar(null)->list(null, null);
        } catch (\Throwable $e) {
            $err = $e;
        }
        $this->assertNotNull($err, 'the throwing hook should fail the operation');
        $this->assertStringContainsString('hook failed', $err->getMessage());
        $this->assertGreaterThan(0, $hook->unexpected, 'PreUnexpected did not fire');

        $fired = $hook->unexpected;
        $this->assertNull($client->Sora2Avatar(null)->list(null, ["throw" => false]));
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
                throw new \RuntimeException('sora2_avatar transport failed');
            }],
        ]);

        $err = null;
        try {
            $client->Sora2Avatar(null)->list(null, null);
        } catch (\Throwable $e) {
            $err = $e;
        }
        $this->assertInstanceOf(CrackedApiReferenceError::class, $err);
        $this->assertStringContainsString('transport failed', $err->getMessage());

        $client->Sora2Avatar(null)->list(null, ["throw" => false]);
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
        $listed = CrackedApiReferenceSDK::test(['entity' => ['sora2_avatar' => ['v1' => ['avatar_frame_url' => 'x', 'created_at' => 'x', 'headshot_url' => 'x', 'prompt_key' => 'x', 'run_output_dir' => 'x', 'selected_age_bucket' => 'x', 'selected_gender' => 'x', 'selected_prompt' => 'x', 'selected_race' => 'x', 'sora2_cameo_handle' => 'x', 'sora2_cameo_link' => 'x', 'sora2_display_name' => 'x', 'sora2_video_url' => 'x', 'updated_at' => 'x']]]], $opts)->Sora2Avatar(null)->list(null, null);
        $this->assertSame(['v1'], array_map(fn($ent) => $ent->data_get()['id'] ?? null, $listed));
        $err = null;
        try {
            CrackedApiReferenceSDK::test(['entity' => ['sora2_avatar' => ['v1' => ['avatar_frame_url' => 'x', 'created_at' => 1, 'headshot_url' => 'x', 'prompt_key' => 'x', 'run_output_dir' => 'x', 'selected_age_bucket' => 'x', 'selected_gender' => 'x', 'selected_prompt' => 'x', 'selected_race' => 'x', 'sora2_cameo_handle' => 'x', 'sora2_cameo_link' => 'x', 'sora2_display_name' => 'x', 'sora2_video_url' => 'x', 'updated_at' => 'x']]]], $opts)->Sora2Avatar(null)->list(null, null);
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
            $client->Sora2Avatar(null)->list(["completed_only" => 'x'], null);
        } catch (\Throwable $e) {
            $err = $e;
        }
        $this->assertSame('validate_failed', $err->sdk_code ?? null);
    }

    public function test_basic_flow(): void
    {
        $setup = sora2_avatar_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "update", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "sora2_avatar." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        $client = $setup["client"];

        // CREATE
        $sora2_avatar_ref01_ent = $client->Sora2Avatar(null);
        $sora2_avatar_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.sora2_avatar"), "sora2_avatar_ref01"));

        $sora2_avatar_ref01_data_result = $sora2_avatar_ref01_ent->create($sora2_avatar_ref01_data, null);
        $sora2_avatar_ref01_data = Helpers::to_map(is_object($sora2_avatar_ref01_data_result) && method_exists($sora2_avatar_ref01_data_result, 'data_get') ? $sora2_avatar_ref01_data_result->data_get() : $sora2_avatar_ref01_data_result);
        $this->assertNotNull($sora2_avatar_ref01_data);
        $this->assertNotNull($sora2_avatar_ref01_data["id"]);

        // LIST
        $sora2_avatar_ref01_match = [];

        $sora2_avatar_ref01_list_result = $sora2_avatar_ref01_ent->list($sora2_avatar_ref01_match, null);
        $this->assertIsArray($sora2_avatar_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($sora2_avatar_ref01_list_result),
            ["id" => $sora2_avatar_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // UPDATE
        $sora2_avatar_ref01_data_up0_up = [
            "id" => $sora2_avatar_ref01_data["id"],
        ];

        $sora2_avatar_ref01_markdef_up0_name = "created_at";
        $sora2_avatar_ref01_markdef_up0_value = "Mark01-sora2_avatar_ref01_" . $setup["now"];
        $sora2_avatar_ref01_data_up0_up[$sora2_avatar_ref01_markdef_up0_name] = $sora2_avatar_ref01_markdef_up0_value;

        $sora2_avatar_ref01_resdata_up0_result = $sora2_avatar_ref01_ent->update($sora2_avatar_ref01_data_up0_up, null);
        $sora2_avatar_ref01_resdata_up0 = Helpers::to_map(is_object($sora2_avatar_ref01_resdata_up0_result) && method_exists($sora2_avatar_ref01_resdata_up0_result, 'data_get') ? $sora2_avatar_ref01_resdata_up0_result->data_get() : $sora2_avatar_ref01_resdata_up0_result);
        $this->assertNotNull($sora2_avatar_ref01_resdata_up0);
        $this->assertEquals($sora2_avatar_ref01_resdata_up0["id"], $sora2_avatar_ref01_data_up0_up["id"]);
        $this->assertEquals($sora2_avatar_ref01_resdata_up0[$sora2_avatar_ref01_markdef_up0_name], $sora2_avatar_ref01_markdef_up0_value);

        // LOAD
        $sora2_avatar_ref01_match_dt0 = [
            "id" => $sora2_avatar_ref01_data["id"],
        ];
        $sora2_avatar_ref01_data_dt0_loaded = $sora2_avatar_ref01_ent->load($sora2_avatar_ref01_match_dt0, null);
        $sora2_avatar_ref01_data_dt0_load_result = Helpers::to_map(is_object($sora2_avatar_ref01_data_dt0_loaded) && method_exists($sora2_avatar_ref01_data_dt0_loaded, 'data_get') ? $sora2_avatar_ref01_data_dt0_loaded->data_get() : $sora2_avatar_ref01_data_dt0_loaded);
        $this->assertNotNull($sora2_avatar_ref01_data_dt0_load_result);
        $this->assertEquals($sora2_avatar_ref01_data_dt0_load_result["id"], $sora2_avatar_ref01_data["id"]);

    }
}

function sora2_avatar_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/sora2_avatar/Sora2AvatarTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CrackedApiReferenceSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["sora2_avatar01", "sora2_avatar02", "sora2_avatar03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Whether *_ENTID supplied the idmap, read before env_override consumes
    // it: without it, the ids a live flow binds are the fixture's synthetic ones.
    $entid_env_raw = getenv("CRACKED_API_REFERENCE_TEST_SORA2_AVATAR_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CRACKED_API_REFERENCE_TEST_SORA2_AVATAR_ENTID" => $idmap,
        "CRACKED_API_REFERENCE_TEST_LIVE" => "FALSE",
        "CRACKED_API_REFERENCE_TEST_EXPLAIN" => "FALSE",
        "CRACKED_API_REFERENCE_APIKEY" => "",
        "CRACKED_API_REFERENCE_SERVER_BASE" => '',
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CRACKED_API_REFERENCE_TEST_SORA2_AVATAR_ENTID"]);
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
