---
type: reduction
status: draft
title: "Symmetric private information retrieval (Single-server) ⇒ OT"
aliases: []
id: red-symmetric-private-information-retrieval-single-server-to-ot
kind: implication
hypotheses: [single-server-symmetric-pir]
conclusion: ot
class: fully-black-box
model: standard
source: folklore
security-loss: ""
rationale:
  class: "The construction is the identity on SPIR protocols, and each security reduction runs the OT adversary unchanged, as an oracle, against the corresponding SPIR property."
---

# Symmetric private information retrieval (Single-server) ⇒ OT

## Statement

Single-server [[single-server-private-information-retrieval#symmetric-private-information-retrieval-single-server|symmetric PIR]] implies [[oblivious-transfer|OT]]: an SPIR protocol on database $(x_1, \dots, x_n)$ with query index $c$ is a $1$-out-of-$n$ [[oblivious-transfer#k-out-of-n-ot|OT]], with client privacy as receiver privacy and data privacy as sender privacy, and $n = 2$ gives $1$-out-of-$2$ OT — folklore.

## Sketch

With $\pp \gets \Setup(1^\secpar, 1^n)$, the sender runs the server on database $(x_1, \dots, x_n)$ and the receiver runs the client on index $c$, so SPIR correctness is OT correctness. The sender's view is computable from $\pp$, the query and the database the adversary chose, so an adversary against the semi-honest [[oblivious-transfer#receiver-privacy|receiver-privacy]] game is a [[single-server-private-information-retrieval#query-privacy|query-privacy]] adversary with the same advantage; the two admissible sender inputs of the semi-honest [[oblivious-transfer#sender-privacy|sender-privacy]] game are databases that agree at index $c$, on which data privacy makes the honest client's views indistinguishable — standard.

## Notes

- The converse is not known: SPIR is $1$-out-of-$n$ OT with communication sublinear in $n$, and no construction of sublinear-communication PIR from OT alone is known — folklore.
- Any single-server [[single-server-private-information-retrieval|PIR]] becomes SPIR with $\log n$ additional invocations of $1$-out-of-$2$ OT — [[NP99 - Oblivious transfer and polynomial evaluation|NP99]].
- Non-trivial single-server PIR, without data privacy, implies OT ([[cpir-to-ot-dmo00|Non-trivial cPIR ⇒ OT]]) and converts communication-efficiently into $1$-out-of-$n$ OT (SPIR) — [[DMO00 - Single Database Private Information Retrieval Implies Oblivious Transfer|DMO00]].
