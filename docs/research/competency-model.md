---
title: "Competency Model — Federal Business Development, Capture Management & Government Contracting"
---

# Competency Model — Federal Business Development, Capture Management & Government Contracting

*A per-degree competency model for the Dream Pursuit Doctrine curriculum (DreamLimited Launchpad), grounded in the professional bodies of knowledge, real job series, existing US degree programs, the curriculum itself, and the DNA canon.*

**Status:** Research deliverable (draft for curriculum-design use). **Date:** 2026-08-05.
**Scope:** Bachelor's (Dream Foundations) · Master's (Curiosity in Action) · Doctorate (Visionary Leadership), per the degree ↔ fellowship ↔ course crosswalk in `align/concept-to-system-map.md`.

---

## How this document is grounded

Every competency statement is tagged with its source ground:

| Tag | Ground | Primary sources |
|---|---|---|
| `[W-APMP]` | Web — APMP Body of Knowledge / certification levels | APMP Foundation/Practitioner/Professional syllabi, joint syllabus competency areas |
| `[W-SHIP]` | Web — Shipley BD Lifecycle, Capture Guide, Proposal Guide | Shipley seven-gate lifecycle, color-team cadence (verified independently of the DNA paraphrase) |
| `[W-1101]` | Web — OPM/agency GS-1101 Business & Industry series PDs | Commerce GS-1101-13/14 PDs; OPM Group Coverage Qualification Standard |
| `[W-JOB]` | Web — real capture/proposal/BD manager job descriptions | Defense-prime capture-manager and proposal-manager postings (Booz Allen, Leidos, AECOM, Lockheed Martin, etc.) |
| `[W-NCMA]` | Web — NCMA certifications / Contract Management BOK | CCMA / CFCM / CCCM / CPCM requirements |
| `[W-PROG]` | Web — existing US degree/certificate programs | GMU, Mount St. Mary's, UAH, Florida Tech, American Public University, University of the Potomac, ODU |
| `[R-*]` | Repo read — this curriculum | `doctrine/01`–`10`, `literacy/*`, `modules/*`, `course/*` (program overviews + degree-tier course syllabi, e.g. `course/undergraduate-210-capture-and-pursuit-pipeline.md`, `course/undergraduate-302-proposal-production-and-compliance.md`, `course/graduate-elective-proposal-management-color-teams.md`), `case-study/ravonics.md`, `align/concept-to-system-map.md` |
| `[D-*]` | Repo read — DNA canon (`DreamLimited/dna` @ v0.18.2) | `playbooks/shipley-capture.md`, `playbooks/shipley-proposal.md`, `rules/shipley-capture-gates.yaml`, `rules/orbital-to-proposal-map.yaml`, `rules/teaming.yaml`, `rules/bid-no-bid.yaml`, `rules/color-team.yaml`, `rules/pricing-floor.yaml` |
| `[I]` | Inference / synthesis by the researcher | where no single source states it, cross-source synthesis |

**A note on the Launchpad degree guides:** the four degree guides themselves live in the SharePoint Launchpad Sandbox and are not in this repo. This model uses the repo-side crosswalk (`align/concept-to-system-map.md`, "Degree ↔ Fellowship ↔ Course Crosswalk") as the authoritative mapping of Bachelor's → L1 Explorer, Master's → L2 Builder, Doctorate → L3 Architect + L4 Networker. The mapping column in Section 3 therefore shows which *repo* documents develop each competency. Two doctorates-adjacent things must be kept distinct: the **research doctorate** (the degree-tier course files — `course/doctoral-*.md`, a research program in methods and dissertation) now exists in this repo, and the crosswalk's fellowship-column **"advanced modules" (C.A.S.E.-adjacent: AI systems, capture management, partnerships)** — the doctoral-advanced research seminars in `course/doctoral-advanced/` — are built too. Together they complete the doctoral tier; Section 3 maps what each develops.

---

## 1. Competency taxonomy (eight domains)

