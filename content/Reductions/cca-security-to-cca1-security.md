---
type: reduction
status: draft
title: "CCA Security ⇒ CCA1 Security"
aliases: []
id: red-cca-security-to-cca1-security
kind: implication
hypotheses: [pke-cca2-security]
conclusion: pke-cca1-security
class: fully-black-box
model: standard
source: folklore
security-loss: "tight — the adversary and its advantage are unchanged"
---

# CCA Security ⇒ CCA1 Security

[[public-key-encryption#cca-security|CCA Security]] implies [[public-key-encryption#cca1-security|CCA1 Security]].

## Statement

Every [[public-key-encryption#cca-security|CCA2]]-secure [[public-key-encryption|PKE]] scheme is [[public-key-encryption#cca1-security|CCA1]]-secure: a CCA1 adversary is a CCA2 adversary that makes no decryption queries after receiving $c^*$, so its CCA2 advantage equals its CCA1 advantage — folklore.

## Notes

`class: fully-black-box`: the construction is the identity on schemes, used only as an oracle, and the reduction runs the CCA1 adversary once, unchanged, forwarding its Phase-1 decryption queries. Fixed construction, fixed reduction.

- [[BDPR98 - Relations Among Notions of Security for Public-Key Encryption Schemes|BDPR98]] prove the implication formally and show it is strict: if any CCA1-secure scheme exists, one exists that is not CCA2-secure.
