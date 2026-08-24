---
type: reduction
status: draft
title: "FAC ⇒ QR"
aliases: []
id: red-fac-to-qr-gm84
kind: implication
hypotheses: [fac]
conclusion: qr
class: unstated
model: standard
source:
  - "[[GM84 - Probabilistic encryption|GM84]]"
security-loss: ""
---

# FAC ⇒ QR

[[factoring|FAC]] implies [[quadratic-residuosity|QR]].

## Statement

Migrated verbatim from [[factoring]] § Known Results:

> - The [[quadratic-residuosity|QR assumption]] follows from factoring hardness — [[GM84 - Probabilistic encryption|GM84]]

Migrated verbatim from [[quadratic-residuosity]] § Known Results:

> - QR follows from [[factoring|factoring hardness]]: knowing $p$ and $q$ allows computing the Legendre symbols $\left(\frac{a}{p}\right)$ and $\left(\frac{a}{q}\right)$ — [[GM84 - Probabilistic encryption|GM84]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- SUSPECTED MATHEMATICAL ERROR: QR hardness does not follow from factoring hardness; factoring N breaks QR, so QR hardness implies factoring hardness.
- GM84 does not prove that factoring hardness implies the QR assumption.
- SUSPECTED DIRECTION ERROR (report only, high confidence): "QR follows from factoring hardness" is backwards. The justification given on the same bullet — knowing p and q lets you compute the Legendre symbols — shows that a FACTORING ALGORITHM BREAKS QR, i.e. QR hardness implies factoring hardness, making QR the STRONGER assumption. QR does not follow from factoring hardness; no reduction in that direction is known.
- The # Attacks bullet at line 68 of this same page states the correct direction and directly contradicts this bullet.
- GM84 is cited for a claim GM84 does not make in this direction.
