

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


describe('AdminLandingTaskEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.AdminLandingTask()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AdminLandingTask().create({"user_id":1,"task_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'admin_landing_task.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"task_id":{"a":true,"h":"Task Id","n":"task_id","r":true,"t":"`$STRING`","key$":"task_id","index$":0}},"name":"admin_landing_task","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/admin/users/{user_id}/regenerate-landing","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"user_id","or":"user_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"product_id","or":"product_id","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/admin/users/{user_id}/regenerate-landing","q":{"exist":["user_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users"},{"var":"user_id"},{"lit":"regenerate-landing"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/admin/users/{user_id}/regenerate-microhub","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"user_id","or":"user_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"product_id","or":"product_id","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/admin/users/{user_id}/regenerate-microhub","q":{"exist":["user_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users"},{"var":"user_id"},{"lit":"regenerate-microhub"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.user"]]},"key$":"admin_landing_task","name__orig":"admin_landing_task","Name":"AdminLandingTask","name_":"admin_landing_task","name-":"admin-landing-task","NAME":"ADMIN_LANDING_TASK","index$":12}, {"active":true,"entity":"admin_landing_task","key$":"BasicAdminLandingTaskFlow","kind":"basic","name":"BasicAdminLandingTaskFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"admin_landing_task_ref01"},"m":{"user_id":"user01"},"o":"create","s":[],"v":[],"index$":0}]}, 'AdminLandingTask', {"POST /api/admin/users/{user_id}/regenerate-landing":{"protocol":"http","parameters":[{"name":"user_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"User Id"},"index$":0},{"name":"product_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"description":"Optional product ID for enterprise users","title":"Product Id"},"description":"Optional product ID for enterprise users","index$":1}]},"POST /api/admin/users/{user_id}/regenerate-microhub":{"protocol":"http","parameters":[{"name":"user_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"User Id"},"index$":0},{"name":"product_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"description":"Optional product ID for enterprise users","title":"Product Id"},"description":"Optional product ID for enterprise users","index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const admin_landing_task_ref01_ent = client.AdminLandingTask()
    let admin_landing_task_ref01_data = setup.data.new.admin_landing_task['admin_landing_task_ref01']
    admin_landing_task_ref01_data['user_id'] = setup.idmap['user01']

    admin_landing_task_ref01_data = (await admin_landing_task_ref01_ent.create(admin_landing_task_ref01_data)).data()
    assert(null != admin_landing_task_ref01_data)


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
      '../../../../.sdk/test/entity/admin_landing_task/AdminLandingTaskTestData.json')

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
    ['admin_landing_task01','admin_landing_task02','admin_landing_task03','user01','user02','user03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_ADMIN_LANDING_TASK_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_ADMIN_LANDING_TASK_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_ADMIN_LANDING_TASK_ENTID']
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
  
