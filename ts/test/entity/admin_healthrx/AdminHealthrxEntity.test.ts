

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CrackedApiReferenceSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('AdminHealthrxEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.AdminHealthrx()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AdminHealthrx().load({"item_id":1,"kind":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'admin_healthrx.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"action":{"a":true,"h":"Action","n":"action","r":true,"t":"`$STRING`","key$":"action","index$":0},"delivery_enabled":{"a":true,"h":"Delivery Enabled","n":"delivery_enabled","r":false,"t":"`$BOOLEAN`","key$":"delivery_enabled","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"option_id":{"a":true,"h":"Option Id","n":"option_id","r":true,"t":"`$STRING`","key$":"option_id","index$":3},"plan":{"a":true,"h":"Plan","n":"plan","r":true,"t":"`$OBJECT`","key$":"plan","index$":4},"preparation_enabled":{"a":true,"h":"Preparation Enabled","n":"preparation_enabled","r":false,"t":"`$BOOLEAN`","key$":"preparation_enabled","index$":5},"product_id":{"a":true,"fo":"uuid","h":"Product Id","n":"product_id","r":true,"t":"`$STRING`","key$":"product_id","index$":6},"reason":{"a":true,"h":"Reason","n":"reason","r":true,"t":"`$STRING`","key$":"reason","index$":7},"request_key":{"a":true,"h":"Request Key","n":"request_key","r":true,"t":"`$STRING`","key$":"request_key","index$":8},"revision":{"a":true,"h":"Revision","n":"revision","r":true,"t":"`$INTEGER`","key$":"revision","index$":9},"schedule_enabled":{"a":true,"h":"Schedule Enabled","n":"schedule_enabled","r":false,"t":"`$BOOLEAN`","key$":"schedule_enabled","index$":10},"version":{"a":true,"h":"Version","n":"version","r":true,"t":"`$STRING`","key$":"version","index$":11},"viewed":{"a":true,"h":"Viewed","n":"viewed","r":true,"t":"`$BOOLEAN`","key$":"viewed","index$":12}},"id":{"field":"id","name":"id","parts":["kind","item_id"],"sep":"/"},"name":"admin_healthrx","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["action","reason","version"],"co":{"id":"POST /api/admin/healthrx/items/{kind}/{item_id}/decision","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"item_id","or":"item_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"kind","or":"kind","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/api/admin/healthrx/items/{kind}/{item_id}/decision","q":{"exist":["item_id","kind"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"healthrx"},{"lit":"items"},{"var":"kind"},{"var":"item_id"},{"lit":"decision"}],"t":{"req":{"action":"`reqdata.action`","reason":"`reqdata.reason`","version":"`reqdata.version`"},"res":"`body`"},"index$":0},{"a":true,"bf":["option_id","version"],"co":{"id":"POST /api/admin/healthrx/items/comments/{item_id}/selection","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"comment_id","or":"item_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/admin/healthrx/items/comments/{item_id}/selection","q":{"exist":["comment_id"]},"r":{"param":{"item_id":"comment_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"healthrx"},{"lit":"items"},{"lit":"comments"},{"var":"comment_id"},{"lit":"selection"}],"t":{"req":{"option_id":"`reqdata.option_id`","version":"`reqdata.version`"},"res":"`body`"},"index$":1},{"a":true,"bf":["product_id","viewed"],"co":{"id":"POST /api/admin/healthrx/videos/{source_id}/viewed","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"video_id","or":"source_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/admin/healthrx/videos/{source_id}/viewed","q":{"exist":["video_id"]},"r":{"param":{"source_id":"video_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"healthrx"},{"lit":"videos"},{"var":"video_id"},{"lit":"viewed"}],"t":{"req":{"product_id":"`reqdata.product_id`","viewed":"`reqdata.viewed`"},"res":"`body`"},"index$":2},{"a":true,"bf":["plan","product_id","request_key"],"co":{"id":"POST /api/admin/healthrx/automation/runs","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/admin/healthrx/automation/runs","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"healthrx"},{"lit":"automation"},{"lit":"runs"}],"t":{"req":{"plan":"`reqdata.plan`","product_id":"`reqdata.product_id`","request_key":"`reqdata.request_key`"},"res":"`body`"},"index$":3}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/admin/healthrx/items/{kind}/{item_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"item_id","or":"item_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"kind","or":"kind","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/admin/healthrx/items/{kind}/{item_id}","q":{"exist":["item_id","kind"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"healthrx"},{"lit":"items"},{"var":"kind"},{"var":"item_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/admin/healthrx/automation","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"product_id","or":"product_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"run_id","or":"run_id","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/admin/healthrx/automation","q":{"exist":["product_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"healthrx"},{"lit":"automation"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /api/admin/healthrx/automation/config","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"product_id","or":"product_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/admin/healthrx/automation/config","q":{"exist":["product_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"healthrx"},{"lit":"automation"},{"lit":"config"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /api/admin/healthrx/videos","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"day","or":"day","r":false,"t":"`$ANY`","index$":0},{"a":true,"ex":30,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"product_id","or":"product_id","r":true,"t":"`$STRING`","index$":3},{"a":true,"ex":"all","k":"query","n":"view","or":"view","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/api/admin/healthrx/videos","q":{"exist":["product_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"healthrx"},{"lit":"videos"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"GET /api/admin/healthrx/customers","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/admin/healthrx/customers","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"healthrx"},{"lit":"customers"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4},{"a":true,"co":{"id":"GET /api/admin/healthrx/inbox","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"comments","k":"query","n":"kind","or":"kind","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":25,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"product_id","or":"product_id","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"user_id","or":"user_id","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":"pending","k":"query","n":"view","or":"view","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/api/admin/healthrx/inbox","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"healthrx"},{"lit":"inbox"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":5},{"a":true,"co":{"id":"GET /api/admin/healthrx/products","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"","k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"user_id","or":"user_id","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/admin/healthrx/products","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"healthrx"},{"lit":"products"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":6},{"a":true,"co":{"id":"GET /api/admin/healthrx/summary","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"product_id","or":"product_id","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"user_id","or":"user_id","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/admin/healthrx/summary","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"healthrx"},{"lit":"summary"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":7}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["delivery_enabled","plan","preparation_enabled","product_id","revision","schedule_enabled"],"co":{"id":"PUT /api/admin/healthrx/automation/config","source":"openapi3","version":2},"g":{},"k":"http","m":"PUT","o":"/api/admin/healthrx/automation/config","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"healthrx"},{"lit":"automation"},{"lit":"config"}],"t":{"req":{"delivery_enabled":"`reqdata.delivery_enabled`","plan":"`reqdata.plan`","preparation_enabled":"`reqdata.preparation_enabled`","product_id":"`reqdata.product_id`","revision":"`reqdata.revision`","schedule_enabled":"`reqdata.schedule_enabled`"},"res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.comment"],["$.main.kit.entity.video"]]},"key$":"admin_healthrx","name__orig":"admin_healthrx","Name":"AdminHealthrx","name_":"admin_healthrx","name-":"admin-healthrx","NAME":"ADMIN_HEALTHRX","index$":10}, {"active":true,"entity":"admin_healthrx","key$":"BasicAdminHealthrxFlow","kind":"basic","name":"BasicAdminHealthrxFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"admin_healthrx_ref01"},"m":{"kind":"kind01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"admin_healthrx_ref01","srcdatavar":"admin_healthrx_ref01_data","suffix":"_up0","textfield":"action"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-admin_healthrx_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"admin_healthrx_ref01","srcdatavar":"admin_healthrx_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-admin_healthrx_ref01"}}],"index$":2}]}, 'AdminHealthrx', {"POST /api/admin/healthrx/items/{kind}/{item_id}/decision":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"action":{"type":"string","enum":["approve","reject","retry","dismiss","resolve"],"title":"Action","key$":"action"},"version":{"type":"string","pattern":"^[a-f0-9]{32}$","title":"Version","key$":"version"},"reason":{"type":"string","maxLength":2000,"minLength":10,"title":"Reason","key$":"reason"}},"additionalProperties":false,"type":"object","required":["action","version","reason"],"title":"ReviewAction","x-ref":"#/components/schemas/ReviewAction","index$":1}}}},"parameters":[{"name":"kind","in":"path","required":true,"schema":{"enum":["comments","sources","profiles","content","policy","incidents"],"type":"string","title":"Kind"},"index$":0},{"name":"item_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"Item Id"},"index$":1}]},"POST /api/admin/healthrx/items/comments/{item_id}/selection":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"version":{"type":"string","pattern":"^[a-f0-9]{32}$","title":"Version","key$":"version"},"option_id":{"type":"string","pattern":"^option-[1-3]$","title":"Option Id","key$":"option_id"}},"additionalProperties":false,"type":"object","required":["version","option_id"],"title":"CandidateSelection","x-ref":"#/components/schemas/CandidateSelection","index$":1}}}},"parameters":[{"name":"item_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"Item Id"},"index$":0}]},"POST /api/admin/healthrx/videos/{source_id}/viewed":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"product_id":{"type":"string","format":"uuid","title":"Product Id","key$":"product_id"},"viewed":{"type":"boolean","title":"Viewed","key$":"viewed"}},"additionalProperties":false,"type":"object","required":["product_id","viewed"],"title":"VideoViewedRequest","x-ref":"#/components/schemas/VideoViewedRequest","index$":1}}}},"parameters":[{"name":"source_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"Source Id"},"index$":0}]},"POST /api/admin/healthrx/automation/runs":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"product_id":{"type":"string","format":"uuid","title":"Product Id","key$":"product_id"},"request_key":{"type":"string","maxLength":150,"minLength":8,"title":"Request Key","key$":"request_key"},"plan":{"properties":{"agent_ids":{"items":{"type":"string"},"type":"array","maxItems":500,"minItems":1,"title":"Agent Ids"},"day":{"type":"string","format":"date","title":"Day"},"keywords":{"items":{"type":"string"},"type":"array","maxItems":80,"minItems":1,"title":"Keywords"},"relevant_terms":{"items":{"type":"string"},"type":"array","maxItems":100,"minItems":1,"title":"Relevant Terms"},"discovery_policy":{"type":"string","enum":["legacy","inventory-v2"],"title":"Discovery Policy","default":"legacy"},"discovery_provider":{"type":"string","enum":["apify","scrapecreators"],"title":"Discovery Provider","default":"scrapecreators"},"discovery_apify_fallback":{"type":"boolean","title":"Discovery Apify Fallback","default":false},"media_refresh_provider":{"type":"string","enum":["source","scrapecreators","apify"],"title":"Media Refresh Provider","default":"source"},"scrapecreators_credit_budget":{"type":"integer","maximum":5000,"minimum":0,"title":"Scrapecreators Credit Budget","default":100},"discovery_pages_per_query":{"type":"integer","maximum":5,"minimum":1,"title":"Discovery Pages Per Query","default":2},"discovery_hashtags":{"items":{"type":"string"},"type":"array","maxItems":5,"title":"Discovery Hashtags"},"watch_min_views":{"type":"integer","minimum":0,"title":"Watch Min Views","default":3000},"apify_budget_usd":{"type":"number","maximum":10,"exclusiveMinimum":0,"title":"Apify Budget Usd","default":10},"kie_budget_usd":{"type":"number","maximum":20,"exclusiveMinimum":0,"title":"Kie Budget Usd","default":20},"writer_provider":{"type":"string","enum":["kie","openrouter"],"title":"Writer Provider","default":"kie"},"openrouter_budget_usd":{"type":"number","maximum":100,"exclusiveMinimum":0,"title":"Openrouter Budget Usd","default":4},"qa_enabled":{"type":"boolean","title":"Qa Enabled","default":true},"comments_per_agent":{"type":"integer","const":2,"title":"Comments Per Agent","default":2},"active_days_per_week":{"type":"integer","const":7,"title":"Active Days Per Week","default":7},"avatar_matching":{"type":"boolean","const":false,"title":"Avatar Matching","default":false},"human_review":{"type":"boolean","const":false,"title":"Human Review","default":false},"publishing_enabled":{"type":"boolean","const":false,"title":"Publishing Enabled","default":false},"queue_only":{"type":"boolean","const":true,"title":"Queue Only","default":true},"max_rounds":{"type":"integer","const":3,"title":"Max Rounds","default":3},"max_source_attempts":{"type":"integer","maximum":3,"minimum":1,"title":"Max Source Attempts","default":3},"max_raw_videos":{"type":"integer","maximum":4000,"minimum":20,"title":"Max Raw Videos","default":1400},"max_analyzed_videos":{"type":"integer","maximum":1000,"minimum":1,"title":"Max Analyzed Videos","default":150},"preferred_duration_seconds":{"type":"integer","maximum":120,"minimum":10,"title":"Preferred Duration Seconds","default":60},"max_duration_seconds":{"anyOf":[{},{}],"title":"Max Duration Seconds"},"min_views":{"type":"integer","minimum":0,"title":"Min Views","default":1000},"max_age_days":{"type":"integer","maximum":90,"minimum":1,"title":"Max Age Days","default":30},"search_interval_hours":{"type":"integer","maximum":24,"minimum":3,"title":"Search Interval Hours","default":6},"metrics_interval_hours":{"type":"integer","maximum":12,"minimum":1,"title":"Metrics Interval Hours","default":3},"max_metric_refreshes_per_run":{"type":"integer","maximum":200,"minimum":0,"title":"Max Metric Refreshes Per Run","default":20},"min_growth_views_per_hour":{"type":"number","maximum":10000,"exclusiveMinimum":0,"title":"Min Growth Views Per Hour","default":50},"min_growth_comments_per_hour":{"type":"number","maximum":100,"exclusiveMinimum":0,"title":"Min Growth Comments Per Hour","default":0.5},"creator_handles":{"items":{"type":"string"},"type":"array","maxItems":30,"title":"Creator Handles"},"analysis_model":{"type":"string","const":"gemini-3.8-flash","title":"Analysis Model","default":"gemini-3.8-flash"},"writer_model":{"type":"string","enum":["claude-sonnet-5","gpt-6-astra","gemini-3.1-pro"],"title":"Writer Model","default":"gpt-6-astra"},"reviewer_model":{"type":"string","const":"gemini-3.8-flash","title":"Reviewer Model","default":"gemini-3.8-flash"},"prefer_brand_mention":{"type":"boolean","title":"Prefer Brand Mention","default":true},"style_learning_enabled":{"type":"boolean","title":"Style Learning Enabled","default":false},"observation_windows":{"items":{"type":"string","enum":[]},"type":"array","title":"Observation Windows"}},"additionalProperties":false,"type":"object","required":["agent_ids","day","keywords","relevant_terms"],"title":"AutomationPlan","x-ref":"#/components/schemas/AutomationPlan","key$":"plan"}},"additionalProperties":false,"type":"object","required":["product_id","request_key","plan"],"title":"AutomationRunRequest","x-ref":"#/components/schemas/AutomationRunRequest","index$":1}}},"required":true},"parameters":[]},"GET /api/admin/healthrx/items/{kind}/{item_id}":{"protocol":"http","parameters":[{"name":"kind","in":"path","required":true,"schema":{"enum":["comments","sources","profiles","content","policy","incidents"],"type":"string","title":"Kind"},"index$":0},{"name":"item_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"Item Id"},"index$":1}]},"GET /api/admin/healthrx/automation":{"protocol":"http","parameters":[{"name":"product_id","in":"query","required":true,"schema":{"type":"string","format":"uuid","title":"Product Id"},"index$":0},{"name":"run_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"Run Id"},"index$":1}]},"GET /api/admin/healthrx/automation/config":{"protocol":"http","parameters":[{"name":"product_id","in":"query","required":true,"schema":{"type":"string","format":"uuid","title":"Product Id"},"index$":0}]},"GET /api/admin/healthrx/videos":{"protocol":"http","parameters":[{"name":"product_id","in":"query","required":true,"schema":{"type":"string","format":"uuid","title":"Product Id"},"index$":0},{"name":"day","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"date"},{"type":"null"}],"title":"Day"},"index$":1},{"name":"view","in":"query","required":false,"schema":{"enum":["all","unviewed","viewed"],"type":"string","default":"all","title":"View"},"index$":2},{"name":"offset","in":"query","required":false,"schema":{"type":"integer","minimum":0,"default":0,"title":"Offset"},"index$":3},{"name":"limit","in":"query","required":false,"schema":{"type":"integer","maximum":100,"minimum":1,"default":30,"title":"Limit"},"index$":4}]},"GET /api/admin/healthrx/customers":{"protocol":"http","parameters":[]},"GET /api/admin/healthrx/inbox":{"protocol":"http","parameters":[{"name":"kind","in":"query","required":false,"schema":{"enum":["comments","sources","profiles","content","policy","incidents"],"type":"string","default":"comments","title":"Kind"},"index$":0},{"name":"product_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"Product Id"},"index$":1},{"name":"user_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"User Id"},"index$":2},{"name":"view","in":"query","required":false,"schema":{"enum":["pending","all","needs_review","ai_passed","published","history"],"type":"string","default":"pending","title":"View"},"index$":3},{"name":"offset","in":"query","required":false,"schema":{"type":"integer","maximum":100000,"minimum":0,"default":0,"title":"Offset"},"index$":4},{"name":"limit","in":"query","required":false,"schema":{"type":"integer","maximum":100,"minimum":1,"default":25,"title":"Limit"},"index$":5}]},"GET /api/admin/healthrx/products":{"protocol":"http","parameters":[{"name":"search","in":"query","required":false,"schema":{"type":"string","maxLength":100,"default":"","title":"Search"},"index$":0},{"name":"user_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"User Id"},"index$":1}]},"GET /api/admin/healthrx/summary":{"protocol":"http","parameters":[{"name":"product_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"Product Id"},"index$":0},{"name":"user_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"User Id"},"index$":1}]},"PUT /api/admin/healthrx/automation/config":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"product_id":{"type":"string","format":"uuid","title":"Product Id","key$":"product_id"},"revision":{"type":"integer","minimum":0,"title":"Revision","key$":"revision"},"plan":{"properties":{"agent_ids":{"items":{"type":"string"},"type":"array","maxItems":500,"minItems":1,"title":"Agent Ids"},"day":{"type":"string","format":"date","title":"Day"},"keywords":{"items":{"type":"string"},"type":"array","maxItems":80,"minItems":1,"title":"Keywords"},"relevant_terms":{"items":{"type":"string"},"type":"array","maxItems":100,"minItems":1,"title":"Relevant Terms"},"discovery_policy":{"type":"string","enum":["legacy","inventory-v2"],"title":"Discovery Policy","default":"legacy"},"discovery_provider":{"type":"string","enum":["apify","scrapecreators"],"title":"Discovery Provider","default":"scrapecreators"},"discovery_apify_fallback":{"type":"boolean","title":"Discovery Apify Fallback","default":false},"media_refresh_provider":{"type":"string","enum":["source","scrapecreators","apify"],"title":"Media Refresh Provider","default":"source"},"scrapecreators_credit_budget":{"type":"integer","maximum":5000,"minimum":0,"title":"Scrapecreators Credit Budget","default":100},"discovery_pages_per_query":{"type":"integer","maximum":5,"minimum":1,"title":"Discovery Pages Per Query","default":2},"discovery_hashtags":{"items":{"type":"string"},"type":"array","maxItems":5,"title":"Discovery Hashtags"},"watch_min_views":{"type":"integer","minimum":0,"title":"Watch Min Views","default":3000},"apify_budget_usd":{"type":"number","maximum":10,"exclusiveMinimum":0,"title":"Apify Budget Usd","default":10},"kie_budget_usd":{"type":"number","maximum":20,"exclusiveMinimum":0,"title":"Kie Budget Usd","default":20},"writer_provider":{"type":"string","enum":["kie","openrouter"],"title":"Writer Provider","default":"kie"},"openrouter_budget_usd":{"type":"number","maximum":100,"exclusiveMinimum":0,"title":"Openrouter Budget Usd","default":4},"qa_enabled":{"type":"boolean","title":"Qa Enabled","default":true},"comments_per_agent":{"type":"integer","const":2,"title":"Comments Per Agent","default":2},"active_days_per_week":{"type":"integer","const":7,"title":"Active Days Per Week","default":7},"avatar_matching":{"type":"boolean","const":false,"title":"Avatar Matching","default":false},"human_review":{"type":"boolean","const":false,"title":"Human Review","default":false},"publishing_enabled":{"type":"boolean","const":false,"title":"Publishing Enabled","default":false},"queue_only":{"type":"boolean","const":true,"title":"Queue Only","default":true},"max_rounds":{"type":"integer","const":3,"title":"Max Rounds","default":3},"max_source_attempts":{"type":"integer","maximum":3,"minimum":1,"title":"Max Source Attempts","default":3},"max_raw_videos":{"type":"integer","maximum":4000,"minimum":20,"title":"Max Raw Videos","default":1400},"max_analyzed_videos":{"type":"integer","maximum":1000,"minimum":1,"title":"Max Analyzed Videos","default":150},"preferred_duration_seconds":{"type":"integer","maximum":120,"minimum":10,"title":"Preferred Duration Seconds","default":60},"max_duration_seconds":{"anyOf":[{},{}],"title":"Max Duration Seconds"},"min_views":{"type":"integer","minimum":0,"title":"Min Views","default":1000},"max_age_days":{"type":"integer","maximum":90,"minimum":1,"title":"Max Age Days","default":30},"search_interval_hours":{"type":"integer","maximum":24,"minimum":3,"title":"Search Interval Hours","default":6},"metrics_interval_hours":{"type":"integer","maximum":12,"minimum":1,"title":"Metrics Interval Hours","default":3},"max_metric_refreshes_per_run":{"type":"integer","maximum":200,"minimum":0,"title":"Max Metric Refreshes Per Run","default":20},"min_growth_views_per_hour":{"type":"number","maximum":10000,"exclusiveMinimum":0,"title":"Min Growth Views Per Hour","default":50},"min_growth_comments_per_hour":{"type":"number","maximum":100,"exclusiveMinimum":0,"title":"Min Growth Comments Per Hour","default":0.5},"creator_handles":{"items":{"type":"string"},"type":"array","maxItems":30,"title":"Creator Handles"},"analysis_model":{"type":"string","const":"gemini-3.8-flash","title":"Analysis Model","default":"gemini-3.8-flash"},"writer_model":{"type":"string","enum":["claude-sonnet-5","gpt-6-astra","gemini-3.1-pro"],"title":"Writer Model","default":"gpt-6-astra"},"reviewer_model":{"type":"string","const":"gemini-3.8-flash","title":"Reviewer Model","default":"gemini-3.8-flash"},"prefer_brand_mention":{"type":"boolean","title":"Prefer Brand Mention","default":true},"style_learning_enabled":{"type":"boolean","title":"Style Learning Enabled","default":false},"observation_windows":{"items":{"type":"string","enum":[]},"type":"array","title":"Observation Windows"}},"additionalProperties":false,"type":"object","required":["agent_ids","day","keywords","relevant_terms"],"title":"AutomationPlan","x-ref":"#/components/schemas/AutomationPlan","key$":"plan"},"schedule_enabled":{"type":"boolean","title":"Schedule Enabled","default":false,"key$":"schedule_enabled"},"preparation_enabled":{"type":"boolean","title":"Preparation Enabled","default":false,"key$":"preparation_enabled"},"delivery_enabled":{"type":"boolean","title":"Delivery Enabled","default":false,"key$":"delivery_enabled"}},"additionalProperties":false,"type":"object","required":["product_id","revision","plan"],"title":"AutomationConfigRequest","x-ref":"#/components/schemas/AutomationConfigRequest","index$":1}}}},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const admin_healthrx_ref01_ent = client.AdminHealthrx()
    let admin_healthrx_ref01_data = setup.data.new.admin_healthrx['admin_healthrx_ref01']
    admin_healthrx_ref01_data['kind'] = setup.idmap['kind01']

    admin_healthrx_ref01_data = (await admin_healthrx_ref01_ent.create(admin_healthrx_ref01_data)).data()
    assert(null != admin_healthrx_ref01_data.id)


    // UPDATE
    const admin_healthrx_ref01_data_up0: any = {}
    admin_healthrx_ref01_data_up0.id = admin_healthrx_ref01_data.id

    const admin_healthrx_ref01_markdef_up0 = { name: 'action', value: 'Mark01-admin_healthrx_ref01_' + setup.now }
    ;(admin_healthrx_ref01_data_up0 as any)[admin_healthrx_ref01_markdef_up0.name] = admin_healthrx_ref01_markdef_up0.value

    const admin_healthrx_ref01_resdata_up0 = (await admin_healthrx_ref01_ent.update(admin_healthrx_ref01_data_up0)).data()
    assert(admin_healthrx_ref01_resdata_up0.id === admin_healthrx_ref01_data_up0.id)

    assert((admin_healthrx_ref01_resdata_up0 as any)[admin_healthrx_ref01_markdef_up0.name] === admin_healthrx_ref01_markdef_up0.value)


    // LOAD
    const admin_healthrx_ref01_match_dt0: any = {}
    admin_healthrx_ref01_match_dt0.id = admin_healthrx_ref01_data.id
    const admin_healthrx_ref01_data_dt0 = (await admin_healthrx_ref01_ent.load(admin_healthrx_ref01_match_dt0)).data()
    assert(admin_healthrx_ref01_data_dt0.id === admin_healthrx_ref01_data.id)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/admin_healthrx/AdminHealthrxTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CrackedApiReferenceSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['admin_healthrx01','admin_healthrx02','admin_healthrx03','comment01','comment02','comment03','video01','video02','video03','kind01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_ADMIN_HEALTHRX_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_ADMIN_HEALTHRX_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_ADMIN_HEALTHRX_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CrackedApiReferenceSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
