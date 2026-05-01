# Project Context

- **Stack:** TypeScript, NestJS, Prisma, PostgreSQL, Redis
- **Goal:** Reusable backend template with production-ready defaults

# Commands

```bash
## Development
pnpm dev
pnpm test:unit
pnpm test:integration
pnpm test:e2e

## Database
pnpm prisma:migrate
pnpm prisma:seed
pnpm prisma:reset

## Quality
pnpm lint:check
pnpm typecheck
pnpm format:check
```

## Workflow after making changes

- Update `README.md` when setup or runtime behavior changes
- Update `CHANGELOG.md` for user-facing changes
- Update `docs/*.md` when architecture or conventions change
- Update `.kulala/*.http` when API contract changes
- Update `prisma/seed.ts` if schema changes affect app flows
- Add or update unit / integration / e2e coverage for changed behavior

## Required standards

- Keep module code in `src/modules/*`
- Keep shared cross-cutting concerns in `src/common/*`
- Keep env parsing centralized in `config/index.ts`
- Use migrations for every schema change
- Prefer structured logging and standardized error responses
