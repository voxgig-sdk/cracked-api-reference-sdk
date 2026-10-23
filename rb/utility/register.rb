# CrackedApiReference SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

CrackedApiReferenceUtility.registrar = ->(u) {
  u.clean = CrackedApiReferenceUtilities::Clean
  u.clean_add = CrackedApiReferenceUtilities::CleanAdd
  u.clean_explain = CrackedApiReferenceUtilities::CleanExplain
  u.done = CrackedApiReferenceUtilities::Done
  u.make_error = CrackedApiReferenceUtilities::MakeError
  u.feature_add = CrackedApiReferenceUtilities::FeatureAdd
  u.feature_hook = CrackedApiReferenceUtilities::FeatureHook
  u.feature_init = CrackedApiReferenceUtilities::FeatureInit
  u.fetcher = CrackedApiReferenceUtilities::Fetcher
  u.make_fetch_def = CrackedApiReferenceUtilities::MakeFetchDef
  u.make_context = CrackedApiReferenceUtilities::MakeContext
  u.make_options = CrackedApiReferenceUtilities::MakeOptions
  u.make_request = CrackedApiReferenceUtilities::MakeRequest
  u.make_response = CrackedApiReferenceUtilities::MakeResponse
  u.make_result = CrackedApiReferenceUtilities::MakeResult
  u.make_point = CrackedApiReferenceUtilities::MakePoint
  u.make_spec = CrackedApiReferenceUtilities::MakeSpec
  u.make_url = CrackedApiReferenceUtilities::MakeUrl
  u.param = CrackedApiReferenceUtilities::Param
  u.prepare_auth = CrackedApiReferenceUtilities::PrepareAuth
  u.prepare_body = CrackedApiReferenceUtilities::PrepareBody
  u.prepare_headers = CrackedApiReferenceUtilities::PrepareHeaders
  u.prepare_method = CrackedApiReferenceUtilities::PrepareMethod
  u.prepare_params = CrackedApiReferenceUtilities::PrepareParams
  u.prepare_path = CrackedApiReferenceUtilities::PreparePath
  u.prepare_query = CrackedApiReferenceUtilities::PrepareQuery
  u.graphql_body = CrackedApiReferenceUtilities::GraphqlBody
  u.graphql_errors = CrackedApiReferenceUtilities::GraphqlErrors
  u.result_basic = CrackedApiReferenceUtilities::ResultBasic
  u.result_body = CrackedApiReferenceUtilities::ResultBody
  u.result_headers = CrackedApiReferenceUtilities::ResultHeaders
  u.transform_request = CrackedApiReferenceUtilities::TransformRequest
  u.transform_response = CrackedApiReferenceUtilities::TransformResponse
}
