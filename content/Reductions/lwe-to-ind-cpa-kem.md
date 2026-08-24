---
type: reduction
status: stub
title: "LWE ⇒ IND-CPA KEM"
aliases: []
id: red-lwe-to-ind-cpa-kem
kind: implication
hypotheses: [lwe]
conclusion: ind-cpa-kem
class: unstated
model: standard
source: folklore
security-loss: ""
---

# LWE ⇒ IND-CPA KEM

[[learning-with-errors|LWE]] implies [[key-encapsulation-mechanism#ind-cpa-kem|IND-CPA KEM]].

## Statement

Migrated verbatim from [[key-encapsulation-mechanism]]:

> Kyber is an IND-CCA KEM based on [[learning-with-errors|Module LWE]] (rank-3 module over a polynomial ring). Standardized by NIST as ML-KEM (FIPS 203). Uses the Fujisaki-Okamoto transform to achieve IND-CCA security from an IND-CPA base scheme.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- The hypothesis should be Module-LWE, but `[[learning-with-errors|Module LWE]]` points at the plain LWE page whose aliases do not cover MLWE — a distinct assumption silently conflated.
- Uncited (no Kyber/ML-KEM reference page).
- The 'rank-3 module over a polynomial ring' parameterization is a side condition the edge cannot carry.
- ind-cpa-kem has no node of its own; it is a '## IND-CPA KEM' variation of the KEM page.
- Composite: Module-LWE => IND-CPA base scheme, then Fujisaki-Okamoto => IND-CCA KEM in the ROM. Must be split.
- Wikilink `[[learning-with-errors|Module LWE]]` points Module-LWE at the plain LWE page; the LWE page's aliases cover LWE/RLWE but not MLWE, so a distinct assumption is silently conflated.
- No citation for either link (no FO99 or Kyber reference page).
- The ROM requirement of the FO transform is not stated on this line.
