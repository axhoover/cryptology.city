---
type: reduction
status: draft
title: "TDP ⇒ UC commitment in the CRS model (Canetti–Fischlin)"
aliases: []
id: red-tdp-to-uc-commitment-cf01
kind: implication
hypotheses: [tdp]
conclusion: uc-commitment
class: unstated
model: crs
source:
  - "[[CF01 - Universally Composable Commitments|CF01]]"
security-loss: ""
rationale:
  model: "The protocol UC-realizes the commitment functionality given a common reference string for each commitment, which CF01 show cannot be dropped for a protocol between the committer and the receiver alone."
---

# TDP ⇒ UC commitment in the CRS model (Canetti–Fischlin)

## Statement

If [[trapdoor-permutation|trapdoor permutations]] exist, then in the common reference string model there is a protocol that UC-realizes the bit-commitment functionality $\calF_{\mathrm{COM}}$ ([[commitment-scheme#uc-commitment|UC commitment]]), each commitment using its own reference string — [[CF01 - Universally Composable Commitments|CF01]]. The commit phase and the opening are each a single message from the committer to the receiver — [[CF01 - Universally Composable Commitments|CF01]].

## Sketch

The reference string holds the key $\pk$ of a trapdoor permutation $f_{\pk}$ of $\bits^n$ and a uniform string $\sigma$. The commitment to $b$ is $G_{\pk}(r)$ for $b = 0$ and $G_{\pk}(r) \oplus \sigma$ for $b = 1$, where $G_{\pk}$ is a Blum–Micali–Yao generator built from $f_{\pk}$ and $r$ is a uniform seed, and the opening is $(b, r)$. A simulator that knows the trapdoor extracts $b$ from a corrupted committer's commitment, and one that sets $\sigma = G_{\pk}(r_0) \oplus G_{\pk}(r_1)$ opens $G_{\pk}(r_0)$ to either bit — [[CF01 - Universally Composable Commitments|CF01]].

## Notes

- Without setup no protocol between the committer and the receiver alone UC-realizes $\calF_{\mathrm{COM}}$ ([[no-authenticated-channels-to-uc-commitment-cf01|no UC commitment from authenticated channels]]) — [[CF01 - Universally Composable Commitments|CF01]].
- With one reference string for all commitments, which is the multi-commitment functionality, CF01 assume a claw-free pair of trapdoor permutations and a CCA2-secure PKE ([[claw-free-tdp-and-cca2-pke-to-uc-multi-commitment-cf01|claw-free TDP + CCA2 PKE ⇒ UC multi-commitment]]) — [[CF01 - Universally Composable Commitments|CF01]].
