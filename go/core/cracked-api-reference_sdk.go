package core

import (
	"encoding/json"
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/cracked-api-reference-sdk/go/utility/struct"
)

type CrackedApiReferenceSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewCrackedApiReferenceSDK(options map[string]any) *CrackedApiReferenceSDK {
	sdk := &CrackedApiReferenceSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

// The client holds the credential in its options, so a print or a JSON dump
// carries the name alone. Value receivers: a dereferenced client prints the
// same way.
func (sdk CrackedApiReferenceSDK) String() string {
	return "CrackedApiReference " + vs.Jsonify(map[string]any{"name": "CrackedApiReference"},
		map[string]any{"indent": 0})
}

func (sdk CrackedApiReferenceSDK) GoString() string {
	return sdk.String()
}

func (sdk CrackedApiReferenceSDK) MarshalJSON() ([]byte, error) {
	return json.Marshal(map[string]any{"name": "CrackedApiReference"})
}

func (sdk *CrackedApiReferenceSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *CrackedApiReferenceSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *CrackedApiReferenceSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *CrackedApiReferenceSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}
	method = strings.ToUpper(method)

	allowMethodVal := vs.GetPath(options, []any{"allow", "method"})
	if !Allowed(allowMethodVal, method) {
		allowMethod, _ := allowMethodVal.(string)
		return nil, ctx.MakeError("spec_method_allow",
			"Method \""+method+"\" not allowed by SDK option allow.method value: \""+allowMethod+"\"")
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *CrackedApiReferenceSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *CrackedApiReferenceSDK) opAllowed(op string) bool {
	return Allowed(vs.GetPath(sdk.options, []any{"allow", "op"}), op)
}

func (sdk *CrackedApiReferenceSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("CrackedApiReferenceSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *CrackedApiReferenceSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": sdk.cleanErr(sdk.rootctx, err)}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": sdk.cleanErr(ctx, fetchErr)}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		var bodyErr error
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					jsonData = f()
				}
			}
			if unreadable, _ := vs.GetProp(fm, "unreadable").(bool); unreadable {
				var failed error
				if status < 200 || status >= 300 {
					failed = ctx.MakeError("request_status",
						fmt.Sprintf("request: %d: %v", status, vs.GetProp(fm, "statusText")))
				}
				bodyErr = UnreadableBody(ctx, status, headers, vs.GetProp(fm, "body"),
					fetchdef["headers"], failed)
			}
		}

		out := map[string]any{
			"ok":      bodyErr == nil && status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}
		if bodyErr != nil {
			out["err"] = sdk.cleanErr(ctx, bodyErr)
		}
		return out, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

// A raw request returns its error rather than passing it through MakeError.
func (sdk *CrackedApiReferenceSDK) cleanErr(ctx *Context, err error) error {
	if cleaned, ok := sdk.utility.Clean(ctx, err).(error); ok {
		return cleaned
	}
	return err
}

func (sdk *CrackedApiReferenceSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("CrackedApiReferenceSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// Activate returns a Activate entity bound to this client.
// Idiomatic usage: client.Activate(nil).List(nil, nil) or
// client.Activate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) Activate(data map[string]any) CrackedApiReferenceEntity {
	return NewActivateEntityFunc(sdk, data)
}


// ActivateUser returns a ActivateUser entity bound to this client.
// Idiomatic usage: client.ActivateUser(nil).List(nil, nil) or
// client.ActivateUser(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) ActivateUser(data map[string]any) CrackedApiReferenceEntity {
	return NewActivateUserEntityFunc(sdk, data)
}


// ActiveOnboarding returns a ActiveOnboarding entity bound to this client.
// Idiomatic usage: client.ActiveOnboarding(nil).List(nil, nil) or
// client.ActiveOnboarding(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) ActiveOnboarding(data map[string]any) CrackedApiReferenceEntity {
	return NewActiveOnboardingEntityFunc(sdk, data)
}


// Admin returns a Admin entity bound to this client.
// Idiomatic usage: client.Admin(nil).List(nil, nil) or
// client.Admin(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) Admin(data map[string]any) CrackedApiReferenceEntity {
	return NewAdminEntityFunc(sdk, data)
}


// AdminAccountReset returns a AdminAccountReset entity bound to this client.
// Idiomatic usage: client.AdminAccountReset(nil).List(nil, nil) or
// client.AdminAccountReset(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AdminAccountReset(data map[string]any) CrackedApiReferenceEntity {
	return NewAdminAccountResetEntityFunc(sdk, data)
}


// AdminCarousel returns a AdminCarousel entity bound to this client.
// Idiomatic usage: client.AdminCarousel(nil).List(nil, nil) or
// client.AdminCarousel(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AdminCarousel(data map[string]any) CrackedApiReferenceEntity {
	return NewAdminCarouselEntityFunc(sdk, data)
}


// AdminCarouselDemoReview returns a AdminCarouselDemoReview entity bound to this client.
// Idiomatic usage: client.AdminCarouselDemoReview(nil).List(nil, nil) or
// client.AdminCarouselDemoReview(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AdminCarouselDemoReview(data map[string]any) CrackedApiReferenceEntity {
	return NewAdminCarouselDemoReviewEntityFunc(sdk, data)
}


// AdminCustomer returns a AdminCustomer entity bound to this client.
// Idiomatic usage: client.AdminCustomer(nil).List(nil, nil) or
// client.AdminCustomer(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AdminCustomer(data map[string]any) CrackedApiReferenceEntity {
	return NewAdminCustomerEntityFunc(sdk, data)
}


// AdminCustomerSuccess returns a AdminCustomerSuccess entity bound to this client.
// Idiomatic usage: client.AdminCustomerSuccess(nil).List(nil, nil) or
// client.AdminCustomerSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AdminCustomerSuccess(data map[string]any) CrackedApiReferenceEntity {
	return NewAdminCustomerSuccessEntityFunc(sdk, data)
}


// AdminGeneratedVideo returns a AdminGeneratedVideo entity bound to this client.
// Idiomatic usage: client.AdminGeneratedVideo(nil).List(nil, nil) or
// client.AdminGeneratedVideo(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AdminGeneratedVideo(data map[string]any) CrackedApiReferenceEntity {
	return NewAdminGeneratedVideoEntityFunc(sdk, data)
}


// AdminHealthrx returns a AdminHealthrx entity bound to this client.
// Idiomatic usage: client.AdminHealthrx(nil).List(nil, nil) or
// client.AdminHealthrx(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AdminHealthrx(data map[string]any) CrackedApiReferenceEntity {
	return NewAdminHealthrxEntityFunc(sdk, data)
}


// AdminInsight returns a AdminInsight entity bound to this client.
// Idiomatic usage: client.AdminInsight(nil).List(nil, nil) or
// client.AdminInsight(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AdminInsight(data map[string]any) CrackedApiReferenceEntity {
	return NewAdminInsightEntityFunc(sdk, data)
}


// AdminLandingTask returns a AdminLandingTask entity bound to this client.
// Idiomatic usage: client.AdminLandingTask(nil).List(nil, nil) or
// client.AdminLandingTask(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AdminLandingTask(data map[string]any) CrackedApiReferenceEntity {
	return NewAdminLandingTaskEntityFunc(sdk, data)
}


// AdminMetricsSummary returns a AdminMetricsSummary entity bound to this client.
// Idiomatic usage: client.AdminMetricsSummary(nil).List(nil, nil) or
// client.AdminMetricsSummary(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AdminMetricsSummary(data map[string]any) CrackedApiReferenceEntity {
	return NewAdminMetricsSummaryEntityFunc(sdk, data)
}


