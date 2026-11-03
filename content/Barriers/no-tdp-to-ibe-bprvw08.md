---
type: barrier
status: draft
title: "No fully-black-box reduction from TDP to IBE"
aliases: []
id: bar-tdp-to-ibe-bprvw08
hypotheses: [tdp]
conclusion: ibe
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
oracle: "random trapdoor permutations"
source:
  - "[[BPRVW08 - On the Impossibility of Basing Identity Based Encryption on Trapdoor Permutations|BPRVW08]]"
rationale:
  class: "BPRVW08 rule out black-box constructions, which covers at least every construction that uses the trapdoor permutation only as an oracle with a security proof that uses the adversary only as an oracle."
---

# No fully-black-box reduction from TDP to IBE

## Statement

There is no fully-black-box construction of [[identity-based-encryption|identity-based encryption]] from [[trapdoor-permutation|trapdoor permutations]]; the separation is relative to an oracle implementing random trapdoor permutations — [[BPRVW08 - On the Impossibility of Basing Identity Based Encryption on Trapdoor Permutations|BPRVW08]]. It rests on IBE compressing exponentially many public keys, one per identity, into short public parameters — [[BPRVW08 - On the Impossibility of Basing Identity Based Encryption on Trapdoor Permutations|BPRVW08]].

## Notes

- IND-CCA2-secure public-key encryption does not give IBE by a fully-black-box construction either ([[no-pke-cca2-security-to-ibe-bprvw08|No fully-black-box reduction from CCA-secure PKE to IBE]]) — [[BPRVW08 - On the Impossibility of Basing Identity Based Encryption on Trapdoor Permutations|BPRVW08]].
- Both primitives give public-key encryption: [[tdp-to-pke|TDP ⇒ PKE]] — [[GM84 - Probabilistic encryption|GM84]] — and [[ibe-to-pke|IBE ⇒ PKE]] — folklore.
