---
type: reduction
status: draft
title: "Decision LWE ⇒ LWE"
aliases: []
id: red-decision-lwe-to-lwe
kind: implication
hypotheses: [decision-lwe]
conclusion: lwe
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the LWE distribution, and the reduction forwards any distinguisher unchanged."
---

# Decision LWE ⇒ LWE

## Statement

Hardness of [[learning-with-errors#decision-lwe|decision LWE]] in its prime-modulus regime, a prime $q \le \poly(n)$ with Gaussian error of width $\alpha q \ge 2\sqrt{n}$ and $\alpha \le n^{-c}$ for every $m = \poly(\secpar)$, is hardness of [[learning-with-errors|LWE]] for the same $(n, q, \alpha)$, since $q$ is $\poly(\secpar)$-computable and $\lceil \log q \rceil = O(\log n) \le \poly(\secpar)$, with the same advantage — folklore.
