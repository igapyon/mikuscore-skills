#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const sourceSkillRoot = path.resolve(repoRoot, "skills/mikuscore");
const upstreamRoot = path.resolve(repoRoot, "vendor/mikuscore");
const localCodexSkillsRoot = path.resolve(repoRoot, ".codex/skills");
const targetSkillRoot = path.resolve(localCodexSkillsRoot, "mikuscore");

main();

function main() {
  ensureSourceExists(sourceSkillRoot, "skills/mikuscore");
  ensureSourceExists(upstreamRoot, "vendor/mikuscore");

  fs.mkdirSync(localCodexSkillsRoot, { recursive: true });
  fs.rmSync(targetSkillRoot, { recursive: true, force: true });
  fs.cpSync(sourceSkillRoot, targetSkillRoot, { recursive: true });
  fs.mkdirSync(path.resolve(targetSkillRoot, "vendor"), { recursive: true });
  fs.cpSync(upstreamRoot, path.resolve(targetSkillRoot, "vendor", "mikuscore"), { recursive: true });

  process.stdout.write([
    "[install:local] synced skill into repo-local Codex home",
    `[install:local] source: ${path.relative(repoRoot, sourceSkillRoot)}`,
    `[install:local] target: ${path.relative(repoRoot, targetSkillRoot)}`,
    "[install:local] included vendor/mikuscore under the skill directory"
  ].join("\n"));
  process.stdout.write("\n");
}

function ensureSourceExists(targetPath, label) {
  if (!fs.existsSync(targetPath)) {
    throw new Error(`missing source directory: ${label}`);
  }
}
