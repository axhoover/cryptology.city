---
type: reduction
status: draft
title: "Hash function ⇒ SNARK"
aliases: []
id: red-hash-function-to-snark-bbhr18
kind: implication
hypotheses: [hash-function]
conclusion: snark
class: unstated
model: rom
source:
  - "[[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18]]"
security-loss: ""
---

# Hash function ⇒ SNARK

[[hash-function|Hash function]] implies [[succinct-argument|SNARK]].

## Statement

A [[hash-function|collision-resistant hash function]], used for Merkle commitments and modeled as a random oracle for non-interactivity, yields STARKs: transparent (no trusted setup) [[succinct-argument|succinct non-interactive arguments of knowledge]] with quasilinear prover time and $O(\log^2 T)$ proof size for a $T$-step computation — [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18]].

## Sketch

The execution trace is arithmetized into Reed–Solomon codewords, Merkle-committed with the hash function, and proximity-tested with FRI; the BCS transform ([[BCS16 - Interactive Oracle Proofs|BCS16]]) compiles the resulting IOP into a non-interactive argument in the random-oracle model, preserving knowledge soundness.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

`model: rom`: knowledge soundness of the BCS-compiled argument is proved in the random-oracle model — [[BCS16 - Interactive Oracle Proofs|BCS16]]; instantiating the oracle with a concrete hash is heuristic. Only the interactive variant reduces to collision resistance in the standard model.

- 'Security relies only on collision-resistant hash functions' on succinct-argument over-claims: non-interactive soundness needs the ROM, and post-quantum security a QROM analysis.
- The conclusion is the STARK variant, a section of succinct-argument, not its own page.
