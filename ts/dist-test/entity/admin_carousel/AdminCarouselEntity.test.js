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
(0, node_test_1.describe)('AdminCarouselEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CRACKED_API_REFERENCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CrackedApiReferenceSDK.test();
        const ent = testsdk.AdminCarousel();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.AdminCarousel().load({ "batch_id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'admin_carousel.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "agent_id": { "a": true, "h": "Agent Id", "n": "agent_id", "op": { "create": { "req": true, "type": "`$STRING`" } }, "r": false, "t": "`$STRING`", "key$": "agent_id", "index$": 0 }, "batch_id": { "a": true, "h": "Batch Id", "n": "batch_id", "op": { "create": { "req": true, "type": "`$STRING`" } }, "r": false, "t": "`$STRING`", "key$": "batch_id", "index$": 1 }, "caption": { "a": true, "h": "Caption", "n": "caption", "op": { "create": { "req": true, "type": "`$STRING`" } }, "r": false, "t": "`$STRING`", "key$": "caption", "index$": 2 }, "content_base64": { "a": true, "h": "Content Base64", "n": "content_base64", "r": false, "t": "`$STRING`", "key$": "content_base64", "index$": 3 }, "day": { "a": true, "h": "Day", "n": "day", "op": { "create": { "req": true, "type": "`$STRING`" } }, "r": false, "t": "`$ANY`", "key$": "day", "index$": 4 }, "dry_run": { "a": true, "h": "Dry Run", "n": "dry_run", "r": false, "t": "`$BOOLEAN`", "key$": "dry_run", "index$": 5 }, "engine_run": { "a": true, "h": "Engine Run", "n": "engine_run", "r": false, "t": "`$STRING`", "key$": "engine_run", "index$": 6 }, "expected_revision": { "a": true, "h": "Expected Revision", "n": "expected_revision", "r": true, "t": "`$STRING`", "key$": "expected_revision", "index$": 7 }, "formula": { "a": true, "h": "Formula", "n": "formula", "r": true, "t": "`$OBJECT`", "key$": "formula", "index$": 8 }, "formula_id": { "a": true, "h": "Formula Id", "n": "formula_id", "op": { "create": { "req": true, "type": "`$STRING`" } }, "r": false, "t": "`$STRING`", "key$": "formula_id", "index$": 9 }, "prompt": { "a": true, "h": "Prompt", "n": "prompt", "r": true, "t": "`$STRING`", "key$": "prompt", "index$": 10 }, "slides": { "a": true, "h": "Slides", "n": "slides", "r": true, "t": "`$ARRAY`", "key$": "slides", "index$": 11 }, "title": { "a": true, "h": "Title", "n": "title", "op": { "create": { "req": true, "type": "`$STRING`" }, "update": { "req": true, "type": "`$STRING`" } }, "r": false, "t": "`$STRING`", "key$": "title", "index$": 12 } }, "name": "admin_carousel", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["action", "dry_run"], "co": { "id": "POST /api/admin/carousels/slideshow-import/{batch_id}/state", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "batch_id", "or": "batch_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/admin/carousels/slideshow-import/{batch_id}/state", "q": { "$action": "state", "exist": ["batch_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "admin" }, { "lit": "carousels" }, { "lit": "slideshow-import" }, { "var": "batch_id" }, { "lit": "state" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "bf": ["agent_id", "batch_id", "caption", "content_base64", "day", "formula_id", "title"], "co": { "id": "POST /api/admin/carousels/slideshow-import/diag/{stage}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "stage", "or": "stage", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/admin/carousels/slideshow-import/diag/{stage}", "q": { "exist": ["stage"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "admin" }, { "lit": "carousels" }, { "lit": "slideshow-import" }, { "lit": "diag" }, { "var": "stage" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /api/admin/carousels/slideshow-import/decks", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/admin/carousels/slideshow-import/decks", "q": {}, "r": {}, "rb": { "fields": [{ "name": "agent_id" }, { "name": "batch_id" }, { "name": "caption" }, { "name": "day" }, { "name": "dry_run" }, { "name": "engine_run" }, { "name": "formula_id" }, { "binary": true, "list": true, "name": "slides" }, { "name": "title" }], "kind": "multipart", "media": "multipart/form-data" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "admin" }, { "lit": "carousels" }, { "lit": "slideshow-import" }, { "lit": "decks" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "bf": ["agent_id", "batch_id", "caption", "day", "dry_run", "engine_run", "formula_id", "slides", "title"], "co": { "id": "POST /api/admin/carousels/slideshow-import/decks-json", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/admin/carousels/slideshow-import/decks-json", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "admin" }, { "lit": "carousels" }, { "lit": "slideshow-import" }, { "lit": "decks-json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/admin/carousels/slideshow-import/{batch_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "batch_id", "or": "batch_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/admin/carousels/slideshow-import/{batch_id}", "q": { "exist": ["batch_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "admin" }, { "lit": "carousels" }, { "lit": "slideshow-import" }, { "var": "batch_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/admin/carousels/production-prompts/{fmt}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "fmt", "or": "fmt", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/admin/carousels/production-prompts/{fmt}", "q": { "exist": ["fmt"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "admin" }, { "lit": "carousels" }, { "lit": "production-prompts" }, { "var": "fmt" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /api/admin/carousels/demo-formulas/{formula_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "formula_id", "or": "formula_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/admin/carousels/demo-formulas/{formula_id}", "q": { "exist": ["formula_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "admin" }, { "lit": "carousels" }, { "lit": "demo-formulas" }, { "var": "formula_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "GET /api/admin/carousels/demo-formulas", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "product_id", "or": "product_id", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/admin/carousels/demo-formulas", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "admin" }, { "lit": "carousels" }, { "lit": "demo-formulas" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "a": true, "co": { "id": "GET /api/admin/carousels/freeform-production-prompt", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/api/admin/carousels/freeform-production-prompt", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "admin" }, { "lit": "carousels" }, { "lit": "freeform-production-prompt" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["expected_revision", "prompt"], "co": { "id": "PUT /api/admin/carousels/production-prompts/{fmt}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "fmt", "or": "fmt", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/admin/carousels/production-prompts/{fmt}", "q": { "exist": ["fmt"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "admin" }, { "lit": "carousels" }, { "lit": "production-prompts" }, { "var": "fmt" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "bf": ["expected_revision", "formula", "title"], "co": { "id": "PUT /api/admin/carousels/demo-formulas/{formula_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "formula_id", "or": "formula_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/admin/carousels/demo-formulas/{formula_id}", "q": { "exist": ["formula_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "admin" }, { "lit": "carousels" }, { "lit": "demo-formulas" }, { "var": "formula_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "bf": ["expected_revision", "prompt"], "co": { "id": "PUT /api/admin/carousels/freeform-production-prompt", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "PUT", "o": "/api/admin/carousels/freeform-production-prompt", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "admin" }, { "lit": "carousels" }, { "lit": "freeform-production-prompt" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "admin_carousel", "name__orig": "admin_carousel", "Name": "AdminCarousel", "name_": "admin_carousel", "name-": "admin-carousel", "NAME": "ADMIN_CAROUSEL", "index$": 5 }, { "active": true, "entity": "admin_carousel", "key$": "BasicAdminCarouselFlow", "kind": "basic", "name": "BasicAdminCarouselFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "admin_carousel_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "admin_carousel_ref01", "srcdatavar": "admin_carousel_ref01_data", "suffix": "_up0", "textfield": "agent_id" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-admin_carousel_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "admin_carousel_ref01", "srcdatavar": "admin_carousel_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-admin_carousel_ref01" } }], "index$": 2 }] }, 'AdminCarousel', { "POST /api/admin/carousels/slideshow-import/{batch_id}/state": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "properties": { "action": { "type": "string", "enum": ["release", "hold"], "title": "Action" }, "dry_run": { "type": "boolean", "title": "Dry Run", "default": true } }, "type": "object", "required": ["action"], "title": "SlideshowBatchChange", "x-ref": "#/components/schemas/SlideshowBatchChange" } } } }, "parameters": [{ "name": "batch_id", "in": "path", "required": true, "schema": { "type": "string", "title": "Batch Id" }, "index$": 0 }] }, "POST /api/admin/carousels/slideshow-import/diag/{stage}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "properties": { "content_base64": { "type": "string", "maxLength": 41943048, "title": "Content Base64", "default": "", "key$": "content_base64" }, "batch_id": { "type": "string", "title": "Batch Id", "default": "slide29-diagnostic", "key$": "batch_id" }, "day": { "anyOf": [{ "type": "string", "format": "date" }, { "type": "null" }], "title": "Day", "key$": "day" }, "agent_id": { "type": "string", "title": "Agent Id", "default": "", "key$": "agent_id" }, "formula_id": { "type": "string", "title": "Formula Id", "default": "", "key$": "formula_id" }, "title": { "type": "string", "title": "Title", "default": "", "key$": "title" }, "caption": { "type": "string", "title": "Caption", "default": "", "key$": "caption" } }, "type": "object", "title": "DiagnosticRequest", "x-ref": "#/components/schemas/DiagnosticRequest", "index$": 1 } } } }, "parameters": [{ "name": "stage", "in": "path", "required": true, "schema": { "enum": ["ping", "decode", "pil", "db", "get", "assign", "conflicts", "taken", "dryrun"], "type": "string", "title": "Stage" }, "index$": 0 }] }, "POST /api/admin/carousels/slideshow-import/decks": { "protocol": "http", "requestBody": { "content": { "multipart/form-data": { "schema": { "properties": { "batch_id": { "type": "string", "title": "Batch Id", "key$": "batch_id" }, "day": { "type": "string", "format": "date", "title": "Day", "key$": "day" }, "agent_id": { "type": "string", "title": "Agent Id", "key$": "agent_id" }, "formula_id": { "type": "string", "title": "Formula Id", "key$": "formula_id" }, "title": { "type": "string", "title": "Title", "key$": "title" }, "caption": { "type": "string", "title": "Caption", "key$": "caption" }, "engine_run": { "type": "string", "title": "Engine Run", "default": "", "key$": "engine_run" }, "dry_run": { "type": "boolean", "title": "Dry Run", "default": true, "key$": "dry_run" }, "slides": { "items": { "type": "string", "format": "binary" }, "type": "array", "title": "Slides", "key$": "slides" } }, "type": "object", "required": ["batch_id", "day", "agent_id", "formula_id", "title", "caption", "slides"], "title": "Body_import_slideshow_deck_api_admin_carousels_slideshow_import_decks_post", "x-ref": "#/components/schemas/Body_import_slideshow_deck_api_admin_carousels_slideshow_import_decks_post", "index$": 1 } } }, "required": true }, "parameters": [] }, "POST /api/admin/carousels/slideshow-import/decks-json": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "properties": { "batch_id": { "type": "string", "title": "Batch Id", "key$": "batch_id" }, "day": { "type": "string", "format": "date", "title": "Day", "key$": "day" }, "agent_id": { "type": "string", "title": "Agent Id", "key$": "agent_id" }, "formula_id": { "type": "string", "title": "Formula Id", "key$": "formula_id" }, "title": { "type": "string", "title": "Title", "key$": "title" }, "caption": { "type": "string", "title": "Caption", "key$": "caption" }, "engine_run": { "type": "string", "title": "Engine Run", "default": "", "key$": "engine_run" }, "dry_run": { "type": "boolean", "title": "Dry Run", "default": true, "key$": "dry_run" }, "slides": { "items": { "properties": { "name": { "type": "string", "maxLength": 200, "title": "Name" }, "content_base64": { "type": "string", "maxLength": 41943048, "title": "Content Base64" } }, "type": "object", "required": ["name", "content_base64"], "title": "SlideshowSlide", "x-ref": "#/components/schemas/SlideshowSlide" }, "type": "array", "maxItems": 35, "minItems": 1, "title": "Slides", "key$": "slides" } }, "type": "object", "required": ["batch_id", "day", "agent_id", "formula_id", "title", "caption", "slides"], "title": "SlideshowDeckJson", "description": "JSON form of the deck import, for clients that cannot send multipart.", "x-ref": "#/components/schemas/SlideshowDeckJson", "index$": 1 } } }, "required": true }, "parameters": [] }, "GET /api/admin/carousels/slideshow-import/{batch_id}": { "protocol": "http", "parameters": [{ "name": "batch_id", "in": "path", "required": true, "schema": { "type": "string", "title": "Batch Id" }, "index$": 0 }] }, "GET /api/admin/carousels/production-prompts/{fmt}": { "protocol": "http", "parameters": [{ "name": "fmt", "in": "path", "required": true, "schema": { "type": "string", "title": "Fmt" }, "index$": 0 }] }, "GET /api/admin/carousels/demo-formulas/{formula_id}": { "protocol": "http", "parameters": [{ "name": "formula_id", "in": "path", "required": true, "schema": { "type": "string", "title": "Formula Id" }, "index$": 0 }] }, "GET /api/admin/carousels/demo-formulas": { "protocol": "http", "parameters": [{ "name": "product_id", "in": "query", "required": false, "schema": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Product Id" }, "index$": 0 }] }, "GET /api/admin/carousels/freeform-production-prompt": { "protocol": "http", "parameters": [] }, "PUT /api/admin/carousels/production-prompts/{fmt}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "properties": { "prompt": { "type": "string", "maxLength": 200000, "minLength": 1, "title": "Prompt", "key$": "prompt" }, "expected_revision": { "type": "string", "pattern": "^[a-f0-9]{64}$", "title": "Expected Revision", "key$": "expected_revision" } }, "type": "object", "required": ["prompt", "expected_revision"], "title": "ProductionPromptEdit", "x-ref": "#/components/schemas/ProductionPromptEdit", "index$": 1 } } } }, "parameters": [{ "name": "fmt", "in": "path", "required": true, "schema": { "type": "string", "title": "Fmt" }, "index$": 0 }] }, "PUT /api/admin/carousels/demo-formulas/{formula_id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "properties": { "title": { "type": "string", "maxLength": 240, "minLength": 1, "title": "Title", "key$": "title" }, "formula": { "type": "object", "title": "Formula", "key$": "formula" }, "expected_revision": { "type": "string", "pattern": "^[a-f0-9]{64}$", "title": "Expected Revision", "key$": "expected_revision" } }, "type": "object", "required": ["title", "formula", "expected_revision"], "title": "FormulaEdit", "x-ref": "#/components/schemas/FormulaEdit", "index$": 1 } } } }, "parameters": [{ "name": "formula_id", "in": "path", "required": true, "schema": { "type": "string", "title": "Formula Id" }, "index$": 0 }] }, "PUT /api/admin/carousels/freeform-production-prompt": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "properties": { "prompt": { "type": "string", "maxLength": 200000, "minLength": 1, "title": "Prompt", "key$": "prompt" }, "expected_revision": { "type": "string", "pattern": "^[a-f0-9]{64}$", "title": "Expected Revision", "key$": "expected_revision" } }, "type": "object", "required": ["prompt", "expected_revision"], "title": "ProductionPromptEdit", "x-ref": "#/components/schemas/ProductionPromptEdit", "index$": 1 } } }, "required": true }, "parameters": [] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const admin_carousel_ref01_ent = client.AdminCarousel();
        let admin_carousel_ref01_data = setup.data.new.admin_carousel['admin_carousel_ref01'];
        admin_carousel_ref01_data = (await admin_carousel_ref01_ent.create(admin_carousel_ref01_data)).data();
        (0, node_assert_1.default)(null != admin_carousel_ref01_data);
        // UPDATE
        const admin_carousel_ref01_data_up0 = {};
        const admin_carousel_ref01_markdef_up0 = { name: 'agent_id', value: 'Mark01-admin_carousel_ref01_' + setup.now };
        admin_carousel_ref01_data_up0[admin_carousel_ref01_markdef_up0.name] = admin_carousel_ref01_markdef_up0.value;
        const admin_carousel_ref01_resdata_up0 = (await admin_carousel_ref01_ent.update(admin_carousel_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != admin_carousel_ref01_resdata_up0);
        (0, node_assert_1.default)(admin_carousel_ref01_resdata_up0[admin_carousel_ref01_markdef_up0.name] === admin_carousel_ref01_markdef_up0.value);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/admin_carousel/AdminCarouselTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CrackedApiReferenceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['admin_carousel01', 'admin_carousel02', 'admin_carousel03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CRACKED_API_REFERENCE_TEST_ADMIN_CAROUSEL_ENTID': idmap,
        'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
        'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
        'CRACKED_API_REFERENCE_APIKEY': '',
        'CRACKED_API_REFERENCE_SERVER_BASE': "",
    });
    idmap = env['CRACKED_API_REFERENCE_TEST_ADMIN_CAROUSEL_ENTID'];
    const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CRACKED_API_REFERENCE_TEST_ADMIN_CAROUSEL_ENTID'];
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
//# sourceMappingURL=AdminCarouselEntity.test.js.map