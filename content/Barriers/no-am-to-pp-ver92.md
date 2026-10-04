---
type: barrier
status: draft
title: "No relativizing reduction from AM to PP"
aliases: []
id: bar-am-to-pp-ver92
hypotheses: [am]
conclusion: pp
class: relativizing
consequences:
  - kind: contradiction
    target: ""
    class: relativizing
strength: unconditional
source:
  - "[[Ver92 - On the Power of PP|Ver92]]"
rationale:
  class: "Ver92 gives an oracle relative to which AM is not contained in PP, which rules out exactly the relativizing proofs of the inclusion (and, by the partial order, every fully-black-box one) and says nothing about non-relativizing ones."
---

# No relativizing reduction from AM to PP

## Statement

No relativizing reduction from [[arthur-merlin|AM]] to [[probabilistic-polynomial-time|PP]] exists: there is an oracle relative to which $\classAM \not\subseteq \classPP$ — [[Ver92 - On the Power of PP|Ver92]].

## Notes

- [[Ver92 - On the Power of PP|Ver92]] also proves [[ma-to-pp|MA ⊆ PP]].
