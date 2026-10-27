---
type: reduction
status: draft
title: "Schnorr identification ⇒ Schnorr signatures (Fiat–Shamir)"
aliases: []
id: red-schnorr-identification-protocol-to-schnorr-signature-aabn02
kind: implication
hypotheses: [schnorr-identification-protocol]
conclusion: schnorr-signature
class: unstated
model: rom
source:
  - "[[AABN02 - From Identification to Signatures via the Fiat-Shamir Transform Minimizing Assumptions for Security and Forward-Security|AABN02]]"
via:
  - "[[fiat-shamir-heuristic|Fiat–Shamir]]"
security-loss: "advantage loss factor about $q_H$ for $q_H$ random-oracle queries"
rationale:
  model: "The challenge is a hash modeled as a random oracle, which the security proof programs to embed the verifier's challenge and to simulate signatures."
---

# Schnorr identification ⇒ Schnorr signatures (Fiat–Shamir)

## Statement

The [[digital-signature#schnorr-signatures|Schnorr signature scheme]] is the [[fiat-shamir-heuristic|Fiat–Shamir transform]] of the [[identification-scheme#schnorr-identification-protocol|Schnorr identification protocol]]. For a generator $g$ of a group of prime order $p$ and key pair $(\sk, \pk) = (x, g^x)$, signing $m$ samples $r \getsr \ZZ_p$ and outputs $(R, s)$ with $R = g^r$, $c = H(R \| m)$, $s = r + cx \bmod p$; verification checks $g^s = R \cdot \pk^c$. The signature is an accepting transcript whose challenge is the hash — [[Sch91 - Efficient signature generation by smart cards|Sch91]], [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]. The Schnorr protocol's commitments are uniform in the group, so it is non-trivial, and with $H$ a random oracle the Fiat–Shamir transform of a non-trivial identification scheme secure against impersonation under passive attack is EUF-CMA secure; hence Schnorr signatures are EUF-CMA secure in the random-oracle model whenever the Schnorr identification protocol is secure against passive impersonation — [[AABN02 - From Identification to Signatures via the Fiat-Shamir Transform Minimizing Assumptions for Security and Forward-Security|AABN02]]. A direct proof from [[discrete-logarithm#dlog-in-prime-order-groups|DLOG]] goes through the forking lemma ([[dlog-and-rom-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr signatures]]) — [[PS96 - Security Proofs for Signature Schemes|PS96]].

## Sketch

The impersonator guesses which random-oracle query $(R, m)$ the forgery will use, sends that query's commitment $R$ to the honest verifier, and answers the query with the verifier's challenge. It answers signing queries with transcripts from its passive-attack oracle, programming $H(R \| m) := c$ for each transcript $(R, c, s)$, and replays the forgery's response, losing a factor about $q_H$ for the guess.

## Notes

- The forking lemma turns a forger with success probability $\varepsilon$, running time $T$ and $q_H$ random-oracle queries into a DLOG solver of expected running time $O(q_H T/\varepsilon)$ — [[PS96 - Security Proofs for Signature Schemes|PS96]].
- That loss is essentially optimal: under [[discrete-logarithm#one-more-discrete-logarithm|OMDL]], every algebraic reduction from DLOG to Schnorr forgery in the random-oracle model loses a factor close to $q_H$ in the time-to-success ratio ([[no-tight-prime-order-dlog-to-schnorr-signature-seu12|barrier]]) — [[Seu12 - On the Exact Security of Schnorr-Type Signatures in the Random Oracle Model|Seu12]].
- The identification protocol is perfectly honest-verifier zero-knowledge unconditionally; DLOG underlies its impersonation resistance — standard.
