---
type: reduction
status: stub
title: "FRI (Fast Reed-Solomon IOP of Proximity) ⇒ SNARK"
aliases: []
id: red-fri-fast-reed-solomon-iop-of-proximity-to-snark
kind: implication
hypotheses: [fri]
conclusion: snark
class: unstated
model: rom
source: folklore
security-loss: ""
---

# FRI (Fast Reed-Solomon IOP of Proximity) ⇒ SNARK

[[polynomial-commitment#fri-fast-reed-solomon-iop-of-proximity|FRI (Fast Reed-Solomon IOP of Proximity)]] implies [[succinct-argument|SNARK]].

## Statement

Migrated verbatim from [[succinct-argument]] § STARK:

> The core component of STARKs is the **FRI** (Fast Reed-Solomon IOP of Proximity) protocol, which is a transparent polynomial commitment scheme based on proximity testing to Reed-Solomon codes.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- MISSING CITATION (FRI is BBHR18a 'Fast Reed-Solomon Interactive Oracle Proofs of Proximity').
- SUSPECTED TERMINOLOGY ERROR: FRI is an IOP of proximity (a low-degree/proximity test), not itself a polynomial commitment scheme; a polynomial commitment is built FROM FRI plus Merkle commitments. Reported, not fixed.
- 'fri' has no page; 'polynomial commitment' is mentioned in prose without the `[[polynomial-commitment]]` wikilink used elsewhere on the page.
- Sourcing pass (2026-09), **not fixed**: claim judged incorrect as stated — FRI is an IOP of proximity to Reed–Solomon codes, not a polynomial commitment scheme, and alone does not yield a SNARK: a STARK also needs Merkle hashing, arithmetization and the BCS compilation in the ROM, hypotheses this single-hypothesis edge omits. The correctly typed edge is sourced to [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18]]. See [[arithmetization-and-fri-fast-reed-solomon-iop-of-proximity-to-snark-bbhr18]].
