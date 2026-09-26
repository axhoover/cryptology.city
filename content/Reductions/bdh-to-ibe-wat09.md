---
type: reduction
status: draft
title: "BDH ⇒ IBE"
aliases: []
id: red-bdh-to-ibe-wat09
kind: implication
hypotheses: [bdh]
conclusion: ibe
class: fully-black-box
model: standard
source:
  - "[[Wat09 - Dual System Encryption Realizing Fully Secure IBE and HIBE under Simple Assumptions|Wat09]]"
security-loss: "$O(q)$ DLIN terms plus one DBDH term, for $q$ private-key queries"
---

# BDH ⇒ IBE

[[bilinear-map-assumptions|DBDH and DLIN]] jointly imply [[identity-based-encryption|IBE]].

## Statement

If decisional bilinear Diffie–Hellman and decision linear ([[bilinear-map-assumptions|DBDH and DLIN]]) hold in a symmetric prime-order pairing group, there is an adaptively secure [[identity-based-encryption|IBE]] in the standard model whose ciphertexts, private keys, and public parameters each consist of a constant number of group elements — [[Wat09 - Dual System Encryption Realizing Fully Secure IBE and HIBE under Simple Assumptions|Wat09]].

## Sketch

The proof switches the challenge ciphertext and then each of the adversary's $q$ private-key queries to semi-functional form one hybrid at a time; each switch reduces to DLIN, and a final DBDH step hides the message.

## Notes

`class: fully-black-box`: The construction uses the pairing group only through group operations and the pairing. The dual system proof is a fixed hybrid sequence; each step runs the IBE adversary once as an oracle against a DLIN or DBDH challenge and never inspects its code. With an assumption as hypothesis, black-boxness refers to the treatment of the adversary; this is the RTV04 fully-black-box shape.
