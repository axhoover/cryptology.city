---
type: reduction
status: draft
title: "Arithmetization ⇒ SNARK"
aliases: []
id: red-arithmetization-to-snark-bbhr18
kind: implication
hypotheses: [arithmetization]
conclusion: snark
class: unstated
model: crs
source:
  - "[[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18]]"
security-loss: ""
---

# Arithmetization ⇒ SNARK

[[arithmetization|Arithmetization]] implies [[succinct-argument|SNARK]].

## Statement

Migrated verbatim from [[arithmetization]]:

> AIR encodes a computation as a constraint on consecutive rows of an execution trace: for each step $i$, a polynomial relation $P(\mathbf{w}_i, \mathbf{w}_{i+1}) = 0$ holds. AIR is the arithmetization underlying [[succinct-argument|STARKs]] — the FRI protocol can then verify the AIR constraints via a Reed-Solomon proximity test — [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18]].

Migrated verbatim from [[arithmetization]] § Results:

> - PLONKish arithmetization enables universal SNARKs with a single trusted setup for all circuits of bounded size — standard

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'air' is an alias of content/Glossary/arithmetization.md, the host page, so this is a self-loop in the current wiki.
- As an edge it asserts AIR alone yields a STARK, which is false without FRI and a compiler — the sentence is about being an ingredient, not an implication.
- STARK links to `[[succinct-argument]]`, whose node cannot distinguish transparent STARKs from trusted-setup SNARKs.
- Duplicates the Results bullet at line 54 of the same page.
- COMPOSITE: (i) AIR is the arithmetization for STARKs, (ii) FRI verifies AIR constraints via a Reed-Solomon proximity test. Two links, one citation.
- STARK is linked as `[[succinct-argument|STARKs]]` — STARK is only an alias of content/Primitives/succinct-argument.md, so STARK and SNARK are the same node and this edge cannot distinguish transparent from trusted-setup arguments.
- FRI has no page and no reference of its own (BBHR18 covers it, but the FRI paper BBHR17 is not in content/References/).
- Duplicates the Results bullet at line 54; the two statements of the same fact must not become two graph edges.
- MISUSE OF THE FOLKLORE EXCEPTION: labelled '— standard' but 'PLONKish arithmetization enables universal SNARKs with a single trusted setup for all circuits of bounded size' is an attributable result (Plonk, and universal/updatable SRS work), not folklore. CLAUDE.md says 'obvious to a working cryptographer' is not a folklore claim.
- 'universal SNARKs' has no page of its own; conclusion collapses onto succinct-argument.
