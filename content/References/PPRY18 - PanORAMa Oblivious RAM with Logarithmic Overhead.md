---
type: reference
status: stub
title: "PPRY18"
source: https://eprint.iacr.org/2018/373
authors: Sarvar Patel, Giuseppe Persiano, Mariana Raykova, Kevin Yeo
venue: FOCS 2018
published: 2018
aliases:
  - PPRY18
  - PanORAMa
cryptobib_key: FOCS:PPRY18
---

# [PPRY18] PanORAMa: Oblivious RAM with Logarithmic Overhead

**Authors:** Sarvar Patel, Giuseppe Persiano, Mariana Raykova, Kevin Yeo | **Venue:** FOCS 2018 | [Source](https://eprint.iacr.org/2018/373)

## Abstract

We present PanORAMa, the first Oblivious RAM construction that achieves communication overhead $O(\log N \cdot \log \log N)$ for a database of $N$ blocks and for any block size $B=\Omega(\log N)$ while requiring client memory of only a constant number of memory blocks. Our scheme can be instantiated in the “balls and bins” model in which Goldreich and Ostrovsky [JACM 96] showed an $\Omega(\log N)$ lower bound for ORAM communication.

Our construction follows the hierarchical approach to ORAM design and relies on two main building blocks of independent interest: a _new oblivious hash table construction_ with improved amortized $O\left( \log N + \text{poly}(\log \log \lambda) \right)$ communication overhead for security parameter $\lambda$ and $N = \text{poly}(\lambda)$, assuming its input is randomly shuffled; and a complementary _new oblivious random multi-array shuffle construction_, which shuffles $N$ blocks of data with communication $O(N \log\log \lambda + \frac{N\log N}{\log \lambda})$ when the input has a certain level of entropy. We combine these two primitives to improve the shuffle time in our hierarchical ORAM construction by avoiding heavy oblivious shuffles and leveraging entropy remaining in the merged levels from previous shuffles. As a result, the amortized shuffle cost is asymptotically the same as the lookup complexity in our construction.
