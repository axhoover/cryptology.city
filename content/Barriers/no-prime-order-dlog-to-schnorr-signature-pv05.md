---
type: barrier
status: draft
title: "No algebraic reduction from DLOG to Schnorr signatures in the standard model"
aliases: []
id: bar-prime-order-dlog-to-schnorr-signature-pv05
hypotheses: [prime-order-dlog]
conclusion: schnorr-signature
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: conditional
conditional-on: [omdl]
circumvented-by:
  - red-dlog-and-rom-to-schnorr-signatures-sch91
  - red-prime-order-dlog-to-schnorr-signature-fps20
source:
  - "[[PV05 - Discrete-Log-Based Signatures May Not Be Equivalent to Discrete Log|PV05]]"
rationale:
  class: "PV05 rule out algebraic reductions, which must expose a representation of every group element they output, and the vocabulary has no algebraic class."
  strength: "The meta-reduction turns any such reduction into an OMDL solver, so the barrier holds if OMDL is hard."
---

# No algebraic reduction from DLOG to Schnorr signatures in the standard model

## Statement

If [[discrete-logarithm#one-more-discrete-logarithm|OMDL]] is hard, no efficient algebraic reduction turns a forger against [[digital-signature#schnorr-signatures|Schnorr signatures]] into a [[discrete-logarithm#dlog-in-prime-order-groups|DLOG]] solver in the standard model, where the hash function is fixed and the reduction cannot program it — [[PV05 - Discrete-Log-Based Signatures May Not Be Equivalent to Discrete Log|PV05]]. A reduction is algebraic if a representation of every group element it outputs, over the group elements it has received, can be computed efficiently from its input and coins. The result holds already for forgers under key-only attack, which get a public key and a message and return a signature on it without making signing queries; such a forger is also an EUF-CMA forger, so reductions to EUF-CMA security are ruled out too. The same separation covers ElGamal-type signatures, DSA, ECDSA, KCDSA and GQ signatures — [[PV05 - Discrete-Log-Based Signatures May Not Be Equivalent to Discrete Log|PV05]].

## Sketch

Given OMDL challenges $r_0, r_1, \ldots, r_n$, the meta-reduction runs the reduction on the DLOG instance $r_0$. When the reduction asks for a forgery on $m_i$ under $\pk_i$, the meta-reduction sets $R_i = r_i$ and $c_i = H(R_i \| m_i)$, and gets $s_i = \log_g(r_i \pk_i^{c_i})$ from its DL oracle. Once the reduction outputs $\log_g r_0$, the representation of each $\pk_i$ over $g$, $r_0$ and the earlier $r_j$ gives, in order of $i$, $\log_g \pk_i$ and then $\log_g r_i = s_i - c_i \log_g \pk_i$: $n + 1$ logarithms from $n$ oracle queries.

## Notes

- The random-oracle reduction of [[PS96 - Security Proofs for Signature Schemes|PS96]] programs the hash, which is outside this standard-model scope ([[dlog-and-rom-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr signatures]]); restricting the forger instead of the reduction gives a tight reduction in the algebraic group model ([[prime-order-dlog-to-schnorr-signature-fps20|DLOG ⇒ Schnorr signatures (tight, AGM)]]) — [[FPS20 - Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model|FPS20]].
- In the random-oracle model, under OMDL, every algebraic reduction from DLOG loses a factor at least $\sqrt{q_h}$ for a forger making $q_h$ hash queries — [[PV05 - Discrete-Log-Based Signatures May Not Be Equivalent to Discrete Log|PV05]]; the bound is $q_h^{2/3}$ in [[GBL08 - Improved Bounds on Security Reductions for Discrete Log Based Signatures|GBL08]] and essentially $q_h$ in [[Seu12 - On the Exact Security of Schnorr-Type Signatures in the Random Oracle Model|Seu12]] ([[no-tight-prime-order-dlog-to-schnorr-signature-seu12|barrier]]).
- In the non-programmable random-oracle model, single-instance reductions from DLOG are ruled out under OMDL ([[no-prime-order-dlog-to-schnorr-signature-ff13|barrier]]) — [[FF13 - Limitations of the Meta-reduction Technique The Case of Schnorr Signatures|FF13]].
