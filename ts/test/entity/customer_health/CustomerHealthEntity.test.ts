

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


describe('CustomerHealthEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.CustomerHealth()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.CustomerHealth().load({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'customer_health.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"assigned_agents":{"a":true,"h":"Assigned Agents","n":"assigned_agents","r":true,"t":"`$OBJECT`","key$":"assigned_agents","index$":0},"available_dates":{"a":true,"h":"Available Dates","n":"available_dates","r":true,"t":"`$ARRAY`","key$":"available_dates","index$":1},"date":{"a":true,"h":"Date","n":"date","r":true,"t":"`$STRING`","key$":"date","index$":2},"email":{"a":true,"h":"Email","n":"email","r":true,"t":"`$STRING`","key$":"email","index$":3},"entries":{"a":true,"h":"Entries","n":"entries","r":true,"t":"`$ARRAY`","key$":"entries","index$":4},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":5},"performance_overview":{"a":true,"h":"Performance Overview","n":"performance_overview","r":true,"t":"`$OBJECT`","key$":"performance_overview","index$":6},"platform_coverage_summary":{"a":true,"h":"Platform Coverage Summary","n":"platform_coverage_summary","r":true,"t":"`$OBJECT`","key$":"platform_coverage_summary","index$":7},"user_id":{"a":true,"fo":"uuid","h":"User Id","n":"user_id","r":true,"t":"`$STRING`","key$":"user_id","index$":8}},"id":{"field":"id","name":"id"},"name":"customer_health","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/admin/customer-health/{user_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"user_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"date","or":"date","r":false,"t":"`$ANY`","index$":0}]},"k":"http","m":"GET","o":"/api/admin/customer-health/{user_id}","q":{"exist":["id"]},"r":{"param":{"user_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"customer-health"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"customer_health","name__orig":"customer_health","Name":"CustomerHealth","name_":"customer_health","name-":"customer-health","NAME":"CUSTOMER_HEALTH","index$":66}, {"active":true,"entity":"customer_health","key$":"BasicCustomerHealthFlow","kind":"basic","name":"BasicCustomerHealthFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"customer_health_ref01","srcdatavar":"customer_health_ref01_data","suffix":"_dt0"},"m":{"id":"customer_health01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-customer_health_ref01"}}],"index$":0}]}, 'CustomerHealth', {"GET /api/admin/customer-health/{user_id}":{"protocol":"http","parameters":[{"name":"user_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"User Id"},"index$":0},{"name":"date","in":"query","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"description":"Date in YYYY-MM-DD format (America/New_York). Defaults to today.","title":"Date"},"description":"Date in YYYY-MM-DD format (America/New_York). Defaults to today.","index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let customer_health_ref01_data = Object.values(setup.data.existing.customer_health)[0] as any

    // LOAD
    const customer_health_ref01_ent = client.CustomerHealth()
    const customer_health_ref01_match_dt0: any = {}
    customer_health_ref01_match_dt0.id = customer_health_ref01_data.id
    const customer_health_ref01_data_dt0 = (await customer_health_ref01_ent.load(customer_health_ref01_match_dt0)).data()
    assert(customer_health_ref01_data_dt0.id === customer_health_ref01_data.id)


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
      '../../../../.sdk/test/entity/customer_health/CustomerHealthTestData.json')

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
    ['customer_health01','customer_health02','customer_health03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_CUSTOMER_HEALTH_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_CUSTOMER_HEALTH_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_CUSTOMER_HEALTH_ENTID']
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
  
