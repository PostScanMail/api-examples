import os
import sys
import json
import requests

BASE_URL = os.getenv("PSM_BASE_URL", "https://api.postscanmail.com/api/account-docs/v2")
API_KEY = os.getenv("PSM_API_KEY", "YOUR_API_KEY")

def fail(msg: str) -> None:
    print(msg, file=sys.stderr)
    sys.exit(1)

def headers():
    return {"x-api-key": API_KEY, "Content-Type": "application/json"}

def get_address_id():
    address_id = os.getenv("ADDRESS_ID", "ADDRESS_ID")
    if not address_id or address_id == "ADDRESS_ID":
        fail("Set ADDRESS_ID env var (e.g., export ADDRESS_ID=12345).")
    return address_id

def get_mail_ids():
    raw = os.getenv("MAIL_IDS", "MAIL_ID_1,MAIL_ID_2")
    ids = [x.strip() for x in raw.split(",") if x.strip()]
    if not ids or ids[0].startswith("MAIL_ID"):
        fail("Set MAIL_IDS env var to comma-separated mail IDs (e.g., export MAIL_IDS=123,456).")
    return ids
