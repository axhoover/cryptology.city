---
type: reduction
status: draft
title: "HVZK ⇒ NIZK (Fiat–Shamir)"
aliases: []
id: red-fiat-shamir-and-honest-verifier-zk-hvzk-to-nizk
kind: implication
hypotheses: [honest-verifier-zero-knowledge]
conclusion: nizk
class: fully-black-box
model: rom
source:
  - "[[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]"
via:
  - "[[fiat-shamir-heuristic|Fiat–Shamir]]"
security-loss: ""
---

# HVZK ⇒ NIZK (Fiat–Shamir)

A constant-round public-coin [[zero-knowledge-proof#honest-verifier-zk-hvzk|honest-verifier ZK (HVZK)]] proof with negligible soundness error implies [[non-interactive-zero-knowledge|NIZK]] in the random-oracle model, via the [[fiat-shamir-heuristic|Fiat–Shamir]] transform.

## Statement

The [[fiat-shamir-heuristic|Fiat–Shamir transform]] replaces each verifier challenge of a public-coin protocol by a hash of the statement and the transcript so far — [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]. Applied to a constant-round public-coin interactive proof that is [[zero-knowledge-proof#honest-verifier-zk-hvzk|honest-verifier zero-knowledge]] with negligible soundness error, it yields a [[non-interactive-zero-knowledge|NIZK]] argument in the random-oracle model — standard. For $\Sigma$-protocols the argument is zero-knowledge in the ROM, and with quasi-unique responses it is also simulation-sound and weakly simulation-extractable, hence non-malleable — [[FKMV12 - On the Non-malleability of the Fiat-Shamir Transform|FKMV12]].

## Sketch

Zero knowledge: the compiled challenges are uniform, exactly the honest verifier's, so the simulator runs the HVZK simulator and programs the random oracle to return its challenges. Soundness: each hash query fixes a prefix before its challenge is revealed, so a $q$-query prover gains at most a $\poly(q)$ factor over the interactive soundness error when the round count is constant.

## Notes

`class: fully-black-box`: One fixed compiler that runs the protocol's prover, verifier and honest-verifier simulator as oracles, substituting oracle values for challenges; zero knowledge holds by programming the random oracle with simulated transcripts, and the soundness reduction runs any cheating prover as an oracle, answering its oracle queries and forwarding one of them as the interactive first message. Black-box in the protocol and in the adversary, within the (programmable) ROM.

`model: rom`: Soundness of the compiled argument and zero knowledge (via oracle programming) are proved with the hash modeled as a programmable random oracle; in the standard model the transform can fail — [[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]].

- Soundness of the compiled protocol degrades with the number of rounds — standard; beyond constant rounds the transform needs state-restoration soundness of the underlying protocol — [[BCS16 - Interactive Oracle Proofs|BCS16]].
