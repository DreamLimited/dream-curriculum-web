---
title: "Concept ↔ System Map"
---

# Concept ↔ System Map

*The correspondence between the human-facing curriculum (this repo) and the machine-side encoding of the same doctrine (the DNA repo). One table per durable concept.*

> ## ⚠️ THE CORE RULE
>
> **The concept column + the government facts NEVER change. The DNA/stack column changes — update THIS map when it does, never the doctrine files.**
>
> `doctrine/01`–`doctrine/10` and `case-study/ravonics.md` are the source of truth and are **immutable with respect to the tooling**. When a rule is renamed, a formula version bumps, a playbook is added, or a service is replaced, the change is recorded **here**, in the DNA artifact column — never by rewriting a doctrine file. (See `doctrine/08-tools-change-concepts-dont.md`.)

---

## DNA version pinning

All DNA artifact paths below refer to **`DreamLimited/dna` at `v0.18.2`** (current, 2026-08-05):

| Version source | Value |
|---|---|
| `VERSION` (repo root, authoritative bare string) | `0.18.2` |
| `dna-manifest.yaml` → `metadata.version` | `v0.18.2` |
| Git tag on `main` | `v0.18.2` |

DNA follows SemVer per `VERSIONING.md`: **MINOR** bump for a new rule/playbook/formula/prompt (existing consumers keep working); **MAJOR** for a rename/removal/behavioral change. When DNA bumps, the paths below may change — update this map, never the doctrine. Every path cited below was verified to exist at this version.

## How to update this map

- **Who updates it:** any agent or engineer making a change to the machine-side encoding of a concept — a DNA version bump, a new/renamed rule, playbook, formula, prompt, or RAG corpus, a changed service that encodes a concept, or a new canary fixture.
- **When:** at the same working session as the stack change (per the standing order to keep the dashboard / alignment layers current), and immediately on every DNA **MINOR/MAJOR** version bump.
- **What to update:** the *DNA artifact path* column only. Point it at the new path/version. If a concept's machine encoding is removed, mark it `— (not yet encoded)` honestly rather than inventing a path.
- **What to never update:** the *curriculum concept* column, any `doctrine/` file, or `case-study/ravonics.md`. If you believe a doctrine file is wrong, that is a separate, careful change — not part of a stack update.
- **Keep in sync:** add/rename/remove entries in `manifest.yaml` in the same change, and bump the curriculum `VERSION` per `CLAUDE.md`.

## The fusion layer (Shipley × DNA × curriculum)

Three companion pages extend this map from the curriculum side of the seam. They answer "where does the Shipley/APMP canon itself live in the machine and the curriculum?" and are kept honest under the same rule — concept column stable, DNA column version-pinned (`v0.18.2`):

- [`align/shipley-dna-fusion-map.md`](shipley-dna-fusion-map.md) — the master crosswalk: every canon discipline and gate traced three ways (canon → DNA artifact → curriculum home).
- [`align/dna-corpus-full-index.md`](dna-corpus-full-index.md) — the full human-readable index of every DNA corpus artifact, with artifacts that have no curriculum home flagged as gaps for the next build wave.
- [`align/shipley-book-canon.md`](shipley-book-canon.md) — the authoritative-source index: which Shipley/APMP book teaches which concept, where the curriculum teaches it, and where the machine encodes it.

### The v0.5.0 human-side companion layer

The high-rice wave added human-side reference and practice material that touches several concept rows below. These are human-side companions (they live in the curriculum, not in DNA); each is cross-referenced from the concept section it serves:

