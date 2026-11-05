---
type: reduction
status: draft
title: "Doubly enhanced certified TDP ⇒ Group signatures (BMW)"
aliases: []
id: red-doubly-enhanced-certified-tdp-to-group-signature-bmw03
kind: implication
hypotheses: [doubly-enhanced-certified-tdp]
conclusion: group-signature
class: free
model: standard
source:
  - "[[BMW03 - Foundations of Group Signatures Formal Definitions, Simplified Requirements, and a Construction Based on General Assumptions|BMW03]]"
  - "[[GR13 - Enhancements of Trapdoor Permutations|GR13]]"
security-loss: ""
rationale:
  class: "Each group signature carries a NIZK proof of an NP statement about the encryption and signature algorithms built from the trapdoor permutation, so the construction uses their code."
  model: "The NIZK reference string is part of the group public key, which the trusted key generation of the group signature syntax outputs."
---

# Doubly enhanced certified TDP ⇒ Group signatures (BMW)

## Statement

If [[trapdoor-permutation#doubly-enhanced-certified-trapdoor-permutations|doubly enhanced certified trapdoor permutations]] exist, then there is a [[group-signature|group signature scheme]] that is [[group-signature#full-anonymity|fully anonymous]] and [[group-signature#full-traceability|fully traceable]] — [[BMW03 - Foundations of Group Signatures Formal Definitions, Simplified Requirements, and a Construction Based on General Assumptions|BMW03]]. The construction combines an [[public-key-encryption#cca-security|IND-CCA-secure]] [[public-key-encryption|PKE]] scheme, an adaptively sound [[non-interactive-zero-knowledge#simulation-sound-nizk-ss-nizk|simulation-sound NIZK]] proof system for $\classNP$ and an [[digital-signature#existential-unforgeability|EUF-CMA]] [[digital-signature|signature scheme]], each known from doubly enhanced certified trapdoor permutations (IND-CCA encryption from IND-CPA encryption and NIZK: [[pke-cpa-security-and-nizk-to-pke-cca2-security-ddn91|CPA-secure PKE + NIZK ⇒ CCA2-secure PKE]] — [[DDN91 - Non-Malleable Cryptography (Extended Abstract)|DDN91]], [[Sah99 - Non-Malleable Non-Interactive Zero Knowledge and Adaptive Chosen-Ciphertext Security|Sah99]]) — [[BMW03 - Foundations of Group Signatures Formal Definitions, Simplified Requirements, and a Construction Based on General Assumptions|BMW03]], [[GR13 - Enhancements of Trapdoor Permutations|GR13]]. NIZK proofs for $\classNP$ are known from trapdoor permutations that are [[trapdoor-permutation#doubly-enhanced-certified-trapdoor-permutations|doubly enhanced and certified]] ([[tdp-to-nizk-bfm88|Doubly enhanced certified TDP ⇒ NIZK]]) — [[FLS90 - Multiple Non-Interactive Zero Knowledge Proofs Based on a Single Random String|FLS90]]; the hidden-bits construction uses the double enhancement — [[GR13 - Enhancements of Trapdoor Permutations|GR13]] — and, against indices a cheating prover chooses, certification — [[BY96 - Certifying Permutations Noninteractive Zero-Knowledge Based on Any Trapdoor Permutation|BY96]], [[CL18 - Certifying Trapdoor Permutations, Revisited|CL18]].

## Notes

- Keys have length polynomial in $\secpar$ and $\log n$, and signatures polynomial in $\secpar$, $\log n$ and the message length, where $n$ is the number of members (the scheme is _compact_) — [[BMW03 - Foundations of Group Signatures Formal Definitions, Simplified Requirements, and a Construction Based on General Assumptions|BMW03]].
- Conversely, group signatures imply public-key encryption ([[group-signature-to-pke-aw04|Group signatures ⇒ PKE]]) — [[AW04 - On the Minimal Assumptions of Group Signature Schemes|AW04]], whereas [[digital-signature|digital signatures]] follow from one-way functions ([[hash-function-to-ds|OWF ⇒ DS]]) — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]].
