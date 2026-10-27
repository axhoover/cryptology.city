---
type: reduction
status: draft
title: Bilinear pairing + q-DLOG ⇒ zk-SNARK (Groth16 in the AGM)
aliases: []
id: red-bilinear-pairing-and-q-dlog-to-zk-snark-fkl18
kind: implication
hypotheses: [bilinear-pairing, q-dlog]
conclusion: zk-snark
class: unstated
model: algebraic-group
source:
  - "[[FKL18 - The Algebraic Group Model and its Applications|FKL18]]"
  - "[[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]"
security-loss: "tight"
rationale:
  model: "FKL18 prove knowledge soundness against algebraic provers; zero knowledge is Gro16's unconditional property."
---

# Bilinear pairing + q-DLOG ⇒ zk-SNARK (Groth16 in the AGM)

## Statement

In the [[algebraic-group-model|algebraic group model]], knowledge soundness of Groth's preprocessing SNARK for QAP satisfiability over an asymmetric [[pairings|bilinear group]] reduces tightly to the [$(q_1, q_2)$-DLOG assumption](discrete-logarithm#q-dlog) in that group, for $q_1, q_2$ polynomial in the size of the QAP — [[FKL18 - The Algebraic Group Model and its Applications|FKL18]]; the construction is perfectly zero-knowledge, unconditionally — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]. It is therefore a [[succinct-argument#zk-snark|zk-SNARK]] for every algebraic prover if $q$-DLOG holds.

## Notes

- Gro16's own knowledge-soundness proof is in the generic bilinear group model: [[bilinear-pairing-to-snark-gro16|Bilinear pairing ⇒ zk-SNARK]] — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]].
- A proof is 3 group elements (2 in $\GG_1$, 1 in $\GG_2$), verified with one pairing-product equation of 3 pairings, and for $m$ wires and $n$ multiplication gates the CRS has about $m + 2n$ elements of $\GG_1$ and $n$ of $\GG_2$ — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]].
