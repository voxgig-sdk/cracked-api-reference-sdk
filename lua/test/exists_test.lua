-- CrackedApiReference SDK exists test

local sdk = require("cracked-api-reference_sdk")

describe("CrackedApiReferenceSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
