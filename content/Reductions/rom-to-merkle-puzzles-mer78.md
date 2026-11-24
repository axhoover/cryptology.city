---
type: reduction
status: draft
title: "ROM ⇒ Merkle puzzles"
aliases: []
id: red-rom-to-merkle-puzzles-mer78
kind: implication
hypotheses: [rom]
conclusion: merkle-puzzles
class: unstated
model: rom
source:
  - "[[Mer78 - Secure Communications Over Insecure Channels|Mer78]]"
security-loss: "success probability at most $(q+1)/n^2$ for an eavesdropper making $q$ oracle queries"
rationale:
  security-loss: "The transcript fixes the key only as the preimage of one revealed oracle answer, which is uniform over the domain points the eavesdropper has not queried, so each query finds it with probability $O(1/n^2)$."
---

# ROM ⇒ Merkle puzzles

## Statement

In the [[random-oracle-model|random oracle model]], for every function $1 \le n(\secpar) \le \poly(\secpar)$, [[merkle-puzzles|Merkle's puzzles]] with parameter $n$ is a $(1 - 1/e - \negl(\secpar))$-correct [[key-exchange|key-agreement]] protocol in which each honest party makes $n$ oracle queries, while every eavesdropper making $q$ queries recovers the key with probability at most $(q+1)/n^2$, so one recovering it with constant probability makes $\Omega(n^2)$ queries — standard. The protocol and its quadratic gap are from [[Mer78 - Secure Communications Over Insecure Channels|Mer78]], whose puzzles are ciphertexts; [[BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle|BM09]] state it in this random-oracle form, with $n$ oracle queries and no attack making $o(n^2)$ queries.

## Sketch

Each party queries the oracle at $n$ distinct uniformly random points of a domain of size $n^2$ and sends the answers in the clear. By the [[birthday-bound#Two lists|two-list birthday bound]] some answer appears in both lists with probability at least $1 - 1/e - \negl(\secpar)$, and the parties take its preimage as the key. An eavesdropper sees only oracle outputs, and finding a given output's preimage in a domain of size $n^2$ takes $\Omega(n^2)$ queries — standard.

## Notes

- The quadratic gap is optimal: every random-oracle key agreement whose honest parties make $n$ queries falls to an eavesdropper making $O(n^2)$ queries — [[BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle|BM09]] ([[no-rom-to-ke-hmo-19|No reduction from ROM to KE]]).
