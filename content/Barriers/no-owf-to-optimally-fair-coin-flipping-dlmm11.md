---
type: barrier
status: draft
title: "No fully-black-box reduction from OWF to optimally fair coin flipping"
aliases: []
id: bar-owf-to-optimally-fair-coin-flipping-dlmm11
hypotheses: [owf]
conclusion: optimally-fair-coin-flipping
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
source:
  - "[[DLMM11 - On the Black-Box Complexity of Optimally-Fair Coin Tossing|DLMM11]]"
rationale:
  class: "DLMM11 rule out constructions that use the one-way function only as an oracle, by simulating any such protocol with few rounds relative to a random oracle in the plain model, with proofs that use the adversary only as an oracle."
---

# No fully-black-box reduction from OWF to optimally fair coin flipping

## Statement

There is no fully-black-box construction from a [[hash-function#preimage-resistance-one-wayness|one-way function]] of an $r$-round [[coin-flipping#optimally-fair-coin-flipping|optimally fair coin-flipping protocol]], with bias $O(1/r)$, when $r = o(n / \log n)$ for the input length $n$ of the one-way function — [[DLMM11 - On the Black-Box Complexity of Optimally-Fair Coin Tossing|DLMM11]]. In particular no fully-black-box optimally fair protocol from one-way functions has a round complexity independent of $n$.

## Notes

- One-way functions do give bias $O(1/\sqrt{r})$ in $r$ rounds — standard — and OT gives $O(1/r)$: [[ot-to-optimally-fair-coin-flipping-mns09|OT ⇒ optimally fair coin flipping]] — [[MNS09 - An Optimally Fair Coin Toss|MNS09]].
- Later work removes some of the restrictions on the protocols covered — [[DMM14 - Can Optimally-Fair Coin Tossing Be Based on One-Way Functions|DMM14]].
