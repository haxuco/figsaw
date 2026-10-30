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

The Edge Function first normalizes names and blocks known profanity, slurs, sexual/anatomical terms, negative language, and **all Figma references**, including friendly brand references. Spaces, dots, repeated letters, leetspeak and common Unicode lookalikes are checked. This policy is not a complete semantic moderation system; free-text filters and reviewers can make mistakes.

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

Verification: 335 automated tests pass, including mocked LinkedIn uploads, exact caption enforcement, identity mismatch rejection, duplicate requests, and no publication during sign-in. The migration also passed isolated PostgreSQL permissions/quota checks. Production OPTIONS returns 204 and an unauthenticated POST returns 401. UI posting was tested only with a mock client; no real LinkedIn test post was published. Authenticated live posting remains untested by the owner's instruction.
