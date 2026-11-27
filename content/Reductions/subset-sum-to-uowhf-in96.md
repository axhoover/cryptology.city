---
type: reduction
status: draft
title: "Subset sum at constant density above one ⇒ UOWHF"
aliases: []
id: red-subset-sum-to-uowhf-in96
kind: implication
hypotheses: [subset-sum-above-density-one]
conclusion: uowhf
class: fully-black-box
model: standard
source:
  - "[[IN96 - Efficient Cryptographic Schemes Provably as Secure as Subset Sum|IN96]]"
security-loss: ""
rationale:
  class: "The hash family is the subset-sum function itself with a uniform instance as key, and the reduction of IN96 Theorem 3.1 runs any target-collision finder only as an oracle, on a key it derives from the subset-sum instance and target."
---

# Subset sum at constant density above one ⇒ UOWHF

## Statement

Let $M = 2^{\ell(n)}$ with $\ell(n) = (1-c)n$ for a constant $c \in (0, 1)$, so that the density is $1/(1-c) > 1$. If [[subset-sum#subset-sum-at-constant-density-above-one|subset sum is hard at constant density above one]] for this $(n, M)$, then the family $h_{\mathbf{a}}(\mathbf{s}) = \langle \mathbf{a}, \mathbf{s} \rangle$ from $\bits^n$ to $\ZZ_M$, keyed by uniform $\mathbf{a} \in \ZZ_M^n$, is [[hash-function#target-collision-resistance-universal-one-wayness|target collision resistant]] — [[IN96 - Efficient Cryptographic Schemes Provably as Secure as Subset Sum|IN96]] (Theorem 3.1). One evaluation compresses $n$ bits to $\ell(n)$ bits using only additions — [[IN96 - Efficient Cryptographic Schemes Provably as Secure as Subset Sum|IN96]].

## Notes

- The theorem is stated for a constant $c$. The reduction programs the target and the key, and the distance of their distribution from uniform is bounded by $2^{-(n-\ell(n))/2}$, which is the constant $2^{-1/2}$ at $\ell(n) = n - 1$ — [[IN96 - Efficient Cryptographic Schemes Provably as Secure as Subset Sum|IN96]] (Proposition 1.1, part 2, and its proof).
- A collision $h_{\mathbf{a}}(\mathbf{s}) = h_{\mathbf{a}}(\mathbf{s}')$ gives $\langle \mathbf{a}, \mathbf{s} - \mathbf{s}' \rangle = 0$ with $\mathbf{s} - \mathbf{s}' \in \{-1, 0, 1\}^n \setminus \{\mathbf{0}\}$, a nonzero ternary kernel vector of the one-row matrix $\mathbf{a}$, and conversely, so collision resistance of the family is hardness of finding such a vector — standard.
