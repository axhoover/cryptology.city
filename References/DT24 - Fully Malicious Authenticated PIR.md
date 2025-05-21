---
title: "Fully Malicious Authenticated PIR"
source: "https://eprint.iacr.org/2023/1804"
authors: "Marian Dietz, Stefano Tessaro"
venue: "CRYPTO 2024"
published: 2023-11-22
created: 2025-01-23
tags:
  - "paper"
alias: "DT24"
---
# Fully Malicious Authenticated PIR
URL: https://eprint.iacr.org/2023/1804
Authors: Marian Dietz, Stefano Tessaro
## Abstract
Authenticated PIR enables a server to initially commit to a database of $N$ items, for which a client can later privately obtain individual items with complexity sublinear in $N$, with the added guarantee that the retrieved item is consistent with the committed database. A crucial requirement is privacy with abort, i.e., the server should not learn anything about a query even if it learns whether the client aborts.

This problem was recently considered by Colombo et al. (USENIX '23), who proposed solutions secure under the assumption that the database is committed to honestly. Here, we close this gap for their DDH-based scheme, and present a solution that tolerates fully malicious servers that provide potentially malformed commitments. Our scheme has communication and client computational complexity $\mathcal{O}_{\lambda}(\sqrt{N})$, does not require any additional assumptions, and does not introduce heavy machinery (e.g., generic succinct proofs). We do so by introducing validation queries, which, from the server's perspective, are computationally indistinguishable from regular PIR queries. Provided that the server succeeds in correctly answering $\kappa$ such validation queries, the client is convinced with probability $1-\frac{1}{2^{\kappa}}$ that the server is unable to break privacy with abort.