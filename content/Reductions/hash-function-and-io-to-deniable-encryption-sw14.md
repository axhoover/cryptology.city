---
type: reduction
status: draft
title: "OWF + iO ⇒ Deniable encryption"
aliases: []
id: red-hash-function-and-io-to-deniable-encryption-sw14
kind: implication
hypotheses: [owf, io]
conclusion: deniable-encryption
class: free
model: standard
source:
  - "[[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]]"
security-loss: ""
rationale:
  class: "The punctured-programs construction obfuscates circuits containing the code of puncturable PRFs built from the one-way function, so it uses the hypotheses non-black-box."
---

# OWF + iO ⇒ Deniable encryption

## Statement

[[indistinguishability-obfuscation|iO]] for circuits and [[hash-function#preimage-resistance-one-wayness|one-way functions]] yield CPA-secure, publicly deniable — in particular sender-deniable — [[deniable-encryption|encryption]]: for any ciphertext and any message, the sender can produce randomness explaining the ciphertext as an encryption of that message, indistinguishably from the honest randomness — [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]].
