# Output Location Rules

Use this reference when the skill writes user-facing files.

## Default Output Tree

Unless the user explicitly requests another location, write generated files under the workspace-local `mikuscore/` tree.

- state-like or handoff artifacts -> `mikuscore/state/`
- final deliverables -> `mikuscore/output/`
- temporary intermediates -> `mikuscore/tmp/`

## Standard Mapping

- `ABC` drafts or normalized `ABC` exports -> `mikuscore/state/`
- `MusicXML` intermediates or canonical exports -> `mikuscore/state/`
- final `SVG`, `MIDI`, or `MuseScore` deliverables -> `mikuscore/output/`
- scratch files or troubleshooting outputs -> `mikuscore/tmp/`

## Naming

- use `YYYYMMDDHHmm-<kind>.<ext>` by default
- reuse the same timestamp prefix when one request produces multiple related artifacts
- create target directories first when needed

Examples:

- `mikuscore/state/202604140930-score.abc`
- `mikuscore/state/202604140930-score.musicxml`
- `mikuscore/output/202604140930-score.svg`

## Required Defaults

- pass an explicit `--out` path when the CLI supports it
- keep primary outputs and intermediate outputs separate when both are user-visible

## Forbidden Defaults

- workspace root outputs such as `./score.svg`
- user-facing artifacts under `skills/mikuscore/...`
- scattered outputs with incremented suffixes when one shared timestamp prefix would be clearer
