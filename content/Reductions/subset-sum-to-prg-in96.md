---
type: reduction
status: draft
title: "Subset sum at constant density below one ⇒ PRG"
aliases: []
id: red-subset-sum-to-prg-in96
kind: implication
hypotheses: [subset-sum-constant-density-below-one]
conclusion: prg
class: fully-black-box
model: standard
source:
  - "[[IN96 - Efficient Cryptographic Schemes Provably as Secure as Subset Sum|IN96]]"
via:
  - "[[hardcore-predicate|Goldreich–Levin]]"
security-loss: "a factor O(n) in the advantage, from guessing the size of the intersection of the solution with the Goldreich–Levin vector, plus the polynomial loss of Goldreich–Levin decoding"
rationale:
  class: "The generator is the subset-sum function itself, and the reduction turns any distinguisher, with one oracle call on a re-randomized instance, into a predictor of an inner-product bit of the solution, which Goldreich–Levin decoding runs only as an oracle to invert."
---

# Subset sum at constant density below one ⇒ PRG

## Statement

Let $M = 2^{\ell(n)}$ with $\ell(n) = (1+c)n$ for a constant $c > 0$. If [[subset-sum#subset-sum-at-constant-density-below-one|subset sum is hard at constant density below one]] for this $(n, M)$, then $f(\mathbf{a}, \mathbf{s}) = (\mathbf{a}, \langle \mathbf{a}, \mathbf{s} \rangle)$, mapping $n\ell(n) + n$ seed bits to $n\ell(n) + \ell(n)$ output bits, is a [[pseudorandom-generator|PRG]] — [[IN96 - Efficient Cryptographic Schemes Provably as Secure as Subset Sum|IN96]] (Theorem 2.2). One evaluation stretches the seed by $cn$ bits using only additions, and the construction can be implemented in NC with an optimal number of processors — [[IN96 - Efficient Cryptographic Schemes Provably as Secure as Subset Sum|IN96]].

## Notes

- Pseudorandomness of $f$ is hardness of [[subset-sum#decision-subset-sum|decision subset sum]] at the same parameters ([[subset-sum-to-decision-subset-sum-in96|Subset sum at constant density below one ⇒ Decision subset sum]]) — standard.
