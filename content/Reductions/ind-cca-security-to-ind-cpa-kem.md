---
type: reduction
status: draft
title: "IND-CCA security ⇒ IND-CPA KEM"
aliases: []
id: red-ind-cca-security-to-ind-cpa-kem
kind: implication
hypotheses: [ind-cca-kem]
conclusion: ind-cpa-kem
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: the reduction preserves the advantage exactly"
rationale:
  class: "The construction is the identity, and the reduction runs any IND-CPA adversary unchanged, using it only as an oracle."
---

# IND-CCA security ⇒ IND-CPA KEM

## Statement

Every [[key-encapsulation-mechanism#ind-cca-security|IND-CCA-secure]] [[key-encapsulation-mechanism|KEM]] is [[key-encapsulation-mechanism#ind-cpa-kem|IND-CPA-secure]]: for every efficient IND-CPA adversary there is an efficient IND-CCA adversary with the same advantage — folklore.

## Sketch

The IND-CPA game is the IND-CCA game without the decapsulation oracle, so an IND-CPA adversary is an IND-CCA adversary that makes no decapsulation queries.
