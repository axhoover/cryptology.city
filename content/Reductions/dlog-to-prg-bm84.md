---
type: reduction
status: draft
title: "DLOG ⇒ PRG"
aliases: []
id: red-dlog-to-prg-bm84
kind: implication
hypotheses: [zp-star-dlog]
conclusion: prg
class: fully-black-box
model: standard
source:
  - "[[BM84 - How to Generate Cryptographically Strong Sequences of Pseudo-Random Bits|BM84]]"
security-loss: "polynomial: a factor $m$ for $m$ output bits from the next-bit hybrid, composed with the polynomial loss of recovering the discrete logarithm from a predictor for the half-interval bit"
rationale:
  class: "The construction runs the group generator on part of its seed and otherwise computes only modulo P, and the reduction runs the distinguisher only as an oracle, turning it into a next-bit predictor and the predictor into a DLOG solver."
---

# DLOG ⇒ PRG

## Statement

If [DLOG is hard in $\ZZ_P^*$](discrete-logarithm#dlog-in-multiplicative-groups-modulo-a-prime) for $\GrGen$ ($P$ prime, $g$ a generator of $\ZZ_P^*$), the Blum–Micali generator is a [[pseudorandom-generator|PRG]]: for $(\ZZ_P^*, g, P - 1) \gets \GrGen(1^\secpar)$ and a uniform seed $x_0 \in \ZZ_P^*$, it iterates $x_{i+1} = g^{x_i} \bmod P$ and outputs at each of $m = m(\secpar)$ steps the bit $[x_i \ge (P-1)/2]$, the most significant bit of the discrete logarithm of $x_{i+1}$ — [[BM84 - How to Generate Cryptographically Strong Sequences of Pseudo-Random Bits|BM84]]. The seed consists of the coins that sample $(P, g)$ and those that sample $x_0$, and the output omits $(P, g)$; with $m(\secpar)$ above the seed length, the generator is an unkeyed PRG — standard.

## Sketch

The half-interval predicate is hard-core for $x \mapsto g^x$: given $y = g^x$, Euler's criterion gives the parity of $x$, and the predicate identifies which square root of $y g^{-(x \bmod 2)}$ has index $\lfloor x/2 \rfloor$, so recursing recovers $x$ bit by bit; a predictor with only noticeable advantage is first amplified by random self-reduction. A distinguisher for the generator yields such a predictor by the next-bit test — [[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]].

## Notes

- The next-bit test characterizes pseudorandomness, and the construction generalizes to a PRG from any one-way permutation — [[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]].
- Efficiency: each output bit costs one exponentiation modulo $P$ — standard.
