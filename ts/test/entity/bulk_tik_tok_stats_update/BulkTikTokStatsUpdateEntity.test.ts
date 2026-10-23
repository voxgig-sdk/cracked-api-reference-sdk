

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


describe('BulkTikTokStatsUpdateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.BulkTikTokStatsUpdate()
    assert(null != ent)
  })




  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'bulk_tik_tok_stats_update.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"failedIds":{"a":true,"h":"Failed Ids","n":"failedIds","r":true,"t":"`$ARRAY`","key$":"failedIds","index$":0},"updatedCount":{"a":true,"h":"Updated Count","n":"updatedCount","r":true,"t":"`$INTEGER`","key$":"updatedCount","index$":1},"updates":{"a":true,"h":"Updates","n":"updates","r":true,"t":"`$ARRAY`","key$":"updates","index$":2}},"name":"bulk_tik_tok_stats_update","op":{"update":{"input":"data","name":"update","points":[{"a":true,"bf":["updates"],"co":{"id":"PATCH /api/upload-post-agents/bulk/tiktok-stats","source":"openapi3","version":2},"g":{},"k":"http","m":"PATCH","o":"/api/upload-post-agents/bulk/tiktok-stats","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"upload-post-agents"},{"lit":"bulk"},{"lit":"tiktok-stats"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"bulk_tik_tok_stats_update","name__orig":"bulk_tik_tok_stats_update","Name":"BulkTikTokStatsUpdate","name_":"bulk_tik_tok_stats_update","name-":"bulk-tik-tok-stats-update","NAME":"BULK_TIK_TOK_STATS_UPDATE","index$":49}, {"active":true,"entity":"bulk_tik_tok_stats_update","key$":"BasicBulkTikTokStatsUpdateFlow","kind":"basic","name":"BasicBulkTikTokStatsUpdateFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"bulk_tik_tok_stats_update_ref01","srcdatavar":"bulk_tik_tok_stats_update_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-bulk_tik_tok_stats_update_ref01"}}],"v":[],"index$":0}]}, 'BulkTikTokStatsUpdate', {"PATCH /api/upload-post-agents/bulk/tiktok-stats":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"updates":{"items":{"properties":{"id":{"type":"string","title":"Id"},"tiktokStats":{"type":"object","title":"Tiktokstats"}},"type":"object","required":["id","tiktokStats"],"title":"AgentTikTokStatsUpdateItem","description":"Single agent TikTok stats update item.","x-ref":"#/components/schemas/AgentTikTokStatsUpdateItem"},"type":"array","title":"Updates","key$":"updates"}},"type":"object","required":["updates"],"title":"BulkTikTokStatsUpdateRequest","description":"Request schema for bulk updating TikTok stats.","x-ref":"#/components/schemas/BulkTikTokStatsUpdateRequest","index$":1}}},"required":true},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let bulk_tik_tok_stats_update_ref01_data = Object.values(setup.data.existing.bulk_tik_tok_stats_update)[0] as any

    // UPDATE
    const bulk_tik_tok_stats_update_ref01_ent = client.BulkTikTokStatsUpdate()
    const bulk_tik_tok_stats_update_ref01_data_up0: any = {}

    const bulk_tik_tok_stats_update_ref01_resdata_up0 = (await bulk_tik_tok_stats_update_ref01_ent.update(bulk_tik_tok_stats_update_ref01_data_up0)).data()
    assert(null != bulk_tik_tok_stats_update_ref01_resdata_up0)


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
      '../../../../.sdk/test/entity/bulk_tik_tok_stats_update/BulkTikTokStatsUpdateTestData.json')

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
    ['bulk_tik_tok_stats_update01','bulk_tik_tok_stats_update02','bulk_tik_tok_stats_update03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_BULK_TIK_TOK_STATS_UPDATE_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_BULK_TIK_TOK_STATS_UPDATE_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_BULK_TIK_TOK_STATS_UPDATE_ENTID']
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
  
