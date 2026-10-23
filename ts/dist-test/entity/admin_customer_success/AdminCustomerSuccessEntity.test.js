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
(0, node_test_1.describe)('AdminCustomerSuccessEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CRACKED_API_REFERENCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CrackedApiReferenceSDK.test();
        const ent = testsdk.AdminCustomerSuccess();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('admin_customer_success hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.CrackedApiReferenceSDK.test(offline).AdminCustomerSuccess().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.CrackedApiReferenceSDK.test(offline).AdminCustomerSuccess()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.AdminCustomerSuccess().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.CrackedApiReferenceSDK.test().AdminCustomerSuccess().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.AdminCustomerSuccess().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.AdminCustomerSuccess().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.AdminCustomerSuccess().list({ "active_agents": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'admin_customer_success.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "active_agents": { "a": true, "h": "Active Agents", "n": "active_agents", "r": true, "t": "`$INTEGER`", "key$": "active_agents", "index$": 0 }, "active_products": { "a": true, "h": "Active Products", "n": "active_products", "r": true, "t": "`$INTEGER`", "key$": "active_products", "index$": 1 }, "agents_count": { "a": true, "h": "Agents Count", "n": "agents_count", "r": true, "t": "`$INTEGER`", "key$": "agents_count", "index$": 2 }, "auto_schedule_status": { "a": true, "h": "Auto Schedule Status", "n": "auto_schedule_status", "r": true, "t": "`$STRING`", "key$": "auto_schedule_status", "index$": 3 }, "days_until_period_end": { "a": true, "h": "Days Until Period End", "n": "days_until_period_end", "r": false, "t": "`$ANY`", "key$": "days_until_period_end", "index$": 4 }, "email": { "a": true, "h": "Email", "n": "email", "r": true, "t": "`$STRING`", "key$": "email", "index$": 5 }, "feature_impact": { "a": true, "h": "Feature Impact", "n": "feature_impact", "r": true, "t": "`$STRING`", "key$": "feature_impact", "index$": 6 }, "last_notification_at": { "a": true, "h": "Last Notification At", "n": "last_notification_at", "r": false, "t": "`$ANY`", "key$": "last_notification_at", "index$": 7 }, "membership": { "a": true, "h": "Membership", "n": "membership", "r": false, "t": "`$ANY`", "key$": "membership", "index$": 8 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 9 }, "notification_count": { "a": true, "h": "Notification Count", "n": "notification_count", "r": true, "t": "`$INTEGER`", "key$": "notification_count", "index$": 10 }, "notification_events": { "a": true, "h": "Notification Events", "n": "notification_events", "r": true, "t": "`$ARRAY`", "key$": "notification_events", "index$": 11 }, "priority": { "a": true, "h": "Priority", "n": "priority", "r": true, "t": "`$STRING`", "key$": "priority", "index$": 12 }, "severity": { "a": true, "h": "Severity", "n": "severity", "r": true, "t": "`$STRING`", "key$": "severity", "index$": 13 }, "status_label": { "a": true, "h": "Status Label", "n": "status_label", "r": true, "t": "`$STRING`", "key$": "status_label", "index$": 14 }, "subscription_current_period_end": { "a": true, "h": "Subscription Current Period End", "n": "subscription_current_period_end", "r": false, "t": "`$ANY`", "key$": "subscription_current_period_end", "index$": 15 }, "subscription_status": { "a": true, "h": "Subscription Status", "n": "subscription_status", "r": false, "t": "`$ANY`", "key$": "subscription_status", "index$": 16 }, "upcoming_posts": { "a": true, "h": "Upcoming Posts", "n": "upcoming_posts", "r": true, "t": "`$INTEGER`", "key$": "upcoming_posts", "index$": 17 }, "user_id": { "a": true, "fo": "uuid", "h": "User Id", "n": "user_id", "r": true, "t": "`$STRING`", "key$": "user_id", "index$": 18 } }, "name": "admin_customer_success", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/admin/insights/customer-success", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/api/admin/insights/customer-success", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "admin" }, { "lit": "insights" }, { "lit": "customer-success" }], "t": { "req": "`reqdata`", "res": "`body.customer_success_cases`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "admin_customer_success", "name__orig": "admin_customer_success", "Name": "AdminCustomerSuccess", "name_": "admin_customer_success", "name-": "admin-customer-success", "NAME": "ADMIN_CUSTOMER_SUCCESS", "index$": 8 }, { "active": true, "entity": "admin_customer_success", "key$": "BasicAdminCustomerSuccessFlow", "kind": "basic", "name": "BasicAdminCustomerSuccessFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "admin_customer_success_ref01" } }], "index$": 0 }] }, 'AdminCustomerSuccess', { "GET /api/admin/insights/customer-success": { "protocol": "http", "parameters": [] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let admin_customer_success_ref01_data = Object.values(setup.data.existing.admin_customer_success)[0];
        // LIST
        const admin_customer_success_ref01_ent = client.AdminCustomerSuccess();
        const admin_customer_success_ref01_match = {};
        const admin_customer_success_ref01_list = (await admin_customer_success_ref01_ent.list(admin_customer_success_ref01_match)).map((e) => e.data());
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/admin_customer_success/AdminCustomerSuccessTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CrackedApiReferenceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['admin_customer_success01', 'admin_customer_success02', 'admin_customer_success03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CRACKED_API_REFERENCE_TEST_ADMIN_CUSTOMER_SUCCESS_ENTID': idmap,
        'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
        'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
        'CRACKED_API_REFERENCE_APIKEY': '',
        'CRACKED_API_REFERENCE_SERVER_BASE': "",
    });
    idmap = env['CRACKED_API_REFERENCE_TEST_ADMIN_CUSTOMER_SUCCESS_ENTID'];
    const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CRACKED_API_REFERENCE_TEST_ADMIN_CUSTOMER_SUCCESS_ENTID'];
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
//# sourceMappingURL=AdminCustomerSuccessEntity.test.js.map