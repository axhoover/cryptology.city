---
type: reduction
status: draft
title: "OMDL + ROS ⇒ Blind Schnorr signatures"
aliases: []
id: red-omdl-and-ros-to-blind-schnorr-signature-fps20
kind: implication
hypotheses: [omdl, ros]
conclusion: blind-schnorr-signature
class: unstated
model: [algebraic-group, rom]
source:
  - "[[FPS20 - Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model|FPS20]]"
security-loss: ""
rationale:
  model: "FPS20 prove the theorem for algebraic adversaries with the hash modeled as a programmable random oracle."
---

# OMDL + ROS ⇒ Blind Schnorr signatures

## Statement

In the [[algebraic-group-model|algebraic group model]], with the hash modeled as a [[random-oracle-model|random oracle]], [[blind-signature#blind-schnorr-signatures|blind Schnorr signatures]] are one-more unforgeable against $\ell$ concurrent signing sessions if [[discrete-logarithm#one-more-discrete-logarithm|OMDL]] is hard in the group and the [$\ell$-ROS problem](ros-problem) over $\ZZ_p$ is hard; so if OMDL and [[ros-problem|ROS]] ($\ell$-ROS for every polynomial $\ell$) are hard, the scheme is one-more unforgeable against polynomially many concurrent sessions — [[FPS20 - Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model|FPS20]]. The earlier argument of [[Sch01 - Security of Blind Discrete Log Signatures against Interactive Attacks|Sch01]] is informal and in the generic group model with a random oracle — [[FPS20 - Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model|FPS20]].

## Notes

- ROS is not hard: $\ell$-ROS is solvable in polynomial time for $\ell > \log p$, and blind Schnorr signatures are then forgeable with $\ell$ concurrent sessions; combined with the generalized-birthday algorithm of [[Wag02 - A Generalized Birthday Problem|Wag02]], the same attack gives sub-exponential algorithms for smaller $\ell$ — [[BLLOR21 - On the (in)security of ROS|BLLOR21]]. The theorem therefore has content only for $\ell \le \log p$ sessions.
- The clause variant of blind Schnorr signatures changes only the signing protocol and leaves signatures unchanged; its security proof rests on a problem related to ROS that appears much harder — [[FPS20 - Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model|FPS20]].
- With blind Okamoto–Schnorr signatures, one-more unforgeability for logarithmically many sessions holds under plain DLOG in the random-oracle model ([[prime-order-dlog-to-blind-okamoto-schnorr-signature-ps00|DLOG ⇒ Blind Okamoto–Schnorr signatures]]) — [[PS00 - Security Arguments for Digital Signatures and Blind Signatures|PS00]].
