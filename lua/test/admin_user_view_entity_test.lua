-- AdminUserView entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("cracked-api-reference_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

-- main.kit.test.live.strict is true (the default is true): a live
-- request that fails, or a live test missing an input it needs,
-- fails the test.
-- An account with no record for a test to read skips it either way.
local LIVE_STRICT = true


local BaseFeature = require("feature.base_feature")

local FailHook = {}
FailHook.__index = FailHook
setmetatable(FailHook, { __index = BaseFeature })

function FailHook.new()
  local self = setmetatable(BaseFeature.new(), FailHook)
  self.name = "failhook"
  self.unexpected = 0
  return self
end

function FailHook:init(_ctx, _options) end
function FailHook:PreSpec(_ctx) error("admin_user_view hook failed") end
function FailHook:PreUnexpected(_ctx) self.unexpected = self.unexpected + 1 end

local function errtext(err)
  if type(err) == "table" then
    return tostring(err.msg or err.message or "")
  end
  return tostring(err)
end

describe("AdminUserViewEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:AdminUserView(nil)
    assert.is_not_nil(ent)
  end)

  -- Feature #4: the entity stream(action, ...) method runs the op pipeline and
  -- returns an iterator over result items. With the streaming feature active it
  -- yields the feature's incremental output; otherwise it falls back to the
  -- materialised list so stream always yields.
  it("should stream", function()
    local seed = {
      entity = {
        ["admin_user_view"] = {
          s1 = { id = "s1" },
          s2 = { id = "s2" },
          s3 = { id = "s3" },
        },
      },
    }

    -- Fallback: streaming inactive -> yields the materialised list items.
    local base = sdk.test(seed, nil)
    local seen = {}
    for item in base:AdminUserView(nil):stream("list", nil, nil) do
      table.insert(seen, item)
    end
    assert.are.equal(3, #seen)

    -- Inbound: streaming active -> yields each item from the feature.
    local config = require("config_shared")()
    if type(config.feature) == "table" and config.feature.streaming ~= nil then
      local streamsdk = sdk.test(seed, { feature = { streaming = { active = true } } })
      local got = {}
      for item in streamsdk:AdminUserView(nil):stream("list", nil, nil) do
        if vs.islist(item) then
          for _, sub in ipairs(item) do
            table.insert(got, sub)
          end
        else
          table.insert(got, item)
        end
      end
      assert.are.equal(3, #got)
    end
  end)

  it("should report a failed stream", function()
    local offline = { net = { offline = true } }
    local ok, err = pcall(function()
      for _ in sdk.test(offline, nil):AdminUserView(nil):stream("list", nil, nil) do end
    end)
    assert.is_false(ok)
    assert.truthy(string.find(errtext(err), "offline", 1, true))

    for _ in sdk.test(offline, nil):AdminUserView(nil):stream("list", nil, { ctrl = { throw = false } }) do end

    local config = require("config_shared")()
    if type(config.feature) == "table" and config.feature.rbac ~= nil then
      local denied = sdk.test(nil, { feature = { rbac = { active = true, deny = true } } })
      local dok, derr = pcall(function()
        for _ in denied:AdminUserView(nil):stream("list", nil, nil) do end
      end)
      assert.is_false(dok)
      assert.are.equal("rbac_denied", type(derr) == "table" and derr.code or nil)
    end
  end)

  it("should leave the caller's ctrl", function()
    local explain = {}
    local ctrl = { explain = explain }
    for _ in sdk.test(nil, nil):AdminUserView(nil):stream("list", nil, { ctrl = ctrl }) do end
    assert.is_nil(ctrl.stream)
    assert.are.equal(explain, ctrl.explain)
    assert.is_not_nil(next(explain))
  end)

  it("should fire PreUnexpected", function()
    local hook = FailHook.new()
    local client = sdk.new({ feature = { test = { active = true } }, extend = { hook } })

    local out, err = client:AdminUserView(nil):list(nil, nil)
    assert.is_nil(out)
    assert.truthy(string.find(errtext(err), "hook failed", 1, true))
    assert.is_true(hook.unexpected > 0)

    local fired = hook.unexpected
    out, err = client:AdminUserView(nil):list(nil, { throw = false })
    assert.is_nil(err)
    assert.is_true(hook.unexpected > fired)
  end)

  it("should refuse an invalid request", function()
    local config = require("config_shared")()
    if type(config.feature) ~= "table" or config.feature.validate == nil then
      pending("feature not present in this SDK: validate")
      return
    end
    local client = sdk.test(nil, { feature = { validate = { active = true } } })
    local _, err = client:AdminUserView(nil):list({ ["limit"] = "x" }, nil)
    assert.are.equal("validate_failed", type(err) == "table" and err.code or nil)
  end)

  it("should run basic flow", function()
    local setup = admin_user_view_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "list", "update", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "admin_user_view." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    if setup.live then
      for _, _live_key in ipairs({"user01"}) do
        if setup.synthetic_only or setup.idmap[_live_key] == nil then
          runner.live_miss(pending, LIVE_STRICT, "Live entity test blocked: needs " .. _live_key .. " via CRACKED_API_REFERENCE_TEST_ADMIN_USER_VIEW_ENTID")
        end
      end
    end
    local client = setup.client

    -- CREATE
    local admin_user_view_ref01_ent = client:AdminUserView(nil)
    local admin_user_view_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.admin_user_view"), "admin_user_view_ref01"))
    admin_user_view_ref01_data["user_id"] = setup.idmap["user01"]

    local admin_user_view_ref01_data_result, err = admin_user_view_ref01_ent:create(admin_user_view_ref01_data, nil)
    assert.is_nil(err)
    admin_user_view_ref01_data = helpers.to_map(type(admin_user_view_ref01_data_result) == 'table' and admin_user_view_ref01_data_result.data_get and admin_user_view_ref01_data_result:data_get() or admin_user_view_ref01_data_result)
    assert.is_not_nil(admin_user_view_ref01_data)
    assert.is_not_nil(admin_user_view_ref01_data["id"])

    -- LIST
    local admin_user_view_ref01_match = {}

    local admin_user_view_ref01_list_result, err = admin_user_view_ref01_ent:list(admin_user_view_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(admin_user_view_ref01_list_result)

    local found_item = vs.select(
      runner.entity_list_to_data(admin_user_view_ref01_list_result),
      { id = admin_user_view_ref01_data["id"] })
    assert.is_false(vs.isempty(found_item))

    -- UPDATE
    local admin_user_view_ref01_data_up0_up = {
      id = admin_user_view_ref01_data["id"],
    }

    local admin_user_view_ref01_markdef_up0_name = "created_at"
    local admin_user_view_ref01_markdef_up0_value = "Mark01-admin_user_view_ref01_" .. tostring(setup.now)
    admin_user_view_ref01_data_up0_up[admin_user_view_ref01_markdef_up0_name] = admin_user_view_ref01_markdef_up0_value

    local admin_user_view_ref01_resdata_up0_result, err = admin_user_view_ref01_ent:update(admin_user_view_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local admin_user_view_ref01_resdata_up0 = helpers.to_map(type(admin_user_view_ref01_resdata_up0_result) == 'table' and admin_user_view_ref01_resdata_up0_result.data_get and admin_user_view_ref01_resdata_up0_result:data_get() or admin_user_view_ref01_resdata_up0_result)
    assert.is_not_nil(admin_user_view_ref01_resdata_up0)
    assert.are.equal(admin_user_view_ref01_resdata_up0["id"], admin_user_view_ref01_data_up0_up["id"])
    assert.are.equal(admin_user_view_ref01_resdata_up0[admin_user_view_ref01_markdef_up0_name], admin_user_view_ref01_markdef_up0_value)

    -- REMOVE
    local admin_user_view_ref01_match_rm0 = {
      id = admin_user_view_ref01_data["id"],
    }
    local _, err = admin_user_view_ref01_ent:remove(admin_user_view_ref01_match_rm0, nil)
    assert.is_nil(err)

    -- LIST
    local admin_user_view_ref01_match_rt0 = {}

    local admin_user_view_ref01_list_rt0_result, err = admin_user_view_ref01_ent:list(admin_user_view_ref01_match_rt0, nil)
    assert.is_nil(err)
    assert.is_table(admin_user_view_ref01_list_rt0_result)

    local not_found_item = vs.select(
      runner.entity_list_to_data(admin_user_view_ref01_list_rt0_result),
      { id = admin_user_view_ref01_data["id"] })
    assert.is_true(vs.isempty(not_found_item))

  end)
end)

function admin_user_view_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/admin_user_view/AdminUserViewTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read admin_user_view test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "admin_user_view01", "admin_user_view02", "admin_user_view03", "user01", "user02", "user03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Whether *_ENTID supplied the idmap, read before env_override consumes
  -- it: without it, the ids a live flow binds are the fixture's synthetic ones.
  local entid_env_raw = os.getenv("CRACKED_API_REFERENCE_TEST_ADMIN_USER_VIEW_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["CRACKED_API_REFERENCE_TEST_ADMIN_USER_VIEW_ENTID"] = idmap,
    ["CRACKED_API_REFERENCE_TEST_LIVE"] = "FALSE",
    ["CRACKED_API_REFERENCE_TEST_EXPLAIN"] = "FALSE",
    ["CRACKED_API_REFERENCE_APIKEY"] = "",
    ["CRACKED_API_REFERENCE_SERVER_BASE"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["CRACKED_API_REFERENCE_TEST_ADMIN_USER_VIEW_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end

  if env["CRACKED_API_REFERENCE_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["CRACKED_API_REFERENCE_APIKEY"],
        server = {
          ["base"] = env["CRACKED_API_REFERENCE_SERVER_BASE"],
        },
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["CRACKED_API_REFERENCE_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["CRACKED_API_REFERENCE_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
