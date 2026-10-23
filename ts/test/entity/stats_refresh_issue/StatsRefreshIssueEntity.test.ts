

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


describe('StatsRefreshIssueEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.StatsRefreshIssue()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('stats_refresh_issue hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of CrackedApiReferenceSDK.test(offline).StatsRefreshIssue().stream('list')) { }
    }, /offline/)

    for await (const _item of CrackedApiReferenceSDK.test(offline).StatsRefreshIssue()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.StatsRefreshIssue().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of CrackedApiReferenceSDK.test().StatsRefreshIssue().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.StatsRefreshIssue().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.StatsRefreshIssue().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.StatsRefreshIssue().list({"limit":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'stats_refresh_issue.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"aged_over_24h":{"a":true,"h":"Aged Over 24h","n":"aged_over_24h","r":true,"t":"`$BOOLEAN`","key$":"aged_over_24h","index$":0},"agent_id":{"a":true,"h":"Agent Id","n":"agent_id","r":false,"t":"`$STRING`","key$":"agent_id","index$":1},"agent_name_snapshot":{"a":true,"h":"Agent Name Snapshot","n":"agent_name_snapshot","r":false,"t":"`$ANY`","key$":"agent_name_snapshot","index$":2},"first_detected_at":{"a":true,"fo":"date-time","h":"First Detected At","n":"first_detected_at","r":true,"t":"`$STRING`","key$":"first_detected_at","index$":3},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":4},"last_detected_at":{"a":true,"fo":"date-time","h":"Last Detected At","n":"last_detected_at","r":true,"t":"`$STRING`","key$":"last_detected_at","index$":5},"last_refresh_completed_at":{"a":true,"h":"Last Refresh Completed At","n":"last_refresh_completed_at","r":false,"t":"`$ANY`","key$":"last_refresh_completed_at","index$":6},"last_seen_run_id":{"a":true,"h":"Last Seen Run Id","n":"last_seen_run_id","r":false,"t":"`$STRING`","key$":"last_seen_run_id","index$":7},"latest_error_message":{"a":true,"h":"Latest Error Message","n":"latest_error_message","r":false,"t":"`$ANY`","key$":"latest_error_message","index$":8},"next_retry_at":{"a":true,"h":"Next Retry At","n":"next_retry_at","r":false,"t":"`$ANY`","key$":"next_retry_at","index$":9},"platform":{"a":true,"h":"Platform","n":"platform","r":true,"t":"`$STRING`","key$":"platform","index$":10},"post_method":{"a":true,"h":"Post Method","n":"post_method","r":false,"t":"`$ANY`","key$":"post_method","index$":11},"post_url":{"a":true,"h":"Post Url","n":"post_url","r":false,"t":"`$ANY`","key$":"post_url","index$":12},"posted_date_et":{"a":true,"fo":"date","h":"Posted Date Et","n":"posted_date_et","r":true,"t":"`$STRING`","key$":"posted_date_et","index$":13},"product_id":{"a":true,"h":"Product Id","n":"product_id","r":false,"t":"`$STRING`","key$":"product_id","index$":14},"product_name_snapshot":{"a":true,"h":"Product Name Snapshot","n":"product_name_snapshot","r":false,"t":"`$ANY`","key$":"product_name_snapshot","index$":15},"reason_code":{"a":true,"h":"Reason Code","n":"reason_code","r":true,"t":"`$STRING`","key$":"reason_code","index$":16},"resolved_at":{"a":true,"h":"Resolved At","n":"resolved_at","r":false,"t":"`$ANY`","key$":"resolved_at","index$":17},"retry_count":{"a":true,"h":"Retry Count","n":"retry_count","r":true,"t":"`$INTEGER`","key$":"retry_count","index$":18},"schedule_queue_id":{"a":true,"h":"Schedule Queue Id","n":"schedule_queue_id","r":false,"t":"`$STRING`","key$":"schedule_queue_id","index$":19},"scheduled_datetime_utc":{"a":true,"fo":"date-time","h":"Scheduled Datetime Utc","n":"scheduled_datetime_utc","r":true,"t":"`$STRING`","key$":"scheduled_datetime_utc","index$":20},"stale_after_sla":{"a":true,"h":"Stale After Sla","n":"stale_after_sla","r":true,"t":"`$BOOLEAN`","key$":"stale_after_sla","index$":21},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":22},"user_email_snapshot":{"a":true,"h":"User Email Snapshot","n":"user_email_snapshot","r":true,"t":"`$STRING`","key$":"user_email_snapshot","index$":23},"user_id":{"a":true,"fo":"uuid","h":"User Id","n":"user_id","r":true,"t":"`$STRING`","key$":"user_id","index$":24}},"id":{"field":"id","name":"id"},"name":"stats_refresh_issue","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/admin/customer-health/issues","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"date_from","or":"date_from","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"date_to","or":"date_to","r":false,"t":"`$ANY`","index$":1},{"a":true,"ex":100,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"platform","or":"platform","r":false,"t":"`$ANY`","index$":4},{"a":true,"k":"query","n":"posting_method","or":"posting_method","r":false,"t":"`$ANY`","index$":5},{"a":true,"k":"query","n":"query","or":"query","r":false,"t":"`$ANY`","index$":6},{"a":true,"k":"query","n":"reason","or":"reason","r":false,"t":"`$ANY`","index$":7},{"a":true,"ex":"open","k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":8}]},"k":"http","m":"GET","o":"/api/admin/customer-health/issues","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"customer-health"},{"lit":"issues"}],"t":{"req":"`reqdata`","res":"`body.issues`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"stats_refresh_issue","name__orig":"stats_refresh_issue","Name":"StatsRefreshIssue","name_":"stats_refresh_issue","name-":"stats-refresh-issue","NAME":"STATS_REFRESH_ISSUE","index$":150}, {"active":true,"entity":"stats_refresh_issue","key$":"BasicStatsRefreshIssueFlow","kind":"basic","name":"BasicStatsRefreshIssueFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"stats_refresh_issue_ref01"}}],"index$":0}]}, 'StatsRefreshIssue', {"GET /api/admin/customer-health/issues":{"protocol":"http","parameters":[{"name":"status","in":"query","required":false,"schema":{"type":"string","default":"open","title":"Status"},"index$":0},{"name":"date_from","in":"query","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"description":"Inclusive posted ET date in YYYY-MM-DD format.","title":"Date From"},"description":"Inclusive posted ET date in YYYY-MM-DD format.","index$":1},{"name":"date_to","in":"query","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"description":"Inclusive posted ET date in YYYY-MM-DD format.","title":"Date To"},"description":"Inclusive posted ET date in YYYY-MM-DD format.","index$":2},{"name":"reason","in":"query","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Reason"},"index$":3},{"name":"platform","in":"query","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Platform"},"index$":4},{"name":"posting_method","in":"query","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Posting Method"},"index$":5},{"name":"query","in":"query","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Query"},"index$":6},{"name":"limit","in":"query","required":false,"schema":{"type":"integer","maximum":500,"minimum":1,"default":100,"title":"Limit"},"index$":7},{"name":"offset","in":"query","required":false,"schema":{"type":"integer","minimum":0,"default":0,"title":"Offset"},"index$":8}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let stats_refresh_issue_ref01_data = Object.values(setup.data.existing.stats_refresh_issue)[0] as any

    // LIST
    const stats_refresh_issue_ref01_ent = client.StatsRefreshIssue()
    const stats_refresh_issue_ref01_match: any = {}

    const stats_refresh_issue_ref01_list = (await stats_refresh_issue_ref01_ent.list(stats_refresh_issue_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/stats_refresh_issue/StatsRefreshIssueTestData.json')

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
    ['stats_refresh_issue01','stats_refresh_issue02','stats_refresh_issue03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_STATS_REFRESH_ISSUE_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_STATS_REFRESH_ISSUE_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_STATS_REFRESH_ISSUE_ENTID']
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
  