// AdminPost returns a AdminPost entity bound to this client.
// Idiomatic usage: client.AdminPost(nil).List(nil, nil) or
// client.AdminPost(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AdminPost(data map[string]any) CrackedApiReferenceEntity {
	return NewAdminPostEntityFunc(sdk, data)
}


// AdminRecentSignup returns a AdminRecentSignup entity bound to this client.
// Idiomatic usage: client.AdminRecentSignup(nil).List(nil, nil) or
// client.AdminRecentSignup(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AdminRecentSignup(data map[string]any) CrackedApiReferenceEntity {
	return NewAdminRecentSignupEntityFunc(sdk, data)
}


// AdminSlideshowDiag returns a AdminSlideshowDiag entity bound to this client.
// Idiomatic usage: client.AdminSlideshowDiag(nil).List(nil, nil) or
// client.AdminSlideshowDiag(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AdminSlideshowDiag(data map[string]any) CrackedApiReferenceEntity {
	return NewAdminSlideshowDiagEntityFunc(sdk, data)
}


// AdminSlideshowImport returns a AdminSlideshowImport entity bound to this client.
// Idiomatic usage: client.AdminSlideshowImport(nil).List(nil, nil) or
// client.AdminSlideshowImport(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AdminSlideshowImport(data map[string]any) CrackedApiReferenceEntity {
	return NewAdminSlideshowImportEntityFunc(sdk, data)
}


// AdminUserView returns a AdminUserView entity bound to this client.
// Idiomatic usage: client.AdminUserView(nil).List(nil, nil) or
// client.AdminUserView(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AdminUserView(data map[string]any) CrackedApiReferenceEntity {
	return NewAdminUserViewEntityFunc(sdk, data)
}


// AdminUsersTableItem returns a AdminUsersTableItem entity bound to this client.
// Idiomatic usage: client.AdminUsersTableItem(nil).List(nil, nil) or
// client.AdminUsersTableItem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AdminUsersTableItem(data map[string]any) CrackedApiReferenceEntity {
	return NewAdminUsersTableItemEntityFunc(sdk, data)
}


// AdminVideoRemixer returns a AdminVideoRemixer entity bound to this client.
// Idiomatic usage: client.AdminVideoRemixer(nil).List(nil, nil) or
// client.AdminVideoRemixer(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AdminVideoRemixer(data map[string]any) CrackedApiReferenceEntity {
	return NewAdminVideoRemixerEntityFunc(sdk, data)
}


// AdvanceStep returns a AdvanceStep entity bound to this client.
// Idiomatic usage: client.AdvanceStep(nil).List(nil, nil) or
// client.AdvanceStep(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AdvanceStep(data map[string]any) CrackedApiReferenceEntity {
	return NewAdvanceStepEntityFunc(sdk, data)
}


// Agent returns a Agent entity bound to this client.
// Idiomatic usage: client.Agent(nil).List(nil, nil) or
// client.Agent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) Agent(data map[string]any) CrackedApiReferenceEntity {
	return NewAgentEntityFunc(sdk, data)
}


// AgentAccessCustomersHealth returns a AgentAccessCustomersHealth entity bound to this client.
// Idiomatic usage: client.AgentAccessCustomersHealth(nil).List(nil, nil) or
// client.AgentAccessCustomersHealth(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AgentAccessCustomersHealth(data map[string]any) CrackedApiReferenceEntity {
	return NewAgentAccessCustomersHealthEntityFunc(sdk, data)
}


// AgentAccessOverview returns a AgentAccessOverview entity bound to this client.
// Idiomatic usage: client.AgentAccessOverview(nil).List(nil, nil) or
// client.AgentAccessOverview(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AgentAccessOverview(data map[string]any) CrackedApiReferenceEntity {
	return NewAgentAccessOverviewEntityFunc(sdk, data)
}


// AgentAccessPhilHourlyNotification returns a AgentAccessPhilHourlyNotification entity bound to this client.
// Idiomatic usage: client.AgentAccessPhilHourlyNotification(nil).List(nil, nil) or
// client.AgentAccessPhilHourlyNotification(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AgentAccessPhilHourlyNotification(data map[string]any) CrackedApiReferenceEntity {
	return NewAgentAccessPhilHourlyNotificationEntityFunc(sdk, data)
}


// AgentAccessPhilStatsRefresh returns a AgentAccessPhilStatsRefresh entity bound to this client.
// Idiomatic usage: client.AgentAccessPhilStatsRefresh(nil).List(nil, nil) or
// client.AgentAccessPhilStatsRefresh(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AgentAccessPhilStatsRefresh(data map[string]any) CrackedApiReferenceEntity {
	return NewAgentAccessPhilStatsRefreshEntityFunc(sdk, data)
}


// AgentAccessPhilVideo returns a AgentAccessPhilVideo entity bound to this client.
// Idiomatic usage: client.AgentAccessPhilVideo(nil).List(nil, nil) or
// client.AgentAccessPhilVideo(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AgentAccessPhilVideo(data map[string]any) CrackedApiReferenceEntity {
	return NewAgentAccessPhilVideoEntityFunc(sdk, data)
}


// AgentAccessUserAgent returns a AgentAccessUserAgent entity bound to this client.
// Idiomatic usage: client.AgentAccessUserAgent(nil).List(nil, nil) or
// client.AgentAccessUserAgent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AgentAccessUserAgent(data map[string]any) CrackedApiReferenceEntity {
	return NewAgentAccessUserAgentEntityFunc(sdk, data)
}


// AgentAccessUserPhoneFarm returns a AgentAccessUserPhoneFarm entity bound to this client.
// Idiomatic usage: client.AgentAccessUserPhoneFarm(nil).List(nil, nil) or
// client.AgentAccessUserPhoneFarm(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AgentAccessUserPhoneFarm(data map[string]any) CrackedApiReferenceEntity {
	return NewAgentAccessUserPhoneFarmEntityFunc(sdk, data)
}


// AgentAccessUserPost returns a AgentAccessUserPost entity bound to this client.
// Idiomatic usage: client.AgentAccessUserPost(nil).List(nil, nil) or
// client.AgentAccessUserPost(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AgentAccessUserPost(data map[string]any) CrackedApiReferenceEntity {
	return NewAgentAccessUserPostEntityFunc(sdk, data)
}


// AgentAccessUserSummary returns a AgentAccessUserSummary entity bound to this client.
// Idiomatic usage: client.AgentAccessUserSummary(nil).List(nil, nil) or
// client.AgentAccessUserSummary(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AgentAccessUserSummary(data map[string]any) CrackedApiReferenceEntity {
	return NewAgentAccessUserSummaryEntityFunc(sdk, data)
}


// AgentAccessUserVideo returns a AgentAccessUserVideo entity bound to this client.
// Idiomatic usage: client.AgentAccessUserVideo(nil).List(nil, nil) or
// client.AgentAccessUserVideo(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AgentAccessUserVideo(data map[string]any) CrackedApiReferenceEntity {
	return NewAgentAccessUserVideoEntityFunc(sdk, data)
}


// AgentAccessUserWinningAd returns a AgentAccessUserWinningAd entity bound to this client.
// Idiomatic usage: client.AgentAccessUserWinningAd(nil).List(nil, nil) or
// client.AgentAccessUserWinningAd(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AgentAccessUserWinningAd(data map[string]any) CrackedApiReferenceEntity {
	return NewAgentAccessUserWinningAdEntityFunc(sdk, data)
}


