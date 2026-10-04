---
type: barrier
status: draft
title: "No relativizing reduction from OWP to KE"
aliases: []
id: bar-owp-to-ke-ir89
hypotheses: [owp]
conclusion: ke
class: relativizing
consequences:
  - kind: contradiction
    target: ""
    class: relativizing
strength: unconditional
source:
  - "[[IR89 - Limits on the provable consequences of one-way permutations|IR89]]"
rationale:
  class: "IR89 give an oracle separation, which defeats every construction and security proof that holds relative to all oracles, fully-black-box ones included."
---

# No relativizing reduction from OWP to KE

## Statement

No relativizing construction of [[key-exchange|key agreement]] from a [[one-way-permutation|one-way permutation]] exists, and in particular no fully-black-box one: relative to a random permutation together with a $\classPSPACE$-complete oracle, one-way permutations exist and no key-agreement protocol is secure — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]]. The oracle result is a corollary of IR89's conditional theorem: relative to a random permutation, if $\classP = \classNP$ then every key-agreement protocol is broken, so proving secure any key-agreement protocol that uses the permutation as a black box is as hard as proving $\classP \neq \classNP$.

## Sketch

Relative to a random permutation $\pi$, the eavesdropper, holding the transcript, repeatedly samples executions of the two parties consistent with everything she knows and queries $\pi$ at every point such executions query with non-negligible probability; once she holds every query the parties have in common, a fresh consistent view of one party yields that party's key. The sampling is efficient if $\classP = \classNP$, which the $\classPSPACE$-complete oracle provides.

## Notes

- Against honest parties making $\ell$ queries, IR89's eavesdropper makes roughly $\ell^{6}$ queries for a random function and roughly $\ell^{12}$ for a random permutation, as BM09 report; BM09 reduce both to $O(\ell^2)$, matching Merkle's puzzles, so no random-oracle key agreement achieves a better-than-quadratic query gap — [[BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle|BM09]].
- A one-way permutation is a one-way function and PKE gives two-message key agreement, so the same oracle rules out relativizing constructions of PKE from one-way functions: [[no-hash-function-to-pke-gkm-00|No relativizing reduction from OWF to PKE]] — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]].
