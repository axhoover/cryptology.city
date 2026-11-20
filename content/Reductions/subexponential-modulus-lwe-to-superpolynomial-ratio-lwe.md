---
type: reduction
status: draft
title: LWE with sub-exponential ratio ⇒ LWE with superpolynomial ratio
aliases: []
id: red-subexponential-modulus-lwe-to-superpolynomial-ratio-lwe
kind: implication
hypotheses: [subexponential-modulus-lwe]
conclusion: superpolynomial-ratio-lwe
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the LWE distribution, and the reduction forwards any distinguisher unchanged."
---

# LWE with sub-exponential ratio ⇒ LWE with superpolynomial ratio

## Statement

Hardness of [[learning-with-errors#lwe-with-sub-exponential-modulus-to-noise-ratio|LWE with sub-exponential modulus-to-noise ratio]] is hardness of [[learning-with-errors#lwe-with-superpolynomial-modulus-to-noise-ratio|LWE with superpolynomial modulus-to-noise ratio]] for the ratio $r(\secpar) = 2^{n^{\varepsilon}} \ge 2^{\secpar^{c\varepsilon}} = \secpar^{\omega(1)}$, where $n \ge \secpar^c$, with the same modulus $q \le 2^{\poly(n)} \le 2^{\poly(\secpar)}$ and the same advantage; every $m = \poly(\secpar)$ is $\poly(n)$, since $\secpar \le n^{1/c}$ — folklore.
