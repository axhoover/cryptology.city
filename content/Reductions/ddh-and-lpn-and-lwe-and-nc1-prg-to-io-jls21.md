---
type: reduction
status: draft
title: "DDH + LPN + LWE + NC1-PRG ⇒ iO"
aliases: []
id: red-ddh-and-lpn-and-lwe-and-nc1-prg-to-io-jls21
kind: implication
hypotheses: [ddh, lpn, lwe, prg-in-nc1]
conclusion: io
class: unstated
model: standard
source:
  - "[[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]]"
security-loss: ""
---

# DDH + LPN + LWE + NC1-PRG ⇒ iO

[[decisional-diffie-hellman|DDH]] together with [[learning-parity-with-noise|LPN]] together with [[learning-with-errors|LWE]] together with [[pseudorandom-generator-in-nc1|NC1-PRG]] implies [[indistinguishability-obfuscation|iO]].

## Statement

Migrated verbatim from [[indistinguishability-obfuscation]] § Other results:

> - First iO from well-founded assumptions: sub-exponential [[learning-with-errors|LWE]], [[learning-parity-with-noise|LPN]], pseudorandom generators in $\mathrm{NC}^1$, and [[decisional-diffie-hellman|DDH]] — [[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Genuinely conjunctive - four hypotheses together.
- SUSPECT: JLS21's assumption set is sub-exponential LWE, LPN over large fields, PRGs of constant locality (NC0, not NC1), and sub-exponential SXDH on pairing-friendly groups (not plain DDH). Both 'NC^1' and 'DDH' look wrong. Report only; do not fix.
- 'sub-exponential' qualifies LWE in the text but it applies to the whole assumption set; ambiguous as written.
- 'pseudorandom generators in NC^1' has no wiki object identifier.
