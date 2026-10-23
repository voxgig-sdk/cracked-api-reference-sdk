# CrackedApiReference SDK exists test

require "minitest/autorun"
require_relative "../CrackedApiReference_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = CrackedApiReferenceSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
