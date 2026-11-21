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
security-loss: "polynomial: a factor $m$ for $m$ output bits from the next-bit hybrid, composed with the polynomial loss of recovering the discrete logarithm from a predictor for the half-interval bit, plus the negligible statistical distance of the sampled $x_0$ from uniform"
rationale:
  class: "The generator samples $(P, g)$ with the group generator from part of its seed and computes only in $\\ZZ_P^*$, and the reduction runs the distinguisher only as an oracle, turning it into a next-bit predictor and the predictor into a DLOG solver."
---

# DLOG ⇒ PRG

## Statement

If [DLOG is hard in $\ZZ_P^*$](discrete-logarithm#dlog-in-the-multiplicative-group-of-a-prime-field) for a group generator $\GrGen$, whose groups are $(\ZZ_P^*, g, P - 1)$ for a prime $P$ and a generator $g$ of $\ZZ_P^*$, the Blum–Micali generator is a [[pseudorandom-generator|PRG]]: for $(P, g) \gets \GrGen(1^\secpar)$ and a uniform $x_0 \in \ZZ_P^*$, it iterates $x_{i+1} = g^{x_i} \bmod P$ and outputs, for $m = m(\secpar)$, the bits $[x_i \ge (P-1)/2]$ for $i = 0, \ldots, m-1$, where $[x_i \ge (P-1)/2]$ is the most significant bit of the discrete logarithm of $x_{i+1}$ — [[BM84 - How to Generate Cryptographically Strong Sequences of Pseudo-Random Bits|BM84]]. The seed consists of the coins of $\GrGen$ that sample $(P, g)$ and the coins that sample $x_0$, from which $x_0$ is drawn by rejection sampling within negligible statistical distance of uniform on $\ZZ_P^*$, and the output omits $(P, g)$; with $m(\secpar)$ above the seed length, the generator is an unkeyed PRG — standard.

## Sketch

The half-interval predicate is hard-core for $x \mapsto g^x$: given $y = g^x$, Euler's criterion gives the parity of $x$, and the predicate identifies which square root of $y g^{-(x \bmod 2)}$ has index $\lfloor x/2 \rfloor$, so recursing recovers $x$ bit by bit; a predictor with only noticeable advantage is first amplified by random self-reduction. A distinguisher for the generator yields such a predictor by the next-bit test — [[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]].

## Notes

- The next-bit test characterizes pseudorandomness, and the construction generalizes to a PRG from any one-way permutation — [[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]].
- Efficiency: each output bit costs one exponentiation modulo $P$ — standard.
