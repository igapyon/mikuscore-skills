# Composition And Output

Use this reference when the user is composing, saving generated score material, or asking for file-producing conversion steps.

## Composition Scope

- generic composition or plain `ABC` drafting that does not depend on `mikuscore` should usually stay outside this skill
- when the user explicitly invokes `mikuscore`, frame composition help as drafting or exchanging score material in `ABC`
- do not frame `mikuscore` itself as a full composition engine
- for a fresh `mikuscore` composition-oriented exchange, a short `ABC` fragment is the natural first step

## Working Files

- once `mikuscore` is explicitly invoked, it is acceptable to create or update working files under a repo-root `mikuscore/` folder when that helps the workflow
- if the workflow needs repository files and the user did not specify another location, prefer a repo-root `mikuscore/` folder as the default working location rather than `skills/mikuscore/`
- do not add generated example files under `skills/mikuscore/` unless the user explicitly asks to edit the skill package itself

## Response Shape

- once a `mikuscore` conversion or file-producing step completes, present the output files and conversion result first, then add only brief supporting context
- when reporting generated files, prefer repo-relative paths such as `mikuscore/example.musicxml`, not bare filenames
- avoid verbose developer-style progress narration when the useful user-facing result is simply the generated file path, conversion status, or next action
- keep mid-task progress updates minimal during straightforward conversions; reserve extra narration for actual blockers, ambiguity, or failures
- after an `ABC` draft, prefer next-step suggestions such as refining the mood, extending the phrase, or preparing the `ABC` for easier handoff to later conversion steps

## ABC Quick Handling

- when the user has an `ABC` score and wants quick, lightweight handling, it is acceptable to mention `miku-abc-player` as a companion tool
- preferred wording:
  `For quick, lightweight handling of ABC scores, [miku-abc-player](https://igapyon.github.io/miku-abc-player/miku-abc-player.html) is a useful companion tool.`
- do not proactively recommend passing score data through URL/query arguments to that page
- if the user explicitly asks about passing a score as an argument, it is acceptable to answer, but note that this should not be promoted aggressively because the stance here is to avoid encouraging flows where user-provided score content may be transmitted over the internet without the user's clear intent
