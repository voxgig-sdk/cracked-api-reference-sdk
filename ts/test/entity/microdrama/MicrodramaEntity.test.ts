

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


describe('MicrodramaEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.Microdrama()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Microdrama().load({"episode_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'microdrama.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"evidence":{"a":true,"h":"Evidence","n":"evidence","r":true,"t":"`$OBJECT`","key$":"evidence","index$":0},"expected_revision":{"a":true,"h":"Expected Revision","n":"expected_revision","r":true,"t":"`$INTEGER`","key$":"expected_revision","index$":1},"idempotency_key":{"a":true,"h":"Idempotency Key","n":"idempotency_key","r":true,"t":"`$STRING`","key$":"idempotency_key","index$":2},"issues":{"a":true,"h":"Issues","n":"issues","r":false,"t":"`$ARRAY`","key$":"issues","index$":3},"reason":{"a":true,"h":"Reason","n":"reason","r":true,"t":"`$STRING`","key$":"reason","index$":4},"role":{"a":true,"h":"Role","n":"role","r":true,"t":"`$STRING`","key$":"role","index$":5},"scores":{"a":true,"h":"Scores","n":"scores","r":true,"t":"`$OBJECT`","key$":"scores","index$":6},"selected_premise_id":{"a":true,"h":"Selected Premise Id","n":"selected_premise_id","r":false,"t":"`$STRING`","key$":"selected_premise_id","index$":7},"stage":{"a":true,"h":"Stage","n":"stage","r":true,"t":"`$STRING`","key$":"stage","index$":8},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":9},"subject_hash":{"a":true,"h":"Subject Hash","n":"subject_hash","r":true,"t":"`$STRING`","key$":"subject_hash","index$":10},"title":{"a":true,"h":"Title","n":"title","r":false,"t":"`$STRING`","key$":"title","index$":11},"verdict":{"a":true,"h":"Verdict","n":"verdict","r":true,"t":"`$STRING`","key$":"verdict","index$":12}},"name":"microdrama","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["expected_revision","manifest_hash"],"co":{"id":"POST /api/microdrama/episodes/{episode_id}/approve","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"episode_id","or":"episode_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/microdrama/episodes/{episode_id}/approve","q":{"$action":"approve","exist":["episode_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"microdrama"},{"lit":"episodes"},{"var":"episode_id"},{"lit":"approve"}],"t":{"req":{"expected_revision":"`reqdata.expected_revision`","manifest_hash":"`reqdata.manifest_hash`"},"res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/microdrama/episodes/{episode_id}/exports","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"episode_id","or":"episode_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/microdrama/episodes/{episode_id}/exports","q":{"exist":["episode_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"microdrama"},{"lit":"episodes"},{"var":"episode_id"},{"lit":"exports"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"bf":["evidence","issues","role","scores","subject_hash","verdict"],"co":{"id":"POST /api/microdrama/episodes/{episode_id}/reviews","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"episode_id","or":"episode_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/microdrama/episodes/{episode_id}/reviews","q":{"exist":["episode_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"microdrama"},{"lit":"episodes"},{"var":"episode_id"},{"lit":"reviews"}],"t":{"req":{"evidence":"`reqdata.evidence`","issues":"`reqdata.issue`","role":"`reqdata.role`","scores":"`reqdata.score`","subject_hash":"`reqdata.subject_hash`","verdict":"`reqdata.verdict`"},"res":"`body`"},"index$":2},{"a":true,"bf":["idempotency_key","stage"],"co":{"id":"POST /api/microdrama/episodes/{episode_id}/runs","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"episode_id","or":"episode_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/microdrama/episodes/{episode_id}/runs","q":{"exist":["episode_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"microdrama"},{"lit":"episodes"},{"var":"episode_id"},{"lit":"runs"}],"t":{"req":{"idempotency_key":"`reqdata.idempotency_key`","stage":"`reqdata.stage`"},"res":"`body`"},"index$":3},{"a":true,"bf":["reason","status"],"co":{"id":"POST /api/microdrama/reference-assets/{reference_id}/review","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"reference_asset_id","or":"reference_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/microdrama/reference-assets/{reference_id}/review","q":{"exist":["reference_asset_id"]},"r":{"param":{"reference_id":"reference_asset_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"microdrama"},{"lit":"reference-assets"},{"var":"reference_asset_id"},{"lit":"review"}],"t":{"req":{"reason":"`reqdata.reason`","status":"`reqdata.status`"},"res":"`body`"},"index$":4},{"a":true,"bf":["emotional_movement","exclusions","experiment_hypothesis","formula_id","human_tension","incident","product_placement","reference_version_ids","series_id","title"],"co":{"id":"POST /api/microdrama/episodes","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/microdrama/episodes","q":{"$action":"episode"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"microdrama"},{"lit":"episodes"}],"t":{"req":{"emotional_movement":"`reqdata.emotional_movement`","exclusions":"`reqdata.exclusion`","experiment_hypothesis":"`reqdata.experiment_hypothesi`","formula_id":"`reqdata.formula_id`","human_tension":"`reqdata.human_tension`","incident":"`reqdata.incident`","product_placement":"`reqdata.product_placement`","reference_version_ids":"`reqdata.reference_version_id`","series_id":"`reqdata.series_id`","title":"`reqdata.title`"},"res":"`body`"},"index$":5},{"a":true,"bf":["classification","compatibility_profile","editable_layout","family","generation_receipt","height","origin","raster_sha256","raster_url","rights_status","s3_object_version","source","version","width"],"co":{"id":"POST /api/microdrama/reference-assets","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/microdrama/reference-assets","q":{"$action":"reference_asset"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"microdrama"},{"lit":"reference-assets"}],"t":{"req":{"classification":"`reqdata.classification`","compatibility_profile":"`reqdata.compatibility_profile`","editable_layout":"`reqdata.editable_layout`","family":"`reqdata.family`","generation_receipt":"`reqdata.generation_receipt`","height":"`reqdata.height`","origin":"`reqdata.origin`","raster_sha256":"`reqdata.raster_sha256`","raster_url":"`reqdata.raster_url`","rights_status":"`reqdata.rights_status`","s3_object_version":"`reqdata.s3_object_version`","source":"`reqdata.source`","version":"`reqdata.version`","width":"`reqdata.width`"},"res":"`body`"},"index$":6},{"a":true,"bf":["audience","device_profile","name","voice"],"co":{"id":"POST /api/microdrama/series","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/microdrama/series","q":{"$action":"series"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"microdrama"},{"lit":"series"}],"t":{"req":{"audience":"`reqdata.audience`","device_profile":"`reqdata.device_profile`","name":"`reqdata.name`","voice":"`reqdata.voice`"},"res":"`body`"},"index$":7}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/microdrama/episodes/{episode_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"episode_id","or":"episode_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/microdrama/episodes/{episode_id}","q":{"exist":["episode_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"microdrama"},{"lit":"episodes"},{"var":"episode_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/microdrama/runs/{run_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"run_id","or":"run_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/microdrama/runs/{run_id}","q":{"exist":["run_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"microdrama"},{"lit":"runs"},{"var":"run_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /api/microdrama/config","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/microdrama/config","q":{"$action":"config"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"microdrama"},{"lit":"config"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /api/microdrama/formulas","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/microdrama/formulas","q":{"$action":"formula"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"microdrama"},{"lit":"formulas"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"GET /api/microdrama/reference-assets","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":false,"k":"query","n":"include_inactive","or":"include_inactive","r":false,"t":"`$BOOLEAN`","index$":0}]},"k":"http","m":"GET","o":"/api/microdrama/reference-assets","q":{"$action":"reference_asset"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"microdrama"},{"lit":"reference-assets"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4},{"a":true,"co":{"id":"GET /api/microdrama/series","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/microdrama/series","q":{"$action":"series"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"microdrama"},{"lit":"series"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":5}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["expected_revision","selected_premise_id","title"],"co":{"id":"PATCH /api/microdrama/episodes/{episode_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"episode_id","or":"episode_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/api/microdrama/episodes/{episode_id}","q":{"exist":["episode_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"microdrama"},{"lit":"episodes"},{"var":"episode_id"}],"t":{"req":{"expected_revision":"`reqdata.expected_revision`","selected_premise_id":"`reqdata.selected_premise_id`","title":"`reqdata.title`"},"res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"microdrama","name__orig":"microdrama","Name":"Microdrama","name_":"microdrama","name-":"microdrama","NAME":"MICRODRAMA","index$":101}, {"active":true,"entity":"microdrama","key$":"BasicMicrodramaFlow","kind":"basic","name":"BasicMicrodramaFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"microdrama_ref01"},"m":{},"o":"create","s":[],"v":[],"unreachable":true},{"a":false,"d":{},"i":{"ref":"microdrama_ref01","srcdatavar":"microdrama_ref01_data","suffix":"_up0","textfield":"idempotency_key"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-microdrama_ref01"}}],"v":[],"unreachable":true},{"a":false,"d":{},"i":{"ref":"microdrama_ref01","srcdatavar":"microdrama_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-microdrama_ref01"}}],"unreachable":true}]}, 'Microdrama', {"POST /api/microdrama/episodes/{episode_id}/approve":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"expected_revision":{"type":"integer","minimum":1,"title":"Expected Revision"},"manifest_hash":{"type":"string","pattern":"^[a-f0-9]{64}$","title":"Manifest Hash"}},"additionalProperties":false,"type":"object","required":["expected_revision","manifest_hash"],"title":"ApprovalCreate","x-ref":"#/components/schemas/ApprovalCreate"}}}},"parameters":[{"name":"episode_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"Episode Id"},"index$":0}]},"POST /api/microdrama/episodes/{episode_id}/exports":{"protocol":"http","parameters":[{"name":"episode_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"Episode Id"},"index$":0}]},"POST /api/microdrama/episodes/{episode_id}/reviews":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"role":{"type":"string","enum":["VISUAL","TECHNICAL_EXPORT"],"title":"Role","key$":"role"},"verdict":{"type":"string","enum":["PASS","FAIL"],"title":"Verdict","key$":"verdict"},"subject_hash":{"type":"string","pattern":"^[a-f0-9]{64}$","title":"Subject Hash","key$":"subject_hash"},"scores":{"additionalProperties":{"type":"integer"},"type":"object","title":"Scores","key$":"scores"},"evidence":{"additionalProperties":{"type":"string"},"type":"object","title":"Evidence","key$":"evidence"},"issues":{"items":{"type":"string"},"type":"array","title":"Issues","key$":"issues"}},"additionalProperties":false,"type":"object","required":["role","verdict","subject_hash","scores","evidence"],"title":"ReviewCreate","x-ref":"#/components/schemas/ReviewCreate","index$":1}}}},"parameters":[{"name":"episode_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"Episode Id"},"index$":0}]},"POST /api/microdrama/episodes/{episode_id}/runs":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"stage":{"type":"string","enum":["PREMISES","COPY","IMAGES"],"title":"MicrodramaStage","x-ref":"#/components/schemas/MicrodramaStage","key$":"stage"},"idempotency_key":{"type":"string","maxLength":160,"minLength":8,"pattern":"^[A-Za-z0-9._:-]+$","title":"Idempotency Key","key$":"idempotency_key"}},"additionalProperties":false,"type":"object","required":["stage","idempotency_key"],"title":"RunCreate","x-ref":"#/components/schemas/app__schemas__microdrama__RunCreate","index$":1}}}},"parameters":[{"name":"episode_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"Episode Id"},"index$":0}]},"POST /api/microdrama/reference-assets/{reference_id}/review":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"status":{"type":"string","enum":["APPROVED","DEPRECATED","REVOKED"],"title":"Status","key$":"status"},"reason":{"type":"string","maxLength":1000,"minLength":2,"title":"Reason","key$":"reason"}},"additionalProperties":false,"type":"object","required":["status","reason"],"title":"ReferenceReview","x-ref":"#/components/schemas/ReferenceReview","index$":1}}}},"parameters":[{"name":"reference_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"Reference Id"},"index$":0}]},"POST /api/microdrama/episodes":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"series_id":{"type":"string","format":"uuid","title":"Series Id"},"title":{"type":"string","maxLength":160,"minLength":2,"title":"Title","default":"Untitled microdrama"},"human_tension":{"type":"string","maxLength":1200,"minLength":8,"title":"Human Tension"},"incident":{"anyOf":[{"type":"string","maxLength":800},{"type":"null"}],"title":"Incident"},"emotional_movement":{"type":"string","maxLength":800,"minLength":4,"title":"Emotional Movement"},"exclusions":{"items":{"type":"string"},"type":"array","maxItems":20,"title":"Exclusions"},"experiment_hypothesis":{"type":"string","maxLength":1000,"minLength":8,"title":"Experiment Hypothesis"},"reference_version_ids":{"items":{"type":"string","format":"uuid"},"type":"array","maxItems":12,"minItems":1,"title":"Reference Version Ids"},"product_placement":{"type":"string","enum":["description_only","in_story"],"title":"Product Placement","default":"description_only"},"formula_id":{"type":"string","pattern":"^(MD(?:0[1-9]|[12][0-9]|3[01])|MS10|MS0[1-9])$","title":"Formula Id","default":"MD01"}},"additionalProperties":false,"type":"object","required":["series_id","human_tension","emotional_movement","experiment_hypothesis","reference_version_ids"],"title":"EpisodeCreate","x-ref":"#/components/schemas/EpisodeCreate"}}},"required":true},"parameters":[]},"POST /api/microdrama/reference-assets":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"family":{"type":"string","enum":["imessage","calendar","notes","reminders","lock_screen","email","photo_gallery","call_log","receipt"],"title":"SurfaceFamily","x-ref":"#/components/schemas/SurfaceFamily"},"version":{"type":"integer","minimum":1,"title":"Version"},"compatibility_profile":{"type":"string","pattern":"^[a-z0-9-]+$","title":"Compatibility Profile"},"raster_url":{"type":"string","maxLength":2000,"minLength":8,"title":"Raster Url"},"raster_sha256":{"type":"string","pattern":"^[a-f0-9]{64}$","title":"Raster Sha256"},"s3_object_version":{"type":"string","maxLength":500,"minLength":1,"title":"S3 Object Version"},"width":{"type":"integer","maximum":4096,"minimum":320,"title":"Width"},"height":{"type":"integer","maximum":4096,"minimum":568,"title":"Height"},"origin":{"type":"string","enum":["IMPORTED","SUNBURST","DERIVED"],"title":"Origin"},"source":{"type":"string","maxLength":1000,"minLength":2,"title":"Source"},"rights_status":{"type":"string","enum":["APPROVED","RESTRICTED"],"title":"Rights Status"},"classification":{"type":"string","enum":["synthetic_ui","verified_product_capture"],"title":"Classification","default":"synthetic_ui"},"editable_layout":{"type":"object","title":"Editable Layout"},"generation_receipt":{"anyOf":[{"type":"object"},{"type":"null"}],"title":"Generation Receipt"}},"additionalProperties":false,"type":"object","required":["family","version","compatibility_profile","raster_url","raster_sha256","s3_object_version","width","height","origin","source","rights_status","editable_layout"],"title":"ReferenceCreate","x-ref":"#/components/schemas/ReferenceCreate"}}}},"parameters":[]},"POST /api/microdrama/series":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"name":{"type":"string","maxLength":120,"minLength":2,"title":"Name"},"audience":{"properties":{"adult_life_stage":{"type":"string","maxLength":120,"minLength":2,"title":"Adult Life Stage"},"situation":{"type":"string","maxLength":300,"minLength":2,"title":"Situation"},"constraint":{"type":"string","maxLength":300,"minLength":2,"title":"Constraint"},"private_concern":{"type":"string","maxLength":300,"minLength":2,"title":"Private Concern"},"existing_belief":{"type":"string","maxLength":300,"minLength":2,"title":"Existing Belief"},"desired_progress":{"type":"string","maxLength":300,"minLength":2,"title":"Desired Progress"},"relationships":{"type":"string","maxLength":300,"minLength":2,"title":"Relationships"}},"additionalProperties":false,"type":"object","required":["adult_life_stage","situation","constraint","private_concern","existing_belief","desired_progress","relationships"],"title":"AudienceInput","x-ref":"#/components/schemas/AudienceInput"},"voice":{"type":"string","maxLength":500,"minLength":2,"title":"Voice"},"device_profile":{"type":"string","pattern":"^[a-z0-9-]+$","title":"Device Profile","default":"ios-light-en-v1"}},"additionalProperties":false,"type":"object","required":["name","audience","voice"],"title":"SeriesCreate","x-ref":"#/components/schemas/SeriesCreate"}}},"required":true},"parameters":[]},"GET /api/microdrama/episodes/{episode_id}":{"protocol":"http","parameters":[{"name":"episode_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"Episode Id"},"index$":0}]},"GET /api/microdrama/runs/{run_id}":{"protocol":"http","parameters":[{"name":"run_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"Run Id"},"index$":0}]},"GET /api/microdrama/config":{"protocol":"http","parameters":[]},"GET /api/microdrama/formulas":{"protocol":"http","parameters":[]},"GET /api/microdrama/reference-assets":{"protocol":"http","parameters":[{"name":"include_inactive","in":"query","required":false,"schema":{"type":"boolean","default":false,"title":"Include Inactive"},"index$":0}]},"GET /api/microdrama/series":{"protocol":"http","parameters":[]},"PATCH /api/microdrama/episodes/{episode_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"expected_revision":{"type":"integer","minimum":1,"title":"Expected Revision","key$":"expected_revision"},"selected_premise_id":{"anyOf":[{"type":"string","maxLength":100,"minLength":1},{"type":"null"}],"title":"Selected Premise Id","key$":"selected_premise_id"},"title":{"anyOf":[{"type":"string","maxLength":160,"minLength":2},{"type":"null"}],"title":"Title","key$":"title"}},"additionalProperties":false,"type":"object","required":["expected_revision"],"title":"EpisodePatch","x-ref":"#/components/schemas/EpisodePatch","index$":1}}}},"parameters":[{"name":"episode_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"Episode Id"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let microdrama_ref01_data = Object.values(setup.data.existing.microdrama)[0] as any

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
      '../../../../.sdk/test/entity/microdrama/MicrodramaTestData.json')

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
    ['microdrama01','microdrama02','microdrama03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_MICRODRAMA_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_MICRODRAMA_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_MICRODRAMA_ENTID']
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
  
