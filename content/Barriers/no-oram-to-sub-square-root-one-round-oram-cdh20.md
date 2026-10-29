---
type: barrier
status: draft
title: "No reduction from ORAM to sub-square-root one-round balls-and-bins ORAM"
aliases: []
id: bar-oram-to-sub-square-root-one-round-oram-cdh20
hypotheses: [oram]
conclusion: sub-square-root-one-round-oram
class: free
consequences:
  - kind: contradiction
    target: ""
    class: free
strength: unconditional
source:
  - "[[CDH20 - A Lower Bound for One-Round Oblivious RAM|CDH20]]"
rationale:
  class: "CDH20's bound holds for every one-round non-duplicating balls-in-bins ORAM whatever its construction, so every reduction is ruled out."
  strength: "The hypothesis holds unconditionally via the linear-scan ORAM."
---

# No reduction from ORAM to sub-square-root one-round balls-and-bins ORAM

## Statement

Every [[oblivious-ram#one-round-oram|one-round]] [[oblivious-ram#balls-and-bins-oram|balls-and-bins ORAM]] that does not duplicate balls has $\Omega(\sqrt{N_1})$ bandwidth or $\Omega(\sqrt{N_1})$ client memory, where $N_1$ is the number of simulated memory slots — [[CDH20 - A Lower Bound for One-Round Oblivious RAM|CDH20]]. Hence no [[oblivious-ram#sub-square-root-one-round-balls-and-bins-oram|sub-square-root one-round balls-and-bins ORAM]] exists: no statistically secure one-round balls-and-bins ORAM that does not duplicate balls has both worst-case bandwidth blowup $o(\sqrt{N_1})$ and client storage of $o(\sqrt{N_1})$ blocks. [[oblivious-ram|ORAM]] exists unconditionally: the linear scan, which reads and rewrites every cell on each operation, is perfectly secure — folklore. Hence no reduction of any class from ORAM to such a scheme exists.

## Notes

- The bound is tight up to logarithmic factors in client state: a one-round version of the square-root ORAM of [[GO96 - Software protection and simulation on oblivious RAMs|GO96]] is optimal among such schemes — [[CDH20 - A Lower Bound for One-Round Oblivious RAM|CDH20]].
- A weaker bound holds when limited duplication of balls is allowed, and the bound extends to multi-round ORAMs of a restricted form that includes the best known constructions — [[CDH20 - A Lower Bound for One-Round Oblivious RAM|CDH20]].
- General multi-round ORAMs and ORAMs with server computation are strictly stronger than one-round balls-and-bins ORAMs — [[CDH20 - A Lower Bound for One-Round Oblivious RAM|CDH20]]. OptORAMa reaches $O(\log N_1)$ amortized bandwidth blowup with client storage of $O(1)$ blocks ([[prf-to-logarithmic-oram-akl-20|PRF ⇒ logarithmic-overhead ORAM (OptORAMa)]]) — [[AKL+20 - OptORAMa Optimal Oblivious RAM|AKL+20]], and Onion ORAM, which uses server computation, $O(1)$ worst-case bandwidth blowup ([[dcr-to-constant-bandwidth-oram-ddf-16|DCR ⇒ constant-bandwidth ORAM (Onion ORAM)]]) — [[DDF+16 - Onion ORAM A Constant Bandwidth Blowup Oblivious RAM|DDF+16]].
