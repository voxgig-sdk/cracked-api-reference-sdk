

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


describe('UserHealthDetailEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.UserHealthDetail()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.UserHealthDetail().list({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'user_health_detail.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"account_type":{"a":true,"h":"Account Type","n":"account_type","r":true,"t":"`$ANY`","key$":"account_type","index$":0},"activated":{"a":true,"h":"Activated","n":"activated","r":true,"t":"`$BOOLEAN`","key$":"activated","index$":1},"activated_by_admin_at":{"a":true,"h":"Activated By Admin At","n":"activated_by_admin_at","r":false,"t":"`$ANY`","key$":"activated_by_admin_at","index$":2},"activated_by_admin_id":{"a":true,"h":"Activated By Admin Id","n":"activated_by_admin_id","r":false,"t":"`$STRING`","key$":"activated_by_admin_id","index$":3},"admin_notes":{"a":true,"h":"Admin Notes","n":"admin_notes","r":false,"t":"`$ANY`","key$":"admin_notes","index$":4},"agents_count":{"a":true,"h":"Agents Count","n":"agents_count","r":false,"t":"`$INTEGER`","key$":"agents_count","index$":5},"assigned_agents":{"a":true,"h":"Assigned Agents","n":"assigned_agents","r":true,"t":"`$ARRAY`","key$":"assigned_agents","index$":6},"assigned_agents_count":{"a":true,"h":"Assigned Agents Count","n":"assigned_agents_count","r":true,"t":"`$INTEGER`","key$":"assigned_agents_count","index$":7},"assigned_agents_preview_limit":{"a":true,"h":"Assigned Agents Preview Limit","n":"assigned_agents_preview_limit","r":false,"t":"`$INTEGER`","key$":"assigned_agents_preview_limit","index$":8},"assigned_agents_truncated":{"a":true,"h":"Assigned Agents Truncated","n":"assigned_agents_truncated","r":false,"t":"`$BOOLEAN`","key$":"assigned_agents_truncated","index$":9},"auto_schedule_enabled":{"a":true,"h":"Auto Schedule Enabled","n":"auto_schedule_enabled","r":true,"t":"`$BOOLEAN`","key$":"auto_schedule_enabled","index$":10},"comments_expected_per_day":{"a":true,"h":"Comments Expected Per Day","n":"comments_expected_per_day","r":false,"t":"`$INTEGER`","key$":"comments_expected_per_day","index$":11},"comments_fix_block_reason":{"a":true,"h":"Comments Fix Block Reason","n":"comments_fix_block_reason","r":false,"t":"`$ANY`","key$":"comments_fix_block_reason","index$":12},"comments_fix_ready":{"a":true,"h":"Comments Fix Ready","n":"comments_fix_ready","r":false,"t":"`$BOOLEAN`","key$":"comments_fix_ready","index$":13},"comments_today_failed":{"a":true,"h":"Comments Today Failed","n":"comments_today_failed","r":false,"t":"`$INTEGER`","key$":"comments_today_failed","index$":14},"comments_today_posted":{"a":true,"h":"Comments Today Posted","n":"comments_today_posted","r":false,"t":"`$INTEGER`","key$":"comments_today_posted","index$":15},"comments_today_scheduled":{"a":true,"h":"Comments Today Scheduled","n":"comments_today_scheduled","r":false,"t":"`$INTEGER`","key$":"comments_today_scheduled","index$":16},"comments_yesterday_failed":{"a":true,"h":"Comments Yesterday Failed","n":"comments_yesterday_failed","r":false,"t":"`$INTEGER`","key$":"comments_yesterday_failed","index$":17},"comments_yesterday_posted":{"a":true,"h":"Comments Yesterday Posted","n":"comments_yesterday_posted","r":false,"t":"`$INTEGER`","key$":"comments_yesterday_posted","index$":18},"comments_yesterday_total":{"a":true,"h":"Comments Yesterday Total","n":"comments_yesterday_total","r":false,"t":"`$INTEGER`","key$":"comments_yesterday_total","index$":19},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"t":"`$STRING`","key$":"created_at","index$":20},"credits":{"a":true,"h":"Credits","n":"credits","r":true,"t":"`$INTEGER`","key$":"credits","index$":21},"effective_posted_video_reuse_percent":{"a":true,"h":"Effective Posted Video Reuse Percent","n":"effective_posted_video_reuse_percent","r":true,"t":"`$INTEGER`","key$":"effective_posted_video_reuse_percent","index$":22},"email":{"a":true,"h":"Email","n":"email","r":true,"t":"`$STRING`","key$":"email","index$":23},"expected_agents_count":{"a":true,"h":"Expected Agents Count","n":"expected_agents_count","r":true,"t":"`$INTEGER`","key$":"expected_agents_count","index$":24},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":25},"is_activated_by_admin":{"a":true,"h":"Is Activated By Admin","n":"is_activated_by_admin","r":true,"t":"`$BOOLEAN`","key$":"is_activated_by_admin","index$":26},"is_admin":{"a":true,"h":"Is Admin","n":"is_admin","r":true,"t":"`$BOOLEAN`","key$":"is_admin","index$":27},"is_bookmarked":{"a":true,"h":"Is Bookmarked","n":"is_bookmarked","r":false,"t":"`$BOOLEAN`","key$":"is_bookmarked","index$":28},"is_internal_user":{"a":true,"h":"Is Internal User","n":"is_internal_user","r":true,"t":"`$BOOLEAN`","key$":"is_internal_user","index$":29},"is_migrated":{"a":true,"h":"Is Migrated","n":"is_migrated","r":true,"t":"`$BOOLEAN`","key$":"is_migrated","index$":30},"landing_slug":{"a":true,"h":"Landing Slug","n":"landing_slug","r":false,"t":"`$ANY`","key$":"landing_slug","index$":31},"landing_status":{"a":true,"h":"Landing Status","n":"landing_status","r":false,"t":"`$ANY`","key$":"landing_status","index$":32},"landing_url":{"a":true,"h":"Landing Url","n":"landing_url","r":false,"t":"`$ANY`","key$":"landing_url","index$":33},"membership":{"a":true,"h":"Membership","n":"membership","r":true,"t":"`$ANY`","key$":"membership","index$":34},"microhub_status":{"a":true,"h":"Microhub Status","n":"microhub_status","r":false,"t":"`$ANY`","key$":"microhub_status","index$":35},"microhub_url":{"a":true,"h":"Microhub Url","n":"microhub_url","r":false,"t":"`$ANY`","key$":"microhub_url","index$":36},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":37},"onboarding_flow":{"a":true,"h":"Onboarding Flow","n":"onboarding_flow","r":true,"t":"`$STRING`","key$":"onboarding_flow","index$":38},"posted_video_reuse_percent":{"a":true,"h":"Posted Video Reuse Percent","n":"posted_video_reuse_percent","r":false,"t":"`$ANY`","key$":"posted_video_reuse_percent","index$":39},"product_id":{"a":true,"h":"Product Id","n":"product_id","r":true,"t":"`$STRING`","key$":"product_id","index$":40},"product_name":{"a":true,"h":"Product Name","n":"product_name","r":true,"t":"`$ANY`","key$":"product_name","index$":41},"product_url":{"a":true,"h":"Product Url","n":"product_url","r":true,"t":"`$ANY`","key$":"product_url","index$":42},"subscription_status":{"a":true,"h":"Subscription Status","n":"subscription_status","r":true,"t":"`$ANY`","key$":"subscription_status","index$":43},"survey_data":{"a":true,"h":"Survey Data","n":"survey_data","r":false,"t":"`$ANY`","key$":"survey_data","index$":44},"today_failed":{"a":true,"h":"Today Failed","n":"today_failed","r":true,"t":"`$INTEGER`","key$":"today_failed","index$":45},"today_posted":{"a":true,"h":"Today Posted","n":"today_posted","r":true,"t":"`$INTEGER`","key$":"today_posted","index$":46},"today_scheduled":{"a":true,"h":"Today Scheduled","n":"today_scheduled","r":true,"t":"`$INTEGER`","key$":"today_scheduled","index$":47},"tomorrow_capacity":{"a":true,"h":"Tomorrow Capacity","n":"tomorrow_capacity","r":true,"t":"`$INTEGER`","key$":"tomorrow_capacity","index$":48},"tomorrow_scheduled":{"a":true,"h":"Tomorrow Scheduled","n":"tomorrow_scheduled","r":true,"t":"`$INTEGER`","key$":"tomorrow_scheduled","index$":49},"videos_completed":{"a":true,"h":"Videos Completed","n":"videos_completed","r":true,"t":"`$INTEGER`","key$":"videos_completed","index$":50},"videos_failed":{"a":true,"h":"Videos Failed","n":"videos_failed","r":true,"t":"`$INTEGER`","key$":"videos_failed","index$":51},"videos_pending":{"a":true,"h":"Videos Pending","n":"videos_pending","r":true,"t":"`$INTEGER`","key$":"videos_pending","index$":52},"videos_stale":{"a":true,"h":"Videos Stale","n":"videos_stale","r":true,"t":"`$INTEGER`","key$":"videos_stale","index$":53},"videos_total":{"a":true,"h":"Videos Total","n":"videos_total","r":true,"t":"`$INTEGER`","key$":"videos_total","index$":54},"yesterday_failed":{"a":true,"h":"Yesterday Failed","n":"yesterday_failed","r":true,"t":"`$INTEGER`","key$":"yesterday_failed","index$":55},"yesterday_failed_entries":{"a":true,"h":"Yesterday Failed Entries","n":"yesterday_failed_entries","r":true,"t":"`$ARRAY`","key$":"yesterday_failed_entries","index$":56},"yesterday_posted":{"a":true,"h":"Yesterday Posted","n":"yesterday_posted","r":true,"t":"`$INTEGER`","key$":"yesterday_posted","index$":57},"yesterday_total":{"a":true,"h":"Yesterday Total","n":"yesterday_total","r":true,"t":"`$INTEGER`","key$":"yesterday_total","index$":58}},"id":{"field":"id","name":"id"},"name":"user_health_detail","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/admin/users/{user_id}/health-detail","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"user_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":50,"k":"query","n":"assigned_agents_preview_limit","or":"assigned_agents_preview_limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"product_id","or":"product_id","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/admin/users/{user_id}/health-detail","q":{"exist":["id"]},"r":{"param":{"user_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users"},{"var":"id"},{"lit":"health-detail"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"user_health_detail","name__orig":"user_health_detail","Name":"UserHealthDetail","name_":"user_health_detail","name-":"user-health-detail","NAME":"USER_HEALTH_DETAIL","index$":162}, {"active":true,"entity":"user_health_detail","key$":"BasicUserHealthDetailFlow","kind":"basic","name":"BasicUserHealthDetailFlow","param":{},"step":[{"a":false,"d":{},"i":{},"m":{"user_id":"user01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"user_health_detail_ref01"}}],"unreachable":true}]}, 'UserHealthDetail', {"GET /api/admin/users/{user_id}/health-detail":{"protocol":"http","parameters":[{"name":"user_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"User Id"},"index$":0},{"name":"product_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"description":"Optional product ID for enterprise users","title":"Product Id"},"description":"Optional product ID for enterprise users","index$":1},{"name":"assigned_agents_preview_limit","in":"query","required":false,"schema":{"type":"integer","maximum":100,"minimum":0,"description":"Maximum assigned agents to include inline. Use /users/{user_id}/agents for the full list.","default":50,"title":"Assigned Agents Preview Limit"},"description":"Maximum assigned agents to include inline. Use /users/{user_id}/agents for the full list.","index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let user_health_detail_ref01_data = Object.values(setup.data.existing.user_health_detail)[0] as any

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
      '../../../../.sdk/test/entity/user_health_detail/UserHealthDetailTestData.json')

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
    ['user_health_detail01','user_health_detail02','user_health_detail03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_USER_HEALTH_DETAIL_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_USER_HEALTH_DETAIL_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_USER_HEALTH_DETAIL_ENTID']
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
  
