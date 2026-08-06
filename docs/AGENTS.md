---
title: "AGENTS.md — Operating Contract for AI Agents in This Repo"
---

# AGENTS.md — Operating Contract for AI Agents in This Repo

This repo is the **human-facing curriculum** for the Dream pursuit doctrine — "one doctrine, two renderings": `dna` is the machine/AI doctrine, `dream-curriculum` is the human college course. It is a documentation repo: no deployable code, no CI. Every edit is a change to teaching material; the bar is pedagogical quality and doctrinal accuracy.

## Core rule: concepts are durable, tools are swappable

- **Concept-first, stack-agnostic.** Never teach a specific product as required knowledge — not ERPNext, Dream Dash, Claude, the DNA repo, or any portal. Say "a system of record," "an AI layer that encodes this doctrine." If a lesson is unteachable without a product, it violates the rule (`doctrine/08-tools-change-concepts-dont.md`).
- **Doctrine never changes to chase the stack.** When software changes, update `align/`, never `doctrine/`.
- **Literacy facts must be accurate.** When unsure of a government fact, state it generally — never invent specifics.
- **Case study is shared with the machine side.** Keep `case-study/ravonics.md` consistent with the ecosystem's golden-thread canary; don't invent private details.

## Directory map

- `doctrine/` — 10 durable concepts (`01`–`10`), one per file, ~600–1200 words, each ending with a 3-question self-check.
- `literacy/` — plain-language reference: glossary, acronym decoder, RFP/NOFO reading maps, money-flow map, Shipley-layer (color teams, four volumes, industry canon).
- `modules/` — teaching plans: `module-template.md` (the contract), `shared-core.md` (six-session spine), audience tracks (`strategic-initiative.md`, `mba.md`, `mpa.md`), and degree-tier subfolders (`undergraduate/`, `graduate/`, `doctoral/`).
- `course/` — the degree ladder: B.S. DL 101–480, M.S. GC 501–540 (+ GE 610–640 electives), PhD DL 901–903; syllabus, rubric, capstone.
- `practice/` — exercises, answer keys, challenges, capstones, the Ravonics worked exemplar.
- `guides/` — facilitator playbook, onboarding & placement.
- `study-plans/` — self-paced "forever-learning" paths: student, solo professional, coach/facilitator.
- `research/` — curriculum-design reference (competency model, credential mapping, market accreditation); not taught material, not rendered to `dist/`.
- `align/` — the concept↔system map (`concept-to-system-map.md`): where each durable concept is encoded machine-side (DNA repo), including the Shipley×DNA fusion. Stack changes land here, never in doctrine.
- `render/` — `build-docx.sh` (required) and `build-pdf.sh` (best-effort).
- `manifest.yaml` — document registry; **every doc is registered** with path, title, audience (enum: `everyone`, `strategic-initiative`, `mba`, `mpa`, `instructor`, `agent`, `undergraduate`, `graduate`, `doctoral`), and concept.
- `VERSION` — semver (patch for fixes, minor for additions).
- `dist/` — rendered output (docx/pdf), kept in sync with the markdown.

## Working rules

- **Worktree isolation, always.** This repo is shared with other agents working in parallel branches (branch-race pollution is a known incident). Create your own worktree and never switch branches on a shared checkout.
- **Register new docs in `manifest.yaml`** in the same change that adds/renames/removes a doc. Keep the manifest honest.
- **Keep the stack column swappable.** Any mention of software is conceptual and optional.
- **Match the professional vocabulary.** Shipley capture language plus Dream cosmology: Dream → Orbital → World, O.R.I.B.I.T.A.L., pWin threshold **0.42**, Dream Gate, the pursuit pipeline. Preserve pipeline connective tissue (doctrine/03).
- **Every doctrine doc ends with a self-check** — 3 questions.
- **Claims about the live DNA corpus must cite real `dna` repo paths, verified not recalled.** The align map pins a specific DNA version (currently v0.18.x) — check `align/concept-to-system-map.md` and verify paths before citing.
- **Bump `VERSION`** for meaningful content changes; add a `changelog.md` entry (mark repo vs sandbox layer).
- **Small, committed slices.** Commit and push coherent units with clear messages; don't sit on uncommitted work.

## Render + distribution

- Run `render/build-docx.sh` after content edits so `dist/` stays in sync (builds must remain idempotent and never fail the repo).
- The **Launchpad Sandbox (SharePoint) is the distribution layer, not the source of truth.** The repo is the source of truth; the sandbox is a published copy.
- **Graph binary PUT for uploads** — m365 mangles apostrophes; verify uploads by content compare, not byte SHA (docx are re-zipped, so byte SHA never matches).

## Pointers

- `README.md` — front door: what this is, who it's for, how to teach it.
- `align/concept-to-system-map.md` — concept↔system (DNA) correspondence.
- `manifest.yaml` — document registry.
- `VERSION` — current release.

A content change is done when: markdown is correct and doctrine-consistent; `manifest.yaml` reflects the file list; `VERSION` bumped if warranted; render scripts produce `dist/` output; change committed and pushed (the push is the release).
