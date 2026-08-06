---
title: "Shipley × Dream DNA Fusion Map"
---

# Shipley × Dream DNA Fusion Map

*The master crosswalk between the full Shipley/APMP canon, the Dream DNA machine corpus, and this human curriculum. Every discipline and gate in the business-development canon is traced three ways: what the canon says, where the machine encodes it, and where the curriculum teaches it — with the stack-agnostic rendering note that keeps the concept stable when the tooling swaps.*

> This map is the **fusion seam** between two already-fused layers. It is deliberately **not** a replacement for [`align/concept-to-system-map.md`](concept-to-system-map.md) — that map is the durable concept ↔ stack mapping that must not drift; this map is the **Shipley-side discipline index** that shows, for every canonical discipline and gate, the matching DNA artifact and the matching curriculum home. The concept column in both files is stable; the DNA column changes with the DNA version.

## DNA version pin

All DNA paths below are verified at **`DreamLimited/dna` `v0.18.2`** (2026-08-05). When DNA bumps, update this map's DNA columns — never the doctrine (`doctrine/08-tools-change-concepts-dont.md`). Provenance for every Shipley/APMP-derived DNA artifact is documented in `rag-corpus/shipley-citations.md`, `rag-corpus/apmp-references.md`, `docs/licensing-shipley-corpus.md`, and `docs/licensing-apmp-corpus.md`.

| Version source | Value |
|---|---|
| `VERSION` (dna repo root, authoritative) | `0.18.2` |
| `dna-manifest.yaml` → `metadata.version` | `v0.18.2` |
| Curriculum `VERSION` | `0.5.1` |

## How to read this map

- **Part A — Shipley → DNA → curriculum.** One row per canonical Shipley/APMP discipline or gate. This is the primary index a student, instructor, or integrator reads.
- **Part B — DNA → Shipley.** The reverse index: given a DNA artifact family, which Shipley/APMP discipline does it serve? Use this when working from the machine side (a new DNA rule must know which canon it instantiates).
- **Part C — The stack-agnostic rendering rule.** The one-sentence concept behind each discipline, stated so it survives any tool change.
- **Part D — Fusion honesty.** Gaps called out explicitly, both directions (Shipley discipline with no DNA home; DNA content with no curriculum home).

---

# Part A — Shipley/APMP discipline → Dream DNA → curriculum

## A.1 The BD lifecycle (marketing → capture → proposal → negotiate → award)

| Shipley/APMP discipline | Dream DNA artifact(s) (v0.18.2) | Curriculum home (this repo) | Stack-agnostic rendering |
|---|---|---|---|
| **Full BD lifecycle** (the five-phase arc) | `rules/shipley-capture-gates.yaml` (gate registry), `playbooks/shipley-capture.md`, `playbooks/shipley-proposal.md`, `playbooks/pipeline-doctrine.md`, `rules/growth-lifecycle.yaml` | [doctrine/03-the-pursuit-pipeline.md](../doctrine/03-the-pursuit-pipeline.md), [literacy/industry-standard-canon.md](../literacy/industry-standard-canon.md), [modules/shared-core.md](../modules/shared-core.md) Session 2, [modules/strategic-initiative.md](../modules/strategic-initiative.md) | The five-phase arc is a durable concept; the pursuit pipeline is the same shape in this course's vocabulary. Software (dream-track, ERPNext, the agent relay) is a swappable encoding — never the concept. |
| **Market segmentation / long-range pipeline shaping** | `rules/shipley-capture-gates.yaml` (`gate-1-market`), `rules/source-now-data-manifest.yaml` (7 data planes), `playbooks/01-pre-rfp.md` | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md), [modules/strategic-initiative.md](../modules/strategic-initiative.md) Session SI-2 | "Where you play" is a decision, not a system. NAICS, agencies, vehicles, and connectors are the current instruments. |
| **Marketing → capture handoff (Gate 1–2 boundary)** | `rules/capture.yaml` (opportunity-identification phase), `playbooks/01-pre-rfp.md` | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md) | The line between "market" and "capture" is drawn by the opportunity being identified, not by any tool. |
| **Negotiate phase** | `playbooks/06-post-submission.md`, `prompts/stages/handoff.md`, `rules/pricing-floor.yaml` (defends the negotiated position) | [doctrine/10-post-submission-and-win.md](../doctrine/10-post-submission-and-win.md), [course/undergraduate-305-negotiations.md](../course/undergraduate-305-negotiations.md) (DL 305), [modules/graduate/elective-negotiations-pricing-posture.md](../modules/graduate/elective-negotiations-pricing-posture.md) (GE 610) | Negotiation defends a position built in capture; there is no "negotiation tool" — only a prepared position. |
| **Award / delivery / learn** | `rules/past-performance-retrieval.yaml`, `playbooks/06-post-submission.md`, `rules/cosmology-loop.yaml` | [doctrine/07-lifecycle-dream-orbital-world.md](../doctrine/07-lifecycle-dream-orbital-world.md), [doctrine/10-post-submission-and-win.md](../doctrine/10-post-submission-and-win.md) | Award is a milestone; the outcome feeds the next pWin. The cosmology loop is the machine name for the same idea. |

## A.2 The seven-gate review ladder

