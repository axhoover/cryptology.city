---
title: Oblivious Transfer from Weak Noisy Channels
source: https://eprint.iacr.org/2008/420
authors: Jürg Wullschleger
venue: TCC 2009
published: 2008-10-01
aliases:
  - Wullschleger09
  - Wul09
---
# Oblivious Transfer from Weak Noisy Channels
URL: https://eprint.iacr.org/2008/420
Authors: Jürg Wullschleger

## Abstract
Various results show that oblivious transfer can be implemented using the assumption of noisy channels. Unfortunately, this assumption is not as weak as one might think, because in a cryptographic setting, these noisy channels must satisfy very strong security requirements.

Unfair noisy channels, introduced by Damgard, Kilian and Salvail [Eurocrypt '99], reduce these limitations: They give the adversary an unfair advantage over the honest player, and therefore weaken the security requirements on the noisy channel. However, this model still has many shortcomings: For example, the adversary's advantage is only allowed to have a very special form, and no error is allowed in the implementation.

In this paper we generalize the idea of unfair noisy channels. We introduce two new models of cryptographic noisy channels that we call the weak erasure channel and the weak binary symmetric channel, and show how they can be used to implement oblivious transfer. Our models
are more general and use much weaker assumptions than unfair noisy channels, which makes implementation a more realistic prospect. For example, these are the first models that allows the parameters to come from experimental evidence.