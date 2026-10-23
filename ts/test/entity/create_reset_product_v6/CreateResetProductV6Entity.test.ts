

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


describe('CreateResetProductV6Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.CreateResetProductV6()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.CreateResetProductV6().create({"onboarding_data_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'create_reset_product_v6.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"agents_transferred":{"a":true,"h":"Agents Transferred","n":"agents_transferred","r":true,"t":"`$INTEGER`","key$":"agents_transferred","index$":0},"credits_deducted":{"a":true,"h":"Credits Deducted","n":"credits_deducted","r":true,"t":"`$INTEGER`","key$":"credits_deducted","index$":1},"onboarding_data_id":{"a":true,"h":"Onboarding Data Id","n":"onboarding_data_id","r":true,"t":"`$STRING`","key$":"onboarding_data_id","index$":2},"product_id":{"a":true,"h":"Product Id","n":"product_id","r":true,"t":"`$STRING`","key$":"product_id","index$":3},"remaining_credits":{"a":true,"h":"Remaining Credits","n":"remaining_credits","r":true,"t":"`$INTEGER`","key$":"remaining_credits","index$":4},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":5},"videos_queued":{"a":true,"h":"Videos Queued","n":"videos_queued","r":true,"t":"`$INTEGER`","key$":"videos_queued","index$":6}},"name":"create_reset_product_v6","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["onboarding_data_id"],"co":{"id":"POST /api/reset-product/create-v6","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/reset-product/create-v6","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"reset-product"},{"lit":"create-v6"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"create_reset_product_v6","name__orig":"create_reset_product_v6","Name":"CreateResetProductV6","name_":"create_reset_product_v6","name-":"create-reset-product-v6","NAME":"CREATE_RESET_PRODUCT_V6","index$":62}, {"active":true,"entity":"create_reset_product_v6","key$":"BasicCreateResetProductV6Flow","kind":"basic","name":"BasicCreateResetProductV6Flow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"create_reset_product_v6_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'CreateResetProductV6', {"POST /api/reset-product/create-v6":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"onboarding_data_id":{"type":"string","title":"Onboarding Data Id","key$":"onboarding_data_id"}},"type":"object","required":["onboarding_data_id"],"title":"CreateResetProductV6Request","description":"Request body for create-v6 endpoint.","x-ref":"#/components/schemas/CreateResetProductV6Request","index$":1}}},"required":true},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const create_reset_product_v6_ref01_ent = client.CreateResetProductV6()
    let create_reset_product_v6_ref01_data = setup.data.new.create_reset_product_v6['create_reset_product_v6_ref01']

    create_reset_product_v6_ref01_data = (await create_reset_product_v6_ref01_ent.create(create_reset_product_v6_ref01_data)).data()
    assert(null != create_reset_product_v6_ref01_data)


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
      '../../../../.sdk/test/entity/create_reset_product_v6/CreateResetProductV6TestData.json')

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
    ['create_reset_product_v601','create_reset_product_v602','create_reset_product_v603'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_CREATE_RESET_PRODUCT_V6_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_CREATE_RESET_PRODUCT_V6_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_CREATE_RESET_PRODUCT_V6_ENTID']
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
  