| Shipley/APMP discipline | Dream DNA artifact(s) (v0.18.2) | Curriculum home (this repo) | Stack-agnostic rendering |
|---|---|---|---|
| **The seven-gate ladder (Gate 1 Market → Gate 7 Post-Submission)** | `rules/shipley-capture-gates.yaml` (canonical registry: `gate-1-market` … `gate-7-postsubmission`), `playbooks/shipley-capture.md` (gates 1–4), `playbooks/shipley-proposal.md` (gates 5–7), `rules/sbir-phase-gates.yaml` (SBIR overlay on the same ladder) | [literacy/industry-standard-canon.md](../literacy/industry-standard-canon.md) (7-gate ladder), [doctrine/04-gates-and-governance.md](../doctrine/04-gates-and-governance.md), [course/undergraduate-210-capture-and-pursuit-pipeline.md](../course/undergraduate-210-capture-and-pursuit-pipeline.md) (DL 210) | A gate is *trigger + criteria + decision + owner* (Doctrine 04). The gate *registry* is the machine encoding; the gate *idea* is durable. |
| **Gate 1 — Market segmentation** | `rules/shipley-capture-gates.yaml` (`gate-1-market`), `rules/source-now-data-manifest.yaml` | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md) | Choosing where to play. |
| **Gate 2 — Opportunity identification & qualification** | `rules/shipley-capture-gates.yaml` (`gate-2-opportunity`), `rules/capture.yaml`, `rules/naics-alignment.yaml`, `rules/sba-size-standards.yaml` | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md), [modules/mba.md](../modules/mba.md) (certifications as go-to-market) | Hard knockout: eligibility (size, set-aside, NAICS) before fit. |
| **Gate 3 — Pursuit decision (bid/no-bid)** | `rules/shipley-capture-gates.yaml` (`gate-3-pursuit`), `rules/bid-no-bid.yaml`, `formulas/bid-no-bid-rubric.formula.yaml`, `formulas/bid_no_bid_rubric.py`, `formulas/pwin-shipley.formula.yaml`, `formulas/pwin_scorer.py`, `formulas/risk_score.py`, `prompts/personas/bid-no-bid-analyst.md` | [doctrine/04-gates-and-governance.md](../doctrine/04-gates-and-governance.md) (bid/no-bid gate), [doctrine/05-scoring-and-price-to-win.md](../doctrine/05-scoring-and-price-to-win.md), [course/undergraduate-210-capture-and-pursuit-pipeline.md](../course/undergraduate-210-capture-and-pursuit-pipeline.md) | The five-dimension weighted rubric (customer intimacy, capability fit, strategic attractiveness, pWin, financial impact) → discrete **BID / BID_WITH_CONDITIONS / NO_BID**. |
| **Gate 4 — Capture readiness** | `rules/shipley-capture-gates.yaml` (`gate-4-capture`), `rules/capture.yaml` (readiness review), `formulas/capture-readiness-index.formula.yaml`, `formulas/capture_readiness_index.py`, `playbooks/shipley-capture.md` | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md) (readiness review), [modules/graduate/elective-competitive-market-intelligence.md](../modules/graduate/elective-competitive-market-intelligence.md) (GE 630) | Readiness = win strategy clear, customer understood, teaming solid, key personnel identified, competitive landscape mapped, technical approach credible. Outcome: proceed / defer / withdraw. |
| **Gate 5 — Proposal planning & production** | `rules/shipley-capture-gates.yaml` (`gate-5-proposal`), `rules/color-team.yaml`, `rules/apmp-color-teams.yaml`, `playbooks/shipley-proposal.md`, `playbooks/apmp/apmp-proposal-flow.md`, `playbooks/04-proposal-production.md` | [doctrine/03-the-pursuit-pipeline.md](../doctrine/03-the-pursuit-pipeline.md) (design/audit), [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md) (GE 640), [course/undergraduate-302-proposal-production-and-compliance.md](../course/undergraduate-302-proposal-production-and-compliance.md) (DL 302) | Compliance spine + storyboard + color reviews + volume production against a deadline. |
| **Gate 6 — Submission mechanics** | `rules/shipley-capture-gates.yaml` (`gate-6-submission`), `rules/submission.yaml`, `playbooks/apmp/apmp-white-glove.md`, `formulas/quality_gate.py` | [doctrine/03-the-pursuit-pipeline.md](../doctrine/03-the-pursuit-pipeline.md) (submit), [literacy/how-color-teams-work.md](../literacy/how-color-teams-work.md) (White-Glove), [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md) | The pre-submission checklist is the last safety net; the external submission click is a human gate per ADR 0016. |
| **Gate 7 — Post-submission** | `rules/shipley-capture-gates.yaml` (`gate-7-postsubmission`), `playbooks/06-post-submission.md`, `prompts/stages/handoff.md`, `rules/past-performance-retrieval.yaml` | [doctrine/10-post-submission-and-win.md](../doctrine/10-post-submission-and-win.md), [modules/graduate/elective-negotiations-pricing-posture.md](../modules/graduate/elective-negotiations-pricing-posture.md) (GE 610) | Q&A, orals, FPR, negotiation, debrief, lessons-learned. |

## A.3 Capture and competitive strategy

