

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


describe('AgentAccessUserPostEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.AgentAccessUserPost()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('agent_access_user_post hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of CrackedApiReferenceSDK.test(offline).AgentAccessUserPost().stream('list')) { }
    }, /offline/)

    for await (const _item of CrackedApiReferenceSDK.test(offline).AgentAccessUserPost()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.AgentAccessUserPost().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of CrackedApiReferenceSDK.test().AgentAccessUserPost().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.AgentAccessUserPost().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.AgentAccessUserPost().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AgentAccessUserPost().list({"day":"x","email":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'agent_access_user_post.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"deltaYesterday":{"a":true,"h":"Delta Yesterday","n":"deltaYesterday","r":true,"t":"`$INTEGER`","key$":"deltaYesterday","index$":0},"expectedVideosPerDay":{"a":true,"h":"Expected Videos Per Day","n":"expectedVideosPerDay","r":true,"t":"`$INTEGER`","key$":"expectedVideosPerDay","index$":1},"postedToday":{"a":true,"h":"Posted Today","n":"postedToday","r":true,"t":"`$INTEGER`","key$":"postedToday","index$":2},"postedYesterday":{"a":true,"h":"Posted Yesterday","n":"postedYesterday","r":true,"t":"`$INTEGER`","key$":"postedYesterday","index$":3},"productId":{"a":true,"h":"Product Id","n":"productId","r":false,"t":"`$ANY`","key$":"productId","index$":4},"productName":{"a":true,"h":"Product Name","n":"productName","r":false,"t":"`$ANY`","key$":"productName","index$":5}},"name":"agent_access_user_post","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/agent-access/user-posts","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_agent_access_key","or":"x-agent-access-key","r":false,"t":"`$ANY`","index$":0}],"query":[{"a":true,"ex":7,"k":"query","n":"day","or":"days","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"email","or":"email","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/agent-access/user-posts","q":{"exist":["email"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"agent-access"},{"lit":"user-posts"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"agent_access_user_post","name__orig":"agent_access_user_post","Name":"AgentAccessUserPost","name_":"agent_access_user_post","name-":"agent-access-user-post","NAME":"AGENT_ACCESS_USER_POST","index$":30}, {"active":true,"entity":"agent_access_user_post","key$":"BasicAgentAccessUserPostFlow","kind":"basic","name":"BasicAgentAccessUserPostFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"agent_access_user_post_ref01"}}],"index$":0}]}, 'AgentAccessUserPost', {"GET /api/agent-access/user-posts":{"protocol":"http","parameters":[{"name":"email","in":"query","required":true,"schema":{"type":"string","description":"User email address","format":"email","title":"Email"},"description":"User email address","index$":0},{"name":"days","in":"query","required":false,"schema":{"type":"integer","maximum":30,"minimum":1,"description":"Performance window in days (UTC)","default":7,"title":"Days"},"description":"Performance window in days (UTC)","index$":1},{"name":"x-agent-access-key","in":"header","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"X-Agent-Access-Key"},"index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let agent_access_user_post_ref01_data = Object.values(setup.data.existing.agent_access_user_post)[0] as any

    // LIST
    const agent_access_user_post_ref01_ent = client.AgentAccessUserPost()
    const agent_access_user_post_ref01_match: any = {}

    const agent_access_user_post_ref01_list = (await agent_access_user_post_ref01_ent.list(agent_access_user_post_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/agent_access_user_post/AgentAccessUserPostTestData.json')

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
    ['agent_access_user_post01','agent_access_user_post02','agent_access_user_post03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_AGENT_ACCESS_USER_POST_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_AGENT_ACCESS_USER_POST_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_AGENT_ACCESS_USER_POST_ENTID']
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
  
