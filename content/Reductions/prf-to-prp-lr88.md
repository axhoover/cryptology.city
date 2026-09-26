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
security-loss: "a $q$-query distinguisher's advantage is at most the sum of the round PRF advantages plus $O(q^2/2^n)$ (birthday term), so the construction is meaningful only for superpolynomial $2^n$"
---

# PRF ⇒ PRP

[[pseudorandom-function|PRF]] implies [[pseudorandom-permutation|PRP]].

## Statement

Three Feistel rounds, each applying an independently keyed [[pseudorandom-function|PRF]] on $\bits^n$, yield a [[pseudorandom-permutation|PRP]] on $\bits^{2n}$; four rounds yield a strong PRP, secure given the inversion oracle as well — [[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]].

## Sketch

On input $(L_0, R_0) \in \bits^n \times \bits^n$, round $i$ sets $(L_i, R_i) \gets (R_{i-1},\ L_{i-1} \oplus \Eval(k_i, R_{i-1}))$; each round is a permutation whatever the round function, and $\Invert$ runs the rounds backwards. Hybrids replace each round function by a truly random one, and the three-round random-function core is indistinguishable from a random permutation up to a birthday bound.

## Notes

`class: fully-black-box`: the Feistel network invokes the round PRFs only as oracles, and each hybrid's reduction runs the distinguisher as an oracle; the random-function core is bounded information-theoretically. Fixed construction, fixed reduction.

- [[NR99 - On the Construction of Pseudorandom Permutations Luby-Rackoff Revisited|NR99]] simplify the proof and reduce the construction: two Feistel rounds between initial and final pairwise-independent permutations give a strong PRP.
