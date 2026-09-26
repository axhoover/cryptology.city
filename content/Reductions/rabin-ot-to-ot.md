---
type: reduction
status: draft
title: "Rabin OT ⇔ OT"
aliases: []
id: red-rabin-ot-to-ot
kind: equivalence
hypotheses: [rabin-ot]
conclusion: ot
class: fully-black-box
model: standard
source:
  - "[[Cre87 - Equivalence Between Two Flavours of Oblivious Transfers|Cre87]]"
security-loss: ""
---

# Rabin OT ⇔ OT

[[oblivious-transfer#rabin-ot|Rabin OT]] is equivalent to 1-out-of-2 [[oblivious-transfer|OT]] on bits.

## Statement

[[oblivious-transfer#rabin-ot|Rabin OT]] and 1-out-of-2 [[oblivious-transfer|OT]] on bits are equivalent: each is realized from the other by an information-theoretically secure protocol making polynomially many calls; the nontrivial direction builds $\binom{2}{1}$-OT from $3n$ Rabin OTs — [[Cre87 - Equivalence Between Two Flavours of Oblivious Transfers|Cre87]].

## Sketch

The sender sends $3n$ uniform bits $r_i$ through Rabin OT; the receiver, who learns about half, announces disjoint index sets $I_0, I_1$ of size $n$ with $I_c$ fully received, and the sender replies with $x_j \oplus \bigoplus_{i \in I_j} r_i$ for $j = 0, 1$. The receiver unmasks $x_c$; except with exponentially small probability it receives fewer than $2n$ of the $3n$ bits, so some set contains a lost bit and the corresponding $x_j$ stays perfectly masked. The sender cannot tell which set was fully received. Conversely, the sender places $x$ in a uniformly chosen slot of one $\binom{2}{1}$-OT with the other slot uniform and afterwards reveals the slot; the receiver's uniform choice hits it with probability exactly $1/2$, and receiver privacy hides the outcome from the sender.

## Notes

`class: fully-black-box`: each direction calls the given OT only as a subprotocol on locally chosen inputs, and its security is information-theoretic given ideal calls, so the composition argument uses the adversary only as a black box.
