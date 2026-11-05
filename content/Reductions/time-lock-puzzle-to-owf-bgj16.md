---
type: reduction
status: draft
title: "TLP ⇒ OWF"
aliases: []
id: red-time-lock-puzzle-to-owf-bgj16
kind: implication
hypotheses: [time-lock-puzzle]
conclusion: owf
class: unstated
model: standard
source:
  - "[[BGJ+16 - Time-Lock Puzzles from Randomized Encodings|BGJ+16]]"
security-loss: ""
---

# TLP ⇒ OWF

## Statement

If a [[time-lock-puzzle|time-lock puzzle]] exists, then a [[hash-function#preimage-resistance-one-wayness|one-way function]] exists — [[BGJ+16 - Time-Lock Puzzles from Randomized Encodings|BGJ+16]].

## Notes

- The existence of a non-parallelizing language, one decidable in time $t$ that no family of polynomial-size circuits of depth at most $t^\varepsilon$ decides, for some gap $\varepsilon < 1$, is also necessary for time-lock puzzles — [[BGJ+16 - Time-Lock Puzzles from Randomized Encodings|BGJ+16]].
