---
type: reduction
status: draft
title: "MA ⊆ PP"
aliases: []
id: red-ma-to-pp
kind: inclusion
hypotheses: [ma]
conclusion: pp
class: free
model: standard
source:
  - "[[Ver92 - On the Power of PP|Ver92]]"
security-loss: ""
---

# MA ⊆ PP

## Statement

$\classMA \subseteq \classPP$: every language with a [[merlin-arthur|Merlin–Arthur]] proof system is decidable in unbounded-error [[probabilistic-polynomial-time|probabilistic polynomial time]] — [[Ver92 - On the Power of PP|Ver92]].

## Sketch

Repeat the MA verifier on independent coins with the same witness, driving its error below $2^{-(\ell+2)}$, where $\ell$ is the witness length. A machine that samples a uniform witness and runs the amplified verifier accepts with probability at least $2^{-\ell}(1 - 2^{-(\ell+2)}) \ge \tfrac{3}{4} \cdot 2^{-\ell}$ when $x \in L$ and at most $2^{-(\ell+2)}$ when $x \notin L$; shifting the separating threshold $2^{-(\ell+1)}$ to $1/2$ gives a $\classPP$ machine — standard.

## Notes

- No relativizing argument extends the containment to AM: there is an oracle relative to which $\classAM \not\subseteq \classPP$ — [[Ver92 - On the Power of PP|Ver92]]; see [[no-am-to-pp-ver92|No relativizing reduction from AM to PP]].
