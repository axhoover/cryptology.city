---
type: reference
status: draft
source: https://link.springer.com/article/10.1007/BF00196725
aliases:
  - Sch91
title: "Sch91"
cryptobib_key: JC:Schnorr91
authors: Claus-Peter Schnorr
venue: Journal of Cryptology
published: 1991-01-01
---

# [Sch91] Efficient signature generation by smart cards

**Authors:** Claus-Peter Schnorr | **Venue:** Journal of Cryptology | [Source](https://link.springer.com/article/10.1007/BF00196725)

Introduced the Schnorr identification protocol and signature scheme. The identification protocol is a three-message sigma protocol (commit–challenge–response) for proving knowledge of a discrete logarithm. It is special sound and perfect honest-verifier zero-knowledge with no assumption: the simulator samples $c, s$ and sets $R = g^s \pk^{-c}$. Applying the Fiat–Shamir transform — [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]] — yields Schnorr signatures, proved EUF-CMA secure under the discrete logarithm assumption in the random oracle model — [[PS96 - Security Proofs for Signature Schemes|PS96]]. EdDSA (Ed25519) is a Schnorr variant over a twisted Edwards curve with deterministic nonces — [[BDLSY11 - High-Speed High-Security Signatures|BDLSY11]].
