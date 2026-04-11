---
name: mikuscore
description: Use only when the user explicitly says `mikuscore` or clearly asks for mikuscore-specific score conversion, diagnostics, AI handoff, or CLI workflows. This skill handles mikuscore format guidance, conversion-path guidance, diagnostics interpretation, ABC-centric AI handoff guidance, and mikuscore-specific workflow rules; do not auto-activate it for generic music theory, generic MIDI editing, or general notation discussion.
---

# Mikuscore

Use this skill for `mikuscore`-specific score conversion, diagnostics, AI handoff, and workflow guidance.
Keep the focus on `mikuscore` product constraints: canonical `MusicXML` internally, but `ABC` as the current AI-facing full-score handoff layer.

Current `ABC` support baseline:

- `ABC standard 2.2 baseline`
- some standard features remain partially implemented or unimplemented

For this skill, `mikuscore` should be opt-in by default.
Do not trigger `mikuscore` from format names alone.

Start `mikuscore` mode when at least one of these explicit triggers is present:

- the user names `mikuscore`
- the recent conversation is already in an active `mikuscore` workflow from an earlier explicit trigger
- the user clearly asks for `mikuscore`-specific behavior such as its `MusicXML-first` conversion policy, `ABC` AI handoff policy, or its CLI commands

Without one of these triggers, do not force `mikuscore` just because the request mentions `MusicXML`, `ABC`, `MIDI`, `MuseScore`, `MEI`, `LilyPond`, `VSQX`, `xml`, or score conversion.
In that case, either answer normally or ask a brief clarifying question.

## Core Rules

- preserve `mikuscore`'s split framing in explanations: canonical `MusicXML` internally, `ABC` for current generative-AI full-score handoff
- prefer `MusicXML` as the canonical internal explanation axis across format pairs
- prefer `ABC` when the question is specifically about current generative-AI score exchange
- when discussing `ABC` compatibility, state that the current documented baseline is `ABC standard 2.2`
- distinguish supported, experimental, future, and non-goal areas explicitly
- do not describe `mikuscore` as a feature-complete score engraving editor
- do not imply structural repairs or conversions that the current specs do not guarantee
- when docs conflict, prefer `vendor/mikuscore/docs/spec/*` over README-level summaries
- when discussing loss or limitations, explain them as diagnostics or format-coverage constraints instead of hand-waving them away

## Operations

Conversation workflow:

- `convert`: explain the appropriate source-to-target path, usually through `MusicXML`
- `diagnostics`: explain warnings, errors, and conversion-loss handling in `mikuscore` terms
- `format-guidance`: explain how a format is positioned within `mikuscore`
- `ai-handoff`: explain why current generative-AI full-score exchange uses `ABC`
- `workflow`: explain CLI, build, test, and local development usage

## Error Handling

Treat unsupported format-pair claims, spec contradictions, and unknown source/target identification as hard errors.
Treat experimental-format caveats, round-trip loss risks, and diagnostic metadata notes as soft warnings.

## Boundaries

Do not overreach beyond the current product contract.

- Do not pretend `mikuscore` replaces a full notation editor
- Do not claim textual XML identity guarantees that the spec explicitly rejects
- Do not claim unsupported or future format flows are already stable
- Do not collapse `mikuscore` into generic music software advice when `mikuscore`-specific guidance is needed

## References

Read these only when needed:

- [references/INDEX.md](references/INDEX.md) for detailed workflow, runtime, and upstream references
