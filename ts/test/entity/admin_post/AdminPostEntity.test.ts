

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


describe('AdminPostEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.AdminPost()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('admin_post hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of CrackedApiReferenceSDK.test(offline).AdminPost().stream('list')) { }
    }, /offline/)

    for await (const _item of CrackedApiReferenceSDK.test(offline).AdminPost()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.AdminPost().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of CrackedApiReferenceSDK.test().AdminPost().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.AdminPost().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.AdminPost().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AdminPost().list({"include_entry":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'admin_post.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"admin_job_ids":{"a":true,"h":"Admin Job Ids","n":"admin_job_ids","r":true,"t":"`$ANY`","key$":"admin_job_ids","index$":0},"agent_id":{"a":true,"h":"Agent Id","n":"agent_id","r":true,"t":"`$STRING`","key$":"agent_id","index$":1},"agent_name":{"a":true,"h":"Agent Name","n":"agent_name","r":true,"t":"`$ANY`","key$":"agent_name","index$":2},"agent_platform_urls":{"a":true,"h":"Agent Platform Urls","n":"agent_platform_urls","r":true,"t":"`$ANY`","key$":"agent_platform_urls","index$":3},"agent_url":{"a":true,"h":"Agent Url","n":"agent_url","r":true,"t":"`$ANY`","key$":"agent_url","index$":4},"comments":{"a":true,"h":"Comments","n":"comments","r":true,"t":"`$INTEGER`","key$":"comments","index$":5},"error_message":{"a":true,"h":"Error Message","n":"error_message","r":true,"t":"`$ANY`","key$":"error_message","index$":6},"failed_at":{"a":true,"h":"Failed At","n":"failed_at","r":true,"t":"`$ANY`","key$":"failed_at","index$":7},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":8},"instagram_posted_by":{"a":true,"h":"Instagram Posted By","n":"instagram_posted_by","r":true,"t":"`$ANY`","key$":"instagram_posted_by","index$":9},"instagram_posted_url":{"a":true,"h":"Instagram Posted Url","n":"instagram_posted_url","r":true,"t":"`$ANY`","key$":"instagram_posted_url","index$":10},"instagram_scraped_social_post_id":{"a":true,"h":"Instagram Scraped Social Post Id","n":"instagram_scraped_social_post_id","r":true,"t":"`$STRING`","key$":"instagram_scraped_social_post_id","index$":11},"is_instagram_posted":{"a":true,"h":"Is Instagram Posted","n":"is_instagram_posted","r":true,"t":"`$BOOLEAN`","key$":"is_instagram_posted","index$":12},"is_tiktok_posted":{"a":true,"h":"Is Tiktok Posted","n":"is_tiktok_posted","r":true,"t":"`$BOOLEAN`","key$":"is_tiktok_posted","index$":13},"is_youtube_posted":{"a":true,"h":"Is Youtube Posted","n":"is_youtube_posted","r":true,"t":"`$BOOLEAN`","key$":"is_youtube_posted","index$":14},"last_refreshed_at":{"a":true,"h":"Last Refreshed At","n":"last_refreshed_at","r":true,"t":"`$ANY`","key$":"last_refreshed_at","index$":15},"likes":{"a":true,"h":"Likes","n":"likes","r":true,"t":"`$INTEGER`","key$":"likes","index$":16},"platform_post_methods":{"a":true,"h":"Platform Post Methods","n":"platform_post_methods","r":true,"t":"`$ANY`","key$":"platform_post_methods","index$":17},"platform_urls":{"a":true,"h":"Platform Urls","n":"platform_urls","r":true,"t":"`$ANY`","key$":"platform_urls","index$":18},"post_method":{"a":true,"h":"Post Method","n":"post_method","r":true,"t":"`$ANY`","key$":"post_method","index$":19},"post_platforms":{"a":true,"h":"Post Platforms","n":"post_platforms","r":true,"t":"`$ANY`","key$":"post_platforms","index$":20},"post_url":{"a":true,"h":"Post Url","n":"post_url","r":true,"t":"`$ANY`","key$":"post_url","index$":21},"posted_at":{"a":true,"h":"Posted At","n":"posted_at","r":true,"t":"`$ANY`","key$":"posted_at","index$":22},"product_id":{"a":true,"h":"Product Id","n":"product_id","r":true,"t":"`$STRING`","key$":"product_id","index$":23},"results_status":{"a":true,"h":"Results Status","n":"results_status","r":true,"t":"`$ANY`","key$":"results_status","index$":24},"scheduled_datetime":{"a":true,"fo":"date-time","h":"Scheduled Datetime","n":"scheduled_datetime","r":true,"t":"`$STRING`","key$":"scheduled_datetime","index$":25},"source_type":{"a":true,"h":"Source Type","n":"source_type","r":true,"t":"`$STRING`","key$":"source_type","index$":26},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":27},"tiktok_posted_by":{"a":true,"h":"Tiktok Posted By","n":"tiktok_posted_by","r":true,"t":"`$ANY`","key$":"tiktok_posted_by","index$":28},"tiktok_posted_url":{"a":true,"h":"Tiktok Posted Url","n":"tiktok_posted_url","r":true,"t":"`$ANY`","key$":"tiktok_posted_url","index$":29},"tiktok_scraped_social_post_id":{"a":true,"h":"Tiktok Scraped Social Post Id","n":"tiktok_scraped_social_post_id","r":true,"t":"`$STRING`","key$":"tiktok_scraped_social_post_id","index$":30},"upload_post_error":{"a":true,"h":"Upload Post Error","n":"upload_post_error","r":true,"t":"`$ANY`","key$":"upload_post_error","index$":31},"upload_post_status":{"a":true,"h":"Upload Post Status","n":"upload_post_status","r":true,"t":"`$ANY`","key$":"upload_post_status","index$":32},"upload_post_uploads":{"a":true,"h":"Upload Post Uploads","n":"upload_post_uploads","r":true,"t":"`$ANY`","key$":"upload_post_uploads","index$":33},"user_email":{"a":true,"h":"User Email","n":"user_email","r":true,"t":"`$STRING`","key$":"user_email","index$":34},"user_id":{"a":true,"fo":"uuid","h":"User Id","n":"user_id","r":true,"t":"`$STRING`","key$":"user_id","index$":35},"user_name":{"a":true,"h":"User Name","n":"user_name","r":true,"t":"`$ANY`","key$":"user_name","index$":36},"video_id":{"a":true,"h":"Video Id","n":"video_id","r":true,"t":"`$STRING`","key$":"video_id","index$":37},"video_url":{"a":true,"h":"Video Url","n":"video_url","r":true,"t":"`$ANY`","key$":"video_url","index$":38},"views":{"a":true,"h":"Views","n":"views","r":true,"t":"`$INTEGER`","key$":"views","index$":39},"youtube_posted_by":{"a":true,"h":"Youtube Posted By","n":"youtube_posted_by","r":true,"t":"`$ANY`","key$":"youtube_posted_by","index$":40},"youtube_posted_url":{"a":true,"h":"Youtube Posted Url","n":"youtube_posted_url","r":true,"t":"`$ANY`","key$":"youtube_posted_url","index$":41},"youtube_scraped_social_post_id":{"a":true,"h":"Youtube Scraped Social Post Id","n":"youtube_scraped_social_post_id","r":true,"t":"`$STRING`","key$":"youtube_scraped_social_post_id","index$":42}},"id":{"field":"id","name":"id"},"name":"admin_post","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/admin/posts","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"date","or":"date","r":false,"t":"`$ANY`","index$":0},{"a":true,"ex":true,"k":"query","n":"include_entry","or":"include_entries","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"ex":"all","k":"query","n":"platform","or":"platform","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"all","k":"query","n":"posting_method","or":"posting_method","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/api/admin/posts","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"posts"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"admin_post","name__orig":"admin_post","Name":"AdminPost","name_":"admin_post","name-":"admin-post","NAME":"ADMIN_POST","index$":14}, {"active":true,"entity":"admin_post","key$":"BasicAdminPostFlow","kind":"basic","name":"BasicAdminPostFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"admin_post_ref01"}}],"index$":0}]}, 'AdminPost', {"GET /api/admin/posts":{"protocol":"http","parameters":[{"name":"date","in":"query","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"description":"Date in YYYY-MM-DD format (EST/EDT). Defaults to today in EST.","title":"Date"},"description":"Date in YYYY-MM-DD format (EST/EDT). Defaults to today in EST.","index$":0},{"name":"posting_method","in":"query","required":false,"schema":{"enum":["all","phone_admin","upload_post"],"type":"string","description":"Filter by posting method inferred from flattened platform metadata.","default":"all","title":"Posting Method"},"description":"Filter by posting method inferred from flattened platform metadata.","index$":1},{"name":"platform","in":"query","required":false,"schema":{"enum":["all","tiktok","instagram","youtube"],"type":"string","description":"Filter views/likes/comments by platform (does not filter entries).","default":"all","title":"Platform"},"description":"Filter views/likes/comments by platform (does not filter entries).","index$":2},{"name":"include_entries","in":"query","required":false,"schema":{"type":"boolean","description":"Include entry list in response.","default":true,"title":"Include Entries"},"description":"Include entry list in response.","index$":3}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let admin_post_ref01_data = Object.values(setup.data.existing.admin_post)[0] as any

    // LIST
    const admin_post_ref01_ent = client.AdminPost()
    const admin_post_ref01_match: any = {}

    const admin_post_ref01_list = (await admin_post_ref01_ent.list(admin_post_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/admin_post/AdminPostTestData.json')

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
    ['admin_post01','admin_post02','admin_post03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_ADMIN_POST_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_ADMIN_POST_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_ADMIN_POST_ENTID']
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
  
