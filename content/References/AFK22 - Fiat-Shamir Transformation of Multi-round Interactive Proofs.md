---
type: reference
status: stub
title: "AFK22"
source: https://eprint.iacr.org/2021/1377
authors: Thomas Attema, Serge Fehr, Michael Klooß
venue: TCC 2022
published: 2022
aliases:
  - AFK22
cryptobib_key: TCC:AttFehKlo22
---

# [AFK22] Fiat-Shamir Transformation of Multi-round Interactive Proofs

**Authors:** Thomas Attema, Serge Fehr, Michael Klooß | **Venue:** TCC 2022 | [Source](https://eprint.iacr.org/2021/1377)

## Abstract

The celebrated Fiat-Shamir transformation turns any public-coin interactive proof into a non-interactive one, which inherits the main security properties (in the random oracle model) of the interactive version. While originally considered in the context of 3-move public-coin interactive proofs, i.e., so-called $\Sigma$-protocols, it is now applied to multi-round protocols as well. Unfortunately, the security loss for a $(2\mu + 1)$-move protocol is, in general, $Q^\mu$, where $Q$ is the number of oracle queries performed by the attacker. In general, this is the best one can hope for, as it is easy to see that this loss applies to the $\mu$-fold sequential repetition of $\Sigma$-protocols, but it raises the question whether certain (natural) classes of interactive proofs feature a milder security loss.

In this work, we give positive and negative results on this question. On the positive side, we show that for $(k_1, \ldots, k_\mu)$-special-sound protocols (which cover a broad class of use cases), the knowledge error degrades linearly in $Q$, instead of $Q^\mu$. On the negative side, we show that for $t$-fold _parallel repetitions_ of typical $(k_1, \ldots, k_\mu)$-special-sound protocols with $t \geq \mu$ (and assuming for simplicity that $t$ and $Q$ are integer multiples of $\mu$), there is an attack that results in a security loss of approximately $\frac12 Q^\mu /\mu^{\mu+t}$.
