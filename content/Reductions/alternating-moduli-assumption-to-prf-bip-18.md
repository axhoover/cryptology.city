---
type: reduction
status: draft
title: "Alternating moduli assumption ⇒ PRF"
aliases: []
id: red-alternating-moduli-assumption-to-prf-bip-18
kind: implication
hypotheses: [alternating-moduli-assumption]
conclusion: prf
class: unstated
model: standard
source:
  - "[[BIP+18 - Exploring Crypto Dark Matter New Simple PRF Candidates and Their Applications|BIP+18]]"
security-loss: ""
---

# Alternating moduli assumption ⇒ PRF

[[alternating-moduli|Alternating moduli assumption]] implies [[pseudorandom-function|PRF]].

## Statement

Migrated verbatim from [[alternating-moduli]] § Alternating Moduli:

> The _alternating moduli assumption_ (also called _Crypto Dark Matter_[^1] after [[BIP+18 - Exploring Crypto Dark Matter New Simple PRF Candidates and Their Applications|BIP+18]]) posits that mixing linear operations over different moduli — specifically $\ZZ_2$ (XOR) and $\ZZ_3$ (mod-3 addition) — yields candidate [[pseudorandom-function|PRF]] constructions that are computationally indistinguishable from random, under assumptions not known to reduce to standard assumptions like [[learning-with-errors|LWE]] or [[learning-parity-with-noise|LPN]].

Migrated verbatim from [[alternating-moduli]] § Known Results:

> - Low-complexity PRF candidates (in $\mathrm{NC}^1$ / $\mathrm{TC}^0$) based on mixed-moduli assumptions — [[BIP+18 - Exploring Crypto Dark Matter New Simple PRF Candidates and Their Applications|BIP+18]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Candidate construction, not a proved reduction: the assumption IS that the construction is a PRF, so hypothesis and conclusion nearly coincide (definitional).
- The same sentence also asserts a non-relation to LWE and LPN, recorded separately.
- Candidate, not a reduction — no security proof from a separate assumption.
- Complexity-class qualifiers NC^1 / TC^0 cannot be carried by a plain conclusion identifier.
- Duplicates the intro claim at line 14.
