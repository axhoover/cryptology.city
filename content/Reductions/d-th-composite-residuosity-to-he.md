---
type: reduction
status: draft
title: "$d$-th Composite Residuosity ⇒ Additively homomorphic encryption"
aliases: []
id: red-d-th-composite-residuosity-to-he
kind: implication
hypotheses: [d-th-composite-residuosity]
conclusion: additively-homomorphic-encryption
class: fully-black-box
model: standard
source:
  - "[[DJ01 - A Generalisation, a Simplification and Some Applications of Paillier's Probabilistic Public-Key System|DJ01]]"
security-loss: ""
rationale:
  class: "DJ01 state no reduction notion; the construction uses only the RSA-modulus sampler, and the reduction embeds the residuosity challenge in the challenge ciphertext and runs the IND-CPA adversary once as an oracle."
---

# $d$-th Composite Residuosity ⇒ Additively homomorphic encryption

## Statement

For $d \ge 1$, under the [[decisional-composite-residuosity#d-th-composite-residuosity|higher-degree composite residuosity assumption]] with parameter $d$ — hardness of distinguishing $n^d$-th residues modulo $n^{d+1}$ from uniform — the Damgård–Jurik cryptosystem is an IND-CPA-secure [[homomorphic-encryption#additively-homomorphic-encryption|additively homomorphic encryption]] scheme for addition modulo $n^d$: for an RSA modulus $n$, $\Enc(\pk, m; r) = (1+n)^m \cdot r^{n^d} \bmod n^{d+1}$ encrypts $m \in \ZZ_{n^d}$, and the product of two ciphertexts encrypts $m_1 + m_2 \bmod n^d$ — [[DJ01 - A Generalisation, a Simplification and Some Applications of Paillier's Probabilistic Public-Key System|DJ01]]. The case $d = 1$ is Paillier's scheme ([[dcr-to-partially-homomorphic-encryption-phe-pai99|DCR ⇒ additively homomorphic encryption]]) — [[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]]. For every $d$ the assumption is equivalent to [[decisional-composite-residuosity|DCR]] — [[DJ01 - A Generalisation, a Simplification and Some Applications of Paillier's Probabilistic Public-Key System|DJ01]].

## Sketch

The reduction embeds a challenge $z$ as $c^* = (1+n)^{m_b} \cdot z \bmod n^{d+1}$: an $n^d$-th residue $z$ makes $c^*$ a fresh encryption of $m_b$, and a uniform $z$ makes $c^*$ uniform, independent of $b$. Decryption raises the ciphertext to a secret exponent that is $0 \bmod \lambda$ and $1 \bmod n^d$, with $\lambda = \mathrm{lcm}(p-1, q-1)$; this kills the $r^{n^d}$ component and leaves $(1+n)^m$, from which $m$ is read off digit by digit modulo $n, n^2, \ldots, n^d$ using the binomial expansion.
