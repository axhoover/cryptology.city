---
type: reduction
status: draft
title: "DLOG ⇒ Blind Okamoto–Schnorr signatures"
aliases: []
id: red-prime-order-dlog-to-blind-okamoto-schnorr-signature-ps00
kind: implication
hypotheses: [prime-order-dlog]
conclusion: blind-okamoto-schnorr-signature
class: fully-black-box
model: rom
source:
  - "[[PS00 - Security Arguments for Digital Signatures and Blind Signatures|PS00]]"
security-loss: ""
rationale:
  class: "The scheme is fixed, and the reduction signs with a key it knows and runs the adversary only as an oracle, replaying it with a reprogrammed random oracle."
  model: "The reduction replays the adversary with the random oracle reprogrammed from the query behind a forgery."
---

# DLOG ⇒ Blind Okamoto–Schnorr signatures

## Statement

In the [[random-oracle-model|random-oracle model]], [[blind-signature#blind-okamoto-schnorr-signatures|blind Okamoto–Schnorr signatures]] are one-more unforgeable if [[discrete-logarithm#dlog-in-prime-order-groups|DLOG]] is hard in the prime-order group, for a number of signer interactions logarithmic in the security parameter, even when the interactions run in parallel: no efficient adversary outputs valid signatures on $\ell + 1$ distinct messages after $\ell$ interactions with the signer — [[PS00 - Security Arguments for Digital Signatures and Blind Signatures|PS00]].

## Notes

- The concrete bound says nothing for 4 parallel interactions in elliptic-curve groups of order $2^{200}$; covering such attacks needs the hardness of the [[ros-problem|ROS problem]] — [[Sch01 - Security of Blind Discrete Log Signatures against Interactive Attacks|Sch01]].
- A transformation of the scheme gives security against polynomially many sequential signer interactions — [[Poi98 - Strengthened Security for Blind Signatures|Poi98]].
- With more than $\log p$ concurrent sessions, outside the theorem's regime, solving ROS forges blind Okamoto–Schnorr signatures in polynomial time — [[BLLOR21 - On the (in)security of ROS|BLLOR21]].
