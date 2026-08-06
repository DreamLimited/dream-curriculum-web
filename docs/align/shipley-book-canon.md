---
title: "Shipley Book / Discipline Canon → Curriculum Map"
---

# Shipley Book / Discipline Canon → Curriculum Map

*The authoritative-source index: for every Shipley/APMP book and discipline, where the curriculum teaches the concept and where the machine encodes it — so a student can go from "curriculum concept" to "read the authoritative source," and an integrator can see the one canon behind both renderings.*

> **License note.** Shipley and APMP publications are commercial, copyrighted works. The Dream DNA corpus paraphrases them in DreamLimited's operating vocabulary (see `docs/licensing-shipley-corpus.md` and `docs/licensing-apmp-corpus.md` in `DreamLimited/dna`); it does not reproduce them verbatim. This page points students at the *original* authoritative sources for reading — it does not substitute for them.

## How to read this page

- **Part A — the Shipley canon.** The five Shipley Associates publications/disciplines, what each covers, the curriculum home, the DNA encoding, and the stack-agnostic concept.
- **Part B — the APMP canon.** The APMP Body of Knowledge and the process standards, plus the certification ladder.
- **Part C — the discipline-to-source map.** A one-glance table: curriculum concept → authoritative source.
- **Part D — citation honesty.** What is cited where, and the licensing rule.

---

# Part A — The Shipley canon

Shipley Associates has been teaching its capture-and-proposal method since the 1970s and gave the profession most of its shared vocabulary — capture plans, win themes, discriminators, ghost themes, color teams, the compliance matrix. The DNA corpus carries a paraphrase of the method (see `[shipley-dna-fusion-map.md](shipley-dna-fusion-map.md)` Part A), and this curriculum teaches the same concepts at doctrine altitude.

## A.1 The Shipley Business Development Lifecycle / Business Development Process Guide

| Canon element | What it covers | Curriculum home | DNA encoding (v0.18.2) |
|---|---|---|---|
| **Business Development Process Guide** (Shipley's BD lifecycle — the five-phase marketing → capture → proposal → negotiate → award arc, formalized as a 7-gate/7-phase process) | The whole business-development arc: market segmentation, long-term positioning, opportunity assessment, capture/opportunity planning, proposal planning, proposal development, post-submittal activities | [literacy/industry-standard-canon.md](../literacy/industry-standard-canon.md) (the BD lifecycle mapped onto the course); [doctrine/03-the-pursuit-pipeline.md](../doctrine/03-the-pursuit-pipeline.md); [modules/shared-core.md](../modules/shared-core.md) Session 2 | `rules/shipley-capture-gates.yaml` (the 7-gate registry), `playbooks/shipley-capture.md` (gates 1–4), `playbooks/shipley-proposal.md` (gates 5–7), `playbooks/pipeline-doctrine.md` |
| **The seven-gate review ladder** | The decision checkpoints with entry/exit criteria: market → opportunity → pursuit → capture readiness → proposal → submission → post-submission | [doctrine/04-gates-and-governance.md](../doctrine/04-gates-and-governance.md); [literacy/industry-standard-canon.md](../literacy/industry-standard-canon.md) (the 7-gate ladder); [course/undergraduate-210-capture-and-pursuit-pipeline.md](../course/undergraduate-210-capture-and-pursuit-pipeline.md) | `rules/shipley-capture-gates.yaml` |

## A.2 Shipley Capture Guide

| Canon element | What it covers | Curriculum home | DNA encoding (v0.18.2) |
|---|---|---|---|
| **Shipley Capture Guide** | The capture discipline: the capture window, opportunity assessment, the capture plan, customer engagement, discriminators vs. baselines, ghost themes, the capture readiness review, bid/no-bid | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md) (the entire chapter); [modules/graduate/elective-competitive-market-intelligence.md](../modules/graduate/elective-competitive-market-intelligence.md) (GE 630) | `rules/capture.yaml`, `rules/bid-no-bid.yaml`, `rules/teaming.yaml`, `rules/incumbent-displacement.yaml`, `playbooks/shipley-capture.md`, `playbooks/01-pre-rfp.md`, `formulas/capture-readiness-index.formula.yaml`, `formulas/bid-no-bid-rubric.formula.yaml`, `formulas/pwin-shipley.formula.yaml`, `prompts/personas/capture-manager.md`, `rag-corpus/shipley-capture-proposal-guide/` |
| **Capture plan** | The written declaration of how the pursuit will be won | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md) (capture-plan section) | `rules/capture.yaml` (win-strategy phase), `playbooks/shipley-capture.md` (phase map) |
| **Win themes / discriminators / ghost themes** | The differentiation vocabulary | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md); [modules/graduate/elective-competitive-market-intelligence.md](../modules/graduate/elective-competitive-market-intelligence.md) | `rag-corpus/shipley-capture-proposal-guide/shipley-customer-centric-framing.md`, `shipley-discriminators-vs-baselines.md`, `shipley-ghost-themes.md`; `prompts/personas/discriminator-analyst.md` |

