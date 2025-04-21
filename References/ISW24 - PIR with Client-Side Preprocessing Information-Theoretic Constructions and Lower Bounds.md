---
title: "PIR with Client-Side Preprocessing: Information-Theoretic Constructions and Lower Bounds"
source: https://eprint.iacr.org/2024/976
authors: Yuval Ishai, Elaine Shi, Daniel Wichs
venue: CRYPTO 2024
published: 2024-06-17
aliases:
  - ISW24
---
# PIR with Client-Side Preprocessing: Information-Theoretic Constructions and Lower Bounds
URL: https://eprint.iacr.org/2024/976
Authors: Yuval Ishai, Elaine Shi, Daniel Wichs

## Abstract
It is well-known that classical Private Information Retrieval (PIR) schemes without preprocessing must suffer from linear server computation per query. Moreover, any such single-server PIR with sublinear bandwidth must rely on public-key cryptography. Several recent works showed that these barriers pertaining to classical PIR can be overcome by introducing a preprocessing phase where each client downloads a small hint that helps it make queries subsequently. Notably, the Piano PIR scheme (and subsequent improvements) showed that with such a client-side preprocessing, not only can we have PIR with sublinear computation and bandwidth per query, but somewhat surprisingly, we can also get it using only symmetric-key cryptography (i.e., one-way functions).

In this paper, we take the question of minimizing cryptographic assumptions to an extreme. In particular, we are the first to explore the landscape of information theoretic single-server preprocessing PIR. We make contributions on both the upper- and lower-bounds fronts. First, we show new information-theoretic constructions with various non-trivial performance tradeoffs between server computation, client space and bandwidth. Second, we prove a (nearly) tight lower bound on the tradeoff between the client space and bandwidth in information-theoretic constructions. Finally, we prove that any computational scheme that overcomes the information-theoretic lower bound and satisfies a natural syntactic requirement (which is met by all known constructions) would imply a hard problem in the complexity class SZK. In particular, this shows that Piano achieves (nearly) optimal client space and bandwidth tradeoff subject to making a black-box use of a one-way function. Some of the techniques we use for the above results can be of independent interest.