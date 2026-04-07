const BASE_URL = process.env.PSM_BASE_URL || "https://api.postscanmail.com/api/account-docs/v2";
const API_KEY = process.env.PSM_API_KEY || "YOUR_API_KEY";

function requireEnv(name, fallback) {
  const v = process.env[name] || fallback;
  if (!v || v.startsWith("YOUR_") || v === "ADDRESS_ID") {
    console.error(`Missing/placeholder env var: ${name}`);
    process.exit(1);
  }
  return v;
}
