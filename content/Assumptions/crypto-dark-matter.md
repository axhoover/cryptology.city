---
aliases:
  - CDM
  - Crypto Dark Matter
title: Crypto Dark Matter
---

# Crypto Dark Matter

_Crypto Dark Matter_ refers to a family of candidate [[pseudorandom-function|PRF]] constructions proposed by Boneh, Ishai, Passelègue, Sahai, and Wu — [[BIP+18 - Exploring Crypto Dark Matter New Simple PRF Candidates and Their Applications|BIP+18]]. The constructions mix operations in different algebraic domains — specifically, linear operations over $\ZZ_2$ (XOR) and over $\ZZ_3$ (mod-3 addition) — to build PRFs that are conjectured to be secure under new "mixed moduli" assumptions not known to be equivalent to standard assumptions like [[learning-with-errors|LWE]] or [[learning-parity-with-noise|LPN]].

The name reflects the idea that large regions of the cryptographic assumption landscape are unexplored ("dark"), and these constructions explore that space.

## Assumption

The core hardness assumption concerns the difficulty of distinguishing the output of a "mod-2/mod-3" computation from random. Let $f : \{0,1\}^n \to \{0,1\}^m$ be defined by alternating linear layers over $\FF_2$ and $\FF_3$ applied to the input bits (treating bits as elements of both fields simultaneously). The assumption is that no efficient adversary can distinguish $f(x)$ from uniform even given arbitrary queries.

Formal variants include:

- **$(2,3)$-mixed moduli LWE**: a variant of LWE where some operations are mod-2 and others are mod-3
- **Low-complexity PRF conjecture**: the existence of a PRF computable in $\mathrm{NC}^1$ or even $\mathrm{TC}^0$

## Known Results

- Low-complexity PRF candidates (in $\mathrm{NC}^1$ / $\mathrm{TC}^0$) based on mixed-moduli assumptions — [[BIP+18 - Exploring Crypto Dark Matter New Simple PRF Candidates and Their Applications|BIP+18]]
- Mixed-moduli PRFs → applications in MPC with low-communication preprocessing, leakage-resilient PRFs, and more — [[BIP+18 - Exploring Crypto Dark Matter New Simple PRF Candidates and Their Applications|BIP+18]]
- Low-complexity PRG in $\mathrm{NC}^1$ is required by the iO construction from well-founded assumptions — [[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]]
- The assumption is not known to follow from or imply standard lattice assumptions

# Variations

## Low-complexity PRFs (in $\mathrm{NC}^1$ / $\mathrm{TC}^0$)

Separate from CDM, there is interest in PRFs computable by low-complexity circuits. A PRF in $\mathrm{TC}^0$ (constant depth, threshold gates) would have strong implications for MPC efficiency.

## Pseudorandom correlation generators (PCG)

A related paradigm where short seeds expand to long correlated randomness useful in MPC; CDM-style assumptions can ground efficient PCG constructions.

# Attacks

- Ongoing cryptanalytic attention; several early CDM candidates have been partially broken or weakened
- Algebraic attacks exploiting the mixed-moduli structure (Gröbner basis methods, linearization) remain the primary avenue
- No full break of the core constructions in [[BIP+18 - Exploring Crypto Dark Matter New Simple PRF Candidates and Their Applications|BIP+18]] is known
