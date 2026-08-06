#!/usr/bin/env node
/**
 * Generate downloads-manifest.json from the downloaded Launchpad Sandbox tree.
 *
 * Walks docs/public/downloads/ and emits a JSON manifest listing every
 * file with its size, extension, relative path, and download URL. Written into
 * docs/public/ so it is published verbatim by VitePress.
 *
 * Used by the Library page (docs/library.md) to render the browseable download
 * library. Run at build time so the manifest always reflects the on-disk tree.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DOWNLOADS_DIR = path.join(ROOT, "docs", "public", "downloads");
const OUT = path.join(ROOT, "docs", "public", "downloads-manifest.json");

// Human-readable section labels for the top-level folders
const FOLDER_LABELS = {
  "01-doctrine": "Doctrine — core truths and framing",
  "02-literacy": "Literacy — how to read a NOFO, color teams",
  "03-modules": "Modules — curriculum teaching modules",
  "04-courses": "Courses — undergraduate & graduate syllabi",
  "05-practice": "Practice — drills, exemplars, worked cases",
  "06-guides": "Guides — onboarding, first 30 days",
  "07-study-plans": "Study plans — solo, coach/facilitator",
  "08-reference": "Reference — canonical corpora (align, manifests)",
};

const ORDER = [
  "01-doctrine",
  "02-literacy",
  "03-modules",
  "04-courses",
  "05-practice",
  "06-guides",
  "07-study-plans",
  "08-reference",
];

function walk(dir, base = dir) {
  const entries = [];
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      entries.push(...walk(full, base));
    } else if (!name.startsWith(".")) {
      entries.push({
        rel: path.relative(base, full),
        abs: full,
        size: stat.size,
      });
    }
  }
  return entries;
}

function buildManifest() {
  const entries = walk(DOWNLOADS_DIR).map(({ rel, size }) => {
    const parts = rel.split(path.sep);
    const folder = parts.length > 1 ? parts[0] : "";
    const subdir = parts.slice(1, -1).join("/");
    return {
      path: rel.split(path.sep).join("/"),
      url: "/downloads/" + rel.split(path.sep).join("/"),
      name: parts[parts.length - 1],
      ext: path.extname(rel).replace(".", "").toLowerCase(),
      size,
      folder,
      subdir,
    };
  });

  const grouped = {};
  for (const folder of ORDER) grouped[folder] = { label: FOLDER_LABELS[folder], files: [] };
  for (const e of entries) {
    const folder = e.folder || "(root)";
    if (!grouped[folder]) grouped[folder] = { label: folder, files: [] };
    grouped[folder].files.push(e);
  }

  const total = entries.length;
  const totalBytes = entries.reduce((s, e) => s + e.size, 0);
  const docx = entries.filter((e) => e.ext === "docx").length;
  const pdf = entries.filter((e) => e.ext === "pdf").length;

  return {
    generated: new Date().toISOString().slice(0, 10),
    counts: { total, docx, pdf, total_bytes: totalBytes },
    folders: grouped,
  };
}

const manifest = buildManifest();
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(manifest, null, 2), "utf8");
const c = manifest.counts;
console.log(
  `Manifest: ${c.total} files (${c.docx} docx, ${c.pdf} pdf, ${(c.total_bytes / 1048576).toFixed(1)} MiB) -> ${path.basename(OUT)}`
);