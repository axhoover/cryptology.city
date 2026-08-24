---
type: barrier
status: draft
title: "No free reduction from The Structured GGM to DLOG"
aliases: []
id: bar-the-structured-ggm-to-dlog-chw26
hypotheses: [structured-generic-group-model]
conclusion: dlog
class: free
consequences:
  - kind: contradiction
    target: ""
    class: free
strength: unconditional
source:
  - "[[CHW26 - The Structured Generic-Group Model|CHW26]]"
---

# No free reduction from The Structured GGM to DLOG

A reduction of class `free` from [[generic-group-model#the-structured-ggm|The Structured GGM]] to [[discrete-logarithm|DLOG]] would imply a contradiction.

## Statement

Migrated verbatim from [[generic-group-model]] § The Structured GGM:

> Corrigan-Gibbs, Henzinger, and Wu [[CHW26 - The Structured Generic-Group Model|CHW26]] extend Shoup's model to capture algorithms that exploit non-generic structure in a controlled way. In the **structured GGM**, the adversary may exploit special structure for at most a $\delta$ fraction of group elements while remaining fully generic on the rest. The main result is that any DLOG algorithm in a group of prime order $p$ that exploits structure on at most a $\delta$ fraction of elements requires time
>
> $$
> \Omega\!\left(\min\!\left(\sqrt{p},\; \frac{1}{\delta}\right)\right).
> $$

Migrated verbatim from [[generic-group-model]] § The Structured GGM:

> Corrigan-Gibbs, Henzinger, and Wu [[CHW26 - The Structured Generic-Group Model|CHW26]] extend Shoup's model to capture algorithms that exploit non-generic structure in a controlled way. In the **structured GGM**, the adversary may exploit special structure for at most a $\delta$ fraction of group elements while remaining fully generic on the rest. The main result is that any DLOG algorithm in a group of prime order $p$ that exploits structure on at most a $\delta$ fraction of elements requires time
>
> $$
> \Omega\!\left(\min\!\left(\sqrt{p},\; \frac{1}{\delta}\right)\right).
> $$
>
> This yields tight subexponential lower bounds applicable to index-calculus algorithms, bridging the gap between fully generic lower bounds and structured algorithm analyses.

## Notes

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Model is a variant (the structured GGM) that has no node of its own; recorded as model 'other'.
- DLOG is not wikilinked here although it is linked at line 23 of the same page.
- The bound $\Omega(\min(\sqrt p, 1/\delta))$ is stated as a time lower bound while the Shoup bound earlier on the page is a _query_ lower bound; the page switches units without comment.
- Well-stated with an explicit bound and an explicit hypothesis (the delta fraction). One of the best-formed lower-bound records on the wiki.
- Ends with 'bridging the gap between fully generic lower bounds and structured algorithm analyses' — a recap clause of the sort CLAUDE.md bans.
- The class 'structured GGM' is a fourth idealized model on the wiki (ROM, GGM, AGM, structured GGM, generic ring model) with no shared taxonomy page.
