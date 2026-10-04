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
rationale:
  class: "Each direction calls the given OT only as a subprotocol on locally chosen inputs, and its security is information-theoretic given ideal calls, so the simulators use the adversary only as a black box."
---

# Rabin OT ⇔ OT

## Statement

[[oblivious-transfer#rabin-ot|Rabin OT]] and 1-out-of-2 [[oblivious-transfer|OT]] on bits are equivalent: each is realized from the other by an information-theoretically secure protocol making polynomially many calls, and the nontrivial direction builds 1-out-of-2 OT from $3n$ Rabin OTs — [[Cre87 - Equivalence Between Two Flavours of Oblivious Transfers|Cre87]].

## Sketch

The sender sends $3n$ uniform bits $r_i$ by Rabin OT; the receiver announces disjoint sets $I_0, I_1$ of size $n$ with $I_c$ fully received, and the sender replies $x_j \oplus \bigoplus_{i \in I_j} r_i$ for $j \in \bits$. Except with probability exponentially small in $n$ the receiver gets fewer than $2n$ bits, so one of $I_0, I_1$ contains a lost bit and the corresponding $x_j$ stays perfectly masked, while the sender cannot tell which set was fully received. Conversely, the sender puts $x$ in a uniform slot $s$ of one 1-out-of-2 OT, the other slot uniform, and then reveals $s$: the receiver's uniform choice hits $s$ with probability exactly $1/2$, and receiver privacy hides whether it did.
