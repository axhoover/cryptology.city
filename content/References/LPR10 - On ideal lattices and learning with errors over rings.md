---
aliases:
  - LPR10
title: "LPR10 - On ideal lattices and learning with errors over rings"
---

Vadim Lyubashevsky, Chris Peikert, and Oded Regev. "On ideal lattices and learning with errors over rings." In _Advances in Cryptology — EUROCRYPT 2010_, Lecture Notes in Computer Science, vol. 6110, pp. 1–23. Springer, 2010.

Introduced Ring LWE (RLWE), which restricts LWE samples to a polynomial ring $R_q = \ZZ_q[x]/\langle\Phi_n(x)\rangle$ (typically the $n$-th cyclotomic ring). This yields $O(n \log n)$-size keys (vs. $O(n^2)$ for plain LWE) and admits fast NTT-based arithmetic. The paper also gives a quantum worst-case to average-case reduction from ideal lattice problems (Ideal-SVP) to Ring LWE.
