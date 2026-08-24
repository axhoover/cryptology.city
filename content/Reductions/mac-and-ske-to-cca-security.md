---
type: reduction
status: stub
title: "MAC + SKE ⇒ CCA Security"
aliases: []
id: red-mac-and-ske-to-cca-security
kind: implication
hypotheses: [mac, ske]
conclusion: cca-secure-symmetric-key-encryption
class: unstated
model: standard
source: folklore
security-loss: ""
---

# MAC + SKE ⇒ CCA Security

[[message-authentication-code|MAC]] together with [[symmetric-key-encryption|SKE]] implies [[symmetric-key-encryption#cca-security|CCA Security]].

## Statement

Migrated verbatim from [[symmetric-key-encryption]] § Other results:

> - CCA-secure SKE can be built from OWF: combine a CPA-secure SKE with a [[message-authentication-code|MAC]] using the encrypt-then-MAC paradigm

Migrated verbatim from [[symmetric-key-encryption]] § Other results:

> - CPA-secure SKE can be boosted to CCA-secure SKE using a [[message-authentication-code|MAC]]

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Class disagrees across pages: [object Object]

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- MISSING CITATION: encrypt-then-MAC is Bellare-Namprempre (BN00), with no reference page and no folklore label, which the page's own citation policy requires.
- The MAC must be strongly unforgeable for encrypt-then-MAC to give CCA security — a condition neither the bullet nor the node captures.
- 'cca-secure-symmetric-key-encryption' has no node, so the edge would collapse to SKE => SKE.
- MISSING CITATION entirely — encrypt-then-MAC is BN00 (Bellare-Namprempre); no citation and no folklore label, which the page's own citation policy requires.
- COMPOSITE and CONJUNCTIVE at once: OWF => CPA-SKE, OWF => MAC, then {CPA-SKE, MAC} => CCA-SKE.
- 'OWF' here has no wikilink at all (line 125 links it to hash-function; line 126 leaves it bare) — inconsistent within four lines.
- The conclusion is a security level of SKE, not a distinct object; the graph needs security-level-qualified nodes or this edge becomes SKE => SKE.
- REPAIR PATCH: Arity sweep. Wiki L126: "CCA-secure SKE can be built from OWF: combine a CPA-secure SKE with a `[[message-authentication-code|MAC]]` using the encrypt-then-MAC paradigm". The critic cites this record as a calibration example of CORRECT modelling and it is — except for the flag: the top-level edge has ONE hypothesis (OWF) and the genuine conjunction {SKE, MAC} lives in splitInto[2], where it belongs. Repair: conjunctive:false at top level. Sub-edges need their own conjunctive flag (schema defect 6.1) or this conjunction is lost on split.
- DUPLICATE: this is the third link of the line-126 bullet restated as its own bullet; the page asserts the same reduction twice in consecutive lines.
- MISSING CITATION (BN00).
- Genuinely conjunctive {CPA-SKE, MAC} => CCA-SKE, and the strongest single example on this page of why conjunction must be representable.
