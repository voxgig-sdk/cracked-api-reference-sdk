

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


describe('StatsRefreshRunSummaryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.StatsRefreshRunSummary()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('stats_refresh_run_summary hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of CrackedApiReferenceSDK.test(offline).StatsRefreshRunSummary().stream('list')) { }
    }, /offline/)

    for await (const _item of CrackedApiReferenceSDK.test(offline).StatsRefreshRunSummary()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.StatsRefreshRunSummary().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of CrackedApiReferenceSDK.test().StatsRefreshRunSummary().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.StatsRefreshRunSummary().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.StatsRefreshRunSummary().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.StatsRefreshRunSummary().list({"include_global":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'stats_refresh_run_summary.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"celery_task_id":{"a":true,"h":"Celery Task Id","n":"celery_task_id","r":false,"t":"`$STRING`","key$":"celery_task_id","index$":0},"completed_at":{"a":true,"h":"Completed At","n":"completed_at","r":false,"t":"`$ANY`","key$":"completed_at","index$":1},"entries_failed":{"a":true,"h":"Entries Failed","n":"entries_failed","r":true,"t":"`$INTEGER`","key$":"entries_failed","index$":2},"entries_skipped":{"a":true,"h":"Entries Skipped","n":"entries_skipped","r":true,"t":"`$INTEGER`","key$":"entries_skipped","index$":3},"entries_total":{"a":true,"h":"Entries Total","n":"entries_total","r":true,"t":"`$INTEGER`","key$":"entries_total","index$":4},"entries_updated":{"a":true,"h":"Entries Updated","n":"entries_updated","r":true,"t":"`$INTEGER`","key$":"entries_updated","index$":5},"error_summary_json":{"a":true,"h":"Error Summary Json","n":"error_summary_json","r":false,"t":"`$ANY`","key$":"error_summary_json","index$":6},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":7},"issues_opened":{"a":true,"h":"Issues Opened","n":"issues_opened","r":true,"t":"`$INTEGER`","key$":"issues_opened","index$":8},"issues_resolved":{"a":true,"h":"Issues Resolved","n":"issues_resolved","r":true,"t":"`$INTEGER`","key$":"issues_resolved","index$":9},"platform_units_resolved":{"a":true,"h":"Platform Units Resolved","n":"platform_units_resolved","r":true,"t":"`$INTEGER`","key$":"platform_units_resolved","index$":10},"platform_units_total":{"a":true,"h":"Platform Units Total","n":"platform_units_total","r":true,"t":"`$INTEGER`","key$":"platform_units_total","index$":11},"platform_units_unresolved":{"a":true,"h":"Platform Units Unresolved","n":"platform_units_unresolved","r":true,"t":"`$INTEGER`","key$":"platform_units_unresolved","index$":12},"platform_updates_via_profile":{"a":true,"h":"Platform Updates Via Profile","n":"platform_updates_via_profile","r":true,"t":"`$INTEGER`","key$":"platform_updates_via_profile","index$":13},"platform_updates_via_url":{"a":true,"h":"Platform Updates Via Url","n":"platform_updates_via_url","r":true,"t":"`$INTEGER`","key$":"platform_updates_via_url","index$":14},"provider":{"a":true,"h":"Provider","n":"provider","r":false,"t":"`$ANY`","key$":"provider","index$":15},"refresh_trigger":{"a":true,"h":"Refresh Trigger","n":"refresh_trigger","r":false,"t":"`$ANY`","key$":"refresh_trigger","index$":16},"requested_by_email":{"a":true,"h":"Requested By Email","n":"requested_by_email","r":false,"t":"`$ANY`","key$":"requested_by_email","index$":17},"run_type":{"a":true,"h":"Run Type","n":"run_type","r":true,"t":"`$STRING`","key$":"run_type","index$":18},"started_at":{"a":true,"fo":"date-time","h":"Started At","n":"started_at","r":true,"t":"`$STRING`","key$":"started_at","index$":19},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":20},"target_date_et":{"a":true,"h":"Target Date Et","n":"target_date_et","r":false,"t":"`$ANY`","key$":"target_date_et","index$":21},"users_count":{"a":true,"h":"Users Count","n":"users_count","r":true,"t":"`$INTEGER`","key$":"users_count","index$":22}},"id":{"field":"id","name":"id"},"name":"stats_refresh_run_summary","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/admin/customer-health/runs","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"date_from","or":"date_from","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"date_to","or":"date_to","r":false,"t":"`$ANY`","index$":1},{"a":true,"ex":false,"k":"query","n":"include_global","or":"include_global","r":false,"t":"`$BOOLEAN`","index$":2},{"a":true,"ex":50,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"query","n":"run_type","or":"run_type","r":false,"t":"`$ANY`","index$":5},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$ANY`","index$":6}]},"k":"http","m":"GET","o":"/api/admin/customer-health/runs","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"customer-health"},{"lit":"runs"}],"t":{"req":"`reqdata`","res":"`body.runs`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"stats_refresh_run_summary","name__orig":"stats_refresh_run_summary","Name":"StatsRefreshRunSummary","name_":"stats_refresh_run_summary","name-":"stats-refresh-run-summary","NAME":"STATS_REFRESH_RUN_SUMMARY","index$":152}, {"active":true,"entity":"stats_refresh_run_summary","key$":"BasicStatsRefreshRunSummaryFlow","kind":"basic","name":"BasicStatsRefreshRunSummaryFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"stats_refresh_run_summary_ref01"}}],"index$":0}]}, 'StatsRefreshRunSummary', {"GET /api/admin/customer-health/runs":{"protocol":"http","parameters":[{"name":"date_from","in":"query","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"description":"Inclusive target ET date in YYYY-MM-DD format.","title":"Date From"},"description":"Inclusive target ET date in YYYY-MM-DD format.","index$":0},{"name":"date_to","in":"query","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"description":"Inclusive target ET date in YYYY-MM-DD format.","title":"Date To"},"description":"Inclusive target ET date in YYYY-MM-DD format.","index$":1},{"name":"status","in":"query","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Status"},"index$":2},{"name":"run_type","in":"query","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Run Type"},"index$":3},{"name":"include_global","in":"query","required":false,"schema":{"type":"boolean","description":"When true, include global backfill and retry runs with no target date.","default":false,"title":"Include Global"},"description":"When true, include global backfill and retry runs with no target date.","index$":4},{"name":"limit","in":"query","required":false,"schema":{"type":"integer","maximum":200,"minimum":1,"default":50,"title":"Limit"},"index$":5},{"name":"offset","in":"query","required":false,"schema":{"type":"integer","minimum":0,"default":0,"title":"Offset"},"index$":6}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let stats_refresh_run_summary_ref01_data = Object.values(setup.data.existing.stats_refresh_run_summary)[0] as any

    // LIST
    const stats_refresh_run_summary_ref01_ent = client.StatsRefreshRunSummary()
    const stats_refresh_run_summary_ref01_match: any = {}

    const stats_refresh_run_summary_ref01_list = (await stats_refresh_run_summary_ref01_ent.list(stats_refresh_run_summary_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/stats_refresh_run_summary/StatsRefreshRunSummaryTestData.json')

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
    ['stats_refresh_run_summary01','stats_refresh_run_summary02','stats_refresh_run_summary03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_STATS_REFRESH_RUN_SUMMARY_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_STATS_REFRESH_RUN_SUMMARY_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_STATS_REFRESH_RUN_SUMMARY_ENTID']
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
  
