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
rationale:
  model: "The argument is made non-interactive by the BCS transform, whose knowledge soundness BCS16 prove in the random-oracle model."
---

# CRHF ⇒ STARK

## Statement

A [[hash-function#collision-resistance|collision-resistant hash function]], used for Merkle commitments and modeled as a random oracle for non-interactivity, yields [[succinct-argument#stark|STARKs]]: transparent (no trusted setup) [[succinct-argument|succinct non-interactive arguments of knowledge]] with quasilinear prover time and $O(\log^2 T)$ proof size for a $T$-step computation — [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18a]].

## Sketch

The computation is expressed as an [[arithmetization#air-algebraic-intermediate-representation|AIR]]; the prover Merkle-commits to Reed–Solomon codewords of the execution-trace polynomials, and the AIR constraints reduce to a low-degree proximity claim about a derived codeword, which [[polynomial-commitment#fri-fast-reed-solomon-iop-of-proximity|FRI]] certifies in logarithmically many degree-halving rounds. The BCS transform compiles the resulting IOP, given its state-restoration soundness, into a non-interactive argument of knowledge in the random-oracle model — [[BCS16 - Interactive Oracle Proofs|BCS16]].

## Notes

- Only the interactive variant, before the BCS transform, reduces to collision resistance in the standard model — [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18a]]; instantiating the random oracle with a concrete hash function is heuristic — standard.
- Post-quantum soundness of the non-interactive argument needs a quantum-random-oracle analysis: the BCS transform of a round-by-round sound IOP is sound in the quantum random-oracle model — [[CMS19 - Succinct Arguments in the Quantum Random Oracle Model|CMS19]].
