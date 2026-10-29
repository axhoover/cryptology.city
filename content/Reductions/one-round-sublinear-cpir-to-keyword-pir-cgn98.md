---
type: reduction
status: draft
title: "One-round sublinear cPIR ⇒ Keyword PIR"
aliases: []
id: red-one-round-sublinear-cpir-to-keyword-pir-cgn98
kind: implication
hypotheses: [one-round-sublinear-cpir]
conclusion: keyword-pir
class: fully-black-box
model: standard
source:
  - "[[CGN98 - Private Information Retrieval by Keywords|CGN98]]"
security-loss: "a factor $d$ for a search structure of depth $d$, from a hybrid over its $d$ levels with one PIR query per level"
rationale:
  class: "The transformation runs the PIR scheme only through its algorithms, once per level of the search structure, and the hybrid reduction runs any keyword-privacy distinguisher only as an oracle."
---

# One-round sublinear cPIR ⇒ Keyword PIR

## Statement

Any search structure for keywords combines with any single-server [[single-server-private-information-retrieval|PIR]] scheme into a [keyword PIR](single-server-private-information-retrieval#keyword-pir), without changing how the server maintains the structure: the client walks the structure, retrieving each node it visits with the PIR — [[CGN98 - Private Information Retrieval by Keywords|CGN98]]. With a balanced binary search tree over $n$ keywords of $\ell$ bits with $m$-bit values and a [[single-server-private-information-retrieval#one-round-sublinear-pir|one-round sublinear]] PIR, the walk has $d = \lceil \log_2(n+1) \rceil$ rounds and communication $p'(\secpar, \ell, m) \cdot n^{c'}$ for a polynomial $p'$ and a constant $c' < 1$ — standard.

## Sketch

Publish level $j$ of a balanced binary search tree on the keywords as a database of $2^j$ entries in heap order, each holding a keyword and its value, padded with dummy entries so that every walk visits all $d$ levels. Starting at the root, the client retrieves one entry per level with the PIR, answering one query on each bit-slice of the level, and descends by comparing $w$ with the retrieved keyword. A hybrid that switches the queried index one level at a time turns any keyword-privacy distinguisher into a PIR query-privacy distinguisher, since the reduction knows the database and both keywords and so can compute every other level's index — standard.

## Notes

- Efficiency: level $j$ costs one PIR query and $\ell + m$ answers on a $2^j$-entry database, so with $|q| + |a| \le p(\secpar) \cdot n^c$ the total communication is $O((\ell + m) \cdot p(\secpar) \cdot n^c \log n)$, and the server's work is linear in each level — standard.
- With two servers, one-way functions give keyword PIR whose queries have length polynomial in the keyword size, whose answers are single bits, and which never errs — [[GI14 - Distributed Point Functions and Their Applications|GI14]].
