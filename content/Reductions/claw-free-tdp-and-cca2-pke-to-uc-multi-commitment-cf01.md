---
type: reduction
status: draft
title: "Claw-free TDP + CCA2 PKE ⇒ UC multi-commitment in the CRS model (Canetti–Fischlin)"
aliases: []
id: red-claw-free-tdp-and-cca2-pke-to-uc-multi-commitment-cf01
kind: implication
hypotheses: [claw-free-trapdoor-permutations, pke-cca2-security]
conclusion: uc-multi-commitment
class: unstated
model: crs
source:
  - "[[CF01 - Universally Composable Commitments|CF01]]"
security-loss: ""
rationale:
  model: "All commitments share one common reference string, which holds the description of the claw-free pair and the public key of the encryption scheme."
---

# Claw-free TDP + CCA2 PKE ⇒ UC multi-commitment in the CRS model (Canetti–Fischlin)

## Statement

Given a [[trapdoor-permutation#claw-free-trapdoor-permutations|claw-free pair of trapdoor permutations]] and a [[public-key-encryption#cca-security|CCA2-secure]] public-key encryption scheme, there is a protocol in the common reference string model that UC-realizes the multi-commitment functionality $\calF_{\mathrm{MCOM}}$ ([[commitment-scheme#uc-multi-commitment|UC multi-commitment]]), all commitments using one reference string, which holds the description of the pair and a public key of the encryption scheme — [[CF01 - Universally Composable Commitments|CF01]]. The commit phase and the opening are each a single message from the committer to the receiver, and the honest committer erases part of the randomness it used before sending the commitment — [[CF01 - Universally Composable Commitments|CF01]].

## Notes

- A variant of the protocol needs no erasures — [[CF01 - Universally Composable Commitments|CF01]].
- With a fresh reference string for each commitment, trapdoor permutations suffice ([[tdp-to-uc-commitment-cf01|TDP ⇒ UC commitment]]) — [[CF01 - Universally Composable Commitments|CF01]].
