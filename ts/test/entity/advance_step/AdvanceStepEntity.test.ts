

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


describe('AdvanceStepEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.AdvanceStep()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AdvanceStep().create({"onboarding_data_id":1,"to_step":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'advance_step.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"current_step":{"a":true,"h":"Current Step","n":"current_step","r":true,"t":"`$STRING`","key$":"current_step","index$":0},"onboarding_data_id":{"a":true,"h":"Onboarding Data Id","n":"onboarding_data_id","r":true,"sh":"UUID of the OnboardingData record","t":"`$STRING`","key$":"onboarding_data_id","index$":1},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":2},"to_step":{"a":true,"h":"To Step","n":"to_step","r":true,"sh":"Target step name","t":"`$STRING`","key$":"to_step","index$":3}},"name":"advance_step","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["onboarding_data_id","to_step"],"co":{"id":"POST /api/onboarding-v6/advance-step","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/onboarding-v6/advance-step","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"onboarding-v6"},{"lit":"advance-step"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"advance_step","name__orig":"advance_step","Name":"AdvanceStep","name_":"advance_step","name-":"advance-step","NAME":"ADVANCE_STEP","index$":21}, {"active":true,"entity":"advance_step","key$":"BasicAdvanceStepFlow","kind":"basic","name":"BasicAdvanceStepFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"advance_step_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'AdvanceStep', {"POST /api/onboarding-v6/advance-step":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"onboarding_data_id":{"type":"string","title":"Onboarding Data Id","description":"UUID of the OnboardingData record","key$":"onboarding_data_id"},"to_step":{"type":"string","title":"To Step","description":"Target step name","key$":"to_step"}},"type":"object","required":["onboarding_data_id","to_step"],"title":"AdvanceStepRequest","description":"Request to advance to next step.","x-ref":"#/components/schemas/AdvanceStepRequest","index$":1}}},"required":true},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const advance_step_ref01_ent = client.AdvanceStep()
    let advance_step_ref01_data = setup.data.new.advance_step['advance_step_ref01']

    advance_step_ref01_data = (await advance_step_ref01_ent.create(advance_step_ref01_data)).data()
    assert(null != advance_step_ref01_data)


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
      '../../../../.sdk/test/entity/advance_step/AdvanceStepTestData.json')

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
    ['advance_step01','advance_step02','advance_step03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_ADVANCE_STEP_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_ADVANCE_STEP_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_ADVANCE_STEP_ENTID']
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
  
