# mikuscore-skills

この Agent Skills を使うと、生成 AI と `mikuscore` を組み合わせて、音楽データや譜面を扱う作業を進めやすくなります。

![mikuscore OGP](docs/images/mikuscore-ogp.png)

特に、次のようなことを期待しています。

- `ABC` を起点に、音楽系の各種フォーマットを作る
- `ABC`、`MusicXML`、`MIDI`、`MuseScore` などの相互変換を進める
- 譜面の画像生成や表示用出力につなげる
- `mikuscore` 前提の変換方針や制約を、生成 AI に渡しやすくする

## インストールとローカル確認

### ふつうに使う場合

ふつうに使う場合は、生成した bundle の内容を自分の Codex home 配下へそのまま配置して使います。

配布用 bundle を作るには、たとえば次を使います。

```bash
npm run build:bundle
```

生成された `bundle/mikuscore-skills/skills/mikuscore` を、自分の Codex home 配下の `skills/` へコピーして使います。
この bundle には `skills/mikuscore/vendor/mikuscore` と、その runtime に必要な `skills/mikuscore/vendor/mikuscore/node_modules` が同梱されます。
つまり `skills/mikuscore` ディレクトリ単体を配布先へコピーしても、参照に必要な `mikuscore` 本体が一緒に入る構成です。

配置イメージ:

```text
<skill-home>/
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
          node_modules/
```

配置先は通常、各ツールの home 配下にある `skills/` 以下です。たとえば次のような配置を想定します。

- Codex: `~/.codex/skills/mikuscore`
- GitHub Copilot: `~/.copilot/skills/mikuscore`
- Claude: `~/.claude/skills/mikuscore`

### この repo の中で確認する場合

開発中にこの repo の中だけで確認したい場合は、repo-local の `.codex/skills/mikuscore` へ同期できます。

```bash
npm test
npm run install:local
```

- `npm test`
  - skill の構成確認
  - bundle を孤立ディレクトリへ展開した状態で CLI 変換が起動することの smoke test
- `npm run install:local`
  - `skills/mikuscore` を repo-local の `.codex/skills/mikuscore` へ同期し、`vendor/mikuscore` と runtime 用 `node_modules` も skill 配下へ同梱

その後、新しい Codex セッションで `mikuscore` を明示して試します。

## 詳細

細かい運用や開発向けの説明は、次の文書にまとめています。

- [docs/development.md](docs/development.md)
- [docs/agent-skill-design.md](docs/agent-skill-design.md)
