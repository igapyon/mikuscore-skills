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

## 運用上の注意

- `vendor/mikuscore/` へ直接編集を入れるのは原則避ける
- upstream 仕様確認は `vendor/mikuscore/` を優先する
- `workplace/mikuscore-devel` に差分があっても、それを正式状態とはみなさない
