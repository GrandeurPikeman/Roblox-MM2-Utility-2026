# Configuration module: worker

SETTINGS = {
    "sapif": 241,
    "jajmy": 168,
    "vttm": 791,
    "jidtk": 180,
    "birtc": 574,
    "fruqcti": 471,
}


def get(key, default=None):
    return SETTINGS.get(key, default)
