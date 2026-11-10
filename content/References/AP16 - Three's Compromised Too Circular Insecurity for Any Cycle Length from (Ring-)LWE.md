---
type: reference
status: stub
title: "AP16"
source: https://eprint.iacr.org/2016/110
authors: Navid Alamati, Chris Peikert
venue: CRYPTO 2016
published: 2016
aliases:
  - AP16
cryptobib_key: C:AlaPei16
---

# [AP16] Three's Compromised Too: Circular Insecurity for Any Cycle Length from (Ring-)LWE

**Authors:** Navid Alamati, Chris Peikert | **Venue:** CRYPTO 2016 | [Source](https://eprint.iacr.org/2016/110)

## Abstract

Informally, a public-key encryption scheme is
_$k$-circular secure_ if a cycle of $k$ encrypted secret keys
$(\Enc_{\pk_{1}}(\sk_{2}), \Enc_{\pk_{2}}(\sk_{3}), \ldots, \Enc_{\pk_{k}}(\sk_{1}))$
is indistinguishable from encryptions of zeros. Circular security has
applications in a wide variety of settings, ranging from security of
symbolic protocols to fully homomorphic encryption. A fundamental
question is whether standard security notions like IND-CPA/CCA imply
$k$-circular security.

For the case $k=2$, several works over the past years have constructed
counterexamples—i.e., schemes that are CPA or even CCA secure but
not $2$-circular secure—under a variety of well-studied assumptions
(SXDH, decision linear, and LWE). However, for $k > 2$ the only known
counterexamples are based on strong general-purpose obfuscation
assumptions.

In this work we construct $k$-circular security counterexamples for
any $k \geq 2$ based on (ring-)LWE. Specifically:

- for any constant $k=O(1)$, we construct a counterexample based on $n$-dimensional (plain) LWE for $\poly(n)$ approximation factors;
- for any $k=\poly(\lambda)$, we construct one based on degree-$n$ ring-LWE for at most subexponential $\exp(n^{\varepsilon})$ factors.

Moreover, both schemes are $k'$-circular insecure for
$2 \leq k' \leq k$.

Notably, our ring-LWE construction does not immediately translate to
an LWE-based one, because matrix multiplication is not commutative. To
overcome this, we introduce a new “tensored” variant of LWE which
provides the desired commutativity, and which we prove is actually
equivalent to plain LWE.
