# Architecture Notes

## Principles
- Keep domain logic inside `src/modules/*`
- Keep shared concerns inside `src/common/*`
- Keep runtime configuration in `config/index.ts`
- Standardize error response shape globally
- Prefer explicit docs for human and AI contributors

## Suggested module conventions
Each module can contain:
- `*.module.ts`
- `*.controller.ts`
- `*.service.ts`
- `dto/*`
- `entities/*`
- `fixtures/*`
- `*.spec.ts`
- `*.integration.spec.ts`
