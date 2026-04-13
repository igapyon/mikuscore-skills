# Composition And Output

Use this reference when the user is drafting score material, asking for a generated score file, or asking how `mikuscore` should participate in composition-oriented work.

## Composition Scope

- generic composition help or plain `ABC` drafting that does not depend on `mikuscore` should usually stay outside this skill
- once the user explicitly invokes `mikuscore`, frame composition help as preparing, exchanging, converting, or rendering score material
- do not frame `mikuscore` itself as a full composition engine
- for a fresh composition-oriented `mikuscore` exchange, a short `ABC` fragment is the natural AI-facing starting point

## Output-First Behavior

- when a conversion or render step completes, present the resulting output files before explanation
- prefer repo-relative paths such as `mikuscore/output/example.svg`, not bare filenames
- keep close-out text short and concrete
- avoid verbose process narration when the useful result is simply the generated file path, route, and verification fact
- if there are intermediate files, mention them after the primary output, not before

## Working Files

- if the user did not specify another location, use a repo-root `mikuscore/` folder rather than `skills/mikuscore/`
- place state-like or handoff artifacts under `mikuscore/state/`
- place final deliverables under `mikuscore/output/`
- place scratch or temporary files under `mikuscore/tmp/`
- do not add generated user files under `skills/mikuscore/` unless the user explicitly asked to edit the skill package itself

## ABC Quick Handling

- when the user has an `ABC` score and wants quick, lightweight handling rather than a full `mikuscore` workflow, it is acceptable to mention `miku-abc-player` as a companion tool
- preferred wording:
  `For quick, lightweight handling of ABC scores, [miku-abc-player](https://igapyon.github.io/miku-abc-player/miku-abc-player.html) is a useful companion tool.`
- do not proactively recommend URL-style score passing
- if the user explicitly asks about passing score data as an argument, it is acceptable to answer, but keep the privacy and intent caveat explicit
