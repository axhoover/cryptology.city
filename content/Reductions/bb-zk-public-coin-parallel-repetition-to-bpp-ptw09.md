---
type: reduction
status: draft
title: "Public-coin black-box ZK under parallel repetition ⊆ BPP"
aliases: []
id: red-bb-zk-public-coin-parallel-repetition-to-bpp-ptw09
kind: inclusion
hypotheses: [bb-zk-public-coin-parallel-repetition]
conclusion: bpp
class: free
model: standard
source:
  - "[[PTW09 - On the Composition of Public-Coin Zero-Knowledge Protocols|PTW09]]"
security-loss: ""
---

# Public-coin black-box ZK under parallel repetition ⊆ BPP

## Statement

Suppose a language $L$ has a [[computational-zero-knowledge#public-coin-black-box-zero-knowledge-under-parallel-repetition|public-coin interactive proof or argument]] with negligible soundness error that remains black-box zero-knowledge under polynomially many parallel repetitions. Then $L \in$ [[bounded-error-probabilistic-polynomial-time|BPP]] — [[PTW09 - On the Composition of Public-Coin Zero-Knowledge Protocols|PTW09]].

## Notes

- The converse inclusion is trivial: every language in $\classBPP$ has such a protocol, in which the verifier decides alone — standard.
- The bound also holds in the bare public-key model, where prover and verifier have registered public keys — [[PTW09 - On the Composition of Public-Coin Zero-Knowledge Protocols|PTW09]].
- A sufficiently parallel-repeated public-coin protocol is resettably sound when the verifier derives its coins from a [[pseudorandom-function|pseudorandom function]] — [[PTW09 - On the Composition of Public-Coin Zero-Knowledge Protocols|PTW09]].
- One-way functions give a public-coin black-box zero-knowledge proof that stays zero-knowledge under any a-priori bounded number of concurrent executions — [[PTW09 - On the Composition of Public-Coin Zero-Knowledge Protocols|PTW09]].
- With a constant number of messages, public-coin black-box zero knowledge exists only for languages in $\classBPP$ even without repetition ([[bb-zk-constant-round-public-coin-to-bpp-gk96|Constant-round public-coin black-box ZK ⊆ BPP]]) — [[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96a]].
