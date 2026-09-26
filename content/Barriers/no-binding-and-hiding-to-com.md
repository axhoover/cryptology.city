---
type: barrier
status: draft
title: "No reduction from Binding + Hiding to COM"
aliases: []
id: bar-binding-and-hiding-to-com
hypotheses: [statistically-binding-commitment, statistically-hiding-commitment]
conclusion: com
class: free
consequences:
  - kind: contradiction
    target: ""
    class: free
strength: unconditional
source: folklore
---

# No reduction from Binding + Hiding to COM

A reduction of class `free` from [[commitment-scheme#binding|Binding]] together with [[commitment-scheme#hiding|Hiding]] to [[commitment-scheme|COM]] would imply a contradiction.

## Statement

No [[commitment-scheme|commitment scheme]] with at least two messages is both [[commitment-scheme#hiding|statistically hiding]] and [[commitment-scheme#binding|statistically binding]] — folklore. The argument is information-theoretic and applies to interactive commitments as well.

## Sketch

Statistical hiding makes the distributions of the commitment $c$ under $\Com(\pp, m_0; r)$ and $\Com(\pp, m_1; r)$ statistically close for $m_0 \neq m_1$, so all but a negligible fraction of commitments to $m_0$ are also commitments to $m_1$ under some randomness $r'$; an unbounded committer finds $r'$ by exhaustive search and opens the same $c$ to both messages, breaking statistical binding.

## Notes

`class: free`: The impossibility is information-theoretic and unconditional: no scheme has both properties, by any construction and under any assumption, so the class ruled out is `free`. The hyperedge's `conclusion: com` is vacuous; the content is the joint unsatisfiability of the two hypotheses.
