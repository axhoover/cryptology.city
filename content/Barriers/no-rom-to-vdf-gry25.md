---
type: barrier
status: draft
title: "No reduction from ROM to VDF"
aliases: []
id: bar-rom-to-vdf-gry25
hypotheses: [rom]
conclusion: vdf
class: free
consequences:
  - kind: contradiction
    target: ""
    class: free
strength: unconditional
source:
  - "[[GRY25 - Breaking Verifiable Delay Functions in the Random Oracle Model|GRY25]]"
  - "[[AAK+25 - Impossibility of VDFs in the ROM The Complete Picture|AAK+25]]"
rationale:
  class: "GRY25 and AAK+25 break every random-oracle VDF whatever its security proof, so every reduction is ruled out: the free class, scoped to the random-oracle model."
---

# No reduction from ROM to VDF

## Statement

No reduction of any kind from the [[random-oracle-model|random oracle model]] to [[verifiable-delay-function|verifiable delay functions]] exists. With running time measured by oracle queries and parallel time by rounds of oracle queries, VDFs with imperfect completeness and non-adaptive computational uniqueness do not exist in the random oracle model when the setup is public-coin — [[GRY25 - Breaking Verifiable Delay Functions in the Random Oracle Model|GRY25]] — nor when the setup is private-coin, even if it is computationally expensive — [[AAK+25 - Impossibility of VDFs in the ROM The Complete Picture|AAK+25]].

## Notes

- The first result of this kind covers VDFs with perfect uniqueness: an attacker finds the output in roughly as many rounds of queries as verification takes, with $\poly(T)$ queries in total — [[MSW20 - Can Verifiable Delay Functions Be Based on Random Oracles|MSW20]].
- The impossibility also rules out black-box constructions of VDFs from one-way functions, one-way permutations and collision-resistant hash functions — [[GRY25 - Breaking Verifiable Delay Functions in the Random Oracle Model|GRY25]].
- With a computational assumption added, the model admits VDFs: assuming the hardness of repeated squaring, there are VDFs with perfect completeness and computational uniqueness in the random oracle model — [[EFKP20 - Continuous Verifiable Delay Functions|EFKP20]].
