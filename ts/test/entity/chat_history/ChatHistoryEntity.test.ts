

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


describe('ChatHistoryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.ChatHistory()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ChatHistory().load({"session_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'chat_history.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"chatSubVariant":{"a":true,"h":"Chat Sub Variant","n":"chatSubVariant","r":true,"t":"`$STRING`","key$":"chatSubVariant","index$":0},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"t":"`$STRING`","key$":"createdAt","index$":1},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":2},"model":{"a":true,"h":"Model","n":"model","r":false,"t":"`$ANY`","key$":"model","index$":3},"onboardingDataId":{"a":true,"h":"Onboarding Data Id","n":"onboardingDataId","r":true,"t":"`$STRING`","key$":"onboardingDataId","index$":4},"routeRecommendation":{"a":true,"h":"Route Recommendation","n":"routeRecommendation","r":false,"t":"`$ANY`","key$":"routeRecommendation","index$":5},"salesStage":{"a":true,"h":"Sales Stage","n":"salesStage","r":true,"t":"`$STRING`","key$":"salesStage","index$":6},"selectedPlan":{"a":true,"h":"Selected Plan","n":"selectedPlan","r":false,"t":"`$ANY`","key$":"selectedPlan","index$":7},"session":{"a":true,"h":"Session","n":"session","r":true,"t":"`$OBJECT`","key$":"session","index$":8},"sessionId":{"a":true,"h":"Session Id","n":"sessionId","r":true,"t":"`$STRING`","key$":"sessionId","index$":9},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":10},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":true,"t":"`$STRING`","key$":"updatedAt","index$":11}},"name":"chat_history","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["onboardingDataId"],"co":{"id":"POST /api/chat/sessions","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/chat/sessions","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"chat"},{"lit":"sessions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/chat/sessions/{session_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"session_id","or":"session_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/chat/sessions/{session_id}","q":{"exist":["session_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"chat"},{"lit":"sessions"},{"var":"session_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"chat_history","name__orig":"chat_history","Name":"ChatHistory","name_":"chat_history","name-":"chat-history","NAME":"CHAT_HISTORY","index$":54}, {"active":true,"entity":"chat_history","key$":"BasicChatHistoryFlow","kind":"basic","name":"BasicChatHistoryFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"chat_history_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":false,"d":{},"i":{"ref":"chat_history_ref01","srcdatavar":"chat_history_ref01_data","suffix":"_dt0"},"m":{"id":"chat_history01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-chat_history_ref01"}}],"unreachable":true}]}, 'ChatHistory', {"POST /api/chat/sessions":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"onboardingDataId":{"type":"string","title":"Onboardingdataid","key$":"onboardingDataId"}},"type":"object","required":["onboardingDataId"],"title":"CreateChatSessionRequest","x-ref":"#/components/schemas/CreateChatSessionRequest","index$":1}}},"required":true},"parameters":[]},"GET /api/chat/sessions/{session_id}":{"protocol":"http","parameters":[{"name":"session_id","in":"path","required":true,"schema":{"type":"string","title":"Session Id"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const chat_history_ref01_ent = client.ChatHistory()
    let chat_history_ref01_data = setup.data.new.chat_history['chat_history_ref01']

    chat_history_ref01_data = (await chat_history_ref01_ent.create(chat_history_ref01_data)).data()
    assert(null != chat_history_ref01_data)


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
      '../../../../.sdk/test/entity/chat_history/ChatHistoryTestData.json')

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
    ['chat_history01','chat_history02','chat_history03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_CHAT_HISTORY_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_CHAT_HISTORY_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_CHAT_HISTORY_ENTID']
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
  