// AgentAccessWinningAdsSummary returns a AgentAccessWinningAdsSummary entity bound to this client.
// Idiomatic usage: client.AgentAccessWinningAdsSummary(nil).List(nil, nil) or
// client.AgentAccessWinningAdsSummary(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AgentAccessWinningAdsSummary(data map[string]any) CrackedApiReferenceEntity {
	return NewAgentAccessWinningAdsSummaryEntityFunc(sdk, data)
}


// AgentDetail returns a AgentDetail entity bound to this client.
// Idiomatic usage: client.AgentDetail(nil).List(nil, nil) or
// client.AgentDetail(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AgentDetail(data map[string]any) CrackedApiReferenceEntity {
	return NewAgentDetailEntityFunc(sdk, data)
}


// AgentHealth returns a AgentHealth entity bound to this client.
// Idiomatic usage: client.AgentHealth(nil).List(nil, nil) or
// client.AgentHealth(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AgentHealth(data map[string]any) CrackedApiReferenceEntity {
	return NewAgentHealthEntityFunc(sdk, data)
}


// AgentHealthCustomerOption returns a AgentHealthCustomerOption entity bound to this client.
// Idiomatic usage: client.AgentHealthCustomerOption(nil).List(nil, nil) or
// client.AgentHealthCustomerOption(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AgentHealthCustomerOption(data map[string]any) CrackedApiReferenceEntity {
	return NewAgentHealthCustomerOptionEntityFunc(sdk, data)
}


// AgentHealthDetail returns a AgentHealthDetail entity bound to this client.
// Idiomatic usage: client.AgentHealthDetail(nil).List(nil, nil) or
// client.AgentHealthDetail(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AgentHealthDetail(data map[string]any) CrackedApiReferenceEntity {
	return NewAgentHealthDetailEntityFunc(sdk, data)
}


// AgentPost returns a AgentPost entity bound to this client.
// Idiomatic usage: client.AgentPost(nil).List(nil, nil) or
// client.AgentPost(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AgentPost(data map[string]any) CrackedApiReferenceEntity {
	return NewAgentPostEntityFunc(sdk, data)
}


// AgentStat returns a AgentStat entity bound to this client.
// Idiomatic usage: client.AgentStat(nil).List(nil, nil) or
// client.AgentStat(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AgentStat(data map[string]any) CrackedApiReferenceEntity {
	return NewAgentStatEntityFunc(sdk, data)
}


// AgentSummary returns a AgentSummary entity bound to this client.
// Idiomatic usage: client.AgentSummary(nil).List(nil, nil) or
// client.AgentSummary(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AgentSummary(data map[string]any) CrackedApiReferenceEntity {
	return NewAgentSummaryEntityFunc(sdk, data)
}


// AgentsSummary returns a AgentsSummary entity bound to this client.
// Idiomatic usage: client.AgentsSummary(nil).List(nil, nil) or
// client.AgentsSummary(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AgentsSummary(data map[string]any) CrackedApiReferenceEntity {
	return NewAgentsSummaryEntityFunc(sdk, data)
}


// AnalysisStatus returns a AnalysisStatus entity bound to this client.
// Idiomatic usage: client.AnalysisStatus(nil).List(nil, nil) or
// client.AnalysisStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AnalysisStatus(data map[string]any) CrackedApiReferenceEntity {
	return NewAnalysisStatusEntityFunc(sdk, data)
}


// AnalyticsPost returns a AnalyticsPost entity bound to this client.
// Idiomatic usage: client.AnalyticsPost(nil).List(nil, nil) or
// client.AnalyticsPost(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AnalyticsPost(data map[string]any) CrackedApiReferenceEntity {
	return NewAnalyticsPostEntityFunc(sdk, data)
}


// AnalyzeProduct returns a AnalyzeProduct entity bound to this client.
// Idiomatic usage: client.AnalyzeProduct(nil).List(nil, nil) or
// client.AnalyzeProduct(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AnalyzeProduct(data map[string]any) CrackedApiReferenceEntity {
	return NewAnalyzeProductEntityFunc(sdk, data)
}


// AssignAgent returns a AssignAgent entity bound to this client.
// Idiomatic usage: client.AssignAgent(nil).List(nil, nil) or
// client.AssignAgent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AssignAgent(data map[string]any) CrackedApiReferenceEntity {
	return NewAssignAgentEntityFunc(sdk, data)
}


// Auth returns a Auth entity bound to this client.
// Idiomatic usage: client.Auth(nil).List(nil, nil) or
// client.Auth(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) Auth(data map[string]any) CrackedApiReferenceEntity {
	return NewAuthEntityFunc(sdk, data)
}


// AutoScheduleSetting returns a AutoScheduleSetting entity bound to this client.
// Idiomatic usage: client.AutoScheduleSetting(nil).List(nil, nil) or
// client.AutoScheduleSetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) AutoScheduleSetting(data map[string]any) CrackedApiReferenceEntity {
	return NewAutoScheduleSettingEntityFunc(sdk, data)
}


// BulkTikTokStatsUpdate returns a BulkTikTokStatsUpdate entity bound to this client.
// Idiomatic usage: client.BulkTikTokStatsUpdate(nil).List(nil, nil) or
// client.BulkTikTokStatsUpdate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) BulkTikTokStatsUpdate(data map[string]any) CrackedApiReferenceEntity {
	return NewBulkTikTokStatsUpdateEntityFunc(sdk, data)
}


// Carousel returns a Carousel entity bound to this client.
// Idiomatic usage: client.Carousel(nil).List(nil, nil) or
// client.Carousel(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) Carousel(data map[string]any) CrackedApiReferenceEntity {
	return NewCarouselEntityFunc(sdk, data)
}


// CarouselAgentDetail returns a CarouselAgentDetail entity bound to this client.
// Idiomatic usage: client.CarouselAgentDetail(nil).List(nil, nil) or
// client.CarouselAgentDetail(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) CarouselAgentDetail(data map[string]any) CrackedApiReferenceEntity {
	return NewCarouselAgentDetailEntityFunc(sdk, data)
}


// CarouselStatus returns a CarouselStatus entity bound to this client.
// Idiomatic usage: client.CarouselStatus(nil).List(nil, nil) or
// client.CarouselStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) CarouselStatus(data map[string]any) CrackedApiReferenceEntity {
	return NewCarouselStatusEntityFunc(sdk, data)
}


// Chat returns a Chat entity bound to this client.
// Idiomatic usage: client.Chat(nil).List(nil, nil) or
// client.Chat(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) Chat(data map[string]any) CrackedApiReferenceEntity {
	return NewChatEntityFunc(sdk, data)
}


// ChatHistory returns a ChatHistory entity bound to this client.
// Idiomatic usage: client.ChatHistory(nil).List(nil, nil) or
// client.ChatHistory(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) ChatHistory(data map[string]any) CrackedApiReferenceEntity {
	return NewChatHistoryEntityFunc(sdk, data)
}


// ChatSession returns a ChatSession entity bound to this client.
// Idiomatic usage: client.ChatSession(nil).List(nil, nil) or
// client.ChatSession(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) ChatSession(data map[string]any) CrackedApiReferenceEntity {
	return NewChatSessionEntityFunc(sdk, data)
}


