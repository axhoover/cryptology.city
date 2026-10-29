---
type: reduction
status: draft
title: "LWE + NIZK ⇒ Two-round MPC in the CRS model (Mukherjee–Wichs)"
aliases: []
id: red-subexponential-modulus-lwe-and-nizk-argument-for-np-to-two-round-mpc-mw16
kind: implication
hypotheses: [subexponential-modulus-lwe, nizk-argument-for-np]
conclusion: two-round-mpc
class: free
model: crs
source:
  - "[[MW16 - Two Round Multiparty Computation via Multi-key FHE|MW16]]"
security-loss: ""
rationale:
  class: "The malicious protocol attaches NIZK proofs that each message is computed by the semi-honest protocol's algorithms, NP statements about their code."
  model: "The multi-key FHE scheme's public matrix is a common random string shared by all parties."
---

# LWE + NIZK ⇒ Two-round MPC in the CRS model (Mukherjee–Wichs)

## Statement

If LWE is hard [[learning-with-errors#lwe-with-sub-exponential-modulus-to-noise-ratio|with sub-exponential modulus-to-noise ratio]] and [[non-interactive-zero-knowledge#nizk-arguments-for-np|NIZK arguments for NP]] exist, then in the common random string model every functionality has a two-round protocol secure against malicious adversaries corrupting any number of parties ([[secure-multi-party-computation#two-round-mpc|two-round MPC]]). Each party broadcasts an encryption of its input under its own key of a multi-key FHE scheme with one-round threshold decryption, and then broadcasts a partial decryption of the homomorphically evaluated output — [[MW16 - Two Round Multiparty Computation via Multi-key FHE|MW16]].

## Notes

- Against semi-honest adversaries LWE alone suffices, in the same model and with the same two rounds — [[MW16 - Two Round Multiparty Computation via Multi-key FHE|MW16]].
- For circuits of depth $d$ the partial decryptions are smudged with noise $2^{d\secpar\log\secpar}$ times the LWE noise bound, so the modulus-to-noise ratio must exceed $2^{d\secpar\log\secpar}$ and grows with the depth — [[MW16 - Two Round Multiparty Computation via Multi-key FHE|MW16]].
- Efficiency: two rounds, each party broadcasting one multi-key FHE ciphertext of its input and then one partial decryption — [[MW16 - Two Round Multiparty Computation via Multi-key FHE|MW16]]. Two rounds are optimal: from the honest parties' messages in a one-round protocol a corrupted party can compute the output on any inputs of its own, which the ideal execution does not allow — standard.
- Three rounds from LWE and NIZK came first — [[AJL+12 - Multiparty Computation with Low Communication, Computation and Interaction via Threshold FHE|AJL+12]] — and two rounds were known from indistinguishability obfuscation — [[GGHR14 - Two-Round Secure MPC from Indistinguishability Obfuscation|GGHR14]].
- Two-round malicious OT in the common reference string model also suffices ([[two-round-uc-ot-to-two-round-mpc-gs18|two-round UC OT ⇒ two-round MPC]]) — [[GS18 - Two-Round Multiparty Secure Computation from Minimal Assumptions|GS18]]; DDH, QR and LWE with polynomial modulus-to-noise ratio give it — [[PVW08 - A Framework for Efficient and Composable Oblivious Transfer|PVW08]] — and so do CDH and LPN — [[DGHMW20 - Two-Round Oblivious Transfer from CDH or LPN|DGHMW20]].
