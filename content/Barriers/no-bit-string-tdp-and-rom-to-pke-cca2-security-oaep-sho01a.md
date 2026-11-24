---
type: barrier
status: draft
title: "No relativizing reduction from TDP over bit strings + ROM to CCA-secure PKE (OAEP)"
aliases: []
id: bar-bit-string-tdp-and-rom-to-pke-cca2-security-oaep-sho01a
hypotheses: [bit-string-tdp, rom]
conclusion: pke-cca2-security
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
oracle: "Shoup's oracle, relative to which some trapdoor permutation over bit strings makes OAEP fail IND-CCA2 security in the random oracle model"
circumvented-by: [red-rsa-to-ind-cca-pke-oaep-fops01]
source:
  - "[[Sho01a - OAEP Reconsidered|Sho01a]]"
rationale:
  class: "Sho01a rules out relativizing security proofs for the one construction OAEP, and the vocabulary has no class that fixes the construction and restricts the proof to relativizing ones."
---

# No relativizing reduction from TDP over bit strings + ROM to CCA-secure PKE (OAEP)

## Statement

There is an oracle relative to which some [[trapdoor-permutation#trapdoor-permutations-over-bit-strings|trapdoor permutation over bit strings]] $f$ makes OAEP over $f$ ([[BR94 - Optimal Asymmetric Encryption|BR94]], Section 6; defined in [[rsa-to-ind-cca-pke-oaep-fops01|RSA ⇒ IND-CCA PKE (RSA-OAEP)]]) insecure against adaptive chosen-ciphertext attack in the [[random-oracle-model|random oracle model]] — [[Sho01a - OAEP Reconsidered|Sho01a]]. So no proof that holds relative to every oracle shows OAEP over every trapdoor permutation over bit strings [[public-key-encryption#cca-security|IND-CCA2-secure]] in the random oracle model; other constructions from the same hypotheses are not ruled out. [[BR94 - Optimal Asymmetric Encryption|BR94]] (Section 1.8) record the consequence for their scheme: by Sho01a there are trapdoor permutations for which it fails to be IND-CCA.

## Notes

- Sho01a finds a gap in the OAEP security proof and shows that it cannot be filled — [[Sho01a - OAEP Reconsidered|Sho01a]]. [[BR94 - Optimal Asymmetric Encryption|BR94]] prove OAEP over every trapdoor permutation semantically secure (Theorem 6.1) and plaintext-aware (Theorem 6.2) in the random oracle model. That notion of plaintext awareness implies security against non-adaptive chosen-ciphertext attack but not IND-CCA2 security — [[MKJR16 - PKCS 1 RSA Cryptography Specifications Version 2.2|MKJR16]] (Section 7.1).
- Sho01a also gives OAEP+, a variant of OAEP essentially as efficient as OAEP, with a complete security proof in the random oracle model and a tighter reduction — [[Sho01a - OAEP Reconsidered|Sho01a]].
- RSA-OAEP is IND-CCA2-secure in the random oracle model under the [[rsa-assumption|RSA assumption]] ([[rsa-to-ind-cca-pke-oaep-fops01|RSA ⇒ IND-CCA PKE (RSA-OAEP)]]) — [[FOPS01 - RSA-OAEP Is Secure under the RSA Assumption|FOPS01]]. The proof uses algebraic properties of the RSA function, not the security of general OAEP — [[Sho01a - OAEP Reconsidered|Sho01a]].
