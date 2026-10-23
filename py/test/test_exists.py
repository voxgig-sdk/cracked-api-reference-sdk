# CrackedApiReference SDK exists test

import pytest
from crackedapireference_sdk import CrackedApiReferenceSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CrackedApiReferenceSDK.test(None, None)
        assert testsdk is not None
