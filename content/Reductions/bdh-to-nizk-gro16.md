---
type: reduction
status: draft
title: "DLIN ⇒ NIZK"
aliases: []
id: red-dlin-to-nizk-gos06
kind: implication
hypotheses: [decisional-linear]
conclusion: nizk
class: unstated
model: crs
source:
  - "[[GOS06 - Non-interactive Zaps and New Techniques for NIZK|GOS06b]]"
security-loss: ""
---

# DLIN ⇒ NIZK

[[decisional-diffie-hellman#dlin|DLIN]] implies [[non-interactive-zero-knowledge|NIZK]] proofs for $\classNP$ in the common reference string model.

## Statement

If the [[decisional-diffie-hellman#dlin|decisional linear assumption]] holds in a prime-order symmetric bilinear group, then Circuit-SAT, and hence every $\classNP$ language, has a [[non-interactive-zero-knowledge|NIZK]] proof in the common reference string model with perfect completeness, perfect soundness and computational zero-knowledge. The CRS has $O(\secpar)$ bits, and a proof for a circuit $C$ has $O(|C|\secpar)$ bits — [[GOS06 - Non-interactive Zaps and New Techniques for NIZK|GOS06b]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

`model: crs`: the proof system needs a trusted common reference string.

- The same paper gives non-interactive zaps (witness-indistinguishable proofs with no CRS) for every $\classNP$ language under DLIN — [[GOS06 - Non-interactive Zaps and New Techniques for NIZK|GOS06b]].
- Groth–Sahai proofs for pairing-product, multi-scalar-multiplication and quadratic equations can also be instantiated under DLIN — [[GS08 - Efficient Non-interactive Proof Systems for Bilinear Groups|GS08]]. The SXDH instantiation is [[sxdh-symmetric-external-diffie-hellman-to-nizk]].
- The perfect NIZK arguments of Groth, Ostrovsky and Sahai at EUROCRYPT 2006 rest on the subgroup decision assumption in composite-order bilinear groups, not on DLIN — [[GOS06a - Perfect Non-Interactive Zero Knowledge for NP|GOS06a]].
- This file used to record "BDH ⇒ NIZK" under Gro16. Gro16 proves knowledge soundness of a SNARK only in the generic bilinear group model ([[bilinear-pairing-to-snark-gro16]]) and assumes neither BDH nor DLIN. The filename is kept because filenames are live URLs.
