#!/usr/bin/env bash
# Copy + reorganize the Dream Pursuit Doctrine (dream-curriculum) markdown
# into the VitePress docs/ tree so it renders as a navigable training site.
set -euo pipefail

SRC=/home/mrh/repos/dreamlimited/dream-curriculum
DOCS=docs

# --- Doctrine (01..10) ---
mkdir -p $DOCS/doctrine
cat > $DOCS/doctrine/index.md <<'MD'
---
title: The Doctrine
---
# The Doctrine

Ten durable concepts. Read them in order — each ends with a three-question self-check.

> **The concepts are durable. The tools are swappable.**

<dl-grid>
<a class="dl-card" href="/doctrine/01-where-the-money-lives"><div class="dl-name">01 · Where the Money Lives</div><div class="dl-meta">The federal landscape and where pursuit dollars come from.</div></a>
<a class="dl-card" href="/doctrine/02-rfps-and-solicitations"><div class="dl-name">02 · RFPs & Solicitations</div><div class="dl-meta">How agencies publish what they need and how the rules are read.</div></a>
<a class="dl-card" href="/doctrine/03-the-pursuit-pipeline"><div class="dl-name">03 · The Pursuit Pipeline</div><div class="dl-meta">The end-to-end flow from opportunity to submission.</div></a>
<a class="dl-card" href="/doctrine/04-gates-and-governance"><div class="dl-name">04 · Gates & Governance</div><div class="dl-meta">The checkpoints that separate serious pursuit from wishful thinking.</div></a>
<a class="dl-card" href="/doctrine/05-scoring-and-price-to-win"><div class="dl-name">05 · Scoring & Price-to-Win</div><div class="dl-meta">How pursuit decisions are scored and priced.</div></a>
<a class="dl-card" href="/doctrine/06-orbital-business-structure"><div class="dl-name">06 · ORBITAL Structure</div><div class="dl-meta">Objective, Resources, Budget, Indicators, Transport, Activities, Logistics.</div></a>
<a class="dl-card" href="/doctrine/07-lifecycle-dream-orbital-world"><div class="dl-name">07 · Lifecycle: Dream·Orbital·World</div><div class="dl-meta">How a seed idea becomes a company.</div></a>
<a class="dl-card" href="/doctrine/08-tools-change-concepts-dont"><div class="dl-name">08 · Tools Change, Concepts Don’t</div><div class="dl-meta">The most important decision in the curriculum.</div></a>
<a class="dl-card" href="/doctrine/09-capture-and-competitive-strategy"><div class="dl-name">09 · Capture & Strategy</div><div class="dl-meta">Competitive positioning and capture management.</div></a>
<a class="dl-card" href="/doctrine/10-post-submission-and-win"><div class="dl-name">10 · Post-Submission & Win</div><div class="dl-meta">After the submission — debrief, award, and renewal.</div></a>
<dl-grid>
MD

for f in "$SRC"/doctrine/*.md; do
  base=$(basename "$f")
  case "$base" in
    README*|index*) continue;;
  esac
  slug="${base%.md}"
  cp "$f" "$DOCS/doctrine/$slug.md"
done

echo "doctrine done: $(ls $DOCS/doctrine | wc -l) files"