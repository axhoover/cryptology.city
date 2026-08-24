---
type: reduction
status: draft
title: "AE + Hash function + PRF ⇒ Symmetric CP-ABE"
aliases: []
id: red-ae-and-hash-function-and-prf-to-symmetric-cp-abe-ls26
kind: implication
hypotheses: [authenticated-encryption, hash-function, prf]
conclusion: symmetric-cp-abe
class: unstated
model: standard
source:
  - "[[LS26 - Symmetric Attribute-Based Encryption from Minimal Hardness Assumptions|LS26]]"
security-loss: ""
---

# AE + Hash function + PRF ⇒ Symmetric CP-ABE

[[authenticated-encryption|AE]] together with [[hash-function|Hash function]] together with [[pseudorandom-function|PRF]] implies [[attribute-based-encryption#symmetric-cp-abe|Symmetric CP-ABE]].

## Statement

Migrated verbatim from [[LS26 - Symmetric Attribute-Based Encryption from Minimal Hardness Assumptions]]:

> [[LS26 - Symmetric Attribute-Based Encryption from Minimal Hardness Assumptions|LS26]] introduces a symmetric CP-ABE framework in which both encryptor and decryptor must hold attributes satisfying the ciphertext policy, and gives a concrete construction from collision-resistant hash functions, a [[pseudorandom-function|PRF]], and an IND-CCA2 authenticated encryption scheme, with no bilinear map or lattice hardness assumption.

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- SECOND THREE-WAY CONJUNCTION in the references chunk: {CRHF, PRF, IND-CCA2 authenticated encryption} => symmetric CP-ABE. The task brief calls BIPW17's the corpus's only 3-way conjunction; this one is equally 3-way, and there is a third on Gol00 (2-way) — the premise does not hold.
- INVENTORY DISAGREEMENT: the existing record Primitives/attribute-based-encryption.md:178 carries only [hash-function + pseudorandom-function => symmetric-cp-abe] — TWO hypotheses. This page states THREE. The inventory's conjunction is incomplete; the IND-CCA2 authenticated-encryption hypothesis is missing there.
- STRUCTURAL, worst on the corpus: the page has NO H1, NO byline line, and NO ## Abstract — only frontmatter and one paragraph. It is the sole reference page failing all three skeleton checks.
- SELF-LINK: the paragraph opens with `[[LS26 - Symmetric Attribute-Based Encryption from Minimal Hardness Assumptions|LS26]]`, a wikilink from the page to itself.
- NO WIKI PAGE for authenticated-encryption; the node does not exist in the inventory either. symmetric-cp-abe likewise has no page (it is a section of attribute-based-encryption.md).
- The negative/minimality claim 'with no bilinear map or lattice hardness assumption' is asserted without any proof of necessity, so it is not recordable as a barrier; it stays here as a problem.
- status:stub with no TODO markers and no abstract — the page is content-bearing but marked stub.
