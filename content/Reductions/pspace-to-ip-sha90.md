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

## Statement

[[polynomial-space|PSPACE]] $\subseteq$ [[interactive-proof-systems|IP]]: the $\classPSPACE$-complete language TQBF of true quantified Boolean formulas has an interactive proof — [[Sha90 - IP = PSPACE|Sha90]].

## Sketch

Arithmetize the quantified formula over a large finite field and run a sum-check-style protocol, with degree reduction keeping each univariate polynomial the prover sends of low degree.

## Notes

- The converse [[ip-to-pspace-ccg-94|IP ⊆ PSPACE]] is folklore, so $\classIP = \classPSPACE$ — [[Sha90 - IP = PSPACE|Sha90]].
- The precursor $\classP^{\classsharpP} \subseteq \classIP$, by arithmetization and the sum-check protocol — [[LFKN90 - Algebraic Methods for Interactive Proof Systems|LFKN90]].
