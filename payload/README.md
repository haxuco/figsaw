# Figsaw · Payload backend

This is a complete Next.js/Payload application around the existing static game. The game, worldwide Top 10, LinkedIn connection/post preview, and private analytics use **one origin** and `/api/figsaw/*`. There are no Supabase calls or keys in the active browser code. The previous implementation is archived in `legacy/supabase` for data export and rollback only.

**Figma Make handoff:** read [`../FIGMA_MAKE_HANDOFF.md`](../FIGMA_MAKE_HANDOFF.md). This repository does not provision Figma hosting. Figma currently documents that GitHub imports/local workflows are unavailable for Payload-backed Make apps. If Make cannot import the backend, create its native backend first and reuse these collections/endpoints with its generated infrastructure. Do not replace a generated hosted database adapter with the local SQLite default.

## Run locally

Use Node **24.22.1+** (or 22.23.4+) as required by the pinned Payload release.

```sh
# From the repository root
npm ci
npm --prefix payload ci
cp payload/.env.example payload/.env
# Fill PAYLOAD_SECRET with at least 32 cryptographically random characters.
# APP_ORIGIN must exactly match the browser origin, including the development port.
npm run dev:payload
```

Open `http://localhost:3000`. The game is copied to `payload/public`; do not edit that generated directory. Game sources remain in `dist/`. Native game code stays outside React, so the migration does not add a React render loop to the 3D scene.

A standalone static preview can use `FIGSAW_BACKEND=local npm run build`. It uses clearly labeled device-local scores, disables LinkedIn and telemetry, and is not the production backend.

## Production configuration

Set secrets in the host's server-side secret manager, never in the game bundle, Make prompts, `NEXT_PUBLIC_*`, or GitHub:

| Setting | Purpose |
| --- | --- |
| `PAYLOAD_SECRET` | Long random server secret; also encrypts LinkedIn tokens at rest. Rotating it invalidates those sessions. |
| `APP_ORIGIN` | `https://figsaw.figma.site` for the official game. Use a different value for a separate staging deployment. |
| `DATABASE_URI`, `DATABASE_AUTH_TOKEN` | Durable SQLite/libSQL database for the included adapter. Local disk requires a persistent volume; ephemeral serverless disk is unsuitable. Keep Make's own generated connection/adapter when it provisions the native service. |
| `OWNER_EMAIL` | The owner's private analytics email. Do not put the actual address in public source. |
| `OWNER_INITIAL_PASSWORD` | One-time strong CMS password used by the bootstrap command. Remove it immediately afterward. |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `EMAIL_FROM_ADDRESS` | Verified email delivery for owner codes and CMS password resets. Missing email configuration throws; codes are never logged. |
| `LINKEDIN_CLIENT_ID`, `LINKEDIN_CLIENT_SECRET` | Existing LinkedIn app credentials, stored only on the server. |
| `LINKEDIN_API_VERSION` | Approved current LinkedIn REST API version; pinned to `202610` in the example. |
| `NAME_REVIEW_URL`, `NAME_REVIEW_TOKEN` | Semantic alias moderation service, required for typed names. See below. |
| `TRUSTED_IP_HEADER` | Host-overwritten client-IP header for abuse quotas. Set only after verifying the hosting proxy strips incoming spoofed values. Without it, all visitors share conservative limits. |
| `PROMO_VIDEO_URL` | The game's fixed promo video URL; defaults to the same-origin asset. |

Build, migrate the new database, provision the owner, and start:

```sh
npm run build:payload
cd payload
NODE_ENV=production npm run migrate
NODE_ENV=production npm run bootstrap-owner
# Remove OWNER_INITIAL_PASSWORD from secrets now.
npm start
```

Never run migration reset/fresh against live data. SQLite migrations are included. If Make generates a different adapter, keep its migration mechanism and generate/test its equivalent schema rather than executing SQLite SQL there.

`/admin` is the Payload CMS. Public first-admin signup is blocked, including Payload's special first-user route. Only the server bootstrap can create the configured owner. `/insights` is the existing graph dashboard with email-code sign-in. Changing `OWNER_EMAIL` invalidates analytics owner sessions. Codes expire after 10 minutes, allow five verification attempts, and are session-bound and single-use. Analytics access is checked again on every request.

