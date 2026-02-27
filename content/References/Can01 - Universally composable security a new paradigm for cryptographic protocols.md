---
title: "Universally composable security: a new paradigm for cryptographic protocols"
source: https://ieeexplore.ieee.org/abstract/document/959888
authors: Ran Canetti
venue: FOCS 2001, JACM 2020
published: 2001-06-01
aliases:
  - Canetti01
  - Can01
---
# Universally composable security: a new paradigm for cryptographic protocols
URL: https://ieeexplore.ieee.org/abstract/document/959888
Authors: Ran Canetti

## Abstract
We propose a novel paradigm for defining security of cryptographic protocols, called universally composable security. The salient property of universally composable definitions of security is that they guarantee security even when a secure protocol is composed of an arbitrary set of protocols, or more generally when the protocol is used as a component of an arbitrary system. This is an essential property for maintaining security of cryptographic protocols in complex and unpredictable environments such as the Internet. In particular, universally composable definitions guarantee security even when an unbounded number of protocol instances are executed concurrently in an adversarially controlled manner, they guarantee non-malleability with respect to arbitrary protocols, and more. We show how to formulate universally composable definitions of security for practically any cryptographic task. Furthermore, we demonstrate that practically any such definition can be realized using known techniques, as long as only a minority of the participants are corrupted. We then proceed to formulate universally composable definitions of a wide array of cryptographic tasks, including authenticated and secure communication, key-exchange, public-key encryption, signature, commitment, oblivious transfer, zero knowledge and more. We also make initial steps towards studying the realizability of the proposed definitions in various settings.