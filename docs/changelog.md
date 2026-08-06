---
title: "Changelog — What Changed in the Launchpad Sandbox"
---

# Changelog — What Changed in the Launchpad Sandbox

*The running record of changes to the Launchpad learning space: this curriculum repo (the source of truth) and the Launchpad Sandbox distribution layer (the SharePoint folder where the docs are published). Newest first. If you change the space, add an entry here in the same change.*

> **How to update this file.** Add a new entry at the top under `## Unreleased` (or, if you're shipping, under a dated heading). Use the template at the bottom. Two rules: (1) one entry per coherent change, dated, with the *what and why*; (2) mark which layer changed — **repo** (this curriculum) or **sandbox** (the SharePoint distribution layer). Keep the record honest: it is the shared memory of the space.

---

## 2026-08-05 — v0.5.1: release-readiness wave (repo)

A correctness sweep of the reference layer ahead of declaring the curriculum finished. **This wave changes no taught content** — it fixes stale claims, closes cross-references, and adds an integrity gate.

- **Competency model corrected** — `research/competency-model.md`: the doctoral advanced modules (C.A.S.E.-adjacent: AI systems, capture management, partnerships) ARE built in `course/doctoral-advanced/`; the stale "not built / do not exist" claims are rewritten, and the D3.7 persuasive-prose row now reflects that prose craft IS taught (DL 302 week 5, GE 640).
- **Eight→ten doctrine chapters** — `faq.md`, `study-plans/coach-facilitator.md`, `research/market-accreditation.md`: doctrine chapter counts corrected to ten.
- **VERSION pins corrected** — `align/shipley-dna-fusion-map.md` Curriculum VERSION row updated to `0.5.1`.
- **Capture-plan traceability** — `research/assessment-traceability.md`: D2 capture craft now reflects the GC 690 capstone's complete capture plan; the residual gap is narrowed to on-the-job engagement-cadence logging.
- **Doctoral overview cross-links** — `course/doctoral-program-overview.md` gains §6.1 linking all three C.A.S.E.-adjacent advanced seminars with a one-line description each.
- **Module-ladder title** — `modules/README.md` title now names all four rungs (…Forever-Learning).
- **Integrity drift checker** — new `scripts/check-curriculum-integrity.py`: enforces manifest↔file correspondence and VERSION agreement across `VERSION`, `manifest.yaml`, `README.md`, and `align/shipley-dna-fusion-map.md`; exit 0 = INTEGRITY OK.
- **Render parity** — `render/build-pdf.sh` root set now includes `CLAUDE.md`, matching `render/build-docx.sh`.
- **Distribution runbook** — new `render/README.md` documenting render → verify → publish → bump.

Manifest doc count unchanged at 134 (no new curriculum `.md` added; `scripts/` and `render/` are operationally excluded). VERSION bumped `0.5.0` → `0.5.1`.

## 2026-08-05 — v0.5.0: the high-rice curriculum wave (repo)

The curriculum adds the **v0.5.0 wave**: eleven launchpad branches integrated into one milestone — agency-by-agency literacy, a real case library, the human × AI collaboration module, two new graduate electives, a company-building module, a career ladder, certification prep, a simulation day, and an inspiration narrative. The Launchpad Sandbox becomes the source of truth for **all** material: the reference layer (`align/`, `research/`) now renders to `dist/` alongside the taught set.

- **Agencies library** — `literacy/agencies/`: ten deep-dive profiles (DoD, DHS, DOE, GSA, NASA, NIH, SBIR/STTR, State/USAID/civic, VA + index) mapping each buyer to the doctrine and the course.
- **Case library** — `case-library/`: four anonymized real-feeling win/loss cases (compliance matrix, price band, teaming, ghost theme) + index.
- **Human × AI collaboration** — `modules/human-ai-collaboration.md` + `practice/human-ai-drills.md`: the taught realization of how-the-machine-learns — briefing the machine, reviewing its output, logging overrides, running the Dream Gate as a two-operator team.
- **Graduate electives** — `modules/graduate/pipeline-economics.md` (GE 650, pipeline & portfolio economics) and `modules/graduate/elective-orals-coaching.md` (GE 651, orals coaching & presentation discipline), folded into the graduate program overview and sequence.
- **Company building** — `modules/company-building.md` + `practice/company-launch-sprint.md` (10-step launch sprint) + `guides/first-30-days-govcon-bd.md`.
- **Career + inspiration** — `literacy/credential-ladder.md`, `literacy/why-govcon-matters.md`, `literacy/capability-statement.md`, `literacy/certification-prep-companion.md`, `guides/simulation-day.md` (portfolio wargame).
- **Practice layer extension** — `practice/challenges/` grows to **twenty-six** problem statements (CH-23 AI accountability "The Agent's 0.62", CH-24 "The Ghost Pass That Missed the Collision", CH-25 orals rehearsal "The Rehearsal That Met the Hostile Room", CH-26 "The Pipeline Under the Budget Ceiling"); answer keys and at-a-glance index updated; module pointers re-pointed (orals → CH-25, human-AI → CH-23/CH-24).
- **Doctoral advanced** — `course/doctoral-advanced/`: three research-object seminars (AI systems, advanced capture management, partnerships & ecosystems).
- **Assessment traceability** — `research/assessment-traceability.md`: graded artifact → competency-model coverage map.
- **Registry + render** — `manifest.yaml` registers all 31 new docs (no new audience values); VERSION bumped `0.4.0` → `0.5.0`. `render/build-docx.sh` and `render/build-pdf.sh` add `case-library/` to the taught set and `align/` + `research/` as a clearly-separated **reference layer** that also renders to `dist/`.

VERSION bumped `0.4.0` → `0.5.0`.

## 2026-08-05 — v0.4.0: the full Shipley × Dream DNA fusion wave (repo)

The curriculum completes the Launchpad v0.4.0 wave: the **Shipley × Dream DNA fusion layer**, a **capstone and challenge practice layer**, a fourth **forever-learning tier**, a DNA-surfacing literacy page, posture fixes from the survey, and the canonical agent operating contract. This is the v0.4.0 milestone of the Launchpad curriculum build.

- **AGENTS.md** — the canonical 52-line cross-tool agent operating contract (root), now rendered to `dist/` alongside README/CLAUDE.
- **Shipley × Dream DNA fusion layer** — `align/shipley-dna-fusion-map.md` (every canon discipline and gate traced canon → DNA artifact → curriculum home), `align/dna-corpus-full-index.md` (full human-readable DNA index, gaps flagged), `align/shipley-book-canon.md` (authoritative-source index). All pinned to DNA `v0.18.2` and cross-referenced from `align/concept-to-system-map.md`.
- **Capstones** — `practice/capstones/`: sample program + a worked model capstone for every rung of the ladder (undergraduate pursuit, graduate capture engagement, doctoral research design, lifetime portfolio arc).
- **Challenges** — `practice/challenges/`: twenty-two open-ended problem statements (the judgment layer) with a facilitator's answer key (model answers, scoring, planted-defect lists, role-play scripts, Shipley/DNA pointers).
- **Forever-learning tier** — the fourth rung of the degree ladder: `course/forever-learning-program.md` + `modules/forever-learning/` (executive education, post-doctoral fellowship, alumni community, refresh and recertification, twenty-year arc). `modules/README.md` and `README.md` now describe a four-rung ladder.
- **Literacy** — `literacy/how-the-machine-learns.md`: the DNA-surfacing page for professionals — what the machine corpus holds and how to evaluate its outputs.
- **Posture fixes** — the survey's fixes landed: full Shipley book canon + CPAR named in `literacy/industry-standard-canon.md`; a capture-vs-proposal staffing model in `doctrine/09`; the competency model's gap analysis re-issued against the degree-tier course files; doctrine is ten chapters in `guides/onboarding-and-placement.md`; `research/credential-mapping.md` marks `the-four-volumes.md` merged.
- **Registry + render** — `manifest.yaml` registers every new doc (audience enum extended with `forever-learning`/`executive`/`alumni`/`postdoctoral`); `render/build-docx.sh` and `render/build-pdf.sh` now include `AGENTS.md`.

VERSION bumped `0.3.0` → `0.4.0`.

## 2026-08-05 — v0.3.0: full Bachelor's / Master's / Doctoral curriculum expansion (repo)

The curriculum expands from a single semester course into a **three-rung degree ladder** plus the Shipley literacy layer, a research layer, and a full vocabulary expansion. This is the v0.3.0 milestone of the Launchpad curriculum build.

- **Doctrine 09 + 10** — capture and competitive strategy (the seven-gate BD ladder, ghost themes, black-hat analysis) and post-submission and win (discussions, debrief, protest, past performance) — and `doctrine/04` deepened with the color-team + BD-lifecycle machinery.
- **Shipley literacy** — `literacy/how-color-teams-work.md`, `literacy/the-four-volumes.md`, `literacy/industry-standard-canon.md`.
- **Vocabulary** — glossary expanded 44 → 82 entries; acronym decoder +12 rows.
- **Undergraduate tier** — B.S. in Government Business Development: program overview + DL 101/102/210/220/301/302/303/304/305/480 syllabi + `modules/undergraduate/`.
- **Graduate tier** — M.S. in Capture Management: program overview + GC 501/510/520/530/540 + GE 610/620/630/640 syllabi + `modules/graduate/`.
- **Doctoral tier** — research doctorate: program overview + DL 901/902/903 + dissertation sequence + `modules/doctoral/research-agenda.md`.
- **One-stop layer** — practice/ (worked exemplar, exercise bank, answer keys), guides/ (onboarding & placement, facilitator playbook), study-plans/, faq.md, `literacy/further-reading.md`.
- **Research layer** — `research/competency-model.md`, `research/market-accreditation.md`, `research/credential-mapping.md` (curriculum-design reference; not taught material, not rendered to `dist/`).
- **Alignment** — `align/concept-to-system-map.md` DNA pin moved `v0.18.1` → `v0.18.2`; crosswalk now points at the real degree-tier course files; new concept-map sections 10 (capture & competitive strategy) and 11 (post-submission & win); `rules/apmp-color-teams.yaml` added to the gates section. `manifest.yaml` registers every new doc (audience enum extended with `undergraduate`/`graduate`/`doctoral`).
- **Render** — `render/build-docx.sh` and `render/build-pdf.sh` now also cover `practice/`, `guides/`, `study-plans/`, `faq.md`, and `changelog.md`.

VERSION bumped `0.2.3` → `0.3.0`.

## 2026-08-05 — Practice + orientation layer added (repo)

The Launchpad Sandbox becomes a one-stop solo learning space. Added a complete practice and orientation layer alongside the existing doctrine, literacy, modules, and course:

- **`practice/worked-exemplar-day-in-the-life.md`** — a full end-to-end worked pursuit for the Ravonics canary company: an STTR Phase I solicitation walked from the 15-minute scan through the score, the compliance matrix, the ORBITAL, and the bid/no-bid call, with the reasoning at every step. The single highest-value practice artifact in the space.
- **`practice/exercises.md` + `practice/answer-keys.md`** — a practice bank (doctrine drills D01–D08, shared-core SC-E1–E6, track exercises SI/MBA/MPA, integrated mini-capstone) with full answer keys, **including answers to every existing self-check in the doctrine and every comprehension check in the modules** — which previously had no answers anywhere.
- **`guides/onboarding-and-placement.md`** — "start here" for fellows, coaches, professionals, and students; a ten-minute self-assessment that places a learner at L1–L5 or the Ignition Legacy Track, with a recommended starting path per placement.
- **`guides/facilitator-playbook.md`** — how to run a Launchpad cohort or module: session skeleton, practice mapping, facilitation craft, an 8-week cohort plan, and the pitfalls.
- **`faq.md`** — the questions newcomers, professionals, and students actually ask, answered from the existing content.
- **`study-plans/`** — three week-by-week solo paths: **student**, **solo professional** (with an Ignition Legacy Track note for professionals 50+), and **coach/facilitator**.
- **`literacy/further-reading.md`** — consolidated official sources (SAM.gov, Grants.gov, USAspending.gov, acquisition.gov/FAR, SBA, SBIR.gov) with one-line notes.
- **`changelog.md`** — this file.

All content is concept-first and stack-agnostic per the repo's core rule ([doctrine/08](doctrine/08-tools-change-concepts-dont.md)). Nothing in the doctrine, literacy glossary, acronym decoder, modules, or course was edited.

## 2026-08-05 — DNA provenance migrated TLI→CRC (cross-repo, sandbox-adjacent)

The machine-side doctrine (`DreamLimited/dna`) re-attributed its provenance from Tao Learning Institute to Curiosity Research Corporation: VERSION bumped to 0.18.2, the registry-slug corrected to the real registry entity **`curiosity-corporation`** (legal "Curiosity Corporation", EIN 33-3478603), and a systemic ADR-citation mispointing fixed across the DNA corpus. Relevant here because the Launchpad Sandbox's curriculum shares the same brand story: the human side (this repo) and the machine side (DNA) must agree on *who publishes the doctrine*.

## 2026-08-04 — Branding migration: Tao → CRC, SMILE → SPARK (repo + sandbox)

The fellowship brand family was rebranded and harmonized across the repo and the Launchpad Sandbox:

- **"Tao Learning" (Tao Learning Institute) retired** as the attribution for training material; the parent nonprofit is now **Curiosity Research Corporation** (`curiositycorp.org`), and its program is **Ignite Curiosity**.
- **"SMILE Method" sunset**; replaced by the **SPARK Learning System™** — five phases (Seek → Play → Apply → Research → Know), with *safety as the foundation, not a phase*, SPARK Sessions (hands-on, no-grades exploration), and a six-step learner journey.
- **Trademark precision:** only **"SPARK Learning System™"** carries the ™ — never "Ignite Curiosity™."
- All Launchpad docx files were migrated and verified clean of old terms (0 old terms across the scanned folders). `curiositycorp.org` added to the Innovators materials (11 references).
- The curriculum repo's alignment map ([align/concept-to-system-map.md](align/concept-to-system-map.md)) was updated to the authoritative Launchpad program family: Ignite Curiosity, the Framework Family (DREAM Playbook, O.R.B.I.T.A.L. Framework™, A.N.D.R.O.I.D. Ops™, GROWTH Accelerator™, SuperNova Strategy), the Innovator's Launchpad levels L1–L5, the Ignition Legacy Track (M1–M9), The Ascension, and The Transcendence.

## 2026-08-04 — Launchpad Sandbox distribution layer tidied (sandbox)

The SharePoint distribution layer (`General/Launchpad Sandbox`) was organized to make the space navigable: **three "0." prefix docs added** (numbered entry documents that set the order of the space), and **four dead files archived** to a new **`_archive/`** folder. The SharePoint folder remains the *distribution* layer only — this repo is the source of truth.

## 2026-08-04 — Curriculum repo built (repo)

The `DreamLimited/dream-curriculum` repo was created as the human-facing, concept-first rendering of the Dream pursuit doctrine ("one doctrine, two renderings" — the DNA corpus is the machine rendering):

- **`doctrine/`** — eight durable concepts, each ending with a 3-question self-check: where the money lives, RFPs/NOFOs and solicitations, the pursuit pipeline, gates and governance, scoring and price-to-win, the ORBITAL business structure, the Dream → ORBITAL → World lifecycle, and the stack-agnostic principle.
- **`literacy/`** — the reference layer: glossary, acronym decoder, how-to-read-an-RFP, how-to-read-a-NOFO, where-the-money-flows.
- **`modules/`** — the module template, the six-session shared core, and three audience tracks (Strategic Initiative, MBA, MPA).
- **`course/`** — the 14-week syllabus, the assessments and rubric, and the capstone brief.
- **`case-study/ravonics.md`** — the shared canary company (HUBZone, UEI `YCBDVKN1A9G7`, CAGE `20DS8`, four NAICS codes, INSTAR Lab STTR partner).
- **`align/concept-to-system-map.md`** — the concept ↔ fellowship ↔ DNA artifact map (DNA v0.18.1), plus the degree ↔ fellowship ↔ course crosswalk.
- `render/` scripts and `dist/` output for .docx/.pdf publishing.

---

## Template for new entries

```markdown
## YYYY-MM-DD — Short title (repo / sandbox / both)

- What changed, in one or two lines.
- Why it changed, if it is not obvious.
- Any follow-ups that were not done in the same change (be honest).
```
