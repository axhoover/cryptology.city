---
type: reduction
status: draft
title: "Lossy trapdoor functions ⇒ PKE"
aliases: []
id: red-lossy-trapdoor-functions-to-pke
kind: implication
hypotheses: [lossy-trapdoor-function]
conclusion: pke
class: fully-black-box
model: standard
source:
  - "[[PW08 - Lossy trapdoor functions and their applications|PW08]]"
security-loss: "tight: one injective/lossy index-indistinguishability hop plus a statistical leftover-hash term"
---

# Lossy trapdoor functions ⇒ PKE

[[trapdoor-permutation#lossy-trapdoor-functions|Lossy trapdoor functions]] imply [[public-key-encryption|PKE]].

## Statement

[[trapdoor-permutation#lossy-trapdoor-functions|Lossy trapdoor functions]] with sufficient lossiness imply IND-CPA [[public-key-encryption|PKE]]: the public key is an injective-mode index $s$ and a pairwise-independent $h$, and $m$ is encrypted as $(F_s(x), h(x) \oplus m)$ for uniform $x$. The IND-CCA scheme of PW08 adds an all-but-one lossy TDF (obtained there from lossy TDFs of sufficient lossiness) and a strongly unforgeable one-time signature [[PW08 - Lossy trapdoor functions and their applications|PW08]].

## Sketch

Switching the public key's injective index to a lossy one is indistinguishable by lossy-TDF security; in lossy mode $F_s(x)$ leaves $x$ with min-entropy at least the lossiness $k$, so by the leftover hash lemma $h(x)$ is statistically close to uniform and the ciphertext statistically hides $m$.

## Notes

`class: fully-black-box`: the construction calls the lossy TDF's sampling, evaluation and inversion algorithms only as oracles; the reduction runs the IND-CPA adversary as an oracle to distinguish injective from lossy indices, after which hiding is statistical. The CCA scheme (all-but-one lossy TDF and one-time signature, both built black-box from the lossy TDF) has the same shape. RTV04 fully-black-box.

- 'lossy-trapdoor-function' has no page of its own; it lives as a section of trapdoor-permutation.md.
