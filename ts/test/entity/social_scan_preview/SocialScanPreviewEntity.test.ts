

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


describe('SocialScanPreviewEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.SocialScanPreview()
    assert(null != ent)
  })




  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'social_scan_preview.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"instagram_handle":{"a":true,"h":"Instagram Handle","n":"instagram_handle","r":false,"sh":"Instagram username/handle to scrape","t":"`$ANY`","key$":"instagram_handle","index$":0},"posts":{"a":true,"h":"Posts","n":"posts","r":true,"t":"`$ARRAY`","key$":"posts","index$":1},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":2},"tiktok_handle":{"a":true,"h":"Tiktok Handle","n":"tiktok_handle","r":false,"sh":"TikTok username/handle to scrape","t":"`$ANY`","key$":"tiktok_handle","index$":3}},"name":"social_scan_preview","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["instagram_handle","tiktok_handle"],"co":{"id":"POST /api/social-scan/preview","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/social-scan/preview","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"social-scan"},{"lit":"preview"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"social_scan_preview","name__orig":"social_scan_preview","Name":"SocialScanPreview","name_":"social_scan_preview","name-":"social-scan-preview","NAME":"SOCIAL_SCAN_PREVIEW","index$":142}, {"active":true,"entity":"social_scan_preview","key$":"BasicSocialScanPreviewFlow","kind":"basic","name":"BasicSocialScanPreviewFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"social_scan_preview_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'SocialScanPreview', {"POST /api/social-scan/preview":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"tiktok_handle":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Tiktok Handle","description":"TikTok username/handle to scrape","key$":"tiktok_handle"},"instagram_handle":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Instagram Handle","description":"Instagram username/handle to scrape","key$":"instagram_handle"}},"type":"object","title":"SocialScanPreviewRequest","x-ref":"#/components/schemas/SocialScanPreviewRequest","index$":1}}},"required":true},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const social_scan_preview_ref01_ent = client.SocialScanPreview()
    let social_scan_preview_ref01_data = setup.data.new.social_scan_preview['social_scan_preview_ref01']

    social_scan_preview_ref01_data = (await social_scan_preview_ref01_ent.create(social_scan_preview_ref01_data)).data()
    assert(null != social_scan_preview_ref01_data)


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
      '../../../../.sdk/test/entity/social_scan_preview/SocialScanPreviewTestData.json')

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
    ['social_scan_preview01','social_scan_preview02','social_scan_preview03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_SOCIAL_SCAN_PREVIEW_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_SOCIAL_SCAN_PREVIEW_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_SOCIAL_SCAN_PREVIEW_ENTID']
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
  