## A.3 Shipley Proposal Guide

| Canon element | What it covers | Curriculum home | DNA encoding (v0.18.2) |
|---|---|---|---|
| **Shipley Proposal Guide** (the classic "red book," authored by Larry Newman; selected as a primary reference for the APMP Foundation exam) | Proposal production discipline: strategy, customer focus, outlining, storyboards, reviews, compliance, submission | [doctrine/02-rfps-and-solicitations.md](../doctrine/02-rfps-and-solicitations.md); [doctrine/03-the-pursuit-pipeline.md](../doctrine/03-the-pursuit-pipeline.md) (design/audit/submit); [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md) (GE 640); [course/undergraduate-302-proposal-production-and-compliance.md](../course/undergraduate-302-proposal-production-and-compliance.md) (DL 302) | `playbooks/shipley-proposal.md`, `playbooks/02-rfp-decode.md` … `04-proposal-production.md`, `rules/color-team.yaml`, `rules/submission.yaml`, `rules/section-l-format-compliance.yaml`, `formulas/compliance_parser.py`, `formulas/quality_gate.py`, `prompts/personas/proposal-manager.md` |
| **Color-team review cadence** | Pink → Red → Gold → White-Glove review discipline | [literacy/how-color-teams-work.md](../literacy/how-color-teams-work.md); [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md) | `rules/color-team.yaml`, `rules/apmp-color-teams.yaml`, `prompts/critics/*.md`, `rag-corpus/shipley-capture-proposal-guide/shipley-color-team-cadence.md` |
| **The compliance matrix** | The spine of a compliant, persuasive proposal | [doctrine/02-rfps-and-solicitations.md](../doctrine/02-rfps-and-solicitations.md); [literacy/the-four-volumes.md](../literacy/the-four-volumes.md) | `playbooks/compliance-matrix/compliance-matrix.yaml`, `playbooks/apmp/apmp-compliance-matrix.md`, `rag-corpus/shipley-capture-proposal-guide/shipley-compliance-spine.md` |

## A.4 Winning Business

