#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const bundleRoot = path.resolve(repoRoot, "bundle/mikuscore-skills");
const bundleSkillsRoot = path.resolve(bundleRoot, "skills");
const sourceSkillRoot = path.resolve(repoRoot, "skills/mikuscore");

main();

function main() {
  ensureSourceExists(sourceSkillRoot, "skills/mikuscore");

  fs.rmSync(bundleRoot, { recursive: true, force: true });
  fs.mkdirSync(bundleSkillsRoot, { recursive: true });

  fs.cpSync(sourceSkillRoot, path.resolve(bundleSkillsRoot, "mikuscore"), {
    recursive: true
  });

  process.stdout.write([
    "[build:bundle] generated bundle/mikuscore-skills",
    "[build:bundle] copy this directory's contents under your skill home root",
    "[build:bundle] included:",
    "  - skills/mikuscore"
  ].join("\n"));
  process.stdout.write("\n");
}

function ensureSourceExists(targetPath, label) {
  if (!fs.existsSync(targetPath)) {
    throw new Error(`missing source directory: ${label}`);
  }
}
