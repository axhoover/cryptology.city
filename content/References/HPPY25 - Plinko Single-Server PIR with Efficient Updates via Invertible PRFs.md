---
title: "HPPY25"
source: https://eprint.iacr.org/2024/318
authors: Alexander Hoover, Sarvar Patel, Giuseppe Persiano, Kevin Yeo
venue: Eurocrypt 2025
published: 2024-02-23
aliases:
  - HPPY25
  - Plinko
tags:
  - Eurocrypt

---
# [HPPY25] Plinko: Single-Server PIR with Efficient Updates via Invertible PRFs

**Authors:** Alexander Hoover, Sarvar Patel, Giuseppe Persiano, Kevin Yeo | **Venue:** Eurocrypt 2025 | [Source](https://eprint.iacr.org/2024/318)

## Abstract
We study single-server private information retrieval (PIR) where a client wishes to privately retrieve the $x$-th entry from a database held by a server without revealing the index $x$. In our work, we focus on PIR with client pre-processing where the client may compute hints during an offline phase. The hints are then leveraged during queries to obtain sub-linear online time. We present Plinko that is the first single-server PIR with client pre-processing that obtains optimal trade-offs between client storage and total (client and server) query time for all parameters. Our scheme uses $t = \tilde{O}(n/r)$ query time for any client storage size $r$. This matches known lower bounds of $r \cdot t = \Omega(n)$ up to logarithmic factors for all parameterizations whereas prior works could only match the lower bound when $r = \tilde{O}(\sqrt{n})$. Moreover, Plinko is also the first updateable PIR scheme where an entry can be updated in worst-case $\tilde{O}(1)$ time.

As our main technical tool, we define the notion of an invertible pseudorandom function (iPRF) that generalizes standard PRFs to be equipped with an efficient inversion algorithm. We present a construction of an iPRF from one-way functions where forward evaluation runs in $\tilde{O}(1)$ time and inversion runs in time linear in the inverse set (output) size. Furthermore, our iPRF construction is the first that remains efficient and secure for arbitrary domain and range sizes (including small domains and ranges). In the context of single-server PIR, we show that iPRFs may be used to construct the first hint set representation where finding a hint containing an entry $x$ may be done in $\tilde{O}(1)$ time.