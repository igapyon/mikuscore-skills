# Development Notes

この文書は `mikuscore-skills` の開発メモです。

## 文書の入口

- 設計メモ: [agent-skill-design.md](agent-skill-design.md)

## subtree 運用

`mikuscore` は `vendor/mikuscore/` に `git subtree` で取り込む前提とする。

運用方針:

- `vendor/mikuscore/` は upstream を保持する場所として扱う
- Skill や文書の正式参照先は `vendor/mikuscore/` を優先する
- `workplace/` は仕様検討や一時作業用であり、正式参照先にはしない

## 初回取り込み

例:

```bash
git subtree add --prefix=vendor/mikuscore https://github.com/igapyon/mikuscore.git devel --squash
```

## 更新

例:

```bash
git fetch https://github.com/igapyon/mikuscore.git devel
git subtree pull --prefix=vendor/mikuscore https://github.com/igapyon/mikuscore.git devel --squash
```

最近の取り込みメモ:

- `src/ts/musescore-io.ts` の ES2018 互換化は upstream に入っていたため、そのローカル carry は不要になった
- `scripts/lib/load-cli-api.mjs` は upstream 更新後も `typescript` の runtime import で CLI build/test が落ちたため、この repo では `tsc` CLI 呼び出しベースの互換修正を引き続き保持している
- upstream 更新後は `npm --prefix vendor/mikuscore run build` と root `npm run build` の両方で確認する

## ローカル Skill 検証

この手順は OpenAI Codex の repo-local `.codex/skills` 検証フローを前提とする。

このリポジトリでは、repo 直下の `.codex/skills/mikuscore` をローカル検証先として使える。
一般の ABC 作曲や下書きは `mikuscore` を呼ばずに進め、`mikuscore` 固有の変換や handoff を使いたい段階でだけ `mikuscore` を明示する。

開発時の基本フロー:

```bash
npm test
npm run install:local
```

`npm run install:local` は `skills/mikuscore` を `.codex/skills/mikuscore` へ同期する。
このとき `vendor/mikuscore` も `.codex/skills/mikuscore/vendor/mikuscore` として同梱する。
この同期はローカル検証用の明示操作として扱い、`npm run build` や bundle build の一部には含めない。

`mikuscore` を呼び出した後に生成した曲断片や handoff 用の保存物は、`skills/mikuscore/` ではなく、repo 直下の `mikuscore/` を保存先として扱う。

確認時の前提:

- `~/.codex` ではなく、この repo の `.codex/skills/mikuscore` を検証先にする
- 反映確認は既存セッションではなく、新しい Codex セッションで行う
- `mikuscore` を明示したプロンプトで発火条件を確認する

必要に応じて配布用 bundle も生成する。

```bash
npm run build:bundle
```

配布用 bundle には `skills/mikuscore` 本体に加えて、`skills/mikuscore/vendor/mikuscore` として `vendor/mikuscore` を丸ごと同梱する。
利用側では `bundle/mikuscore-skills/skills/mikuscore` ディレクトリ単体を配置しても self-contained に参照できる状態を前提とする。

配置イメージ:

```text
skills/
  mikuscore/
    SKILL.md
    agents/
    references/
    vendor/
      mikuscore/
        README.md
        src/
        docs/
        scripts/
```

`npm run build` 系は build と検証に限定し、repo-local `.codex` へのコピーは副作用として実行しない。

## 運用上の注意

- `vendor/mikuscore/` へ直接編集を入れるのは原則避ける
- upstream 仕様確認は `vendor/mikuscore/` を優先する
- `workplace/mikuscore-devel` に差分があっても、それを正式状態とはみなさない
