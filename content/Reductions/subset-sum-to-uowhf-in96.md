---
type: reduction
status: draft
title: "Subset sum ⇒ UOWHF"
aliases: []
id: red-subset-sum-to-uowhf-in96
kind: implication
hypotheses: [subset-sum]
conclusion: uowhf
class: unstated
model: standard
source:
  - "[[IN96 - Efficient Cryptographic Schemes Provably as Secure as Subset Sum|IN96]]"
security-loss: ""
---

# Subset sum ⇒ UOWHF

## Statement

Let $M = 2^{\ell(n)}$ with $\ell(n) < n$, so that the density exceeds $1$. If [[subset-sum|subset sum]] is hard for $(n, M)$, then the family $h_{\mathbf{a}}(\mathbf{s}) = \langle \mathbf{a}, \mathbf{s} \rangle$ from $\bits^n$ to $\ZZ_M$, keyed by uniform $\mathbf{a} \in \ZZ_M^n$, is [[hash-function#target-collision-resistance-universal-one-wayness|target collision resistant]] — [[IN96 - Efficient Cryptographic Schemes Provably as Secure as Subset Sum|IN96]]. One evaluation compresses $n$ bits to $\ell(n)$ bits using only additions — [[IN96 - Efficient Cryptographic Schemes Provably as Secure as Subset Sum|IN96]].

## Notes

- A collision $h_{\mathbf{a}}(\mathbf{s}) = h_{\mathbf{a}}(\mathbf{s}')$ gives $\langle \mathbf{a}, \mathbf{s} - \mathbf{s}' \rangle = 0$ with $\mathbf{s} - \mathbf{s}' \in \{-1, 0, 1\}^n \setminus \{\mathbf{0}\}$, a nonzero ternary kernel vector of the one-row matrix $\mathbf{a}$, and conversely — standard. Collision resistance of the family is hardness of finding such a vector.
