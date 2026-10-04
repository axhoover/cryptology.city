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
rationale:
  class: "The ElGamal construction uses only the group generator, with homomorphic evaluation the componentwise group product, and the fixed reduction builds the public key and challenge ciphertext from the DDH challenge and runs any CPA adversary once as an oracle."
---

# DDH ⇒ Multiplicatively homomorphic encryption

## Statement

The ElGamal scheme of [[ElGamal85 - A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms|ElGamal85]] over $(\GG, g, p) \gets \GrGen(1^\secpar)$, with $\pk = y = g^x$ and $\Enc(\pk, m; r) = (g^r, m \cdot y^r)$ for $m \in \GG$, is [[homomorphic-encryption#multiplicatively-homomorphic-encryption|multiplicatively homomorphic]]: the componentwise product of encryptions of $m_1$ and $m_2$ is distributed exactly as a fresh encryption of $m_1 m_2$ — standard. It is semantically secure iff [[decisional-diffie-hellman|DDH]] is hard for $\GrGen$ — [[TY98 - On the Security of ElGamal Based Encryption|TY98]].

## Sketch

$(g^{r_1}, m_1 y^{r_1}) \cdot (g^{r_2}, m_2 y^{r_2}) = (g^{r_1 + r_2}, m_1 m_2 \cdot y^{r_1 + r_2})$, and $r_1 + r_2 \bmod p$ is uniform in $\ZZ_p$ when $r_1$ is. CPA security is the reduction on [[ddh-to-pke-elgamal85|DDH ⇒ PKE]]: on DDH challenge $(X, Y, Z)$ set $\pk = X$ and answer the challenge query with $(Y, m_b \cdot Z)$.

## Notes

- ElGamal85 predates the DDH assumption; the DDH-based CPA proof is later — [[TY98 - On the Security of ElGamal Based Encryption|TY98]].
