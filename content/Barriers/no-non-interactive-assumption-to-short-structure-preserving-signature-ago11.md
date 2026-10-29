---
type: barrier
status: draft
title: "No algebraic reduction from non-interactive assumptions to optimally short structure-preserving signatures"
aliases: []
id: bar-non-interactive-assumption-to-short-structure-preserving-signature-ago11
hypotheses: [non-interactive-assumption]
conclusion: short-structure-preserving-signature
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source:
  - "[[AGO11 - Separating Short Structure-Preserving Signatures from Non-Interactive Assumptions|AGO11]]"
rationale:
  class: "AGO11 rule out algebraic reductions, which output group elements only together with their representations in the group elements they were given, and the vocabulary has no algebraic class."
  strength: "The meta-reduction breaks the non-interactive assumption itself and uses no further hardness assumption."
---

# No algebraic reduction from non-interactive assumptions to optimally short structure-preserving signatures

## Statement

Let $S$ be a [[digital-signature#structure-preserving-signatures|structure-preserving signature]] scheme in a Type 3 bilinear group whose signatures consist of three group elements, the minimum of [[AGHO11 - Optimal Structure-Preserving Signatures in Asymmetric Bilinear Groups|AGHO11]]. If an algebraic reduction proves $S$ existentially unforgeable under adaptive chosen-message attack from a [[falsifiable-assumptions#non-interactive-assumptions|non-interactive assumption]], then the assumption is false. A reduction is algebraic if every group element it outputs comes with its representation in the group elements it was given — [[AGO11 - Separating Short Structure-Preserving Signatures from Non-Interactive Assumptions|AGO11]].

## Notes

- Optimally short structure-preserving signatures are secure in the generic group model ([[type-3-pairing-to-short-structure-preserving-signature-agho11|Type 3 pairing ⇒ Optimally short structure-preserving signatures]]) — [[AGHO11 - Optimal Structure-Preserving Signatures in Asymmetric Bilinear Groups|AGHO11]].
- Longer structure-preserving signatures are secure under SXDH ([[sxdh-to-structure-preserving-signature-kpw15|SXDH ⇒ Structure-preserving signatures]]) — [[KPW15 - Structure-Preserving Signatures from Standard Assumptions, Revisited|KPW15]], and tightly under DLIN in symmetric groups ([[type-1-pairing-and-dlin-to-structure-preserving-signature-hj12|Type 1 pairing + DLIN ⇒ Structure-preserving signatures]]) — [[HJ12 - Tightly Secure Signatures and Public-Key Encryption|HJ12]].
