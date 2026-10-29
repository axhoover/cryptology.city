---
type: reduction
status: draft
title: "Enhanced TDP ⇒ MPC with honest majority ($t < n/2$) (GMW)"
aliases: []
id: red-enhanced-trapdoor-permutation-to-honest-majority-t-lt-n-over-2-gmw87
kind: implication
hypotheses: [enhanced-trapdoor-permutation]
conclusion: honest-majority-t-lt-n-over-2
class: free
model: standard
source:
  - "[[GMW87 - How to play ANY mental game|GMW87]]"
  - "[[Gol04 - Foundations of Cryptography Basic Applications|Gol04]]"
security-loss: ""
rationale:
  class: "The compiler proves in zero knowledge that each message follows the semi-honest protocol, an NP statement about that protocol's code."
---

# Enhanced TDP ⇒ MPC with honest majority ($t < n/2$) (GMW)

## Statement

If [[trapdoor-permutation#enhanced-trapdoor-permutations|enhanced trapdoor permutations]] exist, every $n$-party functionality has a protocol over authenticated channels with broadcast that is computationally secure with [[secure-multi-party-computation#honest-majority-t--n2|guaranteed output delivery]] against a malicious adversary corrupting $t < n/2$ parties; private channels are emulated by public-key encryption, so no secure channels are assumed. This is GMW87's completeness theorem for protocols with an honest majority — [[GMW87 - How to play ANY mental game|GMW87]]; the full statement and proof, for the second malicious model of Gol04, are in [[Gol04 - Foundations of Cryptography Basic Applications|Gol04]].

## Notes

- Over secure channels the same guarantees hold unconditionally: against $t < n/3$ with perfect security ([BGW](honest-majority-t-n-3-or-t-n-2-to-mpc-bgw88)) — [[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]] — and against $t < n/2$ with statistical security, given broadcast ([Rabin–Ben-Or](honest-majority-t-lt-n-over-2-to-mpc-rb89)) — [[RB89 - Verifiable Secret Sharing and Multiparty Protocols with Honest Majority|RB89]].
- Without an honest majority, the same compiler gives only security with abort ([[semi-honest-security-and-owf-to-mpc-gmw87|GMW compiler]]), and complete fairness is impossible for some functionalities ([[no-authenticated-channels-to-fair-mpc-cle86|no fair MPC from authenticated channels]]) — [[GMW87 - How to play ANY mental game|GMW87]], [[Cle86 - Limits on the security of coin flips when half the processors are faulty|Cle86]].
