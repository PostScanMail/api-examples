# PostScan Mail Virtual Mailbox API – Code Examples

Minimal examples demonstrating how to use the **PostScan Mail Virtual Mailbox API and Mail Scanning API** using:

- Node.js (JavaScript)
- Python
- cURL

These examples show how to retrieve, manage, automate, and process physical mail digitally using the PostScan Mail Developer API.

> These examples are for developer enablement only and are not production code.  
> Use environment variables and placeholder values only. Never commit real API keys or customer data.

---

## 🚀 What You Can Do with the API

- Retrieve mail items and scanned documents
- Read AI-generated mail summaries when available
- View and manage account automation settings
- Enable or disable Auto Scan, Auto Shred, Auto Discard, and Auto AI Summary
- Perform mail item actions such as:
  - Open
  - Cancel Open
  - Discard
  - Cancel Discard
  - Rescan
  - Cancel Rescan
  - Shred
  - Cancel Shred
- Integrate PostScan Mail data and workflows into your applications, CRM, or internal systems

---

## 🔐 Access Requirement

To use these APIs, you must have:

- An active PostScan Mail account
- Access to the Developer API

If you do not yet have access, requests will fail even if the endpoints are reachable.

📧 Contact: **api@postscanmail.com** for onboarding and API support.

---

## 🌐 Base URL

`https://api.postscanmail.com/api/account-docs/v2`

---

## 🔑 Authentication

All requests require an API key using the following header:

```text
x-api-key: YOUR_API_KEY
```

---

## ⚙️ Setup

Set the common environment variables:

```bash
export PSM_BASE_URL="https://api.postscanmail.com/api/account-docs/v2"
export PSM_API_KEY="YOUR_API_KEY"
```

Mail Item Action examples also require:

```bash
export ADDRESS_ID="YOUR_ADDRESS_ID"
export MAIL_IDS="MAIL_ID_1,MAIL_ID_2"
```

> Replace all placeholder values with IDs from your own authorized PostScan Mail account.

---

## 📁 Repository Structure

```text
api-examples/
├── node/
│   ├── mail-items-list.js
│   ├── automation-status.js
│   ├── automation-toggle.js
│   ├── open-items.js
│   ├── cancel-open-items.js
│   ├── discard-items.js
│   ├── cancel-discard-items.js
│   ├── rescan-items.js
│   ├── cancel-rescan-items.js
│   ├── shred-items.js
│   └── cancel-shred-items.js
│
├── python/
│   ├── mail_items_list.py
│   ├── automation_status.py
│   ├── automation_toggle.py
│   ├── open_items.py
│   ├── cancel_open_items.py
│   ├── discard_items.py
│   ├── cancel_discard_items.py
│   ├── rescan_items.py
│   ├── cancel_rescan_items.py
│   ├── shred_items.py
│   └── cancel_shred_items.py
│
└── curl/
    ├── mail-items-list.sh
    ├── automation-status.sh
    ├── automation-toggle.sh
    ├── open-items.sh
    ├── cancel-open-items.sh
    ├── discard-items.sh
    ├── cancel-discard-items.sh
    ├── rescan-items.sh
    ├── cancel-rescan-items.sh
    ├── shred-items.sh
    └── cancel-shred-items.sh
```

---

## 📬 Core Examples

### Mail Items

Retrieve mail items received in the account.

`GET /items`

The response may include:

- `mail_id`
- `sender_name`
- `address_id`
- `cover_image`
- `pdf_content`
- mail item metadata
- `ai_summary`
- `ai_summary_version`

When an AI summary is not available:

```json
{
  "ai_summary": [],
  "ai_summary_version": null
}
```

### Example files

- Node.js: `node/mail-items-list.js`
- Python: `python/mail_items_list.py`
- cURL: `curl/mail-items-list.sh`

---

## 🤖 AI Summary Support

AI-generated mail summaries are returned through the existing:

`GET /items`

When available, the response can include:

```json
{
  "ai_summary": [
    "Sender: ...",
    "Subject: ...",
    "Text Summary:",
    "...",
    "Key Insights:",
    "...",
    "Required Customer Actions:",
    "..."
  ],
  "ai_summary_version": "Version 2"
}
```

No separate AI Summary endpoint is required to retrieve this data.

---

## ⚡ Automation Examples

### Automation Status

Retrieve the current system user-defined automation settings.

`GET /user-defined-rules/system-user-defined-rules`

Supported automation fields include:

- `auto_scan`
- `auto_shred`
- `auto_discard`
- `auto_ai_summary`

Example files:

