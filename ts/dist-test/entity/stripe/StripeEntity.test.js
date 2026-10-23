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
(0, node_test_1.describe)('StripeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CRACKED_API_REFERENCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CrackedApiReferenceSDK.test();
        const ent = testsdk.Stripe();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE;
        for (const op of []) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'stripe.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": {}, "name": "stripe", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["checkout_session_id"], "co": { "id": "POST /api/stripe/associate-guest-checkout", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/stripe/associate-guest-checkout", "q": { "$action": "associate_guest_checkout" }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "stripe" }, { "lit": "associate-guest-checkout" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /api/stripe/cancel-trial", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/stripe/cancel-trial", "q": { "$action": "cancel_trial" }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "stripe" }, { "lit": "cancel-trial" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "bf": ["chat_plan_id", "coupon_id", "membership", "onboarding_data_id", "quantity"], "co": { "id": "POST /api/stripe/create-checkout-session", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/stripe/create-checkout-session", "q": { "$action": "create_checkout_session" }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "stripe" }, { "lit": "create-checkout-session" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "bf": ["credits_per_unit", "quantity"], "co": { "id": "POST /api/stripe/create-credits-checkout-session", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/stripe/create-credits-checkout-session", "q": { "$action": "create_credits_checkout_session" }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "stripe" }, { "lit": "create-credits-checkout-session" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "a": true, "bf": ["chat_plan_id", "coupon_id", "membership", "onboarding_data_id", "quantity"], "co": { "id": "POST /api/stripe/create-guest-checkout-session", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/stripe/create-guest-checkout-session", "q": { "$action": "create_guest_checkout_session" }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "stripe" }, { "lit": "create-guest-checkout-session" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }, { "a": true, "co": { "id": "POST /api/stripe/create-portal-session", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/stripe/create-portal-session", "q": { "$action": "create_portal_session" }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "stripe" }, { "lit": "create-portal-session" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 5 }, { "a": true, "co": { "id": "POST /api/stripe/end-trial-early", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/stripe/end-trial-early", "q": { "$action": "end_trial_early" }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "stripe" }, { "lit": "end-trial-early" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 6 }, { "a": true, "bf": ["quantity"], "co": { "id": "POST /api/stripe/update-subscription-quantity", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/stripe/update-subscription-quantity", "q": { "$action": "update_subscription_quantity" }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "stripe" }, { "lit": "update-subscription-quantity" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 7 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "stripe", "name__orig": "stripe", "Name": "Stripe", "name_": "stripe", "name-": "stripe", "NAME": "STRIPE", "index$": 154 }, { "active": true, "entity": "stripe", "key$": "BasicStripeFlow", "kind": "basic", "name": "BasicStripeFlow", "param": {}, "step": [{ "a": false, "d": {}, "i": { "ref": "stripe_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "unreachable": true }] }, 'Stripe', { "POST /api/stripe/associate-guest-checkout": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "properties": { "checkout_session_id": { "type": "string", "title": "Checkout Session Id" } }, "type": "object", "required": ["checkout_session_id"], "title": "AssociateGuestCheckoutRequest", "x-ref": "#/components/schemas/AssociateGuestCheckoutRequest" } } }, "required": true }, "parameters": [] }, "POST /api/stripe/cancel-trial": { "protocol": "http", "parameters": [] }, "POST /api/stripe/create-checkout-session": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "properties": { "membership": { "type": "string", "enum": ["STARTER", "ENTHUSIAST", "PRO", "STARTER_YEARLY", "ENTHUSIAST_YEARLY", "PRO_YEARLY", "STARTER_WEEKLY", "ENTHUSIAST_WEEKLY", "PRO_WEEKLY", "CUSTOM", "CUSTOM_YEARLY"], "title": "Membership", "x-ref": "#/components/schemas/Membership" }, "quantity": { "anyOf": [{ "type": "integer" }, { "type": "null" }], "title": "Quantity" }, "coupon_id": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Coupon Id" }, "onboarding_data_id": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Onboarding Data Id" }, "chat_plan_id": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Chat Plan Id" } }, "type": "object", "required": ["membership"], "title": "CheckoutSessionRequest", "x-ref": "#/components/schemas/CheckoutSessionRequest" } } }, "required": true }, "parameters": [] }, "POST /api/stripe/create-credits-checkout-session": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "properties": { "quantity": { "anyOf": [{ "type": "integer" }, { "type": "null" }], "title": "Quantity", "default": 1 }, "credits_per_unit": { "anyOf": [{ "type": "integer" }, { "type": "null" }], "title": "Credits Per Unit", "default": 1 } }, "type": "object", "title": "CreditsCheckoutSessionRequest", "x-ref": "#/components/schemas/CreditsCheckoutSessionRequest" } } }, "required": true }, "parameters": [] }, "POST /api/stripe/create-guest-checkout-session": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "properties": { "membership": { "type": "string", "enum": ["STARTER", "ENTHUSIAST", "PRO", "STARTER_YEARLY", "ENTHUSIAST_YEARLY", "PRO_YEARLY", "STARTER_WEEKLY", "ENTHUSIAST_WEEKLY", "PRO_WEEKLY", "CUSTOM", "CUSTOM_YEARLY"], "title": "Membership", "x-ref": "#/components/schemas/Membership" }, "quantity": { "anyOf": [{ "type": "integer" }, { "type": "null" }], "title": "Quantity" }, "coupon_id": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Coupon Id" }, "onboarding_data_id": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Onboarding Data Id" }, "chat_plan_id": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Chat Plan Id" } }, "type": "object", "required": ["membership"], "title": "CheckoutSessionRequest", "x-ref": "#/components/schemas/CheckoutSessionRequest" } } }, "required": true }, "parameters": [] }, "POST /api/stripe/create-portal-session": { "protocol": "http", "parameters": [] }, "POST /api/stripe/end-trial-early": { "protocol": "http", "parameters": [] }, "POST /api/stripe/update-subscription-quantity": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "properties": { "quantity": { "type": "integer", "title": "Quantity" } }, "type": "object", "required": ["quantity"], "title": "UpdateSubscriptionQuantityRequest", "x-ref": "#/components/schemas/UpdateSubscriptionQuantityRequest" } } }, "required": true }, "parameters": [] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let stripe_ref01_data = Object.values(setup.data.existing.stripe)[0];
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/stripe/StripeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CrackedApiReferenceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['stripe01', 'stripe02', 'stripe03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CRACKED_API_REFERENCE_TEST_STRIPE_ENTID': idmap,
        'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
        'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
        'CRACKED_API_REFERENCE_APIKEY': '',
        'CRACKED_API_REFERENCE_SERVER_BASE': "",
    });
    idmap = env['CRACKED_API_REFERENCE_TEST_STRIPE_ENTID'];
    const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CRACKED_API_REFERENCE_TEST_STRIPE_ENTID'];
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
//# sourceMappingURL=StripeEntity.test.js.map