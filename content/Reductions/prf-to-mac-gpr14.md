---
type: reduction
status: draft
title: "PRF ⇒ MAC (NMAC, uniform proof)"
aliases: []
id: red-prf-to-mac-gpr14
kind: implication
hypotheses: [prf]
conclusion: mac
class: unstated
model: standard
source:
  - "[[GPR14 - The Exact PRF-Security of NMAC and HMAC|GPR14]]"
security-loss: "additive: NMAC is (ε + ℓqδ)-secure against q queries of at most ℓ blocks, for f ε-secure against q adaptive and δ-secure against q non-adaptive queries"
---

# PRF ⇒ MAC (NMAC, uniform proof)

## Statement

Let $f : \bits^c \times \bits^b \to \bits^c$ with $c \le b$ and $c = \omega(\log \secpar)$, let $F_k$ be its iteration keyed by the initial chaining value, and let $\mathrm{NMAC}_{k_1,k_2}(m) := F_{k_1}(F_{k_2}(m))$ on $(\bits^b)^+$, as in [[prf-to-mac-bel06|Non-uniform PRF ⇒ MAC (NMAC)]]. If the family $\{f(k, \cdot)\}_{k \in \bits^c}$ is an $\varepsilon$-secure [[pseudorandom-function|PRF]] against $q$ queries and a $\delta$-secure PRF against $q$ non-adaptive queries, then NMAC is an $(\varepsilon + \ell q \delta)$-secure PRF against $q$ queries of at most $\ell$ blocks each, by a uniform reduction — [[GPR14 - The Exact PRF-Security of NMAC and HMAC|GPR14]]. A non-adaptive distinguisher is an adaptive one, so for polynomial $q$ and $\ell$ NMAC is a PRF whenever $f$ is one, and by [[prf-to-mac|PRF ⇒ MAC]], $\Tag((k_1, k_2), m) := \mathrm{NMAC}_{k_1,k_2}(m)$ with canonical verification is a UF-CMA-secure [[message-authentication-code|MAC]] on $(\bits^b)^+$ — standard.

## Notes

- For $\ell q \delta \ge \varepsilon$ the bound is essentially tight: there is an $f$ for which NMAC has an attack with advantage $\ell q \delta$ — [[GPR14 - The Exact PRF-Security of NMAC and HMAC|GPR14]].
- The earlier proof from the same assumption uses a non-uniform reduction, and so needs $f$ to be a PRF against non-uniform adversaries ([[prf-to-mac-bel06|Non-uniform PRF ⇒ MAC (NMAC)]]) — [[Bel06 - New Proofs for NMAC and HMAC Security without Collision-Resistance|Bel06]], [[GPR14 - The Exact PRF-Security of NMAC and HMAC|GPR14]].
