# cracked-api-reference-cli

boru-driven command-line client **and** interactive REPL for the CrackedApiReference
SDK. Each command line is parsed as a single [boru](https://github.com/boru-lang/boru)
expression and evaluated against the live API; run it with no arguments to drop
into a REPL. Built on `github.com/boru-lang/boru/eng/go` and the sibling Go SDK
at `../go`.

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/cracked-api-reference-cli)
make build

# 2. See usage (words, entities, env vars)
./cracked-api-reference-cli --help

# 3. Provide credentials once, via the environment
export CRACKED_API_REFERENCE_APIKEY=sk_live_xxx

# 4. Each command line is ONE boru expression, run against the API:
./cracked-api-reference-cli list admin

# 5. Override the API base URL for a single call
CRACKED_API_REFERENCE_BASE=https://api.example.com ./cracked-api-reference-cli --help

# 6. No arguments -> interactive REPL
./cracked-api-reference-cli
cracked-api-reference> /help
cracked-api-reference> /quit
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: your first query in under a minute

1. **Build the binary.** From this `go-cli/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/cracked-api-reference-cli
   ```

2. **Set your API key** (read from the environment):

   ```sh
   export CRACKED_API_REFERENCE_APIKEY=sk_live_xxx
   ```

3. **Run a query.** Evaluate an boru expression against the API (or run with no
   arguments to open the REPL):

   ```sh
   ./dist/*/cracked-api-reference-cli --help
   ```

4. **Go interactive.** Run the binary with no arguments to open the REPL, then
   type `/help` for the word and entity lists and `/quit` to leave.

That is the whole loop: *build → set key → evaluate boru expressions*.

## How-to guides

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export CRACKED_API_REFERENCE_APIKEY=sk_live_xxx            # API key
export CRACKED_API_REFERENCE_BASE=https://api.example.com  # optional: override the API base URL
./cracked-api-reference-cli --help
```

Both are injectable by a secrets vault, so the key never has to be typed inline.

### Explore interactively with the REPL

Run with no arguments to open a REPL (prompt `cracked-api-reference>`). Each line is
evaluated as its own boru expression:

```text
$ ./cracked-api-reference-cli
cracked-api-reference> /help
cracked-api-reference> /quit
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

### Discover the available entities

