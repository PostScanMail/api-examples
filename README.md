# PostScan Mail API Examples (Public)

Minimal examples showing how to call the **PostScan Mail Developer API** using:
- Node.js (JavaScript)
- Python
- cURL

> These are examples only (not product code). They use placeholders and environment variables.

## Important: Access Requirement
To use these APIs, you must have an **active PostScan Mail account** and be **registered/authorized** to access the Developer API.  
For onboarding/support: **api@postscanmail.com**

---

## Base URL
Default base URL used by the examples:

`https://api.postscanmail.com/api/account-docs/v2`

## Authentication
All requests require an API key via this header:

`x-api-key: YOUR_API_KEY`

---

## Setup

Set environment variables:

```bash
export PSM_BASE_URL="https://api.postscanmail.com/api/account-docs/v2"
export PSM_API_KEY="YOUR_API_KEY"
```

Some endpoints require:
- `ADDRESS_ID` (the PostScan Mail address context)
- `MAIL_ID` or a list of `MAIL_IDS`

---

## Examples Included

### Core
- **Mail Items**
  - `GET /items`
- **Automation (System User-Defined Rules)**
  - `GET /user-defined-rules/system-user-defined-rules`
  - `PUT /user-defined-rules/update-system-user-defined-rule`

### Item Actions (Address-scoped)
All item actions are scoped to:
`/addresses/{address_id}/items/actions/...`

Actions covered by examples:
- Open items + cancel open
- Discard items + cancel discard
- Rescan items + cancel rescan
- Shred items + cancel shred

---

## Folder Structure

- `node/` — Node.js examples
- `python/` — Python examples
- `curl/` — cURL scripts

---

## How to Run

### Node (Node.js 18+)
```bash
cd node
node mail-items-list.js
```

### Python (Python 3.9+)
```bash
cd python
pip install -r requirements.txt  # if present, otherwise: pip install requests
python mail_items_list.py
```

### cURL
```bash
cd curl
bash mail-items-list.sh
```

---

## Notes
- Do not commit real API keys, customer data, or real IDs into this repository.
- Keep logs minimal (avoid printing sensitive payloads).

---

## Support
Email: **api@postscanmail.com**
