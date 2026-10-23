

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


describe('AgentAccessPhilHourlyNotificationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.AgentAccessPhilHourlyNotification()
    assert(null != ent)
  })




  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'agent_access_phil_hourly_notification.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"generatedAt":{"a":true,"fo":"date-time","h":"Generated At","n":"generatedAt","r":true,"t":"`$STRING`","key$":"generatedAt","index$":0},"phoneHealth":{"a":true,"h":"Phone Health","n":"phoneHealth","r":true,"t":"`$OBJECT`","key$":"phoneHealth","index$":1},"scheduledPosts":{"a":true,"h":"Scheduled Posts","n":"scheduledPosts","r":true,"t":"`$OBJECT`","key$":"scheduledPosts","index$":2},"targetDate":{"a":true,"h":"Target Date","n":"targetDate","r":true,"t":"`$STRING`","key$":"targetDate","index$":3},"uploadPostInstagramHealth":{"a":true,"h":"Upload Post Instagram Health","n":"uploadPostInstagramHealth","r":true,"t":"`$OBJECT`","key$":"uploadPostInstagramHealth","index$":4},"uploadPostTiktokHealth":{"a":true,"h":"Upload Post Tiktok Health","n":"uploadPostTiktokHealth","r":true,"t":"`$OBJECT`","key$":"uploadPostTiktokHealth","index$":5},"uploadPostYoutubeHealth":{"a":true,"h":"Upload Post Youtube Health","n":"uploadPostYoutubeHealth","r":true,"t":"`$OBJECT`","key$":"uploadPostYoutubeHealth","index$":6}},"name":"agent_access_phil_hourly_notification","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/agent-access/phil-notifications/hourly","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_agent_access_key","or":"x-agent-access-key","r":false,"t":"`$ANY`","index$":0}],"query":[{"a":true,"k":"query","n":"date","or":"date","r":false,"t":"`$ANY`","index$":0}]},"k":"http","m":"GET","o":"/api/agent-access/phil-notifications/hourly","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"agent-access"},{"lit":"phil-notifications"},{"lit":"hourly"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"agent_access_phil_hourly_notification","name__orig":"agent_access_phil_hourly_notification","Name":"AgentAccessPhilHourlyNotification","name_":"agent_access_phil_hourly_notification","name-":"agent-access-phil-hourly-notification","NAME":"AGENT_ACCESS_PHIL_HOURLY_NOTIFICATION","index$":25}, {"active":true,"entity":"agent_access_phil_hourly_notification","key$":"BasicAgentAccessPhilHourlyNotificationFlow","kind":"basic","name":"BasicAgentAccessPhilHourlyNotificationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"agent_access_phil_hourly_notification_ref01","srcdatavar":"agent_access_phil_hourly_notification_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-agent_access_phil_hourly_notification_ref01"}}],"index$":0}]}, 'AgentAccessPhilHourlyNotification', {"GET /api/agent-access/phil-notifications/hourly":{"protocol":"http","parameters":[{"name":"date","in":"query","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"description":"ET date in YYYY-MM-DD format. Defaults to today.","title":"Date"},"description":"ET date in YYYY-MM-DD format. Defaults to today.","index$":0},{"name":"x-agent-access-key","in":"header","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"X-Agent-Access-Key"},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let agent_access_phil_hourly_notification_ref01_data = Object.values(setup.data.existing.agent_access_phil_hourly_notification)[0] as any

    // LOAD
    const agent_access_phil_hourly_notification_ref01_ent = client.AgentAccessPhilHourlyNotification()
    const agent_access_phil_hourly_notification_ref01_match_dt0: any = {}
    const agent_access_phil_hourly_notification_ref01_data_dt0 = (await agent_access_phil_hourly_notification_ref01_ent.load(agent_access_phil_hourly_notification_ref01_match_dt0)).data()
    assert(null != agent_access_phil_hourly_notification_ref01_data_dt0)


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
      '../../../../.sdk/test/entity/agent_access_phil_hourly_notification/AgentAccessPhilHourlyNotificationTestData.json')

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
    ['agent_access_phil_hourly_notification01','agent_access_phil_hourly_notification02','agent_access_phil_hourly_notification03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_AGENT_ACCESS_PHIL_HOURLY_NOTIFICATION_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_AGENT_ACCESS_PHIL_HOURLY_NOTIFICATION_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_AGENT_ACCESS_PHIL_HOURLY_NOTIFICATION_ENTID']
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
  
