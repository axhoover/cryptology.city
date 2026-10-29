---
type: reduction
status: draft
title: "OWF ⇒ Concurrent ZK arguments for NP in ω(log n) rounds"
aliases: []
id: red-owf-to-concurrent-zk-argument-prs02
kind: implication
hypotheses: [owf]
conclusion: concurrent-zk-argument
class: unstated
model: standard
source:
  - "[[PRS02 - Concurrent Zero Knowledge with Logarithmic Round-Complexity|PRS02]]"
security-loss: ""
---

# OWF ⇒ Concurrent ZK arguments for NP in ω(log n) rounds

## Statement

If [[hash-function#preimage-resistance-one-wayness|one-way functions]] exist, then for every $k(n) = \omega(\log n)$, every language in $\classNP$ has a $k(n)$-round [[zero-knowledge-proof#concurrent-zero-knowledge-arguments|concurrent zero-knowledge argument]] — [[PRS02 - Concurrent Zero Knowledge with Logarithmic Round-Complexity|PRS02]]. The round count is within an $\omega(\log\log n)$ factor of the lower bound for black-box simulation ([[bb-concurrent-zk-few-rounds-to-bpp-ckpr01|Few-round black-box concurrent ZK ⊆ BPP]]) — [[CKPR01 - Black-Box Concurrent Zero-Knowledge Requires Omega(log n) Rounds|CKPR01]].

## Notes

- The first concurrent zero-knowledge protocol for $\classNP$ without timing assumptions used $O(n^{\varepsilon})$ rounds — [[RK99 - On the Concurrent Composition of Zero-Knowledge Proofs|RK99]] — and the round count was then brought down to $\omega(\log^2 n)$ — [[KP01 - Concurrent and Resettable Zero-Knowledge in Poly-logarithmic Rounds|KP01]].
- Assuming claw-free permutation collections, the same round count is achieved by concurrent zero-knowledge proofs, sound against unbounded provers ([[claw-free-permutations-to-concurrent-zk-proof-prs02|Claw-free permutations ⇒ Concurrent ZK proofs for NP in ω(log n) rounds]]) — [[PRS02 - Concurrent Zero Knowledge with Logarithmic Round-Complexity|PRS02]].
