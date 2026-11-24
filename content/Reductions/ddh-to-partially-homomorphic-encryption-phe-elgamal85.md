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
security-loss: "tight up to a factor 2: one run of the CPA adversary, whose advantage is exactly twice the DDH advantage of the reduction"
rationale:
  class: "The ElGamal construction uses only the group generator, with homomorphic evaluation the componentwise group product, and the fixed reduction builds the public key and challenge ciphertext from the DDH challenge and runs any CPA adversary once as an oracle."
---

# DDH ⇒ Multiplicatively homomorphic encryption

## Statement

The ElGamal scheme of [[ElGamal85 - A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms|ElGamal85]] over $(\GG, g, p) \gets \GrGen(1^\secpar)$, with $\pk = y = g^x$ and $\Enc(\pk, m; r) = (g^r, m \cdot y^r)$ for $m \in \GG$, is [[homomorphic-encryption#multiplicatively-homomorphic-encryption|multiplicatively homomorphic]]: the componentwise product of encryptions of $m_1$ and $m_2$ is distributed exactly as a fresh encryption of $m_1 m_2$ — standard. It is semantically secure iff [[decisional-diffie-hellman|DDH]] is hard for $\GrGen$ — [[TY98 - On the Security of ElGamal Based Encryption|TY98]]. With each group element's encoding padded to the maximum length, a polynomial in $\secpar$, all messages have one length; under DDH, $(g^r, m \cdot y^r)$ is indistinguishable from a pair of independent uniform elements of $\GG$ whatever $m$ is, so the scheme is IND-CPA-secure for every pair of group elements, and the reduction of the Sketch has DDH advantage exactly half the CPA advantage — standard.

## Sketch

$(g^{r_1}, m_1 y^{r_1}) \cdot (g^{r_2}, m_2 y^{r_2}) = (g^{r_1 + r_2}, m_1 m_2 \cdot y^{r_1 + r_2})$, and $r_1 + r_2 \bmod p$ is uniform in $\ZZ_p$ when $r_1$ is. For all $(a_1, b_1), (a_2, b_2) \in \GG^2$, the product $(a_1 a_2, b_1 b_2)$ decrypts to $b_1 b_2 (a_1 a_2)^{-x} = (b_1 a_1^{-x})(b_2 a_2^{-x})$, the product of the two decryptions. CPA security is the reduction on [[ddh-to-pke-elgamal85|DDH ⇒ CPA-secure PKE (ElGamal)]]: on DDH challenge $(X, Y, Z)$ set $\pk = X$, answer the challenge pair with $(Y, m_\beta \cdot Z)$ for $\beta \getsr \bits$, and output $0$ iff the CPA adversary $\calA$ outputs $\beta$; this guesses the DDH bit with probability $\frac12 \Pr[\Game^{\mathrm{cpa}}_{\PKE,\calA}(\secpar) = 1] + \frac14$, so its DDH advantage is $\frac12 \Adv^{\mathrm{cpa}}_{\PKE,\calA}(\secpar)$.

## Notes

- ElGamal85 predates the DDH assumption; the DDH-based CPA proof is later — [[TY98 - On the Security of ElGamal Based Encryption|TY98]].
