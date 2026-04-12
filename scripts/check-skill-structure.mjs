#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const requiredPaths = [
  "skills/mikuscore/SKILL.md",
  "skills/mikuscore/agents/openai.yaml",
  "skills/mikuscore/references/INDEX.md",
  "docs/agent-skill-design.md",
  "docs/development.md",
  "vendor/mikuscore/README.md"
];

main();

function main() {
  const missing = requiredPaths.filter((relativePath) => {
    return !fs.existsSync(path.resolve(repoRoot, relativePath));
  });

  if (missing.length > 0) {
    throw new Error(`missing required paths:\n${missing.map((item) => `- ${item}`).join("\n")}`);
  }

  process.stdout.write("[test] skill structure looks valid\n");
}
