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

_Bilinear map (pairing) assumptions_ concern the computational hardness of certain problems in groups $\GG_1, \GG_2, \GG_T$ equipped with a non-degenerate [[pairings|bilinear pairing]] $e : \GG_1 \times \GG_2 \to \GG_T$: for generators $g_1, g_2$ of $\GG_1, \GG_2$, $e(g_1, g_2)$ generates $\GG_T$ and $e(g_1^a, g_2^b) = e(g_1, g_2)^{ab}$ for all $a, b \in \ZZ$.

## Assumption

**Bilinear Diffie-Hellman (BDH):** Given $(g, g^a, g^b, g^c) \in \GG^4$ for a symmetric pairing group $e : \GG \times \GG \to \GG_T$, compute $e(g, g)^{abc} \in \GG_T$.

Let $\GrGen(1^\secpar)$ output $(q, \GG, \GG_T, e, g)$: cyclic groups $\GG$ and $\GG_T$ of prime order $q$, a generator $g$ of $\GG$, and a non-degenerate bilinear map $e : \GG \times \GG \to \GG_T$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{bdh}}_{\GrGen,\calA}(\secpar)$}
\begin{algorithmic}
\State $(q, \GG, \GG_T, e, g) \gets \GrGen(1^\secpar)$
\State $a, b, c \getsr \ZZ_q$
\State $Z \gets \calA(1^\secpar, q, \GG, \GG_T, e, g, g^a, g^b, g^c)$
\Return $[Z = e(g,g)^{abc}]$
\end{algorithmic}
\end{algorithm}
```

**BDH is hard** for $\GrGen$ if for all efficient $\calA$,

$$
\Adv^{\mathrm{bdh}}_{\GrGen,\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{bdh}}_{\GrGen,\calA}(\secpar) = 1\right]
$$

is negligible — [[BF01 - Identity-Based Encryption from the Weil Pairing|BF01]].

### Decisional BDH

**Decisional BDH (DBDH / BDDH):** for $\GrGen$ as in BDH above, given $(g, g^a, g^b, g^c)$ for $a, b, c \getsr \ZZ_q$, distinguish $e(g,g)^{abc}$ from uniform in $\GG_T$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{dbdh}}_{\GrGen,\calA}(\secpar)$}
\begin{algorithmic}
\State $(q, \GG, \GG_T, e, g) \gets \GrGen(1^\secpar)$
\State $a, b, c, r \getsr \ZZ_q$; $\beta \getsr \bits$
\State $Z_0 \gets e(g,g)^{abc}$; $Z_1 \gets e(g,g)^{r}$
\State $\beta' \gets \calA(1^\secpar, q, \GG, \GG_T, e, g, g^a, g^b, g^c, Z_\beta)$
\Return $[\beta' = \beta]$
\end{algorithmic}
\end{algorithm}
```

**DBDH is hard** for $\GrGen$ if for all efficient $\calA$,

