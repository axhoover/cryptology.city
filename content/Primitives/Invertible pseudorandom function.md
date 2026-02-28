---
aliases:
  - iPRF
  - Invertible PRF
title: Invertible PRF
---
# Invertible PRF (iPRF)
An Invertible Pseudorandom Function (iPRF) is a strengthening of the traditional Pseudorandom Function (PRF). An iPRF allows a user to succinctly represent and evaluate a function that is indistinguishable from a random function, but also to invert the random function!

## Definition
An iPRF is a tuple of efficient functions $(\mathsf{Gen}, F, F^{-1})$, with respect to a keyspace $\mathcal{K}$, domain $\mathcal{D}$, and range $\mathcal{R}$, such that:
- $\mathsf{Gen}(1^{\lambda}) \to k$, is a randomized algorithm that takes a security parameter, and outputs a key $k \in \mathcal{K}$
- $F_k(x) \to y$, is a deterministic algorithm that takes a key $k\in \mathcal{K}$ and input $x\in \mathcal{D}$, and outputs an element $y\in \mathcal{R}$.
- $F_k^{-1}(y) \to X$, is a deterministic algorithm that takes a key $k\in \mathcal{K}$ and input $y\in \mathcal{R}$, and outputs a preimage set of elements $X \subseteq \mathcal{D}$

For iPRF efficiency and security, it is important to consider the sizes of the domain and range (both small and large domains). For domains that are much larger than ranges, the inversion function may not be efficient in its inputs, as the preimage could be very large.

Also, there exists a construction for any domain and range due to [[HPPY25 - Plinko Single-Server PIR with Efficient Updates via Invertible PRFs|HPPY25]] which satisfies a strong security notion.

### Correctness
An iPRF is correct if for all $k$, $y \in \mathcal{R}$, and $x \in \mathsf{F}_k^{-1}(y)$, $\mathsf{F}_k(x) = y$. This just implies that the pre-image function works as we would expect it to.

### Security
We define the advantage of a distinguisher $D$ as $$\text{Adv}^{\text{iprf}}_D(\lambda) \le \left|\Pr[D^{F_k,F^{-1}_k}(1^{\lambda}) = 1] - \Pr[D^{R,R^{-1}}(1^{\lambda}) = 1]\right|,$$where $k \gets \mathsf{Gen}(1^{\lambda})$, $R$ is a random function from $\mathcal{D}$ to $\mathcal{R}$, and $R^{-1}$ denotes the preimage function for $R$.

An iPRF is secure if for all efficient $D$, there exists a negligible function $\nu$, such that: $\text{Adv}^{\text{iprf}}_D(\lambda)\le \nu(\lambda)$.

## Other results
- [[One-way function|OWF]] implies the existence of iPRFs — [[HPPY25 - Plinko Single-Server PIR with Efficient Updates via Invertible PRFs|HPPY25]]
- [[Pseudorandom permutation|PRP]]s over large domains are iPRFs — [[Switching Lemma]]