// Comment returns a Comment entity bound to this client.
// Idiomatic usage: client.Comment(nil).List(nil, nil) or
// client.Comment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) Comment(data map[string]any) CrackedApiReferenceEntity {
	return NewCommentEntityFunc(sdk, data)
}


// CommentCampaign returns a CommentCampaign entity bound to this client.
// Idiomatic usage: client.CommentCampaign(nil).List(nil, nil) or
// client.CommentCampaign(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) CommentCampaign(data map[string]any) CrackedApiReferenceEntity {
	return NewCommentCampaignEntityFunc(sdk, data)
}


// CompleteChatCheckout returns a CompleteChatCheckout entity bound to this client.
// Idiomatic usage: client.CompleteChatCheckout(nil).List(nil, nil) or
// client.CompleteChatCheckout(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) CompleteChatCheckout(data map[string]any) CrackedApiReferenceEntity {
	return NewCompleteChatCheckoutEntityFunc(sdk, data)
}


// CreateBlackoutSora2Video returns a CreateBlackoutSora2Video entity bound to this client.
// Idiomatic usage: client.CreateBlackoutSora2Video(nil).List(nil, nil) or
// client.CreateBlackoutSora2Video(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) CreateBlackoutSora2Video(data map[string]any) CrackedApiReferenceEntity {
	return NewCreateBlackoutSora2VideoEntityFunc(sdk, data)
}


// CreateCarousel returns a CreateCarousel entity bound to this client.
// Idiomatic usage: client.CreateCarousel(nil).List(nil, nil) or
// client.CreateCarousel(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) CreateCarousel(data map[string]any) CrackedApiReferenceEntity {
	return NewCreateCarouselEntityFunc(sdk, data)
}


// CreateProduct returns a CreateProduct entity bound to this client.
// Idiomatic usage: client.CreateProduct(nil).List(nil, nil) or
// client.CreateProduct(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) CreateProduct(data map[string]any) CrackedApiReferenceEntity {
	return NewCreateProductEntityFunc(sdk, data)
}


// CreateResetProductV6 returns a CreateResetProductV6 entity bound to this client.
// Idiomatic usage: client.CreateResetProductV6(nil).List(nil, nil) or
// client.CreateResetProductV6(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) CreateResetProductV6(data map[string]any) CrackedApiReferenceEntity {
	return NewCreateResetProductV6EntityFunc(sdk, data)
}


// CreateSora2Video returns a CreateSora2Video entity bound to this client.
// Idiomatic usage: client.CreateSora2Video(nil).List(nil, nil) or
// client.CreateSora2Video(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) CreateSora2Video(data map[string]any) CrackedApiReferenceEntity {
	return NewCreateSora2VideoEntityFunc(sdk, data)
}


// CreateVariation returns a CreateVariation entity bound to this client.
// Idiomatic usage: client.CreateVariation(nil).List(nil, nil) or
// client.CreateVariation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) CreateVariation(data map[string]any) CrackedApiReferenceEntity {
	return NewCreateVariationEntityFunc(sdk, data)
}


// Customer returns a Customer entity bound to this client.
// Idiomatic usage: client.Customer(nil).List(nil, nil) or
// client.Customer(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) Customer(data map[string]any) CrackedApiReferenceEntity {
	return NewCustomerEntityFunc(sdk, data)
}


// CustomerHealth returns a CustomerHealth entity bound to this client.
// Idiomatic usage: client.CustomerHealth(nil).List(nil, nil) or
// client.CustomerHealth(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) CustomerHealth(data map[string]any) CrackedApiReferenceEntity {
	return NewCustomerHealthEntityFunc(sdk, data)
}


// CustomerHealthAllCustomersItem returns a CustomerHealthAllCustomersItem entity bound to this client.
// Idiomatic usage: client.CustomerHealthAllCustomersItem(nil).List(nil, nil) or
// client.CustomerHealthAllCustomersItem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) CustomerHealthAllCustomersItem(data map[string]any) CrackedApiReferenceEntity {
	return NewCustomerHealthAllCustomersItemEntityFunc(sdk, data)
}


// CustomerHealthViewsSummary returns a CustomerHealthViewsSummary entity bound to this client.
// Idiomatic usage: client.CustomerHealthViewsSummary(nil).List(nil, nil) or
// client.CustomerHealthViewsSummary(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) CustomerHealthViewsSummary(data map[string]any) CrackedApiReferenceEntity {
	return NewCustomerHealthViewsSummaryEntityFunc(sdk, data)
}


// Daily returns a Daily entity bound to this client.
// Idiomatic usage: client.Daily(nil).List(nil, nil) or
// client.Daily(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) Daily(data map[string]any) CrackedApiReferenceEntity {
	return NewDailyEntityFunc(sdk, data)
}


// DailyStatus returns a DailyStatus entity bound to this client.
// Idiomatic usage: client.DailyStatus(nil).List(nil, nil) or
// client.DailyStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) DailyStatus(data map[string]any) CrackedApiReferenceEntity {
	return NewDailyStatusEntityFunc(sdk, data)
}


// DedicatedAgentsDashboard returns a DedicatedAgentsDashboard entity bound to this client.
// Idiomatic usage: client.DedicatedAgentsDashboard(nil).List(nil, nil) or
// client.DedicatedAgentsDashboard(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) DedicatedAgentsDashboard(data map[string]any) CrackedApiReferenceEntity {
	return NewDedicatedAgentsDashboardEntityFunc(sdk, data)
}


// EnterpriseAgent returns a EnterpriseAgent entity bound to this client.
// Idiomatic usage: client.EnterpriseAgent(nil).List(nil, nil) or
// client.EnterpriseAgent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) EnterpriseAgent(data map[string]any) CrackedApiReferenceEntity {
	return NewEnterpriseAgentEntityFunc(sdk, data)
}


// EnterpriseProduct returns a EnterpriseProduct entity bound to this client.
// Idiomatic usage: client.EnterpriseProduct(nil).List(nil, nil) or
// client.EnterpriseProduct(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) EnterpriseProduct(data map[string]any) CrackedApiReferenceEntity {
	return NewEnterpriseProductEntityFunc(sdk, data)
}


// ExactAvailability returns a ExactAvailability entity bound to this client.
// Idiomatic usage: client.ExactAvailability(nil).List(nil, nil) or
// client.ExactAvailability(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) ExactAvailability(data map[string]any) CrackedApiReferenceEntity {
	return NewExactAvailabilityEntityFunc(sdk, data)
}


// ExactFormula returns a ExactFormula entity bound to this client.
// Idiomatic usage: client.ExactFormula(nil).List(nil, nil) or
// client.ExactFormula(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) ExactFormula(data map[string]any) CrackedApiReferenceEntity {
	return NewExactFormulaEntityFunc(sdk, data)
}


// ExtractV2 returns a ExtractV2 entity bound to this client.
// Idiomatic usage: client.ExtractV2(nil).List(nil, nil) or
// client.ExtractV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) ExtractV2(data map[string]any) CrackedApiReferenceEntity {
	return NewExtractV2EntityFunc(sdk, data)
}


// FailedPost returns a FailedPost entity bound to this client.
// Idiomatic usage: client.FailedPost(nil).List(nil, nil) or
// client.FailedPost(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) FailedPost(data map[string]any) CrackedApiReferenceEntity {
	return NewFailedPostEntityFunc(sdk, data)
}


// File returns a File entity bound to this client.
// Idiomatic usage: client.File(nil).List(nil, nil) or
// client.File(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) File(data map[string]any) CrackedApiReferenceEntity {
	return NewFileEntityFunc(sdk, data)
}


