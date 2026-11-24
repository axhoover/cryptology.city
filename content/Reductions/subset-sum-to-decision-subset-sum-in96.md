---
type: reduction
status: draft
title: "Subset sum at constant density below one ⇒ Decision subset sum"
aliases: []
id: red-subset-sum-to-decision-subset-sum-in96
kind: implication
hypotheses: [subset-sum-constant-density-below-one]
conclusion: decision-subset-sum
class: fully-black-box
model: standard
source:
  - "[[IN96 - Efficient Cryptographic Schemes Provably as Secure as Subset Sum|IN96]]"
via:
  - "[[hardcore-predicate|Goldreich–Levin]]"
security-loss: "a factor O(n) in the advantage, from guessing the size of the intersection of the solution with the Goldreich–Levin vector, plus the polynomial loss of Goldreich–Levin decoding"
rationale:
  class: "The reduction turns any distinguisher, with one oracle call on a re-randomized instance, into a predictor of an inner-product bit of the solution, and Goldreich–Levin decoding runs that predictor only as an oracle to invert."
---

# Subset sum at constant density below one ⇒ Decision subset sum

## Statement

Let $M = 2^{\ell(n)}$ with $\ell(n) = (1+c)n$ for a constant $c > 0$, so that the density is $1/(1+c) < 1$. If [[subset-sum#subset-sum-at-constant-density-below-one|subset sum is hard at constant density below one]] for this $(n, M)$, that is, $f(\mathbf{a}, \mathbf{s}) = (\mathbf{a}, \langle \mathbf{a}, \mathbf{s} \rangle)$ is one-way, then [[subset-sum#decision-subset-sum-at-constant-density-below-one|decision subset sum]] is hard for $(n, M)$: $(\mathbf{a}, \langle \mathbf{a}, \mathbf{s} \rangle)$ is indistinguishable from $(\mathbf{a}, u)$ for uniform $u \in \ZZ_M$ — [[IN96 - Efficient Cryptographic Schemes Provably as Secure as Subset Sum|IN96]] (Theorem 2.2).

## Sketch

Without loss of generality a distinguisher $D$ outputs $1$ with probability at least $\tfrac12 + \delta$ on $(\mathbf{a}, \langle \mathbf{a}, \mathbf{s} \rangle)$ and with probability $\tfrac12$ on $(\mathbf{a}, u)$. Given $(\mathbf{a}, t)$ with $t = \langle \mathbf{a}, \mathbf{s} \rangle$ and a uniform $\mathbf{r} \in \bits^n$, the predictor samples $k \getsr \{0, \dots, n\}$ and $x \getsr \ZZ_M$, sets $b_i := a_i + r_i x$, runs $D$ on $(\mathbf{b}, t + kx)$, and outputs $k \bmod 2$ if $D$ outputs $1$ and $1 - (k \bmod 2)$ otherwise. Since $\langle \mathbf{b}, \mathbf{s} \rangle = t + k^* x$ for $k^* := \sum_i r_i s_i$, the input of $D$ is distributed as $(\mathbf{a}, \langle \mathbf{a}, \mathbf{s} \rangle)$ when $k = k^*$ and is statistically close to uniform otherwise, so the predictor outputs $k^* \bmod 2$ with probability at least $\tfrac12 + \delta/(n+1) - \negl(n)$, and the [[hardcore-predicate|Goldreich–Levin theorem]] turns it into an inverter — [[IN96 - Efficient Cryptographic Schemes Provably as Secure as Subset Sum|IN96]] (proof of Theorem 2.2).

## Notes

- The converse holds for every $M$ with $2^n/M$ negligible: a search algorithm that succeeds with probability $\varepsilon$ distinguishes with advantage at least $\varepsilon - 2^n/M$, since a uniform $u$ is a subset sum with probability at most $2^n/M$ — standard.
- Search-to-decision reductions for knapsack functions over arbitrary finite abelian groups, with bounded rather than binary coefficients, generalize this result under additional conditions on the group and the input distribution — [[MM11b - Pseudorandom Knapsacks and the Sample Complexity of LWE Search-to-Decision Reductions|MM11b]].
