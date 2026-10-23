

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


describe('ScheduleV2Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.ScheduleV2()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('schedule_v2 hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of CrackedApiReferenceSDK.test(offline).ScheduleV2().stream('list')) { }
    }, /offline/)

    for await (const _item of CrackedApiReferenceSDK.test(offline).ScheduleV2()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.ScheduleV2().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of CrackedApiReferenceSDK.test().ScheduleV2().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.ScheduleV2().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.ScheduleV2().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ScheduleV2().list({"all_product":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'schedule_v2.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"agent":{"a":true,"h":"Agent","n":"agent","r":false,"t":"`$ANY`","key$":"agent","index$":0},"comment":{"a":true,"h":"Comment","n":"comment","r":false,"t":"`$ANY`","key$":"comment","index$":1},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"t":"`$STRING`","key$":"created_at","index$":2},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":3},"instagram_posted_by":{"a":true,"h":"Instagram Posted By","n":"instagram_posted_by","r":false,"t":"`$ANY`","key$":"instagram_posted_by","index$":4},"instagram_posted_url":{"a":true,"h":"Instagram Posted Url","n":"instagram_posted_url","r":false,"t":"`$ANY`","key$":"instagram_posted_url","index$":5},"instagram_scraped_social_post_id":{"a":true,"h":"Instagram Scraped Social Post Id","n":"instagram_scraped_social_post_id","r":false,"t":"`$STRING`","key$":"instagram_scraped_social_post_id","index$":6},"is_instagram_posted":{"a":true,"h":"Is Instagram Posted","n":"is_instagram_posted","r":false,"t":"`$BOOLEAN`","key$":"is_instagram_posted","index$":7},"is_tiktok_posted":{"a":true,"h":"Is Tiktok Posted","n":"is_tiktok_posted","r":false,"t":"`$BOOLEAN`","key$":"is_tiktok_posted","index$":8},"is_youtube_posted":{"a":true,"h":"Is Youtube Posted","n":"is_youtube_posted","r":false,"t":"`$BOOLEAN`","key$":"is_youtube_posted","index$":9},"reorders":{"a":true,"h":"Reorders","n":"reorders","r":true,"t":"`$ARRAY`","key$":"reorders","index$":10},"results":{"a":true,"h":"Results","n":"results","r":false,"t":"`$ANY`","key$":"results","index$":11},"scheduled_datetime":{"a":true,"fo":"date-time","h":"Scheduled Datetime","n":"scheduled_datetime","r":true,"t":"`$STRING`","key$":"scheduled_datetime","index$":12},"source_type":{"a":true,"h":"Source Type","n":"source_type","r":true,"t":"`$STRING`","key$":"source_type","index$":13},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":14},"tiktok_posted_by":{"a":true,"h":"Tiktok Posted By","n":"tiktok_posted_by","r":false,"t":"`$ANY`","key$":"tiktok_posted_by","index$":15},"tiktok_posted_url":{"a":true,"h":"Tiktok Posted Url","n":"tiktok_posted_url","r":false,"t":"`$ANY`","key$":"tiktok_posted_url","index$":16},"tiktok_scraped_social_post_id":{"a":true,"h":"Tiktok Scraped Social Post Id","n":"tiktok_scraped_social_post_id","r":false,"t":"`$STRING`","key$":"tiktok_scraped_social_post_id","index$":17},"video":{"a":true,"h":"Video","n":"video","r":false,"t":"`$ANY`","key$":"video","index$":18},"video_id":{"a":true,"fo":"uuid","h":"Video Id","n":"video_id","r":true,"t":"`$STRING`","key$":"video_id","index$":19},"youtube_posted_by":{"a":true,"h":"Youtube Posted By","n":"youtube_posted_by","r":false,"t":"`$ANY`","key$":"youtube_posted_by","index$":20},"youtube_posted_url":{"a":true,"h":"Youtube Posted Url","n":"youtube_posted_url","r":false,"t":"`$ANY`","key$":"youtube_posted_url","index$":21},"youtube_scraped_social_post_id":{"a":true,"h":"Youtube Scraped Social Post Id","n":"youtube_scraped_social_post_id","r":false,"t":"`$STRING`","key$":"youtube_scraped_social_post_id","index$":22}},"id":{"field":"id","name":"id"},"name":"schedule_v2","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["video_id"],"co":{"id":"POST /api/schedule/queue/add","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"product_id","or":"product_id","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/schedule/queue/add","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"schedule"},{"lit":"queue"},{"lit":"add"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"bf":["reorders"],"co":{"id":"POST /api/schedule/queue/reorder","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/schedule/queue/reorder","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"schedule"},{"lit":"queue"},{"lit":"reorder"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /api/schedule/test-daily-email","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/schedule/test-daily-email","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"schedule"},{"lit":"test-daily-email"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/schedule/queue","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":false,"k":"query","n":"all_product","or":"all_products","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"ex":100,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"product_id","or":"product_id","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$ANY`","index$":4}]},"k":"http","m":"GET","o":"/api/schedule/queue","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"schedule"},{"lit":"queue"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/schedule/results","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":false,"k":"query","n":"all_product","or":"all_products","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"ex":7,"k":"query","n":"day","or":"days","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":100,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"product_id","or":"product_id","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/api/schedule/results","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"schedule"},{"lit":"results"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/schedule/queue/{queue_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"queue_id","or":"queue_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/api/schedule/queue/{queue_id}","q":{"exist":["queue_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"schedule"},{"lit":"queue"},{"var":"queue_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["video_id"],"co":{"id":"PUT /api/schedule/queue/{queue_id}/replace-video","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"queue_id","or":"queue_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/api/schedule/queue/{queue_id}/replace-video","q":{"$action":"replace_video","exist":["queue_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"schedule"},{"lit":"queue"},{"var":"queue_id"},{"lit":"replace-video"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"schedule_v2","name__orig":"schedule_v2","Name":"ScheduleV2","name_":"schedule_v2","name-":"schedule-v2","NAME":"SCHEDULE_V2","index$":125}, {"active":true,"entity":"schedule_v2","key$":"BasicScheduleV2Flow","kind":"basic","name":"BasicScheduleV2Flow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"schedule_v2_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"schedule_v2_ref01"}}],"index$":1},{"a":false,"d":{},"i":{"ref":"schedule_v2_ref01","srcdatavar":"schedule_v2_ref01_data","suffix":"_up0","textfield":"created_at"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-schedule_v2_ref01"}}],"v":[],"unreachable":true},{"a":true,"d":{},"i":{"ref":"schedule_v2_ref01","srcdatavar":"schedule_v2_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-schedule_v2_ref01"}}],"index$":2},{"a":false,"d":{},"i":{"ref":"schedule_v2_ref01","suffix":"_rm0"},"m":{"id":"schedule_v201"},"o":"remove","s":[],"v":[],"unreachable":true},{"a":false,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"schedule_v2_ref01"}}],"unreachable":true}]}, 'ScheduleV2', {"POST /api/schedule/queue/add":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"video_id":{"type":"string","format":"uuid","title":"Video Id","key$":"video_id"}},"type":"object","required":["video_id"],"title":"ScheduleQueueAdd","x-ref":"#/components/schemas/ScheduleQueueAdd","index$":1}}}},"parameters":[{"name":"product_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"description":"Product ID to schedule to (enterprise)","title":"Product Id"},"description":"Product ID to schedule to (enterprise)","index$":0}]},"POST /api/schedule/queue/reorder":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"reorders":{"items":{"type":"object"},"type":"array","title":"Reorders","key$":"reorders"}},"type":"object","required":["reorders"],"title":"ScheduleQueueReorder","x-ref":"#/components/schemas/ScheduleQueueReorder","index$":1}}},"required":true},"parameters":[]},"POST /api/schedule/test-daily-email":{"protocol":"http","parameters":[]},"GET /api/schedule/queue":{"protocol":"http","parameters":[{"name":"status","in":"query","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Status"},"index$":0},{"name":"product_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"description":"Filter by product ID (enterprise)","title":"Product Id"},"description":"Filter by product ID (enterprise)","index$":1},{"name":"all_products","in":"query","required":false,"schema":{"type":"boolean","description":"Include all products for enterprise overview","default":false,"title":"All Products"},"description":"Include all products for enterprise overview","index$":2},{"name":"limit","in":"query","required":false,"schema":{"type":"integer","maximum":500,"minimum":1,"default":100,"title":"Limit"},"index$":3},{"name":"offset","in":"query","required":false,"schema":{"type":"integer","minimum":0,"default":0,"title":"Offset"},"index$":4}]},"GET /api/schedule/results":{"protocol":"http","parameters":[{"name":"limit","in":"query","required":false,"schema":{"type":"integer","maximum":100,"minimum":1,"description":"Max number of videos to return","default":100,"title":"Limit"},"description":"Max number of videos to return","index$":0},{"name":"offset","in":"query","required":false,"schema":{"type":"integer","minimum":0,"description":"Pagination offset","default":0,"title":"Offset"},"description":"Pagination offset","index$":1},{"name":"days","in":"query","required":false,"schema":{"type":"integer","maximum":3650,"minimum":1,"description":"Number of days to include (default: 7)","default":7,"title":"Days"},"description":"Number of days to include (default: 7)","index$":2},{"name":"product_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"description":"Filter by product ID (enterprise)","title":"Product Id"},"description":"Filter by product ID (enterprise)","index$":3},{"name":"all_products","in":"query","required":false,"schema":{"type":"boolean","description":"Include all products for enterprise overview","default":false,"title":"All Products"},"description":"Include all products for enterprise overview","index$":4}]},"DELETE /api/schedule/queue/{queue_id}":{"protocol":"http","parameters":[{"name":"queue_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"Queue Id"},"index$":0}]},"PUT /api/schedule/queue/{queue_id}/replace-video":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"video_id":{"type":"string","format":"uuid","title":"Video Id","key$":"video_id"}},"type":"object","required":["video_id"],"title":"ScheduleQueueAdd","x-ref":"#/components/schemas/ScheduleQueueAdd"}}}},"parameters":[{"name":"queue_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"Queue Id"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const schedule_v2_ref01_ent = client.ScheduleV2()
    let schedule_v2_ref01_data = setup.data.new.schedule_v2['schedule_v2_ref01']

    schedule_v2_ref01_data = (await schedule_v2_ref01_ent.create(schedule_v2_ref01_data)).data()
    assert(null != schedule_v2_ref01_data.id)


    // LIST
    const schedule_v2_ref01_match: any = {}

    const schedule_v2_ref01_list = (await schedule_v2_ref01_ent.list(schedule_v2_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(schedule_v2_ref01_list, { id: schedule_v2_ref01_data.id })))


    // LOAD
    const schedule_v2_ref01_match_dt0: any = {}
    schedule_v2_ref01_match_dt0.id = schedule_v2_ref01_data.id
    const schedule_v2_ref01_data_dt0 = (await schedule_v2_ref01_ent.load(schedule_v2_ref01_match_dt0)).data()
    assert(schedule_v2_ref01_data_dt0.id === schedule_v2_ref01_data.id)


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
      '../../../../.sdk/test/entity/schedule_v2/ScheduleV2TestData.json')

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
    ['schedule_v201','schedule_v202','schedule_v203'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_SCHEDULE_V2_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_SCHEDULE_V2_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_SCHEDULE_V2_ENTID']
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
  
