---
type: reduction
status: draft
title: Non-trivial cPIR ⇒ OWF
aliases: []
id: red-cpir-to-owf-bikm99
kind: implication
hypotheses: [nontrivial-cpir]
conclusion: owf
class: unstated
model: standard
source:
  - "[[BIKM99 - One-Way Functions Are Essential for Single-Server Private Information Retrieval|BIKM99]]"
security-loss: ""
---

# Non-trivial cPIR ⇒ OWF

## Statement

If a [[single-server-private-information-retrieval#non-trivial-pir|non-trivial]] [[single-server-private-information-retrieval|single-server PIR]] scheme exists, perfectly correct and with the server sending fewer than $n$ bits on $n$-bit databases for some polynomial $n(\secpar)$, then [[hash-function#preimage-resistance-one-wayness|one-way functions]] exist — [[BIKM99 - One-Way Functions Are Essential for Single-Server Private Information Retrieval|BIKM99]].

## Notes

- Trivial PIR, in which the server sends the whole database, is perfectly private with no assumption, so the bound $n$ is where computational assumptions start — [[BIKM99 - One-Way Functions Are Essential for Single-Server Private Information Retrieval|BIKM99]].
- The known stronger consequences assume stronger communication bounds: total communication below $n$ gives [[cpir-to-ot-dmo00|OT]] — [[DMO00 - Single Database Private Information Retrieval Implies Oblivious Transfer|DMO00]] — and one-round communication $p(\secpar) \cdot n^c$ for a polynomial $p$ and a constant $c < 1$ gives [[cpir-to-crhf-iko05|collision-resistant hashing]] — [[IKO05 - Sufficient Conditions for Collision-Resistant Hashing|IKO05]].