| New material | What it adds | Touches concept section(s) |
|---|---|---|
| [`literacy/agencies/`](../literacy/agencies/) — the agency deep-dive library | Ten profiles (DoD, DHS, DOE, GSA, NASA, NIH, SBIR/STTR, State/USAID/civic, VA) mapping how each buyer buys, evaluates, and speaks | 1 (money lives), 2 (RFP/NOFO literacy), 10 (capture strategy) |
| [`case-library/`](../case-library/) — four anonymized real-feeling win/loss cases | Compliance matrix (case 01), price band (case 02), teaming (case 03), ghost theme (case 04) | 4 (gates), 9 (Ravonics case), 10 (capture strategy), 11 (post-submission) |
| [`modules/human-ai-collaboration.md`](../modules/human-ai-collaboration.md) + [`practice/human-ai-drills.md`](../practice/human-ai-drills.md) | The taught realization of how-the-machine-learns: brief the machine, review its output, log overrides | 4 (gate accountability), 5 (scoring), 8 (stack-agnostic) |
| [`modules/graduate/pipeline-economics.md`](../modules/graduate/pipeline-economics.md) (GE 650) | The funnel, the weighted pipeline, the B&P budget, the gate ROI call as a numbers system | 5 (scoring & pWin), 3 (pursuit pipeline) |
| [`modules/graduate/elective-orals-coaching.md`](../modules/graduate/elective-orals-coaching.md) (GE 651) | Orals architecture, rehearsal protocol, hostile-Q&A discipline | 11 (post-submission & win) |
| [`modules/company-building.md`](../modules/company-building.md) + [`practice/company-launch-sprint.md`](../practice/company-launch-sprint.md) | Standing a GovCon firm up from zero: registration, compliance skeleton, capture function, cash | 3 (pipeline), 6 (ORBITAL business structure), 7 (lifecycle) |
| [`literacy/credential-ladder.md`](../literacy/credential-ladder.md), [`literacy/why-govcon-matters.md`](../literacy/why-govcon-matters.md), [`literacy/capability-statement.md`](../literacy/capability-statement.md) | The career map, the mission narrative, the one-page front door | 1 (money lives), 2 (solicitation literacy), 10 (capture strategy) |

---

## Pipeline stage key (canonical agent-view stages)

`SENSE` · `INGEST` · `FIND` · `SCORE` · `CATCH` · `PURSUE` · `DESIGN` · `AUDIT` · `APPROVE` · `SUBMIT` · `AWARD` · `DELIVER` · `LEARN` · `EVOLVE`

The curriculum's doctrine/03 vocabulary (`sense → qualify → score → pursue → design → audit → submit → deliver → learn`) is the same shape; the stage column uses the agent-view names so the map reads across both sides.

## Launchpad fellowship column note

The fellowship column uses the **authoritative** Launchpad program family (verified verbatim from the Launchpad Sandbox docs):

- **Ignite Curiosity** — a program of **Curiosity Research Corporation** (curiositycorp.org); the universal boot camp; **SPARK Learning System™** (SPARK Method; SPARK Sessions).
- **Framework Family** — DREAM Playbook, **O.R.B.I.T.A.L. Framework™**, **A.N.D.R.O.I.D. Ops™**, **GROWTH Accelerator™**, **SuperNova Strategy** (9 stages).
- **Innovator's Launchpad** — 5 levels: **L1 Explorer / L2 Builder / L3 Architect / L4 Networker / L5 Leader** (the TOC calls L1 "Foundation Fellow"; the Launchpad doc's own name is **Explorer**, which is used here).
- **Legacy Track — The Ignition** (professionals 50+, 9 modules): M1 Findings, M2 Contract Mastery, M3 ORBITAL, M4 Proposal Writing, M5 PWIN & Dream Score, M6 Prompts, M7 The Harness (A.N.D.R.O.I.D. Ops), M8 Reach Out, M9 Legacy Builder.
- **The Ascension** (executives): Orbit / System / Galaxy Commander; Constellation Framework.
- **The Transcendence** (stewardship / pinnacle).
- **C.A.S.E.** — Cognitive Acquisition Systems Engineering.
- **Dream Kit** (operational AI layer): "Prompt (Dream Kit)" + "ORBITAL Template JSON (Dream Kit)" — the stack-specific AI-tooling docs.

Where a concept maps to several, all are listed. The concept and DNA columns do not depend on the fellowship column.

---

## <a name="1-where-the-money-lives"></a>1. Where the money lives — `doctrine/01-where-the-money-lives.md`

