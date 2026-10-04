---
type: barrier
status: draft
title: "No fully-black-box reduction from Falsifiable assumption to SNARK"
aliases: []
id: bar-falsifiable-assumption-to-snark-gro16
hypotheses: [falsifiable-assumption]
conclusion: snark
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: conditional
conditional-on:
  - the language has a sub-exponentially hard subset-membership problem
source:
  - "[[GW11 - Separating Succinct Non-Interactive Arguments From All Falsifiable Assumptions|GW11]]"
rationale:
  class: "GW11 allow any SNARG construction and rule out every reduction that uses the cheating prover only as an oracle, which contains the fully-black-box reductions; reductions that use the adversary's code, as semi- and weakly-black-box ones may, are untouched."
---

# No fully-black-box reduction from Falsifiable assumption to SNARK

## Statement

Let $L$ be an NP language with a sub-exponentially hard subset-membership problem. If a reduction that uses the cheating prover only as an oracle proves the adaptive soundness of a [[succinct-argument|SNARG]] for $L$ in the CRS model from a [[falsifiable-assumptions|falsifiable assumption]], then the assumption is false; the separation covers designated-verifier SNARGs and slightly succinct ones, whose proofs need only be sublinear in the statement and witness length — [[GW11 - Separating Succinct Non-Interactive Arguments From All Falsifiable Assumptions|GW11]].

## Sketch

Succinctness and the hardness of $L$ give an inefficient cheating prover $P^*$ that outputs false statements with accepting proofs, whose statement–proof pairs are indistinguishable from those of an efficient prover $P$ that samples true statements with witnesses and proves them honestly (the short proof is simulated as leakage on the witness). The assumption's challenger is efficient, so the reduction $R^{P}$ wins the assumption's game with probability negligibly close to that of $R^{P^*}$; $R^{P}$ is efficient, so the assumption is false.

## Notes

- Adaptively sound SNARGs for NP nonetheless exist in the plain model, from sub-exponentially hard indistinguishability obfuscation and one-way functions together with the polynomial hardness of discrete log or factoring — [[WW24 - Adaptively-Sound Succinct Arguments for NP from Indistinguishability Obfuscation|WW24]].
