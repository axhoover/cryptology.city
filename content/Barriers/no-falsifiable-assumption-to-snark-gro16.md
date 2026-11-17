---
type: barrier
status: draft
title: "No fully-black-box reduction from Falsifiable assumption to fully succinct SNARKs"
aliases: []
id: bar-falsifiable-assumption-to-snark-gro16
hypotheses: [falsifiable-assumption]
conclusion: fully-succinct-snark
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

# No fully-black-box reduction from Falsifiable assumption to fully succinct SNARKs

## Statement

Let $L$ be an NP language with a sub-exponentially hard subset-membership problem. If a reduction that uses the cheating prover only as an oracle proves the adaptive soundness of a [[succinct-argument|SNARG]] for $L$ in the CRS model from a [[falsifiable-assumptions|falsifiable assumption]], then the assumption is false; the separation covers designated-verifier SNARGs and slightly succinct ones, whose proofs need only be sublinear in the statement and witness length — [[GW11 - Separating Succinct Non-Interactive Arguments From All Falsifiable Assumptions|GW11]]. A [[succinct-argument#fully-succinct-snarks|fully succinct SNARK]] gives such a SNARG for $L$: its $\crs$ comes from $\Setup(1^\secpar)$ alone, for an NP verifier $M_L$ of $L$ running in time $t$, a proof that $x \in L$ is a proof for $(M_L, x, t(|x|))$ of size at most $p(\secpar + \log t(|x|))$ for the polynomial $p$ fixed with the scheme, polylogarithmic in $|x|$, and knowledge soundness for adaptively chosen statements implies adaptive soundness ([[fully-succinct-snark-to-sublinear-snarg-for-np|Fully succinct SNARK ⇒ SNARG for NP with sublinear proofs]]), so a reduction that proves its knowledge soundness using the prover only as an oracle proves this SNARG adaptively sound in the same way — folklore.

## Sketch

Succinctness and the hardness of $L$ give an inefficient cheating prover $P^*$ that outputs false statements with accepting proofs, whose statement–proof pairs are indistinguishable from those of an efficient prover $P$ that samples true statements with witnesses and proves them honestly (the short proof is simulated as leakage on the witness). Since $P^*$ breaks adaptive soundness, the reduction $R^{P^*}$ breaks the assumption; the assumption's challenger is efficient, so $R^{P}$ wins its game with probability negligibly close to that of $R^{P^*}$, and $R^{P}$ is efficient, so the assumption is false.

## Notes

- Adaptively sound SNARGs for NP nonetheless exist in the plain model, from sub-exponentially hard indistinguishability obfuscation and one-way functions together with the polynomial hardness of discrete log or factoring — [[WW24 - Adaptively-Sound Succinct Arguments for NP from Indistinguishability Obfuscation|WW24]].