| Curriculum concept (durable) | Launchpad Sandbox fellowship element | DNA artifact path (current stack — changes) | Pipeline stage | Notes |
|---|---|---|---|---|
| Federal market is published & addressable (contracts / grants / other transactions) | Ignite Curiosity program (of Curiosity Research Corporation); SPARK Learning System™ (SPARK Method / SPARK Sessions); Launchpad L1 Explorer | `rules/source-now-data-manifest.yaml` | SENSE | Canonical 59-connector registry across 7 data planes (SAM.gov, Grants.gov, agency feeds) — the machine-side "where the money lives" sensor. |
| Four identifiers: UEI, CAGE, NAICS, SAM.gov | Ignition M2 Contract Mastery; Launchpad L1 Explorer | `rules/naics-alignment.yaml`; `rules/sba-size-standards.yaml` | FIND · QUALIFY | NAICS alignment scoring + SBA size-standards registry (13 CFR 121.201 snapshot). UEI/CAGE/SAM record lives in the registry data plane, not in DNA. |
| Opportunity bulletin boards: SAM.gov, Grants.gov, agency forecasts | Ignition M2 Contract Mastery; Launchpad L2 Builder | `rules/source-now-data-manifest.yaml` | SENSE · INGEST | The connectors that watch these boards; freshness + retry policy lives here. |
| Vehicles: GSA Schedules, IDIQ, task orders | Ignition M2 Contract Mastery; Launchpad L3 Architect | `rules/gsa-vehicle-pursuits.yaml`; `playbooks/gsa/alliant-3-sb.md`; `playbooks/gsa/gsa-mas.md`; `playbooks/gsa/oasis-plus.md` | FIND · PURSUE | Vehicle-scoping decision rule + GSA vehicle playbooks. |
| Small-business programs: HUBZone, 8(a), WOSB/VOSB, set-asides | Ignition M2 Contract Mastery; Launchpad L2 Builder | `rules/sba-size-standards.yaml`; `rules/naics-alignment.yaml` | QUALIFY | Size/set-aside eligibility is a hard knockout in the bid/no-bid rubric. |
| SBIR / STTR (incl. research-institution partner) | Ignition M2 Contract Mastery; Launchpad L3 Architect | `rules/sbir-phase-gates.yaml`; `rules/sbir-capture-workflow.yaml`; `playbooks/sbir/phase-i.md`; `playbooks/sbir/phase-ii.md`; `playbooks/sbir/phase-iii.md`; `playbooks/sbir-proposals/` | FIND · PURSUE · DESIGN | Phase-gate registry (15 USC 638) + per-funder proposal overlays. |
| Agency-by-agency buying behavior (the agency as the other party) | Ignition M2 Contract Mastery; Launchpad L1 Explorer → L2 Builder | — (human side: [`literacy/agencies/`](../literacy/agencies/) + [`literacy/why-govcon-matters.md`](../literacy/why-govcon-matters.md)) | SENSE · FIND · PURSUE | The v0.5.0 agency deep-dive library maps each buyer's culture, vehicles, and set-aside machine to the doctrine. |

---

## <a name="2-rfp--nofo-literacy"></a>2. RFP / NOFO literacy — `doctrine/02-rfps-and-solicitations.md`

| Curriculum concept (durable) | Launchpad Sandbox fellowship element | DNA artifact path (current stack — changes) | Pipeline stage | Notes |
|---|---|---|---|---|
| Solicitation shapes: RFI / RFQ / RFP / NOFO / IDIQ-task-order | Ignition M2 Contract Mastery; Launchpad L2 Builder | `playbooks/02-rfp-decode.md`; `playbooks/nofo-comprehension.md` | FIND · DESIGN | RFP decode + NOFO → structured `nofo-graph.v1` comprehension. |
| The six questions every solicitation answers; Section L vs Section M | Ignition M2 Contract Mastery; Launchpad L2 Builder | `rules/section-l-format-compliance.yaml`; `playbooks/compliance-matrix/compliance-matrix.yaml`; `formulas/compliance_parser.py` | DESIGN | Compliance matrix template + parser; Section L/M format rule. |
| Compliance reading → compliance matrix | Ignition M4 Proposal Writing; Launchpad L2 Builder | `playbooks/compliance-matrix/compliance-matrix.yaml`; `formulas/compliance_parser.py` | DESIGN | Machine builds the matrix from the solicitation; persona: `prompts/personas/compliance-officer.md`. |
| Strategy reading (evaluation criteria / intent) | Ignition M4 Proposal Writing; Launchpad L3 Architect | `playbooks/03-proposal-strategy.md`; `playbooks/documents/capability-statement.yaml` | DESIGN | Strategy + capability framing. |
| Deadlines & the two-deadline trap | Ignition M4 Proposal Writing; Launchpad L2 Builder | `rules/submission.yaml` | SUBMIT | Pre-submission checklist treats deadlines as mandatory items. |
| Amendments & forecasts | Ignition M2 Contract Mastery; Launchpad L3 Architect | `rules/source-now-data-manifest.yaml`; `playbooks/01-pre-rfp.md` | SENSE · FIND | Forecast connectors + pre-RFP capture. |

---

## <a name="3-the-pursuit-pipeline"></a>3. The pursuit pipeline — `doctrine/03-the-pursuit-pipeline.md`

