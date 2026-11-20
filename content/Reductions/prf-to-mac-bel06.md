---
type: reduction
status: draft
title: "Non-uniform PRF ⇒ MAC (NMAC)"
aliases: []
id: red-prf-to-mac-bel06
kind: implication
hypotheses: [non-uniform-prf]
conclusion: mac
class: unstated
model: standard
source:
  - "[[Bel06 - New Proofs for NMAC and HMAC Security without Collision-Resistance|Bel06]]"
rationale:
  class: "Bel06's reduction is non-uniform, and the vocabulary has no non-uniform class."
---

# Non-uniform PRF ⇒ MAC (NMAC)

## Statement

Let $f : \bits^c \times \bits^b \to \bits^c$ with $c \le b$ and $c = \omega(\log \secpar)$, and let $F_k(m_1 \cdots m_\ell) := y_\ell$, with $y_0 := k$ and $y_i := f(y_{i-1}, m_i)$, be its iteration keyed by the initial chaining value. NMAC on messages $m \in (\bits^b)^+$ is

$$
\mathrm{NMAC}_{k_1,k_2}(m) := F_{k_1}(F_{k_2}(m)),
$$

with the $c$-bit inner output padded to one block. If the family $\{f(k, \cdot)\}_{k \in \bits^c}$, keyed by the chaining input, is a [[pseudorandom-function#security-against-non-uniform-adversaries|PRF against non-uniform adversaries]] $\bits^b \to \bits^c$, then NMAC is a PRF on $(\bits^b)^+$ against non-uniform adversaries, with no collision-resistance assumption on $F$ — [[Bel06 - New Proofs for NMAC and HMAC Security without Collision-Resistance|Bel06]]. The reduction of Bel06 is non-uniform — [[GPR14 - The Exact PRF-Security of NMAC and HMAC|GPR14]]. A PRF against non-uniform adversaries is a PRF against uniform ones ([[non-uniform-prf-to-prf|Non-uniform PRF ⇒ PRF]]) — standard, so by [[prf-to-mac|PRF ⇒ MAC]], $\Tag((k_1, k_2), m) := \mathrm{NMAC}_{k_1,k_2}(m)$ with canonical verification is a UF-CMA-secure [[message-authentication-code|MAC]] on $(\bits^b)^+$.

## Notes

- A uniform proof gives the same conclusion from a PRF against uniform adversaries ([[prf-to-mac-gpr14|PRF ⇒ MAC (NMAC, uniform proof)]]): if $f$ is an $\varepsilon$-secure PRF against $q$ queries and a $\delta$-secure PRF against $q$ non-adaptive queries, NMAC is an $(\varepsilon + \ell q \delta)$-secure PRF against $q$ queries of at most $\ell$ blocks each — [[GPR14 - The Exact PRF-Security of NMAC and HMAC|GPR14]].
- [[BCK96 - Keying Hash Functions for Message Authentication|BCK96]] had proved NMAC a PRF assuming, besides $f$ being a PRF, that $F$ is weakly collision resistant, an assumption that fails for MD5 and SHA-1 — [[GPR14 - The Exact PRF-Security of NMAC and HMAC|GPR14]].
