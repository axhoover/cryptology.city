---
type: reduction
status: draft
title: "CRHF ⇒ UOWHF"
aliases: []
id: red-crhf-to-uowhf-rs04
kind: implication
hypotheses: [crhf]
conclusion: uowhf
class: fully-black-box
model: standard
source:
  - "[[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]]"
security-loss: "none: the collision finder has the same advantage, in the time of the two stages of the target-collision finder"
rationale:
  class: "The target-collision-resistant family is the hash family itself, and the collision finder runs both stages of any target-collision finder once as oracles."
---

# CRHF ⇒ UOWHF

## Statement

Every [[hash-function#collision-resistance|collision-resistant]] family $\hash : \calK \times \bits^n \to \bits^m$, $m < n$, is [[hash-function#target-collision-resistance-universal-one-wayness|target collision resistant]], a UOWHF — [[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]] (Proposition 6(2), Coll → eSec). For every target-collision finder $\calA = (\calA_1, \calA_2)$ there is a collision finder $\calB$, running in the time of $\calA_1$ and $\calA_2$, with

$$
\Adv^{\mathrm{cr}}_{\hash,\calB}(\secpar) = \Adv^{\mathrm{tcr}}_{\hash,\calA}(\secpar)
$$

— standard. The same holds for a family on other finite sets read through the binary encodings of the CRHF definition.

## Sketch

On key $k$, $\calB$ runs $(x, \st) \gets \calA_1(1^\secpar)$ and $\hat{x} \gets \calA_2(\st, k)$ and outputs $(x, \hat{x})$. The target $x$ does not depend on $k$, so $\calA$'s view is that of $\Game^{\mathrm{tcr}}_{\hash,\calA}$, and the pair is a collision exactly when $\calA$ wins.

## Notes

- In the concrete setting of [[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]] the converse fails: for every family $\hash$ with inputs longer than its outputs, they build $\hash_5$ on the same domain and range whose target-collision advantage is at most twice that of $\hash$, at comparable running time, and which has a collision found in linear time (Theorem 11).
