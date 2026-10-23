

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


describe('StatsRefreshTaskTriggerEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.StatsRefreshTaskTrigger()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.StatsRefreshTaskTrigger().create({"message":1,"status":"x","target_date":"x","task_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'stats_refresh_task_trigger.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"message":{"a":true,"h":"Message","n":"message","r":true,"t":"`$STRING`","key$":"message","index$":0},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":1},"target_date":{"a":true,"h":"Target Date","n":"target_date","r":true,"t":"`$STRING`","key$":"target_date","index$":2},"task_id":{"a":true,"h":"Task Id","n":"task_id","r":true,"t":"`$STRING`","key$":"task_id","index$":3},"users_count":{"a":true,"h":"Users Count","n":"users_count","r":false,"t":"`$INTEGER`","key$":"users_count","index$":4}},"name":"stats_refresh_task_trigger","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/admin/customer-health/manual-refresh","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/admin/customer-health/manual-refresh","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"customer-health"},{"lit":"manual-refresh"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"stats_refresh_task_trigger","name__orig":"stats_refresh_task_trigger","Name":"StatsRefreshTaskTrigger","name_":"stats_refresh_task_trigger","name-":"stats-refresh-task-trigger","NAME":"STATS_REFRESH_TASK_TRIGGER","index$":153}, {"active":true,"entity":"stats_refresh_task_trigger","key$":"BasicStatsRefreshTaskTriggerFlow","kind":"basic","name":"BasicStatsRefreshTaskTriggerFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"stats_refresh_task_trigger_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'StatsRefreshTaskTrigger', {"POST /api/admin/customer-health/manual-refresh":{"protocol":"http","parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const stats_refresh_task_trigger_ref01_ent = client.StatsRefreshTaskTrigger()
    let stats_refresh_task_trigger_ref01_data = setup.data.new.stats_refresh_task_trigger['stats_refresh_task_trigger_ref01']

    stats_refresh_task_trigger_ref01_data = (await stats_refresh_task_trigger_ref01_ent.create(stats_refresh_task_trigger_ref01_data)).data()
    assert(null != stats_refresh_task_trigger_ref01_data)


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
      '../../../../.sdk/test/entity/stats_refresh_task_trigger/StatsRefreshTaskTriggerTestData.json')

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
    ['stats_refresh_task_trigger01','stats_refresh_task_trigger02','stats_refresh_task_trigger03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_STATS_REFRESH_TASK_TRIGGER_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_STATS_REFRESH_TASK_TRIGGER_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_STATS_REFRESH_TASK_TRIGGER_ENTID']
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
  
