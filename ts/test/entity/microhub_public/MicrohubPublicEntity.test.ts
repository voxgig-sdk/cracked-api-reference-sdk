

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


describe('MicrohubPublicEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.MicrohubPublic()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.MicrohubPublic().load({"slug":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'microhub_public.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"bio":{"a":true,"h":"Bio","n":"bio","r":false,"t":"`$ANY`","key$":"bio","index$":0},"ctaButtonText":{"a":true,"h":"Cta Button Text","n":"ctaButtonText","r":false,"t":"`$ANY`","key$":"ctaButtonText","index$":1},"ctaDescription":{"a":true,"h":"Cta Description","n":"ctaDescription","r":false,"t":"`$ANY`","key$":"ctaDescription","index$":2},"ctaLink":{"a":true,"h":"Cta Link","n":"ctaLink","r":false,"t":"`$ANY`","key$":"ctaLink","index$":3},"ctaTitle":{"a":true,"h":"Cta Title","n":"ctaTitle","r":false,"t":"`$ANY`","key$":"ctaTitle","index$":4},"headerImageUrl":{"a":true,"h":"Header Image Url","n":"headerImageUrl","r":false,"t":"`$ANY`","key$":"headerImageUrl","index$":5},"links":{"a":true,"h":"Links","n":"links","r":false,"t":"`$ARRAY`","key$":"links","index$":6},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":7},"profileImageUrl":{"a":true,"h":"Profile Image Url","n":"profileImageUrl","r":false,"t":"`$ANY`","key$":"profileImageUrl","index$":8},"slug":{"a":true,"h":"Slug","n":"slug","r":true,"t":"`$STRING`","key$":"slug","index$":9},"socialLinks":{"a":true,"h":"Social Links","n":"socialLinks","r":false,"t":"`$OBJECT`","key$":"socialLinks","index$":10},"testimonials":{"a":true,"h":"Testimonials","n":"testimonials","r":false,"t":"`$ARRAY`","key$":"testimonials","index$":11}},"name":"microhub_public","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/sites/{slug}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"slug","or":"slug","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/sites/{slug}","q":{"exist":["slug"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"sites"},{"var":"slug"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.site"]]},"key$":"microhub_public","name__orig":"microhub_public","Name":"MicrohubPublic","name_":"microhub_public","name-":"microhub-public","NAME":"MICROHUB_PUBLIC","index$":102}, {"active":true,"entity":"microhub_public","key$":"BasicMicrohubPublicFlow","kind":"basic","name":"BasicMicrohubPublicFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"microhub_public_ref01","srcdatavar":"microhub_public_ref01_data","suffix":"_dt0"},"m":{"id":"microhub_public01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-microhub_public_ref01"}}],"unreachable":true}]}, 'MicrohubPublic', {"GET /api/sites/{slug}":{"protocol":"http","parameters":[{"name":"slug","in":"path","required":true,"schema":{"type":"string","title":"Slug"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let microhub_public_ref01_data = Object.values(setup.data.existing.microhub_public)[0] as any

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
      '../../../../.sdk/test/entity/microhub_public/MicrohubPublicTestData.json')

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
    ['microhub_public01','microhub_public02','microhub_public03','site01','site02','site03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_MICROHUB_PUBLIC_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_MICROHUB_PUBLIC_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_MICROHUB_PUBLIC_ENTID']
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
  
