import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createRequire } from "node:module";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

import { JSDOM } from "jsdom";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DEFAULT_ROOT_DIR = path.resolve(__dirname, "../..");
const ENTRY_TS = "src/ts/cli-api.ts";
const VEROVIO_JS = "src/js/verovio.js";
function compileGraph(rootDir) {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "mikuscore-cli-api-"));
  fs.writeFileSync(path.join(tempDir, "package.json"), JSON.stringify({ type: "commonjs" }), "utf8");

  const result = spawnSync(
    "tsc",
    [
      "--pretty",
      "false",
      "--module",
      "commonjs",
      "--target",
      "es2018",
      "--moduleResolution",
      "node",
      "--lib",
      "DOM,DOM.Iterable,ES2018",
      "--esModuleInterop",
      "--skipLibCheck",
      "--rootDir",
      rootDir,
      "--outDir",
      tempDir,
      path.resolve(rootDir, ENTRY_TS),
    ],
    {
      cwd: rootDir,
      encoding: "utf8",
    }
  );

  if (result.status !== 0) {
    throw new Error(result.stderr?.trim() || result.stdout?.trim() || "tsc command failed");
  }

  return tempDir;
}

function installWindowGlobals(window) {
  const previous = new Map();
  const keys = [
    "window",
    "document",
    "navigator",
    "Node",
    "Element",
    "HTMLElement",
    "DOMParser",
    "XMLSerializer",
    "XMLDocument",
    "Blob",
    "File",
  ];

  for (const key of keys) {
    previous.set(key, globalThis[key]);
    Object.defineProperty(globalThis, key, {
      configurable: true,
      writable: true,
      value: window[key],
    });
  }

  return () => {
    for (const key of keys) {
      if (previous.get(key) === undefined) {
        delete globalThis[key];
        continue;
      }
      Object.defineProperty(globalThis, key, {
        configurable: true,
        writable: true,
        value: previous.get(key),
      });
    }
  };
}

function installVerovioRuntime(rootDir, tempDir) {
  const verovioSourcePath = path.resolve(rootDir, VEROVIO_JS);
  const verovioCjsPath = path.join(tempDir, "verovio.cjs");
  fs.copyFileSync(verovioSourcePath, verovioCjsPath);
  const requireFromTemp = createRequire(path.join(tempDir, "package.json"));
  const verovio = requireFromTemp(verovioCjsPath);
  const previous = globalThis.window?.verovio;
  globalThis.window.verovio = verovio;
  return () => {
    if (!globalThis.window) return;
    if (previous === undefined) {
      delete globalThis.window.verovio;
      return;
    }
    globalThis.window.verovio = previous;
  };
}

export function loadCliApi(options = {}) {
  const rootDir = options.rootDir ? path.resolve(options.rootDir) : DEFAULT_ROOT_DIR;
  const dom = new JSDOM("<!doctype html><html><body></body></html>", {
    url: "http://localhost/",
  });
  const restoreWindowGlobals = installWindowGlobals(dom.window);
  const tempDir = compileGraph(rootDir);
  const restoreVerovioRuntime = installVerovioRuntime(rootDir, tempDir);
  const requireFromTemp = createRequire(path.join(tempDir, "package.json"));

  try {
    const entryPath = path.join(tempDir, ENTRY_TS.replace(/\.ts$/, ".js"));
    const apiModule = requireFromTemp(entryPath);
    return {
      api: apiModule.cliApi,
      dispose() {
        restoreVerovioRuntime();
        restoreWindowGlobals();
        dom.window.close();
        fs.rmSync(tempDir, { recursive: true, force: true });
      },
    };
  } catch (error) {
    restoreVerovioRuntime();
    restoreWindowGlobals();
    dom.window.close();
    fs.rmSync(tempDir, { recursive: true, force: true });
    throw error;
  }
}
