

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


describe('CarouselAgentDetailEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.CarouselAgentDetail()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.CarouselAgentDetail().load({"agent_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'carousel_agent_detail.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"agent_id":{"a":true,"h":"Agent Id","n":"agent_id","r":true,"t":"`$STRING`","key$":"agent_id","index$":0},"agent_name":{"a":true,"h":"Agent Name","n":"agent_name","r":true,"t":"`$STRING`","key$":"agent_name","index$":1},"connection_status":{"a":true,"h":"Connection Status","n":"connection_status","r":false,"t":"`$ANY`","key$":"connection_status","index$":2},"followers":{"a":true,"h":"Followers","n":"followers","r":false,"t":"`$ANY`","key$":"followers","index$":3},"following":{"a":true,"h":"Following","n":"following","r":false,"t":"`$ANY`","key$":"following","index$":4},"metrics_updated_at":{"a":true,"h":"Metrics Updated At","n":"metrics_updated_at","r":false,"t":"`$ANY`","key$":"metrics_updated_at","index$":5},"phone_admin_status":{"a":true,"h":"Phone Admin Status","n":"phone_admin_status","r":true,"t":"`$STRING`","key$":"phone_admin_status","index$":6},"profile_likes":{"a":true,"h":"Profile Likes","n":"profile_likes","r":false,"t":"`$ANY`","key$":"profile_likes","index$":7},"profile_url":{"a":true,"h":"Profile Url","n":"profile_url","r":false,"t":"`$ANY`","key$":"profile_url","index$":8},"warmup_days":{"a":true,"h":"Warmup Days","n":"warmup_days","r":false,"t":"`$ANY`","key$":"warmup_days","index$":9},"warmup_hold_until":{"a":true,"h":"Warmup Hold Until","n":"warmup_hold_until","r":false,"t":"`$ANY`","key$":"warmup_hold_until","index$":10},"warmup_status":{"a":true,"h":"Warmup Status","n":"warmup_status","r":true,"t":"`$STRING`","key$":"warmup_status","index$":11}},"name":"carousel_agent_detail","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/admin/carousels/agents/{agent_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"agent_id","or":"agent_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/admin/carousels/agents/{agent_id}","q":{"exist":["agent_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"carousels"},{"lit":"agents"},{"var":"agent_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.agent"]]},"key$":"carousel_agent_detail","name__orig":"carousel_agent_detail","Name":"CarouselAgentDetail","name_":"carousel_agent_detail","name-":"carousel-agent-detail","NAME":"CAROUSEL_AGENT_DETAIL","index$":51}, {"active":true,"entity":"carousel_agent_detail","key$":"BasicCarouselAgentDetailFlow","kind":"basic","name":"BasicCarouselAgentDetailFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"carousel_agent_detail_ref01","srcdatavar":"carousel_agent_detail_ref01_data","suffix":"_dt0"},"m":{"id":"carousel_agent_detail01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-carousel_agent_detail_ref01"}}],"unreachable":true}]}, 'CarouselAgentDetail', {"GET /api/admin/carousels/agents/{agent_id}":{"protocol":"http","parameters":[{"name":"agent_id","in":"path","required":true,"schema":{"type":"string","title":"Agent Id"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let carousel_agent_detail_ref01_data = Object.values(setup.data.existing.carousel_agent_detail)[0] as any

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
      '../../../../.sdk/test/entity/carousel_agent_detail/CarouselAgentDetailTestData.json')

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
    ['carousel_agent_detail01','carousel_agent_detail02','carousel_agent_detail03','agent01','agent02','agent03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_CAROUSEL_AGENT_DETAIL_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_CAROUSEL_AGENT_DETAIL_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_CAROUSEL_AGENT_DETAIL_ENTID']
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
  