$$
\Adv^{\mathrm{dbdh}}_{\GrGen,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{dbdh}}_{\GrGen,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

## Known Results

- [[bdh-to-ibe-wat09|DBDH + DLIN ⇒ IBE]]
- [[co-cdh-to-ds|co-CDH ⇒ BLS signatures]]
- [[bdh-to-vrf|k-Lin ⇒ VRF]]
- [[cdh-to-bdh|BDH ⇒ CDH]]: a CDH solver gives $g^{ab}$, and $e(g^{ab}, g^c) = e(g,g)^{abc}$ — [[BF01 - Identity-Based Encryption from the Weil Pairing|BF01]]
- [[bdh-to-nizk-gro16|DLIN ⇒ NIZK]]

# Variations

## Symmetric vs. asymmetric pairings

A pairing can be symmetric ($\GG_1 = \GG_2$) or asymmetric ($\GG_1 \ne \GG_2$). Asymmetric pairings (Type 3) support stronger assumptions ([[decisional-diffie-hellman#sxdh-symmetric-external-diffie-hellman|SXDH]]: DDH is hard in both $\GG_1$ and $\GG_2$). See [[pairings|Pairings]] for the full Type 1/2/3 classification and efficiency trade-offs — [[GPS06 - Pairings for Cryptographers|GPS06]].

## $k$-Linear assumption

Given $(g_1, \ldots, g_{k+1}, g_1^{r_1}, \ldots, g_k^{r_k})$ for $g_1, \ldots, g_{k+1} \getsr \GG$ in a cyclic group $\GG$ of prime order $q$ and $r_1, \ldots, r_k \getsr \ZZ_q$, distinguish $g_{k+1}^{r_1 + \cdots + r_k}$ from uniform in $\GG$ — [[HK07 - Secure Hybrid Encryption from Weakened Key Encapsulation|HK07]], [[Sha07 - A Cramer-Shoup Encryption Scheme from the Linear Assumption and from Progressively Weaker Linear Variants|Sha07]]. For $k = 1$ this is [[decisional-diffie-hellman|DDH]]; for $k = 2$ it is [[decisional-diffie-hellman#dlin|DLIN]].

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
\State $x_0 \gets x^{q_2}$; $x_1 \gets x$
\Comment{$x_0$ is uniform in the order-$q_1$ subgroup}
\State $b' \gets \calA(N, \GG, \GG_T, e, g, x_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

**Subgroup decision is hard** for $\GrGen$ if for all efficient $\calA$,

$$
\Adv^{\mathrm{sd}}_{\GrGen,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{sd}}_{\GrGen,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible — [[BGN05 - Evaluating 2-DNF Formulas on Ciphertexts|BGN05]].

# Attacks

- The MOV and Frey–Rück reductions use the pairing to map [[discrete-logarithm|DLOG]] in $\GG_1$ to DLOG in $\GG_T$: for $h \in \GG_2$ such that $e(g_1, h)$ has the same order as $g_1$, $\log_{g_1} X = \log_{e(g_1, h)} e(X, h)$, and for a curve over $\FF_q$ with embedding degree $k$, $\GG_T$ is a subgroup of $\FF_{q^k}^*$ — [[MVO91 - Reducing Elliptic Curve Logarithms to Logarithms in a Finite Field|MVO91]], [[FR94 - A Remark Concerning m-Divisibility and the Discrete Logarithm in the Divisor Class Group of Curves|FR94]].
- Index calculus computes discrete logarithms in every finite field in heuristic subexponential time — [[AD93 - A Subexponential Algorithm for Discrete Logarithms over All Finite Fields|AD93]] — so $k$ must be large enough for DLOG in $\FF_{q^k}^*$ to be hard; [[discrete-logarithm#attacks|DLOG § Attacks]] lists the finite-field algorithms.
- Quantum: Shor's algorithm computes discrete logarithms modulo a prime in quantum polynomial time — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]]; it extends to any group with efficient group operations on unique encodings, so it breaks discrete log in $\GG_1$, $\GG_2$ and $\GG_T$ — [[BL95 - Quantum Cryptanalysis of Hidden Linear Functions|BL95]]. See [[bqp-to-dlog-shor97|DLOG ⊆ BQP]].

<!-- BEGIN GENERATED participates-in 9e59b2e2fd10 -->

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
- [[k-linear-assumption-to-leakage-resilient-pke-ns09|d-Linear ⇒ LR-PKE]] (via [$k$-Linear assumption](bilinear-map-assumptions#k-linear-assumption))
- [[subgroup-decision-to-barg-for-np-ww22|Subgroup decision ⇒ BARG for NP]] (via [[bilinear-map-assumptions#subgroup-decision|Subgroup decision]])
- [[subgroup-decision-to-nonadaptive-nizk-argument-for-np-gos06a|Subgroup decision ⇒ Perfect NIZK arguments for NP]] (via [[bilinear-map-assumptions#subgroup-decision|Subgroup decision]])
- [[subgroup-decision-to-somewhat-homomorphic-encryption-bgn05|Subgroup decision ⇒ SHE (degree 2)]] (via [[bilinear-map-assumptions#subgroup-decision|Subgroup decision]])

**Produces Bilinear map assumptions**

- [[dbdh-to-bdh|DBDH ⇒ BDH]]

<!-- END GENERATED participates-in -->
