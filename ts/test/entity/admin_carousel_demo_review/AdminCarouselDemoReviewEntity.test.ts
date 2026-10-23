

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


describe('AdminCarouselDemoReviewEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.AdminCarouselDemoReview()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AdminCarouselDemoReview().load({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'admin_carousel_demo_review.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"items":{"a":true,"h":"Items","n":"items","r":true,"t":"`$ARRAY`","key$":"items","index$":1},"reason":{"a":true,"h":"Reason","n":"reason","r":false,"t":"`$STRING`","key$":"reason","index$":2}},"id":{"field":"id","name":"id"},"name":"admin_carousel_demo_review","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["action","demo_version","expected_decision_id","input_sha256","reason","slides_sha256"],"co":{"id":"POST /api/admin/carousels/demo-reviews/{formula_id}/decision","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"demo_review_id","or":"formula_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/admin/carousels/demo-reviews/{formula_id}/decision","q":{"$action":"decision","exist":["demo_review_id"]},"r":{"param":{"formula_id":"demo_review_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"carousels"},{"lit":"demo-reviews"},{"var":"demo_review_id"},{"lit":"decision"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"bf":["items","reason"],"co":{"id":"POST /api/admin/carousels/demo-reviews/bulk-approve","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/admin/carousels/demo-reviews/bulk-approve","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"carousels"},{"lit":"demo-reviews"},{"lit":"bulk-approve"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/admin/carousels/demo-reviews/{formula_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"formula_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/admin/carousels/demo-reviews/{formula_id}","q":{"exist":["id"]},"r":{"param":{"formula_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"carousels"},{"lit":"demo-reviews"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/admin/carousels/demo-reviews/items","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"formula_id","or":"formula_id","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/admin/carousels/demo-reviews/items","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"carousels"},{"lit":"demo-reviews"},{"lit":"items"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["assignee"],"co":{"id":"PUT /api/admin/carousels/demo-reviews/{formula_id}/assignee","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"demo_review_id","or":"formula_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/api/admin/carousels/demo-reviews/{formula_id}/assignee","q":{"$action":"assignee","exist":["demo_review_id"]},"r":{"param":{"formula_id":"demo_review_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"carousels"},{"lit":"demo-reviews"},{"var":"demo_review_id"},{"lit":"assignee"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"admin_carousel_demo_review","name__orig":"admin_carousel_demo_review","Name":"AdminCarouselDemoReview","name_":"admin_carousel_demo_review","name-":"admin-carousel-demo-review","NAME":"ADMIN_CAROUSEL_DEMO_REVIEW","index$":6}, {"active":true,"entity":"admin_carousel_demo_review","key$":"BasicAdminCarouselDemoReviewFlow","kind":"basic","name":"BasicAdminCarouselDemoReviewFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"admin_carousel_demo_review_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":false,"d":{},"i":{"ref":"admin_carousel_demo_review_ref01","srcdatavar":"admin_carousel_demo_review_ref01_data","suffix":"_up0","textfield":"reason"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-admin_carousel_demo_review_ref01"}}],"v":[],"unreachable":true},{"a":true,"d":{},"i":{"ref":"admin_carousel_demo_review_ref01","srcdatavar":"admin_carousel_demo_review_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-admin_carousel_demo_review_ref01"}}],"index$":1}]}, 'AdminCarouselDemoReview', {"POST /api/admin/carousels/demo-reviews/{formula_id}/decision":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"demo_version":{"type":"string","pattern":"^[a-f0-9]{12}\\.[a-f0-9]{12}$","title":"Demo Version"},"input_sha256":{"type":"string","pattern":"^[a-f0-9]{64}$","title":"Input Sha256"},"slides_sha256":{"type":"string","pattern":"^[a-f0-9]{64}$","title":"Slides Sha256"},"expected_decision_id":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"Expected Decision Id"},"action":{"type":"string","enum":["approve","request_changes","reject"],"title":"Action"},"reason":{"type":"string","maxLength":2000,"title":"Reason","default":""}},"type":"object","required":["demo_version","input_sha256","slides_sha256","action"],"title":"DecisionIn","x-ref":"#/components/schemas/DecisionIn"}}}},"parameters":[{"name":"formula_id","in":"path","required":true,"schema":{"type":"string","title":"Formula Id"},"index$":0}]},"POST /api/admin/carousels/demo-reviews/bulk-approve":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"items":{"items":{"properties":{"demo_version":{"type":"string","pattern":"^[a-f0-9]{12}\\.[a-f0-9]{12}$","title":"Demo Version"},"input_sha256":{"type":"string","pattern":"^[a-f0-9]{64}$","title":"Input Sha256"},"slides_sha256":{"type":"string","pattern":"^[a-f0-9]{64}$","title":"Slides Sha256"},"expected_decision_id":{"anyOf":[],"title":"Expected Decision Id"},"formula_id":{"type":"string","maxLength":32,"minLength":1,"title":"Formula Id"}},"type":"object","required":["demo_version","input_sha256","slides_sha256","formula_id"],"title":"BulkItem","x-ref":"#/components/schemas/BulkItem"},"type":"array","maxItems":200,"minItems":1,"title":"Items","key$":"items"},"reason":{"type":"string","maxLength":2000,"title":"Reason","default":"","key$":"reason"}},"type":"object","required":["items"],"title":"BulkApproveIn","x-ref":"#/components/schemas/BulkApproveIn","index$":1}}},"required":true},"parameters":[]},"GET /api/admin/carousels/demo-reviews/{formula_id}":{"protocol":"http","parameters":[{"name":"formula_id","in":"path","required":true,"schema":{"type":"string","title":"Formula Id"},"index$":0}]},"GET /api/admin/carousels/demo-reviews/items":{"protocol":"http","parameters":[{"name":"formula_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","maxLength":32},{"type":"null"}],"title":"Formula Id"},"index$":0}]},"PUT /api/admin/carousels/demo-reviews/{formula_id}/assignee":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"assignee":{"anyOf":[{"type":"string","enum":["will","dan","nick","cynthia","isha","ivan","maccy","yuanhai"]},{"type":"null"}],"title":"Assignee"}},"type":"object","required":["assignee"],"title":"AssignmentIn","x-ref":"#/components/schemas/AssignmentIn"}}}},"parameters":[{"name":"formula_id","in":"path","required":true,"schema":{"type":"string","title":"Formula Id"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const admin_carousel_demo_review_ref01_ent = client.AdminCarouselDemoReview()
    let admin_carousel_demo_review_ref01_data = setup.data.new.admin_carousel_demo_review['admin_carousel_demo_review_ref01']

    admin_carousel_demo_review_ref01_data = (await admin_carousel_demo_review_ref01_ent.create(admin_carousel_demo_review_ref01_data)).data()
    assert(null != admin_carousel_demo_review_ref01_data.id)


    // LOAD
    const admin_carousel_demo_review_ref01_match_dt0: any = {}
    admin_carousel_demo_review_ref01_match_dt0.id = admin_carousel_demo_review_ref01_data.id
    const admin_carousel_demo_review_ref01_data_dt0 = (await admin_carousel_demo_review_ref01_ent.load(admin_carousel_demo_review_ref01_match_dt0)).data()
    assert(admin_carousel_demo_review_ref01_data_dt0.id === admin_carousel_demo_review_ref01_data.id)


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
      '../../../../.sdk/test/entity/admin_carousel_demo_review/AdminCarouselDemoReviewTestData.json')

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
    ['admin_carousel_demo_review01','admin_carousel_demo_review02','admin_carousel_demo_review03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_ADMIN_CAROUSEL_DEMO_REVIEW_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_ADMIN_CAROUSEL_DEMO_REVIEW_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_ADMIN_CAROUSEL_DEMO_REVIEW_ENTID']
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
  
