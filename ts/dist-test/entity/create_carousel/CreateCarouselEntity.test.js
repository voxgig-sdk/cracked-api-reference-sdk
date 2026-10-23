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
(0, node_test_1.describe)('CreateCarouselEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CRACKED_API_REFERENCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CrackedApiReferenceSDK.test();
        const ent = testsdk.CreateCarousel();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.CreateCarousel().create({ "expected_owner_user_id": 1, "template_id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'create_carousel.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "copy_mode": { "a": true, "h": "Copy Mode", "n": "copy_mode", "r": false, "t": "`$ANY`", "key$": "copy_mode", "index$": 0 }, "expected_owner_user_id": { "a": true, "h": "Expected Owner User Id", "n": "expected_owner_user_id", "r": false, "t": "`$STRING`", "key$": "expected_owner_user_id", "index$": 1 }, "expected_product_id": { "a": true, "h": "Expected Product Id", "n": "expected_product_id", "r": false, "t": "`$STRING`", "key$": "expected_product_id", "index$": 2 }, "expected_product_name": { "a": true, "h": "Expected Product Name", "n": "expected_product_name", "r": false, "t": "`$ANY`", "key$": "expected_product_name", "index$": 3 }, "image_model": { "a": true, "h": "Image Model", "n": "image_model", "r": false, "t": "`$STRING`", "key$": "image_model", "index$": 4 }, "mention_product": { "a": true, "h": "Mention Product", "n": "mention_product", "r": false, "t": "`$BOOLEAN`", "key$": "mention_product", "index$": 5 }, "message": { "a": true, "h": "Message", "n": "message", "r": true, "t": "`$STRING`", "key$": "message", "index$": 6 }, "num_slides": { "a": true, "h": "Num Slides", "n": "num_slides", "r": false, "t": "`$INTEGER`", "key$": "num_slides", "index$": 7 }, "owner_user_id": { "a": true, "h": "Owner User Id", "n": "owner_user_id", "r": false, "t": "`$STRING`", "key$": "owner_user_id", "index$": 8 }, "product_id": { "a": true, "h": "Product Id", "n": "product_id", "r": false, "sh": "Product ID to use.", "t": "`$STRING`", "key$": "product_id", "index$": 9 }, "product_name": { "a": true, "h": "Product Name", "n": "product_name", "r": false, "t": "`$ANY`", "key$": "product_name", "index$": 10 }, "product_placement": { "a": true, "h": "Product Placement", "n": "product_placement", "r": false, "t": "`$STRING`", "key$": "product_placement", "index$": 11 }, "request_id": { "a": true, "h": "Request Id", "n": "request_id", "r": false, "t": "`$STRING`", "key$": "request_id", "index$": 12 }, "script_style_custom": { "a": true, "h": "Script Style Custom", "n": "script_style_custom", "r": false, "t": "`$ANY`", "key$": "script_style_custom", "index$": 13 }, "script_style_id": { "a": true, "h": "Script Style Id", "n": "script_style_id", "r": false, "t": "`$STRING`", "key$": "script_style_id", "index$": 14 }, "selected_hook": { "a": true, "h": "Selected Hook", "n": "selected_hook", "r": false, "t": "`$ANY`", "key$": "selected_hook", "index$": 15 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "t": "`$STRING`", "key$": "status", "index$": 16 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "t": "`$BOOLEAN`", "key$": "success", "index$": 17 }, "template_id": { "a": true, "h": "Template Id", "n": "template_id", "r": true, "t": "`$STRING`", "key$": "template_id", "index$": 18 }, "video_id": { "a": true, "fo": "uuid", "h": "Video Id", "n": "video_id", "r": true, "t": "`$STRING`", "key$": "video_id", "index$": 19 }, "visual_style_custom": { "a": true, "h": "Visual Style Custom", "n": "visual_style_custom", "r": false, "t": "`$ANY`", "key$": "visual_style_custom", "index$": 20 }, "visual_style_id": { "a": true, "h": "Visual Style Id", "n": "visual_style_id", "r": false, "t": "`$STRING`", "key$": "visual_style_id", "index$": 21 } }, "name": "create_carousel", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["copy_mode", "expected_owner_user_id", "expected_product_id", "expected_product_name", "image_model", "product_id", "product_placement", "request_id", "selected_hook", "template_id"], "co": { "id": "POST /api/carousel/create-from-exact", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/carousel/create-from-exact", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "carousel" }, { "lit": "create-from-exact" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "bf": ["image_model", "mention_product", "num_slides", "product_id", "script_style_custom", "script_style_id", "visual_style_custom", "visual_style_id"], "co": { "id": "POST /api/carousel/create-from-styles", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/carousel/create-from-styles", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "carousel" }, { "lit": "create-from-styles" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "bf": ["image_model", "mention_product", "product_id", "template_id"], "co": { "id": "POST /api/carousel/create-from-template", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/carousel/create-from-template", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "carousel" }, { "lit": "create-from-template" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "create_carousel", "name__orig": "create_carousel", "Name": "CreateCarousel", "name_": "create_carousel", "name-": "create-carousel", "NAME": "CREATE_CAROUSEL", "index$": 60 }, { "active": true, "entity": "create_carousel", "key$": "BasicCreateCarouselFlow", "kind": "basic", "name": "BasicCreateCarouselFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "create_carousel_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'CreateCarousel', { "POST /api/carousel/create-from-exact": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "properties": { "template_id": { "type": "string", "title": "Template Id", "key$": "template_id" }, "product_id": { "anyOf": [{ "type": "string", "format": "uuid" }, { "type": "null" }], "title": "Product Id", "key$": "product_id" }, "expected_product_id": { "anyOf": [{ "type": "string", "format": "uuid" }, { "type": "null" }], "title": "Expected Product Id", "key$": "expected_product_id" }, "expected_product_name": { "anyOf": [{ "type": "string", "maxLength": 255, "minLength": 1 }, { "type": "null" }], "title": "Expected Product Name", "key$": "expected_product_name" }, "expected_owner_user_id": { "anyOf": [{ "type": "string", "format": "uuid" }, { "type": "null" }], "title": "Expected Owner User Id", "key$": "expected_owner_user_id" }, "product_placement": { "type": "string", "pattern": "^(post_description|final_slide_cta)$", "title": "Product Placement", "default": "post_description", "key$": "product_placement" }, "request_id": { "anyOf": [{ "type": "string", "format": "uuid" }, { "type": "null" }], "title": "Request Id", "key$": "request_id" }, "copy_mode": { "anyOf": [{ "type": "string", "enum": ["source_demo", "fresh_content"] }, { "type": "null" }], "title": "Copy Mode", "key$": "copy_mode" }, "selected_hook": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Selected Hook", "key$": "selected_hook" }, "image_model": { "type": "string", "enum": ["gpt-image-2-5-sunburst-text-to-image", "nano-banana-2", "qwen2-1/image-to-image"], "title": "CarouselImageModel", "default": "gpt-image-2-5-sunburst-text-to-image", "x-ref": "#/components/schemas/CarouselImageModel", "key$": "image_model" } }, "type": "object", "required": ["template_id"], "title": "CreateCarouselFromExactRequest", "x-ref": "#/components/schemas/CreateCarouselFromExactRequest", "index$": 1 } } }, "required": true }, "parameters": [] }, "POST /api/carousel/create-from-styles": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "properties": { "image_model": { "type": "string", "enum": ["gpt-image-2-5-sunburst-text-to-image", "nano-banana-2", "qwen2-1/image-to-image"], "title": "CarouselImageModel", "default": "gpt-image-2-5-sunburst-text-to-image", "x-ref": "#/components/schemas/CarouselImageModel", "key$": "image_model" }, "visual_style_id": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Visual Style Id", "key$": "visual_style_id" }, "visual_style_custom": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Visual Style Custom", "key$": "visual_style_custom" }, "script_style_id": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Script Style Id", "key$": "script_style_id" }, "script_style_custom": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Script Style Custom", "key$": "script_style_custom" }, "mention_product": { "type": "boolean", "title": "Mention Product", "default": true, "key$": "mention_product" }, "num_slides": { "type": "integer", "maximum": 10, "minimum": 3, "title": "Num Slides", "default": 3, "key$": "num_slides" }, "product_id": { "anyOf": [{ "type": "string", "format": "uuid" }, { "type": "null" }], "title": "Product Id", "description": "Product ID to use. Required for enterprise users with multiple products. If not provided, defaults to user's first active product.", "key$": "product_id" } }, "type": "object", "title": "CreateCarouselFromStylesRequest", "x-ref": "#/components/schemas/CreateCarouselFromStylesRequest", "index$": 1 } } }, "required": true }, "parameters": [] }, "POST /api/carousel/create-from-template": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "properties": { "template_id": { "type": "string", "title": "Template Id", "key$": "template_id" }, "image_model": { "type": "string", "enum": ["gpt-image-2-5-sunburst-text-to-image", "nano-banana-2", "qwen2-1/image-to-image"], "title": "CarouselImageModel", "default": "gpt-image-2-5-sunburst-text-to-image", "x-ref": "#/components/schemas/CarouselImageModel", "key$": "image_model" }, "mention_product": { "type": "boolean", "title": "Mention Product", "default": true, "key$": "mention_product" }, "product_id": { "anyOf": [{ "type": "string", "format": "uuid" }, { "type": "null" }], "title": "Product Id", "description": "Product ID to use. Required for enterprise users with multiple products. If not provided, defaults to user's first active product.", "key$": "product_id" } }, "type": "object", "required": ["template_id"], "title": "CreateCarouselFromTemplateRequest", "x-ref": "#/components/schemas/CreateCarouselFromTemplateRequest", "index$": 1 } } }, "required": true }, "parameters": [] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const create_carousel_ref01_ent = client.CreateCarousel();
        let create_carousel_ref01_data = setup.data.new.create_carousel['create_carousel_ref01'];
        create_carousel_ref01_data = (await create_carousel_ref01_ent.create(create_carousel_ref01_data)).data();
        (0, node_assert_1.default)(null != create_carousel_ref01_data);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/create_carousel/CreateCarouselTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CrackedApiReferenceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['create_carousel01', 'create_carousel02', 'create_carousel03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CRACKED_API_REFERENCE_TEST_CREATE_CAROUSEL_ENTID': idmap,
        'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
        'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
        'CRACKED_API_REFERENCE_APIKEY': '',
        'CRACKED_API_REFERENCE_SERVER_BASE': "",
    });
    idmap = env['CRACKED_API_REFERENCE_TEST_CREATE_CAROUSEL_ENTID'];
    const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CRACKED_API_REFERENCE_TEST_CREATE_CAROUSEL_ENTID'];
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
//# sourceMappingURL=CreateCarouselEntity.test.js.map