---
type: reduction
status: draft
title: GapSVP ∈ coNP for γ ≥ √n
aliases: []
id: red-gapsvp-to-conp-ar04
kind: inclusion
hypotheses: [gapsvp]
conclusion: conp
class: free
model: standard
source:
  - "[[AR04 - Lattice Problems in NP intersect coNP|AR04]]"
security-loss: ""
---

# GapSVP ∈ coNP for γ ≥ √n

## Statement

For $\gamma = c\sqrt{n}$ with a suitable constant $c$, $\mathrm{GapSVP}_\gamma$ ([[shortest-vector-problem|GapSVP]]), and likewise $\mathrm{GapCVP}_\gamma$, lies in [[co-nondeterministic-polynomial-time|coNP]], hence in $\classNP \cap \classcoNP$ — [[AR04 - Lattice Problems in NP intersect coNP|AR04]].

## Notes

- The factor-$\sqrt{n / \log n}$ problem is in $\classNP \cap \classcoAM$ ([[gapsvp-to-coam-gg00|GapSVP ∈ coAM]]) — [[GG00 - On the limits of non-approximability of lattice problems|GG00]].
- Consequently $\mathrm{GapSVP}_{\sqrt n}$ is not $\classNP$-hard under Karp reductions unless $\classNP = \classcoNP$: [[no-np-to-gapsvp-ar04|No Karp reduction from NP to GapSVP√n]] — [[AR04 - Lattice Problems in NP intersect coNP|AR04]].
- Regev's reduction bases LWE with noise rate $\alpha$ on approximation factors $\gamma = \tilde{O}(n / \alpha) \ge \tilde{O}(n)$ ([[gapsvp-to-lwe-reg05|GapSVP ⇒ LWE]]), so LWE-based cryptography rests on worst-case lattice problems in $\classNP \cap \classcoNP$, which are not $\classNP$-hard under Karp reductions unless $\classNP = \classcoNP$ — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]].
