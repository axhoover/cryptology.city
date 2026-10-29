---
type: reduction
status: draft
title: "SXDH ⇒ Structure-preserving signatures (Kiltz–Pan–Wee)"
aliases: []
id: red-sxdh-to-structure-preserving-signature-kpw15
kind: implication
hypotheses: [sxdh]
conclusion: structure-preserving-signature
class: unstated
model: standard
source:
  - "[[KPW15 - Structure-Preserving Signatures from Standard Assumptions, Revisited|KPW15]]"
security-loss: ""
---

# SXDH ⇒ Structure-preserving signatures (Kiltz–Pan–Wee)

## Statement

If [[decisional-diffie-hellman#sxdh-symmetric-external-diffie-hellman|SXDH]] holds in a Type 3 bilinear group, there is a [[digital-signature#structure-preserving-signatures|structure-preserving signature]] scheme that is EUF-CMA in the standard model, with shorter signatures than earlier structure-preserving signatures from standard assumptions — [[KPW15 - Structure-Preserving Signatures from Standard Assumptions, Revisited|KPW15]].

## Notes

- Optimally short structure-preserving signatures, of three group elements, are known only in the generic group model ([[type-3-pairing-to-short-structure-preserving-signature-agho11|Type 3 pairing ⇒ Optimally short structure-preserving signatures]]) — [[AGHO11 - Optimal Structure-Preserving Signatures in Asymmetric Bilinear Groups|AGHO11]], and algebraic reductions from non-interactive assumptions cannot reach them ([[no-non-interactive-assumption-to-short-structure-preserving-signature-ago11|barrier]]) — [[AGO11 - Separating Short Structure-Preserving Signatures from Non-Interactive Assumptions|AGO11]].
