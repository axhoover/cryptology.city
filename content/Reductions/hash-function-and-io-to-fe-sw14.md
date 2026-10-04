---
type: reduction
status: draft
title: "OWF + iO ⇒ FE"
aliases: []
id: red-hash-function-and-io-to-fe-sw14
kind: implication
hypotheses: [owf, io]
conclusion: functional-encryption
class: free
model: standard
source:
  - "[[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]]"
  - "[[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]]"
security-loss: ""
rationale:
  class: "iO is applied to circuits containing the code of the decryption and proof-verification algorithms and, in the SW14 components, of a puncturable PRF built from the one-way function, so the construction is not black-box in the one-way function."
---

# OWF + iO ⇒ FE

## Statement

If [[indistinguishability-obfuscation|iO]] for all polynomial-size circuits and a [[hash-function#preimage-resistance-one-wayness|one-way function]] exist, there is a selectively secure, indistinguishability-based [[functional-encryption|functional encryption]] scheme for all polynomial-size circuits: for all efficient $\calA$ that announce $(m_0, m_1)$ before seeing the public parameters and request functional keys only for circuits $f$ with $f(m_0) = f(m_1)$, the advantage in distinguishing an encryption of $m_0$ from one of $m_1$ is negligible. [[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]] build the scheme from iO, [[public-key-encryption|PKE]] and a statistically [[non-interactive-zero-knowledge#simulation-sound-nizk-ss-nizk|simulation-sound NIZK]], and [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]] build the latter two from iO and one-way functions.

## Sketch

A ciphertext is two PKE encryptions of $m$ with a statistically simulation-sound NIZK proof that both encrypt the same message, and the functional key for $f$ obfuscates the program that verifies the proof, decrypts one component and outputs $f(m)$. Security is a Naor–Yung-style hybrid in which iO switches the component the functional key decrypts, the two programs being functionally equivalent by statistical simulation soundness and $f(m_0) = f(m_1)$.
