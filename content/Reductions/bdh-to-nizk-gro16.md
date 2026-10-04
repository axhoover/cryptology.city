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
rationale:
  model: "The proof system needs a trusted common reference string."
---

# DLIN ⇒ NIZK

## Statement

If the [[decisional-diffie-hellman#dlin|decisional linear assumption]] holds in a prime-order symmetric bilinear group, then Circuit-SAT, and hence every $\classNP$ language, has a [[non-interactive-zero-knowledge|NIZK]] proof in the common reference string model with perfect completeness, perfect soundness and computational zero-knowledge. The CRS has $O(\secpar)$ bits, and a proof for a circuit $C$ has $O(|C|\secpar)$ bits — [[GOS06 - Non-interactive Zaps and New Techniques for NIZK|GOS06b]].

## Notes

- The same paper gives non-interactive zaps (witness-indistinguishable proofs with no CRS) for every $\classNP$ language under DLIN — [[GOS06 - Non-interactive Zaps and New Techniques for NIZK|GOS06b]].
- Groth–Sahai proofs for pairing-product, multi-scalar-multiplication and quadratic equations can also be instantiated under DLIN — [[GS08 - Efficient Non-interactive Proof Systems for Bilinear Groups|GS08]]; the SXDH instantiation is [[sxdh-symmetric-external-diffie-hellman-to-nizk|SXDH ⇒ NIZK]].
- The perfect NIZK arguments of Groth, Ostrovsky and Sahai at EUROCRYPT 2006 rest on the subgroup decision assumption in composite-order bilinear groups, not on DLIN — [[GOS06a - Perfect Non-Interactive Zero Knowledge for NP|GOS06a]].
- Groth's 2016 pairing-based [[succinct-argument#zk-snark|zk-SNARK]] assumes neither DLIN nor BDH: its knowledge soundness is proved in the generic bilinear group model — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]] ([[bilinear-pairing-to-snark-gro16|Bilinear pairing ⇒ zk-SNARK]]).
