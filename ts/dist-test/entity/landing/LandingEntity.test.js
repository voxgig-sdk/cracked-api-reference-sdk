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
(0, node_test_1.describe)('LandingEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CRACKED_API_REFERENCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CrackedApiReferenceSDK.test();
        const ent = testsdk.Landing();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Landing().create({ "index": "x", "file": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'landing.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "file": { "a": true, "fo": "binary", "h": "File", "n": "file", "r": true, "t": "`$STRING`", "key$": "file", "index$": 0 } }, "name": "landing", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/landings/microhub/testimonial-image/{index}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "index", "or": "index", "r": true, "t": "`$INTEGER`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "product_id", "or": "product_id", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/landings/microhub/testimonial-image/{index}", "q": { "exist": ["index"] }, "r": {}, "rb": { "fields": [{ "binary": true, "name": "file" }], "kind": "multipart", "media": "multipart/form-data" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "landings" }, { "lit": "microhub" }, { "lit": "testimonial-image" }, { "var": "index" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /api/landings/landing/reference-image", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "product_id", "or": "product_id", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/landings/landing/reference-image", "q": { "$action": "reference_image" }, "r": {}, "rb": { "fields": [{ "binary": true, "name": "file" }], "kind": "multipart", "media": "multipart/form-data" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "landings" }, { "lit": "landing" }, { "lit": "reference-image" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "bf": ["mode", "prompt", "referenceImageUrl"], "co": { "id": "POST /api/landings/landing/regenerate", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "product_id", "or": "product_id", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/landings/landing/regenerate", "q": { "$action": "regenerate" }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "landings" }, { "lit": "landing" }, { "lit": "regenerate" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "POST /api/landings/microhub/header-image", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "product_id", "or": "product_id", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/landings/microhub/header-image", "q": {}, "r": {}, "rb": { "fields": [{ "binary": true, "name": "file" }], "kind": "multipart", "media": "multipart/form-data" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "landings" }, { "lit": "microhub" }, { "lit": "header-image" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "a": true, "co": { "id": "POST /api/landings/microhub/profile-image", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "product_id", "or": "product_id", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/landings/microhub/profile-image", "q": {}, "r": {}, "rb": { "fields": [{ "binary": true, "name": "file" }], "kind": "multipart", "media": "multipart/form-data" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "landings" }, { "lit": "microhub" }, { "lit": "profile-image" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "landing", "name__orig": "landing", "Name": "Landing", "name_": "landing", "name-": "landing", "NAME": "LANDING", "index$": 92 }, { "active": true, "entity": "landing", "key$": "BasicLandingFlow", "kind": "basic", "name": "BasicLandingFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "landing_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'Landing', { "POST /api/landings/microhub/testimonial-image/{index}": { "protocol": "http", "requestBody": { "required": true, "content": { "multipart/form-data": { "schema": { "properties": { "file": { "type": "string", "format": "binary", "title": "File", "key$": "file" } }, "type": "object", "required": ["file"], "title": "Body_upload_testimonial_image_api_landings_microhub_testimonial_image__index__post", "x-ref": "#/components/schemas/Body_upload_testimonial_image_api_landings_microhub_testimonial_image__index__post", "index$": 1 } } } }, "parameters": [{ "name": "index", "in": "path", "required": true, "schema": { "type": "integer", "title": "Index" }, "index$": 0 }, { "name": "product_id", "in": "query", "required": false, "schema": { "anyOf": [{ "type": "string", "format": "uuid" }, { "type": "null" }], "description": "Product ID for enterprise users with multiple products", "title": "Product Id" }, "description": "Product ID for enterprise users with multiple products", "index$": 1 }] }, "POST /api/landings/landing/reference-image": { "protocol": "http", "requestBody": { "required": true, "content": { "multipart/form-data": { "schema": { "properties": { "file": { "type": "string", "format": "binary", "title": "File" } }, "type": "object", "required": ["file"], "title": "Body_upload_landing_reference_image_api_landings_landing_reference_image_post", "x-ref": "#/components/schemas/Body_upload_landing_reference_image_api_landings_landing_reference_image_post" } } } }, "parameters": [{ "name": "product_id", "in": "query", "required": false, "schema": { "anyOf": [{ "type": "string", "format": "uuid" }, { "type": "null" }], "description": "Product ID for enterprise users with multiple products", "title": "Product Id" }, "description": "Product ID for enterprise users with multiple products", "index$": 0 }] }, "POST /api/landings/landing/regenerate": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "properties": { "mode": { "type": "string", "enum": ["modify", "regenerate"], "title": "Mode" }, "prompt": { "type": "string", "title": "Prompt" }, "referenceImageUrl": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Referenceimageurl" } }, "type": "object", "required": ["mode", "prompt"], "title": "LandingRegenerateRequest", "x-ref": "#/components/schemas/LandingRegenerateRequest" } } } }, "parameters": [{ "name": "product_id", "in": "query", "required": false, "schema": { "anyOf": [{ "type": "string", "format": "uuid" }, { "type": "null" }], "description": "Product ID for enterprise users with multiple products", "title": "Product Id" }, "description": "Product ID for enterprise users with multiple products", "index$": 0 }] }, "POST /api/landings/microhub/header-image": { "protocol": "http", "requestBody": { "required": true, "content": { "multipart/form-data": { "schema": { "properties": { "file": { "type": "string", "format": "binary", "title": "File", "key$": "file" } }, "type": "object", "required": ["file"], "title": "Body_upload_header_image_api_landings_microhub_header_image_post", "x-ref": "#/components/schemas/Body_upload_header_image_api_landings_microhub_header_image_post", "index$": 1 } } } }, "parameters": [{ "name": "product_id", "in": "query", "required": false, "schema": { "anyOf": [{ "type": "string", "format": "uuid" }, { "type": "null" }], "description": "Product ID for enterprise users with multiple products", "title": "Product Id" }, "description": "Product ID for enterprise users with multiple products", "index$": 0 }] }, "POST /api/landings/microhub/profile-image": { "protocol": "http", "requestBody": { "required": true, "content": { "multipart/form-data": { "schema": { "properties": { "file": { "type": "string", "format": "binary", "title": "File", "key$": "file" } }, "type": "object", "required": ["file"], "title": "Body_upload_profile_image_api_landings_microhub_profile_image_post", "x-ref": "#/components/schemas/Body_upload_profile_image_api_landings_microhub_profile_image_post", "index$": 1 } } } }, "parameters": [{ "name": "product_id", "in": "query", "required": false, "schema": { "anyOf": [{ "type": "string", "format": "uuid" }, { "type": "null" }], "description": "Product ID for enterprise users with multiple products", "title": "Product Id" }, "description": "Product ID for enterprise users with multiple products", "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const landing_ref01_ent = client.Landing();
        let landing_ref01_data = setup.data.new.landing['landing_ref01'];
        landing_ref01_data = (await landing_ref01_ent.create(landing_ref01_data)).data();
        (0, node_assert_1.default)(null != landing_ref01_data);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/landing/LandingTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CrackedApiReferenceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['landing01', 'landing02', 'landing03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CRACKED_API_REFERENCE_TEST_LANDING_ENTID': idmap,
        'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
        'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
        'CRACKED_API_REFERENCE_APIKEY': '',
        'CRACKED_API_REFERENCE_SERVER_BASE': "",
    });
    idmap = env['CRACKED_API_REFERENCE_TEST_LANDING_ENTID'];
    const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CRACKED_API_REFERENCE_TEST_LANDING_ENTID'];
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
//# sourceMappingURL=LandingEntity.test.js.map