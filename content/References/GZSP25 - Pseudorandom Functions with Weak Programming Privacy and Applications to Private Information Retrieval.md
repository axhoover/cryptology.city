---
title: Pseudorandom Functions with Weak Programming Privacy and Applications to Private Information Retrieval
source: https://eprint.iacr.org/2025/300
authors: Ashrujit Ghoshal, Mingxun Zhou, Elaine Shi, Bo Peng
venue: Eurocrypt 2025
published: 2025-02-20
aliases:
  - GZSP25
---
# Pseudorandom Functions with Weak Programming Privacy and Applications to Private Information Retrieval
URL: https://eprint.iacr.org/2025/300
Authors: Ashrujit Ghoshal, Mingxun Zhou, Elaine Shi, Bo Peng

## Abstract
Although privately programmable pseudorandom functions (PPPRFs) are known to have numerous applications, so far, the only known constructions rely on Learning with Error (LWE) or indistinguishability obfuscation.  We show how to construct a relaxed PPPRF with only one-way functions (OWF). The resulting PPPRF satisfies $1/\textsf{poly}$ security and works for polynomially sized input domains. Using the resulting PPPRF, we can get new results for preprocessing Private Information Retrieval (PIR) that improve the state of the art. Specifically, we show that relying only on OWF, we can get a 2-server preprocessing PIR with polylogarithmic bandwidth while consuming $\widetilde{O}_\lambda(N^{\frac{1}{2} + \epsilon})$ client space and $N^{1+\epsilon}$ server space for an arbitrarily small constant $\epsilon \in (0, 1)$. In the 1-server setting, we get a preprocessing PIR from OWF that achieves polylogarithmic online bandwidth and $\widetilde{O}_\lambda(N^{\frac{1}{2} + \epsilon})$ offline bandwidth, while preserving the same client and server space as before. Our result, in combination with the lower bound of Ishai, Shi, and Wichs (CRYPTO'24), establishes a tight understanding of the bandwidth and client space tradeoff for 1-server preprocessing PIR from Minicrypt assumptions. Interestingly, we are also the first to show non-trivial ways to combine client-side and server-side preprocessing to get improved results for PIR.