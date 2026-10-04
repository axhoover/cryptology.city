---
type: reduction
status: draft
title: "FAC ⊆ TFNP"
aliases: []
id: red-fac-to-tfnp
kind: inclusion
hypotheses: [fac]
conclusion: tfnp
class: free
model: standard
source: folklore
security-loss: ""
---

# FAC ⊆ TFNP

## Statement

The search problem underlying [[factoring|FAC]] — given an integer $N \ge 2$, output its prime factorization — is in [[total-function-np|TFNP]] — folklore.

## Sketch

Totality is the fundamental theorem of arithmetic; the verifier checks $\prod_i p_i^{e_i} = N$ and tests each $p_i$ for primality in polynomial time.

## Notes

- Factoring reduces in randomized polynomial time to a problem in PPA and to WeakPigeon in PPP; under the generalized Riemann hypothesis both reductions are deterministic — [[Jer16 - Integer factoring and modular square roots|Jer16]].
