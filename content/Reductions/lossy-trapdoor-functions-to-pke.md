---
type: reduction
status: draft
title: "Lossy trapdoor functions ⇒ IND-CCA PKE"
aliases: []
id: red-lossy-trapdoor-functions-to-pke
kind: implication
hypotheses: [lossy-trapdoor-function]
conclusion: pke-cca2-security
class: fully-black-box
model: standard
source:
  - "[[PW08 - Lossy trapdoor functions and their applications|PW08]]"
security-loss: "tight: a constant number of hybrids plus a statistical leftover-hash term"
rationale:
  class: "The construction calls the lossy TDF's sampling, evaluation and inversion algorithms only as oracles, the all-but-one TDF and one-time signature are built from it black-box, and each hybrid's reduction runs the adversary only as an oracle."
---

# Lossy trapdoor functions ⇒ IND-CCA PKE

## Statement

[[trapdoor-permutation#lossy-trapdoor-functions|Lossy trapdoor functions]] of sufficient lossiness imply [[public-key-encryption#cca-security|IND-CCA-secure PKE]] — [[PW08 - Lossy trapdoor functions and their applications|PW08]]. The first step is an IND-CPA scheme: the public key is an injective-mode index $s$ and a pairwise-independent hash $h$, and $m$ is encrypted as $(F_s(x), h(x) \oplus m)$ for uniform $x$. The IND-CCA scheme adds an all-but-one lossy TDF, which PW08 build from lossy TDFs of sufficient lossiness, and a strongly unforgeable one-time signature.

## Sketch

Switching $s$ to a lossy index is indistinguishable by lossy-TDF security; in lossy mode $F_s(x)$ leaves $x$ with min-entropy at least the lossiness $k$, so by the leftover hash lemma $h(x)$ is statistically close to uniform and the IND-CPA ciphertext statistically hides $m$.

## Notes

- The loss is one injective-to-lossy hop plus the leftover-hash term for the IND-CPA scheme; the IND-CCA proof adds a constant number of hops, for one-time-signature unforgeability and all-but-one branch hiding — [[PW08 - Lossy trapdoor functions and their applications|PW08]].
