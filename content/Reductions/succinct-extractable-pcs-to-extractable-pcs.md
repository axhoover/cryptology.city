---
type: reduction
status: draft
title: Succinct extractable PCS ⇒ Extractable PCS
aliases: []
id: red-succinct-extractable-pcs-to-extractable-pcs
kind: implication
hypotheses: [succinct-extractable-pcs]
conclusion: extractable-pcs
class: fully-black-box
model: standard
source: folklore
security-loss: "none: the adversary and its advantage are unchanged"
rationale:
  class: "The construction is the identity on schemes, and the reduction forwards any adversary against extractability unchanged, with its extractor."
---

# Succinct extractable PCS ⇒ Extractable PCS

## Statement

A [[polynomial-commitment#succinct-extractability|succinct extractable polynomial commitment scheme]] is by definition an [[polynomial-commitment#extractability|extractable]] one whose commitments, evaluation proofs and verification are bounded by a polynomial in $\secpar + \log d$; the identity map forwards any adversary against extractability unchanged, with its extractor — folklore.