- Node.js: `node/automation-status.js`
- Python: `python/automation_status.py`
- cURL: `curl/automation-status.sh`

### Automation Toggle

Enable or disable a supported automation rule.

`PUT /user-defined-rules/update-system-user-defined-rule`

Supported `automation_name` values include:

- `auto_scan`
- `auto_shred`
- `auto_discard`
- `auto_ai_summary`

Example request body:

```json
{
  "automation_name": "auto_ai_summary",
  "is_active": 1,
  "sort_order": "desc"
}
```

Example files:

- Node.js: `node/automation-toggle.js`
- Python: `python/automation_toggle.py`
- cURL: `curl/automation-toggle.sh`

---

## 📮 Mail Item Action Examples

Mail Item Actions are scoped to a mailing address:

`/addresses/{address_id}/items/actions/...`

### Open Items

`POST /addresses/{address_id}/items/actions/open`

Cancel:

`POST /addresses/{address_id}/items/actions/open/cancel`

Example files:

- Node.js: `open-items.js`, `cancel-open-items.js`
- Python: `open_items.py`, `cancel_open_items.py`
- cURL: `open-items.sh`, `cancel-open-items.sh`

### Discard Items

`POST /addresses/{address_id}/items/actions/discard`

Cancel:

`POST /addresses/{address_id}/items/actions/discard/cancel`

Example files:

- Node.js: `discard-items.js`, `cancel-discard-items.js`
- Python: `discard_items.py`, `cancel_discard_items.py`
- cURL: `discard-items.sh`, `cancel-discard-items.sh`

### Rescan Items

`POST /addresses/{address_id}/items/actions/rescan`

Cancel:

`POST /addresses/{address_id}/items/actions/rescan/cancel`

Example files:

- Node.js: `rescan-items.js`, `cancel-rescan-items.js`
- Python: `rescan_items.py`, `cancel_rescan_items.py`
- cURL: `rescan-items.sh`, `cancel-rescan-items.sh`

### Shred Items

`POST /addresses/{address_id}/items/actions/shred`

Cancel:

`POST /addresses/{address_id}/items/actions/shred/cancel`

Example files:

- Node.js: `shred-items.js`, `cancel-shred-items.js`
- Python: `shred_items.py`, `cancel_shred_items.py`
- cURL: `shred-items.sh`, `cancel-shred-items.sh`

---

## ▶️ Running the Examples

### Node.js

Requires Node.js 18+.

```bash
cd node
node mail-items-list.js
```

Example Mail Item Action:

```bash
export ADDRESS_ID="YOUR_ADDRESS_ID"
export MAIL_IDS="MAIL_ID_1,MAIL_ID_2"

node open-items.js
```

### Python

Install dependencies:

```bash
cd python
pip install -r requirements.txt
```

Run:

```bash
python mail_items_list.py
```

Example Mail Item Action:

```bash
export ADDRESS_ID="YOUR_ADDRESS_ID"
export MAIL_IDS="MAIL_ID_1,MAIL_ID_2"

python open_items.py
```

### cURL

```bash
cd curl
bash mail-items-list.sh
```

Example Mail Item Action:

```bash
export ADDRESS_ID="YOUR_ADDRESS_ID"
export MAIL_IDS="MAIL_ID_1,MAIL_ID_2"

bash open-items.sh
```

---

## ⚠️ Error Handling

The API may return structured errors such as:

```json
{
  "code": 433,
  "message": "You don't have access to the API specified."
}
```

Your integration should check both:

- HTTP status
- API response `code` and `message`

Mail Item Actions can also fail because of:

- Invalid or unauthorized address IDs
- Mail items that do not belong to the specified address
- Unsupported item types or statuses
- Verification requirements
- Account or subscription restrictions
- Invalid action-specific parameters

Refer to the API documentation repository for the full error reference.

---

## 🔄 Versioning

GitHub Releases are used to track updates to these examples.

- **v1.0.0** — Initial examples for Mail Items and Automation
- **v1.1.0** — Added Mail Item Action examples
- **v1.2.0** — Updated examples and documentation for AI Summary and Auto AI Summary support

Use the latest release for the most current examples.

---

## ⚠️ Security Notes

- Never commit a real API key.
- Never commit real customer data.
- Do not publish real mail IDs or address IDs.
- Use environment variables for credentials and account-specific values.
- Do not expose API keys in logs or public error reports.
- API access is restricted to registered and authorized PostScan Mail accounts.

---

## 💬 Support

For Developer API onboarding, access questions, or integration support:

📧 **api@postscanmail.com**
