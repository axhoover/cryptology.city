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
  model: "The protocol UC-realizes the commitment functionality given a common reference string for each commitment; without setup, CF01 show that no terminating protocol between the committer and the receiver alone UC-realizes it."
---

# TDP ⇒ UC commitment in the CRS model (Canetti–Fischlin)

## Statement

If [[trapdoor-permutation|trapdoor permutations]] exist, then in the common reference string model there is a protocol that UC-realizes the bit-commitment functionality $\calF_{\mathrm{COM}}$ ([[commitment-scheme#uc-commitment|UC commitment]]), each commitment using its own reference string — [[CF01 - Universally Composable Commitments|CF01]]. The commit phase and the opening are each a single message from the committer to the receiver — [[CF01 - Universally Composable Commitments|CF01]].

## Sketch

The reference string holds keys $\pk_0, \pk_1$ of trapdoor permutations $f_{\pk_0}, f_{\pk_1}$ of $\bits^n$ and a uniform string $\sigma \in \bits^{4n}$; the commitment to $b$ is $y = G_{\pk_0}(r)$ for $b = 0$ and $y = G_{\pk_1}(r) \oplus \sigma$ for $b = 1$, where $G_{\pk} : \bits^n \to \bits^{4n}$ is a [[owp-to-prg-yao82a-gl89|Blum–Micali–Yao generator]] built from $f_{\pk}$ and $r \in \bits^n$ is a uniform seed, and the opening is $(b, r)$. Binding is statistical, since $\sigma$ lies in the at most $2^{2n}$-element set $\{G_{\pk_0}(r) \oplus G_{\pk_1}(r')\}$ with probability at most $2^{-2n}$. The simulator sets $\sigma = G_{\pk_0}(r_0) \oplus G_{\pk_1}(r_1)$, so it can open $G_{\pk_0}(r_0)$ to either bit, and keeps the trapdoor of $\pk_0$, with which it extracts $b$ from a corrupted committer's $y$ by testing whether $y$ lies in the image of $G_{\pk_0}$; the simulated reference string is indistinguishable from a real one by the pseudorandomness of $G_{\pk_1}$, whose trapdoor the simulator does not use — [[CF01 - Universally Composable Commitments|CF01]].

## Notes

- Without setup no terminating protocol between the committer and the receiver alone UC-realizes $\calF_{\mathrm{COM}}$ ([[no-authenticated-channels-to-uc-commitment-cf01|no UC commitment from authenticated channels]]) — [[CF01 - Universally Composable Commitments|CF01]].
- To realize the multi-commitment functionality $\calF_{\mathrm{MCOM}}$ with one reference string for all commitments, CF01 assume a claw-free pair of trapdoor permutations and a CCA2-secure PKE ([[claw-free-tdp-and-cca2-pke-to-uc-multi-commitment-cf01|claw-free TDP + CCA2 PKE ⇒ UC multi-commitment]]) — [[CF01 - Universally Composable Commitments|CF01]].
