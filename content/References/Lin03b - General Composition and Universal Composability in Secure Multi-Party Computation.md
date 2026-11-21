---
type: reference
status: stub
title: "Lin03b"
source: https://eprint.iacr.org/2003/141
authors: Yehuda Lindell
venue: FOCS 2003
published: 2003
aliases:
  - Lin03b
cryptobib_key: FOCS:Lindell03
---

# [Lin03b] General Composition and Universal Composability in Secure Multi-Party Computation

**Authors:** Yehuda Lindell | **Venue:** FOCS 2003 | [Source](https://eprint.iacr.org/2003/141)

## Abstract

_Concurrent general composition_ relates to a setting where a
secure protocol is run in a network concurrently with other,
arbitrary protocols. Clearly, security in such a setting is what is
desired, or even needed, in modern computer networks where many
different protocols are executed concurrently. Canetti (FOCS 2001)
introduced the notion of _universal composability_, and showed
that security under this definition is sufficient for achieving
concurrent general composition. However, it is not known whether or
not the opposite direction also holds.

Our main result is a proof that security under concurrent general
composition, when interpreted in the natural way under the
simulation paradigm, is equivalent to a variant of universal
composability, where the only difference relates to the order of
quantifiers in the definition. (In newer versions of universal
composability, these variants are equivalent.) An important
corollary of this theorem is that existing impossibility results for
universal composability (for all its variants) are inherent for
definitions that imply security under concurrent general
composition, as formulated here. In particular, there are large
classes of two-party functionalities for which _it is
impossible_ to obtain protocols (in the plain model) that remain
secure under concurrent general composition. We stress that the
impossibility results obtained are not "black-box", and apply even
to non-black-box simulation.

Our main result also demonstrates that the definition of universal
composability is somewhat "minimal", in that the composition
guarantee provided by universal composability implies the definition
itself. This indicates that the security definition of universal
composability is not overly restrictive.
