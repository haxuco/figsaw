# Import the prepared Payload migration into Figma Make

The implementation is already written. Reuse it; do not regenerate the game or backend.

Figma's current [Payload documentation](https://help.figma.com/hc/en-us/articles/32640822050199-Add-a-backend-to-a-functional-prototype-or-web-app) says GitHub import/local code workflows are not yet available for Payload-backed Make apps. Pulling the game source alone does not create a hosted database. If Make blocks the pull, use its backend creation card first and bring in the prepared modules using the integration mechanism available in that editor.

## Minimal Make instruction

> Use the existing implementation in `payload/` to replace Supabase. Preserve all game code and UI in `dist/`. Keep Make's generated Payload/Next hosting and database adapter. Integrate `payload/src/collections.ts` and the `/api/figsaw/*` route with its `core/` and `shared/` modules; do not recreate them. Serve the built game and API on the same origin, `https://figsaw.figma.site`. Copy the static output produced by `npm run prepare:payload` into the host's public assets. Use the included access rules, server-side LinkedIn tokens, exact-name consent, fail-closed moderation and owner email-code dashboard. Configure the server secrets listed in `payload/.env.example` through Settings, not chat. Do not make any test LinkedIn posts. Follow `payload/README.md` for database setup, owner provisioning, data import and verification.

## Files already prepared

- `payload/src/collections.ts`: private data collections and locked owner registration.
- `payload/src/payload.config.ts`: standalone configuration; replace only its database/email/hosting plumbing where Make supplies an equivalent.
- `payload/src/app/api/figsaw/[...path]/route.ts`: game API entry point.
- `payload/src/core/`: authentication, moderation integration, score storage, analytics, posting and abuse controls.
- `payload/src/shared/`: shared policy and tested posting/submission handlers.
- `payload/src/migrations/`: initial SQLite schema for standalone deployment. A different hosted adapter needs its corresponding generated migration.
- `dist/backend-config.js`: same-origin API configuration; no public secrets.
- `payload/migration/`: optional historical-data export/import path.
- `payload/tests/`: real-database integration tests; no external posting.

## Settings to finish in Make

1. Create/provision the native Payload backend and durable database; confirm the installed Payload/Next versions support these modules. This standalone package pins Payload 3.92.1 and Next 16.4.3.
2. Add private server secrets: Payload secret, owner email, email sender/SMTP credentials, LinkedIn app credentials, semantic name-review endpoint/token. Supply the owner's previously chosen analytics email privately.
3. Register `https://figsaw.figma.site/api/figsaw/linkedin/callback` in LinkedIn. Keep the existing approved scopes. Configure the real host's trusted client-IP header for rate limits.
4. Apply the schema through the host's migration system and provision the owner through the server-only bootstrap, never public registration. Keep the transactional analytics write semantics when adapting the database.
5. Verify `/api/figsaw/status`, public Top 10 reads, server name rejection, owner-only `/insights`, and an OAuth round trip. Do not publish a test post.
6. Back up/import old analytics if wanted, then publish. Do not delete Supabase until the new version and data are verified.

The GitHub push contains prepared source, migrations and tests. It does not change Figma's backend provisioning, secrets, LinkedIn allowlists or the currently deployed sites.
