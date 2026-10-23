# CrackedApiReference SDK — documentation example COMPLETENESS GATE.
#
# Guarantees every fenced ruby code example across ALL THREE package docs is
# unit-tested. Reads the root ../../README.md, the Ruby ../README.md, and
# ../REFERENCE.md, extracts every fenced ruby block (tagged by source doc +
# index) and enforces:
#
#   1. SYNTAX — 'ruby -c' on every block. Every documented ruby example must
#      parse.
#   2. RUN — every RUNNABLE block (one that constructs the SDK, drives client.,
#      or performs an entity op load/list/create/update/patch/remove) is EXECUTED
#      offline in seeded test mode (CrackedApiReferenceSDK.test) against the real
#      SDK. The captured output is scanned for a real Ruby-level error (undefined
#      method, wrong number of arguments, NameError, ...) REGARDLESS of exit
#      code, so a bug a documented begin/rescue swallows and prints cannot slip
#      through. Expected not-found domain errors are tolerated.
#   3. COMPLETENESS — every block is partitioned into exactly one of
#      {executed, syntaxchecked-nonrunnable, illustration}; the counts must sum
#      to the total. A runnable-looking block that was not executed belongs to
#      no bucket and FAILS the gate.
#
# Ruby is dynamically typed, so syntax + actually running every example is the
# strongest check available without a live server.

require "minitest/autorun"
require "tempfile"
require "open3"
require "tmpdir"

