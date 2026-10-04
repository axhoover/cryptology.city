---
type: reduction
status: draft
title: "Schnorr identification ⇒ Schnorr signatures (Fiat–Shamir)"
aliases: []
id: red-fiat-shamir-and-schnorr-signatures-to-schnorr-signatures-sch91
kind: implication
hypotheses: [schnorr-identification-protocol]
conclusion: schnorr-signature
class: unstated
model: rom
source:
  - "[[Sch91 - Efficient signature generation by smart cards|Sch91]]"
  - "[[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]"
via:
  - "[[fiat-shamir-heuristic|Fiat–Shamir]]"
security-loss: "factor $\\Theta(q_H)$ in the time-to-success ratio for $q_H$ random-oracle queries"
rationale:
  model: "The challenge is a hash modeled as a programmable random oracle, which the security proof reprograms when it rewinds the forger."
---

# Schnorr identification ⇒ Schnorr signatures (Fiat–Shamir)

## Statement

The [[digital-signature#schnorr-signatures|Schnorr signature scheme]] is the [[fiat-shamir-heuristic|Fiat–Shamir transform]] of the [[identification-scheme#schnorr-identification-protocol|Schnorr identification protocol]]. For a generator $g$ of a group of prime order $p$ and key pair $(\sk, \pk) = (x, g^x)$, signing $m$ samples $r \getsr \ZZ_p$ and outputs $(R, s)$ with $R = g^r$, $c = H(R \| m)$, $s = r + cx \bmod p$; verification checks $g^s = R \cdot \pk^c$. The signature is an accepting transcript whose challenge is the hash — [[Sch91 - Efficient signature generation by smart cards|Sch91]], [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]. With $H$ a random oracle, the scheme is EUF-CMA secure if [[discrete-logarithm|DLOG]] is hard in the group — [[PS96 - Security Proofs for Signature Schemes|PS96]].

## Sketch

The reduction answers signing queries with the HVZK simulator, programming $H(R \| m) := c$; it runs the forger, rewinds it to the hash query behind the forgery's challenge, and reprograms the random oracle from there. Two accepting transcripts $(R, c, s)$, $(R, c', s')$ with $c \ne c'$ give $x = (s - s')/(c - c') \bmod p$ (forking lemma).

## Notes

- The forking lemma turns a forger with success probability $\varepsilon$, running time $T$ and $q_H$ random-oracle queries into a DLOG solver of expected running time $O(q_H T/\varepsilon)$ — [[PS96 - Security Proofs for Signature Schemes|PS96]].
- The loss is essentially optimal: under [[discrete-logarithm#one-more-discrete-logarithm|OMDL]], every algebraic reduction from DLOG to Schnorr forgery in the random-oracle model loses a factor close to $q_H$ in the time-to-success ratio — [[Seu12 - On the Exact Security of Schnorr-Type Signatures in the Random Oracle Model|Seu12]].
- The identification protocol is perfectly honest-verifier zero-knowledge unconditionally; DLOG underlies its impersonation resistance — standard.
