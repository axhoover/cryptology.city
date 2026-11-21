---
type: reference
status: stub
title: "BZ14"
source: https://eprint.iacr.org/2013/642
authors: Dan Boneh, Mark Zhandry
venue: CRYPTO 2014
published: 2014
aliases:
  - BZ14
cryptobib_key: C:BonZha14
---

# [BZ14] Multiparty Key Exchange, Efficient Traitor Tracing, and More from Indistinguishability Obfuscation

**Authors:** Dan Boneh, Mark Zhandry | **Venue:** CRYPTO 2014 | [Source](https://eprint.iacr.org/2013/642)

## Abstract

In this work, we show how to use indistinguishability obfuscation (iO) to build multiparty key exchange, efficient broadcast encryption, and efficient traitor tracing. Our schemes enjoy several interesting properties that have not been achievable before:

- Our multiparty non-interactive key exchange protocol does not require a trusted setup. Moreover, the size of the published value from each user is independent of the total number of users.

- Our broadcast encryption schemes support distributed setup, where users choose their own secret keys rather than be given secret keys by a trusted entity. The broadcast ciphertext size is independent of the number of users.

- Our traitor tracing system is fully collusion resistant with short ciphertexts, secret keys, and public key. Ciphertext size is logarithmic in the number of users and secret key size is independent of the number of users. Our public key size is polylogarithmic in the number of users. The recent functional encryption system of Garg, Gentry, Halevi, Raykova, Sahai, and Waters also leads to a traitor tracing scheme with similar ciphertext and secret key size, but the construction in this paper is simpler and more direct. These constructions resolve an open problem relating to differential privacy.

- Generalizing our traitor tracing system gives a private broadcast encryption scheme (where broadcast ciphertexts reveal minimal information about the recipient set) with optimal size ciphertext.

Several of our proofs of security introduce new tools for proving security using indistinguishability obfuscation.
