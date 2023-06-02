import json
import requests

MAX_SEND_COUNT = 100

if __name__ == 'main':
    url = "https://igor-egorov.dev.altkraft.com/ajax/campaign_save_v2"
    headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    data = {
        "id": 148,
        "name": "Regular wpa",
        "set_groups_id": [
            0
        ],
        "descr": "",
        "type": "regular",
        "subid": "",
        "data_type": "list",
        "data_id": 39,
        "channel": "push",
        "providers": [
            "google",
            "mozilla",
            "safari",
            "safari-native",
            "firefox-firebase",
            "chrome-firebase",
            "opera-firebase",
            "yandex-firebase",
            "samsung-firebase",
            "android-firebase",
            "ios-firebase",
            "ios-apns",
            "yandex-Appmetrica-device-id-ios",
            "yandex-Appmetrica-device-id-android",
            "yandex-Appmetrica-ios-ifa",
            "yandex-Appmetrica-google-aid",
            "yandex-Appmetrica-android-token",
            "yandex-Appmetrica-ios-token",
            "android-huawei",
            "ios-huawei"
        ],
        "channel_fields": {},
        "policy_id": 0,
        "content": [
            {
            "msg_id": 43
            }
        ],
        "is_active": True,
        "is_prior": False,
        "resource_id": 65,
        "regular_obj": {
            "limit": 0,
            "aglimit_count": 0,
            "aglimit_percent": 0
        },
        "broadcast_obj": None,
        "splittest_obj": None,
        "trigger_obj": None,
        "place_obj": None,
        "smart": {
            "sender_id": 0,
            "custom_trk_domain": [],
            "is_rand_inline": False,
            "is_random_trk_prefix": False,
            "is_trk_with_page": False,
            "is_disable_trk": False,
            "unconditional_sending": False,
            "skip_unique_checking": False,
            "blind_carbon_copy": [],
            "watcher_list_id": 0,
            "watcher_limit": 0
        },
        "ui_tags": [],
        "run_now": True,
        "start_at_type": "daily",
        "start_obj": {
            "mins": [
            47
            ],
            "hours": [
            18
            ],
            "mdays": [],
            "wdays": [],
            "months": [],
            "years": [],
            "wdayords": [],
            "tz": "",
            "profile": False,
            "losers": False,
            "finish_time": ""
        }
    }

    i: int = 0
    while i < MAX_SEND_COUNT:
        i+=1
        r = requests.post(url, data=json.dumps(data), headers=headers)