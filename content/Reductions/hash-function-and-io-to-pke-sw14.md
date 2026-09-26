---
type: reduction
status: draft
title: "Hash function + iO ⇒ PKE"
aliases: []
id: red-hash-function-and-io-to-pke-sw14
kind: implication
hypotheses: [hash-function, io]
conclusion: pke
class: free
model: standard
source:
  - "[[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]]"
security-loss: ""
---

# Hash function + iO ⇒ PKE

[[hash-function|Hash function]] together with [[indistinguishability-obfuscation|iO]] implies [[public-key-encryption|PKE]].

## Statement

[[indistinguishability-obfuscation|iO]] for all polynomial-size circuits together with a [[hash-function|one-way function]] implies IND-CPA-secure [[public-key-encryption|PKE]]; SW14 also give an IND-CCA-secure scheme — [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]].

## Sketch

The secret key is a puncturable PRF key $K$; the public key is an obfuscation of the program $(m, r) \mapsto (t, F(K, t) \oplus m)$ with $t = \PRG(r)$. The proof replaces $t^*$ by a uniform string, which lies outside the PRG's image with overwhelming probability, punctures $K$ at $t^*$ — the punctured program agrees with the original on every input, so iO hides the switch — and applies pseudorandomness at the punctured point.

## Notes

`class: free`: The construction hands iO a circuit containing the code of a puncturable PRF and PRG built from the one-way function, so it is not black-box in the OWF hypothesis; iO itself is applied only to circuits. SW14 do not place the reduction in the RTV04 hierarchy, so the broadest class is recorded.
