---
type: barrier
status: draft
title: "No shielding black-box reduction from CPA-secure PKE to CCA-secure PKE"
aliases: []
id: bar-pke-cpa-security-to-pke-cca2-security-gmm07
hypotheses: [pke-cpa-security]
conclusion: pke-cca2-security
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source:
  - "[[GMM07 - Towards a Separation of Semantic and CCA Security for Public Key Encryption|GMM07]]"
rationale:
  class: "GMM07 rule out shielding black-box constructions, whose decryption algorithm never calls the underlying encryption algorithm, and the vocabulary has no class for that restriction."
---

# No shielding black-box reduction from CPA-secure PKE to CCA-secure PKE

## Statement

There is no black-box construction of an [[public-key-encryption#cca-security|IND-CCA2-secure]] [[public-key-encryption|PKE]] scheme from an [[public-key-encryption#cpa-security|IND-CPA-secure]] one in which the new decryption algorithm does not call the old encryption algorithm, a restriction called shielding — [[GMM07 - Towards a Separation of Semantic and CCA Security for Public Key Encryption|GMM07]].

## Notes

- Non-shielding black-box constructions remain possible: one-bit IND-CCA2-secure encryption yields multi-bit IND-CCA2-secure encryption by a construction whose decryption re-encrypts — [[MS09 - Bit Encryption Is Complete|MS09]].
- Bounded-query chosen-ciphertext security, against a fixed polynomial number of decryption queries, does follow from IND-CPA security by a black-box construction — [[CHH+07 - Bounded CCA2-Secure Encryption|CHH+07]].
- Non-black-box constructions from CPA-secure PKE and NIZK proofs exist: [[pke-cpa-security-and-nizk-to-pke-cca2-security-ddn91|DDN91, Sah99]] — [[Sah99 - Non-Malleable Non-Interactive Zero Knowledge and Adaptive Chosen-Ciphertext Security|Sah99]].
- Whether IND-CPA-secure PKE alone yields IND-CCA1 or IND-CCA2 security by any construction is open — standard.
