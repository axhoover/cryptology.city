---
type: barrier
status: draft
title: "No fixed-construction reduction from MAC to SUF-CMA MAC"
aliases: []
id: bar-mac-to-suf-cma-mac
hypotheses: [mac]
conclusion: suf-cma-mac
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: conditional
conditional-on: [mac]
source: folklore
rationale:
  strength: "The counterexample modifies a given UF-CMA-secure MAC, so it assumes one exists; without one, the identity-map implication holds vacuously."
  class: "The construction is the identity map, so the counterexample refutes only the claim that every UF-CMA-secure MAC is itself SUF-CMA-secure; building some other SUF-CMA-secure MAC from a UF-CMA-secure one is not ruled out."
---

# No fixed-construction reduction from MAC to SUF-CMA MAC

## Statement

If a [[message-authentication-code|MAC]] exists, the identity map is not a reduction from [[message-authentication-code#unforgeability|UF-CMA security]] to [[message-authentication-code#strong-unforgeability|SUF-CMA security]]. Let $\MAC = (\KeyGen, \Tag, \Vrfy)$ be a $(1-\varepsilon)$-correct UF-CMA-secure MAC with message space $\calM$ and tag space $\calT$, and let $\MAC'$ have the same key generation and message space, tag space $\calT \times \bits$, $\Tag'(k, m) := (\Tag(k, m), 0)$ and $\Vrfy'(k, m, (t, \beta)) := \Vrfy(k, m, t)$, so that verification ignores the appended bit. Then $\MAC'$ is $(1-\varepsilon)$-correct and UF-CMA-secure with the same advantage, while the forger that queries a message $m \in \calM_\secpar$ computed from $1^\secpar$, receives $(t, 0)$ and outputs $(m, (t, 1))$ wins the SUF-CMA game against $\MAC'$ with probability at least $1 - \varepsilon$ — folklore.

## Sketch

A UF-CMA forger against $\MAC'$ is one against $\MAC$ after appending $0$ to each oracle answer and dropping the appended bit of its output, which keeps the forged message unqueried and the tag valid. The pair $(m, (t, 1))$ is not the oracle's answer $(m, (t, 0))$, and it verifies iff $\Vrfy(k, m, t) = 1$, which correctness gives with probability at least $1 - \varepsilon$.

## Notes

- The converse holds with no loss ([[suf-cma-mac-to-mac|SUF-CMA MAC ⇒ MAC]]) — folklore.
- A UF-CMA-secure MAC with deterministic $\Tag$ and canonical verification $\Vrfy(k, m, t) := [t = \Tag(k, m)]$ is SUF-CMA-secure ([[message-authentication-code#deterministic-macs|Deterministic MACs]]) — standard. $\MAC'$ keeps $\Tag$ deterministic when $\Tag$ is, but its verification is not canonical.
