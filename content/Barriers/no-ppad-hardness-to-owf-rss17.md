---
type: barrier
status: draft
title: "No fully-black-box reduction from PPAD hardness to OWF"
aliases: []
id: bar-ppad-hardness-to-owf-rss17
hypotheses: [ppad-hardness]
conclusion: owf
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
source:
  - "[[RSS17 - Can PPAD Hardness be Based on Standard Cryptographic Assumptions|RSS17]]"
rationale:
  class: "RSS17 rule out the RTV04 fully-black-box class, a construction that uses the hard-on-average SVL instance distribution only as an oracle paired with a reduction that uses any inverter only as an oracle."
---

# No fully-black-box reduction from PPAD hardness to OWF

## Statement

There is no fully-black-box construction of a [[hash-function#preimage-resistance-one-wayness|one-way function]] from [[total-function-np#ppad|average-case PPAD hardness]], a hard-on-average distribution of End-of-Line instances, nor even from a hard-on-average distribution of instances of the sink-of-verifiable-line problem (SVL) — [[RSS17 - Can PPAD Hardness be Based on Standard Cryptographic Assumptions|RSS17]]. An SVL instance consists of a source $x_s \in \bits^n$, a target index $T \in [2^n]$, a successor circuit $S : \bits^n \to \bits^n$ and a verification circuit $V : \bits^n \times [T] \to \bits$, promised to accept $(x, i)$ iff $x = S^{i-1}(x_s)$; its unique solution is the $x$ with $V(x, T) = 1$ — [[BPR15 - On the Cryptographic Hardness of Finding a Nash Equilibrium|BPR15]]. A hard-on-average SVL distribution gives a hard-on-average End-of-Line distribution by a black-box construction — [[BPR15 - On the Cryptographic Hardness of Finding a Nash Equilibrium|BPR15]], [[RSS17 - Can PPAD Hardness be Based on Standard Cryptographic Assumptions|RSS17]] — so the separation from SVL hardness implies the one from PPAD hardness.

## Notes

- SVL hardness has no black-box construction from [[trapdoor-permutation#injective-trapdoor-functions|injective trapdoor functions]], nor from any primitive that exists relative to a random injective trapdoor function oracle, [[hash-function#collision-resistance|collision-resistant hash functions]] among them — [[RSS17 - Can PPAD Hardness be Based on Standard Cryptographic Assumptions|RSS17]]. Nor has it one from average-case PPAD hardness, even from a hard-on-average distribution of End-of-Line instances that each have a unique solution — [[RSS17 - Can PPAD Hardness be Based on Standard Cryptographic Assumptions|RSS17]].
- There is no black-box construction of a hard-on-average distribution of End-of-Line instances over $\bits^n$ with $2^{n^{o(1)}}$ solutions from injective trapdoor functions, nor from any primitive that exists relative to a random injective trapdoor function oracle — [[RSS17 - Can PPAD Hardness be Based on Standard Cryptographic Assumptions|RSS17]]. The obfuscation-based constructions of [[subclasses-to-hash-function|Sub-exponential OWF + iO ⇒ PPAD hardness]] and [[io-and-owp-to-ppad-hardness-gps16|iO + OWP ⇒ PPAD hardness]] give instances with a unique solution — [[RSS17 - Can PPAD Hardness be Based on Standard Cryptographic Assumptions|RSS17]].
- With a one-way function added as a hypothesis, SVL hardness still gives no key agreement by a fully-black-box construction: [[no-ppad-hardness-and-owf-to-ke-rss17|No fully-black-box reduction from PPAD hardness + OWF to KE]] — [[RSS17 - Can PPAD Hardness be Based on Standard Cryptographic Assumptions|RSS17]].
