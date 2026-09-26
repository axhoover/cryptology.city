---
type: reduction
status: draft
title: "QIP = IP"
aliases: []
id: red-qip-to-ip
kind: equivalence
hypotheses: [qip]
conclusion: ip
class: free
model: quantum
source:
  - "[[JJUW10 - QIP = PSPACE|JJUW10]]"
  - "[[Sha90 - IP = PSPACE|Sha90]]"
security-loss: ""
---

# QIP = IP

[[quantum-interactive-proofs|QIP]] is equal to [[interactive-proof-systems|IP]].

## Statement

$\classQIP = \classIP$. $\classIP \subseteq \classQIP$ is immediate, a classical interactive proof being a quantum one; the converse composes $\classQIP \subseteq \classPSPACE$ — [[JJUW10 - QIP = PSPACE|JJUW10]] — with $\classPSPACE \subseteq \classIP$ — [[Sha90 - IP = PSPACE|Sha90]].

## Notes

`class: free`: Proven complexity-class equality; the reduction-class axis does not discriminate here (repo convention for containments).

`model: quantum`: Kept as migrated; wiki convention for results about quantum classes.
