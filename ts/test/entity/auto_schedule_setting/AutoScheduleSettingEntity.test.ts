

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


describe('AutoScheduleSettingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.AutoScheduleSetting()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AutoScheduleSetting().load({"product_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'auto_schedule_setting.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"can_enable_repost":{"a":true,"h":"Can Enable Repost","n":"can_enable_repost","r":false,"t":"`$BOOLEAN`","key$":"can_enable_repost","index$":0},"effective_posted_video_reuse_percent":{"a":true,"h":"Effective Posted Video Reuse Percent","n":"effective_posted_video_reuse_percent","r":true,"t":"`$INTEGER`","key$":"effective_posted_video_reuse_percent","index$":1},"enabled_video_types":{"a":true,"h":"Enabled Video Types","n":"enabled_video_types","op":{"update":{"req":true,"type":"`$ARRAY`"}},"r":false,"sh":"List of enabled video type filters","t":"`$ANY`","key$":"enabled_video_types","index$":2},"is_enabled":{"a":true,"h":"Is Enabled","n":"is_enabled","op":{"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"t":"`$BOOLEAN`","key$":"is_enabled","index$":3},"lock_video_regeneration_controls":{"a":true,"h":"Lock Video Regeneration Controls","n":"lock_video_regeneration_controls","r":false,"t":"`$BOOLEAN`","key$":"lock_video_regeneration_controls","index$":4},"membership_tier":{"a":true,"h":"Membership Tier","n":"membership_tier","r":true,"t":"`$STRING`","key$":"membership_tier","index$":5},"posted_video_reuse_percent":{"a":true,"h":"Posted Video Reuse Percent","n":"posted_video_reuse_percent","r":false,"t":"`$ANY`","key$":"posted_video_reuse_percent","index$":6},"product_id":{"a":true,"h":"Product Id","n":"product_id","r":false,"t":"`$STRING`","key$":"product_id","index$":7},"repost_source":{"a":true,"h":"Repost Source","n":"repost_source","r":false,"t":"`$ANY`","key$":"repost_source","index$":8},"videos_per_day":{"a":true,"h":"Videos Per Day","n":"videos_per_day","r":true,"t":"`$INTEGER`","key$":"videos_per_day","index$":9}},"name":"auto_schedule_setting","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/schedule/settings","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"product_id","or":"product_id","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/schedule/settings","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"schedule"},{"lit":"settings"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["is_enabled"],"co":{"id":"PUT /api/schedule/settings","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"product_id","or":"product_id","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/api/schedule/settings","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"schedule"},{"lit":"settings"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"bf":["enabled_video_types"],"co":{"id":"PUT /api/schedule/settings/video-types","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"product_id","or":"product_id","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/api/schedule/settings/video-types","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"schedule"},{"lit":"settings"},{"lit":"video-types"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"auto_schedule_setting","name__orig":"auto_schedule_setting","Name":"AutoScheduleSetting","name_":"auto_schedule_setting","name-":"auto-schedule-setting","NAME":"AUTO_SCHEDULE_SETTING","index$":48}, {"active":true,"entity":"auto_schedule_setting","key$":"BasicAutoScheduleSettingFlow","kind":"basic","name":"BasicAutoScheduleSettingFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"auto_schedule_setting_ref01","srcdatavar":"auto_schedule_setting_ref01_data","suffix":"_up0","textfield":"membership_tier"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-auto_schedule_setting_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"auto_schedule_setting_ref01","srcdatavar":"auto_schedule_setting_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-auto_schedule_setting_ref01"}}],"index$":1}]}, 'AutoScheduleSetting', {"GET /api/schedule/settings":{"protocol":"http","parameters":[{"name":"product_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"description":"Product ID (required for enterprise, auto-detected for standard)","title":"Product Id"},"description":"Product ID (required for enterprise, auto-detected for standard)","index$":0}]},"PUT /api/schedule/settings":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"is_enabled":{"anyOf":[{"type":"boolean"},{"type":"null"}],"title":"Is Enabled","key$":"is_enabled"}},"type":"object","title":"AutoScheduleSettingsUpdate","description":"Update schema for auto-schedule settings.\n\nNote: posting_times removed - now calculated on-the-fly.","x-ref":"#/components/schemas/AutoScheduleSettingsUpdate","index$":1}}}},"parameters":[{"name":"product_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"description":"Product ID (required for enterprise, auto-detected for standard)","title":"Product Id"},"description":"Product ID (required for enterprise, auto-detected for standard)","index$":0}]},"PUT /api/schedule/settings/video-types":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"enabled_video_types":{"items":{"type":"string"},"type":"array","minItems":1,"title":"Enabled Video Types","description":"List of enabled video type filters","key$":"enabled_video_types"}},"type":"object","required":["enabled_video_types"],"title":"VideoTypeFiltersUpdate","description":"Request schema for updating video type filters","x-ref":"#/components/schemas/VideoTypeFiltersUpdate","index$":1}}}},"parameters":[{"name":"product_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"description":"Product ID (required for enterprise, auto-detected for standard)","title":"Product Id"},"description":"Product ID (required for enterprise, auto-detected for standard)","index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let auto_schedule_setting_ref01_data = Object.values(setup.data.existing.auto_schedule_setting)[0] as any

    // UPDATE
    const auto_schedule_setting_ref01_ent = client.AutoScheduleSetting()
    const auto_schedule_setting_ref01_data_up0: any = {}

    const auto_schedule_setting_ref01_markdef_up0 = { name: 'membership_tier', value: 'Mark01-auto_schedule_setting_ref01_' + setup.now }
    ;(auto_schedule_setting_ref01_data_up0 as any)[auto_schedule_setting_ref01_markdef_up0.name] = auto_schedule_setting_ref01_markdef_up0.value

    const auto_schedule_setting_ref01_resdata_up0 = (await auto_schedule_setting_ref01_ent.update(auto_schedule_setting_ref01_data_up0)).data()
    assert(null != auto_schedule_setting_ref01_resdata_up0)

    assert((auto_schedule_setting_ref01_resdata_up0 as any)[auto_schedule_setting_ref01_markdef_up0.name] === auto_schedule_setting_ref01_markdef_up0.value)


    // LOAD
    const auto_schedule_setting_ref01_match_dt0: any = {}
    const auto_schedule_setting_ref01_data_dt0 = (await auto_schedule_setting_ref01_ent.load(auto_schedule_setting_ref01_match_dt0)).data()
    assert(null != auto_schedule_setting_ref01_data_dt0)


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
      '../../../../.sdk/test/entity/auto_schedule_setting/AutoScheduleSettingTestData.json')

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
    ['auto_schedule_setting01','auto_schedule_setting02','auto_schedule_setting03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_AUTO_SCHEDULE_SETTING_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_AUTO_SCHEDULE_SETTING_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_AUTO_SCHEDULE_SETTING_ENTID']
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
  
