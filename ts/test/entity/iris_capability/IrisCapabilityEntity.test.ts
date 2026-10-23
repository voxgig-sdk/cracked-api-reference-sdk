

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


describe('IrisCapabilityEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.IrisCapability()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.IrisCapability().create({"id":1,"capability":"x","correlationId":"x","externalUserId":"x","idempotencyKey":"x","productScope":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'iris_capability.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"capability":{"a":true,"h":"Capability","n":"capability","r":true,"t":"`$STRING`","key$":"capability","index$":0},"correlationId":{"a":true,"h":"Correlation Id","n":"correlationId","r":true,"t":"`$STRING`","key$":"correlationId","index$":1},"errorCode":{"a":true,"h":"Error Code","n":"errorCode","r":false,"t":"`$ANY`","key$":"errorCode","index$":2},"externalProductId":{"a":true,"h":"External Product Id","n":"externalProductId","r":false,"t":"`$ANY`","key$":"externalProductId","index$":3},"externalUserId":{"a":true,"fo":"uuid","h":"External User Id","n":"externalUserId","r":true,"t":"`$STRING`","key$":"externalUserId","index$":4},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":5},"idempotencyKey":{"a":true,"h":"Idempotency Key","n":"idempotencyKey","r":true,"t":"`$STRING`","key$":"idempotencyKey","index$":6},"input":{"a":true,"h":"Input","n":"input","r":false,"t":"`$OBJECT`","key$":"input","index$":7},"membershipId":{"a":true,"h":"Membership Id","n":"membershipId","r":false,"t":"`$ANY`","key$":"membershipId","index$":8},"message":{"a":true,"h":"Message","n":"message","r":false,"t":"`$ANY`","key$":"message","index$":9},"ok":{"a":true,"h":"Ok","n":"ok","r":true,"t":"`$BOOLEAN`","key$":"ok","index$":10},"platformAccountId":{"a":true,"h":"Platform Account Id","n":"platformAccountId","r":false,"t":"`$ANY`","key$":"platformAccountId","index$":11},"platformLinkId":{"a":true,"h":"Platform Link Id","n":"platformLinkId","r":false,"t":"`$ANY`","key$":"platformLinkId","index$":12},"productScope":{"a":true,"h":"Product Scope","n":"productScope","r":true,"t":"`$STRING`","key$":"productScope","index$":13},"requestedBy":{"a":true,"h":"Requested By","n":"requestedBy","r":false,"t":"`$OBJECT`","key$":"requestedBy","index$":14},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":15},"retryable":{"a":true,"h":"Retryable","n":"retryable","r":false,"t":"`$BOOLEAN`","key$":"retryable","index$":16}},"id":{"field":"id","name":"id"},"name":"iris_capability","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["capability","correlationId","externalProductId","externalUserId","idempotencyKey","input","membershipId","platformAccountId","platformLinkId","productScope","requestedBy"],"co":{"id":"POST /api/platform/capabilities/{capability_name}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"authorization","or":"authorization","r":false,"t":"`$ANY`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"capability_name","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/platform/capabilities/{capability_name}","q":{"exist":["id"]},"r":{"param":{"capability_name":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"platform"},{"lit":"capabilities"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"iris_capability","name__orig":"iris_capability","Name":"IrisCapability","name_":"iris_capability","name-":"iris-capability","NAME":"IRIS_CAPABILITY","index$":86}, {"active":true,"entity":"iris_capability","key$":"BasicIrisCapabilityFlow","kind":"basic","name":"BasicIrisCapabilityFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"iris_capability_ref01"},"m":{"capability_name":"capability_name01"},"o":"create","s":[],"v":[],"unreachable":true}]}, 'IrisCapability', {"POST /api/platform/capabilities/{capability_name}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"productScope":{"type":"string","title":"Productscope","key$":"productScope"},"externalUserId":{"type":"string","format":"uuid","title":"Externaluserid","key$":"externalUserId"},"externalProductId":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"Externalproductid","key$":"externalProductId"},"platformAccountId":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Platformaccountid","key$":"platformAccountId"},"platformLinkId":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Platformlinkid","key$":"platformLinkId"},"membershipId":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Membershipid","key$":"membershipId"},"capability":{"type":"string","title":"Capability","key$":"capability"},"input":{"type":"object","title":"Input","key$":"input"},"idempotencyKey":{"type":"string","title":"Idempotencykey","key$":"idempotencyKey"},"correlationId":{"type":"string","title":"Correlationid","key$":"correlationId"},"requestedBy":{"type":"object","title":"Requestedby","key$":"requestedBy"}},"type":"object","required":["productScope","externalUserId","capability","idempotencyKey","correlationId"],"title":"IrisCapabilityEnvelope","x-ref":"#/components/schemas/IrisCapabilityEnvelope","index$":1}}}},"parameters":[{"name":"capability_name","in":"path","required":true,"schema":{"type":"string","title":"Capability Name"},"index$":0},{"name":"authorization","in":"header","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Authorization"},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let iris_capability_ref01_data = Object.values(setup.data.existing.iris_capability)[0] as any

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
      '../../../../.sdk/test/entity/iris_capability/IrisCapabilityTestData.json')

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
    ['iris_capability01','iris_capability02','iris_capability03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_IRIS_CAPABILITY_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_IRIS_CAPABILITY_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_IRIS_CAPABILITY_ENTID']
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
  
