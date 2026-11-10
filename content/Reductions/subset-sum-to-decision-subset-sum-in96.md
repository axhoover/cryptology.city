---
type: reduction
status: draft
title: "Subset sum ⇒ Decision subset sum"
aliases: []
id: red-subset-sum-to-decision-subset-sum-in96
kind: implication
hypotheses: [subset-sum]
conclusion: decision-subset-sum
class: unstated
model: standard
source:
  - "[[IN96 - Efficient Cryptographic Schemes Provably as Secure as Subset Sum|IN96]]"
security-loss: ""
---

# Subset sum ⇒ Decision subset sum

## Statement

Let $M = 2^{\ell(n)}$ with $\ell(n) = (1+c)n$ for a constant $c > 0$, so that the density is $1/(1+c) < 1$. If [[subset-sum|subset sum]] is hard for $(n, M)$, that is, $f(\mathbf{a}, \mathbf{s}) = (\mathbf{a}, \langle \mathbf{a}, \mathbf{s} \rangle)$ is one-way, then [[subset-sum#decision-subset-sum|decision subset sum]] is hard for $(n, M)$: $(\mathbf{a}, \langle \mathbf{a}, \mathbf{s} \rangle)$ is indistinguishable from $(\mathbf{a}, u)$ for uniform $u \in \ZZ_M$ — [[IN96 - Efficient Cryptographic Schemes Provably as Secure as Subset Sum|IN96]].

## Notes

- The converse holds for every $M$ with $2^n/M$ negligible: a search algorithm that succeeds with probability $\varepsilon$ distinguishes with advantage at least $\varepsilon - 2^n/M$, since a uniform $u$ is a subset sum with probability at most $2^n/M$ — standard.
- Search-to-decision reductions for knapsack functions over arbitrary finite abelian groups, with bounded rather than binary coefficients, generalize this result under additional conditions on the group and the input distribution — [[MM11b - Pseudorandom Knapsacks and the Sample Complexity of LWE Search-to-Decision Reductions|MM11b]].
