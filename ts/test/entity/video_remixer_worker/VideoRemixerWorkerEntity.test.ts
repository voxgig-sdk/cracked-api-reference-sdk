

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


describe('VideoRemixerWorkerEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.VideoRemixerWorker()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.VideoRemixerWorker().create({"captions_ass":1,"error":"x","file":"x","lease_token":"x","manifest":"x","model":"x","prompt_version":"x","thumbnail":"x","worker_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'video_remixer_worker.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"captions_ass":{"a":true,"h":"Captions Ass","n":"captions_ass","r":false,"t":"`$STRING`","key$":"captions_ass","index$":0},"captions_vtt":{"a":true,"h":"Captions Vtt","n":"captions_vtt","r":false,"t":"`$STRING`","key$":"captions_vtt","index$":1},"cost_usd":{"a":true,"h":"Cost Usd","n":"cost_usd","r":false,"t":"`$NUMBER`","key$":"cost_usd","index$":2},"error":{"a":true,"h":"Error","n":"error","r":true,"t":"`$STRING`","key$":"error","index$":3},"file":{"a":true,"fo":"binary","h":"File","n":"file","r":true,"t":"`$STRING`","key$":"file","index$":4},"kinds":{"a":true,"h":"Kinds","n":"kinds","r":false,"t":"`$ARRAY`","key$":"kinds","index$":5},"lease_token":{"a":true,"h":"Lease Token","n":"lease_token","r":true,"t":"`$STRING`","key$":"lease_token","index$":6},"limit":{"a":true,"h":"Limit","n":"limit","r":false,"t":"`$INTEGER`","key$":"limit","index$":7},"manifest":{"a":true,"h":"Manifest","n":"manifest","r":true,"t":"`$STRING`","key$":"manifest","index$":8},"model":{"a":true,"h":"Model","n":"model","r":true,"t":"`$STRING`","key$":"model","index$":9},"processing_seconds":{"a":true,"h":"Processing Seconds","n":"processing_seconds","r":false,"t":"`$NUMBER`","key$":"processing_seconds","index$":10},"prompt_version":{"a":true,"h":"Prompt Version","n":"prompt_version","r":true,"t":"`$STRING`","key$":"prompt_version","index$":11},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":12},"thumbnail":{"a":true,"fo":"binary","h":"Thumbnail","n":"thumbnail","r":true,"t":"`$STRING`","key$":"thumbnail","index$":13},"tier":{"a":true,"h":"Tier","n":"tier","r":false,"t":"`$STRING`","key$":"tier","index$":14},"worker_id":{"a":true,"h":"Worker Id","n":"worker_id","r":true,"t":"`$STRING`","key$":"worker_id","index$":15}},"name":"video_remixer_worker","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["error","lease_token","worker_id"],"co":{"id":"POST /api/admin/video-remixer/worker/jobs/{identifier}/fail","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"","k":"header","n":"authorization","or":"authorization","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"identifier","or":"identifier","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/admin/video-remixer/worker/jobs/{identifier}/fail","q":{"exist":["identifier"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"video-remixer"},{"lit":"worker"},{"lit":"jobs"},{"var":"identifier"},{"lit":"fail"}],"t":{"req":{"error":"`reqdata.error`","lease_token":"`reqdata.lease_token`","worker_id":"`reqdata.worker_id`"},"res":"`body`"},"index$":0},{"a":true,"bf":["lease_token","worker_id"],"co":{"id":"POST /api/admin/video-remixer/worker/jobs/{identifier}/heartbeat","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"","k":"header","n":"authorization","or":"authorization","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"identifier","or":"identifier","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/admin/video-remixer/worker/jobs/{identifier}/heartbeat","q":{"exist":["identifier"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"video-remixer"},{"lit":"worker"},{"lit":"jobs"},{"var":"identifier"},{"lit":"heartbeat"}],"t":{"req":{"lease_token":"`reqdata.lease_token`","worker_id":"`reqdata.worker_id`"},"res":"`body`"},"index$":1},{"a":true,"bf":["lease_token","worker_id"],"co":{"id":"POST /api/admin/video-remixer/worker/jobs/{identifier}/media","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"","k":"header","n":"authorization","or":"authorization","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"identifier","or":"identifier","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/admin/video-remixer/worker/jobs/{identifier}/media","q":{"exist":["identifier"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"video-remixer"},{"lit":"worker"},{"lit":"jobs"},{"var":"identifier"},{"lit":"media"}],"t":{"req":{"lease_token":"`reqdata.lease_token`","worker_id":"`reqdata.worker_id`"},"res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /api/admin/video-remixer/worker/jobs/{identifier}/render-output","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"","k":"header","n":"authorization","or":"authorization","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"","k":"header","n":"x_lease_token","or":"x-lease-token","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"","k":"header","n":"x_worker_id","or":"x-worker-id","r":false,"t":"`$STRING`","index$":2}],"params":[{"a":true,"k":"param","n":"identifier","or":"identifier","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/admin/video-remixer/worker/jobs/{identifier}/render-output","q":{"exist":["identifier"]},"r":{},"rb":{"fields":[{"name":"captions_ass"},{"name":"captions_vtt"},{"binary":true,"name":"file"},{"name":"manifest"},{"binary":true,"name":"thumbnail"}],"kind":"multipart","media":"multipart/form-data"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"video-remixer"},{"lit":"worker"},{"lit":"jobs"},{"var":"identifier"},{"lit":"render-output"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"bf":["cost_usd","lease_token","model","processing_seconds","prompt_version","result","worker_id"],"co":{"id":"POST /api/admin/video-remixer/worker/jobs/{identifier}/result","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"","k":"header","n":"authorization","or":"authorization","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"identifier","or":"identifier","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/admin/video-remixer/worker/jobs/{identifier}/result","q":{"exist":["identifier"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"video-remixer"},{"lit":"worker"},{"lit":"jobs"},{"var":"identifier"},{"lit":"result"}],"t":{"req":{"cost_usd":"`reqdata.cost_usd`","lease_token":"`reqdata.lease_token`","model":"`reqdata.model`","processing_seconds":"`reqdata.processing_second`","prompt_version":"`reqdata.prompt_version`","result":"`reqdata.result`","worker_id":"`reqdata.worker_id`"},"res":"`body`"},"index$":4},{"a":true,"co":{"id":"POST /api/admin/video-remixer/worker/jobs/{identifier}/upload","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"","k":"header","n":"authorization","or":"authorization","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"","k":"header","n":"x_lease_token","or":"x-lease-token","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"","k":"header","n":"x_worker_id","or":"x-worker-id","r":false,"t":"`$STRING`","index$":2}],"params":[{"a":true,"k":"param","n":"identifier","or":"identifier","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/admin/video-remixer/worker/jobs/{identifier}/upload","q":{"exist":["identifier"]},"r":{},"rb":{"fields":[{"binary":true,"name":"file"}],"kind":"multipart","media":"multipart/form-data"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"video-remixer"},{"lit":"worker"},{"lit":"jobs"},{"var":"identifier"},{"lit":"upload"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":5},{"a":true,"bf":["kinds","limit","tier","worker_id"],"co":{"id":"POST /api/admin/video-remixer/worker/claim","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"","k":"header","n":"authorization","or":"authorization","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/admin/video-remixer/worker/claim","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"video-remixer"},{"lit":"worker"},{"lit":"claim"}],"t":{"req":{"kinds":"`reqdata.kind`","limit":"`reqdata.limit`","tier":"`reqdata.tier`","worker_id":"`reqdata.worker_id`"},"res":"`body`"},"index$":6}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"video_remixer_worker","name__orig":"video_remixer_worker","Name":"VideoRemixerWorker","name_":"video_remixer_worker","name-":"video-remixer-worker","NAME":"VIDEO_REMIXER_WORKER","index$":166}, {"active":true,"entity":"video_remixer_worker","key$":"BasicVideoRemixerWorkerFlow","kind":"basic","name":"BasicVideoRemixerWorkerFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"video_remixer_worker_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'VideoRemixerWorker', {"POST /api/admin/video-remixer/worker/jobs/{identifier}/fail":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"worker_id":{"type":"string","maxLength":100,"minLength":3,"title":"Worker Id","key$":"worker_id"},"lease_token":{"type":"string","maxLength":200,"minLength":20,"title":"Lease Token","key$":"lease_token"},"error":{"type":"string","maxLength":2000,"minLength":1,"title":"Error","key$":"error"}},"additionalProperties":false,"type":"object","required":["worker_id","lease_token","error"],"title":"WorkerFail","x-ref":"#/components/schemas/WorkerFail","index$":1}}}},"parameters":[{"name":"identifier","in":"path","required":true,"schema":{"type":"string","title":"Identifier"},"index$":0},{"name":"authorization","in":"header","required":false,"schema":{"type":"string","default":"","title":"Authorization"},"index$":1}]},"POST /api/admin/video-remixer/worker/jobs/{identifier}/heartbeat":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"worker_id":{"type":"string","maxLength":100,"minLength":3,"title":"Worker Id","key$":"worker_id"},"lease_token":{"type":"string","maxLength":200,"minLength":20,"title":"Lease Token","key$":"lease_token"}},"additionalProperties":false,"type":"object","required":["worker_id","lease_token"],"title":"WorkerLease","x-ref":"#/components/schemas/WorkerLease","index$":1}}}},"parameters":[{"name":"identifier","in":"path","required":true,"schema":{"type":"string","title":"Identifier"},"index$":0},{"name":"authorization","in":"header","required":false,"schema":{"type":"string","default":"","title":"Authorization"},"index$":1}]},"POST /api/admin/video-remixer/worker/jobs/{identifier}/media":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"worker_id":{"type":"string","maxLength":100,"minLength":3,"title":"Worker Id","key$":"worker_id"},"lease_token":{"type":"string","maxLength":200,"minLength":20,"title":"Lease Token","key$":"lease_token"}},"additionalProperties":false,"type":"object","required":["worker_id","lease_token"],"title":"WorkerLease","x-ref":"#/components/schemas/WorkerLease","index$":1}}}},"parameters":[{"name":"identifier","in":"path","required":true,"schema":{"type":"string","title":"Identifier"},"index$":0},{"name":"authorization","in":"header","required":false,"schema":{"type":"string","default":"","title":"Authorization"},"index$":1}]},"POST /api/admin/video-remixer/worker/jobs/{identifier}/render-output":{"protocol":"http","requestBody":{"required":true,"content":{"multipart/form-data":{"schema":{"properties":{"file":{"type":"string","format":"binary","title":"File","key$":"file"},"thumbnail":{"type":"string","format":"binary","title":"Thumbnail","key$":"thumbnail"},"manifest":{"type":"string","title":"Manifest","key$":"manifest"},"captions_vtt":{"type":"string","title":"Captions Vtt","default":"","key$":"captions_vtt"},"captions_ass":{"type":"string","title":"Captions Ass","default":"","key$":"captions_ass"}},"type":"object","required":["file","thumbnail","manifest"],"title":"Body_worker_render_output_api_admin_video_remixer_worker_jobs__identifier__render_output_post","x-ref":"#/components/schemas/Body_worker_render_output_api_admin_video_remixer_worker_jobs__identifier__render_output_post","index$":1}}}},"parameters":[{"name":"identifier","in":"path","required":true,"schema":{"type":"string","title":"Identifier"},"index$":0},{"name":"x-worker-id","in":"header","required":false,"schema":{"type":"string","default":"","title":"X-Worker-Id"},"index$":1},{"name":"x-lease-token","in":"header","required":false,"schema":{"type":"string","default":"","title":"X-Lease-Token"},"index$":2},{"name":"authorization","in":"header","required":false,"schema":{"type":"string","default":"","title":"Authorization"},"index$":3}]},"POST /api/admin/video-remixer/worker/jobs/{identifier}/result":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"worker_id":{"type":"string","maxLength":100,"minLength":3,"title":"Worker Id","key$":"worker_id"},"lease_token":{"type":"string","maxLength":200,"minLength":20,"title":"Lease Token","key$":"lease_token"},"result":{"type":"object","title":"Result","key$":"result"},"model":{"type":"string","maxLength":200,"minLength":1,"title":"Model","key$":"model"},"prompt_version":{"type":"string","maxLength":100,"minLength":1,"title":"Prompt Version","key$":"prompt_version"},"cost_usd":{"type":"number","maximum":100,"minimum":0,"title":"Cost Usd","default":0,"key$":"cost_usd"},"processing_seconds":{"type":"number","maximum":86400,"minimum":0,"title":"Processing Seconds","default":0,"key$":"processing_seconds"}},"additionalProperties":false,"type":"object","required":["worker_id","lease_token","model","prompt_version"],"title":"WorkerResult","x-ref":"#/components/schemas/WorkerResult","index$":1}}}},"parameters":[{"name":"identifier","in":"path","required":true,"schema":{"type":"string","title":"Identifier"},"index$":0},{"name":"authorization","in":"header","required":false,"schema":{"type":"string","default":"","title":"Authorization"},"index$":1}]},"POST /api/admin/video-remixer/worker/jobs/{identifier}/upload":{"protocol":"http","requestBody":{"required":true,"content":{"multipart/form-data":{"schema":{"properties":{"file":{"type":"string","format":"binary","title":"File","key$":"file"}},"type":"object","required":["file"],"title":"Body_worker_upload_api_admin_video_remixer_worker_jobs__identifier__upload_post","x-ref":"#/components/schemas/Body_worker_upload_api_admin_video_remixer_worker_jobs__identifier__upload_post","index$":1}}}},"parameters":[{"name":"identifier","in":"path","required":true,"schema":{"type":"string","title":"Identifier"},"index$":0},{"name":"x-worker-id","in":"header","required":false,"schema":{"type":"string","default":"","title":"X-Worker-Id"},"index$":1},{"name":"x-lease-token","in":"header","required":false,"schema":{"type":"string","default":"","title":"X-Lease-Token"},"index$":2},{"name":"authorization","in":"header","required":false,"schema":{"type":"string","default":"","title":"Authorization"},"index$":3}]},"POST /api/admin/video-remixer/worker/claim":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"worker_id":{"type":"string","maxLength":100,"minLength":3,"pattern":"^[A-Za-z0-9_.-]+$","title":"Worker Id","key$":"worker_id"},"kinds":{"items":{"type":"string"},"type":"array","maxItems":8,"minItems":1,"title":"Kinds","key$":"kinds"},"limit":{"type":"integer","maximum":2,"minimum":1,"title":"Limit","default":1,"key$":"limit"},"tier":{"type":"string","enum":["local","frontier"],"title":"Tier","default":"local","key$":"tier"}},"additionalProperties":false,"type":"object","required":["worker_id"],"title":"WorkerClaim","x-ref":"#/components/schemas/WorkerClaim","index$":1}}}},"parameters":[{"name":"authorization","in":"header","required":false,"schema":{"type":"string","default":"","title":"Authorization"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const video_remixer_worker_ref01_ent = client.VideoRemixerWorker()
    let video_remixer_worker_ref01_data = setup.data.new.video_remixer_worker['video_remixer_worker_ref01']

    video_remixer_worker_ref01_data = (await video_remixer_worker_ref01_ent.create(video_remixer_worker_ref01_data)).data()
    assert(null != video_remixer_worker_ref01_data)


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
      '../../../../.sdk/test/entity/video_remixer_worker/VideoRemixerWorkerTestData.json')

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
    ['video_remixer_worker01','video_remixer_worker02','video_remixer_worker03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_VIDEO_REMIXER_WORKER_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_VIDEO_REMIXER_WORKER_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_VIDEO_REMIXER_WORKER_ENTID']
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
  
