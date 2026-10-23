

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


describe('CreateVariationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.CreateVariation()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.CreateVariation().create({"hook_duration":"x","media_asset_id":"x","product_id":"x","prompt":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'create_variation.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"hook_duration":{"a":true,"h":"Hook Duration","n":"hook_duration","r":true,"t":"`$INTEGER`","key$":"hook_duration","index$":0},"media_asset_id":{"a":true,"fo":"uuid","h":"Media Asset Id","n":"media_asset_id","r":true,"t":"`$STRING`","key$":"media_asset_id","index$":1},"message":{"a":true,"h":"Message","n":"message","r":true,"t":"`$STRING`","key$":"message","index$":2},"product_id":{"a":true,"fo":"uuid","h":"Product Id","n":"product_id","r":true,"t":"`$STRING`","key$":"product_id","index$":3},"prompt":{"a":true,"h":"Prompt","n":"prompt","r":true,"t":"`$STRING`","key$":"prompt","index$":4},"task_id":{"a":true,"h":"Task Id","n":"task_id","r":false,"t":"`$STRING`","key$":"task_id","index$":5},"video_id":{"a":true,"fo":"uuid","h":"Video Id","n":"video_id","r":true,"t":"`$STRING`","key$":"video_id","index$":6}},"name":"create_variation","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["hook_duration","media_asset_id","product_id","prompt"],"co":{"id":"POST /api/video-variation/create-hook","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/video-variation/create-hook","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"video-variation"},{"lit":"create-hook"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"bf":["media_asset_id","product_id"],"co":{"id":"POST /api/video-variation/create-invisible","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/video-variation/create-invisible","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"video-variation"},{"lit":"create-invisible"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"create_variation","name__orig":"create_variation","Name":"CreateVariation","name_":"create_variation","name-":"create-variation","NAME":"CREATE_VARIATION","index$":64}, {"active":true,"entity":"create_variation","key$":"BasicCreateVariationFlow","kind":"basic","name":"BasicCreateVariationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"create_variation_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'CreateVariation', {"POST /api/video-variation/create-hook":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"media_asset_id":{"type":"string","format":"uuid","title":"Media Asset Id","key$":"media_asset_id"},"product_id":{"type":"string","format":"uuid","title":"Product Id","key$":"product_id"},"prompt":{"type":"string","title":"Prompt","key$":"prompt"},"hook_duration":{"type":"integer","title":"Hook Duration","key$":"hook_duration"}},"type":"object","required":["media_asset_id","product_id","prompt","hook_duration"],"title":"CreateHookRequest","x-ref":"#/components/schemas/CreateHookRequest","index$":1}}},"required":true},"parameters":[]},"POST /api/video-variation/create-invisible":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"media_asset_id":{"type":"string","format":"uuid","title":"Media Asset Id","key$":"media_asset_id"},"product_id":{"type":"string","format":"uuid","title":"Product Id","key$":"product_id"}},"type":"object","required":["media_asset_id","product_id"],"title":"CreateInvisibleRequest","x-ref":"#/components/schemas/CreateInvisibleRequest","index$":1}}},"required":true},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const create_variation_ref01_ent = client.CreateVariation()
    let create_variation_ref01_data = setup.data.new.create_variation['create_variation_ref01']

    create_variation_ref01_data = (await create_variation_ref01_ent.create(create_variation_ref01_data)).data()
    assert(null != create_variation_ref01_data)


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
      '../../../../.sdk/test/entity/create_variation/CreateVariationTestData.json')

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
    ['create_variation01','create_variation02','create_variation03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_CREATE_VARIATION_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_CREATE_VARIATION_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_CREATE_VARIATION_ENTID']
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
  
