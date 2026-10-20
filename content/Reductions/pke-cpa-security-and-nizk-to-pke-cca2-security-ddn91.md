---
type: reduction
status: draft
title: CPA-secure PKE + NIZK ⇒ CCA2-secure PKE (DDN, Sahai)
aliases: []
id: red-pke-cpa-security-and-nizk-to-pke-cca2-security-ddn91
kind: implication
hypotheses: [pke-cpa-security, nizk]
conclusion: pke-cca2-security
class: free
model: standard
source:
  - "[[DDN91 - Non-Malleable Cryptography (Extended Abstract)|DDN91]]"
  - "[[Sah99 - Non-Malleable Non-Interactive Zero Knowledge and Adaptive Chosen-Ciphertext Security|Sah99]]"
security-loss: "polynomial"
rationale:
  class: "The proof system proves an NP statement about the encryption algorithm's circuit, so the construction uses the scheme's code."
---

# CPA-secure PKE + NIZK ⇒ CCA2-secure PKE (DDN, Sahai)

## Statement

An [[public-key-encryption#cpa-security|IND-CPA-secure]] [[public-key-encryption|PKE]] scheme and an adaptively sound [[non-interactive-zero-knowledge|NIZK]] proof system for $\classNP$ yield an [[public-key-encryption#cca-security|IND-CCA2-secure]] scheme. [[DDN91 - Non-Malleable Cryptography (Extended Abstract)|DDN91]] construct a scheme that is non-malleable under adaptive chosen-ciphertext attack, a notion equivalent to IND-CCA2 — [[BDPR98 - Relations Among Notions of Security for Public-Key Encryption Schemes|BDPR98]]. [[Sah99 - Non-Malleable Non-Interactive Zero Knowledge and Adaptive Chosen-Ciphertext Security|Sah99]] builds one-time simulation-sound NIZK from any NIZK and one-way function, and shows that [[pke-cpa-security-and-nizk-to-pke-cca1-security-ny90|Naor–Yung double encryption]] with such a proof is IND-CCA2-secure.

## Sketch

In Sah99's proof, the single simulated proof in the challenge cannot be mauled: simulation soundness keeps every accepted decryption query, after the challenge as before, an encryption of one message under both keys, so the Naor–Yung hybrid goes through — [[Sah99 - Non-Malleable Non-Interactive Zero Knowledge and Adaptive Chosen-Ciphertext Security|Sah99]].

## Notes

- Both constructions use a one-way function for one-time signatures or simulation soundness; the CPA-secure scheme supplies one — [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]].
- A simpler construction uses ordinary NIZK and one-time signatures — [[Lin03 - A Simpler Construction of CCA2-Secure Public-Key Encryption under General Assumptions|Lin03]].
- Suitably enhanced trapdoor permutations give both NIZK proofs for $\classNP$ ([[tdp-to-nizk-bfm88|Doubly enhanced certified TDP ⇒ NIZK]]) and [[tdp-to-pke|PKE]], hence IND-CCA2-secure PKE — [[FLS90 - Multiple Non-Interactive Zero Knowledge Proofs Based on a Single Random String|FLS90]], [[GR13 - Enhancements of Trapdoor Permutations|GR13]].
