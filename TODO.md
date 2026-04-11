# TODO

## Upstream Follow-up

- [ ] Report the upstream-compatible fixes that were applied locally to vendored `mikuscore`.
  - Repro path:
    - run `npm run build` in this repository
    - this calls `npm --prefix vendor/mikuscore run build`
  - Local fix 1:
    - file: `vendor/mikuscore/src/ts/musescore-io.ts`
    - replaced `flatMap` usage with ES2018-compatible loops in `readFirstVBoxTextByStyle(...)`
    - reason: current upstream TS target/lib is `ES2018`, so `flatMap` caused typecheck failure
  - Local fix 2:
    - file: `vendor/mikuscore/scripts/lib/load-cli-api.mjs`
    - replaced direct `typescript` package import usage with `tsc` CLI invocation for temp compilation
    - reason: CLI tests were failing with `ERR_MODULE_NOT_FOUND` for `typescript` during `load-cli-api.mjs`
  - Verification result after local fixes:
    - `npm --prefix vendor/mikuscore run build` passes
    - root `npm run build` also passes and produces the skill bundle zip
