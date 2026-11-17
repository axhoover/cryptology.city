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
  class: "Each direction calls the given OT only as a subprotocol on locally chosen inputs, and each privacy reduction runs the adversary only as an oracle, playing the other executions itself."
---

# Rabin OT ⇔ OT

## Statement

[[oblivious-transfer#rabin-ot|Rabin OT]] and 1-out-of-2 [[oblivious-transfer|OT]] on bits are equivalent: each is realized from the other by a protocol making polynomially many calls that is information-theoretically secure given ideal calls, and the nontrivial direction builds 1-out-of-2 OT from $3n$ Rabin OTs with error exponentially small in $n$ — [[Cre87 - Equivalence Between Two Flavours of Oblivious Transfers|Cre87]]. With $n = \secpar$ the error is negligible.

## Sketch

The sender sends $3n$ uniform bits $r_i$ by Rabin OT; the receiver, who gets about half of them, announces disjoint sets $I_0, I_1$ of size $n$ with $I_c$ fully received, the sender replies $x_j \oplus \bigoplus_{i \in I_j} r_i$ for $j \in \bits$, and the receiver unmasks $x_c$. Except with probability exponentially small in $n$ the receiver gets at least $n$ and fewer than $2n$ bits, so one of $I_0, I_1$ contains a lost bit and the corresponding $x_j$ stays masked, while the sender cannot tell which set was fully received. Given ideal Rabin OT the masking is perfect — [[Cre87 - Equivalence Between Two Flavours of Oblivious Transfers|Cre87]] — and with a Rabin OT protocol a hybrid over the $3n$ executions makes it computational, the reduction running the other executions itself — standard. Conversely, the sender puts $x$ in a uniform slot $s$ of one 1-out-of-2 OT, the other slot uniform, and then reveals $s$; the receiver outputs its OT output, with $\bot$ read as $0$, if its uniform choice equals $s$, and $\bot$ otherwise. Then $y = \bot$ with probability exactly $1/2$ for each $x$, OT correctness bounds $\Pr[y \notin \{x, \bot\}]$, receiver privacy hides whether the choice hit $s$, and when it did not, sender privacy hides $x$ in the unchosen slot — standard.
