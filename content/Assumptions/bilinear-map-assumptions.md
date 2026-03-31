---
aliases:
  - BDH
  - BDDH
  - DLIN
  - Bilinear map assumptions
  - Pairing assumptions
  - BDH assumption
  - Bilinear Diffie-Hellman
title: Bilinear map assumptions
---

# Bilinear map assumptions

_Bilinear map (pairing) assumptions_ concern the computational hardness of certain problems in groups $\GG_1, \GG_2, \GG_T$ equipped with a bilinear pairing $e : \GG_1 \times \GG_2 \to \GG_T$, where $e(g_1^a, g_2^b) = e(g_1, g_2)^{ab}$ for generators $g_i$. Pairings enable cryptographic primitives not known to be constructible from [[decisional-diffie-hellman|DDH]] alone, including identity-based encryption and short signatures.

## Assumption

**Bilinear Diffie-Hellman (BDH):** Given $(g, g^a, g^b, g^c) \in \GG^4$ for a symmetric pairing group $e : \GG \times \GG \to \GG_T$, compute $e(g, g)^{abc} \in \GG_T$.

$$
\Adv^{\mathrm{bdh}}_{\calA}(\secpar) := \Pr\!\left[\calA(1^\secpar, g, g^a, g^b, g^c) = e(g,g)^{abc}\right]
$$

is negligible for uniform $a, b, c \getsr \ZZ_q$.

**Decisional BDH (DBDH / BDDH):** Distinguish $(g, g^a, g^b, g^c, e(g,g)^{abc})$ from $(g, g^a, g^b, g^c, e(g,g)^r)$ for random $r \getsr \ZZ_q$.

## Known Results

- BDH → IBE from the Weil pairing (Boneh-Franklin scheme) — standard
- BDDH → short signatures (Boneh-Lynn-Shacham BLS), VRFs, and anonymous credential schemes — standard
- BDH is implied by [[computational-diffie-hellman|CDH]] in the generic group model, but no standard-model reduction is known
- DLIN (Decision Linear) assumption: a generalization of BDDH; more conservative and used in e.g. Groth-Sahai proofs — standard
- Quantum computers break all pairing-based assumptions by running Shor's algorithm on $\GG_T$ — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]]

# Variations

## Symmetric vs. asymmetric pairings

A pairing can be symmetric ($\GG_1 = \GG_2$) or asymmetric ($\GG_1 \ne \GG_2$). Asymmetric pairings (Type-3) support stronger assumptions (SXDH: DDH is hard in both $\GG_1$ and $\GG_2$) and are used in most modern constructions.

## $k$-Linear assumption

Generalizes DLIN: given $k$ random group elements and their DH combinations, decide if an additional element is in the span. For $k = 1$: DDH; for $k = 2$: DLIN.

## SXDH (Symmetric External Diffie-Hellman)

Assumes DDH is hard in both $\GG_1$ and $\GG_2$ of an asymmetric pairing. Stronger than BDDH; used for efficiently instantiating Groth-Sahai proofs.

# Attacks

- The MOV/Frey-Rück attack reduces the discrete log in $\GG$ to discrete log in $\GG_T$ via the pairing; for small embedding degree this is devastating
- Index calculus algorithms are effective in $\GG_T$ and motivate the need for large embedding degree
- Quantum: Shor's algorithm breaks discrete log in all pairing groups — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]]
