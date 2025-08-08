
# FAMILY — Production-ready landing

A Next.js 14 + Tailwind production-ready landing page scaffold for your AI family assistant.

## Quickstart

```bash
pnpm i # or npm i / yarn
pnpm dev
```

## Deploy

- Vercel: import repo and deploy.
- Set `NEXT_PUBLIC_BASE_URL` if you want absolute OG URLs.

## Swap email capture

- Replace `app/api/subscribe/route.ts` with your provider (Resend, Mailchimp, HubSpot).

## Notes

- Built on 2025-08-08.


## One-time setup (exact steps)

1. Create a new GitHub repo and push this code.
2. In Vercel, "New Project" → import the repo → Framework: Next.js → Deploy.
3. In Vercel Project → Settings → Domains → add your domain.
4. In your DNS, add the Vercel records Vercel shows (CNAME/A/ALIAS).
5. (Optional) In Vercel Project → Settings → Environment Variables, add:
   - `AIRTABLE_API_KEY`
   - `AIRTABLE_BASE_ID`
   - `AIRTABLE_TABLE` (default: signups)
   - `AIRTABLE_EMAIL_FIELD` (default: email)
   - `NEXT_PUBLIC_BASE_URL` (for OG)
6. (Optional CI) In GitHub repo → Settings → Secrets and variables → Actions → New repository secret:
   - `VERCEL_TOKEN` (from https://vercel.com/account/tokens)
   - `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` (from Vercel project settings)
   - Any env vars from step 5.
7. Commit & push → GitHub Actions will build and Vercel will deploy on every push to `main`.
