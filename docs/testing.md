# Testing Guide

## Unit
- file pattern: `*.spec.ts`
- use isolated service/controller tests
- mock external dependencies

## Integration
- file pattern: `*.integration.spec.ts`
- verify DB or integration boundaries
- use fixtures and seed data where needed

## E2E
- file pattern: `e2e-tests/*.e2e-spec.ts`
- verify full HTTP behavior
- keep one smoke suite at minimum

## Fixtures
- shared fixtures: `test/fixtures/*`
- module-specific fixtures: `src/modules/<module>/fixtures/*`
- database fixtures: `prisma/seed.ts`

## Sanity API checks
- keep request examples in `.kulala/*.http`
