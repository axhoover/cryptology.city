---
type: reduction
status: draft
title: "Module LWE ⇔ Ring LWE"
aliases: []
id: red-module-lwe-to-ring-lwe-ls15
kind: equivalence
hypotheses: [module-lwe-rank-1]
conclusion: ring-lwe
class: unstated
model: standard
source:
  - "[[LS15 - Worst-case to average-case reductions for module lattices|LS15]]"
security-loss: ""
---

# Module LWE ⇔ Ring LWE

[[learning-with-errors#module-lwe|Module LWE]] is equivalent to [[learning-with-errors#ring-lwe|Ring LWE]].

## Statement

Migrated verbatim from [[LS15 - Worst-case to average-case reductions for module lattices]]:

> Introduced Module LWE (MLWE), which generalizes Ring LWE by considering rank-$k$ modules over a polynomial ring $R_q$. When $k = 1$ this recovers Ring LWE; when $k = n$ this recovers plain LWE. The module structure interpolates between the two extremes, yielding a flexible parameter trade-off between efficiency and security assumptions. Kyber (ML-KEM) and Dilithium (ML-DSA), the NIST post-quantum standards, are based on Module LWE.

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- STRUCTURAL: no ## Abstract heading; unlabelled editorial paragraph.
- SUSPECTED IMPRECISION (recorded, not fixed): 'when k = n this recovers plain LWE' is wrong as stated. Plain LWE is the degree-1 ring R = Z at rank n; over a degree-n ring, rank n gives a module of total dimension n^2, not plain LWE. The k=1 => Ring LWE half is correct.
- MAJOR OMISSION: the page's own title promises worst-case to average-case reductions for module lattices, and the inventory already records that edge (Assumptions/learning-with-errors.md:129 [worst-case-module-lattice-problems => module-lwe], sourced to LS15). This editorial summary omits the paper's actual theorem entirely and describes only the definition and deployments.
- The Kyber/Dilithium sub-edge is a deployment claim with NO citation and no reference page for either scheme — sources[] left empty rather than fabricated.
- The two specialisation equivalences (rank-1 = RLWE, rank-n = LWE) are NOT in the existing 861-record inventory; they are the only genuinely new content on this page.
- No inline citations.
