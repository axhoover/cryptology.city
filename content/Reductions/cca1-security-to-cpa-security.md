---
type: reduction
status: draft
title: "CCA1 Security ⇒ CPA Security"
aliases: []
id: red-cca1-security-to-cpa-security
kind: implication
hypotheses: [pke-cca1-security]
conclusion: pke-cpa-security
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: the adversary and its advantage are unchanged"
rationale:
  class: "The construction is the identity on schemes, and the fixed reduction runs any CPA adversary unchanged as a CCA1 adversary that makes no decryption queries."
---

# CCA1 Security ⇒ CPA Security

## Statement

Every [[public-key-encryption#cca1-security|CCA1]]-secure [[public-key-encryption|PKE]] scheme is [[public-key-encryption#cpa-security|CPA]]-secure: a CPA adversary is a CCA1 adversary that makes no decryption queries, so its CPA and CCA1 advantages against the same scheme coincide — folklore.

## Notes

- The implication is strict: if a CPA-secure scheme exists, one exists that is CPA-secure but not CCA1-secure ([[no-pke-cpa-security-to-pke-cca1-security-bdpr98|CPA ⇏ CCA1]]) — [[BDPR98 - Relations Among Notions of Security for Public-Key Encryption Schemes|BDPR98]].
