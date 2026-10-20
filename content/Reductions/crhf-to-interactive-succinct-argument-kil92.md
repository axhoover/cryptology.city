---
type: reduction
status: draft
title: CRHF ⇒ Succinct arguments for NP (Kilian)
aliases:
  - Kilian's protocol
id: red-crhf-to-interactive-succinct-argument-kil92
kind: implication
hypotheses: [crhf]
conclusion: interactive-succinct-argument
class: unstated
model: standard
source:
  - "[[Kil92 - A Note on Efficient Zero-Knowledge Proofs and Arguments (Extended Abstract)|Kil92]]"
security-loss: "polynomial"
---

# CRHF ⇒ Succinct arguments for NP (Kilian)

## Statement

If [[hash-function#collision-resistance|collision-resistant hash functions]] exist, every language in $\classNP$ has a four-message public-coin [[succinct-argument#interactive-succinct-arguments|interactive argument]] whose communication is polylogarithmic in the size of the $\classNP$ verification, times a polynomial in $\secpar$ — [[Kil92 - A Note on Efficient Zero-Knowledge Proofs and Arguments (Extended Abstract)|Kil92]]. The argument can be made zero-knowledge — [[Kil92 - A Note on Efficient Zero-Knowledge Proofs and Arguments (Extended Abstract)|Kil92]].

## Sketch

The verifier sends a hash key; the prover commits to a probabilistically checkable proof of the statement by the root of a Merkle tree; the verifier sends the PCP verifier's random queries; the prover opens the queried positions with authentication paths. A prover that answers inconsistently on rewinding yields a collision, so its answers are those of a fixed proof string, which PCP soundness rejects — [[Kil92 - A Note on Efficient Zero-Knowledge Proofs and Arguments (Extended Abstract)|Kil92]].

## Notes

- In the random-oracle model, applying the Fiat–Shamir transform to this protocol gives non-interactive succinct arguments: [[rom-to-snark-mic00|ROM ⇒ SNARK (CS proofs)]] — [[Mic00 - Computationally Sound Proofs|Mic00]].
- Efficiency: the prover's work is dominated by computing the PCP and the Merkle tree, and the verifier's work beyond reading the statement is polylogarithmic in the PCP length — standard.
