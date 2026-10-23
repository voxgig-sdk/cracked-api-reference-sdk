

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


describe('IriEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.Iri()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Iri().create({"connector_id":1,"idempotencyKey":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'iri.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"correlationId":{"a":true,"h":"Correlation Id","n":"correlationId","r":false,"t":"`$ANY`","key$":"correlationId","index$":0},"idempotencyKey":{"a":true,"h":"Idempotency Key","n":"idempotencyKey","r":true,"t":"`$STRING`","key$":"idempotencyKey","index$":1},"productId":{"a":true,"h":"Product Id","n":"productId","r":false,"t":"`$ANY`","key$":"productId","index$":2}},"name":"iri","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/iris/connectors/{connector_id}/start","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"connector_id","or":"connector_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/iris/connectors/{connector_id}/start","q":{"exist":["connector_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"iris"},{"lit":"connectors"},{"var":"connector_id"},{"lit":"start"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"bf":["correlationId","idempotencyKey","productId"],"co":{"id":"POST /api/iris/tasks/{task_id}/run","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"task_id","or":"task_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/iris/tasks/{task_id}/run","q":{"exist":["task_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"iris"},{"lit":"tasks"},{"var":"task_id"},{"lit":"run"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"iri","name__orig":"iri","Name":"Iri","name_":"iri","name-":"iri","NAME":"IRI","index$":85}, {"active":true,"entity":"iri","key$":"BasicIriFlow","kind":"basic","name":"BasicIriFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"iri_ref01"},"m":{"task_id":"task01"},"o":"create","s":[],"v":[],"index$":0}]}, 'Iri', {"POST /api/iris/connectors/{connector_id}/start":{"protocol":"http","parameters":[{"name":"connector_id","in":"path","required":true,"schema":{"type":"string","title":"Connector Id"},"index$":0}]},"POST /api/iris/tasks/{task_id}/run":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"idempotencyKey":{"type":"string","maxLength":255,"minLength":1,"title":"Idempotencykey","key$":"idempotencyKey"},"correlationId":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Correlationid","key$":"correlationId"},"productId":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"Productid","key$":"productId"}},"type":"object","required":["idempotencyKey"],"title":"IrisTaskRunRequest","x-ref":"#/components/schemas/IrisTaskRunRequest","index$":1}}}},"parameters":[{"name":"task_id","in":"path","required":true,"schema":{"type":"string","title":"Task Id"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const iri_ref01_ent = client.Iri()
    let iri_ref01_data = setup.data.new.iri['iri_ref01']
    iri_ref01_data['task_id'] = setup.idmap['task01']

    iri_ref01_data = (await iri_ref01_ent.create(iri_ref01_data)).data()
    assert(null != iri_ref01_data)


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
      '../../../../.sdk/test/entity/iri/IriTestData.json')

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
    ['iri01','iri02','iri03','task01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_IRI_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_IRI_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_IRI_ENTID']
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
  
