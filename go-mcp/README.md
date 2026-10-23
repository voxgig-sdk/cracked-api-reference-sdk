# cracked-api-reference-mcp

[MCP](https://modelcontextprotocol.io) server exposing the CrackedApiReference SDK as
2 agent tools, `cracked-api-reference_list` and `cracked-api-reference_load`, built on the
[official Go MCP SDK](https://github.com/modelcontextprotocol/go-sdk) and the
sibling Go SDK at `../go`. Runs over **stdio** (default, for spawnable installs)
or **streamable HTTP** (one shared server for several agents).

The server only reads. Create, update, patch and remove become tools too when the
SDK's own model sets `main: kit: target: 'go-mcp': tool: write: true`; they are off by default, as an agent calling
them changes the API's data.

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/cracked-api-reference-mcp)
make build

# 2. Provide credentials via the environment
export CRACKED_API_REFERENCE_APIKEY=sk_live_xxx

# 3a. Install into Claude Code over stdio (most common)
claude mcp add --scope user cracked-api-reference \
  -- /absolute/path/to/cracked-api-reference-mcp -transport stdio

# 3b. …or run a shared HTTP server instead
./cracked-api-reference-mcp -transport http -addr :8080
```

Tool-call arguments (what an agent sends):

```jsonc
// cracked-api-reference_list: first page of records
{ "entity": "admin" }

// cracked-api-reference_load: one record
{ "entity": "active_onboarding", "query": {} }
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: install and call a tool

1. **Build** the server from this `go-mcp/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/cracked-api-reference-mcp
   ```

2. **Set your API key:**

   ```sh
   export CRACKED_API_REFERENCE_APIKEY=sk_live_xxx
   ```

3. **Install it into Claude Code** (stdio transport):

   ```sh
   claude mcp add --scope user cracked-api-reference \
     -- "$PWD"/dist/*/cracked-api-reference-mcp -transport stdio
   ```

4. **Restart Claude Code.** The `cracked-api-reference_list` and `cracked-api-reference_load` tools now appear in new
   sessions. Ask the agent to *"list admin using cracked-api-reference"*
   and it calls `cracked-api-reference_list` with `{"entity":"admin"}`.

## How-to guides

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export CRACKED_API_REFERENCE_APIKEY=sk_live_xxx            # API key
export CRACKED_API_REFERENCE_BASE=https://api.example.com  # optional: override the API base URL
```

Set these in the shell that launches the server (or in the `claude mcp add`
environment) so every tool call is authenticated.

### Run as a shared HTTP server

```sh
./cracked-api-reference-mcp -transport http -addr :8080
```

Streamable HTTP lets several agents share one running process; stdio (the
default) spawns a fresh process per client.

### Call the `cracked-api-reference_list` tool

Args: `entity` (required), `query` (optional: optional filter map; omit it for the first page).
Returns the first page of records as JSON:

```jsonc
{ "entity": "admin" }
```

### Call the `cracked-api-reference_load` tool

Args: `entity` (required), `query` (required: match map naming the record, such as {"id":1}).
Returns the record as JSON:

```jsonc
{ "entity": "active_onboarding", "query": {} }
```

### Turn on the write tools

In the SDK's own model (`.sdk/model/sdk.aontu`), then regenerate:

```
main: kit: target: 'go-mcp': tool: write: true
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

## Reference

### Tools

| Tool | Args | Returns | MCP hints |
|------|------|---------|-----------|
| `cracked-api-reference_list` | `entity`, `query` (optional map) | The first page of records as JSON | read-only |
| `cracked-api-reference_load` | `entity`, `query` (required map) | The record as JSON | read-only |

On error, a tool returns an MCP error result (`isError: true`) whose text is the
failure message (e.g. unknown entity, or an API error).

### Entities

Each tool takes as its `entity` argument one of the entities that has its
operation, of the 171 the SDK has:

| Tool | Entities |
|------|----------|
| `cracked-api-reference_list` | admin, admin_customer, admin_customer_success, admin_generated_video, admin_insight, admin_metrics_summary, admin_post, admin_recent_signup, admin_user_view, admin_users_table_item, agent, agent_access_customers_health, agent_access_user_agent, agent_access_user_phone_farm, agent_access_user_post, agent_access_user_summary, agent_access_user_winning_ad, agent_access_winning_ads_summary, agent_detail, agent_health, agent_health_customer_option, agent_health_detail, agent_post, agent_summary, analytics_post, carousel, carousel_status, customer, customer_health_all_customers_item, customer_health_views_summary, dedicated_agents_dashboard, failed_post, iris_connector, iris_status, iris_task, iris_usage, men, onboarding_status, paid_user, pexel, phone_admin_available_agent_source, product, product_dashboard, product_dashboard_view, product_demo, product_landing, schedule_v2, seo_ai_mention, seo_backlink, seo_keyword, seo_overview, seo_traffic, social, sora2_avatar, stat, stats_refresh_issue, stats_refresh_overview, stats_refresh_run_summary, tik_tok_creator_info, top_post, user_agent, user_health_detail, user_with_avatar_submission, users_health, winning_ad, zerohuman_admin_account |
| `cracked-api-reference_load` | active_onboarding, admin, admin_carousel, admin_carousel_demo_review, admin_healthrx, admin_insight, admin_slideshow_import, admin_video_remixer, agent_access_overview, agent_access_phil_hourly_notification, agent_access_phil_stats_refresh, agent_access_phil_video, agent_access_user_video, agent_stat, agents_summary, analysis_status, auto_schedule_setting, carousel, carousel_agent_detail, chat_history, comment, comment_campaign, customer_health, daily_status, enterprise_agent, enterprise_product, exact_availability, exact_formula, generate_sora2_prompt, healthrx, landing_stat, landing_status, link_in_bio, link_in_dm, link_in_post, media_asset, microdrama, microhub_public, product, public_resume_status, read_root_get, remixer_clipper, reset_product, scan_socials_status, schedule_v2, scraping_status, seo, site, slug_validation, social, sora2_avatar, sora2_avatar_stat, style, template, user, video, watchdog_recovery, x_adaptation |

JSON schemas are emitted by the SDK from each tool's argument struct's
`json` / `jsonschema` tags — no schema is hand-written. Each tool's
`entity` is an `enum` of the entities in its row, so the server refuses
any other before it runs a call.

### Transports & flags

| Flag | Default | Purpose |
|------|---------|---------|
| `-transport` | `stdio` | `stdio` (spawnable) or `http` (streamable HTTP). |
| `-addr` | `:8080` | Listen address for the `http` transport. |

### Environment variables

| Variable | Purpose |
|----------|---------|
| `CRACKED_API_REFERENCE_APIKEY` | API key sent with every request. |
| `CRACKED_API_REFERENCE_BASE` | Optional override of the API base URL. |

### Smoke test via HTTP (raw JSON-RPC)

```sh
./cracked-api-reference-mcp -transport http -addr :18080 &

# initialize, grab the session id
curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -D headers \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}'

SESSION=$(awk '/Mcp-Session-Id/ {print $2}' headers | tr -d '\r')

curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -H "Mcp-Session-Id: $SESSION" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"cracked-api-reference_list","arguments":{"entity":"admin"}}}'
```

## Explanation

### How tools map to the SDK

`main.go` builds the SDK client (configured from the environment) and registers
one tool per operation the SDK's entities have. Each dispatches on the
`entity` argument to the matching entity in the sibling Go SDK at `../go`,
calls its operation, unwraps the `Entity` wrappers to plain data, and returns
it as pretty-printed JSON.

### Why two transports

**stdio** is the standard for agent hosts that spawn a server per client
(Claude Code's `claude mcp add`). **streamable HTTP** keeps one process running
that many agents can share — handy for a long-lived deployment.

### Schema generation

The input schema is derived from each tool's argument struct's `json` /
`jsonschema` tags at registration time, so the advertised tool schema can
never drift from the code that consumes it. The `entity` enum comes from the
same list the tool is registered for.

## Generated by

sdkgen `go-mcp` target. See the target source under `.sdk/src/cmp/go-mcp/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-mcp/`.
