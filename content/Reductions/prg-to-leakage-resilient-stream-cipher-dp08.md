---
type: reduction
status: draft
title: "PRG ⇒ Leakage-resilient stream cipher"
aliases: []
id: red-prg-to-leakage-resilient-stream-cipher-dp08
kind: implication
hypotheses: [non-uniform-prg]
conclusion: leakage-resilient-stream-cipher
class: unstated
model: standard
source:
  - "[[DP08 - Leakage-Resilient Cryptography|DP08]]"
security-loss: ""
---

# PRG ⇒ Leakage-resilient stream cipher

## Statement

From any [[pseudorandom-generator#security-against-non-uniform-adversaries|PRG secure against non-uniform adversaries]] there is a stream cipher that is [$\ell$-leakage-resilient](leakage-resilient-stream-cipher#leakage-resilience) when only the state a round accesses leaks. The leakage $\ell$ tolerated per round depends on the strength of the PRG: it is at least logarithmic in $\secpar$, and a constant fraction of the state when the PRG is exponentially hard — [[DP08 - Leakage-Resilient Cryptography|DP08]].

## Notes

- The proof rests on a lemma: the output of any PRG has high HILL pseudoentropy even when bounded information about its seed is leaked; the construction combines the PRG with a randomness extractor by alternating extraction — [[DP08 - Leakage-Resilient Cryptography|DP08]].
- A mode of operation of a single [[pseudorandom-function#weak-prfs|weak PRF]] gives a simpler leakage-resilient stream cipher: [[weak-prf-to-leakage-resilient-stream-cipher-pie09|Weak PRF ⇒ Leakage-resilient stream cipher]] — [[Pie09 - A Leakage-Resilient Mode of Operation|Pie09]].
- The restriction of leakage to the accessed state is the axiom that only computation leaks information — [[MR04 - Physically Observable Cryptography|MR04]].
