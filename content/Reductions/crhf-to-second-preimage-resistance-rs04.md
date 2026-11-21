---
type: reduction
status: draft
title: "CRHF ⇒ Second-preimage resistance"
aliases: []
id: red-crhf-to-second-preimage-resistance-rs04
kind: implication
hypotheses: [crhf]
conclusion: second-preimage-resistance
class: fully-black-box
model: standard
source:
  - "[[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]]"
security-loss: "none: the collision finder has the same advantage, in the time of the second-preimage finder plus one uniform sample from the domain"
rationale:
  class: "The second-preimage-resistant family is the hash family itself, and the collision finder runs any second-preimage finder once as an oracle on a uniform input."
---

# CRHF ⇒ Second-preimage resistance

## Statement

Every [[hash-function#collision-resistance|collision-resistant]] family $\hash : \calK \times \bits^n \to \bits^m$, $m < n$, is [[hash-function#second-preimage-resistance|second-preimage resistant]] — [[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]] (Proposition 6(1), Coll → Sec). For every second-preimage finder $\calA$ there is a collision finder $\calB$, running in the time of $\calA$ plus one uniform sample from $\bits^n$, with

$$
\Adv^{\mathrm{cr}}_{\hash,\calB}(\secpar) = \Adv^{\mathrm{spr}}_{\hash,\calA}(\secpar)
$$

— standard. The same holds for a family on other finite sets read through the binary encodings of the CRHF definition.

## Sketch

On key $k$, $\calB$ samples $x \getsr \calD$, runs $\hat{x} \gets \calA(1^\secpar, k, x)$ and outputs $(x, \hat{x})$. This pair is a collision exactly when $\calA$ wins $\Game^{\mathrm{spr}}_{\hash,\calA}$, whose challenge it reproduces.

## Notes

- The converse fails. For a second-preimage-resistant $\hash$ on $\bits^n$, the family $\hash'$ with $\hash'(k, 0^n) = \hash'(k, 1^n) := 0^m$ and $\hash' := \hash$ elsewhere has the fixed collision $(0^n, 1^n)$ and the same domain and range, and it is second-preimage resistant — standard. A uniform challenge is $0^n$ or $1^n$ with probability $2^{1-n}$; a partner under $\hash'$ of any other $x$ is either a partner under $\hash$ or one of $0^n, 1^n$, and the latter needs $\hash(k, x) = 0^m$, which has probability at most $\sqrt{\varepsilon + 2^{-n}}$ if the second-preimage finder that outputs a uniform input has advantage $\varepsilon$ against $\hash$. This family is $H_4$ of [[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]] (Theorem 16(21), Sec ↛ Coll); the bound stated there, $2^{1-n} + \Adv^{\mathrm{spr}}_{\hash}$ in this notation, has no term for the event $\hash(k, x) = 0^m$.
- Collision resistance also implies [[crhf-to-uowhf-rs04|target collision resistance]], which in turn implies second-preimage resistance ([[uowhf-to-second-preimage-resistance-rs04|UOWHF ⇒ Second-preimage resistance]]) — [[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]] (Proposition 6).