| Shipley/APMP discipline | Dream DNA artifact(s) (v0.18.2) | Curriculum home (this repo) | Stack-agnostic rendering |
|---|---|---|---|
| **Capture as a discipline** (distinct from proposal) | `rules/capture.yaml`, `playbooks/shipley-capture.md`, `playbooks/01-pre-rfp.md`, `prompts/stages/capture.md`, `prompts/personas/capture-manager.md` | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md), [course/undergraduate-210-capture-and-pursuit-pipeline.md](../course/undergraduate-210-capture-and-pursuit-pipeline.md), [modules/graduate/elective-competitive-market-intelligence.md](../modules/graduate/elective-competitive-market-intelligence.md) | Capture creates position; proposal defends it. Progress is customer contact, not slide decks. |
| **The capture plan** | `rules/capture.yaml` (win-strategy / capture-plan phases), `playbooks/shipley-capture.md` (phase map), `playbooks/01-pre-rfp.md` | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md) (capture-plan section), [modules/graduate/elective-competitive-market-intelligence.md](../modules/graduate/elective-competitive-market-intelligence.md) | A capture plan is a written declaration of *how this pursuit will be won* — win strategy, customer, solution, team, competitive landscape. |
| **Win themes / customer-centric framing** | `playbooks/03-proposal-strategy.md`, `rag-corpus/shipley-capture-proposal-guide/shipley-customer-centric-framing.md`, `rag-corpus/apmp-bok/apmp-win-themes-and-discriminators.md` | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md) (win themes), [literacy/glossary.md](../literacy/glossary.md) | "You achieve Y by working with us," not "we offer X." The linguistic test (can it be prefaced with "you will") is concept, not tool. |
| **Discriminators vs. baseline features** | `rag-corpus/shipley-capture-proposal-guide/shipley-discriminators-vs-baselines.md`, `rag-corpus/apmp-bok/apmp-win-themes-and-discriminators.md`, `prompts/personas/discriminator-analyst.md`, `rules/capture.yaml` | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md) (discriminator discipline), [modules/graduate/elective-competitive-market-intelligence.md](../modules/graduate/elective-competitive-market-intelligence.md) (GE 630) | Discriminators move scores; baselines do not. A discriminator passes a three-check test (unique, defensible, evidence-backed). |
| **Ghost themes** | `rag-corpus/shipley-capture-proposal-guide/shipley-ghost-themes.md`, `prompts/personas/discriminator-analyst.md`, `rules/capture.yaml` | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md) (ghost-theme section), [modules/graduate/elective-competitive-market-intelligence.md](../modules/graduate/elective-competitive-market-intelligence.md) | Naming a competitor's weakness without naming them. Only as good as the capture intelligence behind it. |
| **Competitive analysis / competitor intelligence** | `rules/incumbent-displacement.yaml`, `formulas/incumbency-pressure.formula.yaml`, `formulas/incumbency_pressure.py`, `contracts/v1/competitor-graph.v1.schema.json`, `prompts/critics/black-hat.md`, `playbooks/strategic-positioning.md`, `rules/strategic-positioning-patterns.yaml` | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md) (black-hat), [modules/graduate/elective-competitive-market-intelligence.md](../modules/graduate/elective-competitive-market-intelligence.md) (GE 630), [literacy/how-color-teams-work.md](../literacy/how-color-teams-work.md) (Black-Hat) | The public-record boundary is absolute (FPDS / USAspending / SAM). Competitor facts feed incumbency pressure and displacement posture — never source-selection-sensitive data. |
| **Teaming / JV / subcontracting** | `rules/teaming.yaml`, `formulas/teaming-recommender.formula.yaml`, `formulas/teaming_recommender.py`, `contracts/v1/teaming-recommendation.v1.schema.json`, `rag-corpus/sba-naics-sbir-gsa/sba-affiliation-rules.md`, `rag-corpus/sba-naics-sbir-gsa/sba-joint-venture-rules.md`, `playbooks/sbir-capture-workflow.md` | [modules/graduate/elective-teaming-jv-subcontracting.md](../modules/graduate/elective-teaming-jv-subcontracting.md) (GE 620), [course/undergraduate-303-government-contracts-and-subcontracting.md](../course/undergraduate-303-government-contracts-and-subcontracting.md) (DL 303), [modules/mba.md](../modules/mba.md) | Teaming posture (prime solo, prime+subs, subcontractor, JV, mentor-protege) converts BID_WITH_CONDITIONS into BID. SBA affiliation / JV rules are legal facts. |
| **SBIR / STTR capture (Shipley gates adapted)** | `rules/sbir-capture-workflow.yaml`, `rules/sbir-phase-gates.yaml`, `rules/sbir-phase-ii-transition.yaml`, `rules/sbir-proposal-templates.yaml`, `playbooks/sbir-capture-workflow.md`, `playbooks/sbir/phase-i.md`, `playbooks/sbir/phase-ii.md`, `playbooks/sbir/phase-iii.md`, `formulas/trl-assessment.formula.yaml`, `formulas/trl_assessment.py` | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md) (SBIR/STTR), [modules/undergraduate/README.md](../modules/undergraduate/README.md) (DL 210/303 SBIR coverage), [modules/graduate/elective-competitive-market-intelligence.md](../modules/graduate/elective-competitive-market-intelligence.md) | SBIR phases (I→II→III, 15 USC 638) ride on the same Shipley gate ladder; NASA TRL 1–9 is the technology-readiness concept. |

## A.4 Proposal production and the four volumes

| Shipley/APMP discipline | Dream DNA artifact(s) (v0.18.2) | Curriculum home (this repo) | Stack-agnostic rendering |
|---|---|---|---|
| **Proposal management / production** | `playbooks/shipley-proposal.md`, `playbooks/apmp/apmp-proposal-flow.md`, `playbooks/04-proposal-production.md`, `prompts/personas/proposal-manager.md`, `prompts/stages/proposal.md`, `rules/color-team.yaml` | [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md) (GE 640), [course/undergraduate-302-proposal-production-and-compliance.md](../course/undergraduate-302-proposal-production-and-compliance.md) (DL 302), [modules/shared-core.md](../modules/shared-core.md) | Proposal production is a factory with a deadline and a quality bar: roles, schedule, page budget, risk. |
| **The compliance matrix / compliance spine** | `playbooks/compliance-matrix/compliance-matrix.yaml`, `playbooks/apmp/apmp-compliance-matrix.md`, `formulas/compliance_parser.py`, `rules/section-l-format-compliance.yaml`, `rag-corpus/shipley-capture-proposal-guide/shipley-compliance-spine.md`, `prompts/personas/compliance-officer.md` | [doctrine/02-rfps-and-solicitations.md](../doctrine/02-rfps-and-solicitations.md) (compliance reading), [literacy/the-four-volumes.md](../literacy/the-four-volumes.md), [course/undergraduate-302-proposal-production-and-compliance.md](../course/undergraduate-302-proposal-production-and-compliance.md), [modules/mpa.md](../modules/mpa.md) | Every Section L/M/C requirement gets an ID and a response section; coverage gaps block transitions. |
| **Section L / Section M decode** | `rules/section-l-format-compliance.yaml`, `playbooks/02-rfp-decode.md`, `playbooks/compliance-matrix/compliance-matrix.yaml`, `formulas/compliance_parser.py` | [doctrine/02-rfps-and-solicitations.md](../doctrine/02-rfps-and-solicitations.md), [literacy/how-to-read-an-rfp.md](../literacy/how-to-read-an-rfp.md) | Section L is the instructions, Section M is the evaluation; misreading either compounds into every volume. |
| **Storyboarding** | `playbooks/apmp/apmp-storyboard.md`, `prompts/personas/storyboard-author.md`, `rag-corpus/apmp-bok/apmp-storyboard-discipline.md` | [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md) (GE 640), [course/undergraduate-302-proposal-production-and-compliance.md](../course/undergraduate-302-proposal-production-and-compliance.md) | Storyboards precede drafting: one frame per section with theme, discriminator, evidence, and win-theme link. |
| **Technical volume (Volume I)** | `playbooks/volumes/technical-volume.yaml`, `rules/orbital-to-proposal-map.yaml`, `rules/section-l-format-compliance.yaml` | [literacy/the-four-volumes.md](../literacy/the-four-volumes.md) (Volume I), [doctrine/06-orbital-business-structure.md](../doctrine/06-orbital-business-structure.md), [course/undergraduate-302-proposal-production-and-compliance.md](../course/undergraduate-302-proposal-production-and-compliance.md) | Understanding, methodology, innovation, risk, security, transition — the intellectual heart of the proposal. |
| **Management volume (Volume II)** | `playbooks/volumes/management-volume.yaml`, `playbooks/documents/key-personnel-resume.yaml`, `playbooks/documents/org-chart.yaml`, `rules/orbital-to-proposal-map.yaml` | [literacy/the-four-volumes.md](../literacy/the-four-volumes.md) (Volume II), [doctrine/06-orbital-business-structure.md](../doctrine/06-orbital-business-structure.md) | Organization, key personnel, staffing, communication, quality — the Section M management factor. |
| **Past performance volume (Volume III)** | `playbooks/volumes/past-performance-volume.yaml`, `rules/past-performance-retrieval.yaml`, `rag-corpus/dreamlimited-past-performance/`, `prompts/personas/past-performance-narrator.md` | [literacy/the-four-volumes.md](../literacy/the-four-volumes.md) (Volume III), [doctrine/10-post-submission-and-win.md](../doctrine/10-post-submission-and-win.md), [doctrine/07-lifecycle-dream-orbital-world.md](../doctrine/07-lifecycle-dream-orbital-world.md) | FAR 15.305(a)(2) relevance/quality/schedule/cost control; only awarded/performed records are citable. |
| **Pricing / cost volume (Volume IV)** | `playbooks/pricing/cost-volume.yaml`, `playbooks/pricing/boe-template.yaml`, `playbooks/pricing/labor-categories.yaml`, `formulas/loe-burdened-rate.formula.yaml`, `formulas/loe_burdened_rate.py`, `formulas/pricing_validator.py` | [literacy/the-four-volumes.md](../literacy/the-four-volumes.md) (Volume IV), [doctrine/05-scoring-and-price-to-win.md](../doctrine/05-scoring-and-price-to-win.md), [modules/graduate/advanced-finance.md](../modules/graduate/advanced-finance.md) (GC 540) | Cost buildup, labor, fee, total evaluated price — and the four volumes must tell the same story. |
| **One-story reconciliation (technical ↔ cost)** | `playbooks/shipley-proposal.md` (principle 5), `playbooks/apmp/apmp-proposal-flow.md`, `formulas/pricing_validator.py` | [literacy/the-four-volumes.md](../literacy/the-four-volumes.md), [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md) | If the narrative promises 24/7 staffing, the cost volume prices 24/7 staffing. Verified at Red Team. |
| **Supporting documents** | `playbooks/documents/capability-statement.yaml`, `playbooks/documents/key-personnel-resume.yaml`, `playbooks/documents/org-chart.yaml` | [modules/mba.md](../modules/mba.md) (go-to-market), [literacy/the-four-volumes.md](../literacy/the-four-volumes.md), [course/undergraduate-303-government-contracts-and-subcontracting.md](../course/undergraduate-303-government-contracts-and-subcontracting.md) | Capability statements, key-personnel resumes, org charts are the standard supporting cast. |

