---
type: reduction
status: draft
title: "Arithmetization ⇒ zk-SNARK"
aliases: []
id: red-arithmetization-to-zk-snark-gro16
kind: implication
hypotheses: [arithmetization]
conclusion: groth16
class: free
model: generic-group
source:
  - "[[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]"
security-loss: ""
---

# Arithmetization ⇒ zk-SNARK

[[arithmetization|Arithmetization]] implies [[succinct-argument#zk-snark|zk-SNARK]].

## Statement

Arithmetic-circuit satisfiability arithmetized as a [[arithmetization|QAP]] yields the Groth16 preprocessing [[succinct-argument#zk-snark|zk-SNARK]]: under a circuit-specific structured reference string, a proof is $3$ group elements and verification is one pairing-product equation. Zero-knowledge is perfect; knowledge soundness is proved in the generic bilinear group model — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]].

## Sketch

The reference string encodes powers of a secret point $\tau$ and the trapdoor $\alpha, \beta, \gamma, \delta$ in the exponent. The prover evaluates the witness's linear combinations of the QAP polynomials at $\tau$ in the exponent to obtain $A$ and $B$, folding the quotient $h(\tau)t(\tau)$ into $C$; the pairing-product equation checks the QAP divisibility relation at $\tau$. A generic adversary outputs only linear combinations of reference-string elements, and the verification equation forces those coefficients to encode a valid witness.

## Notes

`class: free`: Gro16 proves knowledge soundness by a statistical argument against generic adversaries and reduces to no computational hypothesis, so the RTV04 black-box axis does not apply. `free` scoped by `model: generic-group` follows the schema's generic-group guidance, as on [[bilinear-pairing-to-snark-gro16]] and [[kea-to-snark-gro16]].

`model: generic-group`: Gro16 proves knowledge soundness in the generic asymmetric bilinear group model. The circuit-specific structured reference string, previously recorded as `crs`, is part of a preprocessing SNARK's syntax and is stated in the Statement.

- Knowledge soundness of Groth16 in the algebraic group model under the $q$-discrete-logarithm assumption — [[FKL18 - The Algebraic Group Model and its Applications|FKL18]]
