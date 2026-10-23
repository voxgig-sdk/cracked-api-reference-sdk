

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


describe('SeoAiMentionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.SeoAiMention()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('seo_ai_mention hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of CrackedApiReferenceSDK.test(offline).SeoAiMention().stream('list')) { }
    }, /offline/)

    for await (const _item of CrackedApiReferenceSDK.test(offline).SeoAiMention()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.SeoAiMention().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of CrackedApiReferenceSDK.test().SeoAiMention().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.SeoAiMention().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.SeoAiMention().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.SeoAiMention().list({"limit":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'seo_ai_mention.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"bucket":{"a":true,"h":"Bucket","n":"bucket","r":true,"t":"`$STRING`","key$":"bucket","index$":0},"domain_type":{"a":true,"h":"Domain Type","n":"domain_type","r":true,"t":"`$STRING`","key$":"domain_type","index$":1},"dominant_domain":{"a":true,"h":"Dominant Domain","n":"dominant_domain","r":true,"t":"`$STRING`","key$":"dominant_domain","index$":2},"engine":{"a":true,"h":"Engine","n":"engine","r":true,"t":"`$STRING`","key$":"engine","index$":3},"evidence":{"a":true,"h":"Evidence","n":"evidence","r":true,"t":"`$OBJECT`","key$":"evidence","index$":4},"geo":{"a":true,"h":"Geo","n":"geo","r":true,"t":"`$STRING`","key$":"geo","index$":5},"language":{"a":true,"h":"Language","n":"language","r":true,"t":"`$STRING`","key$":"language","index$":6},"primary_url":{"a":true,"h":"Primary Url","n":"primary_url","r":true,"t":"`$STRING`","key$":"primary_url","index$":7},"prompt_text":{"a":true,"h":"Prompt Text","n":"prompt_text","r":true,"t":"`$STRING`","key$":"prompt_text","index$":8},"run_week":{"a":true,"h":"Run Week","n":"run_week","r":true,"t":"`$STRING`","key$":"run_week","index$":9},"secondary_urls":{"a":true,"h":"Secondary Urls","n":"secondary_urls","r":true,"t":"`$ARRAY`","key$":"secondary_urls","index$":10}},"name":"seo_ai_mention","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/seo/ai-mentions","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":200,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"product_id","or":"product_id","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/seo/ai-mentions","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"seo"},{"lit":"ai-mentions"}],"t":{"req":"`reqdata`","res":"`body.rows`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"seo_ai_mention","name__orig":"seo_ai_mention","Name":"SeoAiMention","name_":"seo_ai_mention","name-":"seo-ai-mention","NAME":"SEO_AI_MENTION","index$":132}, {"active":true,"entity":"seo_ai_mention","key$":"BasicSeoAiMentionFlow","kind":"basic","name":"BasicSeoAiMentionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"seo_ai_mention_ref01"}}],"index$":0}]}, 'SeoAiMention', {"GET /api/seo/ai-mentions":{"protocol":"http","parameters":[{"name":"limit","in":"query","required":false,"schema":{"type":"integer","maximum":1000,"minimum":10,"default":200,"title":"Limit"},"index$":0},{"name":"product_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"Product Id"},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let seo_ai_mention_ref01_data = Object.values(setup.data.existing.seo_ai_mention)[0] as any

    // LIST
    const seo_ai_mention_ref01_ent = client.SeoAiMention()
    const seo_ai_mention_ref01_match: any = {}

    const seo_ai_mention_ref01_list = (await seo_ai_mention_ref01_ent.list(seo_ai_mention_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/seo_ai_mention/SeoAiMentionTestData.json')

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
    ['seo_ai_mention01','seo_ai_mention02','seo_ai_mention03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_SEO_AI_MENTION_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_SEO_AI_MENTION_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_SEO_AI_MENTION_ENTID']
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
  
