---
type: reduction
status: draft
title: "Subset sum ⇒ PRG"
aliases: []
id: red-subset-sum-to-prg-in96
kind: implication
hypotheses: [subset-sum]
conclusion: prg
class: unstated
model: standard
source:
  - "[[IN96 - Efficient Cryptographic Schemes Provably as Secure as Subset Sum|IN96]]"
security-loss: ""
---

# Subset sum ⇒ PRG

## Statement

Let $M = 2^{\ell(n)}$ with $\ell(n) = (1+c)n$ for a constant $c > 0$. If [[subset-sum|subset sum]] is hard for $(n, M)$, then $f(\mathbf{a}, \mathbf{s}) = (\mathbf{a}, \langle \mathbf{a}, \mathbf{s} \rangle)$, mapping $n\ell(n) + n$ seed bits to $n\ell(n) + \ell(n)$ output bits, is a [[pseudorandom-generator|PRG]] — [[IN96 - Efficient Cryptographic Schemes Provably as Secure as Subset Sum|IN96]]. One evaluation stretches the seed by $cn$ bits using only additions, and the construction can be implemented in NC with an optimal number of processors — [[IN96 - Efficient Cryptographic Schemes Provably as Secure as Subset Sum|IN96]].

## Notes

- Pseudorandomness of $f$ is hardness of [[subset-sum#decision-subset-sum|decision subset sum]] at the same parameters ([[subset-sum-to-decision-subset-sum-in96|Subset sum ⇒ Decision subset sum]]) — standard.
