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
---

# DBDH + DLIN ⇒ HIBE

[[bilinear-map-assumptions|DBDH]] and [[decisional-diffie-hellman#dlin|DLIN]] jointly imply [[hierarchical-identity-based-encryption|HIBE]].

## Statement

If decisional bilinear Diffie–Hellman ([[bilinear-map-assumptions|DBDH]]) and decision linear ([[decisional-diffie-hellman#dlin|DLIN]], the case $k = 2$ of $k$-Lin) hold in a symmetric prime-order pairing group, there is an adaptively secure [[hierarchical-identity-based-encryption|HIBE]] of bounded depth in the standard model, with security loss polynomial in the number of key queries and no exponential dependence on the depth — [[Wat09 - Dual System Encryption Realizing Fully Secure IBE and HIBE under Simple Assumptions|Wat09]].

## Sketch

The proof switches the challenge ciphertext and then each of the adversary's $q$ key queries to semi-functional form one hybrid at a time; each switch reduces to DLIN, and a final DBDH step hides the message, so an adaptive adversary yields a distinguisher for one of the two assumptions with $O(q)$ loss.

## Notes

`class: fully-black-box`: The construction uses the pairing group only through group operations and the pairing. The dual system proof is a fixed hybrid sequence over the adversary's key queries; each step is a reduction that runs the HIBE adversary once as an oracle against a DLIN or DBDH challenge and never inspects its code. With an assumption as hypothesis, black-boxness refers to the treatment of the adversary; this is the RTV04 fully-black-box shape.

- Fully secure HIBE with short ciphertexts, via dual system encryption in composite-order groups of three primes under static assumptions — [[LW10 - New Techniques for Dual System Encryption and Fully Secure HIBE with Short Ciphertexts|LW10]]
