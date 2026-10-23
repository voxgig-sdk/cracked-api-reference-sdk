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
(0, node_test_1.describe)('AuthEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CRACKED_API_REFERENCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CrackedApiReferenceSDK.test();
        const ent = testsdk.Auth();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE;
        for (const op of []) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'auth.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": {}, "name": "auth", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["attribution", "email", "industry", "returnTo"], "co": { "id": "POST /auth/magic-link", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/auth/magic-link", "q": { "$action": "magic_link" }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "auth" }, { "lit": "magic-link" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "bf": ["attribution", "industry", "token"], "co": { "id": "POST /auth/verify-google-token", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/auth/verify-google-token", "q": { "$action": "verify_google_token" }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "auth" }, { "lit": "verify-google-token" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "bf": ["industry", "token"], "co": { "id": "POST /auth/verify-magic-link", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/auth/verify-magic-link", "q": { "$action": "verify_magic_link" }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "auth" }, { "lit": "verify-magic-link" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "bf": ["token"], "co": { "id": "POST /auth/verify-share-access", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/auth/verify-share-access", "q": { "$action": "verify_share_access" }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "auth" }, { "lit": "verify-share-access" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "auth", "name__orig": "auth", "Name": "Auth", "name_": "auth", "name-": "auth", "NAME": "AUTH", "index$": 47 }, { "active": true, "entity": "auth", "key$": "BasicAuthFlow", "kind": "basic", "name": "BasicAuthFlow", "param": {}, "step": [{ "a": false, "d": {}, "i": { "ref": "auth_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "unreachable": true }] }, 'Auth', { "POST /auth/magic-link": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "properties": { "email": { "type": "string", "title": "Email" }, "attribution": { "anyOf": [{ "type": "object" }, { "type": "null" }], "title": "Attribution" }, "industry": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Industry" }, "returnTo": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Returnto" } }, "type": "object", "required": ["email"], "title": "MagicLinkRequest", "x-ref": "#/components/schemas/MagicLinkRequest" } } }, "required": true }, "parameters": [] }, "POST /auth/verify-google-token": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "properties": { "token": { "type": "string", "title": "Token" }, "attribution": { "anyOf": [{ "type": "object" }, { "type": "null" }], "title": "Attribution" }, "industry": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Industry" } }, "type": "object", "required": ["token"], "title": "GoogleToken", "x-ref": "#/components/schemas/GoogleToken" } } }, "required": true }, "parameters": [] }, "POST /auth/verify-magic-link": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "properties": { "token": { "type": "string", "title": "Token" }, "industry": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Industry" } }, "type": "object", "required": ["token"], "title": "MagicLinkVerify", "x-ref": "#/components/schemas/MagicLinkVerify" } } }, "required": true }, "parameters": [] }, "POST /auth/verify-share-access": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "properties": { "token": { "type": "string", "title": "Token" } }, "type": "object", "required": ["token"], "title": "ShareAccessVerifyRequest", "x-ref": "#/components/schemas/ShareAccessVerifyRequest" } } }, "required": true }, "parameters": [] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let auth_ref01_data = Object.values(setup.data.existing.auth)[0];
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/auth/AuthTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CrackedApiReferenceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['auth01', 'auth02', 'auth03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CRACKED_API_REFERENCE_TEST_AUTH_ENTID': idmap,
        'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
        'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
        'CRACKED_API_REFERENCE_APIKEY': '',
        'CRACKED_API_REFERENCE_SERVER_BASE': "",
    });
    idmap = env['CRACKED_API_REFERENCE_TEST_AUTH_ENTID'];
    const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CRACKED_API_REFERENCE_TEST_AUTH_ENTID'];
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
//# sourceMappingURL=AuthEntity.test.js.map