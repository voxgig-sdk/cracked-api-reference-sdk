

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


describe('AgentHealthEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.AgentHealth()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('agent_health hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of CrackedApiReferenceSDK.test(offline).AgentHealth().stream('list')) { }
    }, /offline/)

    for await (const _item of CrackedApiReferenceSDK.test(offline).AgentHealth()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.AgentHealth().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of CrackedApiReferenceSDK.test().AgentHealth().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.AgentHealth().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.AgentHealth().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AgentHealth().list({"day":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'agent_health.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"daily":{"a":true,"h":"Daily","n":"daily","r":true,"t":"`$ARRAY`","key$":"daily","index$":0},"dates":{"a":true,"h":"Dates","n":"dates","r":true,"t":"`$ARRAY`","key$":"dates","index$":1},"generated_at":{"a":true,"fo":"date-time","h":"Generated At","n":"generated_at","r":true,"t":"`$STRING`","key$":"generated_at","index$":2},"groups":{"a":true,"h":"Groups","n":"groups","r":true,"t":"`$ARRAY`","key$":"groups","index$":3},"latest":{"a":true,"h":"Latest","n":"latest","r":true,"t":"`$OBJECT`","key$":"latest","index$":4},"live_date":{"a":true,"h":"Live Date","n":"live_date","r":false,"t":"`$ANY`","key$":"live_date","index$":5},"phone_admin_generated_at":{"a":true,"fo":"date-time","h":"Phone Admin Generated At","n":"phone_admin_generated_at","r":true,"t":"`$STRING`","key$":"phone_admin_generated_at","index$":6},"platform":{"a":true,"h":"Platform","n":"platform","r":false,"t":"`$STRING`","key$":"platform","index$":7},"post_target":{"a":true,"h":"Post Target","n":"post_target","r":true,"t":"`$INTEGER`","key$":"post_target","index$":8},"qa_managed_agent_ids":{"a":true,"h":"Qa Managed Agent Ids","n":"qa_managed_agent_ids","r":false,"t":"`$ARRAY`","key$":"qa_managed_agent_ids","index$":9},"scope_prefixes":{"a":true,"h":"Scope Prefixes","n":"scope_prefixes","r":true,"t":"`$ARRAY`","key$":"scope_prefixes","index$":10},"timezone":{"a":true,"h":"Timezone","n":"timezone","r":true,"t":"`$STRING`","key$":"timezone","index$":11},"warmup_target":{"a":true,"h":"Warmup Target","n":"warmup_target","r":true,"t":"`$INTEGER`","key$":"warmup_target","index$":12}},"name":"agent_health","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/admin/agent-health","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"date_to","or":"date_to","r":false,"t":"`$ANY`","index$":0},{"a":true,"ex":7,"k":"query","n":"day","or":"days","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":"TIKTOK","k":"query","n":"platform","or":"platform","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":false,"k":"query","n":"summary","or":"summary","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"query","n":"user_id","or":"user_ids","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/api/admin/agent-health","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"agent-health"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"agent_health","name__orig":"agent_health","Name":"AgentHealth","name_":"agent_health","name-":"agent-health","NAME":"AGENT_HEALTH","index$":36}, {"active":true,"entity":"agent_health","key$":"BasicAgentHealthFlow","kind":"basic","name":"BasicAgentHealthFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"agent_health_ref01"}}],"index$":0}]}, 'AgentHealth', {"GET /api/admin/agent-health":{"protocol":"http","parameters":[{"name":"days","in":"query","required":false,"schema":{"type":"integer","maximum":31,"minimum":1,"default":7,"title":"Days"},"index$":0},{"name":"platform","in":"query","required":false,"schema":{"enum":["TIKTOK","INSTAGRAM"],"type":"string","description":"Phone Admin social platform to report.","default":"TIKTOK","title":"Platform"},"description":"Phone Admin social platform to report.","index$":1},{"name":"user_ids","in":"query","required":false,"schema":{"anyOf":[{"type":"array","items":{"type":"string","format":"uuid"}},{"type":"null"}],"description":"Optional repeated paid customer IDs to include before Phone Admin is queried.","title":"User Ids"},"description":"Optional repeated paid customer IDs to include before Phone Admin is queried.","index$":2},{"name":"date_to","in":"query","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"description":"Last ET day in YYYY-MM-DD format. Defaults to today for live data.","title":"Date To"},"description":"Last ET day in YYYY-MM-DD format. Defaults to today for live data.","index$":3},{"name":"summary","in":"query","required":false,"schema":{"type":"boolean","description":"Return product/day aggregates without agent runs and issue payloads.","default":false,"title":"Summary"},"description":"Return product/day aggregates without agent runs and issue payloads.","index$":4}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let agent_health_ref01_data = Object.values(setup.data.existing.agent_health)[0] as any

    // LIST
    const agent_health_ref01_ent = client.AgentHealth()
    const agent_health_ref01_match: any = {}

    const agent_health_ref01_list = (await agent_health_ref01_ent.list(agent_health_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/agent_health/AgentHealthTestData.json')

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
    ['agent_health01','agent_health02','agent_health03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_AGENT_HEALTH_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_AGENT_HEALTH_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_AGENT_HEALTH_ENTID']
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
  
