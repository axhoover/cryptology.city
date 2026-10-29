---
type: reduction
status: draft
title: "DLOG ⇒ MuSig"
aliases: []
id: red-prime-order-dlog-to-musig-mpsw19
kind: implication
hypotheses: [prime-order-dlog]
conclusion: musig
class: fully-black-box
model: rom
source:
  - "[[MPSW19 - Simple Schnorr Multi-Signatures with Applications to Bitcoin|MPSW19]]"
security-loss: ""
rationale:
  class: "The scheme is fixed and uses only the group and the hashes, and the reduction runs the forger only as an oracle, forking it twice."
  model: "The reduction programs the random oracles and rewinds the forger."
---

# DLOG ⇒ MuSig

## Statement

[[multi-signature#musig|MuSig]] is the three-round Schnorr multi-signature with key aggregation. Each signer computes $a_i = H_{\mathrm{agg}}(L, X_i)$ and $\tilde X = \prod_i X_i^{a_i}$, the signers run a commitment round on their nonces $R_i$, and with $R = \prod_i R_i$ and $c = H_{\mathrm{sig}}(\tilde X, R, m)$ each signer replies $s_i = r_i + c a_i x_i$. The scheme is unforgeable in the plain public-key model in the [[random-oracle-model|random-oracle model]] if [[discrete-logarithm#dlog-in-prime-order-groups|DLOG]] is hard in the group — [[MPSW19 - Simple Schnorr Multi-Signatures with Applications to Bitcoin|MPSW19]].

## Notes

- A MuSig signature $(R, \sum_i s_i)$ verifies as a [[digital-signature#schnorr-signatures|Schnorr signature]] under the aggregate key $\tilde X$, with the key included in the hash — [[MPSW19 - Simple Schnorr Multi-Signatures with Applications to Bitcoin|MPSW19]].
- Without the commitment round ([[multi-signature#two-round-musig|two-round MuSig]]), no algebraic reduction proves the scheme secure under DLOG or OMDL if OMDL is hard ([[no-omdl-to-two-round-musig-def19|barrier]]) — [[DEF+19 - On the Security of Two-Round Multi-Signatures|DEF+19]]. [[multi-signature#musig2|MuSig2]] restores two rounds with several nonces per signer, under OMDL ([[omdl-to-musig2-nrs21|OMDL ⇒ MuSig2]]) — [[NRS21 - MuSig2 Simple Two-Round Schnorr Multi-signatures|NRS21]].
