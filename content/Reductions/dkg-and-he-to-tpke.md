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
rationale:
  class: "Neither FPS00 nor DJ01 places the reduction in the RTV04 taxonomy, and free records only that the implication is proved."
---

# DCR ⇒ TPKE

## Statement

In threshold Paillier, a trusted dealer generates a Paillier key and Shamir-shares its decryption exponent among the servers; each server publishes a partial decryption with a non-interactive proof that it is correct, and enough partial decryptions combine to the plaintext. Under [[decisional-composite-residuosity|DCR]] and in the random oracle model, this [[threshold-encryption|threshold encryption]] scheme is IND-CPA secure against an active, static adversary corrupting fewer than the threshold number of servers — [[FPS00 - Sharing Decryption in the Context of Voting or Lotteries|FPS00]]. [[DJ01 - A Generalisation, a Simplification and Some Applications of Paillier's Probabilistic Public-Key System|DJ01]] give a threshold variant, also with a trusted dealer, of their generalisation modulo $n^{s+1}$.
