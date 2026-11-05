---
type: reduction
status: draft
title: "iO + PKE + SS-NIZK ⇒ FE"
aliases: []
id: red-io-and-perfectly-correct-pke-cpa-security-and-simulation-sound-nizk-to-fe-selective-security-gghrsw13
kind: implication
hypotheses: [io, perfectly-correct-pke-cpa-security, simulation-sound-nizk]
conclusion: fe-selective-security
class: free
model: standard
source:
  - "[[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]]"
security-loss: "polynomial: a constant number of PKE and NIZK hybrids, and one iO hybrid per functional key each time the keys switch the component they decrypt"
rationale:
  class: "iO is applied to circuits containing the code of the PKE decryption and NIZK verification algorithms, so the construction is not black-box."
  security-loss: "Each functional key is a separate obfuscated program, so switching the decryption component across all keys takes one iO step per key."
---

# iO + PKE + SS-NIZK ⇒ FE

## Statement

[[indistinguishability-obfuscation|iO]] for all polynomial-size circuits, a [[public-key-encryption#perfectly-correct-cpa-secure-pke|perfectly correct]] [[public-key-encryption#cpa-security|IND-CPA-secure]] [[public-key-encryption|PKE]] scheme and a statistically [[non-interactive-zero-knowledge#simulation-sound-nizk-ss-nizk|simulation-sound NIZK]] proof system for $\classNP$ imply a selectively secure, indistinguishability-based [[functional-encryption|functional encryption]] scheme for all polynomial-size circuits: for all efficient $\calA$ that announce $(m_0, m_1)$ with $|m_0| = |m_1|$ before seeing the public parameters and request functional keys only for circuits $f$ with $f(m_0) = f(m_1)$, the advantage in distinguishing an encryption of $m_0$ from one of $m_1$ is negligible — [[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]].

## Sketch

A ciphertext is two PKE encryptions of $m$ with a statistically simulation-sound NIZK proof that both encrypt the same message, and the functional key for $f$ obfuscates the program that verifies the proof, decrypts one component and outputs $f(m)$. Security is a Naor–Yung-style hybrid in which iO switches the component the functional key decrypts, the two programs being functionally equivalent by statistical simulation soundness and $f(m_0) = f(m_1)$.
