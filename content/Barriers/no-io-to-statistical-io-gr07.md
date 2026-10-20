---
type: barrier
status: draft
title: "No reduction from iO to statistical iO"
aliases: []
id: bar-io-to-statistical-io-gr07
hypotheses: [io]
conclusion: statistical-io
class: free
consequences:
  - kind: complexity
    target: np-complete-in-szk
    class: free
  - kind: complexity
    target: conp-subset-am
    class: free
  - kind: complexity
    target: ph-collapse-second-level
    class: free
strength: conditional
conditional-on: [io]
source:
  - "[[GR07 - On Best-Possible Obfuscation|GR07]]"
rationale:
  class: "The collapse follows from the existence of statistical iO, whatever construction or proof produces it, so every reduction is ruled out."
  strength: "A reduction from iO yields statistical iO, and hence the collapse, only if iO exists."
---

# No reduction from iO to statistical iO

## Statement

If an efficient [[indistinguishability-obfuscation#statistical-io|statistically secure indistinguishability obfuscator]] exists for 3-CNF formulas, then some $\classNP$-complete problem lies in [[statistical-zero-knowledge|SZK]], $\classcoNP \subseteq \classAM$, and the [[polynomial-time-hierarchy|polynomial hierarchy]] collapses to its second level — [[GR07 - On Best-Possible Obfuscation|GR07]], [[BHZ87 - Does co-NP Have Short Interactive Proofs|BHZ87]]. GR07 state the collapse for statistically secure best-possible obfuscators of 3-CNF formulas, even inefficient ones, and show that efficient indistinguishability obfuscators are best-possible obfuscators — [[GR07 - On Best-Possible Obfuscation|GR07]]. Hence, if [[indistinguishability-obfuscation|iO]] exists, no reduction of any kind turns it into statistical iO unless $\classcoNP \subseteq \classAM$.

## Sketch

For a 3-CNF $\varphi$ and the constant-$0$ formula $Z$ of the same size, $i\calO(1^\secpar, \varphi)$ and $i\calO(1^\secpar, Z)$ are statistically close if $\varphi$ is unsatisfiable, and have disjoint supports by perfect correctness if it is satisfiable. Both are sampled by polynomial-size circuits, so this reduces $\mathrm{SAT}$ to [[statistical-zero-knowledge#statistical-difference|Statistical Difference]], giving $\classNP \subseteq \classSZK \subseteq \classcoAM$ — [[SV03 - A Complete Problem for Statistical Zero Knowledge|SV03]], [[For87 - The Complexity of Perfect Zero-Knowledge|For87]].

## Notes

- The collapse extends to statistically secure obfuscators that are only approximately correct — [[Vol21 - The Final Nail in the Coffin of Statistically-Secure Obfuscator|Vol21]].
