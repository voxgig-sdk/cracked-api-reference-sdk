

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


describe('CarouselStatusEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.CarouselStatus()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.CarouselStatus().list({"carousel_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'carousel_status.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"caption":{"a":true,"h":"Caption","n":"caption","r":true,"t":"`$ANY`","key$":"caption","index$":0},"error":{"a":true,"h":"Error","n":"error","r":false,"t":"`$ANY`","key$":"error","index$":1},"image_model":{"a":true,"h":"Image Model","n":"image_model","r":false,"t":"`$ANY`","key$":"image_model","index$":2},"image_provider":{"a":true,"h":"Image Provider","n":"image_provider","r":false,"t":"`$ANY`","key$":"image_provider","index$":3},"image_task_id":{"a":true,"h":"Image Task Id","n":"image_task_id","r":false,"t":"`$STRING`","key$":"image_task_id","index$":4},"image_url":{"a":true,"h":"Image Url","n":"image_url","r":true,"t":"`$ANY`","key$":"image_url","index$":5},"index":{"a":true,"h":"Index","n":"index","r":true,"t":"`$INTEGER`","key$":"index","index$":6},"prompt":{"a":true,"h":"Prompt","n":"prompt","r":true,"t":"`$ANY`","key$":"prompt","index$":7},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":8}},"name":"carousel_status","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/carousel/{video_id}/status","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"carousel_id","or":"video_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/carousel/{video_id}/status","q":{"exist":["carousel_id"]},"r":{"param":{"video_id":"carousel_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"carousel"},{"var":"carousel_id"},{"lit":"status"}],"t":{"req":"`reqdata`","res":"`body.slides`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.carousel"]]},"key$":"carousel_status","name__orig":"carousel_status","Name":"CarouselStatus","name_":"carousel_status","name-":"carousel-status","NAME":"CAROUSEL_STATUS","index$":52}, {"active":true,"entity":"carousel_status","key$":"BasicCarouselStatusFlow","kind":"basic","name":"BasicCarouselStatusFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"carousel_id":"carousel01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"carousel_status_ref01"}}],"index$":0}]}, 'CarouselStatus', {"GET /api/carousel/{video_id}/status":{"protocol":"http","parameters":[{"name":"video_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"Video Id"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let carousel_status_ref01_data = Object.values(setup.data.existing.carousel_status)[0] as any

    // LIST
    const carousel_status_ref01_ent = client.CarouselStatus()
    const carousel_status_ref01_match: any = {}
    carousel_status_ref01_match['carousel_id'] = setup.idmap['carousel01']

    const carousel_status_ref01_list = (await carousel_status_ref01_ent.list(carousel_status_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/carousel_status/CarouselStatusTestData.json')

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
    ['carousel_status01','carousel_status02','carousel_status03','carousel01','carousel02','carousel03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_CAROUSEL_STATUS_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_CAROUSEL_STATUS_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_CAROUSEL_STATUS_ENTID']
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
  
