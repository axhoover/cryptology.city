---
type: reduction
status: draft
title: LWE with sub-exponential ratio ⇒ LWE
aliases: []
id: red-subexponential-modulus-lwe-to-lwe
kind: implication
hypotheses: [subexponential-modulus-lwe]
conclusion: lwe
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the LWE distribution, and the reduction forwards any distinguisher unchanged."
---

# LWE with sub-exponential ratio ⇒ LWE

## Statement

Hardness of [[learning-with-errors#lwe-with-sub-exponential-modulus-to-noise-ratio|LWE with sub-exponential modulus-to-noise ratio]] is hardness of [[learning-with-errors|LWE]] for the same $(n, q, \alpha)$, since $n$ and $q$ are $\poly(\secpar)$-computable, $\lceil \log q \rceil \le \poly(n) \le \poly(\secpar)$ and $\alpha = 2^{-n^{\varepsilon}} \le n^{-1}$ for all sufficiently large $n$, and every $m = \poly(\secpar)$ is $\poly(n)$ since $n \ge \secpar^c$, with the same advantage — folklore.
