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
---

# Bilinear pairing ⇒ zk-SNARK

[[pairings|Bilinear pairing]] implies [[succinct-argument#zk-snark|zk-SNARK]] in the generic bilinear group model, given a per-circuit trusted CRS.

## Statement

In a [[pairings|bilinear group]] with a per-circuit trusted CRS, Groth's construction is a [[succinct-argument#zk-snark|zk-SNARK]] for arithmetic circuit satisfiability with perfect completeness and perfect zero-knowledge: a proof is three group elements (two in $\GG_1$, one in $\GG_2$) and verification is one pairing-product equation; knowledge soundness holds against generic bilinear-group adversaries — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]].

## Sketch

The circuit is arithmetized as a quadratic arithmetic program; the CRS holds encodings of the QAP polynomials at a secret point $\tau$, scaled by the secret trapdoor $\alpha, \beta, \gamma, \delta$, and the prover combines them into three group elements $A, B, C$, folding the quotient $h(\tau)t(\tau)$ into $C$; a single pairing-product check on them encodes the QAP divisibility condition at $\tau$. In the generic bilinear group model each proof element is a known linear combination of CRS elements, and the verification equation holding as a polynomial identity in the trapdoors forces those coefficients to contain a satisfying assignment, which the extractor outputs.

## Notes

`class: free`: Gro16 proves knowledge soundness only against generic bilinear-group adversaries; per `schema/reduction-classes.yaml` an idealized model goes on the model axis with `class: free`.

`model: generic-group`: Gro16 proves knowledge soundness in the generic bilinear group model. The scheme additionally requires a per-circuit trusted CRS, which the single-valued model field cannot also record; the statement text carries it.

- Knowledge soundness of Groth16 in the algebraic group model under a $q$-type discrete-logarithm assumption — [[FKL18 - The Algebraic Group Model and its Applications|FKL18]].
- The bilinear-group hypothesis is a structure: `[[pairings]]` is a Glossary page, not an assumption page.
