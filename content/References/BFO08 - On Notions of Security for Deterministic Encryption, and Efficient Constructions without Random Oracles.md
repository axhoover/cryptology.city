---
type: reference
status: stub
title: "BFO08"
source: https://eprint.iacr.org/2008/352
authors: Alexandra Boldyreva, Serge Fehr, Adam O'Neill
venue: CRYPTO 2008
published: 2008
aliases:
  - BFO08
cryptobib_key: C:BolFehONe08
---

# [BFO08] On Notions of Security for Deterministic Encryption, and Efficient Constructions without Random Oracles

**Authors:** Alexandra Boldyreva, Serge Fehr, Adam O'Neill | **Venue:** CRYPTO 2008 | [Source](https://eprint.iacr.org/2008/352)

## Abstract

The study of deterministic public-key encryption was initiated by
Bellare et al. (CRYPTO '07), who provided the “strongest possible”
notion of security for this primitive (called PRIV) and
constructions in the random oracle (RO) model. We focus on
constructing efficient deterministic encryption schemes
_without_ random oracles. To do so, we propose a slightly
weaker notion of security, saying that no partial information about
encrypted messages should be leaked as long as each message is
a-priori hard-to-guess _given the others_ (while PRIV did not
have the latter restriction). Nevertheless, we argue that this
version seems adequate for certain practical applications. We show
equivalence of this definition to single-message and
indistinguishability-based ones, which are easier to work with.
Then we give general constructions of both chosen-plaintext (CPA)
and chosen-ciphertext-attack (CCA) secure deterministic encryption
schemes, as well as efficient instantiations of them under standard
number-theoretic assumptions. Our constructions build on the
recently-introduced framework of Peikert and Waters (STOC '08) for
constructing CCA-secure _probabilistic_ encryption schemes,
extending it to the deterministic-encryption setting and yielding
some improvements to their original results as well.
