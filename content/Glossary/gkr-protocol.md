---
type: glossary
status: stub
aliases:
  - GKR
  - GKR protocol
title: GKR protocol
id: gkr-protocol
unlisted: true
---

# GKR protocol

A public-coin interactive proof for any language computable by a log-space-uniform Boolean circuit of depth $d$ on inputs of length $n$, with a prover running in time $\poly(n)$, a verifier running in time $(n + d) \cdot \polylog(n)$ and space $O(\log n)$, and $d \cdot \polylog(n)$ communication — [[GKR15 - Delegating Computation Interactive Proofs for Muggles|GKR15]].

For log-space-uniform $\mathrm{NC}$ the verifier runs in time $n \cdot \polylog(n)$ with $\polylog(n)$ communication, and all of $\classP$ has public-coin interactive proofs with log-space, polynomial-time verifiers — [[GKR15 - Delegating Computation Interactive Proofs for Muggles|GKR15]]. With the Kalai–Raz transformation from public-coin interactive proofs to 1-round arguments, log-space-uniform $\mathrm{NC}$ has designated-verifier non-interactive arguments in the public-key model with polylogarithmic communication and quasi-linear verification, sound if [[single-server-private-information-retrieval#pir-with-polylogarithmic-communication|PIR with polylogarithmic communication]] exists — [[GKR15 - Delegating Computation Interactive Proofs for Muggles|GKR15]], [[KR09 - Probabilistically Checkable Arguments|KR09]]. Every language decidable in polynomial time and bounded polynomial space has an interactive proof with a polynomial-time prover, an almost-linear-time verifier and a constant number of rounds — [[RRR16 - Constant-round interactive proofs for delegating computation|RRR16]].

TODO: syntax and security definition.

<!-- BEGIN GENERATED participates-in 2cbb9e33bbd3 -->

## Participates in

**Barriers**

- [[no-fiat-shamir-and-gkr-to-snark-krs25|No fixed-construction reduction from Fiat-Shamir + GKR to SNARK]]

<!-- END GENERATED participates-in -->
