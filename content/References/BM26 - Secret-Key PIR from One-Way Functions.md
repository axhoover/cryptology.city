---
title: "BM26"
authors: Nir Bitansky, Noam Mazor
venue: Preprint
published: 2026-05-08
created: 2026-05-20
aliases:
  - BM26
bibtex: |
  @misc{BM26,
    author = {Nir Bitansky and Noam Mazor},
    title  = {Secret-Key {PIR} from One-Way Functions},
    year   = {2026},
    note   = {Preprint, May 2026}
  }
---

# [BM26] Secret-Key PIR from One-Way Functions

**Authors:** Nir Bitansky, Noam Mazor | **Venue:** Preprint (2026)

## Abstract

In secret-key private information retrieval (SK-PIR), the client in an offline phase processes the database using a short secret key. In the online phase the client uses the secret key to make queries to the server, without revealing the entries accessed, using only sublinear communication $o(N)$ in the database size $N$. While (non-SK) PIR requires public-key cryptography, this paper shows that one-way functions suffice for SK-PIR with online communication $\tilde{O}(\sqrt{N})$. More generally, for any $N_c, N_s$ with $N_c \cdot N_s = N$, the construction achieves client-to-server communication $\tilde{O}(N_c)$ and server-to-client communication $N_s$. The construction is based on garbled circuits satisfying an *uncorrelated input encoding* property, shown to hold for point-and-permute garbling.
