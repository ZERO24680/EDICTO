## EDICTO — The official register of verified statements

EDICTO is a public, neutral platform that centralizes official communications from verified organizations (companies, institutions, NGOs). It provides transparent publishing, versioning, integrity proofs, powerful search, personalized monitoring, and open access for everyone.

### Vision
- Public-by-default register, not a social network
- Verified sources only (domain/DNS/legal checks)
- Tamper-resistant history (timestamps + SHA-256), readable diffs
- Powerful research and monitoring for journalists, researchers, and institutions

## Features (MVP)
- Public browsing: home, explore, statement detail with versions, organization pages, topics, search, RSS
- Organization verification: domain email + DNS TXT + optional legal docs; admin approval
- Publishing & versioning: Markdown + PDF attachments; SHA-256, timestamps, diffs, current version pin
- Integrity & proof: display hash, “Verify hash” button, version history
- Search: Postgres FTS + trigram; filters by org/topic/date; Pro unlocks advanced facets/exports
- Monitoring: follows, alerts (by org/keywords/conditions), in-app and email (digest/instant)
- Realtime: live updates (SSE) on feed
- API: public read endpoints; org write endpoint; webhooks (statement.published/updated)
- Billing: Free vs Pro vs Team (Stripe); plan-based limits
- Admin: verification queue, moderation, audit logs

## Tech Stack
- Next.js 14 (App Router, React Server Components) — TypeScript strict
- Tailwind CSS v4 — design tokens (Navy #0B1B2B, Ivory #F7F3EA, Gold #C6A15B)
- Prisma + PostgreSQL (Neon) — FTS (tsvector + triggers), trigram, JSONB metadata
- Auth: NextAuth (Email magic link + optional OAuth later); Dev credentials for local
- Emails: Resend (or SMTP); S3-compatible storage for PDFs/images
- Realtime: SSE; Cron: Vercel Cron/Node cron; Rate limit: Redis (future)

## App Structure (Routes)
- Public: `/`, `/statements`, `/statements/[org]/[slug]`, `/org/[slug]`, `/topics`, `/topics/[slug]`, `/search`, `/pricing`, `/about`, `/help`, `/brand`, `/rss`, `/legal/privacy`, `/legal/terms`, `/legal/cookies`, `/legal/imprint`
- User (auth): `/feed`, `/saved`, `/alerts`, `/settings`, `/billing`
- Organization (verified): `/org/[slug]/dashboard`, `/publish`, `/verification`, `/api`, `/webhooks`
- Admin: `/admin/verify`, `/admin/moderation`, `/admin/logs`
- Onboarding: `/onboarding`, `/onboarding/org`, `/onboarding/user`, `/onboarding/user/preferences`

## Data Model (Prisma overview)
- Users (plans, locale, sessions, accounts)
- Organizations (verified status, domains)
- Statements + StatementVersions (content, hashSha256, PDFs, attachments)
- Topics/Tags and many-to-many join tables
- Follows, SavedStatements, SavedSearch, AlertRules, Notifications
- ApiKeys, WebhookEndpoints, Integrations
- VerificationRequest (with reviewer), AuditLog, ViewLog, BillingSubscription

## Getting Started
### 1) Install
```bash
npm install
```

### 2) Environment
Create `.env` with at least:
```
DATABASE_URL=postgresql://...
NEXTAUTH_SECRET=change_me
NEXTAUTH_URL=http://localhost:3000
DEV_AUTH=1
```
Email (optional):
```
RESEND_API_KEY=...
RESEND_FROM="EDICTO <no-reply@yourdomain.com>"
```

### 3) Database
```bash
npx prisma generate
npx prisma db push
npm run db:seed
npm run db:fts
```

### 4) Run
```bash
npm run dev
```
Open `http://localhost:3000`.

## Authentication (Dev & Prod)
- Dev: go to `/login` and click “Developer sign in (no email)” (requires `DEV_AUTH=1`).
- Email magic link (no SMTP): link is logged to the dev console; you can also open `/api/dev/latest-token-link` to retrieve a clickable link.
- Production: set `RESEND_API_KEY` and `RESEND_FROM` (or SMTP). DKIM/brand alignment recommended, but not required to start.

## API (MVP)
- Public read:
  - `GET /api/public/statements?query=&org=&topic=&from=&to=&page=`
  - `GET /api/public/orgs`, `GET /api/public/topics`
  - `GET /api/public/statements/by-slug?org=&slug=`
- RSS:
  - `/rss/org/[slug].xml`, `/rss/topic/[slug].xml`, `/rss/search/[id].xml`
- Org write (verified):
  - `POST /api/org/publish` — create statement + v1 (hash, timestamps, notify)

## Scripts
- `dev` — start Next.js
- `db:push` — apply Prisma schema
- `db:seed` — seed demo data
- `db:fts` — install FTS triggers
- `lint`, `build`

## Deployment
- Frontend: Vercel (recommended)
- Database: Neon (Postgres)
- Storage: S3-compatible provider (R2/MinIO)
- Emails: Resend/SMTP
- Billing: Stripe (Pro/Team), with webhooks

## Roadmap
- AI summaries & translation on publish (worker)
- Advanced Pro search facets and exports
- SSE feed for followed orgs
- Admin tooling: verification queue, moderation actions
- API docs (OpenAPI) and /api/docs

## Contributing & License
- See CI workflow in `.github/workflows/ci.yml`; PRs welcome via issues and templates.
- License: MIT (see `LICENSE`).
