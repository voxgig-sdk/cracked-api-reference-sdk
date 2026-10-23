

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


describe('AgentHealthDetailEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.AgentHealthDetail()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('agent_health_detail hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of CrackedApiReferenceSDK.test(offline).AgentHealthDetail().stream('list')) { }
    }, /offline/)

    for await (const _item of CrackedApiReferenceSDK.test(offline).AgentHealthDetail()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.AgentHealthDetail().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of CrackedApiReferenceSDK.test().AgentHealthDetail().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.AgentHealthDetail().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.AgentHealthDetail().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AgentHealthDetail().list({"date":1,"group_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'agent_health_detail.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archived_issue_total":{"a":true,"h":"Archived Issue Total","n":"archived_issue_total","r":false,"t":"`$INTEGER`","key$":"archived_issue_total","index$":0},"date":{"a":true,"h":"Date","n":"date","r":true,"t":"`$STRING`","key$":"date","index$":1},"generated_at":{"a":true,"fo":"date-time","h":"Generated At","n":"generated_at","r":true,"t":"`$STRING`","key$":"generated_at","index$":2},"group_id":{"a":true,"h":"Group Id","n":"group_id","r":true,"t":"`$STRING`","key$":"group_id","index$":3},"has_more":{"a":true,"h":"Has More","n":"has_more","r":true,"t":"`$BOOLEAN`","key$":"has_more","index$":4},"issue_total":{"a":true,"h":"Issue Total","n":"issue_total","r":true,"t":"`$INTEGER`","key$":"issue_total","index$":5},"issues":{"a":true,"h":"Issues","n":"issues","r":true,"t":"`$ARRAY`","key$":"issues","index$":6},"limit":{"a":true,"h":"Limit","n":"limit","r":true,"t":"`$INTEGER`","key$":"limit","index$":7},"metric":{"a":true,"h":"Metric","n":"metric","r":true,"t":"`$STRING`","key$":"metric","index$":8},"offset":{"a":true,"h":"Offset","n":"offset","r":true,"t":"`$INTEGER`","key$":"offset","index$":9},"warmup_runs":{"a":true,"h":"Warmup Runs","n":"warmup_runs","r":false,"t":"`$ARRAY`","key$":"warmup_runs","index$":10},"warning_total":{"a":true,"h":"Warning Total","n":"warning_total","r":false,"t":"`$INTEGER`","key$":"warning_total","index$":11},"warnings":{"a":true,"h":"Warnings","n":"warnings","r":false,"t":"`$ARRAY`","key$":"warnings","index$":12}},"name":"agent_health_detail","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/admin/agent-health/details","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"date","or":"date","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"group_id","or":"group_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":50,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":"overall","k":"query","n":"metric","or":"metric","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"ex":"TIKTOK","k":"query","n":"platform","or":"platform","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/api/admin/agent-health/details","q":{"exist":["date","group_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"agent-health"},{"lit":"details"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"agent_health_detail","name__orig":"agent_health_detail","Name":"AgentHealthDetail","name_":"agent_health_detail","name-":"agent-health-detail","NAME":"AGENT_HEALTH_DETAIL","index$":38}, {"active":true,"entity":"agent_health_detail","key$":"BasicAgentHealthDetailFlow","kind":"basic","name":"BasicAgentHealthDetailFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"agent_health_detail_ref01"}}],"index$":0}]}, 'AgentHealthDetail', {"GET /api/admin/agent-health/details":{"protocol":"http","parameters":[{"name":"group_id","in":"query","required":true,"schema":{"type":"string","minLength":3,"maxLength":100,"title":"Group Id"},"index$":0},{"name":"date","in":"query","required":true,"schema":{"type":"string","title":"Date"},"index$":1},{"name":"metric","in":"query","required":false,"schema":{"enum":["overall","warmups","posts","views","accounts"],"type":"string","default":"overall","title":"Metric"},"index$":2},{"name":"platform","in":"query","required":false,"schema":{"enum":["TIKTOK","INSTAGRAM"],"type":"string","default":"TIKTOK","title":"Platform"},"index$":3},{"name":"offset","in":"query","required":false,"schema":{"type":"integer","minimum":0,"default":0,"title":"Offset"},"index$":4},{"name":"limit","in":"query","required":false,"schema":{"type":"integer","maximum":100,"minimum":1,"default":50,"title":"Limit"},"index$":5}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let agent_health_detail_ref01_data = Object.values(setup.data.existing.agent_health_detail)[0] as any

    // LIST
    const agent_health_detail_ref01_ent = client.AgentHealthDetail()
    const agent_health_detail_ref01_match: any = {}

    const agent_health_detail_ref01_list = (await agent_health_detail_ref01_ent.list(agent_health_detail_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/agent_health_detail/AgentHealthDetailTestData.json')

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
    ['agent_health_detail01','agent_health_detail02','agent_health_detail03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_AGENT_HEALTH_DETAIL_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_AGENT_HEALTH_DETAIL_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_AGENT_HEALTH_DETAIL_ENTID']
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
  
