---
type: reduction
status: draft
title: "iO + OWP ⇒ PPAD hardness"
aliases: []
id: red-io-and-owp-to-ppad-hardness-gps16
kind: implication
hypotheses: [io, owp]
conclusion: ppad-hardness
class: free
model: standard
source:
  - "[[GPS16 - Revisiting the Cryptographic Hardness of Finding a Nash Equilibrium|GPS16]]"
security-loss: "polynomial"
rationale:
  class: "The obfuscated circuits evaluate the one-way permutation and primitives built from it, so the construction uses their code rather than oracle access; GPS16 state no reduction notion."
  security-loss: "GPS16 need only polynomial hardness of iO and of the one-way permutation, so their reduction loses at most a polynomial factor."
---

# iO + OWP ⇒ PPAD hardness

## Statement

If polynomially secure [[indistinguishability-obfuscation|indistinguishability obfuscation]] for all polynomial-size circuits and polynomially secure [[one-way-permutation|one-way permutations]] exist, then [[total-function-np#ppad|PPAD is hard on average]]: there is an efficiently samplable distribution over End-of-Line instances such that for all efficient $\calA$, the probability that $\calA$ outputs a solution is negligible — [[GPS16 - Revisiting the Cryptographic Hardness of Finding a Nash Equilibrium|GPS16]]. No complexity leveraging is needed: the earlier construction of [[subclasses-to-hash-function|Sub-exponential OWF + iO ⇒ PPAD hardness]] assumes sub-exponentially secure iO and one-way functions — [[BPR15 - On the Cryptographic Hardness of Finding a Nash Equilibrium|BPR15]].

## Notes

- Polynomially secure compact public-key [[functional-encryption|functional encryption]] can replace iO: together with one-way permutations it also makes PPAD hard on average — [[GPS16 - Revisiting the Cryptographic Hardness of Finding a Nash Equilibrium|GPS16]].
