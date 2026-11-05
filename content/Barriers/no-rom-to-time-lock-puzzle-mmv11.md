---
type: barrier
status: draft
title: "No reduction from ROM to TLP"
aliases: []
id: bar-rom-to-time-lock-puzzle-mmv11
hypotheses: [rom]
conclusion: time-lock-puzzle
class: free
consequences:
  - kind: contradiction
    target: ""
    class: free
strength: unconditional
source:
  - "[[MMV11 - Time-Lock Puzzles in the Random Oracle Model|MMV11]]"
rationale:
  class: "MMV11's attack solves every random-oracle puzzle whatever its security proof, so every reduction is ruled out: the free class, scoped to the random-oracle model."
---

# No reduction from ROM to TLP

## Statement

No reduction of any kind from the [[random-oracle-model|random oracle model]] to [[time-lock-puzzle|time-lock puzzles]] exists. Measuring work by oracle queries and parallel time by rounds of oracle queries, [[MMV11 - Time-Lock Puzzles in the Random Oracle Model|MMV11]] rule out random-oracle time-lock puzzles that require more parallel time to solve than the total work required to generate a puzzle: a puzzle whose generator makes $n$ queries is solved in $O(n)$ rounds of polynomially many parallel queries each. The generator of a time-lock puzzle with gap $\varepsilon \in (0,1)$ in the sense of [[BGJ+16 - Time-Lock Puzzles from Randomized Encodings|BGJ+16]] makes $\poly(\log T, \secpar)$ queries, so MMV11's solver uses fewer than $T^\varepsilon$ rounds for every large enough polynomial $T$, and no time-lock puzzle exists in the model; the solver is bounded in oracle queries and rounds, not in computation.

## Notes

- A linear gap is possible: MMV11 construct a random-oracle puzzle generated with one round of $n$ parallel queries that requires $n$ rounds of serial queries to solve, even for massively parallel adversaries — [[MMV11 - Time-Lock Puzzles in the Random Oracle Model|MMV11]].
- The result is expected to rule out black-box constructions of such time-lock puzzles from one-way permutations and collision-resistant hash functions — [[MMV11 - Time-Lock Puzzles in the Random Oracle Model|MMV11]].
