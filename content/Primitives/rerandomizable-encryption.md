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
unlisted: true
---

# Rerandomizable encryption

A public-key encryption scheme with a public rerandomization algorithm that maps any ciphertext to a fresh ciphertext of the same message, distributed as a fresh encryption of that message.

TODO: syntax and security definition.

# Variations

## Security against slightly super-polynomial adversaries

A rerandomizable encryption scheme is **secure against slightly super-polynomial adversaries** if for some $T(\secpar) = \secpar^{\omega(1)}$ every adversary running in time $T(\secpar)$ has IND-CPA advantage at most $1/T(\secpar)$. It strengthens ordinary IND-CPA security; fully homomorphic encryption from iO without circular security requires security of this kind — [[CLTV15 - Obfuscation of Probabilistic Circuits and Applications|CLTV15]].

<!-- BEGIN GENERATED participates-in 3f3924c52e88 -->

## Participates in

**Builds on Rerandomizable encryption**

- [[subexponential-io-and-rerandomizable-encryption-to-he-cltv15|Sub-exponential iO + Rerandomizable encryption ⇒ FHE (CLTV)]] (via [[rerandomizable-encryption#security-against-slightly-super-polynomial-adversaries|Security against slightly super-polynomial adversaries]])

**Produces Rerandomizable encryption**

- [[he-to-re-bl13|Strongly homomorphic encryption ⇒ RE]]

<!-- END GENERATED participates-in -->
