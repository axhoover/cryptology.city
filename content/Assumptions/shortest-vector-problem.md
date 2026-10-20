---
type: assumption
status: stub
aliases:
  - GapSVP
  - Shortest Vector Problem
  - SVP
title: Shortest Vector Problem
id: gapsvp
---

# Shortest Vector Problem

The promise problem of deciding, given a lattice basis and a parameter $d$, whether the lattice's shortest nonzero vector is shorter than $d$ or longer than $\gamma \cdot d$, for an approximation factor $\gamma$.

TODO: syntax and security definition.

<!-- BEGIN GENERATED participates-in a56fd6ad3ac7 -->

## Participates in

**Builds on Shortest Vector Problem**

- [[gapsvp-to-coam-gg00|GapSVP ∈ coAM for γ ≥ √(n/log n)]]
- [[gapsvp-to-conp-ar04|GapSVP ∈ coNP for γ ≥ √n]]
- [[gapsvp-to-lwe-reg05|GapSVP ⇒ LWE]]
- [[gapsvp-to-np|GapSVP ∈ NP]]
- [[gapsvp-to-sis-ajt96|GapSVP ⇒ SIS]]
- [[gapsvp-to-szk-mv03|GapSVP ∈ SZK for γ ≥ √(n/log n)]]

**Barriers**

- [[no-np-to-gapsvp-ar04|No Karp reduction from NP to GapSVP for γ ≥ √n unless NP = coNP]]
- [[no-np-to-gapsvp-gg00|No Karp reduction from NP to GapSVP for γ ≥ √(n/log n) unless coNP ⊆ AM]]

<!-- END GENERATED participates-in -->
