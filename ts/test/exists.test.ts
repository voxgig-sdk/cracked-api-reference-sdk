
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CrackedApiReferenceSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CrackedApiReferenceSDK.test()
    equal(testsdk instanceof CrackedApiReferenceSDK, true,
      'CrackedApiReferenceSDK.test() must return a client synchronously')
  })

})
