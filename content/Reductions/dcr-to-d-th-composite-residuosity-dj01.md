---
type: reduction
status: draft
title: "DCR ⇔ $d$-th Composite Residuosity"
aliases: []
id: red-dcr-to-d-th-composite-residuosity-dj01
kind: equivalence
hypotheses: [dcr]
conclusion: d-th-composite-residuosity
class: fully-black-box
model: standard
source:
  - "[[DJ01 - A Generalisation, a Simplification and Some Applications of Paillier's Probabilistic Public-Key System|DJ01]]"
security-loss: "the converse direction is tight: one distinguisher call, advantage preserved"
rationale:
  class: "Each direction calls a distinguisher for the other assumption only as an oracle, on challenges transformed by arithmetic modulo powers of the modulus."
---

# DCR ⇔ $d$-th Composite Residuosity

## Statement

For every fixed $d \ge 1$, [$d$-th composite residuosity](decisional-composite-residuosity#d-th-composite-residuosity) — a uniform $n^d$-th power modulo $n^{d+1}$ is indistinguishable from a uniform element of $\ZZ_{n^{d+1}}^*$ — is equivalent to [[decisional-composite-residuosity|DCR]], its case $d = 1$. DCR implies the degree-$d$ assumption — [[DJ01 - A Generalisation, a Simplification and Some Applications of Paillier's Probabilistic Public-Key System|DJ01]]. Conversely, a DCR distinguisher breaks the degree-$d$ assumption with the same advantage — standard.

## Sketch

For the converse, reduce the challenge modulo $n^2$. Reduction maps $\ZZ_{n^{d+1}}^*$ onto $\ZZ_{n^2}^*$ with fibres of equal size, so it sends a uniform unit to a uniform unit, and it sends $r^{n^d}$ to $w^{n^d}$ for $w$ uniform in $\ZZ_{n^2}^*$. The $n$-th powers modulo $n^2$ form a subgroup of order $\varphi(n)$, which raising to $n^{d-1}$ permutes because $\gcd(n, \varphi(n)) = 1$ for primes of equal length; hence $w^{n^d} = (w^n)^{n^{d-1}}$ is a uniform $n$-th power — standard.
