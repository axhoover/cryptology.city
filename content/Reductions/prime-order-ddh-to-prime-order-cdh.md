---
type: reduction
status: draft
title: "Prime-order DDH ⇒ prime-order CDH"
aliases: []
id: red-prime-order-ddh-to-prime-order-cdh
kind: implication
hypotheses: [prime-order-ddh]
conclusion: prime-order-cdh
class: fully-black-box
model: standard
source: folklore
security-loss: 'tight up to an additive $\mathbb{E}[1/p]$, over the group order $p$: one CDH call'
rationale:
  class: "The group generator is unchanged, and the fixed reduction runs any CDH adversary once as an oracle and compares its output with the challenge element."
---

# Prime-order DDH ⇒ prime-order CDH

## Statement

If [[decisional-diffie-hellman#ddh-in-prime-order-groups|DDH is hard in prime-order groups]] for $\GrGen$, then [[computational-diffie-hellman#cdh-in-prime-order-groups|CDH is hard in prime-order groups]] for the same $\GrGen$: every group it outputs has prime order, and the reduction of [[ddh-to-cdh|DDH ⇒ CDH]] gives, for every CDH adversary $\calA$, a DDH adversary $\calB$ with $\Adv^{\text{ddh}}_{\GrGen,\calB}(\secpar) \ge \Adv^{\text{cdh}}_{\GrGen,\calA}(\secpar) - \mathbb{E}[1/p]$, the expectation over the order $p$ of the group $\GrGen$ outputs, which DDH hardness makes negligible — folklore.
