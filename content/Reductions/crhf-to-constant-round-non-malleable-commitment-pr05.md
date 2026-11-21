---
type: reduction
status: draft
title: "CRHF ⇒ Constant-round NM commitment (Pass–Rosen)"
aliases: []
id: red-crhf-to-constant-round-non-malleable-commitment-pr05
kind: implication
hypotheses: [crhf]
conclusion: constant-round-non-malleable-commitment
class: free
model: standard
source:
  - "[[PR05 - New and improved constructions of non-malleable cryptographic protocols|PR05]]"
security-loss: ""
rationale:
  class: "The non-malleable zero-knowledge argument follows Barak's protocol, whose universal argument proves a relation containing the hash function's own computation, so the construction uses the hash function's code."
---

# CRHF ⇒ Constant-round NM commitment (Pass–Rosen)

## Statement

Every family of [[hash-function#collision-resistance|collision-resistant hash functions]] yields a [[commitment-scheme#constant-round-non-malleable-commitments|constant-round non-malleable commitment]] scheme, built from a constant-round non-malleable zero-knowledge argument — [[PR05 - New and improved constructions of non-malleable cryptographic protocols|PR05]].

## Notes

- The earlier constant-round construction of [[Bar02 - Constant-Round Coin-Tossing with a Man in the Middle or Realizing the Shared Random String Model|Bar02]] assumed [[trapdoor-permutation|trapdoor permutations]] and hash functions collision-resistant against sub-exponential-size circuits — [[PR05 - New and improved constructions of non-malleable cryptographic protocols|PR05]].
- [[hash-function#preimage-resistance-one-wayness|One-way functions]] suffice: [[owf-to-constant-round-non-malleable-commitment-lp11-goy11|OWF ⇒ constant-round NM commitment]] — [[LP11a - Constant-round non-malleable commitments from any one-way function|LP11a]], [[Goy11 - Constant round non-malleable protocols using one way functions|Goy11]].
