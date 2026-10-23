

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


describe('IrisChatEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.IrisChat()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.IrisChat().create({"correlationId":1,"idempotencyKey":"x","message":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'iris_chat.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"artifacts":{"a":true,"h":"Artifacts","n":"artifacts","r":false,"t":"`$ARRAY`","key$":"artifacts","index$":0},"correlationId":{"a":true,"h":"Correlation Id","n":"correlationId","r":true,"t":"`$STRING`","key$":"correlationId","index$":1},"idempotencyKey":{"a":true,"h":"Idempotency Key","n":"idempotencyKey","r":true,"t":"`$STRING`","key$":"idempotencyKey","index$":2},"message":{"a":true,"h":"Message","n":"message","r":true,"t":"`$STRING`","key$":"message","index$":3},"mode":{"a":true,"h":"Mode","n":"mode","r":true,"t":"`$STRING`","key$":"mode","index$":4},"ok":{"a":true,"h":"Ok","n":"ok","r":false,"t":"`$BOOLEAN`","key$":"ok","index$":5},"pageContext":{"a":true,"h":"Page Context","n":"pageContext","r":false,"t":"`$OBJECT`","key$":"pageContext","index$":6},"productId":{"a":true,"h":"Product Id","n":"productId","r":false,"t":"`$ANY`","key$":"productId","index$":7},"runtimeStatus":{"a":true,"h":"Runtime Status","n":"runtimeStatus","r":true,"t":"`$STRING`","key$":"runtimeStatus","index$":8},"sessionId":{"a":true,"h":"Session Id","n":"sessionId","r":false,"t":"`$ANY`","key$":"sessionId","index$":9}},"name":"iris_chat","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["correlationId","idempotencyKey","message","pageContext","productId","sessionId"],"co":{"id":"POST /api/iris/chat","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/iris/chat","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"iris"},{"lit":"chat"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"iris_chat","name__orig":"iris_chat","Name":"IrisChat","name_":"iris_chat","name-":"iris-chat","NAME":"IRIS_CHAT","index$":87}, {"active":true,"entity":"iris_chat","key$":"BasicIrisChatFlow","kind":"basic","name":"BasicIrisChatFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"iris_chat_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'IrisChat', {"POST /api/iris/chat":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"message":{"type":"string","maxLength":12000,"minLength":1,"title":"Message","key$":"message"},"sessionId":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"Sessionid","key$":"sessionId"},"productId":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"Productid","key$":"productId"},"pageContext":{"type":"object","title":"Pagecontext","key$":"pageContext"},"idempotencyKey":{"type":"string","maxLength":255,"minLength":1,"title":"Idempotencykey","key$":"idempotencyKey"},"correlationId":{"type":"string","maxLength":128,"minLength":1,"title":"Correlationid","key$":"correlationId"}},"type":"object","required":["message","idempotencyKey","correlationId"],"title":"IrisChatRequest","x-ref":"#/components/schemas/IrisChatRequest","index$":1}}},"required":true},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const iris_chat_ref01_ent = client.IrisChat()
    let iris_chat_ref01_data = setup.data.new.iris_chat['iris_chat_ref01']

    iris_chat_ref01_data = (await iris_chat_ref01_ent.create(iris_chat_ref01_data)).data()
    assert(null != iris_chat_ref01_data)


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
      '../../../../.sdk/test/entity/iris_chat/IrisChatTestData.json')

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
    ['iris_chat01','iris_chat02','iris_chat03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_IRIS_CHAT_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_IRIS_CHAT_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_IRIS_CHAT_ENTID']
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
  
