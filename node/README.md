# Node.js Examples

## Requirements
- Node.js 18+ (built-in `fetch`)

## Setup
```bash
export PSM_BASE_URL="https://api.postscanmail.com/api/account-docs/v2"
export PSM_API_KEY="YOUR_API_KEY"
```

Some item action endpoints also require:
```bash
export ADDRESS_ID="ADDRESS_ID"
export MAIL_IDS="MAIL_ID_1,MAIL_ID_2"
```

## Run
```bash
node mail-items-list.js
node automation-status.js
node automation-toggle.js auto_scan 1
node open-items.js
node cancel-open-items.js
```

## Support
Email: **api@postscanmail.com**
