---
type: reduction
status: stub
title: "Subclasses ⇒ Hash function"
aliases: []
id: red-subclasses-to-hash-function
kind: implication
hypotheses: [ppad-hardness]
conclusion: hash-function
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Subclasses ⇒ Hash function

[[total-function-np#subclasses|Subclasses]] implies [[hash-function|Hash function]].

## Statement

Migrated verbatim from [[total-function-np]] § Subclasses:

> - **PPAD** (Polynomial Parity Argument, Directed): contains Nash equilibrium computation. Hardness of PPAD is the basis for cryptographic constructions of collision-resistant hash functions from worst-case assumptions — TODO citation.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- SUSPECTED DIRECTION ERROR (reported, not corrected): the literature derives PPAD hardness FROM cryptographic assumptions (Bitansky-Paneth-Rosen; Choudhuri-Hubacek-Kamath-Pietrzak-Rosen-Rosen), not CRHFs from PPAD hardness. As recorded the reduction is inverted.
- Uncited ('TODO citation').
- The conclusion slug hash-function is the merged OWF/CRHF page, so 'collision-resistant hash function' cannot be a distinct node.
- 'from worst-case assumptions' is an unsupported extra qualifier; ppad-hardness is an invented predicate node.
- SUSPECTED DIRECTION ERROR (high-value): the known literature goes the other way — collision-resistant hashing / iO / LWE-style assumptions are used to prove HARDNESS of PPAD (Bitansky-Paneth-Rosen; Choudhuri-Hubáček-Kamath-Pietrzak-Rosen-Rosen), not 'PPAD hardness is the basis for constructing CRHFs'. As written the reduction is inverted. Reported, not corrected.
- MISSING CITATION: 'TODO citation'.
- Composite: Nash ∈ PPAD (in fact PPAD-complete, which the bullet understates as 'contains') plus the crypto claim.
- 'from worst-case assumptions' is an extra qualifier with no support.
- Conclusion recorded as 'hash-function' since that is the wiki page for collision resistance, but the bullet does not link it.
