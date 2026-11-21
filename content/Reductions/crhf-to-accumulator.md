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
security-loss: "tight: a forged witness exhibits a collision in one of the $\\lceil \\log_2 |X| \\rceil$ hash evaluations on its authentication path"
rationale:
  class: "The tree calls the hash function only as an oracle, and one fixed reduction runs the forger once and extracts a collision from the two paths."
---

# CRHF ⇒ accumulator

## Statement

If $\hash$ is a [[hash-function#collision-resistance|collision-resistant hash function]] family with $\hash(k, \cdot) : \bits^{2m} \to \bits^m$, the Merkle tree accumulator over $\calD = \bits^m$ is a collision-free [[accumulator|accumulator]]: $\pp = k$; $\Acc(\pp, \emptyset) = \bot$, on which $\Vrfy$ rejects, and for nonempty $X$, $\Acc(\pp, X) = (d, \rho)$, where $d = \lceil \log_2 |X| \rceil$ and $\rho$ is the root of the depth-$d$ binary tree whose $2^d$ leaves are the elements of $X$ in sorted order followed by copies of its largest element, each internal node being $\hash(k, u \| v)$ for its children $u, v$; the witness for $x$ is the first leaf position $p \in \bits^d$ holding $x$ and the sibling of every node on the path from it to the root; and $\Vrfy$ accepts iff the witness has exactly $d$ siblings and recomputing from $x$ along $p$ yields $\rho$ — folklore.

## Sketch

An accepted witness for $x \notin X$ has exactly $d$ siblings, and its leaf position holds some $y \in X$ because padding repeats an element of $X$. The path recomputed from $x$ and the honest path from $y$ therefore have equal length, differ at the leaves ($x \ne y$) and agree at the root $\rho$. At the lowest level where they agree, the two hash inputs differ because the child values below them differ, which gives a collision for $\hash$.

## Notes

- Witnesses have $O(\log |X|)$ hash values, and the accumulator needs no trapdoor or structured parameters; the construction is the tree of [[Mer89 - A Certified Digital Signature|Mer89]].
