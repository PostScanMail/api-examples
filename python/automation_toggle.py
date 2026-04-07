import sys
import json
import requests
from _common import BASE_URL, headers

# Usage: python automation_toggle.py auto_scan 1
automation_name = sys.argv[1] if len(sys.argv) > 1 else "auto_scan"
is_active = int(sys.argv[2]) if len(sys.argv) > 2 else 1

def main():
    url = f"{BASE_URL}/user-defined-rules/update-system-user-defined-rule"
    payload = {"automation_name": automation_name, "is_active": is_active}
    r = requests.put(url, headers=headers(), data=json.dumps(payload), timeout=30)

    if not r.ok:
        raise SystemExit(f"Request failed: {r.status_code}\n{r.text}")

    print("Automation toggle updated successfully.")
    print(r.text)

if __name__ == "__main__":
    main()
