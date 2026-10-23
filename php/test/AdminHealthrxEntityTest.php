<?php
declare(strict_types=1);

// AdminHealthrx entity test

require_once __DIR__ . '/../crackedapireference_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class AdminHealthrxEntityTest extends TestCase
{
    // main.kit.test.live.strict is true (the default is true): a live
    // request that fails, or a live test missing an input it needs,
    // fails the test.
    // An account with no record for a test to read skips it either way.
    private const LIVE_STRICT = true;

    public function test_create_instance(): void
    {
        $testsdk = CrackedApiReferenceSDK::test(null, null);
        $ent = $testsdk->AdminHealthrx(null);
        $this->assertNotNull($ent);
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
            $client->AdminHealthrx(null)->load(["item_id" => 1, "kind" => 'x'], null);
        } catch (\Throwable $e) {
            $err = $e;
        }
        $this->assertSame('validate_failed', $err->sdk_code ?? null);
    }

    public function test_basic_flow(): void
    {
        $setup = admin_healthrx_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "update", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "admin_healthrx." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        if (!empty($setup["live"])) {
            foreach (["kind01"] as $_liveKey) {
                if (!empty($setup["synthetic_only"]) || null === ($setup["idmap"][$_liveKey] ?? null)) {
                    Runner::live_miss(self::LIVE_STRICT, "Live entity test blocked: needs " . $_liveKey . " via CRACKED_API_REFERENCE_TEST_ADMIN_HEALTHRX_ENTID");
                }
            }
        }
        $client = $setup["client"];

        // CREATE
        $admin_healthrx_ref01_ent = $client->AdminHealthrx(null);
        $admin_healthrx_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.admin_healthrx"), "admin_healthrx_ref01"));
        $admin_healthrx_ref01_data["kind"] = $setup["idmap"]["kind01"];

        $admin_healthrx_ref01_data_result = $admin_healthrx_ref01_ent->create($admin_healthrx_ref01_data, null);
        $admin_healthrx_ref01_data = Helpers::to_map(is_object($admin_healthrx_ref01_data_result) && method_exists($admin_healthrx_ref01_data_result, 'data_get') ? $admin_healthrx_ref01_data_result->data_get() : $admin_healthrx_ref01_data_result);
        $this->assertNotNull($admin_healthrx_ref01_data);
        $this->assertNotNull($admin_healthrx_ref01_data["id"]);

        // UPDATE
        $admin_healthrx_ref01_data_up0_up = [
            "id" => $admin_healthrx_ref01_data["id"],
        ];

        $admin_healthrx_ref01_markdef_up0_name = "action";
        $admin_healthrx_ref01_markdef_up0_value = "Mark01-admin_healthrx_ref01_" . $setup["now"];
        $admin_healthrx_ref01_data_up0_up[$admin_healthrx_ref01_markdef_up0_name] = $admin_healthrx_ref01_markdef_up0_value;

        $admin_healthrx_ref01_resdata_up0_result = $admin_healthrx_ref01_ent->update($admin_healthrx_ref01_data_up0_up, null);
        $admin_healthrx_ref01_resdata_up0 = Helpers::to_map(is_object($admin_healthrx_ref01_resdata_up0_result) && method_exists($admin_healthrx_ref01_resdata_up0_result, 'data_get') ? $admin_healthrx_ref01_resdata_up0_result->data_get() : $admin_healthrx_ref01_resdata_up0_result);
        $this->assertNotNull($admin_healthrx_ref01_resdata_up0);
        $this->assertEquals($admin_healthrx_ref01_resdata_up0["id"], $admin_healthrx_ref01_data_up0_up["id"]);
        $this->assertEquals($admin_healthrx_ref01_resdata_up0[$admin_healthrx_ref01_markdef_up0_name], $admin_healthrx_ref01_markdef_up0_value);

        // LOAD
        $admin_healthrx_ref01_match_dt0 = [
            "id" => $admin_healthrx_ref01_data["id"],
        ];
        $admin_healthrx_ref01_data_dt0_loaded = $admin_healthrx_ref01_ent->load($admin_healthrx_ref01_match_dt0, null);
        $admin_healthrx_ref01_data_dt0_load_result = Helpers::to_map(is_object($admin_healthrx_ref01_data_dt0_loaded) && method_exists($admin_healthrx_ref01_data_dt0_loaded, 'data_get') ? $admin_healthrx_ref01_data_dt0_loaded->data_get() : $admin_healthrx_ref01_data_dt0_loaded);
        $this->assertNotNull($admin_healthrx_ref01_data_dt0_load_result);
        $this->assertEquals($admin_healthrx_ref01_data_dt0_load_result["id"], $admin_healthrx_ref01_data["id"]);

    }
}

function admin_healthrx_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/admin_healthrx/AdminHealthrxTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CrackedApiReferenceSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["admin_healthrx01", "admin_healthrx02", "admin_healthrx03", "comment01", "comment02", "comment03", "video01", "video02", "video03", "kind01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Whether *_ENTID supplied the idmap, read before env_override consumes
    // it: without it, the ids a live flow binds are the fixture's synthetic ones.
    $entid_env_raw = getenv("CRACKED_API_REFERENCE_TEST_ADMIN_HEALTHRX_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CRACKED_API_REFERENCE_TEST_ADMIN_HEALTHRX_ENTID" => $idmap,
        "CRACKED_API_REFERENCE_TEST_LIVE" => "FALSE",
        "CRACKED_API_REFERENCE_TEST_EXPLAIN" => "FALSE",
        "CRACKED_API_REFERENCE_APIKEY" => "",
        "CRACKED_API_REFERENCE_SERVER_BASE" => '',
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CRACKED_API_REFERENCE_TEST_ADMIN_HEALTHRX_ENTID"]);
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
