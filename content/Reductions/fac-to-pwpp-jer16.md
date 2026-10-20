---
type: reduction
status: draft
title: FAC ∈ PWPP (under randomized reductions)
aliases: []
id: red-fac-to-pwpp-jer16
kind: inclusion
hypotheses: [fac]
conclusion: pwpp-randomized
class: free
model: standard
source:
  - "[[Jer16 - Integer factoring and modular square roots|Jer16]]"
security-loss: ""
---

# FAC ∈ PWPP (under randomized reductions)

## Statement

[[factoring|Factoring]] reduces in randomized polynomial time to Weak Pigeon, the complete problem of [[total-function-np#pwpp|PWPP]], so lies in [[total-function-np#pwpp-under-randomized-reductions|PWPP under randomized reductions]], and in deterministic polynomial time under the generalized Riemann hypothesis — [[Jer16 - Integer factoring and modular square roots|Jer16]].

## Notes

- PWPP is contained in [[total-function-np#ppp|PPP]] ([[pwpp-to-ppp|PWPP ⊆ PPP]]), and the discrete logarithm, in a suitable total formulation, is PWPP-complete ([[dlog-to-pwpp-hv21|DLOG ∈ PWPP]]) — [[HV21 - On Search Complexity of Discrete Logarithm|HV21]].
