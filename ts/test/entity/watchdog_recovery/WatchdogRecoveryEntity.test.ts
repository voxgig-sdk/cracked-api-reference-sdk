

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


describe('WatchdogRecoveryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.WatchdogRecovery()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.WatchdogRecovery().load({"device_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'watchdog_recovery.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"item_id":{"a":true,"h":"Item Id","n":"item_id","r":true,"t":"`$STRING`","key$":"item_id","index$":0},"passed":{"a":true,"h":"Passed","n":"passed","r":true,"t":"`$BOOLEAN`","key$":"passed","index$":1},"table":{"a":true,"h":"Table","n":"table","r":true,"t":"`$STRING`","key$":"table","index$":2}},"name":"watchdog_recovery","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["item_id","passed","table"],"co":{"id":"POST /api/v1/watchdog/recovery-queue/resolve","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_watchdog_key","or":"x-watchdog-key","r":false,"t":"`$ANY`","index$":0}]},"k":"http","m":"POST","o":"/api/v1/watchdog/recovery-queue/resolve","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"watchdog"},{"lit":"recovery-queue"},{"lit":"resolve"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/watchdog/recovery-queue","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_watchdog_key","or":"x-watchdog-key","r":false,"t":"`$ANY`","index$":0}],"query":[{"a":true,"k":"query","n":"device_id","or":"device_ids","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v1/watchdog/recovery-queue","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"watchdog"},{"lit":"recovery-queue"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"watchdog_recovery","name__orig":"watchdog_recovery","Name":"WatchdogRecovery","name_":"watchdog_recovery","name-":"watchdog-recovery","NAME":"WATCHDOG_RECOVERY","index$":167}, {"active":true,"entity":"watchdog_recovery","key$":"BasicWatchdogRecoveryFlow","kind":"basic","name":"BasicWatchdogRecoveryFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"watchdog_recovery_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"watchdog_recovery_ref01","srcdatavar":"watchdog_recovery_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-watchdog_recovery_ref01"}}],"index$":1}]}, 'WatchdogRecovery', {"POST /api/v1/watchdog/recovery-queue/resolve":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"item_id":{"type":"string","title":"Item Id","key$":"item_id"},"table":{"type":"string","title":"Table","key$":"table"},"passed":{"type":"boolean","title":"Passed","key$":"passed"}},"type":"object","required":["item_id","table","passed"],"title":"ResolveRequest","x-ref":"#/components/schemas/ResolveRequest","index$":1}}}},"parameters":[{"name":"x-watchdog-key","in":"header","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"X-Watchdog-Key"},"index$":0}]},"GET /api/v1/watchdog/recovery-queue":{"protocol":"http","parameters":[{"name":"device_ids","in":"query","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Device Ids"},"index$":0},{"name":"x-watchdog-key","in":"header","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"X-Watchdog-Key"},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const watchdog_recovery_ref01_ent = client.WatchdogRecovery()
    let watchdog_recovery_ref01_data = setup.data.new.watchdog_recovery['watchdog_recovery_ref01']

    watchdog_recovery_ref01_data = (await watchdog_recovery_ref01_ent.create(watchdog_recovery_ref01_data)).data()
    assert(null != watchdog_recovery_ref01_data)


    // LOAD
    const watchdog_recovery_ref01_match_dt0: any = {}
    const watchdog_recovery_ref01_data_dt0 = (await watchdog_recovery_ref01_ent.load(watchdog_recovery_ref01_match_dt0)).data()
    assert(null != watchdog_recovery_ref01_data_dt0)


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
      '../../../../.sdk/test/entity/watchdog_recovery/WatchdogRecoveryTestData.json')

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
    ['watchdog_recovery01','watchdog_recovery02','watchdog_recovery03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_WATCHDOG_RECOVERY_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_WATCHDOG_RECOVERY_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_WATCHDOG_RECOVERY_ENTID']
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
  
