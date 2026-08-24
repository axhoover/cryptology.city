---
type: barrier
status: stub
title: "No reduction from Search noisy $k$-LIN to Noisy k-LIN"
aliases: []
id: bar-search-noisy-k-lin-to-noisy-k-lin
hypotheses: [search-noisy-k-lin]
conclusion: noisy-k-lin
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source: folklore
---

# No reduction from Search noisy $k$-LIN to Noisy k-LIN

A reduction of class `unstated` from [[noisy-k-lin-over-expanders#search-noisy-k-lin|Search noisy $k$-LIN]] to [[noisy-k-lin-over-expanders|Noisy k-LIN]] would imply a contradiction.

## Statement

Migrated verbatim from [[noisy-k-lin-over-expanders]] § Search noisy $k$-LIN:

> The search variant asks to recover $\mathbf{s}$ from $(\mathbf{M}, \mathbf{Ms}+\mathbf{e})$. The search-to-decision reduction for standard LPN does not immediately transfer to the expanding-matrix setting. GHJS25 Theorem 8.8 uses a search variant as an alternative assumption sufficient for PKE under the joint conjecture with planted clique.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- "The search-to-decision reduction for standard LPN does not immediately transfer to the expanding-matrix setting" is an ABSENCE of a result, not a barrier: nothing is proved impossible. It cannot be typed in the (exists reduction of class C) => Q form.
- No citation.
