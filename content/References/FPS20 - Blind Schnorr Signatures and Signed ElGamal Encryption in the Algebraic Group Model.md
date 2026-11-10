---
type: reference
status: stub
title: "FPS20"
source: https://eprint.iacr.org/2019/877
authors: Georg Fuchsbauer, Antoine Plouviez, Yannick Seurin
venue: EUROCRYPT 2020
published: 2020
aliases:
  - FPS20
cryptobib_key: EC:FucPloSeu20
---

# [FPS20] Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model

**Authors:** Georg Fuchsbauer, Antoine Plouviez, Yannick Seurin | **Venue:** EUROCRYPT 2020 | [Source](https://eprint.iacr.org/2019/877)

## Abstract

The Schnorr blind signing protocol allows blind issuing of Schnorr signatures, one of the most widely used signatures. Despite its practical relevance, its security analysis is unsatisfactory. The only known security proof is rather informal and in the combination of the generic group model (GGM) and the random oracle model (ROM) assuming that the “ROS problem” is hard. The situation is similar for (Schnorr-)signed ElGamal encryption, a simple CCA2-secure variant of ElGamal.

We analyze the security of these schemes in the algebraic group model (AGM), an idealized model closer to the standard model than the GGM. We first prove tight security of Schnorr signatures from the discrete logarithm assumption (DL) in the AGM+ROM. We then give a rigorous proof for blind Schnorr signatures in the AGM+ROM assuming hardness of the one-more discrete logarithm problem and ROS.

As ROS can be solved in sub-exponential time using Wagner's algorithm, we propose a simple modification of the signing protocol, which leaves the signatures unchanged. It is therefore compatible with systems that already use Schnorr signatures, such as blockchain protocols. We show that the security of our modified scheme relies on the hardness of a problem related to ROS that appears much harder.

Finally, we give tight reductions, again in the AGM+ROM, of the CCA2 security of signed ElGamal encryption to DDH and signed hashed ElGamal key encapsulation to DL.
