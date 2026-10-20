---
type: reduction
status: draft
title: EXP ⊆ NEXP
aliases: []
id: red-exp-to-nexp
kind: inclusion
hypotheses: [exp]
conclusion: nexp
class: free
model: standard
source: folklore
security-loss: ""
---

# EXP ⊆ NEXP

## Statement

A deterministic exponential-time machine is a nondeterministic one that ignores its choices, so [[exponential-time|EXP]] $\subseteq$ [[nondeterministic-exponential-time|NEXP]] — folklore. Whether the inclusion is strict is open; $\classEXP = \mathbf{NEXP}$ would follow from $\classP = \classNP$ by padding — folklore.
