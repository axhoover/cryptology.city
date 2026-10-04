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

## Statement

When the group order is known and membership $h \in \langle g \rangle$ is checkable in polynomial time (for prime order $p$: $g \neq 1$ and $h^p = 1$), the [[discrete-logarithm|DLOG]] search problem of finding $x$ with $g^x = h$ given $(\GG, g, p, h)$ is in [[total-function-np|TFNP]] — folklore.

## Sketch

Every $h \in \langle g \rangle$ has a discrete logarithm $x \in \ZZ_p$, and a candidate $x$ is checked with one exponentiation; on an input that fails the membership test, the verifier accepts a fixed dummy solution.

## Notes

- Suitable formulations of discrete logarithm over general groups are complete for PPP and PWPP, the pigeonhole subclasses of TFNP, answering an open question of [[SZZ18 - PPP-Completeness with Connections to Cryptography|SZZ18]] — [[HV21 - On Search Complexity of Discrete Logarithm|HV21]].