Schedule `NODE_ENV=production npm run cleanup` daily. It removes expired sessions/codes/quotas and telemetry older than 91 days. Post reservation tombstones remain to prevent duplicate publishing. Back up the database before any migration.

## LinkedIn setup and consent

Register exactly `https://figsaw.figma.site/api/figsaw/linkedin/callback` in the LinkedIn app's OAuth redirect list. If staging uses this backend, register its own corresponding callback separately. The former Supabase callback is not used by this app. Required product scopes remain `openid profile email w_member_social`.

OAuth uses a one-time, session-bound state and PKCE. Code exchange, profile verification and encrypted provider tokens remain on the server. The browser receives an HttpOnly, SameSite session cookie and a display name, never a LinkedIn access token. Signing in never publishes a name or a post. A verified profile name is accepted only after exact-name display consent; a profile-name change requires another preview. Publishing still requires the existing post preview and explicit confirmation, with fixed copy and a video/graphic attachment. Database reservations prevent duplicate requests; uncertain publishes are not retried automatically.

**Do not test-post to the owner's account.** Automated tests mock every LinkedIn call. A real OAuth round trip and email delivery still need verification after credentials/callbacks are configured.

## Name moderation and score integrity

Typed aliases pass the same browser/server profanity, sexual-language, brand-reference and negative-language policy as before. Then the server requires a semantic reviewer response:

```json
{"policy":"figsaw-friendly-names-v1","allow":true}
```

The HTTPS reviewer receives `{name, policy}` with a server-only bearer token. Missing configuration, errors, malformed replies and rejections prevent storage. Never replace it with an always-allow endpoint. Verified LinkedIn names follow the user's separate approved-name consent policy; a client flag cannot impersonate that verification.

Only qualifying two-survivor runs enter Top 10. Time remaining determines rank; equal times retain the earliest submission. Repeated run IDs cannot rename or rescore a run. Kerning completion stays a vanity metric. Scores are still browser-reported game outcomes: authentication and rate limits do **not** make them cheat-proof. A server-authoritative game is a separate project.

## Analytics and privacy

Anonymous, ephemeral visits and attempts record bounded counters, known milestones and fixed failure categories. Unknown fields are discarded. No player names, emails, typed text, referrer or raw IP is written to telemetry. DNT/GPC, local development and dashboard views are excluded. Security rate-limit counters use daily HMACs separately from analytics. Writes are transactional; old packets cannot undo an outcome. The owner dashboard includes bounce rate, time spent, progress, devices and common losses. Large ranges are capped at 20,000 records with a visible warning; use a shorter range for complete totals.

## Existing Supabase data

Do not delete the old project until the new backend works and its data is backed up. Nothing in this migration deletes or remotely changes that project. The live staging site continues using its last deployed version until separately published.

1. Export with [`migration/export-supabase.sql`](migration/export-supabase.sql). Store the single JSON value in a private local file outside Git. Never export auth users, secrets, LinkedIn tokens, or passwords.
2. Configure Payload and review the import with `npm run import:legacy -- /private/path/export.json` from `payload/`.
3. Add `--apply` to write the validated records. Re-running does not duplicate records. Typed names are re-reviewed; rejected names are never imported. LinkedIn names require stored consent.
4. Verify record counts, Top 10, owner-only dashboard access and new incoming analytics before retiring Supabase. Historical visits are not reopened; current sessions/codes/provider tokens are not migrated.

## Checks

```sh
npm test                        # existing game and browser integration checks
npm --prefix payload test       # real disposable SQLite/Payload, mocked external services
npm --prefix payload run typecheck
npm run build:payload
```

The tests must never use production credentials or a production database. Tests create and destroy a temporary database. Publishing, email and moderation requests are mocked.

### Dependency audit

The production dependency audit after patch overrides reports no critical, high, or moderate findings. Payload still brings the low-severity `deepmerge` prototype-poisoning advisory (GHSA-gcqx-w48m-w2h4), propagated through eight dependency entries; upstream has no patched release yet. Arbitrary public collection writes and GraphQL are disabled. Recheck the audit and remove overrides when upstream releases include the fixes.
