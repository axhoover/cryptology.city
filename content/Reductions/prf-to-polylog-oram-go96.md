---
type: reduction
status: draft
title: "PRF ⇒ polylogarithmic-overhead ORAM (hierarchical ORAM)"
aliases:
  - Hierarchical ORAM
id: red-prf-to-polylog-oram-go96
kind: implication
hypotheses: [prf]
conclusion: polylog-oram
class: fully-black-box
model: standard
source:
  - "[[GO96 - Software protection and simulation on oblivious RAMs|GO96]]"
security-loss: ""
rationale:
  class: "The construction calls the private random function only as an oracle, so instantiating it with a PRF gives a reduction that runs any access-pattern distinguisher only as an oracle to distinguish the PRF from a random function."
---

# PRF ⇒ polylogarithmic-overhead ORAM (hierarchical ORAM)

## Statement

An arbitrary RAM can be simulated online by a probabilistic oblivious RAM with polylogarithmic slowdown, whose CPU has $O(1)$ registers and a random function only it can access: the hierarchical construction — [[GO96 - Software protection and simulation on oblivious RAMs|GO96]]. Instantiating the private random function with a [[pseudorandom-function|PRF]] under a key held by the client gives, for $\secpar \le N \le \poly(\secpar)$, a computationally secure [[oblivious-ram|ORAM]] with $\polylog(N)$ amortized bandwidth blowup and client storage of $O(1)$ blocks, a [[oblivious-ram#polylogarithmic-overhead-oram|polylogarithmic-overhead ORAM]] — [[GO96 - Software protection and simulation on oblivious RAMs|GO96]]. GO96 unify and extend the square-root ORAM of [[Gol87 - Towards a Theory of Software Protection and Simulation by Oblivious RAMs|Gol87]] and the hierarchical ORAM of [[Ost90 - Efficient Computation on Oblivious RAMs|Ost90]].

## Notes

- The square-root ORAM has $O(\sqrt{N} \cdot \log N)$ amortized overhead, with constant client memory and $O(N)$ server storage — [[GO96 - Software protection and simulation on oblivious RAMs|GO96]]. Its one-round version is optimal, up to logarithmic factors in client state, among one-round balls-and-bins ORAMs that do not duplicate balls ([[no-oram-to-sub-square-root-one-round-oram-cdh20|No reduction from ORAM to sub-square-root one-round balls-and-bins ORAM]]) — [[CDH20 - A Lower Bound for One-Round Oblivious RAM|CDH20]].
- Statistically and perfectly secure simulations with polylogarithmic overhead exist without any assumption or random oracle — [[Ajt10 - Oblivious RAMs without Cryptographic Assumptions|Ajt10]], [[DMN11 - Perfectly Secure Oblivious RAM without Random Oracles|DMN11]].
- With a PRF the overhead drops to $O(\log N)$ ([[prf-to-logarithmic-oram-akl-20|PRF ⇒ logarithmic-overhead ORAM (OptORAMa)]]) — [[AKL+20 - OptORAMa Optimal Oblivious RAM|AKL+20]].
