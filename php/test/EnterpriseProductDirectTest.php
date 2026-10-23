<?php
declare(strict_types=1);

// EnterpriseProduct direct test

require_once __DIR__ . '/../crackedapireference_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;

class EnterpriseProductDirectTest extends TestCase
{
    // main.kit.test.live.strict is true (the default is true): a live
    // request that fails, or a live test missing an input it needs,
    // fails the test.
    // An account with no record for a test to read skips it either way.
    private const LIVE_STRICT = true;

    private static function liveOk(array $result): bool
    {
        $status = Helpers::to_int($result["status"] ?? 0);
        return empty($result["err"]) && !empty($result["ok"]) && $status >= 200 && $status < 300;
    }

    public function test_direct_load_enterprise_product(): void
    {
        $setup = enterprise_product_direct_setup(["id" => "direct01"]);
        [$_shouldSkip, $_reason] = Runner::is_control_skipped("direct", "direct-load-enterprise_product", $setup["live"] ? "live" : "unit");
        if ($_shouldSkip) {
            $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
            return;
        }
        if ($setup["live"]) {
            foreach (["product01"] as $_liveKey) {
                if (null === ($setup["idmap"][$_liveKey] ?? null)) {
                    Runner::live_miss(self::LIVE_STRICT, "Live test blocked: needs " . $_liveKey . " via CRACKED_API_REFERENCE_TEST_ENTERPRISE_PRODUCT_ENTID");
                }
            }
        }
        $client = $setup["client"];

        $params = [];
        $query = [];
        if ($setup["live"]) {
            $params["product_id"] = $setup["idmap"]["product01"] ?? null;
        } else {
            $params["product_id"] = "direct01";
        }

        $result = $client->direct([
            "path" => "api/enterprise/products/{product_id}/status",
            "method" => "GET",
            "params" => $params,
            "query" => $query,
        ]);
        if ($setup["live"]) {
            if (!self::liveOk($result)) {
                Runner::live_miss(self::LIVE_STRICT, "Live load failed: " . Runner::live_describe($result));
            }
            if (null === ($result["data"] ?? null)) {
                Runner::live_miss(self::LIVE_STRICT, "Live load returned no data: " . Runner::live_describe($result));
            }
            $this->assertNotNull($result["data"]);
        } else {
            $this->assertArrayNotHasKey("err", $result);
            $this->assertTrue($result["ok"]);
            $this->assertEquals(200, Helpers::to_int($result["status"]));
            $this->assertNotNull($result["data"]);
            if (is_array($result["data"]) && isset($result["data"]["id"])) {
                $this->assertEquals("direct01", $result["data"]["id"]);
            }
            $this->assertCount(1, $setup["calls"]);
        }
    }

}


function enterprise_product_direct_setup($mockres)
{
    Runner::load_env_local();

    $calls = new \ArrayObject();

    $env = Runner::env_override([
        "CRACKED_API_REFERENCE_TEST_ENTERPRISE_PRODUCT_ENTID" => [],
        "CRACKED_API_REFERENCE_TEST_LIVE" => "FALSE",
        "CRACKED_API_REFERENCE_APIKEY" => "",
        "CRACKED_API_REFERENCE_SERVER_BASE" => '',
    ]);

    $live = $env["CRACKED_API_REFERENCE_TEST_LIVE"] === "TRUE";

    if ($live) {
        // Merged so the generated fields win: sdk-test-control.json's
        // test.client.options adds to the live client, it does not redirect it.
        $merged_opts = array_merge(Runner::live_client_options(), [
            "apikey" => $env["CRACKED_API_REFERENCE_APIKEY"],
            "server" => [
                "base" => $env["CRACKED_API_REFERENCE_SERVER_BASE"],
            ],
        ]);
        $client = new CrackedApiReferenceSDK($merged_opts);
        $idmap = $env["CRACKED_API_REFERENCE_TEST_ENTERPRISE_PRODUCT_ENTID"] ?? [];
        return [
            "client" => $client,
            "calls" => $calls,
            "live" => true,
            "idmap" => is_array($idmap) ? $idmap : [],
        ];
    }

    $mock_fetch = function ($url, $init) use ($calls, $mockres) {
        $calls[] = ["url" => $url, "init" => $init];
        return [
            [
                "status" => 200,
                "statusText" => "OK",
                "headers" => [],
                "json" => function () use ($mockres) {
                    if ($mockres !== null) {
                        return $mockres;
                    }
                    return ["id" => "direct01"];
                },
                "body" => "mock",
            ],
            null,
        ];
    };

    $client = new CrackedApiReferenceSDK([
        "base" => "http://localhost:8080",
        "system" => [
            "fetch" => $mock_fetch,
        ],
    ]);

    return [
        "client" => $client,
        "calls" => $calls,
        "live" => false,
        "idmap" => [],
    ];
}
