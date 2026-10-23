

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


describe('ReRollVideoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.ReRollVideo()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ReRollVideo().create({"queue_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 're_roll_video.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"queue_id":{"a":true,"fo":"uuid","h":"Queue Id","n":"queue_id","r":true,"t":"`$STRING`","key$":"queue_id","index$":0},"requires_polling":{"a":true,"h":"Requires Polling","n":"requires_polling","r":false,"t":"`$BOOLEAN`","key$":"requires_polling","index$":1},"skip_credit_check":{"a":true,"h":"Skip Credit Check","n":"skip_credit_check","r":false,"t":"`$BOOLEAN`","key$":"skip_credit_check","index$":2},"video":{"a":true,"h":"Video","n":"video","r":true,"t":"`$OBJECT`","key$":"video","index$":3}},"name":"re_roll_video","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["queue_id","skip_credit_check"],"co":{"id":"POST /api/core/re-roll-video","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/core/re-roll-video","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"core"},{"lit":"re-roll-video"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"re_roll_video","name__orig":"re_roll_video","Name":"ReRollVideo","name_":"re_roll_video","name-":"re-roll-video","NAME":"RE_ROLL_VIDEO","index$":114}, {"active":true,"entity":"re_roll_video","key$":"BasicReRollVideoFlow","kind":"basic","name":"BasicReRollVideoFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"re_roll_video_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'ReRollVideo', {"POST /api/core/re-roll-video":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"queue_id":{"type":"string","format":"uuid","title":"Queue Id","key$":"queue_id"},"skip_credit_check":{"type":"boolean","title":"Skip Credit Check","default":false,"key$":"skip_credit_check"}},"type":"object","required":["queue_id"],"title":"ReRollVideoRequest","x-ref":"#/components/schemas/ReRollVideoRequest","index$":1}}},"required":true},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const re_roll_video_ref01_ent = client.ReRollVideo()
    let re_roll_video_ref01_data = setup.data.new.re_roll_video['re_roll_video_ref01']

    re_roll_video_ref01_data = (await re_roll_video_ref01_ent.create(re_roll_video_ref01_data)).data()
    assert(null != re_roll_video_ref01_data)


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
      '../../../../.sdk/test/entity/re_roll_video/ReRollVideoTestData.json')

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
    ['re_roll_video01','re_roll_video02','re_roll_video03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_RE_ROLL_VIDEO_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_RE_ROLL_VIDEO_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_RE_ROLL_VIDEO_ENTID']
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
  
