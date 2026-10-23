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
const admin_video_remixerEntityLiveStrict = true


func TestAdminVideoRemixerEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AdminVideoRemixer(nil)
		if ent == nil {
			t.Fatal("expected non-nil AdminVideoRemixerEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.AdminVideoRemixer(nil).Load(map[string]any{"clip_id": 1}, nil)
		if sdkerr, ok := err.(*core.CrackedApiReferenceError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := admin_video_remixerBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "admin_video_remixer." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		client := setup.client
		_ = client

		// CREATE
		adminVideoRemixerRef01Ent := client.AdminVideoRemixer(nil)
		adminVideoRemixerRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "admin_video_remixer"}), "admin_video_remixer_ref01"))

		adminVideoRemixerRef01DataResult, err := adminVideoRemixerRef01Ent.Create(adminVideoRemixerRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		adminVideoRemixerRef01Data = core.ToMapAny(entityData(adminVideoRemixerRef01DataResult))
		if adminVideoRemixerRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// UPDATE
		adminVideoRemixerRef01DataUp0Up := map[string]any{
		}

		adminVideoRemixerRef01MarkdefUp0Name := "activity"
		adminVideoRemixerRef01MarkdefUp0Value := fmt.Sprintf("Mark01-admin_video_remixer_ref01_%d", setup.now)
		adminVideoRemixerRef01DataUp0Up[adminVideoRemixerRef01MarkdefUp0Name] = adminVideoRemixerRef01MarkdefUp0Value

		adminVideoRemixerRef01ResdataUp0Result, err := adminVideoRemixerRef01Ent.Update(adminVideoRemixerRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		adminVideoRemixerRef01ResdataUp0 := core.ToMapAny(entityData(adminVideoRemixerRef01ResdataUp0Result))
		if adminVideoRemixerRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if adminVideoRemixerRef01ResdataUp0[adminVideoRemixerRef01MarkdefUp0Name] != adminVideoRemixerRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", adminVideoRemixerRef01MarkdefUp0Name, adminVideoRemixerRef01ResdataUp0[adminVideoRemixerRef01MarkdefUp0Name])
		}

		// LOAD
		adminVideoRemixerRef01MatchDt0 := map[string]any{}
		adminVideoRemixerRef01DataDt0Loaded, err := adminVideoRemixerRef01Ent.Load(adminVideoRemixerRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if adminVideoRemixerRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func admin_video_remixerBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "admin_video_remixer", "AdminVideoRemixerTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read admin_video_remixer test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse admin_video_remixer test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"admin_video_remixer01", "admin_video_remixer02", "admin_video_remixer03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("CRACKED_API_REFERENCE_TEST_ADMIN_VIDEO_REMIXER_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CRACKED_API_REFERENCE_TEST_ADMIN_VIDEO_REMIXER_ENTID": idmap,
		"CRACKED_API_REFERENCE_TEST_LIVE":      "FALSE",
		"CRACKED_API_REFERENCE_TEST_EXPLAIN":   "FALSE",
		"CRACKED_API_REFERENCE_APIKEY":         "",
		"CRACKED_API_REFERENCE_SERVER_BASE": "",
	})

	idmapResolved := core.ToMapAny(env["CRACKED_API_REFERENCE_TEST_ADMIN_VIDEO_REMIXER_ENTID"])
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
