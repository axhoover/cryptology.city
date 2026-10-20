---
type: reduction
status: draft
title: "Sub-exponential DDH ⇒ PPAD hardness"
aliases: []
id: red-subexponential-ddh-to-ppad-hardness-klv23
kind: implication
hypotheses: [subexponential-ddh]
conclusion: ppad-hardness
class: unstated
model: standard
source:
  - "[[KLV23 - SNARGs and PPAD Hardness from the Decisional Diffie-Hellman Assumption|KLV23]]"
security-loss: ""
---

# Sub-exponential DDH ⇒ PPAD hardness

## Statement

If [[decisional-diffie-hellman#sub-exponential-ddh|DDH is sub-exponentially hard]] for some group generator (no pairing is needed), then [[total-function-np#ppad|PPAD]] contains problems that are sub-exponentially hard on average — [[KLV23 - SNARGs and PPAD Hardness from the Decisional Diffie-Hellman Assumption|KLV23]]. The proof instantiates the Fiat–Shamir transform under DDH for a variant of the sum-check protocol, using a correlation-intractable hash family, and PPAD hardness follows from the soundness of that transform by the route of [[CHKPRR19 - Finding a Nash equilibrium is no easier than breaking Fiat-Shamir|CHKPRR19]] — [[KLV23 - SNARGs and PPAD Hardness from the Decisional Diffie-Hellman Assumption|KLV23]].

## Notes

- The same technique, applied to a variant of the GKR protocol, gives unambiguous SNARGs for bounded-depth computations under sub-exponential DDH — [[KLV23 - SNARGs and PPAD Hardness from the Decisional Diffie-Hellman Assumption|KLV23]].
- PPAD hardness also follows, by the same Fiat–Shamir route, from sub-exponential LWE: [[subexponential-lwe-to-ppad-hardness-jkkz21|Sub-exponential LWE ⇒ PPAD hardness]] — [[JKKZ21 - SNARGs for bounded depth computations and PPAD hardness from sub-exponential LWE|JKKZ21]].
