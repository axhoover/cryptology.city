---
type: reduction
status: draft
title: "Arbitrary-length CRHF ⇒ Length-halving second-preimage resistance"
aliases: []
id: red-arbitrary-length-crhf-to-length-halving-second-preimage-resistance
kind: implication
hypotheses: [arbitrary-length-crhf]
conclusion: length-halving-second-preimage-resistance
class: fully-black-box
model: standard
source:
  - "[[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]]"
security-loss: "none: the collision finder has at least the advantage of the second-preimage finder, in its time plus one evaluation of the family and one uniform sample from the domain"
rationale:
  class: "The construction restricts the family to one input length and pads its value to at least one bit, and the collision finder runs any second-preimage finder once as an oracle on a uniform input."
---

# Arbitrary-length CRHF ⇒ Length-halving second-preimage resistance

## Statement

Let $\hash : \calK \times \bits^* \to \bits^m$ be an [[hash-function#arbitrary-length-collision-resistance|arbitrary-length CRHF]]. Its output length $m(\secpar) = |\hash(k, \varepsilon)|$, for any key $k \gets \KeyGen(1^\secpar)$, is polynomially bounded and computable from $1^\secpar$ in polynomial time. Set $m'(\secpar) := \max(m(\secpar), 1)$ and

$$
\hash'(k, x) := \hash(k, x) \,\|\, 0^{m' - m} \quad \text{for } x \in \bits^{2m'},
$$

with the key generation of $\hash$. Then $\hash' : \calK \times \bits^{2m'} \to \bits^{m'}$ is [[hash-function#length-halving-second-preimage-resistance|length-halving second-preimage resistant]]. Collision resistance implies second-preimage resistance for a family on any domain $\calM \supseteq \bits^\ell$ whose second-preimage game draws the challenge from $\bits^\ell$ and accepts a partner anywhere in $\calM$ — [[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]] (Definition 2, Proposition 6(1), Coll → Sec), here with $\calM = \bits^*$ and $\ell = 2m'$. For every second-preimage finder $\calA$ against $\hash'$ there is a collision finder $\calB$ against $\hash$, running in the time of $\calA$ plus one evaluation of $\hash(k, \cdot)$ and one uniform sample from $\bits^{2m'}$, with

$$
\Adv^{\mathrm{cr}}_{\hash,\calB}(\secpar) \ge \Adv^{\mathrm{spr}}_{\hash',\calA}(\secpar)
$$

— standard.

## Sketch

On key $k$, $\calB$ computes $m = |\hash(k, \varepsilon)|$, samples $x \getsr \bits^{2m'}$, runs $\hat{x} \gets \calA(1^\secpar, k, x)$ and outputs $(x, \hat{x})$. When $\calA$ wins, $\hat{x} \ne x$ and $\hash'(k, \hat{x}) = \hash'(k, x)$, so $\hash(k, \hat{x}) = \hash(k, x)$, since $\hash'$ appends the same $0^{m' - m}$ to both values.

## Notes

- Collision resistance forces $m(\secpar) \ge 1$ for all sufficiently large $\secpar$, since for $m(\secpar) = 0$ the inputs $0$ and $1$ collide, and for every $\secpar$ with $m(\secpar) \ge 1$, $\hash'$ is the restriction of $\hash$ to $\bits^{2m}$ — standard.
- A CRHF on one input length yields an arbitrary-length CRHF by Merkle–Damgård iteration ([[crhf-to-arbitrary-length-crhf|CRHF ⇒ Arbitrary-length CRHF (Merkle–Damgård)]]) — [[Rog06 - Formalizing Human Ignorance|Rog06]]. On a CRHF of one input length the same reduction gives [[crhf-to-second-preimage-resistance-rs04|CRHF ⇒ Second-preimage resistance]] — [[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]].
