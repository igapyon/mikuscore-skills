# Active Workflow Rules

Use this reference when the skill is already active and you need follow-up handling rules.

## Follow-up Handling

- keep follow-up work inside `mikuscore` terms when that remains the most natural continuation
- prefer `convert`, `diagnostics`, `format-guidance`, and `workflow` handling over generic music-software advice
- when multiple format names appear, identify `source` and `target` before giving conversion guidance
- if the user already started from a `mikuscore` question, do not drift into generic notation-tool comparisons unless asked

## MusicXML-First Discipline

- explain format pairs through `MusicXML` when that matches `mikuscore`'s product model
- keep `MusicXML` as the canonical internal score source
- for current generative-AI full-score handoff, prefer `ABC` because upstream policy defines `ABC` as the current AI-facing interchange layer
- do not promise textual XML identity; preserve the distinction between semantic preservation and textual non-guarantees

## Product Boundary Discipline

- do not answer a `mikuscore` workflow question as though the user asked about a generic DAW or engraving suite
- do not erase `experimental` labels from `MEI` or `LilyPond`
- do not overstate compressed `mscz` CLI support when docs scope the CLI to `.mscx`-style text
