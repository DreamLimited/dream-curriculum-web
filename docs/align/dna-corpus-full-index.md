---
title: "DNA Corpus — Full Human-Readable Index"
---

# DNA Corpus — Full Human-Readable Index

*Every artifact in the Dream DNA machine corpus, indexed for a human reader: what it is, which DNA version carries it, and which curriculum module teaches it. Artifacts with no curriculum home are flagged — those are the gaps the integrator records for the next build wave.*

## Version provenance

| Source | Value |
|---|---|
| DNA `VERSION` (repo root, authoritative bare string) | `0.18.2` |
| `dna-manifest.yaml` → `metadata.version` | `v0.18.2` |
| Git tag on `main` | `v0.18.2` |
| Verified at | 2026-08-05 |

**Every path below was verified to exist at `v0.18.2`.** When DNA bumps, this index must be re-verified; removed/renamed entries move to the changelog. Content rules are parsed by Dream Agent; schema stability is enforced by `schemas/` and CI (`dna-automerge-gate`, `changelog-lint`).

## How to read the columns

- **Path** — DNA-relative path (repo root = `DreamLimited/dna`).
- **What it is** — one line.
- **Curriculum home** — the teaching module in this repo, when one exists. `—` means **no curriculum home** → gap candidate.
- **Flag** — `GAP` (no curriculum home; integrator records it), `Partial` (concept taught, artifact itself not a taught object), or blank (taught).

## Legend for curriculum-home links

Relative links below point into this repo (`dream-curriculum`). The heavy hitters: `doctrine/01`–`10`, `literacy/*`, `modules/*` (shared-core, strategic-initiative, mba, mpa, undergraduate, graduate, doctoral), `course/*`, `practice/*`, `case-study/ravonics.md`.

---

# 1. `rules/` — deterministic decision rules (YAML, parsed by Dream Agent)

## 1.1 Top-level lifecycle, gate, and decision rules

| Path | What it is | Curriculum home | Flag |
|---|---|---|---|
| `rules/shipley-capture-gates.yaml` | Canonical Shipley BD lifecycle gate registry (`gate-1-market` … `gate-7-postsubmission`): entry/exit criteria, companion playbook, ORBITAL Activity axis per gate | [literacy/industry-standard-canon.md](../literacy/industry-standard-canon.md); [doctrine/04-gates-and-governance.md](../doctrine/04-gates-and-governance.md); [course/undergraduate-210-capture-and-pursuit-pipeline.md](../course/undergraduate-210-capture-and-pursuit-pipeline.md) | |
| `rules/capture.yaml` | Pre-RFP capture-management lifecycle (Shipley-derived): opportunity ID → qualification → customer engagement → competitive analysis → win strategy → readiness review | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md); [modules/graduate/elective-competitive-market-intelligence.md](../modules/graduate/elective-competitive-market-intelligence.md) | |
| `rules/bid-no-bid.yaml` | Five-dimension weighted bid/no-bid rubric → discrete BID / BID_WITH_CONDITIONS / NO_BID | [doctrine/04-gates-and-governance.md](../doctrine/04-gates-and-governance.md); [doctrine/05-scoring-and-price-to-win.md](../doctrine/05-scoring-and-price-to-win.md) | |
| `rules/color-team.yaml` | Color-team review process: Pink→Red→Gold→White sequence, per-team criteria, pass/fail thresholds | [literacy/how-color-teams-work.md](../literacy/how-color-teams-work.md); [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md) | |
| `rules/apmp-color-teams.yaml` | APMP-aligned color-team entry/exit registry, reviewer-composition minima, finding specificity, roster lock | [literacy/how-color-teams-work.md](../literacy/how-color-teams-work.md); [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md) | |
| `rules/submission.yaml` | Terminal Target-stage submission checklist + gate criteria (pre-submission verification, logistics, confirmation) | [doctrine/10-post-submission-and-win.md](../doctrine/10-post-submission-and-win.md); [doctrine/03-the-pursuit-pipeline.md](../doctrine/03-the-pursuit-pipeline.md) | |
| `rules/past-performance-retrieval.yaml` | Deterministic past-performance retrieval contract (FAR 15.305(a)(2) eligibility: awarded/performed only) | [doctrine/07-lifecycle-dream-orbital-world.md](../doctrine/07-lifecycle-dream-orbital-world.md); [literacy/the-four-volumes.md](../literacy/the-four-volumes.md) | |
| `rules/teaming.yaml` | Teaming-posture decision matrix (prime solo, prime+subs, subcontractor, JV, mentor-protege) | [modules/graduate/elective-teaming-jv-subcontracting.md](../modules/graduate/elective-teaming-jv-subcontracting.md); [course/undergraduate-303-government-contracts-and-subcontracting.md](../course/undergraduate-303-government-contracts-and-subcontracting.md) | |
| `rules/pricing-floor.yaml` | Load-bearing margin floors by contract type, prohibited price actions, escalation thresholds, BOE-evidence requirements | [doctrine/05-scoring-and-price-to-win.md](../doctrine/05-scoring-and-price-to-win.md); [modules/graduate/advanced-finance.md](../modules/graduate/advanced-finance.md); [modules/mba.md](../modules/mba.md) | |
| `rules/pricing-guardrails.yaml` | Procedural envelope around the pricing-to-win estimator; protects the floor from drift/stale inputs/unilateral override | [doctrine/05-scoring-and-price-to-win.md](../doctrine/05-scoring-and-price-to-win.md) | |
| `rules/section-l-format-compliance.yaml` | Structured Section L format-constraint model (page caps, format profile) shared by the whole proposal-generation spine | [doctrine/02-rfps-and-solicitations.md](../doctrine/02-rfps-and-solicitations.md); [literacy/the-four-volumes.md](../literacy/the-four-volumes.md) | |
| `rules/strategic-positioning-patterns.yaml` | FR-STRAT-1..4 historical-winner pattern checks for the Gold-team pass (deterministic scaffold of `playbooks/strategic-positioning.md`) | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md); [modules/graduate/elective-competitive-market-intelligence.md](../modules/graduate/elective-competitive-market-intelligence.md) | |
| `rules/incumbent-displacement.yaml` | Incumbent displacement / ghosting decision matrix keyed off public-record competitor-graph facts | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md); [modules/graduate/elective-competitive-market-intelligence.md](../modules/graduate/elective-competitive-market-intelligence.md) | |
| `rules/grant-compliance.yaml` | Deterministic FR-COMP-1..11 grants pre-submission compliance sidecar (Dream Auditor) | [doctrine/04-gates-and-governance.md](../doctrine/04-gates-and-governance.md); [modules/mpa.md](../modules/mpa.md) | |
| `rules/growth-lifecycle.yaml` | GROWTH Accelerator lifecycle manifest (Gauge→Research→Organize→Write→Target→Health): stages, entry/exit, tools, pWin weights | [doctrine/03-the-pursuit-pipeline.md](../doctrine/03-the-pursuit-pipeline.md); [modules/shared-core.md](../modules/shared-core.md); [modules/strategic-initiative.md](../modules/strategic-initiative.md) | |
| `rules/gsa-vehicle-pursuits.yaml` | GSA vehicle pursuit-scoping decision rule (MAS, Alliant 3 SB, OASIS+) | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md); [modules/mba.md](../modules/mba.md) | |
| `rules/naics-alignment.yaml` | NAICS-alignment scoring for opportunity fit | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md) | |
| `rules/sba-size-standards.yaml` | SBA size-standards registry (13 CFR 121.201 snapshot) | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md); [modules/mba.md](../modules/mba.md) | |
| `rules/sbir-capture-workflow.yaml` | SBIR/STTR capture workflow (Shipley gates 1–4 adapted to SBIR timescale) | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md) (SBIR/STTR); [modules/undergraduate/README.md](../modules/undergraduate/README.md) | |
| `rules/sbir-phase-gates.yaml` | SBIR/STTR Phase I/II/III gate registry (15 USC 638, agency cadence, TRL alignment) | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md) | |
| `rules/sbir-phase-ii-transition.yaml` | SBIR Phase II → transition guidance | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md) | Partial |
| `rules/sbir-proposal-templates.yaml` | SBIR proposal-template registry | [doctrine/02-rfps-and-solicitations.md](../doctrine/02-rfps-and-solicitations.md); [modules/undergraduate/README.md](../modules/undergraduate/README.md) | |
| `rules/orbital-to-proposal-map.yaml` | ORBITAL seven-axis → proposal-section mapping (the substrate of volume assembly) | [doctrine/06-orbital-business-structure.md](../doctrine/06-orbital-business-structure.md) | |
| `rules/ubf.yaml` | UBF cosmology semantics (Galaxy→…→Moon/ORBITAL) — the machine state model | [doctrine/06-orbital-business-structure.md](../doctrine/06-orbital-business-structure.md); [doctrine/07-lifecycle-dream-orbital-world.md](../doctrine/07-lifecycle-dream-orbital-world.md) | |
| `rules/cosmology-loop.yaml` | Won-Orbital→World re-seed budget policy (self-funding loop) | [doctrine/07-lifecycle-dream-orbital-world.md](../doctrine/07-lifecycle-dream-orbital-world.md) | Partial (concept taught; artifact is operational) |
| `rules/agent-budgets.yaml` | Agent-fund spend spine (per-tier × stage ceilings, per-section/per-project caps) | — | GAP (operational spend control; not a taught object) |
| `rules/funding-rationale-tags.yaml` | Closed vocabulary for `funding_rationale_tags` on ORBITAL Snapshot/Gate cards | — | GAP (machine metadata vocabulary; not a taught object) |
| `rules/source-now-data-manifest.yaml` | Canonical 59-connector registry across 7 data planes (SAM.gov, Grants.gov, agency feeds) | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md) | |

