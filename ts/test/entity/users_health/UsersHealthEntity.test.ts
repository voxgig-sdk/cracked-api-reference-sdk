

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


describe('UsersHealthEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.UsersHealth()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('users_health hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of CrackedApiReferenceSDK.test(offline).UsersHealth().stream('list')) { }
    }, /offline/)

    for await (const _item of CrackedApiReferenceSDK.test(offline).UsersHealth()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.UsersHealth().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of CrackedApiReferenceSDK.test().UsersHealth().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.UsersHealth().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.UsersHealth().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.UsersHealth().list({"include_internal_user":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'users_health.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"account_type":{"a":true,"h":"Account Type","n":"account_type","r":true,"t":"`$ANY`","key$":"account_type","index$":0},"admin_notes":{"a":true,"h":"Admin Notes","n":"admin_notes","r":false,"t":"`$ANY`","key$":"admin_notes","index$":1},"agents_count":{"a":true,"h":"Agents Count","n":"agents_count","r":true,"t":"`$INTEGER`","key$":"agents_count","index$":2},"agents_health":{"a":true,"h":"Agents Health","n":"agents_health","r":true,"t":"`$STRING`","key$":"agents_health","index$":3},"agents_issue":{"a":true,"h":"Agents Issue","n":"agents_issue","r":true,"t":"`$ANY`","key$":"agents_issue","index$":4},"assigned_agents_count":{"a":true,"h":"Assigned Agents Count","n":"assigned_agents_count","r":true,"t":"`$INTEGER`","key$":"assigned_agents_count","index$":5},"auto_schedule_enabled":{"a":true,"h":"Auto Schedule Enabled","n":"auto_schedule_enabled","r":true,"t":"`$BOOLEAN`","key$":"auto_schedule_enabled","index$":6},"auto_schedule_health":{"a":true,"h":"Auto Schedule Health","n":"auto_schedule_health","r":true,"t":"`$STRING`","key$":"auto_schedule_health","index$":7},"auto_schedule_issue":{"a":true,"h":"Auto Schedule Issue","n":"auto_schedule_issue","r":true,"t":"`$ANY`","key$":"auto_schedule_issue","index$":8},"auto_schedule_today_health":{"a":true,"h":"Auto Schedule Today Health","n":"auto_schedule_today_health","r":true,"t":"`$STRING`","key$":"auto_schedule_today_health","index$":9},"auto_schedule_today_issue":{"a":true,"h":"Auto Schedule Today Issue","n":"auto_schedule_today_issue","r":true,"t":"`$ANY`","key$":"auto_schedule_today_issue","index$":10},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"t":"`$STRING`","key$":"created_at","index$":11},"email":{"a":true,"h":"Email","n":"email","r":true,"t":"`$STRING`","key$":"email","index$":12},"expected_agents_count":{"a":true,"h":"Expected Agents Count","n":"expected_agents_count","r":true,"t":"`$INTEGER`","key$":"expected_agents_count","index$":13},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":14},"is_bookmarked":{"a":true,"h":"Is Bookmarked","n":"is_bookmarked","r":false,"t":"`$BOOLEAN`","key$":"is_bookmarked","index$":15},"is_internal_user":{"a":true,"h":"Is Internal User","n":"is_internal_user","r":true,"t":"`$BOOLEAN`","key$":"is_internal_user","index$":16},"is_migrated":{"a":true,"h":"Is Migrated","n":"is_migrated","r":true,"t":"`$BOOLEAN`","key$":"is_migrated","index$":17},"membership":{"a":true,"h":"Membership","n":"membership","r":true,"t":"`$ANY`","key$":"membership","index$":18},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":19},"posts_health":{"a":true,"h":"Posts Health","n":"posts_health","r":true,"t":"`$STRING`","key$":"posts_health","index$":20},"posts_issue":{"a":true,"h":"Posts Issue","n":"posts_issue","r":true,"t":"`$ANY`","key$":"posts_issue","index$":21},"posts_today_health":{"a":true,"h":"Posts Today Health","n":"posts_today_health","r":true,"t":"`$STRING`","key$":"posts_today_health","index$":22},"posts_today_issue":{"a":true,"h":"Posts Today Issue","n":"posts_today_issue","r":true,"t":"`$ANY`","key$":"posts_today_issue","index$":23},"subscription_status":{"a":true,"h":"Subscription Status","n":"subscription_status","r":true,"t":"`$ANY`","key$":"subscription_status","index$":24},"today_expected_count":{"a":true,"h":"Today Expected Count","n":"today_expected_count","r":true,"t":"`$INTEGER`","key$":"today_expected_count","index$":25},"today_failed_count":{"a":true,"h":"Today Failed Count","n":"today_failed_count","r":true,"t":"`$INTEGER`","key$":"today_failed_count","index$":26},"today_scheduled_count":{"a":true,"h":"Today Scheduled Count","n":"today_scheduled_count","r":true,"t":"`$INTEGER`","key$":"today_scheduled_count","index$":27},"today_total_count":{"a":true,"h":"Today Total Count","n":"today_total_count","r":true,"t":"`$INTEGER`","key$":"today_total_count","index$":28},"tomorrow_expected_count":{"a":true,"h":"Tomorrow Expected Count","n":"tomorrow_expected_count","r":true,"t":"`$INTEGER`","key$":"tomorrow_expected_count","index$":29},"tomorrow_scheduled_count":{"a":true,"h":"Tomorrow Scheduled Count","n":"tomorrow_scheduled_count","r":true,"t":"`$INTEGER`","key$":"tomorrow_scheduled_count","index$":30},"yesterday_failed_count":{"a":true,"h":"Yesterday Failed Count","n":"yesterday_failed_count","r":true,"t":"`$INTEGER`","key$":"yesterday_failed_count","index$":31},"yesterday_total_count":{"a":true,"h":"Yesterday Total Count","n":"yesterday_total_count","r":true,"t":"`$INTEGER`","key$":"yesterday_total_count","index$":32}},"id":{"field":"id","name":"id"},"name":"users_health","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/admin/users-health","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":false,"k":"query","n":"include_internal_user","or":"include_internal_users","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"ex":false,"k":"query","n":"include_migrated_user","or":"include_migrated_users","r":false,"t":"`$BOOLEAN`","index$":1}]},"k":"http","m":"GET","o":"/api/admin/users-health","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users-health"}],"t":{"req":"`reqdata`","res":"`body.users`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"users_health","name__orig":"users_health","Name":"UsersHealth","name_":"users_health","name-":"users-health","NAME":"USERS_HEALTH","index$":164}, {"active":true,"entity":"users_health","key$":"BasicUsersHealthFlow","kind":"basic","name":"BasicUsersHealthFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"users_health_ref01"}}],"index$":0}]}, 'UsersHealth', {"GET /api/admin/users-health":{"protocol":"http","parameters":[{"name":"include_internal_users","in":"query","required":false,"schema":{"type":"boolean","default":false,"title":"Include Internal Users"},"index$":0},{"name":"include_migrated_users","in":"query","required":false,"schema":{"type":"boolean","default":false,"title":"Include Migrated Users"},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let users_health_ref01_data = Object.values(setup.data.existing.users_health)[0] as any

    // LIST
    const users_health_ref01_ent = client.UsersHealth()
    const users_health_ref01_match: any = {}

    const users_health_ref01_list = (await users_health_ref01_ent.list(users_health_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/users_health/UsersHealthTestData.json')

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
    ['users_health01','users_health02','users_health03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_USERS_HEALTH_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_USERS_HEALTH_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_USERS_HEALTH_ENTID']
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
  
