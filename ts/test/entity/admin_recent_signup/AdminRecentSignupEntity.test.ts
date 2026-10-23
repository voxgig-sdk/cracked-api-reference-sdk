

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


describe('AdminRecentSignupEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.AdminRecentSignup()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('admin_recent_signup hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of CrackedApiReferenceSDK.test(offline).AdminRecentSignup().stream('list')) { }
    }, /offline/)

    for await (const _item of CrackedApiReferenceSDK.test(offline).AdminRecentSignup()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.AdminRecentSignup().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of CrackedApiReferenceSDK.test().AdminRecentSignup().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.AdminRecentSignup().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.AdminRecentSignup().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AdminRecentSignup().list({"created_at":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'admin_recent_signup.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"t":"`$STRING`","key$":"created_at","index$":0},"current_step":{"a":true,"h":"Current Step","n":"current_step","r":true,"t":"`$STRING`","key$":"current_step","index$":1},"email":{"a":true,"h":"Email","n":"email","r":false,"t":"`$STRING`","key$":"email","index$":2},"email_source":{"a":true,"h":"Email Source","n":"email_source","r":false,"t":"`$ANY`","key$":"email_source","index$":3},"error_message":{"a":true,"h":"Error Message","n":"error_message","r":false,"t":"`$ANY`","key$":"error_message","index$":4},"flow_variant":{"a":true,"h":"Flow Variant","n":"flow_variant","r":true,"t":"`$STRING`","key$":"flow_variant","index$":5},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":6},"inactive_minutes":{"a":true,"h":"Inactive Minutes","n":"inactive_minutes","r":true,"t":"`$INTEGER`","key$":"inactive_minutes","index$":7},"last_notification_at":{"a":true,"h":"Last Notification At","n":"last_notification_at","r":false,"t":"`$ANY`","key$":"last_notification_at","index$":8},"last_seen_at":{"a":true,"fo":"date-time","h":"Last Seen At","n":"last_seen_at","r":true,"t":"`$STRING`","key$":"last_seen_at","index$":9},"likely_cause":{"a":true,"h":"Likely Cause","n":"likely_cause","r":true,"t":"`$STRING`","key$":"likely_cause","index$":10},"notification_count":{"a":true,"h":"Notification Count","n":"notification_count","r":true,"t":"`$INTEGER`","key$":"notification_count","index$":11},"notification_events":{"a":true,"h":"Notification Events","n":"notification_events","r":true,"t":"`$ARRAY`","key$":"notification_events","index$":12},"product_id":{"a":true,"h":"Product Id","n":"product_id","r":false,"t":"`$STRING`","key$":"product_id","index$":13},"product_name":{"a":true,"h":"Product Name","n":"product_name","r":false,"t":"`$ANY`","key$":"product_name","index$":14},"product_url":{"a":true,"h":"Product Url","n":"product_url","r":true,"t":"`$STRING`","key$":"product_url","index$":15},"severity":{"a":true,"h":"Severity","n":"severity","r":true,"t":"`$STRING`","key$":"severity","index$":16},"social_scan_status":{"a":true,"h":"Social Scan Status","n":"social_scan_status","r":false,"t":"`$ANY`","key$":"social_scan_status","index$":17},"stage_label":{"a":true,"h":"Stage Label","n":"stage_label","r":true,"t":"`$STRING`","key$":"stage_label","index$":18},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":19},"updated_at":{"a":true,"h":"Updated At","n":"updated_at","r":false,"t":"`$ANY`","key$":"updated_at","index$":20},"website_scrape_status":{"a":true,"h":"Website Scrape Status","n":"website_scrape_status","r":false,"t":"`$ANY`","key$":"website_scrape_status","index$":21}},"id":{"field":"id","name":"id"},"name":"admin_recent_signup","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/admin/insights/recent-signups","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/admin/insights/recent-signups","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"insights"},{"lit":"recent-signups"}],"t":{"req":"`reqdata`","res":"`body.recent_signups`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"admin_recent_signup","name__orig":"admin_recent_signup","Name":"AdminRecentSignup","name_":"admin_recent_signup","name-":"admin-recent-signup","NAME":"ADMIN_RECENT_SIGNUP","index$":15}, {"active":true,"entity":"admin_recent_signup","key$":"BasicAdminRecentSignupFlow","kind":"basic","name":"BasicAdminRecentSignupFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"admin_recent_signup_ref01"}}],"index$":0}]}, 'AdminRecentSignup', {"GET /api/admin/insights/recent-signups":{"protocol":"http","parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let admin_recent_signup_ref01_data = Object.values(setup.data.existing.admin_recent_signup)[0] as any

    // LIST
    const admin_recent_signup_ref01_ent = client.AdminRecentSignup()
    const admin_recent_signup_ref01_match: any = {}

    const admin_recent_signup_ref01_list = (await admin_recent_signup_ref01_ent.list(admin_recent_signup_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/admin_recent_signup/AdminRecentSignupTestData.json')

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
    ['admin_recent_signup01','admin_recent_signup02','admin_recent_signup03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_ADMIN_RECENT_SIGNUP_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_ADMIN_RECENT_SIGNUP_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_ADMIN_RECENT_SIGNUP_ENTID']
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
  
