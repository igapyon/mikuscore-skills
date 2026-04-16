# TODO

## Recent Documentation Updates

- [x] Fix `.gitignore` so repo-root `/mikuscore/` is ignored without also ignoring `skills/mikuscore/`.
- [x] Add `ABC Quick Handling` guidance to `skills/mikuscore/references/workflow/composition-and-output.md`.
- [x] Clarify that repo-root `mikuscore/` is the default working location only when the workflow needs repository files and the user did not specify another location.
- [x] Add `docs/images/mikuscore-ogp.png` to `README.md`.

## Upstream Follow-up

- [x] Reflect the current upstream sync state in the repo notes.
  - Latest subtree sync:
    - `vendor/mikuscore` was updated from `0617c7d5` to `94e9c216`
  - Current state:
    - there is no remaining repo-local carry in `vendor/mikuscore/`
    - `vendor/mikuscore/src/ts/cli-api.ts` now uses `TextDecoder` in the upstream version itself
    - `vendor/mikuscore/scripts/lib/load-cli-api.mjs` now uses the compiled-cache flow with `typescript/bin/tsc` resolution in the vendored upstream version
  - Verification result:
    - `npm --prefix vendor/mikuscore run build` passes
    - root `npm run build` also passes and produces the skill bundle zip
