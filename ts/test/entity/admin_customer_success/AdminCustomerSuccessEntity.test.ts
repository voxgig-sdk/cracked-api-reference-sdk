

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


describe('AdminCustomerSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.AdminCustomerSuccess()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('admin_customer_success hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of CrackedApiReferenceSDK.test(offline).AdminCustomerSuccess().stream('list')) { }
    }, /offline/)

    for await (const _item of CrackedApiReferenceSDK.test(offline).AdminCustomerSuccess()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.AdminCustomerSuccess().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of CrackedApiReferenceSDK.test().AdminCustomerSuccess().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.AdminCustomerSuccess().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.AdminCustomerSuccess().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AdminCustomerSuccess().list({"active_agents":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'admin_customer_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active_agents":{"a":true,"h":"Active Agents","n":"active_agents","r":true,"t":"`$INTEGER`","key$":"active_agents","index$":0},"active_products":{"a":true,"h":"Active Products","n":"active_products","r":true,"t":"`$INTEGER`","key$":"active_products","index$":1},"agents_count":{"a":true,"h":"Agents Count","n":"agents_count","r":true,"t":"`$INTEGER`","key$":"agents_count","index$":2},"auto_schedule_status":{"a":true,"h":"Auto Schedule Status","n":"auto_schedule_status","r":true,"t":"`$STRING`","key$":"auto_schedule_status","index$":3},"days_until_period_end":{"a":true,"h":"Days Until Period End","n":"days_until_period_end","r":false,"t":"`$ANY`","key$":"days_until_period_end","index$":4},"email":{"a":true,"h":"Email","n":"email","r":true,"t":"`$STRING`","key$":"email","index$":5},"feature_impact":{"a":true,"h":"Feature Impact","n":"feature_impact","r":true,"t":"`$STRING`","key$":"feature_impact","index$":6},"last_notification_at":{"a":true,"h":"Last Notification At","n":"last_notification_at","r":false,"t":"`$ANY`","key$":"last_notification_at","index$":7},"membership":{"a":true,"h":"Membership","n":"membership","r":false,"t":"`$ANY`","key$":"membership","index$":8},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":9},"notification_count":{"a":true,"h":"Notification Count","n":"notification_count","r":true,"t":"`$INTEGER`","key$":"notification_count","index$":10},"notification_events":{"a":true,"h":"Notification Events","n":"notification_events","r":true,"t":"`$ARRAY`","key$":"notification_events","index$":11},"priority":{"a":true,"h":"Priority","n":"priority","r":true,"t":"`$STRING`","key$":"priority","index$":12},"severity":{"a":true,"h":"Severity","n":"severity","r":true,"t":"`$STRING`","key$":"severity","index$":13},"status_label":{"a":true,"h":"Status Label","n":"status_label","r":true,"t":"`$STRING`","key$":"status_label","index$":14},"subscription_current_period_end":{"a":true,"h":"Subscription Current Period End","n":"subscription_current_period_end","r":false,"t":"`$ANY`","key$":"subscription_current_period_end","index$":15},"subscription_status":{"a":true,"h":"Subscription Status","n":"subscription_status","r":false,"t":"`$ANY`","key$":"subscription_status","index$":16},"upcoming_posts":{"a":true,"h":"Upcoming Posts","n":"upcoming_posts","r":true,"t":"`$INTEGER`","key$":"upcoming_posts","index$":17},"user_id":{"a":true,"fo":"uuid","h":"User Id","n":"user_id","r":true,"t":"`$STRING`","key$":"user_id","index$":18}},"name":"admin_customer_success","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/admin/insights/customer-success","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/admin/insights/customer-success","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"insights"},{"lit":"customer-success"}],"t":{"req":"`reqdata`","res":"`body.customer_success_cases`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"admin_customer_success","name__orig":"admin_customer_success","Name":"AdminCustomerSuccess","name_":"admin_customer_success","name-":"admin-customer-success","NAME":"ADMIN_CUSTOMER_SUCCESS","index$":8}, {"active":true,"entity":"admin_customer_success","key$":"BasicAdminCustomerSuccessFlow","kind":"basic","name":"BasicAdminCustomerSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"admin_customer_success_ref01"}}],"index$":0}]}, 'AdminCustomerSuccess', {"GET /api/admin/insights/customer-success":{"protocol":"http","parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let admin_customer_success_ref01_data = Object.values(setup.data.existing.admin_customer_success)[0] as any

    // LIST
    const admin_customer_success_ref01_ent = client.AdminCustomerSuccess()
    const admin_customer_success_ref01_match: any = {}

    const admin_customer_success_ref01_list = (await admin_customer_success_ref01_ent.list(admin_customer_success_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/admin_customer_success/AdminCustomerSuccessTestData.json')

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
    ['admin_customer_success01','admin_customer_success02','admin_customer_success03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_ADMIN_CUSTOMER_SUCCESS_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_ADMIN_CUSTOMER_SUCCESS_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_ADMIN_CUSTOMER_SUCCESS_ENTID']
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
  
