# AdminUserView entity test

require "minitest/autorun"
require "json"
require_relative "../CrackedApiReference_sdk"
require_relative "runner"

class AdminUserViewEntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = CrackedApiReferenceSDK.test(nil, nil)
    ent = testsdk.AdminUserView(nil)
    assert !ent.nil?
  end

  def test_list_entities
    seed = {
      "entity" => {
        "admin_user_view" => {
          "l1" => { "id" => "l1" },
          "l2" => { "id" => "l2" },
        },
      },
    }
    items = CrackedApiReferenceSDK.test(seed, nil).AdminUserView(nil).list(nil, nil)
    # list resolves to one entity per record; data_get reads the record.
    assert_equal 2, items.length
    items.each do |item|
      assert item.respond_to?(:data_get)
      assert item.data_get.is_a?(Hash)
    end
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "admin_user_view" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = CrackedApiReferenceSDK.test(seed, nil)
    seen = base.AdminUserView(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = CrackedApiReferenceConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = CrackedApiReferenceSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.AdminUserView(nil).stream("list", nil, nil).each do |item|
        if item.is_a?(Array)
          got.concat(item)
        else
          got << item
        end
      end
      assert_equal 3, got.length
    end
  end

  class FailHook < CrackedApiReferenceBaseFeature
    attr_reader :unexpected

    def initialize
      super()
      @name = "failhook"
      @unexpected = 0
    end

    def PreSpec(ctx)
      raise "admin_user_view hook failed"
    end

    def PreUnexpected(ctx)
      @unexpected += 1
    end
  end

  def test_stream_error
    offline = { "net" => { "offline" => true } }
    err = assert_raises(StandardError) do
      CrackedApiReferenceSDK.test(offline, nil).AdminUserView(nil).stream("list", nil, nil).to_a
    end
    assert_match(/offline/, err.message)

    CrackedApiReferenceSDK.test(offline, nil).AdminUserView(nil)
      .stream("list", nil, { "ctrl" => { "throw" => false } }).to_a

    cfg = CrackedApiReferenceConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("rbac")
      denied = CrackedApiReferenceSDK.test(nil, { "feature" => { "rbac" => { "active" => true, "deny" => true } } })
      err = assert_raises(StandardError) do
        denied.AdminUserView(nil).stream("list", nil, nil).to_a
      end
      assert_equal "rbac_denied", err.code
    end
  end

  def test_stream_ctrl
    explain = {}
    ctrl = { "explain" => explain }
    CrackedApiReferenceSDK.test(nil, nil).AdminUserView(nil).stream("list", nil, { "ctrl" => ctrl }).to_a
    assert_equal ["explain"], ctrl.keys
    assert_same explain, ctrl["explain"]
    refute_empty explain
  end

  def test_unexpected
    hook = FailHook.new
    client = CrackedApiReferenceSDK.new({ "feature" => { "test" => { "active" => true } }, "extend" => [hook] })

    err = assert_raises(StandardError) do
      client.AdminUserView(nil).list(nil, nil)
    end
    assert_match(/hook failed/, err.message)
    assert_operator hook.unexpected, :>, 0

    fired = hook.unexpected
    assert_nil client.AdminUserView(nil).list(nil, { "throw" => false })
    assert_operator hook.unexpected, :>, fired
  end

  def test_validate
    cfg = CrackedApiReferenceConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    client = CrackedApiReferenceSDK.test(nil, { "feature" => { "validate" => { "active" => true } } })
    err = assert_raises(StandardError) do
      client.AdminUserView(nil).list({ "limit" => "x" }, nil)
    end
    assert_equal "validate_failed", err.code
  end

  def test_basic_flow
    setup = admin_user_view_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "admin_user_view." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    if setup[:live]
      ["user01"].each do |_live_key|
        if setup[:synthetic_only] || setup[:idmap][_live_key].nil?
          Runner.live_miss(LIVE_STRICT, "Live entity test blocked: needs #{_live_key} via CRACKED_API_REFERENCE_TEST_ADMIN_USER_VIEW_ENTID")
        end
      end
    end
    client = setup[:client]

    # CREATE
    admin_user_view_ref01_ent = client.AdminUserView(nil)
    admin_user_view_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.admin_user_view"), "admin_user_view_ref01"))
    admin_user_view_ref01_data["user_id"] = setup[:idmap]["user01"]

    admin_user_view_ref01_data_result = admin_user_view_ref01_ent.create(admin_user_view_ref01_data, nil)
    admin_user_view_ref01_data = Helpers.to_map(admin_user_view_ref01_data_result.respond_to?(:data_get) ? admin_user_view_ref01_data_result.data_get : admin_user_view_ref01_data_result)
    assert !admin_user_view_ref01_data.nil?
    assert !admin_user_view_ref01_data["id"].nil?

    # LIST
    admin_user_view_ref01_match = {}

    admin_user_view_ref01_list_result = admin_user_view_ref01_ent.list(admin_user_view_ref01_match, nil)
    assert admin_user_view_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(admin_user_view_ref01_list_result),
      { "id" => admin_user_view_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    admin_user_view_ref01_data_up0_up = {
      "id" => admin_user_view_ref01_data["id"],
    }

    admin_user_view_ref01_markdef_up0_name = "created_at"
    admin_user_view_ref01_markdef_up0_value = "Mark01-admin_user_view_ref01_#{setup[:now]}"
    admin_user_view_ref01_data_up0_up[admin_user_view_ref01_markdef_up0_name] = admin_user_view_ref01_markdef_up0_value

    admin_user_view_ref01_resdata_up0_result = admin_user_view_ref01_ent.update(admin_user_view_ref01_data_up0_up, nil)
    admin_user_view_ref01_resdata_up0 = Helpers.to_map(admin_user_view_ref01_resdata_up0_result.respond_to?(:data_get) ? admin_user_view_ref01_resdata_up0_result.data_get : admin_user_view_ref01_resdata_up0_result)
    assert !admin_user_view_ref01_resdata_up0.nil?
    assert_equal admin_user_view_ref01_resdata_up0["id"], admin_user_view_ref01_data_up0_up["id"]
    assert_equal admin_user_view_ref01_resdata_up0[admin_user_view_ref01_markdef_up0_name], admin_user_view_ref01_markdef_up0_value

    # REMOVE
    admin_user_view_ref01_match_rm0 = {
      "id" => admin_user_view_ref01_data["id"],
    }
    admin_user_view_ref01_ent.remove(admin_user_view_ref01_match_rm0, nil)

    # LIST
    admin_user_view_ref01_match_rt0 = {}

    admin_user_view_ref01_list_rt0_result = admin_user_view_ref01_ent.list(admin_user_view_ref01_match_rt0, nil)
    assert admin_user_view_ref01_list_rt0_result.is_a?(Array)

    not_found_item = Vs.select(
      Runner.entity_list_to_data(admin_user_view_ref01_list_rt0_result),
      { "id" => admin_user_view_ref01_data["id"] })
    assert Vs.isempty(not_found_item)

  end
end

def admin_user_view_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "admin_user_view", "AdminUserViewTestData.json")
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CrackedApiReferenceSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["admin_user_view01", "admin_user_view02", "admin_user_view03", "user01", "user02", "user03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
  entid_env_raw = ENV["CRACKED_API_REFERENCE_TEST_ADMIN_USER_VIEW_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CRACKED_API_REFERENCE_TEST_ADMIN_USER_VIEW_ENTID" => idmap,
    "CRACKED_API_REFERENCE_TEST_LIVE" => "FALSE",
    "CRACKED_API_REFERENCE_TEST_EXPLAIN" => "FALSE",
    "CRACKED_API_REFERENCE_APIKEY" => "",
    "CRACKED_API_REFERENCE_SERVER_BASE" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CRACKED_API_REFERENCE_TEST_ADMIN_USER_VIEW_ENTID"])
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
