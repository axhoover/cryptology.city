---
type: reduction
status: draft
title: "DDH ⇒ CDH"
aliases: []
id: red-ddh-to-cdh
kind: implication
hypotheses: [ddh]
conclusion: cdh
class: fully-black-box
model: standard
source: folklore
security-loss: "tight up to an additive $1/p$: one CDH call"
---

# DDH ⇒ CDH

[[decisional-diffie-hellman|DDH]] implies [[computational-diffie-hellman|CDH]].

## Statement

If [[decisional-diffie-hellman|DDH]] is hard for a group generator $\GrGen$, then [[computational-diffie-hellman|CDH]] is hard for $\GrGen$ — folklore.

## Sketch

On DDH challenge $(g^x, g^y, Z)$, run the CDH adversary on $(g^x, g^y)$ and guess the real world iff it returns $Z$. A real tuple is recognised with the adversary's success probability $\varepsilon$; for a random tuple $Z$ is uniform and independent of the adversary's output, so it matches with probability $1/p$. The DDH advantage is therefore at least $\varepsilon - 1/p$.

## Notes

`class: fully-black-box`: the construction is the identity on the group generator, and the fixed reduction runs any CDH adversary once as an oracle on $(g^x, g^y)$ and compares its output with the challenge element.
