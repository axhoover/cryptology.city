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

## Sketch

Dual system encryption: keys and ciphertexts each have a semi-functional form, used only in the proof; a semi-functional key on a semi-functional ciphertext masks the blinding factor by a random element, while every other combination decrypts. A hybrid under DLIN makes the challenge ciphertext and then the $q$ private keys semi-functional one at a time; in the step for the $k$-th key the simulator cannot learn that key's form by decrypting a semi-functional ciphertext it makes for the same identity, since both get the tag $A \cdot \mathrm{ID} + B$ and decryption needs distinct key and ciphertext tags, while the adversary sees uniform tags because $\mathrm{ID} \mapsto A \cdot \mathrm{ID} + B$ is pairwise independent. With every key semi-functional, a DBDH challenge is embedded so that the blinding factor of the message becomes uniform — [[Wat09 - Dual System Encryption Realizing Fully Secure IBE and HIBE under Simple Assumptions|Wat09]].
