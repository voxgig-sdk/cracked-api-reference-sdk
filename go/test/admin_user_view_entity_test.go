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
const admin_user_viewEntityLiveStrict = true


type admin_user_viewFailHook struct {
	sdk.BaseFeature
	unexpected int
}

func (f *admin_user_viewFailHook) PreSpec(ctx *sdk.Context) {
	panic("admin_user_view hook failed")
}

func (f *admin_user_viewFailHook) PreUnexpected(ctx *sdk.Context) {
	f.unexpected++
}

func TestAdminUserViewEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AdminUserView(nil)
		if ent == nil {
			t.Fatal("expected non-nil AdminUserViewEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"admin_user_view": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for si := range base.AdminUserView(nil).Stream("list", nil, nil) {
			if si.Err != nil {
				t.Fatalf("stream failed: %v", si.Err)
			}
			seen = append(seen, si.Item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for si := range streamSdk.AdminUserView(nil).Stream("list", nil, nil) {
				if si.Err != nil {
					t.Fatalf("stream failed: %v", si.Err)
				}
				if sub, ok := si.Item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, si.Item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("stream-error", func(t *testing.T) {
		offline := map[string]any{"net": map[string]any{"offline": true}}
		var streamerr error
		for si := range sdk.TestSDK(offline, nil).AdminUserView(nil).Stream("list", nil, nil) {
			if si.Err != nil {
				streamerr = si.Err
			}
		}
		if nil == streamerr || !strings.Contains(streamerr.Error(), "offline") {
			t.Fatalf("expected the transport failure as a stream value, got %v", streamerr)
		}

		quiet := map[string]any{"ctrl": map[string]any{"throw": false}}
		for si := range sdk.TestSDK(offline, nil).AdminUserView(nil).Stream("list", nil, quiet) {
			if si.Err != nil {
				t.Fatalf("throw false: expected no error value, got %v", si.Err)
			}
		}

		if fhHasFeature("rbac") {
			denied := sdk.TestSDK(nil, map[string]any{
				"feature": map[string]any{"rbac": map[string]any{"active": true, "deny": true}},
			})
			var denyerr error
			for si := range denied.AdminUserView(nil).Stream("list", nil, nil) {
				if si.Err != nil {
					denyerr = si.Err
				}
			}
			if sdkerr, ok := denyerr.(*core.CrackedApiReferenceError); !ok || "rbac_denied" != sdkerr.Code {
				t.Fatalf("expected the rbac denial as a stream value, got %v", denyerr)
			}
		}
	})

	t.Run("stream-ctrl", func(t *testing.T) {
		explain := map[string]any{}
		ctrl := map[string]any{"explain": explain}
		for range sdk.TestSDK(nil, nil).AdminUserView(nil).Stream("list", nil, map[string]any{"ctrl": ctrl}) {
		}
		if _, has := ctrl["stream"]; has || 1 != len(ctrl) {
			t.Fatalf("the stream changed the caller's ctrl")
		}
		if 0 == len(explain) {
			t.Fatalf("the caller's explain record was not filled")
		}
	})

	t.Run("unexpected", func(t *testing.T) {
		hook := &admin_user_viewFailHook{
			BaseFeature: sdk.BaseFeature{Version: "0.0.1", Name: "failhook", Active: true}}
		client := sdk.TestSDK(nil, map[string]any{"extend": []any{hook}})

		_, err := client.AdminUserView(nil).List(nil, nil)
		if nil == err || !strings.Contains(err.Error(), "hook failed") {
			t.Fatalf("expected the hook's failure, got %v", err)
		}
		if 0 == hook.unexpected {
			t.Fatalf("PreUnexpected did not fire")
		}

		fired := hook.unexpected
		if _, err := client.AdminUserView(nil).List(nil, map[string]any{"throw": false}); nil != err {
			t.Fatalf("throw false: expected no error, got %v", err)
		}
		if fired == hook.unexpected {
			t.Fatalf("throw false: PreUnexpected did not fire")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.AdminUserView(nil).List(map[string]any{"limit": "x"}, nil)
		if sdkerr, ok := err.(*core.CrackedApiReferenceError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := admin_user_viewBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "admin_user_view." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			for _, _liveKey := range []string{"user01"} {
				if setup.syntheticOnly || setup.idmap[_liveKey] == nil {
					liveMiss(t, admin_user_viewEntityLiveStrict, "Live entity test blocked: needs %s via CRACKED_API_REFERENCE_TEST_ADMIN_USER_VIEW_ENTID", _liveKey)
				}
			}
		}
		client := setup.client
		_ = client

		// CREATE
		adminUserViewRef01Ent := client.AdminUserView(nil)
		adminUserViewRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "admin_user_view"}), "admin_user_view_ref01"))
		adminUserViewRef01Data["user_id"] = setup.idmap["user01"]

		adminUserViewRef01DataResult, err := adminUserViewRef01Ent.Create(adminUserViewRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		adminUserViewRef01Data = core.ToMapAny(entityData(adminUserViewRef01DataResult))
		if adminUserViewRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if adminUserViewRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		adminUserViewRef01Match := map[string]any{}

		adminUserViewRef01ListResult, err := adminUserViewRef01Ent.List(adminUserViewRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		adminUserViewRef01List, adminUserViewRef01ListOk := adminUserViewRef01ListResult.([]any)
		if !adminUserViewRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", adminUserViewRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(adminUserViewRef01List), map[string]any{"id": adminUserViewRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		adminUserViewRef01DataUp0Up := map[string]any{
			"id": adminUserViewRef01Data["id"],
		}

		adminUserViewRef01MarkdefUp0Name := "created_at"
		adminUserViewRef01MarkdefUp0Value := fmt.Sprintf("Mark01-admin_user_view_ref01_%d", setup.now)
		adminUserViewRef01DataUp0Up[adminUserViewRef01MarkdefUp0Name] = adminUserViewRef01MarkdefUp0Value

		adminUserViewRef01ResdataUp0Result, err := adminUserViewRef01Ent.Update(adminUserViewRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		adminUserViewRef01ResdataUp0 := core.ToMapAny(entityData(adminUserViewRef01ResdataUp0Result))
		if adminUserViewRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if adminUserViewRef01ResdataUp0["id"] != adminUserViewRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if adminUserViewRef01ResdataUp0[adminUserViewRef01MarkdefUp0Name] != adminUserViewRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", adminUserViewRef01MarkdefUp0Name, adminUserViewRef01ResdataUp0[adminUserViewRef01MarkdefUp0Name])
		}

		// REMOVE
		adminUserViewRef01MatchRm0 := map[string]any{
			"id": adminUserViewRef01Data["id"],
		}
		_, err = adminUserViewRef01Ent.Remove(adminUserViewRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		adminUserViewRef01MatchRt0 := map[string]any{}

		adminUserViewRef01ListRt0Result, err := adminUserViewRef01Ent.List(adminUserViewRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		adminUserViewRef01ListRt0, adminUserViewRef01ListRt0Ok := adminUserViewRef01ListRt0Result.([]any)
		if !adminUserViewRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", adminUserViewRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(adminUserViewRef01ListRt0), map[string]any{"id": adminUserViewRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func admin_user_viewBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "admin_user_view", "AdminUserViewTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read admin_user_view test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse admin_user_view test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"admin_user_view01", "admin_user_view02", "admin_user_view03", "user01", "user02", "user03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("CRACKED_API_REFERENCE_TEST_ADMIN_USER_VIEW_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CRACKED_API_REFERENCE_TEST_ADMIN_USER_VIEW_ENTID": idmap,
		"CRACKED_API_REFERENCE_TEST_LIVE":      "FALSE",
		"CRACKED_API_REFERENCE_TEST_EXPLAIN":   "FALSE",
		"CRACKED_API_REFERENCE_APIKEY":         "",
		"CRACKED_API_REFERENCE_SERVER_BASE": "",
	})

	idmapResolved := core.ToMapAny(env["CRACKED_API_REFERENCE_TEST_ADMIN_USER_VIEW_ENTID"])
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
