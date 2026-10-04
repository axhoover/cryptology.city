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
security-loss: ""
rationale:
  class: "One fixed encoding of attributes and predicates into HVE vectors and patterns invokes the HVE algorithms only as oracles, and the reduction translates the adversary's key queries and challenge through the same encoding and runs it unchanged."
---

# HVE ⇒ Subset and range queries

## Statement

Every [[hidden-vector-encryption|HVE]] scheme over $\Sigma = \{0,1\}$ supports [[hidden-vector-encryption#subset-and-range-queries|subset and range queries]] through fixed encodings of attributes and predicates into vectors and wildcard patterns: membership $x \in T$ by encoding $x$ as its indicator vector over the domain and $T$ as the pattern with wildcards exactly on $T$ and $0$ elsewhere; comparison $x \ge a$ over a domain of size $n$ by encoding $x$ in unary and $a$ as the pattern with a single non-wildcard position; ranges $a \le x \le b$ as conjunctions of comparisons. The encodings preserve every predicate outcome, so the derived scheme inherits the HVE scheme's security with the same advantage. Ciphertext size is linear in the domain size — [[BW07 - Conjunctive Normal Form Encryption and Attribute Based Encryption|BW07]].

## Sketch

The indicator vector of $x$ has its only $1$ at position $x$, which the pattern for $T$ leaves as a wildcard iff $x \in T$. On the unary encoding $1^{x}0^{n-x}$, $x \ge a$ iff position $a$ holds $1$; a range conjoins two such tests.
