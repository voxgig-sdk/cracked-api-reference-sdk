

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


describe('TikTokCreatorInfoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.TikTokCreatorInfo()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('tik_tok_creator_info hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of CrackedApiReferenceSDK.test(offline).TikTokCreatorInfo().stream('list')) { }
    }, /offline/)

    for await (const _item of CrackedApiReferenceSDK.test(offline).TikTokCreatorInfo()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.TikTokCreatorInfo().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of CrackedApiReferenceSDK.test().TikTokCreatorInfo().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.TikTokCreatorInfo().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.TikTokCreatorInfo().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.TikTokCreatorInfo().list({"commentDisabled":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tik_tok_creator_info.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"commentDisabled":{"a":true,"h":"Comment Disabled","n":"commentDisabled","r":false,"t":"`$BOOLEAN`","key$":"commentDisabled","index$":0},"creatorAvatarUrl":{"a":true,"h":"Creator Avatar Url","n":"creatorAvatarUrl","r":false,"t":"`$ANY`","key$":"creatorAvatarUrl","index$":1},"creatorNickname":{"a":true,"h":"Creator Nickname","n":"creatorNickname","r":false,"t":"`$ANY`","key$":"creatorNickname","index$":2},"creatorUsername":{"a":true,"h":"Creator Username","n":"creatorUsername","r":false,"t":"`$ANY`","key$":"creatorUsername","index$":3},"duetDisabled":{"a":true,"h":"Duet Disabled","n":"duetDisabled","r":false,"t":"`$BOOLEAN`","key$":"duetDisabled","index$":4},"maxVideoPostDurationSec":{"a":true,"h":"Max Video Post Duration Sec","n":"maxVideoPostDurationSec","r":false,"t":"`$INTEGER`","key$":"maxVideoPostDurationSec","index$":5},"privacyLevelOptions":{"a":true,"h":"Privacy Level Options","n":"privacyLevelOptions","r":false,"t":"`$ARRAY`","key$":"privacyLevelOptions","index$":6},"stitchDisabled":{"a":true,"h":"Stitch Disabled","n":"stitchDisabled","r":false,"t":"`$BOOLEAN`","key$":"stitchDisabled","index$":7}},"name":"tik_tok_creator_info","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /social/tiktok/creator-info","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/social/tiktok/creator-info","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"social"},{"lit":"tiktok"},{"lit":"creator-info"}],"t":{"req":"`reqdata`","res":"`body.privacyLevelOptions`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"tik_tok_creator_info","name__orig":"tik_tok_creator_info","Name":"TikTokCreatorInfo","name_":"tik_tok_creator_info","name-":"tik-tok-creator-info","NAME":"TIK_TOK_CREATOR_INFO","index$":157}, {"active":true,"entity":"tik_tok_creator_info","key$":"BasicTikTokCreatorInfoFlow","kind":"basic","name":"BasicTikTokCreatorInfoFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"tik_tok_creator_info_ref01"}}],"index$":0}]}, 'TikTokCreatorInfo', {"GET /social/tiktok/creator-info":{"protocol":"http","parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let tik_tok_creator_info_ref01_data = Object.values(setup.data.existing.tik_tok_creator_info)[0] as any

    // LIST
    const tik_tok_creator_info_ref01_ent = client.TikTokCreatorInfo()
    const tik_tok_creator_info_ref01_match: any = {}

    const tik_tok_creator_info_ref01_list = (await tik_tok_creator_info_ref01_ent.list(tik_tok_creator_info_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/tik_tok_creator_info/TikTokCreatorInfoTestData.json')

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
    ['tik_tok_creator_info01','tik_tok_creator_info02','tik_tok_creator_info03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_TIK_TOK_CREATOR_INFO_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_TIK_TOK_CREATOR_INFO_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_TIK_TOK_CREATOR_INFO_ENTID']
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
  
