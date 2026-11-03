---
type: reduction
status: draft
title: "OPE ⇒ OT"
aliases: []
id: red-ope-to-ot
kind: implication
hypotheses: [ope]
conclusion: ot
class: fully-black-box
model: standard
source: folklore
security-loss: "a factor of 2"
rationale:
  class: "The OT runs the OPE protocol once, on inputs computed from the OT inputs, and each privacy reduction runs the OT adversary only as an oracle against the OPE semi-honest game."
---

# OPE ⇒ OT

## Statement

Let $\Pi$ be a [[oblivious-polynomial-evaluation#semi-honest-security|semi-honest secure]] [[oblivious-polynomial-evaluation|OPE]] over a finite field $\FF$ with degree bound $d \ge 1$. The following is a 1-out-of-2 [[oblivious-transfer|OT]] with message space $\FF$, with the reference string of $\Pi$, that has [[oblivious-transfer#sender-privacy|sender privacy]] and [[oblivious-transfer#receiver-privacy|receiver privacy]]: on inputs $(x_0, x_1) \in \FF^2$ and $c \in \bits$, the parties run $\Pi$ with sender polynomial $P(z) = x_0 + (x_1 - x_0) z$ and receiver input $c \in \{0, 1\} \subseteq \FF$, and the receiver outputs its OPE output — folklore.

## Sketch

$P(c) = x_c$, so a $(1-\varepsilon)$-correct OPE gives a $(1-\varepsilon)$-correct OT. The sender's view is simulatable from $P$, which does not depend on $c$, and the receiver's view from $(c, P(c)) = (c, x_c)$, which depends on the sender's pair only through $x_c$ — standard.

## Notes

- The construction does not give [[oblivious-transfer#malicious-security|malicious security]] when $|\FF| > 2$: a corrupted receiver can input $\alpha \notin \{0, 1\}$ and learn $(1 - \alpha) x_0 + \alpha x_1$, which depends on both messages — folklore.
