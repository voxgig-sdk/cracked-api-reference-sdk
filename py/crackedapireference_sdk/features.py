# CrackedApiReference SDK feature factory

from crackedapireference_sdk.feature.base_feature import CrackedApiReferenceBaseFeature
from crackedapireference_sdk.feature.ratelimit_feature import CrackedApiReferenceRatelimitFeature
from crackedapireference_sdk.feature.retry_feature import CrackedApiReferenceRetryFeature
from crackedapireference_sdk.feature.test_feature import CrackedApiReferenceTestFeature
from crackedapireference_sdk.feature.timeout_feature import CrackedApiReferenceTimeoutFeature


_FEATURES = {
    "base": lambda: CrackedApiReferenceBaseFeature(),
    "ratelimit": lambda: CrackedApiReferenceRatelimitFeature(),
    "retry": lambda: CrackedApiReferenceRetryFeature(),
    "test": lambda: CrackedApiReferenceTestFeature(),
    "timeout": lambda: CrackedApiReferenceTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
