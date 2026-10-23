# CrackedApiReference SDK utility: make_context

from crackedapireference_sdk.core.context import CrackedApiReferenceContext


def make_context_util(ctxmap, basectx):
    return CrackedApiReferenceContext(ctxmap, basectx)
