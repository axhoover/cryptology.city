---
type: reference
status: draft
title: "BN06"
source: https://doi.org/10.1145/1180405.1180453
authors: Mihir Bellare, Gregory Neven
venue: ACM CCS 2006
published: 2006
aliases:
  - BN06
cryptobib_key: CCS:BelNev06
---

# [BN06] Multi-Signatures in the Plain Public-Key Model and a General Forking Lemma

**Authors:** Mihir Bellare, Gregory Neven | **Venue:** ACM CCS 2006 | [Source](https://doi.org/10.1145/1180405.1180453)

## Abstract

A multi-signature scheme enables a group of signers to produce a compact, joint signature on a common document, and has many potential uses. However, existing schemes impose key setup or PKI requirements that make them impractical, such as requiring a dedicated, distributed key generation protocol amongst potential signers, or assuming strong, concurrent zero-knowledge proofs of knowledge of secret keys done to the CA at key registration. These requirements limit the use of the schemes. We provide a new scheme that is proven secure in the plain public-key model, meaning requires nothing more than that each signer has a (certified) public key. Furthermore, the important simplification in key management achieved is not at the cost of efficiency or assurance: our scheme matches or surpasses known ones in terms of signing time, verification time and signature size, and is proven secure in the random-oracle model under a standard (not bilinear map related) assumption. The proof is based on a simplified and general Forking Lemma that may be of independent interest.

# Notes

The author-hosted copy (https://cseweb.ucsd.edu/~mihir/papers/multisignatures.pdf) is the CCS 2006 version. Section 3 states and proves the general forking lemma (Lemma 1), and Section 4 defines unforgeability in the plain public-key model, in which a valid forgery on a message $m$ for a multiset $L$ of public keys containing the honest signer's wins unless the forger initiated a signing protocol with $L$ and $m$.
