---
type: reference
status: draft
title: "FOPS01"
source: https://eprint.iacr.org/2000/061
authors: Eiichiro Fujisaki, Tatsuaki Okamoto, David Pointcheval, Jacques Stern
venue: CRYPTO 2001
published: 2001
aliases:
  - FOPS01
cryptobib_key: C:FOPS01
---

# [FOPS01] RSA-OAEP Is Secure under the RSA Assumption

**Authors:** Eiichiro Fujisaki, Tatsuaki Okamoto, David Pointcheval, Jacques Stern | **Venue:** CRYPTO 2001 | [Source](https://eprint.iacr.org/2000/061)

## Abstract

Recently Victor Shoup noted that there is a gap in the widely-believed security result of OAEP against adaptive chosen-ciphertext attacks. Moreover, he showed that, presumably, OAEP cannot be proven secure from the _one-wayness_ of the underlying trapdoor permutation. This paper establishes another result on the security of OAEP. It proves that OAEP offers semantic security against adaptive chosen-ciphertext attacks, in the random oracle model, under the _partial-domain_ one-wayness of the underlying permutation. Therefore, this uses a formally stronger assumption. Nevertheless, since partial-domain one-wayness of the RSA function is equivalent to its (full-domain) one-wayness, it follows that the security of RSA–OAEP can actually be proven under the sole RSA assumption, although the reduction is not tight.

# Notes

- The CRYPTO 2001 version appears in LNCS 2139, pages 260–274, and a journal version in the Journal of Cryptology 17(2), 2004.