## 1.2 `rules/nist-800-53/` — security/compliance control mappings

All 18 files map a NIST 800-53 control family (Rev 5) to ATO-evidence posture for Dream Agent / Mission Control. **No curriculum home** — the curriculum teaches "public-side governance" at concept level, not control-by-control ATO mapping.

| Path | What it is | Curriculum home | Flag |
|---|---|---|---|
| `rules/nist-800-53/catalog.yaml` | Master NIST 800-53 control-family catalog | — | GAP |
| `rules/nist-800-53/ac-access-control.yaml` | AC control family | — | GAP |
| `rules/nist-800-53/at-awareness-training.yaml` | AT control family | — | GAP |
| `rules/nist-800-53/au-audit-accountability.yaml` | AU control family | — | GAP |
| `rules/nist-800-53/ca-assessment-authorization-monitoring.yaml` | CA control family | — | GAP |
| `rules/nist-800-53/cm-configuration-management.yaml` | CM control family | — | GAP |
| `rules/nist-800-53/cp-contingency-planning.yaml` | CP control family | — | GAP |
| `rules/nist-800-53/ia-identification-authentication.yaml` | IA control family | — | GAP |
| `rules/nist-800-53/ir-incident-response.yaml` | IR control family | — | GAP |
| `rules/nist-800-53/ma-maintenance.yaml` | MA control family | — | GAP |
| `rules/nist-800-53/mp-media-protection.yaml` | MP control family | — | GAP |
| `rules/nist-800-53/pe-physical-environmental.yaml` | PE control family | — | GAP |
| `rules/nist-800-53/pl-planning.yaml` | PL control family | — | GAP |
| `rules/nist-800-53/pm-program-management.yaml` | PM control family | — | GAP |
| `rules/nist-800-53/ps-personnel-security.yaml` | PS control family | — | GAP |
| `rules/nist-800-53/pt-pii-processing-transparency.yaml` | PT control family (PII processing) | — | GAP |
| `rules/nist-800-53/ra-risk-assessment.yaml` | RA control family | — | GAP |
| `rules/nist-800-53/sa-system-services-acquisition.yaml` | SA control family | — | GAP |
| `rules/nist-800-53/sc-system-communications-protection.yaml` | SC control family | — | GAP |
| `rules/nist-800-53/si-system-information-integrity.yaml` | SI control family | — | GAP |
| `rules/nist-800-53/sr-supply-chain-risk-management.yaml` | SR control family (supply chain) | — | GAP |

