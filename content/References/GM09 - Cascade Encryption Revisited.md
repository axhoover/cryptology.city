---
type: reference
status: draft
title: "GM09"
source: https://eprint.iacr.org/2009/093
authors: Peter Gaži, Ueli M. Maurer
venue: ASIACRYPT 2009
published: 2009
aliases:
  - GM09
cryptobib_key: AC:GazMau09
---

# [GM09] Cascade Encryption Revisited

**Authors:** Peter Gaži, Ueli M. Maurer | **Venue:** ASIACRYPT 2009 | [Source](https://eprint.iacr.org/2009/093)

## Abstract

The security of cascade blockcipher encryption is an important and well-studied problem in theoretical cryptography with practical implications. It is well-known that double encryption improves the security only marginally, leaving triple encryption as the shortest reasonable cascade. In a recent paper, Bellare and Rogaway showed that in the ideal cipher model, triple encryption is significantly more secure than single and double encryption, stating the security of longer cascades as an open question.

In this paper, we propose a new lemma on the indistinguishability of systems extending Maurer's theory of random systems. In addition to being of independent interest, it allows us to compactly rephrase Bellare and Rogaway's proof strategy in this framework, thus making the argument more abstract and hence easy to follow. As a result, this allows us to address the security of longer cascades as well as some errors in their paper. Our result implies that for blockciphers with smaller key space than message space (e.g. DES), longer cascades improve the security of the encryption up to a certain limit. This partially answers the open question mentioned above.
