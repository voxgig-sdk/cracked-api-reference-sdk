-- CrackedApiReference SDK

local json = require("dkjson")
local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")
local unreadable_body = require("utility.unreadable_body")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("cracked-api-reference_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local CrackedApiReferenceSDK = {}

-- The options and the root context both hold the credential. They live in
-- a side table rather than in the client, so a dump or an encoder walking
-- the client's fields never reaches them; `sdk.options` still reads and
-- writes through the metamethods, and options_map() is the documented way
-- to read the credential back.
local HIDDEN = { options = true, _rootctx = true }
local SLOTS = setmetatable({}, { __mode = "k" })

CrackedApiReferenceSDK.__index = function(self, key)
  local member = rawget(CrackedApiReferenceSDK, key)
  if member ~= nil then
    return member
  end
  if HIDDEN[key] then
    local slots = SLOTS[self]
    return slots ~= nil and slots[key] or nil
  end
  return nil
end

CrackedApiReferenceSDK.__newindex = function(self, key, val)
  if HIDDEN[key] then
    local slots = SLOTS[self]
    if slots == nil then
      slots = {}
      SLOTS[self] = slots
    end
    slots[key] = val
  else
    rawset(self, key, val)
  end
end

-- The client's own record: what a serialiser or clean's snapshot sees in
-- place of the client, so neither reaches the options through it.
function CrackedApiReferenceSDK:to_record()
  return { sdk = "CrackedApiReference", mode = self.mode }
end

CrackedApiReferenceSDK.__tostring = function(self)
  return "CrackedApiReferenceSDK mode=" .. tostring(self.mode)
end

CrackedApiReferenceSDK.__tojson = function(self)
  return json.encode(self:to_record())
end


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

CrackedApiReferenceSDK._make_feature = _make_feature


function CrackedApiReferenceSDK.new(options)
  local self = setmetatable({}, CrackedApiReferenceSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: ratelimit
  -- feature: retry
  -- feature: test
  -- feature: timeout


  return self
end


function CrackedApiReferenceSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function CrackedApiReferenceSDK:get_utility()
  return Utility.copy(self._utility)
end


function CrackedApiReferenceSDK:get_root_ctx()
  return self._rootctx
end


function CrackedApiReferenceSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" or method == "" then method = "GET" end
  method = string.upper(method)

  local allow_method = vs.getpath(options, "allow.method")
  if not helpers.allowed(allow_method, method) then
    return nil, ctx:make_error("spec_method_allow",
      'Method "' .. method ..
      '" not allowed by SDK option allow.method value: "' .. tostring(allow_method or "") .. '"')
  end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function CrackedApiReferenceSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function CrackedApiReferenceSDK:_op_allowed(op)
  return helpers.allowed(vs.getpath(self.options, "allow.op"), op)
end


function CrackedApiReferenceSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "CrackedApiReferenceSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function CrackedApiReferenceSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = utility.clean(ctx, fetch_err) }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    local body_err = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
      if vs.getprop(fetched, "unreadable") == true then
        local failed = nil
        if status < 200 or status >= 300 then
          failed = ctx:make_error("request_status",
            "request: " .. tostring(status) .. ": " .. tostring(vs.getprop(fetched, "statusText")))
        end
        body_err = unreadable_body(ctx, status, headers, vs.getprop(fetched, "body"),
          fetchdef["headers"], failed)
      end
    end

    local out = {
      ok = body_err == nil and status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }
    if body_err ~= nil then
      out.err = utility.clean(ctx, body_err)
    end
    return out, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function CrackedApiReferenceSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "CrackedApiReferenceSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:Activate():list() / client:Activate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:Activate(data)
  local EntityMod = require("entity.activate_entity")
  if data == nil then
    if self._activate == nil then
      self._activate = EntityMod.new(self, nil)
    end
    return self._activate
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ActivateUser():list() / client:ActivateUser():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:ActivateUser(data)
  local EntityMod = require("entity.activate_user_entity")
  if data == nil then
    if self._activate_user == nil then
      self._activate_user = EntityMod.new(self, nil)
    end
    return self._activate_user
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ActiveOnboarding():list() / client:ActiveOnboarding():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:ActiveOnboarding(data)
  local EntityMod = require("entity.active_onboarding_entity")
  if data == nil then
    if self._active_onboarding == nil then
      self._active_onboarding = EntityMod.new(self, nil)
    end
    return self._active_onboarding
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Admin():list() / client:Admin():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:Admin(data)
  local EntityMod = require("entity.admin_entity")
  if data == nil then
    if self._admin == nil then
      self._admin = EntityMod.new(self, nil)
    end
    return self._admin
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AdminAccountReset():list() / client:AdminAccountReset():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AdminAccountReset(data)
  local EntityMod = require("entity.admin_account_reset_entity")
  if data == nil then
    if self._admin_account_reset == nil then
      self._admin_account_reset = EntityMod.new(self, nil)
    end
    return self._admin_account_reset
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AdminCarousel():list() / client:AdminCarousel():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AdminCarousel(data)
  local EntityMod = require("entity.admin_carousel_entity")
  if data == nil then
    if self._admin_carousel == nil then
      self._admin_carousel = EntityMod.new(self, nil)
    end
    return self._admin_carousel
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AdminCarouselDemoReview():list() / client:AdminCarouselDemoReview():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AdminCarouselDemoReview(data)
  local EntityMod = require("entity.admin_carousel_demo_review_entity")
  if data == nil then
    if self._admin_carousel_demo_review == nil then
      self._admin_carousel_demo_review = EntityMod.new(self, nil)
    end
    return self._admin_carousel_demo_review
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AdminCustomer():list() / client:AdminCustomer():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AdminCustomer(data)
  local EntityMod = require("entity.admin_customer_entity")
  if data == nil then
    if self._admin_customer == nil then
      self._admin_customer = EntityMod.new(self, nil)
    end
    return self._admin_customer
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AdminCustomerSuccess():list() / client:AdminCustomerSuccess():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AdminCustomerSuccess(data)
  local EntityMod = require("entity.admin_customer_success_entity")
  if data == nil then
    if self._admin_customer_success == nil then
      self._admin_customer_success = EntityMod.new(self, nil)
    end
    return self._admin_customer_success
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AdminGeneratedVideo():list() / client:AdminGeneratedVideo():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AdminGeneratedVideo(data)
  local EntityMod = require("entity.admin_generated_video_entity")
  if data == nil then
    if self._admin_generated_video == nil then
      self._admin_generated_video = EntityMod.new(self, nil)
    end
    return self._admin_generated_video
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AdminHealthrx():list() / client:AdminHealthrx():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AdminHealthrx(data)
  local EntityMod = require("entity.admin_healthrx_entity")
  if data == nil then
    if self._admin_healthrx == nil then
      self._admin_healthrx = EntityMod.new(self, nil)
    end
    return self._admin_healthrx
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AdminInsight():list() / client:AdminInsight():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AdminInsight(data)
  local EntityMod = require("entity.admin_insight_entity")
  if data == nil then
    if self._admin_insight == nil then
      self._admin_insight = EntityMod.new(self, nil)
    end
    return self._admin_insight
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AdminLandingTask():list() / client:AdminLandingTask():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AdminLandingTask(data)
  local EntityMod = require("entity.admin_landing_task_entity")
  if data == nil then
    if self._admin_landing_task == nil then
      self._admin_landing_task = EntityMod.new(self, nil)
    end
    return self._admin_landing_task
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AdminMetricsSummary():list() / client:AdminMetricsSummary():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AdminMetricsSummary(data)
  local EntityMod = require("entity.admin_metrics_summary_entity")
  if data == nil then
    if self._admin_metrics_summary == nil then
      self._admin_metrics_summary = EntityMod.new(self, nil)
    end
    return self._admin_metrics_summary
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AdminPost():list() / client:AdminPost():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AdminPost(data)
  local EntityMod = require("entity.admin_post_entity")
  if data == nil then
    if self._admin_post == nil then
      self._admin_post = EntityMod.new(self, nil)
    end
    return self._admin_post
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AdminRecentSignup():list() / client:AdminRecentSignup():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AdminRecentSignup(data)
  local EntityMod = require("entity.admin_recent_signup_entity")
  if data == nil then
    if self._admin_recent_signup == nil then
      self._admin_recent_signup = EntityMod.new(self, nil)
    end
    return self._admin_recent_signup
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AdminSlideshowDiag():list() / client:AdminSlideshowDiag():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AdminSlideshowDiag(data)
  local EntityMod = require("entity.admin_slideshow_diag_entity")
  if data == nil then
    if self._admin_slideshow_diag == nil then
      self._admin_slideshow_diag = EntityMod.new(self, nil)
    end
    return self._admin_slideshow_diag
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AdminSlideshowImport():list() / client:AdminSlideshowImport():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AdminSlideshowImport(data)
  local EntityMod = require("entity.admin_slideshow_import_entity")
  if data == nil then
    if self._admin_slideshow_import == nil then
      self._admin_slideshow_import = EntityMod.new(self, nil)
    end
    return self._admin_slideshow_import
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AdminUserView():list() / client:AdminUserView():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AdminUserView(data)
  local EntityMod = require("entity.admin_user_view_entity")
  if data == nil then
    if self._admin_user_view == nil then
      self._admin_user_view = EntityMod.new(self, nil)
    end
    return self._admin_user_view
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AdminUsersTableItem():list() / client:AdminUsersTableItem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AdminUsersTableItem(data)
  local EntityMod = require("entity.admin_users_table_item_entity")
  if data == nil then
    if self._admin_users_table_item == nil then
      self._admin_users_table_item = EntityMod.new(self, nil)
    end
    return self._admin_users_table_item
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AdminVideoRemixer():list() / client:AdminVideoRemixer():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AdminVideoRemixer(data)
  local EntityMod = require("entity.admin_video_remixer_entity")
  if data == nil then
    if self._admin_video_remixer == nil then
      self._admin_video_remixer = EntityMod.new(self, nil)
    end
    return self._admin_video_remixer
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AdvanceStep():list() / client:AdvanceStep():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AdvanceStep(data)
  local EntityMod = require("entity.advance_step_entity")
  if data == nil then
    if self._advance_step == nil then
      self._advance_step = EntityMod.new(self, nil)
    end
    return self._advance_step
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Agent():list() / client:Agent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:Agent(data)
  local EntityMod = require("entity.agent_entity")
  if data == nil then
    if self._agent == nil then
      self._agent = EntityMod.new(self, nil)
    end
    return self._agent
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentAccessCustomersHealth():list() / client:AgentAccessCustomersHealth():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AgentAccessCustomersHealth(data)
  local EntityMod = require("entity.agent_access_customers_health_entity")
  if data == nil then
    if self._agent_access_customers_health == nil then
      self._agent_access_customers_health = EntityMod.new(self, nil)
    end
    return self._agent_access_customers_health
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentAccessOverview():list() / client:AgentAccessOverview():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AgentAccessOverview(data)
  local EntityMod = require("entity.agent_access_overview_entity")
  if data == nil then
    if self._agent_access_overview == nil then
      self._agent_access_overview = EntityMod.new(self, nil)
    end
    return self._agent_access_overview
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentAccessPhilHourlyNotification():list() / client:AgentAccessPhilHourlyNotification():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AgentAccessPhilHourlyNotification(data)
  local EntityMod = require("entity.agent_access_phil_hourly_notification_entity")
  if data == nil then
    if self._agent_access_phil_hourly_notification == nil then
      self._agent_access_phil_hourly_notification = EntityMod.new(self, nil)
    end
    return self._agent_access_phil_hourly_notification
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentAccessPhilStatsRefresh():list() / client:AgentAccessPhilStatsRefresh():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AgentAccessPhilStatsRefresh(data)
  local EntityMod = require("entity.agent_access_phil_stats_refresh_entity")
  if data == nil then
    if self._agent_access_phil_stats_refresh == nil then
      self._agent_access_phil_stats_refresh = EntityMod.new(self, nil)
    end
    return self._agent_access_phil_stats_refresh
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentAccessPhilVideo():list() / client:AgentAccessPhilVideo():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AgentAccessPhilVideo(data)
  local EntityMod = require("entity.agent_access_phil_video_entity")
  if data == nil then
    if self._agent_access_phil_video == nil then
      self._agent_access_phil_video = EntityMod.new(self, nil)
    end
    return self._agent_access_phil_video
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentAccessUserAgent():list() / client:AgentAccessUserAgent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AgentAccessUserAgent(data)
  local EntityMod = require("entity.agent_access_user_agent_entity")
  if data == nil then
    if self._agent_access_user_agent == nil then
      self._agent_access_user_agent = EntityMod.new(self, nil)
    end
    return self._agent_access_user_agent
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentAccessUserPhoneFarm():list() / client:AgentAccessUserPhoneFarm():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AgentAccessUserPhoneFarm(data)
  local EntityMod = require("entity.agent_access_user_phone_farm_entity")
  if data == nil then
    if self._agent_access_user_phone_farm == nil then
      self._agent_access_user_phone_farm = EntityMod.new(self, nil)
    end
    return self._agent_access_user_phone_farm
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentAccessUserPost():list() / client:AgentAccessUserPost():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AgentAccessUserPost(data)
  local EntityMod = require("entity.agent_access_user_post_entity")
  if data == nil then
    if self._agent_access_user_post == nil then
      self._agent_access_user_post = EntityMod.new(self, nil)
    end
    return self._agent_access_user_post
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentAccessUserSummary():list() / client:AgentAccessUserSummary():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AgentAccessUserSummary(data)
  local EntityMod = require("entity.agent_access_user_summary_entity")
  if data == nil then
    if self._agent_access_user_summary == nil then
      self._agent_access_user_summary = EntityMod.new(self, nil)
    end
    return self._agent_access_user_summary
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentAccessUserVideo():list() / client:AgentAccessUserVideo():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AgentAccessUserVideo(data)
  local EntityMod = require("entity.agent_access_user_video_entity")
  if data == nil then
    if self._agent_access_user_video == nil then
      self._agent_access_user_video = EntityMod.new(self, nil)
    end
    return self._agent_access_user_video
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentAccessUserWinningAd():list() / client:AgentAccessUserWinningAd():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AgentAccessUserWinningAd(data)
  local EntityMod = require("entity.agent_access_user_winning_ad_entity")
  if data == nil then
    if self._agent_access_user_winning_ad == nil then
      self._agent_access_user_winning_ad = EntityMod.new(self, nil)
    end
    return self._agent_access_user_winning_ad
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentAccessWinningAdsSummary():list() / client:AgentAccessWinningAdsSummary():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AgentAccessWinningAdsSummary(data)
  local EntityMod = require("entity.agent_access_winning_ads_summary_entity")
  if data == nil then
    if self._agent_access_winning_ads_summary == nil then
      self._agent_access_winning_ads_summary = EntityMod.new(self, nil)
    end
    return self._agent_access_winning_ads_summary
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentDetail():list() / client:AgentDetail():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AgentDetail(data)
  local EntityMod = require("entity.agent_detail_entity")
  if data == nil then
    if self._agent_detail == nil then
      self._agent_detail = EntityMod.new(self, nil)
    end
    return self._agent_detail
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentHealth():list() / client:AgentHealth():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AgentHealth(data)
  local EntityMod = require("entity.agent_health_entity")
  if data == nil then
    if self._agent_health == nil then
      self._agent_health = EntityMod.new(self, nil)
    end
    return self._agent_health
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentHealthCustomerOption():list() / client:AgentHealthCustomerOption():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AgentHealthCustomerOption(data)
  local EntityMod = require("entity.agent_health_customer_option_entity")
  if data == nil then
    if self._agent_health_customer_option == nil then
      self._agent_health_customer_option = EntityMod.new(self, nil)
    end
    return self._agent_health_customer_option
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentHealthDetail():list() / client:AgentHealthDetail():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AgentHealthDetail(data)
  local EntityMod = require("entity.agent_health_detail_entity")
  if data == nil then
    if self._agent_health_detail == nil then
      self._agent_health_detail = EntityMod.new(self, nil)
    end
    return self._agent_health_detail
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentPost():list() / client:AgentPost():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AgentPost(data)
  local EntityMod = require("entity.agent_post_entity")
  if data == nil then
    if self._agent_post == nil then
      self._agent_post = EntityMod.new(self, nil)
    end
    return self._agent_post
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentStat():list() / client:AgentStat():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AgentStat(data)
  local EntityMod = require("entity.agent_stat_entity")
  if data == nil then
    if self._agent_stat == nil then
      self._agent_stat = EntityMod.new(self, nil)
    end
    return self._agent_stat
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentSummary():list() / client:AgentSummary():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AgentSummary(data)
  local EntityMod = require("entity.agent_summary_entity")
  if data == nil then
    if self._agent_summary == nil then
      self._agent_summary = EntityMod.new(self, nil)
    end
    return self._agent_summary
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentsSummary():list() / client:AgentsSummary():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AgentsSummary(data)
  local EntityMod = require("entity.agents_summary_entity")
  if data == nil then
    if self._agents_summary == nil then
      self._agents_summary = EntityMod.new(self, nil)
    end
    return self._agents_summary
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AnalysisStatus():list() / client:AnalysisStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AnalysisStatus(data)
  local EntityMod = require("entity.analysis_status_entity")
  if data == nil then
    if self._analysis_status == nil then
      self._analysis_status = EntityMod.new(self, nil)
    end
    return self._analysis_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AnalyticsPost():list() / client:AnalyticsPost():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AnalyticsPost(data)
  local EntityMod = require("entity.analytics_post_entity")
  if data == nil then
    if self._analytics_post == nil then
      self._analytics_post = EntityMod.new(self, nil)
    end
    return self._analytics_post
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AnalyzeProduct():list() / client:AnalyzeProduct():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AnalyzeProduct(data)
  local EntityMod = require("entity.analyze_product_entity")
  if data == nil then
    if self._analyze_product == nil then
      self._analyze_product = EntityMod.new(self, nil)
    end
    return self._analyze_product
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AssignAgent():list() / client:AssignAgent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AssignAgent(data)
  local EntityMod = require("entity.assign_agent_entity")
  if data == nil then
    if self._assign_agent == nil then
      self._assign_agent = EntityMod.new(self, nil)
    end
    return self._assign_agent
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Auth():list() / client:Auth():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:Auth(data)
  local EntityMod = require("entity.auth_entity")
  if data == nil then
    if self._auth == nil then
      self._auth = EntityMod.new(self, nil)
    end
    return self._auth
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AutoScheduleSetting():list() / client:AutoScheduleSetting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:AutoScheduleSetting(data)
  local EntityMod = require("entity.auto_schedule_setting_entity")
  if data == nil then
    if self._auto_schedule_setting == nil then
      self._auto_schedule_setting = EntityMod.new(self, nil)
    end
    return self._auto_schedule_setting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BulkTikTokStatsUpdate():list() / client:BulkTikTokStatsUpdate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:BulkTikTokStatsUpdate(data)
  local EntityMod = require("entity.bulk_tik_tok_stats_update_entity")
  if data == nil then
    if self._bulk_tik_tok_stats_update == nil then
      self._bulk_tik_tok_stats_update = EntityMod.new(self, nil)
    end
    return self._bulk_tik_tok_stats_update
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Carousel():list() / client:Carousel():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:Carousel(data)
  local EntityMod = require("entity.carousel_entity")
  if data == nil then
    if self._carousel == nil then
      self._carousel = EntityMod.new(self, nil)
    end
    return self._carousel
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CarouselAgentDetail():list() / client:CarouselAgentDetail():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:CarouselAgentDetail(data)
  local EntityMod = require("entity.carousel_agent_detail_entity")
  if data == nil then
    if self._carousel_agent_detail == nil then
      self._carousel_agent_detail = EntityMod.new(self, nil)
    end
    return self._carousel_agent_detail
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CarouselStatus():list() / client:CarouselStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:CarouselStatus(data)
  local EntityMod = require("entity.carousel_status_entity")
  if data == nil then
    if self._carousel_status == nil then
      self._carousel_status = EntityMod.new(self, nil)
    end
    return self._carousel_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Chat():list() / client:Chat():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:Chat(data)
  local EntityMod = require("entity.chat_entity")
  if data == nil then
    if self._chat == nil then
      self._chat = EntityMod.new(self, nil)
    end
    return self._chat
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ChatHistory():list() / client:ChatHistory():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:ChatHistory(data)
  local EntityMod = require("entity.chat_history_entity")
  if data == nil then
    if self._chat_history == nil then
      self._chat_history = EntityMod.new(self, nil)
    end
    return self._chat_history
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ChatSession():list() / client:ChatSession():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:ChatSession(data)
  local EntityMod = require("entity.chat_session_entity")
  if data == nil then
    if self._chat_session == nil then
      self._chat_session = EntityMod.new(self, nil)
    end
    return self._chat_session
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Comment():list() / client:Comment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:Comment(data)
  local EntityMod = require("entity.comment_entity")
  if data == nil then
    if self._comment == nil then
      self._comment = EntityMod.new(self, nil)
    end
    return self._comment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CommentCampaign():list() / client:CommentCampaign():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:CommentCampaign(data)
  local EntityMod = require("entity.comment_campaign_entity")
  if data == nil then
    if self._comment_campaign == nil then
      self._comment_campaign = EntityMod.new(self, nil)
    end
    return self._comment_campaign
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CompleteChatCheckout():list() / client:CompleteChatCheckout():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:CompleteChatCheckout(data)
  local EntityMod = require("entity.complete_chat_checkout_entity")
  if data == nil then
    if self._complete_chat_checkout == nil then
      self._complete_chat_checkout = EntityMod.new(self, nil)
    end
    return self._complete_chat_checkout
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CreateBlackoutSora2Video():list() / client:CreateBlackoutSora2Video():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:CreateBlackoutSora2Video(data)
  local EntityMod = require("entity.create_blackout_sora2_video_entity")
  if data == nil then
    if self._create_blackout_sora2_video == nil then
      self._create_blackout_sora2_video = EntityMod.new(self, nil)
    end
    return self._create_blackout_sora2_video
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CreateCarousel():list() / client:CreateCarousel():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:CreateCarousel(data)
  local EntityMod = require("entity.create_carousel_entity")
  if data == nil then
    if self._create_carousel == nil then
      self._create_carousel = EntityMod.new(self, nil)
    end
    return self._create_carousel
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CreateProduct():list() / client:CreateProduct():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:CreateProduct(data)
  local EntityMod = require("entity.create_product_entity")
  if data == nil then
    if self._create_product == nil then
      self._create_product = EntityMod.new(self, nil)
    end
    return self._create_product
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CreateResetProductV6():list() / client:CreateResetProductV6():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:CreateResetProductV6(data)
  local EntityMod = require("entity.create_reset_product_v6_entity")
  if data == nil then
    if self._create_reset_product_v6 == nil then
      self._create_reset_product_v6 = EntityMod.new(self, nil)
    end
    return self._create_reset_product_v6
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CreateSora2Video():list() / client:CreateSora2Video():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:CreateSora2Video(data)
  local EntityMod = require("entity.create_sora2_video_entity")
  if data == nil then
    if self._create_sora2_video == nil then
      self._create_sora2_video = EntityMod.new(self, nil)
    end
    return self._create_sora2_video
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CreateVariation():list() / client:CreateVariation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:CreateVariation(data)
  local EntityMod = require("entity.create_variation_entity")
  if data == nil then
    if self._create_variation == nil then
      self._create_variation = EntityMod.new(self, nil)
    end
    return self._create_variation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Customer():list() / client:Customer():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:Customer(data)
  local EntityMod = require("entity.customer_entity")
  if data == nil then
    if self._customer == nil then
      self._customer = EntityMod.new(self, nil)
    end
    return self._customer
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomerHealth():list() / client:CustomerHealth():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:CustomerHealth(data)
  local EntityMod = require("entity.customer_health_entity")
  if data == nil then
    if self._customer_health == nil then
      self._customer_health = EntityMod.new(self, nil)
    end
    return self._customer_health
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomerHealthAllCustomersItem():list() / client:CustomerHealthAllCustomersItem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:CustomerHealthAllCustomersItem(data)
  local EntityMod = require("entity.customer_health_all_customers_item_entity")
  if data == nil then
    if self._customer_health_all_customers_item == nil then
      self._customer_health_all_customers_item = EntityMod.new(self, nil)
    end
    return self._customer_health_all_customers_item
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomerHealthViewsSummary():list() / client:CustomerHealthViewsSummary():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:CustomerHealthViewsSummary(data)
  local EntityMod = require("entity.customer_health_views_summary_entity")
  if data == nil then
    if self._customer_health_views_summary == nil then
      self._customer_health_views_summary = EntityMod.new(self, nil)
    end
    return self._customer_health_views_summary
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Daily():list() / client:Daily():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:Daily(data)
  local EntityMod = require("entity.daily_entity")
  if data == nil then
    if self._daily == nil then
      self._daily = EntityMod.new(self, nil)
    end
    return self._daily
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DailyStatus():list() / client:DailyStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:DailyStatus(data)
  local EntityMod = require("entity.daily_status_entity")
  if data == nil then
    if self._daily_status == nil then
      self._daily_status = EntityMod.new(self, nil)
    end
    return self._daily_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DedicatedAgentsDashboard():list() / client:DedicatedAgentsDashboard():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:DedicatedAgentsDashboard(data)
  local EntityMod = require("entity.dedicated_agents_dashboard_entity")
  if data == nil then
    if self._dedicated_agents_dashboard == nil then
      self._dedicated_agents_dashboard = EntityMod.new(self, nil)
    end
    return self._dedicated_agents_dashboard
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EnterpriseAgent():list() / client:EnterpriseAgent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:EnterpriseAgent(data)
  local EntityMod = require("entity.enterprise_agent_entity")
  if data == nil then
    if self._enterprise_agent == nil then
      self._enterprise_agent = EntityMod.new(self, nil)
    end
    return self._enterprise_agent
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EnterpriseProduct():list() / client:EnterpriseProduct():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:EnterpriseProduct(data)
  local EntityMod = require("entity.enterprise_product_entity")
  if data == nil then
    if self._enterprise_product == nil then
      self._enterprise_product = EntityMod.new(self, nil)
    end
    return self._enterprise_product
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ExactAvailability():list() / client:ExactAvailability():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:ExactAvailability(data)
  local EntityMod = require("entity.exact_availability_entity")
  if data == nil then
    if self._exact_availability == nil then
      self._exact_availability = EntityMod.new(self, nil)
    end
    return self._exact_availability
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ExactFormula():list() / client:ExactFormula():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:ExactFormula(data)
  local EntityMod = require("entity.exact_formula_entity")
  if data == nil then
    if self._exact_formula == nil then
      self._exact_formula = EntityMod.new(self, nil)
    end
    return self._exact_formula
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ExtractV2():list() / client:ExtractV2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:ExtractV2(data)
  local EntityMod = require("entity.extract_v2_entity")
  if data == nil then
    if self._extract_v2 == nil then
      self._extract_v2 = EntityMod.new(self, nil)
    end
    return self._extract_v2
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:FailedPost():list() / client:FailedPost():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:FailedPost(data)
  local EntityMod = require("entity.failed_post_entity")
  if data == nil then
    if self._failed_post == nil then
      self._failed_post = EntityMod.new(self, nil)
    end
    return self._failed_post
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:File():list() / client:File():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:File(data)
  local EntityMod = require("entity.file_entity")
  if data == nil then
    if self._file == nil then
      self._file = EntityMod.new(self, nil)
    end
    return self._file
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GenerateBlackoutSora2Prompt():list() / client:GenerateBlackoutSora2Prompt():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:GenerateBlackoutSora2Prompt(data)
  local EntityMod = require("entity.generate_blackout_sora2_prompt_entity")
  if data == nil then
    if self._generate_blackout_sora2_prompt == nil then
      self._generate_blackout_sora2_prompt = EntityMod.new(self, nil)
    end
    return self._generate_blackout_sora2_prompt
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GeneratePomelliDemo():list() / client:GeneratePomelliDemo():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:GeneratePomelliDemo(data)
  local EntityMod = require("entity.generate_pomelli_demo_entity")
  if data == nil then
    if self._generate_pomelli_demo == nil then
      self._generate_pomelli_demo = EntityMod.new(self, nil)
    end
    return self._generate_pomelli_demo
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GeneratePrompt():list() / client:GeneratePrompt():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:GeneratePrompt(data)
  local EntityMod = require("entity.generate_prompt_entity")
  if data == nil then
    if self._generate_prompt == nil then
      self._generate_prompt = EntityMod.new(self, nil)
    end
    return self._generate_prompt
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GenerateSora2Prompt():list() / client:GenerateSora2Prompt():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:GenerateSora2Prompt(data)
  local EntityMod = require("entity.generate_sora2_prompt_entity")
  if data == nil then
    if self._generate_sora2_prompt == nil then
      self._generate_sora2_prompt = EntityMod.new(self, nil)
    end
    return self._generate_sora2_prompt
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Healthrx():list() / client:Healthrx():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:Healthrx(data)
  local EntityMod = require("entity.healthrx_entity")
  if data == nil then
    if self._healthrx == nil then
      self._healthrx = EntityMod.new(self, nil)
    end
    return self._healthrx
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:InitResetProductV6():list() / client:InitResetProductV6():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:InitResetProductV6(data)
  local EntityMod = require("entity.init_reset_product_v6_entity")
  if data == nil then
    if self._init_reset_product_v6 == nil then
      self._init_reset_product_v6 = EntityMod.new(self, nil)
    end
    return self._init_reset_product_v6
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Iri():list() / client:Iri():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:Iri(data)
  local EntityMod = require("entity.iri_entity")
  if data == nil then
    if self._iri == nil then
      self._iri = EntityMod.new(self, nil)
    end
    return self._iri
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IrisCapability():list() / client:IrisCapability():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:IrisCapability(data)
  local EntityMod = require("entity.iris_capability_entity")
  if data == nil then
    if self._iris_capability == nil then
      self._iris_capability = EntityMod.new(self, nil)
    end
    return self._iris_capability
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IrisChat():list() / client:IrisChat():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:IrisChat(data)
  local EntityMod = require("entity.iris_chat_entity")
  if data == nil then
    if self._iris_chat == nil then
      self._iris_chat = EntityMod.new(self, nil)
    end
    return self._iris_chat
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IrisConnector():list() / client:IrisConnector():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:IrisConnector(data)
  local EntityMod = require("entity.iris_connector_entity")
  if data == nil then
    if self._iris_connector == nil then
      self._iris_connector = EntityMod.new(self, nil)
    end
    return self._iris_connector
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IrisStatus():list() / client:IrisStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:IrisStatus(data)
  local EntityMod = require("entity.iris_status_entity")
  if data == nil then
    if self._iris_status == nil then
      self._iris_status = EntityMod.new(self, nil)
    end
    return self._iris_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IrisTask():list() / client:IrisTask():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:IrisTask(data)
  local EntityMod = require("entity.iris_task_entity")
  if data == nil then
    if self._iris_task == nil then
      self._iris_task = EntityMod.new(self, nil)
    end
    return self._iris_task
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IrisUsage():list() / client:IrisUsage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:IrisUsage(data)
  local EntityMod = require("entity.iris_usage_entity")
  if data == nil then
    if self._iris_usage == nil then
      self._iris_usage = EntityMod.new(self, nil)
    end
    return self._iris_usage
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Landing():list() / client:Landing():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:Landing(data)
  local EntityMod = require("entity.landing_entity")
  if data == nil then
    if self._landing == nil then
      self._landing = EntityMod.new(self, nil)
    end
    return self._landing
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LandingStat():list() / client:LandingStat():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:LandingStat(data)
  local EntityMod = require("entity.landing_stat_entity")
  if data == nil then
    if self._landing_stat == nil then
      self._landing_stat = EntityMod.new(self, nil)
    end
    return self._landing_stat
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LandingStatus():list() / client:LandingStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:LandingStatus(data)
  local EntityMod = require("entity.landing_status_entity")
  if data == nil then
    if self._landing_status == nil then
      self._landing_status = EntityMod.new(self, nil)
    end
    return self._landing_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LinkInBio():list() / client:LinkInBio():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:LinkInBio(data)
  local EntityMod = require("entity.link_in_bio_entity")
  if data == nil then
    if self._link_in_bio == nil then
      self._link_in_bio = EntityMod.new(self, nil)
    end
    return self._link_in_bio
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LinkInDm():list() / client:LinkInDm():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:LinkInDm(data)
  local EntityMod = require("entity.link_in_dm_entity")
  if data == nil then
    if self._link_in_dm == nil then
      self._link_in_dm = EntityMod.new(self, nil)
    end
    return self._link_in_dm
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LinkInPost():list() / client:LinkInPost():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:LinkInPost(data)
  local EntityMod = require("entity.link_in_post_entity")
  if data == nil then
    if self._link_in_post == nil then
      self._link_in_post = EntityMod.new(self, nil)
    end
    return self._link_in_post
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LinkUser():list() / client:LinkUser():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:LinkUser(data)
  local EntityMod = require("entity.link_user_entity")
  if data == nil then
    if self._link_user == nil then
      self._link_user = EntityMod.new(self, nil)
    end
    return self._link_user
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:MediaAsset():list() / client:MediaAsset():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:MediaAsset(data)
  local EntityMod = require("entity.media_asset_entity")
  if data == nil then
    if self._media_asset == nil then
      self._media_asset = EntityMod.new(self, nil)
    end
    return self._media_asset
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Men():list() / client:Men():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:Men(data)
  local EntityMod = require("entity.men_entity")
  if data == nil then
    if self._men == nil then
      self._men = EntityMod.new(self, nil)
    end
    return self._men
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Microdrama():list() / client:Microdrama():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:Microdrama(data)
  local EntityMod = require("entity.microdrama_entity")
  if data == nil then
    if self._microdrama == nil then
      self._microdrama = EntityMod.new(self, nil)
    end
    return self._microdrama
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:MicrohubPublic():list() / client:MicrohubPublic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:MicrohubPublic(data)
  local EntityMod = require("entity.microhub_public_entity")
  if data == nil then
    if self._microhub_public == nil then
      self._microhub_public = EntityMod.new(self, nil)
    end
    return self._microhub_public
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OnboardingStatus():list() / client:OnboardingStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:OnboardingStatus(data)
  local EntityMod = require("entity.onboarding_status_entity")
  if data == nil then
    if self._onboarding_status == nil then
      self._onboarding_status = EntityMod.new(self, nil)
    end
    return self._onboarding_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OnboardingV6():list() / client:OnboardingV6():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:OnboardingV6(data)
  local EntityMod = require("entity.onboarding_v6_entity")
  if data == nil then
    if self._onboarding_v6 == nil then
      self._onboarding_v6 = EntityMod.new(self, nil)
    end
    return self._onboarding_v6
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PaidUser():list() / client:PaidUser():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:PaidUser(data)
  local EntityMod = require("entity.paid_user_entity")
  if data == nil then
    if self._paid_user == nil then
      self._paid_user = EntityMod.new(self, nil)
    end
    return self._paid_user
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Pexel():list() / client:Pexel():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:Pexel(data)
  local EntityMod = require("entity.pexel_entity")
  if data == nil then
    if self._pexel == nil then
      self._pexel = EntityMod.new(self, nil)
    end
    return self._pexel
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PhoneAdminAvailableAgentSource():list() / client:PhoneAdminAvailableAgentSource():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:PhoneAdminAvailableAgentSource(data)
  local EntityMod = require("entity.phone_admin_available_agent_source_entity")
  if data == nil then
    if self._phone_admin_available_agent_source == nil then
      self._phone_admin_available_agent_source = EntityMod.new(self, nil)
    end
    return self._phone_admin_available_agent_source
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Product():list() / client:Product():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:Product(data)
  local EntityMod = require("entity.product_entity")
  if data == nil then
    if self._product == nil then
      self._product = EntityMod.new(self, nil)
    end
    return self._product
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProductDashboard():list() / client:ProductDashboard():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:ProductDashboard(data)
  local EntityMod = require("entity.product_dashboard_entity")
  if data == nil then
    if self._product_dashboard == nil then
      self._product_dashboard = EntityMod.new(self, nil)
    end
    return self._product_dashboard
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProductDashboardView():list() / client:ProductDashboardView():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:ProductDashboardView(data)
  local EntityMod = require("entity.product_dashboard_view_entity")
  if data == nil then
    if self._product_dashboard_view == nil then
      self._product_dashboard_view = EntityMod.new(self, nil)
    end
    return self._product_dashboard_view
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProductDemo():list() / client:ProductDemo():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:ProductDemo(data)
  local EntityMod = require("entity.product_demo_entity")
  if data == nil then
    if self._product_demo == nil then
      self._product_demo = EntityMod.new(self, nil)
    end
    return self._product_demo
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProductLanding():list() / client:ProductLanding():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:ProductLanding(data)
  local EntityMod = require("entity.product_landing_entity")
  if data == nil then
    if self._product_landing == nil then
      self._product_landing = EntityMod.new(self, nil)
    end
    return self._product_landing
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PublicResumeStatus():list() / client:PublicResumeStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:PublicResumeStatus(data)
  local EntityMod = require("entity.public_resume_status_entity")
  if data == nil then
    if self._public_resume_status == nil then
      self._public_resume_status = EntityMod.new(self, nil)
    end
    return self._public_resume_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ReRollVideo():list() / client:ReRollVideo():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:ReRollVideo(data)
  local EntityMod = require("entity.re_roll_video_entity")
  if data == nil then
    if self._re_roll_video == nil then
      self._re_roll_video = EntityMod.new(self, nil)
    end
    return self._re_roll_video
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ReadRootGet():list() / client:ReadRootGet():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:ReadRootGet(data)
  local EntityMod = require("entity.read_root_get_entity")
  if data == nil then
    if self._read_root_get == nil then
      self._read_root_get = EntityMod.new(self, nil)
    end
    return self._read_root_get
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RecordDemoBooked():list() / client:RecordDemoBooked():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:RecordDemoBooked(data)
  local EntityMod = require("entity.record_demo_booked_entity")
  if data == nil then
    if self._record_demo_booked == nil then
      self._record_demo_booked = EntityMod.new(self, nil)
    end
    return self._record_demo_booked
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RefreshStat():list() / client:RefreshStat():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:RefreshStat(data)
  local EntityMod = require("entity.refresh_stat_entity")
  if data == nil then
    if self._refresh_stat == nil then
      self._refresh_stat = EntityMod.new(self, nil)
    end
    return self._refresh_stat
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RemixerClipper():list() / client:RemixerClipper():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:RemixerClipper(data)
  local EntityMod = require("entity.remixer_clipper_entity")
  if data == nil then
    if self._remixer_clipper == nil then
      self._remixer_clipper = EntityMod.new(self, nil)
    end
    return self._remixer_clipper
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ResetProduct():list() / client:ResetProduct():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:ResetProduct(data)
  local EntityMod = require("entity.reset_product_entity")
  if data == nil then
    if self._reset_product == nil then
      self._reset_product = EntityMod.new(self, nil)
    end
    return self._reset_product
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RetryWebsiteScrape():list() / client:RetryWebsiteScrape():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:RetryWebsiteScrape(data)
  local EntityMod = require("entity.retry_website_scrape_entity")
  if data == nil then
    if self._retry_website_scrape == nil then
      self._retry_website_scrape = EntityMod.new(self, nil)
    end
    return self._retry_website_scrape
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SaveSurvey():list() / client:SaveSurvey():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:SaveSurvey(data)
  local EntityMod = require("entity.save_survey_entity")
  if data == nil then
    if self._save_survey == nil then
      self._save_survey = EntityMod.new(self, nil)
    end
    return self._save_survey
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ScanSocial():list() / client:ScanSocial():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:ScanSocial(data)
  local EntityMod = require("entity.scan_social_entity")
  if data == nil then
    if self._scan_social == nil then
      self._scan_social = EntityMod.new(self, nil)
    end
    return self._scan_social
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ScanSocialsPublic():list() / client:ScanSocialsPublic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:ScanSocialsPublic(data)
  local EntityMod = require("entity.scan_socials_public_entity")
  if data == nil then
    if self._scan_socials_public == nil then
      self._scan_socials_public = EntityMod.new(self, nil)
    end
    return self._scan_socials_public
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ScanSocialsStatus():list() / client:ScanSocialsStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:ScanSocialsStatus(data)
  local EntityMod = require("entity.scan_socials_status_entity")
  if data == nil then
    if self._scan_socials_status == nil then
      self._scan_socials_status = EntityMod.new(self, nil)
    end
    return self._scan_socials_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ScheduleV2():list() / client:ScheduleV2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:ScheduleV2(data)
  local EntityMod = require("entity.schedule_v2_entity")
  if data == nil then
    if self._schedule_v2 == nil then
      self._schedule_v2 = EntityMod.new(self, nil)
    end
    return self._schedule_v2
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Scrape():list() / client:Scrape():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:Scrape(data)
  local EntityMod = require("entity.scrape_entity")
  if data == nil then
    if self._scrape == nil then
      self._scrape = EntityMod.new(self, nil)
    end
    return self._scrape
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ScrapeWebsitePublic():list() / client:ScrapeWebsitePublic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:ScrapeWebsitePublic(data)
  local EntityMod = require("entity.scrape_website_public_entity")
  if data == nil then
    if self._scrape_website_public == nil then
      self._scrape_website_public = EntityMod.new(self, nil)
    end
    return self._scrape_website_public
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ScrapedData():list() / client:ScrapedData():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:ScrapedData(data)
  local EntityMod = require("entity.scraped_data_entity")
  if data == nil then
    if self._scraped_data == nil then
      self._scraped_data = EntityMod.new(self, nil)
    end
    return self._scraped_data
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ScrapingStatus():list() / client:ScrapingStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:ScrapingStatus(data)
  local EntityMod = require("entity.scraping_status_entity")
  if data == nil then
    if self._scraping_status == nil then
      self._scraping_status = EntityMod.new(self, nil)
    end
    return self._scraping_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SelfServeActivate():list() / client:SelfServeActivate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:SelfServeActivate(data)
  local EntityMod = require("entity.self_serve_activate_entity")
  if data == nil then
    if self._self_serve_activate == nil then
      self._self_serve_activate = EntityMod.new(self, nil)
    end
    return self._self_serve_activate
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Seo():list() / client:Seo():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:Seo(data)
  local EntityMod = require("entity.seo_entity")
  if data == nil then
    if self._seo == nil then
      self._seo = EntityMod.new(self, nil)
    end
    return self._seo
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SeoAiMention():list() / client:SeoAiMention():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:SeoAiMention(data)
  local EntityMod = require("entity.seo_ai_mention_entity")
  if data == nil then
    if self._seo_ai_mention == nil then
      self._seo_ai_mention = EntityMod.new(self, nil)
    end
    return self._seo_ai_mention
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SeoBacklink():list() / client:SeoBacklink():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:SeoBacklink(data)
  local EntityMod = require("entity.seo_backlink_entity")
  if data == nil then
    if self._seo_backlink == nil then
      self._seo_backlink = EntityMod.new(self, nil)
    end
    return self._seo_backlink
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SeoKeyword():list() / client:SeoKeyword():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:SeoKeyword(data)
  local EntityMod = require("entity.seo_keyword_entity")
  if data == nil then
    if self._seo_keyword == nil then
      self._seo_keyword = EntityMod.new(self, nil)
    end
    return self._seo_keyword
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SeoOverview():list() / client:SeoOverview():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:SeoOverview(data)
  local EntityMod = require("entity.seo_overview_entity")
  if data == nil then
    if self._seo_overview == nil then
      self._seo_overview = EntityMod.new(self, nil)
    end
    return self._seo_overview
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SeoTraffic():list() / client:SeoTraffic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:SeoTraffic(data)
  local EntityMod = require("entity.seo_traffic_entity")
  if data == nil then
    if self._seo_traffic == nil then
      self._seo_traffic = EntityMod.new(self, nil)
    end
    return self._seo_traffic
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ShareAccessLink():list() / client:ShareAccessLink():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:ShareAccessLink(data)
  local EntityMod = require("entity.share_access_link_entity")
  if data == nil then
    if self._share_access_link == nil then
      self._share_access_link = EntityMod.new(self, nil)
    end
    return self._share_access_link
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Site():list() / client:Site():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:Site(data)
  local EntityMod = require("entity.site_entity")
  if data == nil then
    if self._site == nil then
      self._site = EntityMod.new(self, nil)
    end
    return self._site
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Slide():list() / client:Slide():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:Slide(data)
  local EntityMod = require("entity.slide_entity")
  if data == nil then
    if self._slide == nil then
      self._slide = EntityMod.new(self, nil)
    end
    return self._slide
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SlugValidation():list() / client:SlugValidation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:SlugValidation(data)
  local EntityMod = require("entity.slug_validation_entity")
  if data == nil then
    if self._slug_validation == nil then
      self._slug_validation = EntityMod.new(self, nil)
    end
    return self._slug_validation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Social():list() / client:Social():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:Social(data)
  local EntityMod = require("entity.social_entity")
  if data == nil then
    if self._social == nil then
      self._social = EntityMod.new(self, nil)
    end
    return self._social
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SocialScanPreview():list() / client:SocialScanPreview():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:SocialScanPreview(data)
  local EntityMod = require("entity.social_scan_preview_entity")
  if data == nil then
    if self._social_scan_preview == nil then
      self._social_scan_preview = EntityMod.new(self, nil)
    end
    return self._social_scan_preview
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SocialScanProcess():list() / client:SocialScanProcess():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:SocialScanProcess(data)
  local EntityMod = require("entity.social_scan_process_entity")
  if data == nil then
    if self._social_scan_process == nil then
      self._social_scan_process = EntityMod.new(self, nil)
    end
    return self._social_scan_process
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SocialScanSave():list() / client:SocialScanSave():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:SocialScanSave(data)
  local EntityMod = require("entity.social_scan_save_entity")
  if data == nil then
    if self._social_scan_save == nil then
      self._social_scan_save = EntityMod.new(self, nil)
    end
    return self._social_scan_save
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Sora2Avatar():list() / client:Sora2Avatar():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:Sora2Avatar(data)
  local EntityMod = require("entity.sora2_avatar_entity")
  if data == nil then
    if self._sora2_avatar == nil then
      self._sora2_avatar = EntityMod.new(self, nil)
    end
    return self._sora2_avatar
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Sora2AvatarAssetUpload():list() / client:Sora2AvatarAssetUpload():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:Sora2AvatarAssetUpload(data)
  local EntityMod = require("entity.sora2_avatar_asset_upload_entity")
  if data == nil then
    if self._sora2_avatar_asset_upload == nil then
      self._sora2_avatar_asset_upload = EntityMod.new(self, nil)
    end
    return self._sora2_avatar_asset_upload
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Sora2AvatarStat():list() / client:Sora2AvatarStat():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:Sora2AvatarStat(data)
  local EntityMod = require("entity.sora2_avatar_stat_entity")
  if data == nil then
    if self._sora2_avatar_stat == nil then
      self._sora2_avatar_stat = EntityMod.new(self, nil)
    end
    return self._sora2_avatar_stat
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Stat():list() / client:Stat():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:Stat(data)
  local EntityMod = require("entity.stat_entity")
  if data == nil then
    if self._stat == nil then
      self._stat = EntityMod.new(self, nil)
    end
    return self._stat
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:StatsRefreshBackfill():list() / client:StatsRefreshBackfill():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:StatsRefreshBackfill(data)
  local EntityMod = require("entity.stats_refresh_backfill_entity")
  if data == nil then
    if self._stats_refresh_backfill == nil then
      self._stats_refresh_backfill = EntityMod.new(self, nil)
    end
    return self._stats_refresh_backfill
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:StatsRefreshIssue():list() / client:StatsRefreshIssue():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:StatsRefreshIssue(data)
  local EntityMod = require("entity.stats_refresh_issue_entity")
  if data == nil then
    if self._stats_refresh_issue == nil then
      self._stats_refresh_issue = EntityMod.new(self, nil)
    end
    return self._stats_refresh_issue
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:StatsRefreshOverview():list() / client:StatsRefreshOverview():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:StatsRefreshOverview(data)
  local EntityMod = require("entity.stats_refresh_overview_entity")
  if data == nil then
    if self._stats_refresh_overview == nil then
      self._stats_refresh_overview = EntityMod.new(self, nil)
    end
    return self._stats_refresh_overview
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:StatsRefreshRunSummary():list() / client:StatsRefreshRunSummary():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:StatsRefreshRunSummary(data)
  local EntityMod = require("entity.stats_refresh_run_summary_entity")
  if data == nil then
    if self._stats_refresh_run_summary == nil then
      self._stats_refresh_run_summary = EntityMod.new(self, nil)
    end
    return self._stats_refresh_run_summary
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:StatsRefreshTaskTrigger():list() / client:StatsRefreshTaskTrigger():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:StatsRefreshTaskTrigger(data)
  local EntityMod = require("entity.stats_refresh_task_trigger_entity")
  if data == nil then
    if self._stats_refresh_task_trigger == nil then
      self._stats_refresh_task_trigger = EntityMod.new(self, nil)
    end
    return self._stats_refresh_task_trigger
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Stripe():list() / client:Stripe():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:Stripe(data)
  local EntityMod = require("entity.stripe_entity")
  if data == nil then
    if self._stripe == nil then
      self._stripe = EntityMod.new(self, nil)
    end
    return self._stripe
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Style():list() / client:Style():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:Style(data)
  local EntityMod = require("entity.style_entity")
  if data == nil then
    if self._style == nil then
      self._style = EntityMod.new(self, nil)
    end
    return self._style
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Template():list() / client:Template():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:Template(data)
  local EntityMod = require("entity.template_entity")
  if data == nil then
    if self._template == nil then
      self._template = EntityMod.new(self, nil)
    end
    return self._template
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TikTokCreatorInfo():list() / client:TikTokCreatorInfo():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:TikTokCreatorInfo(data)
  local EntityMod = require("entity.tik_tok_creator_info_entity")
  if data == nil then
    if self._tik_tok_creator_info == nil then
      self._tik_tok_creator_info = EntityMod.new(self, nil)
    end
    return self._tik_tok_creator_info
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TopPost():list() / client:TopPost():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:TopPost(data)
  local EntityMod = require("entity.top_post_entity")
  if data == nil then
    if self._top_post == nil then
      self._top_post = EntityMod.new(self, nil)
    end
    return self._top_post
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UploadPostAgent():list() / client:UploadPostAgent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:UploadPostAgent(data)
  local EntityMod = require("entity.upload_post_agent_entity")
  if data == nil then
    if self._upload_post_agent == nil then
      self._upload_post_agent = EntityMod.new(self, nil)
    end
    return self._upload_post_agent
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:User():list() / client:User():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:User(data)
  local EntityMod = require("entity.user_entity")
  if data == nil then
    if self._user == nil then
      self._user = EntityMod.new(self, nil)
    end
    return self._user
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UserAgent():list() / client:UserAgent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:UserAgent(data)
  local EntityMod = require("entity.user_agent_entity")
  if data == nil then
    if self._user_agent == nil then
      self._user_agent = EntityMod.new(self, nil)
    end
    return self._user_agent
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UserHealthDetail():list() / client:UserHealthDetail():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:UserHealthDetail(data)
  local EntityMod = require("entity.user_health_detail_entity")
  if data == nil then
    if self._user_health_detail == nil then
      self._user_health_detail = EntityMod.new(self, nil)
    end
    return self._user_health_detail
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UserWithAvatarSubmission():list() / client:UserWithAvatarSubmission():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:UserWithAvatarSubmission(data)
  local EntityMod = require("entity.user_with_avatar_submission_entity")
  if data == nil then
    if self._user_with_avatar_submission == nil then
      self._user_with_avatar_submission = EntityMod.new(self, nil)
    end
    return self._user_with_avatar_submission
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UsersHealth():list() / client:UsersHealth():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:UsersHealth(data)
  local EntityMod = require("entity.users_health_entity")
  if data == nil then
    if self._users_health == nil then
      self._users_health = EntityMod.new(self, nil)
    end
    return self._users_health
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Video():list() / client:Video():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:Video(data)
  local EntityMod = require("entity.video_entity")
  if data == nil then
    if self._video == nil then
      self._video = EntityMod.new(self, nil)
    end
    return self._video
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:VideoRemixerWorker():list() / client:VideoRemixerWorker():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:VideoRemixerWorker(data)
  local EntityMod = require("entity.video_remixer_worker_entity")
  if data == nil then
    if self._video_remixer_worker == nil then
      self._video_remixer_worker = EntityMod.new(self, nil)
    end
    return self._video_remixer_worker
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WatchdogRecovery():list() / client:WatchdogRecovery():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:WatchdogRecovery(data)
  local EntityMod = require("entity.watchdog_recovery_entity")
  if data == nil then
    if self._watchdog_recovery == nil then
      self._watchdog_recovery = EntityMod.new(self, nil)
    end
    return self._watchdog_recovery
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WinningAd():list() / client:WinningAd():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:WinningAd(data)
  local EntityMod = require("entity.winning_ad_entity")
  if data == nil then
    if self._winning_ad == nil then
      self._winning_ad = EntityMod.new(self, nil)
    end
    return self._winning_ad
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:XAdaptation():list() / client:XAdaptation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:XAdaptation(data)
  local EntityMod = require("entity.x_adaptation_entity")
  if data == nil then
    if self._x_adaptation == nil then
      self._x_adaptation = EntityMod.new(self, nil)
    end
    return self._x_adaptation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZerohumanAdminAccount():list() / client:ZerohumanAdminAccount():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CrackedApiReferenceSDK:ZerohumanAdminAccount(data)
  local EntityMod = require("entity.zerohuman_admin_account_entity")
  if data == nil then
    if self._zerohuman_admin_account == nil then
      self._zerohuman_admin_account = EntityMod.new(self, nil)
    end
    return self._zerohuman_admin_account
  end
  return EntityMod.new(self, data)
end




function CrackedApiReferenceSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = CrackedApiReferenceSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return CrackedApiReferenceSDK