// GenerateBlackoutSora2Prompt returns a GenerateBlackoutSora2Prompt entity bound to this client.
// Idiomatic usage: client.GenerateBlackoutSora2Prompt(nil).List(nil, nil) or
// client.GenerateBlackoutSora2Prompt(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) GenerateBlackoutSora2Prompt(data map[string]any) CrackedApiReferenceEntity {
	return NewGenerateBlackoutSora2PromptEntityFunc(sdk, data)
}


// GeneratePomelliDemo returns a GeneratePomelliDemo entity bound to this client.
// Idiomatic usage: client.GeneratePomelliDemo(nil).List(nil, nil) or
// client.GeneratePomelliDemo(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) GeneratePomelliDemo(data map[string]any) CrackedApiReferenceEntity {
	return NewGeneratePomelliDemoEntityFunc(sdk, data)
}


// GeneratePrompt returns a GeneratePrompt entity bound to this client.
// Idiomatic usage: client.GeneratePrompt(nil).List(nil, nil) or
// client.GeneratePrompt(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) GeneratePrompt(data map[string]any) CrackedApiReferenceEntity {
	return NewGeneratePromptEntityFunc(sdk, data)
}


// GenerateSora2Prompt returns a GenerateSora2Prompt entity bound to this client.
// Idiomatic usage: client.GenerateSora2Prompt(nil).List(nil, nil) or
// client.GenerateSora2Prompt(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) GenerateSora2Prompt(data map[string]any) CrackedApiReferenceEntity {
	return NewGenerateSora2PromptEntityFunc(sdk, data)
}


// Healthrx returns a Healthrx entity bound to this client.
// Idiomatic usage: client.Healthrx(nil).List(nil, nil) or
// client.Healthrx(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) Healthrx(data map[string]any) CrackedApiReferenceEntity {
	return NewHealthrxEntityFunc(sdk, data)
}


// InitResetProductV6 returns a InitResetProductV6 entity bound to this client.
// Idiomatic usage: client.InitResetProductV6(nil).List(nil, nil) or
// client.InitResetProductV6(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) InitResetProductV6(data map[string]any) CrackedApiReferenceEntity {
	return NewInitResetProductV6EntityFunc(sdk, data)
}


// Iri returns a Iri entity bound to this client.
// Idiomatic usage: client.Iri(nil).List(nil, nil) or
// client.Iri(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) Iri(data map[string]any) CrackedApiReferenceEntity {
	return NewIriEntityFunc(sdk, data)
}


// IrisCapability returns a IrisCapability entity bound to this client.
// Idiomatic usage: client.IrisCapability(nil).List(nil, nil) or
// client.IrisCapability(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) IrisCapability(data map[string]any) CrackedApiReferenceEntity {
	return NewIrisCapabilityEntityFunc(sdk, data)
}


// IrisChat returns a IrisChat entity bound to this client.
// Idiomatic usage: client.IrisChat(nil).List(nil, nil) or
// client.IrisChat(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) IrisChat(data map[string]any) CrackedApiReferenceEntity {
	return NewIrisChatEntityFunc(sdk, data)
}


// IrisConnector returns a IrisConnector entity bound to this client.
// Idiomatic usage: client.IrisConnector(nil).List(nil, nil) or
// client.IrisConnector(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) IrisConnector(data map[string]any) CrackedApiReferenceEntity {
	return NewIrisConnectorEntityFunc(sdk, data)
}


// IrisStatus returns a IrisStatus entity bound to this client.
// Idiomatic usage: client.IrisStatus(nil).List(nil, nil) or
// client.IrisStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) IrisStatus(data map[string]any) CrackedApiReferenceEntity {
	return NewIrisStatusEntityFunc(sdk, data)
}


// IrisTask returns a IrisTask entity bound to this client.
// Idiomatic usage: client.IrisTask(nil).List(nil, nil) or
// client.IrisTask(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) IrisTask(data map[string]any) CrackedApiReferenceEntity {
	return NewIrisTaskEntityFunc(sdk, data)
}


// IrisUsage returns a IrisUsage entity bound to this client.
// Idiomatic usage: client.IrisUsage(nil).List(nil, nil) or
// client.IrisUsage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) IrisUsage(data map[string]any) CrackedApiReferenceEntity {
	return NewIrisUsageEntityFunc(sdk, data)
}


// Landing returns a Landing entity bound to this client.
// Idiomatic usage: client.Landing(nil).List(nil, nil) or
// client.Landing(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) Landing(data map[string]any) CrackedApiReferenceEntity {
	return NewLandingEntityFunc(sdk, data)
}


// LandingStat returns a LandingStat entity bound to this client.
// Idiomatic usage: client.LandingStat(nil).List(nil, nil) or
// client.LandingStat(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) LandingStat(data map[string]any) CrackedApiReferenceEntity {
	return NewLandingStatEntityFunc(sdk, data)
}


// LandingStatus returns a LandingStatus entity bound to this client.
// Idiomatic usage: client.LandingStatus(nil).List(nil, nil) or
// client.LandingStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) LandingStatus(data map[string]any) CrackedApiReferenceEntity {
	return NewLandingStatusEntityFunc(sdk, data)
}


// LinkInBio returns a LinkInBio entity bound to this client.
// Idiomatic usage: client.LinkInBio(nil).List(nil, nil) or
// client.LinkInBio(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) LinkInBio(data map[string]any) CrackedApiReferenceEntity {
	return NewLinkInBioEntityFunc(sdk, data)
}


// LinkInDm returns a LinkInDm entity bound to this client.
// Idiomatic usage: client.LinkInDm(nil).List(nil, nil) or
// client.LinkInDm(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) LinkInDm(data map[string]any) CrackedApiReferenceEntity {
	return NewLinkInDmEntityFunc(sdk, data)
}


// LinkInPost returns a LinkInPost entity bound to this client.
// Idiomatic usage: client.LinkInPost(nil).List(nil, nil) or
// client.LinkInPost(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) LinkInPost(data map[string]any) CrackedApiReferenceEntity {
	return NewLinkInPostEntityFunc(sdk, data)
}


// LinkUser returns a LinkUser entity bound to this client.
// Idiomatic usage: client.LinkUser(nil).List(nil, nil) or
// client.LinkUser(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) LinkUser(data map[string]any) CrackedApiReferenceEntity {
	return NewLinkUserEntityFunc(sdk, data)
}


// MediaAsset returns a MediaAsset entity bound to this client.
// Idiomatic usage: client.MediaAsset(nil).List(nil, nil) or
// client.MediaAsset(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) MediaAsset(data map[string]any) CrackedApiReferenceEntity {
	return NewMediaAssetEntityFunc(sdk, data)
}


// Men returns a Men entity bound to this client.
// Idiomatic usage: client.Men(nil).List(nil, nil) or
// client.Men(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) Men(data map[string]any) CrackedApiReferenceEntity {
	return NewMenEntityFunc(sdk, data)
}


// Microdrama returns a Microdrama entity bound to this client.
// Idiomatic usage: client.Microdrama(nil).List(nil, nil) or
// client.Microdrama(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) Microdrama(data map[string]any) CrackedApiReferenceEntity {
	return NewMicrodramaEntityFunc(sdk, data)
}


// MicrohubPublic returns a MicrohubPublic entity bound to this client.
// Idiomatic usage: client.MicrohubPublic(nil).List(nil, nil) or
// client.MicrohubPublic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) MicrohubPublic(data map[string]any) CrackedApiReferenceEntity {
	return NewMicrohubPublicEntityFunc(sdk, data)
}