class ReadmeExamplesTest < Minitest::Test
  # The three documentation sources this gate covers.
  DOCS = {
    "root README" => File.join(__dir__, "..", "..", "README.md"),
    "rb README" => File.join(__dir__, "..", "README.md"),
    "rb REFERENCE" => File.join(__dir__, "..", "REFERENCE.md"),
  }
  SDK = File.join(__dir__, "..", "CrackedApiReference_sdk.rb")
  SDK_CLASS = "CrackedApiReferenceSDK"

  # SDK file basename (no extension) — used to strip the doc's own require of the
  # SDK file from a runnable block (we require it by absolute path).
  SDK_BASE = "CrackedApiReference_sdk"

  # Entity accessor (client.<Name>) => fixture storage key (lowercase name).
  ENTITIES = {
    "Activate" => "activate",
    "ActivateUser" => "activate_user",
    "ActiveOnboarding" => "active_onboarding",
    "Admin" => "admin",
    "AdminAccountReset" => "admin_account_reset",
    "AdminCarousel" => "admin_carousel",
    "AdminCarouselDemoReview" => "admin_carousel_demo_review",
    "AdminCustomer" => "admin_customer",
    "AdminCustomerSuccess" => "admin_customer_success",
    "AdminGeneratedVideo" => "admin_generated_video",
    "AdminHealthrx" => "admin_healthrx",
    "AdminInsight" => "admin_insight",
    "AdminLandingTask" => "admin_landing_task",
    "AdminMetricsSummary" => "admin_metrics_summary",
    "AdminPost" => "admin_post",
    "AdminRecentSignup" => "admin_recent_signup",
    "AdminSlideshowDiag" => "admin_slideshow_diag",
    "AdminSlideshowImport" => "admin_slideshow_import",
    "AdminUserView" => "admin_user_view",
    "AdminUsersTableItem" => "admin_users_table_item",
    "AdminVideoRemixer" => "admin_video_remixer",
    "AdvanceStep" => "advance_step",
    "Agent" => "agent",
    "AgentAccessCustomersHealth" => "agent_access_customers_health",
    "AgentAccessOverview" => "agent_access_overview",
    "AgentAccessPhilHourlyNotification" => "agent_access_phil_hourly_notification",
    "AgentAccessPhilStatsRefresh" => "agent_access_phil_stats_refresh",
    "AgentAccessPhilVideo" => "agent_access_phil_video",
    "AgentAccessUserAgent" => "agent_access_user_agent",
    "AgentAccessUserPhoneFarm" => "agent_access_user_phone_farm",
    "AgentAccessUserPost" => "agent_access_user_post",
    "AgentAccessUserSummary" => "agent_access_user_summary",
    "AgentAccessUserVideo" => "agent_access_user_video",
    "AgentAccessUserWinningAd" => "agent_access_user_winning_ad",
    "AgentAccessWinningAdsSummary" => "agent_access_winning_ads_summary",
    "AgentDetail" => "agent_detail",
    "AgentHealth" => "agent_health",
    "AgentHealthCustomerOption" => "agent_health_customer_option",
    "AgentHealthDetail" => "agent_health_detail",
    "AgentPost" => "agent_post",
    "AgentStat" => "agent_stat",
    "AgentSummary" => "agent_summary",
    "AgentsSummary" => "agents_summary",
    "AnalysisStatus" => "analysis_status",
    "AnalyticsPost" => "analytics_post",
    "AnalyzeProduct" => "analyze_product",
    "AssignAgent" => "assign_agent",
    "Auth" => "auth",
    "AutoScheduleSetting" => "auto_schedule_setting",
    "BulkTikTokStatsUpdate" => "bulk_tik_tok_stats_update",
    "Carousel" => "carousel",
    "CarouselAgentDetail" => "carousel_agent_detail",
    "CarouselStatus" => "carousel_status",
    "Chat" => "chat",
    "ChatHistory" => "chat_history",
    "ChatSession" => "chat_session",
    "Comment" => "comment",
    "CommentCampaign" => "comment_campaign",
    "CompleteChatCheckout" => "complete_chat_checkout",
    "CreateBlackoutSora2Video" => "create_blackout_sora2_video",
    "CreateCarousel" => "create_carousel",
    "CreateProduct" => "create_product",
    "CreateResetProductV6" => "create_reset_product_v6",
    "CreateSora2Video" => "create_sora2_video",
    "CreateVariation" => "create_variation",
    "Customer" => "customer",
    "CustomerHealth" => "customer_health",
    "CustomerHealthAllCustomersItem" => "customer_health_all_customers_item",
    "CustomerHealthViewsSummary" => "customer_health_views_summary",
    "Daily" => "daily",
    "DailyStatus" => "daily_status",
    "DedicatedAgentsDashboard" => "dedicated_agents_dashboard",
    "EnterpriseAgent" => "enterprise_agent",
    "EnterpriseProduct" => "enterprise_product",
    "ExactAvailability" => "exact_availability",
    "ExactFormula" => "exact_formula",
    "ExtractV2" => "extract_v2",
    "FailedPost" => "failed_post",
    "File" => "file",
    "GenerateBlackoutSora2Prompt" => "generate_blackout_sora2_prompt",
    "GeneratePomelliDemo" => "generate_pomelli_demo",
    "GeneratePrompt" => "generate_prompt",
    "GenerateSora2Prompt" => "generate_sora2_prompt",
    "Healthrx" => "healthrx",
    "InitResetProductV6" => "init_reset_product_v6",
    "Iri" => "iri",
    "IrisCapability" => "iris_capability",
    "IrisChat" => "iris_chat",
    "IrisConnector" => "iris_connector",
    "IrisStatus" => "iris_status",
    "IrisTask" => "iris_task",
    "IrisUsage" => "iris_usage",
    "Landing" => "landing",
    "LandingStat" => "landing_stat",
    "LandingStatus" => "landing_status",
    "LinkInBio" => "link_in_bio",
    "LinkInDm" => "link_in_dm",
    "LinkInPost" => "link_in_post",
    "LinkUser" => "link_user",
    "MediaAsset" => "media_asset",
    "Men" => "men",
    "Microdrama" => "microdrama",
    "MicrohubPublic" => "microhub_public",
    "OnboardingStatus" => "onboarding_status",
    "OnboardingV6" => "onboarding_v6",
    "PaidUser" => "paid_user",
    "Pexel" => "pexel",
    "PhoneAdminAvailableAgentSource" => "phone_admin_available_agent_source",
    "Product" => "product",
    "ProductDashboard" => "product_dashboard",
    "ProductDashboardView" => "product_dashboard_view",
    "ProductDemo" => "product_demo",
    "ProductLanding" => "product_landing",
    "PublicResumeStatus" => "public_resume_status",
    "ReRollVideo" => "re_roll_video",
    "ReadRootGet" => "read_root_get",
    "RecordDemoBooked" => "record_demo_booked",
    "RefreshStat" => "refresh_stat",
    "RemixerClipper" => "remixer_clipper",
    "ResetProduct" => "reset_product",
    "RetryWebsiteScrape" => "retry_website_scrape",
    "SaveSurvey" => "save_survey",
    "ScanSocial" => "scan_social",
    "ScanSocialsPublic" => "scan_socials_public",
    "ScanSocialsStatus" => "scan_socials_status",
    "ScheduleV2" => "schedule_v2",
    "Scrape" => "scrape",
    "ScrapeWebsitePublic" => "scrape_website_public",
    "ScrapedData" => "scraped_data",
    "ScrapingStatus" => "scraping_status",
    "SelfServeActivate" => "self_serve_activate",
    "Seo" => "seo",
    "SeoAiMention" => "seo_ai_mention",
    "SeoBacklink" => "seo_backlink",
    "SeoKeyword" => "seo_keyword",
    "SeoOverview" => "seo_overview",
    "SeoTraffic" => "seo_traffic",
    "ShareAccessLink" => "share_access_link",
    "Site" => "site",
    "Slide" => "slide",
    "SlugValidation" => "slug_validation",
    "Social" => "social",
    "SocialScanPreview" => "social_scan_preview",
    "SocialScanProcess" => "social_scan_process",
    "SocialScanSave" => "social_scan_save",
    "Sora2Avatar" => "sora2_avatar",
    "Sora2AvatarAssetUpload" => "sora2_avatar_asset_upload",
    "Sora2AvatarStat" => "sora2_avatar_stat",
    "Stat" => "stat",
    "StatsRefreshBackfill" => "stats_refresh_backfill",
    "StatsRefreshIssue" => "stats_refresh_issue",
    "StatsRefreshOverview" => "stats_refresh_overview",
    "StatsRefreshRunSummary" => "stats_refresh_run_summary",
    "StatsRefreshTaskTrigger" => "stats_refresh_task_trigger",
    "Stripe" => "stripe",
    "Style" => "style",
    "Template" => "template",
    "TikTokCreatorInfo" => "tik_tok_creator_info",
    "TopPost" => "top_post",
    "UploadPostAgent" => "upload_post_agent",
    "User" => "user",
    "UserAgent" => "user_agent",
    "UserHealthDetail" => "user_health_detail",
    "UserWithAvatarSubmission" => "user_with_avatar_submission",
    "UsersHealth" => "users_health",
    "Video" => "video",
    "VideoRemixerWorker" => "video_remixer_worker",
    "WatchdogRecovery" => "watchdog_recovery",
    "WinningAd" => "winning_ad",
    "XAdaptation" => "x_adaptation",
    "ZerohumanAdminAccount" => "zerohuman_admin_account",
  }

  # Documented SDK method names — used only to recognise the NARROW
  # signature/method-table "illustration" class.
  METHODS = %w[options_map get_utility prepare direct data_get data_set match_get match_set make get_name]

  # The client VARIABLE, not the word: a gem or package name carries the word
  # between hyphens (voxgig-sdk-multifon-client-sdk).
  CLIENT = /(?<![\w\-.\/"'])client(?![\w\-\/"'])/

  # Ruby-level errors that indicate a real bug in a documented example (as
  # opposed to an expected not-found / domain error, which is tolerated), and
  # the ScriptError classes an SDK that does not load raises.
  FATAL = /NoMethodError|NameError|ArgumentError|SyntaxError|LoadError|NotImplementedError|undefined method|undefined local variable|uninitialized constant|wrong number of arguments/

  # Extract every fenced ruby block from all three docs, each tagged with its
  # source doc label and its index within that doc.
  def ruby_blocks
    fence = (96.chr) * 3
    blocks = []
    DOCS.each do |label, path|
      assert File.exist?(path), "missing documentation source: #{label}"
      # Explicit UTF-8: the docs contain non-ASCII punctuation, and under a
      # POSIX/US-ASCII locale a default-encoded read makes scan raise
      # ArgumentError (invalid byte sequence).
      File.read(path, encoding: "UTF-8").scan(/#{fence}ruby\r?\n(.*?)#{fence}/m).each_with_index do |a, i|
        blocks << { doc: label, n: i, code: a[0] }
      end
    end
    blocks
  end

  # --- classification -------------------------------------------------------

  # A block is RUNNABLE when it constructs the SDK, drives client., or performs
  # an entity operation. Every runnable block MUST be executed.
  def runnable?(b)
    b =~ /#{Regexp.escape(SDK_CLASS)}\.(?:new|test)\b/ ||
      b =~ /#{CLIENT}\./ ||
      b =~ /\.(?:load|list|create|update|patch|remove)\b/ ? true : false
  end

  # A block "mentions the SDK" when it references the client variable, the SDK
  # class, an entity accessor, or an entity operation. A non-runnable block that
  # mentions the SDK but is not a signature illustration is an uncovered
  # runnable-looking block and must fail the completeness gate.
  def looks_sdk?(b)
    return true if b =~ CLIENT
    return true if b =~ /\b#{Regexp.escape(SDK_CLASS)}\b/
    return true if b =~ /\.(?:load|list|create|update|patch|remove)\b/
    ENTITIES.each_key { |name| return true if b =~ /\.#{Regexp.escape(name)}\b/ }
    false
  end

  # NARROW illustration class: a non-runnable block that references the SDK class
  # or a documented method NAME as a signature / method-table, and never uses a
  # live client variable. This is an explicit, restricted class — not a
  # catch-all — so an unexecuted block that uses a client variable cannot hide here.
  def illustration?(b)
    return false if runnable?(b)
    return false if b =~ CLIENT
    return true if b =~ /\b#{Regexp.escape(SDK_CLASS)}\b/
    METHODS.each { |m| return true if b =~ /\b#{Regexp.escape(m)}\s*\(/ }
    false
  end

  # Partition label for a block: exactly one of the four.
  def classify(b)
    return "executed" if runnable?(b)
    return "illustration" if illustration?(b)
    return "syntaxchecked_nonrunnable" unless looks_sdk?(b)
    "unclassified"
  end

  # --- tests ----------------------------------------------------------------

  def test_docs_have_ruby_examples
    refute_empty ruby_blocks, "docs should contain ruby examples"
  end

  # Every ruby block across all three docs must parse (ruby -c).
  def test_ruby_snippets_have_valid_syntax
    failures = []
    ruby_blocks.each do |blk|
      Tempfile.create(["readme_rb_", ".rb"]) do |f|
        f.write(blk[:code])
        f.flush
        out, status = Open3.capture2e("ruby", "-c", f.path)
        out.force_encoding(Encoding::UTF_8)
        failures << "#{blk[:doc]} ##{blk[:n]}:\n#{out}\n#{blk[:code]}" unless status.success?
      end
    end
    assert_equal [], failures, "docs ruby blocks with syntax errors:\n#{failures.join("\n\n")}"
  end

  # Build the SDK 'entity' fixture option (as Ruby source) for the entities a
  # block references, falling back to seeding all entities when none are named.
  def fixtures_literal(block)
    refs = ENTITIES.select { |name, _| block =~ /#{CLIENT}\.#{Regexp.escape(name)}\b/ }
    refs = ENTITIES if refs.empty?
    entity = {}
    refs.each_value { |storage| entity[storage] = { "test01" => { "id" => "test01" } } }
    { "entity" => entity }.inspect
  end

  # Rewrite a runnable block into an executable offline test-mode program: the
  # doc's own require of the SDK file is stripped (we require it by absolute
  # path); any real client constructor (.new/.test) becomes <Sdk>SDK.test(<fixtures>);
  # a block that only uses a client variable gets such a constructor prepended. (The
  # constructor arg-list match is deliberately shallow — it does not span nested
  # parens — because runnable op blocks never build a client inline with a
  # lambda/closure argument.)
  def to_runner(block)
    fixtures = fixtures_literal(block)
    # Drop the doc's own require of the SDK file; we require it by absolute path.
    block = block.gsub(/^[ \t]*require(?:_relative|_once)?[^\n]*#{Regexp.escape(SDK_BASE)}[^\n]*\r?\n?/i, "")
    ctor_re = /#{Regexp.escape(SDK_CLASS)}\.(?:new|test)(?:\([^()]*\))?/
    body =
      if block =~ /#{Regexp.escape(SDK_CLASS)}\.(?:new|test)\b/
        block.gsub(ctor_re) { "#{SDK_CLASS}.test(#{fixtures})" }
      else
        "client = #{SDK_CLASS}.test(#{fixtures})\n" + block
      end
    "require_relative #{SDK.inspect}\n" + body
  end

  # Every RUNNABLE block is executed offline in test mode and must not raise a
  # real Ruby-level error — even one an error-handling example swallows in a
  # rescue and prints: the captured output is scanned for FATAL either way, so a
  # programming error in a documented begin/rescue cannot slip through. Expected
  # domain errors (e.g. "404: Not found") never match FATAL, so caught not-found
  # cases stay tolerated.
  def test_ruby_examples_run_offline
    failures = []
    runnable = ruby_blocks.select { |blk| runnable?(blk[:code]) }
    ran = runnable.length

    # BATCHED. One ruby process for every runnable block, not one each. A
    # spawn per snippet dominated this suite on the large SDKs.
    #
    # Each snippet is loaded inside its own anonymous Module, so constants and
    # methods do not collide, and is bracketed by markers so output is
    # attributed back. The interpreter is SHARED, which is the cost of
    # batching: a snippet that mutates global state or calls exit! affects
    # what follows it.
    #
    # So the batch is not trusted blindly. Any snippet whose END marker never
    # arrives is re-run on its own, in a fresh process, and that isolated
    # result is the one that counts.
    if ran > 0
      Dir.mktmpdir("readme_batch_") do |dir|
        paths = {}
        runnable.each_with_index do |blk, i|
          path = File.join(dir, "snip_#{i}.rb")
          File.write(path, to_runner(blk[:code]))
          paths[i] = path
        end

        driver = File.join(dir, "_driver.rb")
        File.write(driver, batch_driver(paths))
        out, status = Open3.capture2e("ruby", driver)
        # A pipe is tagged with the locale's encoding; the snippets wrote UTF-8.
        out.force_encoding(Encoding::UTF_8)

        runnable.each_with_index do |blk, i|
          seg = batch_segment(out, i)
          code = status.exitstatus
          if seg.nil?
            solo, sstatus = Open3.capture2e("ruby", paths[i])
            solo.force_encoding(Encoding::UTF_8)
            seg = solo
            code = sstatus.exitstatus
          end
          if seg =~ FATAL
            failures << "#{blk[:doc]} ##{blk[:n]} (exit #{code}):\n#{seg}\n#{blk[:code]}"
          end
        end
      end
    end
    assert_operator ran, :>, 0, "expected at least one runnable example to execute"
    assert_equal [], failures, "docs ruby examples raised a real error when run offline:\n#{failures.join("\n\n")}"
  end

  # The batch driver: load each snippet into its own anonymous Module so its
  # constants and methods cannot collide with another's. The at_exit hook is
  # what makes a hard death recoverable — it emits the END marker for whichever
  # snippet was in flight, so the harness can tell "this one died" from "the
  # batch never reached it", and re-run only what it must.
  def batch_driver(paths)
    list = paths.keys.sort.map { |i| [i, paths[i]] }
    <<~DRIVER
      files = #{list.inspect}
      current = nil
      at_exit do
        if current
          puts
          puts "@@VOXEND \#{current}"
        end
      end
      files.each do |(i, path)|
        current = i
        puts
        puts "@@VOXBEGIN \#{i}"
        begin
          Module.new.module_eval(File.read(path, encoding: "UTF-8"), path)
        rescue Exception => e
          puts "FATAL: \#{e.class}: \#{e.message}"
        end
        puts
        puts "@@VOXEND \#{i}"
        current = nil
      end
    DRIVER
  end

  # Output between this snippet's markers, or nil when the END marker is
  # absent — the batch never got past it, so only an isolated re-run can say.
  def batch_segment(text, i)
    b = text.index("@@VOXBEGIN #{i}")
    return nil if b.nil?
    b += "@@VOXBEGIN #{i}".length
    e = text.index("@@VOXEND #{i}", b)
    return nil if e.nil?
    text[b...e].strip
  end

  # COMPLETENESS GATE: every fenced ruby block is partitioned into exactly one of
  # {executed, syntaxchecked-nonrunnable, illustration}. The three counts must
  # sum to the total. A block that references the SDK but is neither runnable (so
  # not executed) nor a narrow signature illustration is "unclassified" — a
  # runnable-looking example that would be silently skipped — and fails the gate.
  def test_ruby_examples_are_completely_classified
    blocks = ruby_blocks
    buckets = { "executed" => [], "syntaxchecked_nonrunnable" => [], "illustration" => [], "unclassified" => [] }
    per_doc = {}
    blocks.each do |blk|
      cls = classify(blk[:code])
      buckets[cls] << blk
      d = (per_doc[blk[:doc]] ||= { "total" => 0, "executed" => 0, "syntaxchecked_nonrunnable" => 0, "illustration" => 0, "unclassified" => 0 })
      d["total"] += 1
      d[cls] += 1
    end

    summary = "ReadmeExamplesTest — ruby example coverage:\n"
    per_doc.each do |doc, c|
      extra = c["unclassified"] > 0 ? " UNCLASSIFIED=#{c["unclassified"]}" : ""
      summary += format("  %-14s total=%d executed=%d syntaxchecked=%d illustration=%d%s\n",
                        doc, c["total"], c["executed"], c["syntaxchecked_nonrunnable"], c["illustration"], extra)
    end
    warn "\n" + summary

    unclassified = buckets["unclassified"].map { |b| "#{b[:doc]} ##{b[:n]}:\n#{b[:code]}" }
    assert_equal [], unclassified,
                 "runnable-looking ruby blocks that were neither executed nor a signature illustration:\n#{unclassified.join("\n\n")}"

    total = blocks.length
    sum = buckets["executed"].length + buckets["syntaxchecked_nonrunnable"].length + buckets["illustration"].length
    assert_equal total, sum,
                 "every ruby block must be executed, syntaxchecked-nonrunnable, or illustration.\n#{summary}"

    assert_operator buckets["executed"].length, :>, 0, "expected at least one executed ruby example"
  end
end
