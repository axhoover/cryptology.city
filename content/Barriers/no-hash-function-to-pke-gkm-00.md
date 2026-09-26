---
type: barrier
status: draft
title: "No relativizing reduction from Hash function to PKE"
aliases: []
id: bar-hash-function-to-pke-gkm-00
hypotheses: [hash-function]
conclusion: pke
class: relativizing
consequences:
  - kind: contradiction
    target: ""
    class: relativizing
strength: unconditional
source:
  - "[[IR89 - Limits on the provable consequences of one-way permutations|IR89]]"
---

# No relativizing reduction from Hash function to PKE

A reduction of class `relativizing` from [[hash-function|Hash function]] to [[public-key-encryption|PKE]] would imply a contradiction.

## Statement

There is an oracle relative to which one-way permutations exist but key agreement is impossible; since [[public-key-encryption|PKE]] gives two-message key agreement, no relativizing — hence no fully black-box — construction of PKE from a [[hash-function#preimage-resistance-one-wayness|one-way function]] exists — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]].

## Sketch

Relative to a random permutation oracle $\calO$ paired with a $\classPSPACE$ oracle, $\calO$ is one-way while $\classP = \classNP$ holds. Against any key-agreement protocol whose parties make $q$ queries to $\calO$, an eavesdropper repeatedly asks the $\calO$-queries that are likely given the transcript; after $\poly(q)$ queries it has, with high probability, learned every query both parties made, and it recovers the key by sampling a view of one party consistent with the transcript and its own queries.

## Notes

`class: relativizing`: IR89 exhibits an oracle relative to which one-way permutations exist but key agreement does not. An oracle separation rules out exactly the `relativizing` class; by the partial order in schema/reduction-classes.yaml, fully-black-box implies relativizing, so the barrier also kills every fully black-box construction and the contradiction check still fires against any fully-black-box reduction on this hyperedge. `relativizing` is therefore correct and strictly stronger than `fully-black-box`.

- An eavesdropper making $O(q^2)$ queries breaks any key-agreement protocol whose parties make $q$ random-oracle queries, so Merkle's quadratic gap is optimal and the IR89 separation is quantitatively tight — [[BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle|BM09]]
- The separation restricts the proof technique only: whether one-way functions imply PKE is open. The migrated sentence's unconditional "but **not** public-key encryption" overstates it.
- The wiki's `hash-function` page carries `OWF` among its aliases, so a one-way-function hypothesis resolves to the hash-function page; the hypothesis of this barrier is its one-wayness variant. The IR89 oracle world also contains collision-resistant hash functions, so the separation covers the collision-resistance variant as well — standard.