## A.5 The review (color-team) system

| Shipley/APMP discipline | Dream DNA artifact(s) (v0.18.2) | Curriculum home (this repo) | Stack-agnostic rendering |
|---|---|---|---|
| **The color-team sequence (Blue/Pink/Red/Gold/White-Glove/Black-Hat)** | `rules/color-team.yaml` (sequence + rating scale), `rules/apmp-color-teams.yaml` (entry/exit + reviewer independence), `playbooks/apmp/apmp-color-teams.md`, `playbooks/apmp/apmp-white-glove.md`, `prompts/critics/pink-team.md`, `prompts/critics/red-team.md`, `prompts/critics/gold-team.md`, `prompts/critics/white-glove.md`, `prompts/critics/black-hat.md`, `formulas/quality_gate.py`, `rag-corpus/shipley-capture-proposal-guide/shipley-color-team-cadence.md`, `rag-corpus/apmp-bok/apmp-color-team-discipline.md`, `rag-corpus/apmp-bok/apmp-reviewer-independence.md` | [literacy/how-color-teams-work.md](../literacy/how-color-teams-work.md), [doctrine/04-gates-and-governance.md](../doctrine/04-gates-and-governance.md), [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md) (GE 640), [modules/strategic-initiative.md](../modules/strategic-initiative.md) | The sequence and each color's lens is the concept; the critic personas + apmp-color-teams rule + quality-gate formula are the machine encoding. Reviewers are independent of writers. |
| **Reviewer independence** | `rules/apmp-color-teams.yaml` (roster lock), `rag-corpus/apmp-bok/apmp-reviewer-independence.md`, `prompts/critics/*.md` | [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md), [literacy/how-color-teams-work.md](../literacy/how-color-teams-work.md) | No reviewer evaluates sections they drafted; otherwise it is a peer-check, not an evaluation. |
| **Finding specificity** | `rag-corpus/apmp-bok/apmp-finding-specificity.md`, `rules/apmp-color-teams.yaml`, `prompts/critics/*.md` (finding action-scope) | [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md) | "Section X is weak" is not a finding; a finding names the factor, the missing evidence, and the revision. |

## A.6 Scoring, price-to-win, and the cost/finance spine

