const BASE_URL = process.env.PSM_BASE_URL || "https://api.postscanmail.com/api/account-docs/v2";
const API_KEY = process.env.PSM_API_KEY || "YOUR_API_KEY";
const ADDRESS_ID = process.env.ADDRESS_ID || "ADDRESS_ID";
const { getMailIds } = require("./_actions");

// Usage: ADDRESS_ID=... MAIL_IDS=... node cancel-rescan-items.js
async function main() {
  if (!ADDRESS_ID || ADDRESS_ID === "ADDRESS_ID") {
    console.error("Set ADDRESS_ID env var (e.g., export ADDRESS_ID=12345).");
    process.exit(1);
  }

  const url = `${BASE_URL}/addresses/${ADDRESS_ID}/items/actions/rescan/cancel`;
  const payload = { mail_ids: getMailIds() };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "x-api-key": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const text = await res.text();
  if (!res.ok) {
    console.error(`Request failed: ${res.status}\n${text}`);
    process.exit(1);
  }

  console.log("Operation submitted successfully.");
  console.log(text);
}

main().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