*(Count: 21 files in `rules/nist-800-53/` — catalog + 20 control families. The find listing surfaced `ac/at/au/ca/cm/cp/ia/ir/ma/mp/pe/pl/pm/ps/pt/ra/sa/sc/si/sr`.)*

---

# 2. `playbooks/` — narrative and structural playbooks

## 2.1 Top-level narrative playbooks

| Path | What it is | Curriculum home | Flag |
|---|---|---|---|
| `playbooks/01-pre-rfp.md` | Pre-RFP capture planning (opportunity ID → qualification → engagement → readiness) | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md) | |
| `playbooks/02-rfp-decode.md` | RFP decode — the first 48–72 hours after release (Section L/M decode) | [doctrine/02-rfps-and-solicitations.md](../doctrine/02-rfps-and-solicitations.md); [literacy/how-to-read-an-rfp.md](../literacy/how-to-read-an-rfp.md) | |
| `playbooks/03-proposal-strategy.md` | Proposal strategy — win themes, discriminators, ghost themes assigned to sections | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md); [modules/graduate/elective-competitive-market-intelligence.md](../modules/graduate/elective-competitive-market-intelligence.md) | |
| `playbooks/04-proposal-production.md` | Volume production + color reviews through Gold Team | [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md); [course/undergraduate-302-proposal-production-and-compliance.md](../course/undergraduate-302-proposal-production-and-compliance.md) | |
| `playbooks/05-orals.md` | Oral presentation preparation, delivery, post-orals follow-up | [doctrine/10-post-submission-and-win.md](../doctrine/10-post-submission-and-win.md) | |
| `playbooks/06-post-submission.md` | Submission → award: clarifications, evaluation notices, FPR cycle, debrief, lessons-learned | [doctrine/10-post-submission-and-win.md](../doctrine/10-post-submission-and-win.md) | |
| `playbooks/shipley-capture.md` | Narrative Shipley capture playbook (gates 1–4) — license-clean paraphrase | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md) | |
| `playbooks/shipley-proposal.md` | Narrative Shipley proposal playbook (gates 5–7) — license-clean paraphrase | [doctrine/03-the-pursuit-pipeline.md](../doctrine/03-the-pursuit-pipeline.md); [literacy/the-four-volumes.md](../literacy/the-four-volumes.md) | |
| `playbooks/pipeline-doctrine.md` | Source Now pipeline doctrine: connector-to-stage routing, data freshness, verification gates | [doctrine/03-the-pursuit-pipeline.md](../doctrine/03-the-pursuit-pipeline.md); [modules/shared-core.md](../modules/shared-core.md) | |
| `playbooks/strategic-positioning.md` | Agentic Gold-team strategic-positioning pass (historical-winner compare) | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md); [modules/graduate/elective-competitive-market-intelligence.md](../modules/graduate/elective-competitive-market-intelligence.md) | |
| `playbooks/nofo-comprehension.md` | NOFO ingest → structured `nofo-graph.v1` emission (Auditor ingest) | [doctrine/02-rfps-and-solicitations.md](../doctrine/02-rfps-and-solicitations.md); [literacy/how-to-read-a-nofo.md](../literacy/how-to-read-a-nofo.md) | |
| `playbooks/nofo-gap-analysis.md` | Agentic Pink-team gap-analysis pass over a NOFO draft ORBITAL | [doctrine/04-gates-and-governance.md](../doctrine/04-gates-and-governance.md); [modules/mpa.md](../modules/mpa.md) | |
| `playbooks/audit-report-composer.md` | Final Auditor orchestration: color-team chain + audit bundle + email/PDF | [doctrine/04-gates-and-governance.md](../doctrine/04-gates-and-governance.md) | Partial (concept taught; pipeline mechanics not) |
| `playbooks/sbir-capture-workflow.md` | SBIR/STTR capture workflow — Shipley gates adapted to SBIR timescale | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md) | |

## 2.2 `playbooks/apmp/` — APMP production-discipline playbooks

| Path | What it is | Curriculum home | Flag |
|---|---|---|---|
| `playbooks/apmp/apmp-proposal-flow.md` | APMP proposal-flow narrative (gate 5 → 6) | [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md); [course/undergraduate-302-proposal-production-and-compliance.md](../course/undergraduate-302-proposal-production-and-compliance.md) | |
| `playbooks/apmp/apmp-compliance-matrix.md` | APMP compliance-matrix construction | [doctrine/02-rfps-and-solicitations.md](../doctrine/02-rfps-and-solicitations.md); [literacy/the-four-volumes.md](../literacy/the-four-volumes.md) | |
| `playbooks/apmp/apmp-storyboard.md` | APMP storyboard authoring (theme/discriminator per frame) | [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md); [course/undergraduate-302-proposal-production-and-compliance.md](../course/undergraduate-302-proposal-production-and-compliance.md) | |
| `playbooks/apmp/apmp-color-teams.md` | APMP color-team review process (Blue→Pink→Red→Gold) | [literacy/how-color-teams-work.md](../literacy/how-color-teams-work.md); [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md) | |
| `playbooks/apmp/apmp-white-glove.md` | APMP white-glove final pass (production polish, zero content changes) | [literacy/how-color-teams-work.md](../literacy/how-color-teams-work.md) | |

## 2.3 Structural playbooks (`volumes/`, `pricing/`, `compliance-matrix/`, `documents/`)

