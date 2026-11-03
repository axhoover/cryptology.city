---
type: reduction
status: draft
title: "OWF + iO ⇒ FE"
aliases: []
id: red-owf-and-io-to-fe-wat15
kind: implication
hypotheses: [owf, io]
conclusion: functional-encryption
class: free
model: standard
source:
  - "[[Wat15 - A Punctured Programming Approach to Adaptively Secure Functional Encryption|Wat15]]"
security-loss: "polynomial, without complexity leveraging"
rationale:
  class: "iO is applied to circuits containing the code of puncturable PRFs and other components built from the one-way function, so the construction is not black-box in it."
---

# OWF + iO ⇒ FE

## Statement

[[indistinguishability-obfuscation|iO]] for all polynomial-size circuits together with a [[hash-function#preimage-resistance-one-wayness|one-way function]] implies an [[functional-encryption#indistinguishability-based-security|IND-secure]] (adaptively secure) [[functional-encryption|functional encryption]] scheme for all polynomial-size circuits, with a polynomial security loss and no complexity leveraging; outside the obfuscated programs the construction uses only primitives built from pseudorandom generators — [[Wat15 - A Punctured Programming Approach to Adaptively Secure Functional Encryption|Wat15]].

## Notes

- Selectively IND-secure FE from iO, a perfectly correct IND-CPA-secure PKE and a statistically simulation-sound NIZK was given earlier ([[hash-function-and-io-to-fe-sw14|iO + PKE + SS-NIZK ⇒ FE]]) — [[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]].
