---
type: reduction
status: draft
title: "Claw-free permutations ⇒ Concurrent ZK proofs for NP in ω(log n) rounds"
aliases: []
id: red-claw-free-permutations-to-concurrent-zk-proof-prs02
kind: implication
hypotheses: [claw-free-permutations]
conclusion: concurrent-zk-proof
class: unstated
model: standard
source:
  - "[[PRS02 - Concurrent Zero Knowledge with Logarithmic Round-Complexity|PRS02]]"
security-loss: ""
---

# Claw-free permutations ⇒ Concurrent ZK proofs for NP in ω(log n) rounds

## Statement

If [[trapdoor-permutation#claw-free-permutations|claw-free permutation collections]] exist, then for every $k(n) = \omega(\log n)$, every language in $\classNP$ has a $k(n)$-round [[zero-knowledge-proof#concurrent-zero-knowledge-proofs|concurrent zero-knowledge proof]] with a black-box simulator, sound against unbounded provers. Soundness is unconditional; the claw-free collection is used only for zero knowledge — [[PRS02 - Concurrent Zero Knowledge with Logarithmic Round-Complexity|PRS02]].

## Notes

- For black-box simulation the round count is optimal up to an $\omega(\log\log n)$ factor, since $o(\log n / \log\log n)$ rounds suffice only for languages in $\classBPP$ ([[bb-concurrent-zk-few-rounds-to-bpp-ckpr01|Few-round black-box concurrent ZK ⊆ BPP]]) — [[CKPR01 - Black-Box Concurrent Zero-Knowledge Requires Omega(log n) Rounds|CKPR01]].
- From one-way functions alone the same round count is achieved by concurrent zero-knowledge arguments ([[owf-to-concurrent-zk-argument-prs02|OWF ⇒ Concurrent ZK arguments for NP in ω(log n) rounds]]) — [[PRS02 - Concurrent Zero Knowledge with Logarithmic Round-Complexity|PRS02]].
