# PostScan Mail Virtual Mailbox API – Code Examples

Minimal examples demonstrating how to use the **PostScan Mail Virtual Mailbox API and Mail Scanning API** using:

- Node.js (JavaScript)
- Python
- cURL

These examples show how to retrieve, manage, and automate physical mail digitally using the PostScan Mail Developer API.

> These are examples only (not production code). They use placeholders and environment variables.

---

## 🚀 What You Can Do with the API

- Retrieve scanned mail and document data  
- Automate mail handling workflows  
- Perform actions like open, rescan, shred, or discard mail  
- Integrate mail into your applications, CRM, or internal systems  

---

## 🔐 Access Requirement

To use these APIs, you must have:

- An active PostScan Mail account  
- Access to the Developer API  

If you do not yet have access, requests will fail even if endpoints are reachable.

📧 Contact: **api@postscanmail.com** for onboarding/support

---

## 🌐 Base URL

`https://api.postscanmail.com/api/account-docs/v2`

---

## 🔑 Authentication

All requests require an API key via this header:

`x-api-key: YOUR_API_KEY`

---

## ⚙️ Setup

Set environment variables:

```bash
export PSM_BASE_URL="https://api.postscanmail.com/api/account-docs/v2"
export PSM_API_KEY="YOUR_API_KEY"
