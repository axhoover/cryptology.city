---
type: reduction
status: draft
title: "DLOG + ROM ⇒ Schnorr signatures"
aliases: []
id: red-dlog-and-rom-to-schnorr-signatures-sch91
kind: implication
hypotheses: [dlog, rom]
conclusion: schnorr-signature
class: fully-black-box
model: rom
source:
  - "[[Sch91 - Efficient signature generation by smart cards|Sch91]]"
  - "[[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]"
  - "[[PS96 - Security Proofs for Signature Schemes|PS96]]"
security-loss: "Non-tight: the forking lemma turns a forger with success $\\varepsilon$, running time $T$, and $q_h$ random-oracle queries into a DLOG solver with expected time $O(q_h T / \\varepsilon)$ — a factor $\\Theta(q_h)$ in the time-to-success ratio — PS00."
---

# DLOG + ROM ⇒ Schnorr signatures

[[discrete-logarithm|DLOG]] together with [[random-oracle-model|ROM]] implies [[digital-signature#schnorr-signatures|Schnorr signatures]].

## Statement

[[digital-signature#schnorr-signatures|Schnorr signatures]] — the [[fiat-shamir-heuristic|Fiat-Shamir transform]] [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]] of the Schnorr identification protocol [[Sch91 - Efficient signature generation by smart cards|Sch91]] — are EUF-CMA secure in the [[random-oracle-model|random-oracle model]] if [[discrete-logarithm|DLOG]] is hard in the underlying prime-order group — [[PS96 - Security Proofs for Signature Schemes|PS96]].

## Sketch

The reduction simulates signing with the HVZK simulator (sample $z, e$ uniformly; set $a = g^z h^{-e}$; program the oracle to $e$ at $(a, m)$) and forks the forger: rerunning it on the same coins with the oracle reprogrammed at the forgery's query yields two forgeries $(a, e, z)$, $(a, e', z')$ with $e \neq e'$, and $x = (z - z')/(e - e')$ is the discrete logarithm of $h$.

## Notes

`class: fully-black-box`: One fixed construction (Fiat-Shamir of Schnorr identification) using only the group operation and the hash; the Pointcheval-Stern reduction runs the forger only as an oracle, simulating signatures and forking it by rerunning with a reprogrammed random oracle.

`model: rom`: The Fiat-Shamir hash is a random oracle, which PS96's reduction programs and reprograms.

- Exact-security form of the forking lemma, extended to blind signatures — [[PS00 - Security Arguments for Digital Signatures and Blind Signatures|PS00]]
- Under [[discrete-logarithm#one-more-discrete-logarithm|OMDL]], every algebraic reduction from DLOG to Schnorr forgery in the ROM loses a factor close to $q_h$ in the time-to-success ratio, so the forking-lemma loss is essentially optimal — [[Seu12 - On the Exact Security of Schnorr-Type Signatures in the Random Oracle Model|Seu12]]
