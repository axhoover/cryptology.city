---
type: reference
status: stub
title: "BGLPT15"
source: https://eprint.iacr.org/2015/356
authors: Nir Bitansky, Sanjam Garg, Huijia Lin, Rafael Pass, Sidharth Telang
venue: STOC 2015
published: 2015
aliases:
  - BGLPT15
cryptobib_key: STOC:BGLPT15
---

# [BGLPT15] Succinct Randomized Encodings and their Applications

**Authors:** Nir Bitansky, Sanjam Garg, Huijia Lin, Rafael Pass, Sidharth Telang | **Venue:** STOC 2015 | [Source](https://eprint.iacr.org/2015/356)

## Abstract

A _randomized encoding_ allows to express a “complex” computation, given by a function $f$ and input $x$, by a “simple to compute” randomized representation $\hat{f}(x)$ whose distribution encodes $f(x)$, while revealing nothing else regarding $f$ and $x$. Existing randomized encodings, geared mostly to allow encoding with low parallel-complexity, have proven instrumental in various strong applications such as multiparty computation and parallel cryptography.

This work focuses on another natural complexity measure: _the time required to encode_. We construct _succinct randomized encodings_ where the time to encode a computation, given by a
program $\Pi$ and input $x$, is essentially independent of $\Pi$'s
time complexity, and only depends on its space complexity, as well as
the size of its input, output, and description. The scheme guarantees
computational privacy of $(\Pi,x)$, and is based on
indistinguishability obfuscation for a relatively simple circuit
class, for which there exist instantiations based on polynomial
hardness assumptions on multi-linear maps.

We then invoke succinct randomized encodings to obtain several strong applications, including:

- Succinct indistinguishability obfuscation, where the obfuscated program $iO({\Pi})$ computes the same function as $\Pi$ for inputs $x$ of apriori-bounded size. Obfuscating $\Pi$ is roughly as fast as encoding the computation of $\Pi$ on any such input $x$. Here we also require subexponentially-secure indistinguishability obfuscation for circuits.
- Succinct functional encryption, where a functional decryption key corresponding to $\Pi$ allows decrypting $\Pi(x)$ from encryptions of any plaintext $x$ of apriori-bounded size. Key derivation is as fast as encoding the corresponding computation.
- Succinct reusable garbling, a stronger form of randomized encodings where any number of inputs $x$ can be encoded separately of $\Pi$, independently of $\Pi$'s time and space complexity.
- Publicly-verifiable 2-message delegation where verifying the result of a long computation given by $\Pi$ and input $x$ is as fast as encoding the corresponding computation. We also show how to transform any 2-message delegation scheme to an essentially non-interactive system where the verifier message is reusable.

Previously, succinct randomized encodings or any of the above applications were only known based on various non-standard knowledge assumptions.

At the heart of our techniques is a generic method of compressing a
piecemeal garbled computation, without revealing anything about the
secret randomness utilized for garbling.
