# English-Co

The root application integrates Supabase sign in/sign up, verification, recovery, account details and optional server-enforced TOTP MFA with placement, CEFR learning, vocabulary, progress and local pronunciation recording/playback. English and Kurdish RTL are supported.

Use Node >=22.13.0. Run npm ci, npm test, npm run typecheck, npm run build, then npm start. Guest learning needs no environment file. Configure accounts privately using the placeholders in .env.example; never commit .env.local.

The main interface is at /. More practice opens /practice-library, preserving the repository's earlier courses, daily lessons, practice, mistakes, roadmap and tutor presentation with guest storage. Account access always uses /account?provider=supabase. Guest learning is public and does not establish an authenticated session or unlock account operations. Local records are not automatically migrated or synchronized to Supabase.

Azure assessment and token routes remain hard-disabled. The repository text tutor endpoint remains available only with its separate server configuration and legacy account namespace; no AI credentials are supplied or activated. Historical Cadence-* folders remain unchanged and are excluded from root TypeScript compilation.

See docs/TESTING.md for mocked browser tests and docs/LOCAL-INTEGRATION.md for current results and publication blockers. docs/REPOSITORY-SETUP.md preserves prior repository setup guidance as historical documentation; it does not authorize database changes or deployment. Other imported handoff reports describe earlier runs, not this checkout's validation.
