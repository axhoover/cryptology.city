---
type: primitive
status: stub
aliases:
  - RE
  - Rerandomizable encryption
title: Rerandomizable encryption
id: rerandomizable-encryption
variants:
  superpolynomially-secure-rerandomizable-encryption: "#security-against-slightly-super-polynomial-adversaries"
  statistically-rerandomizable-encryption: "#statistical-rerandomization-of-honest-ciphertexts"
unlisted: true
---

# Rerandomizable encryption

An IND-CPA-secure public-key encryption scheme with an efficient public algorithm $\mathsf{ReRand}$ such that for every $\pk$ output by $\KeyGen$, every message $m$ and every ciphertext $c$ in the support of $\Enc(\pk, m)$, $\mathsf{ReRand}(\pk, c)$ is distributed exactly as $\Enc(\pk, m)$. ElGamal, rerandomized by multiplying both components by a fresh encryption of the identity, is an example — standard.

TODO: syntax and security definition.

# Variations

## Statistical rerandomization of honest ciphertexts

A scheme is **statistically rerandomizable** if for every $\pk$ output by $\KeyGen$ and every message $m$, the pair $(c, \mathsf{ReRand}(\pk, c))$ for $c \gets \Enc(\pk, m)$ is statistically close to $(c, c')$ for an independent $c' \gets \Enc(\pk, m)$ — [[BL13 - Limits of Provable Security for Homomorphic Encryption|BL13]]. Exact rerandomization of every ciphertext in the support implies it.

## Security against slightly super-polynomial adversaries

A rerandomizable encryption scheme is **secure against slightly super-polynomial adversaries** if for some $T(\secpar) = \secpar^{\omega(1)}$ every adversary running in time $T(\secpar)$ has IND-CPA advantage at most $1/T(\secpar)$. It strengthens ordinary IND-CPA security; fully homomorphic encryption from iO without circular security requires security of this kind — [[CLTV15 - Obfuscation of Probabilistic Circuits and Applications|CLTV15]].

<!-- BEGIN GENERATED participates-in 4b9674de230c -->

## Participates in

**Builds on Rerandomizable encryption**

- [[rerandomizable-encryption-to-statistically-rerandomizable-encryption|RE ⇒ Statistically rerandomizable encryption]]
- [[subexponential-io-and-rerandomizable-encryption-to-he-cltv15|Sub-exponential iO + Rerandomizable encryption ⇒ Compact FHE (CLTV)]] (via [[rerandomizable-encryption#security-against-slightly-super-polynomial-adversaries|Security against slightly super-polynomial adversaries]])

**Produces Rerandomizable encryption**

- [[he-to-re-bl13|Strongly homomorphic encryption ⇒ Statistically rerandomizable encryption]] (via [[rerandomizable-encryption#statistical-rerandomization-of-honest-ciphertexts|Statistical rerandomization of honest ciphertexts]])
- [[rerandomizable-encryption-to-statistically-rerandomizable-encryption|RE ⇒ Statistically rerandomizable encryption]] (via [[rerandomizable-encryption#statistical-rerandomization-of-honest-ciphertexts|Statistical rerandomization of honest ciphertexts]])

<!-- END GENERATED participates-in -->
