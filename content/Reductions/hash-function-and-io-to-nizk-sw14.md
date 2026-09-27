---
type: reduction
status: draft
title: "OWF + iO ⇒ NIZK"
aliases: []
id: red-hash-function-and-io-to-nizk-sw14
kind: implication
hypotheses: [owf, io]
conclusion: nizk
class: free
model: crs
source:
  - "[[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]]"
security-loss: ""
---

# OWF + iO ⇒ NIZK

[[hash-function#preimage-resistance-one-wayness|OWF]] together with [[indistinguishability-obfuscation|iO]] implies [[non-interactive-zero-knowledge|NIZK]].

## Statement

[[indistinguishability-obfuscation|iO]] for all polynomial-size circuits together with a [[hash-function#preimage-resistance-one-wayness|one-way function]] implies [[non-interactive-zero-knowledge|NIZK]] proofs for $\classNP$ in the common reference string model, the CRS consisting of obfuscated programs — [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]].

## Notes

`class: free`: The construction hands iO circuits containing the code of a puncturable PRF built from the one-way function, so it is not black-box in the OWF hypothesis; iO itself is applied only to circuits. SW14 do not place the reduction in the RTV04 hierarchy, so the broadest class is recorded.

`model: crs`: the setup publishes obfuscated programs as the CRS; with no setup, non-interactive zero knowledge exists only for languages in $\classBPP$ — [[GO94 - Definitions and Properties of Zero-Knowledge Proof Systems|GO94]].
