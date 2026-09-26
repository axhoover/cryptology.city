---
type: reduction
status: draft
title: "DCR ⇒ Partially homomorphic encryption (PHE)"
aliases: []
id: red-dcr-to-partially-homomorphic-encryption-phe-pai99
kind: implication
hypotheses: [dcr]
conclusion: additively-homomorphic-encryption
class: unstated
model: standard
source:
  - "[[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]]"
security-loss: "Tight: one call to the IND-CPA adversary; semantic security is equivalent to DCR."
---

# DCR ⇒ Partially homomorphic encryption (PHE)

[[decisional-composite-residuosity|DCR]] implies [[homomorphic-encryption#partially-homomorphic-encryption-phe|Partially homomorphic encryption (PHE)]].

## Statement

Under [[decisional-composite-residuosity|DCR]], the Paillier cryptosystem is an IND-CPA-secure [[public-key-encryption|PKE]] that is additively homomorphic: for an RSA modulus $n$ and $g \in \ZZ_{n^2}^*$ of order divisible by $n$ (e.g. $g = n+1$), $\Enc(\pk, m; r) = g^m \cdot r^n \bmod n^2$ with $m \in \ZZ_n$ and $r \getsr \ZZ_n^*$, and $\Enc(\pk, m_1; r_1) \cdot \Enc(\pk, m_2; r_2) \bmod n^2$ encrypts $m_1 + m_2 \bmod n$ [[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]]. Semantic security of the scheme is equivalent to DCR [[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]].

## Sketch

An encryption of $m$ is $g^m$ times a random $n$-th residue, so a DCR challenge $z$ embeds as $c^* = g^{m_b} \cdot z \bmod n^2$: if $z$ is an $n$-th residue, $c^*$ is a fresh encryption of $m_b$; if $z$ is uniform, $c^*$ is independent of $b$. The reduction runs the IND-CPA adversary once.

## Notes

`class: unstated`: [[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]] states no reduction notion, and the hypothesis is a hardness assumption rather than a primitive, so the RTV04 axes do not apply.

- Damgård–Jurik generalize the scheme to modulus $n^{d+1}$ and message space $\ZZ_{n^d}$ for any $d \ge 1$, still additively homomorphic and semantically secure under DCR — [[DJ01 - A Generalisation, a Simplification and Some Applications of Paillier's Probabilistic Public-Key System|DJ01]]
- `additively-homomorphic-encryption` is a variant id resolving to the PHE section of [[homomorphic-encryption|HE]], not its own page.
