---
type: reduction
status: draft
title: "FROST ⇒ Threshold signature"
aliases: []
id: red-frost-to-threshold-signature
kind: implication
hypotheses: [frost]
conclusion: threshold-signature
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on schemes, and the reduction forwards any forger unchanged."
---

# FROST ⇒ Threshold signature

## Statement

[[threshold-signature#frost|FROST]] with trusted-dealer key generation, if unforgeable against static corruption of $t$ parties for all polynomials $n$ and $t$ with $1 \le t < n$, is a [[threshold-signature|threshold signature scheme]], with the same advantage for every forger; it is perfectly correct, since honest shares pass their checks and combine into $(R, z)$ with $g^z = R Y^c$ — folklore.
