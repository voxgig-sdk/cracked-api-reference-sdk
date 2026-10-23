

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


describe('AdminSlideshowDiagEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.AdminSlideshowDiag()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AdminSlideshowDiag().create({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'admin_slideshow_diag.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"agent_id":{"a":true,"h":"Agent Id","n":"agent_id","r":false,"t":"`$STRING`","key$":"agent_id","index$":0},"batch_id":{"a":true,"h":"Batch Id","n":"batch_id","r":false,"t":"`$STRING`","key$":"batch_id","index$":1},"caption":{"a":true,"h":"Caption","n":"caption","r":false,"t":"`$STRING`","key$":"caption","index$":2},"content_base64":{"a":true,"h":"Content Base64","n":"content_base64","r":false,"t":"`$STRING`","key$":"content_base64","index$":3},"day":{"a":true,"h":"Day","n":"day","r":false,"t":"`$ANY`","key$":"day","index$":4},"formula_id":{"a":true,"h":"Formula Id","n":"formula_id","r":false,"t":"`$STRING`","key$":"formula_id","index$":5},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":6},"title":{"a":true,"h":"Title","n":"title","r":false,"t":"`$STRING`","key$":"title","index$":7}},"id":{"field":"id","name":"id"},"name":"admin_slideshow_diag","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["agent_id","batch_id","caption","content_base64","day","formula_id","title"],"co":{"id":"POST /api/admin/slideshow-diag/{stage}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"stage","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/admin/slideshow-diag/{stage}","q":{"exist":["id"]},"r":{"param":{"stage":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"slideshow-diag"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"admin_slideshow_diag","name__orig":"admin_slideshow_diag","Name":"AdminSlideshowDiag","name_":"admin_slideshow_diag","name-":"admin-slideshow-diag","NAME":"ADMIN_SLIDESHOW_DIAG","index$":16}, {"active":true,"entity":"admin_slideshow_diag","key$":"BasicAdminSlideshowDiagFlow","kind":"basic","name":"BasicAdminSlideshowDiagFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"admin_slideshow_diag_ref01"},"m":{"stage":"stage01"},"o":"create","s":[],"v":[],"unreachable":true}]}, 'AdminSlideshowDiag', {"POST /api/admin/slideshow-diag/{stage}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"content_base64":{"type":"string","maxLength":41943048,"title":"Content Base64","default":"","key$":"content_base64"},"batch_id":{"type":"string","title":"Batch Id","default":"slide29-diagnostic","key$":"batch_id"},"day":{"anyOf":[{"type":"string","format":"date"},{"type":"null"}],"title":"Day","key$":"day"},"agent_id":{"type":"string","title":"Agent Id","default":"","key$":"agent_id"},"formula_id":{"type":"string","title":"Formula Id","default":"","key$":"formula_id"},"title":{"type":"string","title":"Title","default":"","key$":"title"},"caption":{"type":"string","title":"Caption","default":"","key$":"caption"}},"type":"object","title":"DiagnosticRequest","x-ref":"#/components/schemas/DiagnosticRequest","index$":1}}}},"parameters":[{"name":"stage","in":"path","required":true,"schema":{"enum":["ping","decode","pil","db","get","assign","conflicts","taken","dryrun"],"type":"string","title":"Stage"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let admin_slideshow_diag_ref01_data = Object.values(setup.data.existing.admin_slideshow_diag)[0] as any

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
      '../../../../.sdk/test/entity/admin_slideshow_diag/AdminSlideshowDiagTestData.json')

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
    ['admin_slideshow_diag01','admin_slideshow_diag02','admin_slideshow_diag03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_ADMIN_SLIDESHOW_DIAG_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_ADMIN_SLIDESHOW_DIAG_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_ADMIN_SLIDESHOW_DIAG_ENTID']
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
  
