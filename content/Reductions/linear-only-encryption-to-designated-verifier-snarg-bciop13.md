---
type: reduction
status: draft
title: Linear-only encryption ⇒ Designated-verifier SNARG
aliases: []
id: red-linear-only-encryption-to-designated-verifier-snarg-bciop13
kind: implication
hypotheses: [linear-only-encryption]
conclusion: designated-verifier-snarg
class: unstated
model: crs
source:
  - "[[BCIOP13 - Succinct Non-interactive Arguments via Linear Interactive Proofs|BCIOP13]]"
security-loss: ""
rationale:
  model: "The verifier generates the reference string, encrypted LIP queries, in a preprocessing phase and keeps the decryption key."
---

# Linear-only encryption ⇒ Designated-verifier SNARG

## Statement

$\classNP$ has two-message linear interactive proofs (LIPs), in which the honest prover's answer is an affine function of the verifier's message, obtained by general transformations from linear PCPs and from traditional PCPs — [[BCIOP13 - Succinct Non-interactive Arguments via Linear Interactive Proofs|BCIOP13]]. If a [[linear-only-encryption|linear-only encryption]] scheme over a field of super-polynomial size exists, encrypting the LIP verifier's message in the reference string, letting the prover answer homomorphically, and letting the verifier decrypt and run the LIP decision gives a [[succinct-argument#designated-verifier-snargs|designated-verifier preprocessing SNARG]] for $\classNP$ whose proof is a constant number of ciphertexts — [[BCIOP13 - Succinct Non-interactive Arguments via Linear Interactive Proofs|BCIOP13]]. BCIOP13 base security more generally on forms of linear targeted malleability, implied by earlier knowledge assumptions, obtain SNARGs of knowledge, and obtain publicly verifiable SNARGs from LIPs with degree-bounded verifiers — [[BCIOP13 - Succinct Non-interactive Arguments via Linear Interactive Proofs|BCIOP13]].

## Sketch

$\Setup$ samples the LIP verifier's query vectors, publishes their encryptions as $\crs$, and keeps the decryption key and the LIP decision state as $\tau$. The prover applies its affine proof function to the encrypted queries homomorphically; the verifier decrypts and runs the LIP decision. Linear-only extraction turns any convincing prover into an affine strategy, which semantic security makes independent of the queries, and LIP soundness rejects such a strategy on a false statement — [[BCIOP13 - Succinct Non-interactive Arguments via Linear Interactive Proofs|BCIOP13]].

## Notes

- The reference string consists of encryptions of the LIP queries, and for some LIPs the proof is a single ciphertext — [[BCIOP13 - Succinct Non-interactive Arguments via Linear Interactive Proofs|BCIOP13]].
- The approach goes back to arguments compiled from linear PCPs, exponentially long PCPs described by a linear function $\pi : \FF^n \to \FF$: with any homomorphic encryption scheme, the verifier sends $O(n)$ encrypted field elements and receives $O(1)$ ciphertexts — [[IKO07 - Efficient Arguments without Short PCPs|IKO07]].
- The vector variant, with a lattice-based candidate, is [[linear-only-vector-encryption-to-designated-verifier-snarg-bisw17|Linear-only vector encryption ⇒ Designated-verifier SNARG]] — [[BISW17 - Lattice-Based SNARGs and Their Application to More Efficient Obfuscation|BISW17]].
- Two-move LIPs cannot have a linear decision procedure, so generic bilinear-group SNARGs cannot have single-element proofs, answering a question of BCIOP13 — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]].
