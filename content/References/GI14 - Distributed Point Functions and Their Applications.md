---
title: Distributed Point Functions and Their Applications
source: https://link.springer.com/chapter/10.1007/978-3-642-55220-5_35
authors: Niv Gilboa, Yuval Ishai
venue: Eurocrypt 2014
published: 2014-05-01
aliases:
  - GI14
---
# Distributed Point Functions and Their Applications
URL: https://link.springer.com/chapter/10.1007/978-3-642-55220-5_35
Authors: Niv Gilboa, Yuval Ishai

## Abstract
For $x, y \in \{0, 1\}^*$, the point function $P_{x, y}$ is defined by $P_{x, y}(x) = y$ and $P_{x, y}(x') = 0^{|y|}$ for all $x' \neq x$. We introduce the notion of a *distributed point function* (DPF), which is a keyed function family $F_k$ with the following property. Given $x, y$ specifying a point function, one can efficiently generate a key pair $(k_0, k_1)$ such that: (1) $F_{k_0} \oplus F_{k_1} = P_{x, y}$, and (2) each of $k_0$ and $k_1$ hides $x$ and $y$. Our main result is an efficient construction of a DPF under the (minimal) assumption that a one-way function exists. Distributed point functions have applications to private information retrieval (PIR) and related problems, as well as to worst-case to average-case reductions. Concretely, assuming the existence of a strong one-way function, we obtain the following applications. 

- **Polylogarithmic 2-server binary PIR**. We present the first 2-server computational PIR protocol in which the length of each query is polylogarithmic in the database size $n$ and the answers consist of a single bit each. This improves over the $2^{O(\log n)}$ query length of the protocol of Chor and Gilboa (STOC ’97). Similarly, we get a polylogarithmic “PIR writing” scheme, allowing secure non-interactive updates of a database shared between two servers. Assuming just a standard one-way function, we get the first 2-server private keyword search protocol in which the query length is polynomial in the keyword size, the answers consist of a single bit, and there is no error probability. In all these protocols, the computational cost on the server side is comparable to applying a symmetric encryption scheme to the entire database.
- **Worst-case to average-case reductions**. We present the first worst-case to average-case reductions for PSPACE and EXPTIME complete languages that require only a constant number of oracle queries. These reductions complement a recent negative result of Watson (TOTC ’12).