`/help` in the REPL prints the full entity list, or see [Entities](#entities)
below — this SDK exposes 171 entities.

## Reference

### Words

The CLI registers these boru words, each bound to the SDK:

| Word     | Signatures                                    | Returns                        |
|----------|-----------------------------------------------|--------------------------------|
| `list`   | `list <entity>` · `list <query> <entity>`     | First page of records          |
| `load`   | `load <entity>` · `load <query> <entity>`     | A single record                |
| `update` | `update <query> <entity>`                     | Update a record, return it     |

- `<entity>` is a bareword, auto-quoted as an boru atom (e.g. `activate`).
- `<query>` is either a **Map** (`{id:1}`) or a **Scalar** (`1`, treated as
  `{id:1}`). A scalar is always wrapped as `{id:<value>}`.

### Environment variables

| Variable | Purpose |
|----------|---------|
| `CRACKED_API_REFERENCE_APIKEY` | API key sent with every request. |
| `CRACKED_API_REFERENCE_BASE` | Optional override of the API base URL. |

Unset variables fall back to the SDK's built-in defaults.

### CLI flags

- `--help` / `-h` — print usage (words, entities, env vars) and exit.

### REPL commands

Meta-commands use the `/` prefix (everything else on a line is evaluated as boru):

- `/quit` / `/q` / `/exit` — exit the REPL
- `/help` / `/h` / `/?`     — show the word list, entity list and meta commands

### Exit codes

| Code | Meaning |
|------|---------|
| `0` | Success (also the normal REPL exit). |
| `1` | Parse error, word-registration error, or an API/evaluation error. |

### Build targets

| Target | Result |
|--------|--------|
| `make build` | Native binary at `dist/<os>-<arch>/cracked-api-reference-cli`. |
| `make build-all` | linux/darwin/windows x amd64/arm64, each under its own `dist/<os>-<arch>/`. |
| `make clean` | Remove `dist/` and any stray binaries. |

### Entities

The 171 entities this SDK exposes (any is valid as `<entity>`):

activate activate_user active_onboarding admin admin_account_reset admin_carousel admin_carousel_demo_review admin_customer admin_customer_success admin_generated_video admin_healthrx admin_insight admin_landing_task admin_metrics_summary admin_post admin_recent_signup admin_slideshow_diag admin_slideshow_import admin_user_view admin_users_table_item admin_video_remixer advance_step agent agent_access_customers_health agent_access_overview agent_access_phil_hourly_notification agent_access_phil_stats_refresh agent_access_phil_video agent_access_user_agent agent_access_user_phone_farm agent_access_user_post agent_access_user_summary agent_access_user_video agent_access_user_winning_ad agent_access_winning_ads_summary agent_detail agent_health agent_health_customer_option agent_health_detail agent_post agent_stat agent_summary agents_summary analysis_status analytics_post analyze_product assign_agent auth auto_schedule_setting bulk_tik_tok_stats_update carousel carousel_agent_detail carousel_status chat chat_history chat_session comment comment_campaign complete_chat_checkout create_blackout_sora2_video create_carousel create_product create_reset_product_v6 create_sora2_video create_variation customer customer_health customer_health_all_customers_item customer_health_views_summary daily daily_status dedicated_agents_dashboard enterprise_agent enterprise_product exact_availability exact_formula extract_v2 failed_post file generate_blackout_sora2_prompt generate_pomelli_demo generate_prompt generate_sora2_prompt healthrx init_reset_product_v6 iri iris_capability iris_chat iris_connector iris_status iris_task iris_usage landing landing_stat landing_status link_in_bio link_in_dm link_in_post link_user media_asset men microdrama microhub_public onboarding_status onboarding_v6 paid_user pexel phone_admin_available_agent_source product product_dashboard product_dashboard_view product_demo product_landing public_resume_status re_roll_video read_root_get record_demo_booked refresh_stat remixer_clipper reset_product retry_website_scrape save_survey scan_social scan_socials_public scan_socials_status schedule_v2 scrape scrape_website_public scraped_data scraping_status self_serve_activate seo seo_ai_mention seo_backlink seo_keyword seo_overview seo_traffic share_access_link site slide slug_validation social social_scan_preview social_scan_process social_scan_save sora2_avatar sora2_avatar_asset_upload sora2_avatar_stat stat stats_refresh_backfill stats_refresh_issue stats_refresh_overview stats_refresh_run_summary stats_refresh_task_trigger stripe style template tik_tok_creator_info top_post upload_post_agent user user_agent user_health_detail user_with_avatar_submission users_health video video_remixer_worker watchdog_recovery winning_ad x_adaptation zerohuman_admin_account

## Explanation

### Why boru?

The whole command line is one [boru](https://github.com/boru-lang/boru) expression,
not a fixed `verb --flag` grammar. That means the same binary works one-shot
(`./cracked-api-reference-cli <expr>`) and interactively (the REPL), and expressions compose the
same way in both. `list` / `load` / `update` are ordinary boru *words* bound to
the SDK — adding SDK operations is adding words, not re-parsing flags.

### How it is wired

`main.go` builds the SDK client (configured from the environment), creates an
boru registry, and `words.go` registers `list` / `load` / `update` as native
words that dispatch on the entity atom and call the sibling Go SDK at `../go`.
Results are unwrapped from their `Entity` wrappers to plain data before being
printed.

### Output format

Each result value is printed as its boru string form (a JSON-like rendering of
the record or list of records). One-shot mode prints to stdout; errors go to
stderr with a non-zero exit code.

## Generated by

sdkgen `go-cli` target. See the target source under `.sdk/src/cmp/go-cli/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-cli/`.
