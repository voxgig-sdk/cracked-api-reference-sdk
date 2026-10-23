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
(0, node_test_1.describe)('AgentPostEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CRACKED_API_REFERENCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CrackedApiReferenceSDK.test();
        const ent = testsdk.AgentPost();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.AgentPost().list({ "id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE;
        for (const op of []) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'agent_post.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "comments": { "a": true, "h": "Comments", "n": "comments", "r": true, "t": "`$INTEGER`", "key$": "comments", "index$": 0 }, "error_message": { "a": true, "h": "Error Message", "n": "error_message", "r": true, "t": "`$ANY`", "key$": "error_message", "index$": 1 }, "id": { "a": true, "fo": "uuid", "h": "Id", "n": "id", "r": true, "t": "`$STRING`", "key$": "id", "index$": 2 }, "likes": { "a": true, "h": "Likes", "n": "likes", "r": true, "t": "`$INTEGER`", "key$": "likes", "index$": 3 }, "product_id": { "a": true, "h": "Product Id", "n": "product_id", "r": true, "t": "`$STRING`", "key$": "product_id", "index$": 4 }, "results": { "a": true, "h": "Results", "n": "results", "r": true, "t": "`$ANY`", "key$": "results", "index$": 5 }, "scheduled_datetime": { "a": true, "fo": "date-time", "h": "Scheduled Datetime", "n": "scheduled_datetime", "r": true, "t": "`$STRING`", "key$": "scheduled_datetime", "index$": 6 }, "source_type": { "a": true, "h": "Source Type", "n": "source_type", "r": true, "t": "`$STRING`", "key$": "source_type", "index$": 7 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "t": "`$STRING`", "key$": "status", "index$": 8 }, "user_email": { "a": true, "h": "User Email", "n": "user_email", "r": true, "t": "`$STRING`", "key$": "user_email", "index$": 9 }, "user_id": { "a": true, "fo": "uuid", "h": "User Id", "n": "user_id", "r": true, "t": "`$STRING`", "key$": "user_id", "index$": 10 }, "user_name": { "a": true, "h": "User Name", "n": "user_name", "r": true, "t": "`$ANY`", "key$": "user_name", "index$": 11 }, "video_id": { "a": true, "h": "Video Id", "n": "video_id", "r": true, "t": "`$STRING`", "key$": "video_id", "index$": 12 }, "video_url": { "a": true, "h": "Video Url", "n": "video_url", "r": true, "t": "`$ANY`", "key$": "video_url", "index$": 13 }, "views": { "a": true, "h": "Views", "n": "views", "r": true, "t": "`$INTEGER`", "key$": "views", "index$": 14 } }, "id": { "field": "id", "name": "id" }, "name": "agent_post", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/admin/agents/{agent_id}/posts", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "agent_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "today", "k": "query", "n": "day", "or": "day", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/admin/agents/{agent_id}/posts", "q": { "exist": ["id"] }, "r": { "param": { "agent_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "admin" }, { "lit": "agents" }, { "var": "id" }, { "lit": "posts" }], "t": { "req": "`reqdata`", "res": "`body.entries`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "agent_post", "name__orig": "agent_post", "Name": "AgentPost", "name_": "agent_post", "name-": "agent-post", "NAME": "AGENT_POST", "index$": 39 }, { "active": true, "entity": "agent_post", "key$": "BasicAgentPostFlow", "kind": "basic", "name": "BasicAgentPostFlow", "param": {}, "step": [{ "a": false, "d": {}, "i": {}, "m": { "agent_id": "agent01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "agent_post_ref01" } }], "unreachable": true }] }, 'AgentPost', { "GET /api/admin/agents/{agent_id}/posts": { "protocol": "http", "parameters": [{ "name": "agent_id", "in": "path", "required": true, "schema": { "type": "string", "title": "Agent Id" }, "index$": 0 }, { "name": "day", "in": "query", "required": false, "schema": { "enum": ["today", "yesterday"], "type": "string", "default": "today", "title": "Day" }, "index$": 1 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let agent_post_ref01_data = Object.values(setup.data.existing.agent_post)[0];
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/agent_post/AgentPostTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CrackedApiReferenceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['agent_post01', 'agent_post02', 'agent_post03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CRACKED_API_REFERENCE_TEST_AGENT_POST_ENTID': idmap,
        'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
        'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
        'CRACKED_API_REFERENCE_APIKEY': '',
        'CRACKED_API_REFERENCE_SERVER_BASE': "",
    });
    idmap = env['CRACKED_API_REFERENCE_TEST_AGENT_POST_ENTID'];
    const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CRACKED_API_REFERENCE_TEST_AGENT_POST_ENTID'];
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
//# sourceMappingURL=AgentPostEntity.test.js.map