| Shipley/APMP discipline | Dream DNA artifact(s) (v0.18.2) | Curriculum home (this repo) | Stack-agnostic rendering |
|---|---|---|---|
| **pWin / probability of win** | `formulas/pwin-shipley.formula.yaml`, `formulas/pwin_scorer.py`, `rules/growth-lifecycle.yaml` (pWin weights), `formulas/risk_score.py` | [doctrine/05-scoring-and-price-to-win.md](../doctrine/05-scoring-and-price-to-win.md), [course/undergraduate-220-pricing-and-price-to-win-fundamentals.md](../course/undergraduate-220-pricing-and-price-to-win-fundamentals.md) (DL 220) | pWin is a defensible opinion, factor-weighted and auditable — a seven-criteria Shipley-aligned composite, not a guess. |
| **Price-to-win / pricing posture** | `formulas/pricing-to-win.formula.yaml`, `formulas/pricing_to_win.py`, `rules/pricing-guardrails.yaml`, `rules/pricing-floor.yaml`, `prompts/personas/price-to-win.md`, `playbooks/pricing/cost-volume.yaml` | [doctrine/05-scoring-and-price-to-win.md](../doctrine/05-scoring-and-price-to-win.md), [course/undergraduate-220-pricing-and-price-to-win-fundamentals.md](../course/undergraduate-220-pricing-and-price-to-win-fundamentals.md), [modules/mba.md](../modules/mba.md), [modules/graduate/elective-negotiations-pricing-posture.md](../modules/graduate/elective-negotiations-pricing-posture.md) (GE 610) | Price-to-win is a *position* (floor, competitive range, evaluation), not a number. Competitor band + affordability ceiling + cost-plus-floor anchor, under a strategy-weighted composite. |
| **Burdened labor rates / cost buildup** | `formulas/loe-burdened-rate.formula.yaml`, `formulas/loe_burdened_rate.py`, `playbooks/pricing/boe-template.yaml`, `playbooks/pricing/labor-categories.yaml` | [modules/graduate/advanced-finance.md](../modules/graduate/advanced-finance.md) (GC 540), [doctrine/05-scoring-and-price-to-win.md](../doctrine/05-scoring-and-price-to-win.md), [modules/mba.md](../modules/mba.md) | Direct rate + fringe + overhead + G&A + fee = fully burdened billable rate; BOE documents why each cost element exists. |
| **Margin floors / pricing discipline** | `rules/pricing-floor.yaml`, `rules/pricing-guardrails.yaml`, `formulas/pricing_validator.py` | [doctrine/05-scoring-and-price-to-win.md](../doctrine/05-scoring-and-price-to-win.md), [modules/graduate/advanced-finance.md](../modules/graduate/advanced-finance.md) (GC 540), [modules/mba.md](../modules/mba.md) | Pricing floors are load-bearing minimums; short-term win pressure must not erode long-term margin health. |
| **Incumbency / displacement economics** | `rules/incumbent-displacement.yaml`, `formulas/incumbency-pressure.formula.yaml`, `formulas/incumbency_pressure.py`, `contracts/v1/competitor-graph.v1.schema.json` | [modules/graduate/elective-competitive-market-intelligence.md](../modules/graduate/elective-competitive-market-intelligence.md) (GE 630), [modules/graduate/microeconomics-of-procurement.md](../modules/graduate/microeconomics-of-procurement.md) (GC 501) | An entrenched incumbent with no displacement lever is a NO-BID signal; incumbency pressure is a 0–1 score fed from public-record facts. |
| **Bid/no-bid arithmetic** | `formulas/bid-no-bid-rubric.formula.yaml`, `formulas/bid_no_bid_rubric.py`, `formulas/pwin-shipley.formula.yaml`, `formulas/risk_score.py`, `rules/bid-no-bid.yaml` | [doctrine/05-scoring-and-price-to-win.md](../doctrine/05-scoring-and-price-to-win.md), [course/undergraduate-220-pricing-and-price-to-win-fundamentals.md](../course/undergraduate-220-pricing-and-price-to-win-fundamentals.md), [modules/undergraduate/README.md](../modules/undergraduate/README.md) | Score = pWin × value; threshold discipline keeps the pipeline honest. |
| **DCAA / CAS / TINA** | **Partial.** `rules/pricing-floor.yaml` (cost buildup), `playbooks/pricing/boe-template.yaml`, `playbooks/pricing/cost-volume.yaml` — **no dedicated DCAA/CAS/TINA rule or RAG chunk in v0.18.2** → gap (see Part D) | [modules/graduate/advanced-finance.md](../modules/graduate/advanced-finance.md) (GC 540 — FAR Cost Principles, DCAA, CAS, TINA), [doctrine/05-scoring-and-price-to-win.md](../doctrine/05-scoring-and-price-to-win.md) | The cost-accounting legal spine: how the government judges cost, audits it, and disciplines truth-in-negotiation. Taught fully at concept altitude; the machine encoding is incomplete. |

## A.7 Post-submission and win

| Shipley/APMP discipline | Dream DNA artifact(s) (v0.18.2) | Curriculum home (this repo) | Stack-agnostic rendering |
|---|---|---|---|
| **The evaluation corridor (post-submit)** | `playbooks/06-post-submission.md`, `prompts/stages/handoff.md`, `rules/submission.yaml` | [doctrine/10-post-submission-and-win.md](../doctrine/10-post-submission-and-win.md) | Watch the docket relentlessly; every communication logged. |
| **Orals / oral presentations** | `playbooks/05-orals.md`, `prompts/stages/review.md` | [doctrine/10-post-submission-and-win.md](../doctrine/10-post-submission-and-win.md) (orals), [modules/graduate/elective-negotiations-pricing-posture.md](../modules/graduate/elective-negotiations-pricing-posture.md) (GE 610) | The proposal in person: themes align, roles pre-decided, practice to a stopwatch, Q&A bank, bring the people you proposed. |
| **Discussions & FPR** | `playbooks/06-post-submission.md`, `prompts/stages/handoff.md`, `rules/submission.yaml` | [doctrine/10-post-submission-and-win.md](../doctrine/10-post-submission-and-win.md) (FPR section), [modules/graduate/elective-negotiations-pricing-posture.md](../modules/graduate/elective-negotiations-pricing-posture.md) | FPR is a compressed proposal cycle, not a patch job. |
| **Negotiation posture** | `playbooks/06-post-submission.md`, `rules/pricing-floor.yaml` | [doctrine/10-post-submission-and-win.md](../doctrine/10-post-submission-and-win.md), [course/undergraduate-305-negotiations.md](../course/undergraduate-305-negotiations.md) (DL 305), [modules/graduate/elective-negotiations-pricing-posture.md](../modules/graduate/elective-negotiations-pricing-posture.md) (GE 610) | Defend the position built in capture: capture intel, cost buildup, risk register. BATNA / ZOPA / interests-vs-positions at concept level. |
| **Debriefs** | `rag-corpus/shipley-capture-proposal-guide/shipley-debrief-value.md`, `playbooks/06-post-submission.md`, `rules/past-performance-retrieval.yaml` | [doctrine/10-post-submission-and-win.md](../doctrine/10-post-submission-and-win.md) (debrief section) | The highest-information source in the pursuit: listen, don't argue, two note-takers, thank the agency. |
| **Retrospective / lessons learned / the learning loop** | `playbooks/06-post-submission.md`, `rules/past-performance-retrieval.yaml`, `rules/cosmology-loop.yaml`, `rules/agent-budgets.yaml` (re-seed budget) | [doctrine/10-post-submission-and-win.md](../doctrine/10-post-submission-and-win.md) (retrospective), [doctrine/07-lifecycle-dream-orbital-world.md](../doctrine/07-lifecycle-dream-orbital-world.md) | The outcome is input to the next cycle: past-performance record, probability model calibration, doctrine itself. |

## A.8 The legal / regulatory / certification canon

