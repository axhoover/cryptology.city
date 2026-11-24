---
type: reduction
status: draft
title: "Length-preserving PRF ⇒ Strong PRP on bit strings"
aliases: []
id: red-prf-to-strong-pseudorandom-permutation-lr88
kind: implication
hypotheses: [length-preserving-prf]
conclusion: strong-bit-string-prp
class: fully-black-box
model: standard
source:
  - "[[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]]"
security-loss: "sum of the round PRF advantages plus additive $O(q^2/2^n)$ for $q$ queries"
rationale:
  class: "The Feistel network calls the round PRFs only as oracles, each hybrid's reduction runs the distinguisher only as an oracle, and the random-function core is bounded information-theoretically."
---

# Length-preserving PRF ⇒ Strong PRP on bit strings

## Statement

If $\PRF$ is a [[pseudorandom-function#length-preserving-prfs|length-preserving PRF]] with domain and range $\bits^n$, where $n = n(\secpar) = \omega(\log \secpar)$ is polynomially bounded and computable from $1^\secpar$ in polynomial time, the four-round Feistel network $\Psi[\Eval(k_1,\cdot), \ldots, \Eval(k_4,\cdot)]$ with independent keys $k_i \gets \KeyGen(1^\secpar)$ is a [[pseudorandom-permutation#strong-prps-on-bit-strings|strong PRP on bit strings]] with domain $\bits^{2n}$, secure against distinguishers that also query the inverse — [[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]]. Round $i$ maps $(L_{i-1}, R_{i-1})$ to $(L_i, R_i) = (R_{i-1},\ L_{i-1} \oplus \Eval(k_i, R_{i-1}))$; with $\Invert$ running the rounds backwards, $(L_{i-1}, R_{i-1}) = (R_i \oplus \Eval(k_i, L_i),\ L_i)$, the network is correct, and its block length $2n$ is again polynomially bounded, computable from $1^\secpar$ in polynomial time and $\omega(\log \secpar)$ — standard.

## Sketch

The round functions are replaced by independent random functions one at a time, each hop a PRF distinguisher. With random round functions, the outer rounds randomize the inputs of the inner rounds for forward and inverse queries alike, so the network is indistinguishable from a random permutation except with probability $O(q^2/2^n)$ — [[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]].

## Notes

- Three rounds give a PRP ([[prf-to-prp-lr88|Length-preserving PRF ⇒ PRP on bit strings]]) — [[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]] — that is not strong: two forward queries and one inverse query distinguish it with advantage at least $1 - 2^{1-n}$ ([[no-prf-to-strong-pseudorandom-permutation-three-round-feistel|No fixed-construction reduction from length-preserving PRF to Strong PRP on bit strings (three-round Feistel)]]) — folklore.
- Two Feistel rounds between initial and final pairwise-independent permutations already give a strong PRP, with a simpler proof — [[NR99 - On the Construction of Pseudorandom Permutations Luby-Rackoff Revisited|NR99]].
