---
type: reduction
status: draft
title: "DLOG ⇒ PRG"
aliases: []
id: red-dlog-to-prg-bm84
kind: implication
hypotheses: [dlog]
conclusion: prg
class: fully-black-box
model: standard
source:
  - "[[BM84 - How to Generate Cryptographically Strong Sequences of Pseudo-Random Bits|BM84]]"
security-loss: ""
rationale:
  class: "The construction uses only the group operation, and the reduction runs the distinguisher only as an oracle, turning it into a next-bit predictor and the predictor into a DLOG solver."
---

# DLOG ⇒ PRG

## Statement

If [[discrete-logarithm|DLOG]] is hard in $\ZZ_p^*$ ($p$ prime, $g$ a generator), the Blum–Micali generator is a [[pseudorandom-generator|PRG]]: from a uniform seed $x_0$, it iterates $x_{i+1} = g^{x_i} \bmod p$ and outputs at each step the bit $[x_i \ge (p-1)/2]$, the most significant bit of the discrete logarithm of $x_{i+1}$ — [[BM84 - How to Generate Cryptographically Strong Sequences of Pseudo-Random Bits|BM84]].

## Sketch

The half-interval predicate is hard-core for $x \mapsto g^x$: given $y = g^x$, Euler's criterion gives the parity of $x$, and the predicate identifies which square root of $y g^{-(x \bmod 2)}$ has index $\lfloor x/2 \rfloor$, so recursing recovers $x$ bit by bit; a predictor with only noticeable advantage is first amplified by random self-reduction. A distinguisher for the generator yields such a predictor by the next-bit test — [[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]].

## Notes

- The next-bit test characterizes pseudorandomness, and the construction generalizes to a PRG from any one-way permutation — [[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]].