// OnboardingStatus returns a OnboardingStatus entity bound to this client.
// Idiomatic usage: client.OnboardingStatus(nil).List(nil, nil) or
// client.OnboardingStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) OnboardingStatus(data map[string]any) CrackedApiReferenceEntity {
	return NewOnboardingStatusEntityFunc(sdk, data)
}


// OnboardingV6 returns a OnboardingV6 entity bound to this client.
// Idiomatic usage: client.OnboardingV6(nil).List(nil, nil) or
// client.OnboardingV6(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) OnboardingV6(data map[string]any) CrackedApiReferenceEntity {
	return NewOnboardingV6EntityFunc(sdk, data)
}


// PaidUser returns a PaidUser entity bound to this client.
// Idiomatic usage: client.PaidUser(nil).List(nil, nil) or
// client.PaidUser(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) PaidUser(data map[string]any) CrackedApiReferenceEntity {
	return NewPaidUserEntityFunc(sdk, data)
}


// Pexel returns a Pexel entity bound to this client.
// Idiomatic usage: client.Pexel(nil).List(nil, nil) or
// client.Pexel(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) Pexel(data map[string]any) CrackedApiReferenceEntity {
	return NewPexelEntityFunc(sdk, data)
}


// PhoneAdminAvailableAgentSource returns a PhoneAdminAvailableAgentSource entity bound to this client.
// Idiomatic usage: client.PhoneAdminAvailableAgentSource(nil).List(nil, nil) or
// client.PhoneAdminAvailableAgentSource(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) PhoneAdminAvailableAgentSource(data map[string]any) CrackedApiReferenceEntity {
	return NewPhoneAdminAvailableAgentSourceEntityFunc(sdk, data)
}


// Product returns a Product entity bound to this client.
// Idiomatic usage: client.Product(nil).List(nil, nil) or
// client.Product(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) Product(data map[string]any) CrackedApiReferenceEntity {
	return NewProductEntityFunc(sdk, data)
}


// ProductDashboard returns a ProductDashboard entity bound to this client.
// Idiomatic usage: client.ProductDashboard(nil).List(nil, nil) or
// client.ProductDashboard(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) ProductDashboard(data map[string]any) CrackedApiReferenceEntity {
	return NewProductDashboardEntityFunc(sdk, data)
}


// ProductDashboardView returns a ProductDashboardView entity bound to this client.
// Idiomatic usage: client.ProductDashboardView(nil).List(nil, nil) or
// client.ProductDashboardView(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) ProductDashboardView(data map[string]any) CrackedApiReferenceEntity {
	return NewProductDashboardViewEntityFunc(sdk, data)
}


// ProductDemo returns a ProductDemo entity bound to this client.
// Idiomatic usage: client.ProductDemo(nil).List(nil, nil) or
// client.ProductDemo(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) ProductDemo(data map[string]any) CrackedApiReferenceEntity {
	return NewProductDemoEntityFunc(sdk, data)
}


// ProductLanding returns a ProductLanding entity bound to this client.
// Idiomatic usage: client.ProductLanding(nil).List(nil, nil) or
// client.ProductLanding(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) ProductLanding(data map[string]any) CrackedApiReferenceEntity {
	return NewProductLandingEntityFunc(sdk, data)
}


// PublicResumeStatus returns a PublicResumeStatus entity bound to this client.
// Idiomatic usage: client.PublicResumeStatus(nil).List(nil, nil) or
// client.PublicResumeStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) PublicResumeStatus(data map[string]any) CrackedApiReferenceEntity {
	return NewPublicResumeStatusEntityFunc(sdk, data)
}


// ReRollVideo returns a ReRollVideo entity bound to this client.
// Idiomatic usage: client.ReRollVideo(nil).List(nil, nil) or
// client.ReRollVideo(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) ReRollVideo(data map[string]any) CrackedApiReferenceEntity {
	return NewReRollVideoEntityFunc(sdk, data)
}


// ReadRootGet returns a ReadRootGet entity bound to this client.
// Idiomatic usage: client.ReadRootGet(nil).List(nil, nil) or
// client.ReadRootGet(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) ReadRootGet(data map[string]any) CrackedApiReferenceEntity {
	return NewReadRootGetEntityFunc(sdk, data)
}


// RecordDemoBooked returns a RecordDemoBooked entity bound to this client.
// Idiomatic usage: client.RecordDemoBooked(nil).List(nil, nil) or
// client.RecordDemoBooked(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) RecordDemoBooked(data map[string]any) CrackedApiReferenceEntity {
	return NewRecordDemoBookedEntityFunc(sdk, data)
}


// RefreshStat returns a RefreshStat entity bound to this client.
// Idiomatic usage: client.RefreshStat(nil).List(nil, nil) or
// client.RefreshStat(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) RefreshStat(data map[string]any) CrackedApiReferenceEntity {
	return NewRefreshStatEntityFunc(sdk, data)
}


// RemixerClipper returns a RemixerClipper entity bound to this client.
// Idiomatic usage: client.RemixerClipper(nil).List(nil, nil) or
// client.RemixerClipper(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) RemixerClipper(data map[string]any) CrackedApiReferenceEntity {
	return NewRemixerClipperEntityFunc(sdk, data)
}


// ResetProduct returns a ResetProduct entity bound to this client.
// Idiomatic usage: client.ResetProduct(nil).List(nil, nil) or
// client.ResetProduct(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) ResetProduct(data map[string]any) CrackedApiReferenceEntity {
	return NewResetProductEntityFunc(sdk, data)
}


// RetryWebsiteScrape returns a RetryWebsiteScrape entity bound to this client.
// Idiomatic usage: client.RetryWebsiteScrape(nil).List(nil, nil) or
// client.RetryWebsiteScrape(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) RetryWebsiteScrape(data map[string]any) CrackedApiReferenceEntity {
	return NewRetryWebsiteScrapeEntityFunc(sdk, data)
}


// SaveSurvey returns a SaveSurvey entity bound to this client.
// Idiomatic usage: client.SaveSurvey(nil).List(nil, nil) or
// client.SaveSurvey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) SaveSurvey(data map[string]any) CrackedApiReferenceEntity {
	return NewSaveSurveyEntityFunc(sdk, data)
}


// ScanSocial returns a ScanSocial entity bound to this client.
// Idiomatic usage: client.ScanSocial(nil).List(nil, nil) or
// client.ScanSocial(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) ScanSocial(data map[string]any) CrackedApiReferenceEntity {
	return NewScanSocialEntityFunc(sdk, data)
}


// ScanSocialsPublic returns a ScanSocialsPublic entity bound to this client.
// Idiomatic usage: client.ScanSocialsPublic(nil).List(nil, nil) or
// client.ScanSocialsPublic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) ScanSocialsPublic(data map[string]any) CrackedApiReferenceEntity {
	return NewScanSocialsPublicEntityFunc(sdk, data)
}


// ScanSocialsStatus returns a ScanSocialsStatus entity bound to this client.
// Idiomatic usage: client.ScanSocialsStatus(nil).List(nil, nil) or
// client.ScanSocialsStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) ScanSocialsStatus(data map[string]any) CrackedApiReferenceEntity {
	return NewScanSocialsStatusEntityFunc(sdk, data)
}