| Shipley/APMP discipline | Dream DNA artifact(s) (v0.18.2) | Curriculum home (this repo) | Stack-agnostic rendering |
|---|---|---|---|
| **FAR / DFARS** | `rag-corpus/far-clauses.md`, `rag-corpus/shipley-capture-proposal-guide/shipley-compliance-spine.md` (clause flow-down), `rules/section-l-format-compliance.yaml`, `rules/submission.yaml` (FAR 15.208/15.402 provenance), `rules/past-performance-retrieval.yaml` (FAR 15.305(a)(2)) | [course/undergraduate-301-procurement-law-and-far-fundamentals.md](../course/undergraduate-301-procurement-law-and-far-fundamentals.md) (DL 301), [literacy/industry-standard-canon.md](../literacy/industry-standard-canon.md), [literacy/further-reading.md](../literacy/further-reading.md) (acquisition.gov), [modules/mpa.md](../modules/mpa.md) | FAR/DFARS is the *law* of the market, not the *method*. DNA carries clause references + retrieval discipline, not the CFR text. |
| **SBA size standards / set-asides / NAICS** | `rules/sba-size-standards.yaml`, `rules/naics-alignment.yaml`, `rag-corpus/sba-naics-sbir-gsa/`, `rag-corpus/sba-size-standards.md` | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md), [modules/mba.md](../modules/mba.md) (certifications as go-to-market), [modules/mpa.md](../modules/mpa.md) | Eligibility is a hard knockout: size standard, set-aside type, NAICS alignment. |
| **SBIR / STTR statute & policy** | `rules/sbir-phase-gates.yaml` (15 USC 638), `rules/sbir-capture-workflow.yaml`, `rag-corpus/sba-naics-sbir-gsa/sbir-agency-cadence.md`, `rag-corpus/sba-naics-sbir-gsa/sbir-data-rights.md`, `rag-corpus/sba-naics-sbir-gsa/sbir-phase-progression.md` | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md) (SBIR/STTR), [modules/undergraduate/README.md](../modules/undergraduate/README.md) | The SBIR/STTR set-aside is a statute-backed program; data rights and phase progression are legal facts. |
| **GSA vehicles (MAS, Alliant 3 SB, OASIS+)** | `rules/gsa-vehicle-pursuits.yaml`, `playbooks/gsa/alliant-3-sb.md`, `playbooks/gsa/gsa-aas-capture.md`, `playbooks/gsa/gsa-mas.md`, `playbooks/gsa/oasis-plus.md`, `rag-corpus/sba-naics-sbir-gsa/gsa-vehicle-landscape.md`, `rag-corpus/sba-naics-sbir-gsa/gsa-alliant-3-sb-onramp.md` | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md) (vehicles), [modules/mba.md](../modules/mba.md), [course/undergraduate-303-government-contracts-and-subcontracting.md](../course/undergraduate-303-government-contracts-and-subcontracting.md) | Vehicles are access shapes; scoping which to pursue is a gate-2/gate-3 decision. |
| **NIST 800-53 (security/compliance controls)** | `rules/nist-800-53/` (catalog + 17 control families), `docs/nist-800-53-mapping.md` | **No curriculum home** (see Part D) — the curriculum teaches "public-side governance" at concept level ([doctrine/04-gates-and-governance.md](../doctrine/04-gates-and-governance.md)); the control-by-control ATO mapping is machine-side only | NIST 800-53 is an ATO/security-compliance framework; today it is a machine mapping, not a taught course. |
| **APMP Foundation / Practitioner / Professional (certification)** | `rag-corpus/apmp-bok/`, `rag-corpus/apmp-references.md`, `playbooks/apmp/*` | [literacy/industry-standard-canon.md](../literacy/industry-standard-canon.md) (certification landscape), [research/credential-mapping.md](../research/credential-mapping.md), [research/competency-model.md](../research/competency-model.md) | Certification tests vocabulary and method, not a tool. APMP BOK is the shared language between human and machine. |
| **Shipley certification (star-based, APMP-accredited)** | `playbooks/shipley-capture.md`, `playbooks/shipley-proposal.md`, `rules/shipley-capture-gates.yaml` | [literacy/industry-standard-canon.md](../literacy/industry-standard-canon.md) (certification landscape) | Shipley's own training ladder certifies correct application of the method in real work. |
| **Grants compliance / NOFO audit (the other rulebook)** | `rules/grant-compliance.yaml` (FR-COMP-1..11), `playbooks/nofo-comprehension.md`, `playbooks/nofo-gap-analysis.md`, `playbooks/audit-report-composer.md`, `formulas/readiness-score.formula.yaml`, `formulas/gap-point-delta.formula.yaml` | [doctrine/02-rfps-and-solicitations.md](../doctrine/02-rfps-and-solicitations.md) (NOFO), [literacy/how-to-read-a-nofo.md](../literacy/how-to-read-a-nofo.md), [modules/mpa.md](../modules/mpa.md), [modules/graduate/elective-competitive-market-intelligence.md](../modules/graduate/elective-competitive-market-intelligence.md) | 2 CFR / OMB circulars govern assistance dollars; the deterministic FR-COMP gates + agentic gap pass are the machine encoding of the same compliance discipline. |

---

# Part B — DNA → Shipley reverse index

*Given a DNA artifact family, which Shipley/APMP discipline does it instantiate? Read this when working from the machine side — e.g. a new DNA rule must know which canon it encodes, so the curriculum can claim it.*

## B.1 `rules/*` — decision and lifecycle rules