| Canon element | What it covers | Curriculum home | DNA encoding (v0.18.2) |
|---|---|---|---|
| **Winning Business** (Shipley's integrated methodology/workshop brand — the complete set of the above guides used together) | Competitive positioning across the whole BD lifecycle: how a firm wins business in the government market, methodically | [literacy/industry-standard-canon.md](../literacy/industry-standard-canon.md) (the canon as one system); [modules/strategic-initiative.md](../modules/strategic-initiative.md) (the doctrine as an operating system); [modules/shared-core.md](../modules/shared-core.md) | The DNA corpus as a whole is the machine encoding of the integrated method: `rules/`, `playbooks/`, `formulas/`, `prompts/`, `rag-corpus/` composed by `playbooks/dream-sequence/autonomous-capture-dream-sequence.yaml` |

## A.5 Pre-Written Sections (Shipley's proposal content library)

| Canon element | What it covers | Curriculum home | DNA encoding (v0.18.2) |
|---|---|---|---|
| **Pre-Written Sections** (Shipley's library of pre-approved, reusable proposal content modules) | Content management: centrally curated, reusable proposal sections (executive summaries, past performance, methodology, case studies) to cut production time and keep voice/formatting consistent | [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md) (GE 640 — production system); [literacy/the-four-volumes.md](../literacy/the-four-volumes.md) | `playbooks/volumes/*.yaml`, `playbooks/documents/*.yaml`, `playbooks/pricing/*.yaml`, `playbooks/sbir-proposals/_base.md` (the reusable structural templates); `rag-corpus/dreamlimited-past-performance/` (DreamLimited's own reusable PP content) |

---

# Part B — The APMP canon

## B.1 The Body of Knowledge and process standards

| Canon element | What it covers | Curriculum home | DNA encoding (v0.18.2) |
|---|---|---|---|
| **APMP Body of Knowledge (BOK)** | The reference standard and shared framework/terminology of the bid, proposal, and capture profession | [literacy/industry-standard-canon.md](../literacy/industry-standard-canon.md) (the canon, named); [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md); [research/competency-model.md](../research/competency-model.md) | `rag-corpus/apmp-bok/` (8 chunks), `playbooks/apmp/*` (5 playbooks), `rules/apmp-color-teams.yaml`, `rag-corpus/apmp-references.md` |
| **APMP Proposal Process Standards** | Process-focused guidance on the proposal lifecycle | [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md) | `playbooks/apmp/apmp-proposal-flow.md` |
| **APMP Capture Process Standards** | Capture-focused guidance | [modules/graduate/elective-competitive-market-intelligence.md](../modules/graduate/elective-competitive-market-intelligence.md); [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md) | `rules/capture.yaml`, `playbooks/shipley-capture.md` |

## B.2 The certification ladder

| Certification | What it certifies | Curriculum home |
|---|---|---|
| **APMP Foundation** | Entry-level knowledge of the discipline, assessed against the BOK (Shipley Proposal Guide is a primary reference) | [literacy/industry-standard-canon.md](../literacy/industry-standard-canon.md) (certification landscape); [research/credential-mapping.md](../research/credential-mapping.md) |
| **APMP Practitioner / Capture Practitioner** | Applied mastery of proposal / capture work | [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md); [modules/graduate/elective-competitive-market-intelligence.md](../modules/graduate/elective-competitive-market-intelligence.md) |
| **APMP Professional** | Senior credential: demonstrated leadership + measurable impact | [modules/doctoral/research-agenda.md](../modules/doctoral/research-agenda.md); [modules/strategic-initiative.md](../modules/strategic-initiative.md) |
| **Shipley certification (star-based, APMP-accredited)** | Correct application of Shipley's method in real work | [literacy/industry-standard-canon.md](../literacy/industry-standard-canon.md) |

---

# Part C — The discipline-to-source map (curriculum concept → authoritative source)

*The reverse look-up: a student who has read a curriculum concept goes here to find the authoritative book. This is the "read the original" index.*

| Curriculum concept | Where taught | Authoritative source to read |
|---|---|---|
| Where the money lives / the market | [doctrine/01](../doctrine/01-where-the-money-lives.md) | Shipley Business Development Process Guide (market segmentation phase); APMP BOK (opportunity pipeline management); FAR Part 2 |
| The pursuit pipeline | [doctrine/03](../doctrine/03-the-pursuit-pipeline.md) | Shipley Business Development Lifecycle Guide; APMP BOK (lifecycle stages) |
| Gates & governance | [doctrine/04](../doctrine/04-gates-and-governance.md) | Shipley Business Development Process Guide (the 7-gate ladder); APMP BOK (bid/no-bid gate) |
| Scoring & price-to-win | [doctrine/05](../doctrine/05-scoring-and-price-to-win.md) | Shipley Proposal Guide (price as strategy); Shipley Capture Guide (pricing posture) |
| The ORBITAL structure | [doctrine/06](../doctrine/06-orbital-business-structure.md) | *DreamLimited's own doctrine* (O.R.B.I.T.A.L. / UBF) — not a Shipley/APMP source |
| Capture & competitive strategy | [doctrine/09](../doctrine/09-capture-and-competitive-strategy.md) | **Shipley Capture Guide** (primary); APMP Capture Process Standards |
| Win themes / discriminators / ghost themes | [doctrine/09](../doctrine/09-capture-and-competitive-strategy.md) | Shipley Capture Guide (win strategy chapters); APMP BOK (win themes and discriminators) |
| Color teams | [literacy/how-color-teams-work.md](../literacy/how-color-teams-work.md) | Shipley Proposal Guide (color-team cadence); APMP BOK (review standards) |
| The four volumes + compliance | [literacy/the-four-volumes.md](../literacy/the-four-volumes.md) | Shipley Proposal Guide (volume/outline discipline, compliance matrix); APMP BOK (compliance management) |
| Proposal production | [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md) | **Shipley Proposal Guide** (primary); APMP Proposal Process Standards |
| Post-submission, orals, FPR, debrief | [doctrine/10](../doctrine/10-post-submission-and-win.md) | Shipley Business Development Lifecycle Guide (post-submittal activities); APMP BOK (post-submission) |
| Teaming / JV / subcontracting | [modules/graduate/elective-teaming-jv-subcontracting.md](../modules/graduate/elective-teaming-jv-subcontracting.md) | APMP BOK (teaming & partnerships); 13 CFR 121/125 (SBA affiliation/JV) — the legal text |
| FAR / DFARS | [course/undergraduate-301-procurement-law-and-far-fundamentals.md](../course/undergraduate-301-procurement-law-and-far-fundamentals.md) | **FAR** (acquisition.gov) and **DFARS** — the law itself, not a book |
| Price-to-win finance (DCAA/CAS/TINA) | [modules/graduate/advanced-finance.md](../modules/graduate/advanced-finance.md) | FAR Part 31 (cost principles); DCAA Contract Audit Manual; CAS; TINA (10 U.S.C./41 U.S.C.) — the regulatory text |
| SBIR / STTR | [doctrine/01](../doctrine/01-where-the-money-lives.md) | SBIR/STTR statutes + SBA SBIR Policy Directive; sbir.gov |
| Certification landscape | [literacy/industry-standard-canon.md](../literacy/industry-standard-canon.md) | APMP BOK + APMP certification program; Shipley training/certification |

---

# Part D — Citation honesty

1. **No invented editions.** Shipley titles are cited by title (Shipley Capture Guide, Shipley Proposal Guide, Shipley Business Development Lifecycle Guide / Business Development Process Guide) without specific edition numbers, because the DNA corpus paraphrases the *current* edition and this repo must not assert an edition it has not verified. APMP BOK is cited as "v4" where the DNA provenance cites it; otherwise as "the current BOK."
2. **License-clean corpus.** Every Shipley/APMP-derived DNA artifact restates the concept in DreamLimited's operating vocabulary; verbatim Shipley/APMP text is never reproduced. Students who want the authoritative text must buy/borrow the original publication — this map points them there.
3. **The concept is the durable thing.** The Shipley books and the APMP BOK are the *canon*; the DNA corpus is the machine encoding of that canon; the curriculum is the human rendering of that canon. When a new Shipley/APMP edition changes vocabulary, the change is recorded in the DNA map (`shipley-dna-fusion-map.md`) and this book canon — never by rewriting a doctrine file.
4. **Where the two canons overlap.** Shipley owns the seven-gate BD lifecycle topology; APMP layers production-discipline detail on Shipley's color-team cadence. Both are carried in DNA (`rules/shipley-capture-gates.yaml` + `rules/color-team.yaml` for Shipley; `rules/apmp-color-teams.yaml` + `playbooks/apmp/*` for APMP). The overlap is complementary, not duplicate.
