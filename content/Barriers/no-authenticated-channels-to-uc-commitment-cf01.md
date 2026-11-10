---
type: barrier
status: draft
title: "No reduction from authenticated channels to UC commitment"
aliases: []
id: bar-authenticated-channels-to-uc-commitment-cf01
hypotheses: [authenticated-channels]
conclusion: uc-commitment
class: free
consequences:
  - kind: contradiction
    target: ""
    class: free
strength: unconditional
circumvented-by:
  - red-tdp-to-uc-commitment-cf01
source:
  - "[[CF01 - Universally Composable Commitments|CF01]]"
rationale:
  class: "CF01's impossibility holds for every bilateral plain-model protocol whatever its assumptions, so it rules out the implication itself: the free class, scoped to the plain model."
---

# No reduction from authenticated channels to UC commitment

## Statement

Over [[interactive-protocol#authenticated-channels|authenticated point-to-point channels]] without setup, no bilateral, terminating protocol UC-realizes the bit-commitment functionality $\calF_{\mathrm{COM}}$ ([[commitment-scheme#uc-commitment|UC commitment]]), whatever computational assumption the protocol relies on — [[CF01 - Universally Composable Commitments|CF01]]. A commitment protocol is bilateral if only the committer and the receiver take part, and terminating if, with non-negligible probability, the receiver accepts a commitment of the honest committer and outputs a receipt — [[CF01 - Universally Composable Commitments|CF01]]. The impossibility holds already against an efficient adversary that corrupts the committer or the receiver at the outset — [[CF01 - Universally Composable Commitments|CF01]] — the static corruptions a UC commitment must withstand, so no reduction of any kind gives a UC commitment from authenticated channels.

## Sketch

Let $\calA$ corrupt the committer at the outset and relay messages between $\calZ$ and the receiver, while $\calZ$ runs the honest committer on a uniform bit $b$. The simulator must give $\calF_{\mathrm{COM}}$ the committed bit before the receiver outputs its receipt, without rewinding $\calZ$ and with no setup to exploit, so it extracts $b$ from the committer's messages alone; a corrupted receiver that runs this simulator on an honest committer's messages then guesses $b$ before the opening with non-negligible advantage over $1/2$, although until the opening $\calF_{\mathrm{COM}}$ gives the receiver nothing that depends on $b$ — [[CF01 - Universally Composable Commitments|CF01]].

## Notes

- The protocol must be bilateral: with third parties taking part, a majority of the participants honest, protocols that UC-realize $\calF_{\mathrm{COM}}$ exist in the plain model — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]], [[CF01 - Universally Composable Commitments|CF01]].
- A common reference string circumvents the barrier: [[trapdoor-permutation|trapdoor permutations]] then give UC commitments ([[tdp-to-uc-commitment-cf01|TDP ⇒ UC commitment]]) — [[CF01 - Universally Composable Commitments|CF01]].
- Straight-line extraction of a corrupted party's input also rules out UC protocols for large classes of two-party functionalities over authenticated channels ([[no-authenticated-channels-to-uc-mpc-ckl03|no UC MPC from authenticated channels]]) — [[CKL03 - On the Limitations of Universally Composable Two-Party Computation without Set-up Assumptions|CKL03]].