| Curriculum concept (durable) | Launchpad Sandbox fellowship element | DNA artifact path (current stack — changes) | Pipeline stage | Notes |
|---|---|---|---|---|
| The pipeline is a pipeline, not a lottery (sense→…→learn→repeat) | GROWTH Accelerator™; Ignition M3 ORBITAL; Launchpad L2 Builder → L3 Architect | `playbooks/pipeline-doctrine.md`; `playbooks/dream-sequence/autonomous-capture-dream-sequence.yaml` | ALL | Pipeline doctrine + the 14-phase autonomous-capture workflow. |
| The GROWTH accent (Gauge…Health) | GROWTH Accelerator™; Ignition M3 ORBITAL; Launchpad L2 Builder | `rules/growth-lifecycle.yaml` | ALL | Single source of truth for the GROWTH stage machine. |
| The DREAM accent (customer engagement) | DREAM Playbook; Ignite Curiosity program (of Curiosity Research Corporation); Launchpad L2 Builder | `prompts/stages/discovery.md`; `prompts/personas/capture-manager.md` | SENSE · FIND · DELIVER | Relationship/customer-intelligence personas. |
| The SuperNova accent (seed → operating entity) | SuperNova Strategy (9 stages); The Ascension; Launchpad L5 Leader | `rules/ubf.yaml`; `rules/cosmology-loop.yaml` | ALL | Strategic arc; see concept 7. |
| Stage-specific operating prompts | Ignition M6 Prompts; Dream Kit "Prompt (Dream Kit)"; Launchpad L2 Builder | `prompts/stages/discovery.md`; `prompts/stages/qualification.md`; `prompts/stages/capture.md`; `prompts/stages/proposal.md`; `prompts/stages/review.md`; `prompts/stages/handoff.md` | SENSE → SUBMIT | One prompt per pipeline operating stage. |

---

## <a name="4-gates--governance"></a>4. Gates & governance — `doctrine/04-gates-and-governance.md`

| Curriculum concept (durable) | Launchpad Sandbox fellowship element | DNA artifact path (current stack — changes) | Pipeline stage | Notes |
|---|---|---|---|---|
| Gate = trigger + criteria + decision + owner | The Ascension (Orbit/System/Galaxy Commander); Launchpad L4 Networker → L5 Leader | `rules/shipley-capture-gates.yaml` | ALL | Canonical Shipley gate registry (gates 1–7). |
| Bid / no-bid gate | Ignition M5 PWIN & Dream Score; Launchpad L3 Architect | `rules/bid-no-bid.yaml`; `formulas/bid_no_bid_rubric.py`; `formulas/bid-no-bid-rubric.formula.yaml`; `formulas/risk_score.py` | QUALIFY · CATCH | Five-dimension rubric, discrete BID / BID_WITH_CONDITIONS / NO_BID. |
| Review gates (color team) | C.A.S.E. (Cognitive Acquisition Systems Engineering); Ignition M4 Proposal Writing; Launchpad L4 Networker | `rules/apmp-color-teams.yaml`; `rules/color-team.yaml`; `prompts/critics/pink-team.md`; `prompts/critics/red-team.md`; `prompts/critics/gold-team.md`; `prompts/critics/black-hat.md`; `prompts/critics/white-glove.md`; `playbooks/apmp/apmp-color-teams.md` | AUDIT | Deterministic pink→red→gold→white-glove sequence; black-hat = the adversarial read. |
| Readiness / pre-submission gate | Ignition M7 The Harness (A.N.D.R.O.I.D. Ops); C.A.S.E.; The Ascension (System Commander) | `rules/submission.yaml`; `formulas/readiness_score.py`; `formulas/readiness-score.formula.yaml`; `formulas/quality_gate.py`; `playbooks/audit-report-composer.md` | AUDIT · APPROVE · SUBMIT | Terminal Target-stage gate; readiness + quality scores. |
| Public-side governance: FAR / grants policy / compliance | Ignition M2 Contract Mastery; The Ascension (Galaxy Commander); Launchpad L3 Architect | `rules/grant-compliance.yaml`; `rules/nist-800-53/`; `rules/section-l-format-compliance.yaml`; `rules/pricing-guardrails.yaml` | AUDIT · APPROVE | Deterministic FR-COMP gates; NIST 800-53 control mappings; compliance personas. |
| Gate owner with standing vs. with process | The Ascension (Orbit/System/Galaxy Commander); Launchpad L5 Leader | `prompts/personas/compliance-officer.md`; `prompts/system-base.md` | APPROVE | ADR 0016: humans stay Accountable for irreversible gates. |
| The human stays Accountable when a machine runs the gate | C.A.S.E.; Ignition M6 Prompts; Launchpad L3 Architect → L4 Networker | — (human side: [`modules/human-ai-collaboration.md`](../modules/human-ai-collaboration.md) + [`practice/human-ai-drills.md`](../practice/human-ai-drills.md); judgment items CH-23 "The Agent's 0.62" and CH-24 "The Ghost Pass That Missed the Collision") | APPROVE · AUDIT | The v0.5.0 taught realization of how-the-machine-learns: the agent computes, the human owns the facts. |

