---
type: barrier
status: draft
title: "No fully-black-box reduction from CCA-secure PKE to IBE"
aliases: []
id: bar-pke-cca2-security-to-ibe-bprvw08
hypotheses: [pke-cca2-security]
conclusion: ibe
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
source:
  - "[[BPRVW08 - On the Impossibility of Basing Identity Based Encryption on Trapdoor Permutations|BPRVW08]]"
rationale:
  class: "BPRVW08 rule out black-box constructions, which covers at least every construction that uses the encryption scheme only as an oracle with a security proof that uses the adversary only as an oracle."
---

# No fully-black-box reduction from CCA-secure PKE to IBE

## Statement

There is no fully-black-box construction of [[identity-based-encryption|identity-based encryption]] from [[public-key-encryption#cca-security|IND-CCA2-secure]] [[public-key-encryption|public-key encryption]] — [[BPRVW08 - On the Impossibility of Basing Identity Based Encryption on Trapdoor Permutations|BPRVW08]].

## Notes

- The same holds with trapdoor permutations in place of CCA-secure encryption ([[no-tdp-to-ibe-bprvw08|No fully-black-box reduction from TDP to IBE]]) — [[BPRVW08 - On the Impossibility of Basing Identity Based Encryption on Trapdoor Permutations|BPRVW08]].
- The converse holds: selectively secure IBE gives IND-CCA2-secure PKE ([[ind-sid-cpa-to-pke-cca2-security-chk04|Selective-ID IBE ⇒ CCA-secure PKE (CHK)]]) — [[CHK04 - Chosen-Ciphertext Security from Identity-Based Encryption|CHK04]].
