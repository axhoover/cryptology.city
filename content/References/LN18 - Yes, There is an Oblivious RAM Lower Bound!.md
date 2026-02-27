---
title: "LN18"
URL: https://eprint.iacr.org/2018/423
authors: Kasper Green Larsen, Jesper Buus Nielsen
venue: CRYPTO 2018
publish date: 2018-05-18
aliases:
  - LN18
tags:
  - CRYPTO

---
# [LN18] Yes, There is an Oblivious RAM Lower Bound!

**Authors:** Kasper Green Larsen, Jesper Buus Nielsen | **Venue:** CRYPTO 2018

## Abstract
An Oblivious RAM (ORAM) introduced by Goldreich and Ostrovsky [JACM'96] is a (possibly randomized) RAM, for which the memory access pattern reveals no information about the operations performed. The main performance metric of an ORAM is the bandwidth overhead, i.e., the multiplicative factor extra memory blocks that must be accessed to hide the operation sequence. In their seminal paper introducing the ORAM, Goldreich and Ostrovsky proved an amortized $\Omega(\lg n)$ bandwidth overhead lower bound for ORAMs with memory size $n$. Their lower bound is very strong in the sense that it applies to the ``offline'' setting in which the ORAM knows the entire sequence of operations ahead of time.

However, as pointed out by Boyle and Naor [ITCS'16] in the paper ``Is there an oblivious RAM lower bound?'', there are two caveats with the lower bound of Goldreich and Ostrovsky: (1) it only applies to ``balls in bins'' algorithms, i.e., algorithms where the ORAM may only shuffle blocks around and not apply any sophisticated encoding of the data, and (2), it only applies to statistically secure constructions. Boyle and Naor showed that removing the ``balls in bins'' assumption would result in super linear lower bounds for sorting circuits, a long standing open problem in circuit complexity. As a way to circumventing this barrier, they also proposed a notion of an ``online'' ORAM, which is an ORAM that remains secure even if the operations arrive in an online manner. They argued that most known ORAM constructions work in the online setting as well.

Our contribution is an $\Omega(\lg n)$ lower bound on the bandwidth overhead of any online ORAM, even if we require only computational security and allow arbitrary representations of data, thus greatly strengthening the lower bound of Goldreich and Ostrovsky in the online setting. Our lower bound applies to ORAMs with memory size $n$ and any word size $r \geq 1$. The bound therefore asymptotically matches the known upper bounds when $r = \Omega(\lg^2 n)$.