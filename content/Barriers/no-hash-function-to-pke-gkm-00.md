---
type: barrier
status: draft
title: "No relativizing reduction from OWF to PKE"
aliases: []
id: bar-hash-function-to-pke-gkm-00
hypotheses: [owf]
conclusion: pke
class: relativizing
consequences:
  - kind: contradiction
    target: ""
    class: relativizing
strength: unconditional
source:
  - "[[IR89 - Limits on the provable consequences of one-way permutations|IR89]]"
rationale:
  class: "IR89 give an oracle separation, which defeats every construction and security proof that holds relative to all oracles, fully-black-box ones included."
---

# No relativizing reduction from OWF to PKE

## Statement

No relativizing construction of [[public-key-encryption|PKE]] from a [[hash-function#preimage-resistance-one-wayness|one-way function]] exists. Relative to a random permutation together with a $\classPSPACE$-complete oracle, one-way permutations exist and no [[key-exchange|key-agreement]] protocol is secure — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]] ([[no-owp-to-ke-ir89|OWP ⇏ KE]]); a one-way permutation is a one-way function, and PKE gives two-message key agreement.

## Sketch

Relative to that oracle the random permutation $\pi$ is one-way while $\classP = \classNP$. Against a key-agreement protocol whose parties make $q$ queries to $\pi$, the eavesdropper repeatedly queries the points that are likely to have been queried given the transcript; after $\poly(q)$ queries it holds, with high probability, every query asked by both parties, and it recovers the key by sampling a view of one party consistent with the transcript and its own queries.

## Notes

- An eavesdropper making $O(q^2)$ queries breaks any key-agreement protocol whose parties make $q$ random-oracle queries, so Merkle's quadratic query gap is optimal and the separation is quantitatively tight — [[BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle|BM09]].
- The separation restricts the proof technique only; whether one-way functions imply PKE is open — folklore.
- [[hash-function#collision-resistance|Collision-resistant hash functions]] also exist relative to the IR89 oracle, so no relativizing construction of PKE from them exists either — standard.
