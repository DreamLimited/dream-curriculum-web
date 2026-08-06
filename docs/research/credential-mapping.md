---
title: "Credential / Certification Mapping"
---

# Credential / Certification Mapping

*Research backbone for the Dream Pursuit Doctrine curriculum: which professional credentials exist in federal business development and capture/proposal management, what the curriculum already teaches toward them, and the incremental step to actually earn each one.*

- **Status:** Research document (not doctrine, not literacy). Feeds `literacy/industry-standard-canon.md` and any future "certification prep" track.
- **Date:** 2026-08-05
- **Branch:** `feat/launchpad-research-credentials`
- **Verification method:** Web research (issuing-body sites, chapter sites, credential registries) plus close reading of the curriculum repo. Each credential row marks what is **verified** (confirmed by a public source in this research pass) vs **needs confirmation** (reported in secondary/aggregator sources, or named in the task but not locatable — check with the issuing body before the curriculum cites it).

---

## 0. Critical caveat — read this first (licensing posture)

The DreamLimited machine-side corpus (the DNA repo) contains **license-clean paraphrases** of Shipley and APMP concepts. Two governing documents make this explicit:

- `DreamLimited/dna` → `docs/licensing-shipley-corpus.md` — "The corpus does not reproduce Shipley text verbatim… DreamLimited's pursuit doctrine is informed by Shipley but is **not an official Shipley product or endorsement.** Public-facing DreamLimited marketing and proposal content does **not claim Shipley certification or partnership** on the basis of this corpus."
- `DreamLimited/dna` → `docs/licensing-apmp-corpus.md` — identical posture for the APMP Body of Knowledge (BOK) and Proposal Process Standards: paraphrase-only, attribution-cited, no claim of APMP endorsement or partnership.

**The consequence for a certification-prep track:** a real APMP or Shipley certification track **cannot be built from the paraphrase corpus alone**. Certification bodies assess against *their own* curriculum, study guides, and exams. The Dream curriculum can honestly say "this teaches the *concepts* the credential certifies" — it **cannot** say "this is official preparation for credential X" without either (a) the bodies' own materials and exam vouchers, or (b) an explicit authorized-prep agreement with the body.

This mapping therefore treats the curriculum's alignment as **conceptual alignment**, and every "incremental step" section names the body's own exam/course as the mandatory remaining leg. Prominent note for faculty: do not advertise the course as "APMP/Shipley/CPCM prep" in a catalog without the bodies' materials in the loop.

---

## 1. Master crosswalk table

