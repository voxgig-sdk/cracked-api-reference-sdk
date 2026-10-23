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
(0, node_test_1.describe)('PublicResumeStatusEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CRACKED_API_REFERENCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CrackedApiReferenceSDK.test();
        const ent = testsdk.PublicResumeStatus();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.PublicResumeStatus().load({ "oid": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'public_resume_status.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "can_resume_prelogin": { "a": true, "h": "Can Resume Prelogin", "n": "can_resume_prelogin", "r": false, "t": "`$BOOLEAN`", "key$": "can_resume_prelogin", "index$": 0 }, "content_collection_ready": { "a": true, "h": "Content Collection Ready", "n": "content_collection_ready", "r": false, "t": "`$BOOLEAN`", "key$": "content_collection_ready", "index$": 1 }, "current_step": { "a": true, "h": "Current Step", "n": "current_step", "r": false, "t": "`$ANY`", "key$": "current_step", "index$": 2 }, "exists": { "a": true, "h": "Exists", "n": "exists", "r": true, "t": "`$BOOLEAN`", "key$": "exists", "index$": 3 }, "flow_variant": { "a": true, "h": "Flow Variant", "n": "flow_variant", "r": false, "t": "`$ANY`", "key$": "flow_variant", "index$": 4 }, "repost_content_count": { "a": true, "h": "Repost Content Count", "n": "repost_content_count", "r": false, "t": "`$INTEGER`", "key$": "repost_content_count", "index$": 5 }, "repost_source": { "a": true, "h": "Repost Source", "n": "repost_source", "r": false, "t": "`$ANY`", "key$": "repost_source", "index$": 6 }, "requires_repost_content": { "a": true, "h": "Requires Repost Content", "n": "requires_repost_content", "r": false, "t": "`$BOOLEAN`", "key$": "requires_repost_content", "index$": 7 }, "skip_demo": { "a": true, "h": "Skip Demo", "n": "skip_demo", "r": false, "t": "`$BOOLEAN`", "key$": "skip_demo", "index$": 8 } }, "name": "public_resume_status", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/onboarding-v6/resume-status-public", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "oid", "or": "oid", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/onboarding-v6/resume-status-public", "q": { "exist": ["oid"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "onboarding-v6" }, { "lit": "resume-status-public" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "public_resume_status", "name__orig": "public_resume_status", "Name": "PublicResumeStatus", "name_": "public_resume_status", "name-": "public-resume-status", "NAME": "PUBLIC_RESUME_STATUS", "index$": 113 }, { "active": true, "entity": "public_resume_status", "key$": "BasicPublicResumeStatusFlow", "kind": "basic", "name": "BasicPublicResumeStatusFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "public_resume_status_ref01", "srcdatavar": "public_resume_status_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-public_resume_status_ref01" } }], "index$": 0 }] }, 'PublicResumeStatus', { "GET /api/onboarding-v6/resume-status-public": { "protocol": "http", "parameters": [{ "name": "oid", "in": "query", "required": true, "schema": { "type": "string", "description": "OnboardingData UUID", "title": "Oid" }, "description": "OnboardingData UUID", "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let public_resume_status_ref01_data = Object.values(setup.data.existing.public_resume_status)[0];
        // LOAD
        const public_resume_status_ref01_ent = client.PublicResumeStatus();
        const public_resume_status_ref01_match_dt0 = {};
        const public_resume_status_ref01_data_dt0 = (await public_resume_status_ref01_ent.load(public_resume_status_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != public_resume_status_ref01_data_dt0);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/public_resume_status/PublicResumeStatusTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CrackedApiReferenceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['public_resume_status01', 'public_resume_status02', 'public_resume_status03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CRACKED_API_REFERENCE_TEST_PUBLIC_RESUME_STATUS_ENTID': idmap,
        'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
        'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
        'CRACKED_API_REFERENCE_APIKEY': '',
        'CRACKED_API_REFERENCE_SERVER_BASE': "",
    });
    idmap = env['CRACKED_API_REFERENCE_TEST_PUBLIC_RESUME_STATUS_ENTID'];
    const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CRACKED_API_REFERENCE_TEST_PUBLIC_RESUME_STATUS_ENTID'];
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
//# sourceMappingURL=PublicResumeStatusEntity.test.js.map