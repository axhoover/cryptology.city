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
  - "[[VV84 - Efficient and Secure Pseudo-Random Number Generation|VV84]]"
security-loss: "polynomial: a factor $m$ from Yao's next-bit hybrid, and a polynomial loss in turning a low-order-bit predictor into a factoring algorithm"
rationale:
  class: "The construction samples the Blum integer from part of its seed and only squares modulo it, and the reduction runs the distinguisher only as an oracle to build a low-order-bit predictor, which it in turn uses only as an oracle to decide quadratic residuosity or to factor."
  security-loss: "VV84 extract square roots modulo $N$, and hence factor $N$, from a low-order-bit predictor in time polynomial in $\\log N$ and the inverse of its advantage."
---

# Factoring with known factor structure ⇒ PRG

## Statement

If [[factoring#factoring-blum-integers|factoring Blum integers]] is hard, the Blum–Blum–Shub generator is a [[pseudorandom-generator|PRG]]: for $N$ sampled as in [[factoring#factoring-blum-integers|the factoring game]] and a seed $x \getsr \ZZ_N^*$, it sets $x_0 = x^2 \bmod N$ and $x_{i+1} = x_i^2 \bmod N$, and outputs $\mathrm{lsb}(x_1), \ldots, \mathrm{lsb}(x_m)$ for $m = m(\secpar)$ — [[VV84 - Efficient and Secure Pseudo-Random Number Generation|VV84]]. The seed consists of the coins that sample $N$ and those that sample $x$, and the output omits $N$; with $m(\secpar)$ above the seed length, the generator is an unkeyed PRG — standard. Its security under the stronger [[quadratic-residuosity|quadratic residuosity assumption]] for Blum integers is [[qr-to-prg-bbs86|QR ⇒ PRG]] — [[BBS86 - A Simple Unpredictable Pseudo-Random Number Generator|BBS86]].

## Sketch

Squaring permutes the quadratic residues modulo a Blum integer, so each $x_i$ is a uniform residue and the bits after $\mathrm{lsb}(x_i)$ are computable from $x_{i+1}$; Yao's equivalence of indistinguishability and unpredictability, applied right to left, turns a distinguisher into a predictor of the low-order bit of the principal square root of a random residue. For $x$ of Jacobi symbol $+1$ exactly one of $x, N - x$ is a residue and the two have opposite parity, so the predictor decides quadratic residuosity (BBS86). VV84 show that it also extracts square roots and hence factors $N$.

## Notes

- The generator may output the $O(\log \log N)$ low-order bits of each state — [[VV84 - Efficient and Secure Pseudo-Random Number Generation|VV84]].
