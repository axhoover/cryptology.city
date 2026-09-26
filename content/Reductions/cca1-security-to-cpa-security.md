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
---

# CCA1 Security ⇒ CPA Security

[[public-key-encryption#cca1-security|CCA1 security]] implies [[public-key-encryption#cpa-security|CPA security]].

## Statement

Every [[public-key-encryption#cca1-security|CCA1]]-secure [[public-key-encryption|PKE]] scheme is [[public-key-encryption#cpa-security|CPA]]-secure: a CPA adversary is a CCA1 adversary that makes no decryption queries, so its CPA and CCA1 advantages against the same scheme coincide — folklore.

## Notes

`class: fully-black-box`: the construction is the identity (the scheme is used unchanged, as an oracle), and the reduction runs any CPA adversary unchanged as a CCA1 adversary that never queries the decryption oracle. Fixed construction, fixed reduction.
