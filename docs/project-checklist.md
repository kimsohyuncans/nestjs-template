# Project Checklist

## Documentation
- `AGENTS.md`
- `README.md`
- `CHANGELOG.md`
- `docs/*.md`

## Structure
- `src/modules/*`
- `src/common/*`
- `config/index.ts`

## NestJS configuration
- global validation pipe
  - `transform`
  - `whitelist`
  - `enableImplicitConversion`
- global exception filter
- graceful shutdown hooks

## Logging
- structured logging in production
- daily rotation
- max-size split

## Quality control
- husky
- conventional commit
- prettier
- lint/typecheck in CI

## Testing
- separate unit / integration / e2e configs
- fixtures
- sample e2e test

## Database
- Prisma schema
- migration folder
- seed data

## Ops
- PR checks
- staging deploy template
- release workflow
- tag-based production deploy template

## Security baseline
- helmet
- throttling
- restricted CORS via env

## Recommended additions per project
- Swagger/OpenAPI if public API grows
- smoke tests after deploy
- metrics/tracing if ops complexity grows
