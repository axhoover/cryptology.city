---
type: reduction
status: draft
title: "Small sorting circuits ⇒ sublogarithmic-overhead offline ORAM"
aliases: []
id: red-small-sorting-circuits-to-sublogarithmic-offline-oram-bn16
kind: implication
hypotheses: [small-sorting-circuits]
conclusion: sublogarithmic-offline-oram
class: free
model: standard
source:
  - "[[BN16 - Is There an Oblivious RAM Lower Bound|BN16]]"
security-loss: ""
rationale:
  class: "The offline ORAM evaluates the sorting circuit gate by gate on bit-sliced memory, so it uses the circuit's description rather than oracle access."
---

# Small sorting circuits ⇒ sublogarithmic-overhead offline ORAM

## Statement

Suppose Boolean circuits of size $s(n, w)$ sort $n$ words of $w$ bits. Then for word size $w \in \Omega(\log n) \cap n^{o(1)}$ and a constant number of client registers, there is a secure [[oblivious-ram#offline-oram|offline ORAM]] with total bandwidth and computation $O(n \log w + s(2n/w, w))$; with client memory of at least $w$ bits, the additive $O(n \log w)$ term drops to $O(n)$ — [[BN16 - Is There an Oblivious RAM Lower Bound|BN16]]. Under [[sorting-circuits#small-sorting-circuits|small sorting circuits]], $s(n, w) = o(n \cdot w \cdot \log n)$ for every such $w$, so $s(2n/w, w) = o(n \log n)$, and $\log w = o(\log n)$; the offline ORAM therefore has $o(\log n)$ amortized overhead and is a [[oblivious-ram#sublogarithmic-overhead-offline-oram|sublogarithmic-overhead offline ORAM]] — [[BN16 - Is There an Oblivious RAM Lower Bound|BN16]], [[WW18 - Is There an Oblivious RAM Lower Bound for Online Reads|WW18]].

## Notes

- Contrapositively, an $\Omega(\log n)$ lower bound for offline ORAM without the balls-and-bins restriction would show that for some word size $w \in \Omega(\log n) \cap n^{o(1)}$, sorting $n$ words of $w$ bits has no Boolean circuits of size $o(n \cdot w \cdot \log n)$, a superlinear lower bound in the input length $n w$ — [[BN16 - Is There an Oblivious RAM Lower Bound|BN16]]. No superlinear lower bound on general Boolean circuit size is known for any explicit function — standard.
- Under the balls-and-bins restriction with statistical security, offline ORAM has $\Omega(\log n)$ overhead ([[no-oram-to-sublogarithmic-balls-and-bins-oram-go96|No reduction from ORAM to sublogarithmic-overhead balls-and-bins ORAM]]) — [[GO96 - Software protection and simulation on oblivious RAMs|GO96]], and online ORAM has it without either restriction ([[no-oram-to-sublogarithmic-oram-ln18|No reduction from ORAM to sublogarithmic-overhead ORAM]]) — [[LN18 - Yes, There is an Oblivious RAM Lower Bound!|LN18]].
