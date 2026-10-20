---
type: reduction
status: draft
title: Sub-exponential LWE ⇒ PPAD hardness
aliases: []
id: red-subexponential-lwe-to-ppad-hardness-jkkz21
kind: implication
hypotheses: [subexponential-lwe]
conclusion: ppad-hardness
class: unstated
model: standard
source:
  - "[[JKKZ21 - SNARGs for bounded depth computations and PPAD hardness from sub-exponential LWE|JKKZ21]]"
security-loss: ""
---

# Sub-exponential LWE ⇒ PPAD hardness

## Statement

If [[learning-with-errors#sub-exponential-lwe|LWE is sub-exponentially hard]], then [[total-function-np#subclasses|PPAD]] contains problems that are hard on average — [[JKKZ21 - SNARGs for bounded depth computations and PPAD hardness from sub-exponential LWE|JKKZ21]]. The proof goes through non-interactive arguments for bounded-depth computations, obtained by applying the Fiat–Shamir transform with a correlation-intractable hash family to the GKR protocol.

## Notes

- Hardness of PPAD was first derived from indistinguishability obfuscation and one-way functions: [[subclasses-to-hash-function|OWF + iO ⇒ PPAD hardness]] — [[BPR15 - On the Cryptographic Hardness of Finding a Nash Equilibrium|BPR15]]. Finding a Nash equilibrium, even in two-player games, is PPAD-complete, so it is hard on average under sub-exponential LWE — [[DGP09 - The complexity of computing a Nash equilibrium|DGP09]], [[CDT09 - Settling the complexity of computing two-player Nash equilibria|CDT09]].
