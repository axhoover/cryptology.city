---
type: reduction
status: draft
title: FAC ∈ PPA (under randomized reductions)
aliases: []
id: red-fac-to-ppa-jer16
kind: inclusion
hypotheses: [fac]
conclusion: ppa-randomized
class: free
model: standard
source:
  - "[[Jer16 - Integer factoring and modular square roots|Jer16]]"
security-loss: ""
---

# FAC ∈ PPA (under randomized reductions)

## Statement

[[factoring|Factoring]] reduces in randomized polynomial time to a problem in [[total-function-np#ppa|PPA]], so lies in [[total-function-np#ppa-under-randomized-reductions|PPA under randomized reductions]], and in deterministic polynomial time under the generalized Riemann hypothesis — [[Jer16 - Integer factoring and modular square roots|Jer16]]. Hardness of factoring therefore makes PPA hard on average under the corresponding reductions — folklore.

## Notes

- The same paper reduces factoring to Weak Pigeon: [[fac-to-pwpp-jer16|FAC ∈ PWPP]] — [[Jer16 - Integer factoring and modular square roots|Jer16]].
