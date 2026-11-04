---
type: reduction
status: draft
title: "PSI ⇒ OT"
aliases: []
id: red-psi-to-ot
kind: implication
hypotheses: [psi]
conclusion: ot
class: fully-black-box
model: standard
source: folklore
security-loss: "a factor of 2"
rationale:
  class: "The OT runs the PSI protocol once, on sets computed from the OT inputs, and each privacy reduction runs the OT adversary only as an oracle against the PSI semi-honest game."
---

# PSI ⇒ OT

## Statement

Let $\Pi$ be a [[private-set-intersection#semi-honest-security|semi-honest secure]] [[private-set-intersection|PSI]] protocol for a universe $U = \bits^{\ell}$ with $\ell \ge 2$ and size bounds $n_S \ge 2$ and $n_R \ge 1$, where a pair of bits is read as an element of $U$ by padding. The following is a 1-out-of-2 [[oblivious-transfer|OT]] with message space $\bits$, with the reference string of $\Pi$, that has [[oblivious-transfer#sender-privacy|sender privacy]] and [[oblivious-transfer#receiver-privacy|receiver privacy]]: on inputs $(x_0, x_1) \in \bits^2$ and $c \in \bits$, the parties run $\Pi$ with sender set $X = \{(0, x_0), (1, x_1)\}$ and receiver set $Y = \{(c, 0)\}$, and the receiver outputs $0$ if its output set contains $(c, 0)$ and $1$ otherwise — folklore.

## Sketch

$X \cap Y$ is $\{(c, 0)\}$ if $x_c = 0$ and $\emptyset$ otherwise, so a $(1-\varepsilon)$-correct PSI protocol gives a $(1-\varepsilon)$-correct OT. The sender's view is simulatable from $(X, |Y|) = (X, 1)$, which does not depend on $c$, and the receiver's view from $(Y, X \cap Y, |X|) = (Y, X \cap Y, 2)$, which depends on the sender's pair only through $x_c$ — standard.

## Notes

- The construction needs the intersection to go to the receiver alone: in [[private-set-intersection#two-sided-psi|two-sided PSI]] the sender also learns $X \cap Y$, which reveals $c$ unless $x_0 = x_1 = 1$ — folklore.
- Conversely, semi-honest OT gives semi-honest PSI, through semi-honest secure computation of every functionality ([[ot-to-semi-honest-security-gmw87|semi-honest OT ⇒ semi-honest MPC]], [[semi-honest-two-party-computation-to-psi|semi-honest 2PC ⇒ PSI]]) — [[GMW87 - How to play ANY mental game|GMW87]], [[Gol04 - Foundations of Cryptography Basic Applications|Gol04]].