// ScheduleV2 returns a ScheduleV2 entity bound to this client.
// Idiomatic usage: client.ScheduleV2(nil).List(nil, nil) or
// client.ScheduleV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) ScheduleV2(data map[string]any) CrackedApiReferenceEntity {
	return NewScheduleV2EntityFunc(sdk, data)
}


// Scrape returns a Scrape entity bound to this client.
// Idiomatic usage: client.Scrape(nil).List(nil, nil) or
// client.Scrape(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) Scrape(data map[string]any) CrackedApiReferenceEntity {
	return NewScrapeEntityFunc(sdk, data)
}


// ScrapeWebsitePublic returns a ScrapeWebsitePublic entity bound to this client.
// Idiomatic usage: client.ScrapeWebsitePublic(nil).List(nil, nil) or
// client.ScrapeWebsitePublic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) ScrapeWebsitePublic(data map[string]any) CrackedApiReferenceEntity {
	return NewScrapeWebsitePublicEntityFunc(sdk, data)
}


// ScrapedData returns a ScrapedData entity bound to this client.
// Idiomatic usage: client.ScrapedData(nil).List(nil, nil) or
// client.ScrapedData(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) ScrapedData(data map[string]any) CrackedApiReferenceEntity {
	return NewScrapedDataEntityFunc(sdk, data)
}


// ScrapingStatus returns a ScrapingStatus entity bound to this client.
// Idiomatic usage: client.ScrapingStatus(nil).List(nil, nil) or
// client.ScrapingStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) ScrapingStatus(data map[string]any) CrackedApiReferenceEntity {
	return NewScrapingStatusEntityFunc(sdk, data)
}


// SelfServeActivate returns a SelfServeActivate entity bound to this client.
// Idiomatic usage: client.SelfServeActivate(nil).List(nil, nil) or
// client.SelfServeActivate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) SelfServeActivate(data map[string]any) CrackedApiReferenceEntity {
	return NewSelfServeActivateEntityFunc(sdk, data)
}


// Seo returns a Seo entity bound to this client.
// Idiomatic usage: client.Seo(nil).List(nil, nil) or
// client.Seo(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) Seo(data map[string]any) CrackedApiReferenceEntity {
	return NewSeoEntityFunc(sdk, data)
}


// SeoAiMention returns a SeoAiMention entity bound to this client.
// Idiomatic usage: client.SeoAiMention(nil).List(nil, nil) or
// client.SeoAiMention(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) SeoAiMention(data map[string]any) CrackedApiReferenceEntity {
	return NewSeoAiMentionEntityFunc(sdk, data)
}


// SeoBacklink returns a SeoBacklink entity bound to this client.
// Idiomatic usage: client.SeoBacklink(nil).List(nil, nil) or
// client.SeoBacklink(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) SeoBacklink(data map[string]any) CrackedApiReferenceEntity {
	return NewSeoBacklinkEntityFunc(sdk, data)
}


// SeoKeyword returns a SeoKeyword entity bound to this client.
// Idiomatic usage: client.SeoKeyword(nil).List(nil, nil) or
// client.SeoKeyword(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) SeoKeyword(data map[string]any) CrackedApiReferenceEntity {
	return NewSeoKeywordEntityFunc(sdk, data)
}


// SeoOverview returns a SeoOverview entity bound to this client.
// Idiomatic usage: client.SeoOverview(nil).List(nil, nil) or
// client.SeoOverview(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) SeoOverview(data map[string]any) CrackedApiReferenceEntity {
	return NewSeoOverviewEntityFunc(sdk, data)
}


// SeoTraffic returns a SeoTraffic entity bound to this client.
// Idiomatic usage: client.SeoTraffic(nil).List(nil, nil) or
// client.SeoTraffic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) SeoTraffic(data map[string]any) CrackedApiReferenceEntity {
	return NewSeoTrafficEntityFunc(sdk, data)
}


// ShareAccessLink returns a ShareAccessLink entity bound to this client.
// Idiomatic usage: client.ShareAccessLink(nil).List(nil, nil) or
// client.ShareAccessLink(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) ShareAccessLink(data map[string]any) CrackedApiReferenceEntity {
	return NewShareAccessLinkEntityFunc(sdk, data)
}


// Site returns a Site entity bound to this client.
// Idiomatic usage: client.Site(nil).List(nil, nil) or
// client.Site(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) Site(data map[string]any) CrackedApiReferenceEntity {
	return NewSiteEntityFunc(sdk, data)
}


// Slide returns a Slide entity bound to this client.
// Idiomatic usage: client.Slide(nil).List(nil, nil) or
// client.Slide(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) Slide(data map[string]any) CrackedApiReferenceEntity {
	return NewSlideEntityFunc(sdk, data)
}


// SlugValidation returns a SlugValidation entity bound to this client.
// Idiomatic usage: client.SlugValidation(nil).List(nil, nil) or
// client.SlugValidation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) SlugValidation(data map[string]any) CrackedApiReferenceEntity {
	return NewSlugValidationEntityFunc(sdk, data)
}


// Social returns a Social entity bound to this client.
// Idiomatic usage: client.Social(nil).List(nil, nil) or
// client.Social(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) Social(data map[string]any) CrackedApiReferenceEntity {
	return NewSocialEntityFunc(sdk, data)
}


// SocialScanPreview returns a SocialScanPreview entity bound to this client.
// Idiomatic usage: client.SocialScanPreview(nil).List(nil, nil) or
// client.SocialScanPreview(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) SocialScanPreview(data map[string]any) CrackedApiReferenceEntity {
	return NewSocialScanPreviewEntityFunc(sdk, data)
}


// SocialScanProcess returns a SocialScanProcess entity bound to this client.
// Idiomatic usage: client.SocialScanProcess(nil).List(nil, nil) or
// client.SocialScanProcess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) SocialScanProcess(data map[string]any) CrackedApiReferenceEntity {
	return NewSocialScanProcessEntityFunc(sdk, data)
}


// SocialScanSave returns a SocialScanSave entity bound to this client.
// Idiomatic usage: client.SocialScanSave(nil).List(nil, nil) or
// client.SocialScanSave(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) SocialScanSave(data map[string]any) CrackedApiReferenceEntity {
	return NewSocialScanSaveEntityFunc(sdk, data)
}


// Sora2Avatar returns a Sora2Avatar entity bound to this client.
// Idiomatic usage: client.Sora2Avatar(nil).List(nil, nil) or
// client.Sora2Avatar(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) Sora2Avatar(data map[string]any) CrackedApiReferenceEntity {
	return NewSora2AvatarEntityFunc(sdk, data)
}


// Sora2AvatarAssetUpload returns a Sora2AvatarAssetUpload entity bound to this client.
// Idiomatic usage: client.Sora2AvatarAssetUpload(nil).List(nil, nil) or
// client.Sora2AvatarAssetUpload(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) Sora2AvatarAssetUpload(data map[string]any) CrackedApiReferenceEntity {
	return NewSora2AvatarAssetUploadEntityFunc(sdk, data)
}


// Sora2AvatarStat returns a Sora2AvatarStat entity bound to this client.
// Idiomatic usage: client.Sora2AvatarStat(nil).List(nil, nil) or
// client.Sora2AvatarStat(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) Sora2AvatarStat(data map[string]any) CrackedApiReferenceEntity {
	return NewSora2AvatarStatEntityFunc(sdk, data)
}


// Stat returns a Stat entity bound to this client.
// Idiomatic usage: client.Stat(nil).List(nil, nil) or
// client.Stat(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) Stat(data map[string]any) CrackedApiReferenceEntity {
	return NewStatEntityFunc(sdk, data)
}


