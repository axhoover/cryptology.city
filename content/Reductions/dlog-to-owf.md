---
type: reduction
status: draft
title: "DLOG ⇒ OWF"
aliases: []
id: red-dlog-to-owf
kind: implication
hypotheses: [dlog]
conclusion: owf
class: fully-black-box
model: standard
source: folklore
security-loss: "additive $2^{-\\secpar}$, the statistical distance of $x \\bmod p$ from uniform on $\\ZZ_p$"
rationale:
  class: "One fixed function uses only the group generator and exponentiation, and the reduction forwards its DLOG challenge to any inverter as an oracle."
---

# DLOG ⇒ OWF

## Statement

Let $\GrGen$ be a group generator for which [[discrete-logarithm|DLOG]] is hard, let $r(\secpar)$ be the number of random bits it uses, and let $L(\secpar) = \ell(\secpar) + \secpar$, where $\ell(\secpar) = \poly(\secpar)$ bounds the bit length of every order $p$ that $\GrGen(1^\secpar)$ outputs. The function $f(\rho, x) := (\GrGen(1^\secpar; \rho), g^x)$ on $\bits^{r} \times \bits^{L}$, with $(\GG, g, p) = \GrGen(1^\secpar; \rho)$ and $x$ read as an integer, is a [[hash-function#preimage-resistance-one-wayness|one-way function]], with inversion advantage at most the DLOG advantage plus $2^{-\secpar}$: $x \bmod p$ is within statistical distance $p/2^{L} \le 2^{-\secpar}$ of uniform on $\ZZ_p$, and any preimage $(\rho', x')$ of $((\GG, g, p), X)$ has $g^{x'} = X$ in the same group of order $p$, so $x' \equiv \log_g X \pmod p$ — folklore.

## Notes

- For a general group generator, a PRG follows from this function through [[owf-to-prg-hill99|OWF ⇒ PRG]] — [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]]. For DLOG in $\ZZ_P^*$, the [[dlog-to-prg-bm84|Blum–Micali generator]] is a direct construction — [[BM84 - How to Generate Cryptographically Strong Sequences of Pseudo-Random Bits|BM84]].
