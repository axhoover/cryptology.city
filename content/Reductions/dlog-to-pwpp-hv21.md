---
type: reduction
status: draft
title: DLOG ∈ PWPP
aliases: []
id: red-dlog-to-pwpp-hv21
kind: inclusion
hypotheses: [dlog]
conclusion: pwpp
class: free
model: standard
source:
  - "[[HV21 - On Search Complexity of Discrete Logarithm|HV21]]"
security-loss: ""
---

# DLOG ∈ PWPP

## Statement

A total formulation of the [[discrete-logarithm|discrete logarithm]] problem over groups given by circuits is complete for [[total-function-np#pwpp|PWPP]], and a variant of it, Index, is complete for [[total-function-np#ppp|PPP]] — [[HV21 - On Search Complexity of Discrete Logarithm|HV21]]. These answer an open question of [[SZZ18 - PPP-Completeness with Connections to Cryptography|SZZ18]].

## Notes

- Membership in PWPP is the pigeonhole view of a collision: the map $(x, y) \mapsto g^x h^y$ compresses, and a collision yields $\log_g h$ ([[dlog-to-crhf-cvhp91|DLOG ⇒ CRHF]]) — [[CvHP91 - Cryptographically Strong Undeniable Signatures, Unconditionally Secure for the Signer|CvHP91]].
- Average-case hardness of other TFNP subclasses, such as PPAD, from discrete logarithms would need structure beyond what collision resistance provides — [[HV21 - On Search Complexity of Discrete Logarithm|HV21]].
