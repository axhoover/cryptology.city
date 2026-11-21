---
type: reference
status: stub
title: "LMSV11"
source: https://eprint.iacr.org/2010/560
authors: Jake Loftus, Alexander May, Nigel P. Smart, Frederik Vercauteren
venue: SAC 2011
published: 2012
aliases:
  - LMSV11
cryptobib_key: SAC:LMSV11
---

# [LMSV11] On CCA-Secure Somewhat Homomorphic Encryption

**Authors:** Jake Loftus, Alexander May, Nigel P. Smart, Frederik Vercauteren | **Venue:** SAC 2011 | [Source](https://eprint.iacr.org/2010/560)

## Abstract

It is well known that any encryption scheme which supports any form
of homomorphic operation cannot be secure against adaptive chosen ciphertext attacks. The question then arises as to what is the most stringent security definition which is achievable by homomorphic encryption schemes. Prior work has shown that various schemes which support a single homomorphic encryption scheme can be shown to be IND-CCA1, i.e. secure against lunchtime attacks. In this paper we extend this analysis to the recent fully homomorphic encryption scheme proposed by Gentry, as refined by Gentry, Halevi, Smart and Vercauteren. We show that the basic Gentry scheme is not IND-CCA1; indeed a trivial lunchtime attack allows one to recover the secret key. We then show that a minor modification to the variant of the somewhat homomorphic encryption scheme of Smart and Vercauteren will allow one to achieve IND-CCA1, indeed PA-1, in the standard model assuming a lattice based knowledge assumption. We also examine the security of the scheme against another security notion, namely security in the presence of ciphertext validity checking oracles; and show why CCA-like notions are important in applications in which multiple parties submit encrypted data to the “cloud” for secure processing.
