

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


describe('CreateSora2VideoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.CreateSora2Video()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.CreateSora2Video().create({"main_prompt":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'create_sora2_video.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"image_prompt":{"a":true,"h":"Image Prompt","n":"image_prompt","r":false,"t":"`$ANY`","key$":"image_prompt","index$":0},"main_prompt":{"a":true,"h":"Main Prompt","n":"main_prompt","r":true,"t":"`$STRING`","key$":"main_prompt","index$":1},"model":{"a":true,"h":"Model","n":"model","r":false,"t":"`$STRING`","key$":"model","index$":2},"requires_polling":{"a":true,"h":"Requires Polling","n":"requires_polling","r":false,"t":"`$BOOLEAN`","key$":"requires_polling","index$":3},"seconds":{"a":true,"h":"Seconds","n":"seconds","r":false,"t":"`$STRING`","key$":"seconds","index$":4},"size":{"a":true,"h":"Size","n":"size","r":false,"t":"`$STRING`","key$":"size","index$":5},"video":{"a":true,"h":"Video","n":"video","r":true,"t":"`$OBJECT`","key$":"video","index$":6}},"name":"create_sora2_video","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["image_prompt","main_prompt","model","seconds","size"],"co":{"id":"POST /api/core/create-sora2-video","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/core/create-sora2-video","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"core"},{"lit":"create-sora2-video"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"create_sora2_video","name__orig":"create_sora2_video","Name":"CreateSora2Video","name_":"create_sora2_video","name-":"create-sora2-video","NAME":"CREATE_SORA2_VIDEO","index$":63}, {"active":true,"entity":"create_sora2_video","key$":"BasicCreateSora2VideoFlow","kind":"basic","name":"BasicCreateSora2VideoFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"create_sora2_video_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'CreateSora2Video', {"POST /api/core/create-sora2-video":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"main_prompt":{"type":"string","title":"Main Prompt","key$":"main_prompt"},"image_prompt":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Image Prompt","key$":"image_prompt"},"model":{"type":"string","title":"Model","default":"sora-2","key$":"model"},"size":{"type":"string","title":"Size","default":"720x1280","key$":"size"},"seconds":{"type":"string","title":"Seconds","default":"15","key$":"seconds"}},"type":"object","required":["main_prompt"],"title":"CreateSora2VideoRequest","x-ref":"#/components/schemas/CreateSora2VideoRequest","index$":1}}},"required":true},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const create_sora2_video_ref01_ent = client.CreateSora2Video()
    let create_sora2_video_ref01_data = setup.data.new.create_sora2_video['create_sora2_video_ref01']

    create_sora2_video_ref01_data = (await create_sora2_video_ref01_ent.create(create_sora2_video_ref01_data)).data()
    assert(null != create_sora2_video_ref01_data)


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
      '../../../../.sdk/test/entity/create_sora2_video/CreateSora2VideoTestData.json')

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
    ['create_sora2_video01','create_sora2_video02','create_sora2_video03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_CREATE_SORA2_VIDEO_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_CREATE_SORA2_VIDEO_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_CREATE_SORA2_VIDEO_ENTID']
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
  
