---
type: reduction
status: draft
title: "NM-CPA ⇒ IND-CPA"
aliases: []
id: red-pke-nm-cpa-security-to-pke-cpa-security-bdpr98
kind: implication
hypotheses: [pke-nm-cpa-security]
conclusion: pke-cpa-security
class: fully-black-box
model: standard
source:
  - "[[BDPR98 - Relations Among Notions of Security for Public-Key Encryption Schemes|BDPR98]]"
security-loss: "tight — the adversary and its advantage are unchanged"
rationale:
  class: "The construction is the identity on schemes, and the fixed reduction runs the IND-CPA adversary once, unchanged, as an NM-CPA adversary with an empty decryption query."
---

# NM-CPA ⇒ IND-CPA

## Statement

Every [[public-key-encryption#non-malleability|NM-CPA-secure]] [[public-key-encryption|PKE]] scheme is [[public-key-encryption#cpa-security|IND-CPA-secure]] — [[BDPR98 - Relations Among Notions of Security for Public-Key Encryption Schemes|BDPR98]].

## Sketch

In the parallel formulation of [[BS99 - Non-malleable Encryption Equivalence between Two Notions, and an Indistinguishability-Based Characterization|BS99]], an IND-CPA adversary is an NM-CPA adversary whose decryption query is empty, with the same advantage.

## Notes

- BDPR98 prove the implication for their comparison-based definition, and the same holds under chosen-ciphertext attacks: [[public-key-encryption#nm-cca2|NM-CCA1]] security implies [[public-key-encryption#cca1-security|IND-CCA1]] security and [[public-key-encryption#nm-cca2|NM-CCA2]] security implies [[public-key-encryption#cca-security|IND-CCA2]] security ([[pke-nm-cca2-security-to-pke-cca2-security-bdpr98|NM-CCA2 ⇔ IND-CCA2]]) — [[BDPR98 - Relations Among Notions of Security for Public-Key Encryption Schemes|BDPR98]].
- The converse fails for the identity map: if an IND-CCA1-secure scheme exists, some IND-CCA1-secure, hence IND-CPA-secure, scheme is not NM-CPA-secure ([[no-pke-cca1-security-to-pke-nm-cpa-security-bdpr98|IND-CCA1 ⇏ NM-CPA]]) — [[BDPR98 - Relations Among Notions of Security for Public-Key Encryption Schemes|BDPR98]]. Another construction turns every [[public-key-encryption#perfectly-correct-cpa-secure-pke|perfectly correct]] IND-CPA-secure scheme into an NM-CPA-secure one ([[pke-cpa-security-to-pke-nm-cpa-security-psv06|IND-CPA ⇒ NM-CPA]]) — [[PSV06 - Construction of a Non-malleable Encryption Scheme from Any Semantically Secure One|PSV06]].
