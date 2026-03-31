---
aliases:
  - Grover96
title: "Grover96 - A fast quantum mechanical algorithm for database search"
---

Lov K. Grover. "A fast quantum mechanical algorithm for database search." In _Proceedings of the 28th Annual ACM Symposium on Theory of Computing (STOC 1996)_, pp. 212–219. ACM, 1996.

Presented the quantum algorithm for unstructured search that finds a marked element among $N$ items in $O(\sqrt{N})$ quantum queries, compared to $\Omega(N)$ classically. This is optimal for quantum query complexity. In cryptographic terms, Grover's algorithm gives a generic quadratic speedup against symmetric-key primitives, implying that $n$-bit security requires $2n$-bit keys in the post-quantum setting (e.g., AES-256 for 128-bit post-quantum security).
