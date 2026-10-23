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
(0, node_test_1.describe)('IrisCapabilityEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CRACKED_API_REFERENCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CrackedApiReferenceSDK.test();
        const ent = testsdk.IrisCapability();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.IrisCapability().create({ "id": 1, "capability": "x", "correlationId": "x", "externalUserId": "x", "idempotencyKey": "x", "productScope": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE;
        for (const op of []) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'iris_capability.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "capability": { "a": true, "h": "Capability", "n": "capability", "r": true, "t": "`$STRING`", "key$": "capability", "index$": 0 }, "correlationId": { "a": true, "h": "Correlation Id", "n": "correlationId", "r": true, "t": "`$STRING`", "key$": "correlationId", "index$": 1 }, "errorCode": { "a": true, "h": "Error Code", "n": "errorCode", "r": false, "t": "`$ANY`", "key$": "errorCode", "index$": 2 }, "externalProductId": { "a": true, "h": "External Product Id", "n": "externalProductId", "r": false, "t": "`$ANY`", "key$": "externalProductId", "index$": 3 }, "externalUserId": { "a": true, "fo": "uuid", "h": "External User Id", "n": "externalUserId", "r": true, "t": "`$STRING`", "key$": "externalUserId", "index$": 4 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 5 }, "idempotencyKey": { "a": true, "h": "Idempotency Key", "n": "idempotencyKey", "r": true, "t": "`$STRING`", "key$": "idempotencyKey", "index$": 6 }, "input": { "a": true, "h": "Input", "n": "input", "r": false, "t": "`$OBJECT`", "key$": "input", "index$": 7 }, "membershipId": { "a": true, "h": "Membership Id", "n": "membershipId", "r": false, "t": "`$ANY`", "key$": "membershipId", "index$": 8 }, "message": { "a": true, "h": "Message", "n": "message", "r": false, "t": "`$ANY`", "key$": "message", "index$": 9 }, "ok": { "a": true, "h": "Ok", "n": "ok", "r": true, "t": "`$BOOLEAN`", "key$": "ok", "index$": 10 }, "platformAccountId": { "a": true, "h": "Platform Account Id", "n": "platformAccountId", "r": false, "t": "`$ANY`", "key$": "platformAccountId", "index$": 11 }, "platformLinkId": { "a": true, "h": "Platform Link Id", "n": "platformLinkId", "r": false, "t": "`$ANY`", "key$": "platformLinkId", "index$": 12 }, "productScope": { "a": true, "h": "Product Scope", "n": "productScope", "r": true, "t": "`$STRING`", "key$": "productScope", "index$": 13 }, "requestedBy": { "a": true, "h": "Requested By", "n": "requestedBy", "r": false, "t": "`$OBJECT`", "key$": "requestedBy", "index$": 14 }, "result": { "a": true, "h": "Result", "n": "result", "r": false, "t": "`$OBJECT`", "key$": "result", "index$": 15 }, "retryable": { "a": true, "h": "Retryable", "n": "retryable", "r": false, "t": "`$BOOLEAN`", "key$": "retryable", "index$": 16 } }, "id": { "field": "id", "name": "id" }, "name": "iris_capability", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["capability", "correlationId", "externalProductId", "externalUserId", "idempotencyKey", "input", "membershipId", "platformAccountId", "platformLinkId", "productScope", "requestedBy"], "co": { "id": "POST /api/platform/capabilities/{capability_name}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "authorization", "or": "authorization", "r": false, "t": "`$ANY`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "capability_name", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/platform/capabilities/{capability_name}", "q": { "exist": ["id"] }, "r": { "param": { "capability_name": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "platform" }, { "lit": "capabilities" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "iris_capability", "name__orig": "iris_capability", "Name": "IrisCapability", "name_": "iris_capability", "name-": "iris-capability", "NAME": "IRIS_CAPABILITY", "index$": 86 }, { "active": true, "entity": "iris_capability", "key$": "BasicIrisCapabilityFlow", "kind": "basic", "name": "BasicIrisCapabilityFlow", "param": {}, "step": [{ "a": false, "d": {}, "i": { "ref": "iris_capability_ref01" }, "m": { "capability_name": "capability_name01" }, "o": "create", "s": [], "v": [], "unreachable": true }] }, 'IrisCapability', { "POST /api/platform/capabilities/{capability_name}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "properties": { "productScope": { "type": "string", "title": "Productscope", "key$": "productScope" }, "externalUserId": { "type": "string", "format": "uuid", "title": "Externaluserid", "key$": "externalUserId" }, "externalProductId": { "anyOf": [{ "type": "string", "format": "uuid" }, { "type": "null" }], "title": "Externalproductid", "key$": "externalProductId" }, "platformAccountId": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Platformaccountid", "key$": "platformAccountId" }, "platformLinkId": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Platformlinkid", "key$": "platformLinkId" }, "membershipId": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Membershipid", "key$": "membershipId" }, "capability": { "type": "string", "title": "Capability", "key$": "capability" }, "input": { "type": "object", "title": "Input", "key$": "input" }, "idempotencyKey": { "type": "string", "title": "Idempotencykey", "key$": "idempotencyKey" }, "correlationId": { "type": "string", "title": "Correlationid", "key$": "correlationId" }, "requestedBy": { "type": "object", "title": "Requestedby", "key$": "requestedBy" } }, "type": "object", "required": ["productScope", "externalUserId", "capability", "idempotencyKey", "correlationId"], "title": "IrisCapabilityEnvelope", "x-ref": "#/components/schemas/IrisCapabilityEnvelope", "index$": 1 } } } }, "parameters": [{ "name": "capability_name", "in": "path", "required": true, "schema": { "type": "string", "title": "Capability Name" }, "index$": 0 }, { "name": "authorization", "in": "header", "required": false, "schema": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Authorization" }, "index$": 1 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let iris_capability_ref01_data = Object.values(setup.data.existing.iris_capability)[0];
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/iris_capability/IrisCapabilityTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CrackedApiReferenceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['iris_capability01', 'iris_capability02', 'iris_capability03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CRACKED_API_REFERENCE_TEST_IRIS_CAPABILITY_ENTID': idmap,
        'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
        'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
        'CRACKED_API_REFERENCE_APIKEY': '',
        'CRACKED_API_REFERENCE_SERVER_BASE': "",
    });
    idmap = env['CRACKED_API_REFERENCE_TEST_IRIS_CAPABILITY_ENTID'];
    const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CRACKED_API_REFERENCE_TEST_IRIS_CAPABILITY_ENTID'];
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
//# sourceMappingURL=IrisCapabilityEntity.test.js.map