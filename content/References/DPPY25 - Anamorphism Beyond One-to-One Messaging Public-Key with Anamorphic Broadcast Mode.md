---
title: "DPPY25"
source: https://link.springer.com/chapter/10.1007/978-3-031-91131-6_15
authors: "Xuan Thanh Do, Giuseppe Persiano, Duong Hieu Phan, Moti Yung "
venue: Eurocrypt 2025
published: 2025-04-28
created: 2025-05-06
aliases:
  - DPPY25
tags:
  - Eurocrypt

---
# [DPPY25] Anamorphism Beyond One-to-One Messaging: Public-Key with Anamorphic Broadcast Mode

**Authors:** Xuan Thanh Do, Giuseppe Persiano, Duong Hieu Phan, Moti Yung  | **Venue:** Eurocrypt 2025 | [Source](https://link.springer.com/chapter/10.1007/978-3-031-91131-6_15)

## Abstract
To date, Anamorphic Cryptography [EC22] has been developed to support adding an anamorphic message within a ciphertext carrying a primary message. The anamorphic message remains hidden even in the presence of a strong adversary that possesses the receiver’s key and/or determined the sent primary message. In this paper, we expand one-to-one encrypted anamorphic communication to one-to-many anamorphism, naturally assuming communication over a broadcast channel. What we show is that using a previously designed public-key encryption scheme, two things can happen: First, the receiver of an added hidden message may be a party different from the actual receiver (i.e., a shadow party) who has initially collaborated with the sender. Secondly, and perhaps more surprisingly, the receiving party need not be a singleton, and can be a number of different shadow (i.e., anonymous) groups, each receiving a different anamorphic message, where all these messages are extracted from a single one-receiver ciphertext. The idea of having multiple hidden channels to different shadow groups is highly handy if, for example, the anamorphic messages are warnings with operational instructions, sent to the groups and will be received by a group even if the adversary is able to temporarily cut off all but one members of a channel. More specifically,

* First, we motivate and formalize the notion of *Public-Key Encryption with an Anamorphic Broadcast Mode*. 
* We then present, as an initial result of an independent interest, the first lattice-based construction of *Anonymous Multi-Channel Broadcast Encryption*. It is important to note here that all Multi-Channel Broadcast schemes to date are in the pairing-based setting (and are, thus, insecure against quantum adversaries).
* Finally, we show how to transform a strong form of anonymity (where the ciphertext also hides the number of channels) into a system with anamorphism in the multi-channel broadcast setting for the well-known Dual Regev Public-Key Encryption scheme. Specifically, we show that, given the public key $\textsf{pk}$ for the Dual Regev encryption scheme, and a sequence of $\ell$ messages for the $\ell$ channels of broadcast scheme, it is possible to create a ciphertext that will carry the $\ell$ messages and is also a legitimate ciphertext for $\textsf{pk}$.