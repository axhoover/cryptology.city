---
type: reduction
status: draft
title: "OMDL ⇒ Prime-order DLOG"
aliases: []
id: red-omdl-to-prime-order-dlog
kind: implication
hypotheses: [omdl]
conclusion: prime-order-dlog
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The reduction calls any DLOG solver once as an oracle, after answering all but one OMDL challenge with its discrete-logarithm oracle."
---

# OMDL ⇒ Prime-order DLOG

## Statement

If [[discrete-logarithm#one-more-discrete-logarithm|OMDL]] is hard for a group generator $\GrGen$, then [[discrete-logarithm#dlog-in-prime-order-groups|DLOG is hard in prime-order groups]] for $\GrGen$, with the same advantage — folklore.

## Sketch

Given $\ell + 1$ challenges, the reduction queries the DL oracle on $X_1, \ldots, X_\ell$ and runs the DLOG solver on $X_{\ell+1}$. With $\ell = 0$, the OMDL game is the DLOG game.

## Notes

- No Turing reduction proves the converse unless DLOG is easy: DLOG is a 2-round assumption, and a reduction that bases OMDL on such an assumption, using the OMDL adversary only as an oracle, yields an efficient algorithm breaking the assumption ([[no-bounded-round-assumption-to-omdl-pas11|barrier]]) — [[Pas11 - Limits of Provable Security from Standard Assumptions|Pas11]].
- Within the hierarchy of one-more problems (OMDL, one-more RSA inversion) there are separations for algebraic reductions; in particular, the unforgeability of Chaum's RSA blind signatures is unlikely to be provable from RSA alone — [[BMV08 - Separation Results on the One-More Computational Problems|BMV08]].
