---
type: barrier
status: draft
title: "No reduction from ORAM to sublogarithmic-overhead balls-and-bins ORAM"
aliases: []
id: bar-oram-to-sublogarithmic-balls-and-bins-oram-go96
hypotheses: [oram]
conclusion: sublogarithmic-balls-and-bins-oram
class: free
consequences:
  - kind: contradiction
    target: ""
    class: free
strength: unconditional
source:
  - "[[GO96 - Software protection and simulation on oblivious RAMs|GO96]]"
rationale:
  class: "GO96's counting bound holds for every statistically secure balls-and-bins ORAM whatever its construction, so every reduction is ruled out."
  strength: "The hypothesis holds unconditionally via the linear-scan ORAM."
---

# No reduction from ORAM to sublogarithmic-overhead balls-and-bins ORAM

## Statement

Every [[oblivious-ram#statistically-secure-oram|statistically secure]] [[oblivious-ram#balls-and-bins-oram|balls-and-bins ORAM]] with client storage of $O(1)$ blocks has amortized bandwidth blowup $\Omega(\log N_1)$ over $N_1$ blocks. The bound holds even for an [[oblivious-ram#offline-oram|offline ORAM]], which receives the whole operation sequence before it starts — [[GO96 - Software protection and simulation on oblivious RAMs|GO96]]. Hence no [[oblivious-ram#sublogarithmic-overhead-balls-and-bins-oram|sublogarithmic-overhead balls-and-bins ORAM]] exists. [[oblivious-ram|ORAM]] exists unconditionally: the linear scan, which reads and rewrites every cell on each operation, is perfectly secure — folklore. Hence no reduction of any class from ORAM to such a scheme exists.

## Notes

- The bound applies only to ORAMs that move blocks without encoding them and whose security is statistical — [[BN16 - Is There an Oblivious RAM Lower Bound|BN16]], [[LN18 - Yes, There is an Oblivious RAM Lower Bound!|LN18]]. Without the balls-and-bins restriction, an offline lower bound would imply superlinear lower bounds on the size of sorting circuits ([[small-sorting-circuits-to-sublogarithmic-offline-oram-bn16|Small sorting circuits ⇒ sublogarithmic-overhead offline ORAM]]) — [[BN16 - Is There an Oblivious RAM Lower Bound|BN16]].
- For online ORAM, LN18 remove both restrictions ([[no-oram-to-sublogarithmic-oram-ln18|No reduction from ORAM to sublogarithmic-overhead ORAM]]) — [[LN18 - Yes, There is an Oblivious RAM Lower Bound!|LN18]].
- The bound also extends to read-only balls-and-bins ORAM — [[WW18 - Is There an Oblivious RAM Lower Bound for Online Reads|WW18]].
- For a RAM with $N$ words of $N^{\varepsilon}$ bits, for a constant $0 < \varepsilon < 1$, Circuit ORAM is statistically secure with $O(1)$ words of client storage and runs $T$ steps in time $O(T \log N) \cdot \omega(1)$, showing that the bound is tight for some parameter ranges — [[WCS15 - Circuit ORAM On Tightness of the Goldreich-Ostrovsky Lower Bound|WCS15]].
- Computationally secure balls-and-bins ORAMs come within a $\log\log N_1$ factor of the bound: PanORAMa, with $O(\log N_1 \cdot \log\log N_1)$ amortized bandwidth blowup and client storage of $O(1)$ blocks, can be instantiated in the balls-and-bins model — [[PPRY18 - PanORAMa Oblivious RAM with Logarithmic Overhead|PPRY18]].
