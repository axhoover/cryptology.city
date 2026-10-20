---
type: reduction
status: draft
title: "iO + OWP ⇒ CLS hardness"
aliases: []
id: red-io-and-owp-to-cls-hardness-hy17
kind: implication
hypotheses: [io, owp]
conclusion: cls-hardness
class: free
model: standard
source:
  - "[[HY17 - Hardness of Continuous Local Search Query Complexity and Cryptographic Lower Bounds|HY17]]"
security-loss: ""
rationale:
  class: "The hard instances are built from obfuscated circuits that evaluate the one-way permutation and primitives built from it, so the construction uses their code rather than oracle access; HY17 state no reduction notion."
---

# iO + OWP ⇒ CLS hardness

## Statement

If [[indistinguishability-obfuscation|indistinguishability obfuscation]] for all polynomial-size circuits and [[one-way-permutation|one-way permutations]] exist, then [[total-function-np#cls|CLS is hard on average]]: there is an efficiently samplable distribution over instances of End-of-Metered-Line, a problem in CLS, such that for all efficient $\calA$, the probability that $\calA$ outputs a solution is negligible — [[HY17 - Hardness of Continuous Local Search Query Complexity and Cryptographic Lower Bounds|HY17]]. HY17 reduce Sink-of-Verifiable-Line to End-of-Metered-Line and apply the reduction to the hard Sink-of-Verifiable-Line instances built from iO — [[HY17 - Hardness of Continuous Local Search Query Complexity and Cryptographic Lower Bounds|HY17]], [[BPR15 - On the Cryptographic Hardness of Finding a Nash Equilibrium|BPR15]], [[GPS16 - Revisiting the Cryptographic Hardness of Finding a Nash Equilibrium|GPS16]].

## Notes

- In the black-box setting, with $S$, $P$ and $V$ given as oracles, every randomized algorithm needs $\Omega(2^{n/2}/\sqrt{n})$ queries to solve End-of-Metered-Line — [[HY17 - Hardness of Continuous Local Search Query Complexity and Cryptographic Lower Bounds|HY17]].
- Since CLS is contained in PPAD ([[cls-hardness-to-ppad-hardness-dp11|CLS hardness ⇒ PPAD hardness]]) — [[DP11 - Continuous Local Search|DP11]] — the result strengthens [[io-and-owp-to-ppad-hardness-gps16|iO + OWP ⇒ PPAD hardness]] — [[GPS16 - Revisiting the Cryptographic Hardness of Finding a Nash Equilibrium|GPS16]].
