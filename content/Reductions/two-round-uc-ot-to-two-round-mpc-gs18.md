---
type: reduction
status: draft
title: "Two-round UC OT ⇒ Two-round MPC in the CRS model (Garg–Srinivasan)"
aliases: []
id: red-two-round-uc-ot-to-two-round-mpc-gs18
kind: implication
hypotheses: [two-round-uc-ot]
conclusion: two-round-mpc
class: free
model: crs
source:
  - "[[GS18 - Two-Round Multiparty Secure Computation from Minimal Assumptions|GS18]]"
security-loss: ""
rationale:
  class: "The protocol garbles circuits that compute the OT protocol's next-message functions, so it uses the OT protocol's code."
  model: "Both the OT protocol and the MPC protocol use a common reference string."
---

# Two-round UC OT ⇒ Two-round MPC in the CRS model (Garg–Srinivasan)

## Statement

If a two-message OT protocol secure against malicious adversaries exists in the common reference string model, every functionality has a two-round protocol in that model, over the broadcast channel, that is secure with abort against a malicious adversary corrupting any number of parties ([[secure-multi-party-computation#two-round-mpc|two-round MPC]]) — [[GS18 - Two-Round Multiparty Secure Computation from Minimal Assumptions|GS18]]. With both rounds over the broadcast channel the abort is unanimous, as [[CGZ20 - Broadcast-Optimal Two-Round MPC|CGZ20]] restate. A [[oblivious-transfer#two-round-uc-secure-ot|two-round UC-secure OT]] is such a protocol, since UC security implies stand-alone malicious security — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]].

## Notes

- In the common reference string model, $k$-round semi-malicious OT together with NIZK gives $k$-round malicious UC MPC for every $k \ge 2$ — [[BL18 - k-Round Multiparty Computation from k-Round Oblivious Transfer via Garbled Interactive Circuits|BL18]].
- Assuming two-round OT in the common reference string model, CGZ20 determine, for each combination of broadcast and point-to-point rounds, which of selective, unanimous and identifiable abort two-round MPC achieves against any number of malicious parties; their impossibility results hold for any correlated randomness — [[CGZ20 - Broadcast-Optimal Two-Round MPC|CGZ20]].
- Two-message UC-secure OT in the common reference string model follows from DDH, QR or LWE ([[ddh-to-malicious-ot-security-pvw08|DDH ⇒ two-round UC-secure OT]]) — [[PVW08 - A Framework for Efficient and Composable Oblivious Transfer|PVW08]] — and from CDH or LPN ([[cdh-to-uc-ot-dghmw20|CDH ⇒ two-round UC-secure OT]]), which gives two-round malicious MPC under CDH or LPN — [[DGHMW20 - Two-Round Oblivious Transfer from CDH or LPN|DGHMW20]].
- Two rounds also suffice from LWE and NIZK arguments ([[subexponential-modulus-lwe-and-nizk-argument-for-np-to-two-round-mpc-mw16|LWE + NIZK ⇒ two-round MPC]]) — [[MW16 - Two Round Multiparty Computation via Multi-key FHE|MW16]].
