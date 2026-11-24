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
security-loss: 'tight up to an additive $\mathbb{E}[1/p]$, over the group order $p$: one CDH call'
rationale:
  class: "The group generator is unchanged, and the fixed reduction runs any CDH adversary once as an oracle and compares its output with the challenge element."
---

# DDH ⇒ CDH

## Statement

If [[decisional-diffie-hellman|DDH]] is hard for a group generator $\GrGen$, then [[computational-diffie-hellman|CDH]] is hard for $\GrGen$. For every CDH adversary $\calA$ there is a DDH adversary $\calB$, making one call to $\calA$, with $\Adv^{\text{ddh}}_{\GrGen,\calB}(\secpar) \ge \Adv^{\text{cdh}}_{\GrGen,\calA}(\secpar) - \mathbb{E}[1/p]$, the expectation over the order $p$ of the group $\GrGen$ outputs — folklore. DDH hardness makes $\mathbb{E}[1/p]$ negligible, since every group $\GrGen$ outputs has order $p \ge 2$, a [[group-generator|group generator]] computes the group operation in polynomial time, and exhaustive search for $x$ decides DDH with advantage $1 - 1/p \ge 1/2$ whenever $p$ is polynomial ([[decisional-diffie-hellman#assumption|DDH]]) — standard; so CDH is hard.

## Sketch

On a DDH challenge $(g, g^x, g^y, Z)$, run the CDH adversary on $(g^x, g^y)$ and guess the real world iff it returns $Z$. A real tuple is recognised with the adversary's success probability; for a random tuple $Z$ is uniform and independent of the adversary's output, so it matches with probability at most $1/p$ given $p$.
