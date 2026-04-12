# TODO

## Recent Documentation Updates

- [x] Fix `.gitignore` so repo-root `/mikuscore/` is ignored without also ignoring `skills/mikuscore/`.
- [x] Add `ABC Quick Handling` guidance to `skills/mikuscore/references/workflow/composition-and-output.md`.
- [x] Clarify that repo-root `mikuscore/` is the default working location only when the workflow needs repository files and the user did not specify another location.
- [x] Add `docs/images/mikuscore-ogp.png` to `README.md`.

## Upstream Follow-up

- [ ] Report the remaining upstream-compatible fix that is still applied locally to vendored `mikuscore`.
  - Repro path:
    - run `npm run build` in this repository
    - this calls `npm --prefix vendor/mikuscore run build`
  - Upstream sync note:
    - the previous `flatMap` compatibility fix in `src/ts/musescore-io.ts` is now present upstream and no longer needs a local carry
  - Remaining local fix:
    - file: `vendor/mikuscore/scripts/lib/load-cli-api.mjs`
    - upstream now has a compiled-cache implementation, but it still imports `typescript` at runtime
    - local carry keeps the cache-oriented structure and replaces runtime `typescript` import usage with `tsc` CLI invocation
    - reason: CLI tests fail with `ERR_MODULE_NOT_FOUND` for `typescript` during `load-cli-api.mjs`
  - Verification result after current local fix:
    - `npm --prefix vendor/mikuscore run build` passes
    - root `npm run build` also passes and produces the skill bundle zip
