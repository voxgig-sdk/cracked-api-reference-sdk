

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


describe('IrisTaskEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.IrisTask()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('iris_task hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of CrackedApiReferenceSDK.test(offline).IrisTask().stream('list')) { }
    }, /offline/)

    for await (const _item of CrackedApiReferenceSDK.test(offline).IrisTask()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.IrisTask().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of CrackedApiReferenceSDK.test().IrisTask().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.IrisTask().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.IrisTask().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.IrisTask().list({"product_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'iris_task.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"approvalRequired":{"a":true,"h":"Approval Required","n":"approvalRequired","r":false,"t":"`$BOOLEAN`","key$":"approvalRequired","index$":0},"cadence":{"a":true,"h":"Cadence","n":"cadence","r":false,"t":"`$STRING`","key$":"cadence","index$":1},"capability":{"a":true,"h":"Capability","n":"capability","r":false,"t":"`$ANY`","key$":"capability","index$":2},"completed":{"a":true,"h":"Completed","n":"completed","r":false,"t":"`$ARRAY`","key$":"completed","index$":3},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":4},"discover":{"a":true,"h":"Discover","n":"discover","r":false,"t":"`$ARRAY`","key$":"discover","index$":5},"productId":{"a":true,"h":"Product Id","n":"productId","r":false,"t":"`$ANY`","key$":"productId","index$":6},"recurring":{"a":true,"h":"Recurring","n":"recurring","r":false,"t":"`$ARRAY`","key$":"recurring","index$":7},"requiredConnectors":{"a":true,"h":"Required Connectors","n":"requiredConnectors","r":false,"t":"`$ARRAY`","key$":"requiredConnectors","index$":8},"title":{"a":true,"h":"Title","n":"title","r":true,"t":"`$STRING`","key$":"title","index$":9}},"name":"iris_task","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["approvalRequired","cadence","capability","description","productId","requiredConnectors","title"],"co":{"id":"POST /api/iris/tasks","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/iris/tasks","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"iris"},{"lit":"tasks"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/iris/tasks","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"product_id","or":"product_id","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/iris/tasks","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"iris"},{"lit":"tasks"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"iris_task","name__orig":"iris_task","Name":"IrisTask","name_":"iris_task","name-":"iris-task","NAME":"IRIS_TASK","index$":90}, {"active":true,"entity":"iris_task","key$":"BasicIrisTaskFlow","kind":"basic","name":"BasicIrisTaskFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"iris_task_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"iris_task_ref01"}}],"index$":1}]}, 'IrisTask', {"POST /api/iris/tasks":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"title":{"type":"string","maxLength":255,"minLength":1,"title":"Title","key$":"title"},"description":{"type":"string","title":"Description","default":"","key$":"description"},"cadence":{"type":"string","title":"Cadence","default":"manual","key$":"cadence"},"capability":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Capability","key$":"capability"},"requiredConnectors":{"items":{"type":"string"},"type":"array","title":"Requiredconnectors","key$":"requiredConnectors"},"approvalRequired":{"type":"boolean","title":"Approvalrequired","default":false,"key$":"approvalRequired"},"productId":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"Productid","key$":"productId"}},"type":"object","required":["title"],"title":"IrisTaskCreateRequest","x-ref":"#/components/schemas/IrisTaskCreateRequest","index$":1}}}},"parameters":[]},"GET /api/iris/tasks":{"protocol":"http","parameters":[{"name":"product_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"Product Id"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const iris_task_ref01_ent = client.IrisTask()
    let iris_task_ref01_data = setup.data.new.iris_task['iris_task_ref01']

    iris_task_ref01_data = (await iris_task_ref01_ent.create(iris_task_ref01_data)).data()
    assert(null != iris_task_ref01_data)


    // LIST
    const iris_task_ref01_match: any = {}

    const iris_task_ref01_list = (await iris_task_ref01_ent.list(iris_task_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/iris_task/IrisTaskTestData.json')

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
    ['iris_task01','iris_task02','iris_task03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_IRIS_TASK_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_IRIS_TASK_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_IRIS_TASK_ENTID']
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
  
