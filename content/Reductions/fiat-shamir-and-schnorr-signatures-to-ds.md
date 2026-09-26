---
type: reduction
status: draft
title: "Fiat-Shamir + Schnorr signatures ⇒ DS"
aliases: []
id: red-fiat-shamir-and-schnorr-signatures-to-ds
kind: implication
hypotheses: [fiat-shamir, schnorr-identification-protocol]
conclusion: ds
class: unstated
model: rom
source:
  - "[[Sch91 - Efficient signature generation by smart cards|Sch91]]"
  - "[[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]"
security-loss: "Factor $q_H$: the forking lemma turns a forger with success probability $\\varepsilon$, running time $T$ and $q_H$ random-oracle queries into a DLOG solver of expected running time $O(q_H T/\\varepsilon)$ — PS96."
---

# Fiat-Shamir + Schnorr signatures ⇒ DS

[[fiat-shamir-heuristic|Fiat-Shamir]] applied to the [[digital-signature#schnorr-signatures|Schnorr identification protocol]] implies [[digital-signature|DS]] in the random-oracle model.

## Statement

Applying the [[fiat-shamir-heuristic|Fiat–Shamir transform]] to the Schnorr identification protocol — a three-message public-coin proof of knowledge of a discrete logarithm — yields the Schnorr signature scheme, a [[digital-signature|DS]]: the signer sets the challenge $c = H(R \| m)$, so a signature is a non-interactive transcript — [[Sch91 - Efficient signature generation by smart cards|Sch91]], [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]. The scheme is $\eufcma$-secure in the random-oracle model under [[discrete-logarithm|DLOG]] — [[PS96 - Security Proofs for Signature Schemes|PS96]].

## Sketch

The reduction answers signing queries with the HVZK simulator, programming $H(R \| m) := c$; it runs the forger, rewinds it to the hash query that produced the forgery's challenge, and reprograms the random oracle. Two accepting transcripts $(R, c, s)$, $(R, c', s')$ with $c \ne c'$ give $x = (s - s')/(c - c')$ (forking lemma).

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

`model: rom`: The challenge is a hash modeled as a programmable random oracle; the PS96 proof rewinds the forger and reprograms the oracle. No standard-model proof from DLOG is known.
