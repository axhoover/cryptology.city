---
type: reduction
status: draft
title: "Hash function + iO ⇒ Deniable encryption"
aliases: []
id: red-hash-function-and-io-to-deniable-encryption-sw14
kind: implication
hypotheses: [hash-function, io]
conclusion: deniable-encryption
class: free
model: standard
source:
  - "[[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]]"
security-loss: ""
---

# Hash function + iO ⇒ Deniable encryption

[[hash-function|One-way functions]] together with [[indistinguishability-obfuscation|iO]] imply publicly (sender-)deniable [[deniable-encryption|encryption]].

## Statement

[[indistinguishability-obfuscation|iO]] for circuits and one-way functions ([[hash-function|OWF]]) yield publicly deniable — in particular sender-deniable — [[deniable-encryption|encryption]]: for any ciphertext and any message, the sender can produce randomness explaining the ciphertext as an encryption of that message, indistinguishably from the honest randomness [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]].

## Sketch

The public key is a pair of obfuscated programs built from puncturable PRFs (obtained from the OWF): Encrypt behaves normally except on a sparse hidden set of trigger inputs, where it outputs the ciphertext encoded in the trigger; Explain samples trigger randomness for any desired ciphertext–message pair. Punctured-key hybrids reduce deniability and CPA security to iO and PRF security.

## Notes

`class: free`: The punctured-programs technique applies iO to circuits containing the code of puncturable PRFs derived from the OWF, so the construction is non-black-box in the hypothesis primitives. SW14 do not place the reduction in the RTV taxonomy; `free` records the proven implication without a technique restriction.
