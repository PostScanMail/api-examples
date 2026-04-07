import requests
from _common import BASE_URL, headers

def main():
    url = f"{BASE_URL}/items"
    params = {"sort_order": "desc", "page": 1}
    r = requests.get(url, headers=headers(), params=params, timeout=30)

    if not r.ok:
        raise SystemExit(f"Request failed: {r.status_code}\n{r.text}")

    print("Mail items fetched successfully.")
    print(r.text)

if __name__ == "__main__":
    main()
