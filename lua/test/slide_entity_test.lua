-- Slide entity test

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


describe("SlideEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:Slide(nil)
    assert.is_not_nil(ent)
  end)

  it("should refuse an invalid request", function()
    local config = require("config_shared")()
    if type(config.feature) ~= "table" or config.feature.validate == nil then
      pending("feature not present in this SDK: validate")
      return
    end
    local client = sdk.test(nil, { feature = { validate = { active = true } } })
    local _, err = client:Slide(nil):create({ ["carousel_id"] = 1, ["slide_index"] = 1 }, nil)
    assert.are.equal("validate_failed", type(err) == "table" and err.code or nil)
  end)

  it("should run basic flow", function()
    local setup = slide_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "slide." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    if setup.live then
      for _, _live_key in ipairs({"carousel01", "slide_index01"}) do
        if setup.synthetic_only or setup.idmap[_live_key] == nil then
          runner.live_miss(pending, LIVE_STRICT, "Live entity test blocked: needs " .. _live_key .. " via CRACKED_API_REFERENCE_TEST_SLIDE_ENTID")
        end
      end
    end
    local client = setup.client

    -- CREATE
    local slide_ref01_ent = client:Slide(nil)
    local slide_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.slide"), "slide_ref01"))
    slide_ref01_data["carousel_id"] = setup.idmap["carousel01"]
    slide_ref01_data["slide_index"] = setup.idmap["slide_index01"]

    local slide_ref01_data_result, err = slide_ref01_ent:create(slide_ref01_data, nil)
    assert.is_nil(err)
    slide_ref01_data = helpers.to_map(type(slide_ref01_data_result) == 'table' and slide_ref01_data_result.data_get and slide_ref01_data_result:data_get() or slide_ref01_data_result)
    assert.is_not_nil(slide_ref01_data)
    assert.is_not_nil(slide_ref01_data["id"])

    -- UPDATE
    local slide_ref01_data_up0_up = {
      id = slide_ref01_data["id"],
      ["carousel_id"] = setup.idmap["carousel_id"],
    }

    local slide_ref01_resdata_up0_result, err = slide_ref01_ent:update(slide_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local slide_ref01_resdata_up0 = helpers.to_map(type(slide_ref01_resdata_up0_result) == 'table' and slide_ref01_resdata_up0_result.data_get and slide_ref01_resdata_up0_result:data_get() or slide_ref01_resdata_up0_result)
    assert.is_not_nil(slide_ref01_resdata_up0)
    assert.are.equal(slide_ref01_resdata_up0["id"], slide_ref01_data_up0_up["id"])

  end)
end)

function slide_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/slide/SlideTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read slide test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "slide01", "slide02", "slide03", "carousel01", "carousel02", "carousel03", "slide_index01" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Whether *_ENTID supplied the idmap, read before env_override consumes
  -- it: without it, the ids a live flow binds are the fixture's synthetic ones.
  local entid_env_raw = os.getenv("CRACKED_API_REFERENCE_TEST_SLIDE_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["CRACKED_API_REFERENCE_TEST_SLIDE_ENTID"] = idmap,
    ["CRACKED_API_REFERENCE_TEST_LIVE"] = "FALSE",
    ["CRACKED_API_REFERENCE_TEST_EXPLAIN"] = "FALSE",
    ["CRACKED_API_REFERENCE_APIKEY"] = "",
    ["CRACKED_API_REFERENCE_SERVER_BASE"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["CRACKED_API_REFERENCE_TEST_SLIDE_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["carousel_id"] == nil then
    idmap_resolved["carousel_id"] = idmap_resolved["carousel01"]
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
