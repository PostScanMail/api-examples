#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${PSM_BASE_URL:-https://api.postscanmail.com/api/account-docs/v2}"
API_KEY="${PSM_API_KEY:-YOUR_API_KEY}"

URL="$BASE_URL/user-defined-rules/system-user-defined-rules?sort_order=desc&page=1"
PAYLOAD=""

curl -sS -X GET "$URL" \
  -H "x-api-key: $API_KEY" \
  -H "Content-Type: application/json" \

