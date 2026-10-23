

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


describe('AdminSlideshowImportEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.AdminSlideshowImport()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AdminSlideshowImport().load({"batch_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'admin_slideshow_import.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"agent_id":{"a":true,"h":"Agent Id","n":"agent_id","r":true,"t":"`$STRING`","key$":"agent_id","index$":0},"batch_id":{"a":true,"h":"Batch Id","n":"batch_id","r":true,"t":"`$STRING`","key$":"batch_id","index$":1},"caption":{"a":true,"h":"Caption","n":"caption","r":true,"t":"`$STRING`","key$":"caption","index$":2},"day":{"a":true,"fo":"date","h":"Day","n":"day","r":true,"t":"`$STRING`","key$":"day","index$":3},"dry_run":{"a":true,"h":"Dry Run","n":"dry_run","r":false,"t":"`$BOOLEAN`","key$":"dry_run","index$":4},"engine_run":{"a":true,"h":"Engine Run","n":"engine_run","r":false,"t":"`$STRING`","key$":"engine_run","index$":5},"formula_id":{"a":true,"h":"Formula Id","n":"formula_id","r":true,"t":"`$STRING`","key$":"formula_id","index$":6},"slides":{"a":true,"h":"Slides","n":"slides","r":true,"t":"`$ARRAY`","key$":"slides","index$":7},"title":{"a":true,"h":"Title","n":"title","r":true,"t":"`$STRING`","key$":"title","index$":8}},"name":"admin_slideshow_import","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["action","dry_run"],"co":{"id":"POST /api/admin/slideshow-import2/{batch_id}/state","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"batch_id","or":"batch_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/admin/slideshow-import2/{batch_id}/state","q":{"$action":"state","exist":["batch_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"slideshow-import2"},{"var":"batch_id"},{"lit":"state"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"bf":["agent_id","batch_id","caption","day","dry_run","engine_run","formula_id","slides","title"],"co":{"id":"POST /api/admin/slideshow-import2/decks-json","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/admin/slideshow-import2/decks-json","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"slideshow-import2"},{"lit":"decks-json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/admin/slideshow-import2/{batch_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"batch_id","or":"batch_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/admin/slideshow-import2/{batch_id}","q":{"exist":["batch_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"slideshow-import2"},{"var":"batch_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"admin_slideshow_import","name__orig":"admin_slideshow_import","Name":"AdminSlideshowImport","name_":"admin_slideshow_import","name-":"admin-slideshow-import","NAME":"ADMIN_SLIDESHOW_IMPORT","index$":17}, {"active":true,"entity":"admin_slideshow_import","key$":"BasicAdminSlideshowImportFlow","kind":"basic","name":"BasicAdminSlideshowImportFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"admin_slideshow_import_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"admin_slideshow_import_ref01","srcdatavar":"admin_slideshow_import_ref01_data","suffix":"_dt0"},"m":{"id":"admin_slideshow_import01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-admin_slideshow_import_ref01"}}],"index$":1}]}, 'AdminSlideshowImport', {"POST /api/admin/slideshow-import2/{batch_id}/state":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"action":{"type":"string","enum":["release","hold"],"title":"Action"},"dry_run":{"type":"boolean","title":"Dry Run","default":true}},"type":"object","required":["action"],"title":"SlideshowBatchChange","x-ref":"#/components/schemas/SlideshowBatchChange"}}}},"parameters":[{"name":"batch_id","in":"path","required":true,"schema":{"type":"string","title":"Batch Id"},"index$":0}]},"POST /api/admin/slideshow-import2/decks-json":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"batch_id":{"type":"string","title":"Batch Id","key$":"batch_id"},"day":{"type":"string","format":"date","title":"Day","key$":"day"},"agent_id":{"type":"string","title":"Agent Id","key$":"agent_id"},"formula_id":{"type":"string","title":"Formula Id","key$":"formula_id"},"title":{"type":"string","title":"Title","key$":"title"},"caption":{"type":"string","title":"Caption","key$":"caption"},"engine_run":{"type":"string","title":"Engine Run","default":"","key$":"engine_run"},"dry_run":{"type":"boolean","title":"Dry Run","default":true,"key$":"dry_run"},"slides":{"items":{"properties":{"name":{"type":"string","maxLength":200,"title":"Name"},"content_base64":{"type":"string","maxLength":41943048,"title":"Content Base64"}},"type":"object","required":["name","content_base64"],"title":"SlideshowSlide","x-ref":"#/components/schemas/SlideshowSlide"},"type":"array","maxItems":35,"minItems":1,"title":"Slides","key$":"slides"}},"type":"object","required":["batch_id","day","agent_id","formula_id","title","caption","slides"],"title":"SlideshowDeckJson","description":"JSON form of the deck import, for clients that cannot send multipart.","x-ref":"#/components/schemas/SlideshowDeckJson","index$":1}}},"required":true},"parameters":[]},"GET /api/admin/slideshow-import2/{batch_id}":{"protocol":"http","parameters":[{"name":"batch_id","in":"path","required":true,"schema":{"type":"string","title":"Batch Id"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const admin_slideshow_import_ref01_ent = client.AdminSlideshowImport()
    let admin_slideshow_import_ref01_data = setup.data.new.admin_slideshow_import['admin_slideshow_import_ref01']

    admin_slideshow_import_ref01_data = (await admin_slideshow_import_ref01_ent.create(admin_slideshow_import_ref01_data)).data()
    assert(null != admin_slideshow_import_ref01_data)



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
      '../../../../.sdk/test/entity/admin_slideshow_import/AdminSlideshowImportTestData.json')

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
    ['admin_slideshow_import01','admin_slideshow_import02','admin_slideshow_import03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_ADMIN_SLIDESHOW_IMPORT_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_ADMIN_SLIDESHOW_IMPORT_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_ADMIN_SLIDESHOW_IMPORT_ENTID']
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
  
