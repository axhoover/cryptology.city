---
type: reduction
status: draft
title: "Fiat-Shamir + Schnorr signatures ⇒ Schnorr signatures"
aliases: []
id: red-fiat-shamir-and-schnorr-signatures-to-schnorr-signatures-sch91
kind: implication
hypotheses: [fiat-shamir, schnorr-identification-protocol]
conclusion: schnorr-signature
class: unstated
model: rom
source:
  - "[[Sch91 - Efficient signature generation by smart cards|Sch91]]"
  - "[[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]"
security-loss: "Factor $q_H$: the forking lemma turns a forger with success probability $\\varepsilon$, running time $T$ and $q_H$ random-oracle queries into a DLOG solver of expected running time $O(q_H T/\\varepsilon)$ — PS96."
---

# Fiat-Shamir + Schnorr signatures ⇒ Schnorr signatures

[[fiat-shamir-heuristic|Fiat-Shamir]] applied to the [[digital-signature#schnorr-signatures|Schnorr identification protocol]] implies [[digital-signature#schnorr-signatures|Schnorr signatures]] in the random-oracle model.

## Statement

The Schnorr signature scheme is the [[fiat-shamir-heuristic|Fiat–Shamir transform]] of the Schnorr identification protocol. For a generator $g$ of a group of prime order $q$ and key pair $(\sk, \pk) = (x, g^x)$, signing $m$ samples $r \getsr \ZZ_q$ and outputs $(R, s)$ with $R = g^r$, $c = H(R \| m)$, $s = r + cx \bmod q$; verification checks $g^s = R \cdot \pk^c$. The signature is an accepting transcript whose challenge is the hash — [[Sch91 - Efficient signature generation by smart cards|Sch91]], [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]. The scheme is $\eufcma$-secure in the random-oracle model under [[discrete-logarithm|DLOG]] — [[PS96 - Security Proofs for Signature Schemes|PS96]].

## Sketch

The reduction answers signing queries with the HVZK simulator, programming $H(R \| m) := c$; it runs the forger, rewinds it to the hash query that produced the forgery's challenge, and reprograms the random oracle. Two accepting transcripts $(R, c, s)$, $(R, c', s')$ with $c \ne c'$ give $x = (s - s')/(c - c')$ (forking lemma).

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

`model: rom`: The challenge is a hash modeled as a programmable random oracle; the PS96 proof rewinds the forger and reprograms the oracle.

- The forking lemma's $q_H$ loss is essentially optimal: under the one-more discrete logarithm assumption, any algebraic reduction from DLOG loses a factor about $q_H$ — [[Seu12 - On the Exact Security of Schnorr-Type Signatures in the Random Oracle Model|Seu12]]
- The [[Sch91 - Efficient signature generation by smart cards|Sch91]] reference page calls the identification protocol honest-verifier zero-knowledge 'under the discrete logarithm assumption'; it is perfect HVZK unconditionally, and DLOG underlies impersonation resistance — standard.
- The EdDSA/Ed25519 lineage claim on the Sch91 reference page is uncited and not carried by this edge.
