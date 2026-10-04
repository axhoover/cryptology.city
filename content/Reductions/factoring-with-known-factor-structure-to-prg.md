---
type: reduction
status: draft
title: "Factoring with known factor structure ⇒ PRG"
aliases: []
id: red-factoring-with-known-factor-structure-to-prg
kind: implication
hypotheses: [factoring-blum-integers]
conclusion: prg
class: fully-black-box
model: standard
source:
  - "[[BBS86 - A Simple Unpredictable Pseudo-Random Number Generator|BBS86]]"
security-loss: ""
rationale:
  class: "The construction only squares modulo the sampled Blum integer, and the reduction runs the distinguisher only as an oracle to build a low-order-bit predictor, which it in turn uses only as an oracle to decide quadratic residuosity or to factor."
---

# Factoring with known factor structure ⇒ PRG

## Statement

If [[factoring#factoring-with-known-factor-structure|factoring Blum integers]] is hard, the Blum–Blum–Shub generator is a [[pseudorandom-generator|PRG]]: for a Blum integer $N = pq$ with $p \equiv q \equiv 3 \pmod{4}$ and a seed $x \getsr \ZZ_N^*$, it sets $x_0 = x^2 \bmod N$ and $x_{i+1} = x_i^2 \bmod N$, and outputs $\mathrm{lsb}(x_1), \ldots, \mathrm{lsb}(x_m)$ — [[VV84 - Efficient and Secure Pseudo-Random Number Generation|VV84]]. [[BBS86 - A Simple Unpredictable Pseudo-Random Number Generator|BBS86]] prove the generator secure under the stronger [[quadratic-residuosity|quadratic residuosity assumption]] for Blum integers.

## Sketch

Squaring permutes the quadratic residues modulo a Blum integer, so each $x_i$ is a uniform residue and the bits after $\mathrm{lsb}(x_i)$ are computable from $x_{i+1}$; Yao's equivalence of indistinguishability and unpredictability, applied right to left, turns a distinguisher into a predictor of the low-order bit of the principal square root of a random residue. For $x$ of Jacobi symbol $+1$ exactly one of $x, N - x$ is a residue and the two have opposite parity, so the predictor decides quadratic residuosity (BBS86). VV84 show that it also extracts square roots and hence factors $N$.

## Notes

- The generator may output the $O(\log \log N)$ low-order bits of each state — [[VV84 - Efficient and Secure Pseudo-Random Number Generation|VV84]].
