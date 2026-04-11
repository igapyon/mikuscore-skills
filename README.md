# mikuscore-skills

`mikuscore` 向けの Agent Skill を管理するリポジトリ。

このリポジトリには、OpenAI Codex で使う `mikuscore` skill 本体、関連参照文書、配布用 bundle 作成スクリプトを含む。

## 主な場所

- `skills/mikuscore/`
  - skill 本体
- `docs/agent-skill-design.md`
  - 設計メモ
- `docs/development.md`
  - 開発メモ
- `vendor/mikuscore/`
  - upstream `mikuscore` 参照コピー

## 主なコマンド

```bash
npm test
npm run install:local
npm run build:bundle
```

- `npm test`
  - skill 構成の整合性確認
- `npm run install:local`
  - `skills/mikuscore` を repo-local `.codex/skills/mikuscore` へ同期
- `npm run build:bundle`
  - 配布用 bundle を `bundle/mikuscore-skills/` に生成

## OpenAI Codex でのローカル検証

この repo では、OpenAI Codex の repo-local `.codex/skills` を検証先として使う。

基本手順:

```bash
npm test
npm run install:local
```

その後、新しい Codex セッションで `mikuscore` を明示したプロンプトを使って発火確認を行う。

詳細は [docs/development.md](docs/development.md) を参照。
