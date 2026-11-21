---
type: reduction
status: draft
title: "Adaptively secure threshold signature ⇒ Threshold signature"
aliases: []
id: red-adaptively-secure-threshold-signature-to-threshold-signature
kind: implication
hypotheses: [adaptively-secure-threshold-signature]
conclusion: threshold-signature
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on schemes, and the reduction runs any static forger as an oracle, corrupting its chosen set through the corruption oracle before any signing session."
---

# Adaptively secure threshold signature ⇒ Threshold signature

## Statement

An [[threshold-signature#adaptive-corruption|adaptively secure threshold signature scheme]] is a [[threshold-signature|threshold signature scheme]]: for all polynomials $n$ and $t$ with $1 \le t < n$, every efficient forger $\calA$ against static corruption of $t$ parties gives an efficient forger $\calB$ against adaptive corruption of $t$ parties with the same advantage — folklore.

## Sketch

$\calB$ runs $\calA$ on $(1^\secpar, n, t)$ to get its set $C$ with $|C| \le t$. On receiving $\pk$ and the $\pk_i$, and before opening any signing session, $\calB$ queries $\calO_{\mathrm{Corr}}(i)$ for each $i \in C$, which returns $\sk_i$ and no session state. It then runs $\calA$ on these keys, forwards its signing queries and outputs its forgery. The keys are independent of $C$, so $\calA$'s view is the one it has in the static game, and both games have the same winning condition.
