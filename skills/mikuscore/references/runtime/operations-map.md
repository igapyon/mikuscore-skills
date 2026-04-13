# Operations Map

Use this reference when you need the supported operation list or the preferred document search order.

## Operations

The `mikuscore` skill should think in these operation categories:

- `convert`: source-to-target score conversion
- `render`: user-facing render output such as `SVG`
- `diagnostics`: warnings, errors, preservation, and loss handling
- `format-guidance`: current role and status of each format inside the product contract
- `ai-handoff`: why current AI-facing full-score exchange uses `ABC` while canonical storage remains `MusicXML`
- `workflow`: CLI, build, test, bundle, and local verification usage

## Search Order

Prefer this document order:

1. `vendor/mikuscore/docs/spec/*`
2. `vendor/mikuscore/docs/AI_INTERACTION_POLICY.md`
3. `vendor/mikuscore/README.md`
4. other `vendor/mikuscore/docs/*.md`
5. `vendor/mikuscore/TODO.md` and future-note documents only when the user is explicitly asking about planned work

## Operational Bias

- prefer documented CLI/runtime behavior over repo exploration
- prefer execution over explanation once the route is clear and supported
- prefer concise warning reporting over abandoning the workflow on soft limitations
