---
aliases:
  - Sch91
title: "Sch91 - Efficient signature generation by smart cards"
---

Claus-Peter Schnorr. "Efficient signature generation by smart cards." _Journal of Cryptology_, 4(3):161–174, 1991.

Introduced the Schnorr identification protocol and signature scheme. The identification protocol is a three-message sigma protocol (commit–challenge–response) for proving knowledge of a discrete logarithm, and is honest-verifier zero-knowledge under the discrete logarithm assumption. Applying the Fiat-Shamir transform (heuristically in the random oracle model) yields Schnorr signatures, which are EUF-CMA secure under the discrete logarithm assumption in the ROM. Schnorr signatures are the basis for EdDSA (Ed25519) and play a central role in the Schnorr multi-signature and threshold signature literature.
