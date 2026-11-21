---
type: reduction
status: draft
title: "HVE ⇒ Subset and range queries"
aliases: []
id: red-hve-to-subset-and-range-queries
kind: implication
hypotheses: [hve]
conclusion: range-query-encryption
class: fully-black-box
model: standard
source:
  - "[[BW07 - Conjunctive Normal Form Encryption and Attribute Based Encryption|BW07]]"
security-loss: "tight: the adversary runs unchanged through the encodings, with the same advantage"
rationale:
  class: "One fixed encoding of attributes and predicates into HVE vectors and patterns invokes the HVE algorithms only as oracles, and the reduction translates the adversary's key queries and challenge through the same encoding and runs it unchanged."
---

# HVE ⇒ Subset and range queries

## Statement

Every [[hidden-vector-encryption|HVE]] scheme over $\Sigma = \bits$ gives [[hidden-vector-encryption#subset-and-range-queries|range-query encryption]] for attributes in $[T]^\ell$ through fixed encodings of attributes and predicates into vectors and wildcard patterns: membership $x \in S$ by encoding $x$ as its indicator vector over $[T]$ and $S$ as the pattern with wildcards exactly on $S$ and $0$ elsewhere; comparison $x \ge a$ by encoding $x$ in unary and $a$ as the pattern with a single non-wildcard position; ranges $a \le x \le b$ as conjunctions of comparisons. The encodings preserve every predicate outcome: $P(x) = 1$ exactly when the encoded pattern matches the encoded attribute. The derived scheme therefore has the HVE scheme's correctness and message space, and is selectively payload-hiding with the same advantage. Ciphertext size is linear in the domain size — [[BW07 - Conjunctive Normal Form Encryption and Attribute Based Encryption|BW07]].

## Sketch

The indicator vector of $x$ has its only $1$ at position $x$, which the pattern for $S$ leaves as a wildcard iff $x \in S$. On the unary encoding $1^{x}0^{T-x}$, $x \ge a$ iff position $a$ holds $1$, and $x \le b < T$ iff position $b + 1$ holds $0$; a range conjoins the two tests. Each coordinate $x_j$ is encoded as its indicator vector followed by its unary encoding, so one attribute vector of length $2T\ell$ serves every conjunction, an always-true conjunct and the unused half of each coordinate being wildcards; a selective adversary's $x^*$ and key queries are translated through the same encodings, and a query with $P(x^*) = 0$ becomes a pattern that does not match the encoded $x^*$.
