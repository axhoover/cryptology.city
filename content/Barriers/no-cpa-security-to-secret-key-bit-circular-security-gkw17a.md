---
type: barrier
status: draft
title: "No fixed-construction reduction from CPA security to circular security of symmetric-key bit encryption"
aliases: []
id: bar-cpa-security-to-secret-key-bit-circular-security-gkw17a
hypotheses: [cpa-security]
conclusion: secret-key-bit-circular-security
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: conditional
conditional-on: [lwe]
source:
  - "[[GKW17a - Separating Semantic and Circular Security for Symmetric-Key Bit Encryption from the Learning with Errors Assumption|GKW17a]]"
rationale:
  class: "The counterexample refutes the identity map (semantic security of a symmetric-key bit-encryption scheme implying its own circular security) and does not rule out another construction."
---

# No fixed-construction reduction from CPA security to circular security of symmetric-key bit encryption

## Statement

Under [[learning-with-errors|LWE]], there is a [[symmetric-key-encryption#cpa-security|semantically secure]] private-key bit-encryption scheme that is not [[circular-security#symmetric-key-bit-encryption|1-circular secure]], so the identity map is no reduction from private-key semantic security to circular security of bit encryption — [[GKW17a - Separating Semantic and Circular Security for Symmetric-Key Bit Encryption from the Learning with Errors Assumption|GKW17a]].

## Notes

- Earlier separations for bit encryption used multilinear maps or iO — [[GKW17a - Separating Semantic and Circular Security for Symmetric-Key Bit Encryption from the Learning with Errors Assumption|GKW17a]]; for public-key bit encryption see [[no-pke-cpa-security-to-bit-circular-security-rot13|No fixed-construction reduction from IND-CPA security to circular security of bit encryption]] — [[Rot13 - On the Circular Security of Bit-Encryption|Rot13]].
