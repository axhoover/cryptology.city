---
type: reduction
status: draft
title: "Type 3 pairing ⇒ Optimally short structure-preserving signatures (AGHO)"
aliases: []
id: red-type-3-pairing-to-short-structure-preserving-signature-agho11
kind: implication
hypotheses: [type-3-pairing]
conclusion: short-structure-preserving-signature
class: free
model: generic-group
source:
  - "[[AGHO11 - Optimal Structure-Preserving Signatures in Asymmetric Bilinear Groups|AGHO11]]"
security-loss: ""
rationale:
  class: "AGHO11 bound every generic forger, so the result holds for all algorithms in the model rather than through a reduction to a hardness assumption."
  model: "The security proof applies only to adversaries that are generic in the Type 3 bilinear group."
---

# Type 3 pairing ⇒ Optimally short structure-preserving signatures (AGHO)

## Statement

In a [[pairings#type-3|Type 3]] bilinear group there is a [[digital-signature#structure-preserving-signatures|structure-preserving signature]] scheme whose messages are vectors of group elements and whose signatures consist of three group elements. It is strongly existentially unforgeable under adaptive chosen-message attack against generic adversaries — [[AGHO11 - Optimal Structure-Preserving Signatures in Asymmetric Bilinear Groups|AGHO11]]. AGHO11 also prove that in Type 3 groups every structure-preserving signature scheme whose signer uses only generic group operations has signatures of at least three group elements, so the scheme is [[digital-signature#optimally-short-structure-preserving-signatures|optimally short]] — [[AGHO11 - Optimal Structure-Preserving Signatures in Asymmetric Bilinear Groups|AGHO11]].

## Notes

- No algebraic reduction from a non-interactive assumption proves an optimally short structure-preserving signature scheme secure ([[no-non-interactive-assumption-to-short-structure-preserving-signature-ago11|barrier]]) — [[AGO11 - Separating Short Structure-Preserving Signatures from Non-Interactive Assumptions|AGO11]].
- Longer structure-preserving signatures are secure under standard assumptions, for instance SXDH ([[sxdh-to-structure-preserving-signature-kpw15|SXDH ⇒ Structure-preserving signatures]]) — [[KPW15 - Structure-Preserving Signatures from Standard Assumptions, Revisited|KPW15]].
