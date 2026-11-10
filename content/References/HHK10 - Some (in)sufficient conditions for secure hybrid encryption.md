---
type: reference
status: stub
title: "HHK10"
source: https://eprint.iacr.org/2006/265
authors: Javier Herranz, Dennis Hofheinz, Eike Kiltz
venue: "Information and Computation 208(11):1243-1257"
published: 2010
aliases:
  - HHK10
bibtex: |
  @article{HHK10,
    author  = {Javier Herranz and Dennis Hofheinz and Eike Kiltz},
    title   = {Some (in)sufficient conditions for secure hybrid encryption},
    journal = {Information and Computation},
    volume  = {208},
    number  = {11},
    pages   = {1243--1257},
    year    = {2010},
    doi     = {10.1016/j.ic.2010.07.002},
    url     = {https://eprint.iacr.org/2006/265},
  }
---

# [HHK10] Some (in)sufficient conditions for secure hybrid encryption

**Authors:** Javier Herranz, Dennis Hofheinz, Eike Kiltz | **Venue:** Information and Computation 208(11):1243-1257 | [Source](https://eprint.iacr.org/2006/265)

## Abstract

The KEM/DEM hybrid encryption paradigm combines the efficiency and large message space of secret key encryption with the advantages of public key cryptography. Due to its simplicity and flexibility, the approach has ever since gained increased popularity and has been successfully adapted in encryption standards.
In hybrid public key encryption (PKE), first a key encapsulation mechanism (KEM) is used to fix a random session key that is then fed into a highly efficient data encapsulation mechanism (DEM) to encrypt the actual message. A composition theorem states that if both the KEM and the DEM have the highest level of security (i.e. security against chosen-ciphertext attacks), then so does the hybrid PKE scheme. It is not known if these strong security requirements on the KEM and DEM are also neccessary, nor if such general composition theorems exist for weaker levels of security. In this work we study neccessary and sufficient conditions on the security of the KEM and the DEM in order to guarantee a hybrid PKE scheme with a certain given level of security. More precisely, using nine different security notions for KEMs, ten for DEMs, and six for PKE schemes we completely characterize which combinations lead to a secure hybrid PKE scheme (by proving a composition theorem) and which do not (by providing counterexamples).
Furthermore, as an independent result, we revisit and extend prior work on the relation among security notions for KEMs and DEMs.
