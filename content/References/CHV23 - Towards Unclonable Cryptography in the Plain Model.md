---
type: reference
status: stub
title: "CHV23"
source: https://eprint.iacr.org/2023/1825
authors: Céline Chevalier, Paul Hermouet, Quoc-Huy Vu
venue: preprint
published: 2023
aliases:
  - CHV23
cryptobib_key: EPRINT:CheHerVu23b
---

# [CHV23] Towards Unclonable Cryptography in the Plain Model

**Authors:** Céline Chevalier, Paul Hermouet, Quoc-Huy Vu | **Venue:** preprint | [Source](https://eprint.iacr.org/2023/1825)

## Abstract

By leveraging the no-cloning principle of quantum mechanics, unclonable cryptography enables us to achieve novel cryptographic protocols that are otherwise impossible classically. Two most notable examples of unclonable cryptography are quantum copy-protection and unclonable encryption. Most known constructions rely on the quantum random oracle model (as opposed to the plain model), in which all parties have access in superposition to a powerful random oracle. Despite receiving a lot of attention in recent years, two important open questions still remain: copy-protection for point functions in the plain model, which is usually considered as feasibility demonstration, and unclonable encryption with unclonable indistinguishability security in the plain model. A core ingredient of these protocols is the so-called monogamy-of-entanglement property. Such games allow quantifying the correlations between the outcomes of multiple non-communicating parties sharing entanglement in a particular context. Specifically, we define the games between a challenger and three players in which the first player is asked to split and share a quantum state between the two others, who are then simultaneously asked a question and need to output the correct answer.

In this work, by relying on previous works of Coladangelo, Liu, Liu, and Zhandry (Crypto'21) and Culf and Vidick (Quantum'22), we establish a new monogamy-of-entanglement property for subspace coset states, which allows us to progress towards the aforementioned goals.

However, it is not sufficient on its own, and we present two conjectures that would allow first to show that copy-protection of point functions exists in the plain model, with different challenge distributions (including arguably the most natural ones), and then that unclonable encryption with unclonable indistinguishability security exists in the plain model.

We believe that our new monogamy-of-entanglement to be of independent interest, and it could be useful in other applications as well. To highlight this last point, we leverage our new monogamy-of-entanglement property to show the existence of a tokenized signature scheme with a new security definition, called unclonable unforgeability.
