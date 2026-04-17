# TODO

## Recent Documentation Updates

- [x] Fix `.gitignore` so repo-root `/mikuscore/` is ignored without also ignoring `skills/mikuscore/`.
- [x] Add `ABC Quick Handling` guidance to `skills/mikuscore/references/workflow/composition-and-output.md`.
- [x] Clarify that repo-root `mikuscore/` is the default working location only when the workflow needs repository files and the user did not specify another location.
- [x] Add `docs/images/mikuscore-ogp.png` to `README.md`.

## Upstream Follow-up

- [x] Reflect the current upstream sync state in the repo notes.
  - Latest subtree sync on 2026-04-17:
    - `vendor/mikuscore` was updated to upstream `devel` tip `10f541b6`
  - Current state:
    - upstream CLI is now documented as `convert` / `render` / initial `state`
    - `vendor/mikuscore/src/ts/cli-api.ts` still needs a small repo-local carry here for downstream compatibility
    - the remaining carry is limited to:
      - discriminated-union-safe `.message` access in selector normalization
      - replacing `flatMap` with ES2018-compatible iteration for isolated bundle compilation
  - Verification result:
    - `npm --prefix vendor/mikuscore run build` passes
    - `npm run test` passes, including isolated bundle CLI conversion
    - root `npm run build` also passes and produces the skill bundle zip
