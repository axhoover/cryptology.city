---
type: reduction
status: draft
title: "DDH ⇒ Multiplicatively homomorphic encryption"
aliases: []
id: red-ddh-to-partially-homomorphic-encryption-phe-elgamal85
kind: implication
hypotheses: [ddh]
conclusion: multiplicatively-homomorphic-encryption
class: fully-black-box
model: standard
source:
  - "[[ElGamal85 - A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms|ElGamal85]]"
  - "[[TY98 - On the Security of ElGamal Based Encryption|TY98]]"
security-loss: "tight: one oracle call, advantage-preserving"
---

# DDH ⇒ Multiplicatively homomorphic encryption

[[decisional-diffie-hellman|DDH]] implies [[homomorphic-encryption#partially-homomorphic-encryption-phe|multiplicatively homomorphic encryption]].

## Statement

The ElGamal scheme over $(\GG, g, p) \gets \GrGen(1^\secpar)$, with $\pk = y = g^x$ and $\Enc(\pk, m; r) = (g^r, m \cdot y^r)$ for $m \in \GG$, is [[homomorphic-encryption#partially-homomorphic-encryption-phe|multiplicatively homomorphic]]: the componentwise product of encryptions of $m_1$ and $m_2$ is distributed exactly as a fresh encryption of $m_1 m_2$. The scheme is from [[ElGamal85 - A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms|ElGamal85]]; it is semantically secure iff DDH is hard for $\GrGen$ — [[TY98 - On the Security of ElGamal Based Encryption|TY98]]; the homomorphism — standard.

## Sketch

$(g^{r_1}, m_1 y^{r_1}) \cdot (g^{r_2}, m_2 y^{r_2}) = (g^{r_1 + r_2}, m_1 m_2 \cdot y^{r_1 + r_2})$, and $r_1 + r_2 \bmod p$ is uniform in $[p]$ when $r_1$ is. CPA security is the reduction on [[ddh-to-pke-elgamal85]]: on DDH challenge $(X, Y, Z)$ set $\pk = X$ and answer the challenge query with $(Y, m_b \cdot Z)$.

## Notes

`class: fully-black-box`: One fixed construction from the group generator, with homomorphic evaluation the componentwise group product, and one fixed reduction that runs the CPA adversary once as an oracle.

- ElGamal85 predates the DDH assumption; the citation attaches to the scheme, and the DDH-based CPA proof is later — [[TY98 - On the Security of ElGamal Based Encryption|TY98]].
