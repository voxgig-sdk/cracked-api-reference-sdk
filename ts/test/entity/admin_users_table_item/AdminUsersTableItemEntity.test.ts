

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


describe('AdminUsersTableItemEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.AdminUsersTableItem()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('admin_users_table_item hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of CrackedApiReferenceSDK.test(offline).AdminUsersTableItem().stream('list')) { }
    }, /offline/)

    for await (const _item of CrackedApiReferenceSDK.test(offline).AdminUsersTableItem()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.AdminUsersTableItem().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of CrackedApiReferenceSDK.test().AdminUsersTableItem().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.AdminUsersTableItem().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.AdminUsersTableItem().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AdminUsersTableItem().list({"page":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'admin_users_table_item.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"activated":{"a":true,"h":"Activated","n":"activated","r":true,"t":"`$BOOLEAN`","key$":"activated","index$":0},"agents_count":{"a":true,"h":"Agents Count","n":"agents_count","r":false,"t":"`$INTEGER`","key$":"agents_count","index$":1},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"t":"`$STRING`","key$":"created_at","index$":2},"credits":{"a":true,"h":"Credits","n":"credits","r":true,"t":"`$INTEGER`","key$":"credits","index$":3},"demo_booked":{"a":true,"h":"Demo Booked","n":"demo_booked","r":true,"t":"`$BOOLEAN`","key$":"demo_booked","index$":4},"email":{"a":true,"h":"Email","n":"email","r":true,"t":"`$STRING`","key$":"email","index$":5},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":6},"membership":{"a":true,"h":"Membership","n":"membership","r":true,"t":"`$ANY`","key$":"membership","index$":7},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":8},"onboarding_flow":{"a":true,"h":"Onboarding Flow","n":"onboarding_flow","r":true,"t":"`$STRING`","key$":"onboarding_flow","index$":9},"product_name":{"a":true,"h":"Product Name","n":"product_name","r":true,"t":"`$ANY`","key$":"product_name","index$":10},"product_url":{"a":true,"h":"Product Url","n":"product_url","r":true,"t":"`$ANY`","key$":"product_url","index$":11},"survey_data":{"a":true,"h":"Survey Data","n":"survey_data","r":true,"t":"`$ANY`","key$":"survey_data","index$":12}},"id":{"field":"id","name":"id"},"name":"admin_users_table_item","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/admin/users/table","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/admin/users/table","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users"},{"lit":"table"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"admin_users_table_item","name__orig":"admin_users_table_item","Name":"AdminUsersTableItem","name_":"admin_users_table_item","name-":"admin-users-table-item","NAME":"ADMIN_USERS_TABLE_ITEM","index$":19}, {"active":true,"entity":"admin_users_table_item","key$":"BasicAdminUsersTableItemFlow","kind":"basic","name":"BasicAdminUsersTableItemFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"admin_users_table_item_ref01"}}],"index$":0}]}, 'AdminUsersTableItem', {"GET /api/admin/users/table":{"protocol":"http","parameters":[{"name":"page","in":"query","required":false,"schema":{"type":"integer","minimum":1,"description":"Page number (1-based)","default":1,"title":"Page"},"description":"Page number (1-based)","index$":0},{"name":"page_size","in":"query","required":false,"schema":{"type":"integer","maximum":100,"minimum":1,"description":"Number of users per page","default":20,"title":"Page Size"},"description":"Number of users per page","index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let admin_users_table_item_ref01_data = Object.values(setup.data.existing.admin_users_table_item)[0] as any

    // LIST
    const admin_users_table_item_ref01_ent = client.AdminUsersTableItem()
    const admin_users_table_item_ref01_match: any = {}

    const admin_users_table_item_ref01_list = (await admin_users_table_item_ref01_ent.list(admin_users_table_item_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/admin_users_table_item/AdminUsersTableItemTestData.json')

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
    ['admin_users_table_item01','admin_users_table_item02','admin_users_table_item03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_ADMIN_USERS_TABLE_ITEM_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_ADMIN_USERS_TABLE_ITEM_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_ADMIN_USERS_TABLE_ITEM_ENTID']
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
  
