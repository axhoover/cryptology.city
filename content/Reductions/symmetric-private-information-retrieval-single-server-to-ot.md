---
type: reduction
status: draft
title: "Symmetric private information retrieval (Single-server) ⇔ OT"
aliases: []
id: red-symmetric-private-information-retrieval-single-server-to-ot
kind: implication
hypotheses: [single-server-symmetric-pir]
conclusion: ot
class: fully-black-box
model: standard
source: folklore
security-loss: ""
---

# Symmetric private information retrieval (Single-server) ⇔ OT

[[single-server-private-information-retrieval#symmetric-private-information-retrieval-single-server|Symmetric private information retrieval (Single-server)]] implies [[oblivious-transfer|OT]].

## Statement

Single-server [[single-server-private-information-retrieval#symmetric-private-information-retrieval-single-server|symmetric PIR]] implies [[oblivious-transfer|OT]]: an SPIR protocol on database $(x_1, \dots, x_n)$ with query index $c$ is a [[oblivious-transfer#k-out-of-n-ot|$1$-out-of-$n$ OT]], with client privacy as receiver privacy and data privacy as sender privacy, and $n = 2$ gives $1$-out-of-$2$ OT — folklore. The converse is not known: SPIR is $1$-out-of-$n$ OT with communication sublinear in $n$, no construction of sublinear-communication PIR from OT alone is known, and [[NP99 - Oblivious transfer and polynomial evaluation|NP99]] obtain SPIR from PIR plus $\log n$ OTs.

## Notes

`class: fully-black-box`: The construction is the identity, so it uses the SPIR protocol only as an oracle, and each security reduction runs the OT adversary unchanged, as an oracle, against the corresponding SPIR property.

- Any single-server [[single-server-private-information-retrieval|PIR]] becomes SPIR with $\log n$ additional invocations of $1$-out-of-$2$ OT — [[NP99 - Oblivious transfer and polynomial evaluation|NP99]].
- Non-trivial single-server PIR, without data privacy, implies OT and converts communication-efficiently into $1$-out-of-$n$ OT (SPIR) — [[DMO00 - Single Database Private Information Retrieval Implies Oblivious Transfer|DMO00]].
