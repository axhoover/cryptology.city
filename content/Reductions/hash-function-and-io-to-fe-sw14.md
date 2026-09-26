---
type: reduction
status: draft
title: "Hash function + iO ⇒ FE"
aliases: []
id: red-hash-function-and-io-to-fe-sw14
kind: implication
hypotheses: [hash-function, io]
conclusion: functional-encryption
class: free
model: standard
source:
  - "[[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]]"
  - "[[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]]"
security-loss: ""
---

# Hash function + iO ⇒ FE

[[hash-function|Hash function]] together with [[indistinguishability-obfuscation|iO]] implies selectively secure [[functional-encryption|FE]] for all circuits.

## Statement

[[indistinguishability-obfuscation|iO]] for all polynomial-size circuits together with a [[hash-function|one-way function]] implies selectively secure (indistinguishability-based) [[functional-encryption|functional encryption]] for all polynomial-size circuits: [[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]] build FE from iO, [[public-key-encryption|PKE]], and statistically simulation-sound [[non-interactive-zero-knowledge|NIZK]], and [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]] build the latter two from iO and one-way functions.

## Sketch

A ciphertext is two PKE encryptions of $m$ with a statistically simulation-sound NIZK proof that both components encrypt the same message; the functional key for $f$ is an obfuscation of the program that verifies the proof, decrypts one component, and outputs $f(m)$. Security is a Naor–Yung-style hybrid in which iO switches the component the functional key decrypts.

## Notes

`class: free`: The construction hands iO circuits containing the code of a puncturable PRF built from the one-way function (in the SW14 components) and of the decryption and proof-verification algorithms, so it is not black-box in the OWF hypothesis; iO itself is applied only to circuits. Neither paper places the reduction in the RTV04 hierarchy, so the broadest class is recorded.