| Path | What it is | Curriculum home | Flag |
|---|---|---|---|
| `playbooks/volumes/technical-volume.yaml` | Technical volume outline (Volume I) | [literacy/the-four-volumes.md](../literacy/the-four-volumes.md); [doctrine/06-orbital-business-structure.md](../doctrine/06-orbital-business-structure.md) | |
| `playbooks/volumes/management-volume.yaml` | Management volume outline (Volume II) | [literacy/the-four-volumes.md](../literacy/the-four-volumes.md) | |
| `playbooks/volumes/past-performance-volume.yaml` | Past-performance volume outline (Volume III, FAR 15.305(a)(2)) | [literacy/the-four-volumes.md](../literacy/the-four-volumes.md); [doctrine/07-lifecycle-dream-orbital-world.md](../doctrine/07-lifecycle-dream-orbital-world.md) | |
| `playbooks/pricing/cost-volume.yaml` | Cost/price volume structure (Volume IV) | [literacy/the-four-volumes.md](../literacy/the-four-volumes.md); [doctrine/05-scoring-and-price-to-win.md](../doctrine/05-scoring-and-price-to-win.md) | |
| `playbooks/pricing/boe-template.yaml` | Basis-of-estimate template | [modules/graduate/advanced-finance.md](../modules/graduate/advanced-finance.md); [doctrine/05-scoring-and-price-to-win.md](../doctrine/05-scoring-and-price-to-win.md) | |
| `playbooks/pricing/labor-categories.yaml` | Labor-category catalog (GSA rate ranges, OPM equivalencies) | [doctrine/05-scoring-and-price-to-win.md](../doctrine/05-scoring-and-price-to-win.md) | |
| `playbooks/compliance-matrix/compliance-matrix.yaml` | RFP compliance-matrix column structure | [doctrine/02-rfps-and-solicitations.md](../doctrine/02-rfps-and-solicitations.md); [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md) | |
| `playbooks/documents/capability-statement.yaml` | One-page capability-statement format | [modules/mba.md](../modules/mba.md); [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md) | |
| `playbooks/documents/key-personnel-resume.yaml` | Key-personnel resume format (FAR) | [literacy/the-four-volumes.md](../literacy/the-four-volumes.md); [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md) | |
| `playbooks/documents/org-chart.yaml` | Proposal organizational-chart structure | [literacy/the-four-volumes.md](../literacy/the-four-volumes.md) | |

## 2.4 Vehicle / funder / agency overlays

| Path | What it is | Curriculum home | Flag |
|---|---|---|---|
| `playbooks/gsa/alliant-3-sb.md` | GSA Alliant 3 Small Business full-lifecycle playbook | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md); [course/undergraduate-303-government-contracts-and-subcontracting.md](../course/undergraduate-303-government-contracts-and-subcontracting.md) | |
| `playbooks/gsa/gsa-aas-capture.md` | Alias → Alliant 3 SB (AAS = procurement-office name for the Alliant family) | same as above | |
| `playbooks/gsa/gsa-mas.md` | GSA Multiple Award Schedule playbook | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md) | |
| `playbooks/gsa/oasis-plus.md` | OASIS+ vehicle playbook | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md) | |
| `playbooks/sbir/phase-i.md` | SBIR Phase I playbook | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md); [modules/undergraduate/README.md](../modules/undergraduate/README.md) | |
| `playbooks/sbir/phase-ii.md` | SBIR Phase II playbook (TRL assessment, transition) | same as above | |
| `playbooks/sbir/phase-iii.md` | SBIR Phase III playbook (commercialization) | same as above | |
| `playbooks/sbir-proposals/_base.md` | SBIR proposal overlay base template | [modules/undergraduate/README.md](../modules/undergraduate/README.md); [course/undergraduate-302-proposal-production-and-compliance.md](../course/undergraduate-302-proposal-production-and-compliance.md) | Partial |
| `playbooks/sbir-proposals/dod-sbir.md` | DoD SBIR proposal overlay | same as above | Partial |
| `playbooks/sbir-proposals/doe-sbir.md` | DOE SBIR/STTR proposal overlay | same as above | Partial |
| `playbooks/sbir-proposals/nasa-sbir.md` | NASA SBIR proposal overlay | same as above | Partial |
| `playbooks/sbir-proposals/nih-sbir.md` | NIH SBIR proposal overlay | same as above | Partial |
| `playbooks/sbir-proposals/nsf-sbir.md` | NSF SBIR proposal overlay | same as above | Partial |
| `playbooks/sbir-proposals/state-ca-calseed.md` | California CALSEED state-SBIR overlay | same as above | Partial |
| `playbooks/sbir-proposals/state-ma-massventures-start.md` | Massachusetts MassVentures START overlay | same as above | Partial |
| `playbooks/sbir-proposals/state-ny-nystar-fuzehub.md` | New York NYSTAR FuzeHub overlay | same as above | Partial |
| `playbooks/sbir-proposals/state-oh-third-frontier.md` | Ohio Third Frontier overlay | same as above | Partial |
| `playbooks/sbir-proposals/state-tx-product-development.md` | Texas Product Development & SBIR overlay | same as above | Partial |
| `playbooks/agency/doe-scoring.yaml` | DOE review-panel scoring overlay (Auditor) | — | GAP (no course; candidate for DL 304 / GE 630) |
| `playbooks/agency/dol-scoring.yaml` | DOL review-panel scoring overlay (Auditor) | — | GAP |
| `playbooks/agency/nih-scoring.yaml` | NIH review-panel scoring overlay (Auditor) | — | GAP |
| `playbooks/agency/nsf-scoring.yaml` | NSF review-panel scoring overlay (Auditor) | — | GAP |
| `playbooks/agency/eda-pweaa.md` | EDA PWEAA agency overlay (Auditor) | — | GAP |

## 2.5 Workflow spine

| Path | What it is | Curriculum home | Flag |
|---|---|---|---|
| `playbooks/dream-sequence/autonomous-capture-dream-sequence.yaml` | 14-phase autonomous-capture workflow spine composing Track/Dash/Agent/Analyzer/DNA | [doctrine/03-the-pursuit-pipeline.md](../doctrine/03-the-pursuit-pipeline.md); [doctrine/07-lifecycle-dream-orbital-world.md](../doctrine/07-lifecycle-dream-orbital-world.md) | Partial (concept taught; workflow mechanics not) |

