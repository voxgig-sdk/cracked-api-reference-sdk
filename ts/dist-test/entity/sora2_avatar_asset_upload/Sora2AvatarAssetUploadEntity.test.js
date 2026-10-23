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
(0, node_test_1.describe)('Sora2AvatarAssetUploadEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CRACKED_API_REFERENCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CrackedApiReferenceSDK.test();
        const ent = testsdk.Sora2AvatarAssetUpload();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Sora2AvatarAssetUpload().create({ "avatar_id": 1, "file": "x", "s3_key": "x", "upload_type": "x", "url": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'sora2_avatar_asset_upload.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "avatar_id": { "a": true, "h": "Avatar Id", "n": "avatar_id", "r": false, "t": "`$STRING`", "key$": "avatar_id", "index$": 0 }, "file": { "a": true, "fo": "binary", "h": "File", "n": "file", "r": true, "t": "`$STRING`", "key$": "file", "index$": 1 }, "run_output_dir": { "a": true, "h": "Run Output Dir", "n": "run_output_dir", "r": false, "t": "`$ANY`", "key$": "run_output_dir", "index$": 2 }, "s3_key": { "a": true, "h": "S3 Key", "n": "s3_key", "r": true, "t": "`$STRING`", "key$": "s3_key", "index$": 3 }, "upload_type": { "a": true, "h": "Upload Type", "n": "upload_type", "r": true, "t": "`$STRING`", "key$": "upload_type", "index$": 4 }, "url": { "a": true, "h": "Url", "n": "url", "r": true, "t": "`$STRING`", "key$": "url", "index$": 5 } }, "name": "sora2_avatar_asset_upload", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/admin/sora2-avatars/upload-asset", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/admin/sora2-avatars/upload-asset", "q": {}, "r": {}, "rb": { "fields": [{ "name": "avatar_id" }, { "binary": true, "name": "file" }, { "name": "run_output_dir" }, { "name": "upload_type" }], "kind": "multipart", "media": "multipart/form-data" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "admin" }, { "lit": "sora2-avatars" }, { "lit": "upload-asset" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "sora2_avatar_asset_upload", "name__orig": "sora2_avatar_asset_upload", "Name": "Sora2AvatarAssetUpload", "name_": "sora2_avatar_asset_upload", "name-": "sora2-avatar-asset-upload", "NAME": "SORA2_AVATAR_ASSET_UPLOAD", "index$": 146 }, { "active": true, "entity": "sora2_avatar_asset_upload", "key$": "BasicSora2AvatarAssetUploadFlow", "kind": "basic", "name": "BasicSora2AvatarAssetUploadFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "sora2_avatar_asset_upload_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'Sora2AvatarAssetUpload', { "POST /api/admin/sora2-avatars/upload-asset": { "protocol": "http", "requestBody": { "content": { "multipart/form-data": { "schema": { "properties": { "file": { "type": "string", "format": "binary", "title": "File", "key$": "file" }, "upload_type": { "type": "string", "enum": ["sora2_video", "avatar_frame", "headshot"], "title": "Upload Type", "key$": "upload_type" }, "run_output_dir": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Run Output Dir", "key$": "run_output_dir" }, "avatar_id": { "anyOf": [{ "type": "string", "format": "uuid" }, { "type": "null" }], "title": "Avatar Id", "key$": "avatar_id" } }, "type": "object", "required": ["file", "upload_type"], "title": "Body_upload_sora2_avatar_asset_api_admin_sora2_avatars_upload_asset_post", "x-ref": "#/components/schemas/Body_upload_sora2_avatar_asset_api_admin_sora2_avatars_upload_asset_post", "index$": 1 } } }, "required": true }, "parameters": [] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const sora2_avatar_asset_upload_ref01_ent = client.Sora2AvatarAssetUpload();
        let sora2_avatar_asset_upload_ref01_data = setup.data.new.sora2_avatar_asset_upload['sora2_avatar_asset_upload_ref01'];
        sora2_avatar_asset_upload_ref01_data = (await sora2_avatar_asset_upload_ref01_ent.create(sora2_avatar_asset_upload_ref01_data)).data();
        (0, node_assert_1.default)(null != sora2_avatar_asset_upload_ref01_data);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/sora2_avatar_asset_upload/Sora2AvatarAssetUploadTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CrackedApiReferenceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['sora2_avatar_asset_upload01', 'sora2_avatar_asset_upload02', 'sora2_avatar_asset_upload03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CRACKED_API_REFERENCE_TEST_SORA2_AVATAR_ASSET_UPLOAD_ENTID': idmap,
        'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
        'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
        'CRACKED_API_REFERENCE_APIKEY': '',
        'CRACKED_API_REFERENCE_SERVER_BASE': "",
    });
    idmap = env['CRACKED_API_REFERENCE_TEST_SORA2_AVATAR_ASSET_UPLOAD_ENTID'];
    const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CRACKED_API_REFERENCE_TEST_SORA2_AVATAR_ASSET_UPLOAD_ENTID'];
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
//# sourceMappingURL=Sora2AvatarAssetUploadEntity.test.js.map