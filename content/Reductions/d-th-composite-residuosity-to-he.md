---
type: reduction
status: draft
title: "$d$-th Composite Residuosity ⇒ HE"
aliases: []
id: red-d-th-composite-residuosity-to-he
kind: implication
hypotheses: [d-th-composite-residuosity]
conclusion: he
class: unstated
model: standard
source:
  - "[[DJ01 - A Generalisation, a Simplification and Some Applications of Paillier's Probabilistic Public-Key System|DJ01]]"
security-loss: ""
---

# $d$-th Composite Residuosity ⇒ HE

[[decisional-composite-residuosity#d-th-composite-residuosity|$d$-th Composite Residuosity]] implies [[homomorphic-encryption|HE]].

## Statement

Under [[decisional-composite-residuosity#d-th-composite-residuosity|$d$-th composite residuosity]] — hardness of distinguishing $n^d$-th residues modulo $n^{d+1}$ from uniform — the Damgård–Jurik cryptosystem is an IND-CPA-secure additively [[homomorphic-encryption|homomorphic encryption]] scheme: for an RSA modulus $n$, $\Enc(\pk, m; r) = (1+n)^m \cdot r^{n^d} \bmod n^{d+1}$ encrypts $m \in \ZZ_{n^d}$, the product of two ciphertexts encrypts $m_1 + m_2 \bmod n^d$, and $d = 1$ is Paillier [[DJ01 - A Generalisation, a Simplification and Some Applications of Paillier's Probabilistic Public-Key System|DJ01]]. For every $d$ the $d$-th assumption is equivalent to [[decisional-composite-residuosity|DCR]] [[DJ01 - A Generalisation, a Simplification and Some Applications of Paillier's Probabilistic Public-Key System|DJ01]].

## Sketch

$\Eval$ for addition is multiplication modulo $n^{d+1}$. Decryption raises the ciphertext to a secret exponent that is $0 \bmod \lambda$ and $1 \bmod n^d$, with $\lambda = \mathrm{lcm}(p-1, q-1)$; this kills the $r^{n^d}$ component and leaves $(1+n)^m$, from which $m$ is read off digit by digit modulo $n, n^2, \ldots, n^d$ using the binomial expansion.

## Notes

`class: unstated`: [[DJ01 - A Generalisation, a Simplification and Some Applications of Paillier's Probabilistic Public-Key System|DJ01]] state no reduction notion, and the hypothesis is a hardness assumption rather than a primitive, so the RTV04 axes do not apply.

- `d-th-composite-residuosity` is a section of [[decisional-composite-residuosity|DCR]], not its own page.