---

# 3. `formulas/` — stdlib-only executable doctrine (Python CLIs + paired descriptors)

*Each descriptor (`*.formula.yaml`) carries the semantic contract; each `*.py` is the stdlib-only CLI. Both are the same doctrine. Descriptors validate against `schemas/formula.schema.json`.*

| Path | What it is | Curriculum home | Flag |
|---|---|---|---|
| `formulas/pwin-shipley.formula.yaml` + `pwin_scorer.py` | Shipley-aligned probability-of-win composite (seven weighted criteria) | [doctrine/05-scoring-and-price-to-win.md](../doctrine/05-scoring-and-price-to-win.md); [course/undergraduate-220-pricing-and-price-to-win-fundamentals.md](../course/undergraduate-220-pricing-and-price-to-win-fundamentals.md) | |
| `formulas/bid-no-bid-rubric.formula.yaml` + `bid_no_bid_rubric.py` | Discrete bid/no-bid disposition (Shipley gate-3 input) | [doctrine/04-gates-and-governance.md](../doctrine/04-gates-and-governance.md) | |
| `formulas/pricing-to-win.formula.yaml` + `pricing_to_win.py` | Price-to-win competitive target estimator with floor enforcement | [doctrine/05-scoring-and-price-to-win.md](../doctrine/05-scoring-and-price-to-win.md); [modules/graduate/elective-negotiations-pricing-posture.md](../modules/graduate/elective-negotiations-pricing-posture.md) | |
| `formulas/loe-burdened-rate.formula.yaml` + `loe_burdened_rate.py` | Layered burdened-labor-rate composer (fringe/overhead/G&A/fee) | [modules/graduate/advanced-finance.md](../modules/graduate/advanced-finance.md); [modules/mba.md](../modules/mba.md) | |
| `formulas/capture-readiness-index.formula.yaml` + `capture_readiness_index.py` | ORBITAL-axis composite capture-readiness scorer (gate 4) | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md) | |
| `formulas/readiness-score.formula.yaml` + `readiness_score.py` | Pre-submission readiness score (distinct from pWin; Auditor) | [doctrine/04-gates-and-governance.md](../doctrine/04-gates-and-governance.md) | |
| `formulas/gap-point-delta.formula.yaml` + `gap_point_delta.py` | Per-gap point-delta calculator (Auditor NOFO scoring) | [doctrine/04-gates-and-governance.md](../doctrine/04-gates-and-governance.md); [modules/mpa.md](../modules/mpa.md) | |
| `formulas/incumbency-pressure.formula.yaml` + `incumbency_pressure.py` | Incumbency-pressure composite (competitor-graph fact → 0–1 score) | [modules/graduate/elective-competitive-market-intelligence.md](../modules/graduate/elective-competitive-market-intelligence.md); [modules/graduate/microeconomics-of-procurement.md](../modules/graduate/microeconomics-of-procurement.md) | |
| `formulas/teaming-recommender.formula.yaml` + `teaming_recommender.py` | Teaming partner ranker (7-dimension partner rubric) | [modules/graduate/elective-teaming-jv-subcontracting.md](../modules/graduate/elective-teaming-jv-subcontracting.md) | |
| `formulas/trl-assessment.formula.yaml` + `trl_assessment.py` | NASA TRL 1–9 assessment scorer (SBIR Phase II) | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md) (TRL concept) | Partial |
| `formulas/rice-score.formula.yaml` + `rice_score.py` | RICE prioritization scorer (Reach×Impact×Confidence/Effort) | — | GAP (portfolio-prioritization; candidate for MBA portfolio session) |
| `formulas/compliance_parser.py` | RFP requirements extraction → compliance matrix (legacy; no descriptor) | [doctrine/02-rfps-and-solicitations.md](../doctrine/02-rfps-and-solicitations.md) | |
| `formulas/pricing_validator.py` | Cost-volume validation against GSA rate ranges (legacy) | [doctrine/05-scoring-and-price-to-win.md](../doctrine/05-scoring-and-price-to-win.md) | |
| `formulas/quality_gate.py` | Pre-submission quality checks + color-team rubrics (legacy) | [literacy/how-color-teams-work.md](../literacy/how-color-teams-work.md) | |
| `formulas/risk_score.py` | Pursuit risk-register scoring with mitigation tracking (legacy) | [doctrine/05-scoring-and-price-to-win.md](../doctrine/05-scoring-and-price-to-win.md) | |
| `formulas/grant_compliance_checker.py` | Deterministic grants-compliance checker (sidecar of NOFO gap analysis) | [doctrine/04-gates-and-governance.md](../doctrine/04-gates-and-governance.md); [modules/mpa.md](../modules/mpa.md) | |
| `formulas/strategic_positioning_checker.py` | Deterministic strategic-positioning checker (Gold-team scaffold) | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md) | |
| `formulas/audit_bundle_composer.py` | Audit-bundle assembly (E28) | [doctrine/04-gates-and-governance.md](../doctrine/04-gates-and-governance.md) | Partial |
| `formulas/calibration/calibration_metrics.py` | Dream Sequencing calibration metrics | — | GAP (ML calibration; no course) |
| `formulas/calibration/drift_detector.py` | Model-drift detector | — | GAP |
| `formulas/calibration/isotonic.py` | Isotonic recalibration | — | GAP |
| `formulas/calibration/recalibration_proposer.py` | Recalibration proposal generator | — | GAP |
| `formulas/README.md` | Formula authoring conventions + CLI contract | — | (index doc) |

---

# 4. `prompts/` — personas and stage prompts (system prompts per Dream Agent operating mode)

## 4.1 Personas (`prompts/personas/`)

*Each persona is a pair: the Markdown body (authoritative) + a `.prompt.yaml` descriptor (validated against `schemas/prompt.schema.json`). All nine compose on top of `prompts/system-base.md` (ADR 0007).*

