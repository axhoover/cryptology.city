---
type: reference
status: stub
title: "LP07"
source: https://eprint.iacr.org/2008/049
authors: Yehuda Lindell, Benny Pinkas
venue: EUROCRYPT 2007
published: 2007
aliases:
  - LP07
cryptobib_key: EC:LinPin07
---

# [LP07] An Efficient Protocol for Secure Two-Party Computation in the Presence of Malicious Adversaries

**Authors:** Yehuda Lindell, Benny Pinkas | **Venue:** EUROCRYPT 2007 | [Source](https://eprint.iacr.org/2008/049)

## Abstract

We show an efficient secure two-party protocol, based on Yao's construction, which provides security against malicious adversaries. Yao's original protocol is only secure in the presence of semi-honest adversaries, and can be transformed into a protocol that achieves security against malicious adversaries by applying the compiler of Goldreich, Micali and Wigderson (the “GMW compiler”). However, this approach does not seem to be very practical as it requires using generic zero-knowledge proofs.

Our construction is based on applying cut-and-choose techniques to the original circuit and inputs. Security is proved according to the ideal/real simulation paradigm, and the proof is in the standard model (with no random oracle model or common reference string assumptions). The resulting protocol is computationally efficient: the only usage of asymmetric cryptography is for running $O(1)$ oblivious transfers for each input bit (or for each bit of a statistical security parameter, whichever is larger). Our protocol combines techniques from folklore (like cut-and-choose) along with new techniques for efficiently proving consistency of inputs. We remark that a naive implementation of the cut-and-choose technique with Yao's protocol does _not_ yield a secure protocol. This is the first paper to show how to properly implement these techniques, and to provide a full proof of security.

Our protocol can also be interpreted as a constant-round black-box reduction of secure two-party computation to oblivious transfer and perfectly-hiding commitments, or a black-box reduction of secure two-party computation to oblivious transfer alone, with a number of rounds which is linear in a statistical security parameter. These two reductions are comparable to Kilian's reduction, which uses OT alone but incurs a number of rounds which is linear in the depth of the circuit [Kil].
