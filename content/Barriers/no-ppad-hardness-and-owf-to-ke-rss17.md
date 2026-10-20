---
type: barrier
status: draft
title: "No fully-black-box reduction from PPAD hardness + OWF to KE"
aliases: []
id: bar-ppad-hardness-and-owf-to-ke-rss17
hypotheses: [ppad-hardness, owf]
conclusion: ke
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
source:
  - "[[RSS17 - Can PPAD Hardness be Based on Standard Cryptographic Assumptions|RSS17]]"
rationale:
  class: "RSS17 rule out the RTV04 fully-black-box class, a construction that uses the one-way function and the hard-on-average SVL instance distribution only as oracles paired with a reduction that uses any eavesdropper only as an oracle."
---

# No fully-black-box reduction from PPAD hardness + OWF to KE

## Statement

There is no fully-black-box construction of a [[key-exchange|key-agreement protocol]] from a [[hash-function#preimage-resistance-one-wayness|one-way function]] together with [[total-function-np#ppad|average-case PPAD hardness]], a hard-on-average distribution of End-of-Line instances, nor even from a one-way function together with a hard-on-average distribution of instances of the sink-of-verifiable-line problem (SVL) — [[RSS17 - Can PPAD Hardness be Based on Standard Cryptographic Assumptions|RSS17]]. A hard-on-average SVL distribution gives a hard-on-average End-of-Line distribution by a black-box construction — [[BPR15 - On the Cryptographic Hardness of Finding a Nash Equilibrium|BPR15]], [[RSS17 - Can PPAD Hardness be Based on Standard Cryptographic Assumptions|RSS17]] — so the separation with SVL hardness implies the one with PPAD hardness.

## Notes

- Without the one-way function, SVL hardness does not even give a one-way function by a fully-black-box construction: [[no-ppad-hardness-to-owf-rss17|No fully-black-box reduction from PPAD hardness to OWF]] — [[RSS17 - Can PPAD Hardness be Based on Standard Cryptographic Assumptions|RSS17]].
- A CPA-secure [[public-key-encryption|PKE]] scheme gives two-message key agreement by a fully-black-box construction ([[pke-to-ke|PKE ⇒ KE]]) — folklore — so PKE has no fully-black-box construction from these hypotheses either — standard.
