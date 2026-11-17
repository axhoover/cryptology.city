---
type: reduction
status: draft
title: "HVZK ⇒ NIZK (Fiat–Shamir)"
aliases: []
id: red-fiat-shamir-and-honest-verifier-zk-hvzk-to-nizk
kind: implication
hypotheses: [constant-round-public-coin-hvzk-proof]
conclusion: nizk-argument-for-np
class: fully-black-box
model: rom
source:
  - folklore
  - "[[FKMV12 - On the Non-malleability of the Fiat-Shamir Transform|FKMV12]]"
via:
  - "[[fiat-shamir-heuristic|Fiat–Shamir]]"
security-loss: "soundness: factor $O(q^r)$ over the interactive soundness error for a $q$-query prover and $r$ challenge rounds, $q + 1$ for three-move protocols; zero knowledge: the HVZK simulation error plus the probability that a programmed oracle point was queried before"
rationale:
  class: "One fixed compiler runs the protocol's prover, verifier and honest-verifier simulator only as oracles, and the soundness reduction runs any cheating prover only as an oracle, answering its oracle queries and forwarding chosen ones as its interactive messages."
  model: "Soundness and zero knowledge are proved with the hash modelled as a programmable random oracle, which the simulator programs with simulated transcripts."
  security-loss: "An accepted proof fixes each challenge at one of the prover's oracle queries, and the interactive prover guesses one query per round to forward to the verifier."
---

# HVZK ⇒ NIZK (Fiat–Shamir)

## Statement

The [[fiat-shamir-heuristic|Fiat–Shamir transform]] replaces each verifier challenge of a public-coin protocol by a hash of the statement and the transcript so far — [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]. Applied to a perfectly complete constant-round public-coin interactive proof for an $\classNP$-complete language that is [[zero-knowledge-proof#constant-round-public-coin-hvzk-proofs|honest-verifier zero-knowledge]] with negligible soundness error, and whose first prover message has min-entropy $\omega(\log \secpar)$, it yields a [[non-interactive-zero-knowledge#nizk-arguments-for-np|NIZK argument]] for $\classNP$ in the [[random-oracle-model|random-oracle model]] — standard. For $\Sigma$-protocols whose first message has super-logarithmic min-entropy, the argument is zero-knowledge in the ROM, and with quasi-unique responses it is also simulation-sound and weakly simulation-extractable, hence non-malleable — [[FKMV12 - On the Non-malleability of the Fiat-Shamir Transform|FKMV12]].

## Sketch

Zero knowledge: the compiled challenges are uniform, exactly the honest verifier's, so the simulator runs the HVZK simulator and programs the random oracle to return its challenges, which fails only if the adversary queried a programmed point beforehand, an event of negligible probability by the min-entropy condition. Soundness: each oracle query fixes the statement and a prefix before its challenge is revealed, so a $q$-query prover gains at most a $\poly(q)$ factor over the interactive soundness error when the round count is constant.

## Notes

- Soundness of the compiled protocol degrades with the number of rounds — standard; beyond constant rounds the transform needs state-restoration soundness of the underlying protocol — [[BCS16 - Interactive Oracle Proofs|BCS16]].
- In the standard model the transform can fail: if collision-resistant hash functions exist, there is a 3-round public-coin argument whose transform is unsound for every efficient hash function — [[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]] ([[no-fiat-shamir-to-nizk-gk03|No fixed-construction reduction from Fiat-Shamir to NIZK]]).
