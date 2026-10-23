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
(0, node_test_1.describe)('SocialEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CRACKED_API_REFERENCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CrackedApiReferenceSDK.test();
        const ent = testsdk.Social();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('social hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.CrackedApiReferenceSDK.test(offline).Social().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.CrackedApiReferenceSDK.test(offline).Social()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.Social().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.CrackedApiReferenceSDK.test().Social().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.Social().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.Social().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Social().list({ "code": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE;
        for (const op of ['create', 'list', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'social.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "code": { "a": true, "h": "Code", "n": "code", "r": true, "t": "`$STRING`", "key$": "code", "index$": 0 }, "code_verifier": { "a": true, "h": "Code Verifier", "n": "code_verifier", "r": true, "t": "`$STRING`", "key$": "code_verifier", "index$": 1 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": true, "t": "`$STRING`", "key$": "createdAt", "index$": 2 }, "id": { "a": true, "fo": "uuid4", "h": "Id", "n": "id", "r": true, "t": "`$STRING`", "key$": "id", "index$": 3 }, "platform": { "a": true, "h": "Platform", "n": "platform", "r": true, "t": "`$STRING`", "key$": "platform", "index$": 4 }, "platformUserId": { "a": true, "h": "Platform User Id", "n": "platformUserId", "r": true, "t": "`$STRING`", "key$": "platformUserId", "index$": 5 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": false, "t": "`$ANY`", "key$": "updatedAt", "index$": 6 }, "userId": { "a": true, "fo": "uuid4", "h": "User Id", "n": "userId", "r": true, "t": "`$STRING`", "key$": "userId", "index$": 7 }, "username": { "a": true, "h": "Username", "n": "username", "r": false, "t": "`$STRING`", "key$": "username", "index$": 8 } }, "id": { "field": "id", "name": "id" }, "name": "social", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["code", "code_verifier"], "co": { "id": "POST /social/instagram/exchange", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/social/instagram/exchange", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "social" }, { "lit": "instagram" }, { "lit": "exchange" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "bf": ["code", "code_verifier"], "co": { "id": "POST /social/tiktok/exchange", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/social/tiktok/exchange", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "social" }, { "lit": "tiktok" }, { "lit": "exchange" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /social/connections", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/social/connections", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "social" }, { "lit": "connections" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /social/platforms", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/social/platforms", "q": { "$action": "platform" }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "social" }, { "lit": "platforms" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /social/instagram/auth", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "code_challenge", "or": "code_challenge", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "ex": "S256", "k": "query", "n": "code_challenge_method", "or": "code_challenge_method", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/social/instagram/auth", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "social" }, { "lit": "instagram" }, { "lit": "auth" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /social/instagram/callback", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "code", "or": "code", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "query", "n": "error", "or": "error", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "query", "n": "error_description", "or": "error_description", "r": false, "t": "`$ANY`", "index$": 2 }, { "a": true, "k": "query", "n": "state", "or": "state", "r": false, "t": "`$ANY`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/social/instagram/callback", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "social" }, { "lit": "instagram" }, { "lit": "callback" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /social/tiktok/auth", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "code_challenge", "or": "code_challenge", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "ex": "S256", "k": "query", "n": "code_challenge_method", "or": "code_challenge_method", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/social/tiktok/auth", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "social" }, { "lit": "tiktok" }, { "lit": "auth" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "GET /social/tiktok/callback", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "code", "or": "code", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "query", "n": "error", "or": "error", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "query", "n": "error_description", "or": "error_description", "r": false, "t": "`$ANY`", "index$": 2 }, { "a": true, "k": "query", "n": "state", "or": "state", "r": false, "t": "`$ANY`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/social/tiktok/callback", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "social" }, { "lit": "tiktok" }, { "lit": "callback" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /social/connections/{platform}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "platform", "or": "platform", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/social/connections/{platform}", "q": { "exist": ["platform"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "social" }, { "lit": "connections" }, { "var": "platform" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [] }, "key$": "social", "name__orig": "social", "Name": "Social", "name_": "social", "name-": "social", "NAME": "SOCIAL", "index$": 141 }, { "active": true, "entity": "social", "key$": "BasicSocialFlow", "kind": "basic", "name": "BasicSocialFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "social_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "social_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "social_ref01", "srcdatavar": "social_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-social_ref01" } }], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "social_ref01", "suffix": "_rm0" }, "m": { "id": "social01" }, "o": "remove", "s": [], "v": [], "index$": 3 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "social_ref01" } }], "index$": 4 }] }, 'Social', { "POST /social/instagram/exchange": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "properties": { "code": { "type": "string", "title": "Code", "key$": "code" }, "code_verifier": { "type": "string", "title": "Code Verifier", "key$": "code_verifier" } }, "type": "object", "required": ["code", "code_verifier"], "title": "CodeExchangeRequest", "x-ref": "#/components/schemas/CodeExchangeRequest", "index$": 1 } } }, "required": true }, "parameters": [] }, "POST /social/tiktok/exchange": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "properties": { "code": { "type": "string", "title": "Code", "key$": "code" }, "code_verifier": { "type": "string", "title": "Code Verifier", "key$": "code_verifier" } }, "type": "object", "required": ["code", "code_verifier"], "title": "CodeExchangeRequest", "x-ref": "#/components/schemas/CodeExchangeRequest", "index$": 1 } } }, "required": true }, "parameters": [] }, "GET /social/connections": { "protocol": "http", "parameters": [] }, "GET /social/platforms": { "protocol": "http", "parameters": [] }, "GET /social/instagram/auth": { "protocol": "http", "parameters": [{ "name": "code_challenge", "in": "query", "required": false, "schema": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Code Challenge" }, "index$": 0 }, { "name": "code_challenge_method", "in": "query", "required": false, "schema": { "type": "string", "default": "S256", "title": "Code Challenge Method" }, "index$": 1 }] }, "GET /social/instagram/callback": { "protocol": "http", "parameters": [{ "name": "code", "in": "query", "required": false, "schema": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Code" }, "index$": 0 }, { "name": "error", "in": "query", "required": false, "schema": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Error" }, "index$": 1 }, { "name": "error_description", "in": "query", "required": false, "schema": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Error Description" }, "index$": 2 }, { "name": "state", "in": "query", "required": false, "schema": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "State" }, "index$": 3 }] }, "GET /social/tiktok/auth": { "protocol": "http", "parameters": [{ "name": "code_challenge", "in": "query", "required": false, "schema": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Code Challenge" }, "index$": 0 }, { "name": "code_challenge_method", "in": "query", "required": false, "schema": { "type": "string", "default": "S256", "title": "Code Challenge Method" }, "index$": 1 }] }, "GET /social/tiktok/callback": { "protocol": "http", "parameters": [{ "name": "code", "in": "query", "required": false, "schema": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Code" }, "index$": 0 }, { "name": "error", "in": "query", "required": false, "schema": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Error" }, "index$": 1 }, { "name": "error_description", "in": "query", "required": false, "schema": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Error Description" }, "index$": 2 }, { "name": "state", "in": "query", "required": false, "schema": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "State" }, "index$": 3 }] }, "DELETE /social/connections/{platform}": { "protocol": "http", "parameters": [{ "name": "platform", "in": "path", "required": true, "schema": { "type": "string", "enum": ["TIKTOK", "INSTAGRAM", "YOUTUBE"], "title": "SocialPlatform", "x-ref": "#/components/schemas/SocialPlatform" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const social_ref01_ent = client.Social();
        let social_ref01_data = setup.data.new.social['social_ref01'];
        social_ref01_data = (await social_ref01_ent.create(social_ref01_data)).data();
        (0, node_assert_1.default)(null != social_ref01_data.id);
        // LIST
        const social_ref01_match = {};
        const social_ref01_list = (await social_ref01_ent.list(social_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(social_ref01_list, { id: social_ref01_data.id })));
        // LOAD
        const social_ref01_match_dt0 = {};
        social_ref01_match_dt0.id = social_ref01_data.id;
        const social_ref01_data_dt0 = (await social_ref01_ent.load(social_ref01_match_dt0)).data();
        (0, node_assert_1.default)(social_ref01_data_dt0.id === social_ref01_data.id);
        // REMOVE
        const social_ref01_match_rm0 = { id: social_ref01_data.id };
        await social_ref01_ent.remove(social_ref01_match_rm0);
        // LIST
        const social_ref01_match_rt0 = {};
        const social_ref01_list_rt0 = (await social_ref01_ent.list(social_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(social_ref01_list_rt0, { id: social_ref01_data.id })));
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/social/SocialTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CrackedApiReferenceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['social01', 'social02', 'social03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CRACKED_API_REFERENCE_TEST_SOCIAL_ENTID': idmap,
        'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
        'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
        'CRACKED_API_REFERENCE_APIKEY': '',
        'CRACKED_API_REFERENCE_SERVER_BASE': "",
    });
    idmap = env['CRACKED_API_REFERENCE_TEST_SOCIAL_ENTID'];
    const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CRACKED_API_REFERENCE_TEST_SOCIAL_ENTID'];
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
//# sourceMappingURL=SocialEntity.test.js.map