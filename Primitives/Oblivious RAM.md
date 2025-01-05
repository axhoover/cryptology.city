---
aliases:
  - ORAM
---
# Oblivious RAM (ORAM)
Oblivious RAM (ORAM) was first introduced by [[GO96 - Software protection and simulation on oblivious RAMs|GO96]]. It is a primitive that provides a generic compilation of any random-access memory (RAM) program to one which hides the accesses pattern of the underlying RAM.

**Note**: Oblivious RAM schemes can provide statistical or unconditional security against adveraries who only know which array indices are accessed. However, in practice one almost always needs to deploy ORAM together with standard symmetric encryption.

## Definition
Throughout, we use the following notation. All oblivious RAM schemes are defined with respect to a key space $\mathsf{KS}_p$, state space $\mathsf{ST}_p$, virtual array size $N_1$ and blocks $\mathsf{B}_1$, and physical array size $N_2$ and blocks $\mathsf{B}_2$. We additionally assume $\bot \in \mathsf{ST}_p$ and $\bot \notin \mathsf{B}_1$. Furthermore, we define the sets:

- $\mathsf{RdOps}_j = {1, \ldots, N_j}$
- $\mathsf{WrOps}_j = {(i, b) \mid i \in \mathsf{RdOps}_j, b \in \mathsf{B}_j}$
- $\mathsf{Ops}_j = \mathsf{RdOps}_j \cup \mathsf{WrOps}_j$

These are the allowed operations for the virtual array ($j = 1$) and the physical array ($j = 2$).
### Syntax
An $r$-round Oblivious RAM (ORAM) is a tuple of efficient functions $(\mathsf{Gen}, \mathsf{Acc}_1, \ldots, \mathsf{Acc}_r, \mathsf{Out})$ such that:

The above functions describe the processing of the Oblivious RAM query. They are used in the following way to process a query at index $i$, for a physical array $M_2$:

### Correctness
TODO

### Security
TODO
An ORAM is secure if for all efficient $\mathsf{D}$, there exists a negligible function $\nu$, such that

### Variations


## Other results
- Any Oblivious RAM over an array of $n$ elements must incur $\Omega(\log n)$ amortized overhead blow-up. [[GO96 - Software protection and simulation on oblivious RAMs|GO96]] and [[LN18 - Yes, There is an Oblivious RAM Lower Bound!|LN18]]
- Any one-round balls-in-bins ORAM must have $\Omega(\sqrt{n})$ overhead or storage. [[CDH20 - A Lower Bound for One-Round Oblivious RAM|CDH20]]