---
type: reduction
status: draft
title: "Strong alternating moduli (chosen-input) assumption ⇒ Weak alternating moduli (random-input) assumption"
aliases: []
id: red-strong-alternating-moduli-chosen-input-assumption-to-weak-alternating-moduli-random-input-assumption
kind: implication
hypotheses: [alternating-moduli-strong]
conclusion: alternating-moduli-weak
class: fully-black-box
model: standard
source: folklore
security-loss: "additive $q^2/2^{n+1}$ for $q$ oracle queries (collisions among sampled inputs)"
---

# Strong alternating moduli (chosen-input) assumption ⇒ Weak alternating moduli (random-input) assumption

[[alternating-moduli#strong-alternating-moduli-chosen-input-assumption|Strong alternating moduli (chosen-input) assumption]] implies [[alternating-moduli#weak-alternating-moduli-random-input-assumption|Weak alternating moduli (random-input) assumption]].

## Statement

Hardness of the [[alternating-moduli#strong-alternating-moduli-chosen-input-assumption|strong (chosen-input) alternating moduli assumption]] implies hardness of the [[alternating-moduli#weak-alternating-moduli-random-input-assumption|weak (random-input) variant]]: a weak-AM distinguisher sees only pairs $(x, y)$ for uniform $x$, which a reduction simulates by sampling $x \getsr \bits^n$ itself and querying the chosen-input oracle, exactly up to collisions among the sampled inputs — folklore.

## Sketch

The simulation is exact unless a sampled $x$ repeats: the strong game's ideal world answers a repeated $x$ with the same $R(x)$, the weak game's ideal world with a fresh $y$. Over $q$ queries this costs an additive $q^2/2^{n+1}$, negligible for $n = \omega(\log \secpar)$.

## Notes

`class: fully-black-box`: Identity construction (the same family witnesses both games) and a fixed reduction that runs the weak-AM distinguisher as an oracle: each of its input-less queries is answered by sampling $x \getsr \bits^n$, querying the chosen-input oracle on $x$, and returning $(x, \calO_b(x))$. This is the standard strong-PRF-to-weak-PRF specialization.
