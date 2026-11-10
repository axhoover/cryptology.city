---
type: reduction
status: draft
title: "iO + PKE + SS-NIZK ⇒ FE"
aliases: []
id: red-io-and-perfectly-correct-pke-cpa-security-and-simulation-sound-nizk-to-fe-selective-security-gghrsw13
kind: implication
hypotheses:
  [io, perfectly-correct-pke-cpa-security, statistically-simulation-sound-nizk]
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

[[indistinguishability-obfuscation|iO]] for all polynomial-size circuits, a [[public-key-encryption#perfectly-correct-cpa-secure-pke|perfectly correct]] [[public-key-encryption#cpa-security|IND-CPA-secure]] [[public-key-encryption|PKE]] scheme and a [[non-interactive-zero-knowledge#statistically-simulation-sound-nizk-sss-nizk|statistically simulation-sound NIZK]] proof system for $\classNP$, sound against computationally unbounded provers that see one simulated proof, imply a selectively secure, indistinguishability-based [[functional-encryption|functional encryption]] scheme for all polynomial-size circuits: for all efficient $\calA$ that announce $(m_0, m_1)$ with $|m_0| = |m_1|$ before seeing the public parameters and request functional keys only for circuits $f$ with $f(m_0) = f(m_1)$, the advantage in distinguishing an encryption of $m_0$ from one of $m_1$ is negligible — [[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]].

## Sketch

A ciphertext is two PKE encryptions of $m$ under independent keys with a NIZK proof that both encrypt the same message, and the functional key for $f$ obfuscates the program that verifies the proof, decrypts the first component and outputs $f(m)$. The hybrids simulate the reference string and the challenge proof for the challenge statement, which the selective adversary fixes before the public parameters, switch the second component to an encryption of $m_1$, and switch each key by iO to a program that decrypts the second component; the same steps with the roles of the components exchanged then reach the real encryption of $m_1$. The two programs agree on every input with all but negligible probability over the simulated reference string: by statistical simulation soundness no false statement other than the challenge statement has an accepting proof, by perfect correctness the two components of a true statement decrypt to the same message, and on the challenge statement both output $f(m_0) = f(m_1)$.
