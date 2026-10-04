---
type: reduction
status: draft
title: "PRF ⇒ PRP"
aliases: []
id: red-prf-to-prp-lr88
kind: implication
hypotheses: [prf]
conclusion: prp
class: fully-black-box
model: standard
source:
  - "[[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]]"
security-loss: "sum of the round PRF advantages plus additive $O(q^2/2^n)$ for $q$ queries"
rationale:
  class: "The Feistel network calls the round PRFs only as oracles, each hybrid's reduction runs the distinguisher only as an oracle, and the random-function core is bounded information-theoretically."
---

# PRF ⇒ PRP

## Statement

If $\PRF$ is a [[pseudorandom-function|PRF]] on $\bits^n$, the three-round Feistel network with independently keyed round functions $\Eval(k_1,\cdot), \Eval(k_2,\cdot), \Eval(k_3,\cdot)$ is a [[pseudorandom-permutation|PRP]] on $\bits^{2n}$, and the four-round network is a [[pseudorandom-permutation#strong-security|strong PRP]], secure given the inverse oracle as well — [[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]]. Two Feistel rounds between initial and final pairwise-independent permutations already give a strong PRP, with a simpler proof — [[NR99 - On the Construction of Pseudorandom Permutations Luby-Rackoff Revisited|NR99]].

## Sketch

On input $(L_0, R_0) \in \bits^n \times \bits^n$, round $i$ sets $(L_i, R_i) \gets (R_{i-1},\ L_{i-1} \oplus \Eval(k_i, R_{i-1}))$, a permutation whatever the round function, and $\Invert$ runs the rounds backwards. Hybrids replace each round function by a truly random one, and the three-round random-function core is indistinguishable from a random permutation up to a birthday bound.

## Notes

- The birthday term $O(q^2/2^n)$ makes the bound negligible only when $2^n$ is superpolynomial in $\secpar$ — [[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]].
