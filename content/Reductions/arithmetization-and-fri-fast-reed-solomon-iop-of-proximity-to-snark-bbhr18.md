---
type: reduction
status: draft
title: "Arithmetization + FRI (Fast Reed-Solomon IOP of Proximity) ⇒ SNARK"
aliases: []
id: red-arithmetization-and-fri-fast-reed-solomon-iop-of-proximity-to-snark-bbhr18
kind: implication
hypotheses: [arithmetization, fri]
conclusion: snark
class: unstated
model: rom
source:
  - "[[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18]]"
security-loss: ""
---

# Arithmetization + FRI (Fast Reed-Solomon IOP of Proximity) ⇒ SNARK

[[arithmetization|Arithmetization]] together with [[polynomial-commitment#fri-fast-reed-solomon-iop-of-proximity|FRI (Fast Reed-Solomon IOP of Proximity)]] implies [[succinct-argument|SNARK]].

## Statement

Migrated verbatim from [[arithmetization]] § Results:

> - AIR + FRI = STARK; the FRI protocol achieves transparent verification of AIR constraints — [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Genuinely conjunctive ({AIR, FRI} => STARK) — must not be flattened into two single-hypothesis edges.
- The bullet bundles a second claim after the semicolon ('the FRI protocol achieves transparent verification of AIR constraints'), which is a separate property statement.
- 'AIR + FRI = STARK' uses '=' for a construction, not an equivalence; migration must not read this as direction 'equivalent'.
- Model recorded as 'rom' because STARKs are non-interactive via Fiat-Shamir over a hash — the page states no model; treat as inference, not source text.
- Duplicates the prose claim at line 47.
