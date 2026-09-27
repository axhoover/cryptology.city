---
type: reduction
status: draft
title: "PSPACE ⊆ IP"
aliases: []
id: red-pspace-to-ip-sha90
kind: inclusion
hypotheses: [pspace]
conclusion: ip
class: free
model: standard
source:
  - "[[Sha90 - IP = PSPACE|Sha90]]"
security-loss: ""
---

# PSPACE ⊆ IP

[[polynomial-space|PSPACE]] is contained in [[interactive-proof-systems|IP]].

## Statement

$\classPSPACE \subseteq \classIP$: TQBF has an interactive proof, by arithmetizing the quantified formula and running a sum-check-style protocol with degree reduction — [[Sha90 - IP = PSPACE|Sha90]].

## Notes

`class: free`: an unconditional containment between complexity classes; the reduction-class axis does not apply.

- The precursor $\classP^{\classsharpP} \subseteq \classIP$, by arithmetization and the sum-check protocol — [[LFKN90 - Algebraic Methods for Interactive Proof Systems|LFKN90]]
