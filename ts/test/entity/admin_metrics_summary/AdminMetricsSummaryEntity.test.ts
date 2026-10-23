

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


describe('AdminMetricsSummaryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.AdminMetricsSummary()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('admin_metrics_summary hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of CrackedApiReferenceSDK.test(offline).AdminMetricsSummary().stream('list')) { }
    }, /offline/)

    for await (const _item of CrackedApiReferenceSDK.test(offline).AdminMetricsSummary()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.AdminMetricsSummary().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of CrackedApiReferenceSDK.test().AdminMetricsSummary().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.AdminMetricsSummary().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.AdminMetricsSummary().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AdminMetricsSummary().list({"date_filter":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'admin_metrics_summary.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"paid_users_by_level":{"a":true,"h":"Paid Users By Level","n":"paid_users_by_level","r":true,"t":"`$ARRAY`","key$":"paid_users_by_level","index$":0},"total_cancellations":{"a":true,"h":"Total Cancellations","n":"total_cancellations","r":true,"t":"`$INTEGER`","key$":"total_cancellations","index$":1},"total_previews_generated":{"a":true,"h":"Total Previews Generated","n":"total_previews_generated","r":true,"t":"`$INTEGER`","key$":"total_previews_generated","index$":2},"total_signups":{"a":true,"h":"Total Signups","n":"total_signups","r":true,"t":"`$INTEGER`","key$":"total_signups","index$":3},"total_videos_generated":{"a":true,"h":"Total Videos Generated","n":"total_videos_generated","r":true,"t":"`$INTEGER`","key$":"total_videos_generated","index$":4},"url_attempts":{"a":true,"h":"Url Attempts","n":"url_attempts","r":true,"t":"`$INTEGER`","key$":"url_attempts","index$":5},"user_credits":{"a":true,"h":"User Credits","n":"user_credits","r":true,"t":"`$ARRAY`","key$":"user_credits","index$":6},"user_gifted_credits":{"a":true,"h":"User Gifted Credits","n":"user_gifted_credits","r":true,"t":"`$ARRAY`","key$":"user_gifted_credits","index$":7}},"name":"admin_metrics_summary","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/admin/metrics/summary","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"all_time","k":"query","n":"date_filter","or":"date_filter","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/admin/metrics/summary","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"metrics"},{"lit":"summary"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"admin_metrics_summary","name__orig":"admin_metrics_summary","Name":"AdminMetricsSummary","name_":"admin_metrics_summary","name-":"admin-metrics-summary","NAME":"ADMIN_METRICS_SUMMARY","index$":13}, {"active":true,"entity":"admin_metrics_summary","key$":"BasicAdminMetricsSummaryFlow","kind":"basic","name":"BasicAdminMetricsSummaryFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"admin_metrics_summary_ref01"}}],"index$":0}]}, 'AdminMetricsSummary', {"GET /api/admin/metrics/summary":{"protocol":"http","parameters":[{"name":"date_filter","in":"query","required":false,"schema":{"type":"string","description":"Date filter for metrics","default":"all_time","title":"Date Filter"},"description":"Date filter for metrics","index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let admin_metrics_summary_ref01_data = Object.values(setup.data.existing.admin_metrics_summary)[0] as any

    // LIST
    const admin_metrics_summary_ref01_ent = client.AdminMetricsSummary()
    const admin_metrics_summary_ref01_match: any = {}

    const admin_metrics_summary_ref01_list = (await admin_metrics_summary_ref01_ent.list(admin_metrics_summary_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/admin_metrics_summary/AdminMetricsSummaryTestData.json')

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
    ['admin_metrics_summary01','admin_metrics_summary02','admin_metrics_summary03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_ADMIN_METRICS_SUMMARY_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_ADMIN_METRICS_SUMMARY_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_ADMIN_METRICS_SUMMARY_ENTID']
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
  
