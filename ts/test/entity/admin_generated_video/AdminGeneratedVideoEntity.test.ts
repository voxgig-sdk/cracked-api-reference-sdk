

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


describe('AdminGeneratedVideoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.AdminGeneratedVideo()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AdminGeneratedVideo().list({"user_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'admin_generated_video.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"agent_id":{"a":true,"h":"Agent Id","n":"agent_id","r":false,"t":"`$STRING`","key$":"agent_id","index$":0},"agent_name":{"a":true,"h":"Agent Name","n":"agent_name","r":false,"t":"`$ANY`","key$":"agent_name","index$":1},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"t":"`$STRING`","key$":"created_at","index$":2},"duration":{"a":true,"h":"Duration","n":"duration","r":false,"t":"`$NUMBER`","key$":"duration","index$":3},"generation_status":{"a":true,"h":"Generation Status","n":"generation_status","r":false,"t":"`$OBJECT`","key$":"generation_status","index$":4},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":5},"product_id":{"a":true,"h":"Product Id","n":"product_id","r":false,"t":"`$STRING`","key$":"product_id","index$":6},"thumbnail_url":{"a":true,"h":"Thumbnail Url","n":"thumbnail_url","r":false,"t":"`$ANY`","key$":"thumbnail_url","index$":7},"title":{"a":true,"h":"Title","n":"title","r":true,"t":"`$STRING`","key$":"title","index$":8},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":9},"updated_at":{"a":true,"h":"Updated At","n":"updated_at","r":false,"t":"`$ANY`","key$":"updated_at","index$":10},"url":{"a":true,"h":"Url","n":"url","r":true,"t":"`$STRING`","key$":"url","index$":11}},"id":{"field":"id","name":"id"},"name":"admin_generated_video","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/admin/users/{user_id}/generated-videos","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"user_id","or":"user_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":50,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"product_id","or":"product_id","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/admin/users/{user_id}/generated-videos","q":{"exist":["user_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users"},{"var":"user_id"},{"lit":"generated-videos"}],"t":{"req":"`reqdata`","res":"`body.videos`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.user"]]},"key$":"admin_generated_video","name__orig":"admin_generated_video","Name":"AdminGeneratedVideo","name_":"admin_generated_video","name-":"admin-generated-video","NAME":"ADMIN_GENERATED_VIDEO","index$":9}, {"active":true,"entity":"admin_generated_video","key$":"BasicAdminGeneratedVideoFlow","kind":"basic","name":"BasicAdminGeneratedVideoFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"user_id":"user01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"admin_generated_video_ref01"}}],"index$":0}]}, 'AdminGeneratedVideo', {"GET /api/admin/users/{user_id}/generated-videos":{"protocol":"http","parameters":[{"name":"user_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"User Id"},"index$":0},{"name":"product_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"description":"Optional product ID for enterprise users","title":"Product Id"},"description":"Optional product ID for enterprise users","index$":1},{"name":"limit","in":"query","required":false,"schema":{"type":"integer","maximum":200,"minimum":1,"default":50,"title":"Limit"},"index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let admin_generated_video_ref01_data = Object.values(setup.data.existing.admin_generated_video)[0] as any

    // LIST
    const admin_generated_video_ref01_ent = client.AdminGeneratedVideo()
    const admin_generated_video_ref01_match: any = {}
    admin_generated_video_ref01_match['user_id'] = setup.idmap['user01']

    const admin_generated_video_ref01_list = (await admin_generated_video_ref01_ent.list(admin_generated_video_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/admin_generated_video/AdminGeneratedVideoTestData.json')

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
    ['admin_generated_video01','admin_generated_video02','admin_generated_video03','user01','user02','user03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_ADMIN_GENERATED_VIDEO_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_ADMIN_GENERATED_VIDEO_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_ADMIN_GENERATED_VIDEO_ENTID']
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
  
