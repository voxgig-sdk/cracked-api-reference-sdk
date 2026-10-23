

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


describe('SlideEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.Slide()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Slide().create({"carousel_id":1,"slide_index":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'slide.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"caption":{"a":true,"h":"Caption","n":"caption","r":false,"t":"`$ANY`","key$":"caption","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"prompt":{"a":true,"h":"Prompt","n":"prompt","r":false,"t":"`$ANY`","key$":"prompt","index$":2}},"id":{"field":"id","name":"id"},"name":"slide","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["caption","image_model","prompt"],"co":{"id":"POST /api/carousel/{video_id}/slides/{slide_index}/regenerate","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"carousel_id","or":"video_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"slide_index","or":"slide_index","r":true,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"POST","o":"/api/carousel/{video_id}/slides/{slide_index}/regenerate","q":{"$action":"regenerate","exist":["carousel_id","slide_index"]},"r":{"param":{"video_id":"carousel_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"carousel"},{"var":"carousel_id"},{"lit":"slides"},{"var":"slide_index"},{"lit":"regenerate"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["caption","prompt"],"co":{"id":"PATCH /api/carousel/{video_id}/slides/{slide_index}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"carousel_id","or":"video_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"slide_index","r":true,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"PATCH","o":"/api/carousel/{video_id}/slides/{slide_index}","q":{"exist":["carousel_id","id"]},"r":{"param":{"slide_index":"id","video_id":"carousel_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"carousel"},{"var":"carousel_id"},{"lit":"slides"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.carousel"],["$.main.kit.entity.carousel"]]},"key$":"slide","name__orig":"slide","Name":"Slide","name_":"slide","name-":"slide","NAME":"SLIDE","index$":139}, {"active":true,"entity":"slide","key$":"BasicSlideFlow","kind":"basic","name":"BasicSlideFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"slide_ref01"},"m":{"carousel_id":"carousel01","slide_index":"slide_index01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"carousel_id":"carousel01"},"i":{"ref":"slide_ref01","srcdatavar":"slide_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-slide_ref01"}}],"v":[],"index$":1}]}, 'Slide', {"POST /api/carousel/{video_id}/slides/{slide_index}/regenerate":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"image_model":{"anyOf":[{"type":"string","enum":["gpt-image-2-5-sunburst-text-to-image","nano-banana-2","qwen2-1/image-to-image"],"title":"CarouselImageModel","x-ref":"#/components/schemas/CarouselImageModel"},{"type":"null"}]},"prompt":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Prompt"},"caption":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Caption"}},"type":"object","title":"RegenerateSlideRequest","x-ref":"#/components/schemas/RegenerateSlideRequest"}}}},"parameters":[{"name":"video_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"Video Id"},"index$":0},{"name":"slide_index","in":"path","required":true,"schema":{"type":"integer","title":"Slide Index"},"index$":1}]},"PATCH /api/carousel/{video_id}/slides/{slide_index}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"caption":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Caption","key$":"caption"},"prompt":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Prompt","key$":"prompt"}},"type":"object","title":"UpdateSlideRequest","x-ref":"#/components/schemas/UpdateSlideRequest","index$":1}}}},"parameters":[{"name":"video_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"Video Id"},"index$":0},{"name":"slide_index","in":"path","required":true,"schema":{"type":"integer","title":"Slide Index"},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const slide_ref01_ent = client.Slide()
    let slide_ref01_data = setup.data.new.slide['slide_ref01']
    slide_ref01_data['carousel_id'] = setup.idmap['carousel01']
    slide_ref01_data['slide_index'] = setup.idmap['slide_index01']

    slide_ref01_data = (await slide_ref01_ent.create(slide_ref01_data)).data()
    assert(null != slide_ref01_data.id)


    // UPDATE
    const slide_ref01_data_up0: any = {}
    slide_ref01_data_up0.id = slide_ref01_data.id
    slide_ref01_data_up0['carousel_id'] = setup.idmap['carousel_id'] ?? setup.idmap['carousel01']

    const slide_ref01_resdata_up0 = (await slide_ref01_ent.update(slide_ref01_data_up0)).data()
    assert(slide_ref01_resdata_up0.id === slide_ref01_data_up0.id)


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
      '../../../../.sdk/test/entity/slide/SlideTestData.json')

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
    ['slide01','slide02','slide03','carousel01','carousel02','carousel03','slide_index01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_SLIDE_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_SLIDE_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_SLIDE_ENTID']
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
  
