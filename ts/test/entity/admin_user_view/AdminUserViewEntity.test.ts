

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


describe('AdminUserViewEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.AdminUserView()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('admin_user_view hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of CrackedApiReferenceSDK.test(offline).AdminUserView().stream('list')) { }
    }, /offline/)

    for await (const _item of CrackedApiReferenceSDK.test(offline).AdminUserView()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.AdminUserView().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of CrackedApiReferenceSDK.test().AdminUserView().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.AdminUserView().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.AdminUserView().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AdminUserView().list({"limit":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'admin_user_view.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"account_type":{"a":true,"h":"Account Type","n":"account_type","r":false,"t":"`$ANY`","key$":"account_type","index$":0},"admin_notes":{"a":true,"h":"Admin Notes","n":"admin_notes","r":false,"t":"`$ANY`","key$":"admin_notes","index$":1},"agents_count":{"a":true,"h":"Agents Count","n":"agents_count","r":false,"t":"`$INTEGER`","key$":"agents_count","index$":2},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"t":"`$STRING`","key$":"created_at","index$":3},"credits":{"a":true,"h":"Credits","n":"credits","op":{"update":{"req":false,"type":"`$ANY`"}},"r":true,"t":"`$INTEGER`","key$":"credits","index$":4},"email":{"a":true,"h":"Email","n":"email","r":true,"t":"`$STRING`","key$":"email","index$":5},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":6},"industry":{"a":true,"h":"Industry","n":"industry","r":true,"t":"`$ANY`","key$":"industry","index$":7},"is_admin":{"a":true,"h":"Is Admin","n":"is_admin","r":false,"t":"`$BOOLEAN`","key$":"is_admin","index$":8},"is_bookmarked":{"a":true,"h":"Is Bookmarked","n":"is_bookmarked","r":false,"t":"`$BOOLEAN`","key$":"is_bookmarked","index$":9},"is_internal_user":{"a":true,"h":"Is Internal User","n":"is_internal_user","r":false,"t":"`$BOOLEAN`","key$":"is_internal_user","index$":10},"membership":{"a":true,"h":"Membership","n":"membership","op":{"update":{"req":false,"type":"`$ANY`"}},"r":true,"t":"`$ANY`","key$":"membership","index$":11},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":12},"new_email":{"a":true,"fo":"email","h":"New Email","n":"new_email","r":true,"t":"`$STRING`","key$":"new_email","index$":13},"partner_external_user_id":{"a":true,"h":"Partner External User Id","n":"partner_external_user_id","r":false,"t":"`$STRING`","key$":"partner_external_user_id","index$":14},"partner_policy_code":{"a":true,"h":"Partner Policy Code","n":"partner_policy_code","r":false,"t":"`$ANY`","key$":"partner_policy_code","index$":15},"partner_source":{"a":true,"h":"Partner Source","n":"partner_source","r":false,"t":"`$ANY`","key$":"partner_source","index$":16},"product_name":{"a":true,"h":"Product Name","n":"product_name","r":true,"t":"`$ANY`","key$":"product_name","index$":17},"product_url":{"a":true,"h":"Product Url","n":"product_url","r":true,"t":"`$ANY`","key$":"product_url","index$":18},"skip":{"a":true,"h":"Skip","n":"skip","r":true,"t":"`$BOOLEAN`","key$":"skip","index$":19},"subscription_details":{"a":true,"h":"Subscription Details","n":"subscription_details","r":false,"t":"`$ANY`","key$":"subscription_details","index$":20},"subscription_status":{"a":true,"h":"Subscription Status","n":"subscription_status","r":true,"t":"`$ANY`","key$":"subscription_status","index$":21}},"id":{"field":"id","name":"id"},"name":"admin_user_view","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/admin/users/{user_id}/fix-auto-schedule-by-date","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"user_id","or":"user_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"product_id","or":"product_id","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"target_date","or":"target_date","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/api/admin/users/{user_id}/fix-auto-schedule-by-date","q":{"$action":"fix_auto_schedule_by_date","exist":["target_date","user_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users"},{"var":"user_id"},{"lit":"fix-auto-schedule-by-date"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/admin/users/{user_id}/repair-approved-source-queue-today","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"user_id","or":"user_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"product_id","or":"product_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/admin/users/{user_id}/repair-approved-source-queue-today","q":{"$action":"repair_approved_source_queue_today","exist":["product_id","user_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users"},{"var":"user_id"},{"lit":"repair-approved-source-queue-today"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /api/admin/users/{user_id}/convert-to-enterprise","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"user_id","or":"user_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/admin/users/{user_id}/convert-to-enterprise","q":{"exist":["user_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users"},{"var":"user_id"},{"lit":"convert-to-enterprise"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /api/admin/users/{user_id}/fix-all","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"user_id","or":"user_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/admin/users/{user_id}/fix-all","q":{"$action":"fix_all","exist":["user_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users"},{"var":"user_id"},{"lit":"fix-all"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"POST /api/admin/users/{user_id}/fix-auto-schedule","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"user_id","or":"user_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"product_id","or":"product_id","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/admin/users/{user_id}/fix-auto-schedule","q":{"$action":"fix_auto_schedule","exist":["user_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users"},{"var":"user_id"},{"lit":"fix-auto-schedule"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4},{"a":true,"co":{"id":"POST /api/admin/users/{user_id}/fix-auto-schedule-today","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"user_id","or":"user_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":false,"k":"query","n":"background","or":"background","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"k":"query","n":"product_id","or":"product_id","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/api/admin/users/{user_id}/fix-auto-schedule-today","q":{"$action":"fix_auto_schedule_today","exist":["user_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users"},{"var":"user_id"},{"lit":"fix-auto-schedule-today"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":5},{"a":true,"co":{"id":"POST /api/admin/users/{user_id}/fix-auto-schedule-today-force","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"user_id","or":"user_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"product_id","or":"product_id","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/admin/users/{user_id}/fix-auto-schedule-today-force","q":{"$action":"fix_auto_schedule_today_force","exist":["user_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users"},{"var":"user_id"},{"lit":"fix-auto-schedule-today-force"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":6},{"a":true,"co":{"id":"POST /api/admin/users/{user_id}/fix-auto-schedule-tomorrow","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"user_id","or":"user_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"product_id","or":"product_id","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/admin/users/{user_id}/fix-auto-schedule-tomorrow","q":{"$action":"fix_auto_schedule_tomorrow","exist":["user_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users"},{"var":"user_id"},{"lit":"fix-auto-schedule-tomorrow"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":7},{"a":true,"co":{"id":"POST /api/admin/users/{user_id}/fix-comments-today","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"user_id","or":"user_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"product_id","or":"product_id","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/admin/users/{user_id}/fix-comments-today","q":{"$action":"fix_comments_today","exist":["user_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users"},{"var":"user_id"},{"lit":"fix-comments-today"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":8},{"a":true,"co":{"id":"POST /api/admin/users/{user_id}/generate-pomelli-video","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"user_id","or":"user_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/admin/users/{user_id}/generate-pomelli-video","q":{"$action":"generate_pomelli_video","exist":["user_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users"},{"var":"user_id"},{"lit":"generate-pomelli-video"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":9},{"a":true,"co":{"id":"POST /api/admin/users/{user_id}/repost-tiktok-videos-tomorrow","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"user_id","or":"user_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"product_id","or":"product_id","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/admin/users/{user_id}/repost-tiktok-videos-tomorrow","q":{"$action":"repost_tiktok_videos_tomorrow","exist":["user_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users"},{"var":"user_id"},{"lit":"repost-tiktok-videos-tomorrow"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":10},{"a":true,"co":{"id":"POST /api/admin/users/{user_id}/reset-onboarding","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"user_id","or":"user_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/admin/users/{user_id}/reset-onboarding","q":{"$action":"reset_onboarding","exist":["user_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users"},{"var":"user_id"},{"lit":"reset-onboarding"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":11},{"a":true,"bf":["new_email"],"co":{"id":"POST /api/admin/users/{user_id}/transfer-ownership","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"user_id","or":"user_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/admin/users/{user_id}/transfer-ownership","q":{"exist":["user_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users"},{"var":"user_id"},{"lit":"transfer-ownership"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":12}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/admin/users/search","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"email","or":"email","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/admin/users/search","q":{"exist":["email"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users"},{"lit":"search"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/admin/users","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":20,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/admin/users","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/admin/users/{user_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"user_id","or":"user_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/api/admin/users/{user_id}","q":{"exist":["user_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users"},{"var":"user_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /api/admin/users/{user_id}/auto-schedule","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"user_id","or":"user_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"is_enabled","or":"is_enabled","r":true,"t":"`$BOOLEAN`","index$":0},{"a":true,"k":"query","n":"product_id","or":"product_id","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/api/admin/users/{user_id}/auto-schedule","q":{"$action":"auto_schedule","exist":["is_enabled","user_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users"},{"var":"user_id"},{"lit":"auto-schedule"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"bf":["posted_video_reuse_percent","rebuild"],"co":{"id":"PUT /api/admin/users/{user_id}/posted-video-reuse","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"user_id","or":"user_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"product_id","or":"product_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/api/admin/users/{user_id}/posted-video-reuse","q":{"$action":"posted_video_reuse","exist":["product_id","user_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users"},{"var":"user_id"},{"lit":"posted-video-reuse"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"bf":["admin_notes","agents_count","credits","is_admin","is_bookmarked","is_internal_user","membership"],"co":{"id":"PUT /api/admin/users/{user_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"user_id","or":"user_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/api/admin/users/{user_id}","q":{"exist":["user_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users"},{"var":"user_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.user"]]},"key$":"admin_user_view","name__orig":"admin_user_view","Name":"AdminUserView","name_":"admin_user_view","name-":"admin-user-view","NAME":"ADMIN_USER_VIEW","index$":18}, {"active":true,"entity":"admin_user_view","key$":"BasicAdminUserViewFlow","kind":"basic","name":"BasicAdminUserViewFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"admin_user_view_ref01"},"m":{"user_id":"user01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"admin_user_view_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"admin_user_view_ref01","srcdatavar":"admin_user_view_ref01_data","suffix":"_up0","textfield":"created_at"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-admin_user_view_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"admin_user_view_ref01","suffix":"_rm0"},"m":{"id":"admin_user_view01"},"o":"remove","s":[],"v":[],"index$":3},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"admin_user_view_ref01"}}],"index$":4}]}, 'AdminUserView', {"POST /api/admin/users/{user_id}/fix-auto-schedule-by-date":{"protocol":"http","parameters":[{"name":"user_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"User Id"},"index$":0},{"name":"target_date","in":"query","required":true,"schema":{"type":"string","description":"Target date in YYYY-MM-DD format","title":"Target Date"},"description":"Target date in YYYY-MM-DD format","index$":1},{"name":"product_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"description":"Optional product ID for enterprise users","title":"Product Id"},"description":"Optional product ID for enterprise users","index$":2}]},"POST /api/admin/users/{user_id}/repair-approved-source-queue-today":{"protocol":"http","parameters":[{"name":"user_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"User Id"},"index$":0},{"name":"product_id","in":"query","required":true,"schema":{"type":"string","format":"uuid","description":"Product whose scheduled entries should be repaired","title":"Product Id"},"description":"Product whose scheduled entries should be repaired","index$":1}]},"POST /api/admin/users/{user_id}/convert-to-enterprise":{"protocol":"http","parameters":[{"name":"user_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"User Id"},"index$":0}]},"POST /api/admin/users/{user_id}/fix-all":{"protocol":"http","parameters":[{"name":"user_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"User Id"},"index$":0}]},"POST /api/admin/users/{user_id}/fix-auto-schedule":{"protocol":"http","parameters":[{"name":"user_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"User Id"},"index$":0},{"name":"product_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"description":"Optional product ID for enterprise users","title":"Product Id"},"description":"Optional product ID for enterprise users","index$":1}]},"POST /api/admin/users/{user_id}/fix-auto-schedule-today":{"protocol":"http","parameters":[{"name":"user_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"User Id"},"index$":0},{"name":"product_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"description":"Optional product ID for enterprise users","title":"Product Id"},"description":"Optional product ID for enterprise users","index$":1},{"name":"background","in":"query","required":false,"schema":{"type":"boolean","description":"Queue the fix in Celery and return immediately","default":false,"title":"Background"},"description":"Queue the fix in Celery and return immediately","index$":2}]},"POST /api/admin/users/{user_id}/fix-auto-schedule-today-force":{"protocol":"http","parameters":[{"name":"user_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"User Id"},"index$":0},{"name":"product_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"description":"Optional product ID for enterprise users","title":"Product Id"},"description":"Optional product ID for enterprise users","index$":1}]},"POST /api/admin/users/{user_id}/fix-auto-schedule-tomorrow":{"protocol":"http","parameters":[{"name":"user_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"User Id"},"index$":0},{"name":"product_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"description":"Optional product ID for enterprise users","title":"Product Id"},"description":"Optional product ID for enterprise users","index$":1}]},"POST /api/admin/users/{user_id}/fix-comments-today":{"protocol":"http","parameters":[{"name":"user_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"User Id"},"index$":0},{"name":"product_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"description":"Optional product ID for enterprise users","title":"Product Id"},"description":"Optional product ID for enterprise users","index$":1}]},"POST /api/admin/users/{user_id}/generate-pomelli-video":{"protocol":"http","parameters":[{"name":"user_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"User Id"},"index$":0}]},"POST /api/admin/users/{user_id}/repost-tiktok-videos-tomorrow":{"protocol":"http","parameters":[{"name":"user_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"User Id"},"index$":0},{"name":"product_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"description":"Optional product ID for enterprise users","title":"Product Id"},"description":"Optional product ID for enterprise users","index$":1}]},"POST /api/admin/users/{user_id}/reset-onboarding":{"protocol":"http","parameters":[{"name":"user_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"User Id"},"index$":0}]},"POST /api/admin/users/{user_id}/transfer-ownership":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"new_email":{"type":"string","format":"email","title":"New Email","key$":"new_email"}},"type":"object","required":["new_email"],"title":"UserTransferOwnershipRequest","x-ref":"#/components/schemas/UserTransferOwnershipRequest","index$":1}}}},"parameters":[{"name":"user_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"User Id"},"index$":0}]},"GET /api/admin/users/search":{"protocol":"http","parameters":[{"name":"email","in":"query","required":true,"schema":{"type":"string","description":"Email to search for (supports partial matches)","title":"Email"},"description":"Email to search for (supports partial matches)","index$":0}]},"GET /api/admin/users":{"protocol":"http","parameters":[{"name":"page","in":"query","required":false,"schema":{"type":"integer","minimum":1,"description":"Page number (1-based)","default":1,"title":"Page"},"description":"Page number (1-based)","index$":0},{"name":"limit","in":"query","required":false,"schema":{"type":"integer","maximum":100,"minimum":1,"description":"Number of users per page","default":20,"title":"Limit"},"description":"Number of users per page","index$":1}]},"DELETE /api/admin/users/{user_id}":{"protocol":"http","parameters":[{"name":"user_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"User Id"},"index$":0}]},"PUT /api/admin/users/{user_id}/auto-schedule":{"protocol":"http","parameters":[{"name":"user_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"User Id"},"index$":0},{"name":"is_enabled","in":"query","required":true,"schema":{"type":"boolean","description":"Enable or disable auto schedule","title":"Is Enabled"},"description":"Enable or disable auto schedule","index$":1},{"name":"product_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"description":"Optional product ID for enterprise users","title":"Product Id"},"description":"Optional product ID for enterprise users","index$":2}]},"PUT /api/admin/users/{user_id}/posted-video-reuse":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"posted_video_reuse_percent":{"type":"integer","maximum":100,"minimum":0,"title":"Posted Video Reuse Percent"},"rebuild":{"type":"boolean","title":"Rebuild","default":false}},"type":"object","required":["posted_video_reuse_percent"],"title":"PostedVideoReuseUpdateRequest","x-ref":"#/components/schemas/PostedVideoReuseUpdateRequest"}}}},"parameters":[{"name":"user_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"User Id"},"index$":0},{"name":"product_id","in":"query","required":true,"schema":{"type":"string","format":"uuid","description":"Product whose posted-video reuse setting should be updated","title":"Product Id"},"description":"Product whose posted-video reuse setting should be updated","index$":1}]},"PUT /api/admin/users/{user_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"credits":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"Credits","key$":"credits"},"membership":{"anyOf":[{"type":"string","enum":["STARTER","ENTHUSIAST","PRO","STARTER_YEARLY","ENTHUSIAST_YEARLY","PRO_YEARLY","STARTER_WEEKLY","ENTHUSIAST_WEEKLY","PRO_WEEKLY","CUSTOM","CUSTOM_YEARLY"],"title":"Membership","x-ref":"#/components/schemas/Membership"},{"type":"null"}],"key$":"membership"},"agents_count":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"Agents Count","key$":"agents_count"},"is_admin":{"anyOf":[{"type":"boolean"},{"type":"null"}],"title":"Is Admin","key$":"is_admin"},"is_internal_user":{"anyOf":[{"type":"boolean"},{"type":"null"}],"title":"Is Internal User","key$":"is_internal_user"},"is_bookmarked":{"anyOf":[{"type":"boolean"},{"type":"null"}],"title":"Is Bookmarked","key$":"is_bookmarked"},"admin_notes":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Admin Notes","key$":"admin_notes"}},"type":"object","title":"UserUpdateAdmin","x-ref":"#/components/schemas/UserUpdateAdmin","index$":1}}}},"parameters":[{"name":"user_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"User Id"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const admin_user_view_ref01_ent = client.AdminUserView()
    let admin_user_view_ref01_data = setup.data.new.admin_user_view['admin_user_view_ref01']
    admin_user_view_ref01_data['user_id'] = setup.idmap['user01']

    admin_user_view_ref01_data = (await admin_user_view_ref01_ent.create(admin_user_view_ref01_data)).data()
    assert(null != admin_user_view_ref01_data.id)


    // LIST
    const admin_user_view_ref01_match: any = {}

    const admin_user_view_ref01_list = (await admin_user_view_ref01_ent.list(admin_user_view_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(admin_user_view_ref01_list, { id: admin_user_view_ref01_data.id })))


    // UPDATE
    const admin_user_view_ref01_data_up0: any = {}
    admin_user_view_ref01_data_up0.id = admin_user_view_ref01_data.id

    const admin_user_view_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-admin_user_view_ref01_' + setup.now }
    ;(admin_user_view_ref01_data_up0 as any)[admin_user_view_ref01_markdef_up0.name] = admin_user_view_ref01_markdef_up0.value

    const admin_user_view_ref01_resdata_up0 = (await admin_user_view_ref01_ent.update(admin_user_view_ref01_data_up0)).data()
    assert(admin_user_view_ref01_resdata_up0.id === admin_user_view_ref01_data_up0.id)

    assert((admin_user_view_ref01_resdata_up0 as any)[admin_user_view_ref01_markdef_up0.name] === admin_user_view_ref01_markdef_up0.value)


    // REMOVE
    const admin_user_view_ref01_match_rm0: any = { id: admin_user_view_ref01_data.id }
    await admin_user_view_ref01_ent.remove(admin_user_view_ref01_match_rm0)
  

    // LIST
    const admin_user_view_ref01_match_rt0: any = {}

    const admin_user_view_ref01_list_rt0 = (await admin_user_view_ref01_ent.list(admin_user_view_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(admin_user_view_ref01_list_rt0, { id: admin_user_view_ref01_data.id })))


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
      '../../../../.sdk/test/entity/admin_user_view/AdminUserViewTestData.json')

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
    ['admin_user_view01','admin_user_view02','admin_user_view03','user01','user02','user03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_ADMIN_USER_VIEW_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_ADMIN_USER_VIEW_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_ADMIN_USER_VIEW_ENTID']
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
  
