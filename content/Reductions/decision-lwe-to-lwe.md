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

Let $(n, q, \alpha)$ witness [[learning-with-errors#decision-lwe|decision LWE]]: $n \le \poly(\secpar)$ and a prime $q \le \poly(n)$ are $\poly(\secpar)$-computable, $\alpha q \ge 2\sqrt{n}$, $\alpha \le n^{-c}$ for a constant $c > 0$, and decision LWE is hard for $(n, q, D_{\ZZ,\alpha q}, m)$ for every $m = \poly(\secpar)$. The same $(n, q, \alpha)$ witnesses [[learning-with-errors|LWE]], whose modulus need only be $\poly(\secpar)$-computable with $\lceil \log q \rceil \le \poly(\secpar)$, here $\lceil \log q \rceil = O(\log n)$; the two games coincide, so every adversary has the same advantage in both — folklore.
