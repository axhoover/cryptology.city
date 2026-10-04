---
type: reduction
status: draft
title: "CDH ⇒ DLOG"
aliases: []
id: red-cdh-to-dlog
kind: implication
hypotheses: [cdh]
conclusion: dlog
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: one DLOG call, advantage-preserving"
rationale:
  class: "The group generator is unchanged, and the fixed reduction calls the DLOG solver once as an oracle and then exponentiates, never using the solver's code."
---

# CDH ⇒ DLOG

## Statement

If [[computational-diffie-hellman|CDH]] is hard for a group generator $\GrGen$, then [[discrete-logarithm|DLOG]] is hard for $\GrGen$: for every DLOG adversary $\calA$ there is a CDH adversary $\calB$, making one call to $\calA$ and one exponentiation, with $\Adv^{\text{cdh}}_{\GrGen,\calB}(\secpar) \ge \Adv^{\text{dl}}_{\GrGen,\calA}(\secpar)$ — folklore.

## Sketch

Given a CDH instance $(g, g^x, g^y)$, run the DLOG solver on $(g, g^x)$ and output $(g^y)^{\hat{x}}$ for its answer $\hat{x}$. Since $g^x$ is distributed as in the DLOG game, the reduction succeeds whenever the solver does.
