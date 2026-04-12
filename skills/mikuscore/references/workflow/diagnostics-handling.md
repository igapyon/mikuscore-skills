# Diagnostics Handling

Use this reference when the user asks about warnings, errors, or loss behavior.

## Hard Errors

- unknown or ambiguous source/target format when the workflow depends on that distinction
- claims that conflict with normative specs under `vendor/mikuscore/docs/spec/*`
- unsupported or out-of-scope editing/conversion behavior presented as if it were implemented

## Soft Warnings

- round-trip loss risk
- experimental-format limitations
- CLI scope caveats
- metadata or diagnostics fields that exist to expose lossy conversion boundaries

## Explanation Rules

- explain what `mikuscore` preserves first
- then explain what is not guaranteed
- when useful, point the user to the relevant spec family such as `DIAGNOSTICS`, `SPEC`, `ABC_IO`, `MIDI_IO`, or `MUSESCORE_IO`
- keep the distinction between semantic preservation and textual preservation explicit
- for file placement or generated-output handling, defer to `workflow/composition-and-output.md`
