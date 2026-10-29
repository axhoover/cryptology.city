---
type: reduction
status: draft
title: "DLIN ⇒ NIZK"
aliases: []
id: red-dlin-to-nizk-gos06
kind: implication
hypotheses: [decisional-linear]
conclusion: nizk-for-np
class: unstated
model: crs
source:
  - "[[GOS06 - Non-interactive Zaps and New Techniques for NIZK|GOS06b]]"
security-loss: "tight: telling the real CRS from the simulated one is one DLIN instance, simulation on the latter is perfect, and soundness is perfect"
rationale:
  model: "The proof system needs a trusted common reference string."
---

# DLIN ⇒ NIZK

## Statement

If the [[decisional-diffie-hellman#dlin|decisional linear assumption]] holds in a prime-order symmetric bilinear group, then Circuit-SAT, and hence every $\classNP$ language, has a [[non-interactive-zero-knowledge|NIZK]] proof in the common reference string model with perfect completeness, perfect soundness and computational zero-knowledge. The CRS has $O(\secpar)$ bits, and a proof for a circuit $C$ has $O(|C|\secpar)$ bits — [[GOS06 - Non-interactive Zaps and New Techniques for NIZK|GOS06b]].

## Sketch

For a circuit of NAND gates, the prover commits to the value of every wire of a satisfying assignment with a DLIN-based homomorphic commitment, proves with pairing equations that each commitment opens to a bit, and for each gate $b_2 = \neg(b_0 \wedge b_1)$ proves that the homomorphically derived commitment to $b_0 + b_1 + 2b_2 - 2$ also opens to a bit, which holds exactly when the gate is satisfied. Under the real CRS the commitment is perfectly binding, which gives perfect soundness; under DLIN this CRS is indistinguishable from one under which the commitment is perfectly hiding and, given a trapdoor, equivocable, and on such a CRS the simulator proves without a witness.

## Notes

- The same paper gives non-interactive zaps (witness-indistinguishable proofs with no CRS) for every $\classNP$ language under DLIN — [[GOS06 - Non-interactive Zaps and New Techniques for NIZK|GOS06b]].
- Groth–Sahai proofs for pairing-product, multi-scalar-multiplication and quadratic equations can also be instantiated under DLIN — [[GS08 - Efficient Non-interactive Proof Systems for Bilinear Groups|GS08]]; the SXDH instantiation is [[sxdh-symmetric-external-diffie-hellman-to-nizk|SXDH ⇒ NIZK]].
- The perfect NIZK arguments of Groth, Ostrovsky and Sahai at EUROCRYPT 2006 rest on the subgroup decision assumption in composite-order bilinear groups, not on DLIN ([[subgroup-decision-to-nonadaptive-nizk-argument-for-np-gos06a|Subgroup decision ⇒ Perfect NIZK arguments for NP]]) — [[GOS06a - Perfect Non-Interactive Zero Knowledge for NP|GOS06a]].
- Groth's 2016 pairing-based [[succinct-argument#zk-snark|zk-SNARK]] assumes neither DLIN nor BDH: its knowledge soundness is proved in the generic bilinear group model — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]] ([[bilinear-pairing-to-snark-gro16|Bilinear pairing ⇒ zk-SNARK]]).
