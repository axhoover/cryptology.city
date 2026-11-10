---
type: reference
status: stub
title: "RS21"
source: https://eprint.iacr.org/2021/971
authors: Lior Rotem, Gil Segev
venue: CRYPTO 2021
published: 2021
aliases:
  - RS21
cryptobib_key: C:RotSeg21
---

# [RS21] Tighter Security for Schnorr Identification and Signatures: A High-Moment Forking Lemma for Σ-Protocols

**Authors:** Lior Rotem, Gil Segev | **Venue:** CRYPTO 2021 | [Source](https://eprint.iacr.org/2021/971)

## Abstract

The Schnorr identification and signature schemes have been amongst the most influential cryptographic protocols of the past three decades. Unfortunately, although the best-known attacks on these two schemes are via discrete-logarithm computation, the known approaches for basing their security on the hardness of the discrete logarithm problem encounter the “square-root barrier”. In particular, in any group of order $p$ where Shoup's generic hardness result for the discrete logarithm problem is believed to hold (and is thus used for setting concrete security parameters), the best-known $t$-time attacks on the Schnorr identification and signature schemes have success probability $t^2/p$, whereas existing proofs of security only rule out attacks with success probabilities $(t^2/p)^{1/2}$ and $(q_{\mathcal{H}} \cdot t^2/p)^{1/2}$, respectively, where $q_{\mathcal{H}}$ denotes the number of random-oracle queries issued by the attacker.

We establish tighter security guarantees for identification and signature schemes which result from $\Sigma$-protocols with special soundness based on the hardness of their underlying relation, and in particular for Schnorr's schemes based on the hardness of the discrete logarithm problem. We circumvent the square-root barrier by introducing a high-moment generalization of the classic forking lemma, relying on the assumption that the underlying relation is “$d$-moment hard”: The success probability of any algorithm in the task of producing a witness for a random instance is dominated by the $d$-th moment of the algorithm's running time.

In the concrete context of the discrete logarithm problem, already Shoup's original proof shows that the discrete logarithm problem is $2$-moment hard in the generic-group model, and thus our assumption can be viewed as a highly-plausible strengthening of the discrete logarithm assumption in any group where no better-than-generic algorithms are currently known. Applying our high-moment forking lemma in this context shows that, assuming the $2$-moment hardness of the discrete logarithm problem, any $t$-time attacker breaks the security of the Schnorr identification and signature schemes with probabilities at most $(t^2/p)^{2/3}$ and $(q_{\mathcal{H}} \cdot t^2/p)^{2/3}$, respectively.
