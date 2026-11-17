---
type: reduction
status: draft
title: "DLOG ⇒ OWF"
aliases: []
id: red-dlog-to-hash-function
kind: implication
hypotheses: [dlog]
conclusion: owf
class: fully-black-box
model: standard
source: folklore
security-loss: "additive $2^{-\\secpar}$: an inverter with success probability $\\varepsilon$ gives a DLOG solver with success probability at least $\\varepsilon - 2^{-\\secpar}$"
rationale:
  class: "The function calls the group generator and the group operation only as oracles, and the reduction runs any inverter once as an oracle and reduces the exponent it returns modulo p."
---

# DLOG ⇒ OWF

## Statement

Let $\ell(\secpar)$ be a polynomial with $p < 2^{\ell(\secpar)}$ for every $(\GG, g, p)$ that $\GrGen(1^\secpar)$ outputs. If [[discrete-logarithm|DLOG]] is hard for $\GrGen$, then

$$
f(c, r) := \left(\GrGen(1^\secpar; c),\ g^{r \bmod p}\right), \quad r \in \bits^{\ell(\secpar) + \secpar},
$$

where $(\GG, g, p) = \GrGen(1^\secpar; c)$, is a [[hash-function#preimage-resistance-one-wayness|one-way function]] with a trivial key — folklore.

## Sketch

For uniform $r$, $r \bmod p$ is within statistical distance $p/2^{\ell + \secpar} < 2^{-\secpar}$ of uniform on $\ZZ_p$, so a DLOG instance $(\GG, g, p, X)$ is $2^{-\secpar}$-close to $f(c, r)$ for uniform $(c, r)$. Every preimage $(c', r')$ of it satisfies $g^{r' \bmod p} = X$, so the reduction outputs $r' \bmod p = \log_g X$.
