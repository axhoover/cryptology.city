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

There is an oracle relative to which one-way permutations exist but key agreement is impossible; since [[public-key-encryption|PKE]] gives two-message key agreement, no relativizing (hence no fully black-box) construction of PKE from a [[hash-function#preimage-resistance-one-wayness|one-way function]] exists — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]].

## Sketch

Relative to a random permutation oracle $\calO$ paired with a $\classPSPACE$ oracle, $\calO$ is one-way while $\classP = \classNP$ holds. Against any key-agreement protocol whose parties make $q$ queries to $\calO$, an eavesdropper repeatedly asks the $\calO$-queries that are likely given the transcript; after $\poly(q)$ queries it has, with high probability, found every query asked by both parties, and it recovers the key by sampling a view of one party consistent with the transcript and its own queries.

## Notes

`class: relativizing`: IR89 is an oracle separation, so it rules out every construction and security proof that hold relative to all oracles, whatever use they make of the hypothesis and the adversary; since `fully-black-box` implies `relativizing` in `schema/reduction-classes.yaml`, fully black-box constructions are ruled out too.

- An eavesdropper making $O(q^2)$ queries breaks any key-agreement protocol whose parties make $q$ random-oracle queries, so Merkle's quadratic gap is optimal and the IR89 separation is quantitatively tight — [[BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle|BM09]]
- The separation restricts the proof technique only; whether one-way functions imply PKE is open, so the unconditional "but **not** public-key encryption" in [[impagliazzos-five-worlds#breaking-up-cryptomania|Impagliazzo's five worlds § Breaking up Cryptomania]] overstates it.
- The hypothesis is the one-wayness variant of [[hash-function|Hash function]], which carries the `OWF` alias. The IR89 oracle world also contains collision-resistant hash functions, so the separation covers that variant too — standard.
