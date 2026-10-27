---
type: reduction
status: draft
title: "Enhanced TDP ⇒ 2PC with expected-time simulation (Ostrovsky–Richelson–Scafuro)"
aliases: []
id: red-enhanced-trapdoor-permutation-to-two-party-computation-with-expected-time-simulation-ors15
kind: implication
hypotheses: [enhanced-trapdoor-permutation]
conclusion: two-party-computation-with-expected-time-simulation
class: fully-black-box
model: standard
source:
  - "[[ORS15 - Round-Optimal Black-Box Two-Party Computation|ORS15]]"
security-loss: ""
rationale:
  class: "ORS15 use the trapdoor permutation only through its interface and prove security by black-box simulation and reductions that use the adversary only as an oracle."
---

# Enhanced TDP ⇒ 2PC with expected-time simulation (Ostrovsky–Richelson–Scafuro)

## Statement

If [[trapdoor-permutation#enhanced-trapdoor-permutations|enhanced trapdoor permutations]] exist, every two-party functionality in which one party receives output has a four-round plain-model protocol secure with abort against a malicious adversary, with a black-box simulator, which uses the trapdoor permutation only as a black box and is round-optimal for black-box simulation. Its building block is a four-round OT that uses any enhanced trapdoor permutation as a black box, a parallel version of which is plugged into a black-box non-interactive secure computation protocol — [[ORS15 - Round-Optimal Black-Box Two-Party Computation|ORS15]]. A functionality in which both parties receive output reduces to one in which one party does, at the cost of one more round: that party also receives the other's output encrypted under a one-time pad and authenticated under a one-time MAC, with keys the other party supplied as input, and forwards it. Every two-party functionality therefore has such a protocol ([[secure-multi-party-computation#2pc-with-expected-polynomial-time-simulation|2PC with expected polynomial-time simulation]], the notion a constant-round black-box simulator meets) — standard.

## Notes

- Rounds: four when one party receives output, which is optimal for black-box simulation — [[ORS15 - Round-Optimal Black-Box Two-Party Computation|ORS15]]. Five are necessary when both parties receive output and one party sends per round: unconditionally, four rounds do not suffice to compute coin tossing of a super-logarithmic number of coins with a black-box proof of security — [[KO04 - Round-Optimal Secure Two-Party Computation|KO04]]; the bound concerns protocols without a simultaneous-message channel — [[GMPP16 - The Exact Round Complexity of Secure Computation|GMPP16]].
- KO04's five-round protocols are based on certified trapdoor permutations, implied by RSA with large public exponents, or on homomorphic encryption with additional properties, implied by DDH, and use the primitives' code — [[KO04 - Round-Optimal Secure Two-Party Computation|KO04]], [[ORS15 - Round-Optimal Black-Box Two-Party Computation|ORS15]].
- With a simultaneous-message channel, four rounds suffice for 2PC with black-box simulation, from trapdoor permutations secure against polynomial-time adversaries — [[COSV17 - Round-Optimal Secure Two-Party Computation from Trapdoor Permutations|COSV17]].
- In the plain model with simultaneous messages, MPC with a black-box proof of security needs at least four rounds, already for two parties — [[GMPP16 - The Exact Round Complexity of Secure Computation|GMPP16]].
