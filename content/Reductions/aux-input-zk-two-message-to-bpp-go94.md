---
type: reduction
status: draft
title: "Two-message auxiliary-input ZK ⊆ BPP"
aliases: []
id: red-aux-input-zk-two-message-to-bpp-go94
kind: inclusion
hypotheses: [aux-input-zk-two-message]
conclusion: bpp
class: free
model: standard
source:
  - "[[GO94 - Definitions and Properties of Zero-Knowledge Proof Systems|GO94]]"
security-loss: ""
---

# Two-message auxiliary-input ZK ⊆ BPP

## Statement

Suppose a language $L$ has a [[computational-zero-knowledge#two-message-auxiliary-input-zero-knowledge|two-message interactive proof or argument]] (the verifier sends one message and the prover answers) with negligible soundness error that is auxiliary-input zero-knowledge. Then $L \in$ [[bounded-error-probabilistic-polynomial-time|BPP]] — [[GO94 - Definitions and Properties of Zero-Knowledge Proof Systems|GO94]].

## Sketch

Let $V^*$ be the verifier that sends its auxiliary input $z$ as its message, and let $\Sim$ be its simulator. To decide $L$ on $x$, sample honest-verifier coins $r$, compute the honest message $q$, run $\Sim(x, q)$, and accept iff the honest verifier with coins $r$ accepts the answer in the simulated view. On $x \in L$, acceptance is within a negligible amount of the completeness bound, since otherwise a non-uniform distinguisher with suitable coins $r$ hard-wired would tell simulated from real views on auxiliary input $q$. On $x \notin L$, $\Sim(x, \cdot)$ is an efficient cheating prover, so soundness makes acceptance negligible — standard.

## Notes

- The converse inclusion is trivial: every language in $\classBPP$ has such a protocol, in which the verifier decides alone — standard.
- Auxiliary-input zero knowledge for a language outside $\classBPP$ needs a randomized prover and a randomized verifier, and one-message zero knowledge without setup exists only for languages in $\classBPP$ — [[GO94 - Definitions and Properties of Zero-Knowledge Proof Systems|GO94]].
- Without auxiliary input, and under complexity assumptions, $\classNP$-complete languages have no two-round zero-knowledge proof with perfect completeness, even with non-black-box simulation — [[BLV03 - Lower Bounds for Non-Black-Box Zero Knowledge|BLV03]].
