---
type: assumption
status: draft
aliases:
  - BDH
  - BDDH
  - DBDH
  - DLIN
  - Bilinear map assumptions
  - Pairing assumptions
  - BDH assumption
  - Bilinear Diffie-Hellman
title: Bilinear map assumptions
id: bdh
variants:
  sxdh: "#sxdh-symmetric-external-diffie-hellman"
  k-linear-assumption: "#k-linear-assumption"
  n-bdhe: "#decision-n-bdhe"
---

# Bilinear map assumptions

_Bilinear map (pairing) assumptions_ concern the computational hardness of certain problems in groups $\GG_1, \GG_2, \GG_T$ equipped with a bilinear pairing $e : \GG_1 \times \GG_2 \to \GG_T$, where $e(g_1^a, g_2^b) = e(g_1, g_2)^{ab}$ for generators $g_i$.

## Assumption

**Bilinear Diffie-Hellman (BDH):** Given $(g, g^a, g^b, g^c) \in \GG^4$ for a symmetric pairing group $e : \GG \times \GG \to \GG_T$, compute $e(g, g)^{abc} \in \GG_T$.

$$
\Adv^{\mathrm{bdh}}_{\calA}(\secpar) := \Pr\!\left[\calA(1^\secpar, g, g^a, g^b, g^c) = e(g,g)^{abc}\right]
$$

is negligible for uniform $a, b, c \getsr \ZZ_q$.

**Decisional BDH (DBDH / BDDH):** Distinguish $(g, g^a, g^b, g^c, e(g,g)^{abc})$ from $(g, g^a, g^b, g^c, e(g,g)^r)$ for random $r \getsr \ZZ_q$.

## Known Results

- [[bdh-to-ibe-wat09|DBDH + DLIN ⇒ IBE]]
- [[co-cdh-to-ds|co-CDH ⇒ DS]]
- [[bdh-to-vrf|k-Lin ⇒ VRF]]
- [[cdh-to-bdh|BDH ⇒ CDH]]: a CDH solver gives $g^{ab}$, and $e(g^{ab}, g^c) = e(g,g)^{abc}$ — [[BF01 - Identity-Based Encryption from the Weil Pairing|BF01]]
- [[bdh-to-nizk-gro16|DLIN ⇒ NIZK]]
- Quantum computers break all pairing-based assumptions by running Shor's algorithm on $\GG_T$ — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]]

# Variations

## Symmetric vs. asymmetric pairings

A pairing can be symmetric ($\GG_1 = \GG_2$) or asymmetric ($\GG_1 \ne \GG_2$). Asymmetric pairings (Type 3) support stronger assumptions (SXDH: DDH is hard in both $\GG_1$ and $\GG_2$) and are used in most modern constructions. See [[pairings|Pairings]] for the full Type 1/2/3 classification and efficiency trade-offs — [[GPS06 - Pairings for Cryptographers|GPS06]].

## $k$-Linear assumption

Generalizes DLIN: given $k$ random group elements and their DH combinations, decide if an additional element is in the span. For $k = 1$: DDH; for $k = 2$: DLIN.

## SXDH (Symmetric External Diffie-Hellman)

Assumes DDH is hard in both $\GG_1$ and $\GG_2$ of an asymmetric (Type 3) pairing; used to instantiate Groth–Sahai proofs efficiently — [[GS08 - Efficient Non-interactive Proof Systems for Bilinear Groups|GS08]].

## Decision $n$-BDHE

Given $(g, h, g^{\alpha}, \ldots, g^{\alpha^n}, g^{\alpha^{n+2}}, \ldots, g^{\alpha^{2n}})$ for a symmetric pairing $e : \GG \times \GG \to \GG_T$ with generator $g$, $h \getsr \GG$, and $\alpha \getsr \ZZ_q$, distinguish $e(g,h)^{\alpha^{n+1}}$ from uniform in $\GG_T$ — [[BGW05 - Collusion Resistant Broadcast Encryption with Short Ciphertexts and Private Keys|BGW05]].

# Attacks

- The MOV/Frey-Rück attack reduces the discrete log in $\GG$ to discrete log in $\GG_T$ via the pairing; for small embedding degree this is devastating
- Index calculus algorithms are effective in $\GG_T$ and motivate the need for large embedding degree
- Quantum: Shor's algorithm breaks discrete log in all pairing groups — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]]

<!-- BEGIN GENERATED participates-in 71c06d0862c2 -->

## Participates in

**Builds on Bilinear map assumptions**

- [[bdh-to-abe-gpsw06|BDH ⇒ ABE]]
- [[bdh-to-be-bgw05|n-BDHE ⇒ BE]] (via [[bilinear-map-assumptions#decision-n-bdhe|n-bdhe]])
- [[cdh-to-bdh|BDH ⇒ CDH]]
- [[bdh-to-hibe-wat09|DBDH + DLIN ⇒ HIBE]]
- [[bdh-to-hve-bw07|BDH ⇒ HVE]]
- [[bdh-to-ibe-bf01|BDH ⇒ IBE (random oracle model)]]
- [[bdh-to-ibe-wat09|DBDH + DLIN ⇒ IBE]]
- [[bdh-to-vrf|k-Lin ⇒ VRF]] (via [[bilinear-map-assumptions#k-linear-assumption|k-linear-assumption]])
- [[ddh-and-lpn-and-lwe-and-nc1-prg-to-io-jls21|SXDH + LWE + LPN + NC0-PRG ⇒ iO]] (via [[bilinear-map-assumptions#sxdh-symmetric-external-diffie-hellman|sxdh]])
- [[k-linear-assumption-to-abe-rw13|$k$-Linear assumption ⇒ ABE]] (via [[bilinear-map-assumptions#k-linear-assumption|k-linear-assumption]])
- [[sxdh-symmetric-external-diffie-hellman-to-nizk|SXDH (Symmetric External Diffie-Hellman) ⇒ NIZK]] (via [[bilinear-map-assumptions#sxdh-symmetric-external-diffie-hellman|sxdh]])

<!-- END GENERATED participates-in -->
