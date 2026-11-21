---
type: reduction
status: draft
title: "DCR (safe-prime moduli) ⇒ TPKE"
aliases: []
id: red-dkg-and-he-to-tpke
kind: implication
hypotheses: [dcr-safe-primes]
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

# DCR (safe-prime moduli) ⇒ TPKE

## Statement

In threshold Paillier, a trusted dealer generates a Paillier key whose modulus is $n = pq$ with $p = 2p' + 1$ and $q = 2q' + 1$ safe primes, and Shamir-shares its decryption exponent among the servers; each server publishes a partial decryption with a non-interactive proof that it is correct, and enough partial decryptions combine to the plaintext. Under [[decisional-composite-residuosity#dcr-with-safe-prime-moduli|DCR with safe-prime moduli]] and in the random oracle model, this [[threshold-encryption|threshold encryption]] scheme is IND-CPA secure against an active, static adversary corrupting fewer than the threshold number of servers — [[FPS00 - Sharing Decryption in the Context of Voting or Lotteries|FPS00]]. [[DJ01 - A Generalisation, a Simplification and Some Applications of Paillier's Probabilistic Public-Key System|DJ01]] give a threshold variant, also with a trusted dealer and safe-prime moduli, of their generalisation modulo $n^{s+1}$.

Honestly computed decryption shares satisfy the combining equation exactly and honest share proofs always verify, so the scheme is perfectly [[threshold-encryption#correctness|correct]], with message space $\ZZ_n$ — standard. IND-CPA security covers in particular adversaries that make no $\calE$ query, for which the game is the CPA game of $(\KeyGen, \Enc)$ with the corrupted servers' key shares revealed.
