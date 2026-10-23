

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


describe('Sora2AvatarAssetUploadEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.Sora2AvatarAssetUpload()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Sora2AvatarAssetUpload().create({"avatar_id":1,"file":"x","s3_key":"x","upload_type":"x","url":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'sora2_avatar_asset_upload.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"avatar_id":{"a":true,"h":"Avatar Id","n":"avatar_id","r":false,"t":"`$STRING`","key$":"avatar_id","index$":0},"file":{"a":true,"fo":"binary","h":"File","n":"file","r":true,"t":"`$STRING`","key$":"file","index$":1},"run_output_dir":{"a":true,"h":"Run Output Dir","n":"run_output_dir","r":false,"t":"`$ANY`","key$":"run_output_dir","index$":2},"s3_key":{"a":true,"h":"S3 Key","n":"s3_key","r":true,"t":"`$STRING`","key$":"s3_key","index$":3},"upload_type":{"a":true,"h":"Upload Type","n":"upload_type","r":true,"t":"`$STRING`","key$":"upload_type","index$":4},"url":{"a":true,"h":"Url","n":"url","r":true,"t":"`$STRING`","key$":"url","index$":5}},"name":"sora2_avatar_asset_upload","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/admin/sora2-avatars/upload-asset","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/admin/sora2-avatars/upload-asset","q":{},"r":{},"rb":{"fields":[{"name":"avatar_id"},{"binary":true,"name":"file"},{"name":"run_output_dir"},{"name":"upload_type"}],"kind":"multipart","media":"multipart/form-data"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"sora2-avatars"},{"lit":"upload-asset"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"sora2_avatar_asset_upload","name__orig":"sora2_avatar_asset_upload","Name":"Sora2AvatarAssetUpload","name_":"sora2_avatar_asset_upload","name-":"sora2-avatar-asset-upload","NAME":"SORA2_AVATAR_ASSET_UPLOAD","index$":146}, {"active":true,"entity":"sora2_avatar_asset_upload","key$":"BasicSora2AvatarAssetUploadFlow","kind":"basic","name":"BasicSora2AvatarAssetUploadFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"sora2_avatar_asset_upload_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'Sora2AvatarAssetUpload', {"POST /api/admin/sora2-avatars/upload-asset":{"protocol":"http","requestBody":{"content":{"multipart/form-data":{"schema":{"properties":{"file":{"type":"string","format":"binary","title":"File","key$":"file"},"upload_type":{"type":"string","enum":["sora2_video","avatar_frame","headshot"],"title":"Upload Type","key$":"upload_type"},"run_output_dir":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Run Output Dir","key$":"run_output_dir"},"avatar_id":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"Avatar Id","key$":"avatar_id"}},"type":"object","required":["file","upload_type"],"title":"Body_upload_sora2_avatar_asset_api_admin_sora2_avatars_upload_asset_post","x-ref":"#/components/schemas/Body_upload_sora2_avatar_asset_api_admin_sora2_avatars_upload_asset_post","index$":1}}},"required":true},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const sora2_avatar_asset_upload_ref01_ent = client.Sora2AvatarAssetUpload()
    let sora2_avatar_asset_upload_ref01_data = setup.data.new.sora2_avatar_asset_upload['sora2_avatar_asset_upload_ref01']

    sora2_avatar_asset_upload_ref01_data = (await sora2_avatar_asset_upload_ref01_ent.create(sora2_avatar_asset_upload_ref01_data)).data()
    assert(null != sora2_avatar_asset_upload_ref01_data)


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
      '../../../../.sdk/test/entity/sora2_avatar_asset_upload/Sora2AvatarAssetUploadTestData.json')

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
    ['sora2_avatar_asset_upload01','sora2_avatar_asset_upload02','sora2_avatar_asset_upload03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_SORA2_AVATAR_ASSET_UPLOAD_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_SORA2_AVATAR_ASSET_UPLOAD_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_SORA2_AVATAR_ASSET_UPLOAD_ENTID']
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
  
