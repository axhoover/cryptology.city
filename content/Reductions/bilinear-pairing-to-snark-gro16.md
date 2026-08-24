---
type: reduction
status: draft
title: "Bilinear pairing ⇒ SNARK"
aliases: []
id: red-bilinear-pairing-to-snark-gro16
kind: implication
hypotheses: [bilinear-pairing]
conclusion: snark
class: free
model: generic-group
source:
  - "[[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]"
security-loss: ""
---

# Bilinear pairing ⇒ SNARK

[[pairings|Bilinear pairing]] implies [[succinct-argument|SNARK]].

## Statement

Migrated verbatim from [[succinct-argument]] § zk-SNARK:

> A SNARK with zero-knowledge. The verifier learns nothing about the witness beyond the validity of the statement. Groth16 is the canonical pairing-based zk-SNARK with constant proof size (3 group elements) and millisecond verification — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]].

## Notes

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- The hypothesis is only implicit ('pairing-based'); the actual assumption is stated elsewhere on the page as knowledge-of-exponent (line 89) or the generic/algebraic group model (line 95). As written the hyperedge has no assumption.
- INTERNAL INCONSISTENCY: this line says '3 group elements' while line 89 says '3 $\GG_1$ elements + 1 $\GG_2$ element' (= 4). Groth16 proofs are 2 $\GG_1$ + 1 $\GG_2$ = 3 elements, so line 89 appears to be the erroneous one. Reported, not fixed.
- 'pairings' resolves to a Glossary page, not an assumption page — a hypothesis slot filled by a glossary entry.
