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

If [[learning-with-errors#sub-exponential-lwe|LWE is sub-exponentially hard]], then [[total-function-np#ppad|PPAD]] contains problems that are hard on average — [[JKKZ21 - SNARGs for bounded depth computations and PPAD hardness from sub-exponential LWE|JKKZ21]]. The proof instantiates the Fiat–Shamir transform for the sum-check protocol with a lossy correlation-intractable hash family and plugs it into the reduction of [[CHKPRR19 - Finding a Nash equilibrium is no easier than breaking Fiat-Shamir|CHKPRR19]] from Fiat–Shamir soundness to PPAD hardness — [[JKKZ21 - SNARGs for bounded depth computations and PPAD hardness from sub-exponential LWE|JKKZ21]].

## Notes

- PPAD hardness also follows from sub-exponentially secure indistinguishability obfuscation and one-way functions: [[subclasses-to-hash-function|OWF + iO ⇒ PPAD hardness]] — [[BPR15 - On the Cryptographic Hardness of Finding a Nash Equilibrium|BPR15]]. Finding a Nash equilibrium, even in two-player games, is PPAD-complete, so it is hard on average under sub-exponential LWE — [[DGP09 - The complexity of computing a Nash equilibrium|DGP09]], [[CDT09 - Settling the complexity of computing two-player Nash equilibria|CDT09]].