| DNA artifact (v0.18.2) | Shipley/APMP canon it instantiates |
|---|---|
| `rules/shipley-capture-gates.yaml` | The Shipley BD lifecycle 7-gate ladder (Business Development Process Guide / Lifecycle Guide) |
| `rules/capture.yaml` | Shipley Capture Guide capture-management process; APMP capture process standards |
| `rules/bid-no-bid.yaml` | Shipley Capture Guide bid/no-bid dimensions; APMP opportunity-pipeline bid/no-bid gate |
| `rules/color-team.yaml` | Shipley Proposal Guide color-team cadence + rating scale; APMP review standards |
| `rules/apmp-color-teams.yaml` | APMP BOK color-team entry/exit + reviewer independence |
| `rules/submission.yaml` | Shipley Proposal Guide submission management; APMP submission process; FAR 15.208/15.402 |
| `rules/past-performance-retrieval.yaml` | FAR 15.305(a)(2) past-performance record selection |
| `rules/teaming.yaml` | Shipley Capture Guide teaming decision; APMP teaming & partnerships; 13 CFR 121/125 |
| `rules/pricing-floor.yaml` / `rules/pricing-guardrails.yaml` | Shipley price-to-win discipline; FAR cost principles (margin floors); the cost/spend-control layer |
| `rules/section-l-format-compliance.yaml` | Shipley/APMP compliance-spine concept, machine-formalized |
| `rules/strategic-positioning-patterns.yaml` | Shipley discriminators-vs-baselines + win-theme doctrine as deterministic checks |
| `rules/incumbent-displacement.yaml` | Shipley competitive-analysis / incumbent-displacement play |
| `rules/sbir-phase-gates.yaml` / `rules/sbir-capture-workflow.yaml` / `rules/sbir-phase-ii-transition.yaml` / `rules/sbir-proposal-templates.yaml` | Shipley gates 1–4 adapted to the SBIR/STTR statute (15 USC 638) |
| `rules/gsa-vehicle-pursuits.yaml` | Shipley gate-2/gate-3 vehicle-scoping decision (GSA vehicles) |
| `rules/naics-alignment.yaml` / `rules/sba-size-standards.yaml` | SBA size/set-aside eligibility (legal facts), a Shipley gate-2 hard knockout |
| `rules/grant-compliance.yaml` | Grants-side compliance (2 CFR/OMB), the "other rulebook" counterpart to FAR |
| `rules/orbital-to-proposal-map.yaml` | The ORBITAL (O.R.B.I.T.A.L.) seven-axis → proposal-section mapping — DreamLimited's own structural doctrine (UBF), not Shipley |
| `rules/growth-lifecycle.yaml` | GROWTH Accelerator lifecycle (Curiosity Research Corporation), aligned to the BD lifecycle |
| `rules/cosmology-loop.yaml` / `rules/agent-budgets.yaml` / `rules/ubf.yaml` | DreamLimited's own cosmology/stewardship layer — beyond Shipley, the re-seed loop |
| `rules/funding-rationale-tags.yaml` | Gate-card metadata vocabulary (Dream Dash) — not Shipley canon |
| `rules/source-now-data-manifest.yaml` | The Source Now market-sensing substrate — "where the money lives" |
| `rules/nist-800-53/*` | NIST 800-53 ATO controls — machine compliance mapping, not Shipley canon |

## B.2 `playbooks/*` — narrative and structural playbooks

| DNA artifact family (v0.18.2) | Shipley/APMP canon it instantiates |
|---|---|
| `playbooks/shipley-capture.md` | Shipley Capture Guide (gates 1–4) |
| `playbooks/shipley-proposal.md` | Shipley Proposal Guide (gates 5–7) |
| `playbooks/01-pre-rfp.md` … `06-post-submission.md` | The six narrative playbooks that split the Shipley BD lifecycle into operating stages |
| `playbooks/apmp/*` (proposal-flow, compliance-matrix, storyboard, color-teams, white-glove) | APMP BOK production-discipline layers |
| `playbooks/volumes/*.yaml` | The four-volumes canon (technical/management/past-performance/pricing) |
| `playbooks/pricing/*.yaml` | Shipley price-to-win + FAR cost-volume practice |
| `playbooks/compliance-matrix/compliance-matrix.yaml` | The compliance-spine concept |
| `playbooks/documents/*.yaml` | Supporting-document canon (capability statement, resumes, org charts) |
| `playbooks/gsa/*`, `playbooks/sbir/*`, `playbooks/sbir-proposals/*`, `playbooks/agency/*` | Vehicle/agency/funder overlays on the Shipley ladder |
| `playbooks/nofo-comprehension.md`, `nofo-gap-analysis.md`, `audit-report-composer.md`, `strategic-positioning.md` | The Dream Auditor (E28) pre-submission audit pipeline — Pink→Red→Gold over a NOFO draft |
| `playbooks/pipeline-doctrine.md` | Source Now → pursuit pipeline doctrine |
| `playbooks/dream-sequence/autonomous-capture-dream-sequence.yaml` | Cross-playbook workflow spine composing the above |

## B.3 `formulas/*` — executable doctrine

| DNA formula (v0.18.2) | Shipley/APMP canon it instantiates |
|---|---|
| `pwin-shipley.formula.yaml` / `pwin_scorer.py` | Shipley pWin composite (seven weighted criteria) |
| `bid-no-bid-rubric.formula.yaml` / `bid_no_bid_rubric.py` | Shipley gate-3 bid/no-bid rubric |
| `pricing-to-win.formula.yaml` / `pricing_to_win.py` | Shipley price-to-win estimator + FAR margin floor |
| `loe-burdened-rate.formula.yaml` / `loe_burdened_rate.py` | Cost-volume burdened-rate build-up |
| `capture-readiness-index.formula.yaml` / `capture_readiness_index.py` | Shipley gate-4 capture-readiness review |
| `readiness-score.formula.yaml` / `readiness_score.py` | Pre-submission readiness (distinct from pWin) — Dream Auditor |
| `gap-point-delta.formula.yaml` / `gap_point_delta.py` | Auditor per-gap point delta (NOFO scoring) |
| `incumbency-pressure.formula.yaml` / `incumbency_pressure.py` | Competitive/incumbent displacement analysis |
| `teaming-recommender.formula.yaml` / `teaming_recommender.py` | Teaming posture + partner ranking |
| `trl-assessment.formula.yaml` / `trl_assessment.py` | NASA TRL 1–9 (SBIR Phase II technology readiness) |
| `rice-score.formula.yaml` / `rice_score.py` | Portfolio prioritization (RICE) — not Shipley canon |
| legacy: `compliance_parser.py`, `pricing_validator.py`, `quality_gate.py`, `risk_score.py`, `grant_compliance_checker.py`, `strategic_positioning_checker.py`, `audit_bundle_composer.py` | Compliance, pricing validation, color-team quality, risk register, grants compliance, strategic positioning, audit assembly — each a deterministic sidecar of a canon concept |
| `calibration/` | Dream Sequencing ML calibration (not Shipley canon — machine learning layer) |

## B.4 `prompts/*` — personas and stage prompts

