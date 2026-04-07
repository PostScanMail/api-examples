import json
import requests
from _common import BASE_URL, headers, get_address_id, get_mail_ids

def main():
    address_id = get_address_id()
    url = f"{BASE_URL}/addresses/{address_id}/items/actions/shred"
    payload = {"mail_ids": get_mail_ids()}

    r = requests.post(url, headers=headers(), data=json.dumps(payload), timeout=30)
    if not r.ok:
        raise SystemExit(f"Request failed: {r.status_code}\n{r.text}")

    print("Operation submitted successfully.")
    print(r.text)

if __name__ == "__main__":
    main()
