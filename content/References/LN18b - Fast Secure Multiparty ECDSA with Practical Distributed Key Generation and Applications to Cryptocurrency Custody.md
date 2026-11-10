---
type: reference
status: stub
title: "LN18b"
source: https://eprint.iacr.org/2018/987
authors: Yehuda Lindell, Ariel Nof
venue: ACM CCS 2018
published: 2018
aliases:
  - LN18b
cryptobib_key: CCS:LinNof18
---

# [LN18b] Fast Secure Multiparty ECDSA with Practical Distributed Key Generation and Applications to Cryptocurrency Custody

**Authors:** Yehuda Lindell, Ariel Nof | **Venue:** ACM CCS 2018 | [Source](https://eprint.iacr.org/2018/987)

## Abstract

ECDSA is a standardized signing algorithm that is widely used in TLS, code signing, cryptocurrency and more. Due to its importance, the problem of securely computing ECDSA in a distributed manner (known as threshold signing) has received considerable interest. Despite this interest, however, as of the time of publication of the conference version of this paper ([Lindel and Nof, ACM SIGSAC 18'), there had been no full threshold solution for more than two parties (meaning that any t-out-of-n parties can sign, security is preserved for any t−1 or fewer corrupted parties, and t ≤ n can be any value) that supports practical key distribution. All previous solutions for this functionality utilized Paillier homomorphic encryption, and efficient distributed Paillier key generation for more than two parties is not known.
In this paper, we present the first (again, for the conference version publication time) truly practical full threshold ECDSA signing protocol that has fast signing and key generation. This solves an old open problem and opens the door to many practical uses of threshold ECDSA signing that are in demand today. One of these applications is the construction of secure cryptocurrency wallets (where key-shares are spread over multiple devices, and so are hard to steal) and cryptocurrency custody solutions (where large sums of invested cryptocurrency are strongly protected by splitting the key between a bank/financial institution, the customer who owns the currency, and possibly a third-party trustee, in multiple shares at each). There is growing practical interest in such solutions, but prior to our work, these could not be deployed due to the need for a distributed key generation.
