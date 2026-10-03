---
type: reduction
status: draft
title: "CRHF ⇒ STARK"
aliases: []
id: red-hash-function-to-snark-bbhr18
kind: implication
hypotheses: [crhf]
conclusion: transparent-succinct-argument
class: unstated
model: rom
source:
  - "[[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18a]]"
security-loss: ""
---

# CRHF ⇒ STARK

[[hash-function#collision-resistance|CRHF]] implies [[succinct-argument#stark|STARK]].

## Statement

A [[hash-function#collision-resistance|collision-resistant hash function]], used for Merkle commitments and modeled as a random oracle for non-interactivity, yields [[succinct-argument#stark|STARKs]]: transparent (no trusted setup) [[succinct-argument|succinct non-interactive arguments of knowledge]] with quasilinear prover time and $O(\log^2 T)$ proof size for a $T$-step computation — [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18a]].

## Sketch

The computation is expressed as an [[arithmetization|AIR]]. The prover Merkle-commits, with the hash function, to Reed–Solomon codewords of the execution-trace polynomials; the AIR constraints reduce to a low-degree proximity claim about a derived codeword, which [[polynomial-commitment#fri-fast-reed-solomon-iop-of-proximity|FRI]] certifies in logarithmically many degree-halving rounds. The BCS transform ([[BCS16 - Interactive Oracle Proofs|BCS16]]) compiles the resulting IOP into a non-interactive argument in the random-oracle model, preserving knowledge soundness.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

`model: rom`: knowledge soundness of the BCS-compiled argument is proved in the random-oracle model — [[BCS16 - Interactive Oracle Proofs|BCS16]]; instantiating the oracle with a concrete hash is heuristic. Only the interactive variant reduces to collision resistance in the standard model.

- 'Security relies only on collision-resistant hash functions' on succinct-argument over-claims: non-interactive soundness needs the ROM, and post-quantum security a QROM analysis.
- The conclusion is the STARK variant, a section of succinct-argument, not its own page.
