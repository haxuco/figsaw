# Connect the Top 10 leaderboard

The game is still local-only until `dist/leaderboard-config.js` is configured.
The leaderboard remains unconnected. LinkedIn sharing uses the separate setup below.

## Prepared components

- `migrations/202610300001_leaderboard.sql`: scores, accepted-run deduplication, per-user submission limits, and transactional ranking. Only the server service role has access; RLS is enabled with no browser policies.
- `functions/leaderboard/`: public Top 10 reads and authenticated submissions. Supabase Auth verifies every submitted user token; client eligibility flags are not an authentication mechanism.
- `functions/_shared/display-name.js`: exact copy of the browser policy, refreshed by `npm run build` and checked by tests.
- `dist/leaderboard-remote.js`: lazy cloud adapter with anonymous Auth, timeouts and error handling. No Supabase JavaScript SDK or extra startup request. Never silently falls back to local storage after a cloud failure.

## Setup when the Supabase project is available

1. Link your own Supabase project with the official CLI, then run `supabase db push` to apply the migration. This is a new schema; review it before applying to an existing database.
2. Enable anonymous sign-ins in Supabase Auth. Anonymous user tokens stay in page memory and are not copied into URLs or score records. Configure Auth abuse protection/rate limits. If you enable CAPTCHA, add a challenge UI and pass its token in the signup request before turning on the cloud adapter; this starter does not include a CAPTCHA provider.
3. Configure Edge Function secrets `LEADERBOARD_ALLOWED_ORIGINS`, `NAME_REVIEW_URL`, and `NAME_REVIEW_TOKEN`. Allowed origins are a comma-separated exact list, for example `https://figsaw.figma.site,https://figsaw.haxuco.chatgpt.site`. Supabase supplies `SUPABASE_URL`, `SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY` to the function. The service-role key stays exclusively on the server.
4. Connect the name-review service described below. Until it is configured and approving names, POST submissions fail closed and no names/scores are saved. GET remains usable.
5. Deploy using `supabase functions deploy leaderboard`. `verify_jwt=false` in the function configuration permits public GET and preflight requests; POST explicitly verifies the bearer token with Supabase Auth. CORS is not used as authentication.
6. Set `supabaseUrl` to your project's HTTPS origin and `publishableKey` to its `sb_publishable_…` key in `dist/leaderboard-config.js`. Never use a service-role or secret key there. Rebuild, test, and publish the game. The board will label itself “Worldwide.” Old device scores are deliberately not uploaded.
7. Before launch, exercise accepted/rejected submissions, concurrent updates, invalid JWTs, database permissions, moderation downtime, duplicate run IDs, time bounds, and attempts over the quota against a staging Supabase project.

## Name review contract (required)

For typed nicknames, the Edge Function first normalizes names and blocks known profanity, slurs, sexual/anatomical terms, negative language, and **all Figma references**, including friendly brand references. Spaces, dots, repeated letters, leetspeak and common Unicode lookalikes are checked. This policy is not a complete semantic moderation system; free-text filters and reviewers can make mistakes. LinkedIn account names use the explicit-consent exception below.

After the deterministic check, the function sends a POST over HTTPS to your private review service:

```json
{"name":"Ava","policy":"figsaw-friendly-names-v1"}
```

Authenticate it with `Authorization: Bearer <NAME_REVIEW_TOKEN>`. Only this response approves storage:

```json
{"allow":true,"policy":"figsaw-friendly-names-v1"}
```

The review service must accept only a person's name or a friendly nickname. Reject profanity, sexual words or innuendo, slurs, threats, insults, negative statements, Figma references of any kind, disguised spellings, and ambiguous content. Treat the name as untrusted data, not reviewer instructions. Use your chosen moderation service or review system; none is provisioned by this change. Return `allow:false` for rejection. Missing configuration, timeouts, non-2xx responses, malformed verdicts and policy mismatches block storage. Do not use an always-allow stub in production.

Rejected input is not written to the Supabase tables or application logs. Quota records contain only Auth user IDs, hour buckets and counters. Configure your reviewer and infrastructure to avoid request-body logging/retention too; the app cannot control an external provider's logging. The moderation word lists and adversarial test cases are developer data and never shown as player suggestions.

The server returns only approved names and validates them again on read. The browser revalidates network rows before rendering and uses textContent. Local storage is scrubbed of newly rejected names when read. To remove a previously approved cloud entry, delete it with the database owner's tools; periodically review existing names when the policy changes.

