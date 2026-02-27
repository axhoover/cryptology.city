---
aliases:
  - PRF
---
# Pseudorandom function (PRF)
A Pseudorandom Function (PRF) is a primitive that allows someone to succinctly represent a function that is indistinguishable from a random function. A user of a PRF generates a key, which it can use to evaluate a function at many points. Any efficient adversary, who only sees these inputs and outputs of the keyed function, cannot distinguish them from a random function.

## Definition
A Pseudorandom Function (PRF) is a tuple of efficient functions $(\mathsf{Gen}, \mathsf{F})$, with respect to a keyspace $\mathcal{K}$, domain $\mathcal{D}$, and range $\mathcal{R}$, such that:
- $\mathsf{Gen}(1^{\lambda}) \to k$, is a randomized algorithm that takes a security parameter, and outputs a key $k \in \mathcal{K}$,
- $F_k(x) \to y$, is a deterministic algorithm that takes a key $k\in \mathcal{K}$ and input $x\in \mathcal{D}$, and outputs an element $y\in \mathcal{R}$.

Generally, we assume that $|\mathcal{D}|$ is generally assumed to be "large," in the sense that it grows exponentially with the security parameter. If instead $| \mathcal{D} |$ is bounded by some polynomial in the security parameter, then the primitive is a "small-domain" PRF.

### Security
We define the advantage of a distinguisher $D$ as $$\text{Adv}^{\text{prf}}_D(\lambda) \le \left|\Pr[D^{F_k}(1^{\lambda}) = 1] - \Pr[D^{R}(1^{\lambda}) = 1]\right|,$$where $k \gets \mathsf{Gen}(1^{\lambda})$ and $R$ is a random function from $\mathcal{D}$ to $\mathcal{R}$.

A PRF is secure if for all efficient $D$, there exists a negligible function $\nu$, such that: $\text{Adv}^{\text{prf}}_D(\lambda)\le \nu(\lambda)$.

### Variations


## Other results

