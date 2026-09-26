---
type: reduction
status: stub
title: "Hash-based signatures + Hash-based signatures ⇒ DS"
aliases: []
id: red-hash-based-signatures-and-hash-based-signatures-to-ds
kind: implication
hypotheses: [few-time-signature, xmss]
conclusion: ds
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Hash-based signatures + Hash-based signatures ⇒ DS

[[digital-signature#hash-based-signatures|Hash-based signatures]] together with [[digital-signature#hash-based-signatures|Hash-based signatures]] implies [[digital-signature|DS]].

## Statement

Migrated verbatim from [[digital-signature]] § Hash-based signatures:

> - **SPHINCS+**: stateless hash-based signatures; uses a hyper-tree of XMSS instances and a few-time signature at the leaves; standardized by NIST as SLH-DSA (FIPS 205); signatures are $\sim 8$–50 KB

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No wiki citation (FIPS 205 named in prose only; the SPHINCS+ paper has no reference page).
- few-time-signature has no wiki page.
- The concrete size claim (~8-50 KB) is an uncited quantitative claim, which CLAUDE.md forbids, and the edge cannot carry it anyway.
- Hypotheses 'xmss' and 'few-time-signature' are concrete schemes/variants with no pages — the relation is between named artifacts, not model objects.
- Concrete size claim ($\sim 8$–50 KB) uncited, which CLAUDE.md forbids.
- Sourcing pass (2026-09), **not fixed**: claim judged incorrect as stated — degenerate hyperedge: the title names the conclusion's own subclass twice, the hypotheses `few-time-signature` and `xmss` are scheme artifacts without pages, and the migrated text describes the SPHINCS+ architecture (a hypertree of XMSS instances with a few-time signature at the leaves), not a reduction between wiki objects. Stateless many-time signatures from hash functions (SPHINCS, Eurocrypt 2015; SPHINCS+, CCS 2019) belong on a hash-function ⇒ DS edge. See [[hash-function-to-hash-based-signatures]] and [[hash-based-signatures-to-ds-mer89]].
