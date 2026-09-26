---
type: reduction
status: draft
title: "SZK ⊆ IP"
aliases: []
id: red-szk-to-ip
kind: inclusion
hypotheses: [szk]
conclusion: ip
class: free
model: standard
source: folklore
security-loss: ""
---

# SZK ⊆ IP

[[statistical-zero-knowledge|SZK]] is contained in [[interactive-proof-systems|IP]].

## Statement

$\classSZK \subseteq \classIP$: a [[statistical-zero-knowledge|statistical zero-knowledge]] proof system is an [[interactive-proof-systems|interactive proof]] with an added simulation requirement — folklore.

## Notes

`class: free`: Unconditional containment between complexity classes; the reduction-class axis does not apply.
