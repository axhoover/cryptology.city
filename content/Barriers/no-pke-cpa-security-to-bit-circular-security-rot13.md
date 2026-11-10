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
  - "SXDH extended to multilinear groups of degree at least c log p, for a constant c > 1 and group order p"
source:
  - "[[Rot13 - On the Circular Security of Bit-Encryption|Rot13]]"
rationale:
  class: "The counterexample refutes the identity map (IND-CPA security of a bit-encryption scheme implying circular security of the same scheme) and does not rule out building a circular-secure scheme from an IND-CPA-secure one by another construction."
  strength: "The counterexample scheme is IND-CPA-secure only under the multilinear extension of SXDH, an assumption with no known candidate groups."
---

# No fixed-construction reduction from IND-CPA security to circular security of bit encryption

## Statement

Under an extension of the Symmetric External Diffie–Hellman assumption from bilinear groups to $\ell$-multilinear groups of order $p$ with $\ell \ge c \log p$ for a constant $c > 1$, there is a public-key bit-encryption scheme that is [[public-key-encryption#cpa-security|IND-CPA-secure]] but not [[circular-security#circular-security-of-bit-encryption|circular secure for bit encryption]]: given encryptions of the bits of its own secret key, an efficient attack recovers the whole key — [[Rot13 - On the Circular Security of Bit-Encryption|Rot13]]. So, unless that assumption fails, the identity map is no reduction from IND-CPA security to circular security of bit encryption.

## Notes

- There is no reduction of the circular security of a bit-encryption scheme to the semantic security of that same scheme that uses both the scheme and the adversary as black boxes, so no such reduction proves the folklore conjecture that every semantically secure bit-encryption scheme is circular secure; both negative results extend to the seemingly weaker conjecture that every CCA-secure bit-encryption scheme is circular secure — [[Rot13 - On the Circular Security of Bit-Encryption|Rot13]].
- From LWE, lockable obfuscation gives a public-key bit-encryption scheme that is IND-CPA-secure but not circular secure — [[GKW17c - Lockable Obfuscation|GKW17c]]; from iO, there is a bit-encryption scheme that is IND-CPA-secure but not $1$-circular secure — [[KRW15 - Separations in Circular Security for Arbitrary Length Key Cycles|KRW15]].
- For symmetric-key bit encryption the separation holds under LWE ([[no-cpa-security-to-secret-key-bit-circular-security-gkw17a|No fixed-construction reduction from CPA security to circular security of symmetric-key bit encryption]]) — [[GKW17a - Separating Semantic and Circular Security for Symmetric-Key Bit Encryption from the Learning with Errors Assumption|GKW17a]].
- Bootstrapping a somewhat homomorphic scheme into one for unbounded depth publishes encryptions of its own secret-key bits, so it needs IND-CPA security given those encryptions ([[homomorphic-encryption#circular-secure-bootstrappable-she|circular-secure bootstrappable SHE]]) — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]]; circular security for bit encryption implies that property — standard.
