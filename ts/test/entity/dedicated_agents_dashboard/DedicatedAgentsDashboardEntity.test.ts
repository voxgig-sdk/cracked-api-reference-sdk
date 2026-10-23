

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


describe('DedicatedAgentsDashboardEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.DedicatedAgentsDashboard()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('dedicated_agents_dashboard hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of CrackedApiReferenceSDK.test(offline).DedicatedAgentsDashboard().stream('list')) { }
    }, /offline/)

    for await (const _item of CrackedApiReferenceSDK.test(offline).DedicatedAgentsDashboard()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.DedicatedAgentsDashboard().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of CrackedApiReferenceSDK.test().DedicatedAgentsDashboard().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.DedicatedAgentsDashboard().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.DedicatedAgentsDashboard().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.DedicatedAgentsDashboard().list({"active_connections":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'dedicated_agents_dashboard.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active_connections":{"a":true,"h":"Active Connections","n":"active_connections","r":true,"t":"`$INTEGER`","key$":"active_connections","index$":0},"assigned_user_id":{"a":true,"h":"Assigned User Id","n":"assigned_user_id","r":false,"t":"`$STRING`","key$":"assigned_user_id","index$":1},"assigned_user_ids":{"a":true,"h":"Assigned User Ids","n":"assigned_user_ids","r":false,"t":"`$ARRAY`","key$":"assigned_user_ids","index$":2},"bio":{"a":true,"h":"Bio","n":"bio","r":true,"t":"`$ANY`","key$":"bio","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":4},"instagram_url":{"a":true,"h":"Instagram Url","n":"instagram_url","r":false,"t":"`$ANY`","key$":"instagram_url","index$":5},"is_active":{"a":true,"h":"Is Active","n":"is_active","r":true,"t":"`$BOOLEAN`","key$":"is_active","index$":6},"last_admin_synced_at":{"a":true,"h":"Last Admin Synced At","n":"last_admin_synced_at","r":false,"t":"`$ANY`","key$":"last_admin_synced_at","index$":7},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":8},"role":{"a":true,"h":"Role","n":"role","r":true,"t":"`$ANY`","key$":"role","index$":9},"tiktok_stats":{"a":true,"h":"Tiktok Stats","n":"tiktok_stats","r":false,"t":"`$ANY`","key$":"tiktok_stats","index$":10},"tiktok_url":{"a":true,"h":"Tiktok Url","n":"tiktok_url","r":false,"t":"`$ANY`","key$":"tiktok_url","index$":11},"today_failed_entries":{"a":true,"h":"Today Failed Entries","n":"today_failed_entries","r":false,"t":"`$ARRAY`","key$":"today_failed_entries","index$":12},"today_stats":{"a":true,"h":"Today Stats","n":"today_stats","r":true,"t":"`$OBJECT`","key$":"today_stats","index$":13},"upload_post_platforms":{"a":true,"h":"Upload Post Platforms","n":"upload_post_platforms","r":false,"t":"`$ANY`","key$":"upload_post_platforms","index$":14},"upload_post_profile":{"a":true,"h":"Upload Post Profile","n":"upload_post_profile","r":false,"t":"`$ANY`","key$":"upload_post_profile","index$":15},"yesterday_failed_entries":{"a":true,"h":"Yesterday Failed Entries","n":"yesterday_failed_entries","r":false,"t":"`$ARRAY`","key$":"yesterday_failed_entries","index$":16},"yesterday_stats":{"a":true,"h":"Yesterday Stats","n":"yesterday_stats","r":true,"t":"`$OBJECT`","key$":"yesterday_stats","index$":17},"youtube_url":{"a":true,"h":"Youtube Url","n":"youtube_url","r":false,"t":"`$ANY`","key$":"youtube_url","index$":18}},"id":{"field":"id","name":"id"},"name":"dedicated_agents_dashboard","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/admin/agents/dedicated-dashboard","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/admin/agents/dedicated-dashboard","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"agents"},{"lit":"dedicated-dashboard"}],"t":{"req":"`reqdata`","res":"`body.agents`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"dedicated_agents_dashboard","name__orig":"dedicated_agents_dashboard","Name":"DedicatedAgentsDashboard","name_":"dedicated_agents_dashboard","name-":"dedicated-agents-dashboard","NAME":"DEDICATED_AGENTS_DASHBOARD","index$":71}, {"active":true,"entity":"dedicated_agents_dashboard","key$":"BasicDedicatedAgentsDashboardFlow","kind":"basic","name":"BasicDedicatedAgentsDashboardFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"dedicated_agents_dashboard_ref01"}}],"index$":0}]}, 'DedicatedAgentsDashboard', {"GET /api/admin/agents/dedicated-dashboard":{"protocol":"http","parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let dedicated_agents_dashboard_ref01_data = Object.values(setup.data.existing.dedicated_agents_dashboard)[0] as any

    // LIST
    const dedicated_agents_dashboard_ref01_ent = client.DedicatedAgentsDashboard()
    const dedicated_agents_dashboard_ref01_match: any = {}

    const dedicated_agents_dashboard_ref01_list = (await dedicated_agents_dashboard_ref01_ent.list(dedicated_agents_dashboard_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/dedicated_agents_dashboard/DedicatedAgentsDashboardTestData.json')

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
    ['dedicated_agents_dashboard01','dedicated_agents_dashboard02','dedicated_agents_dashboard03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_DEDICATED_AGENTS_DASHBOARD_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_DEDICATED_AGENTS_DASHBOARD_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_DEDICATED_AGENTS_DASHBOARD_ENTID']
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
  
