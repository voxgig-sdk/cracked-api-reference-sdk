

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


describe('AdminAccountResetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.AdminAccountReset()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AdminAccountReset().create({"agent_ids":"x","agent_ids_sha256":1,"backup_sha256":"x","confirmation":"x","customer_email":"x","pc_name":"x","product_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'admin_account_reset.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"agent_ids":{"a":true,"h":"Agent Ids","n":"agent_ids","r":true,"t":"`$ARRAY`","key$":"agent_ids","index$":0},"agent_ids_sha256":{"a":true,"h":"Agent Ids Sha256","n":"agent_ids_sha256","r":true,"t":"`$STRING`","key$":"agent_ids_sha256","index$":1},"backup_sha256":{"a":true,"h":"Backup Sha256","n":"backup_sha256","r":true,"t":"`$STRING`","key$":"backup_sha256","index$":2},"batch_size":{"a":true,"h":"Batch Size","n":"batch_size","r":false,"t":"`$INTEGER`","key$":"batch_size","index$":3},"confirmation":{"a":true,"h":"Confirmation","n":"confirmation","r":true,"t":"`$STRING`","key$":"confirmation","index$":4},"customer_email":{"a":true,"h":"Customer Email","n":"customer_email","r":true,"t":"`$STRING`","key$":"customer_email","index$":5},"pc_name":{"a":true,"h":"Pc Name","n":"pc_name","r":true,"t":"`$STRING`","key$":"pc_name","index$":6},"phase":{"a":true,"h":"Phase","n":"phase","r":false,"t":"`$STRING`","key$":"phase","index$":7},"product_id":{"a":true,"fo":"uuid","h":"Product Id","n":"product_id","r":true,"t":"`$STRING`","key$":"product_id","index$":8},"video_ids":{"a":true,"h":"Video Ids","n":"video_ids","r":false,"t":"`$ARRAY`","key$":"video_ids","index$":9}},"name":"admin_account_reset","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["agent_ids","agent_ids_sha256","backup_sha256","batch_size","confirmation","customer_email","pc_name","phase","product_id","video_ids"],"co":{"id":"POST /api/admin/agent-account-reset","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/admin/agent-account-reset","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"agent-account-reset"}],"t":{"req":{"agent_ids":"`reqdata.agent_id`","agent_ids_sha256":"`reqdata.agent_ids_sha256`","backup_sha256":"`reqdata.backup_sha256`","batch_size":"`reqdata.batch_size`","confirmation":"`reqdata.confirmation`","customer_email":"`reqdata.customer_email`","pc_name":"`reqdata.pc_name`","phase":"`reqdata.phase`","product_id":"`reqdata.product_id`","video_ids":"`reqdata.video_id`"},"res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"admin_account_reset","name__orig":"admin_account_reset","Name":"AdminAccountReset","name_":"admin_account_reset","name-":"admin-account-reset","NAME":"ADMIN_ACCOUNT_RESET","index$":4}, {"active":true,"entity":"admin_account_reset","key$":"BasicAdminAccountResetFlow","kind":"basic","name":"BasicAdminAccountResetFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"admin_account_reset_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'AdminAccountReset', {"POST /api/admin/agent-account-reset":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"agent_ids":{"items":{"type":"string"},"type":"array","maxItems":200,"minItems":1,"title":"Agent Ids","key$":"agent_ids"},"agent_ids_sha256":{"type":"string","pattern":"^[a-f0-9]{64}$","title":"Agent Ids Sha256","key$":"agent_ids_sha256"},"backup_sha256":{"type":"string","pattern":"^[a-f0-9]{64}$","title":"Backup Sha256","key$":"backup_sha256"},"pc_name":{"type":"string","const":"CAPC5","title":"Pc Name","key$":"pc_name"},"customer_email":{"type":"string","title":"Customer Email","key$":"customer_email"},"product_id":{"type":"string","format":"uuid","title":"Product Id","key$":"product_id"},"video_ids":{"items":{"type":"string","format":"uuid"},"type":"array","maxItems":2000,"title":"Video Ids","key$":"video_ids"},"phase":{"type":"string","enum":["history","videos","accounts"],"title":"Phase","default":"history","key$":"phase"},"batch_size":{"type":"integer","maximum":10,"minimum":1,"title":"Batch Size","default":2,"key$":"batch_size"},"confirmation":{"type":"string","const":"clear-old-account-data","title":"Confirmation","key$":"confirmation"}},"additionalProperties":false,"type":"object","required":["agent_ids","agent_ids_sha256","backup_sha256","pc_name","customer_email","product_id","confirmation"],"title":"AccountResetRequest","x-ref":"#/components/schemas/AccountResetRequest","index$":1}}},"required":true},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const admin_account_reset_ref01_ent = client.AdminAccountReset()
    let admin_account_reset_ref01_data = setup.data.new.admin_account_reset['admin_account_reset_ref01']

    admin_account_reset_ref01_data = (await admin_account_reset_ref01_ent.create(admin_account_reset_ref01_data)).data()
    assert(null != admin_account_reset_ref01_data)


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
      '../../../../.sdk/test/entity/admin_account_reset/AdminAccountResetTestData.json')

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
    ['admin_account_reset01','admin_account_reset02','admin_account_reset03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_ADMIN_ACCOUNT_RESET_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_ADMIN_ACCOUNT_RESET_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_ADMIN_ACCOUNT_RESET_ENTID']
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
  
