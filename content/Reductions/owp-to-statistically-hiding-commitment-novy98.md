---
type: reduction
status: draft
title: OWP ⇒ Statistically hiding COM (NOVY)
aliases:
  - NOVY commitment
id: red-owp-to-statistically-hiding-commitment-novy98
kind: implication
hypotheses: [owp]
conclusion: statistically-hiding-commitment
class: fully-black-box
model: standard
source:
  - "[[NOVY98 - Perfect Zero-Knowledge Arguments for NP Using Any One-Way Permutation|NOVY98]]"
security-loss: "polynomial: a cheating committer opening both ways with probability ε inverts the permutation with probability poly(ε, 1/n)"
rationale:
  class: "The committer evaluates the permutation only as an oracle, and one fixed reduction inverts it by steering the interactive hashing towards its challenge while running any binding-breaking committer only as an oracle."
---

# OWP ⇒ Statistically hiding COM (NOVY)

## Statement

Every [[one-way-permutation|one-way permutation]] $\pi$ on $\bits^n$ yields an interactive bit-commitment scheme that is perfectly [[commitment-scheme#hiding|hiding]] and computationally [[commitment-scheme#binding|binding]], with $n - 1$ rounds of interactive hashing — [[NOVY98 - Perfect Zero-Knowledge Arguments for NP Using Any One-Way Permutation|NOVY98]].

## Sketch

To commit to $\beta$, the committer samples $x \getsr \bits^n$ and sets $y := \pi(x)$; in round $i < n$ the receiver sends a uniform $h_i \in \bits^n$ linearly independent of $h_1, \ldots, h_{i-1}$ and the committer replies $\langle h_i, y \rangle$. Exactly two strings $y_0 < y_1$ are consistent with the answers, and the committer sends $\beta \oplus c$ where $y = y_c$; to open, it reveals $x$. The transcript is identically distributed whether $y = y_0$ or $y = y_1$, so hiding is perfect, and opening both ways requires preimages of both $y_0$ and $y_1$, which the interactive hashing makes as hard as inverting $\pi$ at a uniform point.

## Notes

- Round complexity is optimal up to a logarithmic factor for this kind of construction: every fully-black-box construction of a statistically hiding commitment from a one-way permutation, or even a trapdoor permutation, on $n$ bits has $\Omega(n / \log n)$ rounds — [[HHRS07 - Finding Collisions in Interactive Protocols - A Tight Lower Bound on the Round Complexity of Statistically-Hiding Commitments|HHRS07]].
- With a perfectly hiding commitment, the [[hash-function-to-zkp-gmw91|GMW91]] protocol for Graph 3-Colouring becomes a perfect zero-knowledge argument for $\classNP$, which is NOVY98's application; a statistically hiding one gives statistical zero knowledge — [[NOVY98 - Perfect Zero-Knowledge Arguments for NP Using Any One-Way Permutation|NOVY98]].
- One-way functions suffice: [[owf-to-statistically-hiding-commitment-hr07|OWF ⇒ statistically hiding COM]] — [[HR07 - Statistically-hiding commitment from any one-way function|HR07]].
