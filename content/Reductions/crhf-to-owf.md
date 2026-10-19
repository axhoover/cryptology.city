---
type: reduction
status: draft
title: CRHF ⇒ OWF
aliases: []
id: red-crhf-to-owf
kind: implication
hypotheses: [crhf]
conclusion: owf
class: fully-black-box
model: standard
source: folklore
security-loss: "additive 2^{-(n-m)}: an inverter with success ε gives a collision finder with success at least ε − 2^{-(n-m)}"
rationale:
  class: "The one-way function is the hash family itself, used only as an oracle, and the collision finder runs any inverter once as an oracle on the hash of a uniform input."
---

# CRHF ⇒ OWF

## Statement

Let $\hash : \calK \times \bits^n \to \bits^m$ be a [[hash-function#collision-resistance|collision-resistant]] family with $m < n$. Then $(k, x) \mapsto (k, \hash(k, x))$ is a [[hash-function#preimage-resistance-one-wayness|one-way function]]: an inverter succeeding with probability $\varepsilon$ yields a collision finder succeeding with probability at least $\varepsilon - 2^{m-n}$ — folklore.

## Sketch

The collision finder samples $x \getsr \bits^n$, runs the inverter on $(k, \hash(k, x))$, and outputs $(x, \hat{x})$. The inverter's view depends on $x$ only through $\hash(k, x)$, so given a successful answer, $\hat{x} = x$ with probability $1/|\hash_k^{-1}(\hash(k, x))|$, whose expectation over $x$ is at most $|\{\hash(k, x)\}| / 2^n \le 2^{m-n}$.

## Notes

- Without compression the implication fails: the identity is collision resistant and not one-way. For concrete bounds and the full set of implications among preimage, second-preimage and collision resistance, see [[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]].
- The converse has no relativizing proof: [[no-owp-to-crhf-sim98|No relativizing reduction from OWP to CRHF]] — [[Sim98 - Finding Collisions on a One-Way Street Can Secure Hash Functions Be Based on General Assumptions|Sim98]].
