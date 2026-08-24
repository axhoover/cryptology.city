---
type: reduction
status: stub
title: "Module LWE ⇒ KEM"
aliases: []
id: red-module-lwe-to-kem
kind: implication
hypotheses: [module-lwe]
conclusion: kem
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Module LWE ⇒ KEM

[[learning-with-errors#module-lwe|Module LWE]] implies [[key-encapsulation-mechanism|KEM]].

## Statement

Migrated verbatim from [[learning-with-errors]] § Module LWE:

> - **Kyber / ML-KEM** (FIPS 203): IND-CCA [[key-encapsulation-mechanism|KEM]] from Module LWE with $k = 2, 3, 4$

Migrated verbatim from [[LS15 - Worst-case to average-case reductions for module lattices]]:

> Introduced Module LWE (MLWE), which generalizes Ring LWE by considering rank-$k$ modules over a polynomial ring $R_q$. When $k = 1$ this recovers Ring LWE; when $k = n$ this recovers plain LWE. The module structure interpolates between the two extremes, yielding a flexible parameter trade-off between efficiency and security assumptions. Kyber (ML-KEM) and Dilithium (ML-DSA), the NIST post-quantum standards, are based on Module LWE.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation; FIPS 203 and Kyber are named as bare text with no reference page.
- The IND-CCA KEM is obtained via a Fujisaki-Okamoto transform proved in the RANDOM ORACLE MODEL; the bullet states no model.
- STRUCTURAL: no ## Abstract heading; unlabelled editorial paragraph.
- SUSPECTED IMPRECISION (recorded, not fixed): 'when k = n this recovers plain LWE' is wrong as stated. Plain LWE is the degree-1 ring R = Z at rank n; over a degree-n ring, rank n gives a module of total dimension n^2, not plain LWE. The k=1 => Ring LWE half is correct.
- MAJOR OMISSION: the page's own title promises worst-case to average-case reductions for module lattices, and the inventory already records that edge (Assumptions/learning-with-errors.md:129 [worst-case-module-lattice-problems => module-lwe], sourced to LS15). This editorial summary omits the paper's actual theorem entirely and describes only the definition and deployments.
- The Kyber/Dilithium sub-edge is a deployment claim with NO citation and no reference page for either scheme — sources[] left empty rather than fabricated.
- The two specialisation equivalences (rank-1 = RLWE, rank-n = LWE) are NOT in the existing 861-record inventory; they are the only genuinely new content on this page.
- No inline citations.
