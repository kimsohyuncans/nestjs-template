# NestJS Backend Template

Production-friendly NestJS template with:

- modular folder structure
- centralized env validation
- global validation pipe
- global exception filter
- structured logging
- Prisma + seed + migrations
- unit / integration / e2e test separation
- Husky + commitlint + prettier
- CI/CD workflow templates
- docs for humans and AI agents

## Structure

```text
src/
  common/
  modules/
  prisma/
config/
docs/
prisma/
.kulala/
.github/workflows/
```

## Quick start

```bash
pnpm install
cp .env.example .env
pnpm prisma:generate
pnpm prisma:migrate
pnpm prisma:seed
pnpm dev
```

## Scripts

```bash
pnpm dev
pnpm build
pnpm lint:check
pnpm typecheck
pnpm format:check
pnpm test:unit
pnpm test:integration
pnpm test:e2e
```

## Checklist coverage

This template already includes:

- `AGENTS.md`
- `README.md`
- `CHANGELOG.md`
- `docs/*.md`
- `src/modules/*`
- `src/common/*`
- `config/index.ts`
- global validation pipe
- global exception filter
- structured logging
- husky + conventional commit + prettier
- separate test configs
- Prisma migration/seed setup
- GitHub Actions templates

## Notes

- Replace example module names with your real domain modules.
- Update `.github/workflows/*.yml` secrets and deploy steps for your infrastructure.
- Expand `prisma/schema.prisma` and `prisma/seed.ts` for your product domain.
