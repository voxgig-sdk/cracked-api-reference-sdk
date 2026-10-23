

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


describe('AdminInsightEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.AdminInsight()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('admin_insight hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of CrackedApiReferenceSDK.test(offline).AdminInsight().stream('list')) { }
    }, /offline/)

    for await (const _item of CrackedApiReferenceSDK.test(offline).AdminInsight()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.AdminInsight().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of CrackedApiReferenceSDK.test().AdminInsight().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.AdminInsight().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.AdminInsight().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AdminInsight().list({"generated_at":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'admin_insight.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"customer_success_cases":{"a":true,"h":"Customer Success Cases","n":"customer_success_cases","r":true,"t":"`$ARRAY`","key$":"customer_success_cases","index$":0},"customers":{"a":true,"h":"Customers","n":"customers","r":true,"t":"`$ARRAY`","key$":"customers","index$":1},"generated_at":{"a":true,"fo":"date-time","h":"Generated At","n":"generated_at","r":true,"t":"`$STRING`","key$":"generated_at","index$":2},"pfa_database":{"a":true,"h":"Pfa Database","n":"pfa_database","r":true,"t":"`$OBJECT`","key$":"pfa_database","index$":3},"recent_signups":{"a":true,"h":"Recent Signups","n":"recent_signups","r":true,"t":"`$ARRAY`","key$":"recent_signups","index$":4},"summary":{"a":true,"h":"Summary","n":"summary","r":true,"t":"`$OBJECT`","key$":"summary","index$":5},"vireel_database":{"a":true,"h":"Vireel Database","n":"vireel_database","r":true,"t":"`$OBJECT`","key$":"vireel_database","index$":6}},"name":"admin_insight","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/admin/insights","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/admin/insights","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"insights"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/admin/insights/customer-agent-readiness","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"customer_email","or":"customer_emails","r":false,"t":"`$ANY`","index$":0},{"a":true,"ex":true,"k":"query","n":"include_agent","or":"include_agents","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"ex":500,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":3}]},"k":"http","m":"GET","o":"/api/admin/insights/customer-agent-readiness","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"insights"},{"lit":"customer-agent-readiness"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"admin_insight","name__orig":"admin_insight","Name":"AdminInsight","name_":"admin_insight","name-":"admin-insight","NAME":"ADMIN_INSIGHT","index$":11}, {"active":true,"entity":"admin_insight","key$":"BasicAdminInsightFlow","kind":"basic","name":"BasicAdminInsightFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"admin_insight_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"admin_insight_ref01","srcdatavar":"admin_insight_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-admin_insight_ref01"}}],"index$":1}]}, 'AdminInsight', {"GET /api/admin/insights":{"protocol":"http","parameters":[]},"GET /api/admin/insights/customer-agent-readiness":{"protocol":"http","parameters":[{"name":"customer_emails","in":"query","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Customer Emails"},"index$":0},{"name":"include_agents","in":"query","required":false,"schema":{"type":"boolean","default":true,"title":"Include Agents"},"index$":1},{"name":"page","in":"query","required":false,"schema":{"type":"integer","default":1,"title":"Page"},"index$":2},{"name":"limit","in":"query","required":false,"schema":{"type":"integer","default":500,"title":"Limit"},"index$":3}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let admin_insight_ref01_data = Object.values(setup.data.existing.admin_insight)[0] as any

    // LIST
    const admin_insight_ref01_ent = client.AdminInsight()
    const admin_insight_ref01_match: any = {}

    const admin_insight_ref01_list = (await admin_insight_ref01_ent.list(admin_insight_ref01_match)).map((e: any) => e.data())


    // LOAD
    const admin_insight_ref01_match_dt0: any = {}
    const admin_insight_ref01_data_dt0 = (await admin_insight_ref01_ent.load(admin_insight_ref01_match_dt0)).data()
    assert(null != admin_insight_ref01_data_dt0)


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
      '../../../../.sdk/test/entity/admin_insight/AdminInsightTestData.json')

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
    ['admin_insight01','admin_insight02','admin_insight03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_ADMIN_INSIGHT_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_ADMIN_INSIGHT_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_ADMIN_INSIGHT_ENTID']
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
  
