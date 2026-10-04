---
type: barrier
status: draft
title: "No fully-black-box reduction from NP to cPIR"
aliases: []
id: bar-np-to-cpir-lv15
hypotheses: [np]
conclusion: cpir
class: fully-black-box
consequences:
  - kind: complexity
    target: "conp-subset-am"
    class: fully-black-box
strength: unconditional
source:
  - "[[LV15 - On Basing Private Information Retrieval on NP-Hardness|LV15]]"
rationale:
  class: "LV15 rule out reductions that use the privacy adversary only as an oracle and are otherwise unrestricted; with NP as hypothesis there is no construction to restrict, and LV15 give no oracle separation."
---

# No fully-black-box reduction from NP to cPIR

## Statement

A probabilistic polynomial-time reduction from the [[nondeterministic-polynomial-time|NP]]-complete problem $\mathrm{SAT}$ to breaking the privacy of a single-server, single-round [[single-server-private-information-retrieval|PIR]] scheme, using the privacy adversary only as an oracle with polynomially many adaptively chosen queries, implies $\classNP \subseteq \classcoAM$, equivalently $\classcoNP \subseteq \classAM$ — [[LV15 - On Basing Private Information Retrieval on NP-Hardness|LV15]] — and hence a collapse of the [[polynomial-time-hierarchy|polynomial hierarchy]] to its second level — [[BHZ87 - Does co-NP Have Short Interactive Proofs|BHZ87]]. The result is tight in both the correctness and the privacy parameter of the scheme — [[LV15 - On Basing Private Information Retrieval on NP-Hardness|LV15]].

## Notes

- The proof breaks the privacy of every single-server, single-round PIR scheme efficiently given an $\classSZK$ oracle — [[LV15 - On Basing Private Information Retrieval on NP-Hardness|LV15]].
