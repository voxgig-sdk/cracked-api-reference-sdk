# Video entity test

require "minitest/autorun"
require "json"
require_relative "../CrackedApiReference_sdk"
require_relative "runner"

class VideoEntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = CrackedApiReferenceSDK.test(nil, nil)
    ent = testsdk.Video(nil)
    assert !ent.nil?
  end

  def test_validate
    cfg = CrackedApiReferenceConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    client = CrackedApiReferenceSDK.test(nil, { "feature" => { "validate" => { "active" => true } } })
    err = assert_raises(StandardError) do
      client.Video(nil).load({ "id" => 1 }, nil)
    end
    assert_equal "validate_failed", err.code
  end

  def test_basic_flow
    setup = video_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "video." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    client = setup[:client]

    # CREATE
    video_ref01_ent = client.Video(nil)
    video_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.video"), "video_ref01"))

    video_ref01_data_result = video_ref01_ent.create(video_ref01_data, nil)
    video_ref01_data = Helpers.to_map(video_ref01_data_result.respond_to?(:data_get) ? video_ref01_data_result.data_get : video_ref01_data_result)
    assert !video_ref01_data.nil?
    assert !video_ref01_data["id"].nil?

    # UPDATE
    video_ref01_data_up0_up = {
      "id" => video_ref01_data["id"],
    }

    video_ref01_markdef_up0_name = "agent_id"
    video_ref01_markdef_up0_value = "Mark01-video_ref01_#{setup[:now]}"
    video_ref01_data_up0_up[video_ref01_markdef_up0_name] = video_ref01_markdef_up0_value

    video_ref01_resdata_up0_result = video_ref01_ent.update(video_ref01_data_up0_up, nil)
    video_ref01_resdata_up0 = Helpers.to_map(video_ref01_resdata_up0_result.respond_to?(:data_get) ? video_ref01_resdata_up0_result.data_get : video_ref01_resdata_up0_result)
    assert !video_ref01_resdata_up0.nil?
    assert_equal video_ref01_resdata_up0["id"], video_ref01_data_up0_up["id"]
    assert_equal video_ref01_resdata_up0[video_ref01_markdef_up0_name], video_ref01_markdef_up0_value

    # LOAD
    video_ref01_match_dt0 = {
      "id" => video_ref01_data["id"],
    }
    video_ref01_data_dt0_loaded = video_ref01_ent.load(video_ref01_match_dt0, nil)
    video_ref01_data_dt0_load_result = Helpers.to_map(video_ref01_data_dt0_loaded.respond_to?(:data_get) ? video_ref01_data_dt0_loaded.data_get : video_ref01_data_dt0_loaded)
    assert !video_ref01_data_dt0_load_result.nil?
    assert_equal video_ref01_data_dt0_load_result["id"], video_ref01_data["id"]

    # REMOVE
    video_ref01_match_rm0 = {
      "id" => video_ref01_data["id"],
    }
    video_ref01_ent.remove(video_ref01_match_rm0, nil)

  end
end

def video_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "video", "VideoTestData.json")
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CrackedApiReferenceSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["video01", "video02", "video03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
  entid_env_raw = ENV["CRACKED_API_REFERENCE_TEST_VIDEO_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CRACKED_API_REFERENCE_TEST_VIDEO_ENTID" => idmap,
    "CRACKED_API_REFERENCE_TEST_LIVE" => "FALSE",
    "CRACKED_API_REFERENCE_TEST_EXPLAIN" => "FALSE",
    "CRACKED_API_REFERENCE_APIKEY" => "",
    "CRACKED_API_REFERENCE_SERVER_BASE" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CRACKED_API_REFERENCE_TEST_VIDEO_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
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
