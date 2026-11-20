---
type: reduction
status: draft
title: CPA-secure PKE + NIZK ⇒ CCA1-secure PKE (Naor–Yung)
aliases:
  - Naor–Yung double encryption
id: red-pke-cpa-security-and-nizk-to-pke-cca1-security-ny90
kind: implication
hypotheses: [perfectly-correct-pke-cpa-security, adaptive-zk-nizk-for-np]
conclusion: pke-cca1-security
class: free
model: standard
source:
  - "[[NY90 - Public-key Cryptosystems Provably Secure against Chosen Ciphertext Attacks|NY90]]"
security-loss: "additive: twice the CPA advantage plus the NIZK zero-knowledge and soundness advantages"
rationale:
  class: "The proof system proves an NP statement about the encryption algorithm's circuit, so the construction uses the scheme's code."
---

# CPA-secure PKE + NIZK ⇒ CCA1-secure PKE (Naor–Yung)

## Statement

A [[public-key-encryption#perfectly-correct-cpa-secure-pke|perfectly correct]] [[public-key-encryption#cpa-security|IND-CPA-secure]] [[public-key-encryption|PKE]] scheme and an adaptively sound, [[non-interactive-zero-knowledge#adaptively-zero-knowledge-nizk-for-np|adaptively zero-knowledge]] [[non-interactive-zero-knowledge|NIZK]] proof system for $\classNP$ yield an [[public-key-encryption#cca1-security|IND-CCA1-secure]] scheme — [[NY90 - Public-key Cryptosystems Provably Secure against Chosen Ciphertext Attacks|NY90]]. The construction runs on the [[public-key-encryption#perfectly-correct-cpa-secure-pke|key-independent message space]] $\bits$ that every such scheme yields. The public key is two independent public keys $\pk_0, \pk_1$ and a common random string $\sigma$; a ciphertext is $(c_0, c_1, \pi)$ with $c_i \gets \Enc(\pk_i, m)$ for $i \in \bits$ and $\pi$ a NIZK proof under $\sigma$ that $c_0$ and $c_1$ encrypt the same message; decryption verifies $\pi$ and decrypts $c_0$. On an honest ciphertext, $\pi$ verifies by perfect completeness of the NIZK and $c_0$ decrypts to $m$ by perfect correctness, so the scheme is perfectly correct with message space $\bits$ — standard. The challenge statement, that $c_0$ and $c_1$ encrypt one message $m_b$, is chosen after $\sigma$, since the adversary picks $m_0, m_1$ after seeing the public key; zero knowledge is therefore needed for statements chosen after the reference string — standard.

## Sketch

The hybrids simulate the challenge proof, switch $c_1$ from $m_0$ to $m_1$ by a reduction to the CPA security of $\pk_1$ that knows $\sk_0$, and switch $c_0$ symmetrically with $\sk_1$. Decrypting with either key answers a query correctly unless its proof is accepted and its two ciphertexts encrypt different messages; this event is negligible under a real common string by soundness, and, being checkable with both keys, stays negligible under a simulated one by zero knowledge. Only the challenge proof is simulated, so single-theorem zero knowledge for a statement chosen after $\sigma$ suffices, and every decryption query precedes it, so plain soundness suffices — [[NY90 - Public-key Cryptosystems Provably Secure against Chosen Ciphertext Attacks|NY90]].

## Notes

- After the challenge, an adversary could maul the simulated proof into an accepted proof of a false statement; ruling this out takes one-time simulation soundness and gives [[pke-cpa-security-and-nizk-to-pke-cca2-security-ddn91|IND-CCA2 security]] — [[Sah99 - Non-Malleable Non-Interactive Zero Knowledge and Adaptive Chosen-Ciphertext Security|Sah99]].
- Efficiency: the ciphertext carries a NIZK proof for an $\classNP$ statement about the encryption circuit, so the construction is a feasibility result — standard.
