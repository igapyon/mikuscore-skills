#!/usr/bin/env node

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const buildScriptPath = path.resolve(repoRoot, "scripts/build-skill-bundle.mjs");

const ABC_SAMPLE = [
  "X:1",
  "T:Bundle Smoke",
  "M:4/4",
  "L:1/4",
  "K:C",
  "C D E F"
].join("\n");

main();

function main() {
  execFileSync("node", [buildScriptPath], {
    cwd: repoRoot,
    encoding: "utf8"
  });

  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "mikuscore-bundle-test-"));
  try {
    const isolatedSkillsRoot = path.resolve(tempRoot, "skills");
    fs.cpSync(path.resolve(repoRoot, "bundle/mikuscore-skills/skills"), isolatedSkillsRoot, {
      recursive: true
    });

    const isolatedCliPath = path.resolve(
      isolatedSkillsRoot,
      "mikuscore/vendor/mikuscore/scripts/mikuscore-cli.mjs"
    );
    const output = execFileSync(
      "node",
      [
        isolatedCliPath,
        "convert",
        "--from",
        "abc",
        "--to",
        "musicxml"
      ],
      {
        cwd: tempRoot,
        input: ABC_SAMPLE,
        encoding: "utf8"
      }
    );

    if (!output.includes("<score-partwise")) {
      throw new Error("isolated bundle conversion did not produce MusicXML output");
    }

    process.stdout.write("[test] isolated bundle CLI conversion passed\n");
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
}
