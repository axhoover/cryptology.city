---
type: reduction
status: draft
title: "OWF ⇒ ZKP (MPC in the head)"
aliases: []
id: red-owf-to-zkp-ikos07
kind: implication
hypotheses: [owf]
conclusion: zkp
class: fully-black-box
model: standard
source:
  - "[[IKOS07 - Zero-Knowledge from Secure Multiparty Computation|IKOS07]]"
security-loss: ""
rationale:
  class: "The protocol uses Naor's commitment on the HILL generator and the multi-party protocol only as oracles, soundness is statistical, and zero knowledge reduces to commitment hiding through a simulator and a reduction that use the cheating verifier and distinguisher only as oracles."
---

# OWF ⇒ ZKP (MPC in the head)

## Statement

Suppose [[hash-function#preimage-resistance-one-wayness|one-way functions]] exist, and let $R(x, w)$ be an $\classNP$ relation checked by a circuit of size $s$ on witnesses of length $m$. Then $R$ has a computational [[zero-knowledge-proof|zero-knowledge proof]] that uses a statistically binding commitment, and a multi-party protocol computing $R(x, w_1 \oplus \cdots \oplus w_n)$ from additive shares of $w$, only as black boxes; the multi-party protocol need only be secure against a small number of semi-honest parties — [[IKOS07 - Zero-Knowledge from Secure Multiparty Computation|IKOS07]]. Such protocols exist unconditionally with an honest majority — [[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]]. For security parameter $k$, the communication is $O(s) + \poly(k)$ for a circuit with bounded fan-in, and $m \cdot \poly(k) \cdot \polylog(s)$ for a constant-depth circuit with unbounded fan-in — [[IKOS07 - Zero-Knowledge from Secure Multiparty Computation|IKOS07]].

## Sketch

The prover splits $w$ into shares $w_1 \oplus \cdots \oplus w_n$, runs in its head a protocol private against any two parties, and commits to every party's view. The verifier opens two random views and accepts iff they are consistent and output 1. For a false statement, perfect correctness and statistical binding force some inconsistent pair, which is caught with probability at least $1/\binom{n}{2}$ per repetition, and privacy against two parties together with hiding give the simulator — [[IKOS07 - Zero-Knowledge from Secure Multiparty Computation|IKOS07]].

## Notes

- The previous best communication for such proofs was $O(ks)$ — [[IKOS07 - Zero-Knowledge from Secure Multiparty Computation|IKOS07]].
- The commitment is Naor's, on a pseudorandom generator from the one-way function ([[prg-to-com-naor91|PRG ⇒ COM]], [[owf-to-prg-hill99|OWF ⇒ PRG]]) — [[Naor91 - Bit commitment using pseudorandomness|Naor91]], [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]]. The same hypothesis gives zero-knowledge proofs for $\classNP$ through graph 3-colorability ([[hash-function-to-zkp-gmw91|OWF ⇒ ZKP]]) — [[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]].
