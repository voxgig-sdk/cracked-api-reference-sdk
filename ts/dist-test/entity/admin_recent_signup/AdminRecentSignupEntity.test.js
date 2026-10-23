"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('AdminRecentSignupEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CRACKED_API_REFERENCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CrackedApiReferenceSDK.test();
        const ent = testsdk.AdminRecentSignup();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('admin_recent_signup hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.CrackedApiReferenceSDK.test(offline).AdminRecentSignup().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.CrackedApiReferenceSDK.test(offline).AdminRecentSignup()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.AdminRecentSignup().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.CrackedApiReferenceSDK.test().AdminRecentSignup().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.AdminRecentSignup().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.AdminRecentSignup().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.AdminRecentSignup().list({ "created_at": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'admin_recent_signup.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": true, "t": "`$STRING`", "key$": "created_at", "index$": 0 }, "current_step": { "a": true, "h": "Current Step", "n": "current_step", "r": true, "t": "`$STRING`", "key$": "current_step", "index$": 1 }, "email": { "a": true, "h": "Email", "n": "email", "r": false, "t": "`$STRING`", "key$": "email", "index$": 2 }, "email_source": { "a": true, "h": "Email Source", "n": "email_source", "r": false, "t": "`$ANY`", "key$": "email_source", "index$": 3 }, "error_message": { "a": true, "h": "Error Message", "n": "error_message", "r": false, "t": "`$ANY`", "key$": "error_message", "index$": 4 }, "flow_variant": { "a": true, "h": "Flow Variant", "n": "flow_variant", "r": true, "t": "`$STRING`", "key$": "flow_variant", "index$": 5 }, "id": { "a": true, "fo": "uuid", "h": "Id", "n": "id", "r": true, "t": "`$STRING`", "key$": "id", "index$": 6 }, "inactive_minutes": { "a": true, "h": "Inactive Minutes", "n": "inactive_minutes", "r": true, "t": "`$INTEGER`", "key$": "inactive_minutes", "index$": 7 }, "last_notification_at": { "a": true, "h": "Last Notification At", "n": "last_notification_at", "r": false, "t": "`$ANY`", "key$": "last_notification_at", "index$": 8 }, "last_seen_at": { "a": true, "fo": "date-time", "h": "Last Seen At", "n": "last_seen_at", "r": true, "t": "`$STRING`", "key$": "last_seen_at", "index$": 9 }, "likely_cause": { "a": true, "h": "Likely Cause", "n": "likely_cause", "r": true, "t": "`$STRING`", "key$": "likely_cause", "index$": 10 }, "notification_count": { "a": true, "h": "Notification Count", "n": "notification_count", "r": true, "t": "`$INTEGER`", "key$": "notification_count", "index$": 11 }, "notification_events": { "a": true, "h": "Notification Events", "n": "notification_events", "r": true, "t": "`$ARRAY`", "key$": "notification_events", "index$": 12 }, "product_id": { "a": true, "h": "Product Id", "n": "product_id", "r": false, "t": "`$STRING`", "key$": "product_id", "index$": 13 }, "product_name": { "a": true, "h": "Product Name", "n": "product_name", "r": false, "t": "`$ANY`", "key$": "product_name", "index$": 14 }, "product_url": { "a": true, "h": "Product Url", "n": "product_url", "r": true, "t": "`$STRING`", "key$": "product_url", "index$": 15 }, "severity": { "a": true, "h": "Severity", "n": "severity", "r": true, "t": "`$STRING`", "key$": "severity", "index$": 16 }, "social_scan_status": { "a": true, "h": "Social Scan Status", "n": "social_scan_status", "r": false, "t": "`$ANY`", "key$": "social_scan_status", "index$": 17 }, "stage_label": { "a": true, "h": "Stage Label", "n": "stage_label", "r": true, "t": "`$STRING`", "key$": "stage_label", "index$": 18 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "t": "`$STRING`", "key$": "status", "index$": 19 }, "updated_at": { "a": true, "h": "Updated At", "n": "updated_at", "r": false, "t": "`$ANY`", "key$": "updated_at", "index$": 20 }, "website_scrape_status": { "a": true, "h": "Website Scrape Status", "n": "website_scrape_status", "r": false, "t": "`$ANY`", "key$": "website_scrape_status", "index$": 21 } }, "id": { "field": "id", "name": "id" }, "name": "admin_recent_signup", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/admin/insights/recent-signups", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/api/admin/insights/recent-signups", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "admin" }, { "lit": "insights" }, { "lit": "recent-signups" }], "t": { "req": "`reqdata`", "res": "`body.recent_signups`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "admin_recent_signup", "name__orig": "admin_recent_signup", "Name": "AdminRecentSignup", "name_": "admin_recent_signup", "name-": "admin-recent-signup", "NAME": "ADMIN_RECENT_SIGNUP", "index$": 15 }, { "active": true, "entity": "admin_recent_signup", "key$": "BasicAdminRecentSignupFlow", "kind": "basic", "name": "BasicAdminRecentSignupFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "admin_recent_signup_ref01" } }], "index$": 0 }] }, 'AdminRecentSignup', { "GET /api/admin/insights/recent-signups": { "protocol": "http", "parameters": [] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let admin_recent_signup_ref01_data = Object.values(setup.data.existing.admin_recent_signup)[0];
        // LIST
        const admin_recent_signup_ref01_ent = client.AdminRecentSignup();
        const admin_recent_signup_ref01_match = {};
        const admin_recent_signup_ref01_list = (await admin_recent_signup_ref01_ent.list(admin_recent_signup_ref01_match)).map((e) => e.data());
    });
});
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/admin_recent_signup/AdminRecentSignupTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CrackedApiReferenceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['admin_recent_signup01', 'admin_recent_signup02', 'admin_recent_signup03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CRACKED_API_REFERENCE_TEST_ADMIN_RECENT_SIGNUP_ENTID': idmap,
        'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
        'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
        'CRACKED_API_REFERENCE_APIKEY': '',
        'CRACKED_API_REFERENCE_SERVER_BASE': "",
    });
    idmap = env['CRACKED_API_REFERENCE_TEST_ADMIN_RECENT_SIGNUP_ENTID'];
    const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CRACKED_API_REFERENCE_TEST_ADMIN_RECENT_SIGNUP_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.CrackedApiReferenceSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.CRACKED_API_REFERENCE_APIKEY,
                server: {
                    base: env.CRACKED_API_REFERENCE_SERVER_BASE,
                },
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.CRACKED_API_REFERENCE_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=AdminRecentSignupEntity.test.js.map