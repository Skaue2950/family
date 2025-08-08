
import { NextResponse } from "next/server";
import { writeFile, readFile } from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  const { email } = await request.json();
  if (!email || typeof email !== "string") {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
  const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
  const AIRTABLE_TABLE = process.env.AIRTABLE_TABLE || "signups";
  const AIRTABLE_EMAIL_FIELD = process.env.AIRTABLE_EMAIL_FIELD || "email";

  // If Airtable env vars present, write to Airtable
  if (AIRTABLE_API_KEY && AIRTABLE_BASE_ID) {
    try {
      const resp = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE)}`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${AIRTABLE_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ records: [{ fields: { [AIRTABLE_EMAIL_FIELD]: email } }] })
      });
      if (!resp.ok) {
        const text = await resp.text();
        return NextResponse.json({ ok: false, error: "Airtable error", detail: text }, { status: 500 });
      }
      return NextResponse.json({ ok: true, provider: "airtable" });
    } catch (e: any) {
      return NextResponse.json({ ok: false, error: e?.message || "Airtable failed" }, { status: 500 });
    }
  }

  // Fallback: file-based
  const dbPath = path.join(process.cwd(), "data", "subscribers.json");
  const dir = path.dirname(dbPath);
  await import("fs").then(fs => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    if (!fs.existsSync(dbPath)) fs.writeFileSync(dbPath, "[]");
  });
  const current = JSON.parse(await readFile(dbPath, "utf-8"));
  if (!current.includes(email)) current.push(email);
  await writeFile(dbPath, JSON.stringify(current, null, 2), "utf-8");
  return NextResponse.json({ ok: true, provider: "file" });
}
