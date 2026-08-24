---
type: reduction
status: stub
title: "KEM + SKE ⇒ PKE"
aliases: []
id: red-kem-and-ske-to-pke
kind: implication
hypotheses: [kem, ske]
conclusion: pke
class: unstated
model: standard
source: folklore
security-loss: ""
---

# KEM + SKE ⇒ PKE

[[key-encapsulation-mechanism|KEM]] together with [[symmetric-key-encryption|SKE]] implies [[public-key-encryption|PKE]].

## Statement

Migrated verbatim from [[key-encapsulation-mechanism]] § Key encapsulation mechanism:

> A **key encapsulation mechanism** (KEM) is a public-key primitive that allows a sender to encapsulate a fresh uniformly random symmetric key $k$ into a ciphertext $c$ using a public key $\pk$, such that only the holder of the secret key $\sk$ can recover $k$ by decapsulation. Combined with a symmetric-key data encapsulation mechanism (DEM, i.e., [[symmetric-key-encryption|SKE]]), KEMs give the **KEM-DEM paradigm** for hybrid encryption — the standard approach to asymmetric encryption in practice.

Migrated verbatim from [[key-encapsulation-mechanism]] § KEM-DEM hybrid encryption:

> ## KEM-DEM hybrid encryption
>
> Given an IND-CCA KEM and an IND-CPA SKE (DEM), the following construction achieves IND-CCA [[public-key-encryption|PKE]]:
>
> - $\Enc(\pk, m)$: run $(c_1, k) \gets \mathsf{Encap}(\pk)$; run $c_2 \gets \mathsf{SKE.Enc}(k, m)$; output $(c_1, c_2)$.
> - $\Dec(\sk, (c_1, c_2))$: run $k \gets \mathsf{Decap}(\sk, c_1)$; output $\mathsf{SKE.Dec}(k, c_2)$.
>
> This achieves IND-CCA security as long as the KEM is IND-CCA secure and the DEM is IND-CPA secure (or even OT-secure for a one-time pad).

Migrated verbatim from [[key-encapsulation-mechanism]] § Other results:

> - KEM-DEM achieves IND-CCA PKE from IND-CCA KEM + IND-CPA SKE — standard

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 3 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Intro claim of the KEM-DEM paradigm; no citation (Cramer-Shoup CS03 is the canonical reference and is absent from the page entirely).
- Security levels of the three objects are unstated in the intro.
- SUSPECT MATH (line 63): 'This achieves IND-CCA security as long as the KEM is IND-CCA secure and the DEM is IND-CPA secure (or even OT-secure for a one-time pad).' The standard KEM-DEM composition theorem requires a one-time IND-CCA (or authenticated) DEM; an IND-CPA-only DEM does NOT yield IND-CCA PKE, and a one-time pad DEM is malleable so the composed scheme is trivially CCA-breakable. Report only; do not fix.
- No citation anywhere in this section.
- SUSPECT MATH: same error as line 63 - IND-CCA PKE from KEM-DEM requires a one-time IND-CCA / authenticated DEM, not merely an IND-CPA SKE. Report only; do not fix.
- '- standard' used where CS03 is the attributable source.
