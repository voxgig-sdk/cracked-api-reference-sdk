# Slide entity test

import json
import os
import time

import pytest

from crackedapireference_sdk.utility.voxgig_struct import voxgig_struct as vs
from crackedapireference_sdk import CrackedApiReferenceSDK
from crackedapireference_sdk.core import helpers
from crackedapireference_sdk.config import shared_config
from crackedapireference_sdk.feature.base_feature import CrackedApiReferenceBaseFeature

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner



# main.kit.test.live.strict is true (the default is true): a live
# request that fails, or a live test missing an input it needs,
# fails the test.
# An account with no record for a test to read skips it either way.
LIVE_STRICT = True


class TestSlideEntity:

    def test_should_create_instance(self):
        testsdk = CrackedApiReferenceSDK.test(None, None)
        ent = testsdk.Slide(None)
        assert ent is not None

    def test_should_refuse_an_invalid_request(self):
        if "validate" not in (shared_config().get("feature") or {}):
            pytest.skip("feature not present in this SDK: validate")
        client = CrackedApiReferenceSDK.test(
            None, {"feature": {"validate": {"active": True}}})
        with pytest.raises(Exception) as err:
            client.Slide(None).create({"carousel_id": 1, "slide_index": 1}, None)
        assert "validate_failed" == getattr(err.value, "code", None)

    def test_should_run_basic_flow(self):
        setup = _slide_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "update"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "slide." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        if setup["live"]:
            for _live_key in ["carousel01", "slide_index01"]:
                if setup.get("synthetic_only") or setup["idmap"].get(_live_key) is None:
                    runner.live_miss(LIVE_STRICT, f"Live entity test blocked: needs {_live_key} via CRACKED_API_REFERENCE_TEST_SLIDE_ENTID")
        client = setup["client"]

        # CREATE
        slide_ref01_ent = client.Slide(None)
        slide_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.slide"), "slide_ref01"))
        slide_ref01_data["carousel_id"] = setup["idmap"]["carousel01"]
        slide_ref01_data["slide_index"] = setup["idmap"]["slide_index01"]

        slide_ref01_data = helpers.to_map(runner.entity_data(slide_ref01_ent.create(slide_ref01_data, None)))
        assert slide_ref01_data is not None
        assert slide_ref01_data["id"] is not None

        # UPDATE
        slide_ref01_data_up0_up = {
            "id": slide_ref01_data["id"],
            "carousel_id": setup["idmap"]["carousel_id"],
        }

        slide_ref01_resdata_up0 = helpers.to_map(runner.entity_data(slide_ref01_ent.update(slide_ref01_data_up0_up, None)))
        assert slide_ref01_resdata_up0 is not None
        assert slide_ref01_resdata_up0["id"] == slide_ref01_data_up0_up["id"]



def _slide_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/slide/SlideTestData.json")
    with open(entity_data_file, "r", encoding="utf-8") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = CrackedApiReferenceSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["slide01", "slide02", "slide03", "carousel01", "carousel02", "carousel03", "slide_index01"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Whether *_ENTID supplied the idmap, read before env_override consumes
    # it: without it, the ids a live flow binds are the fixture's synthetic ones.
    _entid_env_raw = os.environ.get(
        "CRACKED_API_REFERENCE_TEST_SLIDE_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "CRACKED_API_REFERENCE_TEST_SLIDE_ENTID": idmap,
        "CRACKED_API_REFERENCE_TEST_LIVE": "FALSE",
        "CRACKED_API_REFERENCE_TEST_EXPLAIN": "FALSE",
        "CRACKED_API_REFERENCE_APIKEY": "",
        "CRACKED_API_REFERENCE_SERVER_BASE": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("CRACKED_API_REFERENCE_TEST_SLIDE_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("carousel_id") is None:
        idmap_resolved["carousel_id"] = idmap_resolved.get("carousel01")

    if env.get("CRACKED_API_REFERENCE_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("CRACKED_API_REFERENCE_APIKEY"),
                "server": {
                    "base": env.get("CRACKED_API_REFERENCE_SERVER_BASE"),
                },
            },
            extra or {},
        ])
        client = CrackedApiReferenceSDK(helpers.to_map(merged_opts))

    _live = env.get("CRACKED_API_REFERENCE_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("CRACKED_API_REFERENCE_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
