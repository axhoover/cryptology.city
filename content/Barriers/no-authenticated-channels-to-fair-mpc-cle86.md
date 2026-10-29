---
type: barrier
status: draft
title: "No reduction from authenticated channels to fair MPC"
aliases: []
id: bar-authenticated-channels-to-fair-mpc-cle86
hypotheses: [authenticated-channels]
conclusion: fair-mpc
class: free
consequences:
  - kind: contradiction
    target: ""
    class: free
strength: unconditional
source:
  - "[[Cle86 - Limits on the security of coin flips when half the processors are faulty|Cle86]]"
rationale:
  class: "Cleve's fail-stop attack on the coin flip that a fair XOR protocol induces works whatever the protocol's assumptions or proof, so every reduction is ruled out."
---

# No reduction from authenticated channels to fair MPC

## Statement

Over [[interactive-protocol#authenticated-channels|authenticated point-to-point channels]] without setup, even with a broadcast channel, no protocol computes the two-party Boolean XOR $(x_1, x_2) \mapsto x_1 \oplus x_2$ with [[secure-multi-party-computation#fairness|complete fairness]] against a malicious adversary corrupting one party. Run on uniform inputs, such a protocol would be a coin flip with negligible bias, and every $r$-round coin flip can be biased by $\Omega(1/r)$ by an efficient fail-stop adversary — [[Cle86 - Limits on the security of coin flips when half the processors are faulty|Cle86]]. The adversary runs only the protocol's own code, so the bound holds whatever hardness assumption the protocol uses, and no reduction of any kind gives fair MPC from authenticated channels.

## Sketch

Run a completely fair XOR protocol on uniform inputs, each honest party replacing an output $\bot$ by a fresh uniform bit. In the fair ideal execution the honest party's output is then uniform, since the simulator either aborts before $f$ is computed or submits an input independent of the honest party's uniform input; the protocol is therefore a coin flip with negligible bias, which contradicts Cleve's bound — standard.

## Notes

- Cleve's result is, essentially, that Boolean XOR cannot be computed with complete fairness — [[GHKL08 - Complete Fairness in Secure Two-Party Computation|GHKL08]].
- Complete fairness without an honest majority is achievable for some non-trivial functions under standard cryptographic assumptions: every two-party function over polynomial-size domains with no embedded XOR, including Boolean AND and OR and Yao's millionaires' problem, has a completely fair protocol, and so do some functions with an embedded XOR, but every completely fair protocol for those needs a number of rounds super-logarithmic in the security parameter — [[GHKL08 - Complete Fairness in Secure Two-Party Computation|GHKL08]].
- With an honest majority, guaranteed output delivery, and with it fairness, is achievable over secure channels with a broadcast channel against $t < n/2$ ([Secure channels ⇒ MPC with honest majority ($t < n/2$)](honest-majority-t-lt-n-over-2-to-mpc-rb89)) — [[RB89 - Verifiable Secret Sharing and Multiparty Protocols with Honest Majority|RB89]].
- The same attack bounds the bias of every coin-flipping protocol ([[no-authenticated-channels-to-fair-coin-flipping-cle86|no reduction from authenticated channels to fair coin flipping]]) — [[Cle86 - Limits on the security of coin flips when half the processors are faulty|Cle86]].
- The XOR form survives a common reference string: for each fixed reference string Cleve's adversary biases the honest party's output toward a bit that depends on the string, which the distinguisher can compute, while in the fair ideal execution that output is uniform and independent of the string the simulator produces — folklore.
