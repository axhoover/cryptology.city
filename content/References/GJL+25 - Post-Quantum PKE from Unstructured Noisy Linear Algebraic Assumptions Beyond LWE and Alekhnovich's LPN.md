---
title: "GJL+25"
source: https://eprint.iacr.org/2025/844
authors: Riddhi Ghosal, Aayush Jain, Paul Lou, Amit Sahai, Neekon Vafa
venue: Eurocrypt 2025
published: 2025-05-12
created: 2025-05-16
aliases:
  - GJL+25
tags:
  - Eurocrypt

---
# [GJL+25] Post-Quantum PKE from Unstructured Noisy Linear Algebraic Assumptions: Beyond LWE and Alekhnovich's LPN

**Authors:** Riddhi Ghosal, Aayush Jain, Paul Lou, Amit Sahai, Neekon Vafa | **Venue:** Eurocrypt 2025 | [Source](https://eprint.iacr.org/2025/844)

## Abstract
Noisy linear algebraic assumptions with respect to random matrices, in particular Learning with Errors ($\mathsf{LWE}$) and Alekhnovich Learning Parity with Noise (Alekhnovich $\mathsf{LPN}$), are among the most investigated assumptions that imply post-quantum public-key encryption (PKE). They enjoy elegant mathematical structure. Indeed, efforts to build post-quantum PKE and advanced primitives such as homomorphic encryption and indistinguishability obfuscation have increasingly focused their attention on these two assumptions and their variants.

Unfortunately, this increasing reliance on these two assumptions for building post-quantum cryptography leaves us vulnerable to potential quantum (and classical) attacks on Alekhnovich $\mathsf{LPN}$ and $\mathsf{LWE}$. Quantum algorithms is a rapidly advancing area, and we must stay prepared for unexpected cryptanalytic breakthroughs. Just three decades ago, a short time frame in the development of our field, Shor's algorithm rendered most then-popular number theoretic and algebraic assumptions quantumly broken. Furthermore, within the last several years, we have witnessed major classical and quantum breaks on several assumptions previously introduced for post-quantum cryptography. Therefore, we ask the following question:

In a world where both $\mathsf{LWE}$ and Alekhnovich $\mathsf{LPN}$ are broken, can there still exist noisy linear assumptions that remain plausibly quantum hard and imply PKE?

To answer this question positively, we introduce two natural noisy-linear algebraic assumptions that are both with respect to random matrices, exactly like $\mathsf{LWE}$ and Alekhnovich $\mathsf{LPN}$, but with different error distributions. Our error distribution combines aspects of both small norm and sparse error distributions. We design a PKE from these assumptions and give evidence that these assumptions are likely to still be secure even in a world where both the $\mathsf{LWE}$ and Alekhnovich $\mathsf{LPN}$ assumptions are simultaneously broken. We also study basic properties of these assumptions, and show that in the parameter settings we employ to build PKE, neither of them are "lattice" assumptions in the sense that we don't see a way to attack them using a lattice closest vector problem solver, except via $\mathsf{NP}$-completeness reductions.