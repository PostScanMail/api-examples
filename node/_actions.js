function getMailIds() {
  const raw = process.env.MAIL_IDS || "MAIL_ID_1,MAIL_ID_2";
  const ids = raw.split(",").map(s => s.trim()).filter(Boolean);
  if (ids.length === 0 || ids[0].startsWith("MAIL_ID")) {
    console.error("Set MAIL_IDS env var to a comma-separated list of mail IDs (e.g., 123,456).");
    process.exit(1);
  }
  return ids;
}

module.exports = { getMailIds };
