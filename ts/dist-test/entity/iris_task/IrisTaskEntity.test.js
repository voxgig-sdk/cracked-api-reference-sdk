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
(0, node_test_1.describe)('IrisTaskEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CRACKED_API_REFERENCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CrackedApiReferenceSDK.test();
        const ent = testsdk.IrisTask();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('iris_task hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.CrackedApiReferenceSDK.test(offline).IrisTask().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.CrackedApiReferenceSDK.test(offline).IrisTask()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.IrisTask().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.CrackedApiReferenceSDK.test().IrisTask().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.IrisTask().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.IrisTask().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.IrisTask().list({ "product_id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE;
        for (const op of ['create', 'list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'iris_task.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "approvalRequired": { "a": true, "h": "Approval Required", "n": "approvalRequired", "r": false, "t": "`$BOOLEAN`", "key$": "approvalRequired", "index$": 0 }, "cadence": { "a": true, "h": "Cadence", "n": "cadence", "r": false, "t": "`$STRING`", "key$": "cadence", "index$": 1 }, "capability": { "a": true, "h": "Capability", "n": "capability", "r": false, "t": "`$ANY`", "key$": "capability", "index$": 2 }, "completed": { "a": true, "h": "Completed", "n": "completed", "r": false, "t": "`$ARRAY`", "key$": "completed", "index$": 3 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "t": "`$STRING`", "key$": "description", "index$": 4 }, "discover": { "a": true, "h": "Discover", "n": "discover", "r": false, "t": "`$ARRAY`", "key$": "discover", "index$": 5 }, "productId": { "a": true, "h": "Product Id", "n": "productId", "r": false, "t": "`$ANY`", "key$": "productId", "index$": 6 }, "recurring": { "a": true, "h": "Recurring", "n": "recurring", "r": false, "t": "`$ARRAY`", "key$": "recurring", "index$": 7 }, "requiredConnectors": { "a": true, "h": "Required Connectors", "n": "requiredConnectors", "r": false, "t": "`$ARRAY`", "key$": "requiredConnectors", "index$": 8 }, "title": { "a": true, "h": "Title", "n": "title", "r": true, "t": "`$STRING`", "key$": "title", "index$": 9 } }, "name": "iris_task", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["approvalRequired", "cadence", "capability", "description", "productId", "requiredConnectors", "title"], "co": { "id": "POST /api/iris/tasks", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/iris/tasks", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "iris" }, { "lit": "tasks" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/iris/tasks", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "product_id", "or": "product_id", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/iris/tasks", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "iris" }, { "lit": "tasks" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "iris_task", "name__orig": "iris_task", "Name": "IrisTask", "name_": "iris_task", "name-": "iris-task", "NAME": "IRIS_TASK", "index$": 90 }, { "active": true, "entity": "iris_task", "key$": "BasicIrisTaskFlow", "kind": "basic", "name": "BasicIrisTaskFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "iris_task_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "iris_task_ref01" } }], "index$": 1 }] }, 'IrisTask', { "POST /api/iris/tasks": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "properties": { "title": { "type": "string", "maxLength": 255, "minLength": 1, "title": "Title", "key$": "title" }, "description": { "type": "string", "title": "Description", "default": "", "key$": "description" }, "cadence": { "type": "string", "title": "Cadence", "default": "manual", "key$": "cadence" }, "capability": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Capability", "key$": "capability" }, "requiredConnectors": { "items": { "type": "string" }, "type": "array", "title": "Requiredconnectors", "key$": "requiredConnectors" }, "approvalRequired": { "type": "boolean", "title": "Approvalrequired", "default": false, "key$": "approvalRequired" }, "productId": { "anyOf": [{ "type": "string", "format": "uuid" }, { "type": "null" }], "title": "Productid", "key$": "productId" } }, "type": "object", "required": ["title"], "title": "IrisTaskCreateRequest", "x-ref": "#/components/schemas/IrisTaskCreateRequest", "index$": 1 } } } }, "parameters": [] }, "GET /api/iris/tasks": { "protocol": "http", "parameters": [{ "name": "product_id", "in": "query", "required": false, "schema": { "anyOf": [{ "type": "string", "format": "uuid" }, { "type": "null" }], "title": "Product Id" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const iris_task_ref01_ent = client.IrisTask();
        let iris_task_ref01_data = setup.data.new.iris_task['iris_task_ref01'];
        iris_task_ref01_data = (await iris_task_ref01_ent.create(iris_task_ref01_data)).data();
        (0, node_assert_1.default)(null != iris_task_ref01_data);
        // LIST
        const iris_task_ref01_match = {};
        const iris_task_ref01_list = (await iris_task_ref01_ent.list(iris_task_ref01_match)).map((e) => e.data());
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/iris_task/IrisTaskTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CrackedApiReferenceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['iris_task01', 'iris_task02', 'iris_task03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CRACKED_API_REFERENCE_TEST_IRIS_TASK_ENTID': idmap,
        'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
        'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
        'CRACKED_API_REFERENCE_APIKEY': '',
        'CRACKED_API_REFERENCE_SERVER_BASE': "",
    });
    idmap = env['CRACKED_API_REFERENCE_TEST_IRIS_TASK_ENTID'];
    const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CRACKED_API_REFERENCE_TEST_IRIS_TASK_ENTID'];
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
//# sourceMappingURL=IrisTaskEntity.test.js.map