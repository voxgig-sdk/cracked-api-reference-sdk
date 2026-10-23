

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


describe('ScrapeWebsitePublicEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.ScrapeWebsitePublic()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ScrapeWebsitePublic().create({"skip_demo":"x","url":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'scrape_website_public.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"flow_variant":{"a":true,"h":"Flow Variant","n":"flow_variant","r":false,"t":"`$STRING`","key$":"flow_variant","index$":0},"onboarding_data_id":{"a":true,"h":"Onboarding Data Id","n":"onboarding_data_id","r":true,"sh":"UUID of created OnboardingData","t":"`$STRING`","key$":"onboarding_data_id","index$":1},"skip_demo":{"a":true,"h":"Skip Demo","n":"skip_demo","r":false,"sh":"True for self-serve users (skip demo booking)","t":"`$BOOLEAN`","key$":"skip_demo","index$":2},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":3},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":4},"url":{"a":true,"h":"Url","n":"url","r":true,"sh":"Website URL to scrape","t":"`$STRING`","key$":"url","index$":5}},"name":"scrape_website_public","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["skip_demo","url"],"co":{"id":"POST /api/onboarding-v6/scrape-website-public","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"context","or":"context","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"flow","or":"flow","r":false,"t":"`$ANY`","index$":1}]},"k":"http","m":"POST","o":"/api/onboarding-v6/scrape-website-public","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"onboarding-v6"},{"lit":"scrape-website-public"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"scrape_website_public","name__orig":"scrape_website_public","Name":"ScrapeWebsitePublic","name_":"scrape_website_public","name-":"scrape-website-public","NAME":"SCRAPE_WEBSITE_PUBLIC","index$":127}, {"active":true,"entity":"scrape_website_public","key$":"BasicScrapeWebsitePublicFlow","kind":"basic","name":"BasicScrapeWebsitePublicFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"scrape_website_public_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'ScrapeWebsitePublic', {"POST /api/onboarding-v6/scrape-website-public":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"url":{"type":"string","title":"Url","description":"Website URL to scrape","key$":"url"},"skip_demo":{"type":"boolean","title":"Skip Demo","description":"True for self-serve users (skip demo booking)","default":false,"key$":"skip_demo"}},"type":"object","required":["url"],"title":"ScrapeWebsitePublicRequest","description":"Request to start public website scraping.","x-ref":"#/components/schemas/ScrapeWebsitePublicRequest","index$":1}}}},"parameters":[{"name":"flow","in":"query","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"description":"Flow variant override (A, B, or C)","title":"Flow"},"description":"Flow variant override (A, B, or C)","index$":0},{"name":"context","in":"query","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"description":"Onboarding context (onboarding or enterprise_product_create)","title":"Context"},"description":"Onboarding context (onboarding or enterprise_product_create)","index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const scrape_website_public_ref01_ent = client.ScrapeWebsitePublic()
    let scrape_website_public_ref01_data = setup.data.new.scrape_website_public['scrape_website_public_ref01']

    scrape_website_public_ref01_data = (await scrape_website_public_ref01_ent.create(scrape_website_public_ref01_data)).data()
    assert(null != scrape_website_public_ref01_data)


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
      '../../../../.sdk/test/entity/scrape_website_public/ScrapeWebsitePublicTestData.json')

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
    ['scrape_website_public01','scrape_website_public02','scrape_website_public03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_SCRAPE_WEBSITE_PUBLIC_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_SCRAPE_WEBSITE_PUBLIC_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_SCRAPE_WEBSITE_PUBLIC_ENTID']
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
  
