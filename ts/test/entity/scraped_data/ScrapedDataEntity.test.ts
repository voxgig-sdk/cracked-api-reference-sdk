

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


describe('ScrapedDataEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.ScrapedData()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ScrapedData().create({"url":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'scraped_data.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":true,"t":"`$STRING`","key$":"description","index$":0},"homepageVideoUrl":{"a":true,"h":"Homepage Video Url","n":"homepageVideoUrl","r":false,"t":"`$ANY`","key$":"homepageVideoUrl","index$":1},"howItWorks":{"a":true,"h":"How It Works","n":"howItWorks","r":true,"t":"`$STRING`","key$":"howItWorks","index$":2},"imageUrls":{"a":true,"h":"Image Urls","n":"imageUrls","r":true,"t":"`$ARRAY`","key$":"imageUrls","index$":3},"instagram_username":{"a":true,"h":"Instagram Username","n":"instagram_username","r":false,"t":"`$ANY`","key$":"instagram_username","index$":4},"mediaAssets":{"a":true,"h":"Media Assets","n":"mediaAssets","r":false,"t":"`$ARRAY`","key$":"mediaAssets","index$":5},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":6},"pricingAndOffers":{"a":true,"h":"Pricing And Offers","n":"pricingAndOffers","r":true,"t":"`$STRING`","key$":"pricingAndOffers","index$":7},"targetAudience":{"a":true,"h":"Target Audience","n":"targetAudience","r":true,"t":"`$STRING`","key$":"targetAudience","index$":8},"url":{"a":true,"h":"Url","n":"url","r":true,"t":"`$STRING`","key$":"url","index$":9}},"name":"scraped_data","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["instagram_username","url"],"co":{"id":"POST /api/scraper/extract","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/scraper/extract","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"scraper"},{"lit":"extract"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"scraped_data","name__orig":"scraped_data","Name":"ScrapedData","name_":"scraped_data","name-":"scraped-data","NAME":"SCRAPED_DATA","index$":128}, {"active":true,"entity":"scraped_data","key$":"BasicScrapedDataFlow","kind":"basic","name":"BasicScrapedDataFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"scraped_data_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'ScrapedData', {"POST /api/scraper/extract":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"url":{"type":"string","title":"Url","key$":"url"},"instagram_username":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Instagram Username","key$":"instagram_username"}},"type":"object","required":["url"],"title":"OnboardingInput","x-ref":"#/components/schemas/OnboardingInput","index$":1}}},"required":true},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const scraped_data_ref01_ent = client.ScrapedData()
    let scraped_data_ref01_data = setup.data.new.scraped_data['scraped_data_ref01']

    scraped_data_ref01_data = (await scraped_data_ref01_ent.create(scraped_data_ref01_data)).data()
    assert(null != scraped_data_ref01_data)


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
      '../../../../.sdk/test/entity/scraped_data/ScrapedDataTestData.json')

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
    ['scraped_data01','scraped_data02','scraped_data03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_SCRAPED_DATA_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_SCRAPED_DATA_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_SCRAPED_DATA_ENTID']
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
  
