---
title: "BLVW19"
source: https://eprint.iacr.org/2018/279
authors: Zvika Brakerski, Vadim Lyubashevsky, Vinod Vaikuntanathan, Daniel Wichs
venue: Eurocrypt 2019
published: 2018-03-22
aliases:
  - BLVW19
tags:
  - Eurocrypt

---
# [BLVW19] Worst-Case Hardness for LPN and Cryptographic Hashing via Code Smoothing

**Authors:** Zvika Brakerski, Vadim Lyubashevsky, Vinod Vaikuntanathan, Daniel Wichs | **Venue:** Eurocrypt 2019 | [Source](https://eprint.iacr.org/2018/279)

## Abstract
We present a worst case decoding problem whose hardness reduces to that of solving the Learning Parity with Noise (LPN) problem, in some parameter regime. Prior to this work, no worst case hardness result was known for LPN (as opposed to syntactically similar problems such as Learning with Errors). The caveat is that this worst case problem is only mildly hard and in particular admits a quasi-polynomial time algorithm, whereas the LPN variant used in the reduction requires extremely high noise rate of $1/2 - 1/poly(n)$. Thus we can only show that ``very hard'' LPN is harder than some ``very mildly hard'' worst case problem. We note that LPN with noise $1/2 - 1/poly(n)$ already implies symmetric cryptography.

Specifically, we consider the ($n, m, w$)-nearest codeword problem (($n, m, w$)-NCP) which takes as input a generating matrix for a binary linear code in $m$ dimensions and rank $n$, and a target vector which is very close to the code (Hamming distance at most $w$), and asks to find the codeword nearest to the target vector. We show that for balanced (unbiased) codes and for relative error $w/m \approx \frac{\log^2 n}{n}$, ($n, m, w$)-NCP can be solved given oracle access to an LPN distinguisher with noise ratio $1/2 - 1/poly(n)$.

Our proof relies on a smoothing lemma for codes which we show to have further implications: We show that ($n, m, w$)-NCP with the aforementioned parameters lies in the complexity class $Search-BPP^{SZK}$ (i.e. reducible to a problem that has a statistical zero knowledge protocol) implying that it is unlikely to be $\mathcal{NP}$-hard. We then show that LPN with very low noise rate $\frac{\log^2(n)}{n}$ implies the existence of collision resistant hash functions (our aforementioned result implies that in this parameter regime LPN is also in $BPP^{SZK}$).