

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


describe('AgentAccessWinningAdsSummaryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.AgentAccessWinningAdsSummary()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('agent_access_winning_ads_summary hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of CrackedApiReferenceSDK.test(offline).AgentAccessWinningAdsSummary().stream('list')) { }
    }, /offline/)

    for await (const _item of CrackedApiReferenceSDK.test(offline).AgentAccessWinningAdsSummary()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.AgentAccessWinningAdsSummary().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of CrackedApiReferenceSDK.test().AgentAccessWinningAdsSummary().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.AgentAccessWinningAdsSummary().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.AgentAccessWinningAdsSummary().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AgentAccessWinningAdsSummary().list({"include_internal":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'agent_access_winning_ads_summary.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"email":{"a":true,"fo":"email","h":"Email","n":"email","r":true,"t":"`$STRING`","key$":"email","index$":0},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":1},"productCount":{"a":true,"h":"Product Count","n":"productCount","r":true,"t":"`$INTEGER`","key$":"productCount","index$":2},"productsWithWinningAds":{"a":true,"h":"Products With Winning Ads","n":"productsWithWinningAds","r":true,"t":"`$INTEGER`","key$":"productsWithWinningAds","index$":3},"subscriptionStatus":{"a":true,"h":"Subscription Status","n":"subscriptionStatus","r":false,"t":"`$ANY`","key$":"subscriptionStatus","index$":4},"totalWinningAds":{"a":true,"h":"Total Winning Ads","n":"totalWinningAds","r":true,"t":"`$INTEGER`","key$":"totalWinningAds","index$":5},"userId":{"a":true,"fo":"uuid","h":"User Id","n":"userId","r":true,"t":"`$STRING`","key$":"userId","index$":6}},"name":"agent_access_winning_ads_summary","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/agent-access/winning-ads-summary","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_agent_access_key","or":"x-agent-access-key","r":false,"t":"`$ANY`","index$":0}],"query":[{"a":true,"ex":false,"k":"query","n":"include_internal","or":"include_internal","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"ex":200,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"subscription_status","or":"subscription_statuses","r":false,"t":"`$ANY`","index$":3}]},"k":"http","m":"GET","o":"/api/agent-access/winning-ads-summary","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"agent-access"},{"lit":"winning-ads-summary"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"agent_access_winning_ads_summary","name__orig":"agent_access_winning_ads_summary","Name":"AgentAccessWinningAdsSummary","name_":"agent_access_winning_ads_summary","name-":"agent-access-winning-ads-summary","NAME":"AGENT_ACCESS_WINNING_ADS_SUMMARY","index$":34}, {"active":true,"entity":"agent_access_winning_ads_summary","key$":"BasicAgentAccessWinningAdsSummaryFlow","kind":"basic","name":"BasicAgentAccessWinningAdsSummaryFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"agent_access_winning_ads_summary_ref01"}}],"index$":0}]}, 'AgentAccessWinningAdsSummary', {"GET /api/agent-access/winning-ads-summary":{"protocol":"http","parameters":[{"name":"include_internal","in":"query","required":false,"schema":{"type":"boolean","description":"Include internal users in results","default":false,"title":"Include Internal"},"description":"Include internal users in results","index$":0},{"name":"subscription_statuses","in":"query","required":false,"schema":{"anyOf":[{"type":"array","items":{"type":"string"}},{"type":"null"}],"description":"Filter by subscription status (e.g. active, trialing)","title":"Subscription Statuses"},"description":"Filter by subscription status (e.g. active, trialing)","index$":1},{"name":"limit","in":"query","required":false,"schema":{"type":"integer","maximum":1000,"minimum":1,"description":"Max customers to return","default":200,"title":"Limit"},"description":"Max customers to return","index$":2},{"name":"offset","in":"query","required":false,"schema":{"type":"integer","minimum":0,"description":"Pagination offset","default":0,"title":"Offset"},"description":"Pagination offset","index$":3},{"name":"x-agent-access-key","in":"header","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"X-Agent-Access-Key"},"index$":4}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let agent_access_winning_ads_summary_ref01_data = Object.values(setup.data.existing.agent_access_winning_ads_summary)[0] as any

    // LIST
    const agent_access_winning_ads_summary_ref01_ent = client.AgentAccessWinningAdsSummary()
    const agent_access_winning_ads_summary_ref01_match: any = {}

    const agent_access_winning_ads_summary_ref01_list = (await agent_access_winning_ads_summary_ref01_ent.list(agent_access_winning_ads_summary_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/agent_access_winning_ads_summary/AgentAccessWinningAdsSummaryTestData.json')

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
    ['agent_access_winning_ads_summary01','agent_access_winning_ads_summary02','agent_access_winning_ads_summary03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_AGENT_ACCESS_WINNING_ADS_SUMMARY_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_AGENT_ACCESS_WINNING_ADS_SUMMARY_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_AGENT_ACCESS_WINNING_ADS_SUMMARY_ENTID']
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
  
