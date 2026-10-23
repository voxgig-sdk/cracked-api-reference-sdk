

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


describe('InitResetProductV6Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.InitResetProductV6()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.InitResetProductV6().create({"product_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'init_reset_product_v6.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"auto_schedule_disabled":{"a":true,"h":"Auto Schedule Disabled","n":"auto_schedule_disabled","r":true,"t":"`$BOOLEAN`","key$":"auto_schedule_disabled","index$":0},"old_product_id":{"a":true,"h":"Old Product Id","n":"old_product_id","r":true,"t":"`$STRING`","key$":"old_product_id","index$":1},"product_id":{"a":true,"h":"Product Id","n":"product_id","r":false,"t":"`$STRING`","key$":"product_id","index$":2},"queue_entries_cleared":{"a":true,"h":"Queue Entries Cleared","n":"queue_entries_cleared","r":true,"t":"`$INTEGER`","key$":"queue_entries_cleared","index$":3},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":4}},"name":"init_reset_product_v6","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["product_id"],"co":{"id":"POST /api/reset-product/init-v6","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/reset-product/init-v6","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"reset-product"},{"lit":"init-v6"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"init_reset_product_v6","name__orig":"init_reset_product_v6","Name":"InitResetProductV6","name_":"init_reset_product_v6","name-":"init-reset-product-v6","NAME":"INIT_RESET_PRODUCT_V6","index$":84}, {"active":true,"entity":"init_reset_product_v6","key$":"BasicInitResetProductV6Flow","kind":"basic","name":"BasicInitResetProductV6Flow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"init_reset_product_v6_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'InitResetProductV6', {"POST /api/reset-product/init-v6":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"product_id":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Product Id","key$":"product_id"}},"type":"object","title":"InitResetProductV6Request","description":"Request body for init-v6 endpoint.","x-ref":"#/components/schemas/InitResetProductV6Request","index$":1}}}},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const init_reset_product_v6_ref01_ent = client.InitResetProductV6()
    let init_reset_product_v6_ref01_data = setup.data.new.init_reset_product_v6['init_reset_product_v6_ref01']

    init_reset_product_v6_ref01_data = (await init_reset_product_v6_ref01_ent.create(init_reset_product_v6_ref01_data)).data()
    assert(null != init_reset_product_v6_ref01_data)


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
      '../../../../.sdk/test/entity/init_reset_product_v6/InitResetProductV6TestData.json')

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
    ['init_reset_product_v601','init_reset_product_v602','init_reset_product_v603'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_INIT_RESET_PRODUCT_V6_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_INIT_RESET_PRODUCT_V6_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_INIT_RESET_PRODUCT_V6_ENTID']
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
  
