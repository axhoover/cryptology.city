---
type: reduction
status: draft
title: "VDF ⇒ Weak VDF"
aliases: []
id: red-vdf-to-weak-vdf
kind: implication
hypotheses: [vdf]
conclusion: weak-vdf
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on (Setup, Eval, Vrfy), and the reductions forward any soundness or sequentiality adversary unchanged."
---

# VDF ⇒ Weak VDF

## Statement

Every [[verifiable-delay-function|VDF]] is a [[verifiable-delay-function#weak-vdfs|weak VDF]]: its $\Eval$ runs in parallel time $T$ on $\poly(\log T, \secpar) \le \poly(T, \secpar)$ processors, and the correctness, soundness and $(p, \sigma)$-sequentiality conditions of a weak VDF are those of a VDF — folklore.
