---
type: reduction
status: draft
title: "Superpolynomially secure RE ⇒ RE"
aliases: []
id: red-superpolynomially-secure-rerandomizable-encryption-to-rerandomizable-encryption
kind: implication
hypotheses: [superpolynomially-secure-rerandomizable-encryption]
conclusion: rerandomizable-encryption
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme and its rerandomizer, and the reduction forwards a CPA adversary unchanged."
---

# Superpolynomially secure RE ⇒ RE

## Statement

An efficient CPA adversary runs in time $p(\secpar)$ for a polynomial $p$, and $p(\secpar) \le T(\secpar)$ for all large $\secpar$ because $T(\secpar) = \secpar^{\omega(1)}$. Its IND-CPA advantage is therefore at most $1/T(\secpar)$ for all large $\secpar$, which is negligible. Correctness and perfect rerandomization are the same requirements in both, so a [scheme secure against slightly super-polynomial adversaries](rerandomizable-encryption#security-against-slightly-super-polynomial-adversaries) is a [[rerandomizable-encryption|rerandomizable encryption]] scheme — folklore.
