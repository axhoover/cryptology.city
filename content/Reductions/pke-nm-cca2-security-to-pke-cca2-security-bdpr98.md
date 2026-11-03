---
type: reduction
status: draft
title: "NM-CCA2 ⇔ IND-CCA2"
aliases: []
id: red-pke-nm-cca2-security-to-pke-cca2-security-bdpr98
kind: equivalence
hypotheses: [pke-nm-cca2-security]
conclusion: pke-cca2-security
class: fully-black-box
model: standard
source:
  - "[[BDPR98 - Relations Among Notions of Security for Public-Key Encryption Schemes|BDPR98]]"
security-loss: "tight — the adversary and its advantage are unchanged"
rationale:
  class: "Both directions keep the scheme unchanged, and each fixed reduction runs the given adversary once as an oracle, forwarding its decryption queries."
---

# NM-CCA2 ⇔ IND-CCA2

## Statement

A [[public-key-encryption|PKE]] scheme is [[public-key-encryption#nm-cca2|NM-CCA2-secure]] if and only if it is [[public-key-encryption#cca-security|IND-CCA2-secure]] — [[BDPR98 - Relations Among Notions of Security for Public-Key Encryption Schemes|BDPR98]].

## Sketch

In the parallel formulation of [[BS99 - Non-malleable Encryption Equivalence between Two Notions, and an Indistinguishability-Based Characterization|BS99]], an IND-CCA2 adversary is an NM-CCA2 adversary with an empty parallel query. Conversely, an IND-CCA2 reduction answers the parallel query of an NM-CCA2 adversary, which omits $c^*$, one ciphertext at a time with its own decryption oracle.

## Notes

- BDPR98 prove the equivalence for their comparison-based definition, where the direction from IND-CCA2 security is the substantive one — [[BDPR98 - Relations Among Notions of Security for Public-Key Encryption Schemes|BDPR98]].
- Without decryption queries after the challenge the notions separate: [[no-pke-cca1-security-to-pke-nm-cpa-security-bdpr98|IND-CCA1 ⇏ NM-CPA]] and [[no-pke-nm-cpa-security-to-pke-cca1-security-bdpr98|NM-CPA ⇏ IND-CCA1]] — [[BDPR98 - Relations Among Notions of Security for Public-Key Encryption Schemes|BDPR98]].
- The scheme that DDN91 build from an IND-CPA-secure scheme and NIZK proofs is NM-CCA2-secure ([[pke-cpa-security-and-nizk-to-pke-cca2-security-ddn91|CPA-secure PKE + NIZK ⇒ CCA2-secure PKE]]) — [[DDN91 - Non-Malleable Cryptography (Extended Abstract)|DDN91]].
