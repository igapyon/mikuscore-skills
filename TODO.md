# TODO

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
