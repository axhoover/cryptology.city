---
type: reference
status: stub
title: "DPSZ12"
source: https://eprint.iacr.org/2011/535
authors: Ivan Damgård, Valerio Pastro, Nigel P. Smart, Sarah Zakarias
venue: CRYPTO 2012
published: 2012
aliases:
  - DPSZ12
cryptobib_key: C:DPSZ12
---

# [DPSZ12] Multiparty Computation from Somewhat Homomorphic Encryption

**Authors:** Ivan Damgård, Valerio Pastro, Nigel P. Smart, Sarah Zakarias | **Venue:** CRYPTO 2012 | [Source](https://eprint.iacr.org/2011/535)

## Abstract

We propose a general multiparty computation protocol secure against an active adversary corrupting up to $n-1$ of the $n$ players. The protocol may be used to compute securely arithmetic circuits over any finite field $\FF_{p^k}$. Our protocol consists of a preprocessing phase that is both independent of the function to be computed and of the inputs, and a much more efficient online phase where the actual computation takes place. The online phase is unconditionally secure and has total computational (and communication) complexity linear in $n$, the number of players, where earlier work was quadratic in $n$. Hence, the work done by each player in the online phase is independent of $n$ and moreover is only a small constant factor larger than what one would need to compute the circuit in the clear. It is the first protocol in the preprocessing model with these properties. We show a lower bound implying that for computation in large fields, our protocol is optimal. In practice, for 3 players, a secure 64-bit multiplication can be done in 0.05 ms. Our preprocessing is based on a somewhat homomorphic cryptosystem. We extend a scheme by Brakerski et al., so that we can perform distributed decryption and handle many values in parallel in one ciphertext. The computational complexity of our preprocessing phase is dominated by the public-key operations, we need
$O(n^2/s)$ operations per secure multiplication where $s$ is a parameter that increases with the security parameter of the cryptosystem. Earlier work in this model needed $\Omega(n^2)$ operations. In practice, the preprocessing prepares a secure 64-bit multiplication for 3 players in about 13 ms, which is 2-3 order of magnitude faster than the best previous results.