| Persona | What it is | Curriculum home | Flag |
|---|---|---|---|
| `capture-manager.md` + `.prompt.yaml` | Shipley capture-lifecycle orchestration (gates 1–4) | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md); [modules/graduate/elective-competitive-market-intelligence.md](../modules/graduate/elective-competitive-market-intelligence.md) | |
| `proposal-manager.md` + `.prompt.yaml` | APMP proposal-production orchestration (gate 5) | [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md) | |
| `compliance-officer.md` + `.prompt.yaml` | Section L/M decomposition + traceability | [doctrine/02-rfps-and-solicitations.md](../doctrine/02-rfps-and-solicitations.md); [modules/mpa.md](../modules/mpa.md) | |
| `price-to-win.md` + `.prompt.yaml` | Competitive pricing analysis | [doctrine/05-scoring-and-price-to-win.md](../doctrine/05-scoring-and-price-to-win.md); [modules/graduate/elective-negotiations-pricing-posture.md](../modules/graduate/elective-negotiations-pricing-posture.md) | |
| `past-performance-narrator.md` + `.prompt.yaml` | FAR 15.305(a)(2) record selection + framing | [doctrine/07-lifecycle-dream-orbital-world.md](../doctrine/07-lifecycle-dream-orbital-world.md); [literacy/the-four-volumes.md](../literacy/the-four-volumes.md) | |
| `bid-no-bid-analyst.md` + `.prompt.yaml` | Shipley gate-3 disposition support | [doctrine/04-gates-and-governance.md](../doctrine/04-gates-and-governance.md) | |
| `discriminator-analyst.md` + `.prompt.yaml` | Discriminators + ghost themes | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md); [modules/graduate/elective-competitive-market-intelligence.md](../modules/graduate/elective-competitive-market-intelligence.md) | |
| `storyboard-author.md` + `.prompt.yaml` | APMP storyboard production | [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md) | |
| `trl-assessor.md` + `.prompt.yaml` | NASA TRL 1–9 scoring (SBIR Phase II) | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md) (TRL) | Partial |
| `persona-base.md` | Shared persona contract (inheritance base) | — | (technical base) |
| `personas/README.md` | Persona roster + authoring rules | — | (index doc) |

## 4.2 Critics (`prompts/critics/`) — the color-team panel

| Critic | What it is | Curriculum home | Flag |
|---|---|---|---|
| `pink-team.md` | First panel: compliance + structure completeness | [literacy/how-color-teams-work.md](../literacy/how-color-teams-work.md); [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md) | |
| `red-team.md` | Second panel: adversarial evaluator read | same as above | |
| `gold-team.md` | Third panel: storytelling / persuasion / differentiation | same as above | |
| `white-glove.md` | Fourth panel: compliance precision (Section L/M cross-walk) | same as above | |
| `black-hat.md` | Final panel: hostile evaluator + rival capture manager | [literacy/how-color-teams-work.md](../literacy/how-color-teams-work.md) (Black-Hat) | |

## 4.3 Stage prompts (`prompts/stages/`) — one per pipeline operating stage

| Stage prompt | What it is | Curriculum home | Flag |
|---|---|---|---|
| `discovery.md` | Discovery stage (Source Now / opportunity ID) | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md); [doctrine/03-the-pursuit-pipeline.md](../doctrine/03-the-pursuit-pipeline.md) | |
| `qualification.md` | Qualification stage (bid/no-bid, teaming) | [doctrine/04-gates-and-governance.md](../doctrine/04-gates-and-governance.md) | |
| `capture.md` | Capture stage (engagement, competitive analysis, readiness) | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md) | |
| `proposal.md` | Proposal stage (decode, strategy, production) | [doctrine/02-rfps-and-solicitations.md](../doctrine/02-rfps-and-solicitations.md); [course/undergraduate-302-proposal-production-and-compliance.md](../course/undergraduate-302-proposal-production-and-compliance.md) | |
| `review.md` | Review stage (color teams, orals) | [literacy/how-color-teams-work.md](../literacy/how-color-teams-work.md) | |
| `handoff.md` | Handoff stage (submission, post-submission, lessons) | [doctrine/10-post-submission-and-win.md](../doctrine/10-post-submission-and-win.md) | |

## 4.4 Master / utility prompts

| Path | What it is | Curriculum home | Flag |
|---|---|---|---|
| `system-base.md` | Master system prompt every persona composes on | — | GAP (executor base; not a taught object) |
| `dream-agent.md` | Master Dream Agent operating prompt | — | GAP (executor; not a taught object) |
| `audit-email-tone.md` | White-Glove rendering calibration for audit emails | — | GAP (rendering; not a taught object) |

---

# 5. `rag-corpus/` — retrieval-grounded reference material

*Each `.md` chunk pairs with a `.rag.yaml` descriptor (provenance, retrieval hints, freshness) validated against `schemas/rag.schema.json`. Chunks are reference material Dream Agent retrieves; they are not executable rules.*

