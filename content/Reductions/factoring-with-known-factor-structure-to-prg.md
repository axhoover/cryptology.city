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
---

# Factoring with known factor structure ⇒ PRG

[[factoring#factoring-with-known-factor-structure|Factoring with known factor structure]] implies [[pseudorandom-generator|PRG]].

## Statement

If [[factoring#factoring-with-known-factor-structure|factoring Blum integers]] $N = pq$ with $p \equiv q \equiv 3 \pmod{4}$ is hard, then a [[pseudorandom-generator|PRG]] exists: the Blum–Blum–Shub generator squares modulo $N$ repeatedly and outputs the low-order bit of each state — [[BBS86 - A Simple Unpredictable Pseudo-Random Number Generator|BBS86]]. BBS86 prove unpredictability under the quadratic residuosity assumption; [[VV84 - Efficient and Secure Pseudo-Random Number Generation|VV84]] prove it assuming only that factoring Blum integers is hard.

## Sketch

Seed $x \getsr \ZZ_N^*$; set $x_0 = x^2 \bmod N$, $x_{i+1} = x_i^2 \bmod N$, and output $\mathrm{lsb}(x_1), \ldots, \mathrm{lsb}(x_m)$. Squaring permutes the quadratic residues modulo a Blum integer, so each $x_i$ is a uniform residue and every bit to its right is computable from $x_{i+1}$; Yao's equivalence of indistinguishability and unpredictability, applied right to left, turns a distinguisher into a predictor of the low-order bit of the principal square root of a random residue. For $x$ of Jacobi symbol $+1$ exactly one of $x, N - x$ is a residue and the two have opposite parity, so the predictor decides quadratic residuosity (BBS86); VV84 show it also extracts square roots and hence factors $N$.

## Notes

`class: fully-black-box`: One fixed construction (iterated squaring modulo $N$), trivially black-box in a hardness-assumption hypothesis; the reduction runs the distinguisher only as an oracle, turning it into a low-order-bit predictor (hybrid argument) and the predictor, again as an oracle, into a quadratic-residuosity decider (BBS86) or a factoring algorithm (VV84).

- $O(\log \log N)$ low-order output bits per squaring — [[VV84 - Efficient and Secure Pseudo-Random Number Generation|VV84]]
- `factoring-blum-integers` has no page; the hypothesis links to the anchor [[factoring#factoring-with-known-factor-structure]].
