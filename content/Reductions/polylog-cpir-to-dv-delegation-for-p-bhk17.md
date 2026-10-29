---
type: reduction
status: draft
title: PIR with polylogarithmic communication ⇒ Designated-verifier delegation for P
aliases: []
id: red-polylog-cpir-to-dv-delegation-for-p-bhk17
kind: implication
hypotheses: [polylog-cpir]
conclusion: dv-delegation-for-p
class: unstated
model: crs
source:
  - "[[BHK17 - Non-interactive delegation and batch NP verification from standard computational assumptions|BHK17]]"
security-loss: ""
rationale:
  model: "The verifier samples a reusable public key in a setup phase and keeps the secret verification key on which soundness rests."
---

# PIR with polylogarithmic communication ⇒ Designated-verifier delegation for P

## Statement

If a [[single-server-private-information-retrieval#pir-with-polylogarithmic-communication|computational PIR scheme with polylogarithmic communication]] exists, there is an adaptively sound non-interactive [[succinct-argument#designated-verifier-delegation-for-p|delegation scheme]] for all polynomial-time computations, RAM computations included, with verification in fixed polynomial time: the verifier sets up a public key once, any prover proves arbitrary statements with a single message, and verification uses a secret key, soundness relying on the prover not knowing it — [[BHK17 - Non-interactive delegation and batch NP verification from standard computational assumptions|BHK17]]. BHK17 base the scheme on any computational PIR scheme, which can in turn be based on standard polynomial-time assumptions such as the worst-case hardness of polynomial-factor approximation of short-vector lattice problems — [[BHK17 - Non-interactive delegation and batch NP verification from standard computational assumptions|BHK17]].

## Notes

- The public key is reusable across statements, and verification runs in a fixed polynomial time — [[BHK17 - Non-interactive delegation and batch NP verification from standard computational assumptions|BHK17]].
- In the same paper, a non-adaptive two-message protocol proves $m$ $\classNP$ instances with communication proportional to one witness — [[BHK17 - Non-interactive delegation and batch NP verification from standard computational assumptions|BHK17]].
- From sub-exponentially secure PIR, every language computable in time $t$ has 1-round delegation with prover time $\poly(t)$ and verifier time $n \cdot \polylog(t)$, by proving the PIR-based compiler of Aiello et al. sound for multi-prover interactive proofs sound against no-signaling provers; polynomial-time such proofs capture exactly $\classEXP$ — [[KRR14 - How to delegate computations the power of no-signaling proofs|KRR14]].
- Publicly verifiable delegation for P from LWE is [[polynomial-ratio-lwe-to-snarg-for-p-cjj21|LWE with polynomial ratio ⇒ SNARG for P]] — [[CJJ21 - SNARGs for P from LWE|CJJ21]].
