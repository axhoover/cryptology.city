---
type: reduction
status: draft
title: CPA-secure PKE + NIZK ⇒ CCA1-secure PKE (Naor–Yung)
aliases:
  - Naor–Yung double encryption
id: red-pke-cpa-security-and-nizk-to-pke-cca1-security-ny90
kind: implication
hypotheses: [pke-cpa-security, nizk]
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

An [[public-key-encryption#cpa-security|IND-CPA-secure]] [[public-key-encryption|PKE]] scheme and a [[non-interactive-zero-knowledge|NIZK]] proof system for $\classNP$ yield an [[public-key-encryption#cca1-security|IND-CCA1-secure]] scheme — [[NY90 - Public-key Cryptosystems Provably Secure against Chosen Ciphertext Attacks|NY90]]. The public key is two independent public keys $\pk_0, \pk_1$ and a common random string $\sigma$; a ciphertext is $(c_0, c_1, \pi)$ with $c_b \gets \Enc(\pk_b, m)$ and $\pi$ a NIZK proof under $\sigma$ that $c_0$ and $c_1$ encrypt the same message; decryption verifies $\pi$ and decrypts $c_0$.

## Sketch

The hybrids simulate the challenge proof, switch $c_1$ from $m_0$ to $m_1$ by a reduction to the CPA security of $\pk_1$ that knows $\sk_0$, and switch $c_0$ symmetrically with $\sk_1$. Decrypting with either key answers a query correctly unless its proof is accepted and its two ciphertexts encrypt different messages; this event is negligible under a real common string by soundness, and, being checkable with both keys, stays negligible under a simulated one by zero knowledge. All decryption queries precede the single simulated proof, so single-theorem zero knowledge suffices — [[NY90 - Public-key Cryptosystems Provably Secure against Chosen Ciphertext Attacks|NY90]].

## Notes

- After the challenge, an adversary could submit queries whose proofs reuse the simulated proof; ruling this out takes simulation soundness and gives [[pke-cpa-security-and-nizk-to-pke-cca2-security-ddn91|IND-CCA2 security]] — [[Sah99 - Non-Malleable Non-Interactive Zero Knowledge and Adaptive Chosen-Ciphertext Security|Sah99]].
- Efficiency: the ciphertext carries a NIZK proof for an $\classNP$ statement about the encryption circuit, so the construction is a feasibility result — standard.
