---
type: reduction
status: draft
title: "Compression-function PRF ⇒ MAC (NMAC, uniform proof)"
aliases: []
id: red-prf-to-mac-gpr14
kind: implication
hypotheses: [compression-function-prf]
conclusion: mac
class: unstated
model: standard
source:
  - "[[GPR14 - The Exact PRF-Security of NMAC and HMAC|GPR14]]"
security-loss: "additive: NMAC is (ε + (ℓ+1)qδ + q²/2^c)-secure against q queries of at most ℓ blocks, for f ε-secure against q adaptive and δ-secure against q non-adaptive queries (Theorem 1)"
---

# Compression-function PRF ⇒ MAC (NMAC, uniform proof)

## Statement

Let $f : \bits^c \times \bits^b \to \bits^c$ with $c \le b$ and $c = \omega(\log \secpar)$, let $\mathrm{Casc}_f(k, m_1 \cdots m_\ell) := y_\ell$, with $y_0 := k$ and $y_i := f(y_{i-1}, m_i)$, be its cascade on $(\bits^b)^+$, and let

$$
\mathrm{NMAC}_f((k_1, k_2), m) := f\big(k_2, \mathrm{Casc}_f(k_1, m) \,\|\, 0^{b-c}\big),
$$

whose outer call takes the $c$-bit cascade output padded to one $b$-bit block. If the family $\{f(k, \cdot)\}_{k \in \bits^c}$, under a uniform key $k \getsr \bits^c$, is an $\varepsilon$-secure [[pseudorandom-function#compression-function-prfs|compression-function PRF]] against $q$ queries and a $\delta$-secure one against $q$ non-adaptive queries, then NMAC is an $(\varepsilon + (\ell + 1) q \delta + q^2/2^c)$-secure PRF against $q$ queries of at most $\ell$ blocks each, by a uniform reduction — [[GPR14 - The Exact PRF-Security of NMAC and HMAC|GPR14]] (Theorem 1). A non-adaptive distinguisher is an adaptive one, and $q^2/2^c$ is negligible for polynomial $q$ since $c = \omega(\log \secpar)$, so for polynomial $q$ and $\ell$ NMAC is a PRF whenever $f$ is one, and by [[prf-to-mac|PRF ⇒ MAC]], $\Tag((k_1, k_2), m) := \mathrm{NMAC}_{k_1,k_2}(m)$ with canonical verification is a UF-CMA-secure [[message-authentication-code|MAC]] on $(\bits^b)^+$ — standard.

## Notes

- For $\ell q \delta \ge \varepsilon$ the bound is essentially tight: there is an $f$ for which NMAC has an attack with advantage $\ell q \delta$ — [[GPR14 - The Exact PRF-Security of NMAC and HMAC|GPR14]].
- The earlier proof from the same assumption uses a non-uniform reduction, and so needs $f$ to be a compression-function PRF against non-uniform adversaries ([[prf-to-mac-bel06|Non-uniform compression-function PRF ⇒ MAC (NMAC)]]) — [[Bel06 - New Proofs for NMAC and HMAC Security without Collision-Resistance|Bel06]], [[GPR14 - The Exact PRF-Security of NMAC and HMAC|GPR14]].
