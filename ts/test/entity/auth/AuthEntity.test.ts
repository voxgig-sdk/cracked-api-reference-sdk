

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


describe('AuthEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.Auth()
    assert(null != ent)
  })




  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'auth.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"auth","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["attribution","email","industry","returnTo"],"co":{"id":"POST /auth/magic-link","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/auth/magic-link","q":{"$action":"magic_link"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"auth"},{"lit":"magic-link"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"bf":["attribution","industry","token"],"co":{"id":"POST /auth/verify-google-token","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/auth/verify-google-token","q":{"$action":"verify_google_token"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"auth"},{"lit":"verify-google-token"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"bf":["industry","token"],"co":{"id":"POST /auth/verify-magic-link","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/auth/verify-magic-link","q":{"$action":"verify_magic_link"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"auth"},{"lit":"verify-magic-link"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"bf":["token"],"co":{"id":"POST /auth/verify-share-access","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/auth/verify-share-access","q":{"$action":"verify_share_access"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"auth"},{"lit":"verify-share-access"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"auth","name__orig":"auth","Name":"Auth","name_":"auth","name-":"auth","NAME":"AUTH","index$":47}, {"active":true,"entity":"auth","key$":"BasicAuthFlow","kind":"basic","name":"BasicAuthFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"auth_ref01"},"m":{},"o":"create","s":[],"v":[],"unreachable":true}]}, 'Auth', {"POST /auth/magic-link":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"email":{"type":"string","title":"Email"},"attribution":{"anyOf":[{"type":"object"},{"type":"null"}],"title":"Attribution"},"industry":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Industry"},"returnTo":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Returnto"}},"type":"object","required":["email"],"title":"MagicLinkRequest","x-ref":"#/components/schemas/MagicLinkRequest"}}},"required":true},"parameters":[]},"POST /auth/verify-google-token":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"token":{"type":"string","title":"Token"},"attribution":{"anyOf":[{"type":"object"},{"type":"null"}],"title":"Attribution"},"industry":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Industry"}},"type":"object","required":["token"],"title":"GoogleToken","x-ref":"#/components/schemas/GoogleToken"}}},"required":true},"parameters":[]},"POST /auth/verify-magic-link":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"token":{"type":"string","title":"Token"},"industry":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Industry"}},"type":"object","required":["token"],"title":"MagicLinkVerify","x-ref":"#/components/schemas/MagicLinkVerify"}}},"required":true},"parameters":[]},"POST /auth/verify-share-access":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"token":{"type":"string","title":"Token"}},"type":"object","required":["token"],"title":"ShareAccessVerifyRequest","x-ref":"#/components/schemas/ShareAccessVerifyRequest"}}},"required":true},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let auth_ref01_data = Object.values(setup.data.existing.auth)[0] as any

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
      '../../../../.sdk/test/entity/auth/AuthTestData.json')

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
    ['auth01','auth02','auth03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_AUTH_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_AUTH_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_AUTH_ENTID']
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
  
