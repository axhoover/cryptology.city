---
type: reduction
status: draft
title: "OWF + iO ⇒ PKE"
aliases: []
id: red-hash-function-and-io-to-pke-sw14
kind: implication
hypotheses: [owf, io]
conclusion: pke
class: free
model: standard
source:
  - "[[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]]"
security-loss: ""
rationale:
  class: "The construction obfuscates a circuit containing the code of a puncturable PRF and a PRG built from the one-way function, so it is not black-box in the OWF, and SW14 state no reduction notion."
---

# OWF + iO ⇒ PKE

## Statement

[[indistinguishability-obfuscation|iO]] for all polynomial-size circuits together with a [[hash-function#preimage-resistance-one-wayness|one-way function]] implies [[public-key-encryption#cpa-security|IND-CPA-secure]] [[public-key-encryption|PKE]] — [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]].

## Sketch

The secret key is a puncturable PRF key $K$; the public key is an obfuscation of the program $(m, r) \mapsto (t, F(K, t) \oplus m)$ with $t = \PRG(r)$. The proof replaces $t^*$ by a uniform string, which lies outside the PRG's image with overwhelming probability, punctures $K$ at $t^*$ — the punctured program agrees with the original on every input, so iO hides the switch — and applies pseudorandomness at the punctured point.

## Notes

- The same punctured-programs technique also gives [[public-key-encryption#cca-security|IND-CCA-secure]] PKE — [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]].
