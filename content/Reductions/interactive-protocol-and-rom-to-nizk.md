---
type: reduction
status: draft
title: "interactive protocol + ROM ⇒ NIZK"
aliases: []
id: red-interactive-protocol-and-rom-to-nizk
kind: implication
hypotheses: [interactive-protocol, rom]
conclusion: nizk
class: fully-black-box
model: rom
source:
  - "[[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]"
security-loss: ""
---

# interactive protocol + ROM ⇒ NIZK

A constant-round public-coin [[interactive-protocol|interactive protocol]] that is honest-verifier zero-knowledge with negligible soundness error, together with [[random-oracle-model|ROM]], implies [[non-interactive-zero-knowledge|NIZK]] via the Fiat–Shamir transform.

## Statement

The [[fiat-shamir-heuristic|Fiat–Shamir transform]] replaces each verifier challenge of a public-coin [[interactive-protocol|interactive protocol]] by a hash of the statement and the transcript so far [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]. Applied to a constant-round public-coin interactive proof that is [[zero-knowledge-proof#honest-verifier-zk-hvzk|honest-verifier zero-knowledge]] with negligible soundness error, it yields a [[non-interactive-zero-knowledge|NIZK]] argument in the [[random-oracle-model|random-oracle model]] — standard; for $\Sigma$-protocols the argument is zero-knowledge, and simulation-sound when responses are quasi-unique, in the ROM [[FKMV12 - On the Non-malleability of the Fiat-Shamir Transform|FKMV12]].

## Sketch

For a three-move protocol the prover sets $c := H(x, a)$ and outputs $(a, z)$; the simulator produces an accepting $(a, c, z)$ with the honest-verifier simulator and programs $H(x, a) := c$; a cheating prover making $q$ oracle queries must answer a fresh uniform challenge for one of them, so its success probability is at most $q + 1$ times the interactive soundness error.

## Notes

`class: fully-black-box`: One fixed compiler that runs the protocol's prover, verifier and honest-verifier simulator as oracles, substituting oracle values for challenges; zero knowledge holds by programming the random oracle with simulated transcripts, and the soundness reduction runs any cheating prover as an oracle, answering its oracle queries and forwarding one of them as the interactive first message. Black-box in the protocol and in the adversary, within the (programmable) ROM.

`model: rom`: The transform is proven only in the ROM; instantiated with a concrete hash function it fails for some protocols ([[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]], [[KRS25 - How to Prove False Statements Practical Attacks on Fiat-Shamir|KRS25]]).

- Weak simulation extractability of the transform in the ROM, for $\Sigma$-protocols with quasi-unique responses — [[FKMV12 - On the Non-malleability of the Fiat-Shamir Transform|FKMV12]]
- Soundness of the compiled protocol degrades with the number of rounds — standard; beyond constant rounds the transform needs state-restoration soundness of the underlying protocol [[BCS16 - Interactive Oracle Proofs|BCS16]].