---

## <a name="5-scoring--price-to-win"></a>5. Scoring & price-to-win — `doctrine/05-scoring-and-price-to-win.md`

| Curriculum concept (durable) | Launchpad Sandbox fellowship element | DNA artifact path (current stack — changes) | Pipeline stage | Notes |
|---|---|---|---|---|
| Score = pWin × value | Ignition M5 PWIN & Dream Score; Launchpad L3 Architect | `formulas/pwin_scorer.py`; `formulas/pwin-shipley.formula.yaml` | SCORE | Seven-criteria Shipley-aligned pWin composite. |
| Threshold discipline (pass/fail line) | Ignition M5 PWIN & Dream Score; The Ascension (System Commander) | `formulas/risk_score.py`; `formulas/pwin-shipley.formula.yaml` (thresholds 0.70/0.50/0.30/0.20) | SCORE · CATCH | The machine-side threshold is `rules/bid-no-bid.yaml` disposition; Dream Score threshold 0.42 lives in dream-track. |
| pWin as a defensible opinion (factor rubrics) | Ignition M5 PWIN & Dream Score; Launchpad L3 Architect | `formulas/pwin_scorer.py`; `formulas/pwin-shipley.formula.yaml`; `prompts/personas/bid-no-bid-analyst.md` | SCORE | Factor-weighted, auditable composite. |
| Price-to-win as a position (floor, competitive range, evaluation) | Ignition M5 PWIN & Dream Score; The Ascension (Galaxy Commander); Launchpad L3 Architect | `formulas/pricing_to_win.py`; `formulas/pricing-to-win.formula.yaml`; `formulas/loe_burdened_rate.py`; `formulas/incumbency_pressure.py`; `rules/pricing-floor.yaml`; `rules/pricing-guardrails.yaml`; `prompts/personas/price-to-win.md`; `playbooks/pricing/cost-volume.yaml` | SCORE · DESIGN | Margin-floor enforcement per contract type; LOE-burdened rate; incumbent pressure. |
| Capture readiness (are we ready to pursue well?) | Ignition M5 PWIN & Dream Score; Ignition M3 ORBITAL; Launchpad L3 Architect | `formulas/capture_readiness_index.py`; `formulas/capture-readiness-index.formula.yaml`; `rules/capture.yaml` | SCORE · PURSUE | Readiness index consumed at capture gates. |
| The pipeline as a numbers system (funnel, weighted pipeline, B&P budget) | Ignition M5 PWIN & Dream Score; Launchpad L3 Architect | — (human side: [`modules/graduate/pipeline-economics.md`](../modules/graduate/pipeline-economics.md) GE 650; judgment item CH-26 "The Pipeline Under the Budget Ceiling") | SCORE · CATCH | The v0.5.0 graduate elective that turns scoring and pWin into portfolio arithmetic. |

---

## <a name="6-orbital-business-structure"></a>6. ORBITAL business structure — `doctrine/06-orbital-business-structure.md`

