---
aliases:
  - PIR
  - IT-PIR
---
# Private Information Retrieval (PIR)
Private Information Retrieval (PIR) is a primitive that allows a client to access a specific element from a public array without revealing which array element was accessed, introduced by [[CGKS98 - Private information retrieval|CGKS98]].

## Definition
A $k$-server Private Information Retrieval (PIR) for a database of size $n$ is a tuple of efficient functions $(\mathsf{Query}, \mathsf{Answer}, \mathsf{Compute})$, with respect to randomness space $R$ such that:

### Syntax
- Generally, we consider the size of the initial queries to be $u$ bits each and the answers to be $d$ bits each.
- In general, we can consider the total communication of a PIR as $k(u + d)$.
- A PIR is non-trivial only so long as the communication is less than $n$.

### Correctness
A PIR is correct if for all $D \in {0, 1}^n$, $i \in [n]$, and $r \in R$ $$\mathsf{Recon}(i,a_1,\ldots,a_k ; r) = D[i]$$ where each $a_s \leftarrow \mathsf{Answer}(s, q_s, D)$ and $(q_1, \ldots, q_k) \leftarrow \mathsf{Query}(i; r)$.

### Privacy
A PIR is private if for every $i, j \in [n]$, $s \in [k]$, and $q \in {0, 1}^u$, $$\Pr_r[\mathsf{Query}(i; r)[s] = q] = \Pr_r[\mathsf{Query}(j; r)[s] = q].$$

Intuitively, this means that each server observes the same query uploaded with the same probability.

### Variations
- Single-server PIR
- Computational Multi-server PIR

## Other results
- The typical setting is the 1-bit array (also called database), since you can build a $w$-bit PIR using just $w$ copies of a 1-bit PIR.
- 