---
title: "CK20"
source: https://eprint.iacr.org/2019/1075
authors: Henry Corrigan-Gibbs, Dmitry Kogan
venue: Eurocrypt 2020
published: 2019-09-23
aliases:
  - CK20
tags:
  - Eurocrypt

---
# [CK20] Private Information Retrieval with Sublinear Online Time

**Authors:** Henry Corrigan-Gibbs, Dmitry Kogan | **Venue:** Eurocrypt 2020 | [Source](https://eprint.iacr.org/2019/1075)

## Abstract
We present the first protocols for private information retrieval that allow fast (sublinear-time) database lookups without increasing the server-side storage requirements. To achieve these efficiency goals, our protocols work in an offline/online model. In an offline phase, which takes place before the client has decided which database bit it wants to read, the client fetches a short string from the servers. In a subsequent online phase, the client can privately retrieve its desired bit of the database by making a second query to the servers. By pushing the bulk of the server-side computation into the offline phase (which is independent of the client's query), our protocols allow the online phase to complete very quickly—in time sublinear in the size of the database. Our protocols can provide statistical security in the two-server setting and computational security in the single-server setting. Finally, we prove that, in this model, our protocols are optimal in terms of the trade-off they achieve between communication and running time.