---
type: reduction
status: draft
title: "Circular security + Somewhat homomorphic encryption (SHE) ⇒ HE"
aliases: []
id: red-circular-security-and-somewhat-homomorphic-encryption-she-to-he-gen09
kind: implication
hypotheses: [circular-security, somewhat-homomorphic-encryption]
conclusion: he
class: unstated
model: standard
source:
  - "[[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]]"
security-loss: ""
---

# Circular security + Somewhat homomorphic encryption (SHE) ⇒ HE

[[circular-security|Circular security]] together with [[homomorphic-encryption#somewhat-homomorphic-encryption-she|Somewhat homomorphic encryption (SHE)]] implies [[homomorphic-encryption|HE]].

## Statement

Migrated verbatim from [[homomorphic-encryption]] § Other results:

> - First fully homomorphic encryption scheme from ideal lattices using bootstrapping — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- NODE COLLAPSE: fully-homomorphic-encryption is an ALIAS of content/Primitives/homomorphic-encryption.md, the same page the parent's hypothesis resolves to, so this edge is a self-loop.
- Bootstrapping also needs the base scheme to be BOOTSTRAPPABLE (able to evaluate its own augmented decryption circuit) — no node captures that.
- 'circular-security' has no page; it is described only in prose at line 66.
- Without the circular-security hypothesis the construction yields only LEVELED FHE, so dropping the conjunction would make the edge false.
- Composite: 'from ideal lattices using bootstrapping' chains a base SHE construction with the bootstrapping theorem; must be split.
- Duplicate of the intro claim (line 14) and of line 52.
- REPAIR PATCH: T10 (the critic numbers this T10; the task brief mislabels T10 as Complexity/merlin-arthur.md, which is the critic’s T6 and is dropped separately). Wiki L60 reads in full: "- First fully homomorphic encryption scheme from ideal lattices using bootstrapping — `[[Gen09]]`". The word circular-security appears nowhere on that line; it is stated in a DIFFERENT bullet at L66 ("Circular security: FHE schemes often need to encrypt their own secret key ... not implied by standard assumptions"). Removing it from splitInto[1] per the brief (record what the source states). NOTE the cost, recorded not fixed: bootstrapping to unbounded FHE really does need a circular-security assumption, so the repaired sub-edge understates the hypothesis; at migration the L66 bullet should be attached to this chain by a human rather than re-inferred by an extractor.
