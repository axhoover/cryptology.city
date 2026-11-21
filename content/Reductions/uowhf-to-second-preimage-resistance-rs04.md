---
type: reduction
status: draft
title: "UOWHF ⇒ Second-preimage resistance"
aliases: []
id: red-uowhf-to-second-preimage-resistance-rs04
kind: implication
hypotheses: [uowhf]
conclusion: second-preimage-resistance
class: fully-black-box
model: standard
source:
  - "[[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]]"
security-loss: "none: the target-collision finder has the same advantage, in the time of the second-preimage finder plus one uniform sample from the domain"
rationale:
  class: "The second-preimage-resistant family is the hash family itself, and the target-collision finder commits to a uniform input and runs any second-preimage finder once as an oracle."
---

# UOWHF ⇒ Second-preimage resistance

## Statement

Every [[hash-function#target-collision-resistance-universal-one-wayness|target-collision-resistant]] family (UOWHF) $\hash : \calK \times \bits^n \to \bits^m$, $m < n$, is [[hash-function#second-preimage-resistance|second-preimage resistant]] — [[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]] (Proposition 6(4), eSec → Sec). For every second-preimage finder $\calA$ there is a target-collision finder $\calB = (\calB_1, \calB_2)$, running in the time of $\calA$ plus one uniform sample from $\bits^n$, with

$$
\Adv^{\mathrm{tcr}}_{\hash,\calB}(\secpar) = \Adv^{\mathrm{spr}}_{\hash,\calA}(\secpar)
$$

— standard. The same holds for a family on other finite sets read through the binary encodings of the CRHF definition.

## Sketch

$\calB_1(1^\secpar)$ samples $x \getsr \calD$ and outputs $(x, \st)$ with $\st = (1^\secpar, x)$; on key $k$, $\calB_2(\st, k)$ outputs $\calA(1^\secpar, k, x)$. The uniform target is independent of $k$, as in $\Game^{\mathrm{spr}}_{\hash,\calA}$, so $\calB$ wins exactly when $\calA$ does.

## Notes

- Target collision resistance maximizes over the target where second-preimage resistance averages over it. [[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]] define it (eSec) both in a one-stage form, maximizing over a fixed target, and in the two-stage form of [[hash-function#target-collision-resistance-universal-one-wayness|the UOWHF game]], in which the adversary chooses the target, and show the two forms equivalent (Section 4).
