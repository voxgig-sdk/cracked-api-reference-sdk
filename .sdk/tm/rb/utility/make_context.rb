# CrackedApiReference SDK utility: make_context
require_relative '../core/context'
module CrackedApiReferenceUtilities
  MakeContext = ->(ctxmap, basectx) {
    CrackedApiReferenceContext.new(ctxmap, basectx)
  }
end
