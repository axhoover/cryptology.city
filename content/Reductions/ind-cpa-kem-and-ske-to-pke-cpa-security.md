---
type: reduction
status: draft
title: "IND-CPA KEM + SKE ⇒ IND-CPA PKE"
aliases: []
id: red-ind-cpa-kem-and-ske-to-pke-cpa-security
kind: implication
hypotheses: [ind-cpa-kem, ske]
conclusion: pke-cpa-security
class: fully-black-box
model: standard
source: folklore
security-loss: "additive: twice the KEM CPA advantage plus the DEM one-time advantage"
rationale:
  class: "One fixed construction calls Encap and the SKE algorithms only as oracles, and both game-hop reductions run the PKE adversary as an oracle."
---

# IND-CPA KEM + SKE ⇒ IND-CPA PKE

## Statement

The KEM-DEM hybrid of an [[key-encapsulation-mechanism#ind-cpa-kem|IND-CPA KEM]] with key space $\bits^{\ell(\secpar)}$ and a one-time IND-CPA [[symmetric-key-encryption|SKE]] scheme, $\Enc(\pk, m) := (c_1, \SKE.\Enc(k', m))$ for $(c_1, k) \gets \Encap(\pk)$ and the DEM key $k' := \SKE.\KeyGen(1^{\secpar'}; k)$, is [[public-key-encryption#cpa-security|IND-CPA]] secure — folklore. Here $\secpar' = \secpar^{\Omega(1)}$ is a security parameter at which $\SKE.\KeyGen$ uses at most $\ell(\secpar)$ coins, and a function negligible in $\secpar'$ is negligible in $\secpar$ — standard.

## Sketch

Replace the encapsulated key by an independent uniform key, indistinguishable by KEM IND-CPA security; the challenge is then a one-time encryption under a key that $\SKE.\KeyGen(1^{\secpar'})$ generates on uniform coins.

## Notes

- With the one-time pad as DEM, which needs no assumption, an IND-CPA KEM alone gives IND-CPA PKE for messages of the key's length ([[ind-cpa-kem-to-pke-cpa-security|IND-CPA KEM ⇒ IND-CPA PKE]]) — folklore.
