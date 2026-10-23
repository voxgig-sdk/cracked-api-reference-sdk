

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


describe('ChatSessionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.ChatSession()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ChatSession().create({"session_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'chat_session.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"chatSubVariant":{"a":true,"h":"Chat Sub Variant","n":"chatSubVariant","r":true,"t":"`$STRING`","key$":"chatSubVariant","index$":0},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"t":"`$STRING`","key$":"createdAt","index$":1},"model":{"a":true,"h":"Model","n":"model","r":false,"t":"`$ANY`","key$":"model","index$":2},"plan":{"a":true,"h":"Plan","n":"plan","r":false,"t":"`$ANY`","key$":"plan","index$":3},"route":{"a":true,"h":"Route","n":"route","r":false,"t":"`$ANY`","key$":"route","index$":4},"routeRecommendation":{"a":true,"h":"Route Recommendation","n":"routeRecommendation","r":false,"t":"`$ANY`","key$":"routeRecommendation","index$":5},"salesStage":{"a":true,"h":"Sales Stage","n":"salesStage","r":true,"t":"`$STRING`","key$":"salesStage","index$":6},"selectedPlan":{"a":true,"h":"Selected Plan","n":"selectedPlan","r":false,"t":"`$ANY`","key$":"selectedPlan","index$":7},"sessionId":{"a":true,"h":"Session Id","n":"sessionId","r":true,"t":"`$STRING`","key$":"sessionId","index$":8},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":9},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":true,"t":"`$STRING`","key$":"updatedAt","index$":10}},"name":"chat_session","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["plan","route"],"co":{"id":"POST /api/chat/sessions/{session_id}/complete","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"session_id","or":"session_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/chat/sessions/{session_id}/complete","q":{"exist":["session_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"chat"},{"lit":"sessions"},{"var":"session_id"},{"lit":"complete"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"chat_session","name__orig":"chat_session","Name":"ChatSession","name_":"chat_session","name-":"chat-session","NAME":"CHAT_SESSION","index$":55}, {"active":true,"entity":"chat_session","key$":"BasicChatSessionFlow","kind":"basic","name":"BasicChatSessionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"chat_session_ref01"},"m":{"session_id":"session01"},"o":"create","s":[],"v":[],"index$":0}]}, 'ChatSession', {"POST /api/chat/sessions/{session_id}/complete":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"route":{"anyOf":[{"type":"string","enum":["checkout","demo"]},{"type":"null"}],"title":"Route","key$":"route"},"plan":{"anyOf":[{"type":"string","enum":["3_agents","15_agents","33_agents"]},{"type":"null"}],"title":"Plan","key$":"plan"}},"type":"object","title":"CompleteChatSessionRequest","x-ref":"#/components/schemas/CompleteChatSessionRequest","index$":1}}}},"parameters":[{"name":"session_id","in":"path","required":true,"schema":{"type":"string","title":"Session Id"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const chat_session_ref01_ent = client.ChatSession()
    let chat_session_ref01_data = setup.data.new.chat_session['chat_session_ref01']
    chat_session_ref01_data['session_id'] = setup.idmap['session01']

    chat_session_ref01_data = (await chat_session_ref01_ent.create(chat_session_ref01_data)).data()
    assert(null != chat_session_ref01_data)


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
      '../../../../.sdk/test/entity/chat_session/ChatSessionTestData.json')

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
    ['chat_session01','chat_session02','chat_session03','session01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_CHAT_SESSION_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_CHAT_SESSION_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_CHAT_SESSION_ENTID']
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
  
