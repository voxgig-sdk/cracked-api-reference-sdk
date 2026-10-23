

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


describe('AgentAccessOverviewEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.AgentAccessOverview()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AgentAccessOverview().load({"onboarding_window_day":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'agent_access_overview.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"activeUsers":{"a":true,"h":"Active Users","n":"activeUsers","r":true,"t":"`$INTEGER`","key$":"activeUsers","index$":0},"generatedAt":{"a":true,"fo":"date-time","h":"Generated At","n":"generatedAt","r":true,"t":"`$STRING`","key$":"generatedAt","index$":1},"newUsersYesterday":{"a":true,"h":"New Users Yesterday","n":"newUsersYesterday","r":true,"t":"`$INTEGER`","key$":"newUsersYesterday","index$":2},"onboardingContextCounts":{"a":true,"h":"Onboarding Context Counts","n":"onboardingContextCounts","r":true,"t":"`$OBJECT`","key$":"onboardingContextCounts","index$":3},"onboardingCurrentStepCounts":{"a":true,"h":"Onboarding Current Step Counts","n":"onboardingCurrentStepCounts","r":true,"t":"`$OBJECT`","key$":"onboardingCurrentStepCounts","index$":4},"onboardingCurrentStepWindow":{"a":true,"h":"Onboarding Current Step Window","n":"onboardingCurrentStepWindow","r":true,"t":"`$OBJECT`","key$":"onboardingCurrentStepWindow","index$":5},"onboardingFlowVariantCounts":{"a":true,"h":"Onboarding Flow Variant Counts","n":"onboardingFlowVariantCounts","r":true,"t":"`$OBJECT`","key$":"onboardingFlowVariantCounts","index$":6},"onboardingLockedUntilActivation":{"a":true,"h":"Onboarding Locked Until Activation","n":"onboardingLockedUntilActivation","r":true,"t":"`$INTEGER`","key$":"onboardingLockedUntilActivation","index$":7},"onboardingRecordsTotal":{"a":true,"h":"Onboarding Records Total","n":"onboardingRecordsTotal","r":true,"t":"`$INTEGER`","key$":"onboardingRecordsTotal","index$":8},"onboardingRecordsWindow":{"a":true,"h":"Onboarding Records Window","n":"onboardingRecordsWindow","r":true,"t":"`$INTEGER`","key$":"onboardingRecordsWindow","index$":9},"onboardingSocialScanStatusCounts":{"a":true,"h":"Onboarding Social Scan Status Counts","n":"onboardingSocialScanStatusCounts","r":true,"t":"`$OBJECT`","key$":"onboardingSocialScanStatusCounts","index$":10},"onboardingWebsiteScrapeStatusCounts":{"a":true,"h":"Onboarding Website Scrape Status Counts","n":"onboardingWebsiteScrapeStatusCounts","r":true,"t":"`$OBJECT`","key$":"onboardingWebsiteScrapeStatusCounts","index$":11},"subscriptionStatusCounts":{"a":true,"h":"Subscription Status Counts","n":"subscriptionStatusCounts","r":true,"t":"`$OBJECT`","key$":"subscriptionStatusCounts","index$":12},"totalInternalUsers":{"a":true,"h":"Total Internal Users","n":"totalInternalUsers","r":true,"t":"`$INTEGER`","key$":"totalInternalUsers","index$":13},"totalUsers":{"a":true,"h":"Total Users","n":"totalUsers","r":true,"t":"`$INTEGER`","key$":"totalUsers","index$":14},"trialStartedYesterday":{"a":true,"h":"Trial Started Yesterday","n":"trialStartedYesterday","r":true,"t":"`$INTEGER`","key$":"trialStartedYesterday","index$":15},"trialingUsers":{"a":true,"h":"Trialing Users","n":"trialingUsers","r":true,"t":"`$INTEGER`","key$":"trialingUsers","index$":16}},"name":"agent_access_overview","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/agent-access/overview","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_agent_access_key","or":"x-agent-access-key","r":false,"t":"`$ANY`","index$":0}],"query":[{"a":true,"ex":7,"k":"query","n":"onboarding_window_day","or":"onboarding_window_days","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/agent-access/overview","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"agent-access"},{"lit":"overview"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"agent_access_overview","name__orig":"agent_access_overview","Name":"AgentAccessOverview","name_":"agent_access_overview","name-":"agent-access-overview","NAME":"AGENT_ACCESS_OVERVIEW","index$":24}, {"active":true,"entity":"agent_access_overview","key$":"BasicAgentAccessOverviewFlow","kind":"basic","name":"BasicAgentAccessOverviewFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"agent_access_overview_ref01","srcdatavar":"agent_access_overview_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-agent_access_overview_ref01"}}],"index$":0}]}, 'AgentAccessOverview', {"GET /api/agent-access/overview":{"protocol":"http","parameters":[{"name":"onboarding_window_days","in":"query","required":false,"schema":{"type":"integer","maximum":30,"minimum":1,"description":"Lookback window for onboarding metrics","default":7,"title":"Onboarding Window Days"},"description":"Lookback window for onboarding metrics","index$":0},{"name":"x-agent-access-key","in":"header","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"X-Agent-Access-Key"},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let agent_access_overview_ref01_data = Object.values(setup.data.existing.agent_access_overview)[0] as any

    // LOAD
    const agent_access_overview_ref01_ent = client.AgentAccessOverview()
    const agent_access_overview_ref01_match_dt0: any = {}
    const agent_access_overview_ref01_data_dt0 = (await agent_access_overview_ref01_ent.load(agent_access_overview_ref01_match_dt0)).data()
    assert(null != agent_access_overview_ref01_data_dt0)


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
      '../../../../.sdk/test/entity/agent_access_overview/AgentAccessOverviewTestData.json')

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
    ['agent_access_overview01','agent_access_overview02','agent_access_overview03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_AGENT_ACCESS_OVERVIEW_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_AGENT_ACCESS_OVERVIEW_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_AGENT_ACCESS_OVERVIEW_ENTID']
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
  
