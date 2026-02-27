---
title: Trapdoor Hash Functions and Their Applications
source: https://eprint.iacr.org/2019/639
authors: Nico Döttling, Sanjam Garg, Yuval Ishai, Giulio Malavolta, Tamer Mour, and Rafail Ostrovsky
venue: CRYPTO 2019
published: 2019-06-03
aliases:
  - DGI+19
---
# Trapdoor Hash Functions and Their Applications
URL: https://eprint.iacr.org/2019/639
Authors: Nico Döttling, Sanjam Garg, Yuval Ishai, Giulio Malavolta, Tamer Mour, and Rafail Ostrovsky

## Abstract
We introduce a new primitive, called trapdoor hash functions (TDH), which are hash functions H:{0,1}n→{0,1}sec with additional trapdoor function-like properties. Specifically, given an index i∈[n], TDHs allow for sampling an encoding key ek (that hides i) along with a corresponding trapdoor. Furthermore, given H(x), a hint value E(ek,x), and the trapdoor corresponding to ek, the ith bit of x can be efficiently recovered. In this setting, one of our main questions is: How small can the hint value E(ek,x) be? We obtain constructions where the hint is only one bit long based on DDH, QR, DCR, or LWE.

This primitive opens a floodgate of applications for low-communication secure computation.

We mainly focus on two-message protocols between a receiver and a sender, with private inputs x and y, resp., where the receiver should learn f(x,y). We wish to optimize the (download) rate of such protocols, namely the asymptotic ratio between the size of the output and the sender's message. Using TDHs, we obtain:
1. The first protocols for (two-message) rate-1 string OT based on DDH, QR, or LWE. This has several useful consequences, such as:
	1. (a) The first constructions of PIR with communication cost poly-logarithmic in the database size based on DDH or QR. These protocols are in fact rate-1 when considering block PIR.
	2. (b) The first constructions of a semi-compact homomorphic encryption scheme for branching programs, where the encrypted output grows only with the program length, based on DDH or QR.
	3. (c) The first constructions of lossy trapdoor functions with input to output ratio approaching 1 based on DDH, QR or LWE.
	4. (d) The first constant-rate LWE-based construction of a 2-message "statistically sender-private" OT protocol in the plain model.
2. The first rate-1 protocols (under any assumption) for n parallel OTs and matrix-vector products from DDH, QR or LWE. 
We further consider the setting where f evaluates a RAM program y with running time T≪|x| on x. We obtain the first protocols with communication sublinear in the size of x, namely T⋅|x| or T⋅|x|3, based on DDH or, resp., pairings (and correlated-input secure hash functions).