// StatsRefreshBackfill returns a StatsRefreshBackfill entity bound to this client.
// Idiomatic usage: client.StatsRefreshBackfill(nil).List(nil, nil) or
// client.StatsRefreshBackfill(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) StatsRefreshBackfill(data map[string]any) CrackedApiReferenceEntity {
	return NewStatsRefreshBackfillEntityFunc(sdk, data)
}


// StatsRefreshIssue returns a StatsRefreshIssue entity bound to this client.
// Idiomatic usage: client.StatsRefreshIssue(nil).List(nil, nil) or
// client.StatsRefreshIssue(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) StatsRefreshIssue(data map[string]any) CrackedApiReferenceEntity {
	return NewStatsRefreshIssueEntityFunc(sdk, data)
}


// StatsRefreshOverview returns a StatsRefreshOverview entity bound to this client.
// Idiomatic usage: client.StatsRefreshOverview(nil).List(nil, nil) or
// client.StatsRefreshOverview(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) StatsRefreshOverview(data map[string]any) CrackedApiReferenceEntity {
	return NewStatsRefreshOverviewEntityFunc(sdk, data)
}


// StatsRefreshRunSummary returns a StatsRefreshRunSummary entity bound to this client.
// Idiomatic usage: client.StatsRefreshRunSummary(nil).List(nil, nil) or
// client.StatsRefreshRunSummary(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) StatsRefreshRunSummary(data map[string]any) CrackedApiReferenceEntity {
	return NewStatsRefreshRunSummaryEntityFunc(sdk, data)
}


// StatsRefreshTaskTrigger returns a StatsRefreshTaskTrigger entity bound to this client.
// Idiomatic usage: client.StatsRefreshTaskTrigger(nil).List(nil, nil) or
// client.StatsRefreshTaskTrigger(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) StatsRefreshTaskTrigger(data map[string]any) CrackedApiReferenceEntity {
	return NewStatsRefreshTaskTriggerEntityFunc(sdk, data)
}


// Stripe returns a Stripe entity bound to this client.
// Idiomatic usage: client.Stripe(nil).List(nil, nil) or
// client.Stripe(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) Stripe(data map[string]any) CrackedApiReferenceEntity {
	return NewStripeEntityFunc(sdk, data)
}


// Style returns a Style entity bound to this client.
// Idiomatic usage: client.Style(nil).List(nil, nil) or
// client.Style(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) Style(data map[string]any) CrackedApiReferenceEntity {
	return NewStyleEntityFunc(sdk, data)
}


// Template returns a Template entity bound to this client.
// Idiomatic usage: client.Template(nil).List(nil, nil) or
// client.Template(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) Template(data map[string]any) CrackedApiReferenceEntity {
	return NewTemplateEntityFunc(sdk, data)
}


// TikTokCreatorInfo returns a TikTokCreatorInfo entity bound to this client.
// Idiomatic usage: client.TikTokCreatorInfo(nil).List(nil, nil) or
// client.TikTokCreatorInfo(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) TikTokCreatorInfo(data map[string]any) CrackedApiReferenceEntity {
	return NewTikTokCreatorInfoEntityFunc(sdk, data)
}


// TopPost returns a TopPost entity bound to this client.
// Idiomatic usage: client.TopPost(nil).List(nil, nil) or
// client.TopPost(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) TopPost(data map[string]any) CrackedApiReferenceEntity {
	return NewTopPostEntityFunc(sdk, data)
}


// UploadPostAgent returns a UploadPostAgent entity bound to this client.
// Idiomatic usage: client.UploadPostAgent(nil).List(nil, nil) or
// client.UploadPostAgent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) UploadPostAgent(data map[string]any) CrackedApiReferenceEntity {
	return NewUploadPostAgentEntityFunc(sdk, data)
}


// User returns a User entity bound to this client.
// Idiomatic usage: client.User(nil).List(nil, nil) or
// client.User(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) User(data map[string]any) CrackedApiReferenceEntity {
	return NewUserEntityFunc(sdk, data)
}


// UserAgent returns a UserAgent entity bound to this client.
// Idiomatic usage: client.UserAgent(nil).List(nil, nil) or
// client.UserAgent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) UserAgent(data map[string]any) CrackedApiReferenceEntity {
	return NewUserAgentEntityFunc(sdk, data)
}


// UserHealthDetail returns a UserHealthDetail entity bound to this client.
// Idiomatic usage: client.UserHealthDetail(nil).List(nil, nil) or
// client.UserHealthDetail(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) UserHealthDetail(data map[string]any) CrackedApiReferenceEntity {
	return NewUserHealthDetailEntityFunc(sdk, data)
}


// UserWithAvatarSubmission returns a UserWithAvatarSubmission entity bound to this client.
// Idiomatic usage: client.UserWithAvatarSubmission(nil).List(nil, nil) or
// client.UserWithAvatarSubmission(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) UserWithAvatarSubmission(data map[string]any) CrackedApiReferenceEntity {
	return NewUserWithAvatarSubmissionEntityFunc(sdk, data)
}


// UsersHealth returns a UsersHealth entity bound to this client.
// Idiomatic usage: client.UsersHealth(nil).List(nil, nil) or
// client.UsersHealth(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) UsersHealth(data map[string]any) CrackedApiReferenceEntity {
	return NewUsersHealthEntityFunc(sdk, data)
}


// Video returns a Video entity bound to this client.
// Idiomatic usage: client.Video(nil).List(nil, nil) or
// client.Video(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) Video(data map[string]any) CrackedApiReferenceEntity {
	return NewVideoEntityFunc(sdk, data)
}


// VideoRemixerWorker returns a VideoRemixerWorker entity bound to this client.
// Idiomatic usage: client.VideoRemixerWorker(nil).List(nil, nil) or
// client.VideoRemixerWorker(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) VideoRemixerWorker(data map[string]any) CrackedApiReferenceEntity {
	return NewVideoRemixerWorkerEntityFunc(sdk, data)
}


// WatchdogRecovery returns a WatchdogRecovery entity bound to this client.
// Idiomatic usage: client.WatchdogRecovery(nil).List(nil, nil) or
// client.WatchdogRecovery(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) WatchdogRecovery(data map[string]any) CrackedApiReferenceEntity {
	return NewWatchdogRecoveryEntityFunc(sdk, data)
}


// WinningAd returns a WinningAd entity bound to this client.
// Idiomatic usage: client.WinningAd(nil).List(nil, nil) or
// client.WinningAd(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) WinningAd(data map[string]any) CrackedApiReferenceEntity {
	return NewWinningAdEntityFunc(sdk, data)
}


// XAdaptation returns a XAdaptation entity bound to this client.
// Idiomatic usage: client.XAdaptation(nil).List(nil, nil) or
// client.XAdaptation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) XAdaptation(data map[string]any) CrackedApiReferenceEntity {
	return NewXAdaptationEntityFunc(sdk, data)
}


// ZerohumanAdminAccount returns a ZerohumanAdminAccount entity bound to this client.
// Idiomatic usage: client.ZerohumanAdminAccount(nil).List(nil, nil) or
// client.ZerohumanAdminAccount(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CrackedApiReferenceSDK) ZerohumanAdminAccount(data map[string]any) CrackedApiReferenceEntity {
	return NewZerohumanAdminAccountEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *CrackedApiReferenceSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewCrackedApiReferenceSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
