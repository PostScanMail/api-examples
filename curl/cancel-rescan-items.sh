#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${PSM_BASE_URL:-https://api.postscanmail.com/api/account-docs/v2}"
API_KEY="${PSM_API_KEY:-YOUR_API_KEY}"
ADDRESS_ID="${ADDRESS_ID:-ADDRESS_ID}"
MAIL_IDS="${MAIL_IDS:-MAIL_ID_1,MAIL_ID_2}"

if [[ "$ADDRESS_ID" == "ADDRESS_ID" ]]; then
  echo "Set ADDRESS_ID env var (e.g., export ADDRESS_ID=12345)" >&2
  exit 1
fi

# Convert comma-separated MAIL_IDS into JSON array
IFS=',' read -r -a IDS <<< "$MAIL_IDS"
JSON_IDS=$(printf '"%s",' "${IDS[@]// /}")
JSON_IDS="[${JSON_IDS%,}]"

URL="$BASE_URL/addresses/$ADDRESS_ID/items/actions/rescan/cancel"
PAYLOAD="{\"mail_ids\": $JSON_IDS}"

curl -sS -X POST "$URL" \
  -H "x-api-key: $API_KEY" \
  -H "Content-Type: application/json" \
  -d "$PAYLOAD"
