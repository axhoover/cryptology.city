---
type: reduction
status: stub
title: "Decision LWE ⇒ Search LWE"
aliases: []
id: red-decision-lwe-to-search-lwe
kind: implication
hypotheses: [decision-lwe]
conclusion: search-lwe
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Decision LWE ⇒ Search LWE

[[learning-with-errors#decision-lwe|Decision LWE]] implies [[learning-with-errors#search-lwe|Search LWE]].

## Statement

Migrated verbatim from [[learning-with-errors]] § Search–Decision equivalence:

> **Decision $\Rightarrow$ Search** (hard direction): Recover $\mathbf{s}$ one coordinate at a time. For each index $i \in [n]$ and each candidate $\ell \in \ZZ_q$, construct modified samples that effectively zero out the contribution of $\mathbf{s}[i]$ under the hypothesis $\mathbf{s}[i] = \ell$, then query the decision oracle to test whether the result is still an LWE instance or has become uniform. The candidate that keeps the distribution looking like LWE reveals the true $\mathbf{s}[i]$. Running over all $n \cdot q$ pairs uses $O(q \cdot n \cdot m)$ samples in total when decision can be broken with $m$ samples.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation (the coordinate-by-coordinate reduction is due to Reg05).
- The reduction as sketched enumerates all l in Z_q, so it requires q = poly(n); that restriction is never stated, and the assumption section allows arbitrary q.
- Concrete complexity claim O(q n m) samples carries no citation.
