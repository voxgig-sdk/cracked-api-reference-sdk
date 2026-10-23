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
(0, node_test_1.describe)('CustomerHealthViewsSummaryEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CRACKED_API_REFERENCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CrackedApiReferenceSDK.test();
        const ent = testsdk.CustomerHealthViewsSummary();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('customer_health_views_summary hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.CrackedApiReferenceSDK.test(offline).CustomerHealthViewsSummary().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.CrackedApiReferenceSDK.test(offline).CustomerHealthViewsSummary()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.CustomerHealthViewsSummary().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.CrackedApiReferenceSDK.test().CustomerHealthViewsSummary().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.CustomerHealthViewsSummary().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.CustomerHealthViewsSummary().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.CustomerHealthViewsSummary().list({ "range": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'customer_health_views_summary.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "average_views_per_result": { "a": true, "h": "Average Views Per Result", "n": "average_views_per_result", "r": true, "t": "`$INTEGER`", "key$": "average_views_per_result", "index$": 0 }, "date": { "a": true, "h": "Date", "n": "date", "r": true, "t": "`$STRING`", "key$": "date", "index$": 1 }, "end_date": { "a": true, "h": "End Date", "n": "end_date", "r": false, "t": "`$ANY`", "key$": "end_date", "index$": 2 }, "paid_users_count": { "a": true, "h": "Paid Users Count", "n": "paid_users_count", "r": true, "t": "`$INTEGER`", "key$": "paid_users_count", "index$": 3 }, "posted_results": { "a": true, "h": "Posted Results", "n": "posted_results", "r": true, "t": "`$INTEGER`", "key$": "posted_results", "index$": 4 }, "range": { "a": true, "h": "Range", "n": "range", "r": true, "t": "`$STRING`", "key$": "range", "index$": 5 }, "start_date": { "a": true, "h": "Start Date", "n": "start_date", "r": false, "t": "`$ANY`", "key$": "start_date", "index$": 6 }, "top_users": { "a": true, "h": "Top Users", "n": "top_users", "r": true, "t": "`$ARRAY`", "key$": "top_users", "index$": 7 }, "total_views": { "a": true, "h": "Total Views", "n": "total_views", "r": true, "t": "`$INTEGER`", "key$": "total_views", "index$": 8 }, "trend": { "a": true, "h": "Trend", "n": "trend", "r": true, "t": "`$ARRAY`", "key$": "trend", "index$": 9 }, "trend_granularity": { "a": true, "h": "Trend Granularity", "n": "trend_granularity", "r": true, "t": "`$STRING`", "key$": "trend_granularity", "index$": 10 }, "user_email": { "a": true, "h": "User Email", "n": "user_email", "r": false, "t": "`$ANY`", "key$": "user_email", "index$": 11 }, "user_id": { "a": true, "h": "User Id", "n": "user_id", "r": false, "t": "`$STRING`", "key$": "user_id", "index$": 12 }, "users_with_views": { "a": true, "h": "Users With Views", "n": "users_with_views", "r": true, "t": "`$INTEGER`", "key$": "users_with_views", "index$": 13 } }, "name": "customer_health_views_summary", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/admin/customer-health/views", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "date", "or": "date", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "ex": "selected_date", "k": "query", "n": "range", "or": "range", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "user_id", "or": "user_id", "r": false, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/api/admin/customer-health/views", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "admin" }, { "lit": "customer-health" }, { "lit": "views" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "customer_health_views_summary", "name__orig": "customer_health_views_summary", "Name": "CustomerHealthViewsSummary", "name_": "customer_health_views_summary", "name-": "customer-health-views-summary", "NAME": "CUSTOMER_HEALTH_VIEWS_SUMMARY", "index$": 68 }, { "active": true, "entity": "customer_health_views_summary", "key$": "BasicCustomerHealthViewsSummaryFlow", "kind": "basic", "name": "BasicCustomerHealthViewsSummaryFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "customer_health_views_summary_ref01" } }], "index$": 0 }] }, 'CustomerHealthViewsSummary', { "GET /api/admin/customer-health/views": { "protocol": "http", "parameters": [{ "name": "range", "in": "query", "required": false, "schema": { "enum": ["selected_date", "this_month", "all_time"], "type": "string", "description": "Views aggregation range.", "default": "selected_date", "title": "Range" }, "description": "Views aggregation range.", "index$": 0 }, { "name": "date", "in": "query", "required": false, "schema": { "anyOf": [{ "type": "string" }, { "type": "null" }], "description": "Date in YYYY-MM-DD format (America/New_York). Defaults to today.", "title": "Date" }, "description": "Date in YYYY-MM-DD format (America/New_York). Defaults to today.", "index$": 1 }, { "name": "user_id", "in": "query", "required": false, "schema": { "anyOf": [{ "type": "string", "format": "uuid" }, { "type": "null" }], "description": "Optional paid customer user ID.", "title": "User Id" }, "description": "Optional paid customer user ID.", "index$": 2 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let customer_health_views_summary_ref01_data = Object.values(setup.data.existing.customer_health_views_summary)[0];
        // LIST
        const customer_health_views_summary_ref01_ent = client.CustomerHealthViewsSummary();
        const customer_health_views_summary_ref01_match = {};
        const customer_health_views_summary_ref01_list = (await customer_health_views_summary_ref01_ent.list(customer_health_views_summary_ref01_match)).map((e) => e.data());
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/customer_health_views_summary/CustomerHealthViewsSummaryTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CrackedApiReferenceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['customer_health_views_summary01', 'customer_health_views_summary02', 'customer_health_views_summary03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CRACKED_API_REFERENCE_TEST_CUSTOMER_HEALTH_VIEWS_SUMMARY_ENTID': idmap,
        'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
        'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
        'CRACKED_API_REFERENCE_APIKEY': '',
        'CRACKED_API_REFERENCE_SERVER_BASE': "",
    });
    idmap = env['CRACKED_API_REFERENCE_TEST_CUSTOMER_HEALTH_VIEWS_SUMMARY_ENTID'];
    const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CRACKED_API_REFERENCE_TEST_CUSTOMER_HEALTH_VIEWS_SUMMARY_ENTID'];
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
//# sourceMappingURL=CustomerHealthViewsSummaryEntity.test.js.map