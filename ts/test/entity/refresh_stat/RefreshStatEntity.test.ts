

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


describe('RefreshStatEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.RefreshStat()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.RefreshStat().create({"email":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'refresh_stat.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"date_from":{"a":true,"h":"Date From","n":"date_from","r":false,"sh":"Start date to refresh stats for (defaults to yesterday)","t":"`$ANY`","key$":"date_from","index$":0},"date_to":{"a":true,"h":"Date To","n":"date_to","r":false,"sh":"End date to refresh stats for (defaults to date_from)","t":"`$ANY`","key$":"date_to","index$":1},"entries_found":{"a":true,"h":"Entries Found","n":"entries_found","r":true,"t":"`$INTEGER`","key$":"entries_found","index$":2},"message":{"a":true,"h":"Message","n":"message","r":true,"t":"`$STRING`","key$":"message","index$":3},"provider":{"a":true,"h":"Provider","n":"provider","op":{"create":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"Scraping provider to use","t":"`$STRING`","key$":"provider","index$":4},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":5},"summary":{"a":true,"h":"Summary","n":"summary","r":false,"t":"`$ANY`","key$":"summary","index$":6}},"name":"refresh_stat","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["date_from","date_to","provider"],"co":{"id":"POST /api/analytics/refresh-stats","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_agent_access_key","or":"x-agent-access-key","r":false,"t":"`$ANY`","index$":0}],"query":[{"a":true,"k":"query","n":"email","or":"email","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"user_id","or":"user_id","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/api/analytics/refresh-stats","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"analytics"},{"lit":"refresh-stats"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"refresh_stat","name__orig":"refresh_stat","Name":"RefreshStat","name_":"refresh_stat","name-":"refresh-stat","NAME":"REFRESH_STAT","index$":117}, {"active":true,"entity":"refresh_stat","key$":"BasicRefreshStatFlow","kind":"basic","name":"BasicRefreshStatFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"refresh_stat_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'RefreshStat', {"POST /api/analytics/refresh-stats":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"date_from":{"anyOf":[{"type":"string","format":"date"},{"type":"null"}],"title":"Date From","description":"Start date to refresh stats for (defaults to yesterday)","key$":"date_from"},"date_to":{"anyOf":[{"type":"string","format":"date"},{"type":"null"}],"title":"Date To","description":"End date to refresh stats for (defaults to date_from)","key$":"date_to"},"provider":{"type":"string","enum":["scrapecreators","apify"],"title":"Provider","description":"Scraping provider to use","default":"scrapecreators","key$":"provider"}},"type":"object","title":"RefreshStatsRequest","x-ref":"#/components/schemas/RefreshStatsRequest","index$":1}}}},"parameters":[{"name":"email","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"email"},{"type":"null"}],"description":"User email to look up","title":"Email"},"description":"User email to look up","index$":0},{"name":"user_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"description":"User ID to look up","title":"User Id"},"description":"User ID to look up","index$":1},{"name":"x-agent-access-key","in":"header","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"X-Agent-Access-Key"},"index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const refresh_stat_ref01_ent = client.RefreshStat()
    let refresh_stat_ref01_data = setup.data.new.refresh_stat['refresh_stat_ref01']

    refresh_stat_ref01_data = (await refresh_stat_ref01_ent.create(refresh_stat_ref01_data)).data()
    assert(null != refresh_stat_ref01_data)


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
      '../../../../.sdk/test/entity/refresh_stat/RefreshStatTestData.json')

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
    ['refresh_stat01','refresh_stat02','refresh_stat03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_REFRESH_STAT_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_REFRESH_STAT_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_REFRESH_STAT_ENTID']
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
  
