---
type: reference
status: stub
title: "BFP21"
source: https://eprint.iacr.org/2021/866
authors: Balthazar Bauer, Georg Fuchsbauer, Antoine Plouviez
venue: ASIACRYPT 2021
published: 2021
aliases:
  - BFP21
cryptobib_key: AC:BauFucPlo21
---

# [BFP21] The One-More Discrete Logarithm Assumption in the Generic Group Model

**Authors:** Balthazar Bauer, Georg Fuchsbauer, Antoine Plouviez | **Venue:** ASIACRYPT 2021 | [Source](https://eprint.iacr.org/2021/866)

## Abstract

The one more-discrete logarithm assumption (OMDL) underlies the security analysis of identification protocols, blind signature and multi-signature schemes, such as blind Schnorr signatures and the recent MuSig2 multi-signatures. As these schemes produce standard Schnorr signatures, they are compatible with existing systems, e.g. in the context of blockchains. OMDL is moreover assumed for many results on the impossibility of certain security reductions.

Despite its wide use, surprisingly, OMDL is lacking any rigorous analysis; there is not even a proof that it holds in the generic group model (GGM). (We show that a claimed proof is flawed.) In this work we give a formal proof of OMDL in the GGM. We also prove a related assumption, the one-more computational Diffie-Hellman assumption, in the GGM. Our proofs deviate from prior proofs in the GGM and replace the use of the Schwartz-Zippel Lemma by a new argument.
