---
type: reduction
status: draft
title: "Ring LWE ⇒ NTRU"
aliases: []
id: red-ring-lwe-to-ntru-ss11
kind: implication
hypotheses: [ring-lwe]
conclusion: ntru
class: unstated
model: standard
source:
  - "[[SS11 - Making NTRU as secure as worst-case problems over ideal lattices|SS11]]"
security-loss: ""
---

# Ring LWE ⇒ NTRU

[[learning-with-errors#ring-lwe|Ring LWE]] implies [[ntru|NTRU]].

## Statement

Migrated verbatim from [[ntru]] § Related results:

> - Under a suitable choice of parameters, the NTRU problem reduces to the [[learning-with-errors#Ring LWE|Ring-LWE]] problem: Ring-LWE hardness implies NTRU hardness — [[SS11 - Making NTRU as secure as worst-case problems over ideal lattices|SS11]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- SUSPECTED DIRECTION ERROR (report only): the bullet says "the NTRU problem reduces to the Ring-LWE problem", which under the standard convention means NTRU <= Ring-LWE (a Ring-LWE solver breaks NTRU) and therefore NTRU hardness implies Ring-LWE hardness. That is the OPPOSITE of the gloss that immediately follows it ("Ring-LWE hardness implies NTRU hardness"). One of the two halves of this bullet is wrong; SS11 supports the gloss, so the "reduces to" phrasing is the error.
- SS11 proves security for a MODIFIED NTRU key generation (f, g drawn from a wide discrete Gaussian), not the sparse ternary key generation defined in the ## Assumption section of this same page. "Under a suitable choice of parameters" understates that gap.
- Section heading is "## Related results"; the assumption-page schema in CLAUDE.md prescribes "## Known Results".
- Wikilink target `[[learning-with-errors#Ring LWE|Ring-LWE]]` is a section, not a page.
