---
type: reduction
status: draft
title: "PRF ⇒ Garbled circuits (BHR)"
aliases: []
id: red-prf-to-garbled-circuits-bhr12
kind: implication
hypotheses: [prf]
conclusion: garbled-circuits
class: fully-black-box
model: standard
source:
  - "[[BHR12 - Foundations of Garbled Circuits|BHR12]]"
security-loss: ""
rationale:
  class: "The scheme calls the PRF only as an oracle, through a dual-key cipher, and the privacy reduction runs any adversary as an oracle to distinguish the PRF from a random function."
---

# PRF ⇒ Garbled circuits (BHR)

## Statement

Any [[pseudorandom-function|PRF]] yields a projective [[garbled-circuit|garbling scheme]] achieving [[garbled-circuit#privacy|privacy]]: the garbled circuit, together with the input labels of $x$ and the decoding information, can be simulated from $f$ and $f(x)$. The PRF is turned into a dual-key cipher, which encrypts the rows of each gate's garbled table. BHR12 also analyse the scheme's concrete security and extend it to obliviousness and authenticity — [[BHR12 - Foundations of Garbled Circuits|BHR12]].

## Notes

- Efficiency: each gate's garbled table holds four ciphertexts of the dual-key cipher — standard; BHR12 give blockcipher-based instantiations — [[BHR12 - Foundations of Garbled Circuits|BHR12]].
- With OT, the scheme gives two-party computation secure against semi-honest adversaries ([[gc-and-ot-to-two-party-computation-2pc|Yao's protocol]]) — [[Yao86 - How to Generate and Exchange Secrets|Yao86]], [[LP09 - A Proof of Security of Yao's Protocol for Two-Party Computation|LP09]].
