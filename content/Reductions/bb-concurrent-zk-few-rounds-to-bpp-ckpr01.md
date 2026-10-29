---
type: reduction
status: draft
title: "Few-round black-box concurrent ZK ⊆ BPP"
aliases: []
id: red-bb-concurrent-zk-few-rounds-to-bpp-ckpr01
kind: inclusion
hypotheses: [bb-concurrent-zk-few-rounds]
conclusion: bpp
class: free
model: standard
source:
  - "[[CKPR01 - Black-Box Concurrent Zero-Knowledge Requires Omega(log n) Rounds|CKPR01]]"
security-loss: ""
---

# Few-round black-box concurrent ZK ⊆ BPP

## Statement

Suppose a language $L$ has a $k(n)$-round interactive proof or argument with negligible soundness error, with $k(n) = o(\log n / \log\log n)$, whose concurrent executions are zero-knowledge with a black-box simulator ([[computational-zero-knowledge#black-box-concurrent-zero-knowledge-in-few-rounds|black-box concurrent zero knowledge in few rounds]]). Then $L \in$ [[bounded-error-probabilistic-polynomial-time|BPP]] — [[CKPR01 - Black-Box Concurrent Zero-Knowledge Requires Omega(log n) Rounds|CKPR01]]. So black-box concurrent zero knowledge for a language outside $\classBPP$ needs $\tilde\Omega(\log n)$ rounds, and in particular more than a constant number — [[CKPR01 - Black-Box Concurrent Zero-Knowledge Requires Omega(log n) Rounds|CKPR01]].

## Notes

- The lower bound is $\Omega(\log n / \log\log n)$ rounds and the upper bound is any $\omega(\log n)$ rounds ([[owf-to-concurrent-zk-argument-prs02|OWF ⇒ Concurrent ZK arguments for NP in ω(log n) rounds]], [[claw-free-permutations-to-concurrent-zk-proof-prs02|Claw-free permutations ⇒ Concurrent ZK proofs for NP in ω(log n) rounds]]), so the gap is an $\omega(\log\log n)$ factor — [[PRS02 - Concurrent Zero Knowledge with Logarithmic Round-Complexity|PRS02]].
- Earlier bounds: no four-message zero-knowledge proof or argument for a language outside $\classBPP$ is black-box simulatable under concurrent composition — [[KPR98 - Lower Bounds for Zero Knowledge on the Internet|KPR98]] — and the bound was raised before CKPR01 by [[Ros00 - A Note on the Round-Complexity of Concurrent Zero-Knowledge|Ros00]].
- Non-black-box simulation gets around the bound: assuming collision-resistant hash functions, one-way permutations and indistinguishability obfuscation for $\classPpoly$ with slightly super-polynomial security, $\classNP$ has constant-round concurrent zero-knowledge protocols — [[CLP15 - Constant-Round Concurrent Zero-Knowledge from Indistinguishability Obfuscation|CLP15]].
- Under an $(\alpha, \beta)$ timing constraint on the adversary's control of clocks, every language in $\classNP$ has four-round almost concurrent zero-knowledge proofs and perfect concurrent zero-knowledge arguments — [[DNS98 - Concurrent Zero-Knowledge|DNS98]], who introduced concurrent zero knowledge.
