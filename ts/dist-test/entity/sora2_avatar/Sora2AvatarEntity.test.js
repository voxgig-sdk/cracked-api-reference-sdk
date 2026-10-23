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
(0, node_test_1.describe)('Sora2AvatarEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CRACKED_API_REFERENCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CrackedApiReferenceSDK.test();
        const ent = testsdk.Sora2Avatar();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('sora2_avatar hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.CrackedApiReferenceSDK.test(offline).Sora2Avatar().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.CrackedApiReferenceSDK.test(offline).Sora2Avatar()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.Sora2Avatar().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.CrackedApiReferenceSDK.test().Sora2Avatar().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.Sora2Avatar().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.Sora2Avatar().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Sora2Avatar().list({ "completed_only": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'sora2_avatar.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "avatar_frame_url": { "a": true, "h": "Avatar Frame Url", "n": "avatar_frame_url", "r": false, "t": "`$ANY`", "key$": "avatar_frame_url", "index$": 0 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": true, "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "current_step": { "a": true, "h": "Current Step", "n": "current_step", "r": false, "t": "`$INTEGER`", "key$": "current_step", "index$": 2 }, "headshot_url": { "a": true, "h": "Headshot Url", "n": "headshot_url", "r": false, "t": "`$ANY`", "key$": "headshot_url", "index$": 3 }, "id": { "a": true, "fo": "uuid", "h": "Id", "n": "id", "r": true, "t": "`$STRING`", "key$": "id", "index$": 4 }, "logs": { "a": true, "h": "Logs", "n": "logs", "r": false, "t": "`$OBJECT`", "key$": "logs", "index$": 5 }, "prompt_key": { "a": true, "h": "Prompt Key", "n": "prompt_key", "op": { "update": { "req": false, "type": "`$ANY`" } }, "r": true, "t": "`$STRING`", "key$": "prompt_key", "index$": 6 }, "run_output_dir": { "a": true, "h": "Run Output Dir", "n": "run_output_dir", "r": false, "t": "`$ANY`", "key$": "run_output_dir", "index$": 7 }, "selected_age_bucket": { "a": true, "h": "Selected Age Bucket", "n": "selected_age_bucket", "op": { "update": { "req": false, "type": "`$ANY`" } }, "r": true, "t": "`$STRING`", "key$": "selected_age_bucket", "index$": 8 }, "selected_gender": { "a": true, "h": "Selected Gender", "n": "selected_gender", "op": { "update": { "req": false, "type": "`$ANY`" } }, "r": true, "t": "`$STRING`", "key$": "selected_gender", "index$": 9 }, "selected_prompt": { "a": true, "h": "Selected Prompt", "n": "selected_prompt", "r": false, "t": "`$ANY`", "key$": "selected_prompt", "index$": 10 }, "selected_race": { "a": true, "h": "Selected Race", "n": "selected_race", "op": { "update": { "req": false, "type": "`$ANY`" } }, "r": true, "t": "`$STRING`", "key$": "selected_race", "index$": 11 }, "sora2_cameo_handle": { "a": true, "h": "Sora2 Cameo Handle", "n": "sora2_cameo_handle", "r": false, "t": "`$ANY`", "key$": "sora2_cameo_handle", "index$": 12 }, "sora2_cameo_id": { "a": true, "h": "Sora2 Cameo Id", "n": "sora2_cameo_id", "r": false, "t": "`$STRING`", "key$": "sora2_cameo_id", "index$": 13 }, "sora2_cameo_link": { "a": true, "h": "Sora2 Cameo Link", "n": "sora2_cameo_link", "r": false, "t": "`$ANY`", "key$": "sora2_cameo_link", "index$": 14 }, "sora2_display_name": { "a": true, "h": "Sora2 Display Name", "n": "sora2_display_name", "r": false, "t": "`$ANY`", "key$": "sora2_display_name", "index$": 15 }, "sora2_task_id": { "a": true, "h": "Sora2 Task Id", "n": "sora2_task_id", "r": false, "t": "`$STRING`", "key$": "sora2_task_id", "index$": 16 }, "sora2_video_url": { "a": true, "h": "Sora2 Video Url", "n": "sora2_video_url", "op": { "update": { "req": false, "type": "`$ANY`" } }, "r": true, "t": "`$STRING`", "key$": "sora2_video_url", "index$": 17 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": true, "t": "`$STRING`", "key$": "updated_at", "index$": 18 } }, "id": { "field": "id", "name": "id" }, "name": "sora2_avatar", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["avatar_frame_url", "current_step", "headshot_url", "logs", "prompt_key", "run_output_dir", "selected_age_bucket", "selected_gender", "selected_prompt", "selected_race", "sora2_cameo_handle", "sora2_cameo_id", "sora2_cameo_link", "sora2_display_name", "sora2_task_id", "sora2_video_url"], "co": { "id": "POST /api/admin/sora2-avatars", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/admin/sora2-avatars", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "admin" }, { "lit": "sora2-avatars" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/admin/sora2-avatars", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": false, "k": "query", "n": "completed_only", "or": "completed_only", "r": false, "t": "`$BOOLEAN`", "index$": 0 }, { "a": true, "k": "query", "n": "current_step", "or": "current_step", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "ex": 50, "k": "query", "n": "page_size", "or": "page_size", "r": false, "t": "`$INTEGER`", "index$": 3 }, { "a": true, "k": "query", "n": "prompt_key", "or": "prompt_key", "r": false, "t": "`$ANY`", "index$": 4 }, { "a": true, "k": "query", "n": "search", "or": "search", "r": false, "t": "`$ANY`", "index$": 5 }, { "a": true, "k": "query", "n": "selected_age_bucket", "or": "selected_age_bucket", "r": false, "t": "`$ANY`", "index$": 6 }, { "a": true, "k": "query", "n": "selected_gender", "or": "selected_gender", "r": false, "t": "`$ANY`", "index$": 7 }, { "a": true, "k": "query", "n": "selected_race", "or": "selected_race", "r": false, "t": "`$ANY`", "index$": 8 }] }, "k": "http", "m": "GET", "o": "/api/admin/sora2-avatars", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "admin" }, { "lit": "sora2-avatars" }], "t": { "req": "`reqdata`", "res": "`body.items`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/admin/sora2-avatars/{avatar_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "avatar_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/admin/sora2-avatars/{avatar_id}", "q": { "exist": ["id"] }, "r": { "param": { "avatar_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "admin" }, { "lit": "sora2-avatars" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["avatar_frame_url", "current_step", "headshot_url", "logs", "prompt_key", "run_output_dir", "selected_age_bucket", "selected_gender", "selected_prompt", "selected_race", "sora2_cameo_handle", "sora2_cameo_id", "sora2_cameo_link", "sora2_display_name", "sora2_task_id", "sora2_video_url"], "co": { "id": "PUT /api/admin/sora2-avatars/{avatar_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "avatar_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/admin/sora2-avatars/{avatar_id}", "q": { "exist": ["id"] }, "r": { "param": { "avatar_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "admin" }, { "lit": "sora2-avatars" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "sora2_avatar", "name__orig": "sora2_avatar", "Name": "Sora2Avatar", "name_": "sora2_avatar", "name-": "sora2-avatar", "NAME": "SORA2_AVATAR", "index$": 145 }, { "active": true, "entity": "sora2_avatar", "key$": "BasicSora2AvatarFlow", "kind": "basic", "name": "BasicSora2AvatarFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "sora2_avatar_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "sora2_avatar_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "sora2_avatar_ref01", "srcdatavar": "sora2_avatar_ref01_data", "suffix": "_up0", "textfield": "created_at" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-sora2_avatar_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "sora2_avatar_ref01", "srcdatavar": "sora2_avatar_ref01_data", "suffix": "_dt0" }, "m": { "id": "sora2_avatar01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-sora2_avatar_ref01" } }], "index$": 3 }] }, 'Sora2Avatar', { "POST /api/admin/sora2-avatars": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "properties": { "prompt_key": { "type": "string", "title": "Prompt Key", "key$": "prompt_key" }, "selected_prompt": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Selected Prompt", "key$": "selected_prompt" }, "selected_gender": { "type": "string", "title": "Selected Gender", "key$": "selected_gender" }, "selected_race": { "type": "string", "title": "Selected Race", "key$": "selected_race" }, "selected_age_bucket": { "type": "string", "title": "Selected Age Bucket", "key$": "selected_age_bucket" }, "sora2_video_url": { "type": "string", "title": "Sora2 Video Url", "key$": "sora2_video_url" }, "sora2_task_id": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Sora2 Task Id", "key$": "sora2_task_id" }, "sora2_cameo_id": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Sora2 Cameo Id", "key$": "sora2_cameo_id" }, "sora2_cameo_handle": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Sora2 Cameo Handle", "key$": "sora2_cameo_handle" }, "sora2_display_name": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Sora2 Display Name", "key$": "sora2_display_name" }, "sora2_cameo_link": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Sora2 Cameo Link", "key$": "sora2_cameo_link" }, "avatar_frame_url": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Avatar Frame Url", "key$": "avatar_frame_url" }, "headshot_url": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Headshot Url", "key$": "headshot_url" }, "current_step": { "type": "integer", "minimum": 1, "title": "Current Step", "default": 1, "key$": "current_step" }, "run_output_dir": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Run Output Dir", "key$": "run_output_dir" }, "logs": { "type": "object", "title": "Logs", "key$": "logs" } }, "type": "object", "required": ["prompt_key", "selected_gender", "selected_race", "selected_age_bucket", "sora2_video_url"], "title": "Sora2AvatarCreate", "x-ref": "#/components/schemas/Sora2AvatarCreate", "index$": 1 } } } }, "parameters": [] }, "GET /api/admin/sora2-avatars": { "protocol": "http", "parameters": [{ "name": "page", "in": "query", "required": false, "schema": { "type": "integer", "minimum": 1, "default": 1, "title": "Page" }, "index$": 0 }, { "name": "page_size", "in": "query", "required": false, "schema": { "type": "integer", "maximum": 500, "minimum": 1, "default": 50, "title": "Page Size" }, "index$": 1 }, { "name": "prompt_key", "in": "query", "required": false, "schema": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Prompt Key" }, "index$": 2 }, { "name": "selected_gender", "in": "query", "required": false, "schema": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Selected Gender" }, "index$": 3 }, { "name": "selected_race", "in": "query", "required": false, "schema": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Selected Race" }, "index$": 4 }, { "name": "selected_age_bucket", "in": "query", "required": false, "schema": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Selected Age Bucket" }, "index$": 5 }, { "name": "current_step", "in": "query", "required": false, "schema": { "anyOf": [{ "type": "integer", "minimum": 1 }, { "type": "null" }], "title": "Current Step" }, "index$": 6 }, { "name": "completed_only", "in": "query", "required": false, "schema": { "type": "boolean", "default": false, "title": "Completed Only" }, "index$": 7 }, { "name": "search", "in": "query", "required": false, "schema": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Search" }, "index$": 8 }] }, "GET /api/admin/sora2-avatars/{avatar_id}": { "protocol": "http", "parameters": [{ "name": "avatar_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid", "title": "Avatar Id" }, "index$": 0 }] }, "PUT /api/admin/sora2-avatars/{avatar_id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "properties": { "prompt_key": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Prompt Key", "key$": "prompt_key" }, "selected_prompt": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Selected Prompt", "key$": "selected_prompt" }, "selected_gender": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Selected Gender", "key$": "selected_gender" }, "selected_race": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Selected Race", "key$": "selected_race" }, "selected_age_bucket": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Selected Age Bucket", "key$": "selected_age_bucket" }, "sora2_video_url": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Sora2 Video Url", "key$": "sora2_video_url" }, "sora2_task_id": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Sora2 Task Id", "key$": "sora2_task_id" }, "sora2_cameo_id": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Sora2 Cameo Id", "key$": "sora2_cameo_id" }, "sora2_cameo_handle": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Sora2 Cameo Handle", "key$": "sora2_cameo_handle" }, "sora2_display_name": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Sora2 Display Name", "key$": "sora2_display_name" }, "sora2_cameo_link": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Sora2 Cameo Link", "key$": "sora2_cameo_link" }, "avatar_frame_url": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Avatar Frame Url", "key$": "avatar_frame_url" }, "headshot_url": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Headshot Url", "key$": "headshot_url" }, "current_step": { "anyOf": [{ "type": "integer", "minimum": 1 }, { "type": "null" }], "title": "Current Step", "key$": "current_step" }, "run_output_dir": { "anyOf": [{ "type": "string" }, { "type": "null" }], "title": "Run Output Dir", "key$": "run_output_dir" }, "logs": { "anyOf": [{ "type": "object" }, { "type": "null" }], "title": "Logs", "key$": "logs" } }, "type": "object", "title": "Sora2AvatarUpdate", "x-ref": "#/components/schemas/Sora2AvatarUpdate", "index$": 1 } } } }, "parameters": [{ "name": "avatar_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid", "title": "Avatar Id" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const sora2_avatar_ref01_ent = client.Sora2Avatar();
        let sora2_avatar_ref01_data = setup.data.new.sora2_avatar['sora2_avatar_ref01'];
        sora2_avatar_ref01_data = (await sora2_avatar_ref01_ent.create(sora2_avatar_ref01_data)).data();
        (0, node_assert_1.default)(null != sora2_avatar_ref01_data.id);
        // LIST
        const sora2_avatar_ref01_match = {};
        const sora2_avatar_ref01_list = (await sora2_avatar_ref01_ent.list(sora2_avatar_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(sora2_avatar_ref01_list, { id: sora2_avatar_ref01_data.id })));
        // UPDATE
        const sora2_avatar_ref01_data_up0 = {};
        sora2_avatar_ref01_data_up0.id = sora2_avatar_ref01_data.id;
        const sora2_avatar_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-sora2_avatar_ref01_' + setup.now };
        sora2_avatar_ref01_data_up0[sora2_avatar_ref01_markdef_up0.name] = sora2_avatar_ref01_markdef_up0.value;
        const sora2_avatar_ref01_resdata_up0 = (await sora2_avatar_ref01_ent.update(sora2_avatar_ref01_data_up0)).data();
        (0, node_assert_1.default)(sora2_avatar_ref01_resdata_up0.id === sora2_avatar_ref01_data_up0.id);
        (0, node_assert_1.default)(sora2_avatar_ref01_resdata_up0[sora2_avatar_ref01_markdef_up0.name] === sora2_avatar_ref01_markdef_up0.value);
        // LOAD
        const sora2_avatar_ref01_match_dt0 = {};
        sora2_avatar_ref01_match_dt0.id = sora2_avatar_ref01_data.id;
        const sora2_avatar_ref01_data_dt0 = (await sora2_avatar_ref01_ent.load(sora2_avatar_ref01_match_dt0)).data();
        (0, node_assert_1.default)(sora2_avatar_ref01_data_dt0.id === sora2_avatar_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/sora2_avatar/Sora2AvatarTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CrackedApiReferenceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['sora2_avatar01', 'sora2_avatar02', 'sora2_avatar03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CRACKED_API_REFERENCE_TEST_SORA2_AVATAR_ENTID': idmap,
        'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
        'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
        'CRACKED_API_REFERENCE_APIKEY': '',
        'CRACKED_API_REFERENCE_SERVER_BASE': "",
    });
    idmap = env['CRACKED_API_REFERENCE_TEST_SORA2_AVATAR_ENTID'];
    const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CRACKED_API_REFERENCE_TEST_SORA2_AVATAR_ENTID'];
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
//# sourceMappingURL=Sora2AvatarEntity.test.js.map