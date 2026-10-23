# CrackedApiReference SDK utility: prepare_body
require_relative 'media'
module CrackedApiReferenceUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return CrackedApiReferenceUtilities.raw_body(ctx.reqdata) if CrackedApiReferenceUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
