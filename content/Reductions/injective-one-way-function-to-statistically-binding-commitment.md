---
type: reduction
status: draft
title: "Injective OWF ⇒ Statistically binding COM"
aliases: []
id: red-injective-one-way-function-to-statistically-binding-commitment
kind: implication
hypotheses: [injective-one-way-function]
conclusion: statistically-binding-commitment
class: fully-black-box
model: standard
source: folklore
security-loss: "polynomial: a hiding distinguisher with advantage $\\varepsilon$ gives an inverter with success probability polynomial in $\\varepsilon$ and $1/\\secpar$, through the Goldreich–Levin inverter"
rationale:
  class: "The committer calls f only as an oracle, binding holds for every injective f, and the hiding reduction runs any distinguisher as an oracle inside the Goldreich–Levin inverter."
---

# Injective OWF ⇒ Statistically binding COM

## Statement

For an [[injective-one-way-function|injective one-way function]] $f$, the non-interactive bit commitment $\Com(b; x, r) = (f(x), r, \langle x, r \rangle \oplus b)$ with $x, r \getsr \bits^\secpar$, opened by revealing $(x, r, b)$, is perfectly [[commitment-scheme#binding|binding]] and computationally [[commitment-scheme#hiding|hiding]] — folklore.

## Sketch

Binding: $f(x)$ determines $x$, so the commitment determines $b$. Hiding: $\langle x, r \rangle$ is a [[hardcore-predicate|hardcore predicate]] of $(x, r) \mapsto (f(x), r)$ — [[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]] — so it is pseudorandom given $(f(x), r)$.
