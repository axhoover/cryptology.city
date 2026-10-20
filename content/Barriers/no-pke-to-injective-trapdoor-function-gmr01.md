---
type: barrier
status: draft
title: "No fully-black-box reduction from PKE to injective TDF"
aliases: []
id: bar-pke-to-injective-trapdoor-function-gmr01
hypotheses: [pke]
conclusion: injective-trapdoor-function
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
source:
  - "[[GMR01 - On the Impossibility of Basing Trapdoor Functions on Trapdoor Predicates|GMR01]]"
rationale:
  class: "GMR01's separation, in a model weaker than Impagliazzo–Rudich's, rules out constructions that use the trapdoor predicate only as an oracle with proofs that use the adversary only as an oracle."
---

# No fully-black-box reduction from PKE to injective TDF

## Statement

There is no fully-black-box construction of an [[trapdoor-permutation#injective-trapdoor-functions|injective trapdoor function]], or even of a trapdoor function with polynomially many preimages per image, from a trapdoor predicate, i.e. single-bit [[public-key-encryption|PKE]] — [[GMR01 - On the Impossibility of Basing Trapdoor Functions on Trapdoor Predicates|GMR01]]. A multi-bit scheme encrypts bit by bit under a trapdoor predicate — [[GM84 - Probabilistic encryption|GM84]] — so none exists from multi-bit PKE either.

## Notes

- Trapdoor permutations and injective trapdoor functions give PKE through the Goldreich–Levin predicate ([[tdp-to-pke|TDP ⇒ PKE]]) — [[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]] — so injective trapdoor functions are strictly stronger than PKE with respect to fully-black-box constructions — [[GMR01 - On the Impossibility of Basing Trapdoor Functions on Trapdoor Predicates|GMR01]].
- The permutation case is [[no-pke-to-tdp-gkm-00|No fully-black-box reduction from PKE to TDP]] — [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]].
