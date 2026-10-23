

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


describe('StatsRefreshOverviewEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.StatsRefreshOverview()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('stats_refresh_overview hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of CrackedApiReferenceSDK.test(offline).StatsRefreshOverview().stream('list')) { }
    }, /offline/)

    for await (const _item of CrackedApiReferenceSDK.test(offline).StatsRefreshOverview()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.StatsRefreshOverview().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of CrackedApiReferenceSDK.test().StatsRefreshOverview().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.StatsRefreshOverview().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.StatsRefreshOverview().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'stats_refresh_overview.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active_run":{"a":true,"h":"Active Run","n":"active_run","r":false,"t":"`$ANY`","key$":"active_run","index$":0},"aged_over_24h":{"a":true,"h":"Aged Over 24h","n":"aged_over_24h","r":true,"t":"`$INTEGER`","key$":"aged_over_24h","index$":1},"backlog_preview":{"a":true,"h":"Backlog Preview","n":"backlog_preview","r":true,"t":"`$ARRAY`","key$":"backlog_preview","index$":2},"coverage_percent":{"a":true,"h":"Coverage Percent","n":"coverage_percent","r":true,"t":"`$NUMBER`","key$":"coverage_percent","index$":3},"customer_counts":{"a":true,"h":"Customer Counts","n":"customer_counts","r":true,"t":"`$OBJECT`","key$":"customer_counts","index$":4},"date":{"a":true,"h":"Date","n":"date","r":true,"t":"`$STRING`","key$":"date","index$":5},"generated_at":{"a":true,"h":"Generated At","n":"generated_at","r":true,"t":"`$STRING`","key$":"generated_at","index$":6},"method_counts":{"a":true,"h":"Method Counts","n":"method_counts","r":true,"t":"`$OBJECT`","key$":"method_counts","index$":7},"platform_counts":{"a":true,"h":"Platform Counts","n":"platform_counts","r":true,"t":"`$OBJECT`","key$":"platform_counts","index$":8},"platform_units_resolved":{"a":true,"h":"Platform Units Resolved","n":"platform_units_resolved","r":true,"t":"`$INTEGER`","key$":"platform_units_resolved","index$":9},"platform_units_total":{"a":true,"h":"Platform Units Total","n":"platform_units_total","r":true,"t":"`$INTEGER`","key$":"platform_units_total","index$":10},"platform_units_unresolved":{"a":true,"h":"Platform Units Unresolved","n":"platform_units_unresolved","r":true,"t":"`$INTEGER`","key$":"platform_units_unresolved","index$":11},"posted_entries":{"a":true,"h":"Posted Entries","n":"posted_entries","r":true,"t":"`$INTEGER`","key$":"posted_entries","index$":12},"reason_counts":{"a":true,"h":"Reason Counts","n":"reason_counts","r":true,"t":"`$OBJECT`","key$":"reason_counts","index$":13},"sla_deadline_et":{"a":true,"h":"Sla Deadline Et","n":"sla_deadline_et","r":true,"t":"`$STRING`","key$":"sla_deadline_et","index$":14},"stale_after_sla":{"a":true,"h":"Stale After Sla","n":"stale_after_sla","r":true,"t":"`$INTEGER`","key$":"stale_after_sla","index$":15},"top_affected_customers":{"a":true,"h":"Top Affected Customers","n":"top_affected_customers","r":true,"t":"`$ARRAY`","key$":"top_affected_customers","index$":16}},"name":"stats_refresh_overview","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/admin/customer-health/overview","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"date","or":"date","r":false,"t":"`$ANY`","index$":0}]},"k":"http","m":"GET","o":"/api/admin/customer-health/overview","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"customer-health"},{"lit":"overview"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"stats_refresh_overview","name__orig":"stats_refresh_overview","Name":"StatsRefreshOverview","name_":"stats_refresh_overview","name-":"stats-refresh-overview","NAME":"STATS_REFRESH_OVERVIEW","index$":151}, {"active":true,"entity":"stats_refresh_overview","key$":"BasicStatsRefreshOverviewFlow","kind":"basic","name":"BasicStatsRefreshOverviewFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"stats_refresh_overview_ref01"}}],"index$":0}]}, 'StatsRefreshOverview', {"GET /api/admin/customer-health/overview":{"protocol":"http","parameters":[{"name":"date","in":"query","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"description":"Date in YYYY-MM-DD format (America/New_York). Defaults to yesterday.","title":"Date"},"description":"Date in YYYY-MM-DD format (America/New_York). Defaults to yesterday.","index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let stats_refresh_overview_ref01_data = Object.values(setup.data.existing.stats_refresh_overview)[0] as any

    // LIST
    const stats_refresh_overview_ref01_ent = client.StatsRefreshOverview()
    const stats_refresh_overview_ref01_match: any = {}

    const stats_refresh_overview_ref01_list = (await stats_refresh_overview_ref01_ent.list(stats_refresh_overview_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/stats_refresh_overview/StatsRefreshOverviewTestData.json')

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
    ['stats_refresh_overview01','stats_refresh_overview02','stats_refresh_overview03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_STATS_REFRESH_OVERVIEW_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_STATS_REFRESH_OVERVIEW_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_STATS_REFRESH_OVERVIEW_ENTID']
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
  
