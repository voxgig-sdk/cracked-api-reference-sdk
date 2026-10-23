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
(0, node_test_1.describe)('ScanSocialEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CRACKED_API_REFERENCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CrackedApiReferenceSDK.test();
        const ent = testsdk.ScanSocial();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.ScanSocial().create({ "onboarding_data_id": 1, "tiktok_handle": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'scan_social.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "instagram_handle": { "a": true, "h": "Instagram Handle", "n": "instagram_handle", "r": false, "t": "`$ANY`", "key$": "instagram_handle", "index$": 0 }, "onboarding_data_id": { "a": true, "h": "Onboarding Data Id", "n": "onboarding_data_id", "r": true, "t": "`$STRING`", "key$": "onboarding_data_id", "index$": 1 }, "product_id": { "a": true, "fo": "uuid", "h": "Product Id", "n": "product_id", "op": { "create": { "req": false, "type": "`$STRING`" } }, "r": true, "t": "`$STRING`", "key$": "product_id", "index$": 2 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "t": "`$STRING`", "key$": "status", "index$": 3 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "t": "`$BOOLEAN`", "key$": "success", "index$": 4 }, "task_id": { "a": true, "h": "Task Id", "n": "task_id", "r": false, "t": "`$STRING`", "key$": "task_id", "index$": 5 }, "tiktok_handle": { "a": true, "h": "Tiktok Handle", "n": "tiktok_handle", "op": { "create": { "req": true, "type": "`$STRING`" } }, "r": false, "t": "`$ANY`", "key$": "tiktok_handle", "index$": 6 } }, "name": "scan_social", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["instagram_handle", "onboarding_data_id", "tiktok_handle"], "co": { "id": "POST /api/reset-product/scan-socials", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/reset-product/scan-socials", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "reset-product" }, { "lit": "scan-socials" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "bf": ["product_id", "tiktok_handle"], "co": { "id": "POST /api/video-variation/scan-socials", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/video-variation/scan-socials", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "video-variation" }, { "lit": "scan-socials" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "scan_social", "name__orig": "scan_social", "Name": "ScanSocial", "name_": "scan_social", "name-": "scan-social", "NAME": "SCAN_SOCIAL", "index$": 122 }, { "active": true, "entity": "scan_social", "key$": "BasicScanSocialFlow", "kind": "basic", "name": "BasicScanSocialFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "scan_social_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'ScanSocial', { "POST /api/reset-product/scan-socials": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "properties": { "onboarding_data_id": { "type": "string", "title": "Onboarding Data Id", "key$": "onboarding_data_id" }, "tiktok_handle": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Tiktok Handle", "key$": "tiktok_handle" }, "instagram_handle": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Instagram Handle", "key$": "instagram_handle" } }, "type": "object", "required": ["onboarding_data_id"], "title": "ScanSocialsResetProductV6Request", "description": "Request body for scan-socials endpoint.", "x-ref": "#/components/schemas/ScanSocialsResetProductV6Request", "index$": 1 } } }, "required": true }, "parameters": [] }, "POST /api/video-variation/scan-socials": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "properties": { "tiktok_handle": { "type": "string", "title": "Tiktok Handle", "key$": "tiktok_handle" }, "product_id": { "anyOf": [{ "type": "string", "format": "uuid" }, { "type": "null" }], "title": "Product Id", "key$": "product_id" } }, "type": "object", "required": ["tiktok_handle"], "title": "ScanSocialsForProductRequest", "x-ref": "#/components/schemas/ScanSocialsForProductRequest", "index$": 1 } } }, "required": true }, "parameters": [] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const scan_social_ref01_ent = client.ScanSocial();
        let scan_social_ref01_data = setup.data.new.scan_social['scan_social_ref01'];
        scan_social_ref01_data = (await scan_social_ref01_ent.create(scan_social_ref01_data)).data();
        (0, node_assert_1.default)(null != scan_social_ref01_data);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/scan_social/ScanSocialTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CrackedApiReferenceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['scan_social01', 'scan_social02', 'scan_social03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CRACKED_API_REFERENCE_TEST_SCAN_SOCIAL_ENTID': idmap,
        'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
        'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
        'CRACKED_API_REFERENCE_APIKEY': '',
        'CRACKED_API_REFERENCE_SERVER_BASE': "",
    });
    idmap = env['CRACKED_API_REFERENCE_TEST_SCAN_SOCIAL_ENTID'];
    const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CRACKED_API_REFERENCE_TEST_SCAN_SOCIAL_ENTID'];
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
//# sourceMappingURL=ScanSocialEntity.test.js.map