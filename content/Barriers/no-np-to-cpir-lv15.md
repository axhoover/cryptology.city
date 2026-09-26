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
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
source:
  - "[[LV15 - On Basing Private Information Retrieval on NP-Hardness|LV15]]"
---

# No fully-black-box reduction from NP to cPIR

A reduction of class `fully-black-box` from [[nondeterministic-polynomial-time|NP]] to [[single-server-private-information-retrieval|cPIR]] would imply a contradiction.

## Statement

A probabilistic polynomial-time reduction from $\mathrm{SAT}$ to breaking the privacy of a single-server, single-round [[single-server-private-information-retrieval|cPIR]] scheme that uses the adversary only as an oracle — with polynomially many, adaptively chosen queries — implies $\classNP \subseteq \classcoAM$, hence a collapse of the [[polynomial-time-hierarchy|polynomial hierarchy]] to its second level; the privacy of such a scheme therefore cannot be based on [[nondeterministic-polynomial-time|NP]]-hardness by such a reduction. The result is tight in both the correctness and the privacy parameter of the scheme — [[LV15 - On Basing Private Information Retrieval on NP-Hardness|LV15]].

## Sketch

The privacy of any single-round PIR scheme can be broken given an $\classSZK$ oracle; a reduction from $\mathrm{SAT}$ that uses such an adversary as a black box, even adaptively, places $\mathrm{SAT}$ in $\classcoAM$.

## Notes

`class: fully-black-box`: the reductions LV15 rule out use the privacy adversary only as an oracle and are otherwise unrestricted. That is the reduction half of RTV04's fully-black-box shape; with a complexity class as hypothesis there is no construction half to weaken. `relativizing` would overstate: LV15 give no oracle separation.
