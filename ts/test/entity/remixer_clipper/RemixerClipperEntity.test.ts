

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


describe('RemixerClipperEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.RemixerClipper()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.RemixerClipper().create({"identifier":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'remixer_clipper.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"remixer_clipper","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/remixer-clippers/jobs/{identifier}/download","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"","k":"header","n":"authorization","or":"authorization","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"identifier","or":"identifier","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/remixer-clippers/jobs/{identifier}/download","q":{"exist":["identifier"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"remixer-clippers"},{"lit":"jobs"},{"var":"identifier"},{"lit":"download"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/remixer-clippers/catalog","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"","k":"header","n":"authorization","or":"authorization","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/remixer-clippers/catalog","q":{"$action":"catalog"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"remixer-clippers"},{"lit":"catalog"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"remixer_clipper","name__orig":"remixer_clipper","Name":"RemixerClipper","name_":"remixer_clipper","name-":"remixer-clipper","NAME":"REMIXER_CLIPPER","index$":118}, {"active":true,"entity":"remixer_clipper","key$":"BasicRemixerClipperFlow","kind":"basic","name":"BasicRemixerClipperFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"remixer_clipper_ref01"},"m":{"identifier":"identifier01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"remixer_clipper_ref01","srcdatavar":"remixer_clipper_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-remixer_clipper_ref01"}}],"index$":1}]}, 'RemixerClipper', {"POST /api/remixer-clippers/jobs/{identifier}/download":{"protocol":"http","parameters":[{"name":"identifier","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"Identifier"},"index$":0},{"name":"authorization","in":"header","required":false,"schema":{"type":"string","default":"","title":"Authorization"},"index$":1}]},"GET /api/remixer-clippers/catalog":{"protocol":"http","parameters":[{"name":"authorization","in":"header","required":false,"schema":{"type":"string","default":"","title":"Authorization"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const remixer_clipper_ref01_ent = client.RemixerClipper()
    let remixer_clipper_ref01_data = setup.data.new.remixer_clipper['remixer_clipper_ref01']
    remixer_clipper_ref01_data['identifier'] = setup.idmap['identifier01']

    remixer_clipper_ref01_data = (await remixer_clipper_ref01_ent.create(remixer_clipper_ref01_data)).data()
    assert(null != remixer_clipper_ref01_data)


    // LOAD
    const remixer_clipper_ref01_match_dt0: any = {}
    const remixer_clipper_ref01_data_dt0 = (await remixer_clipper_ref01_ent.load(remixer_clipper_ref01_match_dt0)).data()
    assert(null != remixer_clipper_ref01_data_dt0)


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
      '../../../../.sdk/test/entity/remixer_clipper/RemixerClipperTestData.json')

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
    ['remixer_clipper01','remixer_clipper02','remixer_clipper03','identifier01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_REMIXER_CLIPPER_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_REMIXER_CLIPPER_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_REMIXER_CLIPPER_ENTID']
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
  
