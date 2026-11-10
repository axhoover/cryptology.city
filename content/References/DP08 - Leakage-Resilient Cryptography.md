---
type: reference
status: stub
title: "DP08"
source: https://eprint.iacr.org/2008/240
authors: Stefan Dziembowski, Krzysztof Pietrzak
venue: FOCS 2008
published: 2008
aliases:
  - DP08
cryptobib_key: FOCS:DziPie08
---

# [DP08] Leakage-Resilient Cryptography

**Authors:** Stefan Dziembowski, Krzysztof Pietrzak | **Venue:** FOCS 2008 | [Source](https://eprint.iacr.org/2008/240)

## Abstract

We construct a stream-cipher $\mathsf{SC}$ whose _implementation_ is
secure even if arbitrary (adversely chosen) information on the
internal state of $\mathsf{SC}$ is leaked during computation. This captures
_all_ possible side-channel attacks on $\mathsf{SC}$ where the amount
of information leaked in a given period is bounded, but overall can
be arbitrary large, in particular much larger than the internal
state of $\mathsf{SC}$. The only other assumption we make on the
_implementation_ of $\mathsf{SC}$ is that only data that is accessed
during computation leaks information.

The construction can be based on any pseudorandom generator, and the
only computational assumption we make is that this PRG is secure
against non-uniform adversaries in the classical
sense (i.e. when there are no side-channels).

The stream-cipher $\mathsf{SC}$ generates its output in chunks
$K_1,K_2,\ldots$, and arbitrary but bounded information leakage is
modeled by allowing the adversary to adaptively chose a function
$f_\ell:\bits^*\rightarrow\bits^\lambda$ before $K_\ell$ is computed,
she then gets $f_\ell(\tau_\ell)$ where $\tau_\ell$ is the internal
state of $\mathsf{SC}$ that is accessed during the computation of
$K_\ell$.

One notion of security we prove for $\mathsf{SC}$ is that $K_\ell$
is indistinguishable from random when given $K_1,\ldots,K_{\ell-1}$,
$f_1(\tau_1),\ldots, f_{\ell-1}(\tau_{\ell-1})$ and also the complete
internal state of $\mathsf{SC}$ after $K_{\ell}$ has been computed
(i.e. our cipher is forward-secure).

The construction is based on alternating extraction (previously
used in the intrusion-resilient secret-sharing scheme from
FOCS'07). We move this concept to the computational setting by
proving a lemma that states that the output of any PRG has high HILL
pseudoentropy (i.e. is indistinguishable from some distribution with
high min-entropy) even if arbitrary information about the seed is
leaked. The amount of leakage $\lambda$ that we can tolerate in each
step depends on the strength of the underlying PRG, it is at least
logarithmic, but can be as large as a constant fraction of the
internal state of $\mathsf{SC}$ if the PRG is exponentially hard.
