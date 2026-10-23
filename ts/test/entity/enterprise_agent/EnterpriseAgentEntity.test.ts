

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


describe('EnterpriseAgentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.EnterpriseAgent()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.EnterpriseAgent().load({"count":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'enterprise_agent.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"count":{"a":true,"h":"Count","n":"count","op":{"create":{"req":false,"type":"`$INTEGER`"}},"r":true,"t":"`$INTEGER`","key$":"count","index$":0},"product_id":{"a":true,"fo":"uuid","h":"Product Id","n":"product_id","r":true,"t":"`$STRING`","key$":"product_id","index$":1},"source_product_id":{"a":true,"fo":"uuid","h":"Source Product Id","n":"source_product_id","r":true,"t":"`$STRING`","key$":"source_product_id","index$":2},"target_product_id":{"a":true,"fo":"uuid","h":"Target Product Id","n":"target_product_id","r":true,"t":"`$STRING`","key$":"target_product_id","index$":3}},"name":"enterprise_agent","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["count","product_id"],"co":{"id":"POST /api/enterprise/agents/assign","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/enterprise/agents/assign","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"enterprise"},{"lit":"agents"},{"lit":"assign"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"bf":["count","source_product_id","target_product_id"],"co":{"id":"POST /api/enterprise/agents/move","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/enterprise/agents/move","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"enterprise"},{"lit":"agents"},{"lit":"move"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"bf":["count","product_id"],"co":{"id":"POST /api/enterprise/agents/release","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/enterprise/agents/release","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"enterprise"},{"lit":"agents"},{"lit":"release"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/enterprise/agents/global-pool-status","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/enterprise/agents/global-pool-status","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"enterprise"},{"lit":"agents"},{"lit":"global-pool-status"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"enterprise_agent","name__orig":"enterprise_agent","Name":"EnterpriseAgent","name_":"enterprise_agent","name-":"enterprise-agent","NAME":"ENTERPRISE_AGENT","index$":72}, {"active":true,"entity":"enterprise_agent","key$":"BasicEnterpriseAgentFlow","kind":"basic","name":"BasicEnterpriseAgentFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"enterprise_agent_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"enterprise_agent_ref01","srcdatavar":"enterprise_agent_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-enterprise_agent_ref01"}}],"index$":1}]}, 'EnterpriseAgent', {"POST /api/enterprise/agents/assign":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"product_id":{"type":"string","format":"uuid","title":"Product Id","key$":"product_id"},"count":{"type":"integer","title":"Count","key$":"count"}},"type":"object","required":["product_id","count"],"title":"AssignAgentsRequest","description":"Request to assign more agents to a product","x-ref":"#/components/schemas/AssignAgentsRequest","index$":1}}},"required":true},"parameters":[]},"POST /api/enterprise/agents/move":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"source_product_id":{"type":"string","format":"uuid","title":"Source Product Id","key$":"source_product_id"},"target_product_id":{"type":"string","format":"uuid","title":"Target Product Id","key$":"target_product_id"},"count":{"type":"integer","title":"Count","default":1,"key$":"count"}},"type":"object","required":["source_product_id","target_product_id"],"title":"MoveAgentRequest","description":"Request to move an agent between products","x-ref":"#/components/schemas/MoveAgentRequest","index$":1}}},"required":true},"parameters":[]},"POST /api/enterprise/agents/release":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"product_id":{"type":"string","format":"uuid","title":"Product Id","key$":"product_id"},"count":{"type":"integer","title":"Count","key$":"count"}},"type":"object","required":["product_id","count"],"title":"ReleaseAgentsRequest","description":"Request to release agents from a product","x-ref":"#/components/schemas/ReleaseAgentsRequest","index$":1}}},"required":true},"parameters":[]},"GET /api/enterprise/agents/global-pool-status":{"protocol":"http","parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const enterprise_agent_ref01_ent = client.EnterpriseAgent()
    let enterprise_agent_ref01_data = setup.data.new.enterprise_agent['enterprise_agent_ref01']

    enterprise_agent_ref01_data = (await enterprise_agent_ref01_ent.create(enterprise_agent_ref01_data)).data()
    assert(null != enterprise_agent_ref01_data)


    // LOAD
    const enterprise_agent_ref01_match_dt0: any = {}
    const enterprise_agent_ref01_data_dt0 = (await enterprise_agent_ref01_ent.load(enterprise_agent_ref01_match_dt0)).data()
    assert(null != enterprise_agent_ref01_data_dt0)


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
      '../../../../.sdk/test/entity/enterprise_agent/EnterpriseAgentTestData.json')

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
    ['enterprise_agent01','enterprise_agent02','enterprise_agent03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_ENTERPRISE_AGENT_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_ENTERPRISE_AGENT_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_ENTERPRISE_AGENT_ENTID']
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
  
