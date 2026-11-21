---
type: reference
status: stub
title: "CGH12"
source: https://eprint.iacr.org/2010/144
authors: David Cash, Matthew Green, Susan Hohenberger
venue: PKC 2012
published: 2012
aliases:
  - CGH12
cryptobib_key: PKC:CasGreHoh12
---

# [CGH12] New Definitions and Separations for Circular Security

**Authors:** David Cash, Matthew Green, Susan Hohenberger | **Venue:** PKC 2012 | [Source](https://eprint.iacr.org/2010/144)

## Abstract

Traditional definitions of encryption security guarantee secrecy for any plaintext that can be computed by an outside adversary. In some settings, such as anonymous credential or disk encryption systems, this is not enough, because these applications encrypt messages that depend on the secret key. A natural question to ask is do standard definitions capture these scenarios? One area of interest is n-circular security where the ciphertexts E(pk_1, sk_2), E(pk_2, sk_3), ... E(pk\_{n-1}, sk_n), E(pk_n, sk_1) must be indistinguishable from encryptions of zero. Acar et al. (Eurocrypt 2010) provided a CPA-secure public key cryptosystem that is not 2-circular secure due to a distinguishing attack.

In this work, we consider a natural relaxation of this definition. Informally, a cryptosystem is n-weak circular secure if an adversary given the cycle E(pk_1, sk_2), E(pk_2, sk_3), ..., E(pk\_{n-1}, sk_n), E(pk_n, sk_1) has no significant advantage in the regular security game, (e.g., CPA or CCA) where ciphertexts of chosen messages must be distinguished from ciphertexts of zero. Since this definition is sufficient for some practical applications and the Acar et al. counterexample no longer applies, the hope is that it would be easier to realize, or perhaps even implied by standard definitions. We show that this is unfortunately not the case: even this weaker notion is not implied by standard definitions. Specifically, we show:

1. For symmetric encryption, under the minimal assumption that one-way functions exist, n-weak circular (CPA) security is not implied by CCA security, for
   any n. In fact, it is not even implied by authenticated encryption security, where ciphertext integrity is guaranteed.

2. For public-key encryption, under a number-theoretic assumption, 2-weak circular security is not implied by CCA security.

In both of these results, which also apply to the stronger circular security
definition, /we actually show for the first time an attack in which the adversary can recover the secret key of an otherwise-secure encryption scheme after an encrypted key cycle is published./ These negative results are an important step in answering deep questions about which attacks are prevented by commonly-used definitions and systems of encryption. They say to practitioners: if key cycles may arise in your system, then even if you use CCA-secure encryption, your system may break catastrophically; that is, a passive adversary might be able to recover your secret keys.
