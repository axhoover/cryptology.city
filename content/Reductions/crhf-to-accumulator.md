---
type: reduction
status: draft
title: "CRHF ⇒ accumulator"
aliases:
  - Merkle tree accumulator
id: red-crhf-to-accumulator
kind: implication
hypotheses: [crhf]
conclusion: accumulator
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: a forged witness exhibits a collision in one of the at most log |X| hash evaluations on the authentication path"
rationale:
  class: "The tree calls the hash function only as an oracle, and one fixed reduction runs the forger once and extracts a collision from the two paths."
---

# CRHF ⇒ accumulator

## Statement

If $\hash$ is a [[hash-function#collision-resistance|collision-resistant hash function]] family, the Merkle tree accumulator is a collision-free [[accumulator|accumulator]]: $\mathsf{Acc}(\pp, X)$ is the root of a binary hash tree under $\hash$ whose leaves are the elements of $X$ in sorted order, padded to a power of two; the witness for $x$ is its leaf position and the sibling of every node on the path to the root; and $\Vrfy$ recomputes the root — folklore.

## Sketch

A witness for $x \notin X$ that reproduces the root from a leaf position holding $y \in X$, $y \ne x$, gives two distinct inputs on which the recomputed path and the honest path agree at the root; the lowest level at which they agree with different inputs is a collision for $\hash$.

## Notes

- Witnesses have $O(\log |X|)$ hash values, and the accumulator needs no trapdoor or structured parameters; the construction is the tree of [[Mer89 - A Certified Digital Signature|Mer89]].
