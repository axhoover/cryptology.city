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
strength: unconditional
source:
  - "[[GW11 - Separating Succinct Non-Interactive Arguments From All Falsifiable Assumptions|GW11]]"
---

# No fully-black-box reduction from Falsifiable assumption to SNARK

A reduction of class `fully-black-box` from [[falsifiable-assumptions|Falsifiable assumption]] to [[succinct-argument|SNARK]] would imply a contradiction.

## Statement

For any NP language with a sub-exponentially hard subset-membership problem, a black-box reduction from a [[falsifiable-assumptions|falsifiable assumption]] to the adaptive soundness of a [[succinct-argument|SNARG]] for that language in the CRS model exists only if the assumption is false. The separation covers designated-verifier SNARGs and slightly succinct ones, whose proofs need only be sublinear in the statement and witness length — [[GW11 - Separating Succinct Non-Interactive Arguments From All Falsifiable Assumptions|GW11]].

## Sketch

Succinctness and the hardness of the language yield an unbounded cheating prover $P^*$ that outputs false statements with accepting proofs, whose statement–proof pairs are indistinguishable from those of an efficient prover $P$ that samples true statements with witnesses and proves them honestly (a leakage-simulation argument: the proof is a short function of the witness). A black-box reduction $R^{P^*}$ breaks the assumption; $R^{P}$ behaves indistinguishably, is efficient, and so breaks the assumption outright.

## Notes

`class: fully-black-box`: GW11 allow an arbitrary SNARG construction but require the reduction to use the cheating prover only as an oracle. Fully-black-box reductions are a subclass of these; semi- and weakly-black-box reductions, which may depend on the adversary's code, are untouched.

- Adaptively sound SNARGs for NP nonetheless exist in the plain model, from sub-exponentially hard indistinguishability obfuscation and one-way functions together with the polynomial hardness of discrete log or factoring — [[WW24 - Adaptively-Sound Succinct Arguments for NP from Indistinguishability Obfuscation|WW24]]
