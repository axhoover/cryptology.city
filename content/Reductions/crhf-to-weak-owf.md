---
type: reduction
status: draft
title: CRHF ⇒ Weak OWF
aliases: []
id: red-crhf-to-weak-owf
kind: implication
hypotheses: [crhf]
conclusion: weak-owf
class: fully-black-box
model: standard
source: folklore
security-loss: "additive 2^{-(n-m)}: an inverter with success ε gives a collision finder with success at least ε − 2^{-(n-m)}"
rationale:
  class: "The weak one-way function is the hash family itself, used only as an oracle, and the collision finder runs any inverter once as an oracle on the hash of a uniform input."
---

# CRHF ⇒ Weak OWF

## Statement

Let $\hash : \calK \times \bits^n \to \bits^m$ with $m < n$ be a [[hash-function#collision-resistance|collision-resistant]] family. Then $f(k, x) := (k, \hash(k, x))$ is [[hash-function#weak-one-wayness|weakly one-way]]: an inverter succeeding with probability $\varepsilon$ yields a collision finder succeeding with probability at least $\varepsilon - 2^{m-n} \ge \varepsilon - 1/2$, so every efficient inverter succeeds with probability at most $1/2 + \negl(\secpar)$ — folklore. If $n - m = \omega(\log \secpar)$, the same bound makes $f$ [[hash-function#preimage-resistance-one-wayness|one-way]].

## Sketch

The collision finder samples $x \getsr \bits^n$, runs the inverter on $(k, \hash(k, x))$, and outputs $(x, \hat{x})$. The inverter's view depends on $x$ only through $\hash(k, x)$, so given a successful answer, $\hat{x} = x$ with probability $1/|\hash_k^{-1}(\hash(k, x))|$, whose expectation over $x$ is the number of images divided by $2^n$, at most $2^{m-n}$.

## Notes

- One bit of compression does not make $f$ one-way. For a collision-resistant $\hash'_k : \bits^n \to \bits^{n-2}$, let $\hash_k(00u) := 0u$ for $u \in \bits^{n-2}$ and $\hash_k(x) := 1 \| \hash'_k(x)$ otherwise. Then $\hash_k$ compresses by one bit, and every collision of $\hash_k$ is a collision of $\hash'_k$, because the first branch is injective and the two branches have disjoint ranges; yet $f$ is inverted on every input beginning with $00$, a quarter of them — standard.
- One-way functions follow from any collision-resistant family, by amplification: [[weak-owf-to-owf-yao82a|Weak OWF ⇒ OWF]] — [[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]]. Alternatively, Merkle–Damgård iteration gives a collision-resistant family with $n - m = \omega(\log \secpar)$ — [[Dam89 - A Design Principle for Hash Functions|Dam89]] — and then $f$ itself is one-way.
- Bounds relating preimage, second-preimage and collision resistance as functions of the compression are in [[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]].
- The converse has no relativizing proof: [[no-owp-to-crhf-sim98|No relativizing reduction from OWP to CRHF]] — [[Sim98 - Finding Collisions on a One-Way Street Can Secure Hash Functions Be Based on General Assumptions|Sim98]].
