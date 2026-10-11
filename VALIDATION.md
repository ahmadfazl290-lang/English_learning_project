# Validation of the Vercel source package

## Passed

- Five automated security/grading checks: anonymous/cross-account access, nested practice keys, cross-origin writes, tutor message restrictions/token limits, exact objective answers.
- The original local email/password implementation passed registration, sign-in, duplicate-account rejection, weak-password rejection, account isolation and revoked-session checks before this migration.

## Not verified against a hosted service

- Neon database connectivity and the PostgreSQL version of the account/storage endpoints: no Neon account or connection string has been supplied.
- Live Vercel deployment and browser interaction on that deployment.
- AI responses and realtime voice: no provider credential is configured, and OpenAI Realtime is not implemented.
- Email verification and password recovery are not implemented.

## Build restriction on this machine

`next build --webpack` was attempted using the installed Next.js runtime. It stopped because `@neondatabase/serverless` was not installed locally. The attempted package installation could not access the npm registry (network EACCES). The driver is declared in `package.json`; `npm install` in an environment with registry access is required before building. No successful production build is claimed for this source package.

After connecting Neon and installing dependencies, run `npm test`, `npm run typecheck`, and `npm run build`, then follow the deployment checklist in README.md. Keep testing credentials and production records separate.

TypeScript checking was also attempted; the only remaining diagnostic was the missing Neon driver/type declarations. Unused starter UI components are excluded from this source ZIP. No successful typecheck is claimed until the declared dependencies are installed.
