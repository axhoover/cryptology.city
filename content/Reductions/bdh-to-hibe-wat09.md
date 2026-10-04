---
type: reduction
status: draft
title: "DBDH + DLIN ⇒ HIBE"
aliases: []
id: red-bdh-to-hibe-wat09
kind: implication
hypotheses: [bdh, decisional-linear]
conclusion: hibe
class: fully-black-box
model: standard
source:
  - "[[Wat09 - Dual System Encryption Realizing Fully Secure IBE and HIBE under Simple Assumptions|Wat09]]"
security-loss: ""
rationale:
  class: "The construction uses the pairing group only through group operations and the pairing, and each step of the dual system hybrid runs the HIBE adversary once as an oracle against a DLIN or DBDH challenge."
---

# DBDH + DLIN ⇒ HIBE

## Statement

If decisional bilinear Diffie–Hellman ([[bilinear-map-assumptions|DBDH]]) and decision linear ([[decisional-diffie-hellman#dlin|DLIN]], the case $k = 2$ of $k$-Lin) hold in a symmetric prime-order pairing group, there is an adaptively secure ([[hierarchical-identity-based-encryption#ind-hibe-cpa-security|IND-HIBE-CPA]]) [[hierarchical-identity-based-encryption|HIBE]] of bounded depth in the standard model: the advantage of an efficient adversary making $q$ key queries is at most the sum of $O(q)$ DLIN advantages and one DBDH advantage, with no exponential dependence on the depth — [[Wat09 - Dual System Encryption Realizing Fully Secure IBE and HIBE under Simple Assumptions|Wat09]].

## Notes

- Dual system encryption in composite-order groups (a product of three primes) gives fully secure HIBE with short ciphertexts under static assumptions — [[LW10 - New Techniques for Dual System Encryption and Fully Secure HIBE with Short Ciphertexts|LW10]].
