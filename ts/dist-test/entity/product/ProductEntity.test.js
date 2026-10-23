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
(0, node_test_1.describe)('ProductEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CRACKED_API_REFERENCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CrackedApiReferenceSDK.test();
        const ent = testsdk.Product();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('product hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.CrackedApiReferenceSDK.test(offline).Product().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.CrackedApiReferenceSDK.test(offline).Product()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.Product().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.CrackedApiReferenceSDK.test().Product().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.Product().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.Product().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Product().list({ "agent_count": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'product.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "agent_count": { "a": true, "h": "Agent Count", "n": "agent_count", "r": true, "t": "`$INTEGER`", "key$": "agent_count", "index$": 0 }, "agents": { "a": true, "h": "Agents", "n": "agents", "r": true, "t": "`$ARRAY`", "key$": "agents", "index$": 1 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": false, "t": "`$ANY`", "key$": "createdAt", "index$": 2 }, "demoVideos": { "a": true, "h": "Demo Videos", "n": "demoVideos", "r": false, "t": "`$ANY`", "key$": "demoVideos", "index$": 3 }, "description": { "a": true, "h": "Description", "n": "description", "op": { "update": { "req": true, "type": "`$STRING`" } }, "r": false, "t": "`$STRING`", "key$": "description", "index$": 4 }, "favicon_url": { "a": true, "h": "Favicon Url", "n": "favicon_url", "r": false, "t": "`$ANY`", "key$": "favicon_url", "index$": 5 }, "howItWorks": { "a": true, "h": "How It Works", "n": "howItWorks", "r": false, "t": "`$ANY`", "key$": "howItWorks", "index$": 6 }, "how_it_works": { "a": true, "h": "How It Works", "n": "how_it_works", "r": false, "t": "`$ANY`", "key$": "how_it_works", "index$": 7 }, "id": { "a": true, "fo": "uuid", "h": "Id", "n": "id", "r": true, "t": "`$STRING`", "key$": "id", "index$": 8 }, "images": { "a": true, "h": "Images", "n": "images", "r": false, "t": "`$ANY`", "key$": "images", "index$": 9 }, "initial_agents": { "a": true, "h": "Initial Agents", "n": "initial_agents", "r": false, "t": "`$INTEGER`", "key$": "initial_agents", "index$": 10 }, "instagramHandle": { "a": true, "h": "Instagram Handle", "n": "instagramHandle", "r": false, "t": "`$ANY`", "key$": "instagramHandle", "index$": 11 }, "instagram_handle": { "a": true, "h": "Instagram Handle", "n": "instagram_handle", "r": false, "t": "`$ANY`", "key$": "instagram_handle", "index$": 12 }, "isActive": { "a": true, "h": "Is Active", "n": "isActive", "r": false, "t": "`$ANY`", "key$": "isActive", "index$": 13 }, "isApp": { "a": true, "h": "Is App", "n": "isApp", "r": false, "t": "`$ANY`", "key$": "isApp", "index$": 14 }, "is_active": { "a": true, "h": "Is Active", "n": "is_active", "r": true, "t": "`$BOOLEAN`", "key$": "is_active", "index$": 15 }, "is_app": { "a": true, "h": "Is App", "n": "is_app", "r": false, "t": "`$BOOLEAN`", "key$": "is_app", "index$": 16 }, "language": { "a": true, "h": "Language", "n": "language", "r": false, "t": "`$ANY`", "key$": "language", "index$": 17 }, "mediaAssets": { "a": true, "h": "Media Assets", "n": "mediaAssets", "r": false, "t": "`$ANY`", "key$": "mediaAssets", "index$": 18 }, "media_asset_ids": { "a": true, "h": "Media Asset Ids", "n": "media_asset_ids", "r": false, "t": "`$ANY`", "key$": "media_asset_ids", "index$": 19 }, "media_assets": { "a": true, "h": "Media Assets", "n": "media_assets", "r": false, "t": "`$ANY`", "key$": "media_assets", "index$": 20 }, "name": { "a": true, "h": "Name", "n": "name", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "t": "`$STRING`", "key$": "name", "index$": 21 }, "otherInstructions": { "a": true, "h": "Other Instructions", "n": "otherInstructions", "r": false, "t": "`$ANY`", "key$": "otherInstructions", "index$": 22 }, "other_instructions": { "a": true, "h": "Other Instructions", "n": "other_instructions", "r": false, "t": "`$ANY`", "key$": "other_instructions", "index$": 23 }, "outroVideo": { "a": true, "h": "Outro Video", "n": "outroVideo", "r": false, "t": "`$ANY`", "key$": "outroVideo", "index$": 24 }, "pexelsVideos": { "a": true, "h": "Pexels Videos", "n": "pexelsVideos", "r": false, "t": "`$ANY`", "key$": "pexelsVideos", "index$": 25 }, "pricing": { "a": true, "h": "Pricing", "n": "pricing", "r": false, "t": "`$ANY`", "key$": "pricing", "index$": 26 }, "pricingAndOffers": { "a": true, "h": "Pricing And Offers", "n": "pricingAndOffers", "r": false, "t": "`$ANY`", "key$": "pricingAndOffers", "index$": 27 }, "pricing_and_offers": { "a": true, "h": "Pricing And Offers", "n": "pricing_and_offers", "r": false, "t": "`$ANY`", "key$": "pricing_and_offers", "index$": 28 }, "product_demo_ids": { "a": true, "h": "Product Demo Ids", "n": "product_demo_ids", "r": false, "t": "`$ARRAY`", "key$": "product_demo_ids", "index$": 29 }, "product_details": { "a": true, "h": "Product Details", "n": "product_details", "r": true, "sh": "Product details for enterprise product creation", "t": "`$OBJECT`", "key$": "product_details", "index$": 30 }, "product_id": { "a": true, "h": "Product Id", "n": "product_id", "r": true, "t": "`$STRING`", "key$": "product_id", "index$": 31 }, "product_name": { "a": true, "h": "Product Name", "n": "product_name", "r": true, "t": "`$STRING`", "key$": "product_name", "index$": 32 }, "product_url": { "a": true, "h": "Product Url", "n": "product_url", "r": true, "t": "`$STRING`", "key$": "product_url", "index$": 33 }, "pronunciation": { "a": true, "h": "Pronunciation", "n": "pronunciation", "r": false, "t": "`$ANY`", "key$": "pronunciation", "index$": 34 }, "regenerate_sora2": { "a": true, "h": "Regenerate Sora2", "n": "regenerate_sora2", "r": false, "t": "`$BOOLEAN`", "key$": "regenerate_sora2", "index$": 35 }, "repostSource": { "a": true, "h": "Repost Source", "n": "repostSource", "r": false, "t": "`$ANY`", "key$": "repostSource", "index$": 36 }, "repost_source": { "a": true, "h": "Repost Source", "n": "repost_source", "r": false, "t": "`$ANY`", "key$": "repost_source", "index$": 37 }, "screenshot_url": { "a": true, "h": "Screenshot Url", "n": "screenshot_url", "r": false, "t": "`$ANY`", "key$": "screenshot_url", "index$": 38 }, "social_post_ids": { "a": true, "h": "Social Post Ids", "n": "social_post_ids", "r": false, "t": "`$ARRAY`", "key$": "social_post_ids", "index$": 39 }, "targetAudience": { "a": true, "h": "Target Audience", "n": "targetAudience", "r": false, "t": "`$ANY`", "key$": "targetAudience", "index$": 40 }, "target_audience": { "a": true, "h": "Target Audience", "n": "target_audience", "r": false, "t": "`$ANY`", "key$": "target_audience", "index$": 41 }, "templateProductId": { "a": true, "h": "Template Product Id", "n": "templateProductId", "r": false, "t": "`$ANY`", "key$": "templateProductId", "index$": 42 }, "tiktokHandle": { "a": true, "h": "Tiktok Handle", "n": "tiktokHandle", "r": false, "t": "`$ANY`", "key$": "tiktokHandle", "index$": 43 }, "tiktok_handle": { "a": true, "h": "Tiktok Handle", "n": "tiktok_handle", "r": false, "t": "`$ANY`", "key$": "tiktok_handle", "index$": 44 }, "total_count": { "a": true, "h": "Total Count", "n": "total_count", "r": true, "t": "`$INTEGER`", "key$": "total_count", "index$": 45 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": false, "t": "`$ANY`", "key$": "updatedAt", "index$": 46 }, "url": { "a": true, "h": "Url", "n": "url", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "t": "`$STRING`", "key$": "url", "index$": 47 }, "userId": { "a": true, "fo": "uuid", "h": "User Id", "n": "userId", "r": true, "t": "`$STRING`", "key$": "userId", "index$": 48 } }, "id": { "field": "id", "name": "id" }, "name": "product", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["handle", "platform"], "co": { "id": "POST /api/products/{product_id}/validate-social-handle", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "product_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/products/{product_id}/validate-social-handle", "q": { "$action": "validate_social_handle", "exist": ["id"] }, "r": { "param": { "product_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "products" }, { "var": "id" }, { "lit": "validate-social-handle" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "bf": ["favicon_url", "initial_agents", "product_demo_ids", "product_details", "product_url", "screenshot_url", "social_post_ids"], "co": { "id": "POST /api/enterprise/products", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/enterprise/products", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "enterprise" }, { "lit": "products" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /api/products/clear", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/products/clear", "q": { "$action": "clear" }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "products" }, { "lit": "clear" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/admin/users/{user_id}/products", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "user_id", "or": "user_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/admin/users/{user_id}/products", "q": { "exist": ["user_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "admin" }, { "lit": "users" }, { "var": "user_id" }, { "lit": "products" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/enterprise/products", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/api/enterprise/products", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "enterprise" }, { "lit": "products" }], "t": { "req": "`reqdata`", "res": "`body.products`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/enterprise/agents/product/{product_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "product_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/enterprise/agents/product/{product_id}", "q": { "exist": ["id"] }, "r": { "param": { "product_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "enterprise" }, { "lit": "agents" }, { "lit": "product" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/enterprise/products/{product_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "product_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/enterprise/products/{product_id}", "q": { "exist": ["id"] }, "r": { "param": { "product_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "enterprise" }, { "lit": "products" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /api/products/me", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/api/products/me", "q": { "$action": "me" }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "products" }, { "lit": "me" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /api/enterprise/products/{product_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "product_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/api/enterprise/products/{product_id}", "q": { "exist": ["id"] }, "r": { "param": { "product_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "enterprise" }, { "lit": "products" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["description", "how_it_works", "instagram_handle", "is_app", "language", "media_asset_ids", "name", "other_instructions", "pricing_and_offers", "pronunciation", "regenerate_sora2", "repost_source", "target_audience", "tiktok_handle", "url"], "co": { "id": "PUT /api/enterprise/products/{product_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "product_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/enterprise/products/{product_id}", "q": { "exist": ["id"] }, "r": { "param": { "product_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "enterprise" }, { "lit": "products" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "PUT /api/enterprise/products/{product_id}/activate", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "product_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/enterprise/products/{product_id}/activate", "q": { "$action": "activate", "exist": ["id"] }, "r": { "param": { "product_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "enterprise" }, { "lit": "products" }, { "var": "id" }, { "lit": "activate" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "bf": ["demoVideos", "description", "howItWorks", "images", "instagramHandle", "isActive", "isApp", "language", "mediaAssetIds", "name", "otherInstructions", "outroVideo", "pexelsVideos", "pricingAndOffers", "pronunciation", "regenerateSora2", "repostSource", "targetAudience", "templateProductId", "tiktokHandle", "url"], "co": { "id": "PUT /api/products/me", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "PUT", "o": "/api/products/me", "q": { "$action": "me" }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "products" }, { "lit": "me" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.user"]] }, "key$": "product", "name__orig": "product", "Name": "Product", "name_": "product", "name-": "product", "NAME": "PRODUCT", "index$": 108 }, { "active": true, "entity": "product", "key$": "BasicProductFlow", "kind": "basic", "name": "BasicProductFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "product_ref01" }, "m": { "user_id": "user01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "product_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "product_ref01", "srcdatavar": "product_ref01_data", "suffix": "_up0", "textfield": "description" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-product_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "product_ref01", "srcdatavar": "product_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-product_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "product_ref01", "suffix": "_rm0" }, "m": { "id": "product01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "product_ref01" } }], "index$": 5 }] }, 'Product', { "POST /api/products/{product_id}/validate-social-handle": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "properties": { "platform": { "type": "string", "enum": ["tiktok", "instagram"], "title": "Platform" }, "handle": { "type": "string", "title": "Handle" } }, "type": "object", "required": ["platform", "handle"], "title": "ValidateSocialHandleRequest", "x-ref": "#/components/schemas/ValidateSocialHandleRequest" } } } }, "parameters": [{ "name": "product_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid", "title": "Product Id" }, "index$": 0 }] }, "POST /api/enterprise/products": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "properties": { "product_details": { "properties": { "name": { "type": "string", "title": "Name" }, "pronunciation": { "anyOf": [{}, {}], "title": "Pronunciation" }, "language": { "type": "string", "title": "Language", "default": "en" }, "features": { "type": "string", "title": "Features", "default": "" }, "how_it_works": { "type": "string", "title": "How It Works", "default": "" }, "target_audience": { "type": "string", "title": "Target Audience", "default": "" }, "pricing": { "type": "string", "title": "Pricing", "default": "" }, "other_instructions": { "anyOf": [{}, {}], "title": "Other Instructions" }, "is_app": { "anyOf": [{}, {}], "title": "Is App" } }, "type": "object", "required": ["name"], "title": "ProductDetails", "description": "Product details for enterprise product creation", "x-ref": "#/components/schemas/ProductDetails", "key$": "product_details" }, "product_url": { "type": "string", "title": "Product Url", "key$": "product_url" }, "screenshot_url": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Screenshot Url", "key$": "screenshot_url" }, "favicon_url": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Favicon Url", "key$": "favicon_url" }, "product_demo_ids": { "items": { "type": "string" }, "type": "array", "title": "Product Demo Ids", "default": [], "key$": "product_demo_ids" }, "social_post_ids": { "items": { "type": "string" }, "type": "array", "title": "Social Post Ids", "default": [], "key$": "social_post_ids" }, "initial_agents": { "type": "integer", "title": "Initial Agents", "default": 1, "key$": "initial_agents" } }, "type": "object", "required": ["product_details", "product_url"], "title": "CreateProductRequest", "description": "Request to create a new product", "x-ref": "#/components/schemas/app__routers__enterprise_product__CreateProductRequest", "index$": 1 } } }, "required": true }, "parameters": [] }, "POST /api/products/clear": { "protocol": "http", "parameters": [] }, "GET /api/admin/users/{user_id}/products": { "protocol": "http", "parameters": [{ "name": "user_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid", "title": "User Id" }, "index$": 0 }] }, "GET /api/enterprise/products": { "protocol": "http", "parameters": [] }, "GET /api/enterprise/agents/product/{product_id}": { "protocol": "http", "parameters": [{ "name": "product_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid", "title": "Product Id" }, "index$": 0 }] }, "GET /api/enterprise/products/{product_id}": { "protocol": "http", "parameters": [{ "name": "product_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid", "title": "Product Id" }, "index$": 0 }] }, "GET /api/products/me": { "protocol": "http", "parameters": [] }, "DELETE /api/enterprise/products/{product_id}": { "protocol": "http", "parameters": [{ "name": "product_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid", "title": "Product Id" }, "index$": 0 }] }, "PUT /api/enterprise/products/{product_id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "properties": { "name": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Name", "key$": "name" }, "description": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Description", "key$": "description" }, "url": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Url", "key$": "url" }, "pronunciation": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Pronunciation", "key$": "pronunciation" }, "how_it_works": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "How It Works", "key$": "how_it_works" }, "target_audience": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Target Audience", "key$": "target_audience" }, "pricing_and_offers": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Pricing And Offers", "key$": "pricing_and_offers" }, "other_instructions": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Other Instructions", "key$": "other_instructions" }, "language": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Language", "key$": "language" }, "is_app": { "anyOf": [{ "type": "boolean" }, { "type": "null" }], "title": "Is App", "key$": "is_app" }, "media_asset_ids": { "anyOf": [{ "items": { "type": "string" }, "type": "array" }, { "type": "null" }], "title": "Media Asset Ids", "key$": "media_asset_ids" }, "regenerate_sora2": { "type": "boolean", "title": "Regenerate Sora2", "default": false, "key$": "regenerate_sora2" }, "tiktok_handle": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Tiktok Handle", "key$": "tiktok_handle" }, "instagram_handle": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Instagram Handle", "key$": "instagram_handle" }, "repost_source": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Repost Source", "key$": "repost_source" } }, "type": "object", "title": "UpdateProductRequest", "description": "Request to update product details", "x-ref": "#/components/schemas/UpdateProductRequest", "index$": 1 } } } }, "parameters": [{ "name": "product_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid", "title": "Product Id" }, "index$": 0 }] }, "PUT /api/enterprise/products/{product_id}/activate": { "protocol": "http", "parameters": [{ "name": "product_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid", "title": "Product Id" }, "index$": 0 }] }, "PUT /api/products/me": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "properties": { "name": { "anyOf": [{ "type": "string", "maxLength": 255, "minLength": 1 }, { "type": "null" }], "title": "Name" }, "description": { "anyOf": [{ "type": "string", "minLength": 1 }, { "type": "null" }], "title": "Description" }, "url": { "anyOf": [{ "type": "string", "minLength": 1 }, { "type": "null" }], "title": "Url" }, "demoVideos": { "anyOf": [{ "items": { "type": "string" }, "type": "array" }, { "type": "null" }], "title": "Demovideos" }, "pexelsVideos": { "anyOf": [{ "items": { "type": "string" }, "type": "array" }, { "type": "null" }], "title": "Pexelsvideos" }, "images": { "anyOf": [{ "items": { "type": "string" }, "type": "array" }, { "type": "null" }], "title": "Images" }, "outroVideo": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Outrovideo" }, "pronunciation": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Pronunciation" }, "howItWorks": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Howitworks" }, "targetAudience": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Targetaudience" }, "pricingAndOffers": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Pricingandoffers" }, "otherInstructions": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Otherinstructions" }, "isActive": { "anyOf": [{ "type": "boolean" }, { "type": "null" }], "title": "Isactive" }, "isApp": { "anyOf": [{ "type": "boolean" }, { "type": "null" }], "title": "Isapp" }, "language": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Language" }, "templateProductId": { "anyOf": [{ "type": "string", "format": "uuid" }, { "type": "null" }], "title": "Templateproductid" }, "tiktokHandle": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Tiktokhandle" }, "instagramHandle": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Instagramhandle" }, "repostSource": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Repostsource", "default": "copycat" }, "mediaAssetIds": { "anyOf": [{ "items": { "type": "string" }, "type": "array" }, { "type": "null" }], "title": "Mediaassetids" }, "regenerateSora2": { "anyOf": [{ "type": "boolean" }, { "type": "null" }], "title": "Regeneratesora2", "default": false } }, "type": "object", "title": "ProductUpdate", "x-ref": "#/components/schemas/ProductUpdate" } } }, "required": true }, "parameters": [] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const product_ref01_ent = client.Product();
        let product_ref01_data = setup.data.new.product['product_ref01'];
        product_ref01_data['user_id'] = setup.idmap['user01'];
        product_ref01_data = (await product_ref01_ent.create(product_ref01_data)).data();
        (0, node_assert_1.default)(null != product_ref01_data.id);
        // LIST
        const product_ref01_match = {};
        const product_ref01_list = (await product_ref01_ent.list(product_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(product_ref01_list, { id: product_ref01_data.id })));
        // UPDATE
        const product_ref01_data_up0 = {};
        product_ref01_data_up0.id = product_ref01_data.id;
        const product_ref01_markdef_up0 = { name: 'description', value: 'Mark01-product_ref01_' + setup.now };
        product_ref01_data_up0[product_ref01_markdef_up0.name] = product_ref01_markdef_up0.value;
        const product_ref01_resdata_up0 = (await product_ref01_ent.update(product_ref01_data_up0)).data();
        (0, node_assert_1.default)(product_ref01_resdata_up0.id === product_ref01_data_up0.id);
        (0, node_assert_1.default)(product_ref01_resdata_up0[product_ref01_markdef_up0.name] === product_ref01_markdef_up0.value);
        // LOAD
        const product_ref01_match_dt0 = {};
        product_ref01_match_dt0.id = product_ref01_data.id;
        const product_ref01_data_dt0 = (await product_ref01_ent.load(product_ref01_match_dt0)).data();
        (0, node_assert_1.default)(product_ref01_data_dt0.id === product_ref01_data.id);
        // REMOVE
        const product_ref01_match_rm0 = { id: product_ref01_data.id };
        await product_ref01_ent.remove(product_ref01_match_rm0);
        // LIST
        const product_ref01_match_rt0 = {};
        const product_ref01_list_rt0 = (await product_ref01_ent.list(product_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(product_ref01_list_rt0, { id: product_ref01_data.id })));
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/product/ProductTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CrackedApiReferenceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['product01', 'product02', 'product03', 'user01', 'user02', 'user03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CRACKED_API_REFERENCE_TEST_PRODUCT_ENTID': idmap,
        'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
        'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
        'CRACKED_API_REFERENCE_APIKEY': '',
        'CRACKED_API_REFERENCE_SERVER_BASE': "",
    });
    idmap = env['CRACKED_API_REFERENCE_TEST_PRODUCT_ENTID'];
    const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CRACKED_API_REFERENCE_TEST_PRODUCT_ENTID'];
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
//# sourceMappingURL=ProductEntity.test.js.map