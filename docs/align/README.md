---
title: "align/ — Concept ↔ System Map"
---

# align/ — Concept ↔ System Map

The **concept ↔ system mapping** between this curriculum and the machine-side encodings of the same doctrine lives in **[`align/concept-to-system-map.md`](concept-to-system-map.md)** — one table per durable concept, mapping to the DNA artifact paths that encode it (verified at DNA `v0.18.1`).

## What belongs here

- A mapping from each durable concept in `doctrine/` to its machine-side encoding(s) — where the same concept lives in the wider ecosystem's rule/playbook/formula layer.
- The fusion layer: the Shipley×DNA fusion map (which Shipley concepts map to which machine encodings), the DNA corpus index (rules, formulas, playbooks, prompts, and the retrieval corpus), and the book canon.
- A registry of stack changes: when a tool changes, the *mapping* is updated here, never the doctrine.
- Alignment checks that the human-facing curriculum and the machine-facing doctrine still teach the same concepts.

## The rule this directory exists to hold

> **When the stack changes, update the align map, never the doctrine.**

The doctrine is the shared language between the human side and the machine side. This directory is where the "same concept, different encoding" correspondence is kept honest.

## Status

This directory is **fully populated and version-pinned** — not a stub:

- [x] Fill the concept ↔ system map (2026-08-05, DNA v0.18.2).
- [x] Extend the map into the fusion layer: the Shipley×DNA fusion map, the DNA corpus index (rules, formulas, playbooks, prompts, retrieval corpus), and the book canon.
- [ ] Add an alignment check (drift detector) that compares this repo's concept registry against the machine doctrine's concept registry.

The map is the seam, not a dependency: doctrine files stay tool-agnostic, and this directory is the only place that knows what the tools are. The concept column and the government facts never change; the DNA/stack column changes when the machine-side doctrine does — record that change here, never in the doctrine files.