## Ranking and trust boundaries

Top 10 = highest time remaining from the total 1,200-second budget, then earliest submission, then stable ID. Keep one best score per normalized name. Two living non-PM Figpals must be rescued; the client captures that eligibility, and the endpoint checks its payload shape and bounds. Repeated accepted run IDs cannot rename or rescore a run. Updates are transactional.

**Score authenticity is not yet server-authoritative.** This remains a client-run game: a modified client can invent plausible results or claim another display name. Supabase Auth, RLS, limits and bounds prevent direct anonymous database writes, but do not prove the player won fairly. For prizes or a verified leaderboard, implement server-issued run sessions and server-validated gameplay before enabling rewards. Anonymous account recreation can also evade per-account rate limits; configure project-level anti-abuse controls. No universal “AI-proof” claim is made.

## Verification

`npm test` covers moderation, local cleanup, adapter failures, and the Edge Function handler with fake Auth/database/reviewer dependencies. `npm run build` synchronizes the shared policy and builds the game. The migration was also exercised in an isolated PostgreSQL runtime (PGlite), covering ranking, duplicates, quotas and role permissions. Re-run `scripts/check-leaderboard-db.mjs` with a temporary PGlite installation via `PGLITE_MODULE` when changing SQL. The Deno entrypoint passes an esbuild syntax/import check. Auth, Edge deployment and the real reviewer still require end-to-end validation in your Supabase staging project.

