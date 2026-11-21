---
type: reference
status: stub
title: "CKN03"
source: https://eprint.iacr.org/2003/174
authors: Ran Canetti, Hugo Krawczyk, Jesper Buus Nielsen
venue: CRYPTO 2003
published: 2003
aliases:
  - CKN03
cryptobib_key: C:CanKraNie03
---

# [CKN03] Relaxing Chosen-Ciphertext Security

**Authors:** Ran Canetti, Hugo Krawczyk, Jesper Buus Nielsen | **Venue:** CRYPTO 2003 | [Source](https://eprint.iacr.org/2003/174)

## Abstract

Security against adaptive chosen ciphertext attacks (or, CCA security) has been accepted as the standard requirement from encryption schemes that need to withstand active attacks. In particular, it is regarded as the appropriate security
notion for encryption schemes used as components within general protocols and applications. Indeed, CCA security was shown to suffice in a large variety of contexts. However, CCA security often appears to be somewhat _too strong:_ there exist encryption schemes (some of which come up naturally in practice) that are not CCA secure, but seem sufficiently secure “for most practical purposes.”

We propose a relaxed variant of CCA security, called Replayable CCA (RCCA) security. RCCA security accepts as secure the non-CCA (yet arguably secure) schemes mentioned above; furthermore, it suffices for most existing applications of CCA security.
We provide three formulations of RCCA security. The first one follows the spirit of semantic security and is formulated via an ideal functionality in the universally composable security framework. The other two are formulated following the indistinguishability and non-malleability approaches,
respectively. We show that the three formulations are equivalent in most interesting cases.
