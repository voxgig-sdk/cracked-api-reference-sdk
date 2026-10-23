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
(0, node_test_1.describe)('RecordDemoBookedEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CRACKED_API_REFERENCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CrackedApiReferenceSDK.test();
        const ent = testsdk.RecordDemoBooked();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.RecordDemoBooked().create({ "session_id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'record_demo_booked.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "calendlyEventUri": { "a": true, "h": "Calendly Event Uri", "n": "calendlyEventUri", "r": false, "t": "`$ANY`", "key$": "calendlyEventUri", "index$": 0 }, "calendlyInviteeUri": { "a": true, "h": "Calendly Invitee Uri", "n": "calendlyInviteeUri", "r": false, "t": "`$ANY`", "key$": "calendlyInviteeUri", "index$": 1 }, "message": { "a": true, "h": "Message", "n": "message", "r": true, "t": "`$OBJECT`", "key$": "message", "index$": 2 }, "session": { "a": true, "h": "Session", "n": "session", "r": true, "t": "`$OBJECT`", "key$": "session", "index$": 3 } }, "name": "record_demo_booked", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["calendlyEventUri", "calendlyInviteeUri"], "co": { "id": "POST /api/chat/sessions/{session_id}/demo-booked", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "session_id", "or": "session_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/chat/sessions/{session_id}/demo-booked", "q": { "exist": ["session_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "chat" }, { "lit": "sessions" }, { "var": "session_id" }, { "lit": "demo-booked" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "record_demo_booked", "name__orig": "record_demo_booked", "Name": "RecordDemoBooked", "name_": "record_demo_booked", "name-": "record-demo-booked", "NAME": "RECORD_DEMO_BOOKED", "index$": 116 }, { "active": true, "entity": "record_demo_booked", "key$": "BasicRecordDemoBookedFlow", "kind": "basic", "name": "BasicRecordDemoBookedFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "record_demo_booked_ref01" }, "m": { "session_id": "session01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'RecordDemoBooked', { "POST /api/chat/sessions/{session_id}/demo-booked": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "properties": { "calendlyEventUri": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Calendlyeventuri", "key$": "calendlyEventUri" }, "calendlyInviteeUri": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Calendlyinviteeuri", "key$": "calendlyInviteeUri" } }, "type": "object", "title": "RecordDemoBookedRequest", "x-ref": "#/components/schemas/RecordDemoBookedRequest", "index$": 1 } } } }, "parameters": [{ "name": "session_id", "in": "path", "required": true, "schema": { "type": "string", "title": "Session Id" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const record_demo_booked_ref01_ent = client.RecordDemoBooked();
        let record_demo_booked_ref01_data = setup.data.new.record_demo_booked['record_demo_booked_ref01'];
        record_demo_booked_ref01_data['session_id'] = setup.idmap['session01'];
        record_demo_booked_ref01_data = (await record_demo_booked_ref01_ent.create(record_demo_booked_ref01_data)).data();
        (0, node_assert_1.default)(null != record_demo_booked_ref01_data);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/record_demo_booked/RecordDemoBookedTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CrackedApiReferenceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['record_demo_booked01', 'record_demo_booked02', 'record_demo_booked03', 'session01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CRACKED_API_REFERENCE_TEST_RECORD_DEMO_BOOKED_ENTID': idmap,
        'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
        'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
        'CRACKED_API_REFERENCE_APIKEY': '',
        'CRACKED_API_REFERENCE_SERVER_BASE': "",
    });
    idmap = env['CRACKED_API_REFERENCE_TEST_RECORD_DEMO_BOOKED_ENTID'];
    const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CRACKED_API_REFERENCE_TEST_RECORD_DEMO_BOOKED_ENTID'];
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
//# sourceMappingURL=RecordDemoBookedEntity.test.js.map