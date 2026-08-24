---
type: reduction
status: draft
title: "PRG ⇒ COM"
aliases: []
id: red-prg-to-com-naor91
kind: implication
hypotheses: [prg]
conclusion: com
class: unstated
model: standard
source:
  - "[[Naor91 - Bit commitment using pseudorandomness|Naor91]]"
security-loss: ""
---

# PRG ⇒ COM

[[pseudorandom-generator|PRG]] implies [[commitment-scheme|COM]].

## Statement

Migrated verbatim from [[commitment-scheme]] § Other results:

> - COM from [[pseudorandom-generator|PRG]] (and hence from [[hash-function|OWF]]): Naor's construction uses a PRG to commit to a single bit in a statistically binding, computationally hiding scheme — [[Naor91 - Bit commitment using pseudorandomness|Naor91]]

## Notes

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Naor's commitment is INTERACTIVE (the receiver first sends a random string), but the bullet presents it as matching the page's non-interactive (Gen, Com, Open) syntax.
- 'statistically binding, computationally hiding' is a security flavour with no node — the conclusion collapses to plain commitment-scheme.
- The scheme commits to a single bit; the length extension is not stated.
- COMPOSITE: the parenthetical '(and hence from OWF)' silently chains OWF => PRG, whose citation (HILL99) is not on this bullet.
- `[[hash-function|OWF]]` resolves to the merged hash-function page, which conflates OWF and CRHF as one node — a recurring modeling problem across this chunk.
- Naor's commitment is interactive (the receiver sends a random string first); the bullet presents it as a plain non-interactive scheme matching the page's $(\Gen, \Com, \Open)$ syntax.
