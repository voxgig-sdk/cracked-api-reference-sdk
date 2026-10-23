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
(0, node_test_1.describe)('CarouselAgentDetailEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CRACKED_API_REFERENCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CrackedApiReferenceSDK.test();
        const ent = testsdk.CarouselAgentDetail();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.CarouselAgentDetail().load({ "agent_id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE;
        for (const op of []) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'carousel_agent_detail.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "agent_id": { "a": true, "h": "Agent Id", "n": "agent_id", "r": true, "t": "`$STRING`", "key$": "agent_id", "index$": 0 }, "agent_name": { "a": true, "h": "Agent Name", "n": "agent_name", "r": true, "t": "`$STRING`", "key$": "agent_name", "index$": 1 }, "connection_status": { "a": true, "h": "Connection Status", "n": "connection_status", "r": false, "t": "`$ANY`", "key$": "connection_status", "index$": 2 }, "followers": { "a": true, "h": "Followers", "n": "followers", "r": false, "t": "`$ANY`", "key$": "followers", "index$": 3 }, "following": { "a": true, "h": "Following", "n": "following", "r": false, "t": "`$ANY`", "key$": "following", "index$": 4 }, "metrics_updated_at": { "a": true, "h": "Metrics Updated At", "n": "metrics_updated_at", "r": false, "t": "`$ANY`", "key$": "metrics_updated_at", "index$": 5 }, "phone_admin_status": { "a": true, "h": "Phone Admin Status", "n": "phone_admin_status", "r": true, "t": "`$STRING`", "key$": "phone_admin_status", "index$": 6 }, "profile_likes": { "a": true, "h": "Profile Likes", "n": "profile_likes", "r": false, "t": "`$ANY`", "key$": "profile_likes", "index$": 7 }, "profile_url": { "a": true, "h": "Profile Url", "n": "profile_url", "r": false, "t": "`$ANY`", "key$": "profile_url", "index$": 8 }, "warmup_days": { "a": true, "h": "Warmup Days", "n": "warmup_days", "r": false, "t": "`$ANY`", "key$": "warmup_days", "index$": 9 }, "warmup_hold_until": { "a": true, "h": "Warmup Hold Until", "n": "warmup_hold_until", "r": false, "t": "`$ANY`", "key$": "warmup_hold_until", "index$": 10 }, "warmup_status": { "a": true, "h": "Warmup Status", "n": "warmup_status", "r": true, "t": "`$STRING`", "key$": "warmup_status", "index$": 11 } }, "name": "carousel_agent_detail", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/admin/carousels/agents/{agent_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "agent_id", "or": "agent_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/admin/carousels/agents/{agent_id}", "q": { "exist": ["agent_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "admin" }, { "lit": "carousels" }, { "lit": "agents" }, { "var": "agent_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.agent"]] }, "key$": "carousel_agent_detail", "name__orig": "carousel_agent_detail", "Name": "CarouselAgentDetail", "name_": "carousel_agent_detail", "name-": "carousel-agent-detail", "NAME": "CAROUSEL_AGENT_DETAIL", "index$": 51 }, { "active": true, "entity": "carousel_agent_detail", "key$": "BasicCarouselAgentDetailFlow", "kind": "basic", "name": "BasicCarouselAgentDetailFlow", "param": {}, "step": [{ "a": false, "d": {}, "i": { "ref": "carousel_agent_detail_ref01", "srcdatavar": "carousel_agent_detail_ref01_data", "suffix": "_dt0" }, "m": { "id": "carousel_agent_detail01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-carousel_agent_detail_ref01" } }], "unreachable": true }] }, 'CarouselAgentDetail', { "GET /api/admin/carousels/agents/{agent_id}": { "protocol": "http", "parameters": [{ "name": "agent_id", "in": "path", "required": true, "schema": { "type": "string", "title": "Agent Id" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let carousel_agent_detail_ref01_data = Object.values(setup.data.existing.carousel_agent_detail)[0];
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/carousel_agent_detail/CarouselAgentDetailTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CrackedApiReferenceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['carousel_agent_detail01', 'carousel_agent_detail02', 'carousel_agent_detail03', 'agent01', 'agent02', 'agent03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CRACKED_API_REFERENCE_TEST_CAROUSEL_AGENT_DETAIL_ENTID': idmap,
        'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
        'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
        'CRACKED_API_REFERENCE_APIKEY': '',
        'CRACKED_API_REFERENCE_SERVER_BASE': "",
    });
    idmap = env['CRACKED_API_REFERENCE_TEST_CAROUSEL_AGENT_DETAIL_ENTID'];
    const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CRACKED_API_REFERENCE_TEST_CAROUSEL_AGENT_DETAIL_ENTID'];
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
//# sourceMappingURL=CarouselAgentDetailEntity.test.js.map