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
const comment_campaignEntityLiveStrict = true


func TestCommentCampaignEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CommentCampaign(nil)
		if ent == nil {
			t.Fatal("expected non-nil CommentCampaignEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.CommentCampaign(nil).Load(map[string]any{"product_id": 1}, nil)
		if sdkerr, ok := err.(*core.CrackedApiReferenceError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := comment_campaignBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "comment_campaign." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			for _, _liveKey := range []string{"product01"} {
				if setup.syntheticOnly || setup.idmap[_liveKey] == nil {
					liveMiss(t, comment_campaignEntityLiveStrict, "Live entity test blocked: needs %s via CRACKED_API_REFERENCE_TEST_COMMENT_CAMPAIGN_ENTID", _liveKey)
				}
			}
		}
		client := setup.client
		_ = client

		// CREATE
		commentCampaignRef01Ent := client.CommentCampaign(nil)
		commentCampaignRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "comment_campaign"}), "comment_campaign_ref01"))
		commentCampaignRef01Data["product_id"] = setup.idmap["product01"]

		commentCampaignRef01DataResult, err := commentCampaignRef01Ent.Create(commentCampaignRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		commentCampaignRef01Data = core.ToMapAny(entityData(commentCampaignRef01DataResult))
		if commentCampaignRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// UPDATE
		commentCampaignRef01DataUp0Up := map[string]any{
		}

		commentCampaignRef01MarkdefUp0Name := "action"
		commentCampaignRef01MarkdefUp0Value := fmt.Sprintf("Mark01-comment_campaign_ref01_%d", setup.now)
		commentCampaignRef01DataUp0Up[commentCampaignRef01MarkdefUp0Name] = commentCampaignRef01MarkdefUp0Value

		commentCampaignRef01ResdataUp0Result, err := commentCampaignRef01Ent.Update(commentCampaignRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		commentCampaignRef01ResdataUp0 := core.ToMapAny(entityData(commentCampaignRef01ResdataUp0Result))
		if commentCampaignRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if commentCampaignRef01ResdataUp0[commentCampaignRef01MarkdefUp0Name] != commentCampaignRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", commentCampaignRef01MarkdefUp0Name, commentCampaignRef01ResdataUp0[commentCampaignRef01MarkdefUp0Name])
		}

		// LOAD
		commentCampaignRef01MatchDt0 := map[string]any{}
		commentCampaignRef01DataDt0Loaded, err := commentCampaignRef01Ent.Load(commentCampaignRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if commentCampaignRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func comment_campaignBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "comment_campaign", "CommentCampaignTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read comment_campaign test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse comment_campaign test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"comment_campaign01", "comment_campaign02", "comment_campaign03", "product01", "product02", "product03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("CRACKED_API_REFERENCE_TEST_COMMENT_CAMPAIGN_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CRACKED_API_REFERENCE_TEST_COMMENT_CAMPAIGN_ENTID": idmap,
		"CRACKED_API_REFERENCE_TEST_LIVE":      "FALSE",
		"CRACKED_API_REFERENCE_TEST_EXPLAIN":   "FALSE",
		"CRACKED_API_REFERENCE_APIKEY":         "",
		"CRACKED_API_REFERENCE_SERVER_BASE": "",
	})

	idmapResolved := core.ToMapAny(env["CRACKED_API_REFERENCE_TEST_COMMENT_CAMPAIGN_ENTID"])
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
