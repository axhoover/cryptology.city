---
type: reduction
status: stub
title: "LWE ⇒ Lattice-based signatures"
aliases: []
id: red-lwe-to-lattice-based-signatures
kind: implication
hypotheses: [lwe]
conclusion: hash-and-sign-signature
class: unstated
model: rom
source: folklore
security-loss: ""
---

# LWE ⇒ Lattice-based signatures

[[learning-with-errors|LWE]] implies [[digital-signature#lattice-based-signatures|Lattice-based signatures]].

## Statement

Migrated verbatim from [[non-interactive-zero-knowledge]] § Other results:

> - NIZK from [[learning-with-errors|LWE]] via hash-and-sign signatures and SIS-based commitments — standard

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'hash-and-sign-signature' has no wiki page.
- GPV hash-and-sign is proved in the ROM (digital-signature.md:173 says 'security in the ROM from SIS'), so the standard-model framing implied by this bullet is wrong; model:'rom' is inferred, not stated.
- Uncited: the bullet is labelled '— standard'.
- Labelled '- standard' but NIZK for NP from LWE is a specific attributable result (Peikert-Shiehian 2019); the folklore exception is misused and no reference page exists.
- SUSPECT MATH: 'via hash-and-sign signatures and SIS-based commitments' does not describe any known route to NIZK from LWE. Peikert-Shiehian goes through correlation-intractable hash functions built from FHE/LWE applied to the Fiat-Shamir transform. This intermediate chain looks wrong. Report only; do not fix.
- Composite as written (two intermediate objects), so it is split, but the split reflects the page's own dubious chain.
