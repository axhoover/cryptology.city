---
type: reduction
status: draft
title: QR ⇒ PRG (Blum–Blum–Shub)
aliases: []
id: red-qr-to-prg-bbs86
kind: implication
hypotheses: [qr]
conclusion: prg
class: fully-black-box
model: standard
source:
  - "[[BBS86 - A Simple Unpredictable Pseudo-Random Number Generator|BBS86]]"
security-loss: "a factor m in the output length, from Yao's next-bit hybrid"
rationale:
  class: "The generator only squares modulo the sampled Blum integer, and the reduction runs any distinguisher only as an oracle to predict the low-order bit, which decides quadratic residuosity."
---

# QR ⇒ PRG (Blum–Blum–Shub)

## Statement

If [[quadratic-residuosity|QR]] is hard for Blum integers, the generator that squares a uniform quadratic residue $x_0$ modulo $N$ repeatedly, $x_{i+1} = x_i^2 \bmod N$, and outputs $\mathrm{lsb}(x_1), \ldots, \mathrm{lsb}(x_m)$ is a [[pseudorandom-generator|PRG]] — [[BBS86 - A Simple Unpredictable Pseudo-Random Number Generator|BBS86]].

## Sketch

Squaring permutes $\mathrm{QR}_N$, and the quadratic-residue square root of $y^2$ is $y$ or $N - y$ according to whether $y \in \mathrm{QR}_N$; these have different least significant bits since $N$ is odd. A predictor of $\mathrm{lsb}(x_i)$ from $x_{i+1}$ therefore decides quadratic residuosity of elements with Jacobi symbol $+1$, and by the next-bit test, read from the end of the sequence, the output is pseudorandom — [[BBS86 - A Simple Unpredictable Pseudo-Random Number Generator|BBS86]].

## Notes

- Efficiency: one modular squaring per output bit — [[BBS86 - A Simple Unpredictable Pseudo-Random Number Generator|BBS86]].
- Hardness of factoring Blum integers already suffices: [[factoring-with-known-factor-structure-to-prg|Factoring ⇒ PRG]] — [[VV84 - Efficient and Secure Pseudo-Random Number Generation|VV84]].
