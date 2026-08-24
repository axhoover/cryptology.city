---
type: reduction
status: stub
title: "Search LWE ⇒ Decision LWE"
aliases: []
id: red-search-lwe-to-decision-lwe
kind: implication
hypotheses: [search-lwe]
conclusion: decision-lwe
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Search LWE ⇒ Decision LWE

[[learning-with-errors#search-lwe|Search LWE]] implies [[learning-with-errors#decision-lwe|Decision LWE]].

## Statement

Migrated verbatim from [[learning-with-errors]] § Search–Decision equivalence:

> The search and decision variants of LWE are equivalent — breaking one suffices to break the other.

Migrated verbatim from [[learning-with-errors]] § Search–Decision equivalence:

> **Search $\Rightarrow$ Decision** (easy direction): A search solver $\calA_s$ gives a decision adversary for free. Given a challenge $(\mathbf{A}, \mathbf{u})$, run $\hat{\mathbf{s}} \gets \calA_s(\mathbf{A}, \mathbf{u})$ and check whether $\mathbf{u} - \mathbf{A}\hat{\mathbf{s}}$ is small (i.e., looks like a sample from $\chi^m$). If so, guess $b=0$ (LWE world); otherwise guess $b=1$ (uniform world).

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation on the equivalence headline (Reg05 is the source but is cited only two sections later).
- search-lwe and decision-lwe are sub-objects of this page, not standalone slugs; the data model needs them as distinct nodes for this edge to exist.
- No citation.
- The distinguisher needs the error distribution to be efficiently recognizable ("looks like a sample from chi^m"); that condition on chi is not stated.
