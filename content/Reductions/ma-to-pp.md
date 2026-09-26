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

[[merlin-arthur|MA]] is contained in [[probabilistic-polynomial-time|PP]].

## Statement

$\classMA \subseteq \classPP$: every language with a [[merlin-arthur|Merlin–Arthur]] proof system is decidable in unbounded-error [[probabilistic-polynomial-time|probabilistic polynomial time]] — [[Ver92 - On the Power of PP|Ver92]].

## Sketch

Amplify the MA verifier's error below $2^{-(\ell+2)}$ by repetition on independent coins with the same witness, where $\ell$ bounds the witness length. The PP machine samples a uniform witness and runs the amplified verifier: for $x \in L$ it accepts with probability at least $2^{-\ell}(1 - 2^{-(\ell+2)}) \ge \tfrac{3}{4} \cdot 2^{-\ell}$, for $x \notin L$ with probability at most $2^{-(\ell+2)}$; the threshold $2^{-(\ell+1)}$ separates the two cases and can be shifted to $1/2$ — standard.

## Notes

`class: free`: Unconditional containment between complexity classes; repo convention assigns class free to such inclusions.