| Curriculum concept (durable) | Launchpad Sandbox fellowship element | DNA artifact path (current stack — changes) | Pipeline stage | Notes |
|---|---|---|---|---|
| The seven axes: Objective, Resources, Budget, Indicators, Transport, Activities, Logistics | O.R.B.I.T.A.L. Framework™; Ignition M3 ORBITAL; Launchpad L3 Architect | `rules/orbital-to-proposal-map.yaml`; `rules/ubf.yaml` | PURSUE | DNA encodes the axis → proposal-section mapping, not the record itself. |
| The ORBITAL record (system of record) | O.R.B.I.T.A.L. Framework™; Dream Kit "ORBITAL Template JSON (Dream Kit)"; Launchpad L3 Architect | — (the `ORBITAL` doctype with 7-axis child tables lives in `DreamLimited/dream-dash`, not in DNA) | PURSUE | Stack note: swap-in of a different system of record is a map update, not a doctrine change. |
| Structure-first, document-second; proposal built off the ORBITAL | O.R.B.I.T.A.L. Framework™; Ignition M3 ORBITAL; C.A.S.E. | `rules/orbital-to-proposal-map.yaml`; `playbooks/dream-sequence/autonomous-capture-dream-sequence.yaml` (phase `orbital-scaffold`) | PURSUE · DESIGN | The scaffold phase in the 14-phase sequence. |
| Proposal volumes from the axes (technical/management/past-performance/pricing) | Ignition M4 Proposal Writing; O.R.B.I.T.A.L. Framework™; Launchpad L3 Architect | `playbooks/volumes/technical-volume.yaml`; `playbooks/volumes/management-volume.yaml`; `playbooks/volumes/past-performance-volume.yaml`; `playbooks/pricing/cost-volume.yaml` | DESIGN | Volume templates the ORBITAL feeds. |

---

## <a name="7-dream--orbital--world-lifecycle"></a>7. Dream → ORBITAL → World lifecycle — `doctrine/07-lifecycle-dream-orbital-world.md`

| Curriculum concept (durable) | Launchpad Sandbox fellowship element | DNA artifact path (current stack — changes) | Pipeline stage | Notes |
|---|---|---|---|---|
| Three states: Dream (seed), ORBITAL (structured pursuit), World (entity) | SuperNova Strategy (9 stages); The Ascension; The Transcendence | `rules/ubf.yaml` | ALL | UBF cosmology rule — the machine's state model. |
| The lifecycle at pipeline altitude vs. strategic altitude | SuperNova Strategy (9 stages); GROWTH Accelerator™; The Ascension | `rules/growth-lifecycle.yaml`; `playbooks/pipeline-doctrine.md` | ALL | GROWTH stages = the work plan; lifecycle = the meaning. |
| GROWTH stages (Gauge…Health) as the production arc | GROWTH Accelerator™; Ignition M3 ORBITAL; Launchpad L2 Builder | `rules/growth-lifecycle.yaml` | ALL | See concept 3. |
| The cosmology loop: won World re-seeds new Dreams | The Transcendence (stewardship); SuperNova Strategy; The Ascension (Galaxy Commander) | `rules/cosmology-loop.yaml`; `rules/agent-budgets.yaml` | AWARD · DELIVER · EVOLVE · SENSE | Self-funding seed-budget loop; fires autonomously per ADR 0016/0250. |
| Delivery → past performance → next pWin | The Transcendence; Ignition M9 Legacy Builder; Launchpad L5 Leader | `rules/past-performance-retrieval.yaml`; `playbooks/06-post-submission.md`; `rag-corpus/dreamlimited-past-performance/` | DELIVER · LEARN · EVOLVE | Past-performance evidence is the compounding input. |

---

## <a name="8-stack-agnostic-principle"></a>8. Stack-agnostic principle — `doctrine/08-tools-change-concepts-dont.md`

| Curriculum concept (durable) | Launchpad Sandbox fellowship element | DNA artifact path (current stack — changes) | Pipeline stage | Notes |
|---|---|---|---|---|
| Concepts are durable; tools are swappable | All fellowship levels (the founding posture); A.N.D.R.O.I.D. Ops™ (the harness is the swappable layer) | — (principle; this map itself is the update point) | — (meta) | No single DNA artifact "encodes" this; the versioned package discipline does. |
| The machine doctrine is versioned so the concept stays stable | Dream Kit (operational AI layer); all fellowship levels | `VERSION`; `dna-manifest.yaml`; `VERSIONING.md` (DNA `v0.18.2`) | — (meta) | SemVer pinning is the mechanism that lets the stack change without the doctrine changing. |
| When a tool changes, the mapping updates, not the doctrine | All fellowship levels | **this file** — `align/concept-to-system-map.md` | — (meta) | The rule this directory exists to hold. |

---

## <a name="9-the-ravonics-teaching-case"></a>9. The Ravonics teaching case — `case-study/ravonics.md`

