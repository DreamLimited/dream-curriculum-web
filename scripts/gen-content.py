#!/usr/bin/env python3
"""
Generate the VitePress docs tree for learn.dreamhive.org from the
Dream Pursuit Doctrine source (dream-curriculum).

Mirrors the ENTIRE source tree structure into docs/ so relative links
(such as ../align/concept-to-system-map) resolve, adds YAML-safe title
frontmatter to every .md so VitePress renders cleanly, and retains
non-markdown assets (docx/pdf) under docs/ for download.
"""
import os
import re
import json
import shutil
from pathlib import Path

SRC = Path("/home/mrh/repos/dreamlimited/dream-curriculum")
DOCS = Path("docs")

SKIP_NAMES = {"node_modules", ".git", "dist", "render", "scripts", "__pycache__"}
SKIP_PATTERNS = (".git",)


def clean_frontmatter(text: str) -> str:
    """Ensure each md has a YAML-safe frontmatter block."""
    if text.startswith("---"):
        return text
    m = re.search(r"^#\s+(.+)$", text, re.M)
    title = m.group(1).strip() if m else ""
    safe = title.replace("\\", "\\\\").replace('"', '\\"')
    return f"---\ntitle: \"{safe}\"\n---\n\n{text}"


def mirror(src: Path, dst: Path):
    """Recursively copy src tree into dst, rewriting .md frontmatter."""
    dst.mkdir(parents=True, exist_ok=True)
    for item in sorted(src.iterdir()):
        if item.name in SKIP_NAMES:
            continue
        if item.is_dir():
            mirror(item, dst / item.name)
        else:
            out = dst / item.name
            if item.suffix.lower() == ".md":
                out.write_text(clean_frontmatter(item.read_text(errors="replace")))
            else:
                shutil.copy2(item, out)


def humanize(name: str) -> str:
    return name.replace("-", " ").replace("_", " ").replace("  ", " ").strip().title()


def build_index(title, desc, base, rel_items):
    cards = "\n".join(
        f'<a class="dl-card" href="/{base}/{slug}"><div class="dl-name">{label}</div></a>'
        for label, slug in rel_items
    )
    return (
        f"---\ntitle: {title}\n---\n# {title}\n\n{desc}\n\n"
        f'<div class="dl-grid">\n{cards}\n</div>\n'
    )


def main():
    total_md = 0
    # Full mirror (including align/, root README, etc., so relative links resolve)
    mirror(SRC, DOCS)

    # Fix top-level stray files that reference files we want as landing indexes
    # Count markdown
    for p in DOCS.rglob("*.md"):
        total_md += 1

    # Root landing page already at docs/index.md — don't overwrite. Remove duplicated
    # source README from root-level copy to avoid clobbering nav links.
    for f in ("README.md", "faq.md", "manifest.yaml"):
        cand = DOCS / f
        if cand.exists() and f != "index.md":
            cand.unlink()

    # Build section index pages from the mirrored folders
    section_cfg = {
        "doctrine": ("Doctrine", "Ten durable concepts. Read in order — each ends with a self-check."),
        "course": ("Course & Degree Ladder", "A college course and the four-rung degree ladder."),
        "modules": ("Modules & Teaching Plans", "Session-by-session teaching plans across audience tracks."),
        "literacy": ("Literacy & Reference", "Glossary, acronym decoder, how-to-read guides, and reference."),
        "case-study": ("Case Study", "The Ravonics canary case."),
        "case-library": ("Case Library", "Annotated cases illustrating the doctrine."),
        "study-plans": ("Study Plans", "Paced reading plans."),
        "guides": ("Practice & Guides", "Guides to apply the doctrine."),
        "practice": ("Practice", "Exercises, challenges, and capstones."),
        "research": ("Research", "Research methods and references."),
    }
    for folder, (title, desc) in section_cfg.items():
        base_dir = DOCS / folder
        if not base_dir.exists():
            continue
        # collect immediate and nested .md slugs
        items = []
        for p in sorted(base_dir.rglob("*.md")):
            if p.name == "index.md":
                continue
            rel = p.relative_to(base_dir).with_suffix("").as_posix()
            label = humanize(p.stem)
            items.append((label, rel))
        if items:
            (base_dir / "index.md").write_text(build_index(title, desc, folder, items))

    print(f"TOTAL markdown under docs/: {total_md}")
    # Report download assets
    assets = [p for p in DOCS.rglob("*") if p.suffix.lower() in (".docx", ".pdf")]
    print(f"docx/pdf assets mirrored: {len(assets)}")


if __name__ == "__main__":
    main()