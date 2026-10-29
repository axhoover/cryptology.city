---
type: reduction
status: draft
title: "Type 1 pairing + DLIN ⇒ Structure-preserving signatures, tightly (Hofheinz–Jager)"
aliases: []
id: red-type-1-pairing-and-decisional-linear-to-structure-preserving-signature-hj12
kind: implication
hypotheses: [type-1-pairing, decisional-linear]
conclusion: structure-preserving-signature
class: unstated
model: standard
source:
  - "[[HJ12 - Tightly Secure Signatures and Public-Key Encryption|HJ12]]"
security-loss: "tight: independent of the number of signing queries"
---

# Type 1 pairing + DLIN ⇒ Structure-preserving signatures, tightly (Hofheinz–Jager)

## Statement

If [[decisional-diffie-hellman#dlin|DLIN]] holds in a [[pairings#type-1|symmetric bilinear group]], there is a [[digital-signature#structure-preserving-signatures|structure-preserving signature]] scheme with a tight security reduction, whose loss does not depend on the number of signing queries — [[HJ12 - Tightly Secure Signatures and Public-Key Encryption|HJ12]]. Combined with Groth–Sahai proofs, it yields a tightly simulation-sound NIZK proof system for group equations and, through Naor–Yung double encryption, tightly IND-CCA public-key encryption from DLIN — [[HJ12 - Tightly Secure Signatures and Public-Key Encryption|HJ12]].
