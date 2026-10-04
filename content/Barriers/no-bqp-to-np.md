---
type: barrier
status: draft
title: "No relativizing reduction from BQP to NP"
aliases: []
id: bar-bqp-to-np
hypotheses: [bqp]
conclusion: np
class: relativizing
consequences:
  - kind: contradiction
    target: ""
    class: relativizing
strength: unconditional
source:
  - "[[RT19 - Oracle Separation of BQP and PH|RT19]]"
rationale:
  class: "RT19 give an oracle relative to which BQP is not contained in NP, which rules out every relativizing proof of the inclusion and, by the partial order, every fully-black-box one."
---

# No relativizing reduction from BQP to NP

## Statement

No relativizing reduction from [[bounded-error-quantum-polynomial-time|BQP]] to [[nondeterministic-polynomial-time|NP]] exists: there is an oracle, built from a variant of the Forrelation problem, relative to which $\classBQP \not\subseteq \mathbf{PH}$, and hence $\classBQP \not\subseteq \classNP$ — [[RT19 - Oracle Separation of BQP and PH|RT19]].

## Notes

- Unrelativized, neither $\classBQP \subseteq \classNP$ nor $\classNP \subseteq \classBQP$ is known — standard.
