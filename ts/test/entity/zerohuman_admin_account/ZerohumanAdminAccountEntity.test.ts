

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


describe('ZerohumanAdminAccountEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.ZerohumanAdminAccount()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('zerohuman_admin_account hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of CrackedApiReferenceSDK.test(offline).ZerohumanAdminAccount().stream('list')) { }
    }, /offline/)

    for await (const _item of CrackedApiReferenceSDK.test(offline).ZerohumanAdminAccount()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.ZerohumanAdminAccount().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of CrackedApiReferenceSDK.test().ZerohumanAdminAccount().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.ZerohumanAdminAccount().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.ZerohumanAdminAccount().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ZerohumanAdminAccount().list({"account_mode":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'zerohuman_admin_account.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"account_mode":{"a":true,"h":"Account Mode","n":"account_mode","r":true,"t":"`$STRING`","key$":"account_mode","index$":0},"active_queue_count":{"a":true,"h":"Active Queue Count","n":"active_queue_count","r":true,"t":"`$INTEGER`","key$":"active_queue_count","index$":1},"assigned_agent":{"a":true,"h":"Assigned Agent","n":"assigned_agent","r":false,"t":"`$ANY`","key$":"assigned_agent","index$":2},"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"t":"`$ANY`","key$":"created_at","index$":3},"email":{"a":true,"h":"Email","n":"email","r":true,"t":"`$STRING`","key$":"email","index$":4},"external_user_id":{"a":true,"h":"External User Id","n":"external_user_id","r":true,"t":"`$STRING`","key$":"external_user_id","index$":5},"membership":{"a":true,"h":"Membership","n":"membership","r":false,"t":"`$ANY`","key$":"membership","index$":6},"policy_code":{"a":true,"h":"Policy Code","n":"policy_code","r":false,"t":"`$ANY`","key$":"policy_code","index$":7},"product_id":{"a":true,"h":"Product Id","n":"product_id","r":false,"t":"`$STRING`","key$":"product_id","index$":8},"product_name":{"a":true,"h":"Product Name","n":"product_name","r":false,"t":"`$ANY`","key$":"product_name","index$":9},"provisioning_status":{"a":true,"h":"Provisioning Status","n":"provisioning_status","r":true,"t":"`$STRING`","key$":"provisioning_status","index$":10},"subscription_status":{"a":true,"h":"Subscription Status","n":"subscription_status","r":false,"t":"`$ANY`","key$":"subscription_status","index$":11},"updated_at":{"a":true,"h":"Updated At","n":"updated_at","r":false,"t":"`$ANY`","key$":"updated_at","index$":12},"user_id":{"a":true,"fo":"uuid","h":"User Id","n":"user_id","r":true,"t":"`$STRING`","key$":"user_id","index$":13}},"name":"zerohuman_admin_account","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/admin/zerohuman/accounts","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/admin/zerohuman/accounts","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"zerohuman"},{"lit":"accounts"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"zerohuman_admin_account","name__orig":"zerohuman_admin_account","Name":"ZerohumanAdminAccount","name_":"zerohuman_admin_account","name-":"zerohuman-admin-account","NAME":"ZEROHUMAN_ADMIN_ACCOUNT","index$":170}, {"active":true,"entity":"zerohuman_admin_account","key$":"BasicZerohumanAdminAccountFlow","kind":"basic","name":"BasicZerohumanAdminAccountFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"zerohuman_admin_account_ref01"}}],"index$":0}]}, 'ZerohumanAdminAccount', {"GET /api/admin/zerohuman/accounts":{"protocol":"http","parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let zerohuman_admin_account_ref01_data = Object.values(setup.data.existing.zerohuman_admin_account)[0] as any

    // LIST
    const zerohuman_admin_account_ref01_ent = client.ZerohumanAdminAccount()
    const zerohuman_admin_account_ref01_match: any = {}

    const zerohuman_admin_account_ref01_list = (await zerohuman_admin_account_ref01_ent.list(zerohuman_admin_account_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/zerohuman_admin_account/ZerohumanAdminAccountTestData.json')

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
    ['zerohuman_admin_account01','zerohuman_admin_account02','zerohuman_admin_account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_ZEROHUMAN_ADMIN_ACCOUNT_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_ZEROHUMAN_ADMIN_ACCOUNT_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_ZEROHUMAN_ADMIN_ACCOUNT_ENTID']
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
  
