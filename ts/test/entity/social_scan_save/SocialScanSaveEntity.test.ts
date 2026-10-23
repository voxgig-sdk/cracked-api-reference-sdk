

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


describe('SocialScanSaveEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.SocialScanSave()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.SocialScanSave().create({"posts":"x","product_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'social_scan_save.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"media_asset_ids":{"a":true,"h":"Media Asset Ids","n":"media_asset_ids","r":true,"t":"`$ARRAY`","key$":"media_asset_ids","index$":0},"posts":{"a":true,"h":"Posts","n":"posts","r":true,"t":"`$ARRAY`","key$":"posts","index$":1},"product_id":{"a":true,"fo":"uuid","h":"Product Id","n":"product_id","r":true,"t":"`$STRING`","key$":"product_id","index$":2},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":3}},"name":"social_scan_save","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["posts","product_id"],"co":{"id":"POST /api/social-scan/save","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/social-scan/save","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"social-scan"},{"lit":"save"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"social_scan_save","name__orig":"social_scan_save","Name":"SocialScanSave","name_":"social_scan_save","name-":"social-scan-save","NAME":"SOCIAL_SCAN_SAVE","index$":144}, {"active":true,"entity":"social_scan_save","key$":"BasicSocialScanSaveFlow","kind":"basic","name":"BasicSocialScanSaveFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"social_scan_save_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'SocialScanSave', {"POST /api/social-scan/save":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"product_id":{"type":"string","format":"uuid","title":"Product Id","key$":"product_id"},"posts":{"items":{"properties":{"platform":{"type":"string","title":"Platform"},"post_url":{"type":"string","title":"Post Url"},"video_url":{"type":"string","title":"Video Url"},"cover_url":{"anyOf":[],"title":"Cover Url"},"views":{"type":"integer","title":"Views","default":0},"likes":{"type":"integer","title":"Likes","default":0},"comments":{"type":"integer","title":"Comments","default":0}},"type":"object","required":["platform","post_url","video_url"],"title":"SocialPostPreview","x-ref":"#/components/schemas/SocialPostPreview"},"type":"array","title":"Posts","key$":"posts"}},"type":"object","required":["product_id","posts"],"title":"SocialScanSaveRequest","x-ref":"#/components/schemas/SocialScanSaveRequest","index$":1}}},"required":true},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const social_scan_save_ref01_ent = client.SocialScanSave()
    let social_scan_save_ref01_data = setup.data.new.social_scan_save['social_scan_save_ref01']

    social_scan_save_ref01_data = (await social_scan_save_ref01_ent.create(social_scan_save_ref01_data)).data()
    assert(null != social_scan_save_ref01_data)


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
      '../../../../.sdk/test/entity/social_scan_save/SocialScanSaveTestData.json')

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
    ['social_scan_save01','social_scan_save02','social_scan_save03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_SOCIAL_SCAN_SAVE_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_SOCIAL_SCAN_SAVE_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_SOCIAL_SCAN_SAVE_ENTID']
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
  
