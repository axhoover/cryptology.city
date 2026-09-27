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
---

# No relativizing reduction from AM to PP

A reduction of class `relativizing` from [[arthur-merlin|AM]] to [[probabilistic-polynomial-time|PP]] would imply a contradiction.

## Statement

There is an oracle relative to which $\classAM \not\subseteq \classPP$ — [[Ver92 - On the Power of PP|Ver92]]; no relativizing argument places [[arthur-merlin|AM]] inside [[probabilistic-polynomial-time|PP]].

## Notes

`class: relativizing`: an oracle separation rules out exactly the relativizing class, and by the partial order every fully-black-box argument; it says nothing about non-relativizing ones.

- The same paper proves [[ma-to-pp|MA ⊆ PP]].
