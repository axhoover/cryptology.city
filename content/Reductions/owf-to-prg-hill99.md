---
type: reduction
status: draft
title: OWF ⇒ PRG
aliases: []
id: red-owf-to-prg-hill99
hypotheses: [owf]
conclusion: prg
class: unstated
model: standard
source:
  - "[[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]]"
  - "[[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]]"
security-loss: ""
---

# OWF ⇒ PRG

A [[hash-function#preimage-resistance-one-wayness|one-way function]] implies a
[[pseudorandom-generator|PRG]], via the Goldreich–Levin hard-core predicate.

## Construction

Migrated verbatim from [[pseudorandom-generator|PRG]] § Other results:

> [[hash-function|OWF]]s imply PRGs, via the Goldreich-Levin hard-core predicate — [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]], [[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]]

## Notes

The converse also holds — any PRG is a one-way function, since the seed is a
preimage of the output — so OWF $\Leftrightarrow$ PRG. The converse direction is
its own hyperedge and is not covered by this page.

`class` is `unstated`: neither citing page says which notion of reduction is
meant. The construction is standard and is very likely fully black-box, but
recording that here would add a claim the wiki does not make.

The hypothesis `owf` is the one-wayness notion defined at
[[hash-function#preimage-resistance-one-wayness]]. That definition is _keyed_
and implicitly compressing, whereas HILL99 is stated for unkeyed one-way
functions — see the note on [[hash-function|Hash functions]].
