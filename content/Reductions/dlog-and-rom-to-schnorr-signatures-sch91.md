---
type: reduction
status: draft
title: "DLOG ⇒ Schnorr signatures"
aliases: []
id: red-dlog-and-rom-to-schnorr-signatures-sch91
kind: implication
hypotheses: [dlog]
conclusion: schnorr-signature
class: fully-black-box
model: rom
source:
  - "[[Sch91 - Efficient signature generation by smart cards|Sch91]]"
  - "[[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]"
  - "[[PS96 - Security Proofs for Signature Schemes|PS96]]"
security-loss: "factor $\\Theta(q_H)$ in the time-to-success ratio for $q_H$ random-oracle queries"
rationale:
  class: "One fixed construction uses only the group operation and the hash, and the Pointcheval-Stern reduction runs the forger only as an oracle, simulating signatures and forking it by rerunning it with a reprogrammed random oracle."
  model: "The Fiat-Shamir hash is a random oracle, which the reduction programs to simulate signatures and reprograms to fork the forger."
---

# DLOG ⇒ Schnorr signatures

## Statement

[[digital-signature#schnorr-signatures|Schnorr signatures]] over a group of prime order $p$ — the [[fiat-shamir-heuristic|Fiat-Shamir transform]] [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]] of the [[identification-scheme#schnorr-identification-protocol|Schnorr identification protocol]] [[Sch91 - Efficient signature generation by smart cards|Sch91]] — are EUF-CMA secure in the [[random-oracle-model|random-oracle model]] if [[discrete-logarithm|DLOG]] is hard in the group — [[PS96 - Security Proofs for Signature Schemes|PS96]].

## Sketch

The reduction, given $\pk = g^x$, answers signing queries with the HVZK simulator (sample $c, s \getsr \ZZ_p$, set $R = g^s \pk^{-c}$, program $H(R \| m) := c$) and forks the forger: rerunning it on the same coins with $H$ reprogrammed from the query behind the forgery yields two forgeries $(R, c, s)$, $(R, c', s')$ with $c \ne c'$, and $x = (s - s')/(c - c') \bmod p$.

## Notes

- The forking lemma turns a forger with success probability $\varepsilon$, running time $T$ and $q_H$ random-oracle queries into a DLOG solver of expected running time $O(q_H T/\varepsilon)$ — [[PS96 - Security Proofs for Signature Schemes|PS96]]; PS00 give its exact-security form and extend it to blind signatures — [[PS00 - Security Arguments for Digital Signatures and Blind Signatures|PS00]].
- The loss is essentially optimal: under [[discrete-logarithm#one-more-discrete-logarithm|OMDL]], every algebraic reduction from DLOG to Schnorr forgery in the random-oracle model loses a factor close to $q_H$ in the time-to-success ratio — [[Seu12 - On the Exact Security of Schnorr-Type Signatures in the Random Oracle Model|Seu12]].