| Credential | Issuing body | Level | Prerequisites (verified) | Curriculum already aligns to | Missing / incremental step |
|---|---|---|---|---|---|
| **APMP Foundation** | APMP | Foundation (entry) | 1–3 yrs proposal/bid experience; 1-hr, 75-Q open-book exam (~$125–300) | Doctrine 01–04 (money, solicitations, pipeline, gates); compliance matrix (Doctrine 02, shared-core S3); color teams (Doctrine 04) | Official APMP study guide (BOK) + exam registration. Curriculum covers the *concepts*, not the BOK's exam wording. |
| **APMP Practitioner** | APMP | Mid | Foundation + 3–7 yrs experience; applied exam/assessment | Same as Foundation, plus pursuit-strategy work (Doctrine 05, 07; SI track portfolio/gate sessions) | Work-experience portfolio; APMP's applied assessment against the BOK. |
| **APMP Professional (CPP)** | APMP | Senior | Practitioner + 7+ yrs; 3-part process: reference, professional-impact paper, panel interview | The whole curriculum is a practice ground for the "doctrine as operating system" narrative a CPP impact paper must tell | Years of verifiable impact + the paper + interview. Curriculum cannot manufacture the experience. |
| **APMP Capture Practitioner / Professional** | APMP | Mid (capture) | 3+ yrs capture/sales/bid/proposal; capture-focused exam (Foundation *not* required) | Capture-aligned material: Doctrine 04 gates, Doctrine 05 scoring, capture personas in the concept map (`align/concept-to-system-map.md` §4–5) | Capture work experience + APMP's capture exam; deeper customer-engagement technique. |
| **APMP Micro-certifications** (Exec Summaries, Bid & Proposal Writing, Graphics, Competitive Price To Win) | APMP | Topic | Varies (open-book MC, $125–900) | Price-to-win (Doctrine 05; MBA-2) maps to the PTW micro-cert | Focused exam; the other micro-certs (graphics, exec summaries) are thin in the curriculum. |
| **Legacy CF APMP / CP APMP** | APMP (legacy names) | — | — | — | *Needs confirmation.* Older references name the first two rungs "CF APMP (Certified Foundation)" and "CP APMP (Certified Practitioner)"; current APMP materials use Foundation/Practitioner/Professional. Confirm before citing. |
| **Shipley Certified (One Star)** | Shipley Associates | Foundation–mid (method fluency) | Complete one core course w/ built-in assessment (Capturing New Business / POWeRful Proposal Writing / Managing Strategic Proposals) | BD lifecycle (Doctrine 03 ↔ Shipley `marketing→capture→proposal→negotiate→award`); gates (Doctrine 04); volumes (Doctrine 06 concept; `literacy/the-four-volumes.md` merged) | Paid Shipley course (the assessment is embedded in the course). Curriculum teaches the method's concepts, not Shipley's course. |
| **Shipley Two Star / Shipley Master** | Shipley Associates | Senior | One Star + assessed portfolio of real work (~AU$500) | Same conceptual base + the capstone (real solicitation → ORBITAL → bid/no-bid) as portfolio-shaped work | A real-work portfolio judged by Shipley assessors. The capstone is the closest curriculum analog. |
| **Shipley BD Lifecycle / Capture / Proposal Management courses** | Shipley Associates | Courseware (not a cert tier by itself) | None (paid courses) | Doctrine 03 pipeline = Shipley BD lifecycle; Doctrine 04 gates = Shipley gate ladder; Doctrine 02 compliance = Shipley compliance matrix | The courses themselves. *Note:* Shipley's own certification site describes a **6-core + 4-elective unit** structure; regional pages describe the star ladder. Confirm the current structure with Shipley. |
| **SPMBOK** | *(see note)* | — | — | — | **Name correction:** "SPMBOK" is the **Software Product Management Body of Knowledge** (ISPMA), *not* a Shipley credential. Shipley's body of knowledge is its published guides (*Shipley Proposal Guide*, *Business Development Lifecycle Guide*); the profession's shared BOK is the **APMP BOK**. Do not cite "SPMBOK" as a Shipley credential. |
| **CCMA** | NCMA | Entry | Bachelor's **or** 1 yr experience; 40 CPE; exam | Doctrine 01 (money, identifiers, FAR-as-governance in Doctrine 04) | CMBOK-based exam; contract-management work experience. Curriculum covers the *environment*, not the contract-management craft. |
| **CFCM** | NCMA | Mid (federal) | Bachelor's + 2 yrs contract mgmt; 80 CPE; 150-Q FAR-based exam | Doctrine 01/02/04 (solicitations, FAR governance) | **FAR article-level depth is not taught.** CFCM is a FAR exam; this is the largest gap in the curriculum's NCMA alignment. |
| **CCCM** | NCMA | Mid (commercial) | Bachelor's + 2 yrs contract mgmt; 80 CPE; UCC-based exam | Little alignment — curriculum is federal-forward | UCC/commercial contracting knowledge + experience. |
| **CPCM** | NCMA | Senior | Bachelor's + 5 yrs contract mgmt; 120 CPE; ~179-Q CMBOK exam | Doctrine 01/04 pre-award + governance concepts | **Post-award administration is not taught** (performance, modifications, terminations, closeout). CPCM spans the full lifecycle; curriculum stops at award/deliver conceptually. |
| **FAC-C (Professional)** | FAI (gov-side) | Government cert | Federal employment/role; CON 1100–1400 DAU-equivalents; 1 yr experience | Doctrine 01 (money flow, FAR), 02 (solicitations), 04 (governance) | Not an industry credential — it certifies the *government side* of the transaction. Curriculum teaches the private-side mirror. Requires CON 1100/1200/1300/1400 + a government contracting role. |
| **DAWIA Contracting (Professional)** | DAU (DoD) | Government cert | DoD workforce role; CON 1100–1400V + CON 3900V exam; 1 yr experience | Same as FAC-C | Same government-side caveat; DoD-specific. |
| **DAWIA Business Financial Mgmt / Cost Estimating** | DAU | Government cert | 4–6 yrs acquisition FM/CE experience; BUS 1100, BFM/BCE courses | Doctrine 05 pricing/cost concepts at concept level only | Government role + finance/estimating coursework. The curriculum's price-to-win is strategic, not a cost-estimating credential path. |
| **PMP** | PMI | Senior (project mgmt) | 36–60 mo project experience + 35 hrs training; 180-Q exam; 60 PDUs/3 yrs | MBA-2 (price-to-win, scheduling-adjacent); MBA-6 (portfolio); SI-6 (leader's dashboard) | **Project-management discipline (scope/schedule/cost/EVM) is not taught.** PMP is a different body of knowledge (PMBOK); curriculum aligns only at the portfolio/business edge. CAPM is the entry analog. |
| **CPSM** | SMPS | Mid (services marketing/BD) | Bachelor's + 4 yrs professional-services marketing/BD (or degreeless 8 yrs); 150-Q exam | MBA-4 (certifications as go-to-market); MBA-6 (board pitch); SI-4 (market map) | A/E/C-flavored marketing BD domains; the curriculum's BD framing is federal-capture, not services marketing. Small overlap. |
| **AAPTP** | *(unverified)* | — | — | — | **Could not locate** any credential by this name from any issuing body (web research, 2026-08). Nearest plausible intent: **APTAC** (Association of Procurement Technical Assistance Centers) training for the *business* side, or a government acquisition-academy program. **Do not cite until confirmed.** |
| **ACP-WI** | *(unverified)* | — | — | — | **Could not locate.** Plausible readings: a mis-remembered **PMI-ACP** (Agile), a **CP APMP** inversion, or a local chapter designation. **Do not cite until confirmed.** |

---

## 2. APMP — Association of Proposal Management Professionals

**What it is.** The international professional body for bid, proposal, and capture professionals. Its **Body of Knowledge (BOK)** is the profession's closest thing to a shared textbook — 51 topics across seven categories, plus a glossary, acronym list, and tool/template repository. This is the vocabulary the curriculum explicitly teaches by name (see `literacy/industry-standard-canon.md`, merged).

**Current ladder (verified from APMP-ANZ and chapter sources, 2026):**

| Rung | Name | Experience | Assessment |
|---|---|---|---|
| 1 | **Foundation** | 1–3 yrs | 1-hr, 75-Q, multiple-choice, pass-fail, open-book exam |
| 2 | **Practitioner** | 3–7 yrs | Applied assessment (demonstrate leading others in the practice) |
| 3 | **Professional (CPP)** | 7+ yrs | 3 parts: (1) professional reference across 9 competencies; (2) Professional Impact Paper (scored ≥41/48); (3) 20-min presentation + 25-min panel interview |
| + | **Capture Practitioner / Professional** | 3+ yrs (capture) | Capture-focused exam; Foundation *not* a prerequisite |

Micro-certifications (topic-level, open-book MC): Executive Summaries, Bid & Proposal Writing, Graphics, Competitive Price To Win.

**Legacy tiers (needs confirmation).** Older industry references (e.g., Vault) name the first two rungs **CF APMP** (Certified Foundation) and **CP APMP** (Certified Practitioner), with **CPP** = Certified Proposal Professional at the top. Current APMP materials use Foundation/Practitioner/Professional. The task's "CP/CF APMP tiers" match these legacy names; confirm the current canonical naming with APMP before the curriculum cites them.

**What a curriculum graduate already satisfies.**
- **Conceptual foundation for Foundation + Practitioner:** the pipeline (Doctrine 03), gates (Doctrine 04), solicitation reading + compliance matrix (Doctrine 02; shared-core S3; midterm), scoring and price-to-win (Doctrine 05), ORBITAL structure (Doctrine 06). A graduate can *speak the language* and *perform the work artifacts* the BOK describes.
- **Capture-facing concepts:** gates, bid/no-bid, scoring, capture-readiness concepts map to the DNA's Shipley/APMP rule sets in `align/concept-to-system-map.md` §4–5 (e.g., `rules/shipley-capture-gates.yaml`, `playbooks/apmp/*`).

**Incremental step to earn it.**
1. Buy the current **APMP Foundation Study Guide** and the **APMP BOK** (body's own materials).
2. Register for and pass the Foundation exam (~$125–300, member-discounted; non-members pay more).
3. For Practitioner/CPP: accumulate the required years of verifiable bid/proposal work, then complete the applied assessment / paper + panel interview.
4. Maintain with continuing professional development (CPD) points on the body's cadence.

**Gap the curriculum would need to close to become honest prep:** nothing the curriculum can fix — the experience years and the body's own assessment instruments are outside any curriculum's reach. The curriculum's contribution is the knowledge base and the artifacts (compliance matrix, ORBITAL, score sheet) that double as evidence of applied practice.

---

## 3. Shipley Associates — method certification and the "SPMBOK" correction

**What it is.** Shipley Associates (in practice since the 1970s) publishes the *Shipley Proposal Guide*, the *Shipley Business Development Lifecycle Guide*, and runs its own training + certification. It is a globally APMP-approved training organization, so Shipley courses can count toward APMP credentials. The **Business Development Lifecycle** is the widely used seven-phase model — `marketing → capture → proposal → negotiate → award` — which the curriculum explicitly maps onto Doctrine 03 in `literacy/industry-standard-canon.md`.

**Certification structure (verified from shipleywins.com and the APAC region site, 2026 — regional variations exist):**

| Credential | Requirement | Assessment |
|---|---|---|
| **Shipley Certified (One Star)** | Complete one core module course: *Capturing New Business* / *POWeRful Proposal Writing* / *Managing Strategic Proposals* | Built into the course (workshop participation + coursework review by a facilitator); badge via Credly |
| **Two Star / "Shipley Master"** | One Star + assessed portfolio of real work | Portfolio reviewed by Shipley assessors (~AU$500) |
| **Three Star** | Two Star + Capability & Impact Statement | (~AU$1000) |
| **Shipley Certification** (US site wording) | **6 core units + 4 elective units** across Capture Planning, Proposal Management, Proposal Writing, plus electives (Pricing to Win, color teams, executive summaries, AI, etc.) | Course-completion based |

**What a curriculum graduate already satisfies.** The *method*, conceptually: the BD lifecycle (Doctrine 03), the gate ladder (Doctrine 04), win themes/discriminators/ghost themes and color teams (Doctrine 04; `literacy/how-color-teams-work.md`, merged), the compliance matrix (Doctrine 02), price-to-win (Doctrine 05). The capstone (`course/capstone-build-an-orbital.md`) is deliberately the right *shape* of a Shipley work portfolio — a real solicitation carried through compliance matrix → ORBITAL → score → bid/no-bid.

**Incremental step to earn it.** Complete the paid Shipley courses (the One Star assessment is embedded in the course; the US "certification" route needs the 6+4 unit bundle, ~$4,995 package). The curriculum cannot substitute for Shipley's own course delivery, and per the licensing caveat (§0) it must not present its paraphrase as Shipley-endorsed.

**"SPMBOK" correction (important).** The task named **SPMBOK** as "Shipley Proposal Management Body of Knowledge." Research shows **SPMBOK** is the **Software Product Management Body of Knowledge** (ISPMA) — unrelated to Shipley. Shipley's reference works are the *Proposal Guide* and *BD Lifecycle Guide*; the profession's shared body of knowledge is the **APMP BOK**. Recommendation: drop "SPMBOK" from curriculum vocabulary entirely; use "Shipley method/guides" and "APMP BOK."

---

## 4. NCMA — National Contract Management Association / CPCM

**What it is.** The credential body for contract management (the *government-facing and buyer-facing* discipline, distinct from proposal writing). Four-tier ladder on the **Contract Management Body of Knowledge (CMBOK)**, ANSI-aligned.

| Credential | Level | Requirements (verified 2026) |
|---|---|---|
| **CCMA** | Entry | Bachelor's **or** 1 yr experience; 40 CPE; exam |
| **CFCM** | Mid, federal | Bachelor's + 2 yrs contract mgmt; 80 CPE; 150-Q **FAR-based** exam |
| **CCCM** | Mid, commercial | Bachelor's + 2 yrs contract mgmt; 80 CPE; UCC-based exam |
| **CPCM** | Senior | Bachelor's + 5 yrs contract mgmt; 120 CPE; ~179-Q CMBOK exam; recert every 5 yrs (60 hrs) |

**What a curriculum graduate already satisfies.**
- Doctrine 01 (money flow, identifiers, small-business programs) and Doctrine 04 (FAR/grant policy as the *public-side* governance) give the *environment* the CFCM/CPCM pre-award competencies assume.
- The NOFO/RFP reading skills (Doctrine 02; midterm) are the private-side mirror of the contracting officer's document.
- `modules/mpa.md` (the public side: FAR/grants framework, oversight) is the closest track to NCMA territory.

**Incremental step to earn it.**
1. **CFCM:** the FAR is the exam. The curriculum teaches FAR *as governance*, not FAR *as a rulebook* — a candidate needs FAR Parts 12/15 depth (and a textbook or DAU-equivalent) beyond the curriculum.
2. **CPCM:** additionally needs **post-award contract administration** (performance monitoring, modifications, terminations, closeout) — currently only sketched in Doctrine 07's `deliver` stage and the MBA flywheel.
3. Experience years + CPE accumulation + the body's exam via Kryterion.

**Gap the curriculum could close (optional, if NCMA alignment becomes a goal):** a literacy page on the contracting lifecycle *post-award* (admin, modifications, closeout) and a FAR-parts map — but note the curriculum is concept-first and deliberately private-side (pursuit-side); NCMA is fundamentally a buyer-side credential.

---

## 5. DAU / DAWIA and FAC-C — government acquisition workforce certifications

**What they are.** Certifications for the *government-side* acquisition workforce, not for industry BD/proposal practitioners. Two parallel systems:

- **FAC-C (Federal Acquisition Certification in Contracting)** — for civilian agencies (FAI). Current **FAC-C (Professional)** = CON 1100 (Contract Foundational Skills), CON 1200 (Pre-Award), CON 1300 (Award), CON 1400 (Post-Award) + 1 yr experience.
- **DAWIA (Defense Acquisition Workforce Improvement Act)** — for DoD, administered by **DAU**. Under the 2022 "Back-to-Basics" modernization, seven functional areas with tiered certs: Contracting (single "Professional" tier: CON 1100–1400V + CON 3900V exam), Business Cost Estimating (Practitioner/Advanced), Business Financial Management (Practitioner/Advanced), Program Management (Practitioner/Advanced), etc. 80 hrs continuous learning per 2 yrs.

**What a curriculum graduate already satisfies.** Doctrine 01 (appropriations, money flow), Doctrine 02 (solicitations), Doctrine 04 (FAR as enforceable governance) are the *conceptual context* these courses formalize. MBA-2 (price-to-win) and MBA-3 (ORBITAL as business plan) touch the business-cost-estimating / FM competencies at concept level.

**Incremental step to earn it.** Not an industry path: requires a government contracting/program role, the CON/ACQ course sequence (DAU-equivalents available via Graduate School USA, Management Concepts, etc.), and experience. The curriculum should treat these as **contextual reference** (so graduates understand the buyer's certification) rather than a prep target.

---

## 6. PMP / PMI — project management

**What it is.** PMI's Project Management Professional (PMP) is the gold-standard *project-management* credential — scope/schedule/cost/risk/EVM — frequently listed as preferred for capture managers and as a key-personnel requirement on federal contracts. Related PMI credentials: **CAPM** (entry), **PgMP** (program), **PMI-ACP** (agile).

**What a curriculum graduate already satisfies.** The *portfolio/business edge*: MBA-2 (price-to-win, competitive range), MBA-6 (portfolio construction, board pitch), SI-2 (pipeline as portfolio), SI-6 (leader's dashboard). FAC-P/PM (government program-management cert) has a formal reciprocity with PMI (a PMP waives some FPM coursework) — a useful footnote for MPA/graduate-track students who go government-side.

**Incremental step to earn it.** PMP is a **different body of knowledge** (PMBOK). The curriculum teaches the pursuit pipeline, not project-delivery discipline (WBS, scheduling, EVM, risk registers). A candidate needs PMI's 35-hr training + 36–60 months of project experience + the 180-Q exam + 60 PDUs/3 yrs. CAPM is the accessible entry analog for students.

**Recommendation:** cite PMP as a *complementary* career credential for the "deliver" end of the pipeline (Doctrine 07), not as a curriculum-aligned target.

---

## 7. SMPS CPSM — professional services marketing/BD (A/E/C)

The **Certified Professional Services Marketer** (Society for Marketing Professional Services) requires a Bachelor's + 4 yrs professional-services marketing/BD (degreeless: 8 yrs), a 150-Q exam across six domains (marketing research, marketing planning, client/BD, proposals, promotion, firm management), 74% pass, twice-yearly windows (~$520–765). Overlap with the curriculum: proposals domain, client/BD domain, MBA-4 certifications-as-go-to-market, MBA-6 board pitch. But SMPS is A/E/C-flavored and marketing-centric, whereas the curriculum is federal-capture-centric. **Small overlap; cite as a lateral option for students who go into professional-services firms.**

---

## 8. AAPTP and ACP-WI — unverified names (do not cite without confirmation)

These two were named in the task. **Rigorous web research (2026-08) could not locate a credential by either name from any issuing body:**

- **AAPTP** — returns only unrelated hits (Airfield Asphalt Pavement Technology Program; Chinese training associations). Closest *plausible* intents: **APTAC** (Association of Procurement Technical Assistance Centers — trains the *business* side via PTACs, but issues no individual credential), or a government acquisition-academy program (e.g., VA Acquisition Academy). **Mark unverified.**
- **ACP-WI** — returns only unrelated hits (PMI-ACP agile; Adobe Certified Professional). Plausible readings: a mis-remembered **PMI-ACP**, an inversion of **CP APMP**, or a local/regional chapter designation. **Mark unverified.**

**Handling rule for the curriculum:** do not name either in teaching material until an issuing body is confirmed. If they were meant as placeholders for APTAC and PMI-ACP, those are real and are covered above.

---

## 9. Named-canon posture — how the curriculum should name and position these bodies

The curriculum already has a doctrine-level rule that governs this: **`doctrine/08-tools-change-concepts-dont.md`** — concepts are durable, tools are swappable; the course teaches layer one and only *mentions* layer two. Certification bodies are neither pure concept nor pure tool: **the *body of knowledge* is near-durable; the *credential product* (tiers, exam formats, course packages) changes frequently.** The posture below follows that split.

**Recommended posture (per doctrine/08 and the existing `literacy/industry-standard-canon.md`):**

1. **Name the canon at the literacy layer, never in the doctrine.** `literacy/industry-standard-canon.md` already names Shipley, APMP, FAR/DFARS, and the certification landscape as the *vocabulary anchor*. This research doc is the source of truth that page condenses. Doctrine chapters should continue to use the *concepts* (pipeline, gates, color team, compliance matrix) without citing bodies — that is already the case.

2. **Treat bodies as "the profession's named institutions," not as brands to teach or chase.** In teaching material, say "the industry's professional body (APMP) certifies against its Body of Knowledge" — never "get APMP-certified with our course." This preserves the stack-agnostic rule (a credential is a *product* that can change) while honoring the *canon* (the vocabulary is durable).

3. **Distinguish three tiers of naming, so material is honest about what is durable:**
   - **Durable canon** (safe to name in any layer): the Shipley BD lifecycle, the APMP BOK vocabulary, FAR/DFARS as the law, the seven-gate ladder. These are the *concepts'* industry names.
   - **Semi-durable** (name in literacy only, with a date): certification *tiers and requirements* (APMP Foundation/Practitioner/Professional; NCMA CFCM/CPCM; FAC-C). These change every few years — cite them with a "as of" date, exactly as `align/concept-to-system-map.md` version-pins DNA paths.
   - **Tool-like / swappable** (mention only as examples, never tested): specific course packages, exam costs, badge vendors (Credly), regional pricing. These are the "tools" of credentialing.

4. **Never claim endorsement or official prep.** The DNA licensing docs (§0) prohibit claiming Shipley/APMP partnership or certification-prep status. Mirror that in the curriculum: any student-facing statement must say the course teaches the *concepts the credential certifies*, and that earning the credential requires the body's own materials, exam, and verifiable work experience.

5. **Position the credential ladder as a "career map," not a syllabus.** A suggested single literacy artifact: a **"credential ladder" page** (backed by this research doc) that shows the four career directions a graduate can walk — *proposal/capture* (APMP → Shipley), *contracts* (NCMA CFCM→CPCM), *program/project delivery* (CAPM→PMP; FAC-P/PM), and *services marketing/BD* (CPSM) — with each direction's concept-alignment back to the doctrine. This keeps the doctrine stable while giving students the industry map.

---

## 10. Curriculum alignment — what the repo actually teaches (verified file citations)

All citations are to files in the curriculum repo (`DreamLimited/dream-curriculum`).

| Credential knowledge domain | Curriculum coverage (file → what it teaches) | Coverage grade |
|---|---|---|
| Bid/proposal lifecycle (APMP/Shipley) | `doctrine/03-the-pursuit-pipeline.md` (sense→…→learn); `literacy/industry-standard-canon.md` (BD lifecycle map) | **Strong** |
| Gates & bid/no-bid discipline | `doctrine/04-gates-and-governance.md`; `modules/shared-core.md` S2/S5; `modules/strategic-initiative.md` SI-3 | **Strong** |
| Compliance matrix / solicitation reading | `doctrine/02-rfps-and-solicitations.md`; `modules/shared-core.md` S3; `course/assessments-and-rubric.md` (midterm) | **Strong** |
| Score = pWin × value, threshold | `doctrine/05-scoring-and-price-to-win.md`; `modules/shared-core.md` S5 | **Strong** |
| Price-to-win | `doctrine/05-scoring-and-price-to-win.md`; `modules/mba.md` MBA-2 | **Strong** (concept level) |
| Capture / win strategy | `doctrine/04-gates-and-governance.md`; `align/concept-to-system-map.md` §4–5 (DNA capture rules) | **Medium** |
| Color-team reviews | `doctrine/04-gates-and-governance.md`; `literacy/how-color-teams-work.md` (merged) | **Medium** |
| Money flow / identifiers / small-business programs | `doctrine/01-where-the-money-lives.md`; `modules/mba.md` MBA-4; `case-study/ravonics.md` | **Strong** |
| FAR/DFARS as law | `doctrine/04-gates-and-governance.md` (governance, not rulebook); `modules/mpa.md` | **Medium** (concept, not article-level) |
| Post-award contract administration | `doctrine/07-lifecycle-dream-orbital-world.md` (deliver stage, conceptually); `modules/mba.md` MBA-5 (flywheel) | **Weak** |
| Project management (scope/schedule/cost/EVM) | `modules/mba.md` MBA-6 (portfolio); `modules/strategic-initiative.md` SI-6 (metrics) | **Weak** (portfolio-level only) |
| Negotiation / orals | Doctrine 07 post-submit corridor (named, not taught) | **Weak** |
| Cost estimating / price analysis | `doctrine/05-scoring-and-price-to-win.md` (strategic pricing only) | **Weak** |

**Honest headline for faculty:** the curriculum's strongest certification alignment is to the **APMP Foundation/Practitioner knowledge base** and the **Shipley method's concepts** — because those are the disciplines the doctrine is built from (via the license-clean paraphrase corpus). Its weakest alignment is to **NCMA/CPCM** (post-award + FAR depth), **PMP** (PM discipline), and the **government-side DAWIA/FAC-C** certificates — because those are different bodies of knowledge than the pursuit pipeline.

---

## 11. Verification status register

| Item | Status |
|---|---|
| APMP current ladder (Foundation/Practitioner/Professional/CPP, Capture Practitioner/Professional) | **Verified** (APMP-ANZ certification page; APMP certification overview PDF; chapter sources) |
| APMP Foundation exam format (75-Q, open-book, pass-fail) & experience bands (1–3 / 3–7 / 7+) | **Verified** (multiple sources) |
| APMP legacy "CF APMP / CP APMP" naming | **Needs confirmation** (secondary source only; current APMP site uses new names) |
| APMP micro-certifications & price band ($125–900) | **Verified** (APMP-ANZ) |
| Shipley star ladder (One/Two/Three) + embedded assessment | **Verified** (shipleywins.com.au; shipleywins.com; Credly) |
| Shipley US "6 core + 4 elective unit" certification route | **Verified** (shipleywins.com) — regional variance noted |
| SPMBOK = Software Product Management BOK (ISPMA), not Shipley | **Verified** (research) — treat as a naming correction |
| NCMA ladder (CCMA/CFCM/CCCM/CPCM) + experience/CPE/exam | **Verified** (ncmahq.org sources) — some older/chapter sources conflict on fee/experience; confirm against current CPCM/CCCM handbooks |
| FAC-C (Professional) CON 1100–1400 curriculum | **Verified** (fai.gov; Graduate School USA) |
| DAWIA Back-to-Basics seven functional areas + tiers | **Verified** (DAU catalog; DAU certification crosswalks) |
| PMP requirements + FAC-P/PM reciprocity | **Verified** (PMI, fai.gov) |
| CPSM requirements | **Verified** (SMPS handbooks) |
| AAPTP, ACP-WI | **Unverified** — could not locate; do not cite (see §8) |

---

## 12. Sources

Web sources consulted (2026-08-05):

- APMP ANZ certification pages — https://www.apmpanz.org/certification
- APMP certification overview (CSK Management, v2.9) — APMP legacy ladder
- APMP Foundation training (Chesapeake APMP) — Foundation exam format
- Vault / UMD Career Center — CPP APMP process detail (secondary)
- Shipley Associates — https://www.shipleywins.com/certification (6 core + 4 elective units)
- Shipley APAC — https://shipleywins.com.au/certification (star ladder)
- Shipley Credly badges — https://www.credly.com/org/shipley-acredditation
- NCMA — https://www.ncmahq.org/certification (ladder; CFCM/CCCM/CPCM handbooks)
- FAI — https://www.fai.gov/certification/fac-c (FAC-C Professional; legacy FAC-C)
- Graduate School USA — FAC-C/DAWIA contracting program; CON 1100/1200/1300/1400
- DAU — https://icatalog.dau.edu (Back-to-Basics functional areas; DAWIA tiers; CON 3900V)
- PMI / FAI FAC-P/PM reciprocity page — https://www.fai.gov/certification/fac-ppm/contracting-fac/fac-ppm-reciprocity-other-certifications
- SMPS CPSM handbook + FAQs — https://www.smps.org
- GovCon career guides (2026) — APMP/PMP/Shipley/CFCM demand signals

Repo sources cited (curriculum alignment): `README.md`, `doctrine/01`–`08`, `modules/shared-core.md`, `modules/mba.md`, `modules/strategic-initiative.md`, `course/assessments-and-rubric.md`, `course/capstone-build-an-orbital.md`, `align/concept-to-system-map.md`, `literacy/industry-standard-canon.md` (merged), `case-study/ravonics.md`. DNA licensing posture: `DreamLimited/dna` → `docs/licensing-shipley-corpus.md`, `docs/licensing-apmp-corpus.md`.

---

*Bottom line: the curriculum is a strong conceptual foundation for the APMP/Shipley side of the credential map and a contextual introduction to the contracts and project-management sides. It is not, and cannot honestly claim to be, official preparation for any body's exam without the body's own materials and the candidate's verifiable work experience. The named-canon posture keeps the bodies at the literacy layer — named, dated, and never taught as the point of the course.*
