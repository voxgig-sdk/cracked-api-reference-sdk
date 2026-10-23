

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


describe('CarouselEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.Carousel()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('carousel hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of CrackedApiReferenceSDK.test(offline).Carousel().stream('list')) { }
    }, /offline/)

    for await (const _item of CrackedApiReferenceSDK.test(offline).Carousel()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Carousel().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of CrackedApiReferenceSDK.test().Carousel().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Carousel().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Carousel().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Carousel().load({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'carousel.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"agent_id":{"a":true,"h":"Agent Id","n":"agent_id","r":true,"t":"`$STRING`","key$":"agent_id","index$":0},"agent_name":{"a":true,"h":"Agent Name","n":"agent_name","r":true,"t":"`$STRING`","key$":"agent_name","index$":1},"audit_created_at":{"a":true,"h":"Audit Created At","n":"audit_created_at","r":false,"t":"`$ANY`","key$":"audit_created_at","index$":2},"audit_snapshot_sha256":{"a":true,"h":"Audit Snapshot Sha256","n":"audit_snapshot_sha256","r":false,"t":"`$ANY`","key$":"audit_snapshot_sha256","index$":3},"caption":{"a":true,"h":"Caption","n":"caption","r":false,"t":"`$ANY`","key$":"caption","index$":4},"comments":{"a":true,"h":"Comments","n":"comments","r":false,"t":"`$ANY`","key$":"comments","index$":5},"fit_score":{"a":true,"h":"Fit Score","n":"fit_score","r":false,"t":"`$ANY`","key$":"fit_score","index$":6},"format":{"a":true,"h":"Format","n":"format","r":true,"t":"`$STRING`","key$":"format","index$":7},"formula":{"a":true,"h":"Formula","n":"formula","r":false,"t":"`$OBJECT`","key$":"formula","index$":8},"formula_id":{"a":true,"h":"Formula Id","n":"formula_id","r":false,"t":"`$STRING`","key$":"formula_id","index$":9},"formula_name":{"a":true,"h":"Formula Name","n":"formula_name","r":false,"t":"`$ANY`","key$":"formula_name","index$":10},"generation":{"a":true,"h":"Generation","n":"generation","r":false,"t":"`$OBJECT`","key$":"generation","index$":11},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":12},"image_prompt":{"a":true,"h":"Image Prompt","n":"image_prompt","r":false,"t":"`$ANY`","key$":"image_prompt","index$":13},"likes":{"a":true,"h":"Likes","n":"likes","r":false,"t":"`$ANY`","key$":"likes","index$":14},"main_prompt":{"a":true,"h":"Main Prompt","n":"main_prompt","r":false,"t":"`$ANY`","key$":"main_prompt","index$":15},"metrics_updated_at":{"a":true,"h":"Metrics Updated At","n":"metrics_updated_at","r":false,"t":"`$ANY`","key$":"metrics_updated_at","index$":16},"post_url":{"a":true,"h":"Post Url","n":"post_url","r":false,"t":"`$ANY`","key$":"post_url","index$":17},"profile_url":{"a":true,"h":"Profile Url","n":"profile_url","r":false,"t":"`$ANY`","key$":"profile_url","index$":18},"qa":{"a":true,"h":"Qa","n":"qa","r":false,"t":"`$OBJECT`","key$":"qa","index$":19},"qa_status":{"a":true,"h":"Qa Status","n":"qa_status","r":true,"t":"`$STRING`","key$":"qa_status","index$":20},"qa_verdict":{"a":true,"h":"Qa Verdict","n":"qa_verdict","r":false,"t":"`$ANY`","key$":"qa_verdict","index$":21},"quality_score":{"a":true,"h":"Quality Score","n":"quality_score","r":false,"t":"`$ANY`","key$":"quality_score","index$":22},"queue_id":{"a":true,"fo":"uuid","h":"Queue Id","n":"queue_id","r":true,"t":"`$STRING`","key$":"queue_id","index$":23},"relevance_score":{"a":true,"h":"Relevance Score","n":"relevance_score","r":false,"t":"`$ANY`","key$":"relevance_score","index$":24},"scheduled_at":{"a":true,"fo":"date-time","h":"Scheduled At","n":"scheduled_at","r":true,"t":"`$STRING`","key$":"scheduled_at","index$":25},"slide_count":{"a":true,"h":"Slide Count","n":"slide_count","r":true,"t":"`$INTEGER`","key$":"slide_count","index$":26},"slides":{"a":true,"h":"Slides","n":"slides","r":true,"t":"`$ARRAY`","key$":"slides","index$":27},"source":{"a":true,"h":"Source","n":"source","r":false,"t":"`$OBJECT`","key$":"source","index$":28},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":29},"thumbnail_url":{"a":true,"h":"Thumbnail Url","n":"thumbnail_url","r":false,"t":"`$ANY`","key$":"thumbnail_url","index$":30},"title":{"a":true,"h":"Title","n":"title","r":true,"t":"`$STRING`","key$":"title","index$":31},"video_id":{"a":true,"fo":"uuid","h":"Video Id","n":"video_id","r":true,"t":"`$STRING`","key$":"video_id","index$":32},"views":{"a":true,"h":"Views","n":"views","r":false,"t":"`$ANY`","key$":"views","index$":33}},"id":{"field":"id","name":"id"},"name":"carousel","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/carousel/{video_id}/finalize","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"video_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":false,"k":"query","n":"skip_schedule","or":"skip_schedule","r":false,"t":"`$BOOLEAN`","index$":0}]},"k":"http","m":"POST","o":"/api/carousel/{video_id}/finalize","q":{"$action":"finalize","exist":["id"]},"r":{"param":{"video_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"carousel"},{"var":"id"},{"lit":"finalize"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/admin/carousels","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"date","or":"date","r":false,"t":"`$ANY`","index$":0}]},"k":"http","m":"GET","o":"/api/admin/carousels","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"carousels"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/admin/carousels/{queue_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"queue_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/admin/carousels/{queue_id}","q":{"exist":["id"]},"r":{"param":{"queue_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"carousels"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"carousel","name__orig":"carousel","Name":"Carousel","name_":"carousel","name-":"carousel","NAME":"CAROUSEL","index$":50}, {"active":true,"entity":"carousel","key$":"BasicCarouselFlow","kind":"basic","name":"BasicCarouselFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"carousel_ref01"},"m":{"video_id":"video01"},"o":"create","s":[],"v":[],"unreachable":true},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"carousel_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"carousel_ref01","srcdatavar":"carousel_ref01_data","suffix":"_dt0"},"m":{"id":"carousel01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-carousel_ref01"}}],"index$":1}]}, 'Carousel', {"POST /api/carousel/{video_id}/finalize":{"protocol":"http","parameters":[{"name":"video_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"Video Id"},"index$":0},{"name":"skip_schedule","in":"query","required":false,"schema":{"type":"boolean","default":false,"title":"Skip Schedule"},"index$":1}]},"GET /api/admin/carousels":{"protocol":"http","parameters":[{"name":"date","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"date"},{"type":"null"}],"title":"Date"},"index$":0}]},"GET /api/admin/carousels/{queue_id}":{"protocol":"http","parameters":[{"name":"queue_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"Queue Id"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let carousel_ref01_data = Object.values(setup.data.existing.carousel)[0] as any

    // LIST
    const carousel_ref01_ent = client.Carousel()
    const carousel_ref01_match: any = {}

    const carousel_ref01_list = (await carousel_ref01_ent.list(carousel_ref01_match)).map((e: any) => e.data())


    // LOAD
    const carousel_ref01_match_dt0: any = {}
    carousel_ref01_match_dt0.id = carousel_ref01_data.id
    const carousel_ref01_data_dt0 = (await carousel_ref01_ent.load(carousel_ref01_match_dt0)).data()
    assert(carousel_ref01_data_dt0.id === carousel_ref01_data.id)


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
      '../../../../.sdk/test/entity/carousel/CarouselTestData.json')

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
    ['carousel01','carousel02','carousel03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_CAROUSEL_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_CAROUSEL_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_CAROUSEL_ENTID']
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
  