The profession — the people who win and manage federal work for a company or a grantee — is an integrated discipline, not a single job title. The same eight domains recur across the Shipley lifecycle, the APMP competency framework, the GS-1101/1102 job series, and this curriculum. The taxonomy below is organized to be **pipeline-aware** (each domain is tagged with the pipeline stages it feeds, using the curriculum's stage vocabulary from `doctrine/03`).

### D1. Market Intelligence & Opportunity Sensing — *SENSE*
**Definition:** knowing where federal money lives and being able to watch it — market structure, identifiers and registries, bulletin boards and forecasts, vehicles, small-business programs, segmentation, and competitive/incumbent intelligence.
**Sub-competencies:** three kinds of money (contracts / grants / OTA & cooperative agreements) and their rulebooks; UEI / CAGE / NAICS / SAM.gov identifiers; SAM.gov, Grants.gov, agency forecasts; GSA Schedules, IDIQ, GWAC, task orders; HUBZone / 8(a) / WOSB / VOSB / SBIR / STTR set-asides; market segmentation; competitive landscape and incumbent analysis; published-award intelligence (FPDS / USAspending).
**Grounding:** `[R-d01]` `[R-lit-where-money-flows]` `[W-SHIP phases 0–2]` `[W-1101]` `[D-rules/shipley-capture-gates gate-1/2]` `[W-PROG GMU govcon minor, AMU/APU BA]`

### D2. Capture Strategy — *FIND · CATCH · PURSUE*
**Definition:** the pre-proposal discipline of deciding what to chase and positioning to win it — win strategy, discriminators, ghost themes, customer engagement, capture planning, and the capture gates (bid/no-bid through readiness).
**Sub-competencies:** win strategy and win themes; discriminators vs. baselines; ghost themes from customer signal; customer engagement cadence and relationship intelligence (DREAM); capture planning (Shipley gates 1–4); bid/no-bid decision-making; factor-based pWin estimation; capture readiness; incumbent displacement.
**Grounding:** `[W-SHIP capture guide, gates 0–4]` `[W-JOB capture manager]` `[W-APMP Development competency area]` `[D-playbooks/shipley-capture.md]` `[D-rules/shipley-capture-gates gate-3/4]` `[R-d03]` `[R-d04]` `[R-glossary "capture"]`

### D3. Proposal Development — *DESIGN · AUDIT · SUBMIT*
**Definition:** turning a win strategy into a compliant, persuasive, on-time proposal — solicitation decode, compliance matrix, proposal strategy and outline, volume development, persuasive writing, color teams, and submission mechanics.
**Sub-competencies:** Section L/M/C and NOFO decode; compliance matrix construction and coverage management; annotated outlines, storyboards, page budget; technical / management / past-performance / pricing volumes; persuasive, customer-centric writing; color teams (pink → red → gold → white-glove); technical-cost reconciliation; submission portals, packaging, deadline margin.
**Grounding:** `[W-JOB proposal manager]` `[W-APMP Planning/Management competency areas]` `[W-SHIP proposal guide, gates 4–6]` `[D-playbooks/shipley-proposal.md]` `[D-rules/orbital-to-proposal-map.yaml]` `[D-rules/color-team.yaml]` `[R-d02]` `[R-lit-rfp]` `[R-lit-nofo]`

### D4. Pricing & Finance — *SCORE · PURSUE · DESIGN*
**Definition:** the arithmetic of a pursuit — what it costs, what it is worth, what to bid, and whether the economics are sound. Includes pursuit scoring, price-to-win, cost build-up, and pursuit/business unit finance.
**Sub-competencies:** score = pWin × value; threshold discipline; factor-based pWin rubrics; price-to-win (cost floor, competitive range, evaluation posture); LPTA vs. best-value; pricing posture (premium / parity / aggressive); labor categories, rates, basis of estimate (BOE); B&P budgeting and pursuit-cost economics; unit economics and the sunk-cost trap; revenue flywheel / cosmology loop valuation.
**Grounding:** `[W-SHIP pricing, green team]` `[W-JOB capture manager PTW]` `[W-APMP Development — winning price]` `[W-NCMA CFCM/CPCM cost]` `[D-rules/pricing-floor.yaml]` `[D-rules/pricing-guardrails.yaml]` `[R-d05]` `[R-mod-mba]`

### D5. Contracts & Compliance — *QUALIFY · AUDIT · APPROVE*
**Definition:** the rule layer — the FAR, grants policy, contract types, eligibility, certifications, and the compliance discipline that keeps a pursuit legal and a company safe.
**Sub-competencies:** FAR / DFARS / agency supplements and grants policy; contract types (FFP, T&M, cost-reimbursable) and vehicles; reps & certs and representations; subcontracting plans; set-aside eligibility and size standards (13 CFR); NAICS alignment; OCI, security (NIST 800-53), data rights / IP; debriefs and protests; compliance reading as a professional skill.
**Grounding:** `[W-1101]` `[W-NCMA CMBOK]` `[W-PROG UAH/GMU/Florida Tech contract law]` `[D-rules/bid-no-bid.yaml hard knockouts]` `[D-rules/teaming.yaml set-aside constraints]` `[R-d02]` `[R-d04]` `[R-mod-mpa]`

### D6. Teaming & Partnerships — *FIND · PURSUE · DESIGN · DELIVER*
**Definition:** deciding who to go to market with and structuring it — teaming posture, partner evaluation, agreements, and the small-business/research ecosystem.
**Sub-competencies:** teaming posture (prime solo / prime with subs / sub / JV / mentor-protege); capability gap analysis; partner evaluation rubrics; teaming and subcontracting agreements; workshare planning; STTR research partnerships; small-business ecosystem navigation; prime/sub relationship management through delivery.
**Grounding:** `[W-JOB capture manager teaming]` `[W-APMP teaming identification]` `[D-rules/teaming.yaml]` `[D-playbooks/shipley-capture.md phase 4]` `[R-d01]` `[R-mod-si session 4]` `[R-case-ravonics]`

### D7. Leadership, Governance & Ethics — *ALL STAGES (cross-cutting)*
**Definition:** running the machine — gates, portfolios, organizations — and the trust layer that makes the whole market function.
**Sub-competencies:** gate design (trigger / criteria / decision / owner) and gate ownership modes; bid/no-bid and readiness gate governance; portfolio and pipeline management; organizational design for BD/capture/proposal functions; executive and board communication; ethics, integrity, and the fair-process trust model; mentorship and team leadership; the doctrine as shared language between humans and machines.
**Grounding:** `[W-SHIP gate governance]` `[W-JOB senior BD/capture leadership]` `[W-APMP Professional impact + behaviour/attitude]` `[D-rules/shipley-capture-gates.yaml]` `[R-d04]` `[R-mod-si]` `[R-d08]`

### D8. Data & Analytics — *SCORE · LEARN · EVOLVE (cross-cutting)*
**Definition:** turning published data, pursuit records, and outcomes into better decisions — scoring models, pipeline metrics, win/loss analysis, and the disciplined use of AI/automation without depending on any one tool.
**Sub-competencies:** pWin factor rubrics and composite scoring; threshold discipline as analytics; pipeline funnel metrics and conversion; win/loss and debrief analytics; published-award analytics (FPDS / USAspending / SAM); retrospective and lessons-learned loops; evaluating AI/automated outputs against the doctrine (stack-agnostic literacy); model governance and telemetry/attribution.
**Grounding:** `[W-JOB BD analytics/CRM]` `[W-APMP information research & management]` `[D-formulas/pwin-scorer.py (referenced)]` `[D-rules/shipley-capture-gates.yaml failure modes]` `[R-d05]` `[R-d08]`

---

## 2. Per-degree competency statements (KSA lists)

Each level's statements are written as **abilities** ("a graduate can…") because the curriculum's own philosophy is to test what a student can *do*, not what they can recite (`course/assessments-and-rubric.md`, "Concepts, not recall"). Statements are grouped by domain and tagged with their grounding. Statements without a `[R-*]` tag are *not* yet developed by the current curriculum — they are either partially covered (flag `▸` = partial) or gaps (flag `✗` = gap), which Section 3 consolidates.

Legend for the level rows: `✓` developed by current curriculum · `▸` partially developed · `✗` not developed (gap).

---

### 2A. Bachelor's level — Dream Foundations (Launchpad L1 Explorer)

*Course audience: shared-core + literacy. Career target: entry-level — BD/capture analyst, proposal coordinator, contracts/grants assistant, small-business pursuit support. Level anchor: the entry-level professional can do the discipline *under supervision* with a durable mental model.*

| Domain | KSA statements — a Bachelor's graduate can… | Ground |
|---|---|---|
| **D1 Market Intelligence** | 1. Explain the three kinds of federal money and trace a dollar from appropriation to award `✓` | `[R-d01]` `[R-lit-where-money-flows]` |
| | 2. Name and locate the four identifiers (UEI, CAGE, NAICS, SAM.gov) and state why each matters `✓` | `[R-d01]` `[R-glossary]` |
| | 3. Find a contract opportunity on SAM.gov and a NOFO on Grants.gov and identify the visible identifiers `✓` | `[R-d01]` `[R-mod-shared-core S1]` |
| | 4. Explain the small-business programs (HUBZone, 8(a), WOSB/VOSB, SBIR/STTR) as a statutory market design `✓` | `[R-d01]` `[R-glossary]` |
| | 5. Read a published award record and say what it reveals about a market `▸` | `[R-mod-mpa S1]` `[W-1101]` |
| | 6. Produce a basic market map for one company (competitors, partners, certification advantages) `▸` | `[R-mod-si S4]` `[R-case-ravonics]` |
| | 7. Monitor agency forecasts and amendments as a discipline (not an event) `▸` | `[R-d02 "forecasts and amendments"]` |
| | 8. Build a market-segmentation view of a target NAICS/agency band `✗` | `[W-SHIP phase 0]` `[D-shipley-capture-gates gate-1]` |
| **D2 Capture Strategy** | 1. Draw the pursuit pipeline (sense → learn) and place any activity in it `✓` | `[R-d03]` `[R-mod-shared-core S2]` |
| | 2. State the four parts of a gate and explain why criteria are written in advance `✓` | `[R-d04]` `[R-mod-shared-core S2]` |
| | 3. Make and defend a basic bid/no-bid recommendation from a score `✓` | `[R-d05]` `[R-mod-shared-core S5]` `[R-capstone]` |
| | 4. Distinguish a "no" as a professional outcome from failure `✓` | `[R-d03 stage 2]` `[R-d04]` |
| | 5. Define capture as a distinct discipline from proposal writing, and describe the engagement timeline concept `✓` | `[R-d09]` `[R-cour-dl210]` `[R-glossary "capture"]` `[D-playbooks/shipley-capture.md principles]` |
| | 6. Explain what a win theme and a discriminator are, and give an example `✓` | `[R-d09]` `[R-cour-dl210]` `[W-SHIP capture]` `[W-JOB]` |
| | 7. Build a factor-based pWin scorecard with evidence per factor `✓` | `[R-cour-dl220]` `[R-d05]` `[W-APMP development]` `[D-formulas/pwin-shipley]` |
| | 8. Distinguish ghost themes (customer-signaled) from posturing `✓` | `[R-d09]` `[R-cour-dl210]` `[D-shipley-capture.md phase 5]` `[W-SHIP]` |
| **D3 Proposal Development** | 1. Read an RFP/NOFO: locate the SOW, eligibility, evaluation criteria, deadlines, format rules `✓` | `[R-d02]` `[R-lit-rfp]` `[R-lit-nofo]` |
| | 2. Build a compliance matrix from a real RFP (every "shall," mapped) `✓` | `[R-d02]` `[R-lit-rfp]` `[R-mod-shared-core S3]` |
| | 3. Write a one-page strategy reading (compliance vs. strategy passes) `✓` | `[R-lit-rfp]` `[R-mod-shared-core S3]` `[R-capstone]` |
| | 4. Explain Section L vs. Section M and why a proposal mirrors the evaluation factors `✓` | `[R-d02]` `[R-lit-rfp]` |
| | 5. Draft a persuasive, customer-centric section against stated criteria `✓` | `[R-cour-dl302]` `[W-APMP foundation writing]` `[W-JOB proposal writer]` |
| | 6. Name the color-team sequence and the stance of each color `✓` | `[R-cour-dl210]` `[R-cour-dl302]` `[R-glossary "color team"]` `[R-d04 review gates]` `[W-SHIP]` |
| | 7. Manage an annotated outline and page budget for a proposal `✓` | `[R-cour-dl302]` `[W-JOB proposal manager]` `[D-shipley-proposal.md phase 2]` |
| | 8. Produce a submission package to format rules with deadline margin `✓` | `[R-cour-dl302]` `[W-JOB]` `[D-shipley-proposal.md phase 6]` `[D-rules/submission.yaml]` |
| **D4 Pricing & Finance** | 1. Compute a pursuit score = pWin × value and compare opportunities `✓` | `[R-d05]` `[R-mod-shared-core S5]` |
| | 2. Explain what a threshold gate does and why the discipline matters more than the number `✓` | `[R-d05]` `[R-d04]` |
| | 3. Explain price-to-win as a position (floor, competitive range, evaluation posture) `✓` | `[R-d05]` |
| | 4. Distinguish LPTA from best-value and its pricing implication `✓` | `[R-d05]` `[R-acronym-decoder]` `[R-mod-mba S2]` |
| | 5. Produce a one-page budget sketch for a NOFO with justified line items `✓` | `[R-lit-nofo "budget"]` `[R-midterm]` |
| | 6. Model a pursuit's unit economics (value, cost, margin, expected value) `▸` | `[R-mod-mba S1]` — *MBA track only* |
| | 7. Build a basis-of-estimate (BOE) with labor categories and rates `✓` | `[R-cour-dl220]` `[W-JOB]` `[D-playbooks/pricing/*]` |
| | 8. Apply a pricing floor / guardrail to a recommended bid `✓` | `[R-cour-dl220]` `[D-rules/pricing-floor.yaml]` |
| **D5 Contracts & Compliance** | 1. Explain what the FAR is and why it exists; compare contract vs. grant rulebooks `✓` | `[R-d02]` `[R-lit-where-money-flows]` `[R-mod-mpa S2]` |
| | 2. Locate compliance requirements ("shall"s, certifications, clauses) in a solicitation `✓` | `[R-lit-rfp]` `[R-d02]` `[R-mod-mpa S2]` |
| | 3. Explain set-aside eligibility as a gate and name the SBA programs `✓` | `[R-d01]` `[R-glossary]` |
| | 4. Explain why a pursuer who games the rules is a legal and trust risk `✓` | `[R-d04 "ethics and fairness"]` |
| | 5. Identify reps & certs obligations in a Section K `▸` | `[R-lit-rfp Section K]` |
| | 6. Apply a size-standard / NAICS-alignment eligibility screen to a pursuit `▸` | `[R-cour-dl210]` (bid/no-bid hard knockouts) `[R-cour-dl303]` (set-aside floors for teams) `[D-rules/sba-size-standards.yaml]` `[D-rules/naics-alignment.yaml]` |
| | 7. Identify OCI, data-rights, and NIST/security requirements in a solicitation `✗` | `[D-rules/nist-800-53]` `[W-NCMA]` |
| **D6 Teaming & Partnerships** | 1. Explain why STTR requires a research-institution partner and what that buys `✓` | `[R-d01]` `[R-case-ravonics]` |
| | 2. Explain certification posture as strategy, not paperwork `✓` | `[R-mod-mba S4]` `[R-mod-si S4]` |
| | 3. Reason about "who to team with" from a market map `▸` | `[R-mod-si S4]` `[R-case-ravonics Q2]` |
| | 4. Explain prime vs. subcontractor posture and when each fits `✓` | `[R-cour-dl303]` `[D-rules/teaming.yaml]` `[W-JOB]` |
| | 5. Evaluate a candidate partner on a rubric `✓` | `[R-cour-dl303]` `[D-rules/teaming.yaml partner_rubric]` |
| **D7 Leadership & Ethics** | 1. Explain gate ownership modes (owner-with-standing vs. owner-with-process) `✓` | `[R-d04]` |
| | 2. Explain the trust model of the federal market and integrity as a professional skill `✓` | `[R-d04]` `[R-syllabus "integrity"]` |
| | 3. Explain the ladder of commitment and why stopping early is cheaper `✓` | `[R-d04 governance ladder]` |
| | 4. Present a bid/no-bid recommendation to a skeptical listener `✓` | `[R-capstone presentation]` `[R-mod-shared-core S5]` |
| | 5. Design a gate with all four parts for a simple pursuit `▸` | `[R-mod-si S3]` — *SI track only* |
| | 6. Assemble a pursuit organization and its roles `▸` | `[R-cour-dl210]` (capture-plan staffing concept) `[W-JOB]` `[R-mod-si S6]` |
| **D8 Data & Analytics** | 1. Turn a "feels good" opportunity into a scored, defensible number `✓` | `[R-d05]` `[R-mod-shared-core S5]` |
| | 2. Explain why pWin must be broken into auditable factors `✓` | `[R-d05]` |
| | 3. Use USAspending.gov / published awards as raw intelligence `▸` | `[R-lit-where-money-flows]` `[R-mod-mpa S1]` |
| | 4. Explain what a pipeline funnel metric (conversion at a gate) is `▸` | `[R-mod-si S2]` — *SI track only* |
| | 5. Distinguish durable doctrine from swappable tools, including AI tools `✓` | `[R-d08]` |
| | 6. Run a win/loss retrospective and extract a lesson `✓` | `[R-cour-dl210]` (week 13 learning loop) `[R-cour-dl305]` (debrief and learning loop) `[D-shipley-proposal.md phase 7]` |

**Bachelor's level summary:** strong foundation on **market literacy, solicitation reading, scoring concepts, governance, and ethics** — and, since the degree-tier course files landed, **the capture and proposal craft is now taught, not just named**. The core (DL 210, DL 220) develops capture plans, win themes and discriminators, pWin scorecards, and BOE/rate/floor arithmetic; the electives (DL 302, DL 303, DL 305) add proposal production (volumes, storyboards, submission), teaming posture and partner rubrics, and negotiation/debrief. Remaining gaps at this level are the finer, on-the-job refinements: **OCI/data-rights/NIST specifics**, polished persuasive prose at volume length, post-award administration depth, and logging a full customer-engagement cadence. These are exactly the competencies real entry-level hires finish learning on the job `[W-JOB]` — the curriculum now builds the durable frame and the first full pass of the craft (`[R-d08]`).

---

### 2B. Master's level — Curiosity in Action (Launchpad L2 Builder)

*Course audience: shared-core + MBA or MPA track. Career target: mid-level — capture manager, proposal manager, BD manager, grants manager, small-business pursuit lead. Level anchor: the graduate can **lead** a pursuit or a program **independently**, applying the doctrine to real documents and real decisions.*

| Domain | KSA statements — a Master's graduate can… | Ground |
|---|---|---|
| **D1 Market Intelligence** | 1. Everything a Bachelor's can, at a level where they own the analysis `✓` | `[R-*]` |
| | 2. Segment a target market (agencies, NAICS bands, vehicles, set-aside pools) into a pipeline `✓` | `[R-cour-ge630]` `[W-SHIP phase 0]` `[D-shipley-capture-gates gate-1]` |
| | 3. Use published award data (FPDS/USAspending) to map competitors, incumbents, and price bands `▸` | `[R-mod-mpa S1]` `[R-mod-si S4]` `[W-1101]` |
| | 4. Assess a certification posture as a go-to-market strategy and recommend additions `✓` | `[R-mod-mba S4]` `[R-case-ravonics]` |
| | 5. Track expiring contracts and incumbent displacement windows `✓` | `[R-cour-ge630]` (incumbent analysis, churn, pressure) `[D-shipley-capture.md phase 2]` `[D-rules/incumbent-displacement.yaml]` |
| **D2 Capture Strategy** | 1. Make and defend a bid/no-bid call under a stated threshold, for a real pursuit `✓` | `[R-d05]` `[R-mod-shared-core S5]` `[R-capstone]` |
| | 2. Draft a capture plan: win strategy, discriminators, staffing concept, engagement plan `✓` | `[R-cour-ge630]` (strategy memo: discriminators + displacement) `[R-cour-grad-program GC 690]` (capstone capture plan) `[D-shipley-capture.md phase 4]` |
| | 3. Build a factor-based pWin scorecard with defensible evidence per factor `✓` | `[R-cour-grad-program GC 690]` (research-grounded score) `[R-cour-dl220]` `[D-formulas/pwin-shipley.formula.yaml]` |
| | 4. Run a customer-engagement cadence and log touchpoints as capture evidence `▸` | `[R-cour-ge630]` (customer-signal memo, ghost-theme candidates) `[R-d09]` `[D-shipley-capture.md phase 5]` — *concept taught; full cadence logging remains an on-the-job habit* |
| | 5. Distinguish discriminators from baselines and design win themes that survive Red Team `✓` | `[R-cour-ge640]` (red team week) `[R-cour-ge630]` `[R-d09]` `[D-rag-corpus/shipley-capture-proposal-guide]` |
| | 6. Explain and apply the capture readiness review (proceed/defer/withdraw) `✓` | `[R-cour-dl210]` (readiness review) `[R-cour-ge640]` (gold-team submit/revise/withdraw) `[D-rules/capture.yaml]` `[D-shipley-capture-gates gate-4]` |
| **D3 Proposal Development** | 1. Everything a Bachelor's can in solicitation reading and compliance `✓` | `[R-d02]` `[R-lit-*]` |
| | 2. Lead a proposal effort: annotated outline, page budget, kickoff, review cadence `✓` | `[R-cour-ge640]` (production system weeks 1–5) `[W-JOB proposal manager]` `[D-shipley-proposal.md phase 2]` |
| | 3. Manage a compliance matrix to 100% coverage through a color-team cycle `✓` | `[R-cour-ge640]` (compliance matrix + color cadence) `[W-JOB]` `[D-shipley-proposal.md phase 1/3]` |
| | 4. Run a color-team review (pink or red) with actionable, criterion-mapped findings `✓` | `[R-cour-ge640]` (pink/red weeks + midterm red team) `[D-rules/color-team.yaml]` `[W-SHIP]` |
| | 5. Reconcile the technical and cost volumes so they tell one story `✓` | `[R-cour-ge640]` (cost-technical reconciliation week) `[D-shipley-proposal.md phase 4]` `[W-JOB]` |
| | 6. Translate a win strategy into proposal messaging across volumes `✓` | `[R-cour-ge640]` (storyboards, production plan) `[R-cour-ge630]` `[D-rules/orbital-to-proposal-map.yaml]` `[W-JOB]` |
| | 7. Write (or direct) persuasive, customer-centric proposal prose `▸` | `[R-cour-dl302]` (week 5 prose craft) `[R-cour-ge640]` (storyboarding + color-team direction) `[R-capstone defense]` `[W-JOB]` — *prose craft is now taught at undergraduate altitude (DL 302, week 5: win-theme-to-prose mapping, sentence/paragraph craft) and directed at graduate altitude (GE 640); the `▸` flags the residual on-the-job refinement — polished volume-length prose* |
| **D4 Pricing & Finance** | 1. Price a pursuit: cost floor, competitive range, recommended price, and the story `✓` | `[R-mod-mba S2]` `[R-d05]` |
| | 2. Model unit economics and expected value of a pursuit portfolio `✓` | `[R-mod-mba S1]` `[R-mod-mba S6]` |
| | 3. Model the revenue flywheel / cosmology loop compounding `✓` | `[R-mod-mba S5]` `[R-d07]` |
| | 4. Reason about the sunk-cost trap in pursuit spending `✓` | `[R-mod-mba S1]` |
| | 5. Build a BOE with labor categories, rates, and escalation `✓` | `[R-cour-gc540]` (advanced finance, FAR cost principles) `[R-cour-grad-program GC 690]` (pricing volume at FAR altitude) `[D-playbooks/pricing/*]` |
| | 6. Apply pricing floor/guardrail and cost-realism checks `✓` | `[R-cour-gc540]` `[R-cour-ge610]` (pricing posture: floor, ceiling, target) `[D-rules/pricing-floor.yaml]` `[D-rules/pricing-guardrails.yaml]` |
| | 7. Justify a grant budget against a NOFO as a reviewed factor `✓` | `[R-mod-mpa S3]` `[R-lit-nofo]` |
| **D5 Contracts & Compliance** | 1. Explain the FAR and grants policy as two halves of public governance `✓` | `[R-mod-mpa S2]` `[R-d04]` |
| | 2. Manage the post-award obligations of a grantee (reporting, payments, compliance) `✓` | `[R-mod-mpa S3]` `[R-lit-nofo]` |
| | 3. Assess a small-business program against its statutory purpose (equity lens) `✓` | `[R-mod-mpa S4]` `[R-d01]` |
| | 4. Map the oversight chain for federal spending and read a published award's paper trail `✓` | `[R-mod-mpa S5]` `[R-lit-where-money-flows]` |
| | 5. Screen a pursuit for size-standard / set-aside / vehicle / clearance hard knockouts `✓` | `[R-cour-ge620]` (set-aside-aware teaming, SBA affiliation) `[R-cour-dl210]` (bid/no-bid hard knockouts) `[D-rules/bid-no-bid.yaml]` `[D-rules/sba-size-standards.yaml]` |
| | 6. Draft a subcontracting plan that respects FAR floors `✓` | `[R-cour-ge620]` (participation floors, limitations on subcontracting) `[R-cour-dl303]` `[D-rules/teaming.yaml set_aside_constraints]` `[W-NCMA]` |
| | 7. Identify OCI, data-rights, and security obligations in a solicitation `▸` | `[R-cour-ge620]` (week 12: affiliation, OCI, IP risk) `[R-cour-grad-program GC 690]` (governance design incl. OCI posture) `[D-rules/nist-800-53]` — *OCI covered; NIST/data-rights still thinner* |
| **D6 Teaming & Partnerships** | 1. Explain teaming as the lever that converts BID_WITH_CONDITIONS to BID `✓` | `[R-cour-ge620]` (why teams win; gap-closure mechanism) `[D-rules/teaming.yaml]` `[W-JOB]` |
| | 2. Choose a teaming posture (prime solo / prime with subs / sub / JV / mentor-protege) with reasoning `✓` | `[R-cour-ge620]` (posture week) `[R-cour-dl303]` `[D-rules/teaming.yaml postures]` `[W-JOB]` |
| | 3. Evaluate a candidate partner against a rubric and negotiate a teaming agreement `✓` | `[R-cour-ge620]` (partner rubric + agreement weeks) `[R-cour-dl303]` `[D-rules/teaming.yaml partner_rubric]` |
| | 4. Run a capability gap analysis against a SOW/PWS `✓` | `[R-cour-ge620]` (gap-analysis week) `[D-rules/teaming.yaml gap_analysis]` `[W-JOB]` |
| | 5. Use the STTR research-partner model as a strategic template `✓` | `[R-d01]` `[R-mod-si S4]` `[R-case-ravonics]` |
| **D7 Leadership & Ethics** | 1. Design the full ladder of gate governance for a pursuit (criteria written in advance, owners named) `✓` | `[R-mod-si S3]` `[R-d04]` `[R-capstone]` |
| | 2. Allocate a fixed capacity budget across a portfolio and defend it `✓` | `[R-mod-si S2]` `[R-mod-mba S6]` |
| | 3. Present a doctrine-based strategy to a skeptical board / investor panel `✓` | `[R-mod-si S6]` `[R-mod-mba S6]` |
| | 4. Define the metrics a leader watches to know the pipeline is healthy `✓` | `[R-mod-si S6]` |
| | 5. Lead a pursuit team through a gate under pressure, making the decision boring on purpose `▸` | `[R-d04]` `[R-mod-si S3]` — *exercised, not assessed at "leading" depth* |
| | 6. Design the pursuit organization's operating system (roles, gates, metrics) `✓` | `[R-cour-ge640]` (production-system roles) `[R-cour-grad-program GC 690]` (governance design: gates, decision rights, ethical walls, OCI) `[W-JOB senior]` |
| **D8 Data & Analytics** | 1. Turn a pipeline into a funnel and reason about where conversion is lost `✓` | `[R-mod-si S2]` `[R-d03]` |
| | 2. Compute and defend a portfolio allocation across risk levels `✓` | `[R-mod-si S2]` `[R-mod-mba S6]` |
| | 3. Refresh pWin on material customer signal and explain why `▸` | `[R-cour-ge630]` (customer signal → ghost-theme candidates) `[R-cour-grad-program GC 690]` (research-grounded score) `[D-shipley-capture.md phase 5]` — *signal collection taught; the refresh discipline is exercised, not a standalone graded artifact* |
| | 4. Run a win/loss retrospective and feed lessons into the next pursuit `✓` | `[R-cour-ge640]` (retrospective week) `[R-cour-ge610]` (debrief as intelligence) `[D-shipley-proposal.md phase 7]` |
| | 5. Evaluate an AI/automated pursuit output against the doctrine (is it right, not just plausible) `✓` | `[R-lit-how-the-machine-learns]` `[R-cour-dl304]` (machine-doctrine week) `[R-d08]` — *concept taught with a dedicated literacy page and practice* |
| | 6. Design the telemetry/attribution a pursuit org should collect `▸` | `[R-cour-grad-program GC 690]` (governance design) `[R-cour-ge640]` (retrospective/learning loop) `[D-shipley-capture-gates failure_modes]` |

**Master's level summary:** the MBA and MPA tracks develop **finance, price-to-win, portfolio, grants management, oversight, and equity** strongly, and the graduate tier now also develops the **capture-management and proposal-production craft** the degree is named for: GE 630 (market segmentation, incumbent displacement, discriminators, ghost themes), GE 640 (production system, compliance matrix, storyboarding, color-team leadership, cost-technical reconciliation, retrospective), GE 620 (teaming posture, partner rubric, gap analysis, set-aside floors), and GE 610 (pricing posture, negotiation, debrief-as-intelligence). The graduate capstone (GC 690) pulls it together with a complete capture plan, a research-grounded score, a FAR-altitude pricing volume, and a governance design. Remaining refinements: full customer-engagement cadence logging, OCI/NIST/data-rights depth beyond the GE 620 risk week, and polished proposal prose at volume length — the on-the-job part of the craft, not a structural gap.

---

### 2C. Doctorate level — Visionary Leadership (Launchpad L3 Architect + L4 Networker)

*Course audience: the **research doctorate** (DL 901/902/903 + dissertation — built in this repo) and the crosswalk's **advanced modules** (C.A.S.E.-adjacent: AI systems, capture management, partnerships — built as the doctoral-advanced seminars in `course/doctoral-advanced/`; see Section 3). Career target: senior — director of capture/BD, principal, chief growth officer, thought leader, program/portfolio executive. Level anchor: the graduate **architects and governs** the discipline itself — designs the operating system, advances the body of knowledge, and leads the profession.*

| Domain | KSA statements — a Doctoral graduate can… | Ground |
|---|---|---|
| **D1 Market Intelligence** | 1. Architect a market-segmentation operating system for an organization (target pipeline, vehicle roster, world-fit scores) `✗` | `[D-shipley-capture-gates gate-1]` `[W-SHIP phase 0]` `[W-JOB senior]` |
| | 2. Direct a competitive-intelligence function that feeds strategy (black-hat, incumbent analysis) `✗` | `[W-SHIP black hat]` `[W-JOB]` |
| | 3. Design the sensing infrastructure that turns published data into a living pipeline `✗` | `[D-playbooks/shipley-capture.md phase 1-2]` `[W-1101]` `[I]` |
| | 4. Evaluate the policy design of the small-business/equity system and its effect on market strategy `▸` | `[R-mod-mpa S4]` — *policy lens exists at Master's; doctorate adds research depth* |
| **D2 Capture Strategy** | 1. Own the win strategy for an organization's top opportunities end-to-end (qualification → award) `✗` | `[W-JOB capture manager]` |
| | 2. Design the capture governance system: tiers, gates, budgets, engagement cadence, readiness `✗` | `[D-shipley-capture.md phases 3-6]` `[D-rules/capture.yaml]` |
| | 3. Codify and teach the discriminator/ghost-theme discipline to an organization `✗` | `[D-rag-corpus/shipley-capture-proposal-guide]` `[W-APMP Professional]` |
| | 4. Direct bid/no-bid and portfolio posture at the portfolio altitude (which bets, which gates) `✗` | `[R-mod-si S2]` — *concept; doctorate adds the authority to set policy* |
| | 5. Shape customer requirements pre-RFP through relationship and influence `✗` | `[W-JOB]` `[D-shipley-capture.md phase 5]` |
| **D3 Proposal Development** | 1. Architect a proposal operating system (compliance spine, color cadence, volume templates, page-budget doctrine) `✗` | `[D-rules/orbital-to-proposal-map.yaml]` `[D-rules/color-team.yaml]` `[W-APMP Professional]` |
| | 2. Direct the color-team sequence at Gold level — the submission decision with pricing sign-off `✗` | `[D-shipley-proposal.md phase 5]` `[W-SHIP gold team]` |
| | 3. Lead orals, discussions, and final-proposal-revision strategy `✗` | `[D-shipley-proposal.md phase 7]` `[W-SHIP]` |
| | 4. Define the measurable quality gates for proposal output (format compliance, coverage, realism) `✗` | `[D-rules/orbital-to-proposal-map.yaml format_compliance_requirement]` `[I]` |
| **D4 Pricing & Finance** | 1. Set organizational pricing posture and policy (premium/parity/aggressive, floor/guardrails) `✗` | `[D-rules/pricing-guardrails.yaml]` `[W-JOB senior]` |
| | 2. Direct PTW analysis for strategic bids and arbitrate the cost-technical trade `✗` | `[D-formulas/pricing_to_win.py (referenced)]` `[W-JOB]` |
| | 3. Design the B&P investment model: how much to spend, when, and the portfolio ROI `✗` | `[R-mod-mba S1/S6]` `[W-JOB]` `[I]` |
| | 4. Advise on cost-accounting/contract-type implications at the enterprise level `✗` | `[W-NCMA CPCM]` `[W-PROG accounting for gov contracts]` |
| **D5 Contracts & Compliance** | 1. Govern the compliance function: enterprise posture on FAR/grants, OCI, security, data rights `✗` | `[W-NCMA CPCM]` `[D-rules/nist-800-53]` |
| | 2. Lead negotiations and dispute/debrief/protest strategy `✗` | `[D-shipley-proposal.md phase 7]` `[W-NCMA]` |
| | 3. Design the ethics/governance system that keeps a pursuit organization trustworthy at scale `▸` | `[R-d04]` `[R-mod-si S3]` — *doctrine strong; enterprise design is new* |
| | 4. Advance the field's understanding of a compliance/governance question through research `✓` | `[R-cour-doc-dl901]` `[R-cour-doc-dl902]` `[R-cour-doc-dl990]` (research doctorate) `[W-PROG ODU PhD procurement]` |
| **D6 Teaming & Partnerships** | 1. Architect the partnership strategy of an organization (posture framework, partner portfolio, JV/MPA policy) `✗` | `[D-rules/teaming.yaml]` `[W-JOB senior]` |
| | 2. Lead prime/sub/teaming negotiations and workshare design for strategic bids `✗` | `[D-rules/teaming.yaml]` `[W-JOB]` |
| | 3. Build an ecosystem strategy (small-business, research institutions, primes) as a competitive asset `▸` | `[R-mod-si S4]` `[R-case-ravonics]` — *concept; networker craft is new* |
| **D7 Leadership & Ethics** | 1. Design an organization's pursuit doctrine (durable concepts, encoded and governed) `✗` | `[R-d08]` `[R-mod-si S1]` `[I]` |
| | 2. Lead a pursuit organization: roles, metrics, governance, and a skeptical-board defense `▸` | `[R-mod-si S6]` — *taught as a Master's session; doctorate elevates to organizational ownership* |
| | 3. Govern the human/machine boundary: what a human stays Accountable for vs. what an agent runs `✗` | `[D-shipley-capture-gates.yaml human_accountable]` `[R-d08]` `[I]` |
| | 4. Advance the profession — teach, publish, set standards (APMP Professional impact profile) `▸` | `[R-cour-doc-dl990]` (publication milestone) `[W-APMP Professional]` — *research publishing is built in; the APMP-style impact/leadership profile remains* |
| | 5. Steward the cosmology loop: reinvesting won-world surplus into the next generation of dreams `▸` | `[R-d07]` `[R-mod-si S6]` — *concept exists; stewardship practice is new* |
| **D8 Data & Analytics** | 1. Design the analytics architecture (pWin models, pipeline metrics, attribution, telemetry) `✗` | `[D-shipley-capture-gates failure_modes]` `[W-JOB]` `[I]` |
| | 2. Lead empirical win/loss and debrief research that improves the organization's doctrine `✓` | `[R-cour-doc-dl902]` `[R-cour-doc-dl903]` (empirical design for win/loss and award data) `[D-shipley-proposal.md phase 7]` `[W-APMP Professional]` |
| | 3. Govern AI/automation adoption: evaluate machine-encoded doctrine, keep the concept stable as tools change `✗` | `[R-d08]` `[D-rules/orbital-to-proposal-map.yaml]` `[I]` |
| | 4. Produce original research that advances the field (dissertation-grade) `✓` | `[R-cour-doc-dl990]` (dissertation sequence) `[W-PROG doctoral public administration/procurement]` |

**Doctorate level summary:** the crosswalk names this level "L3 Architect + L4 Networker" with "advanced modules (C.A.S.E.-adjacent: AI systems, capture management, partnerships)." Two halves now exist. The **research doctorate** — DL 901/902/903 and the dissertation sequence DL 990 — is built and develops the research-side KSAs (D5.4 advance-through-research, D8.2 empirical win/loss research, D8.4 dissertation-grade research, D7.4 partially via the publication milestone). The crosswalk's **advanced modules** are built as the doctoral-advanced research seminars in `course/doctoral-advanced/`: AI systems, advanced capture management, and partnerships & ecosystems — each a five-session research-object seminar that turns the C.A.S.E.-adjacent content (AI-systems governance, capture-management at enterprise altitude, ecosystem-level partnerships) into the **architect/govern** KSAs: designing an organization's operating system, governing the human/machine boundary (D7.3), directing gold-team/leadership craft, and leading partnerships at the ecosystem level. This is consistent with how the profession treats the top tier: it is validated by *impact and leadership* (APMP Professional is a competency interview + impact paper, not an exam `[W-APMP]`) and by *research* (now built in-repo). A Doctorate in this field should therefore be assessed primarily on demonstrated impact, systems design, and research — not recall.

---

## 3. Curriculum coverage map and gaps

The tables below map each level's competency statements to the existing curriculum documents that develop them, and mark what is missing. **Coverage key:** `✓` developed · `▸` partial · `✗` absent.

### 3A. Bachelor's (L1 Explorer) — developed by `modules/shared-core.md` + `literacy/*` + `doctrine/*`

| Domain | Curriculum docs that develop it | Coverage | Notable gap |
|---|---|---|---|
| D1 Market Intelligence | `doctrine/01`, `literacy/where-the-money-flows.md`, `literacy/glossary.md`, `literacy/acronym-decoder.md`, `modules/shared-core.md` S1 | **Strong** | Market segmentation and published-award intelligence practice (`[W-SHIP phase 0]`); only the MPA assignment touches USAspending. |
| D2 Capture Strategy | `doctrine/03`, `doctrine/04`, `doctrine/05`, `doctrine/09`, `course/undergraduate-210-capture-and-pursuit-pipeline.md`, `course/undergraduate-220-pricing-and-price-to-win-fundamentals.md`, `modules/shared-core.md` S2/S5 | **Strong** | Win strategy, discriminators, ghost themes, capture plans, readiness reviews, pWin scorecard build are now taught by DL 210/DL 220; the fine-grained customer-engagement *cadence logging* stays on-the-job. |
| D3 Proposal Development | `doctrine/02`, `literacy/how-to-read-an-rfp.md`, `literacy/how-to-read-a-nofo.md`, `course/undergraduate-302-proposal-production-and-compliance.md`, `modules/shared-core.md` S3, `course/capstone-build-an-orbital.md` | **Strong on reading/compliance and production** | Proposal volume writing, storyboards, page budgets, annotated outlines, and submission mechanics are now taught by DL 302; volume-length prose polish remains a later refinement. |
| D4 Pricing & Finance | `doctrine/05`, `course/undergraduate-220-pricing-and-price-to-win-fundamentals.md`, `modules/shared-core.md` S5, `course/syllabus-semester.md` week 11 MBA | **Strong** | BOE/labor categories/rates and pricing floors are now taught by DL 220. |
| D5 Contracts & Compliance | `doctrine/02`, `doctrine/04`, `literacy/how-to-read-an-rfp.md` (Section K), `course/undergraduate-210-capture-and-pursuit-pipeline.md` (hard knockouts), `course/undergraduate-303-government-contracts-and-subcontracting.md` (set-aside floors), `modules/mpa.md` S2 | Partial | Size-standard screening is now partial (DL 210/303); OCI, data rights, and NIST still not surfaced at Bachelor's. |
| D6 Teaming & Partnerships | `doctrine/01` (STTR), `course/undergraduate-303-government-contracts-and-subcontracting.md`, `case-study/ravonics.md` | **Strong** | Teaming posture choice and partner-rubric evaluation are now taught by DL 303. |
| D7 Leadership & Ethics | `doctrine/04`, `course/undergraduate-210-capture-and-pursuit-pipeline.md` (gate charters), `course/assessments-and-rubric.md`, `course/syllabus-semester.md` | **Strong at foundation level** | Gate *design* is now exercised in DL 210 gate charters, not only the SI track. |
| D8 Data & Analytics | `doctrine/05`, `doctrine/08`, `course/undergraduate-210-capture-and-pursuit-pipeline.md` (learning loop), `course/undergraduate-304-data-literacy-and-analytics-for-capture.md`, `modules/shared-core.md` S5 | **Strong** | Pipeline funnel metrics (DL 304) and win/loss retrospective practice (DL 210) are now taught. |

### 3B. Master's (L2 Builder) — adds `modules/mba.md` or `modules/mpa.md`

| Domain | Curriculum docs that develop it | Coverage | Notable gap |
|---|---|---|---|
| D1 Market Intelligence | `modules/mba.md` S4, `modules/mpa.md` S1, `modules/strategic-initiative.md` S4, `course/graduate-elective-competitive-market-intelligence.md` | **Strong** | Incumbent displacement windows and the market-segmentation *build* are now taught by GE 630. |
| D2 Capture Strategy | `modules/strategic-initiative.md` S2/S3 (portfolio + gates), `course/graduate-elective-competitive-market-intelligence.md`, `course/graduate-elective-proposal-management-color-teams.md`, `course/capstone-build-an-orbital.md` (GC 690 capture plan) | **Strong** | The capture-management craft — capture plans, discriminators, ghost themes, readiness reviews — is now taught by GE 630/GE 640 and the graduate capstone; full engagement-cadence logging remains on-the-job. |
| D3 Proposal Development | `modules/shared-core.md` S3, `course/graduate-elective-proposal-management-color-teams.md`, `course/capstone-build-an-orbital.md` | **Strong** | Proposal production craft — outlines, page budget, storyboarding, color-team facilitation, volume reconciliation — is now taught by GE 640. |
| D4 Pricing & Finance | `modules/mba.md` S1/S2/S5/S6, `doctrine/05`, `course/graduate-advanced-finance.md`, `course/graduate-elective-negotiations-pricing-posture.md` | **Strong (MBA + graduate)** | BOE build and pricing floor/guardrail application are now taught by GC 540 and exercised in GE 610 / the GC 690 pricing volume. |
| D5 Contracts & Compliance | `modules/mpa.md` S2–S6, `doctrine/04`, `course/graduate-elective-teaming-jv-subcontracting.md` | **Strong (MPA, public side; GE 620, private side)** | Hard-knockout screening, subcontracting plans, and OCI are now taught by GE 620; NIST/data-rights depth remains thinner. |
| D6 Teaming & Partnerships | `modules/strategic-initiative.md` S4, `course/graduate-elective-teaming-jv-subcontracting.md`, `case-study/ravonics.md` | **Strong** | Teaming posture choice, partner rubric, agreements, and gap analysis are now taught by GE 620. |
| D7 Leadership & Ethics | `modules/strategic-initiative.md` S2/S3/S6, `modules/mba.md` S6, `course/graduate-elective-proposal-management-color-teams.md`, `course/capstone-build-an-orbital.md` | **Strong** | Leading a color team is now taught by GE 640; running a gate under pressure is exercised in the capstone defense. |
| D8 Data & Analytics | `modules/strategic-initiative.md` S2, `modules/mba.md` S6, `course/graduate-elective-proposal-management-color-teams.md` (retrospective), `literacy/how-the-machine-learns.md` | Partial → **Strong** | Win/loss retrospective (GE 640), pWin refresh on signal (GE 630, partial), and AI-output evaluation (how-the-machine-learns) are now taught. |

### 3C. Doctorate (L3 Architect + L4 Networker) — crosswalk names "advanced modules (C.A.S.E.-adjacent: AI systems, capture management, partnerships)"

| Domain | Curriculum docs that develop it | Coverage | Notable gap |
|---|---|---|---|
| All D1–D8 | The **research doctorate** is built: `course/doctoral-program-overview.md`, `course/doctoral-research-methods-i.md`, `course/doctoral-research-methods-ii.md`, `course/doctoral-empirical-design.md`, `course/doctoral-dissertation-sequence.md`, `modules/doctoral/research-agenda.md` — it develops the research-side KSAs (D5.4, D8.2, D8.4, D7.4 partially). The crosswalk's **advanced modules** are built as the doctoral-advanced research seminars: `course/doctoral-advanced/module-ai-systems.md`, `course/doctoral-advanced/module-advanced-capture-management.md`, `course/doctoral-advanced/module-partnerships-and-ecosystems.md`. The doctorate-adjacent *conceptual* anchors are `doctrine/08` (doctrine as shared human/machine language) and `modules/strategic-initiative.md` S6 (leading a pursuit org, board defense). | **Strong — research tier and architect/govern seminars both built** | The advanced seminars develop the architect/govern KSAs in §2C (D2.2, D3.1–3.2, D7.1, D7.3, D6.1) as *research objects*; the practical leadership altitude those seminars prepare for is the on-the-job refinement layer, not a structural absence. |

### 3D. Cross-level structural findings

1. **The capture craft is now taught — the gap has closed from "nowhere" to "refinement."** The earlier claim that win strategy, discriminators/ghost themes, capture plans, color-team facilitation, and proposal production appear **nowhere** as taught skills is obsolete: the degree-tier course files teach them end-to-end. DL 210 (capture plans, discriminators, ghost themes, readiness reviews), DL 220 (pWin scorecards, BOE, pricing floors), DL 302 (proposal production, storyboards, color teams, submission), DL 303 (teaming posture, partner rubric), DL 305 (negotiation, debrief), GE 630 (market segmentation, incumbency, discriminators), GE 640 (proposal production system, color-team leadership, cost-technical reconciliation), GE 620 (teaming/gap/partner/OCI), and the graduate capstone (complete capture plan + governance design). What remains is the on-the-job refinement layer — full customer-engagement cadence logging, volume-length prose polish, and NIST/data-rights depth — not a structural absence.
2. **The Doctorate's research tier and its C.A.S.E.-adjacent advanced modules are both built.** The research doctorate (`course/doctoral-*.md` + `modules/doctoral/research-agenda.md`) exists and develops the research-side KSAs. The crosswalk (`align/concept-to-system-map.md`) names L3/L4 "advanced modules" — AI systems, capture management, partnerships — and those are built as the doctoral-advanced research seminars in `course/doctoral-advanced/`, each a five-session research-object seminar. The remaining doctoral gap is the practical leadership altitude those seminars prepare for — an on-the-job refinement layer, not missing modules.
3. **Stack-agnosticism is a feature for this model.** `[R-d08]` is the reason the curriculum can name AI/automation as a competency (D8) without violating its own no-tool rule: the curriculum teaches the *concept* of machine-encoded doctrine and leaves the tool to the alignment layer (`align/concept-to-system-map.md`).
4. **The DNA canon is an un-tapped competency source — now being surfaced by a literacy page.** Every `[D-*]` encoding above (Shipley gates, capture phases, proposal phases, teaming rubric, pricing floors) is machine doctrine the curriculum can teach without inventing content. The new literacy page **`literacy/how-the-machine-learns.md`** is the surface layer that fixes this finding — it teaches what the machine rendering holds (rules, playbooks, formulas, prompts, retrieval corpus), who the skill personas are, and how a professional evaluates machine outputs (D8.5), in the curriculum's inviting, stack-agnostic voice (`[R-CLAUDE.md]`), with `align/concept-to-system-map.md` as the seam.

---

## 4. Assessment recommendations

The current assessment system (`course/assessments-and-rubric.md`; `course/capstone-build-an-orbital.md`) is **well-designed for the Bachelor's and Master's levels as they exist**: it is public, concept-first, and artifact-based, with a 4-point rubric, a real-NOFO midterm, and a stack-free ORBITAL capstone. Below are additions mapped to the competency model — grouped by level, with explicit tie-backs to the §2 KSA statements. Each recommended addition preserves the curriculum's two invariants: **concepts not tools** (`doctrine/08`) and **real documents, safe exercises** (`course/syllabus-semester.md`).

> **Note (post-course-files refresh).** Several additions below were written against the pre-course-file gap analysis and are now **already implemented** by the degree-tier course files: the scored bid/no-bid sheet (DL 210/DL 220), the capture-plan deliverable (GC 690 capstone), the price-to-win exercise with a floor (DL 220; GE 610), the red-team exercise (GE 640), and the win/loss retrospective (DL 210, GE 640). They are retained here as the assessment *pattern* those courses now follow, and as the template the doctoral-advanced research seminars (`course/doctoral-advanced/`) realize for the Doctorate-level architect/govern KSAs.

### 4A. Keep (no change) — all levels
- Weekly artifact deliverables and the 4-point rubric (Correctness / Completeness / Doctrine use / Clarity) `[R-assess]`.
- The real-NOFO midterm — it tests *reading* (`[R-midterm]`), which is the Bachelor's core (D3.1–D3.4, D5.1–D5.2).
- The stack-free ORBITAL capstone with presentation and defense — it tests structure, score, and governance (D1, D4, D7 at Bachelor's).

### 4B. Add at Bachelor's level
1. **A market-intelligence brief (D1).** Extend the existing Week-2 "money map" into a scored mini-brief: one agency, one published solicitation, one past award, and a one-paragraph "is this a market worth watching?" call. Assesses D1.1–D1.5, D8.3.
2. **A scored bid/no-bid sheet with a factor breakdown (D2.3, D8.1).** The capstone already requires a factor-argued pWin; make a lightweight version a required weekly deliverable earlier (Week 8) so the factor habit is formed before the capstone. Assesses D2.3, D8.1.
3. **A Section-K reps/certs identification task (D5.5).** A short "find the certifications this response must carry" deliverable on a real RFP. Assesses D5.5 and reinforces the compliance layer that Bachelor's currently only glimpses.
4. **A peer-run mini color team (D3.6, D7.5).** After the Week-8 scored sheet, run a 30-minute pink-team exercise in teams using the compliance matrices they already built. This is the cheapest possible introduction to the color-team discipline and produces the first D3.6/D7.5 evidence.

### 4C. Add at Master's level
1. **A capture-plan deliverable (D2.2, D2.5, D6.2–D6.4).** The single most important addition: a one-page capture plan for the capstone's solicitation — win strategy, two discriminators, one ghost theme, staffing concept, teaming posture, and a pWin scorecard. Assesses the entire D2/D6 gap.
2. **A price-to-win exercise with a floor (D4.5–D4.6).** The MBA track's PTW session (`[R-mod-mba S2]`) currently stops at recommendation; add a required deliverable that builds a three-line BOE (labor categories + rates) and a stated pricing floor, then the recommended price. Assesses D4.5–D4.6.
3. **A red-team exercise (D3.4, D3.5).** Extend the capstone workshop (Week 13) with a scored red-team pass: student teams review another team's draft against the section-M factors and produce actionable, criterion-mapped findings. Assesses D3.4/D3.5 and D7.5.
4. **A win/loss retrospective (D8.4).** Convert the capstone's ungraded post-mortem (`[R-capstone]`) into a graded one-page retrospective: what did the evaluators reward, what would you change, what feeds the next pursuit. Assesses D8.4 and the learning loop (`[R-d03 stage 9]`).
5. **Optional split-track capstone variant:** MPA students may deliver a **grants-management plan** (post-award obligations, reporting, budget-vs-work reconciliation) instead of the pricing volume, exercising D5.2/D4.7.

### 4D. Add at Doctorate level
Because the doctorate is validated by impact and research (`[W-APMP Professional]`; `[W-PROG ODU]`), its assessments should be **competency-based and research-based**, not recall-based:
1. **A systems-design capstone (D2.2, D3.1, D7.1, D8.1):** design a pursuit organization's operating system — gate ladder with written criteria and named owners, pipeline metrics, the human/machine Accountable boundary (ADR-0016-style), and the color cadence. Presented and defended to a hostile board. This is the Doctorate's equivalent of the ORBITAL capstone, at organizational altitude.
2. **An impact paper + competency interview (D7.4, D8.2):** modeled directly on the APMP Professional two-stage assessment — a 12-slide "what I changed" impact paper plus a STAR-structured panel interview. Assesses leadership and advancement of the discipline.
3. **A research deliverable (D5.4, D8.4):** an empirical study of a real win/loss or market dataset (published awards) producing a defensible finding that would improve the organization's doctrine. This is the dissertation-grade artifact and tests D8.2/D8.4.
4. **A teach-the-doctrine deliverable (D7.1, D7.4):** the candidate authors a new module (using `modules/module-template.md`) or a new doctrine chapter with a 3-question self-check — the same move that extends the doctoral-advanced research-seminar set in `course/doctoral-advanced/`.
5. **A partnership-strategy deliverable (D6.1–D6.3):** design a teaming/posture framework for an organization across a portfolio — prime/sub/JV/MPA policy, partner rubric, workshare design — consistent with `[D-rules/teaming.yaml]`.

### 4E. Cross-cutting rubric and integrity additions
1. **Add an "Evidence" criterion to the rubric.** The current rubric tests Correctness, Completeness, Doctrine use, Clarity — but not **evidentiary quality** ("is the pWin argued factor-by-factor with evidence, not asserted?"). Add a 5th criterion or fold it into Correctness, and mirror it in the capstone rubric (which already half-does this in "Score and bid/no-bid"). This directly enforces D2.3/D8.1.
2. **Add an ethics scenario to the midterm or capstone (D7.2, D5.4).** A short scenario — an OCI risk, an unallowable cost, a misrepresented past performance — graded against the `[R-d04]` "two halves of one system" frame. Cheap to run, high doctrinal value.
3. **Add a data-literacy checkpoint (D8).** One short exercise reading a published award record (who won, for how much, what the record does and does not show) across all levels — reinforces `[R-lit-where-money-flows]` and the FPDS/USAspending literacy that peer programs treat as core `[W-PROG]`.
4. **Assessment-to-competency traceability:** because the repo's manifest (`manifest.yaml`) registers every doc, extend it with a `competency` field per level (or a companion `research/competency-model.md` cross-reference in the manifest) so a professor can see which KSA statements a given course artifact assesses. This makes the model actionable rather than archival.

---

## 5. Source list

### Web research (accessed 2026-08-05)
- **APMP:** certification levels and joint syllabus competency areas (Foundation/Practitioner/Professional; no Master level; Capture Practitioner separate). Sources: `apmp.org`, `apmp.org.za`, `members.apmp.org` APMP Certifications pages, APMP Professional Standards & Guidance, The Knowledge Academy APMP course pages.
- **Shipley:** Shipley Business Development Lifecycle Guide (seven phases / gates), Capture Guide, Proposal Guide; GovEagle "Complete Shipley Process Guide" (April 2026); Shipley training catalog; color-team cadence. Sources: `shipleywins.com`, `goveagle.com/blog/complete-shipley-process-guide`, `projectory.ai/shipley-method/`, `unanet.com/blog/modernize-shipley`, US DOE "Bid Decision Gate" PDF.
- **USAJOBS / OPM GS-1101 Business & Industry series:** Commerce Dept GS-1101-13/14 position descriptions; GS-1101 vs GS-1102 distinction; OPM Group Coverage Qualification Standard (education/experience pathways to GS-13). Sources: `commerce.gov` PD PDFs, `bestmilitaryresume.com`.
- **Real job descriptions (capture / proposal / BD):** defense-prime capture-manager and proposal-manager postings — Booz Allen Hamilton, Leidos, AECOM, Lockheed Martin, Arcfield, Auria, VTG, KBR, All Native Group (via clearancejobs.com, ziprecruiter.com, theladders.com, tealhq.com, salary.com). Duties synthesized: win strategy, PTW, teaming, gate reviews, color teams, compliance matrix, volumes.
- **NCMA certifications / CMBOK:** CCMA, CFCM, CCCM, CPCM levels and Contract Management Body of Knowledge. Sources: `ncmahq.org` certification pages and brochures, `ncmaet.com`, `ncmargc.org`.
- **Existing US degree/certificate programs:** George Mason University (Government Contracting Minor; Graduate Certificate in Government Contract Management; Accounting for Government Contracts), Mount St. Mary's (MBA + GovCon post-bac certificate), University of Alabama in Huntsville (Graduate Certificate in Federal Contracting & Procurement Management; Federal Contract Accounting concentration), Florida Tech (MS in Acquisition & Contract Management), American Public University System (BA in Government Contracting & Acquisition, CMBOK-based), University of the Potomac (Bachelor's in Government Contract Management), Old Dominion University (PhD in Public Administration & Policy with procurement/contract management faculty). Sources: `catalog.gmu.edu`, `business.gmu.edu`, `catalog.msmary.edu`, `uah.edu`, `fit.edu`, `apus.edu`, `potomac.edu`, `online.odu.edu`.

### Repo read (curriculum — `DreamLimited/dream-curriculum`, branch `feat/launchpad-research-competency`)
- `README.md`, `CLAUDE.md`, `AGENTS.md`, `manifest.yaml`, `VERSION`
- `doctrine/01`–`10` (all ten doctrine chapters)
- `literacy/where-the-money-flows.md`, `literacy/how-to-read-an-rfp.md`, `literacy/how-to-read-a-nofo.md`, `literacy/how-color-teams-work.md`, `literacy/how-the-machine-learns.md`, `literacy/glossary.md`, `literacy/acronym-decoder.md`
- `modules/shared-core.md`, `modules/strategic-initiative.md`, `modules/mba.md`, `modules/mpa.md`, `modules/module-template.md`
- `course/syllabus-semester.md`, `course/assessments-and-rubric.md`, `course/capstone-build-an-orbital.md`
- Degree-tier course files: `course/undergraduate-program-overview.md` + DL 101/102/210/220/301–305/480; `course/graduate-program-overview.md` + GC/GE syllabi; `course/doctoral-program-overview.md` + DL 901/902/903/dissertation
- `case-study/ravonics.md`
- `align/README.md`, `align/concept-to-system-map.md` (degree ↔ fellowship ↔ course crosswalk)

### Repo read (DNA canon — `DreamLimited/dna` @ v0.18.2)
- `playbooks/shipley-capture.md`, `playbooks/shipley-proposal.md`
- `rules/shipley-capture-gates.yaml`, `rules/orbital-to-proposal-map.yaml`, `rules/teaming.yaml`
- Referenced: `rules/bid-no-bid.yaml`, `rules/capture.yaml`, `rules/color-team.yaml`, `rules/pricing-floor.yaml`, `rules/pricing-guardrails.yaml`, `rules/sba-size-standards.yaml`, `rules/naics-alignment.yaml`, `rules/nist-800-53/`, `rules/incumbent-displacement.yaml`, `formulas/pwin-shipley.formula.yaml`, `playbooks/pricing/*`

### Inference / synthesis
Marked `[I]` inline wherever the researcher synthesized across sources (e.g., level-anchored career targets, the crosswalk-to-curriculum gap reading, assessment traceability design).

---

*End of competency model. Section 3's gap rows are the actionable output: the capture and proposal craft (D2/D3/D6) is now taught across the degree-tier course files, and the doctoral tier is complete with both its research doctorate and its C.A.S.E.-adjacent advanced seminars (`course/doctoral-advanced/`). The remaining actionable gaps are the on-the-job refinement layer (cadence logging, prose polish, NIST/data-rights depth) and the practical leadership altitude the doctoral seminars prepare for. The DNA canon already holds the content to teach, and `literacy/how-the-machine-learns.md` is the surface layer that makes it visible to students.*
