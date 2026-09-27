---
type: barrier
status: draft
title: "No fully-black-box reduction from PKE to TDP"
aliases: []
id: bar-pke-to-tdp-gkm-00
hypotheses: [pke]
conclusion: tdp
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
source:
  - "[[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]]"
---

# No fully-black-box reduction from PKE to TDP

A reduction of class `fully-black-box` from [[public-key-encryption|PKE]] to [[trapdoor-permutation|TDP]] would imply a contradiction.

## Statement

Trapdoor predicates, i.e. single-bit [[public-key-encryption|PKE]], do not imply [[trapdoor-permutation|trapdoor permutations]] under black-box reductions, shown by an oracle separation following Impagliazzo–Rudich — [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]]. Hence there is no fully-black-box construction of a trapdoor permutation from PKE.

## Notes

`class: fully-black-box`: GKM+00 separate the primitives under black-box reductions, which rules out at least constructions that use PKE, with proofs that use the TDP inverter, only as oracles. The abstract does not settle whether a single oracle separates them, which would rule out the broader class `relativizing`, so the narrower value is recorded.

- GKM+00 state the separation for trapdoor predicates. Bitwise encryption under a trapdoor predicate is a semantically secure multi-bit PKE — [[GM84 - Probabilistic encryption|GM84]] — so a fully-black-box construction of a TDP from multi-bit PKE would compose into one from trapdoor predicates, and the barrier covers `pke`.
