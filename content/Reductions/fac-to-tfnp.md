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

[[factoring|FAC]] is contained in [[total-function-np|TFNP]].

## Statement

The search problem underlying [[factoring|FAC]] — given an integer $N \ge 2$, output its prime factorization — is in [[total-function-np|TFNP]]: every such $N$ has a prime factorization, and a candidate factorization is verified in polynomial time by multiplying the factors and testing each for primality — folklore.

## Sketch

Totality is the fundamental theorem of arithmetic; the verifier checks $\prod_i p_i^{e_i} = N$ and that each $p_i$ is prime.

## Notes

`class: free`: a proven inclusion holds by any argument; repo convention, as in [[bpp-to-pspace]].

- Factoring reduces in randomized polynomial time to a problem in PPA and to WeakPigeon in PPP; under the generalized Riemann hypothesis both reductions are deterministic — [[Jer16 - Integer factoring and modular square roots|Jer16]]