Primary documentation: [Edge Function authorization](https://supabase.com/docs/guides/functions/auth-headers), [RLS](https://supabase.com/docs/guides/database/postgres/row-level-security), [database function permissions](https://supabase.com/docs/guides/database/functions).

## LinkedIn preview and posting

The result screens offer a preview of the existing game video or the player's result graphic, with the exact caption `I want to play a game.\n\n#Figma`. Connecting an account never posts. A separate **Post to LinkedIn** click confirms publication to the signed-in member's public feed.

The `linkedin-share` function and `202610300002_linkedin_posts.sql` migration were deployed to project `adkmqnituettpcneiiej` on October 30, 2026. Legacy gateway JWT verification is off; the function verifies the Supabase session through Auth, then verifies that the LinkedIn token belongs to that user's LinkedIn identity. It reserves each request ID before upload, limits submissions to six per user per hour, and never automatically retries an uncertain publication. The database stores request IDs, user IDs, attachment kind, timestamps and successful post URLs, not provider tokens or uploaded images.

To finish activation:

1. In Supabase Auth, enable LinkedIn OIDC with public client ID `78i1wvb54wyzdc` and the app's secret. Enter the secret directly in the dashboard; never put it in source control or chat.
2. In the LinkedIn app, authorize `https://adkmqnituettpcneiiej.supabase.co/auth/v1/callback`.
3. In Supabase Auth's redirect allowlist, add `https://figsaw.figma.site/linkedin-callback.html` and `https://figsaw.haxuco.chatgpt.site/linkedin-callback.html`.
4. Set `enabled:true` in `dist/linkedin-config.js`, rebuild and publish. The configuration contains only the public publishable key. Session and provider tokens stay in memory and are discarded on refresh.

The video is loaded only when opening the share preview. The backend uploads its fixed production video URL; it does not accept arbitrary fetch URLs. Graphic uploads must be PNG and at most 4 MiB. Closing the preview pauses and releases video loading. Without sign-in configuration, players can still preview, save media and copy the caption.

## LinkedIn names in the Top 10

Qualified players may choose **Use my LinkedIn name**. Sign-in displays a private preview of the exact name, an unchecked approval checkbox, **Publish my name and score**, **Use a nickname instead**, and **Keep my name private**. Neither signing in nor checking the box submits a score: the separate publish button is required. Approval resets for every new result. Declining makes no leaderboard write and does not attach the name to the result graphic.

The server retrieves `/v2/userinfo` directly from LinkedIn and matches its subject to the Supabase user's LinkedIn identity. Only that returned name bypasses nickname moderation. A client-supplied name, profile metadata, or `nameSource` flag cannot approve it. The approved preview must match the current provider name and `nameConsent` must be boolean `true`. Profile names are rendered as text, never HTML. This verifies account ownership, not the legal identity of the person.

Apply `202610300003_linkedin_names.sql` after the leaderboard migration, then deploy the updated leaderboard function before enabling the worldwide adapter. The new RPC records the source and consent timestamp; it does not store the provider token. Backend reads preserve consented LinkedIn names, while untrusted local-storage names still go through the nickname filter. The name/consent migration and updated leaderboard function are prepared and tested locally, not yet deployed. The worldwide leaderboard and LinkedIn provider must be connected before the real-name option is enabled.

The LinkedIn callback and both official/staging Supabase redirect URLs listed above are now saved. The app secret and provider activation remain an owner handoff. Figma Make must also serve `linkedin-callback.html` and its script at the official domain; an allowlist alone does not deploy these files to Figma Make.

Verification: 335 automated tests pass, including mocked LinkedIn uploads, exact caption enforcement, identity mismatch rejection, duplicate requests, and no publication during sign-in. The migration also passed isolated PostgreSQL permissions/quota checks. Production OPTIONS returns 204 and an unauthenticated POST returns 401. UI posting was tested only with a mock client; no real LinkedIn test post was published. Authenticated live posting remains untested by the owner's instruction.

## Private play analytics

`202610300004_analytics.sql` is applied to the production Supabase project. `insights.html` is an unlinked, noindex owner dashboard. The SQL RPC enforces verified owner email access using the private `figsaw_analytics_owners` allowlist; discovering its URL does not grant access. **The allowlist is intentionally empty until Hang supplies the owner email.** Add only the requested verified address with an owner SQL session:

```sql
insert into public.figsaw_analytics_owners(email) values (lower('OWNER_EMAIL')) on conflict do nothing;
```

The dashboard requests an email one-time code, then verifies it through Supabase Auth. Both first-signup and magic-link email templates now include the code (the original link remains as an alternative). No redirect allowlist change is needed. The project currently uses Supabase's built-in email delivery; it restricts recipients to project-team addresses and has low rate limits. If the selected owner email is not an allowed team address, configure custom SMTP before expecting delivery. No owner sign-in email was sent or verified during development; actual sign-in remains an owner step. Sessions stay in page memory and are lost on refresh. There are no service-role credentials in the browser.

Only allowlisted hosts report: `figsaw.figma.site` as official and `figsaw.haxuco.chatgpt.site` as staging. Localhost and the dashboard itself are excluded. Official metrics require publishing this build to Figma Make; staging deployment cannot instrument an older official build. Analytics begin from deployment, with no historical backfill. There is no persistent player identifier: each page load starts a visit, and in-game retries create separate attempts within it. Names, emails, input text, URLs/referrers and IP addresses are not in telemetry payloads or analytics tables. Supabase infrastructure may maintain its own access logs. Browser GPC and Do Not Track signals disable collection.

The loader records arrival and setup failure. One-second local sampling tracks 25 milestones, rescues and active time, with a cumulative snapshot every 15 seconds plus terminal/visibility events. Rendering never waits for analytics. Active time excludes hidden tabs, Top 10/About pauses, final screens and time after 60 seconds without input. Foreground time is shown separately. A forced close or offline connection can lose the latest snapshot. Bounces are settled/inactive visits with no input and under 30 seconds active, divided by settled/inactive visits. An attempt becomes inactive after two minutes without a heartbeat; later activity can revive it. All times and anonymous counters are browser-reported, not bot-proof, authoritative scores or unique-person counts.

All three tables have RLS enabled and no browser table permissions. Anonymous callers can only execute the bounded ingestion RPC. Each page generates an unpersisted 256-bit session secret; the server stores its SHA-256 hash and rejects writes to another session. Attempt IDs are bound to a visit, snapshots are monotonic, outcomes cannot be rewritten, input keys are allowlisted, and there are limits on payload size, counters, duration, attempts per visit and write cadence. Public ingestion can still be forged/spammed by modified clients; use gateway abuse controls if needed. Dashboard reads aggregate 7/30/90-day windows and include at most 100 anonymous recent attempts. Raw anonymous records currently remain until the owner removes them; the 90-day selector is not an automatic retention job.

Validation: `node --test tests/analytics.test.mjs`, the full test suite, and `scripts/check-analytics-db.mjs` with PGlite verify isolation, denied anonymous/non-owner reads, unverified-owner denial, terminal outcome immutability, input bounds and correct aggregation. Live unauthenticated REST reads of both analytics tables and the dashboard RPC return 401. Synthetic chart data was used only in a local preview and was never written to Supabase or packaged for publication.
