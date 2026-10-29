---
type: reduction
status: draft
title: "DLOG ⇒ Schnorr signatures"
aliases: []
id: red-dlog-and-rom-to-schnorr-signatures-sch91
kind: implication
hypotheses: [prime-order-dlog]
conclusion: schnorr-signature
class: fully-black-box
model: rom
source:
  - "[[PS96 - Security Proofs for Signature Schemes|PS96]]"
via:
  - "[[fiat-shamir-heuristic|Fiat–Shamir]]"
security-loss: "factor $\\Theta(q_H)$ in the time-to-success ratio for $q_H$ random-oracle queries"
rationale:
  class: "The construction is fixed and uses only the group operation and the hash; the Pointcheval-Stern reduction runs the forger only as an oracle, simulating signatures and forking it by rerunning it with a reprogrammed random oracle."
  model: "The Fiat-Shamir hash is a random oracle, which the reduction programs to simulate signatures and reprograms to fork the forger."
---

# DLOG ⇒ Schnorr signatures

## Statement

[[digital-signature#schnorr-signatures|Schnorr signatures]] over a group of prime order $p$ — the [[fiat-shamir-heuristic|Fiat–Shamir transform]] [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]] of the [[identification-scheme#schnorr-identification-protocol|Schnorr identification protocol]] [[Sch91 - Efficient signature generation by smart cards|Sch91]] — are EUF-CMA secure in the [[random-oracle-model|random-oracle model]] if [[discrete-logarithm#dlog-in-prime-order-groups|DLOG]] is hard in the group — [[PS96 - Security Proofs for Signature Schemes|PS96]].

## Sketch

The reduction, given $\pk = g^x$, answers signing queries with the HVZK simulator (sample $c, s \getsr \ZZ_p$, set $R = g^s \pk^{-c}$, program $H(R \| m) := c$) and forks the forger: rerunning it on the same coins with $H$ reprogrammed from the query behind the forgery yields two forgeries $(R, c, s)$, $(R, c', s')$ with $c \ne c'$, and $x = (s - s')/(c - c') \bmod p$.

## Notes

- In its exact-security form, the forking lemma turns a forger with success probability $\varepsilon$, running time $T$ and $q_H$ random-oracle queries into a DLOG solver of expected running time $O(q_H T/\varepsilon)$, and it extends to blind signatures — [[PS00 - Security Arguments for Digital Signatures and Blind Signatures|PS00]].
- The loss is essentially optimal: under [[discrete-logarithm#one-more-discrete-logarithm|OMDL]], every algebraic reduction from DLOG to Schnorr forgery in the random-oracle model loses a factor close to $q_H$ in the time-to-success ratio ([[no-tight-prime-order-dlog-to-schnorr-signature-seu12|barrier]]) — [[Seu12 - On the Exact Security of Schnorr-Type Signatures in the Random Oracle Model|Seu12]]; no tight generic reduction exists unless DLOG is easy ([[no-tight-prime-order-dlog-to-schnorr-signature-fjs19|barrier]]) — [[FJS19 - On Tight Security Proofs for Schnorr Signatures|FJS19]]. For algebraic forgers, the algebraic group model gives a tight reduction ([[prime-order-dlog-to-schnorr-signature-fps20|DLOG ⇒ Schnorr signatures (tight, AGM)]]) — [[FPS20 - Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model|FPS20]].
- If DLOG is 2-moment hard, meaning that every algorithm's success probability is bounded in terms of the second moment of its running time, as in the generic group model, then every $t$-time forger making $q_H$ hash queries succeeds with probability at most $(q_H t^2/p)^{2/3}$, against $(q_H t^2/p)^{1/2}$ from earlier proofs — [[RS21 - Tighter Security for Schnorr Identification and Signatures A High-Moment Forking Lemma for Sigma-Protocols|RS21]].
- Under the circular discrete-logarithm assumption, a non-interactive, falsifiable variant of DLOG that holds in two idealized models, Schnorr signatures are EUF-CMA secure in the random-oracle model with a completely tight reduction — [[CFOS25 - Schnorr Signatures are Tightly Secure in the ROM Under a Non-interactive Assumption|CFOS25]].
- The reduction programs the random oracle. Under OMDL, no algebraic reduction from DLOG exists in the standard model ([[no-prime-order-dlog-to-schnorr-signature-pv05|barrier]]) — [[PV05 - Discrete-Log-Based Signatures May Not Be Equivalent to Discrete Log|PV05]], and no single-instance reduction exists in the non-programmable random-oracle model ([[no-prime-order-dlog-to-schnorr-signature-ff13|barrier]]) — [[FF13 - Limitations of the Meta-reduction Technique The Case of Schnorr Signatures|FF13]].
- Efficiency: signing costs one exponentiation and verification one two-base exponentiation, and a signature $(R, s)$ is a group element and a response in $\ZZ_p$, or a challenge and a response in $\ZZ_p$ in the equivalent $(c, s)$ form — standard.
