---
aliases:
  - PRP
title: PRP
---
# Pseudorandom permutation
A Pseudorandom Permutation (PRP) is a basic primitive which allows someone to succinctly sample and represent a permutation which appears to be uniformly randomly selected. The user, who generates the key, can evaluate the permutation over some domain both forward and backward efficiently. These pseudorandom permutations are also the primitive which represents block ciphers, such as [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard).

## Definition

A PRP is a tuple of efficient functions $(\mathsf{Gen}, P, P^{-1})$, with respect to a keyspace $\mathcal{K}$, domain $\mathcal{D}$ such that:
- $\mathsf{Gen}(1^{\lambda}) \to k$, is a randomized algorithm that takes a security parameter, and outputs a key $k \in \mathcal{K}$
- $P_k(x) \to y$, is a deterministic algorithm that takes a key $k\in \mathcal{K}$ and input $x\in \mathcal{D}$, and outputs an element $y\in \mathcal{D}$.
- $P_k^{-1}(y) \to X$, is a deterministic algorithm that takes a key $k\in \mathcal{K}$ and input $y\in \mathcal{D}$, and outputs a preimage element $x\in \mathcal{D}$

Typically, we assume that $|\mathcal{D}|$ is "large," in the sense that it grows super-polynomially in the security parameter. If instead $|\mathcal{D}|$ is bounded by some polynomial in the security parameter, then the primitive is a "small-domain" PRP.

### Correctness
A PRP is _correct_ if for all $k$ and $x$, $P_k^{-1}(P_k(x)) = x$.

### Security
We define the advantage of a distinguisher $D$ as $$\text{Adv}^{\text{prp}}_D(\lambda) \le \left|\Pr[D^{P_k,P^{-1}_k}(1^{\lambda}) = 1] - \Pr[D^{\pi,\pi^{-1}}(1^{\lambda}) = 1]\right|,$$ where $k \gets \mathsf{Gen}(1^{\lambda})$ and $\pi$ is a random permutation over $\mathcal{D}$ (and $\pi^{-1}$ is its inverse).

A PRP is secure if for all efficient $D$, there exists a negligible function $\nu$, such that: $\text{Adv}^{\text{prp}}_D(\lambda)\le \nu(\lambda)$.

## Other results
- [[Pseudorandom function|PRF]]s imply the existence of large-domain PRPs — [[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]]
- PRPs imply the existence of large-domain [[Pseudorandom function|PRF]]s — [[Switching Lemma]]