| Curriculum concept (durable) | Launchpad Sandbox fellowship element | DNA artifact path (current stack — changes) | Pipeline stage | Notes |
|---|---|---|---|---|
| Ravonics is the shared canary company (HUBZone, UEI `YCBDVKN1A9G7`, CAGE `20DS8`, NAICS 541512/541330/541715/518210, INSTAR Lab STTR partner) | C.A.S.E. (Cognitive Acquisition Systems Engineering); all fellowship levels use the same canary | — (not yet encoded in DNA; no `ravonics` fixture exists in `DreamLimited/dna` @ v0.18.2) | — (all, as the test object) | Machine-side golden-thread validation of the same company lives in `DreamLimited/Overview`: `scripts/verify-golden-thread` (GT_COMPANY = "Ravonics LLC", DREAM_SCORE_THRESHOLD = 0.42) and `dashboard/data/golden-thread.js`. When DNA gains a Ravonics fixture, cite it here. |
| The doctrine is validated end-to-end on a real company | C.A.S.E.; The Ascension; The Transcendence | — (see above) | — (all) | Human curriculum and machine golden-thread practice the same doctrine through the same case. |
| Real-feeling win/loss patterns beyond the canary company | C.A.S.E.; Launchpad L2 Builder → L3 Architect | — (human side: [`case-library/`](../case-library/) — four anonymized teaching cases: compliance matrix, price band, teaming, ghost theme) | — (all, as the teaching object) | The v0.5.0 case library turns the doctrine into recognizable win/loss patterns, one lesson per case. |

---

## <a name="10-capture--competitive-strategy"></a>10. Capture & competitive strategy — `doctrine/09-capture-and-competitive-strategy.md`

| Curriculum concept (durable) | Launchpad Sandbox fellowship element | DNA artifact path (current stack — changes) | Pipeline stage | Notes |
|---|---|---|---|---|
| Capture as deliberate competitive strategy (the seven-gate BD ladder) | Ignition M3 ORBITAL; Launchpad L3 Architect | `rules/shipley-capture-gates.yaml`; `rules/capture.yaml`; `playbooks/03-proposal-strategy.md` | SENSE · FIND · PURSUE | The seven-gate capture arc; capture readiness consumed at the capture gates. |
| Discriminators and ghost themes | Ignition M4 Proposal Writing; Launchpad L3 Architect | `rules/capture.yaml`; `playbooks/03-proposal-strategy.md`; `prompts/personas/capture-manager.md` | DESIGN | The differentiation discipline — what the ghost theme encodes. |
| Black-hat and competitor analysis | C.A.S.E. (Cognitive Acquisition Systems Engineering); Ignition M4 Proposal Writing; Launchpad L4 Networker | `prompts/critics/black-hat.md`; `rules/bid-no-bid.yaml` | DESIGN · AUDIT | The adversarial read: what the incumbent and the evaluator would say. |
| Capture management as a role (the person who runs the ladder) | Ignition M3 ORBITAL; Launchpad L4 Networker | `prompts/personas/capture-manager.md`; `prompts/stages/capture.md` | PURSUE | Capture-manager persona + stage operating prompt. |

---

## <a name="11-post-submission--win"></a>11. Post-submission & win — `doctrine/10-post-submission-and-win.md`

| Curriculum concept (durable) | Launchpad Sandbox fellowship element | DNA artifact path (current stack — changes) | Pipeline stage | Notes |
|---|---|---|---|---|
| Post-submission discipline (the submission is not the end) | Launchpad L2 Builder → L3 Architect | `prompts/stages/review.md`; `prompts/stages/handoff.md`; `rules/submission.yaml` | SUBMIT · AUDIT | Review + handoff stage prompts and the pre-submission checklist. |
| Discussions and final proposal revisions | Ignition M4 Proposal Writing; Launchpad L3 Architect | `prompts/stages/review.md`; `playbooks/03-proposal-strategy.md` | SUBMIT | Orals/discussions strategy. |
| Debrief, protest, and the public record | Ignition M2 Contract Mastery; Launchpad L3 Architect | `rules/submission.yaml`; `rules/past-performance-retrieval.yaml` | AWARD · LEARN | The post-award record is public and feeds the next pWin. |
| Past performance as the compounding input | Ignition M9 Legacy Builder; Launchpad L5 Leader | `rules/past-performance-retrieval.yaml`; `playbooks/06-post-submission.md`; `rag-corpus/dreamlimited-past-performance/` | DELIVER · LEARN · EVOLVE | Past-performance evidence compounds (see concept 7). |
| The win re-seeds the pipeline (cosmology loop) | The Transcendence (stewardship); SuperNova Strategy; The Ascension (Galaxy Commander) | `rules/cosmology-loop.yaml`; `rules/growth-lifecycle.yaml` | AWARD · DELIVER · EVOLVE · SENSE | Won-World → Dream Surplus → re-seeds Discovery. |
| The proposal in person (orals: architecture, rehearsal, hostile Q&A) | Ignition M4 Proposal Writing; Launchpad L3 Architect | — (human side: [`modules/graduate/elective-orals-coaching.md`](../modules/graduate/elective-orals-coaching.md) GE 651; judgment item CH-25 "The Rehearsal That Met the Hostile Room") | SUBMIT · DESIGN | The v0.5.0 elective that turns doctrine/10's orals rules into a coaching discipline. |

