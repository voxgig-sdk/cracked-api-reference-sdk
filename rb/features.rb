# CrackedApiReference SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module CrackedApiReferenceFeatures
  def self.make_feature(name)
    case name
    when "base"
      CrackedApiReferenceBaseFeature.new
    when "ratelimit"
      CrackedApiReferenceRatelimitFeature.new
    when "retry"
      CrackedApiReferenceRetryFeature.new
    when "test"
      CrackedApiReferenceTestFeature.new
    when "timeout"
      CrackedApiReferenceTimeoutFeature.new
    else
      CrackedApiReferenceBaseFeature.new
    end
  end
end
