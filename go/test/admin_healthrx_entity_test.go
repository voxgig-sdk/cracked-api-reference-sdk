package sdktest

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/cracked-api-reference-sdk/go"
	"github.com/voxgig-sdk/cracked-api-reference-sdk/go/core"

	vs "github.com/voxgig-sdk/cracked-api-reference-sdk/go/utility/struct"
)

// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const admin_healthrxEntityLiveStrict = true


func TestAdminHealthrxEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AdminHealthrx(nil)
		if ent == nil {
			t.Fatal("expected non-nil AdminHealthrxEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.AdminHealthrx(nil).Load(map[string]any{"item_id": 1, "kind": "x"}, nil)
		if sdkerr, ok := err.(*core.CrackedApiReferenceError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := admin_healthrxBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "admin_healthrx." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			for _, _liveKey := range []string{"kind01"} {
				if setup.syntheticOnly || setup.idmap[_liveKey] == nil {
					liveMiss(t, admin_healthrxEntityLiveStrict, "Live entity test blocked: needs %s via CRACKED_API_REFERENCE_TEST_ADMIN_HEALTHRX_ENTID", _liveKey)
				}
			}
		}
		client := setup.client
		_ = client

		// CREATE
		adminHealthrxRef01Ent := client.AdminHealthrx(nil)
		adminHealthrxRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "admin_healthrx"}), "admin_healthrx_ref01"))
		adminHealthrxRef01Data["kind"] = setup.idmap["kind01"]

		adminHealthrxRef01DataResult, err := adminHealthrxRef01Ent.Create(adminHealthrxRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		adminHealthrxRef01Data = core.ToMapAny(entityData(adminHealthrxRef01DataResult))
		if adminHealthrxRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if adminHealthrxRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		adminHealthrxRef01DataUp0Up := map[string]any{
			"id": adminHealthrxRef01Data["id"],
		}

		adminHealthrxRef01MarkdefUp0Name := "action"
		adminHealthrxRef01MarkdefUp0Value := fmt.Sprintf("Mark01-admin_healthrx_ref01_%d", setup.now)
		adminHealthrxRef01DataUp0Up[adminHealthrxRef01MarkdefUp0Name] = adminHealthrxRef01MarkdefUp0Value

		adminHealthrxRef01ResdataUp0Result, err := adminHealthrxRef01Ent.Update(adminHealthrxRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		adminHealthrxRef01ResdataUp0 := core.ToMapAny(entityData(adminHealthrxRef01ResdataUp0Result))
		if adminHealthrxRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if adminHealthrxRef01ResdataUp0["id"] != adminHealthrxRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if adminHealthrxRef01ResdataUp0[adminHealthrxRef01MarkdefUp0Name] != adminHealthrxRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", adminHealthrxRef01MarkdefUp0Name, adminHealthrxRef01ResdataUp0[adminHealthrxRef01MarkdefUp0Name])
		}

		// LOAD
		adminHealthrxRef01MatchDt0 := map[string]any{
			"id": adminHealthrxRef01Data["id"],
		}
		adminHealthrxRef01DataDt0Loaded, err := adminHealthrxRef01Ent.Load(adminHealthrxRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		adminHealthrxRef01DataDt0LoadResult := core.ToMapAny(entityData(adminHealthrxRef01DataDt0Loaded))
		if adminHealthrxRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if adminHealthrxRef01DataDt0LoadResult["id"] != adminHealthrxRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func admin_healthrxBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "admin_healthrx", "AdminHealthrxTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read admin_healthrx test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse admin_healthrx test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"admin_healthrx01", "admin_healthrx02", "admin_healthrx03", "comment01", "comment02", "comment03", "video01", "video02", "video03", "kind01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("CRACKED_API_REFERENCE_TEST_ADMIN_HEALTHRX_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CRACKED_API_REFERENCE_TEST_ADMIN_HEALTHRX_ENTID": idmap,
		"CRACKED_API_REFERENCE_TEST_LIVE":      "FALSE",
		"CRACKED_API_REFERENCE_TEST_EXPLAIN":   "FALSE",
		"CRACKED_API_REFERENCE_APIKEY":         "",
		"CRACKED_API_REFERENCE_SERVER_BASE": "",
	})

	idmapResolved := core.ToMapAny(env["CRACKED_API_REFERENCE_TEST_ADMIN_HEALTHRX_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["CRACKED_API_REFERENCE_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["CRACKED_API_REFERENCE_APIKEY"],
				"server": map[string]any{
					"base": env["CRACKED_API_REFERENCE_SERVER_BASE"],
				},
			},
			extraOpts,
		})
		client = sdk.NewCrackedApiReferenceSDK(core.ToMapAny(mergedOpts))
	}

	live := env["CRACKED_API_REFERENCE_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["CRACKED_API_REFERENCE_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
