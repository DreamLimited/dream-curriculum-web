#!/usr/bin/env node
/**
 * Generate docs/library.md from downloads-manifest.json.
 *
 * Reads the manifest produced by gen_downloads_manifest.mjs and emits the
 * VitePress Library page docs/library/index.md, with every file rendered as a
 * pre-built download card. Generated at build time so the page always matches
 * the on-disk downloads tree exactly.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const MANIFEST = path.join(ROOT, "docs", "public", "downloads-manifest.json");
// Emit as a directory index (library/index.md) so GitHub Pages resolves the
// nav/home link `/library/` -> library/index.html. A flat library.md would
// produce library.html, which `/library/` does not resolve to on a static host.
const OUT = path.join(ROOT, "docs", "library", "index.md");

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

const SECTION_NOTES = {
  "01-doctrine": "Core truths and framing of the Dream Pursuit doctrine.",
  "02-literacy": "Foundational literacy — reading a NOFO, color teams, capture basics.",
  "03-modules": "Curriculum teaching modules and templates.",
  "04-courses": "Undergraduate and graduate course syllabi and materials.",
  "05-practice": "Hands-on drills, worked exemplars, and practice cases.",
  "06-guides": "Operational guides — onboarding, first-30-days, placement.",
  "07-study-plans": "Structured study plans for solo and coach-led learners.",
  "08-reference": "Canonical reference corpora and source materials.",
};

function fmtSize(n) {
  if (n >= 1048576) return `${(n / 1048576).toFixed(1)} MiB`;
  if (n >= 1024) return `${Math.round(n / 1024)} KiB`;
  return `${n} B`;
}
function cardIcon(ext) {
  return ext === "pdf" ? "📄" : "📑";
}
function appLabel(folder) {
  return folder.replace(/^[0-9-]+/, "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function renderCard(e, showFolder = true) {
  const meta = `${e.ext.toUpperCase() || "FILE"} · ${fmtSize(e.size)}` + (showFolder && e.subdir ? ` · ${esc(e.subdir)}` : "");
  return (
    `<a class="dl-card" href="${esc(e.url)}" download style="text-decoration:none">` +
    `<div class="dl-name">${cardIcon(e.ext)} ${esc(e.name)}</div>` +
    `<div class="dl-meta">${meta}</div>` +
    `<span style="color:var(--vp-c-brand-1)">Download →</span>` +
    `</a>`
  );
}
function grid(cards) {
  return ['<div class="dl-grid">', ...cards, "</div>", ""].join("\n");
}

function buildPage(manifest) {
  const folders = manifest.folders;
  const c = manifest.counts;
  const lines = [
    "# Dream Pursuit Doctrine — Full Document Library",
    "",
    `Every training document from the Launchpad Sandbox, available for offline study and download. **${c.total} files** — ${c.docx} Word documents and ${c.pdf} PDFs (${fmtSize(c.total_bytes)}).`,
    "",
    `> Generated ${manifest.generated} from the live curriculum. Files are served directly from this site.`,
    "",
    `<p class="lp-stats"><strong>${c.total}</strong> files · <strong>${c.docx}</strong> .docx · <strong>${c.pdf}</strong> .pdf · <strong>${fmtSize(c.total_bytes)}</strong></p>`,
    "",
  ];

  const root = folders["(root)"] ? folders["(root)"].files : [];
  if (root.length) {
    lines.push("## Standalone files", "", grid(root.map((e) => renderCard(e, false))));
  }
  for (const folder of ORDER) {
    if (!folders[folder] || !folders[folder].files.length) continue;
    lines.push(`## ${appLabel(folder)}`, "");
    if (SECTION_NOTES[folder]) lines.push(SECTION_NOTES[folder], "");
    lines.push(grid(folders[folder].files.map((e) => renderCard(e, false))));
  }
  for (const folder of Object.keys(folders)) {
    if (ORDER.includes(folder) || folder === "(root)") continue;
    if (!folders[folder].files.length) continue;
    lines.push(`## ${appLabel(folder)}`, "", grid(folders[folder].files.map((e) => renderCard(e, false))));
  }
  return lines.join("\n") + "\n";
}

if (!fs.existsSync(MANIFEST)) {
  console.error(`Manifest missing: ${MANIFEST}. Run gen_downloads_manifest.mjs first.`);
  process.exit(1);
}
const manifest = JSON.parse(fs.readFileSync(MANIFEST, "utf8"));
const page = buildPage(manifest);
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, page, "utf8");
const groups = Object.values(manifest.folders).filter((g) => g.files.length).length;
console.log(`Wrote ${path.basename(OUT)}: ${manifest.counts.total} files across ${groups} groups`);