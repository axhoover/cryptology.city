---
type: barrier
status: draft
title: "No algebraic reduction from OMDL to two-round MuSig"
aliases: []
id: bar-omdl-to-two-round-musig-def19
hypotheses: [omdl]
conclusion: two-round-musig
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: conditional
conditional-on: [omdl]
source:
  - "[[DEF+19 - On the Security of Two-Round Multi-Signatures|DEF+19]]"
rationale:
  class: "DEF+19 rule out algebraic reductions, and the vocabulary has no algebraic class."
  strength: "The meta-reduction solves OMDL from any such reduction."
---

# No algebraic reduction from OMDL to two-round MuSig

## Statement

If [[discrete-logarithm#one-more-discrete-logarithm|OMDL]] is hard, no algebraic reduction proves [[multi-signature#two-round-musig|two-round MuSig]] secure under DLOG or under OMDL. The same holds for the two-round Schnorr multi-signatures of Bagherzandi–Cheon–Jarecki and of Ma–Weng–Li–Deng, and for CoSi — [[DEF+19 - On the Security of Two-Round Multi-Signatures|DEF+19]]. DEF+19 also exhibit flaws in the published security proofs of these schemes, CoSi never having been proved secure, and give practical sub-exponential attacks on all of them — [[DEF+19 - On the Security of Two-Round Multi-Signatures|DEF+19]].

## Notes

- An algebraic reduction from [[discrete-logarithm#dlog-in-prime-order-groups|DLOG]] composes with the reduction of [[omdl-to-prime-order-dlog|OMDL ⇒ Prime-order DLOG]] into an algebraic reduction from OMDL, so the DLOG case follows from the OMDL case — folklore.
- The two-round scheme mBCJ of DEF+19 is secure under DLOG in the random-oracle model — [[DEF+19 - On the Security of Two-Round Multi-Signatures|DEF+19]]. The three-round [[multi-signature#musig|MuSig]] is secure under DLOG ([[prime-order-dlog-to-musig-mpsw19|DLOG ⇒ MuSig]]) — [[MPSW19 - Simple Schnorr Multi-Signatures with Applications to Bitcoin|MPSW19]], and the two-round [[multi-signature#musig2|MuSig2]] under OMDL ([[omdl-to-musig2-nrs21|OMDL ⇒ MuSig2]]) — [[NRS21 - MuSig2 Simple Two-Round Schnorr Multi-signatures|NRS21]].
- With more than $\log p$ concurrent sessions, solving the [[ros-problem|ROS problem]] forges two-round MuSig and CoSi signatures in polynomial time — [[BLLOR21 - On the (in)security of ROS|BLLOR21]].
