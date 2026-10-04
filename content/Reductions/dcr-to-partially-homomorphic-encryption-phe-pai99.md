---
type: reduction
status: draft
title: "DCR ⇒ Additively homomorphic encryption"
aliases: []
id: red-dcr-to-partially-homomorphic-encryption-phe-pai99
kind: implication
hypotheses: [dcr]
conclusion: additively-homomorphic-encryption
class: fully-black-box
model: standard
source:
  - "[[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]]"
security-loss: "Tight: one call to the IND-CPA adversary; semantic security is equivalent to DCR."
rationale:
  class: "Pai99 state no reduction notion; the construction uses only the RSA-modulus sampler, and the reduction embeds the DCR challenge in the challenge ciphertext and runs the IND-CPA adversary once as an oracle."
---

# DCR ⇒ Additively homomorphic encryption

## Statement

Under [[decisional-composite-residuosity|DCR]], the Paillier cryptosystem is an IND-CPA-secure [[public-key-encryption|PKE]] that is [[homomorphic-encryption#additively-homomorphic-encryption|additively homomorphic]]: for an RSA modulus $n$ and $g \in \ZZ_{n^2}^*$ of order divisible by $n$ (e.g. $g = n+1$), $\Enc(\pk, m; r) = g^m \cdot r^n \bmod n^2$ with $m \in \ZZ_n$ and $r \getsr \ZZ_n^*$, and $\Enc(\pk, m_1; r_1) \cdot \Enc(\pk, m_2; r_2) \bmod n^2$ encrypts $m_1 + m_2 \bmod n$ — [[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]]. Semantic security of the scheme is equivalent to DCR — [[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]].

## Sketch

An encryption of $m$ is $g^m$ times a random $n$-th residue, so a DCR challenge $z$ embeds as $c^* = g^{m_b} \cdot z \bmod n^2$: if $z$ is an $n$-th residue, $c^*$ is a fresh encryption of $m_b$; if $z$ is uniform, $c^*$ is independent of $b$. The reduction runs the IND-CPA adversary once.

## Notes

- Damgård–Jurik generalize the scheme to modulus $n^{d+1}$ and message space $\ZZ_{n^d}$ for any $d \ge 1$, still additively homomorphic and semantically secure under DCR ([[d-th-composite-residuosity-to-he|higher-degree composite residuosity ⇒ additively homomorphic encryption]]) — [[DJ01 - A Generalisation, a Simplification and Some Applications of Paillier's Probabilistic Public-Key System|DJ01]].
- The Paillier cryptosystem admits threshold decryption ([[dkg-and-he-to-tpke|DCR ⇒ TPKE]]) — [[FPS00 - Sharing Decryption in the Context of Voting or Lotteries|FPS00]].
