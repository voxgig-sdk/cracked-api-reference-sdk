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
(0, node_test_1.describe)('UserEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CRACKED_API_REFERENCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CrackedApiReferenceSDK.test();
        const ent = testsdk.User();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.User().load({ "id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'user.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "accountType": { "a": true, "h": "Account Type", "n": "accountType", "r": false, "t": "`$ANY`", "key$": "accountType", "index$": 0 }, "activatedByAdminAt": { "a": true, "h": "Activated By Admin At", "n": "activatedByAdminAt", "r": false, "t": "`$ANY`", "key$": "activatedByAdminAt", "index$": 1 }, "activatedByAdminId": { "a": true, "h": "Activated By Admin Id", "n": "activatedByAdminId", "r": false, "t": "`$ANY`", "key$": "activatedByAdminId", "index$": 2 }, "agents": { "a": true, "h": "Agents", "n": "agents", "r": true, "t": "`$ARRAY`", "key$": "agents", "index$": 3 }, "agentsCount": { "a": true, "h": "Agents Count", "n": "agentsCount", "r": false, "t": "`$ANY`", "key$": "agentsCount", "index$": 4 }, "attribution": { "a": true, "h": "Attribution", "n": "attribution", "r": false, "t": "`$ANY`", "key$": "attribution", "index$": 5 }, "avatarImageUrl": { "a": true, "h": "Avatar Image Url", "n": "avatarImageUrl", "r": false, "t": "`$ANY`", "key$": "avatarImageUrl", "index$": 6 }, "avatarVoiceUrl": { "a": true, "h": "Avatar Voice Url", "n": "avatarVoiceUrl", "r": false, "t": "`$ANY`", "key$": "avatarVoiceUrl", "index$": 7 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": true, "t": "`$STRING`", "key$": "createdAt", "index$": 8 }, "credits": { "a": true, "h": "Credits", "n": "credits", "r": false, "t": "`$INTEGER`", "key$": "credits", "index$": 9 }, "email": { "a": true, "fo": "email", "h": "Email", "n": "email", "r": true, "t": "`$STRING`", "key$": "email", "index$": 10 }, "googleId": { "a": true, "h": "Google Id", "n": "googleId", "r": false, "t": "`$ANY`", "key$": "googleId", "index$": 11 }, "hasSeenScheduleWelcome": { "a": true, "h": "Has Seen Schedule Welcome", "n": "hasSeenScheduleWelcome", "r": false, "t": "`$BOOLEAN`", "key$": "hasSeenScheduleWelcome", "index$": 12 }, "id": { "a": true, "fo": "uuid", "h": "Id", "n": "id", "r": true, "t": "`$STRING`", "key$": "id", "index$": 13 }, "industry": { "a": true, "h": "Industry", "n": "industry", "r": false, "t": "`$ANY`", "key$": "industry", "index$": 14 }, "instagramId": { "a": true, "h": "Instagram Id", "n": "instagramId", "r": false, "t": "`$ANY`", "key$": "instagramId", "index$": 15 }, "isActivatedByAdmin": { "a": true, "h": "Is Activated By Admin", "n": "isActivatedByAdmin", "r": false, "t": "`$BOOLEAN`", "key$": "isActivatedByAdmin", "index$": 16 }, "isAdmin": { "a": true, "h": "Is Admin", "n": "isAdmin", "r": false, "t": "`$BOOLEAN`", "key$": "isAdmin", "index$": 17 }, "isInternalUser": { "a": true, "h": "Is Internal User", "n": "isInternalUser", "r": false, "t": "`$ANY`", "key$": "isInternalUser", "index$": 18 }, "isMigrated": { "a": true, "h": "Is Migrated", "n": "isMigrated", "r": false, "t": "`$ANY`", "key$": "isMigrated", "index$": 19 }, "isResettingProduct": { "a": true, "h": "Is Resetting Product", "n": "isResettingProduct", "r": false, "t": "`$ANY`", "key$": "isResettingProduct", "index$": 20 }, "membership": { "a": true, "h": "Membership", "n": "membership", "r": false, "t": "`$ANY`", "key$": "membership", "index$": 21 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "t": "`$STRING`", "key$": "name", "index$": 22 }, "partnerDirectLoginDisabled": { "a": true, "h": "Partner Direct Login Disabled", "n": "partnerDirectLoginDisabled", "r": false, "t": "`$BOOLEAN`", "key$": "partnerDirectLoginDisabled", "index$": 23 }, "partnerExternalUserId": { "a": true, "h": "Partner External User Id", "n": "partnerExternalUserId", "r": false, "t": "`$ANY`", "key$": "partnerExternalUserId", "index$": 24 }, "partnerPolicyCode": { "a": true, "h": "Partner Policy Code", "n": "partnerPolicyCode", "r": false, "t": "`$ANY`", "key$": "partnerPolicyCode", "index$": 25 }, "partnerSource": { "a": true, "h": "Partner Source", "n": "partnerSource", "r": false, "t": "`$ANY`", "key$": "partnerSource", "index$": 26 }, "picture": { "a": true, "h": "Picture", "n": "picture", "r": false, "t": "`$ANY`", "key$": "picture", "index$": 27 }, "stripeCustomerId": { "a": true, "h": "Stripe Customer Id", "n": "stripeCustomerId", "r": false, "t": "`$ANY`", "key$": "stripeCustomerId", "index$": 28 }, "stripeSubscriptionId": { "a": true, "h": "Stripe Subscription Id", "n": "stripeSubscriptionId", "r": false, "t": "`$ANY`", "key$": "stripeSubscriptionId", "index$": 29 }, "subscriptionCurrentPeriodEnd": { "a": true, "h": "Subscription Current Period End", "n": "subscriptionCurrentPeriodEnd", "r": false, "t": "`$ANY`", "key$": "subscriptionCurrentPeriodEnd", "index$": 30 }, "subscriptionStatus": { "a": true, "h": "Subscription Status", "n": "subscriptionStatus", "r": false, "t": "`$ANY`", "key$": "subscriptionStatus", "index$": 31 }, "totalCount": { "a": true, "h": "Total Count", "n": "totalCount", "r": true, "t": "`$INTEGER`", "key$": "totalCount", "index$": 32 }, "updatedAt": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updatedAt", "r": true, "t": "`$STRING`", "key$": "updatedAt", "index$": 33 }, "userId": { "a": true, "h": "User Id", "n": "userId", "r": true, "t": "`$STRING`", "key$": "userId", "index$": 34 } }, "id": { "field": "id", "name": "id" }, "name": "user", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/upload-post-agents/user/{user_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "user_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "product_id", "or": "product_id", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/upload-post-agents/user/{user_id}", "q": { "exist": ["id"] }, "r": { "param": { "user_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "upload-post-agents" }, { "lit": "user" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /auth/me", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/auth/me", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "auth" }, { "lit": "me" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["attribution"], "co": { "id": "PATCH /api/users/attribution", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "PATCH", "o": "/api/users/attribution", "q": { "$action": "attribution" }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "users" }, { "lit": "attribution" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "bf": ["industry"], "co": { "id": "PATCH /api/users/industry", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "PATCH", "o": "/api/users/industry", "q": { "$action": "industry" }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "users" }, { "lit": "industry" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "PATCH /api/users/mark-schedule-welcome-seen", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "PATCH", "o": "/api/users/mark-schedule-welcome-seen", "q": { "$action": "mark_schedule_welcome_seen" }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "users" }, { "lit": "mark-schedule-welcome-seen" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "user", "name__orig": "user", "Name": "User", "name_": "user", "name-": "user", "NAME": "USER", "index$": 160 }, { "active": true, "entity": "user", "key$": "BasicUserFlow", "kind": "basic", "name": "BasicUserFlow", "param": {}, "step": [{ "a": false, "d": {}, "i": { "ref": "user_ref01", "srcdatavar": "user_ref01_data", "suffix": "_up0", "textfield": "createdAt" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-user_ref01" } }], "v": [], "unreachable": true }, { "a": true, "d": {}, "i": { "ref": "user_ref01", "srcdatavar": "user_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-user_ref01" } }], "index$": 0 }] }, 'User', { "GET /api/upload-post-agents/user/{user_id}": { "protocol": "http", "parameters": [{ "name": "user_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid", "title": "User Id" }, "index$": 0 }, { "name": "product_id", "in": "query", "required": false, "schema": { "anyOf": [{ "type": "string", "format": "uuid" }, { "type": "null" }], "description": "Filter agents by product ID (for enterprise users)", "title": "Product Id" }, "description": "Filter agents by product ID (for enterprise users)", "index$": 1 }] }, "GET /auth/me": { "protocol": "http", "parameters": [] }, "PATCH /api/users/attribution": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "properties": { "attribution": { "type": "object", "title": "Attribution" } }, "type": "object", "required": ["attribution"], "title": "AttributionUpdate", "x-ref": "#/components/schemas/AttributionUpdate" } } }, "required": true }, "parameters": [] }, "PATCH /api/users/industry": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "properties": { "industry": { "type": "string", "title": "Industry" } }, "type": "object", "required": ["industry"], "title": "IndustryUpdate", "x-ref": "#/components/schemas/IndustryUpdate" } } }, "required": true }, "parameters": [] }, "PATCH /api/users/mark-schedule-welcome-seen": { "protocol": "http", "parameters": [] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let user_ref01_data = Object.values(setup.data.existing.user)[0];
        // LOAD
        const user_ref01_ent = client.User();
        const user_ref01_match_dt0 = {};
        user_ref01_match_dt0.id = user_ref01_data.id;
        const user_ref01_data_dt0 = (await user_ref01_ent.load(user_ref01_match_dt0)).data();
        (0, node_assert_1.default)(user_ref01_data_dt0.id === user_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/user/UserTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CrackedApiReferenceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['user01', 'user02', 'user03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CRACKED_API_REFERENCE_TEST_USER_ENTID': idmap,
        'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
        'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
        'CRACKED_API_REFERENCE_APIKEY': '',
        'CRACKED_API_REFERENCE_SERVER_BASE': "",
    });
    idmap = env['CRACKED_API_REFERENCE_TEST_USER_ENTID'];
    const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CRACKED_API_REFERENCE_TEST_USER_ENTID'];
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
//# sourceMappingURL=UserEntity.test.js.map