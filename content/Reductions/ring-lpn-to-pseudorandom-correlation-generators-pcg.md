---
type: reduction
status: draft
title: "Ring-LPN ⇒ Pseudorandom correlation generators (PCG)"
aliases: []
id: red-ring-lpn-to-pseudorandom-correlation-generators-pcg
kind: implication
hypotheses: [ring-lpn]
conclusion: pseudorandom-correlation-generator
class: unstated
model: standard
source:
  - "[[BCG+20 - Efficient Pseudorandom Correlation Generators from Ring-LPN|BCG+20]]"
security-loss: ""
---

# Ring-LPN ⇒ Pseudorandom correlation generators (PCG)

[[learning-parity-with-noise#ring-lpn|Ring-LPN]] with sparse secret and noise implies [[alternating-moduli#pseudorandom-correlation-generators-pcg|Pseudorandom correlation generators (PCG)]].

## Statement

Hardness of [[learning-parity-with-noise#ring-lpn|Ring-LPN]] over $R_p = \ZZ_p[x]/(F(x))$ with $t$-sparse secret and noise yields a [[alternating-moduli#pseudorandom-correlation-generators-pcg|pseudorandom correlation generator]] for oblivious linear evaluation over $R_p$ (by the CRT, $\deg F$ OLEs over $\ZZ_p$ when $F$ splits into linear factors modulo $p$) and for authenticated multiplication triples: two seeds of size sublinear in the output length expand locally into the parties' shares of the correlation. The construction also uses function secret sharing for sums of point functions, hence a PRG — [[BCG+20 - Efficient Pseudorandom Correlation Generators from Ring-LPN|BCG+20]].

## Sketch

Party $b$'s seed holds $t$-sparse $e_b, f_b \in R_p$ and FSS keys for the four products $e_0 e_1, e_0 f_1, f_0 e_1, f_0 f_1$, each $t^2$-sparse and hence shareable as a sum of $t^2$ point functions. Expanding the keys and combining the shares with the public $1, a, a^2$ gives additive shares of $x_0 x_1$ for $x_b = e_b + a f_b$; Ring-LPN with sparse secret and noise makes $x_{1-b}$ pseudorandom given party $b$'s seed.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.
