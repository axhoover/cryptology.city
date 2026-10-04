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
rationale:
  class: "The group generator is unchanged, and the fixed reduction runs any CDH adversary once as an oracle and compares its output with the challenge element."
---

# DDH ⇒ CDH

## Statement

If [[decisional-diffie-hellman|DDH]] is hard for a group generator $\GrGen$, then [[computational-diffie-hellman|CDH]] is hard for $\GrGen$: for every CDH adversary $\calA$ there is a DDH adversary $\calB$, making one call to $\calA$, with $\Adv^{\text{ddh}}_{\GrGen,\calB}(\secpar) \ge \Adv^{\text{cdh}}_{\GrGen,\calA}(\secpar) - 1/p$, $p$ the group order — folklore.

## Sketch

On a DDH challenge $(g, g^x, g^y, Z)$, run the CDH adversary on $(g^x, g^y)$ and guess the real world iff it returns $Z$. A real tuple is recognised with the adversary's success probability; for a random tuple $Z$ is uniform and independent of the adversary's output, so it matches with probability $1/p$.
