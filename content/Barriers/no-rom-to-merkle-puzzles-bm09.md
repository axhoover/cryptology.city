---
type: barrier
status: draft
title: "No reduction from ROM to Merkle puzzles"
aliases: []
id: bar-rom-to-merkle-puzzles-bm09
hypotheses: [rom]
conclusion: merkle-puzzles
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source:
  - "[[BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle|BM09]]"
  - "[[Mer78 - Secure Communications Over Insecure Channels|Mer78]]"
---

# No reduction from ROM to Merkle puzzles

A reduction of class `unstated` from [[random-oracle-model|ROM]] to [[merkle-puzzles|Merkle puzzles]] would imply a contradiction.

## Statement

Migrated verbatim from [[black-box-separations]] § The Impagliazzo–Rudich Separation:

> **Barak–Mahmoody strengthening.** [[BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle|BM09]] tightened the query complexity of the eavesdropper from $O(\ell^6)$ to the optimal $O(\ell^2)$, matching the quadratic gap achieved by Merkle's Puzzles [[Mer78]]. This shows that Merkle's Puzzles are _query-complexity optimal_: no random-oracle KA protocol can achieve a better-than-quadratic query gap between the honest parties and the eavesdropper. Together, IR89 and BM09 give a complete picture of the complexity of key agreement in the random oracle model.

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Second edge on the same paragraph: optimality of Merkle's Puzzles ('no random-oracle KA protocol can achieve a better-than-quadratic query gap'). Q is a quantitative impossibility, so it fits the barrier shape with Q = 'no protocol exists with a better gap'.
- 'merkle-puzzles' has no page; Mer78 exists only as a reference. Merkle's Puzzles is the KA construction from a random oracle and would need a node of its own for this edge to be expressible.
- The implicit positive edge — random oracle => KA with a quadratic query gap (Mer78) — is never stated on the page as a construction, only alluded to via 'matching the quadratic gap achieved by Merkle's Puzzles'.
