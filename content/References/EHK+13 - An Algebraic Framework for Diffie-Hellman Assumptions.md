---
type: reference
status: stub
title: "EHK+13"
source: https://eprint.iacr.org/2013/377
authors: Alex Escala, Gottfried Herold, Eike Kiltz, Carla Ràfols, Jorge Villar
venue: CRYPTO 2013
published: 2013
aliases:
  - EHK+13
cryptobib_key: C:EHKRV13
---

# [EHK+13] An Algebraic Framework for Diffie-Hellman Assumptions

**Authors:** Alex Escala, Gottfried Herold, Eike Kiltz, Carla Ràfols, Jorge Villar | **Venue:** CRYPTO 2013 | [Source](https://eprint.iacr.org/2013/377)

## Abstract

We put forward a new algebraic framework to generalize and
analyze Diffie-Hellman like Decisional Assumptions which allows
us to argue about security and applications by considering only algebraic properties.
Our $D_{\ell,k}$-MDDH assumption states that it is hard to decide whether
a vector in $G^\ell$ is linearly dependent of the columns of some matrix in $G^{\ell\times k}$ sampled according to distribution $D_{\ell,k}$.
It covers known assumptions such as $DDH$, 2-Lin (linear assumption), and $k$-Lin (the $k$-linear assumption).
Using our algebraic viewpoint, we can relate the generic hardness of our assumptions in $m$-linear groups to the irreducibility of certain polynomials which describe the output of $D_{\ell,k}$.
We use the hardness results to find new distributions for which the $D_{\ell,k}$-MDDH-Assumption holds generically in $m$-linear groups.
In particular, our new assumptions 2-SCasc and 2-ILin are generically hard in bilinear groups and, compared to 2-Lin, have shorter description size, which is a relevant parameter for efficiency in many applications.
These results support using our new assumptions as natural replacements for the 2-Lin Assumption which was already used in a large number of applications.

To illustrate the conceptual advantages of our algebraic framework, we construct several fundamental primitives based on any $MDDH$-Assumption. In particular, we can give many instantiations of a primitive in a compact way, including public-key encryption, hash-proof systems, pseudo-random functions, and Groth-Sahai NIZK and NIWI proofs.
As an independent contribution we give more efficient NIZK and NIWI proofs for membership in a subgroup of $G^\ell$, for validity of ciphertexts and for equality of plaintexts. The results imply very significant efficiency improvements for a large number of schemes, most notably Naor-Yung type of constructions.
