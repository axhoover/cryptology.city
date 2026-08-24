---
type: reduction
status: stub
title: "RSA ⇒ IND-CCA security"
aliases: []
id: red-rsa-to-ind-cca-security
kind: implication
hypotheses: [rsa]
conclusion: ind-cca-kem
class: unstated
model: rom
source: folklore
security-loss: ""
---

# RSA ⇒ IND-CCA security

[[rsa-assumption|RSA]] implies [[key-encapsulation-mechanism#ind-cca-security|IND-CCA security]].

## Statement

Migrated verbatim from [[key-encapsulation-mechanism]] § RSA-KEM / RSAES-OAEP:

> RSA-based KEM using OAEP padding. IND-CCA secure in the [[random-oracle-model|random oracle model]].

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation (BR94 OAEP / Shoup RSA-KEM absent).
- Conflates two different things: RSA-KEM (hash the RSA preimage) and RSAES-OAEP (a PKE padding scheme), which have different proofs and different assumptions.
- Hypothesis is not stated on the line; 'RSA-based' is inferred.