| Path | What it is | Curriculum home | Flag |
|---|---|---|---|
| `rag-corpus/shipley-capture-proposal-guide/shipley-capture-readiness.md` | Capture-readiness criteria (gate 4) | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md) | |
| `rag-corpus/shipley-capture-proposal-guide/shipley-capture-window.md` | The pre-RFP capture window | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md) | |
| `rag-corpus/shipley-capture-proposal-guide/shipley-color-team-cadence.md` | Color-team cadence (Pink→Red→Gold→White) | [literacy/how-color-teams-work.md](../literacy/how-color-teams-work.md) | |
| `rag-corpus/shipley-capture-proposal-guide/shipley-compliance-spine.md` | Compliance matrix as the spine (Section L/M/C/CDRL flow-down) | [doctrine/02-rfps-and-solicitations.md](../doctrine/02-rfps-and-solicitations.md); [literacy/the-four-volumes.md](../literacy/the-four-volumes.md) | |
| `rag-corpus/shipley-capture-proposal-guide/shipley-customer-centric-framing.md` | Customer-centric framing / the "you will" test | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md) | |
| `rag-corpus/shipley-capture-proposal-guide/shipley-debrief-value.md` | Debrief as the highest-information source | [doctrine/10-post-submission-and-win.md](../doctrine/10-post-submission-and-win.md) | |
| `rag-corpus/shipley-capture-proposal-guide/shipley-discriminators-vs-baselines.md` | Discriminators vs. baseline features (three-check test) | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md) | |
| `rag-corpus/shipley-capture-proposal-guide/shipley-ghost-themes.md` | Ghost themes (evidence-backed) | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md) | |
| `rag-corpus/shipley-capture-proposal-guide/shipley-persuasive-writing-patterns.md` | Persuasive-writing patterns | [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md) | |
| `rag-corpus/shipley-capture-proposal-guide/shipley-price-as-strategy.md` | Price as strategy | [doctrine/05-scoring-and-price-to-win.md](../doctrine/05-scoring-and-price-to-win.md) | |
| `rag-corpus/shipley-citations.md` | Shipley working bibliography (paraphrased; license-clean) | [literacy/industry-standard-canon.md](../literacy/industry-standard-canon.md) | |
| `rag-corpus/apmp-bok/apmp-color-team-discipline.md` | APMP color-team discipline | [literacy/how-color-teams-work.md](../literacy/how-color-teams-work.md) | |
| `rag-corpus/apmp-bok/apmp-compliance-management.md` | APMP compliance management | [doctrine/02-rfps-and-solicitations.md](../doctrine/02-rfps-and-solicitations.md) | |
| `rag-corpus/apmp-bok/apmp-executive-summary.md` | APMP executive-summary discipline | [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md) | |
| `rag-corpus/apmp-bok/apmp-finding-specificity.md` | APMP finding-specificity rule | [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md) | |
| `rag-corpus/apmp-bok/apmp-production-discipline.md` | APMP production discipline | [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md) | |
| `rag-corpus/apmp-bok/apmp-reviewer-independence.md` | APMP reviewer independence | [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md) | |
| `rag-corpus/apmp-bok/apmp-storyboard-discipline.md` | APMP storyboard discipline | [modules/graduate/elective-proposal-management-color-teams.md](../modules/graduate/elective-proposal-management-color-teams.md) | |
| `rag-corpus/apmp-bok/apmp-win-themes-and-discriminators.md` | APMP win themes + discriminators | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md) | |
| `rag-corpus/apmp-references.md` | APMP working bibliography (paraphrased; license-clean) | [literacy/industry-standard-canon.md](../literacy/industry-standard-canon.md) | |
| `rag-corpus/far-clauses.md` | FAR/DFARS clause references | [course/undergraduate-301-procurement-law-and-far-fundamentals.md](../course/undergraduate-301-procurement-law-and-far-fundamentals.md); [literacy/further-reading.md](../literacy/further-reading.md) | |
| `rag-corpus/sba-size-standards.md` | SBA size-standards reference | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md) | |
| `rag-corpus/sba-naics-sbir-gsa/naics-overview.md` | NAICS overview | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md) | |
| `rag-corpus/sba-naics-sbir-gsa/sba-affiliation-rules.md` | SBA affiliation rules | [modules/graduate/elective-teaming-jv-subcontracting.md](../modules/graduate/elective-teaming-jv-subcontracting.md) | |
| `rag-corpus/sba-naics-sbir-gsa/sba-joint-venture-rules.md` | SBA joint-venture rules | [modules/graduate/elective-teaming-jv-subcontracting.md](../modules/graduate/elective-teaming-jv-subcontracting.md) | |
| `rag-corpus/sba-naics-sbir-gsa/sba-limitations-on-subcontracting.md` | SBA limitations on subcontracting (LOS) | [modules/graduate/elective-teaming-jv-subcontracting.md](../modules/graduate/elective-teaming-jv-subcontracting.md); [course/undergraduate-303-government-contracts-and-subcontracting.md](../course/undergraduate-303-government-contracts-and-subcontracting.md) | |
| `rag-corpus/sba-naics-sbir-gsa/sba-set-aside-types.md` | SBA set-aside types (HUBZone, 8(a), WOSB/VOSB, SDVOSB) | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md); [modules/mba.md](../modules/mba.md) | |
| `rag-corpus/sba-naics-sbir-gsa/sba-size-standards-overview.md` | SBA size-standards overview | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md) | |
| `rag-corpus/sba-naics-sbir-gsa/gsa-vehicle-landscape.md` | GSA vehicle landscape | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md) | |
| `rag-corpus/sba-naics-sbir-gsa/gsa-alliant-3-sb-onramp.md` | GSA Alliant 3 SB onramp | [course/undergraduate-303-government-contracts-and-subcontracting.md](../course/undergraduate-303-government-contracts-and-subcontracting.md) | |
| `rag-corpus/sba-naics-sbir-gsa/sbir-agency-cadence.md` | SBIR agency cadence | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md) | |
| `rag-corpus/sba-naics-sbir-gsa/sbir-data-rights.md` | SBIR data-rights rules | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md); [modules/undergraduate/README.md](../modules/undergraduate/README.md) | |
| `rag-corpus/sba-naics-sbir-gsa/sbir-phase-progression.md` | SBIR phase progression | [doctrine/01-where-the-money-lives.md](../doctrine/01-where-the-money-lives.md) | |
| `rag-corpus/dreamlimited-past-performance/army-sbir-ai-interoperability.md` | DreamLimited PP record: Army SBIR AI interoperability | [doctrine/07-lifecycle-dream-orbital-world.md](../doctrine/07-lifecycle-dream-orbital-world.md); [literacy/the-four-volumes.md](../literacy/the-four-volumes.md) | Partial |
| `rag-corpus/dreamlimited-past-performance/army-xtech-esscp-ai-source-selection.md` | DreamLimited PP record: Army xTech ESCP AI source selection | same | Partial |
| `rag-corpus/dreamlimited-past-performance/dod-quickdoc-ai-healthcare.md` | DreamLimited PP record: DoD QuickDoc AI healthcare | same | Partial |
| `rag-corpus/dreamlimited-past-performance/doe-igniite-2025-energy.md` | DreamLimited PP record: DOE Ignite 2025 energy | same | Partial |
| `rag-corpus/dreamlimited-past-performance/nsf-exlent-experiential-learning.md` | DreamLimited PP record: NSF ExLENT experiential learning | same | Partial |
| `rag-corpus/dreamlimited-past-performance/historical-bid-decisions/decisions.yaml` | Historical bid-decision log (pursued/declined/awarded) | [modules/graduate/elective-competitive-market-intelligence.md](../modules/graduate/elective-competitive-market-intelligence.md) | Partial |
| `rag-corpus/winners-by-agency/{doe,dol,eda-pweaa,nih,nsf}/<agency>-agency-review-panel-norms.md` | Agency review-panel norms (5 agencies) | [modules/graduate/elective-competitive-market-intelligence.md](../modules/graduate/elective-competitive-market-intelligence.md) | Partial |
| `rag-corpus/winners-by-agency/{doe,dol,eda-pweaa,nih,nsf}/<agency>-pattern-{named-anchor-employer-partnership,positioning-coherence,quantified-outcome-target,sustainability-continuation-mechanism}.md` | Historical-winner thematic patterns (5 agencies × 4 patterns) | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md) (strategic positioning); [modules/graduate/elective-competitive-market-intelligence.md](../modules/graduate/elective-competitive-market-intelligence.md) | Partial |
| `rag-corpus/won-proposals/{doe,dol,eda-pweaa,nih,nsf}/<agency>-composite-{01-named-anchor-employer-partnership,02-quantified-outcome-target,03-sustainability-continuation-mechanism,04-positioning-coherence}.md` | Composite won-proposal narratives (5 agencies × 4 patterns) | [doctrine/09-capture-and-competitive-strategy.md](../doctrine/09-capture-and-competitive-strategy.md); [practice/exercises.md](../practice/exercises.md) | Partial |
| `rag-corpus/won-proposals/{doe,dol,eda-pweaa,nih,nsf}/<agency>-composite-full-narrative.md` | Full composite won-proposal narratives (5 agencies) | same | Partial |

