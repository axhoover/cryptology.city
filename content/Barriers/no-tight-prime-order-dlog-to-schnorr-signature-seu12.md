---
type: barrier
status: draft
title: "No tight algebraic reduction from DLOG to Schnorr signatures in the ROM"
aliases: []
id: bar-prime-order-dlog-to-schnorr-signature-seu12
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
  - "[[Seu12 - On the Exact Security of Schnorr-Type Signatures in the Random Oracle Model|Seu12]]"
rationale:
  class: "Seu12 rule out algebraic reductions whose time-to-success loss is below f(ε_F)·q_h, and the vocabulary has neither an algebraic nor a tightness class."
  strength: "The meta-reduction solves OMDL from any reduction that beats the bound."
---

# No tight algebraic reduction from DLOG to Schnorr signatures in the ROM

## Statement

If [[discrete-logarithm#one-more-discrete-logarithm|OMDL]] is hard, every algebraic reduction in the [[random-oracle-model|random-oracle model]] that turns a forger against [[digital-signature#schnorr-signatures|Schnorr signatures]] into a [[discrete-logarithm#dlog-in-prime-order-groups|DLOG]] solver loses a factor $f(\varepsilon_F)\, q_h$ in its time-to-success ratio, where the forger makes $q_h$ random-oracle queries and succeeds with probability $\varepsilon_F$, and $f$ is close to $1$ as long as $\varepsilon_F$ is noticeably smaller than $1$. For algebraic reductions whose cost is measured by expected time and expected number of queries, the loss is $\Omega(q_h)$, independent of $\varepsilon_F$ — [[Seu12 - On the Exact Security of Schnorr-Type Signatures in the Random Oracle Model|Seu12]]. The forking-lemma reduction of [[PS96 - Security Proofs for Signature Schemes|PS96]], which loses $O(q_h)$, is therefore essentially optimal among algebraic reductions. The result extends to Schnorr-type signatures from other one-way group homomorphisms, such as Guillou–Quisquater signatures — [[Seu12 - On the Exact Security of Schnorr-Type Signatures in the Random Oracle Model|Seu12]].

## Notes

- Earlier OMDL-conditional lower bounds for algebraic random-oracle reductions are $\sqrt{q_h}$ — [[PV05 - Discrete-Log-Based Signatures May Not Be Equivalent to Discrete Log|PV05]] — and $q_h^{2/3}$ — [[GBL08 - Improved Bounds on Security Reductions for Discrete Log Based Signatures|GBL08]].
- Restricting the forger rather than the reduction to be algebraic gives a tight reduction from DLOG ([[prime-order-dlog-to-schnorr-signature-fps20|DLOG ⇒ Schnorr signatures (tight, AGM)]]) — [[FPS20 - Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model|FPS20]].
- Without assuming OMDL, no tight generic reduction exists unless DLOG is easy ([[no-tight-prime-order-dlog-to-schnorr-signature-fjs19|barrier]]) — [[FJS19 - On Tight Security Proofs for Schnorr Signatures|FJS19]].
- The bound concerns reductions from DLOG. Schnorr signatures are tightly secure in the random-oracle model under the circular discrete-logarithm assumption, a non-interactive, falsifiable variant of DLOG that holds in two idealized models — [[CFOS25 - Schnorr Signatures are Tightly Secure in the ROM Under a Non-interactive Assumption|CFOS25]].
