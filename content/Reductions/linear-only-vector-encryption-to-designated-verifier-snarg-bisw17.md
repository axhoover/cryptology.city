---
type: reduction
status: draft
title: Linear-only vector encryption ⇒ Designated-verifier SNARG (lattice-based)
aliases: []
id: red-linear-only-vector-encryption-to-designated-verifier-snarg-bisw17
kind: implication
hypotheses: [linear-only-vector-encryption]
conclusion: designated-verifier-snarg
class: unstated
model: crs
source:
  - "[[BISW17 - Lattice-Based SNARGs and Their Application to More Efficient Obfuscation|BISW17]]"
security-loss: ""
rationale:
  model: "The verifier generates the reference string, encrypted linear-PCP queries, in a preprocessing phase and keeps the decryption key."
---

# Linear-only vector encryption ⇒ Designated-verifier SNARG (lattice-based)

## Statement

If [[linear-only-encryption#linear-only-vector-encryption|linear-only vector encryption]] exists — a generalization of [[BCIOP13 - Succinct Non-interactive Arguments via Linear Interactive Proofs|BCIOP13]]'s linear-only encryption in which the prover is constrained to evaluate a single linear function on all query vectors simultaneously, and which BISW17 conjecture variants of Regev encryption satisfy — compiling a linear PCP with it gives [[succinct-argument#designated-verifier-snargs|designated-verifier preprocessing SNARGs]] for $\classNP$, plausibly post-quantum, with argument size quasilinear in $\secpar$. Together with new statistically sound linear PCPs over small fields, a further extension of the method gives the first SNARG, from any assumption, that is quasi-optimal in both succinctness and prover overhead, the latter polylogarithmic in $\secpar$ — [[BISW17 - Lattice-Based SNARGs and Their Application to More Efficient Obfuscation|BISW17]].

## Notes

- A lattice-based designated-verifier zk-SNARK from square span programs has proofs of 5 LWE encodings — [[GMNO18 - Lattice-Based zk-SNARKs from Square Span Programs|GMNO18]].
- Quasi-optimal SNARGs can also be built from linear multi-prover interactive proofs — [[BISW18 - Quasi-Optimal SNARGs via Linear Multi-Prover Interactive Proofs|BISW18]].
- The scalar notion, over a field of super-polynomial size, compiles linear interactive proofs: [[linear-only-encryption-to-designated-verifier-snarg-bciop13|Linear-only encryption ⇒ Designated-verifier SNARG]] — [[BCIOP13 - Succinct Non-interactive Arguments via Linear Interactive Proofs|BCIOP13]].