---

# 6. Supporting (non-content) layers — for completeness

*Not taught material; these are the machine-adjacent scaffolding of the DNA package.*

| Path | What it is |
|---|---|
| `schemas/` (`common`, `formula`, `manifest`, `playbook`, `prompt`, `rag`, `rule` `.schema.json`) | JSON schemas the CI validates content against |
| `contracts/v1/` (`calibration-drift-signal`, `competitor-graph`, `recalibration-registry-entry`, `teaming-recommendation`, `watchlist` + examples) | Structured API contracts for cross-repo features |
| `docs/` (`agent-contract`, `ato-evidence`, `formula-reference`, `licensing-*`, `no-fork-policy`, `past-performance-handling`, `rag-retrieval-policy`, `releases`, `runbook`, `nist-800-53-mapping`, `migration-growth-accelerator-capture`, `decisions/*`) | Operator/architecture documentation |
| `tests/`, `_examples/`, `scripts/`, `k8s/`, `.gitlab-ci.yml`, `dna-manifest.yaml`, `VERSIONING.md`, `CHANGELOG.md` | Engineering scaffolding |

---

# 7. The gap list — DNA content with NO curriculum home

*This is the list the integrator records for the next build wave. Each item is a real DNA artifact at `v0.18.2` that no current curriculum module teaches.*

| DNA artifact(s) | Why it matters | Suggested curriculum home for a future wave |
|---|---|---|
| `rules/nist-800-53/*` (21 files) | Security/ATO compliance mapping — a full taught module in many programs | DL 301 (procurement law) security week, or a new DL 306 security elective |
| `formulas/calibration/*` (4 modules) | Dream Sequencing ML calibration — the learning loop's math | Doctoral tier ([modules/doctoral/research-agenda.md](../modules/doctoral/research-agenda.md)) — calibration as a research method |
| `formulas/rice-score.formula.yaml` + `rice_score.py` | RICE portfolio prioritization — a standard product/portfolio tool | [modules/mba.md](../modules/mba.md) (portfolio session) or [modules/strategic-initiative.md](../modules/strategic-initiative.md) |
| `rules/agent-budgets.yaml` | Agent-fund spend control — the economics of autonomy | [modules/strategic-initiative.md](../modules/strategic-initiative.md) (governance session) |
| `rules/funding-rationale-tags.yaml` | Funding-rationale vocabulary on Gate cards | [modules/mba.md](../modules/mba.md) (budget axis) |
| `prompts/system-base.md`, `prompts/dream-agent.md`, `prompts/audit-email-tone.md` | Executor/rendering prompts | Not curriculum material by design — document in the machine-ops layer, not taught |
| `playbooks/agency/{doe,dol,nih,nsf}-scoring.yaml`, `eda-pweaa.md` | Agency-specific Auditor overlays | [modules/graduate/elective-competitive-market-intelligence.md](../modules/graduate/elective-competitive-market-intelligence.md) (GE 630) or DL 304 data literacy |
| `rag-corpus/won-proposals/`, `rag-corpus/winners-by-agency/` | Historical-winner pattern corpus | [doctrine/09](../doctrine/09-capture-and-competitive-strategy.md) + [practice/exercises.md](../practice/exercises.md) as a reading assignment |
| **DCAA / CAS / TINA** (no dedicated artifact) | The cost-accounting legal spine — taught in [GC 540](../modules/graduate/advanced-finance.md) but not encoded in DNA | New `rag-corpus/dcaa-cas-tina/` chunk + possible `rules/cost-accounting.yaml` |

*(See [`shipley-dna-fusion-map.md`](shipley-dna-fusion-map.md) Part D for the reverse list — Shipley disciplines with incomplete DNA homes.)*
