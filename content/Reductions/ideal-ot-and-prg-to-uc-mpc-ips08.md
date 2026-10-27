---
type: reduction
status: draft
title: "Ideal OT + PRG ⇒ UC MPC (IPS)"
aliases: []
id: red-ideal-ot-and-prg-to-uc-mpc-ips08
kind: implication
hypotheses: [ideal-ot, prg]
conclusion: uc-mpc
class: unstated
model: standard
source:
  - "[[IPS08 - Founding Cryptography on Oblivious Transfer Efficiently|IPS08]]"
security-loss: ""
rationale:
  class: "IPS08 prove UC security in the OT-hybrid model, a composition statement the RTV04 classes do not capture, although the protocol calls the PRG only as a black box."
---

# Ideal OT + PRG ⇒ UC MPC (IPS)

## Statement

In the OT-hybrid model ([[oblivious-transfer#ideal-ot-functionality|ideal OT]]), given a [[pseudorandom-generator|PRG]] used only as a black box, every functionality has a computationally UC-secure protocol with a constant number of rounds against a static malicious adversary corrupting any number of parties ([[secure-multi-party-computation#universal-composability-uc|UC MPC]]). For three or more parties these are the first constant-round protocols that use cryptographic primitives only as black boxes, and they avoid zero-knowledge proofs. The compiler combines a protocol secure with an honest majority with a protocol secure against semi-honest parties without an honest majority — [[IPS08 - Founding Cryptography on Oblivious Transfer Efficiently|IPS08]].

## Notes

- Efficiency: constant rounds — [[IPS08 - Founding Cryptography on Oblivious Transfer Efficiently|IPS08]].
- The same compiler gives, in the OT-hybrid model, statistically UC-secure 2PC with communication $O(s) + \poly(\secpar, d, \log s)$ and $O(d)$ rounds for a circuit of size $s$ and depth $d$, which extends to any constant number of parties, and malicious OT extension with constant amortized communication overhead — [[IPS08 - Founding Cryptography on Oblivious Transfer Efficiently|IPS08]].
- A protocol that UC-realizes OT can replace the ideal calls, by the composition theorem — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]]; without any setup UC MPC is impossible ([[no-authenticated-channels-to-uc-mpc-ckl03|no UC MPC from authenticated channels]]) — [[CKL03 - On the Limitations of Universally Composable Two-Party Computation without Set-up Assumptions|CKL03]].
