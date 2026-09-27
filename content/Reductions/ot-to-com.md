---
type: reduction
status: draft
title: "OT ⇒ COM"
aliases: []
id: red-ot-to-com
kind: implication
hypotheses: [ot]
conclusion: com
class: fully-black-box
model: standard
source:
  - "[[Kil88 - Founding cryptography on oblivious transfer|Kil88]]"
security-loss: ""
---

# OT ⇒ COM

[[oblivious-transfer|OT]] implies [[commitment-scheme|COM]].

## Statement

[[oblivious-transfer|OT]] implies [[commitment-scheme|COM]] with no further assumption: in the OT-hybrid model there is a bit commitment that is statistically hiding and statistically binding, the first step of Kilian's proof that OT is complete for secure computation — [[Kil88 - Founding cryptography on oblivious transfer|Kil88]].

## Sketch

One standard construction, not necessarily Kilian's, uses [[oblivious-transfer#rabin-ot|Rabin OT]], which is equivalent to OT ([[rabin-ot-to-ot|Rabin OT ⇔ OT]]). To commit to $b$, the committer sends random bits $r_1, \dots, r_n$ through Rabin OT and then sends $c = b \oplus r_1 \oplus \cdots \oplus r_n$; to open, it reveals $b$ and every $r_i$, and the receiver checks them against the bits it received. Hiding: the receiver misses some $r_i$ except with probability $2^{-n}$, and then the parity is uniform. Binding: opening to $1 - b$ requires flipping an odd number of the $r_i$, and since the committer does not learn which bits arrived, each flipped bit is caught with probability $1/2$. Committing to $b$ in $\secpar$ independent copies gives hiding error at most $\secpar \cdot 2^{-n}$ and binding error $2^{-\secpar}$ — standard.

## Notes

`class: fully-black-box`: the construction invokes OT only as an ideal functionality, and hiding and binding hold statistically in the OT-hybrid model. Against a real OT protocol, the reduction runs any adversary against the composed commitment as an oracle to distinguish real from ideal OT.
