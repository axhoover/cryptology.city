---
type: reduction
status: stub
title: "Hash function ⇒ Hash-based signatures"
aliases: []
id: red-hash-function-to-hash-based-signatures
kind: implication
hypotheses: [hash-function]
conclusion: xmss
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Hash function ⇒ Hash-based signatures

[[hash-function|Hash function]] implies [[digital-signature#hash-based-signatures|Hash-based signatures]].

## Statement

Migrated verbatim from [[digital-signature]] § Hash-based signatures:

> - **SPHINCS+**: stateless hash-based signatures; uses a hyper-tree of XMSS instances and a few-time signature at the leaves; standardized by NIST as SLH-DSA (FIPS 205); signatures are $\sim 8$–50 KB

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'xmss' is a named concrete scheme, not a model object, and has no wiki page — the edge relates artifacts, not primitives.
- Uncited (no SPHINCS+ or XMSS reference page).
- SPHINCS+ uses XMSS-like subtrees plus FORS few-time signatures; naming the sub-object 'xmss' is an approximation of the real construction.
- No wiki citation (FIPS 205 named in prose only; the SPHINCS+ paper has no reference page).
- Hypotheses 'xmss' and 'few-time-signature' are concrete schemes/variants with no pages — the relation is between named artifacts, not model objects.
- Concrete size claim ($\sim 8$–50 KB) uncited, which CLAUDE.md forbids.
