---
type: reduction
status: draft
title: "DDH ⇒ PAKE in the CRS model (Katz–Ostrovsky–Yung)"
aliases: []
id: red-ddh-to-pake-koy01
kind: implication
hypotheses: [ddh]
conclusion: pake
class: unstated
model: crs
source:
  - "[[KOY01 - Efficient Password-Authenticated Key Exchange Using Human-Memorable Passwords|KOY01]]"
security-loss: ""
rationale:
  model: "The protocol uses public parameters known to all parties and generated before any execution, and its proof uses no random oracle."
---

# DDH ⇒ PAKE in the CRS model (Katz–Ostrovsky–Yung)

## Statement

If [[decisional-diffie-hellman|DDH]] is hard, there is a three-round [[password-authenticated-key-exchange|PAKE]] protocol with public parameters available to all parties that is [[password-authenticated-key-exchange#security|secure]] in the model of [[BPR00 - Authenticated Key Exchange Secure against Dictionary Attacks|BPR00]] without random oracles: for passwords drawn uniformly from a dictionary $D$ and all efficient admissible $\calA$ making $q_{\mathrm{send}}$ queries to $\mathsf{Send}$, the advantage of $\calA$ is at most $q_{\mathrm{send}}/|D|$ plus a negligible function — [[KOY01 - Efficient Password-Authenticated Key Exchange Using Human-Memorable Passwords|KOY01]].

## Notes

- [[GL03 - A Framework for Password-Based Authenticated Key Exchange|GL03]] generalize the protocol to a framework built from non-malleable commitments, one-time signatures and [[hash-proof-system|smooth projective hash functions]] in the common reference string model, and instantiate it under DDH, quadratic residuosity and $N$-th residuosity.
- Without any setup, trapdoor permutations give session-key generation from passwords alone, under a weaker guarantee in which an attack on an execution is comparable to a constant number of online password guesses — [[GL01 - Session-Key Generation Using Human Passwords Only|GL01]].
