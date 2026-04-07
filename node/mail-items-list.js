const { BASE_URL, API_KEY } = (() => {
  const BASE_URL = process.env.PSM_BASE_URL || "https://api.postscanmail.com/api/account-docs/v2";
  const API_KEY = process.env.PSM_API_KEY || "YOUR_API_KEY";
  return { BASE_URL, API_KEY };
})();

async function main() {
  const url = new URL(`${BASE_URL}/items`);
  url.searchParams.set("sort_order", "desc");
  url.searchParams.set("page", "1");

  const res = await fetch(url.toString(), {
    method: "GET",
    headers: { "x-api-key": API_KEY, "Content-Type": "application/json" },
  });

  const text = await res.text();
  if (!res.ok) {
    console.error(`Request failed: ${res.status}\n${text}`);
    process.exit(1);
  }

  console.log("Mail items fetched successfully.");
  console.log(text);
}

main().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
