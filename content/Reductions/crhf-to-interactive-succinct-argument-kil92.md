---
type: reduction
status: draft
title: Arbitrary-length CRHF ⇒ Succinct arguments for NP (Kilian)
aliases:
  - Kilian's protocol
id: red-crhf-to-interactive-succinct-argument-kil92
kind: implication
hypotheses: [arbitrary-length-crhf]
conclusion: interactive-succinct-argument
class: unstated
model: standard
source:
  - "[[Kil92 - A Note on Efficient Zero-Knowledge Proofs and Arguments (Extended Abstract)|Kil92]]"
security-loss: "polynomial"
via:
  - "[[probabilistically-checkable-proofs|PCPs]]"
---

# Arbitrary-length CRHF ⇒ Succinct arguments for NP (Kilian)

## Statement

If [[hash-function#arbitrary-length-collision-resistance|arbitrary-length collision-resistant hash functions]] exist, every language in $\classNP$ has a four-message public-coin [[succinct-argument#interactive-succinct-arguments|interactive argument]] whose communication is polylogarithmic in the size of the $\classNP$ verification, times a polynomial in $\secpar$ — [[Kil92 - A Note on Efficient Zero-Knowledge Proofs and Arguments (Extended Abstract)|Kil92]]. The argument can be made zero-knowledge — [[Kil92 - A Note on Efficient Zero-Knowledge Proofs and Arguments (Extended Abstract)|Kil92]]. It is perfectly complete, since the PCP is perfectly complete and honest Merkle openings verify — standard.

## Sketch

The verifier sends a hash key; the prover commits to a [[probabilistically-checkable-proofs|probabilistically checkable proof]] of the statement by the root of a Merkle tree; the verifier sends the PCP verifier's random queries; the prover opens the queried positions with authentication paths. A prover that answers inconsistently on rewinding yields a collision, so its answers are those of a fixed proof string, which PCP soundness rejects — [[Kil92 - A Note on Efficient Zero-Knowledge Proofs and Arguments (Extended Abstract)|Kil92]]. For a family $\hash : \calK \times \bits^* \to \bits^m$, a tree whose leaves are the $m$-bit blocks of the proof string, padded with zero blocks to a power of two, and whose internal nodes are $\hash(k, u \,\|\, v)$ for their children $u, v \in \bits^m$ evaluates $\hash(k, \cdot)$ only on $\bits^{2m}$, and two accepted openings of one leaf position to different blocks under one root give a collision on $\bits^{2m}$ — standard.

## Notes

- A [[hash-function#collision-resistance|CRHF]] may compress by a single bit, $\bits^{m+1} \to \bits^m$, which a two-to-one tree hash cannot use directly; any CRHF yields an arbitrary-length CRHF by Merkle–Damgård iteration ([[crhf-to-arbitrary-length-crhf|CRHF ⇒ Arbitrary-length CRHF (Merkle–Damgård)]]) — [[Rog06 - Formalizing Human Ignorance|Rog06]].

- In the random-oracle model, applying the Fiat–Shamir transform to this protocol gives non-interactive succinct arguments: [[rom-to-snark-mic00|ROM ⇒ SNARK (CS proofs)]] — [[Mic00 - Computationally Sound Proofs|Mic00]].
- Efficiency: the prover's work is dominated by computing the PCP and the Merkle tree, and the verifier's work beyond reading the statement is polylogarithmic in the PCP length — standard.
