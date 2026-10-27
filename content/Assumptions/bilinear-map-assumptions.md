---
type: assumption
status: draft
aliases:
  - BDH
  - BDDH
  - DBDH
  - Bilinear map assumptions
  - Pairing assumptions
  - BDH assumption
  - Bilinear Diffie-Hellman
title: Bilinear map assumptions
id: bdh
variants:
  k-linear-assumption: "#k-linear-assumption"
  n-bdhe: "#decision-n-bdhe"
  dbdh: "#decisional-bdh"
  subgroup-decision: "#subgroup-decision"
---

# Bilinear map assumptions

_Bilinear map (pairing) assumptions_ concern the computational hardness of certain problems in groups $\GG_1, \GG_2, \GG_T$ equipped with a bilinear pairing $e : \GG_1 \times \GG_2 \to \GG_T$, where $e(g_1^a, g_2^b) = e(g_1, g_2)^{ab}$ for generators $g_i$.

## Assumption

**Bilinear Diffie-Hellman (BDH):** Given $(g, g^a, g^b, g^c) \in \GG^4$ for a symmetric pairing group $e : \GG \times \GG \to \GG_T$, compute $e(g, g)^{abc} \in \GG_T$.

$$
\Adv^{\mathrm{bdh}}_{\calA}(\secpar) := \Pr\!\left[\calA(1^\secpar, g, g^a, g^b, g^c) = e(g,g)^{abc}\right]
$$

is negligible for uniform $a, b, c \getsr \ZZ_q$.

### Decisional BDH

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

A pairing can be symmetric ($\GG_1 = \GG_2$) or asymmetric ($\GG_1 \ne \GG_2$). Asymmetric pairings (Type 3) support stronger assumptions ([[decisional-diffie-hellman#sxdh-symmetric-external-diffie-hellman|SXDH]]: DDH is hard in both $\GG_1$ and $\GG_2$) and are used in most modern constructions. See [[pairings|Pairings]] for the full Type 1/2/3 classification and efficiency trade-offs — [[GPS06 - Pairings for Cryptographers|GPS06]].

## $k$-Linear assumption

Generalizes DLIN: given $k$ random group elements and their DH combinations, decide if an additional element is in the span. For $k = 1$: DDH; for $k = 2$: DLIN.

## Decision $n$-BDHE

Given $(g, h, g^{\alpha}, \ldots, g^{\alpha^n}, g^{\alpha^{n+2}}, \ldots, g^{\alpha^{2n}})$ for a symmetric pairing $e : \GG \times \GG \to \GG_T$ with generator $g$, $h \getsr \GG$, and $\alpha \getsr \ZZ_q$, distinguish $e(g,h)^{\alpha^{n+1}}$ from uniform in $\GG_T$ — [[BGW05 - Collusion Resistant Broadcast Encryption with Short Ciphertexts and Private Keys|BGW05]].

## Subgroup decision

Let $\GrGen(1^\secpar)$ output $(q_1, q_2, \GG, \GG_T, e, g)$: distinct primes $q_1, q_2$, cyclic groups $\GG$ and $\GG_T$ of order $N = q_1 q_2$, a generator $g$ of $\GG$, and a non-degenerate bilinear map $e : \GG \times \GG \to \GG_T$. The adversary receives $N$ but not its factors. For $x \getsr \GG$, the element $x^{q_2}$ is uniform in the order-$q_1$ subgroup of $\GG$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{sd}}_{\GrGen,\calA}(\secpar)$}
\begin{algorithmic}
\State $(q_1, q_2, \GG, \GG_T, e, g) \gets \GrGen(1^\secpar)$; $N \gets q_1 q_2$
\State $x \getsr \GG$; $b \getsr \bits$
\State $x_0 \gets x$; $x_1 \gets x^{q_2}$
\Comment{$x_1$ is uniform in the order-$q_1$ subgroup}
\State $b' \gets \calA(N, \GG, \GG_T, e, g, x_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

The **subgroup decision assumption holds** for $\GrGen$ if for all efficient $\calA$,

$$
\Adv^{\mathrm{sd}}_{\GrGen,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{sd}}_{\GrGen,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible — [[BGN05 - Evaluating 2-DNF Formulas on Ciphertexts|BGN05]].

# Attacks

- The MOV/Frey-Rück attack reduces the discrete log in $\GG$ to discrete log in $\GG_T$ via the pairing; for small embedding degree this is devastating
- Index calculus algorithms are effective in $\GG_T$ and motivate the need for large embedding degree
- Quantum: Shor's algorithm breaks discrete log in all pairing groups — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]]

<!-- BEGIN GENERATED participates-in e7da95987b4a -->

## Participates in

**Builds on Bilinear map assumptions**

- [[bdh-to-abe-gpsw06|BDH ⇒ ABE]]
- [[bdh-to-be-bgw05|n-BDHE ⇒ BE]] (via [Decision $n$-BDHE](bilinear-map-assumptions#decision-n-bdhe))
- [[cdh-to-bdh|BDH ⇒ CDH]]
- [[bdh-to-hibe-wat09|DBDH + DLIN ⇒ HIBE]]
- [[bdh-to-hve-bw07|BDH ⇒ HVE]]
- [[bdh-to-ibe-bf01|BDH ⇒ IBE (random oracle model)]]
- [[bdh-to-ibe-wat09|DBDH + DLIN ⇒ IBE]]
- [[bdh-to-vrf|k-Lin ⇒ VRF]] (via [$k$-Linear assumption](bilinear-map-assumptions#k-linear-assumption))
- [[bilinear-pairing-and-k-linear-assumption-to-barg-for-np-ww22|Bilinear pairing + k-Lin ⇒ BARG for NP]] (via [$k$-Linear assumption](bilinear-map-assumptions#k-linear-assumption))
- [[dbdh-to-bdh|DBDH ⇒ BDH]] (via [[bilinear-map-assumptions#decisional-bdh|Decisional BDH]])
- [[dbdh-to-ibe-wat05|DBDH ⇒ IBE (Waters, standard model)]] (via [[bilinear-map-assumptions#decisional-bdh|Decisional BDH]])
- [[dbdh-to-ind-sid-cpa-bb04|DBDH ⇒ Selectively secure IBE (Boneh–Boyen)]] (via [[bilinear-map-assumptions#decisional-bdh|Decisional BDH]])
- [[dbdh-to-three-party-nike-jou04|DBDH ⇒ Three-party NIKE (Joux)]] (via [[bilinear-map-assumptions#decisional-bdh|Decisional BDH]])
- [$k$-Linear assumption ⇒ ABE](k-linear-assumption-to-abe-rw13) (via [$k$-Linear assumption](bilinear-map-assumptions#k-linear-assumption))
- [[subgroup-decision-to-nonadaptive-nizk-argument-for-np-gos06a|Subgroup decision ⇒ Perfect NIZK arguments for NP]] (via [[bilinear-map-assumptions#subgroup-decision|Subgroup decision]])

**Produces Bilinear map assumptions**

- [[dbdh-to-bdh|DBDH ⇒ BDH]]

<!-- END GENERATED participates-in -->
