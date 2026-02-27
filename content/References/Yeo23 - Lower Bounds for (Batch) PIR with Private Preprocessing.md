---
title: "Yeo23"
source: https://eprint.iacr.org/2022/828
authors: Kevin Yeo
venue: preprint
published: 2022-06-23
aliases:
  - Yeo23
tags:
  - preprint
  - Yeo

---
# [Yeo23] Lower Bounds for (Batch) PIR with Private Preprocessing

**Authors:** Kevin Yeo | **Venue:** preprint | [Source](https://eprint.iacr.org/2022/828)

## Abstract
In this paper, we study (batch) private information retrieval with private preprocessing. Private information retrieval (PIR) is the problem where one or more servers hold a database of $n$ bits and a client wishes to retrieve the $i$-th bit in the database from the server(s). In PIR with private preprocessing (also known as offline-online PIR), the client is able to compute a private $r$-bit hint in an offline stage that may be leveraged to perform retrievals accessing at most $t$ entries. For privacy, the client wishes to hide index $i$ from an adversary that has compromised some of the servers. In the batch PIR setting, the client performs queries to retrieve the contents of multiple entries simultaneously.

We present a tight characterization for the trade-offs between hint size $r$ and number of accessed entries $t$ during queries. For any PIR scheme that enables clients to perform batch retrievals of $k$ entries, we prove a lower bound of $tr=\Omega(nk)$ when $r\ge k$. When $r < k$, we prove that $t=\Omega(n)$. Our lower bounds hold when the scheme errs with probability at most $1/15$ and against PPT adversaries that only compromise one out of $\ell$ servers for any $\ell=O(1)$.  Our work also closes the multiplicative logarithmic gap for the single query setting $(k=1)$ as our lower bound matches known constructions. Our lower bounds hold in the model where each database entry is stored without modification but each entry may be replicated arbitrarily.

Finally, we show connections between PIR and the online matrix-vector (OMV) conjecture from fine-grained complexity. We present barriers for proving lower bounds for two-server PIR schemes in general computational models as they would immediately imply the OMV conjecture.