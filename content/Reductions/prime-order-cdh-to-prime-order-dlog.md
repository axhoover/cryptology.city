---
type: reduction
status: draft
title: "Prime-order CDH ⇒ prime-order DLOG"
aliases: []
id: red-prime-order-cdh-to-prime-order-dlog
kind: implication
hypotheses: [prime-order-cdh]
conclusion: prime-order-dlog
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: one DLOG call, advantage-preserving"
rationale:
  class: "The group generator is unchanged, and the fixed reduction calls the DLOG solver once as an oracle and then exponentiates, never using the solver's code."
---

# Prime-order CDH ⇒ prime-order DLOG

## Statement

If [[computational-diffie-hellman#cdh-in-prime-order-groups|CDH is hard in prime-order groups]] for $\GrGen$, then [[discrete-logarithm#dlog-in-prime-order-groups|DLOG is hard in prime-order groups]] for the same $\GrGen$: every group it outputs has prime order, and the reduction of [[cdh-to-dlog|CDH ⇒ DLOG]] gives, for every DLOG adversary $\calA$, a CDH adversary $\calB$ with $\Adv^{\text{cdh}}_{\GrGen,\calB}(\secpar) \ge \Adv^{\text{dl}}_{\GrGen,\calA}(\secpar)$ — folklore.
