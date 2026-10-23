

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


describe('UserAgentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.UserAgent()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.UserAgent().list({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'user_agent.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"agent":{"a":true,"h":"Agent","n":"agent","r":true,"t":"`$OBJECT`","key$":"agent","index$":0},"assigned_at":{"a":true,"fo":"date-time","h":"Assigned At","n":"assigned_at","r":true,"t":"`$STRING`","key$":"assigned_at","index$":1},"assignment_id":{"a":true,"h":"Assignment Id","n":"assignment_id","r":true,"t":"`$STRING`","key$":"assignment_id","index$":2},"expires_at":{"a":true,"h":"Expires At","n":"expires_at","r":false,"t":"`$ANY`","key$":"expires_at","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":4},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":5}},"id":{"field":"id","name":"id"},"name":"user_agent","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/admin/users/{user_id}/agents","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"user_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"agent_id","or":"agent_id","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"phone_admin_pc_name","or":"phone_admin_pc_name","r":false,"t":"`$ANY`","index$":1},{"a":true,"k":"query","n":"product_id","or":"product_id","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"POST","o":"/api/admin/users/{user_id}/agents","q":{"exist":["id"]},"r":{"param":{"user_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users"},{"var":"id"},{"lit":"agents"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/admin/users/{user_id}/agents","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"user_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"product_id","or":"product_id","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/api/admin/users/{user_id}/agents","q":{"exist":["id"]},"r":{"param":{"user_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users"},{"var":"id"},{"lit":"agents"}],"t":{"req":"`reqdata`","res":"`body.assignments`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"user_agent","name__orig":"user_agent","Name":"UserAgent","name_":"user_agent","name-":"user-agent","NAME":"USER_AGENT","index$":161}, {"active":true,"entity":"user_agent","key$":"BasicUserAgentFlow","kind":"basic","name":"BasicUserAgentFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"user_agent_ref01"},"m":{"user_id":"user01"},"o":"create","s":[],"v":[],"unreachable":true},{"a":false,"d":{},"i":{},"m":{"user_id":"user01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"user_agent_ref01"}}],"unreachable":true}]}, 'UserAgent', {"POST /api/admin/users/{user_id}/agents":{"protocol":"http","parameters":[{"name":"user_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"User Id"},"index$":0},{"name":"agent_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"description":"Deprecated. Direct agent-id assignment is disabled; this endpoint now reconciles through the PFA-backed claim flow.","title":"Agent Id"},"description":"Deprecated. Direct agent-id assignment is disabled; this endpoint now reconciles through the PFA-backed claim flow.","index$":1},{"name":"product_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Product Id"},"index$":2},{"name":"phone_admin_pc_name","in":"query","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"description":"Optional Phone Admin device PC name to claim agents from instead of the full available pool.","title":"Phone Admin Pc Name"},"description":"Optional Phone Admin device PC name to claim agents from instead of the full available pool.","index$":3}]},"GET /api/admin/users/{user_id}/agents":{"protocol":"http","parameters":[{"name":"user_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"User Id"},"index$":0},{"name":"product_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"Product Id"},"index$":1},{"name":"limit","in":"query","required":false,"schema":{"anyOf":[{"type":"integer","maximum":500,"minimum":1},{"type":"null"}],"title":"Limit"},"index$":2},{"name":"offset","in":"query","required":false,"schema":{"type":"integer","minimum":0,"default":0,"title":"Offset"},"index$":3}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let user_agent_ref01_data = Object.values(setup.data.existing.user_agent)[0] as any

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
      '../../../../.sdk/test/entity/user_agent/UserAgentTestData.json')

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
    ['user_agent01','user_agent02','user_agent03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_USER_AGENT_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_USER_AGENT_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_USER_AGENT_ENTID']
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
  
