---
type: reduction
status: draft
title: "DLOG ⊆ TFNP"
aliases: []
id: red-dlog-to-tfnp
kind: inclusion
hypotheses: [dlog]
conclusion: tfnp
class: free
model: standard
source: folklore
security-loss: ""
---

# DLOG ⊆ TFNP

[[discrete-logarithm|DLOG]], with the group order known and subgroup membership checkable, is contained in [[total-function-np|TFNP]].

## Statement

When the group order is known and membership $h \in \langle g \rangle$ is checkable in polynomial time (for prime order $p$: $g \neq 1$ and $h^p = 1$), the [[discrete-logarithm|DLOG]] search problem is total — every such $h$ has a discrete logarithm — and a solution $x$ is checked with one exponentiation, so DLOG lies in [[total-function-np|TFNP]] — folklore.

## Notes

`class: free`: A containment of a search problem in a complexity class is proved by any argument, so the reduction-class axis does not discriminate (repo convention for inclusions).

- Suitable formulations of discrete logarithm over general groups are complete for PPP and PWPP, the pigeonhole subclasses of TFNP, answering an open question of [[SZZ18 - PPP-Completeness with Connections to Cryptography|SZZ18]] — [[HV21 - On Search Complexity of Discrete Logarithm|HV21]]
