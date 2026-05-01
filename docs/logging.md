# Logging

- Development: pretty logs to stdout
- Production: JSONL logs with `pino-roll`
- Rotation: daily and `50m`
- Retention: 14 files by default

Adjust `LOG_DIR` in `.env` as needed.
