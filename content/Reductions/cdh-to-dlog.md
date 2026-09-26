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
---

# CDH ⇒ DLOG

[[computational-diffie-hellman|CDH]] implies [[discrete-logarithm|DLOG]].

## Statement

If [[computational-diffie-hellman|CDH]] is hard for a group generator $\GrGen$, then [[discrete-logarithm|DLOG]] is hard for $\GrGen$: a DLOG solver yields a CDH solver with the same advantage — folklore.

## Sketch

Given a CDH instance $(g, g^x, g^y)$, run the DLOG solver on $(g, g^x)$ to obtain $x$ and output $(g^y)^x$. Since $g^x$ is distributed as in the DLOG game, the reduction succeeds exactly when the solver does.

## Notes

`class: fully-black-box`: The group generator is unchanged, and the fixed reduction calls the DLOG solver once as an oracle, then exponentiates; it never uses the solver's code.
