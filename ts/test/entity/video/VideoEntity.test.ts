

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


describe('VideoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.Video()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Video().load({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'video.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"agent_id":{"a":true,"h":"Agent Id","n":"agent_id","r":false,"t":"`$STRING`","key$":"agent_id","index$":0},"bookmarked":{"a":true,"h":"Bookmarked","n":"bookmarked","r":false,"t":"`$ANY`","key$":"bookmarked","index$":1},"captions":{"a":true,"h":"Captions","n":"captions","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"t":"`$ANY`","key$":"captions","index$":2},"carousel_data":{"a":true,"h":"Carousel Data","n":"carousel_data","r":false,"t":"`$ANY`","key$":"carousel_data","index$":3},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"t":"`$STRING`","key$":"created_at","index$":4},"duration":{"a":true,"h":"Duration","n":"duration","r":false,"t":"`$NUMBER`","key$":"duration","index$":5},"generation_status":{"a":true,"h":"Generation Status","n":"generation_status","r":false,"t":"`$ANY`","key$":"generation_status","index$":6},"id":{"a":true,"fo":"uuid4","h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":7},"image_prompt":{"a":true,"h":"Image Prompt","n":"image_prompt","r":false,"t":"`$ANY`","key$":"image_prompt","index$":8},"is_onboarding":{"a":true,"h":"Is Onboarding","n":"is_onboarding","r":false,"t":"`$BOOLEAN`","key$":"is_onboarding","index$":9},"is_template":{"a":true,"h":"Is Template","n":"is_template","r":false,"t":"`$BOOLEAN`","key$":"is_template","index$":10},"main_avatar":{"a":true,"h":"Main Avatar","n":"main_avatar","r":false,"t":"`$ANY`","key$":"main_avatar","index$":11},"main_prompt":{"a":true,"h":"Main Prompt","n":"main_prompt","r":false,"t":"`$ANY`","key$":"main_prompt","index$":12},"media_asset_id":{"a":true,"h":"Media Asset Id","n":"media_asset_id","r":false,"t":"`$STRING`","key$":"media_asset_id","index$":13},"product_id":{"a":true,"h":"Product Id","n":"product_id","r":false,"t":"`$STRING`","key$":"product_id","index$":14},"reel_id":{"a":true,"h":"Reel Id","n":"reel_id","r":false,"t":"`$STRING`","key$":"reel_id","index$":15},"thumbnail_url":{"a":true,"h":"Thumbnail Url","n":"thumbnail_url","r":false,"t":"`$ANY`","key$":"thumbnail_url","index$":16},"title":{"a":true,"h":"Title","n":"title","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"title","index$":17},"type":{"a":true,"h":"Type","n":"type","r":false,"t":"`$ANY`","key$":"type","index$":18},"updated_at":{"a":true,"h":"Updated At","n":"updated_at","r":false,"t":"`$ANY`","key$":"updated_at","index$":19},"url":{"a":true,"h":"Url","n":"url","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"url","index$":20},"user_id":{"a":true,"h":"User Id","n":"user_id","r":false,"t":"`$STRING`","key$":"user_id","index$":21},"video_id":{"a":true,"fo":"uuid","h":"Video Id","n":"video_id","r":true,"t":"`$STRING`","key$":"video_id","index$":22}},"id":{"field":"id","name":"id"},"name":"video","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /videos/{video_id}/retry-video","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"video_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/videos/{video_id}/retry-video","q":{"$action":"retry_video","exist":["id"]},"r":{"param":{"video_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"videos"},{"var":"id"},{"lit":"retry-video"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"bf":["captions","video_id"],"co":{"id":"POST /api/core/update-video-captions","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/core/update-video-captions","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"core"},{"lit":"update-video-captions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"bf":["agent_id","bookmarked","captions","carousel_data","duration","generation_status","image_prompt","is_onboarding","is_template","main_prompt","media_asset_id","product_id","reel_id","thumbnail_url","title","type","url","user_id"],"co":{"id":"POST /videos/","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/videos/","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"videos"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /videos/{video_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"video_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/videos/{video_id}","q":{"exist":["id"]},"r":{"param":{"video_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"videos"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /videos/{video_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"video_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/videos/{video_id}","q":{"exist":["id"]},"r":{"param":{"video_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"videos"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["agent_id","bookmarked","captions","carousel_data","duration","generation_status","image_prompt","is_onboarding","is_template","main_prompt","media_asset_id","product_id","reel_id","thumbnail_url","title","type","url","user_id"],"co":{"id":"PATCH /videos/{video_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"video_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/videos/{video_id}","q":{"exist":["id"]},"r":{"param":{"video_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"videos"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"bf":["is_template"],"co":{"id":"PATCH /videos/{video_id}/template","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"video_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/videos/{video_id}/template","q":{"$action":"template","exist":["id"]},"r":{"param":{"video_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"videos"},{"var":"id"},{"lit":"template"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"video","name__orig":"video","Name":"Video","name_":"video","name-":"video","NAME":"VIDEO","index$":165}, {"active":true,"entity":"video","key$":"BasicVideoFlow","kind":"basic","name":"BasicVideoFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"video_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"video_ref01","srcdatavar":"video_ref01_data","suffix":"_up0","textfield":"agent_id"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-video_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"video_ref01","srcdatavar":"video_ref01_data","suffix":"_dt0"},"m":{"id":"video01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-video_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"video_ref01","suffix":"_rm0"},"m":{"id":"video01"},"o":"remove","s":[],"v":[],"index$":3}]}, 'Video', {"POST /videos/{video_id}/retry-video":{"protocol":"http","parameters":[{"name":"video_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"Video Id"},"index$":0}]},"POST /api/core/update-video-captions":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"video_id":{"type":"string","format":"uuid","title":"Video Id","key$":"video_id"},"captions":{"type":"string","title":"Captions","key$":"captions"}},"type":"object","required":["video_id","captions"],"title":"UpdateVideoCaptionsRequest","x-ref":"#/components/schemas/UpdateVideoCaptionsRequest","index$":1}}},"required":true},"parameters":[]},"POST /videos/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"url":{"type":"string","title":"Url","key$":"url"},"title":{"type":"string","title":"Title","key$":"title"},"duration":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Duration","key$":"duration"},"bookmarked":{"anyOf":[{"type":"boolean"},{"type":"null"}],"title":"Bookmarked","key$":"bookmarked"},"thumbnail_url":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Thumbnail Url","key$":"thumbnail_url"},"media_asset_id":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"Media Asset Id","key$":"media_asset_id"},"main_prompt":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Main Prompt","key$":"main_prompt"},"image_prompt":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Image Prompt","key$":"image_prompt"},"captions":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Captions","key$":"captions"},"is_template":{"anyOf":[{"type":"boolean"},{"type":"null"}],"title":"Is Template","key$":"is_template"},"is_onboarding":{"anyOf":[{"type":"boolean"},{"type":"null"}],"title":"Is Onboarding","key$":"is_onboarding"},"generation_status":{"anyOf":[{"type":"object"},{"type":"null"}],"title":"Generation Status","key$":"generation_status"},"carousel_data":{"anyOf":[{"type":"object"},{"type":"null"}],"title":"Carousel Data","key$":"carousel_data"},"type":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Type","key$":"type"},"agent_id":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Agent Id","key$":"agent_id"},"reel_id":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"Reel Id","key$":"reel_id"},"user_id":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"User Id","key$":"user_id"},"product_id":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"Product Id","key$":"product_id"}},"type":"object","required":["url","title"],"title":"VideoCreate","x-ref":"#/components/schemas/VideoCreate","index$":1}}},"required":true},"parameters":[]},"GET /videos/{video_id}":{"protocol":"http","parameters":[{"name":"video_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"Video Id"},"index$":0}]},"DELETE /videos/{video_id}":{"protocol":"http","parameters":[{"name":"video_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"Video Id"},"index$":0}]},"PATCH /videos/{video_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"url":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Url","key$":"url"},"title":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Title","key$":"title"},"duration":{"anyOf":[{"type":"number"},{"type":"null"}],"title":"Duration","key$":"duration"},"bookmarked":{"anyOf":[{"type":"boolean"},{"type":"null"}],"title":"Bookmarked","key$":"bookmarked"},"thumbnail_url":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Thumbnail Url","key$":"thumbnail_url"},"media_asset_id":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"Media Asset Id","key$":"media_asset_id"},"main_prompt":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Main Prompt","key$":"main_prompt"},"image_prompt":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Image Prompt","key$":"image_prompt"},"captions":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Captions","key$":"captions"},"is_template":{"anyOf":[{"type":"boolean"},{"type":"null"}],"title":"Is Template","key$":"is_template"},"is_onboarding":{"anyOf":[{"type":"boolean"},{"type":"null"}],"title":"Is Onboarding","key$":"is_onboarding"},"generation_status":{"anyOf":[{"type":"object"},{"type":"null"}],"title":"Generation Status","key$":"generation_status"},"carousel_data":{"anyOf":[{"type":"object"},{"type":"null"}],"title":"Carousel Data","key$":"carousel_data"},"type":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Type","key$":"type"},"agent_id":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Agent Id","key$":"agent_id"},"reel_id":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"Reel Id","key$":"reel_id"},"user_id":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"User Id","key$":"user_id"},"product_id":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"Product Id","key$":"product_id"}},"type":"object","title":"VideoUpdate","x-ref":"#/components/schemas/VideoUpdate","index$":1}}}},"parameters":[{"name":"video_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"Video Id"},"index$":0}]},"PATCH /videos/{video_id}/template":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"is_template":{"type":"boolean","title":"Is Template"}},"type":"object","required":["is_template"],"title":"VideoTemplateUpdate","x-ref":"#/components/schemas/VideoTemplateUpdate"}}}},"parameters":[{"name":"video_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"Video Id"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const video_ref01_ent = client.Video()
    let video_ref01_data = setup.data.new.video['video_ref01']

    video_ref01_data = (await video_ref01_ent.create(video_ref01_data)).data()
    assert(null != video_ref01_data.id)


    // UPDATE
    const video_ref01_data_up0: any = {}
    video_ref01_data_up0.id = video_ref01_data.id

    const video_ref01_markdef_up0 = { name: 'agent_id', value: 'Mark01-video_ref01_' + setup.now }
    ;(video_ref01_data_up0 as any)[video_ref01_markdef_up0.name] = video_ref01_markdef_up0.value

    const video_ref01_resdata_up0 = (await video_ref01_ent.update(video_ref01_data_up0)).data()
    assert(video_ref01_resdata_up0.id === video_ref01_data_up0.id)

    assert((video_ref01_resdata_up0 as any)[video_ref01_markdef_up0.name] === video_ref01_markdef_up0.value)


    // LOAD
    const video_ref01_match_dt0: any = {}
    video_ref01_match_dt0.id = video_ref01_data.id
    const video_ref01_data_dt0 = (await video_ref01_ent.load(video_ref01_match_dt0)).data()
    assert(video_ref01_data_dt0.id === video_ref01_data.id)


    // REMOVE
    const video_ref01_match_rm0: any = { id: video_ref01_data.id }
    await video_ref01_ent.remove(video_ref01_match_rm0)
  

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
      '../../../../.sdk/test/entity/video/VideoTestData.json')

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
    ['video01','video02','video03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_VIDEO_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_VIDEO_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_VIDEO_ENTID']
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
  
