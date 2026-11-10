---
type: reduction
status: draft
title: "PRF ⇒ MAC (NMAC)"
aliases: []
id: red-prf-to-mac-bel06
kind: implication
hypotheses: [prf]
conclusion: mac
class: unstated
model: standard
source:
  - "[[Bel06 - New Proofs for NMAC and HMAC Security without Collision-Resistance|Bel06]]"
rationale:
  class: "The reduction is non-uniform, and the vocabulary has no non-uniform class."
---

# PRF ⇒ MAC (NMAC)

## Statement

Let $f : \bits^c \times \bits^b \to \bits^c$ with $c \le b$ and $c = \omega(\log \secpar)$, and let $F_k(m_1 \cdots m_\ell) := y_\ell$, with $y_0 := k$ and $y_i := f(y_{i-1}, m_i)$, be its iteration keyed by the initial chaining value. NMAC on messages $m \in (\bits^b)^+$ is

$$
\mathrm{NMAC}_{k_1,k_2}(m) := F_{k_1}(F_{k_2}(m)),
$$

with the $c$-bit inner output padded to one block. If the family $\{f(k, \cdot)\}_{k \in \bits^c}$, keyed by the chaining input, is a [[pseudorandom-function|PRF]] $\bits^b \to \bits^c$ against [[uniform-and-non-uniform-adversaries|non-uniform]] adversaries, then NMAC is a PRF on $(\bits^b)^+$ against non-uniform adversaries, with no collision-resistance assumption on $F$ — [[Bel06 - New Proofs for NMAC and HMAC Security without Collision-Resistance|Bel06]]. By [[prf-to-mac|PRF ⇒ MAC]], $\Tag((k_1, k_2), m) := \mathrm{NMAC}_{k_1,k_2}(m)$ with canonical verification is then a UF-CMA-secure [[message-authentication-code|MAC]] on $(\bits^b)^+$.

## Notes

- The reduction of [[Bel06 - New Proofs for NMAC and HMAC Security without Collision-Resistance|Bel06]] is non-uniform — [[GPR14 - The Exact PRF-Security of NMAC and HMAC|GPR14]]. A uniform proof shows that if $f$ is an $\varepsilon$-secure PRF against $q$ queries and a $\delta$-secure PRF against $q$ non-adaptive queries, NMAC is an $(\varepsilon + \ell q \delta)$-secure PRF against $q$ queries of at most $\ell$ blocks each, so the implication also holds against uniform adversaries — [[GPR14 - The Exact PRF-Security of NMAC and HMAC|GPR14]].
- For $\ell q \delta \ge \varepsilon$ that bound is essentially tight: there is an $f$ for which NMAC has an attack with advantage $\ell q \delta$ — [[GPR14 - The Exact PRF-Security of NMAC and HMAC|GPR14]].
- [[BCK96 - Keying Hash Functions for Message Authentication|BCK96]] had proved NMAC a PRF assuming, besides $f$ being a PRF, that $F$ is weakly collision resistant, an assumption that fails for MD5 and SHA-1 — [[GPR14 - The Exact PRF-Security of NMAC and HMAC|GPR14]].
