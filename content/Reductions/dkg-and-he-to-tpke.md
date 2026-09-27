---
type: reduction
status: draft
title: "DCR ⇒ TPKE"
aliases: []
id: red-dkg-and-he-to-tpke
kind: implication
hypotheses: [dcr]
conclusion: threshold-encryption
class: free
model: rom
source:
  - "[[FPS00 - Sharing Decryption in the Context of Voting or Lotteries|FPS00]]"
  - "[[DJ01 - A Generalisation, a Simplification and Some Applications of Paillier's Probabilistic Public-Key System|DJ01]]"
security-loss: ""
---

# DCR ⇒ TPKE

[[decisional-composite-residuosity|DCR]] implies [[threshold-encryption|threshold public-key encryption]] in the random oracle model.

## Statement

In threshold Paillier, a trusted dealer generates a Paillier key and Shamir-shares its decryption exponent among the servers. Each server publishes a partial decryption with a non-interactive proof that it is correct, and enough partial decryptions combine to the plaintext. Under [[decisional-composite-residuosity|DCR]] and in the random oracle model, the scheme is IND-CPA secure against an active, static adversary corrupting fewer than the threshold number of servers — [[FPS00 - Sharing Decryption in the Context of Voting or Lotteries|FPS00]]. [[DJ01 - A Generalisation, a Simplification and Some Applications of Paillier's Probabilistic Public-Key System|DJ01]] give a threshold variant of their generalisation modulo $n^{s+1}$.

## Notes

`class: free`: records the proven implication. Neither paper places it in the RTV taxonomy.

- Both papers use a trusted dealer. Generating the RSA modulus without one is a separate protocol and not a hypothesis of this edge.
- Sourcing pass (2026-09): this page previously recorded {DKG, HE} ⇒ TPKE, inferred from the parenthetical 'DCR → threshold encryption (via Paillier with distributed key generation) — standard' on [[decisional-composite-residuosity]] § Known Results. No theorem gives threshold PKE from a generic DKG plus unspecified HE.