| DNA prompt family (v0.18.2) | Shipley/APMP canon it instantiates |
|---|---|
| `prompts/personas/capture-manager.md` | Shipley capture manager (gates 1–4) |
| `prompts/personas/proposal-manager.md` | APMP proposal manager (gate 5) |
| `prompts/personas/compliance-officer.md` | Compliance-matrix discipline (Section L/M) |
| `prompts/personas/price-to-win.md` | Shipley price-to-win analysis |
| `prompts/personas/past-performance-narrator.md` | FAR 15.305(a)(2) past-performance framing |
| `prompts/personas/bid-no-bid-analyst.md` | Shipley gate-3 disposition |
| `prompts/personas/discriminator-analyst.md` | Discriminators + ghost themes |
| `prompts/personas/storyboard-author.md` | APMP storyboard |
| `prompts/personas/trl-assessor.md` | NASA TRL (SBIR) |
| `prompts/critics/pink-team.md` … `black-hat.md` | The color-team review sequence, one prompt per color |
| `prompts/stages/discovery.md` … `handoff.md` | The BD lifecycle, one operating prompt per stage |
| `prompts/system-base.md`, `prompts/dream-agent.md`, `prompts/audit-email-tone.md` | Master-executor / rendering layer (ADR 0007/0016) |

## B.5 `rag-corpus/*` — retrieval-grounded canon

| DNA corpus (v0.18.2) | Shipley/APMP canon it instantiates |
|---|---|
| `rag-corpus/shipley-capture-proposal-guide/` (10 chunks) | Shipley Capture Guide + Proposal Guide, paraphrased and chunked |
| `rag-corpus/apmp-bok/` (8 chunks) | APMP Body of Knowledge, paraphrased and chunked |
| `rag-corpus/apmp-references.md`, `rag-corpus/shipley-citations.md` | Working bibliographies for both canons |
| `rag-corpus/far-clauses.md` | FAR/DFARS clause references |
| `rag-corpus/sba-naics-sbir-gsa/` + `sba-size-standards.md` | SBA/NAICS/SBIR/GSA legal-fact corpus |
| `rag-corpus/dreamlimited-past-performance/` | DreamLimited's own past-performance evidence (feeds Volume III) |
| `rag-corpus/won-proposals/`, `rag-corpus/winners-by-agency/` | Historical-winner pattern corpus (strategic positioning / Gold team) |

---

# Part C — The stack-agnostic rendering rule

Every row above is *teachable without a tool*. The rendering rule, stated once:

> **Teach the discipline; mention the software.** The canon (Shipley/APMP) is a set of durable decisions and review habits; the DNA corpus is that same doctrine machine-encoded for an autonomous agent; the curriculum is that same doctrine rendered for a human student. When a DNA rule renames, a formula version bumps, or a service is replaced, **this map's DNA column changes — never the doctrine files and never the concept column** (`doctrine/08`, `align/concept-to-system-map.md`).

| Discipline | Concept to teach | Software that might implement it (swappable) |
|---|---|---|
| Bid/no-bid | Five-dimension weighted rubric → discrete disposition | `bid_no_bid_rubric.py`, dream-track gate |
| Capture | Win strategy + customer engagement + readiness review | capture-manager persona, ERPNext capture plan |
| Compliance | Section L/M requirement → section mapping | compliance matrix, `compliance_parser.py` |
| Color teams | Independent reviewers, fixed sequence, specific findings | critic personas, quality-gate formula |
| Price-to-win | Position: floor / competitive range / evaluation | `pricing_to_win.py`, cost volume |
| Past performance | FAR 15.305(a)(2) eligible records | retrieval contract + PP corpus |
| Post-submission | Docket-watching, orals, FPR, debrief | handoff stage prompt, playbook 06 |

---

# Part D — Fusion honesty (gaps, both directions)

## D.1 Shipley/APMP disciplines with an incomplete or missing DNA home (v0.18.2)

| Discipline | DNA status | Gap detail |
|---|---|---|
| **DCAA / CAS / TINA** | **Partial.** Only `rules/pricing-floor.yaml`, `playbooks/pricing/boe-template.yaml`, `playbooks/pricing/cost-volume.yaml` | No dedicated DCAA/CAS/TINA rule or RAG chunk. The curriculum teaches the full spine in [modules/graduate/advanced-finance.md](../modules/graduate/advanced-finance.md) (GC 540); the machine side has no equivalent corpus. Candidate for the next DNA build wave. |
| **Negotiation technique (BATNA/ZOPA/interests-vs-positions)** | **Partial.** `playbooks/06-post-submission.md` covers posture; no dedicated negotiation rule | Negotiation is taught fully at concept level ([course/undergraduate-305-negotiations.md](../course/undergraduate-305-negotiations.md), GE 610); DNA carries only the posture side. A dedicated negotiation corpus chunk is a candidate gap. |
| **Orals as a discrete discipline** | **Partial.** `playbooks/05-orals.md` exists and is substantive | No dedicated orals rule/persona beyond the playbook + review stage prompt. |
| **Debrief discipline** | **Partial.** `rag-corpus/shipley-capture-proposal-guide/shipley-debrief-value.md` + `playbooks/06-post-submission.md` | No standalone debrief playbook/persona. |

## D.2 DNA content with no curriculum home (see [`dna-corpus-full-index.md`](dna-corpus-full-index.md) for the complete list)

The full gap list — every DNA artifact the curriculum does not yet teach — is maintained in [`align/dna-corpus-full-index.md`](dna-corpus-full-index.md). The head of that list:

- `rules/nist-800-53/*` (18 control-family files) — ATO/security mapping, no course.
- `formulas/calibration/*` — Dream Sequencing ML calibration, no course.
- `formulas/rice-score.formula.yaml` / `rice_score.py` — portfolio prioritization, not taught (candidate for the MBA portfolio session).
- `prompts/system-base.md`, `prompts/dream-agent.md`, `prompts/audit-email-tone.md` — executor/rendering layer, no course.
- `rules/agent-budgets.yaml`, `rules/funding-rationale-tags.yaml`, `rules/cosmology-loop.yaml` — operational/stewardship machine rules; the *concept* (cosmology loop) is taught in [doctrine/07](../doctrine/07-lifecycle-dream-orbital-world.md), but the machine artifact is not a taught object.
- `playbooks/agency/*` (doe/dol/eda-pweaa/nih/nsf scoring) — agency-specific Auditor overlays, not yet a taught module (candidate: DL 304 data-literacy, GE 630).
- `rag-corpus/won-proposals/`, `rag-corpus/winners-by-agency/` — the historical-winner pattern corpus; its concepts feed [doctrine/09](../doctrine/09-capture-and-competitive-strategy.md) and GE 630 at concept level, but the corpus itself is not a reading assignment.

The integrator records these gaps for the next build wave.
