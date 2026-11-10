---
type: assumption
status: draft
aliases:
  - DDH
  - Decisional Diffie-Hellman
  - DLIN
title: Decisional Diffie-Hellman
id: ddh
variants:
  prime-order-ddh: "#ddh-in-prime-order-groups"
  paired-group-ddh: "#ddh-in-paired-groups"
  subexponential-ddh: "#sub-exponential-ddh"
  decisional-linear: "#dlin"
  matrix-dh: "#matrix-diffie-hellman"
  sxdh: "#sxdh-symmetric-external-diffie-hellman"
  subexponential-sxdh: "#sub-exponential-sxdh"
---

# Decisional Diffie-Hellman

The _Decisional Diffie-Hellman (DDH)_ assumption is a central assumption in cryptography, and one of the first used to construct key exchange [[DH76 - New Directions in Cryptography|DH76]]. It implies the [[computational-diffie-hellman|CDH]] assumption: an adversary which can solve the CDH problem can also solve DDH in the same group ([[ddh-to-cdh|DDH ⇒ CDH]]) — folklore.

## Assumption

Informally, the DDH assumption concerns a cyclic group generation algorithm
$\GrGen,$ which takes as input a security parameter $1^{\secpar}$ and outputs
a succinct[^1] description of a cyclic group $(\GG,g,p),$ where $\GG$ is the group
set, $g$ is a generator for the group, and $p$ is the order of the group.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{ddh}}_{\GrGen,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\GG,g,p) \gets \GrGen(1^\secpar)$
\State $x \getsr [p]$ ; $y \getsr [p]$ ; $z \getsr [p]$
\State $X \gets g^x$ ; $Y \gets g^y$
\State $b \getsr \bits$
\State $Z_0 \gets g^{xy}$ ; $Z_1 \gets g^{z}$
\State $\hat{b} \gets \calA(1^\secpar, \GG, g, p, X, Y, Z_b)$
\Return $[\hat{b} = b]$
\end{algorithmic}
\end{algorithm}
```

We say that **DDH is hard** for a group generation algorithm $\GrGen$
if for all efficient $\calA,$

$$
\Adv^{\text{ddh}}_{\GrGen,\calA}(\secpar) := \left|2 \cdot \Pr\!\left[\Game^{\text{ddh}}_{\GrGen,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

## Known Results

- [[ddh-to-cdh|DDH ⇒ CDH]]
- [[ggm-to-ddh-sho97|GGM ⇒ DDH]]
- [[ddh-to-pke-elgamal85|DDH ⇒ PKE]]
- DDH implies [[pseudorandom-function|PRF]]s via the Naor-Reingold construction, which maps inputs in $\bits^n$ to group elements using a secret exponent vector — [[NR97 - Number-Theoretic Constructions of Efficient Pseudo-Random Functions|NR97]]
- [[no-cdh-to-ddh-jn03|No fixed-construction reduction from CDH to DDH]]: DDH is easy in groups that admit efficient symmetric bilinear pairings (e.g., certain supersingular elliptic curves), where CDH can still be hard: given $(g^x, g^y, g^z)$, check whether $e(g^x, g^y) = e(g, g^z)$ — [[JN03 - Separating Decision Diffie-Hellman from Computational Diffie-Hellman in Cryptographic Groups|JN03]]
- [[no-ddh-to-ibe-prv12|No fully-black-box reduction from DDH to IBE]]
- In the [[generic-group-model|Generic Group Model]], for groups of prime order $p$, $\Adv^{\text{ddh}}_{\GrGen,\calA}(\secpar) \le O(\frac{q^2}{p})$, where $q$ is the number of queries that $\calA$ issues — [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]]

## Attacks

- **Baby-step giant-step**: a generic algorithm for the underlying discrete logarithm problem. Given $X = g^x$, it finds $x$ in $O(\sqrt{p})$ group operations and $O(\sqrt{p})$ space by writing $x = im + j$ (where $m = \lceil\sqrt{p}\rceil$) and matching $g^{im} = X \cdot g^{-j}$ across a hash table — [[Sha71 - Class Number, a Theory of Factorization, and Genera|Sha71]]. A DLOG solver breaks DDH: given $(g^x, g^y, Z)$ it computes $x$ and checks whether $Z = (g^y)^x$, so baby-step giant-step distinguishes DDH tuples in $O(\sqrt{p})$ group operations — standard.
- **DDH is easy in groups with efficient pairings**: in groups $\GG$ that admit an efficient bilinear pairing $e: \GG \times \GG \to \GG_T$ (symmetric/Type-1 pairings, e.g., certain supersingular elliptic curves), DDH is trivially broken. Given $(g^x, g^y, g^z)$, check whether $e(g^x, g^y) = e(g, g^z)$; this holds iff $z = xy$. DDH is therefore **not** a reasonable assumption in Type-1 pairing groups — see [[bilinear-map-assumptions|bilinear map assumptions]].
- **Pohlig-Hellman**: if the group order $p$ is smooth (factors into small primes), discrete log (and hence DDH) is easy via the Chinese Remainder Theorem on the prime-order subgroups. This is why DDH is only assumed in **prime-order** groups or carefully chosen subgroups.

# Variations

In the above definition, we implicitly allow $\GrGen$ to choose a _random_
generator $g$ for the group $\GG$. However, [[BMZ19 - The Distinction Between Fixed and Random Generators in Group-Based Assumptions|BMZ19]] has explored technical differences between this model and one where $g$ is selected
deterministically.

## DDH in prime-order groups

**DDH is hard in prime-order groups** for $\GrGen$ if every group $\GrGen$ outputs has prime order $p$ and DDH is hard for $\GrGen$. Exponents then form the field $\ZZ_p$, and the Chaum–Pedersen proof that a tuple is a Diffie–Hellman tuple is sound — standard.

## DDH in paired groups

A _paired group generator_ outputs two prime-order groups $(\GG, g, p)$ and $(\hat\GG, \hat g, q)$ in which $\hat\GG$ is the subgroup of order $q$ of $\ZZ_p^*$, so that $q$ divides $p - 1$. **DDH is hard in paired groups** for such a generator if DDH is hard both in the groups $\GG$ and in the groups $\hat\GG$ it outputs — [[PR07 - Rerandomizable RCCA Encryption|PR07]]. Keeping only the first group gives a group generator for which DDH is hard ([[paired-group-ddh-to-ddh|Paired-group DDH ⇒ DDH]]) — folklore.

## Sub-exponential DDH

DDH is **sub-exponentially hard** for $\GrGen$ if there is a constant $\varepsilon > 0$ such that for all sufficiently large $\secpar$, every adversary $\calA$ of size at most $2^{\secpar^{\varepsilon}}$ has $\Adv^{\text{ddh}}_{\GrGen,\calA}(\secpar) \le 2^{-\secpar^{\varepsilon}}$ — standard. The weaker form that bounds only polynomial-time adversaries by advantage $2^{-\secpar^{\varepsilon}}$ suffices for NIZK arguments for $\classNP$, and no pairing is needed — [[JJ21 - Non-interactive Zero Knowledge from Sub-exponential DDH|JJ21]].

## DLIN

Given $(u, v, h, u^a, v^b, h^c) \in \GG^6$ for $u, v, h \getsr \GG$ and $a, b \getsr \ZZ_p$, distinguish $c = a + b$ from $c \getsr \ZZ_p$ — [[BBS04 - Short Group Signatures|BBS04]].

## k-Lin

The $k$-Linear assumption is defined on [[bilinear-map-assumptions#k-linear-assumption|Bilinear map assumptions]].

## Matrix Diffie-Hellman

Let $\GrGen$ output $(\GG, g, p)$ with $p$ prime, and for $\mathbf{A} = (a_{ij}) \in \ZZ_p^{\ell \times k}$ write $g^{\mathbf{A}} := (g^{a_{ij}})_{i,j} \in \GG^{\ell \times k}$. For $\ell > k$, a _matrix distribution_ $\calD_{\ell,k}$ outputs, in polynomial time, a matrix in $\ZZ_p^{\ell \times k}$ of rank $k$; $\calD_k := \calD_{k+1,k}$. The $\calD_{\ell,k}$-MDDH assumption states that, given $g^{\mathbf{A}}$ for $\mathbf{A} \gets \calD_{\ell,k}$, no efficient adversary can tell whether a vector in $\GG^{\ell}$ lies in the span of the columns of $g^{\mathbf{A}}$ — [[EHK+13 - An Algebraic Framework for Diffie-Hellman Assumptions|EHK+13]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{mddh}}_{\calD_{\ell,k},\GrGen,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\GG, g, p) \gets \GrGen(1^\secpar)$
\State $\mathbf{A} \gets \calD_{\ell,k}$ ; $\mathbf{w} \getsr \ZZ_p^k$ ; $\mathbf{u} \getsr \ZZ_p^{\ell}$
\State $b \getsr \bits$
\State $\mathbf{z}_0 \gets \mathbf{A}\mathbf{w}$ ; $\mathbf{z}_1 \gets \mathbf{u}$
\State $\hat{b} \gets \calA(1^\secpar, \GG, g, p, g^{\mathbf{A}}, g^{\mathbf{z}_b})$
\Return $[\hat{b} = b]$
\end{algorithmic}
\end{algorithm}
```

