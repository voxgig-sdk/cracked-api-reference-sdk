# Slide entity test

require "minitest/autorun"
require "json"
require_relative "../CrackedApiReference_sdk"
require_relative "runner"

class SlideEntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = CrackedApiReferenceSDK.test(nil, nil)
    ent = testsdk.Slide(nil)
    assert !ent.nil?
  end

  def test_validate
    cfg = CrackedApiReferenceConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    client = CrackedApiReferenceSDK.test(nil, { "feature" => { "validate" => { "active" => true } } })
    err = assert_raises(StandardError) do
      client.Slide(nil).create({ "carousel_id" => 1, "slide_index" => 1 }, nil)
    end
    assert_equal "validate_failed", err.code
  end

  def test_basic_flow
    setup = slide_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "slide." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    if setup[:live]
      ["carousel01", "slide_index01"].each do |_live_key|
        if setup[:synthetic_only] || setup[:idmap][_live_key].nil?
          Runner.live_miss(LIVE_STRICT, "Live entity test blocked: needs #{_live_key} via CRACKED_API_REFERENCE_TEST_SLIDE_ENTID")
        end
      end
    end
    client = setup[:client]

    # CREATE
    slide_ref01_ent = client.Slide(nil)
    slide_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.slide"), "slide_ref01"))
    slide_ref01_data["carousel_id"] = setup[:idmap]["carousel01"]
    slide_ref01_data["slide_index"] = setup[:idmap]["slide_index01"]

    slide_ref01_data_result = slide_ref01_ent.create(slide_ref01_data, nil)
    slide_ref01_data = Helpers.to_map(slide_ref01_data_result.respond_to?(:data_get) ? slide_ref01_data_result.data_get : slide_ref01_data_result)
    assert !slide_ref01_data.nil?
    assert !slide_ref01_data["id"].nil?

    # UPDATE
    slide_ref01_data_up0_up = {
      "id" => slide_ref01_data["id"],
      "carousel_id" => setup[:idmap]["carousel_id"],
    }

    slide_ref01_resdata_up0_result = slide_ref01_ent.update(slide_ref01_data_up0_up, nil)
    slide_ref01_resdata_up0 = Helpers.to_map(slide_ref01_resdata_up0_result.respond_to?(:data_get) ? slide_ref01_resdata_up0_result.data_get : slide_ref01_resdata_up0_result)
    assert !slide_ref01_resdata_up0.nil?
    assert_equal slide_ref01_resdata_up0["id"], slide_ref01_data_up0_up["id"]

  end
end

def slide_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "slide", "SlideTestData.json")
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CrackedApiReferenceSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["slide01", "slide02", "slide03", "carousel01", "carousel02", "carousel03", "slide_index01"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
  entid_env_raw = ENV["CRACKED_API_REFERENCE_TEST_SLIDE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CRACKED_API_REFERENCE_TEST_SLIDE_ENTID" => idmap,
    "CRACKED_API_REFERENCE_TEST_LIVE" => "FALSE",
    "CRACKED_API_REFERENCE_TEST_EXPLAIN" => "FALSE",
    "CRACKED_API_REFERENCE_APIKEY" => "",
    "CRACKED_API_REFERENCE_SERVER_BASE" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CRACKED_API_REFERENCE_TEST_SLIDE_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["carousel_id"].nil?
    idmap_resolved["carousel_id"] = idmap_resolved["carousel01"]
  end

  if env["CRACKED_API_REFERENCE_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
        "apikey" => env["CRACKED_API_REFERENCE_APIKEY"],
        "server" => {
          "base" => env["CRACKED_API_REFERENCE_SERVER_BASE"],
        },
      },
      extra || {},
    ])
    client = CrackedApiReferenceSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["CRACKED_API_REFERENCE_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["CRACKED_API_REFERENCE_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
