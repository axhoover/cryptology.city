---
type: reference
status: stub
title: "ADW09"
source: https://eprint.iacr.org/2009/160
authors: Joël Alwen, Yevgeniy Dodis, Daniel Wichs
venue: CRYPTO 2009
published: 2009
aliases:
  - ADW09
cryptobib_key: C:AlwDodWic09
---

# [ADW09] Leakage-Resilient Public-Key Cryptography in the Bounded-Retrieval Model

**Authors:** Joël Alwen, Yevgeniy Dodis, Daniel Wichs | **Venue:** CRYPTO 2009 | [Source](https://eprint.iacr.org/2009/160)

## Abstract

We study the design of cryptographic primitives resilient to key leakage attacks, where an attacker can repeatedly and adaptively learn information about the secret key, subject only to the constraint that the overall amount of such information is bounded by some parameter $\ell$. We construct a variety of leakage-resilient public-key systems including the first known identification schemes (ID), signature schemes and authenticated key agreement protocols (AKA). Our main result is an efficient three-round leakage-resilient AKA in the Random Oracle model. This protocol ensures that session-keys are private and authentic even if (1) the adversary leaks a large fraction of the long-term secret keys of both users prior to the protocol execution and (2) the adversary completely learns the long-term secret keys after the protocol execution. In particular, our AKA protocol provides qualitatively stronger privacy guarantees than leakage-resilient public-encryption schemes (constructed in prior and concurrent works), since such schemes necessarily become insecure if the adversary can perform leakage attacks after seing a ciphertext.

Moreover, our schemes can be flexibly extended to the Bounded-Retrieval Model, allowing us to tolerate very large absolute amount of adversarial leakage $\ell$ (potentially many gigabytes of information), only by increasing the size of the secret key and without any other loss of efficiency in communication or computation. Concretely, given any leakage parameter $\ell$, security parameter $\lambda$, and any desired fraction $0< \delta \leq 1$, our schemes have the following properties:

(1) Secret key size is $\ell(1+\delta)+O(\lambda)$. In particular, the attacker can learn an approximately $(1-\delta)$ fraction of the secret key.

(2) Public key size is $O(\lambda)$, and independent of $\ell$.

(3) Communication complexity is $O(\lambda/\delta)$, and independent of $\ell$.

(4) All computation reads at most $O(\lambda/\delta^2)$ locations of the secret key, independently of $\ell$.

Lastly, we show that our schemes allow for repeated “invisible updates” of the secret key, allowing us to tolerate up to $\ell$ bits of leakage in between any two updates, and an unlimited amount of leakage overall. These updates require that the parties can securely store a short “master update key” (e.g. on a separate secure device protected against leakage), which is only used for updates and not during protocol execution. The updates are invisible in the sense that a party can update its secret key at any point in time, without modifying the public key or notifying the other users.
