---
type: reduction
status: stub
title: PRP ⇒ iPRF (large domains)
aliases: []
id: red-prp-to-invertible-prf
kind: implication
hypotheses: [prp]
conclusion: invertible-prf
class: unstated
model: standard
source: folklore
via:
  - "[[switching-lemma|Switching Lemma]]"
security-loss: "$O(q^2/|\\calD|)$ for $q$ queries, per the switching lemma"
---

# PRP ⇒ iPRF (large domains)

A [[pseudorandom-permutation|PRP]] over a large domain is an
[[pseudorandom-function#invertible-prfs|invertible PRF]].

## Statement

Migrated verbatim from [[pseudorandom-function|PRF]] § Related results:

> [[pseudorandom-permutation|PRP]]s over large domains are iPRFs — [[switching-lemma|Switching Lemma]]

The same claim is stated from the other end at
[[pseudorandom-permutation|PRP]] § Other results:

> PRPs imply the existence of large-domain [[pseudorandom-function|PRFs]] (and in fact these are invertible PRFs) — [[switching-lemma|Switching Lemma]]

## Notes

`source: folklore` with `via: switching-lemma`. Before this pass the switching
lemma sat in the _citation_ slot, which made an unattributed claim read as an
attributed one: [[switching-lemma|Switching Lemma]] is a wiki page with no
author, year, or venue, not a bibliographic record. It is the _technique_, so it
belongs in `via`; the statement itself has no citation and says so.

`status: stub`, for two reasons recorded and not fixed:

- _over large domains_ is a hypothesis qualifier carried in prose. The switching
  lemma is only meaningful for superpolynomial $|\calD|$; compare
  [[pseudorandom-permutation#small-domain-prps|small-domain PRPs]].
- The iPRF security game gives $\calA$ an **inversion** oracle, so the forward-
  only switching lemma does not by itself justify the claim — a strong PRP and a
  two-sided bound appear to be needed. This is already flagged against both
  pages in the fact-check queue.
