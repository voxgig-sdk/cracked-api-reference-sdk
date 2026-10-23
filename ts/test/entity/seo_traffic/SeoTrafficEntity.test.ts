

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


describe('SeoTrafficEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.SeoTraffic()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('seo_traffic hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of CrackedApiReferenceSDK.test(offline).SeoTraffic().stream('list')) { }
    }, /offline/)

    for await (const _item of CrackedApiReferenceSDK.test(offline).SeoTraffic()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.SeoTraffic().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of CrackedApiReferenceSDK.test().SeoTraffic().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.SeoTraffic().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.SeoTraffic().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.SeoTraffic().list({"day":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'seo_traffic.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"end_date":{"a":true,"fo":"date","h":"End Date","n":"end_date","r":true,"t":"`$STRING`","key$":"end_date","index$":0},"series":{"a":true,"h":"Series","n":"series","r":true,"t":"`$ARRAY`","key$":"series","index$":1},"site_url":{"a":true,"h":"Site Url","n":"site_url","r":true,"t":"`$STRING`","key$":"site_url","index$":2},"start_date":{"a":true,"fo":"date","h":"Start Date","n":"start_date","r":true,"t":"`$STRING`","key$":"start_date","index$":3},"top_countries":{"a":true,"h":"Top Countries","n":"top_countries","r":true,"t":"`$ARRAY`","key$":"top_countries","index$":4},"top_pages":{"a":true,"h":"Top Pages","n":"top_pages","r":true,"t":"`$ARRAY`","key$":"top_pages","index$":5},"top_queries":{"a":true,"h":"Top Queries","n":"top_queries","r":true,"t":"`$ARRAY`","key$":"top_queries","index$":6},"totals":{"a":true,"h":"Totals","n":"totals","r":true,"t":"`$OBJECT`","key$":"totals","index$":7}},"name":"seo_traffic","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/seo/traffic","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":28,"k":"query","n":"day","or":"days","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"product_id","or":"product_id","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":30,"k":"query","n":"top_limit","or":"top_limit","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/api/seo/traffic","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"seo"},{"lit":"traffic"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"seo_traffic","name__orig":"seo_traffic","Name":"SeoTraffic","name_":"seo_traffic","name-":"seo-traffic","NAME":"SEO_TRAFFIC","index$":136}, {"active":true,"entity":"seo_traffic","key$":"BasicSeoTrafficFlow","kind":"basic","name":"BasicSeoTrafficFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"seo_traffic_ref01"}}],"index$":0}]}, 'SeoTraffic', {"GET /api/seo/traffic":{"protocol":"http","parameters":[{"name":"days","in":"query","required":false,"schema":{"type":"integer","maximum":480,"minimum":7,"default":28,"title":"Days"},"index$":0},{"name":"top_limit","in":"query","required":false,"schema":{"type":"integer","maximum":200,"minimum":5,"default":30,"title":"Top Limit"},"index$":1},{"name":"product_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"Product Id"},"index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let seo_traffic_ref01_data = Object.values(setup.data.existing.seo_traffic)[0] as any

    // LIST
    const seo_traffic_ref01_ent = client.SeoTraffic()
    const seo_traffic_ref01_match: any = {}

    const seo_traffic_ref01_list = (await seo_traffic_ref01_ent.list(seo_traffic_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/seo_traffic/SeoTrafficTestData.json')

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
    ['seo_traffic01','seo_traffic02','seo_traffic03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_SEO_TRAFFIC_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_SEO_TRAFFIC_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_SEO_TRAFFIC_ENTID']
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
  
