---
type: reduction
status: draft
title: "PRF ⇒ Strong PRP"
aliases: []
id: red-prf-to-strong-pseudorandom-permutation-lr88
kind: implication
hypotheses: [prf]
conclusion: strong-pseudorandom-permutation
class: fully-black-box
model: standard
source:
  - "[[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]]"
security-loss: "sum of the round PRF advantages plus additive $O(q^2/2^n)$ for $q$ queries"
rationale:
  class: "The Feistel network calls the round PRFs only as oracles, each hybrid's reduction runs the distinguisher only as an oracle, and the random-function core is bounded information-theoretically."
---

# PRF ⇒ Strong PRP

## Statement

If $\PRF$ is a [[pseudorandom-function|PRF]] on $\bits^n$ with $n = \omega(\log \secpar)$, the four-round Feistel network with independently keyed round functions is a [[pseudorandom-permutation#strong-security|strong PRP]] on $\bits^{2n}$, secure against distinguishers that also query the inverse — [[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]].

## Sketch

The round functions are replaced by independent random functions one at a time, each hop a PRF distinguisher. With random round functions, the outer rounds randomize the inputs of the inner rounds for forward and inverse queries alike, so the network is indistinguishable from a random permutation except with probability $O(q^2/2^n)$ — [[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]].

## Notes

- Three rounds give a PRP that is not strong: [[prf-to-prp-lr88|PRF ⇒ PRP]] — [[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]].