---

## Degree ↔ Fellowship ↔ Course Crosswalk

*The four human degree guides live in the SharePoint Launchpad Sandbox; the degree-tier curricula for three of them now live in this repo. This crosswalk is the key that ties each degree to the fellowship ladder and to the repo-side program overview and teaching-plan layer.*

| Degree guide (Launchpad Sandbox) | Innovator's Launchpad level | Repo curriculum (this repo) | Core doctrine focus |
|---|---|---|---|
| **Bachelor's** (Dream Foundations) | **L1 Explorer** | [course/undergraduate-program-overview.md](../course/undergraduate-program-overview.md) (B.S. in Government Business Development) + [modules/undergraduate/](../modules/undergraduate/) | Where the money lives, RFP/NOFO basics, DREAM discovery, the pursuit pipeline |
| **Master's** (Curiosity in Action) | **L2 Builder** | [course/graduate-program-overview.md](../course/graduate-program-overview.md) (M.S. in Capture Management) + [modules/graduate/](../modules/graduate/) | O.R.B.I.T.A.L. structure, proposal writing, scoring & price-to-win, competitive strategy |
| **Doctoral** (Visionary Leadership) | **L3 Architect + L4 Networker** | [course/doctoral-program-overview.md](../course/doctoral-program-overview.md) (research doctorate) + [modules/doctoral/research-agenda.md](../modules/doctoral/research-agenda.md) | Gates & governance, pipeline orchestration, research methods, empirical design |
| **Global Impact** (Post-Doctoral & Executive) | **L5 Leader** | [course/forever-learning-program.md](../course/forever-learning-program.md) (lifetime tier) + [modules/forever-learning/](../modules/forever-learning/) | Lifecycle, cosmology loop, executive stewardship |

---

## Concepts with no DNA counterpart yet

These are called out explicitly so the map stays honest rather than inventing paths:

| Curriculum concept | Status |
|---|---|
| **Ravonics canary fixture in DNA** | Not yet encoded — the machine-side fixture lives in `DreamLimited/Overview` (`scripts/verify-golden-thread`), not in the DNA package. If DNA later ships a `fixtures/ravonics*` artifact, add it to concept 9. |
| **The ORBITAL record itself (7-axis doctype)** | Lives in `DreamLimited/dream-dash` (Frappe doctype + child tables), not in DNA. DNA carries the *mapping* (`rules/orbital-to-proposal-map.yaml`), not the record. |
| **UEI / CAGE / SAM.gov master record** | A registry data-plane fact consumed by Source Now connectors (`rules/source-now-data-manifest.yaml`), not a DNA rule. Government facts live in the `literacy/` layer on the curriculum side. |
| **The 0.42 Dream Score threshold** | Encoded in `dream-track` (and mirrored by the Overview golden-thread verifier), not in a DNA artifact. DNA carries the pWin composite and bid/no-bid rubric; the pipeline threshold is a stack-side constant. |

## Cross-repo source map

| Layer | Repo | Canonical paths |
|---|---|---|
| Human doctrine (immutable) | `DreamLimited/dream-curriculum` | `doctrine/01-10*.md`, `literacy/*`, `modules/*`, `course/*`, `case-study/ravonics.md` |
| Machine doctrine (versioned) | `DreamLimited/dna` @ `v0.18.2` | `rules/*`, `formulas/*`, `playbooks/*`, `prompts/*`, `rag-corpus/*`, `contracts/v1/*` |
| Pipeline scoring threshold | `DreamLimited/dream-track` | Dream Score threshold 0.42 (stack constant) |
| ORBITAL record + Dream Auditor UI | `DreamLimited/dream-dash` | `ORBITAL` doctype + 7-axis child tables; `/auditor/` |
| Golden-thread validation (Ravonics) | `DreamLimited/Overview` | `scripts/verify-golden-thread`, `dashboard/data/golden-thread.js` |
