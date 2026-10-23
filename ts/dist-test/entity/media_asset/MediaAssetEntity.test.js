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
(0, node_test_1.describe)('MediaAssetEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CRACKED_API_REFERENCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CrackedApiReferenceSDK.test();
        const ent = testsdk.MediaAsset();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.MediaAsset().load({ "id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'media_asset.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "category": { "a": true, "h": "Category", "n": "category", "r": true, "t": "`$STRING`", "key$": "category", "index$": 0 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": true, "t": "`$STRING`", "key$": "createdAt", "index$": 1 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "t": "`$STRING`", "key$": "description", "index$": 2 }, "file": { "a": true, "fo": "binary", "h": "File", "n": "file", "r": true, "t": "`$STRING`", "key$": "file", "index$": 3 }, "id": { "a": true, "fo": "uuid", "h": "Id", "n": "id", "r": true, "t": "`$STRING`", "key$": "id", "index$": 4 }, "media_assets": { "a": true, "h": "Media Assets", "n": "media_assets", "r": true, "t": "`$ARRAY`", "key$": "media_assets", "index$": 5 }, "onboardingDataId": { "a": true, "h": "Onboarding Data Id", "n": "onboardingDataId", "r": false, "t": "`$ANY`", "key$": "onboardingDataId", "index$": 6 }, "onboarding_data_id": { "a": true, "fo": "uuid", "h": "Onboarding Data Id", "n": "onboarding_data_id", "r": true, "t": "`$STRING`", "key$": "onboarding_data_id", "index$": 7 }, "productId": { "a": true, "h": "Product Id", "n": "productId", "r": false, "t": "`$ANY`", "key$": "productId", "index$": 8 }, "product_id": { "a": true, "h": "Product Id", "n": "product_id", "r": false, "t": "`$STRING`", "key$": "product_id", "index$": 9 }, "source": { "a": true, "h": "Source", "n": "source", "r": true, "t": "`$STRING`", "key$": "source", "index$": 10 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "t": "`$STRING`", "key$": "type", "index$": 11 }, "updatedAt": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updatedAt", "r": true, "t": "`$STRING`", "key$": "updatedAt", "index$": 12 }, "url": { "a": true, "h": "Url", "n": "url", "r": true, "t": "`$STRING`", "key$": "url", "index$": 13 }, "usedAt": { "a": true, "h": "Used At", "n": "usedAt", "r": false, "t": "`$ANY`", "key$": "usedAt", "index$": 14 }, "veo3VideoId": { "a": true, "h": "Veo3 Video Id", "n": "veo3VideoId", "r": false, "t": "`$ANY`", "key$": "veo3VideoId", "index$": 15 } }, "id": { "field": "id", "name": "id" }, "name": "media_asset", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/media-assets/{media_asset_id}/exclude-copycat", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "media_asset_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/media-assets/{media_asset_id}/exclude-copycat", "q": { "$action": "exclude_copycat", "exist": ["id"] }, "r": { "param": { "media_asset_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "media-assets" }, { "var": "id" }, { "lit": "exclude-copycat" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /api/media-assets/upload", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/media-assets/upload", "q": { "$action": "upload" }, "r": {}, "rb": { "fields": [{ "name": "category" }, { "name": "description" }, { "binary": true, "name": "file" }, { "name": "product_id" }, { "name": "scene_id" }, { "name": "source" }, { "name": "type" }, { "name": "veo3_video_id" }], "kind": "multipart", "media": "multipart/form-data" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "media-assets" }, { "lit": "upload" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /api/onboarding-v6/repost-content/upload", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/onboarding-v6/repost-content/upload", "q": {}, "r": {}, "rb": { "fields": [{ "binary": true, "name": "file" }, { "name": "onboarding_data_id" }], "kind": "multipart", "media": "multipart/form-data" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "onboarding-v6" }, { "lit": "repost-content" }, { "lit": "upload" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/video-variation/media-assets/{product_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "product_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/video-variation/media-assets/{product_id}", "q": { "exist": ["id"] }, "r": { "param": { "product_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "video-variation" }, { "lit": "media-assets" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "media_asset", "name__orig": "media_asset", "Name": "MediaAsset", "name_": "media_asset", "name-": "media-asset", "NAME": "MEDIA_ASSET", "index$": 99 }, { "active": true, "entity": "media_asset", "key$": "BasicMediaAssetFlow", "kind": "basic", "name": "BasicMediaAssetFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "media_asset_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "media_asset_ref01", "srcdatavar": "media_asset_ref01_data", "suffix": "_dt0" }, "m": { "id": "media_asset01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-media_asset_ref01" } }], "index$": 1 }] }, 'MediaAsset', { "POST /api/media-assets/{media_asset_id}/exclude-copycat": { "protocol": "http", "parameters": [{ "name": "media_asset_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid", "title": "Media Asset Id" }, "index$": 0 }] }, "POST /api/media-assets/upload": { "protocol": "http", "requestBody": { "content": { "multipart/form-data": { "schema": { "properties": { "file": { "type": "string", "format": "binary", "title": "File" }, "type": { "type": "string", "enum": ["video", "image"], "title": "MediaAssetType", "x-ref": "#/components/schemas/MediaAssetType" }, "source": { "type": "string", "enum": ["demo", "outro", "custom", "ads", "copycat"], "title": "MediaAssetSource", "x-ref": "#/components/schemas/MediaAssetSource" }, "category": { "type": "string", "enum": ["product", "scene", "formula"], "title": "MediaAssetCategory", "x-ref": "#/components/schemas/MediaAssetCategory" }, "product_id": { "anyOf": [{ "type": "string", "format": "uuid" }, { "type": "null" }], "title": "Product Id" }, "scene_id": { "anyOf": [{ "type": "string", "format": "uuid" }, { "type": "null" }], "title": "Scene Id" }, "description": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Description" }, "veo3_video_id": { "anyOf": [{ "type": "string", "format": "uuid" }, { "type": "null" }], "title": "Veo3 Video Id" } }, "type": "object", "required": ["file", "type", "source", "category"], "title": "Body_upload_media_asset_endpoint_api_media_assets_upload_post", "x-ref": "#/components/schemas/Body_upload_media_asset_endpoint_api_media_assets_upload_post" } } }, "required": true }, "parameters": [] }, "POST /api/onboarding-v6/repost-content/upload": { "protocol": "http", "requestBody": { "content": { "multipart/form-data": { "schema": { "properties": { "file": { "type": "string", "format": "binary", "title": "File", "key$": "file" }, "onboarding_data_id": { "type": "string", "format": "uuid", "title": "Onboarding Data Id", "key$": "onboarding_data_id" } }, "type": "object", "required": ["file", "onboarding_data_id"], "title": "Body_upload_repost_content_api_onboarding_v6_repost_content_upload_post", "x-ref": "#/components/schemas/Body_upload_repost_content_api_onboarding_v6_repost_content_upload_post", "index$": 1 } } }, "required": true }, "parameters": [] }, "GET /api/video-variation/media-assets/{product_id}": { "protocol": "http", "parameters": [{ "name": "product_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid", "title": "Product Id" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const media_asset_ref01_ent = client.MediaAsset();
        let media_asset_ref01_data = setup.data.new.media_asset['media_asset_ref01'];
        media_asset_ref01_data = (await media_asset_ref01_ent.create(media_asset_ref01_data)).data();
        (0, node_assert_1.default)(null != media_asset_ref01_data.id);
        // LOAD
        const media_asset_ref01_match_dt0 = {};
        media_asset_ref01_match_dt0.id = media_asset_ref01_data.id;
        const media_asset_ref01_data_dt0 = (await media_asset_ref01_ent.load(media_asset_ref01_match_dt0)).data();
        (0, node_assert_1.default)(media_asset_ref01_data_dt0.id === media_asset_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/media_asset/MediaAssetTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CrackedApiReferenceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['media_asset01', 'media_asset02', 'media_asset03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CRACKED_API_REFERENCE_TEST_MEDIA_ASSET_ENTID': idmap,
        'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
        'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
        'CRACKED_API_REFERENCE_APIKEY': '',
        'CRACKED_API_REFERENCE_SERVER_BASE': "",
    });
    idmap = env['CRACKED_API_REFERENCE_TEST_MEDIA_ASSET_ENTID'];
    const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CRACKED_API_REFERENCE_TEST_MEDIA_ASSET_ENTID'];
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
//# sourceMappingURL=MediaAssetEntity.test.js.map