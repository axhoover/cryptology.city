---
type: reduction
status: draft
title: "DBDH + DLIN ⇒ IBE"
aliases: []
id: red-bdh-to-ibe-wat09
kind: implication
hypotheses: [bdh, decisional-linear]
conclusion: ibe
class: fully-black-box
model: standard
source:
  - "[[Wat09 - Dual System Encryption Realizing Fully Secure IBE and HIBE under Simple Assumptions|Wat09]]"
security-loss: "$O(q)$ DLIN terms plus one DBDH term, for $q$ private-key queries"
rationale:
  class: "The construction uses the pairing group only through group operations and the pairing, and each step of the dual system hybrid runs the IBE adversary once as an oracle against a DLIN or DBDH challenge."
---

# DBDH + DLIN ⇒ IBE

## Statement

If decisional bilinear Diffie–Hellman ([[bilinear-map-assumptions|DBDH]]) and decision linear ([[decisional-diffie-hellman#dlin|DLIN]], the case $k = 2$ of $k$-Lin) hold in a symmetric prime-order pairing group, there is an adaptively secure ([[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA]]) [[identity-based-encryption|IBE]] in the standard model whose ciphertexts, private keys and public parameters each consist of a constant number of group elements: the advantage of an efficient adversary making $q$ private-key queries is at most the sum of $O(q)$ DLIN advantages and one DBDH advantage — [[Wat09 - Dual System Encryption Realizing Fully Secure IBE and HIBE under Simple Assumptions|Wat09]].
