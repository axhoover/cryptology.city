---
type: barrier
status: draft
title: "No fixed-construction reduction from IND-CPA security to circular security of bit encryption"
aliases: []
id: bar-pke-cpa-security-to-bit-circular-security-rot13
hypotheses: [pke-cpa-security]
conclusion: bit-circular-security
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: conditional
conditional-on:
  - "SXDH extended from bilinear to multilinear groups"
source:
  - "[[Rot13 - On the Circular Security of Bit-Encryption|Rot13]]"
rationale:
  class: "The counterexample refutes the identity map (IND-CPA security of a bit-encryption scheme implying circular security of the same scheme) and does not rule out building a circular-secure scheme from an IND-CPA-secure one by another construction."
  strength: "The counterexample scheme is IND-CPA-secure only under the multilinear extension of SXDH, an assumption with no known candidate groups."
---

# No fixed-construction reduction from IND-CPA security to circular security of bit encryption

## Statement

Under an extension of the Symmetric External Diffie–Hellman assumption from bilinear to multilinear groups, there is a public-key bit-encryption scheme that is [[public-key-encryption#cpa-security|IND-CPA-secure]] but not [[circular-security#circular-security-of-bit-encryption|circular secure for bit encryption]]: given encryptions of the bits of its own secret key, an efficient attack recovers the whole key — [[Rot13 - On the Circular Security of Bit-Encryption|Rot13]]. So, unless that assumption fails, the identity map is no reduction from IND-CPA security to circular security of bit encryption.

## Notes

- The folklore conjecture that every semantically secure bit-encryption scheme is circular secure also cannot be proved by a black-box reduction, and both negative results extend to the weaker conjecture for CCA-secure bit encryption — [[Rot13 - On the Circular Security of Bit-Encryption|Rot13]].
- For symmetric-key bit encryption the separation holds under LWE ([[no-cpa-security-to-secret-key-bit-circular-security-gkw17a|No fixed-construction reduction from CPA security to circular security of symmetric-key bit encryption]]) — [[GKW17a - Separating Semantic and Circular Security for Symmetric-Key Bit Encryption from the Learning with Errors Assumption|GKW17a]].
- Bootstrapping a somewhat homomorphic scheme into one for unbounded depth publishes encryptions of its own secret-key bits, so it needs IND-CPA security given those encryptions ([[homomorphic-encryption#circular-secure-bootstrappable-she|circular-secure bootstrappable SHE]]) — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]]; circular security for bit encryption implies that property — standard.
