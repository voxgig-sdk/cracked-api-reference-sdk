

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


describe('ProductLandingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CRACKED_API_REFERENCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CRACKED_API_REFERENCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrackedApiReferenceSDK.test()
    const ent = testsdk.ProductLanding()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('product_landing hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of CrackedApiReferenceSDK.test(offline).ProductLanding().stream('list')) { }
    }, /offline/)

    for await (const _item of CrackedApiReferenceSDK.test(offline).ProductLanding()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = CrackedApiReferenceSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.ProductLanding().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of CrackedApiReferenceSDK.test().ProductLanding().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new CrackedApiReferenceSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.ProductLanding().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.ProductLanding().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrackedApiReferenceSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ProductLanding().list({"product_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CRACKED_API_REFERENCE_TEST_LIVE
    for (const op of ['list', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'product_landing.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"bio":{"a":true,"h":"Bio","n":"bio","r":false,"t":"`$ANY`","key$":"bio","index$":0},"commentingOnMyPosts":{"a":true,"h":"Commenting On My Posts","n":"commentingOnMyPosts","op":{"update":{"req":false,"type":"`$ANY`"}},"r":true,"t":"`$BOOLEAN`","key$":"commentingOnMyPosts","index$":1},"commentingOnOthersPosts":{"a":true,"h":"Commenting On Others Posts","n":"commentingOnOthersPosts","op":{"update":{"req":false,"type":"`$ANY`"}},"r":true,"t":"`$BOOLEAN`","key$":"commentingOnOthersPosts","index$":2},"ctaButtonText":{"a":true,"h":"Cta Button Text","n":"ctaButtonText","r":false,"t":"`$ANY`","key$":"ctaButtonText","index$":3},"ctaDescription":{"a":true,"h":"Cta Description","n":"ctaDescription","r":false,"t":"`$ANY`","key$":"ctaDescription","index$":4},"ctaLink":{"a":true,"h":"Cta Link","n":"ctaLink","r":false,"t":"`$ANY`","key$":"ctaLink","index$":5},"ctaTitle":{"a":true,"h":"Cta Title","n":"ctaTitle","r":false,"t":"`$ANY`","key$":"ctaTitle","index$":6},"dmCommenters":{"a":true,"h":"Dm Commenters","n":"dmCommenters","op":{"update":{"req":false,"type":"`$ANY`"}},"r":true,"t":"`$BOOLEAN`","key$":"dmCommenters","index$":7},"dmInitialMessagePrompt":{"a":true,"h":"Dm Initial Message Prompt","n":"dmInitialMessagePrompt","r":false,"t":"`$ANY`","key$":"dmInitialMessagePrompt","index$":8},"dmOngoingResponsePrompt":{"a":true,"h":"Dm Ongoing Response Prompt","n":"dmOngoingResponsePrompt","r":false,"t":"`$ANY`","key$":"dmOngoingResponsePrompt","index$":9},"firstCommentTextBeforeLink":{"a":true,"h":"First Comment Text Before Link","n":"firstCommentTextBeforeLink","r":false,"t":"`$ANY`","key$":"firstCommentTextBeforeLink","index$":10},"headerImageUrl":{"a":true,"h":"Header Image Url","n":"headerImageUrl","r":false,"t":"`$ANY`","key$":"headerImageUrl","index$":11},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":12},"landingHtmlUrl":{"a":true,"h":"Landing Html Url","n":"landingHtmlUrl","r":false,"t":"`$ANY`","key$":"landingHtmlUrl","index$":13},"landingLastGeneratedAt":{"a":true,"h":"Landing Last Generated At","n":"landingLastGeneratedAt","r":false,"t":"`$ANY`","key$":"landingLastGeneratedAt","index$":14},"landingReferenceScreenshotUrl":{"a":true,"h":"Landing Reference Screenshot Url","n":"landingReferenceScreenshotUrl","r":false,"t":"`$ANY`","key$":"landingReferenceScreenshotUrl","index$":15},"landingScreenshotUrl":{"a":true,"h":"Landing Screenshot Url","n":"landingScreenshotUrl","r":false,"t":"`$ANY`","key$":"landingScreenshotUrl","index$":16},"landingStatus":{"a":true,"h":"Landing Status","n":"landingStatus","r":true,"t":"`$STRING`","key$":"landingStatus","index$":17},"landingUrl":{"a":true,"h":"Landing Url","n":"landingUrl","r":true,"t":"`$STRING`","key$":"landingUrl","index$":18},"linkInBioType":{"a":true,"h":"Link In Bio Type","n":"linkInBioType","op":{"update":{"req":false,"type":"`$ANY`"}},"r":true,"t":"`$STRING`","key$":"linkInBioType","index$":19},"linkInDmsType":{"a":true,"h":"Link In Dms Type","n":"linkInDmsType","op":{"update":{"req":false,"type":"`$ANY`"}},"r":true,"t":"`$STRING`","key$":"linkInDmsType","index$":20},"linkInPostsType":{"a":true,"h":"Link In Posts Type","n":"linkInPostsType","op":{"update":{"req":false,"type":"`$ANY`"}},"r":true,"t":"`$STRING`","key$":"linkInPostsType","index$":21},"links":{"a":true,"h":"Links","n":"links","r":false,"t":"`$ANY`","key$":"links","index$":22},"microhubBio":{"a":true,"h":"Microhub Bio","n":"microhubBio","r":false,"t":"`$ANY`","key$":"microhubBio","index$":23},"microhubCtaButtonText":{"a":true,"h":"Microhub Cta Button Text","n":"microhubCtaButtonText","r":false,"t":"`$ANY`","key$":"microhubCtaButtonText","index$":24},"microhubCtaDescription":{"a":true,"h":"Microhub Cta Description","n":"microhubCtaDescription","r":false,"t":"`$ANY`","key$":"microhubCtaDescription","index$":25},"microhubCtaLink":{"a":true,"h":"Microhub Cta Link","n":"microhubCtaLink","r":false,"t":"`$ANY`","key$":"microhubCtaLink","index$":26},"microhubCtaTitle":{"a":true,"h":"Microhub Cta Title","n":"microhubCtaTitle","r":false,"t":"`$ANY`","key$":"microhubCtaTitle","index$":27},"microhubHeaderImageUrl":{"a":true,"h":"Microhub Header Image Url","n":"microhubHeaderImageUrl","r":false,"t":"`$ANY`","key$":"microhubHeaderImageUrl","index$":28},"microhubLinks":{"a":true,"h":"Microhub Links","n":"microhubLinks","r":false,"t":"`$ARRAY`","key$":"microhubLinks","index$":29},"microhubName":{"a":true,"h":"Microhub Name","n":"microhubName","r":false,"t":"`$ANY`","key$":"microhubName","index$":30},"microhubProfileImageUrl":{"a":true,"h":"Microhub Profile Image Url","n":"microhubProfileImageUrl","r":false,"t":"`$ANY`","key$":"microhubProfileImageUrl","index$":31},"microhubScreenshotUrl":{"a":true,"h":"Microhub Screenshot Url","n":"microhubScreenshotUrl","r":false,"t":"`$ANY`","key$":"microhubScreenshotUrl","index$":32},"microhubSocialLinks":{"a":true,"h":"Microhub Social Links","n":"microhubSocialLinks","r":false,"t":"`$OBJECT`","key$":"microhubSocialLinks","index$":33},"microhubStatus":{"a":true,"h":"Microhub Status","n":"microhubStatus","r":true,"t":"`$STRING`","key$":"microhubStatus","index$":34},"microhubTestimonials":{"a":true,"h":"Microhub Testimonials","n":"microhubTestimonials","r":false,"t":"`$ARRAY`","key$":"microhubTestimonials","index$":35},"microhubUrl":{"a":true,"h":"Microhub Url","n":"microhubUrl","r":true,"t":"`$STRING`","key$":"microhubUrl","index$":36},"myPostsStylePrompt":{"a":true,"h":"My Posts Style Prompt","n":"myPostsStylePrompt","r":false,"t":"`$ANY`","key$":"myPostsStylePrompt","index$":37},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":38},"othersStylePrompt":{"a":true,"h":"Others Style Prompt","n":"othersStylePrompt","r":false,"t":"`$ANY`","key$":"othersStylePrompt","index$":39},"othersTargetMarketPrompt":{"a":true,"h":"Others Target Market Prompt","n":"othersTargetMarketPrompt","r":false,"t":"`$ANY`","key$":"othersTargetMarketPrompt","index$":40},"productLinkSelection":{"a":true,"h":"Product Link Selection","n":"productLinkSelection","op":{"update":{"req":false,"type":"`$ANY`"}},"r":true,"t":"`$STRING`","key$":"productLinkSelection","index$":41},"productUrl":{"a":true,"h":"Product Url","n":"productUrl","r":false,"t":"`$ANY`","key$":"productUrl","index$":42},"profileImageUrl":{"a":true,"h":"Profile Image Url","n":"profileImageUrl","r":false,"t":"`$ANY`","key$":"profileImageUrl","index$":43},"shortLink":{"a":true,"h":"Short Link","n":"shortLink","r":false,"t":"`$ANY`","key$":"shortLink","index$":44},"shortLinkKeyword":{"a":true,"h":"Short Link Keyword","n":"shortLinkKeyword","r":false,"t":"`$ANY`","key$":"shortLinkKeyword","index$":45},"showLinkInFirstComment":{"a":true,"h":"Show Link In First Comment","n":"showLinkInFirstComment","op":{"update":{"req":false,"type":"`$ANY`"}},"r":true,"t":"`$BOOLEAN`","key$":"showLinkInFirstComment","index$":46},"slug":{"a":true,"h":"Slug","n":"slug","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"slug","index$":47},"socialLinks":{"a":true,"h":"Social Links","n":"socialLinks","r":false,"t":"`$ANY`","key$":"socialLinks","index$":48},"testimonials":{"a":true,"h":"Testimonials","n":"testimonials","r":false,"t":"`$ANY`","key$":"testimonials","index$":49}},"id":{"field":"id","name":"id"},"name":"product_landing","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/landings/me","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"product_id","or":"product_id","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/landings/me","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"landings"},{"lit":"me"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["bio","ctaButtonText","ctaDescription","ctaLink","ctaTitle","headerImageUrl","links","name","profileImageUrl","socialLinks","testimonials"],"co":{"id":"PUT /api/landings/microhub","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"product_id","or":"product_id","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/api/landings/microhub","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"landings"},{"lit":"microhub"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"bf":["commentingOnMyPosts","commentingOnOthersPosts","dmCommenters","dmInitialMessagePrompt","dmOngoingResponsePrompt","firstCommentTextBeforeLink","linkInBioType","linkInDmsType","linkInPostsType","myPostsStylePrompt","othersStylePrompt","othersTargetMarketPrompt","productLinkSelection","shortLink","shortLinkKeyword","showLinkInFirstComment","slug"],"co":{"id":"PUT /api/landings/settings","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"product_id","or":"product_id","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/api/landings/settings","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"landings"},{"lit":"settings"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"product_landing","name__orig":"product_landing","Name":"ProductLanding","name_":"product_landing","name-":"product-landing","NAME":"PRODUCT_LANDING","index$":112}, {"active":true,"entity":"product_landing","key$":"BasicProductLandingFlow","kind":"basic","name":"BasicProductLandingFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"product_landing_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"product_landing_ref01","srcdatavar":"product_landing_ref01_data","suffix":"_up0","textfield":"landingStatus"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-product_landing_ref01"}}],"v":[],"index$":1}]}, 'ProductLanding', {"GET /api/landings/me":{"protocol":"http","parameters":[{"name":"product_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"description":"Product ID for enterprise users with multiple products","title":"Product Id"},"description":"Product ID for enterprise users with multiple products","index$":0}]},"PUT /api/landings/microhub":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"profileImageUrl":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Profileimageurl","key$":"profileImageUrl"},"headerImageUrl":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Headerimageurl","key$":"headerImageUrl"},"name":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Name","key$":"name"},"bio":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Bio","key$":"bio"},"ctaTitle":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Ctatitle","key$":"ctaTitle"},"ctaDescription":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Ctadescription","key$":"ctaDescription"},"ctaLink":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Ctalink","key$":"ctaLink"},"ctaButtonText":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Ctabuttontext","key$":"ctaButtonText"},"links":{"anyOf":[{"items":{"properties":{},"type":"object","required":[],"title":"MicrohubLink","x-ref":"#/components/schemas/MicrohubLink"},"type":"array"},{"type":"null"}],"title":"Links","key$":"links"},"socialLinks":{"anyOf":[{"properties":{"twitter":{},"instagram":{},"youtube":{},"website":{}},"type":"object","title":"MicrohubSocialLinks","x-ref":"#/components/schemas/MicrohubSocialLinks"},{"type":"null"}],"key$":"socialLinks"},"testimonials":{"anyOf":[{"items":{"properties":{},"type":"object","required":[],"title":"MicrohubTestimonial","x-ref":"#/components/schemas/MicrohubTestimonial"},"type":"array"},{"type":"null"}],"title":"Testimonials","key$":"testimonials"}},"type":"object","title":"MicrohubUpdateRequest","x-ref":"#/components/schemas/MicrohubUpdateRequest","index$":1}}}},"parameters":[{"name":"product_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"description":"Product ID for enterprise users with multiple products","title":"Product Id"},"description":"Product ID for enterprise users with multiple products","index$":0}]},"PUT /api/landings/settings":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"slug":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Slug","key$":"slug"},"linkInBioType":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Linkinbiotype","key$":"linkInBioType"},"linkInPostsType":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Linkinpoststype","key$":"linkInPostsType"},"linkInDmsType":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Linkindmstype","key$":"linkInDmsType"},"productLinkSelection":{"anyOf":[{"type":"string","enum":["product_link","original"]},{"type":"null"}],"title":"Productlinkselection","key$":"productLinkSelection"},"showLinkInFirstComment":{"anyOf":[{"type":"boolean"},{"type":"null"}],"title":"Showlinkinfirstcomment","key$":"showLinkInFirstComment"},"firstCommentTextBeforeLink":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Firstcommenttextbeforelink","key$":"firstCommentTextBeforeLink"},"shortLink":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Shortlink","key$":"shortLink"},"shortLinkKeyword":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Shortlinkkeyword","key$":"shortLinkKeyword"},"commentingOnMyPosts":{"anyOf":[{"type":"boolean"},{"type":"null"}],"title":"Commentingonmyposts","key$":"commentingOnMyPosts"},"myPostsStylePrompt":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Mypostsstyleprompt","key$":"myPostsStylePrompt"},"commentingOnOthersPosts":{"anyOf":[{"type":"boolean"},{"type":"null"}],"title":"Commentingonothersposts","key$":"commentingOnOthersPosts"},"othersTargetMarketPrompt":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Otherstargetmarketprompt","key$":"othersTargetMarketPrompt"},"othersStylePrompt":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Othersstyleprompt","key$":"othersStylePrompt"},"dmCommenters":{"anyOf":[{"type":"boolean"},{"type":"null"}],"title":"Dmcommenters","key$":"dmCommenters"},"dmInitialMessagePrompt":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Dminitialmessageprompt","key$":"dmInitialMessagePrompt"},"dmOngoingResponsePrompt":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Dmongoingresponseprompt","key$":"dmOngoingResponsePrompt"}},"type":"object","title":"SettingsUpdateRequest","x-ref":"#/components/schemas/SettingsUpdateRequest","index$":1}}}},"parameters":[{"name":"product_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"description":"Product ID for enterprise users with multiple products","title":"Product Id"},"description":"Product ID for enterprise users with multiple products","index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let product_landing_ref01_data = Object.values(setup.data.existing.product_landing)[0] as any

    // LIST
    const product_landing_ref01_ent = client.ProductLanding()
    const product_landing_ref01_match: any = {}

    const product_landing_ref01_list = (await product_landing_ref01_ent.list(product_landing_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const product_landing_ref01_data_up0: any = {}
    product_landing_ref01_data_up0.id = product_landing_ref01_data.id

    const product_landing_ref01_markdef_up0 = { name: 'landingStatus', value: 'Mark01-product_landing_ref01_' + setup.now }
    ;(product_landing_ref01_data_up0 as any)[product_landing_ref01_markdef_up0.name] = product_landing_ref01_markdef_up0.value

    const product_landing_ref01_resdata_up0 = (await product_landing_ref01_ent.update(product_landing_ref01_data_up0)).data()
    assert(product_landing_ref01_resdata_up0.id === product_landing_ref01_data_up0.id)

    assert((product_landing_ref01_resdata_up0 as any)[product_landing_ref01_markdef_up0.name] === product_landing_ref01_markdef_up0.value)


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
      '../../../../.sdk/test/entity/product_landing/ProductLandingTestData.json')

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
    ['product_landing01','product_landing02','product_landing03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CRACKED_API_REFERENCE_TEST_PRODUCT_LANDING_ENTID': idmap,
    'CRACKED_API_REFERENCE_TEST_LIVE': 'FALSE',
    'CRACKED_API_REFERENCE_TEST_EXPLAIN': 'FALSE',
    'CRACKED_API_REFERENCE_APIKEY': '',
    'CRACKED_API_REFERENCE_SERVER_BASE': "",
  })

  idmap = env['CRACKED_API_REFERENCE_TEST_PRODUCT_LANDING_ENTID']

  const live = 'TRUE' === env.CRACKED_API_REFERENCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CRACKED_API_REFERENCE_TEST_PRODUCT_LANDING_ENTID']
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
  
