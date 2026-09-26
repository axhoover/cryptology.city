---
type: reduction
status: draft
title: "Fiat-Shamir + Honest-verifier ZK (HVZK) ⇒ NIZK"
aliases: []
id: red-fiat-shamir-and-honest-verifier-zk-hvzk-to-nizk
kind: implication
hypotheses: [fiat-shamir, honest-verifier-zero-knowledge]
conclusion: nizk
class: unstated
model: rom
source:
  - "[[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]"
security-loss: ""
---

# Fiat-Shamir + Honest-verifier ZK (HVZK) ⇒ NIZK

[[fiat-shamir-heuristic|Fiat-Shamir]] applied to a constant-round public-coin [[zero-knowledge-proof#honest-verifier-zk-hvzk|honest-verifier ZK (HVZK)]] proof with negligible soundness error implies [[non-interactive-zero-knowledge|NIZK]] in the random-oracle model.

## Statement

The [[fiat-shamir-heuristic|Fiat–Shamir transform]] replaces each verifier challenge of a public-coin protocol by a hash of the statement and the transcript so far — [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]. Applied to a constant-round public-coin interactive proof that is [[zero-knowledge-proof#honest-verifier-zk-hvzk|honest-verifier zero-knowledge]] with negligible soundness error, it yields a [[non-interactive-zero-knowledge|NIZK]] argument in the random-oracle model — standard.

## Sketch

Zero knowledge: the compiled challenges are uniform, exactly the honest verifier's, so the simulator runs the HVZK simulator and programs the random oracle to return its challenges. Soundness: each hash query fixes a prefix before its challenge is revealed, so a $q$-query prover gains at most a $\poly(q)$ factor over the interactive soundness error when the round count is constant.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

`model: rom`: Soundness of the compiled argument and zero knowledge (via oracle programming) are proved with the hash modeled as a programmable random oracle; in the standard model the transform can fail — [[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]].