**$\calD_{\ell,k}$-MDDH is hard** for $\GrGen$ if for all efficient $\calA$,

$$
\Adv^{\mathrm{mddh}}_{\calD_{\ell,k},\GrGen,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{mddh}}_{\calD_{\ell,k},\GrGen,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible — [[EHK+13 - An Algebraic Framework for Diffie-Hellman Assumptions|EHK+13]]. Choices of $\calD_{\ell,k}$ recover DDH, [[decisional-diffie-hellman#dlin|DLIN]] and [$k$-Lin](bilinear-map-assumptions#k-linear-assumption); two new distributions, $2$-SCasc and $2$-ILin, give MDDH assumptions that are generically hard in bilinear groups and have a shorter description than $2$-Lin — [[EHK+13 - An Algebraic Framework for Diffie-Hellman Assumptions|EHK+13]].

## SXDH (Symmetric External Diffie-Hellman)

Assumes DDH is hard in both $\GG_1$ and $\GG_2$ of an asymmetric (Type 3) pairing; used to instantiate Groth–Sahai proofs efficiently — [[GS08 - Efficient Non-interactive Proof Systems for Bilinear Groups|GS08]].

### Sub-exponential SXDH

SXDH is **sub-exponentially hard** if there is a constant $\varepsilon > 0$ such that for all sufficiently large $\secpar$, every adversary of size at most $2^{\secpar^{\varepsilon}}$ has advantage at most $2^{-\secpar^{\varepsilon}}$ against DDH in each of $\GG_1$ and $\GG_2$.

[^1]:
    Succinct means that the tuple $(\GG,g,p)$ is at most
    $\poly(\secpar)$-bits, but $|\GG| = p$ may be super-polynomial in $\secpar.$

<!-- BEGIN GENERATED participates-in 7c12aab5c0b5 -->

## Participates in

**Builds on Decisional Diffie-Hellman**

- [[bdh-to-hibe-wat09|DBDH + DLIN ⇒ HIBE]] (via [[decisional-diffie-hellman#dlin|DLIN]])
- [[bdh-to-ibe-wat09|DBDH + DLIN ⇒ IBE]] (via [[decisional-diffie-hellman#dlin|DLIN]])
- [[bilinear-pairing-and-dlin-to-continual-leakage-resilient-pke-bkkv10|Bilinear pairing + DLIN ⇒ CLR-PKE]] (via [[decisional-diffie-hellman#dlin|DLIN]])
- [[bilinear-pairing-and-dlin-to-zap-gos06|Bilinear pairing + DLIN ⇒ Zaps (non-interactive)]] (via [[decisional-diffie-hellman#dlin|DLIN]])
- [[bilinear-pairing-q-sdh-and-dlin-to-cpa-anonymous-group-signature-bbs04|Bilinear pairing + q-SDH + DLIN ⇒ CPA-anonymous group signatures (Boneh–Boyen–Shacham)]] (via [[decisional-diffie-hellman#dlin|DLIN]])
- [[ddh-and-lpn-and-lwe-and-nc1-prg-to-io-jls21|Sub-exponential SXDH + LWE + LPN + NC0-PRG ⇒ iO]] (via [[decisional-diffie-hellman#sub-exponential-sxdh|Sub-exponential SXDH]])
- [[ddh-and-sparse-learning-parity-with-noise-to-somewhat-homomorphic-encryption-she-chkv25|DDH + Sparse Learning Parity with Noise ⇒ Somewhat homomorphic encryption (SHE)]]
- [[ddh-and-uowhf-to-pke-cca2-security-cs98|DDH + UOWHF ⇒ CCA-secure PKE (Cramer–Shoup)]]
- [[ddh-to-anonymous-public-key-encryption-bbdp01|DDH ⇒ Key-hiding PKE (ElGamal)]]
- [[ddh-to-cdh|DDH ⇒ CDH]]
- [[ddh-to-client-preprocessing-pir-chk22|DDH ⇒ PIR with client preprocessing (CHK22)]]
- [[ddh-to-four-round-mpc-bgj18|DDH ⇒ Four-round MPC (Badrinarayanan–Goyal–Jain–Kalai–Khurana–Sahai)]]
- [[ddh-to-lossy-trapdoor-function-pw08|DDH ⇒ Highly lossy TDF (Peikert–Waters)]]
- [[ddh-to-malicious-ot-security-pvw08|DDH ⇒ Two-round UC-secure OT (PVW)]]
- [[ddh-to-non-interactive-key-exchange-nike|DDH ⇒ Non-interactive key exchange (NIKE)]]
- [[ddh-to-pake-koy01|DDH ⇒ PAKE in the CRS model (Katz–Ostrovsky–Yung)]]
- [[ddh-to-partially-homomorphic-encryption-phe-elgamal85|DDH ⇒ Multiplicatively homomorphic encryption]]
- [[ddh-to-pke-elgamal85|DDH ⇒ PKE]]
- [[ddh-to-prf-nr97|DDH ⇒ PRF (Naor–Reingold)]]
- [[ddh-to-rerandomizable-rcca-encryption-pr07|Paired-group DDH ⇒ Rerandomizable RCCA encryption (Double-strand Cramer–Shoup)]] (via [[decisional-diffie-hellman#ddh-in-paired-groups|DDH in paired groups]])
- [[ddh-to-tdh-dgi-19|DDH ⇒ TDH]]
- [[decisional-linear-to-pke-bbs04|DLIN ⇒ PKE (Linear Encryption)]] (via [[decisional-diffie-hellman#dlin|DLIN]])
- [[dlin-to-ippe-ksw08|Bilinear pairing + DLIN ⇒ IPPE]] (via [[decisional-diffie-hellman#dlin|DLIN]])
- [[bdh-to-nizk-gro16|Bilinear pairing + DLIN ⇒ NIZK]] (via [[decisional-diffie-hellman#dlin|DLIN]])
- [[lpn-low-noise-and-ddh-to-nizk-argument-for-np-bkm20|Low-noise LPN + DDH ⇒ NIZK argument for NP]]
- [[paired-group-ddh-to-ddh|Paired-group DDH ⇒ DDH]] (via [[decisional-diffie-hellman#ddh-in-paired-groups|DDH in paired groups]])
- [[prime-order-ddh-to-ddh|Prime-order DDH ⇒ DDH]] (via [[decisional-diffie-hellman#ddh-in-prime-order-groups|DDH in prime-order groups]])
- [[prime-order-ddh-to-katz-wang-signature-kw03|Prime-order DDH ⇒ Katz–Wang signatures]] (via [[decisional-diffie-hellman#ddh-in-prime-order-groups|DDH in prime-order groups]])
- [[prime-order-ddh-to-leakage-resilient-pke-ns09|DDH ⇒ LR-PKE]] (via [[decisional-diffie-hellman#ddh-in-prime-order-groups|DDH in prime-order groups]])
- [[prime-order-ddh-to-pre|DDH ⇒ PRE (Blaze–Bleumer–Strauss scheme)]] (via [[decisional-diffie-hellman#ddh-in-prime-order-groups|DDH in prime-order groups]])
- [[prime-order-ddh-to-universal2-hash-proof-system-cs02|DDH ⇒ Universal-2 HPS]] (via [[decisional-diffie-hellman#ddh-in-prime-order-groups|DDH in prime-order groups]])
- [[subexponential-ddh-to-ddh|Sub-exponential DDH ⇒ DDH]] (via [[decisional-diffie-hellman#sub-exponential-ddh|Sub-exponential DDH]])
- [[subexponential-ddh-to-nizk-argument-for-np-jj21|Sub-exponential DDH ⇒ NIZK argument for NP]] (via [[decisional-diffie-hellman#sub-exponential-ddh|Sub-exponential DDH]])
- [[subexponential-ddh-to-ppad-hardness-klv23|Sub-exponential DDH ⇒ PPAD hardness]] (via [[decisional-diffie-hellman#sub-exponential-ddh|Sub-exponential DDH]])
- [[subexponential-sxdh-to-subexponential-ddh|Sub-exponential SXDH ⇒ Sub-exponential DDH]] (via [[decisional-diffie-hellman#sub-exponential-sxdh|Sub-exponential SXDH]])
- [[subexponential-sxdh-to-sxdh|Sub-exponential SXDH ⇒ SXDH]] (via [[decisional-diffie-hellman#sub-exponential-sxdh|Sub-exponential SXDH]])
- [[sxdh-symmetric-external-diffie-hellman-to-nizk|SXDH (Symmetric External Diffie-Hellman) ⇒ NIZK]] (via [[decisional-diffie-hellman#sxdh-symmetric-external-diffie-hellman|SXDH (Symmetric External Diffie-Hellman)]])
- [[sxdh-to-ddh|SXDH ⇒ DDH]] (via [[decisional-diffie-hellman#sxdh-symmetric-external-diffie-hellman|SXDH (Symmetric External Diffie-Hellman)]])
- [[sxdh-to-structure-preserving-signature-kpw15|SXDH ⇒ Structure-preserving signatures (Kiltz–Pan–Wee)]] (via [[decisional-diffie-hellman#sxdh-symmetric-external-diffie-hellman|SXDH (Symmetric External Diffie-Hellman)]])
- [[type-1-pairing-and-dlin-to-structure-preserving-signature-hj12|Type 1 pairing + DLIN ⇒ Structure-preserving signatures, tightly (Hofheinz–Jager)]] (via [[decisional-diffie-hellman#dlin|DLIN]])

**Produces Decisional Diffie-Hellman**

- [[ggm-to-ddh-sho97|GGM ⇒ DDH]]
- [[paired-group-ddh-to-ddh|Paired-group DDH ⇒ DDH]]
- [[prime-order-ddh-to-ddh|Prime-order DDH ⇒ DDH]]
- [[subexponential-ddh-to-ddh|Sub-exponential DDH ⇒ DDH]]
- [[subexponential-sxdh-to-subexponential-ddh|Sub-exponential SXDH ⇒ Sub-exponential DDH]] (via [[decisional-diffie-hellman#sub-exponential-ddh|Sub-exponential DDH]])
- [[subexponential-sxdh-to-sxdh|Sub-exponential SXDH ⇒ SXDH]] (via [[decisional-diffie-hellman#sxdh-symmetric-external-diffie-hellman|SXDH (Symmetric External Diffie-Hellman)]])
- [[sxdh-to-ddh|SXDH ⇒ DDH]]

**Barriers**

- [[no-cdh-to-ddh-jn03|No fixed-construction reduction from CDH to DDH]]
- [[no-ddh-to-ibe-prv12|No fully-black-box reduction from DDH to IBE]] — circumvented by [[cdh-to-ind-id-cpa-dg17a|CDH ⇒ IBE (Döttling–Garg)]]

<!-- END GENERATED participates-in -->
