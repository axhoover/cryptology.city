---
title: Doubly Efficient Private Information Retrieval and Fully Homomorphic RAM Computation from Ring LWE
source: https://eprint.iacr.org/2022/1703
authors: Wei-Kai Lin, Ethan Mook, Daniel Wichs
venue: STOC 2023
published: 2022-12-08
aliases:
  - LMW23
---
# Doubly Efficient Private Information Retrieval and Fully Homomorphic RAM Computation from Ring LWE
URL: https://eprint.iacr.org/2022/1703
Authors: Wei-Kai Lin, Ethan Mook, Daniel Wichs

## Abstract
A (single server) private information retrieval (PIR) allows a client to read data from a public database held on a remote server, without revealing to the server which locations she is reading. In a doubly efficient PIR (DEPIR), the database is first preprocessed, but the server can subsequently answer any client's query in time that is sub-linear in the database size. Prior work gave a plausible candidate for a public-key variant of DEPIR, where a trusted party is needed to securely preprocess the database and generate a corresponding public key for the clients; security relied on a new non-standard code-based assumption and a heuristic use of ideal obfuscation. In this work we construct the stronger unkeyed notion of DEPIR, where the preprocessing is a deterministic procedure that the server can execute on its own. Moreover, we prove security under just the standard ring learning-with-errors (RingLWE) assumption. For a database of size $N$ and any constant $\varepsilon > 0$, the preprocessing run-time and size is $O(N^{1+\varepsilon})$, while the run-time and communication-complexity of each PIR query is $polylog(N)$. We also show how to update the preprocessed database in time $O(N^{\varepsilon})$. Our approach is to first construct a standard PIR where the server's computation consists of evaluating a multivariate polynomial; we then convert it to a DEPIR by preprocessing the polynomial to allow for fast evaluation, using the techniques of Kedlaya and Umans (STOC '08).

Building on top of our DEPIR, we construct general fully homomorphic encryption for random-access machines (RAM-FHE), which allows a server to homomorphically evaluate an arbitrary RAM program $P$ over a client's encrypted input $x$ and the server's preprocessed plaintext input $y$ to derive an encryption of the output $P(x,y)$ in time that scales with the RAM run-time of the computation rather than its circuit size. Prior work only gave a heuristic candidate construction of a restricted notion of RAM-FHE. In this work, we construct RAM-FHE under the RingLWE assumption with circular security. For a RAM program $P$ with worst-case run-time $T$, the homomorphic evaluation runs in time $T^{1+\varepsilon} \cdot polylog(|x| + |y|)$.