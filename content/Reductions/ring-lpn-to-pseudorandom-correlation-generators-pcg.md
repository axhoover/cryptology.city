---
type: reduction
status: stub
title: "Ring-LPN ⇒ Pseudorandom correlation generators (PCG)"
aliases: []
id: red-ring-lpn-to-pseudorandom-correlation-generators-pcg
kind: implication
hypotheses: [ring-lpn]
conclusion: pseudorandom-correlation-generator
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Ring-LPN ⇒ Pseudorandom correlation generators (PCG)

[[learning-parity-with-noise#ring-lpn|Ring-LPN]] implies [[alternating-moduli#pseudorandom-correlation-generators-pcg|Pseudorandom correlation generators (PCG)]].

## Statement

Migrated verbatim from [[learning-parity-with-noise]] § Ring-LPN:

> Ring-LPN underlies practical authentication protocols (e.g., Lapin) and efficient pseudorandom correlation generator constructions.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- pseudorandom-correlation-generator has no wiki page; identifier invented.
- Uncited and not marked folklore.
- 'efficient ... constructions' is an efficiency claim, not an existence reduction.
- Two conclusions bundled (authentication protocols such as Lapin, and PCG constructions).
- No citation (Lapin / HKLPT12 missing).
- underlies is weaker than a reduction claim.
- Lapin is a two-message authentication protocol; message-authentication-code is only an approximate identifier and pseudorandom-correlation-generator has no page.
