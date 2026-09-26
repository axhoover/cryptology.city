---
type: reduction
status: draft
title: "QIP = PSPACE"
aliases: []
id: red-qip-to-pspace
kind: equivalence
hypotheses: [qip]
conclusion: pspace
class: free
model: quantum
source:
  - "[[JJUW10 - QIP = PSPACE|JJUW10]]"
  - "[[Sha90 - IP = PSPACE|Sha90]]"
security-loss: ""
---

# QIP = PSPACE

[[quantum-interactive-proofs|QIP]] is equal to [[polynomial-space|PSPACE]].

## Statement

$\classQIP = \classPSPACE$ — [[JJUW10 - QIP = PSPACE|JJUW10]]. For $\classQIP \subseteq \classPSPACE$, the maximum acceptance probability of a (three-message) quantum interactive proof is the value of a semidefinite program, which a polynomial-space parallel implementation of the matrix multiplicative weights update method approximates to within the completeness–soundness gap; $\classPSPACE \subseteq \classQIP$ follows from $\classPSPACE \subseteq \classIP$ — [[Sha90 - IP = PSPACE|Sha90]] — and $\classIP \subseteq \classQIP$.

## Notes

`class: free`: Proven complexity-class equality; the reduction-class axis does not discriminate here (repo convention for containments).

`model: quantum`: Kept as migrated; wiki convention for results about quantum classes.
