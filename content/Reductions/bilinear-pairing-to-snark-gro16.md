---
type: reduction
status: draft
title: "Bilinear pairing ⇒ zk-SNARK"
aliases: []
id: red-bilinear-pairing-to-snark-gro16
kind: implication
hypotheses: [bilinear-pairing]
conclusion: zk-snark
class: free
model: generic-group
source:
  - "[[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]"
security-loss: ""
rationale:
  class: "Gro16 prove knowledge soundness directly against every generic bilinear-group adversary, with no reduction to an assumption, which is the free class scoped by the generic-group model."
  model: "Gro16 prove knowledge soundness in the generic bilinear group model; the per-circuit trusted CRS the scheme also needs is stated in the theorem."
---

# Bilinear pairing ⇒ zk-SNARK

## Statement

In an asymmetric [[pairings|bilinear group]] with a per-circuit trusted CRS, Groth's construction is a [[succinct-argument#zk-snark|zk-SNARK]] for arithmetic circuit satisfiability with perfect completeness and perfect zero-knowledge, knowledge-sound against generic bilinear-group adversaries; a proof is three group elements (two in $\GG_1$, one in $\GG_2$) and verification is one pairing-product equation — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]].

## Sketch

The circuit is arithmetized as a [[arithmetization#qap-quadratic-arithmetic-program|quadratic arithmetic program]]; the CRS holds encodings of the QAP polynomials at a secret point $\tau$, scaled by secret $\alpha, \beta, \gamma, \delta$, and the prover combines them into $A, B, C$, folding the quotient term $h(\tau)t(\tau)$ into $C$, so that one pairing-product check encodes QAP divisibility at $\tau$. A generic adversary's proof elements are known linear combinations of CRS elements, and the verification equation holding as a polynomial identity in $\tau, \alpha, \beta, \gamma, \delta$ forces those coefficients to contain a satisfying assignment, which the extractor outputs.

## Notes

- In the algebraic group model, knowledge soundness of Groth's construction reduces to a $q$-type discrete-logarithm assumption — [[FKL18 - The Algebraic Group Model and its Applications|FKL18]].
